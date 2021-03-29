#!/bin/bash

git pull "repository URL"
docker-compose -f docker-compose.dev.yml --env-file ./config/.env.dev up --build