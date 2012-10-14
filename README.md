Template.ts
===========

Simple, code based, template engine for TypeScript.

Create your templates in the `Template` module:

```typescript
module Template {
  
  export function layout(...content:string[]):string {
    return article(
      header(
        h1("My Page")
      ),
      section({ id:"main_content", cls:"content-area" },
        content.join('')
      ),
      footer(
        p("&copy; me!")
      )
    );
  }

  export function home():string {
    return layout(
      h2("Home Page"),
      p("My homepage conent! ")
    );
  }
}
```

Then, you can use it elsewhere (like, for example, a `Backbone.View`):

```typescript
module App.Views {
  
  class HomeView extends Backbone.View {
    render() {
      this.$el.html( Template.home() );
      return this;
    }
  }
}
```

Or if you want to, you can nest your templates in submodules:

```typescript
module Template.AppViews {
  
  export function listView(id:string = "my_list", attrs?:any={}): string {
    attrs.id = id;
    attrs.cls = 'list-view';
    return ul(attrs);
  }

  export function listItem(label:string, attrs?:any={}):string {
    atts.cls = 'list-item'
    return li(attrs,
      div({ cls:'label' }, label)
    );
  }

}
```