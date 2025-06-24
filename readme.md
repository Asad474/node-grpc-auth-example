# 🚀 gRPC with Node.js & TypeScript

## 📖 Introduction

**gRPC** is Google’s open-source, high-performance Remote Procedure Call (RPC) framework designed for efficient communication between distributed systems and microservices. It leverages **Protocol Buffers (protobuf)**, a language-neutral, platform-neutral, extensible mechanism for serializing structured data, to define service interfaces and payload messages.

gRPC uses **HTTP/2** as its transport protocol, enabling features like multiplexing multiple requests over a single connection, bidirectional streaming, flow control, header compression, and low latency. This makes gRPC highly performant compared to traditional REST APIs, which typically use HTTP/1.1.

Key features of gRPC include:

- **Strongly typed contracts:** Service interfaces and message formats are strictly defined using `.proto` files, enabling automatic code generation in many programming languages.
- **Support for multiple programming languages:** gRPC supports Java, Go, C++, Python, Node.js, C#, Ruby, and many more, allowing polyglot systems to interoperate seamlessly.
- **Streaming:** gRPC supports client-side, server-side, and bidirectional streaming, allowing efficient handling of large data or real-time updates.
- **Interoperability:** With defined contracts and standardized protocols, gRPC services can easily interoperate across different platforms and languages.
- **Pluggable authentication and load balancing:** gRPC supports advanced features such as TLS encryption, token-based authentication, and client-side load balancing.

Common use cases for gRPC include:

- Building microservices architectures with efficient and reliable inter-service communication.
- Connecting mobile and web clients to backend services with low latency.
- Real-time communication apps, such as chat or IoT data streaming.
- High-performance backend services requiring compact and fast serialization.

Overall, gRPC combines the benefits of a contract-first API design with cutting-edge networking technology, making it a popular choice for modern distributed systems.

---

## ⚡ gRPC vs REST API

| Feature         | gRPC                 | REST API              |
| --------------- | -------------------- | --------------------- |
| **Protocol**    | HTTP/2 🚀            | HTTP/1.1 🐢           |
| **Data Format** | Binary (Protobuf) 🔐 | Text (JSON/XML) 📝    |
| **Contract**    | Strict (.proto) 📜   | Flexible (OpenAPI) 🤸 |
| **Streaming**   | Full support 🎥      | Limited support ⏳    |
| **Speed**       | 5–10x faster ⚡      | Standard speed 🏃     |

---

## 🛠 Implementation Roadmap

1. 📝 Define `.proto` service contract
2. ⚙️ Generate TypeScript stubs
3. 📦 Install dependencies
4. 🖥️ Implement gRPC server
5. 📱 Create client implementation

---

## 🔮 Code Generation Command with Explanation

```bash
npx protoc \
  --ts_proto_out=. \                       # Output generated files to current directory
  --ts_proto_opt=outputServices=grpc-js,env=node,esModuleInterop=true \   # Options to:
    # outputServices=grpc-js         -> generate grpc-js compatible services
    # env=node                      -> target Node.js environment
    # esModuleInterop=true          -> enable ES module/CommonJS compatibility
  ./protos/auth.proto                  # Path to your .proto file

```

## 🔗 References

- **[gRPC Official Site](https://grpc.io/)** — Explore gRPC’s features and documentation.
- **[Protocol Buffers Documentation](https://developers.google.com/protocol-buffers)** — Learn about the efficient binary serialization format.
- **[ts-proto GitHub Repository](https://github.com/stephenh/ts-proto)** — TypeScript code generator for protobuf with grpc-js support.
- **[@grpc/grpc-js npm Package](https://www.npmjs.com/package/@grpc/grpc-js)** — The Node.js gRPC implementation based on HTTP/2.
