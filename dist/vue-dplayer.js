/*!
 * vue-dplayer v0.0.10
 * (c) 2017-present sinchang <sinchangwen@gmail.com>
 * Released under the MIT License.
 */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.vueDplayer = factory());
}(this, (function() {
    'use strict';

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
        return module = {
                exports: {}
            },
            fn(module, module.exports),
            module.exports;
    }

    var DPlayer_min = createCommonjsModule(function(module, exports) {
        ! function(e, t) {
            module.exports = t();
        }("undefined" != typeof self ? self : commonjsGlobal, function() {
            return function(e) {
                function t(i) {
                    if (n[i])
                        return n[i].exports;
                    var a = n[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(a.exports, a, a.exports, t),
                        a.l = !0,
                        a.exports
                }
                var n = {};
                return t.m = e,
                    t.c = n,
                    t.d = function(e, n, i) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: i
                        });
                    },
                    t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                                return e.default
                            } :
                            function() {
                                return e
                            };
                        return t.d(n, "a", n),
                            n
                    },
                    t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    },
                    t.p = "/",
                    t(t.s = 5)
            }([function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = /mobile/i.test(window.navigator.userAgent),
                    a = {
                        secondToTime: function(e) {
                            var t = function(e) {
                                    return e < 10 ? "0" + e : "" + e
                                },
                                n = Math.floor(e / 3600),
                                i = Math.floor((e - 3600 * n) / 60),
                                a = Math.floor(e - 3600 * n - 60 * i);
                            return (n > 0 ? [n, i, a] : [i, a]).map(t).join(":")
                        },
                        getElementViewLeft: function(e) {
                            var t = e.offsetLeft,
                                n = e.offsetParent,
                                i = document.body.scrollLeft + document.documentElement.scrollLeft;
                            if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
                                for (; null !== n && n !== e;)
                                    t += n.offsetLeft,
                                    n = n.offsetParent;
                            else
                                for (; null !== n;)
                                    t += n.offsetLeft,
                                    n = n.offsetParent;
                            return t - i
                        },
                        getScrollPosition: function() {
                            return {
                                left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                                top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                            }
                        },
                        setScrollPosition: function(e) {
                            var t = e.left,
                                n = void 0 === t ? 0 : t,
                                i = e.top,
                                a = void 0 === i ? 0 : i;
                            this.isFirefox ? (document.documentElement.scrollLeft = n,
                                document.documentElement.scrollTop = a) : window.scrollTo(n, a);
                        },
                        isMobile: i,
                        isFirefox: /firefox/i.test(window.navigator.userAgent),
                        isChrome: /chrome/i.test(window.navigator.userAgent),
                        storage: {
                            set: function(e, t) {
                                localStorage.setItem(e, t);
                            },
                            get: function(e) {
                                return localStorage.getItem(e)
                            }
                        },
                        cumulativeOffset: function(e) {
                            var t = 0,
                                n = 0;
                            do {
                                t += e.offsetTop || 0,
                                    n += e.offsetLeft || 0,
                                    e = e.offsetParent;
                            } while (e);
                            return {
                                top: t,
                                left: n
                            }
                        },
                        nameMap: {
                            dragStart: i ? "touchstart" : "mousedown",
                            dragMove: i ? "touchmove" : "mousemove",
                            dragEnd: i ? "touchend" : "mouseup"
                        }
                    };
                t.default = a;
            }, function(e, t, n) {
                var i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } :
                    function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                i = function() {
                    return this
                }();
                try {
                    i = i || Function("return this")() || (eval)("this");
                } catch (e) {
                    "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (i = window);
                }
                e.exports = i;
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = n(16),
                    o = i(a),
                    s = n(17),
                    r = i(s),
                    l = n(18),
                    c = i(l),
                    u = n(19),
                    d = i(u),
                    p = n(20),
                    h = i(p),
                    y = n(21),
                    m = i(y),
                    f = n(22),
                    v = i(f),
                    g = n(23),
                    b = i(g),
                    k = n(24),
                    w = i(k),
                    x = n(25),
                    S = i(x),
                    T = n(26),
                    L = i(T),
                    M = n(27),
                    q = i(M),
                    _ = n(28),
                    E = i(_),
                    B = n(29),
                    P = i(B),
                    C = n(30),
                    O = i(C),
                    z = n(31),
                    F = i(z),
                    j = {
                        play: o.default,
                        pause: r.default,
                        volumeUp: c.default,
                        volumeDown: d.default,
                        volumeOff: h.default,
                        full: m.default,
                        fullWeb: v.default,
                        setting: b.default,
                        right: w.default,
                        comment: S.default,
                        commentOff: L.default,
                        send: q.default,
                        pallette: E.default,
                        camera: P.default,
                        subtitle: O.default,
                        loading: F.default
                    };
                t.default = j;
            }, function(e, t, n) {
                e.exports = n(33);
            }, function(e, t, n) {
                var i = n(3);
                e.exports = function(e) {
                    e = e || {};
                    var t = "",
                        n = e.enableSubtitle,
                        a = e.subtitle,
                        o = e.current,
                        s = e.pic,
                        r = i.$escape,
                        l = e.screenshot,
                        c = e.preload,
                        u = e.url,
                        n = a && "webvtt" === a.type;
                    return t += '\n<video\n    class="dplayer-video ',
                        o && (t += "dplayer-video-current"),
                        t += '"\n    webkit-playsinline\n    playsinline\n    ',
                        s && (t += 'poster="',
                            t += r(s),
                            t += '"'),
                        t += "\n    ",
                        (l || n) && (t += 'crossorigin="anonymous"'),
                        t += "\n    ",
                        c && (t += 'preload="',
                            t += r(c),
                            t += '"'),
                        t += "\n    ",
                        u && (t += 'src="',
                            t += r(u),
                            t += '"'),
                        t += "\n    >\n    ",
                        n && (t += '\n    <track kind="metadata" default src="',
                            t += r(a.url),
                            t += '"></track>\n    '),
                        t += "\n</video>"
                };
            }, function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    n(6);
                var i = n(7),
                    a = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(i);
                console.log("\n %c DPlayer v1.22.2 d3847a3 %c http://dplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"),
                    t.default = a.default;
            }, function(e, t) {}, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function a(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    s = n(8),
                    r = i(s),
                    l = n(0),
                    c = i(l),
                    u = n(12),
                    d = i(u),
                    p = n(14),
                    h = i(p),
                    y = n(15),
                    m = i(y),
                    f = n(2),
                    v = i(f),
                    g = n(35),
                    b = i(g),
                    k = n(36),
                    w = i(k),
                    x = n(37),
                    S = i(x),
                    T = n(38),
                    L = i(T),
                    M = n(39),
                    q = i(M),
                    _ = n(40),
                    E = i(_),
                    B = n(41),
                    P = i(B),
                    C = n(42),
                    O = i(C),
                    z = n(43),
                    F = i(z),
                    j = n(45),
                    I = i(j),
                    D = n(46),
                    W = i(D),
                    H = n(47),
                    A = i(H),
                    R = n(48),
                    V = i(R),
                    X = n(49),
                    N = i(X),
                    U = n(4),
                    $ = i(U),
                    Q = 0,
                    J = [],
                    Y = function() {
                        function e(t) {
                            var n = this;
                            a(this, e),
                                this.options = (0,
                                    d.default)(t),
                                this.options.video.quality && (this.qualityIndex = this.options.video.defaultQuality,
                                    this.quality = this.options.video.quality[this.options.video.defaultQuality]),
                                this.tran = new h.default(this.options.lang).tran,
                                this.events = new w.default,
                                this.user = new L.default(this),
                                this.container = this.options.container,
                                this.container.classList.add("dplayer"),
                                this.options.danmaku || this.container.classList.add("dplayer-no-danmaku"),
                                this.options.live && this.container.classList.add("dplayer-live"),
                                c.default.isMobile && this.container.classList.add("dplayer-mobile"),
                                this.arrow = this.container.offsetWidth <= 500,
                                this.arrow && this.container.classList.add("dplayer-arrow"),
                                this.template = new m.default({
                                    container: this.container,
                                    options: this.options,
                                    index: Q,
                                    tran: this.tran
                                }),
                                this.video = this.template.video,
                                this.bar = new E.default(this.template),
                                this.bezel = new O.default(this.template.bezel),
                                this.fullScreen = new S.default(this),
                                this.controller = new F.default(this),
                                this.options.danmaku && (this.danmaku = new b.default({
                                        container: this.template.danmaku,
                                        opacity: this.user.get("opacity"),
                                        callback: function() {
                                            setTimeout(function() {
                                                n.template.danmakuLoading.style.display = "none",
                                                    n.options.autoplay && n.play();
                                            }, 0);
                                        },
                                        error: function(e) {
                                            n.notice(e);
                                        },
                                        apiBackend: this.options.apiBackend,
                                        borderColor: this.options.theme,
                                        height: this.arrow ? 24 : 30,
                                        time: function() {
                                            return n.video.currentTime
                                        },
                                        unlimited: this.user.get("unlimited"),
                                        api: {
                                            id: this.options.danmaku.id,
                                            address: this.options.danmaku.api,
                                            token: this.options.danmaku.token,
                                            maximum: this.options.danmaku.maximum,
                                            addition: this.options.danmaku.addition,
                                            user: this.options.danmaku.user
                                        },
                                        events: this.events
                                    }),
                                    this.comment = new W.default(this)),
                                this.setting = new I.default(this),
                                document.addEventListener("click", function() {
                                    n.focus = !1;
                                }, !0),
                                this.container.addEventListener("click", function() {
                                    n.focus = !0;
                                }, !0),
                                this.paused = !0,
                                this.time = new P.default(this),
                                this.hotkey = new A.default(this),
                                this.contextmenu = new V.default(this),
                                this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type),
                                this.infoPanel = new N.default(this), !this.danmaku && this.options.autoplay && this.play(),
                                Q++,
                                J.push(this);
                        }
                        return o(e, [{
                                key: "seek",
                                value: function(e) {
                                    e = Math.max(e, 0),
                                        this.video.duration && (e = Math.min(e, this.video.duration)),
                                        this.video.currentTime < e ? this.notice(this.tran("FF") + " " + (e - this.video.currentTime).toFixed(0) + " " + this.tran("s")) : this.video.currentTime > e && this.notice(this.tran("REW") + " " + (this.video.currentTime - e).toFixed(0) + " " + this.tran("s")),
                                        this.video.currentTime = e,
                                        this.danmaku && this.danmaku.seek(),
                                        this.bar.set("played", e / this.video.duration, "width");
                                }
                            }, {
                                key: "play",
                                value: function() {
                                    var e = this;
                                    if (this.paused = !1,
                                        this.video.paused && this.bezel.switch(v.default.play),
                                        this.template.playButton.innerHTML = v.default.pause,
                                        r.default.resolve(this.video.play()).catch(function() {
                                            e.pause();
                                        }).then(function() {}),
                                        this.time.enable("loading"),
                                        this.time.enable("progress"),
                                        this.container.classList.remove("dplayer-paused"),
                                        this.container.classList.add("dplayer-playing"),
                                        this.danmaku && this.danmaku.play(),
                                        this.options.mutex)
                                        for (var t = 0; t < J.length; t++)
                                            this !== J[t] && J[t].pause();
                                }
                            }, {
                                key: "pause",
                                value: function() {
                                    this.paused = !0,
                                        this.container.classList.remove("dplayer-loading"),
                                        this.video.paused || this.bezel.switch(v.default.pause),
                                        this.ended = !1,
                                        this.template.playButton.innerHTML = v.default.play,
                                        this.video.pause(),
                                        this.time.disable("loading"),
                                        this.time.disable("progress"),
                                        this.container.classList.remove("dplayer-playing"),
                                        this.container.classList.add("dplayer-paused"),
                                        this.danmaku && this.danmaku.pause();
                                }
                            }, {
                                key: "switchVolumeIcon",
                                value: function() {
                                    this.volume() >= .95 ? this.template.volumeIcon.innerHTML = v.default.volumeUp : this.volume() > 0 ? this.template.volumeIcon.innerHTML = v.default.volumeDown : this.template.volumeIcon.innerHTML = v.default.volumeOff;
                                }
                            }, {
                                key: "volume",
                                value: function(e, t, n) {
                                    if (e = parseFloat(e), !isNaN(e)) {
                                        e = Math.max(e, 0),
                                            e = Math.min(e, 1),
                                            this.bar.set("volume", e, "width");
                                        var i = (100 * e).toFixed(0) + "%";
                                        this.template.volumeBarWrapWrap.dataset.balloon = i,
                                            t || this.user.set("volume", e),
                                            n || this.notice(this.tran("Volume") + " " + (100 * e).toFixed(0) + "%"),
                                            this.video.volume = e,
                                            this.video.muted && (this.video.muted = !1),
                                            this.switchVolumeIcon();
                                    }
                                    return this.video.volume
                                }
                            }, {
                                key: "toggle",
                                value: function() {
                                    this.video.paused ? this.play() : this.pause();
                                }
                            }, {
                                key: "on",
                                value: function(e, t) {
                                    this.events.on(e, t);
                                }
                            }, {
                                key: "switchVideo",
                                value: function(e, t) {
                                    this.pause(),
                                        this.video.poster = e.pic ? e.pic : "",
                                        this.video.src = e.url,
                                        this.initMSE(this.video, e.type || "auto"),
                                        t && (this.template.danmakuLoading.style.display = "block",
                                            this.bar.set("played", 0, "width"),
                                            this.bar.set("loaded", 0, "width"),
                                            this.template.ptime.innerHTML = "00:00",
                                            this.template.danmaku.innerHTML = "",
                                            this.danmaku && this.danmaku.reload({
                                                id: t.id,
                                                address: t.api,
                                                token: t.token,
                                                maximum: t.maximum,
                                                addition: t.addition,
                                                user: t.user
                                            }));
                                }
                            }, {
                                key: "initMSE",
                                value: function(e, t) {
                                    var n = this;
                                    if (this.type = t,
                                        this.options.video.customType && this.options.video.customType[t])
                                        "[object Function]" === Object.prototype.toString.call(this.options.video.customType[t]) ? this.options.video.customType[t](this.video, this) : console.error("Illegal customType: " + t);
                                    else
                                        switch ("auto" === this.type && (/m3u8(#|\?|$)/i.exec(e.src) ? this.type = "hls" : /.flv(#|\?|$)/i.exec(e.src) ? this.type = "flv" : /.mpd(#|\?|$)/i.exec(e.src) ? this.type = "dash" : this.type = "normal"),
                                            this.type) {
                                            case "hls":
                                                if (Hls)
                                                    if (Hls.isSupported()) {
                                                        var i = new Hls;
                                                        i.loadSource(e.src),
                                                            i.attachMedia(e);
                                                    } else
                                                        this.notice("Error: Hls is not supported.");
                                                else
                                                    this.notice("Error: Can't find Hls.");
                                                break;
                                            case "flv":
                                                if (flvjs && flvjs.isSupported())
                                                    if (flvjs.isSupported()) {
                                                        var a = flvjs.createPlayer({
                                                            type: "flv",
                                                            url: e.src
                                                        });
                                                        a.attachMediaElement(e),
                                                            a.load();
                                                    } else
                                                        this.notice("Error: flvjs is not supported.");
                                                else
                                                    this.notice("Error: Can't find flvjs.");
                                                break;
                                            case "dash":
                                                dashjs ? dashjs.MediaPlayer().create().initialize(e, e.src, !1) : this.notice("Error: Can't find dashjs.");
                                                break;
                                            case "webtorrent":
                                                if (WebTorrent)
                                                    if (WebTorrent.WEBRTC_SUPPORT) {
                                                        this.container.classList.add("dplayer-loading");
                                                        var o = new WebTorrent,
                                                            s = e.src;
                                                        o.add(s, function(e) {
                                                            e.files.find(function(e) {
                                                                return e.name.endsWith(".mp4")
                                                            }).renderTo(n.video, {
                                                                autoplay: n.options.autoplay
                                                            }, function() {
                                                                n.container.classList.remove("dplayer-loading");
                                                            });
                                                        });
                                                    } else
                                                        this.notice("Error: Webtorrent is not supported.");
                                                else
                                                    this.notice("Error: Can't find Webtorrent.");
                                        }
                                }
                            }, {
                                key: "initVideo",
                                value: function(e, t) {
                                    var n = this;
                                    this.initMSE(e, t),
                                        this.on("durationchange", function() {
                                            1 !== e.duration && (n.template.dtime.innerHTML = c.default.secondToTime(e.duration));
                                        }),
                                        this.on("progress", function() {
                                            var t = e.buffered.length ? e.buffered.end(e.buffered.length - 1) / e.duration : 0;
                                            n.bar.set("loaded", t, "width");
                                        }),
                                        this.on("error", function() {
                                            n.tran && n.notice && (n.type,
                                                n.notice(n.tran("This video fails to load"), -1));
                                        }),
                                        this.ended = !1,
                                        this.on("ended", function() {
                                            n.bar.set("played", 1, "width"),
                                                n.setting.loop ? (n.seek(0),
                                                    e.play()) : (n.ended = !0,
                                                    n.pause()),
                                                n.danmaku && (n.danmaku.danIndex = 0);
                                        }),
                                        this.on("play", function() {
                                            n.paused && n.play();
                                        }),
                                        this.on("pause", function() {
                                            n.paused || n.pause();
                                        });
                                    for (var i = 0; i < this.events.videoEvents.length; i++)
                                        ! function(t) {
                                            e.addEventListener(n.events.videoEvents[t], function() {
                                                n.events.trigger(n.events.videoEvents[t]);
                                            });
                                        }(i);
                                    this.volume(this.user.get("volume"), !0, !0),
                                        this.options.subtitle && (this.subtitle = new q.default(this.template.subtitle, this.video, this.options.subtitle, this.events),
                                            this.user.get("subtitle") || this.subtitle.hide());
                                }
                            }, {
                                key: "switchQuality",
                                value: function(e) {
                                    var t = this;
                                    if (this.qualityIndex !== e && !this.switchingQuality) {
                                        this.qualityIndex = e,
                                            this.switchingQuality = !0,
                                            this.quality = this.options.video.quality[e],
                                            this.template.qualityButton.innerHTML = this.quality.name;
                                        var n = this.video.paused;
                                        this.video.pause();
                                        var i = (0,
                                                $.default)({
                                                current: !1,
                                                pic: null,
                                                screenshot: this.options.screenshot,
                                                preload: "auto",
                                                url: this.quality.url,
                                                subtitle: this.options.subtitle
                                            }),
                                            a = (new DOMParser).parseFromString(i, "text/html").body.firstChild;
                                        this.template.videoWrap.insertBefore(a, this.template.videoWrap.getElementsByTagName("div")[0]),
                                            this.prevVideo = this.video,
                                            this.video = a,
                                            this.initVideo(this.video, this.quality.type || this.options.video.type),
                                            this.seek(this.prevVideo.currentTime),
                                            this.notice(this.tran("Switching to") + " " + this.quality.name + " " + this.tran("quality"), -1),
                                            this.events.trigger("quality_start", this.quality),
                                            this.on("canplay", function() {
                                                if (t.prevVideo) {
                                                    if (t.video.currentTime !== t.prevVideo.currentTime)
                                                        return void t.seek(t.prevVideo.currentTime);
                                                    t.template.videoWrap.removeChild(t.prevVideo),
                                                        t.video.classList.add("dplayer-video-current"),
                                                        n || t.video.play(),
                                                        t.prevVideo = null,
                                                        t.notice(t.tran("Switched to") + " " + t.quality.name + " " + t.tran("quality")),
                                                        t.switchingQuality = !1,
                                                        t.events.trigger("quality_end");
                                                }
                                            });
                                    }
                                }
                            }, {
                                key: "notice",
                                value: function(e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8;
                                    this.template.notice.innerHTML = e,
                                        this.template.notice.style.opacity = i,
                                        this.noticeTime && clearTimeout(this.noticeTime),
                                        this.events.trigger("notice_show", e),
                                        this.noticeTime = setTimeout(function() {
                                            t.template.notice.style.opacity = 0,
                                                t.events.trigger("notice_hide");
                                        }, n);
                                }
                            }, {
                                key: "resize",
                                value: function() {
                                    this.danmaku && this.danmaku.resize(),
                                        this.events.trigger("resize");
                                }
                            }, {
                                key: "speed",
                                value: function(e) {
                                    this.video.playbackRate = e;
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    J.splice(J.indexOf(this), 1),
                                        this.pause(),
                                        this.controller.destroy(),
                                        this.time.destroy(),
                                        this.video.src = "",
                                        this.container.innerHTML = "",
                                        this.events.trigger("destroy");
                                    for (var e in this)
                                        this.hasOwnProperty(e) && "paused" !== e && delete this[e];
                                }
                            }]),
                            e
                    }();
                t.default = Y;
            }, function(e, t, n) {
                (function(t) {
                    function n() {}

                    function i(e, t) {
                        return function() {
                            e.apply(t, arguments);
                        }
                    }

                    function a(e) {
                        if (!(this instanceof a))
                            throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof e)
                            throw new TypeError("not a function");
                        this._state = 0,
                            this._handled = !1,
                            this._value = void 0,
                            this._deferreds = [],
                            u(e, this);
                    }

                    function o(e, t) {
                        for (; 3 === e._state;)
                            e = e._value;
                        if (0 === e._state)
                            return void e._deferreds.push(t);
                        e._handled = !0,
                            a._immediateFn(function() {
                                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                                if (null === n)
                                    return void(1 === e._state ? s : r)(t.promise, e._value);
                                var i;
                                try {
                                    i = n(e._value);
                                } catch (e) {
                                    return void r(t.promise, e)
                                }
                                s(t.promise, i);
                            });
                    }

                    function s(e, t) {
                        try {
                            if (t === e)
                                throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" === (void 0 === t ? "undefined" : d(t)) || "function" == typeof t)) {
                                var n = t.then;
                                if (t instanceof a)
                                    return e._state = 3,
                                        e._value = t,
                                        void l(e);
                                if ("function" == typeof n)
                                    return void u(i(n, t), e)
                            }
                            e._state = 1,
                                e._value = t,
                                l(e);
                        } catch (t) {
                            r(e, t);
                        }
                    }

                    function r(e, t) {
                        e._state = 2,
                            e._value = t,
                            l(e);
                    }

                    function l(e) {
                        2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
                            e._handled || a._unhandledRejectionFn(e._value);
                        });
                        for (var t = 0, n = e._deferreds.length; t < n; t++)
                            o(e, e._deferreds[t]);
                        e._deferreds = null;
                    }

                    function c(e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null,
                            this.onRejected = "function" == typeof t ? t : null,
                            this.promise = n;
                    }

                    function u(e, t) {
                        var n = !1;
                        try {
                            e(function(e) {
                                n || (n = !0,
                                    s(t, e));
                            }, function(e) {
                                n || (n = !0,
                                    r(t, e));
                            });
                        } catch (e) {
                            if (n)
                                return;
                            n = !0,
                                r(t, e);
                        }
                    }
                    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } :
                        function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        p = setTimeout;
                    a.prototype.catch = function(e) {
                            return this.then(null, e)
                        },
                        a.prototype.then = function(e, t) {
                            var i = new this.constructor(n);
                            return o(this, new c(e, t, i)),
                                i
                        },
                        a.prototype.finally = function(e) {
                            var t = this.constructor;
                            return this.then(function(n) {
                                return t.resolve(e()).then(function() {
                                    return n
                                })
                            }, function(n) {
                                return t.resolve(e()).then(function() {
                                    return t.reject(n)
                                })
                            })
                        },
                        a.all = function(e) {
                            return new a(function(t, n) {
                                function i(e, s) {
                                    try {
                                        if (s && ("object" === (void 0 === s ? "undefined" : d(s)) || "function" == typeof s)) {
                                            var r = s.then;
                                            if ("function" == typeof r)
                                                return void r.call(s, function(t) {
                                                    i(e, t);
                                                }, n)
                                        }
                                        a[e] = s,
                                            0 == --o && t(a);
                                    } catch (e) {
                                        n(e);
                                    }
                                }
                                if (!e || void 0 === e.length)
                                    throw new TypeError("Promise.all accepts an array");
                                var a = Array.prototype.slice.call(e);
                                if (0 === a.length)
                                    return t([]);
                                for (var o = a.length, s = 0; s < a.length; s++)
                                    i(s, a[s]);
                            })
                        },
                        a.resolve = function(e) {
                            return e && "object" === (void 0 === e ? "undefined" : d(e)) && e.constructor === a ? e : new a(function(t) {
                                t(e);
                            })
                        },
                        a.reject = function(e) {
                            return new a(function(t, n) {
                                n(e);
                            })
                        },
                        a.race = function(e) {
                            return new a(function(t, n) {
                                for (var i = 0, a = e.length; i < a; i++)
                                    e[i].then(t, n);
                            })
                        },
                        a._immediateFn = "function" == typeof t && function(e) {
                            t(e);
                        } ||
                        function(e) {
                            p(e, 0);
                        },
                        a._unhandledRejectionFn = function(e) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
                        },
                        e.exports = a;
                }).call(t, n(9).setImmediate);
            }, function(e, t, n) {
                function i(e, t) {
                    this._id = e,
                        this._clearFn = t;
                }
                var a = Function.prototype.apply;
                t.setTimeout = function() {
                        return new i(a.call(setTimeout, window, arguments), clearTimeout)
                    },
                    t.setInterval = function() {
                        return new i(a.call(setInterval, window, arguments), clearInterval)
                    },
                    t.clearTimeout = t.clearInterval = function(e) {
                        e && e.close();
                    },
                    i.prototype.unref = i.prototype.ref = function() {},
                    i.prototype.close = function() {
                        this._clearFn.call(window, this._id);
                    },
                    t.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = t;
                    },
                    t.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = -1;
                    },
                    t._unrefActive = t.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout();
                        }, t));
                    },
                    n(10),
                    t.setImmediate = setImmediate,
                    t.clearImmediate = clearImmediate;
            }, function(e, t, n) {
                (function(e, t) {
                    ! function(e, n) {
                        function i(e) {
                            "function" != typeof e && (e = new Function("" + e));
                            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                                t[n] = arguments[n + 1];
                            var i = {
                                callback: e,
                                args: t
                            };
                            return c[l] = i,
                                r(l),
                                l++
                        }

                        function a(e) {
                            delete c[e];
                        }

                        function o(e) {
                            var t = e.callback,
                                i = e.args;
                            switch (i.length) {
                                case 0:
                                    t();
                                    break;
                                case 1:
                                    t(i[0]);
                                    break;
                                case 2:
                                    t(i[0], i[1]);
                                    break;
                                case 3:
                                    t(i[0], i[1], i[2]);
                                    break;
                                default:
                                    t.apply(n, i);
                            }
                        }

                        function s(e) {
                            if (u)
                                setTimeout(s, 0, e);
                            else {
                                var t = c[e];
                                if (t) {
                                    u = !0;
                                    try {
                                        o(t);
                                    } finally {
                                        a(e),
                                            u = !1;
                                    }
                                }
                            }
                        }
                        if (!e.setImmediate) {
                            var r, l = 1,
                                c = {},
                                u = !1,
                                d = e.document,
                                p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                            p = p && p.setTimeout ? p : e,
                                "[object process]" === {}.toString.call(e.process) ? function() {
                                    r = function(e) {
                                        t.nextTick(function() {
                                            s(e);
                                        });
                                    };
                                }() : function() {
                                    if (e.postMessage && !e.importScripts) {
                                        var t = !0,
                                            n = e.onmessage;
                                        return e.onmessage = function() {
                                                t = !1;
                                            },
                                            e.postMessage("", "*"),
                                            e.onmessage = n,
                                            t
                                    }
                                }() ? function() {
                                    var t = "setImmediate$" + Math.random() + "$",
                                        n = function(n) {
                                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && s(+n.data.slice(t.length));
                                        };
                                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                                        r = function(n) {
                                            e.postMessage(t + n, "*");
                                        };
                                }() : e.MessageChannel ? function() {
                                    var e = new MessageChannel;
                                    e.port1.onmessage = function(e) {
                                            s(e.data);
                                        },
                                        r = function(t) {
                                            e.port2.postMessage(t);
                                        };
                                }() : d && "onreadystatechange" in d.createElement("script") ? function() {
                                    var e = d.documentElement;
                                    r = function(t) {
                                        var n = d.createElement("script");
                                        n.onreadystatechange = function() {
                                                s(t),
                                                    n.onreadystatechange = null,
                                                    e.removeChild(n),
                                                    n = null;
                                            },
                                            e.appendChild(n);
                                    };
                                }() : function() {
                                    r = function(e) {
                                        setTimeout(s, 0, e);
                                    };
                                }(),
                                p.setImmediate = i,
                                p.clearImmediate = a;
                        }
                    }("undefined" == typeof self ? void 0 === e ? void 0 : e : self);
                }).call(t, n(1), n(11));
            }, function(e, t, n) {
                function i() {
                    throw new Error("setTimeout has not been defined")
                }

                function a() {
                    throw new Error("clearTimeout has not been defined")
                }

                function o(e) {
                    if (d === setTimeout)
                        return setTimeout(e, 0);
                    if ((d === i || !d) && setTimeout)
                        return d = setTimeout,
                            setTimeout(e, 0);
                    try {
                        return d(e, 0)
                    } catch (t) {
                        try {
                            return d.call(null, e, 0)
                        } catch (t) {
                            return d.call(this, e, 0)
                        }
                    }
                }

                function s(e) {
                    if (p === clearTimeout)
                        return clearTimeout(e);
                    if ((p === a || !p) && clearTimeout)
                        return p = clearTimeout,
                            clearTimeout(e);
                    try {
                        return p(e)
                    } catch (t) {
                        try {
                            return p.call(null, e)
                        } catch (t) {
                            return p.call(this, e)
                        }
                    }
                }

                function r() {
                    f && y && (f = !1,
                        y.length ? m = y.concat(m) : v = -1,
                        m.length && l());
                }

                function l() {
                    if (!f) {
                        var e = o(r);
                        f = !0;
                        for (var t = m.length; t;) {
                            for (y = m,
                                m = []; ++v < t;)
                                y && y[v].run();
                            v = -1,
                                t = m.length;
                        }
                        y = null,
                            f = !1,
                            s(e);
                    }
                }

                function c(e, t) {
                    this.fun = e,
                        this.array = t;
                }

                function u() {}
                var d, p, h = e.exports = {};
                ! function() {
                    try {
                        d = "function" == typeof setTimeout ? setTimeout : i;
                    } catch (e) {
                        d = i;
                    }
                    try {
                        p = "function" == typeof clearTimeout ? clearTimeout : a;
                    } catch (e) {
                        p = a;
                    }
                }();
                var y, m = [],
                    f = !1,
                    v = -1;
                h.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                        m.push(new c(e, t)),
                            1 !== m.length || f || o(l);
                    },
                    c.prototype.run = function() {
                        this.fun.apply(null, this.array);
                    },
                    h.title = "browser",
                    h.browser = !0,
                    h.env = {},
                    h.argv = [],
                    h.version = "",
                    h.versions = {},
                    h.on = u,
                    h.addListener = u,
                    h.once = u,
                    h.off = u,
                    h.removeListener = u,
                    h.removeAllListeners = u,
                    h.emit = u,
                    h.prependListener = u,
                    h.prependOnceListener = u,
                    h.listeners = function(e) {
                        return []
                    },
                    h.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    },
                    h.cwd = function() {
                        return "/"
                    },
                    h.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    },
                    h.umask = function() {
                        return 0
                    };
            }, function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } :
                    function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    a = n(13),
                    o = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(a);
                t.default = function(e) {
                    var t = {
                        container: e.element || document.getElementsByClassName("dplayer")[0],
                        live: !1,
                        autoplay: !1,
                        theme: "#b7daff",
                        loop: !1,
                        lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
                        screenshot: !1,
                        hotkey: !0,
                        preload: "auto",
                        volume: .7,
                        apiBackend: o.default,
                        video: {},
                        contextmenu: [],
                        mutex: !0
                    };
                    for (var n in t)
                        t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
                    return e.video && !e.video.type && (e.video.type = "auto"),
                        "object" === i(e.danmaku) && e.danmaku && !e.danmaku.user && (e.danmaku.user = "DIYgod"),
                        e.subtitle && (!e.subtitle.type && (e.subtitle.type = "webvtt"), !e.subtitle.fontSize && (e.subtitle.fontSize = "20px"), !e.subtitle.bottom && (e.subtitle.bottom = "40px"), !e.subtitle.color && (e.subtitle.color = "#fff")),
                        e.video.quality && (e.video.url = e.video.quality[e.video.defaultQuality].url),
                        e.lang && (e.lang = e.lang.toLowerCase()),
                        e.contextmenu = e.contextmenu.concat([{
                            text: "Video info",
                            click: function(e) {
                                e.infoPanel.triggle();
                            }
                        }, {
                            text: "About author",
                            link: "https://diygod.me"
                        }, {
                            text: "DPlayer v1.22.2",
                            link: "https://github.com/MoePlayer/DPlayer"
                        }]),
                        e
                };
            }, function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function(e, t, n, i, a) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function() {
                            if (4 === o.readyState) {
                                if (o.status >= 200 && o.status < 300 || 304 === o.status) {
                                    var e = JSON.parse(o.responseText);
                                    return 0 !== e.code ? i(o, e) : n(o, e)
                                }
                                a(o);
                            }
                        },
                        o.open(null !== t ? "POST" : "GET", e, !0),
                        o.setRequestHeader("Content-type", "application/json; charset=UTF-8"),
                        o.send(null !== t ? JSON.stringify(t) : null);
                };
                t.default = {
                    send: function(e, t, n) {
                        i(e, t, function(e, t) {
                            console.log("Post danmaku: ", t),
                                n && n();
                        }, function(e, t) {
                            alert(t.msg);
                        }, function(e) {
                            console.log("Request was unsuccessful: " + e.status);
                        });
                    },
                    read: function(e, t) {
                        i(e, null, function(e, n) {
                            t(null, n.danmaku);
                        }, function(e, n) {
                            t({
                                status: e.status,
                                response: n
                            });
                        }, function(e) {
                            t({
                                status: e.status,
                                response: null
                            });
                        });
                    }
                };
            }, function(e, t, n) {
                function i(e) {
                    var t = this;
                    this.lang = e,
                        this.tran = function(e) {
                            return a[t.lang] && a[t.lang][e] ? a[t.lang][e] : e
                        };
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = {
                    "zh-cn": {
                        "Danmaku is loading": "\u5f39\u5e55\u52a0\u8f7d\u4e2d",
                        Top: "\u9876\u90e8",
                        Bottom: "\u5e95\u90e8",
                        Rolling: "\u6eda\u52a8",
                        "Input danmaku, hit Enter": "\u8f93\u5165\u5f39\u5e55\uff0c\u56de\u8f66\u53d1\u9001",
                        "About author": "\u5173\u4e8e\u4f5c\u8005",
                        "DPlayer feedback": "\u64ad\u653e\u5668\u610f\u89c1\u53cd\u9988",
                        "About DPlayer": "\u5173\u4e8e DPlayer \u64ad\u653e\u5668",
                        Loop: "\u6d17\u8111\u5faa\u73af",
                        Speed: "\u901f\u5ea6",
                        "Opacity for danmaku": "\u5f39\u5e55\u900f\u660e\u5ea6",
                        Normal: "\u6b63\u5e38",
                        "Please input danmaku content!": "\u8981\u8f93\u5165\u5f39\u5e55\u5185\u5bb9\u554a\u5582\uff01",
                        "Set danmaku color": "\u8bbe\u7f6e\u5f39\u5e55\u989c\u8272",
                        "Set danmaku type": "\u8bbe\u7f6e\u5f39\u5e55\u7c7b\u578b",
                        "Show danmaku": "\u663e\u793a\u5f39\u5e55",
                        "This video fails to load": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25",
                        "Switching to": "\u6b63\u5728\u5207\u6362\u81f3",
                        "Switched to": "\u5df2\u7ecf\u5207\u6362\u81f3",
                        quality: "\u753b\u8d28",
                        FF: "\u5feb\u8fdb",
                        REW: "\u5feb\u9000",
                        "Unlimited danmaku": "\u6d77\u91cf\u5f39\u5e55",
                        "Send danmaku": "\u53d1\u9001\u5f39\u5e55",
                        Setting: "\u8bbe\u7f6e",
                        "Full screen": "\u5168\u5c4f",
                        "Web full screen": "\u9875\u9762\u5168\u5c4f",
                        Send: "\u53d1\u9001",
                        Screenshot: "\u622a\u56fe",
                        s: "\u79d2",
                        "Show subtitle": "\u663e\u793a\u5b57\u5e55",
                        "Hide subtitle": "\u9690\u85cf\u5b57\u5e55",
                        Volume: "\u97f3\u91cf",
                        Live: "\u76f4\u64ad",
                        "Video info": "\u89c6\u9891\u7edf\u8ba1\u4fe1\u606f"
                    },
                    "zh-tw": {
                        "Danmaku is loading": "\u5f48\u5e55\u52a0\u8f09\u4e2d",
                        Top: "\u9802\u90e8",
                        Bottom: "\u5e95\u90e8",
                        Rolling: "\u6efe\u52d5",
                        "Input danmaku, hit Enter": "\u8f38\u5165\u5f48\u5e55\uff0cEnter \u767c\u9001",
                        "About author": "\u95dc\u65bc\u4f5c\u8005",
                        "DPlayer feedback": "\u64ad\u653e\u5668\u610f\u898b\u53cd\u994b",
                        "About DPlayer": "\u95dc\u65bc DPlayer \u64ad\u653e\u5668",
                        Loop: "\u5faa\u74b0\u64ad\u653e",
                        Speed: "\u901f\u5ea6",
                        "Opacity for danmaku": "\u5f48\u5e55\u900f\u660e\u5ea6",
                        Normal: "\u6b63\u5e38",
                        "Please input danmaku content!": "\u8acb\u8f38\u5165\u5f48\u5e55\u5185\u5bb9\u554a\uff01",
                        "Set danmaku color": "\u8a2d\u7f6e\u5f48\u5e55\u984f\u8272",
                        "Set danmaku type": "\u8a2d\u7f6e\u5f48\u5e55\u985e\u578b",
                        "Show danmaku": "\u986f\u793a\u5f48\u5e55",
                        "This video fails to load": "\u8996\u983b\u52a0\u8f09\u5931\u6557",
                        "Switching to": "\u6b63\u5728\u5207\u63db\u81f3",
                        "Switched to": "\u5df2\u7d93\u5207\u63db\u81f3",
                        quality: "\u756b\u8cea",
                        FF: "\u5feb\u9032",
                        REW: "\u5feb\u9000",
                        "Unlimited danmaku": "\u6d77\u91cf\u5f48\u5e55",
                        "Send danmaku": "\u767c\u9001\u5f48\u5e55",
                        Setting: "\u8a2d\u7f6e",
                        "Full screen": "\u5168\u5c4f",
                        "Web full screen": "\u9801\u9762\u5168\u5c4f",
                        Send: "\u767c\u9001",
                        Screenshot: "\u622a\u5716",
                        s: "\u79d2",
                        "Show subtitle": "\u986f\u793a\u5b57\u5e55",
                        "Hide subtitle": "\u96b1\u85cf\u5b57\u5e55",
                        Volume: "\u97f3\u91cf",
                        Live: "\u76f4\u64ad",
                        "Video info": "\u8996\u983b\u7d71\u8a08\u4fe1\u606f"
                    }
                };
                t.default = i;
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function a(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    s = n(2),
                    r = i(s),
                    l = n(32),
                    c = i(l),
                    u = function() {
                        function e(t) {
                            a(this, e),
                                this.container = t.container,
                                this.options = t.options,
                                this.index = t.index,
                                this.tran = t.tran,
                                this.init();
                        }
                        return o(e, [{
                                key: "init",
                                value: function() {
                                    this.container.innerHTML = (0,
                                            c.default)({
                                            options: this.options,
                                            index: this.index,
                                            tran: this.tran,
                                            icons: r.default,
                                            video: {
                                                current: !0,
                                                pic: this.options.video.pic,
                                                screenshot: this.options.screenshot,
                                                preload: this.options.preload,
                                                url: this.options.video.url,
                                                subtitle: this.options.subtitle
                                            }
                                        }),
                                        this.volumeBar = this.container.querySelector(".dplayer-volume-bar-inner"),
                                        this.volumeBarWrap = this.container.querySelector(".dplayer-volume-bar"),
                                        this.volumeBarWrapWrap = this.container.querySelector(".dplayer-volume-bar-wrap"),
                                        this.volumeButton = this.container.querySelector(".dplayer-volume"),
                                        this.volumeIcon = this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),
                                        this.playedBar = this.container.querySelector(".dplayer-played"),
                                        this.loadedBar = this.container.querySelector(".dplayer-loaded"),
                                        this.playedBarWrap = this.container.querySelector(".dplayer-bar-wrap"),
                                        this.playedBarTime = this.container.querySelector(".dplayer-bar-time"),
                                        this.danmaku = this.container.querySelector(".dplayer-danmaku"),
                                        this.danmakuLoading = this.container.querySelector(".dplayer-danloading"),
                                        this.video = this.container.querySelector(".dplayer-video-current"),
                                        this.bezel = this.container.querySelector(".dplayer-bezel-icon"),
                                        this.playButton = this.container.querySelector(".dplayer-play-icon"),
                                        this.videoWrap = this.container.querySelector(".dplayer-video-wrap"),
                                        this.controllerMask = this.container.querySelector(".dplayer-controller-mask"),
                                        this.ptime = this.container.querySelector(".dplayer-ptime"),
                                        this.settingButton = this.container.querySelector(".dplayer-setting-icon"),
                                        this.settingBox = this.container.querySelector(".dplayer-setting-box"),
                                        this.mask = this.container.querySelector(".dplayer-mask"),
                                        this.loop = this.container.querySelector(".dplayer-setting-loop"),
                                        this.loopToggle = this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),
                                        this.showDanmaku = this.container.querySelector(".dplayer-setting-showdan"),
                                        this.showDanmakuToggle = this.container.querySelector(".dplayer-showdan-setting-input"),
                                        this.unlimitDanmaku = this.container.querySelector(".dplayer-setting-danunlimit"),
                                        this.unlimitDanmakuToggle = this.container.querySelector(".dplayer-danunlimit-setting-input"),
                                        this.speed = this.container.querySelector(".dplayer-setting-speed"),
                                        this.speedItem = this.container.querySelectorAll(".dplayer-setting-speed-item"),
                                        this.danmakuOpacityBar = this.container.querySelector(".dplayer-danmaku-bar-inner"),
                                        this.danmakuOpacityBarWrap = this.container.querySelector(".dplayer-danmaku-bar"),
                                        this.danmakuOpacityBarWrapWrap = this.container.querySelector(".dplayer-danmaku-bar-wrap"),
                                        this.danmakuOpacityBox = this.container.querySelector(".dplayer-setting-danmaku"),
                                        this.dtime = this.container.querySelector(".dplayer-dtime"),
                                        this.controller = this.container.querySelector(".dplayer-controller"),
                                        this.commentInput = this.container.querySelector(".dplayer-comment-input"),
                                        this.commentButton = this.container.querySelector(".dplayer-comment-icon"),
                                        this.commentSettingBox = this.container.querySelector(".dplayer-comment-setting-box"),
                                        this.commentSettingButton = this.container.querySelector(".dplayer-comment-setting-icon"),
                                        this.commentSettingFill = this.container.querySelector(".dplayer-comment-setting-icon path"),
                                        this.commentSendButton = this.container.querySelector(".dplayer-send-icon"),
                                        this.commentSendFill = this.container.querySelector(".dplayer-send-icon path"),
                                        this.commentColorSettingBox = this.container.querySelector(".dplayer-comment-setting-color"),
                                        this.browserFullButton = this.container.querySelector(".dplayer-full-icon"),
                                        this.webFullButton = this.container.querySelector(".dplayer-full-in-icon"),
                                        this.menu = this.container.querySelector(".dplayer-menu"),
                                        this.menuItem = this.container.querySelectorAll(".dplayer-menu-item"),
                                        this.qualityList = this.container.querySelector(".dplayer-quality-list"),
                                        this.camareButton = this.container.querySelector(".dplayer-camera-icon"),
                                        this.subtitleButton = this.container.querySelector(".dplayer-subtitle-icon"),
                                        this.subtitleButtonInner = this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),
                                        this.subtitle = this.container.querySelector(".dplayer-subtitle"),
                                        this.qualityButton = this.container.querySelector(".dplayer-quality-icon"),
                                        this.barPreview = this.container.querySelector(".dplayer-bar-preview"),
                                        this.barWrap = this.container.querySelector(".dplayer-bar-wrap"),
                                        this.notice = this.container.querySelector(".dplayer-notice"),
                                        this.infoPanel = this.container.querySelector(".dplayer-info-panel"),
                                        this.infoPanelClose = this.container.querySelector(".dplayer-info-panel-close"),
                                        this.infoVersion = this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),
                                        this.infoFPS = this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),
                                        this.infoType = this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),
                                        this.infoUrl = this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),
                                        this.infoResolution = this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),
                                        this.infoDuration = this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),
                                        this.infoDanmakuId = this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),
                                        this.infoDanmakuApi = this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),
                                        this.infoDanmakuAmount = this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data");
                                }
                            }]),
                            e
                    }();
                t.default = u;
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
            }, function(e, t) {
                e.exports = '<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>';
            }, function(e, t, n) {
                var i = n(3);
                e.exports = function(e) {
                    e = e || {};
                    var t = "",
                        a = (e.video),
                        o = e.options,
                        s = i.$escape,
                        r = e.tran,
                        l = e.icons,
                        c = e.index,
                        u = i.$each;
                    e.$value,
                        e.$index;
                    return t += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ',
                        function(e) {
                            t += e;
                        }(n(4)(a)),
                        t += "\n    ",
                        o.logo && (t += '\n    <div class="dplayer-logo">\n        <img src="',
                            t += s(o.logo),
                            t += '">\n    </div>\n    '),
                        t += '\n    <div class="dplayer-danmaku"',
                        o.danmaku && o.danmaku.bottm && (t += ' style="margin-bottom:',
                            t += s(o.danmaku.bottm),
                            t += '"'),
                        t += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ',
                        o.danmaku && (t += '\n        <span class="dplayer-danloading">',
                            t += s(r("Danmaku is loading")),
                            t += "</span>\n        "),
                        t += '\n        <span class="diplayer-loading-icon">',
                        t += l.loading,
                        t += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="',
                        t += s(r("Setting")),
                        t += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
                        t += l.pallette,
                        t += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">',
                        t += s(r("Set danmaku color")),
                        t += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
                        t += s(c),
                        t += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
                        t += s(c),
                        t += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
                        t += s(c),
                        t += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
                        t += s(c),
                        t += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
                        t += s(c),
                        t += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
                        t += s(c),
                        t += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">',
                        t += s(r("Set danmaku type")),
                        t += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',
                        t += s(c),
                        t += '" value="top">\n                    <span>',
                        t += s(r("Top")),
                        t += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',
                        t += s(c),
                        t += '" value="right" checked>\n                    <span>',
                        t += s(r("Rolling")),
                        t += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',
                        t += s(c),
                        t += '" value="bottom">\n                    <span>',
                        t += s(r("Bottom")),
                        t += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="',
                        t += s(r("Input danmaku, hit Enter")),
                        t += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="',
                        t += s(r("Send")),
                        t += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
                        t += l.send,
                        t += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">',
                        t += l.play,
                        t += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">',
                        t += l.volumeDown,
                        t += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ',
                        t += s(o.theme),
                        t += ';">\n                        <span class="dplayer-thumb" style="background: ',
                        t += s(o.theme),
                        t += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> \n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ',
                        o.live && (t += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ',
                            t += s(o.theme),
                            t += ';"></span>',
                            t += s(r("Live")),
                            t += "</span>\n        "),
                        t += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right" style="display:none">\n        ',
                        o.video.quality && (t += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">',
                            t += s(o.video.quality[o.video.defaultQuality].name),
                            t += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ',
                            u(o.video.quality, function(e, n) {
                                t += '\n                    <div class="dplayer-quality-item" data-index="',
                                    t += s(n),
                                    t += '">',
                                    t += s(e.name),
                                    t += "</div>\n                ";
                            }),
                            t += "\n                </div>\n            </div>\n        </div>\n        "),
                        t += "\n        ",
                        o.screenshot && (t += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="',
                            t += s(r("Screenshot")),
                            t += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
                            t += l.camera,
                            t += "</span>\n        </div>\n        "),
                        t += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="',
                        t += s(r("Send danmaku")),
                        t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
                        t += l.comment,
                        t += "</span>\n            </button>\n        </div>\n        ",
                        o.subtitle && (t += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="',
                            t += s(r("Hide subtitle")),
                            t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
                            t += l.subtitle,
                            t += "</span>\n            </button>\n        </div>\n        "),
                        t += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="',
                        t += s(r("Setting")),
                        t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
                        t += l.setting,
                        t += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">',
                        t += s(r("Speed")),
                        t += '</span>\n                        <div class="dplayer-toggle">',
                        t += l.right,
                        t += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">',
                        t += s(r("Loop")),
                        t += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">',
                        t += s(r("Show danmaku")),
                        t += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">',
                        t += s(r("Unlimited danmaku")),
                        t += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">',
                        t += s(r("Opacity for danmaku")),
                        t += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    <div class="dplayer-setting-speed-item" data-speed="0.5">\n                        <span class="dplayer-label">0.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="0.75">\n                        <span class="dplayer-label">0.75</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1">\n                        <span class="dplayer-label">',
                        t += s(r("Normal")),
                        t += '</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.25">\n                        <span class="dplayer-label">1.25</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.5">\n                        <span class="dplayer-label">1.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="2">\n                        <span class="dplayer-label">2</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="',
                        t += s(r("Web full screen")),
                        t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
                        t += l.fullWeb,
                        t += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="',
                        t += s(r("Full screen")),
                        t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
                        t += l.full,
                        t += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ',
                        t += s(o.theme),
                        t += '">\n                <span class="dplayer-thumb" style="background: ',
                        t += s(o.theme),
                        t += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ',
                        o.danmaku && (t += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danamku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danamku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danamku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '),
                        t += '\n</div>\n<div class="dplayer-menu">\n    ',
                        u(o.contextmenu, function(e, n) {
                            t += '\n        <div class="dplayer-menu-item">\n            <a target="_blank" href="',
                                t += s(e.link || "javascript:void(0);"),
                                t += '">',
                                t += s(r(e.text)),
                                t += "</a>\n        </div>\n    ";
                        }),
                        t += '\n</div>\n<div class="dplayer-notice"></div>'
                };
            }, function(e, t, n) {
                (function(t) {
                    function i(e) {
                        return "string" != typeof e && (e = void 0 === e || null === e ? "" : "function" == typeof e ? i(e.call(e)) : JSON.stringify(e)),
                            e
                    }

                    function a(e) {
                        var t = "" + e,
                            n = r.exec(t);
                        if (!n)
                            return e;
                        var i = "",
                            a = void 0,
                            o = void 0,
                            s = void 0;
                        for (a = n.index,
                            o = 0; a < t.length; a++) {
                            switch (t.charCodeAt(a)) {
                                case 34:
                                    s = "&#34;";
                                    break;
                                case 38:
                                    s = "&#38;";
                                    break;
                                case 39:
                                    s = "&#39;";
                                    break;
                                case 60:
                                    s = "&#60;";
                                    break;
                                case 62:
                                    s = "&#62;";
                                    break;
                                default:
                                    continue
                            }
                            o !== a && (i += t.substring(o, a)),
                                o = a + 1,
                                i += s;
                        }
                        return o !== a ? i + t.substring(o, a) : i
                    }
                    var o = n(34),
                        s = Object.create(o ? t : window),
                        r = /["&'<>]/;
                    s.$escape = function(e) {
                            return a(i(e))
                        },
                        s.$each = function(e, t) {
                            if (Array.isArray(e))
                                for (var n = 0, i = e.length; n < i; n++)
                                    t(e[n], n);
                            else
                                for (var a in e)
                                    t(e[a], a);
                        },
                        e.exports = s;
                }).call(t, n(1));
            }, function(e, t, n) {
                (function(t) {
                    e.exports = !1;
                    try {
                        e.exports = "[object process]" === Object.prototype.toString.call(t.process);
                    } catch (e) {}
                }).call(t, n(1));
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } :
                    function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    s = function() {
                        function e(t) {
                            i(this, e),
                                this.options = t,
                                this.container = this.options.container,
                                this.danTunnel = {
                                    right: {},
                                    top: {},
                                    bottom: {}
                                },
                                this.danIndex = 0,
                                this.dan = [],
                                this.showing = !0,
                                this._opacity = this.options.opacity,
                                this.events = this.options.events,
                                this.unlimited = this.options.unlimited,
                                this._measure(""),
                                this.load();
                        }
                        return o(e, [{
                                key: "load",
                                value: function() {
                                    var e = this,
                                        t = void 0;
                                    t = this.options.api.maximum ? this.options.api.address + "v2/?id=" + this.options.api.id + "&max=" + this.options.api.maximum : this.options.api.address + "v2/?id=" + this.options.api.id;
                                    var n = (this.options.api.addition || []).slice(0);
                                    n.push(t),
                                        this.events && this.events.trigger("danmaku_load_start", n),
                                        this._readAllEndpoints(n, function(t) {
                                            e.dan = [].concat.apply([], t).sort(function(e, t) {
                                                    return e.time - t.time
                                                }),
                                                window.requestAnimationFrame(function() {
                                                    e.frame();
                                                }),
                                                e.options.callback(),
                                                e.events && e.events.trigger("danmaku_load_end");
                                        });
                                }
                            }, {
                                key: "reload",
                                value: function(e) {
                                    this.options.api = e,
                                        this.dan = [],
                                        this.clear(),
                                        this.load();
                                }
                            }, {
                                key: "_readAllEndpoints",
                                value: function(e, t) {
                                    for (var n = this, i = [], a = 0, o = 0; o < e.length; ++o)
                                        this.options.apiBackend.read(e[o], function(o) {
                                            return function(s, r) {
                                                if (++a,
                                                    s)
                                                    s.response ? n.options.error(s.response.msg) : n.options.error("Request was unsuccessful: " + s.status),
                                                    i[o] = [];
                                                else {
                                                    var l = ["right", "top", "bottom"];
                                                    i[o] = r ? r.map(function(e) {
                                                        return {
                                                            time: e[0],
                                                            type: l[e[1]],
                                                            color: e[2],
                                                            author: e[3],
                                                            text: e[4]
                                                        }
                                                    }) : [];
                                                }
                                                if (a === e.length)
                                                    return t(i)
                                            }
                                        }(o));
                                }
                            }, {
                                key: "send",
                                value: function(e, t) {
                                    var n = {
                                        token: this.options.api.token,
                                        player: this.options.api.id,
                                        author: this.options.api.user,
                                        time: this.options.time(),
                                        text: e.text,
                                        color: e.color,
                                        type: e.type
                                    };
                                    this.options.apiBackend.send(this.options.api.address + "v2/", n, t),
                                        this.dan.splice(this.danIndex, 0, n),
                                        this.danIndex++;
                                    var i = {
                                        text: this.htmlEncode(n.text),
                                        color: n.color,
                                        type: n.type,
                                        border: "2px solid " + this.options.borderColor
                                    };
                                    this.draw(i),
                                        this.events && this.events.trigger("danmaku_send", n);
                                }
                            }, {
                                key: "frame",
                                value: function() {
                                    var e = this;
                                    if (this.dan.length && !this.paused && this.showing) {
                                        for (var t = this.dan[this.danIndex], n = []; t && this.options.time() > parseFloat(t.time);)
                                            n.push(t),
                                            t = this.dan[++this.danIndex];
                                        this.draw(n);
                                    }
                                    window.requestAnimationFrame(function() {
                                        e.frame();
                                    });
                                }
                            }, {
                                key: "opacity",
                                value: function(e) {
                                    if (void 0 !== e) {
                                        for (var t = this.container.getElementsByClassName("dplayer-danmaku-item"), n = 0; n < t.length; n++)
                                            t[n].style.opacity = e;
                                        this._opacity = e,
                                            this.events && this.events.trigger("danmaku_opacity", this._opacity);
                                    }
                                    return this._opacity
                                }
                            }, {
                                key: "draw",
                                value: function(e) {
                                    var t = this;
                                    if (this.showing) {
                                        var n = this.options.height,
                                            i = this.container.offsetWidth,
                                            o = this.container.offsetHeight,
                                            s = parseInt(o / n),
                                            r = function(e) {
                                                var n = e.offsetWidth || parseInt(e.style.width),
                                                    i = e.getBoundingClientRect().right || t.container.getBoundingClientRect().right + n;
                                                return t.container.getBoundingClientRect().right - i
                                            },
                                            l = function(e) {
                                                return (i + e) / 5
                                            },
                                            c = function(e, n, o) {
                                                for (var c = i / l(o), u = 0; t.unlimited || u < s; u++) {
                                                    var d = function(a) {
                                                        var o = t.danTunnel[n][a + ""];
                                                        if (!o || !o.length)
                                                            return t.danTunnel[n][a + ""] = [e],
                                                                e.addEventListener("animationend", function() {
                                                                    t.danTunnel[n][a + ""].splice(0, 1);
                                                                }), {
                                                                    v: a % s
                                                                };
                                                        if ("right" !== n)
                                                            return "continue";
                                                        for (var u = 0; u < o.length; u++) {
                                                            var d = r(o[u]) - 10;
                                                            if (d <= i - c * l(parseInt(o[u].style.width)) || d <= 0)
                                                                break;
                                                            if (u === o.length - 1)
                                                                return t.danTunnel[n][a + ""].push(e),
                                                                    e.addEventListener("animationend", function() {
                                                                        t.danTunnel[n][a + ""].splice(0, 1);
                                                                    }), {
                                                                        v: a % s
                                                                    }
                                                        }
                                                    }(u);
                                                    switch (d) {
                                                        case "continue":
                                                            continue;
                                                        default:
                                                            if ("object" === (void 0 === d ? "undefined" : a(d)))
                                                                return d.v
                                                    }
                                                }
                                                return -1
                                            };
                                        "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]);
                                        for (var u = document.createDocumentFragment(), d = 0; d < e.length; d++)
                                            ! function(a) {
                                                e[a].type || (e[a].type = "right"),
                                                    e[a].color || (e[a].color = "#fff");
                                                var o = document.createElement("div");
                                                o.classList.add("dplayer-danmaku-item"),
                                                    o.classList.add("dplayer-danmaku-" + e[a].type),
                                                    e[a].border ? o.innerHTML = '<span style="border:' + e[a].border + '">' + e[a].text + "</span>" : o.innerHTML = e[a].text,
                                                    o.style.opacity = t._opacity,
                                                    o.style.color = e[a].color,
                                                    o.addEventListener("animationend", function() {
                                                        t.container.removeChild(o);
                                                    });
                                                var s = t._measure(e[a].text),
                                                    r = void 0;
                                                switch (e[a].type) {
                                                    case "right":
                                                        r = c(o, e[a].type, s),
                                                            r >= 0 && (o.style.width = s + 1 + "px",
                                                                o.style.top = n * r + "px",
                                                                o.style.transform = "translateX(-" + i + "px)");
                                                        break;
                                                    case "top":
                                                        r = c(o, e[a].type),
                                                            r >= 0 && (o.style.top = n * r + "px");
                                                        break;
                                                    case "bottom":
                                                        r = c(o, e[a].type),
                                                            r >= 0 && (o.style.bottom = n * r + "px");
                                                        break;
                                                    default:
                                                        console.error("Can't handled danmaku type: " + e[a].type);
                                                }
                                                r >= 0 && (o.classList.add("dplayer-danmaku-move"),
                                                    u.appendChild(o));
                                            }(d);
                                        return this.container.appendChild(u),
                                            u
                                    }
                                }
                            }, {
                                key: "play",
                                value: function() {
                                    this.paused = !1;
                                }
                            }, {
                                key: "pause",
                                value: function() {
                                    this.paused = !0;
                                }
                            }, {
                                key: "_measure",
                                value: function(e) {
                                    if (!this.context) {
                                        var t = getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0], null);
                                        this.context = document.createElement("canvas").getContext("2d"),
                                            this.context.font = t.getPropertyValue("font");
                                    }
                                    return this.context.measureText(e).width
                                }
                            }, {
                                key: "seek",
                                value: function() {
                                    this.clear();
                                    for (var e = 0; e < this.dan.length; e++) {
                                        if (this.dan[e].time >= this.options.time()) {
                                            this.danIndex = e;
                                            break
                                        }
                                        this.danIndex = this.dan.length;
                                    }
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    this.danTunnel = {
                                            right: {},
                                            top: {},
                                            bottom: {}
                                        },
                                        this.danIndex = 0,
                                        this.options.container.innerHTML = "",
                                        this.events && this.events.trigger("danmaku_clear");
                                }
                            }, {
                                key: "htmlEncode",
                                value: function(e) {
                                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
                                }
                            }, {
                                key: "resize",
                                value: function() {
                                    for (var e = this.container.offsetWidth, t = this.container.getElementsByClassName("dplayer-danmaku-item"), n = 0; n < t.length; n++)
                                        t[n].style.transform = "translateX(-" + e + "px)";
                                }
                            }, {
                                key: "hide",
                                value: function() {
                                    this.showing = !1,
                                        this.pause(),
                                        this.clear(),
                                        this.events && this.events.trigger("danmaku_hide");
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    this.seek(),
                                        this.showing = !0,
                                        this.play(),
                                        this.events && this.events.trigger("danmaku_show");
                                }
                            }, {
                                key: "unlimit",
                                value: function(e) {
                                    this.unlimited = e;
                                }
                            }]),
                            e
                    }();
                t.default = s;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = function() {
                        function e() {
                            i(this, e),
                                this.events = {},
                                this.videoEvents = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"],
                                this.playerEvents = ["screenshot", "thumbnails_show", "thumbnails_hide", "danmaku_show", "danmaku_hide", "danmaku_clear", "danmaku_loaded", "danmaku_send", "danmaku_opacity", "contextmenu_show", "contextmenu_hide", "notice_show", "notice_hide", "quality_start", "quality_end", "destroy", "resize", "fullscreen", "fullscreen_cancel", "webfullscreen", "webfullscreen_cancel", "subtitle_show", "subtitle_hide", "subtitle_change"];
                        }
                        return a(e, [{
                                key: "on",
                                value: function(e, t) {
                                    this.type(e) && "function" == typeof t && (this.events[e] || (this.events[e] = []),
                                        this.events[e].push(t));
                                }
                            }, {
                                key: "trigger",
                                value: function(e, t) {
                                    if (this.events[e] && this.events[e].length)
                                        for (var n = 0; n < this.events[e].length; n++)
                                            this.events[e][n](t);
                                }
                            }, {
                                key: "type",
                                value: function(e) {
                                    return -1 !== this.playerEvents.indexOf(e) ? "player" : -1 !== this.videoEvents.indexOf(e) ? "video" : (console.error("Unknown event name: " + e),
                                        null)
                                }
                            }]),
                            e
                    }();
                t.default = o;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = n(0),
                    s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(o),
                    r = function() {
                        function e(t) {
                            var n = this;
                            i(this, e),
                                this.player = t,
                                this.player.events.on("webfullscreen", function() {
                                    n.player.resize();
                                }),
                                this.player.events.on("webfullscreen_cancel", function() {
                                    n.player.resize(),
                                        s.default.setScrollPosition(n.lastScrollPosition);
                                });
                            var a = function() {
                                n.player.resize(),
                                    n.isFullScreen("browser") ? n.player.events.trigger("fullscreen") : (s.default.setScrollPosition(n.lastScrollPosition),
                                        n.player.events.trigger("fullscreen_cancel"));
                            };
                            this.player.container.addEventListener("fullscreenchange", a),
                                this.player.container.addEventListener("mozfullscreenchange", a),
                                this.player.container.addEventListener("webkitfullscreenchange", a);
                        }
                        return a(e, [{
                                key: "isFullScreen",
                                value: function() {
                                    switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser") {
                                        case "browser":
                                            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
                                        case "web":
                                            return this.player.container.classList.contains("dplayer-fulled")
                                    }
                                }
                            }, {
                                key: "request",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser",
                                        t = "browser" === e ? "web" : "browser",
                                        n = this.isFullScreen(t);
                                    switch (n || (this.lastScrollPosition = s.default.getScrollPosition()),
                                        e) {
                                        case "browser":
                                            this.player.container.requestFullscreen ? this.player.container.requestFullscreen() : this.player.container.mozRequestFullScreen ? this.player.container.mozRequestFullScreen() : this.player.container.webkitRequestFullscreen ? this.player.container.webkitRequestFullscreen() : this.player.video.webkitEnterFullscreen && this.player.video.webkitEnterFullscreen();
                                            break;
                                        case "web":
                                            this.player.container.classList.add("dplayer-fulled"),
                                                document.body.classList.add("dplayer-web-fullscreen-fix"),
                                                this.player.events.trigger("webfullscreen");
                                    }
                                    n && this.cancel(t);
                                }
                            }, {
                                key: "cancel",
                                value: function() {
                                    switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser") {
                                        case "browser":
                                            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
                                            break;
                                        case "web":
                                            this.player.container.classList.remove("dplayer-fulled"),
                                                document.body.classList.remove("dplayer-web-fullscreen-fix"),
                                                this.player.events.trigger("webfullscreen_cancel");
                                    }
                                }
                            }, {
                                key: "toggle",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                                    this.isFullScreen(e) ? this.cancel(e) : this.request(e);
                                }
                            }]),
                            e
                    }();
                t.default = r;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = n(0),
                    s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(o),
                    r = function() {
                        function e(t) {
                            i(this, e),
                                this.storageName = {
                                    opacity: "dplayer-danmaku-opacity",
                                    volume: "dplayer-volume",
                                    unlimited: "dplayer-danmaku-unlimited",
                                    danmaku: "dplayer-danmaku-show",
                                    subtitle: "dplayer-subtitle-show"
                                },
                                this.default = {
                                    opacity: .7,
                                    volume: t.options.volume || .7,
                                    unlimited: (t.options.danmaku && t.options.danmaku.unlimited ? 1 : 0) || 0,
                                    danmaku: 1,
                                    subtitle: 1
                                },
                                this.data = {},
                                this.init();
                        }
                        return a(e, [{
                                key: "init",
                                value: function() {
                                    for (var e in this.storageName) {
                                        var t = this.storageName[e];
                                        this.data[e] = parseFloat(s.default.storage.get(t) || this.default[e]);
                                    }
                                }
                            }, {
                                key: "get",
                                value: function(e) {
                                    return this.data[e]
                                }
                            }, {
                                key: "set",
                                value: function(e, t) {
                                    this.data[e] = t,
                                        s.default.storage.set(this.storageName[e], t);
                                }
                            }]),
                            e
                    }();
                t.default = r;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = function() {
                        function e(t, n, a, o) {
                            i(this, e),
                                this.container = t,
                                this.video = n,
                                this.options = a,
                                this.events = o,
                                this.init();
                        }
                        return a(e, [{
                                key: "init",
                                value: function() {
                                    var e = this;
                                    if (this.container.style.fontSize = this.options.fontSize,
                                        this.container.style.bottom = this.options.bottom,
                                        this.container.style.color = this.options.color,
                                        this.video.textTracks && this.video.textTracks[0]) {
                                        var t = this.video.textTracks[0];
                                        t.oncuechange = function() {
                                            var n = t.activeCues[0];
                                            if (n) {
                                                e.container.innerHTML = "";
                                                var i = document.createElement("p");
                                                i.appendChild(n.getCueAsHTML()),
                                                    e.container.appendChild(i);
                                            } else
                                                e.container.innerHTML = "";
                                            e.events.trigger("subtitle_change");
                                        };
                                    }
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    this.container.classList.remove("dplayer-subtitle-hide"),
                                        this.events.trigger("subtitle_show");
                                }
                            }, {
                                key: "hide",
                                value: function() {
                                    this.container.classList.add("dplayer-subtitle-hide"),
                                        this.events.trigger("subtitle_hide");
                                }
                            }, {
                                key: "toggle",
                                value: function() {
                                    this.container.classList.contains("dplayer-subtitle-hide") ? this.show() : this.hide();
                                }
                            }]),
                            e
                    }();
                t.default = o;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = function() {
                        function e(t) {
                            i(this, e),
                                this.elements = {},
                                this.elements.volume = t.volumeBar,
                                this.elements.played = t.playedBar,
                                this.elements.loaded = t.loadedBar,
                                this.elements.danmaku = t.danmakuOpacityBar;
                        }
                        return a(e, [{
                                key: "set",
                                value: function(e, t, n) {
                                    t = Math.max(t, 0),
                                        t = Math.min(t, 1),
                                        this.elements[e].style[n] = 100 * t + "%";
                                }
                            }, {
                                key: "get",
                                value: function(e) {
                                    return parseFloat(this.elements[e].style.width) / 100
                                }
                            }]),
                            e
                    }();
                t.default = o;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = n(0),
                    s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(o),
                    r = function() {
                        function e(t) {
                            i(this, e),
                                this.player = t,
                                window.requestAnimationFrame = function() {
                                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                                        window.setTimeout(e, 1e3 / 60);
                                    }
                                }(),
                                this.types = ["loading", "progress", "info", "fps"],
                                this.init();
                        }
                        return a(e, [{
                                key: "init",
                                value: function() {
                                    for (var e = 0; e < this.types.length; e++) {
                                        var t = this.types[e];
                                        "fps" !== t && this["init" + t + "Checker"]();
                                    }
                                }
                            }, {
                                key: "initloadingChecker",
                                value: function() {
                                    var e = this,
                                        t = 0,
                                        n = 0,
                                        i = !1;
                                    this.loadingChecker = setInterval(function() {
                                        e.enableloadingChecker && (n = e.player.video.currentTime,
                                            i || n !== t || e.player.video.paused || (e.player.container.classList.add("dplayer-loading"),
                                                i = !0),
                                            i && n > t && !e.player.video.paused && (e.player.container.classList.remove("dplayer-loading"),
                                                i = !1),
                                            t = n);
                                    }, 100);
                                }
                            }, {
                                key: "initprogressChecker",
                                value: function() {
                                    var e = this;
                                    this.progressChecker = setInterval(function() {
                                        if (e.enableprogressChecker) {
                                            e.player.bar.set("played", e.player.video.currentTime / e.player.video.duration, "width");
                                            var t = s.default.secondToTime(e.player.video.currentTime);
                                            e.player.template.ptime.innerHTML !== t && (e.player.template.ptime.innerHTML = s.default.secondToTime(e.player.video.currentTime));
                                        }
                                    }, 100);
                                }
                            }, {
                                key: "initfpsChecker",
                                value: function() {
                                    var e = this;
                                    window.requestAnimationFrame(function() {
                                        if (e.enablefpsChecker)
                                            if (e.initfpsChecker(),
                                                e.fpsStart) {
                                                e.fpsIndex++;
                                                var t = new Date;
                                                t - e.fpsStart > 1e3 && (e.player.infoPanel.fps(e.fpsIndex / (t - e.fpsStart) * 1e3),
                                                    e.fpsStart = new Date,
                                                    e.fpsIndex = 0);
                                            } else
                                                e.fpsStart = new Date,
                                                e.fpsIndex = 0;
                                        else
                                            e.fpsStart = 0,
                                            e.fpsIndex = 0;
                                    });
                                }
                            }, {
                                key: "initinfoChecker",
                                value: function() {
                                    var e = this;
                                    this.infoChecker = setInterval(function() {
                                        e.enableinfoChecker && e.player.infoPanel.update();
                                    }, 1e3);
                                }
                            }, {
                                key: "enable",
                                value: function(e) {
                                    this["enable" + e + "Checker"] = !0,
                                        "fps" === e && this.initfpsChecker();
                                }
                            }, {
                                key: "disable",
                                value: function(e) {
                                    this["enable" + e + "Checker"] = !1;
                                }
                            }, {
                                key: "destroy",
                                value: function(e) {
                                    this[e + "Checker"] && clearInterval(this[e + "Checker"]);
                                }
                            }]),
                            e
                    }();
                t.default = r;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = function() {
                        function e(t) {
                            var n = this;
                            i(this, e),
                                this.container = t,
                                this.container.addEventListener("animationend", function() {
                                    n.container.classList.remove("dplayer-bezel-transition");
                                });
                        }
                        return a(e, [{
                                key: "switch",
                                value: function(e) {
                                    this.container.innerHTML = e,
                                        this.container.classList.add("dplayer-bezel-transition");
                                }
                            }]),
                            e
                    }();
                t.default = o;
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function a(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    s = n(0),
                    r = i(s),
                    l = n(44),
                    c = i(l),
                    u = n(2),
                    d = i(u),
                    p = function() {
                        function e(t) {
                            var n = this;
                            a(this, e),
                                this.player = t,
                                this.autoHideTimer = 0,
                                r.default.isMobile || (this.player.container.addEventListener("mousemove", function() {
                                        n.setAutoHide();
                                    }),
                                    this.player.container.addEventListener("click", function() {
                                        n.setAutoHide();
                                    }),
                                    this.player.on("play", function() {
                                        n.setAutoHide();
                                    }),
                                    this.player.on("pause", function() {
                                        n.setAutoHide();
                                    })),
                                this.initPlayButton(),
                                this.initThumbnails(),
                                this.initPlayedBar(),
                                this.initFullButton(),
                                this.initQualityButton(),
                                this.initScreenshotButton(),
                                this.initSubtitleButton(),
                                r.default.isMobile || this.initVolumeButton();
                        }
                        return o(e, [{
                                key: "initPlayButton",
                                value: function() {
                                    var e = this;
                                    this.player.template.playButton.addEventListener("click", function() {
                                            e.player.toggle();
                                        }),
                                        r.default.isMobile ? (this.player.template.videoWrap.addEventListener("click", function() {
                                                e.toggle();
                                            }),
                                            this.player.template.controllerMask.addEventListener("click", function() {
                                                e.toggle();
                                            })) : (this.player.template.videoWrap.addEventListener("click", function() {
                                                e.player.toggle();
                                            }),
                                            this.player.template.controllerMask.addEventListener("click", function() {
                                                e.player.toggle();
                                            }));
                                }
                            }, {
                                key: "initThumbnails",
                                value: function() {
                                    var e = this;
                                    this.player.options.video.thumbnails && (this.thumbnails = new c.default({
                                            container: this.player.template.barPreview,
                                            barWidth: this.player.template.barWrap.offsetWidth,
                                            url: this.player.options.video.thumbnails,
                                            events: this.player.events
                                        }),
                                        this.player.on("loadedmetadata", function() {
                                            e.thumbnails.resize(160, e.player.video.videoHeight / e.player.video.videoWidth * 160);
                                        }));
                                }
                            }, {
                                key: "initPlayedBar",
                                value: function() {
                                    var e = this,
                                        t = function(t) {
                                            var n = ((t.clientX || t.changedTouches[0].clientX) - r.default.getElementViewLeft(e.player.template.playedBarWrap)) / e.player.template.playedBarWrap.clientWidth;
                                            n = Math.max(n, 0),
                                                n = Math.min(n, 1),
                                                e.player.bar.set("played", n, "width"),
                                                e.player.template.ptime.innerHTML = r.default.secondToTime(n * e.player.video.duration);
                                        },
                                        n = function n(i) {
                                            document.removeEventListener(r.default.nameMap.dragEnd, n),
                                                document.removeEventListener(r.default.nameMap.dragMove, t);
                                            var a = ((i.clientX || i.changedTouches[0].clientX) - r.default.getElementViewLeft(e.player.template.playedBarWrap)) / e.player.template.playedBarWrap.clientWidth;
                                            a = Math.max(a, 0),
                                                a = Math.min(a, 1),
                                                e.player.bar.set("played", a, "width"),
                                                e.player.seek(e.player.bar.get("played") * e.player.video.duration),
                                                e.player.time.enable("progress");
                                        };
                                    this.player.template.playedBarWrap.addEventListener(r.default.nameMap.dragStart, function() {
                                            e.player.time.disable("progress"),
                                                document.addEventListener(r.default.nameMap.dragMove, t),
                                                document.addEventListener(r.default.nameMap.dragEnd, n);
                                        }),
                                        this.player.template.playedBarWrap.addEventListener(r.default.nameMap.dragMove, function(t) {
                                            if (e.player.video.duration) {
                                                var n = r.default.cumulativeOffset(e.player.template.playedBarWrap).left,
                                                    i = (t.clientX || t.changedTouches[0].clientX) - n;
                                                if (i < 0 || i > e.player.template.playedBarWrap.offsetWidth)
                                                    return;
                                                var a = e.player.video.duration * (i / e.player.template.playedBarWrap.offsetWidth);
                                                r.default.isMobile && e.thumbnails && e.thumbnails.show(),
                                                    e.thumbnails && e.thumbnails.move(i),
                                                    e.player.template.playedBarTime.style.left = i - 20 + "px",
                                                    e.player.template.playedBarTime.innerText = r.default.secondToTime(a),
                                                    e.player.template.playedBarTime.classList.remove("hidden");
                                            }
                                        }),
                                        this.player.template.playedBarWrap.addEventListener(r.default.nameMap.dragEnd, function() {
                                            r.default.isMobile && e.thumbnails && e.thumbnails.hide();
                                        }),
                                        r.default.isMobile || (this.player.template.playedBarWrap.addEventListener("mouseenter", function() {
                                                e.player.video.duration && (e.thumbnails && e.thumbnails.show(),
                                                    e.player.template.playedBarTime.classList.remove("hidden"));
                                            }),
                                            this.player.template.playedBarWrap.addEventListener("mouseleave", function() {
                                                e.player.video.duration && (e.thumbnails && e.thumbnails.hide(),
                                                    e.player.template.playedBarTime.classList.add("hidden"));
                                            }));
                                }
                            }, {
                                key: "initFullButton",
                                value: function() {
                                    var e = this;
                                    this.player.template.browserFullButton.addEventListener("click", function() {
                                            e.player.fullScreen.toggle("browser");
                                        }),
                                        this.player.template.webFullButton.addEventListener("click", function() {
                                            e.player.fullScreen.toggle("web");
                                        });
                                }
                            }, {
                                key: "initVolumeButton",
                                value: function() {
                                    var e = this,
                                        t = function(t) {
                                            var n = t || window.event,
                                                i = ((n.clientX || n.changedTouches[0].clientX) - r.default.getElementViewLeft(e.player.template.volumeBarWrap) - 5.5) / 35;
                                            e.player.volume(i);
                                        },
                                        n = function n() {
                                            document.removeEventListener(r.default.nameMap.dragEnd, n),
                                                document.removeEventListener(r.default.nameMap.dragMove, t),
                                                e.player.template.volumeButton.classList.remove("dplayer-volume-active");
                                        };
                                    this.player.template.volumeBarWrapWrap.addEventListener("click", function(t) {
                                            var n = t || window.event,
                                                i = ((n.clientX || n.changedTouches[0].clientX) - r.default.getElementViewLeft(e.player.template.volumeBarWrap) - 5.5) / 35;
                                            e.player.volume(i);
                                        }),
                                        this.player.template.volumeBarWrapWrap.addEventListener(r.default.nameMap.dragStart, function() {
                                            document.addEventListener(r.default.nameMap.dragMove, t),
                                                document.addEventListener(r.default.nameMap.dragEnd, n),
                                                e.player.template.volumeButton.classList.add("dplayer-volume-active");
                                        }),
                                        this.player.template.volumeIcon.addEventListener("click", function() {
                                            e.player.video.muted ? (e.player.video.muted = !1,
                                                e.player.switchVolumeIcon(),
                                                e.player.bar.set("volume", e.player.volume(), "width")) : (e.player.video.muted = !0,
                                                e.player.template.volumeIcon.innerHTML = d.default.volumeOff,
                                                e.player.bar.set("volume", 0, "width"));
                                        });
                                }
                            }, {
                                key: "initQualityButton",
                                value: function() {
                                    var e = this;
                                    this.player.options.video.quality && this.player.template.qualityList.addEventListener("click", function(t) {
                                        t.target.classList.contains("dplayer-quality-item") && e.player.switchQuality(t.target.dataset.index);
                                    });
                                }
                            }, {
                                key: "initScreenshotButton",
                                value: function() {
                                    var e = this;
                                    this.player.options.screenshot && this.player.template.camareButton.addEventListener("click", function() {
                                        var t = document.createElement("canvas");
                                        t.width = e.player.video.videoWidth,
                                            t.height = e.player.video.videoHeight,
                                            t.getContext("2d").drawImage(e.player.video, 0, 0, t.width, t.height);
                                        var n = void 0;
                                        t.toBlob(function(e) {
                                                n = URL.createObjectURL(e);
                                                var t = document.createElement("a");
                                                t.href = n,
                                                    t.download = "DPlayer.png",
                                                    t.style.display = "none",
                                                    document.body.appendChild(t),
                                                    t.click(),
                                                    document.body.removeChild(t),
                                                    URL.revokeObjectURL(n);
                                            }),
                                            e.player.events.trigger("screenshot", n);
                                    });
                                }
                            }, {
                                key: "initSubtitleButton",
                                value: function() {
                                    var e = this;
                                    this.player.options.subtitle && (this.player.events.on("subtitle_show", function() {
                                            e.player.template.subtitleButton.dataset.balloon = e.player.tran("Hide subtitle"),
                                                e.player.template.subtitleButtonInner.style.opacity = "",
                                                e.player.user.set("subtitle", 1);
                                        }),
                                        this.player.events.on("subtitle_hide", function() {
                                            e.player.template.subtitleButton.dataset.balloon = e.player.tran("Show subtitle"),
                                                e.player.template.subtitleButtonInner.style.opacity = "0.4",
                                                e.player.user.set("subtitle", 0);
                                        }),
                                        this.player.template.subtitleButton.addEventListener("click", function() {
                                            e.player.subtitle.toggle();
                                        }));
                                }
                            }, {
                                key: "setAutoHide",
                                value: function() {
                                    var e = this;
                                    this.show(),
                                        clearTimeout(this.autoHideTimer),
                                        this.autoHideTimer = setTimeout(function() {
                                            !e.player.video.played.length || e.player.paused || e.disableAutoHide || e.hide();
                                        }, 3e3);
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    this.player.container.classList.remove("dplayer-hide-controller");
                                }
                            }, {
                                key: "hide",
                                value: function() {
                                    this.player.container.classList.add("dplayer-hide-controller"),
                                        this.player.setting.hide(),
                                        this.player.comment && this.player.comment.hide();
                                }
                            }, {
                                key: "isShow",
                                value: function() {
                                    return !this.player.container.classList.contains("dplayer-hide-controller")
                                }
                            }, {
                                key: "toggle",
                                value: function() {
                                    this.isShow() ? this.hide() : this.show();
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    clearTimeout(this.autoHideTimer);
                                }
                            }]),
                            e
                    }();
                t.default = p;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = function() {
                        function e(t) {
                            i(this, e),
                                this.container = t.container,
                                this.barWidth = t.barWidth,
                                this.container.style.backgroundImage = "url('" + t.url + "')",
                                this.events = t.events;
                        }
                        return a(e, [{
                                key: "resize",
                                value: function(e, t) {
                                    this.container.style.width = e + "px",
                                        this.container.style.height = t + "px",
                                        this.container.style.top = 2 - t + "px";
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    this.container.style.display = "block",
                                        this.events && this.events.trigger("thumbnails_show");
                                }
                            }, {
                                key: "move",
                                value: function(e) {
                                    this.container.style.backgroundPosition = "-" + 160 * (Math.ceil(e / this.barWidth * 100) - 1) + "px 0",
                                        this.container.style.left = e - this.container.offsetWidth / 2 + "px";
                                }
                            }, {
                                key: "hide",
                                value: function() {
                                    this.container.style.display = "none",
                                        this.events && this.events.trigger("thumbnails_hide");
                                }
                            }]),
                            e
                    }();
                t.default = o;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = n(0),
                    s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(o),
                    r = function() {
                        function e(t) {
                            var n = this;
                            i(this, e),
                                this.player = t,
                                this.player.template.mask.addEventListener("click", function() {
                                    n.hide();
                                }),
                                this.player.template.settingButton.addEventListener("click", function() {
                                    n.show();
                                }),
                                this.loop = this.player.options.loop,
                                this.player.template.loopToggle.checked = this.loop,
                                this.player.template.loop.addEventListener("click", function() {
                                    n.player.template.loopToggle.checked = !n.player.template.loopToggle.checked,
                                        n.player.template.loopToggle.checked ? n.loop = !0 : n.loop = !1,
                                        n.hide();
                                }),
                                this.showDanmaku = this.player.user.get("danmaku"),
                                this.showDanmaku || this.player.danmaku && this.player.danmaku.hide(),
                                this.player.template.showDanmakuToggle.checked = this.showDanmaku,
                                this.player.template.showDanmaku.addEventListener("click", function() {
                                    n.player.template.showDanmakuToggle.checked = !n.player.template.showDanmakuToggle.checked,
                                        n.player.template.showDanmakuToggle.checked ? (n.showDanmaku = !0,
                                            n.player.danmaku.show()) : (n.showDanmaku = !1,
                                            n.player.danmaku.hide()),
                                        n.player.user.set("danmaku", n.showDanmaku ? 1 : 0),
                                        n.hide();
                                }),
                                this.unlimitDanmaku = this.player.user.get("unlimited"),
                                this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku,
                                this.player.template.unlimitDanmaku.addEventListener("click", function() {
                                    n.player.template.unlimitDanmakuToggle.checked = !n.player.template.unlimitDanmakuToggle.checked,
                                        n.player.template.unlimitDanmakuToggle.checked ? (n.unlimitDanmaku = !0,
                                            n.player.danmaku.unlimit(!0)) : (n.unlimitDanmaku = !1,
                                            n.player.danmaku.unlimit(!1)),
                                        n.player.user.set("unlimited", n.unlimitDanmaku ? 1 : 0),
                                        n.hide();
                                }),
                                this.player.template.speed.addEventListener("click", function() {
                                    n.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),
                                        n.player.template.settingBox.classList.add("dplayer-setting-box-speed");
                                });
                            for (var a = 0; a < this.player.template.speedItem.length; a++)
                                ! function(e) {
                                    n.player.template.speedItem[e].addEventListener("click", function() {
                                        n.player.speed(n.player.template.speedItem[e].dataset.speed),
                                            n.hide();
                                    });
                                }(a);
                            if (this.player.danmaku) {
                                this.player.on("danmaku_opacity", function(e) {
                                        n.player.bar.set("danmaku", e, "width"),
                                            n.player.user.set("opacity", e);
                                    }),
                                    this.player.danmaku.opacity(this.player.user.get("opacity"));
                                var o = function(e) {
                                        var t = e || window.event,
                                            i = ((t.clientX || t.changedTouches[0].clientX) - s.default.getElementViewLeft(n.player.template.danmakuOpacityBarWrap)) / 130;
                                        i = Math.max(i, 0),
                                            i = Math.min(i, 1),
                                            n.player.danmaku.opacity(i);
                                    },
                                    r = function e() {
                                        document.removeEventListener(s.default.nameMap.dragEnd, e),
                                            document.removeEventListener(s.default.nameMap.dragMove, o),
                                            n.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active");
                                    };
                                this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click", function(e) {
                                        var t = e || window.event,
                                            i = ((t.clientX || t.changedTouches[0].clientX) - s.default.getElementViewLeft(n.player.template.danmakuOpacityBarWrap)) / 130;
                                        i = Math.max(i, 0),
                                            i = Math.min(i, 1),
                                            n.player.danmaku.opacity(i);
                                    }),
                                    this.player.template.danmakuOpacityBarWrapWrap.addEventListener(s.default.nameMap.dragStart, function() {
                                        document.addEventListener(s.default.nameMap.dragMove, o),
                                            document.addEventListener(s.default.nameMap.dragEnd, r),
                                            n.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active");
                                    });
                            }
                        }
                        return a(e, [{
                                key: "hide",
                                value: function() {
                                    var e = this;
                                    this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),
                                        this.player.template.mask.classList.remove("dplayer-mask-show"),
                                        setTimeout(function() {
                                            e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),
                                                e.player.template.settingBox.classList.remove("dplayer-setting-box-speed");
                                        }, 300),
                                        this.player.controller.disableAutoHide = !1;
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    this.player.template.settingBox.classList.add("dplayer-setting-box-open"),
                                        this.player.template.mask.classList.add("dplayer-mask-show"),
                                        this.player.controller.disableAutoHide = !0;
                                }
                            }]),
                            e
                    }();
                t.default = r;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = function() {
                        function e(t) {
                            var n = this;
                            i(this, e),
                                this.player = t,
                                this.player.template.mask.addEventListener("click", function() {
                                    n.hide();
                                }),
                                this.player.template.commentButton.addEventListener("click", function() {
                                    n.show();
                                }),
                                this.player.template.commentSettingButton.addEventListener("click", function() {
                                    n.toggleSetting();
                                }),
                                this.player.template.commentColorSettingBox.addEventListener("click", function() {
                                    if (n.player.template.commentColorSettingBox.querySelector("input:checked+span")) {
                                        var e = n.player.template.commentColorSettingBox.querySelector("input:checked").value;
                                        n.player.template.commentSettingFill.style.fill = e,
                                            n.player.template.commentInput.style.color = e,
                                            n.player.template.commentSendFill.style.fill = e;
                                    }
                                }),
                                this.player.template.commentInput.addEventListener("click", function() {
                                    n.hideSetting();
                                }),
                                this.player.template.commentInput.addEventListener("keydown", function(e) {
                                    13 === (e || window.event).keyCode && n.send();
                                }),
                                this.player.template.commentSendButton.addEventListener("click", function() {
                                    n.send();
                                });
                        }
                        return a(e, [{
                                key: "show",
                                value: function() {
                                    this.player.controller.disableAutoHide = !0,
                                        this.player.template.controller.classList.add("dplayer-controller-comment"),
                                        this.player.template.mask.classList.add("dplayer-mask-show"),
                                        this.player.container.classList.add("dplayer-show-controller"),
                                        this.player.template.commentInput.focus();
                                }
                            }, {
                                key: "hide",
                                value: function() {
                                    this.player.template.controller.classList.remove("dplayer-controller-comment"),
                                        this.player.template.mask.classList.remove("dplayer-mask-show"),
                                        this.player.container.classList.remove("dplayer-show-controller"),
                                        this.player.controller.disableAutoHide = !1,
                                        this.hideSetting();
                                }
                            }, {
                                key: "showSetting",
                                value: function() {
                                    this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open");
                                }
                            }, {
                                key: "hideSetting",
                                value: function() {
                                    this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open");
                                }
                            }, {
                                key: "toggleSetting",
                                value: function() {
                                    this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open") ? this.hideSetting() : this.showSetting();
                                }
                            }, {
                                key: "send",
                                value: function() {
                                    var e = this;
                                    if (this.player.template.commentInput.blur(), !this.player.template.commentInput.value.replace(/^\s+|\s+$/g, ""))
                                        return void this.player.notice(this.player.tran("Please input danmaku content!"));
                                    this.player.danmaku.send({
                                        text: this.player.template.commentInput.value,
                                        color: this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value,
                                        type: this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value
                                    }, function() {
                                        e.player.template.commentInput.value = "",
                                            e.hide();
                                    });
                                }
                            }]),
                            e
                    }();
                t.default = o;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function e(t) {
                    i(this, e),
                        t.options.hotkey && document.addEventListener("keydown", function(e) {
                            if (t.focus) {
                                var n = document.activeElement.tagName.toUpperCase(),
                                    i = document.activeElement.getAttribute("contenteditable");
                                if ("INPUT" !== n && "TEXTAREA" !== n && "" !== i && "true" !== i) {
                                    var a = e || window.event,
                                        o = void 0;
                                    switch (a.keyCode) {
                                        case 32:
                                            a.preventDefault(),
                                                t.toggle();
                                            break;
                                        case 37:
                                            a.preventDefault(),
                                                t.seek(t.video.currentTime - 5),
                                                t.controller.setAutoHide();
                                            break;
                                        case 39:
                                            a.preventDefault(),
                                                t.seek(t.video.currentTime + 5),
                                                t.controller.setAutoHide();
                                            break;
                                        case 38:
                                            a.preventDefault(),
                                                o = t.volume() + .1,
                                                t.volume(o);
                                            break;
                                        case 40:
                                            a.preventDefault(),
                                                o = t.volume() - .1,
                                                t.volume(o);
                                    }
                                }
                            }
                        }),
                        document.addEventListener("keydown", function(e) {
                            switch ((e || window.event).keyCode) {
                                case 27:
                                    t.fullScreen.isFullScreen("web") && t.fullScreen.cancel("web");
                            }
                        });
                };
                t.default = a;
            }, function(e, t, n) {
                function i(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)
                            n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                function a(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    s = function() {
                        function e(t) {
                            var n = this;
                            a(this, e),
                                this.player = t, [].concat(i(this.player.template.menuItem)).map(function(e, t) {
                                    return n.player.options.contextmenu[t].click && e.addEventListener("click", function() {
                                            n.player.options.contextmenu[t].click(n.player),
                                                n.hide();
                                        }),
                                        e
                                }),
                                this.player.container.addEventListener("contextmenu", function(e) {
                                    var t = e || window.event;
                                    t.preventDefault();
                                    var i = n.player.container.getBoundingClientRect();
                                    n.show(t.clientX - i.left, t.clientY - i.top),
                                        n.player.template.mask.addEventListener("click", function() {
                                            n.hide();
                                        });
                                });
                        }
                        return o(e, [{
                                key: "show",
                                value: function(e, t) {
                                    this.player.template.menu.classList.add("dplayer-menu-show");
                                    var n = this.player.container.getBoundingClientRect();
                                    e + this.player.template.menu.offsetWidth >= n.width ? (this.player.template.menu.style.right = n.width - e + "px",
                                            this.player.template.menu.style.left = "initial") : (this.player.template.menu.style.left = e + "px",
                                            this.player.template.menu.style.right = "initial"),
                                        t + this.player.template.menu.offsetHeight >= n.height ? (this.player.template.menu.style.bottom = n.height - t + "px",
                                            this.player.template.menu.style.top = "initial") : (this.player.template.menu.style.top = t + "px",
                                            this.player.template.menu.style.bottom = "initial"),
                                        this.player.template.mask.classList.add("dplayer-mask-show"),
                                        this.player.events.trigger("contextmenu_show");
                                }
                            }, {
                                key: "hide",
                                value: function() {
                                    this.player.template.mask.classList.remove("dplayer-mask-show"),
                                        this.player.template.menu.classList.remove("dplayer-menu-show"),
                                        this.player.events.trigger("contextmenu_hide");
                                }
                            }]),
                            e
                    }();
                t.default = s;
            }, function(e, t, n) {
                function i(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1,
                                    i.configurable = !0,
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n),
                                i && e(t, i),
                                t
                        }
                    }(),
                    o = function() {
                        function e(t) {
                            var n = this;
                            i(this, e),
                                this.container = t.template.infoPanel,
                                this.template = t.template,
                                this.video = t.video,
                                this.player = t,
                                this.template.infoPanelClose.addEventListener("click", function() {
                                    n.hide();
                                });
                        }
                        return a(e, [{
                                key: "show",
                                value: function() {
                                    this.beginTime = Date.now(),
                                        this.update(),
                                        this.player.time.enable("info"),
                                        this.player.time.enable("fps"),
                                        this.container.classList.remove("dplayer-info-panel-hide");
                                }
                            }, {
                                key: "hide",
                                value: function() {
                                    this.player.time.disable("info"),
                                        this.player.time.disable("fps"),
                                        this.container.classList.add("dplayer-info-panel-hide");
                                }
                            }, {
                                key: "triggle",
                                value: function() {
                                    this.container.classList.contains("dplayer-info-panel-hide") ? this.show() : this.hide();
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    this.template.infoVersion.innerHTML = "v1.22.2 d3847a3",
                                        this.template.infoType.innerHTML = this.player.type,
                                        this.template.infoUrl.innerHTML = this.player.options.video.url,
                                        this.template.infoResolution.innerHTML = this.player.video.videoWidth + " x " + this.player.video.videoHeight,
                                        this.template.infoDuration.innerHTML = this.player.video.duration,
                                        this.player.options.danmaku && (this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id,
                                            this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api,
                                            this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length);
                                }
                            }, {
                                key: "fps",
                                value: function(e) {
                                    this.template.infoFPS.innerHTML = "" + e.toFixed(1);
                                }
                            }]),
                            e
                    }();
                t.default = o;
            }]).default
        });

    });

    var DPlayer = unwrapExports(DPlayer_min);
    var DPlayer_min_1 = DPlayer_min.DPlayer;

    var VueDPlayer = {
        props: {
            options: {
                type: Object
            }
        },
        data: function data() {
            return {
                dp: null
            };
        },
        mounted: function mounted() {
            var this$1 = this;

            this.options.container = this.$el;
            var player = this.dp = new DPlayer(this.options);
            var events = player.events;
            Object.keys(events).forEach(function(item) {
                if (item === 'events') {
                    return false;
                } else {
                    events[item].forEach(function(event) {
                        player.on(event, function() {
                            return this$1.$emit(event);
                        });
                    });
                }
            });
        },
        install: function install(Vue, ref) {
            if (ref === void 0)
                ref = {};
            var name = ref.name;
            if (name === void 0)
                name = 'd-player';

            Vue.component(name, this);
        },
        render: function render(h) {
            return h('div', {
                class: 'dplayer'
            }, []);
        }
    };

    if (typeof window !== 'undefined' && window.Vue) {
        window.VueDPlayer = VueDPlayer;
    }

    return VueDPlayer;

})));