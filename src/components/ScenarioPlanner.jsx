
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CreateScenario } from "./CreateScenario";
import { ScenarioResults } from "./ScenarioResults";

export const ScenarioPlanner = () => {
  const [income, setIncome] = useState(0);
  const [scenarios, setScenarios] = useState([]);
  const [showCreateScenario, setShowCreateScenario] = useState(false);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6">
          <Button
            onClick={() => setShowCreateScenario(true)}
            className="w-full md:w-auto"
          >
            Create New Scenario
          </Button>
        </Card>
      </motion.div>

      <AnimatePresence>
        {showCreateScenario && (
          <CreateScenario
            income={income}
            scenarios={scenarios}
            setScenarios={setScenarios}
            onClose={() => setShowCreateScenario(false)}
          />
        )}
      </AnimatePresence>

      {scenarios.length > 0 && (
        <ScenarioResults scenarios={scenarios} />
      )}
    </div>
  );
};
