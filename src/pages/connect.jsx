import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function ConnectPage() {
  const [locked, setLocked] = useState("pending"); // using useState hook for managing state

  const unlockHandler = (e) => {
    setLocked(e.detail); // directly updating the state without using the functional update form
  };

  const checkout = () => {
    console.log("yeahh");
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal(); // same as in the class component
  };

  // using useEffect for handling side effects
  useEffect(() => {
    // Equivalent to componentDidMount
    window.addEventListener("unlockProtocol", unlockHandler);

    // Equivalent to componentWillUnmount
    return () => {
      window.removeEventListener("unlockProtocol", unlockHandler);
    };
  }, []); // Empty dependency array means this useEffect runs once when the component mounts, and the return cleanup function runs when the component unmounts.

  return (
    <div className="page">
      <Box
        bg="blue.300"
        w={"100%"}
        height="50%"
        maxW={800}
        className="p-6 rounded-lg"
        align="center"
      >
        <Text textStyle={"title"}>Welcome</Text>
        <img width="25%" src="public/purse.svg" alt="Wallet Icon"></img>
        <Text textStyle={"subTitle"}>
          Please Connect Your Wallet to Continue
        </Text>
        <Button variant="primary" onClick={checkout}>
          Purchase Insurance
        </Button>
      </Box>
    </div>
  );
}
