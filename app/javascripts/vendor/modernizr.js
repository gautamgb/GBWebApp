/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-flexbox-multiplebgs-setclasses !*/
! function(e, n, t) {
  function r(e, n) {
    return typeof e === n
  }

  function s() {
    var e, n, t, s, o, i, a;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), g.push((s ? "" : "no-") + a.join("-"))
      }
  }

  function o(e) {
    var n = x.className,
      t = Modernizr._config.classPrefix || "";
    if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2")
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? x.className.baseVal = n : x.className = n)
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
  }

  function a(e, n) {
    return !!~("" + e).indexOf(n)
  }

  function l(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
      return n + t.toUpperCase()
    }).replace(/^-/, "")
  }

  function f(e, n) {
    return function() {
      return e.apply(n, arguments)
    }
  }

  function u(e, n, t) {
    var s;
    for (var o in e)
      if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? f(s, t || n) : s);
    return !1
  }

  function d(e) {
    return e.replace(/([A-Z])/g, function(e, n) {
      return "-" + n.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function p() {
    var e = n.body;
    return e || (e = i(_ ? "svg" : "body"), e.fake = !0), e
  }

  function c(e, t, r, s) {
    var o, a, l, f, u = "modernizr",
      d = i("div"),
      c = p();
    if (parseInt(r, 10))
      for (; r--;) l = i("div"), l.id = s ? s[r] : u + (r + 1), d.appendChild(l);
    return o = i("style"), o.type = "text/css", o.id = "s" + u, (c.fake ? c : d).appendChild(o), c.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), d.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(c)), a = t(d, e), c.fake ? (c.parentNode.removeChild(c), x.style.overflow = f, x.offsetHeight) : d.parentNode.removeChild(d), !!a
  }

  function m(n, r) {
    var s = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; s--;)
        if (e.CSS.supports(d(n[s]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; s--;) o.push("(" + d(n[s]) + ":" + r + ")");
      return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
        return "absolute" == getComputedStyle(e, null).position
      })
    }
    return t
  }

  function h(e, n, s, o) {
    function f() {
      d && (delete N.style, delete N.modElem)
    }
    if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
      var u = m(e, s);
      if (!r(u, "undefined")) return u
    }
    for (var d, p, c, h, v, y = ["modernizr", "tspan"]; !N.style;) d = !0, N.modElem = i(y.shift()), N.style = N.modElem.style;
    for (c = e.length, p = 0; c > p; p++)
      if (h = e[p], v = N.style[h], a(h, "-") && (h = l(h)), N.style[h] !== t) {
        if (o || r(s, "undefined")) return f(), "pfx" == n ? h : !0;
        try {
          N.style[h] = s
        } catch (g) {}
        if (N.style[h] != v) return f(), "pfx" == n ? h : !0
      }
    return f(), !1
  }

  function v(e, n, t, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + S.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined") ? h(a, n, s, o) : (a = (e + " " + T.join(i + " ") + i).split(" "), u(a, n, t))
  }

  function y(e, n, r) {
    return v(e, t, t, n, r)
  }
  var g = [],
    C = [],
    w = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        C.push({
          name: e,
          fn: n,
          options: t
        })
      },
      addAsyncTest: function(e) {
        C.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = w, Modernizr = new Modernizr;
  var x = n.documentElement,
    _ = "svg" === x.nodeName.toLowerCase();
  Modernizr.addTest("multiplebgs", function() {
    var e = i("a").style;
    return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
  });
  var b = "Moz O ms Webkit",
    S = w._config.usePrefixes ? b.split(" ") : [];
  w._cssomPrefixes = S;
  var T = w._config.usePrefixes ? b.toLowerCase().split(" ") : [];
  w._domPrefixes = T;
  var E = {
    elem: i("modernizr")
  };
  Modernizr._q.push(function() {
    delete E.elem
  });
  var N = {
    style: E.elem.style
  };
  Modernizr._q.unshift(function() {
    delete N.style
  }), w.testAllProps = v, w.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), s(), o(g), delete w.addTest, delete w.addAsyncTest;
  for (var P = 0; P < Modernizr._q.length; P++) Modernizr._q[P]();
  e.Modernizr = Modernizr
}(window, document);
