(this["webpackJsonpclient-view-genially"] = this["webpackJsonpclient-view-genially"] || []).push([
    [1], {
        881: function (e, t, a) {
            "use strict";
            a.r(t);
            var r = a(0),
                n = a.n(r),
                l = a(7),
                c = a(1),
                o = a(6),
                i = a(54),
                s = function () {
                    return (s = Object.assign || function (e) {
                        for (var t, a = 1, r = arguments.length; a < r; a++)
                            for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }).apply(this, arguments)
                },
                d = o.d.div.withConfig({
                    displayName: "TableChartWrapper",
                    componentId: "sc-151wrik"
                })((function () {
                    return {
                        width: "100%",
                        height: "100%",
                        wordBreak: "break-all"
                    }
                })),
                p = o.d.table.withConfig({
                    displayName: "TableStyled",
                    componentId: "sc-llcjpc"
                })((function (e) {
                    return {
                        borderCollapse: "collapse",
                        height: "100%",
                        width: "100%",
                        tableLayout: e.fixed ? "fixed" : "auto"
                    }
                })),
                b = o.d.td.withConfig({
                    displayName: "TableCell",
                    componentId: "sc-10hl0q7"
                })((function (e) {
                    var t = e.normalWordBreak;
                    return s(s({}, i.a.increaseSpecificity({
                        padding: "0.15em"
                    })), t ? {
                        overflow: "hidden",
                        wordBreak: "normal"
                    } : {})
                })),
                f = function (e) {
                    var t = e.data,
                        a = e.id,
                        r = e.cellStyles,
                        l = e.tableStyles,
                        c = e.normalWordBreak,
                        o = "fixed" === l.css.tableLayout;
                    return n.a.createElement(d, {
                        className: "genially-chart-wrapper"
                    }, n.a.createElement(p, {
                        fixed: o
                    }, n.a.createElement("tbody", null, t.map((function (e, t) {
                        var l = "t_" + a + "_r_" + t;
                        return n.a.createElement("tr", {
                            key: l
                        }, e.map((function (e, l) {
                            var o = "t_" + a + "_c_" + t + "_" + l;
                            return n.a.createElement(b, {
                                normalWordBreak: c,
                                style: r[t][l].css,
                                key: o
                            }, n.a.createElement("span", null, e))
                        })))
                    })))))
                };
            f.propTypes = {
                data: Object(c.arrayOf)(Object(c.arrayOf)(Object(c.oneOfType)([c.string, c.number]))),
                cellStyles: Object(c.arrayOf)(Object(c.arrayOf)(Object(c.shape)({
                    css: c.object
                }))),
                tableStyles: Object(c.shape)({
                    css: Object(c.shape)({
                        tableLayout: Object(c.oneOf)(["auto", "fixed"])
                    })
                }),
                id: c.string,
                normalWordBreak: c.bool
            };
            t.default = Object(l.c)(f)
        }
    }
]);
//# sourceMappingURL=tableChart.206c2867.chunk.js.map