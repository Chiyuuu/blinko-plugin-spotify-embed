var Jt = Object.defineProperty;
var Zt = (C, u, N) => u in C ? Jt(C, u, { enumerable: !0, configurable: !0, writable: !0, value: N }) : C[u] = N;
var k = (C, u, N) => (Zt(C, typeof u != "symbol" ? u + "" : u, N), N);
(function() {
  var C, u, N, E, ve, ye, ge, te, R, O, xe, ne, ie, oe, q = {}, j = [], ct = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, W = Array.isArray;
  function $(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function re(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function se(t, e, n) {
    var i, o, s, r = {};
    for (s in e)
      s == "key" ? i = e[s] : s == "ref" ? o = e[s] : r[s] = e[s];
    if (arguments.length > 2 && (r.children = arguments.length > 3 ? C.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
      for (s in t.defaultProps)
        r[s] === void 0 && (r[s] = t.defaultProps[s]);
    return V(t, r, i, o, null);
  }
  function V(t, e, n, i, o) {
    var s = { type: t, props: e, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++N, __i: -1, __u: 0 };
    return o == null && u.vnode != null && u.vnode(s), s;
  }
  function z(t) {
    return t.children;
  }
  function A(t, e) {
    this.props = t, this.context = e;
  }
  function I(t, e) {
    if (e == null)
      return t.__ ? I(t.__, t.__i + 1) : null;
    for (var n; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null)
        return n.__e;
    return typeof t.type == "function" ? I(t) : null;
  }
  function _t(t) {
    if (t.__P && t.__d) {
      var e = t.__v, n = e.__e, i = [], o = [], s = $({}, e);
      s.__v = e.__v + 1, u.vnode && u.vnode(s), ae(t.__P, s, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, i, n ?? I(e), !!(32 & e.__u), o), s.__v = e.__v, s.__.__k[s.__i] = s, Ne(i, s, o), e.__e = e.__ = null, s.__e != n && we(s);
    }
  }
  function we(t) {
    if ((t = t.__) != null && t.__c != null)
      return t.__e = t.__c.base = null, t.__k.some(function(e) {
        if (e != null && e.__e != null)
          return t.__e = t.__c.base = e.__e;
      }), we(t);
  }
  function ke(t) {
    (!t.__d && (t.__d = !0) && E.push(t) && !K.__r++ || ve != u.debounceRendering) && ((ve = u.debounceRendering) || ye)(K);
  }
  function K() {
    try {
      for (var t, e = 1; E.length; )
        E.length > e && E.sort(ge), t = E.shift(), e = E.length, _t(t);
    } finally {
      E.length = K.__r = 0;
    }
  }
  function Ce(t, e, n, i, o, s, r, c, _, l, d) {
    var f, a, p, m, w, y, g = i && i.__k || j, h = e.length;
    for (_ = dt(n, e, g, _, h), f = 0; f < h; f++)
      (p = n.__k[f]) != null && (a = p.__i != -1 && g[p.__i] || q, p.__i = f, y = ae(t, p, a, o, s, r, c, _, l, d), m = p.__e, p.ref && a.ref != p.ref && (a.ref && le(a.ref, null, p), d.push(p.ref, p.__c || m, p)), w == null && m != null && (w = m), 4 & p.__u ? (_ = Se(p, _, t), a.__e && (a.__e = null)) : typeof p.type == "function" && y !== void 0 ? _ = y : m && (_ = m.nextSibling), p.__u &= -7);
    return n.__e = w, _;
  }
  function dt(t, e, n, i, o) {
    var s, r, c, _, l, d = n.length, f = d, a = 0;
    for (t.__k = new Array(o), s = 0; s < o; s++)
      (r = e[s]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = t.__k[s] = V(null, r, null, null, null) : W(r) ? r = t.__k[s] = V(z, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? r = t.__k[s] = V(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : t.__k[s] = r, _ = s + a, r.__ = t, r.__b = t.__b + 1, c = null, (l = r.__i = ut(r, n, _, f)) != -1 && (f--, (c = n[l]) && (c.__u |= 2)), c == null || c.__v == null ? (l == -1 && (o > d ? a-- : o < d && a++), typeof r.type != "function" && (r.__u |= 4)) : l != _ && (l == _ - 1 ? a-- : l == _ + 1 ? a++ : (l > _ ? a-- : a++, r.__u |= 4))) : t.__k[s] = null;
    if (f)
      for (s = 0; s < d; s++)
        (c = n[s]) != null && !(2 & c.__u) && (c.__e == i && (i = I(c)), Ie(c, c));
    return i;
  }
  function Se(t, e, n) {
    var i, o;
    if (typeof t.type == "function") {
      for (i = t.__k, o = 0; i && o < i.length; o++)
        i[o] && (i[o].__ = t, e = Se(i[o], e, n));
      return e;
    }
    t.__e != e && (e && t.type && !e.parentNode && (e = I(t)), e = n.insertBefore(t.__e, e || null));
    do
      e = e && e.nextSibling;
    while (e != null && e.nodeType == 8);
    return e;
  }
  function Y(t, e) {
    return e = e || [], t == null || typeof t == "boolean" || (W(t) ? t.some(function(n) {
      Y(n, e);
    }) : e.push(t)), e;
  }
  function ut(t, e, n, i) {
    var o, s, r, c = t.key, _ = t.type, l = e[n], d = l != null && (2 & l.__u) == 0;
    if (l === null && c == null || d && c == l.key && _ == l.type)
      return n;
    if (i > (d ? 1 : 0)) {
      for (o = n - 1, s = n + 1; o >= 0 || s < e.length; )
        if ((l = e[r = o >= 0 ? o-- : s++]) != null && !(2 & l.__u) && c == l.key && _ == l.type)
          return r;
    }
    return -1;
  }
  function He(t, e, n) {
    e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || ct.test(e) ? n : n + "px";
  }
  function G(t, e, n, i, o) {
    var s, r;
    e:
      if (e == "style")
        if (typeof n == "string")
          t.style.cssText = n;
        else {
          if (typeof i == "string" && (t.style.cssText = i = ""), i)
            for (e in i)
              n && e in n || He(t.style, e, "");
          if (n)
            for (e in n)
              i && n[e] == i[e] || He(t.style, e, n[e]);
        }
      else if (e[0] == "o" && e[1] == "n")
        s = e != (e = e.replace(xe, "$1")), r = e.toLowerCase(), e = r in t || e == "onFocusOut" || e == "onFocusIn" ? r.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? i ? n[O] = i[O] : (n[O] = ne, t.addEventListener(e, s ? oe : ie, s)) : t.removeEventListener(e, s ? oe : ie, s);
      else {
        if (o == "http://www.w3.org/2000/svg")
          e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t)
          try {
            t[e] = n ?? "";
            break e;
          } catch {
          }
        typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
      }
  }
  function $e(t) {
    return function(e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e[R] == null)
          e[R] = ne++;
        else if (e[R] < n[O])
          return;
        return n(u.event ? u.event(e) : e);
      }
    };
  }
  function ae(t, e, n, i, o, s, r, c, _, l) {
    var d, f, a, p, m, w, y, g, h, S, U, T, B, lt, ee, be, H = e.type;
    if (e.constructor !== void 0)
      return null;
    128 & n.__u && (_ = !!(32 & n.__u), s = [c = e.__e = n.__e]), (d = u.__b) && d(e);
    e:
      if (typeof H == "function") {
        f = r.length;
        try {
          if (h = e.props, S = H.prototype && H.prototype.render, U = (d = H.contextType) && i[d.__c], T = d ? U ? U.props.value : d.__ : i, n.__c ? g = (a = e.__c = n.__c).__ = a.__E : (S ? e.__c = a = new H(h, T) : (e.__c = a = new A(h, T), a.constructor = H, a.render = ft), U && U.sub(a), a.state || (a.state = {}), a.__n = i, p = a.__d = !0, a.__h = [], a._sb = []), S && a.__s == null && (a.__s = a.state), S && H.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = $({}, a.__s)), $(a.__s, H.getDerivedStateFromProps(h, a.__s))), m = a.props, w = a.state, a.__v = e, p)
            S && H.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), S && a.componentDidMount != null && a.__h.push(a.componentDidMount);
          else {
            if (S && H.getDerivedStateFromProps == null && h !== m && a.componentWillReceiveProps != null && a.componentWillReceiveProps(h, T), e.__v == n.__v || !a.__e && a.shouldComponentUpdate != null && a.shouldComponentUpdate(h, a.__s, T) === !1) {
              e.__v != n.__v && (a.props = h, a.state = a.__s, a.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(F) {
                F && (F.__ = e);
              }), j.push.apply(a.__h, a._sb), a._sb = [], a.__h.length && r.push(a), c = I(n);
              break e;
            }
            a.componentWillUpdate != null && a.componentWillUpdate(h, a.__s, T), S && a.componentDidUpdate != null && a.__h.push(function() {
              a.componentDidUpdate(m, w, y);
            });
          }
          if (a.context = T, a.props = h, a.__P = t, a.__e = !1, B = u.__r, lt = 0, S)
            a.state = a.__s, a.__d = !1, B && B(e), d = a.render(a.props, a.state, a.context), j.push.apply(a.__h, a._sb), a._sb = [];
          else
            do
              a.__d = !1, B && B(e), d = a.render(a.props, a.state, a.context), a.state = a.__s;
            while (a.__d && ++lt < 25);
          a.state = a.__s, a.getChildContext != null && (i = $($({}, i), a.getChildContext())), S && !p && a.getSnapshotBeforeUpdate != null && (y = a.getSnapshotBeforeUpdate(m, w)), ee = d != null && d.type === z && d.key == null ? Ee(d.props.children) : d, c = Ce(t, W(ee) ? ee : [ee], e, n, i, o, s, r, c, _, l), a.base = e.__e, e.__u &= -161, a.__h.length && r.push(a), g && (a.__E = a.__ = null);
        } catch (F) {
          if (r.length = f, e.__v = null, _ || s != null) {
            if (F.then) {
              for (e.__u |= _ ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; )
                c = c.nextSibling;
              s != null && (s[s.indexOf(c)] = null), e.__e = c;
            } else if (s != null)
              for (be = s.length; be--; )
                re(s[be]);
          } else
            e.__e = n.__e;
          e.__k == null && (e.__k = n.__k || []), F.then || Ae(e), u.__e(F, e, n);
        }
      } else
        s == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = pt(n.__e, e, n, i, o, s, r, _, l);
    return (d = u.diffed) && d(e), 128 & e.__u ? void 0 : c;
  }
  function Ae(t) {
    t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Ae));
  }
  function Ne(t, e, n) {
    for (var i = 0; i < n.length; i++)
      le(n[i], n[++i], n[++i]);
    u.__c && u.__c(e, t), t.some(function(o) {
      try {
        t = o.__h, o.__h = [], t.some(function(s) {
          s.call(o);
        });
      } catch (s) {
        u.__e(s, o.__v);
      }
    });
  }
  function Ee(t) {
    return typeof t != "object" || t == null || t.__b > 0 ? t : W(t) ? t.map(Ee) : t.constructor !== void 0 ? null : $({}, t);
  }
  function pt(t, e, n, i, o, s, r, c, _) {
    var l, d, f, a, p, m, w, y = n.props || q, g = e.props, h = e.type;
    if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), s != null) {
      for (l = 0; l < s.length; l++)
        if ((p = s[l]) && "setAttribute" in p == !!h && (h ? p.localName == h : p.nodeType == 3)) {
          t = p, s[l] = null;
          break;
        }
    }
    if (t == null) {
      if (h == null)
        return document.createTextNode(g);
      t = document.createElementNS(o, h, g.is && g), c && (u.__m && u.__m(e, s), c = !1), s = null;
    }
    if (h == null)
      y === g || c && t.data == g || (t.data = g);
    else {
      if (s = h == "textarea" && g.defaultValue != null ? null : s && C.call(t.childNodes), !c && s != null)
        for (y = {}, l = 0; l < t.attributes.length; l++)
          y[(p = t.attributes[l]).name] = p.value;
      for (l in y)
        p = y[l], l == "dangerouslySetInnerHTML" ? f = p : l == "children" || l in g || l == "value" && "defaultValue" in g || l == "checked" && "defaultChecked" in g || G(t, l, null, p, o);
      for (l in g)
        p = g[l], l == "children" ? a = p : l == "dangerouslySetInnerHTML" ? d = p : l == "value" ? m = p : l == "checked" ? w = p : c && typeof p != "function" || y[l] === p || G(t, l, p, y[l], o);
      if (d)
        c || f && (d.__html == f.__html || d.__html == t.innerHTML) || (t.innerHTML = d.__html), e.__k = [];
      else if (f && (t.innerHTML = ""), Ce(e.type == "template" ? t.content : t, W(a) ? a : [a], e, n, i, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, s, r, s ? s[0] : n.__k && I(n, 0), c, _), s != null)
        for (l = s.length; l--; )
          re(s[l]);
      c && h != "textarea" || (l = "value", h == "progress" && m == null ? t.removeAttribute("value") : m != null && (m !== t[l] || h == "progress" && !m || h == "option" && m != y[l]) && G(t, l, m, y[l], o), l = "checked", w != null && w != t[l] && G(t, l, w, y[l], o));
    }
    return t;
  }
  function le(t, e, n) {
    try {
      if (typeof t == "function") {
        var i = typeof t.__u == "function";
        i && t.__u(), i && e == null || (t.__u = t(e));
      } else
        t.current = e;
    } catch (o) {
      u.__e(o, n);
    }
  }
  function Ie(t, e, n) {
    var i, o;
    if (u.unmount && u.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || le(i, null, e)), (i = t.__c) != null) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (s) {
          u.__e(s, e);
        }
      i.base = i.__P = i.__n = null;
    }
    if (i = t.__k)
      for (o = 0; o < i.length; o++)
        i[o] && Ie(i[o], e, n || typeof t.type != "function");
    n || re(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function ft(t, e, n) {
    return this.constructor(t, n);
  }
  function ht(t, e, n) {
    var i, o, s, r;
    e == document && (e = document.documentElement), u.__ && u.__(t, e), o = (i = typeof n == "function") ? null : n && n.__k || e.__k, s = [], r = [], ae(e, t = (!i && n || e).__k = se(z, null, [t]), o || q, q, e.namespaceURI, !i && n ? [n] : o ? null : e.firstChild ? C.call(e.childNodes) : null, s, !i && n ? n : o ? o.__e : e.firstChild, i, r), Ne(s, t, r), t.props.children = null;
  }
  C = j.slice, u = { __e: function(t, e, n, i) {
    for (var o, s, r; e = e.__; )
      if ((o = e.__c) && !o.__)
        try {
          if ((s = o.constructor) && s.getDerivedStateFromError != null && (o.setState(s.getDerivedStateFromError(t)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, i || {}), r = o.__d), r)
            return o.__E = o;
        } catch (c) {
          t = c;
        }
    throw t;
  } }, N = 0, A.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = $({}, this.state), typeof t == "function" && (t = t($({}, n), this.props)), t && $(n, t), t != null && this.__v && (e && this._sb.push(e), ke(this));
  }, A.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), ke(this));
  }, A.prototype.render = z, E = [], ye = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ge = function(t, e) {
    return t.__v.__b - e.__v.__b;
  }, K.__r = 0, te = Math.random().toString(8), R = "__d" + te, O = "__a" + te, xe = /(PointerCapture)$|Capture$/i, ne = 0, ie = $e(!1), oe = $e(!0);
  var mt = 0;
  function b(t, e, n, i, o, s) {
    e || (e = {});
    var r, c, _ = e;
    if ("ref" in _)
      for (c in _ = {}, e)
        c == "ref" ? r = e[c] : _[c] = e[c];
    var l = { type: t, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --mt, __i: -1, __u: 0, __source: o, __self: s };
    if (typeof t == "function" && (r = t.defaultProps))
      for (c in r)
        _[c] === void 0 && (_[c] = r[c]);
    return u.vnode && u.vnode(l), l;
  }
  var ce, v, _e, Pe, de = 0, Te = [], x = u, ze = x.__b, Le = x.__r, Fe = x.diffed, Oe = x.__c, We = x.unmount, Me = x.__;
  function bt(t, e) {
    x.__h && x.__h(v, t, de || e), de = 0;
    var n = v.__H || (v.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function De(t) {
    return de = 1, vt(Be, t);
  }
  function vt(t, e, n) {
    var i = bt(ce++, 2);
    if (i.t = t, !i.__c && (i.__ = [n ? n(e) : Be(void 0, e), function(c) {
      var _ = i.__N ? i.__N[0] : i.__[0], l = i.t(_, c);
      _ !== l && (i.__N = [l, i.__[1]], i.__c.setState({}));
    }], i.__c = v, !v.__f)) {
      var o = function(c, _, l) {
        if (!i.__c.__H)
          return !0;
        var d = !1, f = i.__c.props !== c;
        if (i.__c.__H.__.some(function(p) {
          if (p.__N) {
            d = !0;
            var m = p.__[0];
            p.__ = p.__N, p.__N = void 0, m !== p.__[0] && (f = !0);
          }
        }), s) {
          var a = s.call(this, c, _, l);
          return d ? a || f : a;
        }
        return !d || f;
      };
      v.__f = !0;
      var s = v.shouldComponentUpdate, r = v.componentWillUpdate;
      v.componentWillUpdate = function(c, _, l) {
        if (this.__e) {
          var d = s;
          s = void 0, o(c, _, l), s = d;
        }
        r && r.call(this, c, _, l);
      }, v.shouldComponentUpdate = o;
    }
    return i.__N || i.__;
  }
  function yt() {
    for (var t; t = Te.shift(); ) {
      var e = t.__H;
      if (t.__P && e)
        try {
          e.__h.some(J), e.__h.some(ue), e.__h = [];
        } catch (n) {
          e.__h = [], x.__e(n, t.__v);
        }
    }
  }
  x.__b = function(t) {
    v = null, ze && ze(t);
  }, x.__ = function(t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Me && Me(t, e);
  }, x.__r = function(t) {
    Le && Le(t), ce = 0;
    var e = (v = t.__c).__H;
    e && (_e === v ? (e.__h = [], v.__h = [], e.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (e.__h.some(J), e.__h.some(ue), e.__h = [], ce = 0)), _e = v;
  }, x.diffed = function(t) {
    Fe && Fe(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (Te.push(e) !== 1 && Pe === x.requestAnimationFrame || ((Pe = x.requestAnimationFrame) || gt)(yt)), e.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), _e = v = null;
  }, x.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.some(J), n.__h = n.__h.filter(function(i) {
          return !i.__ || ue(i);
        });
      } catch (i) {
        e.some(function(o) {
          o.__h && (o.__h = []);
        }), e = [], x.__e(i, n.__v);
      }
    }), Oe && Oe(t, e);
  }, x.unmount = function(t) {
    We && We(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.some(function(i) {
      try {
        J(i);
      } catch (o) {
        e = o;
      }
    }), n.__H = void 0, e && x.__e(e, n.__v));
  };
  var Ue = typeof requestAnimationFrame == "function";
  function gt(t) {
    var e, n = function() {
      clearTimeout(i), Ue && cancelAnimationFrame(e), setTimeout(t);
    }, i = setTimeout(n, 35);
    Ue && (e = requestAnimationFrame(n));
  }
  function J(t) {
    var e = v, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), v = e;
  }
  function ue(t) {
    var e = v;
    t.__c = t.__(), v = e;
  }
  function Be(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function xt(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function Re(t, e) {
    for (var n in t)
      if (n !== "__source" && !(n in e))
        return !0;
    for (var i in e)
      if (i !== "__source" && t[i] !== e[i])
        return !0;
    return !1;
  }
  function qe(t, e) {
    this.props = t, this.context = e;
  }
  (qe.prototype = new A()).isPureReactComponent = !0, qe.prototype.shouldComponentUpdate = function(t, e) {
    return Re(this.props, t) || Re(this.state, e);
  };
  var je = u.__b;
  u.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), je && je(t);
  };
  var wt = u.__e;
  u.__e = function(t, e, n, i) {
    if (t.then) {
      for (var o, s = e; s = s.__; )
        if ((o = s.__c) && o.__c)
          return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), o.__c(t, e);
    }
    wt(t, e, n, i);
  };
  var Ve = u.unmount;
  function Ke(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(i) {
      typeof i.__c == "function" && i.__c();
    }), t.__c.__H = null), (t = xt({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(i) {
      return Ke(i, e, n);
    })), t;
  }
  function Ye(t, e, n) {
    return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(i) {
      return Ye(i, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
  }
  function pe() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ge(t) {
    var e = t.__ && t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function Z() {
    this.i = null, this.l = null;
  }
  u.unmount = function(t) {
    var e = t.__c;
    e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Ve && Ve(t);
  }, (pe.prototype = new A()).__c = function(t, e) {
    var n = e.__c, i = this;
    i.o == null && (i.o = []), i.o.push(n);
    var o = Ge(i.__v), s = !1, r = function() {
      s || i.__z || (s = !0, n.__R = null, o ? o(_) : _());
    };
    n.__R = r;
    var c = n.__P;
    n.__P = null;
    var _ = function() {
      if (!--i.__u) {
        if (i.state.__a) {
          var l = i.state.__a;
          i.__v.__k[0] = Ye(l, l.__c.__P, l.__c.__O);
        }
        var d;
        for (i.setState({ __a: i.__b = null }); d = i.o.pop(); )
          d.__P = c, d.forceUpdate();
      }
    };
    i.__u++ || 32 & e.__u || i.setState({ __a: i.__b = i.__v.__k[0] }), t.then(r, r);
  }, pe.prototype.componentWillUnmount = function() {
    this.o = [];
  }, pe.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), i = this.__v.__k[0].__c;
        this.__v.__k[0] = Ke(this.__b, n, i.__O = i.__P);
      }
      this.__b = null;
    }
    var o = e.__a && se(z, null, t.fallback);
    return o && (o.__u &= -33), [se(z, null, e.__a ? null : t.children), o];
  };
  var Je = function(t, e, n) {
    if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
      for (n = t.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        t.i = n = n[2];
      }
  };
  (Z.prototype = new A()).__a = function(t) {
    var e = this, n = Ge(e.__v), i = e.l.get(t);
    return i[0]++, function(o) {
      var s = function() {
        e.props.revealOrder ? (i.push(o), Je(e, t, i)) : o();
      };
      n ? n(s) : s();
    };
  }, Z.prototype.render = function(t) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var e = Y(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; )
      this.l.set(e[n], this.i = [1, 0, this.i]);
    return t.children;
  }, Z.prototype.componentDidUpdate = Z.prototype.componentDidMount = function() {
    var t = this;
    this.l.forEach(function(e, n) {
      Je(t, n, e);
    });
  };
  var kt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ct = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, St = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ht = /[A-Z0-9]/g, $t = typeof document < "u", At = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function Nt(t, e, n) {
    return e.__k == null && (e.textContent = ""), ht(t, e), typeof n == "function" && n(), t ? t.__c : null;
  }
  A.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(A.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(e) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
    } });
  });
  var Ze = u.event;
  u.event = function(t) {
    return Ze && (t = Ze(t)), t.persist = function() {
    }, t.isPropagationStopped = function() {
      return this.cancelBubble;
    }, t.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, t.nativeEvent = t;
  };
  var Et = { configurable: !0, get: function() {
    return this.class;
  } }, Qe = u.vnode;
  u.vnode = function(t) {
    typeof t.type == "string" && function(e) {
      var n = e.props, i = e.type, o = {}, s = i.indexOf("-") == -1;
      for (var r in n) {
        var c = n[r];
        if (!(r === "value" && "defaultValue" in n && c == null || $t && r === "children" && i === "noscript" || r === "class" || r === "className")) {
          var _ = r.toLowerCase();
          r === "defaultValue" && "value" in n && n.value == null ? r = "value" : r === "download" && c === !0 ? c = "" : _ === "translate" && c === "no" ? c = !1 : _[0] === "o" && _[1] === "n" ? _ === "ondoubleclick" ? r = "ondblclick" : _ !== "onchange" || i !== "input" && i !== "textarea" || At(n.type) ? _ === "onfocus" ? r = "onfocusin" : _ === "onblur" ? r = "onfocusout" : St.test(r) && (r = _) : _ = r = "oninput" : s && Ct.test(r) ? r = r.replace(Ht, "-$&").toLowerCase() : c === null && (c = void 0), _ === "oninput" && o[r = _] && (r = "oninputCapture"), o[r] = c;
        }
      }
      i == "select" && (o.multiple && Array.isArray(o.value) && (o.value = Y(n.children).forEach(function(l) {
        l.props.selected = o.value.indexOf(l.props.value) != -1;
      })), o.defaultValue != null && (o.value = Y(n.children).forEach(function(l) {
        l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
      }))), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Et)) : n.className && (o.class = o.className = n.className), e.props = o;
    }(t), t.$$typeof = kt, Qe && Qe(t);
  };
  var Xe = u.__r;
  u.__r = function(t) {
    Xe && Xe(t), t.__c;
  };
  var et = u.diffed;
  u.diffed = function(t) {
    et && et(t);
    var e = t.props, n = t.__e;
    n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value);
  };
  const It = {
    name: "blinko-plugin-spotify-embed",
    author: "Chiyuuu",
    url: "https://github.com/Chiyuuu/blinko-plugin-spotify-embed",
    version: "1.0.3",
    minAppVersion: "0.0.0",
    displayName: {
      default: "Spotify Embed Card",
      zh: "Spotify 音乐卡片"
    },
    description: {
      default: "Turn Spotify track / album / playlist / artist / episode links in notes into official embed cards (cover art, title, artist, player).",
      zh: "把笔记里的 Spotify 单曲、专辑、歌单、艺人、播客链接自动渲染成官方 Embed 卡片：专辑图、歌名、艺人、可直接播放。"
    },
    readme: {
      default: "README_en.md",
      zh: "README.md"
    }
  }, Pt = {
    title: "Spotify Embed Card",
    desc: "Paste an open.spotify.com track / album / playlist / artist / episode link into a note. One link per line works best; changes apply immediately.",
    showHeader: "Show header bar",
    showHeaderHint: "Spotify mark, link type and an open button.",
    lazy: "Lazy load player",
    lazyHint: "Mount the official embed only when the card scrolls near the viewport.",
    hideNative: "Hide native link preview",
    hideNativeHint: "Replace Blinko's own preview row so the same link is not shown twice.",
    maxWidth: "Max card width",
    maxWidthHint: "In px. 0 means follow the note width.",
    save: "Save",
    reset: "Reset",
    saved: "Spotify card settings saved",
    saveFailed: "Save failed, check the console",
    fixIdleCpu: "Fix idle animation CPU burn",
    fixIdleCpuHint: "Upstream #1222: the hidden loader keeps triggering layout every frame. Pausing it cuts CPU; visible loaders are untouched."
  }, Tt = {
    title: "Spotify 音乐卡片",
    desc: "在笔记里粘贴 open.spotify.com 的单曲 / 专辑 / 歌单 / 艺人 / 播客链接，单独一行效果最佳；保存后立即生效。",
    showHeader: "显示顶部信息条",
    showHeaderHint: "展示 Spotify 标识、链接类型与「打开」按钮。",
    lazy: "懒加载播放器",
    lazyHint: "滚动到卡片附近才载入官方 Embed，笔记很多时更省性能。",
    hideNative: "隐藏原生链接预览",
    hideNativeHint: "用卡片替换 Blinko 自带的链接预览行，避免同一链接出现两次。",
    maxWidth: "卡片最大宽度",
    maxWidthHint: "单位 px，填 0 表示跟随笔记内容宽度。",
    save: "保存",
    reset: "恢复默认",
    saved: "Spotify 卡片设置已保存",
    saveFailed: "保存失败，请查看控制台",
    fixIdleCpu: "修复空载动画耗 CPU",
    fixIdleCpuHint: "上游 #1222：隐藏的加载动画仍在每帧触发 layout。开启后暂停它降低 CPU，正在显示的加载动画不受影响。"
  }, L = {
    showHeader: !0,
    lazy: !0,
    hideNative: !0,
    maxWidth: 0,
    fixIdleCpu: !0
  }, fe = "bs-spotify-embed:settings";
  function Q(t) {
    return t !== !1 && t !== "false";
  }
  function M(t) {
    const e = t ?? {}, n = Number(e.maxWidth);
    return {
      showHeader: Q(e.showHeader),
      lazy: Q(e.lazy),
      hideNative: Q(e.hideNative),
      maxWidth: Number.isFinite(n) && n > 0 ? Math.min(Math.max(n, 240), 1200) : 0,
      fixIdleCpu: Q(e.fixIdleCpu)
    };
  }
  function tt() {
    var t, e;
    return (e = (t = window.Blinko) == null ? void 0 : t.api) == null ? void 0 : e.config;
  }
  async function zt(t) {
    let e = { ...L };
    try {
      const n = JSON.parse(localStorage.getItem(fe) ?? "null");
      n && (e = M({ ...L, ...n }));
    } catch {
    }
    try {
      const n = tt();
      if (n != null && n.getPluginConfig) {
        const i = await n.getPluginConfig.query({ pluginName: t });
        if (i && typeof i == "object" && Object.keys(i).length > 0) {
          e = M({ ...L, ...i });
          try {
            localStorage.setItem(fe, JSON.stringify(e));
          } catch {
          }
        }
      }
    } catch (n) {
      console.warn("[spotify-card] 读取插件配置失败，使用默认值", n);
    }
    return e;
  }
  async function Lt(t, e) {
    const n = tt(), i = Object.keys(L);
    n != null && n.setPluginConfig && await Promise.all(
      i.map((o) => n.setPluginConfig.mutate({ pluginName: t, key: o, value: e[o] }))
    );
    try {
      localStorage.setItem(fe, JSON.stringify(e));
    } catch {
    }
  }
  function D({ label: t, hint: e, children: n }) {
    return /* @__PURE__ */ b("div", { class: "bs-row", children: [
      /* @__PURE__ */ b("div", { children: [
        /* @__PURE__ */ b("div", { class: "bs-row-label", children: t }),
        /* @__PURE__ */ b("div", { class: "bs-row-hint", children: e })
      ] }),
      n
    ] });
  }
  function Ft({ settings: t, onSave: e }) {
    const [n, i] = De(t), [o, s] = De(!1), r = (l) => {
      var d, f, a;
      return ((a = (f = (d = window.Blinko) == null ? void 0 : d.i18n) == null ? void 0 : f.t) == null ? void 0 : a.call(f, l)) ?? l;
    }, c = (l) => i((d) => ({ ...d, ...l })), _ = async () => {
      var l, d, f, a, p, m, w, y;
      s(!0);
      try {
        await e(M(n)), (f = (d = (l = window.Blinko) == null ? void 0 : l.toast) == null ? void 0 : d.success) == null || f.call(d, r("saved")), (p = (a = window.Blinko) == null ? void 0 : a.closeDialog) == null || p.call(a);
      } catch (g) {
        console.error("[spotify-card] 保存配置失败", g), (y = (w = (m = window.Blinko) == null ? void 0 : m.toast) == null ? void 0 : w.error) == null || y.call(w, r("saveFailed"));
      } finally {
        s(!1);
      }
    };
    return /* @__PURE__ */ b("div", { class: "bs-settings", children: [
      /* @__PURE__ */ b("div", { class: "bs-set-title", children: r("title") }),
      /* @__PURE__ */ b("div", { class: "bs-set-desc", children: r("desc") }),
      /* @__PURE__ */ b(D, { label: r("showHeader"), hint: r("showHeaderHint"), children: /* @__PURE__ */ b(
        "input",
        {
          type: "checkbox",
          checked: n.showHeader,
          onChange: (l) => c({ showHeader: l.currentTarget.checked })
        }
      ) }),
      /* @__PURE__ */ b(D, { label: r("lazy"), hint: r("lazyHint"), children: /* @__PURE__ */ b(
        "input",
        {
          type: "checkbox",
          checked: n.lazy,
          onChange: (l) => c({ lazy: l.currentTarget.checked })
        }
      ) }),
      /* @__PURE__ */ b(D, { label: r("hideNative"), hint: r("hideNativeHint"), children: /* @__PURE__ */ b(
        "input",
        {
          type: "checkbox",
          checked: n.hideNative,
          onChange: (l) => c({ hideNative: l.currentTarget.checked })
        }
      ) }),
      /* @__PURE__ */ b(D, { label: r("maxWidth"), hint: r("maxWidthHint"), children: /* @__PURE__ */ b(
        "input",
        {
          type: "number",
          min: 0,
          max: 1200,
          step: 20,
          value: String(n.maxWidth),
          onInput: (l) => c({ maxWidth: Number(l.currentTarget.value) || 0 })
        }
      ) }),
      /* @__PURE__ */ b(D, { label: r("fixIdleCpu"), hint: r("fixIdleCpuHint"), children: /* @__PURE__ */ b(
        "input",
        {
          type: "checkbox",
          checked: n.fixIdleCpu,
          onChange: (l) => c({ fixIdleCpu: l.currentTarget.checked })
        }
      ) }),
      /* @__PURE__ */ b("div", { class: "bs-actions", children: [
        /* @__PURE__ */ b("button", { type: "button", onClick: () => i(M(L)), children: r("reset") }),
        /* @__PURE__ */ b("button", { type: "button", class: "bs-primary", disabled: o, onClick: _, children: r("save") })
      ] })
    ] });
  }
  const Ot = ["open.spotify.com", "play.spotify.com"], Wt = /^\/(?:intl-[a-z-]+\/)?(?:embed\/)?(track|album|playlist|artist|episode|show)\/([A-Za-z0-9]{10,64})\/?$/i, Mt = {
    track: "单曲",
    album: "专辑",
    playlist: "歌单",
    artist: "艺人",
    episode: "播客单集",
    show: "播客节目"
  }, Dt = {
    track: 152,
    episode: 232,
    album: 352,
    playlist: 352,
    artist: 352,
    show: 352
  };
  function Ut(t) {
    if (!t || typeof t != "string")
      return null;
    let e;
    try {
      e = new URL(t, window.location.href);
    } catch {
      return null;
    }
    if (e.protocol !== "http:" && e.protocol !== "https:")
      return null;
    const n = e.hostname.toLowerCase();
    if (!Ot.includes(n))
      return null;
    const i = Wt.exec(e.pathname);
    if (!i)
      return null;
    const o = i[1].toLowerCase(), s = i[2];
    return { kind: o, id: s, href: `https://open.spotify.com/${o}/${s}` };
  }
  function nt(t) {
    return Mt[t] ?? "链接";
  }
  function it(t) {
    return Dt[t] ?? 152;
  }
  const Bt = `
.bs-card{
  --bs-bg:#ffffff;
  --bs-border:rgba(15,23,42,.09);
  --bs-muted:#6b7280;
  --bs-chip:rgba(15,23,42,.045);
  --bs-max:100%;
  position:relative;display:block;width:100%;max-width:var(--bs-max);
  margin:10px 0 12px;border:1px solid var(--bs-border);border-radius:14px;
  background:var(--bs-bg);overflow:hidden;box-shadow:0 1px 2px rgba(15,23,42,.05);
  font-family:inherit;line-height:1.35;text-align:left;-webkit-tap-highlight-color:transparent;
}
html.dark .bs-card,[data-theme="dark"] .bs-card{
  --bs-bg:#17171a;--bs-border:rgba(255,255,255,.09);
  --bs-muted:#a1a1aa;--bs-chip:rgba(255,255,255,.06);box-shadow:none;
}
.bs-card .bs-head{display:flex;align-items:center;gap:6px;padding:7px 10px;
  border-bottom:1px solid var(--bs-border);background:var(--bs-chip);
  font-size:12px;color:var(--bs-muted);}
.bs-card .bs-logo{display:inline-flex;align-items:center;flex:0 0 auto;}
.bs-card .bs-kind{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.bs-card .bs-open{margin-left:auto;display:inline-flex;align-items:center;
  color:var(--bs-muted)!important;text-decoration:none!important;font-size:12px;
  border:1px solid var(--bs-border);border-radius:999px;padding:1px 9px;
  transition:color .15s,border-color .15s,background .15s;touch-action:manipulation;}
.bs-card .bs-open:hover{color:#1DB954!important;border-color:rgba(29,185,84,.5);
  background:rgba(29,185,84,.08);}
.bs-card .bs-frame{position:relative;width:100%;background:#121212;overflow:hidden;}
.bs-card .bs-skeleton{position:absolute;inset:0;display:flex;align-items:center;
  justify-content:center;background:linear-gradient(135deg,#1b1b1d,#101012);}
.bs-card .bs-frame.bs-loaded .bs-skeleton{display:none;}
.bs-card .bs-eq{display:inline-flex;align-items:flex-end;gap:3px;height:18px;}
.bs-card .bs-eq i{display:block;width:3px;height:6px;border-radius:2px;
  background:#1DB954;opacity:.85;animation:bs-eq 1s ease-in-out infinite;}
.bs-card .bs-eq i:nth-child(2){animation-delay:.15s;}
.bs-card .bs-eq i:nth-child(3){animation-delay:.3s;}
.bs-card .bs-eq i:nth-child(4){animation-delay:.45s;}
@keyframes bs-eq{0%,100%{height:5px}50%{height:16px}}
.bs-card .bs-iframe{position:absolute;inset:0;display:block;width:100%;height:100%;
  border:0;background:transparent;}
.bs-card .bs-tip{position:absolute;left:0;right:0;bottom:0;padding:5px 10px;
  font-size:11px;line-height:1.4;color:#d4d4d8;background:rgba(0,0,0,.55);text-align:center;}
/* 原生预览的隐藏交给 inline display:none（见 scanner.addCard），
   不再用 :has() 全局选择器，减少大 DOM 上的样式失效开销 */
@media (max-width:480px){
  .bs-card{border-radius:12px;margin:8px 0 10px;}
  .bs-card .bs-head{padding:6px 8px;font-size:11px;gap:5px;}
  .bs-card .bs-open{padding:2px 8px;font-size:11px;line-height:1.5;}
}

.bs-settings{display:flex;flex-direction:column;gap:12px;padding:4px 2px;font-size:13px;color:inherit;}
.bs-settings .bs-set-title{font-size:14px;font-weight:600;}
.bs-settings .bs-set-desc{font-size:12px;opacity:.6;line-height:1.5;margin-top:-4px;}
.bs-settings .bs-row{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;
  padding:10px 12px;border:1px solid rgba(127,127,127,.22);border-radius:10px;}
.bs-settings .bs-row-label{font-weight:500;}
.bs-settings .bs-row-hint{font-size:12px;opacity:.6;margin-top:3px;line-height:1.45;}
.bs-settings input[type="checkbox"]{width:16px;height:16px;accent-color:#1DB954;flex:0 0 auto;margin-top:2px;cursor:pointer;}
.bs-settings input[type="number"]{width:104px;padding:5px 8px;border-radius:8px;
  border:1px solid rgba(127,127,127,.3);background:transparent;color:inherit;font-size:13px;}
.bs-settings .bs-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:2px;}
.bs-settings button{padding:7px 16px;border-radius:9px;border:1px solid rgba(127,127,127,.28);
  background:transparent;color:inherit;font-size:13px;cursor:pointer;}
.bs-settings button.bs-primary{background:#1DB954;border-color:#1DB954;color:#fff;font-weight:600;}
.bs-settings button:disabled{opacity:.6;cursor:default;}
.bs-settings button:hover:not(:disabled){opacity:.88;}
`, he = "bs-spotify-embed-style", Rt = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.28c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.36.18.42.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.54.18-1.14-.12-1.32-.66-.18-.54.12-1.14.66-1.32 4.26-1.26 11.28-1.02 15.72 1.62.48.3.66.96.36 1.44-.3.36-.96.54-1.5.24z"/></svg>', ot = /* @__PURE__ */ new WeakMap();
  function qt() {
    if (document.getElementById(he))
      return;
    const t = document.createElement("style");
    t.id = he, t.textContent = Bt, document.head.appendChild(t);
  }
  function jt() {
    var t;
    (t = document.getElementById(he)) == null || t.remove();
  }
  function Vt(t, e) {
    const n = it(t.kind), i = document.createElement("div");
    if (i.className = "bs-card", i.setAttribute("data-bs-card", t.kind), i.setAttribute("contenteditable", "false"), i.setAttribute("data-href", t.href), e.maxWidth > 0 && i.style.setProperty("--bs-max", `${e.maxWidth}px`), e.showHeader) {
      const r = document.createElement("div");
      r.className = "bs-head";
      const c = document.createElement("span");
      c.className = "bs-logo", c.innerHTML = Rt, r.appendChild(c);
      const _ = document.createElement("span");
      _.className = "bs-kind", _.textContent = `Spotify · ${nt(t.kind)}`, r.appendChild(_);
      const l = document.createElement("a");
      l.className = "bs-open", l.href = t.href, l.target = "_blank", l.rel = "noopener noreferrer", l.textContent = "打开", r.appendChild(l), i.appendChild(r);
    }
    const o = document.createElement("div");
    o.className = "bs-frame", o.style.height = `${n}px`;
    const s = document.createElement("div");
    return s.className = "bs-skeleton", s.innerHTML = '<span class="bs-eq"><i></i><i></i><i></i><i></i></span>', o.appendChild(s), i.appendChild(o), ot.set(i, t), i.addEventListener("click", (r) => r.stopPropagation()), i;
  }
  function rt(t) {
    if (!t.isConnected)
      return;
    const e = ot.get(t), n = t.querySelector(".bs-frame");
    if (!e || !n || n.getAttribute("data-mounted") === "1")
      return;
    n.setAttribute("data-mounted", "1");
    const i = it(e.kind), o = document.createElement("iframe");
    o.className = "bs-iframe", o.setAttribute(
      "src",
      `https://open.spotify.com/embed/${e.kind}/${e.id}?utm_source=generator&theme=0`
    ), o.setAttribute("width", "100%"), o.setAttribute("height", String(i)), o.setAttribute("frameborder", "0"), o.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"), o.setAttribute("allowfullscreen", "true"), o.setAttribute("loading", "lazy"), o.setAttribute("title", `Spotify ${nt(e.kind)}`);
    const s = window.setTimeout(() => {
      if (n.classList.contains("bs-loaded") || n.querySelector(".bs-tip"))
        return;
      const r = document.createElement("div");
      r.className = "bs-tip", r.textContent = "加载中…若一直空白，请确认当前网络可以访问 open.spotify.com", n.appendChild(r);
    }, 8e3);
    o.addEventListener("load", () => {
      var r;
      n.classList.add("bs-loaded"), window.clearTimeout(s), (r = n.querySelector(".bs-tip")) == null || r.remove();
    }), n.appendChild(o);
  }
  function Kt(t, e) {
    let n = t;
    for (; n.nextElementSibling instanceof HTMLElement && n.nextElementSibling.hasAttribute("data-bs-card"); )
      n = n.nextElementSibling;
    n.insertAdjacentElement("afterend", e);
  }
  const me = 'a[href*="spotify.com"]';
  class Yt {
    constructor(e) {
      k(this, "cards", /* @__PURE__ */ new Map());
      k(this, "observer", null);
      k(this, "io", null);
      k(this, "fullTimer", null);
      this.getSettings = e;
    }
    start() {
      this.observer || (typeof IntersectionObserver == "function" && (this.io = new IntersectionObserver(
        (e) => {
          var n;
          for (const i of e)
            i.isIntersecting && ((n = this.io) == null || n.unobserve(i.target), rt(i.target));
        },
        { rootMargin: "480px 0px" }
      )), this.scan(), this.observer = new MutationObserver((e) => this.onMutations(e)), this.observer.observe(document.body, { childList: !0, subtree: !0 }));
    }
    stop() {
      var e, n;
      (e = this.observer) == null || e.disconnect(), this.observer = null, (n = this.io) == null || n.disconnect(), this.io = null, this.fullTimer !== null && (window.clearTimeout(this.fullTimer), this.fullTimer = null);
      for (const i of Array.from(this.cards.keys()))
        this.removeCard(i);
    }
    /** 设置变更后重建全部卡片 */
    rescan() {
      for (const e of Array.from(this.cards.keys()))
        this.removeCard(e);
      this.scan();
    }
    onMutations(e) {
      const n = [];
      let i = !1;
      for (const o of e) {
        if (o.type !== "childList")
          continue;
        const s = o.target;
        if (!(s instanceof Element && s.closest("[data-bs-card]"))) {
          for (const r of Array.from(o.addedNodes))
            r instanceof Element && n.push(r);
          o.removedNodes.length > 0 && (i = !0);
        }
      }
      n.length > 0 && this.processNodes(n), i && this.scheduleFullScan();
    }
    /** 只在新增子树里找链接 */
    processNodes(e) {
      const n = /* @__PURE__ */ new Set();
      for (const i of e) {
        if (!i.isConnected)
          continue;
        i.matches(me) && n.add(i);
        const o = i.querySelectorAll(me);
        for (const s of Array.from(o))
          n.add(s);
      }
      for (const i of n)
        this.handleAnchor(i);
    }
    scheduleFullScan() {
      this.fullTimer === null && (this.fullTimer = window.setTimeout(() => {
        this.fullTimer = null, this.scan();
      }, 400));
    }
    scan() {
      const e = document.querySelectorAll(me), n = /* @__PURE__ */ new Set();
      for (const i of Array.from(e))
        this.handleAnchor(i) && n.add(i);
      for (const [i, o] of Array.from(this.cards.entries()))
        (!n.has(i) || !i.isConnected || !o.isConnected) && this.removeCard(i);
    }
    /** 处理单个链接，返回它是否是一张有效卡片（供全量对账用） */
    handleAnchor(e) {
      if (!e.isConnected || e.closest("[data-bs-card]") || e.closest(".bs-settings") || e.isContentEditable || e.closest('[contenteditable="true"]') || e.closest(".cm-editor"))
        return !1;
      const n = Ut(e.getAttribute("href"));
      if (!n)
        return !1;
      const i = this.cards.get(e);
      return i != null && i.isConnected && i.getAttribute("data-href") === n.href || (i && this.removeCard(e), this.addCard(e, n)), !0;
    }
    addCard(e, n) {
      const i = this.getSettings(), o = e.closest(".link-preview-block"), s = o ?? e.closest("p, li, blockquote, h1, h2, h3, h4, h5, h6");
      if (!s || !s.parentNode)
        return;
      const r = Vt(n, i);
      o && i.hideNative && (r.classList.add("bs-hide-native"), o.setAttribute("data-bs-hidden-by-card", "1"), o.style.display = "none"), s.tagName === "LI" ? s.appendChild(r) : Kt(s, r), this.cards.set(e, r), i.lazy && this.io ? this.io.observe(r) : rt(r);
    }
    removeCard(e) {
      var o;
      const n = this.cards.get(e);
      if (!n)
        return;
      try {
        (o = this.io) == null || o.unobserve(n);
      } catch {
      }
      const i = n.previousElementSibling;
      i instanceof HTMLElement && i.getAttribute("data-bs-hidden-by-card") === "1" && (i.style.display = "", i.removeAttribute("data-bs-hidden-by-card")), n.remove(), this.cards.delete(e);
    }
  }
  const P = /* @__PURE__ */ new Set();
  function st() {
    const t = document.querySelectorAll("svg.h-0");
    for (const e of Array.from(t))
      if (!P.has(e) && typeof e.pauseAnimations == "function")
        try {
          e.pauseAnimations(), P.add(e);
        } catch {
        }
    for (const e of Array.from(P)) {
      if (!e.isConnected) {
        P.delete(e);
        continue;
      }
      if (!e.classList.contains("h-0")) {
        try {
          e.unpauseAnimations();
        } catch {
        }
        P.delete(e);
      }
    }
  }
  function Gt() {
    for (const t of Array.from(P))
      try {
        t.unpauseAnimations();
      } catch {
      }
    P.clear();
  }
  const at = "blinko-plugin-spotify-embed", X = "__BLINKO_SPOTIFY_CARD_ACTIVE__";
  System.register([], (t) => ({
    execute: () => {
      t(
        "default",
        class {
          constructor() {
            /** 告诉 Blinko：这个插件有设置面板 */
            k(this, "withSettingPanel", !0);
            k(this, "settings", { ...L });
            k(this, "scanner", new Yt(() => this.settings));
            /** 上游 #1222 的运行时修补：暂停隐藏 loader 的动画 */
            k(this, "idleTimer", null);
            /** 由 Blinko 在插件设置弹窗里调用 */
            k(this, "renderSettingPanel", () => {
              const n = document.createElement("div");
              return Nt(/* @__PURE__ */ b(Ft, { settings: this.settings, onSave: this.applySettings }), n), n;
            });
            /** 按用户维度持久化到服务端，localStorage 只做首屏缓存 */
            k(this, "applySettings", async (n) => {
              const i = this.settings.fixIdleCpu;
              this.settings = M(n), await Lt(at, this.settings), this.scanner.rescan(), i !== this.settings.fixIdleCpu && (this.stopIdleFix(), this.startIdleFix());
            });
            Object.assign(this, It);
          }
          async init() {
            if (window[X]) {
              console.warn("[spotify-card] 已经有一个实例在运行，跳过重复加载");
              return;
            }
            window[X] = this, this.initI18n(), qt(), this.settings = await zt(at), this.scanner.start(), this.startIdleFix(), console.log("[spotify-card] ready", this.settings);
          }
          startIdleFix() {
            !this.settings.fixIdleCpu || this.idleTimer !== null || (st(), this.idleTimer = window.setInterval(st, 1e3));
          }
          stopIdleFix() {
            this.idleTimer !== null && (window.clearInterval(this.idleTimer), this.idleTimer = null), Gt();
          }
          initI18n() {
            var n, i, o, s, r, c;
            (o = (i = (n = window.Blinko) == null ? void 0 : n.i18n) == null ? void 0 : i.addResourceBundle) == null || o.call(i, "en", "translation", Pt), (c = (r = (s = window.Blinko) == null ? void 0 : s.i18n) == null ? void 0 : r.addResourceBundle) == null || c.call(r, "zh", "translation", Tt);
          }
          destroy() {
            this.stopIdleFix(), this.scanner.stop(), jt(), window[X] === this && (window[X] = null), console.log("[spotify-card] destroyed");
          }
        }
      );
    }
  }));
})();
