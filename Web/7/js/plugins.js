jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    }, easeInQuad: function (n, e, t, u, a) {
        return u * (e /= a) * e + t
    }, easeOutQuad: function (n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    }, easeInOutQuad: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    }, easeInCubic: function (n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    }, easeOutCubic: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    }, easeInOutCubic: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    }, easeInQuart: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    }, easeOutQuart: function (n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    }, easeInOutQuart: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    }, easeInQuint: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    }, easeOutQuint: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    }, easeInOutQuint: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    }, easeInSine: function (n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    }, easeOutSine: function (n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    }, easeInOutSine: function (n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    }, easeInExpo: function (n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    }, easeOutExpo: function (n, e, t, u, a) {
        return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
    }, easeInOutExpo: function (n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    }, easeInCirc: function (n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    }, easeOutCirc: function (n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    }, easeInOutCirc: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    }, easeInElastic: function (n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
    }, easeOutElastic: function (n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    }, easeInOutElastic: function (n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    }, easeInBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    }, easeOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    }, easeInOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    }, easeInBounce: function (n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    }, easeOutBounce: function (n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    }, easeInOutBounce: function (n, e, t, u, a) {
        return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});
!function (e, t, n) {
    function r(n) {
        var r = t.console;
        i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }

    function a(t, n, a, i) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(t, n, {
                configurable: !0, enumerable: !0, get: function () {
                    return r(i), a
                }, set: function (e) {
                    r(i), a = e
                }
            })
        } catch (u) {
        }
        e._definePropertyBroken = !0, t[n] = a
    }

    var i = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () {
        i = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var u = e("<input/>", {size: 1}).attr("size") && e.attrFn, o = e.attr,
        s = e.attrHooks.value && e.attrHooks.value.get || function () {
            return null
        }, c = e.attrHooks.value && e.attrHooks.value.set || function () {
            return n
        }, d = /^(?:input|button)$/i, f = /^[238]$/,
        p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        l = /^(?:checked|selected)$/i;
    a(e, "attrFn", u || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, a, i, s) {
        var c = a.toLowerCase(), h = t && t.nodeType;
        return s && (o.length < 4 && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !f.test(h) && (u ? a in u : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && d.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
            get: function (t, r) {
                var a, i = e.prop(t, r);
                return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
            }, set: function (t, n, r) {
                var a;
                return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
            }
        }, l.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), o.call(e, t, a, i))
    }, e.attrHooks.value = {
        get: function (e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? s.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        }, set: function (e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? c.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value', val) no longer sets properties"), void (e.value = t))
        }
    };
    var h, g, v = e.fn.init, m = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function (t, n, a) {
        var i;
        return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function (e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {browser: t[1] || "", version: t[2] || "0"}
    }, e.browser || (h = e.uaMatch(navigator.userAgent), g = {}, h.browser && (g[h.browser] = !0, g.version = h.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), e.browser = g), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
        function t(e, n) {
            return new t.fn.init(e, n)
        }

        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({converters: {"text json": e.parseJSON}});
    var M = e.fn.data;
    e.fn.data = function (t) {
        var a, i, u = this[0];
        return !u || "events" !== t || 1 !== arguments.length || (a = e.data(u, t), i = e._data(u, t), a !== n && a !== i || i === n) ? M.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var w = /\/(java|ecma)script/i, b = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function () {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), b.apply(this, arguments)
    }, e.clean || (e.clean = function (t, n, a, i) {
        n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, r("jQuery.clean() is deprecated");
        var u, o, s, c, d = [];
        if (e.merge(d, e.buildFragment(t, n).childNodes), a) for (s = function (e) {
            return !e.type || w.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : a.appendChild(e) : void 0
        }, u = 0; null != (o = d[u]); u++) e.nodeName(o, "script") && s(o) || (a.appendChild(o), "undefined" != typeof o.getElementsByTagName && (c = e.grep(e.merge([], o.getElementsByTagName("script")), s), d.splice.apply(d, [u + 1, 0].concat(c)), u += c.length));
        return d
    });
    var Q = e.event.add, j = e.event.remove, I = e.event.trigger, O = e.fn.toggle, x = e.fn.live, k = e.fn.die,
        C = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", S = new RegExp("\\b(?:" + C + ")\\b"),
        N = /(?:^|\s)hover(\.\S+|)\b/, T = function (t) {
            return "string" != typeof t || e.event.special.hover ? t : (N.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(N, "mouseenter$1 mouseleave$1"))
        };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, a, i) {
        e !== document && S.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, T(t || ""), n, a, i)
    }, e.event.remove = function (e, t, n, r, a) {
        j.call(this, e, T(t) || "", n, r, a)
    }, e.fn.error = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function (t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return O.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments, i = t.guid || e.guid++, u = 0, o = function (n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % u;
            return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
        };
        for (o.guid = i; u < a.length;) a[u++].guid = i;
        return this.click(o)
    }, e.fn.live = function (t, n, a) {
        return r("jQuery.fn.live() is deprecated"), x ? x.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function (t, n) {
        return r("jQuery.fn.die() is deprecated"), k ? k.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function (e, t, n, a) {
        return n || S.test(e) || r("Global events are undocumented and deprecated"), I.call(this, e, t, n || document, a)
    }, e.each(C.split("|"), function (t, n) {
        e.event.special[n] = {
            setup: function () {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid, function () {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)), !1
            }, teardown: function () {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
            }
        }
    })
}(jQuery, window);
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function t(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {
        }
    }

    function r(n, o) {
        var i = u.raw ? n : t(n);
        return e.isFunction(o) ? o(i) : i
    }

    var c = /\+/g, u = e.cookie = function (t, c, s) {
        if (arguments.length > 1 && !e.isFunction(c)) {
            if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
                var a = s.expires, d = s.expires = new Date;
                d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
            }
            return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
        }
        for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
            var x = p[l].split("="), g = o(x.shift()), j = x.join("=");
            if (t === g) {
                f = r(j, c);
                break
            }
            t || void 0 === (j = r(j)) || (f[g] = j)
        }
        return f
    };
    u.defaults = {}, e.removeCookie = function (n, o) {
        return e.cookie(n, "", e.extend({}, o, {expires: -1})), !e.cookie(n)
    }
});

function PointerEventsPolyfill(t) {
    if (this.options = {
        selector: "*",
        mouseEvents: ["click", "dblclick", "mousedown", "mouseup"],
        usePolyfillIf: function () {
            if ("Microsoft Internet Explorer" == navigator.appName) {
                var t = navigator.userAgent;
                if (null != t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) {
                    var e = parseFloat(RegExp.$1);
                    if (11 > e) return !0
                }
            }
            return !1
        }
    }, t) {
        var e = this;
        $.each(t, function (t, i) {
            e.options[t] = i
        })
    }
    this.options.usePolyfillIf() && this.register_mouse_events()
}

PointerEventsPolyfill.initialize = function (t) {
    return null == PointerEventsPolyfill.singleton && (PointerEventsPolyfill.singleton = new PointerEventsPolyfill(t)), PointerEventsPolyfill.singleton
}, PointerEventsPolyfill.prototype.register_mouse_events = function () {
    $(document).on(this.options.mouseEvents.join(" "), this.options.selector, function (t) {
        if ("none" == $(this).css("pointer-events")) {
            var e = $(this).css("display");
            $(this).css("display", "none");
            var i = document.elementFromPoint(t.clientX, t.clientY);
            return e ? $(this).css("display", e) : $(this).css("display", ""), t.target = i, $(i).trigger(t), !1
        }
        return !0
    })
}, jQuery(document).ready(function () {
    PointerEventsPolyfill.initialize({})
});

!function (i) {
    i.fn.parallax = function () {
        var a = i(window).width();
        return this.each(function (t) {
            function n(t) {
                var n;
                n = a < 601 ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;
                var e = r.children("img").first(), l = e.height() - n, o = r.offset().top + n, h = r.offset().top,
                    d = i(window).scrollTop(), s = window.innerHeight, c = (d + s - h) / (n + s), g = Math.round(l * c);
                t && e.css("display", "block"), o > d && h < d + s && e.css("transform", "translate3D(-50%," + g + "px, 0)")
            }

            var r = i(this).prepend('<div class="material-parallax parallax"><img src="images/_blank.png" alt=""></div>').find(".material-parallax");
            r.children("img").first().attr("src", r.parents("[data-parallax-img]").data("parallax-img")), r.children("img").one("load", function () {
                n(!0)
            }).each(function () {
                this.complete && i(this).trigger("load")
            }), i(window).scroll(function () {
                a = i(window).width(), n(!1)
            }), i(window).resize(function () {
                a = i(window).width(), n(!1)
            })
        })
    }
}(jQuery);
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl,
                e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null,
                d = this._items.length, e = !this.settings.autoWidth, f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a = this.settings.stagePadding, b = this._coordinates, c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
            if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function (a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function (b, c) {
        var d = -1, e = 30, f = this.width(), g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b
        })
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) ;
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length,
            h = this.minimum(), i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function () {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : a < c;
            case">":
                return d ? a < c : a > c;
            case">=":
                return d ? a <= c : a >= c;
            case"<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = {item: {count: this._items.length, index: this.current()}},
            i = a.camelCase(a.grep(["on", b, d], function (a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function (a) {
        var c = {x: null, y: null};
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y}
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b)
                }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {lazyLoad: !1}, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        var b = this._core._current, c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
        a.each(d, function (b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
        var c = function () {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function (b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function () {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0),
            g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f) break;
                b = 0, ++c
            }
            b += this._core.mergers(this._core.relative(a))
        }
    }, e.prototype.draw = function () {
        var b, c = this._core.settings, d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }

    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, j = {
        csstransforms: function () {
            return !!e("transform")
        }, csstransforms3d: function () {
            return !!e("perspective")
        }, csstransitions: function () {
            return !!e("transition")
        }, cssanimations: function () {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
!function (t) {
    t.fn.camera = function (e, i) {
        function a() {
            return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? !0 : void 0
        }

        function s() {
            var e = t(L).width();
            t("li", L).removeClass("camera_visThumb"), t("li", L).each(function () {
                var i = t(this).position(), a = t("ul", L).outerWidth(), s = t("ul", L).offset().left,
                    r = t("> div", L).offset().left, o = r - s;
                o > 0 ? t(".camera_prevThumbs", Z).removeClass("hideNav") : t(".camera_prevThumbs", Z).addClass("hideNav"), a - o > e ? t(".camera_nextThumbs", Z).removeClass("hideNav") : t(".camera_nextThumbs", Z).addClass("hideNav");
                var n = i.left, h = i.left + t(this).width();
                e >= h - o && n - o >= 0 && t(this).addClass("camera_visThumb")
            })
        }

        function r() {
            function i() {
                if (g = p.width(), -1 != e.height.indexOf("%")) {
                    var i = Math.round(g / (100 / parseFloat(e.height)));
                    f = "" != e.minHeight && i < parseFloat(e.minHeight) ? parseFloat(e.minHeight) : i, p.css({height: f})
                } else "auto" == e.height ? f = p.height() : (f = parseFloat(e.height), p.css({height: f}));
                t(".camerarelative", y).css({width: g, height: f}), t(".imgLoaded", y).each(function () {
                    var i, a, s = t(this), r = s.attr("width"), o = s.attr("height"),
                        n = (s.index(), s.attr("data-alignment")), h = s.attr("data-portrait");
                    if (("undefined" == typeof n || n === !1 || "" === n) && (n = e.alignment), ("undefined" == typeof h || h === !1 || "" === h) && (h = e.portrait), 0 == h || "false" == h) if (g / f > r / o) {
                        var l = g / r, c = .5 * Math.abs(f - o * l);
                        switch (n) {
                            case"topLeft":
                                i = 0;
                                break;
                            case"topCenter":
                                i = 0;
                                break;
                            case"topRight":
                                i = 0;
                                break;
                            case"centerLeft":
                                i = "-" + c + "px";
                                break;
                            case"center":
                                i = "-" + c + "px";
                                break;
                            case"centerRight":
                                i = "-" + c + "px";
                                break;
                            case"bottomLeft":
                                i = "-" + 2 * c + "px";
                                break;
                            case"bottomCenter":
                                i = "-" + 2 * c + "px";
                                break;
                            case"bottomRight":
                                i = "-" + 2 * c + "px"
                        }
                        s.css({
                            height: o * l,
                            "margin-left": 0,
                            "margin-top": i,
                            position: "absolute",
                            visibility: "visible",
                            width: g
                        })
                    } else {
                        var l = f / o, c = .5 * Math.abs(g - r * l);
                        switch (n) {
                            case"topLeft":
                                a = 0;
                                break;
                            case"topCenter":
                                a = "-" + c + "px";
                                break;
                            case"topRight":
                                a = "-" + 2 * c + "px";
                                break;
                            case"centerLeft":
                                a = 0;
                                break;
                            case"center":
                                a = "-" + c + "px";
                                break;
                            case"centerRight":
                                a = "-" + 2 * c + "px";
                                break;
                            case"bottomLeft":
                                a = 0;
                                break;
                            case"bottomCenter":
                                a = "-" + c + "px";
                                break;
                            case"bottomRight":
                                a = "-" + 2 * c + "px"
                        }
                        s.css({
                            height: f,
                            "margin-left": a,
                            "margin-top": 0,
                            position: "absolute",
                            visibility: "visible",
                            width: r * l
                        })
                    } else if (g / f > r / o) {
                        var l = f / o, c = .5 * Math.abs(g - r * l);
                        switch (n) {
                            case"topLeft":
                                a = 0;
                                break;
                            case"topCenter":
                                a = c + "px";
                                break;
                            case"topRight":
                                a = 2 * c + "px";
                                break;
                            case"centerLeft":
                                a = 0;
                                break;
                            case"center":
                                a = c + "px";
                                break;
                            case"centerRight":
                                a = 2 * c + "px";
                                break;
                            case"bottomLeft":
                                a = 0;
                                break;
                            case"bottomCenter":
                                a = c + "px";
                                break;
                            case"bottomRight":
                                a = 2 * c + "px"
                        }
                        s.css({
                            height: f,
                            "margin-left": a,
                            "margin-top": 0,
                            position: "absolute",
                            visibility: "visible",
                            width: r * l
                        })
                    } else {
                        var l = g / r, c = .5 * Math.abs(f - o * l);
                        switch (n) {
                            case"topLeft":
                                i = 0;
                                break;
                            case"topCenter":
                                i = 0;
                                break;
                            case"topRight":
                                i = 0;
                                break;
                            case"centerLeft":
                                i = c + "px";
                                break;
                            case"center":
                                i = c + "px";
                                break;
                            case"centerRight":
                                i = c + "px";
                                break;
                            case"bottomLeft":
                                i = 2 * c + "px";
                                break;
                            case"bottomCenter":
                                i = 2 * c + "px";
                                break;
                            case"bottomRight":
                                i = 2 * c + "px"
                        }
                        s.css({
                            height: o * l,
                            "margin-left": 0,
                            "margin-top": i,
                            position: "absolute",
                            visibility: "visible",
                            width: g
                        })
                    }
                })
            }

            var a;
            1 == W ? (clearTimeout(a), a = setTimeout(i, 200)) : i(), W = !0
        }

        function o() {
            t("iframe", m).each(function () {
                t(".camera_caption", m).show();
                var i = t(this), a = i.attr("data-src");
                i.attr("src", a);
                var s = e.imagePath + "blank.gif", r = new Image;
                if (r.src = s, -1 != e.height.indexOf("%")) {
                    var o = Math.round(g / (100 / parseFloat(e.height)));
                    f = "" != e.minHeight && o < parseFloat(e.minHeight) ? parseFloat(e.minHeight) : o
                } else f = "auto" == e.height ? p.height() : parseFloat(e.height);
                i.after(t(r).attr({"class": "imgFake", width: g, height: f}));
                var n = i.clone();
                i.remove(), t(r).bind("click", function () {
                    "absolute" == t(this).css("position") ? (t(this).remove(), -1 != a.indexOf("vimeo") || -1 != a.indexOf("youtube") ? -1 != a.indexOf("?") ? autoplay = "&autoplay=1" : autoplay = "?autoplay=1" : -1 != a.indexOf("dailymotion") && (-1 != a.indexOf("?") ? autoplay = "&autoPlay=1" : autoplay = "?autoPlay=1"), n.attr("src", a + autoplay), Q = !0) : (t(this).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10
                    }).after(n), n.css({position: "absolute", top: 0, left: 0, zIndex: 9}))
                })
            })
        }

        function n(t) {
            for (var e, i, a = t.length; a; e = parseInt(Math.random() * a), i = t[--a], t[a] = t[e], t[e] = i) ;
            return t
        }

        function h() {
            if (t(L).length && !t($).length) {
                var e, i = t(L).outerWidth(),
                    a = (t("ul > li", L).outerWidth(), t("li.cameracurrent", L).length ? t("li.cameracurrent", L).position() : ""),
                    r = t("ul > li", L).length * t("ul > li", L).outerWidth(), o = t("ul", L).offset().left,
                    n = t("> div", L).offset().left;
                e = 0 > o ? "-" + (n - o) : n - o, 1 == at && (t("ul", L).width(t("ul > li", L).length * t("ul > li", L).outerWidth()), t(L).length && !t($).lenght && p.css({marginBottom: t(L).outerHeight()}), s(), t("ul", L).width(t("ul > li", L).length * t("ul > li", L).outerWidth()), t(L).length && !t($).lenght && p.css({marginBottom: t(L).outerHeight()})), at = !1;
                var h = t("li.cameracurrent", L).length ? a.left : "",
                    l = t("li.cameracurrent", L).length ? a.left + t("li.cameracurrent", L).outerWidth() : "";
                h < t("li.cameracurrent", L).outerWidth() && (h = 0), l - e > i ? r > h + i ? t("ul", L).animate({"margin-left": "-" + h + "px"}, 500, s) : t("ul", L).animate({"margin-left": "-" + (t("ul", L).outerWidth() - i) + "px"}, 500, s) : 0 > h - e ? t("ul", L).animate({"margin-left": "-" + h + "px"}, 500, s) : (t("ul", L).css({
                    "margin-left": "auto",
                    "margin-right": "auto"
                }), setTimeout(s, 100))
            }
        }

        function l() {
            K = 0;
            var i = t(".camera_bar_cont", Z).width(), a = t(".camera_bar_cont", Z).height();
            if ("pie" != u) switch (G) {
                case"leftToRight":
                    t("#" + v).css({right: i});
                    break;
                case"rightToLeft":
                    t("#" + v).css({left: i});
                    break;
                case"topToBottom":
                    t("#" + v).css({bottom: a});
                    break;
                case"bottomToTop":
                    t("#" + v).css({top: a})
            } else et.clearRect(0, 0, e.pieDiameter, e.pieDiameter)
        }

        function c(i) {
            _.addClass("camerasliding"), Q = !1;
            var s = parseFloat(t("div.cameraSlide.cameracurrent", y).index());
            if (i > 0) var d = i - 1; else if (s == P - 1) var d = 0; else var d = s + 1;
            var w = t(".cameraSlide:eq(" + d + ")", y),
                b = t(".cameraSlide:eq(" + (d + 1) + ")", y).addClass("cameranext");
            if (s != d + 1 && b.hide(), t(".cameraContent", m).fadeOut(600), t(".camera_caption", m).show(), t(".camerarelative", w).append(t("> div ", _).eq(d).find("> div.camera_effected")), t(".camera_target_content .cameraContent:eq(" + d + ")", p).append(t("> div ", _).eq(d).find("> div")), t(".imgLoaded", w).length) {
                if (S.length > d + 1 && !t(".imgLoaded", b).length) {
                    var x = S[d + 1], C = new Image;
                    C.src = x + "?" + (new Date).getTime(), b.prepend(t(C).attr("class", "imgLoaded").css("visibility", "hidden")), C.onload = function () {
                        yt = C.naturalWidth, wt = C.naturalHeight, t(C).attr("data-alignment", D[d + 1]).attr("data-portrait", E[d + 1]), t(C).attr("width", yt), t(C).attr("height", wt), r()
                    }
                }
                e.onLoaded.call(this), t(".camera_loader", p).is(":visible") ? t(".camera_loader", p).fadeOut(400) : (t(".camera_loader", p).css({visibility: "hidden"}), t(".camera_loader", p).fadeOut(400, function () {
                    t(".camera_loader", p).css({visibility: "visible"})
                }));
                var k, T, R, M, F, z = e.rows, I = e.cols, O = 1, q = 0,
                    W = new Array("simpleFade", "curtainTopLeft", "curtainTopRight", "curtainBottomLeft", "curtainBottomRight", "curtainSliceLeft", "curtainSliceRight", "blindCurtainTopLeft", "blindCurtainTopRight", "blindCurtainBottomLeft", "blindCurtainBottomRight", "blindCurtainSliceBottom", "blindCurtainSliceTop", "stampede", "mosaic", "mosaicReverse", "mosaicRandom", "mosaicSpiral", "mosaicSpiralReverse", "topLeftBottomRight", "bottomRightTopLeft", "bottomLeftTopRight", "topRightBottomLeft", "scrollLeft", "scrollRight", "scrollTop", "scrollBottom", "scrollHorz");
                marginLeft = 0, marginTop = 0, opacityOnGrid = 0, 1 == e.opacityOnGrid ? opacityOnGrid = 0 : opacityOnGrid = 1;
                var H = t(" > div", _).eq(d).attr("data-fx");
                if (M = a() && "" != e.mobileFx && "default" != e.mobileFx ? e.mobileFx : "undefined" != typeof H && H !== !1 && "default" !== H ? H : e.fx, "random" == M ? (M = n(W), M = M[0]) : (M = M, M.indexOf(",") > 0 && (M = M.replace(/ /g, ""), M = M.split(","), M = n(M), M = M[0])), dataEasing = t(" > div", _).eq(d).attr("data-easing"), mobileEasing = t(" > div", _).eq(d).attr("data-mobileEasing"), F = a() && "" != e.mobileEasing && "default" != e.mobileEasing ? "undefined" != typeof mobileEasing && mobileEasing !== !1 && "default" !== mobileEasing ? mobileEasing : e.mobileEasing : "undefined" != typeof dataEasing && dataEasing !== !1 && "default" !== dataEasing ? dataEasing : e.easing, k = t(" > div", _).eq(d).attr("data-slideOn"), "undefined" != typeof k && k !== !1) X = k; else if ("random" == e.slideOn) {
                    var X = new Array("next", "prev");
                    X = n(X), X = X[0]
                } else X = e.slideOn;
                var N = t(" > div", _).eq(d).attr("data-time");
                T = "undefined" != typeof N && N !== !1 && "" !== N ? parseFloat(N) : e.time;
                var V = t(" > div", _).eq(d).attr("data-transPeriod");
                switch (R = "undefined" != typeof V && V !== !1 && "" !== V ? parseFloat(V) : e.transPeriod, t(_).hasClass("camerastarted") || (M = "simpleFade", X = "next", F = "", R = 400, t(_).addClass("camerastarted")), M) {
                    case"simpleFade":
                        I = 1, z = 1;
                        break;
                    case"curtainTopLeft":
                        I = 0 == e.slicedCols ? e.cols : e.slicedCols, z = 1;
                        break;
                    case"curtainTopRight":
                        I = 0 == e.slicedCols ? e.cols : e.slicedCols, z = 1;
                        break;
                    case"curtainBottomLeft":
                        I = 0 == e.slicedCols ? e.cols : e.slicedCols, z = 1;
                        break;
                    case"curtainBottomRight":
                        I = 0 == e.slicedCols ? e.cols : e.slicedCols, z = 1;
                        break;
                    case"curtainSliceLeft":
                        I = 0 == e.slicedCols ? e.cols : e.slicedCols, z = 1;
                        break;
                    case"curtainSliceRight":
                        I = 0 == e.slicedCols ? e.cols : e.slicedCols, z = 1;
                        break;
                    case"blindCurtainTopLeft":
                        z = 0 == e.slicedRows ? e.rows : e.slicedRows, I = 1;
                        break;
                    case"blindCurtainTopRight":
                        z = 0 == e.slicedRows ? e.rows : e.slicedRows, I = 1;
                        break;
                    case"blindCurtainBottomLeft":
                        z = 0 == e.slicedRows ? e.rows : e.slicedRows, I = 1;
                        break;
                    case"blindCurtainBottomRight":
                        z = 0 == e.slicedRows ? e.rows : e.slicedRows, I = 1;
                        break;
                    case"blindCurtainSliceTop":
                        z = 0 == e.slicedRows ? e.rows : e.slicedRows, I = 1;
                        break;
                    case"blindCurtainSliceBottom":
                        z = 0 == e.slicedRows ? e.rows : e.slicedRows, I = 1;
                        break;
                    case"stampede":
                        q = "-" + R;
                        break;
                    case"mosaic":
                        q = e.gridDifference;
                        break;
                    case"mosaicReverse":
                        q = e.gridDifference;
                        break;
                    case"mosaicRandom":
                        break;
                    case"mosaicSpiral":
                        q = e.gridDifference, O = 1.7;
                        break;
                    case"mosaicSpiralReverse":
                        q = e.gridDifference, O = 1.7;
                        break;
                    case"topLeftBottomRight":
                        q = e.gridDifference, O = 6;
                        break;
                    case"bottomRightTopLeft":
                        q = e.gridDifference, O = 6;
                        break;
                    case"bottomLeftTopRight":
                        q = e.gridDifference, O = 6;
                        break;
                    case"topRightBottomLeft":
                        q = e.gridDifference, O = 6;
                        break;
                    case"scrollLeft":
                        I = 1, z = 1;
                        break;
                    case"scrollRight":
                        I = 1, z = 1;
                        break;
                    case"scrollTop":
                        I = 1, z = 1;
                        break;
                    case"scrollBottom":
                        I = 1, z = 1;
                        break;
                    case"scrollHorz":
                        I = 1, z = 1
                }
                for (var U, J, it = 0, at = z * I, st = g - Math.floor(g / I) * I, rt = f - Math.floor(f / z) * z, ot = 0, nt = 0, ht = new Array, lt = new Array, ct = new Array; at > it;) {
                    ht.push(it), lt.push(it), B.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                    var dt = t(".cameraappended:eq(" + it + ")", y);
                    "scrollLeft" == M || "scrollRight" == M || "scrollTop" == M || "scrollBottom" == M || "scrollHorz" == M ? Y.eq(d).clone().show().appendTo(dt) : "next" == X ? Y.eq(d).clone().show().appendTo(dt) : Y.eq(s).clone().show().appendTo(dt), U = st > it % I ? 1 : 0, it % I == 0 && (ot = 0), J = Math.floor(it / I) < rt ? 1 : 0, dt.css({
                        height: Math.floor(f / z + J + 1),
                        left: ot,
                        top: nt,
                        width: Math.floor(g / I + U + 1)
                    }), t("> .cameraSlide", dt).css({
                        height: f,
                        "margin-left": "-" + ot + "px",
                        "margin-top": "-" + nt + "px",
                        width: g
                    }), ot = ot + dt.width() - 1, it % I == I - 1 && (nt = nt + dt.height() - 1), it++
                }
                switch (M) {
                    case"curtainTopLeft":
                        break;
                    case"curtainBottomLeft":
                        break;
                    case"curtainSliceLeft":
                        break;
                    case"curtainTopRight":
                        ht = ht.reverse();
                        break;
                    case"curtainBottomRight":
                        ht = ht.reverse();
                        break;
                    case"curtainSliceRight":
                        ht = ht.reverse();
                        break;
                    case"blindCurtainTopLeft":
                        break;
                    case"blindCurtainBottomLeft":
                        ht = ht.reverse();
                        break;
                    case"blindCurtainSliceTop":
                        break;
                    case"blindCurtainTopRight":
                        break;
                    case"blindCurtainBottomRight":
                        ht = ht.reverse();
                        break;
                    case"blindCurtainSliceBottom":
                        ht = ht.reverse();
                        break;
                    case"stampede":
                        ht = n(ht);
                        break;
                    case"mosaic":
                        break;
                    case"mosaicReverse":
                        ht = ht.reverse();
                        break;
                    case"mosaicRandom":
                        ht = n(ht);
                        break;
                    case"mosaicSpiral":
                        var pt, mt, ut, gt = z / 2, ft = 0;
                        for (ut = 0; gt > ut; ut++) {
                            for (mt = ut, pt = ut; I - ut - 1 > pt; pt++) ct[ft++] = mt * I + pt;
                            for (pt = I - ut - 1, mt = ut; z - ut - 1 > mt; mt++) ct[ft++] = mt * I + pt;
                            for (mt = z - ut - 1, pt = I - ut - 1; pt > ut; pt--) ct[ft++] = mt * I + pt;
                            for (pt = ut, mt = z - ut - 1; mt > ut; mt--) ct[ft++] = mt * I + pt
                        }
                        ht = ct;
                        break;
                    case"mosaicSpiralReverse":
                        var pt, mt, ut, gt = z / 2, ft = at - 1;
                        for (ut = 0; gt > ut; ut++) {
                            for (mt = ut, pt = ut; I - ut - 1 > pt; pt++) ct[ft--] = mt * I + pt;
                            for (pt = I - ut - 1, mt = ut; z - ut - 1 > mt; mt++) ct[ft--] = mt * I + pt;
                            for (mt = z - ut - 1, pt = I - ut - 1; pt > ut; pt--) ct[ft--] = mt * I + pt;
                            for (pt = ut, mt = z - ut - 1; mt > ut; mt--) ct[ft--] = mt * I + pt
                        }
                        ht = ct;
                        break;
                    case"topLeftBottomRight":
                        for (var mt = 0; z > mt; mt++) for (var pt = 0; I > pt; pt++) ct.push(pt + mt);
                        lt = ct;
                        break;
                    case"bottomRightTopLeft":
                        for (var mt = 0; z > mt; mt++) for (var pt = 0; I > pt; pt++) ct.push(pt + mt);
                        lt = ct.reverse();
                        break;
                    case"bottomLeftTopRight":
                        for (var mt = z; mt > 0; mt--) for (var pt = 0; I > pt; pt++) ct.push(pt + mt);
                        lt = ct;
                        break;
                    case"topRightBottomLeft":
                        for (var mt = 0; z > mt; mt++) for (var pt = I; pt > 0; pt--) ct.push(pt + mt);
                        lt = ct
                }
                t.each(ht, function (i, a) {
                    function r() {
                        if (t(this).addClass("cameraeased"), t(".cameraeased", y).length >= 0 && t(L).css({visibility: "visible"}), t(".cameraeased", y).length == at) {
                            h(), t(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", m).each(function () {
                                t(this).css("visibility", "hidden")
                            }), Y.eq(d).show().css("z-index", "999").removeClass("cameranext").addClass("cameracurrent"), Y.eq(s).css("z-index", "1").removeClass("cameracurrent"), t(".cameraContent", m).eq(d).addClass("cameracurrent"), s >= 0 && t(".cameraContent", m).eq(s).removeClass("cameracurrent"), e.onEndTransition.call(this), "hide" != t("> div", _).eq(d).attr("data-video") && t(".cameraContent.cameracurrent .imgFake", m).length && t(".cameraContent.cameracurrent .imgFake", m).click();
                            var i = Y.eq(d).find(".fadeIn").length,
                                a = t(".cameraContent", m).eq(d).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
                            0 != i && t(".cameraSlide.cameracurrent .fadeIn", m).each(function () {
                                if ("" != t(this).attr("data-easing")) var e = t(this).attr("data-easing"); else var e = F;
                                var a = t(this);
                                if ("undefined" == typeof a.attr("data-outerWidth") || a.attr("data-outerWidth") === !1 || "" === a.attr("data-outerWidth")) {
                                    var s = a.outerWidth();
                                    a.attr("data-outerWidth", s)
                                } else var s = a.attr("data-outerWidth");
                                if ("undefined" == typeof a.attr("data-outerHeight") || a.attr("data-outerHeight") === !1 || "" === a.attr("data-outerHeight")) {
                                    var r = a.outerHeight();
                                    a.attr("data-outerHeight", r)
                                } else var r = a.attr("data-outerHeight");
                                var o = a.position(), n = (o.left, o.top, a.attr("class")), h = a.index();
                                a.parents(".camerarelative").outerHeight(), a.parents(".camerarelative").outerWidth();
                                -1 != n.indexOf("fadeIn") ? a.animate({opacity: 0}, 0).css("visibility", "visible").delay(T / i * (.1 * (h - 1))).animate({opacity: 1}, T / i * .15, e) : a.css("visibility", "visible")
                            }), t(".cameraContent.cameracurrent", m).show(), 0 != a && t(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom", m).each(function () {
                                if ("" != t(this).attr("data-easing")) var e = t(this).attr("data-easing"); else var e = F;
                                var i = t(this), s = i.position(), r = (s.left, s.top, i.attr("class")), o = i.index(),
                                    n = i.outerHeight();
                                -1 != r.indexOf("moveFromLeft") ? (i.css({
                                    left: "-" + g + "px",
                                    right: "auto"
                                }), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({left: s.left}, T / a * .15, e)) : -1 != r.indexOf("moveFromRight") ? (i.css({
                                    left: g + "px",
                                    right: "auto"
                                }), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({left: s.left}, T / a * .15, e)) : -1 != r.indexOf("moveFromTop") ? (i.css({
                                    top: "-" + f + "px",
                                    bottom: "auto"
                                }), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({top: s.top}, T / a * .15, e, function () {
                                    i.css({top: "auto", bottom: 0})
                                })) : -1 != r.indexOf("moveFromBottom") ? (i.css({
                                    top: f + "px",
                                    bottom: "auto"
                                }), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({top: s.top}, T / a * .15, e)) : -1 != r.indexOf("fadeFromLeft") ? (i.animate({opacity: 0}, 0).css({
                                    left: "-" + g + "px",
                                    right: "auto"
                                }), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({
                                    left: s.left,
                                    opacity: 1
                                }, T / a * .15, e)) : -1 != r.indexOf("fadeFromRight") ? (i.animate({opacity: 0}, 0).css({
                                    left: g + "px",
                                    right: "auto"
                                }), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({
                                    left: s.left,
                                    opacity: 1
                                }, T / a * .15, e)) : -1 != r.indexOf("fadeFromTop") ? (i.animate({opacity: 0}, 0).css({
                                    top: "-" + f + "px",
                                    bottom: "auto"
                                }), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({
                                    top: s.top,
                                    opacity: 1
                                }, T / a * .15, e, function () {
                                    i.css({top: "auto", bottom: 0})
                                })) : -1 != r.indexOf("fadeFromBottom") ? (i.animate({opacity: 0}, 0).css({bottom: "-" + n + "px"}), i.css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({
                                    bottom: "0",
                                    opacity: 1
                                }, T / a * .15, e)) : -1 != r.indexOf("fadeIn") ? i.animate({opacity: 0}, 0).css("visibility", "visible").delay(T / a * (.1 * (o - 1))).animate({opacity: 1}, T / a * .15, e) : i.css("visibility", "visible")
                            }), t(".cameraappended", y).remove(), _.removeClass("camerasliding"), Y.eq(s).hide();
                            var r, n = t(".camera_bar_cont", Z).width(), p = t(".camera_bar_cont", Z).height();
                            r = "pie" != u ? .05 : .005, t("#" + v).animate({opacity: e.loaderOpacity}, 200), A = setInterval(function () {
                                if (_.hasClass("stopped") && clearInterval(A), "pie" != u) switch (1.002 >= K && !_.hasClass("stopped") && !_.hasClass("paused") && !_.hasClass("hovered") ? K += r : 1 >= K && (_.hasClass("stopped") || _.hasClass("paused") || _.hasClass("stopped") || _.hasClass("hovered")) ? K = K : _.hasClass("stopped") || _.hasClass("paused") || _.hasClass("hovered") || (clearInterval(A), o(), t("#" + v).animate({opacity: 0}, 200, function () {
                                    clearTimeout(j), j = setTimeout(l, w), c(), e.onStartLoading.call(this)
                                })), G) {
                                    case"leftToRight":
                                        t("#" + v).animate({right: n - n * K}, T * r, "linear");
                                        break;
                                    case"rightToLeft":
                                        t("#" + v).animate({left: n - n * K}, T * r, "linear");
                                        break;
                                    case"topToBottom":
                                        t("#" + v).animate({bottom: p - p * K}, T * r, "linear");
                                        break;
                                    case"bottomToTop":
                                        t("#" + v).animate({bottom: p - p * K}, T * r, "linear")
                                } else tt = K, et.clearRect(0, 0, e.pieDiameter, e.pieDiameter), et.globalCompositeOperation = "destination-over", et.beginPath(), et.arc(e.pieDiameter / 2, e.pieDiameter / 2, e.pieDiameter / 2 - e.loaderStroke, 0, 2 * Math.PI, !1), et.lineWidth = e.loaderStroke, et.strokeStyle = e.loaderBgColor, et.stroke(), et.closePath(), et.globalCompositeOperation = "source-over", et.beginPath(), et.arc(e.pieDiameter / 2, e.pieDiameter / 2, e.pieDiameter / 2 - e.loaderStroke, 0, 2 * Math.PI * tt, !1), et.lineWidth = e.loaderStroke - 2 * e.loaderPadding, et.strokeStyle = e.loaderColor, et.stroke(), et.closePath(), 1.002 >= K && !_.hasClass("stopped") && !_.hasClass("paused") && !_.hasClass("hovered") ? K += r : 1 >= K && (_.hasClass("stopped") || _.hasClass("paused") || _.hasClass("hovered")) ? K = K : _.hasClass("stopped") || _.hasClass("paused") || _.hasClass("hovered") || (clearInterval(A), o(), t("#" + v + ", .camera_canvas_wrap", Z).animate({opacity: 0}, 200, function () {
                                    clearTimeout(j), j = setTimeout(l, w), c(), e.onStartLoading.call(this)
                                }))
                            }, T * r)
                        }
                    }

                    switch (U = st > a % I ? 1 : 0, a % I == 0 && (ot = 0), J = Math.floor(a / I) < rt ? 1 : 0, M) {
                        case"simpleFade":
                            height = f, width = g, opacityOnGrid = 0;
                            break;
                        case"curtainTopLeft":
                            height = 0, width = Math.floor(g / I + U + 1), marginTop = "-" + Math.floor(f / z + J + 1) + "px";
                            break;
                        case"curtainTopRight":
                            height = 0, width = Math.floor(g / I + U + 1), marginTop = "-" + Math.floor(f / z + J + 1) + "px";
                            break;
                        case"curtainBottomLeft":
                            height = 0, width = Math.floor(g / I + U + 1), marginTop = Math.floor(f / z + J + 1) + "px";
                            break;
                        case"curtainBottomRight":
                            height = 0, width = Math.floor(g / I + U + 1), marginTop = Math.floor(f / z + J + 1) + "px";
                            break;
                        case"curtainSliceLeft":
                            height = 0, width = Math.floor(g / I + U + 1), a % 2 == 0 ? marginTop = Math.floor(f / z + J + 1) + "px" : marginTop = "-" + Math.floor(f / z + J + 1) + "px";
                            break;
                        case"curtainSliceRight":
                            height = 0, width = Math.floor(g / I + U + 1), a % 2 == 0 ? marginTop = Math.floor(f / z + J + 1) + "px" : marginTop = "-" + Math.floor(f / z + J + 1) + "px";
                            break;
                        case"blindCurtainTopLeft":
                            height = Math.floor(f / z + J + 1), width = 0, marginLeft = "-" + Math.floor(g / I + U + 1) + "px";
                            break;
                        case"blindCurtainTopRight":
                            height = Math.floor(f / z + J + 1), width = 0, marginLeft = Math.floor(g / I + U + 1) + "px";
                            break;
                        case"blindCurtainBottomLeft":
                            height = Math.floor(f / z + J + 1), width = 0, marginLeft = "-" + Math.floor(g / I + U + 1) + "px";
                            break;
                        case"blindCurtainBottomRight":
                            height = Math.floor(f / z + J + 1), width = 0, marginLeft = Math.floor(g / I + U + 1) + "px";
                            break;
                        case"blindCurtainSliceBottom":
                            height = Math.floor(f / z + J + 1), width = 0, a % 2 == 0 ? marginLeft = "-" + Math.floor(g / I + U + 1) + "px" : marginLeft = Math.floor(g / I + U + 1) + "px";
                            break;
                        case"blindCurtainSliceTop":
                            height = Math.floor(f / z + J + 1), width = 0, a % 2 == 0 ? marginLeft = "-" + Math.floor(g / I + U + 1) + "px" : marginLeft = Math.floor(g / I + U + 1) + "px";
                            break;
                        case"stampede":
                            height = 0, width = 0, marginLeft = .2 * g * (i % I - (I - Math.floor(I / 2))) + "px", marginTop = .2 * f * (Math.floor(i / I) + 1 - (z - Math.floor(z / 2))) + "px";
                            break;
                        case"mosaic":
                            height = 0, width = 0;
                            break;
                        case"mosaicReverse":
                            height = 0, width = 0, marginLeft = Math.floor(g / I + U + 1) + "px", marginTop = Math.floor(f / z + J + 1) + "px";
                            break;
                        case"mosaicRandom":
                            height = 0, width = 0, marginLeft = .5 * Math.floor(g / I + U + 1) + "px", marginTop = .5 * Math.floor(f / z + J + 1) + "px";
                            break;
                        case"mosaicSpiral":
                            height = 0, width = 0, marginLeft = .5 * Math.floor(g / I + U + 1) + "px", marginTop = .5 * Math.floor(f / z + J + 1) + "px";
                            break;
                        case"mosaicSpiralReverse":
                            height = 0, width = 0, marginLeft = .5 * Math.floor(g / I + U + 1) + "px", marginTop = .5 * Math.floor(f / z + J + 1) + "px";
                            break;
                        case"topLeftBottomRight":
                            height = 0, width = 0;
                            break;
                        case"bottomRightTopLeft":
                            height = 0, width = 0, marginLeft = Math.floor(g / I + U + 1) + "px", marginTop = Math.floor(f / z + J + 1) + "px";
                            break;
                        case"bottomLeftTopRight":
                            height = 0, width = 0, marginLeft = 0, marginTop = Math.floor(f / z + J + 1) + "px";
                            break;
                        case"topRightBottomLeft":
                            height = 0, width = 0, marginLeft = Math.floor(g / I + U + 1) + "px", marginTop = 0;
                            break;
                        case"scrollRight":
                            height = f, width = g, marginLeft = -g;
                            break;
                        case"scrollLeft":
                            height = f, width = g, marginLeft = g;
                            break;
                        case"scrollTop":
                            height = f, width = g, marginTop = f;
                            break;
                        case"scrollBottom":
                            height = f, width = g, marginTop = -f;
                            break;
                        case"scrollHorz":
                            height = f, width = g, 0 == s && d == P - 1 ? marginLeft = -g : d > s || s == P - 1 && 0 == d ? marginLeft = g : marginLeft = -g
                    }
                    var n = t(".cameraappended:eq(" + a + ")", y);
                    "undefined" != typeof A && (clearInterval(A), clearTimeout(j), j = setTimeout(l, R + q)), t($).length && (t(".camera_pag li", p).removeClass("cameracurrent"), t(".camera_pag li", p).eq(d).addClass("cameracurrent")), t(L).length && (t("li", L).removeClass("cameracurrent"), t("li", L).eq(d).addClass("cameracurrent"), t("li", L).not(".cameracurrent").find("img").animate({opacity: .5}, 0), t("li.cameracurrent img", L).animate({opacity: 1}, 0), t("li", L).hover(function () {
                        t("img", this).stop(!0, !1).animate({opacity: 1}, 150)
                    }, function () {
                        t(this).hasClass("cameracurrent") || t("img", this).stop(!0, !1).animate({opacity: .5}, 150)
                    }));
                    var w = parseFloat(R) + parseFloat(q);
                    "scrollLeft" == M || "scrollRight" == M || "scrollTop" == M || "scrollBottom" == M || "scrollHorz" == M ? (e.onStartTransition.call(this), w = 0, n.delay((R + q) / at * lt[i] * O * .5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width
                    }).animate({
                        height: Math.floor(f / z + J + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        width: Math.floor(g / I + U + 1)
                    }, R - q, F, r), Y.eq(s).delay((R + q) / at * lt[i] * O * .5).animate({
                        "margin-left": -1 * marginLeft,
                        "margin-top": -1 * marginTop
                    }, R - q, F, function () {
                        t(this).css({"margin-top": 0, "margin-left": 0})
                    })) : (e.onStartTransition.call(this), w = parseFloat(R) + parseFloat(q), "next" == X ? n.delay((R + q) / at * lt[i] * O * .5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }).animate({
                        height: Math.floor(f / z + J + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(g / I + U + 1)
                    }, R - q, F, r) : (Y.eq(d).show().css("z-index", "999").addClass("cameracurrent"), Y.eq(s).css("z-index", "1").removeClass("cameracurrent"), t(".cameraContent", m).eq(d).addClass("cameracurrent"), t(".cameraContent", m).eq(s).removeClass("cameracurrent"), n.delay((R + q) / at * lt[i] * O * .5).css({
                        display: "block",
                        height: Math.floor(f / z + J + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(g / I + U + 1)
                    }).animate({
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }, R - q, F, r)))
                })
            } else {
                var vt = S[d], _t = new Image;
                _t.src = vt + "?" + (new Date).getTime(), w.css("visibility", "hidden"), w.prepend(t(_t).attr("class", "imgLoaded").css("visibility", "hidden"));
                var yt, wt;
                t(_t).get(0).complete && "0" != yt && "0" != wt && "undefined" != typeof yt && yt !== !1 && "undefined" != typeof wt && wt !== !1 || (t(".camera_loader", p).delay(500).fadeIn(400), _t.onload = function () {
                    yt = _t.naturalWidth, wt = _t.naturalHeight, t(_t).attr("data-alignment", D[d]).attr("data-portrait", E[d]), t(_t).attr("width", yt), t(_t).attr("height", wt), y.find(".cameraSlide_" + d).hide().css("visibility", "visible"), r(), c(d + 1)
                })
            }
        }

        var d = {
            alignment: "center",
            autoAdvance: !0,
            mobileAutoAdvance: !0,
            barDirection: "leftToRight",
            barPosition: "bottom",
            cols: 6,
            easing: "easeInOutExpo",
            mobileEasing: "",
            fx: "random",
            mobileFx: "",
            gridDifference: 250,
            height: "50%",
            imagePath: "images/",
            hover: !0,
            loader: "pie",
            loaderColor: "#eeeeee",
            loaderBgColor: "#222222",
            loaderOpacity: .8,
            loaderPadding: 2,
            loaderStroke: 7,
            minHeight: "200px",
            navigation: !0,
            navigationHover: !0,
            mobileNavHover: !0,
            opacityOnGrid: !1,
            overlayer: !0,
            pagination: !0,
            playPause: !0,
            pauseOnClick: !0,
            pieDiameter: 38,
            piePosition: "rightTop",
            portrait: !1,
            rows: 4,
            slicedCols: 12,
            slicedRows: 8,
            slideOn: "random",
            thumbnails: !1,
            time: 7e3,
            transPeriod: 1500,
            onEndTransition: function () {
            },
            onLoaded: function () {
            },
            onStartLoading: function () {
            },
            onStartTransition: function () {
            }
        }, e = t.extend({}, d, e), p = t(this).addClass("camera_wrap");
        p.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');
        var m = t(".camera_fakehover", p);
        m.append('<div class="camera_target"></div>'), 1 == e.overlayer && m.append('<div class="camera_overlayer"></div>'), m.append('<div class="camera_target_content"></div>');
        var u;
        u = "pie" == e.loader && t.browser.msie && t.browser.version < 9 ? "bar" : e.loader, "pie" == u ? m.append('<div class="camera_pie"></div>') : "bar" == u ? m.append('<div class="camera_bar"></div>') : m.append('<div class="camera_bar" style="display:none"></div>'), 1 == e.playPause && m.append('<div class="camera_commands"></div>'), 1 == e.navigation && (m.append('<div class="camera_nav"></div>'), t(".camera_nav").append('<div class="camera_prev"></div>').append('<div class="camera_next"></div>').append('<div class="camera_index"></div>')), 1 == e.thumbnails && p.append('<div class="camera_thumbs_cont" />'), 1 == e.thumbnails && 1 != e.pagination && t(".camera_thumbs_cont", p).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'), 1 == e.pagination && p.append('<div class="camera_pag"></div>'), p.append('<div class="camera_loader"></div>'), t(".camera_caption", p).each(function () {
            t(this).wrapInner("<div />")
        });
        var g, f, v = "pie_" + p.index(), _ = t(".camera_src", p), y = t(".camera_target", p),
            w = t(".camera_target_content", p), b = t(".camera_pie", p), x = t(".camera_bar", p),
            C = t(".camera_prev", p), k = t(".camera_next", p), T = t(".camera_commands", p), $ = t(".camera_pag", p),
            L = t(".camera_thumbs_cont", p), S = new Array;
        t("> div", _).each(function () {
            S.push(t(this).attr("data-src"))
        });
        var R = new Array;
        t("> div", _).each(function () {
            t(this).attr("data-link") ? R.push(t(this).attr("data-link")) : R.push("")
        });
        var M = new Array;
        t("> div", _).each(function () {
            t(this).attr("data-target") ? M.push(t(this).attr("data-target")) : M.push("")
        });
        var E = new Array;
        t("> div", _).each(function () {
            t(this).attr("data-portrait") ? E.push(t(this).attr("data-portrait")) : E.push("")
        });
        var D = new Array;
        t("> div", _).each(function () {
            t(this).attr("data-alignment") ? D.push(t(this).attr("data-alignment")) : D.push("")
        });
        var F = new Array;
        t("> div", _).each(function () {
            t(this).attr("data-thumb") ? F.push(t(this).attr("data-thumb")) : F.push("")
        });
        var P = S.length;
        t(w).append('<div class="cameraContents" />');
        var z;
        for (z = 0; P > z; z++) if (t(".cameraContents", w).append('<div class="cameraContent" />'), "" != R[z]) {
            var I = t("> div ", _).eq(z).attr("data-box");
            I = "undefined" != typeof I && I !== !1 && "" != I ? 'data-box="' + t("> div ", _).eq(z).attr("data-box") + '"' : "", t(".camera_target_content .cameraContent:eq(" + z + ")", p).append('<a class="camera_link" href="' + R[z] + '" ' + I + ' target="' + M[z] + '"></a>')
        }
        t(".camera_caption", p).each(function () {
            var e = t(this).parent().index(), i = p.find(".cameraContent").eq(e);
            t(this).appendTo(i)
        }), y.append('<div class="cameraCont" />');
        var O, B = t(".cameraCont", p);
        for (O = 0; P > O; O++) {
            B.append('<div class="cameraSlide cameraSlide_' + O + '" />');
            var q = t("> div:eq(" + O + ")", _);
            y.find(".cameraSlide_" + O).clone(q)
        }
        t(window).bind("load resize pageshow", function () {
            h(), s()
        }), B.append('<div class="cameraSlide cameraSlide_' + O + '" />');
        var W;
        p.show();
        var H, g = y.width(), f = y.height();
        t(window).bind("resize pageshow", function () {
            1 == W && r(), t("ul", L).animate({"margin-top": 0}, 0, h), _.hasClass("paused") || (_.addClass("paused"), t(".camera_stop", Z).length ? (t(".camera_stop", Z).hide(), t(".camera_play", Z).show(), "none" != u && t("#" + v).hide()) : "none" != u && t("#" + v).hide(), clearTimeout(H), H = setTimeout(function () {
                _.removeClass("paused"), t(".camera_play", Z).length ? (t(".camera_play", Z).hide(), t(".camera_stop", Z).show(), "none" != u && t("#" + v).fadeIn()) : "none" != u && t("#" + v).fadeIn()
            }, 1500))
        });
        var A, j, X, N, T, $, V, Q;
        if (X = a() && "" != e.mobileAutoAdvance ? e.mobileAutoAdvance : e.autoAdvance, 0 == X && _.addClass("paused"), N = a() && "" != e.mobileNavHover ? e.mobileNavHover : e.navigationHover, 0 != _.length) {
            var Y = t(".cameraSlide", y);
            Y.wrapInner('<div class="camerarelative" />');
            var G = e.barDirection, Z = p;
            t("iframe", m).each(function () {
                var e = t(this), i = e.attr("src");
                e.attr("data-src", i);
                var a = e.parent().index(".camera_src > div");
                t(".camera_target_content .cameraContent:eq(" + a + ")", p).append(e)
            }), o(), 1 == e.hover && (a() || m.hover(function () {
                _.addClass("hovered")
            }, function () {
                _.removeClass("hovered")
            })), t(".camera_stop", Z).live("click", function () {
                X = !1, _.addClass("paused"), t(".camera_stop", Z).length ? (t(".camera_stop", Z).hide(), t(".camera_play", Z).show(), "none" != u && t("#" + v).hide()) : "none" != u && t("#" + v).hide()
            }), t(".camera_play", Z).live("click", function () {
                X = !0, _.removeClass("paused"), t(".camera_play", Z).length ? (t(".camera_play", Z).hide(), t(".camera_stop", Z).show(), "none" != u && t("#" + v).show()) : "none" != u && t("#" + v).show()
            }), 1 == e.pauseOnClick && t(".camera_target_content", m).mouseup(function () {
                X = !1, _.addClass("paused"), t(".camera_stop", Z).hide(), t(".camera_play", Z).show(), t("#" + v).hide()
            }), t(".cameraContent, .imgFake", m).hover(function () {
                V = !0
            }, function () {
                V = !1
            }), t(".cameraContent, .imgFake", m).bind("click", function () {
                1 == Q && 1 == V && (X = !1, t(".camera_caption", m).hide(), _.addClass("paused"), t(".camera_stop", Z).hide(), t(".camera_play", Z).show(), t("#" + v).hide())
            })
        }
        if ("pie" != u) {
            x.append('<span class="camera_bar_cont" />'), t(".camera_bar_cont", x).animate({opacity: e.loaderOpacity}, 0).css({
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                "background-color": e.loaderBgColor
            }).append('<span id="' + v + '" />'), t("#" + v).animate({opacity: 0}, 0);
            var U = t("#" + v);
            switch (U.css({position: "absolute", "background-color": e.loaderColor}), e.barPosition) {
                case"left":
                    x.css({right: "auto", width: e.loaderStroke});
                    break;
                case"right":
                    x.css({left: "auto", width: e.loaderStroke});
                    break;
                case"top":
                    x.css({bottom: "auto", height: e.loaderStroke});
                    break;
                case"bottom":
                    x.css({top: "auto", height: e.loaderStroke})
            }
            switch (G) {
                case"leftToRight":
                    U.css({left: 0, right: 0, top: e.loaderPadding, bottom: e.loaderPadding});
                    break;
                case"rightToLeft":
                    U.css({left: 0, right: 0, top: e.loaderPadding, bottom: e.loaderPadding});
                    break;
                case"topToBottom":
                    U.css({left: e.loaderPadding, right: e.loaderPadding, top: 0, bottom: 0});
                    break;
                case"bottomToTop":
                    U.css({left: e.loaderPadding, right: e.loaderPadding, top: 0, bottom: 0})
            }
        } else {
            b.append('<canvas id="' + v + '"></canvas>');
            var U = document.getElementById(v);
            U.setAttribute("width", e.pieDiameter), U.setAttribute("height", e.pieDiameter);
            var J;
            switch (e.piePosition) {
                case"leftTop":
                    J = "left:0; top:0;";
                    break;
                case"rightTop":
                    J = "right:0; top:0;";
                    break;
                case"leftBottom":
                    J = "left:0; bottom:0;";
                    break;
                case"rightBottom":
                    J = "right:0; bottom:0;"
            }
            U.setAttribute("style", "position:absolute; z-index:1002; " + J);
            var K, tt;
            if (U && U.getContext) {
                var et = U.getContext("2d");
                et.rotate(1.5 * Math.PI), et.translate(-e.pieDiameter, 0)
            }
        }
        if (("none" == u || 0 == X) && (t("#" + v).hide(), t(".camera_canvas_wrap", Z).hide()), t($).length) {
            t($).append('<ul class="camera_pag_ul" />');
            var it;
            for (it = 0; P > it; it++) t(".camera_pag_ul", p).append('<li class="pag_nav_' + it + '" style="position:relative; z-index:1002"><span><span>' + it + "</span></span></li>");
            t(".camera_pag_ul li", p).hover(function () {
                if (t(this).addClass("camera_hover"), t(".camera_thumb", this).length) {
                    var e = t(".camera_thumb", this).outerWidth(), i = t(".camera_thumb", this).outerHeight(),
                        a = t(this).outerWidth();
                    t(".camera_thumb", this).show().css({
                        top: "-" + i + "px",
                        left: "-" + (e - a) / 2 + "px"
                    }).animate({
                        opacity: 1,
                        "margin-top": "-3px"
                    }, 200), t(".thumb_arrow", this).show().animate({opacity: 1, "margin-top": "-3px"}, 200)
                }
            }, function () {
                t(this).removeClass("camera_hover"), t(".camera_thumb", this).animate({
                    "margin-top": "-20px",
                    opacity: 0
                }, 200, function () {
                    t(this).css({marginTop: "5px"}).hide()
                }), t(".thumb_arrow", this).animate({"margin-top": "-20px", opacity: 0}, 200, function () {
                    t(this).css({marginTop: "5px"}).hide()
                })
            })
        }
        if (t(L).length) {
            t($).length ? (t.each(F, function (e, i) {
                if ("" != t("> div", _).eq(e).attr("data-thumb")) {
                    var a = t("> div", _).eq(e).attr("data-thumb"), s = new Image;
                    s.src = a, t("li.pag_nav_" + e, $).append(t(s).attr("class", "camera_thumb").css({position: "absolute"}).animate({opacity: 0}, 0)), t("li.pag_nav_" + e + " > img", $).after('<div class="thumb_arrow" />'), t("li.pag_nav_" + e + " > .thumb_arrow", $).animate({opacity: 0}, 0)
                }
            }), p.css({marginBottom: t($).outerHeight()})) : (t(L).append("<div />"), t(L).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'), t("> div", L).append("<ul />"), t.each(F, function (e, i) {
                if ("" != t("> div", _).eq(e).attr("data-thumb")) {
                    var a = t("> div", _).eq(e).attr("data-thumb"), s = new Image;
                    s.src = a, t("ul", L).append('<li class="pix_thumb pix_thumb_' + e + '" />'), t("li.pix_thumb_" + e, L).append(t(s).attr("class", "camera_thumb"))
                }
            }))
        } else !t(L).length && t($).length && p.css({marginBottom: t($).outerHeight()});
        var at = !0;
        t(T).length && (t(T).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'), 1 == X ? (t(".camera_play", Z).hide(), t(".camera_stop", Z).show()) : (t(".camera_stop", Z).hide(), t(".camera_play", Z).show())), l(), t(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", m).each(function () {
            t(this).css("visibility", "hidden")
        }), e.onStartLoading.call(this), c(), t(C).length && t(C).click(function () {
            if (!_.hasClass("camerasliding")) {
                var i = parseFloat(t(".cameraSlide.cameracurrent", y).index());
                clearInterval(A), o(), t("#" + v + ", .camera_canvas_wrap", p).animate({opacity: 0}, 0), l(), c(0 != i ? i : P), e.onStartLoading.call(this)
            }
        }), t(k).length && t(k).click(function () {
            if (!_.hasClass("camerasliding")) {
                var i = parseFloat(t(".cameraSlide.cameracurrent", y).index());
                clearInterval(A), o(), t("#" + v + ", .camera_canvas_wrap", Z).animate({opacity: 0}, 0), l(), c(i == P - 1 ? 1 : i + 2), e.onStartLoading.call(this)
            }
        }), a() && (m.bind("swipeleft", function (i) {
            if (!_.hasClass("camerasliding")) {
                var a = parseFloat(t(".cameraSlide.cameracurrent", y).index());
                clearInterval(A), o(), t("#" + v + ", .camera_canvas_wrap", Z).animate({opacity: 0}, 0), l(), c(a == P - 1 ? 1 : a + 2), e.onStartLoading.call(this)
            }
        }), m.bind("swiperight", function (i) {
            if (!_.hasClass("camerasliding")) {
                var a = parseFloat(t(".cameraSlide.cameracurrent", y).index());
                clearInterval(A), o(), t("#" + v + ", .camera_canvas_wrap", Z).animate({opacity: 0}, 0), l(), c(0 != a ? a : P), e.onStartLoading.call(this)
            }
        })), t($).length && t(".camera_pag li", p).click(function () {
            if (!_.hasClass("camerasliding")) {
                var i = parseFloat(t(this).index()), a = parseFloat(t(".cameraSlide.cameracurrent", y).index());
                i != a && (clearInterval(A), o(), t("#" + v + ", .camera_canvas_wrap", Z).animate({opacity: 0}, 0), l(), c(i + 1), e.onStartLoading.call(this))
            }
        }), t(L).length && (t(".pix_thumb img", L).click(function () {
            if (!_.hasClass("camerasliding")) {
                var i = parseFloat(t(this).parents("li").index()), a = parseFloat(t(".cameracurrent", y).index());
                i != a && (clearInterval(A), o(), t("#" + v + ", .camera_canvas_wrap", Z).animate({opacity: 0}, 0), t(".pix_thumb", L).removeClass("cameracurrent"), t(this).parents("li").addClass("cameracurrent"), l(), c(i + 1), h(), e.onStartLoading.call(this))
            }
        }), t(".camera_thumbs_cont .camera_prevThumbs", Z).hover(function () {
            t(this).stop(!0, !1).animate({opacity: 1}, 250)
        }, function () {
            t(this).stop(!0, !1).animate({opacity: .7}, 250)
        }), t(".camera_prevThumbs", Z).click(function () {
            var e = 0, i = (t(L).outerWidth(), t("ul", L).offset().left), a = t("> div", L).offset().left, r = a - i;
            t(".camera_visThumb", L).each(function () {
                var i = t(this).outerWidth();
                e += i
            }), r - e > 0 ? t("ul", L).animate({"margin-left": "-" + (r - e) + "px"}, 500, s) : t("ul", L).animate({"margin-left": 0}, 500, s)
        }), t(".camera_thumbs_cont .camera_nextThumbs", Z).hover(function () {
            t(this).stop(!0, !1).animate({opacity: 1}, 250)
        }, function () {
            t(this).stop(!0, !1).animate({opacity: .7}, 250)
        }), t(".camera_nextThumbs", Z).click(function () {
            var e = 0, i = t(L).outerWidth(), a = t("ul", L).outerWidth(), r = t("ul", L).offset().left,
                o = t("> div", L).offset().left, n = o - r;
            t(".camera_visThumb", L).each(function () {
                var i = t(this).outerWidth();
                e += i
            }), a > n + e + e ? t("ul", L).animate({"margin-left": "-" + (n + e) + "px"}, 500, s) : t("ul", L).animate({"margin-left": "-" + (a - i) + "px"}, 500, s)
        }))
    }
}(jQuery), function (t) {
    t.fn.cameraStop = function () {
        var e = t(this), i = t(".camera_src", e);
        "pie_" + e.index();
        if (i.addClass("stopped"), t(".camera_showcommands").length) {
            t(".camera_thumbs_wrap", e)
        } else ;
    }
}(jQuery), function (t) {
    t.fn.cameraPause = function () {
        var e = t(this), i = t(".camera_src", e);
        i.addClass("paused")
    }
}(jQuery), function (t) {
    t.fn.cameraResume = function () {
        var e = t(this), i = t(".camera_src", e);
        ("undefined" == typeof autoAdv || autoAdv !== !0) && i.removeClass("paused")
    }
}(jQuery);
(function (e, t) {
    typeof define == "function" && define.amd ? define("utils/MapUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.MapUtils = t())
})(this, function () {
    return {
        iterateOverMap: function (e, t) {
            var n = 0;
            for (var r in e) e.hasOwnProperty(r) && r !== "__size__" && (t.call(e, r, e[r], n), n++)
        }, exists: function (e, t) {
            var n = !1, r = 0;
            while (!n && r < e.length) n = t == e[r], r++;
            return n
        }, put: function (e, t, n) {
            e.__size__ || (e.__size__ = 0), e[t] || e.__size__++, e[t] = n
        }, isEmpty: function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        }
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("utils/DOMUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.DOMUtils = t())
}(this, function () {
    function t(e, t, n, r) {
        var i = t == "*" && e.all ? e.all : e.getElementsByTagName(t), s = [],
            o = typeof r != "undefined" ? new RegExp("(^|\\s)" + r + "(\\s|$)") : null, u, a;
        for (var f = 0; f < i.length; f++) u = i[f], a = u.getAttribute && u.getAttribute(n), typeof a == "string" && a.length > 0 && (typeof r == "undefined" || o && o.test(a)) && s.push(u);
        return s
    }

    function n(e, t) {
        var n = e.getAttribute && e.getAttribute(t) || null;
        if (!n) {
            var r = e.attributes;
            for (var i = 0; i < r.length; i++) r[i].nodeName === t && (n = r[i].nodeValue)
        }
        return n
    }

    function r() {
        return "regula-generated-" + Math.floor(Math.random() * 1e6)
    }

    function i() {
        return typeof document.createElement("input").checkValidity == "function"
    }

    var e = {
        form: "The form",
        select: "The select box",
        textarea: "The text area",
        checkbox: "The checkbox",
        radio: "The radio button",
        text: "The text field",
        password: "The password",
        email: "The email",
        url: "The URL",
        number: "The number",
        datetime: "The datetime",
        "datetime-local": "The local datetime",
        date: "The date",
        month: "The month",
        time: "The time",
        week: "The week",
        range: "The range",
        tel: "The telephone number",
        color: "The color"
    };
    return {
        friendlyInputNames: e,
        getElementsByAttribute: t,
        getAttributeValueForElement: n,
        generateRandomId: r,
        supportsHTML5Validation: i
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("service/GroupService", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.GroupService = t())
}(this, function () {
    var e = {Default: 0}, t = {0: "Default"}, n = [], r = 1;
    return {Group: e, ReverseGroup: t, deletedGroupIndices: n, firstCustomGroupIndex: r}
}), function (e, t) {
    typeof define == "function" && define.amd ? define("utils/ArrayUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ArrayUtils = t())
}(this, function () {
    function e(e, t) {
        var n = "";
        for (var r = 0; r < e.length; r++) n += e[r] + t;
        return n.replace(new RegExp(t + "$"), "")
    }

    return {explode: e}
}), function (e, t) {
    typeof define == "function" && define.amd ? define("service/ExceptionService", ["utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ExceptionService = t(e.regulaModules.ArrayUtils))
}(this, function (e) {
    function i(e, t, n) {
        var r = "";
        return e != null ? (r = e.id, t == "" || t == null || t == undefined ? r += ": " : r += "." + t + ": ") : t != "" && t != null && t != undefined && (r = "@" + t + ": "), r + n
    }

    function s(t) {
        var n = "Function received: {";
        for (var r in t) t.hasOwnProperty(r) && (typeof t[r] == "string" ? n += r + ": " + t[r] + ", " : t[r] instanceof Array && (n += r + ": [" + e.explode(t[r], ", ") + "], "));
        return n = n.replace(/, $/, "") + "}", n
    }

    var t = {
        IllegalArgumentException: function (e) {
            this.name = "IllegalArgumentException", this.message = e
        }, ConstraintDefinitionException: function (e) {
            this.name = "ConstraintDefinitionException", this.message = e
        }, BindException: function (e) {
            this.name = "BindException", this.message = e
        }, MissingFeatureException: function (e) {
            this.name = "MissingFeatureException", this.message = e
        }
    };
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = t[n];
        r.prototype = new Error, r.prototype.constructor = r
    }
    return {Exception: t, generateExceptionMessage: i, explodeParameters: s}
}), function (e, t) {
    typeof define == "function" && define.amd ? define("domain/CompositionGraph", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.CompositionGraph = t())
}(this, function () {
    function n(n) {
        var r = n.type, i = n.name, s = n.parent,
            o = typeof e[r] == "undefined" ? {visited: !1, name: i, type: r, parents: [], children: []} : e[r];
        s == null ? t.children.push(o) : (s.children.push(o), o.parents.push(s)), e[r] = o
    }

    function r() {
        var e = {}, n = function r(t, n) {
            var i = typeof e[t.type] == "undefined" ? {
                visited: t.visited,
                name: t.name,
                type: t.type,
                parents: [],
                children: []
            } : e[t.type];
            n !== null && i.parents.push(n);
            for (var s = 0; s < t.children.length; s++) i.children.push(r(t.children[s], i));
            return e[t.type] = i, i
        }(t, null);
        return {typeToNodeMap: e, root: n}
    }

    function i(t) {
        var n = e[t];
        return typeof n == "undefined" ? null : n
    }

    function s(e) {
        var t = function n(e, t) {
            var r = {cycle: !1, path: t};
            if (e.visited) r.cycle = !0; else {
                e.visited = !0;
                var i = 0;
                while (i < e.children.length && !r.cycle) r = n(e.children[i], t + "." + e.children[i].name), i++
            }
            return r
        }(e, e.name);
        return t.cycle || o(), t
    }

    function o() {
        (function e(t) {
            t.visited = !1;
            for (var n = 0; n < t.children.length; n++) e(t.children[n])
        })(t)
    }

    function u() {
        return t
    }

    function a(e) {
        t = e
    }

    function f(n) {
        e = n.typeToNodeMap, t = n.root
    }

    var e = {}, t = {visited: !1, name: "RootNode", type: -1, parents: [], children: []};
    return {
        ROOT: -1,
        addNode: n,
        getNodeByType: i,
        analyze: s,
        getRoot: u,
        setRoot: a,
        clone: r,
        initializeFromClone: f
    }
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    function t(e) {
        return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void n.error("Method " + e + " does not exist on jQuery.regula") : i.bind.apply(this, arguments)
    }

    var n = e, i = {
        bind: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {elements: this.get()})), regula.bind(t), this
        }, unbind: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {elements: this.get()})), regula.unbind(t), this
        }, isBound: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {element: this.get(0)})), regula.isBound(t), this
        }, validate: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {elements: this.get()})), regula.validate(t)
        }, custom: function (e) {
            return regula.custom(e), this
        }, compound: function (e) {
            return regula.compound(e), this
        }, override: function (e) {
            return regula.override(e), this
        }
    };
    i.on = i.bind, i.off = i.unbind, n.fn.regula = t, n.regula = t
});

(function () {
    !function (t, e, i) {
        var s, n;
        return n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isWebkit = /safari|chrome/i.test(navigator.userAgent), s = function () {
            function s(s, n) {
                this.options = t.extend(!0, {}, this.Defaults, n), this.$element = t(s).addClass("rd-input-label"), this.$target = t("#" + this.$element.attr("for")), this.$win = t(i), this.$doc = t(e), this.initialize()
            }

            return s.prototype.Defaults = {callbacks: null}, s.prototype.initialize = function () {
                return this.$target.on("input", t.proxy(this.change, this)).on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("hover", t.proxy(this.hover, this)).parents("form").on("reset", t.proxy(this.reset, this)), this.change(), this.hover(), this
            }, s.prototype.hover = function () {
                return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")), this
            }, s.prototype.change = function () {
                return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")), "" !== this.$target.val() ? (this.$element.hasClass("focus") || this.focus(), this.$element.addClass("not-empty")) : this.$element.removeClass("not-empty"), this
            }, s.prototype.focus = function () {
                return this.$element.addClass("focus"), this
            }, s.prototype.reset = function () {
                return setTimeout(t.proxy(this.blur, this)), this
            }, s.prototype.blur = function (t) {
                return "" === this.$target.val() && this.$element.removeClass("focus").removeClass("not-empty"), this
            }, s
        }(), t.fn.extend({
            RDInputLabel: function (e) {
                return this.each(function () {
                    var i;
                    return i = t(this), i.data("RDInputLabel") ? void 0 : i.data("RDInputLabel", new s(this, e))
                })
            }
        }), i.RDInputLabel = s
    }(window.jQuery, document, window), "undefined" != typeof module && null !== module ? module.exports = window.RDInputLabel : "function" == typeof define && define.amd && define(["jquery"], function () {
        "use strict";
        return window.RDInputLabel
    })
}).call(this);
!function (t) {
    t.fn.UItoTop = function (e) {
        var i = {
            text: "",
            min: 500,
            scrollSpeed: 800,
            containerID: "toTop",
            containerClass: "toTop fa fa-angle-up",
            easingType: "linear"
        }, a = t.extend(i, e), s = "#" + a.containerID;
        "#" + a.containerHoverID;
        t("body").append('<a href="#" id="' + a.containerID + '" class="' + a.containerClass + '" >' + a.text + "</a>"), t(s).hide().click(function () {
            return t("html, body").stop().animate({scrollTop: 0}, a.scrollSpeed, a.easingType), t("#" + a.containerHoverID, this).stop().animate({opacity: 0}, a.inDelay, a.easingType), !1
        }), t(window).scroll(function () {
            var e = t(window).scrollTop();
            "undefined" == typeof document.body.style.maxHeight && t(s).css({
                position: "absolute",
                top: t(window).scrollTop() + t(window).height() - 50
            }), e > a.min ? t(s).stop(!0, !0).fadeIn(600) : t(s).fadeOut(800)
        })
    }
}(jQuery);
(function () {
    var t, e, n, i, o, r = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
        return -1
    };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function (t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
        function t() {
            this.keys = [], this.values = []
        }

        return t.prototype.get = function (t) {
            var e, n, i, o, r;
            for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i) if (n = r[e], n === t) return this.values[e]
        }, t.prototype.set = function (t, e) {
            var n, i, o, r, s;
            for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o) if (i = s[n], i === t) return void (this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return t.notSupported = !0, t.prototype.observe = function () {
        }, t
    }()), i = this.getComputedStyle || function (t) {
        return this.getPropertyValue = function (e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function (t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function () {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function () {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function () {
                var t, n, i, o;
                for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                return o
            }.call(this), this.all = function () {
                var t, n, i, o;
                for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                return o
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
                return function (e) {
                    var n, i, o, r, s;
                    for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function () {
                        var t, e, n, i;
                        for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, o.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function (t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function (t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function (r) {
                return function () {
                    return r.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), o.prototype.resetStyle = function () {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, o.prototype.customStyle = function (t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), o && this.vendorSet(t.style, {animationIterationCount: o}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function (t, e) {
            var n, i, o, r;
            i = [];
            for (n in e) o = e[n], t["" + n] = o, i.push(function () {
                var e, i, s, l;
                for (s = this.vendors, l = [], e = 0, i = s.length; i > e; e++) r = s[e], l.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return l
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function (t, e) {
            var n, o, r, s, l, a;
            for (l = i(t), s = l.getPropertyCSSValue(e), r = this.vendors, n = 0, o = r.length; o > n; n++) a = r[n], s = s || l.getPropertyCSSValue("-" + a + "-" + e);
            return s
        }, o.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function (t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}).call(this);
