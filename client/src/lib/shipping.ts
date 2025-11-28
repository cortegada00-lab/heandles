import { addDays, format, isFriday, isSaturday, isSunday, isThursday, setHours, setMinutes, isAfter } from "date-fns";
import { es } from "date-fns/locale";

export function getDeliveryDate(): string {
  const now = new Date();
  const cutoff = setMinutes(setHours(now, 18), 0); // Today 18:00
  let deliveryDate = now;

  const isAfterCutoff = isAfter(now, cutoff);
  
  if (isSaturday(now)) {
     // Sat -> Ship Mon -> Arrive Tue
     deliveryDate = addDays(now, 3); 
  } else if (isSunday(now)) {
     // Sun -> Ship Mon -> Arrive Tue
     deliveryDate = addDays(now, 2); 
  } else if (isFriday(now)) {
     if (isAfterCutoff) {
        // Fri > 18 -> Ship Mon -> Arrive Tue
        deliveryDate = addDays(now, 4); 
     } else {
        // Fri < 18 -> Ship Fri -> Arrive Mon
        deliveryDate = addDays(now, 3); 
     }
  } else {
     // Mon-Thu
     if (isAfterCutoff) {
        // Ship tomorrow, Arrive day after tomorrow
        if (isThursday(now)) {
            // Thu > 18 -> Ship Fri -> Arrive Mon
            deliveryDate = addDays(now, 4);
        } else {
            deliveryDate = addDays(now, 2);
        }
     } else {
        // Ship today, Arrive tomorrow
        deliveryDate = addDays(now, 1);
     }
  }

  return format(deliveryDate, "EEEE d", { locale: es });
}
