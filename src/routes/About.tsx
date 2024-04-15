import { PageWrapper } from "../PageWrapper";
import { Heading, Link, Icon, HStack, Stack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export function About() {
  return (
    <PageWrapper>
      <Stack m="6" maxWidth="42rem" gap={4} pt={12}>
        <Heading size="lg">
          I am a software developer based in Canada with a passion for creating
          great user experiences.
        </Heading>
        <Heading size="lg">
          I have built large-scale, full-stack web applications across
          industries ranging from e-commerce to big data and finance, within
          roles at industry leaders including{" "}
          <Link href="https://www.carfax.ca/" isExternal>
            CARFAX Canada
          </Link>
          ,{" "}
          <Link href="https://www.ssense.com/" isExternal>
            SSENSE
          </Link>
          , and{" "}
          <Link href="https://www.altitude-sports.com/" isExternal>
            Altitude Sports
          </Link>
          . I've worked with a wide range of technologies, and I have extensive
          experience with AWS, TypeScript, React, and Node.js.
        </Heading>
        <Heading size="lg">
          If you would like to get in touch, please feel free to reach out to me
          at <Link href="mailto:andre@zekic.ca">andre@zekic.ca</Link>.
        </Heading>
      </Stack>
      <HStack gap={4}>
        <Link href="https://github.com/azekic" isExternal h="100%">
          <Icon as={FaGithub} boxSize={12} />
        </Link>
      </HStack>
    </PageWrapper>
  );
}
