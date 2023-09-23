import Router from "./router";
import AppProvider from "./providers/appProvider";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/chakraTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<Box className="app" id="app" bgColor={"green.900"}>
				<ChakraProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<AppProvider>
							<Router />
						</AppProvider>
					</QueryClientProvider>
				</ChakraProvider>
			</Box>
			
		</>
	);
}

export default App;
