webpackJsonp([0, 1], [function(e, t, n) {
  e.exports = n(1)
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function o() {
    (0, g["default"])(), (0, a["default"])(), (0, u["default"])(), (0, v["default"])(), (0, b["default"])(), (0, p["default"])(), (0, f["default"])()
  }
  var i = n(2),
    s = (r(i), n(3)),
    a = r(s),
    l = n(5),
    u = r(l),
    c = n(7),
    f = r(c),
    d = n(8),
    p = r(d),
    h = n(9),
    g = r(h),
    m = n(11),
    v = r(m),
    y = n(13),
    b = r(y);
  e.exports = o()
}, function(e, t) {
  /*! modernizr 3.3.1 (Custom Build) | MIT *
   * http://modernizr.com/download/?-cssanimations-flexbox-multiplebgs-setclasses !*/
  "use strict";
  ! function(e, t, n) {
    function r(e, t) {
      return typeof e === t
    }

    function o() {
      var e, t, n, o, i, s, a;
      for (var l in b)
        if (b.hasOwnProperty(l)) {
          if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
          for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? x[a[0]] = o : (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), x[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
        }
    }

    function i(e) {
      var t = T.className,
        n = x._config.classPrefix || "";
      if (C && (t = t.baseVal), x._config.enableJSClass) {
        var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
        t = t.replace(r, "$1" + n + "js$2")
      }
      x._config.enableClasses && (t += " " + n + e.join(" " + n), C ? T.className.baseVal = t : T.className = t)
    }

    function s() {
      return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a(e, t) {
      return !!~("" + e).indexOf(t)
    }

    function l(e) {
      return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
        return t + n.toUpperCase()
      }).replace(/^-/, "")
    }

    function u(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }

    function c(e, t, n) {
      var o;
      for (var i in e)
        if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? u(o, n || t) : o);
      return !1
    }

    function f(e) {
      return e.replace(/([A-Z])/g, function(e, t) {
        return "-" + t.toLowerCase()
      }).replace(/^ms-/, "-ms-")
    }

    function d() {
      var e = t.body;
      return e || (e = s(C ? "svg" : "body"), e.fake = !0), e
    }

    function p(e, n, r, o) {
      var i, a, l, u, c = "modernizr",
        f = s("div"),
        p = d();
      if (parseInt(r, 10))
        for (; r--;) l = s("div"), l.id = o ? o[r] : c + (r + 1), f.appendChild(l);
      return i = s("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : f).appendChild(i), p.appendChild(f), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), f.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), a = n(f, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = u, T.offsetHeight) : f.parentNode.removeChild(f), !!a
    }

    function h(t, r) {
      var o = t.length;
      if ("CSS" in e && "supports" in e.CSS) {
        for (; o--;)
          if (e.CSS.supports(f(t[o]), r)) return !0;
        return !1
      }
      if ("CSSSupportsRule" in e) {
        for (var i = []; o--;) i.push("(" + f(t[o]) + ":" + r + ")");
        return i = i.join(" or "), p("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
          return "absolute" == getComputedStyle(e, null).position
        })
      }
      return n
    }

    function g(e, t, o, i) {
      function u() {
        f && (delete A.style, delete A.modElem)
      }
      if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
        var c = h(e, o);
        if (!r(c, "undefined")) return c
      }
      for (var f, d, p, g, m, v = ["modernizr", "tspan"]; !A.style;) f = !0, A.modElem = s(v.shift()), A.style = A.modElem.style;
      for (p = e.length, d = 0; p > d; d++)
        if (g = e[d], m = A.style[g], a(g, "-") && (g = l(g)), A.style[g] !== n) {
          if (i || r(o, "undefined")) return u(), "pfx" == t ? g : !0;
          try {
            A.style[g] = o
          } catch (y) {}
          if (A.style[g] != m) return u(), "pfx" == t ? g : !0
        }
      return u(), !1
    }

    function m(e, t, n, o, i) {
      var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + S.join(s + " ") + s).split(" ");
      return r(t, "string") || r(t, "undefined") ? g(a, t, o, i) : (a = (e + " " + k.join(s + " ") + s).split(" "), c(a, t, n))
    }

    function v(e, t, r) {
      return m(e, n, n, t, r)
    }
    var y = [],
      b = [],
      w = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
          var n = this;
          setTimeout(function() {
            t(n[e])
          }, 0)
        },
        addTest: function(e, t, n) {
          b.push({
            name: e,
            fn: t,
            options: n
          })
        },
        addAsyncTest: function(e) {
          b.push({
            name: null,
            fn: e
          })
        }
      },
      x = function() {};
    x.prototype = w, x = new x;
    var T = t.documentElement,
      C = "svg" === T.nodeName.toLowerCase();
    x.addTest("multiplebgs", function() {
      var e = s("a").style;
      return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    });
    var E = "Moz O ms Webkit",
      S = w._config.usePrefixes ? E.split(" ") : [];
    w._cssomPrefixes = S;
    var k = w._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    w._domPrefixes = k;
    var N = {
      elem: s("modernizr")
    };
    x._q.push(function() {
      delete N.elem
    });
    var A = {
      style: N.elem.style
    };
    x._q.unshift(function() {
      delete A.style
    }), w.testAllProps = m, w.testAllProps = v, x.addTest("flexbox", v("flexBasis", "1px", !0)), x.addTest("cssanimations", v("animationName", "a", !0)), o(), i(y), delete w.addTest, delete w.addAsyncTest;
    for (var D = 0; D < x._q.length; D++) x._q[D]();
    e.Modernizr = x
  }(window, document)
}, function(e, t, n) {
  (function(t) {
    "use strict";
    var n = t(".submit-button"),
      r = t(".js-submit-icon"),
      o = t(".js-submit-text"),
      i = t("#contact-form"),
      s = "show",
      a = "on",
      l = function() {
        r.removeClass().addClass("fa fa-paper-plane"), n.prop("disabled", !1), o.text(" SEND MESSAGE"), t("textarea").height("initial"), t("label").removeClass(s), t("label").removeClass(a), document.getElementById("contact-form").reset()
      },
      u = function(e) {
        var t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return t.test(e)
      },
      c = function() {
        n.prop("disabled", !0), r.removeClass().addClass("fa fa-spin fa-cog"), o.text(" SENDING");
        var e = i.serializeArray();
        t.ajax({
          url: "/",
          type: "POST",
          dataType: "json", // Add datatype
          data: e,
          success: function() {
            r.removeClass().addClass("fa fa-check"), o.text(" SENT!"), setTimeout(l, 3e3)
          },
          error: function() {
            r.removeClass().addClass("fa fa-times"), o.text(" ERROR SENDING"), setTimeout(l, 3e3)
          }
        })
      },
      f = function() {
        t("input, textarea").on({
          checkLabel: function() {
            var e = t(this).prev("label");
            "" != this.value ? e.addClass(s) : e.removeClass(s)
          },
          input: function() {
            t(this).trigger("checkLabel")
          },
          focus: function() {
            t(this).prev("label").addClass(a)
          },
          blur: function() {
            t(this).prev("label").removeClass(a)
          }
        }).trigger("checkLabel"), i.submit(function(e) {
          e.preventDefault();
          var n = t(this).find("input, textarea");
          t.each(n, function() {
            var e = t(this),
              n = e.val().trim();
            "" === n ? e.closest(".control").addClass("error") : "email" !== e.attr("name") || u(e.val()) ? e.closest(".control").removeClass("error") : e.closest(".control").addClass("error")
          }), 0 === t(".control.error").length && c()
        })
      },
      d = function() {
        f()
      };
    e.exports = d
  }).call(t, n(4))
}, function(e, t, n) {
  var r, o;
  /*!
   * jQuery JavaScript Library v2.2.0
   * http://jquery.com/
   *
   * Includes Sizzle.js
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-01-08T20:02Z
   */
  ! function(t, n) {
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, function(n, i) {
    function s(e) {
      var t = !!e && "length" in e && e.length,
        n = ue.type(e);
      return "function" === n || ue.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function a(e, t, n) {
      if (ue.isFunction(t)) return ue.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n
      });
      if (t.nodeType) return ue.grep(e, function(e) {
        return e === t !== n
      });
      if ("string" == typeof t) {
        if (be.test(t)) return ue.filter(t, e, n);
        t = ue.filter(t, e)
      }
      return ue.grep(e, function(e) {
        return re.call(t, e) > -1 !== n
      })
    }

    function l(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function u(e) {
      var t = {};
      return ue.each(e.match(Se) || [], function(e, n) {
        t[n] = !0
      }), t
    }

    function c() {
      Z.removeEventListener("DOMContentLoaded", c), n.removeEventListener("load", c), ue.ready()
    }

    function f() {
      this.expando = ue.expando + f.uid++
    }

    function d(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
          try {
            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : je.test(n) ? ue.parseJSON(n) : n
          } catch (o) {}
          Le.set(e, t, n)
        } else n = void 0;
      return n
    }

    function p(e, t, n, r) {
      var o, i = 1,
        s = 20,
        a = r ? function() {
          return r.cur()
        } : function() {
          return ue.css(e, t, "")
        },
        l = a(),
        u = n && n[3] || (ue.cssNumber[t] ? "" : "px"),
        c = (ue.cssNumber[t] || "px" !== u && +l) && He.exec(ue.css(e, t));
      if (c && c[3] !== u) {
        u = u || c[3], n = n || [], c = +l || 1;
        do i = i || ".5", c /= i, ue.style(e, t, c + u); while (i !== (i = a() / l) && 1 !== i && --s)
      }
      return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = o)), o
    }

    function h(e, t) {
      var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && ue.nodeName(e, t) ? ue.merge([e], n) : n
    }

    function g(e, t) {
      for (var n = 0, r = e.length; r > n; n++) De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"))
    }

    function m(e, t, n, r, o) {
      for (var i, s, a, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, m = e.length; m > p; p++)
        if (i = e[p], i || 0 === i)
          if ("object" === ue.type(i)) ue.merge(d, i.nodeType ? [i] : i);
          else if (ze.test(i)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (Me.exec(i) || ["", ""])[1].toLowerCase(), l = Ie[a] || Ie._default, s.innerHTML = l[1] + ue.htmlPrefilter(i) + l[2], c = l[0]; c--;) s = s.lastChild;
        ue.merge(d, s.childNodes), s = f.firstChild, s.textContent = ""
      } else d.push(t.createTextNode(i));
      for (f.textContent = "", p = 0; i = d[p++];)
        if (r && ue.inArray(i, r) > -1) o && o.push(i);
        else if (u = ue.contains(i.ownerDocument, i), s = h(f.appendChild(i), "script"), u && g(s), n)
        for (c = 0; i = s[c++];) _e.test(i.type || "") && n.push(i);
      return f
    }

    function v() {
      return !0
    }

    function y() {
      return !1
    }

    function b() {
      try {
        return Z.activeElement
      } catch (e) {}
    }

    function w(e, t, n, r, o, i) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && (r = r || n, n = void 0);
        for (a in t) w(e, a, n, r, t[a], i);
        return e
      }
      if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = y;
      else if (!o) return this;
      return 1 === i && (s = o, o = function(e) {
        return ue().off(e), s.apply(this, arguments)
      }, o.guid = s.guid || (s.guid = ue.guid++)), e.each(function() {
        ue.event.add(this, t, o, r, n)
      })
    }

    function x(e, t) {
      return ue.nodeName(e, "table") && ue.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function T(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function C(e) {
      var t = Ye.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function E(e, t) {
      var n, r, o, i, s, a, l, u;
      if (1 === t.nodeType) {
        if (De.hasData(e) && (i = De.access(e), s = De.set(t, i), u = i.events)) {
          delete s.handle, s.events = {};
          for (o in u)
            for (n = 0, r = u[o].length; r > n; n++) ue.event.add(t, o, u[o][n])
        }
        Le.hasData(e) && (a = Le.access(e), l = ue.extend({}, a), Le.set(t, l))
      }
    }

    function S(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && qe.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function k(e, t, n, r) {
      t = te.apply([], t);
      var o, i, s, a, l, u, c = 0,
        f = e.length,
        d = f - 1,
        p = t[0],
        g = ue.isFunction(p);
      if (g || f > 1 && "string" == typeof p && !ae.checkClone && Ve.test(p)) return e.each(function(o) {
        var i = e.eq(o);
        g && (t[0] = p.call(this, o, i.html())), k(i, t, n, r)
      });
      if (f && (o = m(t, e[0].ownerDocument, !1, e, r), i = o.firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
        for (s = ue.map(h(o, "script"), T), a = s.length; f > c; c++) l = o, c !== d && (l = ue.clone(l, !0, !0), a && ue.merge(s, h(l, "script"))), n.call(e[c], l, c);
        if (a)
          for (u = s[s.length - 1].ownerDocument, ue.map(s, C), c = 0; a > c; c++) l = s[c], _e.test(l.type || "") && !De.access(l, "globalEval") && ue.contains(u, l) && (l.src ? ue._evalUrl && ue._evalUrl(l.src) : ue.globalEval(l.textContent.replace(Ge, "")))
      }
      return e
    }

    function N(e, t, n) {
      for (var r, o = t ? ue.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || ue.cleanData(h(r)), r.parentNode && (n && ue.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
      return e
    }

    function A(e, t) {
      var n = ue(t.createElement(e)).appendTo(t.body),
        r = ue.css(n[0], "display");
      return n.detach(), r
    }

    function D(e) {
      var t = Z,
        n = Qe[e];
      return n || (n = A(e, t), "none" !== n && n || (Je = (Je || ue("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Je[0].contentDocument, t.write(), t.close(), n = A(e, t), Je.detach()), Qe[e] = n), n
    }

    function L(e, t, n) {
      var r, o, i, s, a = e.style;
      return n = n || et(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || ue.contains(e.ownerDocument, e) || (s = ue.style(e, t)), !ae.pixelMarginRight() && Ze.test(s) && Ke.test(t) && (r = a.width, o = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = o, a.maxWidth = i)), void 0 !== s ? s + "" : s
    }

    function j(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function R(e) {
      if (e in at) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
        if (e = st[n] + t, e in at) return e
    }

    function O(e, t, n) {
      var r = He.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function H(e, t, n, r, o) {
      for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > i; i += 2) "margin" === n && (s += ue.css(e, n + Pe[i], !0, o)), r ? ("content" === n && (s -= ue.css(e, "padding" + Pe[i], !0, o)), "margin" !== n && (s -= ue.css(e, "border" + Pe[i] + "Width", !0, o))) : (s += ue.css(e, "padding" + Pe[i], !0, o), "padding" !== n && (s += ue.css(e, "border" + Pe[i] + "Width", !0, o)));
      return s
    }

    function P(e, t, r) {
      var o = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        s = et(e),
        a = "border-box" === ue.css(e, "boxSizing", !1, s);
      if (Z.msFullscreenElement && n.top !== n && e.getClientRects().length && (i = Math.round(100 * e.getBoundingClientRect()[t])), 0 >= i || null == i) {
        if (i = L(e, t, s), (0 > i || null == i) && (i = e.style[t]), Ze.test(i)) return i;
        o = a && (ae.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
      }
      return i + H(e, t, r || (a ? "border" : "content"), o, s) + "px"
    }

    function F(e, t) {
      for (var n, r, o, i = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (i[s] = De.get(r, "olddisplay"), n = r.style.display, t ? (i[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Fe(r) && (i[s] = De.access(r, "olddisplay", D(r.nodeName)))) : (o = Fe(r), "none" === n && o || De.set(r, "olddisplay", o ? n : ue.css(r, "display"))));
      for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[s] || "" : "none"));
      return e
    }

    function q(e, t, n, r, o) {
      return new q.prototype.init(e, t, n, r, o)
    }

    function M() {
      return n.setTimeout(function() {
        lt = void 0
      }), lt = ue.now()
    }

    function _(e, t) {
      var n, r = 0,
        o = {
          height: e
        };
      for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Pe[r], o["margin" + n] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o
    }

    function I(e, t, n) {
      for (var r, o = (B.tweeners[t] || []).concat(B.tweeners["*"]), i = 0, s = o.length; s > i; i++)
        if (r = o[i].call(n, t, e)) return r
    }

    function z(e, t, n) {
      var r, o, i, s, a, l, u, c, f = this,
        d = {},
        p = e.style,
        h = e.nodeType && Fe(e),
        g = De.get(e, "fxshow");
      n.queue || (a = ue._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
        a.unqueued || l()
      }), a.unqueued++, f.always(function() {
        f.always(function() {
          a.unqueued--, ue.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ue.css(e, "display"), c = "none" === u ? De.get(e, "olddisplay") || D(e.nodeName) : u, "inline" === c && "none" === ue.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      }));
      for (r in t)
        if (o = t[r], ct.exec(o)) {
          if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[r]) continue;
            h = !0
          }
          d[r] = g && g[r] || ue.style(e, r)
        } else u = void 0;
      if (ue.isEmptyObject(d)) "inline" === ("none" === u ? D(e.nodeName) : u) && (p.display = u);
      else {
        g ? "hidden" in g && (h = g.hidden) : g = De.access(e, "fxshow", {}), i && (g.hidden = !h), h ? ue(e).show() : f.done(function() {
          ue(e).hide()
        }), f.done(function() {
          var t;
          De.remove(e, "fxshow");
          for (t in d) ue.style(e, t, d[t])
        });
        for (r in d) s = I(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
      }
    }

    function W(e, t) {
      var n, r, o, i, s;
      for (n in e)
        if (r = ue.camelCase(n), o = t[r], i = e[n], ue.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), s = ue.cssHooks[r], s && "expand" in s) {
          i = s.expand(i), delete e[r];
          for (n in i) n in e || (e[n] = i[n], t[n] = o)
        } else t[r] = o
    }

    function B(e, t, n) {
      var r, o, i = 0,
        s = B.prefilters.length,
        a = ue.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (o) return !1;
          for (var t = lt || M(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(i);
          return a.notifyWith(e, [u, i, n]), 1 > i && l ? n : (a.resolveWith(e, [u]), !1)
        },
        u = a.promise({
          elem: e,
          props: ue.extend({}, t),
          opts: ue.extend(!0, {
            specialEasing: {},
            easing: ue.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: lt || M(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var r = ue.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(r), r
          },
          stop: function(t) {
            var n = 0,
              r = t ? u.tweens.length : 0;
            if (o) return this;
            for (o = !0; r > n; n++) u.tweens[n].run(1);
            return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
          }
        }),
        c = u.props;
      for (W(c, u.opts.specialEasing); s > i; i++)
        if (r = B.prefilters[i].call(u, e, c, u.opts)) return ue.isFunction(r.stop) && (ue._queueHooks(u.elem, u.opts.queue).stop = ue.proxy(r.stop, r)), r;
      return ue.map(c, I, u), ue.isFunction(u.opts.start) && u.opts.start.call(e, u), ue.fx.timer(ue.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function $(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function X(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r, o = 0,
          i = t.toLowerCase().match(Se) || [];
        if (ue.isFunction(n))
          for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
    }

    function U(e, t, n, r) {
      function o(a) {
        var l;
        return i[a] = !0, ue.each(e[a] || [], function(e, a) {
          var u = a(t, n, r);
          return "string" != typeof u || s || i[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
        }), l
      }
      var i = {},
        s = e === Dt;
      return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function V(e, t) {
      var n, r, o = ue.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && ue.extend(!0, e, r), e
    }

    function Y(e, t, n) {
      for (var r, o, i, s, a = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
        for (o in a)
          if (a[o] && a[o].test(r)) {
            l.unshift(o);
            break
          }
      if (l[0] in n) i = l[0];
      else {
        for (o in n) {
          if (!l[0] || e.converters[o + " " + l[0]]) {
            i = o;
            break
          }
          s || (s = o)
        }
        i = i || s
      }
      return i ? (i !== l[0] && l.unshift(i), n[i]) : void 0
    }

    function G(e, t, n, r) {
      var o, i, s, a, l, u = {},
        c = e.dataTypes.slice();
      if (c[1])
        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
      for (i = c.shift(); i;)
        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
          if ("*" === i) i = l;
          else if ("*" !== l && l !== i) {
        if (s = u[l + " " + i] || u["* " + i], !s)
          for (o in u)
            if (a = o.split(" "), a[1] === i && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
              s === !0 ? s = u[o] : u[o] !== !0 && (i = a[0], c.unshift(a[1]));
              break
            }
        if (s !== !0)
          if (s && e["throws"]) t = s(t);
          else try {
            t = s(t)
          } catch (f) {
            return {
              state: "parsererror",
              error: s ? f : "No conversion from " + l + " to " + i
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }

    function J(e, t, n, r) {
      var o;
      if (ue.isArray(t)) ue.each(t, function(t, o) {
        n || Ot.test(e) ? r(e, o) : J(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
      });
      else if (n || "object" !== ue.type(t)) r(e, t);
      else
        for (o in t) J(e + "[" + o + "]", t[o], n, r)
    }

    function Q(e) {
      return ue.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var K = [],
      Z = n.document,
      ee = K.slice,
      te = K.concat,
      ne = K.push,
      re = K.indexOf,
      oe = {},
      ie = oe.toString,
      se = oe.hasOwnProperty,
      ae = {},
      le = "2.2.0",
      ue = function(e, t) {
        return new ue.fn.init(e, t)
      },
      ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      fe = /^-ms-/,
      de = /-([\da-z])/gi,
      pe = function(e, t) {
        return t.toUpperCase()
      };
    ue.fn = ue.prototype = {
      jquery: le,
      constructor: ue,
      selector: "",
      length: 0,
      toArray: function() {
        return ee.call(this)
      },
      get: function(e) {
        return null != e ? 0 > e ? this[e + this.length] : this[e] : ee.call(this)
      },
      pushStack: function(e) {
        var t = ue.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e) {
        return ue.each(this, e)
      },
      map: function(e) {
        return this.pushStack(ue.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(ee.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: ne,
      sort: K.sort,
      splice: K.splice
    }, ue.extend = ue.fn.extend = function() {
      var e, t, n, r, o, i, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;
      for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ue.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
        if (null != (e = arguments[a]))
          for (t in e) n = s[t], r = e[t], s !== r && (u && r && (ue.isPlainObject(r) || (o = ue.isArray(r))) ? (o ? (o = !1, i = n && ue.isArray(n) ? n : []) : i = n && ue.isPlainObject(n) ? n : {}, s[t] = ue.extend(u, i, r)) : void 0 !== r && (s[t] = r));
      return s
    }, ue.extend({
      expando: "jQuery" + (le + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === ue.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !ue.isArray(e) && t - parseFloat(t) + 1 >= 0
      },
      isPlainObject: function(e) {
        return "object" !== ue.type(e) || e.nodeType || ue.isWindow(e) ? !1 : e.constructor && !se.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[ie.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
        var t, n = eval;
        e = ue.trim(e), e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
        return e.replace(fe, "ms-").replace(de, pe)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
        var n, r = 0;
        if (s(e))
          for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
        else
          for (r in e)
            if (t.call(e[r], r, e[r]) === !1) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(ce, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (s(Object(e)) ? ue.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : re.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
        return e.length = o, e
      },
      grep: function(e, t, n) {
        for (var r, o = [], i = 0, s = e.length, a = !n; s > i; i++) r = !t(e[i], i), r !== a && o.push(e[i]);
        return o
      },
      map: function(e, t, n) {
        var r, o, i = 0,
          a = [];
        if (s(e))
          for (r = e.length; r > i; i++) o = t(e[i], i, n), null != o && a.push(o);
        else
          for (i in e) o = t(e[i], i, n), null != o && a.push(o);
        return te.apply([], a)
      },
      guid: 1,
      proxy: function(e, t) {
        var n, r, o;
        return "string" == typeof t && (n = e[t], t = e, e = n), ue.isFunction(e) ? (r = ee.call(arguments, 2), o = function() {
          return e.apply(t || this, r.concat(ee.call(arguments)))
        }, o.guid = e.guid = e.guid || ue.guid++, o) : void 0
      },
      now: Date.now,
      support: ae
    }), "function" == typeof Symbol && (ue.fn[Symbol.iterator] = K[Symbol.iterator]), ue.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      oe["[object " + t + "]"] = t.toLowerCase()
    });
    var he =
      /*!
       * Sizzle CSS Selector Engine v2.2.1
       * http://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2015-10-17
       */
      function(e) {
        function t(e, t, n, r) {
          var o, i, s, a, l, u, f, p, h = t && t.ownerDocument,
            g = t ? t.nodeType : 9;
          if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
          if (!r && ((t ? t.ownerDocument || t : I) !== R && j(t), t = t || R, H)) {
            if (11 !== g && (u = ve.exec(e)))
              if (o = u[1]) {
                if (9 === g) {
                  if (!(s = t.getElementById(o))) return n;
                  if (s.id === o) return n.push(s), n
                } else if (h && (s = h.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n
              } else {
                if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                if ((o = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
              }
            if (x.qsa && !X[e + " "] && (!P || !P.test(e))) {
              if (1 !== g) h = t, p = e;
              else if ("object" !== t.nodeName.toLowerCase()) {
                for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = _), f = S(e), i = f.length, l = de.test(a) ? "#" + a : "[id='" + a + "']"; i--;) f[i] = l + " " + d(f[i]);
                p = f.join(","), h = ye.test(e) && c(t.parentNode) || t
              }
              if (p) try {
                return K.apply(n, h.querySelectorAll(p)), n
              } catch (m) {} finally {
                a === _ && t.removeAttribute("id")
              }
            }
          }
          return N(e.replace(ae, "$1"), t, n, r)
        }

        function n() {
          function e(n, r) {
            return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
          }
          var t = [];
          return e
        }

        function r(e) {
          return e[_] = !0, e
        }

        function o(e) {
          var t = R.createElement("div");
          try {
            return !!e(t)
          } catch (n) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function i(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
          if (r) return r;
          if (n)
            for (; n = n.nextSibling;)
              if (n === t) return -1;
          return e ? 1 : -1
        }

        function a(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return "input" === n && t.type === e
          }
        }

        function l(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function u(e) {
          return r(function(t) {
            return t = +t, r(function(n, r) {
              for (var o, i = e([], n.length, t), s = i.length; s--;) n[o = i[s]] && (n[o] = !(r[o] = n[o]))
            })
          })
        }

        function c(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function d(e) {
          for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
          return r
        }

        function p(e, t, n) {
          var r = t.dir,
            o = n && "parentNode" === r,
            i = W++;
          return t.first ? function(t, n, i) {
            for (; t = t[r];)
              if (1 === t.nodeType || o) return e(t, n, i)
          } : function(t, n, s) {
            var a, l, u, c = [z, i];
            if (s) {
              for (; t = t[r];)
                if ((1 === t.nodeType || o) && e(t, n, s)) return !0
            } else
              for (; t = t[r];)
                if (1 === t.nodeType || o) {
                  if (u = t[_] || (t[_] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[r]) && a[0] === z && a[1] === i) return c[2] = a[2];
                  if (l[r] = c, c[2] = e(t, n, s)) return !0
                }
          }
        }

        function h(e) {
          return e.length > 1 ? function(t, n, r) {
            for (var o = e.length; o--;)
              if (!e[o](t, n, r)) return !1;
            return !0
          } : e[0]
        }

        function g(e, n, r) {
          for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
          return r
        }

        function m(e, t, n, r, o) {
          for (var i, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(i = e[a]) && (!n || n(i, r, o)) && (s.push(i), u && t.push(a));
          return s
        }

        function v(e, t, n, o, i, s) {
          return o && !o[_] && (o = v(o)), i && !i[_] && (i = v(i, s)), r(function(r, s, a, l) {
            var u, c, f, d = [],
              p = [],
              h = s.length,
              v = r || g(t || "*", a.nodeType ? [a] : a, []),
              y = !e || !r && t ? v : m(v, d, e, a, l),
              b = n ? i || (r ? e : h || o) ? [] : s : y;
            if (n && n(y, b, a, l), o)
              for (u = m(b, p), o(u, [], a, l), c = u.length; c--;)(f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
            if (r) {
              if (i || e) {
                if (i) {
                  for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                  i(null, b = [], u, l)
                }
                for (c = b.length; c--;)(f = b[c]) && (u = i ? ee(r, f) : d[c]) > -1 && (r[u] = !(s[u] = f))
              }
            } else b = m(b === s ? b.splice(h, b.length) : b), i ? i(null, s, b, l) : K.apply(s, b)
          })
        }

        function y(e) {
          for (var t, n, r, o = e.length, i = T.relative[e[0].type], s = i || T.relative[" "], a = i ? 1 : 0, l = p(function(e) {
              return e === t
            }, s, !0), u = p(function(e) {
              return ee(t, e) > -1
            }, s, !0), c = [function(e, n, r) {
              var o = !i && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
              return t = null, o
            }]; o > a; a++)
            if (n = T.relative[e[a].type]) c = [p(h(c), n)];
            else {
              if (n = T.filter[e[a].type].apply(null, e[a].matches), n[_]) {
                for (r = ++a; o > r && !T.relative[e[r].type]; r++);
                return v(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({
                  value: " " === e[a - 2].type ? "*" : ""
                })).replace(ae, "$1"), n, r > a && y(e.slice(a, r)), o > r && y(e = e.slice(r)), o > r && d(e))
              }
              c.push(n)
            }
          return h(c)
        }

        function b(e, n) {
          var o = n.length > 0,
            i = e.length > 0,
            s = function(r, s, a, l, u) {
              var c, f, d, p = 0,
                h = "0",
                g = r && [],
                v = [],
                y = A,
                b = r || i && T.find.TAG("*", u),
                w = z += null == y ? 1 : Math.random() || .1,
                x = b.length;
              for (u && (A = s === R || s || u); h !== x && null != (c = b[h]); h++) {
                if (i && c) {
                  for (f = 0, s || c.ownerDocument === R || (j(c), a = !H); d = e[f++];)
                    if (d(c, s || R, a)) {
                      l.push(c);
                      break
                    }
                  u && (z = w)
                }
                o && ((c = !d && c) && p--, r && g.push(c))
              }
              if (p += h, o && h !== p) {
                for (f = 0; d = n[f++];) d(g, v, s, a);
                if (r) {
                  if (p > 0)
                    for (; h--;) g[h] || v[h] || (v[h] = J.call(l));
                  v = m(v)
                }
                K.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
              }
              return u && (z = w, A = y), g
            };
          return o ? r(s) : s
        }
        var w, x, T, C, E, S, k, N, A, D, L, j, R, O, H, P, F, q, M, _ = "sizzle" + 1 * new Date,
          I = e.document,
          z = 0,
          W = 0,
          B = n(),
          $ = n(),
          X = n(),
          U = function(e, t) {
            return e === t && (L = !0), 0
          },
          V = 1 << 31,
          Y = {}.hasOwnProperty,
          G = [],
          J = G.pop,
          Q = G.push,
          K = G.push,
          Z = G.slice,
          ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
              if (e[n] === t) return n;
            return -1
          },
          te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ne = "[\\x20\\t\\r\\n\\f]",
          re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
          ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
          se = new RegExp(ne + "+", "g"),
          ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
          le = new RegExp("^" + ne + "*," + ne + "*"),
          ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
          ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
          fe = new RegExp(ie),
          de = new RegExp("^" + re + "$"),
          pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
          },
          he = /^(?:input|select|textarea|button)$/i,
          ge = /^h\d$/i,
          me = /^[^{]+\{\s*\[native \w/,
          ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ye = /[+~]/,
          be = /'|\\/g,
          we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
          xe = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          },
          Te = function() {
            j()
          };
        try {
          K.apply(G = Z.call(I.childNodes), I.childNodes), G[I.childNodes.length].nodeType
        } catch (Ce) {
          K = {
            apply: G.length ? function(e, t) {
              Q.apply(e, Z.call(t))
            } : function(e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];);
              e.length = n - 1
            }
          }
        }
        x = t.support = {}, E = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1
        }, j = t.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : I;
          return r !== R && 9 === r.nodeType && r.documentElement ? (R = r, O = R.documentElement, H = !E(R), (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), x.attributes = o(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), x.getElementsByTagName = o(function(e) {
            return e.appendChild(R.createComment("")), !e.getElementsByTagName("*").length
          }), x.getElementsByClassName = me.test(R.getElementsByClassName), x.getById = o(function(e) {
            return O.appendChild(e).id = _, !R.getElementsByName || !R.getElementsByName(_).length
          }), x.getById ? (T.find.ID = function(e, t) {
            if ("undefined" != typeof t.getElementById && H) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }, T.filter.ID = function(e) {
            var t = e.replace(we, xe);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }) : (delete T.find.ID, T.filter.ID = function(e) {
            var t = e.replace(we, xe);
            return function(e) {
              var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, r = [],
              o = 0,
              i = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = i[o++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return i
          }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
            return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
          }, F = [], P = [], (x.qsa = me.test(R.querySelectorAll)) && (o(function(e) {
            O.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || P.push(".#.+[+~]")
          }), o(function(e) {
            var t = R.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
          })), (x.matchesSelector = me.test(q = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
            x.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), F.push("!=", ie)
          }), P = P.length && new RegExp(P.join("|")), F = F.length && new RegExp(F.join("|")), t = me.test(O.compareDocumentPosition), M = t || me.test(O.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, U = t ? function(e, t) {
            if (e === t) return L = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === R || e.ownerDocument === I && M(I, e) ? -1 : t === R || t.ownerDocument === I && M(I, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return L = !0, 0;
            var n, r = 0,
              o = e.parentNode,
              i = t.parentNode,
              a = [e],
              l = [t];
            if (!o || !i) return e === R ? -1 : t === R ? 1 : o ? -1 : i ? 1 : D ? ee(D, e) - ee(D, t) : 0;
            if (o === i) return s(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) l.unshift(n);
            for (; a[r] === l[r];) r++;
            return r ? s(a[r], l[r]) : a[r] === I ? -1 : l[r] === I ? 1 : 0
          }, R) : R
        }, t.matches = function(e, n) {
          return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== R && j(e), n = n.replace(ce, "='$1']"), x.matchesSelector && H && !X[n + " "] && (!F || !F.test(n)) && (!P || !P.test(n))) try {
            var r = q.call(e, n);
            if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (o) {}
          return t(n, R, null, [e]).length > 0
        }, t.contains = function(e, t) {
          return (e.ownerDocument || e) !== R && j(e), M(e, t)
        }, t.attr = function(e, t) {
          (e.ownerDocument || e) !== R && j(e);
          var n = T.attrHandle[t.toLowerCase()],
            r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
          return void 0 !== r ? r : x.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
          var t, n = [],
            r = 0,
            o = 0;
          if (L = !x.detectDuplicates, D = !x.sortStable && e.slice(0), e.sort(U), L) {
            for (; t = e[o++];) t === e[o] && (r = n.push(o));
            for (; r--;) e.splice(n[r], 1)
          }
          return D = null, e
        }, C = t.getText = function(e) {
          var t, n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
            } else if (3 === o || 4 === o) return e.nodeValue
          } else
            for (; t = e[r++];) n += C(t);
          return n
        }, T = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: pe,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(e) {
              return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(we, xe).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = B[e + " "];
              return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(e, n, r) {
              return function(o) {
                var i = t.attr(o, e);
                return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
              }
            },
            CHILD: function(e, t, n, r, o) {
              var i = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === r && 0 === o ? function(e) {
                return !!e.parentNode
              } : function(t, n, l) {
                var u, c, f, d, p, h, g = i !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;
                if (m) {
                  if (i) {
                    for (; g;) {
                      for (d = t; d = d[g];)
                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                      h = g = "only" === e && !h && "nextSibling"
                    }
                    return !0
                  }
                  if (h = [s ? m.firstChild : m.lastChild], s && y) {
                    for (d = m, f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], p = u[0] === z && u[1], b = p && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                      if (1 === d.nodeType && ++b && d === t) {
                        c[e] = [z, p, b];
                        break
                      }
                  } else if (y && (d = t, f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], p = u[0] === z && u[1], b = p), b === !1)
                    for (;
                      (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [z, b]), d !== t)););
                  return b -= o, b === r || b % r === 0 && b / r >= 0
                }
              }
            },
            PSEUDO: function(e, n) {
              var o, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
              return i[_] ? i(n) : i.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                for (var r, o = i(e, n), s = o.length; s--;) r = ee(e, o[s]), e[r] = !(t[r] = o[s])
              }) : function(e) {
                return i(e, 0, o)
              }) : i
            }
          },
          pseudos: {
            not: r(function(e) {
              var t = [],
                n = [],
                o = k(e.replace(ae, "$1"));
              return o[_] ? r(function(e, t, n, r) {
                for (var i, s = o(e, null, r, []), a = e.length; a--;)(i = s[a]) && (e[a] = !(t[a] = i))
              }) : function(e, r, i) {
                return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
              }
            }),
            has: r(function(e) {
              return function(n) {
                return t(e, n).length > 0
              }
            }),
            contains: r(function(e) {
              return e = e.replace(we, xe),
                function(t) {
                  return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                }
            }),
            lang: r(function(e) {
              return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                function(t) {
                  var n;
                  do
                    if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function(e) {
              return e === O
            },
            focus: function(e) {
              return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
              return e.disabled === !1
            },
            disabled: function(e) {
              return e.disabled === !0
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !T.pseudos.empty(e)
            },
            header: function(e) {
              return ge.test(e.nodeName)
            },
            input: function(e) {
              return he.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: u(function() {
              return [0]
            }),
            last: u(function(e, t) {
              return [t - 1]
            }),
            eq: u(function(e, t, n) {
              return [0 > n ? n + t : n]
            }),
            even: u(function(e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e
            }),
            odd: u(function(e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e
            }),
            lt: u(function(e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
              return e
            }),
            gt: u(function(e, t, n) {
              for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
              return e
            })
          }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) T.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
          }) T.pseudos[w] = l(w);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, S = t.tokenize = function(e, n) {
          var r, o, i, s, a, l, u, c = $[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (a = e, l = [], u = T.preFilter; a;) {
            (!r || (o = le.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(i = [])), r = !1, (o = ue.exec(a)) && (r = o.shift(), i.push({
              value: r,
              type: o[0].replace(ae, " ")
            }), a = a.slice(r.length));
            for (s in T.filter) !(o = pe[s].exec(a)) || u[s] && !(o = u[s](o)) || (r = o.shift(), i.push({
              value: r,
              type: s,
              matches: o
            }), a = a.slice(r.length));
            if (!r) break
          }
          return n ? a.length : a ? t.error(e) : $(e, l).slice(0)
        }, k = t.compile = function(e, t) {
          var n, r = [],
            o = [],
            i = X[e + " "];
          if (!i) {
            for (t || (t = S(e)), n = t.length; n--;) i = y(t[n]), i[_] ? r.push(i) : o.push(i);
            i = X(e, b(o, r)), i.selector = e
          }
          return i
        }, N = t.select = function(e, t, n, r) {
          var o, i, s, a, l, u = "function" == typeof e && e,
            f = !r && S(e = u.selector || e);
          if (n = n || [], 1 === f.length) {
            if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (s = i[0]).type && x.getById && 9 === t.nodeType && H && T.relative[i[1].type]) {
              if (t = (T.find.ID(s.matches[0].replace(we, xe), t) || [])[0], !t) return n;
              u && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = pe.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o], !T.relative[a = s.type]);)
              if ((l = T.find[a]) && (r = l(s.matches[0].replace(we, xe), ye.test(i[0].type) && c(t.parentNode) || t))) {
                if (i.splice(o, 1), e = r.length && d(i), !e) return K.apply(n, r), n;
                break
              }
          }
          return (u || k(e, f))(r, t, !H, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = _.split("").sort(U).join("") === _, x.detectDuplicates = !!L, j(), x.sortDetached = o(function(e) {
          return 1 & e.compareDocumentPosition(R.createElement("div"))
        }), o(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
          return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
          return null == e.getAttribute("disabled")
        }) || i(te, function(e, t, n) {
          var r;
          return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
      }(n);
    ue.find = he, ue.expr = he.selectors, ue.expr[":"] = ue.expr.pseudos, ue.uniqueSort = ue.unique = he.uniqueSort, ue.text = he.getText, ue.isXMLDoc = he.isXML, ue.contains = he.contains;
    var ge = function(e, t, n) {
        for (var r = [], o = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (o && ue(e).is(n)) break;
            r.push(e)
          }
        return r
      },
      me = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      ve = ue.expr.match.needsContext,
      ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      be = /^.[^:#\[\.,]*$/;
    ue.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [r] : [] : ue.find.matches(e, ue.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, ue.fn.extend({
      find: function(e) {
        var t, n = this.length,
          r = [],
          o = this;
        if ("string" != typeof e) return this.pushStack(ue(e).filter(function() {
          for (t = 0; n > t; t++)
            if (ue.contains(o[t], this)) return !0
        }));
        for (t = 0; n > t; t++) ue.find(e, o[t], r);
        return r = this.pushStack(n > 1 ? ue.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
      },
      filter: function(e) {
        return this.pushStack(a(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(a(this, e || [], !0))
      },
      is: function(e) {
        return !!a(this, "string" == typeof e && ve.test(e) ? ue(e) : e || [], !1).length
      }
    });
    var we, xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      Te = ue.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || we, "string" == typeof e) {
          if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : xe.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (t = t instanceof ue ? t[0] : t, ue.merge(this, ue.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ye.test(r[1]) && ue.isPlainObject(t))
              for (r in t) ue.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          return o = Z.getElementById(r[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Z, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ue) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
      };
    Te.prototype = ue.fn, we = ue(Z);
    var Ce = /^(?:parents|prev(?:Until|All))/,
      Ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    ue.fn.extend({
      has: function(e) {
        var t = ue(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; n > e; e++)
            if (ue.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        for (var n, r = 0, o = this.length, i = [], s = ve.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; o > r; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
              i.push(n);
              break
            }
        return this.pushStack(i.length > 1 ? ue.uniqueSort(i) : i)
      },
      index: function(e) {
        return e ? "string" == typeof e ? re.call(ue(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(ue.uniqueSort(ue.merge(this.get(), ue(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), ue.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return ge(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return ge(e, "parentNode", n)
      },
      next: function(e) {
        return l(e, "nextSibling")
      },
      prev: function(e) {
        return l(e, "previousSibling")
      },
      nextAll: function(e) {
        return ge(e, "nextSibling")
      },
      prevAll: function(e) {
        return ge(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return ge(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return ge(e, "previousSibling", n)
      },
      siblings: function(e) {
        return me((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return me(e.firstChild)
      },
      contents: function(e) {
        return e.contentDocument || ue.merge([], e.childNodes)
      }
    }, function(e, t) {
      ue.fn[e] = function(n, r) {
        var o = ue.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ue.filter(r, o)), this.length > 1 && (Ee[e] || ue.uniqueSort(o), Ce.test(e) && o.reverse()), this.pushStack(o)
      }
    });
    var Se = /\S+/g;
    ue.Callbacks = function(e) {
      e = "string" == typeof e ? u(e) : ue.extend({}, e);
      var t, n, r, o, i = [],
        s = [],
        a = -1,
        l = function() {
          for (o = e.once, r = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < i.length;) i[a].apply(n[0], n[1]) === !1 && e.stopOnFalse && (a = i.length, n = !1);
          e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
        },
        c = {
          add: function() {
            return i && (n && !t && (a = i.length - 1, s.push(n)), function r(t) {
              ue.each(t, function(t, n) {
                ue.isFunction(n) ? e.unique && c.has(n) || i.push(n) : n && n.length && "string" !== ue.type(n) && r(n)
              })
            }(arguments), n && !t && l()), this
          },
          remove: function() {
            return ue.each(arguments, function(e, t) {
              for (var n;
                (n = ue.inArray(t, i, n)) > -1;) i.splice(n, 1), a >= n && a--
            }), this
          },
          has: function(e) {
            return e ? ue.inArray(e, i) > -1 : i.length > 0
          },
          empty: function() {
            return i && (i = []), this
          },
          disable: function() {
            return o = s = [], i = n = "", this
          },
          disabled: function() {
            return !i
          },
          lock: function() {
            return o = s = [], n || (i = n = ""), this
          },
          locked: function() {
            return !!o
          },
          fireWith: function(e, n) {
            return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
          },
          fire: function() {
            return c.fireWith(this, arguments), this
          },
          fired: function() {
            return !!r
          }
        };
      return c
    }, ue.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", ue.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ue.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ue.Callbacks("memory")]
          ],
          n = "pending",
          r = {
            state: function() {
              return n
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            then: function() {
              var e = arguments;
              return ue.Deferred(function(n) {
                ue.each(t, function(t, i) {
                  var s = ue.isFunction(e[t]) && e[t];
                  o[i[1]](function() {
                    var e = s && s.apply(this, arguments);
                    e && ue.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? ue.extend(e, r) : r
            }
          },
          o = {};
        return r.pipe = r.then, ue.each(t, function(e, i) {
          var s = i[2],
            a = i[3];
          r[i[1]] = s.add, a && s.add(function() {
            n = a
          }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
            return o[i[0] + "With"](this === o ? r : this, arguments), this
          }, o[i[0] + "With"] = s.fireWith
        }), r.promise(o), e && e.call(o, o), o
      },
      when: function(e) {
        var t, n, r, o = 0,
          i = ee.call(arguments),
          s = i.length,
          a = 1 !== s || e && ue.isFunction(e.promise) ? s : 0,
          l = 1 === a ? e : ue.Deferred(),
          u = function(e, n, r) {
            return function(o) {
              n[e] = this, r[e] = arguments.length > 1 ? ee.call(arguments) : o, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
            }
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), r = new Array(s); s > o; o++) i[o] && ue.isFunction(i[o].promise) ? i[o].promise().progress(u(o, n, t)).done(u(o, r, i)).fail(l.reject) : --a;
        return a || l.resolveWith(r, i), l.promise()
      }
    });
    var ke;
    ue.fn.ready = function(e) {
      return ue.ready.promise().done(e), this
    }, ue.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? ue.readyWait++ : ue.ready(!0)
      },
      ready: function(e) {
        (e === !0 ? --ue.readyWait : ue.isReady) || (ue.isReady = !0, e !== !0 && --ue.readyWait > 0 || (ke.resolveWith(Z, [ue]), ue.fn.triggerHandler && (ue(Z).triggerHandler("ready"), ue(Z).off("ready"))))
      }
    }), ue.ready.promise = function(e) {
      return ke || (ke = ue.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(ue.ready) : (Z.addEventListener("DOMContentLoaded", c), n.addEventListener("load", c))), ke.promise(e)
    }, ue.ready.promise();
    var Ne = function(e, t, n, r, o, i, s) {
        var a = 0,
          l = e.length,
          u = null == n;
        if ("object" === ue.type(n)) {
          o = !0;
          for (a in n) Ne(e, t, a, n[a], !0, i, s)
        } else if (void 0 !== r && (o = !0, ue.isFunction(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
            return u.call(ue(e), n)
          })), t))
          for (; l > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
      },
      Ae = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
    f.uid = 1, f.prototype = {
      register: function(e, t) {
        var n = t || {};
        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
          value: n,
          writable: !0,
          configurable: !0
        }), e[this.expando]
      },
      cache: function(e) {
        if (!Ae(e)) return {};
        var t = e[this.expando];
        return t || (t = {}, Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var r, o = this.cache(e);
        if ("string" == typeof t) o[t] = n;
        else
          for (r in t) o[r] = t[r];
        return o
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
      },
      access: function(e, t, n) {
        var r;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ue.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, r, o, i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 === t) this.register(e);
          else {
            ue.isArray(t) ? r = t.concat(t.map(ue.camelCase)) : (o = ue.camelCase(t), t in i ? r = [t, o] : (r = o, r = r in i ? [r] : r.match(Se) || [])), n = r.length;
            for (; n--;) delete i[r[n]]
          }(void 0 === t || ue.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !ue.isEmptyObject(t)
      }
    };
    var De = new f,
      Le = new f,
      je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Re = /[A-Z]/g;
    ue.extend({
      hasData: function(e) {
        return Le.hasData(e) || De.hasData(e)
      },
      data: function(e, t, n) {
        return Le.access(e, t, n)
      },
      removeData: function(e, t) {
        Le.remove(e, t)
      },
      _data: function(e, t, n) {
        return De.access(e, t, n)
      },
      _removeData: function(e, t) {
        De.remove(e, t)
      }
    }), ue.fn.extend({
      data: function(e, t) {
        var n, r, o, i = this[0],
          s = i && i.attributes;
        if (void 0 === e) {
          if (this.length && (o = Le.get(i), 1 === i.nodeType && !De.get(i, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)), d(i, r, o[r])));
            De.set(i, "hasDataAttrs", !0)
          }
          return o
        }
        return "object" == typeof e ? this.each(function() {
          Le.set(this, e)
        }) : Ne(this, function(t) {
          var n, r;
          if (i && void 0 === t) {
            if (n = Le.get(i, e) || Le.get(i, e.replace(Re, "-$&").toLowerCase()), void 0 !== n) return n;
            if (r = ue.camelCase(e), n = Le.get(i, r), void 0 !== n) return n;
            if (n = d(i, r, void 0), void 0 !== n) return n
          } else r = ue.camelCase(e), this.each(function() {
            var n = Le.get(this, r);
            Le.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Le.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          Le.remove(this, e)
        })
      }
    }), ue.extend({
      queue: function(e, t, n) {
        var r;
        return e ? (t = (t || "fx") + "queue", r = De.get(e, t), n && (!r || ue.isArray(n) ? r = De.access(e, t, ue.makeArray(n)) : r.push(n)), r || []) : void 0
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = ue.queue(e, t),
          r = n.length,
          o = n.shift(),
          i = ue._queueHooks(e, t),
          s = function() {
            ue.dequeue(e, t)
          };
        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, s, i)), !r && i && i.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return De.get(e, n) || De.access(e, n, {
          empty: ue.Callbacks("once memory").add(function() {
            De.remove(e, [t + "queue", n])
          })
        })
      }
    }), ue.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ue.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = ue.queue(this, e, t);
          ue._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ue.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          ue.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, r = 1,
          o = ue.Deferred(),
          i = this,
          s = this.length,
          a = function() {
            --r || o.resolveWith(i, [i])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = De.get(i[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
        return a(), o.promise(t)
      }
    });
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      He = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
      Pe = ["Top", "Right", "Bottom", "Left"],
      Fe = function(e, t) {
        return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
      },
      qe = /^(?:checkbox|radio)$/i,
      Me = /<([\w:-]+)/,
      _e = /^$|\/(?:java|ecma)script/i,
      Ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
    var ze = /<|&#?\w+;/;
    ! function() {
      var e = Z.createDocumentFragment(),
        t = e.appendChild(Z.createElement("div")),
        n = Z.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var We = /^key/,
      Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      $e = /^([^.]*)(?:\.(.+)|)/;
    ue.event = {
      global: {},
      add: function(e, t, n, r, o) {
        var i, s, a, l, u, c, f, d, p, h, g, m = De.get(e);
        if (m)
          for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = ue.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
              return "undefined" != typeof ue && ue.event.triggered !== t.type ? ue.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(Se) || [""], u = t.length; u--;) a = $e.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = ue.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = ue.event.special[p] || {}, c = ue.extend({
            type: p,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && ue.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, i), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), ue.event.global[p] = !0)
      },
      remove: function(e, t, n, r, o) {
        var i, s, a, l, u, c, f, d, p, h, g, m = De.hasData(e) && De.get(e);
        if (m && (l = m.events)) {
          for (t = (t || "").match(Se) || [""], u = t.length; u--;)
            if (a = $e.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
              for (f = ue.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1),
                c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
              s && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ue.removeEvent(e, p, m.handle), delete l[p])
            } else
              for (p in l) ue.event.remove(e, p + t[u], n, r, !0);
          ue.isEmptyObject(l) && De.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        e = ue.event.fix(e);
        var t, n, r, o, i, s = [],
          a = ee.call(arguments),
          l = (De.get(this, "events") || {})[e.type] || [],
          u = ue.event.special[e.type] || {};
        if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
          for (s = ue.event.handlers.call(this, e, l), t = 0;
            (o = s[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = o.elem, n = 0;
              (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var n, r, o, i, s = [],
          a = t.delegateCount,
          l = e.target;
        if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
              for (r = [], n = 0; a > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? ue(o, this).index(l) > -1 : ue.find(o, this, null, [l]).length), r[o] && r.push(i);
              r.length && s.push({
                elem: l,
                handlers: r
              })
            }
        return a < t.length && s.push({
          elem: this,
          handlers: t.slice(a)
        }), s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var n, r, o, i = t.button;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[ue.expando]) return e;
        var t, n, r, o = e.type,
          i = e,
          s = this.fixHooks[o];
        for (s || (this.fixHooks[o] = s = Be.test(o) ? this.mouseHooks : We.test(o) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ue.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
        return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, i) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            return this !== b() && this.focus ? (this.focus(), !1) : void 0
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === b() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && ue.nodeName(this, "input") ? (this.click(), !1) : void 0
          },
          _default: function(e) {
            return ue.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, ue.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, ue.Event = function(e, t) {
      return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : y) : this.type = e, t && ue.extend(this, t), this.timeStamp = e && e.timeStamp || ue.now(), void(this[ue.expando] = !0)) : new ue.Event(e, t)
    }, ue.Event.prototype = {
      constructor: ue.Event,
      isDefaultPrevented: y,
      isPropagationStopped: y,
      isImmediatePropagationStopped: y,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = v, e && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = v, e && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, ue.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      ue.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, r = this,
            o = e.relatedTarget,
            i = e.handleObj;
          return (!o || o !== r && !ue.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), ue.fn.extend({
      on: function(e, t, n, r) {
        return w(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
        return w(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this
        }
        return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = y), this.each(function() {
          ue.event.remove(this, e, n, t)
        })
      }
    });
    var Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Ue = /<script|<style|<link/i,
      Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ye = /^true\/(.*)/,
      Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ue.extend({
      htmlPrefilter: function(e) {
        return e.replace(Xe, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var r, o, i, s, a = e.cloneNode(!0),
          l = ue.contains(e.ownerDocument, e);
        if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
          for (s = h(a), i = h(e), r = 0, o = i.length; o > r; r++) S(i[r], s[r]);
        if (t)
          if (n)
            for (i = i || h(e), s = s || h(a), r = 0, o = i.length; o > r; r++) E(i[r], s[r]);
          else E(e, a);
        return s = h(a, "script"), s.length > 0 && g(s, !l && h(e, "script")), a
      },
      cleanData: function(e) {
        for (var t, n, r, o = ue.event.special, i = 0; void 0 !== (n = e[i]); i++)
          if (Ae(n)) {
            if (t = n[De.expando]) {
              if (t.events)
                for (r in t.events) o[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, t.handle);
              n[De.expando] = void 0
            }
            n[Le.expando] && (n[Le.expando] = void 0)
          }
      }
    }), ue.fn.extend({
      domManip: k,
      detach: function(e) {
        return N(this, e, !0)
      },
      remove: function(e) {
        return N(this, e)
      },
      text: function(e) {
        return Ne(this, function(e) {
          return void 0 === e ? ue.text(this) : this.empty().each(function() {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return k(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = x(this, e);
            t.appendChild(e)
          }
        })
      },
      prepend: function() {
        return k(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = x(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return k(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return k(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ue.cleanData(h(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
          return ue.clone(this, e, t)
        })
      },
      html: function(e) {
        return Ne(this, function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !Ue.test(e) && !Ie[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = ue.htmlPrefilter(e);
            try {
              for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ue.cleanData(h(t, !1)), t.innerHTML = e);
              t = 0
            } catch (o) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return k(this, arguments, function(t) {
          var n = this.parentNode;
          ue.inArray(this, e) < 0 && (ue.cleanData(h(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), ue.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      ue.fn[e] = function(e) {
        for (var n, r = [], o = ue(e), i = o.length - 1, s = 0; i >= s; s++) n = s === i ? this : this.clone(!0), ue(o[s])[t](n), ne.apply(r, n.get());
        return this.pushStack(r)
      }
    });
    var Je, Qe = {
        HTML: "block",
        BODY: "block"
      },
      Ke = /^margin/,
      Ze = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
      et = function(e) {
        var t = e.ownerDocument.defaultView;
        return t.opener || (t = n), t.getComputedStyle(e)
      },
      tt = function(e, t, n, r) {
        var o, i, s = {};
        for (i in t) s[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, r || []);
        for (i in t) e.style[i] = s[i];
        return o
      },
      nt = Z.documentElement;
    ! function() {
      function e() {
        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", nt.appendChild(s);
        var e = n.getComputedStyle(a);
        t = "1%" !== e.top, i = "2px" === e.marginLeft, r = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, nt.removeChild(s)
      }
      var t, r, o, i, s = Z.createElement("div"),
        a = Z.createElement("div");
      a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ue.extend(ae, {
        pixelPosition: function() {
          return e(), t
        },
        boxSizingReliable: function() {
          return null == r && e(), r
        },
        pixelMarginRight: function() {
          return null == r && e(), o
        },
        reliableMarginLeft: function() {
          return null == r && e(), i
        },
        reliableMarginRight: function() {
          var e, t = a.appendChild(Z.createElement("div"));
          return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", nt.appendChild(s), e = !parseFloat(n.getComputedStyle(t).marginRight), nt.removeChild(s), a.removeChild(t), e
        }
      }))
    }();
    var rt = /^(none|table(?!-c[ea]).+)/,
      ot = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      it = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      st = ["Webkit", "O", "Moz", "ms"],
      at = Z.createElement("div").style;
    ue.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = L(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": "cssFloat"
      },
      style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, i, s, a = ue.camelCase(t),
            l = e.style;
          return t = ue.cssProps[a] || (ue.cssProps[a] = R(a) || a), s = ue.cssHooks[t] || ue.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : l[t] : (i = typeof n, "string" === i && (o = He.exec(n)) && o[1] && (n = p(e, t, o), i = "number"), null != n && n === n && ("number" === i && (n += o && o[3] || (ue.cssNumber[a] ? "" : "px")), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n)), void 0)
        }
      },
      css: function(e, t, n, r) {
        var o, i, s, a = ue.camelCase(t);
        return t = ue.cssProps[a] || (ue.cssProps[a] = R(a) || a), s = ue.cssHooks[t] || ue.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = L(e, t, r)), "normal" === o && t in it && (o = it[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
      }
    }), ue.each(["height", "width"], function(e, t) {
      ue.cssHooks[t] = {
        get: function(e, n, r) {
          return n ? rt.test(ue.css(e, "display")) && 0 === e.offsetWidth ? tt(e, ot, function() {
            return P(e, t, r)
          }) : P(e, t, r) : void 0
        },
        set: function(e, n, r) {
          var o, i = r && et(e),
            s = r && H(e, t, r, "border-box" === ue.css(e, "boxSizing", !1, i), i);
          return s && (o = He.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ue.css(e, t)), O(e, n, s)
        }
      }
    }), ue.cssHooks.marginLeft = j(ae.reliableMarginLeft, function(e, t) {
      return t ? (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px" : void 0
    }), ue.cssHooks.marginRight = j(ae.reliableMarginRight, function(e, t) {
      return t ? tt(e, {
        display: "inline-block"
      }, L, [e, "marginRight"]) : void 0
    }), ue.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      ue.cssHooks[e + t] = {
        expand: function(n) {
          for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Pe[r] + t] = i[r] || i[r - 2] || i[0];
          return o
        }
      }, Ke.test(e) || (ue.cssHooks[e + t].set = O)
    }), ue.fn.extend({
      css: function(e, t) {
        return Ne(this, function(e, t, n) {
          var r, o, i = {},
            s = 0;
          if (ue.isArray(t)) {
            for (r = et(e), o = t.length; o > s; s++) i[t[s]] = ue.css(e, t[s], !1, r);
            return i
          }
          return void 0 !== n ? ue.style(e, t, n) : ue.css(e, t)
        }, e, t, arguments.length > 1)
      },
      show: function() {
        return F(this, !0)
      },
      hide: function() {
        return F(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Fe(this) ? ue(this).show() : ue(this).hide()
        })
      }
    }), ue.Tween = q, q.prototype = {
      constructor: q,
      init: function(e, t, n, r, o, i) {
        this.elem = e, this.prop = n, this.easing = o || ue.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ue.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = q.propHooks[this.prop];
        return e && e.get ? e.get(this) : q.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = q.propHooks[this.prop];
        return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
      }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        },
        set: function(e) {
          ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ue.cssProps[e.prop]] && !ue.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ue.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, ue.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, ue.fx = q.prototype.init, ue.fx.step = {};
    var lt, ut, ct = /^(?:toggle|show|hide)$/,
      ft = /queueHooks$/;
    ue.Animation = ue.extend(B, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return p(n.elem, e, He.exec(t), n), n
          }]
        },
        tweener: function(e, t) {
          ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Se);
          for (var n, r = 0, o = e.length; o > r; r++) n = e[r], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
        },
        prefilters: [z],
        prefilter: function(e, t) {
          t ? B.prefilters.unshift(e) : B.prefilters.push(e)
        }
      }), ue.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ue.extend({}, e) : {
          complete: n || !n && t || ue.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !ue.isFunction(t) && t
        };
        return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
          ue.isFunction(r.old) && r.old.call(this), r.queue && ue.dequeue(this, r.queue)
        }, r
      }, ue.fn.extend({
        fadeTo: function(e, t, n, r) {
          return this.filter(Fe).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r)
        },
        animate: function(e, t, n, r) {
          var o = ue.isEmptyObject(e),
            i = ue.speed(t, n, r),
            s = function() {
              var t = B(this, ue.extend({}, e), i);
              (o || De.get(this, "finish")) && t.stop(!0)
            };
          return s.finish = s, o || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
        },
        stop: function(e, t, n) {
          var r = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              o = null != e && e + "queueHooks",
              i = ue.timers,
              s = De.get(this);
            if (o) s[o] && s[o].stop && r(s[o]);
            else
              for (o in s) s[o] && s[o].stop && ft.test(o) && r(s[o]);
            for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
            (t || !n) && ue.dequeue(this, e)
          })
        },
        finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, n = De.get(this),
              r = n[e + "queue"],
              o = n[e + "queueHooks"],
              i = ue.timers,
              s = r ? r.length : 0;
            for (n.finish = !0, ue.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
            for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
          })
        }
      }), ue.each(["toggle", "show", "hide"], function(e, t) {
        var n = ue.fn[t];
        ue.fn[t] = function(e, r, o) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, o)
        }
      }), ue.each({
        slideDown: _("show"),
        slideUp: _("hide"),
        slideToggle: _("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        ue.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
        }
      }), ue.timers = [], ue.fx.tick = function() {
        var e, t = 0,
          n = ue.timers;
        for (lt = ue.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || ue.fx.stop(), lt = void 0
      }, ue.fx.timer = function(e) {
        ue.timers.push(e), e() ? ue.fx.start() : ue.timers.pop()
      }, ue.fx.interval = 13, ue.fx.start = function() {
        ut || (ut = n.setInterval(ue.fx.tick, ue.fx.interval))
      }, ue.fx.stop = function() {
        n.clearInterval(ut), ut = null
      }, ue.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, ue.fn.delay = function(e, t) {
        return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
          var o = n.setTimeout(t, e);
          r.stop = function() {
            n.clearTimeout(o)
          }
        })
      },
      function() {
        var e = Z.createElement("input"),
          t = Z.createElement("select"),
          n = t.appendChild(Z.createElement("option"));
        e.type = "checkbox", ae.checkOn = "" !== e.value, ae.optSelected = n.selected, t.disabled = !0, ae.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", ae.radioValue = "t" === e.value
      }();
    var dt, pt = ue.expr.attrHandle;
    ue.fn.extend({
      attr: function(e, t) {
        return Ne(this, ue.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          ue.removeAttr(this, e)
        })
      }
    }), ue.extend({
      attr: function(e, t, n) {
        var r, o, i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? ue.prop(e, t, n) : (1 === i && ue.isXMLDoc(e) || (t = t.toLowerCase(), o = ue.attrHooks[t] || (ue.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void ue.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = ue.find.attr(e, t), null == r ? void 0 : r))
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!ae.radioValue && "radio" === t && ue.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r, o = 0,
          i = t && t.match(Se);
        if (i && 1 === e.nodeType)
          for (; n = i[o++];) r = ue.propFix[n] || n, ue.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
      }
    }), dt = {
      set: function(e, t, n) {
        return t === !1 ? ue.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = pt[t] || ue.find.attr;
      pt[t] = function(e, t, r) {
        var o, i;
        return r || (i = pt[t], pt[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, pt[t] = i), o
      }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
    ue.fn.extend({
      prop: function(e, t) {
        return Ne(this, ue.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[ue.propFix[e] || e]
        })
      }
    }), ue.extend({
      prop: function(e, t, n) {
        var r, o, i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && ue.isXMLDoc(e) || (t = ue.propFix[t] || t, o = ue.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = ue.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), ae.optSelected || (ue.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      }
    }), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      ue.propFix[this.toLowerCase()] = this
    });
    var mt = /[\t\r\n\f]/g;
    ue.fn.extend({
      addClass: function(e) {
        var t, n, r, o, i, s, a, l = 0;
        if (ue.isFunction(e)) return this.each(function(t) {
          ue(this).addClass(e.call(this, t, $(this)))
        });
        if ("string" == typeof e && e)
          for (t = e.match(Se) || []; n = this[l++];)
            if (o = $(n), r = 1 === n.nodeType && (" " + o + " ").replace(mt, " ")) {
              for (s = 0; i = t[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              a = ue.trim(r), o !== a && n.setAttribute("class", a)
            }
        return this
      },
      removeClass: function(e) {
        var t, n, r, o, i, s, a, l = 0;
        if (ue.isFunction(e)) return this.each(function(t) {
          ue(this).removeClass(e.call(this, t, $(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(Se) || []; n = this[l++];)
            if (o = $(n), r = 1 === n.nodeType && (" " + o + " ").replace(mt, " ")) {
              for (s = 0; i = t[s++];)
                for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
              a = ue.trim(r), o !== a && n.setAttribute("class", a)
            }
        return this
      },
      toggleClass: function(e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ue.isFunction(e) ? this.each(function(n) {
          ue(this).toggleClass(e.call(this, n, $(this), t), t)
        }) : this.each(function() {
          var t, r, o, i;
          if ("string" === n)
            for (r = 0, o = ue(this), i = e.match(Se) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          else(void 0 === e || "boolean" === n) && (t = $(this), t && De.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : De.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
          if (1 === n.nodeType && (" " + $(n) + " ").replace(mt, " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var vt = /\r/g;
    ue.fn.extend({
      val: function(e) {
        var t, n, r, o = this[0]; {
          if (arguments.length) return r = ue.isFunction(e), this.each(function(n) {
            var o;
            1 === this.nodeType && (o = r ? e.call(this, n, ue(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
              return null == e ? "" : e + ""
            })), t = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
          });
          if (o) return t = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(vt, "") : null == n ? "" : n)
        }
      }
    }), ue.extend({
      valHooks: {
        option: {
          get: function(e) {
            return ue.trim(e.value)
          }
        },
        select: {
          get: function(e) {
            for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, s = i ? null : [], a = i ? o + 1 : r.length, l = 0 > o ? a : i ? o : 0; a > l; l++)
              if (n = r[l], (n.selected || l === o) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue.nodeName(n.parentNode, "optgroup"))) {
                if (t = ue(n).val(), i) return t;
                s.push(t)
              }
            return s
          },
          set: function(e, t) {
            for (var n, r, o = e.options, i = ue.makeArray(t), s = o.length; s--;) r = o[s], (r.selected = ue.inArray(ue.valHooks.option.get(r), i) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), i
          }
        }
      }
    }), ue.each(["radio", "checkbox"], function() {
      ue.valHooks[this] = {
        set: function(e, t) {
          return ue.isArray(t) ? e.checked = ue.inArray(ue(e).val(), t) > -1 : void 0
        }
      }, ae.checkOn || (ue.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var yt = /^(?:focusinfocus|focusoutblur)$/;
    ue.extend(ue.event, {
      trigger: function(e, t, r, o) {
        var i, s, a, l, u, c, f, d = [r || Z],
          p = se.call(e, "type") ? e.type : e,
          h = se.call(e, "namespace") ? e.namespace.split(".") : [];
        if (s = a = r = r || Z, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(p + ue.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[ue.expando] ? e : new ue.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ue.makeArray(t, [e]), f = ue.event.special[p] || {}, o || !f.trigger || f.trigger.apply(r, t) !== !1)) {
          if (!o && !f.noBubble && !ue.isWindow(r)) {
            for (l = f.delegateType || p, yt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
            a === (r.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || n)
          }
          for (i = 0;
            (s = d[i++]) && !e.isPropagationStopped();) e.type = i > 1 ? l : f.bindType || p, c = (De.get(s, "events") || {})[e.type] && De.get(s, "handle"), c && c.apply(s, t), c = u && s[u], c && c.apply && Ae(s) && (e.result = c.apply(s, t), e.result === !1 && e.preventDefault());
          return e.type = p, o || e.isDefaultPrevented() || f._default && f._default.apply(d.pop(), t) !== !1 || !Ae(r) || u && ue.isFunction(r[p]) && !ue.isWindow(r) && (a = r[u], a && (r[u] = null), ue.event.triggered = p, r[p](), ue.event.triggered = void 0, a && (r[u] = a)), e.result
        }
      },
      simulate: function(e, t, n) {
        var r = ue.extend(new ue.Event, n, {
          type: e,
          isSimulated: !0
        });
        ue.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
      }
    }), ue.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          ue.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        return n ? ue.event.trigger(e, t, n, !0) : void 0
      }
    }), ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      ue.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), ue.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), ae.focusin = "onfocusin" in n, ae.focusin || ue.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        ue.event.simulate(t, e.target, ue.event.fix(e))
      };
      ue.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            o = De.access(r, t);
          o || r.addEventListener(e, n, !0), De.access(r, t, (o || 0) + 1)
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            o = De.access(r, t) - 1;
          o ? De.access(r, t, o) : (r.removeEventListener(e, n, !0), De.remove(r, t))
        }
      }
    });
    var bt = n.location,
      wt = ue.now(),
      xt = /\?/;
    ue.parseJSON = function(e) {
      return JSON.parse(e + "")
    }, ue.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (r) {
        t = void 0
      }
      return (!t || t.getElementsByTagName("parsererror").length) && ue.error("Invalid XML: " + e), t
    };
    var Tt = /#.*$/,
      Ct = /([?&])_=[^&]*/,
      Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      kt = /^(?:GET|HEAD)$/,
      Nt = /^\/\//,
      At = {},
      Dt = {},
      Lt = "*/".concat("*"),
      jt = Z.createElement("a");
    jt.href = bt.href, ue.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal: St.test(bt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Lt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ue.parseJSON,
          "text xml": ue.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? V(V(e, ue.ajaxSettings), t) : V(ue.ajaxSettings, e)
      },
      ajaxPrefilter: X(At),
      ajaxTransport: X(Dt),
      ajax: function(e, t) {
        function r(e, t, r, a) {
          var u, f, y, b, x, C = t;
          2 !== w && (w = 2, l && n.clearTimeout(l), o = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, r && (b = Y(d, T, r)), b = G(d, b, T, u), u ? (d.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ue.lastModified[i] = x), x = T.getResponseHeader("etag"), x && (ue.etag[i] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, f = b.data, y = b.error, u = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", u ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, d, u ? f : y]), m.fireWith(p, [T, C]), c && (h.trigger("ajaxComplete", [T, d]), --ue.active || ue.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var o, i, s, a, l, u, c, f, d = ue.ajaxSetup({}, t),
          p = d.context || d,
          h = d.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
          g = ue.Deferred(),
          m = ue.Callbacks("once memory"),
          v = d.statusCode || {},
          y = {},
          b = {},
          w = 0,
          x = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === w) {
                if (!a)
                  for (a = {}; t = Et.exec(s);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === w ? s : null
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return w || (e = b[n] = b[n] || e, y[e] = t), this
            },
            overrideMimeType: function(e) {
              return w || (d.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (2 > w)
                  for (t in e) v[t] = [v[t], e[t]];
                else T.always(e[T.status]);
              return this
            },
            abort: function(e) {
              var t = e || x;
              return o && o.abort(t), r(0, t), this
            }
          };
        if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || bt.href) + "").replace(Tt, "").replace(Nt, bt.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ue.trim(d.dataType || "*").toLowerCase().match(Se) || [""], null == d.crossDomain) {
          u = Z.createElement("a");
          try {
            u.href = d.url, u.href = u.href, d.crossDomain = jt.protocol + "//" + jt.host != u.protocol + "//" + u.host
          } catch (C) {
            d.crossDomain = !0
          }
        }
        if (d.data && d.processData && "string" != typeof d.data && (d.data = ue.param(d.data, d.traditional)), U(At, d, t, T), 2 === w) return T;
        c = ue.event && d.global, c && 0 === ue.active++ && ue.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !kt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (xt.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ct.test(i) ? i.replace(Ct, "$1_=" + wt++) : i + (xt.test(i) ? "&" : "?") + "_=" + wt++)), d.ifModified && (ue.lastModified[i] && T.setRequestHeader("If-Modified-Since", ue.lastModified[i]), ue.etag[i] && T.setRequestHeader("If-None-Match", ue.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : d.accepts["*"]);
        for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
        if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === w)) return T.abort();
        x = "abort";
        for (f in {
            success: 1,
            error: 1,
            complete: 1
          }) T[f](d[f]);
        if (o = U(Dt, d, t, T)) {
          if (T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), 2 === w) return T;
          d.async && d.timeout > 0 && (l = n.setTimeout(function() {
            T.abort("timeout")
          }, d.timeout));
          try {
            w = 1, o.send(y, r)
          } catch (C) {
            if (!(2 > w)) throw C;
            r(-1, C)
          }
        } else r(-1, "No Transport");
        return T
      },
      getJSON: function(e, t, n) {
        return ue.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return ue.get(e, void 0, t, "script")
      }
    }), ue.each(["get", "post"], function(e, t) {
      ue[t] = function(e, n, r, o) {
        return ue.isFunction(n) && (o = o || r, r = n, n = void 0), ue.ajax(ue.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: r
        }, ue.isPlainObject(e) && e))
      }
    }), ue._evalUrl = function(e) {
      return ue.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, ue.fn.extend({
      wrapAll: function(e) {
        var t;
        return ue.isFunction(e) ? this.each(function(t) {
          ue(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = ue(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this)
      },
      wrapInner: function(e) {
        return ue.isFunction(e) ? this.each(function(t) {
          ue(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = ue(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = ue.isFunction(e);
        return this.each(function(n) {
          ue(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
        }).end()
      }
    }), ue.expr.filters.hidden = function(e) {
      return !ue.expr.filters.visible(e)
    }, ue.expr.filters.visible = function(e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Rt = /%20/g,
      Ot = /\[\]$/,
      Ht = /\r?\n/g,
      Pt = /^(?:submit|button|image|reset|file)$/i,
      Ft = /^(?:input|select|textarea|keygen)/i;
    ue.param = function(e, t) {
      var n, r = [],
        o = function(e, t) {
          t = ue.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
        o(this.name, this.value)
      });
      else
        for (n in e) J(n, e[n], t, o);
      return r.join("&").replace(Rt, "+")
    }, ue.fn.extend({
      serialize: function() {
        return ue.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = ue.prop(this, "elements");
          return e ? ue.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !ue(this).is(":disabled") && Ft.test(this.nodeName) && !Pt.test(e) && (this.checked || !qe.test(e))
        }).map(function(e, t) {
          var n = ue(this).val();
          return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(Ht, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(Ht, "\r\n")
          }
        }).get()
      }
    }), ue.ajaxSettings.xhr = function() {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var qt = {
        0: 200,
        1223: 204
      },
      Mt = ue.ajaxSettings.xhr();
    ae.cors = !!Mt && "withCredentials" in Mt, ae.ajax = Mt = !!Mt, ue.ajaxTransport(function(e) {
      var t, r;
      return ae.cors || Mt && !e.crossDomain ? {
        send: function(o, i) {
          var s, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) a[s] = e.xhrFields[s];
          e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          for (s in o) a.setRequestHeader(s, o[s]);
          t = function(e) {
            return function() {
              t && (t = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                  binary: a.response
                } : {
                  text: a.responseText
                }, a.getAllResponseHeaders()))
            }
          }, a.onload = t(), r = a.onerror = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
            4 === a.readyState && n.setTimeout(function() {
              t && r()
            })
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (l) {
            if (t) throw l
          }
        },
        abort: function() {
          t && t()
        }
      } : void 0
    }), ue.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return ue.globalEval(e), e
        }
      }
    }), ue.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ue.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(r, o) {
            t = ue("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
            }), Z.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }
    });
    var _t = [],
      It = /(=)\?(?=&|$)|\?\?/;
    ue.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = _t.pop() || ue.expando + "_" + wt++;
        return this[e] = !0, e
      }
    }), ue.ajaxPrefilter("json jsonp", function(e, t, r) {
      var o, i, s, a = e.jsonp !== !1 && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
      return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ue.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(It, "$1" + o) : e.jsonp !== !1 && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
        return s || ue.error(o + " was not called"), s[0]
      }, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
        s = arguments
      }, r.always(function() {
        void 0 === i ? ue(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, _t.push(o)), s && ue.isFunction(i) && i(s[0]), s = i = void 0
      }), "script") : void 0
    }), ae.createHTMLDocument = function() {
      var e = Z.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ue.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || (ae.createHTMLDocument ? Z.implementation.createHTMLDocument("") : Z);
      var r = ye.exec(e),
        o = !n && [];
      return r ? [t.createElement(r[1])] : (r = m([e], t, o), o && o.length && ue(o).remove(), ue.merge([], r.childNodes))
    };
    var zt = ue.fn.load;
    ue.fn.load = function(e, t, n) {
      if ("string" != typeof e && zt) return zt.apply(this, arguments);
      var r, o, i, s = this,
        a = e.indexOf(" ");
      return a > -1 && (r = ue.trim(e.slice(a)), e = e.slice(0, a)), ue.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && ue.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        i = arguments, s.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
        s.each(function() {
          n.apply(s, i || [e.responseText, t, e])
        })
      }), this
    }, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      ue.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), ue.expr.filters.animated = function(e) {
      return ue.grep(ue.timers, function(t) {
        return e === t.elem
      }).length
    }, ue.offset = {
      setOffset: function(e, t, n) {
        var r, o, i, s, a, l, u, c = ue.css(e, "position"),
          f = ue(e),
          d = {};
        "static" === c && (e.style.position = "relative"), a = f.offset(), i = ue.css(e, "top"), l = ue.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1, u ? (r = f.position(), s = r.top, o = r.left) : (s = parseFloat(i) || 0, o = parseFloat(l) || 0), ue.isFunction(t) && (t = t.call(e, n, ue.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
      }
    }, ue.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          ue.offset.setOffset(this, e, t)
        });
        var t, n, r = this[0],
          o = {
            top: 0,
            left: 0
          },
          i = r && r.ownerDocument;
        if (i) return t = i.documentElement, ue.contains(t, r) ? (o = r.getBoundingClientRect(), n = Q(i), {
          top: o.top + n.pageYOffset - t.clientTop,
          left: o.left + n.pageXOffset - t.clientLeft
        }) : o
      },
      position: function() {
        if (this[0]) {
          var e, t, n = this[0],
            r = {
              top: 0,
              left: 0
            };
          return "fixed" === ue.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (r = e.offset()), r.top += ue.css(e[0], "borderTopWidth", !0) - e.scrollTop(), r.left += ue.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
            top: t.top - r.top - ue.css(n, "marginTop", !0),
            left: t.left - r.left - ue.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === ue.css(e, "position");) e = e.offsetParent;
          return e || nt
        })
      }
    }), ue.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      ue.fn[e] = function(r) {
        return Ne(this, function(e, r, o) {
          var i = Q(e);
          return void 0 === o ? i ? i[t] : e[r] : void(i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
        }, e, r, arguments.length)
      }
    }), ue.each(["top", "left"], function(e, t) {
      ue.cssHooks[t] = j(ae.pixelPosition, function(e, n) {
        return n ? (n = L(e, t), Ze.test(n) ? ue(e).position()[t] + "px" : n) : void 0
      })
    }), ue.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      ue.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, r) {
        ue.fn[r] = function(r, o) {
          var i = arguments.length && (n || "boolean" != typeof r),
            s = n || (r === !0 || o === !0 ? "margin" : "border");
          return Ne(this, function(t, n, r) {
            var o;
            return ue.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ue.css(t, n, s) : ue.style(t, n, r, s)
          }, t, i ? r : void 0, i, null)
        }
      })
    }), ue.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      size: function() {
        return this.length
      }
    }), ue.fn.andSelf = ue.fn.addBack, r = [], o = function() {
      return ue
    }.apply(t, r), !(void 0 !== o && (e.exports = o));
    var Wt = n.jQuery,
      Bt = n.$;
    return ue.noConflict = function(e) {
      return n.$ === ue && (n.$ = Bt), e && n.jQuery === ue && (n.jQuery = Wt), ue
    }, i || (n.jQuery = n.$ = ue), ue
  })
}, function(e, t, n) {
  (function(r) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i() {
      r(window).load(function() {
        r("blockquote").dotdotdot({
          after: "a.readmore",
          height: 210,
          watch: "window"
        })
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = n(6);
    o(s);
    t["default"] = i, e.exports = t["default"]
  }).call(t, n(4))
}, function(e, t, n) {
  (function(e) {
    ! function(e, t) {
      function n(e, t, n) {
        var r = e.children(),
          o = !1;
        e.empty();
        for (var s = 0, a = r.length; a > s; s++) {
          var l = r.eq(s);
          if (e.append(l), n && e.append(n), i(e, t)) {
            l.remove(), o = !0;
            break
          }
          n && n.detach()
        }
        return o
      }

      function r(t, n, s, a, l) {
        var u = !1,
          c = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",
          f = "script, .dotdotdot-keep";
        return t.contents().detach().each(function() {
          var d = this,
            p = e(d);
          if ("undefined" == typeof d || 3 == d.nodeType && 0 == e.trim(d.data).length) return !0;
          if (p.is(f)) t.append(p);
          else {
            if (u) return !0;
            t.append(p), l && t[t.is(c) ? "after" : "append"](l), i(s, a) && (u = 3 == d.nodeType ? o(p, n, s, a, l) : r(p, n, s, a, l), u || (p.detach(), u = !0)), u || l && l.detach()
          }
        }), u
      }

      function o(t, n, r, o, a) {
        var c = t[0];
        if (!c) return !1;
        var d = u(c),
          p = -1 !== d.indexOf(" ") ? " " : "　",
          h = "letter" == o.wrap ? "" : p,
          g = d.split(h),
          m = -1,
          v = -1,
          y = 0,
          b = g.length - 1;
        for (o.fallbackToLetter && 0 == y && 0 == b && (h = "", g = d.split(h), b = g.length - 1); b >= y && (0 != y || 0 != b);) {
          var w = Math.floor((y + b) / 2);
          if (w == v) break;
          v = w, l(c, g.slice(0, v + 1).join(h) + o.ellipsis), i(r, o) ? (b = v, o.fallbackToLetter && 0 == y && 0 == b && (h = "", g = g[0].split(h), m = -1, v = -1, y = 0, b = g.length - 1)) : (m = v, y = v)
        }
        if (-1 == m || 1 == g.length && 0 == g[0].length) {
          var x = t.parent();
          t.detach();
          var T = a && a.closest(x).length ? a.length : 0;
          x.contents().length > T ? c = f(x.contents().eq(-1 - T), n) : (c = f(x, n, !0), T || x.detach()), c && (d = s(u(c), o), l(c, d), T && a && e(c).parent().append(a))
        } else d = s(g.slice(0, m + 1).join(h), o), l(c, d);
        return !0
      }

      function i(e, t) {
        return e.innerHeight() > t.maxHeight
      }

      function s(t, n) {
        for (; e.inArray(t.slice(-1), n.lastCharacter.remove) > -1;) t = t.slice(0, -1);
        return e.inArray(t.slice(-1), n.lastCharacter.noEllipsis) < 0 && (t += n.ellipsis), t
      }

      function a(e) {
        return {
          width: e.innerWidth(),
          height: e.innerHeight()
        }
      }

      function l(e, t) {
        e.innerText ? e.innerText = t : e.nodeValue ? e.nodeValue = t : e.textContent && (e.textContent = t)
      }

      function u(e) {
        return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : ""
      }

      function c(e) {
        do e = e.previousSibling; while (e && 1 !== e.nodeType && 3 !== e.nodeType);
        return e
      }

      function f(t, n, r) {
        var o, i = t && t[0];
        if (i) {
          if (!r) {
            if (3 === i.nodeType) return i;
            if (e.trim(t.text())) return f(t.contents().last(), n)
          }
          for (o = c(i); !o;) {
            if (t = t.parent(), t.is(n) || !t.length) return !1;
            o = c(t[0])
          }
          if (o) return f(e(o), n)
        }
        return !1
      }

      function d(t, n) {
        return t ? "string" == typeof t ? (t = e(t, n), t.length ? t : !1) : t.jquery ? t : !1 : !1
      }

      function p(e) {
        for (var t = e.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, o = n.length; o > r; r++) {
          var i = parseInt(e.css(n[r]), 10);
          isNaN(i) && (i = 0), t -= i
        }
        return t
      }
      if (!e.fn.dotdotdot) {
        e.fn.dotdotdot = function(t) {
          if (0 == this.length) return e.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
          if (this.length > 1) return this.each(function() {
            e(this).dotdotdot(t)
          });
          var o = this;
          o.data("dotdotdot") && o.trigger("destroy.dot"), o.data("dotdotdot-style", o.attr("style") || ""), o.css("word-wrap", "break-word"), "nowrap" === o.css("white-space") && o.css("white-space", "normal"), o.bind_events = function() {
            return o.bind("update.dot", function(t, a) {
              t.preventDefault(), t.stopPropagation(), l.maxHeight = "number" == typeof l.height ? l.height : p(o), l.maxHeight += l.tolerance, "undefined" != typeof a && (("string" == typeof a || a instanceof HTMLElement) && (a = e("<div />").append(a).contents()), a instanceof e && (s = a)), g = o.wrapInner('<div class="dotdotdot" />').children(), g.contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                height: "auto",
                width: "auto",
                border: "none",
                padding: 0,
                margin: 0
              });
              var c = !1,
                f = !1;
              return u.afterElement && (c = u.afterElement.clone(!0), c.show(), u.afterElement.detach()), i(g, l) && (f = "children" == l.wrap ? n(g, l, c) : r(g, o, g, l, c)), g.replaceWith(g.contents()), g = null, e.isFunction(l.callback) && l.callback.call(o[0], f, s), u.isTruncated = f, f
            }).bind("isTruncated.dot", function(e, t) {
              return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(o[0], u.isTruncated), u.isTruncated
            }).bind("originalContent.dot", function(e, t) {
              return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(o[0], s), s
            }).bind("destroy.dot", function(e) {
              e.preventDefault(), e.stopPropagation(), o.unwatch().unbind_events().contents().detach().end().append(s).attr("style", o.data("dotdotdot-style") || "").data("dotdotdot", !1)
            }), o
          }, o.unbind_events = function() {
            return o.unbind(".dot"), o
          }, o.watch = function() {
            if (o.unwatch(), "window" == l.watch) {
              var t = e(window),
                n = t.width(),
                r = t.height();
              t.bind("resize.dot" + u.dotId, function() {
                n == t.width() && r == t.height() && l.windowResizeFix || (n = t.width(), r = t.height(), f && clearInterval(f), f = setTimeout(function() {
                  o.trigger("update.dot")
                }, 100))
              })
            } else c = a(o), f = setInterval(function() {
              if (o.is(":visible")) {
                var e = a(o);
                (c.width != e.width || c.height != e.height) && (o.trigger("update.dot"), c = e)
              }
            }, 500);
            return o
          }, o.unwatch = function() {
            return e(window).unbind("resize.dot" + u.dotId), f && clearInterval(f), o
          };
          var s = o.contents(),
            l = e.extend(!0, {}, e.fn.dotdotdot.defaults, t),
            u = {},
            c = {},
            f = null,
            g = null;
          return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = e.fn.dotdotdot.defaultArrays.lastCharacter.remove), l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), u.afterElement = d(l.after, o), u.isTruncated = !1, u.dotId = h++, o.data("dotdotdot", !0).bind_events().trigger("update.dot"), l.watch && o.watch(), o
        }, e.fn.dotdotdot.defaults = {
          ellipsis: "... ",
          wrap: "word",
          fallbackToLetter: !0,
          lastCharacter: {},
          tolerance: 0,
          callback: null,
          after: null,
          height: null,
          watch: !1,
          windowResizeFix: !0
        }, e.fn.dotdotdot.defaultArrays = {
          lastCharacter: {
            remove: [" ", "　", ",", ";", ".", "!", "?"],
            noEllipsis: []
          }
        }, e.fn.dotdotdot.debug = function(e) {};
        var h = 1,
          g = e.fn.html;
        e.fn.html = function(n) {
          return n != t && !e.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
        };
        var m = e.fn.text;
        e.fn.text = function(n) {
          return n != t && !e.isFunction(n) && this.data("dotdotdot") ? (n = e("<div />").text(n).html(), this.trigger("update", [n])) : m.apply(this, arguments)
        }
      }
    }(e)
  }).call(t, n(4))
}, function(e, t, n) {
  (function(t) {
    "use strict";
    var n = t("html, body"),
      r = t(".nav-trigger").outerHeight(),
      o = function() {
        t(".about-link, .resume-link, .contact-link, .js-get-started, .js-brand-name, .hero-arrow").click(function() {
          var e = t.attr(this, "href");
          return n.stop().animate({
            scrollTop: t(e).offset().top - r
          }, 1500), !1
        }), t("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function(e) {
          (e.which > 0 || "mousedown" === e.type || "mousewheel" === e.type || "touchstart" === e.type) && n.stop()
        })
      },
      i = function() {
        o()
      };
    e.exports = i
  }).call(t, n(4))
}, function(e, t, n) {
  (function(t) {
    "use strict";

    function n() {
      var e = 4e3,
        n = setInterval(o, e);
      t(document).on("click", ".about-photo-container", function() {
        o(), clearInterval(n), n = setInterval(o, e)
      })
    }

    function r() {
      t(".about-photo-container > div:gt(0)").hide(), n()
    }
    var o = function() {
      var e = t(".about-photo-container > div:first"),
        n = e.next(),
        r = 800;
      e.stop().fadeOut(r).appendTo(".about-photo-container"), n.stop().fadeIn(r)
    };
    e.exports = r
  }).call(t, n(4))
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function o() {
    (0, s["default"])(document.querySelector("textarea"))
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(10),
    s = r(i);
  t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
  var r, o, i;
  /*!
  		Autosize 3.0.14
  		license: MIT
  		http://www.jacklmoore.com/autosize
  	*/
  ! function(n, s) {
    o = [t, e], r = s, i = "function" == typeof r ? r.apply(t, o) : r, !(void 0 !== i && (e.exports = i))
  }(this, function(e, t) {
    "use strict";

    function n(e) {
      function t() {
        var t = window.getComputedStyle(e, null);
        d = t.overflowY, "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), f = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(f) && (f = 0), o()
      }

      function n(t) {
        var n = e.style.width;
        e.style.width = "0px", e.offsetWidth, e.style.width = n, d = t, c && (e.style.overflowY = t), r()
      }

      function r() {
        var t = window.pageYOffset,
          n = document.body.scrollTop,
          r = e.style.height;
        e.style.height = "auto";
        var o = e.scrollHeight + f;
        return 0 === e.scrollHeight ? void(e.style.height = r) : (e.style.height = o + "px", p = e.clientWidth, document.documentElement.scrollTop = t, void(document.body.scrollTop = n))
      }

      function o() {
        var t = e.style.height;
        r();
        var o = window.getComputedStyle(e, null);
        if (o.height !== e.style.height ? "visible" !== d && n("visible") : "hidden" !== d && n("hidden"), t !== e.style.height) {
          var i = document.createEvent("Event");
          i.initEvent("autosize:resized", !0, !1), e.dispatchEvent(i)
        }
      }
      var s = void 0 === arguments[1] ? {} : arguments[1],
        a = s.setOverflowX,
        l = void 0 === a ? !0 : a,
        u = s.setOverflowY,
        c = void 0 === u ? !0 : u;
      if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
        var f = null,
          d = null,
          p = e.clientWidth,
          h = function() {
            e.clientWidth !== p && o()
          },
          g = function(t) {
            window.removeEventListener("resize", h, !1), e.removeEventListener("input", o, !1), e.removeEventListener("keyup", o, !1), e.removeEventListener("autosize:destroy", g, !1), e.removeEventListener("autosize:update", o, !1), i["delete"](e), Object.keys(t).forEach(function(n) {
              e.style[n] = t[n]
            })
          }.bind(e, {
            height: e.style.height,
            resize: e.style.resize,
            overflowY: e.style.overflowY,
            overflowX: e.style.overflowX,
            wordWrap: e.style.wordWrap
          });
        e.addEventListener("autosize:destroy", g, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", o, !1), window.addEventListener("resize", h, !1), e.addEventListener("input", o, !1), e.addEventListener("autosize:update", o, !1), i.add(e), l && (e.style.overflowX = "hidden", e.style.wordWrap = "break-word"), t()
      }
    }

    function r(e) {
      if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
        var t = document.createEvent("Event");
        t.initEvent("autosize:destroy", !0, !1), e.dispatchEvent(t)
      }
    }

    function o(e) {
      if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
        var t = document.createEvent("Event");
        t.initEvent("autosize:update", !0, !1), e.dispatchEvent(t)
      }
    }
    var i = "function" == typeof Set ? new Set : function() {
        var e = [];
        return {
          has: function(t) {
            return Boolean(e.indexOf(t) > -1)
          },
          add: function(t) {
            e.push(t)
          },
          "delete": function(t) {
            e.splice(e.indexOf(t), 1)
          }
        }
      }(),
      s = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (s = function(e) {
      return e
    }, s.destroy = function(e) {
      return e
    }, s.update = function(e) {
      return e
    }) : (s = function(e, t) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
        return n(e, t)
      }), e
    }, s.destroy = function(e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
    }, s.update = function(e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], o), e
    }), t.exports = s
  })
}, function(e, t, n) {
  (function(r) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i() {
      r(window).width() < 768 && (c.toggleClass("active"), r(".js-mobile-links").stop().fadeToggle(300, "linear"))
    }

    function s() {
      r(".js-navbar-hamburger, .js-mobile-links a").click(i), r(window).on("resize", f)
    }

    function a() {
      s()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = n(12),
      u = o(l),
      c = r(".js-navbar-hamburger"),
      f = (0, u["default"])(function() {
        c.removeClass("active"), r(".js-mobile-links").stop().fadeOut()
      }, 60);
    t["default"] = a, e.exports = t["default"]
  }).call(t, n(4))
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function(e, t, n) {
    var r;
    return function() {
      var o = this,
        i = arguments,
        s = function() {
          r = null, n || e.apply(o, i)
        },
        a = n && !r;
      clearTimeout(r), r = setTimeout(s, t), a && e.apply(o, i)
    }
  }, e.exports = t["default"]
}, function(e, t, n) {
  (function(r) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(14),
      s = o(i),
      a = n(15),
      l = o(a),
      u = n(12),
      c = o(u),
      f = n(16),
      d = o(f),
      p = r(".nav-trigger").outerHeight(),
      h = r(".envelope-bottom"),
      g = r(".envelope-top"),
      m = {},
      v = new s["default"].Controller({
        globalSceneOptions: {
          pushFollowers: !1,
          reverse: !0,
          triggerHook: "onLeave"
        }
      }),
      y = function() {
        new s["default"].Scene({
          offset: -(p + 1),
          triggerElement: "#about"
        }).setClassToggle(".nav-trigger", "nav-trigger-in").addTo(v), new s["default"].Scene({
          offset: -(p + 1),
          duration: l["default"].getAboutSectionHeight,
          triggerElement: "#about"
        }).setClassToggle(".about-link", "highlight").addTo(v), new s["default"].Scene({
          offset: -(p + 1),
          duration: l["default"].getResumeSectionHeight,
          triggerElement: "#resume"
        }).setClassToggle(".resume-link", "highlight").addTo(v), new s["default"].Scene({
          offset: -(p + 1),
          duration: l["default"].getContactSectionHeight,
          triggerElement: "#contact"
        }).setClassToggle(".contact-link", "highlight").addTo(v)
      },
      b = function() {
        (0, d["default"])("#browser-developer-element", function() {
          m.developer = new s["default"].Scene({
            duration: l["default"].getDeveloperDuration,
            offset: -p - 50,
            triggerElement: "#browser-developer-trigger"
          }).setPin("#browser-developer-element").addTo(v)
        }), (0, d["default"])("#browser-designer-element", function() {
          m.designer = new s["default"].Scene({
            duration: l["default"].getDesignerDuration,
            offset: l["default"].getDesignerOffset(),
            triggerElement: "#browser-designer-trigger"
          }).setPin("#browser-designer-element").addTo(v)
        }), (0, d["default"])("#resume-element", function() {
          m.resume = new s["default"].Scene({
            duration: l["default"].getResumeDuration,
            offset: l["default"].getResumeOffset(),
            triggerElement: ".resume-trigger"
          }).setPin("#resume-element").addTo(v)
        })
      },
      x = function() {
        h.css("bottom", g.height() - h.height() / 2.6)
      },
      T = (0, c["default"])(function() {
        m.resume.offset(l["default"].getResumeOffset()), m.designer.offset(l["default"].getDesignerOffset()), x()
      }, 60),
      C = function() {
        r(window).on("resize", T), r(window).on("load", x)
      },
      E = function() {
        C(), y(), b()
      };
    t["default"] = E, e.exports = t["default"]
  }).call(t, n(4))
}, function(e, t, n) {
  var r, o;
  /*!
   * ScrollMagic v2.0.5 (2015-04-29)
   * The javascript library for magical scroll interactions.
   * (c) 2015 Jan Paepke (@janpaepke)
   * Project Website: http://scrollmagic.io
   *
   * @version 2.0.5
   * @license Dual licensed under MIT license and GPL.
   * @author Jan Paepke - e-mail@janpaepke.de
   *
   * @file ScrollMagic main library.
   */
  ! function(i, s) {
    r = s, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))
  }(this, function() {
    "use strict";
    var e = function() {
      o.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
    };
    e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
      var i, s, a = "ScrollMagic.Controller",
        l = "FORWARD",
        u = "REVERSE",
        c = "PAUSED",
        f = n.defaults,
        d = this,
        p = o.extend({}, f, r),
        h = [],
        g = !1,
        m = 0,
        v = c,
        y = !0,
        b = 0,
        w = !0,
        x = function() {
          for (var t in p) f.hasOwnProperty(t) || (L(2, 'WARNING: Unknown option "' + t + '"'), delete p[t]);
          if (p.container = o.get.elements(p.container)[0], !p.container) throw L(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
          y = p.container === window || p.container === document.body || !document.body.contains(p.container), y && (p.container = window), b = E(), p.container.addEventListener("resize", A), p.container.addEventListener("scroll", A), p.refreshInterval = parseInt(p.refreshInterval) || f.refreshInterval, T(), L(3, "added new " + a + " controller (v" + e.version + ")")
        },
        T = function() {
          p.refreshInterval > 0 && (s = window.setTimeout(D, p.refreshInterval))
        },
        C = function() {
          return p.vertical ? o.get.scrollTop(p.container) : o.get.scrollLeft(p.container)
        },
        E = function() {
          return p.vertical ? o.get.height(p.container) : o.get.width(p.container)
        },
        S = this._setScrollPos = function(e) {
          p.vertical ? y ? window.scrollTo(o.get.scrollLeft(), e) : p.container.scrollTop = e : y ? window.scrollTo(e, o.get.scrollTop()) : p.container.scrollLeft = e
        },
        k = function() {
          if (w && g) {
            var e = o.type.Array(g) ? g : h.slice(0);
            g = !1;
            var t = m;
            m = d.scrollPos();
            var n = m - t;
            0 !== n && (v = n > 0 ? l : u), v === u && e.reverse(), e.forEach(function(t, n) {
              L(3, "updating Scene " + (n + 1) + "/" + e.length + " (" + h.length + " total)"), t.update(!0)
            }), 0 === e.length && p.loglevel >= 3 && L(3, "updating 0 Scenes (nothing added to controller)")
          }
        },
        N = function() {
          i = o.rAF(k)
        },
        A = function(e) {
          L(3, "event fired causing an update:", e.type), "resize" == e.type && (b = E(), v = c), g !== !0 && (g = !0, N())
        },
        D = function() {
          if (!y && b != E()) {
            var e;
            try {
              e = new Event("resize", {
                bubbles: !1,
                cancelable: !1
              })
            } catch (t) {
              e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
            }
            p.container.dispatchEvent(e)
          }
          h.forEach(function(e, t) {
            e.refresh()
          }), T()
        },
        L = this._log = function(e, t) {
          p.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), o.log.apply(window, arguments))
        };
      this._options = p;
      var j = function(e) {
        if (e.length <= 1) return e;
        var t = e.slice(0);
        return t.sort(function(e, t) {
          return e.scrollOffset() > t.scrollOffset() ? 1 : -1
        }), t
      };
      return this.addScene = function(t) {
        if (o.type.Array(t)) t.forEach(function(e, t) {
          d.addScene(e)
        });
        else if (t instanceof e.Scene) {
          if (t.controller() !== d) t.addTo(d);
          else if (h.indexOf(t) < 0) {
            h.push(t), h = j(h), t.on("shift.controller_sort", function() {
              h = j(h)
            });
            for (var n in p.globalSceneOptions) t[n] && t[n].call(t, p.globalSceneOptions[n]);
            L(3, "adding Scene (now " + h.length + " total)")
          }
        } else L(1, "ERROR: invalid argument supplied for '.addScene()'");
        return d
      }, this.removeScene = function(e) {
        if (o.type.Array(e)) e.forEach(function(e, t) {
          d.removeScene(e)
        });
        else {
          var t = h.indexOf(e);
          t > -1 && (e.off("shift.controller_sort"), h.splice(t, 1), L(3, "removing Scene (now " + h.length + " left)"), e.remove())
        }
        return d
      }, this.updateScene = function(t, n) {
        return o.type.Array(t) ? t.forEach(function(e, t) {
          d.updateScene(e, n)
        }) : n ? t.update(!0) : g !== !0 && t instanceof e.Scene && (g = g || [], -1 == g.indexOf(t) && g.push(t), g = j(g), N()), d
      }, this.update = function(e) {
        return A({
          type: "resize"
        }), e && k(), d
      }, this.scrollTo = function(n, r) {
        if (o.type.Number(n)) S.call(p.container, n, r);
        else if (n instanceof e.Scene) n.controller() === d ? d.scrollTo(n.scrollOffset(), r) : L(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", n);
        else if (o.type.Function(n)) S = n;
        else {
          var i = o.get.elements(n)[0];
          if (i) {
            for (; i.parentNode.hasAttribute(t);) i = i.parentNode;
            var s = p.vertical ? "top" : "left",
              a = o.get.offset(p.container),
              l = o.get.offset(i);
            y || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r)
          } else L(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", n)
        }
        return d
      }, this.scrollPos = function(e) {
        return arguments.length ? (o.type.Function(e) ? C = e : L(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), d) : C.call(d)
      }, this.info = function(e) {
        var t = {
          size: b,
          vertical: p.vertical,
          scrollPos: m,
          scrollDirection: v,
          container: p.container,
          isDocument: y
        };
        return arguments.length ? void 0 !== t[e] ? t[e] : void L(1, 'ERROR: option "' + e + '" is not available') : t
      }, this.loglevel = function(e) {
        return arguments.length ? (p.loglevel != e && (p.loglevel = e), d) : p.loglevel
      }, this.enabled = function(e) {
        return arguments.length ? (w != e && (w = !!e, d.updateScene(h, !0)), d) : w
      }, this.destroy = function(e) {
        window.clearTimeout(s);
        for (var t = h.length; t--;) h[t].destroy(e);
        return p.container.removeEventListener("resize", A), p.container.removeEventListener("scroll", A), o.cAF(i), L(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
      }, x(), d
    };
    var n = {
      defaults: {
        container: window,
        vertical: !0,
        globalSceneOptions: {},
        loglevel: 2,
        refreshInterval: 100
      }
    };
    e.Controller.addOption = function(e, t) {
      n.defaults[e] = t
    }, e.Controller.extend = function(t) {
      var n = this;
      e.Controller = function() {
        return n.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this
      }, o.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function(n) {
      var i, s, a = "ScrollMagic.Scene",
        l = "BEFORE",
        u = "DURING",
        c = "AFTER",
        f = r.defaults,
        d = this,
        p = o.extend({}, f, n),
        h = l,
        g = 0,
        m = {
          start: 0,
          end: 0
        },
        v = 0,
        y = !0,
        b = function() {
          for (var e in p) f.hasOwnProperty(e) || (x(2, 'WARNING: Unknown option "' + e + '"'), delete p[e]);
          for (var t in f) D(t);
          N()
        },
        w = {};
      this.on = function(e, t) {
        return o.type.Function(t) ? (e = e.trim().split(" "), e.forEach(function(e) {
          var n = e.split("."),
            r = n[0],
            o = n[1];
          "*" != r && (w[r] || (w[r] = []), w[r].push({
            namespace: o || "",
            callback: t
          }))
        })) : x(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"), d
      }, this.off = function(e, t) {
        return e ? (e = e.trim().split(" "), e.forEach(function(e, n) {
          var r = e.split("."),
            o = r[0],
            i = r[1] || "",
            s = "*" === o ? Object.keys(w) : [o];
          s.forEach(function(e) {
            for (var n = w[e] || [], r = n.length; r--;) {
              var o = n[r];
              !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
            }
            n.length || delete w[e]
          })
        }), d) : (x(1, "ERROR: Invalid event name supplied."), d)
      }, this.trigger = function(t, n) {
        if (t) {
          var r = t.trim().split("."),
            o = r[0],
            i = r[1],
            s = w[o];
          x(3, "event fired:", o, n ? "->" : "", n || ""), s && s.forEach(function(t, r) {
            i && i !== t.namespace || t.callback.call(d, new e.Event(o, t.namespace, d, n))
          })
        } else x(1, "ERROR: Invalid event name supplied.");
        return d
      }, d.on("change.internal", function(e) {
        "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && d.update())
      }).on("shift.internal", function(e) {
        T(), d.update()
      });
      var x = this._log = function(e, t) {
        p.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), o.log.apply(window, arguments))
      };
      this.addTo = function(t) {
        return t instanceof e.Controller ? s != t && (s && s.removeScene(d), s = t, N(), C(!0), E(!0), T(), s.info("container").addEventListener("resize", S), t.addScene(d), d.trigger("add", {
          controller: s
        }), x(3, "added " + a + " to controller"), d.update()) : x(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), d
      }, this.enabled = function(e) {
        return arguments.length ? (y != e && (y = !!e, d.update(!0)), d) : y
      }, this.remove = function() {
        if (s) {
          s.info("container").removeEventListener("resize", S);
          var e = s;
          s = void 0, e.removeScene(d), d.trigger("remove"), x(3, "removed " + a + " from controller")
        }
        return d
      }, this.destroy = function(e) {
        return d.trigger("destroy", {
          reset: e
        }), d.remove(), d.off("*.*"), x(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
      }, this.update = function(e) {
        if (s)
          if (e)
            if (s.enabled() && y) {
              var t, n = s.info("scrollPos");
              t = p.duration > 0 ? (n - m.start) / (m.end - m.start) : n >= m.start ? 1 : 0, d.trigger("update", {
                startPos: m.start,
                endPos: m.end,
                scrollPos: n
              }), d.progress(t)
            } else L && h === u && R(!0);
        else s.updateScene(d, !1);
        return d
      }, this.refresh = function() {
        return C(), E(), d
      }, this.progress = function(e) {
        if (arguments.length) {
          var t = !1,
            n = h,
            r = s ? s.info("scrollDirection") : "PAUSED",
            o = p.reverse || e >= g;
          if (0 === p.duration ? (t = g != e, g = 1 > e && o ? 0 : 1, h = 0 === g ? l : u) : 0 > e && h !== l && o ? (g = 0, h = l, t = !0) : e >= 0 && 1 > e && o ? (g = e, h = u, t = !0) : e >= 1 && h !== c ? (g = 1, h = c, t = !0) : h !== u || o || R(), t) {
            var i = {
                progress: g,
                state: h,
                scrollDirection: r
              },
              a = h != n,
              f = function(e) {
                d.trigger(e, i)
              };
            a && n !== u && (f("enter"), f(n === l ? "start" : "end")), f("progress"), a && h !== u && (f(h === l ? "start" : "end"), f("leave"))
          }
          return d
        }
        return g
      };
      var T = function() {
          m = {
            start: v + p.offset
          }, s && p.triggerElement && (m.start -= s.info("size") * p.triggerHook), m.end = m.start + p.duration
        },
        C = function(e) {
          if (i) {
            var t = "duration";
            A(t, i.call(d)) && !e && (d.trigger("change", {
              what: t,
              newval: p[t]
            }), d.trigger("shift", {
              reason: t
            }))
          }
        },
        E = function(e) {
          var n = 0,
            r = p.triggerElement;
          if (s && r) {
            for (var i = s.info(), a = o.get.offset(i.container), l = i.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
            var u = o.get.offset(r);
            i.isDocument || (a[l] -= s.scrollPos()), n = u[l] - a[l]
          }
          var c = n != v;
          v = n, c && !e && d.trigger("shift", {
            reason: "triggerElementPosition"
          })
        },
        S = function(e) {
          p.triggerHook > 0 && d.trigger("shift", {
            reason: "containerResize"
          })
        },
        k = o.extend(r.validate, {
          duration: function(e) {
            if (o.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
              var t = parseFloat(e) / 100;
              e = function() {
                return s ? s.info("size") * t : 0
              }
            }
            if (o.type.Function(e)) {
              i = e;
              try {
                e = parseFloat(i())
              } catch (n) {
                e = -1
              }
            }
            if (e = parseFloat(e), !o.type.Number(e) || 0 > e) throw i ? (i = void 0, ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
            return e
          }
        }),
        N = function(e) {
          e = arguments.length ? [e] : Object.keys(k), e.forEach(function(e, t) {
            var n;
            if (k[e]) try {
              n = k[e](p[e])
            } catch (r) {
              n = f[e];
              var i = o.type.String(r) ? [r] : r;
              o.type.Array(i) ? (i[0] = "ERROR: " + i[0], i.unshift(1), x.apply(this, i)) : x(1, "ERROR: Problem executing validation callback for option '" + e + "':", r.message)
            } finally {
              p[e] = n
            }
          })
        },
        A = function(e, t) {
          var n = !1,
            r = p[e];
          return p[e] != t && (p[e] = t, N(e), n = r != p[e]), n
        },
        D = function(e) {
          d[e] || (d[e] = function(t) {
            return arguments.length ? ("duration" === e && (i = void 0), A(e, t) && (d.trigger("change", {
              what: e,
              newval: p[e]
            }), r.shifts.indexOf(e) > -1 && d.trigger("shift", {
              reason: e
            })), d) : p[e]
          })
        };
      this.controller = function() {
        return s
      }, this.state = function() {
        return h
      }, this.scrollOffset = function() {
        return m.start
      }, this.triggerPosition = function() {
        var e = p.offset;
        return s && (e += p.triggerElement ? v : s.info("size") * d.triggerHook()), e
      };
      var L, j;
      d.on("shift.internal", function(e) {
        var t = "duration" === e.reason;
        (h === c && t || h === u && 0 === p.duration) && R(), t && O()
      }).on("progress.internal", function(e) {
        R()
      }).on("add.internal", function(e) {
        O()
      }).on("destroy.internal", function(e) {
        d.removePin(e.reset)
      });
      var R = function(e) {
          if (L && s) {
            var t = s.info(),
              n = j.spacer.firstChild;
            if (e || h !== u) {
              var r = {
                  position: j.inFlow ? "relative" : "absolute",
                  top: 0,
                  left: 0
                },
                i = o.css(n, "position") != r.position;
              j.pushFollowers ? p.duration > 0 && (h === c && 0 === parseFloat(o.css(j.spacer, "padding-top")) ? i = !0 : h === l && 0 === parseFloat(o.css(j.spacer, "padding-bottom")) && (i = !0)) : r[t.vertical ? "top" : "left"] = p.duration * g, o.css(n, r), i && O()
            } else {
              "fixed" != o.css(n, "position") && (o.css(n, {
                position: "fixed"
              }), O());
              var a = o.get.offset(j.spacer, !0),
                f = p.reverse || 0 === p.duration ? t.scrollPos - m.start : Math.round(g * p.duration * 10) / 10;
              a[t.vertical ? "top" : "left"] += f, o.css(j.spacer.firstChild, {
                top: a.top,
                left: a.left
              })
            }
          }
        },
        O = function() {
          if (L && s && j.inFlow) {
            var e = h === u,
              t = s.info("vertical"),
              n = j.spacer.firstChild,
              r = o.isMarginCollapseType(o.css(j.spacer, "display")),
              i = {};
            j.relSize.width || j.relSize.autoFullWidth ? e ? o.css(L, {
              width: o.get.width(j.spacer)
            }) : o.css(L, {
              width: "100%"
            }) : (i["min-width"] = o.get.width(t ? L : n, !0, !0), i.width = e ? i["min-width"] : "auto"), j.relSize.height ? e ? o.css(L, {
              height: o.get.height(j.spacer) - (j.pushFollowers ? p.duration : 0)
            }) : o.css(L, {
              height: "100%"
            }) : (i["min-height"] = o.get.height(t ? n : L, !0, !r), i.height = e ? i["min-height"] : "auto"), j.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = p.duration * g, i["padding" + (t ? "Bottom" : "Right")] = p.duration * (1 - g)), o.css(j.spacer, i)
          }
        },
        H = function() {
          s && L && h === u && !s.info("isDocument") && R()
        },
        P = function() {
          s && L && h === u && ((j.relSize.width || j.relSize.autoFullWidth) && o.get.width(window) != o.get.width(j.spacer.parentNode) || j.relSize.height && o.get.height(window) != o.get.height(j.spacer.parentNode)) && O()
        },
        F = function(e) {
          s && L && h === u && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        };
      this.setPin = function(e, n) {
        var r = {
          pushFollowers: !0,
          spacerClass: "scrollmagic-pin-spacer"
        };
        if (n = o.extend({}, r, n), e = o.get.elements(e)[0], !e) return x(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), d;
        if ("fixed" === o.css(e, "position")) return x(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), d;
        if (L) {
          if (L === e) return d;
          d.removePin()
        }
        L = e;
        var i = L.parentNode.style.display,
          s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
        L.parentNode.style.display = "none";
        var a = "absolute" != o.css(L, "position"),
          l = o.css(L, s.concat(["display"])),
          u = o.css(L, ["width", "height"]);
        L.parentNode.style.display = i, !a && n.pushFollowers && (x(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), n.pushFollowers = !1), window.setTimeout(function() {
          L && 0 === p.duration && n.pushFollowers && x(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
        }, 0);
        var c = L.parentNode.insertBefore(document.createElement("div"), L),
          f = o.extend(l, {
            position: a ? "relative" : "absolute",
            boxSizing: "content-box",
            mozBoxSizing: "content-box",
            webkitBoxSizing: "content-box"
          });
        if (a || o.extend(f, o.css(L, ["width", "height"])), o.css(c, f), c.setAttribute(t, ""), o.addClass(c, n.spacerClass), j = {
            spacer: c,
            relSize: {
              width: "%" === u.width.slice(-1),
              height: "%" === u.height.slice(-1),
              autoFullWidth: "auto" === u.width && a && o.isMarginCollapseType(l.display)
            },
            pushFollowers: n.pushFollowers,
            inFlow: a
          }, !L.___origStyle) {
          L.___origStyle = {};
          var h = L.style,
            g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
          g.forEach(function(e) {
            L.___origStyle[e] = h[e] || ""
          })
        }
        return j.relSize.width && o.css(c, {
          width: u.width
        }), j.relSize.height && o.css(c, {
          height: u.height
        }), c.appendChild(L), o.css(L, {
          position: a ? "relative" : "absolute",
          margin: "auto",
          top: "auto",
          left: "auto",
          bottom: "auto",
          right: "auto"
        }), (j.relSize.width || j.relSize.autoFullWidth) && o.css(L, {
          boxSizing: "border-box",
          mozBoxSizing: "border-box",
          webkitBoxSizing: "border-box"
        }), window.addEventListener("scroll", H), window.addEventListener("resize", H), window.addEventListener("resize", P), L.addEventListener("mousewheel", F), L.addEventListener("DOMMouseScroll", F), x(3, "added pin"), R(), d
      }, this.removePin = function(e) {
        if (L) {
          if (h === u && R(!0), e || !s) {
            var n = j.spacer.firstChild;
            if (n.hasAttribute(t)) {
              var r = j.spacer.style,
                i = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
              margins = {}, i.forEach(function(e) {
                margins[e] = r[e] || ""
              }), o.css(n, margins)
            }
            j.spacer.parentNode.insertBefore(n, j.spacer), j.spacer.parentNode.removeChild(j.spacer), L.parentNode.hasAttribute(t) || (o.css(L, L.___origStyle), delete L.___origStyle)
          }
          window.removeEventListener("scroll", H), window.removeEventListener("resize", H), window.removeEventListener("resize", P), L.removeEventListener("mousewheel", F), L.removeEventListener("DOMMouseScroll", F), L = void 0, x(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
        }
        return d
      };
      var q, M = [];
      return d.on("destroy.internal", function(e) {
        d.removeClassToggle(e.reset)
      }), this.setClassToggle = function(e, t) {
        var n = o.get.elements(e);
        return 0 !== n.length && o.type.String(t) ? (M.length > 0 && d.removeClassToggle(), q = t, M = n, d.on("enter.internal_class leave.internal_class", function(e) {
          var t = "enter" === e.type ? o.addClass : o.removeClass;
          M.forEach(function(e, n) {
            t(e, q)
          })
        }), d) : (x(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."), d)
      }, this.removeClassToggle = function(e) {
        return e && M.forEach(function(e, t) {
          o.removeClass(e, q)
        }), d.off("start.internal_class end.internal_class"), q = void 0, M = [], d
      }, b(), d
    };
    var r = {
      defaults: {
        duration: 0,
        offset: 0,
        triggerElement: void 0,
        triggerHook: .5,
        reverse: !0,
        loglevel: 2
      },
      validate: {
        offset: function(e) {
          if (e = parseFloat(e), !o.type.Number(e)) throw ['Invalid value for option "offset":', e];
          return e
        },
        triggerElement: function(e) {
          if (e = e || void 0) {
            var t = o.get.elements(e)[0];
            if (!t) throw ['Element defined in option "triggerElement" was not found:', e];
            e = t
          }
          return e
        },
        triggerHook: function(e) {
          var t = {
            onCenter: .5,
            onEnter: 1,
            onLeave: 0
          };
          if (o.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
          else {
            if (!(e in t)) throw ['Invalid value for option "triggerHook": ', e];
            e = t[e]
          }
          return e
        },
        reverse: function(e) {
          return !!e
        },
        loglevel: function(e) {
          if (e = parseInt(e), !o.type.Number(e) || 0 > e || e > 3) throw ['Invalid value for option "loglevel":', e];
          return e
        }
      },
      shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(t, n, o, i) {
      t in r.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (r.defaults[t] = n, r.validate[t] = o, i && r.shifts.push(t))
    }, e.Scene.extend = function(t) {
      var n = this;
      e.Scene = function() {
        return n.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this
      }, o.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function(e, t, n, r) {
      r = r || {};
      for (var o in r) this[o] = r[o];
      return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var o = e._util = function(e) {
      var t, n = {},
        r = function(e) {
          return parseFloat(e) || 0
        },
        o = function(t) {
          return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
        },
        i = function(t, n, i, s) {
          if (n = n === document ? e : n, n === e) s = !1;
          else if (!h.DomElement(n)) return 0;
          t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
          var a = (i ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
          if (i && s) {
            var l = o(n);
            a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
          }
          return a
        },
        s = function(e) {
          return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
            return e[1].toUpperCase()
          })
        };
      n.extend = function(e) {
        for (e = e || {}, t = 1; t < arguments.length; t++)
          if (arguments[t])
            for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
        return e
      }, n.isMarginCollapseType = function(e) {
        return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
      };
      var a = 0,
        l = ["ms", "moz", "webkit", "o"],
        u = e.requestAnimationFrame,
        c = e.cancelAnimationFrame;
      for (t = 0; !u && t < l.length; ++t) u = e[l[t] + "RequestAnimationFrame"], c = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
      u || (u = function(t) {
        var n = (new Date).getTime(),
          r = Math.max(0, 16 - (n - a)),
          o = e.setTimeout(function() {
            t(n + r)
          }, r);
        return a = n + r, o
      }), c || (c = function(t) {
        e.clearTimeout(t)
      }), n.rAF = u.bind(e), n.cAF = c.bind(e);
      var f = ["error", "warn", "log"],
        d = e.console || {};
      for (d.log = d.log || function() {}, t = 0; t < f.length; t++) {
        var p = f[t];
        d[p] || (d[p] = d.log)
      }
      n.log = function(e) {
        (e > f.length || 0 >= e) && (e = f.length);
        var t = new Date,
          n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
          r = f[e - 1],
          o = Array.prototype.splice.call(arguments, 1),
          i = Function.prototype.bind.call(d[r], d);
        o.unshift(n), i.apply(d, o)
      };
      var h = n.type = function(e) {
        return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
      };
      h.String = function(e) {
        return "string" === h(e)
      }, h.Function = function(e) {
        return "function" === h(e)
      }, h.Array = function(e) {
        return Array.isArray(e)
      }, h.Number = function(e) {
        return !h.Array(e) && e - parseFloat(e) + 1 >= 0
      }, h.DomElement = function(e) {
        return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
      };
      var g = n.get = {};
      return g.elements = function(t) {
        var n = [];
        if (h.String(t)) try {
          t = document.querySelectorAll(t)
        } catch (r) {
          return n
        }
        if ("nodelist" === h(t) || h.Array(t))
          for (var o = 0, i = n.length = t.length; i > o; o++) {
            var s = t[o];
            n[o] = h.DomElement(s) ? s : g.elements(s)
          } else(h.DomElement(t) || t === document || t === e) && (n = [t]);
        return n
      }, g.scrollTop = function(t) {
        return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
      }, g.scrollLeft = function(t) {
        return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
      }, g.width = function(e, t, n) {
        return i("width", e, t, n)
      }, g.height = function(e, t, n) {
        return i("height", e, t, n)
      }, g.offset = function(e, t) {
        var n = {
          top: 0,
          left: 0
        };
        if (e && e.getBoundingClientRect) {
          var r = e.getBoundingClientRect();
          n.top = r.top, n.left = r.left, t || (n.top += g.scrollTop(), n.left += g.scrollLeft())
        }
        return n
      }, n.addClass = function(e, t) {
        t && (e.classList ? e.classList.add(t) : e.className += " " + t)
      }, n.removeClass = function(e, t) {
        t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
      }, n.css = function(e, t) {
        if (h.String(t)) return o(e)[s(t)];
        if (h.Array(t)) {
          var n = {},
            r = o(e);
          return t.forEach(function(e, t) {
            n[e] = r[s(e)]
          }), n
        }
        for (var i in t) {
          var a = t[i];
          a == parseFloat(a) && (a += "px"), e.style[s(i)] = a
        }
      }, n
    }(window || {});
    return e.Scene.prototype.addIndicators = function() {
      return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
    }, e.Scene.prototype.removeIndicators = function() {
      return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
    }, e.Scene.prototype.setTween = function() {
      return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
    }, e.Scene.prototype.removeTween = function() {
      return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
    }, e.Scene.prototype.setVelocity = function() {
      return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
    }, e.Scene.prototype.removeVelocity = function() {
      return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
    }, e
  })
}, function(e, t, n) {
  (function(t) {
    "use strict";
    var n = t(".nav-trigger").outerHeight(),
      r = t("#browser-designer-element"),
      o = t("#resume-element"),
      i = t(".resume-trigger");
    e.exports = {
      getDeveloperDuration: function() {
        return t("#browser-developer-trigger").outerHeight() + t("#browser-developer-element").outerHeight()
      },
      getDesignerDuration: function() {
        return t("#browser-designer-trigger").outerHeight() + t("#browser-designer-element").outerHeight()
      },
      getRecommendationDuration: function() {
        return t(".recommendation-trigger").outerHeight() - t(".recommendation").outerHeight()
      },
      getResumeDuration: function() {
        return i.outerHeight() + o.outerHeight() / 60
      },
      getDesignerOffset: function() {
        return -n - 50 - r.height()
      },
      getResumeOffset: function() {
        return -n - 50 - o.outerHeight()
      },
      getAboutSectionHeight: function() {
        return t("#about").outerHeight() + t("#developer").outerHeight() + t("#designer").outerHeight() - n
      },
      getResumeSectionHeight: function() {
        return t("#resume").outerHeight() - n
      },
      getContactSectionHeight: function() {
        return t("#contact").outerHeight(!0)
      }
    }
  }).call(t, n(4))
}, function(e, t, n) {
  (function(n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = function(e, t) {
      n(e).one("load", t).each(function() {
        (this.complete || n(this).height() > 0) && n(this).load()
      })
    }, e.exports = t["default"]
  }).call(t, n(4))
}]);
