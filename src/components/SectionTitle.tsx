
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        "mb-12 space-y-2",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
