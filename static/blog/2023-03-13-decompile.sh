#!/bin/bash

set -ex

JAR_FILE_PATH=$(realpath $1)
DEST_DIRECTORY=$(realpath $2)

rm -rf $DEST_DIRECTORY
mkdir $DEST_DIRECTORY
java -cp java-decompiler.jar org.jetbrains.java.decompiler.main.decompiler.ConsoleDecompiler -hdc=0 -dgs=1 -rsy=1 -rbr=1 -lit=1 -nls=1 -mpm=60 $JAR_FILE_PATH $DEST_DIRECTORY
unzip $DEST_DIRECTORY/$(basename $JAR_FILE_PATH) -d $DEST_DIRECTORY
