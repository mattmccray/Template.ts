Template.ts
===========

Simple, code based, template engine for TypeScript.

Define your template functions in the `Template` module to get access to html markup functions, like this:

```javascript
module Template {
  
  export function layout(...content:string[]):string {
    // Calling article() will return an html string "<article></article>"
    // If the first arguments is an object, it'll be converted into a set
    // of tag attributes. Nest the calls to build the html structure:
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
    // You can treat your exported template functions as custom tags:
    return layout(
      h2("Home Page"),
      p("My homepage content!")
    );
  }
}

// Render by calling it:
Template.home();
// => <article><header><h1>My Page</h1></header><section id="main_content" class="content-area"><h2>Home Page</h2><p>My homepage content!</p></section><footer><p>&copy; me!</p></footer></article>
```

You can render the template by calling the function (like, for example, in a `Backbone.View`):

```javascript
module App.Views {
  
  class HomeView extends Backbone.View {
    render() {
      
      // Call Template.home() to render the template:
      this.$el.html( Template.home() );

      return this;
    }
  }
}
```

Or if you want to, you can nest your templates in submodules:

```javascript
module Template.AppViews {
  
  export function listView(id:string = "my_list", attrs?:any={}): string {
    // the merge helper is like _ or $'s extend method.
    merge(attrs, {
      id: id,
      cls: 'list-view'
    });
    return ul(attrs);
  }

  export function listItem(label:string, attrs?:any={}):string {
    merge(attrs, { cls: 'list-item' });
    return li(attrs,
      div({ cls:'label' }, label)
    );
  }

}
```

## How it works

Using TypeScript's module inference, you can omit the module name for exported functions within the module or submodule. Example:

```javascript
module Root {
  export function helper() {
    // This function is available externally as `Root.helper()`
    // But any class/method/submodule under this module can 
    // call it directly: `helper()` 
    // (even from different source files)
    return "helper";
  }

  export function use_helper() {
    return helper(); // calls Root.helper()
  }

  class Test {
    render() {
      return helper(); // calls Root.helper()
    }
  }

  export module Sub {
    export function use_helper() {
      return helper(); // calls Root.helper()
    }
  }

  // ETC and so on...
}
```

## Customize the module name

If you don't like the `Template` module name, or you want to put it in your own namespace you can use the `etc/remodulerize.sh` tool:

```bash
sh etc/remodulerize.sh App.Views
```

Given that example, it would create two files: `app_views.ts` and `app_views.d.ts` and changes the source from using `module Template` to using `module App.Views`.

### Why you might want to do this

It can be handy if you're building a Backbone app and want to inline the html building in the View. If you remodulerize to `App.Views`, you can then do this:

```javascript
module App.Views {
  export class UserView extends Backbone.View {
    render() {
      this.$el.html(
        // You can use the html markup functions directly:
        div({ id:'user_view', cls:'user-view' },
          div('Hello ', this.model.get('fullname'))
        )
      );
      return this;
    }
  }
  }
}
```

## Attribute objects

If the first argument to a markup function is an object literal, Template.ts will convert it into an attribute string:

```javascript
Template.div({ id:"my_div" });
// => <div id="my_div"></div>
```

You can nest the object literals to create hyphenated attributes, like this:

```javascript
Template.div({ data:{ enable:true, focus:true } });
// => <div data-enable="true" data-focus="true"></div>
```

You can alias object keys to attribute names. For example you can't use `class` as an object key (without escaping it, bah) by using `Template.attrHooks` you can alias a `cls` object key to output a `class` attribute name.

There are a few already defined:

```javascript
Template.attrHooks = {
  'cls': 'class',
  'cname': 'class',
  'classname': 'class'
}

Template.div({ cls:"my-div" });
// => <div class="my-div"></div>
```

Could be useful if you're using jQuery Mobile, or the like:

```javascript
Template.attrHooks['jenable']= 'data-enabled'

Template.div({ jenable:true });
// => <div data-enabled="true"></div>
```
