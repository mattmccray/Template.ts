// template.ts 1.1.3 <https://github.com/darthapo/template.ts>
var Template;
(function (Template) {
    Template.VERSION = "1.2.4";
    Template.attrHooks = {
        "classname": "class",
        "cname": "class",
        "cls": "class"
    };
    function merge(target, source) {
        for(var key in source) {
            target[key] = source[key];
        }
        return target;
    }
    Template.merge = merge;
    function toAttrs(attrs, prefix) {
        if (typeof prefix === "undefined") { prefix = ""; }
        var atts = "";
        for(var key in attrs) {
            var lKey = key.toLowerCase();
            var keyName = (lKey in Template.attrHooks) ? Template.attrHooks[lKey] : key;
            var value = attrs[key];

            if(typeof value == "object") {
                var newPrefix = keyName + '-';
                newPrefix = (prefix == "") ? newPrefix : prefix + newPrefix;
                atts += toAttrs(value, newPrefix);
            } else {
                atts += " " + prefix + keyName + '=' + JSON.stringify(String(value));
            }
        }
        return atts;
    }
    Template.toAttrs = toAttrs;
    function text() {
        var children = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            children[_i] = arguments[_i + 0];
        }
        return children.join('');
    }
    Template.text = text;
    function tag(name, children) {
        if (typeof children === "undefined") { children = []; }
        var atts = (children.length > 0 && typeof children[0] == 'object') ? toAttrs(children.shift()) : "";
        return "<" + name + atts + ">" + children.join('') + "</" + name + ">";
    }
    Template.tag = tag;
    // Children are swallowed up!
    function shortTag(name, atts) {
        if (typeof atts === "undefined") { atts = {
        }; }
        return "<" + name + toAttrs(atts) + "/>";
    }
    Template.shortTag = shortTag;
    // Tag Helpers:
    function image(src, attrs) {
        if (typeof attrs === "undefined") { attrs = {
        }; }
        return shortTag('img', merge(attrs, {
            src: src
        }));
    }
    Template.image = image;
    function stylesheet(src, attrs) {
        if (typeof attrs === "undefined") { attrs = {
        }; }
        return shortTag('link', merge(attrs, {
            src: src,
            rel: "stylesheet",
            type: "text/css"
        }));
    }
    Template.stylesheet = stylesheet;
    var makeArray = Array.prototype.slice;
            function a() {
        return tag('a', makeArray.call(arguments));
    }
    Template.a = a;
            function abbr() {
        return tag('abbr', makeArray.call(arguments));
    }
    Template.abbr = abbr;
            function address() {
        return tag('address', makeArray.call(arguments));
    }
    Template.address = address;
            function area() {
        return tag('area', makeArray.call(arguments));
    }
    Template.area = area;
            function article() {
        return tag('article', makeArray.call(arguments));
    }
    Template.article = article;
            function aside() {
        return tag('aside', makeArray.call(arguments));
    }
    Template.aside = aside;
            function audio() {
        return tag('audio', makeArray.call(arguments));
    }
    Template.audio = audio;
            function b() {
        return tag('b', makeArray.call(arguments));
    }
    Template.b = b;
            function base() {
        return tag('base', makeArray.call(arguments));
    }
    Template.base = base;
            function bdi() {
        return tag('bdi', makeArray.call(arguments));
    }
    Template.bdi = bdi;
            function bdo() {
        return tag('bdo', makeArray.call(arguments));
    }
    Template.bdo = bdo;
            function blockquote() {
        return tag('blockquote', makeArray.call(arguments));
    }
    Template.blockquote = blockquote;
            function body() {
        return tag('body', makeArray.call(arguments));
    }
    Template.body = body;
            function button() {
        return tag('button', makeArray.call(arguments));
    }
    Template.button = button;
            function canvas() {
        return tag('canvas', makeArray.call(arguments));
    }
    Template.canvas = canvas;
            function caption() {
        return tag('caption', makeArray.call(arguments));
    }
    Template.caption = caption;
            function cite() {
        return tag('cite', makeArray.call(arguments));
    }
    Template.cite = cite;
            function code() {
        return tag('code', makeArray.call(arguments));
    }
    Template.code = code;
            function col() {
        return tag('col', makeArray.call(arguments));
    }
    Template.col = col;
            function colgroup() {
        return tag('colgroup', makeArray.call(arguments));
    }
    Template.colgroup = colgroup;
            function command() {
        return tag('command', makeArray.call(arguments));
    }
    Template.command = command;
            function data() {
        return tag('data', makeArray.call(arguments));
    }
    Template.data = data;
            function datalist() {
        return tag('datalist', makeArray.call(arguments));
    }
    Template.datalist = datalist;
            function dd() {
        return tag('dd', makeArray.call(arguments));
    }
    Template.dd = dd;
            function del() {
        return tag('del', makeArray.call(arguments));
    }
    Template.del = del;
            function details() {
        return tag('details', makeArray.call(arguments));
    }
    Template.details = details;
            function dfn() {
        return tag('dfn', makeArray.call(arguments));
    }
    Template.dfn = dfn;
            function div() {
        return tag('div', makeArray.call(arguments));
    }
    Template.div = div;
            function dl() {
        return tag('dl', makeArray.call(arguments));
    }
    Template.dl = dl;
            function dt() {
        return tag('dt', makeArray.call(arguments));
    }
    Template.dt = dt;
            function em() {
        return tag('em', makeArray.call(arguments));
    }
    Template.em = em;
            function embed() {
        return tag('embed', makeArray.call(arguments));
    }
    Template.embed = embed;
            function eventsource() {
        return tag('eventsource', makeArray.call(arguments));
    }
    Template.eventsource = eventsource;
            function fieldset() {
        return tag('fieldset', makeArray.call(arguments));
    }
    Template.fieldset = fieldset;
            function figcaption() {
        return tag('figcaption', makeArray.call(arguments));
    }
    Template.figcaption = figcaption;
            function figure() {
        return tag('figure', makeArray.call(arguments));
    }
    Template.figure = figure;
            function footer() {
        return tag('footer', makeArray.call(arguments));
    }
    Template.footer = footer;
            function form() {
        return tag('form', makeArray.call(arguments));
    }
    Template.form = form;
            function h1() {
        return tag('h1', makeArray.call(arguments));
    }
    Template.h1 = h1;
            function h2() {
        return tag('h2', makeArray.call(arguments));
    }
    Template.h2 = h2;
            function h3() {
        return tag('h3', makeArray.call(arguments));
    }
    Template.h3 = h3;
            function h4() {
        return tag('h4', makeArray.call(arguments));
    }
    Template.h4 = h4;
            function h5() {
        return tag('h5', makeArray.call(arguments));
    }
    Template.h5 = h5;
            function h6() {
        return tag('h6', makeArray.call(arguments));
    }
    Template.h6 = h6;
            function head() {
        return tag('head', makeArray.call(arguments));
    }
    Template.head = head;
            function header() {
        return tag('header', makeArray.call(arguments));
    }
    Template.header = header;
            function hgroup() {
        return tag('hgroup', makeArray.call(arguments));
    }
    Template.hgroup = hgroup;
            function html() {
        return tag('html', makeArray.call(arguments));
    }
    Template.html = html;
            function i() {
        return tag('i', makeArray.call(arguments));
    }
    Template.i = i;
            function iframe() {
        return tag('iframe', makeArray.call(arguments));
    }
    Template.iframe = iframe;
            function ins() {
        return tag('ins', makeArray.call(arguments));
    }
    Template.ins = ins;
            function kbd() {
        return tag('kbd', makeArray.call(arguments));
    }
    Template.kbd = kbd;
            function keygen() {
        return tag('keygen', makeArray.call(arguments));
    }
    Template.keygen = keygen;
            function label() {
        return tag('label', makeArray.call(arguments));
    }
    Template.label = label;
            function legend() {
        return tag('legend', makeArray.call(arguments));
    }
    Template.legend = legend;
            function li() {
        return tag('li', makeArray.call(arguments));
    }
    Template.li = li;
            function mark() {
        return tag('mark', makeArray.call(arguments));
    }
    Template.mark = mark;
            function map() {
        return tag('map', makeArray.call(arguments));
    }
    Template.map = map;
            function menu() {
        return tag('menu', makeArray.call(arguments));
    }
    Template.menu = menu;
            function meter() {
        return tag('meter', makeArray.call(arguments));
    }
    Template.meter = meter;
            function nav() {
        return tag('nav', makeArray.call(arguments));
    }
    Template.nav = nav;
            function noscript() {
        return tag('noscript', makeArray.call(arguments));
    }
    Template.noscript = noscript;
            function object() {
        return tag('object', makeArray.call(arguments));
    }
    Template.object = object;
            function ol() {
        return tag('ol', makeArray.call(arguments));
    }
    Template.ol = ol;
            function optgroup() {
        return tag('optgroup', makeArray.call(arguments));
    }
    Template.optgroup = optgroup;
            function option() {
        return tag('option', makeArray.call(arguments));
    }
    Template.option = option;
            function output() {
        return tag('output', makeArray.call(arguments));
    }
    Template.output = output;
            function p() {
        return tag('p', makeArray.call(arguments));
    }
    Template.p = p;
            function pre() {
        return tag('pre', makeArray.call(arguments));
    }
    Template.pre = pre;
            function progress() {
        return tag('progress', makeArray.call(arguments));
    }
    Template.progress = progress;
            function q() {
        return tag('q', makeArray.call(arguments));
    }
    Template.q = q;
            function ruby() {
        return tag('ruby', makeArray.call(arguments));
    }
    Template.ruby = ruby;
            function rp() {
        return tag('rp', makeArray.call(arguments));
    }
    Template.rp = rp;
            function rt() {
        return tag('rt', makeArray.call(arguments));
    }
    Template.rt = rt;
            function s() {
        return tag('s', makeArray.call(arguments));
    }
    Template.s = s;
            function samp() {
        return tag('samp', makeArray.call(arguments));
    }
    Template.samp = samp;
            function script() {
        return tag('script', makeArray.call(arguments));
    }
    Template.script = script;
            function section() {
        return tag('section', makeArray.call(arguments));
    }
    Template.section = section;
            function select() {
        return tag('select', makeArray.call(arguments));
    }
    Template.select = select;
            function small() {
        return tag('small', makeArray.call(arguments));
    }
    Template.small = small;
            function source() {
        return tag('source', makeArray.call(arguments));
    }
    Template.source = source;
            function span() {
        return tag('span', makeArray.call(arguments));
    }
    Template.span = span;
            function strong() {
        return tag('strong', makeArray.call(arguments));
    }
    Template.strong = strong;
            function style() {
        return tag('style', makeArray.call(arguments));
    }
    Template.style = style;
            function sub() {
        return tag('sub', makeArray.call(arguments));
    }
    Template.sub = sub;
            function summary() {
        return tag('summary', makeArray.call(arguments));
    }
    Template.summary = summary;
            function sup() {
        return tag('sup', makeArray.call(arguments));
    }
    Template.sup = sup;
            function table() {
        return tag('table', makeArray.call(arguments));
    }
    Template.table = table;
            function tbody() {
        return tag('tbody', makeArray.call(arguments));
    }
    Template.tbody = tbody;
            function td() {
        return tag('td', makeArray.call(arguments));
    }
    Template.td = td;
            function textarea() {
        return tag('textarea', makeArray.call(arguments));
    }
    Template.textarea = textarea;
            function tfoot() {
        return tag('tfoot', makeArray.call(arguments));
    }
    Template.tfoot = tfoot;
            function th() {
        return tag('th', makeArray.call(arguments));
    }
    Template.th = th;
            function thead() {
        return tag('thead', makeArray.call(arguments));
    }
    Template.thead = thead;
            function time() {
        return tag('time', makeArray.call(arguments));
    }
    Template.time = time;
            function title() {
        return tag('title', makeArray.call(arguments));
    }
    Template.title = title;
            function tr() {
        return tag('tr', makeArray.call(arguments));
    }
    Template.tr = tr;
            function track() {
        return tag('track', makeArray.call(arguments));
    }
    Template.track = track;
            function u() {
        return tag('u', makeArray.call(arguments));
    }
    Template.u = u;
            function ul() {
        return tag('ul', makeArray.call(arguments));
    }
    Template.ul = ul;
            function video() {
        return tag('video', makeArray.call(arguments));
    }
    Template.video = video;
            function wbr() {
        return tag('wbr', makeArray.call(arguments));
    }
    Template.wbr = wbr;
    function br(attrs) {
        return shortTag('br', attrs);
    }
    Template.br = br;
    function hr(attrs) {
        return shortTag('hr', attrs);
    }
    Template.hr = hr;
    function img(attrs) {
        return shortTag('img', attrs);
    }
    Template.img = img;
    function input(attrs) {
        return shortTag('input', attrs);
    }
    Template.input = input;
    function link(attrs) {
        return shortTag('link', attrs);
    }
    Template.link = link;
    function meta(attrs) {
        return shortTag('meta', attrs);
    }
    Template.meta = meta;
    function param(attrs) {
        return shortTag('param', attrs);
    }
    Template.param = param;
})(Template || (Template = {}));

