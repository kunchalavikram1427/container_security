# Distroless Images and Scanning using Anchore Engine

## Start Minikube cluster
minikube start --driver=virtualbox


## Anchore Engine Links
https://github.com/anchore/anchore-engine
https://github.com/anchore/anchore-cli
https://github.com/docker/compose/releases


## Installing Anchore engine
curl https://engine.anchore.io/docs/quickstart/docker-compose.yaml > docker-compose.yaml
docker-compose up -d
docker-compose exec api anchore-cli system status

# Using Anchore CLI
$ minikube ip
192.168.99.132

$ curl http://192.168.99.132:8228/v1

$ anchore-cli --url http://192.168.99.132:8228/v1 system status 
"Unauthorized"

$ anchore-cli --u admin --p foobar --url http://192.168.99.132:8228/v1 system status 

export ANCHORE_CLI_URL=http://192.168.99.132:8228/v1
export ANCHORE_CLI_USER=admin
export ANCHORE_CLI_PASS=foobar

anchore-cli image add kunchalavikram/maven-single
anchore-cli image wait kunchalavikram/maven-single 
anchore-cli image vuln kunchalavikram/maven-single os 
anchore-cli evaluate check kunchalavikram/maven-single --detail

anchore-cli image list 


# Scan for Maven
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


# Scan for Nodejs
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



# For demo purposes only

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