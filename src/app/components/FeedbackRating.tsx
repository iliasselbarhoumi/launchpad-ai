import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/app/components/ui/slider";
import { toast } from "sonner";

interface FeedbackRatingProps {
  value?: number;
  onChange: (value: number) => void;
  type: string;
  comments: string;
}

const ratings = [
  { value: 1, label: "Terrible", emoji: "😠", colorHsl: "0 84% 60%" }, // Red
  { value: 2, label: "Bad", emoji: "😟", colorHsl: "338 84% 61%" },
  { value: 3, label: "Okay", emoji: "😐", colorHsl: "315 85% 63%" },
  { value: 4, label: "Good", emoji: "😊", colorHsl: "293 85% 64%" },
  { value: 5, label: "Amazing!", emoji: "🤩", colorHsl: "270 85% 65%" }, // Purple
];

const FeedbackRating = ({
  value,
  onChange,
  type,
  comments,
}: FeedbackRatingProps) => {
  const displayValue = value ?? 5;
  const selectedRating =
    ratings.find((r) => r.value === displayValue) || ratings[4];

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
        defaultValue={[5]}
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
