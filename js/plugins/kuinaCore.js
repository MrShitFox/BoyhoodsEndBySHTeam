/* @license
 * ============================================================
 * Portions of this code are derived from software originally
 * Copyright © 2022 蔦森くいな.
 * The original software was decompiled and patched to create this version.
 *
 * This modified code is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 3
 * of the License, or (at your option) any later version.
 *
 * This modified code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 * ======================================================== */

function PD_Core() {
    throw new Error("This is a static class");
}
function PD_Util() {
    throw new Error("This is a static class");
}
function PD_Promise() {
    throw new Error("This is a static class");
}
function PD_Math() {
    throw new Error("This is a static class");
}
function PD_String() {
    throw new Error("This is a static class");
}
function PD_RandomSeed() {
    this.initialize.apply(this, arguments);
}
function JsonEx_Old() {
    throw new Error("This is a static class");
}
function PD_Json() {
    throw new Error("This is a static class");
}
function PD_File() {
    throw new Error("This is a static class");
}
function PD_Screen() {
    throw new Error("This is a static class");
}
function PD_Easing() {
    throw new Error("This is a static class");
}
if (
    ((function (e, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && "undefined" != typeof exports ? (module.exports = t()) : (e.Papa = t());
    })(this, function e() {
        "use strict";
        var t = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {},
            n = !t.document && !!t.postMessage,
            a = t.IS_PAPA_WORKER || !1,
            i = {},
            r = 0,
            s = {
                parse: function (n, a) {
                    var o = (a = a || {}).dynamicTyping || !1;
                    if ((M(o) && ((a.dynamicTypingFunction = o), (o = {})), (a.dynamicTyping = o), (a.transform = !!M(a.transform) && a.transform), a.worker && s.WORKERS_SUPPORTED)) {
                        var l = (function () {
                            if (!s.WORKERS_SUPPORTED) return !1;
                            var n,
                                a,
                                o =
                                    ((n = t.URL || t.webkitURL || null),
                                    (a = e.toString()),
                                    s.BLOB_URL ||
                                        (s.BLOB_URL = n.createObjectURL(
                                            new Blob(
                                                [
                                                    "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                                    "(",
                                                    a,
                                                    ")();",
                                                ],
                                                { type: "text/javascript" }
                                            )
                                        ))),
                                l = new t.Worker(o);
                            return (l.onmessage = f), (l.id = r++), (i[l.id] = l);
                        })();
                        return (
                            (l.userStep = a.step),
                            (l.userChunk = a.chunk),
                            (l.userComplete = a.complete),
                            (l.userError = a.error),
                            (a.step = M(a.step)),
                            (a.chunk = M(a.chunk)),
                            (a.complete = M(a.complete)),
                            (a.error = M(a.error)),
                            delete a.worker,
                            void l.postMessage({ input: n, config: a, workerId: l.id })
                        );
                    }
                    var g = null;
                    return (
                        s.NODE_STREAM_INPUT,
                        "string" == typeof n
                            ? ((n = (function (e) {
                                  return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
                              })(n)),
                              (g = a.download ? new h(a) : new u(a)))
                            : !0 === n.readable && M(n.read) && M(n.on)
                            ? (g = new p(a))
                            : ((t.File && n instanceof File) || n instanceof Object) && (g = new c(a)),
                        g.stream(n)
                    );
                },
                unparse: function (e, t) {
                    var n = !1,
                        a = !0,
                        i = ",",
                        r = "\r\n",
                        o = '"',
                        l = o + o,
                        h = !1,
                        c = null,
                        u = !1;
                    !(function () {
                        if ("object" == typeof t) {
                            if (
                                ("string" != typeof t.delimiter ||
                                    s.BAD_DELIMITERS.filter(function (e) {
                                        return -1 !== t.delimiter.indexOf(e);
                                    }).length ||
                                    (i = t.delimiter),
                                ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes),
                                ("boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines) || (h = t.skipEmptyLines),
                                "string" == typeof t.newline && (r = t.newline),
                                "string" == typeof t.quoteChar && (o = t.quoteChar),
                                "boolean" == typeof t.header && (a = t.header),
                                Array.isArray(t.columns))
                            ) {
                                if (0 === t.columns.length) throw new Error("Option columns is empty");
                                c = t.columns;
                            }
                            void 0 !== t.escapeChar && (l = t.escapeChar + o), ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (u = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
                        }
                    })();
                    var p = new RegExp(_(o), "g");
                    if (("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))) {
                        if (!e.length || Array.isArray(e[0])) return g(null, e, h);
                        if ("object" == typeof e[0]) return g(c || Object.keys(e[0]), e, h);
                    } else if ("object" == typeof e)
                        return (
                            "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                            Array.isArray(e.data) &&
                                (e.fields || (e.fields = (e.meta && e.meta.fields) || c),
                                e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []),
                                Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])),
                            g(e.fields || [], e.data || [], h)
                        );
                    throw new Error("Unable to serialize unrecognized input");
                    function g(e, t, n) {
                        var s = "";
                        "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                        var o = Array.isArray(e) && 0 < e.length,
                            l = !Array.isArray(t[0]);
                        if (o && a) {
                            for (var h = 0; h < e.length; h++) 0 < h && (s += i), (s += d(e[h], h));
                            0 < t.length && (s += r);
                        }
                        for (var c = 0; c < t.length; c++) {
                            var u = o ? e.length : t[c].length,
                                p = !1,
                                g = o ? 0 === Object.keys(t[c]).length : 0 === t[c].length;
                            if ((n && !o && (p = "greedy" === n ? "" === t[c].join("").trim() : 1 === t[c].length && 0 === t[c][0].length), "greedy" === n && o)) {
                                for (var _ = [], f = 0; f < u; f++) {
                                    var m = l ? e[f] : f;
                                    _.push(t[c][m]);
                                }
                                p = "" === _.join("").trim();
                            }
                            if (!p) {
                                for (var P = 0; P < u; P++) {
                                    0 < P && !g && (s += i);
                                    var D = o && l ? e[P] : P;
                                    s += d(t[c][D], P);
                                }
                                c < t.length - 1 && (!n || (0 < u && !g)) && (s += r);
                            }
                        }
                        return s;
                    }
                    function d(e, t) {
                        if (null == e) return "";
                        if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
                        var a = !1;
                        u && "string" == typeof e && u.test(e) && ((e = "'" + e), (a = !0));
                        var r = e.toString().replace(p, l);
                        return (a =
                            a ||
                            !0 === n ||
                            ("function" == typeof n && n(e, t)) ||
                            (Array.isArray(n) && n[t]) ||
                            (function (e, t) {
                                for (var n = 0; n < t.length; n++) if (-1 < e.indexOf(t[n])) return !0;
                                return !1;
                            })(r, s.BAD_DELIMITERS) ||
                            -1 < r.indexOf(i) ||
                            " " === r.charAt(0) ||
                            " " === r.charAt(r.length - 1))
                            ? o + r + o
                            : r;
                    }
                },
            };
        if (
            ((s.RECORD_SEP = String.fromCharCode(30)),
            (s.UNIT_SEP = String.fromCharCode(31)),
            (s.BYTE_ORDER_MARK = "\ufeff"),
            (s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK]),
            (s.WORKERS_SUPPORTED = !n && !!t.Worker),
            (s.NODE_STREAM_INPUT = 1),
            (s.LocalChunkSize = 10485760),
            (s.RemoteChunkSize = 5242880),
            (s.DefaultDelimiter = ","),
            (s.Parser = d),
            (s.ParserHandle = g),
            (s.NetworkStreamer = h),
            (s.FileStreamer = c),
            (s.StringStreamer = u),
            (s.ReadableStreamStreamer = p),
            t.jQuery)
        ) {
            var o = t.jQuery;
            o.fn.parse = function (e) {
                var n = e.config || {},
                    a = [];
                return (
                    this.each(function (e) {
                        if ("INPUT" !== o(this).prop("tagName").toUpperCase() || "file" !== o(this).attr("type").toLowerCase() || !t.FileReader || !this.files || 0 === this.files.length) return !0;
                        for (var i = 0; i < this.files.length; i++) a.push({ file: this.files[i], inputElem: this, instanceConfig: o.extend({}, n) });
                    }),
                    i(),
                    this
                );
                function i() {
                    if (0 !== a.length) {
                        var t,
                            n,
                            i,
                            l = a[0];
                        if (M(e.before)) {
                            var h = e.before(l.file, l.inputElem);
                            if ("object" == typeof h) {
                                if ("abort" === h.action) return "AbortError", (t = l.file), (n = l.inputElem), (i = h.reason), void (M(e.error) && e.error({ name: "AbortError" }, t, n, i));
                                if ("skip" === h.action) return void r();
                                "object" == typeof h.config && (l.instanceConfig = o.extend(l.instanceConfig, h.config));
                            } else if ("skip" === h) return void r();
                        }
                        var c = l.instanceConfig.complete;
                        (l.instanceConfig.complete = function (e) {
                            M(c) && c(e, l.file, l.inputElem), r();
                        }),
                            s.parse(l.file, l.instanceConfig);
                    } else M(e.complete) && e.complete();
                }
                function r() {
                    a.splice(0, 1), i();
                }
            };
        }
        function l(e) {
            (this._handle = null),
                (this._finished = !1),
                (this._completed = !1),
                (this._halted = !1),
                (this._input = null),
                (this._baseIndex = 0),
                (this._partialLine = ""),
                (this._rowCount = 0),
                (this._start = 0),
                (this._nextChunk = null),
                (this.isFirstChunk = !0),
                (this._completeResults = { data: [], errors: [], meta: {} }),
                function (e) {
                    var t = D(e);
                    (t.chunkSize = parseInt(t.chunkSize)), e.step || e.chunk || (t.chunkSize = null), (this._handle = new g(t)), ((this._handle.streamer = this)._config = t);
                }.call(this, e),
                (this.parseChunk = function (e, n) {
                    if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
                        var i = this._config.beforeFirstChunk(e);
                        void 0 !== i && (e = i);
                    }
                    (this.isFirstChunk = !1), (this._halted = !1);
                    var r = this._partialLine + e;
                    this._partialLine = "";
                    var o = this._handle.parse(r, this._baseIndex, !this._finished);
                    if (!this._handle.paused() && !this._handle.aborted()) {
                        var l = o.meta.cursor;
                        this._finished || ((this._partialLine = r.substring(l - this._baseIndex)), (this._baseIndex = l)), o && o.data && (this._rowCount += o.data.length);
                        var h = this._finished || (this._config.preview && this._rowCount >= this._config.preview);
                        if (a) t.postMessage({ results: o, workerId: s.WORKER_ID, finished: h });
                        else if (M(this._config.chunk) && !n) {
                            if ((this._config.chunk(o, this._handle), this._handle.paused() || this._handle.aborted())) return void (this._halted = !0);
                            (o = void 0), (this._completeResults = void 0);
                        }
                        return (
                            this._config.step ||
                                this._config.chunk ||
                                ((this._completeResults.data = this._completeResults.data.concat(o.data)), (this._completeResults.errors = this._completeResults.errors.concat(o.errors)), (this._completeResults.meta = o.meta)),
                            this._completed || !h || !M(this._config.complete) || (o && o.meta.aborted) || (this._config.complete(this._completeResults, this._input), (this._completed = !0)),
                            h || (o && o.meta.paused) || this._nextChunk(),
                            o
                        );
                    }
                    this._halted = !0;
                }),
                (this._sendError = function (e) {
                    M(this._config.error) ? this._config.error(e) : a && this._config.error && t.postMessage({ workerId: s.WORKER_ID, error: e, finished: !1 });
                });
        }
        function h(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
                l.call(this, e),
                (this._nextChunk = n
                    ? function () {
                          this._readChunk(), this._chunkLoaded();
                      }
                    : function () {
                          this._readChunk();
                      }),
                (this.stream = function (e) {
                    (this._input = e), this._nextChunk();
                }),
                (this._readChunk = function () {
                    if (this._finished) this._chunkLoaded();
                    else {
                        if (
                            ((t = new XMLHttpRequest()),
                            this._config.withCredentials && (t.withCredentials = this._config.withCredentials),
                            n || ((t.onload = I(this._chunkLoaded, this)), (t.onerror = I(this._chunkError, this))),
                            t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n),
                            this._config.downloadRequestHeaders)
                        ) {
                            var e = this._config.downloadRequestHeaders;
                            for (var a in e) t.setRequestHeader(a, e[a]);
                        }
                        if (this._config.chunkSize) {
                            var i = this._start + this._config.chunkSize - 1;
                            t.setRequestHeader("Range", "bytes=" + this._start + "-" + i);
                        }
                        try {
                            t.send(this._config.downloadRequestBody);
                        } catch (e) {
                            this._chunkError(e.message);
                        }
                        n && 0 === t.status && this._chunkError();
                    }
                }),
                (this._chunkLoaded = function () {
                    4 === t.readyState &&
                        (t.status < 200 || 400 <= t.status
                            ? this._chunkError()
                            : ((this._start += this._config.chunkSize ? this._config.chunkSize : t.responseText.length),
                              (this._finished =
                                  !this._config.chunkSize ||
                                  this._start >=
                                      (function (e) {
                                          var t = e.getResponseHeader("Content-Range");
                                          return null === t ? -1 : parseInt(t.substring(t.lastIndexOf("/") + 1));
                                      })(t)),
                              this.parseChunk(t.responseText)));
                }),
                (this._chunkError = function (e) {
                    var n = t.statusText || e;
                    this._sendError(new Error(n));
                });
        }
        function c(e) {
            var t, n;
            (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize), l.call(this, e);
            var a = "undefined" != typeof FileReader;
            (this.stream = function (e) {
                (this._input = e), (n = e.slice || e.webkitSlice || e.mozSlice), a ? (((t = new FileReader()).onload = I(this._chunkLoaded, this)), (t.onerror = I(this._chunkError, this))) : (t = new FileReaderSync()), this._nextChunk();
            }),
                (this._nextChunk = function () {
                    this._finished || (this._config.preview && !(this._rowCount < this._config.preview)) || this._readChunk();
                }),
                (this._readChunk = function () {
                    var e = this._input;
                    if (this._config.chunkSize) {
                        var i = Math.min(this._start + this._config.chunkSize, this._input.size);
                        e = n.call(e, this._start, i);
                    }
                    var r = t.readAsText(e, this._config.encoding);
                    a || this._chunkLoaded({ target: { result: r } });
                }),
                (this._chunkLoaded = function (e) {
                    (this._start += this._config.chunkSize), (this._finished = !this._config.chunkSize || this._start >= this._input.size), this.parseChunk(e.target.result);
                }),
                (this._chunkError = function () {
                    this._sendError(t.error);
                });
        }
        function u(e) {
            var t;
            l.call(this, (e = e || {})),
                (this.stream = function (e) {
                    return (t = e), this._nextChunk();
                }),
                (this._nextChunk = function () {
                    if (!this._finished) {
                        var e,
                            n = this._config.chunkSize;
                        return n ? ((e = t.substring(0, n)), (t = t.substring(n))) : ((e = t), (t = "")), (this._finished = !t), this.parseChunk(e);
                    }
                });
        }
        function p(e) {
            l.call(this, (e = e || {}));
            var t = [],
                n = !0,
                a = !1;
            (this.pause = function () {
                l.prototype.pause.apply(this, arguments), this._input.pause();
            }),
                (this.resume = function () {
                    l.prototype.resume.apply(this, arguments), this._input.resume();
                }),
                (this.stream = function (e) {
                    (this._input = e), this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
                }),
                (this._checkIsFinished = function () {
                    a && 1 === t.length && (this._finished = !0);
                }),
                (this._nextChunk = function () {
                    this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : (n = !0);
                }),
                (this._streamData = I(function (e) {
                    try {
                        t.push("string" == typeof e ? e : e.toString(this._config.encoding)), n && ((n = !1), this._checkIsFinished(), this.parseChunk(t.shift()));
                    } catch (e) {
                        this._streamError(e);
                    }
                }, this)),
                (this._streamError = I(function (e) {
                    this._streamCleanUp(), this._sendError(e);
                }, this)),
                (this._streamEnd = I(function () {
                    this._streamCleanUp(), (a = !0), this._streamData("");
                }, this)),
                (this._streamCleanUp = I(function () {
                    this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
                }, this));
        }
        function g(e) {
            var t,
                n,
                a,
                i = Math.pow(2, 53),
                r = -i,
                o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
                l = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
                h = this,
                c = 0,
                u = 0,
                p = !1,
                g = !1,
                f = [],
                m = { data: [], errors: [], meta: {} };
            if (M(e.step)) {
                var P = e.step;
                e.step = function (t) {
                    if (((m = t), v())) y();
                    else {
                        if ((y(), 0 === m.data.length)) return;
                        (c += t.data.length), e.preview && c > e.preview ? n.abort() : ((m.data = m.data[0]), P(m, h));
                    }
                };
            }
            function I(t) {
                return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length;
            }
            function y() {
                return (
                    m && a && (E("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + s.DefaultDelimiter + "'"), (a = !1)),
                    e.skipEmptyLines &&
                        (m.data = m.data.filter(function (e) {
                            return !I(e);
                        })),
                    v() &&
                        (function () {
                            if (m)
                                if (Array.isArray(m.data[0])) {
                                    for (var t = 0; v() && t < m.data.length; t++) m.data[t].forEach(n);
                                    m.data.splice(0, 1);
                                } else m.data.forEach(n);
                            function n(t, n) {
                                M(e.transformHeader) && (t = e.transformHeader(t, n)), f.push(t);
                            }
                        })(),
                    (function () {
                        if (!m || (!e.header && !e.dynamicTyping && !e.transform)) return m;
                        function t(t, n) {
                            var a,
                                i = e.header ? {} : [];
                            for (a = 0; a < t.length; a++) {
                                var r = a,
                                    s = t[a];
                                e.header && (r = a >= f.length ? "__parsed_extra" : f[a]), e.transform && (s = e.transform(s, r)), (s = U(r, s)), "__parsed_extra" === r ? ((i[r] = i[r] || []), i[r].push(s)) : (i[r] = s);
                            }
                            return (
                                e.header &&
                                    (a > f.length
                                        ? E("FieldMismatch", "TooManyFields", "Too many fields: expected " + f.length + " fields but parsed " + a, u + n)
                                        : a < f.length && E("FieldMismatch", "TooFewFields", "Too few fields: expected " + f.length + " fields but parsed " + a, u + n)),
                                i
                            );
                        }
                        var n = 1;
                        return !m.data.length || Array.isArray(m.data[0]) ? ((m.data = m.data.map(t)), (n = m.data.length)) : (m.data = t(m.data, 0)), e.header && m.meta && (m.meta.fields = f), (u += n), m;
                    })()
                );
            }
            function v() {
                return e.header && 0 === f.length;
            }
            function U(t, n) {
                return (
                    (a = t),
                    e.dynamicTypingFunction && void 0 === e.dynamicTyping[a] && (e.dynamicTyping[a] = e.dynamicTypingFunction(a)),
                    !0 === (e.dynamicTyping[a] || e.dynamicTyping)
                        ? "true" === n ||
                          "TRUE" === n ||
                          ("false" !== n &&
                              "FALSE" !== n &&
                              ((function (e) {
                                  if (o.test(e)) {
                                      var t = parseFloat(e);
                                      if (r < t && t < i) return !0;
                                  }
                                  return !1;
                              })(n)
                                  ? parseFloat(n)
                                  : l.test(n)
                                  ? new Date(n)
                                  : "" === n
                                  ? null
                                  : n))
                        : n
                );
                var a;
            }
            function E(e, t, n, a) {
                var i = { type: e, code: t, message: n };
                void 0 !== a && (i.row = a), m.errors.push(i);
            }
            (this.parse = function (i, r, o) {
                var l = e.quoteChar || '"';
                if (
                    (e.newline ||
                        (e.newline = (function (e, t) {
                            e = e.substring(0, 1048576);
                            var n = new RegExp(_(t) + "([^]*?)" + _(t), "gm"),
                                a = (e = e.replace(n, "")).split("\r"),
                                i = e.split("\n"),
                                r = 1 < i.length && i[0].length < a[0].length;
                            if (1 === a.length || r) return "\n";
                            for (var s = 0, o = 0; o < a.length; o++) "\n" === a[o][0] && s++;
                            return s >= a.length / 2 ? "\r\n" : "\r";
                        })(i, l)),
                    (a = !1),
                    e.delimiter)
                )
                    M(e.delimiter) && ((e.delimiter = e.delimiter(i)), (m.meta.delimiter = e.delimiter));
                else {
                    var h = (function (t, n, a, i, r) {
                        var o, l, h, c;
                        r = r || [",", "\t", "|", ";", s.RECORD_SEP, s.UNIT_SEP];
                        for (var u = 0; u < r.length; u++) {
                            var p = r[u],
                                g = 0,
                                _ = 0,
                                f = 0;
                            h = void 0;
                            for (var m = new d({ comments: i, delimiter: p, newline: n, preview: 10 }).parse(t), P = 0; P < m.data.length; P++)
                                if (a && I(m.data[P])) f++;
                                else {
                                    var D = m.data[P].length;
                                    (_ += D), void 0 !== h ? 0 < D && ((g += Math.abs(D - h)), (h = D)) : (h = D);
                                }
                            0 < m.data.length && (_ /= m.data.length - f), (void 0 === l || g <= l) && (void 0 === c || c < _) && 1.99 < _ && ((l = g), (o = p), (c = _));
                        }
                        return { successful: !!(e.delimiter = o), bestDelimiter: o };
                    })(i, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
                    h.successful ? (e.delimiter = h.bestDelimiter) : ((a = !0), (e.delimiter = s.DefaultDelimiter)), (m.meta.delimiter = e.delimiter);
                }
                var c = D(e);
                return e.preview && e.header && c.preview++, (t = i), (n = new d(c)), (m = n.parse(t, r, o)), y(), p ? { meta: { paused: !0 } } : m || { meta: { paused: !1 } };
            }),
                (this.paused = function () {
                    return p;
                }),
                (this.pause = function () {
                    (p = !0), n.abort(), (t = M(e.chunk) ? "" : t.substring(n.getCharIndex()));
                }),
                (this.resume = function () {
                    h.streamer._halted ? ((p = !1), h.streamer.parseChunk(t, !0)) : setTimeout(h.resume, 3);
                }),
                (this.aborted = function () {
                    return g;
                }),
                (this.abort = function () {
                    (g = !0), n.abort(), (m.meta.aborted = !0), M(e.complete) && e.complete(m), (t = "");
                });
        }
        function _(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function d(e) {
            var t,
                n = (e = e || {}).delimiter,
                a = e.newline,
                i = e.comments,
                r = e.step,
                o = e.preview,
                l = e.fastMode,
                h = (t = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar);
            if ((void 0 !== e.escapeChar && (h = e.escapeChar), ("string" != typeof n || -1 < s.BAD_DELIMITERS.indexOf(n)) && (n = ","), i === n)) throw new Error("Comment character same as delimiter");
            !0 === i ? (i = "#") : ("string" != typeof i || -1 < s.BAD_DELIMITERS.indexOf(i)) && (i = !1), "\n" !== a && "\r" !== a && "\r\n" !== a && (a = "\n");
            var c = 0,
                u = !1;
            (this.parse = function (s, p, g) {
                if ("string" != typeof s) throw new Error("Input must be a string");
                var d = s.length,
                    f = n.length,
                    m = a.length,
                    P = i.length,
                    D = M(r),
                    I = [],
                    y = [],
                    v = [],
                    U = (c = 0);
                if (!s) return K();
                if (e.header && !p) {
                    var E = s.split(a)[0].split(n),
                        b = [],
                        S = {},
                        w = !1;
                    for (var F in E) {
                        var B = E[F];
                        M(e.transformHeader) && (B = e.transformHeader(B, F));
                        var T = B,
                            C = S[B] || 0;
                        for (0 < C && ((w = !0), (T = B + "_" + C)), S[B] = C + 1; b.includes(T); ) T = T + "_" + C;
                        b.push(T);
                    }
                    if (w) {
                        var x = s.split(a);
                        (x[0] = b.join(n)), (s = x.join(a));
                    }
                }
                if (l || (!1 !== l && -1 === s.indexOf(t))) {
                    for (var O = s.split(a), A = 0; A < O.length; A++) {
                        if (((v = O[A]), (c += v.length), A !== O.length - 1)) c += a.length;
                        else if (g) return K();
                        if (!i || v.substring(0, P) !== i) {
                            if (D) {
                                if (((I = []), W(v.split(n)), H(), u)) return K();
                            } else W(v.split(n));
                            if (o && o <= A) return (I = I.slice(0, o)), K(!0);
                        }
                    }
                    return K();
                }
                for (var k = s.indexOf(n, c), R = s.indexOf(a, c), N = new RegExp(_(h) + _(t), "g"), j = s.indexOf(t, c); ; )
                    if (s[c] !== t)
                        if (i && 0 === v.length && s.substring(c, c + P) === i) {
                            if (-1 === R) return K();
                            (c = R + m), (R = s.indexOf(a, c)), (k = s.indexOf(n, c));
                        } else if (-1 !== k && (k < R || -1 === R)) v.push(s.substring(c, k)), (c = k + f), (k = s.indexOf(n, c));
                        else {
                            if (-1 === R) break;
                            if ((v.push(s.substring(c, R)), z(R + m), D && (H(), u))) return K();
                            if (o && I.length >= o) return K(!0);
                        }
                    else
                        for (j = c, c++; ; ) {
                            if (-1 === (j = s.indexOf(t, j + 1))) return g || y.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: I.length, index: c }), Y();
                            if (j === d - 1) return Y(s.substring(c, j).replace(N, t));
                            if (t !== h || s[j + 1] !== h) {
                                if (t === h || 0 === j || s[j - 1] !== h) {
                                    -1 !== k && k < j + 1 && (k = s.indexOf(n, j + 1)), -1 !== R && R < j + 1 && (R = s.indexOf(a, j + 1));
                                    var G = X(-1 === R ? k : Math.min(k, R));
                                    if (s.substr(j + 1 + G, f) === n) {
                                        v.push(s.substring(c, j).replace(N, t)), s[(c = j + 1 + G + f)] !== t && (j = s.indexOf(t, c)), (k = s.indexOf(n, c)), (R = s.indexOf(a, c));
                                        break;
                                    }
                                    var L = X(R);
                                    if (s.substring(j + 1 + L, j + 1 + L + m) === a) {
                                        if ((v.push(s.substring(c, j).replace(N, t)), z(j + 1 + L + m), (k = s.indexOf(n, c)), (j = s.indexOf(t, c)), D && (H(), u))) return K();
                                        if (o && I.length >= o) return K(!0);
                                        break;
                                    }
                                    y.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: I.length, index: c }), j++;
                                }
                            } else j++;
                        }
                return Y();
                function W(e) {
                    I.push(e), (U = c);
                }
                function X(e) {
                    var t = 0;
                    if (-1 !== e) {
                        var n = s.substring(j + 1, e);
                        n && "" === n.trim() && (t = n.length);
                    }
                    return t;
                }
                function Y(e) {
                    return g || (void 0 === e && (e = s.substring(c)), v.push(e), (c = d), W(v), D && H()), K();
                }
                function z(e) {
                    (c = e), W(v), (v = []), (R = s.indexOf(a, c));
                }
                function K(e) {
                    return { data: I, errors: y, meta: { delimiter: n, linebreak: a, aborted: u, truncated: !!e, cursor: U + (p || 0) } };
                }
                function H() {
                    r(K()), (I = []), (y = []);
                }
            }),
                (this.abort = function () {
                    u = !0;
                }),
                (this.getCharIndex = function () {
                    return c;
                });
        }
        function f(e) {
            var t = e.data,
                n = i[t.workerId],
                a = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
                var r = {
                    abort: function () {
                        (a = !0), m(t.workerId, { data: [], errors: [], meta: { aborted: !0 } });
                    },
                    pause: P,
                    resume: P,
                };
                if (M(n.userStep)) {
                    for (var s = 0; s < t.results.data.length && (n.userStep({ data: t.results.data[s], errors: t.results.errors, meta: t.results.meta }, r), !a); s++);
                    delete t.results;
                } else M(n.userChunk) && (n.userChunk(t.results, r, t.file), delete t.results);
            }
            t.finished && !a && m(t.workerId, t.results);
        }
        function m(e, t) {
            var n = i[e];
            M(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
        }
        function P() {
            throw new Error("Not implemented.");
        }
        function D(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var n in e) t[n] = D(e[n]);
            return t;
        }
        function I(e, t) {
            return function () {
                e.apply(t, arguments);
            };
        }
        function M(e) {
            return "function" == typeof e;
        }
        return (
            a &&
                (t.onmessage = function (e) {
                    var n = e.data;
                    if ((void 0 === s.WORKER_ID && n && (s.WORKER_ID = n.workerId), "string" == typeof n.input)) t.postMessage({ workerId: s.WORKER_ID, results: s.parse(n.input, n.config), finished: !0 });
                    else if ((t.File && n.input instanceof File) || n.input instanceof Object) {
                        var a = s.parse(n.input, n.config);
                        a && t.postMessage({ workerId: s.WORKER_ID, results: a, finished: !0 });
                    }
                }),
            ((h.prototype = Object.create(l.prototype)).constructor = h),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((u.prototype = Object.create(u.prototype)).constructor = u),
            ((p.prototype = Object.create(l.prototype)).constructor = p),
            s
        );
    }),
    (PD_Core.isTkoolMZ = window.Utils && "MZ" === window.Utils.RPGMAKER_NAME),
    PD_Core.isTkoolMZ && ((PD_Core.gameSpeed = 0), (PD_Core.updateCount = 0), (PD_Core.mouseX = 0), (PD_Core.mouseY = 0)),
    (function () {
        "use strict";
        if (PD_Core.isTkoolMZ) {
            Utils.isNwjs && (document.body.style.overflow = "hidden");
            const e = Graphics.initialize;
            (Graphics.initialize = function () {
                if (e.call(this)) return !0;
                throw new Error("このゲームを遊ぶ時は、ブラウザのシステム設定から「ハードウェア アクセラレーション」を有効にしてください");
            }),
                (StorageManager.localFileDirectoryPath = function () {
                    return "save/";
                });
            const t = SceneManager.initialize;
            SceneManager.initialize = function () {
                (PD_Core.updateCount = 0), t.call(this);
            };
            const n = SceneManager.updateScene;
            SceneManager.updateScene = function () {
                n.call(this), PD_Core.updateCount++;
            };
            const a = TouchInput._onMouseMove;
            TouchInput._onMouseMove = function (e) {
                a.call(this, e), (PD_Core.mouseX = Graphics.pageToCanvasX(e.pageX)), (PD_Core.mouseY = Graphics.pageToCanvasY(e.pageY));
            };
            let i = Utils.isOptionValid;
            Utils.isOptionValid = function (e) {
                return !!i.call(this, e) || !(!window.AtsumaruAPI || !AtsumaruAPI.query || AtsumaruAPI.query.param1 !== e);
            };
            const r = SceneManager.initialize;
            SceneManager.initialize = function () {
                (PD_Core.gameSpeed = 1), r.call(this);
            };
            const s = SceneManager.updateMain;
            SceneManager.updateMain = function () {
                if ((s.call(this), PD_Core.gameSpeed > 1)) for (let e = 1; e < PD_Core.gameSpeed; e++) s.call(this);
            };
            const o = Window_Message.prototype.isTriggered;
            (Window_Message.prototype.isTriggered = function () {
                return PD_Core.gameSpeed > 1 && Input.isPressed("shift") ? PD_Core.updateCount % Input.keyRepeatInterval == 0 : o.call(this);
            }),
                Utils.isOptionValid("test") &&
                    (window.addEventListener("keydown", function () {
                        event.keyCode >= 50 && event.keyCode <= 57 && (PD_Core.gameSpeed = event.keyCode - 48);
                    }),
                    window.addEventListener("keyup", function () {
                        event.keyCode >= 50 && event.keyCode <= 57 && (PD_Core.gameSpeed = 1);
                    }),
                    window.addEventListener("touchstart", function (e) {
                        PD_Core.gameSpeed = e.touches.length;
                    }),
                    window.addEventListener("touchend", function (e) {
                        0 === e.touches.length && 1 !== PD_Core.gameSpeed && (PD_Core.gameSpeed = 1);
                    })),
                (ImageManager.loadImage = function (e) {
                    return this.loadBitmap(PD_UIManager.loadImageFolderName + "/", e);
                });
            const l = ImageManager.loadBitmap;
            ImageManager.loadBitmap = function (e, t, n, a) {
                if (t && t.includes("/")) {
                    const n = t.split("/");
                    (e += t.slice(0, -n[n.length - 1].length)), (t = n[n.length - 1]);
                }
                return l.call(this, e, t, n, a);
            };
            const h = AudioManager.createBuffer;
            AudioManager.createBuffer = function (e, t) {
                if (t && t.includes("/")) {
                    const n = t.split("/");
                    (e += t.slice(0, -n[n.length - 1].length)), (t = n[n.length - 1]);
                }
                return h.call(this, e, t);
            };
            const c = SceneManager.onError;
            SceneManager.onError = function (e) {
                if (Utils.isNwjs() && Utils.isOptionValid("test") && "EBUSY" === e.code) return console.error(e), void SceneManager.resume();
                c.apply(this, arguments);
            };
            const u = SceneManager.catchException;
            SceneManager.catchException = function (e) {
                if (Utils.isNwjs() && Utils.isOptionValid("test") && "EBUSY" === e.code) return console.error(e), void SceneManager.resume();
                u.apply(this, arguments);
            };
        }
    })(),
    (PD_Util.copyClipboad = function (e) {
        nw.Clipboard.get().set(e, "text");
    }),
    (PD_Util.resizeWindow = function (e, t) {
        const n = window.outerWidth - window.innerWidth,
            a = window.outerHeight - window.innerHeight;
        window.resizeTo(Math.round(e + n), Math.round(t + a));
    }),
    (PD_Util.getDate = function (e) {
        return e ? new Date(e) : window.AtsumaruAPI && AtsumaruAPI.isAtsumaru() ? new Date(AtsumaruAPI.time_getServerTime()) : new Date();
    }),
    (PD_Util.getTime = function (e) {
        if (!e) {
            if (window.AtsumaruAPI && AtsumaruAPI.isAtsumaru()) return AtsumaruAPI.time_getServerTime();
            e = new Date();
        }
        return e.getTime();
    }),
    (PD_Util.getTime_second = function (e) {
        return Math.floor(PD_Util.getTime(e) / 1e3);
    }),
    (PD_Util.getTime_minute = function (e) {
        return Math.floor(PD_Util.getTime(e) / 6e4);
    }),
    (PD_Util.getTime_hour = function (e) {
        return Math.floor(PD_Util.getTime(e) / 36e5);
    }),
    (PD_Util.getTime_week = function (e) {
        let t = PD_Util.getDate();
        if (e) {
            const n = Math.floor(e / 1e4),
                a = Math.floor((e % 1e4) / 100),
                i = Math.floor(e % 100);
            t = new Date(n + "-" + a + "-" + i);
        }
        return t.getDay();
    }),
    (PD_Util.getTime_addDay = function (e, t) {
        return t || (t = PD_Util.getDate()), t.setDate(t.getDate() + e), t;
    }),
    (PD_Util.getTime_addDay_ymd = function (e, t) {
        let n;
        return (n = t ? PD_Util.ymd_to_Date(t) : PD_Util.getDate()), n.setDate(n.getDate() + e), PD_Util.getTime_ymd(n);
    }),
    (PD_Util.getTime_ymd = function (e) {
        e || (e = PD_Util.getDate());
        const t = "" + e.getFullYear(),
            n = ("00" + (e.getMonth() + 1)).slice(-2),
            a = ("00" + e.getDate()).slice(-2);
        return Number(t + n + a);
    }),
    (PD_Util.ymd_to_Date = function (e) {
        const t = Math.floor(e / 1e4),
            n = Math.floor((e % 1e4) / 100),
            a = Math.floor(e % 100);
        return new Date(t + "-" + n + "-" + a);
    }),
    (PD_Util.strToReturnFunc = function (e) {
        return Function("return (" + e + ");");
    }),
    (PD_Util.strToFunc = function (e) {
        return Function(e);
    }),
    (PD_Util.FuncToString = function (e) {
        return "string" == typeof e
            ? e
            : e
                  .toString()
                  .replace(/^\s+|\s+$|\r?\n/g, "")
                  .replace(/^function.*\(\s*\)\s*{|^\(\s*\)\s*=>\s*{|}$/g, "")
                  .replace(/ +/g, " ");
    }),
    (PD_Util.assign = function (e) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1, a = arguments.length; n < a; n++) {
            var i = arguments[n];
            if (null != i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        }
        return t;
    }),
    (PD_Util.orderChildren = function (e, t, n) {
        const a = [e];
        let i = 0;
        for (; i < a.length; ) {
            n && n(a[i]);
            const e = a[i][t];
            if (e) for (let t = 0, n = e.length; t < n; t++) a.splice(i + t + 1, 0, e[t]);
            i += 1;
        }
        return a;
    }),
    (PD_Util.DoubleToSingle = function (e) {
        return e.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) - 65248);
        });
    }),
    (PD_Util.SingleToDouble = function (e) {
        return e.replace(/[A-Za-z0-9]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) + 65248);
        });
    }),
    (PD_Util.DoubleToSingle_kana = function (e) {
        const t = {
                ガ: "ｶﾞ",
                ギ: "ｷﾞ",
                グ: "ｸﾞ",
                ゲ: "ｹﾞ",
                ゴ: "ｺﾞ",
                ザ: "ｻﾞ",
                ジ: "ｼﾞ",
                ズ: "ｽﾞ",
                ゼ: "ｾﾞ",
                ゾ: "ｿﾞ",
                ダ: "ﾀﾞ",
                ヂ: "ﾁﾞ",
                ヅ: "ﾂﾞ",
                デ: "ﾃﾞ",
                ド: "ﾄﾞ",
                バ: "ﾊﾞ",
                ビ: "ﾋﾞ",
                ブ: "ﾌﾞ",
                ベ: "ﾍﾞ",
                ボ: "ﾎﾞ",
                パ: "ﾊﾟ",
                ピ: "ﾋﾟ",
                プ: "ﾌﾟ",
                ペ: "ﾍﾟ",
                ポ: "ﾎﾟ",
                ヴ: "ｳﾞ",
                ヷ: "ﾜﾞ",
                ヺ: "ｦﾞ",
                ア: "ｱ",
                イ: "ｲ",
                ウ: "ｳ",
                エ: "ｴ",
                オ: "ｵ",
                カ: "ｶ",
                キ: "ｷ",
                ク: "ｸ",
                ケ: "ｹ",
                コ: "ｺ",
                サ: "ｻ",
                シ: "ｼ",
                ス: "ｽ",
                セ: "ｾ",
                ソ: "ｿ",
                タ: "ﾀ",
                チ: "ﾁ",
                ツ: "ﾂ",
                テ: "ﾃ",
                ト: "ﾄ",
                ナ: "ﾅ",
                ニ: "ﾆ",
                ヌ: "ﾇ",
                ネ: "ﾈ",
                ノ: "ﾉ",
                ハ: "ﾊ",
                ヒ: "ﾋ",
                フ: "ﾌ",
                ヘ: "ﾍ",
                ホ: "ﾎ",
                マ: "ﾏ",
                ミ: "ﾐ",
                ム: "ﾑ",
                メ: "ﾒ",
                モ: "ﾓ",
                ヤ: "ﾔ",
                ユ: "ﾕ",
                ヨ: "ﾖ",
                ラ: "ﾗ",
                リ: "ﾘ",
                ル: "ﾙ",
                レ: "ﾚ",
                ロ: "ﾛ",
                ワ: "ﾜ",
                ヲ: "ｦ",
                ン: "ﾝ",
                ァ: "ｧ",
                ィ: "ｨ",
                ゥ: "ｩ",
                ェ: "ｪ",
                ォ: "ｫ",
                ッ: "ｯ",
                ャ: "ｬ",
                ュ: "ｭ",
                ョ: "ｮ",
                "。": "｡",
                "、": "､",
                ー: "ｰ",
                "「": "｢",
                "」": "｣",
                "・": "･",
            },
            n = new RegExp("(" + Object.keys(t).join("|") + ")", "g");
        return e
            .replace(n, function (e) {
                return t[e];
            })
            .replace(/゛/g, "ﾞ")
            .replace(/゜/g, "ﾟ");
    }),
    (PD_Util.SingleToDouble_kana = function (e) {
        const t = {
                ｶﾞ: "ガ",
                ｷﾞ: "ギ",
                ｸﾞ: "グ",
                ｹﾞ: "ゲ",
                ｺﾞ: "ゴ",
                ｻﾞ: "ザ",
                ｼﾞ: "ジ",
                ｽﾞ: "ズ",
                ｾﾞ: "ゼ",
                ｿﾞ: "ゾ",
                ﾀﾞ: "ダ",
                ﾁﾞ: "ヂ",
                ﾂﾞ: "ヅ",
                ﾃﾞ: "デ",
                ﾄﾞ: "ド",
                ﾊﾞ: "バ",
                ﾋﾞ: "ビ",
                ﾌﾞ: "ブ",
                ﾍﾞ: "ベ",
                ﾎﾞ: "ボ",
                ﾊﾟ: "パ",
                ﾋﾟ: "ピ",
                ﾌﾟ: "プ",
                ﾍﾟ: "ペ",
                ﾎﾟ: "ポ",
                ｳﾞ: "ヴ",
                ﾜﾞ: "ヷ",
                ｦﾞ: "ヺ",
                ｱ: "ア",
                ｲ: "イ",
                ｳ: "ウ",
                ｴ: "エ",
                ｵ: "オ",
                ｶ: "カ",
                ｷ: "キ",
                ｸ: "ク",
                ｹ: "ケ",
                ｺ: "コ",
                ｻ: "サ",
                ｼ: "シ",
                ｽ: "ス",
                ｾ: "セ",
                ｿ: "ソ",
                ﾀ: "タ",
                ﾁ: "チ",
                ﾂ: "ツ",
                ﾃ: "テ",
                ﾄ: "ト",
                ﾅ: "ナ",
                ﾆ: "ニ",
                ﾇ: "ヌ",
                ﾈ: "ネ",
                ﾉ: "ノ",
                ﾊ: "ハ",
                ﾋ: "ヒ",
                ﾌ: "フ",
                ﾍ: "ヘ",
                ﾎ: "ホ",
                ﾏ: "マ",
                ﾐ: "ミ",
                ﾑ: "ム",
                ﾒ: "メ",
                ﾓ: "モ",
                ﾔ: "ヤ",
                ﾕ: "ユ",
                ﾖ: "ヨ",
                ﾗ: "ラ",
                ﾘ: "リ",
                ﾙ: "ル",
                ﾚ: "レ",
                ﾛ: "ロ",
                ﾜ: "ワ",
                ｦ: "ヲ",
                ﾝ: "ン",
                ｧ: "ァ",
                ｨ: "ィ",
                ｩ: "ゥ",
                ｪ: "ェ",
                ｫ: "ォ",
                ｯ: "ッ",
                ｬ: "ャ",
                ｭ: "ュ",
                ｮ: "ョ",
                "｡": "。",
                "､": "、",
                ｰ: "ー",
                "｢": "「",
                "｣": "」",
                "･": "・",
            },
            n = new RegExp("(" + Object.keys(t).join("|") + ")", "g");
        return e
            .replace(n, function (e) {
                return t[e];
            })
            .replace(/ﾞ/g, "゛")
            .replace(/ﾟ/g, "゜");
    }),
    (PD_Util.hiraganaToKatakana = function (e) {
        return e.replace(/[ぁ-ん]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) + 96);
        });
    }),
    (PD_Util.KatakanaToHiragana = function (e) {
        return e.replace(/[ァ-ン]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) - 96);
        });
    }),
    (PD_Util.splitControlString = function (e, t = !1) {
        const n = [];
        let a = null,
            i = null;
        t && (e = (e = e.replace(/\\/g, "")).replace(/\x1b\x1b/g, "\\"));
        for (let t = 0; t < e.length - 1; t++) {
            const r = e[t];
            if (r.charCodeAt(0) < 32)
                if ("\n" === r) e.slice(0, t) && n.push({ text: e.slice(0, t) }), n.push({ code: "\n" }), (e = e.slice(t + 1)), (t = -1);
                else if ("" === r) {
                    e.slice(0, t) && n.push({ text: e.slice(0, t) }), (a = null), (i = null);
                    const r = /^[$.|^!><{}\\]|^[A-Z]+/i.exec(e.slice(t + 1));
                    if (r) {
                        a = r[0].toUpperCase();
                        const s = /^\[[^\]]+\]/.exec(e.slice(t + 1 + a.length));
                        s && (i = s[0].slice(1, -1)), (e = i ? e.slice(t + 1 + a.length + i.length + 2) : e.slice(t + 1 + a.length)), (t = -1), i ? n.push({ code: a, param: i }) : n.push({ code: a });
                    }
                }
        }
        return e && n.push({ text: e }), n;
    }),
    (PD_Util.convertTkoolParamTexts = function (e, t = !1) {
        for (t && (e = (e = e.replace(/\\/g, "")).replace(/\x1b\x1b/g, "\\")); e.match(/\x1bV\[(\d+)\]/gi); ) e = e.replace(/\x1bV\[(\d+)\]/gi, (e, t) => $gameVariables.value(parseInt(t)));
        return (e = (e = (e = e.replace(/\x1bN\[(\d+)\]/gi, (e, t) => this.actorName(parseInt(t)))).replace(/\x1bP\[(\d+)\]/gi, (e, t) => this.partyMemberName(parseInt(t)))).replace(/\x1bG/gi, TextManager.currencyUnit));
    }),
    PD_Util.ngWord_RegExp,
    (PD_Util.check_NGwords = function (e, t) {
        if (!PD_Util.ngWord_RegExp) {
            let t = e.join("|");
            (t = t.toLowerCase()), (t = PD_Util.DoubleToSingle(t)), (t = PD_Util.SingleToDouble_kana(t)), (t = PD_Util.hiraganaToKatakana(t)), (PD_Util.ngWord_RegExp = new RegExp(t, "igu"));
        }
        return (t = (t = t.replace(/ |　/g, "")).toLowerCase()), (t = PD_Util.DoubleToSingle(t)), (t = PD_Util.SingleToDouble_kana(t)), null === (t = PD_Util.hiraganaToKatakana(t)).match(PD_Util.ngWord_RegExp);
    }),
    (PD_Util.hexToRgb = function (e) {
        return (
            "#" == e.slice(0, 1) && (e = e.slice(1)),
            3 == e.length && (e = e.slice(0, 1) + e.slice(0, 1) + e.slice(1, 2) + e.slice(1, 2) + e.slice(2, 3) + e.slice(2, 3)),
            [e.slice(0, 2), e.slice(2, 4), e.slice(4, 6)].map((e) => parseInt(e, 16))
        );
    }),
    (PD_Util.rgbToHsl = function (e, t, n) {
        var a = Math.min(e, t, n),
            i = Math.max(e, t, n),
            r = 0,
            s = 0,
            o = (a + i) / 2,
            l = i - a;
        return l > 0 && ((r = e === i ? (((t - n) / l + 6) % 6) * 60 : t === i ? 60 * ((n - e) / l + 2) : 60 * ((e - t) / l + 4)), (s = l / (255 - Math.abs(2 * o - 255)))), [r, s, o];
    }),
    (PD_Util.hslToRgb = function (e, t, n) {
        var a = (255 - Math.abs(2 * n - 255)) * t,
            i = n - a / 2,
            r = a + i,
            s = a * (1 - Math.abs(((e / 60) % 2) - 1)) + i;
        return e < 60 ? [r, s, i] : e < 120 ? [s, r, i] : e < 180 ? [i, r, s] : e < 240 ? [i, s, r] : e < 300 ? [s, i, r] : [r, i, s];
    }),
    (PD_Promise.runArray = function (e) {
        return e.reduce(function (e, t) {
            return e.then(t);
        }, Promise.resolve());
    }),
    (PD_Promise.all = async function (e = [], t = 10) {
        let n = 0,
            a = [];
        for (let i = 0; i < t; i++)
            a.push(
                new Promise((t) => {
                    !(async function a(i) {
                        if (i < e.length) return await e[i](), void a(n++);
                        t();
                    })(n++);
                })
            );
        await Promise.all(a);
    }),
    (PD_Promise.retry = function (e, t, n) {
        const a = function (i, r) {
            e()
                .then((e) => {
                    t(e)
                        ? i(e)
                        : setTimeout(() => {
                              a(i, r);
                          }, n);
                })
                .catch((e) => {
                    r(e);
                });
        };
        return new Promise(a);
    }),
    (PD_Math.placeRound = function (e, t) {
        return Math.round(e * t) / t;
    }),
    (PD_Math.placeCeil = function (e, t) {
        return Math.ceil(e * t) / t;
    }),
    (PD_Math.placeFloor = function (e, t) {
        return Math.floor(e * t) / t;
    }),
    (PD_Math.minInArray = function (e) {
        for (var t = Number.POSITIVE_INFINITY, n = 0, a = e.length; n < a; n++) t > e[n] && (t = e[n]);
        return t;
    }),
    (PD_Math.maxInArray = function (e) {
        for (var t = Number.NEGATIVE_INFINITY, n = 0, a = e.length; n < a; n++) t < e[n] && (t = e[n]);
        return t;
    }),
    (PD_Math.randRange = function (e, t) {
        return Math.floor(Math.random() * (t + 1 - e)) + e;
    }),
    (PD_Math.randRangeFloat = function (e, t) {
        return Math.random() * (t - e) + e;
    }),
    (PD_Math.randShuffleArray = function (e) {
        const t = e.slice();
        let n = t.length;
        for (; n; ) {
            const e = Math.floor(Math.random() * n),
                a = t[--n];
            (t[n] = t[e]), (t[e] = a);
        }
        return t;
    }),
    (PD_Math.randString = function (e = 0, t = "abcdefghijklmnopqrstuvwxyz0123456789") {
        let n = "";
        for (let a = 0; a < e; a++) n += t[Math.floor(Math.random() * t.length)];
        return n;
    }),
    (PD_Math.getDistance = function (e, t, n, a) {
        return Math.sqrt((n - e) * (n - e) + (a - t) * (a - t));
    }),
    (PD_Math.getRadian = function (e, t, n, a) {
        return Math.atan2(a - t, n - e);
    }),
    (PD_Math.getEllipsePosition = function (e, t, n, a, i) {
        return { x: e + a * Math.cos(n), y: t + i * Math.sin(n) };
    }),
    (PD_Math.isHitPointRect = function (e, t, n, a, i, r) {
        return e >= n && e <= n + i && t >= a && t <= a + r;
    }),
    (PD_Math.isHitPointRotateRect = function (e, t, n, a, i, r, s, o, l) {
        var h = this.getDistance(s, o, e, t),
            c = this.getRadian(s, o, e, t),
            u = this.getEllipsePosition(s, o, c - l, h, h);
        return this.isHitPointRect(u.x, u.y, n, a, i, r);
    }),
    (PD_Math.getCenterRotateRect = function (e, t, n, a, i, r, s) {
        var o = n + i / 2,
            l = a + r / 2,
            h = PD_Math.getDistance(e, t, o, l),
            c = PD_Math.getRadian(e, t, o, l);
        return PD_Math.getEllipsePosition(e, t, s + c, h, h);
    }),
    (PD_Math.isHitPointCircle = function (e, t, n, a, i) {
        return (e - n) * (e - n) + (t - a) * (t - a) <= i * i;
    }),
    (PD_Math.isHitPointRotateEllipse = function (e, t, n, a, i, r, s) {
        var o = e - n,
            l = t - a,
            h = o * Math.cos(s) + l * Math.sin(s),
            c = (i / r) * (-o * Math.sin(s) + l * Math.cos(s));
        return h * h + c * c <= i * i;
    }),
    (PD_String.charType = function (e) {
        var t = e.charCodeAt(0);
        return (t >= 0 && t < 129) || 63728 == t || (t >= 65377 && t < 65440) || (t >= 63729 && t < 63732) ? 1 : 2;
    }),
    (PD_String.charCount = function (e) {
        for (var t = 0, n = 0, a = e.length; n < a; n++) {
            var i = e.charCodeAt(n);
            t += (i >= 0 && i < 129) || 63728 == i || (i >= 65377 && i < 65440) || (i >= 63729 && i < 63732) ? 1 : 2;
        }
        return t;
    }),
    (PD_String.spliceLine = function (e, t) {
        let n = "",
            a = 0;
        for (let i = 0, r = e.length; i < r && ((n += e[i]), (a += PD_String.charType(e[i])), !(a >= t)); i++);
        return n;
    }),
    (PD_String.splitLines = function (e, t) {
        const n = e.split("\n"),
            a = [];
        for (let e = 0, i = n.length; e < i; e++) {
            let i = 1,
                r = 0;
            a.push("");
            for (let s = 0, o = n[e], l = o.length; s < l; s++) r > t * i - 2 && (a.push(""), i++), (a[a.length - 1] += o[s]), (r += PD_String.charType(o[s]));
        }
        return a;
    }),
    (PD_RandomSeed.prototype.initialize = function (e) {
        (this.x = 123456789), (this.y = 362436069), (this.z = 521288629), (this.w = 88675123), "number" == typeof e && (this.w = e);
    }),
    (PD_RandomSeed.prototype.random = function (e, t) {
        let n;
        (n = this.x ^ (this.x << 11)), (this.x = this.y), (this.y = this.z), (this.z = this.w);
        const a = (this.w = this.w ^ (this.w >>> 19) ^ n ^ (n >>> 8));
        if (void 0 !== e && void 0 !== t) {
            return e + (Math.abs(a) % (t + 1 - e));
        }
        return a;
    }),
    (JsonEx_Old.maxDepth = 100),
    (JsonEx_Old._id = 1),
    (JsonEx_Old._generateId = function () {
        return JsonEx_Old._id++;
    }),
    (JsonEx_Old.stringify = function (e) {
        var t = [];
        JsonEx_Old._id = 1;
        var n = JSON.stringify(this._encode(e, t, 0));
        return this._cleanMetadata(e), this._restoreCircularReference(t), n;
    }),
    (JsonEx_Old._restoreCircularReference = function (e) {
        e.forEach(function (e) {
            var t = e[0],
                n = e[1],
                a = e[2];
            n[t] = a;
        });
    }),
    (JsonEx_Old.parse = function (e) {
        var t = [],
            n = {},
            a = this._decode(JSON.parse(e), t, n);
        return this._cleanMetadata(a), this._linkCircularReference(a, t, n), a;
    }),
    (JsonEx_Old._linkCircularReference = function (e, t, n) {
        t.forEach(function (e) {
            var t = e[0],
                a = e[1],
                i = e[2];
            a[t] = n[i];
        });
    }),
    (JsonEx_Old._cleanMetadata = function (e) {
        e &&
            (delete e["@"],
            delete e["@c"],
            "object" == typeof e &&
                Object.keys(e).forEach(function (t) {
                    var n = e[t];
                    "object" == typeof n && JsonEx_Old._cleanMetadata(n);
                }));
    }),
    (JsonEx_Old.makeDeepCopy = function (e) {
        return this.parse(this.stringify(e));
    }),
    (JsonEx_Old._encode = function (e, t, n) {
        if (((n = n || 0), ++n >= this.maxDepth)) throw new Error("Object too deep");
        var a = Object.prototype.toString.call(e);
        if ("[object Object]" === a || "[object Array]" === a) {
            e["@c"] = JsonEx_Old._generateId();
            var i = this._getConstructorName(e);
            for (var r in ("Object" !== i && "Array" !== i && (e["@"] = i), e))
                (e.hasOwnProperty && !e.hasOwnProperty(r)) ||
                    r.match(/^@./) ||
                    (e[r] && "object" == typeof e[r]
                        ? e[r]["@c"]
                            ? (t.push([r, e, e[r]]), (e[r] = { "@r": e[r]["@c"] }))
                            : ((e[r] = this._encode(e[r], t, n + 1)), e[r] instanceof Array && (t.push([r, e, e[r]]), (e[r] = { "@c": e[r]["@c"], "@a": e[r] })))
                        : (e[r] = this._encode(e[r], t, n + 1)));
        }
        return n--, e;
    }),
    (JsonEx_Old._decode = function (e, t, n) {
        var a = Object.prototype.toString.call(e);
        if ("[object Object]" === a || "[object Array]" === a) {
            if (((n[e["@c"]] = e), null === e["@"])) e = this._resetPrototype(e, null);
            else if (e["@"]) {
                var i = window[e["@"]];
                i && (e = this._resetPrototype(e, i.prototype));
            }
            for (var r in e)
                if (!e.hasOwnProperty || e.hasOwnProperty(r)) {
                    if (e[r] && e[r]["@a"]) {
                        var s = e[r]["@a"];
                        (s["@c"] = e[r]["@c"]), (e[r] = s);
                    }
                    e[r] && e[r]["@r"] && t.push([r, e, e[r]["@r"]]), (e[r] = this._decode(e[r], t, n));
                }
        }
        return e;
    }),
    (JsonEx_Old._getConstructorName = function (e) {
        if (!e.constructor) return null;
        var t = e.constructor.name;
        if (void 0 === t) {
            t = /^\s*function\s*([A-Za-z0-9_$]*)/.exec(e.constructor)[1];
        }
        return t;
    }),
    (JsonEx_Old._resetPrototype = function (e, t) {
        if (void 0 !== Object.setPrototypeOf) Object.setPrototypeOf(e, t);
        else if ("__proto__" in e) e.__proto__ = t;
        else {
            var n = Object.create(t);
            for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a]);
            e = n;
        }
        return e;
    }),
    (PD_Json.stringify = function (e) {
        var t = [];
        JsonEx_Old._id = 1;
        var n = JSON.stringify(JsonEx_Old._encode(e, t, 0), function (e, t) {
            return t && Array.isArray(t["@a"]) && (t = t["@a"]), "function" == typeof t && (t = "@f" + PD_Util.FuncToString(t)), t;
        });
        return JsonEx_Old._cleanMetadata(e), JsonEx_Old._restoreCircularReference(t), n;
    }),
    (PD_Json.parse = function (e) {
        var t = [],
            n = {},
            a = JsonEx_Old._decode(
                JSON.parse(e, function (e, t) {
                    return "string" == typeof t && "@f" === t.slice(0, 2) && (t = PD_Util.strToFunc(t.slice(2))), t;
                }),
                t,
                n
            );
        return JsonEx_Old._cleanMetadata(a), JsonEx_Old._linkCircularReference(a, t, n), a;
    }),
    (PD_File.cache = {}),
    (PD_File.getFiles = function (e, t = 0) {
        const n = require("fs");
        try {
            const a = [],
                i = n.readdirSync(e, { withFileTypes: !0 });
            for (let e = 0, n = i.length; e < n; e++)
                switch (t) {
                    case 0:
                        i[e].isDirectory() || a.push(i[e].name);
                        break;
                    case 1:
                        i[e].isDirectory() && a.push(i[e].name);
                        break;
                    default:
                        a.push(i[e].name);
                }
            return a;
        } catch (e) {
            throw new Error(e);
        }
    }),
    (PD_File.getAllFiles = function (e) {
        const t = require("fs"),
            n = (e) => {
                const a = [],
                    i = t.readdirSync(e, { withFileTypes: !0 });
                for (let t = 0, r = i.length; t < r; t++) {
                    const r = `${e}/${i[t].name}`;
                    i[t].isDirectory() ? a.push(...n(r)) : a.push(r);
                }
                return a;
            };
        return n(e);
    }),
    (PD_File.isExistFile = function (e) {
        try {
            return require("fs").statSync(e), !0;
        } catch (e) {
            if ("ENOENT" === e.code) return !1;
        }
    }),
    (PD_File.save = function (e, t) {
        return new Promise(function (n, a) {
            const i = require("fs"),
                r = e.split("/");
            let s = "";
            for (let e = 0, t = r.length - 1; e < t; e++) (s += r[e] + "/"), PD_File.isExistFile(s) || i.mkdirSync(s);
            let o = Buffer.from([239, 187, 191]),
                l = Buffer.concat([o, Buffer.from(t, "utf8")]);
            i.writeFile(e, l, function (e) {
                e ? a(e) : n();
            });
        });
    }),
    (PD_File.load = function (e, t, n) {
        return new Promise(function (a, i) {
            if (t && PD_File.cache[e]) a(PD_File.cache[e]);
            else {
                delete PD_File.cache[e];
                var r = new XMLHttpRequest();
                r.open("GET", e),
                    (r.onload = function () {
                        r.status < 400 ? ((PD_File.cache[e] = r.responseText), a(r.responseText)) : i(new Error("サーバーリクエストエラー: " + r.status));
                    }),
                    (r.onerror = function () {
                        i(new Error("Failed to load: " + e));
                    }),
                    n && r.overrideMimeType("text/plain; charset=" + n),
                    r.send();
            }
        });
    }),
    (PD_File.delete = function (e) {
        const t = require("fs");
        if (e.includes(".")) t.unlinkSync(e);
        else {
            const n = e.split("/"),
                a = n.splice(n.length - 1, 1)[0],
                i = n.join("/"),
                r = PD_File.getFiles(i);
            for (let e = 0, n = r.length; e < n; e++) r[e].split(".")[0] === a && t.unlinkSync(i + "/" + r[e]);
        }
    }),
    (PD_File.downloadText = function (e, t) {
        const n = new Blob([e], { type: "text/plain" }),
            a = URL.createObjectURL(n),
            i = document.createElement("a");
        document.body.appendChild(i), (i.download = t), (i.href = a), i.click(), i.remove(), URL.revokeObjectURL(a);
    }),
    (PD_File.convertCSV_to_Array = function (e, t) {
        const n = Papa.parse(e, { transform: (e) => PD_File.convertText_to_CSVCell(e) }).data;
        return t ? n[0].map((e, t) => n.map((e) => e[t])) : n;
    }),
    (PD_File.convertCSV_to_VerticalObject = function (e, t, n) {
        const a = {},
            i = Papa.parse(e, { header: !0, transform: (e) => PD_File.convertText_to_CSVCell(e) }).data;
        for (let e = 0, r = i.length; e < r; e++) {
            let r = [void 0, null, ""].includes(t) ? e + 1 : i[e][t];
            (a[r] = i[e]), n && n(a[r], e + 1);
        }
        return a;
    }),
    (PD_File.convertText_to_CSVCell = function (e) {
        if ((e.startsWith("[") && e.endsWith("]")) || (e.startsWith("{") && e.endsWith("}")))
            try {
                e = JSON.parse(e);
            } catch (e) {}
        else "true" === e.toLowerCase() ? (e = !0) : "false" === e.toLowerCase() ? (e = !1) : -1 !== e.search(/ |　/) || ((isNaN(e) || "" === e || e.startsWith("0") || e.endsWith(".")) && "0" !== e) || (e = Number(e));
        return e;
    }),
    (PD_File.convertArray_to_CSV = function (e) {
        let t = "";
        for (let n = 0, a = e.length; n < a; n++) {
            for (let a = 0, i = e[n], r = i.length; a < r; a++) {
                let e;
                (e = null === i[a] || void 0 === i[a] ? "" : "object" == typeof i[a] ? JSON.stringify(i[a]) : i[a].toString()), a > 0 && (e = "," + e), (t += e);
            }
            n < a - 1 && (t += "\n");
        }
        return t;
    }),
    (PD_File.convertObject_to_CSV = function (e, t) {
        const n = [t];
        for (let a in e) {
            const i = [];
            for (let n = 0, r = t.length; n < r; n++) i.push(void 0 !== e[a][t[n]] ? e[a][t[n]] : "");
            n.push(i);
        }
        return PD_File.convertArray_to_CSV(n);
    }),
    Object.defineProperty(PD_Screen, "scrollX", {
        get: function () {
            return window.pageXOffset;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Screen, "scrollY", {
        get: function () {
            return window.pageXOffset;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Screen, "width", {
        get: function () {
            return document.documentElement.clientWidth;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Screen, "height", {
        get: function () {
            return document.documentElement.clientHeight;
        },
        configurable: !0,
    }),
    PD_Core.isTkoolMZ &&
        ((Bitmap.prototype.shiftHSL = function (e, t, n, a, i) {
            if ((e || t || n) && this.width > 0 && this.height > 0) {
                e = ((e % 360) + 360) % 360;
                const r = this.context.getImageData(0, 0, this.width, this.height).data,
                    s = new ImageData(this.width, this.height),
                    o = s.data;
                let l = !((!a || (0 === a[0] && 0 === a[1] && 0 === a[2])) && (!i || (360 === i[0] && 1 === i[1] && 255 === i[2])));
                l && (a || (a = [0, 0, 0]), i || (i = [360, 1, 255]));
                for (let s = 0, h = r.length; s < h; s += 4) {
                    let h = [r[s + 0], r[s + 1], r[s + 2]];
                    const c = PD_Util.rgbToHsl(h[0], h[1], h[2]);
                    if (!l || (c[0] >= a[0] && c[0] <= i[0] && c[1] >= a[1] && c[1] <= i[1] && c[2] >= a[2] && c[2] <= i[2])) {
                        const a = e ? (c[0] + e) % 360 : c[0],
                            i = t ? (c[1] + t).clamp(0, 1) : c[1],
                            r = n ? (c[2] + n).clamp(0, 255) : c[2];
                        h = PD_Util.hslToRgb(a, i, r);
                    }
                    (o[s + 0] = h[0]), (o[s + 1] = h[1]), (o[s + 2] = h[2]), (o[s + 3] = r[s + 3]);
                }
                const h = new Bitmap(this.width, this.height);
                return h.context.putImageData(s, 0, 0), this._baseTexture.update(), h;
            }
            return this;
        }),
        (Bitmap.prototype.getMainRGBa = function (e, t) {
            if (this.width > 0 && this.height > 0) {
                const n = 10,
                    a = 30,
                    i = {},
                    r = this.context.getImageData(0, 0, this.width, this.height).data;
                let s,
                    o = !((!e || (0 === e[0] && 0 === e[1] && 0 === e[2])) && (!t || (360 === t[0] && 1 === t[1] && 255 === t[2])));
                o && (e || (e = [0, 0, 0]), t || (t = [360, 1, 255]));
                for (let s = 0, l = r.length; s < l; s += 4) {
                    let l = r[s + 0],
                        h = r[s + 1],
                        c = r[s + 2],
                        u = r[s + 3];
                    if (u > n) {
                        const n = PD_Util.rgbToHsl(l, h, c);
                        if (!o || (n[0] >= e[0] && n[0] <= t[0] && n[1] >= e[1] && n[1] <= t[1] && n[2] >= e[2] && n[2] <= t[2])) {
                            let e = !1;
                            for (let t in i) {
                                const n = i[t].rgba,
                                    r = i[t].num;
                                if (Math.abs(n[0] - l) < a && Math.abs(n[1] - h) < a && Math.abs(n[2] - c) < a && Math.abs(n[3] - u) < a) {
                                    (e = !0), (l = Math.round((n[0] * r + l) / (r + 1))), (h = Math.round((n[1] * r + h) / (r + 1))), (c = Math.round((n[2] * r + c) / (r + 1))), (u = Math.round((n[3] * r + u) / (r + 1)));
                                    const a = l + "_" + h + "_" + c + "_" + u;
                                    i[a] ? (i[a].num += 1) : ((i[a] = {}), (i[a].rgba = [l, h, c, u]), (i[a].num = i[t].num + 1), delete i[t]);
                                    break;
                                }
                            }
                            if (!e) {
                                const e = l + "_" + h + "_" + c + "_" + u;
                                (i[e] = {}), (i[e].rgba = [l, h, c, u]), (i[e].num = 1);
                            }
                        }
                    }
                }
                if (Object.keys(i).length <= 0) return [0, 0, 0, 0];
                for (let e in i) {
                    const t = i[e];
                    s ? t.num > s.num && (s = t) : (s = t);
                }
                return s.rgba;
            }
            return [0, 0, 0, 0];
        }),
        (Bitmap.prototype.drawLine = function (e, t, n, a, i, r) {
            var s = this.context;
            s.save(), (s.lineWidth = i || 1), (s.strokeStyle = r), s.beginPath(), s.moveTo(e, t), s.lineTo(n, a), s.closePath(), s.stroke(), s.restore(), this._baseTexture.update();
        }),
        (Bitmap.prototype.drawRect = function (e, t, n, a, i, r) {
            var s = this.context;
            s.save(), (s.lineWidth = i || 1), (s.strokeStyle = r), s.beginPath(), s.moveTo(e[0], e[1]), s.lineTo(t[0], t[1]), s.lineTo(n[0], n[1]), s.lineTo(a[0], a[1]), s.closePath(), s.stroke(), s.restore(), this._baseTexture.update();
        }),
        (Bitmap.prototype.drawEllipse = function (e, t, n, a, i, r, s) {
            var o = this.context;
            o.save(), (o.lineWidth = r || 1), (o.strokeStyle = s), o.beginPath(), o.ellipse(e, t, n, a, i, 0, 2 * Math.PI), o.closePath(), o.stroke(), o.restore(), this._baseTexture.update();
        }),
        (Bitmap.prototype.drawFillRect = function (e, t, n, a, i) {
            var r = this.context;
            r.save(), (r.fillStyle = i), r.beginPath(), r.moveTo(e[0], e[1]), r.lineTo(t[0], t[1]), r.lineTo(n[0], n[1]), r.lineTo(a[0], a[1]), r.closePath(), r.fill(), r.restore(), this._baseTexture.update();
        }),
        (Bitmap.prototype.drawFillEllipse = function (e, t, n, a, i, r) {
            var s = this.context;
            s.save(), (s.fillStyle = r), s.beginPath(), s.ellipse(e, t, n, a, i, 0, 2 * Math.PI), s.closePath(), s.fill(), s.restore(), this._baseTexture.update();
        }),
        (Bitmap.prototype.drawArc = function (e, t, n, a, i, r, s = 10) {
            (a = (a + 1.5 * Math.PI) % (2 * Math.PI)), (i = (i + 1.5 * Math.PI) % (2 * Math.PI));
            var o = this.context;
            o.save(), o.beginPath(), o.arc(e, t, n, a, i), (o.strokeStyle = r), (o.lineWidth = s), o.stroke(), o.closePath(), o.restore(), this._baseTexture.update();
        }),
        (Bitmap.prototype.drawTextEX = function (e, t, n, a, i, r, s, o, l, h, c, u, p) {
            null == e && (e = ""), null == l && (l = 4), null == t && (t = l / 2), null == n && (n = 0), null == a && (a = this.width), null == i && (i = this.height), r || (r = "left");
            const g = this.fontSize,
                _ = this.fontItalic,
                d = this.fontBold,
                f = this.fontFace,
                m = this.textColor,
                P = this.outlineColor,
                D = this.outlineWidth;
            if (((this.fontSize = s || 26), (this.fontItalic = !0 === p), (this.fontBold = !0 === u), (this.fontFace = (c || "rmmz-mainfont") + ", Verdana, sans-serif"), o && (this.textColor = o), h && (this.outlineColor = h), 0 === l)) {
                const s = this.context,
                    o = s.globalAlpha;
                a = a || 4294967295;
                let l = t,
                    h = Math.round(n + i / 2 + 0.35 * this.fontSize);
                "center" === r && (l += a / 2),
                    "right" === r && (l += a),
                    s.save(),
                    (s.font = this._makeFontNameText()),
                    (s.textAlign = r),
                    (s.textBaseline = "alphabetic"),
                    (s.globalAlpha = 1),
                    (s.globalAlpha = o),
                    this._drawTextBody(e, l, h, a),
                    s.restore(),
                    this._baseTexture.update();
            } else (this.outlineWidth = l), this.drawText(e, t, n, a, i, r);
            (this.fontSize = g), (this.fontItalic = _), (this.fontBold = d), (this.fontFace = f), (this.textColor = m), (this.outlineColor = P), (this.outlineWidth = D);
        }),
        (Bitmap.prototype.drawLineChart = function (e, t, n, a, i, r, s) {
            (t = t >= 0 ? t : 3), (i = i >= 0 ? i : 2), (s = s >= 0 ? s : 15);
            var o = PD_Math.minInArray(e),
                l = PD_Math.maxInArray(e),
                h = l - o;
            h < 1 && (h = 1), 0 === (r = r || 0) && (r = (s / 2) * (String(Math.floor(l)).replace(/(\d)(?=(\d{3})+$)/g, "$1,").length + 1));
            var c = this.context;
            c.save(), (c.strokeStyle = n || "rgba(255,255,255,1.0)"), (c.fillStyle = a || "rgba(255,255,255,0.5)"), (c.lineWidth = t);
            var u = t / 2 + (2 === i ? r : 0),
                p = t / 2 + s / 2,
                g = t + (i >= 2 ? r : 0),
                _ = t + s;
            c.beginPath(), c.moveTo(u, this.height);
            for (var d = [], f = [], m = 0, P = e.length; m < P; m++) d.push(u + ((this.width - g) / (P - 1)) * m), f.push(p + (this.height - _) * ((l - e[m]) / h)), c.lineTo(d[m], f[m]);
            for (c.lineTo(u + (this.width - g), this.height), c.closePath(), c.fill(), c.beginPath(), c.moveTo(d[0], f[0]), m = 1, P = e.length; m < P; m++) c.lineTo(d[m], f[m]);
            if ((c.stroke(), i > 0)) {
                for (var D = o, I = 1, M = 0; D > 1e3; ) (D /= 10), (M += 1);
                for (D = Math.floor(D); M > 0; ) (D *= 10), (I *= 10), (M -= 1);
                var y = [D];
                for (m = 0; y[m] < l; m++) y.push(y[m] + I);
                for (; y.length > 5; ) for (m = 1; m < y.length; m++) y.splice(m, 1);
                for (this.fontSize = s, c.beginPath(), c.lineWidth = 1, c.strokeStyle = "rgba(128,128,128,0.5)", m = 0, P = y.length; m < P; m++) {
                    var v = p + (this.height - _) * ((l - y[m]) / h);
                    c.moveTo(u, v), c.lineTo(this.width - c.lineWidth, v), this.drawText(String(y[m]).replace(/(\d)(?=(\d{3})+$)/g, "$1,"), 3 === i ? this.width - r : 0, v - s, r, 2 * s, "right");
                }
                c.stroke();
            }
            c.restore(), this._baseTexture.update();
        }),
        (Game_Switches.prototype.nameToID = function (e) {
            var t = $dataSystem.switches.indexOf(e);
            return t < 0 && console.error("スイッチ名の指定が間違っています"), t;
        }),
        (Game_Variables.prototype.nameToID = function (e) {
            for (var t = 0, n = $dataSystem.variables.length; t < n; t++) if ($dataSystem.variables[t] === e) return t;
            return console.error("変数名の指定が間違っています"), null;
        }),
        (Game_Map.prototype.nameToID = function (e) {
            for (var t = 0, n = $dataMapInfos.length; t < n; t++) if ($dataMapInfos[t] && $dataMapInfos[t].name === e) return t;
            return console.error("マップ名の指定が間違っています"), null;
        }),
        (Game_Map.prototype.startEvent = function (e) {
            for (let t = 0, n = $dataMap.events.length; t < n; t++) $dataMap.events[t] && $dataMap.events[t].name === e && this._events[t].start();
        }),
        (Game_Map.prototype.checkPixelColliderEvents = function (e = this.events()) {
            const t = {};
            if (!e || e.length <= 0) return t;
            for (let n = 0; n < e.length; n++) {
                const a = e[n];
                for (let e = 0, n = SceneManager._scene._spriteset._characterSprites; e < n.length; e++) {
                    const i = n[e];
                    if (i && i._character === a) {
                        const e = i._bitmap,
                            n = i.texture;
                        if (e && n) {
                            const r = $gameMap.tileWidth(),
                                s = $gameMap.tileHeight();
                            let o = 0,
                                l = 0;
                            a._additionalX && (o = a._additionalX), a._additionalY && (l = a._additionalY);
                            const h = Math.round(r * i.anchor.x) + o,
                                c = h - Math.round(n.frame.width * i.anchor.x),
                                u = h + Math.round(n.frame.width * (1 - i.anchor.x)),
                                p = Math.round(s * i.anchor.y) + l,
                                g = p - Math.round(n.frame.height * i.anchor.y),
                                _ = p + Math.round(n.frame.height * (1 - i.anchor.y)),
                                d = Math.floor(c / r),
                                f = Math.floor((u - 1) / r),
                                m = Math.floor(g / s),
                                P = Math.floor((_ - 1) / s);
                            for (let o = d; o <= f; o++)
                                for (let l = m; l <= P; l++) {
                                    let d = o * r - h,
                                        f = l * s - p,
                                        m = d + r,
                                        P = f + s;
                                    d < -h + c && (d = -h + c), f < -p + g && (f = -p + g), m > r + u && (m = r + u), P > s + _ && (P = s + _);
                                    let D = !1;
                                    const I = n.frame.x + Math.round(n.frame.width * i.anchor.x),
                                        M = n.frame.y + Math.round(n.frame.height * i.anchor.y);
                                    for (let n = I + d; n < I + m; n++) {
                                        for (let i = M + f; i < M + P; i++)
                                            if (e.getAlphaPixel(n, i) > 0) {
                                                t[a._eventId] || (t[a._eventId] = { event: a, tileOffsets: [] }), t[a._eventId].tileOffsets.push({ x: o, y: l }), (D = !0);
                                                break;
                                            }
                                        if (D) break;
                                    }
                                }
                        }
                    }
                }
            }
            return t;
        })),
    (PD_Easing.linear = function (e, t, n, a) {
        return n * (e / a) + t;
    }),
    (PD_Easing.easeInQuad = function (e, t, n, a) {
        return n * (e /= a) * e + t;
    }),
    (PD_Easing.easeOutQuad = function (e, t, n, a) {
        return -n * (e /= a) * (e - 2) + t;
    }),
    (PD_Easing.easeInOutQuad = function (e, t, n, a) {
        return (e /= a / 2) < 1 ? (n / 2) * e * e + t : (-n / 2) * (--e * (e - 2) - 1) + t;
    }),
    (PD_Easing.easeInCubic = function (e, t, n, a) {
        return n * (e /= a) * e * e + t;
    }),
    (PD_Easing.easeOutCubic = function (e, t, n, a) {
        return n * ((e = e / a - 1) * e * e + 1) + t;
    }),
    (PD_Easing.easeInOutCubic = function (e, t, n, a) {
        return (e /= a / 2) < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t;
    }),
    (PD_Easing.easeInQuart = function (e, t, n, a) {
        return n * (e /= a) * e * e * e + t;
    }),
    (PD_Easing.easeOutQuart = function (e, t, n, a) {
        return -n * ((e = e / a - 1) * e * e * e - 1) + t;
    }),
    (PD_Easing.easeInOutQuart = function (e, t, n, a) {
        return (e /= a / 2) < 1 ? (n / 2) * e * e * e * e + t : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
    }),
    (PD_Easing.easeInQuint = function (e, t, n, a) {
        return n * (e /= a) * e * e * e * e + t;
    }),
    (PD_Easing.easeOutQuint = function (e, t, n, a) {
        return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
    }),
    (PD_Easing.easeInOutQuint = function (e, t, n, a) {
        return (e /= a / 2) < 1 ? (n / 2) * e * e * e * e * e + t : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
    }),
    (PD_Easing.easeInSine = function (e, t, n, a) {
        return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
    }),
    (PD_Easing.easeOutSine = function (e, t, n, a) {
        return n * Math.sin((e / a) * (Math.PI / 2)) + t;
    }),
    (PD_Easing.easeInOutSine = function (e, t, n, a) {
        return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
    }),
    (PD_Easing.easeInExpo = function (e, t, n, a) {
        return 0 == e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
    }),
    (PD_Easing.easeOutExpo = function (e, t, n, a) {
        return e == a ? t + n : n * (1 - Math.pow(2, (-10 * e) / a)) + t;
    }),
    (PD_Easing.easeInOutExpo = function (e, t, n, a) {
        return 0 == e ? t : e == a ? t + n : (e /= a / 2) < 1 ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t : (n / 2) * (2 - Math.pow(2, -10 * --e)) + t;
    }),
    (PD_Easing.easeInCirc = function (e, t, n, a) {
        return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
    }),
    (PD_Easing.easeOutCirc = function (e, t, n, a) {
        return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
    }),
    (PD_Easing.easeInOutCirc = function (e, t, n, a) {
        return (e /= a / 2) < 1 ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
    }),
    (PD_Easing.easeInElastic = function (e, t, n, a) {
        var i = 1.70158,
            r = 0,
            s = n;
        return 0 == n || 0 == e
            ? t
            : 1 == (e /= a)
            ? t + n
            : (r || (r = 0.3 * a), s < Math.abs(n) ? ((s = n), (i = r / 4)) : (i = (r / (2 * Math.PI)) * Math.asin(n / s)), -s * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * a - i) * (2 * Math.PI)) / r) + t);
    }),
    (PD_Easing.easeOutElastic = function (e, t, n, a) {
        var i = 1.70158,
            r = 0,
            s = n;
        return 0 == n || 0 == e
            ? t
            : 1 == (e /= a)
            ? t + n
            : (r || (r = 0.3 * a), s < Math.abs(n) ? ((s = n), (i = r / 4)) : (i = (r / (2 * Math.PI)) * Math.asin(n / s)), s * Math.pow(2, -10 * e) * Math.sin(((e * a - i) * (2 * Math.PI)) / r) + n + t);
    }),
    (PD_Easing.easeInOutElastic = function (e, t, n, a) {
        var i = 1.70158,
            r = 0,
            s = n;
        return 0 == n || 0 == e
            ? t
            : 2 == (e /= a / 2)
            ? t + n
            : (r || (r = a * (0.3 * 1.5)),
              s < Math.abs(n) ? ((s = n), (i = r / 4)) : (i = (r / (2 * Math.PI)) * Math.asin(n / s)),
              e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * a - i) * (2 * Math.PI)) / r) * -0.5 + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e * a - i) * (2 * Math.PI)) / r) * 0.5 + n + t);
    }),
    (PD_Easing.easeInBack = function (e, t, n, a, i) {
        return null == i && (i = 1.70158), n * (e /= a) * e * ((i + 1) * e - i) + t;
    }),
    (PD_Easing.easeOutBack = function (e, t, n, a, i) {
        return null == i && (i = 1.70158), n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t;
    }),
    (PD_Easing.easeInOutBack = function (e, t, n, a, i) {
        return null == i && (i = 1.70158), (e /= a / 2) < 1 ? (n / 2) * (e * e * ((1 + (i *= 1.525)) * e - i)) + t : (n / 2) * ((e -= 2) * e * ((1 + (i *= 1.525)) * e + i) + 2) + t;
    }),
    (PD_Easing.easeInBounce = function (e, t, n, a) {
        return n - this.easeOutBounce(a - e, 0, n, a) + t;
    }),
    (PD_Easing.easeOutBounce = function (e, t, n, a) {
        return (e /= a) < 1 / 2.75
            ? n * (7.5625 * e * e) + t
            : e < 2 / 2.75
            ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
            : e < 2.5 / 2.75
            ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
            : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
    }),
    (PD_Easing.easeInOutBounce = function (e, t, n, a) {
        return e < a / 2 ? 0.5 * this.easeInBounce(2 * e, 0, n, a) + t : 0.5 * this.easeOutBounce(2 * e - a, 0, n, a) + 0.5 * n + t;
    }),
    !window.PD_Core)
)
    throw new Error("このプラグインよりも先に「PD_Core」プラグインを読み込む必要があります");
function PD_Setup() {
    throw new Error("This is a static class");
}
function Scene_Original() {
    this.initialize.apply(this, arguments);
}
if (
    ((PD_Setup.readyFinishFuncs = []),
    (PD_Setup.isTitleSkip = !1),
    (PD_Setup.startSceneClass = null),
    (PD_Setup.file = {}),
    (PD_Setup.addReadyLoadCompressFile = function (e, t, n, a) {
        PD_Setup.readyFinishFuncs.push(
            () => (
                void 0 === PD_Setup.file[e] &&
                    PD_Setup.loadCompressedFile(e, a)
                        .then((e) => {
                            t && t(e);
                        })
                        .catch((t) => {
                            if ((console.error(e), !n)) throw new Error(t);
                            n();
                        }),
                !!PD_Setup.file[e]
            )
        );
    }),
    (PD_Setup.loadCompressedFile = function (e, t) {
        return new Promise((n, a) => {
            void 0 === PD_Setup.file[e]
                ? ((PD_Setup.file[e] = null),
                  PD_File.load(e)
                      .then((a) => {
                          (PD_Setup.file[e] = PD_Setup.decompressFile(a, e, 9, t)), n(PD_Setup.file[e]);
                      })
                      .catch((e) => {
                          a(e);
                      }))
                : PD_Setup.file[e] && n(PD_Setup.file[e]);
        });
    }),
    //PATCHED HERE --
    (PD_Setup.decompressFile = function (fileContent, filePath, compressionLevel = 9, specialProcessor) {
        try {
            const decompressedContent = pako.inflate(fileContent, { to: "string" });
            return decompressedContent;
        } catch (error) {
            let contentToUse = fileContent;

            if (typeof specialProcessor === 'function') {
                try {
                    contentToUse = specialProcessor(fileContent);
                } catch (processingError) {
                    console.error(`Error during special processing for plain text ${filePath}: ${processingError.message}. Using raw plain text.`);
                    contentToUse = fileContent;
                }
            }
            
            if (Utils.isNwjs && Utils.isOptionValid("test")) {
                try {
                    PD_File.save(filePath, pako.deflate(contentToUse, { to: "string", level: compressionLevel }));
                } catch (saveError) {
                    console.error(`Test mode: Failed to save ${filePath} as compressed. Error: ${saveError.message}`);
                }
            }
            
            return contentToUse;
        }
    }),
    ////PATCHED HERE --
    (function () {
        "use strict";
        var e = DataManager.isDatabaseLoaded;
        DataManager.isDatabaseLoaded = function () {
            let t = e.call(this);
            if (t) for (var n = 0; n < PD_Setup.readyFinishFuncs.length; n++) PD_Setup.readyFinishFuncs[n]() || (t = !1);
            return t;
        };
        const t = Scene_Boot.prototype.startNormalGame;
        Scene_Boot.prototype.startNormalGame = function () {
            PD_Setup.isTitleSkip || PD_Setup.startSceneClass ? (this.checkPlayerLocation(), DataManager.setupNewGame(), PD_Setup.startSceneClass ? SceneManager.goto(PD_Setup.startSceneClass) : SceneManager.goto(Scene_Map)) : t.call(this);
        };
    })(),
    (Scene_Original.prototype = Object.create(Scene_Base.prototype)),
    (Scene_Original.prototype.constructor = Scene_Original),
    (Scene_Original.prototype.initialize = function () {
        Scene_Base.prototype.initialize.call(this), (this._fadeInEnable = !0), (this._fadeOutEnable = !0), (this._fadeOutAudioEnable = !0), (this._BgmBgsSave = !0), this._preBgm, this._preBgs;
    }),
    (Scene_Original.prototype.isReady = function () {
        return Scene_Base.prototype.isReady.call(this);
    }),
    (Scene_Original.prototype.create = function () {
        Scene_Base.prototype.create.call(this), this._BgmBgsSave && this.saveBgmAndBgs(), this.createDisplayObjects();
    }),
    (Scene_Original.prototype.start = function () {
        Scene_Base.prototype.start.call(this), this._fadeInEnable && this.startFadeIn(this.fadeSpeed(), !1);
    }),
    (Scene_Original.prototype.update = function () {
        Scene_Base.prototype.update.call(this);
    }),
    (Scene_Original.prototype.stop = function () {
        Scene_Base.prototype.stop.call(this), this._fadeOutEnable && this.fadeOutAll();
    }),
    (Scene_Original.prototype.terminate = function () {
        Scene_Base.prototype.terminate.call(this);
    }),
    (Scene_Original.prototype.popScene = function () {
        this.replayBgmAndBgs(), Scene_Base.prototype.popScene.call(this);
    }),
    (Scene_Original.prototype.fadeOutAll = function () {
        this._fadeOutAudioEnable ? Scene_Base.prototype.fadeOutAll.call(this) : this.startFadeOut(this.slowFadeSpeed());
    }),
    (Scene_Original.prototype.createDisplayObjects = function () {}),
    (Scene_Original.prototype.saveBgmAndBgs = function () {
        (this._preBgm = AudioManager.saveBgm()), (this._preBgs = AudioManager.saveBgs());
    }),
    (Scene_Original.prototype.replayBgmAndBgs = function () {
        this._preBgm ? AudioManager.replayBgm(this._preBgm) : AudioManager.stopBgm(), this._preBgs ? AudioManager.replayBgs(this._preBgs) : AudioManager.stopBgs();
    }),
    !window.PD_Util)
)
    throw new Error("このプラグインよりも先に「__PD_Core」プラグインを読み込む必要があります");
function PD_ElementManager() {
    throw new Error("This is a static class");
}
function PD_Element() {
    this.initialize.apply(this, arguments);
}
if (
    ((PD_ElementManager.list = {}),
    (function () {
        "use strict";
        if (PD_Core.isTkoolMZ) {
            const n = Graphics._createCanvas;
            Graphics._createCanvas = function () {
                n.call(this), PD_ElementManager.createBaseElement("base", this.width, this.height, 100);
            };
            const a = Graphics._updateCanvas;
            Graphics._updateCanvas = function () {
                a.call(this), PD_ElementManager.updateBaseElement(this.width, this.height);
            };
            var e = Input._onKeyDown;
            Input._onKeyDown = function (t) {
                "PD_Element_" !== document.activeElement.id.slice(0, 11) && e.call(this, t);
            };
            var t = Input._onKeyUp;
            Input._onKeyUp = function (e) {
                "PD_Element_" !== document.activeElement.id.slice(0, 11) && t.call(this, e);
            };
        }
    })(),
    (PD_ElementManager.stopPropagation = function (e) {
        e.stopPropagation();
    }),
    (PD_ElementManager.createBaseElement = function (e = "base", t, n, a) {
        const i = new PD_Element(e, "div", document.body, t, n, a);
        return (i.isStopPropagation = !1), (i.element.width = t), (i.element.height = n), PD_Core.isTkoolMZ && Graphics._centerElement(i.element), i;
    }),
    (PD_ElementManager.updateBaseElement = function (e, t) {
        const n = PD_ElementManager.list.base;
        if (n && ((n.width = e), (n.height = t), (n.element.width = e), (n.element.height = t), PD_Core.isTkoolMZ)) {
            Graphics._centerElement(PD_ElementManager.list.base.element);
            for (let e in PD_ElementManager.list) "base" !== e && PD_ElementManager.list[e].screenAdjust();
        }
    }),
    (PD_ElementManager.blur = function () {
        document.activeElement.blur();
    }),
    (PD_ElementManager.openNewSaveDialog = function (e = "", t, n) {
        return new Promise((a, i) => {
            PD_ElementManager.list.ElementManager_FileInputDialog && PD_ElementManager.list.ElementManager_FileInputDialog.delete();
            let r = PD_ElementManager.list.base.addFileInput("ElementManager_FileInputDialog");
            (r.visible = !1),
                r.move(-1e4, -1e4),
                (r.element.nwsaveas = e),
                t && (r.element.accept = "." + t),
                r.addEvent("fileSave", "change", () => {
                    let e = r.value.replace(/\\/g, "/");
                    t && e.slice(-t.length - 1) !== "." + t && (e = e + "." + t),
                        PD_File.save(e, n)
                            .then(() => {
                                r.delete(), a(r);
                            })
                            .catch((e) => {
                                r.delete(), i(e);
                            });
                }),
                r.element.click();
        });
    }),
    (PD_ElementManager.openLoadDialog = function () {
        return new Promise((e, t) => {
            PD_ElementManager.list.ElementManager_FileInputDialog && PD_ElementManager.list.ElementManager_FileInputDialog.delete();
            let n = PD_ElementManager.list.base.addFileInput("ElementManager_FileInputDialog");
            (n.visible = !1),
                n.move(-1e4, -1e4),
                n.addEvent("fileLoad", "change", () => {
                    const a = n.element.value.replace(/\\/g, "/");
                    PD_File.load(a)
                        .then((t) => {
                            n.delete(), e([n, t]);
                        })
                        .catch((e) => {
                            n.delete(), t([n, e]);
                        });
                }),
                n.element.click();
        });
    }),
    (PD_ElementManager.openLoadPathDialog = function () {
        return new Promise((e) => {
            PD_ElementManager.list.ElementManager_FileInputDialog && PD_ElementManager.list.ElementManager_FileInputDialog.delete();
            let t = PD_ElementManager.list.base.addFileInput("ElementManager_FileInputDialog");
            (t.visible = !1),
                t.move(-1e4, -1e4),
                t.addEvent("loadURL", "change", function () {
                    t.delete(), e(t.value);
                }),
                t.element.click();
        });
    }),
    (PD_Element.prototype.initialize = function (e, t, n, a, i, r) {
        if (((this.element = document.createElement(t)), (this.element.id = "PD_Element_" + e), (this.element.style.position = "absolute"), PD_ElementManager.list[e])) throw new Error("同名のエレメントがすでに存在しています：" + e);
        (PD_ElementManager.list[e] = this),
            (this.element.style.zIndex = r || n.element.style.zIndex),
            n === document.body ? n.appendChild(this.element) : n.element.appendChild(this.element),
            (this._name = e),
            this.name,
            (this._elementType = t),
            (this.parent = n),
            (this.children = []),
            (this._x = 0),
            (this.x = this._x),
            (this._y = 0),
            (this.y = this._y),
            (this._width = a),
            (this.width = this._width),
            (this._height = i),
            (this.height = this._height),
            (this._realX = 0),
            this.realX,
            (this._realY = 0),
            this.realY,
            (this._fontSize = 16),
            (this.fontSize = this._fontSize),
            (this._isStopPropagation = !!PD_Core.isTkoolMZ),
            (this.isStopPropagation = this._isStopPropagation),
            (this._eventListeners = {}),
            (this._eventListenerParams = {}),
            (this._moveFlag = -2),
            (this._moveStartX = 0),
            (this._moveStartY = 0);
    }),
    (PD_Element.prototype.screenAdjust = function () {
        (this.x = this.x), (this.y = this.y), (this.width = this.width), (this.height = this.height), (this.fontSize = this.fontSize);
    }),
    (PD_Element.prototype.focus = function () {
        this.element.focus();
    }),
    (PD_Element.prototype.blur = function () {
        this.element.blur();
    }),
    (PD_Element.prototype.move = function (e, t) {
        (this.x = e), (this.y = t);
    }),
    (PD_Element.prototype.addChild = function (e, t, n, a, i) {
        var r = new PD_Element(e, t, this, n, a, i);
        return this.children.push(r), r;
    }),
    (PD_Element.prototype.addDiv = function (e, t, n, a) {
        return this.addChild(e, "div", t, n, a);
    }),
    (PD_Element.prototype.addInput = function (e, t, n, a, i) {
        const r = this.addChild(e, "input", t, n, i);
        return (r.element.autocomplete = a ? "on" : "off"), r;
    }),
    (PD_Element.prototype.addButtonInput = function (e, t, n, a) {
        const i = this.addChild(e, "input", t, n, a);
        return (i.element.type = "button"), i;
    }),
    (PD_Element.prototype.addNumberInput = function (e, t, n, a, i, r, s) {
        const o = this.addChild(e, "input", t, n, s);
        return (o.element.type = "number"), void 0 !== a && (o.min = a), void 0 !== i && (o.max = i), void 0 !== r && (o.step = r), o;
    }),
    (PD_Element.prototype.addColorInput = function (e, t, n, a) {
        const i = this.addChild(e, "input", t, n, a);
        return (i.element.type = "color"), i;
    }),
    (PD_Element.prototype.addFileInput = function (e, t, n, a) {
        const i = this.addChild(e, "input", t, n, a);
        return (i.element.type = "file"), i;
    }),
    (PD_Element.prototype.addCheckBoxInput = function (e, t, n, a) {
        const i = this.addChild(e, "input", t, n, a);
        return (i.element.type = "checkbox"), i;
    }),
    (PD_Element.prototype.addRangeInput = function (e, t, n, a, i, r, s) {
        const o = this.addChild(e, "input", t, n, s);
        return (o.element.type = "range"), void 0 !== a && (o.min = a), void 0 !== i && (o.max = i), void 0 !== r && (o.step = r), o;
    }),
    (PD_Element.prototype.addTextArea = function (e, t, n, a) {
        const i = this.addChild(e, "textarea", t, n, a);
        return (i.resize = "none"), i;
    }),
    (PD_Element.prototype.addSelect = function (e, t, n, a, i) {
        const r = this.addChild(e, "select", t, n, i);
        for (var s = 0; s < a.length; s++) {
            let e = document.createElement("option");
            (e.text = a[s][0]), (e.value = a[s][1]), r.element.appendChild(e);
        }
        return r;
    }),
    (PD_Element.prototype.delete = function () {
        let e = null,
            t = this,
            n = null;
        for (;;)
            if (((n = t.children), 0 === n.length)) {
                if (((e = t.parent), e === document.body)) e.removeChild(t.element);
                else
                    for (let n = 0, a = e.element.childNodes, i = a.length; n < i; n++)
                        if (a[n].id === t.element.id) {
                            e.element.removeChild(t.element);
                            break;
                        }
                for (let e in t._eventListeners) t.removeEvent(e);
                if ((delete PD_ElementManager.list[t.name], e !== document.body && e.children.splice(e.children.indexOf(t), 1), t.name === this.name)) break;
                t = e;
            } else t = n[0];
    }),
    (PD_Element.prototype.addWinEvent = function (e, t, n) {
        if (this._eventListeners[e]) throw new Error("同名のイベントリスナーがすでに存在しています");
        (this._eventListeners[e] = [{ target: window, type: t, func: n }]), window.addEventListener(t, this._eventListeners[e][0].func, !1);
    }),
    (PD_Element.prototype.addEvent = function (e, t, n) {
        if (this._eventListeners[e]) throw new Error("同名のイベントリスナーがすでに存在しています");
        (this._eventListeners[e] = [{ target: this.element, type: t, func: n }]), this.element.addEventListener(t, this._eventListeners[e][0].func, !1);
    }),
    (PD_Element.prototype.addMultiEvent = function (e, t) {
        if (this._eventListeners[e]) throw new Error("同名のイベントリスナーがすでに存在しています");
        this._eventListeners[e] = [];
        for (let n = 0, a = t.length; n < a; n++) this._eventListeners[e].push({ target: t[n][0], type: t[n][1], func: t[n][2] }), t[n][0].addEventListener(t[n][1], this._eventListeners[e][this._eventListeners[e].length - 1].func, !1);
    }),
    (PD_Element.prototype.removeEvent = function (e) {
        const t = this._eventListeners[e];
        if (!t) throw new Error("指定したイベントリスナーは登録されていません");
        for (let e = 0, n = t.length; e < n; e++) t[e].target.removeEventListener(t[e].type, t[e].func, !1);
        delete this._eventListeners[e], this._eventListenerParams[e] && delete this._eventListenerParams[e];
    }),
    (PD_Element.prototype.addDragEvent = function (e, t, n, a, i = !0, r = !0, s = 1) {
        if (this._eventListeners[e]) throw new Error("同名のイベントリスナーがすでに存在しています");
        this.addMultiEvent(e, [
            [
                this.element,
                "mousedown",
                (e) => {
                    (this._moveFlag = -1), (this._moveStartX = e.clientX - this.x), (this._moveStartY = e.clientY - this.y), t && t(e);
                },
            ],
            [
                window,
                "mousemove",
                (e) => {
                    this._moveFlag >= -1 && (this._moveFlag++, this._moveFlag >= s && (i && (this.x = e.clientX - this._moveStartX), r && (this.y = e.clientY - this._moveStartY), n && n(e)));
                },
            ],
            [
                window,
                "mouseup",
                (e) => {
                    this._moveFlag >= -1 && ((this._moveFlag = -2), a && a(e));
                },
            ],
        ]);
    }),
    (PD_Element.prototype.addInputIMEEvent = function (e, t, n, a) {
        if (this._eventListeners[e]) throw new Error("同名のイベントリスナーがすでに存在しています");
        {
            this._eventListenerParams[e] = {
                halfInputFlag: !1,
                imeFlag: !1,
                keyDownEvent: null,
                disableKey: {
                    Cancel: 1,
                    Help: 1,
                    Tab: 1,
                    Command: 1,
                    ShiftLeft: 1,
                    ShiftRight: 1,
                    ControlLeft: 1,
                    ControlRight: 1,
                    AltLeft: 1,
                    AltRight: 1,
                    Pause: 1,
                    CapsLock: 1,
                    Kana: 1,
                    Junja: 1,
                    Final: 1,
                    Kanji: 1,
                    Escape: 1,
                    Convert: 1,
                    NonConvert: 1,
                    Accept: 1,
                    ModeChange: 1,
                    PageUp: 1,
                    PageDown: 1,
                    End: 1,
                    Home: 1,
                    ArrowLeft: 1,
                    ArrowUp: 1,
                    ArrowRight: 1,
                    ArrowDown: 1,
                    SELECT: 1,
                    PRINT: 1,
                    Execute: 1,
                    PrintScreen: 1,
                    Insert: 1,
                    MetaLeft: 1,
                    MetaRight: 1,
                    Sleep: 1,
                    F1: 1,
                    F2: 1,
                    F3: 1,
                    F4: 1,
                    F5: 1,
                    F6: 1,
                    F7: 1,
                    F8: 1,
                    F9: 1,
                    F10: 1,
                    F11: 1,
                    F12: 1,
                    F13: 1,
                    F14: 1,
                    F15: 1,
                    F16: 1,
                    F17: 1,
                    F18: 1,
                    F19: 1,
                    F20: 1,
                    F21: 1,
                    F22: 1,
                    F23: 1,
                    F24: 1,
                    144: "NumLock",
                    145: "ScrollLock",
                    WakeUp: 1,
                    KanaMode: 1,
                    Backquote: 1,
                },
            };
            let i = this._eventListenerParams[e];
            this.addMultiEvent(e, [
                [
                    this.element,
                    "keydown",
                    (e) => {
                        i.disableKey[e.code] || (i.imeFlag || (!i.halfInputFlag && t && t(e), n && n(e), (i.halfInputFlag = !0)), (i.keyDownEvent = e));
                    },
                ],
                [
                    this.element,
                    "compositionstart",
                    () => {
                        i.disableKey[event.code] || (i.imeFlag = !0);
                    },
                ],
                [
                    this.element,
                    "compositionupdate",
                    () => {
                        i.disableKey[event.code] || (i.halfInputFlag ? (i.halfInputFlag = !1) : n && "Enter" !== i.keyDownEvent.code && n(i.keyDownEvent));
                    },
                ],
                [
                    this.element,
                    "compositionend",
                    () => {
                        i.disableKey[event.code] || (a && a(i.keyDownEvent), (i.imeFlag = !1));
                    },
                ],
                [
                    this.element,
                    "keyup",
                    (e) => {
                        i.disableKey[e.code] || (i.halfInputFlag && (a && a(e), (i.halfInputFlag = !1)), (i.keyDownEvent = null));
                    },
                ],
            ]);
        }
    }),
    Object.defineProperty(PD_Element.prototype, "name", {
        get: function () {
            return this._name;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "style", {
        get: function () {
            return this.element.style;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (e) {
            (this._x = e), (this._realX = this.parent === document.body ? 0 : this.parent._realX + this._x), PD_Core.isTkoolMZ ? (this.element.style.left = this.x * Graphics._realScale + "px") : (this.element.style.left = e + "px");
            for (var t = 0, n = this.children.length; t < n; t++) this.children[t].x = this.children[t].x;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (e) {
            (this._y = e), (this._realY = this.parent === document.body ? 0 : this.parent._realY + this._y), PD_Core.isTkoolMZ ? (this.element.style.top = this.y * Graphics._realScale + "px") : (this.element.style.top = e + "px");
            for (var t = 0, n = this.children.length; t < n; t++) this.children[t].y = this.children[t].y;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "rotate", {
        get: function () {
            let e = this.style.transform.slice(7);
            return Number(e.slice(0, -4));
        },
        set: function (e) {
            this.style.transform = "rotate(" + e + "deg)";
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (e) {
            (this._width = e), PD_Core.isTkoolMZ ? (this.element.style.width = this.width * Graphics._realScale + "px") : (this.element.style.width = e + "px");
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (e) {
            (this._height = e), PD_Core.isTkoolMZ ? (this.element.style.height = this.height * Graphics._realScale + "px") : (this.element.style.height = e + "px");
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (e) {
            (this._fontSize = e), PD_Core.isTkoolMZ ? (this.element.style.fontSize = Math.floor(this.fontSize * Graphics._realScale) + "px") : (this.element.style.fontSize = e + "px");
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "fontFamily", {
        get: function () {
            this.element.style.fontFamily;
        },
        set: function (e) {
            this.element.style.fontFamily = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "realX", {
        get: function () {
            return this._realX;
        },
        set: function (e) {
            this.x = e - this.parent._realX;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "realY", {
        get: function () {
            return this._realY;
        },
        set: function (e) {
            this.y = e - this.parent._realY;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "color", {
        get: function () {
            return this.element.style.color;
        },
        set: function (e) {
            this.element.style.color = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "backgroundColor", {
        get: function () {
            return this.element.style.backgroundColor;
        },
        set: function (e) {
            this.element.style.backgroundColor = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "cursor", {
        get: function () {
            return this.element.style.cursor;
        },
        set: function (e) {
            this.element.style.cursor = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "resize", {
        get: function () {
            return this.element.style.resize;
        },
        set: function (e) {
            this.element.style.resize = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "value", {
        get: function () {
            return this.element.value;
        },
        set: function (e) {
            this.element.value = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "title", {
        get: function () {
            return this.element.title;
        },
        set: function (e) {
            this.element.title = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "innerHTML", {
        get: function () {
            return this.element.innerHTML;
        },
        set: function (e) {
            this.element.innerHTML = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "innerText", {
        get: function () {
            return this.element.innerText;
        },
        set: function (e) {
            this.element.innerText = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "textAlign", {
        get: function () {
            return this.element.style.textAlign;
        },
        set: function (e) {
            this.element.style.textAlign = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "checked", {
        get: function () {
            return this.element.checked;
        },
        set: function (e) {
            this.element.checked = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "opacity", {
        get: function () {
            return this.element.style.opacity;
        },
        set: function (e) {
            this.element.style.opacity = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "visible", {
        get: function () {
            return "none" !== this.element.style.display;
        },
        set: function (e) {
            this.element.style.display = !0 === e ? "block" : "none";
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "pointerEvents", {
        get: function () {
            return "none" !== this.element.style.pointerEvents;
        },
        set: function (e) {
            this.element.style.pointerEvents = !0 === e ? "auto" : "none";
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "isStopPropagation", {
        get: function () {
            return this._isStopPropagation;
        },
        set: function (e) {
            (this._isStopPropagation = e),
                !0 === e
                    ? (this.element.addEventListener("keydown", PD_ElementManager.stopPropagation),
                      this.element.addEventListener("keyup", PD_ElementManager.stopPropagation),
                      this.element.addEventListener("mousedown", PD_ElementManager.stopPropagation),
                      this.element.addEventListener("touchstart", PD_ElementManager.stopPropagation),
                      this.element.addEventListener("wheel", PD_ElementManager.stopPropagation))
                    : (this.element.removeEventListener("keydown", PD_ElementManager.stopPropagation),
                      this.element.removeEventListener("keyup", PD_ElementManager.stopPropagation),
                      this.element.removeEventListener("mousedown", PD_ElementManager.stopPropagation),
                      this.element.removeEventListener("touchstart", PD_ElementManager.stopPropagation),
                      this.element.removeEventListener("wheel", PD_ElementManager.stopPropagation));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "min", {
        get: function () {
            return this.element.min;
        },
        set: function (e) {
            this.element.min = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "max", {
        get: function () {
            return this.element.max;
        },
        set: function (e) {
            this.element.max = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_Element.prototype, "step", {
        get: function () {
            return this.element.step;
        },
        set: function (e) {
            this.element.step = e;
        },
        configurable: !0,
    }),
    !window.PD_Core)
)
    throw new Error("このプラグインよりも先に「PD_Core」プラグインを読み込む必要があります");
if (!PD_Setup) throw new Error("このプラグインよりも先に「PD_Setup」プラグインを読み込む必要があります");
if (!window.Scene_Original) throw new Error("このプラグインよりも先に「PD_originalScene」プラグインを読み込む必要があります");
function PD_UIManager() {
    throw new Error("This is a static class");
}
function PD_UI() {
    this.initialize.apply(this, arguments);
}
if (
    ((PD_UIManager.baseScreenWidth = 0),
    (PD_UIManager.baseScreenHeight = 0),
    (PD_UIManager.screenWidthFunc = null),
    (PD_UIManager.screenHeightFunc = null),
    (PD_UIManager.fontFamilyNames = []),
    (PD_UIManager.layerNames = ["lower", "middle", "upper"]),
    (PD_UIManager.loadImageFolderName = "_img"),
    (PD_UIManager.isStopMainScene = !1),
    (PD_UIManager.UI_Database = {}),
    (PD_UIManager.initialize = function () {
        PD_UIManager.screenWidth || (PD_UIManager.screenWidth = 0),
            PD_UIManager.screenHeight || (PD_UIManager.screenHeight = 0),
            (PD_UIManager.resRate = 1),
            (PD_UIManager.base = {}),
            (PD_UIManager.list = {}),
            (PD_UIManager.baseUIPropertys = {}),
            (PD_UIManager.UIPropertys = {}),
            (PD_UIManager._afterUpdateUIs = {}),
            (PD_UIManager.createNum = 0),
            (PD_UIManager.loading_uiFileStatus = 0);
    }),
    PD_Setup.readyFinishFuncs.push(function () {
        return (
            PD_UIManager.loading_uiFileStatus ||
                (PD_UIManager.initialize(),
                (PD_UIManager.loading_uiFileStatus = 1),
                Promise.resolve()
                    .then(
                        () =>
                            new Promise((e) => {
                                if (Utils.isNwjs() && Utils.isOptionValid("test")) {
                                    const t = "undefined" != typeof PD_GameBridge_Child ? PD_GameBridge_Child.src.slice(0, -10) : "",
                                        n = t + "_UIManager",
                                        a = t + "_UIManager/_System",
                                        i = "UI_Database.kgdata";
                                    if (PD_File.isExistFile(n)) {
                                        const t = PD_File.getAllFiles(n),
                                            r = [];
                                        for (let e = 0, a = t.length; e < a; e++) {
                                            const a = t[e].split(".")[1];
                                            "ui" === a && r.push(t[e].slice(n.length + 1).slice(0, -a.length - 1));
                                        }
                                        const s = {},
                                            o = [];
                                        for (let e = 0, t = r.length; e < t; e++)
                                            o.push(
                                                () =>
                                                    new Promise((t) => {
                                                        PD_File.load("_UIManager/" + r[e] + ".ui").then((n) => {
                                                            (s[r[e]] = n), t();
                                                        });
                                                    })
                                            );
                                        PD_Promise.all(o).then(() => {
                                            PD_File.save(a + "/" + i, pako.deflate(JSON.stringify(s), { to: "string", level: 9 })).then(() => {
                                                e();
                                            });
                                        });
                                    } else {
                                        const t = {};
                                        PD_File.save(a + "/" + i, pako.deflate(JSON.stringify(t), { to: "string", level: 9 })).then(() => {
                                            e();
                                        });
                                    }
                                } else e();
                            })
                    )
                    .then(() => {
                        PD_File.load("_UIManager/_System/UI_Database.kgdata").then((e) => {
                            (PD_UIManager.UI_Database = JSON.parse(pako.inflate(e, { to: "string" }))), (PD_UIManager.loading_uiFileStatus = 2);
                        });
                    })
                    .catch((e) => {
                        throw new Error(e);
                    })),
            PD_UIManager.loading_uiFileStatus >= 2
        );
    }),
    (function () {
        "use strict";
        const e = Scene_Boot.prototype.onDatabaseLoaded;
        (Scene_Boot.prototype.onDatabaseLoaded = function () {
            PD_UIManager.baseScreenWidth || (PD_UIManager.baseScreenWidth = $dataSystem.advanced.screenWidth),
                PD_UIManager.baseScreenHeight || (PD_UIManager.baseScreenHeight = $dataSystem.advanced.screenHeight),
                (PD_UIManager.screenWidth = "undefined" == typeof PD_GameBridge_Child && PD_UIManager.screenWidthFunc ? PD_UIManager.screenWidthFunc() : PD_UIManager.baseScreenWidth),
                (PD_UIManager.screenHeight = "undefined" == typeof PD_GameBridge_Child && PD_UIManager.screenHeightFunc ? PD_UIManager.screenHeightFunc() : PD_UIManager.baseScreenHeight),
                ($dataSystem.advanced.screenWidth = PD_UIManager.screenWidth),
                ($dataSystem.advanced.screenHeight = PD_UIManager.screenHeight),
                ($dataSystem.advanced.uiAreaWidth = PD_UIManager.screenWidth),
                ($dataSystem.advanced.uiAreaHeight = PD_UIManager.screenHeight),
                (PD_UIManager.resRate = PD_UIManager.baseScreenWidth ? PD_UIManager.screenWidth / PD_UIManager.baseScreenWidth : 1),
                e.call(this);
        }),
            Object.defineProperty(TouchInput, "x", {
                get: function () {
                    return this._x / PD_UIManager.resRate;
                },
                configurable: !0,
            }),
            Object.defineProperty(TouchInput, "y", {
                get: function () {
                    return this._y / PD_UIManager.resRate;
                },
                configurable: !0,
            });
        const t = Scene_Boot.prototype.loadGameFonts;
        Scene_Boot.prototype.loadGameFonts = function () {
            t.call(this);
            for (let e = 0, t = PD_UIManager.fontFamilyNames, n = t.length; e < n; e++) FontManager.load(t[e].split(".")[0], t[e]);
        };
        const n = Scene_Original.prototype.createDisplayObjects;
        Scene_Original.prototype.createDisplayObjects = function () {
            n.call(this), PD_UIManager.sceneInitialize();
        };
        const a = Scene_Original.prototype.terminate;
        Scene_Original.prototype.terminate = function () {
            a.call(this), PD_UIManager.sceneTerminate();
        };
        const i = Scene_Original.prototype.update;
        Scene_Original.prototype.update = function () {
            PD_UIManager.isStopMainScene || i.call(this), PD_UIManager.sceneUI_UpdateDraw();
        };
        const r = Scene_Title.prototype.create;
        Scene_Title.prototype.create = function () {
            r.call(this), PD_UIManager.sceneInitialize();
        };
        const s = Scene_Title.prototype.terminate;
        Scene_Title.prototype.terminate = function () {
            s.call(this), PD_UIManager.sceneTerminate();
        };
        const o = Scene_Title.prototype.update;
        Scene_Title.prototype.update = function () {
            PD_UIManager.isStopMainScene || o.call(this), PD_UIManager.sceneUI_UpdateDraw();
        };
        const l = Scene_Map.prototype.createDisplayObjects;
        Scene_Map.prototype.createDisplayObjects = function () {
            l.call(this), PD_UIManager.sceneInitialize();
        };
        const h = Scene_Map.prototype.terminate;
        Scene_Map.prototype.terminate = function () {
            h.call(this), PD_UIManager.sceneTerminate();
        };
        const c = Scene_Map.prototype.update;
        Scene_Map.prototype.update = function () {
            PD_UIManager.isStopMainScene || c.call(this), PD_UIManager.sceneUI_UpdateDraw(), this.isFastForward() && PD_UIManager.sceneUI_UpdateDraw();
        };
        const u = Scene_Battle.prototype.createDisplayObjects;
        Scene_Battle.prototype.createDisplayObjects = function () {
            u.call(this), PD_UIManager.sceneInitialize();
        };
        const p = Scene_Battle.prototype.terminate;
        Scene_Battle.prototype.terminate = function () {
            p.call(this), PD_UIManager.sceneTerminate();
        };
        const g = Scene_Battle.prototype.update;
        Scene_Battle.prototype.update = function () {
            PD_UIManager.isStopMainScene || g.call(this), PD_UIManager.sceneUI_UpdateDraw();
        };
        const _ = Scene_Gameover.prototype.create;
        Scene_Gameover.prototype.create = function () {
            _.call(this), PD_UIManager.sceneInitialize();
        };
        const d = Scene_Gameover.prototype.terminate;
        Scene_Gameover.prototype.terminate = function () {
            d.call(this), PD_UIManager.sceneTerminate();
        };
        const f = Scene_Gameover.prototype.update;
        Scene_Gameover.prototype.update = function () {
            PD_UIManager.isStopMainScene || f.call(this), PD_UIManager.sceneUI_UpdateDraw();
        };
        const m = Scene_MenuBase.prototype.create;
        Scene_MenuBase.prototype.create = function () {
            PD_UIManager.sceneInitialize(), m.call(this);
        };
        const P = Scene_MenuBase.prototype.terminate;
        Scene_MenuBase.prototype.terminate = function () {
            P.call(this), PD_UIManager.sceneTerminate();
        };
        const D = Scene_MenuBase.prototype.update;
        Scene_MenuBase.prototype.update = function () {
            PD_UIManager.isStopMainScene || D.call(this), PD_UIManager.sceneUI_UpdateDraw();
        };
        const I = Scene_File.prototype.create;
        Scene_File.prototype.create = function () {
            I.call(this), PD_UIManager.sceneInitialize();
        };
        const M = Scene_File.prototype.terminate;
        Scene_File.prototype.terminate = function () {
            M.call(this), PD_UIManager.sceneTerminate();
        };
        const y = Scene_File.prototype.update;
        Scene_File.prototype.update = function () {
            PD_UIManager.isStopMainScene || y.call(this), PD_UIManager.sceneUI_UpdateDraw();
        };
        const v = Scene_GameEnd.prototype.create;
        Scene_GameEnd.prototype.create = function () {
            v.call(this), PD_UIManager.sceneInitialize();
        };
        const U = Scene_GameEnd.prototype.terminate;
        Scene_GameEnd.prototype.terminate = function () {
            U.call(this), PD_UIManager.sceneTerminate();
        };
        const E = Scene_GameEnd.prototype.update;
        Scene_GameEnd.prototype.update = function () {
            PD_UIManager.isStopMainScene || E.call(this), PD_UIManager.sceneUI_UpdateDraw();
        };
        const b = Spriteset_Base.prototype.createPictures;
        Spriteset_Base.prototype.createPictures = function () {
            PD_UIManager.addLayerBaseUI(this, "lower"), b.call(this), PD_UIManager.addLayerBaseUI(this, "middle");
        };
        const S = Scene_Base.prototype.createWindowLayer;
        Scene_Base.prototype.createWindowLayer = function () {
            PD_UIManager.addLayerBaseUI(this, "upper"), S.call(this);
        };
    })(),
    (PD_UIManager.sceneInitialize = function () {
        for (let e = 0, t = this.layerNames.length; e < t; e++) PD_UIManager.addLayerBaseUI(SceneManager._scene, this.layerNames[e]);
    }),
    (PD_UIManager.sceneTerminate = function () {
        for (let e in PD_UIManager.base) {
            PD_UIManager.base[e].deleteChildren();
            const t = PD_UIManager.base[e].sprite;
            t.parent.removeChild(t);
        }
        PD_UIManager.initialize();
    }),
    (PD_UIManager.sceneUI_UpdateDraw = function () {
        if (Object.keys(PD_UIManager.list).length > 0) {
            for (let e in PD_UIManager.base) for (let t = 0, n = PD_UIManager.base[e].children, a = n.length; t < a; t++) n[t] && n[t].updateDraw();
            for (; Object.keys(PD_UIManager._afterUpdateUIs).length > 0; )
                for (let e in PD_UIManager._afterUpdateUIs) {
                    const t = PD_UIManager._afterUpdateUIs[e];
                    if (0 === Object.keys(PD_UIManager.UIPropertys[t.priorityParent.name].spriteUpdateFlags).length) {
                        const t = PD_UIManager._afterUpdateUIs[e];
                        delete PD_UIManager._afterUpdateUIs[e], t.updateDraw();
                    } else t.priorityParent.updateSprite();
                }
        }
    }),
    (PD_UIManager.addLayerBaseUI = function (e, t) {
        PD_UIManager.base[t] || e.addChild(new PD_UI(t, null, !0).sprite);
    }),
    (PD_UIManager.deleteUI = function (e) {
        e.delete();
    }),
    (PD_UIManager.insertUI = function (e, t) {
        e.parent = t;
        for (let n = 0, a = t.children, i = a.length; n < i; n++) a[n] !== e && (a[n]._removeParent(), a[n]._addParent(e));
    }),
    (PD_UIManager.replaceUI = function (e, t) {
        e.parent = t.parent;
        const n = PD_UIManager.UIPropertys[t.name].priorityChildren;
        if (Object.keys(n).length > 0) for (let t in n) n[t].priorityParent = e;
        t.priorityParent && (e.priorityParent = t.priorityParent);
        for (let n = 0, a = t.children, i = a.length; n < i; n++) a[n]._removeParent(), a[n]._addParent(e);
        t.delete();
    }),
    (PD_UIManager.saveDatabase = function (e, t) {
        return new Promise((n) => {
            if (Utils.isNwjs()) {
                const a = this.UI_to_jsonData(t);
                PD_UIManager.UI_Database[e] = a;
                const i = "undefined" != typeof PD_GameBridge_Child ? PD_GameBridge_Child.src.slice(0, -10) : "";
                (e = i + "_UIManager/" + e + ".ui"),
                    PD_File.save(e, a).then(() => {
                        n();
                    });
            } else n();
        });
    }),
    (PD_UIManager.loadDatabase = function (e, t, n) {
        return PD_UIManager.jsonData_to_UI(PD_UIManager.UI_Database[e], t, n);
    }),
    (PD_UIManager.loadDatabase_insert = function (e, t, n) {
        const a = PD_UIManager.jsonData_to_UI(PD_UIManager.UI_Database[e], t, n);
        return PD_UIManager.insertUI(a, t), a;
    }),
    (PD_UIManager.loadDatabase_replace = function (e, t, n) {
        const a = PD_UIManager.jsonData_to_UI(PD_UIManager.UI_Database[e], t.parent, n);
        return PD_UIManager.replaceUI(a, t), a;
    }),
    (PD_UIManager.deleteDatabase = function (e) {
        delete PD_UIManager.UI_Database[e];
    }),
    (PD_UIManager.UI_to_jsonData = function (e) {
        return PD_UIManager._stringifyUI(e);
    }),
    (PD_UIManager.jsonData_to_UI = function (e, t, n) {
        const a = this._parseUI(e);
        a.setInstanceID(n), (a._p = t);
        const i = a.reBuildUI();
        return a.reBuildUI2(), i.length > 0 && (PD_UIManager.UIPropertys[a.name].reBuild_BitmapLoadPromise = Promise.all(i)), a;
    }),
    (PD_UIManager._stringifyUI = function (e) {
        const t = e._p;
        delete e._p;
        const n = PD_Json.stringify(e);
        return (e._p = t), n;
    }),
    (PD_UIManager._parseUI = function (e) {
        return PD_Json.parse(e);
    }),
    (PD_UI.prototype.constructor = PD_UI),
    (PD_UI.prototype.initialize = function (e, t, n) {
        n && (this.isBase = !0),
            this._n,
            this._p,
            this._pp,
            this._c,
            this._b,
            this._bW,
            this._bH,
            this._dTcp,
            this._dTip,
            this._dTiw,
            this._dTih,
            this._dTiws,
            this._dTioy,
            this._x,
            this._y,
            this._z,
            this._r,
            this._aX,
            this._aY,
            this._sX,
            this._sY,
            this._fX,
            this._fY,
            this._fW,
            this._fH,
            this._o,
            this._v,
            this._tR,
            this._tG,
            this._tB,
            this._tD,
            this._bl,
            this._h,
            this._s,
            this._l,
            this._rD,
            this._rU,
            this._m,
            this.initializeTempProperty(e),
            this.create(e, t);
    }),
    (PD_UI.prototype.initializeTempProperty = function (e) {
        this.isBase
            ? (PD_UIManager.baseUIPropertys[e] = { sprite: new Sprite() })
            : (PD_UIManager.UIPropertys[e] = {
                  sprite: new Sprite(),
                  isLoadedPicture: !1,
                  originalBitmap: null,
                  realX: 0,
                  realY: 0,
                  realRotation: 0,
                  realScale: new Point(1, 1),
                  realFrame: { x: 0, y: 0, width: 0, height: 0 },
                  realOpacity: 255,
                  realVisible: !0,
                  realTone: [0, 0, 0, 0],
                  priorityChildren: {},
                  spriteUpdateFlags: {},
                  reBuild_BitmapLoadPromise: null,
              });
    }),
    Object.defineProperty(PD_UI.prototype, "name", {
        get: function () {
            return this._n;
        },
        set: function (e) {
            if (this.isBase) throw new Error("レイヤーベースＵＩの名前は変更できません");
            if (((e = String(e)), PD_UIManager.list[e])) throw new Error("同名のUIがすでに存在しています");
            (PD_UIManager.list[e] = PD_UIManager.list[this.name]), delete PD_UIManager.list[this.name], (PD_UIManager.UIPropertys[e] = PD_UIManager.UIPropertys[this.name]), delete PD_UIManager.UIPropertys[this.name], (this._n = e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "parent", {
        get: function () {
            return this._p;
        },
        set: function (e) {
            e && e.constructor === PD_UI && e !== this._p && (this._removeParent(), this._addParent(e), e.setSpriteUpdateFlag("all"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "priorityParent", {
        get: function () {
            return this._pp;
        },
        set: function (e) {
            e && e.constructor === PD_UI
                ? (this._pp && delete PD_UIManager.UIPropertys[this._pp.name].priorityChildren[this.name], (this._pp = e), (PD_UIManager.UIPropertys[e.name].priorityChildren[this.name] = this), this.parent.setSpriteUpdateFlag("all"))
                : this._pp && (PD_UIManager.UIPropertys[this._pp.name] && delete PD_UIManager.UIPropertys[this._pp.name].priorityChildren[this.name], delete this._pp, this.setSpriteUpdateFlag("all"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "children", {
        get: function () {
            return this._c ? this._c : [];
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "x", {
        get: function () {
            return void 0 !== this._x ? this._x : 0;
        },
        set: function (e) {
            (e = Math.round(1e4 * e) / 1e4), this._x !== e && (0 === e ? delete this._x : (this._x = e), this.setSpriteUpdateFlag("position"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "y", {
        get: function () {
            return void 0 !== this._y ? this._y : 0;
        },
        set: function (e) {
            (e = Math.round(1e4 * e) / 1e4), this._y !== e && (0 === e ? delete this._y : (this._y = e), this.setSpriteUpdateFlag("position"));
        },
        configurable: !0,
    }),
    (PD_UI.prototype.move = function (e, t) {
        null != e && (this.x = e), void 0 !== t && null !== e && (this.y = t);
    }),
    Object.defineProperty(PD_UI.prototype, "z", {
        get: function () {
            return void 0 !== this._z ? this._z : 0;
        },
        set: function (e) {
            e = Math.floor(e);
            const t = this.parent,
                n = t.children,
                a = t.sprite;
            let i = null;
            const r = [];
            for (let t = 0; t < n.length; t++) n[t] === this ? (n.splice(t, 1), a.removeChild(this.sprite), t--) : n[t].z > e && (null === i && (i = t), a.removeChild(n[t].sprite), r.push(n[t].sprite));
            null === i && (i = n.length), n.splice(i, 0, this), a.addChild(this.sprite);
            for (let e = 0, t = r.length; e < t; e++) a.addChild(r[e]);
            0 === e ? delete this._z : (this._z = e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "r", {
        get: function () {
            return void 0 !== this._r ? this._r : 0;
        },
        set: function (e) {
            (e = Math.round(1e4 * e) / 1e4), this._r !== e && (0 === e ? delete this._r : (this._r = e), this.setSpriteUpdateFlag("rotation"), this.setSpriteUpdateFlag("position"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "rotation", {
        get: function () {
            return this.r;
        },
        set: function (e) {
            this.r = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "anchor", {
        get: function () {
            const e = this;
            return {
                get x() {
                    return e.aX;
                },
                set x(t) {
                    e.aX = t;
                },
                get y() {
                    return e.aY;
                },
                set y(t) {
                    e.aY = t;
                },
            };
        },
        set: function (e) {
            Array.isArray(e) ? (null !== e[0] && (this.aX = e[0]), null !== e[1] && (this.aY = e[1])) : (null !== e.x && (this.aX = e.x), null !== e.y && (this.aY = e.y));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "aX", {
        get: function () {
            return void 0 !== this._aX ? this._aX : 0;
        },
        set: function (e) {
            (e = Math.round(1e4 * e) / 1e4), this._aX !== e && (0 === e ? delete this._aX : (this._aX = e), this.setSpriteUpdateFlag("anchor"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "aY", {
        get: function () {
            return void 0 !== this._aY ? this._aY : 0;
        },
        set: function (e) {
            (e = Math.round(1e4 * e) / 1e4), this._aY !== e && (0 === e ? delete this._aY : (this._aY = e), this.setSpriteUpdateFlag("anchor"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "anchorX", {
        get: function () {
            return this.aX;
        },
        set: function (e) {
            this.aX = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "anchorY", {
        get: function () {
            return this.aY;
        },
        set: function (e) {
            this.aY = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "scale", {
        get: function () {
            const e = this;
            return {
                get x() {
                    return e.sX;
                },
                set x(t) {
                    e.sX = t;
                },
                get y() {
                    return e.sY;
                },
                set y(t) {
                    e.sY = t;
                },
            };
        },
        set: function (e) {
            Array.isArray(e) ? (null !== e[0] && (this.sX = e[0]), null !== e[1] && (this.sY = e[1])) : (null !== e.x && (this.sX = e.x), null !== e.y && (this.sY = e.y));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "sX", {
        get: function () {
            return void 0 !== this._sX ? this._sX : 1;
        },
        set: function (e) {
            (e = Math.round(1e4 * e) / 1e4), this._sX !== e && (1 === e ? delete this._sX : (this._sX = e), this.setSpriteUpdateFlag("scale"), this.setSpriteUpdateFlag("position"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "sY", {
        get: function () {
            return void 0 !== this._sY ? this._sY : 1;
        },
        set: function (e) {
            (e = Math.round(1e4 * e) / 1e4), this._sY !== e && (1 === e ? delete this._sY : (this._sY = e), this.setSpriteUpdateFlag("scale"), this.setSpriteUpdateFlag("position"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "scaleX", {
        get: function () {
            return this.sX;
        },
        set: function (e) {
            this.sX = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "scaleY", {
        get: function () {
            return this.sY;
        },
        set: function (e) {
            this.sY = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "frame", {
        get: function () {
            const e = this;
            return {
                get x() {
                    return e.fX;
                },
                set x(t) {
                    e.fX = t;
                },
                get y() {
                    return e.fY;
                },
                set y(t) {
                    e.fY = t;
                },
                get width() {
                    return e.fW;
                },
                set width(t) {
                    e.fW = t;
                },
                get height() {
                    return e.fH;
                },
                set height(t) {
                    e.fH = t;
                },
            };
        },
        set: function (e) {
            Array.isArray(e)
                ? (null !== e[0] && (this.fX = e[0]), null !== e[1] && (this.fY = e[1]), null !== e[2] && (this.fW = e[2]), null !== e[3] && (this.fH = e[3]))
                : (null !== e.x && (this.fX = e.x), null !== e.y && (this.fY = e.y), null !== e.width && (this.fW = e.width), null !== e.height && (this.fH = e.height));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "fX", {
        get: function () {
            return void 0 !== this._fX ? this._fX : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._fX !== e && (0 === e ? delete this._fX : (this._fX = e), this.setSpriteUpdateFlag("frame"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "fY", {
        get: function () {
            return void 0 !== this._fY ? this._fY : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._fY !== e && (0 === e ? delete this._fY : (this._fY = e), this.setSpriteUpdateFlag("frame"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "fW", {
        get: function () {
            return void 0 !== this._fW ? this._fW : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._fW !== e && (0 === e ? delete this._fW : (this._fW = e), this.setSpriteUpdateFlag("frame"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "fH", {
        get: function () {
            return void 0 !== this._fH ? this._fH : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._fH !== e && (0 === e ? delete this._fH : (this._fH = e), this.setSpriteUpdateFlag("frame"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "frameX", {
        get: function () {
            return this.fX;
        },
        set: function (e) {
            this.fX = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "frameY", {
        get: function () {
            return this.fY;
        },
        set: function (e) {
            this.fY = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "frameWidth", {
        get: function () {
            return this.fW;
        },
        set: function (e) {
            this.fW = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "frameHeight", {
        get: function () {
            return this.fH;
        },
        set: function (e) {
            this.fH = e;
        },
        configurable: !0,
    }),
    (PD_UI.prototype.setFrame = function (e, t, n, a) {
        this.frame = [e, t, n, a];
    }),
    Object.defineProperty(PD_UI.prototype, "width", {
        get: function () {
            return this.fW;
        },
        set: function (e) {
            this.fW = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "height", {
        get: function () {
            return this.fH;
        },
        set: function (e) {
            this.fH = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "o", {
        get: function () {
            return void 0 !== this._o ? this._o : 255;
        },
        set: function (e) {
            (e = Math.round(e).clamp(0, 255)), this._o !== e && (e >= 255 ? delete this._o : (this._o = e), this.setSpriteUpdateFlag("opacity"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "opacity", {
        get: function () {
            return this.o;
        },
        set: function (e) {
            this.o = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "visible", {
        get: function () {
            return void 0 === this._v;
        },
        set: function (e) {
            (1 !== this._v) !== e && (e ? delete this._v : (this._v = 1), this.setSpriteUpdateFlag("visible"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "tone", {
        get: function () {
            const e = this;
            return {
                get r() {
                    return e.tR;
                },
                set r(t) {
                    e.tR = t;
                },
                get g() {
                    return e.tG;
                },
                set g(t) {
                    e.tG = t;
                },
                get b() {
                    return e.tB;
                },
                set b(t) {
                    e.tB = t;
                },
                get d() {
                    return e.tD;
                },
                set d(t) {
                    e.tD = t;
                },
            };
        },
        set: function (e) {
            Array.isArray(e)
                ? (null !== e[0] && (this.tR = e[0]), null !== e[1] && (this.tG = e[1]), null !== e[2] && (this.tB = e[2]), null !== e[3] && (this.tD = e[3]))
                : (null !== e.r && (this.tR = e.r), null !== e.g && (this.tG = e.g), null !== e.b && (this.tB = e.b), null !== e.d && (this.tD = e.d));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "tR", {
        get: function () {
            return void 0 !== this._tR ? this._tR : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._tR !== e && (0 === e ? delete this._tR : (this._tR = e), this.setSpriteUpdateFlag("tone"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "tG", {
        get: function () {
            return void 0 !== this._tG ? this._tG : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._tG !== e && (0 === e ? delete this._tG : (this._tG = e), this.setSpriteUpdateFlag("tone"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "tB", {
        get: function () {
            return void 0 !== this._tB ? this._tB : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._tB !== e && (0 === e ? delete this._tB : (this._tB = e), this.setSpriteUpdateFlag("tone"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "tD", {
        get: function () {
            return void 0 !== this._tD ? this._tD : 0;
        },
        set: function (e) {
            (e = Math.round(e)), this._tD !== e && (0 === e ? delete this._tD : (this._tD = e), this.setSpriteUpdateFlag("tone"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "toneR", {
        get: function () {
            return this.tR;
        },
        set: function (e) {
            this.tR = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "toneG", {
        get: function () {
            return this.tG;
        },
        set: function (e) {
            this.tG = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "toneB", {
        get: function () {
            return this.tB;
        },
        set: function (e) {
            this.tB = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "toneD", {
        get: function () {
            return this.tD;
        },
        set: function (e) {
            this.tD = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "blendMode", {
        get: function () {
            return void 0 !== this._bl ? this._bl : 0;
        },
        set: function (e) {
            this._bl !== e && (0 === e ? delete this._bl : (this._bl = e), this.setSpriteUpdateFlag("blendMode"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "hsl", {
        get: function () {
            return [this.h, this.s, this.l];
        },
        set: function (e) {
            Array.isArray(e) && (null !== e[0] && (this.h = e[0]), null !== e[1] && (this.s = e[1]), null !== e[2] && (this.l = e[2]));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "h", {
        get: function () {
            return void 0 !== this._h ? this._h : 0;
        },
        set: function (e) {
            (e = Math.round(e)),
                this._h !== e &&
                    (0 === e ? delete this._h : ((this._h = e), !PD_UIManager.UIPropertys[this.name].originalBitmap && this._bitmap && (PD_UIManager.UIPropertys[this.name].originalBitmap = this._bitmap)), this.setSpriteUpdateFlag("hsl"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "s", {
        get: function () {
            return void 0 !== this._s ? this._s : 0;
        },
        set: function (e) {
            (e = Math.round(100 * e) / 100),
                this._s !== e &&
                    (0 === e ? delete this._s : ((this._s = e), !PD_UIManager.UIPropertys[this.name].originalBitmap && this._bitmap && (PD_UIManager.UIPropertys[this.name].originalBitmap = this._bitmap)), this.setSpriteUpdateFlag("hsl"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "l", {
        get: function () {
            return void 0 !== this._l ? this._l : 0;
        },
        set: function (e) {
            (e = Math.round(e)),
                this._l !== e &&
                    (0 === e ? delete this._l : ((this._l = e), !PD_UIManager.UIPropertys[this.name].originalBitmap && this._bitmap && (PD_UIManager.UIPropertys[this.name].originalBitmap = this._bitmap)), this.setSpriteUpdateFlag("hsl"));
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "rD", {
        get: function () {
            return void 0 !== this._rD ? this._rD : [0, 0, 0];
        },
        set: function (e) {
            (e[0] = Math.round(e[0])), (e[1] = Math.round(100 * e[1]) / 100), (e[2] = Math.round(e[2])), null == e ? delete this._rD : (this._rD = e), this.setSpriteUpdateFlag("hsl");
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "rU", {
        get: function () {
            return void 0 !== this._rU ? this._rU : [360, 1, 255];
        },
        set: function (e) {
            (e[0] = Math.round(e[0])), (e[1] = Math.round(100 * e[1]) / 100), (e[2] = Math.round(e[2])), null == e ? delete this._rU : (this._rU = e), this.setSpriteUpdateFlag("hsl");
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "m", {
        get: function () {
            return this._m ? this._m : [];
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "memo", {
        get: function () {
            return this._m ? this._m : [];
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "sprite", {
        get: function () {
            return this.isBase ? PD_UIManager.baseUIPropertys[this.name].sprite : PD_UIManager.UIPropertys[this.name].sprite;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "_bitmap", {
        get: function () {
            return this.sprite.bitmap;
        },
        set: function (e) {
            this.sprite.bitmap = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realX", {
        get: function () {
            return this.isBase ? this.x : PD_UIManager.UIPropertys[this.name].realX;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realY", {
        get: function () {
            return this.isBase ? this.y : PD_UIManager.UIPropertys[this.name].realY;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realRotation", {
        get: function () {
            return this.isBase ? this.rotation : PD_UIManager.UIPropertys[this.name].realRotation;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realScale", {
        get: function () {
            let e;
            return (
                (e = this.isBase ? { x: this.scaleX, y: this.scaleY } : PD_UIManager.UIPropertys[this.name].realScale),
                {
                    get x() {
                        return e.x;
                    },
                    get y() {
                        return e.y;
                    },
                }
            );
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realScaleX", {
        get: function () {
            return this.isBase ? this.scaleX : PD_UIManager.UIPropertys[this.name].realScale.x;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realScaleY", {
        get: function () {
            return this.isBase ? this.scaleX : PD_UIManager.UIPropertys[this.name].realScale.y;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realTone", {
        get: function () {
            const e = PD_UIManager.UIPropertys[this.name].realTone;
            return {
                get r() {
                    return e[0];
                },
                get g() {
                    return e[1];
                },
                get b() {
                    return e[2];
                },
                get d() {
                    return e[3];
                },
            };
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realToneR", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].realTone[0];
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realToneG", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].realTone[1];
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realToneB", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].realTone[2];
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realToneD", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].realTone[3];
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realOpacity", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].realOpacity;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "realVisible", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].realVisible;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "reBuild_BitmapLoadPromise", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].reBuild_BitmapLoadPromise;
        },
        configurable: !0,
    }),
    (PD_UI.prototype.create = function (e, t) {
        if (PD_UIManager.list[e]) throw new Error("同名のUIがすでに存在しています：" + e);
        (e = String(e)),
            (this._n = e),
            PD_UIManager.createNum++,
            this.isBase ? (PD_UIManager.base[e] = this) : (this._addParent(t), (PD_UIManager.list[e] = this), this.setSpriteUpdateFlag("all")),
            this.sprite.move(-this.width, -this.height);
    }),
    (PD_UI.prototype.delete = function () {
        PD_UIManager.list[this.name] && (this._removeParent(), this.priorityParent && (this.priorityParent = null), delete PD_UIManager.list[this.name], delete PD_UIManager.UIPropertys[this.name], this.deleteChildren());
    }),
    (PD_UI.prototype.deleteChildren = function () {
        for (let e = 0, t = this.children.slice(), n = t.length; e < n; e++) t[e].delete();
    }),
    (PD_UI.prototype._addParent = function (e) {
        (this._p = e), e._c || (e._c = []), e._c.includes(this) || e._c.push(this), e.sprite.addChild(this.sprite);
    }),
    (PD_UI.prototype._removeParent = function () {
        const e = this.parent;
        if (e) {
            this.sprite.parent.removeChild(this.sprite);
            const t = e._c.indexOf(this);
            t >= 0 && e._c.splice(t, 1), 0 === e._c.length && delete e._c, delete this._p;
        }
    }),
    (PD_UI.prototype.setSpriteUpdateFlag = function (e) {
        if (!PD_UIManager.list[this.name]) return;
        let t = PD_UIManager.UIPropertys[this.name].spriteUpdateFlags;
        if (!t[e]) {
            t[e] = !0;
            for (let t = 0, n = this.children, a = n.length; t < a; t++) n[t].setSpriteUpdateFlag(e);
            const n = PD_UIManager.UIPropertys[this.name].priorityChildren;
            for (let t in n) n[t].setSpriteUpdateFlag(e);
        }
    }),
    (PD_UI.prototype.updateDraw = function () {
        this.updateSprite();
        for (let e = 0, t = this.children, n = t.length; e < n; e++) t[e] && t[e].updateDraw && (t[e].priorityParent ? (PD_UIManager._afterUpdateUIs[t[e].name] = t[e]) : t[e].updateDraw());
    }),
    (PD_UI.prototype.updateSprite = function () {
        const e = this.sprite,
            t = this.parent,
            n = PD_UIManager.UIPropertys[this.name].spriteUpdateFlags,
            a = PD_UIManager.UIPropertys[this.name];
        if (n.anchor || n.all) {
            let t = this.anchorX,
                n = this.anchorY;
            this.width && this.anchorX && ((t = Math.round(this.width * this.anchorX)), (t /= this.width)), this.height && this.anchorY && ((n = Math.round(this.height * this.anchorY)), (n /= this.height)), (e.anchor = new Point(t, n));
        }
        if (
            ((n.frame || n.all) && e.setFrame(this.frameX * PD_UIManager.resRate, this.frameY * PD_UIManager.resRate, this.frameWidth * PD_UIManager.resRate, this.frameHeight * PD_UIManager.resRate),
            (n.blendMode || n.all) && (e.blendMode = this.blendMode),
            (n.hsl || n.all) && a.originalBitmap)
        ) {
            const e = a.originalBitmap.shiftHSL(this.h, this.s, this.l, this.rD, this.rU);
            e && (this._bitmap = e);
        }
        if (this.priorityParent) {
            const i = this.priorityParent;
            if (
                ((n.rotation || n.all) && ((a.realRotation = 0 === i.realRotation ? this.rotation : (this.rotation + i.realRotation) % (2 * Math.PI)), (e.rotation = i.realRotation + this.rotation - t.realRotation)),
                (n.scale || n.all) && ((a.realScale = new Point(this.scaleX * i.realScaleX, this.scaleY * i.realScaleY)), (e.scale = new Point((i.realScaleX * this.scaleX) / t.realScaleX, (i.realScale.y * this.scaleY) / t.realScaleY))),
                n.position || n.all)
            ) {
                const n = t.realX,
                    r = t.realY,
                    s = i.realX,
                    o = i.realY;
                let l,
                    h,
                    c = s + this.x * i.realScaleX,
                    u = o + this.y * i.realScaleY;
                if (0 !== i.realRotation) {
                    const e = PD_Math.getDistance(s, o, c, u),
                        t = PD_Math.getRadian(s, o, c, u),
                        n = PD_Math.getEllipsePosition(s, o, i.realRotation + t, e, e);
                    (c = n.x), (u = n.y);
                }
                if (((a.realX = c), (a.realY = u), 0 !== t.realRotation || 0 !== i.realRotation)) {
                    const e = PD_Math.getDistance(n, r, c, u),
                        a = PD_Math.getRadian(n, r, c, u),
                        i = PD_Math.getEllipsePosition(n, r, -t.realRotation + a, e, e);
                    (l = ((i.x - n) / t.realScaleX) * PD_UIManager.resRate), (h = ((i.y - r) / t.realScaleY) * PD_UIManager.resRate);
                } else (l = ((c - n) / t.realScaleX) * PD_UIManager.resRate), (h = ((u - r) / t.realScaleY) * PD_UIManager.resRate);
                (e.x = l), (e.y = h);
            }
            (n.tone || n.all) && ((a.realTone = [this.toneR + i.realToneR, this.toneG + i.realToneG, this.toneB + i.realToneB, this.toneD + i.realToneD]), e.setColorTone(a.realTone)),
                (n.opacity || n.all) && ((a.realOpacity = Math.round((this.opacity / 255) * (i.realOpacity / 255) * 255)), (e.opacity = a.realOpacity)),
                (n.visible || n.all) && ((a.realVisible = !(!this.visible || !i.realVisible)), (e.visible = a.realVisible));
        } else if (t && !t.isBase) {
            if (
                ((n.rotation || n.all) && ((a.realRotation = 0 === t.realRotation ? this.rotation : (this.rotation + t.realRotation) % (2 * Math.PI)), (e.rotation = this.rotation)),
                (n.scale || n.all) && ((a.realScale = new Point(this.scaleX * t.realScale.x, this.scaleY * t.realScale.y)), (e.scale = new Point(this.scaleX, this.scaleY))),
                n.position || n.all)
            ) {
                const n = t.realX,
                    i = t.realY;
                let r = n + this.x * t.realScaleX,
                    s = i + this.y * t.realScaleY;
                if (0 !== t.realRotation) {
                    const e = PD_Math.getDistance(n, i, r, s),
                        a = PD_Math.getRadian(n, i, r, s),
                        o = PD_Math.getEllipsePosition(n, i, t.realRotation + a, e, e);
                    (r = o.x), (s = o.y);
                }
                (a.realX = r), (a.realY = s), e.move(Math.round(this.x * PD_UIManager.resRate), Math.round(this.y * PD_UIManager.resRate));
            }
            (n.tone || n.all) && ((a.realTone = [this.toneR + t.realToneR, this.toneG + t.realToneG, this.toneB + t.realToneB, this.toneD + t.realToneD]), e.setColorTone([this.toneR, this.toneG, this.toneB, this.toneD])),
                (n.opacity || n.all) && ((a.realOpacity = Math.round((this.opacity / 255) * (t.realOpacity / 255) * 255)), (e.opacity = this.opacity)),
                (n.visible || n.all) && ((a.realVisible = !(!this.visible || !t.realVisible)), (e.visible = this.visible));
        } else
            (n.rotation || n.all) && ((a.realRotation = this.rotation % (2 * Math.PI)), (e.rotation = this.rotation)),
                (n.scale || n.all) && ((a.realScale = new Point(this.scaleX, this.scaleY)), (e.scale = new Point(this.scaleX, this.scaleY))),
                (n.position || n.all) && ((a.realX = this.x), (a.realY = this.y), e.move(Math.round(this.x * PD_UIManager.resRate), Math.round(this.y * PD_UIManager.resRate))),
                (n.tone || n.all) && ((a.realTone = [this.toneR, this.toneG, this.toneB, this.toneD]), e.setColorTone(a.realTone)),
                (n.opacity || n.all) && ((a.realOpacity = this.opacity), (e.opacity = this.opacity)),
                (n.visible || n.all) && ((a.realVisible = this.visible), (e.visible = this.visible));
        PD_UIManager.UIPropertys[this.name].spriteUpdateFlags = {};
    }),
    (PD_UI.prototype.reBuildUI = function (e) {
        let t = [];
        const n = this.name;
        this.initializeTempProperty(n), this.create(n, this.parent), e && e.addChild(this.sprite);
        const a = this._b;
        if (a) {
            const e = [];
            for (let t = 0, n = a.length; t < n; t++) {
                const n = a[t].slice(),
                    i = this.getBitmapFuncName(n.shift());
                e.push(() => this[i + "_draw"](...n));
            }
            e.push(
                () =>
                    new Promise((e) => {
                        const t = this.h;
                        t && ((this._h = 0), (this.h = t));
                        const n = this.s;
                        n && ((this._s = 0), (this.s = n));
                        const a = this.l;
                        a && ((this._l = 0), (this.l = a));
                        const i = void 0 !== this._fX ? this._fX : 0;
                        i && ((this._fX = 0), (this.fX = i));
                        const r = void 0 !== this._fY ? this._fY : 0;
                        r && ((this._fY = 0), (this.fY = r));
                        const s = void 0 !== this._fW ? this._fW : 0;
                        s && ((this._fW = 0), (this.fW = s));
                        const o = void 0 !== this._fH ? this._fH : 0;
                        o && ((this._fH = 0), (this.fH = o)), e();
                    })
            ),
                t.push(PD_Promise.runArray(e).catch(() => {}));
        }
        for (let e = 0, n = this.children, a = n.length; e < a; e++) t = t.concat(n[e].reBuildUI());
        return t;
    }),
    (PD_UI.prototype.reBuildUI2 = function () {
        this.priorityParent && (this.priorityParent = this.priorityParent);
        for (let e = 0, t = this.children, n = t.length; e < n; e++) t[e].reBuildUI2();
        const e = this.z;
        this.z = e;
    }),
    (PD_UI.prototype.addUI = function (e, t, n) {
        const a = new PD_UI(e, this);
        (t || n) && (t || (t = 0), n || (n = 0), (a.frame = [0, 0, t, n]), (a._bW = t * PD_UIManager.resRate), (a._bH = n * PD_UIManager.resRate));
        const i = a.z;
        return (a.z = i), a;
    }),
    (PD_UI.prototype._initBitmap = function () {
        let e = PD_UIManager.UIPropertys[this.name].originalBitmap ? PD_UIManager.UIPropertys[this.name].originalBitmap : this._bitmap;
        return (
            e ||
                ((e =
                    this._bW || this._bH
                        ? new Bitmap(this._bW ? this._bW : void 0, this._bH ? this._bH : void 0)
                        : this.width || this.height
                        ? new Bitmap(this.width ? this.width * PD_UIManager.resRate : void 0, this.height ? this.height * PD_UIManager.resRate : void 0)
                        : new Bitmap()),
                (this._bitmap = e),
                this.h && this.s && this.l && (PD_UIManager.UIPropertys[this.name].originalBitmap = e)),
            this.setSpriteUpdateFlag("anchor"),
            e
        );
    }),
    (PD_UI.prototype.getBitmapFuncName = function (e) {
        switch (e) {
            case 0:
                return "clearRect";
            case 1:
                return "resize";
            case 2:
                return "loadPicture";
            case 3:
                return "loadAnimation";
            case 4:
                return "loadBattleback1";
            case 5:
                return "loadBattleback2";
            case 6:
                return "loadEnemy";
            case 7:
                return "loadCharacter";
            case 8:
                return "loadFace";
            case 9:
                return "loadParallax";
            case 10:
                return "loadSvActor";
            case 11:
                return "loadSvEnemy";
            case 12:
                return "loadSystem";
            case 13:
                return "loadTileset";
            case 14:
                return "loadTitle1";
            case 15:
                return "loadTitle2";
            case 16:
                return "loadBitmap";
            case 17:
                return "drawLine";
            case 18:
                return "drawRect";
            case 19:
                return "drawEllipse";
            case 20:
                return "fillAll";
            case 21:
                return "fillRect";
            case 22:
                return "drawFillRect";
            case 23:
                return "gradientFillRect";
            case 24:
                return "fillEllipse";
            case 25:
                return "drawCircle";
            case 26:
                return "drawFillEllipse";
            case 27:
                return "drawText";
            case 28:
                return "drawTextEX";
            case 29:
                return "drawLineChart";
            case 30:
                return "loadImage";
            case 31:
                return "drawArc";
        }
    }),
    (PD_UI.prototype.clear = function () {
        return (this._b = []), this.clear_draw();
    }),
    (PD_UI.prototype.clear_draw = function () {
        return new Promise((e) => {
            this._bitmap && (this._bW && (this._bW = this._bitmap.width), this._bH && (this._bH = this._bitmap.height), this._bitmap.clear()), e();
        });
    }),
    (PD_UI.prototype.clearRect = function (e, t, n, a) {
        this._b || (this._b = []), this._b.push([0, e, t, n, a]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.clearRect_draw(e, t, n, a);
    }),
    (PD_UI.prototype.clearRect_draw = function (e, t, n, a) {
        return new Promise((i) => {
            this._initBitmap().clearRect(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a * PD_UIManager.resRate), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), i();
        });
    }),
    (PD_UI.prototype.resize = function (e, t) {
        this._b || (this._b = []), this._b.push([1, e, t]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.resize_draw(e, t);
    }),
    (PD_UI.prototype.resize_draw = function (e, t) {
        return new Promise((n) => {
            this._initBitmap().resize(e * PD_UIManager.resRate, t * PD_UIManager.resRate), this.sprite._refresh(), this.setSpriteUpdateFlag("anchor"), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), n();
        });
    }),
    (PD_UI.prototype.loadImage = function (e, t, n, a, i, r, s) {
        return this.loadBitmap(PD_UIManager.loadImageFolderName + "/", e, t, n, a, i, r, s, !0, 30);
    }),
    (PD_UI.prototype.loadImage_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw(PD_UIManager.loadImageFolderName + "/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadPicture = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/pictures/", e, t, n, a, i, r, s, !0, 2);
    }),
    (PD_UI.prototype.loadPicture_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/pictures/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadAnimation = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/animations/", e, t, n, a, i, r, s, !0, 3);
    }),
    (PD_UI.prototype.loadAnimation_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/animations/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadBattleback1 = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/battlebacks1/", e, t, n, a, i, r, s, !0, 4);
    }),
    (PD_UI.prototype.loadBattleback1_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/battlebacks1/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadBattleback2 = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/battlebacks2/", e, t, n, a, i, r, s, !0, 5);
    }),
    (PD_UI.prototype.loadBattleback2_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/battlebacks2/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadEnemy = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/enemies/", e, t, n, a, i, r, s, !0, 6);
    }),
    (PD_UI.prototype.loadEnemy_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/enemies/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadCharacter = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/characters/", e, t, n, a, i, r, s, !1, 7);
    }),
    (PD_UI.prototype.loadCharacter_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/characters/", e, t, n, a, i, r, s, !1);
    }),
    (PD_UI.prototype.loadFace = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/faces/", e, t, n, a, i, r, s, !0, 8);
    }),
    (PD_UI.prototype.loadFace_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/faces/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadParallax = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/parallaxes/", e, t, n, a, i, r, s, !0, 9);
    }),
    (PD_UI.prototype.loadParallax_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/parallaxes/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadSvActor = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/sv_actors/", e, t, n, a, i, r, s, !1, 10);
    }),
    (PD_UI.prototype.loadSvActor_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/sv_actors/", e, t, n, a, i, r, s, !1);
    }),
    (PD_UI.prototype.loadSvEnemy = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/sv_enemies/", e, t, n, a, i, r, s, !0, 11);
    }),
    (PD_UI.prototype.loadSvEnemy_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/sv_enemies/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadSystem = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/system/", e, t, n, a, i, r, s, !1, 12);
    }),
    (PD_UI.prototype.loadSystem_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/system/", e, t, n, a, i, r, s, !1);
    }),
    (PD_UI.prototype.loadTileset = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/tilesets/", e, t, n, a, i, r, s, !1, 13);
    }),
    (PD_UI.prototype.loadTileset_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/tilesets/", e, t, n, a, i, r, s, !1);
    }),
    (PD_UI.prototype.loadTitle1 = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/titles1/", e, t, n, a, i, r, s, !0, 14);
    }),
    (PD_UI.prototype.loadTitle1_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/titles1/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadTitle2 = function (e, t, n, a, i, r, s) {
        return this.loadBitmap("img/titles2/", e, t, n, a, i, r, s, !0, 15);
    }),
    (PD_UI.prototype.loadTitle2_draw = function (e, t, n, a, i, r, s) {
        return this.loadBitmap_draw("img/titles2/", e, t, n, a, i, r, s, !0);
    }),
    (PD_UI.prototype.loadBitmap = function (e, t, n, a, i, r, s, o, l, h = 16) {
        this._b || (this._b = []), 16 === h ? this._b.push([h, e, t, n, a, i, r, s, o, l]) : this._b.push([h, t, n, a, i, r, s, o]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.loadBitmap_draw(e, t, n, a, i, r, s, o, l);
    }),
    (PD_UI.prototype.loadBitmap_draw = function (e, t, n = 0, a = 0, i, r, s, o, l) {
        return new Promise((h) => {
            const c = this._initBitmap();
            l && !c.smooth && (c.smooth = l);
            let u = ImageManager.loadBitmap(e, t + (PD_UIManager.screenHeight !== PD_UIManager.baseScreenHeight ? "_" + PD_UIManager.screenHeight + "p" : ""));
            u.addLoadListener(() => {
                const e = PD_UIManager.list[this.name];
                if (e === this) {
                    const t = o ? [o[0] * PD_UIManager.resRate, o[1] * PD_UIManager.resRate, o[2] * PD_UIManager.resRate, o[3] * PD_UIManager.resRate] : [0, 0, u.width, u.height];
                    void 0 !== e._bW || PD_UIManager.UIPropertys[this.name].isLoadedPicture || (c.resize(t[2], t[3]), (PD_UIManager.UIPropertys[this.name].isLoadedPicture = !0), this.setSpriteUpdateFlag("anchor")),
                        void 0 === e._fW && (e.frame = [0, 0, t[2], t[3]]),
                        (i || r || s) && (u = u.shiftHSL(i, r, s));
                    let l = c.width - n * PD_UIManager.resRate;
                    l > t[2] ? (l = t[2]) : (t[2] = l);
                    let p = c.height - a * PD_UIManager.resRate;
                    p > t[3] ? (p = t[3]) : (t[3] = p), c.blt(u, t[0], t[1], t[2], t[3], n * PD_UIManager.resRate, a * PD_UIManager.resRate, l, p), e.sprite._refresh(), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), h();
                }
            });
        });
    }),
    (PD_UI.prototype.drawLine = function (e, t, n, a, i, r) {
        this._b || (this._b = []), this._b.push([17, e, t, n, a, i, r]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawLine_draw(e, t, n, a, i, r);
    }),
    (PD_UI.prototype.drawLine_draw = function (e, t, n, a, i, r) {
        return new Promise((s) => {
            this._initBitmap().drawLine(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a * PD_UIManager.resRate, i * PD_UIManager.resRate, r),
                (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"),
                s();
        });
    }),
    (PD_UI.prototype.drawRect = function (e, t, n, a, i, r) {
        this._b || (this._b = []), this._b.push([18, e.slice(), t.slice(), n.slice(), a.slice(), i, r]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawRect_draw(e, t, n, a, i, r);
    }),
    (PD_UI.prototype.drawRect_draw = function (e, t, n, a, i, r) {
        return new Promise((s) => {
            this._initBitmap().drawRect(
                [e[0] * PD_UIManager.resRate, e[1] * PD_UIManager.resRate],
                [t[0] * PD_UIManager.resRate, t[1] * PD_UIManager.resRate],
                [n[0] * PD_UIManager.resRate, n[1] * PD_UIManager.resRate],
                [a[0] * PD_UIManager.resRate, a[1] * PD_UIManager.resRate],
                i * PD_UIManager.resRate,
                r
            ),
                (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"),
                s();
        });
    }),
    (PD_UI.prototype.drawEllipse = function (e, t, n, a, i, r, s) {
        this._b || (this._b = []), this._b.push([19, e, t, n, a, i, r, s]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawEllipse_draw(e, t, n, a, i, r, s);
    }),
    (PD_UI.prototype.drawEllipse_draw = function (e, t, n, a, i, r, s) {
        return new Promise((o) => {
            this._initBitmap().drawEllipse(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a * PD_UIManager.resRate, i, r * PD_UIManager.resRate, s),
                (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"),
                o();
        });
    }),
    (PD_UI.prototype.fillAll = function (e) {
        this._b || (this._b = []), this._b.push([20, e]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.fillAll_draw(e);
    }),
    (PD_UI.prototype.fillAll_draw = function (e) {
        return new Promise((t) => {
            this._initBitmap().fillAll(e), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), t();
        });
    }),
    (PD_UI.prototype.fillRect = function (e = 0, t = 0, n = this.width * PD_UIManager.resRate, a = this * PD_UIManager.resRate, i = "rgba(0, 255, 255, 0.5)") {
        this._b || (this._b = []), this._b.push([21, e, t, n, a, i]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        this.fillRect_draw(e, t, n, a, i);
    }),
    (PD_UI.prototype.fillRect_draw = function (e = 0, t = 0, n = this.width * PD_UIManager.resRate, a = this.height * PD_UIManager.resRate, i = "rgba(0, 255, 255, 0.5)") {
        return new Promise((r) => {
            this._initBitmap().fillRect(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a * PD_UIManager.resRate, i), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), r();
        });
    }),
    (PD_UI.prototype.drawFillRect = function (e, t, n, a, i) {
        this._b || (this._b = []), this._b.push([22, e.slice(), t.slice(), n.slice(), a.slice(), i]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawFillRect_draw(e, t, n, a, i);
    }),
    (PD_UI.prototype.drawFillRect_draw = function (e, t, n, a, i) {
        return new Promise((r) => {
            this._initBitmap().drawFillRect(
                [e[0] * PD_UIManager.resRate, e[1] * PD_UIManager.resRate],
                [t[0] * PD_UIManager.resRate, t[1] * PD_UIManager.resRate],
                [n[0] * PD_UIManager.resRate, n[1] * PD_UIManager.resRate],
                [a[0] * PD_UIManager.resRate, a[1] * PD_UIManager.resRate],
                i
            ),
                (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"),
                r();
        });
    }),
    (PD_UI.prototype.gradientFillRect = function (e, t, n, a, i, r, s) {
        this._b || (this._b = []), this._b.push([23, e, t, n, a, i, r, s]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.gradientFillRect_draw(e, t, n, a, i, r, s);
    }),
    (PD_UI.prototype.gradientFillRect_draw = function (e, t, n, a, i, r, s) {
        return new Promise((o) => {
            this._initBitmap().gradientFillRect(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a * PD_UIManager.resRate, i, r, s), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), o();
        });
    }),
    (PD_UI.prototype.fillEllipse = function (e) {
        this._b || (this._b = []), this._b.push([24, e]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.fillEllipse_draw(e);
    }),
    (PD_UI.prototype.fillEllipse_draw = function (e) {
        return new Promise((t, n) => {
            this.drawFillEllipse_draw((this.width * PD_UIManager.resRate) / 2, (this.height * PD_UIManager.resRate) / 2, (this.width * PD_UIManager.resRate) / 2, (this.height * PD_UIManager.resRate) / 2, 0, e)
                .then(() => {
                    (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), t();
                })
                .catch((e) => {
                    n(e);
                });
        });
    }),
    (PD_UI.prototype.drawCircle = function (e, t, n, a) {
        this._b || (this._b = []), this._b.push([25, e, t, n, a]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawCircle_draw(e, t, n, a);
    }),
    (PD_UI.prototype.drawCircle_draw = function (e, t, n, a) {
        return new Promise((i) => {
            this._initBitmap().drawCircle(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n, a), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), i();
        });
    }),
    (PD_UI.prototype.drawFillEllipse = function (e, t, n, a, i = 0, r = "rgba(0, 255, 255, 0.5)") {
        this._b || (this._b = []), this._b.push([26, e, t, n, a, i, r]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawFillEllipse_draw(e, t, n, a, i, r);
    }),
    (PD_UI.prototype.drawFillEllipse_draw = function (e, t, n, a, i = 0, r = "rgba(0, 255, 255, 0.5)") {
        return new Promise((s) => {
            this._initBitmap().drawFillEllipse(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a * PD_UIManager.resRate, i, r), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), s();
        });
    }),
    (PD_UI.prototype.setText = function (e, t, n, a, i, r, s, o) {
        return new Promise((l) => {
            t || (t = 26), !0 !== o && (o = !1), null == a && (a = 4);
            const h = t * (PD_String.charCount(e) / 2 + (!0 === o ? 0.25 : 0)) + a,
                c = t + a;
            (this.width * PD_UIManager.resRate === h && this.height * PD_UIManager.resRate === c) || (this.resize(h, c), (this.frame = [0, 0, h, c]), (this.colWidth = h), (this.colHeight = c), this.setSpriteUpdateFlag("anchor")),
                this.clear(),
                this.drawTextEX(e, 0, 0, h, c, null, t, n, a, i, r, s, o),
                l();
        });
    }),
    (PD_UI.prototype.drawText = function (e, t, n, a, i, r) {
        this._b || (this._b = []), this._b.push([27, e, t, n, a, i, r]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawText_draw(e, t, n, a, i, r);
    }),
    (PD_UI.prototype.drawText_draw = function (e, t, n, a, i, r) {
        return new Promise((s) => {
            this._initBitmap().drawText(e, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a * PD_UIManager.resRate, i * PD_UIManager.resRate, r), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), s();
        });
    }),
    (PD_UI.prototype.drawTextEX = function (e, t, n, a, i, r, s, o, l, h, c, u, p) {
        this._b || (this._b = []), this._b.push([28, e, t, n, a, i, r, s, o, l, h, c, u, p]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawTextEX_draw(e, t, n, a, i, r, s, o, l, h, c, u, p);
    }),
    (PD_UI.prototype.drawTextEX_draw = function (e, t, n, a, i, r, s, o, l, h, c, u, p) {
        return new Promise((g) => {
            this._initBitmap().drawTextEX(
                e,
                t ? t * PD_UIManager.resRate : t,
                n ? n * PD_UIManager.resRate : n,
                a ? a * PD_UIManager.resRate : a,
                i ? i * PD_UIManager.resRate : i,
                r,
                s ? s * PD_UIManager.resRate : s,
                o,
                l ? l * PD_UIManager.resRate : l,
                h,
                c,
                u,
                p
            ),
                (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"),
                g();
        });
    }),
    (PD_UI.prototype.drawTextEX_EX = function (e, t, n, a, i, r, s, o, l, h, c, u, p) {
        const g = this.createInfo_drawTextEX_EX(e, t, n, a, i, r, s, o, l, h, c, u, p);
        let _ = 0;
        for (let e = 0, t = g.length; e < t; e++) {
            if ((null !== g[e].overrideY && (_ = g[e].overrideY), _ + i > this.height)) {
                g.splice(e);
                break;
            }
            for (let t = 0, n = g[e], i = n.drawInfos, r = i.length; t < r; t++)
                if (i[t].drawFunc) {
                    const e = "center" === i[t].params.align ? (a - n.textWidth) / 2 : "right" === i[t].params.align ? a - n.textWidth : 0;
                    i[t].drawFunc(e, _);
                }
            _ += i;
        }
        return g;
    }),
    (PD_UI.prototype.drawTextEX_EX_setConvertTkoolParamTexts = function (e) {
        this._dTcp = e;
    }),
    (PD_UI.prototype.drawTextEX_EX_setIconInfo = function (e, t, n, a, i) {
        e && (this._dTip = e), t && (this._dTiw = t), n && (this._dTih = n), a && (this._dTiws = a), i && (this._dTioy = i);
    }),
    (PD_UI.prototype.createInfo_drawTextEX_EX = function (e, t, n, a, i, r, s, o, l, h, c, u, p) {
        const g = PD_Util.splitControlString(this._dTcp ? PD_Util.convertTkoolParamTexts(e, !0) : e, !this._dTcp),
            _ = [{ text: "", drawInfos: [], textWidth: 0, overrideY: null }];
        let d = null,
            f = 0,
            m = n;
        const P = (e, t) => {
                _[_.length - 1].drawInfos.push({ params: e, drawFunc: t });
            },
            D = () => {
                _.push({ text: "", drawInfos: [], textWidth: 0, overrideY: null }), (f = 0), null !== d && (t = d);
            };
        for (let e = 0, I = g.length; e < I; e++) {
            const I = g[e],
                M = _[_.length - 1];
            switch (I.code) {
                case "\n":
                    D(), (m += i);
                    break;
                case "C": {
                    const e = I.param.split(",").map(Number);
                    o = 3 === e.length ? "rgb(" + e.join(",") + ")" : 4 === e.length ? "rgba(" + e.join(",") + ")" : ColorManager.textColor(parseInt(e[0]));
                    break;
                }
                case "PX":
                    (d = Number(I.param)), D(), (_[_.length - 1].overrideY = m);
                    break;
                case "PY":
                    D(), (_[_.length - 1].overrideY = Number(I.param));
                    break;
                case "FS":
                    s = Number(I.param);
                    break;
                case "{":
                    s += 12;
                    break;
                case "}":
                    s -= 12;
                    break;
                case "I": {
                    const e = I.param.split(",").map(Number),
                        n = e[0],
                        o = e[1] || (this._dTiws ? this._dTiws : 0),
                        l = e[2] || (this._dTioy ? this._dTioy : 0),
                        h = e[3] || (this._dTip ? (this._dTiw ? this._dTiw : s) : ImageManager.iconWidth),
                        c = e[4] || (this._dTip ? (this._dTih ? this._dTih : s) : ImageManager.iconHeight),
                        u = this._dTip ? this._dTip + n : "IconSet",
                        p = t + f + o / 2,
                        g = (i - c) / 2 + l,
                        _ = null !== d ? "left" : r;
                    if (f + h + o <= a) {
                        if (this._dTip)
                            P({ type: "icon", measureWidth: h + o, index: n, iconWidthSpace: o, iconOffsetY: l, iconWidth: h, iconHeight: c, path: u, x: p, y: g, align: _ }, (e = 0, t = 0) => {
                                this.loadImage(u, p + e, g + t);
                            });
                        else {
                            const e = (n % 16) * h,
                                t = Math.floor(n / 16) * c;
                            P({ type: "icon", measureWidth: h + o, index: n, iconWidthSpace: o, iconOffsetY: l, iconWidth: h, iconHeight: c, path: u, x: p, y: g, sx: e, sy: t, align: _ }, (n = 0, a = 0) => {
                                this.loadSystem(u, p + n, g + a, null, null, null, [e, t, h, c]);
                            });
                        }
                        f += h + o;
                    }
                    break;
                }
                case "FB":
                    u = !u;
                    break;
                default:
                    if (I.code) P({ type: "code", code: I.code, param: I.param }, null);
                    else if (I.text)
                        for (let e = 0, g = I.text.length; e < g; e++) {
                            const g = new Bitmap();
                            (g.fontSize = s), c && (g.fontFace = c), u && (g.fontBold = u), p && (g.fontItalic = p);
                            const _ = g.measureTextWidth(I.text[e]);
                            if ((g.destroy(), !(f + _ <= a))) break;
                            {
                                const a = I.text[e],
                                    g = t + f,
                                    m = n,
                                    D = M.overrideY,
                                    y = _,
                                    v = i,
                                    U = null !== d ? "left" : r,
                                    E = s,
                                    b = o,
                                    S = l,
                                    w = h,
                                    F = c,
                                    B = u,
                                    T = p;
                                P({ type: "text", measureWidth: _, text: a, x: g, y: m, width: y, height: v, align: U, fontSize: E, textColor: b, outlineWidth: S, outlineColor: w, fontFamilyName: F, bold: B, italic: T }, (e = 0, t = 0) => {
                                    this.drawTextEX(a, g + e, D || m + t, y, v, U, E, b, S, w, F, B, T);
                                }),
                                    (M.text += a),
                                    (f += _);
                            }
                        }
            }
            f > _[_.length - 1].textWidth && (_[_.length - 1].textWidth = f);
        }
        return _;
    }),
    (PD_UI.prototype.drawLineChart = function (e, t, n, a, i, r, s) {
        this._b || (this._b = []), this._b.push([29, e.slice(), t, n, a, i, r, s]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawLineChart_draw(e, t, n, a, i, r, s);
    }),
    (PD_UI.prototype.drawLineChart_draw = function (e, t, n, a, i, r, s) {
        return new Promise((o) => {
            const l = this._initBitmap();
            (t = t >= 0 ? t : 3), (i = i >= 0 ? i : 2), (s = s >= 0 ? s : 15);
            const h = PD_Math.minInArray(e),
                c = PD_Math.maxInArray(e);
            let u = c - h;
            u < 1 && (u = 1), 0 === (r = r || 0) && (r = (s / 2) * (String(Math.floor(c)).replace(/(\d)(?=(\d{3})+$)/g, "$1,").length + 1));
            const p = l.context;
            p.save(), (p.strokeStyle = n || "rgba(255,255,255,1.0)"), (p.fillStyle = a || "rgba(255,255,255,0.5)"), (p.lineWidth = t * PD_UIManager.resRate);
            const g = t / 2 + (2 === i ? r : 0),
                _ = t / 2 + s / 2,
                d = t + (i >= 2 ? r : 0),
                f = t + s;
            p.beginPath(), p.moveTo(g * PD_UIManager.resRate, l.height);
            for (var m = [], P = [], D = 0, I = e.length; D < I; D++) m.push(g + ((l.width - d) / (I - 1)) * D), P.push(_ + (l.height - f) * ((c - e[D]) / u)), p.lineTo(m[D] * PD_UIManager.resRate, P[D] * PD_UIManager.resRate);
            for (p.lineTo((g + (l.width - d)) * PD_UIManager.resRate, l.height), p.closePath(), p.fill(), p.beginPath(), p.moveTo(m[0] * PD_UIManager.resRate, P[0] * PD_UIManager.resRate), D = 1, I = e.length; D < I; D++)
                p.lineTo(m[D] * PD_UIManager.resRate, P[D] * PD_UIManager.resRate);
            if ((p.stroke(), i > 0)) {
                let e = h,
                    n = 1,
                    a = 0;
                for (; e > 1e3; ) (e /= 10), (a += 1);
                for (e = Math.floor(e); a > 0; ) (e *= 10), (n *= 10), (a -= 1);
                let o = [e];
                for (D = 0; o[D] < c; D++) o.push(o[D] + n);
                for (; o.length > 5; ) for (D = 1; D < o.length; D++) o.splice(D, 1);
                for (l.fontSize = s * PD_UIManager.resRate, p.beginPath(), p.lineWidth = (t / 2) * PD_UIManager.resRate, p.strokeStyle = "rgba(128,128,128,0.5)", D = 0, I = o.length; D < I; D++) {
                    var M = _ + (l.height - f) * ((c - o[D]) / u);
                    p.moveTo(g * PD_UIManager.resRate, M * PD_UIManager.resRate),
                        p.lineTo((l.width - p.lineWidth) * PD_UIManager.resRate, M * PD_UIManager.resRate),
                        l.drawText(String(o[D]).replace(/(\d)(?=(\d{3})+$)/g, "$1,"), 3 === i ? l.width - r * PD_UIManager.resRate : 0, (M - s) * PD_UIManager.resRate, r * PD_UIManager.resRate, s * PD_UIManager.resRate, "right");
                }
                p.stroke();
            }
            p.restore(), l._baseTexture.update(), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), o();
        });
    }),
    (PD_UI.prototype.drawArc = function (e, t, n, a, i, r = "rgba(0, 255, 255, 0.5)", s = 10) {
        this._b || (this._b = []), this._b.push([31, e, t, n, a, i, r, s]);
        for (let e = this._b[this._b.length - 1], t = e.length - 1; t >= 0; t--)
            if (void 0 === e[t] && void 0 !== e[t - 1]) {
                e.splice(t, e.length - t);
                break;
            }
        return this.drawArc_draw(e, t, n, a, i, r, s);
    }),
    (PD_UI.prototype.drawArc_draw = function (e, t, n, a, i, r = "rgba(0, 255, 255, 0.5)", s = 10) {
        return new Promise((o) => {
            this._initBitmap().drawArc(e * PD_UIManager.resRate, t * PD_UIManager.resRate, n * PD_UIManager.resRate, a, i, r, s), (this.h || this.s || this.l) && this.setSpriteUpdateFlag("hsl"), o();
        });
    }),
    (PD_UI.prototype.drawAnotherUI_Bitmap = function (e) {
        this.sprite._bitmap.blt(e.sprite._bitmap, 0, 0, e.sprite._bitmap.width, e.sprite._bitmap.height, 0, 0);
    }),
    (PD_UI.prototype.attachMask = function () {
        this.parent.sprite.mask = this.sprite;
    }),
    (PD_UI.prototype.detachMask = function () {
        this.parent.sprite.mask = null;
    }),
    (PD_UI.prototype.realLeftX = function () {
        return this.realX - this.width * this.realScaleX * this.anchor.x;
    }),
    (PD_UI.prototype.realRightX = function () {
        return this.realX + this.width * this.realScaleX * (1 - this.anchor.x);
    }),
    (PD_UI.prototype.realTopY = function () {
        return this.realY - this.height * this.realScaleY * this.anchor.y;
    }),
    (PD_UI.prototype.realBottomY = function () {
        return this.realY + this.height * this.realScaleY * (1 - this.anchor.y);
    }),
    (PD_UI.prototype.getSpriteCorner = function () {
        const e = this.width * this.realScaleX,
            t = this.height * this.realScaleY,
            n = this.realX,
            a = this.realY,
            i = n - e * this.anchorX,
            r = a - t * this.anchorY,
            s = this.realRotation;
        let o = PD_Math.getRadian(n, a, i, r) + s,
            l = PD_Math.getDistance(i, r, n, a);
        const h = PD_Math.getEllipsePosition(n, a, o, l, l);
        (o = PD_Math.getRadian(n, a, i + e, r) + s), (l = PD_Math.getDistance(i + e, r, n, a));
        const c = PD_Math.getEllipsePosition(n, a, o, l, l);
        (o = PD_Math.getRadian(n, a, i + e, r + t) + s), (l = PD_Math.getDistance(i + e, r + t, n, a));
        const u = PD_Math.getEllipsePosition(n, a, o, l, l);
        (o = PD_Math.getRadian(n, a, i, r + t) + s), (l = PD_Math.getDistance(i, r + t, n, a));
        return { upperLeft: h, upperRight: c, lowerLeft: PD_Math.getEllipsePosition(n, a, o, l, l), lowerRight: u };
    }),
    (PD_UI.prototype.getRectButtonCorner = function () {
        const e = this.realScaleX,
            t = this.realScaleY,
            n = this.realX,
            a = this.realY,
            i = this.colX * e,
            r = this.colY * t,
            s = this.colWidth * e,
            o = this.colHeight * t,
            l = n - s * this.anchorX + i,
            h = a - o * this.anchorY + r,
            c = this.realRotation;
        let u = PD_Math.getRadian(n, a, l, h) + c,
            p = PD_Math.getDistance(l, h, n, a);
        const g = PD_Math.getEllipsePosition(n, a, u, p, p);
        (u = PD_Math.getRadian(n, a, l + s, h) + c), (p = PD_Math.getDistance(l + s, h, n, a));
        const _ = PD_Math.getEllipsePosition(n, a, u, p, p);
        (u = PD_Math.getRadian(n, a, l + s, h + o) + c), (p = PD_Math.getDistance(l + s, h + o, n, a));
        const d = PD_Math.getEllipsePosition(n, a, u, p, p);
        (u = PD_Math.getRadian(n, a, l, h + o) + c), (p = PD_Math.getDistance(l, h + o, n, a));
        return { upperLeft: g, upperRight: _, lowerLeft: PD_Math.getEllipsePosition(n, a, u, p, p), lowerRight: d };
    }),
    (PD_UI.prototype.getEllipseButtonInfo = function () {
        const e = this.realScaleX,
            t = this.realScaleY,
            n = this.realX,
            a = this.realY,
            i = this.colX * e,
            r = this.colY * t,
            s = this.colWidth * e,
            o = this.colHeight * t,
            l = n - s * this.anchorX + i + s / 2,
            h = a - o * this.anchorY + r + o / 2,
            c = this.realRotation,
            u = PD_Math.getRadian(n, a, l, h) + c,
            p = PD_Math.getDistance(l, h, n, a),
            g = PD_Math.getEllipsePosition(n, a, u, p, p);
        return { centerX: g.x, centerY: g.y, radiusX: s / 2, radiusY: o / 2, radian: c };
    }),
    (PD_UI.prototype.getInstanceID = function () {
        const e = this.name.split(":");
        return e.length > 0 ? e[0] : null;
    }),
    (PD_UI.prototype.getNoInstanceName = function () {
        const e = this.name.split(":");
        return e.length > 0 ? e[1] : e[0];
    }),
    (PD_UI.prototype.setInstanceID = function (e) {
        if (null != e) {
            this.name.includes(":") ? (this.name = e + ":" + this.name.split(":")[1]) : (this.name = e + ":" + this.name);
            for (let t = 0, n = this.children, a = n.length; t < a; t++) n[t].setInstanceID(e);
        }
    }),
    (PD_UI.prototype.removeInstanceID = function () {
        this.name.includes(":") && (this.name = this.name.split(":")[1]);
    }),
    !window.PD_UIManager)
)
    throw new Error("このプラグインよりも先に「PD_UIManager」プラグインを読み込む必要があります");
if (
    ((PD_UIManager.animationDisable_Func_delete = !1),
    (PD_UIManager.animationEnable_Func = []),
    (PD_UIManager.Animation_Database = {}),
    (PD_UIManager.Animation_UfterFuncList = []),
    (PD_UIManager.Animation_UfterDeleteList = []),
    (PD_UIManager.syncSoundBuffers = {}),
    (PD_UIManager.syncSoundSeeks = {}),
    (PD_UIManager.animationInitialize = function () {
        PD_UIManager.loading_animationFileStatus = 0;
    }),
    PD_Setup.readyFinishFuncs.push(function () {
        return (
            PD_UIManager.loading_animationFileStatus ||
                (PD_UIManager.animationInitialize(),
                (PD_UIManager.loading_animationFileStatus = 1),
                Promise.resolve()
                    .then(
                        () =>
                            new Promise((e) => {
                                if (Utils.isNwjs() && Utils.isOptionValid("test")) {
                                    const t = "undefined" != typeof PD_GameBridge_Child ? PD_GameBridge_Child.src.slice(0, -10) : "",
                                        n = t + "_UIManager",
                                        a = t + "_UIManager/_System",
                                        i = "Animation_Database.kgdata";
                                    if (PD_File.isExistFile(n)) {
                                        const t = PD_File.getAllFiles(n),
                                            r = [];
                                        for (let e = 0, a = t.length; e < a; e++) {
                                            const a = t[e].split(".")[1];
                                            "anime" === a && r.push(t[e].slice(n.length + 1).slice(0, -a.length - 1));
                                        }
                                        const s = {},
                                            o = [];
                                        for (let e = 0, t = r.length; e < t; e++)
                                            o.push(
                                                () =>
                                                    new Promise((t) => {
                                                        PD_File.load("_UIManager/" + r[e] + ".anime").then((n) => {
                                                            (s[r[e]] = n), t();
                                                        });
                                                    })
                                            );
                                        PD_Promise.all(o).then(() => {
                                            PD_File.save(a + "/" + i, pako.deflate(JSON.stringify(s), { to: "string", level: 9 })).then(() => {
                                                e();
                                            });
                                        });
                                    } else {
                                        const t = {};
                                        PD_File.save(a + "/" + i, pako.deflate(JSON.stringify(t), { to: "string", level: 9 })).then(() => {
                                            e();
                                        });
                                    }
                                } else e();
                            })
                    )
                    .then(() => {
                        PD_File.load("_UIManager/_System/Animation_Database.kgdata").then((e) => {
                            (PD_UIManager.Animation_Database = JSON.parse(pako.inflate(e, { to: "string" }))), (PD_UIManager.loading_animationFileStatus = 2);
                        });
                    })
                    .catch((e) => {
                        throw new Error(e);
                    })),
            PD_UIManager.loading_animationFileStatus >= 2
        );
    }),
    (PD_UIManager.UI_to_jsonData_omitAnimation = function (e) {
        const t = [],
            n = PD_Util.orderChildren(e, "children");
        for (let e = 0, a = n.length; e < a; e++) {
            t[e] = {};
            const a = n[e],
                i = t[e],
                r = a.animationData ? a.animationData : a._aD;
            if (r) for (let e in r) "tW" !== e && "fc" !== e && "dl" !== e && void 0 !== a[e] && ((i[e] = a[e]), (a[e] = r[e][0][1]));
            const s = ["_aP", "_aD", "_aC", "_aS", "_aSF", "_aM", "_aI"];
            for (let e = 0, t = s.length; e < t; e++) void 0 !== a[s[e]] && ((i[s[e]] = a[s[e]]), delete a[s[e]]);
        }
        const a = PD_UIManager.UI_to_jsonData(e);
        for (let e = 0, a = t.length; e < a; e++) {
            const a = t[e],
                i = n[e];
            for (let e in a) i[e] = a[e];
        }
        return a;
    }),
    (function () {
        "use strict";
        const e = PD_UIManager.sceneUI_UpdateDraw;
        PD_UIManager.sceneUI_UpdateDraw = function () {
            for (let e in PD_UIManager.syncSoundBuffers) {
                const t = PD_UIManager.syncSoundBuffers[e];
                t.isPlaying() && (PD_UIManager.syncSoundSeeks[e] = t.isReady() ? Math.floor(60 * t.seek()) : 0);
            }
            e.call(this);
            const t = PD_UIManager.Animation_UfterFuncList,
                n = t.length;
            if (n > 0) {
                for (let e = 0; e < n; e++) {
                    const n = t[e],
                        a = PD_UIManager.list[n[0]];
                    a && n[1].bind(a)();
                }
                (PD_UIManager.Animation_UfterFuncList = []), e.call(this);
            }
            const a = PD_UIManager.Animation_UfterDeleteList,
                i = a.length;
            if (i > 0) {
                for (let e = 0; e < i; e++) {
                    const t = PD_UIManager.list[a[e]];
                    t && t.delete();
                }
                PD_UIManager.Animation_UfterDeleteList = [];
            }
        };
        const t = PD_UI.prototype.initialize;
        PD_UI.prototype.initialize = function () {
            t.apply(this, arguments), this._aP, this._aD, this._aC, this._aS, this._aSF, this._aM, this._aI;
        };
        const n = PD_UI.prototype.initializeTempProperty;
        PD_UI.prototype.initializeTempProperty = function (e) {
            n.apply(this, arguments), this.isBase || (PD_UIManager.UIPropertys[e].animationData = {});
        };
        const a = PD_UI.prototype.updateDraw;
        PD_UI.prototype.updateDraw = function () {
            this._updateAnimation(), PD_UIManager.list[this.name] && a.call(this);
        };
        const i = PD_UIManager.loadDatabase;
        PD_UIManager.loadDatabase = function () {
            const e = i.apply(this, arguments);
            return PD_UIManager.Animation_Database[arguments[0]] && e.setAnimation(arguments[0]), e;
        };
        const r = PD_UIManager.loadDatabase_insert;
        PD_UIManager.loadDatabase_insert = function () {
            const e = r.apply(this, arguments);
            return PD_UIManager.Animation_Database[arguments[0]] && e.setAnimation(arguments[0]), e;
        };
        const s = PD_UIManager.loadDatabase_replace;
        PD_UIManager.loadDatabase_replace = function () {
            const e = s.apply(this, arguments);
            return PD_UIManager.Animation_Database[arguments[0]] && e.setAnimation(arguments[0]), e;
        };
        const o = PD_UI.prototype.reBuildUI2;
        PD_UI.prototype.reBuildUI2 = function () {
            this._aS && (this.syncSound = this._aS), this.isPlayAnimation && this.playAnimation(this.animationFrameCount), o.apply(this, arguments);
        };
        const l = PD_UI.prototype.delete;
        PD_UI.prototype.delete = function () {
            PD_UIManager.list[this.name] && (this._aS && PD_UIManager.syncSoundBuffers[this.name].stop(), delete PD_UIManager.syncSoundBuffers[this.name], delete PD_UIManager.syncSoundSeeks[this.name], l.call(this));
        };
    })(),
    Object.defineProperty(PD_UI.prototype, "isPlayAnimation", {
        get: function () {
            return !!this._aP;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "animationData", {
        get: function () {
            if (PD_UIManager.UIPropertys[this.name]) return PD_UIManager.UIPropertys[this.name].animationData;
        },
        set: function (e) {
            let t;
            if (e) {
                t = {};
                for (let n in e)
                    switch (n) {
                        case "tW":
                        case "ch":
                            t[n] = e[n];
                            break;
                        case "fc":
                            t[n] = [];
                            for (let a = 0, i = e[n], r = i.length; a < r; a++) (t[n][a] = []), (t[n][a][0] = i[a][0]), (t[n][a][1] = "string" == typeof i[a][1] ? PD_Util.strToFunc(i[a][1]) : i[a][1]);
                            break;
                        case "dl":
                            t[n] = [];
                            for (let a = 0, i = e[n], r = i.length; a < r; a++) {
                                t[n][a] = [];
                                for (let e = 0, r = i[a].length; e < r; e++) t[n][a][e] = i[a][e];
                            }
                            break;
                        default:
                            t[n] = [];
                            for (let a = 0, i = e[n], r = i.length; a < r; a++)
                                (t[n][a] = []), (t[n][a][0] = i[a][0]), (t[n][a][1] = "string" == typeof i[a][1] ? PD_Util.strToReturnFunc(i[a][1]) : i[a][1]), (t[n][a][2] = i[a][2]), (t[n][a][3] = i[a][3]);
                    }
            }
            PD_UIManager.UIPropertys[this.name].animationData = t;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "animationFrameCount", {
        get: function () {
            return void 0 !== this._aC ? this._aC : -1;
        },
        set: function (e) {
            this._aC || (this._aC = -1), (this._aC = e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "animationTotalWait", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name].animationData.tW;
        },
        set: function (e) {
            PD_UIManager.UIPropertys[this.name].animationData.tW = e;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "syncSound", {
        get: function () {
            if (this._aS) return { uiName: this.name, filePath: this._aS };
            {
                const e = this.parent ? this.parent.syncSound : void 0;
                return e || void 0;
            }
        },
        set: function (e) {
            if (e) {
                const t = e.split("/"),
                    n = t.shift(),
                    a = { name: t.join("/"), pan: 0, pitch: 100, volume: 90 },
                    i = AudioManager.createBuffer(n + "/", a.name);
                AudioManager.updateBufferParameters(i, AudioManager["_" + n + "Volume"], a), (PD_UIManager.syncSoundBuffers[this.name] = i), (PD_UIManager.syncSoundSeeks[this.name] = 0), (this._aS = e);
            } else delete PD_UIManager.syncSoundBuffers[this.name], delete PD_UIManager.syncSoundSeeks[this.name], delete this._aS, delete this._aSF;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "animationManualMode", {
        get: function () {
            return void 0 !== this._aM || (!!this.parent && this.parent.animationManualMode);
        },
        set: function (e) {
            e ? void 0 === this._aM && (this._aM = 0) : delete this._aM;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "animationManualFrameCount", {
        get: function () {
            return void 0 !== this._aM ? this._aM : this.parent ? this.parent.animationManualFrameCount : void 0;
        },
        set: function (e) {
            null != e ? (this._aM = e) : delete this._aM;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "animationIndependence", {
        get: function () {
            return !!this._aI;
        },
        set: function (e) {
            this._aI = !!e;
        },
        configurable: !0,
    }),
    (PD_UI.prototype.setSyncSoundLoadFunc = function (e) {
        const t = PD_UIManager.syncSoundBuffers[this.name];
        if (t) {
            if (this._aSF) {
                const e = t._loadListeners.indexOf(this._aSF);
                e >= 0 && t._loadListeners.splice(e, 1);
            }
            (this._aSF = e), t.addLoadListener(this._aSF);
        }
    }),
    (PD_UI.prototype.setAnimation = function (e, t) {
        if ((this.deleteAnimation(), t)) this._aD = JSON.parse(PD_UIManager.Animation_Database[e]).animationSet[t];
        else {
            const t = JSON.parse(PD_UIManager.Animation_Database[e]);
            t.animationSet ? t.animationDefault && (this._aD = t.animationSet[t.animationDefault]) : (this._aD = t);
        }
    }),
    (PD_UI.prototype.playAnimation = function (e = 0) {
        if ((this._aD && this.animationData !== this._aD && (this.animationData && 0 !== Object.keys(this.animationData).length && delete this._aC, (this.animationData = this._aD)), this.animationData)) {
            (this.animationFrameCount = e), !this.animationManualMode && this._aS && PD_UIManager.syncSoundBuffers[this.name].play(!1, e / 60), (this._aP = 1);
            for (let t = 0, n = this.children, a = n.length; t < a; t++)
                if (!n[t].animationIndependence) {
                    const a = this.animationData.ch ? this.animationData.ch[t] : null;
                    a && (n[t].animationData = a), n[t].playAnimation(e);
                }
        }
    }),
    (PD_UI.prototype.stopAnimation = function () {
        this._aS && PD_UIManager.syncSoundBuffers[this.name].stop(), delete this._aP, this.animationFrameCount >= this.animationTotalWait && delete this._aC;
        for (let e = 0, t = this.children, n = t.length; e < n; e++) t[e].animationIndependence || (t[e].isPlayAnimation && t[e].stopAnimation(), this.animationData.ch && this.animationData.ch[e] && (t[e].animationData = null));
    }),
    (PD_UI.prototype.skipAnimation = function (e) {
        if (this.isPlayAnimation && (e || (e = this.animationTotalWait), e >= this.animationFrameCount)) {
            for (let t = this.animationFrameCount; t <= e && PD_UIManager.list[this.name]; t++) this.updateKeyFrame(t);
            if (PD_UIManager.list[this.name]) {
                this.animationFrameCount = e;
                for (let t = 0, n = this.children, a = n.length; t < a; t++) n[t].animationIndependence || n[t].skipAnimation(e);
                this.stopAnimation();
            }
        }
    }),
    (PD_UI.prototype.deleteAnimation = function () {
        if ((this._aS && PD_UIManager.syncSoundBuffers[this.name].stop(), this.animationData || this._aD)) {
            if (this.animationData && this.animationData.ch)
                for (let e = 0, t = this.children, n = t.length; e < n; e++) this.animationData.ch[e] && !t[e].animationIndependence && ((t[e].animationData = null), t[e].isPlayAnimation && t[e].stopAnimation());
            (this.animationData = null), delete this._aP, delete this._aD, delete this._aC;
        }
    }),
    (PD_UI.prototype.animeInit = function () {
        this._aD || (this._aD = { tW: 0 });
    }),
    (PD_UI.prototype._updateAnimation = function () {
        if (this.animationManualMode) this.updateKeyFrame(this.animationManualFrameCount);
        else if (this.isPlayAnimation) {
            const e = this.syncSound;
            if (e && this.animationData) {
                let t = PD_UIManager.syncSoundSeeks[e.uiName];
                if (((t >= this.animationTotalWait || !PD_UIManager.syncSoundBuffers[e.uiName].isPlaying()) && (t = this.animationTotalWait), t > this.animationFrameCount)) {
                    for (let e = this.animationFrameCount + 1; e < t; e++) this.updateKeyFrame(e);
                    (this.animationFrameCount = t), this.updateKeyFrame(this.animationFrameCount);
                }
            } else {
                const e = this.animationFrameCount,
                    t = this.animationData;
                0 === e && t.fc && t.fc[0] && 0 === t.fc[0][0] && this.checkFunc(e, t.fc), (this.animationFrameCount += 1), this.updateKeyFrame(this.animationFrameCount);
            }
            PD_UIManager.list[this.name] && this.animationFrameCount >= this.animationTotalWait && this.stopAnimation();
        }
    }),
    (PD_UI.prototype.updateKeyFrame = function (e) {
        const t = this.animationData;
        if (t) {
            for (let n in t)
                if ("fc" !== n && "dl" !== n && "tW" !== n && "ch" !== n) {
                    const a = this._animeCheckKey(e, t[n]);
                    null !== a && (this[n] = a);
                }
            t.fc && this.checkFunc(e, t.fc), t.dl && this.checkDelete(e, t.dl);
        }
    }),
    (PD_UI.prototype._animeCheckKey = function (e, t) {
        const n = this._animeBeforeIndex(e, t);
        if (n < 0) return null;
        const a = t[n].slice(),
            i = n < t.length - 1 ? t[n + 1].slice() : null;
        if (void 0 !== a[3]) {
            const e = t[n - 1];
            e && (a[1] = this._calcEasingValue(e, a, a[0]));
        }
        return null === i ? a[1] : this._calcEasingValue(a, i, e);
    }),
    (PD_UI.prototype._calcEasingValue = function (e, t, n) {
        const a = "function" == typeof e[1] ? e[1].bind(this)() : e[1],
            i = "function" == typeof t[1] ? t[1].bind(this)() : t[1];
        let r = t[2] ? t[2] : "linear",
            s = n - e[0],
            o = a,
            l = i - a,
            h = t[3] ? t[3] : t[0] - e[0];
        return PD_Easing[r](s, o, l, h);
    }),
    (PD_UI.prototype.checkFunc = function (e, t) {
        const n = this._animeBeforeIndex(e, t);
        if (n < 0) return;
        let a = null;
        if ((e === t[n][0] && (a = t[n]), null !== a))
            if (PD_UIManager.animationDisable_Func_delete && !this.animationManualMode)
                for (let e = 0, t = PD_UIManager.animationEnable_Func, n = t.length; e < n; e++) t[e] === PD_Util.FuncToString(a[1]) && PD_UIManager.Animation_UfterFuncList.push([this.name, a[1]]);
            else PD_UIManager.Animation_UfterFuncList.push([this.name, a[1]]);
    }),
    (PD_UI.prototype.checkDelete = function (e, t) {
        if (PD_UIManager.animationDisable_Func_delete) return;
        const n = this._animeBeforeIndex(e, t);
        if (n < 0) return;
        let a = null;
        e === t[n][0] && (a = t[n]), null !== a && PD_UIManager.Animation_UfterDeleteList.push(this.name);
    }),
    (PD_UI.prototype._animeBeforeIndex = function (e, t) {
        for (let n = t.length - 1; n >= 0; n--) if (e >= t[n][0]) return n;
        return -1;
    }),
    (PD_UI.prototype.animeWait = function (e) {
        this.animeInit(), (this._aD.tW += e);
    }),
    (PD_UI.prototype.animeDelete = function () {
        this.animeInit();
        const e = this._aD,
            t = this._aD.tW;
        e.dl || (e.dl = []), e.dl.push([t]);
    }),
    (PD_UI.prototype.animeSetKeyFrame = function (e, t, n, a, i, r, s) {
        this.animeInit();
        const o = this._aD,
            l = this._aD.tW;
        o[e] || (o[e] = [[0, t]]);
        let h = o[e][o[e].length - 1];
        const c = o[e][o[e].length - 2];
        let u = c ? this._calcEasingValue(c, h, h[0]) : h[1];
        h[0] < l - 1 && o[e].push([l - 1, u]);
        const p = l + (a = a || 0);
        (h = o[e][o[e].length - 1]), h[0] < p ? (o[e].push([p, null !== n ? n : h[1]]), r && (o[e][o[e].length - 1][2] = r), s && (o[e][o[e].length - 1][3] = s)) : h[0] === p && (h[1] = null !== n ? n : h[1]), i && (this._aD.tW += a);
    }),
    (PD_UI.prototype.animeMoveX = function (e, t, n, a, i) {
        this.animeSetKeyFrame("x", this.x, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeMoveY = function (e, t, n, a, i) {
        this.animeSetKeyFrame("y", this.y, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeMove = function (e, t, n, a, i, r) {
        null !== e && this.animeSetKeyFrame("x", this.x, e, n, !1, i, r), null !== t && this.animeSetKeyFrame("y", this.y, t, n, !1, i, r), a && (this._aD.tW += n);
    }),
    (PD_UI.prototype.animeAnchorX = function (e, t, n, a, i) {
        this.animeSetKeyFrame("aX", this.anchorX, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeAnchorY = function (e, t, n, a, i) {
        this.animeSetKeyFrame("aY", this.anchorY, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeAnchor = function (e, t, n, a, i, r) {
        null !== e && this.animeSetKeyFrame("aX", this.anchorX, e, n, !1, i, r), null !== t && this.animeSetKeyFrame("aY", this.anchorY, t, n, !1, i, r), a && (this._aD.tW += n);
    }),
    (PD_UI.prototype.animeScaleX = function (e, t, n, a, i) {
        this.animeSetKeyFrame("sX", this.scaleX, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeScaleY = function (e, t, n, a, i) {
        this.animeSetKeyFrame("sY", this.scaleY, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeScale = function (e, t, n, a, i, r) {
        null !== e && this.animeSetKeyFrame("sX", this.scaleX, e, n, !1, i, r), null !== t && this.animeSetKeyFrame("sY", this.scaleY, t, n, !1, i, r), a && (this._aD.tW += n);
    }),
    (PD_UI.prototype.animeOpacity = function (e, t, n, a, i) {
        this.animeSetKeyFrame("o", this.opacity, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeRotation = function (e, t, n, a, i) {
        this.animeSetKeyFrame("r", this.rotation, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeFrameX = function (e, t, n, a, i) {
        this.animeSetKeyFrame("fX", this.frameX, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeFrameY = function (e, t, n, a, i) {
        this.animeSetKeyFrame("fY", this.frameY, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeFrameWidth = function (e, t, n, a, i) {
        this.animeSetKeyFrame("fW", this.frameWidth, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeFrameHeight = function (e, t, n, a, i) {
        this.animeSetKeyFrame("fH", this.frameHeight, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeFrame = function (e, t, n, a, i, r, s, o) {
        null !== e && this.animeSetKeyFrame("fX", this.frameX, e, i, !1, s, o),
            null !== t && this.animeSetKeyFrame("fY", this.frameY, t, i, !1, s, o),
            null !== n && this.animeSetKeyFrame("fW", this.frameWidth, n, i, !1, s, o),
            null !== a && this.animeSetKeyFrame("fH", this.frameHeight, a, i, !1, s, o),
            r && (this._aD.tW += i);
    }),
    (PD_UI.prototype.animeToneR = function (e, t, n, a, i) {
        this.animeSetKeyFrame("tR", this.toneR, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeToneG = function (e, t, n, a, i) {
        this.animeSetKeyFrame("tG", this.toneG, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeToneB = function (e, t, n, a, i) {
        this.animeSetKeyFrame("tB", this.toneB, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeToneD = function (e, t, n, a, i) {
        this.animeSetKeyFrame("tD", this.toneD, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeTone = function (e, t, n, a, i, r, s, o) {
        null !== e && this.animeSetKeyFrame("tR", this.toneR, e, i, !1, s, o),
            null !== t && this.animeSetKeyFrame("tG", this.toneG, t, i, !1, s, o),
            null !== n && this.animeSetKeyFrame("tB", this.toneB, n, i, !1, s, o),
            null !== a && this.animeSetKeyFrame("tD", this.toneD, a, i, !1, s, o),
            r && (this._aD.tW += i);
    }),
    (PD_UI.prototype.animeH = function (e, t, n, a, i) {
        this.animeSetKeyFrame("h", this.h, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeS = function (e, t, n, a, i) {
        this.animeSetKeyFrame("s", this.s, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeL = function (e, t, n, a, i) {
        this.animeSetKeyFrame("l", this.l, e, t, n, a, i);
    }),
    (PD_UI.prototype.animeHSL = function (e, t, n, a, i, r, s) {
        null !== e && this.animeSetKeyFrame("h", this.h, e, a, !1, r, s), null !== t && this.animeSetKeyFrame("s", this.s, t, a, !1, r, s), null !== n && this.animeSetKeyFrame("l", this.l, n, a, !1, r, s), i && (this._aD.tW += a);
    }),
    (PD_UI.prototype.animeShake = function (e, t, n, a, i) {
        this.animeInit(), (n = n || 0);
        const r = this._aD;
        let s = this._aD.tW;
        r.x || (r.x = [[0, this.x]]), r.y || (r.y = [[0, this.y]]);
        let o = r.x[r.x.length - 1];
        o[0] < s - 1 && r.x.push([s - 1, o[1]]), (o = r.y[r.y.length - 1]), o[0] < s - 1 && r.y.push([s - 1, o[1]]), (o = r.x[r.x.length - 1]);
        const l = o[1];
        o = r.y[r.y.length - 1];
        const h = o[1];
        let c = null,
            u = null;
        const p = Math.floor(100 / t);
        for (; (s += p), s + p / 2 <= this._aD.tW + n; )
            (c = Math.round((1 - 2 * Math.random()) * e)),
                (u = Math.round((1 - 2 * Math.random()) * e)),
                (o = r.x[r.x.length - 1]),
                o[0] < s ? (r.x.push([s, null !== c ? l + c : o[1]]), i && r.x[r.x.length - 1].push(i)) : o[0] === s && (o[1] = null !== c ? l + c : o[1]),
                (o = r.y[r.y.length - 1]),
                o[0] < s ? (r.y.push([s, null !== u ? h + u : o[1]]), i && r.y[r.x.length - 1].push(i)) : o[0] === s && (o[1] = null !== u ? h + u : o[1]);
        const g = this._aD.tW + n;
        (o = r.x[r.x.length - 1]),
            o[0] < g ? (r.x.push([g, null !== c ? l : o[1]]), i && r.x[r.x.length - 1].push(i)) : o[0] === g && (o[1] = null !== c ? l : o[1]),
            (o = r.y[r.y.length - 1]),
            o[0] < g ? (r.y.push([g, null !== u ? h : o[1]]), i && r.y[r.x.length - 1].push(i)) : o[0] === g && (o[1] = null !== u ? h : o[1]),
            a && (this._aD.tW += n);
    }),
    (PD_UI.prototype.animeFunction = function (e, t, n) {
        this.animeInit();
        const a = this._aD,
            i = this._aD.tW;
        if ((a.fc || (a.fc = []), 0 === (t = t || 0))) "string" == typeof e ? a.fc.push([i, PD_Util.strToFunc(e)]) : a.fc.push([i, e]);
        else for (let n = 0; n < t; n++) "string" == typeof e ? a.fc.push([i + n, PD_Util.strToFunc(e)]) : a.fc.push([i + n, e]);
        n && (this._aD.tW += t);
    }),
    (PD_UI.prototype.animeLoop = function (e = 0) {
        this.animeFunction(() => {
            (this.animationFrameCount = e), this.isPlayAnimation || this.playAnimation(e);
        });
    }),
    (PD_UI.prototype.animeStopMotion = function (e, t, n, a, i) {
        for (let r = 0, s = n * a; r < s; r++) {
            const n = (r % a) * e,
                s = Math.floor(r / a) * t;
            this.animeFrame(n, s, e, t, 0, !1), this.animeWait(i);
        }
    }),
    !window.PD_UIManager)
)
    throw new Error("このプラグインよりも先に「PD_UIManager」プラグインを読み込む必要があります");
if (
    ((function () {
        "use strict";
        const e = PD_UI.prototype.initializeTempProperty;
        PD_UI.prototype.initializeTempProperty = function (t) {
            e.apply(this, arguments), this.isBase || (PD_UIManager.UIPropertys[t].effectBaseSprites = []), this.isBase || (PD_UIManager.UIPropertys[t].effectSprites = []);
        };
        const t = PD_UI.prototype.updateDraw;
        PD_UI.prototype.updateDraw = function () {
            if (this.effectSprites)
                for (let e = this.effectSprites.length - 1; e >= 0; e--) {
                    const t = this.effectSprites[e],
                        n = this.effectBaseSprites[e];
                    t.isPlaying() || (this.effectSprites.splice(e, 1), this.effectBaseSprites.splice(e, 1), this.sprite.removeChild(t), this.sprite.removeChild(n), n.destroy(), t.destroy());
                }
            t.call(this);
        };
        const n = PD_UI.prototype.delete;
        PD_UI.prototype.delete = function () {
            if (PD_UIManager.list[this.name]) {
                for (let e = this.effectSprites.length - 1; e >= 0; e--) {
                    const t = this.effectSprites[e],
                        n = this.effectBaseSprites[e];
                    this.effectSprites.splice(e, 1), this.effectBaseSprites.splice(e, 1), n.destroy(), t.destroy();
                }
                n.call(this);
            }
        };
    })(),
    Object.defineProperty(PD_UI.prototype, "isPlayEffect", {
        get: function () {
            return !!this._aP;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "effectBaseSprites", {
        get: function () {
            if (PD_UIManager.UIPropertys[this.name]) return PD_UIManager.UIPropertys[this.name].effectBaseSprites;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "effectSprites", {
        get: function () {
            if (PD_UIManager.UIPropertys[this.name]) return PD_UIManager.UIPropertys[this.name].effectSprites;
        },
        configurable: !0,
    }),
    (PD_UI.prototype.playEffect = function (e, t = 0, n = 0, a = !1, i = 0) {
        const r = new Sprite();
        r.move(t, n), this.sprite.addChild(r);
        const s = new Sprite_Animation();
        s.setup([r], $dataAnimations[e], a, i, null), this.sprite.addChild(s), this.effectBaseSprites.push(r), this.effectSprites.push(s);
    }),
    !window.PD_UIManager)
)
    throw new Error("このプラグインよりも先に「PD_UIManager」プラグインを読み込む必要があります");
if (!window.PD_UIManager.syncSoundBuffers) throw new Error("このプラグインよりも先に「PD_UIManager_Animation」プラグインを読み込む必要があります");
if (
    ((PD_UIManager.ssProjects = {}),
    (PD_UIManager.ssProjectPaths = {}),
    (function () {
        "use strict";
        const e = PD_UI.prototype.initialize;
        PD_UI.prototype.initialize = function () {
            e.apply(this, arguments), this._sP, this._sAP, this._sAN;
        };
        const t = PD_UI.prototype.initializeTempProperty;
        PD_UI.prototype.initializeTempProperty = function (e) {
            t.apply(this, arguments), this.isBase || (PD_UIManager.UIPropertys[e].ssPlayer = null);
        };
        const n = PD_UI.prototype.playAnimation;
        PD_UI.prototype.playAnimation = function (e = 0) {
            if ((n.call(this, e), this.ssPlayer && 0 === e)) {
                const e = this.ssPlayer.GetUserData(0);
                if (e) for (let t = 0; t < e.length; t++) PD_Util.strToFunc(e[t][10])();
            }
        };
        const a = PD_UI.prototype.updateDraw;
        PD_UI.prototype.updateDraw = function () {
            if ((a.call(this), this.ssPlayer)) {
                let e = -1;
                if (
                    (this.animationManualMode ? (e = Math.floor((this.animationManualFrameCount * this.ssPlayer.fps) / 60)) : this.isPlayAnimation && (e = Math.floor((this.animationFrameCount * this.ssPlayer.fps) / 60)),
                    e >= 0 && e <= this.ssPlayer.totalFrame - 1 && e !== this.ssPlayer.frameNo && (this.ssPlayer.SetFrame(e), !this.animationManualMode && this.isPlayAnimation))
                ) {
                    const t = this.ssPlayer.GetUserData(e);
                    if (t) for (let e = 0; e < t.length; e++) PD_Util.strToFunc(t[e][10])();
                }
            }
        };
        const i = PD_UI.prototype.reBuildUI;
        PD_UI.prototype.reBuildUI = function () {
            const e = i.apply(this, arguments);
            return this.ssPath && this.setSSPlayer(this.ssPath, this.ssAnimePackName, this.ssAnimeName), e;
        };
        const r = PD_UI.prototype.delete;
        PD_UI.prototype.delete = function () {
            this.deleteSSPlayer(), PD_UIManager.list[this.name] && r.call(this);
        };
    })(),
    Object.defineProperty(PD_UI.prototype, "ssPath", {
        get: function () {
            return this._sP;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "ssAnimePackName", {
        get: function () {
            return this._sAP;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "ssAnimeName", {
        get: function () {
            return this._sAN;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "ssPlayer", {
        get: function () {
            return PD_UIManager.UIPropertys[this.name] ? PD_UIManager.UIPropertys[this.name].ssPlayer : null;
        },
        configurable: !0,
    }),
    (PD_UI.prototype.loadSSProject = function (e, t, n, a, i, r, s) {
        const o = new ss6PlayerPixi.SS6Project(
            "_ssfb/" + e + ".ssfb",
            function () {
                (PD_UIManager.ssProjects[e] = o), t && t(o);
            },
            n,
            a,
            i,
            r,
            s
        );
    }),
    (PD_UI.prototype.setSSPlayer = function (e, t, n) {
        if (PD_UIManager.list[this.name]) {
            if ((this.ssPath && (e || (e = this.ssPath), e !== this.ssPath && this.deleteSSPlayer()), this.ssPlayer)) t || (t = this.ssAnimePackName), n || (n = this.ssAnimeName), this.ssPlayer.Setup(t, n);
            else {
                if (!e || !t || !n) return;
                const a = (a) => {
                    a.Setup(t, n), this.sprite.addChild(a), (PD_UIManager.UIPropertys[this.name].ssPlayer = a), (PD_UIManager.ssProjectPaths[this.name] = e);
                };
                if (PD_UIManager.ssProjects[e]) {
                    const t = new ss6PlayerPixi.SS6Player(PD_UIManager.ssProjects[e]);
                    a(t);
                } else
                    this.loadSSProject(e, (e) => {
                        const t = new ss6PlayerPixi.SS6Player(e);
                        a(t);
                    });
            }
            (this._sP = e), (this._sAP = t), (this._sAN = n);
        }
    }),
    (PD_UI.prototype.deleteSSPlayer = function () {
        if (PD_UIManager.list[this.name] && this.ssPath) {
            delete PD_UIManager.ssProjectPaths[this.name];
            let e = !0;
            for (let t in PD_UIManager.ssProjectPaths)
                if (PD_UIManager.ssProjectPaths[t] === this.ssPath) {
                    e = !1;
                    break;
                }
            e && delete PD_UIManager.ssProjects[this.ssPath], this.sprite.removeChild(this.ssPlayer), (PD_UIManager.UIPropertys[this.name].ssPlayer = null), delete this._sP, delete this._sAP, delete this._sAN;
        }
    }),
    !window.PD_UIManager)
)
    throw new Error("このプラグインよりも先に「PD_UIManager」プラグインを読み込む必要があります");
if (
    ((PD_UIManager.disableColliders_exceptUI_names = []),
    (PD_UIManager.mouseKey = null),
    (PD_UIManager.mouseCursorUI = null),
    (PD_UIManager.isEnableMoveMouseCursorUI = !0),
    (function () {
        "use strict";
        let e = !1;
        const t = TouchInput._onMouseDown;
        TouchInput._onMouseDown = function (n) {
            (PD_UIManager.mouseKey && (Input._currentState[PD_UIManager.mouseKey] || e)) ||
                (PD_UIManager.mouseKey &&
                    PD_UIManager.mouseCursorUI &&
                    PD_UIManager.isEnableMoveMouseCursorUI &&
                    ((this._x = Graphics.pageToCanvasX(n.pageX)), (this._y = Graphics.pageToCanvasY(n.pageY)), PD_UIManager.mouseCursorUI.move(this._x, this._y)),
                t.call(this, n));
        };
        const n = TouchInput._onMouseUp;
        TouchInput._onMouseUp = function (t) {
            (PD_UIManager.mouseKey && (Input._currentState[PD_UIManager.mouseKey] || e)) || n.call(this, t);
        };
        const a = Input._onKeyDown;
        Input._onKeyDown = function (t) {
            this._shouldPreventDefault(t.keyCode) && t.preventDefault(),
                144 === t.keyCode && this.clear(),
                PD_UIManager.mouseKey
                    ? PD_UIManager.mouseKey === this.keyMapper[t.keyCode]
                        ? e || TouchInput._mousePressed || ((e = !0), (TouchInput._mousePressed = !0), (TouchInput._pressedTime = 0), TouchInput._onTrigger(TouchInput.x, TouchInput.y))
                        : a.call(this, t)
                    : (PD_UIManager.mouseKey && TouchInput._mousePressed) || a.call(this, t);
        };
        const i = Input._onKeyUp;
        Input._onKeyUp = function (t) {
            PD_UIManager.mouseKey
                ? PD_UIManager.mouseKey === this.keyMapper[t.keyCode] && e && ((e = !1), (TouchInput._mousePressed = !1), TouchInput._onRelease(TouchInput.x, TouchInput.y))
                : e && ((e = !1), (TouchInput._mousePressed = !1), TouchInput._onRelease(TouchInput.x, TouchInput.y)),
                i.call(this, t);
        };
        const r = TouchInput._onMouseMove;
        TouchInput._onMouseMove = function (e) {
            PD_UIManager.mouseCursorUI && PD_UIManager.isEnableMoveMouseCursorUI && PD_UIManager.mouseCursorUI.move(Graphics.pageToCanvasX(e.pageX), Graphics.pageToCanvasY(e.pageY)), r.call(this, e);
        };
        const s = TouchInput.update;
        let o = 0,
            l = 0;
        TouchInput.update = function () {
            PD_UIManager.mouseCursorUI &&
                (!PD_UIManager.isEnableMoveMouseCursorUI || (this._x === o && this._y === l)
                    ? ((this._x = PD_UIManager.mouseCursorUI.x), (this._y = PD_UIManager.mouseCursorUI.y))
                    : ((o = this._x), (l = this._y), this._mousePressed ? this._onMove(this._x, this._y) : Graphics.isInsideCanvas(this._x, this._y) && this._onHover(this._x, this._y))),
                s.call(this);
        };
    })(),
    (function () {
        "use strict";
        const e = PD_UIManager.initialize;
        PD_UIManager.initialize = function () {
            e.call(this),
                (PD_UIManager._colliderUIs = []),
                (PD_UIManager._isStopPropagation = !1),
                (PD_UIManager._triggeredUIs = null),
                (PD_UIManager._pressedUIs = null),
                (PD_UIManager._releaseUIs = null),
                (PD_UIManager._isTapped = !1),
                (PD_UIManager._moveCount = 0),
                (PD_UIManager._preTouchPosition = { x: 0, y: 0 }),
                (PD_UIManager._winEventListeners = { trigger: {}, press: {}, tap: {}, longPress: {}, repeat: {}, move: {}, release: {} }),
                (PD_UIManager._winEventSEs = {}),
                (PD_UIManager._updateEventUIs = []),
                (PD_UIManager._isDisableAllEvent = !1),
                (PD_UIManager._isDisableAllWheelEvent = !1);
        };
        const t = Scene_Original.prototype.update;
        Scene_Original.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), t.call(this);
        };
        const n = Scene_Title.prototype.update;
        Scene_Title.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), n.call(this);
        };
        const a = Scene_Map.prototype.update;
        Scene_Map.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), this.isFastForward() && PD_UIManager.sceneUI_UpdateEvent(), a.call(this);
        };
        const i = Scene_Battle.prototype.update;
        Scene_Battle.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), i.call(this);
        };
        const r = Scene_Gameover.prototype.update;
        Scene_Gameover.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), r.call(this);
        };
        const s = Scene_Options.prototype.update;
        Scene_Options.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), s.call(this);
        };
        const o = Scene_File.prototype.update;
        Scene_File.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), o.call(this);
        };
        const l = Scene_GameEnd.prototype.update;
        Scene_GameEnd.prototype.update = function () {
            PD_UIManager.sceneUI_UpdateEvent(), l.call(this);
        };
        const h = TouchInput.isPressed;
        TouchInput.isPressed = function () {
            return !PD_UIManager._isStopPropagation && h.call(this);
        };
        const c = TouchInput.isTriggered;
        TouchInput.isTriggered = function () {
            return !PD_UIManager._isStopPropagation && c.call(this);
        };
        const u = TouchInput.isRepeated;
        TouchInput.isRepeated = function () {
            return !PD_UIManager._isStopPropagation && u.call(this);
        };
        const p = TouchInput.isLongPressed;
        TouchInput.isLongPressed = function () {
            return !PD_UIManager._isStopPropagation && p.call(this);
        };
        const g = TouchInput.isCancelled;
        TouchInput.isCancelled = function () {
            return !PD_UIManager._isStopPropagation && g.call(this);
        };
        const _ = TouchInput.isMoved;
        TouchInput.isMoved = function () {
            return !PD_UIManager._isStopPropagation && _.call(this);
        };
        const d = TouchInput.isReleased;
        TouchInput.isReleased = function () {
            return !PD_UIManager._isStopPropagation && d.call(this);
        };
        const f = TouchInput.update;
        TouchInput.update = function () {
            f.call(this), PD_UIManager._isStopPropagation && (this._mousePressed || this._screenPressed) && this._pressedTime++;
        };
        const m = PD_UI.prototype.initialize;
        PD_UI.prototype.initialize = function () {
            m.apply(this, arguments), this._cX, this._cY, this._cW, this._cH, this._cR, this._cE, this._cS, this._cA, this._e, this._ew, this._eSE, this._ewSE;
        };
        const P = PD_UI.prototype.initializeTempProperty;
        PD_UI.prototype.initializeTempProperty = function (e) {
            P.apply(this, arguments), this.isBase || (PD_UIManager.UIPropertys[e].isDisableCollider = !1);
        };
        const D = PD_UI.prototype.delete;
        PD_UI.prototype.delete = function () {
            if (PD_UIManager.list[this.name]) {
                this.removeCollider();
                for (let e in this._ew) for (let t in this._ew[e]) this.removeWinEvent(t), this.removeWinEventSE(t);
                for (let e in this._e) for (let t in this._e[e]) this.removeEvent(t), this.removeEventSE(t);
                D.call(this);
            }
        };
        const I = PD_UI.prototype.reBuildUI;
        PD_UI.prototype.reBuildUI = function () {
            this.rectButton ? (this.rectButton = this._cR) : this.ellipseButton && (this.ellipseButton = this._cE);
            for (let e in this._ew) {
                const t = this._ew[e];
                for (let n in t) (PD_UIManager._winEventListeners[e][n] = this._ew[e][n]), this._ewSE && this._ewSE[n] && (PD_UIManager._winEventSEs[n] = this._ewSE[n]);
            }
            return I.apply(this, arguments);
        };
    })(),
    (PD_UIManager.InputKeys = ["ok", "tab", "shift", "control", "escape", "pageup", "pagedown", "left", "up", "right", "down"]),
    (PD_UIManager.TouchInputKeys = ["wheelup", "wheeldown"]),
    (PD_UIManager.sceneUI_UpdateEvent = function () {
        if ((this._isStopPropagation && (this._isStopPropagation = !1), PD_UIManager._isDisableAllEvent)) return;
        let e, t, n, a;
        const i = TouchInput.isTriggered(),
            r = TouchInput.isPressed();
        i || (a = TouchInput.isReleased()), r && ((t = TouchInput.isLongPressed()), (e = TouchInput.isRepeated()), (n = TouchInput.isMoved()));
        const s = function (e) {
            null !== PD_UIManager._triggeredUIs && (PD_UIManager._triggeredUIs = null),
                null !== PD_UIManager._pressedUIs && (PD_UIManager._pressedUIs = null),
                0 !== PD_UIManager._moveCount && (PD_UIManager._moveCount = 0),
                e && (null !== PD_UIManager._releaseUIs && (PD_UIManager._releaseUIs = null), PD_UIManager._isTapped && (PD_UIManager._isTapped = !1));
        };
        if (i || r || a)
            if (((this._pressedUIs = {}), (this._releaseUIs = {}), (this._isTapped = !1), PD_Math.isHitPointRect(TouchInput.x, TouchInput.y, 0, 0, PD_UIManager.baseScreenWidth, PD_UIManager.baseScreenHeight))) {
                const e = PD_UIManager._preTouchPosition,
                    t = TouchInput.x,
                    n = TouchInput.y;
                i && ((e.x = t), (e.y = n)), e.x !== t && ((PD_UIManager._moveCount += Math.abs(e.x - t)), (e.x = t)), e.y !== n && ((PD_UIManager._moveCount += Math.abs(e.y - n)), (e.y = n));
                for (let e = PD_UIManager._colliderUIs, t = e.length - 1; t >= 0; t--) {
                    if (e[t]) for (let n = e[t], a = n.length - 1; a >= 0 && (n[a] && n[a].updateEvent(), !PD_UIManager._isStopPropagation); a--);
                    if (PD_UIManager._isStopPropagation) break;
                }
            } else s(!0);
        else s(!0);
        a && s(),
            i ? PD_UIManager.runEvent("trigger") : a && (PD_UIManager.runEvent("release"), TouchInput._pressedTime < 21 && PD_UIManager.runEvent("tap")),
            r && (PD_UIManager.runEvent("press"), t && PD_UIManager.runEvent("longPress"), e && PD_UIManager.runEvent("repeat"), n && PD_UIManager.runEvent("move"));
        for (let e = PD_UIManager._updateEventUIs, t = e.length - 1, n = !1; t >= 0; t--) {
            const a = e[t] ? e[t].ui : null;
            if (a && a._e) {
                let i = !1;
                for (let r in a._e) {
                    if (!i && ("mouseover" === r || "mouseleave" === r)) {
                        const r = a.checkTouchHit();
                        e[t].isMouseOver || !r || n || a.isDisableCollider ? e[t].isMouseOver && !r && (e[t].isMouseOver = !1) : (e[t].isMouseOver = !0), (i = !0), e[t].isMouseOver && a.isStopPropagation && (n = !0);
                    }
                    if ("mouseover" === r && !e[t].isRunMouseOverEvent && e[t].isMouseOver) {
                        const e = a._e[r];
                        for (let t in e) a.playEventSE(t), e[t]();
                    } else if ("mouseleave" === r && e[t].isRunMouseOverEvent && !e[t].isMouseOver) {
                        const e = a._e[r];
                        for (let t in e) a.playEventSE(t), e[t]();
                    } else if (PD_UIManager.InputKeys.includes(r)) {
                        const e = a._e[r];
                        if (e && Input.isPressed(r)) for (let t in e) a.playEventSE(t), e[t]();
                    } else if (!PD_UIManager._isDisableAllWheelEvent && PD_UIManager.TouchInputKeys.includes(r)) {
                        const e = a._e[r];
                        if ("wheelup" === r && e && TouchInput.wheelY < 0) for (let t in e) a.playEventSE(t), e[t]();
                        else if ("wheeldown" === r && e && TouchInput.wheelY > 0) for (let t in e) a.playEventSE(t), e[t]();
                    } else if ("update" === r) {
                        const e = a._e[r];
                        if (e) for (let t in e) a.playEventSE(t), e[t]();
                    }
                }
                i && e[t] && e[t].isRunMouseOverEvent !== e[t].isMouseOver && (e[t].isRunMouseOverEvent = e[t].isMouseOver);
            }
        }
    }),
    (PD_UIManager.stopAllColliderEvent = function () {
        PD_UIManager._isDisableAllEvent = !0;
    }),
    (PD_UIManager.startAllColliderEvent = function () {
        PD_UIManager._isDisableAllEvent = !1;
    }),
    (PD_UIManager.isEnableAllColliderEvent = function () {
        return !PD_UIManager._isDisableAllEvent;
    }),
    (PD_UIManager.stopAllWheelEvent = function () {
        PD_UIManager._isDisableAllWheelEvent = !0;
    }),
    (PD_UIManager.startAllWheelEvent = function () {
        PD_UIManager._isDisableAllWheelEvent = !1;
    }),
    (PD_UIManager.isEnableAllWheelEvent = function () {
        return !PD_UIManager._isDisableAllWheelEvent;
    }),
    (PD_UIManager.runEvent = function (e) {
        const t = PD_UIManager._winEventListeners[e];
        for (let e in t) {
            const n = PD_UIManager._winEventSEs[e];
            if (n)
                for (let e = 0, t = n.length; e < t; e++) {
                    const t = n[e];
                    (t[4] && !t[4]()) || AudioManager.playSe({ name: t[0], pan: t[1], pitch: t[2], volume: t[3] });
                }
            t[e]();
        }
    }),
    Object.defineProperty(PD_UI.prototype, "colX", {
        get: function () {
            return void 0 === this._cX ? 0 : this._cX;
        },
        set: function (e) {
            0 === e ? delete this._cX : (this._cX = e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "colY", {
        get: function () {
            return void 0 === this._cY ? 0 : this._cY;
        },
        set: function (e) {
            0 === e && delete this._cY, (this._cY = e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "colWidth", {
        get: function () {
            return void 0 === this._cW ? this.frameWidth : this._cW;
        },
        set: function (e) {
            0 === e && delete this._cW, (this._cW = e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "colHeight", {
        get: function () {
            return void 0 === this._cH ? this.frameHeight : this._cH;
        },
        set: function (e) {
            0 === e && delete this._cH, (this._cH = e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "rectButton", {
        get: function () {
            return void 0 !== this._cR;
        },
        set: function (e) {
            this.setCollider("_cR", e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "ellipseButton", {
        get: function () {
            return void 0 !== this._cE;
        },
        set: function (e) {
            this.setCollider("_cE", e);
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "isStopPropagation", {
        get: function () {
            return 1 === this._cS;
        },
        set: function (e) {
            e ? (this._cS = 1) : delete this._cS;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "isDisableButton_Animation", {
        get: function () {
            return 1 === this._cA;
        },
        set: function (e) {
            e ? (this._cA = 1) : delete this._cA;
        },
        configurable: !0,
    }),
    Object.defineProperty(PD_UI.prototype, "isDisableCollider", {
        get: function () {
            return !!PD_UIManager.UIPropertys[this.name] && PD_UIManager.UIPropertys[this.name].isDisableCollider;
        },
        set: function (e) {
            if (PD_UIManager.UIPropertys[this.name]) {
                PD_UIManager.UIPropertys[this.name].isDisableCollider = e;
                for (let t = 0, n = this.children, a = n.length; t < a; t++) n[t].isDisableCollider = e;
            }
        },
        configurable: !0,
    }),
    (PD_UI.prototype.removeCollider = function () {
        let e = null;
        if ((void 0 !== this._cR && ((e = this._cR), delete this._cR), void 0 !== this._cE && ((e = this._cE), delete this._cE), null === e)) return;
        const t = PD_UIManager._colliderUIs;
        if (!t[e]) return;
        const n = t[e].indexOf(this);
        if ((n >= 0 && t[e].splice(n, 1), 0 === t[e].length && ((t[e] = void 0), e === t.length - 1)))
            for (let n = e; n >= 0; n--)
                if (t[n]) {
                    t.splice(n + 1, e - n);
                    break;
                }
    }),
    (PD_UI.prototype.setCollider = function (e, t) {
        this.removeCollider();
        const n = PD_UIManager._colliderUIs;
        switch (t) {
            case !1:
            case null:
            case void 0:
            case isNaN(t):
                t = null;
                break;
            case !0:
                t = 0;
        }
        null !== t && ((this[e] = t), n[t] || (n[t] = []), n[t].push(this));
    }),
    (PD_UI.prototype.isPressed = function () {
        return !((!TouchInput._mousePressed && !TouchInput._screenPressed) || !PD_UIManager._pressedUIs || !PD_UIManager._pressedUIs[this.name]);
    }),
    (PD_UI.prototype.isTriggered = function () {
        return !!(TouchInput._currentState.triggered && PD_UIManager._triggeredUIs && PD_UIManager._triggeredUIs[this.name]);
    }),
    (PD_UI.prototype.isTapped = function () {
        return !!(PD_UIManager._isTapped && PD_UIManager._releaseUIs && PD_UIManager._releaseUIs[this.name]);
    }),
    (PD_UI.prototype.isLongPressed = function () {
        return !!(this.isPressed() && TouchInput._pressedTime >= Input.keyRepeatWait);
    }),
    (PD_UI.prototype.isMoved = function () {
        return !!(TouchInput._currentState.moved && PD_UIManager._pressedUIs && PD_UIManager._pressedUIs[this.name]);
    }),
    (PD_UI.prototype.isReleased = function () {
        return !!(TouchInput._currentState.released && PD_UIManager._releaseUIs && PD_UIManager._releaseUIs[this.name]);
    }),
    (PD_UI.prototype.isRepeated = function () {
        return (
            this.isPressed() &&
            PD_UIManager._triggeredUIs &&
            PD_UIManager._triggeredUIs[this.name] &&
            (TouchInput._currentState.triggered || (TouchInput._pressedTime >= Input.keyRepeatWait && TouchInput._pressedTime % Input.keyRepeatInterval == 0))
        );
    }),
    (PD_UI.prototype.elementToTkool = function (e) {
        switch (e) {
            case "trigger":
            case "mousedown":
                return "trigger";
            case "press":
                return "press";
            case "tap":
            case "click":
                return "tap";
            case "longPress":
            case "longpress":
                return "longPress";
            case "repeat":
                return "repeat";
            case "move":
            case "mousemove":
                return "move";
            case "release":
            case "mouseup":
                return "release";
            case "mouseover":
                return "mouseover";
            case "mouseleave":
                return "mouseleave";
            default:
                if ("update" === e || PD_UIManager.InputKeys.includes(e) || PD_UIManager.TouchInputKeys.includes(e)) return e;
                throw new Error("指定されたイベントタイプは有効ではありません");
        }
    }),
    (PD_UI.prototype.addWinEvent = function (e, t, n) {
        (t = this.elementToTkool(t)), this._ew || (this._ew = {}), this._ew[t] || (this._ew[t] = {});
        const a = "string" == typeof n ? PD_Util.strToFunc(n) : n;
        if (this._ew[t][e]) throw new Error("同名のイベントリスナーがすでに存在しています");
        (this._ew[t][e] = a), (PD_UIManager._winEventListeners[t][e] = "function" == typeof n ? n : PD_Util.strToFunc(n));
    }),
    (PD_UI.prototype.addWinEventSE = function (e, t, n, a, i, r) {
        this._ewSE || (this._ewSE = {}), this._ewSE[e] || (this._ewSE[e] = []), null == n && (n = 0), null == a && (a = 100), null == i && (i = 90);
        const s = [t, n, a, i];
        r && s.push("string" == typeof r ? PD_Util.strToFunc(r) : r), this._ewSE[e].push(s), (PD_UIManager._winEventSEs[e] = this._ewSE[e]);
    }),
    (PD_UI.prototype.addEvent = function (e, t, n) {
        (t = this.elementToTkool(t)), this._e || (this._e = {}), this._e[t] || (this._e[t] = {});
        const a = "string" == typeof n ? PD_Util.strToFunc(n) : n;
        if (this._e[t][e]) throw new Error("同名のイベントリスナーがすでに存在しています");
        if (((this._e[t][e] = a), "update" === t || "mouseover" === t || "mouseleave" === t || PD_UIManager.InputKeys.includes(t) || PD_UIManager.TouchInputKeys.includes(t))) {
            let e = !0;
            for (let t = 0, n = PD_UIManager._updateEventUIs, a = n.length; t < a; t++)
                if (n[t].ui === this) {
                    e = !1;
                    break;
                }
            e &&
                (PD_UIManager._updateEventUIs.push({ ui: this, isMouseOver: !1, isRunMouseOverEvent: !1 }),
                PD_UIManager._updateEventUIs.sort((e, t) => {
                    let n = 0;
                    const a = e.ui;
                    a._cR && a._cR > n && (n = a._cR), a._cE && a._cE > n && (n = a._cE);
                    let i = 0;
                    const r = t.ui;
                    return r._cR && r._cR > i && (i = r._cR), r._cE && r._cE > i && (i = r._cE), n - i;
                }));
        }
    }),
    (PD_UI.prototype.addEventSE = function (e, t, n, a, i, r) {
        this._eSE || (this._eSE = {}), this._eSE[e] || (this._eSE[e] = []), null == n && (n = 0), null == a && (a = 100), null == i && (i = 90);
        const s = [t, n, a, i];
        r && s.push("string" == typeof r ? PD_Util.strToFunc(r) : r), this._eSE[e].push(s);
    }),
    (PD_UI.prototype.removeWinEvent = function (e) {
        const t = this._ew;
        if (t)
            for (let n in t) {
                const a = t[n];
                a[e] && (delete a[e], 0 === Object.keys(a).length && delete t[n], 0 === Object.keys(t).length && delete this._ew, delete PD_UIManager._winEventListeners[n][e]);
            }
    }),
    (PD_UI.prototype.removeEvent = function (e) {
        const t = this._e;
        if (t)
            for (let n in t) {
                const a = t[n];
                if (
                    a[e] &&
                    (delete a[e],
                    0 === Object.keys(a).length && delete t[n],
                    0 === Object.keys(t).length && delete this._e,
                    "update" === n || "mouseover" === n || "mouseleave" === n || PD_UIManager.InputKeys.includes(n) || PD_UIManager.TouchInputKeys.includes(n))
                )
                    for (let e = 0, t = PD_UIManager._updateEventUIs, n = t.length; e < n; e++) {
                        if (t[e].ui === this) {
                            t.splice(e, 1);
                            break;
                        }
                    }
            }
    }),
    (PD_UI.prototype.removeWinEventSE = function (e) {
        this._ewSE && (this._ewSE[e] && delete this._ewSE[e], 0 === Object.keys(this._ewSE).length && delete this._ewSE, delete PD_UIManager._winEventSEs[e]);
    }),
    (PD_UI.prototype.removeEventSE = function (e) {
        this._eSE && (this._eSE[e] && delete this._eSE[e], 0 === Object.keys(this._eSE).length && delete this._eSE);
    }),
    (PD_UI.prototype.runEvent = function (e) {
        const t = this._e;
        if (t) {
            const n = t[e];
            if (n) for (let e in n) this.playEventSE(e), n[e]();
        }
    }),
    (PD_UI.prototype.playEventSE = function (e) {
        const t = this._eSE ? this._eSE[e] : void 0;
        if (t)
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                (n[4] && !n[4]()) || AudioManager.playSe({ name: n[0], pan: n[1], pitch: n[2], volume: n[3] });
            }
    }),
    (PD_UI.prototype.updateEvent = function () {
        this.realVisible && (this.isDisableCollider || (PD_UIManager.disableColliders_exceptUI_names.length > 0 && !PD_UIManager.disableColliders_exceptUI_names.includes(this.name)) || (this.checkTouchHit() && this.updateCollider()));
    }),
    (PD_UI.prototype.checkTouchHit = function () {
        if (!this.rectButton && !this.ellipseButton) return !1;
        const e = PD_UIManager.UIPropertys[this.name],
            t = e.realX,
            n = e.realY,
            a = e.realScale.x,
            i = e.realScale.y,
            r = e.realRotation,
            s = this.colX * a,
            o = this.colY * i,
            l = this.colWidth * Math.abs(a),
            h = this.colHeight * Math.abs(i),
            c = t - l * (a < 0 ? 1 - this.anchorX : this.anchorX) + (a < 0 ? -s : s),
            u = n - h * (i < 0 ? 1 - this.anchorY : this.anchorY) + (a < 0 ? -o : o);
        if (this.rectButton) return PD_Math.isHitPointRotateRect(TouchInput.x, TouchInput.y, c, u, l, h, t, n, r);
        if (this.ellipseButton) {
            if (l === h && 0 === r) return PD_Math.isHitPointCircle(TouchInput.x, TouchInput.y, c + l / 2, u + h / 2, l / 2);
            {
                const e = PD_Math.getCenterRotateRect(t, n, c, u, l, h, r);
                return PD_Math.isHitPointRotateEllipse(TouchInput.x, TouchInput.y, e.x, e.y, l / 2, h / 2, r);
            }
        }
    }),
    (PD_UI.prototype.updateCollider = function () {
        if ((this.isStopPropagation && (PD_UIManager._isStopPropagation = !0), !this.isDisableButton_Animation || !this.isPlayAnimation)) {
            if (TouchInput._currentState.triggered) PD_UIManager._triggeredUIs || (PD_UIManager._triggeredUIs = {}), (PD_UIManager._triggeredUIs[this.name] = this), this.runEvent("trigger");
            else if (TouchInput._currentState.released)
                return (
                    PD_UIManager._releaseUIs || (PD_UIManager._releaseUIs = {}),
                    (PD_UIManager._releaseUIs[this.name] = this),
                    this.runEvent("release"),
                    void (PD_UIManager._triggeredUIs && PD_UIManager._triggeredUIs[this.name] && TouchInput._pressedTime < 21 && PD_UIManager._moveCount < 20 && ((PD_UIManager._isTapped = !0), this.runEvent("tap")))
                );
            PD_UIManager._pressedUIs || (PD_UIManager._pressedUIs = {}),
                (PD_UIManager._pressedUIs[this.name] = this),
                this.runEvent("press"),
                TouchInput._currentState.moved && this.runEvent("move"),
                TouchInput._pressedTime >= Input.keyRepeatWait && this.runEvent("longPress"),
                (TouchInput._currentState.triggered || (PD_UIManager._triggeredUIs && PD_UIManager._triggeredUIs[this.name] && TouchInput._pressedTime >= Input.keyRepeatWait && TouchInput._pressedTime % Input.keyRepeatInterval == 0)) &&
                    this.runEvent("repeat");
        }
    }),
    !window.PD_UIManager)
)
    throw new Error("このプラグインよりも先に「PD_UIManager」プラグインを読み込む必要があります");
if (!PD_UIManager.runEvent) throw new Error("このプラグインよりも先に「PD_UIManager_Collider」プラグインを読み込む必要があります");
function PD_UIManager_DragEvent() {
    throw new Error("This is a static class");
}
if (
    ((PD_UIManager_DragEvent.dragUIInfos = {}),
    (PD_UI.prototype.addDragEvent = function (e, t, n, a, i = !0, r = !0, s = 1, o, l) {
        (e += "_" + this.name),
            this.addEvent(e + "_trigger", "trigger", () => {
                (PD_UIManager_DragEvent.dragUIInfos[this.name] = { ui: this, triggerX: TouchInput.x, triggerY: TouchInput.y, moveStartX: TouchInput.x - this.x, moveStartY: TouchInput.y - this.y, isMoved: !1 }), t && t();
            }),
            this.addWinEvent(e + "_move", "move", () => {
                const e = PD_UIManager_DragEvent.dragUIInfos[this.name];
                if (e)
                    if (o && o()) l || (delete PD_UIManager_DragEvent.dragUIInfos[this.name], a && a());
                    else {
                        if (!e.isMoved) {
                            PD_Math.getDistance(e.triggerX, e.triggerY, TouchInput.x, TouchInput.y) >= s && (e.isMoved = !0);
                        }
                        e.isMoved && (i && (this.x = TouchInput.x - e.moveStartX), r && (this.y = TouchInput.y - e.moveStartY), n && n());
                    }
            }),
            this.addWinEvent(e + "_release", "release", () => {
                PD_UIManager_DragEvent.dragUIInfos[this.name] && (delete PD_UIManager_DragEvent.dragUIInfos[this.name], a && a(event));
            });
    }),
    (PD_UI.prototype.removeDragEvent = function (e) {
        (e += "_" + this.name), this.removeEvent(e + "_trigger"), this.removeEvent(e + "_move"), this.removeEvent(e + "_release");
    }),
    (PD_UI.prototype.getDragStartX = function () {
        const e = PD_UIManager_DragEvent.dragUIInfos[this.name];
        return e ? e.triggerX : null;
    }),
    (PD_UI.prototype.getDragStartY = function () {
        const e = PD_UIManager_DragEvent.dragUIInfos[this.name];
        return e ? e.triggerY : null;
    }),
    (PD_UI.prototype.isDragMoveStart = function () {
        const e = PD_UIManager_DragEvent.dragUIInfos[this.name];
        return !!e && e.isMoved;
    }),
    (function () {
        "use strict";
        const e = PD_UI.prototype.delete;
        PD_UI.prototype.delete = function () {
            delete PD_UIManager_DragEvent.dragUIInfos[this.name], e.call(this);
        };
    })(),
    !window.PD_Core)
)
    throw new Error("このプラグインよりも先に「PD_Core」プラグインを読み込む必要があります");
function PD_SaveDataManager() {
    this.initialize(...arguments);
}
function DialogSystem() {
    throw new Error("This is a static class");
}
function Dialog() {
    this.initialize.apply(this, arguments);
}
function EventManager() {
    throw new Error("This is a static class");
}
function CatalogSystem() {
    throw new Error("This is a static class");
}
function Catalog() {
    this.initialize.apply(this, arguments);
}
function PD_ImportGoogleSpreadSeet() {
    throw new Error("This is a static class");
}
function PD_Translation() {
    throw new Error("This is a static class");
}
($save = {}),
    ($option = {}),
    (PD_SaveDataManager.isAutoSave_AfterMoveMap = !0),
    (PD_SaveDataManager.isAutoSave_AfterBattle = !0),
    (PD_SaveDataManager.saveFileNum = 20),
    (PD_SaveDataManager.saveInit = {}),
    (PD_SaveDataManager.optionInit = { language: "日本語" }),
    (PD_SaveDataManager.addSaveParam = function (e, t) {
        PD_SaveDataManager.saveInit[e] = t;
    }),
    (PD_SaveDataManager.initSaveParam = function () {
        $save = JSON.parse(JSON.stringify(PD_SaveDataManager.saveInit));
    }),
    (PD_SaveDataManager.save = function (e) {
        PD_SaveDataManager.save_initSaveVariables();
        const t = JSON.stringify($save),
            n = pako.deflate(t, { to: "string", level: 9 });
        return n.length >= 5e4 && console.warn("Save data is too big."), StorageManager.saveZip(e, n);
    }),
    (PD_SaveDataManager.save_initSaveVariables = function () {
        const e = JSON.parse(JSON.stringify(PD_SaveDataManager.saveInit));
        for (let t in e) void 0 === $save[t] && ($save[t] = e[t]);
        for (let t in $save) void 0 === e[t] && delete $save[t];
    }),
    (PD_SaveDataManager.load = function (e) {
        return new Promise((t) => {
            StorageManager.loadZip(e)
                .then((e) => {
                    if ((($save = {}), void 0 !== e)) {
                        const t = JSON.parse(pako.inflate(e, { to: "string" }));
                        Object.keys(t).length > 0 && ($save = t);
                    }
                    PD_SaveDataManager.load_initSaveVariables(), t($save);
                })
                .catch(() => {
                    ($save = JSON.parse(JSON.stringify(PD_SaveDataManager.saveInit))), t($save);
                });
        });
    }),
    (PD_SaveDataManager.load_initSaveVariables = function () {
        for (let e in PD_SaveDataManager.saveInit) void 0 === $save[e] && ($save[e] = PD_SaveDataManager.saveInit[e]);
    }),
    (PD_SaveDataManager.addOptionParam = function (e, t) {
        PD_SaveDataManager.optionInit[e] = t;
    }),
    (PD_SaveDataManager.loadOptionFile = function () {
        const e = "save/kgoption.rmmzsave";
        PD_Setup.readyFinishFuncs.push(
            () => (
                void 0 === PD_Setup.file[e] &&
                    ((PD_Setup.file[e] = null),
                    StorageManager.loadZip("kgoption")
                        .then((t) => {
                            if ((($option = {}), void 0 !== t)) {
                                const e = JSON.parse(pako.inflate(t, { to: "string" }));
                                Object.keys(e).length > 0 && ($option = e);
                            }
                            PD_SaveDataManager.load_initOptionVariables(), (PD_Setup.file[e] = $option);
                        })
                        .catch(() => {
                            const t = JSON.stringify(PD_SaveDataManager.optionInit),
                                n = JSON.parse(t);
                            ($option = n), (PD_Setup.file[e] = t);
                        })),
                !!PD_Setup.file["save/kgoption.rmmzsave"]
            )
        );
    }),
    (PD_SaveDataManager.load_initOptionVariables = function () {
        for (let e in PD_SaveDataManager.optionInit) void 0 === $option[e] && ($option[e] = PD_SaveDataManager.optionInit[e]);
    }),
    (PD_SaveDataManager.saveOptionFile = function () {
        const e = JSON.parse(JSON.stringify(PD_SaveDataManager.optionInit));
        for (let t in e) void 0 === $option[t] && ($option[t] = e[t]);
        for (let t in $option) void 0 === e[t] && delete $option[t];
        const t = JSON.stringify($option),
            n = pako.deflate(t, { to: "string", level: 9 });
        return n.length >= 5e4 && console.warn("Save data is too big."), StorageManager.saveZip("kgoption", n);
    }),
    (PD_SaveDataManager.tkoolAutoSave = function () {
        SceneManager._scene.requestAutosave();
    }),
    (function () {
        "use strict";
        const e = DataManager.createGameObjects;
        DataManager.createGameObjects = function () {
            e.call(this), PD_SaveDataManager.initSaveParam();
        };
        const t = Scene_Map.prototype.shouldAutosave;
        Scene_Map.prototype.shouldAutosave = function () {
            return !PD_SaveDataManager.isAutoSave_AfterMoveMap && t.apply(this, arguments);
        };
        const n = Scene_Battle.prototype.shouldAutosave;
        (Scene_Battle.prototype.shouldAutosave = function () {
            return !PD_SaveDataManager.isAutoSave_AfterBattle && n.apply(this, arguments);
        }),
            (DataManager.maxSavefiles = function () {
                return PD_SaveDataManager.saveFileNum;
            });
        const a = DataManager.makeSaveContents;
        DataManager.makeSaveContents = function () {
            const e = a.call(this);
            return PD_SaveDataManager.save_initSaveVariables(), (e.save = $save), e;
        };
        const i = DataManager.extractSaveContents;
        DataManager.extractSaveContents = function (e) {
            i.call(this, e), ($save = e.save), PD_SaveDataManager.load_initSaveVariables();
        };
    })(),
    (DialogSystem.createNum = 0),
    (Dialog.prototype.constructor = Dialog),
    (Dialog.prototype.initialize = function (e, t) {
        (this.instanceID = DialogSystem.createNum),
            DialogSystem.createNum++,
            (this.parentUI = e),
            (this.baseUI_filePath = t),
            (this.textAreaUI_Names = []),
            (this.texts = []),
            (this.textFontSizes = []),
            (this.textAligns = []),
            (this.textColors = []),
            (this.textOutlineWidths = []),
            (this.textOutlineColors = []),
            (this.textFontFamilyNames = []),
            (this.textBolds = []),
            (this.textItalics = []),
            (this.baseUI = null),
            (this.buttonUIs = []),
            (this.buttonUI_names = []),
            (this.triggerFuncs = []),
            (this.openAnimeFilePath = ["", ""]),
            (this.closeAnimeFilePath = ["", ""]),
            (this.open_close_AnimeUI_Name = null);
    }),
    (Dialog.prototype.setText = function (e, t, n = null, a = null, i = null, r = null, s = null, o = null, l = null, h = null) {
        this.textAreaUI_Names.push(e),
            this.texts.push(t),
            this.textFontSizes.push(n),
            this.textAligns.push(a),
            this.textColors.push(i),
            this.textOutlineWidths.push(r),
            this.textOutlineColors.push(s),
            this.textFontFamilyNames.push(o),
            this.textBolds.push(l),
            this.textItalics.push(h);
    }),
    (Dialog.prototype.setButton = function (e, t) {
        (this.buttonUI_names = e), (this.triggerFuncs = t);
    }),
    (Dialog.prototype.setOpenAnimation = function (e, t, n) {
        (this.openAnimeFilePath = [t, n]), (this.open_close_AnimeUI_Name = e);
    }),
    (Dialog.prototype.setCloseAnimation = function (e, t, n) {
        (this.closeAnimeFilePath = [t, n]), (this.open_close_AnimeUI_Name = e);
    }),
    (Dialog.prototype.create = function () {
        this.baseUI = PD_UIManager.loadDatabase(this.baseUI_filePath, this.parentUI, this.instanceID);
        for (let e = 0, t = this.buttonUI_names.length; e < t; e++) this.buttonUIs[e] = PD_UIManager.list[this.instanceID + ":" + this.buttonUI_names[e]];
        const e = () => {
            for (let e = 0, t = this.textAreaUI_Names.length; e < t; e++) {
                const t = PD_UIManager.list[this.instanceID + ":" + this.textAreaUI_Names[e]],
                    n = t.addUI(t.name + "_DialogText", t.width, t.height);
                n.anchor = [t.anchor.x, t.anchor.y];
                const a = PD_String.splitLines(this.texts[e], 2 * Math.floor(t.width / this.textFontSizes[e]));
                for (let i = 0, r = a.length; i < r; i++) {
                    const r = Math.floor(this.textFontSizes[e] / 3);
                    n.drawTextEX(
                        a[i],
                        0,
                        (this.textFontSizes[e] + r) * i,
                        t.width,
                        this.textFontSizes[e],
                        this.textAligns[e],
                        this.textFontSizes[e],
                        this.textColors[e],
                        this.textOutlineWidths[e],
                        this.textOutlineColors[e],
                        this.textFontFamilyNames[e],
                        this.textBolds[e],
                        this.textItalics[e]
                    );
                }
            }
            for (let e = 0, t = this.buttonUIs.length; e < t; e++) {
                const t = this.buttonUIs[e];
                (t.visible = !0),
                    t.addEvent("trigger", "trigger", () => {
                        this.triggerFuncs[e]();
                    });
            }
        };
        if (this.openAnimeFilePath[0]) {
            const t = this.open_close_AnimeUI_Name ? PD_UIManager.list[this.instanceID + ":" + this.open_close_AnimeUI_Name] : this.baseUI;
            t.setAnimation(this.openAnimeFilePath[0], this.openAnimeFilePath[1]),
                t.animeFunction(() => {
                    e();
                }),
                t.playAnimation();
        } else e();
    }),
    (Dialog.prototype.close = function () {
        return new Promise((e) => {
            if (this.closeAnimeFilePath[0]) {
                for (let e = 0, t = this.buttonUIs.length; e < t; e++) this.buttonUIs[e].delete();
                const t = this.open_close_AnimeUI_Name ? PD_UIManager.list[this.instanceID + ":" + this.open_close_AnimeUI_Name] : this.baseUI;
                t.deleteAnimation(),
                    t.setAnimation(this.closeAnimeFilePath[0], this.closeAnimeFilePath[1]),
                    t.animeFunction(() => {
                        this.delete(), e();
                    }),
                    t.playAnimation();
            } else this.delete(), e();
        });
    }),
    (Dialog.prototype.delete = function () {
        this.baseUI.delete();
    }),
    (DialogSystem.dialogSample = function (e, t, n, a, i) {
        return new Promise((r) => {
            const s = new Dialog(PD_UIManager.base.upper, "system/dialog_base");
            s.setText("dialog_TitleArea", e, 48, "center", "black", 6, "white"),
                s.setText("dialog_MessageArea", t, 32, n),
                s.setText("dialog_button1_TextArea", "はい", 32, "center"),
                s.setText("dialog_button2_TextArea", "いいえ", 32, "center");
            const o = [];
            for (let e = 0, t = i.length; e < t; e++)
                o[e] = () => {
                    i[e](),
                        s &&
                            s.close().then(() => {
                                r();
                            });
                };
            s.setButton(a, o), s.create();
        });
    }),
    (EventManager.bgm_DB = {}),
    (EventManager.bgm_IDs = {}),
    (EventManager.bgs_DB = {}),
    (EventManager.bgs_IDs = {}),
    (EventManager.me_DB = {}),
    (EventManager.me_IDs = {}),
    (EventManager.se_DB = {}),
    (EventManager.se_IDs = {}),
    (EventManager.standIMG_DB = {}),
    (EventManager.viewStandIMG_ID = 0),
    (EventManager.eventDB = {}),
    (EventManager.variableIDs = {}),
    (EventManager.tempVariables = {}),
    (EventManager.checkedCompleteEventsData = !1),
    (EventManager.isSaveCompletedEvents = !0),
    (EventManager.originalCommands = {}),
    PD_SaveDataManager.addSaveParam("eventManager", {}),
    (EventManager.loadBGMDatabase = function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            PD_Setup.addReadyLoadCompressFile("_database/" + n + ".csv", (e) => {
                const t = PD_File.convertCSV_to_Array(e);
                for (let e = 1, n = t.length; e < n; e++)
                    if (t[e][0] && !isNaN(t[e][0])) {
                        if (EventManager.bgm_DB[t[e][0]]) throw Error("ＢＧＭデータベースのＩＤ「" + t[e][0] + "」が重複しています");
                        (EventManager.bgm_IDs[t[e][1]] = t[e][0]), (EventManager.bgm_DB[t[e][0]] = { name: t[e][1], fileName: t[e][2], pan: t[e][3] ? t[e][3] : 0, pitch: t[e][4] ? t[e][4] : 100, volume: t[e][5] ? t[e][5] : 90 });
                    }
            });
        }
    }),
    (EventManager.loadBGSDatabase = function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            PD_Setup.addReadyLoadCompressFile("_database/" + n + ".csv", (e) => {
                const t = PD_File.convertCSV_to_Array(e);
                for (let e = 1, n = t.length; e < n; e++)
                    if (t[e][0] && !isNaN(t[e][0])) {
                        if (EventManager.bgs_DB[t[e][0]]) throw Error("ＢＧＳデータベースのＩＤ「" + t[e][0] + "」が重複しています");
                        (EventManager.bgs_IDs[t[e][1]] = t[e][0]), (EventManager.bgs_DB[t[e][0]] = { name: t[e][1], fileName: t[e][2], pan: t[e][3] ? t[e][3] : 0, pitch: t[e][4] ? t[e][4] : 100, volume: t[e][5] ? t[e][5] : 90 });
                    }
            });
        }
    }),
    (EventManager.loadMEDatabase = function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            PD_Setup.addReadyLoadCompressFile("_database/" + n + ".csv", (e) => {
                const t = PD_File.convertCSV_to_Array(e);
                for (let e = 1, n = t.length; e < n; e++)
                    if (t[e][0] && !isNaN(t[e][0])) {
                        if (EventManager.me_DB[t[e][0]]) throw Error("ＭＥデータベースのＩＤ「" + t[e][0] + "」が重複しています");
                        (EventManager.me_IDs[t[e][1]] = t[e][0]), (EventManager.me_DB[t[e][0]] = { name: t[e][1], fileName: t[e][2], pan: t[e][3] ? t[e][3] : 0, pitch: t[e][4] ? t[e][4] : 100, volume: t[e][5] ? t[e][5] : 90 });
                    }
            });
        }
    }),
    (EventManager.loadSEDatabase = function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            PD_Setup.addReadyLoadCompressFile("_database/" + n + ".csv", (e) => {
                const t = PD_File.convertCSV_to_Array(e);
                for (let e = 1, n = t.length; e < n; e++)
                    if (t[e][0] && !isNaN(t[e][0])) {
                        if (EventManager.se_DB[t[e][0]]) throw Error("ＳＥデータベースのＩＤ「" + t[e][0] + "」が重複しています");
                        (EventManager.se_IDs[t[e][1]] = t[e][0]), (EventManager.se_DB[t[e][0]] = { name: t[e][1], fileName: t[e][2], pan: t[e][3] ? t[e][3] : 0, pitch: t[e][4] ? t[e][4] : 100, volume: t[e][5] ? t[e][5] : 90 });
                    }
            });
        }
    }),
    (EventManager.loadStandIMGDatabase = function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            PD_Setup.addReadyLoadCompressFile("_database/" + n + ".csv", (e) => {
                const t = PD_File.convertCSV_to_Array(e);
                for (let e = 1, n = t.length; e < n; e++) EventManager.standIMG_DB[t[e][0]] = { name: t[e][1], filePaths: t[e].slice(2) };
            });
        }
    }),
    (EventManager.loadEventDatabase = function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            PD_Setup.addReadyLoadCompressFile(
                "_database/" + n + ".csv",
                (e) => {
                    const t = PD_File.convertCSV_to_Array(e);
                    let n = null;
                    for (let e = 0, a = t.length; e < a; e++)
                        if ("" !== t[e][0] && (null === n || (null !== n && t[e][0] !== n))) {
                            const a = t[e][0].split(/】【|【|】/);
                            for (let e = 0, t = a.length; e < t && "" === a[e]; e++) a.splice(e, 1);
                            n = a[0].replace("イベント名｜", "");
                            const i = "非表示" !== a[1],
                                r = a[2] ? a[2] : "",
                                s = a[3] ? a[3].replace("出現条件｜", "") : "";
                            EventManager.eventDB[n] = [{ eventName: n, eventIsView: i, eventTrigger: r, eventEnableIf: s }];
                        } else {
                            const a = EventManager.eventDB[n];
                            if (a) {
                                a.push([]);
                                for (let n = 1, i = t[e].length; n < i; n++) a[a.length - 1].push(String(t[e][n]));
                            }
                        }
                },
                null,
                (e) => {
                    const t = PD_File.convertCSV_to_Array(e);
                    for (let e = 0, n = t.length; e < n; e++) t[e].splice(1, 1);
                    return PD_File.convertArray_to_CSV(t);
                }
            );
        }
    }),
    (EventManager.loadVariablesDatabase = function (e) {
        return new Promise((t) => {
            PD_Setup.loadCompressedFile("_database/" + e + ".csv").then((e) => {
                const n = PD_File.convertCSV_to_Array(e);
                $save.eventManager.variables || ($save.eventManager.variables = {});
                const a = $save.eventManager.variables;
                for (let e = 1, t = n.length; e < t; e++) {
                    const t = n[e];
                    t[0] && !isNaN(t[0]) && (a.hasOwnProperty(t[0]) || (a[t[0]] = t[2]), (EventManager.variableIDs[t[1]] = t[0]));
                }
                t();
            });
        });
    }),
    (EventManager.runEvent = function (e) {
        return EventManager.buildEvent(EventManager.eventDB[e])();
    }),
    (EventManager.runCommand = function (e) {
        return EventManager.buildEvent([[e]])();
    }),
    (EventManager.playSaveAudio = function () {
        const e = EventManager.getSaveAudioInfos();
        if (e.bgm) {
            const t = EventManager.bgm_DB[e.bgm.id];
            AudioManager.playBgm({ name: t.fileName, pan: t.pan, pitch: t.pitch, volume: t.volume });
        }
        if (e.bgs) {
            const t = EventManager.bgs_DB[e.bgs.id];
            AudioManager.playBgs({ name: t.fileName, pan: t.pan, pitch: t.pitch, volume: t.volume });
        }
    }),
    (EventManager.tempVariable = function (e, t) {
        let n = EventManager.tempVariables[e];
        if (t) for (let e = 0, a = t.length; e < a; e++) n = n[t[e]];
        return n;
    }),
    (EventManager.variable = function (e, t) {
        let n = EventManager.getVariables()[EventManager.variableIDs[e]];
        if (t) for (let e = 0, a = t.length; e < a; e++) n = n[t[e]];
        return n;
    }),
    (EventManager.getSaveAudioInfos = function () {
        return $save.eventManager.audioInfos || ($save.eventManager.audioInfos = {}), $save.eventManager.audioInfos;
    }),
    (EventManager.getVariables = function () {
        return $save.eventManager.variables;
    }),
    (EventManager.repraceCommands = function (e, t) {
        let n = e.split(/｛|｝|{|}/);
        if (n.length > 1) {
            e = "";
            for (let t = 0, a = n.length; t < a; t++)
                if (t % 2 == 1) {
                    const a = n[t].split(/:|：/);
                    switch (a[0]) {
                        case "変数":
                            e += EventManager.variable(a[1], a.slice(2));
                            break;
                        case "一時変数":
                            e += EventManager.tempVariable(a[1], a.slice(2));
                            break;
                        case "完了イベント":
                            $save.eventManager.completedEvents ? (e += $save.eventManager.completedEvents[a[1]] ? "true" : "false") : (e += "｛" + n[t] + "｝");
                            break;
                        default:
                            e += "｛" + n[t] + "｝";
                    }
                } else e += n[t];
        }
        if (((n = e.split(/＄|\$/)), n.length > 1)) {
            e = "";
            for (let t = 0, a = n.length; t < a; t++)
                if (t % 2 == 1) {
                    const a = n[t].split(/:|：/);
                    e += EventManager.variable(a[0], a.slice(1));
                } else e += n[t];
        }
        if (((n = e.split(/＃|#/)), n.length > 1)) {
            e = "";
            for (let t = 0, a = n.length; t < a; t++)
                if (t % 2 == 1) {
                    const a = n[t].split(/:|：/);
                    e += EventManager.tempVariable(a[0], a.slice(1));
                } else e += n[t];
        }
        if (EventManager.isSaveCompletedEvents && ((n = e.split(/＠|@/)), n.length > 1)) {
            e = "";
            for (let t = 0, a = n.length; t < a; t++) t % 2 == 1 && $save.eventManager.completedEvents ? (e += $save.eventManager.completedEvents[n[t]] ? "true" : "false") : (e += n[t]);
        }
        return t ? JSON.parse(e.replace(/'/g, '"')) : e;
    }),
    (EventManager.isMessageCommand = function (e) {
        let t = "^◆|^//";
        for (let e in EventManager.originalCommands) t += "|^" + e;
        return "" !== e && !new RegExp(t).test(e);
    }),
    (EventManager.buildEvent = function (e) {
        const t = [],
            n = { eventList: e, i: 1, indent: 0 };
        for (let a = e.length; n.i < a; n.i++) {
            const i = e[n.i][n.indent];
            if ("" !== i) {
                let e = null;
                for (let a in EventManager.originalCommands)
                    if (new RegExp("^" + a).test(i)) {
                        t.push(EventManager.originalCommands[a](n, i)), (e = !0);
                        break;
                    }
                if (e);
                else if (/^◆/.test(i)) {
                    const e = i.slice(1);
                    switch (!0) {
                        case /^選択肢/.test(e):
                            t.push(EventManager.selectEvent(n));
                            break;
                        case /^条件分岐/.test(e):
                            t.push(EventManager.ifEvent(n));
                            break;
                        case /^イベント/.test(e): {
                            const n = e.split(/】【|【|】/),
                                a = [];
                            for (let e = 0, t = n.length; e < t; e++) a[e] = n[e].split("｜").slice(-1)[0];
                            t.push(EventManager.buildEvent(EventManager.eventDB[a[1]]));
                            break;
                        }
                        case /^フェードアウト/.test(e):
                            t.push(EventManager.fadeOutEvent(n));
                            break;
                        case /^フェードイン/.test(e):
                            t.push(EventManager.fadeInEvent(n));
                            break;
                        case /^ウェイト/.test(e):
                            t.push(EventManager.waitEvent(n));
                            break;
                        case /^入力ウェイト/.test(e):
                            t.push(EventManager.inputWaitEvent(n));
                            break;
                        case /^ＢＧＭ/.test(e):
                            t.push(EventManager.bgmEvent(n));
                            break;
                        case /^ＢＧＳ/.test(e):
                            t.push(EventManager.bgsEvent(n));
                            break;
                        case /^ＭＥ/.test(e):
                            t.push(EventManager.meEvent(n));
                            break;
                        case /^ＳＥ/.test(e):
                            t.push(EventManager.seEvent(n));
                            break;
                        case /^変数/.test(e):
                            t.push(EventManager.variableEvent(n));
                            break;
                        case /^一時変数/.test(e):
                            t.push(EventManager.tempVariableEvent(n));
                            break;
                        case /^完了イベント/.test(e):
                            t.push(EventManager.completeEvent(n));
                            break;
                        case /^ＵＩ/.test(e):
                            t.push(EventManager.UI_Event(n));
                            break;
                        default:
                            t.push(EventManager.scriptEvent(n));
                    }
                } else /^\/\//.test(i) || t.push(EventManager.messageEvent(n));
                n.i >= a - 1 && t.push(EventManager.messageDeleteEvent());
            } else t.push(EventManager.messageDeleteEvent());
        }
        if (EventManager.isSaveCompletedEvents) {
            if (!EventManager.checkedCompleteEventsData && $save.eventManager.completedEvents) {
                for (let e in $save.eventManager.completedEvents) EventManager.eventDB[e] || delete $save.eventManager.completedEvents[e];
                EventManager.checkedCompleteEventsData = !0;
            }
            $save.eventManager.completedEvents || ($save.eventManager.completedEvents = {}),
                t.push(
                    (e) =>
                        new Promise((e) => {
                            ($save.eventManager.completedEvents[n.eventList[0].eventName] = !0), e();
                        })
                );
        }
        return function (e) {
            return new Promise((e, n) => {
                PD_Promise.runArray(t)
                    .then((t) => {
                        e(t);
                    })
                    .catch((e) => {
                        n(e);
                    });
            });
        };
    }),
    (EventManager.messageNameBG_filePath = ""),
    (EventManager.messageNameTextArea_UIName = ""),
    (EventManager.openAnime_messageNameBG_filePath = ["", ""]),
    (EventManager.closeAnime_messageNameBG_filePath = ["", ""]),
    (EventManager.messageNameBG_openFunc = null),
    (EventManager.messageNameBG_drawFunc = null),
    (EventManager.messageNameBG_closeFunc = null),
    (EventManager.messageNameBG_FontColor = null),
    (EventManager.messageNameBG_FontOutlineWidth = 5),
    (EventManager.messageNameBG_FontOutlineColor = null),
    (EventManager.messageNameBG_FontFamilyName = null),
    (EventManager.messageNameBG_FontBold = !1),
    (EventManager.messageNameBG_FontItalic = !1),
    (EventManager.messageNameBG_Allign = "left"),
    (EventManager.messageNameBG_isEnableStandIMG = !1),
    (EventManager.messageNameBG_parentUIName_StandIMG = "lower"),
    (EventManager.messageBG_filePath = ""),
    (EventManager.messageTextArea_UIName = ""),
    (EventManager.messageInputArea_filePath = ""),
    (EventManager.messageStopPropagation_filePath = ""),
    (EventManager.openAnime_messageBG_filePath = ["", ""]),
    (EventManager.closeAnime_messageBG_filePath = ["", ""]),
    (EventManager.message_charAnime_filePath = ["", ""]),
    (EventManager.messageReadyFuncs = []),
    (EventManager.messageReadyFuncs_sync = []),
    (EventManager.messageOpenFuncs = []),
    (EventManager.messageOpenFuncs_sync = []),
    (EventManager.messageCloseFuncs = []),
    (EventManager.messageCloseFuncs_sync = []),
    (EventManager.messageCharCommands = {}),
    (EventManager.messageRowLength = 3),
    (EventManager.messageFontColor = null),
    (EventManager.messageFontOutlineWidth = 5),
    (EventManager.messageFontOutlineColor = null),
    (EventManager.messageFontFamilyName = null),
    (EventManager.messageFontBold = !1),
    (EventManager.messageFontItalic = !1),
    (EventManager.messageSE_drawChar_filePath = ""),
    (EventManager.messageSE_PageNext_filePath = ""),
    (EventManager.messageFontSize = 0),
    (EventManager.messageCommandFontColor = null),
    (EventManager.isMessageSkip = !1),
    (EventManager.messageReady = !1),
    (EventManager.messageClosing = !1),
    (EventManager.isRunning_messageReadyFunc = !1),
    (EventManager.messageEvent = function (e) {
        let t = e.eventList,
            n = e.i,
            a = e.indent;
        return function (e) {
            return new Promise((e) => {
                const i = PD_Translation.getData(t[n][a], "キャラクター名");
                if (void 0 !== i) {
                    let e = PD_Translation.translation(i);
                    e = e ? e[0] : "";
                    const r = e.split(/｛|｝|{|}/g);
                    let s = "";
                    const o = [];
                    for (let e = 0, t = r.length; e < t; e++)
                        if (e % 2 == 0) s += r[e];
                        else {
                            const t = r[e].split("：");
                            "かな" === t[0] && (o[s.length - 1] = t[1]);
                        }
                    const l = function (e) {
                        if ((EventManager.messageNameBG_drawFunc && EventManager.messageNameBG_drawFunc(t, n, a), EventManager.messageNameBG_filePath)) {
                            const t = e.height,
                                n = t / 4,
                                a = t - n,
                                i = [...s];
                            let r = 0;
                            if ("left" !== EventManager.messageNameBG_Allign) for (let e = 0, t = i.length; e < t; e++) r += Math.round((a * PD_String.charType(i[e])) / 2) + EventManager.messageFontOutlineWidth;
                            "center" === EventManager.messageNameBG_Allign ? (r = Math.round((e.width - r) / 2)) : "right" === EventManager.messageNameBG_Allign && (r = e.width - r);
                            let l = 0;
                            for (let t = 0, s = i.length; t < s; t++) {
                                const s = i[t],
                                    h = Math.round((a * PD_String.charType(s)) / 2) + EventManager.messageFontOutlineWidth;
                                o[t] &&
                                    e.drawTextEX(
                                        o[t],
                                        l + r,
                                        0,
                                        h,
                                        n,
                                        "center",
                                        n,
                                        EventManager.messageNameBG_FontColor,
                                        EventManager.messageNameBG_FontOutlineWidth,
                                        EventManager.messageNameBG_FontOutlineColor,
                                        EventManager.messageNameBG_FontFamilyName,
                                        EventManager.messageNameBG_FontBold,
                                        EventManager.messageNameBG_FontItalic
                                    ),
                                    e.drawTextEX(
                                        s,
                                        l + r,
                                        n,
                                        h,
                                        a,
                                        "center",
                                        a,
                                        EventManager.messageNameBG_FontColor,
                                        EventManager.messageNameBG_FontOutlineWidth,
                                        EventManager.messageNameBG_FontOutlineColor,
                                        EventManager.messageNameBG_FontFamilyName,
                                        EventManager.messageNameBG_FontBold,
                                        EventManager.messageNameBG_FontItalic
                                    ),
                                    (l += h);
                            }
                        }
                    };
                    if (PD_UIManager.list[EventManager.messageNameBG_filePath.split("/").slice(-1)]) {
                        const e = PD_UIManager.list.KGSystem_MessageNameText;
                        e.clear(), l(e);
                    } else {
                        if ((EventManager.messageNameBG_openFunc && EventManager.messageNameBG_openFunc(t, n, a), EventManager.messageNameBG_filePath)) {
                            const e = PD_UIManager.loadDatabase(EventManager.messageNameBG_filePath, PD_UIManager.base.upper),
                                t = PD_UIManager.list[EventManager.messageNameTextArea_UIName],
                                n = t.addUI("KGSystem_MessageNameText", t.width, t.height);
                            (n.anchor = [t.anchorX, t.anchorY]),
                                PD_UIManager.Animation_Database[EventManager.openAnime_messageNameBG_filePath[0]]
                                    ? (e.setAnimation(EventManager.openAnime_messageNameBG_filePath[0], EventManager.openAnime_messageNameBG_filePath[1]),
                                      e.animeFunction(() => {
                                          l(n);
                                      }),
                                      e.playAnimation())
                                    : l(n);
                        } else l();
                        EventManager.messageCloseFuncs_sync.push(
                            () =>
                                new Promise((e) => {
                                    if ((EventManager.messageNameBG_closeFunc && EventManager.messageNameBG_closeFunc(t, n, a), EventManager.messageNameBG_filePath)) {
                                        const t = PD_UIManager.list[EventManager.messageNameBG_filePath.split("/").slice(-1)];
                                        PD_UIManager.list[EventManager.messageNameTextArea_UIName].delete(),
                                            PD_UIManager.Animation_Database[EventManager.closeAnime_messageNameBG_filePath[0]]
                                                ? (t.setAnimation(EventManager.closeAnime_messageNameBG_filePath[0], EventManager.closeAnime_messageNameBG_filePath[1]),
                                                  t.animeFunction(() => {
                                                      t.delete(), e();
                                                  }),
                                                  t.playAnimation())
                                                : (t.delete(), e());
                                    } else e();
                                })
                        );
                    }
                }
                (EventManager.isMessageSkip = !1), (EventManager.messageReady = !1), (EventManager.isRunning_messageReadyFunc = !1);
                let r = PD_Translation.translation(t[n][a]);
                r || (r = [t[n][a]]);
                for (let e = 0, t = r.length; e < t; e++) r[e] = EventManager.repraceCommands(r[e]);
                const s = function () {
                        return new Promise((e) => {
                            const t = PD_UIManager.list[EventManager.messageTextArea_UIName];
                            PD_UIManager.list.KGSystem_messageTextBase && PD_UIManager.list.KGSystem_messageTextBase.delete();
                            const n = t.addUI("KGSystem_messageTextBase");
                            n.move(-t.width * t.anchorX, -t.height * t.anchorY);
                            const a = () => {
                                    if (!EventManager.messageClosing)
                                        if (EventManager.messageReady)
                                            (EventManager.messageCommandFontColor = null),
                                                EventManager.messageSE_PageNext_filePath && AudioManager.playSe({ name: EventManager.messageSE_PageNext_filePath, pan: 0, pitch: 100, volume: 90 }),
                                                e();
                                        else if (!EventManager.isRunning_messageReadyFunc) {
                                            for (let e = 0, t = r.length; e < t; e++) {
                                                const t = r[e].split("◆");
                                                let n = "";
                                                for (let e = 0, a = t.length; e < a; e++) e % 2 == 0 && (n += t[e]);
                                                for (let t = [...n].length - 1; t >= 0; t--) {
                                                    const n = PD_UIManager.list["KGSystem_messageText_" + e + "_" + t];
                                                    if (n) {
                                                        n.skipAnimation();
                                                        break;
                                                    }
                                                }
                                            }
                                            EventManager.isMessageSkip = !0;
                                        }
                                },
                                i = PD_UIManager.list[EventManager.messageInputArea_filePath.split("/").slice(-1)];
                            i.removeEvent("repeat"), i.addEvent("repeat", "repeat", a);
                            const s = function (e, a, i, r, s) {
                                    return (o) =>
                                        new Promise((l) => {
                                            o || (o = { charX: 0, rowIndex: i });
                                            const h = t.height / EventManager.messageRowLength,
                                                c = h / 4,
                                                u = h - c,
                                                p = Math.round((u * PD_String.charType(e)) / 2) + EventManager.messageFontOutlineWidth,
                                                g = o.rowIndex === i ? o.charX : 0,
                                                _ = n.addUI("KGSystem_messageText_" + i + "_" + r, p, h);
                                            _.drawTextEX(
                                                e,
                                                0,
                                                c,
                                                p,
                                                u,
                                                "center",
                                                u,
                                                EventManager.messageCommandFontColor ? EventManager.messageCommandFontColor : EventManager.messageFontColor,
                                                EventManager.messageFontOutlineWidth,
                                                EventManager.messageFontOutlineColor,
                                                EventManager.messageFontFamilyName,
                                                EventManager.messageFontBold,
                                                EventManager.messageFontItalic
                                            ),
                                                a &&
                                                    _.drawTextEX(
                                                        a,
                                                        0,
                                                        0,
                                                        p,
                                                        c,
                                                        "center",
                                                        c,
                                                        EventManager.messageCommandFontColor ? EventManager.messageCommandFontColor : EventManager.messageFontColor,
                                                        EventManager.messageFontOutlineWidth,
                                                        EventManager.messageFontOutlineColor,
                                                        EventManager.messageFontFamilyName,
                                                        EventManager.messageFontBold,
                                                        EventManager.messageFontItalic
                                                    ),
                                                (_.anchor = [0.5, 0.64]);
                                            let d = Math.round(p / 2 + g);
                                            d % 2 == 1 && (d += 1);
                                            let f = Math.round(0.64 * h + h * i);
                                            f % 2 == 1 && (f += 1), _.move(d, f), (EventManager.messageFontSize = u);
                                            const m = () => {
                                                const e = { charX: g + p - EventManager.messageFontOutlineWidth / 2, rowIndex: i };
                                                s
                                                    ? s().then(() => {
                                                          l(e);
                                                      })
                                                    : l(e);
                                            };
                                            EventManager.isMessageSkip
                                                ? setTimeout(() => {
                                                      m();
                                                  }, 1)
                                                : EventManager.message_charAnime_filePath[0]
                                                ? (EventManager.messageSE_drawChar_filePath && AudioManager.playSe({ name: EventManager.messageSE_drawChar_filePath, pan: 0, pitch: 100, volume: 90 }),
                                                  _.setAnimation(EventManager.message_charAnime_filePath[0], EventManager.message_charAnime_filePath[1]),
                                                  _.animeFunction(m),
                                                  _.playAnimation())
                                                : m();
                                        });
                                },
                                o = [];
                            for (let e = 0, t = r.length; e < t; e++) {
                                const t = r[e].split(/｛|｝|{|}/g);
                                let l = "";
                                const h = [],
                                    c = [];
                                for (let e = 0, r = t.length; e < r; e++)
                                    if (e % 2 == 0) l += t[e];
                                    else {
                                        let r = () =>
                                            new Promise((e) => {
                                                e();
                                            });
                                        const s = t[e].split("：");
                                        switch (s[0]) {
                                            case "かな":
                                                (h[l.length - 1] = s[1]),
                                                    (r = () =>
                                                        new Promise((e) => {
                                                            e();
                                                        }));
                                                break;
                                            case "色":
                                                r = () =>
                                                    new Promise((e) => {
                                                        (EventManager.messageCommandFontColor = s[1]), e();
                                                    });
                                                break;
                                            case "停止":
                                                r = () =>
                                                    new Promise((e) => {
                                                        i.removeEvent("repeat"),
                                                            i.addEvent("repeat", "repeat", () => {
                                                                (EventManager.isMessageSkip = !1), i.removeEvent("repeat"), i.addEvent("repeat", "repeat", a), e();
                                                            });
                                                    });
                                                break;
                                            case "待機":
                                                r = () =>
                                                    new Promise((e) => {
                                                        if (EventManager.isMessageSkip) e();
                                                        else {
                                                            const t = s[1] ? Number(s[1]) : 60,
                                                                a = n.addUI("KGSystem_messageWaitUI");
                                                            a.animeWait(t),
                                                                a.animeFunction(() => {
                                                                    e();
                                                                }),
                                                                a.playAnimation();
                                                        }
                                                    });
                                                break;
                                            default:
                                                EventManager.messageCharCommands[s[0]] && (r = EventManager.messageCharCommands[s[0]]);
                                        }
                                        c.push({ charIndex: l.length - 1, resolveFunc: r });
                                    }
                                const u = [...l];
                                for (let t = -1, n = u.length; t < n; t++) {
                                    const n = c[0] && c[0].charIndex === t ? c.splice(0, 1)[0].resolveFunc : null;
                                    -1 === t ? o.push(n) : o.push(s(u[t], h[t], e, t, n));
                                }
                            }
                            PD_Promise.runArray(o).then(() => {
                                (() => {
                                    const t = [];
                                    EventManager.messageReadyFuncs.length > 0 && t.push(() => PD_Promise.runArray(EventManager.messageReadyFuncs));
                                    for (let e = 0, n = EventManager.messageReadyFuncs_sync, a = n.length; e < a; e++) t.push(n[e]);
                                    t.length > 0
                                        ? ((EventManager.isRunning_messageReadyFunc = !0),
                                          PD_Promise.all(t).then(() => {
                                              (EventManager.messageReadyFuncs = []), (EventManager.messageReadyFuncs_sync = []), (EventManager.messageReady = !0), EventManager.messageClosing && e();
                                          }))
                                        : (EventManager.messageReady = !0);
                                })();
                            });
                        });
                    },
                    o = [
                        function () {
                            return new Promise((e) => {
                                const i = PD_Translation.getData(t[n][a], "表情ID");
                                if ((EventManager.updateStandIMG(i), PD_UIManager.list.KGSystem_messageBase))
                                    s().then(() => {
                                        e();
                                    });
                                else {
                                    const t = function () {
                                        EventManager.messageClosing = !1;
                                        const t = PD_UIManager.base.upper.addUI("KGSystem_messageBase");
                                        EventManager.messageStopPropagation_filePath && PD_UIManager.loadDatabase(EventManager.messageStopPropagation_filePath, t), PD_UIManager.loadDatabase(EventManager.messageInputArea_filePath, t);
                                        const n = PD_UIManager.loadDatabase(EventManager.messageBG_filePath, t);
                                        PD_UIManager.Animation_Database[EventManager.openAnime_messageBG_filePath[0]]
                                            ? (n.setAnimation(EventManager.openAnime_messageBG_filePath[0], EventManager.openAnime_messageBG_filePath[1]),
                                              n.animeFunction(() => {
                                                  s().then(() => {
                                                      e();
                                                  });
                                              }),
                                              n.playAnimation())
                                            : s().then(() => {
                                                  e();
                                              });
                                    };
                                    PD_UIManager.list.KGSystem_messageBase
                                        ? EventManager.messageDeleteEvent()().then(() => {
                                              t();
                                          })
                                        : t();
                                }
                            });
                        },
                    ];
                EventManager.messageOpenFuncs.length > 0 && o.push(() => PD_Promise.runArray(EventManager.messageOpenFuncs));
                for (let e = 0, t = EventManager.messageOpenFuncs_sync, n = t.length; e < n; e++) o.push(t[e]);
                PD_Promise.all(o).then(() => {
                    (EventManager.messageOpenFuncs = []), (EventManager.messageOpenFuncs_sync = []), e({ type: "message", messages: r });
                });
            });
        };
    }),
    (EventManager.messageDeleteEvent = function () {
        return function (e) {
            return new Promise((e) => {
                if (EventManager.messageClosing) e();
                else {
                    EventManager.messageClosing = !0;
                    const t = () =>
                            new Promise((e) => {
                                const t = PD_UIManager.list.KGSystem_messageBase;
                                if (t) {
                                    PD_UIManager.list.KGSystem_messageTextBase.delete();
                                    const n = PD_UIManager.list[EventManager.messageBG_filePath.split("/").slice(-1)[0]];
                                    EventManager.closeAnime_messageBG_filePath[0]
                                        ? (n.setAnimation(EventManager.closeAnime_messageBG_filePath[0], EventManager.closeAnime_messageBG_filePath[1]),
                                          n.animeFunction(() => {
                                              t.delete(), e();
                                          }),
                                          n.playAnimation())
                                        : (t.delete(), e());
                                } else e();
                            }),
                        n = [t];
                    EventManager.messageCloseFuncs.length > 0 && n.push(() => PD_Promise.runArray(EventManager.messageCloseFuncs));
                    for (let e = 0, t = EventManager.messageCloseFuncs_sync, a = t.length; e < a; e++) n.push(t[e]);
                    n.push(
                        () =>
                            new Promise((e) => {
                                EventManager.deleteStandIMG(), e();
                            })
                    ),
                        PD_Promise.all(n).then(() => {
                            (EventManager.messageCloseFuncs = []), (EventManager.messageCloseFuncs_sync = []), e();
                        });
                }
            });
        };
    }),
    (EventManager.updateStandIMG = function (e) {
        if (EventManager.messageNameBG_isEnableStandIMG && e) {
            const t = isNaN(e) ? Number(PD_Util.DoubleToSingle(e)) : e,
                n = EventManager.standIMG_DB[t].filePaths,
                a = "EventManager_StandIMG_" + t;
            if (t !== EventManager.viewStandIMG_ID) {
                let e;
                PD_UIManager.list[a] && PD_UIManager.list[a].delete();
                const i = EventManager.messageNameBG_parentUIName_StandIMG;
                switch (i) {
                    case "lower":
                        e = PD_UIManager.base.lower;
                        break;
                    case "middle":
                        e = PD_UIManager.base.middle;
                        break;
                    case "upper":
                        e = PD_UIManager.base.upper;
                        break;
                    default:
                        e = PD_UIManager.list[i];
                }
                const r = e.addUI(a);
                for (let e = 0, t = n.length; e < t; e++) PD_UIManager.loadDatabase(n[e], r);
                EventManager.viewStandIMG_ID = t;
            }
        }
    }),
    (EventManager.deleteStandIMG = function () {
        if (EventManager.messageNameBG_isEnableStandIMG) {
            const e = PD_UIManager.list["EventManager_StandIMG_" + EventManager.viewStandIMG_ID];
            e && e.delete(), (EventManager.viewStandIMG_ID = 0);
        }
    }),
    (EventManager.selectBG_filePath = "System/KGSystem_SelectBG"),
    (EventManager.selectTextArea_UIName = "KGSystem_SelectTextArea"),
    (EventManager.openAnime_selectBG_filePath = ["", ""]),
    (EventManager.closeAnime_selectBG_filePath = ["", ""]),
    (EventManager.selectAllign = "center"),
    (EventManager.selectSpeceY = 10),
    (EventManager.selectSE_PageNext_filePath = ""),
    (EventManager.selectClosing = !1),
    (EventManager.selectEvent = function (e) {
        const t = [],
            n = e.eventList,
            a = n.length;
        let i = "";
        for (; e.i < a; ) {
            const a = n[e.i][e.indent];
            if (/^◆/.test(a)) {
                const e = a.slice(1);
                if (/^選択肢の終了/.test(e)) break;
                if (/^選択肢/.test(e)) {
                    const e = a.split(/】【|【|】/),
                        n = [];
                    for (let t = 0, a = e.length; t < a; t++) n[t] = e[t].split("｜").slice(-1)[0];
                    (i = n[1]), t.push({ selectText: i, eventList: [] });
                }
            }
            t[t.length - 1].eventList.push(n[e.i].slice(e.indent + 1)), e.i++;
        }
        return function (e) {
            return new Promise((e) => {
                EventManager.selectClosing = !1;
                const n = function (e) {
                        const t = PD_UIManager.list[e + ":" + EventManager.selectTextArea_UIName];
                        PD_UIManager.list[e + ":KGSystem_selectTextBase"] && PD_UIManager.list[e + ":KGSystem_selectTextBase"].delete();
                        const n = t.addUI(e + ":KGSystem_selectTextBase", t.width, t.height);
                        n.anchor = [0.5, 0.5];
                        const a = e.split(/｛|｝|{|}/g);
                        let i = "";
                        const r = [];
                        for (let e = 0, t = a.length; e < t; e++)
                            if (e % 2 == 0) i += a[e];
                            else {
                                const t = a[e].split("：");
                                "かな" === t[0] && (r[i.length - 1] = t[1]);
                            }
                        const s = n.height,
                            o = s / 4,
                            l = s - o,
                            h = [...i];
                        let c = 0;
                        if ("left" !== EventManager.selectAllign) for (let e = 0, t = h.length; e < t; e++) c += Math.round((l * PD_String.charType(h[e])) / 2) + EventManager.messageFontOutlineWidth;
                        "center" === EventManager.selectAllign ? (c = Math.round((n.width - c) / 2)) : "right" === EventManager.selectAllign && (c = n.width - c);
                        let u = 0;
                        for (let e = 0, t = h.length; e < t; e++) {
                            const t = h[e],
                                a = Math.round((l * PD_String.charType(t)) / 2) + EventManager.messageFontOutlineWidth;
                            r[e] &&
                                n.drawTextEX(
                                    r[e],
                                    u + c,
                                    0,
                                    a,
                                    o,
                                    "center",
                                    o,
                                    EventManager.messageFontColor,
                                    EventManager.messageFontOutlineWidth,
                                    EventManager.messageFontOutlineColor,
                                    EventManager.messageFontFamilyName,
                                    EventManager.messageFontBold,
                                    EventManager.messageFontItalic
                                ),
                                n.drawTextEX(
                                    t,
                                    u + c,
                                    o,
                                    a,
                                    l,
                                    "center",
                                    l,
                                    EventManager.messageFontColor,
                                    EventManager.messageFontOutlineWidth,
                                    EventManager.messageFontOutlineColor,
                                    EventManager.messageFontFamilyName,
                                    EventManager.messageFontBold,
                                    EventManager.messageFontItalic
                                ),
                                (u += a);
                        }
                    },
                    a = function () {
                        const a = PD_UIManager.base.upper.addUI("KGSystem_selectBase", PD_UIManager.baseScreenWidth, PD_UIManager.baseScreenHeight);
                        (a.rectButton = !0), (a.isStopPropagation = !0);
                        for (let i = 0, r = t.length; i < r; i++) {
                            const s = t[i].selectText,
                                o = PD_UIManager.loadDatabase(EventManager.selectBG_filePath, a, s);
                            (o.y -= (r - i - 1) * o.height - EventManager.selectSpeceY * i),
                                o.addEvent("trigger", "trigger", () => {
                                    EventManager.selectClosing ||
                                        (EventManager.selectSE_PageNext_filePath && AudioManager.playSe({ name: EventManager.selectSE_PageNext_filePath, pan: 0, pitch: 100, volume: 90 }),
                                        EventManager.selectDeleteEvent(t)().then(() => {
                                            EventManager.buildEvent(t[i].eventList)().then(() => {
                                                e({ type: "select", selectEvents: t });
                                            });
                                        }));
                                }),
                                PD_UIManager.Animation_Database[EventManager.openAnime_selectBG_filePath[0]]
                                    ? (o.setAnimation(EventManager.openAnime_selectBG_filePath[0], EventManager.openAnime_selectBG_filePath[1]),
                                      o.animeFunction(() => {
                                          n(s);
                                      }),
                                      o.playAnimation())
                                    : n(s);
                        }
                    };
                PD_UIManager.list.KGSystem_selectBase
                    ? EventManager.selectDeleteEvent(t)().then(() => {
                          a();
                      })
                    : a();
            });
        };
    }),
    (EventManager.selectDeleteEvent = function (e) {
        return function (t) {
            return new Promise((t) => {
                EventManager.selectClosing = !0;
                const n = PD_UIManager.list.KGSystem_selectBase;
                if (n)
                    for (let a = 0, i = e.length; a < i; a++) {
                        const i = e[a].selectText;
                        PD_UIManager.list[i + ":KGSystem_selectTextBase"].delete();
                        const r = PD_UIManager.list[i + ":" + EventManager.selectBG_filePath.split("/").slice(-1)[0]];
                        PD_UIManager.Animation_Database[EventManager.closeAnime_selectBG_filePath[0]]
                            ? (r.setAnimation(EventManager.closeAnime_selectBG_filePath[0], EventManager.closeAnime_selectBG_filePath[1]),
                              r.animeFunction(() => {
                                  n.delete(), t();
                              }),
                              r.playAnimation())
                            : (n.delete(), t());
                    }
                else t();
            });
        };
    }),
    (EventManager.ifEvent = function (e) {
        const t = [],
            n = e.eventList,
            a = n.length;
        for (; e.i < a; ) {
            const a = n[e.i][e.indent];
            if (/^◆/.test(a)) {
                const e = a.slice(1);
                if (/^条件分岐の終了/.test(e)) break;
                if (/^条件分岐/.test(e)) {
                    const e = a.split(/】【|【|】/),
                        n = [];
                    for (let t = 0, a = e.length; t < a; t++) n[t] = e[t].split("｜").slice(-1)[0];
                    t.push({ ifText: n[1], eventList: [] });
                }
            }
            t[t.length - 1].eventList.push(n[e.i].slice(e.indent + 1)), e.i++;
        }
        return function (e) {
            return new Promise((e) => {
                let n = !1;
                for (let a = 0, i = t.length; a < i; a++) {
                    const i = EventManager.repraceCommands(t[a].ifText);
                    if ("" === i || PD_Util.strToReturnFunc(i)()) {
                        (n = !0),
                            EventManager.buildEvent(t[a].eventList)().then(() => {
                                e({ type: "if", ifEvents: t });
                            });
                        break;
                    }
                }
                n || e({ type: "if", ifEvents: t });
            });
        };
    }),
    (EventManager.scriptEvent = function (e) {
        const t = [],
            n = e.eventList,
            a = n.length;
        for (; e.i < a; ) {
            const a = n[e.i][e.indent].replace(/【|スクリプト｜|】/g, "");
            if (!/^◆/.test(a)) break;
            t.push(a.slice(1)), e.i++;
        }
        const i = t.join("\n");
        return function (e) {
            return new Promise((e) => {
                PD_Util.strToFunc(EventManager.repraceCommands(i))(), e({ type: "script", scriptList: t });
            });
        };
    }),
    (EventManager.fadeOutEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        const a = n[1] ? Number(PD_Util.DoubleToSingle(n[1])) : 60,
            i = n[2] ? n[2] : "black";
        return function (e) {
            return new Promise((e) => {
                if (PD_UIManager.list.KGSystem_fadeOutUI) e({ type: "fadeOut", fadeColor: i, waitFrame: a });
                else {
                    const t = PD_UIManager.base.middle.addUI("KGSystem_fadeOutUI", PD_UIManager.baseScreenWidth, PD_UIManager.baseScreenHeight);
                    (t.rectButton = !0),
                        (t.isStopPropagation = !0),
                        t.fillAll(i),
                        (t.opacity = 0),
                        t.animeOpacity(255, a, !0),
                        t.animeFunction(() => {
                            e({ type: "fadeOut", fadeColor: i, waitFrame: a });
                        }),
                        t.playAnimation();
                }
            });
        };
    }),
    (EventManager.fadeInEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        const a = n[1] ? Number(PD_Util.DoubleToSingle(n[1])) : 60;
        return function (e) {
            return new Promise((e) => {
                const t = PD_UIManager.list.KGSystem_fadeOutUI;
                t
                    ? (t.deleteAnimation(),
                      (t.opacity = 255),
                      t.animeOpacity(0, a, !0),
                      t.animeFunction(() => {
                          t.delete(), e({ type: "fadeIn", waitFrame: a });
                      }),
                      t.playAnimation())
                    : e({ type: "fadeIn", waitFrame: a });
            });
        };
    }),
    (EventManager.waitEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        return function (e) {
            return new Promise((e) => {
                const t = PD_UIManager.base.upper.addUI("KGSystem_waitUI", PD_UIManager.baseScreenWidth, PD_UIManager.baseScreenHeight);
                (t.rectButton = !0), (t.isStopPropagation = !0);
                const a = n[1] ? Number(PD_Util.DoubleToSingle(n[1])) : 60;
                t.animeWait(a),
                    t.animeFunction(() => {
                        t.delete(), e({ type: "wait", waitParam: a });
                    }),
                    t.playAnimation();
            });
        };
    }),
    (EventManager.inputWaitEvent = function (e) {
        return function (t) {
            return new Promise((t) => {
                const n = PD_UIManager.base.upper.addUI("KGSystem_waitUI", PD_UIManager.baseScreenWidth, PD_UIManager.baseScreenHeight);
                (n.rectButton = !0),
                    (n.isStopPropagation = !0),
                    n.addEvent("trigger", "trigger", () => {
                        n.delete(), t({ type: "inputWait", eventData: e });
                    });
            });
        };
    }),
    (EventManager._savedBgm = null),
    (EventManager.bgmEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        return function (e) {
            return new Promise((e) => {
                switch (t[0]) {
                    case "ＢＧＭの再生：": {
                        const e = n[1],
                            t = n[2] ? Number(n[2]) : 0,
                            a = n[3] ? Number(n[3]) : 100,
                            i = n[4] ? Number(n[4]) : 90;
                        (EventManager.getSaveAudioInfos().bgm = { name: e, pan: t, pitch: a, volume: i }), AudioManager.playBgm({ name: e, pan: t, pitch: a, volume: i });
                        break;
                    }
                    case "ＢＧＭの停止":
                        delete EventManager.getSaveAudioInfos().bgm, AudioManager.stopBgm();
                        break;
                    case "ＢＧＭのフェードアウト：": {
                        delete EventManager.getSaveAudioInfos().bgm;
                        const e = n[1] ? Number(n[1]) / 60 : 1;
                        AudioManager.fadeOutBgm(e);
                        break;
                    }
                    case "ＢＧＭの保存":
                        EventManager.saveBgm();
                        break;
                    case "ＢＧＭの再開":
                        EventManager.replayBgm();
                }
                e({ type: "bgm", paramStr: t });
            });
        };
    }),
    (EventManager.saveBgm = function () {
        EventManager._savedBgm = AudioManager.saveBgm();
    }),
    (EventManager.replayBgm = function () {
        EventManager._savedBgm && AudioManager.replayBgm(EventManager._savedBgm);
    }),
    (EventManager.bgsEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        return function (e) {
            return new Promise((e) => {
                switch (t[0]) {
                    case "ＢＧＳの再生：": {
                        const e = n[1],
                            t = n[2] ? Number(n[2]) : 0,
                            a = n[3] ? Number(n[3]) : 100,
                            i = n[4] ? Number(n[4]) : 90;
                        (EventManager.getSaveAudioInfos().bgs = { name: e, pan: t, pitch: a, volume: i }), AudioManager.playBgs({ name: e, pan: t, pitch: a, volume: i });
                        break;
                    }
                    case "ＢＧＳの停止":
                        delete EventManager.getSaveAudioInfos().bgs, AudioManager.stopBgs();
                        break;
                    case "ＢＧＳのフェードアウト：": {
                        delete EventManager.getSaveAudioInfos().bgs;
                        const e = n[1] ? Number(n[1]) / 60 : 1;
                        AudioManager.fadeOutBgs(e);
                        break;
                    }
                }
                e({ type: "bgs", paramStr: t });
            });
        };
    }),
    (EventManager.meEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        return function (e) {
            return new Promise((e) => {
                switch (t[0]) {
                    case "ＭＥの再生：": {
                        const e = n[1],
                            t = n[2] ? Number(n[2]) : 0,
                            a = n[3] ? Number(n[3]) : 100,
                            i = n[4] ? Number(n[4]) : 90;
                        AudioManager.playMe({ name: e, pan: t, pitch: a, volume: i });
                        break;
                    }
                    case "ＭＥの停止":
                        AudioManager.stopMe();
                        break;
                    case "ＭＥのフェードアウト：": {
                        const e = n[1] ? Number(n[1]) / 60 : 1;
                        AudioManager.fadeOutMe(e);
                        break;
                    }
                }
                e({ type: "me", paramStr: t });
            });
        };
    }),
    (EventManager.seEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        return function (e) {
            return new Promise((e) => {
                switch (t[0]) {
                    case "ＳＥの再生：": {
                        const e = n[1],
                            t = n[2] ? Number(n[2]) : 0,
                            a = n[3] ? Number(n[3]) : 100,
                            i = n[4] ? Number(n[4]) : 90;
                        AudioManager.playSe({ name: e, pan: t, pitch: a, volume: i });
                        break;
                    }
                    case "ＳＥの停止":
                        AudioManager.stopSe();
                }
                e({ type: "se", paramStr: t });
            });
        };
    }),
    (EventManager.variableEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        const a = n[1].split(/:|：/),
            i = n[2],
            r = n[3].replace(/"/g, "'"),
            s = EventManager.variableIDs[a[0]],
            o = a.slice(1);
        let l = "";
        for (let e = 0, t = o.length; e < t; e++) l += '"' + o[e] + '",';
        l = l.slice(0, -1);
        let h = "";
        return (
            (h =
                o.length > 0
                    ? "const properties = [" +
                      l +
                      "]; let variable = EventManager.getVariables()[" +
                      s +
                      "];for (let i = 0, len = properties.length - 1; i < len; i++) { if (!variable[properties[i]]) { variable[properties[i]] = {}; } variable = variable[properties[i]]; }variable[properties[properties.length - 1]]" +
                      i +
                      'EventManager.repraceCommands("' +
                      r +
                      '",true)'
                    : "EventManager.getVariables()[" + s + "]" + i + 'EventManager.repraceCommands("' + r + '",true)'),
            function (e) {
                return new Promise((e) => {
                    PD_Util.strToFunc(h)(), e({ type: "variable", funcStr: h });
                });
            }
        );
    }),
    (EventManager.tempVariableEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        const a = n[1].split(/:|：/),
            i = n[2],
            r = n[3].replace(/"/g, "'"),
            s = a.slice(1);
        let o = "";
        for (let e = 0, t = s.length; e < t; e++) o += '"' + s[e] + '",';
        o = o.slice(0, -1);
        let l = "";
        return (
            (l =
                s.length > 0
                    ? 'if(!EventManager.tempVariables["' +
                      a[0] +
                      '"]) EventManager.tempVariables["' +
                      a[0] +
                      '"] = {};const properties = [' +
                      o +
                      ']; let variable = EventManager.tempVariables["' +
                      a[0] +
                      '"];for (let i = 0, len = properties.length - 1; i < len; i++) { if (!variable[properties[i]]) { variable[properties[i]] = {}; } variable = variable[properties[i]]; }variable[properties[properties.length - 1]]' +
                      i +
                      'EventManager.repraceCommands("' +
                      r +
                      '",true)'
                    : 'EventManager.tempVariables["' + a[0] + '"]' + i + 'EventManager.repraceCommands("' + r + '",true)'),
            function (e) {
                return new Promise((e) => {
                    PD_Util.strToFunc(l)(), e({ type: "tempVariable", funcStr: l });
                });
            }
        );
    }),
    (EventManager.completeEvent = function (e) {
        const t = e.eventList[e.i][e.indent].split(/】【|【|】/),
            n = [];
        for (let e = 0, a = t.length; e < a; e++) n[e] = t[e].split("｜").slice(-1)[0];
        if (EventManager.eventDB[n[1]])
            return function (e) {
                return new Promise((e) => {
                    $save.eventManager.completedEvents || ($save.eventManager.completedEvents = {});
                    const t = "true" === n[2];
                    ($save.eventManager.completedEvents[n[1]] = t), e({ type: "completeEvent", eventName: n[1], value: t });
                });
            };
    }),
    (EventManager.uiCommand_defaultParentUI_Name = "middle"),
    (EventManager._preCreateUI = null),
    (EventManager.UI_Event = function (e) {
        const t = e.eventList[e.i][e.indent].slice(4);
        return function (e) {
            return new Promise((e) => {
                const n = t.split(/：【|】：|】【|【|】|：/),
                    a = [];
                for (let e = 0, t = n.length; e < t; e++) a[e] = n[e].split("｜").slice(-1)[0];
                const i = [[]];
                let r = 0;
                for (let e = 0, t = a.length; e < t; e++)
                    switch (a[e]) {
                        case "アニメ":
                            r++, (i[r] = ["アニメ"]);
                            break;
                        case "再生":
                            r++, (i[r] = ["再生"]);
                            break;
                        case "エフェクト":
                            r++, (i[r] = ["エフェクト"]);
                            break;
                        case "削除":
                            r++, (i[r] = ["削除"]);
                            break;
                        default:
                            i[r].push(a[e]);
                    }
                for (let e = 0, t = i.length; e < t; e++) {
                    const t = i[e];
                    if (t.length > 0)
                        switch (t[0]) {
                            case "アニメ": {
                                const e = t[3] ? PD_UIManager.list[(t[4] ? ":" + t[4] : "") + t[3]] : EventManager._preCreateUI;
                                e.setAnimation(t[1], t[2]), e.playAnimation();
                                break;
                            }
                            case "再生":
                                (t[1] ? PD_UIManager.list[(t[2] ? ":" + t[2] : "") + t[1]] : EventManager._preCreateUI).playAnimation();
                                break;
                            case "エフェクト":
                                (t[2] ? PD_UIManager.list[(t[3] ? ":" + t[3] : "") + t[2]] : EventManager._preCreateUI).playEffect(Number(t[1]));
                                break;
                            case "削除":
                                (t[1] ? PD_UIManager.list[(t[2] ? ":" + t[2] : "") + t[1]] : EventManager._preCreateUI).delete();
                                break;
                            default: {
                                const e = t[2] ? t[2] : EventManager.uiCommand_defaultParentUI_Name;
                                let n = PD_UIManager.base[e];
                                n || (n = PD_UIManager.list[e]), (EventManager._preCreateUI = PD_UIManager.loadDatabase(t[1], n, t[3] ? t[3] : void 0)), EventManager.setEventPage(EventManager._preCreateUI);
                                break;
                            }
                        }
                }
                e({ type: "ui", paramStr: t });
            });
        };
    }),
    (EventManager.touchSE_Name = ""),
    (EventManager.eventPages = {}),
    (EventManager.runningEventPages = {}),
    (EventManager.setEventPage = function (e) {
        const t = PD_Util.orderChildren(e, "children");
        for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e],
                a = n.memo;
            if (a.length > 0) {
                let e = [];
                for (let t = 0, n = a.length; t < n; t++) EventManager.eventDB[a[t]] && e.push(EventManager.eventDB[a[t]]);
                e.length > 0 &&
                    ((n.visible = !1),
                    n.addEvent("trigger", "trigger", () => {
                        if (Object.keys(EventManager.runningEventPages).length > 0) return;
                        const t = [];
                        for (let a = e.length - 1; a >= 0; a--) {
                            const i = e[a][0];
                            if (!i.eventEnableIf || PD_Util.strToReturnFunc(EventManager.repraceCommands(i.eventEnableIf))()) {
                                if ("決定トリガー" === i.eventTrigger) {
                                    EventManager.touchSE_Name && t.push(() => EventManager.runCommand("◆ＳＥ：" + EventManager.touchSE_Name));
                                    const i = JSON.parse(JSON.stringify(e[a]));
                                    i.push(["◆delete EventManager.runningEventPages['" + n.name + "'];"]), (EventManager.runningEventPages[n.name] = !0), EventManager.buildEvent(i)();
                                }
                                break;
                            }
                        }
                    }),
                    (EventManager.eventPages[n.name] = e));
            }
        }
    }),
    (function () {
        "use strict";
        const e = Scene_Original.prototype.createDisplayObjects;
        Scene_Original.prototype.createDisplayObjects = function () {
            e.call(this), (EventManager.eventPages = {}), (EventManager.runningEventPages = {});
        };
        const t = Scene_Original.prototype.terminate;
        Scene_Original.prototype.terminate = function () {
            t.call(this), (EventManager.eventPages = {}), (EventManager.runningEventPages = {});
        };
        const n = Scene_Original.prototype.update;
        Scene_Original.prototype.update = function () {
            n.call(this);
            for (let e in EventManager.eventPages) {
                const t = PD_UIManager.list[e],
                    n = EventManager.eventPages[e];
                if (t)
                    for (let a = n.length - 1; a >= 0; a--) {
                        const i = n[a][0];
                        if (!i.eventEnableIf || PD_Util.strToReturnFunc(EventManager.repraceCommands(i.eventEnableIf))()) {
                            if ((t.visible !== i.eventIsView && (t.visible = i.eventIsView), 0 === Object.keys(EventManager.runningEventPages).length && "自動トリガー" === i.eventTrigger)) {
                                const t = JSON.parse(JSON.stringify(n[a]));
                                t.push(["◆delete EventManager.runningEventPages['" + e + "'];"]), (EventManager.runningEventPages[e] = !0), EventManager.buildEvent(t)();
                            }
                            break;
                        }
                    }
                else delete EventManager.eventPages[e];
            }
        };
    })(),
    (CatalogSystem.createNum = 0),
    (Catalog.prototype.constructor = Catalog),
    (Catalog.prototype.initialize = function (e, t, n, a, i, r, s = null) {
        (this.instanceID = CatalogSystem.createNum),
            CatalogSystem.createNum++,
            (this.parentUI = e),
            (this.row = t),
            (this.column = n),
            (this.baseUI_filePath = a),
            (this.listBaseUI_Name = i),
            (this.createListUI_Func = r),
            (this.listBaseMaskUI_Name = s),
            (this.updatePageNum = 3),
            (this.baseUI = null),
            (this.backButton = null),
            (this.nextButton = null),
            (this.backButtonUI_Name = null),
            (this.nextButtonUI_Name = null),
            (this.ngHSL = null),
            (this.okFrame = null),
            (this.ngFrame = null),
            (this.backButtonAnimeFilePath = ["", ""]),
            (this.nextButtonAnimeFilePath = ["", ""]),
            (this.updateButtonSE_OK = ""),
            (this.updateButtonSE_NG = ""),
            (this.movePageButtonEnableFunc = () => !0),
            (this.updatePageFunc = null),
            (this.mouseWheelEnableFunc = () => !0),
            (this.openAnimeFilePath = ["", ""]),
            (this.closeAnimeFilePath = ["", ""]),
            (this.open_close_AnimeUI_Name = null),
            (this.isVerticalFlip = !1),
            (this.flipFrame = 30),
            (this.flipEasingType = "easeOutBack"),
            (this.colliderPage_BackLength = 0),
            (this.colliderPage_NextLength = 0),
            (this.lastPageOffset = 0),
            (this.isLoop = !1),
            (this.pageNum = 0),
            (this.pageBaseUIs = []);
    }),
    (Catalog.prototype.setEnableMouseWheel = function (e) {
        this.mouseWheelEnableFunc =
            e ||
            (() => {
                const e = PD_UIManager.list[this.instanceID + ":" + this.listBaseUI_Name],
                    t = this.listBaseMaskUI_Name ? PD_UIManager.list[this.instanceID + ":" + this.listBaseMaskUI_Name] : e,
                    n = t.realX - t.width * t.realScaleX * t.anchorX,
                    a = t.realX + t.width * t.realScaleX * (1 - t.anchorX),
                    i = t.realY - t.height * t.realScaleY * t.anchorY,
                    r = t.realY + t.height * t.realScaleY * (1 - t.anchorY);
                return TouchInput.x >= n && TouchInput.x <= a && TouchInput.y >= i && TouchInput.y <= r;
            });
    }),
    (Catalog.prototype.setPageButton = function (e, t, n = [0, -1, -50], a = null, i = null) {
        (this.backButtonUI_Name = e), (this.nextButtonUI_Name = t), (this.ngHSL = n), (this.okFrame = a), (this.ngFrame = i);
    }),
    (Catalog.prototype.setPageButtonAnimation = function (e, t) {
        (this.backButtonAnimeFilePath = [e, t]), (this.nextButtonAnimeFilePath = [e, t]);
    }),
    (Catalog.prototype.setPageButtonSE_OK = function (e) {
        this.updateButtonSE_OK = e;
    }),
    (Catalog.prototype.setPageButtonSE_NG = function (e) {
        this.updateButtonSE_NG = e;
    }),
    (Catalog.prototype.setPageButtonFunc = function (e) {
        this.movePageButtonEnableFunc = e || (() => !0);
    }),
    (Catalog.prototype.setOpenAnimation = function (e, t, n) {
        (this.openAnimeFilePath = [t, n]), (this.open_close_AnimeUI_Name = e);
    }),
    (Catalog.prototype.setCloseAnimation = function (e, t, n) {
        (this.closeAnimeFilePath = [t, n]), (this.open_close_AnimeUI_Name = e);
    }),
    (Catalog.prototype.setFlipParam = function (e = !0, t = 30, n = "easeOutBack", a = !1, i = 3, r = 0, s = 0, o = 1, l = 0) {
        (this.isVerticalFlip = e),
            (this.flipPageNum = o),
            (this.flipFrame = t),
            (this.flipEasingType = n),
            (this.isLoop = a),
            (this.updatePageNum = i),
            (this.colliderPage_BackLength = r),
            (this.colliderPage_NextLength = s),
            (this.lastPageOffset = a ? 0 : l);
    }),
    (Catalog.prototype.setOpenPage = function (e = 0) {
        e < 0 ? (this.pageNum = 0) : this.createListUI_Func.length > 0 && e > this.createListUI_Func.length - 1 ? (this.pageNum = this.createListUI_Func.length - 1) : (this.pageNum = e);
    }),
    (Catalog.prototype.setUpdatePageFunc = function (e) {
        this.updatePageFunc = e;
    }),
    (Catalog.prototype.create = function () {
        this.flipPageNum || (this.flipPageNum = 1), (this.baseUI = PD_UIManager.loadDatabase(this.baseUI_filePath, this.parentUI, this.instanceID));
        const e = PD_UIManager.list[this.instanceID + ":" + this.listBaseUI_Name],
            t = this.listBaseMaskUI_Name ? PD_UIManager.list[this.instanceID + ":" + this.listBaseMaskUI_Name] : e,
            n = e.addUI(this.instanceID + ":_catalogListBaseMaskUI", t.width, t.height);
        this.listBaseMaskUI_Name && n.move(t.x, t.y), (n.anchor = [t.anchorX, t.anchorY]), n.fillAll("white"), n.attachMask();
        const a = Math.floor((this.createListUI_Func.length - 1) / (this.row * this.column)) + this.lastPageOffset;
        this.backButtonUI_Name &&
            ((this.backButton = PD_UIManager.list[this.instanceID + ":" + this.backButtonUI_Name]),
            (this.backButton.visible = !1),
            (this.nextButton = PD_UIManager.list[this.instanceID + ":" + this.nextButtonUI_Name]),
            (this.nextButton.visible = !1)),
            this.baseUI.addEvent("wheelup", "wheelup", () => {
                this.mouseWheelEnableFunc() && a > 0 && this.backButtonFunc();
            }),
            this.baseUI.addEvent("wheeldown", "wheeldown", () => {
                this.mouseWheelEnableFunc() && a > 0 && this.nextButtonFunc();
            });
        const i = () => {
            if (this.backButtonUI_Name) {
                const e = this.backButton;
                (e.visible = !0),
                    a > 0
                        ? (this.isLoop || 0 !== this.pageNum ? this.updateFlipButtonEnable(e, !0) : this.updateFlipButtonEnable(e, !1),
                          this.backButtonAnimeFilePath[0] ? e.setAnimation(this.backButtonAnimeFilePath[0], this.backButtonAnimeFilePath[1]) : (e.animeScale(0.5, 0.5, 5, !0), e.animeScale(1, 1, 10, !0, "easeOutBack")),
                          e.addEvent("repeat", "repeat", () => {
                              this.movePageButtonEnableFunc() && this.backButtonFunc();
                          }))
                        : this.updateFlipButtonEnable(e, !1);
                const t = this.nextButton;
                (t.visible = !0),
                    a > 0
                        ? (this.isLoop || this.pageNum !== a ? this.updateFlipButtonEnable(t, !0) : this.updateFlipButtonEnable(t, !1),
                          this.nextButtonAnimeFilePath[0] ? t.setAnimation(this.nextButtonAnimeFilePath[0], this.nextButtonAnimeFilePath[1]) : (t.animeScale(0.5, 0.5, 5, !0), t.animeScale(1, 1, 10, !0, "easeOutBack")),
                          t.addEvent("repeat", "repeat", () => {
                              this.movePageButtonEnableFunc() && this.nextButtonFunc();
                          }))
                        : this.updateFlipButtonEnable(t, !1);
            }
        };
        if (this.openAnimeFilePath[0]) {
            const e = this.open_close_AnimeUI_Name ? PD_UIManager.list[this.instanceID + ":" + this.open_close_AnimeUI_Name] : this.baseUI;
            e.setAnimation(this.openAnimeFilePath[0], this.openAnimeFilePath[1]),
                e.animeFunction(() => {
                    i(), this.movePage(this.pageNum, 0);
                }),
                e.playAnimation();
        } else i(), this.movePage(this.pageNum, 0);
    }),
    (Catalog.prototype.updateFlipButtonEnable = function (e, t) {
        t ? (this.ngHSL ? (e.hsl = [0, 0, 0]) : (e.visible = !0), this.okFrame && (e.frame = this.okFrame)) : (this.ngHSL ? (e.hsl = this.ngHSL.slice()) : (e.visible = !1), this.ngFrame && (e.frame = this.ngFrame));
    }),
    (Catalog.prototype.backButtonFunc = function () {
        const e = Math.floor((this.createListUI_Func.length - 1) / (this.row * this.column));
        if (this.pageNum - this.flipPageNum < 0)
            if (this.isLoop) {
                this.updateButtonSE_OK && AudioManager.playSe({ name: this.updateButtonSE_OK, pan: 0, pitch: 100, volume: 90 }), this.backButton && this.backButton.playAnimation();
                let t = e;
                for (let e = 2; e <= this.flipPageNum; e++) t--;
                this.movePage(t, -this.flipPageNum);
            } else this.updateButtonSE_NG && AudioManager.playSe({ name: this.updateButtonSE_NG, pan: 0, pitch: 100, volume: 90 }), this.backButton && this.updateFlipButtonEnable(this.backButton, !1), this.movePage(0, -this.pageNum);
        else {
            this.backButton && (!this.isLoop && this.pageNum - this.flipPageNum - 1 < 0 && this.updateFlipButtonEnable(this.backButton, !1), this.backButton.playAnimation()),
                this.nextButton && this.updateFlipButtonEnable(this.nextButton, !0),
                this.updateButtonSE_OK && AudioManager.playSe({ name: this.updateButtonSE_OK, pan: 0, pitch: 100, volume: 90 });
            let e = this.pageNum - 1;
            for (let t = 2; t <= this.flipPageNum; t++) e--;
            this.movePage(e, -this.flipPageNum);
        }
    }),
    (Catalog.prototype.nextButtonFunc = function () {
        const e = Math.floor((this.createListUI_Func.length - 1) / (this.row * this.column));
        if (this.pageNum + this.flipPageNum > e + this.lastPageOffset)
            if (this.isLoop) {
                this.updateButtonSE_OK && AudioManager.playSe({ name: this.updateButtonSE_OK, pan: 0, pitch: 100, volume: 90 }), this.nextButton && this.nextButton.playAnimation();
                let e = 0;
                for (let t = 2; t <= this.flipPageNum; t++) e++;
                this.movePage(e, this.flipPageNum);
            } else
                this.updateButtonSE_NG && AudioManager.playSe({ name: this.updateButtonSE_NG, pan: 0, pitch: 100, volume: 90 }),
                    this.nextButton && this.updateFlipButtonEnable(this.nextButton, !1),
                    this.movePage(e + this.lastPageOffset, e + this.lastPageOffset - this.pageNum);
        else {
            this.nextButton && (!this.isLoop && this.pageNum + this.flipPageNum + 1 > e && this.updateFlipButtonEnable(this.nextButton, !1), this.nextButton.playAnimation()),
                this.backButton && this.updateFlipButtonEnable(this.backButton, !0),
                this.updateButtonSE_OK && AudioManager.playSe({ name: this.updateButtonSE_OK, pan: 0, pitch: 100, volume: 90 });
            let t = this.pageNum + 1;
            for (let e = 2; e <= this.flipPageNum; e++) t++;
            this.movePage(t, this.flipPageNum);
        }
    }),
    (Catalog.prototype.movePage = function (e, t) {
        if ((this.updatePage(e), 0 !== t && this.flipFrame > 0)) {
            const e = PD_UIManager.list[this.instanceID + ":" + this.listBaseUI_Name],
                n = Math.floor(this.pageBaseUIs.length / 2);
            for (let a = 0, i = this.pageBaseUIs.length; a < i; a++) {
                const i = this.pageBaseUIs[a];
                if (i) {
                    (i.isDisableCollider = !0), i.deleteAnimation();
                    const r = this.isVerticalFlip ? 0 : i.x + e.width * t,
                        s = this.isVerticalFlip ? i.y + e.height * t : 0;
                    i.move(r, s);
                    const o = this.isVerticalFlip ? 0 : i.x + e.width * t * -1,
                        l = this.isVerticalFlip ? i.y + e.height * t * -1 : 0;
                    i.animeMove(o, l, this.flipFrame, !0, this.flipEasingType),
                        i.animeFunction(() => {
                            a >= n - this.colliderPage_BackLength && a <= n + this.colliderPage_NextLength ? (i.isDisableCollider = !1) : (i.isDisableCollider = !0);
                        }),
                        i.playAnimation();
                }
            }
        }
    }),
    (Catalog.prototype.updatePage = function (e) {
        const t = this.createListUI_Func,
            n = this.row,
            a = this.column,
            i = n * a,
            r = Math.floor((t.length - 1) / i);
        let s = this.updatePageNum,
            o = !1,
            l = [],
            h = 0;
        for (; !o; ) {
            (o = !0), (h = Math.floor(s / 2)), (l = []), (l[h] = e);
            const t = {};
            for (let e = h - 1; e >= 0; e--) 0 === l[e + 1] ? (l[e] = this.isLoop ? r : null) : null === l[e + 1] ? (l[e] = null) : (l[e] = l[e + 1] - 1), null !== l[e] && (t[l[e]] ? t[l[e]]++ : (t[l[e]] = 1));
            for (let e = h + 1; e < s; e++) l[e - 1] === r ? (l[e] = this.isLoop ? 0 : null) : null === l[e - 1] ? (l[e] = null) : (l[e] = l[e - 1] + 1), null !== l[e] && (t[l[e]] ? t[l[e]]++ : (t[l[e]] = 1));
            for (let e in t) t[e] > 1 && ((s -= 1), (o = !1));
        }
        const c = [];
        for (let e = 0; e < this.pageBaseUIs.length; e++)
            if (this.pageBaseUIs[e]) {
                const t = Number(this.pageBaseUIs[e].name.split("_").slice(-1)[0]),
                    n = l.indexOf(t);
                -1 === n ? this.pageBaseUIs[e].delete() : (c[n] = this.pageBaseUIs[e]);
            }
        const u = PD_UIManager.list[this.instanceID + ":" + this.listBaseUI_Name];
        for (let e = 0; e < l.length; e++)
            if (null !== l[e]) {
                const r = l[e];
                let s = PD_UIManager.list[this.instanceID + ":catalogSystem_PageBase_" + r];
                if (!s) {
                    (s = u.addUI(this.instanceID + ":catalogSystem_PageBase_" + r)), (c[e] = s);
                    for (let e = r * i, o = 0, l = e + i <= t.length ? e + i : t.length; e < l; e++, o++) {
                        const i = t[e](s, this),
                            r = u.width * u.anchorX * -1 + i.width * i.anchorX,
                            l = u.height * u.anchorY * -1 + i.height * i.anchorY,
                            h = 1 === n ? 0 : Math.round((u.width - i.width * n) / (n - 1)),
                            c = 1 === a ? 0 : Math.round((u.height - i.height * a) / (a - 1));
                        i.move(r + (i.width + h) * (o % n) + (1 === n ? u.width / 2 - i.width / 2 : 0), l + (i.height + c) * Math.floor(o / n) + (1 === a ? u.height / 2 - i.height / 2 : 0));
                    }
                }
                e >= h - this.colliderPage_BackLength && e <= h + this.colliderPage_NextLength ? (s.isDisableCollider = !1) : (s.isDisableCollider = !0);
            } else c[e] = null;
        for (let e = 0; e < l.length; e++)
            if (null !== l[e]) {
                const t = PD_UIManager.list[this.instanceID + ":catalogSystem_PageBase_" + l[e]],
                    n = this.isVerticalFlip ? 0 : u.width * (e - h),
                    a = this.isVerticalFlip ? u.height * (e - h) : 0;
                t.move(n, a);
            }
        (this.pageNum = e), (this.pageBaseUIs = c), this.updatePageFunc && this.updatePageFunc();
    }),
    (Catalog.prototype.close = function () {
        return new Promise((e) => {
            if (this.closeAnimeFilePath[0]) {
                this.backButton && this.backButton.delete(), this.nextButton && this.nextButton.delete();
                const t = this.open_close_AnimeUI_Name ? PD_UIManager.list[this.instanceID + ":" + this.open_close_AnimeUI_Name] : this.baseUI;
                t.deleteAnimation(),
                    t.setAnimation(this.closeAnimeFilePath[0], this.closeAnimeFilePath[1]),
                    t.animeFunction(() => {
                        this.delete(), e();
                    }),
                    t.playAnimation();
            } else this.delete(), e();
        });
    }),
    (Catalog.prototype.delete = function () {
        this.baseUI.delete();
    }),
    (CatalogSystem.test = function () {
        const e = [];
        for (let t = 0; t < 25; t++) e.push((e, n) => PD_UIManager.loadDatabase("System/useTegakari_SelectButton", e, n.instanceID + "_" + t));
        const t = new Catalog(PD_UIManager.base.upper, 2, 4, "System/useTegakariBase", "useTegakariListBase", e);
        t.setOpenAnimation("useTegakariBG", "KGSystem_MessageBG"), t.setPageButton("useTegakari_button_L", "useTegakari_button_R"), t.create();
    }),
    PD_ImportGoogleSpreadSeet.spreadSeetWebURL,
    PD_ImportGoogleSpreadSeet.worksheet_gid,
    PD_ImportGoogleSpreadSeet.savePath,
    (PD_ImportGoogleSpreadSeet.endFunction = null),
    (PD_ImportGoogleSpreadSeet.loadCount = 0),
    (PD_ImportGoogleSpreadSeet.loadedCount = 0),
    (PD_ImportGoogleSpreadSeet.loadedFiles = {}),
    (function () {
        "use strict";
        if (Utils.isNwjs() && Utils.isOptionValid("test")) {
            const e = function (t) {
                t.ctrlKey || t.altKey || 112 !== t.keyCode || (PD_ImportGoogleSpreadSeet.run(), document.removeEventListener("keydown", e));
            };
            document.addEventListener("keydown", e);
        }
    })(),
    (PD_ImportGoogleSpreadSeet.run = function () {
        console.log("スプレッドシートのロードを開始します……"),
            (PD_ImportGoogleSpreadSeet.loadCount = 0),
            (PD_ImportGoogleSpreadSeet.loadedCount = 0),
            (PD_ImportGoogleSpreadSeet.loadedFiles = {}),
            PD_ImportGoogleSpreadSeet.loadSpreadSeets().then(() => {
                PD_ImportGoogleSpreadSeet.endFunction ? PD_ImportGoogleSpreadSeet.endFunction(PD_ImportGoogleSpreadSeet.loadedFiles) && chrome.runtime.reload() : chrome.runtime.reload();
            });
    }),
    (PD_ImportGoogleSpreadSeet.loadSpreadSeets = function () {
        return new Promise((e) => {
            const t = PD_ImportGoogleSpreadSeet.spreadSeetWebURL.split("/")[6];
            PD_File.load("https://spreadsheets.google.com/d/e/" + t + "/pub?gid=" + PD_ImportGoogleSpreadSeet.worksheet_gid + "&single=true&output=csv").then((t) => {
                const n = PD_File.convertCSV_to_Array(t),
                    a = [];
                for (let e = 1, t = n.length; e < t; e++) {
                    const t = n[e];
                    t[3] && a.push(() => PD_ImportGoogleSpreadSeet.loadSpreadSeet(t[0], t[1], t[2]));
                }
                (PD_ImportGoogleSpreadSeet.loadCount = a.length),
                    PD_Promise.all(a, 10).then(() => {
                        e();
                    }),
                    console.log("スプレッドシートをロード中……： " + PD_ImportGoogleSpreadSeet.loadedCount + " / " + PD_ImportGoogleSpreadSeet.loadCount);
            });
        });
    }),
    (PD_ImportGoogleSpreadSeet.loadSpreadSeet = function (e, t, n) {
        return new Promise((a) => {
            const i = t.split("/")[6];
            PD_File.load("https://spreadsheets.google.com/d/e/" + i + "/pub?gid=" + n + "&single=true&output=csv").then((t) => {
                (PD_ImportGoogleSpreadSeet.loadedFiles[e] = t),
                    PD_File.save(PD_ImportGoogleSpreadSeet.savePath + "/" + e + ".csv", t).then(() => {
                        PD_ImportGoogleSpreadSeet.loadedCount++, console.log("スプレッドシートをロード中……： " + PD_ImportGoogleSpreadSeet.loadedCount + " / " + PD_ImportGoogleSpreadSeet.loadCount), a(t);
                    });
            });
        });
    }),
    PD_SaveDataManager.addOptionParam("language", "日本語"),
    (PD_Translation.transDB = {}),
    (PD_Translation.loadDatabase = function (e) {
        for (let t = 0, n = e.length; t < n; t++)
            PD_Setup.addReadyLoadCompressFile("_database/" + e[t] + ".csv", (e) => {
                const t = PD_File.convertCSV_to_Array(e);
                let n = null;
                for (let e = 1, a = t.length; e < a; e++) {
                    const a = t[e],
                        i = {};
                    for (let e = 0, r = a.length; e < r; e++) 0 === e ? a[0] && (n = a[0]) : a[e] && (i[t[0][e]] = a[e]);
                    for (let e in i) PD_Translation.transDB[n] || (PD_Translation.transDB[n] = {}), PD_Translation.transDB[n][e] || (PD_Translation.transDB[n][e] = []), PD_Translation.transDB[n][e].push(i[e]);
                }
            });
    }),
    (PD_Translation.translation = function (e, t = !1) {
        if (void 0 !== PD_Translation.transDB[e] && void 0 !== PD_Translation.transDB[e][$option.language]) return PD_Translation.transDB[e][$option.language];
        Utils.isNwjs() && Utils.isOptionValid("test") && !t && console.warn("translation：翻訳ID：" + e);
    }),
    (PD_Translation.transData = function (e, t = !1) {
        if (void 0 !== PD_Translation.transDB[e]) {
            const t = PD_Translation.transDB[e][$option.language];
            return void 0 !== t ? t[0] : "";
        }
        Utils.isNwjs() && Utils.isOptionValid("test") && !t && console.warn("translation：翻訳ID：" + e);
    }),
    (PD_Translation.getArray = function (e, t, n = !1) {
        if (void 0 !== PD_Translation.transDB[e] && void 0 !== PD_Translation.transDB[e][t]) return PD_Translation.transDB[e][t];
        Utils.isNwjs() && Utils.isOptionValid("test") && !n && console.warn("getArray：翻訳ID：" + e);
    }),
    (PD_Translation.getData = function (e, t, n = !1) {
        if (void 0 !== PD_Translation.transDB[e]) {
            const n = PD_Translation.transDB[e][t];
            return void 0 !== n ? n[0] : "";
        }
        Utils.isNwjs() && Utils.isOptionValid("test") && !n && console.warn("getData：翻訳ID：" + e);
    }),
    (function () {
        "use strict";
        const e = Bitmap.prototype.drawTextEX;
        Bitmap.prototype.drawTextEX = function () {
            let t = String(arguments[0]);
            if (t.match(/{|}/g)) {
                const e = t.split(/{|}/g);
                for (let t = 0, n = e.length; t < n; t++)
                    if (t % 2 == 1) {
                        const n = PD_Translation.translation(e[t], $option.language);
                        n && (e[t] = n[0]);
                    }
                arguments[0] = e.join("");
            }
            e.apply(this, arguments);
        };
    })();
