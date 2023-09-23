import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import CustomDropdown from "../components/collapsable";

export default function HomePage() {
    return (
        <Box display="flex" className="page">
            <Box flex="1" p={4}>
                <Box bg="blue.100" className="p-6 rounded-lg" textAlign="left" marginBottom="5%">
                    <Text textStyle={"title"} color={"white"}>
                        Vote on Claims
                    </Text>
                </Box>
                <Box>
                <CustomDropdown
                    name="Chest X-Ray"
                    price="$12.99"
                    content={
                        <>
                        <Text>Patient Address:</Text>
                        <Text>Date:</Text>
                        <Text></Text>
                        </>
                    }
                />
                </Box>
            </Box>
            <Box flex="1" p={4}>
                <Box bg="blue.100" className="p-6 rounded-lg" textAlign="left">
                    <Text textStyle={"title"} color={"white"}>
                        Treasury
                    </Text>
                </Box>
                <Box bg="black" className="p-6 rounded-lg" marginTop="5%" height= "50%">
                  <Text color={"white"}>Insert Graph</Text>
                </Box>
            </Box>
        </Box>
    );
}
