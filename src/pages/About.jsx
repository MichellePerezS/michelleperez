// src/pages/About.js
import React from "react";
import {
  Table, Tbody, Tr, Td, TableContainer,
  Heading, Box, Text, Grid, GridItem
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import Headline from "../components/Headline";

export default function About() {
  return (
    <Box boxShadow="lg" borderRadius="md" p={4}>
      <Helmet>
        <title>About · Michelle Pérez — Software Developer</title>
        <meta
          name="description"
          content="Software Developer focused on clean, accessible and performant web interfaces with React, plus a data‑informed mindset from Python and analytics."
        />
        <link rel="canonical" href="https://michelle-perez.web.app/about" />
      </Helmet>

      <Headline title="About Me" />

      <Heading as="h4" pl={2} size="lg" mt={5} fontFamily="subHeader">
        Hi, I'm <Text as="span" color="accent">Michelle Pérez</Text>
      </Heading>
      <Heading as="h2" pl={2} size="xl" fontFamily="display">
        Software Developer
      </Heading>

      <Heading p={2} mt={6} as="h4" color="accent" fontFamily="subHeader" size="md">
        Professional Profile
      </Heading>

      {/* Texto justificado */}
      <Box maxW="78ch">
        <Text p={2} lineHeight={1.8} textAlign="justify" sx={{ hyphens: 'auto' }}>
          Software developer focused on building clean, accessible and performant web interfaces.
          I enjoy turning ideas into usable products with React and modern tooling, and I bring a
          data‑informed mindset from my exploration of Python and analytics. I’ve contributed in
          hackathons and collaborative projects, delivering pragmatic solutions and learning fast
          in changing contexts.
        </Text>
        <Text p={2} mt={2} lineHeight={1.8} textAlign="justify" sx={{ hyphens: 'auto' }}>
          I’m currently polishing my frontend craft (React, Chakra UI, accessibility, testing) while
          strengthening Python for data tasks and automation. I value clear code, thoughtful UX, and teamwork.
        </Text>
      </Box>

      <Heading p={2} mt={6} as="h4" color="accent" fontFamily="subHeader" size="md">
        My Education
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>October 2020 – Present</Td>
              <Td>International University of La Rioja (UNIR)</Td>
              <Td>Computer Engineering</Td>
            </Tr>
            <Tr>
              <Td>2024</Td>
              <Td>Google Coursera</Td>
              <Td>Foundations: Data, Data, Everywhere</Td>
            </Tr>
            <Tr>
              <Td>2021</Td>
              <Td>Platzi</Td>
              <Td>JavaScript</Td>
            </Tr>
            <Tr>
              <Td>2020</Td>
              <Td>Platzi</Td>
              <Td>Python, Git and GitHub</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Heading p={3} mt={6} as="h4" color="accent" fontFamily="subHeader" size="md">
        Work Experience
      </Heading>
      <Grid
        templateRows="repeat(2, auto)"
        templateColumns="repeat(5, 1fr)"
        p="24px"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>2021 – Present</GridItem>
        <GridItem colSpan={1}>CODELEARN</GridItem>
        <GridItem colSpan={3}>Programming Teacher (Python, Java, JavaScript)</GridItem>
        <GridItem colSpan={4} lineHeight={1.8} textAlign="justify" sx={{ hyphens: 'auto' }}>
          Teaching a wide range of programming languages has honed my ability to quickly adapt
          and master new technologies. This experience strengthened my skills in Python, Java,
          JavaScript, CSS, HTML, PHP, C++, and SQL, and equipped me to efficiently learn and
          teach new tools as needed. I keep up with the evolving tech landscape and bring
          adaptability, clarity and collaboration to my work.
        </GridItem>
      </Grid>

      <Heading p={2} mt={6} as="h4" color="accent" fontFamily="subHeader" size="md">
        Competitions
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>HACKEA LA CRISIS MUJERES + NIÑAS</Td>
              <Td>UNICEF, PNUD, IMPAQTO, BID</Td>
              <Td>Second place (communication). Offline early‑warning system for violence prevention.</Td>
            </Tr>
            <Tr>
              <Td>CONECTA CULTURAS</Td>
              <Td>UNESCO, DW, CIESPAL</Td>
              <Td>Mobile app integrated with the national documentation system for indigenous peoples.</Td>
            </Tr>
            <Tr>
              <Td>Hackea el COVID</Td>
              <Td>MEDIALAB, GIZ, AEI, ESQUEL</Td>
              <Td>Online/offline educational platform using Raspberry Pi.</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}