import React from "react";
import { List, LayoutGrid } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

interface ViewSwitcherProps {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ view, setView }) => {
  return (
    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setView("list")}
        className={cn(
          "px-3 h-8",
          view === "list" && "bg-white shadow-sm text-primary"
        )}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setView("grid")}
        className={cn(
          "px-3 h-8",
          view === "grid" && "bg-white shadow-sm text-primary"
        )}
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewSwitcher;
