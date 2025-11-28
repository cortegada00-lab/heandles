import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className || 'mt-12'}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="h-10 w-10 rounded-full border-gray-200"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-full font-bold ${
            currentPage === page 
              ? "bg-black text-white hover:bg-gray-800 border-none" 
              : "border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="h-10 w-10 rounded-full border-gray-200"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}