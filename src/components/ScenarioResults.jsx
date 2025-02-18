
import { Card } from "./ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#10B981", "#F59E0B", "#EF4444"];

export const ScenarioResults = ({ scenarios }) => {
  const scenarioData = scenarios.map((scenario) => ({
    name: scenario.name,
    monthlySavings: scenario.requiredMonthlySavings,
    totalCost: scenario.eventCost,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-6"
    >
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Scenario Comparison</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scenarioData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="monthlySavings" 
                fill={COLORS[0]} 
                name="Monthly Savings Required" 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {scenarios.map((scenario, index) => (
            <div key={index} className="p-3 bg-secondary rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">{scenario.name}</span>
                <span className="text-sm text-primary">
                  ${scenario.requiredMonthlySavings.toFixed(2)}/month
                </span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {scenario.recommendation}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
