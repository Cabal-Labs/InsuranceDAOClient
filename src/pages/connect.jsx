import { Box, Text, Button} from "@chakra-ui/react";
import { Web3Button } from '@web3modal/react'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, goerli} from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon, goerli]
const projectId = 'aadfe464fef8ec2fcd82c54ef25ca687'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function ConnectPage() {
	return (
		<div className="page">
			
			<Box bg="blue.300" w={"100%"} height="50%" maxW={800} className="p-6 rounded-lg" align="center">
				<Text textStyle={"title"} >Welcome</Text>
				<img width="25%" src="public/purse.svg" alt="Wallet Icon"></img>
				<Text textStyle={"subTitle"}>Please Connect Your Wallet to Continue</Text>
				{/* <Button variant="primary">
					Connect
				</Button> */}

				<Web3Button />
				
			</Box>
			<Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
		</div>
	);
}
