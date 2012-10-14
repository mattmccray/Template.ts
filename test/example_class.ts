/// <reference path="../template.d.ts"/>

module Template {

  export class MyView {

    render() {
      return div({ cls:'my-view' },
        p("MyView")
      );
    }

  }

}