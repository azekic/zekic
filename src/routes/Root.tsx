import { PageWrapper } from "../PageWrapper";
import profilePicture from "../assets/profile-picture.jpg";
import { Image, Heading, VStack, HStack } from "@chakra-ui/react";
import { NavigationBar } from "../components";
export function Root() {
  return (
    <>
      <NavigationBar />
      <PageWrapper>
        <HStack gap={6} wrap={"wrap"} justifyContent="center">
          <Image
            borderRadius="full"
            boxSize="40"
            alt="Andre Zekic"
            src={profilePicture}
          />
          <VStack alignItems="flex-start" gap="0">
            <Heading size="4xl">Andre Zekic</Heading>
            <Heading size="lg">Software Developer</Heading>
          </VStack>
        </HStack>
      </PageWrapper>
    </>
  );
}
