import { Box, Text } from "@chakra-ui/react";
import PlanComponentCard from "../components/PlanComponentCard";
import { useState } from "react";

function Plan() {
  const [activePlan, setActivePlan] = useState<"monthly" | "yearly">("monthly");

  const handlePlanSelection = (plan: "monthly" | "yearly") => {
    setActivePlan(plan);
  };

  // Styles for selected and unselected buttons
  const planStyles = {
    selected: {
      bg: "#1F1F1F",
      p: "0.4rem 0.8rem",
      color: "#ffffff",
      fontSize: "0.8rem",
      borderRadius: "8px",
      cursor: "pointer",
    },
    unSelected: {
      color: "#BFBFBF",
      fontSize: "0.8rem",
      cursor: "pointer",
    },
  };

  return (
    <Box position="relative" p={{base:"1rem",sm:"1rem", md:"1rem 3rem", lg:"1rem 4rem", xl:"1rem 6rem"}} mt="3rem">
      {/* Header Section */}
      <Box
        width="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        gap="2rem"
      >
        <Box>
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} color="#ffffff" fontWeight="bold">
            Choose the plan that's right for you.
          </Text>
          <Text fontSize={{ base: "0.8rem", md: "1rem" }} color="#999999" marginTop="4px">
            Join StreamVibe and select from our flexible subscription options tailored to suit your
            viewing preferences. Get ready for non-stop entertainment!
          </Text>
        </Box>

        {/* Plan Selection Buttons */}
        <Box
          display="flex"
          gap="1rem"
          bg="#0F0F0F"
          border="1px solid #1F1F1F"
          borderRadius="16px"
          p="0.8rem"
          alignItems="center"
        >
          <Box
            {...(activePlan === "monthly" ? planStyles.selected : planStyles.unSelected)}
            onClick={() => handlePlanSelection("monthly")}
          >
            Monthly
          </Box>
          <Box
            {...(activePlan === "yearly" ? planStyles.selected : planStyles.unSelected)}
            onClick={() => handlePlanSelection("yearly")}
          >
            Yearly
          </Box>
        </Box>
      </Box>

      {/* Plan Details Section */}
      <Box>
        <PlanComponentCard activePlan={activePlan}/>
      </Box>
    </Box>
  );
}

export default Plan;
