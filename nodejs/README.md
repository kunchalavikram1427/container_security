
# docker login first

docker build -f Dockerfile-single -t kunchalavikram/node-single .
docker build -f Dockerfile-alpine -t kunchalavikram/node-alpine .
docker build -f Dockerfile-multistage -t kunchalavikram/node-ms .
docker build -f Dockerfile-distroless -t kunchalavikram/node-distroless .

docker push kunchalavikram/node-single 
docker push kunchalavikram/node-alpine 
docker push kunchalavikram/node-ms 
docker push kunchalavikram/node-distroless



# Image sizes
kunchalavikram/node-distroless            latest               3d3d2856f2ad   8 minutes ago    125MB
kunchalavikram/node-ms                    latest               9b16cc310012   13 minutes ago   903MB
kunchalavikram/node-alpine                latest               df0505fecc93   13 minutes ago   75.2MB
kunchalavikram/node-single                latest               fdfd85d9be89   13 minutes ago   904MB