
# Building Maven Images
  
### Login to docker
```sh
docker login -u $USER -p $PASS
```


### Docker single build

```sh
cd singlestage

docker build -t kunchalavikram/maven-single .
docker run -d -p 80:8080 --name web kunchalavikram/maven-single
http://<minikube ip>:80/
```
### Docker alpine build

```sh
cd alpine

docker build -t kunchalavikram/maven-alpine.
docker run -d -p 80:8080 --name web kunchalavikram/maven-single
http://<minikube ip>:80/
```
### Docker multistage build

```sh
cd multistage

docker build -t kunchalavikram/maven-ms .
docker run -d -p 80:8080 --name web kunchalavikram/maven-ms
http://<minikube ip>:80/
```

### Docker distroless build
```sh
https://github.com/GoogleContainerTools/distroless
https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#quickstart
```

```sh
cd distroless
```

Change the pom.xml file
```sh
plugin>
	<groupId>com.google.cloud.tools</groupId>
	<artifactId>jib-maven-plugin</artifactId>
	<version>3.1.4</version>
	<configuration>
		<to>
			<image>docker.io/kunchalavikram/maven-distroless</image>
		</to>
	</configuration>
</plugin>
```
Build the Maven application
```shell
mvn compile jib:build
```

### Docker image sizes for various builds

```sh
kunchalavikram/maven-ms 102MB
kunchalavikram/maven-alpine 190MB
kunchalavikram/maven-single 594MB
kunchalavikram/maven-distroless 242MB
```

###  Authors
-  Vikram K (www.youtube.com/c/devopsmadeeasy)
