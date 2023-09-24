import { Box, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";


export default function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	console.log(watch("example")); // watch input value by passing the name of it
	return (
		<div className="page">
			<Box bg="green.900" w={"100%"} maxW={800} className="p-6">
				<Text textStyle="title">Login</Text>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={"flex flex-col gap-6"}>
					{/* register your input into the hook by invoking the "register" function */}
					<input defaultValue="Example" {...register("example")} />

					{/* include validation with required or other standard HTML validation rules */}
					<input {...register("exampleRequired", { required: true })} />
					{/* errors will return when field validation fails  */}
					{errors.exampleRequired && <span>This field is required</span>}

					<input type="submit" />
				</form>
			</Box>
		</div>
	);
}
