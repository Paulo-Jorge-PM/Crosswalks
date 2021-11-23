#!/bin/bash

api-gateway="./api-gateway/run.sh"
car-service="./car-service/run.sh"
pedestre-service="./pedestre-service/run.sh"
spws-service="./spws-service/run.sh"
vue-original-spws="./vue-original-spws/run.sh"
website="./website/run.sh"

gnome-terminal --tab --title="APIGATEWAY" -- "$api-gateway"
echo "api-gateway = DONE"

gnome-terminal --tab --title="car-service" -- "$car-service"
echo "car-service = DONE"

gnome-terminal --tab --title="pedestre-service" -- "$pedestre-service"
echo "pedestre-service = DONE"

gnome-terminal --tab --title="spws-service" -- "$spws-service"
echo "spws-service = DONE"

gnome-terminal --tab --title="vue-original-spws" -- "$vue-original-spws"
echo "vue-original-spws = DONE"

gnome-terminal --tab --title="website" -- "$website"
echo "website = DONE"


xdg-open http://localhost:8333
xdg-open http://localhost:8042

exec bash
