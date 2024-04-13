import { Link as ReactRouterLink } from "react-router-dom";

import { PageWrapper } from "../PageWrapper";
import profilePicture from "../assets/profile-picture.jpg";
import { Avatar, Heading, Text, Link } from "@chakra-ui/react";
export function Root() {
  return (
    <PageWrapper>
      <Avatar size="2xl" name="Andre Zekic" src={profilePicture} />
      <Heading>Andre Zekic</Heading>
      <Text>Software Developer</Text>
      <Link as={ReactRouterLink} to="about">
        About
      </Link>
    </PageWrapper>
  );
}
