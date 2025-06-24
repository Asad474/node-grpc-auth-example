# 🚀 gRPC with Node.js & TypeScript

## 📖 Introduction

**gRPC** is Google's high-performance RPC framework leveraging **Protocol Buffers** for lightning-fast communication between services.

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

## 🔮 Code Generation Command with Explanation and References

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
