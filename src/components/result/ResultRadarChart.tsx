import React from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ScoreSection } from '@/lib/assessmentUtils';

interface ResultRadarChartProps {
  data: ScoreSection[];
}

const chartConfig = {
  score: {
    label: "Score",
    color: "#6936F5",
  },
} satisfies ChartConfig;

const ResultRadarChart: React.FC<ResultRadarChartProps> = ({ data }) => {
  const chartData = data.map(section => ({
    name: section.name,
    score: section.percentage,
    fullMark: 100,
  }));

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[300px] sm:h-[350px]">
      <RadarChart data={chartData} outerRadius="70%">
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis
          dataKey="name"
          tick={({ payload, x, y, textAnchor, ...rest }) => (
            <text
              x={x}
              y={y}
              textAnchor="middle"
              fontSize="0.75rem"
              width={40}
              alignmentBaseline="mathematical"
              {...rest}
            >
              {payload.value}
            </text>
          )}
        />
        <PolarGrid />
        <Radar
          dataKey="score"
          fill="var(--color-score)"
          fillOpacity={0.6}
          stroke="var(--color-score)"
        />
      </RadarChart>
    </ChartContainer>
  );
};

export default ResultRadarChart;
