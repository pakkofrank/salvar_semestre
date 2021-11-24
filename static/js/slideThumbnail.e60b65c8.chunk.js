(this["webpackJsonpclient-view-genially"] = this["webpackJsonpclient-view-genially"] || []).push([
    [6], {
        869: function (e, t, n) {},
        870: function (e, t, n) {},
        871: function (e, t, n) {},
        880: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                i = n.n(a),
                o = n(7),
                r = Object(o.c)((function (e) {
                    var t = e.image,
                        n = e.backgroundSize,
                        a = e.backgroundPosition,
                        o = e.opacity,
                        r = {
                            left: a ? a.PositionLeft : 0,
                            top: a ? a.PositionTop : 0,
                            width: n ? n.Width : 0,
                            height: n ? n.Height : 0,
                            opacity: o,
                            position: "absolute"
                        };
                    return i.a.createElement("div", {
                        style: r
                    }, i.a.createElement("img", {
                        src: t,
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        alt: ""
                    }))
                })),
                c = function (e) {
                    return e ? "string" === typeof e ? e : e.Rotatione : "rotate(0deg)"
                },
                l = Object(o.c)((function (e) {
                    var t = e.item,
                        n = e.zIndex,
                        a = t.data || t,
                        o = {
                            left: a.Position.PositionLeft,
                            top: a.Position.PositionTop,
                            width: a.Size.Width,
                            height: a.Size.Height,
                            position: "absolute",
                            zIndex: n || a.ZIndex,
                            transform: c(a.Rotation)
                        };
                    return i.a.createElement("div", {
                        id: "fake-" + a.Id,
                        className: "area-item",
                        style: o
                    })
                })),
                d = n(840),
                s = n(13),
                u = n.n(s),
                m = n(14),
                f = n.n(m),
                p = n(15),
                g = n(1),
                h = function (e) {
                    var t = e.className,
                        n = e.color,
                        a = e.height,
                        o = e.size,
                        r = e.style,
                        c = e.width,
                        l = f()(e, ["className", "color", "height", "size", "style", "width"]);
                    return i.a.createElement(p.a, u()({
                        className: t,
                        color: n,
                        height: a,
                        size: o,
                        style: r,
                        viewBox: "0 0 16 16",
                        width: c
                    }, l), i.a.createElement("g", null, i.a.createElement("path", {
                        d: "M14,13H2V11L3.59,9.41a2,2,0,0,1,2.82,0L7,10,9.59,7.41a2,2,0,0,1,2.82,0L14,9ZM5.5,4A1.5,1.5,0,1,1,4,5.5,1.5,1.5,0,0,1,5.5,4ZM14,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2Z"
                    })))
                };
            h.propTypes = {
                className: g.string,
                color: g.string,
                height: Object(g.oneOfType)([g.string, g.number]),
                size: Object(g.oneOfType)([g.string, g.number]),
                style: g.any,
                width: Object(g.oneOfType)([g.string, g.number])
            };
            var y = h;

            function I(e, t, n) {
                var a = new Image,
                    i = n;
                n || (i = {
                    mimeType: "image/png"
                }), a.onload = function () {
                    try {
                        var e = document.createElement("canvas");
                        e.width = a.width, e.height = a.height;
                        var n = e.getContext("2d");
                        n && n.drawImage(a, 0, 0);
                        var o = e.toDataURL(null === i || void 0 === i ? void 0 : i.mimeType);
                        t(null, o)
                    } catch (r) {
                        t(!0, null)
                    }
                }, a.onerror = function () {
                    t(!0, null)
                }, a.setAttribute("crossOrigin", "anonymous"), a.src = function (e, t) {
                    if (!t) return e;
                    var n = new URL(e);
                    return n.protocol.startsWith("http") ? (Object.keys(t).forEach((function (e) {
                        n.searchParams.set(e, t[e])
                    })), n.toString()) : e
                }(e, {
                    v: "anonymous"
                })
            }
            var v = n(227),
                k = (n(869), Object(o.c)((function (e) {
                    var t, n = e.item,
                        o = e.zIndex,
                        r = e.className,
                        l = null !== (t = n.Source) && void 0 !== t ? t : n.data.Source,
                        s = Object(a.useState)(null),
                        u = s[0],
                        m = s[1],
                        f = Object(a.useState)(null),
                        p = f[0],
                        g = f[1],
                        h = Object(a.useState)(null),
                        k = h[0],
                        b = h[1],
                        E = Object(a.useRef)(!1),
                        O = Object(a.useRef)(/\.(gif)|data:image\/gif/.test(l)),
                        x = Object(a.useCallback)((function () {
                            try {
                                I(l, (function (e, t) {
                                    E.current && (e ? g(!0) : (m(t), b(l)))
                                }))
                            } catch (e) {
                                console.warn(e), g(!0)
                            }
                        }), [l]);
                    if (Object(a.useEffect)((function () {
                            return E.current = !0,
                                function () {
                                    E.current = !1
                                }
                        }), []), Object(a.useEffect)((function () {
                            O.current && x()
                        }), [x]), Object(a.useEffect)((function () {
                            O.current ? !O.current || u && k === l || x() : (m(null), g(null), b(null))
                        }), [l, u, k, x]), O.current && !u && !p) return null;
                    var P = n.data || n,
                        z = {
                            left: P.Position.PositionLeft,
                            top: P.Position.PositionTop,
                            width: P.Size.Width,
                            height: P.Size.Height,
                            position: "absolute",
                            overflow: "hidden",
                            transform: c(P.Rotation),
                            opacity: P.Opacity,
                            zIndex: o || P.ZIndex
                        },
                        w = parseInt(P.Size.Height, 10) < 200;
                    return i.a.createElement("div", {
                        id: "fake-" + P.Id,
                        style: z,
                        className: Object(d.a)(["image-item", P.Frame, r])
                    }, p ? i.a.createElement("div", {
                        className: Object(d.a)(["fake-image-disclaimer", {
                            "no-title": w
                        }])
                    }, i.a.createElement(y, null), i.a.createElement("p", null, "GIF")) : i.a.createElement("div", {
                        style: {
                            position: "absolute",
                            top: P.Offset.top + "%",
                            left: P.Offset.left + "%",
                            right: P.Offset.right + "%",
                            bottom: P.Offset.bottom + "%"
                        }
                    }, i.a.createElement("img", {
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            transform: Object(v.a)(P.Transformations)
                        },
                        src: u || l,
                        alt: P.Name
                    })))
                }))),
                b = Object(o.c)((function (e) {
                    var t = e.item,
                        n = t.data || t,
                        a = {
                            left: n.Position.PositionLeft,
                            top: n.Position.PositionTop,
                            position: "absolute",
                            opacity: n.Opacity,
                            zIndex: 99999
                        };
                    return i.a.createElement("div", {
                        id: "fake-" + n.Id,
                        className: "pin-item",
                        style: a
                    }, i.a.createElement("img", {
                        style: {
                            width: "32px",
                            height: "32px"
                        },
                        src: n.Source,
                        alt: n.Name
                    }))
                })),
                E = n(196),
                O = (n(870), Object(o.c)((function (e) {
                    var t = e.item,
                        n = e.zIndex,
                        a = t.data || t,
                        o = {
                            left: a.Position.PositionLeft,
                            top: a.Position.PositionTop,
                            width: a.Size.Width,
                            height: a.Size.Height,
                            position: "absolute",
                            zIndex: n || a.ZIndex
                        },
                        r = parseInt(a.Size.Height, 10) < 50;
                    return i.a.createElement("div", {
                        id: "fake-" + a.Id,
                        className: "rich-content-fake-item",
                        style: o
                    }, i.a.createElement("div", {
                        className: Object(d.a)(["fake-rich-content", {
                            "small-icon": r
                        }])
                    }, i.a.createElement(E.a, null)))
                }))),
                x = n(115),
                P = Object(o.c)((function (e) {
                    var t, n, o = e.item,
                        r = e.zIndex,
                        l = Object(a.useRef)(null),
                        d = null !== (t = o.data) && void 0 !== t ? t : o,
                        s = null === (n = d.Colors) || void 0 === n ? void 0 : n[0];
                    Object(a.useLayoutEffect)((function () {
                        var e = l.current;
                        e && (e.querySelectorAll(".color1").forEach((function (e) {
                            e.style.fill = s
                        })), x.e && e.querySelectorAll("linearGradient").forEach((function (e) {
                            var t = e.id;
                            e.setAttribute("id", "rerender"), e.setAttribute("id", t)
                        })))
                    }), [d.SourceSvg, s]);
                    var u = {
                        left: d.Position.PositionLeft,
                        top: d.Position.PositionTop,
                        width: d.Size.Width,
                        height: d.Size.Height,
                        backgroundColor: d.Background,
                        position: "absolute",
                        transform: c(d.Rotation),
                        opacity: d.Opacity,
                        zIndex: r || d.ZIndex
                    };
                    return i.a.createElement("div", {
                        ref: l,
                        id: "fake-" + d.Id,
                        className: "svg-item svg-item-fake",
                        style: u,
                        dangerouslySetInnerHTML: {
                            __html: d.SourceSvg
                        }
                    })
                })),
                z = n(143),
                w = n(163),
                S = n(230),
                T = (n(871), Object(o.c)((function (e) {
                    var t = e.item,
                        n = e.zIndex,
                        a = t.data || t,
                        o = Object(S.a)(a),
                        r = {
                            left: a.Position.PositionLeft,
                            top: a.Position.PositionTop,
                            width: a.Size.Width,
                            height: a.Size.Height,
                            backgroundColor: a.Background,
                            position: "absolute",
                            transform: c(a.Rotation),
                            color: a.Color,
                            opacity: a.Opacity,
                            fontSize: a.FontSize,
                            fontFamily: Object(z.a)(a.FontFamily),
                            padding: a.Padding,
                            zIndex: n || a.ZIndex,
                            lineHeight: a.LineHeight,
                            letterSpacing: a.LetterSpacing + "px",
                            wordWrap: a.Version < 2 ? "initial" : "break-word"
                        };
                    return i.a.createElement("div", {
                        id: "fake-" + a.Id,
                        className: Object(d.a)([w.e, o]),
                        style: r,
                        dangerouslySetInnerHTML: {
                            __html: a.TextMessage
                        }
                    })
                }))),
                j = n(872),
                B = n(875),
                L = n.n(B),
                H = n(6),
                N = n(239),
                C = n(35),
                G = Object(H.d)(C.a).withConfig({
                    displayName: "StyledBasicParagraph",
                    componentId: "sc-e2pvep"
                })((function (e) {
                    return {
                        color: e.theme.color.neutral.cement()
                    }
                })),
                A = function () {
                    var e = function (t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (e, t) {
                                e.__proto__ = t
                            } || function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function (t, n) {
                        function a() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (a.prototype = n.prototype, new a)
                    }
                }(),
                _ = function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.randomId = Object(j.v4)(), n.fakeBars = new Array(40).fill(1), n.renderBars = function () {
                            for (var e = n.props.theme, t = [], a = 0; a < 41; a += 1) t.push(128);
                            n.ctx.clearRect(0, 0, n.canvas.width, n.canvas.height), n.ctx.fillStyle = e.color.neutral.cement();
                            for (var i = 0; i < 41; i += 1) {
                                var o = 8 * i,
                                    r = -(t[i] / 2 || 5);
                                n.ctx.fillRect(o, n.canvas.height, 4, r)
                            }
                        }, n.canvasRef = i.a.createRef(), n
                    }
                    return A(t, e), t.prototype.componentDidMount = function () {
                        this.canvas = L()("#canva-element-fake" + this.randomId)[0], this.ctx = this.canvas.getContext("2d"), this.renderBars()
                    }, t.prototype.render = function () {
                        var e = this.props,
                            t = e.name,
                            n = e.width;
                        return i.a.createElement("div", {
                            className: "widget-audio-player"
                        }, i.a.createElement("div", {
                            className: "widget-audio-player-play-container"
                        }, i.a.createElement(N.a, null)), i.a.createElement("div", {
                            className: "widget-audio-player-info-container"
                        }, i.a.createElement("div", {
                            className: "widget-audio-player-bars-group",
                            id: "widget-audio-player-bars-group"
                        }, i.a.createElement("canvas", {
                            id: "canva-element-fake" + this.randomId,
                            style: {
                                width: "100%",
                                height: "42%"
                            }
                        })), i.a.createElement("div", {
                            className: "widget-audio-player-file-progress-bar"
                        }), i.a.createElement("div", {
                            className: "widget-audio-player-file-name-container"
                        }, i.a.createElement(G, {
                            className: "widget-audio-player-file-name",
                            style: {
                                fontSize: parseFloat(n) / 22
                            }
                        }, t))))
                    }, t
                }(a.Component),
                R = Object(H.g)(_),
                W = Object(o.c)((function (e) {
                    var t = e.item,
                        n = e.zIndex,
                        a = t.data || t,
                        o = a.Name,
                        r = a.Size,
                        l = a.Position,
                        d = a.Background,
                        s = a.Rotation,
                        u = a.Opacity,
                        m = a.ZIndex,
                        f = {
                            left: l.PositionLeft,
                            top: l.PositionTop,
                            width: r.Width,
                            height: r.Height,
                            backgroundColor: d,
                            position: "absolute",
                            transform: c(s),
                            opacity: u,
                            zIndex: n || m
                        };
                    return i.a.createElement("div", {
                        id: "fake-" + a.Id,
                        style: f
                    }, i.a.createElement(R, {
                        name: o,
                        width: r.Width
                    }))
                })),
                Z = Object(o.c)((function (e) {
                    var t = e.item,
                        n = e.zIndex,
                        a = t.data || t,
                        o = a.Id,
                        r = a.Size,
                        l = a.Position,
                        d = a.Background,
                        s = a.Rotation,
                        u = a.Opacity,
                        m = {
                            left: l.PositionLeft,
                            top: l.PositionTop,
                            width: r.Width,
                            height: r.Height,
                            backgroundColor: d,
                            position: "absolute",
                            transform: c(s),
                            opacity: u,
                            zIndex: n || a.ZIndex
                        };
                    return i.a.createElement("div", {
                        id: "fake-" + o,
                        className: "widget-video-fake-item",
                        style: m
                    }, i.a.createElement(y, null))
                })),
                V = n(60),
                D = "CHART_DATA_TABLE",
                M = function () {
                    return (M = Object.assign || function (e) {
                        for (var t, n = 1, a = arguments.length; n < a; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                Y = i.a.lazy((function () {
                    return n.e(1).then(n.bind(null, 881))
                })),
                F = function (e) {
                    return i.a.createElement(a.Suspense, {
                        fallback: null
                    }, i.a.createElement(Y, M({}, e)))
                },
                U = function () {
                    return (U = Object.assign || function (e) {
                        for (var t, n = 1, a = arguments.length; n < a; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                q = i.a.lazy((function () {
                    return Promise.all([n.e(2), n.e(0)]).then(n.bind(null, 879))
                })),
                J = function (e) {
                    return i.a.createElement(a.Suspense, {
                        fallback: null
                    }, i.a.createElement(q, U({}, e)))
                },
                X = function () {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var a = Array(e),
                        i = 0;
                    for (t = 0; t < n; t++)
                        for (var o = arguments[t], r = 0, c = o.length; r < c; r++, i++) a[i] = o[r];
                    return a
                },
                K = Object(o.c)((function (e) {
                    var t = e.item,
                        n = e.zIndex,
                        a = e.documentConfig,
                        o = t.data || t,
                        r = o.Data,
                        l = o.Id,
                        d = o.IsHidden,
                        s = o.Opacity,
                        u = o.Options,
                        m = o.Position,
                        f = o.Rotation,
                        p = o.Size,
                        g = o.ChartType,
                        h = o.Type,
                        y = o.ZIndex,
                        I = o.RawData,
                        v = o.tableRawData,
                        k = o.Version,
                        b = g || h,
                        E = b === D,
                        O = {
                            left: m.PositionLeft,
                            top: m.PositionTop,
                            width: p.Width,
                            height: p.Height,
                            zIndex: n || y,
                            display: d ? "none" : "inherit",
                            transform: c(f),
                            position: "absolute",
                            opacity: s
                        };
                    return i.a.createElement("div", {
                        id: "fake-" + l,
                        className: "chart-fake-item",
                        style: O
                    }, E ? i.a.createElement(F, {
                        cellStyles: u.CellStyles,
                        data: v || I,
                        id: l,
                        tableStyles: u.TableStyles,
                        normalWordBreak: k >= 1
                    }) : i.a.createElement(J, {
                        colors: X(u.Colors),
                        data: r,
                        enableAnimation: !1,
                        height: p.Height,
                        id: l,
                        invertYAxis: u.InvertYAxis,
                        prefix: u.Prefix,
                        showAxisLabels: u.AxisLabels,
                        showLegend: u.Legend,
                        showTooltip: u.Tooltip,
                        suffix: u.Suffix,
                        textColor: u.TextColor,
                        type: b,
                        width: p.Width,
                        documentConfig: a,
                        lineVariant: u.LineVariant,
                        showLineMarkers: u.ShowMarkers
                    }))
                })),
                Q = Object(o.c)((function (e) {
                    var t = e.item,
                        n = e.zIndex,
                        a = e.getZIndexOfItem,
                        o = e.idGenially,
                        r = t.data || t,
                        d = r.Id,
                        s = r.Position,
                        u = r.Rotation,
                        m = r.Size,
                        f = r.ZIndex,
                        p = r.IsHidden,
                        g = t.groupedItems,
                        h = {
                            left: s.PositionLeft,
                            top: s.PositionTop,
                            width: m.Width,
                            transform: c(u),
                            height: m.Height,
                            position: "absolute",
                            zIndex: n || f,
                            display: p ? "none" : "inherit"
                        };
                    return i.a.createElement("div", {
                        id: "fake-" + d,
                        className: "group-item",
                        style: h
                    }, g.map((function (e) {
                        return e.type === V.a.TYPE_AREA ? i.a.createElement(l, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e)
                        }) : e.type === V.a.TYPE_IMAGE ? i.a.createElement(k, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e),
                            idGenially: o
                        }) : e.type === V.a.TYPE_RICH_CONTENT ? i.a.createElement(O, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e)
                        }) : e.type === V.a.TYPE_SVG ? i.a.createElement(P, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e)
                        }) : e.type === V.a.TYPE_TEXT ? i.a.createElement(T, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e)
                        }) : e.type === V.a.TYPE_WIDGET_AUDIO ? i.a.createElement(W, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e)
                        }) : e.type === V.a.TYPE_WIDGET_VIDEO ? i.a.createElement(Z, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e)
                        }) : e.type === V.a.TYPE_CHART || e.Type === D ? i.a.createElement(K, {
                            key: "fake" + e.Id,
                            item: e,
                            zIndex: a(e)
                        }) : null
                    })))
                }));
            t.default = Object(o.c)((function (e) {
                var t, n, a, o, c, d, s = e.slide,
                    u = e.idGenially,
                    m = e.documentConfig,
                    f = e.getZIndexOfItem,
                    p = void 0 === f ? function () {} : f,
                    g = null !== (a = null !== (t = s.Background) && void 0 !== t ? t : null === (n = s.background) || void 0 === n ? void 0 : n.CurrentBackgroundImage) && void 0 !== a ? a : null === (o = s.background) || void 0 === o ? void 0 : o.currentBackgroundImage,
                    h = function (e) {
                        var t;
                        return e.data ? null !== (t = e.data.backgroundSize) && void 0 !== t ? t : e.data.SizeBackground : e.SizeBackground ? e.SizeBackground : e.BackgroundHeight || e.BackgroundWidth ? {
                            Width: e.BackgroundWidth,
                            Height: e.BackgroundHeight
                        } : {
                            Width: e.Width,
                            Height: e.Height
                        }
                    }(s),
                    y = function (e) {
                        var t;
                        return e.data ? null !== (t = e.data.backgroundPosition) && void 0 !== t ? t : e.data.PositionBackground : e.PositionBackground ? e.PositionBackground : e.PositionBackgroundLeft || e.PositionBackgroundTop ? {
                            PositionTop: e.PositionBackgroundTop,
                            PositionLeft: e.PositionBackgroundLeft
                        } : e.PositionBackground
                    }(s),
                    I = null !== (d = null === (c = s.data) || void 0 === c ? void 0 : c.OpacityBackground) && void 0 !== d ? d : s.OpacityBackground;
                return i.a.createElement(i.a.Fragment, null, i.a.createElement(r, {
                    key: s.Id,
                    image: g,
                    backgroundSize: h,
                    backgroundPosition: y,
                    opacity: I
                }), s.areas ? s.areas.map((function (e) {
                    return (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(l, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e)
                    })
                })) : null, s.images ? s.images.map((function (e) {
                    return (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(k, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e),
                        idGenially: u
                    })
                })) : null, s.pins ? s.pins.map((function (e) {
                    return i.a.createElement(b, {
                        key: e.Id,
                        item: e
                    })
                })) : null, s.richContents ? s.richContents.map((function (e) {
                    return (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(O, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e)
                    })
                })) : null, s.svgs ? s.svgs.map((function (e) {
                    return (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(P, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e)
                    })
                })) : null, s.texts ? s.texts.map((function (e) {
                    return (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(T, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e)
                    })
                })) : null, s.widgetsAudio ? s.widgetsAudio.map((function (e) {
                    return !(e.data ? e.data.IsBackground : e.IsBackground) && (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(W, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e)
                    })
                })) : null, s.widgetsVideo ? s.widgetsVideo.map((function (e) {
                    return (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(Z, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e)
                    })
                })) : null, s.groups ? s.groups.map((function (e) {
                    return i.a.createElement(Q, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e),
                        idGenially: u,
                        getZIndexOfItem: p
                    })
                })) : null, s.charts ? s.charts.map((function (e) {
                    return (e.data ? !e.data.IdGroup : !e.IdGroup) && i.a.createElement(K, {
                        key: e.Id,
                        item: e,
                        zIndex: p(e),
                        documentConfig: m
                    })
                })) : null)
            }))
        }
    }
]);
//# sourceMappingURL=slideThumbnail.e60b65c8.chunk.js.map