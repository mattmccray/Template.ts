/// <reference path="../template.d.ts"/>
/// <reference path="../etc/doctest.d.ts"/>

module Template {

  export function my_view():string {
    return div({ id:'my_view', cls:'my-view' }, "My View");
  }

  export function parent(...children:string[]):string {
    return section({ cls:'parent' },
      children.join('')
    );
  }

  export function nested(content:string = "test"):string {
    return parent(
      div({ cls:'nested' },
        p(content)
      )
    );
  }

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
