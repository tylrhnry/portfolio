

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import JobTemplate from "../Jobs/JobTemplate";
import { FeaturedJobs } from "../Jobs/JobsData";

const BriefWorkHis: React.FC = () => {
  const [expandedAccordion, setExpanded] = useState<number | null>(null);

  const handleExpanding = (index: number, isExpanded: boolean) => {
    setExpanded(isExpanded ? index : null);
  };


  return (

    <Box sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>
      <Container>
      <Typography variant="h5" sx={{
          padding: "1rem",
        }}>Brief Work History</Typography>
      {FeaturedJobs.map((job, index) => (
        <JobTemplate
          key={index}
          title={job.title}
          description={job.description}
          index={index}
          isExpanded={index === expandedAccordion}
          onExpandChange={(isExpanded) => handleExpanding(index, isExpanded)}
        />
      ))}
      </Container>
    </Box>
  );
}


export default BriefWorkHis;