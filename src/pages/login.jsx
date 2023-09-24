 import { Box, Text } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";


// export default function Login() {
// 	const {
// 		register,
// 		handleSubmit,
// 		watch,
// 		formState: { errors },
// 	} = useForm();

// 	const onSubmit = (data) => console.log(data);
// 	console.log(watch("example")); // watch input value by passing the name of it
// 	return (
// 		<div className="page">
// 			<Box bg="green.900" w={"100%"} maxW={800} className="p-6">
// 				<Text textStyle="title">File Claim</Text>
// 				<form
// 					onSubmit={handleSubmit(onSubmit)}
// 					className={"flex flex-col gap-6"}>
// 					{/* register your input into the hook by invoking the "register" function */}
// 					<h2>EKRNW</h2>
// 					<input {...register("example")} />

// 					{/* include validation with required or other standard HTML validation rules */}
// 					<input {...register("exampleRequired", { required: true })} />
// 					{/* errors will return when field validation fails  */}
// 					{errors.exampleRequired && <span>This field is required</span>}

// 					<input type="submit" />
// 				</form>
// 			</Box>
// 		</div>
// 	);
// }


import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

export default function Login() {
  const [hospitalName, setHospitalName] = React.useState('')
  const [patientAddress, setPatientAddress] = React.useState('')
  const [medicalProcedure, setMedicalProcedure] = React.useState('')
  const [medicalProcedureCost, setMedicalProcedureCost] = React.useState('')

<<<<<<< HEAD
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: [
      {
        name: 'payHospital',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
        outputs: [],
      },
    ],
    functionName: 'payHospital',
    args: [hospitalName, patientAddress, medicalProcedure, medicalProcedureCost],
  })
  const { data, error, isError, write } = useContractWrite(config)
=======
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
>>>>>>> refs/remotes/origin/main

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
	console.log("here")
  }

  return (
	<div className="page">
	 <Box bg="green.900" w={"100%"} maxW={800} className="p-6">
	 <Text textStyle="title">File Claim</Text>
        <form onSubmit={handleSubmit}>
          <label htmlFor="hospitalName">Hospital Name</label>
          <input
            id="hospitalName"
            onChange={(e) => setHospitalName(e.target.value)}
            placeholder="Hospital name"
            value={hospitalName}
          />
		  <br></br>
          <label htmlFor="patientAddress">Patient Address</label>
          <input
            id="patientAddress"
            onChange={(e) => setPatientAddress(e.target.value)}
            placeholder="Patient address"
            value={patientAddress}
          />
		  <br></br>
          <label htmlFor="medicalProcedure">Medical Procedure</label>
          <input
            id="medicalProcedure"
            onChange={(e) => setMedicalProcedure(e.target.value)}
            placeholder="Medical procedure"
            value={medicalProcedure}
          />
		  <br></br>
          <label htmlFor="medicalProcedureCost">Medical Procedure Cost</label>
          <input
            id="medicalProcedureCost"
            onChange={(e) => setMedicalProcedureCost(e.target.value)}
            placeholder="Medical procedure cost"
            value={medicalProcedureCost}
          />
		  <br></br>
          <button disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          {isSuccess && (
            <div>
              Successfully submitted claim!
              <div>
                <a href={`https://etherscan.io/tx/${transaction.hash}`}>Etherscan</a>
              </div>
            </div>
          )}
          {error && <div>Error: {error}</div>}
        </form>
      </Box>
	</div>
  )
}
