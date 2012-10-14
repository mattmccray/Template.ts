/// <reference path="template"/>
/// <reference path="template_tags"/>

module Template {

  function merge(target:any, src:any):any {
    for(var key in src) {
      target[key]= src[key];
    }
    return target;
  }

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

}