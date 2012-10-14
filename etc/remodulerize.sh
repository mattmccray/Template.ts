#!/usr/bin/env bash

if [ "$1" = "" ]; then

  echo "You must specify the new Module name, usage"
  echo ""
  echo "  sh $0 MyModule"
  echo ""
  exit 1

fi

filename=`echo $1 | tr '[A-Z]' '[a-z]' | tr '.' '_'`

echo "Re-Modulerizing Template to $1 as $filename.ts"

cat src/template.ts src/template_helpers.ts src/template_tags.ts | sed s/Template/$1/ > $filename.ts
echo " $filename.ts"

cat template.d.ts | sed s/Template/$1/ > $filename.d.ts
echo " $filename.d.ts"

echo "Done."