import { Link } from "react-router-dom";
import { Button, Flex, Spacer } from "@chakra-ui/react";

export function NavigationBar() {
  const isRoot = window.location.pathname === "/";

  return (
    <Flex p={2} width="100vw" position="absolute">
      <Spacer />
      <Button
        as={Link}
        to={isRoot ? "about" : "/"}
        variant="ghost"
        color="gray.600"
      >
        {isRoot ? "About" : "Home"}
      </Button>
    </Flex>
  );
}
