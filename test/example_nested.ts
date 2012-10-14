/// <reference path="../template.d.ts"/>

module Template {

  export module Deeper {

    export function widget(...children:string[]):string {
      return section({ cls:'widget' },
        children.join('')
      );
    }

    export function custom_widget(...children:any[]):string {
      children.unshift({ cls:'widget' })
      return tag('widget', children);
    }

    export function my_widget():string {
      return widget(
        p("widget content")
      );
    }

    export function my_other_widget():string {
      return custom_widget(
        p("widget content")
      );
    }

    export function hello() {
      return nested("from hello");
    }

  }

}
