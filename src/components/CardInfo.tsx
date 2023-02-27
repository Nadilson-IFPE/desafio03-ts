import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ICardInfo {
    mainContent: string,
    content: string,
    linkinfo?: string
}

const CardInfo = ({ mainContent, content, linkinfo }: ICardInfo) => {
    return (
        <Box
            backgroundColor="white"
            minHeight="120px"
            padding={8}
            borderRadius="25px"
        >
            <Text fontSize='2xl' fontWeight='bold'>
                {mainContent}
            </Text>
            <Text fontSize='xl' marginBottom={10}>
                {content}
            </Text>
            <Text>
                <Link color='teal.500' to='/infoconta'>
                    {linkinfo}
                </Link>
            </Text>
        </Box>
    );
};

export default CardInfo;
