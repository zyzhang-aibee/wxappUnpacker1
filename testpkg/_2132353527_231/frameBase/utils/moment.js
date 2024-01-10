var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(n, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.dayjs = e();
}(void 0, function() {
    var t = "millisecond", n = "second", e = "minute", r = "hour", i = "day", s = "week", u = "month", o = "quarter", a = "year", f = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/, h = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = function(t, n, e) {
        var r = String(t);
        return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t;
    }, d = {
        s: c,
        z: function(t) {
            var n = -t.utcOffset(), e = Math.abs(n), r = Math.floor(e / 60), i = e % 60;
            return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
        },
        m: function(t, n) {
            var e = 12 * (n.year() - t.year()) + (n.month() - t.month()), r = t.clone().add(e, u), i = n - r < 0, s = t.clone().add(e + (i ? -1 : 1), u);
            return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(f) {
            return {
                M: u,
                y: a,
                w: s,
                d: i,
                h: r,
                m: e,
                s: n,
                ms: t,
                Q: o
            }[f] || String(f || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, $ = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    }, l = "en", y = {};
    y[l] = $;
    var m = function(t) {
        return t instanceof D;
    }, M = function(t, n, e) {
        var r;
        if (!t) return null;
        if ("string" == typeof t) y[t] && (r = t), n && (y[t] = n, r = t); else {
            var i = t.name;
            y[i] = t, r = i;
        }
        return e || (l = r), r;
    }, g = function(t, n, e) {
        if (m(t)) return t.clone();
        var r = n ? "string" == typeof n ? {
            format: n,
            pl: e
        } : n : {};
        return r.date = t, new D(r);
    }, p = d;
    p.l = M, p.i = m, p.w = function(t, n) {
        return g(t, {
            locale: n.$L,
            utc: n.$u
        });
    };
    var D = function() {
        function c(t) {
            this.$L = this.$L || M(t.locale, null, !0) || l, this.parse(t);
        }
        var d = c.prototype;
        return d.parse = function(t) {
            this.$d = function(t) {
                var n = t.date, e = t.utc;
                if (null === n) return new Date(NaN);
                if (p.u(n)) return new Date();
                if (n instanceof Date) return new Date(n);
                if ("string" == typeof n && !/Z$/i.test(n)) {
                    var r = n.match(f);
                    if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
                }
                return new Date(n);
            }(t), this.init();
        }, d.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), 
            this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, d.$utils = function() {
            return p;
        }, d.isValid = function() {
            return !("Invalid Date" === this.$d.toString());
        }, d.isSame = function(t, n) {
            var e = g(t);
            return this.startOf(n) <= e && e <= this.endOf(n);
        }, d.isAfter = function(t, n) {
            return g(t) < this.startOf(n);
        }, d.isBefore = function(t, n) {
            return this.endOf(n) < g(t);
        }, d.$g = function(t, n, e) {
            return p.u(t) ? this[n] : this.set(e, t);
        }, d.year = function(t) {
            return this.$g(t, "$y", a);
        }, d.month = function(t) {
            return this.$g(t, "$M", u);
        }, d.day = function(t) {
            return this.$g(t, "$W", i);
        }, d.date = function(t) {
            return this.$g(t, "$D", "date");
        }, d.hour = function(t) {
            return this.$g(t, "$H", r);
        }, d.minute = function(t) {
            return this.$g(t, "$m", e);
        }, d.second = function(t) {
            return this.$g(t, "$s", n);
        }, d.millisecond = function(n) {
            return this.$g(n, "$ms", t);
        }, d.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, d.valueOf = function() {
            return this.$d.getTime();
        }, d.startOf = function(t, o) {
            var f = this, h = !!p.u(o) || o, c = p.p(t), d = function(t, n) {
                var e = p.w(f.$u ? Date.UTC(f.$y, n, t) : new Date(f.$y, n, t), f);
                return h ? e : e.endOf(i);
            }, $ = function(t, n) {
                return p.w(f.toDate()[t].apply(f.toDate(), (h ? [ 0, 0, 0, 0 ] : [ 23, 59, 59, 999 ]).slice(n)), f);
            }, l = this.$W, y = this.$M, m = this.$D, M = "set" + (this.$u ? "UTC" : "");
            switch (c) {
              case a:
                return h ? d(1, 0) : d(31, 11);

              case u:
                return h ? d(1, y) : d(0, y + 1);

              case s:
                var g = this.$locale().weekStart || 0, D = (l < g ? l + 7 : l) - g;
                return d(h ? m - D : m + (6 - D), y);

              case i:
              case "date":
                return $(M + "Hours", 0);

              case r:
                return $(M + "Minutes", 1);

              case e:
                return $(M + "Seconds", 2);

              case n:
                return $(M + "Milliseconds", 3);

              default:
                return this.clone();
            }
        }, d.endOf = function(t) {
            return this.startOf(t, !1);
        }, d.$set = function(s, o) {
            var f, h = p.p(s), c = "set" + (this.$u ? "UTC" : ""), d = (f = {}, f[i] = c + "Date", 
            f.date = c + "Date", f[u] = c + "Month", f[a] = c + "FullYear", f[r] = c + "Hours", 
            f[e] = c + "Minutes", f[n] = c + "Seconds", f[t] = c + "Milliseconds", f)[h], $ = h === i ? this.$D + (o - this.$W) : o;
            if (h === u || h === a) {
                var l = this.clone().set("date", 1);
                l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
            } else d && this.$d[d]($);
            return this.init(), this;
        }, d.set = function(t, n) {
            return this.clone().$set(t, n);
        }, d.get = function(t) {
            return this[p.p(t)]();
        }, d.add = function(t, o) {
            var f, h = this;
            t = Number(t);
            var c = p.p(o), d = function(n) {
                var e = new Date(h.$d);
                return e.setDate(e.getDate() + n * t), p.w(e, h);
            };
            if (c === u) return this.set(u, this.$M + t);
            if (c === a) return this.set(a, this.$y + t);
            if (c === i) return d(1);
            if (c === s) return d(7);
            var $ = (f = {}, f[e] = 6e4, f[r] = 36e5, f[n] = 1e3, f)[c] || 1, l = this.valueOf() + t * $;
            return p.w(l, this);
        }, d.subtract = function(t, n) {
            return this.add(-1 * t, n);
        }, d.format = function(t) {
            var n = this;
            if (!this.isValid()) return "Invalid Date";
            var e = t || "YYYY-MM-DDTHH:mm:ssZ", r = p.z(this), i = this.$locale(), s = i.weekdays, u = i.months, o = function(t, n, e, r) {
                return t && t[n] || e[n].substr(0, r);
            }, a = function(t) {
                return p.s(n.$H % 12 || 12, t, "0");
            }, f = {
                YY: String(this.$y).slice(-2),
                YYYY: String(this.$y),
                M: String(this.$M + 1),
                MM: p.s(this.$M + 1, 2, "0"),
                MMM: o(i.monthsShort, this.$M, u, 3),
                MMMM: u[this.$M],
                D: String(this.$D),
                DD: p.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: o(i.weekdaysMin, this.$W, s, 2),
                ddd: o(i.weekdaysShort, this.$W, s, 3),
                dddd: s[this.$W],
                H: String(this.$H),
                HH: p.s(this.$H, 2, "0"),
                h: a(1),
                hh: a(2),
                a: this.$H < 12 ? "am" : "pm",
                A: this.$H < 12 ? "AM" : "PM",
                m: String(this.$m),
                mm: p.s(this.$m, 2, "0"),
                s: String(this.$s),
                ss: p.s(this.$s, 2, "0"),
                SSS: p.s(this.$ms, 3, "0"),
                Z: r
            };
            return e.replace(h, function(t, n) {
                return n || f[t] || r.replace(":", "");
            });
        }, d.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, d.diff = function(t, f, h) {
            var c, d = p.p(f), $ = g(t), l = 6e4 * ($.utcOffset() - this.utcOffset()), y = this - $, m = p.m(this, $);
            return m = (c = {}, c[a] = m / 12, c[u] = m, c[o] = m / 3, c[s] = (y - l) / 6048e5, 
            c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[e] = y / 6e4, c[n] = y / 1e3, c)[d] || y, 
            h ? m : p.a(m);
        }, d.daysInMonth = function() {
            return this.endOf(u).$D;
        }, d.$locale = function() {
            return y[this.$L];
        }, d.locale = function(t, n) {
            if (!t) return this.$L;
            var e = this.clone();
            return e.$L = M(t, n, !0), e;
        }, d.clone = function() {
            return p.w(this.toDate(), this);
        }, d.toDate = function() {
            return new Date(this.$d);
        }, d.toJSON = function() {
            return this.toISOString();
        }, d.toISOString = function() {
            return this.$d.toISOString();
        }, d.toString = function() {
            return this.$d.toUTCString();
        }, c;
    }();
    return g.prototype = D.prototype, g.extend = function(t, n) {
        return t(n, D, g), g;
    }, g.locale = M, g.isDayjs = m, g.unix = function(t) {
        return g(1e3 * t);
    }, g.en = y[l], g.Ls = y, g;
});