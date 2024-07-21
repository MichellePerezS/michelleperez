import React from "react";
import { Table, Tbody, Tr, Td, TableContainer, Heading, Box, Text, Grid, GridItem } from '@chakra-ui/react';
import Headline from "../components/Headline";
import TitlePages from "../components/TitlePages";

export default function About() {
  return (
    <Box boxShadow="lg" borderRadius="md">
      <Headline title="About Me" />
      <Heading as='h4' pl={2} size='l' mt={5} fontFamily='subHeader'> Hi, I'm <Text as='span' color="accent">Michelle Pérez</Text> </Heading>
      <Heading as='h2' pl={2} size='xl' fontFamily="display">Junior Software Developer</Heading>

      <Heading p={2} mt={10} as="h4" color="accent" fontFamily="subHeader" size="md">Professional Profile</Heading>
      <Text p={2}>
        Self-taught software engineer in training with notable participation in hackathons. I have demonstrated exceptional skills in developing innovative solutions and hold certifications from leading platforms. Passionate about data science and data analysis, I am always seeking to explore new frontiers in this constantly evolving field.
      </Text>
      
      <Heading p={2} as="h4" color="accent" fontFamily="subHeader" size="md">My Education</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>October 2020 - Present</Td>
              <Td>International University of La Rioja(UNIR)</Td>
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
      
      <Heading p={3} as="h4" color="accent" fontFamily="subHeader" size="md">Work Experience</Heading>
      <Grid
        templateRows='repeat(2, auto)'
        templateColumns='repeat(5, 1fr)'
        padding={'24px'}
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>2021 - Present</GridItem>
        <GridItem colSpan={1}> CODELEARN </GridItem>
        <GridItem colSpan={3}>Programming Teacher(Python, Java, JavaScript</GridItem>
        <GridItem colSpan={4}>
          Teaching a diverse array of programming languages to students as they progress through their curricula has honed my ability to quickly adapt and master new languages.
          This experience has not only solidified my expertise in languages such as Python, Java, JavaScript, CSS, HTML, PHP, C++, and SQL, but has also equipped me with the skills to efficiently learn and teach any new language that comes my way.
          My adaptability and rapid learning capabilities ensure that I stay current with the ever-evolving technology landscape, making me a versatile and knowledgeable programmer.
        </GridItem>
      </Grid>
      
      <Heading p={2} as="h4" color="accent" fontFamily="subHeader" size="md">Competitions</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>HACKEA LA CRISIS MUJERES + NIÑAS</Td>
              <Td>UNICEF, PNUD, IMPAQTO, BID</Td>
              <Td>Second place in the communication category Development of an offline early warning system for violence prevention.</Td>
            </Tr> 
            <Tr>
              <Td>CONECTA CULTURAS</Td>
              <Td>UNESCO, DW, CIESPAL</Td>
              <Td>Development of a mobile app integrated into the national documentation system for indigenous people and nationalities.</Td>
            </Tr>
            <Tr>
              <Td>CONECTA CULTURAS</Td>
              <Td>MEDIALAB, GIZ, AEI, ESQUEL</Td>
              <Td>Development of an online and offline educational platform with Raspberry PI.</Td>
            </Tr> 
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}