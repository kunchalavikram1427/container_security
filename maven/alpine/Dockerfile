# select parent image -> 122MB
FROM maven:3.6.1-jdk-8-alpine

# copy the source tree and the pom.xml to our new container 
COPY ./ ./  

# package our application code 
RUN mvn clean package 

# set the startup command to execute the jar 
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]

# Final image -> 190MB