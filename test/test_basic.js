/// <reference path="../template.d.ts"/>
/// <reference path="../etc/doctest.d.ts"/>
var Template;
(function (Template) {
    function my_view() {
        return Template.div({
            id: 'my_view',
            cls: 'my-view'
        }, "My View");
    }
    Template.my_view = my_view;
    function parent() {
        var children = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            children[_i] = arguments[_i + 0];
        }
        return Template.section({
            cls: 'parent'
        }, children.join(''));
    }
    Template.parent = parent;
    function nested(content) {
        if (typeof content === "undefined") { content = "test"; }
        return parent(Template.div({
            cls: 'nested'
        }, Template.p(content)));
    }
    Template.nested = nested;
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
            return Template.tag('widget', [
                {
                    cls: 'widget'
                }, 
                children.join('')
            ]);
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
            return nested("from hello");
        }
        Deeper.hello = hello;
    })(Template.Deeper || (Template.Deeper = {}));
    var Deeper = Template.Deeper;

})(Template || (Template = {}));

