import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"
import React from "react"

export interface BreadcrumbItemType {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItemType[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="flex-nowrap overflow-x-auto py-1 scrollbar-hide">
        <BreadcrumbItem className="shrink-0">
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Inicio</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.length > 0 && <BreadcrumbSeparator className="shrink-0" />}
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem className="shrink-0 whitespace-nowrap">
                {isLast ? (
                  <BreadcrumbPage className="font-bold text-foreground truncate max-w-[150px] sm:max-w-xs">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className="shrink-0" />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
