import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import {
  FileText,
  Target,
  Briefcase,
  TrendingUp,
  DollarSign,
  Award,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import { cn } from "@/lib/utils";
import { Idea } from "@/app/components/ideas/IdeaCard";

export interface Plan {
  businessConcept: {
    elevatorPitch: string;
    problem: string;
    solution: string;
    targetAudience: string;
    uniqueValueProposition: string;
  };
  marketIntelligence: {
    marketSize: string;
    marketData: Array<{ name: string; value: number }>;
    trends: string[];
    competitors: Array<{
      name: string;
      strengths: string;
      weaknesses: string;
      gap: string;
    }>;
  };
  productStrategy: {
    coreFeatures: Array<{
      name: string;
      description: string;
      priority: string;
      aiPowered: boolean;
    }>;
    mvpScope: string;
  };
  goToMarket: {
    strategy: string;
    channels: string[];
    initialTractionMetric: string;
  };
  financials: {
    model: string;
    risks: Array<{
      risk: string;
      mitigation: string;
    }>;
  };
  evaluation: {
    score: number;
    summary: string;
    strategicOptionalities: string[];
  };
}

interface MvpPlanResultProps {
  idea: Idea;
  plan: Plan;
}

const planSections = [
  { id: "business-concept", title: "Business Concept", icon: FileText },
  { id: "market-intelligence", title: "Market Intelligence", icon: Target },
  { id: "product-strategy", title: "Product Strategy", icon: Briefcase },
  { id: "go-to-market", title: "Go-to-Market", icon: TrendingUp },
  { id: "financials", title: "Financials", icon: DollarSign },
  { id: "evaluation", title: "Evaluation", icon: Award },
];

const SectionHeader = ({
  id,
  title,
  icon: Icon,
}: {
  id: string;
  title: string;
  icon: React.ElementType;
}) => (
  <div
    id={id}
    className="flex items-center gap-3 pt-6 mb-6 border-t border-slate-200/80 first:pt-0 first:border-t-0 scroll-mt-28"
  >
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
      <Icon className="w-5 h-5 text-slate-600" />
    </div>
    <h2 className="text-2xl font-bold font-display text-slate-800">{title}</h2>
  </div>
);

const InfoBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardDescription className="uppercase font-semibold tracking-wider">
        {title}
      </CardDescription>
    </CardHeader>
    <CardContent className="prose prose-slate max-w-none text-slate-800">
      {children}
    </CardContent>
  </Card>
);

const MarketSizeChart = ({
  data,
}: {
  data: Array<{ name: string; value: number }>;
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Market Size (in Billions USD)</CardTitle>
      <CardDescription>TAM, SAM, & SOM estimates.</CardDescription>
    </CardHeader>
    <CardContent>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              cursor={{ fill: "hsl(var(--muted))" }}
              contentStyle={{
                background: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const EvaluationScoreGauge = ({ score }: { score: number }) => {
  const data = [{ name: "score", value: score }];
  return (
    <Card className="flex flex-col items-center justify-center text-center">
      <CardHeader>
        <CardTitle>Overall Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: 180 }}>
          <ResponsiveContainer>
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={data}
              startAngle={180}
              endAngle={0}
              barSize={30}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 10]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                dataKey="value"
                cornerRadius={15}
                angleAxisId={0}
                fill="hsl(var(--primary))"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-4xl font-bold font-display text-slate-800 -mt-16">
          {score}/10
        </p>
      </CardContent>
    </Card>
  );
};

const MvpPlanResult: React.FC<MvpPlanResultProps> = ({ idea, plan }) => {
  const [activeSection, setActiveSection] = useState(planSections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    planSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-8 lg:gap-12"
    >
      <aside className="md:w-1/4 lg:w-1/5 md:sticky top-28 self-start">
        <nav>
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
            Plan Sections
          </h3>
          <ul>
            {planSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "block py-2 px-3 rounded-md font-medium transition-colors text-base flex items-center gap-3",
                    activeSection === section.id
                      ? "bg-launcherpad-purple/10 text-launcherpad-purple"
                      : "hover:bg-slate-100 text-slate-700"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <section.icon className="h-4 w-4" />
                  <span>{section.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 min-w-0">
        <Card className="overflow-hidden mb-8">
          <CardHeader className="bg-slate-50/70 border-b">
            <p className="text-sm font-medium text-launcherpad-purple">
              AI-Generated Business Plan
            </p>
            <CardTitle className="text-2xl md:text-3xl font-display font-bold">
              {idea.title}
            </CardTitle>
          </CardHeader>
        </Card>

        <div className="space-y-12">
          <section>
            <SectionHeader
              id="business-concept"
              title="Business Concept"
              icon={FileText}
            />
            <div className="space-y-4">
              <InfoBlock title="Elevator Pitch">
                {plan.businessConcept.elevatorPitch}
              </InfoBlock>
              <InfoBlock title="Problem">
                {plan.businessConcept.problem}
              </InfoBlock>
              <InfoBlock title="Solution">
                {plan.businessConcept.solution}
              </InfoBlock>
              <InfoBlock title="Target Audience">
                {plan.businessConcept.targetAudience}
              </InfoBlock>
              <InfoBlock title="Unique Value Proposition">
                {plan.businessConcept.uniqueValueProposition}
              </InfoBlock>
            </div>
          </section>

          <section>
            <SectionHeader
              id="market-intelligence"
              title="Market Intelligence"
              icon={Target}
            />
            <div className="space-y-4">
              <InfoBlock title="Market Size & Opportunity">
                {plan.marketIntelligence.marketSize}
              </InfoBlock>
              <MarketSizeChart data={plan.marketIntelligence.marketData} />
              <Card>
                <CardHeader>
                  <CardTitle>Key Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {plan.marketIntelligence.trends.map((trend: string) => (
                      <li key={trend}>{trend}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Competitor Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.marketIntelligence.competitors.map((c) => (
                    <div key={c.name} className="p-4 border rounded-lg">
                      <h4 className="font-bold text-lg text-slate-800">
                        {c.name}
                      </h4>
                      <p>
                        <strong className="font-semibold">Strengths:</strong>{" "}
                        {c.strengths}
                      </p>
                      <p>
                        <strong className="font-semibold">Weaknesses:</strong>{" "}
                        {c.weaknesses}
                      </p>
                      <p className="mt-2 p-2 bg-slate-50 rounded">
                        <strong className="font-semibold text-launcherpad-purple">
                          Gap / Opportunity:
                        </strong>{" "}
                        {c.gap}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <SectionHeader
              id="product-strategy"
              title="Product Strategy"
              icon={Briefcase}
            />
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Core Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2">Feature</th>
                          <th className="p-2">Priority</th>
                          <th className="p-2">AI?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {plan.productStrategy.coreFeatures.map((f) => (
                          <tr key={f.name} className="border-b">
                            <td className="p-2">
                              <strong className="font-semibold">
                                {f.name}
                              </strong>
                              <p className="text-sm text-slate-600">
                                {f.description}
                              </p>
                            </td>
                            <td className="p-2">{f.priority}</td>
                            <td className="p-2">
                              {f.aiPowered ? (
                                <CheckCircle className="text-green-500" />
                              ) : (
                                <XCircle className="text-red-500" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <InfoBlock title="MVP Scope">
                {plan.productStrategy.mvpScope}
              </InfoBlock>
            </div>
          </section>

          <section>
            <SectionHeader
              id="go-to-market"
              title="Go-to-Market"
              icon={TrendingUp}
            />
            <div className="space-y-4">
              <InfoBlock title="Strategy">{plan.goToMarket.strategy}</InfoBlock>
              <Card>
                <CardHeader>
                  <CardTitle>Acquisition Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {plan.goToMarket.channels.map((channel: string) => (
                      <li key={channel}>{channel}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <InfoBlock title="Initial Traction Metric">
                {plan.goToMarket.initialTractionMetric}
              </InfoBlock>
            </div>
          </section>

          <section>
            <SectionHeader
              id="financials"
              title="Financials"
              icon={DollarSign}
            />
            <div className="space-y-4">
              <InfoBlock title="Business Model">
                {plan.financials.model}
              </InfoBlock>
              <Card>
                <CardHeader>
                  <CardTitle>Risks & Mitigations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.financials.risks.map((r) => (
                    <div key={r.risk} className="p-4 border rounded-lg">
                      <h4 className="font-bold text-slate-800">{r.risk}</h4>
                      <p className="mt-1 text-slate-600">{r.mitigation}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <SectionHeader id="evaluation" title="Evaluation" icon={Award} />
            <div className="grid md:grid-cols-2 gap-4">
              <EvaluationScoreGauge score={plan.evaluation.score} />
              <div className="space-y-4">
                <InfoBlock title="Summary">{plan.evaluation.summary}</InfoBlock>
                <Card>
                  <CardHeader>
                    <CardTitle>Strategic Optionalities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                      {plan.evaluation.strategicOptionalities.map(
                        (item: string) => (
                          <li key={item}>{item}</li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
};

export default MvpPlanResult;
