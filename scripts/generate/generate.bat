@echo off
setlocal enabledelayedexpansion

:input_layer
set /p "layer=Enter layer name (features/widgets/entities/etc): "
if "!layer!"=="" (
    echo Layer name cannot be empty!
    goto :input_layer
)

:input_filename
set /p "filename=Enter component name (PascalCase): "
if "!filename!"=="" (
    echo Component name cannot be empty!
    goto :input_filename
)

python new.py --g --layer !layer! --filename !filename!

pause