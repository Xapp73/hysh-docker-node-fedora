# HyperShell Node.js Fedora 21 container
This container implements a demo application illustrating how to provision Docker-based micro-services with the HyperShell agent.

## How to start your agent
The Node.js demo application listening on port 3030 can be started with:
```shell
docker run -dit -p 3030:3030 --restart always --name hysh-docker-node-fedora -e "CHAINCODE_ID_NAME=8b554abeb1144726ab3167f67bdfba36" xapp73/hysh-docker-node-fedora
```
The agent identifier is specified using the "CHAINCODE_ID_NAME" environment variable.
