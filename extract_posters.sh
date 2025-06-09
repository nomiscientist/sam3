#!/bin/bash

# Create posters directory if it doesn't exist
mkdir -p demo/data/posters

# Extract first frame from each video
for video in demo/data/gallery/*.mp4; do
    filename=$(basename "$video")
    name="${filename%.*}"
    ffmpeg -i "$video" -vframes 1 -update 1 "demo/data/posters/${name}.jpg"
done 