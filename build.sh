#!/bin/bash

cd userservice/ 
source ./env-variables.sh
mvn clean package
cd ../favouriteservice/
source ./env-variables.sh
mvn clean package
cd ..
