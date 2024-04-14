import { PageWrapper } from "../PageWrapper";
import profilePicture from "../assets/profile-picture.jpg";
import {
  Image,
  Heading,
  VStack,
  HStack,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { AnimatedAttributes } from "../components";

export function Root() {
  const { toggleColorMode } = useColorMode();

  return (
    <PageWrapper>
      <HStack gap={6} wrap="wrap" justifyContent="center">
        <a href="https://github.com/azekic" target="_blank">
          <Image
            borderRadius="full"
            boxSize="40"
            alt="Andre Zekic"
            src={profilePicture}
          />
        </a>
        <VStack alignItems="flex-start" gap="0">
          <Heading size="4xl">
            Andre Zeki<Link onClick={toggleColorMode}>c</Link>
          </Heading>
          <AnimatedAttributes />
        </VStack>
      </HStack>
    </PageWrapper>
  );
}
