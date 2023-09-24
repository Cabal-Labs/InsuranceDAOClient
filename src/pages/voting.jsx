import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import Dropdown from "../components/collapsable";
import LineChartComponent from "../components/lineChart";

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
                <Dropdown
                    name="Chest X-Ray"
                    price="$12.99"
                    content={
                        <>
                        <Text>Patient Address:</Text>
                        <Text>Date:</Text>
                        <Text>Reccomended Price: ($X,000-$Y,000)</Text>
                        <Text>Voting Link:</Text>
                        <Text>link</Text>
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
                  <LineChartComponent />
                </Box>
            </Box>
        </Box>
    );
}
