/*! For license information please see vendors~sketch.dc3091ff.chunk.js.LICENSE.txt */
(this["webpackJsonpclient-view-genially"] = this["webpackJsonpclient-view-genially"] || []).push([
    [7], {
        839: function (t, e, i) {
            (function (t) {
                var r, n = n || {
                    version: "4.4.0"
                };
                if (e.fabric = n, "undefined" !== typeof document && "undefined" !== typeof window) document instanceof("undefined" !== typeof HTMLDocument ? HTMLDocument : Document) ? n.document = document : n.document = document.implementation.createHTMLDocument(""), n.window = window;
                else {
                    var s = new(i(866).JSDOM)(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), {
                        features: {
                            FetchExternalResources: ["img"]
                        },
                        resources: "usable"
                    }).window;
                    n.document = s.document, n.jsdomImplForWrapper = i(867).implForWrapper, n.nodeCanvas = i(868).Canvas, n.window = s, DOMParser = n.window.DOMParser
                }

                function o(t, e) {
                    var i = t.canvas,
                        r = e.targetCanvas,
                        n = r.getContext("2d");
                    n.translate(0, r.height), n.scale(1, -1);
                    var s = i.height - r.height;
                    n.drawImage(i, 0, s, r.width, r.height, 0, 0, r.width, r.height)
                }

                function a(t, e) {
                    var i = e.targetCanvas.getContext("2d"),
                        r = e.destinationWidth,
                        n = e.destinationHeight,
                        s = r * n * 4,
                        o = new Uint8Array(this.imageBuffer, 0, s),
                        a = new Uint8ClampedArray(this.imageBuffer, 0, s);
                    t.readPixels(0, 0, r, n, t.RGBA, t.UNSIGNED_BYTE, o);
                    var h = new ImageData(a, r, n);
                    i.putImageData(h, 0, 0)
                }
                n.isTouchSupported = "ontouchstart" in n.window || "ontouchstart" in n.document || n.window && n.window.navigator && n.window.navigator.maxTouchPoints > 0, n.isLikelyNode = "undefined" !== typeof t && "undefined" === typeof window, n.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"], n.DPI = 96, n.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", n.commaWsp = "(?:\\s+,?\\s*|,\\s*)", n.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi, n.reNonWord = /[ \n\.,;!\?\-]/, n.fontPaths = {}, n.iMatrix = [1, 0, 0, 1, 0, 0], n.svgNS = "http://www.w3.org/2000/svg", n.perfLimitSizeTotal = 2097152, n.maxCacheSideLimit = 4096, n.minCacheSideLimit = 256, n.charWidthsCache = {}, n.textureSize = 2048, n.disableStyleCopyPaste = !1, n.enableGLFiltering = !0, n.devicePixelRatio = n.window.devicePixelRatio || n.window.webkitDevicePixelRatio || n.window.mozDevicePixelRatio || 1, n.browserShadowBlurConstant = 1, n.arcToSegmentsCache = {}, n.boundsOfCurveCache = {}, n.cachesBoundsOfCurve = !0, n.forceGLPutImageData = !1, n.initFilterBackend = function () {
                        return n.enableGLFiltering && n.isWebglSupported && n.isWebglSupported(n.textureSize) ? (console.log("max texture size: " + n.maxTextureSize), new n.WebglFilterBackend({
                            tileSize: n.textureSize
                        })) : n.Canvas2dFilterBackend ? new n.Canvas2dFilterBackend : void 0
                    }, "undefined" !== typeof document && "undefined" !== typeof window && (window.fabric = n),
                    function () {
                        function t(t, e) {
                            if (this.__eventListeners[t]) {
                                var i = this.__eventListeners[t];
                                e ? i[i.indexOf(e)] = !1 : n.util.array.fill(i, !1)
                            }
                        }
                        n.Observable = {
                            fire: function (t, e) {
                                if (!this.__eventListeners) return this;
                                var i = this.__eventListeners[t];
                                if (!i) return this;
                                for (var r = 0, n = i.length; r < n; r++) i[r] && i[r].call(this, e || {});
                                return this.__eventListeners[t] = i.filter((function (t) {
                                    return !1 !== t
                                })), this
                            },
                            on: function (t, e) {
                                if (this.__eventListeners || (this.__eventListeners = {}), 1 === arguments.length)
                                    for (var i in t) this.on(i, t[i]);
                                else this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(e);
                                return this
                            },
                            off: function (e, i) {
                                if (!this.__eventListeners) return this;
                                if (0 === arguments.length)
                                    for (e in this.__eventListeners) t.call(this, e);
                                else if (1 === arguments.length && "object" === typeof arguments[0])
                                    for (var r in e) t.call(this, r, e[r]);
                                else t.call(this, e, i);
                                return this
                            }
                        }
                    }(), n.Collection = {
                        _objects: [],
                        add: function () {
                            if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
                                for (var t = 0, e = arguments.length; t < e; t++) this._onObjectAdded(arguments[t]);
                            return this.renderOnAddRemove && this.requestRenderAll(), this
                        },
                        insertAt: function (t, e, i) {
                            var r = this._objects;
                            return i ? r[e] = t : r.splice(e, 0, t), this._onObjectAdded && this._onObjectAdded(t), this.renderOnAddRemove && this.requestRenderAll(), this
                        },
                        remove: function () {
                            for (var t, e = this._objects, i = !1, r = 0, n = arguments.length; r < n; r++) - 1 !== (t = e.indexOf(arguments[r])) && (i = !0, e.splice(t, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[r]));
                            return this.renderOnAddRemove && i && this.requestRenderAll(), this
                        },
                        forEachObject: function (t, e) {
                            for (var i = this.getObjects(), r = 0, n = i.length; r < n; r++) t.call(e, i[r], r, i);
                            return this
                        },
                        getObjects: function (t) {
                            return "undefined" === typeof t ? this._objects.concat() : this._objects.filter((function (e) {
                                return e.type === t
                            }))
                        },
                        item: function (t) {
                            return this._objects[t]
                        },
                        isEmpty: function () {
                            return 0 === this._objects.length
                        },
                        size: function () {
                            return this._objects.length
                        },
                        contains: function (t) {
                            return this._objects.indexOf(t) > -1
                        },
                        complexity: function () {
                            return this._objects.reduce((function (t, e) {
                                return t += e.complexity ? e.complexity() : 0
                            }), 0)
                        }
                    }, n.CommonMethods = {
                        _setOptions: function (t) {
                            for (var e in t) this.set(e, t[e])
                        },
                        _initGradient: function (t, e) {
                            !t || !t.colorStops || t instanceof n.Gradient || this.set(e, new n.Gradient(t))
                        },
                        _initPattern: function (t, e, i) {
                            !t || !t.source || t instanceof n.Pattern ? i && i() : this.set(e, new n.Pattern(t, i))
                        },
                        _setObject: function (t) {
                            for (var e in t) this._set(e, t[e])
                        },
                        set: function (t, e) {
                            return "object" === typeof t ? this._setObject(t) : this._set(t, e), this
                        },
                        _set: function (t, e) {
                            this[t] = e
                        },
                        toggle: function (t) {
                            var e = this.get(t);
                            return "boolean" === typeof e && this.set(t, !e), this
                        },
                        get: function (t) {
                            return this[t]
                        }
                    },
                    function (t) {
                        var e = Math.sqrt,
                            i = Math.atan2,
                            r = Math.pow,
                            s = Math.PI / 180,
                            o = Math.PI / 2;
                        n.util = {
                            cos: function (t) {
                                if (0 === t) return 1;
                                switch (t < 0 && (t = -t), t / o) {
                                    case 1:
                                    case 3:
                                        return 0;
                                    case 2:
                                        return -1
                                }
                                return Math.cos(t)
                            },
                            sin: function (t) {
                                if (0 === t) return 0;
                                var e = 1;
                                switch (t < 0 && (e = -1), t / o) {
                                    case 1:
                                        return e;
                                    case 2:
                                        return 0;
                                    case 3:
                                        return -e
                                }
                                return Math.sin(t)
                            },
                            removeFromArray: function (t, e) {
                                var i = t.indexOf(e);
                                return -1 !== i && t.splice(i, 1), t
                            },
                            getRandomInt: function (t, e) {
                                return Math.floor(Math.random() * (e - t + 1)) + t
                            },
                            degreesToRadians: function (t) {
                                return t * s
                            },
                            radiansToDegrees: function (t) {
                                return t / s
                            },
                            rotatePoint: function (t, e, i) {
                                t.subtractEquals(e);
                                var r = n.util.rotateVector(t, i);
                                return new n.Point(r.x, r.y).addEquals(e)
                            },
                            rotateVector: function (t, e) {
                                var i = n.util.sin(e),
                                    r = n.util.cos(e);
                                return {
                                    x: t.x * r - t.y * i,
                                    y: t.x * i + t.y * r
                                }
                            },
                            transformPoint: function (t, e, i) {
                                return i ? new n.Point(e[0] * t.x + e[2] * t.y, e[1] * t.x + e[3] * t.y) : new n.Point(e[0] * t.x + e[2] * t.y + e[4], e[1] * t.x + e[3] * t.y + e[5])
                            },
                            makeBoundingBoxFromPoints: function (t, e) {
                                if (e)
                                    for (var i = 0; i < t.length; i++) t[i] = n.util.transformPoint(t[i], e);
                                var r = [t[0].x, t[1].x, t[2].x, t[3].x],
                                    s = n.util.array.min(r),
                                    o = n.util.array.max(r) - s,
                                    a = [t[0].y, t[1].y, t[2].y, t[3].y],
                                    h = n.util.array.min(a);
                                return {
                                    left: s,
                                    top: h,
                                    width: o,
                                    height: n.util.array.max(a) - h
                                }
                            },
                            invertTransform: function (t) {
                                var e = 1 / (t[0] * t[3] - t[1] * t[2]),
                                    i = [e * t[3], -e * t[1], -e * t[2], e * t[0]],
                                    r = n.util.transformPoint({
                                        x: t[4],
                                        y: t[5]
                                    }, i, !0);
                                return i[4] = -r.x, i[5] = -r.y, i
                            },
                            toFixed: function (t, e) {
                                return parseFloat(Number(t).toFixed(e))
                            },
                            parseUnit: function (t, e) {
                                var i = /\D{0,2}$/.exec(t),
                                    r = parseFloat(t);
                                switch (e || (e = n.Text.DEFAULT_SVG_FONT_SIZE), i[0]) {
                                    case "mm":
                                        return r * n.DPI / 25.4;
                                    case "cm":
                                        return r * n.DPI / 2.54;
                                    case "in":
                                        return r * n.DPI;
                                    case "pt":
                                        return r * n.DPI / 72;
                                    case "pc":
                                        return r * n.DPI / 72 * 12;
                                    case "em":
                                        return r * e;
                                    default:
                                        return r
                                }
                            },
                            falseFunction: function () {
                                return !1
                            },
                            getKlass: function (t, e) {
                                return t = n.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1)), n.util.resolveNamespace(e)[t]
                            },
                            getSvgAttributes: function (t) {
                                var e = ["instantiated_by_use", "style", "id", "class"];
                                switch (t) {
                                    case "linearGradient":
                                        e = e.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
                                        break;
                                    case "radialGradient":
                                        e = e.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
                                        break;
                                    case "stop":
                                        e = e.concat(["offset", "stop-color", "stop-opacity"])
                                }
                                return e
                            },
                            resolveNamespace: function (e) {
                                if (!e) return n;
                                var i, r = e.split("."),
                                    s = r.length,
                                    o = t || n.window;
                                for (i = 0; i < s; ++i) o = o[r[i]];
                                return o
                            },
                            loadImage: function (t, e, i, r) {
                                if (t) {
                                    var s = n.util.createImage(),
                                        o = function () {
                                            e && e.call(i, s, !1), s = s.onload = s.onerror = null
                                        };
                                    s.onload = o, s.onerror = function () {
                                        n.log("Error loading " + s.src), e && e.call(i, null, !0), s = s.onload = s.onerror = null
                                    }, 0 !== t.indexOf("data") && void 0 !== r && null !== r && (s.crossOrigin = r), "data:image/svg" === t.substring(0, 14) && (s.onload = null, n.util.loadImageInDom(s, o)), s.src = t
                                } else e && e.call(i, t)
                            },
                            loadImageInDom: function (t, e) {
                                var i = n.document.createElement("div");
                                i.style.width = i.style.height = "1px", i.style.left = i.style.top = "-100%", i.style.position = "absolute", i.appendChild(t), n.document.querySelector("body").appendChild(i), t.onload = function () {
                                    e(), i.parentNode.removeChild(i), i = null
                                }
                            },
                            enlivenObjects: function (t, e, i, r) {
                                var s = [],
                                    o = 0,
                                    a = (t = t || []).length;

                                function h() {
                                    ++o === a && e && e(s.filter((function (t) {
                                        return t
                                    })))
                                }
                                a ? t.forEach((function (t, e) {
                                    t && t.type ? n.util.getKlass(t.type, i).fromObject(t, (function (i, n) {
                                        n || (s[e] = i), r && r(t, i, n), h()
                                    })) : h()
                                })) : e && e(s)
                            },
                            enlivenPatterns: function (t, e) {
                                function i() {
                                    ++s === o && e && e(r)
                                }
                                var r = [],
                                    s = 0,
                                    o = (t = t || []).length;
                                o ? t.forEach((function (t, e) {
                                    t && t.source ? new n.Pattern(t, (function (t) {
                                        r[e] = t, i()
                                    })) : (r[e] = t, i())
                                })) : e && e(r)
                            },
                            groupSVGElements: function (t, e, i) {
                                var r;
                                return t && 1 === t.length ? t[0] : (e && (e.width && e.height ? e.centerPoint = {
                                    x: e.width / 2,
                                    y: e.height / 2
                                } : (delete e.width, delete e.height)), r = new n.Group(t, e), "undefined" !== typeof i && (r.sourcePath = i), r)
                            },
                            populateWithProperties: function (t, e, i) {
                                if (i && "[object Array]" === Object.prototype.toString.call(i))
                                    for (var r = 0, n = i.length; r < n; r++) i[r] in t && (e[i[r]] = t[i[r]])
                            },
                            drawDashedLine: function (t, r, n, s, o, a) {
                                var h = s - r,
                                    c = o - n,
                                    l = e(h * h + c * c),
                                    u = i(c, h),
                                    f = a.length,
                                    d = 0,
                                    g = !0;
                                for (t.save(), t.translate(r, n), t.moveTo(0, 0), t.rotate(u), r = 0; l > r;)(r += a[d++ % f]) > l && (r = l), t[g ? "lineTo" : "moveTo"](r, 0), g = !g;
                                t.restore()
                            },
                            createCanvasElement: function () {
                                return n.document.createElement("canvas")
                            },
                            copyCanvasElement: function (t) {
                                var e = n.util.createCanvasElement();
                                return e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0), e
                            },
                            toDataURL: function (t, e, i) {
                                return t.toDataURL("image/" + e, i)
                            },
                            createImage: function () {
                                return n.document.createElement("img")
                            },
                            multiplyTransformMatrices: function (t, e, i) {
                                return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4], i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5]]
                            },
                            qrDecompose: function (t) {
                                var n = i(t[1], t[0]),
                                    o = r(t[0], 2) + r(t[1], 2),
                                    a = e(o),
                                    h = (t[0] * t[3] - t[2] * t[1]) / a,
                                    c = i(t[0] * t[2] + t[1] * t[3], o);
                                return {
                                    angle: n / s,
                                    scaleX: a,
                                    scaleY: h,
                                    skewX: c / s,
                                    skewY: 0,
                                    translateX: t[4],
                                    translateY: t[5]
                                }
                            },
                            calcRotateMatrix: function (t) {
                                if (!t.angle) return n.iMatrix.concat();
                                var e = n.util.degreesToRadians(t.angle),
                                    i = n.util.cos(e),
                                    r = n.util.sin(e);
                                return [i, r, -r, i, 0, 0]
                            },
                            calcDimensionsMatrix: function (t) {
                                var e = "undefined" === typeof t.scaleX ? 1 : t.scaleX,
                                    i = "undefined" === typeof t.scaleY ? 1 : t.scaleY,
                                    r = [t.flipX ? -e : e, 0, 0, t.flipY ? -i : i, 0, 0],
                                    s = n.util.multiplyTransformMatrices,
                                    o = n.util.degreesToRadians;
                                return t.skewX && (r = s(r, [1, 0, Math.tan(o(t.skewX)), 1], !0)), t.skewY && (r = s(r, [1, Math.tan(o(t.skewY)), 0, 1], !0)), r
                            },
                            composeMatrix: function (t) {
                                var e = [1, 0, 0, 1, t.translateX || 0, t.translateY || 0],
                                    i = n.util.multiplyTransformMatrices;
                                return t.angle && (e = i(e, n.util.calcRotateMatrix(t))), (1 !== t.scaleX || 1 !== t.scaleY || t.skewX || t.skewY || t.flipX || t.flipY) && (e = i(e, n.util.calcDimensionsMatrix(t))), e
                            },
                            resetObjectTransform: function (t) {
                                t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.flipX = !1, t.flipY = !1, t.rotate(0)
                            },
                            saveObjectTransform: function (t) {
                                return {
                                    scaleX: t.scaleX,
                                    scaleY: t.scaleY,
                                    skewX: t.skewX,
                                    skewY: t.skewY,
                                    angle: t.angle,
                                    left: t.left,
                                    flipX: t.flipX,
                                    flipY: t.flipY,
                                    top: t.top
                                }
                            },
                            isTransparent: function (t, e, i, r) {
                                r > 0 && (e > r ? e -= r : e = 0, i > r ? i -= r : i = 0);
                                var n, s = !0,
                                    o = t.getImageData(e, i, 2 * r || 1, 2 * r || 1),
                                    a = o.data.length;
                                for (n = 3; n < a && !1 !== (s = o.data[n] <= 0); n += 4);
                                return o = null, s
                            },
                            parsePreserveAspectRatioAttribute: function (t) {
                                var e, i = "meet",
                                    r = t.split(" ");
                                return r && r.length && ("meet" !== (i = r.pop()) && "slice" !== i ? (e = i, i = "meet") : r.length && (e = r.pop())), {
                                    meetOrSlice: i,
                                    alignX: "none" !== e ? e.slice(1, 4) : "none",
                                    alignY: "none" !== e ? e.slice(5, 8) : "none"
                                }
                            },
                            clearFabricFontCache: function (t) {
                                (t = (t || "").toLowerCase()) ? n.charWidthsCache[t] && delete n.charWidthsCache[t]: n.charWidthsCache = {}
                            },
                            limitDimsByArea: function (t, e) {
                                var i = Math.sqrt(e * t),
                                    r = Math.floor(e / i);
                                return {
                                    x: Math.floor(i),
                                    y: r
                                }
                            },
                            capValue: function (t, e, i) {
                                return Math.max(t, Math.min(e, i))
                            },
                            findScaleToFit: function (t, e) {
                                return Math.min(e.width / t.width, e.height / t.height)
                            },
                            findScaleToCover: function (t, e) {
                                return Math.max(e.width / t.width, e.height / t.height)
                            },
                            matrixToSVG: function (t) {
                                return "matrix(" + t.map((function (t) {
                                    return n.util.toFixed(t, n.Object.NUM_FRACTION_DIGITS)
                                })).join(" ") + ")"
                            },
                            removeTransformFromObject: function (t, e) {
                                var i = n.util.invertTransform(e),
                                    r = n.util.multiplyTransformMatrices(i, t.calcOwnMatrix());
                                n.util.applyTransformToObject(t, r)
                            },
                            addTransformToObject: function (t, e) {
                                n.util.applyTransformToObject(t, n.util.multiplyTransformMatrices(e, t.calcOwnMatrix()))
                            },
                            applyTransformToObject: function (t, e) {
                                var i = n.util.qrDecompose(e),
                                    r = new n.Point(i.translateX, i.translateY);
                                t.flipX = !1, t.flipY = !1, t.set("scaleX", i.scaleX), t.set("scaleY", i.scaleY), t.skewX = i.skewX, t.skewY = i.skewY, t.angle = i.angle, t.setPositionByOrigin(r, "center", "center")
                            },
                            sizeAfterTransform: function (t, e, i) {
                                var r = t / 2,
                                    s = e / 2,
                                    o = [{
                                        x: -r,
                                        y: -s
                                    }, {
                                        x: r,
                                        y: -s
                                    }, {
                                        x: -r,
                                        y: s
                                    }, {
                                        x: r,
                                        y: s
                                    }],
                                    a = n.util.calcDimensionsMatrix(i),
                                    h = n.util.makeBoundingBoxFromPoints(o, a);
                                return {
                                    x: h.width,
                                    y: h.height
                                }
                            }
                        }
                    }(e),
                    function () {
                        var t = Array.prototype.join,
                            e = {
                                m: 2,
                                l: 2,
                                h: 1,
                                v: 1,
                                c: 6,
                                s: 4,
                                q: 4,
                                t: 2,
                                a: 7
                            },
                            i = {
                                m: "l",
                                M: "L"
                            };

                        function r(t, e, i, r, s, o, a, h, c, l, u) {
                            var f = n.util.cos(t),
                                d = n.util.sin(t),
                                g = n.util.cos(e),
                                p = n.util.sin(e),
                                v = i * s * g - r * o * p + a,
                                m = r * s * g + i * o * p + h;
                            return ["C", l + c * (-i * s * d - r * o * f), u + c * (-r * s * d + i * o * f), v + c * (i * s * p + r * o * g), m + c * (r * s * p - i * o * g), v, m]
                        }

                        function s(t, e, i, s, a, h, c) {
                            var l = Math.PI,
                                u = c * l / 180,
                                f = n.util.sin(u),
                                d = n.util.cos(u),
                                g = 0,
                                p = 0,
                                v = -d * t * .5 - f * e * .5,
                                m = -d * e * .5 + f * t * .5,
                                y = (i = Math.abs(i)) * i,
                                _ = (s = Math.abs(s)) * s,
                                b = m * m,
                                x = v * v,
                                C = y * _ - y * b - _ * x,
                                S = 0;
                            if (C < 0) {
                                var w = Math.sqrt(1 - C / (y * _));
                                i *= w, s *= w
                            } else S = (a === h ? -1 : 1) * Math.sqrt(C / (y * b + _ * x));
                            var T = S * i * m / s,
                                O = -S * s * v / i,
                                k = d * T - f * O + .5 * t,
                                E = f * T + d * O + .5 * e,
                                P = o(1, 0, (v - T) / i, (m - O) / s),
                                A = o((v - T) / i, (m - O) / s, (-v - T) / i, (-m - O) / s);
                            0 === h && A > 0 ? A -= 2 * l : 1 === h && A < 0 && (A += 2 * l);
                            for (var j = Math.ceil(Math.abs(A / l * 2)), D = [], M = A / j, F = 8 / 3 * Math.sin(M / 4) * Math.sin(M / 4) / Math.sin(M / 2), L = P + M, I = 0; I < j; I++) D[I] = r(P, L, d, f, i, s, k, E, F, g, p), g = D[I][5], p = D[I][6], P = L, L += M;
                            return D
                        }

                        function o(t, e, i, r) {
                            var n = Math.atan2(e, t),
                                s = Math.atan2(r, i);
                            return s >= n ? s - n : 2 * Math.PI - (n - s)
                        }

                        function a(e, i, r, s, o, a, h, c) {
                            var l;
                            if (n.cachesBoundsOfCurve && (l = t.call(arguments), n.boundsOfCurveCache[l])) return n.boundsOfCurveCache[l];
                            var u, f, d, g, p, v, m, y, _ = Math.sqrt,
                                b = Math.min,
                                x = Math.max,
                                C = Math.abs,
                                S = [],
                                w = [
                                    [],
                                    []
                                ];
                            f = 6 * e - 12 * r + 6 * o, u = -3 * e + 9 * r - 9 * o + 3 * h, d = 3 * r - 3 * e;
                            for (var T = 0; T < 2; ++T)
                                if (T > 0 && (f = 6 * i - 12 * s + 6 * a, u = -3 * i + 9 * s - 9 * a + 3 * c, d = 3 * s - 3 * i), C(u) < 1e-12) {
                                    if (C(f) < 1e-12) continue;
                                    0 < (g = -d / f) && g < 1 && S.push(g)
                                } else(m = f * f - 4 * d * u) < 0 || (0 < (p = (-f + (y = _(m))) / (2 * u)) && p < 1 && S.push(p), 0 < (v = (-f - y) / (2 * u)) && v < 1 && S.push(v));
                            for (var O, k, E, P = S.length, A = P; P--;) O = (E = 1 - (g = S[P])) * E * E * e + 3 * E * E * g * r + 3 * E * g * g * o + g * g * g * h, w[0][P] = O, k = E * E * E * i + 3 * E * E * g * s + 3 * E * g * g * a + g * g * g * c, w[1][P] = k;
                            w[0][A] = e, w[1][A] = i, w[0][A + 1] = h, w[1][A + 1] = c;
                            var j = [{
                                x: b.apply(null, w[0]),
                                y: b.apply(null, w[1])
                            }, {
                                x: x.apply(null, w[0]),
                                y: x.apply(null, w[1])
                            }];
                            return n.cachesBoundsOfCurve && (n.boundsOfCurveCache[l] = j), j
                        }

                        function h(t, e, i) {
                            for (var r = i[1], n = i[2], o = i[3], a = i[4], h = i[5], c = s(i[6] - t, i[7] - e, r, n, a, h, o), l = 0, u = c.length; l < u; l++) c[l][1] += t, c[l][2] += e, c[l][3] += t, c[l][4] += e, c[l][5] += t, c[l][6] += e;
                            return c
                        }

                        function c(t, e, i, r) {
                            return Math.sqrt((i - t) * (i - t) + (r - e) * (r - e))
                        }

                        function l(t, e, i, r, n, s, o, a) {
                            return function (h) {
                                var c, l = (c = h) * c * c,
                                    u = function (t) {
                                        return 3 * t * t * (1 - t)
                                    }(h),
                                    f = function (t) {
                                        return 3 * t * (1 - t) * (1 - t)
                                    }(h),
                                    d = function (t) {
                                        return (1 - t) * (1 - t) * (1 - t)
                                    }(h);
                                return {
                                    x: o * l + n * u + i * f + t * d,
                                    y: a * l + s * u + r * f + e * d
                                }
                            }
                        }

                        function u(t, e, i, r, n, s, o, a) {
                            return function (h) {
                                var c = 1 - h,
                                    l = 3 * c * c * (i - t) + 6 * c * h * (n - i) + 3 * h * h * (o - n),
                                    u = 3 * c * c * (r - e) + 6 * c * h * (s - r) + 3 * h * h * (a - s);
                                return Math.atan2(u, l)
                            }
                        }

                        function f(t, e, i, r, n, s) {
                            return function (o) {
                                var a, h = (a = o) * a,
                                    c = function (t) {
                                        return 2 * t * (1 - t)
                                    }(o),
                                    l = function (t) {
                                        return (1 - t) * (1 - t)
                                    }(o);
                                return {
                                    x: n * h + i * c + t * l,
                                    y: s * h + r * c + e * l
                                }
                            }
                        }

                        function d(t, e, i, r, n, s) {
                            return function (o) {
                                var a = 1 - o,
                                    h = 2 * a * (i - t) + 2 * o * (n - i),
                                    c = 2 * a * (r - e) + 2 * o * (s - r);
                                return Math.atan2(c, h)
                            }
                        }

                        function g(t, e, i) {
                            var r, n, s = {
                                    x: e,
                                    y: i
                                },
                                o = 0;
                            for (n = .01; n <= 1; n += .01) r = t(n), o += c(s.x, s.y, r.x, r.y), s = r;
                            return o
                        }

                        function p(t, e) {
                            for (var i, r, n, s = 0, o = 0, a = t.iterator, h = {
                                    x: t.x,
                                    y: t.y
                                }, l = .01, u = t.angleFinder; o < e && s <= 1 && l > 1e-4;) i = a(s), n = s, (r = c(h.x, h.y, i.x, i.y)) + o > e ? s -= l /= 2 : (h = i, s += l, o += r);
                            return i.angle = u(n), i
                        }

                        function v(t) {
                            for (var e, i, r, n, s = 0, o = t.length, a = 0, h = 0, p = 0, v = 0, m = [], y = 0; y < o; y++) {
                                switch (r = {
                                    x: a,
                                    y: h,
                                    command: (e = t[y])[0]
                                }, e[0]) {
                                    case "M":
                                        r.length = 0, p = a = e[1], v = h = e[2];
                                        break;
                                    case "L":
                                        r.length = c(a, h, e[1], e[2]), a = e[1], h = e[2];
                                        break;
                                    case "C":
                                        i = l(a, h, e[1], e[2], e[3], e[4], e[5], e[6]), n = u(a, h, e[1], e[2], e[3], e[4], e[5], e[6]), r.iterator = i, r.angleFinder = n, r.length = g(i, a, h), a = e[5], h = e[6];
                                        break;
                                    case "Q":
                                        i = f(a, h, e[1], e[2], e[3], e[4]), n = d(a, h, e[1], e[2], e[3], e[4]), r.iterator = i, r.angleFinder = n, r.length = g(i, a, h), a = e[3], h = e[4];
                                        break;
                                    case "Z":
                                    case "z":
                                        r.destX = p, r.destY = v, r.length = c(a, h, p, v), a = p, h = v
                                }
                                s += r.length, m.push(r)
                            }
                            return m.push({
                                length: s,
                                x: a,
                                y: h
                            }), m
                        }
                        n.util.parsePath = function (t) {
                            var r, s, o, a, h, c = [],
                                l = [],
                                u = n.rePathCommand,
                                f = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*",
                                d = "(" + f + ")" + n.commaWsp,
                                g = "([01])" + n.commaWsp + "?",
                                p = new RegExp(d + "?" + d + "?" + d + g + g + d + "?(" + f + ")", "g");
                            if (!t || !t.match) return c;
                            for (var v, m = 0, y = (h = t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length; m < y; m++) {
                                a = (r = h[m]).slice(1).trim(), l.length = 0;
                                var _ = r.charAt(0);
                                if (v = [_], "a" === _.toLowerCase())
                                    for (var b; b = p.exec(a);)
                                        for (var x = 1; x < b.length; x++) l.push(b[x]);
                                else
                                    for (; o = u.exec(a);) l.push(o[0]);
                                x = 0;
                                for (var C = l.length; x < C; x++) s = parseFloat(l[x]), isNaN(s) || v.push(s);
                                var S = e[_.toLowerCase()],
                                    w = i[_] || _;
                                if (v.length - 1 > S)
                                    for (var T = 1, O = v.length; T < O; T += S) c.push([_].concat(v.slice(T, T + S))), _ = w;
                                else c.push(v)
                            }
                            return c
                        }, n.util.makePathSimpler = function (t) {
                            var e, i, r, n, s, o, a = 0,
                                c = 0,
                                l = t.length,
                                u = 0,
                                f = 0,
                                d = [];
                            for (i = 0; i < l; ++i) {
                                switch (r = !1, (e = t[i].slice(0))[0]) {
                                    case "l":
                                        e[0] = "L", e[1] += a, e[2] += c;
                                    case "L":
                                        a = e[1], c = e[2];
                                        break;
                                    case "h":
                                        e[1] += a;
                                    case "H":
                                        e[0] = "L", e[2] = c, a = e[1];
                                        break;
                                    case "v":
                                        e[1] += c;
                                    case "V":
                                        e[0] = "L", c = e[1], e[1] = a, e[2] = c;
                                        break;
                                    case "m":
                                        e[0] = "M", e[1] += a, e[2] += c;
                                    case "M":
                                        a = e[1], c = e[2], u = e[1], f = e[2];
                                        break;
                                    case "c":
                                        e[0] = "C", e[1] += a, e[2] += c, e[3] += a, e[4] += c, e[5] += a, e[6] += c;
                                    case "C":
                                        s = e[3], o = e[4], a = e[5], c = e[6];
                                        break;
                                    case "s":
                                        e[0] = "S", e[1] += a, e[2] += c, e[3] += a, e[4] += c;
                                    case "S":
                                        "C" === n ? (s = 2 * a - s, o = 2 * c - o) : (s = a, o = c), a = e[3], c = e[4], e[0] = "C", e[5] = e[3], e[6] = e[4], e[3] = e[1], e[4] = e[2], e[1] = s, e[2] = o, s = e[3], o = e[4];
                                        break;
                                    case "q":
                                        e[0] = "Q", e[1] += a, e[2] += c, e[3] += a, e[4] += c;
                                    case "Q":
                                        s = e[1], o = e[2], a = e[3], c = e[4];
                                        break;
                                    case "t":
                                        e[0] = "T", e[1] += a, e[2] += c;
                                    case "T":
                                        "Q" === n ? (s = 2 * a - s, o = 2 * c - o) : (s = a, o = c), e[0] = "Q", a = e[1], c = e[2], e[1] = s, e[2] = o, e[3] = a, e[4] = c;
                                        break;
                                    case "a":
                                        e[0] = "A", e[6] += a, e[7] += c;
                                    case "A":
                                        r = !0, d = d.concat(h(a, c, e)), a = e[6], c = e[7];
                                        break;
                                    case "z":
                                    case "Z":
                                        a = u, c = f
                                }
                                r || d.push(e), n = e[0]
                            }
                            return d
                        }, n.util.getPathSegmentsInfo = v, n.util.fromArcToBeziers = h, n.util.fromArcToBeizers = h, n.util.getBoundsOfCurve = a, n.util.getPointOnPath = function (t, e, i) {
                            i || (i = v(t));
                            for (var r = 0; e - i[r].length > 0 && r < i.length - 2;) e -= i[r].length, r++;
                            var s, o = i[r],
                                a = e / o.length,
                                h = o.command,
                                c = t[r];
                            switch (h) {
                                case "M":
                                    return {
                                        x: o.x, y: o.y, angle: 0
                                    };
                                case "Z":
                                case "z":
                                    return (s = new n.Point(o.x, o.y).lerp(new n.Point(o.destX, o.destY), a)).angle = Math.atan2(o.destY - o.y, o.destX - o.x), s;
                                case "L":
                                    return (s = new n.Point(o.x, o.y).lerp(new n.Point(c[1], c[2]), a)).angle = Math.atan2(c[2] - o.y, c[1] - o.x), s;
                                case "C":
                                case "Q":
                                    return p(o, e)
                            }
                        }, n.util.getBoundsOfArc = function (t, e, i, r, n, o, h, c, l) {
                            for (var u, f = 0, d = 0, g = [], p = s(c - t, l - e, i, r, o, h, n), v = 0, m = p.length; v < m; v++) u = a(f, d, p[v][1], p[v][2], p[v][3], p[v][4], p[v][5], p[v][6]), g.push({
                                x: u[0].x + t,
                                y: u[0].y + e
                            }), g.push({
                                x: u[1].x + t,
                                y: u[1].y + e
                            }), f = p[v][5], d = p[v][6];
                            return g
                        }, n.util.drawArc = function (t, e, i, r) {
                            h(e, i, r = r.slice(0).unshift("X")).forEach((function (e) {
                                t.bezierCurveTo.apply(t, e.slice(1))
                            }))
                        }
                    }(),
                    function () {
                        var t = Array.prototype.slice;

                        function e(t, e, i) {
                            if (t && 0 !== t.length) {
                                var r = t.length - 1,
                                    n = e ? t[r][e] : t[r];
                                if (e)
                                    for (; r--;) i(t[r][e], n) && (n = t[r][e]);
                                else
                                    for (; r--;) i(t[r], n) && (n = t[r]);
                                return n
                            }
                        }
                        n.util.array = {
                            fill: function (t, e) {
                                for (var i = t.length; i--;) t[i] = e;
                                return t
                            },
                            invoke: function (e, i) {
                                for (var r = t.call(arguments, 2), n = [], s = 0, o = e.length; s < o; s++) n[s] = r.length ? e[s][i].apply(e[s], r) : e[s][i].call(e[s]);
                                return n
                            },
                            min: function (t, i) {
                                return e(t, i, (function (t, e) {
                                    return t < e
                                }))
                            },
                            max: function (t, i) {
                                return e(t, i, (function (t, e) {
                                    return t >= e
                                }))
                            }
                        }
                    }(),
                    function () {
                        function t(e, i, r) {
                            if (r)
                                if (!n.isLikelyNode && i instanceof Element) e = i;
                                else if (i instanceof Array) {
                                e = [];
                                for (var s = 0, o = i.length; s < o; s++) e[s] = t({}, i[s], r)
                            } else if (i && "object" === typeof i)
                                for (var a in i) "canvas" === a || "group" === a ? e[a] = null : i.hasOwnProperty(a) && (e[a] = t({}, i[a], r));
                            else e = i;
                            else
                                for (var a in i) e[a] = i[a];
                            return e
                        }
                        n.util.object = {
                            extend: t,
                            clone: function (e, i) {
                                return t({}, e, i)
                            }
                        }, n.util.object.extend(n.util, n.Observable)
                    }(),
                    function () {
                        function t(t, e) {
                            var i = t.charCodeAt(e);
                            if (isNaN(i)) return "";
                            if (i < 55296 || i > 57343) return t.charAt(e);
                            if (55296 <= i && i <= 56319) {
                                if (t.length <= e + 1) throw "High surrogate without following low surrogate";
                                var r = t.charCodeAt(e + 1);
                                if (56320 > r || r > 57343) throw "High surrogate without following low surrogate";
                                return t.charAt(e) + t.charAt(e + 1)
                            }
                            if (0 === e) throw "Low surrogate without preceding high surrogate";
                            var n = t.charCodeAt(e - 1);
                            if (55296 > n || n > 56319) throw "Low surrogate without preceding high surrogate";
                            return !1
                        }
                        n.util.string = {
                            camelize: function (t) {
                                return t.replace(/-+(.)?/g, (function (t, e) {
                                    return e ? e.toUpperCase() : ""
                                }))
                            },
                            capitalize: function (t, e) {
                                return t.charAt(0).toUpperCase() + (e ? t.slice(1) : t.slice(1).toLowerCase())
                            },
                            escapeXml: function (t) {
                                return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                            },
                            graphemeSplit: function (e) {
                                var i, r = 0,
                                    n = [];
                                for (r = 0; r < e.length; r++) !1 !== (i = t(e, r)) && n.push(i);
                                return n
                            }
                        }
                    }(),
                    function () {
                        var t = Array.prototype.slice,
                            e = function () {},
                            i = function () {
                                for (var t in {
                                        toString: 1
                                    })
                                    if ("toString" === t) return !1;
                                return !0
                            }(),
                            r = function (t, e, r) {
                                for (var n in e) n in t.prototype && "function" === typeof t.prototype[n] && (e[n] + "").indexOf("callSuper") > -1 ? t.prototype[n] = function (t) {
                                    return function () {
                                        var i = this.constructor.superclass;
                                        this.constructor.superclass = r;
                                        var n = e[t].apply(this, arguments);
                                        if (this.constructor.superclass = i, "initialize" !== t) return n
                                    }
                                }(n) : t.prototype[n] = e[n], i && (e.toString !== Object.prototype.toString && (t.prototype.toString = e.toString), e.valueOf !== Object.prototype.valueOf && (t.prototype.valueOf = e.valueOf))
                            };

                        function s() {}

                        function o(e) {
                            for (var i = null, r = this; r.constructor.superclass;) {
                                var n = r.constructor.superclass.prototype[e];
                                if (r[e] !== n) {
                                    i = n;
                                    break
                                }
                                r = r.constructor.superclass.prototype
                            }
                            return i ? arguments.length > 1 ? i.apply(this, t.call(arguments, 1)) : i.call(this) : console.log("tried to callSuper " + e + ", method not found in prototype chain", this)
                        }
                        n.util.createClass = function () {
                            var i = null,
                                n = t.call(arguments, 0);

                            function a() {
                                this.initialize.apply(this, arguments)
                            }
                            "function" === typeof n[0] && (i = n.shift()), a.superclass = i, a.subclasses = [], i && (s.prototype = i.prototype, a.prototype = new s, i.subclasses.push(a));
                            for (var h = 0, c = n.length; h < c; h++) r(a, n[h], i);
                            return a.prototype.initialize || (a.prototype.initialize = e), a.prototype.constructor = a, a.prototype.callSuper = o, a
                        }
                    }(),
                    function () {
                        var t = !!n.document.createElement("div").attachEvent,
                            e = ["touchstart", "touchmove", "touchend"];
                        n.util.addListener = function (e, i, r, n) {
                            e && e.addEventListener(i, r, !t && n)
                        }, n.util.removeListener = function (e, i, r, n) {
                            e && e.removeEventListener(i, r, !t && n)
                        }, n.util.getPointer = function (t) {
                            var e = t.target,
                                i = n.util.getScrollLeftTop(e),
                                r = function (t) {
                                    var e = t.changedTouches;
                                    return e && e[0] ? e[0] : t
                                }(t);
                            return {
                                x: r.clientX + i.left,
                                y: r.clientY + i.top
                            }
                        }, n.util.isTouchEvent = function (t) {
                            return e.indexOf(t.type) > -1 || "touch" === t.pointerType
                        }
                    }(),
                    function () {
                        var t = n.document.createElement("div"),
                            e = "string" === typeof t.style.opacity,
                            i = "string" === typeof t.style.filter,
                            r = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,
                            s = function (t) {
                                return t
                            };
                        e ? s = function (t, e) {
                            return t.style.opacity = e, t
                        } : i && (s = function (t, e) {
                            var i = t.style;
                            return t.currentStyle && !t.currentStyle.hasLayout && (i.zoom = 1), r.test(i.filter) ? (e = e >= .9999 ? "" : "alpha(opacity=" + 100 * e + ")", i.filter = i.filter.replace(r, e)) : i.filter += " alpha(opacity=" + 100 * e + ")", t
                        }), n.util.setStyle = function (t, e) {
                            var i = t.style;
                            if (!i) return t;
                            if ("string" === typeof e) return t.style.cssText += ";" + e, e.indexOf("opacity") > -1 ? s(t, e.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;
                            for (var r in e) {
                                if ("opacity" === r) s(t, e[r]);
                                else i["float" === r || "cssFloat" === r ? "undefined" === typeof i.styleFloat ? "cssFloat" : "styleFloat" : r] = e[r]
                            }
                            return t
                        }
                    }(),
                    function () {
                        var t = Array.prototype.slice;
                        var e, i, r = function (e) {
                            return t.call(e, 0)
                        };
                        try {
                            e = r(n.document.childNodes) instanceof Array
                        } catch (a) {}

                        function s(t, e) {
                            var i = n.document.createElement(t);
                            for (var r in e) "class" === r ? i.className = e[r] : "for" === r ? i.htmlFor = e[r] : i.setAttribute(r, e[r]);
                            return i
                        }

                        function o(t) {
                            for (var e = 0, i = 0, r = n.document.documentElement, s = n.document.body || {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                }; t && (t.parentNode || t.host) && ((t = t.parentNode || t.host) === n.document ? (e = s.scrollLeft || r.scrollLeft || 0, i = s.scrollTop || r.scrollTop || 0) : (e += t.scrollLeft || 0, i += t.scrollTop || 0), 1 !== t.nodeType || "fixed" !== t.style.position););
                            return {
                                left: e,
                                top: i
                            }
                        }
                        e || (r = function (t) {
                                for (var e = new Array(t.length), i = t.length; i--;) e[i] = t[i];
                                return e
                            }), i = n.document.defaultView && n.document.defaultView.getComputedStyle ? function (t, e) {
                                var i = n.document.defaultView.getComputedStyle(t, null);
                                return i ? i[e] : void 0
                            } : function (t, e) {
                                var i = t.style[e];
                                return !i && t.currentStyle && (i = t.currentStyle[e]), i
                            },
                            function () {
                                var t = n.document.documentElement.style,
                                    e = "userSelect" in t ? "userSelect" : "MozUserSelect" in t ? "MozUserSelect" : "WebkitUserSelect" in t ? "WebkitUserSelect" : "KhtmlUserSelect" in t ? "KhtmlUserSelect" : "";
                                n.util.makeElementUnselectable = function (t) {
                                    return "undefined" !== typeof t.onselectstart && (t.onselectstart = n.util.falseFunction), e ? t.style[e] = "none" : "string" === typeof t.unselectable && (t.unselectable = "on"), t
                                }, n.util.makeElementSelectable = function (t) {
                                    return "undefined" !== typeof t.onselectstart && (t.onselectstart = null), e ? t.style[e] = "" : "string" === typeof t.unselectable && (t.unselectable = ""), t
                                }
                            }(), n.util.setImageSmoothing = function (t, e) {
                                t.imageSmoothingEnabled = t.imageSmoothingEnabled || t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled || t.oImageSmoothingEnabled, t.imageSmoothingEnabled = e
                            }, n.util.getById = function (t) {
                                return "string" === typeof t ? n.document.getElementById(t) : t
                            }, n.util.toArray = r, n.util.addClass = function (t, e) {
                                t && -1 === (" " + t.className + " ").indexOf(" " + e + " ") && (t.className += (t.className ? " " : "") + e)
                            }, n.util.makeElement = s, n.util.wrapElement = function (t, e, i) {
                                return "string" === typeof e && (e = s(e, i)), t.parentNode && t.parentNode.replaceChild(e, t), e.appendChild(t), e
                            }, n.util.getScrollLeftTop = o, n.util.getElementOffset = function (t) {
                                var e, r, n = t && t.ownerDocument,
                                    s = {
                                        left: 0,
                                        top: 0
                                    },
                                    a = {
                                        left: 0,
                                        top: 0
                                    },
                                    h = {
                                        borderLeftWidth: "left",
                                        borderTopWidth: "top",
                                        paddingLeft: "left",
                                        paddingTop: "top"
                                    };
                                if (!n) return a;
                                for (var c in h) a[h[c]] += parseInt(i(t, c), 10) || 0;
                                return e = n.documentElement, "undefined" !== typeof t.getBoundingClientRect && (s = t.getBoundingClientRect()), r = o(t), {
                                    left: s.left + r.left - (e.clientLeft || 0) + a.left,
                                    top: s.top + r.top - (e.clientTop || 0) + a.top
                                }
                            }, n.util.getNodeCanvas = function (t) {
                                var e = n.jsdomImplForWrapper(t);
                                return e._canvas || e._image
                            }, n.util.cleanUpJsdomNode = function (t) {
                                if (n.isLikelyNode) {
                                    var e = n.jsdomImplForWrapper(t);
                                    e && (e._image = null, e._canvas = null, e._currentSrc = null, e._attributes = null, e._classList = null)
                                }
                            }
                    }(),
                    function () {
                        function t() {}
                        n.util.request = function (e, i) {
                            i || (i = {});
                            var r = i.method ? i.method.toUpperCase() : "GET",
                                s = i.onComplete || function () {},
                                o = new n.window.XMLHttpRequest,
                                a = i.body || i.parameters;
                            return o.onreadystatechange = function () {
                                4 === o.readyState && (s(o), o.onreadystatechange = t)
                            }, "GET" === r && (a = null, "string" === typeof i.parameters && (e = function (t, e) {
                                return t + (/\?/.test(t) ? "&" : "?") + e
                            }(e, i.parameters))), o.open(r, e, !0), "POST" !== r && "PUT" !== r || o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(a), o
                        }
                    }(), n.log = console.log, n.warn = console.warn,
                    function () {
                        function t() {
                            return !1
                        }

                        function e(t, e, i, r) {
                            return -i * Math.cos(t / r * (Math.PI / 2)) + i + e
                        }
                        var i = n.window.requestAnimationFrame || n.window.webkitRequestAnimationFrame || n.window.mozRequestAnimationFrame || n.window.oRequestAnimationFrame || n.window.msRequestAnimationFrame || function (t) {
                                return n.window.setTimeout(t, 1e3 / 60)
                            },
                            r = n.window.cancelAnimationFrame || n.window.clearTimeout;

                        function s() {
                            return i.apply(n.window, arguments)
                        }
                        n.util.animate = function (i) {
                            s((function (r) {
                                i || (i = {});
                                var n, o = r || +new Date,
                                    a = i.duration || 500,
                                    h = o + a,
                                    c = i.onChange || t,
                                    l = i.abort || t,
                                    u = i.onComplete || t,
                                    f = i.easing || e,
                                    d = "startValue" in i ? i.startValue : 0,
                                    g = "endValue" in i ? i.endValue : 100,
                                    p = i.byValue || g - d;
                                i.onStart && i.onStart(),
                                    function t(e) {
                                        var i = (n = e || +new Date) > h ? a : n - o,
                                            r = i / a,
                                            v = f(i, d, p, a),
                                            m = Math.abs((v - d) / p);
                                        if (!l()) return n > h ? (c(g, 1, 1), void u(g, 1, 1)) : (c(v, m, r), void s(t));
                                        u(g, 1, 1)
                                    }(o)
                            }))
                        }, n.util.requestAnimFrame = s, n.util.cancelAnimFrame = function () {
                            return r.apply(n.window, arguments)
                        }
                    }(),
                    function () {
                        function t(t, e, i) {
                            var r = "rgba(" + parseInt(t[0] + i * (e[0] - t[0]), 10) + "," + parseInt(t[1] + i * (e[1] - t[1]), 10) + "," + parseInt(t[2] + i * (e[2] - t[2]), 10);
                            return r += "," + (t && e ? parseFloat(t[3] + i * (e[3] - t[3])) : 1), r += ")"
                        }
                        n.util.animateColor = function (e, i, r, s) {
                            var o = new n.Color(e).getSource(),
                                a = new n.Color(i).getSource(),
                                h = s.onComplete,
                                c = s.onChange;
                            s = s || {}, n.util.animate(n.util.object.extend(s, {
                                duration: r || 500,
                                startValue: o,
                                endValue: a,
                                byValue: a,
                                easing: function (e, i, r, n) {
                                    return t(i, r, s.colorEasing ? s.colorEasing(e, n) : 1 - Math.cos(e / n * (Math.PI / 2)))
                                },
                                onComplete: function (e, i, r) {
                                    if (h) return h(t(a, a, 0), i, r)
                                },
                                onChange: function (e, i, r) {
                                    if (c) {
                                        if (Array.isArray(e)) return c(t(e, e, 0), i, r);
                                        c(e, i, r)
                                    }
                                }
                            }))
                        }
                    }(),
                    function () {
                        function t(t, e, i, r) {
                            return t < Math.abs(e) ? (t = e, r = i / 4) : r = 0 === e && 0 === t ? i / (2 * Math.PI) * Math.asin(1) : i / (2 * Math.PI) * Math.asin(e / t), {
                                a: t,
                                c: e,
                                p: i,
                                s: r
                            }
                        }

                        function e(t, e, i) {
                            return t.a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - t.s) * (2 * Math.PI) / t.p)
                        }

                        function i(t, e, i, n) {
                            return i - r(n - t, 0, i, n) + e
                        }

                        function r(t, e, i, r) {
                            return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                        }
                        n.util.ease = {
                            easeInQuad: function (t, e, i, r) {
                                return i * (t /= r) * t + e
                            },
                            easeOutQuad: function (t, e, i, r) {
                                return -i * (t /= r) * (t - 2) + e
                            },
                            easeInOutQuad: function (t, e, i, r) {
                                return (t /= r / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
                            },
                            easeInCubic: function (t, e, i, r) {
                                return i * (t /= r) * t * t + e
                            },
                            easeOutCubic: function (t, e, i, r) {
                                return i * ((t = t / r - 1) * t * t + 1) + e
                            },
                            easeInOutCubic: function (t, e, i, r) {
                                return (t /= r / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
                            },
                            easeInQuart: function (t, e, i, r) {
                                return i * (t /= r) * t * t * t + e
                            },
                            easeOutQuart: function (t, e, i, r) {
                                return -i * ((t = t / r - 1) * t * t * t - 1) + e
                            },
                            easeInOutQuart: function (t, e, i, r) {
                                return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
                            },
                            easeInQuint: function (t, e, i, r) {
                                return i * (t /= r) * t * t * t * t + e
                            },
                            easeOutQuint: function (t, e, i, r) {
                                return i * ((t = t / r - 1) * t * t * t * t + 1) + e
                            },
                            easeInOutQuint: function (t, e, i, r) {
                                return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
                            },
                            easeInSine: function (t, e, i, r) {
                                return -i * Math.cos(t / r * (Math.PI / 2)) + i + e
                            },
                            easeOutSine: function (t, e, i, r) {
                                return i * Math.sin(t / r * (Math.PI / 2)) + e
                            },
                            easeInOutSine: function (t, e, i, r) {
                                return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                            },
                            easeInExpo: function (t, e, i, r) {
                                return 0 === t ? e : i * Math.pow(2, 10 * (t / r - 1)) + e
                            },
                            easeOutExpo: function (t, e, i, r) {
                                return t === r ? e + i : i * (1 - Math.pow(2, -10 * t / r)) + e
                            },
                            easeInOutExpo: function (t, e, i, r) {
                                return 0 === t ? e : t === r ? e + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (2 - Math.pow(2, -10 * --t)) + e
                            },
                            easeInCirc: function (t, e, i, r) {
                                return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                            },
                            easeOutCirc: function (t, e, i, r) {
                                return i * Math.sqrt(1 - (t = t / r - 1) * t) + e
                            },
                            easeInOutCirc: function (t, e, i, r) {
                                return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                            },
                            easeInElastic: function (i, r, n, s) {
                                var o = 0;
                                return 0 === i ? r : 1 === (i /= s) ? r + n : (o || (o = .3 * s), -e(t(n, n, o, 1.70158), i, s) + r)
                            },
                            easeOutElastic: function (e, i, r, n) {
                                var s = 0;
                                if (0 === e) return i;
                                if (1 === (e /= n)) return i + r;
                                s || (s = .3 * n);
                                var o = t(r, r, s, 1.70158);
                                return o.a * Math.pow(2, -10 * e) * Math.sin((e * n - o.s) * (2 * Math.PI) / o.p) + o.c + i
                            },
                            easeInOutElastic: function (i, r, n, s) {
                                var o = 0;
                                if (0 === i) return r;
                                if (2 === (i /= s / 2)) return r + n;
                                o || (o = s * (.3 * 1.5));
                                var a = t(n, n, o, 1.70158);
                                return i < 1 ? -.5 * e(a, i, s) + r : a.a * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * s - a.s) * (2 * Math.PI) / a.p) * .5 + a.c + r
                            },
                            easeInBack: function (t, e, i, r, n) {
                                return void 0 === n && (n = 1.70158), i * (t /= r) * t * ((n + 1) * t - n) + e
                            },
                            easeOutBack: function (t, e, i, r, n) {
                                return void 0 === n && (n = 1.70158), i * ((t = t / r - 1) * t * ((n + 1) * t + n) + 1) + e
                            },
                            easeInOutBack: function (t, e, i, r, n) {
                                return void 0 === n && (n = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : i / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
                            },
                            easeInBounce: i,
                            easeOutBounce: r,
                            easeInOutBounce: function (t, e, n, s) {
                                return t < s / 2 ? .5 * i(2 * t, 0, n, s) + e : .5 * r(2 * t - s, 0, n, s) + .5 * n + e
                            }
                        }
                    }(),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend,
                            r = e.util.object.clone,
                            n = e.util.toFixed,
                            s = e.util.parseUnit,
                            o = e.util.multiplyTransformMatrices,
                            a = {
                                cx: "left",
                                x: "left",
                                r: "radius",
                                cy: "top",
                                y: "top",
                                display: "visible",
                                visibility: "visible",
                                transform: "transformMatrix",
                                "fill-opacity": "fillOpacity",
                                "fill-rule": "fillRule",
                                "font-family": "fontFamily",
                                "font-size": "fontSize",
                                "font-style": "fontStyle",
                                "font-weight": "fontWeight",
                                "letter-spacing": "charSpacing",
                                "paint-order": "paintFirst",
                                "stroke-dasharray": "strokeDashArray",
                                "stroke-dashoffset": "strokeDashOffset",
                                "stroke-linecap": "strokeLineCap",
                                "stroke-linejoin": "strokeLineJoin",
                                "stroke-miterlimit": "strokeMiterLimit",
                                "stroke-opacity": "strokeOpacity",
                                "stroke-width": "strokeWidth",
                                "text-decoration": "textDecoration",
                                "text-anchor": "textAnchor",
                                opacity: "opacity",
                                "clip-path": "clipPath",
                                "clip-rule": "clipRule",
                                "vector-effect": "strokeUniform",
                                "image-rendering": "imageSmoothing"
                            },
                            h = {
                                stroke: "strokeOpacity",
                                fill: "fillOpacity"
                            },
                            c = "font-size",
                            l = "clip-path";

                        function u(t) {
                            return t in a ? a[t] : t
                        }

                        function f(t, i, r, n) {
                            var a, h = "[object Array]" === Object.prototype.toString.call(i);
                            if ("fill" !== t && "stroke" !== t || "none" !== i) {
                                if ("strokeUniform" === t) return "non-scaling-stroke" === i;
                                if ("strokeDashArray" === t) i = "none" === i ? null : i.replace(/,/g, " ").split(/\s+/).map(parseFloat);
                                else if ("transformMatrix" === t) i = r && r.transformMatrix ? o(r.transformMatrix, e.parseTransformAttribute(i)) : e.parseTransformAttribute(i);
                                else if ("visible" === t) i = "none" !== i && "hidden" !== i, r && !1 === r.visible && (i = !1);
                                else if ("opacity" === t) i = parseFloat(i), r && "undefined" !== typeof r.opacity && (i *= r.opacity);
                                else if ("textAnchor" === t) i = "start" === i ? "left" : "end" === i ? "right" : "center";
                                else if ("charSpacing" === t) a = s(i, n) / n * 1e3;
                                else if ("paintFirst" === t) {
                                    var c = i.indexOf("fill"),
                                        l = i.indexOf("stroke");
                                    i = "fill";
                                    (c > -1 && l > -1 && l < c || -1 === c && l > -1) && (i = "stroke")
                                } else {
                                    if ("href" === t || "xlink:href" === t || "font" === t) return i;
                                    if ("imageSmoothing" === t) return "optimizeQuality" === i;
                                    a = h ? i.map(s) : s(i, n)
                                }
                            } else i = "";
                            return !h && isNaN(a) ? i : a
                        }

                        function d(t) {
                            return new RegExp("^(" + t.join("|") + ")\\b", "i")
                        }

                        function g(t, e) {
                            var i, r, n, s, o = [];
                            for (n = 0, s = e.length; n < s; n++) i = e[n], r = t.getElementsByTagName(i), o = o.concat(Array.prototype.slice.call(r));
                            return o
                        }

                        function p(t, e) {
                            var i, r = !0;
                            return (i = v(t, e.pop())) && e.length && (r = function (t, e) {
                                var i, r = !0;
                                for (; t.parentNode && 1 === t.parentNode.nodeType && e.length;) r && (i = e.pop()), r = v(t = t.parentNode, i);
                                return 0 === e.length
                            }(t, e)), i && r && 0 === e.length
                        }

                        function v(t, e) {
                            var i, r, n = t.nodeName,
                                s = t.getAttribute("class"),
                                o = t.getAttribute("id");
                            if (i = new RegExp("^" + n, "i"), e = e.replace(i, ""), o && e.length && (i = new RegExp("#" + o + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "")), s && e.length)
                                for (r = (s = s.split(" ")).length; r--;) i = new RegExp("\\." + s[r] + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "");
                            return 0 === e.length
                        }

                        function m(t, e) {
                            var i;
                            if (t.getElementById && (i = t.getElementById(e)), i) return i;
                            var r, n, s, o = t.getElementsByTagName("*");
                            for (n = 0, s = o.length; n < s; n++)
                                if (e === (r = o[n]).getAttribute("id")) return r
                        }
                        e.svgValidTagNamesRegEx = d(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]), e.svgViewBoxElementsRegEx = d(["symbol", "image", "marker", "pattern", "view", "svg"]), e.svgInvalidAncestorsRegEx = d(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]), e.svgValidParentsRegEx = d(["symbol", "g", "a", "svg", "clipPath", "defs"]), e.cssRules = {}, e.gradientDefs = {}, e.clipPaths = {}, e.parseTransformAttribute = function () {
                            function t(t, i, r) {
                                t[r] = Math.tan(e.util.degreesToRadians(i[0]))
                            }
                            var i = e.iMatrix,
                                r = e.reNum,
                                n = e.commaWsp,
                                s = "(?:" + ("(?:(matrix)\\s*\\(\\s*(" + r + ")" + n + "(" + r + ")" + n + "(" + r + ")" + n + "(" + r + ")" + n + "(" + r + ")" + n + "(" + r + ")\\s*\\))") + "|" + ("(?:(translate)\\s*\\(\\s*(" + r + ")(?:" + n + "(" + r + "))?\\s*\\))") + "|" + ("(?:(scale)\\s*\\(\\s*(" + r + ")(?:" + n + "(" + r + "))?\\s*\\))") + "|" + ("(?:(rotate)\\s*\\(\\s*(" + r + ")(?:" + n + "(" + r + ")" + n + "(" + r + "))?\\s*\\))") + "|" + ("(?:(skewX)\\s*\\(\\s*(" + r + ")\\s*\\))") + "|" + ("(?:(skewY)\\s*\\(\\s*(" + r + ")\\s*\\))") + ")",
                                o = new RegExp("^\\s*(?:" + ("(?:" + s + "(?:" + n + "*" + s + ")*)") + "?)\\s*$"),
                                a = new RegExp(s, "g");
                            return function (r) {
                                var n = i.concat(),
                                    h = [];
                                if (!r || r && !o.test(r)) return n;
                                r.replace(a, (function (r) {
                                    var o = new RegExp(s).exec(r).filter((function (t) {
                                            return !!t
                                        })),
                                        a = o[1],
                                        c = o.slice(2).map(parseFloat);
                                    switch (a) {
                                        case "translate":
                                            ! function (t, e) {
                                                t[4] = e[0], 2 === e.length && (t[5] = e[1])
                                            }(n, c);
                                            break;
                                        case "rotate":
                                            c[0] = e.util.degreesToRadians(c[0]),
                                                function (t, i) {
                                                    var r = e.util.cos(i[0]),
                                                        n = e.util.sin(i[0]),
                                                        s = 0,
                                                        o = 0;
                                                    3 === i.length && (s = i[1], o = i[2]), t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = s - (r * s - n * o), t[5] = o - (n * s + r * o)
                                                }(n, c);
                                            break;
                                        case "scale":
                                            ! function (t, e) {
                                                var i = e[0],
                                                    r = 2 === e.length ? e[1] : e[0];
                                                t[0] = i, t[3] = r
                                            }(n, c);
                                            break;
                                        case "skewX":
                                            t(n, c, 2);
                                            break;
                                        case "skewY":
                                            t(n, c, 1);
                                            break;
                                        case "matrix":
                                            n = c
                                    }
                                    h.push(n.concat()), n = i.concat()
                                }));
                                for (var c = h[0]; h.length > 1;) h.shift(), c = e.util.multiplyTransformMatrices(c, h[0]);
                                return c
                            }
                        }();
                        var y = new RegExp("^\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*$");

                        function _(t) {
                            if (e.svgViewBoxElementsRegEx.test(t.nodeName)) {
                                var i, r, n, o, a, h, c = t.getAttribute("viewBox"),
                                    l = 1,
                                    u = 1,
                                    f = t.getAttribute("width"),
                                    d = t.getAttribute("height"),
                                    g = t.getAttribute("x") || 0,
                                    p = t.getAttribute("y") || 0,
                                    v = t.getAttribute("preserveAspectRatio") || "",
                                    m = !c || !(c = c.match(y)),
                                    _ = !f || !d || "100%" === f || "100%" === d,
                                    b = m && _,
                                    x = {},
                                    C = "",
                                    S = 0,
                                    w = 0;
                                if (x.width = 0, x.height = 0, x.toBeParsed = b, m && (g || p) && "#document" !== t.parentNode.nodeName && (C = " translate(" + s(g) + " " + s(p) + ") ", a = (t.getAttribute("transform") || "") + C, t.setAttribute("transform", a), t.removeAttribute("x"), t.removeAttribute("y")), b) return x;
                                if (m) return x.width = s(f), x.height = s(d), x;
                                if (i = -parseFloat(c[1]), r = -parseFloat(c[2]), n = parseFloat(c[3]), o = parseFloat(c[4]), x.minX = i, x.minY = r, x.viewBoxWidth = n, x.viewBoxHeight = o, _ ? (x.width = n, x.height = o) : (x.width = s(f), x.height = s(d), l = x.width / n, u = x.height / o), "none" !== (v = e.util.parsePreserveAspectRatioAttribute(v)).alignX && ("meet" === v.meetOrSlice && (u = l = l > u ? u : l), "slice" === v.meetOrSlice && (u = l = l > u ? l : u), S = x.width - n * l, w = x.height - o * l, "Mid" === v.alignX && (S /= 2), "Mid" === v.alignY && (w /= 2), "Min" === v.alignX && (S = 0), "Min" === v.alignY && (w = 0)), 1 === l && 1 === u && 0 === i && 0 === r && 0 === g && 0 === p) return x;
                                if ((g || p) && "#document" !== t.parentNode.nodeName && (C = " translate(" + s(g) + " " + s(p) + ") "), a = C + " matrix(" + l + " 0 0 " + u + " " + (i * l + S) + " " + (r * u + w) + ") ", "svg" === t.nodeName) {
                                    for (h = t.ownerDocument.createElementNS(e.svgNS, "g"); t.firstChild;) h.appendChild(t.firstChild);
                                    t.appendChild(h)
                                } else(h = t).removeAttribute("x"), h.removeAttribute("y"), a = h.getAttribute("transform") + a;
                                return h.setAttribute("transform", a), x
                            }
                        }

                        function b(t, e) {
                            var i = "xlink:href",
                                r = m(t, e.getAttribute(i).substr(1));
                            if (r && r.getAttribute(i) && b(t, r), ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"].forEach((function (t) {
                                    r && !e.hasAttribute(t) && r.hasAttribute(t) && e.setAttribute(t, r.getAttribute(t))
                                })), !e.children.length)
                                for (var n = r.cloneNode(!0); n.firstChild;) e.appendChild(n.firstChild);
                            e.removeAttribute(i)
                        }
                        e.parseSVGDocument = function (t, i, n, s) {
                            if (t) {
                                ! function (t) {
                                    for (var i = g(t, ["use", "svg:use"]), r = 0; i.length && r < i.length;) {
                                        var n, s, o, a, h = i[r],
                                            c = (h.getAttribute("xlink:href") || h.getAttribute("href")).substr(1),
                                            l = h.getAttribute("x") || 0,
                                            u = h.getAttribute("y") || 0,
                                            f = m(t, c).cloneNode(!0),
                                            d = (f.getAttribute("transform") || "") + " translate(" + l + ", " + u + ")",
                                            p = i.length,
                                            v = e.svgNS;
                                        if (_(f), /^svg$/i.test(f.nodeName)) {
                                            var y = f.ownerDocument.createElementNS(v, "g");
                                            for (s = 0, a = (o = f.attributes).length; s < a; s++) n = o.item(s), y.setAttributeNS(v, n.nodeName, n.nodeValue);
                                            for (; f.firstChild;) y.appendChild(f.firstChild);
                                            f = y
                                        }
                                        for (s = 0, a = (o = h.attributes).length; s < a; s++) "x" !== (n = o.item(s)).nodeName && "y" !== n.nodeName && "xlink:href" !== n.nodeName && "href" !== n.nodeName && ("transform" === n.nodeName ? d = n.nodeValue + " " + d : f.setAttribute(n.nodeName, n.nodeValue));
                                        f.setAttribute("transform", d), f.setAttribute("instantiated_by_use", "1"), f.removeAttribute("id"), h.parentNode.replaceChild(f, h), i.length === p && r++
                                    }
                                }(t);
                                var o, a, h = e.Object.__uid++,
                                    c = _(t),
                                    l = e.util.toArray(t.getElementsByTagName("*"));
                                if (c.crossOrigin = s && s.crossOrigin, c.svgUid = h, 0 === l.length && e.isLikelyNode) {
                                    var u = [];
                                    for (o = 0, a = (l = t.selectNodes('//*[name(.)!="svg"]')).length; o < a; o++) u[o] = l[o];
                                    l = u
                                }
                                var f = l.filter((function (t) {
                                    return _(t), e.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:", "")) && ! function (t, e) {
                                        for (; t && (t = t.parentNode);)
                                            if (t.nodeName && e.test(t.nodeName.replace("svg:", "")) && !t.getAttribute("instantiated_by_use")) return !0;
                                        return !1
                                    }(t, e.svgInvalidAncestorsRegEx)
                                }));
                                if (!f || f && !f.length) i && i([], {});
                                else {
                                    var d = {};
                                    l.filter((function (t) {
                                        return "clipPath" === t.nodeName.replace("svg:", "")
                                    })).forEach((function (t) {
                                        var i = t.getAttribute("id");
                                        d[i] = e.util.toArray(t.getElementsByTagName("*")).filter((function (t) {
                                            return e.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:", ""))
                                        }))
                                    })), e.gradientDefs[h] = e.getGradientDefs(t), e.cssRules[h] = e.getCSSRules(t), e.clipPaths[h] = d, e.parseElements(f, (function (t, r) {
                                        i && (i(t, c, r, l), delete e.gradientDefs[h], delete e.cssRules[h], delete e.clipPaths[h])
                                    }), r(c), n, s)
                                }
                            }
                        };
                        var x = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + e.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + e.reNum + "))?\\s+(.*)");
                        i(e, {
                            parseFontDeclaration: function (t, e) {
                                var i = t.match(x);
                                if (i) {
                                    var r = i[1],
                                        n = i[3],
                                        o = i[4],
                                        a = i[5],
                                        h = i[6];
                                    r && (e.fontStyle = r), n && (e.fontWeight = isNaN(parseFloat(n)) ? n : parseFloat(n)), o && (e.fontSize = s(o)), h && (e.fontFamily = h), a && (e.lineHeight = "normal" === a ? 1 : a)
                                }
                            },
                            getGradientDefs: function (t) {
                                var e, i = g(t, ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"]),
                                    r = 0,
                                    n = {};
                                for (r = i.length; r--;)(e = i[r]).getAttribute("xlink:href") && b(t, e), n[e.getAttribute("id")] = e;
                                return n
                            },
                            parseAttributes: function (t, r, o) {
                                if (t) {
                                    var a, d, g, v = {};
                                    "undefined" === typeof o && (o = t.getAttribute("svgUid")), t.parentNode && e.svgValidParentsRegEx.test(t.parentNode.nodeName) && (v = e.parseAttributes(t.parentNode, r, o));
                                    var m = r.reduce((function (e, i) {
                                            return (a = t.getAttribute(i)) && (e[i] = a), e
                                        }), {}),
                                        y = i(function (t, i) {
                                            var r = {};
                                            for (var n in e.cssRules[i])
                                                if (p(t, n.split(" ")))
                                                    for (var s in e.cssRules[i][n]) r[s] = e.cssRules[i][n][s];
                                            return r
                                        }(t, o), e.parseStyleAttribute(t));
                                    m = i(m, y), y[l] && t.setAttribute(l, y[l]), d = g = v.fontSize || e.Text.DEFAULT_SVG_FONT_SIZE, m[c] && (m[c] = d = s(m[c], g));
                                    var _, b, x = {};
                                    for (var C in m) b = f(_ = u(C), m[C], v, d), x[_] = b;
                                    x && x.font && e.parseFontDeclaration(x.font, x);
                                    var S = i(v, x);
                                    return e.svgValidParentsRegEx.test(t.nodeName) ? S : function (t) {
                                        for (var i in h)
                                            if ("undefined" !== typeof t[h[i]] && "" !== t[i]) {
                                                if ("undefined" === typeof t[i]) {
                                                    if (!e.Object.prototype[i]) continue;
                                                    t[i] = e.Object.prototype[i]
                                                }
                                                if (0 !== t[i].indexOf("url(")) {
                                                    var r = new e.Color(t[i]);
                                                    t[i] = r.setAlpha(n(r.getAlpha() * t[h[i]], 2)).toRgba()
                                                }
                                            } return t
                                    }(S)
                                }
                            },
                            parseElements: function (t, i, r, n, s) {
                                new e.ElementsParser(t, i, r, n, s).parse()
                            },
                            parseStyleAttribute: function (t) {
                                var e = {},
                                    i = t.getAttribute("style");
                                return i ? ("string" === typeof i ? function (t, e) {
                                    var i, r;
                                    t.replace(/;\s*$/, "").split(";").forEach((function (t) {
                                        var n = t.split(":");
                                        i = n[0].trim().toLowerCase(), r = n[1].trim(), e[i] = r
                                    }))
                                }(i, e) : function (t, e) {
                                    var i, r;
                                    for (var n in t) "undefined" !== typeof t[n] && (i = n.toLowerCase(), r = t[n], e[i] = r)
                                }(i, e), e) : e
                            },
                            parsePointsAttribute: function (t) {
                                if (!t) return null;
                                var e, i, r = [];
                                for (e = 0, i = (t = (t = t.replace(/,/g, " ").trim()).split(/\s+/)).length; e < i; e += 2) r.push({
                                    x: parseFloat(t[e]),
                                    y: parseFloat(t[e + 1])
                                });
                                return r
                            },
                            getCSSRules: function (t) {
                                var i, r, n = t.getElementsByTagName("style"),
                                    s = {};
                                for (i = 0, r = n.length; i < r; i++) {
                                    var o = n[i].textContent;
                                    "" !== (o = o.replace(/\/\*[\s\S]*?\*\//g, "")).trim() && o.match(/[^{]*\{[\s\S]*?\}/g).map((function (t) {
                                        return t.trim()
                                    })).forEach((function (t) {
                                        var n = t.match(/([\s\S]*?)\s*\{([^}]*)\}/),
                                            o = {},
                                            a = n[2].trim().replace(/;$/, "").split(/\s*;\s*/);
                                        for (i = 0, r = a.length; i < r; i++) {
                                            var h = a[i].split(/\s*:\s*/),
                                                c = h[0],
                                                l = h[1];
                                            o[c] = l
                                        }(t = n[1]).split(",").forEach((function (t) {
                                            "" !== (t = t.replace(/^svg/i, "").trim()) && (s[t] ? e.util.object.extend(s[t], o) : s[t] = e.util.object.clone(o))
                                        }))
                                    }))
                                }
                                return s
                            },
                            loadSVGFromURL: function (t, i, r, n) {
                                t = t.replace(/^\n\s*/, "").trim(), new e.util.request(t, {
                                    method: "get",
                                    onComplete: function (t) {
                                        var s = t.responseXML;
                                        if (!s || !s.documentElement) return i && i(null), !1;
                                        e.parseSVGDocument(s.documentElement, (function (t, e, r, n) {
                                            i && i(t, e, r, n)
                                        }), r, n)
                                    }
                                })
                            },
                            loadSVGFromString: function (t, i, r, n) {
                                var s = (new e.window.DOMParser).parseFromString(t.trim(), "text/xml");
                                e.parseSVGDocument(s.documentElement, (function (t, e, r, n) {
                                    i(t, e, r, n)
                                }), r, n)
                            }
                        })
                    }(e), n.ElementsParser = function (t, e, i, r, n, s) {
                        this.elements = t, this.callback = e, this.options = i, this.reviver = r, this.svgUid = i && i.svgUid || 0, this.parsingOptions = n, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = s
                    }, (r = n.ElementsParser.prototype).parse = function () {
                        this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects()
                    }, r.createObjects = function () {
                        var t = this;
                        this.elements.forEach((function (e, i) {
                            e.setAttribute("svgUid", t.svgUid), t.createObject(e, i)
                        }))
                    }, r.findTag = function (t) {
                        return n[n.util.string.capitalize(t.tagName.replace("svg:", ""))]
                    }, r.createObject = function (t, e) {
                        var i = this.findTag(t);
                        if (i && i.fromElement) try {
                            i.fromElement(t, this.createCallback(e, t), this.options)
                        } catch (r) {
                            n.log(r)
                        } else this.checkIfDone()
                    }, r.createCallback = function (t, e) {
                        var i = this;
                        return function (r) {
                            var s;
                            i.resolveGradient(r, e, "fill"), i.resolveGradient(r, e, "stroke"), r instanceof n.Image && r._originalElement && (s = r.parsePreserveAspectRatioAttribute(e)), r._removeTransformMatrix(s), i.resolveClipPath(r, e), i.reviver && i.reviver(e, r), i.instances[t] = r, i.checkIfDone()
                        }
                    }, r.extractPropertyDefinition = function (t, e, i) {
                        var r = t[e],
                            s = this.regexUrl;
                        if (s.test(r)) {
                            s.lastIndex = 0;
                            var o = s.exec(r)[1];
                            return s.lastIndex = 0, n[i][this.svgUid][o]
                        }
                    }, r.resolveGradient = function (t, e, i) {
                        var r = this.extractPropertyDefinition(t, i, "gradientDefs");
                        if (r) {
                            var s = e.getAttribute(i + "-opacity"),
                                o = n.Gradient.fromElement(r, t, s, this.options);
                            t.set(i, o)
                        }
                    }, r.createClipPathCallback = function (t, e) {
                        return function (t) {
                            t._removeTransformMatrix(), t.fillRule = t.clipRule, e.push(t)
                        }
                    }, r.resolveClipPath = function (t, e) {
                        var i, r, s, o, a = this.extractPropertyDefinition(t, "clipPath", "clipPaths");
                        if (a) {
                            s = [], r = n.util.invertTransform(t.calcTransformMatrix());
                            for (var h = a[0].parentNode, c = e; c.parentNode && c.getAttribute("clip-path") !== t.clipPath;) c = c.parentNode;
                            c.parentNode.appendChild(h);
                            for (var l = 0; l < a.length; l++) i = a[l], this.findTag(i).fromElement(i, this.createClipPathCallback(t, s), this.options);
                            a = 1 === s.length ? s[0] : new n.Group(s), o = n.util.multiplyTransformMatrices(r, a.calcTransformMatrix()), a.clipPath && this.resolveClipPath(a, c);
                            var u = n.util.qrDecompose(o);
                            a.flipX = !1, a.flipY = !1, a.set("scaleX", u.scaleX), a.set("scaleY", u.scaleY), a.angle = u.angle, a.skewX = u.skewX, a.skewY = 0, a.setPositionByOrigin({
                                x: u.translateX,
                                y: u.translateY
                            }, "center", "center"), t.clipPath = a
                        } else delete t.clipPath
                    }, r.checkIfDone = function () {
                        0 === --this.numElements && (this.instances = this.instances.filter((function (t) {
                            return null != t
                        })), this.callback(this.instances, this.elements))
                    },
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});

                        function i(t, e) {
                            this.x = t, this.y = e
                        }
                        e.Point ? e.warn("fabric.Point is already defined") : (e.Point = i, i.prototype = {
                            type: "point",
                            constructor: i,
                            add: function (t) {
                                return new i(this.x + t.x, this.y + t.y)
                            },
                            addEquals: function (t) {
                                return this.x += t.x, this.y += t.y, this
                            },
                            scalarAdd: function (t) {
                                return new i(this.x + t, this.y + t)
                            },
                            scalarAddEquals: function (t) {
                                return this.x += t, this.y += t, this
                            },
                            subtract: function (t) {
                                return new i(this.x - t.x, this.y - t.y)
                            },
                            subtractEquals: function (t) {
                                return this.x -= t.x, this.y -= t.y, this
                            },
                            scalarSubtract: function (t) {
                                return new i(this.x - t, this.y - t)
                            },
                            scalarSubtractEquals: function (t) {
                                return this.x -= t, this.y -= t, this
                            },
                            multiply: function (t) {
                                return new i(this.x * t, this.y * t)
                            },
                            multiplyEquals: function (t) {
                                return this.x *= t, this.y *= t, this
                            },
                            divide: function (t) {
                                return new i(this.x / t, this.y / t)
                            },
                            divideEquals: function (t) {
                                return this.x /= t, this.y /= t, this
                            },
                            eq: function (t) {
                                return this.x === t.x && this.y === t.y
                            },
                            lt: function (t) {
                                return this.x < t.x && this.y < t.y
                            },
                            lte: function (t) {
                                return this.x <= t.x && this.y <= t.y
                            },
                            gt: function (t) {
                                return this.x > t.x && this.y > t.y
                            },
                            gte: function (t) {
                                return this.x >= t.x && this.y >= t.y
                            },
                            lerp: function (t, e) {
                                return "undefined" === typeof e && (e = .5), e = Math.max(Math.min(1, e), 0), new i(this.x + (t.x - this.x) * e, this.y + (t.y - this.y) * e)
                            },
                            distanceFrom: function (t) {
                                var e = this.x - t.x,
                                    i = this.y - t.y;
                                return Math.sqrt(e * e + i * i)
                            },
                            midPointFrom: function (t) {
                                return this.lerp(t)
                            },
                            min: function (t) {
                                return new i(Math.min(this.x, t.x), Math.min(this.y, t.y))
                            },
                            max: function (t) {
                                return new i(Math.max(this.x, t.x), Math.max(this.y, t.y))
                            },
                            toString: function () {
                                return this.x + "," + this.y
                            },
                            setXY: function (t, e) {
                                return this.x = t, this.y = e, this
                            },
                            setX: function (t) {
                                return this.x = t, this
                            },
                            setY: function (t) {
                                return this.y = t, this
                            },
                            setFromPoint: function (t) {
                                return this.x = t.x, this.y = t.y, this
                            },
                            swap: function (t) {
                                var e = this.x,
                                    i = this.y;
                                this.x = t.x, this.y = t.y, t.x = e, t.y = i
                            },
                            clone: function () {
                                return new i(this.x, this.y)
                            }
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});

                        function i(t) {
                            this.status = t, this.points = []
                        }
                        e.Intersection ? e.warn("fabric.Intersection is already defined") : (e.Intersection = i, e.Intersection.prototype = {
                            constructor: i,
                            appendPoint: function (t) {
                                return this.points.push(t), this
                            },
                            appendPoints: function (t) {
                                return this.points = this.points.concat(t), this
                            }
                        }, e.Intersection.intersectLineLine = function (t, r, n, s) {
                            var o, a = (s.x - n.x) * (t.y - n.y) - (s.y - n.y) * (t.x - n.x),
                                h = (r.x - t.x) * (t.y - n.y) - (r.y - t.y) * (t.x - n.x),
                                c = (s.y - n.y) * (r.x - t.x) - (s.x - n.x) * (r.y - t.y);
                            if (0 !== c) {
                                var l = a / c,
                                    u = h / c;
                                0 <= l && l <= 1 && 0 <= u && u <= 1 ? (o = new i("Intersection")).appendPoint(new e.Point(t.x + l * (r.x - t.x), t.y + l * (r.y - t.y))) : o = new i
                            } else o = new i(0 === a || 0 === h ? "Coincident" : "Parallel");
                            return o
                        }, e.Intersection.intersectLinePolygon = function (t, e, r) {
                            var n, s, o, a, h = new i,
                                c = r.length;
                            for (a = 0; a < c; a++) n = r[a], s = r[(a + 1) % c], o = i.intersectLineLine(t, e, n, s), h.appendPoints(o.points);
                            return h.points.length > 0 && (h.status = "Intersection"), h
                        }, e.Intersection.intersectPolygonPolygon = function (t, e) {
                            var r, n = new i,
                                s = t.length;
                            for (r = 0; r < s; r++) {
                                var o = t[r],
                                    a = t[(r + 1) % s],
                                    h = i.intersectLinePolygon(o, a, e);
                                n.appendPoints(h.points)
                            }
                            return n.points.length > 0 && (n.status = "Intersection"), n
                        }, e.Intersection.intersectPolygonRectangle = function (t, r, n) {
                            var s = r.min(n),
                                o = r.max(n),
                                a = new e.Point(o.x, s.y),
                                h = new e.Point(s.x, o.y),
                                c = i.intersectLinePolygon(s, a, t),
                                l = i.intersectLinePolygon(a, o, t),
                                u = i.intersectLinePolygon(o, h, t),
                                f = i.intersectLinePolygon(h, s, t),
                                d = new i;
                            return d.appendPoints(c.points), d.appendPoints(l.points), d.appendPoints(u.points), d.appendPoints(f.points), d.points.length > 0 && (d.status = "Intersection"), d
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});

                        function i(t) {
                            t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1])
                        }

                        function r(t, e, i) {
                            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                        }
                        e.Color ? e.warn("fabric.Color is already defined.") : (e.Color = i, e.Color.prototype = {
                            _tryParsingColor: function (t) {
                                var e;
                                t in i.colorNameMap && (t = i.colorNameMap[t]), "transparent" === t && (e = [255, 255, 255, 0]), e || (e = i.sourceFromHex(t)), e || (e = i.sourceFromRgb(t)), e || (e = i.sourceFromHsl(t)), e || (e = [0, 0, 0, 1]), e && this.setSource(e)
                            },
                            _rgbToHsl: function (t, i, r) {
                                t /= 255, i /= 255, r /= 255;
                                var n, s, o, a = e.util.array.max([t, i, r]),
                                    h = e.util.array.min([t, i, r]);
                                if (o = (a + h) / 2, a === h) n = s = 0;
                                else {
                                    var c = a - h;
                                    switch (s = o > .5 ? c / (2 - a - h) : c / (a + h), a) {
                                        case t:
                                            n = (i - r) / c + (i < r ? 6 : 0);
                                            break;
                                        case i:
                                            n = (r - t) / c + 2;
                                            break;
                                        case r:
                                            n = (t - i) / c + 4
                                    }
                                    n /= 6
                                }
                                return [Math.round(360 * n), Math.round(100 * s), Math.round(100 * o)]
                            },
                            getSource: function () {
                                return this._source
                            },
                            setSource: function (t) {
                                this._source = t
                            },
                            toRgb: function () {
                                var t = this.getSource();
                                return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
                            },
                            toRgba: function () {
                                var t = this.getSource();
                                return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + ")"
                            },
                            toHsl: function () {
                                var t = this.getSource(),
                                    e = this._rgbToHsl(t[0], t[1], t[2]);
                                return "hsl(" + e[0] + "," + e[1] + "%," + e[2] + "%)"
                            },
                            toHsla: function () {
                                var t = this.getSource(),
                                    e = this._rgbToHsl(t[0], t[1], t[2]);
                                return "hsla(" + e[0] + "," + e[1] + "%," + e[2] + "%," + t[3] + ")"
                            },
                            toHex: function () {
                                var t, e, i, r = this.getSource();
                                return t = 1 === (t = r[0].toString(16)).length ? "0" + t : t, e = 1 === (e = r[1].toString(16)).length ? "0" + e : e, i = 1 === (i = r[2].toString(16)).length ? "0" + i : i, t.toUpperCase() + e.toUpperCase() + i.toUpperCase()
                            },
                            toHexa: function () {
                                var t, e = this.getSource();
                                return t = 1 === (t = (t = Math.round(255 * e[3])).toString(16)).length ? "0" + t : t, this.toHex() + t.toUpperCase()
                            },
                            getAlpha: function () {
                                return this.getSource()[3]
                            },
                            setAlpha: function (t) {
                                var e = this.getSource();
                                return e[3] = t, this.setSource(e), this
                            },
                            toGrayscale: function () {
                                var t = this.getSource(),
                                    e = parseInt((.3 * t[0] + .59 * t[1] + .11 * t[2]).toFixed(0), 10),
                                    i = t[3];
                                return this.setSource([e, e, e, i]), this
                            },
                            toBlackWhite: function (t) {
                                var e = this.getSource(),
                                    i = (.3 * e[0] + .59 * e[1] + .11 * e[2]).toFixed(0),
                                    r = e[3];
                                return t = t || 127, i = Number(i) < Number(t) ? 0 : 255, this.setSource([i, i, i, r]), this
                            },
                            overlayWith: function (t) {
                                t instanceof i || (t = new i(t));
                                var e, r = [],
                                    n = this.getAlpha(),
                                    s = this.getSource(),
                                    o = t.getSource();
                                for (e = 0; e < 3; e++) r.push(Math.round(.5 * s[e] + .5 * o[e]));
                                return r[3] = n, this.setSource(r), this
                            }
                        }, e.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, e.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, e.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, e.Color.colorNameMap = {
                            aliceblue: "#F0F8FF",
                            antiquewhite: "#FAEBD7",
                            aqua: "#00FFFF",
                            aquamarine: "#7FFFD4",
                            azure: "#F0FFFF",
                            beige: "#F5F5DC",
                            bisque: "#FFE4C4",
                            black: "#000000",
                            blanchedalmond: "#FFEBCD",
                            blue: "#0000FF",
                            blueviolet: "#8A2BE2",
                            brown: "#A52A2A",
                            burlywood: "#DEB887",
                            cadetblue: "#5F9EA0",
                            chartreuse: "#7FFF00",
                            chocolate: "#D2691E",
                            coral: "#FF7F50",
                            cornflowerblue: "#6495ED",
                            cornsilk: "#FFF8DC",
                            crimson: "#DC143C",
                            cyan: "#00FFFF",
                            darkblue: "#00008B",
                            darkcyan: "#008B8B",
                            darkgoldenrod: "#B8860B",
                            darkgray: "#A9A9A9",
                            darkgrey: "#A9A9A9",
                            darkgreen: "#006400",
                            darkkhaki: "#BDB76B",
                            darkmagenta: "#8B008B",
                            darkolivegreen: "#556B2F",
                            darkorange: "#FF8C00",
                            darkorchid: "#9932CC",
                            darkred: "#8B0000",
                            darksalmon: "#E9967A",
                            darkseagreen: "#8FBC8F",
                            darkslateblue: "#483D8B",
                            darkslategray: "#2F4F4F",
                            darkslategrey: "#2F4F4F",
                            darkturquoise: "#00CED1",
                            darkviolet: "#9400D3",
                            deeppink: "#FF1493",
                            deepskyblue: "#00BFFF",
                            dimgray: "#696969",
                            dimgrey: "#696969",
                            dodgerblue: "#1E90FF",
                            firebrick: "#B22222",
                            floralwhite: "#FFFAF0",
                            forestgreen: "#228B22",
                            fuchsia: "#FF00FF",
                            gainsboro: "#DCDCDC",
                            ghostwhite: "#F8F8FF",
                            gold: "#FFD700",
                            goldenrod: "#DAA520",
                            gray: "#808080",
                            grey: "#808080",
                            green: "#008000",
                            greenyellow: "#ADFF2F",
                            honeydew: "#F0FFF0",
                            hotpink: "#FF69B4",
                            indianred: "#CD5C5C",
                            indigo: "#4B0082",
                            ivory: "#FFFFF0",
                            khaki: "#F0E68C",
                            lavender: "#E6E6FA",
                            lavenderblush: "#FFF0F5",
                            lawngreen: "#7CFC00",
                            lemonchiffon: "#FFFACD",
                            lightblue: "#ADD8E6",
                            lightcoral: "#F08080",
                            lightcyan: "#E0FFFF",
                            lightgoldenrodyellow: "#FAFAD2",
                            lightgray: "#D3D3D3",
                            lightgrey: "#D3D3D3",
                            lightgreen: "#90EE90",
                            lightpink: "#FFB6C1",
                            lightsalmon: "#FFA07A",
                            lightseagreen: "#20B2AA",
                            lightskyblue: "#87CEFA",
                            lightslategray: "#778899",
                            lightslategrey: "#778899",
                            lightsteelblue: "#B0C4DE",
                            lightyellow: "#FFFFE0",
                            lime: "#00FF00",
                            limegreen: "#32CD32",
                            linen: "#FAF0E6",
                            magenta: "#FF00FF",
                            maroon: "#800000",
                            mediumaquamarine: "#66CDAA",
                            mediumblue: "#0000CD",
                            mediumorchid: "#BA55D3",
                            mediumpurple: "#9370DB",
                            mediumseagreen: "#3CB371",
                            mediumslateblue: "#7B68EE",
                            mediumspringgreen: "#00FA9A",
                            mediumturquoise: "#48D1CC",
                            mediumvioletred: "#C71585",
                            midnightblue: "#191970",
                            mintcream: "#F5FFFA",
                            mistyrose: "#FFE4E1",
                            moccasin: "#FFE4B5",
                            navajowhite: "#FFDEAD",
                            navy: "#000080",
                            oldlace: "#FDF5E6",
                            olive: "#808000",
                            olivedrab: "#6B8E23",
                            orange: "#FFA500",
                            orangered: "#FF4500",
                            orchid: "#DA70D6",
                            palegoldenrod: "#EEE8AA",
                            palegreen: "#98FB98",
                            paleturquoise: "#AFEEEE",
                            palevioletred: "#DB7093",
                            papayawhip: "#FFEFD5",
                            peachpuff: "#FFDAB9",
                            peru: "#CD853F",
                            pink: "#FFC0CB",
                            plum: "#DDA0DD",
                            powderblue: "#B0E0E6",
                            purple: "#800080",
                            rebeccapurple: "#663399",
                            red: "#FF0000",
                            rosybrown: "#BC8F8F",
                            royalblue: "#4169E1",
                            saddlebrown: "#8B4513",
                            salmon: "#FA8072",
                            sandybrown: "#F4A460",
                            seagreen: "#2E8B57",
                            seashell: "#FFF5EE",
                            sienna: "#A0522D",
                            silver: "#C0C0C0",
                            skyblue: "#87CEEB",
                            slateblue: "#6A5ACD",
                            slategray: "#708090",
                            slategrey: "#708090",
                            snow: "#FFFAFA",
                            springgreen: "#00FF7F",
                            steelblue: "#4682B4",
                            tan: "#D2B48C",
                            teal: "#008080",
                            thistle: "#D8BFD8",
                            tomato: "#FF6347",
                            turquoise: "#40E0D0",
                            violet: "#EE82EE",
                            wheat: "#F5DEB3",
                            white: "#FFFFFF",
                            whitesmoke: "#F5F5F5",
                            yellow: "#FFFF00",
                            yellowgreen: "#9ACD32"
                        }, e.Color.fromRgb = function (t) {
                            return i.fromSource(i.sourceFromRgb(t))
                        }, e.Color.sourceFromRgb = function (t) {
                            var e = t.match(i.reRGBa);
                            if (e) {
                                var r = parseInt(e[1], 10) / (/%$/.test(e[1]) ? 100 : 1) * (/%$/.test(e[1]) ? 255 : 1),
                                    n = parseInt(e[2], 10) / (/%$/.test(e[2]) ? 100 : 1) * (/%$/.test(e[2]) ? 255 : 1),
                                    s = parseInt(e[3], 10) / (/%$/.test(e[3]) ? 100 : 1) * (/%$/.test(e[3]) ? 255 : 1);
                                return [parseInt(r, 10), parseInt(n, 10), parseInt(s, 10), e[4] ? parseFloat(e[4]) : 1]
                            }
                        }, e.Color.fromRgba = i.fromRgb, e.Color.fromHsl = function (t) {
                            return i.fromSource(i.sourceFromHsl(t))
                        }, e.Color.sourceFromHsl = function (t) {
                            var e = t.match(i.reHSLa);
                            if (e) {
                                var n, s, o, a = (parseFloat(e[1]) % 360 + 360) % 360 / 360,
                                    h = parseFloat(e[2]) / (/%$/.test(e[2]) ? 100 : 1),
                                    c = parseFloat(e[3]) / (/%$/.test(e[3]) ? 100 : 1);
                                if (0 === h) n = s = o = c;
                                else {
                                    var l = c <= .5 ? c * (h + 1) : c + h - c * h,
                                        u = 2 * c - l;
                                    n = r(u, l, a + 1 / 3), s = r(u, l, a), o = r(u, l, a - 1 / 3)
                                }
                                return [Math.round(255 * n), Math.round(255 * s), Math.round(255 * o), e[4] ? parseFloat(e[4]) : 1]
                            }
                        }, e.Color.fromHsla = i.fromHsl, e.Color.fromHex = function (t) {
                            return i.fromSource(i.sourceFromHex(t))
                        }, e.Color.sourceFromHex = function (t) {
                            if (t.match(i.reHex)) {
                                var e = t.slice(t.indexOf("#") + 1),
                                    r = 3 === e.length || 4 === e.length,
                                    n = 8 === e.length || 4 === e.length,
                                    s = r ? e.charAt(0) + e.charAt(0) : e.substring(0, 2),
                                    o = r ? e.charAt(1) + e.charAt(1) : e.substring(2, 4),
                                    a = r ? e.charAt(2) + e.charAt(2) : e.substring(4, 6),
                                    h = n ? r ? e.charAt(3) + e.charAt(3) : e.substring(6, 8) : "FF";
                                return [parseInt(s, 16), parseInt(o, 16), parseInt(a, 16), parseFloat((parseInt(h, 16) / 255).toFixed(2))]
                            }
                        }, e.Color.fromSource = function (t) {
                            var e = new i;
                            return e.setSource(t), e
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"],
                            r = ["ns", "nesw", "ew", "nwse"],
                            n = {},
                            s = "left",
                            o = "top",
                            a = "right",
                            h = "bottom",
                            c = "center",
                            l = {
                                top: h,
                                bottom: o,
                                left: a,
                                right: s,
                                center: c
                            },
                            u = e.util.radiansToDegrees,
                            f = Math.sign || function (t) {
                                return (t > 0) - (t < 0) || +t
                            };

                        function d(t, e) {
                            var i = t.angle + u(Math.atan2(e.y, e.x)) + 360;
                            return Math.round(i % 360 / 45)
                        }

                        function g(t, i) {
                            var r = i.transform.target,
                                n = r.canvas,
                                s = e.util.object.clone(i);
                            s.target = r, n && n.fire("object:" + t, s), r.fire(t, i)
                        }

                        function p(t, e) {
                            var i = e.canvas,
                                r = t[i.uniScaleKey];
                            return i.uniformScaling && !r || !i.uniformScaling && r
                        }

                        function v(t) {
                            return t.originX === c && t.originY === c
                        }

                        function m(t, e, i) {
                            var r = t.lockScalingX,
                                n = t.lockScalingY;
                            return !(!r || !n) || (!(e || !r && !n || !i) || (!(!r || "x" !== e) || !(!n || "y" !== e)))
                        }

                        function y(t, e, i, r) {
                            return {
                                e: t,
                                transform: e,
                                pointer: {
                                    x: i,
                                    y: r
                                }
                            }
                        }

                        function _(t) {
                            return function (e, i, r, n) {
                                var s = i.target,
                                    o = s.getCenterPoint(),
                                    a = s.translateToOriginPoint(o, i.originX, i.originY),
                                    h = t(e, i, r, n);
                                return s.setPositionByOrigin(a, i.originX, i.originY), h
                            }
                        }

                        function b(t, i, r, n, s) {
                            var o = t.target,
                                a = o.controls[t.corner],
                                h = o.canvas.getZoom(),
                                c = o.padding / h,
                                l = o.toLocalPoint(new e.Point(n, s), i, r);
                            return l.x >= c && (l.x -= c), l.x <= -c && (l.x += c), l.y >= c && (l.y -= c), l.y <= c && (l.y += c), l.x -= a.offsetX, l.y -= a.offsetY, l
                        }

                        function x(t) {
                            return t.flipX !== t.flipY
                        }

                        function C(t, e, i, r, n) {
                            if (0 !== t[e]) {
                                var s = n / t._getTransformedDimensions()[r] * t[i];
                                t.set(i, s)
                            }
                        }

                        function S(t, e, i, r) {
                            var n, c = e.target,
                                l = c._getTransformedDimensions(0, c.skewY),
                                f = b(e, e.originX, e.originY, i, r),
                                d = Math.abs(2 * f.x) - l.x,
                                p = c.skewX;
                            d < 2 ? n = 0 : (n = u(Math.atan2(d / c.scaleX, l.y / c.scaleY)), e.originX === s && e.originY === h && (n = -n), e.originX === a && e.originY === o && (n = -n), x(c) && (n = -n));
                            var v = p !== n;
                            if (v) {
                                var m = c._getTransformedDimensions().y;
                                c.set("skewX", n), C(c, "skewY", "scaleY", "y", m), g("skewing", y(t, e, i, r))
                            }
                            return v
                        }

                        function w(t, e, i, r) {
                            var n, c = e.target,
                                l = c._getTransformedDimensions(c.skewX, 0),
                                f = b(e, e.originX, e.originY, i, r),
                                d = Math.abs(2 * f.y) - l.y,
                                p = c.skewY;
                            d < 2 ? n = 0 : (n = u(Math.atan2(d / c.scaleY, l.x / c.scaleX)), e.originX === s && e.originY === h && (n = -n), e.originX === a && e.originY === o && (n = -n), x(c) && (n = -n));
                            var v = p !== n;
                            if (v) {
                                var m = c._getTransformedDimensions().x;
                                c.set("skewY", n), C(c, "skewX", "scaleX", "x", m), g("skewing", y(t, e, i, r))
                            }
                            return v
                        }

                        function T(t, e, i, r, n) {
                            n = n || {};
                            var s, o, a, h, c, u, d = e.target,
                                _ = d.lockScalingX,
                                x = d.lockScalingY,
                                C = n.by,
                                S = p(t, d),
                                w = m(d, C, S),
                                T = e.gestureScale;
                            if (w) return !1;
                            if (T) o = e.scaleX * T, a = e.scaleY * T;
                            else {
                                if (s = b(e, e.originX, e.originY, i, r), c = "y" !== C ? f(s.x) : 1, u = "x" !== C ? f(s.y) : 1, e.signX || (e.signX = c), e.signY || (e.signY = u), d.lockScalingFlip && (e.signX !== c || e.signY !== u)) return !1;
                                if (h = d._getTransformedDimensions(), S && !C) {
                                    var O, k = Math.abs(s.x) + Math.abs(s.y),
                                        E = e.original,
                                        P = k / (Math.abs(h.x * E.scaleX / d.scaleX) + Math.abs(h.y * E.scaleY / d.scaleY));
                                    o = E.scaleX * P, a = E.scaleY * P
                                } else o = Math.abs(s.x * d.scaleX / h.x), a = Math.abs(s.y * d.scaleY / h.y);
                                v(e) && (o *= 2, a *= 2), e.signX !== c && "y" !== C && (e.originX = l[e.originX], o *= -1, e.signX = c), e.signY !== u && "x" !== C && (e.originY = l[e.originY], a *= -1, e.signY = u)
                            }
                            var A = d.scaleX,
                                j = d.scaleY;
                            return C ? ("x" === C && d.set("scaleX", o), "y" === C && d.set("scaleY", a)) : (!_ && d.set("scaleX", o), !x && d.set("scaleY", a)), (O = A !== d.scaleX || j !== d.scaleY) && g("scaling", y(t, e, i, r)), O
                        }
                        n.scaleCursorStyleHandler = function (t, e, r) {
                            var n = p(t, r),
                                s = "";
                            if (0 !== e.x && 0 === e.y ? s = "x" : 0 === e.x && 0 !== e.y && (s = "y"), m(r, s, n)) return "not-allowed";
                            var o = d(r, e);
                            return i[o] + "-resize"
                        }, n.skewCursorStyleHandler = function (t, e, i) {
                            var n = "not-allowed";
                            if (0 !== e.x && i.lockSkewingY) return n;
                            if (0 !== e.y && i.lockSkewingX) return n;
                            var s = d(i, e) % 4;
                            return r[s] + "-resize"
                        }, n.scaleSkewCursorStyleHandler = function (t, e, i) {
                            return t[i.canvas.altActionKey] ? n.skewCursorStyleHandler(t, e, i) : n.scaleCursorStyleHandler(t, e, i)
                        }, n.rotationWithSnapping = _((function (t, e, i, r) {
                            var n = e,
                                s = n.target,
                                o = s.translateToOriginPoint(s.getCenterPoint(), n.originX, n.originY);
                            if (s.lockRotation) return !1;
                            var a, h = Math.atan2(n.ey - o.y, n.ex - o.x),
                                c = Math.atan2(r - o.y, i - o.x),
                                l = u(c - h + n.theta);
                            if (s.snapAngle > 0) {
                                var f = s.snapAngle,
                                    d = s.snapThreshold || f,
                                    p = Math.ceil(l / f) * f,
                                    v = Math.floor(l / f) * f;
                                Math.abs(l - v) < d ? l = v : Math.abs(l - p) < d && (l = p)
                            }
                            return l < 0 && (l = 360 + l), l %= 360, a = s.angle !== l, s.angle = l, a && g("rotating", y(t, e, i, r)), a
                        })), n.scalingEqually = _((function (t, e, i, r) {
                            return T(t, e, i, r)
                        })), n.scalingX = _((function (t, e, i, r) {
                            return T(t, e, i, r, {
                                by: "x"
                            })
                        })), n.scalingY = _((function (t, e, i, r) {
                            return T(t, e, i, r, {
                                by: "y"
                            })
                        })), n.scalingYOrSkewingX = function (t, e, i, r) {
                            return t[e.target.canvas.altActionKey] ? n.skewHandlerX(t, e, i, r) : n.scalingY(t, e, i, r)
                        }, n.scalingXOrSkewingY = function (t, e, i, r) {
                            return t[e.target.canvas.altActionKey] ? n.skewHandlerY(t, e, i, r) : n.scalingX(t, e, i, r)
                        }, n.changeWidth = _((function (t, e, i, r) {
                            var n, s = e.target,
                                o = b(e, e.originX, e.originY, i, r),
                                a = s.strokeWidth / (s.strokeUniform ? s.scaleX : 1),
                                h = v(e) ? 2 : 1,
                                c = s.width,
                                l = Math.abs(o.x * h / s.scaleX) - a;
                            return s.set("width", Math.max(l, 0)), (n = c !== l) && g("resizing", y(t, e, i, r)), n
                        })), n.skewHandlerX = function (t, e, i, r) {
                            var n, h = e.target,
                                l = h.skewX,
                                u = e.originY;
                            return !h.lockSkewingX && (0 === l ? n = b(e, c, c, i, r).x > 0 ? s : a : (l > 0 && (n = u === o ? s : a), l < 0 && (n = u === o ? a : s), x(h) && (n = n === s ? a : s)), e.originX = n, _(S)(t, e, i, r))
                        }, n.skewHandlerY = function (t, e, i, r) {
                            var n, a = e.target,
                                l = a.skewY,
                                u = e.originX;
                            return !a.lockSkewingY && (0 === l ? n = b(e, c, c, i, r).y > 0 ? o : h : (l > 0 && (n = u === s ? o : h), l < 0 && (n = u === s ? h : o), x(a) && (n = n === o ? h : o)), e.originY = n, _(w)(t, e, i, r))
                        }, n.dragHandler = function (t, e, i, r) {
                            var n = e.target,
                                s = i - e.offsetX,
                                o = r - e.offsetY,
                                a = !n.get("lockMovementX") && n.left !== s,
                                h = !n.get("lockMovementY") && n.top !== o;
                            return a && n.set("left", s), h && n.set("top", o), (a || h) && g("moving", y(t, e, i, r)), a || h
                        }, n.scaleOrSkewActionName = function (t, e, i) {
                            var r = t[i.canvas.altActionKey];
                            return 0 === e.x ? r ? "skewX" : "scaleY" : 0 === e.y ? r ? "skewY" : "scaleX" : void 0
                        }, n.rotationStyleHandler = function (t, e, i) {
                            return i.lockRotation ? "not-allowed" : e.cursorStyle
                        }, n.fireEvent = g, n.wrapWithFixedAnchor = _, n.getLocalPoint = b, e.controlsUtils = n
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.degreesToRadians,
                            r = e.controlsUtils;
                        r.renderCircleControl = function (t, e, i, r, n) {
                            r = r || {};
                            var s, o = this.sizeX || r.cornerSize || n.cornerSize,
                                a = this.sizeY || r.cornerSize || n.cornerSize,
                                h = "undefined" !== typeof r.transparentCorners ? r.transparentCorners : this.transparentCorners,
                                c = h ? "stroke" : "fill",
                                l = !h && (r.cornerStrokeColor || n.cornerStrokeColor),
                                u = e,
                                f = i;
                            t.save(), t.fillStyle = r.cornerColor || n.cornerColor, t.strokeStyle = r.cornerStrokeColor || n.cornerStrokeColor, o > a ? (s = o, t.scale(1, a / o), f = i * o / a) : a > o ? (s = a, t.scale(o / a, 1), u = e * a / o) : s = o, t.lineWidth = 1, t.beginPath(), t.arc(u, f, s / 2, 0, 2 * Math.PI, !1), t[c](), l && t.stroke(), t.restore()
                        }, r.renderSquareControl = function (t, e, r, n, s) {
                            n = n || {};
                            var o = this.sizeX || n.cornerSize || s.cornerSize,
                                a = this.sizeY || n.cornerSize || s.cornerSize,
                                h = "undefined" !== typeof n.transparentCorners ? n.transparentCorners : s.transparentCorners,
                                c = h ? "stroke" : "fill",
                                l = !h && (n.cornerStrokeColor || s.cornerStrokeColor),
                                u = o / 2,
                                f = a / 2;
                            t.save(), t.fillStyle = n.cornerColor || s.cornerColor, t.strokeStyle = n.cornerStrokeColor || s.cornerStrokeColor, t.lineWidth = 1, t.translate(e, r), t.rotate(i(s.angle)), t[c + "Rect"](-u, -f, o, a), l && t.strokeRect(-u, -f, o, a), t.restore()
                        }
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});
                        e.Control = function (t) {
                            for (var e in t) this[e] = t[e]
                        }, e.Control.prototype = {
                            visible: !0,
                            actionName: "scale",
                            angle: 0,
                            x: 0,
                            y: 0,
                            offsetX: 0,
                            offsetY: 0,
                            sizeX: null,
                            sizeY: null,
                            touchSizeX: null,
                            touchSizeY: null,
                            cursorStyle: "crosshair",
                            withConnection: !1,
                            actionHandler: function () {},
                            mouseDownHandler: function () {},
                            mouseUpHandler: function () {},
                            getActionHandler: function () {
                                return this.actionHandler
                            },
                            getMouseDownHandler: function () {
                                return this.mouseDownHandler
                            },
                            getMouseUpHandler: function () {
                                return this.mouseUpHandler
                            },
                            cursorStyleHandler: function (t, e) {
                                return e.cursorStyle
                            },
                            getActionName: function (t, e) {
                                return e.actionName
                            },
                            getVisibility: function (t, e) {
                                var i = t._controlsVisibility;
                                return i && "undefined" !== typeof i[e] ? i[e] : this.visible
                            },
                            setVisibility: function (t) {
                                this.visible = t
                            },
                            positionHandler: function (t, i) {
                                return e.util.transformPoint({
                                    x: this.x * t.x + this.offsetX,
                                    y: this.y * t.y + this.offsetY
                                }, i)
                            },
                            calcCornerCoords: function (t, i, r, n, s) {
                                var o, a, h, c, l = s ? this.touchSizeX : this.sizeX,
                                    u = s ? this.touchSizeY : this.sizeY;
                                if (l && u && l !== u) {
                                    var f = Math.atan2(u, l),
                                        d = Math.sqrt(l * l + u * u) / 2,
                                        g = f - e.util.degreesToRadians(t),
                                        p = Math.PI / 2 - f - e.util.degreesToRadians(t);
                                    o = d * e.util.cos(g), a = d * e.util.sin(g), h = d * e.util.cos(p), c = d * e.util.sin(p)
                                } else {
                                    d = .7071067812 * (l && u ? l : i);
                                    g = e.util.degreesToRadians(45 - t);
                                    o = h = d * e.util.cos(g), a = c = d * e.util.sin(g)
                                }
                                return {
                                    tl: {
                                        x: r - c,
                                        y: n - h
                                    },
                                    tr: {
                                        x: r + o,
                                        y: n - a
                                    },
                                    bl: {
                                        x: r - o,
                                        y: n + a
                                    },
                                    br: {
                                        x: r + c,
                                        y: n + h
                                    }
                                }
                            },
                            render: function (t, i, r, n, s) {
                                switch ((n = n || {}).cornerStyle || s.cornerStyle) {
                                    case "circle":
                                        e.controlsUtils.renderCircleControl.call(this, t, i, r, n, s);
                                        break;
                                    default:
                                        e.controlsUtils.renderSquareControl.call(this, t, i, r, n, s)
                                }
                            }
                        }
                    }(e),
                    function () {
                        function t(t, e) {
                            var i, r, s, o, a = t.getAttribute("style"),
                                h = t.getAttribute("offset") || 0;
                            if (h = (h = parseFloat(h) / (/%$/.test(h) ? 100 : 1)) < 0 ? 0 : h > 1 ? 1 : h, a) {
                                var c = a.split(/\s*;\s*/);
                                for ("" === c[c.length - 1] && c.pop(), o = c.length; o--;) {
                                    var l = c[o].split(/\s*:\s*/),
                                        u = l[0].trim(),
                                        f = l[1].trim();
                                    "stop-color" === u ? i = f : "stop-opacity" === u && (s = f)
                                }
                            }
                            return i || (i = t.getAttribute("stop-color") || "rgb(0,0,0)"), s || (s = t.getAttribute("stop-opacity")), r = (i = new n.Color(i)).getAlpha(), s = isNaN(parseFloat(s)) ? 1 : parseFloat(s), s *= r * e, {
                                offset: h,
                                color: i.toRgb(),
                                opacity: s
                            }
                        }
                        var e = n.util.object.clone;
                        n.Gradient = n.util.createClass({
                            offsetX: 0,
                            offsetY: 0,
                            gradientTransform: null,
                            gradientUnits: "pixels",
                            type: "linear",
                            initialize: function (t) {
                                t || (t = {}), t.coords || (t.coords = {});
                                var e, i = this;
                                Object.keys(t).forEach((function (e) {
                                    i[e] = t[e]
                                })), this.id ? this.id += "_" + n.Object.__uid++ : this.id = n.Object.__uid++, e = {
                                    x1: t.coords.x1 || 0,
                                    y1: t.coords.y1 || 0,
                                    x2: t.coords.x2 || 0,
                                    y2: t.coords.y2 || 0
                                }, "radial" === this.type && (e.r1 = t.coords.r1 || 0, e.r2 = t.coords.r2 || 0), this.coords = e, this.colorStops = t.colorStops.slice()
                            },
                            addColorStop: function (t) {
                                for (var e in t) {
                                    var i = new n.Color(t[e]);
                                    this.colorStops.push({
                                        offset: parseFloat(e),
                                        color: i.toRgb(),
                                        opacity: i.getAlpha()
                                    })
                                }
                                return this
                            },
                            toObject: function (t) {
                                var e = {
                                    type: this.type,
                                    coords: this.coords,
                                    colorStops: this.colorStops,
                                    offsetX: this.offsetX,
                                    offsetY: this.offsetY,
                                    gradientUnits: this.gradientUnits,
                                    gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
                                };
                                return n.util.populateWithProperties(this, e, t), e
                            },
                            toSVG: function (t, i) {
                                var r, s, o, a, h = e(this.coords, !0),
                                    c = (i = i || {}, e(this.colorStops, !0)),
                                    l = h.r1 > h.r2,
                                    u = this.gradientTransform ? this.gradientTransform.concat() : n.iMatrix.concat(),
                                    f = -this.offsetX,
                                    d = -this.offsetY,
                                    g = !!i.additionalTransform,
                                    p = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox";
                                if (c.sort((function (t, e) {
                                        return t.offset - e.offset
                                    })), "objectBoundingBox" === p ? (f /= t.width, d /= t.height) : (f += t.width / 2, d += t.height / 2), "path" === t.type && "percentage" !== this.gradientUnits && (f -= t.pathOffset.x, d -= t.pathOffset.y), u[4] -= f, u[5] -= d, a = 'id="SVGID_' + this.id + '" gradientUnits="' + p + '"', a += ' gradientTransform="' + (g ? i.additionalTransform + " " : "") + n.util.matrixToSVG(u) + '" ', "linear" === this.type ? o = ["<linearGradient ", a, ' x1="', h.x1, '" y1="', h.y1, '" x2="', h.x2, '" y2="', h.y2, '">\n'] : "radial" === this.type && (o = ["<radialGradient ", a, ' cx="', l ? h.x1 : h.x2, '" cy="', l ? h.y1 : h.y2, '" r="', l ? h.r1 : h.r2, '" fx="', l ? h.x2 : h.x1, '" fy="', l ? h.y2 : h.y1, '">\n']), "radial" === this.type) {
                                    if (l)
                                        for ((c = c.concat()).reverse(), r = 0, s = c.length; r < s; r++) c[r].offset = 1 - c[r].offset;
                                    var v = Math.min(h.r1, h.r2);
                                    if (v > 0) {
                                        var m = v / Math.max(h.r1, h.r2);
                                        for (r = 0, s = c.length; r < s; r++) c[r].offset += m * (1 - c[r].offset)
                                    }
                                }
                                for (r = 0, s = c.length; r < s; r++) {
                                    var y = c[r];
                                    o.push("<stop ", 'offset="', 100 * y.offset + "%", '" style="stop-color:', y.color, "undefined" !== typeof y.opacity ? ";stop-opacity: " + y.opacity : ";", '"/>\n')
                                }
                                return o.push("linear" === this.type ? "</linearGradient>\n" : "</radialGradient>\n"), o.join("")
                            },
                            toLive: function (t) {
                                var e, i, r, s = n.util.object.clone(this.coords);
                                if (this.type) {
                                    for ("linear" === this.type ? e = t.createLinearGradient(s.x1, s.y1, s.x2, s.y2) : "radial" === this.type && (e = t.createRadialGradient(s.x1, s.y1, s.r1, s.x2, s.y2, s.r2)), i = 0, r = this.colorStops.length; i < r; i++) {
                                        var o = this.colorStops[i].color,
                                            a = this.colorStops[i].opacity,
                                            h = this.colorStops[i].offset;
                                        "undefined" !== typeof a && (o = new n.Color(o).setAlpha(a).toRgba()), e.addColorStop(h, o)
                                    }
                                    return e
                                }
                            }
                        }), n.util.object.extend(n.Gradient, {
                            fromElement: function (e, i, r, s) {
                                var o = parseFloat(r) / (/%$/.test(r) ? 100 : 1);
                                o = o < 0 ? 0 : o > 1 ? 1 : o, isNaN(o) && (o = 1);
                                var a, h, c, l, u = e.getElementsByTagName("stop"),
                                    f = "userSpaceOnUse" === e.getAttribute("gradientUnits") ? "pixels" : "percentage",
                                    d = e.getAttribute("gradientTransform") || "",
                                    g = [],
                                    p = 0,
                                    v = 0;
                                for ("linearGradient" === e.nodeName || "LINEARGRADIENT" === e.nodeName ? (a = "linear", h = function (t) {
                                        return {
                                            x1: t.getAttribute("x1") || 0,
                                            y1: t.getAttribute("y1") || 0,
                                            x2: t.getAttribute("x2") || "100%",
                                            y2: t.getAttribute("y2") || 0
                                        }
                                    }(e)) : (a = "radial", h = function (t) {
                                        return {
                                            x1: t.getAttribute("fx") || t.getAttribute("cx") || "50%",
                                            y1: t.getAttribute("fy") || t.getAttribute("cy") || "50%",
                                            r1: 0,
                                            x2: t.getAttribute("cx") || "50%",
                                            y2: t.getAttribute("cy") || "50%",
                                            r2: t.getAttribute("r") || "50%"
                                        }
                                    }(e)), c = u.length; c--;) g.push(t(u[c], o));
                                return l = n.parseTransformAttribute(d),
                                    function (t, e, i, r) {
                                        var n, s;
                                        Object.keys(e).forEach((function (t) {
                                            "Infinity" === (n = e[t]) ? s = 1: "-Infinity" === n ? s = 0 : (s = parseFloat(e[t], 10), "string" === typeof n && /^(\d+\.\d+)%|(\d+)%$/.test(n) && (s *= .01, "pixels" === r && ("x1" !== t && "x2" !== t && "r2" !== t || (s *= i.viewBoxWidth || i.width), "y1" !== t && "y2" !== t || (s *= i.viewBoxHeight || i.height)))), e[t] = s
                                        }))
                                    }(0, h, s, f), "pixels" === f && (p = -i.left, v = -i.top), new n.Gradient({
                                        id: e.getAttribute("id"),
                                        type: a,
                                        coords: h,
                                        colorStops: g,
                                        gradientUnits: f,
                                        gradientTransform: l,
                                        offsetX: p,
                                        offsetY: v
                                    })
                            }
                        })
                    }(),
                    function () {
                        "use strict";
                        var t = n.util.toFixed;
                        n.Pattern = n.util.createClass({
                            repeat: "repeat",
                            offsetX: 0,
                            offsetY: 0,
                            crossOrigin: "",
                            patternTransform: null,
                            initialize: function (t, e) {
                                if (t || (t = {}), this.id = n.Object.__uid++, this.setOptions(t), !t.source || t.source && "string" !== typeof t.source) e && e(this);
                                else {
                                    var i = this;
                                    this.source = n.util.createImage(), n.util.loadImage(t.source, (function (t, r) {
                                        i.source = t, e && e(i, r)
                                    }), null, this.crossOrigin)
                                }
                            },
                            toObject: function (e) {
                                var i, r, s = n.Object.NUM_FRACTION_DIGITS;
                                return "string" === typeof this.source.src ? i = this.source.src : "object" === typeof this.source && this.source.toDataURL && (i = this.source.toDataURL()), r = {
                                    type: "pattern",
                                    source: i,
                                    repeat: this.repeat,
                                    crossOrigin: this.crossOrigin,
                                    offsetX: t(this.offsetX, s),
                                    offsetY: t(this.offsetY, s),
                                    patternTransform: this.patternTransform ? this.patternTransform.concat() : null
                                }, n.util.populateWithProperties(this, r, e), r
                            },
                            toSVG: function (t) {
                                var e = "function" === typeof this.source ? this.source() : this.source,
                                    i = e.width / t.width,
                                    r = e.height / t.height,
                                    n = this.offsetX / t.width,
                                    s = this.offsetY / t.height,
                                    o = "";
                                return "repeat-x" !== this.repeat && "no-repeat" !== this.repeat || (r = 1, s && (r += Math.abs(s))), "repeat-y" !== this.repeat && "no-repeat" !== this.repeat || (i = 1, n && (i += Math.abs(n))), e.src ? o = e.src : e.toDataURL && (o = e.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + n + '" y="' + s + '" width="' + i + '" height="' + r + '">\n<image x="0" y="0" width="' + e.width + '" height="' + e.height + '" xlink:href="' + o + '"></image>\n</pattern>\n'
                            },
                            setOptions: function (t) {
                                for (var e in t) this[e] = t[e]
                            },
                            toLive: function (t) {
                                var e = this.source;
                                if (!e) return "";
                                if ("undefined" !== typeof e.src) {
                                    if (!e.complete) return "";
                                    if (0 === e.naturalWidth || 0 === e.naturalHeight) return ""
                                }
                                return t.createPattern(e, this.repeat)
                            }
                        })
                    }(),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.toFixed;
                        e.Shadow ? e.warn("fabric.Shadow is already defined.") : (e.Shadow = e.util.createClass({
                            color: "rgb(0,0,0)",
                            blur: 0,
                            offsetX: 0,
                            offsetY: 0,
                            affectStroke: !1,
                            includeDefaultValues: !0,
                            nonScaling: !1,
                            initialize: function (t) {
                                for (var i in "string" === typeof t && (t = this._parseShadow(t)), t) this[i] = t[i];
                                this.id = e.Object.__uid++
                            },
                            _parseShadow: function (t) {
                                var i = t.trim(),
                                    r = e.Shadow.reOffsetsAndBlur.exec(i) || [];
                                return {
                                    color: (i.replace(e.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)").trim(),
                                    offsetX: parseInt(r[1], 10) || 0,
                                    offsetY: parseInt(r[2], 10) || 0,
                                    blur: parseInt(r[3], 10) || 0
                                }
                            },
                            toString: function () {
                                return [this.offsetX, this.offsetY, this.blur, this.color].join("px ")
                            },
                            toSVG: function (t) {
                                var r = 40,
                                    n = 40,
                                    s = e.Object.NUM_FRACTION_DIGITS,
                                    o = e.util.rotateVector({
                                        x: this.offsetX,
                                        y: this.offsetY
                                    }, e.util.degreesToRadians(-t.angle)),
                                    a = new e.Color(this.color);
                                return t.width && t.height && (r = 100 * i((Math.abs(o.x) + this.blur) / t.width, s) + 20, n = 100 * i((Math.abs(o.y) + this.blur) / t.height, s) + 20), t.flipX && (o.x *= -1), t.flipY && (o.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + n + '%" height="' + (100 + 2 * n) + '%" x="-' + r + '%" width="' + (100 + 2 * r) + '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="' + i(this.blur ? this.blur / 2 : 0, s) + '"></feGaussianBlur>\n\t<feOffset dx="' + i(o.x, s) + '" dy="' + i(o.y, s) + '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="' + a.toRgb() + '" flood-opacity="' + a.getAlpha() + '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'
                            },
                            toObject: function () {
                                if (this.includeDefaultValues) return {
                                    color: this.color,
                                    blur: this.blur,
                                    offsetX: this.offsetX,
                                    offsetY: this.offsetY,
                                    affectStroke: this.affectStroke,
                                    nonScaling: this.nonScaling
                                };
                                var t = {},
                                    i = e.Shadow.prototype;
                                return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach((function (e) {
                                    this[e] !== i[e] && (t[e] = this[e])
                                }), this), t
                            }
                        }), e.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/)
                    }(e),
                    function () {
                        "use strict";
                        if (n.StaticCanvas) n.warn("fabric.StaticCanvas is already defined.");
                        else {
                            var t = n.util.object.extend,
                                e = n.util.getElementOffset,
                                i = n.util.removeFromArray,
                                r = n.util.toFixed,
                                s = n.util.transformPoint,
                                o = n.util.invertTransform,
                                a = n.util.getNodeCanvas,
                                h = n.util.createCanvasElement,
                                c = new Error("Could not initialize `canvas` element");
                            n.StaticCanvas = n.util.createClass(n.CommonMethods, {
                                initialize: function (t, e) {
                                    e || (e = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(t, e)
                                },
                                backgroundColor: "",
                                backgroundImage: null,
                                overlayColor: "",
                                overlayImage: null,
                                includeDefaultValues: !0,
                                stateful: !1,
                                renderOnAddRemove: !0,
                                controlsAboveOverlay: !1,
                                allowTouchScrolling: !1,
                                imageSmoothingEnabled: !0,
                                viewportTransform: n.iMatrix.concat(),
                                backgroundVpt: !0,
                                overlayVpt: !0,
                                enableRetinaScaling: !0,
                                vptCoords: {},
                                skipOffscreen: !0,
                                clipPath: void 0,
                                _initStatic: function (t, e) {
                                    var i = this.requestRenderAllBound;
                                    this._objects = [], this._createLowerCanvas(t), this._initOptions(e), this.interactive || this._initRetinaScaling(), e.overlayImage && this.setOverlayImage(e.overlayImage, i), e.backgroundImage && this.setBackgroundImage(e.backgroundImage, i), e.backgroundColor && this.setBackgroundColor(e.backgroundColor, i), e.overlayColor && this.setOverlayColor(e.overlayColor, i), this.calcOffset()
                                },
                                _isRetinaScaling: function () {
                                    return 1 !== n.devicePixelRatio && this.enableRetinaScaling
                                },
                                getRetinaScaling: function () {
                                    return this._isRetinaScaling() ? n.devicePixelRatio : 1
                                },
                                _initRetinaScaling: function () {
                                    if (this._isRetinaScaling()) {
                                        var t = n.devicePixelRatio;
                                        this.__initRetinaScaling(t, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(t, this.upperCanvasEl, this.contextTop)
                                    }
                                },
                                __initRetinaScaling: function (t, e, i) {
                                    e.setAttribute("width", this.width * t), e.setAttribute("height", this.height * t), i.scale(t, t)
                                },
                                calcOffset: function () {
                                    return this._offset = e(this.lowerCanvasEl), this
                                },
                                setOverlayImage: function (t, e, i) {
                                    return this.__setBgOverlayImage("overlayImage", t, e, i)
                                },
                                setBackgroundImage: function (t, e, i) {
                                    return this.__setBgOverlayImage("backgroundImage", t, e, i)
                                },
                                setOverlayColor: function (t, e) {
                                    return this.__setBgOverlayColor("overlayColor", t, e)
                                },
                                setBackgroundColor: function (t, e) {
                                    return this.__setBgOverlayColor("backgroundColor", t, e)
                                },
                                __setBgOverlayImage: function (t, e, i, r) {
                                    return "string" === typeof e ? n.util.loadImage(e, (function (e, s) {
                                        if (e) {
                                            var o = new n.Image(e, r);
                                            this[t] = o, o.canvas = this
                                        }
                                        i && i(e, s)
                                    }), this, r && r.crossOrigin) : (r && e.setOptions(r), this[t] = e, e && (e.canvas = this), i && i(e, !1)), this
                                },
                                __setBgOverlayColor: function (t, e, i) {
                                    return this[t] = e, this._initGradient(e, t), this._initPattern(e, t, i), this
                                },
                                _createCanvasElement: function () {
                                    var t = h();
                                    if (!t) throw c;
                                    if (t.style || (t.style = {}), "undefined" === typeof t.getContext) throw c;
                                    return t
                                },
                                _initOptions: function (t) {
                                    var e = this.lowerCanvasEl;
                                    this._setOptions(t), this.width = this.width || parseInt(e.width, 10) || 0, this.height = this.height || parseInt(e.height, 10) || 0, this.lowerCanvasEl.style && (e.width = this.width, e.height = this.height, e.style.width = this.width + "px", e.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice())
                                },
                                _createLowerCanvas: function (t) {
                                    t && t.getContext ? this.lowerCanvasEl = t : this.lowerCanvasEl = n.util.getById(t) || this._createCanvasElement(), n.util.addClass(this.lowerCanvasEl, "lower-canvas"), this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d")
                                },
                                getWidth: function () {
                                    return this.width
                                },
                                getHeight: function () {
                                    return this.height
                                },
                                setWidth: function (t, e) {
                                    return this.setDimensions({
                                        width: t
                                    }, e)
                                },
                                setHeight: function (t, e) {
                                    return this.setDimensions({
                                        height: t
                                    }, e)
                                },
                                setDimensions: function (t, e) {
                                    var i;
                                    for (var r in e = e || {}, t) i = t[r], e.cssOnly || (this._setBackstoreDimension(r, t[r]), i += "px", this.hasLostContext = !0), e.backstoreOnly || this._setCssDimension(r, i);
                                    return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(), this._initRetinaScaling(), this.calcOffset(), e.cssOnly || this.requestRenderAll(), this
                                },
                                _setBackstoreDimension: function (t, e) {
                                    return this.lowerCanvasEl[t] = e, this.upperCanvasEl && (this.upperCanvasEl[t] = e), this.cacheCanvasEl && (this.cacheCanvasEl[t] = e), this[t] = e, this
                                },
                                _setCssDimension: function (t, e) {
                                    return this.lowerCanvasEl.style[t] = e, this.upperCanvasEl && (this.upperCanvasEl.style[t] = e), this.wrapperEl && (this.wrapperEl.style[t] = e), this
                                },
                                getZoom: function () {
                                    return this.viewportTransform[0]
                                },
                                setViewportTransform: function (t) {
                                    var e, i, r, n = this._activeObject,
                                        s = this.backgroundImage,
                                        o = this.overlayImage;
                                    for (this.viewportTransform = t, i = 0, r = this._objects.length; i < r; i++)(e = this._objects[i]).group || e.setCoords(!0);
                                    return n && n.setCoords(), s && s.setCoords(!0), o && o.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this
                                },
                                zoomToPoint: function (t, e) {
                                    var i = t,
                                        r = this.viewportTransform.slice(0);
                                    t = s(t, o(this.viewportTransform)), r[0] = e, r[3] = e;
                                    var n = s(t, r);
                                    return r[4] += i.x - n.x, r[5] += i.y - n.y, this.setViewportTransform(r)
                                },
                                setZoom: function (t) {
                                    return this.zoomToPoint(new n.Point(0, 0), t), this
                                },
                                absolutePan: function (t) {
                                    var e = this.viewportTransform.slice(0);
                                    return e[4] = -t.x, e[5] = -t.y, this.setViewportTransform(e)
                                },
                                relativePan: function (t) {
                                    return this.absolutePan(new n.Point(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]))
                                },
                                getElement: function () {
                                    return this.lowerCanvasEl
                                },
                                _onObjectAdded: function (t) {
                                    this.stateful && t.setupState(), t._set("canvas", this), t.setCoords(), this.fire("object:added", {
                                        target: t
                                    }), t.fire("added")
                                },
                                _onObjectRemoved: function (t) {
                                    this.fire("object:removed", {
                                        target: t
                                    }), t.fire("removed"), delete t.canvas
                                },
                                clearContext: function (t) {
                                    return t.clearRect(0, 0, this.width, this.height), this
                                },
                                getContext: function () {
                                    return this.contextContainer
                                },
                                clear: function () {
                                    return this._objects.length = 0, this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this
                                },
                                renderAll: function () {
                                    var t = this.contextContainer;
                                    return this.renderCanvas(t, this._objects), this
                                },
                                renderAndReset: function () {
                                    this.isRendering = 0, this.renderAll()
                                },
                                requestRenderAll: function () {
                                    return this.isRendering || (this.isRendering = n.util.requestAnimFrame(this.renderAndResetBound)), this
                                },
                                calcViewportBoundaries: function () {
                                    var t = {},
                                        e = this.width,
                                        i = this.height,
                                        r = o(this.viewportTransform);
                                    return t.tl = s({
                                        x: 0,
                                        y: 0
                                    }, r), t.br = s({
                                        x: e,
                                        y: i
                                    }, r), t.tr = new n.Point(t.br.x, t.tl.y), t.bl = new n.Point(t.tl.x, t.br.y), this.vptCoords = t, t
                                },
                                cancelRequestedRender: function () {
                                    this.isRendering && (n.util.cancelAnimFrame(this.isRendering), this.isRendering = 0)
                                },
                                renderCanvas: function (t, e) {
                                    var i = this.viewportTransform,
                                        r = this.clipPath;
                                    this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(t), n.util.setImageSmoothing(t, this.imageSmoothingEnabled), this.fire("before:render", {
                                        ctx: t
                                    }), this._renderBackground(t), t.save(), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this._renderObjects(t, e), t.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(t), r && (r.canvas = this, r.shouldCache(), r._transformDone = !0, r.renderCache({
                                        forClipping: !0
                                    }), this.drawClipPathOnCanvas(t)), this._renderOverlay(t), this.controlsAboveOverlay && this.interactive && this.drawControls(t), this.fire("after:render", {
                                        ctx: t
                                    })
                                },
                                drawClipPathOnCanvas: function (t) {
                                    var e = this.viewportTransform,
                                        i = this.clipPath;
                                    t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]), t.globalCompositeOperation = "destination-in", i.transform(t), t.scale(1 / i.zoomX, 1 / i.zoomY), t.drawImage(i._cacheCanvas, -i.cacheTranslationX, -i.cacheTranslationY), t.restore()
                                },
                                _renderObjects: function (t, e) {
                                    var i, r;
                                    for (i = 0, r = e.length; i < r; ++i) e[i] && e[i].render(t)
                                },
                                _renderBackgroundOrOverlay: function (t, e) {
                                    var i = this[e + "Color"],
                                        r = this[e + "Image"],
                                        n = this.viewportTransform,
                                        s = this[e + "Vpt"];
                                    if (i || r) {
                                        if (i) {
                                            t.save(), t.beginPath(), t.moveTo(0, 0), t.lineTo(this.width, 0), t.lineTo(this.width, this.height), t.lineTo(0, this.height), t.closePath(), t.fillStyle = i.toLive ? i.toLive(t, this) : i, s && t.transform(n[0], n[1], n[2], n[3], n[4], n[5]), t.transform(1, 0, 0, 1, i.offsetX || 0, i.offsetY || 0);
                                            var o = i.gradientTransform || i.patternTransform;
                                            o && t.transform(o[0], o[1], o[2], o[3], o[4], o[5]), t.fill(), t.restore()
                                        }
                                        r && (t.save(), s && t.transform(n[0], n[1], n[2], n[3], n[4], n[5]), r.render(t), t.restore())
                                    }
                                },
                                _renderBackground: function (t) {
                                    this._renderBackgroundOrOverlay(t, "background")
                                },
                                _renderOverlay: function (t) {
                                    this._renderBackgroundOrOverlay(t, "overlay")
                                },
                                getCenter: function () {
                                    return {
                                        top: this.height / 2,
                                        left: this.width / 2
                                    }
                                },
                                centerObjectH: function (t) {
                                    return this._centerObject(t, new n.Point(this.getCenter().left, t.getCenterPoint().y))
                                },
                                centerObjectV: function (t) {
                                    return this._centerObject(t, new n.Point(t.getCenterPoint().x, this.getCenter().top))
                                },
                                centerObject: function (t) {
                                    var e = this.getCenter();
                                    return this._centerObject(t, new n.Point(e.left, e.top))
                                },
                                viewportCenterObject: function (t) {
                                    var e = this.getVpCenter();
                                    return this._centerObject(t, e)
                                },
                                viewportCenterObjectH: function (t) {
                                    var e = this.getVpCenter();
                                    return this._centerObject(t, new n.Point(e.x, t.getCenterPoint().y)), this
                                },
                                viewportCenterObjectV: function (t) {
                                    var e = this.getVpCenter();
                                    return this._centerObject(t, new n.Point(t.getCenterPoint().x, e.y))
                                },
                                getVpCenter: function () {
                                    var t = this.getCenter(),
                                        e = o(this.viewportTransform);
                                    return s({
                                        x: t.left,
                                        y: t.top
                                    }, e)
                                },
                                _centerObject: function (t, e) {
                                    return t.setPositionByOrigin(e, "center", "center"), t.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this
                                },
                                toDatalessJSON: function (t) {
                                    return this.toDatalessObject(t)
                                },
                                toObject: function (t) {
                                    return this._toObjectMethod("toObject", t)
                                },
                                toDatalessObject: function (t) {
                                    return this._toObjectMethod("toDatalessObject", t)
                                },
                                _toObjectMethod: function (e, i) {
                                    var r = this.clipPath,
                                        s = {
                                            version: n.version,
                                            objects: this._toObjects(e, i)
                                        };
                                    return r && (s.clipPath = this._toObject(this.clipPath, e, i)), t(s, this.__serializeBgOverlay(e, i)), n.util.populateWithProperties(this, s, i), s
                                },
                                _toObjects: function (t, e) {
                                    return this._objects.filter((function (t) {
                                        return !t.excludeFromExport
                                    })).map((function (i) {
                                        return this._toObject(i, t, e)
                                    }), this)
                                },
                                _toObject: function (t, e, i) {
                                    var r;
                                    this.includeDefaultValues || (r = t.includeDefaultValues, t.includeDefaultValues = !1);
                                    var n = t[e](i);
                                    return this.includeDefaultValues || (t.includeDefaultValues = r), n
                                },
                                __serializeBgOverlay: function (t, e) {
                                    var i = {},
                                        r = this.backgroundImage,
                                        n = this.overlayImage;
                                    return this.backgroundColor && (i.background = this.backgroundColor.toObject ? this.backgroundColor.toObject(e) : this.backgroundColor), this.overlayColor && (i.overlay = this.overlayColor.toObject ? this.overlayColor.toObject(e) : this.overlayColor), r && !r.excludeFromExport && (i.backgroundImage = this._toObject(r, t, e)), n && !n.excludeFromExport && (i.overlayImage = this._toObject(n, t, e)), i
                                },
                                svgViewportTransformation: !0,
                                toSVG: function (t, e) {
                                    t || (t = {}), t.reviver = e;
                                    var i = [];
                                    return this._setSVGPreamble(i, t), this._setSVGHeader(i, t), this.clipPath && i.push('<g clip-path="url(#' + this.clipPath.clipPathId + ')" >\n'), this._setSVGBgOverlayColor(i, "background"), this._setSVGBgOverlayImage(i, "backgroundImage", e), this._setSVGObjects(i, e), this.clipPath && i.push("</g>\n"), this._setSVGBgOverlayColor(i, "overlay"), this._setSVGBgOverlayImage(i, "overlayImage", e), i.push("</svg>"), i.join("")
                                },
                                _setSVGPreamble: function (t, e) {
                                    e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')
                                },
                                _setSVGHeader: function (t, e) {
                                    var i, s = e.width || this.width,
                                        o = e.height || this.height,
                                        a = 'viewBox="0 0 ' + this.width + " " + this.height + '" ',
                                        h = n.Object.NUM_FRACTION_DIGITS;
                                    e.viewBox ? a = 'viewBox="' + e.viewBox.x + " " + e.viewBox.y + " " + e.viewBox.width + " " + e.viewBox.height + '" ' : this.svgViewportTransformation && (i = this.viewportTransform, a = 'viewBox="' + r(-i[4] / i[0], h) + " " + r(-i[5] / i[3], h) + " " + r(this.width / i[0], h) + " " + r(this.height / i[3], h) + '" '), t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', s, '" ', 'height="', o, '" ', a, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", n.version, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e), "</defs>\n")
                                },
                                createSVGClipPathMarkup: function (t) {
                                    var e = this.clipPath;
                                    return e ? (e.clipPathId = "CLIPPATH_" + n.Object.__uid++, '<clipPath id="' + e.clipPathId + '" >\n' + this.clipPath.toClipPathSVG(t.reviver) + "</clipPath>\n") : ""
                                },
                                createSVGRefElementsMarkup: function () {
                                    var t = this;
                                    return ["background", "overlay"].map((function (e) {
                                        var i = t[e + "Color"];
                                        if (i && i.toLive) {
                                            var r = t[e + "Vpt"],
                                                s = t.viewportTransform,
                                                o = {
                                                    width: t.width / (r ? s[0] : 1),
                                                    height: t.height / (r ? s[3] : 1)
                                                };
                                            return i.toSVG(o, {
                                                additionalTransform: r ? n.util.matrixToSVG(s) : ""
                                            })
                                        }
                                    })).join("")
                                },
                                createSVGFontFacesMarkup: function () {
                                    var t, e, i, r, s, o, a, h, c = "",
                                        l = {},
                                        u = n.fontPaths,
                                        f = [];
                                    for (this._objects.forEach((function t(e) {
                                            f.push(e), e._objects && e._objects.forEach(t)
                                        })), a = 0, h = f.length; a < h; a++)
                                        if (e = (t = f[a]).fontFamily, -1 !== t.type.indexOf("text") && !l[e] && u[e] && (l[e] = !0, t.styles))
                                            for (s in i = t.styles)
                                                for (o in r = i[s]) !l[e = r[o].fontFamily] && u[e] && (l[e] = !0);
                                    for (var d in l) c += ["\t\t@font-face {\n", "\t\t\tfont-family: '", d, "';\n", "\t\t\tsrc: url('", u[d], "');\n", "\t\t}\n"].join("");
                                    return c && (c = ['\t<style type="text/css">', "<![CDATA[\n", c, "]]>", "</style>\n"].join("")), c
                                },
                                _setSVGObjects: function (t, e) {
                                    var i, r, n, s = this._objects;
                                    for (r = 0, n = s.length; r < n; r++)(i = s[r]).excludeFromExport || this._setSVGObject(t, i, e)
                                },
                                _setSVGObject: function (t, e, i) {
                                    t.push(e.toSVG(i))
                                },
                                _setSVGBgOverlayImage: function (t, e, i) {
                                    this[e] && !this[e].excludeFromExport && this[e].toSVG && t.push(this[e].toSVG(i))
                                },
                                _setSVGBgOverlayColor: function (t, e) {
                                    var i = this[e + "Color"],
                                        r = this.viewportTransform,
                                        s = this.width,
                                        o = this.height;
                                    if (i)
                                        if (i.toLive) {
                                            var a = i.repeat,
                                                h = n.util.invertTransform(r),
                                                c = this[e + "Vpt"] ? n.util.matrixToSVG(h) : "";
                                            t.push('<rect transform="' + c + " translate(", s / 2, ",", o / 2, ')"', ' x="', i.offsetX - s / 2, '" y="', i.offsetY - o / 2, '" ', 'width="', "repeat-y" === a || "no-repeat" === a ? i.source.width : s, '" height="', "repeat-x" === a || "no-repeat" === a ? i.source.height : o, '" fill="url(#SVGID_' + i.id + ')"', "></rect>\n")
                                        } else t.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', i, '"', "></rect>\n")
                                },
                                sendToBack: function (t) {
                                    if (!t) return this;
                                    var e, r, n, s = this._activeObject;
                                    if (t === s && "activeSelection" === t.type)
                                        for (e = (n = s._objects).length; e--;) r = n[e], i(this._objects, r), this._objects.unshift(r);
                                    else i(this._objects, t), this._objects.unshift(t);
                                    return this.renderOnAddRemove && this.requestRenderAll(), this
                                },
                                bringToFront: function (t) {
                                    if (!t) return this;
                                    var e, r, n, s = this._activeObject;
                                    if (t === s && "activeSelection" === t.type)
                                        for (n = s._objects, e = 0; e < n.length; e++) r = n[e], i(this._objects, r), this._objects.push(r);
                                    else i(this._objects, t), this._objects.push(t);
                                    return this.renderOnAddRemove && this.requestRenderAll(), this
                                },
                                sendBackwards: function (t, e) {
                                    if (!t) return this;
                                    var r, n, s, o, a, h = this._activeObject,
                                        c = 0;
                                    if (t === h && "activeSelection" === t.type)
                                        for (a = h._objects, r = 0; r < a.length; r++) n = a[r], (s = this._objects.indexOf(n)) > 0 + c && (o = s - 1, i(this._objects, n), this._objects.splice(o, 0, n)), c++;
                                    else 0 !== (s = this._objects.indexOf(t)) && (o = this._findNewLowerIndex(t, s, e), i(this._objects, t), this._objects.splice(o, 0, t));
                                    return this.renderOnAddRemove && this.requestRenderAll(), this
                                },
                                _findNewLowerIndex: function (t, e, i) {
                                    var r, n;
                                    if (i)
                                        for (r = e, n = e - 1; n >= 0; --n) {
                                            if (t.intersectsWithObject(this._objects[n]) || t.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(t)) {
                                                r = n;
                                                break
                                            }
                                        } else r = e - 1;
                                    return r
                                },
                                bringForward: function (t, e) {
                                    if (!t) return this;
                                    var r, n, s, o, a, h = this._activeObject,
                                        c = 0;
                                    if (t === h && "activeSelection" === t.type)
                                        for (r = (a = h._objects).length; r--;) n = a[r], (s = this._objects.indexOf(n)) < this._objects.length - 1 - c && (o = s + 1, i(this._objects, n), this._objects.splice(o, 0, n)), c++;
                                    else(s = this._objects.indexOf(t)) !== this._objects.length - 1 && (o = this._findNewUpperIndex(t, s, e), i(this._objects, t), this._objects.splice(o, 0, t));
                                    return this.renderOnAddRemove && this.requestRenderAll(), this
                                },
                                _findNewUpperIndex: function (t, e, i) {
                                    var r, n, s;
                                    if (i)
                                        for (r = e, n = e + 1, s = this._objects.length; n < s; ++n) {
                                            if (t.intersectsWithObject(this._objects[n]) || t.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(t)) {
                                                r = n;
                                                break
                                            }
                                        } else r = e + 1;
                                    return r
                                },
                                moveTo: function (t, e) {
                                    return i(this._objects, t), this._objects.splice(e, 0, t), this.renderOnAddRemove && this.requestRenderAll()
                                },
                                dispose: function () {
                                    return this.isRendering && (n.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject((function (t) {
                                        t.dispose && t.dispose()
                                    })), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, n.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this
                                },
                                toString: function () {
                                    return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>"
                                }
                            }), t(n.StaticCanvas.prototype, n.Observable), t(n.StaticCanvas.prototype, n.Collection), t(n.StaticCanvas.prototype, n.DataURLExporter), t(n.StaticCanvas, {
                                EMPTY_JSON: '{"objects": [], "background": "white"}',
                                supports: function (t) {
                                    var e = h();
                                    if (!e || !e.getContext) return null;
                                    var i = e.getContext("2d");
                                    if (!i) return null;
                                    switch (t) {
                                        case "setLineDash":
                                            return "undefined" !== typeof i.setLineDash;
                                        default:
                                            return null
                                    }
                                }
                            }), n.StaticCanvas.prototype.toJSON = n.StaticCanvas.prototype.toObject, n.isLikelyNode && (n.StaticCanvas.prototype.createPNGStream = function () {
                                var t = a(this.lowerCanvasEl);
                                return t && t.createPNGStream()
                            }, n.StaticCanvas.prototype.createJPEGStream = function (t) {
                                var e = a(this.lowerCanvasEl);
                                return e && e.createJPEGStream(t)
                            })
                        }
                    }(), n.BaseBrush = n.util.createClass({
                        color: "rgb(0, 0, 0)",
                        width: 1,
                        shadow: null,
                        strokeLineCap: "round",
                        strokeLineJoin: "round",
                        strokeMiterLimit: 10,
                        strokeDashArray: null,
                        limitedToCanvasSize: !1,
                        _setBrushStyles: function () {
                            var t = this.canvas.contextTop;
                            t.strokeStyle = this.color, t.lineWidth = this.width, t.lineCap = this.strokeLineCap, t.miterLimit = this.strokeMiterLimit, t.lineJoin = this.strokeLineJoin, n.StaticCanvas.supports("setLineDash") && t.setLineDash(this.strokeDashArray || [])
                        },
                        _saveAndTransform: function (t) {
                            var e = this.canvas.viewportTransform;
                            t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
                        },
                        _setShadow: function () {
                            if (this.shadow) {
                                var t = this.canvas,
                                    e = this.shadow,
                                    i = t.contextTop,
                                    r = t.getZoom();
                                t && t._isRetinaScaling() && (r *= n.devicePixelRatio), i.shadowColor = e.color, i.shadowBlur = e.blur * r, i.shadowOffsetX = e.offsetX * r, i.shadowOffsetY = e.offsetY * r
                            }
                        },
                        needsFullRender: function () {
                            return new n.Color(this.color).getAlpha() < 1 || !!this.shadow
                        },
                        _resetShadow: function () {
                            var t = this.canvas.contextTop;
                            t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0
                        },
                        _isOutSideCanvas: function (t) {
                            return t.x < 0 || t.x > this.canvas.getWidth() || t.y < 0 || t.y > this.canvas.getHeight()
                        }
                    }), n.PencilBrush = n.util.createClass(n.BaseBrush, {
                        decimate: .4,
                        initialize: function (t) {
                            this.canvas = t, this._points = []
                        },
                        _drawSegment: function (t, e, i) {
                            var r = e.midPointFrom(i);
                            return t.quadraticCurveTo(e.x, e.y, r.x, r.y), r
                        },
                        onMouseDown: function (t, e) {
                            this.canvas._isMainEvent(e.e) && (this._prepareForDrawing(t), this._captureDrawingPath(t), this._render())
                        },
                        onMouseMove: function (t, e) {
                            if (this.canvas._isMainEvent(e.e) && (!0 !== this.limitedToCanvasSize || !this._isOutSideCanvas(t)) && this._captureDrawingPath(t) && this._points.length > 1)
                                if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render();
                                else {
                                    var i = this._points,
                                        r = i.length,
                                        n = this.canvas.contextTop;
                                    this._saveAndTransform(n), this.oldEnd && (n.beginPath(), n.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(n, i[r - 2], i[r - 1], !0), n.stroke(), n.restore()
                                }
                        },
                        onMouseUp: function (t) {
                            return !this.canvas._isMainEvent(t.e) || (this.oldEnd = void 0, this._finalizeAndAddPath(), !1)
                        },
                        _prepareForDrawing: function (t) {
                            var e = new n.Point(t.x, t.y);
                            this._reset(), this._addPoint(e), this.canvas.contextTop.moveTo(e.x, e.y)
                        },
                        _addPoint: function (t) {
                            return !(this._points.length > 1 && t.eq(this._points[this._points.length - 1])) && (this._points.push(t), !0)
                        },
                        _reset: function () {
                            this._points = [], this._setBrushStyles(), this._setShadow()
                        },
                        _captureDrawingPath: function (t) {
                            var e = new n.Point(t.x, t.y);
                            return this._addPoint(e)
                        },
                        _render: function () {
                            var t, e, i = this.canvas.contextTop,
                                r = this._points[0],
                                s = this._points[1];
                            if (this._saveAndTransform(i), i.beginPath(), 2 === this._points.length && r.x === s.x && r.y === s.y) {
                                var o = this.width / 1e3;
                                r = new n.Point(r.x, r.y), s = new n.Point(s.x, s.y), r.x -= o, s.x += o
                            }
                            for (i.moveTo(r.x, r.y), t = 1, e = this._points.length; t < e; t++) this._drawSegment(i, r, s), r = this._points[t], s = this._points[t + 1];
                            i.lineTo(r.x, r.y), i.stroke(), i.restore()
                        },
                        convertPointsToSVGPath: function (t) {
                            var e, i = [],
                                r = this.width / 1e3,
                                s = new n.Point(t[0].x, t[0].y),
                                o = new n.Point(t[1].x, t[1].y),
                                a = t.length,
                                h = 1,
                                c = 0,
                                l = a > 2;
                            for (l && (h = t[2].x < o.x ? -1 : t[2].x === o.x ? 0 : 1, c = t[2].y < o.y ? -1 : t[2].y === o.y ? 0 : 1), i.push("M ", s.x - h * r, " ", s.y - c * r, " "), e = 1; e < a; e++) {
                                if (!s.eq(o)) {
                                    var u = s.midPointFrom(o);
                                    i.push("Q ", s.x, " ", s.y, " ", u.x, " ", u.y, " ")
                                }
                                s = t[e], e + 1 < t.length && (o = t[e + 1])
                            }
                            return l && (h = s.x > t[e - 2].x ? 1 : s.x === t[e - 2].x ? 0 : -1, c = s.y > t[e - 2].y ? 1 : s.y === t[e - 2].y ? 0 : -1), i.push("L ", s.x + h * r, " ", s.y + c * r), i
                        },
                        createPath: function (t) {
                            var e = new n.Path(t, {
                                fill: null,
                                stroke: this.color,
                                strokeWidth: this.width,
                                strokeLineCap: this.strokeLineCap,
                                strokeMiterLimit: this.strokeMiterLimit,
                                strokeLineJoin: this.strokeLineJoin,
                                strokeDashArray: this.strokeDashArray
                            });
                            return this.shadow && (this.shadow.affectStroke = !0, e.shadow = new n.Shadow(this.shadow)), e
                        },
                        decimatePoints: function (t, e) {
                            if (t.length <= 2) return t;
                            var i, r = this.canvas.getZoom(),
                                s = Math.pow(e / r, 2),
                                o = t.length - 1,
                                a = t[0],
                                h = [a];
                            for (i = 1; i < o; i++) Math.pow(a.x - t[i].x, 2) + Math.pow(a.y - t[i].y, 2) >= s && (a = t[i], h.push(a));
                            return 1 === h.length && h.push(new n.Point(h[0].x, h[0].y)), h
                        },
                        _finalizeAndAddPath: function () {
                            this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
                            var t = this.convertPointsToSVGPath(this._points).join("");
                            if ("M 0 0 Q 0 0 0 0 L 0 0" !== t) {
                                var e = this.createPath(t);
                                this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", {
                                    path: e
                                }), this.canvas.add(e), this.canvas.requestRenderAll(), e.setCoords(), this._resetShadow(), this.canvas.fire("path:created", {
                                    path: e
                                })
                            } else this.canvas.requestRenderAll()
                        }
                    }), n.CircleBrush = n.util.createClass(n.BaseBrush, {
                        width: 10,
                        initialize: function (t) {
                            this.canvas = t, this.points = []
                        },
                        drawDot: function (t) {
                            var e = this.addPoint(t),
                                i = this.canvas.contextTop;
                            this._saveAndTransform(i), this.dot(i, e), i.restore()
                        },
                        dot: function (t, e) {
                            t.fillStyle = e.fill, t.beginPath(), t.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1), t.closePath(), t.fill()
                        },
                        onMouseDown: function (t) {
                            this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(t)
                        },
                        _render: function () {
                            var t, e, i = this.canvas.contextTop,
                                r = this.points;
                            for (this._saveAndTransform(i), t = 0, e = r.length; t < e; t++) this.dot(i, r[t]);
                            i.restore()
                        },
                        onMouseMove: function (t) {
                            !0 === this.limitedToCanvasSize && this._isOutSideCanvas(t) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(t), this._render()) : this.drawDot(t))
                        },
                        onMouseUp: function () {
                            var t, e, i = this.canvas.renderOnAddRemove;
                            this.canvas.renderOnAddRemove = !1;
                            var r = [];
                            for (t = 0, e = this.points.length; t < e; t++) {
                                var s = this.points[t],
                                    o = new n.Circle({
                                        radius: s.radius,
                                        left: s.x,
                                        top: s.y,
                                        originX: "center",
                                        originY: "center",
                                        fill: s.fill
                                    });
                                this.shadow && (o.shadow = new n.Shadow(this.shadow)), r.push(o)
                            }
                            var a = new n.Group(r);
                            a.canvas = this.canvas, this.canvas.fire("before:path:created", {
                                path: a
                            }), this.canvas.add(a), this.canvas.fire("path:created", {
                                path: a
                            }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = i, this.canvas.requestRenderAll()
                        },
                        addPoint: function (t) {
                            var e = new n.Point(t.x, t.y),
                                i = n.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2,
                                r = new n.Color(this.color).setAlpha(n.util.getRandomInt(0, 100) / 100).toRgba();
                            return e.radius = i, e.fill = r, this.points.push(e), e
                        }
                    }), n.SprayBrush = n.util.createClass(n.BaseBrush, {
                        width: 10,
                        density: 20,
                        dotWidth: 1,
                        dotWidthVariance: 1,
                        randomOpacity: !1,
                        optimizeOverlapping: !0,
                        initialize: function (t) {
                            this.canvas = t, this.sprayChunks = []
                        },
                        onMouseDown: function (t) {
                            this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(t), this.render(this.sprayChunkPoints)
                        },
                        onMouseMove: function (t) {
                            !0 === this.limitedToCanvasSize && this._isOutSideCanvas(t) || (this.addSprayChunk(t), this.render(this.sprayChunkPoints))
                        },
                        onMouseUp: function () {
                            var t = this.canvas.renderOnAddRemove;
                            this.canvas.renderOnAddRemove = !1;
                            for (var e = [], i = 0, r = this.sprayChunks.length; i < r; i++)
                                for (var s = this.sprayChunks[i], o = 0, a = s.length; o < a; o++) {
                                    var h = new n.Rect({
                                        width: s[o].width,
                                        height: s[o].width,
                                        left: s[o].x + 1,
                                        top: s[o].y + 1,
                                        originX: "center",
                                        originY: "center",
                                        fill: this.color
                                    });
                                    e.push(h)
                                }
                            this.optimizeOverlapping && (e = this._getOptimizedRects(e));
                            var c = new n.Group(e);
                            this.shadow && c.set("shadow", new n.Shadow(this.shadow)), this.canvas.fire("before:path:created", {
                                path: c
                            }), this.canvas.add(c), this.canvas.fire("path:created", {
                                path: c
                            }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t, this.canvas.requestRenderAll()
                        },
                        _getOptimizedRects: function (t) {
                            var e, i, r, n = {};
                            for (i = 0, r = t.length; i < r; i++) n[e = t[i].left + "" + t[i].top] || (n[e] = t[i]);
                            var s = [];
                            for (e in n) s.push(n[e]);
                            return s
                        },
                        render: function (t) {
                            var e, i, r = this.canvas.contextTop;
                            for (r.fillStyle = this.color, this._saveAndTransform(r), e = 0, i = t.length; e < i; e++) {
                                var n = t[e];
                                "undefined" !== typeof n.opacity && (r.globalAlpha = n.opacity), r.fillRect(n.x, n.y, n.width, n.width)
                            }
                            r.restore()
                        },
                        _render: function () {
                            var t, e, i = this.canvas.contextTop;
                            for (i.fillStyle = this.color, this._saveAndTransform(i), t = 0, e = this.sprayChunks.length; t < e; t++) this.render(this.sprayChunks[t]);
                            i.restore()
                        },
                        addSprayChunk: function (t) {
                            this.sprayChunkPoints = [];
                            var e, i, r, s, o = this.width / 2;
                            for (s = 0; s < this.density; s++) {
                                e = n.util.getRandomInt(t.x - o, t.x + o), i = n.util.getRandomInt(t.y - o, t.y + o), r = this.dotWidthVariance ? n.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
                                var a = new n.Point(e, i);
                                a.width = r, this.randomOpacity && (a.opacity = n.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(a)
                            }
                            this.sprayChunks.push(this.sprayChunkPoints)
                        }
                    }), n.PatternBrush = n.util.createClass(n.PencilBrush, {
                        getPatternSrc: function () {
                            var t = n.util.createCanvasElement(),
                                e = t.getContext("2d");
                            return t.width = t.height = 25, e.fillStyle = this.color, e.beginPath(), e.arc(10, 10, 10, 0, 2 * Math.PI, !1), e.closePath(), e.fill(), t
                        },
                        getPatternSrcFunction: function () {
                            return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"')
                        },
                        getPattern: function () {
                            return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat")
                        },
                        _setBrushStyles: function () {
                            this.callSuper("_setBrushStyles"), this.canvas.contextTop.strokeStyle = this.getPattern()
                        },
                        createPath: function (t) {
                            var e = this.callSuper("createPath", t),
                                i = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);
                            return e.stroke = new n.Pattern({
                                source: this.source || this.getPatternSrcFunction(),
                                offsetX: -i.x,
                                offsetY: -i.y
                            }), e
                        }
                    }),
                    function () {
                        var t = n.util.getPointer,
                            e = n.util.degreesToRadians,
                            i = Math.abs,
                            r = n.StaticCanvas.supports("setLineDash"),
                            s = n.util.isTouchEvent,
                            o = .5;
                        for (var a in n.Canvas = n.util.createClass(n.StaticCanvas, {
                                initialize: function (t, e) {
                                    e || (e = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(t, e), this._initInteractive(), this._createCacheCanvas()
                                },
                                uniformScaling: !0,
                                uniScaleKey: "shiftKey",
                                centeredScaling: !1,
                                centeredRotation: !1,
                                centeredKey: "altKey",
                                altActionKey: "shiftKey",
                                interactive: !0,
                                selection: !0,
                                selectionKey: "shiftKey",
                                altSelectionKey: null,
                                selectionColor: "rgba(100, 100, 255, 0.3)",
                                selectionDashArray: [],
                                selectionBorderColor: "rgba(255, 255, 255, 0.3)",
                                selectionLineWidth: 1,
                                selectionFullyContained: !1,
                                hoverCursor: "move",
                                moveCursor: "move",
                                defaultCursor: "default",
                                freeDrawingCursor: "crosshair",
                                rotationCursor: "crosshair",
                                notAllowedCursor: "not-allowed",
                                containerClass: "canvas-container",
                                perPixelTargetFind: !1,
                                targetFindTolerance: 0,
                                skipTargetFind: !1,
                                isDrawingMode: !1,
                                preserveObjectStacking: !1,
                                snapAngle: 0,
                                snapThreshold: null,
                                stopContextMenu: !1,
                                fireRightClick: !1,
                                fireMiddleClick: !1,
                                targets: [],
                                _hoveredTarget: null,
                                _hoveredTargets: [],
                                _initInteractive: function () {
                                    this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = n.PencilBrush && new n.PencilBrush(this), this.calcOffset()
                                },
                                _chooseObjectsToRender: function () {
                                    var t, e, i, r = this.getActiveObjects();
                                    if (r.length > 0 && !this.preserveObjectStacking) {
                                        e = [], i = [];
                                        for (var n = 0, s = this._objects.length; n < s; n++) t = this._objects[n], -1 === r.indexOf(t) ? e.push(t) : i.push(t);
                                        r.length > 1 && (this._activeObject._objects = i), e.push.apply(e, i)
                                    } else e = this._objects;
                                    return e
                                },
                                renderAll: function () {
                                    !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && this.renderTopLayer(this.contextTop);
                                    var t = this.contextContainer;
                                    return this.renderCanvas(t, this._chooseObjectsToRender()), this
                                },
                                renderTopLayer: function (t) {
                                    t.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(t), this.contextTopDirty = !0), t.restore()
                                },
                                renderTop: function () {
                                    var t = this.contextTop;
                                    return this.clearContext(t), this.renderTopLayer(t), this.fire("after:render"), this
                                },
                                _normalizePointer: function (t, e) {
                                    var i = t.calcTransformMatrix(),
                                        r = n.util.invertTransform(i),
                                        s = this.restorePointerVpt(e);
                                    return n.util.transformPoint(s, r)
                                },
                                isTargetTransparent: function (t, e, i) {
                                    if (t.shouldCache() && t._cacheCanvas && t !== this._activeObject) {
                                        var r = this._normalizePointer(t, {
                                                x: e,
                                                y: i
                                            }),
                                            s = Math.max(t.cacheTranslationX + r.x * t.zoomX, 0),
                                            o = Math.max(t.cacheTranslationY + r.y * t.zoomY, 0);
                                        return n.util.isTransparent(t._cacheContext, Math.round(s), Math.round(o), this.targetFindTolerance)
                                    }
                                    var a = this.contextCache,
                                        h = t.selectionBackgroundColor,
                                        c = this.viewportTransform;
                                    return t.selectionBackgroundColor = "", this.clearContext(a), a.save(), a.transform(c[0], c[1], c[2], c[3], c[4], c[5]), t.render(a), a.restore(), t.selectionBackgroundColor = h, n.util.isTransparent(a, e, i, this.targetFindTolerance)
                                },
                                _isSelectionKeyPressed: function (t) {
                                    return "[object Array]" === Object.prototype.toString.call(this.selectionKey) ? !!this.selectionKey.find((function (e) {
                                        return !0 === t[e]
                                    })) : t[this.selectionKey]
                                },
                                _shouldClearSelection: function (t, e) {
                                    var i = this.getActiveObjects(),
                                        r = this._activeObject;
                                    return !e || e && r && i.length > 1 && -1 === i.indexOf(e) && r !== e && !this._isSelectionKeyPressed(t) || e && !e.evented || e && !e.selectable && r && r !== e
                                },
                                _shouldCenterTransform: function (t, e, i) {
                                    var r;
                                    if (t) return "scale" === e || "scaleX" === e || "scaleY" === e || "resizing" === e ? r = this.centeredScaling || t.centeredScaling : "rotate" === e && (r = this.centeredRotation || t.centeredRotation), r ? !i : i
                                },
                                _getOriginFromCorner: function (t, e) {
                                    var i = {
                                        x: t.originX,
                                        y: t.originY
                                    };
                                    return "ml" === e || "tl" === e || "bl" === e ? i.x = "right" : "mr" !== e && "tr" !== e && "br" !== e || (i.x = "left"), "tl" === e || "mt" === e || "tr" === e ? i.y = "bottom" : "bl" !== e && "mb" !== e && "br" !== e || (i.y = "top"), i
                                },
                                _getActionFromCorner: function (t, e, i, r) {
                                    if (!e || !t) return "drag";
                                    var n = r.controls[e];
                                    return n.getActionName(i, n, r)
                                },
                                _setupCurrentTransform: function (t, i, r) {
                                    if (i) {
                                        var s = this.getPointer(t),
                                            o = i.__corner,
                                            a = i.controls[o],
                                            h = r && o ? a.getActionHandler(t, i, a) : n.controlsUtils.dragHandler,
                                            c = this._getActionFromCorner(r, o, t, i),
                                            l = this._getOriginFromCorner(i, o),
                                            u = t[this.centeredKey],
                                            f = {
                                                target: i,
                                                action: c,
                                                actionHandler: h,
                                                corner: o,
                                                scaleX: i.scaleX,
                                                scaleY: i.scaleY,
                                                skewX: i.skewX,
                                                skewY: i.skewY,
                                                offsetX: s.x - i.left,
                                                offsetY: s.y - i.top,
                                                originX: l.x,
                                                originY: l.y,
                                                ex: s.x,
                                                ey: s.y,
                                                lastX: s.x,
                                                lastY: s.y,
                                                theta: e(i.angle),
                                                width: i.width * i.scaleX,
                                                shiftKey: t.shiftKey,
                                                altKey: u,
                                                original: n.util.saveObjectTransform(i)
                                            };
                                        this._shouldCenterTransform(i, c, u) && (f.originX = "center", f.originY = "center"), f.original.originX = l.x, f.original.originY = l.y, this._currentTransform = f, this._beforeTransform(t)
                                    }
                                },
                                setCursor: function (t) {
                                    this.upperCanvasEl.style.cursor = t
                                },
                                _drawSelection: function (t) {
                                    var e = this._groupSelector,
                                        s = e.left,
                                        a = e.top,
                                        h = i(s),
                                        c = i(a);
                                    if (this.selectionColor && (t.fillStyle = this.selectionColor, t.fillRect(e.ex - (s > 0 ? 0 : -s), e.ey - (a > 0 ? 0 : -a), h, c)), this.selectionLineWidth && this.selectionBorderColor)
                                        if (t.lineWidth = this.selectionLineWidth, t.strokeStyle = this.selectionBorderColor, this.selectionDashArray.length > 1 && !r) {
                                            var l = e.ex + o - (s > 0 ? 0 : h),
                                                u = e.ey + o - (a > 0 ? 0 : c);
                                            t.beginPath(), n.util.drawDashedLine(t, l, u, l + h, u, this.selectionDashArray), n.util.drawDashedLine(t, l, u + c - 1, l + h, u + c - 1, this.selectionDashArray), n.util.drawDashedLine(t, l, u, l, u + c, this.selectionDashArray), n.util.drawDashedLine(t, l + h - 1, u, l + h - 1, u + c, this.selectionDashArray), t.closePath(), t.stroke()
                                        } else n.Object.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(e.ex + o - (s > 0 ? 0 : h), e.ey + o - (a > 0 ? 0 : c), h, c)
                                },
                                findTarget: function (t, e) {
                                    if (!this.skipTargetFind) {
                                        var i, r, n = this.getPointer(t, !0),
                                            o = this._activeObject,
                                            a = this.getActiveObjects(),
                                            h = s(t),
                                            c = a.length > 1 && !e || 1 === a.length;
                                        if (this.targets = [], c && o._findTargetCorner(n, h)) return o;
                                        if (a.length > 1 && !e && o === this._searchPossibleTargets([o], n)) return o;
                                        if (1 === a.length && o === this._searchPossibleTargets([o], n)) {
                                            if (!this.preserveObjectStacking) return o;
                                            i = o, r = this.targets, this.targets = []
                                        }
                                        var l = this._searchPossibleTargets(this._objects, n);
                                        return t[this.altSelectionKey] && l && i && l !== i && (l = i, this.targets = r), l
                                    }
                                },
                                _checkTarget: function (t, e, i) {
                                    if (e && e.visible && e.evented && e.containsPoint(t)) {
                                        if (!this.perPixelTargetFind && !e.perPixelTargetFind || e.isEditing) return !0;
                                        if (!this.isTargetTransparent(e, i.x, i.y)) return !0
                                    }
                                },
                                _searchPossibleTargets: function (t, e) {
                                    for (var i, r, s = t.length; s--;) {
                                        var o = t[s],
                                            a = o.group ? this._normalizePointer(o.group, e) : e;
                                        if (this._checkTarget(a, o, e)) {
                                            (i = t[s]).subTargetCheck && i instanceof n.Group && (r = this._searchPossibleTargets(i._objects, e)) && this.targets.push(r);
                                            break
                                        }
                                    }
                                    return i
                                },
                                restorePointerVpt: function (t) {
                                    return n.util.transformPoint(t, n.util.invertTransform(this.viewportTransform))
                                },
                                getPointer: function (e, i) {
                                    if (this._absolutePointer && !i) return this._absolutePointer;
                                    if (this._pointer && i) return this._pointer;
                                    var r, n = t(e),
                                        s = this.upperCanvasEl,
                                        o = s.getBoundingClientRect(),
                                        a = o.width || 0,
                                        h = o.height || 0;
                                    a && h || ("top" in o && "bottom" in o && (h = Math.abs(o.top - o.bottom)), "right" in o && "left" in o && (a = Math.abs(o.right - o.left))), this.calcOffset(), n.x = n.x - this._offset.left, n.y = n.y - this._offset.top, i || (n = this.restorePointerVpt(n));
                                    var c = this.getRetinaScaling();
                                    return 1 !== c && (n.x /= c, n.y /= c), r = 0 === a || 0 === h ? {
                                        width: 1,
                                        height: 1
                                    } : {
                                        width: s.width / a,
                                        height: s.height / h
                                    }, {
                                        x: n.x * r.width,
                                        y: n.y * r.height
                                    }
                                },
                                _createUpperCanvas: function () {
                                    var t = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""),
                                        e = this.lowerCanvasEl,
                                        i = this.upperCanvasEl;
                                    i ? i.className = "" : (i = this._createCanvasElement(), this.upperCanvasEl = i), n.util.addClass(i, "upper-canvas " + t), this.wrapperEl.appendChild(i), this._copyCanvasStyle(e, i), this._applyCanvasStyle(i), this.contextTop = i.getContext("2d")
                                },
                                _createCacheCanvas: function () {
                                    this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d")
                                },
                                _initWrapperElement: function () {
                                    this.wrapperEl = n.util.wrapElement(this.lowerCanvasEl, "div", {
                                        class: this.containerClass
                                    }), n.util.setStyle(this.wrapperEl, {
                                        width: this.width + "px",
                                        height: this.height + "px",
                                        position: "relative"
                                    }), n.util.makeElementUnselectable(this.wrapperEl)
                                },
                                _applyCanvasStyle: function (t) {
                                    var e = this.width || t.width,
                                        i = this.height || t.height;
                                    n.util.setStyle(t, {
                                        position: "absolute",
                                        width: e + "px",
                                        height: i + "px",
                                        left: 0,
                                        top: 0,
                                        "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
                                        "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none"
                                    }), t.width = e, t.height = i, n.util.makeElementUnselectable(t)
                                },
                                _copyCanvasStyle: function (t, e) {
                                    e.style.cssText = t.style.cssText
                                },
                                getSelectionContext: function () {
                                    return this.contextTop
                                },
                                getSelectionElement: function () {
                                    return this.upperCanvasEl
                                },
                                getActiveObject: function () {
                                    return this._activeObject
                                },
                                getActiveObjects: function () {
                                    var t = this._activeObject;
                                    return t ? "activeSelection" === t.type && t._objects ? t._objects.slice(0) : [t] : []
                                },
                                _onObjectRemoved: function (t) {
                                    t === this._activeObject && (this.fire("before:selection:cleared", {
                                        target: t
                                    }), this._discardActiveObject(), this.fire("selection:cleared", {
                                        target: t
                                    }), t.fire("deselected")), t === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", t)
                                },
                                _fireSelectionEvents: function (t, e) {
                                    var i = !1,
                                        r = this.getActiveObjects(),
                                        n = [],
                                        s = [];
                                    t.forEach((function (t) {
                                        -1 === r.indexOf(t) && (i = !0, t.fire("deselected", {
                                            e: e,
                                            target: t
                                        }), s.push(t))
                                    })), r.forEach((function (r) {
                                        -1 === t.indexOf(r) && (i = !0, r.fire("selected", {
                                            e: e,
                                            target: r
                                        }), n.push(r))
                                    })), t.length > 0 && r.length > 0 ? i && this.fire("selection:updated", {
                                        e: e,
                                        selected: n,
                                        deselected: s,
                                        updated: n[0] || s[0],
                                        target: this._activeObject
                                    }) : r.length > 0 ? this.fire("selection:created", {
                                        e: e,
                                        selected: n,
                                        target: this._activeObject
                                    }) : t.length > 0 && this.fire("selection:cleared", {
                                        e: e,
                                        deselected: s
                                    })
                                },
                                setActiveObject: function (t, e) {
                                    var i = this.getActiveObjects();
                                    return this._setActiveObject(t, e), this._fireSelectionEvents(i, e), this
                                },
                                _setActiveObject: function (t, e) {
                                    return this._activeObject !== t && (!!this._discardActiveObject(e, t) && (!t.onSelect({
                                        e: e
                                    }) && (this._activeObject = t, !0)))
                                },
                                _discardActiveObject: function (t, e) {
                                    var i = this._activeObject;
                                    if (i) {
                                        if (i.onDeselect({
                                                e: t,
                                                object: e
                                            })) return !1;
                                        this._activeObject = null
                                    }
                                    return !0
                                },
                                discardActiveObject: function (t) {
                                    var e = this.getActiveObjects(),
                                        i = this.getActiveObject();
                                    return e.length && this.fire("before:selection:cleared", {
                                        target: i,
                                        e: t
                                    }), this._discardActiveObject(t), this._fireSelectionEvents(e, t), this
                                },
                                dispose: function () {
                                    var t = this.wrapperEl;
                                    return this.removeListeners(), t.removeChild(this.upperCanvasEl), t.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach(function (t) {
                                        n.util.cleanUpJsdomNode(this[t]), this[t] = void 0
                                    }.bind(this)), t.parentNode && t.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, n.StaticCanvas.prototype.dispose.call(this), this
                                },
                                clear: function () {
                                    return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear")
                                },
                                drawControls: function (t) {
                                    var e = this._activeObject;
                                    e && e._renderControls(t)
                                },
                                _toObject: function (t, e, i) {
                                    var r = this._realizeGroupTransformOnObject(t),
                                        n = this.callSuper("_toObject", t, e, i);
                                    return this._unwindGroupTransformOnObject(t, r), n
                                },
                                _realizeGroupTransformOnObject: function (t) {
                                    if (t.group && "activeSelection" === t.group.type && this._activeObject === t.group) {
                                        var e = {};
                                        return ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"].forEach((function (i) {
                                            e[i] = t[i]
                                        })), n.util.addTransformToObject(t, this._activeObject.calcOwnMatrix()), e
                                    }
                                    return null
                                },
                                _unwindGroupTransformOnObject: function (t, e) {
                                    e && t.set(e)
                                },
                                _setSVGObject: function (t, e, i) {
                                    var r = this._realizeGroupTransformOnObject(e);
                                    this.callSuper("_setSVGObject", t, e, i), this._unwindGroupTransformOnObject(e, r)
                                },
                                setViewportTransform: function (t) {
                                    this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), n.StaticCanvas.prototype.setViewportTransform.call(this, t)
                                }
                            }), n.StaticCanvas) "prototype" !== a && (n.Canvas[a] = n.StaticCanvas[a])
                    }(),
                    function () {
                        var t = n.util.addListener,
                            e = n.util.removeListener,
                            i = {
                                passive: !1
                            };

                        function r(t, e) {
                            return t.button && t.button === e - 1
                        }
                        n.util.object.extend(n.Canvas.prototype, {
                            mainTouchId: null,
                            _initEventListeners: function () {
                                this.removeListeners(), this._bindEvents(), this.addOrRemove(t, "add")
                            },
                            _getEventPrefix: function () {
                                return this.enablePointerEvents ? "pointer" : "mouse"
                            },
                            addOrRemove: function (t, e) {
                                var r = this.upperCanvasEl,
                                    s = this._getEventPrefix();
                                t(n.window, "resize", this._onResize), t(r, s + "down", this._onMouseDown), t(r, s + "move", this._onMouseMove, i), t(r, s + "out", this._onMouseOut), t(r, s + "enter", this._onMouseEnter), t(r, "wheel", this._onMouseWheel), t(r, "contextmenu", this._onContextMenu), t(r, "dblclick", this._onDoubleClick), t(r, "dragover", this._onDragOver), t(r, "dragenter", this._onDragEnter), t(r, "dragleave", this._onDragLeave), t(r, "drop", this._onDrop), this.enablePointerEvents || t(r, "touchstart", this._onTouchStart, i), "undefined" !== typeof eventjs && e in eventjs && (eventjs[e](r, "gesture", this._onGesture), eventjs[e](r, "drag", this._onDrag), eventjs[e](r, "orientation", this._onOrientationChange), eventjs[e](r, "shake", this._onShake), eventjs[e](r, "longpress", this._onLongPress))
                            },
                            removeListeners: function () {
                                this.addOrRemove(e, "remove");
                                var t = this._getEventPrefix();
                                e(n.document, t + "up", this._onMouseUp), e(n.document, "touchend", this._onTouchEnd, i), e(n.document, t + "move", this._onMouseMove, i), e(n.document, "touchmove", this._onMouseMove, i)
                            },
                            _bindEvents: function () {
                                this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._simpleEventHandler.bind(this, "drop"), this.eventsBound = !0)
                            },
                            _onGesture: function (t, e) {
                                this.__onTransformGesture && this.__onTransformGesture(t, e)
                            },
                            _onDrag: function (t, e) {
                                this.__onDrag && this.__onDrag(t, e)
                            },
                            _onMouseWheel: function (t) {
                                this.__onMouseWheel(t)
                            },
                            _onMouseOut: function (t) {
                                var e = this._hoveredTarget;
                                this.fire("mouse:out", {
                                    target: e,
                                    e: t
                                }), this._hoveredTarget = null, e && e.fire("mouseout", {
                                    e: t
                                });
                                var i = this;
                                this._hoveredTargets.forEach((function (r) {
                                    i.fire("mouse:out", {
                                        target: e,
                                        e: t
                                    }), r && e.fire("mouseout", {
                                        e: t
                                    })
                                })), this._hoveredTargets = [], this._iTextInstances && this._iTextInstances.forEach((function (t) {
                                    t.isEditing && t.hiddenTextarea.focus()
                                }))
                            },
                            _onMouseEnter: function (t) {
                                this._currentTransform || this.findTarget(t) || (this.fire("mouse:over", {
                                    target: null,
                                    e: t
                                }), this._hoveredTarget = null, this._hoveredTargets = [])
                            },
                            _onOrientationChange: function (t, e) {
                                this.__onOrientationChange && this.__onOrientationChange(t, e)
                            },
                            _onShake: function (t, e) {
                                this.__onShake && this.__onShake(t, e)
                            },
                            _onLongPress: function (t, e) {
                                this.__onLongPress && this.__onLongPress(t, e)
                            },
                            _onDragOver: function (t) {
                                t.preventDefault();
                                var e = this._simpleEventHandler("dragover", t);
                                this._fireEnterLeaveEvents(e, t)
                            },
                            _onContextMenu: function (t) {
                                return this.stopContextMenu && (t.stopPropagation(), t.preventDefault()), !1
                            },
                            _onDoubleClick: function (t) {
                                this._cacheTransformEventData(t), this._handleEvent(t, "dblclick"), this._resetTransformEventData(t)
                            },
                            getPointerId: function (t) {
                                var e = t.changedTouches;
                                return e ? e[0] && e[0].identifier : this.enablePointerEvents ? t.pointerId : -1
                            },
                            _isMainEvent: function (t) {
                                return !0 === t.isPrimary || !1 !== t.isPrimary && ("touchend" === t.type && 0 === t.touches.length || (!t.changedTouches || t.changedTouches[0].identifier === this.mainTouchId))
                            },
                            _onTouchStart: function (r) {
                                r.preventDefault(), null === this.mainTouchId && (this.mainTouchId = this.getPointerId(r)), this.__onMouseDown(r), this._resetTransformEventData();
                                var s = this.upperCanvasEl,
                                    o = this._getEventPrefix();
                                t(n.document, "touchend", this._onTouchEnd, i), t(n.document, "touchmove", this._onMouseMove, i), e(s, o + "down", this._onMouseDown)
                            },
                            _onMouseDown: function (r) {
                                this.__onMouseDown(r), this._resetTransformEventData();
                                var s = this.upperCanvasEl,
                                    o = this._getEventPrefix();
                                e(s, o + "move", this._onMouseMove, i), t(n.document, o + "up", this._onMouseUp), t(n.document, o + "move", this._onMouseMove, i)
                            },
                            _onTouchEnd: function (r) {
                                if (!(r.touches.length > 0)) {
                                    this.__onMouseUp(r), this._resetTransformEventData(), this.mainTouchId = null;
                                    var s = this._getEventPrefix();
                                    e(n.document, "touchend", this._onTouchEnd, i), e(n.document, "touchmove", this._onMouseMove, i);
                                    var o = this;
                                    this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout((function () {
                                        t(o.upperCanvasEl, s + "down", o._onMouseDown), o._willAddMouseDown = 0
                                    }), 400)
                                }
                            },
                            _onMouseUp: function (r) {
                                this.__onMouseUp(r), this._resetTransformEventData();
                                var s = this.upperCanvasEl,
                                    o = this._getEventPrefix();
                                this._isMainEvent(r) && (e(n.document, o + "up", this._onMouseUp), e(n.document, o + "move", this._onMouseMove, i), t(s, o + "move", this._onMouseMove, i))
                            },
                            _onMouseMove: function (t) {
                                !this.allowTouchScrolling && t.preventDefault && t.preventDefault(), this.__onMouseMove(t)
                            },
                            _onResize: function () {
                                this.calcOffset()
                            },
                            _shouldRender: function (t) {
                                var e = this._activeObject;
                                return !!(!!e !== !!t || e && t && e !== t) || (e && e.isEditing, !1)
                            },
                            __onMouseUp: function (t) {
                                var e, i = this._currentTransform,
                                    s = this._groupSelector,
                                    o = !1,
                                    a = !s || 0 === s.left && 0 === s.top;
                                if (this._cacheTransformEventData(t), e = this._target, this._handleEvent(t, "up:before"), r(t, 3)) this.fireRightClick && this._handleEvent(t, "up", 3, a);
                                else {
                                    if (r(t, 2)) return this.fireMiddleClick && this._handleEvent(t, "up", 2, a), void this._resetTransformEventData();
                                    if (this.isDrawingMode && this._isCurrentlyDrawing) this._onMouseUpInDrawingMode(t);
                                    else if (this._isMainEvent(t)) {
                                        if (i && (this._finalizeCurrentTransform(t), o = i.actionPerformed), !a) {
                                            var h = e === this._activeObject;
                                            this._maybeGroupObjects(t), o || (o = this._shouldRender(e) || !h && e === this._activeObject)
                                        }
                                        if (e) {
                                            if (e.selectable && e !== this._activeObject && "up" === e.activeOn) this.setActiveObject(e, t), o = !0;
                                            else {
                                                var c = e._findTargetCorner(this.getPointer(t, !0), n.util.isTouchEvent(t)),
                                                    l = e.controls[c],
                                                    u = l && l.getMouseUpHandler(t, e, l);
                                                if (u) {
                                                    var f = this.getPointer(t);
                                                    u(t, i, f.x, f.y)
                                                }
                                            }
                                            e.isMoving = !1
                                        }
                                        this._setCursorFromEvent(t, e), this._handleEvent(t, "up", 1, a), this._groupSelector = null, this._currentTransform = null, e && (e.__corner = 0), o ? this.requestRenderAll() : a || this.renderTop()
                                    }
                                }
                            },
                            _simpleEventHandler: function (t, e) {
                                var i = this.findTarget(e),
                                    r = this.targets,
                                    n = {
                                        e: e,
                                        target: i,
                                        subTargets: r
                                    };
                                if (this.fire(t, n), i && i.fire(t, n), !r) return i;
                                for (var s = 0; s < r.length; s++) r[s].fire(t, n);
                                return i
                            },
                            _handleEvent: function (t, e, i, r) {
                                var n = this._target,
                                    s = this.targets || [],
                                    o = {
                                        e: t,
                                        target: n,
                                        subTargets: s,
                                        button: i || 1,
                                        isClick: r || !1,
                                        pointer: this._pointer,
                                        absolutePointer: this._absolutePointer,
                                        transform: this._currentTransform
                                    };
                                "up" === e && (o.currentTarget = this.findTarget(t), o.currentSubTargets = this.targets), this.fire("mouse:" + e, o), n && n.fire("mouse" + e, o);
                                for (var a = 0; a < s.length; a++) s[a].fire("mouse" + e, o)
                            },
                            _finalizeCurrentTransform: function (t) {
                                var e, i = this._currentTransform,
                                    r = i.target,
                                    n = {
                                        e: t,
                                        target: r,
                                        transform: i,
                                        action: i.action
                                    };
                                r._scaling && (r._scaling = !1), r.setCoords(), (i.actionPerformed || this.stateful && r.hasStateChanged()) && (i.actionPerformed && (e = this._addEventOptions(n, i), this._fire(e, n)), this._fire("modified", n))
                            },
                            _addEventOptions: function (t, e) {
                                var i, r;
                                switch (e.action) {
                                    case "scaleX":
                                        i = "scaled", r = "x";
                                        break;
                                    case "scaleY":
                                        i = "scaled", r = "y";
                                        break;
                                    case "skewX":
                                        i = "skewed", r = "x";
                                        break;
                                    case "skewY":
                                        i = "skewed", r = "y";
                                        break;
                                    case "scale":
                                        i = "scaled", r = "equally";
                                        break;
                                    case "rotate":
                                        i = "rotated";
                                        break;
                                    case "drag":
                                        i = "moved"
                                }
                                return t.by = r, i
                            },
                            _onMouseDownInDrawingMode: function (t) {
                                this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(t).requestRenderAll();
                                var e = this.getPointer(t);
                                this.freeDrawingBrush.onMouseDown(e, {
                                    e: t,
                                    pointer: e
                                }), this._handleEvent(t, "down")
                            },
                            _onMouseMoveInDrawingMode: function (t) {
                                if (this._isCurrentlyDrawing) {
                                    var e = this.getPointer(t);
                                    this.freeDrawingBrush.onMouseMove(e, {
                                        e: t,
                                        pointer: e
                                    })
                                }
                                this.setCursor(this.freeDrawingCursor), this._handleEvent(t, "move")
                            },
                            _onMouseUpInDrawingMode: function (t) {
                                var e = this.getPointer(t);
                                this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({
                                    e: t,
                                    pointer: e
                                }), this._handleEvent(t, "up")
                            },
                            __onMouseDown: function (t) {
                                this._cacheTransformEventData(t), this._handleEvent(t, "down:before");
                                var e = this._target;
                                if (r(t, 3)) this.fireRightClick && this._handleEvent(t, "down", 3);
                                else if (r(t, 2)) this.fireMiddleClick && this._handleEvent(t, "down", 2);
                                else if (this.isDrawingMode) this._onMouseDownInDrawingMode(t);
                                else if (this._isMainEvent(t) && !this._currentTransform) {
                                    var i = this._pointer;
                                    this._previousPointer = i;
                                    var s = this._shouldRender(e),
                                        o = this._shouldGroup(t, e);
                                    if (this._shouldClearSelection(t, e) ? this.discardActiveObject(t) : o && (this._handleGrouping(t, e), e = this._activeObject), !this.selection || e && (e.selectable || e.isEditing || e === this._activeObject) || (this._groupSelector = {
                                            ex: i.x,
                                            ey: i.y,
                                            top: 0,
                                            left: 0
                                        }), e) {
                                        var a = e === this._activeObject;
                                        e.selectable && "down" === e.activeOn && this.setActiveObject(e, t);
                                        var h = e._findTargetCorner(this.getPointer(t, !0), n.util.isTouchEvent(t));
                                        if (e.__corner = h, e === this._activeObject && (h || !o)) {
                                            this._setupCurrentTransform(t, e, a);
                                            var c = e.controls[h],
                                                l = (i = this.getPointer(t), c && c.getMouseDownHandler(t, e, c));
                                            l && l(t, this._currentTransform, i.x, i.y)
                                        }
                                    }
                                    this._handleEvent(t, "down"), (s || o) && this.requestRenderAll()
                                }
                            },
                            _resetTransformEventData: function () {
                                this._target = null, this._pointer = null, this._absolutePointer = null
                            },
                            _cacheTransformEventData: function (t) {
                                this._resetTransformEventData(), this._pointer = this.getPointer(t, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t) || null
                            },
                            _beforeTransform: function (t) {
                                var e = this._currentTransform;
                                this.stateful && e.target.saveState(), this.fire("before:transform", {
                                    e: t,
                                    transform: e
                                })
                            },
                            __onMouseMove: function (t) {
                                var e, i;
                                if (this._handleEvent(t, "move:before"), this._cacheTransformEventData(t), this.isDrawingMode) this._onMouseMoveInDrawingMode(t);
                                else if (this._isMainEvent(t)) {
                                    var r = this._groupSelector;
                                    r ? (i = this._pointer, r.left = i.x - r.ex, r.top = i.y - r.ey, this.renderTop()) : this._currentTransform ? this._transformObject(t) : (e = this.findTarget(t) || null, this._setCursorFromEvent(t, e), this._fireOverOutEvents(e, t)), this._handleEvent(t, "move"), this._resetTransformEventData()
                                }
                            },
                            _fireOverOutEvents: function (t, e) {
                                var i = this._hoveredTarget,
                                    r = this._hoveredTargets,
                                    n = this.targets,
                                    s = Math.max(r.length, n.length);
                                this.fireSyntheticInOutEvents(t, e, {
                                    oldTarget: i,
                                    evtOut: "mouseout",
                                    canvasEvtOut: "mouse:out",
                                    evtIn: "mouseover",
                                    canvasEvtIn: "mouse:over"
                                });
                                for (var o = 0; o < s; o++) this.fireSyntheticInOutEvents(n[o], e, {
                                    oldTarget: r[o],
                                    evtOut: "mouseout",
                                    evtIn: "mouseover"
                                });
                                this._hoveredTarget = t, this._hoveredTargets = this.targets.concat()
                            },
                            _fireEnterLeaveEvents: function (t, e) {
                                var i = this._draggedoverTarget,
                                    r = this._hoveredTargets,
                                    n = this.targets,
                                    s = Math.max(r.length, n.length);
                                this.fireSyntheticInOutEvents(t, e, {
                                    oldTarget: i,
                                    evtOut: "dragleave",
                                    evtIn: "dragenter"
                                });
                                for (var o = 0; o < s; o++) this.fireSyntheticInOutEvents(n[o], e, {
                                    oldTarget: r[o],
                                    evtOut: "dragleave",
                                    evtIn: "dragenter"
                                });
                                this._draggedoverTarget = t
                            },
                            fireSyntheticInOutEvents: function (t, e, i) {
                                var r, n, s, o = i.oldTarget,
                                    a = o !== t,
                                    h = i.canvasEvtIn,
                                    c = i.canvasEvtOut;
                                a && (r = {
                                    e: e,
                                    target: t,
                                    previousTarget: o
                                }, n = {
                                    e: e,
                                    target: o,
                                    nextTarget: t
                                }), s = t && a, o && a && (c && this.fire(c, n), o.fire(i.evtOut, n)), s && (h && this.fire(h, r), t.fire(i.evtIn, r))
                            },
                            __onMouseWheel: function (t) {
                                this._cacheTransformEventData(t), this._handleEvent(t, "wheel"), this._resetTransformEventData()
                            },
                            _transformObject: function (t) {
                                var e = this.getPointer(t),
                                    i = this._currentTransform;
                                i.reset = !1, i.shiftKey = t.shiftKey, i.altKey = t[this.centeredKey], this._performTransformAction(t, i, e), i.actionPerformed && this.requestRenderAll()
                            },
                            _performTransformAction: function (t, e, i) {
                                var r = i.x,
                                    n = i.y,
                                    s = e.action,
                                    o = !1,
                                    a = e.actionHandler;
                                a && (o = a(t, e, r, n)), "drag" === s && o && (e.target.isMoving = !0, this.setCursor(e.target.moveCursor || this.moveCursor)), e.actionPerformed = e.actionPerformed || o
                            },
                            _fire: n.controlsUtils.fireEvent,
                            _setCursorFromEvent: function (t, e) {
                                if (!e) return this.setCursor(this.defaultCursor), !1;
                                var i = e.hoverCursor || this.hoverCursor,
                                    r = this._activeObject && "activeSelection" === this._activeObject.type ? this._activeObject : null,
                                    n = (!r || !r.contains(e)) && e._findTargetCorner(this.getPointer(t, !0));
                                n ? this.setCursor(this.getCornerCursor(n, e, t)) : (e.subTargetCheck && this.targets.concat().reverse().map((function (t) {
                                    i = t.hoverCursor || i
                                })), this.setCursor(i))
                            },
                            getCornerCursor: function (t, e, i) {
                                var r = e.controls[t];
                                return r.cursorStyleHandler(i, r, e)
                            }
                        })
                    }(),
                    function () {
                        var t = Math.min,
                            e = Math.max;
                        n.util.object.extend(n.Canvas.prototype, {
                            _shouldGroup: function (t, e) {
                                var i = this._activeObject;
                                return i && this._isSelectionKeyPressed(t) && e && e.selectable && this.selection && (i !== e || "activeSelection" === i.type) && !e.onSelect({
                                    e: t
                                })
                            },
                            _handleGrouping: function (t, e) {
                                var i = this._activeObject;
                                i.__corner || (e !== i || (e = this.findTarget(t, !0)) && e.selectable) && (i && "activeSelection" === i.type ? this._updateActiveSelection(e, t) : this._createActiveSelection(e, t))
                            },
                            _updateActiveSelection: function (t, e) {
                                var i = this._activeObject,
                                    r = i._objects.slice(0);
                                i.contains(t) ? (i.removeWithUpdate(t), this._hoveredTarget = t, this._hoveredTargets = this.targets.concat(), 1 === i.size() && this._setActiveObject(i.item(0), e)) : (i.addWithUpdate(t), this._hoveredTarget = i, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(r, e)
                            },
                            _createActiveSelection: function (t, e) {
                                var i = this.getActiveObjects(),
                                    r = this._createGroup(t);
                                this._hoveredTarget = r, this._setActiveObject(r, e), this._fireSelectionEvents(i, e)
                            },
                            _createGroup: function (t) {
                                var e = this._objects,
                                    i = e.indexOf(this._activeObject) < e.indexOf(t) ? [this._activeObject, t] : [t, this._activeObject];
                                return this._activeObject.isEditing && this._activeObject.exitEditing(), new n.ActiveSelection(i, {
                                    canvas: this
                                })
                            },
                            _groupSelectedObjects: function (t) {
                                var e, i = this._collectObjects(t);
                                1 === i.length ? this.setActiveObject(i[0], t) : i.length > 1 && (e = new n.ActiveSelection(i.reverse(), {
                                    canvas: this
                                }), this.setActiveObject(e, t))
                            },
                            _collectObjects: function (i) {
                                for (var r, s = [], o = this._groupSelector.ex, a = this._groupSelector.ey, h = o + this._groupSelector.left, c = a + this._groupSelector.top, l = new n.Point(t(o, h), t(a, c)), u = new n.Point(e(o, h), e(a, c)), f = !this.selectionFullyContained, d = o === h && a === c, g = this._objects.length; g-- && !((r = this._objects[g]) && r.selectable && r.visible && (f && r.intersectsWithRect(l, u) || r.isContainedWithinRect(l, u) || f && r.containsPoint(l) || f && r.containsPoint(u)) && (s.push(r), d)););
                                return s.length > 1 && (s = s.filter((function (t) {
                                    return !t.onSelect({
                                        e: i
                                    })
                                }))), s
                            },
                            _maybeGroupObjects: function (t) {
                                this.selection && this._groupSelector && this._groupSelectedObjects(t), this.setCursor(this.defaultCursor), this._groupSelector = null
                            }
                        })
                    }(), n.util.object.extend(n.StaticCanvas.prototype, {
                        toDataURL: function (t) {
                            t || (t = {});
                            var e = t.format || "png",
                                i = t.quality || 1,
                                r = (t.multiplier || 1) * (t.enableRetinaScaling ? this.getRetinaScaling() : 1),
                                s = this.toCanvasElement(r, t);
                            return n.util.toDataURL(s, e, i)
                        },
                        toCanvasElement: function (t, e) {
                            t = t || 1;
                            var i = ((e = e || {}).width || this.width) * t,
                                r = (e.height || this.height) * t,
                                s = this.getZoom(),
                                o = this.width,
                                a = this.height,
                                h = s * t,
                                c = this.viewportTransform,
                                l = (c[4] - (e.left || 0)) * t,
                                u = (c[5] - (e.top || 0)) * t,
                                f = this.interactive,
                                d = [h, 0, 0, h, l, u],
                                g = this.enableRetinaScaling,
                                p = n.util.createCanvasElement(),
                                v = this.contextTop;
                            return p.width = i, p.height = r, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = d, this.width = i, this.height = r, this.calcViewportBoundaries(), this.renderCanvas(p.getContext("2d"), this._objects), this.viewportTransform = c, this.width = o, this.height = a, this.calcViewportBoundaries(), this.interactive = f, this.enableRetinaScaling = g, this.contextTop = v, p
                        }
                    }), n.util.object.extend(n.StaticCanvas.prototype, {
                        loadFromJSON: function (t, e, i) {
                            if (t) {
                                var r = "string" === typeof t ? JSON.parse(t) : n.util.object.clone(t),
                                    s = this,
                                    o = r.clipPath,
                                    a = this.renderOnAddRemove;
                                return this.renderOnAddRemove = !1, delete r.clipPath, this._enlivenObjects(r.objects, (function (t) {
                                    s.clear(), s._setBgOverlay(r, (function () {
                                        o ? s._enlivenObjects([o], (function (i) {
                                            s.clipPath = i[0], s.__setupCanvas.call(s, r, t, a, e)
                                        })) : s.__setupCanvas.call(s, r, t, a, e)
                                    }))
                                }), i), this
                            }
                        },
                        __setupCanvas: function (t, e, i, r) {
                            var n = this;
                            e.forEach((function (t, e) {
                                n.insertAt(t, e)
                            })), this.renderOnAddRemove = i, delete t.objects, delete t.backgroundImage, delete t.overlayImage, delete t.background, delete t.overlay, this._setOptions(t), this.renderAll(), r && r()
                        },
                        _setBgOverlay: function (t, e) {
                            var i = {
                                backgroundColor: !1,
                                overlayColor: !1,
                                backgroundImage: !1,
                                overlayImage: !1
                            };
                            if (t.backgroundImage || t.overlayImage || t.background || t.overlay) {
                                var r = function () {
                                    i.backgroundImage && i.overlayImage && i.backgroundColor && i.overlayColor && e && e()
                                };
                                this.__setBgOverlay("backgroundImage", t.backgroundImage, i, r), this.__setBgOverlay("overlayImage", t.overlayImage, i, r), this.__setBgOverlay("backgroundColor", t.background, i, r), this.__setBgOverlay("overlayColor", t.overlay, i, r)
                            } else e && e()
                        },
                        __setBgOverlay: function (t, e, i, r) {
                            var s = this;
                            if (!e) return i[t] = !0, void(r && r());
                            "backgroundImage" === t || "overlayImage" === t ? n.util.enlivenObjects([e], (function (e) {
                                s[t] = e[0], i[t] = !0, r && r()
                            })) : this["set" + n.util.string.capitalize(t, !0)](e, (function () {
                                i[t] = !0, r && r()
                            }))
                        },
                        _enlivenObjects: function (t, e, i) {
                            t && 0 !== t.length ? n.util.enlivenObjects(t, (function (t) {
                                e && e(t)
                            }), null, i) : e && e([])
                        },
                        _toDataURL: function (t, e) {
                            this.clone((function (i) {
                                e(i.toDataURL(t))
                            }))
                        },
                        _toDataURLWithMultiplier: function (t, e, i) {
                            this.clone((function (r) {
                                i(r.toDataURLWithMultiplier(t, e))
                            }))
                        },
                        clone: function (t, e) {
                            var i = JSON.stringify(this.toJSON(e));
                            this.cloneWithoutData((function (e) {
                                e.loadFromJSON(i, (function () {
                                    t && t(e)
                                }))
                            }))
                        },
                        cloneWithoutData: function (t) {
                            var e = n.util.createCanvasElement();
                            e.width = this.width, e.height = this.height;
                            var i = new n.Canvas(e);
                            this.backgroundImage ? (i.setBackgroundImage(this.backgroundImage.src, (function () {
                                i.renderAll(), t && t(i)
                            })), i.backgroundImageOpacity = this.backgroundImageOpacity, i.backgroundImageStretch = this.backgroundImageStretch) : t && t(i)
                        }
                    }),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend,
                            r = e.util.object.clone,
                            n = e.util.toFixed,
                            s = e.util.string.capitalize,
                            o = e.util.degreesToRadians,
                            a = e.StaticCanvas.supports("setLineDash"),
                            h = !e.isLikelyNode;
                        e.Object || (e.Object = e.util.createClass(e.CommonMethods, {
                            type: "object",
                            originX: "left",
                            originY: "top",
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                            scaleX: 1,
                            scaleY: 1,
                            flipX: !1,
                            flipY: !1,
                            opacity: 1,
                            angle: 0,
                            skewX: 0,
                            skewY: 0,
                            cornerSize: 13,
                            touchCornerSize: 24,
                            transparentCorners: !0,
                            hoverCursor: null,
                            moveCursor: null,
                            padding: 0,
                            borderColor: "rgb(178,204,255)",
                            borderDashArray: null,
                            cornerColor: "rgb(178,204,255)",
                            cornerStrokeColor: null,
                            cornerStyle: "rect",
                            cornerDashArray: null,
                            centeredScaling: !1,
                            centeredRotation: !0,
                            fill: "rgb(0,0,0)",
                            fillRule: "nonzero",
                            globalCompositeOperation: "source-over",
                            backgroundColor: "",
                            selectionBackgroundColor: "",
                            stroke: null,
                            strokeWidth: 1,
                            strokeDashArray: null,
                            strokeDashOffset: 0,
                            strokeLineCap: "butt",
                            strokeLineJoin: "miter",
                            strokeMiterLimit: 4,
                            shadow: null,
                            borderOpacityWhenMoving: .4,
                            borderScaleFactor: 1,
                            minScaleLimit: 0,
                            selectable: !0,
                            evented: !0,
                            visible: !0,
                            hasControls: !0,
                            hasBorders: !0,
                            perPixelTargetFind: !1,
                            includeDefaultValues: !0,
                            lockMovementX: !1,
                            lockMovementY: !1,
                            lockRotation: !1,
                            lockScalingX: !1,
                            lockScalingY: !1,
                            lockSkewingX: !1,
                            lockSkewingY: !1,
                            lockScalingFlip: !1,
                            excludeFromExport: !1,
                            objectCaching: h,
                            statefullCache: !1,
                            noScaleCache: !0,
                            strokeUniform: !1,
                            dirty: !0,
                            __corner: 0,
                            paintFirst: "fill",
                            activeOn: "down",
                            stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),
                            cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
                            colorProperties: "fill stroke backgroundColor".split(" "),
                            clipPath: void 0,
                            inverted: !1,
                            absolutePositioned: !1,
                            initialize: function (t) {
                                t && this.setOptions(t)
                            },
                            _createCacheCanvas: function () {
                                this._cacheProperties = {}, this._cacheCanvas = e.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0
                            },
                            _limitCacheSize: function (t) {
                                var i = e.perfLimitSizeTotal,
                                    r = t.width,
                                    n = t.height,
                                    s = e.maxCacheSideLimit,
                                    o = e.minCacheSideLimit;
                                if (r <= s && n <= s && r * n <= i) return r < o && (t.width = o), n < o && (t.height = o), t;
                                var a = r / n,
                                    h = e.util.limitDimsByArea(a, i),
                                    c = e.util.capValue,
                                    l = c(o, h.x, s),
                                    u = c(o, h.y, s);
                                return r > l && (t.zoomX /= r / l, t.width = l, t.capped = !0), n > u && (t.zoomY /= n / u, t.height = u, t.capped = !0), t
                            },
                            _getCacheCanvasDimensions: function () {
                                var t = this.getTotalObjectScaling(),
                                    e = this._getTransformedDimensions(0, 0),
                                    i = e.x * t.scaleX / this.scaleX,
                                    r = e.y * t.scaleY / this.scaleY;
                                return {
                                    width: i + 2,
                                    height: r + 2,
                                    zoomX: t.scaleX,
                                    zoomY: t.scaleY,
                                    x: i,
                                    y: r
                                }
                            },
                            _updateCacheCanvas: function () {
                                var t = this.canvas;
                                if (this.noScaleCache && t && t._currentTransform) {
                                    var i = t._currentTransform.target,
                                        r = t._currentTransform.action;
                                    if (this === i && r.slice && "scale" === r.slice(0, 5)) return !1
                                }
                                var n, s, o = this._cacheCanvas,
                                    a = this._limitCacheSize(this._getCacheCanvasDimensions()),
                                    h = e.minCacheSideLimit,
                                    c = a.width,
                                    l = a.height,
                                    u = a.zoomX,
                                    f = a.zoomY,
                                    d = c !== this.cacheWidth || l !== this.cacheHeight,
                                    g = this.zoomX !== u || this.zoomY !== f,
                                    p = d || g,
                                    v = 0,
                                    m = 0,
                                    y = !1;
                                if (d) {
                                    var _ = this._cacheCanvas.width,
                                        b = this._cacheCanvas.height,
                                        x = c > _ || l > b;
                                    y = x || (c < .9 * _ || l < .9 * b) && _ > h && b > h, x && !a.capped && (c > h || l > h) && (v = .1 * c, m = .1 * l)
                                }
                                return !!p && (y ? (o.width = Math.ceil(c + v), o.height = Math.ceil(l + m)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, o.width, o.height)), n = a.x / 2, s = a.y / 2, this.cacheTranslationX = Math.round(o.width / 2 - n) + n, this.cacheTranslationY = Math.round(o.height / 2 - s) + s, this.cacheWidth = c, this.cacheHeight = l, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(u, f), this.zoomX = u, this.zoomY = f, !0)
                            },
                            setOptions: function (t) {
                                this._setOptions(t), this._initGradient(t.fill, "fill"), this._initGradient(t.stroke, "stroke"), this._initPattern(t.fill, "fill"), this._initPattern(t.stroke, "stroke")
                            },
                            transform: function (t) {
                                var e = this.group && !this.group._transformDone || this.group && this.canvas && t === this.canvas.contextTop,
                                    i = this.calcTransformMatrix(!e);
                                t.transform(i[0], i[1], i[2], i[3], i[4], i[5])
                            },
                            toObject: function (t) {
                                var i = e.Object.NUM_FRACTION_DIGITS,
                                    r = {
                                        type: this.type,
                                        version: e.version,
                                        originX: this.originX,
                                        originY: this.originY,
                                        left: n(this.left, i),
                                        top: n(this.top, i),
                                        width: n(this.width, i),
                                        height: n(this.height, i),
                                        fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
                                        stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
                                        strokeWidth: n(this.strokeWidth, i),
                                        strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
                                        strokeLineCap: this.strokeLineCap,
                                        strokeDashOffset: this.strokeDashOffset,
                                        strokeLineJoin: this.strokeLineJoin,
                                        strokeUniform: this.strokeUniform,
                                        strokeMiterLimit: n(this.strokeMiterLimit, i),
                                        scaleX: n(this.scaleX, i),
                                        scaleY: n(this.scaleY, i),
                                        angle: n(this.angle, i),
                                        flipX: this.flipX,
                                        flipY: this.flipY,
                                        opacity: n(this.opacity, i),
                                        shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
                                        visible: this.visible,
                                        backgroundColor: this.backgroundColor,
                                        fillRule: this.fillRule,
                                        paintFirst: this.paintFirst,
                                        globalCompositeOperation: this.globalCompositeOperation,
                                        skewX: n(this.skewX, i),
                                        skewY: n(this.skewY, i)
                                    };
                                return this.clipPath && (r.clipPath = this.clipPath.toObject(t), r.clipPath.inverted = this.clipPath.inverted, r.clipPath.absolutePositioned = this.clipPath.absolutePositioned), e.util.populateWithProperties(this, r, t), this.includeDefaultValues || (r = this._removeDefaultValues(r)), r
                            },
                            toDatalessObject: function (t) {
                                return this.toObject(t)
                            },
                            _removeDefaultValues: function (t) {
                                var i = e.util.getKlass(t.type).prototype;
                                return i.stateProperties.forEach((function (e) {
                                    "left" !== e && "top" !== e && (t[e] === i[e] && delete t[e], "[object Array]" === Object.prototype.toString.call(t[e]) && "[object Array]" === Object.prototype.toString.call(i[e]) && 0 === t[e].length && 0 === i[e].length && delete t[e])
                                })), t
                            },
                            toString: function () {
                                return "#<fabric." + s(this.type) + ">"
                            },
                            getObjectScaling: function () {
                                var t = e.util.qrDecompose(this.calcTransformMatrix());
                                return {
                                    scaleX: Math.abs(t.scaleX),
                                    scaleY: Math.abs(t.scaleY)
                                }
                            },
                            getTotalObjectScaling: function () {
                                var t = this.getObjectScaling(),
                                    e = t.scaleX,
                                    i = t.scaleY;
                                if (this.canvas) {
                                    var r = this.canvas.getZoom(),
                                        n = this.canvas.getRetinaScaling();
                                    e *= r * n, i *= r * n
                                }
                                return {
                                    scaleX: e,
                                    scaleY: i
                                }
                            },
                            getObjectOpacity: function () {
                                var t = this.opacity;
                                return this.group && (t *= this.group.getObjectOpacity()), t
                            },
                            _set: function (t, i) {
                                var r = "scaleX" === t || "scaleY" === t,
                                    n = this[t] !== i,
                                    s = !1;
                                return r && (i = this._constrainScale(i)), "scaleX" === t && i < 0 ? (this.flipX = !this.flipX, i *= -1) : "scaleY" === t && i < 0 ? (this.flipY = !this.flipY, i *= -1) : "shadow" !== t || !i || i instanceof e.Shadow ? "dirty" === t && this.group && this.group.set("dirty", i) : i = new e.Shadow(i), this[t] = i, n && (s = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(t) > -1 ? (this.dirty = !0, s && this.group.set("dirty", !0)) : s && this.stateProperties.indexOf(t) > -1 && this.group.set("dirty", !0)), this
                            },
                            setOnGroup: function () {},
                            getViewportTransform: function () {
                                return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : e.iMatrix.concat()
                            },
                            isNotVisible: function () {
                                return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible
                            },
                            render: function (t) {
                                this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t.save(), this._setupCompositeOperation(t), this.drawSelectionBackground(t), this.transform(t), this._setOpacity(t), this._setShadow(t, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(t), this.objectCaching && this.statefullCache && this.saveState({
                                    propertySet: "cacheProperties"
                                })), t.restore())
                            },
                            renderCache: function (t) {
                                t = t || {}, this._cacheCanvas || this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({
                                    propertySet: "cacheProperties"
                                }), this.drawObject(this._cacheContext, t.forClipping), this.dirty = !1)
                            },
                            _removeCacheCanvas: function () {
                                this._cacheCanvas = null, this.cacheWidth = 0, this.cacheHeight = 0
                            },
                            hasStroke: function () {
                                return this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth
                            },
                            hasFill: function () {
                                return this.fill && "transparent" !== this.fill
                            },
                            needsItsOwnCache: function () {
                                return !("stroke" !== this.paintFirst || !this.hasFill() || !this.hasStroke() || "object" !== typeof this.shadow) || !!this.clipPath
                            },
                            shouldCache: function () {
                                return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching
                            },
                            willDrawShadow: function () {
                                return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY)
                            },
                            drawClipPathOnCache: function (t) {
                                var i = this.clipPath;
                                if (t.save(), i.inverted ? t.globalCompositeOperation = "destination-out" : t.globalCompositeOperation = "destination-in", i.absolutePositioned) {
                                    var r = e.util.invertTransform(this.calcTransformMatrix());
                                    t.transform(r[0], r[1], r[2], r[3], r[4], r[5])
                                }
                                i.transform(t), t.scale(1 / i.zoomX, 1 / i.zoomY), t.drawImage(i._cacheCanvas, -i.cacheTranslationX, -i.cacheTranslationY), t.restore()
                            },
                            drawObject: function (t, e) {
                                var i = this.fill,
                                    r = this.stroke;
                                e ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t)) : this._renderBackground(t), this._render(t), this._drawClipPath(t), this.fill = i, this.stroke = r
                            },
                            _drawClipPath: function (t) {
                                var e = this.clipPath;
                                e && (e.canvas = this.canvas, e.shouldCache(), e._transformDone = !0, e.renderCache({
                                    forClipping: !0
                                }), this.drawClipPathOnCache(t))
                            },
                            drawCacheOnCanvas: function (t) {
                                t.scale(1 / this.zoomX, 1 / this.zoomY), t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY)
                            },
                            isCacheDirty: function (t) {
                                if (this.isNotVisible()) return !1;
                                if (this._cacheCanvas && !t && this._updateCacheCanvas()) return !0;
                                if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
                                    if (this._cacheCanvas && !t) {
                                        var e = this.cacheWidth / this.zoomX,
                                            i = this.cacheHeight / this.zoomY;
                                        this._cacheContext.clearRect(-e / 2, -i / 2, e, i)
                                    }
                                    return !0
                                }
                                return !1
                            },
                            _renderBackground: function (t) {
                                if (this.backgroundColor) {
                                    var e = this._getNonTransformedDimensions();
                                    t.fillStyle = this.backgroundColor, t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t)
                                }
                            },
                            _setOpacity: function (t) {
                                this.group && !this.group._transformDone ? t.globalAlpha = this.getObjectOpacity() : t.globalAlpha *= this.opacity
                            },
                            _setStrokeStyles: function (t, e) {
                                var i = e.stroke;
                                i && (t.lineWidth = e.strokeWidth, t.lineCap = e.strokeLineCap, t.lineDashOffset = e.strokeDashOffset, t.lineJoin = e.strokeLineJoin, t.miterLimit = e.strokeMiterLimit, i.toLive ? "percentage" === i.gradientUnits || i.gradientTrasnform || i.patternTransform ? this._applyPatternForTransformedGradient(t, i) : (t.strokeStyle = i.toLive(t, this), this._applyPatternGradientTransform(t, i)) : t.strokeStyle = e.stroke)
                            },
                            _setFillStyles: function (t, e) {
                                var i = e.fill;
                                i && (i.toLive ? (t.fillStyle = i.toLive(t, this), this._applyPatternGradientTransform(t, e.fill)) : t.fillStyle = i)
                            },
                            _setClippingProperties: function (t) {
                                t.globalAlpha = 1, t.strokeStyle = "transparent", t.fillStyle = "#000000"
                            },
                            _setLineDash: function (t, e, i) {
                                e && 0 !== e.length && (1 & e.length && e.push.apply(e, e), a ? t.setLineDash(e) : i && i(t))
                            },
                            _renderControls: function (t, i) {
                                var r, n, s, a = this.getViewportTransform(),
                                    h = this.calcTransformMatrix();
                                n = "undefined" !== typeof (i = i || {}).hasBorders ? i.hasBorders : this.hasBorders, s = "undefined" !== typeof i.hasControls ? i.hasControls : this.hasControls, h = e.util.multiplyTransformMatrices(a, h), r = e.util.qrDecompose(h), t.save(), t.translate(r.translateX, r.translateY), t.lineWidth = 1 * this.borderScaleFactor, this.group || (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), i.forActiveSelection ? (t.rotate(o(r.angle)), n && this.drawBordersInGroup(t, r, i)) : (t.rotate(o(this.angle)), n && this.drawBorders(t, i)), s && this.drawControls(t, i), t.restore()
                            },
                            _setShadow: function (t) {
                                if (this.shadow) {
                                    var i, r = this.shadow,
                                        n = this.canvas,
                                        s = n && n.viewportTransform[0] || 1,
                                        o = n && n.viewportTransform[3] || 1;
                                    i = r.nonScaling ? {
                                        scaleX: 1,
                                        scaleY: 1
                                    } : this.getObjectScaling(), n && n._isRetinaScaling() && (s *= e.devicePixelRatio, o *= e.devicePixelRatio), t.shadowColor = r.color, t.shadowBlur = r.blur * e.browserShadowBlurConstant * (s + o) * (i.scaleX + i.scaleY) / 4, t.shadowOffsetX = r.offsetX * s * i.scaleX, t.shadowOffsetY = r.offsetY * o * i.scaleY
                                }
                            },
                            _removeShadow: function (t) {
                                this.shadow && (t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0)
                            },
                            _applyPatternGradientTransform: function (t, e) {
                                if (!e || !e.toLive) return {
                                    offsetX: 0,
                                    offsetY: 0
                                };
                                var i = e.gradientTransform || e.patternTransform,
                                    r = -this.width / 2 + e.offsetX || 0,
                                    n = -this.height / 2 + e.offsetY || 0;
                                return "percentage" === e.gradientUnits ? t.transform(this.width, 0, 0, this.height, r, n) : t.transform(1, 0, 0, 1, r, n), i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), {
                                    offsetX: r,
                                    offsetY: n
                                }
                            },
                            _renderPaintInOrder: function (t) {
                                "stroke" === this.paintFirst ? (this._renderStroke(t), this._renderFill(t)) : (this._renderFill(t), this._renderStroke(t))
                            },
                            _render: function () {},
                            _renderFill: function (t) {
                                this.fill && (t.save(), this._setFillStyles(t, this), "evenodd" === this.fillRule ? t.fill("evenodd") : t.fill(), t.restore())
                            },
                            _renderStroke: function (t) {
                                if (this.stroke && 0 !== this.strokeWidth) {
                                    if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this.strokeUniform && this.group) {
                                        var e = this.getObjectScaling();
                                        t.scale(1 / e.scaleX, 1 / e.scaleY)
                                    } else this.strokeUniform && t.scale(1 / this.scaleX, 1 / this.scaleY);
                                    this._setLineDash(t, this.strokeDashArray, this._renderDashedStroke), this._setStrokeStyles(t, this), t.stroke(), t.restore()
                                }
                            },
                            _applyPatternForTransformedGradient: function (t, i) {
                                var r, n = this._limitCacheSize(this._getCacheCanvasDimensions()),
                                    s = e.util.createCanvasElement(),
                                    o = this.canvas.getRetinaScaling(),
                                    a = n.x / this.scaleX / o,
                                    h = n.y / this.scaleY / o;
                                s.width = a, s.height = h, (r = s.getContext("2d")).beginPath(), r.moveTo(0, 0), r.lineTo(a, 0), r.lineTo(a, h), r.lineTo(0, h), r.closePath(), r.translate(a / 2, h / 2), r.scale(n.zoomX / this.scaleX / o, n.zoomY / this.scaleY / o), this._applyPatternGradientTransform(r, i), r.fillStyle = i.toLive(t), r.fill(), t.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t.scale(o * this.scaleX / n.zoomX, o * this.scaleY / n.zoomY), t.strokeStyle = r.createPattern(s, "no-repeat")
                            },
                            _findCenterFromElement: function () {
                                return {
                                    x: this.left + this.width / 2,
                                    y: this.top + this.height / 2
                                }
                            },
                            _assignTransformMatrixProps: function () {
                                if (this.transformMatrix) {
                                    var t = e.util.qrDecompose(this.transformMatrix);
                                    this.flipX = !1, this.flipY = !1, this.set("scaleX", t.scaleX), this.set("scaleY", t.scaleY), this.angle = t.angle, this.skewX = t.skewX, this.skewY = 0
                                }
                            },
                            _removeTransformMatrix: function (t) {
                                var i = this._findCenterFromElement();
                                this.transformMatrix && (this._assignTransformMatrixProps(), i = e.util.transformPoint(i, this.transformMatrix)), this.transformMatrix = null, t && (this.scaleX *= t.scaleX, this.scaleY *= t.scaleY, this.cropX = t.cropX, this.cropY = t.cropY, i.x += t.offsetLeft, i.y += t.offsetTop, this.width = t.width, this.height = t.height), this.setPositionByOrigin(i, "center", "center")
                            },
                            clone: function (t, i) {
                                var r = this.toObject(i);
                                this.constructor.fromObject ? this.constructor.fromObject(r, t) : e.Object._fromObject("Object", r, t)
                            },
                            cloneAsImage: function (t, i) {
                                var r = this.toCanvasElement(i);
                                return t && t(new e.Image(r)), this
                            },
                            toCanvasElement: function (t) {
                                t || (t = {});
                                var i = e.util,
                                    r = i.saveObjectTransform(this),
                                    n = this.group,
                                    s = this.shadow,
                                    o = Math.abs,
                                    a = (t.multiplier || 1) * (t.enableRetinaScaling ? e.devicePixelRatio : 1);
                                delete this.group, t.withoutTransform && i.resetObjectTransform(this), t.withoutShadow && (this.shadow = null);
                                var h, c, l, u, f = e.util.createCanvasElement(),
                                    d = this.getBoundingRect(!0, !0),
                                    g = this.shadow,
                                    p = {
                                        x: 0,
                                        y: 0
                                    };
                                g && (c = g.blur, h = g.nonScaling ? {
                                    scaleX: 1,
                                    scaleY: 1
                                } : this.getObjectScaling(), p.x = 2 * Math.round(o(g.offsetX) + c) * o(h.scaleX), p.y = 2 * Math.round(o(g.offsetY) + c) * o(h.scaleY)), l = d.width + p.x, u = d.height + p.y, f.width = Math.ceil(l), f.height = Math.ceil(u);
                                var v = new e.StaticCanvas(f, {
                                    enableRetinaScaling: !1,
                                    renderOnAddRemove: !1,
                                    skipOffscreen: !1
                                });
                                "jpeg" === t.format && (v.backgroundColor = "#fff"), this.setPositionByOrigin(new e.Point(v.width / 2, v.height / 2), "center", "center");
                                var m = this.canvas;
                                v.add(this);
                                var y = v.toCanvasElement(a || 1, t);
                                return this.shadow = s, this.set("canvas", m), n && (this.group = n), this.set(r).setCoords(), v._objects = [], v.dispose(), v = null, y
                            },
                            toDataURL: function (t) {
                                return t || (t = {}), e.util.toDataURL(this.toCanvasElement(t), t.format || "png", t.quality || 1)
                            },
                            isType: function (t) {
                                return this.type === t
                            },
                            complexity: function () {
                                return 1
                            },
                            toJSON: function (t) {
                                return this.toObject(t)
                            },
                            rotate: function (t) {
                                var e = ("center" !== this.originX || "center" !== this.originY) && this.centeredRotation;
                                return e && this._setOriginToCenter(), this.set("angle", t), e && this._resetOrigin(), this
                            },
                            centerH: function () {
                                return this.canvas && this.canvas.centerObjectH(this), this
                            },
                            viewportCenterH: function () {
                                return this.canvas && this.canvas.viewportCenterObjectH(this), this
                            },
                            centerV: function () {
                                return this.canvas && this.canvas.centerObjectV(this), this
                            },
                            viewportCenterV: function () {
                                return this.canvas && this.canvas.viewportCenterObjectV(this), this
                            },
                            center: function () {
                                return this.canvas && this.canvas.centerObject(this), this
                            },
                            viewportCenter: function () {
                                return this.canvas && this.canvas.viewportCenterObject(this), this
                            },
                            getLocalPointer: function (t, i) {
                                i = i || this.canvas.getPointer(t);
                                var r = new e.Point(i.x, i.y),
                                    n = this._getLeftTopCoords();
                                return this.angle && (r = e.util.rotatePoint(r, n, o(-this.angle))), {
                                    x: r.x - n.x,
                                    y: r.y - n.y
                                }
                            },
                            _setupCompositeOperation: function (t) {
                                this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation)
                            }
                        }), e.util.createAccessors && e.util.createAccessors(e.Object), i(e.Object.prototype, e.Observable), e.Object.NUM_FRACTION_DIGITS = 2, e.Object._fromObject = function (t, i, n, s) {
                            var o = e[t];
                            i = r(i, !0), e.util.enlivenPatterns([i.fill, i.stroke], (function (t) {
                                "undefined" !== typeof t[0] && (i.fill = t[0]), "undefined" !== typeof t[1] && (i.stroke = t[1]), e.util.enlivenObjects([i.clipPath], (function (t) {
                                    i.clipPath = t[0];
                                    var e = s ? new o(i[s], i) : new o(i);
                                    n && n(e)
                                }))
                            }))
                        }, e.Object.__uid = 0)
                    }(e),
                    function () {
                        var t = n.util.degreesToRadians,
                            e = {
                                left: -.5,
                                center: 0,
                                right: .5
                            },
                            i = {
                                top: -.5,
                                center: 0,
                                bottom: .5
                            };
                        n.util.object.extend(n.Object.prototype, {
                            translateToGivenOrigin: function (t, r, s, o, a) {
                                var h, c, l, u = t.x,
                                    f = t.y;
                                return "string" === typeof r ? r = e[r] : r -= .5, "string" === typeof o ? o = e[o] : o -= .5, "string" === typeof s ? s = i[s] : s -= .5, "string" === typeof a ? a = i[a] : a -= .5, c = a - s, ((h = o - r) || c) && (l = this._getTransformedDimensions(), u = t.x + h * l.x, f = t.y + c * l.y), new n.Point(u, f)
                            },
                            translateToCenterPoint: function (e, i, r) {
                                var s = this.translateToGivenOrigin(e, i, r, "center", "center");
                                return this.angle ? n.util.rotatePoint(s, e, t(this.angle)) : s
                            },
                            translateToOriginPoint: function (e, i, r) {
                                var s = this.translateToGivenOrigin(e, "center", "center", i, r);
                                return this.angle ? n.util.rotatePoint(s, e, t(this.angle)) : s
                            },
                            getCenterPoint: function () {
                                var t = new n.Point(this.left, this.top);
                                return this.translateToCenterPoint(t, this.originX, this.originY)
                            },
                            getPointByOrigin: function (t, e) {
                                var i = this.getCenterPoint();
                                return this.translateToOriginPoint(i, t, e)
                            },
                            toLocalPoint: function (e, i, r) {
                                var s, o, a = this.getCenterPoint();
                                return s = "undefined" !== typeof i && "undefined" !== typeof r ? this.translateToGivenOrigin(a, "center", "center", i, r) : new n.Point(this.left, this.top), o = new n.Point(e.x, e.y), this.angle && (o = n.util.rotatePoint(o, a, -t(this.angle))), o.subtractEquals(s)
                            },
                            setPositionByOrigin: function (t, e, i) {
                                var r = this.translateToCenterPoint(t, e, i),
                                    n = this.translateToOriginPoint(r, this.originX, this.originY);
                                this.set("left", n.x), this.set("top", n.y)
                            },
                            adjustPosition: function (i) {
                                var r, s, o = t(this.angle),
                                    a = this.getScaledWidth(),
                                    h = n.util.cos(o) * a,
                                    c = n.util.sin(o) * a;
                                r = "string" === typeof this.originX ? e[this.originX] : this.originX - .5, s = "string" === typeof i ? e[i] : i - .5, this.left += h * (s - r), this.top += c * (s - r), this.setCoords(), this.originX = i
                            },
                            _setOriginToCenter: function () {
                                this._originalOriginX = this.originX, this._originalOriginY = this.originY;
                                var t = this.getCenterPoint();
                                this.originX = "center", this.originY = "center", this.left = t.x, this.top = t.y
                            },
                            _resetOrigin: function () {
                                var t = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
                                this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = t.x, this.top = t.y, this._originalOriginX = null, this._originalOriginY = null
                            },
                            _getLeftTopCoords: function () {
                                return this.translateToOriginPoint(this.getCenterPoint(), "left", "top")
                            }
                        })
                    }(),
                    function () {
                        var t = n.util,
                            e = t.degreesToRadians,
                            i = t.multiplyTransformMatrices,
                            r = t.transformPoint;
                        t.object.extend(n.Object.prototype, {
                            oCoords: null,
                            aCoords: null,
                            lineCoords: null,
                            ownMatrixCache: null,
                            matrixCache: null,
                            controls: {},
                            _getCoords: function (t, e) {
                                return e ? t ? this.calcACoords() : this.calcLineCoords() : (this.aCoords && this.lineCoords || this.setCoords(!0), t ? this.aCoords : this.lineCoords)
                            },
                            getCoords: function (t, e) {
                                return i = this._getCoords(t, e), [new n.Point(i.tl.x, i.tl.y), new n.Point(i.tr.x, i.tr.y), new n.Point(i.br.x, i.br.y), new n.Point(i.bl.x, i.bl.y)];
                                var i
                            },
                            intersectsWithRect: function (t, e, i, r) {
                                var s = this.getCoords(i, r);
                                return "Intersection" === n.Intersection.intersectPolygonRectangle(s, t, e).status
                            },
                            intersectsWithObject: function (t, e, i) {
                                return "Intersection" === n.Intersection.intersectPolygonPolygon(this.getCoords(e, i), t.getCoords(e, i)).status || t.isContainedWithinObject(this, e, i) || this.isContainedWithinObject(t, e, i)
                            },
                            isContainedWithinObject: function (t, e, i) {
                                for (var r = this.getCoords(e, i), n = e ? t.aCoords : t.lineCoords, s = 0, o = t._getImageLines(n); s < 4; s++)
                                    if (!t.containsPoint(r[s], o)) return !1;
                                return !0
                            },
                            isContainedWithinRect: function (t, e, i, r) {
                                var n = this.getBoundingRect(i, r);
                                return n.left >= t.x && n.left + n.width <= e.x && n.top >= t.y && n.top + n.height <= e.y
                            },
                            containsPoint: function (t, e, i, r) {
                                var n = this._getCoords(i, r),
                                    s = (e = e || this._getImageLines(n), this._findCrossPoints(t, e));
                                return 0 !== s && s % 2 === 1
                            },
                            isOnScreen: function (t) {
                                if (!this.canvas) return !1;
                                var e = this.canvas.vptCoords.tl,
                                    i = this.canvas.vptCoords.br;
                                return !!this.getCoords(!0, t).some((function (t) {
                                    return t.x <= i.x && t.x >= e.x && t.y <= i.y && t.y >= e.y
                                })) || (!!this.intersectsWithRect(e, i, !0, t) || this._containsCenterOfCanvas(e, i, t))
                            },
                            _containsCenterOfCanvas: function (t, e, i) {
                                var r = {
                                    x: (t.x + e.x) / 2,
                                    y: (t.y + e.y) / 2
                                };
                                return !!this.containsPoint(r, null, !0, i)
                            },
                            isPartiallyOnScreen: function (t) {
                                if (!this.canvas) return !1;
                                var e = this.canvas.vptCoords.tl,
                                    i = this.canvas.vptCoords.br;
                                return !!this.intersectsWithRect(e, i, !0, t) || this.getCoords(!0, t).every((function (t) {
                                    return (t.x >= i.x || t.x <= e.x) && (t.y >= i.y || t.y <= e.y)
                                })) && this._containsCenterOfCanvas(e, i, t)
                            },
                            _getImageLines: function (t) {
                                return {
                                    topline: {
                                        o: t.tl,
                                        d: t.tr
                                    },
                                    rightline: {
                                        o: t.tr,
                                        d: t.br
                                    },
                                    bottomline: {
                                        o: t.br,
                                        d: t.bl
                                    },
                                    leftline: {
                                        o: t.bl,
                                        d: t.tl
                                    }
                                }
                            },
                            _findCrossPoints: function (t, e) {
                                var i, r, n, s = 0;
                                for (var o in e)
                                    if (!((n = e[o]).o.y < t.y && n.d.y < t.y) && !(n.o.y >= t.y && n.d.y >= t.y) && (n.o.x === n.d.x && n.o.x >= t.x ? r = n.o.x : (0, i = (n.d.y - n.o.y) / (n.d.x - n.o.x), r = -(t.y - 0 * t.x - (n.o.y - i * n.o.x)) / (0 - i)), r >= t.x && (s += 1), 2 === s)) break;
                                return s
                            },
                            getBoundingRect: function (e, i) {
                                var r = this.getCoords(e, i);
                                return t.makeBoundingBoxFromPoints(r)
                            },
                            getScaledWidth: function () {
                                return this._getTransformedDimensions().x
                            },
                            getScaledHeight: function () {
                                return this._getTransformedDimensions().y
                            },
                            _constrainScale: function (t) {
                                return Math.abs(t) < this.minScaleLimit ? t < 0 ? -this.minScaleLimit : this.minScaleLimit : 0 === t ? 1e-4 : t
                            },
                            scale: function (t) {
                                return this._set("scaleX", t), this._set("scaleY", t), this.setCoords()
                            },
                            scaleToWidth: function (t, e) {
                                var i = this.getBoundingRect(e).width / this.getScaledWidth();
                                return this.scale(t / this.width / i)
                            },
                            scaleToHeight: function (t, e) {
                                var i = this.getBoundingRect(e).height / this.getScaledHeight();
                                return this.scale(t / this.height / i)
                            },
                            calcCoords: function (t) {
                                return t ? this.calcACoords() : this.calcOCoords()
                            },
                            calcLineCoords: function () {
                                var i = this.getViewportTransform(),
                                    n = this.padding,
                                    s = e(this.angle),
                                    o = t.cos(s) * n,
                                    a = t.sin(s) * n,
                                    h = o + a,
                                    c = o - a,
                                    l = this.calcACoords(),
                                    u = {
                                        tl: r(l.tl, i),
                                        tr: r(l.tr, i),
                                        bl: r(l.bl, i),
                                        br: r(l.br, i)
                                    };
                                return n && (u.tl.x -= c, u.tl.y -= h, u.tr.x += h, u.tr.y -= c, u.bl.x -= h, u.bl.y += c, u.br.x += c, u.br.y += h), u
                            },
                            calcOCoords: function () {
                                var t = this._calcRotateMatrix(),
                                    e = this._calcTranslateMatrix(),
                                    r = this.getViewportTransform(),
                                    n = i(r, e),
                                    s = i(n, t),
                                    o = (s = i(s, [1 / r[0], 0, 0, 1 / r[3], 0, 0]), this._calculateCurrentDimensions()),
                                    a = {};
                                return this.forEachControl((function (t, e, i) {
                                    a[e] = t.positionHandler(o, s, i)
                                })), a
                            },
                            calcACoords: function () {
                                var t = this._calcRotateMatrix(),
                                    e = this._calcTranslateMatrix(),
                                    n = i(e, t),
                                    s = this._getTransformedDimensions(),
                                    o = s.x / 2,
                                    a = s.y / 2;
                                return {
                                    tl: r({
                                        x: -o,
                                        y: -a
                                    }, n),
                                    tr: r({
                                        x: o,
                                        y: -a
                                    }, n),
                                    bl: r({
                                        x: -o,
                                        y: a
                                    }, n),
                                    br: r({
                                        x: o,
                                        y: a
                                    }, n)
                                }
                            },
                            setCoords: function (t) {
                                return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), t || (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords()), this
                            },
                            _calcRotateMatrix: function () {
                                return t.calcRotateMatrix(this)
                            },
                            _calcTranslateMatrix: function () {
                                var t = this.getCenterPoint();
                                return [1, 0, 0, 1, t.x, t.y]
                            },
                            transformMatrixKey: function (t) {
                                var e = "_",
                                    i = "";
                                return !t && this.group && (i = this.group.transformMatrixKey(t) + e), i + this.top + e + this.left + e + this.scaleX + e + this.scaleY + e + this.skewX + e + this.skewY + e + this.angle + e + this.originX + e + this.originY + e + this.width + e + this.height + e + this.strokeWidth + this.flipX + this.flipY
                            },
                            calcTransformMatrix: function (t) {
                                var e = this.calcOwnMatrix();
                                if (t || !this.group) return e;
                                var r = this.transformMatrixKey(t),
                                    n = this.matrixCache || (this.matrixCache = {});
                                return n.key === r ? n.value : (this.group && (e = i(this.group.calcTransformMatrix(!1), e)), n.key = r, n.value = e, e)
                            },
                            calcOwnMatrix: function () {
                                var e = this.transformMatrixKey(!0),
                                    i = this.ownMatrixCache || (this.ownMatrixCache = {});
                                if (i.key === e) return i.value;
                                var r = this._calcTranslateMatrix(),
                                    n = {
                                        angle: this.angle,
                                        translateX: r[4],
                                        translateY: r[5],
                                        scaleX: this.scaleX,
                                        scaleY: this.scaleY,
                                        skewX: this.skewX,
                                        skewY: this.skewY,
                                        flipX: this.flipX,
                                        flipY: this.flipY
                                    };
                                return i.key = e, i.value = t.composeMatrix(n), i.value
                            },
                            _calcDimensionsTransformMatrix: function (e, i, r) {
                                return t.calcDimensionsMatrix({
                                    skewX: e,
                                    skewY: i,
                                    scaleX: this.scaleX * (r && this.flipX ? -1 : 1),
                                    scaleY: this.scaleY * (r && this.flipY ? -1 : 1)
                                })
                            },
                            _getNonTransformedDimensions: function () {
                                var t = this.strokeWidth;
                                return {
                                    x: this.width + t,
                                    y: this.height + t
                                }
                            },
                            _getTransformedDimensions: function (e, i) {
                                "undefined" === typeof e && (e = this.skewX), "undefined" === typeof i && (i = this.skewY);
                                var r, n, s = this._getNonTransformedDimensions(),
                                    o = 0 === e && 0 === i;
                                if (this.strokeUniform ? (r = this.width, n = this.height) : (r = s.x, n = s.y), o) return this._finalizeDimensions(r * this.scaleX, n * this.scaleY);
                                var a = t.sizeAfterTransform(r, n, {
                                    scaleX: this.scaleX,
                                    scaleY: this.scaleY,
                                    skewX: e,
                                    skewY: i
                                });
                                return this._finalizeDimensions(a.x, a.y)
                            },
                            _finalizeDimensions: function (t, e) {
                                return this.strokeUniform ? {
                                    x: t + this.strokeWidth,
                                    y: e + this.strokeWidth
                                } : {
                                    x: t,
                                    y: e
                                }
                            },
                            _calculateCurrentDimensions: function () {
                                var t = this.getViewportTransform(),
                                    e = this._getTransformedDimensions();
                                return r(e, t, !0).scalarAdd(2 * this.padding)
                            }
                        })
                    }(), n.util.object.extend(n.Object.prototype, {
                        sendToBack: function () {
                            return this.group ? n.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this
                        },
                        bringToFront: function () {
                            return this.group ? n.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this
                        },
                        sendBackwards: function (t) {
                            return this.group ? n.StaticCanvas.prototype.sendBackwards.call(this.group, this, t) : this.canvas && this.canvas.sendBackwards(this, t), this
                        },
                        bringForward: function (t) {
                            return this.group ? n.StaticCanvas.prototype.bringForward.call(this.group, this, t) : this.canvas && this.canvas.bringForward(this, t), this
                        },
                        moveTo: function (t) {
                            return this.group && "activeSelection" !== this.group.type ? n.StaticCanvas.prototype.moveTo.call(this.group, this, t) : this.canvas && this.canvas.moveTo(this, t), this
                        }
                    }),
                    function () {
                        function t(t, e) {
                            if (e) {
                                if (e.toLive) return t + ": url(#SVGID_" + e.id + "); ";
                                var i = new n.Color(e),
                                    r = t + ": " + i.toRgb() + "; ",
                                    s = i.getAlpha();
                                return 1 !== s && (r += t + "-opacity: " + s.toString() + "; "), r
                            }
                            return t + ": none; "
                        }
                        var e = n.util.toFixed;
                        n.util.object.extend(n.Object.prototype, {
                            getSvgStyles: function (e) {
                                var i = this.fillRule ? this.fillRule : "nonzero",
                                    r = this.strokeWidth ? this.strokeWidth : "0",
                                    n = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none",
                                    s = this.strokeDashOffset ? this.strokeDashOffset : "0",
                                    o = this.strokeLineCap ? this.strokeLineCap : "butt",
                                    a = this.strokeLineJoin ? this.strokeLineJoin : "miter",
                                    h = this.strokeMiterLimit ? this.strokeMiterLimit : "4",
                                    c = "undefined" !== typeof this.opacity ? this.opacity : "1",
                                    l = this.visible ? "" : " visibility: hidden;",
                                    u = e ? "" : this.getSvgFilter(),
                                    f = t("fill", this.fill);
                                return [t("stroke", this.stroke), "stroke-width: ", r, "; ", "stroke-dasharray: ", n, "; ", "stroke-linecap: ", o, "; ", "stroke-dashoffset: ", s, "; ", "stroke-linejoin: ", a, "; ", "stroke-miterlimit: ", h, "; ", f, "fill-rule: ", i, "; ", "opacity: ", c, ";", u, l].join("")
                            },
                            getSvgSpanStyles: function (e, i) {
                                var r = "; ",
                                    n = e.fontFamily ? "font-family: " + (-1 === e.fontFamily.indexOf("'") && -1 === e.fontFamily.indexOf('"') ? "'" + e.fontFamily + "'" : e.fontFamily) + r : "",
                                    s = e.strokeWidth ? "stroke-width: " + e.strokeWidth + r : "",
                                    o = (n = n, e.fontSize ? "font-size: " + e.fontSize + "px" + r : ""),
                                    a = e.fontStyle ? "font-style: " + e.fontStyle + r : "",
                                    h = e.fontWeight ? "font-weight: " + e.fontWeight + r : "",
                                    c = e.fill ? t("fill", e.fill) : "",
                                    l = e.stroke ? t("stroke", e.stroke) : "",
                                    u = this.getSvgTextDecoration(e);
                                return u && (u = "text-decoration: " + u + r), [l, s, n, o, a, h, u, c, e.deltaY ? "baseline-shift: " + -e.deltaY + "; " : "", i ? "white-space: pre; " : ""].join("")
                            },
                            getSvgTextDecoration: function (t) {
                                return ["overline", "underline", "line-through"].filter((function (e) {
                                    return t[e.replace("-", "")]
                                })).join(" ")
                            },
                            getSvgFilter: function () {
                                return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : ""
                            },
                            getSvgCommons: function () {
                                return [this.id ? 'id="' + this.id + '" ' : "", this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""].join("")
                            },
                            getSvgTransform: function (t, e) {
                                var i = t ? this.calcTransformMatrix() : this.calcOwnMatrix();
                                return 'transform="' + n.util.matrixToSVG(i) + (e || "") + '" '
                            },
                            _setSVGBg: function (t) {
                                if (this.backgroundColor) {
                                    var i = n.Object.NUM_FRACTION_DIGITS;
                                    t.push("\t\t<rect ", this._getFillAttributes(this.backgroundColor), ' x="', e(-this.width / 2, i), '" y="', e(-this.height / 2, i), '" width="', e(this.width, i), '" height="', e(this.height, i), '"></rect>\n')
                                }
                            },
                            toSVG: function (t) {
                                return this._createBaseSVGMarkup(this._toSVG(t), {
                                    reviver: t
                                })
                            },
                            toClipPathSVG: function (t) {
                                return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(t), {
                                    reviver: t
                                })
                            },
                            _createBaseClipPathSVGMarkup: function (t, e) {
                                var i = (e = e || {}).reviver,
                                    r = e.additionalTransform || "",
                                    n = [this.getSvgTransform(!0, r), this.getSvgCommons()].join(""),
                                    s = t.indexOf("COMMON_PARTS");
                                return t[s] = n, i ? i(t.join("")) : t.join("")
                            },
                            _createBaseSVGMarkup: function (t, e) {
                                var i, r, s = (e = e || {}).noStyle,
                                    o = e.reviver,
                                    a = s ? "" : 'style="' + this.getSvgStyles() + '" ',
                                    h = e.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "",
                                    c = this.clipPath,
                                    l = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "",
                                    u = c && c.absolutePositioned,
                                    f = this.stroke,
                                    d = this.fill,
                                    g = this.shadow,
                                    p = [],
                                    v = t.indexOf("COMMON_PARTS"),
                                    m = e.additionalTransform;
                                return c && (c.clipPathId = "CLIPPATH_" + n.Object.__uid++, r = '<clipPath id="' + c.clipPathId + '" >\n' + c.toClipPathSVG(o) + "</clipPath>\n"), u && p.push("<g ", h, this.getSvgCommons(), " >\n"), p.push("<g ", this.getSvgTransform(!1), u ? "" : h + this.getSvgCommons(), " >\n"), i = [a, l, s ? "" : this.addPaintOrder(), " ", m ? 'transform="' + m + '" ' : ""].join(""), t[v] = i, d && d.toLive && p.push(d.toSVG(this)), f && f.toLive && p.push(f.toSVG(this)), g && p.push(g.toSVG(this)), c && p.push(r), p.push(t.join("")), p.push("</g>\n"), u && p.push("</g>\n"), o ? o(p.join("")) : p.join("")
                            },
                            addPaintOrder: function () {
                                return "fill" !== this.paintFirst ? ' paint-order="' + this.paintFirst + '" ' : ""
                            }
                        })
                    }(),
                    function () {
                        var t = n.util.object.extend,
                            e = "stateProperties";

                        function i(e, i, r) {
                            var n = {};
                            r.forEach((function (t) {
                                n[t] = e[t]
                            })), t(e[i], n, !0)
                        }

                        function r(t, e, i) {
                            if (t === e) return !0;
                            if (Array.isArray(t)) {
                                if (!Array.isArray(e) || t.length !== e.length) return !1;
                                for (var n = 0, s = t.length; n < s; n++)
                                    if (!r(t[n], e[n])) return !1;
                                return !0
                            }
                            if (t && "object" === typeof t) {
                                var o, a = Object.keys(t);
                                if (!e || "object" !== typeof e || !i && a.length !== Object.keys(e).length) return !1;
                                for (n = 0, s = a.length; n < s; n++)
                                    if ("canvas" !== (o = a[n]) && "group" !== o && !r(t[o], e[o])) return !1;
                                return !0
                            }
                        }
                        n.util.object.extend(n.Object.prototype, {
                            hasStateChanged: function (t) {
                                var i = "_" + (t = t || e);
                                return Object.keys(this[i]).length < this[t].length || !r(this[i], this, !0)
                            },
                            saveState: function (t) {
                                var r = t && t.propertySet || e,
                                    n = "_" + r;
                                return this[n] ? (i(this, n, this[r]), t && t.stateProperties && i(this, n, t.stateProperties), this) : this.setupState(t)
                            },
                            setupState: function (t) {
                                var i = (t = t || {}).propertySet || e;
                                return t.propertySet = i, this["_" + i] = {}, this.saveState(t), this
                            }
                        })
                    }(),
                    function () {
                        var t = n.util.degreesToRadians;
                        n.util.object.extend(n.Object.prototype, {
                            _findTargetCorner: function (t, e) {
                                if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this) return !1;
                                var i, r, n, s = t.x,
                                    o = t.y,
                                    a = Object.keys(this.oCoords),
                                    h = a.length - 1;
                                for (this.__corner = 0; h >= 0; h--)
                                    if (n = a[h], this.isControlVisible(n) && (r = this._getImageLines(e ? this.oCoords[n].touchCorner : this.oCoords[n].corner), 0 !== (i = this._findCrossPoints({
                                            x: s,
                                            y: o
                                        }, r)) && i % 2 === 1)) return this.__corner = n, n;
                                return !1
                            },
                            forEachControl: function (t) {
                                for (var e in this.controls) t(this.controls[e], e, this)
                            },
                            _setCornerCoords: function () {
                                var t = this.oCoords;
                                for (var e in t) {
                                    var i = this.controls[e];
                                    t[e].corner = i.calcCornerCoords(this.angle, this.cornerSize, t[e].x, t[e].y, !1), t[e].touchCorner = i.calcCornerCoords(this.angle, this.touchCornerSize, t[e].x, t[e].y, !0)
                                }
                            },
                            drawSelectionBackground: function (e) {
                                if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this) return this;
                                e.save();
                                var i = this.getCenterPoint(),
                                    r = this._calculateCurrentDimensions(),
                                    n = this.canvas.viewportTransform;
                                return e.translate(i.x, i.y), e.scale(1 / n[0], 1 / n[3]), e.rotate(t(this.angle)), e.fillStyle = this.selectionBackgroundColor, e.fillRect(-r.x / 2, -r.y / 2, r.x, r.y), e.restore(), this
                            },
                            drawBorders: function (t, e) {
                                e = e || {};
                                var i = this._calculateCurrentDimensions(),
                                    r = this.borderScaleFactor,
                                    n = i.x + r,
                                    s = i.y + r,
                                    o = "undefined" !== typeof e.hasControls ? e.hasControls : this.hasControls,
                                    a = !1;
                                return t.save(), t.strokeStyle = e.borderColor || this.borderColor, this._setLineDash(t, e.borderDashArray || this.borderDashArray, null), t.strokeRect(-n / 2, -s / 2, n, s), o && (t.beginPath(), this.forEachControl((function (e, i, r) {
                                    e.withConnection && e.getVisibility(r, i) && (a = !0, t.moveTo(e.x * n, e.y * s), t.lineTo(e.x * n + e.offsetX, e.y * s + e.offsetY))
                                })), a && t.stroke()), t.restore(), this
                            },
                            drawBordersInGroup: function (t, e, i) {
                                i = i || {};
                                var r = n.util.sizeAfterTransform(this.width, this.height, e),
                                    s = this.strokeWidth,
                                    o = this.strokeUniform,
                                    a = this.borderScaleFactor,
                                    h = r.x + s * (o ? this.canvas.getZoom() : e.scaleX) + a,
                                    c = r.y + s * (o ? this.canvas.getZoom() : e.scaleY) + a;
                                return t.save(), this._setLineDash(t, i.borderDashArray || this.borderDashArray, null), t.strokeStyle = i.borderColor || this.borderColor, t.strokeRect(-h / 2, -c / 2, h, c), t.restore(), this
                            },
                            drawControls: function (t, e) {
                                return e = e || {}, t.save(), t.setTransform(this.canvas.getRetinaScaling(), 0, 0, this.canvas.getRetinaScaling(), 0, 0), t.strokeStyle = t.fillStyle = e.cornerColor || this.cornerColor, this.transparentCorners || (t.strokeStyle = e.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(t, e.cornerDashArray || this.cornerDashArray, null), this.setCoords(), this.forEachControl((function (i, r, n) {
                                    i.getVisibility(n, r) && i.render(t, n.oCoords[r].x, n.oCoords[r].y, e, n)
                                })), t.restore(), this
                            },
                            isControlVisible: function (t) {
                                return this.controls[t] && this.controls[t].getVisibility(this, t)
                            },
                            setControlVisible: function (t, e) {
                                return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t] = e, this
                            },
                            setControlsVisibility: function (t) {
                                for (var e in t || (t = {}), t) this.setControlVisible(e, t[e]);
                                return this
                            },
                            onDeselect: function () {},
                            onSelect: function () {}
                        })
                    }(), n.util.object.extend(n.StaticCanvas.prototype, {
                        FX_DURATION: 500,
                        fxCenterObjectH: function (t, e) {
                            var i = function () {},
                                r = (e = e || {}).onComplete || i,
                                s = e.onChange || i,
                                o = this;
                            return n.util.animate({
                                startValue: t.left,
                                endValue: this.getCenter().left,
                                duration: this.FX_DURATION,
                                onChange: function (e) {
                                    t.set("left", e), o.requestRenderAll(), s()
                                },
                                onComplete: function () {
                                    t.setCoords(), r()
                                }
                            }), this
                        },
                        fxCenterObjectV: function (t, e) {
                            var i = function () {},
                                r = (e = e || {}).onComplete || i,
                                s = e.onChange || i,
                                o = this;
                            return n.util.animate({
                                startValue: t.top,
                                endValue: this.getCenter().top,
                                duration: this.FX_DURATION,
                                onChange: function (e) {
                                    t.set("top", e), o.requestRenderAll(), s()
                                },
                                onComplete: function () {
                                    t.setCoords(), r()
                                }
                            }), this
                        },
                        fxRemove: function (t, e) {
                            var i = function () {},
                                r = (e = e || {}).onComplete || i,
                                s = e.onChange || i,
                                o = this;
                            return n.util.animate({
                                startValue: t.opacity,
                                endValue: 0,
                                duration: this.FX_DURATION,
                                onChange: function (e) {
                                    t.set("opacity", e), o.requestRenderAll(), s()
                                },
                                onComplete: function () {
                                    o.remove(t), r()
                                }
                            }), this
                        }
                    }), n.util.object.extend(n.Object.prototype, {
                        animate: function () {
                            if (arguments[0] && "object" === typeof arguments[0]) {
                                var t, e, i = [];
                                for (t in arguments[0]) i.push(t);
                                for (var r = 0, n = i.length; r < n; r++) t = i[r], e = r !== n - 1, this._animate(t, arguments[0][t], arguments[1], e)
                            } else this._animate.apply(this, arguments);
                            return this
                        },
                        _animate: function (t, e, i, r) {
                            var s, o = this;
                            e = e.toString(), i = i ? n.util.object.clone(i) : {}, ~t.indexOf(".") && (s = t.split("."));
                            var a = o.colorProperties.indexOf(t) > -1 || s && o.colorProperties.indexOf(s[1]) > -1,
                                h = s ? this.get(s[0])[s[1]] : this.get(t);
                            "from" in i || (i.from = h), a || (e = ~e.indexOf("=") ? h + parseFloat(e.replace("=", "")) : parseFloat(e));
                            var c = {
                                startValue: i.from,
                                endValue: e,
                                byValue: i.by,
                                easing: i.easing,
                                duration: i.duration,
                                abort: i.abort && function () {
                                    return i.abort.call(o)
                                },
                                onChange: function (e, n, a) {
                                    s ? o[s[0]][s[1]] = e : o.set(t, e), r || i.onChange && i.onChange(e, n, a)
                                },
                                onComplete: function (t, e, n) {
                                    r || (o.setCoords(), i.onComplete && i.onComplete(t, e, n))
                                }
                            };
                            a ? n.util.animateColor(c.startValue, c.endValue, c.duration, c) : n.util.animate(c)
                        }
                    }),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend,
                            r = e.util.object.clone,
                            n = {
                                x1: 1,
                                x2: 1,
                                y1: 1,
                                y2: 1
                            },
                            s = e.StaticCanvas.supports("setLineDash");

                        function o(t, e) {
                            var i = t.origin,
                                r = t.axis1,
                                n = t.axis2,
                                s = t.dimension,
                                o = e.nearest,
                                a = e.center,
                                h = e.farthest;
                            return function () {
                                switch (this.get(i)) {
                                    case o:
                                        return Math.min(this.get(r), this.get(n));
                                    case a:
                                        return Math.min(this.get(r), this.get(n)) + .5 * this.get(s);
                                    case h:
                                        return Math.max(this.get(r), this.get(n))
                                }
                            }
                        }
                        e.Line ? e.warn("fabric.Line is already defined") : (e.Line = e.util.createClass(e.Object, {
                            type: "line",
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0,
                            cacheProperties: e.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
                            initialize: function (t, e) {
                                t || (t = [0, 0, 0, 0]), this.callSuper("initialize", e), this.set("x1", t[0]), this.set("y1", t[1]), this.set("x2", t[2]), this.set("y2", t[3]), this._setWidthHeight(e)
                            },
                            _setWidthHeight: function (t) {
                                t || (t = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in t ? t.left : this._getLeftToOriginX(), this.top = "top" in t ? t.top : this._getTopToOriginY()
                            },
                            _set: function (t, e) {
                                return this.callSuper("_set", t, e), "undefined" !== typeof n[t] && this._setWidthHeight(), this
                            },
                            _getLeftToOriginX: o({
                                origin: "originX",
                                axis1: "x1",
                                axis2: "x2",
                                dimension: "width"
                            }, {
                                nearest: "left",
                                center: "center",
                                farthest: "right"
                            }),
                            _getTopToOriginY: o({
                                origin: "originY",
                                axis1: "y1",
                                axis2: "y2",
                                dimension: "height"
                            }, {
                                nearest: "top",
                                center: "center",
                                farthest: "bottom"
                            }),
                            _render: function (t) {
                                if (t.beginPath(), !this.strokeDashArray || this.strokeDashArray && s) {
                                    var e = this.calcLinePoints();
                                    t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2)
                                }
                                t.lineWidth = this.strokeWidth;
                                var i = t.strokeStyle;
                                t.strokeStyle = this.stroke || t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = i
                            },
                            _renderDashedStroke: function (t) {
                                var i = this.calcLinePoints();
                                t.beginPath(), e.util.drawDashedLine(t, i.x1, i.y1, i.x2, i.y2, this.strokeDashArray), t.closePath()
                            },
                            _findCenterFromElement: function () {
                                return {
                                    x: (this.x1 + this.x2) / 2,
                                    y: (this.y1 + this.y2) / 2
                                }
                            },
                            toObject: function (t) {
                                return i(this.callSuper("toObject", t), this.calcLinePoints())
                            },
                            _getNonTransformedDimensions: function () {
                                var t = this.callSuper("_getNonTransformedDimensions");
                                return "butt" === this.strokeLineCap && (0 === this.width && (t.y -= this.strokeWidth), 0 === this.height && (t.x -= this.strokeWidth)), t
                            },
                            calcLinePoints: function () {
                                var t = this.x1 <= this.x2 ? -1 : 1,
                                    e = this.y1 <= this.y2 ? -1 : 1,
                                    i = t * this.width * .5,
                                    r = e * this.height * .5;
                                return {
                                    x1: i,
                                    x2: t * this.width * -.5,
                                    y1: r,
                                    y2: e * this.height * -.5
                                }
                            },
                            _toSVG: function () {
                                var t = this.calcLinePoints();
                                return ["<line ", "COMMON_PARTS", 'x1="', t.x1, '" y1="', t.y1, '" x2="', t.x2, '" y2="', t.y2, '" />\n']
                            }
                        }), e.Line.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), e.Line.fromElement = function (t, r, n) {
                            n = n || {};
                            var s = e.parseAttributes(t, e.Line.ATTRIBUTE_NAMES),
                                o = [s.x1 || 0, s.y1 || 0, s.x2 || 0, s.y2 || 0];
                            r(new e.Line(o, i(s, n)))
                        }, e.Line.fromObject = function (t, i) {
                            var n = r(t, !0);
                            n.points = [t.x1, t.y1, t.x2, t.y2], e.Object._fromObject("Line", n, (function (t) {
                                delete t.points, i && i(t)
                            }), "points")
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = Math.PI;
                        e.Circle ? e.warn("fabric.Circle is already defined.") : (e.Circle = e.util.createClass(e.Object, {
                            type: "circle",
                            radius: 0,
                            startAngle: 0,
                            endAngle: 2 * i,
                            cacheProperties: e.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
                            _set: function (t, e) {
                                return this.callSuper("_set", t, e), "radius" === t && this.setRadius(e), this
                            },
                            toObject: function (t) {
                                return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(t))
                            },
                            _toSVG: function () {
                                var t, r = (this.endAngle - this.startAngle) % (2 * i);
                                if (0 === r) t = ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', this.radius, '" />\n'];
                                else {
                                    var n = e.util.cos(this.startAngle) * this.radius,
                                        s = e.util.sin(this.startAngle) * this.radius,
                                        o = e.util.cos(this.endAngle) * this.radius,
                                        a = e.util.sin(this.endAngle) * this.radius,
                                        h = r > i ? "1" : "0";
                                    t = ['<path d="M ' + n + " " + s, " A " + this.radius + " " + this.radius, " 0 ", +h + " 1", " " + o + " " + a, '" ', "COMMON_PARTS", " />\n"]
                                }
                                return t
                            },
                            _render: function (t) {
                                t.beginPath(), t.arc(0, 0, this.radius, this.startAngle, this.endAngle, !1), this._renderPaintInOrder(t)
                            },
                            getRadiusX: function () {
                                return this.get("radius") * this.get("scaleX")
                            },
                            getRadiusY: function () {
                                return this.get("radius") * this.get("scaleY")
                            },
                            setRadius: function (t) {
                                return this.radius = t, this.set("width", 2 * t).set("height", 2 * t)
                            }
                        }), e.Circle.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), e.Circle.fromElement = function (t, i) {
                            var r, n = e.parseAttributes(t, e.Circle.ATTRIBUTE_NAMES);
                            if (!("radius" in (r = n) && r.radius >= 0)) throw new Error("value of `r` attribute is required and can not be negative");
                            n.left = (n.left || 0) - n.radius, n.top = (n.top || 0) - n.radius, i(new e.Circle(n))
                        }, e.Circle.fromObject = function (t, i) {
                            return e.Object._fromObject("Circle", t, i)
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});
                        e.Triangle ? e.warn("fabric.Triangle is already defined") : (e.Triangle = e.util.createClass(e.Object, {
                            type: "triangle",
                            width: 100,
                            height: 100,
                            _render: function (t) {
                                var e = this.width / 2,
                                    i = this.height / 2;
                                t.beginPath(), t.moveTo(-e, i), t.lineTo(0, -i), t.lineTo(e, i), t.closePath(), this._renderPaintInOrder(t)
                            },
                            _renderDashedStroke: function (t) {
                                var i = this.width / 2,
                                    r = this.height / 2;
                                t.beginPath(), e.util.drawDashedLine(t, -i, r, 0, -r, this.strokeDashArray), e.util.drawDashedLine(t, 0, -r, i, r, this.strokeDashArray), e.util.drawDashedLine(t, i, r, -i, r, this.strokeDashArray), t.closePath()
                            },
                            _toSVG: function () {
                                var t = this.width / 2,
                                    e = this.height / 2;
                                return ["<polygon ", "COMMON_PARTS", 'points="', [-t + " " + e, "0 " + -e, t + " " + e].join(","), '" />']
                            }
                        }), e.Triangle.fromObject = function (t, i) {
                            return e.Object._fromObject("Triangle", t, i)
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = 2 * Math.PI;
                        e.Ellipse ? e.warn("fabric.Ellipse is already defined.") : (e.Ellipse = e.util.createClass(e.Object, {
                            type: "ellipse",
                            rx: 0,
                            ry: 0,
                            cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
                            initialize: function (t) {
                                this.callSuper("initialize", t), this.set("rx", t && t.rx || 0), this.set("ry", t && t.ry || 0)
                            },
                            _set: function (t, e) {
                                switch (this.callSuper("_set", t, e), t) {
                                    case "rx":
                                        this.rx = e, this.set("width", 2 * e);
                                        break;
                                    case "ry":
                                        this.ry = e, this.set("height", 2 * e)
                                }
                                return this
                            },
                            getRx: function () {
                                return this.get("rx") * this.get("scaleX")
                            },
                            getRy: function () {
                                return this.get("ry") * this.get("scaleY")
                            },
                            toObject: function (t) {
                                return this.callSuper("toObject", ["rx", "ry"].concat(t))
                            },
                            _toSVG: function () {
                                return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, '" />\n']
                            },
                            _render: function (t) {
                                t.beginPath(), t.save(), t.transform(1, 0, 0, this.ry / this.rx, 0, 0), t.arc(0, 0, this.rx, 0, i, !1), t.restore(), this._renderPaintInOrder(t)
                            }
                        }), e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), e.Ellipse.fromElement = function (t, i) {
                            var r = e.parseAttributes(t, e.Ellipse.ATTRIBUTE_NAMES);
                            r.left = (r.left || 0) - r.rx, r.top = (r.top || 0) - r.ry, i(new e.Ellipse(r))
                        }, e.Ellipse.fromObject = function (t, i) {
                            return e.Object._fromObject("Ellipse", t, i)
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend;
                        e.Rect ? e.warn("fabric.Rect is already defined") : (e.Rect = e.util.createClass(e.Object, {
                            stateProperties: e.Object.prototype.stateProperties.concat("rx", "ry"),
                            type: "rect",
                            rx: 0,
                            ry: 0,
                            cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
                            initialize: function (t) {
                                this.callSuper("initialize", t), this._initRxRy()
                            },
                            _initRxRy: function () {
                                this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry)
                            },
                            _render: function (t) {
                                var e = this.rx ? Math.min(this.rx, this.width / 2) : 0,
                                    i = this.ry ? Math.min(this.ry, this.height / 2) : 0,
                                    r = this.width,
                                    n = this.height,
                                    s = -this.width / 2,
                                    o = -this.height / 2,
                                    a = 0 !== e || 0 !== i,
                                    h = .4477152502;
                                t.beginPath(), t.moveTo(s + e, o), t.lineTo(s + r - e, o), a && t.bezierCurveTo(s + r - h * e, o, s + r, o + h * i, s + r, o + i), t.lineTo(s + r, o + n - i), a && t.bezierCurveTo(s + r, o + n - h * i, s + r - h * e, o + n, s + r - e, o + n), t.lineTo(s + e, o + n), a && t.bezierCurveTo(s + h * e, o + n, s, o + n - h * i, s, o + n - i), t.lineTo(s, o + i), a && t.bezierCurveTo(s, o + h * i, s + h * e, o, s + e, o), t.closePath(), this._renderPaintInOrder(t)
                            },
                            _renderDashedStroke: function (t) {
                                var i = -this.width / 2,
                                    r = -this.height / 2,
                                    n = this.width,
                                    s = this.height;
                                t.beginPath(), e.util.drawDashedLine(t, i, r, i + n, r, this.strokeDashArray), e.util.drawDashedLine(t, i + n, r, i + n, r + s, this.strokeDashArray), e.util.drawDashedLine(t, i + n, r + s, i, r + s, this.strokeDashArray), e.util.drawDashedLine(t, i, r + s, i, r, this.strokeDashArray), t.closePath()
                            },
                            toObject: function (t) {
                                return this.callSuper("toObject", ["rx", "ry"].concat(t))
                            },
                            _toSVG: function () {
                                return ["<rect ", "COMMON_PARTS", 'x="', -this.width / 2, '" y="', -this.height / 2, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, '" />\n']
                            }
                        }), e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), e.Rect.fromElement = function (t, r, n) {
                            if (!t) return r(null);
                            n = n || {};
                            var s = e.parseAttributes(t, e.Rect.ATTRIBUTE_NAMES);
                            s.left = s.left || 0, s.top = s.top || 0, s.height = s.height || 0, s.width = s.width || 0;
                            var o = new e.Rect(i(n ? e.util.object.clone(n) : {}, s));
                            o.visible = o.visible && o.width > 0 && o.height > 0, r(o)
                        }, e.Rect.fromObject = function (t, i) {
                            return e.Object._fromObject("Rect", t, i)
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend,
                            r = e.util.array.min,
                            n = e.util.array.max,
                            s = e.util.toFixed;
                        e.Polyline ? e.warn("fabric.Polyline is already defined") : (e.Polyline = e.util.createClass(e.Object, {
                            type: "polyline",
                            points: null,
                            cacheProperties: e.Object.prototype.cacheProperties.concat("points"),
                            initialize: function (t, e) {
                                e = e || {}, this.points = t || [], this.callSuper("initialize", e), this._setPositionDimensions(e)
                            },
                            _setPositionDimensions: function (t) {
                                var e, i = this._calcDimensions(t);
                                this.width = i.width, this.height = i.height, t.fromSVG || (e = this.translateToGivenOrigin({
                                    x: i.left - this.strokeWidth / 2,
                                    y: i.top - this.strokeWidth / 2
                                }, "left", "top", this.originX, this.originY)), "undefined" === typeof t.left && (this.left = t.fromSVG ? i.left : e.x), "undefined" === typeof t.top && (this.top = t.fromSVG ? i.top : e.y), this.pathOffset = {
                                    x: i.left + this.width / 2,
                                    y: i.top + this.height / 2
                                }
                            },
                            _calcDimensions: function () {
                                var t = this.points,
                                    e = r(t, "x") || 0,
                                    i = r(t, "y") || 0;
                                return {
                                    left: e,
                                    top: i,
                                    width: (n(t, "x") || 0) - e,
                                    height: (n(t, "y") || 0) - i
                                }
                            },
                            toObject: function (t) {
                                return i(this.callSuper("toObject", t), {
                                    points: this.points.concat()
                                })
                            },
                            _toSVG: function () {
                                for (var t = [], i = this.pathOffset.x, r = this.pathOffset.y, n = e.Object.NUM_FRACTION_DIGITS, o = 0, a = this.points.length; o < a; o++) t.push(s(this.points[o].x - i, n), ",", s(this.points[o].y - r, n), " ");
                                return ["<" + this.type + " ", "COMMON_PARTS", 'points="', t.join(""), '" />\n']
                            },
                            commonRender: function (t) {
                                var e, i = this.points.length,
                                    r = this.pathOffset.x,
                                    n = this.pathOffset.y;
                                if (!i || isNaN(this.points[i - 1].y)) return !1;
                                t.beginPath(), t.moveTo(this.points[0].x - r, this.points[0].y - n);
                                for (var s = 0; s < i; s++) e = this.points[s], t.lineTo(e.x - r, e.y - n);
                                return !0
                            },
                            _render: function (t) {
                                this.commonRender(t) && this._renderPaintInOrder(t)
                            },
                            _renderDashedStroke: function (t) {
                                var i, r;
                                t.beginPath();
                                for (var n = 0, s = this.points.length; n < s; n++) i = this.points[n], r = this.points[n + 1] || i, e.util.drawDashedLine(t, i.x, i.y, r.x, r.y, this.strokeDashArray)
                            },
                            complexity: function () {
                                return this.get("points").length
                            }
                        }), e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polyline.fromElementGenerator = function (t) {
                            return function (r, n, s) {
                                if (!r) return n(null);
                                s || (s = {});
                                var o = e.parsePointsAttribute(r.getAttribute("points")),
                                    a = e.parseAttributes(r, e[t].ATTRIBUTE_NAMES);
                                a.fromSVG = !0, n(new e[t](o, i(a, s)))
                            }
                        }, e.Polyline.fromElement = e.Polyline.fromElementGenerator("Polyline"), e.Polyline.fromObject = function (t, i) {
                            return e.Object._fromObject("Polyline", t, i, "points")
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});
                        e.Polygon ? e.warn("fabric.Polygon is already defined") : (e.Polygon = e.util.createClass(e.Polyline, {
                            type: "polygon",
                            _render: function (t) {
                                this.commonRender(t) && (t.closePath(), this._renderPaintInOrder(t))
                            },
                            _renderDashedStroke: function (t) {
                                this.callSuper("_renderDashedStroke", t), t.closePath()
                            }
                        }), e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polygon.fromElement = e.Polyline.fromElementGenerator("Polygon"), e.Polygon.fromObject = function (t, i) {
                            return e.Object._fromObject("Polygon", t, i, "points")
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.array.min,
                            r = e.util.array.max,
                            n = e.util.object.extend,
                            s = Object.prototype.toString,
                            o = e.util.toFixed;
                        e.Path ? e.warn("fabric.Path is already defined") : (e.Path = e.util.createClass(e.Object, {
                            type: "path",
                            path: null,
                            cacheProperties: e.Object.prototype.cacheProperties.concat("path", "fillRule"),
                            stateProperties: e.Object.prototype.stateProperties.concat("path"),
                            initialize: function (t, i) {
                                i = i || {}, this.callSuper("initialize", i), t || (t = []);
                                var r = "[object Array]" === s.call(t);
                                this.path = r ? e.util.makePathSimpler(t) : e.util.makePathSimpler(e.util.parsePath(t)), this.path && e.Polyline.prototype._setPositionDimensions.call(this, i)
                            },
                            _renderPathCommands: function (t) {
                                var e, i = 0,
                                    r = 0,
                                    n = 0,
                                    s = 0,
                                    o = 0,
                                    a = 0,
                                    h = -this.pathOffset.x,
                                    c = -this.pathOffset.y;
                                t.beginPath();
                                for (var l = 0, u = this.path.length; l < u; ++l) switch ((e = this.path[l])[0]) {
                                    case "L":
                                        n = e[1], s = e[2], t.lineTo(n + h, s + c);
                                        break;
                                    case "M":
                                        i = n = e[1], r = s = e[2], t.moveTo(n + h, s + c);
                                        break;
                                    case "C":
                                        n = e[5], s = e[6], o = e[3], a = e[4], t.bezierCurveTo(e[1] + h, e[2] + c, o + h, a + c, n + h, s + c);
                                        break;
                                    case "Q":
                                        t.quadraticCurveTo(e[1] + h, e[2] + c, e[3] + h, e[4] + c), n = e[3], s = e[4], o = e[1], a = e[2];
                                        break;
                                    case "z":
                                    case "Z":
                                        n = i, s = r, t.closePath()
                                }
                            },
                            _render: function (t) {
                                this._renderPathCommands(t), this._renderPaintInOrder(t)
                            },
                            toString: function () {
                                return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>"
                            },
                            toObject: function (t) {
                                return n(this.callSuper("toObject", t), {
                                    path: this.path.map((function (t) {
                                        return t.slice()
                                    }))
                                })
                            },
                            toDatalessObject: function (t) {
                                var e = this.toObject(["sourcePath"].concat(t));
                                return e.sourcePath && delete e.path, e
                            },
                            _toSVG: function () {
                                return ["<path ", "COMMON_PARTS", 'd="', this.path.map((function (t) {
                                    return t.join(" ")
                                })).join(" "), '" stroke-linecap="round" ', "/>\n"]
                            },
                            _getOffsetTransform: function () {
                                var t = e.Object.NUM_FRACTION_DIGITS;
                                return " translate(" + o(-this.pathOffset.x, t) + ", " + o(-this.pathOffset.y, t) + ")"
                            },
                            toClipPathSVG: function (t) {
                                var e = this._getOffsetTransform();
                                return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
                                    reviver: t,
                                    additionalTransform: e
                                })
                            },
                            toSVG: function (t) {
                                var e = this._getOffsetTransform();
                                return this._createBaseSVGMarkup(this._toSVG(), {
                                    reviver: t,
                                    additionalTransform: e
                                })
                            },
                            complexity: function () {
                                return this.path.length
                            },
                            _calcDimensions: function () {
                                for (var t, n, s = [], o = [], a = 0, h = 0, c = 0, l = 0, u = 0, f = this.path.length; u < f; ++u) {
                                    switch ((t = this.path[u])[0]) {
                                        case "L":
                                            c = t[1], l = t[2], n = [];
                                            break;
                                        case "M":
                                            a = c = t[1], h = l = t[2], n = [];
                                            break;
                                        case "C":
                                            n = e.util.getBoundsOfCurve(c, l, t[1], t[2], t[3], t[4], t[5], t[6]), c = t[5], l = t[6];
                                            break;
                                        case "Q":
                                            n = e.util.getBoundsOfCurve(c, l, t[1], t[2], t[1], t[2], t[3], t[4]), c = t[3], l = t[4];
                                            break;
                                        case "z":
                                        case "Z":
                                            c = a, l = h
                                    }
                                    n.forEach((function (t) {
                                        s.push(t.x), o.push(t.y)
                                    })), s.push(c), o.push(l)
                                }
                                var d = i(s) || 0,
                                    g = i(o) || 0;
                                return {
                                    left: d,
                                    top: g,
                                    width: (r(s) || 0) - d,
                                    height: (r(o) || 0) - g
                                }
                            }
                        }), e.Path.fromObject = function (t, i) {
                            if ("string" === typeof t.sourcePath) {
                                var r = t.sourcePath;
                                e.loadSVGFromURL(r, (function (e) {
                                    var r = e[0];
                                    r.setOptions(t), i && i(r)
                                }))
                            } else e.Object._fromObject("Path", t, i, "path")
                        }, e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"]), e.Path.fromElement = function (t, i, r) {
                            var s = e.parseAttributes(t, e.Path.ATTRIBUTE_NAMES);
                            s.fromSVG = !0, i(new e.Path(s.d, n(s, r)))
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.array.min,
                            r = e.util.array.max;
                        e.Group || (e.Group = e.util.createClass(e.Object, e.Collection, {
                            type: "group",
                            strokeWidth: 0,
                            subTargetCheck: !1,
                            cacheProperties: [],
                            useSetOnGroup: !1,
                            initialize: function (t, e, i) {
                                e = e || {}, this._objects = [], i && this.callSuper("initialize", e), this._objects = t || [];
                                for (var r = this._objects.length; r--;) this._objects[r].group = this;
                                if (i) this._updateObjectsACoords();
                                else {
                                    var n = e && e.centerPoint;
                                    void 0 !== e.originX && (this.originX = e.originX), void 0 !== e.originY && (this.originY = e.originY), n || this._calcBounds(), this._updateObjectsCoords(n), delete e.centerPoint, this.callSuper("initialize", e)
                                }
                                this.setCoords()
                            },
                            _updateObjectsACoords: function () {
                                for (var t = this._objects.length; t--;) this._objects[t].setCoords(true)
                            },
                            _updateObjectsCoords: function (t) {
                                t = t || this.getCenterPoint();
                                for (var e = this._objects.length; e--;) this._updateObjectCoords(this._objects[e], t)
                            },
                            _updateObjectCoords: function (t, e) {
                                var i = t.left,
                                    r = t.top;
                                t.set({
                                    left: i - e.x,
                                    top: r - e.y
                                }), t.group = this, t.setCoords(!0)
                            },
                            toString: function () {
                                return "#<fabric.Group: (" + this.complexity() + ")>"
                            },
                            addWithUpdate: function (t) {
                                var i = !!this.group;
                                return this._restoreObjectsState(), e.util.resetObjectTransform(this), t && (i && e.util.removeTransformFromObject(t, this.group.calcTransformMatrix()), this._objects.push(t), t.group = this, t._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, i ? this.group.addWithUpdate() : this.setCoords(), this
                            },
                            removeWithUpdate: function (t) {
                                return this._restoreObjectsState(), e.util.resetObjectTransform(this), this.remove(t), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this
                            },
                            _onObjectAdded: function (t) {
                                this.dirty = !0, t.group = this, t._set("canvas", this.canvas)
                            },
                            _onObjectRemoved: function (t) {
                                this.dirty = !0, delete t.group
                            },
                            _set: function (t, i) {
                                var r = this._objects.length;
                                if (this.useSetOnGroup)
                                    for (; r--;) this._objects[r].setOnGroup(t, i);
                                if ("canvas" === t)
                                    for (; r--;) this._objects[r]._set(t, i);
                                e.Object.prototype._set.call(this, t, i)
                            },
                            toObject: function (t) {
                                var i = this.includeDefaultValues,
                                    r = this._objects.map((function (e) {
                                        var r = e.includeDefaultValues;
                                        e.includeDefaultValues = i;
                                        var n = e.toObject(t);
                                        return e.includeDefaultValues = r, n
                                    })),
                                    n = e.Object.prototype.toObject.call(this, t);
                                return n.objects = r, n
                            },
                            toDatalessObject: function (t) {
                                var i, r = this.sourcePath;
                                if (r) i = r;
                                else {
                                    var n = this.includeDefaultValues;
                                    i = this._objects.map((function (e) {
                                        var i = e.includeDefaultValues;
                                        e.includeDefaultValues = n;
                                        var r = e.toDatalessObject(t);
                                        return e.includeDefaultValues = i, r
                                    }))
                                }
                                var s = e.Object.prototype.toDatalessObject.call(this, t);
                                return s.objects = i, s
                            },
                            render: function (t) {
                                this._transformDone = !0, this.callSuper("render", t), this._transformDone = !1
                            },
                            shouldCache: function () {
                                var t = e.Object.prototype.shouldCache.call(this);
                                if (t)
                                    for (var i = 0, r = this._objects.length; i < r; i++)
                                        if (this._objects[i].willDrawShadow()) return this.ownCaching = !1, !1;
                                return t
                            },
                            willDrawShadow: function () {
                                if (e.Object.prototype.willDrawShadow.call(this)) return !0;
                                for (var t = 0, i = this._objects.length; t < i; t++)
                                    if (this._objects[t].willDrawShadow()) return !0;
                                return !1
                            },
                            isOnACache: function () {
                                return this.ownCaching || this.group && this.group.isOnACache()
                            },
                            drawObject: function (t) {
                                for (var e = 0, i = this._objects.length; e < i; e++) this._objects[e].render(t);
                                this._drawClipPath(t)
                            },
                            isCacheDirty: function (t) {
                                if (this.callSuper("isCacheDirty", t)) return !0;
                                if (!this.statefullCache) return !1;
                                for (var e = 0, i = this._objects.length; e < i; e++)
                                    if (this._objects[e].isCacheDirty(!0)) {
                                        if (this._cacheCanvas) {
                                            var r = this.cacheWidth / this.zoomX,
                                                n = this.cacheHeight / this.zoomY;
                                            this._cacheContext.clearRect(-r / 2, -n / 2, r, n)
                                        }
                                        return !0
                                    } return !1
                            },
                            _restoreObjectsState: function () {
                                var t = this.calcOwnMatrix();
                                return this._objects.forEach((function (i) {
                                    e.util.addTransformToObject(i, t), delete i.group, i.setCoords()
                                })), this
                            },
                            realizeTransform: function (t, i) {
                                return e.util.addTransformToObject(t, i), t
                            },
                            destroy: function () {
                                return this._objects.forEach((function (t) {
                                    t.set("dirty", !0)
                                })), this._restoreObjectsState()
                            },
                            toActiveSelection: function () {
                                if (this.canvas) {
                                    var t = this._objects,
                                        i = this.canvas;
                                    this._objects = [];
                                    var r = this.toObject();
                                    delete r.objects;
                                    var n = new e.ActiveSelection([]);
                                    return n.set(r), n.type = "activeSelection", i.remove(this), t.forEach((function (t) {
                                        t.group = n, t.dirty = !0, i.add(t)
                                    })), n.canvas = i, n._objects = t, i._activeObject = n, n.setCoords(), n
                                }
                            },
                            ungroupOnCanvas: function () {
                                return this._restoreObjectsState()
                            },
                            setObjectsCoords: function () {
                                return this.forEachObject((function (t) {
                                    t.setCoords(true)
                                })), this
                            },
                            _calcBounds: function (t) {
                                for (var e, i, r, n, s = [], o = [], a = ["tr", "br", "bl", "tl"], h = 0, c = this._objects.length, l = a.length; h < c; ++h) {
                                    for (r = (e = this._objects[h]).calcACoords(), n = 0; n < l; n++) i = a[n], s.push(r[i].x), o.push(r[i].y);
                                    e.aCoords = r
                                }
                                this._getBounds(s, o, t)
                            },
                            _getBounds: function (t, n, s) {
                                var o = new e.Point(i(t), i(n)),
                                    a = new e.Point(r(t), r(n)),
                                    h = o.y || 0,
                                    c = o.x || 0,
                                    l = a.x - o.x || 0,
                                    u = a.y - o.y || 0;
                                this.width = l, this.height = u, s || this.setPositionByOrigin({
                                    x: c,
                                    y: h
                                }, "left", "top")
                            },
                            _toSVG: function (t) {
                                for (var e = ["<g ", "COMMON_PARTS", " >\n"], i = 0, r = this._objects.length; i < r; i++) e.push("\t\t", this._objects[i].toSVG(t));
                                return e.push("</g>\n"), e
                            },
                            getSvgStyles: function () {
                                var t = "undefined" !== typeof this.opacity && 1 !== this.opacity ? "opacity: " + this.opacity + ";" : "",
                                    e = this.visible ? "" : " visibility: hidden;";
                                return [t, this.getSvgFilter(), e].join("")
                            },
                            toClipPathSVG: function (t) {
                                for (var e = [], i = 0, r = this._objects.length; i < r; i++) e.push("\t", this._objects[i].toClipPathSVG(t));
                                return this._createBaseClipPathSVGMarkup(e, {
                                    reviver: t
                                })
                            }
                        }), e.Group.fromObject = function (t, i) {
                            var r = t.objects,
                                n = e.util.object.clone(t, !0);
                            delete n.objects, "string" !== typeof r ? e.util.enlivenObjects(r, (function (r) {
                                e.util.enlivenObjects([t.clipPath], (function (n) {
                                    var s = e.util.object.clone(t, !0);
                                    s.clipPath = n[0], delete s.objects, i && i(new e.Group(r, s, !0))
                                }))
                            })) : e.loadSVGFromURL(r, (function (s) {
                                var o = e.util.groupSVGElements(s, t, r);
                                o.set(n), i && i(o)
                            }))
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});
                        e.ActiveSelection || (e.ActiveSelection = e.util.createClass(e.Group, {
                            type: "activeSelection",
                            initialize: function (t, i) {
                                i = i || {}, this._objects = t || [];
                                for (var r = this._objects.length; r--;) this._objects[r].group = this;
                                i.originX && (this.originX = i.originX), i.originY && (this.originY = i.originY), this._calcBounds(), this._updateObjectsCoords(), e.Object.prototype.initialize.call(this, i), this.setCoords()
                            },
                            toGroup: function () {
                                var t = this._objects.concat();
                                this._objects = [];
                                var i = e.Object.prototype.toObject.call(this),
                                    r = new e.Group([]);
                                if (delete i.type, r.set(i), t.forEach((function (t) {
                                        t.canvas.remove(t), t.group = r
                                    })), r._objects = t, !this.canvas) return r;
                                var n = this.canvas;
                                return n.add(r), n._activeObject = r, r.setCoords(), r
                            },
                            onDeselect: function () {
                                return this.destroy(), !1
                            },
                            toString: function () {
                                return "#<fabric.ActiveSelection: (" + this.complexity() + ")>"
                            },
                            shouldCache: function () {
                                return !1
                            },
                            isOnACache: function () {
                                return !1
                            },
                            _renderControls: function (t, e, i) {
                                t.save(), t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", t, e), "undefined" === typeof (i = i || {}).hasControls && (i.hasControls = !1), i.forActiveSelection = !0;
                                for (var r = 0, n = this._objects.length; r < n; r++) this._objects[r]._renderControls(t, i);
                                t.restore()
                            }
                        }), e.ActiveSelection.fromObject = function (t, i) {
                            e.util.enlivenObjects(t.objects, (function (r) {
                                delete t.objects, i && i(new e.ActiveSelection(r, t, !0))
                            }))
                        })
                    }(e),
                    function (t) {
                        "use strict";
                        var e = n.util.object.extend;
                        t.fabric || (t.fabric = {}), t.fabric.Image ? n.warn("fabric.Image is already defined.") : (n.Image = n.util.createClass(n.Object, {
                            type: "image",
                            strokeWidth: 0,
                            srcFromAttribute: !1,
                            _lastScaleX: 1,
                            _lastScaleY: 1,
                            _filterScalingX: 1,
                            _filterScalingY: 1,
                            minimumScaleTrigger: .5,
                            stateProperties: n.Object.prototype.stateProperties.concat("cropX", "cropY"),
                            cacheProperties: n.Object.prototype.cacheProperties.concat("cropX", "cropY"),
                            cacheKey: "",
                            cropX: 0,
                            cropY: 0,
                            imageSmoothing: !0,
                            initialize: function (t, e) {
                                e || (e = {}), this.filters = [], this.cacheKey = "texture" + n.Object.__uid++, this.callSuper("initialize", e), this._initElement(t, e)
                            },
                            getElement: function () {
                                return this._element || {}
                            },
                            setElement: function (t, e) {
                                return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = t, this._originalElement = t, this._initConfig(e), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this
                            },
                            removeTexture: function (t) {
                                var e = n.filterBackend;
                                e && e.evictCachesForKey && e.evictCachesForKey(t)
                            },
                            dispose: function () {
                                this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(function (t) {
                                    n.util.cleanUpJsdomNode(this[t]), this[t] = void 0
                                }.bind(this))
                            },
                            getCrossOrigin: function () {
                                return this._originalElement && (this._originalElement.crossOrigin || null)
                            },
                            getOriginalSize: function () {
                                var t = this.getElement();
                                return {
                                    width: t.naturalWidth || t.width,
                                    height: t.naturalHeight || t.height
                                }
                            },
                            _stroke: function (t) {
                                if (this.stroke && 0 !== this.strokeWidth) {
                                    var e = this.width / 2,
                                        i = this.height / 2;
                                    t.beginPath(), t.moveTo(-e, -i), t.lineTo(e, -i), t.lineTo(e, i), t.lineTo(-e, i), t.lineTo(-e, -i), t.closePath()
                                }
                            },
                            _renderDashedStroke: function (t) {
                                var e = -this.width / 2,
                                    i = -this.height / 2,
                                    r = this.width,
                                    s = this.height;
                                t.save(), this._setStrokeStyles(t, this), t.beginPath(), n.util.drawDashedLine(t, e, i, e + r, i, this.strokeDashArray), n.util.drawDashedLine(t, e + r, i, e + r, i + s, this.strokeDashArray), n.util.drawDashedLine(t, e + r, i + s, e, i + s, this.strokeDashArray), n.util.drawDashedLine(t, e, i + s, e, i, this.strokeDashArray), t.closePath(), t.restore()
                            },
                            toObject: function (t) {
                                var i = [];
                                this.filters.forEach((function (t) {
                                    t && i.push(t.toObject())
                                }));
                                var r = e(this.callSuper("toObject", ["cropX", "cropY"].concat(t)), {
                                    src: this.getSrc(),
                                    crossOrigin: this.getCrossOrigin(),
                                    filters: i
                                });
                                return this.resizeFilter && (r.resizeFilter = this.resizeFilter.toObject()), r
                            },
                            hasCrop: function () {
                                return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height
                            },
                            _toSVG: function () {
                                var t, e = [],
                                    i = [],
                                    r = this._element,
                                    s = -this.width / 2,
                                    o = -this.height / 2,
                                    a = "",
                                    h = "";
                                if (!r) return [];
                                if (this.hasCrop()) {
                                    var c = n.Object.__uid++;
                                    e.push('<clipPath id="imageCrop_' + c + '">\n', '\t<rect x="' + s + '" y="' + o + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), a = ' clip-path="url(#imageCrop_' + c + ')" '
                                }
                                if (this.imageSmoothing || (h = '" image-rendering="optimizeSpeed'), i.push("\t<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(!0), '" x="', s - this.cropX, '" y="', o - this.cropY, '" width="', r.width || r.naturalWidth, '" height="', r.height || r.height, h, '"', a, "></image>\n"), this.stroke || this.strokeDashArray) {
                                    var l = this.fill;
                                    this.fill = null, t = ["\t<rect ", 'x="', s, '" y="', o, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '"/>\n'], this.fill = l
                                }
                                return e = "fill" !== this.paintFirst ? e.concat(t, i) : e.concat(i, t)
                            },
                            getSrc: function (t) {
                                var e = t ? this._element : this._originalElement;
                                return e ? e.toDataURL ? e.toDataURL() : this.srcFromAttribute ? e.getAttribute("src") : e.src : this.src || ""
                            },
                            setSrc: function (t, e, i) {
                                return n.util.loadImage(t, (function (t, r) {
                                    this.setElement(t, i), this._setWidthHeight(), e && e(this, r)
                                }), this, i && i.crossOrigin), this
                            },
                            toString: function () {
                                return '#<fabric.Image: { src: "' + this.getSrc() + '" }>'
                            },
                            applyResizeFilters: function () {
                                var t = this.resizeFilter,
                                    e = this.minimumScaleTrigger,
                                    i = this.getTotalObjectScaling(),
                                    r = i.scaleX,
                                    s = i.scaleY,
                                    o = this._filteredEl || this._originalElement;
                                if (this.group && this.set("dirty", !0), !t || r > e && s > e) return this._element = o, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = r, void(this._lastScaleY = s);
                                n.filterBackend || (n.filterBackend = n.initFilterBackend());
                                var a = n.util.createCanvasElement(),
                                    h = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey,
                                    c = o.width,
                                    l = o.height;
                                a.width = c, a.height = l, this._element = a, this._lastScaleX = t.scaleX = r, this._lastScaleY = t.scaleY = s, n.filterBackend.applyFilters([t], o, c, l, this._element, h), this._filterScalingX = a.width / this._originalElement.width, this._filterScalingY = a.height / this._originalElement.height
                            },
                            applyFilters: function (t) {
                                if (t = (t = t || this.filters || []).filter((function (t) {
                                        return t && !t.isNeutralState()
                                    })), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), 0 === t.length) return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
                                var e = this._originalElement,
                                    i = e.naturalWidth || e.width,
                                    r = e.naturalHeight || e.height;
                                if (this._element === this._originalElement) {
                                    var s = n.util.createCanvasElement();
                                    s.width = i, s.height = r, this._element = s, this._filteredEl = s
                                } else this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, i, r), this._lastScaleX = 1, this._lastScaleY = 1;
                                return n.filterBackend || (n.filterBackend = n.initFilterBackend()), n.filterBackend.applyFilters(t, this._originalElement, i, r, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this
                            },
                            _render: function (t) {
                                n.util.setImageSmoothing(t, this.imageSmoothing), !0 !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t), this._renderPaintInOrder(t)
                            },
                            drawCacheOnCanvas: function (t) {
                                n.util.setImageSmoothing(t, this.imageSmoothing), n.Object.prototype.drawCacheOnCanvas.call(this, t)
                            },
                            shouldCache: function () {
                                return this.needsItsOwnCache()
                            },
                            _renderFill: function (t) {
                                var e = this._element;
                                if (e) {
                                    var i = this._filterScalingX,
                                        r = this._filterScalingY,
                                        n = this.width,
                                        s = this.height,
                                        o = Math.min,
                                        a = Math.max,
                                        h = a(this.cropX, 0),
                                        c = a(this.cropY, 0),
                                        l = e.naturalWidth || e.width,
                                        u = e.naturalHeight || e.height,
                                        f = h * i,
                                        d = c * r,
                                        g = o(n * i, l - f),
                                        p = o(s * r, u - d),
                                        v = -n / 2,
                                        m = -s / 2,
                                        y = o(n, l / i - h),
                                        _ = o(s, u / r - c);
                                    e && t.drawImage(e, f, d, g, p, v, m, y, _)
                                }
                            },
                            _needsResize: function () {
                                var t = this.getTotalObjectScaling();
                                return t.scaleX !== this._lastScaleX || t.scaleY !== this._lastScaleY
                            },
                            _resetWidthHeight: function () {
                                this.set(this.getOriginalSize())
                            },
                            _initElement: function (t, e) {
                                this.setElement(n.util.getById(t), e), n.util.addClass(this.getElement(), n.Image.CSS_CANVAS)
                            },
                            _initConfig: function (t) {
                                t || (t = {}), this.setOptions(t), this._setWidthHeight(t)
                            },
                            _initFilters: function (t, e) {
                                t && t.length ? n.util.enlivenObjects(t, (function (t) {
                                    e && e(t)
                                }), "fabric.Image.filters") : e && e()
                            },
                            _setWidthHeight: function (t) {
                                t || (t = {});
                                var e = this.getElement();
                                this.width = t.width || e.naturalWidth || e.width || 0, this.height = t.height || e.naturalHeight || e.height || 0
                            },
                            parsePreserveAspectRatioAttribute: function () {
                                var t, e = n.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""),
                                    i = this._element.width,
                                    r = this._element.height,
                                    s = 1,
                                    o = 1,
                                    a = 0,
                                    h = 0,
                                    c = 0,
                                    l = 0,
                                    u = this.width,
                                    f = this.height,
                                    d = {
                                        width: u,
                                        height: f
                                    };
                                return !e || "none" === e.alignX && "none" === e.alignY ? (s = u / i, o = f / r) : ("meet" === e.meetOrSlice && (t = (u - i * (s = o = n.util.findScaleToFit(this._element, d))) / 2, "Min" === e.alignX && (a = -t), "Max" === e.alignX && (a = t), t = (f - r * o) / 2, "Min" === e.alignY && (h = -t), "Max" === e.alignY && (h = t)), "slice" === e.meetOrSlice && (t = i - u / (s = o = n.util.findScaleToCover(this._element, d)), "Mid" === e.alignX && (c = t / 2), "Max" === e.alignX && (c = t), t = r - f / o, "Mid" === e.alignY && (l = t / 2), "Max" === e.alignY && (l = t), i = u / s, r = f / o)), {
                                    width: i,
                                    height: r,
                                    scaleX: s,
                                    scaleY: o,
                                    offsetLeft: a,
                                    offsetTop: h,
                                    cropX: c,
                                    cropY: l
                                }
                            }
                        }), n.Image.CSS_CANVAS = "canvas-img", n.Image.prototype.getSvgSrc = n.Image.prototype.getSrc, n.Image.fromObject = function (t, e) {
                            var i = n.util.object.clone(t);
                            n.util.loadImage(i.src, (function (t, r) {
                                r ? e && e(null, !0) : n.Image.prototype._initFilters.call(i, i.filters, (function (r) {
                                    i.filters = r || [], n.Image.prototype._initFilters.call(i, [i.resizeFilter], (function (r) {
                                        i.resizeFilter = r[0], n.util.enlivenObjects([i.clipPath], (function (r) {
                                            i.clipPath = r[0];
                                            var s = new n.Image(t, i);
                                            e(s, !1)
                                        }))
                                    }))
                                }))
                            }), null, i.crossOrigin)
                        }, n.Image.fromURL = function (t, e, i) {
                            n.util.loadImage(t, (function (t, r) {
                                e && e(new n.Image(t, i), r)
                            }), null, i && i.crossOrigin)
                        }, n.Image.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")), n.Image.fromElement = function (t, i, r) {
                            var s = n.parseAttributes(t, n.Image.ATTRIBUTE_NAMES);
                            n.Image.fromURL(s["xlink:href"], i, e(r ? n.util.object.clone(r) : {}, s))
                        })
                    }(e), n.util.object.extend(n.Object.prototype, {
                        _getAngleValueForStraighten: function () {
                            var t = this.angle % 360;
                            return t > 0 ? 90 * Math.round((t - 1) / 90) : 90 * Math.round(t / 90)
                        },
                        straighten: function () {
                            return this.rotate(this._getAngleValueForStraighten()), this
                        },
                        fxStraighten: function (t) {
                            var e = function () {},
                                i = (t = t || {}).onComplete || e,
                                r = t.onChange || e,
                                s = this;
                            return n.util.animate({
                                startValue: this.get("angle"),
                                endValue: this._getAngleValueForStraighten(),
                                duration: this.FX_DURATION,
                                onChange: function (t) {
                                    s.rotate(t), r()
                                },
                                onComplete: function () {
                                    s.setCoords(), i()
                                }
                            }), this
                        }
                    }), n.util.object.extend(n.StaticCanvas.prototype, {
                        straightenObject: function (t) {
                            return t.straighten(), this.requestRenderAll(), this
                        },
                        fxStraightenObject: function (t) {
                            return t.fxStraighten({
                                onChange: this.requestRenderAllBound
                            }), this
                        }
                    }),
                    function () {
                        "use strict";

                        function t(t, e) {
                            var i = "precision " + e + " float;\nvoid main(){}",
                                r = t.createShader(t.FRAGMENT_SHADER);
                            return t.shaderSource(r, i), t.compileShader(r), !!t.getShaderParameter(r, t.COMPILE_STATUS)
                        }

                        function e(t) {
                            t && t.tileSize && (this.tileSize = t.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo()
                        }
                        n.isWebglSupported = function (e) {
                            if (n.isLikelyNode) return !1;
                            e = e || n.WebglFilterBackend.prototype.tileSize;
                            var i = document.createElement("canvas"),
                                r = i.getContext("webgl") || i.getContext("experimental-webgl"),
                                s = !1;
                            if (r) {
                                n.maxTextureSize = r.getParameter(r.MAX_TEXTURE_SIZE), s = n.maxTextureSize >= e;
                                for (var o = ["highp", "mediump", "lowp"], a = 0; a < 3; a++)
                                    if (t(r, o[a])) {
                                        n.webGlPrecision = o[a];
                                        break
                                    }
                            }
                            return this.isSupported = s, s
                        }, n.WebglFilterBackend = e, e.prototype = {
                            tileSize: 2048,
                            resources: {},
                            setupGLContext: function (t, e) {
                                this.dispose(), this.createWebGLCanvas(t, e), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(t, e)
                            },
                            chooseFastestCopyGLTo2DMethod: function (t, e) {
                                var i, r = "undefined" !== typeof window.performance;
                                try {
                                    new ImageData(1, 1), i = !0
                                } catch (g) {
                                    i = !1
                                }
                                var s = "undefined" !== typeof ArrayBuffer,
                                    h = "undefined" !== typeof Uint8ClampedArray;
                                if (r && i && s && h) {
                                    var c = n.util.createCanvasElement(),
                                        l = new ArrayBuffer(t * e * 4);
                                    if (n.forceGLPutImageData) return this.imageBuffer = l, void(this.copyGLTo2D = a);
                                    var u, f, d = {
                                        imageBuffer: l,
                                        destinationWidth: t,
                                        destinationHeight: e,
                                        targetCanvas: c
                                    };
                                    c.width = t, c.height = e, u = window.performance.now(), o.call(d, this.gl, d), f = window.performance.now() - u, u = window.performance.now(), a.call(d, this.gl, d), f > window.performance.now() - u ? (this.imageBuffer = l, this.copyGLTo2D = a) : this.copyGLTo2D = o
                                }
                            },
                            createWebGLCanvas: function (t, e) {
                                var i = n.util.createCanvasElement();
                                i.width = t, i.height = e;
                                var r = {
                                        alpha: !0,
                                        premultipliedAlpha: !1,
                                        depth: !1,
                                        stencil: !1,
                                        antialias: !1
                                    },
                                    s = i.getContext("webgl", r);
                                s || (s = i.getContext("experimental-webgl", r)), s && (s.clearColor(0, 0, 0, 0), this.canvas = i, this.gl = s)
                            },
                            applyFilters: function (t, e, i, r, n, s) {
                                var o, a = this.gl;
                                s && (o = this.getCachedTexture(s, e));
                                var h = {
                                        originalWidth: e.width || e.originalWidth,
                                        originalHeight: e.height || e.originalHeight,
                                        sourceWidth: i,
                                        sourceHeight: r,
                                        destinationWidth: i,
                                        destinationHeight: r,
                                        context: a,
                                        sourceTexture: this.createTexture(a, i, r, !o && e),
                                        targetTexture: this.createTexture(a, i, r),
                                        originalTexture: o || this.createTexture(a, i, r, !o && e),
                                        passes: t.length,
                                        webgl: !0,
                                        aPosition: this.aPosition,
                                        programCache: this.programCache,
                                        pass: 0,
                                        filterBackend: this,
                                        targetCanvas: n
                                    },
                                    c = a.createFramebuffer();
                                return a.bindFramebuffer(a.FRAMEBUFFER, c), t.forEach((function (t) {
                                        t && t.applyTo(h)
                                    })),
                                    function (t) {
                                        var e = t.targetCanvas,
                                            i = e.width,
                                            r = e.height,
                                            n = t.destinationWidth,
                                            s = t.destinationHeight;
                                        i === n && r === s || (e.width = n, e.height = s)
                                    }(h), this.copyGLTo2D(a, h), a.bindTexture(a.TEXTURE_2D, null), a.deleteTexture(h.sourceTexture), a.deleteTexture(h.targetTexture), a.deleteFramebuffer(c), n.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), h
                            },
                            dispose: function () {
                                this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches()
                            },
                            clearWebGLCaches: function () {
                                this.programCache = {}, this.textureCache = {}
                            },
                            createTexture: function (t, e, i, r) {
                                var n = t.createTexture();
                                return t.bindTexture(t.TEXTURE_2D, n), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), r ? t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r) : t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, i, 0, t.RGBA, t.UNSIGNED_BYTE, null), n
                            },
                            getCachedTexture: function (t, e) {
                                if (this.textureCache[t]) return this.textureCache[t];
                                var i = this.createTexture(this.gl, e.width, e.height, e);
                                return this.textureCache[t] = i, i
                            },
                            evictCachesForKey: function (t) {
                                this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]), delete this.textureCache[t])
                            },
                            copyGLTo2D: o,
                            captureGPUInfo: function () {
                                if (this.gpuInfo) return this.gpuInfo;
                                var t = this.gl,
                                    e = {
                                        renderer: "",
                                        vendor: ""
                                    };
                                if (!t) return e;
                                var i = t.getExtension("WEBGL_debug_renderer_info");
                                if (i) {
                                    var r = t.getParameter(i.UNMASKED_RENDERER_WEBGL),
                                        n = t.getParameter(i.UNMASKED_VENDOR_WEBGL);
                                    r && (e.renderer = r.toLowerCase()), n && (e.vendor = n.toLowerCase())
                                }
                                return this.gpuInfo = e, e
                            }
                        }
                    }(),
                    function () {
                        "use strict";
                        var t = function () {};

                        function e() {}
                        n.Canvas2dFilterBackend = e, e.prototype = {
                            evictCachesForKey: t,
                            dispose: t,
                            clearWebGLCaches: t,
                            resources: {},
                            applyFilters: function (t, e, i, r, n) {
                                var s = n.getContext("2d");
                                s.drawImage(e, 0, 0, i, r);
                                var o = {
                                    sourceWidth: i,
                                    sourceHeight: r,
                                    imageData: s.getImageData(0, 0, i, r),
                                    originalEl: e,
                                    originalImageData: s.getImageData(0, 0, i, r),
                                    canvasEl: n,
                                    ctx: s,
                                    filterBackend: this
                                };
                                return t.forEach((function (t) {
                                    t.applyTo(o)
                                })), o.imageData.width === i && o.imageData.height === r || (n.width = o.imageData.width, n.height = o.imageData.height), s.putImageData(o.imageData, 0, 0), o
                            }
                        }
                    }(), n.Image = n.Image || {}, n.Image.filters = n.Image.filters || {}, n.Image.filters.BaseFilter = n.util.createClass({
                        type: "BaseFilter",
                        vertexSource: "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                        fragmentSource: "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",
                        initialize: function (t) {
                            t && this.setOptions(t)
                        },
                        setOptions: function (t) {
                            for (var e in t) this[e] = t[e]
                        },
                        createProgram: function (t, e, i) {
                            e = e || this.fragmentSource, i = i || this.vertexSource, "highp" !== n.webGlPrecision && (e = e.replace(/precision highp float/g, "precision " + n.webGlPrecision + " float"));
                            var r = t.createShader(t.VERTEX_SHADER);
                            if (t.shaderSource(r, i), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) throw new Error("Vertex shader compile error for " + this.type + ": " + t.getShaderInfoLog(r));
                            var s = t.createShader(t.FRAGMENT_SHADER);
                            if (t.shaderSource(s, e), t.compileShader(s), !t.getShaderParameter(s, t.COMPILE_STATUS)) throw new Error("Fragment shader compile error for " + this.type + ": " + t.getShaderInfoLog(s));
                            var o = t.createProgram();
                            if (t.attachShader(o, r), t.attachShader(o, s), t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS)) throw new Error('Shader link error for "${this.type}" ' + t.getProgramInfoLog(o));
                            var a = this.getAttributeLocations(t, o),
                                h = this.getUniformLocations(t, o) || {};
                            return h.uStepW = t.getUniformLocation(o, "uStepW"), h.uStepH = t.getUniformLocation(o, "uStepH"), {
                                program: o,
                                attributeLocations: a,
                                uniformLocations: h
                            }
                        },
                        getAttributeLocations: function (t, e) {
                            return {
                                aPosition: t.getAttribLocation(e, "aPosition")
                            }
                        },
                        getUniformLocations: function () {
                            return {}
                        },
                        sendAttributeData: function (t, e, i) {
                            var r = e.aPosition,
                                n = t.createBuffer();
                            t.bindBuffer(t.ARRAY_BUFFER, n), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW)
                        },
                        _setupFrameBuffer: function (t) {
                            var e, i, r = t.context;
                            t.passes > 1 ? (e = t.destinationWidth, i = t.destinationHeight, t.sourceWidth === e && t.sourceHeight === i || (r.deleteTexture(t.targetTexture), t.targetTexture = t.filterBackend.createTexture(r, e, i)), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t.targetTexture, 0)) : (r.bindFramebuffer(r.FRAMEBUFFER, null), r.finish())
                        },
                        _swapTextures: function (t) {
                            t.passes--, t.pass++;
                            var e = t.targetTexture;
                            t.targetTexture = t.sourceTexture, t.sourceTexture = e
                        },
                        isNeutralState: function () {
                            var t = this.mainParameter,
                                e = n.Image.filters[this.type].prototype;
                            if (t) {
                                if (Array.isArray(e[t])) {
                                    for (var i = e[t].length; i--;)
                                        if (this[t][i] !== e[t][i]) return !1;
                                    return !0
                                }
                                return e[t] === this[t]
                            }
                            return !1
                        },
                        applyTo: function (t) {
                            t.webgl ? (this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t)
                        },
                        retrieveShader: function (t) {
                            return t.programCache.hasOwnProperty(this.type) || (t.programCache[this.type] = this.createProgram(t.context)), t.programCache[this.type]
                        },
                        applyToWebGL: function (t) {
                            var e = t.context,
                                i = this.retrieveShader(t);
                            0 === t.pass && t.originalTexture ? e.bindTexture(e.TEXTURE_2D, t.originalTexture) : e.bindTexture(e.TEXTURE_2D, t.sourceTexture), e.useProgram(i.program), this.sendAttributeData(e, i.attributeLocations, t.aPosition), e.uniform1f(i.uniformLocations.uStepW, 1 / t.sourceWidth), e.uniform1f(i.uniformLocations.uStepH, 1 / t.sourceHeight), this.sendUniformData(e, i.uniformLocations), e.viewport(0, 0, t.destinationWidth, t.destinationHeight), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
                        },
                        bindAdditionalTexture: function (t, e, i) {
                            t.activeTexture(i), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE0)
                        },
                        unbindAdditionalTexture: function (t, e) {
                            t.activeTexture(e), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE0)
                        },
                        getMainParameter: function () {
                            return this[this.mainParameter]
                        },
                        setMainParameter: function (t) {
                            this[this.mainParameter] = t
                        },
                        sendUniformData: function () {},
                        createHelpLayer: function (t) {
                            if (!t.helpLayer) {
                                var e = document.createElement("canvas");
                                e.width = t.sourceWidth, e.height = t.sourceHeight, t.helpLayer = e
                            }
                        },
                        toObject: function () {
                            var t = {
                                    type: this.type
                                },
                                e = this.mainParameter;
                            return e && (t[e] = this[e]), t
                        },
                        toJSON: function () {
                            return this.toObject()
                        }
                    }), n.Image.filters.BaseFilter.fromObject = function (t, e) {
                        var i = new n.Image.filters[t.type](t);
                        return e && e(i), i
                    },
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.ColorMatrix = r(i.BaseFilter, {
                            type: "ColorMatrix",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",
                            matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                            mainParameter: "matrix",
                            colorsOnly: !0,
                            initialize: function (t) {
                                this.callSuper("initialize", t), this.matrix = this.matrix.slice(0)
                            },
                            applyTo2d: function (t) {
                                var e, i, r, n, s, o = t.imageData.data,
                                    a = o.length,
                                    h = this.matrix,
                                    c = this.colorsOnly;
                                for (s = 0; s < a; s += 4) e = o[s], i = o[s + 1], r = o[s + 2], c ? (o[s] = e * h[0] + i * h[1] + r * h[2] + 255 * h[4], o[s + 1] = e * h[5] + i * h[6] + r * h[7] + 255 * h[9], o[s + 2] = e * h[10] + i * h[11] + r * h[12] + 255 * h[14]) : (n = o[s + 3], o[s] = e * h[0] + i * h[1] + r * h[2] + n * h[3] + 255 * h[4], o[s + 1] = e * h[5] + i * h[6] + r * h[7] + n * h[8] + 255 * h[9], o[s + 2] = e * h[10] + i * h[11] + r * h[12] + n * h[13] + 255 * h[14], o[s + 3] = e * h[15] + i * h[16] + r * h[17] + n * h[18] + 255 * h[19])
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uColorMatrix: t.getUniformLocation(e, "uColorMatrix"),
                                    uConstants: t.getUniformLocation(e, "uConstants")
                                }
                            },
                            sendUniformData: function (t, e) {
                                var i = this.matrix,
                                    r = [i[0], i[1], i[2], i[3], i[5], i[6], i[7], i[8], i[10], i[11], i[12], i[13], i[15], i[16], i[17], i[18]],
                                    n = [i[4], i[9], i[14], i[19]];
                                t.uniformMatrix4fv(e.uColorMatrix, !1, r), t.uniform4fv(e.uConstants, n)
                            }
                        }), e.Image.filters.ColorMatrix.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Brightness = r(i.BaseFilter, {
                            type: "Brightness",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",
                            brightness: 0,
                            mainParameter: "brightness",
                            applyTo2d: function (t) {
                                if (0 !== this.brightness) {
                                    var e, i = t.imageData.data,
                                        r = i.length,
                                        n = Math.round(255 * this.brightness);
                                    for (e = 0; e < r; e += 4) i[e] = i[e] + n, i[e + 1] = i[e + 1] + n, i[e + 2] = i[e + 2] + n
                                }
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uBrightness: t.getUniformLocation(e, "uBrightness")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1f(e.uBrightness, this.brightness)
                            }
                        }), e.Image.filters.Brightness.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend,
                            r = e.Image.filters,
                            n = e.util.createClass;
                        r.Convolute = n(r.BaseFilter, {
                            type: "Convolute",
                            opaque: !1,
                            matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
                            fragmentSource: {
                                Convolute_3_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                                Convolute_3_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                                Convolute_5_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                                Convolute_5_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                                Convolute_7_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                                Convolute_7_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                                Convolute_9_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                                Convolute_9_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}"
                            },
                            retrieveShader: function (t) {
                                var e = Math.sqrt(this.matrix.length),
                                    i = this.type + "_" + e + "_" + (this.opaque ? 1 : 0),
                                    r = this.fragmentSource[i];
                                return t.programCache.hasOwnProperty(i) || (t.programCache[i] = this.createProgram(t.context, r)), t.programCache[i]
                            },
                            applyTo2d: function (t) {
                                var e, i, r, n, s, o, a, h, c, l, u, f, d, g = t.imageData,
                                    p = g.data,
                                    v = this.matrix,
                                    m = Math.round(Math.sqrt(v.length)),
                                    y = Math.floor(m / 2),
                                    _ = g.width,
                                    b = g.height,
                                    x = t.ctx.createImageData(_, b),
                                    C = x.data,
                                    S = this.opaque ? 1 : 0;
                                for (u = 0; u < b; u++)
                                    for (l = 0; l < _; l++) {
                                        for (s = 4 * (u * _ + l), e = 0, i = 0, r = 0, n = 0, d = 0; d < m; d++)
                                            for (f = 0; f < m; f++) o = l + f - y, (a = u + d - y) < 0 || a >= b || o < 0 || o >= _ || (h = 4 * (a * _ + o), c = v[d * m + f], e += p[h] * c, i += p[h + 1] * c, r += p[h + 2] * c, S || (n += p[h + 3] * c));
                                        C[s] = e, C[s + 1] = i, C[s + 2] = r, C[s + 3] = S ? p[s + 3] : n
                                    }
                                t.imageData = x
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uMatrix: t.getUniformLocation(e, "uMatrix"),
                                    uOpaque: t.getUniformLocation(e, "uOpaque"),
                                    uHalfSize: t.getUniformLocation(e, "uHalfSize"),
                                    uSize: t.getUniformLocation(e, "uSize")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1fv(e.uMatrix, this.matrix)
                            },
                            toObject: function () {
                                return i(this.callSuper("toObject"), {
                                    opaque: this.opaque,
                                    matrix: this.matrix
                                })
                            }
                        }), e.Image.filters.Convolute.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Grayscale = r(i.BaseFilter, {
                            type: "Grayscale",
                            fragmentSource: {
                                average: "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",
                                lightness: "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                                luminosity: "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}"
                            },
                            mode: "average",
                            mainParameter: "mode",
                            applyTo2d: function (t) {
                                var e, i, r = t.imageData.data,
                                    n = r.length,
                                    s = this.mode;
                                for (e = 0; e < n; e += 4) "average" === s ? i = (r[e] + r[e + 1] + r[e + 2]) / 3 : "lightness" === s ? i = (Math.min(r[e], r[e + 1], r[e + 2]) + Math.max(r[e], r[e + 1], r[e + 2])) / 2 : "luminosity" === s && (i = .21 * r[e] + .72 * r[e + 1] + .07 * r[e + 2]), r[e] = i, r[e + 1] = i, r[e + 2] = i
                            },
                            retrieveShader: function (t) {
                                var e = this.type + "_" + this.mode;
                                if (!t.programCache.hasOwnProperty(e)) {
                                    var i = this.fragmentSource[this.mode];
                                    t.programCache[e] = this.createProgram(t.context, i)
                                }
                                return t.programCache[e]
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uMode: t.getUniformLocation(e, "uMode")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1i(e.uMode, 1)
                            },
                            isNeutralState: function () {
                                return !1
                            }
                        }), e.Image.filters.Grayscale.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Invert = r(i.BaseFilter, {
                            type: "Invert",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",
                            invert: !0,
                            mainParameter: "invert",
                            applyTo2d: function (t) {
                                var e, i = t.imageData.data,
                                    r = i.length;
                                for (e = 0; e < r; e += 4) i[e] = 255 - i[e], i[e + 1] = 255 - i[e + 1], i[e + 2] = 255 - i[e + 2]
                            },
                            isNeutralState: function () {
                                return !this.invert
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uInvert: t.getUniformLocation(e, "uInvert")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1i(e.uInvert, this.invert)
                            }
                        }), e.Image.filters.Invert.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend,
                            r = e.Image.filters,
                            n = e.util.createClass;
                        r.Noise = n(r.BaseFilter, {
                            type: "Noise",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",
                            mainParameter: "noise",
                            noise: 0,
                            applyTo2d: function (t) {
                                if (0 !== this.noise) {
                                    var e, i, r = t.imageData.data,
                                        n = r.length,
                                        s = this.noise;
                                    for (e = 0, n = r.length; e < n; e += 4) i = (.5 - Math.random()) * s, r[e] += i, r[e + 1] += i, r[e + 2] += i
                                }
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uNoise: t.getUniformLocation(e, "uNoise"),
                                    uSeed: t.getUniformLocation(e, "uSeed")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1f(e.uNoise, this.noise / 255), t.uniform1f(e.uSeed, Math.random())
                            },
                            toObject: function () {
                                return i(this.callSuper("toObject"), {
                                    noise: this.noise
                                })
                            }
                        }), e.Image.filters.Noise.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Pixelate = r(i.BaseFilter, {
                            type: "Pixelate",
                            blocksize: 4,
                            mainParameter: "blocksize",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",
                            applyTo2d: function (t) {
                                var e, i, r, n, s, o, a, h, c, l, u, f = t.imageData,
                                    d = f.data,
                                    g = f.height,
                                    p = f.width;
                                for (i = 0; i < g; i += this.blocksize)
                                    for (r = 0; r < p; r += this.blocksize)
                                        for (n = d[e = 4 * i * p + 4 * r], s = d[e + 1], o = d[e + 2], a = d[e + 3], l = Math.min(i + this.blocksize, g), u = Math.min(r + this.blocksize, p), h = i; h < l; h++)
                                            for (c = r; c < u; c++) d[e = 4 * h * p + 4 * c] = n, d[e + 1] = s, d[e + 2] = o, d[e + 3] = a
                            },
                            isNeutralState: function () {
                                return 1 === this.blocksize
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uBlocksize: t.getUniformLocation(e, "uBlocksize"),
                                    uStepW: t.getUniformLocation(e, "uStepW"),
                                    uStepH: t.getUniformLocation(e, "uStepH")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1f(e.uBlocksize, this.blocksize)
                            }
                        }), e.Image.filters.Pixelate.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.extend,
                            r = e.Image.filters,
                            n = e.util.createClass;
                        r.RemoveColor = n(r.BaseFilter, {
                            type: "RemoveColor",
                            color: "#FFFFFF",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",
                            distance: .02,
                            useAlpha: !1,
                            applyTo2d: function (t) {
                                var i, r, n, s, o = t.imageData.data,
                                    a = 255 * this.distance,
                                    h = new e.Color(this.color).getSource(),
                                    c = [h[0] - a, h[1] - a, h[2] - a],
                                    l = [h[0] + a, h[1] + a, h[2] + a];
                                for (i = 0; i < o.length; i += 4) r = o[i], n = o[i + 1], s = o[i + 2], r > c[0] && n > c[1] && s > c[2] && r < l[0] && n < l[1] && s < l[2] && (o[i + 3] = 0)
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uLow: t.getUniformLocation(e, "uLow"),
                                    uHigh: t.getUniformLocation(e, "uHigh")
                                }
                            },
                            sendUniformData: function (t, i) {
                                var r = new e.Color(this.color).getSource(),
                                    n = parseFloat(this.distance),
                                    s = [0 + r[0] / 255 - n, 0 + r[1] / 255 - n, 0 + r[2] / 255 - n, 1],
                                    o = [r[0] / 255 + n, r[1] / 255 + n, r[2] / 255 + n, 1];
                                t.uniform4fv(i.uLow, s), t.uniform4fv(i.uHigh, o)
                            },
                            toObject: function () {
                                return i(this.callSuper("toObject"), {
                                    color: this.color,
                                    distance: this.distance
                                })
                            }
                        }), e.Image.filters.RemoveColor.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass,
                            n = {
                                Brownie: [.5997, .34553, -.27082, 0, .186, -.0377, .86095, .15059, 0, -.1449, .24113, -.07441, .44972, 0, -.02965, 0, 0, 0, 1, 0],
                                Vintage: [.62793, .32021, -.03965, 0, .03784, .02578, .64411, .03259, 0, .02926, .0466, -.08512, .52416, 0, .02023, 0, 0, 0, 1, 0],
                                Kodachrome: [1.12855, -.39673, -.03992, 0, .24991, -.16404, 1.08352, -.05498, 0, .09698, -.16786, -.56034, 1.60148, 0, .13972, 0, 0, 0, 1, 0],
                                Technicolor: [1.91252, -.85453, -.09155, 0, .04624, -.30878, 1.76589, -.10601, 0, -.27589, -.2311, -.75018, 1.84759, 0, .12137, 0, 0, 0, 1, 0],
                                Polaroid: [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0],
                                Sepia: [.393, .769, .189, 0, 0, .349, .686, .168, 0, 0, .272, .534, .131, 0, 0, 0, 0, 0, 1, 0],
                                BlackWhite: [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]
                            };
                        for (var s in n) i[s] = r(i.ColorMatrix, {
                            type: s,
                            matrix: n[s],
                            mainParameter: !1,
                            colorsOnly: !0
                        }), e.Image.filters[s].fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric,
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.BlendColor = r(i.BaseFilter, {
                            type: "BlendColor",
                            color: "#F95C63",
                            mode: "multiply",
                            alpha: 1,
                            fragmentSource: {
                                multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
                                screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
                                add: "gl_FragColor.rgb += uColor.rgb;\n",
                                diff: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
                                subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
                                lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
                                darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
                                exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
                                overlay: "if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n",
                                tint: "gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n"
                            },
                            buildSource: function (t) {
                                return "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n" + this.fragmentSource[t] + "}\n}"
                            },
                            retrieveShader: function (t) {
                                var e, i = this.type + "_" + this.mode;
                                return t.programCache.hasOwnProperty(i) || (e = this.buildSource(this.mode), t.programCache[i] = this.createProgram(t.context, e)), t.programCache[i]
                            },
                            applyTo2d: function (t) {
                                var i, r, n, s, o, a, h, c = t.imageData.data,
                                    l = c.length,
                                    u = 1 - this.alpha;
                                i = (h = new e.Color(this.color).getSource())[0] * this.alpha, r = h[1] * this.alpha, n = h[2] * this.alpha;
                                for (var f = 0; f < l; f += 4) switch (s = c[f], o = c[f + 1], a = c[f + 2], this.mode) {
                                    case "multiply":
                                        c[f] = s * i / 255, c[f + 1] = o * r / 255, c[f + 2] = a * n / 255;
                                        break;
                                    case "screen":
                                        c[f] = 255 - (255 - s) * (255 - i) / 255, c[f + 1] = 255 - (255 - o) * (255 - r) / 255, c[f + 2] = 255 - (255 - a) * (255 - n) / 255;
                                        break;
                                    case "add":
                                        c[f] = s + i, c[f + 1] = o + r, c[f + 2] = a + n;
                                        break;
                                    case "diff":
                                    case "difference":
                                        c[f] = Math.abs(s - i), c[f + 1] = Math.abs(o - r), c[f + 2] = Math.abs(a - n);
                                        break;
                                    case "subtract":
                                        c[f] = s - i, c[f + 1] = o - r, c[f + 2] = a - n;
                                        break;
                                    case "darken":
                                        c[f] = Math.min(s, i), c[f + 1] = Math.min(o, r), c[f + 2] = Math.min(a, n);
                                        break;
                                    case "lighten":
                                        c[f] = Math.max(s, i), c[f + 1] = Math.max(o, r), c[f + 2] = Math.max(a, n);
                                        break;
                                    case "overlay":
                                        c[f] = i < 128 ? 2 * s * i / 255 : 255 - 2 * (255 - s) * (255 - i) / 255, c[f + 1] = r < 128 ? 2 * o * r / 255 : 255 - 2 * (255 - o) * (255 - r) / 255, c[f + 2] = n < 128 ? 2 * a * n / 255 : 255 - 2 * (255 - a) * (255 - n) / 255;
                                        break;
                                    case "exclusion":
                                        c[f] = i + s - 2 * i * s / 255, c[f + 1] = r + o - 2 * r * o / 255, c[f + 2] = n + a - 2 * n * a / 255;
                                        break;
                                    case "tint":
                                        c[f] = i + s * u, c[f + 1] = r + o * u, c[f + 2] = n + a * u
                                }
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uColor: t.getUniformLocation(e, "uColor")
                                }
                            },
                            sendUniformData: function (t, i) {
                                var r = new e.Color(this.color).getSource();
                                r[0] = this.alpha * r[0] / 255, r[1] = this.alpha * r[1] / 255, r[2] = this.alpha * r[2] / 255, r[3] = this.alpha, t.uniform4fv(i.uColor, r)
                            },
                            toObject: function () {
                                return {
                                    type: this.type,
                                    color: this.color,
                                    mode: this.mode,
                                    alpha: this.alpha
                                }
                            }
                        }), e.Image.filters.BlendColor.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric,
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.BlendImage = r(i.BaseFilter, {
                            type: "BlendImage",
                            image: null,
                            mode: "multiply",
                            alpha: 1,
                            vertexSource: "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                            fragmentSource: {
                                multiply: "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",
                                mask: "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}"
                            },
                            retrieveShader: function (t) {
                                var e = this.type + "_" + this.mode,
                                    i = this.fragmentSource[this.mode];
                                return t.programCache.hasOwnProperty(e) || (t.programCache[e] = this.createProgram(t.context, i)), t.programCache[e]
                            },
                            applyToWebGL: function (t) {
                                var e = t.context,
                                    i = this.createTexture(t.filterBackend, this.image);
                                this.bindAdditionalTexture(e, i, e.TEXTURE1), this.callSuper("applyToWebGL", t), this.unbindAdditionalTexture(e, e.TEXTURE1)
                            },
                            createTexture: function (t, e) {
                                return t.getCachedTexture(e.cacheKey, e._element)
                            },
                            calculateMatrix: function () {
                                var t = this.image,
                                    e = t._element.width,
                                    i = t._element.height;
                                return [1 / t.scaleX, 0, 0, 0, 1 / t.scaleY, 0, -t.left / e, -t.top / i, 1]
                            },
                            applyTo2d: function (t) {
                                var i, r, n, s, o, a, h, c, l, u, f, d = t.imageData,
                                    g = t.filterBackend.resources,
                                    p = d.data,
                                    v = p.length,
                                    m = d.width,
                                    y = d.height,
                                    _ = this.image;
                                g.blendImage || (g.blendImage = e.util.createCanvasElement()), u = (l = g.blendImage).getContext("2d"), l.width !== m || l.height !== y ? (l.width = m, l.height = y) : u.clearRect(0, 0, m, y), u.setTransform(_.scaleX, 0, 0, _.scaleY, _.left, _.top), u.drawImage(_._element, 0, 0, m, y), f = u.getImageData(0, 0, m, y).data;
                                for (var b = 0; b < v; b += 4) switch (o = p[b], a = p[b + 1], h = p[b + 2], c = p[b + 3], i = f[b], r = f[b + 1], n = f[b + 2], s = f[b + 3], this.mode) {
                                    case "multiply":
                                        p[b] = o * i / 255, p[b + 1] = a * r / 255, p[b + 2] = h * n / 255, p[b + 3] = c * s / 255;
                                        break;
                                    case "mask":
                                        p[b + 3] = s
                                }
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uTransformMatrix: t.getUniformLocation(e, "uTransformMatrix"),
                                    uImage: t.getUniformLocation(e, "uImage")
                                }
                            },
                            sendUniformData: function (t, e) {
                                var i = this.calculateMatrix();
                                t.uniform1i(e.uImage, 1), t.uniformMatrix3fv(e.uTransformMatrix, !1, i)
                            },
                            toObject: function () {
                                return {
                                    type: this.type,
                                    image: this.image && this.image.toObject(),
                                    mode: this.mode,
                                    alpha: this.alpha
                                }
                            }
                        }), e.Image.filters.BlendImage.fromObject = function (t, i) {
                            e.Image.fromObject(t.image, (function (r) {
                                var n = e.util.object.clone(t);
                                n.image = r, i(new e.Image.filters.BlendImage(n))
                            }))
                        }
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = Math.pow,
                            r = Math.floor,
                            n = Math.sqrt,
                            s = Math.abs,
                            o = Math.round,
                            a = Math.sin,
                            h = Math.ceil,
                            c = e.Image.filters,
                            l = e.util.createClass;
                        c.Resize = l(c.BaseFilter, {
                            type: "Resize",
                            resizeType: "hermite",
                            scaleX: 1,
                            scaleY: 1,
                            lanczosLobes: 3,
                            getUniformLocations: function (t, e) {
                                return {
                                    uDelta: t.getUniformLocation(e, "uDelta"),
                                    uTaps: t.getUniformLocation(e, "uTaps")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform2fv(e.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), t.uniform1fv(e.uTaps, this.taps)
                            },
                            retrieveShader: function (t) {
                                var e = this.getFilterWindow(),
                                    i = this.type + "_" + e;
                                if (!t.programCache.hasOwnProperty(i)) {
                                    var r = this.generateShader(e);
                                    t.programCache[i] = this.createProgram(t.context, r)
                                }
                                return t.programCache[i]
                            },
                            getFilterWindow: function () {
                                var t = this.tempScale;
                                return Math.ceil(this.lanczosLobes / t)
                            },
                            getTaps: function () {
                                for (var t = this.lanczosCreate(this.lanczosLobes), e = this.tempScale, i = this.getFilterWindow(), r = new Array(i), n = 1; n <= i; n++) r[n - 1] = t(n * e);
                                return r
                            },
                            generateShader: function (t) {
                                for (var e = new Array(t), i = this.fragmentSourceTOP, r = 1; r <= t; r++) e[r - 1] = r + ".0 * uDelta";
                                return i += "uniform float uTaps[" + t + "];\n", i += "void main() {\n", i += "  vec4 color = texture2D(uTexture, vTexCoord);\n", i += "  float sum = 1.0;\n", e.forEach((function (t, e) {
                                    i += "  color += texture2D(uTexture, vTexCoord + " + t + ") * uTaps[" + e + "];\n", i += "  color += texture2D(uTexture, vTexCoord - " + t + ") * uTaps[" + e + "];\n", i += "  sum += 2.0 * uTaps[" + e + "];\n"
                                })), i += "  gl_FragColor = color / sum;\n", i += "}"
                            },
                            fragmentSourceTOP: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",
                            applyTo: function (t) {
                                t.webgl ? (t.passes++, this.width = t.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = t.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t.destinationWidth = this.dW, this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t), t.sourceWidth = t.destinationWidth, this.height = t.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t.destinationHeight = this.dH, this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t), t.sourceHeight = t.destinationHeight) : this.applyTo2d(t)
                            },
                            isNeutralState: function () {
                                return 1 === this.scaleX && 1 === this.scaleY
                            },
                            lanczosCreate: function (t) {
                                return function (e) {
                                    if (e >= t || e <= -t) return 0;
                                    if (e < 1.1920929e-7 && e > -1.1920929e-7) return 1;
                                    var i = (e *= Math.PI) / t;
                                    return a(e) / e * a(i) / i
                                }
                            },
                            applyTo2d: function (t) {
                                var e = t.imageData,
                                    i = this.scaleX,
                                    r = this.scaleY;
                                this.rcpScaleX = 1 / i, this.rcpScaleY = 1 / r;
                                var n, s = e.width,
                                    a = e.height,
                                    h = o(s * i),
                                    c = o(a * r);
                                "sliceHack" === this.resizeType ? n = this.sliceByTwo(t, s, a, h, c) : "hermite" === this.resizeType ? n = this.hermiteFastResize(t, s, a, h, c) : "bilinear" === this.resizeType ? n = this.bilinearFiltering(t, s, a, h, c) : "lanczos" === this.resizeType && (n = this.lanczosResize(t, s, a, h, c)), t.imageData = n
                            },
                            sliceByTwo: function (t, i, n, s, o) {
                                var a, h, c = t.imageData,
                                    l = .5,
                                    u = !1,
                                    f = !1,
                                    d = i * l,
                                    g = n * l,
                                    p = e.filterBackend.resources,
                                    v = 0,
                                    m = 0,
                                    y = i,
                                    _ = 0;
                                for (p.sliceByTwo || (p.sliceByTwo = document.createElement("canvas")), ((a = p.sliceByTwo).width < 1.5 * i || a.height < n) && (a.width = 1.5 * i, a.height = n), (h = a.getContext("2d")).clearRect(0, 0, 1.5 * i, n), h.putImageData(c, 0, 0), s = r(s), o = r(o); !u || !f;) i = d, n = g, s < r(d * l) ? d = r(d * l) : (d = s, u = !0), o < r(g * l) ? g = r(g * l) : (g = o, f = !0), h.drawImage(a, v, m, i, n, y, _, d, g), v = y, m = _, _ += g;
                                return h.getImageData(v, m, s, o)
                            },
                            lanczosResize: function (t, e, o, a, c) {
                                var l = t.imageData.data,
                                    u = t.ctx.createImageData(a, c),
                                    f = u.data,
                                    d = this.lanczosCreate(this.lanczosLobes),
                                    g = this.rcpScaleX,
                                    p = this.rcpScaleY,
                                    v = 2 / this.rcpScaleX,
                                    m = 2 / this.rcpScaleY,
                                    y = h(g * this.lanczosLobes / 2),
                                    _ = h(p * this.lanczosLobes / 2),
                                    b = {},
                                    x = {},
                                    C = {};
                                return function t(h) {
                                    var S, w, T, O, k, E, P, A, j, D, M;
                                    for (x.x = (h + .5) * g, C.x = r(x.x), S = 0; S < c; S++) {
                                        for (x.y = (S + .5) * p, C.y = r(x.y), k = 0, E = 0, P = 0, A = 0, j = 0, w = C.x - y; w <= C.x + y; w++)
                                            if (!(w < 0 || w >= e)) {
                                                D = r(1e3 * s(w - x.x)), b[D] || (b[D] = {});
                                                for (var F = C.y - _; F <= C.y + _; F++) F < 0 || F >= o || (M = r(1e3 * s(F - x.y)), b[D][M] || (b[D][M] = d(n(i(D * v, 2) + i(M * m, 2)) / 1e3)), (T = b[D][M]) > 0 && (k += T, E += T * l[O = 4 * (F * e + w)], P += T * l[O + 1], A += T * l[O + 2], j += T * l[O + 3]))
                                            } f[O = 4 * (S * a + h)] = E / k, f[O + 1] = P / k, f[O + 2] = A / k, f[O + 3] = j / k
                                    }
                                    return ++h < a ? t(h) : u
                                }(0)
                            },
                            bilinearFiltering: function (t, e, i, n, s) {
                                var o, a, h, c, l, u, f, d, g, p = 0,
                                    v = this.rcpScaleX,
                                    m = this.rcpScaleY,
                                    y = 4 * (e - 1),
                                    _ = t.imageData.data,
                                    b = t.ctx.createImageData(n, s),
                                    x = b.data;
                                for (h = 0; h < s; h++)
                                    for (c = 0; c < n; c++)
                                        for (l = v * c - (o = r(v * c)), u = m * h - (a = r(m * h)), g = 4 * (a * e + o), f = 0; f < 4; f++) d = _[g + f] * (1 - l) * (1 - u) + _[g + 4 + f] * l * (1 - u) + _[g + y + f] * u * (1 - l) + _[g + y + 4 + f] * l * u, x[p++] = d;
                                return b
                            },
                            hermiteFastResize: function (t, e, i, o, a) {
                                for (var c = this.rcpScaleX, l = this.rcpScaleY, u = h(c / 2), f = h(l / 2), d = t.imageData.data, g = t.ctx.createImageData(o, a), p = g.data, v = 0; v < a; v++)
                                    for (var m = 0; m < o; m++) {
                                        for (var y = 4 * (m + v * o), _ = 0, b = 0, x = 0, C = 0, S = 0, w = 0, T = 0, O = (v + .5) * l, k = r(v * l); k < (v + 1) * l; k++)
                                            for (var E = s(O - (k + .5)) / f, P = (m + .5) * c, A = E * E, j = r(m * c); j < (m + 1) * c; j++) {
                                                var D = s(P - (j + .5)) / u,
                                                    M = n(A + D * D);
                                                M > 1 && M < -1 || (_ = 2 * M * M * M - 3 * M * M + 1) > 0 && (T += _ * d[(D = 4 * (j + k * e)) + 3], x += _, d[D + 3] < 255 && (_ = _ * d[D + 3] / 250), C += _ * d[D], S += _ * d[D + 1], w += _ * d[D + 2], b += _)
                                            }
                                        p[y] = C / b, p[y + 1] = S / b, p[y + 2] = w / b, p[y + 3] = T / x
                                    }
                                return g
                            },
                            toObject: function () {
                                return {
                                    type: this.type,
                                    scaleX: this.scaleX,
                                    scaleY: this.scaleY,
                                    resizeType: this.resizeType,
                                    lanczosLobes: this.lanczosLobes
                                }
                            }
                        }), e.Image.filters.Resize.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Contrast = r(i.BaseFilter, {
                            type: "Contrast",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",
                            contrast: 0,
                            mainParameter: "contrast",
                            applyTo2d: function (t) {
                                if (0 !== this.contrast) {
                                    var e, i = t.imageData.data,
                                        r = i.length,
                                        n = Math.floor(255 * this.contrast),
                                        s = 259 * (n + 255) / (255 * (259 - n));
                                    for (e = 0; e < r; e += 4) i[e] = s * (i[e] - 128) + 128, i[e + 1] = s * (i[e + 1] - 128) + 128, i[e + 2] = s * (i[e + 2] - 128) + 128
                                }
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uContrast: t.getUniformLocation(e, "uContrast")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1f(e.uContrast, this.contrast)
                            }
                        }), e.Image.filters.Contrast.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Saturation = r(i.BaseFilter, {
                            type: "Saturation",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",
                            saturation: 0,
                            mainParameter: "saturation",
                            applyTo2d: function (t) {
                                if (0 !== this.saturation) {
                                    var e, i, r = t.imageData.data,
                                        n = r.length,
                                        s = -this.saturation;
                                    for (e = 0; e < n; e += 4) i = Math.max(r[e], r[e + 1], r[e + 2]), r[e] += i !== r[e] ? (i - r[e]) * s : 0, r[e + 1] += i !== r[e + 1] ? (i - r[e + 1]) * s : 0, r[e + 2] += i !== r[e + 2] ? (i - r[e + 2]) * s : 0
                                }
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uSaturation: t.getUniformLocation(e, "uSaturation")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform1f(e.uSaturation, -this.saturation)
                            }
                        }), e.Image.filters.Saturation.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Blur = r(i.BaseFilter, {
                            type: "Blur",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",
                            blur: 0,
                            mainParameter: "blur",
                            applyTo: function (t) {
                                t.webgl ? (this.aspectRatio = t.sourceWidth / t.sourceHeight, t.passes++, this._setupFrameBuffer(t), this.horizontal = !0, this.applyToWebGL(t), this._swapTextures(t), this._setupFrameBuffer(t), this.horizontal = !1, this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t)
                            },
                            applyTo2d: function (t) {
                                t.imageData = this.simpleBlur(t)
                            },
                            simpleBlur: function (t) {
                                var i, r, n = t.filterBackend.resources,
                                    s = t.imageData.width,
                                    o = t.imageData.height;
                                n.blurLayer1 || (n.blurLayer1 = e.util.createCanvasElement(), n.blurLayer2 = e.util.createCanvasElement()), i = n.blurLayer1, r = n.blurLayer2, i.width === s && i.height === o || (r.width = i.width = s, r.height = i.height = o);
                                var a, h, c, l, u = i.getContext("2d"),
                                    f = r.getContext("2d"),
                                    d = 15,
                                    g = .06 * this.blur * .5;
                                for (u.putImageData(t.imageData, 0, 0), f.clearRect(0, 0, s, o), l = -15; l <= d; l++) c = g * (h = l / d) * s + (a = (Math.random() - .5) / 4), f.globalAlpha = 1 - Math.abs(h), f.drawImage(i, c, a), u.drawImage(r, 0, 0), f.globalAlpha = 1, f.clearRect(0, 0, r.width, r.height);
                                for (l = -15; l <= d; l++) c = g * (h = l / d) * o + (a = (Math.random() - .5) / 4), f.globalAlpha = 1 - Math.abs(h), f.drawImage(i, a, c), u.drawImage(r, 0, 0), f.globalAlpha = 1, f.clearRect(0, 0, r.width, r.height);
                                t.ctx.drawImage(i, 0, 0);
                                var p = t.ctx.getImageData(0, 0, i.width, i.height);
                                return u.globalAlpha = 1, u.clearRect(0, 0, i.width, i.height), p
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    delta: t.getUniformLocation(e, "uDelta")
                                }
                            },
                            sendUniformData: function (t, e) {
                                var i = this.chooseRightDelta();
                                t.uniform2fv(e.delta, i)
                            },
                            chooseRightDelta: function () {
                                var t, e = 1,
                                    i = [0, 0];
                                return this.horizontal ? this.aspectRatio > 1 && (e = 1 / this.aspectRatio) : this.aspectRatio < 1 && (e = this.aspectRatio), t = e * this.blur * .12, this.horizontal ? i[0] = t : i[1] = t, i
                            }
                        }), i.Blur.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Gamma = r(i.BaseFilter, {
                            type: "Gamma",
                            fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",
                            gamma: [1, 1, 1],
                            mainParameter: "gamma",
                            initialize: function (t) {
                                this.gamma = [1, 1, 1], i.BaseFilter.prototype.initialize.call(this, t)
                            },
                            applyTo2d: function (t) {
                                var e, i = t.imageData.data,
                                    r = this.gamma,
                                    n = i.length,
                                    s = 1 / r[0],
                                    o = 1 / r[1],
                                    a = 1 / r[2];
                                for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), e = 0, n = 256; e < n; e++) this.rVals[e] = 255 * Math.pow(e / 255, s), this.gVals[e] = 255 * Math.pow(e / 255, o), this.bVals[e] = 255 * Math.pow(e / 255, a);
                                for (e = 0, n = i.length; e < n; e += 4) i[e] = this.rVals[i[e]], i[e + 1] = this.gVals[i[e + 1]], i[e + 2] = this.bVals[i[e + 2]]
                            },
                            getUniformLocations: function (t, e) {
                                return {
                                    uGamma: t.getUniformLocation(e, "uGamma")
                                }
                            },
                            sendUniformData: function (t, e) {
                                t.uniform3fv(e.uGamma, this.gamma)
                            }
                        }), e.Image.filters.Gamma.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.Composed = r(i.BaseFilter, {
                            type: "Composed",
                            subFilters: [],
                            initialize: function (t) {
                                this.callSuper("initialize", t), this.subFilters = this.subFilters.slice(0)
                            },
                            applyTo: function (t) {
                                t.passes += this.subFilters.length - 1, this.subFilters.forEach((function (e) {
                                    e.applyTo(t)
                                }))
                            },
                            toObject: function () {
                                return e.util.object.extend(this.callSuper("toObject"), {
                                    subFilters: this.subFilters.map((function (t) {
                                        return t.toObject()
                                    }))
                                })
                            },
                            isNeutralState: function () {
                                return !this.subFilters.some((function (t) {
                                    return !t.isNeutralState()
                                }))
                            }
                        }), e.Image.filters.Composed.fromObject = function (t, i) {
                            var r = (t.subFilters || []).map((function (t) {
                                    return new e.Image.filters[t.type](t)
                                })),
                                n = new e.Image.filters.Composed({
                                    subFilters: r
                                });
                            return i && i(n), n
                        }
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.Image.filters,
                            r = e.util.createClass;
                        i.HueRotation = r(i.ColorMatrix, {
                            type: "HueRotation",
                            rotation: 0,
                            mainParameter: "rotation",
                            calculateMatrix: function () {
                                var t = this.rotation * Math.PI,
                                    i = e.util.cos(t),
                                    r = e.util.sin(t),
                                    n = 1 / 3,
                                    s = Math.sqrt(n) * r,
                                    o = 1 - i;
                                this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = i + o / 3, this.matrix[1] = n * o - s, this.matrix[2] = n * o + s, this.matrix[5] = n * o + s, this.matrix[6] = i + n * o, this.matrix[7] = n * o - s, this.matrix[10] = n * o - s, this.matrix[11] = n * o + s, this.matrix[12] = i + n * o
                            },
                            isNeutralState: function (t) {
                                return this.calculateMatrix(), i.BaseFilter.prototype.isNeutralState.call(this, t)
                            },
                            applyTo: function (t) {
                                this.calculateMatrix(), i.BaseFilter.prototype.applyTo.call(this, t)
                            }
                        }), e.Image.filters.HueRotation.fromObject = e.Image.filters.BaseFilter.fromObject
                    }(e),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {}),
                            i = e.util.object.clone;
                        if (e.Text) e.warn("fabric.Text is already defined");
                        else {
                            var r = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles path".split(" ");
                            e.Text = e.util.createClass(e.Object, {
                                _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles", "path"],
                                _reNewline: /\r?\n/,
                                _reSpacesAndTabs: /[ \t\r]/g,
                                _reSpaceAndTab: /[ \t\r]/,
                                _reWords: /\S+/g,
                                type: "text",
                                fontSize: 40,
                                fontWeight: "normal",
                                fontFamily: "Times New Roman",
                                underline: !1,
                                overline: !1,
                                linethrough: !1,
                                textAlign: "left",
                                fontStyle: "normal",
                                lineHeight: 1.16,
                                superscript: {
                                    size: .6,
                                    baseline: -.35
                                },
                                subscript: {
                                    size: .6,
                                    baseline: .11
                                },
                                textBackgroundColor: "",
                                stateProperties: e.Object.prototype.stateProperties.concat(r),
                                cacheProperties: e.Object.prototype.cacheProperties.concat(r),
                                stroke: null,
                                shadow: null,
                                path: null,
                                _fontSizeFraction: .222,
                                offsets: {
                                    underline: .1,
                                    linethrough: -.315,
                                    overline: -.88
                                },
                                _fontSizeMult: 1.13,
                                charSpacing: 0,
                                styles: null,
                                _measuringContext: null,
                                deltaY: 0,
                                _styleProperties: ["stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "deltaY", "textBackgroundColor"],
                                __charBounds: [],
                                CACHE_FONT_SIZE: 400,
                                MIN_TEXT_WIDTH: 2,
                                initialize: function (t, e) {
                                    this.styles = e && e.styles || {}, this.text = t, this.__skipDimension = !0, this.callSuper("initialize", e), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({
                                        propertySet: "_dimensionAffectingProps"
                                    })
                                },
                                setPathInfo: function () {
                                    var t = this.path;
                                    t && (t.segmentsInfo = e.util.getPathSegmentsInfo(t.path))
                                },
                                getMeasuringContext: function () {
                                    return e._measuringContext || (e._measuringContext = this.canvas && this.canvas.contextCache || e.util.createCanvasElement().getContext("2d")), e._measuringContext
                                },
                                _splitText: function () {
                                    var t = this._splitTextIntoLines(this.text);
                                    return this.textLines = t.lines, this._textLines = t.graphemeLines, this._unwrappedTextLines = t._unwrappedLines, this._text = t.graphemeText, t
                                },
                                initDimensions: function () {
                                    this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), -1 !== this.textAlign.indexOf("justify") && this.enlargeSpaces(), this.saveState({
                                        propertySet: "_dimensionAffectingProps"
                                    }))
                                },
                                enlargeSpaces: function () {
                                    for (var t, e, i, r, n, s, o, a = 0, h = this._textLines.length; a < h; a++)
                                        if (("justify" === this.textAlign || a !== h - 1 && !this.isEndOfWrapping(a)) && (r = 0, n = this._textLines[a], (e = this.getLineWidth(a)) < this.width && (o = this.textLines[a].match(this._reSpacesAndTabs)))) {
                                            i = o.length, t = (this.width - e) / i;
                                            for (var c = 0, l = n.length; c <= l; c++) s = this.__charBounds[a][c], this._reSpaceAndTab.test(n[c]) ? (s.width += t, s.kernedWidth += t, s.left += r, r += t) : s.left += r
                                        }
                                },
                                isEndOfWrapping: function (t) {
                                    return t === this._textLines.length - 1
                                },
                                missingNewlineOffset: function () {
                                    return 1
                                },
                                toString: function () {
                                    return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>'
                                },
                                _getCacheCanvasDimensions: function () {
                                    var t = this.callSuper("_getCacheCanvasDimensions"),
                                        e = this.fontSize;
                                    return t.width += e * t.zoomX, t.height += e * t.zoomY, t
                                },
                                _render: function (t) {
                                    this._setTextStyles(t), this._renderTextLinesBackground(t), this._renderTextDecoration(t, "underline"), this._renderText(t), this._renderTextDecoration(t, "overline"), this._renderTextDecoration(t, "linethrough")
                                },
                                _renderText: function (t) {
                                    "stroke" === this.paintFirst ? (this._renderTextStroke(t), this._renderTextFill(t)) : (this._renderTextFill(t), this._renderTextStroke(t))
                                },
                                _setTextStyles: function (t, e, i) {
                                    t.textBaseline = "alphabetic", t.font = this._getFontDeclaration(e, i)
                                },
                                calcTextWidth: function () {
                                    for (var t = this.getLineWidth(0), e = 1, i = this._textLines.length; e < i; e++) {
                                        var r = this.getLineWidth(e);
                                        r > t && (t = r)
                                    }
                                    return t
                                },
                                _renderTextLine: function (t, e, i, r, n, s) {
                                    this._renderChars(t, e, i, r, n, s)
                                },
                                _renderTextLinesBackground: function (t) {
                                    if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
                                        for (var e, i, r, n, s, o, a = t.fillStyle, h = this._getLeftOffset(), c = this._getTopOffset(), l = 0, u = 0, f = this.path, d = 0, g = this._textLines.length; d < g; d++)
                                            if (e = this.getHeightOfLine(d), this.textBackgroundColor || this.styleHas("textBackgroundColor", d)) {
                                                r = this._textLines[d], i = this._getLineLeftOffset(d), u = 0, l = 0, n = this.getValueOfPropertyAt(d, 0, "textBackgroundColor");
                                                for (var p = 0, v = r.length; p < v; p++) s = this.__charBounds[d][p], o = this.getValueOfPropertyAt(d, p, "textBackgroundColor"), f ? (t.save(), t.translate(s.renderLeft, s.renderTop), t.rotate(s.angle), t.fillStyle = o, o && t.fillRect(-s.width / 2, -e / this.lineHeight * (1 - this._fontSizeFraction), s.width, e / this.lineHeight), t.restore()) : o !== n ? (t.fillStyle = n, n && t.fillRect(h + i + l, c, u, e / this.lineHeight), l = s.left, u = s.width, n = o) : u += s.kernedWidth;
                                                o && !f && (t.fillStyle = o, t.fillRect(h + i + l, c, u, e / this.lineHeight)), c += e
                                            } else c += e;
                                        t.fillStyle = a, this._removeShadow(t)
                                    }
                                },
                                getFontCache: function (t) {
                                    var i = t.fontFamily.toLowerCase();
                                    e.charWidthsCache[i] || (e.charWidthsCache[i] = {});
                                    var r = e.charWidthsCache[i],
                                        n = t.fontStyle.toLowerCase() + "_" + (t.fontWeight + "").toLowerCase();
                                    return r[n] || (r[n] = {}), r[n]
                                },
                                _measureChar: function (t, e, i, r) {
                                    var n, s, o, a, h = this.getFontCache(e),
                                        c = i + t,
                                        l = this._getFontDeclaration(e) === this._getFontDeclaration(r),
                                        u = e.fontSize / this.CACHE_FONT_SIZE;
                                    if (i && void 0 !== h[i] && (o = h[i]), void 0 !== h[t] && (a = n = h[t]), l && void 0 !== h[c] && (a = (s = h[c]) - o), void 0 === n || void 0 === o || void 0 === s) {
                                        var f = this.getMeasuringContext();
                                        this._setTextStyles(f, e, !0)
                                    }
                                    return void 0 === n && (a = n = f.measureText(t).width, h[t] = n), void 0 === o && l && i && (o = f.measureText(i).width, h[i] = o), l && void 0 === s && (s = f.measureText(c).width, h[c] = s, a = s - o), {
                                        width: n * u,
                                        kernedWidth: a * u
                                    }
                                },
                                getHeightOfChar: function (t, e) {
                                    return this.getValueOfPropertyAt(t, e, "fontSize")
                                },
                                measureLine: function (t) {
                                    var e = this._measureLine(t);
                                    return 0 !== this.charSpacing && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e
                                },
                                _measureLine: function (t) {
                                    var i, r, n, s, o, a, h = 0,
                                        c = this._textLines[t],
                                        l = new Array(c.length),
                                        u = 0,
                                        f = this.path;
                                    for (this.__charBounds[t] = l, f && (o = e.util.getPointOnPath(f.path, 0, f.segmentsInfo), a = f.segmentsInfo[f.segmentsInfo.length - 1].length, o.x += f.pathOffset.x, o.y += f.pathOffset.y), i = 0; i < c.length; i++) r = c[i], s = this._getGraphemeBox(r, t, i, n), f && (u > a && (u %= a), this._setGraphemeOnPath(u, s, o)), l[i] = s, h += s.kernedWidth, u += s.kernedWidth, n = r;
                                    return l[i] = {
                                        left: s ? s.left + s.width : 0,
                                        width: 0,
                                        kernedWidth: 0,
                                        height: this.fontSize
                                    }, {
                                        width: h,
                                        numOfSpaces: 0
                                    }
                                },
                                _setGraphemeOnPath: function (t, i, r) {
                                    var n = t + i.kernedWidth / 2,
                                        s = this.path,
                                        o = e.util.getPointOnPath(s.path, n, s.segmentsInfo);
                                    i.renderLeft = o.x - r.x, i.renderTop = o.y - r.y, i.angle = o.angle
                                },
                                _getGraphemeBox: function (t, e, i, r, n) {
                                    var s, o = this.getCompleteStyleDeclaration(e, i),
                                        a = r ? this.getCompleteStyleDeclaration(e, i - 1) : {},
                                        h = this._measureChar(t, o, r, a),
                                        c = h.kernedWidth,
                                        l = h.width;
                                    0 !== this.charSpacing && (l += s = this._getWidthOfCharSpacing(), c += s);
                                    var u = {
                                        width: l,
                                        left: 0,
                                        height: o.fontSize,
                                        kernedWidth: c,
                                        deltaY: o.deltaY
                                    };
                                    if (i > 0 && !n) {
                                        var f = this.__charBounds[e][i - 1];
                                        u.left = f.left + f.width + h.kernedWidth - h.width
                                    }
                                    return u
                                },
                                getHeightOfLine: function (t) {
                                    if (this.__lineHeights[t]) return this.__lineHeights[t];
                                    for (var e = this._textLines[t], i = this.getHeightOfChar(t, 0), r = 1, n = e.length; r < n; r++) i = Math.max(this.getHeightOfChar(t, r), i);
                                    return this.__lineHeights[t] = i * this.lineHeight * this._fontSizeMult
                                },
                                calcTextHeight: function () {
                                    for (var t, e = 0, i = 0, r = this._textLines.length; i < r; i++) t = this.getHeightOfLine(i), e += i === r - 1 ? t / this.lineHeight : t;
                                    return e
                                },
                                _getLeftOffset: function () {
                                    return -this.width / 2
                                },
                                _getTopOffset: function () {
                                    return -this.height / 2
                                },
                                _renderTextCommon: function (t, e) {
                                    t.save();
                                    for (var i = 0, r = this._getLeftOffset(), n = this._getTopOffset(), s = 0, o = this._textLines.length; s < o; s++) {
                                        var a = this.getHeightOfLine(s),
                                            h = a / this.lineHeight,
                                            c = this._getLineLeftOffset(s);
                                        this._renderTextLine(e, t, this._textLines[s], r + c, n + i + h, s), i += a
                                    }
                                    t.restore()
                                },
                                _renderTextFill: function (t) {
                                    (this.fill || this.styleHas("fill")) && this._renderTextCommon(t, "fillText")
                                },
                                _renderTextStroke: function (t) {
                                    (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray), t.beginPath(), this._renderTextCommon(t, "strokeText"), t.closePath(), t.restore())
                                },
                                _renderChars: function (t, e, i, r, n, s) {
                                    var o, a, h, c, l = this.getHeightOfLine(s),
                                        u = -1 !== this.textAlign.indexOf("justify"),
                                        f = "",
                                        d = 0,
                                        g = this.path,
                                        p = !u && 0 === this.charSpacing && this.isEmptyStyles(s) && !g;
                                    if (e.save(), n -= l * this._fontSizeFraction / this.lineHeight, p) return this._renderChar(t, e, s, 0, i.join(""), r, n, l), void e.restore();
                                    for (var v = 0, m = i.length - 1; v <= m; v++) c = v === m || this.charSpacing || g, f += i[v], h = this.__charBounds[s][v], 0 === d ? (r += h.kernedWidth - h.width, d += h.width) : d += h.kernedWidth, u && !c && this._reSpaceAndTab.test(i[v]) && (c = !0), c || (o = o || this.getCompleteStyleDeclaration(s, v), a = this.getCompleteStyleDeclaration(s, v + 1), c = this._hasStyleChanged(o, a)), c && (g ? (e.save(), e.translate(h.renderLeft, h.renderTop), e.rotate(h.angle), this._renderChar(t, e, s, v, f, -d / 2, 0, l), e.restore()) : this._renderChar(t, e, s, v, f, r, n, l), f = "", o = a, r += d, d = 0);
                                    e.restore()
                                },
                                _applyPatternGradientTransformText: function (t) {
                                    var i, r = e.util.createCanvasElement(),
                                        n = this.width + this.strokeWidth,
                                        s = this.height + this.strokeWidth;
                                    return r.width = n, r.height = s, (i = r.getContext("2d")).beginPath(), i.moveTo(0, 0), i.lineTo(n, 0), i.lineTo(n, s), i.lineTo(0, s), i.closePath(), i.translate(n / 2, s / 2), i.fillStyle = t.toLive(i), this._applyPatternGradientTransform(i, t), i.fill(), i.createPattern(r, "no-repeat")
                                },
                                handleFiller: function (t, e, i) {
                                    var r, n;
                                    return i.toLive ? "percentage" === i.gradientUnits || i.gradientTrasnform || i.patternTransform ? (r = -this.width / 2, n = -this.height / 2, t.translate(r, n), t[e] = this._applyPatternGradientTransformText(i), {
                                        offsetX: r,
                                        offsetY: n
                                    }) : (t[e] = i.toLive(t, this), this._applyPatternGradientTransform(t, i)) : (t[e] = i, {
                                        offsetX: 0,
                                        offsetY: 0
                                    })
                                },
                                _setStrokeStyles: function (t, e) {
                                    return t.lineWidth = e.strokeWidth, t.lineCap = this.strokeLineCap, t.lineDashOffset = this.strokeDashOffset, t.lineJoin = this.strokeLineJoin, t.miterLimit = this.strokeMiterLimit, this.handleFiller(t, "strokeStyle", e.stroke)
                                },
                                _setFillStyles: function (t, e) {
                                    return this.handleFiller(t, "fillStyle", e.fill)
                                },
                                _renderChar: function (t, e, i, r, n, s, o) {
                                    var a, h, c = this._getStyleDeclaration(i, r),
                                        l = this.getCompleteStyleDeclaration(i, r),
                                        u = "fillText" === t && l.fill,
                                        f = "strokeText" === t && l.stroke && l.strokeWidth;
                                    (f || u) && (e.save(), u && (a = this._setFillStyles(e, l)), f && (h = this._setStrokeStyles(e, l)), e.font = this._getFontDeclaration(l), c && c.textBackgroundColor && this._removeShadow(e), c && c.deltaY && (o += c.deltaY), u && e.fillText(n, s - a.offsetX, o - a.offsetY), f && e.strokeText(n, s - h.offsetX, o - h.offsetY), e.restore())
                                },
                                setSuperscript: function (t, e) {
                                    return this._setScript(t, e, this.superscript)
                                },
                                setSubscript: function (t, e) {
                                    return this._setScript(t, e, this.subscript)
                                },
                                _setScript: function (t, e, i) {
                                    var r = this.get2DCursorLocation(t, !0),
                                        n = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "fontSize"),
                                        s = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "deltaY"),
                                        o = {
                                            fontSize: n * i.size,
                                            deltaY: s + n * i.baseline
                                        };
                                    return this.setSelectionStyles(o, t, e), this
                                },
                                _hasStyleChanged: function (t, e) {
                                    return t.fill !== e.fill || t.stroke !== e.stroke || t.strokeWidth !== e.strokeWidth || t.fontSize !== e.fontSize || t.fontFamily !== e.fontFamily || t.fontWeight !== e.fontWeight || t.fontStyle !== e.fontStyle || t.deltaY !== e.deltaY
                                },
                                _hasStyleChangedForSvg: function (t, e) {
                                    return this._hasStyleChanged(t, e) || t.overline !== e.overline || t.underline !== e.underline || t.linethrough !== e.linethrough
                                },
                                _getLineLeftOffset: function (t) {
                                    var e = this.getLineWidth(t);
                                    return "center" === this.textAlign ? (this.width - e) / 2 : "right" === this.textAlign ? this.width - e : "justify-center" === this.textAlign && this.isEndOfWrapping(t) ? (this.width - e) / 2 : "justify-right" === this.textAlign && this.isEndOfWrapping(t) ? this.width - e : 0
                                },
                                _clearCache: function () {
                                    this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = []
                                },
                                _shouldClearDimensionCache: function () {
                                    var t = this._forceClearCache;
                                    return t || (t = this.hasStateChanged("_dimensionAffectingProps")), t && (this.dirty = !0, this._forceClearCache = !1), t
                                },
                                getLineWidth: function (t) {
                                    return this.__lineWidths[t] ? this.__lineWidths[t] : (e = "" === this._textLines[t] ? 0 : this.measureLine(t).width, this.__lineWidths[t] = e, e);
                                    var e
                                },
                                _getWidthOfCharSpacing: function () {
                                    return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0
                                },
                                getValueOfPropertyAt: function (t, e, i) {
                                    var r = this._getStyleDeclaration(t, e);
                                    return r && "undefined" !== typeof r[i] ? r[i] : this[i]
                                },
                                _renderTextDecoration: function (t, e) {
                                    if (this[e] || this.styleHas(e)) {
                                        for (var i, r, n, s, o, a, h, c, l, u, f, d, g, p, v, m, y = this._getLeftOffset(), _ = this._getTopOffset(), b = this.path, x = this._getWidthOfCharSpacing(), C = 0, S = this._textLines.length; C < S; C++)
                                            if (i = this.getHeightOfLine(C), this[e] || this.styleHas(e, C)) {
                                                h = this._textLines[C], p = i / this.lineHeight, s = this._getLineLeftOffset(C), u = 0, f = 0, c = this.getValueOfPropertyAt(C, 0, e), m = this.getValueOfPropertyAt(C, 0, "fill"), l = _ + p * (1 - this._fontSizeFraction), r = this.getHeightOfChar(C, 0), o = this.getValueOfPropertyAt(C, 0, "deltaY");
                                                for (var w = 0, T = h.length; w < T; w++) d = this.__charBounds[C][w], g = this.getValueOfPropertyAt(C, w, e), v = this.getValueOfPropertyAt(C, w, "fill"), n = this.getHeightOfChar(C, w), a = this.getValueOfPropertyAt(C, w, "deltaY"), b && g && v ? (t.save(), t.fillStyle = m, t.translate(d.renderLeft, d.renderTop), t.rotate(d.angle), t.fillRect(-d.kernedWidth / 2, this.offsets[e] * n + a, d.kernedWidth, this.fontSize / 15), t.restore()) : (g !== c || v !== m || n !== r || a !== o) && f > 0 ? (c && m && (t.fillStyle = m, t.fillRect(y + s + u, l + this.offsets[e] * r + o, f, this.fontSize / 15)), u = d.left, f = d.width, c = g, m = v, r = n, o = a) : f += d.kernedWidth;
                                                t.fillStyle = v, g && v && t.fillRect(y + s + u, l + this.offsets[e] * r + o, f - x, this.fontSize / 15), _ += i
                                            } else _ += i;
                                        this._removeShadow(t)
                                    }
                                },
                                _getFontDeclaration: function (t, i) {
                                    var r = t || this,
                                        n = this.fontFamily,
                                        s = e.Text.genericFonts.indexOf(n.toLowerCase()) > -1,
                                        o = void 0 === n || n.indexOf("'") > -1 || n.indexOf(",") > -1 || n.indexOf('"') > -1 || s ? r.fontFamily : '"' + r.fontFamily + '"';
                                    return [e.isLikelyNode ? r.fontWeight : r.fontStyle, e.isLikelyNode ? r.fontStyle : r.fontWeight, i ? this.CACHE_FONT_SIZE + "px" : r.fontSize + "px", o].join(" ")
                                },
                                render: function (t) {
                                    this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", t)))
                                },
                                _splitTextIntoLines: function (t) {
                                    for (var i = t.split(this._reNewline), r = new Array(i.length), n = ["\n"], s = [], o = 0; o < i.length; o++) r[o] = e.util.string.graphemeSplit(i[o]), s = s.concat(r[o], n);
                                    return s.pop(), {
                                        _unwrappedLines: r,
                                        lines: i,
                                        graphemeText: s,
                                        graphemeLines: r
                                    }
                                },
                                toObject: function (t) {
                                    var e = ["text", "fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "underline", "overline", "linethrough", "textAlign", "textBackgroundColor", "charSpacing", "path"].concat(t),
                                        r = this.callSuper("toObject", e);
                                    return r.styles = i(this.styles, !0), r.path = this.path && this.path.toObject(), r
                                },
                                set: function (t, e) {
                                    this.callSuper("set", t, e);
                                    var i = !1,
                                        r = !1;
                                    if ("object" === typeof t)
                                        for (var n in t) "path" === n && this.setPathInfo(), i = i || -1 !== this._dimensionAffectingProps.indexOf(n), r = r || "path" === n;
                                    else i = -1 !== this._dimensionAffectingProps.indexOf(t), r = "path" === t;
                                    return r && this.setPathInfo(), i && (this.initDimensions(), this.setCoords()), this
                                },
                                complexity: function () {
                                    return 1
                                }
                            }), e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")), e.Text.DEFAULT_SVG_FONT_SIZE = 16, e.Text.fromElement = function (t, r, n) {
                                if (!t) return r(null);
                                var s = e.parseAttributes(t, e.Text.ATTRIBUTE_NAMES),
                                    o = s.textAnchor || "left";
                                if ((n = e.util.object.extend(n ? i(n) : {}, s)).top = n.top || 0, n.left = n.left || 0, s.textDecoration) {
                                    var a = s.textDecoration; - 1 !== a.indexOf("underline") && (n.underline = !0), -1 !== a.indexOf("overline") && (n.overline = !0), -1 !== a.indexOf("line-through") && (n.linethrough = !0), delete n.textDecoration
                                }
                                "dx" in s && (n.left += s.dx), "dy" in s && (n.top += s.dy), "fontSize" in n || (n.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE);
                                var h = "";
                                "textContent" in t ? h = t.textContent : "firstChild" in t && null !== t.firstChild && "data" in t.firstChild && null !== t.firstChild.data && (h = t.firstChild.data), h = h.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
                                var c = n.strokeWidth;
                                n.strokeWidth = 0;
                                var l = new e.Text(h, n),
                                    u = l.getScaledHeight() / l.height,
                                    f = ((l.height + l.strokeWidth) * l.lineHeight - l.height) * u,
                                    d = l.getScaledHeight() + f,
                                    g = 0;
                                "center" === o && (g = l.getScaledWidth() / 2), "right" === o && (g = l.getScaledWidth()), l.set({
                                    left: l.left - g,
                                    top: l.top - (d - l.fontSize * (.07 + l._fontSizeFraction)) / l.lineHeight,
                                    strokeWidth: "undefined" !== typeof c ? c : 1
                                }), r(l)
                            }, e.Text.fromObject = function (t, r) {
                                var n = i(t),
                                    s = t.path;
                                return delete n.path, e.Object._fromObject("Text", n, (function (t) {
                                    s ? e.Object._fromObject("Path", s, (function (e) {
                                        t.set("path", e), r(t)
                                    }), "path") : r(t)
                                }), "text")
                            }, e.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], e.util.createAccessors && e.util.createAccessors(e.Text)
                        }
                    }(e), n.util.object.extend(n.Text.prototype, {
                        isEmptyStyles: function (t) {
                            if (!this.styles) return !0;
                            if ("undefined" !== typeof t && !this.styles[t]) return !0;
                            var e = "undefined" === typeof t ? this.styles : {
                                line: this.styles[t]
                            };
                            for (var i in e)
                                for (var r in e[i])
                                    for (var n in e[i][r]) return !1;
                            return !0
                        },
                        styleHas: function (t, e) {
                            if (!this.styles || !t || "" === t) return !1;
                            if ("undefined" !== typeof e && !this.styles[e]) return !1;
                            var i = "undefined" === typeof e ? this.styles : {
                                0: this.styles[e]
                            };
                            for (var r in i)
                                for (var n in i[r])
                                    if ("undefined" !== typeof i[r][n][t]) return !0;
                            return !1
                        },
                        cleanStyle: function (t) {
                            if (!this.styles || !t || "" === t) return !1;
                            var e, i, r = this.styles,
                                n = 0,
                                s = !0,
                                o = 0;
                            for (var a in r) {
                                for (var h in e = 0, r[a]) {
                                    var c;
                                    n++, (c = r[a][h]).hasOwnProperty(t) ? (i ? c[t] !== i && (s = !1) : i = c[t], c[t] === this[t] && delete c[t]) : s = !1, 0 !== Object.keys(c).length ? e++ : delete r[a][h]
                                }
                                0 === e && delete r[a]
                            }
                            for (var l = 0; l < this._textLines.length; l++) o += this._textLines[l].length;
                            s && n === o && (this[t] = i, this.removeStyle(t))
                        },
                        removeStyle: function (t) {
                            if (this.styles && t && "" !== t) {
                                var e, i, r, n = this.styles;
                                for (i in n) {
                                    for (r in e = n[i]) delete e[r][t], 0 === Object.keys(e[r]).length && delete e[r];
                                    0 === Object.keys(e).length && delete n[i]
                                }
                            }
                        },
                        _extendStyles: function (t, e) {
                            var i = this.get2DCursorLocation(t);
                            this._getLineStyle(i.lineIndex) || this._setLineStyle(i.lineIndex), this._getStyleDeclaration(i.lineIndex, i.charIndex) || this._setStyleDeclaration(i.lineIndex, i.charIndex, {}), n.util.object.extend(this._getStyleDeclaration(i.lineIndex, i.charIndex), e)
                        },
                        get2DCursorLocation: function (t, e) {
                            "undefined" === typeof t && (t = this.selectionStart);
                            for (var i = e ? this._unwrappedTextLines : this._textLines, r = i.length, n = 0; n < r; n++) {
                                if (t <= i[n].length) return {
                                    lineIndex: n,
                                    charIndex: t
                                };
                                t -= i[n].length + this.missingNewlineOffset(n)
                            }
                            return {
                                lineIndex: n - 1,
                                charIndex: i[n - 1].length < t ? i[n - 1].length : t
                            }
                        },
                        getSelectionStyles: function (t, e, i) {
                            "undefined" === typeof t && (t = this.selectionStart || 0), "undefined" === typeof e && (e = this.selectionEnd || t);
                            for (var r = [], n = t; n < e; n++) r.push(this.getStyleAtPosition(n, i));
                            return r
                        },
                        getStyleAtPosition: function (t, e) {
                            var i = this.get2DCursorLocation(t);
                            return (e ? this.getCompleteStyleDeclaration(i.lineIndex, i.charIndex) : this._getStyleDeclaration(i.lineIndex, i.charIndex)) || {}
                        },
                        setSelectionStyles: function (t, e, i) {
                            "undefined" === typeof e && (e = this.selectionStart || 0), "undefined" === typeof i && (i = this.selectionEnd || e);
                            for (var r = e; r < i; r++) this._extendStyles(r, t);
                            return this._forceClearCache = !0, this
                        },
                        _getStyleDeclaration: function (t, e) {
                            var i = this.styles && this.styles[t];
                            return i ? i[e] : null
                        },
                        getCompleteStyleDeclaration: function (t, e) {
                            for (var i, r = this._getStyleDeclaration(t, e) || {}, n = {}, s = 0; s < this._styleProperties.length; s++) n[i = this._styleProperties[s]] = "undefined" === typeof r[i] ? this[i] : r[i];
                            return n
                        },
                        _setStyleDeclaration: function (t, e, i) {
                            this.styles[t][e] = i
                        },
                        _deleteStyleDeclaration: function (t, e) {
                            delete this.styles[t][e]
                        },
                        _getLineStyle: function (t) {
                            return !!this.styles[t]
                        },
                        _setLineStyle: function (t) {
                            this.styles[t] = {}
                        },
                        _deleteLineStyle: function (t) {
                            delete this.styles[t]
                        }
                    }),
                    function () {
                        function t(t) {
                            t.textDecoration && (t.textDecoration.indexOf("underline") > -1 && (t.underline = !0), t.textDecoration.indexOf("line-through") > -1 && (t.linethrough = !0), t.textDecoration.indexOf("overline") > -1 && (t.overline = !0), delete t.textDecoration)
                        }
                        n.IText = n.util.createClass(n.Text, n.Observable, {
                            type: "i-text",
                            selectionStart: 0,
                            selectionEnd: 0,
                            selectionColor: "rgba(17,119,255,0.3)",
                            isEditing: !1,
                            editable: !0,
                            editingBorderColor: "rgba(102,153,255,0.25)",
                            cursorWidth: 2,
                            cursorColor: "",
                            cursorDelay: 1e3,
                            cursorDuration: 600,
                            caching: !0,
                            _reSpace: /\s|\n/,
                            _currentCursorOpacity: 0,
                            _selectionDirection: null,
                            _abortCursorAnimation: !1,
                            __widthOfSpace: [],
                            inCompositionMode: !1,
                            initialize: function (t, e) {
                                this.callSuper("initialize", t, e), this.initBehavior()
                            },
                            setSelectionStart: function (t) {
                                t = Math.max(t, 0), this._updateAndFire("selectionStart", t)
                            },
                            setSelectionEnd: function (t) {
                                t = Math.min(t, this.text.length), this._updateAndFire("selectionEnd", t)
                            },
                            _updateAndFire: function (t, e) {
                                this[t] !== e && (this._fireSelectionChanged(), this[t] = e), this._updateTextarea()
                            },
                            _fireSelectionChanged: function () {
                                this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
                                    target: this
                                })
                            },
                            initDimensions: function () {
                                this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions")
                            },
                            render: function (t) {
                                this.clearContextTop(), this.callSuper("render", t), this.cursorOffsetCache = {}, this.renderCursorOrSelection()
                            },
                            _render: function (t) {
                                this.callSuper("_render", t)
                            },
                            clearContextTop: function (t) {
                                if (this.isEditing && this.canvas && this.canvas.contextTop) {
                                    var e = this.canvas.contextTop,
                                        i = this.canvas.viewportTransform;
                                    e.save(), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this.transform(e), this._clearTextArea(e), t || e.restore()
                                }
                            },
                            renderCursorOrSelection: function () {
                                if (this.isEditing && this.canvas && this.canvas.contextTop) {
                                    var t = this._getCursorBoundaries(),
                                        e = this.canvas.contextTop;
                                    this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(t, e) : this.renderSelection(t, e), e.restore()
                                }
                            },
                            _clearTextArea: function (t) {
                                var e = this.width + 4,
                                    i = this.height + 4;
                                t.clearRect(-e / 2, -i / 2, e, i)
                            },
                            _getCursorBoundaries: function (t) {
                                "undefined" === typeof t && (t = this.selectionStart);
                                var e = this._getLeftOffset(),
                                    i = this._getTopOffset(),
                                    r = this._getCursorBoundariesOffsets(t);
                                return {
                                    left: e,
                                    top: i,
                                    leftOffset: r.left,
                                    topOffset: r.top
                                }
                            },
                            _getCursorBoundariesOffsets: function (t) {
                                if (this.cursorOffsetCache && "top" in this.cursorOffsetCache) return this.cursorOffsetCache;
                                var e, i, r, n, s = 0,
                                    o = 0,
                                    a = this.get2DCursorLocation(t);
                                r = a.charIndex, i = a.lineIndex;
                                for (var h = 0; h < i; h++) s += this.getHeightOfLine(h);
                                e = this._getLineLeftOffset(i);
                                var c = this.__charBounds[i][r];
                                return c && (o = c.left), 0 !== this.charSpacing && r === this._textLines[i].length && (o -= this._getWidthOfCharSpacing()), n = {
                                    top: s,
                                    left: e + (o > 0 ? o : 0)
                                }, this.cursorOffsetCache = n, this.cursorOffsetCache
                            },
                            renderCursor: function (t, e) {
                                var i = this.get2DCursorLocation(),
                                    r = i.lineIndex,
                                    n = i.charIndex > 0 ? i.charIndex - 1 : 0,
                                    s = this.getValueOfPropertyAt(r, n, "fontSize"),
                                    o = this.scaleX * this.canvas.getZoom(),
                                    a = this.cursorWidth / o,
                                    h = t.topOffset,
                                    c = this.getValueOfPropertyAt(r, n, "deltaY");
                                h += (1 - this._fontSizeFraction) * this.getHeightOfLine(r) / this.lineHeight - s * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(t, e), e.fillStyle = this.cursorColor || this.getValueOfPropertyAt(r, n, "fill"), e.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, e.fillRect(t.left + t.leftOffset - a / 2, h + t.top + c, a, s)
                            },
                            renderSelection: function (t, e) {
                                for (var i = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, r = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, n = -1 !== this.textAlign.indexOf("justify"), s = this.get2DCursorLocation(i), o = this.get2DCursorLocation(r), a = s.lineIndex, h = o.lineIndex, c = s.charIndex < 0 ? 0 : s.charIndex, l = o.charIndex < 0 ? 0 : o.charIndex, u = a; u <= h; u++) {
                                    var f, d = this._getLineLeftOffset(u) || 0,
                                        g = this.getHeightOfLine(u),
                                        p = 0,
                                        v = 0;
                                    if (u === a && (p = this.__charBounds[a][c].left), u >= a && u < h) v = n && !this.isEndOfWrapping(u) ? this.width : this.getLineWidth(u) || 5;
                                    else if (u === h)
                                        if (0 === l) v = this.__charBounds[h][l].left;
                                        else {
                                            var m = this._getWidthOfCharSpacing();
                                            v = this.__charBounds[h][l - 1].left + this.__charBounds[h][l - 1].width - m
                                        } f = g, (this.lineHeight < 1 || u === h && this.lineHeight > 1) && (g /= this.lineHeight), this.inCompositionMode ? (e.fillStyle = this.compositionColor || "black", e.fillRect(t.left + d + p, t.top + t.topOffset + g, v - p, 1)) : (e.fillStyle = this.selectionColor, e.fillRect(t.left + d + p, t.top + t.topOffset, v - p, g)), t.topOffset += f
                                }
                            },
                            getCurrentCharFontSize: function () {
                                var t = this._getCurrentCharIndex();
                                return this.getValueOfPropertyAt(t.l, t.c, "fontSize")
                            },
                            getCurrentCharColor: function () {
                                var t = this._getCurrentCharIndex();
                                return this.getValueOfPropertyAt(t.l, t.c, "fill")
                            },
                            _getCurrentCharIndex: function () {
                                var t = this.get2DCursorLocation(this.selectionStart, !0),
                                    e = t.charIndex > 0 ? t.charIndex - 1 : 0;
                                return {
                                    l: t.lineIndex,
                                    c: e
                                }
                            }
                        }), n.IText.fromObject = function (e, i) {
                            if (t(e), e.styles)
                                for (var r in e.styles)
                                    for (var s in e.styles[r]) t(e.styles[r][s]);
                            n.Object._fromObject("IText", e, i, "text")
                        }
                    }(),
                    function () {
                        var t = n.util.object.clone;
                        n.util.object.extend(n.IText.prototype, {
                            initBehavior: function () {
                                this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
                            },
                            onDeselect: function () {
                                this.isEditing && this.exitEditing(), this.selected = !1
                            },
                            initAddedHandler: function () {
                                var t = this;
                                this.on("added", (function () {
                                    var e = t.canvas;
                                    e && (e._hasITextHandlers || (e._hasITextHandlers = !0, t._initCanvasHandlers(e)), e._iTextInstances = e._iTextInstances || [], e._iTextInstances.push(t))
                                }))
                            },
                            initRemovedHandler: function () {
                                var t = this;
                                this.on("removed", (function () {
                                    var e = t.canvas;
                                    e && (e._iTextInstances = e._iTextInstances || [], n.util.removeFromArray(e._iTextInstances, t), 0 === e._iTextInstances.length && (e._hasITextHandlers = !1, t._removeCanvasHandlers(e)))
                                }))
                            },
                            _initCanvasHandlers: function (t) {
                                t._mouseUpITextHandler = function () {
                                    t._iTextInstances && t._iTextInstances.forEach((function (t) {
                                        t.__isMousedown = !1
                                    }))
                                }, t.on("mouse:up", t._mouseUpITextHandler)
                            },
                            _removeCanvasHandlers: function (t) {
                                t.off("mouse:up", t._mouseUpITextHandler)
                            },
                            _tick: function () {
                                this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete")
                            },
                            _animateCursor: function (t, e, i, r) {
                                var n;
                                return n = {
                                    isAborted: !1,
                                    abort: function () {
                                        this.isAborted = !0
                                    }
                                }, t.animate("_currentCursorOpacity", e, {
                                    duration: i,
                                    onComplete: function () {
                                        n.isAborted || t[r]()
                                    },
                                    onChange: function () {
                                        t.canvas && t.selectionStart === t.selectionEnd && t.renderCursorOrSelection()
                                    },
                                    abort: function () {
                                        return n.isAborted
                                    }
                                }), n
                            },
                            _onTickComplete: function () {
                                var t = this;
                                this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout((function () {
                                    t._currentTickCompleteState = t._animateCursor(t, 0, this.cursorDuration / 2, "_tick")
                                }), 100)
                            },
                            initDelayedCursor: function (t) {
                                var e = this,
                                    i = t ? 0 : this.cursorDelay;
                                this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout((function () {
                                    e._tick()
                                }), i)
                            },
                            abortCursorAnimation: function () {
                                var t = this._currentTickState || this._currentTickCompleteState,
                                    e = this.canvas;
                                this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, t && e && e.clearContext(e.contextTop || e.contextContainer)
                            },
                            selectAll: function () {
                                return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this
                            },
                            getSelectedText: function () {
                                return this._text.slice(this.selectionStart, this.selectionEnd).join("")
                            },
                            findWordBoundaryLeft: function (t) {
                                var e = 0,
                                    i = t - 1;
                                if (this._reSpace.test(this._text[i]))
                                    for (; this._reSpace.test(this._text[i]);) e++, i--;
                                for (;
                                    /\S/.test(this._text[i]) && i > -1;) e++, i--;
                                return t - e
                            },
                            findWordBoundaryRight: function (t) {
                                var e = 0,
                                    i = t;
                                if (this._reSpace.test(this._text[i]))
                                    for (; this._reSpace.test(this._text[i]);) e++, i++;
                                for (;
                                    /\S/.test(this._text[i]) && i < this._text.length;) e++, i++;
                                return t + e
                            },
                            findLineBoundaryLeft: function (t) {
                                for (var e = 0, i = t - 1; !/\n/.test(this._text[i]) && i > -1;) e++, i--;
                                return t - e
                            },
                            findLineBoundaryRight: function (t) {
                                for (var e = 0, i = t; !/\n/.test(this._text[i]) && i < this._text.length;) e++, i++;
                                return t + e
                            },
                            searchWordBoundary: function (t, e) {
                                for (var i = this._text, r = this._reSpace.test(i[t]) ? t - 1 : t, s = i[r], o = n.reNonWord; !o.test(s) && r > 0 && r < i.length;) s = i[r += e];
                                return o.test(s) && (r += 1 === e ? 0 : 1), r
                            },
                            selectWord: function (t) {
                                t = t || this.selectionStart;
                                var e = this.searchWordBoundary(t, -1),
                                    i = this.searchWordBoundary(t, 1);
                                this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()
                            },
                            selectLine: function (t) {
                                t = t || this.selectionStart;
                                var e = this.findLineBoundaryLeft(t),
                                    i = this.findLineBoundaryRight(t);
                                return this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this
                            },
                            enterEditing: function (t) {
                                if (!this.isEditing && this.editable) return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(t), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", {
                                    target: this
                                }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this
                            },
                            exitEditingOnOthers: function (t) {
                                t._iTextInstances && t._iTextInstances.forEach((function (t) {
                                    t.selected = !1, t.isEditing && t.exitEditing()
                                }))
                            },
                            initMouseMoveHandler: function () {
                                this.canvas.on("mouse:move", this.mouseMoveHandler)
                            },
                            mouseMoveHandler: function (t) {
                                if (this.__isMousedown && this.isEditing) {
                                    var e = this.getSelectionStartFromPointer(t.e),
                                        i = this.selectionStart,
                                        r = this.selectionEnd;
                                    (e === this.__selectionStartOnMouseDown && i !== r || i !== e && r !== e) && (e > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = e) : (this.selectionStart = e, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i && this.selectionEnd === r || (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()))
                                }
                            },
                            _setEditingProps: function () {
                                this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0
                            },
                            fromStringToGraphemeSelection: function (t, e, i) {
                                var r = i.slice(0, t),
                                    s = n.util.string.graphemeSplit(r).length;
                                if (t === e) return {
                                    selectionStart: s,
                                    selectionEnd: s
                                };
                                var o = i.slice(t, e);
                                return {
                                    selectionStart: s,
                                    selectionEnd: s + n.util.string.graphemeSplit(o).length
                                }
                            },
                            fromGraphemeToStringSelection: function (t, e, i) {
                                var r = i.slice(0, t).join("").length;
                                return t === e ? {
                                    selectionStart: r,
                                    selectionEnd: r
                                } : {
                                    selectionStart: r,
                                    selectionEnd: r + i.slice(t, e).join("").length
                                }
                            },
                            _updateTextarea: function () {
                                if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
                                    if (!this.inCompositionMode) {
                                        var t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
                                        this.hiddenTextarea.selectionStart = t.selectionStart, this.hiddenTextarea.selectionEnd = t.selectionEnd
                                    }
                                    this.updateTextareaPosition()
                                }
                            },
                            updateFromTextArea: function () {
                                if (this.hiddenTextarea) {
                                    this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
                                    var t = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
                                    this.selectionEnd = this.selectionStart = t.selectionEnd, this.inCompositionMode || (this.selectionStart = t.selectionStart), this.updateTextareaPosition()
                                }
                            },
                            updateTextareaPosition: function () {
                                if (this.selectionStart === this.selectionEnd) {
                                    var t = this._calcTextareaPosition();
                                    this.hiddenTextarea.style.left = t.left, this.hiddenTextarea.style.top = t.top
                                }
                            },
                            _calcTextareaPosition: function () {
                                if (!this.canvas) return {
                                    x: 1,
                                    y: 1
                                };
                                var t = this.inCompositionMode ? this.compositionStart : this.selectionStart,
                                    e = this._getCursorBoundaries(t),
                                    i = this.get2DCursorLocation(t),
                                    r = i.lineIndex,
                                    s = i.charIndex,
                                    o = this.getValueOfPropertyAt(r, s, "fontSize") * this.lineHeight,
                                    a = e.leftOffset,
                                    h = this.calcTransformMatrix(),
                                    c = {
                                        x: e.left + a,
                                        y: e.top + e.topOffset + o
                                    },
                                    l = this.canvas.getRetinaScaling(),
                                    u = this.canvas.upperCanvasEl,
                                    f = u.width / l,
                                    d = u.height / l,
                                    g = f - o,
                                    p = d - o,
                                    v = u.clientWidth / f,
                                    m = u.clientHeight / d;
                                return c = n.util.transformPoint(c, h), (c = n.util.transformPoint(c, this.canvas.viewportTransform)).x *= v, c.y *= m, c.x < 0 && (c.x = 0), c.x > g && (c.x = g), c.y < 0 && (c.y = 0), c.y > p && (c.y = p), c.x += this.canvas._offset.left, c.y += this.canvas._offset.top, {
                                    left: c.x + "px",
                                    top: c.y + "px",
                                    fontSize: o + "px",
                                    charHeight: o
                                }
                            },
                            _saveEditingProps: function () {
                                this._savedProps = {
                                    hasControls: this.hasControls,
                                    borderColor: this.borderColor,
                                    lockMovementX: this.lockMovementX,
                                    lockMovementY: this.lockMovementY,
                                    hoverCursor: this.hoverCursor,
                                    selectable: this.selectable,
                                    defaultCursor: this.canvas && this.canvas.defaultCursor,
                                    moveCursor: this.canvas && this.canvas.moveCursor
                                }
                            },
                            _restoreEditingProps: function () {
                                this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor))
                            },
                            exitEditing: function () {
                                var t = this._textBeforeEdit !== this.text,
                                    e = this.hiddenTextarea;
                                return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, e && (e.blur && e.blur(), e.parentNode && e.parentNode.removeChild(e)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), t && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", {
                                    target: this
                                }), t && this.canvas.fire("object:modified", {
                                    target: this
                                })), this
                            },
                            _removeExtraneousStyles: function () {
                                for (var t in this.styles) this._textLines[t] || delete this.styles[t]
                            },
                            removeStyleFromTo: function (t, e) {
                                var i, r, n = this.get2DCursorLocation(t, !0),
                                    s = this.get2DCursorLocation(e, !0),
                                    o = n.lineIndex,
                                    a = n.charIndex,
                                    h = s.lineIndex,
                                    c = s.charIndex;
                                if (o !== h) {
                                    if (this.styles[o])
                                        for (i = a; i < this._unwrappedTextLines[o].length; i++) delete this.styles[o][i];
                                    if (this.styles[h])
                                        for (i = c; i < this._unwrappedTextLines[h].length; i++)(r = this.styles[h][i]) && (this.styles[o] || (this.styles[o] = {}), this.styles[o][a + i - c] = r);
                                    for (i = o + 1; i <= h; i++) delete this.styles[i];
                                    this.shiftLineStyles(h, o - h)
                                } else if (this.styles[o]) {
                                    r = this.styles[o];
                                    var l, u, f = c - a;
                                    for (i = a; i < c; i++) delete r[i];
                                    for (u in this.styles[o])(l = parseInt(u, 10)) >= c && (r[l - f] = r[u], delete r[u])
                                }
                            },
                            shiftLineStyles: function (e, i) {
                                var r = t(this.styles);
                                for (var n in this.styles) {
                                    var s = parseInt(n, 10);
                                    s > e && (this.styles[s + i] = r[s], r[s - i] || delete this.styles[s])
                                }
                            },
                            restartCursorIfNeeded: function () {
                                this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor()
                            },
                            insertNewlineStyleObject: function (e, i, r, n) {
                                var s, o = {},
                                    a = !1,
                                    h = this._unwrappedTextLines[e].length === i;
                                for (var c in r || (r = 1), this.shiftLineStyles(e, r), this.styles[e] && (s = this.styles[e][0 === i ? i : i - 1]), this.styles[e]) {
                                    var l = parseInt(c, 10);
                                    l >= i && (a = !0, o[l - i] = this.styles[e][c], h && 0 === i || delete this.styles[e][c])
                                }
                                var u = !1;
                                for (a && !h && (this.styles[e + r] = o, u = !0), u && r--; r > 0;) n && n[r - 1] ? this.styles[e + r] = {
                                    0: t(n[r - 1])
                                } : s ? this.styles[e + r] = {
                                    0: t(s)
                                } : delete this.styles[e + r], r--;
                                this._forceClearCache = !0
                            },
                            insertCharStyleObject: function (e, i, r, n) {
                                this.styles || (this.styles = {});
                                var s = this.styles[e],
                                    o = s ? t(s) : {};
                                for (var a in r || (r = 1), o) {
                                    var h = parseInt(a, 10);
                                    h >= i && (s[h + r] = o[h], o[h - r] || delete s[h])
                                }
                                if (this._forceClearCache = !0, n)
                                    for (; r--;) Object.keys(n[r]).length && (this.styles[e] || (this.styles[e] = {}), this.styles[e][i + r] = t(n[r]));
                                else if (s)
                                    for (var c = s[i ? i - 1 : 1]; c && r--;) this.styles[e][i + r] = t(c)
                            },
                            insertNewStyleBlock: function (t, e, i) {
                                for (var r = this.get2DCursorLocation(e, !0), n = [0], s = 0, o = 0; o < t.length; o++) "\n" === t[o] ? n[++s] = 0 : n[s]++;
                                n[0] > 0 && (this.insertCharStyleObject(r.lineIndex, r.charIndex, n[0], i), i = i && i.slice(n[0] + 1)), s && this.insertNewlineStyleObject(r.lineIndex, r.charIndex + n[0], s);
                                for (o = 1; o < s; o++) n[o] > 0 ? this.insertCharStyleObject(r.lineIndex + o, 0, n[o], i) : i && (this.styles[r.lineIndex + o][0] = i[0]), i = i && i.slice(n[o] + 1);
                                n[o] > 0 && this.insertCharStyleObject(r.lineIndex + o, 0, n[o], i)
                            },
                            setSelectionStartEndWithShift: function (t, e, i) {
                                i <= t ? (e === t ? this._selectionDirection = "left" : "right" === this._selectionDirection && (this._selectionDirection = "left", this.selectionEnd = t), this.selectionStart = i) : i > t && i < e ? "right" === this._selectionDirection ? this.selectionEnd = i : this.selectionStart = i : (e === t ? this._selectionDirection = "right" : "left" === this._selectionDirection && (this._selectionDirection = "right", this.selectionStart = e), this.selectionEnd = i)
                            },
                            setSelectionInBoundaries: function () {
                                var t = this.text.length;
                                this.selectionStart > t ? this.selectionStart = t : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > t ? this.selectionEnd = t : this.selectionEnd < 0 && (this.selectionEnd = 0)
                            }
                        })
                    }(), n.util.object.extend(n.IText.prototype, {
                        initDoubleClickSimulation: function () {
                            this.__lastClickTime = +new Date, this.__lastLastClickTime = +new Date, this.__lastPointer = {}, this.on("mousedown", this.onMouseDown)
                        },
                        onMouseDown: function (t) {
                            if (this.canvas) {
                                this.__newClickTime = +new Date;
                                var e = t.pointer;
                                this.isTripleClick(e) && (this.fire("tripleclick", t), this._stopEvent(t.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = e, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected
                            }
                        },
                        isTripleClick: function (t) {
                            return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y
                        },
                        _stopEvent: function (t) {
                            t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation()
                        },
                        initCursorSelectionHandlers: function () {
                            this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks()
                        },
                        doubleClickHandler: function (t) {
                            this.isEditing && this.selectWord(this.getSelectionStartFromPointer(t.e))
                        },
                        tripleClickHandler: function (t) {
                            this.isEditing && this.selectLine(this.getSelectionStartFromPointer(t.e))
                        },
                        initClicks: function () {
                            this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler)
                        },
                        _mouseDownHandler: function (t) {
                            !this.canvas || !this.editable || t.e.button && 1 !== t.e.button || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(t.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()))
                        },
                        _mouseDownHandlerBefore: function (t) {
                            !this.canvas || !this.editable || t.e.button && 1 !== t.e.button || (this.selected = this === this.canvas._activeObject)
                        },
                        initMousedownHandler: function () {
                            this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore)
                        },
                        initMouseupHandler: function () {
                            this.on("mouseup", this.mouseUpHandler)
                        },
                        mouseUpHandler: function (t) {
                            if (this.__isMousedown = !1, !(!this.editable || this.group || t.transform && t.transform.actionPerformed || t.e.button && 1 !== t.e.button)) {
                                if (this.canvas) {
                                    var e = this.canvas._activeObject;
                                    if (e && e !== this) return
                                }
                                this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(t.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0
                            }
                        },
                        setCursorByClick: function (t) {
                            var e = this.getSelectionStartFromPointer(t),
                                i = this.selectionStart,
                                r = this.selectionEnd;
                            t.shiftKey ? this.setSelectionStartEndWithShift(i, r, e) : (this.selectionStart = e, this.selectionEnd = e), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea())
                        },
                        getSelectionStartFromPointer: function (t) {
                            for (var e = this.getLocalPointer(t), i = 0, r = 0, n = 0, s = 0, o = 0, a = 0, h = this._textLines.length; a < h && n <= e.y; a++) n += this.getHeightOfLine(a) * this.scaleY, o = a, a > 0 && (s += this._textLines[a - 1].length + this.missingNewlineOffset(a - 1));
                            r = this._getLineLeftOffset(o) * this.scaleX;
                            for (var c = 0, l = this._textLines[o].length; c < l && (i = r, (r += this.__charBounds[o][c].kernedWidth * this.scaleX) <= e.x); c++) s++;
                            return this._getNewSelectionStartFromOffset(e, i, r, s, l)
                        },
                        _getNewSelectionStartFromOffset: function (t, e, i, r, n) {
                            var s = t.x - e,
                                o = i - t.x,
                                a = r + (o > s || o < 0 ? 0 : 1);
                            return this.flipX && (a = n - a), a > this._text.length && (a = this._text.length), a
                        }
                    }), n.util.object.extend(n.IText.prototype, {
                        initHiddenTextarea: function () {
                            this.hiddenTextarea = n.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
                            var t = this._calcTextareaPosition();
                            this.hiddenTextarea.style.cssText = "position: absolute; top: " + t.top + "; left: " + t.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding\uff70top: " + t.fontSize + ";", n.document.body.appendChild(this.hiddenTextarea), n.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), n.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), n.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), n.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), n.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), n.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), n.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), n.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), n.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (n.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0)
                        },
                        keysMap: {
                            9: "exitEditing",
                            27: "exitEditing",
                            33: "moveCursorUp",
                            34: "moveCursorDown",
                            35: "moveCursorRight",
                            36: "moveCursorLeft",
                            37: "moveCursorLeft",
                            38: "moveCursorUp",
                            39: "moveCursorRight",
                            40: "moveCursorDown"
                        },
                        ctrlKeysMapUp: {
                            67: "copy",
                            88: "cut"
                        },
                        ctrlKeysMapDown: {
                            65: "selectAll"
                        },
                        onClick: function () {
                            this.hiddenTextarea && this.hiddenTextarea.focus()
                        },
                        onKeyDown: function (t) {
                            if (this.isEditing) {
                                if (t.keyCode in this.keysMap) this[this.keysMap[t.keyCode]](t);
                                else {
                                    if (!(t.keyCode in this.ctrlKeysMapDown) || !t.ctrlKey && !t.metaKey) return;
                                    this[this.ctrlKeysMapDown[t.keyCode]](t)
                                }
                                t.stopImmediatePropagation(), t.preventDefault(), t.keyCode >= 33 && t.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll()
                            }
                        },
                        onKeyUp: function (t) {
                            !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = !1 : t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t), t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.requestRenderAll())
                        },
                        onInput: function (t) {
                            var e = this.fromPaste;
                            if (this.fromPaste = !1, t && t.stopPropagation(), this.isEditing) {
                                var i, r, s, o, a, h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,
                                    c = this._text.length,
                                    l = h.length,
                                    u = l - c,
                                    f = this.selectionStart,
                                    d = this.selectionEnd,
                                    g = f !== d;
                                if ("" === this.hiddenTextarea.value) return this.styles = {}, this.updateFromTextArea(), this.fire("changed"), void(this.canvas && (this.canvas.fire("text:changed", {
                                    target: this
                                }), this.canvas.requestRenderAll()));
                                var p = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value),
                                    v = f > p.selectionStart;
                                g ? (i = this._text.slice(f, d), u += d - f) : l < c && (i = v ? this._text.slice(d + u, d) : this._text.slice(f, f - u)), r = h.slice(p.selectionEnd - u, p.selectionEnd), i && i.length && (r.length && (s = this.getSelectionStyles(f, f + 1, !1), s = r.map((function () {
                                    return s[0]
                                }))), g ? (o = f, a = d) : v ? (o = d - i.length, a = d) : (o = d, a = d + i.length), this.removeStyleFromTo(o, a)), r.length && (e && r.join("") === n.copiedText && !n.disableStyleCopyPaste && (s = n.copiedTextStyle), this.insertNewStyleBlock(r, f, s)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", {
                                    target: this
                                }), this.canvas.requestRenderAll())
                            }
                        },
                        onCompositionStart: function () {
                            this.inCompositionMode = !0
                        },
                        onCompositionEnd: function () {
                            this.inCompositionMode = !1
                        },
                        onCompositionUpdate: function (t) {
                            this.compositionStart = t.target.selectionStart, this.compositionEnd = t.target.selectionEnd, this.updateTextareaPosition()
                        },
                        copy: function () {
                            this.selectionStart !== this.selectionEnd && (n.copiedText = this.getSelectedText(), n.disableStyleCopyPaste ? n.copiedTextStyle = null : n.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0)
                        },
                        paste: function () {
                            this.fromPaste = !0
                        },
                        _getClipboardData: function (t) {
                            return t && t.clipboardData || n.window.clipboardData
                        },
                        _getWidthBeforeCursor: function (t, e) {
                            var i, r = this._getLineLeftOffset(t);
                            return e > 0 && (r += (i = this.__charBounds[t][e - 1]).left + i.width), r
                        },
                        getDownCursorOffset: function (t, e) {
                            var i = this._getSelectionForOffset(t, e),
                                r = this.get2DCursorLocation(i),
                                n = r.lineIndex;
                            if (n === this._textLines.length - 1 || t.metaKey || 34 === t.keyCode) return this._text.length - i;
                            var s = r.charIndex,
                                o = this._getWidthBeforeCursor(n, s),
                                a = this._getIndexOnLine(n + 1, o);
                            return this._textLines[n].slice(s).length + a + 1 + this.missingNewlineOffset(n)
                        },
                        _getSelectionForOffset: function (t, e) {
                            return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart
                        },
                        getUpCursorOffset: function (t, e) {
                            var i = this._getSelectionForOffset(t, e),
                                r = this.get2DCursorLocation(i),
                                n = r.lineIndex;
                            if (0 === n || t.metaKey || 33 === t.keyCode) return -i;
                            var s = r.charIndex,
                                o = this._getWidthBeforeCursor(n, s),
                                a = this._getIndexOnLine(n - 1, o),
                                h = this._textLines[n].slice(0, s),
                                c = this.missingNewlineOffset(n - 1);
                            return -this._textLines[n - 1].length + a - h.length + (1 - c)
                        },
                        _getIndexOnLine: function (t, e) {
                            for (var i, r, n = this._textLines[t], s = this._getLineLeftOffset(t), o = 0, a = 0, h = n.length; a < h; a++)
                                if ((s += i = this.__charBounds[t][a].width) > e) {
                                    r = !0;
                                    var c = s - i,
                                        l = s,
                                        u = Math.abs(c - e);
                                    o = Math.abs(l - e) < u ? a : a - 1;
                                    break
                                } return r || (o = n.length - 1), o
                        },
                        moveCursorDown: function (t) {
                            this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t)
                        },
                        moveCursorUp: function (t) {
                            0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t)
                        },
                        _moveCursorUpOrDown: function (t, e) {
                            var i = this["get" + t + "CursorOffset"](e, "right" === this._selectionDirection);
                            e.shiftKey ? this.moveCursorWithShift(i) : this.moveCursorWithoutShift(i), 0 !== i && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
                        },
                        moveCursorWithShift: function (t) {
                            var e = "left" === this._selectionDirection ? this.selectionStart + t : this.selectionEnd + t;
                            return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), 0 !== t
                        },
                        moveCursorWithoutShift: function (t) {
                            return t < 0 ? (this.selectionStart += t, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t, this.selectionStart = this.selectionEnd), 0 !== t
                        },
                        moveCursorLeft: function (t) {
                            0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t)
                        },
                        _move: function (t, e, i) {
                            var r;
                            if (t.altKey) r = this["findWordBoundary" + i](this[e]);
                            else {
                                if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode) return this[e] += "Left" === i ? -1 : 1, !0;
                                r = this["findLineBoundary" + i](this[e])
                            }
                            if (void 0 !== typeof r && this[e] !== r) return this[e] = r, !0
                        },
                        _moveLeft: function (t, e) {
                            return this._move(t, e, "Left")
                        },
                        _moveRight: function (t, e) {
                            return this._move(t, e, "Right")
                        },
                        moveCursorLeftWithoutShift: function (t) {
                            var e = !0;
                            return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e = this._moveLeft(t, "selectionStart")), this.selectionEnd = this.selectionStart, e
                        },
                        moveCursorLeftWithShift: function (t) {
                            return "right" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = "left", this._moveLeft(t, "selectionStart")) : void 0
                        },
                        moveCursorRight: function (t) {
                            this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t)
                        },
                        _moveCursorLeftOrRight: function (t, e) {
                            var i = "moveCursor" + t + "With";
                            this._currentCursorOpacity = 1, e.shiftKey ? i += "Shift" : i += "outShift", this[i](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
                        },
                        moveCursorRightWithShift: function (t) {
                            return "left" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = "right", this._moveRight(t, "selectionEnd")) : void 0
                        },
                        moveCursorRightWithoutShift: function (t) {
                            var e = !0;
                            return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e
                        },
                        removeChars: function (t, e) {
                            "undefined" === typeof e && (e = t + 1), this.removeStyleFromTo(t, e), this._text.splice(t, e - t), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles()
                        },
                        insertChars: function (t, e, i, r) {
                            "undefined" === typeof r && (r = i), r > i && this.removeStyleFromTo(i, r);
                            var s = n.util.string.graphemeSplit(t);
                            this.insertNewStyleBlock(s, i, e), this._text = [].concat(this._text.slice(0, i), s, this._text.slice(r)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles()
                        }
                    }),
                    function () {
                        var t = n.util.toFixed,
                            e = /  +/g;
                        n.util.object.extend(n.Text.prototype, {
                            _toSVG: function () {
                                var t = this._getSVGLeftTopOffsets(),
                                    e = this._getSVGTextAndBg(t.textTop, t.textLeft);
                                return this._wrapSVGTextAndBg(e)
                            },
                            toSVG: function (t) {
                                return this._createBaseSVGMarkup(this._toSVG(), {
                                    reviver: t,
                                    noStyle: !0,
                                    withShadow: !0
                                })
                            },
                            _getSVGLeftTopOffsets: function () {
                                return {
                                    textLeft: -this.width / 2,
                                    textTop: -this.height / 2,
                                    lineTop: this.getHeightOfLine(0)
                                }
                            },
                            _wrapSVGTextAndBg: function (t) {
                                var e = this.getSvgTextDecoration(this);
                                return [t.textBgRects.join(""), '\t\t<text xml:space="preserve" ', this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", e ? 'text-decoration="' + e + '" ' : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", t.textSpans.join(""), "</text>\n"]
                            },
                            _getSVGTextAndBg: function (t, e) {
                                var i, r = [],
                                    n = [],
                                    s = t;
                                this._setSVGBg(n);
                                for (var o = 0, a = this._textLines.length; o < a; o++) i = this._getLineLeftOffset(o), (this.textBackgroundColor || this.styleHas("textBackgroundColor", o)) && this._setSVGTextLineBg(n, o, e + i, s), this._setSVGTextLineText(r, o, e + i, s), s += this.getHeightOfLine(o);
                                return {
                                    textSpans: r,
                                    textBgRects: n
                                }
                            },
                            _createTextCharSpan: function (i, r, s, o) {
                                var a = i !== i.trim() || i.match(e),
                                    h = this.getSvgSpanStyles(r, a),
                                    c = h ? 'style="' + h + '"' : "",
                                    l = r.deltaY,
                                    u = "",
                                    f = n.Object.NUM_FRACTION_DIGITS;
                                return l && (u = ' dy="' + t(l, f) + '" '), ['<tspan x="', t(s, f), '" y="', t(o, f), '" ', u, c, ">", n.util.string.escapeXml(i), "</tspan>"].join("")
                            },
                            _setSVGTextLineText: function (t, e, i, r) {
                                var n, s, o, a, h, c = this.getHeightOfLine(e),
                                    l = -1 !== this.textAlign.indexOf("justify"),
                                    u = "",
                                    f = 0,
                                    d = this._textLines[e];
                                r += c * (1 - this._fontSizeFraction) / this.lineHeight;
                                for (var g = 0, p = d.length - 1; g <= p; g++) h = g === p || this.charSpacing, u += d[g], o = this.__charBounds[e][g], 0 === f ? (i += o.kernedWidth - o.width, f += o.width) : f += o.kernedWidth, l && !h && this._reSpaceAndTab.test(d[g]) && (h = !0), h || (n = n || this.getCompleteStyleDeclaration(e, g), s = this.getCompleteStyleDeclaration(e, g + 1), h = this._hasStyleChangedForSvg(n, s)), h && (a = this._getStyleDeclaration(e, g) || {}, t.push(this._createTextCharSpan(u, a, i, r)), u = "", n = s, i += f, f = 0)
                            },
                            _pushTextBgRect: function (e, i, r, s, o, a) {
                                var h = n.Object.NUM_FRACTION_DIGITS;
                                e.push("\t\t<rect ", this._getFillAttributes(i), ' x="', t(r, h), '" y="', t(s, h), '" width="', t(o, h), '" height="', t(a, h), '"></rect>\n')
                            },
                            _setSVGTextLineBg: function (t, e, i, r) {
                                for (var n, s, o = this._textLines[e], a = this.getHeightOfLine(e) / this.lineHeight, h = 0, c = 0, l = this.getValueOfPropertyAt(e, 0, "textBackgroundColor"), u = 0, f = o.length; u < f; u++) n = this.__charBounds[e][u], (s = this.getValueOfPropertyAt(e, u, "textBackgroundColor")) !== l ? (l && this._pushTextBgRect(t, l, i + c, r, h, a), c = n.left, h = n.width, l = s) : h += n.kernedWidth;
                                s && this._pushTextBgRect(t, s, i + c, r, h, a)
                            },
                            _getFillAttributes: function (t) {
                                var e = t && "string" === typeof t ? new n.Color(t) : "";
                                return e && e.getSource() && 1 !== e.getAlpha() ? 'opacity="' + e.getAlpha() + '" fill="' + e.setAlpha(1).toRgb() + '"' : 'fill="' + t + '"'
                            },
                            _getSVGLineTopOffset: function (t) {
                                for (var e, i = 0, r = 0; r < t; r++) i += this.getHeightOfLine(r);
                                return e = this.getHeightOfLine(r), {
                                    lineTop: i,
                                    offset: (this._fontSizeMult - this._fontSizeFraction) * e / (this.lineHeight * this._fontSizeMult)
                                }
                            },
                            getSvgStyles: function (t) {
                                return n.Object.prototype.getSvgStyles.call(this, t) + " white-space: pre;"
                            }
                        })
                    }(),
                    function (t) {
                        "use strict";
                        var e = t.fabric || (t.fabric = {});
                        e.Textbox = e.util.createClass(e.IText, e.Observable, {
                            type: "textbox",
                            minWidth: 20,
                            dynamicMinWidth: 2,
                            __cachedLines: null,
                            lockScalingFlip: !0,
                            noScaleCache: !1,
                            _dimensionAffectingProps: e.Text.prototype._dimensionAffectingProps.concat("width"),
                            _wordJoiners: /[ \t\r]/,
                            splitByGrapheme: !1,
                            initDimensions: function () {
                                this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), -1 !== this.textAlign.indexOf("justify") && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({
                                    propertySet: "_dimensionAffectingProps"
                                }))
                            },
                            _generateStyleMap: function (t) {
                                for (var e = 0, i = 0, r = 0, n = {}, s = 0; s < t.graphemeLines.length; s++) "\n" === t.graphemeText[r] && s > 0 ? (i = 0, r++, e++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t.graphemeText[r]) && s > 0 && (i++, r++), n[s] = {
                                    line: e,
                                    offset: i
                                }, r += t.graphemeLines[s].length, i += t.graphemeLines[s].length;
                                return n
                            },
                            styleHas: function (t, i) {
                                if (this._styleMap && !this.isWrapping) {
                                    var r = this._styleMap[i];
                                    r && (i = r.line)
                                }
                                return e.Text.prototype.styleHas.call(this, t, i)
                            },
                            isEmptyStyles: function (t) {
                                if (!this.styles) return !0;
                                var e, i, r = 0,
                                    n = !1,
                                    s = this._styleMap[t],
                                    o = this._styleMap[t + 1];
                                for (var a in s && (t = s.line, r = s.offset), o && (n = o.line === t, e = o.offset), i = "undefined" === typeof t ? this.styles : {
                                        line: this.styles[t]
                                    })
                                    for (var h in i[a])
                                        if (h >= r && (!n || h < e))
                                            for (var c in i[a][h]) return !1;
                                return !0
                            },
                            _getStyleDeclaration: function (t, e) {
                                if (this._styleMap && !this.isWrapping) {
                                    var i = this._styleMap[t];
                                    if (!i) return null;
                                    t = i.line, e = i.offset + e
                                }
                                return this.callSuper("_getStyleDeclaration", t, e)
                            },
                            _setStyleDeclaration: function (t, e, i) {
                                var r = this._styleMap[t];
                                t = r.line, e = r.offset + e, this.styles[t][e] = i
                            },
                            _deleteStyleDeclaration: function (t, e) {
                                var i = this._styleMap[t];
                                t = i.line, e = i.offset + e, delete this.styles[t][e]
                            },
                            _getLineStyle: function (t) {
                                var e = this._styleMap[t];
                                return !!this.styles[e.line]
                            },
                            _setLineStyle: function (t) {
                                var e = this._styleMap[t];
                                this.styles[e.line] = {}
                            },
                            _wrapText: function (t, e) {
                                var i, r = [];
                                for (this.isWrapping = !0, i = 0; i < t.length; i++) r = r.concat(this._wrapLine(t[i], i, e));
                                return this.isWrapping = !1, r
                            },
                            _measureWord: function (t, e, i) {
                                var r, n = 0;
                                i = i || 0;
                                for (var s = 0, o = t.length; s < o; s++) {
                                    n += this._getGraphemeBox(t[s], e, s + i, r, true).kernedWidth, r = t[s]
                                }
                                return n
                            },
                            _wrapLine: function (t, i, r, n) {
                                var s = 0,
                                    o = this.splitByGrapheme,
                                    a = [],
                                    h = [],
                                    c = o ? e.util.string.graphemeSplit(t) : t.split(this._wordJoiners),
                                    l = "",
                                    u = 0,
                                    f = o ? "" : " ",
                                    d = 0,
                                    g = 0,
                                    p = 0,
                                    v = !0,
                                    m = this._getWidthOfCharSpacing();
                                n = n || 0;
                                0 === c.length && c.push([]), r -= n;
                                for (var y = 0; y < c.length; y++) l = o ? c[y] : e.util.string.graphemeSplit(c[y]), d = this._measureWord(l, i, u), u += l.length, (s += g + d - m) > r && !v ? (a.push(h), h = [], s = d, v = !0) : s += m, v || o || h.push(f), h = h.concat(l), g = o ? 0 : this._measureWord([f], i, u), u++, v = !1, d > p && (p = d);
                                return y && a.push(h), p + n > this.dynamicMinWidth && (this.dynamicMinWidth = p - m + n), a
                            },
                            isEndOfWrapping: function (t) {
                                return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line
                            },
                            missingNewlineOffset: function (t) {
                                return this.splitByGrapheme ? this.isEndOfWrapping(t) ? 1 : 0 : 1
                            },
                            _splitTextIntoLines: function (t) {
                                for (var i = e.Text.prototype._splitTextIntoLines.call(this, t), r = this._wrapText(i.lines, this.width), n = new Array(r.length), s = 0; s < r.length; s++) n[s] = r[s].join("");
                                return i.lines = n, i.graphemeLines = r, i
                            },
                            getMinWidth: function () {
                                return Math.max(this.minWidth, this.dynamicMinWidth)
                            },
                            _removeExtraneousStyles: function () {
                                var t = {};
                                for (var e in this._styleMap) this._textLines[e] && (t[this._styleMap[e].line] = 1);
                                for (var e in this.styles) t[e] || delete this.styles[e]
                            },
                            toObject: function (t) {
                                return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(t))
                            }
                        }), e.Textbox.fromObject = function (t, i) {
                            return e.Object._fromObject("Textbox", t, i, "text")
                        }
                    }(e),
                    function () {
                        var t = n.controlsUtils,
                            e = t.scaleSkewCursorStyleHandler,
                            i = t.scaleCursorStyleHandler,
                            r = t.scalingEqually,
                            s = t.scalingYOrSkewingX,
                            o = t.scalingXOrSkewingY,
                            a = t.scaleOrSkewActionName,
                            h = n.Object.prototype.controls;
                        if (h.ml = new n.Control({
                                x: -.5,
                                y: 0,
                                cursorStyleHandler: e,
                                actionHandler: o,
                                getActionName: a
                            }), h.mr = new n.Control({
                                x: .5,
                                y: 0,
                                cursorStyleHandler: e,
                                actionHandler: o,
                                getActionName: a
                            }), h.mb = new n.Control({
                                x: 0,
                                y: .5,
                                cursorStyleHandler: e,
                                actionHandler: s,
                                getActionName: a
                            }), h.mt = new n.Control({
                                x: 0,
                                y: -.5,
                                cursorStyleHandler: e,
                                actionHandler: s,
                                getActionName: a
                            }), h.tl = new n.Control({
                                x: -.5,
                                y: -.5,
                                cursorStyleHandler: i,
                                actionHandler: r
                            }), h.tr = new n.Control({
                                x: .5,
                                y: -.5,
                                cursorStyleHandler: i,
                                actionHandler: r
                            }), h.bl = new n.Control({
                                x: -.5,
                                y: .5,
                                cursorStyleHandler: i,
                                actionHandler: r
                            }), h.br = new n.Control({
                                x: .5,
                                y: .5,
                                cursorStyleHandler: i,
                                actionHandler: r
                            }), h.mtr = new n.Control({
                                x: 0,
                                y: -.5,
                                actionHandler: t.rotationWithSnapping,
                                cursorStyleHandler: t.rotationStyleHandler,
                                offsetY: -40,
                                withConnection: !0,
                                actionName: "rotate"
                            }), n.Textbox) {
                            var c = n.Textbox.prototype.controls = {};
                            c.mtr = h.mtr, c.tr = h.tr, c.br = h.br, c.tl = h.tl, c.bl = h.bl, c.mt = h.mt, c.mb = h.mb, c.mr = new n.Control({
                                x: .5,
                                y: 0,
                                actionHandler: t.changeWidth,
                                cursorStyleHandler: e,
                                actionName: "resizing"
                            }), c.ml = new n.Control({
                                x: -.5,
                                y: 0,
                                actionHandler: t.changeWidth,
                                cursorStyleHandler: e,
                                actionName: "resizing"
                            })
                        }
                    }()
            }).call(this, i(862).Buffer)
        },
        862: function (t, e, i) {
            "use strict";
            (function (t) {
                var r = i(863),
                    n = i(864),
                    s = i(865);

                function o() {
                    return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function a(t, e) {
                    if (o() < e) throw new RangeError("Invalid typed array length");
                    return h.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = h.prototype : (null === t && (t = new h(e)), t.length = e), t
                }

                function h(t, e, i) {
                    if (!h.TYPED_ARRAY_SUPPORT && !(this instanceof h)) return new h(t, e, i);
                    if ("number" === typeof t) {
                        if ("string" === typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return u(this, t)
                    }
                    return c(this, t, e, i)
                }

                function c(t, e, i, r) {
                    if ("number" === typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, i, r) {
                        if (e.byteLength, i < 0 || e.byteLength < i) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < i + (r || 0)) throw new RangeError("'length' is out of bounds");
                        e = void 0 === i && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, i) : new Uint8Array(e, i, r);
                        h.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = h.prototype : t = f(t, e);
                        return t
                    }(t, e, i, r) : "string" === typeof e ? function (t, e, i) {
                        "string" === typeof i && "" !== i || (i = "utf8");
                        if (!h.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | g(e, i),
                            n = (t = a(t, r)).write(e, i);
                        n !== r && (t = t.slice(0, n));
                        return t
                    }(t, e, i) : function (t, e) {
                        if (h.isBuffer(e)) {
                            var i = 0 | d(e.length);
                            return 0 === (t = a(t, i)).length || e.copy(t, 0, 0, i), t
                        }
                        if (e) {
                            if ("undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" !== typeof e.length || (r = e.length) !== r ? a(t, 0) : f(t, e);
                            if ("Buffer" === e.type && s(e.data)) return f(t, e.data)
                        }
                        var r;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function l(t) {
                    if ("number" !== typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function u(t, e) {
                    if (l(e), t = a(t, e < 0 ? 0 : 0 | d(e)), !h.TYPED_ARRAY_SUPPORT)
                        for (var i = 0; i < e; ++i) t[i] = 0;
                    return t
                }

                function f(t, e) {
                    var i = e.length < 0 ? 0 : 0 | d(e.length);
                    t = a(t, i);
                    for (var r = 0; r < i; r += 1) t[r] = 255 & e[r];
                    return t
                }

                function d(t) {
                    if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                    return 0 | t
                }

                function g(t, e) {
                    if (h.isBuffer(t)) return t.length;
                    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" !== typeof t && (t = "" + t);
                    var i = t.length;
                    if (0 === i) return 0;
                    for (var r = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return i;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return U(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * i;
                        case "hex":
                            return i >>> 1;
                        case "base64":
                            return W(t).length;
                        default:
                            if (r) return U(t).length;
                            e = ("" + e).toLowerCase(), r = !0
                    }
                }

                function p(t, e, i) {
                    var r = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
                    if ((i >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return A(this, e, i);
                        case "utf8":
                        case "utf-8":
                            return O(this, e, i);
                        case "ascii":
                            return E(this, e, i);
                        case "latin1":
                        case "binary":
                            return P(this, e, i);
                        case "base64":
                            return T(this, e, i);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return j(this, e, i);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), r = !0
                    }
                }

                function v(t, e, i) {
                    var r = t[e];
                    t[e] = t[i], t[i] = r
                }

                function m(t, e, i, r, n) {
                    if (0 === t.length) return -1;
                    if ("string" === typeof i ? (r = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = n ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
                        if (n) return -1;
                        i = t.length - 1
                    } else if (i < 0) {
                        if (!n) return -1;
                        i = 0
                    }
                    if ("string" === typeof e && (e = h.from(e, r)), h.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, i, r, n);
                    if ("number" === typeof e) return e &= 255, h.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : y(t, [e], i, r, n);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function y(t, e, i, r, n) {
                    var s, o = 1,
                        a = t.length,
                        h = e.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        o = 2, a /= 2, h /= 2, i /= 2
                    }

                    function c(t, e) {
                        return 1 === o ? t[e] : t.readUInt16BE(e * o)
                    }
                    if (n) {
                        var l = -1;
                        for (s = i; s < a; s++)
                            if (c(t, s) === c(e, -1 === l ? 0 : s - l)) {
                                if (-1 === l && (l = s), s - l + 1 === h) return l * o
                            } else -1 !== l && (s -= s - l), l = -1
                    } else
                        for (i + h > a && (i = a - h), s = i; s >= 0; s--) {
                            for (var u = !0, f = 0; f < h; f++)
                                if (c(t, s + f) !== c(e, f)) {
                                    u = !1;
                                    break
                                } if (u) return s
                        }
                    return -1
                }

                function _(t, e, i, r) {
                    i = Number(i) || 0;
                    var n = t.length - i;
                    r ? (r = Number(r)) > n && (r = n) : r = n;
                    var s = e.length;
                    if (s % 2 !== 0) throw new TypeError("Invalid hex string");
                    r > s / 2 && (r = s / 2);
                    for (var o = 0; o < r; ++o) {
                        var a = parseInt(e.substr(2 * o, 2), 16);
                        if (isNaN(a)) return o;
                        t[i + o] = a
                    }
                    return o
                }

                function b(t, e, i, r) {
                    return z(U(e, t.length - i), t, i, r)
                }

                function x(t, e, i, r) {
                    return z(function (t) {
                        for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
                        return e
                    }(e), t, i, r)
                }

                function C(t, e, i, r) {
                    return x(t, e, i, r)
                }

                function S(t, e, i, r) {
                    return z(W(e), t, i, r)
                }

                function w(t, e, i, r) {
                    return z(function (t, e) {
                        for (var i, r, n, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) r = (i = t.charCodeAt(o)) >> 8, n = i % 256, s.push(n), s.push(r);
                        return s
                    }(e, t.length - i), t, i, r)
                }

                function T(t, e, i) {
                    return 0 === e && i === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, i))
                }

                function O(t, e, i) {
                    i = Math.min(t.length, i);
                    for (var r = [], n = e; n < i;) {
                        var s, o, a, h, c = t[n],
                            l = null,
                            u = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (n + u <= i) switch (u) {
                            case 1:
                                c < 128 && (l = c);
                                break;
                            case 2:
                                128 === (192 & (s = t[n + 1])) && (h = (31 & c) << 6 | 63 & s) > 127 && (l = h);
                                break;
                            case 3:
                                s = t[n + 1], o = t[n + 2], 128 === (192 & s) && 128 === (192 & o) && (h = (15 & c) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (h < 55296 || h > 57343) && (l = h);
                                break;
                            case 4:
                                s = t[n + 1], o = t[n + 2], a = t[n + 3], 128 === (192 & s) && 128 === (192 & o) && 128 === (192 & a) && (h = (15 & c) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && h < 1114112 && (l = h)
                        }
                        null === l ? (l = 65533, u = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), n += u
                    }
                    return function (t) {
                        var e = t.length;
                        if (e <= k) return String.fromCharCode.apply(String, t);
                        var i = "",
                            r = 0;
                        for (; r < e;) i += String.fromCharCode.apply(String, t.slice(r, r += k));
                        return i
                    }(r)
                }
                e.Buffer = h, e.SlowBuffer = function (t) {
                    +t != t && (t = 0);
                    return h.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, h.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                                return 42
                            }
                        }, 42 === t.foo() && "function" === typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (e) {
                        return !1
                    }
                }(), e.kMaxLength = o(), h.poolSize = 8192, h._augment = function (t) {
                    return t.__proto__ = h.prototype, t
                }, h.from = function (t, e, i) {
                    return c(null, t, e, i)
                }, h.TYPED_ARRAY_SUPPORT && (h.prototype.__proto__ = Uint8Array.prototype, h.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
                    value: null,
                    configurable: !0
                })), h.alloc = function (t, e, i) {
                    return function (t, e, i, r) {
                        return l(e), e <= 0 ? a(t, e) : void 0 !== i ? "string" === typeof r ? a(t, e).fill(i, r) : a(t, e).fill(i) : a(t, e)
                    }(null, t, e, i)
                }, h.allocUnsafe = function (t) {
                    return u(null, t)
                }, h.allocUnsafeSlow = function (t) {
                    return u(null, t)
                }, h.isBuffer = function (t) {
                    return !(null == t || !t._isBuffer)
                }, h.compare = function (t, e) {
                    if (!h.isBuffer(t) || !h.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var i = t.length, r = e.length, n = 0, s = Math.min(i, r); n < s; ++n)
                        if (t[n] !== e[n]) {
                            i = t[n], r = e[n];
                            break
                        } return i < r ? -1 : r < i ? 1 : 0
                }, h.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, h.concat = function (t, e) {
                    if (!s(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return h.alloc(0);
                    var i;
                    if (void 0 === e)
                        for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
                    var r = h.allocUnsafe(e),
                        n = 0;
                    for (i = 0; i < t.length; ++i) {
                        var o = t[i];
                        if (!h.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(r, n), n += o.length
                    }
                    return r
                }, h.byteLength = g, h.prototype._isBuffer = !0, h.prototype.swap16 = function () {
                    var t = this.length;
                    if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) v(this, e, e + 1);
                    return this
                }, h.prototype.swap32 = function () {
                    var t = this.length;
                    if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
                    return this
                }, h.prototype.swap64 = function () {
                    var t = this.length;
                    if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
                    return this
                }, h.prototype.toString = function () {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : p.apply(this, arguments)
                }, h.prototype.equals = function (t) {
                    if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === h.compare(this, t)
                }, h.prototype.inspect = function () {
                    var t = "",
                        i = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (t += " ... ")), "<Buffer " + t + ">"
                }, h.prototype.compare = function (t, e, i, r, n) {
                    if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === r && (r = 0), void 0 === n && (n = this.length), e < 0 || i > t.length || r < 0 || n > this.length) throw new RangeError("out of range index");
                    if (r >= n && e >= i) return 0;
                    if (r >= n) return -1;
                    if (e >= i) return 1;
                    if (this === t) return 0;
                    for (var s = (n >>>= 0) - (r >>>= 0), o = (i >>>= 0) - (e >>>= 0), a = Math.min(s, o), c = this.slice(r, n), l = t.slice(e, i), u = 0; u < a; ++u)
                        if (c[u] !== l[u]) {
                            s = c[u], o = l[u];
                            break
                        } return s < o ? -1 : o < s ? 1 : 0
                }, h.prototype.includes = function (t, e, i) {
                    return -1 !== this.indexOf(t, e, i)
                }, h.prototype.indexOf = function (t, e, i) {
                    return m(this, t, e, i, !0)
                }, h.prototype.lastIndexOf = function (t, e, i) {
                    return m(this, t, e, i, !1)
                }, h.prototype.write = function (t, e, i, r) {
                    if (void 0 === e) r = "utf8", i = this.length, e = 0;
                    else if (void 0 === i && "string" === typeof e) r = e, i = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(i) ? (i |= 0, void 0 === r && (r = "utf8")) : (r = i, i = void 0)
                    }
                    var n = this.length - e;
                    if ((void 0 === i || i > n) && (i = n), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var s = !1;;) switch (r) {
                        case "hex":
                            return _(this, t, e, i);
                        case "utf8":
                        case "utf-8":
                            return b(this, t, e, i);
                        case "ascii":
                            return x(this, t, e, i);
                        case "latin1":
                        case "binary":
                            return C(this, t, e, i);
                        case "base64":
                            return S(this, t, e, i);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return w(this, t, e, i);
                        default:
                            if (s) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), s = !0
                    }
                }, h.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var k = 4096;

                function E(t, e, i) {
                    var r = "";
                    i = Math.min(t.length, i);
                    for (var n = e; n < i; ++n) r += String.fromCharCode(127 & t[n]);
                    return r
                }

                function P(t, e, i) {
                    var r = "";
                    i = Math.min(t.length, i);
                    for (var n = e; n < i; ++n) r += String.fromCharCode(t[n]);
                    return r
                }

                function A(t, e, i) {
                    var r = t.length;
                    (!e || e < 0) && (e = 0), (!i || i < 0 || i > r) && (i = r);
                    for (var n = "", s = e; s < i; ++s) n += X(t[s]);
                    return n
                }

                function j(t, e, i) {
                    for (var r = t.slice(e, i), n = "", s = 0; s < r.length; s += 2) n += String.fromCharCode(r[s] + 256 * r[s + 1]);
                    return n
                }

                function D(t, e, i) {
                    if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > i) throw new RangeError("Trying to access beyond buffer length")
                }

                function M(t, e, i, r, n, s) {
                    if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > n || e < s) throw new RangeError('"value" argument is out of bounds');
                    if (i + r > t.length) throw new RangeError("Index out of range")
                }

                function F(t, e, i, r) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var n = 0, s = Math.min(t.length - i, 2); n < s; ++n) t[i + n] = (e & 255 << 8 * (r ? n : 1 - n)) >>> 8 * (r ? n : 1 - n)
                }

                function L(t, e, i, r) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var n = 0, s = Math.min(t.length - i, 4); n < s; ++n) t[i + n] = e >>> 8 * (r ? n : 3 - n) & 255
                }

                function I(t, e, i, r, n, s) {
                    if (i + r > t.length) throw new RangeError("Index out of range");
                    if (i < 0) throw new RangeError("Index out of range")
                }

                function R(t, e, i, r, s) {
                    return s || I(t, 0, i, 4), n.write(t, e, i, r, 23, 4), i + 4
                }

                function B(t, e, i, r, s) {
                    return s || I(t, 0, i, 8), n.write(t, e, i, r, 52, 8), i + 8
                }
                h.prototype.slice = function (t, e) {
                    var i, r = this.length;
                    if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), h.TYPED_ARRAY_SUPPORT)(i = this.subarray(t, e)).__proto__ = h.prototype;
                    else {
                        var n = e - t;
                        i = new h(n, void 0);
                        for (var s = 0; s < n; ++s) i[s] = this[s + t]
                    }
                    return i
                }, h.prototype.readUIntLE = function (t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var r = this[t], n = 1, s = 0; ++s < e && (n *= 256);) r += this[t + s] * n;
                    return r
                }, h.prototype.readUIntBE = function (t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var r = this[t + --e], n = 1; e > 0 && (n *= 256);) r += this[t + --e] * n;
                    return r
                }, h.prototype.readUInt8 = function (t, e) {
                    return e || D(t, 1, this.length), this[t]
                }, h.prototype.readUInt16LE = function (t, e) {
                    return e || D(t, 2, this.length), this[t] | this[t + 1] << 8
                }, h.prototype.readUInt16BE = function (t, e) {
                    return e || D(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, h.prototype.readUInt32LE = function (t, e) {
                    return e || D(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, h.prototype.readUInt32BE = function (t, e) {
                    return e || D(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, h.prototype.readIntLE = function (t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var r = this[t], n = 1, s = 0; ++s < e && (n *= 256);) r += this[t + s] * n;
                    return r >= (n *= 128) && (r -= Math.pow(2, 8 * e)), r
                }, h.prototype.readIntBE = function (t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var r = e, n = 1, s = this[t + --r]; r > 0 && (n *= 256);) s += this[t + --r] * n;
                    return s >= (n *= 128) && (s -= Math.pow(2, 8 * e)), s
                }, h.prototype.readInt8 = function (t, e) {
                    return e || D(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, h.prototype.readInt16LE = function (t, e) {
                    e || D(t, 2, this.length);
                    var i = this[t] | this[t + 1] << 8;
                    return 32768 & i ? 4294901760 | i : i
                }, h.prototype.readInt16BE = function (t, e) {
                    e || D(t, 2, this.length);
                    var i = this[t + 1] | this[t] << 8;
                    return 32768 & i ? 4294901760 | i : i
                }, h.prototype.readInt32LE = function (t, e) {
                    return e || D(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, h.prototype.readInt32BE = function (t, e) {
                    return e || D(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, h.prototype.readFloatLE = function (t, e) {
                    return e || D(t, 4, this.length), n.read(this, t, !0, 23, 4)
                }, h.prototype.readFloatBE = function (t, e) {
                    return e || D(t, 4, this.length), n.read(this, t, !1, 23, 4)
                }, h.prototype.readDoubleLE = function (t, e) {
                    return e || D(t, 8, this.length), n.read(this, t, !0, 52, 8)
                }, h.prototype.readDoubleBE = function (t, e) {
                    return e || D(t, 8, this.length), n.read(this, t, !1, 52, 8)
                }, h.prototype.writeUIntLE = function (t, e, i, r) {
                    (t = +t, e |= 0, i |= 0, r) || M(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                    var n = 1,
                        s = 0;
                    for (this[e] = 255 & t; ++s < i && (n *= 256);) this[e + s] = t / n & 255;
                    return e + i
                }, h.prototype.writeUIntBE = function (t, e, i, r) {
                    (t = +t, e |= 0, i |= 0, r) || M(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                    var n = i - 1,
                        s = 1;
                    for (this[e + n] = 255 & t; --n >= 0 && (s *= 256);) this[e + n] = t / s & 255;
                    return e + i
                }, h.prototype.writeUInt8 = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 1, 255, 0), h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, h.prototype.writeUInt16LE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : F(this, t, e, !0), e + 2
                }, h.prototype.writeUInt16BE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : F(this, t, e, !1), e + 2
                }, h.prototype.writeUInt32LE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4
                }, h.prototype.writeUInt32BE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4
                }, h.prototype.writeIntLE = function (t, e, i, r) {
                    if (t = +t, e |= 0, !r) {
                        var n = Math.pow(2, 8 * i - 1);
                        M(this, t, e, i, n - 1, -n)
                    }
                    var s = 0,
                        o = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++s < i && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
                    return e + i
                }, h.prototype.writeIntBE = function (t, e, i, r) {
                    if (t = +t, e |= 0, !r) {
                        var n = Math.pow(2, 8 * i - 1);
                        M(this, t, e, i, n - 1, -n)
                    }
                    var s = i - 1,
                        o = 1,
                        a = 0;
                    for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
                    return e + i
                }, h.prototype.writeInt8 = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 1, 127, -128), h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, h.prototype.writeInt16LE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : F(this, t, e, !0), e + 2
                }, h.prototype.writeInt16BE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : F(this, t, e, !1), e + 2
                }, h.prototype.writeInt32LE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 4, 2147483647, -2147483648), h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4
                }, h.prototype.writeInt32BE = function (t, e, i) {
                    return t = +t, e |= 0, i || M(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4
                }, h.prototype.writeFloatLE = function (t, e, i) {
                    return R(this, t, e, !0, i)
                }, h.prototype.writeFloatBE = function (t, e, i) {
                    return R(this, t, e, !1, i)
                }, h.prototype.writeDoubleLE = function (t, e, i) {
                    return B(this, t, e, !0, i)
                }, h.prototype.writeDoubleBE = function (t, e, i) {
                    return B(this, t, e, !1, i)
                }, h.prototype.copy = function (t, e, i, r) {
                    if (i || (i = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < i && (r = i), r === i) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), t.length - e < r - i && (r = t.length - e + i);
                    var n, s = r - i;
                    if (this === t && i < e && e < r)
                        for (n = s - 1; n >= 0; --n) t[n + e] = this[n + i];
                    else if (s < 1e3 || !h.TYPED_ARRAY_SUPPORT)
                        for (n = 0; n < s; ++n) t[n + e] = this[n + i];
                    else Uint8Array.prototype.set.call(t, this.subarray(i, i + s), e);
                    return s
                }, h.prototype.fill = function (t, e, i, r) {
                    if ("string" === typeof t) {
                        if ("string" === typeof e ? (r = e, e = 0, i = this.length) : "string" === typeof i && (r = i, i = this.length), 1 === t.length) {
                            var n = t.charCodeAt(0);
                            n < 256 && (t = n)
                        }
                        if (void 0 !== r && "string" !== typeof r) throw new TypeError("encoding must be a string");
                        if ("string" === typeof r && !h.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                    } else "number" === typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
                    if (i <= e) return this;
                    var s;
                    if (e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0), "number" === typeof t)
                        for (s = e; s < i; ++s) this[s] = t;
                    else {
                        var o = h.isBuffer(t) ? t : U(new h(t, r).toString()),
                            a = o.length;
                        for (s = 0; s < i - e; ++s) this[s + e] = o[s % a]
                    }
                    return this
                };
                var Y = /[^+\/0-9A-Za-z-_]/g;

                function X(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function U(t, e) {
                    var i;
                    e = e || 1 / 0;
                    for (var r = t.length, n = null, s = [], o = 0; o < r; ++o) {
                        if ((i = t.charCodeAt(o)) > 55295 && i < 57344) {
                            if (!n) {
                                if (i > 56319) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                if (o + 1 === r) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                n = i;
                                continue
                            }
                            if (i < 56320) {
                                (e -= 3) > -1 && s.push(239, 191, 189), n = i;
                                continue
                            }
                            i = 65536 + (n - 55296 << 10 | i - 56320)
                        } else n && (e -= 3) > -1 && s.push(239, 191, 189);
                        if (n = null, i < 128) {
                            if ((e -= 1) < 0) break;
                            s.push(i)
                        } else if (i < 2048) {
                            if ((e -= 2) < 0) break;
                            s.push(i >> 6 | 192, 63 & i | 128)
                        } else if (i < 65536) {
                            if ((e -= 3) < 0) break;
                            s.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                        } else {
                            if (!(i < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            s.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                        }
                    }
                    return s
                }

                function W(t) {
                    return r.toByteArray(function (t) {
                        if ((t = function (t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                            }(t).replace(Y, "")).length < 2) return "";
                        for (; t.length % 4 !== 0;) t += "=";
                        return t
                    }(t))
                }

                function z(t, e, i, r) {
                    for (var n = 0; n < r && !(n + i >= e.length || n >= t.length); ++n) e[n + i] = t[n];
                    return n
                }
            }).call(this, i(243))
        },
        863: function (t, e, i) {
            "use strict";
            e.byteLength = function (t) {
                var e = c(t),
                    i = e[0],
                    r = e[1];
                return 3 * (i + r) / 4 - r
            }, e.toByteArray = function (t) {
                var e, i, r = c(t),
                    o = r[0],
                    a = r[1],
                    h = new s(function (t, e, i) {
                        return 3 * (e + i) / 4 - i
                    }(0, o, a)),
                    l = 0,
                    u = a > 0 ? o - 4 : o;
                for (i = 0; i < u; i += 4) e = n[t.charCodeAt(i)] << 18 | n[t.charCodeAt(i + 1)] << 12 | n[t.charCodeAt(i + 2)] << 6 | n[t.charCodeAt(i + 3)], h[l++] = e >> 16 & 255, h[l++] = e >> 8 & 255, h[l++] = 255 & e;
                2 === a && (e = n[t.charCodeAt(i)] << 2 | n[t.charCodeAt(i + 1)] >> 4, h[l++] = 255 & e);
                1 === a && (e = n[t.charCodeAt(i)] << 10 | n[t.charCodeAt(i + 1)] << 4 | n[t.charCodeAt(i + 2)] >> 2, h[l++] = e >> 8 & 255, h[l++] = 255 & e);
                return h
            }, e.fromByteArray = function (t) {
                for (var e, i = t.length, n = i % 3, s = [], o = 16383, a = 0, h = i - n; a < h; a += o) s.push(l(t, a, a + o > h ? h : a + o));
                1 === n ? (e = t[i - 1], s.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === n && (e = (t[i - 2] << 8) + t[i - 1], s.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
                return s.join("")
            };
            for (var r = [], n = [], s = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, h = o.length; a < h; ++a) r[a] = o[a], n[o.charCodeAt(a)] = a;

            function c(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var i = t.indexOf("=");
                return -1 === i && (i = e), [i, i === e ? 0 : 4 - i % 4]
            }

            function l(t, e, i) {
                for (var n, s, o = [], a = e; a < i; a += 3) n = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), o.push(r[(s = n) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
                return o.join("")
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        864: function (t, e) {
            e.read = function (t, e, i, r, n) {
                var s, o, a = 8 * n - r - 1,
                    h = (1 << a) - 1,
                    c = h >> 1,
                    l = -7,
                    u = i ? n - 1 : 0,
                    f = i ? -1 : 1,
                    d = t[e + u];
                for (u += f, s = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; s = 256 * s + t[e + u], u += f, l -= 8);
                for (o = s & (1 << -l) - 1, s >>= -l, l += r; l > 0; o = 256 * o + t[e + u], u += f, l -= 8);
                if (0 === s) s = 1 - c;
                else {
                    if (s === h) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                    o += Math.pow(2, r), s -= c
                }
                return (d ? -1 : 1) * o * Math.pow(2, s - r)
            }, e.write = function (t, e, i, r, n, s) {
                var o, a, h, c = 8 * s - n - 1,
                    l = (1 << c) - 1,
                    u = l >> 1,
                    f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = r ? 0 : s - 1,
                    g = r ? 1 : -1,
                    p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -o)) < 1 && (o--, h *= 2), (e += o + u >= 1 ? f / h : f * Math.pow(2, 1 - u)) * h >= 2 && (o++, h /= 2), o + u >= l ? (a = 0, o = l) : o + u >= 1 ? (a = (e * h - 1) * Math.pow(2, n), o += u) : (a = e * Math.pow(2, u - 1) * Math.pow(2, n), o = 0)); n >= 8; t[i + d] = 255 & a, d += g, a /= 256, n -= 8);
                for (o = o << n | a, c += n; c > 0; t[i + d] = 255 & o, d += g, o /= 256, c -= 8);
                t[i + d - g] |= 128 * p
            }
        },
        865: function (t, e) {
            var i = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == i.call(t)
            }
        },
        876: function (t, e, i) {
            "use strict";
            i.d(e, "a", (function () {
                return A
            })), i.d(e, "b", (function () {
                return w
            }));
            var r = i(116),
                n = i(50),
                s = i(11),
                o = i(19),
                a = i(18),
                h = i(0),
                c = i.n(h),
                l = i(16),
                u = function () {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        Object(s.a)(this, t), this.undoLimit = e, this.undoList = [], this.redoList = [], this.current = null, this.debug = i
                    }
                    return Object(l.a)(t, [{
                        key: "getUndoLimit",
                        value: function () {
                            return this.undoLimit
                        }
                    }, {
                        key: "getCurrent",
                        value: function () {
                            return this.current
                        }
                    }, {
                        key: "keep",
                        value: function (t) {
                            try {
                                this.redoList = [], this.current && this.undoList.push(this.current), this.undoList.length > this.undoLimit && this.undoList.shift(), this.current = t
                            } finally {
                                this.print()
                            }
                        }
                    }, {
                        key: "undo",
                        value: function () {
                            try {
                                return this.current && (this.redoList.push(this.current), this.redoList.length > this.undoLimit && this.redoList.shift(), 0 === this.undoList.length && (this.current = null)), this.undoList.length > 0 ? (this.current = this.undoList.pop(), this.current) : null
                            } finally {
                                this.print()
                            }
                        }
                    }, {
                        key: "redo",
                        value: function () {
                            try {
                                return this.redoList.length > 0 ? (this.current && this.undoList.push(this.current), this.current = this.redoList.pop(), this.current) : null
                            } finally {
                                this.print()
                            }
                        }
                    }, {
                        key: "canRedo",
                        value: function () {
                            return this.redoList.length > 0
                        }
                    }, {
                        key: "canUndo",
                        value: function () {
                            return this.undoList.length > 0 || null !== this.current
                        }
                    }, {
                        key: "clear",
                        value: function () {
                            this.undoList = [], this.redoList = [], this.current = null, this.print()
                        }
                    }, {
                        key: "print",
                        value: function () {
                            this.debug && console.log(this.undoList, " -> " + this.current + " <- ", this.redoList.slice(0).reverse())
                        }
                    }]), t
                }(),
                f = function (t, e) {
                    var i = e.x - t.x,
                        r = e.y - t.y;
                    return Math.sqrt(i * i + r * r)
                },
                d = function () {
                    var t, e = "";
                    for (t = 0; t < 32; t += 1) switch (t) {
                        case 8:
                        case 20:
                            e += "-", e += (16 * Math.random() | 0).toString(16);
                            break;
                        case 12:
                            e += "-", e += "4";
                            break;
                        case 16:
                            e += "-", e += (4 * Math.random() | 8).toString(16);
                            break;
                        default:
                            e += (16 * Math.random() | 0).toString(16)
                    }
                    return e
                },
                g = function (t) {
                    var e;
                    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)) return 3 == (e = t.substring(1).split("")).length && (e = [e[0], e[0], e[1], e[1], e[2], e[2]]), "rgba(" + [(e = "0x" + e.join("")) >> 16 & 255, e >> 8 & 255, 255 & e].join(",") + ",0.4)";
                    throw new Error("Bad Hex")
                },
                p = function () {
                    function t(e) {
                        Object(s.a)(this, t), this._canvas = e
                    }
                    return Object(l.a)(t, [{
                        key: "configureCanvas",
                        value: function (t) {}
                    }, {
                        key: "doMouseUp",
                        value: function (t) {}
                    }, {
                        key: "doMouseDown",
                        value: function (t) {}
                    }, {
                        key: "doMouseMove",
                        value: function (t) {}
                    }, {
                        key: "doMouseOut",
                        value: function (t) {}
                    }]), t
                }(),
                v = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = !1, e.selection = !0, e.forEachObject((function (t) {
                                t.selectable = t.evented = !0
                            }))
                        }
                    }]), i
                }(p),
                m = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            this._canvas.isDrawingMode = !0, this._canvas.freeDrawingBrush.width = t.lineWidth, this._canvas.freeDrawingBrush.color = t.lineColor
                        }
                    }]), i
                }(p),
                y = i(839),
                _ = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = e.selection = !1, e.forEachObject((function (t) {
                                return t.selectable = t.evented = !1
                            })), this._width = t.lineWidth, this._color = t.lineColor
                        }
                    }, {
                        key: "doMouseDown",
                        value: function (t) {
                            this.isDown = !0;
                            var e = this._canvas,
                                i = e.getPointer(t.e),
                                r = [i.x, i.y, i.x, i.y];
                            this.line = new y.fabric.Line(r, {
                                strokeWidth: this._width,
                                fill: this._color,
                                stroke: this._color,
                                originX: "center",
                                originY: "center",
                                selectable: !1,
                                evented: !1
                            }), e.add(this.line)
                        }
                    }, {
                        key: "doMouseMove",
                        value: function (t) {
                            if (this.isDown) {
                                var e = this._canvas,
                                    i = e.getPointer(t.e);
                                this.line.set({
                                    x2: i.x,
                                    y2: i.y
                                }), this.line.setCoords(), e.renderAll()
                            }
                        }
                    }, {
                        key: "doMouseUp",
                        value: function (t) {
                            this.isDown = !1
                        }
                    }, {
                        key: "doMouseOut",
                        value: function (t) {
                            this.isDown = !1
                        }
                    }]), i
                }(p),
                b = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = e.selection = !1, e.forEachObject((function (t) {
                                return t.selectable = t.evented = !1
                            })), this._width = t.lineWidth, this._color = t.lineColor
                        }
                    }, {
                        key: "doMouseDown",
                        value: function (t) {
                            this.isDown = !0;
                            var e = this._canvas,
                                i = e.getPointer(t.e),
                                r = [i.x, i.y, i.x, i.y];
                            this.line = new y.fabric.Line(r, {
                                strokeWidth: this._width,
                                fill: this._color,
                                stroke: this._color,
                                originX: "center",
                                originY: "center",
                                selectable: !1,
                                evented: !1
                            }), this.head = new y.fabric.Triangle({
                                fill: this._color,
                                left: i.x,
                                top: i.y,
                                originX: "center",
                                originY: "center",
                                height: 3 * this._width,
                                width: 3 * this._width,
                                selectable: !1,
                                evented: !1,
                                angle: 90
                            }), e.add(this.line), e.add(this.head)
                        }
                    }, {
                        key: "doMouseMove",
                        value: function (t) {
                            if (this.isDown) {
                                var e = this._canvas,
                                    i = e.getPointer(t.e);
                                this.line.set({
                                    x2: i.x,
                                    y2: i.y
                                }), this.line.setCoords();
                                var r = i.x - this.line.x1,
                                    n = i.y - this.line.y1;
                                this.head.set({
                                    left: i.x,
                                    top: i.y,
                                    angle: 90 + 180 * Math.atan2(n, r) / Math.PI
                                }), e.renderAll()
                            }
                        }
                    }, {
                        key: "doMouseUp",
                        value: function (t) {
                            this.isDown = !1;
                            var e = this._canvas;
                            e.remove(this.line), e.remove(this.head);
                            var i = new y.fabric.Group([this.line, this.head]);
                            e.add(i)
                        }
                    }, {
                        key: "doMouseOut",
                        value: function (t) {
                            this.isDown = !1
                        }
                    }]), i
                }(p),
                x = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = e.selection = !1, e.forEachObject((function (t) {
                                return t.selectable = t.evented = !1
                            })), this._width = t.lineWidth, this._color = t.lineColor, this._fill = t.fillColor
                        }
                    }, {
                        key: "doMouseDown",
                        value: function (t) {
                            var e = this._canvas;
                            this.isDown = !0;
                            var i = e.getPointer(t.e);
                            this.startX = i.x, this.startY = i.y, this.rect = new y.fabric.Rect({
                                left: this.startX,
                                top: this.startY,
                                originX: "left",
                                originY: "top",
                                width: i.x - this.startX,
                                height: i.y - this.startY,
                                stroke: this._color,
                                strokeWidth: this._width,
                                fill: this._fill,
                                transparentCorners: !1,
                                selectable: !1,
                                evented: !1,
                                strokeUniform: !0,
                                noScaleCache: !1,
                                angle: 0
                            }), e.add(this.rect)
                        }
                    }, {
                        key: "doMouseMove",
                        value: function (t) {
                            if (this.isDown) {
                                var e = this._canvas,
                                    i = e.getPointer(t.e);
                                this.startX > i.x && this.rect.set({
                                    left: Math.abs(i.x)
                                }), this.startY > i.y && this.rect.set({
                                    top: Math.abs(i.y)
                                }), this.rect.set({
                                    width: Math.abs(this.startX - i.x)
                                }), this.rect.set({
                                    height: Math.abs(this.startY - i.y)
                                }), this.rect.setCoords(), e.renderAll()
                            }
                        }
                    }, {
                        key: "doMouseUp",
                        value: function (t) {
                            this.isDown = !1
                        }
                    }]), i
                }(p),
                C = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = e.selection = !1, e.forEachObject((function (t) {
                                return t.selectable = t.evented = !1
                            })), this._width = t.lineWidth, this._color = t.lineColor, this._fill = t.fillColor
                        }
                    }, {
                        key: "doMouseDown",
                        value: function (t) {
                            var e = this._canvas;
                            this.isDown = !0;
                            var i = e.getPointer(t.e),
                                r = [i.x, i.y];
                            this.startX = r[0], this.startY = r[1], this.circle = new y.fabric.Circle({
                                left: this.startX,
                                top: this.startY,
                                originX: "left",
                                originY: "center",
                                strokeWidth: this._width,
                                stroke: this._color,
                                fill: this._fill,
                                selectable: !1,
                                evented: !1,
                                radius: 1
                            }), e.add(this.circle)
                        }
                    }, {
                        key: "doMouseMove",
                        value: function (t) {
                            if (this.isDown) {
                                var e = this._canvas,
                                    i = e.getPointer(t.e);
                                this.circle.set({
                                    radius: f({
                                        x: this.startX,
                                        y: this.startY
                                    }, {
                                        x: i.x,
                                        y: i.y
                                    }) / 2,
                                    angle: 180 * Math.atan2(i.y - this.startY, i.x - this.startX) / Math.PI
                                }), this.circle.setCoords(), e.renderAll()
                            }
                        }
                    }, {
                        key: "doMouseUp",
                        value: function (t) {
                            this.isDown = !1
                        }
                    }]), i
                }(p),
                S = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = e.selection = !1, e.forEachObject((function (t) {
                                return t.selectable = t.evented = !1
                            })), e.defaultCursor = "move"
                        }
                    }, {
                        key: "doMouseDown",
                        value: function (t) {
                            var e = this._canvas;
                            this.isDown = !0;
                            var i = e.getPointer(t.e);
                            this.startX = i.x, this.startY = i.y
                        }
                    }, {
                        key: "doMouseMove",
                        value: function (t) {
                            if (this.isDown) {
                                var e = this._canvas,
                                    i = e.getPointer(t.e);
                                e.relativePan({
                                    x: i.x - this.startX,
                                    y: i.y - this.startY
                                }), e.renderAll()
                            }
                        }
                    }, {
                        key: "doMouseUp",
                        value: function (t) {
                            this.isDown = !1
                        }
                    }]), i
                }(p),
                w = {
                    Circle: "circle",
                    Line: "line",
                    Arrow: "arrow",
                    Pencil: "pencil",
                    Rectangle: "rectangle",
                    RectangleLabel: "rectangle-label",
                    Select: "select",
                    Pan: "pan",
                    Highlighter: "highlighter",
                    DefaultTool: "default-tool"
                },
                T = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            this._canvas.isDrawingMode = !0, this._canvas.freeDrawingBrush.width = t.lineWidth, this._canvas.freeDrawingBrush.color = t.lineColor.indexOf("#") > -1 ? g(t.lineColor) : g(function (t) {
                                var e = {
                                    aliceblue: "#f0f8ff",
                                    antiquewhite: "#faebd7",
                                    aqua: "#00ffff",
                                    aquamarine: "#7fffd4",
                                    azure: "#f0ffff",
                                    beige: "#f5f5dc",
                                    bisque: "#ffe4c4",
                                    black: "#000000",
                                    blanchedalmond: "#ffebcd",
                                    blue: "#0000ff",
                                    blueviolet: "#8a2be2",
                                    brown: "#a52a2a",
                                    burlywood: "#deb887",
                                    cadetblue: "#5f9ea0",
                                    chartreuse: "#7fff00",
                                    chocolate: "#d2691e",
                                    coral: "#ff7f50",
                                    cornflowerblue: "#6495ed",
                                    cornsilk: "#fff8dc",
                                    crimson: "#dc143c",
                                    cyan: "#00ffff",
                                    darkblue: "#00008b",
                                    darkcyan: "#008b8b",
                                    darkgoldenrod: "#b8860b",
                                    darkgray: "#a9a9a9",
                                    darkgreen: "#006400",
                                    darkkhaki: "#bdb76b",
                                    darkmagenta: "#8b008b",
                                    darkolivegreen: "#556b2f",
                                    darkorange: "#ff8c00",
                                    darkorchid: "#9932cc",
                                    darkred: "#8b0000",
                                    darksalmon: "#e9967a",
                                    darkseagreen: "#8fbc8f",
                                    darkslateblue: "#483d8b",
                                    darkslategray: "#2f4f4f",
                                    darkturquoise: "#00ced1",
                                    darkviolet: "#9400d3",
                                    deeppink: "#ff1493",
                                    deepskyblue: "#00bfff",
                                    dimgray: "#696969",
                                    dodgerblue: "#1e90ff",
                                    firebrick: "#b22222",
                                    floralwhite: "#fffaf0",
                                    forestgreen: "#228b22",
                                    fuchsia: "#ff00ff",
                                    gainsboro: "#dcdcdc",
                                    ghostwhite: "#f8f8ff",
                                    gold: "#ffd700",
                                    goldenrod: "#daa520",
                                    gray: "#808080",
                                    green: "#008000",
                                    greenyellow: "#adff2f",
                                    honeydew: "#f0fff0",
                                    hotpink: "#ff69b4",
                                    "indianred ": "#cd5c5c",
                                    indigo: "#4b0082",
                                    ivory: "#fffff0",
                                    khaki: "#f0e68c",
                                    lavender: "#e6e6fa",
                                    lavenderblush: "#fff0f5",
                                    lawngreen: "#7cfc00",
                                    lemonchiffon: "#fffacd",
                                    lightblue: "#add8e6",
                                    lightcoral: "#f08080",
                                    lightcyan: "#e0ffff",
                                    lightgoldenrodyellow: "#fafad2",
                                    lightgrey: "#d3d3d3",
                                    lightgreen: "#90ee90",
                                    lightpink: "#ffb6c1",
                                    lightsalmon: "#ffa07a",
                                    lightseagreen: "#20b2aa",
                                    lightskyblue: "#87cefa",
                                    lightslategray: "#778899",
                                    lightsteelblue: "#b0c4de",
                                    lightyellow: "#ffffe0",
                                    lime: "#00ff00",
                                    limegreen: "#32cd32",
                                    linen: "#faf0e6",
                                    magenta: "#ff00ff",
                                    maroon: "#800000",
                                    mediumaquamarine: "#66cdaa",
                                    mediumblue: "#0000cd",
                                    mediumorchid: "#ba55d3",
                                    mediumpurple: "#9370d8",
                                    mediumseagreen: "#3cb371",
                                    mediumslateblue: "#7b68ee",
                                    mediumspringgreen: "#00fa9a",
                                    mediumturquoise: "#48d1cc",
                                    mediumvioletred: "#c71585",
                                    midnightblue: "#191970",
                                    mintcream: "#f5fffa",
                                    mistyrose: "#ffe4e1",
                                    moccasin: "#ffe4b5",
                                    navajowhite: "#ffdead",
                                    navy: "#000080",
                                    oldlace: "#fdf5e6",
                                    olive: "#808000",
                                    olivedrab: "#6b8e23",
                                    orange: "#ffa500",
                                    orangered: "#ff4500",
                                    orchid: "#da70d6",
                                    palegoldenrod: "#eee8aa",
                                    palegreen: "#98fb98",
                                    paleturquoise: "#afeeee",
                                    palevioletred: "#d87093",
                                    papayawhip: "#ffefd5",
                                    peachpuff: "#ffdab9",
                                    peru: "#cd853f",
                                    pink: "#ffc0cb",
                                    plum: "#dda0dd",
                                    powderblue: "#b0e0e6",
                                    purple: "#800080",
                                    rebeccapurple: "#663399",
                                    red: "#ff0000",
                                    rosybrown: "#bc8f8f",
                                    royalblue: "#4169e1",
                                    saddlebrown: "#8b4513",
                                    salmon: "#fa8072",
                                    sandybrown: "#f4a460",
                                    seagreen: "#2e8b57",
                                    seashell: "#fff5ee",
                                    sienna: "#a0522d",
                                    silver: "#c0c0c0",
                                    skyblue: "#87ceeb",
                                    slateblue: "#6a5acd",
                                    slategray: "#708090",
                                    snow: "#fffafa",
                                    springgreen: "#00ff7f",
                                    steelblue: "#4682b4",
                                    tan: "#d2b48c",
                                    teal: "#008080",
                                    thistle: "#d8bfd8",
                                    tomato: "#ff6347",
                                    turquoise: "#40e0d0",
                                    violet: "#ee82ee",
                                    wheat: "#f5deb3",
                                    white: "#ffffff",
                                    whitesmoke: "#f5f5f5",
                                    yellow: "#ffff00",
                                    yellowgreen: "#9acd32"
                                };
                                return "undefined" != typeof e[t.toLowerCase()] && e[t.toLowerCase()]
                            }(t.lineColor))
                        }
                    }]), i
                }(p),
                O = function () {
                    function t(e, i, r, n) {
                        var o = this;
                        Object(s.a)(this, t), this.update = function (t) {
                            o._textObj && o._rectObj && t.target === o._rectObj && o._textObj.set({
                                width: o._rectObj.getScaledWidth(),
                                scaleX: 1,
                                scaleY: 1,
                                top: o._rectObj.top - o._textObj.getScaledHeight(),
                                left: o._rectObj.left
                            })
                        }, this._canvas = e, this._text = i, this._rectObj = new y.fabric.Rect(r), this._textObj = new y.fabric.Textbox(i, n), e.on({
                            "object:scaling": this.update
                        }), e.on({
                            "object:moving": this.update
                        })
                    }
                    return Object(l.a)(t, [{
                        key: "setText",
                        value: function (t) {
                            this._text = t, this._textObj.set({
                                text: t
                            })
                        }
                    }]), t
                }(),
                k = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = e.selection = !1, e.forEachObject((function (t) {
                                return t.selectable = t.evented = !1
                            })), this._width = t.lineWidth, this._color = t.lineColor, this._fill = t.fillColor, this._textString = t.text, this._maxFontSize = 12
                        }
                    }, {
                        key: "doMouseDown",
                        value: function (t) {
                            var e = this._canvas;
                            this.isDown = !0;
                            var i = e.getPointer(t.e);
                            for (this.startX = i.x, this.startY = i.y, this.rectangleLabel = new O(e, "New drawing", {
                                    left: this.startX,
                                    top: this.startY,
                                    originX: "left",
                                    originY: "top",
                                    width: i.x - this.startX,
                                    height: i.y - this.startY,
                                    stroke: this._color,
                                    strokeWidth: this._width,
                                    fill: this._fill,
                                    transparentCorners: !1,
                                    selectable: !1,
                                    evented: !1,
                                    strokeUniform: !0,
                                    noScaleCache: !1,
                                    angle: 0
                                }, {
                                    left: this.startX,
                                    top: this.startY - 12,
                                    originX: "left",
                                    originY: "top",
                                    width: i.x - this.startX - this._width,
                                    height: e.height / 3,
                                    fontSize: this._maxFontSize,
                                    noScaleCache: !1,
                                    backgroundColor: this._color,
                                    transparentCorners: !0,
                                    hasControls: !1,
                                    angle: 0
                                }), this._objects && this._objects.length > 0 ? this._objects.push(this.rectangleLabel) : this._objects = [this.rectangleLabel]; this.rectangleLabel._textObj.height > e.height / 3;) this.rectangleLabel._textObj.set({
                                fontSize: this.rectangleLabel._textObj.fontSize - 1,
                                top: this.startY - this.rectangleLabel._textObj.fontSize - 12
                            });
                            e.add(this.rectangleLabel._rectObj), e.add(this.rectangleLabel._textObj), e.renderAll()
                        }
                    }, {
                        key: "doMouseMove",
                        value: function (t) {
                            if (this.isDown) {
                                var e = this._canvas,
                                    i = e.getPointer(t.e);
                                this.startX > i.x && (this.rectangleLabel._rectObj.set({
                                    left: Math.abs(i.x)
                                }), this.rectangleLabel._textObj.set({
                                    left: Math.abs(i.x)
                                })), this.startY > i.y && (this.rectangleLabel._rectObj.set({
                                    left: Math.abs(i.x)
                                }), this.rectangleLabel._textObj.set({
                                    top: Math.abs(i.y)
                                })), this.rectangleLabel._textObj.setCoords(), this.rectangleLabel._rectObj.set({
                                    width: Math.abs(this.startX - i.x)
                                }), this.rectangleLabel._textObj.set({
                                    width: this.rectangleLabel._rectObj.getScaledWidth()
                                }), this.rectangleLabel._rectObj.set({
                                    height: Math.abs(this.startY - i.y)
                                }), this.rectangleLabel._rectObj.setCoords(), e.renderAll()
                            }
                        }
                    }, {
                        key: "doMouseUp",
                        value: function (t) {
                            this.isDown = !1, this._canvas.renderAll()
                        }
                    }]), i
                }(p),
                E = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        return Object(s.a)(this, i), e.apply(this, arguments)
                    }
                    return Object(l.a)(i, [{
                        key: "configureCanvas",
                        value: function (t) {
                            var e = this._canvas;
                            e.isDrawingMode = e.selection = !1, e.forEachObject((function (t) {
                                return t.selectable = t.evented = !1
                            })), e.discardActiveObject(), e.defaultCursor = "pointer", e.renderAll()
                        }
                    }]), i
                }(p),
                P = function (t) {
                    Object(o.a)(i, t);
                    var e = Object(a.a)(i);

                    function i() {
                        var t;
                        Object(s.a)(this, i);
                        for (var o = arguments.length, a = new Array(o), h = 0; h < o; h++) a[h] = arguments[h];
                        return (t = e.call.apply(e, [this].concat(a))).state = {
                            action: !0
                        }, t._initTools = function (e) {
                            t._tools = {}, t._tools[w.Select] = new v(e), t._tools[w.Pencil] = new m(e), t._tools[w.Line] = new _(e), t._tools[w.Arrow] = new b(e), t._tools[w.Rectangle] = new x(e), t._tools[w.RectangleLabel] = new k(e), t._tools[w.Circle] = new C(e), t._tools[w.Pan] = new S(e), t._tools[w.Highlighter] = new T(e), t._tools[w.DefaultTool] = new E(e)
                        }, t.enableTouchScroll = function () {
                            var e = t._fc;
                            e.allowTouchScrolling || (e.allowTouchScrolling = !0)
                        }, t.disableTouchScroll = function () {
                            var e = t._fc;
                            e.allowTouchScrolling && (e.allowTouchScrolling = !1)
                        }, t.addImg = function (e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t._fc;
                            y.fabric.Image.fromURL(e, (function (t) {
                                var e = {
                                    left: Math.random() * (r.getWidth() - .5 * t.width),
                                    top: Math.random() * (r.getHeight() - .5 * t.height),
                                    scale: .5
                                };
                                Object.assign(e, i), t.scale(e.scale), t.set({
                                    left: e.left,
                                    top: e.top
                                }), r.add(t)
                            }))
                        }, t._onObjectAdded = function (e) {
                            var i = t.props.onObjectAdded;
                            if (t.state.action) {
                                var r = e.target;
                                r.__version = 1;
                                var n = r.toJSON();
                                r.__originalState = n;
                                var s = JSON.stringify(n);
                                t._history.keep([r, s, s]), i(e)
                            } else t.setState({
                                action: !0
                            })
                        }, t._onObjectMoving = function (e) {
                            (0, t.props.onObjectMoving)(e)
                        }, t._onObjectScaling = function (e) {
                            (0, t.props.onObjectScaling)(e)
                        }, t._onObjectRotating = function (e) {
                            (0, t.props.onObjectRotating)(e)
                        }, t._onObjectModified = function (e) {
                            var i = t.props.onObjectModified,
                                r = e.target;
                            r.__version += 1;
                            var n = JSON.stringify(r.__originalState),
                                s = r.toJSON();
                            r.__originalState = s;
                            var o = JSON.stringify(s);
                            t._history.keep([r, n, o]), i(e)
                        }, t._onObjectRemoved = function (e) {
                            var i = t.props.onObjectRemoved,
                                r = e.target;
                            r.__removed ? r.__version += 1 : (r.__version = 0, i(e))
                        }, t._onMouseDown = function (e) {
                            var i = t.props.onMouseDown;
                            t._selectedTool.doMouseDown(e), i(e)
                        }, t._onMouseMove = function (e) {
                            var i = t.props.onMouseMove;
                            t._selectedTool.doMouseMove(e), i(e)
                        }, t._onMouseOut = function (e) {
                            var i = t.props.onMouseOut;
                            if (t._selectedTool.doMouseOut(e), t.props.onChange) {
                                var r = t.props.onChange;
                                setTimeout((function () {
                                    r(e.e)
                                }), 10)
                            }
                            i(e)
                        }, t._onMouseUp = function (e) {
                            var i = t.props.onMouseUp;
                            if (t._selectedTool.doMouseUp(e), t.props.tool !== w.Pencil) {
                                var r = t._fc.getObjects(),
                                    n = r[r.length - 1];
                                n && 1 === n.__version && (n.__originalState = n.toJSON())
                            }
                            if (t.props.onChange) {
                                var s = t.props.onChange;
                                setTimeout((function () {
                                    s(e.e)
                                }), 10)
                            }
                            i(e)
                        }, t._resize = function (e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            e && e.preventDefault();
                            var n = t.props,
                                s = n.widthCorrection,
                                o = n.heightCorrection,
                                a = t._fc,
                                h = t._container,
                                c = h.offsetWidth,
                                l = h.clientHeight,
                                u = i || a.getWidth(),
                                f = r || a.getHeight(),
                                d = ((c - s) / u).toFixed(2),
                                g = ((l - o) / f).toFixed(2);
                            if (a.setWidth(c - s), a.setHeight(l - o), a.backgroundImage) {
                                var p = a.backgroundImage;
                                p.width = p.width * d, p.height = p.height * g
                            }
                            var v = a.getObjects();
                            for (var m in v) {
                                var y = v[m],
                                    _ = y.scaleX,
                                    b = y.scaleY,
                                    x = y.left,
                                    C = y.top,
                                    S = _ * d,
                                    w = b * g,
                                    T = x * d,
                                    O = C * g;
                                y.scaleX = S, y.scaleY = w, y.left = T, y.top = O, y.setCoords()
                            }
                            a.renderAll(), a.calcOffset()
                        }, t._backgroundColor = function (e) {
                            if (e) {
                                var i = t._fc;
                                i.setBackgroundColor(e, (function () {
                                    return i.renderAll()
                                }))
                            }
                        }, t.zoom = function (e) {
                            var i = t._fc,
                                r = i.getObjects();
                            for (var n in r) r[n].scaleX = r[n].scaleX * e, r[n].scaleY = r[n].scaleY * e, r[n].left = r[n].left * e, r[n].top = r[n].top * e, r[n].setCoords();
                            i.renderAll(), i.calcOffset()
                        }, t.undo = function () {
                            var e = t._history,
                                i = e.getCurrent(),
                                r = Object(n.a)(i, 2),
                                s = r[0],
                                o = r[1];
                            e.undo(), s.__removed ? t.setState({
                                action: !1
                            }, (function () {
                                t._fc.add(s), s.__version -= 1, s.__removed = !1
                            })) : s.__version <= 1 ? t._fc.remove(s) : (s.__version -= 1, s.setOptions(JSON.parse(o)), s.setCoords(), t._fc.renderAll()), t.props.onChange && t.props.onChange()
                        }, t.redo = function () {
                            var e = t._history;
                            if (e.canRedo()) {
                                var i = t._fc,
                                    r = e.redo(),
                                    s = Object(n.a)(r, 3),
                                    o = s[0],
                                    a = s[2];
                                0 === o.__version ? t.setState({
                                    action: !1
                                }, (function () {
                                    i.add(o), o.__version = 1
                                })) : (o.__version += 1, o.setOptions(JSON.parse(a))), o.setCoords(), i.renderAll(), t.props.onChange && t.props.onChange()
                            }
                        }, t.canUndo = function () {
                            return t._history.canUndo()
                        }, t.canRedo = function () {
                            return t._history.canRedo()
                        }, t.toDataURL = function (e) {
                            return t._fc.toDataURL(e)
                        }, t.toJSON = function (e) {
                            return t._fc.toJSON(e)
                        }, t.fromJSON = function (e) {
                            if (e) {
                                var i = t._fc;
                                setTimeout((function () {
                                    i.loadFromJSON(e, (function () {
                                        t.props.tool === w.DefaultTool && (i.isDrawingMode = i.selection = !1, i.forEachObject((function (t) {
                                            return t.selectable = t.evented = !1
                                        }))), i.renderAll(), t.props.onChange && t.props.onChange()
                                    }))
                                }), 100)
                            }
                        }, t.clear = function (e) {
                            var i = t.toJSON(e);
                            return t._fc.clear(), t._history.clear(), i
                        }, t.hasSelection = function () {
                            return !!t._fc.getActiveObject()
                        }, t.clearSelection = function () {
                            var e = t._fc;
                            e.discardActiveObject(), e.requestRenderAll()
                        }, t.removeSelected = function () {
                            var e = t._fc,
                                i = e.getActiveObject();
                            if (i) {
                                var r = [];
                                "activeSelection" === i.type ? i.forEachObject((function (t) {
                                    return r.push(t)
                                })) : r.push(i), r.forEach((function (i) {
                                    i.__removed = !0;
                                    var r = i.toJSON();
                                    i.__originalState = r;
                                    var n = JSON.stringify(r);
                                    t._history.keep([i, n, n]), e.remove(i)
                                })), e.discardActiveObject(), e.requestRenderAll()
                            }
                        }, t.copy = function () {
                            t._fc.getActiveObject().clone((function (e) {
                                return t._clipboard = e
                            }))
                        }, t.paste = function () {
                            t._clipboard.clone((function (e) {
                                var i = t._fc;
                                i.discardActiveObject(), e.set({
                                    left: e.left + 10,
                                    top: e.top + 10,
                                    evented: !0
                                }), "activeSelection" === e.type ? (e.canvas = i, e.forEachObject((function (t) {
                                    return i.add(t)
                                })), e.setCoords()) : i.add(e), t._clipboard.top += 10, t._clipboard.left += 10, i.setActiveObject(e), i.requestRenderAll()
                            }))
                        }, t.setBackgroundFromDataUrl = function (e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t._fc,
                                s = new Image;
                            s.setAttribute("crossOrigin", "anonymous");
                            var o = i.stretched,
                                a = i.stretchedX,
                                h = i.stretchedY,
                                c = Object(r.a)(i, ["stretched", "stretchedX", "stretchedY"]);
                            s.onload = function () {
                                var t = new y.fabric.Image(s);
                                (o || a) && t.scaleToWidth(n.width), (o || h) && t.scaleToHeight(n.height), n.setBackgroundImage(t, (function () {
                                    return n.renderAll()
                                }), c)
                            }, s.src = e
                        }, t.addText = function (e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t._fc,
                                n = new y.fabric.IText(e, i),
                                s = {
                                    left: .5 * (r.getWidth() - n.width),
                                    top: .5 * (r.getHeight() - n.height)
                                };
                            Object.assign(i, s), n.set({
                                left: i.left,
                                top: i.top
                            }), r.add(n)
                        }, t.callEvent = function (e, i) {
                            t._selectedTool && i(e)
                        }, t.componentDidMount = function () {
                            var e = t.props,
                                i = e.tool,
                                r = e.value,
                                n = e.undoSteps,
                                s = e.defaultValue,
                                o = e.backgroundColor,
                                a = t._fc = new y.fabric.Canvas(t._canvas);
                            t._initTools(a), t._backgroundColor(o);
                            var h = t._tools[i];
                            h && h.configureCanvas(t.props), t._selectedTool = h, window.addEventListener("resize", t._resize, !1), t._history = new u(n), a.on("object:added", (function (e) {
                                return t.callEvent(e, t._onObjectAdded)
                            })), a.on("object:modified", (function (e) {
                                return t.callEvent(e, t._onObjectModified)
                            })), a.on("object:removed", (function (e) {
                                return t.callEvent(e, t._onObjectRemoved)
                            })), a.on("mouse:down", (function (e) {
                                return t.callEvent(e, t._onMouseDown)
                            })), a.on("mouse:move", (function (e) {
                                return t.callEvent(e, t._onMouseMove)
                            })), a.on("mouse:up", (function (e) {
                                return t.callEvent(e, t._onMouseUp)
                            })), a.on("mouse:out", (function (e) {
                                return t.callEvent(e, t._onMouseOut)
                            })), a.on("object:moving", (function (e) {
                                return t.callEvent(e, t._onObjectMoving)
                            })), a.on("object:scaling", (function (e) {
                                return t.callEvent(e, t._onObjectScaling)
                            })), a.on("object:rotating", (function (e) {
                                return t.callEvent(e, t._onObjectRotating)
                            })), t.disableTouchScroll(), t._resize(), (r || s) && t.fromJSON(r || s)
                        }, t.componentWillUnmount = function () {
                            return window.removeEventListener("resize", t._resize)
                        }, t.componentDidUpdate = function (e, i) {
                            t.props.width === e.width && t.props.height === e.height || t._resize(), t.props.tool !== e.tool ? (t._selectedTool = t._tools[t.props.tool], t._fc.defaultCursor = "default", t._selectedTool && t._selectedTool.configureCanvas(t.props)) : t.props.lineWidth === e.lineWidth && t.props.lineColor === e.lineColor && t.props.fillColor === e.fillColor || t._selectedTool.configureCanvas(t.props), t.props.backgroundColor !== e.backgroundColor && t._backgroundColor(t.props.backgroundColor), (t.props.value !== e.value || t.props.value && t.props.forceValue) && t.fromJSON(t.props.value)
                        }, t.render = function () {
                            var e = t.props,
                                i = e.className,
                                r = e.style,
                                n = e.width,
                                s = e.height,
                                o = Object.assign({}, r || {}, n ? {
                                    width: n
                                } : {}, s ? {
                                    height: s
                                } : {
                                    height: 512
                                });
                            return c.a.createElement("div", {
                                className: i,
                                ref: function (e) {
                                    return t._container = e
                                },
                                style: o
                            }, c.a.createElement("canvas", {
                                id: d(),
                                ref: function (e) {
                                    return t._canvas = e
                                }
                            }, "Sorry, Canvas HTML5 element is not supported by your browser :("))
                        }, t
                    }
                    return i
                }(h.PureComponent);
            P.defaultProps = {
                lineColor: "black",
                lineWidth: 10,
                fillColor: "transparent",
                backgroundColor: "transparent",
                opacity: 1,
                undoSteps: 25,
                tool: null,
                widthCorrection: 0,
                heightCorrection: 0,
                forceValue: !1,
                onObjectAdded: function () {
                    return null
                },
                onObjectModified: function () {
                    return null
                },
                onObjectRemoved: function () {
                    return null
                },
                onMouseDown: function () {
                    return null
                },
                onMouseMove: function () {
                    return null
                },
                onMouseUp: function () {
                    return null
                },
                onMouseOut: function () {
                    return null
                },
                onObjectMoving: function () {
                    return null
                },
                onObjectScaling: function () {
                    return null
                },
                onObjectRotating: function () {
                    return null
                }
            };
            var A = P
        }
    }
]);
//# sourceMappingURL=vendors~sketch.dc3091ff.chunk.js.map