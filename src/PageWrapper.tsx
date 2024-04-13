import { Box } from "@chakra-ui/react";
import { NavigationBar } from "./components";

type Props = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: Props) {
  return (
    <>
      <NavigationBar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        {children}
      </Box>
    </>
  );
}
