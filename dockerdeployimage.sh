#!/bin/bash
npm run build:prod
docker build -t nobr730 .
docker tag nobr730 ctong5/bedroost:nobr730
docker push ctong5/bedroost:nobr730