import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface FeedbackRatingProps {
  value?: number;
  onChange: (value: number) => void;
}

const ratings = [
  { value: 1, label: "Terrible", emoji: "😠", colorHsl: "0 84% 60%" },
  { value: 2, label: "Bad", emoji: "😟", colorHsl: "25 95% 53%" },
  { value: 3, label: "Okay", emoji: "😐", colorHsl: "45 93% 47%" },
  { value: 4, label: "Good", emoji: "😊", colorHsl: "142 71% 45%" },
  { value: 5, label: "Amazing!", emoji: "🤩", colorHsl: "333 83% 54%" },
];

const FeedbackRating = ({ value, onChange }: FeedbackRatingProps) => {
  const displayValue = value ?? 3;
  const selectedRating =
    ratings.find((r) => r.value === displayValue) || ratings[2];

  const labelText =
    value !== undefined ? selectedRating.label : "How was your experience?";
  const sliderColorHsl =
    value !== undefined ? selectedRating.colorHsl : undefined;

  const hue = selectedRating.colorHsl.split(" ")[0];
  const iconBgColor =
    value !== undefined ? `hsla(${hue}, 90%, 95%, 1)` : "hsl(var(--muted))";

  return (
    <div
      className="flex flex-col items-center gap-4 w-full pt-4 text-center"
      style={{ "--slider-color": sliderColorHsl } as React.CSSProperties}
    >
      <div
        className="h-28 w-28 rounded-full flex items-center justify-center transition-colors duration-500"
        style={{ backgroundColor: iconBgColor }}
      >
        <span
          className="text-7xl transition-all duration-500 ease-in-out"
          style={{
            transform: `scale(${1 + (displayValue - 3) * 0.12}) rotate(${
              (displayValue - 3) * 6
            }deg)`,
            display: "inline-block",
          }}
        >
          {selectedRating.emoji}
        </span>
      </div>
      <span
        className={cn(
          "text-xl font-bold min-h-[32px] transition-colors duration-500",
          !value && "text-muted-foreground"
        )}
        style={{
          color:
            value !== undefined ? `hsl(${selectedRating.colorHsl})` : undefined,
        }}
      >
        {labelText}
      </span>
      <Slider
        defaultValue={[3]}
        value={value !== undefined ? [value] : undefined}
        onValueChange={(vals) => onChange(vals[0])}
        min={1}
        max={5}
        step={1}
        className="w-full max-w-xs pt-2"
      />
      <div className="flex justify-between w-full max-w-xs text-sm text-muted-foreground font-medium">
        <span>Terrible</span>
        <span>Amazing!</span>
      </div>
    </div>
  );
};

export { FeedbackRating };
