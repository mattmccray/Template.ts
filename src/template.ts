/// <reference path="template_tags"/>
/// <reference path="template_helpers"/>

module Template {

  export var VERSION:string = "1.0.1"
  
  export var attrHooks:any = {
    "classname": "class",
    "cname": "class",
    "cls": "class"
  }

  export function toAttrs(attrs:any, prefix?:string = ""):string {
    var atts= "";
    for(var key in attrs) {
      var lKey = key.toLowerCase(),
          keyName = (lKey in attrHooks) ? attrHooks[lKey] : key,
          value = attrs[key];
      if(typeof value == "object") {
        atts += toAttrs( value, keyName + '-' ); 
      } else {
        atts += " "+ prefix + keyName + '='+ JSON.stringify( String(value) );  
      }
    }
    return atts;
  }
  
  export function text(...children:any[]):string {
    return children.join('');
  }
  
  export function tag(name, ...children:any[]):string {
    var atts= (children.length > 0 && typeof children[0] == 'object') ? toAttrs(children.shift()) : "";
    return "<"+ name + atts +">"+ children.join('') +"</"+ name +">";
  }

  // Children are swallowed up!
  export function shortTag(name, atts?:any= {}):string {
    return "<"+ name + toAttrs(atts) +"/>";
  }

}
