import { Box, Text, Button} from "@chakra-ui/react";
export default function ConnectPage() {
	return (
		<div className="page">
			<Box bg="blue.300" w={"100%"} height="50%" maxW={800} className="p-6 rounded-lg" align="center">
				<Text textStyle={"title"} >Welcome</Text>
				<img width="25%" src="public/purse.svg" alt="Wallet Icon"></img>
				<Text textStyle={"subTitle"}>Please Connect Your Wallet to Continue</Text>
				<Button variant="primary">
					Connect
				</Button>
			</Box>
		</div>
	);
}
