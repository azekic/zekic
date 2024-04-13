import { Link as ReactRouterLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export function HomeButton() {
  return (
    <Button as={ReactRouterLink} to="/">
      Go back home
    </Button>
  );
}
