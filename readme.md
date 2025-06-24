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

# References:
# gRPC: https://grpc.io/
# Protocol Buffers Docs: https://developers.google.com/protocol-buffers
# ts-proto GitHub: https://github.com/stephenh/ts-proto
# @grpc/grpc-js npm: https://www.npmjs.com/package/@grpc/grpc-js
```
