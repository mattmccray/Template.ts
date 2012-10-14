/// <reference path="template"/>
/// <reference path="template_tags"/>

module Template {

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