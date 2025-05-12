#!/bin/bash

read -r -p "Enter layer name (features/widgets/entities/etc): " layer
while [[ -z "$layer" ]]; do
    echo "Layer name cannot be empty!"
    read -r -p "Enter layer name (features/widgets/entities/etc): " layer
done

read -r -p "Enter component name (PascalCase): " filename
while [[ -z "$filename" ]]; do
    echo "Component name cannot be empty!"
    read -r -p "Enter component name (PascalCase): " filename
done

python3 your_script.py --g --layer "$layer" --filename "$filename"