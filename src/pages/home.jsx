import { Box, Text } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <Box display="flex" className="page">
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
            <Box flex="1" p={4}>
                <Box bg="blue.100" className="p-6 rounded-lg" textAlign="left">
                    <Text textStyle={"title"} color={"white"}>
                        Claims
                    </Text>
                </Box>
                <Box bg="blue.100" marginTop="5%" className="p-6 rounded-lg" textAlign="left">
                    <Box display="flex">
                        <Text textStyle={"subTitle"} color={"white"} marginRight={"15%"}>
                            Hash
                        </Text>
                        <Text textStyle={"subTitle"} color={"white"} marginRight={"15%"}>
                            Date
                        </Text>
                        <Text textStyle={"subTitle"} color={"white"} marginRight={"15%"}>
                            Price
                        </Text>
                        <Text textStyle={"subTitle"} color={"white"} marginRight={"15%"}>
                            Balance
                        </Text>
                    </Box>
                </Box>
                <Box bg="blue.300" marginTop="3%" height="70%" className="p-6 rounded-lg" textAlign="left">
                    <Text>Insert Table Here</Text>
                </Box>
            </Box>
        </Box>
    );
}
