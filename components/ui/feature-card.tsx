import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  number,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("text-left", className)}>
      <div className="text-primary text-5xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
