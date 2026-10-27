var jt = Object.defineProperty;
var Vt = (w, u, A) => u in w ? jt(w, u, { enumerable: !0, configurable: !0, writable: !0, value: A }) : w[u] = A;
var $ = (w, u, A) => (Vt(w, typeof u != "symbol" ? u + "" : u, A), A);
(function() {
  var w, u, A, E, he, me, be, Q, U, M, ve, X, ee, te, F = {}, R = [], rt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, O = Array.isArray;
  function C(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function ne(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function ie(e, t, n) {
    var i, o, r, s = {};
    for (r in t)
      r == "key" ? i = t[r] : r == "ref" ? o = t[r] : s[r] = t[r];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? w.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (r in e.defaultProps)
        s[r] === void 0 && (s[r] = e.defaultProps[r]);
    return q(e, s, i, o, null);
  }
  function q(e, t, n, i, o) {
    var r = { type: e, props: t, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++A, __i: -1, __u: 0 };
    return o == null && u.vnode != null && u.vnode(r), r;
  }
  function T(e) {
    return e.children;
  }
  function N(e, t) {
    this.props = e, this.context = t;
  }
  function P(e, t) {
    if (t == null)
      return e.__ ? P(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? P(e) : null;
  }
  function st(e) {
    if (e.__P && e.__d) {
      var t = e.__v, n = t.__e, i = [], o = [], r = C({}, t);
      r.__v = t.__v + 1, u.vnode && u.vnode(r), oe(e.__P, r, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, i, n ?? P(t), !!(32 & t.__u), o), r.__v = t.__v, r.__.__k[r.__i] = r, $e(i, r, o), t.__e = t.__ = null, r.__e != n && ye(r);
    }
  }
  function ye(e) {
    if ((e = e.__) != null && e.__c != null)
      return e.__e = e.__c.base = null, e.__k.some(function(t) {
        if (t != null && t.__e != null)
          return e.__e = e.__c.base = t.__e;
      }), ye(e);
  }
  function ge(e) {
    (!e.__d && (e.__d = !0) && E.push(e) && !j.__r++ || he != u.debounceRendering) && ((he = u.debounceRendering) || me)(j);
  }
  function j() {
    try {
      for (var e, t = 1; E.length; )
        E.length > t && E.sort(be), e = E.shift(), t = E.length, st(e);
    } finally {
      E.length = j.__r = 0;
    }
  }
  function xe(e, t, n, i, o, r, s, _, c, l, d) {
    var f, a, p, m, k, v, y = i && i.__k || R, h = t.length;
    for (c = at(n, t, y, c, h), f = 0; f < h; f++)
      (p = n.__k[f]) != null && (a = p.__i != -1 && y[p.__i] || F, p.__i = f, v = oe(e, p, a, o, r, s, _, c, l, d), m = p.__e, p.ref && a.ref != p.ref && (a.ref && re(a.ref, null, p), d.push(p.ref, p.__c || m, p)), k == null && m != null && (k = m), 4 & p.__u ? (c = ke(p, c, e), a.__e && (a.__e = null)) : typeof p.type == "function" && v !== void 0 ? c = v : m && (c = m.nextSibling), p.__u &= -7);
    return n.__e = k, c;
  }
  function at(e, t, n, i, o) {
    var r, s, _, c, l, d = n.length, f = d, a = 0;
    for (e.__k = new Array(o), r = 0; r < o; r++)
      (s = t[r]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[r] = q(null, s, null, null, null) : O(s) ? s = e.__k[r] = q(T, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[r] = q(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[r] = s, c = r + a, s.__ = e, s.__b = e.__b + 1, _ = null, (l = s.__i = lt(s, n, c, f)) != -1 && (f--, (_ = n[l]) && (_.__u |= 2)), _ == null || _.__v == null ? (l == -1 && (o > d ? a-- : o < d && a++), typeof s.type != "function" && (s.__u |= 4)) : l != c && (l == c - 1 ? a-- : l == c + 1 ? a++ : (l > c ? a-- : a++, s.__u |= 4))) : e.__k[r] = null;
    if (f)
      for (r = 0; r < d; r++)
        (_ = n[r]) != null && !(2 & _.__u) && (_.__e == i && (i = P(_)), Ne(_, _));
    return i;
  }
  function ke(e, t, n) {
    var i, o;
    if (typeof e.type == "function") {
      for (i = e.__k, o = 0; i && o < i.length; o++)
        i[o] && (i[o].__ = e, t = ke(i[o], t, n));
      return t;
    }
    e.__e != t && (t && e.type && !t.parentNode && (t = P(e)), t = n.insertBefore(e.__e, t || null));
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function V(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (O(e) ? e.some(function(n) {
      V(n, t);
    }) : t.push(e)), t;
  }
  function lt(e, t, n, i) {
    var o, r, s, _ = e.key, c = e.type, l = t[n], d = l != null && (2 & l.__u) == 0;
    if (l === null && _ == null || d && _ == l.key && c == l.type)
      return n;
    if (i > (d ? 1 : 0)) {
      for (o = n - 1, r = n + 1; o >= 0 || r < t.length; )
        if ((l = t[s = o >= 0 ? o-- : r++]) != null && !(2 & l.__u) && _ == l.key && c == l.type)
          return s;
    }
    return -1;
  }
  function we(e, t, n) {
    t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || rt.test(t) ? n : n + "px";
  }
  function G(e, t, n, i, o) {
    var r, s;
    e:
      if (t == "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof i == "string" && (e.style.cssText = i = ""), i)
            for (t in i)
              n && t in n || we(e.style, t, "");
          if (n)
            for (t in n)
              i && n[t] == i[t] || we(e.style, t, n[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        r = t != (t = t.replace(ve, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? i ? n[M] = i[M] : (n[M] = X, e.addEventListener(t, r ? te : ee, r)) : e.removeEventListener(t, r ? te : ee, r);
      else {
        if (o == "http://www.w3.org/2000/svg")
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
          try {
            e[t] = n ?? "";
            break e;
          } catch {
          }
        typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
      }
  }
  function Se(e) {
    return function(t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t[U] == null)
          t[U] = X++;
        else if (t[U] < n[M])
          return;
        return n(u.event ? u.event(t) : t);
      }
    };
  }
  function oe(e, t, n, i, o, r, s, _, c, l) {
    var d, f, a, p, m, k, v, y, h, S, B, z, I, ot, Z, fe, H = t.type;
    if (t.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), r = [_ = t.__e = n.__e]), (d = u.__b) && d(t);
    e:
      if (typeof H == "function") {
        f = s.length;
        try {
          if (h = t.props, S = H.prototype && H.prototype.render, B = (d = H.contextType) && i[d.__c], z = d ? B ? B.props.value : d.__ : i, n.__c ? y = (a = t.__c = n.__c).__ = a.__E : (S ? t.__c = a = new H(h, z) : (t.__c = a = new N(h, z), a.constructor = H, a.render = ct), B && B.sub(a), a.state || (a.state = {}), a.__n = i, p = a.__d = !0, a.__h = [], a._sb = []), S && a.__s == null && (a.__s = a.state), S && H.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = C({}, a.__s)), C(a.__s, H.getDerivedStateFromProps(h, a.__s))), m = a.props, k = a.state, a.__v = t, p)
            S && H.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), S && a.componentDidMount != null && a.__h.push(a.componentDidMount);
          else {
            if (S && H.getDerivedStateFromProps == null && h !== m && a.componentWillReceiveProps != null && a.componentWillReceiveProps(h, z), t.__v == n.__v || !a.__e && a.shouldComponentUpdate != null && a.shouldComponentUpdate(h, a.__s, z) === !1) {
              t.__v != n.__v && (a.props = h, a.state = a.__s, a.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(L) {
                L && (L.__ = t);
              }), R.push.apply(a.__h, a._sb), a._sb = [], a.__h.length && s.push(a), _ = P(n);
              break e;
            }
            a.componentWillUpdate != null && a.componentWillUpdate(h, a.__s, z), S && a.componentDidUpdate != null && a.__h.push(function() {
              a.componentDidUpdate(m, k, v);
            });
          }
          if (a.context = z, a.props = h, a.__P = e, a.__e = !1, I = u.__r, ot = 0, S)
            a.state = a.__s, a.__d = !1, I && I(t), d = a.render(a.props, a.state, a.context), R.push.apply(a.__h, a._sb), a._sb = [];
          else
            do
              a.__d = !1, I && I(t), d = a.render(a.props, a.state, a.context), a.state = a.__s;
            while (a.__d && ++ot < 25);
          a.state = a.__s, a.getChildContext != null && (i = C(C({}, i), a.getChildContext())), S && !p && a.getSnapshotBeforeUpdate != null && (v = a.getSnapshotBeforeUpdate(m, k)), Z = d != null && d.type === T && d.key == null ? Ce(d.props.children) : d, _ = xe(e, O(Z) ? Z : [Z], t, n, i, o, r, s, _, c, l), a.base = t.__e, t.__u &= -161, a.__h.length && s.push(a), y && (a.__E = a.__ = null);
        } catch (L) {
          if (s.length = f, t.__v = null, c || r != null) {
            if (L.then) {
              for (t.__u |= c ? 160 : 128; _ && _.nodeType == 8 && _.nextSibling; )
                _ = _.nextSibling;
              r != null && (r[r.indexOf(_)] = null), t.__e = _;
            } else if (r != null)
              for (fe = r.length; fe--; )
                ne(r[fe]);
          } else
            t.__e = n.__e;
          t.__k == null && (t.__k = n.__k || []), L.then || He(t), u.__e(L, t, n);
        }
      } else
        r == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : _ = t.__e = _t(n.__e, t, n, i, o, r, s, c, l);
    return (d = u.diffed) && d(t), 128 & t.__u ? void 0 : _;
  }
  function He(e) {
    e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(He));
  }
  function $e(e, t, n) {
    for (var i = 0; i < n.length; i++)
      re(n[i], n[++i], n[++i]);
    u.__c && u.__c(t, e), e.some(function(o) {
      try {
        e = o.__h, o.__h = [], e.some(function(r) {
          r.call(o);
        });
      } catch (r) {
        u.__e(r, o.__v);
      }
    });
  }
  function Ce(e) {
    return typeof e != "object" || e == null || e.__b > 0 ? e : O(e) ? e.map(Ce) : e.constructor !== void 0 ? null : C({}, e);
  }
  function _t(e, t, n, i, o, r, s, _, c) {
    var l, d, f, a, p, m, k, v = n.props || F, y = t.props, h = t.type;
    if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
      for (l = 0; l < r.length; l++)
        if ((p = r[l]) && "setAttribute" in p == !!h && (h ? p.localName == h : p.nodeType == 3)) {
          e = p, r[l] = null;
          break;
        }
    }
    if (e == null) {
      if (h == null)
        return document.createTextNode(y);
      e = document.createElementNS(o, h, y.is && y), _ && (u.__m && u.__m(t, r), _ = !1), r = null;
    }
    if (h == null)
      v === y || _ && e.data == y || (e.data = y);
    else {
      if (r = h == "textarea" && y.defaultValue != null ? null : r && w.call(e.childNodes), !_ && r != null)
        for (v = {}, l = 0; l < e.attributes.length; l++)
          v[(p = e.attributes[l]).name] = p.value;
      for (l in v)
        p = v[l], l == "dangerouslySetInnerHTML" ? f = p : l == "children" || l in y || l == "value" && "defaultValue" in y || l == "checked" && "defaultChecked" in y || G(e, l, null, p, o);
      for (l in y)
        p = y[l], l == "children" ? a = p : l == "dangerouslySetInnerHTML" ? d = p : l == "value" ? m = p : l == "checked" ? k = p : _ && typeof p != "function" || v[l] === p || G(e, l, p, v[l], o);
      if (d)
        _ || f && (d.__html == f.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
      else if (f && (e.innerHTML = ""), xe(t.type == "template" ? e.content : e, O(a) ? a : [a], t, n, i, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, s, r ? r[0] : n.__k && P(n, 0), _, c), r != null)
        for (l = r.length; l--; )
          ne(r[l]);
      _ && h != "textarea" || (l = "value", h == "progress" && m == null ? e.removeAttribute("value") : m != null && (m !== e[l] || h == "progress" && !m || h == "option" && m != v[l]) && G(e, l, m, v[l], o), l = "checked", k != null && k != e[l] && G(e, l, k, v[l], o));
    }
    return e;
  }
  function re(e, t, n) {
    try {
      if (typeof e == "function") {
        var i = typeof e.__u == "function";
        i && e.__u(), i && t == null || (e.__u = e(t));
      } else
        e.current = t;
    } catch (o) {
      u.__e(o, n);
    }
  }
  function Ne(e, t, n) {
    var i, o;
    if (u.unmount && u.unmount(e), (i = e.ref) && (i.current && i.current != e.__e || re(i, null, t)), (i = e.__c) != null) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (r) {
          u.__e(r, t);
        }
      i.base = i.__P = i.__n = null;
    }
    if (i = e.__k)
      for (o = 0; o < i.length; o++)
        i[o] && Ne(i[o], t, n || typeof e.type != "function");
    n || ne(e.__e), e.__c = e.__ = e.__e = void 0;
  }
  function ct(e, t, n) {
    return this.constructor(e, n);
  }
  function dt(e, t, n) {
    var i, o, r, s;
    t == document && (t = document.documentElement), u.__ && u.__(e, t), o = (i = typeof n == "function") ? null : n && n.__k || t.__k, r = [], s = [], oe(t, e = (!i && n || t).__k = ie(T, null, [e]), o || F, F, t.namespaceURI, !i && n ? [n] : o ? null : t.firstChild ? w.call(t.childNodes) : null, r, !i && n ? n : o ? o.__e : t.firstChild, i, s), $e(r, e, s), e.props.children = null;
  }
  w = R.slice, u = { __e: function(e, t, n, i) {
    for (var o, r, s; t = t.__; )
      if ((o = t.__c) && !o.__)
        try {
          if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, i || {}), s = o.__d), s)
            return o.__E = o;
        } catch (_) {
          e = _;
        }
    throw e;
  } }, A = 0, N.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = C({}, this.state), typeof e == "function" && (e = e(C({}, n), this.props)), e && C(n, e), e != null && this.__v && (t && this._sb.push(t), ge(this));
  }, N.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), ge(this));
  }, N.prototype.render = T, E = [], me = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, be = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, j.__r = 0, Q = Math.random().toString(8), U = "__d" + Q, M = "__a" + Q, ve = /(PointerCapture)$|Capture$/i, X = 0, ee = Se(!1), te = Se(!0);
  var ut = 0;
  function g(e, t, n, i, o, r) {
    t || (t = {});
    var s, _, c = t;
    if ("ref" in c)
      for (_ in c = {}, t)
        _ == "ref" ? s = t[_] : c[_] = t[_];
    var l = { type: e, props: c, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ut, __i: -1, __u: 0, __source: o, __self: r };
    if (typeof e == "function" && (s = e.defaultProps))
      for (_ in s)
        c[_] === void 0 && (c[_] = s[_]);
    return u.vnode && u.vnode(l), l;
  }
  var se, b, ae, Ae, le = 0, Ee = [], x = u, Pe = x.__b, ze = x.__r, Te = x.diffed, We = x.__c, Le = x.unmount, Me = x.__;
  function pt(e, t) {
    x.__h && x.__h(b, e, le || t), le = 0;
    var n = b.__H || (b.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function Oe(e) {
    return le = 1, ft(Be, e);
  }
  function ft(e, t, n) {
    var i = pt(se++, 2);
    if (i.t = e, !i.__c && (i.__ = [n ? n(t) : Be(void 0, t), function(_) {
      var c = i.__N ? i.__N[0] : i.__[0], l = i.t(c, _);
      c !== l && (i.__N = [l, i.__[1]], i.__c.setState({}));
    }], i.__c = b, !b.__f)) {
      var o = function(_, c, l) {
        if (!i.__c.__H)
          return !0;
        var d = !1, f = i.__c.props !== _;
        if (i.__c.__H.__.some(function(p) {
          if (p.__N) {
            d = !0;
            var m = p.__[0];
            p.__ = p.__N, p.__N = void 0, m !== p.__[0] && (f = !0);
          }
        }), r) {
          var a = r.call(this, _, c, l);
          return d ? a || f : a;
        }
        return !d || f;
      };
      b.__f = !0;
      var r = b.shouldComponentUpdate, s = b.componentWillUpdate;
      b.componentWillUpdate = function(_, c, l) {
        if (this.__e) {
          var d = r;
          r = void 0, o(_, c, l), r = d;
        }
        s && s.call(this, _, c, l);
      }, b.shouldComponentUpdate = o;
    }
    return i.__N || i.__;
  }
  function ht() {
    for (var e; e = Ee.shift(); ) {
      var t = e.__H;
      if (e.__P && t)
        try {
          t.__h.some(J), t.__h.some(_e), t.__h = [];
        } catch (n) {
          t.__h = [], x.__e(n, e.__v);
        }
    }
  }
  x.__b = function(e) {
    b = null, Pe && Pe(e);
  }, x.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Me && Me(e, t);
  }, x.__r = function(e) {
    ze && ze(e), se = 0;
    var t = (b = e.__c).__H;
    t && (ae === b ? (t.__h = [], b.__h = [], t.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (t.__h.some(J), t.__h.some(_e), t.__h = [], se = 0)), ae = b;
  }, x.diffed = function(e) {
    Te && Te(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Ee.push(t) !== 1 && Ae === x.requestAnimationFrame || ((Ae = x.requestAnimationFrame) || mt)(ht)), t.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), ae = b = null;
  }, x.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.some(J), n.__h = n.__h.filter(function(i) {
          return !i.__ || _e(i);
        });
      } catch (i) {
        t.some(function(o) {
          o.__h && (o.__h = []);
        }), t = [], x.__e(i, n.__v);
      }
    }), We && We(e, t);
  }, x.unmount = function(e) {
    Le && Le(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.some(function(i) {
      try {
        J(i);
      } catch (o) {
        t = o;
      }
    }), n.__H = void 0, t && x.__e(t, n.__v));
  };
  var De = typeof requestAnimationFrame == "function";
  function mt(e) {
    var t, n = function() {
      clearTimeout(i), De && cancelAnimationFrame(t), setTimeout(e);
    }, i = setTimeout(n, 35);
    De && (t = requestAnimationFrame(n));
  }
  function J(e) {
    var t = b, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), b = t;
  }
  function _e(e) {
    var t = b;
    e.__c = e.__(), b = t;
  }
  function Be(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bt(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function Ie(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var i in t)
      if (i !== "__source" && e[i] !== t[i])
        return !0;
    return !1;
  }
  function Ue(e, t) {
    this.props = e, this.context = t;
  }
  (Ue.prototype = new N()).isPureReactComponent = !0, Ue.prototype.shouldComponentUpdate = function(e, t) {
    return Ie(this.props, e) || Ie(this.state, t);
  };
  var Fe = u.__b;
  u.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Fe && Fe(e);
  };
  var vt = u.__e;
  u.__e = function(e, t, n, i) {
    if (e.then) {
      for (var o, r = t; r = r.__; )
        if ((o = r.__c) && o.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k || []), o.__c(e, t);
    }
    vt(e, t, n, i);
  };
  var Re = u.unmount;
  function qe(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(i) {
      typeof i.__c == "function" && i.__c();
    }), e.__c.__H = null), (e = bt({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(i) {
      return qe(i, t, n);
    })), e;
  }
  function je(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(i) {
      return je(i, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function ce() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ve(e) {
    var t = e.__ && e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function K() {
    this.i = null, this.l = null;
  }
  u.unmount = function(e) {
    var t = e.__c;
    t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Re && Re(e);
  }, (ce.prototype = new N()).__c = function(e, t) {
    var n = t.__c, i = this;
    i.o == null && (i.o = []), i.o.push(n);
    var o = Ve(i.__v), r = !1, s = function() {
      r || i.__z || (r = !0, n.__R = null, o ? o(c) : c());
    };
    n.__R = s;
    var _ = n.__P;
    n.__P = null;
    var c = function() {
      if (!--i.__u) {
        if (i.state.__a) {
          var l = i.state.__a;
          i.__v.__k[0] = je(l, l.__c.__P, l.__c.__O);
        }
        var d;
        for (i.setState({ __a: i.__b = null }); d = i.o.pop(); )
          d.__P = _, d.forceUpdate();
      }
    };
    i.__u++ || 32 & t.__u || i.setState({ __a: i.__b = i.__v.__k[0] }), e.then(s, s);
  }, ce.prototype.componentWillUnmount = function() {
    this.o = [];
  }, ce.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), i = this.__v.__k[0].__c;
        this.__v.__k[0] = qe(this.__b, n, i.__O = i.__P);
      }
      this.__b = null;
    }
    var o = t.__a && ie(T, null, e.fallback);
    return o && (o.__u &= -33), [ie(T, null, t.__a ? null : e.children), o];
  };
  var Ge = function(e, t, n) {
    if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
      for (n = e.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.i = n = n[2];
      }
  };
  (K.prototype = new N()).__a = function(e) {
    var t = this, n = Ve(t.__v), i = t.l.get(e);
    return i[0]++, function(o) {
      var r = function() {
        t.props.revealOrder ? (i.push(o), Ge(t, e, i)) : o();
      };
      n ? n(r) : r();
    };
  }, K.prototype.render = function(e) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t = V(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.l.set(t[n], this.i = [1, 0, this.i]);
    return e.children;
  }, K.prototype.componentDidUpdate = K.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, n) {
      Ge(e, n, t);
    });
  };
  var yt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, gt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, xt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, kt = /[A-Z0-9]/g, wt = typeof document < "u", St = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  function Ht(e, t, n) {
    return t.__k == null && (t.textContent = ""), dt(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  N.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(N.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var Je = u.event;
  u.event = function(e) {
    return Je && (e = Je(e)), e.persist = function() {
    }, e.isPropagationStopped = function() {
      return this.cancelBubble;
    }, e.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, e.nativeEvent = e;
  };
  var $t = { configurable: !0, get: function() {
    return this.class;
  } }, Ke = u.vnode;
  u.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, i = t.type, o = {}, r = i.indexOf("-") == -1;
      for (var s in n) {
        var _ = n[s];
        if (!(s === "value" && "defaultValue" in n && _ == null || wt && s === "children" && i === "noscript" || s === "class" || s === "className")) {
          var c = s.toLowerCase();
          s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && _ === !0 ? _ = "" : c === "translate" && _ === "no" ? _ = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || i !== "input" && i !== "textarea" || St(n.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : xt.test(s) && (s = c) : c = s = "oninput" : r && gt.test(s) ? s = s.replace(kt, "-$&").toLowerCase() : _ === null && (_ = void 0), c === "oninput" && o[s = c] && (s = "oninputCapture"), o[s] = _;
        }
      }
      i == "select" && (o.multiple && Array.isArray(o.value) && (o.value = V(n.children).forEach(function(l) {
        l.props.selected = o.value.indexOf(l.props.value) != -1;
      })), o.defaultValue != null && (o.value = V(n.children).forEach(function(l) {
        l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
      }))), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", $t)) : n.className && (o.class = o.className = n.className), t.props = o;
    }(e), e.$$typeof = yt, Ke && Ke(e);
  };
  var Ye = u.__r;
  u.__r = function(e) {
    Ye && Ye(e), e.__c;
  };
  var Ze = u.diffed;
  u.diffed = function(e) {
    Ze && Ze(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
  };
  const Ct = {
    name: "blinko-plugin-spotify-embed",
    author: "Chiyuuu",
    url: "https://github.com/Chiyuuu/blinko-plugin-spotify-embed",
    version: "1.0.0",
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
  }, Nt = {
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
    saveFailed: "Save failed, check the console"
  }, At = {
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
    saveFailed: "保存失败，请查看控制台"
  }, W = {
    showHeader: !0,
    lazy: !0,
    hideNative: !0,
    maxWidth: 0
  }, de = "bs-spotify-embed:settings";
  function ue(e) {
    return e !== !1 && e !== "false";
  }
  function D(e) {
    const t = e ?? {}, n = Number(t.maxWidth);
    return {
      showHeader: ue(t.showHeader),
      lazy: ue(t.lazy),
      hideNative: ue(t.hideNative),
      maxWidth: Number.isFinite(n) && n > 0 ? Math.min(Math.max(n, 240), 1200) : 0
    };
  }
  function Qe() {
    var e, t;
    return (t = (e = window.Blinko) == null ? void 0 : e.api) == null ? void 0 : t.config;
  }
  async function Et(e) {
    let t = { ...W };
    try {
      const n = JSON.parse(localStorage.getItem(de) ?? "null");
      n && (t = D({ ...W, ...n }));
    } catch {
    }
    try {
      const n = Qe();
      if (n != null && n.getPluginConfig) {
        const i = await n.getPluginConfig.query({ pluginName: e });
        if (i && typeof i == "object" && Object.keys(i).length > 0) {
          t = D({ ...W, ...i });
          try {
            localStorage.setItem(de, JSON.stringify(t));
          } catch {
          }
        }
      }
    } catch (n) {
      console.warn("[spotify-card] 读取插件配置失败，使用默认值", n);
    }
    return t;
  }
  async function Pt(e, t) {
    const n = Qe(), i = Object.keys(W);
    n != null && n.setPluginConfig && await Promise.all(
      i.map((o) => n.setPluginConfig.mutate({ pluginName: e, key: o, value: t[o] }))
    );
    try {
      localStorage.setItem(de, JSON.stringify(t));
    } catch {
    }
  }
  function Y({ label: e, hint: t, children: n }) {
    return /* @__PURE__ */ g("div", { class: "bs-row", children: [
      /* @__PURE__ */ g("div", { children: [
        /* @__PURE__ */ g("div", { class: "bs-row-label", children: e }),
        /* @__PURE__ */ g("div", { class: "bs-row-hint", children: t })
      ] }),
      n
    ] });
  }
  function zt({ settings: e, onSave: t }) {
    const [n, i] = Oe(e), [o, r] = Oe(!1), s = (l) => {
      var d, f, a;
      return ((a = (f = (d = window.Blinko) == null ? void 0 : d.i18n) == null ? void 0 : f.t) == null ? void 0 : a.call(f, l)) ?? l;
    }, _ = (l) => i((d) => ({ ...d, ...l })), c = async () => {
      var l, d, f, a, p, m, k, v;
      r(!0);
      try {
        await t(D(n)), (f = (d = (l = window.Blinko) == null ? void 0 : l.toast) == null ? void 0 : d.success) == null || f.call(d, s("saved")), (p = (a = window.Blinko) == null ? void 0 : a.closeDialog) == null || p.call(a);
      } catch (y) {
        console.error("[spotify-card] 保存配置失败", y), (v = (k = (m = window.Blinko) == null ? void 0 : m.toast) == null ? void 0 : k.error) == null || v.call(k, s("saveFailed"));
      } finally {
        r(!1);
      }
    };
    return /* @__PURE__ */ g("div", { class: "bs-settings", children: [
      /* @__PURE__ */ g("div", { class: "bs-set-title", children: s("title") }),
      /* @__PURE__ */ g("div", { class: "bs-set-desc", children: s("desc") }),
      /* @__PURE__ */ g(Y, { label: s("showHeader"), hint: s("showHeaderHint"), children: /* @__PURE__ */ g(
        "input",
        {
          type: "checkbox",
          checked: n.showHeader,
          onChange: (l) => _({ showHeader: l.currentTarget.checked })
        }
      ) }),
      /* @__PURE__ */ g(Y, { label: s("lazy"), hint: s("lazyHint"), children: /* @__PURE__ */ g(
        "input",
        {
          type: "checkbox",
          checked: n.lazy,
          onChange: (l) => _({ lazy: l.currentTarget.checked })
        }
      ) }),
      /* @__PURE__ */ g(Y, { label: s("hideNative"), hint: s("hideNativeHint"), children: /* @__PURE__ */ g(
        "input",
        {
          type: "checkbox",
          checked: n.hideNative,
          onChange: (l) => _({ hideNative: l.currentTarget.checked })
        }
      ) }),
      /* @__PURE__ */ g(Y, { label: s("maxWidth"), hint: s("maxWidthHint"), children: /* @__PURE__ */ g(
        "input",
        {
          type: "number",
          min: 0,
          max: 1200,
          step: 20,
          value: String(n.maxWidth),
          onInput: (l) => _({ maxWidth: Number(l.currentTarget.value) || 0 })
        }
      ) }),
      /* @__PURE__ */ g("div", { class: "bs-actions", children: [
        /* @__PURE__ */ g("button", { type: "button", onClick: () => i(D(W)), children: s("reset") }),
        /* @__PURE__ */ g("button", { type: "button", class: "bs-primary", disabled: o, onClick: c, children: s("save") })
      ] })
    ] });
  }
  const Tt = ["open.spotify.com", "play.spotify.com"], Wt = /^\/(?:intl-[a-z-]+\/)?(?:embed\/)?(track|album|playlist|artist|episode|show)\/([A-Za-z0-9]{10,64})\/?$/i, Lt = {
    track: "单曲",
    album: "专辑",
    playlist: "歌单",
    artist: "艺人",
    episode: "播客单集",
    show: "播客节目"
  }, Mt = {
    track: 152,
    episode: 232,
    album: 352,
    playlist: 352,
    artist: 352,
    show: 352
  };
  function Ot(e) {
    if (!e || typeof e != "string")
      return null;
    let t;
    try {
      t = new URL(e, window.location.href);
    } catch {
      return null;
    }
    if (t.protocol !== "http:" && t.protocol !== "https:")
      return null;
    const n = t.hostname.toLowerCase();
    if (!Tt.includes(n))
      return null;
    const i = Wt.exec(t.pathname);
    if (!i)
      return null;
    const o = i[1].toLowerCase(), r = i[2];
    return { kind: o, id: r, href: `https://open.spotify.com/${o}/${r}` };
  }
  function Xe(e) {
    return Lt[e] ?? "链接";
  }
  function et(e) {
    return Mt[e] ?? 152;
  }
  const Dt = `
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
.link-preview-block:has(+ .bs-card.bs-hide-native){display:none!important;}
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
`, pe = "bs-spotify-embed-style", Bt = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.28c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.36.18.42.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.54.18-1.14-.12-1.32-.66-.18-.54.12-1.14.66-1.32 4.26-1.26 11.28-1.02 15.72 1.62.48.3.66.96.36 1.44-.3.36-.96.54-1.5.24z"/></svg>', tt = /* @__PURE__ */ new WeakMap();
  function It() {
    if (document.getElementById(pe))
      return;
    const e = document.createElement("style");
    e.id = pe, e.textContent = Dt, document.head.appendChild(e);
  }
  function Ut() {
    var e;
    (e = document.getElementById(pe)) == null || e.remove();
  }
  function Ft(e, t) {
    const n = et(e.kind), i = document.createElement("div");
    if (i.className = "bs-card", i.setAttribute("data-bs-card", e.kind), i.setAttribute("contenteditable", "false"), i.setAttribute("data-href", e.href), t.maxWidth > 0 && i.style.setProperty("--bs-max", `${t.maxWidth}px`), t.showHeader) {
      const s = document.createElement("div");
      s.className = "bs-head";
      const _ = document.createElement("span");
      _.className = "bs-logo", _.innerHTML = Bt, s.appendChild(_);
      const c = document.createElement("span");
      c.className = "bs-kind", c.textContent = `Spotify · ${Xe(e.kind)}`, s.appendChild(c);
      const l = document.createElement("a");
      l.className = "bs-open", l.href = e.href, l.target = "_blank", l.rel = "noopener noreferrer", l.textContent = "打开", s.appendChild(l), i.appendChild(s);
    }
    const o = document.createElement("div");
    o.className = "bs-frame", o.style.height = `${n}px`;
    const r = document.createElement("div");
    return r.className = "bs-skeleton", r.innerHTML = '<span class="bs-eq"><i></i><i></i><i></i><i></i></span>', o.appendChild(r), i.appendChild(o), tt.set(i, e), i.addEventListener("click", (s) => s.stopPropagation()), i;
  }
  function nt(e) {
    if (!e.isConnected)
      return;
    const t = tt.get(e), n = e.querySelector(".bs-frame");
    if (!t || !n || n.getAttribute("data-mounted") === "1")
      return;
    n.setAttribute("data-mounted", "1");
    const i = et(t.kind), o = document.createElement("iframe");
    o.className = "bs-iframe", o.setAttribute(
      "src",
      `https://open.spotify.com/embed/${t.kind}/${t.id}?utm_source=generator&theme=0`
    ), o.setAttribute("width", "100%"), o.setAttribute("height", String(i)), o.setAttribute("frameborder", "0"), o.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"), o.setAttribute("allowfullscreen", "true"), o.setAttribute("loading", "lazy"), o.setAttribute("title", `Spotify ${Xe(t.kind)}`);
    const r = window.setTimeout(() => {
      if (n.classList.contains("bs-loaded") || n.querySelector(".bs-tip"))
        return;
      const s = document.createElement("div");
      s.className = "bs-tip", s.textContent = "加载中…若一直空白，请确认当前网络可以访问 open.spotify.com", n.appendChild(s);
    }, 8e3);
    o.addEventListener("load", () => {
      var s;
      n.classList.add("bs-loaded"), window.clearTimeout(r), (s = n.querySelector(".bs-tip")) == null || s.remove();
    }), n.appendChild(o);
  }
  function Rt(e, t) {
    let n = e;
    for (; n.nextElementSibling instanceof HTMLElement && n.nextElementSibling.hasAttribute("data-bs-card"); )
      n = n.nextElementSibling;
    n.insertAdjacentElement("afterend", t);
  }
  class qt {
    constructor(t) {
      $(this, "cards", /* @__PURE__ */ new Map());
      $(this, "observer", null);
      $(this, "io", null);
      $(this, "timer", null);
      this.getSettings = t;
    }
    start() {
      this.observer || (typeof IntersectionObserver == "function" && (this.io = new IntersectionObserver(
        (t) => {
          var n;
          for (const i of t)
            i.isIntersecting && ((n = this.io) == null || n.unobserve(i.target), nt(i.target));
        },
        { rootMargin: "480px 0px" }
      )), this.scan(), this.observer = new MutationObserver((t) => this.onMutations(t)), this.observer.observe(document.body, { childList: !0, subtree: !0 }));
    }
    stop() {
      var t, n;
      (t = this.observer) == null || t.disconnect(), this.observer = null, (n = this.io) == null || n.disconnect(), this.io = null, this.timer !== null && (window.clearTimeout(this.timer), this.timer = null);
      for (const i of Array.from(this.cards.keys()))
        this.removeCard(i);
    }
    /** 设置变更后重建全部卡片 */
    rescan() {
      for (const t of Array.from(this.cards.keys()))
        this.removeCard(t);
      this.scan();
    }
    onMutations(t) {
      for (const n of t) {
        if (n.type !== "childList")
          continue;
        const i = n.target;
        if (!(i instanceof Element && i.closest("[data-bs-card]"))) {
          this.scheduleScan();
          return;
        }
      }
    }
    scheduleScan() {
      this.timer === null && (this.timer = window.setTimeout(() => {
        this.timer = null, this.scan();
      }, 120));
    }
    scan() {
      const t = document.querySelectorAll('a[href*="spotify.com"]'), n = /* @__PURE__ */ new Set();
      for (const i of Array.from(t)) {
        if (!i.isConnected || i.closest("[data-bs-card]") || i.closest(".bs-settings") || i.isContentEditable || i.closest('[contenteditable="true"]') || i.closest(".cm-editor"))
          continue;
        const o = Ot(i.getAttribute("href"));
        if (!o)
          continue;
        n.add(i);
        const r = this.cards.get(i);
        r != null && r.isConnected && r.getAttribute("data-href") === o.href || (r && this.removeCard(i), this.addCard(i, o));
      }
      for (const [i, o] of Array.from(this.cards.entries()))
        (!n.has(i) || !i.isConnected || !o.isConnected) && this.removeCard(i);
    }
    addCard(t, n) {
      const i = this.getSettings(), o = t.closest(".link-preview-block"), r = o ?? t.closest("p, li, blockquote, h1, h2, h3, h4, h5, h6");
      if (!r || !r.parentNode)
        return;
      const s = Ft(n, i);
      o && i.hideNative && (s.classList.add("bs-hide-native"), o.setAttribute("data-bs-hidden-by-card", "1"), o.style.display = "none"), r.tagName === "LI" ? r.appendChild(s) : Rt(r, s), this.cards.set(t, s), i.lazy && this.io ? this.io.observe(s) : nt(s);
    }
    removeCard(t) {
      var o;
      const n = this.cards.get(t);
      if (!n)
        return;
      try {
        (o = this.io) == null || o.unobserve(n);
      } catch {
      }
      const i = n.previousElementSibling;
      i instanceof HTMLElement && i.getAttribute("data-bs-hidden-by-card") === "1" && (i.style.display = "", i.removeAttribute("data-bs-hidden-by-card")), n.remove(), this.cards.delete(t);
    }
  }
  const it = "blinko-plugin-spotify-embed";
  System.register([], (e) => ({
    execute: () => {
      e(
        "default",
        class {
          constructor() {
            /** 告诉 Blinko：这个插件有设置面板 */
            $(this, "withSettingPanel", !0);
            $(this, "settings", { ...W });
            $(this, "scanner", new qt(() => this.settings));
            /** 由 Blinko 在插件设置弹窗里调用 */
            $(this, "renderSettingPanel", () => {
              const n = document.createElement("div");
              return Ht(/* @__PURE__ */ g(zt, { settings: this.settings, onSave: this.applySettings }), n), n;
            });
            /** 按用户维度持久化到服务端，localStorage 只做首屏缓存 */
            $(this, "applySettings", async (n) => {
              this.settings = D(n), await Pt(it, this.settings), this.scanner.rescan();
            });
            Object.assign(this, Ct);
          }
          async init() {
            this.initI18n(), It(), this.settings = await Et(it), this.scanner.start(), console.log("[spotify-card] ready", this.settings);
          }
          initI18n() {
            var n, i, o, r, s, _;
            (o = (i = (n = window.Blinko) == null ? void 0 : n.i18n) == null ? void 0 : i.addResourceBundle) == null || o.call(i, "en", "translation", Nt), (_ = (s = (r = window.Blinko) == null ? void 0 : r.i18n) == null ? void 0 : s.addResourceBundle) == null || _.call(s, "zh", "translation", At);
          }
          destroy() {
            this.scanner.stop(), Ut(), console.log("[spotify-card] destroyed");
          }
        }
      );
    }
  }));
})();
