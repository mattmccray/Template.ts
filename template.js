var Template;
(function (Template) {
    Template.VERSION = "1.1.3";
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
    function shortTag(name, atts) {
        if (typeof atts === "undefined") { atts = {
        }; }
        return "<" + name + toAttrs(atts) + "/>";
    }
    Template.shortTag = shortTag;
})(Template || (Template = {}));

var Template;
(function (Template) {
    function image(src, attrs) {
        if (typeof attrs === "undefined") { attrs = {
        }; }
        return Template.shortTag('img', Template.merge(attrs, {
            src: src
        }));
    }
    Template.image = image;
    function stylesheet(src, attrs) {
        if (typeof attrs === "undefined") { attrs = {
        }; }
        return Template.shortTag('link', Template.merge(attrs, {
            src: src,
            rel: "stylesheet",
            type: "text/css"
        }));
    }
    Template.stylesheet = stylesheet;
})(Template || (Template = {}));

var Template;
(function (Template) {
    var makeArray = Array.prototype.slice;
    function a() {
        return Template.tag('a', makeArray.call(arguments));
    }
    Template.a = a;
    function abbr() {
        return Template.tag('abbr', makeArray.call(arguments));
    }
    Template.abbr = abbr;
    function address() {
        return Template.tag('address', makeArray.call(arguments));
    }
    Template.address = address;
    function area() {
        return Template.tag('area', makeArray.call(arguments));
    }
    Template.area = area;
    function article() {
        return Template.tag('article', makeArray.call(arguments));
    }
    Template.article = article;
    function aside() {
        return Template.tag('aside', makeArray.call(arguments));
    }
    Template.aside = aside;
    function audio() {
        return Template.tag('audio', makeArray.call(arguments));
    }
    Template.audio = audio;
    function b() {
        return Template.tag('b', makeArray.call(arguments));
    }
    Template.b = b;
    function base() {
        return Template.tag('base', makeArray.call(arguments));
    }
    Template.base = base;
    function bdi() {
        return Template.tag('bdi', makeArray.call(arguments));
    }
    Template.bdi = bdi;
    function bdo() {
        return Template.tag('bdo', makeArray.call(arguments));
    }
    Template.bdo = bdo;
    function blockquote() {
        return Template.tag('blockquote', makeArray.call(arguments));
    }
    Template.blockquote = blockquote;
    function body() {
        return Template.tag('body', makeArray.call(arguments));
    }
    Template.body = body;
    function button() {
        return Template.tag('button', makeArray.call(arguments));
    }
    Template.button = button;
    function canvas() {
        return Template.tag('canvas', makeArray.call(arguments));
    }
    Template.canvas = canvas;
    function caption() {
        return Template.tag('caption', makeArray.call(arguments));
    }
    Template.caption = caption;
    function cite() {
        return Template.tag('cite', makeArray.call(arguments));
    }
    Template.cite = cite;
    function code() {
        return Template.tag('code', makeArray.call(arguments));
    }
    Template.code = code;
    function col() {
        return Template.tag('col', makeArray.call(arguments));
    }
    Template.col = col;
    function colgroup() {
        return Template.tag('colgroup', makeArray.call(arguments));
    }
    Template.colgroup = colgroup;
    function command() {
        return Template.tag('command', makeArray.call(arguments));
    }
    Template.command = command;
    function data() {
        return Template.tag('data', makeArray.call(arguments));
    }
    Template.data = data;
    function datalist() {
        return Template.tag('datalist', makeArray.call(arguments));
    }
    Template.datalist = datalist;
    function dd() {
        return Template.tag('dd', makeArray.call(arguments));
    }
    Template.dd = dd;
    function del() {
        return Template.tag('del', makeArray.call(arguments));
    }
    Template.del = del;
    function details() {
        return Template.tag('details', makeArray.call(arguments));
    }
    Template.details = details;
    function dfn() {
        return Template.tag('dfn', makeArray.call(arguments));
    }
    Template.dfn = dfn;
    function div() {
        return Template.tag('div', makeArray.call(arguments));
    }
    Template.div = div;
    function dl() {
        return Template.tag('dl', makeArray.call(arguments));
    }
    Template.dl = dl;
    function dt() {
        return Template.tag('dt', makeArray.call(arguments));
    }
    Template.dt = dt;
    function em() {
        return Template.tag('em', makeArray.call(arguments));
    }
    Template.em = em;
    function embed() {
        return Template.tag('embed', makeArray.call(arguments));
    }
    Template.embed = embed;
    function eventsource() {
        return Template.tag('eventsource', makeArray.call(arguments));
    }
    Template.eventsource = eventsource;
    function fieldset() {
        return Template.tag('fieldset', makeArray.call(arguments));
    }
    Template.fieldset = fieldset;
    function figcaption() {
        return Template.tag('figcaption', makeArray.call(arguments));
    }
    Template.figcaption = figcaption;
    function figure() {
        return Template.tag('figure', makeArray.call(arguments));
    }
    Template.figure = figure;
    function footer() {
        return Template.tag('footer', makeArray.call(arguments));
    }
    Template.footer = footer;
    function form() {
        return Template.tag('form', makeArray.call(arguments));
    }
    Template.form = form;
    function h1() {
        return Template.tag('h1', makeArray.call(arguments));
    }
    Template.h1 = h1;
    function h2() {
        return Template.tag('h2', makeArray.call(arguments));
    }
    Template.h2 = h2;
    function h3() {
        return Template.tag('h3', makeArray.call(arguments));
    }
    Template.h3 = h3;
    function h4() {
        return Template.tag('h4', makeArray.call(arguments));
    }
    Template.h4 = h4;
    function h5() {
        return Template.tag('h5', makeArray.call(arguments));
    }
    Template.h5 = h5;
    function h6() {
        return Template.tag('h6', makeArray.call(arguments));
    }
    Template.h6 = h6;
    function head() {
        return Template.tag('head', makeArray.call(arguments));
    }
    Template.head = head;
    function header() {
        return Template.tag('header', makeArray.call(arguments));
    }
    Template.header = header;
    function hgroup() {
        return Template.tag('hgroup', makeArray.call(arguments));
    }
    Template.hgroup = hgroup;
    function html() {
        return Template.tag('html', makeArray.call(arguments));
    }
    Template.html = html;
    function i() {
        return Template.tag('i', makeArray.call(arguments));
    }
    Template.i = i;
    function iframe() {
        return Template.tag('iframe', makeArray.call(arguments));
    }
    Template.iframe = iframe;
    function ins() {
        return Template.tag('ins', makeArray.call(arguments));
    }
    Template.ins = ins;
    function kbd() {
        return Template.tag('kbd', makeArray.call(arguments));
    }
    Template.kbd = kbd;
    function keygen() {
        return Template.tag('keygen', makeArray.call(arguments));
    }
    Template.keygen = keygen;
    function label() {
        return Template.tag('label', makeArray.call(arguments));
    }
    Template.label = label;
    function legend() {
        return Template.tag('legend', makeArray.call(arguments));
    }
    Template.legend = legend;
    function li() {
        return Template.tag('li', makeArray.call(arguments));
    }
    Template.li = li;
    function mark() {
        return Template.tag('mark', makeArray.call(arguments));
    }
    Template.mark = mark;
    function map() {
        return Template.tag('map', makeArray.call(arguments));
    }
    Template.map = map;
    function menu() {
        return Template.tag('menu', makeArray.call(arguments));
    }
    Template.menu = menu;
    function meter() {
        return Template.tag('meter', makeArray.call(arguments));
    }
    Template.meter = meter;
    function nav() {
        return Template.tag('nav', makeArray.call(arguments));
    }
    Template.nav = nav;
    function noscript() {
        return Template.tag('noscript', makeArray.call(arguments));
    }
    Template.noscript = noscript;
    function object() {
        return Template.tag('object', makeArray.call(arguments));
    }
    Template.object = object;
    function ol() {
        return Template.tag('ol', makeArray.call(arguments));
    }
    Template.ol = ol;
    function optgroup() {
        return Template.tag('optgroup', makeArray.call(arguments));
    }
    Template.optgroup = optgroup;
    function option() {
        return Template.tag('option', makeArray.call(arguments));
    }
    Template.option = option;
    function output() {
        return Template.tag('output', makeArray.call(arguments));
    }
    Template.output = output;
    function p() {
        return Template.tag('p', makeArray.call(arguments));
    }
    Template.p = p;
    function pre() {
        return Template.tag('pre', makeArray.call(arguments));
    }
    Template.pre = pre;
    function progress() {
        return Template.tag('progress', makeArray.call(arguments));
    }
    Template.progress = progress;
    function q() {
        return Template.tag('q', makeArray.call(arguments));
    }
    Template.q = q;
    function ruby() {
        return Template.tag('ruby', makeArray.call(arguments));
    }
    Template.ruby = ruby;
    function rp() {
        return Template.tag('rp', makeArray.call(arguments));
    }
    Template.rp = rp;
    function rt() {
        return Template.tag('rt', makeArray.call(arguments));
    }
    Template.rt = rt;
    function s() {
        return Template.tag('s', makeArray.call(arguments));
    }
    Template.s = s;
    function samp() {
        return Template.tag('samp', makeArray.call(arguments));
    }
    Template.samp = samp;
    function script() {
        return Template.tag('script', makeArray.call(arguments));
    }
    Template.script = script;
    function section() {
        return Template.tag('section', makeArray.call(arguments));
    }
    Template.section = section;
    function select() {
        return Template.tag('select', makeArray.call(arguments));
    }
    Template.select = select;
    function small() {
        return Template.tag('small', makeArray.call(arguments));
    }
    Template.small = small;
    function source() {
        return Template.tag('source', makeArray.call(arguments));
    }
    Template.source = source;
    function span() {
        return Template.tag('span', makeArray.call(arguments));
    }
    Template.span = span;
    function strong() {
        return Template.tag('strong', makeArray.call(arguments));
    }
    Template.strong = strong;
    function style() {
        return Template.tag('style', makeArray.call(arguments));
    }
    Template.style = style;
    function sub() {
        return Template.tag('sub', makeArray.call(arguments));
    }
    Template.sub = sub;
    function summary() {
        return Template.tag('summary', makeArray.call(arguments));
    }
    Template.summary = summary;
    function sup() {
        return Template.tag('sup', makeArray.call(arguments));
    }
    Template.sup = sup;
    function table() {
        return Template.tag('table', makeArray.call(arguments));
    }
    Template.table = table;
    function tbody() {
        return Template.tag('tbody', makeArray.call(arguments));
    }
    Template.tbody = tbody;
    function td() {
        return Template.tag('td', makeArray.call(arguments));
    }
    Template.td = td;
    function textarea() {
        return Template.tag('textarea', makeArray.call(arguments));
    }
    Template.textarea = textarea;
    function tfoot() {
        return Template.tag('tfoot', makeArray.call(arguments));
    }
    Template.tfoot = tfoot;
    function th() {
        return Template.tag('th', makeArray.call(arguments));
    }
    Template.th = th;
    function thead() {
        return Template.tag('thead', makeArray.call(arguments));
    }
    Template.thead = thead;
    function time() {
        return Template.tag('time', makeArray.call(arguments));
    }
    Template.time = time;
    function title() {
        return Template.tag('title', makeArray.call(arguments));
    }
    Template.title = title;
    function tr() {
        return Template.tag('tr', makeArray.call(arguments));
    }
    Template.tr = tr;
    function track() {
        return Template.tag('track', makeArray.call(arguments));
    }
    Template.track = track;
    function u() {
        return Template.tag('u', makeArray.call(arguments));
    }
    Template.u = u;
    function ul() {
        return Template.tag('ul', makeArray.call(arguments));
    }
    Template.ul = ul;
    function video() {
        return Template.tag('video', makeArray.call(arguments));
    }
    Template.video = video;
    function wbr() {
        return Template.tag('wbr', makeArray.call(arguments));
    }
    Template.wbr = wbr;
    function br(atts) {
        return Template.shortTag('br', atts);
    }
    Template.br = br;
    function hr(atts) {
        return Template.shortTag('hr', atts);
    }
    Template.hr = hr;
    function img(atts) {
        return Template.shortTag('img', atts);
    }
    Template.img = img;
    function input(atts) {
        return Template.shortTag('input', atts);
    }
    Template.input = input;
    function link(atts) {
        return Template.shortTag('link', atts);
    }
    Template.link = link;
    function meta(atts) {
        return Template.shortTag('meta', atts);
    }
    Template.meta = meta;
    function param(atts) {
        return Template.shortTag('param', atts);
    }
    Template.param = param;
})(Template || (Template = {}));

