
full_tags="a abbr address area article aside audio b base bdi bdo blockquote body button canvas caption cite code col colgroup command data datalist dd del details dfn div dl dt em embed eventsource fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup html i iframe ins kbd keygen label legend li mark map menu meter nav noscript object ol optgroup option output p pre progress q ruby rp rt s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul video wbr"

short_tags="br hr img input link meta param"

for tag in $full_tags
do
echo "
  export function $tag(attrs:any, ...children:any[]):string;
  export function $tag(...children:any[]):string;
  export function $tag():string {
    return tag('$tag', makeArray.call(arguments));
  }"
done

for tag in $short_tags
do
echo "
  export function $tag(attrs?:any):string {
    return shortTag('$tag', attrs);
  }"
done
