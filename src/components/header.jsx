import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Header() {
	return (
		<Box
			bgColor={"blue.100"}
			className={"flex flex-row justify-between align-bottom px-8 py-2"}>
			<Link to="/" className="flex flex-col justify-end">
				<Text textStyle={"title"} color={"white"}>
					InsuranceDAO
				</Text>
			</Link>
			<nav className={"flex flex-row gap-20 align-bottom"}>
				<Link to="/home" className="flex flex-col justify-end">
					<Text textStyle={"link"} fontSize={"xl"}>
						Home
					</Text>
				</Link>
				<Link to="/login" className="flex flex-col justify-end">
					<Text textStyle={"link"} fontSize={"xl"}>
						File Claim
					</Text>
				</Link>
				<Link to="/voting" className="flex flex-col justify-end">
					<Text textStyle={"link"} fontSize={"xl"}>
						Voting
					</Text>
				</Link>
			</nav>
		</Box>
	);
}
