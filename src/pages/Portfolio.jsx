// src/pages/Portfolio.js
import React from 'react';
import { Box, SimpleGrid } from "@chakra-ui/react";
import Headline from "../components/Headline";
import TitlePages from "../components/TitlePages";
import CardProjects from "../components/CardProjects";

export default function Portfolio() {
  const projects = [
    {
      source: "/hospital_eda_preview.png", 
      reference: "https://github.com/MichellePerezS/Hospital_Data_Gender_Analysis",
      bd: "Python / Pandas",
      bd2: "Data Science / HealthTech",
    },
    {
      source: "/mozartianos_preview.png", 
      reference: "https://mozartianos.com/", 
      bd: "SvelteKit / Vite",
      bd2: "Deployment / Web",
    },
  ];

  return (
    <Box boxShadow="lg" borderRadius="md" p={4}>
      <Headline title="Portfolio" />
      <TitlePages title="Check out my featured projects" />

      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={6} 
        mt={6}
      >
        {projects.map((proj, index) => (
          <CardProjects
            key={index}
            source={proj.source}
            reference={proj.reference}
            bd={proj.bd}
            bd2={proj.bd2}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}