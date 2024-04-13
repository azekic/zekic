import { PageWrapper } from "../PageWrapper";
import { Heading, Link, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export function About() {
  return (
    <PageWrapper>
      <Heading m="2" textAlign="center">
        Andre is a software developer based in Canada.
      </Heading>
      <Link href="https://github.com/azekic" isExternal>
        <Icon as={FaGithub} boxSize={12} />
      </Link>
    </PageWrapper>
  );
}
