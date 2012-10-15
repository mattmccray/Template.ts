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

}
