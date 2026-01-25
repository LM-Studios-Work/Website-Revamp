import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  role: string;
  description: string;
  className?: string;
}

export function TeamMemberCard({
  role,
  description,
  className,
}: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-8 text-center",
        className
      )}
    >
      <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
        <svg
          className="w-12 h-12 text-muted-foreground"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{role}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
