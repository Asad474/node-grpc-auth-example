import { ServiceError, credentials } from "@grpc/grpc-js";
import {
  authServiceClient,
  LoginResult,
  LoginRequest,
} from "../../protos/auth";

const loginRequest: LoginRequest = {
  username: "Asad",
  password: "123",
};

const client = new authServiceClient(
  "localhost:8080",
  credentials.createInsecure()
);

client.login(
  loginRequest,
  (err: ServiceError | null, response: LoginResult) => {
    if (err) {
      console.log("Error Details : ");
      console.log(`Error Code : ${err.code}`);
      console.log(`Error Name : ${err.name}`);
      console.log(`Error Details: ${err.details}`);
    }

    console.log(`Response: ${JSON.stringify(response)}`);
  }
);
