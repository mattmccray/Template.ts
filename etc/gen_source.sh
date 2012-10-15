# Usage:
# bash etc/gen_source.sh [ModuleName]

comment="\/\/> TAGS INCLUDED HERE"
namespace="Template"
filename="template.ts"

if [ "$1" != "" ]; then
  namespace="$1"
  filename=`echo $1 | tr '[A-Z]' '[a-z]' | tr '.' '_'`.ts
fi

echo "Generating $filename"

echo " Building core methods..."
cat src/template_core.ts > core.tmp

echo " Generating tags..."
sh etc/gen_tag_methods.sh > tags.tmp

echo " Assembling $filename..."
sed -e "/$comment/r tags.tmp" core.tmp | sed s/Template/$namespace/ > $filename

echo " Cleaning up temp file(s)..."
rm tags.tmp
rm core.tmp

echo "Done."
