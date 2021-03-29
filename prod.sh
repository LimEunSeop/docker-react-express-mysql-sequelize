#!/bin/bash

git pull
docker-compose -f docker-compose.prod.yml --env-file ./config/.env.prod up --build