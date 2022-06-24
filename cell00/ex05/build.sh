#! /bin/bash
if [ $# = 0 ];
then 
echo "No arguments supplied";
fi

for a in $*;
do
mkdir ex$a
done
