#!/usr/bin/env bash
cd docker
export COMPOSE_PROJECT_NAME="racetracker"
docker compose up -d
cd ..
