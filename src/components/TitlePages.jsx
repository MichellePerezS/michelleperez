import { Heading } from '@chakra-ui/react';

export default function TitlePages({ title }) {
  return (
    <Heading as='h1' size='2xl' p={4}>
      {title}
    </Heading>
  );
}