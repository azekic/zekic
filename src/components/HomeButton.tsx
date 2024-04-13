import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export function HomeButton() {
  return (
    <Button as={Link} to="/" variant="ghost">
      Go back home
    </Button>
  );
}
