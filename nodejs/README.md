
# Building Node Images
  
### Login to docker
```sh
docker login -u $USER -p $PASS
```
### Docker build and push
```sh
cd node/

docker build -f Dockerfile-single -t kunchalavikram/node-single .
docker build -f Dockerfile-alpine -t kunchalavikram/node-alpine .
docker build -f Dockerfile-multistage -t kunchalavikram/node-ms .
docker build -f Dockerfile-distroless -t kunchalavikram/node-distroless .

docker push kunchalavikram/node-single
docker push kunchalavikram/node-alpine
docker push kunchalavikram/node-ms
docker push kunchalavikram/node-distroless
```

### Running nodejs app

```sh
docker run -d -p 80:8080 --name web kunchalavikram/node-ms
http://<minikube ip>:80/
```

### Docker image sizes for various builds

```sh
kunchalavikram/node-distroless 125MB
kunchalavikram/node-ms 903MB
kunchalavikram/node-alpine 75.2MB
kunchalavikram/node-single 904MB
```
###  Authors
-  Vikram K (www.youtube.com/c/devopsmadeeasy)
