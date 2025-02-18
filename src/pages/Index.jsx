
import { motion } from "framer-motion";
import { ScenarioPlanner } from "../components/ScenarioPlanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-8"
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Scenario Planner
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Smart Scenario Planning
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plan and simulate different scenarios to make informed decisions about your future.
          </p>
        </div>
        <ScenarioPlanner />
      </motion.div>
    </div>
  );
};

export default Index;
