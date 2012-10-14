/// <reference path="../template.d.ts"/>
var Template;
(function (Template) {
    (function (Deeper) {
        function widget() {
            var children = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                children[_i] = arguments[_i + 0];
            }
            return Template.section({
                cls: 'widget'
            }, children.join(''));
        }
        Deeper.widget = widget;
        function custom_widget() {
            var children = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                children[_i] = arguments[_i + 0];
            }
            children.unshift({
                cls: 'widget'
            });
            return Template.tag('widget', children);
        }
        Deeper.custom_widget = custom_widget;
        function my_widget() {
            return widget(Template.p("widget content"));
        }
        Deeper.my_widget = my_widget;
        function my_other_widget() {
            return custom_widget(Template.p("widget content"));
        }
        Deeper.my_other_widget = my_other_widget;
        function hello() {
            return Template.nested("from hello");
        }
        Deeper.hello = hello;
    })(Template.Deeper || (Template.Deeper = {}));
    var Deeper = Template.Deeper;

})(Template || (Template = {}));

