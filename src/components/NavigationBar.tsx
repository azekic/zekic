import { Link } from "react-router-dom";
import { Button, Flex, Spacer } from "@chakra-ui/react";

export function NavigationBar() {
  return (
    <Flex p={2} width="100vw" position="absolute">
      <Spacer />
      <Button as={Link} to="about" variant="ghost" color="gray.600">
        About
      </Button>
    </Flex>
  );
}
