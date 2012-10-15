// template.ts 1.1.3 <https://github.com/darthapo/template.ts>
module Template {

  export var VERSION:string = "1.2.4"
  
  export var attrHooks:any = {
    "classname": "class",
    "cname": "class",
    "cls": "class"
  }

  export function merge(target:any, source:any):any {
    for(var key in source) {
      target[key]= source[key];
    }
    return target;
  }

  export function toAttrs(attrs:any, prefix?:string = ""):string {
    var atts= "";
    for(var key in attrs) {
      var lKey = key.toLowerCase(),
          keyName = (lKey in attrHooks) ? attrHooks[lKey] : key,
          value = attrs[key];
      if(typeof value == "object") {
        var newPrefix = keyName + '-';
        newPrefix = (prefix == "") ? newPrefix : prefix + newPrefix;
        atts += toAttrs( value, newPrefix ); 
      } else {
        atts += " "+ prefix + keyName + '='+ JSON.stringify( String(value) );  
      }
    }
    return atts;
  }
  
  export function text(...children:any[]):string {
    return children.join('');
  }
  
  export function tag(name:string, children:any[]=[]):string {
    var atts= (children.length > 0 && typeof children[0] == 'object') ? toAttrs(children.shift()) : "";
    return "<"+ name + atts +">"+ children.join('') +"</"+ name +">";
  }

  // Children are swallowed up!
  export function shortTag(name:string, atts?:any= {}):string {
    return "<"+ name + toAttrs(atts) +"/>";
  }

  // Tag Helpers:
  export function image(src:string, attrs?:any= {}):string {
    return shortTag('img', merge(attrs, {
      src: src
    }));
  }

  export function stylesheet(src:string, attrs?:any={}):string {
    return shortTag('link', merge(attrs, {
      src: src,
      rel: "stylesheet",
      type: "text/css"
    }));
  }

  var makeArray = Array.prototype.slice;

//> TAGS INCLUDED HERE

  export function a(attrs:any, ...children:any[]):string;
  export function a(...children:any[]):string;
  export function a():string {
    return tag('a', makeArray.call(arguments));
  }

  export function abbr(attrs:any, ...children:any[]):string;
  export function abbr(...children:any[]):string;
  export function abbr():string {
    return tag('abbr', makeArray.call(arguments));
  }

  export function address(attrs:any, ...children:any[]):string;
  export function address(...children:any[]):string;
  export function address():string {
    return tag('address', makeArray.call(arguments));
  }

  export function area(attrs:any, ...children:any[]):string;
  export function area(...children:any[]):string;
  export function area():string {
    return tag('area', makeArray.call(arguments));
  }

  export function article(attrs:any, ...children:any[]):string;
  export function article(...children:any[]):string;
  export function article():string {
    return tag('article', makeArray.call(arguments));
  }

  export function aside(attrs:any, ...children:any[]):string;
  export function aside(...children:any[]):string;
  export function aside():string {
    return tag('aside', makeArray.call(arguments));
  }

  export function audio(attrs:any, ...children:any[]):string;
  export function audio(...children:any[]):string;
  export function audio():string {
    return tag('audio', makeArray.call(arguments));
  }

  export function b(attrs:any, ...children:any[]):string;
  export function b(...children:any[]):string;
  export function b():string {
    return tag('b', makeArray.call(arguments));
  }

  export function base(attrs:any, ...children:any[]):string;
  export function base(...children:any[]):string;
  export function base():string {
    return tag('base', makeArray.call(arguments));
  }

  export function bdi(attrs:any, ...children:any[]):string;
  export function bdi(...children:any[]):string;
  export function bdi():string {
    return tag('bdi', makeArray.call(arguments));
  }

  export function bdo(attrs:any, ...children:any[]):string;
  export function bdo(...children:any[]):string;
  export function bdo():string {
    return tag('bdo', makeArray.call(arguments));
  }

  export function blockquote(attrs:any, ...children:any[]):string;
  export function blockquote(...children:any[]):string;
  export function blockquote():string {
    return tag('blockquote', makeArray.call(arguments));
  }

  export function body(attrs:any, ...children:any[]):string;
  export function body(...children:any[]):string;
  export function body():string {
    return tag('body', makeArray.call(arguments));
  }

  export function button(attrs:any, ...children:any[]):string;
  export function button(...children:any[]):string;
  export function button():string {
    return tag('button', makeArray.call(arguments));
  }

  export function canvas(attrs:any, ...children:any[]):string;
  export function canvas(...children:any[]):string;
  export function canvas():string {
    return tag('canvas', makeArray.call(arguments));
  }

  export function caption(attrs:any, ...children:any[]):string;
  export function caption(...children:any[]):string;
  export function caption():string {
    return tag('caption', makeArray.call(arguments));
  }

  export function cite(attrs:any, ...children:any[]):string;
  export function cite(...children:any[]):string;
  export function cite():string {
    return tag('cite', makeArray.call(arguments));
  }

  export function code(attrs:any, ...children:any[]):string;
  export function code(...children:any[]):string;
  export function code():string {
    return tag('code', makeArray.call(arguments));
  }

  export function col(attrs:any, ...children:any[]):string;
  export function col(...children:any[]):string;
  export function col():string {
    return tag('col', makeArray.call(arguments));
  }

  export function colgroup(attrs:any, ...children:any[]):string;
  export function colgroup(...children:any[]):string;
  export function colgroup():string {
    return tag('colgroup', makeArray.call(arguments));
  }

  export function command(attrs:any, ...children:any[]):string;
  export function command(...children:any[]):string;
  export function command():string {
    return tag('command', makeArray.call(arguments));
  }

  export function data(attrs:any, ...children:any[]):string;
  export function data(...children:any[]):string;
  export function data():string {
    return tag('data', makeArray.call(arguments));
  }

  export function datalist(attrs:any, ...children:any[]):string;
  export function datalist(...children:any[]):string;
  export function datalist():string {
    return tag('datalist', makeArray.call(arguments));
  }

  export function dd(attrs:any, ...children:any[]):string;
  export function dd(...children:any[]):string;
  export function dd():string {
    return tag('dd', makeArray.call(arguments));
  }

  export function del(attrs:any, ...children:any[]):string;
  export function del(...children:any[]):string;
  export function del():string {
    return tag('del', makeArray.call(arguments));
  }

  export function details(attrs:any, ...children:any[]):string;
  export function details(...children:any[]):string;
  export function details():string {
    return tag('details', makeArray.call(arguments));
  }

  export function dfn(attrs:any, ...children:any[]):string;
  export function dfn(...children:any[]):string;
  export function dfn():string {
    return tag('dfn', makeArray.call(arguments));
  }

  export function div(attrs:any, ...children:any[]):string;
  export function div(...children:any[]):string;
  export function div():string {
    return tag('div', makeArray.call(arguments));
  }

  export function dl(attrs:any, ...children:any[]):string;
  export function dl(...children:any[]):string;
  export function dl():string {
    return tag('dl', makeArray.call(arguments));
  }

  export function dt(attrs:any, ...children:any[]):string;
  export function dt(...children:any[]):string;
  export function dt():string {
    return tag('dt', makeArray.call(arguments));
  }

  export function em(attrs:any, ...children:any[]):string;
  export function em(...children:any[]):string;
  export function em():string {
    return tag('em', makeArray.call(arguments));
  }

  export function embed(attrs:any, ...children:any[]):string;
  export function embed(...children:any[]):string;
  export function embed():string {
    return tag('embed', makeArray.call(arguments));
  }

  export function eventsource(attrs:any, ...children:any[]):string;
  export function eventsource(...children:any[]):string;
  export function eventsource():string {
    return tag('eventsource', makeArray.call(arguments));
  }

  export function fieldset(attrs:any, ...children:any[]):string;
  export function fieldset(...children:any[]):string;
  export function fieldset():string {
    return tag('fieldset', makeArray.call(arguments));
  }

  export function figcaption(attrs:any, ...children:any[]):string;
  export function figcaption(...children:any[]):string;
  export function figcaption():string {
    return tag('figcaption', makeArray.call(arguments));
  }

  export function figure(attrs:any, ...children:any[]):string;
  export function figure(...children:any[]):string;
  export function figure():string {
    return tag('figure', makeArray.call(arguments));
  }

  export function footer(attrs:any, ...children:any[]):string;
  export function footer(...children:any[]):string;
  export function footer():string {
    return tag('footer', makeArray.call(arguments));
  }

  export function form(attrs:any, ...children:any[]):string;
  export function form(...children:any[]):string;
  export function form():string {
    return tag('form', makeArray.call(arguments));
  }

  export function h1(attrs:any, ...children:any[]):string;
  export function h1(...children:any[]):string;
  export function h1():string {
    return tag('h1', makeArray.call(arguments));
  }

  export function h2(attrs:any, ...children:any[]):string;
  export function h2(...children:any[]):string;
  export function h2():string {
    return tag('h2', makeArray.call(arguments));
  }

  export function h3(attrs:any, ...children:any[]):string;
  export function h3(...children:any[]):string;
  export function h3():string {
    return tag('h3', makeArray.call(arguments));
  }

  export function h4(attrs:any, ...children:any[]):string;
  export function h4(...children:any[]):string;
  export function h4():string {
    return tag('h4', makeArray.call(arguments));
  }

  export function h5(attrs:any, ...children:any[]):string;
  export function h5(...children:any[]):string;
  export function h5():string {
    return tag('h5', makeArray.call(arguments));
  }

  export function h6(attrs:any, ...children:any[]):string;
  export function h6(...children:any[]):string;
  export function h6():string {
    return tag('h6', makeArray.call(arguments));
  }

  export function head(attrs:any, ...children:any[]):string;
  export function head(...children:any[]):string;
  export function head():string {
    return tag('head', makeArray.call(arguments));
  }

  export function header(attrs:any, ...children:any[]):string;
  export function header(...children:any[]):string;
  export function header():string {
    return tag('header', makeArray.call(arguments));
  }

  export function hgroup(attrs:any, ...children:any[]):string;
  export function hgroup(...children:any[]):string;
  export function hgroup():string {
    return tag('hgroup', makeArray.call(arguments));
  }

  export function html(attrs:any, ...children:any[]):string;
  export function html(...children:any[]):string;
  export function html():string {
    return tag('html', makeArray.call(arguments));
  }

  export function i(attrs:any, ...children:any[]):string;
  export function i(...children:any[]):string;
  export function i():string {
    return tag('i', makeArray.call(arguments));
  }

  export function iframe(attrs:any, ...children:any[]):string;
  export function iframe(...children:any[]):string;
  export function iframe():string {
    return tag('iframe', makeArray.call(arguments));
  }

  export function ins(attrs:any, ...children:any[]):string;
  export function ins(...children:any[]):string;
  export function ins():string {
    return tag('ins', makeArray.call(arguments));
  }

  export function kbd(attrs:any, ...children:any[]):string;
  export function kbd(...children:any[]):string;
  export function kbd():string {
    return tag('kbd', makeArray.call(arguments));
  }

  export function keygen(attrs:any, ...children:any[]):string;
  export function keygen(...children:any[]):string;
  export function keygen():string {
    return tag('keygen', makeArray.call(arguments));
  }

  export function label(attrs:any, ...children:any[]):string;
  export function label(...children:any[]):string;
  export function label():string {
    return tag('label', makeArray.call(arguments));
  }

  export function legend(attrs:any, ...children:any[]):string;
  export function legend(...children:any[]):string;
  export function legend():string {
    return tag('legend', makeArray.call(arguments));
  }

  export function li(attrs:any, ...children:any[]):string;
  export function li(...children:any[]):string;
  export function li():string {
    return tag('li', makeArray.call(arguments));
  }

  export function mark(attrs:any, ...children:any[]):string;
  export function mark(...children:any[]):string;
  export function mark():string {
    return tag('mark', makeArray.call(arguments));
  }

  export function map(attrs:any, ...children:any[]):string;
  export function map(...children:any[]):string;
  export function map():string {
    return tag('map', makeArray.call(arguments));
  }

  export function menu(attrs:any, ...children:any[]):string;
  export function menu(...children:any[]):string;
  export function menu():string {
    return tag('menu', makeArray.call(arguments));
  }

  export function meter(attrs:any, ...children:any[]):string;
  export function meter(...children:any[]):string;
  export function meter():string {
    return tag('meter', makeArray.call(arguments));
  }

  export function nav(attrs:any, ...children:any[]):string;
  export function nav(...children:any[]):string;
  export function nav():string {
    return tag('nav', makeArray.call(arguments));
  }

  export function noscript(attrs:any, ...children:any[]):string;
  export function noscript(...children:any[]):string;
  export function noscript():string {
    return tag('noscript', makeArray.call(arguments));
  }

  export function object(attrs:any, ...children:any[]):string;
  export function object(...children:any[]):string;
  export function object():string {
    return tag('object', makeArray.call(arguments));
  }

  export function ol(attrs:any, ...children:any[]):string;
  export function ol(...children:any[]):string;
  export function ol():string {
    return tag('ol', makeArray.call(arguments));
  }

  export function optgroup(attrs:any, ...children:any[]):string;
  export function optgroup(...children:any[]):string;
  export function optgroup():string {
    return tag('optgroup', makeArray.call(arguments));
  }

  export function option(attrs:any, ...children:any[]):string;
  export function option(...children:any[]):string;
  export function option():string {
    return tag('option', makeArray.call(arguments));
  }

  export function output(attrs:any, ...children:any[]):string;
  export function output(...children:any[]):string;
  export function output():string {
    return tag('output', makeArray.call(arguments));
  }

  export function p(attrs:any, ...children:any[]):string;
  export function p(...children:any[]):string;
  export function p():string {
    return tag('p', makeArray.call(arguments));
  }

  export function pre(attrs:any, ...children:any[]):string;
  export function pre(...children:any[]):string;
  export function pre():string {
    return tag('pre', makeArray.call(arguments));
  }

  export function progress(attrs:any, ...children:any[]):string;
  export function progress(...children:any[]):string;
  export function progress():string {
    return tag('progress', makeArray.call(arguments));
  }

  export function q(attrs:any, ...children:any[]):string;
  export function q(...children:any[]):string;
  export function q():string {
    return tag('q', makeArray.call(arguments));
  }

  export function ruby(attrs:any, ...children:any[]):string;
  export function ruby(...children:any[]):string;
  export function ruby():string {
    return tag('ruby', makeArray.call(arguments));
  }

  export function rp(attrs:any, ...children:any[]):string;
  export function rp(...children:any[]):string;
  export function rp():string {
    return tag('rp', makeArray.call(arguments));
  }

  export function rt(attrs:any, ...children:any[]):string;
  export function rt(...children:any[]):string;
  export function rt():string {
    return tag('rt', makeArray.call(arguments));
  }

  export function s(attrs:any, ...children:any[]):string;
  export function s(...children:any[]):string;
  export function s():string {
    return tag('s', makeArray.call(arguments));
  }

  export function samp(attrs:any, ...children:any[]):string;
  export function samp(...children:any[]):string;
  export function samp():string {
    return tag('samp', makeArray.call(arguments));
  }

  export function script(attrs:any, ...children:any[]):string;
  export function script(...children:any[]):string;
  export function script():string {
    return tag('script', makeArray.call(arguments));
  }

  export function section(attrs:any, ...children:any[]):string;
  export function section(...children:any[]):string;
  export function section():string {
    return tag('section', makeArray.call(arguments));
  }

  export function select(attrs:any, ...children:any[]):string;
  export function select(...children:any[]):string;
  export function select():string {
    return tag('select', makeArray.call(arguments));
  }

  export function small(attrs:any, ...children:any[]):string;
  export function small(...children:any[]):string;
  export function small():string {
    return tag('small', makeArray.call(arguments));
  }

  export function source(attrs:any, ...children:any[]):string;
  export function source(...children:any[]):string;
  export function source():string {
    return tag('source', makeArray.call(arguments));
  }

  export function span(attrs:any, ...children:any[]):string;
  export function span(...children:any[]):string;
  export function span():string {
    return tag('span', makeArray.call(arguments));
  }

  export function strong(attrs:any, ...children:any[]):string;
  export function strong(...children:any[]):string;
  export function strong():string {
    return tag('strong', makeArray.call(arguments));
  }

  export function style(attrs:any, ...children:any[]):string;
  export function style(...children:any[]):string;
  export function style():string {
    return tag('style', makeArray.call(arguments));
  }

  export function sub(attrs:any, ...children:any[]):string;
  export function sub(...children:any[]):string;
  export function sub():string {
    return tag('sub', makeArray.call(arguments));
  }

  export function summary(attrs:any, ...children:any[]):string;
  export function summary(...children:any[]):string;
  export function summary():string {
    return tag('summary', makeArray.call(arguments));
  }

  export function sup(attrs:any, ...children:any[]):string;
  export function sup(...children:any[]):string;
  export function sup():string {
    return tag('sup', makeArray.call(arguments));
  }

  export function table(attrs:any, ...children:any[]):string;
  export function table(...children:any[]):string;
  export function table():string {
    return tag('table', makeArray.call(arguments));
  }

  export function tbody(attrs:any, ...children:any[]):string;
  export function tbody(...children:any[]):string;
  export function tbody():string {
    return tag('tbody', makeArray.call(arguments));
  }

  export function td(attrs:any, ...children:any[]):string;
  export function td(...children:any[]):string;
  export function td():string {
    return tag('td', makeArray.call(arguments));
  }

  export function textarea(attrs:any, ...children:any[]):string;
  export function textarea(...children:any[]):string;
  export function textarea():string {
    return tag('textarea', makeArray.call(arguments));
  }

  export function tfoot(attrs:any, ...children:any[]):string;
  export function tfoot(...children:any[]):string;
  export function tfoot():string {
    return tag('tfoot', makeArray.call(arguments));
  }

  export function th(attrs:any, ...children:any[]):string;
  export function th(...children:any[]):string;
  export function th():string {
    return tag('th', makeArray.call(arguments));
  }

  export function thead(attrs:any, ...children:any[]):string;
  export function thead(...children:any[]):string;
  export function thead():string {
    return tag('thead', makeArray.call(arguments));
  }

  export function time(attrs:any, ...children:any[]):string;
  export function time(...children:any[]):string;
  export function time():string {
    return tag('time', makeArray.call(arguments));
  }

  export function title(attrs:any, ...children:any[]):string;
  export function title(...children:any[]):string;
  export function title():string {
    return tag('title', makeArray.call(arguments));
  }

  export function tr(attrs:any, ...children:any[]):string;
  export function tr(...children:any[]):string;
  export function tr():string {
    return tag('tr', makeArray.call(arguments));
  }

  export function track(attrs:any, ...children:any[]):string;
  export function track(...children:any[]):string;
  export function track():string {
    return tag('track', makeArray.call(arguments));
  }

  export function u(attrs:any, ...children:any[]):string;
  export function u(...children:any[]):string;
  export function u():string {
    return tag('u', makeArray.call(arguments));
  }

  export function ul(attrs:any, ...children:any[]):string;
  export function ul(...children:any[]):string;
  export function ul():string {
    return tag('ul', makeArray.call(arguments));
  }

  export function video(attrs:any, ...children:any[]):string;
  export function video(...children:any[]):string;
  export function video():string {
    return tag('video', makeArray.call(arguments));
  }

  export function wbr(attrs:any, ...children:any[]):string;
  export function wbr(...children:any[]):string;
  export function wbr():string {
    return tag('wbr', makeArray.call(arguments));
  }

  export function br(attrs?:any):string {
    return shortTag('br', attrs);
  }

  export function hr(attrs?:any):string {
    return shortTag('hr', attrs);
  }

  export function img(attrs?:any):string {
    return shortTag('img', attrs);
  }

  export function input(attrs?:any):string {
    return shortTag('input', attrs);
  }

  export function link(attrs?:any):string {
    return shortTag('link', attrs);
  }

  export function meta(attrs?:any):string {
    return shortTag('meta', attrs);
  }

  export function param(attrs?:any):string {
    return shortTag('param', attrs);
  }

}
