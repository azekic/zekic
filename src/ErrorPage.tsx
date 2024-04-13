import { useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import { PageWrapper } from "./PageWrapper";
import { HomeButton } from "./components";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <PageWrapper>
      <Box textAlign="center">
        <Heading>Oops!</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
      </Box>
      <HomeButton />
    </PageWrapper>
  );
}
