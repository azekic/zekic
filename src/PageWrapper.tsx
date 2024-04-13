import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {children}
    </Box>
  );
}
