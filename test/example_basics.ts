/// <reference path="../template.d.ts"/>

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

}
