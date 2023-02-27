import { Box } from "@chakra-ui/react";

export const ContaInfoCard = ({ children }: any) => {
  return (
    <Box backgroundColor="white" borderRadius="25px" padding="15px">
      {children}
    </Box>
  );
};
