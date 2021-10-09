## maven-singlestage

```shell
$ cd singlestage
$ docker build -t kunchalavikram/maven-single .
$ docker run -d -p 80:8080 --name web kunchalavikram/maven-single
$ http://<minikube ip>:80/
```
## maven-alpine

```shell
$ cd alpine
$ docker build -t kunchalavikram/maven-alpine .
$ 
```

## maven-multistage

```shell
$ cd multistage
$ docker build -t kunchalavikram/maven-ms .
$ 
```

## maven-distroless

### https://github.com/GoogleContainerTools/distroless
### https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#quickstart

```shell
$ cd distroless
```
In your Maven Java project, add the plugin and configurationto your pom.xml:

<plugin>
  <groupId>com.google.cloud.tools</groupId>
  <artifactId>jib-maven-plugin</artifactId>
  <version>3.1.4</version>
  <configuration>
    <to>
      <image>docker.io/kunchalavikram/maven-distroless</image>
    </to>
  </configuration>
</plugin>

```shell
$  mvn compile jib:build
```

## Push images

```shell
$  docker push kunchalavikram/maven-single
$  docker push kunchalavikram/maven-alpine
$  docker push kunchalavikram/maven-ms
$  docker push kunchalavikram/maven-distroless
```


# All Images

kunchalavikram/maven-ms                   latest               761e49ddac30   2 hours ago      102MB
kunchalavikram/maven-alpine               latest               db31679f84b2   2 hours ago      190MB
kunchalavikram/maven-single               latest               760a793cea8f   2 hours ago      594MB
kunchalavikram/maven-distroless           latest               34fcd33b806b   1 years ago      242MB
