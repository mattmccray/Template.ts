/// <reference path="../template.d.ts"/>
var Template;
(function (Template) {
    var MyView = (function () {
        function MyView() { }
        MyView.prototype.render = function () {
            return Template.div({
                cls: 'my-view'
            }, Template.p("MyView"));
        };
        return MyView;
    })();
    Template.MyView = MyView;    
})(Template || (Template = {}));

