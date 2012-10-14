/// <reference path="../template.d.ts"/>
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
})(Template || (Template = {}));

