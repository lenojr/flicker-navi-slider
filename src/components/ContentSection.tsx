
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  withBackground?: boolean;
  centered?: boolean;
}

const ContentSection = ({
  id,
  title,
  subtitle,
  children,
  className,
  withBackground = false,
  centered = true,
}: ContentSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        withBackground && "bg-secondary",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title={title} 
          subtitle={subtitle} 
          centered={centered} 
        />
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
