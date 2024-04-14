import { Box } from "@chakra-ui/react";
import { NavigationBar } from "./components";

type Props = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: Props) {
  const isAboutPage = window.location.pathname === "/about";

  return (
    <>
      <NavigationBar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={isAboutPage ? "flex-start" : "center"}
        alignItems="center"
        height="100vh"
      >
        {children}
      </Box>
    </>
  );
}
