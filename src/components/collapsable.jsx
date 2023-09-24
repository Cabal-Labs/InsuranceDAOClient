import { Box, Button, Collapse, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

function CustomDropdown({ name, price, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

return(
<Box>
  <Button onClick={toggleDropdown} variant="secondary" paddingRight="5%">
    <Flex justify="space-between" align="center" width="100%">
      <Text color="white" marginRight="70%">{name}</Text>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text color="white">{price}</Text>
        <img
          src={isOpen ? "./up.png" : "./down.svg"}
          alt="Collapse Icon"
          width="60%"
        />
      </div>
    </Flex>
  </Button>
  <Collapse in={isOpen}>
    <Box p={4} mt={2} border="1px" borderColor="gray.200" rounded="md" bg="blue.300">
      <Text color="white">{content}</Text>
    </Box>
  </Collapse>
</Box>

);
}

export default CustomDropdown;
