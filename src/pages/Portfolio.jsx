// src/pages/Portfolio.js
import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Headline from "../components/Headline";
import TitlePages from "../components/TitlePages";
import CardProjects from "../components/CardProjects";

export default function Portfolio() {
  return (
    <Box boxShadow="lg" borderRadius="md" p={4}>
      <Headline title="Portfolio" />
      <TitlePages title="Check out my featured projects" />
      <Flex 
        justifyContent="space-between" 
        flexDirection="row" 
        flexWrap="wrap"
        gap={4}
      >
        <CardProjects
          source="./Portfolio.png"
          reference="https://github.com/MichellePerezS/michelleperez"
          bd="ReactJS"
          bd2="ChakraUI"
        />
        <CardProjects
          source="https://www.lineaverdeceutatrace.com/lv/consejos-ambientales/apps-ambientales/img/eco-apps.png"
          reference="https://github.com/MichellePerezS/automataWeb"
          bd="Automata"
          bd2="React"
        />
        <CardProjects
          source="https://www.lineaverdeceutatrace.com/lv/consejos-ambientales/apps-ambientales/img/eco-apps.png"
          reference="https://github.com/MichellePerezS/automataWeb"
          bd="Automata"
          bd2="React"
        />
        <CardProjects
          source="https://www.lineaverdeceutatrace.com/lv/consejos-ambientales/apps-ambientales/img/eco-apps.png"
          reference="https://github.com/MichellePerezS/automataWeb"
          bd="Automata"
          bd2="React"
        />
      </Flex>
    </Box>
  );
}
