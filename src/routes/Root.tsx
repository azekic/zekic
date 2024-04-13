import { Link } from "react-router-dom";

import { PageWrapper } from "../PageWrapper";
import profilePicture from "../assets/profile-picture.jpg";
import { Image, Heading, Text, Button } from "@chakra-ui/react";
export function Root() {
  return (
    <PageWrapper>
      <Image
        borderRadius="full"
        boxSize="40"
        alt="Andre Zekic"
        src={profilePicture}
      />
      <Heading>Andre Zekic</Heading>
      <Text>Software Developer</Text>
      <Button as={Link} to="about" variant="ghost" my={2} color="gray.600">
        About Me
      </Button>
    </PageWrapper>
  );
}
