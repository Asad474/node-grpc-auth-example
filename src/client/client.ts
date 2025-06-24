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
      console.error("gRPC call failed with error:");
      console.error(`  Code: ${err.code}`);
      console.error(`  Name: ${err.name}`);
      console.error(`  Details: ${err.details}`);
      return;
    }

    console.log("Login Response:", JSON.stringify(response, null, 2));
  }
);
