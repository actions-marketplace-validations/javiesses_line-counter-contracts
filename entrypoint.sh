#!/bin/sh -l

echo "Hello to $1"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT
