
# Container Images Scanning using Anchore Engine
  
> Scanning alpine and distroless images

### Start Minikube cluster
```sh
minikube start --driver=virtualbox (or)
minikube start --cpus=4 --memory=4096 --driver=virtualbox
```
### Anchore Engine links
```sh
https://github.com/anchore/
https://github.com/anchore/anchore-engine
https://github.com/anchore/anchore-cli
```

### Distroless Images
```sh
https://github.com/GoogleContainerTools/distroless
https://github.com/GoogleContainerTools/jib
https://github.com/GoogleContainerTools/distroless/blob/main/examples/java/Dockerfile
```

### Docker compose download link
```sh
https://github.com/docker/compose/releases
```

### Installing Anchore CLI
```sh
apt-get install python3-pip –y
pip install anchorecli
anchore-cli --help
```
### Installing Anchore engine
```sh
curl https://engine.anchore.io/docs/quickstart/docker-compose.yaml > docker-compose.yaml
docker-compose up -d
docker-compose ps
docker-compose exec api anchore-cli system status
```

### Using Anchore CLI
```sh
minikube ip
192.168.99.133

curl http://192.168.99.133:8228/v1
"v1"

anchore-cli --u admin --p foobar --url http://192.168.99.133:8228/v1 system status
"Unauthorized"

export ANCHORE_CLI_URL=http://192.168.99.133:8228/v1
export ANCHORE_CLI_USER=admin
export ANCHORE_CLI_PASS=foobar

anchore-cli image add kunchalavikram/maven-single
anchore-cli image list
anchore-cli image wait kunchalavikram/maven-single
anchore-cli image vuln kunchalavikram/maven-single os
anchore-cli evaluate check kunchalavikram/maven-single --detail
```

### Scanning Maven Images
```sh
anchore-cli image add kunchalavikram/maven-single
anchore-cli image add kunchalavikram/maven-alpine
anchore-cli image add kunchalavikram/maven-ms
anchore-cli image add kunchalavikram/maven-distroless

anchore-cli image wait kunchalavikram/maven-single
anchore-cli image wait kunchalavikram/maven-alpine
anchore-cli image wait kunchalavikram/maven-ms
anchore-cli image wait kunchalavikram/maven-distroless

anchore-cli image vuln kunchalavikram/maven-single os
anchore-cli image vuln kunchalavikram/maven-alpine os
anchore-cli image vuln kunchalavikram/maven-ms os
anchore-cli image vuln kunchalavikram/maven-distroless os

anchore-cli evaluate check kunchalavikram/maven-single
anchore-cli evaluate check kunchalavikram/maven-alpine
anchore-cli evaluate check kunchalavikram/maven-ms
anchore-cli evaluate check kunchalavikram/maven-distroless

Note: Use --detail for extended info
anchore-cli evaluate check kunchalavikram/maven-distroless --detail
```


### Scanning NodeJS Images
```sh
anchore-cli image add kunchalavikram/node-single
anchore-cli image add kunchalavikram/node-alpine
anchore-cli image add kunchalavikram/node-ms
anchore-cli image add kunchalavikram/node-distroless

anchore-cli image wait kunchalavikram/node-single
anchore-cli image wait kunchalavikram/node-alpine
anchore-cli image wait kunchalavikram/node-ms
anchore-cli image wait kunchalavikram/node-distroless

anchore-cli image vuln kunchalavikram/node-single os
anchore-cli image vuln kunchalavikram/node-alpine os
anchore-cli image vuln kunchalavikram/node-ms os
anchore-cli image vuln kunchalavikram/node-distroless os

anchore-cli evaluate check kunchalavikram/node-single
anchore-cli evaluate check kunchalavikram/node-alpine
anchore-cli evaluate check kunchalavikram/node-ms
anchore-cli evaluate check kunchalavikram/node-distroless

Note: Use --detail for extended info
anchore-cli evaluate check kunchalavikram/node-distroless --detail
```

### Scanning standard images
```sh
anchore-cli image add python
anchore-cli image add python:3-slim-buster
anchore-cli image add node:8
anchore-cli image add gcr.io/distroless/nodejs
anchore-cli image add openjdk:11-jdk-slim
anchore-cli image add gcr.io/distroless/java:11
  
anchore-cli image vuln python
anchore-cli image vuln python:3-slim-buster
anchore-cli image vuln node:8
anchore-cli image vuln gcr.io/distroless/nodejs
anchore-cli image vuln openjdk:11-jdk-slim
anchore-cli image vuln gcr.io/distroless/java:11

anchore-cli evaluate check python
anchore-cli evaluate check python:3-slim-buster
anchore-cli evaluate check node:8
anchore-cli evaluate check gcr.io/distroless/nodejs
anchore-cli evaluate check openjdk:11-jdk-slim
anchore-cli evaluate check gcr.io/distroless/java:11
```
### Alpine vs Distroless Scanning(Absence of shell)
```sh
docker run -d -it --name node node:8
docker exec -it node bash
root@7c0948de6e1e:/#

docker run -d -it --name node gcr.io/distroless/nodejs:16
docker exec -it node bash
OCI runtime exec failed: exec failed: container_linux.go:380: starting container process caused: exec: "bash": executable file not found in $PATH: unknown

docker exec -it node sh
OCI runtime exec failed: exec failed: container_linux.go:380: starting container process caused: exec: "sh": executable file not found in $PATH: unknown
```

### Jenkins Service Path(Next Video)
```sh
kubectl patch svc jenkins -p '{"spec": {"type": "NodePort"}}' -n jenkins
```
###  Authors
-  Vikram K (www.youtube.com/c/devopsmadeeasy)
