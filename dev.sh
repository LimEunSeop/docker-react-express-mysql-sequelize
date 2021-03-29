#!/bin/bash

docker-compose -f docker-compose.dev.yml down
git pull
docker-compose -f docker-compose.dev.yml --env-file ./config/.env.dev up --build