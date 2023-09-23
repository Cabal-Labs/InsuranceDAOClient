import { Box, Button, Collapse, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

function CustomDropdown({ name, price, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Button onClick={toggleDropdown} variant="outline">
        <Flex justify="space-between">
            <Text>{name}</Text>
            <Box>
                <Text>{price}</Text>
                <img src={isOpen ? "./public/up.png" : "./public/down.svg"} alt="Collapse Icon" width="5%"/>
            </Box>
        </Flex>
      </Button>
      <Collapse in={isOpen}>
        <Box p={4} mt={2} border="1px" borderColor="gray.200" rounded="md">
          {content}
        </Box>
      </Collapse>
    </Box>
  );
}

export default CustomDropdown;
