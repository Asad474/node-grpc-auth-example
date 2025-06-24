import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { authServiceService } from "../../protos/auth";
import { LoginCode, LoginRequest, LoginResult } from "../../protos/auth";

const users = [
  { id: 0, username: "Asad", password: "123" },
  { id: 1, username: "AsadS", password: "320" },
];

const login = (
  call: ServerUnaryCall<LoginRequest, LoginResult>,
  callback: sendUnaryData<LoginResult>
) => {
  console.log(call.request);

  const user = users.find(
    (u) =>
      u.username === call.request.username &&
      u.password === call.request.password
  );

  if (user) {
    const result: LoginResult = {
      logincode: LoginCode.SUCCESS,
      token: "RandomToken",
    };

    callback(null, result);
  } else {
    const result: LoginResult = {
      logincode: LoginCode.FAIL,
    };

    callback(null, result);
  }
};

const server = new Server();

server.addService(authServiceService, { login });

server.bindAsync(
  "localhost:8080",
  ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error(`Error ${error.name} occurred : ${error.message}`);
      return;
    }

    console.log(`Server is running at port ${port}`);
  }
);
