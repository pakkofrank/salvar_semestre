(this["webpackJsonpclient-view-genially"] = this["webpackJsonpclient-view-genially"] || []).push([
    [5], {
        866: function (e, t) {},
        867: function (e, t) {},
        868: function (e, t) {},
        878: function (e, t, i) {
            "use strict";
            i.r(t);
            var n, o = i(11),
                r = i(16),
                a = i(19),
                c = i(18),
                l = i(0),
                s = i.n(l),
                u = i(1),
                p = i.n(u),
                h = i(7),
                d = i(12),
                v = i(876),
                w = Object(h.b)("viewStore", "paintStore")(n = Object(h.c)(n = function (e) {
                    Object(a.a)(i, e);
                    var t = Object(c.a)(i);

                    function i() {
                        var e;
                        Object(o.a)(this, i);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(r))).init = function (t) {
                            e.sketch = t
                        }, e
                    }
                    return Object(r.a)(i, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props,
                                t = e.paintStore,
                                i = e.viewStore;
                            t.init(this.sketch, i.currentLocation)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            var e = this.props,
                                t = e.paintStore,
                                i = e.viewStore,
                                n = e.slideId;
                            n !== i.currentLocation && t.unmount(n, this.sketch)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props,
                                i = t.paintStore,
                                n = t.viewStore,
                                o = t.slideId,
                                r = i.sketchStorage,
                                a = i.selectedColor,
                                c = i.widthSelected;
                            return s.a.createElement("div", {
                                className: "genially-view-sketch-field-container"
                            }, s.a.createElement(v.a, {
                                ref: function (t) {
                                    return e.init(t)
                                },
                                height: n.heightSlide,
                                width: n.widthSlide,
                                tool: v.b.Pencil,
                                lineColor: a,
                                lineWidth: c,
                                defaultValue: r[o],
                                className: Object(d.a)(["genially-view-sketch-field", {
                                    "genially-view-vertical-center": n.isMarginTop,
                                    "genially-view-horizontal-center": !n.isMarginTop
                                }])
                            }))
                        }
                    }]), i
                }(l.Component)) || n) || n;
            w.wrappedComponent.propTypes = {
                viewStore: p.a.object.isRequired,
                paintStore: p.a.object.isRequired,
                slideId: p.a.string.isRequired
            }, t.default = w
        }
    }
]);
//# sourceMappingURL=sketch.bfb42ab0.chunk.js.map