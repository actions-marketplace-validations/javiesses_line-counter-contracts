#!/bin/bash

# count-lines.sh

contracts_dir="./contracts"

declare -A results

for file in "$contracts_dir"/*; do
  line_count=$(wc -l < "$file")
  results[$file]=$line_count
done

echo "Line counts: ${results[@]}"

echo "::set-output name=lineCounts::$(declare -p results)"
