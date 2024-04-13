import { PageWrapper } from "../PageWrapper";
import { Text, Card, CardBody, Box } from "@chakra-ui/react";
import { HomeButton } from "../components";
export function About() {
  return (
    <PageWrapper>
      <Card>
        <CardBody>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={2}
          >
            <Text>Andre is a software developer from Canada.</Text>
            <HomeButton />
          </Box>
        </CardBody>
      </Card>
    </PageWrapper>
  );
}
