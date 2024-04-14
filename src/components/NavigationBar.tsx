import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Flex, Spacer, Heading, Link } from "@chakra-ui/react";

export function NavigationBar() {
  const isRoot = window.location.pathname === "/";

  return (
    <Flex p={2} width="100vw" position="absolute" alignItems="center">
      <Heading size="md" px={3}>
        <Link as={ReactRouterLink} to={"/"}>
          Andre Zekic
        </Link>
      </Heading>
      <Spacer />
      <Button as={ReactRouterLink} to={isRoot ? "about" : "/"} variant="ghost">
        {isRoot ? "About" : "Home"}
      </Button>
      <Button as={ReactRouterLink} to="mailto:andre@zekic.ca" variant="ghost">
        Contact
      </Button>
    </Flex>
  );
}
