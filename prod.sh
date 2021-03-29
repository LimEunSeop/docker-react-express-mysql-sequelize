#!/bin/bash

git pull "repository URL"
docker-compose -f docker-compose.prod.yml --env-file ./config/.env.prod up --build