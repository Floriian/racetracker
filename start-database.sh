#!/usr/bin/env bash
cd docker
export COMPOSE_PROJECT_NAME="CHANGE_ME"
docker compose up -d
cd ..

