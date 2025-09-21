import { Card, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Headline({ title }) {
  return (
    <Card w="100px" h="30px" display="flex" justifyContent="space-evenly" alignItems="center" flexDirection="row">
        <Icon as={StarIcon} boxSize={3} />
        <Text>{title}</Text>
    </Card>
  );
}