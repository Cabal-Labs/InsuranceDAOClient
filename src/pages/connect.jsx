import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Web3Button } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, goerli } from "wagmi/chains";
import { useAccount } from "wagmi";

import { getAllPolicies } from "../apis/graph";
const chains = [arbitrum, mainnet, polygon, goerli];
const projectId = "aadfe464fef8ec2fcd82c54ef25ca687";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function ConnectPage() {
  const [locked, setLocked] = useState("pending");
  const [policies, setPolicies] = useState([]);
  const account = useAccount();

  const unlockHandler = (e) => {
    setLocked(e.detail);
  };

  const checkout = () => {
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal();
  };

  async function load() {
    let a = await getAllPolicies();
    console.log(a);
    setPolicies(a);
  }

  useEffect(() => {
    window.addEventListener("unlockProtocol", unlockHandler);

    load();
    return () => {
      window.removeEventListener("unlockProtocol", unlockHandler);
    };
  }, []);

  const connectedBox = (
    <Box
      bg="blue.300"
      w={"100%"}
      maxW={800}
      p={6}
      rounded="lg"
      align="center"
      gap={"20px"}
    >
      <Text textStyle={"title"}>Select Your Policy</Text>
      {policies.map((policy, index) => (
        <div>{policy.name}</div>
      ))}
      <Button variant="primary" onClick={checkout}>
        Purchase Insurance
      </Button>
    </Box>
  );

  const notConnectedBox = (
    <Box
      bg="red.300"
      w={"100%"}
      maxW={800}
      p={6}
      rounded="lg"
      align="center"
      gap={"20px"}
    >
      <Text textStyle={"title"}>Welcome</Text>
      <img width="25%" src="public/purse.svg" alt="Wallet Icon" />
      <Text textStyle={"subTitle"} mb="20px">
        Connect your account to purchase insurance.
      </Text>
      <Web3Button />
    </Box>
  );

  return (
    <div
      className="page"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {account ? connectedBox : notConnectedBox}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}
