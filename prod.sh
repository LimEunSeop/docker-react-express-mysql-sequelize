#!/bin/bash

docker-compose -f docker-compose.prod.yml down
git pull
docker-compose -f docker-compose.prod.yml --env-file ./config/.env.prod up -d --build