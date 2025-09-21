// src/pages/Portfolio.js
import React from 'react';
import { Box, SimpleGrid } from "@chakra-ui/react";
import Headline from "../components/Headline";
import TitlePages from "../components/TitlePages";
import CardProjects from "../components/CardProjects";

export default function Portfolio() {
  const projects = [
    {
      source: "/Portfolio.png",
      reference: "https://github.com/MichellePerezS/michelleperez",
      bd: "ReactJS",
      bd2: "ChakraUI",
    },
    {
      source: "/Portfolio.png",
      reference: "https://github.com/MichellePerezS/automataWeb",
      bd: "Automata",
      bd2: "React",
    },
    {
      source: "/Portfolio.png",
      reference: "https://github.com/MichellePerezS",
      bd: "Profile",
      bd2: "GitHub",
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