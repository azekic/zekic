import { PageWrapper } from "../PageWrapper";
import { Text, Box } from "@chakra-ui/react";
import { HomeButton } from "../components";
export function About() {
  return (
    <PageWrapper>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={4}
      >
        <Text>Andre is a software developer from Canada.</Text>
        <HomeButton />
      </Box>
    </PageWrapper>
  );
}
