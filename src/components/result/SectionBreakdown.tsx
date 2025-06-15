import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ScoreSection } from "@/lib/assessmentUtils";

interface SectionBreakdownProps {
  sections: ScoreSection[];
}

const chartConfig = {
  percentage: {
    label: "Score %",
  },
} satisfies ChartConfig;

const SectionBreakdown: React.FC<SectionBreakdownProps> = ({ sections }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          type="multiple"
          defaultValue={sections.length > 0 ? [sections[0].name] : []}
          className="w-full"
        >
          {sections.map((section) => {
            const chartHeight = section.categories.length * 40 + 40;
            const hasMeaningfulCategories =
              section.categories.length > 0 &&
              section.categories.some((c) => c.name !== "");

            return (
              <AccordionItem value={section.name} key={section.name}>
                <AccordionTrigger>{section.name}</AccordionTrigger>
                <AccordionContent>
                  {hasMeaningfulCategories ? (
                    <div
                      style={{ height: `${chartHeight}px` }}
                      className="w-full pr-4"
                    >
                      <ChartContainer
                        config={chartConfig}
                        className="w-full h-full"
                      >
                        <BarChart
                          accessibilityLayer
                          data={section.categories}
                          layout="vertical"
                          margin={{ left: 20 }}
                        >
                          <defs>
                            <linearGradient
                              id="barGradient"
                              x1="0"
                              y1="0"
                              x2="1"
                              y2="0"
                            >
                              <stop offset="5%" stopColor="#9B87F5" />
                              <stop offset="95%" stopColor="#6936F5" />
                            </linearGradient>
                          </defs>
                          <XAxis type="number" domain={[0, 100]} hide />
                          <YAxis
                            dataKey="name"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            width={180}
                            className="text-sm"
                          />
                          <Tooltip
                            cursor={false}
                            content={
                              <ChartTooltipContent
                                indicator="line"
                                labelKey="name"
                                color="#6936F5"
                              />
                            }
                          />
                          <Bar
                            dataKey="percentage"
                            layout="vertical"
                            radius={5}
                            fill="url(#barGradient)"
                          />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  ) : (
                    <p className="text-slate-500 px-4 pb-4">
                      This section contributes to your overall score but does
                      not have a detailed category breakdown.
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default SectionBreakdown;
