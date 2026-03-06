// F:/DuyuyangWork/Dome/MES-/node_modules/goeasy/goeasy.esm.min.js
var e;
var t;
!function(e5) {
  e5.UNIAPP = "uniapp", e5.REACT_NATIVE = "rn", e5.COCOS = "cocos", e5.UNKNOWN = "unknown";
}(e || (e = {}));
var s = class _s2 {
  constructor() {
    this.framework = null, this.methods = { [e.UNIAPP]: this.isUniApp, [e.REACT_NATIVE]: this.isReactNative, [e.COCOS]: this.isCocos };
    const t2 = this.methods, s2 = Object.keys(t2);
    for (const e5 of s2) {
      if ((0, t2[e5])()) {
        this.framework = e5;
        break;
      }
    }
    this.framework = this.framework || e.UNKNOWN, this.framework;
  }
  static currentFramework() {
    return this.instance || (this.instance = new _s2()), this.instance.framework;
  }
  isUniApp() {
    try {
      return "function" == typeof uni.getSystemInfoSync;
    } catch (e5) {
      return false;
    }
  }
  isReactNative() {
    try {
      return "object" == typeof navigator && "ReactNative" === navigator.product;
    } catch (e5) {
      return false;
    }
  }
  isTaro() {
    try {
      return void 0 !== process.env.TARO_ENV;
    } catch (e5) {
      return false;
    }
  }
  isCocos() {
    try {
      return void 0 !== cc.sys.localStorage;
    } catch (e5) {
      return false;
    }
  }
};
var i = class {
  static init(t2) {
    if (s.currentFramework() === e.REACT_NATIVE) {
      if (!t2)
        throw new Error("'reactNativeOptions' is missing when calling GoEasy.getInstance()");
      this.platform = t2.platform, this.asyncStorage = t2.asyncStorage;
    }
  }
};
!function(e5) {
  e5.DISCONNECTED = "disconnected", e5.DISCONNECTING = "disconnecting", e5.CONNECTING = "connecting", e5.CONNECTED = "connected", e5.RECONNECTING = "reconnecting", e5.RECONNECTED = "reconnected", e5.EXPIRED_RECONNECTED = "reconnected", e5.CONNECT_FAILED = "connect_failed";
}(t || (t = {}));
var n = "2.13.24";
var o;
var r;
!function(e5) {
  e5.PRIVATE = "private", e5.GROUP = "group", e5.SYSTEM = "system", e5.CS = "cs";
}(o || (o = {})), function(e5) {
  e5.NEW = "new", e5.SENDING = "sending", e5.SUCCESS = "success", e5.FAIL = "fail";
}(r || (r = {}));
var a = class {
};
var c = class {
  constructor(e5, t2) {
    this.id = e5, this.data = t2;
  }
};
var u = new class {
  isDef(e5) {
    return !this.isUndef(e5);
  }
  isUndef(e5) {
    return null == e5;
  }
  isPrimitive(e5) {
    return "string" == typeof e5 || "number" == typeof e5 || "symbol" == typeof e5 || "boolean" == typeof e5;
  }
  isObject(e5) {
    return null !== e5 && "object" == typeof e5;
  }
  isPlainObject(e5) {
    return "[object Object]" === Object.prototype.toString.call(e5);
  }
  isRegExp(e5) {
    return "[object RegExp]" === Object.prototype.toString.call(e5);
  }
  isValidArrayIndex(e5) {
    let t2 = parseFloat(String(e5));
    return t2 >= 0 && Math.floor(t2) === t2 && isFinite(e5);
  }
  isString(e5) {
    return "string" == typeof e5;
  }
  isNumber(e5) {
    return "number" == typeof e5;
  }
  isStringOrNumber(e5) {
    return this.isString(e5) || this.isNumber(e5);
  }
  isArray(e5) {
    return "[object Array]" === Object.prototype.toString.call(e5);
  }
  isEmpty(e5) {
    return this.isArray(e5) ? 0 === e5.length : this.isObject(e5) ? !this.isDef(e5) : !this.isNumber(e5) && (this.isString(e5) ? "" === e5.trim() : !this.isDef(e5));
  }
  isNative(e5) {
    return "function" == typeof e5 && /native code/.test(e5.toString());
  }
  isFunction(e5) {
    return "function" == typeof e5;
  }
  isBoolean(e5) {
    return "boolean" == typeof e5;
  }
  isTrue(e5) {
    return true === e5;
  }
  isFalse(e5) {
    return false === e5;
  }
  isNull(e5) {
    return null === e5;
  }
}();
var l;
!function(e5) {
  e5.MP_WX = "mp-wx", e5.MP_WGAME = "mp-wgame", e5.MP_BYTE = "mp-byte", e5.MP_BAIDU = "mp-baidu", e5.MP_ALI = "mp-ali", e5.BROWSER = "browser", e5.NODE = "node", e5.UNI_IOS = "uni-ios", e5.UNI_ANDROID = "uni-android", e5.UNI_HARMONY = "uni-harmony", e5.COCOS_IOS = "cocos-ios", e5.COCOS_ANDROID = "cocos-android", e5.RN_IOS = "rn-ios", e5.RN_ANDROID = "rn-android", e5.UNKNOWN = "unknown";
}(l || (l = {}));
var d = class _d {
  constructor() {
    this.platform = null, this.methods = { [l.BROWSER]: this.isBrowser, [l.MP_WX]: this.isMPWX, [l.MP_WGAME]: this.isMPWeGame, [l.MP_BYTE]: this.isMPByte, [l.MP_BAIDU]: this.isMPBaidu, [l.MP_ALI]: this.isMPAli, [l.NODE]: this.isNode, [l.UNI_IOS]: this.isUniAppIOS, [l.UNI_ANDROID]: this.isUniAppAndroid, [l.UNI_HARMONY]: this.isUniAppHarmony, [l.COCOS_IOS]: this.isCocosIOS, [l.COCOS_ANDROID]: this.isCocosAndroid, [l.RN_IOS]: this.isRNiOS, [l.RN_ANDROID]: this.isRNAndroid };
    const e5 = this.methods, t2 = Object.keys(e5);
    for (const s2 of t2) {
      if ((0, e5[s2])()) {
        this.platform = s2;
        break;
      }
    }
    this.platform = this.platform || l.UNKNOWN, this.platform;
  }
  static currentPlatform() {
    return this.instance || (this.instance = new _d()), _d.instance.platform;
  }
  isBrowser() {
    return "undefined" != typeof navigator && "Taro" !== navigator.product && "ReactNative" !== navigator.product && "undefined" == typeof GameGlobal && ("undefined" == typeof cc || null !== cc.sys.browserType) && "undefined" == typeof my && "undefined" == typeof tt && "undefined" == typeof swan;
  }
  isMPWX() {
    return "object" == typeof wx && "function" == typeof wx.getSystemInfoSync && "undefined" == typeof WebSocket && "undefined" == typeof XMLHttpRequest && "undefined" == typeof plus && "undefined" == typeof tt;
  }
  isMPWeGame() {
    return "object" == typeof GameGlobal;
  }
  isMPByte() {
    return "object" == typeof tt && "function" == typeof tt.getSystemInfoSync;
  }
  isMPBaidu() {
    return "object" == typeof swan && "function" == typeof swan.getSystemInfoSync;
  }
  isMPAli() {
    return "object" == typeof my && "function" == typeof my.getSystemInfoSync;
  }
  isNode() {
    try {
      return "node" === process.release.name;
    } catch (e5) {
      return false;
    }
  }
  isUniAppIOS() {
    try {
      return "ios" === uni.getSystemInfoSync().platform && "app" === uni.getSystemInfoSync().uniPlatform;
    } catch (e5) {
      return false;
    }
  }
  isUniAppAndroid() {
    try {
      return "android" === uni.getSystemInfoSync().platform && "app" === uni.getSystemInfoSync().uniPlatform;
    } catch (e5) {
      return false;
    }
  }
  isUniAppHarmony() {
    try {
      return "harmonyos" === uni.getSystemInfoSync().platform && "app" === uni.getSystemInfoSync().uniPlatform;
    } catch (e5) {
      return false;
    }
  }
  isCocosIOS() {
    try {
      return "iOS" === cc.sys.os;
    } catch (e5) {
      return false;
    }
  }
  isCocosAndroid() {
    try {
      return "Android" === cc.sys.os;
    } catch (e5) {
      return false;
    }
  }
  isRNiOS() {
    try {
      return "ios" === i.platform.OS;
    } catch (e5) {
      return false;
    }
  }
  isRNAndroid() {
    try {
      return "android" === i.platform.OS;
    } catch (e5) {
      return false;
    }
  }
};
var h = class {
};
h.type = l, h.current = d.currentPlatform();
var p = class {
  onFrontend(e5) {
    this.onFrontendCallback = e5;
  }
};
var m = class extends p {
  constructor() {
    super(...arguments), this.runningBackend = false;
  }
  startCheck() {
    "object" == typeof plus && (plus.globalEvent.addEventListener("resume", () => {
      this.runningBackend = false, this.runningBackend, this.onFrontendCallback && this.onFrontendCallback();
    }, false), plus.globalEvent.addEventListener("pause", () => {
      this.runningBackend = true, this.runningBackend;
    }, false));
  }
  isBackend() {
    return this.runningBackend;
  }
  support() {
    const e5 = d.currentPlatform();
    return [l.UNI_IOS, l.UNI_ANDROID].includes(e5);
  }
};
var f = class extends p {
  constructor() {
    super(...arguments), this.runningBackend = false;
  }
  startCheck() {
    wx.onAppShow(() => {
      this.runningBackend = false;
    }), wx.onAppHide(() => {
      this.runningBackend = true;
    });
  }
  isBackend() {
    return this.runningBackend;
  }
  support() {
    return d.currentPlatform() === l.MP_WX;
  }
};
var g = new class {
  constructor() {
    [new m(), new f()].forEach((e5) => {
      if (e5.support())
        return this.checker = e5, void this.checker.startCheck();
    });
  }
  isBackend() {
    return this.checker && this.checker.isBackend();
  }
  onFrontend(e5) {
    this.checker.onFrontend(e5);
  }
}();
var y;
var S;
var E = Object.freeze({ __proto__: null, runStatus: g });
!function(e5) {
  e5.authorize = "authorize", e5.manualDisconnect = "manualDisconnect", e5.subscribe = "subscribe", e5.unsubscribe = "unsubscribe", e5.publish = "publish", e5.ack = "ack", e5.historyMessages = "historyMessages", e5.hereNow = "hereNow", e5.hereNowByUserIds = "hereNowByUserIds", e5.PUBSUB_PRESENCE_SUBSCRIBE = "PUBSUB_PRESENCE_SUBSCRIBE", e5.PUBSUB_PRESENCE_UNSUBSCRIBE = "PUBSUB_PRESENCE_UNSUBSCRIBE", e5.PUBSUB_PRESENCE_HERENOW = "PUBSUB_PRESENCE_HERENOW", e5.imLastConversations = "imLastConversations", e5.markPrivateMessageAsRead = "markPrivateMessageAsRead", e5.markGroupMessageAsRead = "markGroupMessageAsRead", e5.imGroupOnlineCount = "imGroupOnlineCount", e5.imHereNow = "imHereNow", e5.imGroupHereNow = "imGroupHereNow", e5.publishIM = "publishIM", e5.subscribeUserPresence = "subscribeUserPresence", e5.unsubscribeUserPresence = "unsubscribeUserPresence", e5.subscribeGroupPresence = "subscribeGroupPresence", e5.unsubscribeGroupPresence = "unsubscribeGroupPresence", e5.removeConversation = "removeConversation", e5.topConversation = "topConversation", e5.imData = "imData", e5.subscribeGroups = "subscribeGroups", e5.unsubscribeGroup = "unsubscribeGroup", e5.IM_DELETE_MESSAGE = "IM_DELETE_MESSAGE", e5.IM_HISTORY = "IM_HISTORY", e5.IM_HISTORY_CHANGE = "IM_HISTORY_CHANGE", e5.IM_RECALL_MESSAGE = "IM_RECALL_MESSAGE", e5.IM_MARK_AS_READ = "IM_MARK_AS_READ", e5.CS_PENDING_CONVERSATION = "CS_PENDING_CONVERSATION", e5.CS_ACCEPT = "CS_ACCEPT", e5.CS_END = "CS_END", e5.CS_TRANSFER = "CS_TRANSFER", e5.CS_AGENTS = "CS_AGENTS", e5.CS_CUSTOMER_STATUS = "CS_CUSTOMER_STATUS", e5.CS_MY_TEAMS = "CS_MY_TEAMS", e5.CS_ONLINE = "CS_ONLINE", e5.CS_OFFLINE = "CS_OFFLINE", e5.CS_LIVE_SESSION = "CS_LIVE_SESSION", e5.CS_QUIT_LIVE = "CS_QUIT_LIVE", e5.SET_IOS_BADGE = "SET_IOS_BADGE", e5.MD_CMD = "MD_CMD";
}(y || (y = {})), function(e5) {
  e5[e5.connect = 3e3] = "connect", e5[e5.reconnectionDelayMax = 3e3] = "reconnectionDelayMax", e5[e5.commonQuerySingle = 2500] = "commonQuerySingle", e5[e5.commonQueryTotal = 12e3] = "commonQueryTotal", e5[e5.commonRequestSingle = 1700] = "commonRequestSingle", e5[e5.commonRequestTotal = 12e3] = "commonRequestTotal", e5[e5.commonInfiniteSingle = 1700] = "commonInfiniteSingle", e5[e5.commonInfiniteTotal = 864e5] = "commonInfiniteTotal";
}(S || (S = {}));
var v = class {
  static onSuccess(e5, t2) {
    u.isFunction(e5.onSuccess) && e5.onSuccess(t2);
  }
  static onFailed(e5, t2) {
    if (!u.isObject(e5) || !u.isFunction(e5.onFailed))
      throw t2;
    e5.onFailed(t2);
  }
};
function b(e5, t2, s2, i2) {
  return new (s2 || (s2 = Promise))(function(n2, o2) {
    function r2(e6) {
      try {
        c2(i2.next(e6));
      } catch (e7) {
        o2(e7);
      }
    }
    function a2(e6) {
      try {
        c2(i2.throw(e6));
      } catch (e7) {
        o2(e7);
      }
    }
    function c2(e6) {
      var t3;
      e6.done ? n2(e6.value) : (t3 = e6.value, t3 instanceof s2 ? t3 : new s2(function(e7) {
        e7(t3);
      })).then(r2, a2);
    }
    c2((i2 = i2.apply(e5, t2 || [])).next());
  });
}
var C = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function M(e5) {
  if (e5.__esModule)
    return e5;
  var t2 = Object.defineProperty({}, "__esModule", { value: true });
  return Object.keys(e5).forEach(function(s2) {
    var i2 = Object.getOwnPropertyDescriptor(e5, s2);
    Object.defineProperty(t2, s2, i2.get ? i2 : { enumerable: true, get: function() {
      return e5[s2];
    } });
  }), t2;
}
var w = { exports: {} };
!function(e5) {
  function t2(e6) {
    if (e6)
      return function(e7) {
        for (var s2 in t2.prototype)
          e7[s2] = t2.prototype[s2];
        return e7;
      }(e6);
  }
  w.exports = t2, t2.prototype.on = t2.prototype.addEventListener = function(e6, t3) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e6] = this._callbacks["$" + e6] || []).push(t3), this;
  }, t2.prototype.once = function(e6, t3) {
    function s2() {
      this.off(e6, s2), t3.apply(this, arguments);
    }
    return s2.fn = t3, this.on(e6, s2), this;
  }, t2.prototype.off = t2.prototype.removeListener = t2.prototype.removeAllListeners = t2.prototype.removeEventListener = function(e6, t3) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
      return this._callbacks = {}, this;
    var s2, i2 = this._callbacks["$" + e6];
    if (!i2)
      return this;
    if (1 == arguments.length)
      return delete this._callbacks["$" + e6], this;
    for (var n2 = 0; n2 < i2.length; n2++)
      if ((s2 = i2[n2]) === t3 || s2.fn === t3) {
        i2.splice(n2, 1);
        break;
      }
    return this;
  }, t2.prototype.emit = function(e6) {
    this._callbacks = this._callbacks || {};
    var t3 = [].slice.call(arguments, 1), s2 = this._callbacks["$" + e6];
    if (s2)
      for (var i2 = 0, n2 = (s2 = s2.slice(0)).length; i2 < n2; ++i2)
        s2[i2].apply(this, t3);
    return this;
  }, t2.prototype.listeners = function(e6) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e6] || [];
  }, t2.prototype.hasListeners = function(e6) {
    return !!this.listeners(e6).length;
  };
}();
var I = w.exports;
var N = { exports: {} };
var T = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
if (T) {
  R = new Uint8Array(16);
  N.exports = function() {
    return T(R), R;
  };
} else {
  A = new Array(16);
  N.exports = function() {
    for (var e5, t2 = 0; t2 < 16; t2++)
      0 == (3 & t2) && (e5 = 4294967296 * Math.random()), A[t2] = e5 >>> ((3 & t2) << 3) & 255;
    return A;
  };
}
var R;
var A;
for (k = [], O = 0; O < 256; ++O)
  k[O] = (O + 256).toString(16).substr(1);
var k;
var O;
var P;
var _;
var D = function(e5, t2) {
  var s2 = t2 || 0, i2 = k;
  return [i2[e5[s2++]], i2[e5[s2++]], i2[e5[s2++]], i2[e5[s2++]], "-", i2[e5[s2++]], i2[e5[s2++]], "-", i2[e5[s2++]], i2[e5[s2++]], "-", i2[e5[s2++]], i2[e5[s2++]], "-", i2[e5[s2++]], i2[e5[s2++]], i2[e5[s2++]], i2[e5[s2++]], i2[e5[s2++]], i2[e5[s2++]]].join("");
};
var x = N.exports;
var U = D;
var G = 0;
var F = 0;
var L = function(e5, t2, s2) {
  var i2 = t2 && s2 || 0, n2 = t2 || [], o2 = (e5 = e5 || {}).node || P, r2 = void 0 !== e5.clockseq ? e5.clockseq : _;
  if (null == o2 || null == r2) {
    var a2 = x();
    null == o2 && (o2 = P = [1 | a2[0], a2[1], a2[2], a2[3], a2[4], a2[5]]), null == r2 && (r2 = _ = 16383 & (a2[6] << 8 | a2[7]));
  }
  var c2 = void 0 !== e5.msecs ? e5.msecs : (/* @__PURE__ */ new Date()).getTime(), u2 = void 0 !== e5.nsecs ? e5.nsecs : F + 1, l2 = c2 - G + (u2 - F) / 1e4;
  if (l2 < 0 && void 0 === e5.clockseq && (r2 = r2 + 1 & 16383), (l2 < 0 || c2 > G) && void 0 === e5.nsecs && (u2 = 0), u2 >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  G = c2, F = u2, _ = r2;
  var d2 = (1e4 * (268435455 & (c2 += 122192928e5)) + u2) % 4294967296;
  n2[i2++] = d2 >>> 24 & 255, n2[i2++] = d2 >>> 16 & 255, n2[i2++] = d2 >>> 8 & 255, n2[i2++] = 255 & d2;
  var h2 = c2 / 4294967296 * 1e4 & 268435455;
  n2[i2++] = h2 >>> 8 & 255, n2[i2++] = 255 & h2, n2[i2++] = h2 >>> 24 & 15 | 16, n2[i2++] = h2 >>> 16 & 255, n2[i2++] = r2 >>> 8 | 128, n2[i2++] = 255 & r2;
  for (var p2 = 0; p2 < 6; ++p2)
    n2[i2 + p2] = o2[p2];
  return t2 || U(n2);
};
var B = N.exports;
var q = D;
var j = function(e5, t2, s2) {
  var i2 = t2 && s2 || 0;
  "string" == typeof e5 && (t2 = "binary" === e5 ? new Array(16) : null, e5 = null);
  var n2 = (e5 = e5 || {}).random || (e5.rng || B)();
  if (n2[6] = 15 & n2[6] | 64, n2[8] = 63 & n2[8] | 128, t2)
    for (var o2 = 0; o2 < 16; ++o2)
      t2[i2 + o2] = n2[o2];
  return t2 || q(n2);
};
var V = L;
var H = j;
var z = H;
z.v1 = V, z.v4 = H;
var W = z;
var J = class {
  support() {
    return true;
  }
  getParams() {
    return this.params;
  }
  setData(e5) {
    this.active = e5.a, this.data = e5.d;
  }
  preConnect(e5) {
  }
  postConnect() {
  }
};
var X = class {
  static initModule(e5) {
    e5.support() && this.modules.set(e5.name, e5);
  }
  static getParams() {
    return b(this, void 0, void 0, function* () {
      let e5 = {};
      for (const [t2, s2] of this.modules)
        e5[t2] = (yield s2.getParams()) || null;
      return e5;
    });
  }
  static setDatas(e5) {
    Object.keys(e5).forEach((t2) => {
      this.modules.get(t2).setData(e5[t2]);
    });
  }
  static preConnect(e5) {
    this.modules.forEach((t2, s2) => {
      t2.preConnect(e5);
    });
  }
  static postConnect() {
    this.modules.forEach((e5, t2) => {
      e5.postConnect();
    });
  }
};
X.Module = J, X.modules = /* @__PURE__ */ new Map();
var $ = I;
var Y = class {
  constructor() {
    this.emitter = new $();
  }
  on(e5, t2) {
    return this.emitter.on(e5, t2), this;
  }
  once(e5, t2) {
    return this.emitter.once(e5, t2), this;
  }
  off(e5, t2) {
    return this.emitter.off(e5, t2), this;
  }
  fire(e5, t2) {
    return this.emitter.emit(e5, t2), this;
  }
};
var Q = class {
  constructor() {
    this.eventDriver = new Y();
  }
  on(e5, t2) {
    this.eventDriver.on(e5, t2);
  }
  off(e5, t2) {
    this.eventDriver.off(e5, t2);
  }
  fire(e5, t2) {
    this.eventDriver.fire(e5, t2);
  }
};
var K = new class {
  isDef(e5) {
    return !this.isUndef(e5);
  }
  isUndef(e5) {
    return null == e5;
  }
  isPrimitive(e5) {
    return "string" == typeof e5 || "number" == typeof e5 || "symbol" == typeof e5 || "boolean" == typeof e5;
  }
  isObject(e5) {
    return null !== e5 && "object" == typeof e5;
  }
  isPlainObject(e5) {
    return "[object Object]" === Object.prototype.toString.call(e5);
  }
  isRegExp(e5) {
    return "[object RegExp]" === Object.prototype.toString.call(e5);
  }
  isValidArrayIndex(e5) {
    let t2 = parseFloat(String(e5));
    return t2 >= 0 && Math.floor(t2) === t2 && isFinite(e5);
  }
  isString(e5) {
    return "string" == typeof e5;
  }
  isNumber(e5) {
    return "number" == typeof e5;
  }
  isStringOrNumber(e5) {
    return this.isString(e5) || this.isNumber(e5);
  }
  isArray(e5) {
    return "[object Array]" === Object.prototype.toString.call(e5);
  }
  isEmpty(e5) {
    return this.isArray(e5) ? 0 === e5.length : this.isObject(e5) ? !this.isDef(e5) : !this.isNumber(e5) && (this.isString(e5) ? "" === e5.trim() : !this.isDef(e5));
  }
  isNative(e5) {
    return "function" == typeof e5 && /native code/.test(e5.toString());
  }
  isFunction(e5) {
    return "function" == typeof e5;
  }
  isBoolean(e5) {
    return "boolean" == typeof e5;
  }
  isTrue(e5) {
    return true === e5;
  }
  isFalse(e5) {
    return false === e5;
  }
  isNull(e5) {
    return null === e5;
  }
}();
var Z = I;
var ee = class {
  constructor() {
    this.emitter = new Z();
  }
  on(e5, t2) {
    if (!K.isString(e5))
      throw Error("event require a string.");
    if (!K.isFunction(t2))
      throw Error("callback must be a function");
    this.emitter.on(e5, t2);
  }
  fire(e5, t2) {
    this.emitter.emit(e5, t2);
  }
  off(e5, t2) {
    this.emitter.off(e5, t2);
  }
};
var te = class {
  static init(e5, t2, s2, i2, n2, o2) {
    this.Socket = e5, this.N = t2, this.Member = s2, this.v = i2, this.Platform = n2, this.GModules = o2;
  }
};
var se = W;
var ie = class {
  static get() {
    return se.v1().replace(/-/g, "");
  }
};
var ne;
var oe;
var re;
var ae;
var ce;
var ue;
(oe = ne || (ne = {})).WRITE = "WRITE", oe.READ = "READ", oe.NONE = "NONE";
var le = class {
  constructor(e5) {
    this.permission = ne.NONE, this.singleTimeout = 0, this.totalTimeout = 0, this.startTime = 0, this.complete = false, this.retried = 0, this.unique = false, this.uuid = ie.get(), this.name = e5.name, this.params = e5.params, this.permission = e5.permission, this.totalTimeout = e5.totalTimeout, this.singleTimeout = e5.singleTimeout, e5.unique && (this.unique = e5.unique), this.success = (t2) => {
      this.complete || (this.end(), e5.success(t2));
    }, this.fail = (t2) => {
      this.complete || (this.end(), e5.fail(t2));
    };
  }
  start() {
    this.startTime = Date.now(), this.initAutoTimeout();
  }
  end() {
    this.complete = true, clearTimeout(this.timeoutHandler);
  }
  initAutoTimeout() {
    this.timeoutHandler = setTimeout(() => {
      this.complete || this.fail({ resultCode: 408, content: "Host unreachable or timeout" });
    }, this.totalTimeout);
  }
};
var de = class _de extends J {
  static init() {
    return this.module = new _de(), this.module.name = this.GN_MODULE_NAME, this.module;
  }
  static setRegId(e5, t2) {
    if (e5) {
      this.module.regIdPromise = e5;
      let s2 = t2;
      this.module.params = { v: { npv: s2 } };
    }
  }
  preConnect(e5) {
    this.wxmpId = e5.wxmpId;
  }
  getParams() {
    return b(this, void 0, void 0, function* () {
      if (this.params = this.params || {}, this.regIdPromise)
        try {
          const e5 = new Promise((e6, t2) => {
            setTimeout(() => t2("timeout"), 1e3);
          });
          this.params.regId = yield Promise.race([this.regIdPromise, e5]);
        } catch (e5) {
          console.warn("Failed to register the Manufacturers Push service:" + JSON.stringify(e5));
        }
      return this.params.wxmpId = this.wxmpId, this.params;
    });
  }
};
de.GN_MODULE_NAME = "GN";
var he = class _he {
  static init(e5) {
    this.allowNotification = true === e5;
    let t2 = de.init();
    X.initModule(t2), this.supportAppNotification() && (this.uniappPlugin = uni.requireNativePlugin("GoEasy-Uniapp"), this.uniappPlugin ? (this.regIdPromise = this.askRegId(), this.v = this.uniappPlugin.v(), de.setRegId(this.regIdPromise, this.v)) : console.warn("No GoEasy-Uniapp Native Plugin."), this.setClientBadge(0));
  }
  static addAssembler(e5) {
    this.payloadAssemblers.push(e5);
  }
  static assemblePayload(e5) {
    let t2 = this.payloadAssemblers.find((t3) => t3.support(e5));
    return t2 ? t2.assemble(e5) : e5;
  }
  static createLocalNotification(e5, t2, s2, i2, n2) {
    g.isBackend() && (s2.g = 1, "undefined" != typeof plus && (i2 ? (this.uniappPlugin && this.uniappPlugin.playSound(i2), plus.push.createMessage(t2, JSON.stringify(s2), { title: e5, sound: "none" })) : plus.push.createMessage(t2, JSON.stringify(s2), { title: e5 }), "+1" === n2 && this.setClientBadge(_he.badge + 1)));
  }
  static setBadge(e5) {
    if (!Number.isInteger(e5.badge) || e5.badge < 0)
      v.onFailed(e5, "badge must be an integer greater than or equal to 0.");
    else if (_he.supportAppNotification())
      if (this.uniappPlugin && d.currentPlatform() === l.UNI_IOS) {
        let t2 = new le({ name: y.SET_IOS_BADGE, params: { badge: e5.badge }, unique: true, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, permission: ne.WRITE, success: () => {
          v.onSuccess(e5), this.setClientBadge(e5.badge);
        }, fail: (t3) => {
          v.onFailed(e5, t3.content);
        } });
        te.Socket.e(t2);
      } else
        v.onSuccess(e5), this.setClientBadge(e5.badge);
  }
  static setClientBadge(e5) {
    "vivo" !== plus.device.vendor && (_he.badge = e5, plus.runtime.setBadgeNumber(e5));
  }
  static askRegId() {
    let e5 = null, t2 = 0;
    const s2 = () => new Promise((i2, n2) => {
      this.uniappPlugin.regId((e6) => {
        i2(e6);
      }, (i3) => {
        if (!(1e6 === i3.data.code && t2 <= 10))
          return clearTimeout(e5), n2(i3);
        e5 = setTimeout(() => {
          t2++, this.regIdPromise = s2();
        }, 3500);
      });
    });
    return s2();
  }
  static getRegIdPromise() {
    return this.regIdPromise;
  }
  static supportAppNotification() {
    const e5 = d.currentPlatform();
    return this.allowNotification && (e5 === l.UNI_ANDROID || e5 === l.UNI_IOS);
  }
  static listenPlusClickNotification() {
    plus.push.addEventListener("click", (e5) => {
      try {
        if (e5) {
          const t2 = "string" == typeof e5.payload ? JSON.parse(e5.payload) : e5.payload;
          if (this.availableIntent(t2)) {
            let e6 = this.assemblePayload(t2);
            plus.push.clear(), this.onClickNotificationCallback(e6);
          }
        }
      } catch (e6) {
      }
    });
  }
  static availableIntent(e5) {
    return e5 && Object.keys(e5).length && e5.g && 1 === parseInt(e5.g);
  }
  static getIntentData() {
    this.uniappPlugin.getIntentData((e5) => {
      if (!this.availableIntent(e5))
        return;
      let t2 = this.assemblePayload(e5);
      const s2 = d.currentPlatform();
      plus.push.clear(), s2 === l.UNI_ANDROID && this.uniappPlugin.clearAll(), this.onClickNotificationCallback(t2);
    });
  }
  static listenClick() {
    this.listenPlusClickNotification();
    const e5 = d.currentPlatform();
    this.uniappPlugin && e5 === l.UNI_ANDROID && (this.getIntentData(), g.onFrontend(() => {
      this.getIntentData();
    }));
  }
  static onClickNotification(e5) {
    if (_he.supportAppNotification()) {
      if (!u.isFunction(e5))
        throw new Error("The arguments must be a function.");
      null === this.onClickNotificationCallback ? (this.onClickNotificationCallback = e5, this.listenClick()) : console.warn("The onClickNotification event has been listened on. Please do not listen to it more than once.");
    } else
      console.warn("The current environment doesn't support or allowNotification is false.");
  }
};
function pe(e5) {
  if (null === e5 || "object" != typeof e5 || "isActiveClone" in e5)
    return e5;
  let t2 = e5 instanceof Array ? [] : {};
  for (let s2 in e5)
    "object" == typeof e5[s2] ? t2[s2] = pe(e5[s2]) : t2[s2] = e5[s2];
  return t2;
}
function me(e5) {
  return { lang: (e5 == null ? void 0 : e5.lang) ?? (re == null ? void 0 : re.lang), message: e5 == null ? void 0 : e5.message, abortEarly: (e5 == null ? void 0 : e5.abortEarly) ?? (re == null ? void 0 : re.abortEarly), abortPipeEarly: (e5 == null ? void 0 : e5.abortPipeEarly) ?? (re == null ? void 0 : re.abortPipeEarly) };
}
function fe(e5) {
  var _a, _b;
  const t2 = typeof e5;
  return "string" === t2 ? `"${e5}"` : "number" === t2 || "bigint" === t2 || "boolean" === t2 ? `${e5}` : "object" === t2 || "function" === t2 ? (e5 && ((_b = (_a = Object.getPrototypeOf(e5)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : t2;
}
function ge(e5, t2, s2, i2, n2) {
  var _a;
  const o2 = n2 && "input" in n2 ? n2.input : s2.value, r2 = (n2 == null ? void 0 : n2.expected) ?? e5.expects ?? null, a2 = (n2 == null ? void 0 : n2.received) ?? fe(o2), c2 = { kind: e5.kind, type: e5.type, input: o2, expected: r2, received: a2, message: `Invalid ${t2}: ${r2 ? `Expected ${r2} but r` : "R"}eceived ${a2}`, requirement: e5.requirement, path: n2 == null ? void 0 : n2.path, issues: n2 == null ? void 0 : n2.issues, lang: i2.lang, abortEarly: i2.abortEarly, abortPipeEarly: i2.abortPipeEarly }, u2 = "schema" === e5.kind, l2 = (n2 == null ? void 0 : n2.message) ?? e5.message ?? (d2 = e5.reference, h2 = c2.lang, (_a = ue == null ? void 0 : ue.get(d2)) == null ? void 0 : _a.get(h2)) ?? (u2 ? function(e6) {
    return ce == null ? void 0 : ce.get(e6);
  }(c2.lang) : null) ?? i2.message ?? function(e6) {
    return ae == null ? void 0 : ae.get(e6);
  }(c2.lang);
  var d2, h2;
  void 0 !== l2 && (c2.message = "function" == typeof l2 ? l2(c2) : l2), u2 && (s2.typed = false), s2.issues ? s2.issues.push(c2) : s2.issues = [c2];
}
function ye(e5) {
  return { version: 1, vendor: "valibot", validate: (t2) => e5["~run"]({ value: t2 }, me()) };
}
function Se(e5, t2) {
  const s2 = [...new Set(e5)];
  return s2.length > 1 ? `(${s2.join(` ${t2} `)})` : s2[0] ?? "never";
}
he.uniappPlugin = null, he.v = null, he.regIdPromise = null, he.onClickNotificationCallback = null, he.payloadAssemblers = new Array();
var Ee;
var ve = class extends Error {
  constructor(e5) {
    super(e5[0].message), this.name = "ValiError", this.issues = e5;
  }
};
function be(e5, t2) {
  return { kind: "validation", type: "max_length", reference: be, async: false, expects: `<=${e5}`, requirement: e5, message: t2, "~run"(e6, t3) {
    return e6.typed && e6.value.length > this.requirement && ge(this, "length", e6, t3, { received: `${e6.value.length}` }), e6;
  } };
}
function Ce(e5) {
  return { kind: "validation", type: "non_empty", reference: Ce, async: false, expects: "!0", message: e5, "~run"(e6, t2) {
    return e6.typed && 0 === e6.value.length && ge(this, "length", e6, t2, { received: "0" }), e6;
  } };
}
function Me(e5, t2, s2) {
  return { kind: "validation", type: "partial_check", reference: Me, async: false, expects: null, paths: e5, requirement: t2, message: s2, "~run"(t3, s3) {
    return !t3.typed && !function(e6, t4) {
      var _a;
      if (e6.issues)
        for (const s4 of t4)
          for (const t5 of e6.issues) {
            let e7 = false;
            const i2 = Math.min(s4.length, ((_a = t5.path) == null ? void 0 : _a.length) ?? 0);
            for (let n2 = 0; n2 < i2; n2++)
              if (s4[n2] !== t5.path[n2].key && ("$" !== s4[n2] || "array" !== t5.path[n2].type)) {
                e7 = true;
                break;
              }
            if (!e7)
              return false;
          }
      return true;
    }(t3, e5) || this.requirement(t3.value) || ge(this, "input", t3, s3), t3;
  } };
}
function we(e5, t2, s2) {
  return "function" == typeof e5.fallback ? e5.fallback(t2, s2) : e5.fallback;
}
function Ie(e5, t2) {
  return { ...e5, "~run"(s2, i2) {
    const n2 = s2.issues && [...s2.issues];
    if ((s2 = e5["~run"](s2, i2)).issues) {
      for (const e6 of s2.issues)
        if (!(n2 == null ? void 0 : n2.includes(e6))) {
          let i3 = s2.value;
          for (const s3 of t2) {
            const t3 = i3[s3], n3 = { type: "unknown", origin: "value", input: i3, key: s3, value: t3 };
            if (e6.path ? e6.path.push(n3) : e6.path = [n3], !t3)
              break;
            i3 = t3;
          }
        }
    }
    return s2;
  } };
}
function Ne(e5, t2, s2) {
  return "function" == typeof e5.default ? e5.default(t2, s2) : e5.default;
}
function Te() {
  return { kind: "schema", type: "any", reference: Te, expects: "any", async: false, get "~standard"() {
    return ye(this);
  }, "~run": (e5) => (e5.typed = true, e5) };
}
function Re(e5, t2) {
  return { kind: "schema", type: "array", reference: Re, expects: "Array", async: false, item: e5, message: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    var _a;
    const s2 = e6.value;
    if (Array.isArray(s2)) {
      e6.typed = true, e6.value = [];
      for (let i2 = 0; i2 < s2.length; i2++) {
        const n2 = s2[i2], o2 = this.item["~run"]({ value: n2 }, t3);
        if (o2.issues) {
          const r2 = { type: "array", origin: "value", input: s2, key: i2, value: n2 };
          for (const t4 of o2.issues)
            t4.path ? t4.path.unshift(r2) : t4.path = [r2], (_a = e6.issues) == null ? void 0 : _a.push(t4);
          if (e6.issues || (e6.issues = o2.issues), t3.abortEarly) {
            e6.typed = false;
            break;
          }
        }
        o2.typed || (e6.typed = false), e6.value.push(o2.value);
      }
    } else
      ge(this, "type", e6, t3);
    return e6;
  } };
}
function Ae(e5) {
  return { kind: "schema", type: "boolean", reference: Ae, expects: "boolean", async: false, message: e5, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t2) {
    return "boolean" == typeof e6.value ? e6.typed = true : ge(this, "type", e6, t2), e6;
  } };
}
function ke(e5, t2) {
  return { kind: "schema", type: "custom", reference: ke, expects: "unknown", async: false, check: e5, message: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    return this.check(e6.value) ? e6.typed = true : ge(this, "type", e6, t3), e6;
  } };
}
function Oe(e5) {
  return { kind: "schema", type: "function", reference: Oe, expects: "Function", async: false, message: e5, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t2) {
    return "function" == typeof e6.value ? e6.typed = true : ge(this, "type", e6, t2), e6;
  } };
}
function Pe(e5, t2) {
  return { kind: "schema", type: "instance", reference: Pe, expects: e5.name, async: false, class: e5, message: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    return e6.value instanceof this.class ? e6.typed = true : ge(this, "type", e6, t3), e6;
  } };
}
function _e(e5, t2) {
  return { kind: "schema", type: "literal", reference: _e, expects: fe(e5), async: false, literal: e5, message: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    return e6.value === this.literal ? e6.typed = true : ge(this, "type", e6, t3), e6;
  } };
}
function De(e5) {
  return { kind: "schema", type: "number", reference: De, expects: "number", async: false, message: e5, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t2) {
    return "number" != typeof e6.value || isNaN(e6.value) ? ge(this, "type", e6, t2) : e6.typed = true, e6;
  } };
}
function xe(e5, t2) {
  return { kind: "schema", type: "object", reference: xe, expects: "Object", async: false, entries: e5, message: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    var _a;
    const s2 = e6.value;
    if (s2 && "object" == typeof s2) {
      e6.typed = true, e6.value = {};
      for (const i2 in this.entries) {
        const n2 = this.entries[i2];
        if (i2 in s2 || ("exact_optional" === n2.type || "optional" === n2.type || "nullish" === n2.type) && void 0 !== n2.default) {
          const o2 = i2 in s2 ? s2[i2] : Ne(n2), r2 = n2["~run"]({ value: o2 }, t3);
          if (r2.issues) {
            const n3 = { type: "object", origin: "value", input: s2, key: i2, value: o2 };
            for (const t4 of r2.issues)
              t4.path ? t4.path.unshift(n3) : t4.path = [n3], (_a = e6.issues) == null ? void 0 : _a.push(t4);
            if (e6.issues || (e6.issues = r2.issues), t3.abortEarly) {
              e6.typed = false;
              break;
            }
          }
          r2.typed || (e6.typed = false), e6.value[i2] = r2.value;
        } else if (void 0 !== n2.fallback)
          e6.value[i2] = we(n2);
        else if ("exact_optional" !== n2.type && "optional" !== n2.type && "nullish" !== n2.type && (ge(this, "key", e6, t3, { input: void 0, expected: `"${i2}"`, path: [{ type: "object", origin: "key", input: s2, key: i2, value: s2[i2] }] }), t3.abortEarly))
          break;
      }
    } else
      ge(this, "type", e6, t3);
    return e6;
  } };
}
function Ue(e5, t2) {
  return { kind: "schema", type: "optional", reference: Ue, expects: `(${e5.expects} | undefined)`, async: false, wrapped: e5, default: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    return void 0 === e6.value && (void 0 !== this.default && (e6.value = Ne(this, e6, t3)), void 0 === e6.value) ? (e6.typed = true, e6) : this.wrapped["~run"](e6, t3);
  } };
}
function Ge(e5, t2) {
  return { kind: "schema", type: "picklist", reference: Ge, expects: Se(e5.map(fe), "|"), async: false, options: e5, message: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    return this.options.includes(e6.value) ? e6.typed = true : ge(this, "type", e6, t3), e6;
  } };
}
function Fe(e5) {
  return { kind: "schema", type: "string", reference: Fe, expects: "string", async: false, message: e5, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t2) {
    return "string" == typeof e6.value ? e6.typed = true : ge(this, "type", e6, t2), e6;
  } };
}
function Le(e5) {
  let t2;
  if (e5)
    for (const s2 of e5)
      t2 ? t2.push(...s2.issues) : t2 = s2.issues;
  return t2;
}
function Be(e5, t2) {
  return { kind: "schema", type: "union", reference: Be, expects: Se(e5.map((e6) => e6.expects), "|"), async: false, options: e5, message: t2, get "~standard"() {
    return ye(this);
  }, "~run"(e6, t3) {
    let s2, i2, n2;
    for (const o2 of this.options) {
      const r2 = o2["~run"]({ value: e6.value }, t3);
      if (r2.typed) {
        if (!r2.issues) {
          s2 = r2;
          break;
        }
        i2 ? i2.push(r2) : i2 = [r2];
      } else
        n2 ? n2.push(r2) : n2 = [r2];
    }
    if (s2)
      return s2;
    if (i2) {
      if (1 === i2.length)
        return i2[0];
      ge(this, "type", e6, t3, { issues: Le(i2) }), e6.typed = true;
    } else {
      if (1 === (n2 == null ? void 0 : n2.length))
        return n2[0];
      ge(this, "type", e6, t3, { issues: Le(n2) });
    }
    return e6;
  } };
}
function qe(...e5) {
  return { ...e5[0], pipe: e5, get "~standard"() {
    return ye(this);
  }, "~run"(t2, s2) {
    for (const i2 of e5)
      if ("metadata" !== i2.kind) {
        if (t2.issues && ("schema" === i2.kind || "transformation" === i2.kind)) {
          t2.typed = false;
          break;
        }
        t2.issues && (s2.abortEarly || s2.abortPipeEarly) || (t2 = i2["~run"](t2, s2));
      }
    return t2;
  } };
}
!function(e5) {
  e5.TEXT = "text", e5.IMAGE = "image", e5.FILE = "file", e5.VIDEO = "video", e5.AUDIO = "audio";
}(Ee || (Ee = {}));
var je = class _je {
  constructor(e5, t2, s2) {
    this.scene = e5, this.id = t2, u.isDef(s2) && (this.teamId = s2);
  }
  toString() {
    return o.PRIVATE === this.scene || o.GROUP === this.scene ? this.scene + "#" + this.id : this.scene + "#" + this.id + "#" + this.teamId;
  }
  customerId() {
    if (o.CS === this.scene)
      return this.id === this.teamId ? te.Socket.user().id : this.id;
  }
  static byScene(e5, t2, s2) {
    return new _je(e5, t2, s2);
  }
  static byIMMessage(e5) {
    let t2, s2, i2 = e5.scene();
    if (i2 === o.PRIVATE) {
      let t3 = e5.senderId, i3 = e5.targetId();
      s2 = te.Socket.user().id === t3 ? i3 : t3;
    } else if (i2 === o.GROUP)
      s2 = e5.targetId();
    else {
      if (i2 !== o.CS)
        throw { code: 400, content: `scene ${i2} not exists` };
      s2 = e5.targetId(), t2 = e5.teamId;
    }
    return new _je(i2, s2, t2);
  }
  static byMessageReadRemoteEvent(e5) {
    let t2, s2 = e5.scene, i2 = e5.targetId, n2 = e5.markerId, r2 = e5.teamId;
    return s2 === o.PRIVATE ? t2 = te.Socket.user().id === n2 ? i2 : n2 : s2 === o.GROUP ? t2 = i2 : s2 === o.CS && (t2 = i2 === r2 ? n2 === te.Socket.user().id ? r2 : n2 : n2 === te.Socket.user().id ? i2 : r2), new _je(s2, t2, r2);
  }
  static byIMMessageDeletedEvent(e5) {
    let t2 = e5.scene, s2 = e5.deleterId;
    if (t2 === o.PRIVATE) {
      let i2 = te.Socket.user().id === s2 ? e5.targetId : s2;
      return new _je(t2, i2);
    }
    if (t2 === o.GROUP)
      return new _je(t2, e5.targetId);
  }
  static byConversationDTO(e5) {
    let t2 = e5.lastMessage;
    return this.byIMMessage(t2);
  }
  static byConversationId(e5, t2) {
    let s2;
    if (e5 === o.PRIVATE) {
      let e6 = t2.split(":", 2);
      s2 = e6[0] === te.Socket.user().id ? e6[1] : e6[0];
    } else
      s2 = t2;
    return new _je(e5, s2);
  }
};
var Ve = class {
  clearUseLessAttribute() {
    delete this.buildOptions;
  }
  isOtherSent() {
    return this.senderId !== te.Socket.user().id;
  }
};
var He = class extends Ve {
  constructor() {
    super(...arguments), this.read = false;
  }
  scene() {
    return o.PRIVATE;
  }
  targetId() {
    return this.receiverId;
  }
};
var ze = class extends Ve {
  scene() {
    return o.GROUP;
  }
  targetId() {
    return this.groupId;
  }
};
var We = class extends Ve {
  constructor() {
    super(...arguments), this.accepted = false;
  }
  scene() {
    return o.CS;
  }
  targetId() {
    return te.Socket.user().id === this.customerId() ? this.teamId : this.customerId();
  }
  sendByCustomer() {
    return this.to === this.teamId;
  }
  customerId() {
    return this.sendByCustomer() ? this.senderId : this.to;
  }
  isOtherSent() {
    return te.Socket.user().id === this.customerId() ? this.senderId !== te.Socket.user().id : this.senderId === this.customerId();
  }
};
var Je = { maxString: (e5) => qe(Fe(), Ce(), be(e5)), nonEmptyString: qe(Fe(), Ce()), object: ke((e5) => "object" == typeof e5 && null !== e5 && !Array.isArray(e5), "must be an object."), userId: qe(Fe(), Ce(), be(60), ke((e5) => {
  if (te.Socket.user().id === e5)
    throw new Error("id can not be the same as your id");
  return e5;
})), sceneType: qe(Fe(), Ge([o.PRIVATE, o.GROUP, o.CS])) };
var Xe = { onSuccess: Ue(Oe()), onFailed: Ue(Oe()) };
var $e = xe({ appkey: Je.nonEmptyString, host: Je.nonEmptyString, modules: Re(Je.nonEmptyString), allowNotification: Ue(Ae()), forceTLS: Ue(Ae()), supportOldBrowser: Ue(Ae()), reactNativeOptions: Ue(xe({ platform: Te(), asyncStorage: Te() })), customProvider: Ue(xe({ loadConversations: Oe(), loadHistory: Oe() })) });
var Ye = qe(xe(Object.assign({ id: Ue(Je.nonEmptyString), data: Ue(Je.object), otp: Ue(Je.nonEmptyString), wxmpId: Ue(xe({ appid: Je.nonEmptyString, openid: Je.nonEmptyString })), onProgress: Ue(Oe()) }, Xe)), Ie(Me([["id"], ["data"]], (e5) => !X.modules.get("GIM") || e5.id && e5.data, "id and data are required for IM module"), ["data"]));
var Qe = xe({ id: Je.userId, data: Je.object });
var Ke = qe(Be([xe({ type: Je.sceneType, id: Je.userId, data: Je.object }), xe({ type: Je.sceneType, receivers: Re(Qe) })]), ke((e5) => {
  if (!e5.receivers)
    return true;
  const t2 = e5.receivers.map((e6) => e6.id);
  if (Array.from(new Set(t2)).length < t2.length)
    throw new Error("receivers cannot have duplicate ids");
  if (e5.type === o.PRIVATE && e5.receivers.length > 200)
    throw new Error("private message cannot have more than 200 receivers");
  if (e5.type === o.GROUP && e5.receivers.length > 3)
    throw new Error("group message cannot have more than 3 receivers");
  return true;
}));
var Ze = Ue(xe({ template_id: Fe(), url: Ue(Fe()), miniprogram: Ue(xe({ appid: Fe(), pagepath: Fe() })), data: Je.object }));
var et = qe(xe({ channel_id: Ue(Fe()), category: Ue(Fe()) }), ke((e5) => {
  if (!e5.channel_id && !e5.category)
    throw { code: 400, content: "Must provide at least one of channel_id or category." };
  return true;
}));
var st = Ue(xe({ title: Je.maxString(32), body: Je.maxString(50), sound: Ue(Fe()), badge: Ue(Fe()), vendorOptions: Ue(xe({ huawei: Ue(xe({ category: Fe() })), xiaomi: Ue(xe({ channel_id: Fe() })), oppo: Ue(et), vivo: Ue(xe({ classification: De(), category: Fe() })) })) }));
var it = { image: ["gif", "jpg", "png", "jpeg"], video: ["avi", "mov", "rmvb", "rm", "flv", "mp4", "3gp", "quicktime"], audio: ["mp3", "ogg", "wav", "wma", "ape", "acc", "mpeg"] };
var nt = (e5 = 30, t2) => qe(Te(), Ce(), ke((s2) => {
  var i2;
  if (s2.size && s2.size > 1024 * e5 * 1024)
    throw new Error(`File size must be <= ${e5}MB.`);
  if (t2) {
    const e6 = s2.type || s2.tempFile && s2.tempFile.type;
    if (!e6)
      return true;
    const n2 = null === (i2 = e6.split("/")[1]) || void 0 === i2 ? void 0 : i2.toLowerCase();
    if (n2 && !it[t2].includes(n2))
      throw new Error(`Only ${it[t2].join(",")} is supported for ${t2}.`);
  }
  return true;
}));
function ot(e5) {
  return xe(Object.assign(Object.assign(Object.assign({}, e5), { to: Ke, notification: st, wxmpTemplateMsg: Ze, beforeSend: Ue(Oe()), onProgress: Ue(Oe()) }), Xe));
}
var rt = /* @__PURE__ */ function e2(t2, s2, i2) {
  return { kind: "schema", type: "variant", reference: e2, expects: "Object", async: false, key: t2, options: s2, message: i2, get "~standard"() {
    return ye(this);
  }, "~run"(e5, t3) {
    const s3 = e5.value;
    if (s3 && "object" == typeof s3) {
      let i3, n2 = 0, o2 = this.key, r2 = [];
      const a2 = (e6, c2) => {
        for (const u2 of e6.options) {
          if ("variant" === u2.type)
            a2(u2, new Set(c2).add(u2.key));
          else {
            let e7 = true, a3 = 0;
            for (const i4 of c2) {
              const c3 = u2.entries[i4];
              if (i4 in s3 ? c3["~run"]({ typed: false, value: s3[i4] }, t3).issues : "exact_optional" !== c3.type && "optional" !== c3.type && "nullish" !== c3.type) {
                e7 = false, o2 !== i4 && (n2 < a3 || n2 === a3 && i4 in s3 && !(o2 in s3)) && (n2 = a3, o2 = i4, r2 = []), o2 === i4 && r2.push(u2.entries[i4].expects);
                break;
              }
              a3++;
            }
            if (e7) {
              const e8 = u2["~run"]({ value: s3 }, t3);
              (!i3 || !i3.typed && e8.typed) && (i3 = e8);
            }
          }
          if (i3 && !i3.issues)
            break;
        }
      };
      if (a2(this, /* @__PURE__ */ new Set([this.key])), i3)
        return i3;
      ge(this, "type", e5, t3, { input: s3[o2], expected: Se(r2, "|"), path: [{ type: "object", origin: "value", input: s3, key: o2, value: s3[o2] }] });
    } else
      ge(this, "type", e5, t3);
    return e5;
  } };
}("type", [ot({ type: _e(Ee.TEXT), text: Je.maxString(2500) }), ot({ type: _e(Ee.IMAGE), file: nt(30, "image") }), ot({ type: _e(Ee.VIDEO), file: nt(30, "video") }), ot({ type: _e(Ee.AUDIO), file: nt(30, "audio") }), ot({ type: _e(Ee.FILE), file: nt(500) }), ot({ type: Fe(), payload: Be([Je.maxString(2500), Je.object]) })]);
var at = xe(Object.assign({ messages: qe(Re(Be([Pe(He), Pe(ze)])), Ce(), be(20), ke((e5) => {
  const t2 = je.byIMMessage(e5[0]);
  for (let s2 = 1; s2 < e5.length; s2++) {
    const i2 = je.byIMMessage(e5[s2]);
    if (i2.scene !== t2.scene || i2.id !== t2.id)
      throw new Error("each message must be from the same friend or group");
    const n2 = e5[s2];
    if (n2.status !== r.SUCCESS)
      throw new Error(`message[${s2}] is '${n2.status}' and cannot be recalled`);
    if (n2.recalled)
      throw new Error(`message[${s2}] has been recalled`);
    if (n2.senderId !== te.Socket.user().id)
      throw new Error("it is not allowed to recall messages sent by others");
  }
  return true;
})) }, Xe));
var ct = xe(Object.assign({ messages: qe(Re(Be([Pe(He), Pe(ze), Pe(We)])), Ce(), be(20), ke((e5) => {
  const t2 = je.byIMMessage(e5[0]);
  for (let s2 = 1; s2 < e5.length; s2++) {
    const i2 = je.byIMMessage(e5[s2]);
    if (i2.scene !== t2.scene || i2.id !== t2.id)
      throw new Error("each message must be from the same friend or group");
    const n2 = e5[s2];
    if (n2.status === r.SENDING)
      throw new Error(`message[${s2}] is '${n2.status}' and cannot be deleted`);
  }
  return true;
})) }, Xe));
var ut = (e5) => qe(Fe(), Ce(), ke((t2) => {
  if (!t2)
    throw new Error(`${e5} is required.`);
  return t2;
}));
var lt = ut("customId");
var dt = ut("id");
var ht = xe({ userId: Je.nonEmptyString });
var pt = xe({ groupId: Je.nonEmptyString });
var mt = xe({ type: Je.sceneType, id: Je.nonEmptyString });
var ft = Be([ht, pt, mt]);
var gt = xe({ customer: Qe });
var yt = xe({ customerId: Je.nonEmptyString, agentId: Je.nonEmptyString });
var St = qe(Be([Fe(), De()]), ke((e5) => {
  if (!e5 && 0 !== e5)
    throw new Error("param require string or number.");
  return true;
}));
var Et = (e5 = 100) => qe(Re(St), Ce(), be(e5), ke((e6) => {
  if (e6.some((e7) => 0 === e7.length))
    throw new Error("array has empty item.");
  if (Array.from(new Set(e6)).length < e6.length)
    throw new Error("Duplicate element found in array");
  return true;
}));
var vt = xe(Object.assign({ channel: St, message: Je.maxString(2500), qos: Ue(Ge([-1, 0, 1])), notification: st, wxmpTemplateMsg: Ze, accessToken: Ue(Fe()) }, Xe));
var bt = qe(xe({ channel: Ue(St), channels: Ue(Et(100)), presence: Ue(xe({ enable: Ae() })), accessToken: Ue(Fe()), onMessage: Oe() }), Ie(Me([["channel"], ["channels"]], (e5) => !e5.channel != !e5.channels, "Must provide either channel or channels, but not both or neither"), ["channels"]), Ie(Me([["channel"], ["presence"]], (e5) => {
  var t2;
  return !(null === (t2 = e5.presence) || void 0 === t2 ? void 0 : t2.enable) || !!te.Socket.user().id;
}, "Subscription failed. If presence is enable, the id must be specified when calling the connect method"), ["presence"]));
var Ct = xe({ userIds: Et(100) });
var Mt = xe({ groupIds: Et(100) });
var wt = xe({ channel: St });
var It = xe({ channel: St, membersLimit: Ue(qe(De(), function e3(t2, s2) {
  return { kind: "validation", type: "max_value", reference: e3, async: false, expects: `<=${t2 instanceof Date ? t2.toJSON() : fe(t2)}`, requirement: t2, message: s2, "~run"(e5, t3) {
    return !e5.typed || e5.value <= this.requirement || ge(this, "value", e5, t3, { received: e5.value instanceof Date ? e5.value.toJSON() : fe(e5.value) }), e5;
  } };
}(100))), onPresence: Oe() });
var Nt = xe({ groupId: St });
function Tt(e5, t2) {
  var s2;
  try {
    return function(e6, t3, s3) {
      const i2 = e6["~run"]({ value: t3 }, me(s3));
      if (i2.issues)
        throw new ve(i2.issues);
      return i2.value;
    }(e5, t2);
  } catch (e6) {
    if (e6 instanceof ve) {
      const t3 = e6.issues[0], i2 = null === (s2 = t3.path) || void 0 === s2 ? void 0 : s2.map((e7) => e7.key).filter(Boolean), n2 = (null == i2 ? void 0 : i2.join(".")) || "value";
      throw { code: 400, content: { string: `TypeError: ${n2} must be a string.`, number: `TypeError: ${n2} must be a number.`, non_empty: `${n2} cannot be empty.`, max_length: `${n2} over max length.`, picklist: `${n2} has invalid value.` }[t3.type] || `${n2}: ${t3.message}` };
    }
    throw e6;
  }
}
var Rt = (e5) => Tt(lt, e5);
var At = (e5) => Tt(dt, e5);
var kt = (e5) => Tt(ht, e5);
var Ot = (e5) => Tt(pt, e5);
var Pt = (e5) => Tt(Ct, e5);
var _t = (e5) => Tt(Mt, e5);
var Dt = (e5) => Tt(wt, e5);
var xt = class {
  publish(e5) {
    Tt(vt, e5), e5.channel = e5.channel.toString();
    let t2 = { channel: e5.channel, content: e5.message, nt: e5.notification, at: e5.accessToken, guid: ie.get(), q: e5.qos };
    e5.wxmpTemplateMsg && (t2.wxmpTemplateMsg = pe(e5.wxmpTemplateMsg), t2.wxmpTemplateMsg.data = JSON.stringify(t2.wxmpTemplateMsg.data));
    let s2 = new le({ name: y.publish, params: t2, unique: true, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, permission: ne.WRITE, success: function(t3) {
      v.onSuccess(e5, { code: 200, content: "ok" });
    }, fail: function(t3) {
      v.onFailed(e5, { code: t3.resultCode, content: t3.content });
    } });
    te.Socket.e(s2);
  }
};
var Ut = class {
  constructor(e5) {
    if (this.options = e5, this.channels = e5.channels || [e5.channel], !u.isEmpty(e5.channel)) {
      let t2 = e5.channel.toString();
      this.channels = [t2];
    }
    u.isEmpty(e5.channels) || (this.channels = e5.channels.toString().split(","));
  }
};
var Gt;
var Ft;
var Lt;
!function(e5) {
  e5.message = "message", e5.imMessage = "imMessage", e5.IM_MSG_SYNC = "im:msg:sync", e5.IM_MSG_NEW = "im:msg:new", e5.userPresence = "userPresence", e5.groupPresence = "groupPresence", e5.PS_PRESENCE_EVENT = "PS_PRESENCE_EVENT", e5.IM_MSG_READ = "IM_MSG_READ", e5.IM_MSG_DELETED = "IM_MSG_DELETED", e5.IM_MSG_RECALLED = "IM_MSG_RECALLED", e5.CS_ONLINE_CHANGED = "CS_ONLINE_CHANGED";
}(Gt || (Gt = {})), function(e5) {
  e5.CONNECTED = "CONNECTED", e5.RECONNECTED = "RECONNECTED", e5.DISCONNECTED = "DISCONNECTED", e5.LOST = "LOST", e5.EXPIRED_RECONNECTED = "EXPIRED_RECONNECTED", e5.NEW_MESSAGE = "NEW_MESSAGE", e5.CONNECTING = "CONNECTING";
}(Ft || (Ft = {}));
var Bt = class {
  constructor() {
    this.subscriptions = [], te.Socket.onMessage(Gt.message, this.onNewMessage.bind(this)), te.Socket.on(Ft.EXPIRED_RECONNECTED, this.expiredResubscribe.bind(this)), te.Socket.on(Ft.RECONNECTED, this.resubscribePresenceChannel.bind(this));
  }
  expiredResubscribe() {
    this.subscriptions.forEach((e5) => {
      this.doSubscribe(e5, false);
    });
  }
  resubscribePresenceChannel() {
    this.subscriptions.forEach((e5) => {
      let t2 = e5.options;
      t2.presence && t2.presence.enable && this.doSubscribe(e5, true);
    });
  }
  onNewMessage(e5) {
    if (e5.n.indexOf("_presence") > -1)
      return;
    e5.a && te.Socket.sendAck("ack", { i: e5.i, c: e5.n });
    let t2 = { time: e5.t, channel: e5.n, content: e5.c };
    this.createNotification(e5);
    let s2 = this.findSubscriptionByChannel(t2.channel);
    null == s2 || s2.options.onMessage(t2);
  }
  createNotification(e5) {
    const t2 = te.N.supportAppNotification();
    if (!u.isObject(e5.nt) || !t2)
      return;
    const s2 = { ch: e5.n, ctt: e5.c };
    te.N.createLocalNotification(e5.nt.t, e5.nt.c, s2, e5.nt.sound, e5.nt.badge);
  }
  subscribe(e5) {
    Tt(bt, e5);
    let t2 = new Ut(e5);
    this.doSubscribe(t2, false).then(() => {
      this.subscriptions.push(t2), v.onSuccess(e5, { code: 200, content: "ok" });
    }).catch((t3) => {
      v.onFailed(e5, { code: t3.resultCode, content: t3.content });
    });
  }
  doSubscribe(e5, t2) {
    let s2 = e5.options;
    return new Promise((i2, n2) => {
      let o2 = new le({ name: y.subscribe, permission: ne.READ, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, params: { channels: e5.channels, accessToken: s2.accessToken, presence: s2.presence, resubscribe: t2 }, success: () => {
        i2();
      }, fail: (e6) => {
        n2(e6);
      } });
      te.Socket.e(o2);
    });
  }
  unsubscribe(e5) {
    Dt(e5), e5.channel = e5.channel.toString();
    const t2 = this.findSubscriptionByChannel(e5.channel);
    if (!t2)
      return void e5.onFailed({ code: 400, content: "channel[" + e5.channel + "] is not subscribed" });
    let s2 = new le({ name: y.unsubscribe, params: { channel: e5.channel, presence: t2.options.presence }, permission: ne.READ, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, success: () => {
      e5.onSuccess({ code: 200, content: "ok" }), this.removeChannel(e5.channel);
    }, fail: function(t3) {
      e5.onFailed({ code: t3.resultCode, content: t3.content });
    } });
    te.Socket.e(s2);
  }
  removeChannel(e5) {
    for (let t2 = this.subscriptions.length - 1; t2 >= 0; t2--) {
      const s2 = this.subscriptions[t2].channels, i2 = s2.indexOf(e5);
      if (i2 > -1) {
        s2.splice(i2, 1), 0 === s2.length && this.subscriptions.splice(t2, 1);
        break;
      }
    }
  }
  findSubscriptionByChannel(e5) {
    let t2 = false, s2 = null;
    for (let i2 = this.subscriptions.length - 1; i2 >= 0; i2--) {
      let n2 = this.subscriptions[i2].channels;
      for (let o2 = 0; o2 < n2.length; o2++)
        if (n2[o2] == e5) {
          t2 = true, s2 = this.subscriptions[i2];
          break;
        }
      if (t2)
        break;
    }
    return s2;
  }
};
var qt = class {
  get(e5) {
    Dt(e5), e5.channel = e5.channel.toString();
    let t2 = new le({ name: y.historyMessages, permission: ne.READ, params: e5, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, success: (t3) => {
      v.onSuccess(e5, { code: t3.resultCode || t3.code || 200, content: t3.content });
    }, fail: (t3) => {
      v.onFailed(e5, { code: t3.resultCode || t3.code, content: t3.content });
    } });
    te.Socket.e(t2);
  }
};
var jt = class {
  constructor() {
    this.channelPresenceMap = /* @__PURE__ */ new Map(), this.onPresenceEvent = (e5) => {
      let t2 = this.channelPresenceMap.get(e5.channel);
      null == t2 || t2.onPresence(e5);
    }, this.expireAllChannelPresences = () => {
      this.channelPresenceMap.forEach((e5, t2) => {
        e5.expire();
      });
    }, this.resubscribe = () => {
      this.channelPresenceMap.forEach((e5, t2) => {
        e5.subscribed() && e5.doSubscribe();
      });
    }, te.Socket.on(Ft.LOST, this.expireAllChannelPresences), te.Socket.on(Ft.RECONNECTED, this.resubscribe), te.Socket.onMessage(Gt.PS_PRESENCE_EVENT, this.onPresenceEvent);
  }
  hereNow(e5) {
    Dt(e5);
    let t2, s2 = this.channelPresenceMap.get(e5.channel.toString());
    s2 && s2.queryPromise ? (e5.limit && e5.limit > s2.membersLimit && s2.doQuery(e5.limit), t2 = s2.queryPromise) : t2 = Ht(e5.channel, e5.limit), t2.then((t3) => {
      e5.onSuccess(t3);
    }).catch((t3) => {
      e5.onFailed(t3);
    });
  }
  subscribe(e5) {
    Tt(It, e5);
    let t2 = e5.channel.toString(), s2 = this.channelPresenceMap.get(t2);
    s2 || (s2 = new Vt(t2), this.channelPresenceMap.set(t2, s2)), s2.subscribe(e5);
  }
  unsubscribe(e5) {
    Dt(e5);
    let t2 = e5.channel.toString();
    if (this.channelPresenceMap.get(t2)) {
      let s2 = new le({ name: y.PUBSUB_PRESENCE_UNSUBSCRIBE, permission: ne.READ, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, params: { channel: t2 }, success: (s3) => {
        this.channelPresenceMap.delete(t2), e5.onSuccess();
      }, fail: (t3) => {
        e5.onFailed(t3);
      } });
      te.Socket.e(s2);
    } else
      e5.onSuccess();
  }
};
var Vt = class {
  constructor(e5) {
    this.membersLimit = 10, this.queried = false, this.channel = e5;
  }
  onPresence(e5) {
    return b(this, void 0, void 0, function* () {
      this.queried ? this.update(e5) : yield this.queryPromise, this.on({ channel: this.channel, action: e5.action, member: e5.member, time: e5.time, amount: this.amount, members: this.membersByLimit() });
    });
  }
  membersByLimit() {
    return this.members.slice(0, this.membersLimit);
  }
  subscribe(e5) {
    return b(this, void 0, void 0, function* () {
      if (e5.membersLimit && (this.membersLimit = Math.min(e5.membersLimit, 300)), !this.subscribed())
        try {
          yield this.doSubscribe();
        } catch (t2) {
          return void e5.onFailed(t2);
        }
      this.on = e5.onPresence, e5.onSuccess();
    });
  }
  doSubscribe() {
    return this.doQuery(this.membersLimit), new Promise((e5, t2) => {
      let s2 = new le({ name: y.PUBSUB_PRESENCE_SUBSCRIBE, permission: ne.READ, params: { channel: this.channel }, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, success: (t3) => {
        e5();
      }, fail: (e6) => {
        t2(e6);
      } });
      te.Socket.e(s2);
    });
  }
  doQuery(e5) {
    this.queryPromise = Ht(this.channel, e5), this.queryPromise.then((e6) => {
      this.members = e6.content.members, this.amount = e6.content.amount, this.queried = true;
    }).catch((e6) => {
      throw e6;
    });
  }
  update(e5) {
    if (["join", "back"].includes(e5.action))
      this.members.unshift(e5.member);
    else if (["leave", "timeout"].includes(e5.action)) {
      let t2 = this.members.findIndex((t3) => t3.id === e5.member.id);
      t2 > -1 && this.members.splice(t2, 1);
    }
    this.amount = e5.amount;
  }
  expire() {
    this.queried = false, this.queryPromise = null;
  }
  subscribed() {
    return void 0 !== this.on;
  }
};
function Ht(e5, t2) {
  return t2 || (t2 = 10), new Promise((s2, i2) => {
    let n2 = { channel: e5, limit: t2 }, o2 = new le({ name: y.PUBSUB_PRESENCE_HERENOW, permission: ne.READ, params: n2, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, success: (e6) => {
      s2(e6);
    }, fail: (e6) => {
      i2(e6);
    } });
    te.Socket.e(o2);
  });
}
var zt = class _zt {
  constructor() {
    this.publisher = new xt(), this.subscriber = new Bt(), this.presence2 = new jt(), this.histories = new qt();
  }
  static init() {
    this.instance = new _zt();
  }
  publish(e5) {
    this.publisher.publish(e5);
  }
  subscribe(e5) {
    this.subscriber.subscribe(e5);
  }
  unsubscribe(e5) {
    this.subscriber.unsubscribe(e5);
  }
  subscribePresence(e5) {
    this.presence2.subscribe(e5);
  }
  unsubscribePresence(e5) {
    this.presence2.unsubscribe(e5);
  }
  history(e5) {
    this.histories.get(e5);
  }
  hereNow(e5) {
    this.presence2.hereNow(e5);
  }
};
var Wt = class _Wt extends J {
  static init() {
    return this.module = new _Wt(), this.module.name = this.GWS_MODULE_NAME, this.initGN(), this.module;
  }
  static initGN() {
    he.addAssembler(new class {
      assemble(e5) {
        return { channel: e5.ch, content: e5.ctt };
      }
      support(e5) {
        return !!e5.ch;
      }
    }());
  }
  postConnect() {
    zt.init();
  }
  static check() {
    if (!this.module)
      throw { code: 400, content: "PubSub not initialized. Please include 'PUBSUB' in the 'modules' during GoEasy initialization." };
  }
};
Wt.GWS_MODULE_NAME = "GWS";
var Jt = class {
  constructor() {
  }
};
!function(e5) {
  e5.aliYun = "ALI", e5.qiNiu = "QN", e5.tencent = "TX", e5.s3 = "S3";
}(Lt || (Lt = {}));
var Xt = new class extends Jt {
  constructor() {
    super();
  }
  upload(e5, t2) {
    try {
      return e5.storageLocation === Lt.s3 ? this.uploadToS3(e5, t2) : (delete e5.parameters.fileRes, new Promise((s2, i2) => {
        uni.uploadFile({ url: e5.host, filePath: this.getTempFilePath(e5), name: "file", formData: e5.parameters, success(e6) {
          200 === e6.statusCode ? s2() : i2({ code: e6.statusCode, content: e6.errMsg });
        }, fail(e6) {
          i2({ code: 500, content: e6.errMsg });
        } }).onProgressUpdate((e6) => {
          t2 && t2(e6);
        });
      }));
    } catch (e6) {
      return new Promise((t3, s2) => {
        s2({ code: 500, content: e6 });
      });
    }
  }
  getTempFilePath(e5) {
    let t2 = e5.file;
    return t2.tempFilePath || t2.fullPath || t2.path;
  }
  uploadToS3(e5, t2) {
    return new Promise((t3, s2) => b(this, void 0, void 0, function* () {
      const i2 = yield this.fileToArrayBuffer(e5);
      uni.request({ url: e5.url, method: "PUT", header: e5.headers, data: i2, success(i3) {
        200 === i3.statusCode ? (e5.storageLocation === Lt.s3 && (e5.url = e5.url.split("?")[0]), t3()) : s2({ code: i3.statusCode, content: i3.errMsg });
      }, fail(e6) {
        s2({ code: 500, content: e6.errMsg });
      } });
    }));
  }
  fileToArrayBuffer(e5) {
    return new Promise((t2, s2) => {
      const i2 = this.getTempFilePath(e5);
      if ("undefined" != typeof plus)
        plus.io.resolveLocalFileSystemURL(i2, (e6) => {
          e6.file((e7) => {
            let i3 = new plus.io.FileReader();
            i3.onloadend = (e8) => {
              const s3 = uni.base64ToArrayBuffer(e8.target.result.split(",")[1]);
              t2(s3);
            }, i3.onerror = function(e8) {
              s2(e8);
            }, i3.readAsDataURL(e7);
          });
        }, (e6) => {
          s2("Resolve file URL failed: " + e6.message);
        });
      else if ("undefined" != typeof FileReader) {
        const i3 = new FileReader();
        i3.onload = () => {
          t2(i3.result);
        }, i3.onerror = (e6) => {
          s2(e6);
        }, i3.readAsArrayBuffer(e5.file);
      } else if ("object" == typeof wx && wx.canIUse("getFileSystemManager"))
        try {
          const e6 = wx.getFileSystemManager().readFileSync(i2);
          t2(e6);
        } catch (e6) {
          s2(e6);
        }
    });
  }
}();
var $t = new class extends Jt {
  upload(e5, t2) {
    try {
      return e5.storageLocation === Lt.s3 ? this.uploadToS3(e5, t2) : new Promise((s2, i2) => {
        wx.uploadFile({ url: e5.host, filePath: this.getTempFilePath(e5), name: "file", formData: e5.parameters, success(e6) {
          200 === e6.statusCode ? s2() : i2({ code: e6.statusCode, content: e6.errMsg });
        }, fail(e6) {
          i2({ code: 500, content: e6.errMsg });
        } }).onProgressUpdate((e6) => {
          t2 && t2(e6);
        });
      });
    } catch (e6) {
      return new Promise((t3, s2) => {
        s2({ code: 500, content: e6 });
      });
    }
  }
  getTempFilePath(e5) {
    let t2 = e5.file || e5.fileRes;
    return t2.path || t2.tempFilePath;
  }
  uploadToS3(e5, t2) {
    return new Promise((t3, s2) => b(this, void 0, void 0, function* () {
      const i2 = yield this.fileToArrayBuffer(this.getTempFilePath(e5));
      wx.request({ url: e5.url, method: "PUT", header: e5.headers, data: i2, success(i3) {
        200 === i3.statusCode ? (e5.storageLocation === Lt.s3 && (e5.url = e5.url.split("?")[0]), t3()) : s2({ code: i3.statusCode, content: i3.errMsg });
      }, fail(e6) {
        s2({ code: 500, content: e6.errMsg });
      } });
    }));
  }
  fileToArrayBuffer(e5) {
    return new Promise((t2, s2) => {
      try {
        const s3 = wx.getFileSystemManager();
        t2(s3.readFileSync(e5));
      } catch (e6) {
        s2(e6);
      }
    });
  }
}();
var Yt = new class extends Jt {
  constructor() {
    super();
  }
  upload(e5, t2) {
    return new Promise((s2, i2) => {
      try {
        const n2 = new XMLHttpRequest(), o2 = e5.storageLocation === Lt.s3, r2 = o2 ? "PUT" : "POST", a2 = o2 ? e5.url : e5.host;
        n2.open(r2, a2, true);
        for (let t3 in e5.headers)
          n2.setRequestHeader(t3, e5.headers[t3]);
        n2.upload.onprogress = function(e6) {
          t2 && t2(e6);
        }, n2.upload.onloadstart = function(e6) {
          t2 && t2(e6);
        }, n2.upload.onloadend = function(e6) {
          t2 && t2(e6);
        };
        let c2 = new FormData();
        for (let t3 in e5.parameters)
          "fileRes" == t3 ? c2.append("file", e5.parameters[t3]) : c2.append(t3, e5.parameters[t3]);
        const u2 = o2 ? e5.file : c2;
        n2.send(u2), n2.onreadystatechange = function() {
          4 == n2.readyState && (n2.status >= 200 && n2.status < 300 || 304 == n2.status ? (o2 && (e5.url = e5.url.split("?")[0]), s2()) : i2({ code: n2.status, content: n2.responseText }));
        };
      } catch (e6) {
        i2({ code: 500, content: e6 });
      }
    });
  }
  fileToArrayBuffer(e5) {
    return new Promise((t2, s2) => {
      const i2 = new FileReader();
      i2.onload = () => {
        t2(i2.result);
      }, i2.onerror = (e6) => {
        s2(e6);
      }, i2.readAsArrayBuffer(e5);
    });
  }
}();
var Qt = new class extends Jt {
  upload(e5, t2) {
    try {
      return e5.storageLocation === Lt.s3 ? this.uploadToS3(e5, t2) : (delete e5.parameters.fileRes, new Promise((s2, i2) => {
        my.uploadFile({ url: e5.host, filePath: this.getTempFilePath(e5), fileType: "image", name: "file", formData: e5.parameters, success(e6) {
          200 === e6.statusCode ? s2() : i2({ code: e6.statusCode, content: e6.errMsg });
        }, fail(e6) {
          i2({ code: 500, content: e6.errMsg });
        } }).onProgressUpdate((e6) => {
          t2 && t2(e6);
        });
      }));
    } catch (e6) {
      return new Promise((t3, s2) => {
        s2({ code: 500, content: e6 });
      });
    }
  }
  getTempFilePath(e5) {
    let t2 = e5.file;
    return t2.path || t2.tempFilePath;
  }
  uploadToS3(e5, t2) {
    return new Promise((t3, s2) => b(this, void 0, void 0, function* () {
      const i2 = yield this.fileToArrayBuffer(this.getTempFilePath(e5));
      my.request({ url: e5.url, method: "PUT", header: e5.headers, data: i2, success(i3) {
        200 === i3.statusCode ? (e5.storageLocation === Lt.s3 && (e5.url = e5.url.split("?")[0]), t3()) : s2({ code: i3.statusCode, content: i3.errMsg });
      }, fail(e6) {
        s2({ code: 500, content: e6.errMsg });
      } });
    }));
  }
  fileToArrayBuffer(e5) {
    return new Promise((t2, s2) => {
      my.getFileSystemManager().readFile({ filePath: e5, success: (e6) => {
        t2(e6.data);
      }, fail(e6) {
        s2(e6);
      } });
    });
  }
}();
var Kt = new class extends Jt {
  upload(e5, t2) {
    try {
      return e5.storageLocation === Lt.s3 ? this.uploadToS3(e5, t2) : (delete e5.parameters.fileRes, new Promise((s2, i2) => {
        swan.uploadFile({ url: e5.host, filePath: this.getTempFilePath(e5), name: "file", formData: e5.parameters, success(e6) {
          200 === e6.statusCode ? s2() : i2({ code: e6.statusCode, content: e6.errMsg });
        }, fail(e6) {
          i2({ code: 500, content: e6.errMsg });
        } }).onProgressUpdate((e6) => {
          t2 && t2(e6);
        });
      }));
    } catch (e6) {
      return new Promise((t3, s2) => {
        s2({ code: 500, content: e6 });
      });
    }
  }
  getTempFilePath(e5) {
    let t2 = e5.file;
    return t2.path || t2.tempFilePath;
  }
  uploadToS3(e5, t2) {
    return new Promise((t3, s2) => b(this, void 0, void 0, function* () {
      const i2 = yield this.fileToArrayBuffer(this.getTempFilePath(e5));
      swan.request({ url: e5.url, method: "PUT", header: e5.headers, data: i2, success(i3) {
        200 === i3.statusCode ? (e5.storageLocation === Lt.s3 && (e5.url = e5.url.split("?")[0]), t3()) : s2({ code: i3.statusCode, content: i3.errMsg });
      }, fail(e6) {
        s2({ code: 500, content: e6.errMsg });
      } });
    }));
  }
  fileToArrayBuffer(e5) {
    return new Promise((t2, s2) => {
      swan.getFileSystemManager().readFile({ filePath: e5, success: (e6) => {
        t2(e6.data);
      }, fail: (e6) => {
        s2(e6);
      } });
    });
  }
}();
var Zt = class {
  constructor(e5, t2, s2) {
    this.storageLocation = e5, this.url = t2, this.name = s2;
  }
};
var es = new class {
  constructor() {
    this.uploader = { [e.UNIAPP]: Xt, [l.MP_WX]: $t, [l.BROWSER]: Yt, [l.MP_ALI]: Qt, [l.MP_BAIDU]: Kt, [e.REACT_NATIVE]: Yt, [l.MP_BYTE]: $t };
  }
  upload(t2, i2) {
    return b(this, void 0, void 0, function* () {
      const n2 = s.currentFramework(), o2 = d.currentPlatform(), r2 = n2 === e.UNKNOWN ? o2 : n2;
      let a2 = this.uploader[r2];
      return yield a2.upload(t2, i2), new Zt(t2.storageLocation, t2.url, t2.newFileName);
    });
  }
}();
var ts = class {
  resolve(e5) {
    return new Promise((t2, s2) => {
      let i2 = new le({ name: "uploadToken", params: { filename: e5 }, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail(e6) {
        s2(e6.content);
      }, success(e6) {
        200 === e6.code ? t2(e6.content) : s2(e6.content);
      } });
      te.Socket.e(i2);
    });
  }
};
var ss = class {
  constructor(e5, t2, s2, i2, n2, o2, r2) {
    this.storageLocation = e5, this.host = t2, this.headers = s2, this.parameters = i2, this.file = n2, this.newFileName = o2, this.url = r2;
  }
};
var is = class {
  constructor() {
  }
  newFileName(e5) {
    return e5 && e5.newFilename || "";
  }
};
var ns = new class extends is {
  constructor() {
    super();
  }
  url(e5) {
    return e5.host + "/" + e5.dir + "/" + this.newFileName(e5);
  }
  build(e5, t2, s2) {
    let i2, n2 = this.newFileName(e5);
    return i2 = { key: e5.dir + "/" + n2, OSSAccessKeyId: e5.accessKeyId, policy: e5.policy, signature: e5.signature, success_action_status: "200", fileRes: t2 }, s2 && (i2 = { key: e5.dir + "/" + n2, OSSAccessKeyId: e5.accessKeyId, policy: e5.policy, signature: e5.signature, success_action_status: "200", "Content-Disposition": "attachment;filename=" + t2.name, fileRes: t2 }), new ss(Lt.aliYun, e5.host, null, i2, t2, n2, this.url(e5));
  }
}();
var os = new class extends is {
  constructor() {
    super();
  }
  url(e5) {
    return e5.host + "/" + e5.key;
  }
  build(e5, t2, s2) {
    let i2 = { "q-sign-algorithm": e5.qSignAlgorithm, "q-ak": e5.qAk, "q-key-time": e5.qKeyTime, "q-signature": e5.qSignature, policy: e5.policy, "x-cos-security-token": e5.xCosSecurityToken, success_action_status: "200", key: e5.key, fileRes: t2 };
    return s2 && (i2 = { "q-sign-algorithm": e5.qSignAlgorithm, "q-ak": e5.qAk, "q-key-time": e5.qKeyTime, "q-signature": e5.qSignature, policy: e5.policy, "x-cos-security-token": e5.xCosSecurityToken, success_action_status: "200", key: e5.key, "Content-Disposition": `attachment;filename=${t2.name}`, fileRes: t2 }), new ss(Lt.tencent, e5.host, null, i2, t2, e5.key, this.url(e5));
  }
}();
var rs = new class extends is {
  constructor() {
    super();
  }
  url(e5) {
    return e5.uploadUrl;
  }
  build(e5, t2, s2) {
    const i2 = { file: t2 };
    return new ss(Lt.s3, null, { "Content-Type": "application/octet-stream" }, i2, t2, t2.name, this.url(e5));
  }
}();
var as = class {
  constructor() {
    this.uploadTokenResolver = new ts();
  }
  builder(e5) {
    if (e5 === Lt.aliYun)
      return ns;
    if (e5 === Lt.tencent)
      return os;
    if (e5 === Lt.s3)
      return rs;
    throw new Error("Only Ali OSS and Tencent COS are supported, unknown storage location:" + e5);
  }
  build(e5, t2, s2) {
    return b(this, void 0, void 0, function* () {
      try {
        let i2 = yield this.uploadTokenResolver.resolve(t2), n2 = this.builder(i2.vendor).build(i2, e5, s2);
        return Promise.resolve(n2);
      } catch (e6) {
        return Promise.reject(e6);
      }
    });
  }
};
var cs = class {
  constructor() {
    this.requestBuilder = new as(), this.fileUploader = es;
  }
  upload(e5, t2, s2, i2) {
    return b(this, void 0, void 0, function* () {
      try {
        let n2 = yield this.requestBuilder.build(e5, t2, i2);
        return this.fileUploader.upload(n2, s2);
      } catch (e6) {
        return Promise.reject(e6);
      }
    });
  }
};
var us;
var ls;
var ds;
!function(e5) {
  e5.MESSAGE_SENDING = "IM_INTERNAL_MESSAGE_SENDING", e5.MESSAGE_SEND_SUCCESS = "IM_INTERNAL_MESSAGE_SEND_SUCCESS", e5.MESSAGE_SEND_FAILED = "IM_INTERNAL_MESSAGE_SEND_FAILED", e5.MESSAGE_RECEIVED = "IM_INTERNAL_MESSAGE_RECEIVED", e5.MESSAGE_RECALLED = "IM_INTERNAL_MESSAGE_RECALLED", e5.MAX_MESSAGE_CHANGED = "IM_INTERNAL_MAX_MESSAGE_CHANGED", e5.MAX_MESSAGE_DELETED = "IM_INTERNAL_MAX_MESSAGE_DELETED", e5.UNREAD_AMOUNT_CHANGED = "IM_INTERNAL_UNREAD_MESSAGE_CHANGED", e5.CS_ONLINE_SUCCESS = "CS_ONLINE_SUCCESS", e5.CS_OFFLINE_SUCCESS = "CS_OFFLINE_SUCCESS", e5.CS_ACCEPTED = "CS_ACCEPTED", e5.CS_ENDED = "CS_ENDED", e5.CS_TRANSFER = "CS_TRANSFER", e5.CS_AGENT_MESSAGE_RECEIVED = "CS_AGENT_MESSAGE_RECEIVED";
}(us || (us = {}));
var hs = class {
};
var ps = class extends hs {
  constructor() {
    super(...arguments), this.goEasyUploader = new cs();
  }
  improve(e5) {
    let t2 = e5.message;
    return new Promise((e6, s2) => {
      let i2, n2, o2 = t2.buildOptions.createOptions;
      t2.type === Ee.VIDEO ? (n2 = t2.payload, i2 = n2.video.name) : (n2 = t2.payload, i2 = n2.name), this.goEasyUploader.upload(o2.file, i2, o2.onProgress, t2.type === Ee.FILE).then((s3) => {
        s3.storageLocation !== Lt.s3 && (s3.url = encodeURI(s3.url)), this.setPayload(s3, t2), e6();
      }).catch((e7) => {
        s2(e7);
      });
    });
  }
  setPayload(e5, t2) {
    t2.payload.url = e5.url;
  }
};
var ms = class extends ps {
  setPayload(e5, t2) {
    let s2, i2 = t2.payload;
    switch (i2.video.url = e5.url, i2.video.name = e5.name, i2.thumbnail.height > 200 && (i2.thumbnail.height = 200, i2.thumbnail.width = 200 * i2.video.width / i2.video.height), e5.storageLocation) {
      case Lt.aliYun:
        s2 = "?x-oss-process=video/snapshot,t_0000,f_jpg,h_" + i2.thumbnail.height + ",m_fast,ar_auto";
        break;
      case Lt.tencent:
        s2 = "?ci-process=snapshot&time=1&format=jpg&height=" + i2.thumbnail.height;
        break;
      case Lt.s3:
        s2 = "?process=video&height=" + i2.thumbnail.height;
        break;
      default:
        throw new Error("Only Ali OSS and Tencent COS are supported, unknown storage location:" + e5.storageLocation);
    }
    i2.thumbnail.url = e5.url + s2;
  }
};
var fs = class extends ps {
  setPayload(e5, t2) {
    let s2, i2 = t2.payload;
    i2.url = e5.url;
    const n2 = i2.height > 200 ? 200 : i2.height;
    switch (e5.storageLocation) {
      case Lt.aliYun:
        s2 = "?x-oss-process=image/resize,m_lfit,h_" + n2;
        break;
      case Lt.tencent:
        s2 = `?imageMogr2/thumbnail/x${n2}`;
        break;
      case Lt.s3:
        s2 = `?process=image&height=${n2}`;
        break;
      default:
        throw new Error("Only Ali OSS and Tencent COS are supported, unknown storage location:" + e5.storageLocation);
    }
    i2.thumbnail = e5.url + s2;
  }
};
var gs = class {
  constructor() {
    this.improvers = { [Ee.FILE]: new ps(), [Ee.AUDIO]: new ps(), [Ee.IMAGE]: new fs(), [Ee.VIDEO]: new ms() };
  }
  improve(e5) {
    let t2 = this.improvers[e5.message.type];
    if (t2)
      try {
        return t2.improve(e5);
      } catch (e6) {
        return Promise.reject(e6);
      }
    return Promise.resolve();
  }
};
var ys = class _ys extends Q {
  static init() {
    this.i = new _ys();
  }
};
var Ss = class {
  constructor(e5, t2, s2, i2, n2) {
    this.validate(e5), this.mt = e5.type, "receivers" in t2 ? this.receivers = t2.receivers : (this.to = t2.id, this.d = JSON.stringify(t2.data)), this.p = JSON.stringify(e5.payload), s2 && (this.nt = s2), n2 && (this.at = n2), i2 && (this.wxmpTemplateMsg = pe(i2), this.wxmpTemplateMsg.data = JSON.stringify(this.wxmpTemplateMsg.data));
    let r2 = t2.type;
    if (this.t = r2, r2 === o.CS) {
      let t3 = e5;
      this.tid = t3.teamId;
    }
    this.guid = e5.messageId;
  }
  validate(e5) {
    if (e5.type === Ee.TEXT) {
      if (JSON.stringify(e5.payload).length > 3072)
        throw Error("message-length limit 3kb");
    }
  }
};
var Es = class {
  constructor() {
    this.payloadImprover = new gs();
  }
  send(e5) {
    this.validate(e5);
    let t2 = e5.message, s2 = e5.accessToken, i2 = t2.buildOptions, n2 = i2.createOptions, a2 = n2.notification, c2 = n2.wxmpTemplateMsg, u2 = n2.to;
    t2.status = r.SENDING;
    let l2 = i2.complete, d2 = this.payloadImprover.improve(e5);
    Promise.all([l2, d2]).then(() => b(this, void 0, void 0, function* () {
      if (n2.beforeSend) {
        const e6 = JSON.parse(JSON.stringify(t2));
        yield n2.beforeSend(e6);
      }
      if ("receivers" in n2.to) {
        const i3 = new Array();
        u2.receivers.forEach((e6) => {
          const s3 = Object.assign(Object.create(Object.getPrototypeOf(t2)), t2);
          u2.type === o.PRIVATE ? s3.receiverId = e6.id : u2.type === o.GROUP && (s3.groupId = e6.id), i3.push(s3);
          const n3 = { message: s3, receiver: e6.data };
          ys.i.fire(us.MESSAGE_SENDING, n3);
        }), this.doSend(u2, a2, c2, s2, e5, i3, t2);
      } else {
        const i3 = { message: t2, receiver: u2.data };
        ys.i.fire(us.MESSAGE_SENDING, i3), this.doSend(u2, a2, c2, s2, e5, [t2]);
      }
    })).catch((s3) => {
      t2.status = r.FAIL, v.onFailed(e5, { code: s3 && s3.code || 400, content: s3 && s3.content || s3 });
    });
  }
  doSend(e5, t2, s2, i2, n2, a2, c2) {
    let u2 = new Ss(a2[0], e5, t2, s2, i2), l2 = new le({ name: y.publishIM, params: u2, unique: true, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e6) => {
      a2.forEach((e7) => {
        e7.status = r.FAIL, ys.i.fire(us.MESSAGE_SEND_FAILED, e7);
      }), c2 && (c2.status = r.FAIL), v.onFailed(n2, { code: e6.resultCode, content: e6.content });
    }, success: (e6) => {
      a2.forEach((t3) => {
        if (t3.status = r.SUCCESS, t3.timestamp = e6.content.timestamp, t3.messageId = JSON.stringify(e6.content.id), t3.scene() === o.CS) {
          let s3 = t3;
          s3.customerId() !== te.Socket.user().id && (s3.sessionId = e6.content.sessionId);
        }
        t3.clearUseLessAttribute(), ys.i.fire(us.MESSAGE_SEND_SUCCESS, t3);
      }), c2 && (c2.status = r.SUCCESS, c2.timestamp = e6.content.timestamp, c2.messageId = JSON.stringify(e6.content.id), c2.clearUseLessAttribute()), v.onSuccess(n2);
    } });
    te.Socket.e(l2);
  }
  validate(e5) {
    let t2 = e5.message;
    if (!(t2 instanceof Ve))
      throw new Error("it is invalid message");
    if (t2.status !== r.NEW)
      throw new Error("Please create a new message, a message can only be sent once");
  }
};
var vs = class {
  insert(e5, t2) {
    let s2 = this.binarySearch(e5, t2);
    if (s2 >= 0)
      e5.splice(s2, 1, t2);
    else {
      let i2 = -s2 - 1;
      e5.splice(i2, 0, t2);
    }
  }
  binarySearch(e5, t2) {
    let s2 = 0, i2 = e5.length - 1;
    for (; s2 <= i2; ) {
      let n2 = i2 + s2 >> 1, o2 = this.compare(t2, e5[n2]);
      if (o2 > 0)
        s2 = n2 + 1;
      else {
        if (!(o2 < 0))
          return n2;
        i2 = n2 - 1;
      }
    }
    return -s2 - 1;
  }
};
var bs = class _bs {
  constructor(e5) {
    this.messages = new Array(), this.allLoaded = false, this.target = e5;
  }
  all() {
    return this.messages;
  }
  sliceOverLengthMessages() {
    this.messages.length > _bs.CACHE_MAX_LENGTH && (this.messages = this.messages.slice(-_bs.CACHE_MAX_LENGTH), true === this.allLoaded && (this.allLoaded = false));
  }
  getMaxMessage() {
    return this.messages[this.messages.length - 1];
  }
  loadLocalMessages(e5, t2) {
    let s2 = [], i2 = this.messages.length;
    if (t2) {
      if (i2 > 0) {
        let n2 = this.messages[0].timestamp, o2 = this.messages[i2 - 1].timestamp;
        if (t2 >= n2 && t2 <= o2)
          for (let n3 = i2 - 1; n3 >= 0; n3--) {
            let i3 = this.messages[n3];
            if (i3.timestamp < t2) {
              if (!(s2.length < e5))
                break;
              s2.unshift(i3);
            }
          }
      }
    } else
      s2 = this.messages.slice(-e5);
    return s2;
  }
  cacheServerMessages(e5, t2) {
    let s2 = this.messages[0];
    this.messages.length < _bs.CACHE_MAX_LENGTH && (!e5.lastTimestamp || this.messages.length > 0 && s2.timestamp === e5.lastTimestamp) && (t2.forEach((e6) => {
      _bs.sortedInserter.insert(this.messages, e6);
    }), t2.length < e5.limit && (this.allLoaded = true));
  }
  findMessageByTime(e5) {
    return this.messages.find((t2) => e5 === t2.timestamp);
  }
  findMessagesByTimes(e5) {
    let t2 = [];
    return e5.forEach((e6) => {
      let s2 = this.findMessageByTime(e6);
      u.isDef(s2) && t2.push(s2);
    }), t2;
  }
  existsMessage(e5) {
    return this.findMessageIndexById(e5) > -1;
  }
  findMessageIndexById(e5) {
    return this.messages.findIndex((t2) => e5 === t2.messageId);
  }
  deleteMessage(e5) {
    let t2 = this.findMessageIndexById(e5);
    t2 >= 0 && this.messages.splice(t2, 1);
  }
  recallMessage(e5) {
    return e5.times.map((e6) => this.findMessageByTime(e6)).filter((e6) => u.isDef(e6)).map((t2) => (t2.recalled = true, t2.recaller = e5.recaller, t2));
  }
  isEmpty() {
    return 0 === this.messages.length;
  }
  deleteMessages(e5) {
    e5.forEach((e6) => {
      this.deleteMessage(e6.messageId);
    });
  }
  saveMessage(e5) {
    _bs.sortedInserter.insert(this.messages, e5), this.deleteGroupConversationMessage(), this.sliceOverLengthMessages();
  }
  deleteGroupConversationMessage() {
    this.target.scene === o.GROUP && this.messages.length >= 2 && 1 === this.messages[0].x && this.messages.shift();
  }
  maxSuccessMessageTime() {
    for (let e5 = this.messages.length - 1; e5 >= 0; e5--)
      if (this.messages[e5].status === r.SUCCESS)
        return this.messages[e5].timestamp;
    return 0;
  }
  minTime() {
    return this.isEmpty() ? 0 : this.messages[0].timestamp;
  }
  correctPosition(e5) {
    this.deleteMessage(e5.messageId), this.saveMessage(e5);
  }
};
bs.CACHE_MAX_LENGTH = 200, bs.sortedInserter = new class extends vs {
  compare(e5, t2) {
    let s2 = e5.timestamp - t2.timestamp;
    return s2 > 0 ? 1 : 0 === s2 ? 0 : -1;
  }
}();
var Cs = class {
  constructor(e5) {
    this.times = new Array();
    let t2 = e5[0], s2 = je.byIMMessage(t2);
    this.scene = s2.scene, this.targetId = s2.id, e5.forEach((e6) => {
      e6.status === r.SUCCESS && this.times.push(e6.timestamp);
    }), this.times.sort((e6, t3) => e6 < t3 ? -1 : e6 == t3 ? 0 : 1);
  }
};
var Ms = class {
  static deleteServerMessages(e5) {
    let t2 = new Cs(e5);
    return t2.times.length < 0 ? Promise.resolve() : new Promise((e6, s2) => {
      let i2 = new le({ name: y.IM_DELETE_MESSAGE, params: t2, permission: ne.WRITE, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, success: (t3) => {
        200 === t3.code ? e6(t3) : s2(t3);
      }, fail: (e7) => {
        s2(e7);
      } });
      te.Socket.e(i2);
    });
  }
};
var ws = class {
  constructor(e5, t2, s2, i2, n2) {
    this.scene = e5, this.id = t2, this.after = s2, this.min = i2, this.teamId = n2;
  }
};
var Is = class {
  constructor(e5, t2, s2, i2) {
    this.id = e5, this.scene = t2, this.lastTimestamp = s2, this.teamId = i2;
  }
};
!function(e5) {
  e5.ACCEPT = "CS_ACCEPT", e5.END = "CS_END", e5.TRANSFER = "CS_TRANSFER";
}(ls || (ls = {}));
var Ns = class {
  build(e5) {
    let t2, s2 = e5.t;
    s2 === o.PRIVATE ? (t2 = new He(), t2.read = false, e5.r ? t2.receiverId = e5.r : t2.receiverId = te.Socket.user().id) : s2 === o.GROUP ? (t2 = new ze(), t2.groupId = e5.r, t2.senderData = e5.d ? JSON.parse(e5.d) : {}) : s2 === o.CS && (t2 = new We(), t2.to = e5.r, t2.teamId = e5.tid, t2.senderData = e5.d ? JSON.parse(e5.d) : {}, t2.accepted = e5.accepted, t2.customerId() !== te.Socket.user().id && (t2.sessionId = e5.sessionId)), t2.senderId = e5.s, t2.messageId = e5.i, t2.timestamp = e5.ts, t2.type = e5.mt;
    let i2 = e5.p;
    if (u.isDef(i2))
      if (s2 === o.CS && t2.type === ls.TRANSFER) {
        let e6 = JSON.parse(i2);
        e6.transferTo.data = JSON.parse(e6.transferTo.data), t2.payload = e6;
      } else
        t2.payload = JSON.parse(i2);
    let n2 = e5.rc;
    return u.isDef(n2) && true === n2 ? (t2.recalled = n2, t2.recaller = e5.recaller) : t2.recalled = false, t2.status = r.SUCCESS, t2;
  }
};
var Ts = class {
  constructor() {
    this.builder = new Ns();
  }
  sync(e5, t2, s2, i2, n2) {
    let o2 = new ws(e5, t2, s2, i2, n2);
    return new Promise((e6, t3) => {
      let s3 = new le({ name: y.IM_HISTORY_CHANGE, params: o2, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: (e7) => {
        t3(e7);
      }, success: (t4) => {
        let s4 = t4.content;
        e6(s4);
      } });
      te.Socket.e(s3);
    });
  }
  loadServerMessages(e5, t2) {
    return new Promise((s2, i2) => {
      let n2 = new le({ name: y.IM_HISTORY, params: t2, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: (e6) => {
        s2({ messages: [], userOffsets: [] });
      }, success: (t3) => {
        let i3 = t3.content;
        i3.messages = this.convertServerMessages(e5, i3.messages), s2(i3);
      } });
      te.Socket.e(n2);
    });
  }
  convertServerMessages(e5, t2) {
    let s2 = [], i2 = e5.scene, n2 = e5.id;
    return t2.forEach((t3) => {
      if (t3.t = i2, o.PRIVATE === i2)
        t3.r = t3.s === te.Socket.user().id ? n2 : te.Socket.user().id;
      else if (o.GROUP === i2)
        t3.r = n2;
      else if (o.CS === i2) {
        let s3 = e5.customerId(), i3 = e5.teamId;
        s3 === te.Socket.user().id ? t3.r = i3 : t3.r = s3;
      }
      let r2 = this.builder.build(t3);
      s2.push(r2);
    }), s2;
  }
  updateServerOffsets(e5, t2) {
    return b(this, void 0, void 0, function* () {
      let s2 = new Is(t2.id, t2.scene, e5, t2.teamId);
      return new Promise((e6, t3) => {
        let i2 = new le({ name: y.IM_MARK_AS_READ, params: s2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, success: (t4) => {
          e6(t4);
        }, fail: (e7) => {
          t3(e7);
        } });
        te.Socket.e(i2);
      });
    });
  }
};
Ts.instance = new Ts();
var Rs = class {
  constructor() {
    this.offsetMap = /* @__PURE__ */ new Map(), this.markingTime = 0, this.userId = te.Socket.user().id;
  }
  updateOffset(e5, t2) {
    let s2 = this.offsetMap.get(e5);
    return u.isDef(s2) ? t2 > s2 && (this.offsetMap.set(e5, t2), true) : (this.offsetMap.set(e5, t2), true);
  }
  updateUserOffsets(e5) {
    e5.forEach((e6) => {
      let t2 = e6.userId, s2 = e6.offset;
      this.updateOffset(t2, s2);
    });
  }
  updateMyOffset(e5) {
    return this.updateOffset(this.userId, e5);
  }
  myOffset() {
    return this.getOffset(this.userId);
  }
  getOffset(e5) {
    let t2 = this.offsetMap.get(e5);
    return t2 || 0;
  }
};
var As = class {
  constructor(e5, t2, s2, i2, n2) {
    this.id = e5, this.scene = t2, this.lastTimestamp = s2, this.limit = i2, this.teamId = n2;
  }
};
var ks = class {
  constructor(e5) {
    this.history = e5;
  }
  pre() {
    this.oldLastMessage = this.history.getMaxMessage(), this.oldUnreadAmount = this.history.unreadAmount(), this.oldLastMessage && (this.oldLastMessageRecalled = this.oldLastMessage.recalled, this.oldLastMessageRead = this.oldLastMessage.read, this.oldLastMessageStatus = this.oldLastMessage.status);
  }
  post() {
    let e5, t2, s2, i2 = this.history.unreadAmount(), n2 = this.history.getMaxMessage();
    n2 && (s2 = n2.status, e5 = n2.read, t2 = n2.recalled);
    let o2 = this.history.target;
    if (this.oldLastMessage !== n2 || this.oldLastMessageRead !== e5 || this.oldLastMessageRecalled !== t2 || this.oldLastMessageStatus !== s2)
      if (n2) {
        const e6 = { message: n2, receiver: this.history.to };
        ys.i.fire(us.MAX_MESSAGE_CHANGED, e6);
      } else
        ys.i.fire(us.MAX_MESSAGE_DELETED, o2);
    else
      this.oldUnreadAmount !== i2 && ys.i.fire(us.UNREAD_AMOUNT_CHANGED, o2);
  }
};
var Os = class {
  constructor(e5, t2, s2, i2) {
    this.scene = e5, this.conversationId = t2, this.recaller = s2, this.times = i2;
  }
};
var Ps = class {
  static init() {
    this.eventCenter = new ee();
  }
  static on(e5, t2) {
    this.eventCenter.on(e5, t2);
  }
  static fire(e5, t2) {
    this.eventCenter.fire(e5, t2);
  }
  static off(e5, t2) {
    this.eventCenter.off(e5, t2);
  }
};
!function(e5) {
  e5.PRIVATE_MESSAGE_RECEIVED = "PRIVATE_MESSAGE_RECEIVED", e5.GROUP_MESSAGE_RECEIVED = "GROUP_MESSAGE_RECEIVED", e5.SYSTEM_MESSAGE_RECEIVED = "SYSTEM_MESSAGE_RECEIVED", e5.CONVERSATIONS_UPDATED = "CONVERSATIONS_UPDATED", e5.HISTORY_EXPIRED = "HISTORY_EXPIRED", e5.USER_PRESENCE = "USER_PRESENCE", e5.GROUP_PRESENCE = "GROUP_PRESENCE", e5.MESSAGE_DELETED = "MESSAGE_DELETED", e5.MESSAGE_READ = "MESSAGE_READ", e5.MESSAGE_RECALLED = "MESSAGE_RECALLED", e5.CS_MESSAGE_RECEIVED = "CS_MESSAGE_RECEIVED", e5.PENDING_CONVERSATIONS_UPDATED = "PENDING_CONVERSATIONS_UPDATED";
}(ds || (ds = {}));
var _s = class __s {
  static init(e5) {
    __s.instance = e5;
  }
  static loadCustomMessages(e5, t2, s2) {
    return b(this, void 0, void 0, function* () {
      let i2 = t2 ? t2.messageId : "";
      return (yield this.instance.loadHistory(te.Socket.user().id, e5.scene, e5.id, i2, s2)).map((e6) => this.convertAbstractMessage(e6));
    });
  }
  static convertAbstractMessage(e5) {
    const t2 = { type: e5.type, timestamp: e5.timestamp, senderId: e5.senderId, messageId: e5.messageId, payload: e5.payload };
    if (e5.groupId) {
      const s2 = new ze();
      return s2.groupId = e5.groupId, s2.senderData = e5.senderData, Object.assign(s2, Object.assign(Object.assign({}, t2), { recalled: false, status: r.SUCCESS })), s2;
    }
    {
      const s2 = new He();
      return s2.receiverId = e5.receiverId, Object.assign(s2, Object.assign(Object.assign({}, t2), { read: true, recalled: false, status: r.SUCCESS })), s2;
    }
  }
};
var Ds = class {
  constructor(e5) {
    this.expiredTime = 0, this.remoteHistory = Ts.instance, this.target = e5, this.userOffsets = new Rs(), this.messageCache = new bs(e5);
  }
  initMaxMessageAndOffsets(e5, t2) {
    this.existsMessage(e5) || (this.messageCache.saveMessage(e5), t2.forEach((e6) => {
      this.markLocalMessagesRead(this.messageCache.all(), e6.userId, e6.offset, false);
    }));
  }
  existsMessage(e5) {
    return this.messageCache.existsMessage(e5.messageId);
  }
  loadHistory(e5, t2) {
    return b(this, void 0, void 0, function* () {
      return this.expiredTime > 0 && !this.messageCache.isEmpty() && (yield this.updateByServerChange()), u.isUndef(t2) ? t2 = 10 : t2 > 30 && (t2 = 30), yield this.loadServerMessages(e5, t2);
    });
  }
  loadCustomMessages(e5, t2, s2) {
    return b(this, void 0, void 0, function* () {
      if (s2 > 0 && void 0 !== _s.instance) {
        let i2 = e5;
        return t2 && (i2 = this.messageCache.findMessageByTime(t2)), yield _s.loadCustomMessages(this.target, i2, s2);
      }
      return [];
    });
  }
  loadServerMessages(e5, t2) {
    return b(this, void 0, void 0, function* () {
      let s2 = this.messageCache.loadLocalMessages(t2, e5);
      if (false === this.messageCache.allLoaded && s2.length !== t2) {
        let i2 = t2 - s2.length, n2 = s2[0] ? s2[0].timestamp : e5, o2 = new As(this.target.id.toString(), this.target.scene, n2, i2, this.target.teamId), r2 = yield this.remoteHistory.loadServerMessages(this.target, o2), a2 = r2.messages;
        s2 = a2.concat(s2);
        const c2 = yield this.loadCustomMessages(s2[0], e5, t2 - s2.length);
        a2 = a2.concat(c2), s2 = [...c2, ...s2], this.messageCache.cacheServerMessages(o2, a2), r2.userOffsets.forEach((e6) => {
          this.userOffsets.updateOffset(e6.userId, e6.offset);
        }), this.userOffsets.offsetMap.forEach((e6, t3) => {
          this.markLocalMessagesRead(a2, t3, e6, false);
        });
      }
      return s2;
    });
  }
  deleteMessages(e5) {
    return b(this, void 0, void 0, function* () {
      yield this.aopUnreadAmountMaxMessage(() => b(this, void 0, void 0, function* () {
        let t2 = e5.messages;
        yield Ms.deleteServerMessages(t2), this.messageCache.deleteMessages(t2), v.onSuccess(e5);
      }));
    });
  }
  syncDeletedMessage(e5, t2) {
    this.aopUnreadAmountMaxMessage(() => {
      this.doSyncDeletedMessage(e5, t2);
    });
  }
  doSyncDeletedMessage(e5, t2) {
    if (e5 === te.Socket.user().id) {
      let e6 = this.messageCache.findMessagesByTimes(t2);
      this.messageCache.deleteMessages(e6), e6.length > 0 && Ps.fire(ds.MESSAGE_DELETED, e6);
    }
  }
  recallMessages(e5) {
    return b(this, void 0, void 0, function* () {
      yield this.aopUnreadAmountMaxMessage(() => b(this, void 0, void 0, function* () {
        this.doRecall(e5);
      }));
    });
  }
  doRecall(e5) {
    let t2 = this.messageCache.recallMessage(e5);
    t2.length > 0 && Ps.fire(ds.MESSAGE_RECALLED, t2);
  }
  expire() {
    this.messageCache.isEmpty() || (this.expiredTime = this.messageCache.maxSuccessMessageTime());
  }
  updateByServerChange() {
    return b(this, void 0, void 0, function* () {
      yield this.aopUnreadAmountMaxMessage(() => b(this, void 0, void 0, function* () {
        let e5 = yield this.remoteHistory.sync(this.target.scene, this.target.id, this.expiredTime, this.messageCache.minTime(), this.target.teamId);
        e5.userOffsets.forEach((e6) => {
          this.markLocalMessagesRead(this.messageCache.all(), e6.userId, e6.offset, true);
        });
        let t2 = e5.deletedMessageTimes;
        t2.length > 0 && this.doSyncDeletedMessage(te.Socket.user().id, t2);
        let s2 = e5.recalledMessages;
        s2.length > 0 && s2.forEach((e6) => {
          let t3 = new Os(this.target.scene, this.target.id, e6.recaller, e6.times);
          this.doRecall(t3);
        }), this.expiredTime = 0;
      }));
    });
  }
  markRead() {
    return b(this, void 0, void 0, function* () {
      yield this.aopUnreadAmountMaxMessage(() => b(this, void 0, void 0, function* () {
        let e5 = this.messageCache.maxSuccessMessageTime();
        e5 > this.userOffsets.myOffset() && (this.userOffsets.markingTime = e5, yield this.remoteHistory.updateServerOffsets(e5, this.target), e5 === this.userOffsets.markingTime && this.markLocalMessagesRead(this.messageCache.all(), te.Socket.user().id, e5, true));
      }));
    });
  }
  syncMarkedMessage(e5) {
    this.aopUnreadAmountMaxMessage(() => {
      this.markLocalMessagesRead(this.messageCache.all(), e5.markerId, e5.time, true);
    });
  }
  onMessageSending(e5) {
    this.aopUnreadAmountMaxMessage(() => {
      this.messageCache.saveMessage(e5);
    });
  }
  onMessageSendSuccess(e5) {
    this.aopUnreadAmountMaxMessage(() => {
      this.messageCache.correctPosition(e5), this.markLocalMessagesRead(this.messageCache.all(), te.Socket.user().id, e5.timestamp, true);
    });
  }
  onMessageSendFailed(e5) {
    this.getMaxMessage() === e5 && ys.i.fire(us.MAX_MESSAGE_CHANGED, { message: e5, receiver: this.to });
  }
  onMessageReceived(e5) {
    this.aopUnreadAmountMaxMessage(() => {
      this.messageCache.saveMessage(e5), this.markLocalMessagesRead(this.messageCache.all(), e5.senderId, e5.timestamp, true);
    });
  }
  aopUnreadAmountMaxMessage(e5, t2) {
    return b(this, void 0, void 0, function* () {
      try {
        let t3 = new ks(this);
        t3.pre(), yield e5(), t3.post();
      } catch (e6) {
        v.onFailed(t2, e6);
      }
    });
  }
  markLocalMessagesRead(e5, t2, s2, i2) {
    if (this.userOffsets.updateOffset(t2, s2), this.isOtherUserId(t2)) {
      let t3 = this.markMySentRead(e5, s2);
      i2 && t3.length > 0 && Ps.fire(ds.MESSAGE_READ, t3);
    } else
      t2 === te.Socket.user().id && this.markOthersSentRead(e5, s2);
  }
  markOthersSentRead(e5, t2) {
    if (this.target.scene === o.PRIVATE)
      for (let s2 = e5.length - 1; s2 >= 0; s2--) {
        let i2 = e5[s2];
        if (i2.isOtherSent() && i2.timestamp <= t2) {
          if (i2.read)
            break;
          i2.read = true;
        }
      }
  }
  markMySentRead(e5, t2) {
    let s2 = new Array();
    if (this.target.scene === o.PRIVATE)
      for (let i2 = e5.length - 1; i2 >= 0; i2--) {
        let n2 = e5[i2];
        if (!n2.isOtherSent() && n2.timestamp <= t2 && n2.status === r.SUCCESS) {
          if (n2.read)
            break;
          n2.read = true, s2.push(n2);
        }
      }
    return s2;
  }
  isOtherUserId(e5) {
    if (this.target.scene === o.CS) {
      let t2 = this.target.customerId();
      return te.Socket.user().id === t2 ? e5 !== te.Socket.user().id : e5 === t2;
    }
    return e5 !== te.Socket.user().id;
  }
  unreadAmount(e5) {
    let t2 = 0, s2 = this.userOffsets.myOffset(), i2 = this.messageCache.all();
    for (const e6 of i2)
      e6.isOtherSent() && false === e6.recalled && e6.timestamp > s2 && (t2 += 1);
    return t2;
  }
  getMaxMessage(e5) {
    return this.messageCache.getMaxMessage();
  }
  maxTime(e5) {
    let t2 = this.getMaxMessage();
    return u.isDef(t2) ? t2.timestamp : 0;
  }
};
var xs = class {
  constructor(e5, t2) {
    this.teamId = e5, this.customerId = t2;
  }
};
var Us = class {
};
var Gs = class {
  constructor(e5, t2, s2) {
    this.teamId = e5, this.teamData = JSON.stringify(t2), this.agentData = JSON.stringify(s2);
  }
};
var Fs = class {
  constructor(e5) {
    this.teamId = e5;
  }
};
var Ls = class {
  constructor(e5) {
    this.teamId = e5;
  }
};
var Bs = { exports: {} };
var qs = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var js = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var Vs = function(e5) {
  var t2 = e5, s2 = e5.indexOf("["), i2 = e5.indexOf("]");
  -1 != s2 && -1 != i2 && (e5 = e5.substring(0, s2) + e5.substring(s2, i2).replace(/:/g, ";") + e5.substring(i2, e5.length));
  for (var n2 = qs.exec(e5 || ""), o2 = {}, r2 = 14; r2--; )
    o2[js[r2]] = n2[r2] || "";
  return -1 != s2 && -1 != i2 && (o2.source = t2, o2.host = o2.host.substring(1, o2.host.length - 1).replace(/;/g, ":"), o2.authority = o2.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o2.ipv6uri = true), o2;
};
var Hs = { exports: {} };
var zs = { exports: {} };
var Ws = 1e3;
var Js = 60 * Ws;
var Xs = 60 * Js;
var $s = 24 * Xs;
var Ys = 365.25 * $s;
var Qs = function(e5, t2) {
  t2 = t2 || {};
  var s2 = typeof e5;
  if ("string" === s2 && e5.length > 0)
    return function(e6) {
      if (e6 = String(e6), e6.length > 100)
        return;
      var t3 = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e6);
      if (!t3)
        return;
      var s3 = parseFloat(t3[1]);
      switch ((t3[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return s3 * Ys;
        case "days":
        case "day":
        case "d":
          return s3 * $s;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return s3 * Xs;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return s3 * Js;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return s3 * Ws;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return s3;
        default:
          return;
      }
    }(e5);
  if ("number" === s2 && false === isNaN(e5))
    return t2.long ? function(e6) {
      return Ks(e6, $s, "day") || Ks(e6, Xs, "hour") || Ks(e6, Js, "minute") || Ks(e6, Ws, "second") || e6 + " ms";
    }(e5) : function(e6) {
      if (e6 >= $s)
        return Math.round(e6 / $s) + "d";
      if (e6 >= Xs)
        return Math.round(e6 / Xs) + "h";
      if (e6 >= Js)
        return Math.round(e6 / Js) + "m";
      if (e6 >= Ws)
        return Math.round(e6 / Ws) + "s";
      return e6 + "ms";
    }(e5);
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e5));
};
function Ks(e5, t2, s2) {
  if (!(e5 < t2))
    return e5 < 1.5 * t2 ? Math.floor(e5 / t2) + " " + s2 : Math.ceil(e5 / t2) + " " + s2 + "s";
}
!function(e5, t2) {
  function s2(e6) {
    var s3;
    function n2() {
      if (n2.enabled) {
        var e7 = n2, i3 = +/* @__PURE__ */ new Date(), o2 = i3 - (s3 || i3);
        e7.diff = o2, e7.prev = s3, e7.curr = i3, s3 = i3;
        for (var r2 = new Array(arguments.length), a2 = 0; a2 < r2.length; a2++)
          r2[a2] = arguments[a2];
        r2[0] = t2.coerce(r2[0]), "string" != typeof r2[0] && r2.unshift("%O");
        var c2 = 0;
        r2[0] = r2[0].replace(/%([a-zA-Z%])/g, function(s4, i4) {
          if ("%%" === s4)
            return s4;
          c2++;
          var n3 = t2.formatters[i4];
          if ("function" == typeof n3) {
            var o3 = r2[c2];
            s4 = n3.call(e7, o3), r2.splice(c2, 1), c2--;
          }
          return s4;
        }), t2.formatArgs.call(e7, r2), (n2.log || t2.log || console.log.bind(console)).apply(e7, r2);
      }
    }
    return n2.namespace = e6, n2.enabled = t2.enabled(e6), n2.useColors = t2.useColors(), n2.color = function(e7) {
      var s4, i3 = 0;
      for (s4 in e7)
        i3 = (i3 << 5) - i3 + e7.charCodeAt(s4), i3 |= 0;
      return t2.colors[Math.abs(i3) % t2.colors.length];
    }(e6), n2.destroy = i2, "function" == typeof t2.init && t2.init(n2), t2.instances.push(n2), n2;
  }
  function i2() {
    var e6 = t2.instances.indexOf(this);
    return -1 !== e6 && (t2.instances.splice(e6, 1), true);
  }
  (t2 = zs.exports = s2.debug = s2.default = s2).coerce = function(e6) {
    return e6 instanceof Error ? e6.stack || e6.message : e6;
  }, t2.disable = function() {
    t2.enable("");
  }, t2.enable = function(e6) {
    var s3;
    t2.save(e6), t2.names = [], t2.skips = [];
    var i3 = ("string" == typeof e6 ? e6 : "").split(/[\s,]+/), n2 = i3.length;
    for (s3 = 0; s3 < n2; s3++)
      i3[s3] && ("-" === (e6 = i3[s3].replace(/\*/g, ".*?"))[0] ? t2.skips.push(new RegExp("^" + e6.substr(1) + "$")) : t2.names.push(new RegExp("^" + e6 + "$")));
    for (s3 = 0; s3 < t2.instances.length; s3++) {
      var o2 = t2.instances[s3];
      o2.enabled = t2.enabled(o2.namespace);
    }
  }, t2.enabled = function(e6) {
    if ("*" === e6[e6.length - 1])
      return true;
    var s3, i3;
    for (s3 = 0, i3 = t2.skips.length; s3 < i3; s3++)
      if (t2.skips[s3].test(e6))
        return false;
    for (s3 = 0, i3 = t2.names.length; s3 < i3; s3++)
      if (t2.names[s3].test(e6))
        return true;
    return false;
  }, t2.humanize = Qs, t2.instances = [], t2.names = [], t2.skips = [], t2.formatters = {};
}(0, zs.exports), function(e5, t2) {
  function s2() {
    var e6;
    try {
      e6 = t2.storage.debug;
    } catch (e7) {
    }
    return !e6 && "undefined" != typeof process && "env" in process && (e6 = process.env.DEBUG), e6;
  }
  (t2 = e5.exports = zs.exports).log = function() {
    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }, t2.formatArgs = function(e6) {
    var s3 = this.useColors;
    if (e6[0] = (s3 ? "%c" : "") + this.namespace + (s3 ? " %c" : " ") + e6[0] + (s3 ? "%c " : " ") + "+" + t2.humanize(this.diff), !s3)
      return;
    var i2 = "color: " + this.color;
    e6.splice(1, 0, i2, "color: inherit");
    var n2 = 0, o2 = 0;
    e6[0].replace(/%[a-zA-Z%]/g, function(e7) {
      "%%" !== e7 && (n2++, "%c" === e7 && (o2 = n2));
    }), e6.splice(o2, 0, i2);
  }, t2.save = function(e6) {
    try {
      null == e6 ? t2.storage.removeItem("debug") : t2.storage.debug = e6;
    } catch (e7) {
    }
  }, t2.load = s2, t2.useColors = function() {
    if ("undefined" != typeof window && window.process && "renderer" === window.process.type)
      return true;
    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
      return false;
    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, t2.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
    try {
      return window.localStorage;
    } catch (e6) {
    }
  }(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.formatters.j = function(e6) {
    try {
      return JSON.stringify(e6);
    } catch (e7) {
      return "[UnexpectedJSONParseError]: " + e7.message;
    }
  }, t2.enable(s2());
}(Hs, Hs.exports);
var Zs = Vs;
var ei = Hs.exports("socket.io-client:url");
var ti = function(e5, t2) {
  var s2 = e5;
  t2 = t2 || "undefined" != typeof location && location, null == e5 && (e5 = t2.protocol + "//" + t2.host);
  "string" == typeof e5 && ("/" === e5.charAt(0) && (e5 = "/" === e5.charAt(1) ? t2.protocol + e5 : t2.host + e5), /^(https?|wss?):\/\//.test(e5) || (ei("protocol-less url %s", e5), e5 = void 0 !== t2 ? t2.protocol + "//" + e5 : "https://" + e5), ei("parse %s", e5), s2 = Zs(e5));
  s2.port || (/^(http|ws)$/.test(s2.protocol) ? s2.port = "80" : /^(http|ws)s$/.test(s2.protocol) && (s2.port = "443"));
  s2.path = s2.path || "/";
  var i2 = -1 !== s2.host.indexOf(":") ? "[" + s2.host + "]" : s2.host;
  return s2.id = s2.protocol + "://" + i2 + ":" + s2.port, s2.href = s2.protocol + "://" + i2 + (t2 && t2.port === s2.port ? "" : ":" + s2.port), s2;
};
var si = {};
var ii = {}.toString;
var ni = Array.isArray || function(e5) {
  return "[object Array]" == ii.call(e5);
};
!function(e5) {
  Hs.exports("socket.io-parser");
  var t2 = w.exports, s2 = ni;
  function i2() {
  }
  e5.protocol = 4, e5.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e5.CONNECT = 0, e5.DISCONNECT = 1, e5.EVENT = 2, e5.ACK = 3, e5.ERROR = 4, e5.BINARY_EVENT = 5, e5.BINARY_ACK = 6, e5.Encoder = i2, e5.Decoder = o2;
  var n2 = e5.ERROR + '"encode error"';
  function o2() {
    this.reconstructor = null;
  }
  function r2(t3) {
    return { type: e5.ERROR, data: "parser error: " + t3 };
  }
  i2.prototype.encode = function(t3, s3) {
    var i3 = function(t4) {
      var s4 = "" + t4.type;
      e5.BINARY_EVENT !== t4.type && e5.BINARY_ACK !== t4.type || (s4 += t4.attachments + "-");
      t4.nsp && "/" !== t4.nsp && (s4 += t4.nsp + ",");
      null != t4.id && (s4 += t4.id);
      if (null != t4.data) {
        var i4 = function(e6) {
          try {
            return JSON.stringify(e6);
          } catch (e7) {
            return false;
          }
        }(t4.data);
        if (false === i4)
          return n2;
        s4 += i4;
      }
      return s4;
    }(t3);
    s3([i3]);
  }, t2(o2.prototype), o2.prototype.add = function(t3) {
    var i3;
    if ("string" != typeof t3)
      throw new Error("Unknown type: " + t3);
    i3 = function(t4) {
      var i4 = 0, n3 = { type: Number(t4.charAt(0)) };
      if (null == e5.types[n3.type])
        return r2("unknown packet type " + n3.type);
      if (e5.BINARY_EVENT === n3.type || e5.BINARY_ACK === n3.type) {
        for (var o3 = ""; "-" !== t4.charAt(++i4) && (o3 += t4.charAt(i4), i4 != t4.length); )
          ;
        if (o3 != Number(o3) || "-" !== t4.charAt(i4))
          throw new Error("Illegal attachments");
        n3.attachments = Number(o3);
      }
      if ("/" === t4.charAt(i4 + 1))
        for (n3.nsp = ""; ++i4; ) {
          if ("," === (c2 = t4.charAt(i4)))
            break;
          if (n3.nsp += c2, i4 === t4.length)
            break;
        }
      else
        n3.nsp = "/";
      var a2 = t4.charAt(i4 + 1);
      if ("" !== a2 && Number(a2) == a2) {
        for (n3.id = ""; ++i4; ) {
          var c2;
          if (null == (c2 = t4.charAt(i4)) || Number(c2) != c2) {
            --i4;
            break;
          }
          if (n3.id += t4.charAt(i4), i4 === t4.length)
            break;
        }
        n3.id = Number(n3.id);
      }
      if (t4.charAt(++i4)) {
        var u2 = function(e6) {
          try {
            return JSON.parse(e6);
          } catch (e7) {
            return false;
          }
        }(t4.substr(i4));
        if (!(false !== u2 && (n3.type === e5.ERROR || s2(u2))))
          return r2("invalid payload");
        n3.data = u2;
      }
      return n3;
    }(t3), this.emit("decoded", i3);
  }, o2.prototype.destroy = function() {
    this.reconstructor && this.reconstructor.finishedReconstruction();
  };
}(si);
var oi = { exports: {} };
var ri = {};
var ai = {};
var ci = Object.keys || function(e5) {
  var t2 = [], s2 = Object.prototype.hasOwnProperty;
  for (var i2 in e5)
    s2.call(e5, i2) && t2.push(i2);
  return t2;
};
var ui = ni;
var li = Object.prototype.toString;
var di = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === li.call(Blob);
var hi = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === li.call(File);
var pi = function e4(t2) {
  if (!t2 || "object" != typeof t2)
    return false;
  if (ui(t2)) {
    for (var s2 = 0, i2 = t2.length; s2 < i2; s2++)
      if (e4(t2[s2]))
        return true;
    return false;
  }
  if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t2) || "function" == typeof ArrayBuffer && t2 instanceof ArrayBuffer || di && t2 instanceof Blob || hi && t2 instanceof File)
    return true;
  if (t2.toJSON && "function" == typeof t2.toJSON && 1 === arguments.length)
    return e4(t2.toJSON(), true);
  for (var n2 in t2)
    if (Object.prototype.hasOwnProperty.call(t2, n2) && e4(t2[n2]))
      return true;
  return false;
};
var mi = function(e5, t2, s2) {
  var i2 = false;
  return s2 = s2 || fi, n2.count = e5, 0 === e5 ? t2() : n2;
  function n2(e6, o2) {
    if (n2.count <= 0)
      throw new Error("after called too many times");
    --n2.count, e6 ? (i2 = true, t2(e6), t2 = s2) : 0 !== n2.count || i2 || t2(null, o2);
  }
};
function fi() {
}
var gi;
var yi;
var Si;
var Ei = String.fromCharCode;
function vi(e5) {
  for (var t2, s2, i2 = [], n2 = 0, o2 = e5.length; n2 < o2; )
    (t2 = e5.charCodeAt(n2++)) >= 55296 && t2 <= 56319 && n2 < o2 ? 56320 == (64512 & (s2 = e5.charCodeAt(n2++))) ? i2.push(((1023 & t2) << 10) + (1023 & s2) + 65536) : (i2.push(t2), n2--) : i2.push(t2);
  return i2;
}
function bi(e5, t2) {
  if (e5 >= 55296 && e5 <= 57343) {
    if (t2)
      throw Error("Lone surrogate U+" + e5.toString(16).toUpperCase() + " is not a scalar value");
    return false;
  }
  return true;
}
function Ci(e5, t2) {
  return Ei(e5 >> t2 & 63 | 128);
}
function Mi(e5, t2) {
  if (0 == (4294967168 & e5))
    return Ei(e5);
  var s2 = "";
  return 0 == (4294965248 & e5) ? s2 = Ei(e5 >> 6 & 31 | 192) : 0 == (4294901760 & e5) ? (bi(e5, t2) || (e5 = 65533), s2 = Ei(e5 >> 12 & 15 | 224), s2 += Ci(e5, 6)) : 0 == (4292870144 & e5) && (s2 = Ei(e5 >> 18 & 7 | 240), s2 += Ci(e5, 12), s2 += Ci(e5, 6)), s2 += Ei(63 & e5 | 128);
}
function wi() {
  if (Si >= yi)
    throw Error("Invalid byte index");
  var e5 = 255 & gi[Si];
  if (Si++, 128 == (192 & e5))
    return 63 & e5;
  throw Error("Invalid continuation byte");
}
function Ii(e5) {
  var t2, s2;
  if (Si > yi)
    throw Error("Invalid byte index");
  if (Si == yi)
    return false;
  if (t2 = 255 & gi[Si], Si++, 0 == (128 & t2))
    return t2;
  if (192 == (224 & t2)) {
    if ((s2 = (31 & t2) << 6 | wi()) >= 128)
      return s2;
    throw Error("Invalid continuation byte");
  }
  if (224 == (240 & t2)) {
    if ((s2 = (15 & t2) << 12 | wi() << 6 | wi()) >= 2048)
      return bi(s2, e5) ? s2 : 65533;
    throw Error("Invalid continuation byte");
  }
  if (240 == (248 & t2) && (s2 = (7 & t2) << 18 | wi() << 12 | wi() << 6 | wi()) >= 65536 && s2 <= 1114111)
    return s2;
  throw Error("Invalid UTF-8 detected");
}
var Ni = { version: "2.1.2", encode: function(e5, t2) {
  for (var s2 = false !== (t2 = t2 || {}).strict, i2 = vi(e5), n2 = i2.length, o2 = -1, r2 = ""; ++o2 < n2; )
    r2 += Mi(i2[o2], s2);
  return r2;
}, decode: function(e5, t2) {
  var s2 = false !== (t2 = t2 || {}).strict;
  gi = vi(e5), yi = gi.length, Si = 0;
  for (var i2, n2 = []; false !== (i2 = Ii(s2)); )
    n2.push(i2);
  return function(e6) {
    for (var t3, s3 = e6.length, i3 = -1, n3 = ""; ++i3 < s3; )
      (t3 = e6[i3]) > 65535 && (n3 += Ei((t3 -= 65536) >>> 10 & 1023 | 55296), t3 = 56320 | 1023 & t3), n3 += Ei(t3);
    return n3;
  }(n2);
} };
var Ti = void 0 !== Ti ? Ti : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder;
var Ri = function() {
  try {
    return 2 === new Blob(["hi"]).size;
  } catch (e5) {
    return false;
  }
}();
var Ai = Ri && function() {
  try {
    return 2 === new Blob([new Uint8Array([1, 2])]).size;
  } catch (e5) {
    return false;
  }
}();
var ki = Ti && Ti.prototype.append && Ti.prototype.getBlob;
function Oi(e5) {
  return e5.map(function(e6) {
    if (e6.buffer instanceof ArrayBuffer) {
      var t2 = e6.buffer;
      if (e6.byteLength !== t2.byteLength) {
        var s2 = new Uint8Array(e6.byteLength);
        s2.set(new Uint8Array(t2, e6.byteOffset, e6.byteLength)), t2 = s2.buffer;
      }
      return t2;
    }
    return e6;
  });
}
function Pi(e5, t2) {
  t2 = t2 || {};
  var s2 = new Ti();
  return Oi(e5).forEach(function(e6) {
    s2.append(e6);
  }), t2.type ? s2.getBlob(t2.type) : s2.getBlob();
}
function _i(e5, t2) {
  return new Blob(Oi(e5), t2 || {});
}
"undefined" != typeof Blob && (Pi.prototype = Blob.prototype, _i.prototype = Blob.prototype);
var Di = Ri ? Ai ? Blob : _i : ki ? Pi : void 0;
!function(e5) {
  var t2 = ci, s2 = pi, i2 = mi, n2 = Ni;
  "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), e5.protocol = 3;
  var o2 = e5.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }, r2 = t2(o2), a2 = { type: "error", data: "parser error" }, c2 = Di;
  e5.encodePacket = function(e6, t3, s3, i3) {
    "function" == typeof t3 && (i3 = t3, t3 = false), "function" == typeof s3 && (i3 = s3, s3 = null), void 0 === e6.data || e6.data.buffer || e6.data;
    var r3 = o2[e6.type];
    return void 0 !== e6.data && (r3 += s3 ? n2.encode(String(e6.data), { strict: false }) : String(e6.data)), i3("" + r3);
  }, e5.decodePacket = function(e6, t3, s3) {
    if (void 0 === e6)
      return a2;
    if ("string" == typeof e6) {
      if (s3 && false === (e6 = function(e7) {
        try {
          e7 = n2.decode(e7, { strict: false });
        } catch (e8) {
          return false;
        }
        return e7;
      }(e6)))
        return a2;
      var i3 = e6.charAt(0);
      return Number(i3) == i3 && r2[i3] ? e6.length > 1 ? { type: r2[i3], data: e6.substring(1) } : { type: r2[i3] } : a2;
    }
    i3 = new Uint8Array(e6)[0];
    var o3 = sliceBuffer(e6, 1);
    return c2 && "blob" === t3 && (o3 = new c2([o3])), { type: r2[i3], data: o3 };
  }, e5.encodePayload = function(t3, n3, o3) {
    "function" == typeof n3 && (o3 = n3, n3 = null);
    var r3 = s2(t3);
    if (!t3.length)
      return o3("0:");
    !function(e6, t4, s3) {
      for (var n4 = new Array(e6.length), o4 = i2(e6.length, s3), r4 = function(e7, s4, i3) {
        t4(s4, function(t5, s5) {
          n4[e7] = s5, i3(t5, n4);
        });
      }, a3 = 0; a3 < e6.length; a3++)
        r4(a3, e6[a3], o4);
    }(t3, function(t4, s3) {
      e5.encodePacket(t4, !!r3 && n3, true, function(e6) {
        s3(null, function(e7) {
          return e7.length + ":" + e7;
        }(e6));
      });
    }, function(e6, t4) {
      return o3(t4.join(""));
    });
  }, e5.decodePayload = function(t3, s3, i3) {
    var n3;
    if ("function" == typeof s3 && (i3 = s3, s3 = null), "" === t3)
      return i3(a2, 0, 1);
    for (var o3, r3, c3 = "", u2 = 0, l2 = t3.length; u2 < l2; u2++) {
      var d2 = t3.charAt(u2);
      if (":" === d2) {
        if ("" === c3 || c3 != (o3 = Number(c3)))
          return i3(a2, 0, 1);
        if (c3 != (r3 = t3.substr(u2 + 1, o3)).length)
          return i3(a2, 0, 1);
        if (r3.length) {
          if (n3 = e5.decodePacket(r3, s3, true), a2.type === n3.type && a2.data === n3.data)
            return i3(a2, 0, 1);
          if (false === i3(n3, u2 + o3, l2))
            return;
        }
        u2 += o3, c3 = "";
      } else
        c3 += d2;
    }
    return "" !== c3 ? i3(a2, 0, 1) : void 0;
  };
}(ai);
var xi = ai;
var Ui = Gi;
function Gi(e5) {
  this.path = e5.path, this.hostname = e5.hostname, this.port = e5.port, this.secure = e5.secure, this.query = e5.query, this.timestampParam = e5.timestampParam, this.timestampRequests = e5.timestampRequests, this.readyState = "", this.agent = e5.agent || false, this.socket = e5.socket, this.enablesXDR = e5.enablesXDR, this.pfx = e5.pfx, this.key = e5.key, this.passphrase = e5.passphrase, this.cert = e5.cert, this.ca = e5.ca, this.ciphers = e5.ciphers, this.rejectUnauthorized = e5.rejectUnauthorized, this.forceNode = e5.forceNode, this.isReactNative = e5.isReactNative, this.extraHeaders = e5.extraHeaders, this.localAddress = e5.localAddress;
}
(0, w.exports)(Gi.prototype), Gi.prototype.onError = function(e5, t2) {
  var s2 = new Error(e5);
  return s2.type = "TransportError", s2.description = t2, this.emit("error", s2), this;
}, Gi.prototype.open = function() {
  return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
}, Gi.prototype.close = function() {
  return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
}, Gi.prototype.send = function(e5) {
  if ("open" !== this.readyState)
    throw new Error("Transport not open");
  this.write(e5);
}, Gi.prototype.onOpen = function() {
  this.readyState = "open", this.writable = true, this.emit("open");
}, Gi.prototype.onData = function(e5) {
  var t2 = xi.decodePacket(e5, this.socket.binaryType);
  this.onPacket(t2);
}, Gi.prototype.onPacket = function(e5) {
  this.emit("packet", e5);
}, Gi.prototype.onClose = function() {
  this.readyState = "closed", this.emit("close");
};
var Fi;
var Li = { encode: function(e5) {
  var t2 = "";
  for (var s2 in e5)
    e5.hasOwnProperty(s2) && (t2.length && (t2 += "&"), t2 += encodeURIComponent(s2) + "=" + encodeURIComponent(e5[s2]));
  return t2;
}, decode: function(e5) {
  for (var t2 = {}, s2 = e5.split("&"), i2 = 0, n2 = s2.length; i2 < n2; i2++) {
    var o2 = s2[i2].split("=");
    t2[decodeURIComponent(o2[0])] = decodeURIComponent(o2[1]);
  }
  return t2;
} };
var Bi = function(e5, t2) {
  var s2 = function() {
  };
  s2.prototype = t2.prototype, e5.prototype = new s2(), e5.prototype.constructor = e5;
};
var qi = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
var ji = 64;
var Vi = {};
var Hi = 0;
var zi = 0;
function Wi(e5) {
  var t2 = "";
  do {
    t2 = qi[e5 % ji] + t2, e5 = Math.floor(e5 / ji);
  } while (e5 > 0);
  return t2;
}
function Ji() {
  var e5 = Wi(+/* @__PURE__ */ new Date());
  return e5 !== Fi ? (Hi = 0, Fi = e5) : e5 + "." + Wi(Hi++);
}
for (; zi < ji; zi++)
  Vi[qi[zi]] = zi;
Ji.encode = Wi, Ji.decode = function(e5) {
  var t2 = 0;
  for (zi = 0; zi < e5.length; zi++)
    t2 = t2 * ji + Vi[e5.charAt(zi)];
  return t2;
};
var Xi = Ji;
var $i = { exports: {} };
try {
  $i.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
} catch (e5) {
  $i.exports = false;
}
var Yi = $i.exports;
var Qi = function(e5) {
  var t2 = e5.xdomain, s2 = e5.xscheme, i2 = e5.enablesXDR;
  try {
    if ("undefined" != typeof XMLHttpRequest && (!t2 || Yi))
      return new XMLHttpRequest();
  } catch (e6) {
  }
  try {
    if ("undefined" != typeof XDomainRequest && !s2 && i2)
      return new XDomainRequest();
  } catch (e6) {
  }
  if (!t2)
    try {
      return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e6) {
    }
};
var Ki = Ui;
var Zi = Li;
var en = ai;
var tn = Bi;
var sn = Xi;
var nn = Hs.exports("engine.io-client:polling");
var on = an;
var rn = null != new Qi({ xdomain: false }).responseType;
function an(e5) {
  var t2 = e5 && e5.forceBase64;
  rn && !t2 || (this.supportsBinary = false), Ki.call(this, e5);
}
tn(an, Ki), an.prototype.name = "polling", an.prototype.doOpen = function() {
  this.poll();
}, an.prototype.pause = function(e5) {
  var t2 = this;
  function s2() {
    nn("paused"), t2.readyState = "paused", e5();
  }
  if (this.readyState = "pausing", this.polling || !this.writable) {
    var i2 = 0;
    this.polling && (nn("we are currently polling - waiting to pause"), i2++, this.once("pollComplete", function() {
      nn("pre-pause polling complete"), --i2 || s2();
    })), this.writable || (nn("we are currently writing - waiting to pause"), i2++, this.once("drain", function() {
      nn("pre-pause writing complete"), --i2 || s2();
    }));
  } else
    s2();
}, an.prototype.poll = function() {
  nn("polling"), this.polling = true, this.doPoll(), this.emit("poll");
}, an.prototype.onData = function(e5) {
  var t2 = this;
  nn("polling got data %s", e5);
  en.decodePayload(e5, this.socket.binaryType, function(e6, s2, i2) {
    if ("opening" === t2.readyState && t2.onOpen(), "close" === e6.type)
      return t2.onClose(), false;
    t2.onPacket(e6);
  }), "closed" !== this.readyState && (this.polling = false, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : nn('ignoring poll - transport state "%s"', this.readyState));
}, an.prototype.doClose = function() {
  var e5 = this;
  function t2() {
    nn("writing close packet"), e5.write([{ type: "close" }]);
  }
  "open" === this.readyState ? (nn("transport open - closing"), t2()) : (nn("transport not open - deferring close"), this.once("open", t2));
}, an.prototype.write = function(e5) {
  var t2 = this;
  this.writable = false;
  var s2 = function() {
    t2.writable = true, t2.emit("drain");
  };
  en.encodePayload(e5, this.supportsBinary, function(e6) {
    t2.doWrite(e6, s2);
  });
}, an.prototype.uri = function() {
  var e5 = this.query || {}, t2 = this.secure ? "https" : "http", s2 = "";
  return false !== this.timestampRequests && (e5[this.timestampParam] = sn()), this.supportsBinary || e5.sid || (e5.b64 = 1), e5 = Zi.encode(e5), this.port && ("https" === t2 && 443 !== Number(this.port) || "http" === t2 && 80 !== Number(this.port)) && (s2 = ":" + this.port), e5.length && (e5 = "?" + e5), t2 + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + s2 + this.path + e5;
};
var cn;
var un = on;
var ln = fn;
var dn = /\n/g;
var hn = /\\n/g;
function pn() {
}
function mn() {
  return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== C ? C : {};
}
function fn(e5) {
  if (un.call(this, e5), this.query = this.query || {}, !cn) {
    var t2 = mn();
    cn = t2.___eio = t2.___eio || [];
  }
  this.index = cn.length;
  var s2 = this;
  cn.push(function(e6) {
    s2.onData(e6);
  }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function() {
    s2.script && (s2.script.onerror = pn);
  }, false);
}
Bi(fn, un), fn.prototype.supportsBinary = false, fn.prototype.doClose = function() {
  this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), un.prototype.doClose.call(this);
}, fn.prototype.doPoll = function() {
  var e5 = this, t2 = document.createElement("script");
  this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t2.async = true, t2.src = this.uri(), t2.onerror = function(t3) {
    e5.onError("jsonp poll error", t3);
  };
  var s2 = document.getElementsByTagName("script")[0];
  s2 ? s2.parentNode.insertBefore(t2, s2) : (document.head || document.body).appendChild(t2), this.script = t2, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
    var e6 = document.createElement("iframe");
    document.body.appendChild(e6), document.body.removeChild(e6);
  }, 100);
}, fn.prototype.doWrite = function(e5, t2) {
  var s2 = this;
  if (!this.form) {
    var i2, n2 = document.createElement("form"), o2 = document.createElement("textarea"), r2 = this.iframeId = "eio_iframe_" + this.index;
    n2.className = "socketio", n2.style.position = "absolute", n2.style.top = "-1000px", n2.style.left = "-1000px", n2.target = r2, n2.method = "POST", n2.setAttribute("accept-charset", "utf-8"), o2.name = "d", n2.appendChild(o2), document.body.appendChild(n2), this.form = n2, this.area = o2;
  }
  function a2() {
    c2(), t2();
  }
  function c2() {
    if (s2.iframe)
      try {
        s2.form.removeChild(s2.iframe);
      } catch (e7) {
        s2.onError("jsonp polling iframe removal error", e7);
      }
    try {
      var e6 = '<iframe src="javascript:0" name="' + s2.iframeId + '">';
      i2 = document.createElement(e6);
    } catch (e7) {
      (i2 = document.createElement("iframe")).name = s2.iframeId, i2.src = "javascript:0";
    }
    i2.id = s2.iframeId, s2.form.appendChild(i2), s2.iframe = i2;
  }
  this.form.action = this.uri(), c2(), e5 = e5.replace(hn, "\\\n"), this.area.value = e5.replace(dn, "\\n");
  try {
    this.form.submit();
  } catch (e6) {
  }
  this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
    "complete" === s2.iframe.readyState && a2();
  } : this.iframe.onload = a2;
};
var gn;
var yn;
var Sn = Ui;
var En = ai;
var vn = Li;
var bn = Bi;
var Cn = Xi;
var Mn = Hs.exports("engine.io-client:websocket");
("undefined" == typeof uni && "undefined" == typeof wx && "undefined" == typeof my && "undefined" == typeof swan || "undefined" != typeof WebSocket) && ("undefined" != typeof WebSocket ? gn = WebSocket : "undefined" != typeof self && (gn = self.WebSocket || self.MozWebSocket));
var wn = gn || yn;
var In = "undefined" != typeof uni && "harmonyos" === uni.getSystemInfoSync().platform;
(("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || "undefined" != typeof GameGlobal || In) && (wn = function(e5) {
  var t2 = this;
  if (t2.onopen = function() {
  }, t2.onclose = function() {
  }, t2.onmessage = function(e6) {
  }, t2.onerror = function(e6) {
  }, "object" == typeof tt && tt.getSystemInfo) {
    let s3 = tt.connectSocket({ url: e5 });
    t2.send = function(e6) {
      s3.send({ data: e6 });
    }, t2.close = function() {
      s3.close();
    }, s3.onOpen(function() {
      t2.onopen();
    }), s3.onError(function(e6) {
      t2.onerror(e6);
    }), s3.onMessage(function(e6) {
      t2.onmessage(e6);
    }), s3.onClose(function() {
      t2.onclose();
    });
  } else if ("undefined" != typeof my)
    my.connectSocket({ url: e5 }), t2.send = function(e6) {
      my.sendSocketMessage({ data: e6 });
    }, t2.close = function(e6) {
      my.closeSocket();
    }, my.onSocketOpen(function(e6) {
      t2.onopen();
    }), my.onSocketError(function(e6) {
      t2.onerror(e6);
    }), my.onSocketMessage(function(e6) {
      t2.onmessage(e6);
    }), my.onSocketClose((e6) => {
      t2.onclose(e6);
    });
  else if ("undefined" != typeof swan)
    swan.connectSocket({ url: e5 }), t2.send = function(e6) {
      swan.sendSocketMessage({ data: e6 });
    }, t2.close = function(e6) {
      swan.closeSocket();
    }, swan.onSocketOpen(function(e6) {
      t2.onopen();
    }), swan.onSocketError(function(e6) {
      t2.onerror(e6);
    }), swan.onSocketMessage(function(e6) {
      t2.onmessage(e6);
    }), swan.onSocketClose((e6) => {
      t2.onclose(e6);
    });
  else if ("undefined" != typeof uni) {
    var s2 = uni.connectSocket({ url: e5, complete: () => {
    } });
    t2.send = function(e6) {
      s2.send({ data: e6 });
    }, t2.close = function() {
      s2.close();
    }, s2.onOpen(function(e6) {
      t2.onopen();
    }), s2.onError(function(e6) {
      t2.onerror(e6);
    }), s2.onMessage(function(e6) {
      t2.onmessage(e6);
    }), s2.onClose(function(e6) {
      t2.onclose();
    });
  } else {
    var i2 = wx.connectSocket({ url: e5 });
    t2.send = function(e6) {
      i2.send({ data: e6 });
    }, t2.close = function(e6) {
      i2.close({ code: 1e3 });
    }, i2.onOpen(function() {
      t2.onopen();
    }), i2.onError(function(e6) {
      t2.onerror(e6);
    }), i2.onMessage(function(e6) {
      t2.onmessage(e6);
    }), i2.onClose(function(e6) {
      t2.onclose(e6);
    });
  }
});
var Nn = Tn;
function Tn(e5) {
  e5 && e5.forceBase64 && (this.supportsBinary = false), ("undefined" == typeof uni && "undefined" == typeof wx && "undefined" == typeof my && "undefined" == typeof swan || "undefined" != typeof WebSocket) && (this.perMessageDeflate = e5.perMessageDeflate, this.usingBrowserWebSocket = gn && !e5.forceNode, this.protocols = e5.protocols, this.usingBrowserWebSocket || (wn = yn)), Sn.call(this, e5);
}
bn(Tn, Sn), Tn.prototype.name = "websocket", Tn.prototype.supportsBinary = false, Tn.prototype.doOpen = function() {
  if (this.check()) {
    var e5, t2, s2 = this.uri();
    if (("undefined" == typeof uni && "undefined" == typeof wx && "undefined" == typeof my && "undefined" == typeof swan || "undefined" != typeof WebSocket) && (e5 = this.protocols), (t2 = ("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || In ? { agent: this.agent } : { agent: this.agent, perMessageDeflate: this.perMessageDeflate }).pfx = this.pfx, t2.key = this.key, t2.passphrase = this.passphrase, t2.cert = this.cert, t2.ca = this.ca, t2.ciphers = this.ciphers, t2.rejectUnauthorized = this.rejectUnauthorized, "object" == typeof navigator && "ReactNative" === navigator.product && (t2 = {}), this.extraHeaders && (t2.headers = this.extraHeaders), this.localAddress && (t2.localAddress = this.localAddress), "undefined" != typeof cc && "Windows" === cc.sys.os)
      cc.resources.load("cacert", (e6, t3) => {
        const i2 = t3.nativeUrl;
        this.ws = new wn(s2, [], i2), this.ws.binaryType = "arraybuffer", this.addEventListeners();
      });
    else {
      try {
        ("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || In ? this.ws = new wn(s2) : this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e5 ? new wn(s2, e5) : new wn(s2) : new wn(s2, e5, t2);
      } catch (e6) {
        return this.emit("error", e6);
      }
      void 0 === this.ws.binaryType && (this.supportsBinary = false), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = true, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
    }
  }
}, Tn.prototype.addEventListeners = function() {
  var e5 = this;
  this.ws.onopen = function() {
    e5.onOpen();
  }, this.ws.onclose = function() {
    e5.onClose();
  }, this.ws.onmessage = function(t2) {
    e5.onData(t2.data);
  }, this.ws.onerror = function(t2) {
    e5.onError("websocket error", t2);
  };
}, Tn.prototype.write = function(e5) {
  var t2 = this;
  this.writable = false;
  for (var s2 = e5.length, i2 = 0, n2 = s2; i2 < n2; i2++)
    !function(e6) {
      En.encodePacket(e6, t2.supportsBinary, function(i3) {
        if (("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || In)
          try {
            t2.ws.send(i3);
          } catch (e7) {
            Mn("websocket closed before onclose event");
          }
        else {
          if (!t2.usingBrowserWebSocket) {
            var n3 = {};
            if (e6.options && (n3.compress = e6.options.compress), t2.perMessageDeflate)
              ("string" == typeof i3 ? Buffer.byteLength(i3) : i3.length) < t2.perMessageDeflate.threshold && (n3.compress = false);
          }
          try {
            t2.usingBrowserWebSocket ? t2.ws.send(i3) : t2.ws.send(i3, n3);
          } catch (e7) {
            Mn("websocket closed before onclose event");
          }
        }
        --s2 || o2();
      });
    }(e5[i2]);
  function o2() {
    t2.emit("flush"), setTimeout(function() {
      t2.writable = true, t2.emit("drain");
    }, 0);
  }
}, Tn.prototype.onClose = function() {
  Sn.prototype.onClose.call(this);
}, Tn.prototype.doClose = function() {
  void 0 !== this.ws && this.ws.close();
}, Tn.prototype.uri = function() {
  var e5 = this.query || {}, t2 = this.secure ? "wss" : "ws", s2 = "";
  return this.port && ("wss" === t2 && 443 !== Number(this.port) || "ws" === t2 && 80 !== Number(this.port)) && (s2 = ":" + this.port), this.timestampRequests && (e5[this.timestampParam] = Cn()), this.supportsBinary || (e5.b64 = 1), (e5 = vn.encode(e5)).length && (e5 = "?" + e5), t2 + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + s2 + this.path + e5;
}, Tn.prototype.check = function() {
  return !(!wn || "__initialize" in wn && this.name === Tn.prototype.name);
};
var Rn = ln;
var An = Nn;
ri.polling = function(e5) {
  var t2 = false, s2 = false;
  if (e5.jsonp, "undefined" != typeof location) {
    var i2 = "https:" === location.protocol, n2 = location.port;
    n2 || (n2 = i2 ? 443 : 80), t2 = e5.hostname !== location.hostname || n2 !== e5.port, s2 = e5.secure !== i2;
  }
  return e5.xdomain = t2, e5.xscheme = s2, new Rn(e5);
}, ri.websocket = An;
var kn = [].indexOf;
var On = function(e5, t2) {
  if (kn)
    return e5.indexOf(t2);
  for (var s2 = 0; s2 < e5.length; ++s2)
    if (e5[s2] === t2)
      return s2;
  return -1;
};
var Pn = ri;
var _n = w.exports;
var Dn = Hs.exports("engine.io-client:socket");
var xn = On;
var Un = ai;
var Gn = Vs;
var Fn = Li;
var Ln = Bn;
function Bn(e5, t2) {
  if (!(this instanceof Bn))
    return new Bn(e5, t2);
  t2 = t2 || {}, e5 && "object" == typeof e5 && (t2 = e5, e5 = null), e5 ? (e5 = Gn(e5), t2.hostname = e5.host, t2.secure = "https" === e5.protocol || "wss" === e5.protocol, t2.port = e5.port, e5.query && (t2.query = e5.query)) : t2.host && (t2.hostname = Gn(t2.host).host), this.secure = null != t2.secure ? t2.secure : "undefined" != typeof location && "https:" === location.protocol, t2.hostname && !t2.port && (t2.port = this.secure ? "443" : "80"), this.agent = t2.agent || false, this.hostname = t2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t2.query || {}, "string" == typeof this.query && (this.query = Fn.decode(this.query)), this.upgrade = false !== t2.upgrade, this.path = (t2.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t2.forceJSONP, this.jsonp = false !== t2.jsonp, this.forceBase64 = !!t2.forceBase64, this.enablesXDR = !!t2.enablesXDR, this.timestampParam = t2.timestampParam || "t", this.timestampRequests = t2.timestampRequests, this.transports = t2.transports || ["polling", "websocket"], this.transportOptions = t2.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t2.policyPort || 843, this.rememberUpgrade = t2.rememberUpgrade || false, this.binaryType = null, this.onlyBinaryUpgrades = t2.onlyBinaryUpgrades, this.perMessageDeflate = false !== t2.perMessageDeflate && (t2.perMessageDeflate || {}), true === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t2.pfx || null, this.key = t2.key || null, this.passphrase = t2.passphrase || null, this.cert = t2.cert || null, this.ca = t2.ca || null, this.ciphers = t2.ciphers || null, this.rejectUnauthorized = void 0 === t2.rejectUnauthorized || t2.rejectUnauthorized, this.forceNode = !!t2.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t2.extraHeaders && Object.keys(t2.extraHeaders).length > 0 && (this.extraHeaders = t2.extraHeaders), t2.localAddress && (this.localAddress = t2.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
}
Bn.priorWebsocketSuccess = false, _n(Bn.prototype), Bn.protocol = Un.protocol, Bn.Socket = Bn, Bn.Transport = Ui, Bn.transports = ri, Bn.parser = ai, Bn.prototype.createTransport = function(e5) {
  Dn('creating transport "%s"', e5);
  var t2 = function(e6) {
    var t3 = {};
    for (var s3 in e6)
      e6.hasOwnProperty(s3) && (t3[s3] = e6[s3]);
    return t3;
  }(this.query);
  t2.EIO = Un.protocol, t2.transport = e5;
  var s2 = this.transportOptions[e5] || {};
  return this.id && (t2.sid = this.id), new Pn[e5]({ query: t2, socket: this, agent: s2.agent || this.agent, hostname: s2.hostname || this.hostname, port: s2.port || this.port, secure: s2.secure || this.secure, path: s2.path || this.path, forceJSONP: s2.forceJSONP || this.forceJSONP, jsonp: s2.jsonp || this.jsonp, forceBase64: s2.forceBase64 || this.forceBase64, enablesXDR: s2.enablesXDR || this.enablesXDR, timestampRequests: s2.timestampRequests || this.timestampRequests, timestampParam: s2.timestampParam || this.timestampParam, policyPort: s2.policyPort || this.policyPort, pfx: s2.pfx || this.pfx, key: s2.key || this.key, passphrase: s2.passphrase || this.passphrase, cert: s2.cert || this.cert, ca: s2.ca || this.ca, ciphers: s2.ciphers || this.ciphers, rejectUnauthorized: s2.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: s2.perMessageDeflate || this.perMessageDeflate, extraHeaders: s2.extraHeaders || this.extraHeaders, forceNode: s2.forceNode || this.forceNode, localAddress: s2.localAddress || this.localAddress, requestTimeout: s2.requestTimeout || this.requestTimeout, protocols: s2.protocols || void 0, isReactNative: this.isReactNative });
}, Bn.prototype.open = function() {
  var e5;
  if (this.rememberUpgrade && Bn.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
    e5 = "websocket";
  else {
    if (0 === this.transports.length) {
      var t2 = this;
      return void setTimeout(function() {
        t2.emit("error", "No transports available");
      }, 0);
    }
    e5 = this.transports[0];
  }
  this.readyState = "opening";
  try {
    e5 = this.createTransport(e5);
  } catch (e6) {
    return this.transports.shift(), void this.open();
  }
  e5.open(), this.setTransport(e5);
}, Bn.prototype.setTransport = function(e5) {
  Dn("setting transport %s", e5.name);
  var t2 = this;
  this.transport && (Dn("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e5, e5.on("drain", function() {
    t2.onDrain();
  }).on("packet", function(e6) {
    t2.onPacket(e6);
  }).on("error", function(e6) {
    t2.onError(e6);
  }).on("close", function() {
    t2.onClose("transport close");
  });
}, Bn.prototype.probe = function(e5) {
  Dn('probing transport "%s"', e5);
  var t2 = this.createTransport(e5, { probe: 1 }), s2 = false, i2 = this;
  function n2() {
    if (i2.onlyBinaryUpgrades) {
      var n3 = !this.supportsBinary && i2.transport.supportsBinary;
      s2 = s2 || n3;
    }
    s2 || (Dn('probe transport "%s" opened', e5), t2.send([{ type: "ping", data: "probe" }]), t2.once("packet", function(n4) {
      if (!s2)
        if ("pong" === n4.type && "probe" === n4.data) {
          if (Dn('probe transport "%s" pong', e5), i2.upgrading = true, i2.emit("upgrading", t2), !t2)
            return;
          Bn.priorWebsocketSuccess = "websocket" === t2.name, Dn('pausing current transport "%s"', i2.transport.name), i2.transport.pause(function() {
            s2 || "closed" !== i2.readyState && (Dn("changing transport and sending upgrade packet"), l2(), i2.setTransport(t2), t2.send([{ type: "upgrade" }]), i2.emit("upgrade", t2), t2 = null, i2.upgrading = false, i2.flush());
          });
        } else {
          Dn('probe transport "%s" failed', e5);
          var o3 = new Error("probe error");
          o3.transport = t2.name, i2.emit("upgradeError", o3);
        }
    }));
  }
  function o2() {
    s2 || (s2 = true, l2(), t2.close(), t2 = null);
  }
  function r2(s3) {
    var n3 = new Error("probe error: " + s3);
    n3.transport = t2.name, o2(), Dn('probe transport "%s" failed because of error: %s', e5, s3), i2.emit("upgradeError", n3);
  }
  function a2() {
    r2("transport closed");
  }
  function c2() {
    r2("socket closed");
  }
  function u2(e6) {
    t2 && e6.name !== t2.name && (Dn('"%s" works - aborting "%s"', e6.name, t2.name), o2());
  }
  function l2() {
    t2.removeListener("open", n2), t2.removeListener("error", r2), t2.removeListener("close", a2), i2.removeListener("close", c2), i2.removeListener("upgrading", u2);
  }
  Bn.priorWebsocketSuccess = false, t2.once("open", n2), t2.once("error", r2), t2.once("close", a2), this.once("close", c2), this.once("upgrading", u2), t2.open();
}, Bn.prototype.onOpen = function() {
  if (Dn("socket open"), this.readyState = "open", Bn.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
    Dn("starting upgrade probes");
    for (var e5 = 0, t2 = this.upgrades.length; e5 < t2; e5++)
      this.probe(this.upgrades[e5]);
  }
}, Bn.prototype.onPacket = function(e5) {
  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
    switch (Dn('socket receive: type "%s", data "%s"', e5.type, e5.data), this.emit("packet", e5), this.emit("heartbeat"), e5.type) {
      case "open":
        this.onHandshake(JSON.parse(e5.data));
        break;
      case "pong":
        this.setPing(), this.emit("pong");
        break;
      case "error":
        var t2 = new Error("server error");
        t2.code = e5.data, this.onError(t2);
        break;
      case "message":
        this.emit("data", e5.data), this.emit("message", e5.data);
    }
  else
    Dn('packet received with socket readyState "%s"', this.readyState);
}, Bn.prototype.onHandshake = function(e5) {
  this.emit("handshake", e5), this.id = e5.sid, this.transport.query.sid = e5.sid, this.upgrades = this.filterUpgrades(e5.upgrades), this.pingInterval = e5.pingInterval, this.pingTimeout = e5.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
}, Bn.prototype.onHeartbeat = function(e5) {
  clearTimeout(this.pingTimeoutTimer);
  var t2 = this;
  t2.pingTimeoutTimer = setTimeout(function() {
    "closed" !== t2.readyState && t2.onClose("ping timeout");
  }, e5 || t2.pingInterval + t2.pingTimeout);
}, Bn.prototype.setPing = function() {
  var e5 = this;
  clearTimeout(e5.pingIntervalTimer), e5.pingIntervalTimer = setTimeout(function() {
    Dn("writing ping packet - expecting pong within %sms", e5.pingTimeout), e5.ping(), e5.onHeartbeat(e5.pingTimeout);
  }, e5.pingInterval);
}, Bn.prototype.ping = function() {
  var e5 = this;
  this.sendPacket("ping", function() {
    e5.emit("ping");
  });
}, Bn.prototype.onDrain = function() {
  this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
}, Bn.prototype.flush = function() {
  "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (Dn("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
}, Bn.prototype.write = Bn.prototype.send = function(e5, t2, s2) {
  return this.sendPacket("message", e5, t2, s2), this;
}, Bn.prototype.sendPacket = function(e5, t2, s2, i2) {
  if ("function" == typeof t2 && (i2 = t2, t2 = void 0), "function" == typeof s2 && (i2 = s2, s2 = null), "closing" !== this.readyState && "closed" !== this.readyState) {
    (s2 = s2 || {}).compress = false !== s2.compress;
    var n2 = { type: e5, data: t2, options: s2 };
    this.emit("packetCreate", n2), this.writeBuffer.push(n2), i2 && this.once("flush", i2), this.flush();
  }
}, Bn.prototype.close = function() {
  if ("opening" === this.readyState || "open" === this.readyState) {
    this.readyState = "closing";
    var e5 = this;
    this.writeBuffer.length ? this.once("drain", function() {
      this.upgrading ? i2() : t2();
    }) : this.upgrading ? i2() : t2();
  }
  function t2() {
    e5.onClose("forced close"), Dn("socket closing - telling transport to close"), e5.transport.close();
  }
  function s2() {
    e5.removeListener("upgrade", s2), e5.removeListener("upgradeError", s2), t2();
  }
  function i2() {
    e5.once("upgrade", s2), e5.once("upgradeError", s2);
  }
  return this;
}, Bn.prototype.onError = function(e5) {
  Dn("socket error %j", e5), Bn.priorWebsocketSuccess = false, this.emit("error", e5), this.onClose("transport error", e5);
}, Bn.prototype.onClose = function(e5, t2) {
  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
    Dn('socket close with reason: "%s"', e5);
    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e5, t2), this.writeBuffer = [], this.prevBufferLen = 0;
  }
}, Bn.prototype.filterUpgrades = function(e5) {
  for (var t2 = [], s2 = 0, i2 = e5.length; s2 < i2; s2++)
    ~xn(this.transports, e5[s2]) && t2.push(e5[s2]);
  return t2;
}, oi.exports = Ln, oi.exports.parser = ai;
var qn = { exports: {} };
var jn = function(e5, t2) {
  for (var s2 = [], i2 = (t2 = t2 || 0) || 0; i2 < e5.length; i2++)
    s2[i2 - t2] = e5[i2];
  return s2;
};
var Vn = function(e5, t2, s2) {
  return e5.on(t2, s2), { destroy: function() {
    e5.removeListener(t2, s2);
  } };
};
var Hn = [].slice;
var zn = function(e5, t2) {
  if ("string" == typeof t2 && (t2 = e5[t2]), "function" != typeof t2)
    throw new Error("bind() requires a function");
  var s2 = Hn.call(arguments, 2);
  return function() {
    return t2.apply(e5, s2.concat(Hn.call(arguments)));
  };
};
!function(e5, t2) {
  var s2 = si, i2 = w.exports, n2 = jn, o2 = Vn, r2 = zn, a2 = (Hs.exports("socket.io-client:socket"), Li), c2 = pi;
  e5.exports = d2;
  var u2 = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 }, l2 = i2.prototype.emit;
  function d2(e6, t3, s3) {
    this.io = e6, this.nsp = t3, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = false, this.disconnected = true, this.flags = {}, s3 && s3.query && (this.query = s3.query), this.io.autoConnect && this.open();
  }
  i2(d2.prototype), d2.prototype.subEvents = function() {
    if (!this.subs) {
      var e6 = this.io;
      this.subs = [o2(e6, "open", r2(this, "onopen")), o2(e6, "packet", r2(this, "onpacket")), o2(e6, "close", r2(this, "onclose"))];
    }
  }, d2.prototype.open = d2.prototype.connect = function() {
    return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this;
  }, d2.prototype.send = function() {
    var e6 = n2(arguments);
    return e6.unshift("message"), this.emit.apply(this, e6), this;
  }, d2.prototype.emit = function(e6) {
    if (u2.hasOwnProperty(e6))
      return l2.apply(this, arguments), this;
    var t3 = n2(arguments), i3 = { type: (void 0 !== this.flags.binary ? this.flags.binary : c2(t3)) ? s2.BINARY_EVENT : s2.EVENT, data: t3, options: {} };
    return i3.options.compress = !this.flags || false !== this.flags.compress, "function" == typeof t3[t3.length - 1] && (this.ids, this.acks[this.ids] = t3.pop(), i3.id = this.ids++), this.connected ? this.packet(i3) : this.sendBuffer.push(i3), this.flags = {}, this;
  }, d2.prototype.packet = function(e6) {
    e6.nsp = this.nsp, this.io.packet(e6);
  }, d2.prototype.onopen = function() {
    if ("/" !== this.nsp)
      if (this.query) {
        var e6 = "object" == typeof this.query ? a2.encode(this.query) : this.query;
        this.packet({ type: s2.CONNECT, query: e6 });
      } else
        this.packet({ type: s2.CONNECT });
  }, d2.prototype.onclose = function(e6) {
    this.connected = false, this.disconnected = true, delete this.id, this.emit("disconnect", e6);
  }, d2.prototype.onpacket = function(e6) {
    var t3 = e6.nsp === this.nsp, i3 = e6.type === s2.ERROR && "/" === e6.nsp;
    if (t3 || i3)
      switch (e6.type) {
        case s2.CONNECT:
          this.onconnect();
          break;
        case s2.EVENT:
        case s2.BINARY_EVENT:
          this.onevent(e6);
          break;
        case s2.ACK:
        case s2.BINARY_ACK:
          this.onack(e6);
          break;
        case s2.DISCONNECT:
          this.ondisconnect();
          break;
        case s2.ERROR:
          this.emit("error", e6.data);
      }
  }, d2.prototype.onevent = function(e6) {
    var t3 = e6.data || [];
    null != e6.id && t3.push(this.ack(e6.id)), this.connected ? l2.apply(this, t3) : this.receiveBuffer.push(t3);
  }, d2.prototype.ack = function(e6) {
    var t3 = this, i3 = false;
    return function() {
      if (!i3) {
        i3 = true;
        var o3 = n2(arguments);
        t3.packet({ type: c2(o3) ? s2.BINARY_ACK : s2.ACK, id: e6, data: o3 });
      }
    };
  }, d2.prototype.onack = function(e6) {
    var t3 = this.acks[e6.id];
    "function" == typeof t3 ? (e6.id, e6.data, t3.apply(this, e6.data), delete this.acks[e6.id]) : e6.id;
  }, d2.prototype.onconnect = function() {
    this.connected = true, this.disconnected = false, this.emit("connect"), this.emitBuffered();
  }, d2.prototype.emitBuffered = function() {
    var e6;
    for (e6 = 0; e6 < this.receiveBuffer.length; e6++)
      l2.apply(this, this.receiveBuffer[e6]);
    for (this.receiveBuffer = [], e6 = 0; e6 < this.sendBuffer.length; e6++)
      this.packet(this.sendBuffer[e6]);
    this.sendBuffer = [];
  }, d2.prototype.ondisconnect = function() {
    this.nsp, this.destroy(), this.onclose("io server disconnect");
  }, d2.prototype.destroy = function() {
    if (this.subs) {
      for (var e6 = 0; e6 < this.subs.length; e6++)
        this.subs[e6].destroy();
      this.subs = null;
    }
    this.io.destroy(this);
  }, d2.prototype.close = d2.prototype.disconnect = function() {
    return this.connected && (this.nsp, this.packet({ type: s2.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }, d2.prototype.compress = function(e6) {
    return this.flags.compress = e6, this;
  }, d2.prototype.binary = function(e6) {
    return this.flags.binary = e6, this;
  };
}(qn);
var Wn = Jn;
function Jn(e5) {
  e5 = e5 || {}, this.ms = e5.min || 100, this.max = e5.max || 1e4, this.factor = e5.factor || 2, this.jitter = e5.jitter > 0 && e5.jitter <= 1 ? e5.jitter : 0, this.attempts = 0;
}
Jn.prototype.duration = function() {
  var e5 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t2 = Math.random(), s2 = Math.floor(t2 * this.jitter * e5);
    e5 = 0 == (1 & Math.floor(10 * t2)) ? e5 - s2 : e5 + s2;
  }
  return 0 | Math.min(e5, this.max);
}, Jn.prototype.reset = function() {
  this.attempts = 0;
}, Jn.prototype.setMin = function(e5) {
  this.ms = e5;
}, Jn.prototype.setMax = function(e5) {
  this.max = e5;
}, Jn.prototype.setJitter = function(e5) {
  this.jitter = e5;
};
var Xn = class {
  static init(e5, t2, s2) {
    this.host = e5, (void 0 !== t2 && false === t2 || true === s2) && (this.https = false);
  }
  static isMP() {
    return [l.MP_WX, l.MP_ALI, l.MP_BYTE, l.MP_WGAME, l.MP_BAIDU].includes(d.currentPlatform());
  }
  static uri() {
    let e5 = "http";
    return this.https && (e5 += "s"), e5 + "://" + this.index() + this.host;
  }
  static index() {
    return 0 == this.i ? this.i = Math.floor(Math.random() * this.max) + 1 : this.i = this.i % this.max + 1, this.i;
  }
};
Xn.i = 0, Xn.max = 5, Xn.https = true;
var $n = M(Object.freeze({ __proto__: null, URIResolver: Xn }));
var Yn = M(E);
var Qn = oi.exports;
var Kn = qn.exports;
var Zn = w.exports;
var eo = si;
var to = Vn;
var so = zn;
var io = (Hs.exports("socket.io-client:manager"), On);
var no = Wn;
var { URIResolver: oo } = $n;
var ro = Yn.runStatus;
var ao = Object.prototype.hasOwnProperty;
var co = uo;
function uo(e5, t2) {
  if (!(this instanceof uo))
    return new uo(e5, t2);
  e5 && "object" == typeof e5 && (t2 = e5, e5 = void 0), (t2 = t2 || {}).path = t2.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t2, this.reconnection(false !== t2.reconnection), this.reconnectionAttempts(t2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t2.reconnectionDelay || 1e3), this.reconnectionDelayMax(t2.reconnectionDelayMax || 5e3), this.randomizationFactor(t2.randomizationFactor || 0.5), this.backoff = new no({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == t2.timeout ? 2e4 : t2.timeout), this.readyState = "closed", this.uri = e5, this.connecting = [], this.lastPing = null, this.encoding = false, this.packetBuffer = [];
  var s2 = t2.parser || eo;
  this.encoder = new s2.Encoder(), this.decoder = new s2.Decoder(), this.autoConnect = false !== t2.autoConnect, this.autoConnect && this.open();
}
uo.prototype.emitAll = function() {
  for (var e5 in this.emit.apply(this, arguments), this.nsps)
    ao.call(this.nsps, e5) && this.nsps[e5].emit.apply(this.nsps[e5], arguments);
}, uo.prototype.updateSocketIds = function() {
  for (var e5 in this.nsps)
    ao.call(this.nsps, e5) && (this.nsps[e5].id = this.generateId(e5));
}, uo.prototype.generateId = function(e5) {
  return ("/" === e5 ? "" : e5 + "#") + this.engine.id;
}, Zn(uo.prototype), uo.prototype.reconnection = function(e5) {
  return arguments.length ? (this._reconnection = !!e5, this) : this._reconnection;
}, uo.prototype.reconnectionAttempts = function(e5) {
  return arguments.length ? (this._reconnectionAttempts = e5, this) : this._reconnectionAttempts;
}, uo.prototype.reconnectionDelay = function(e5) {
  return arguments.length ? (this._reconnectionDelay = e5, this.backoff && this.backoff.setMin(e5), this) : this._reconnectionDelay;
}, uo.prototype.randomizationFactor = function(e5) {
  return arguments.length ? (this._randomizationFactor = e5, this.backoff && this.backoff.setJitter(e5), this) : this._randomizationFactor;
}, uo.prototype.reconnectionDelayMax = function(e5) {
  return arguments.length ? (this._reconnectionDelayMax = e5, this.backoff && this.backoff.setMax(e5), this) : this._reconnectionDelayMax;
}, uo.prototype.timeout = function(e5) {
  return arguments.length ? (this._timeout = e5, this) : this._timeout;
}, uo.prototype.maybeReconnectOnOpen = function() {
  !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
}, uo.prototype.open = uo.prototype.connect = function(e5, t2) {
  if (this.readyState, ~this.readyState.indexOf("open"))
    return this;
  this.uri, this.engine = Qn(this.uri, this.opts);
  var s2 = this.engine, i2 = this;
  this.readyState = "opening", this.skipReconnect = false;
  var n2 = to(s2, "open", function() {
    i2.onopen(), e5 && e5();
  }), o2 = to(s2, "error", async function(t3) {
    if (i2.uri = oo.uri(), i2.cleanup(), i2.readyState = "closed", i2.emitAll("connect_error", t3), e5) {
      var s3 = new Error("Connection error");
      s3.data = t3, e5(s3);
    } else
      i2.maybeReconnectOnOpen();
  });
  if (false !== this._timeout) {
    var r2 = this._timeout, a2 = setTimeout(function() {
      n2.destroy(), s2.close(), s2.emit("error", "timeout"), i2.emitAll("connect_timeout", r2);
    }, r2);
    this.subs.push({ destroy: function() {
      clearTimeout(a2);
    } });
  }
  return this.subs.push(n2), this.subs.push(o2), this;
}, uo.prototype.onopen = function() {
  this.cleanup(), this.readyState = "open", this.emit("open");
  var e5 = this.engine;
  this.subs.push(to(e5, "data", so(this, "ondata"))), this.subs.push(to(e5, "ping", so(this, "onping"))), this.subs.push(to(e5, "pong", so(this, "onpong"))), this.subs.push(to(e5, "error", so(this, "onerror"))), this.subs.push(to(e5, "close", so(this, "onclose"))), this.subs.push(to(this.decoder, "decoded", so(this, "ondecoded")));
}, uo.prototype.onping = function() {
  this.lastPing = /* @__PURE__ */ new Date(), this.emitAll("ping");
}, uo.prototype.onpong = function() {
  this.emitAll("pong", /* @__PURE__ */ new Date() - this.lastPing);
}, uo.prototype.ondata = function(e5) {
  this.decoder.add(e5);
}, uo.prototype.ondecoded = function(e5) {
  this.emit("packet", e5);
}, uo.prototype.onerror = function(e5) {
  this.emitAll("error", e5);
}, uo.prototype.socket = function(e5, t2) {
  var s2 = this.nsps[e5];
  if (!s2) {
    s2 = new Kn(this, e5, t2), this.nsps[e5] = s2;
    var i2 = this;
    s2.on("connecting", n2), s2.on("connect", function() {
      s2.id = i2.generateId(e5);
    }), this.autoConnect && n2();
  }
  function n2() {
    ~io(i2.connecting, s2) || i2.connecting.push(s2);
  }
  return s2;
}, uo.prototype.destroy = function(e5) {
  var t2 = io(this.connecting, e5);
  ~t2 && this.connecting.splice(t2, 1), this.connecting.length || this.close();
}, uo.prototype.packet = function(e5) {
  var t2 = this;
  e5.query && 0 === e5.type && (e5.nsp += "?" + e5.query), t2.encoding ? t2.packetBuffer.push(e5) : (t2.encoding = true, this.encoder.encode(e5, function(s2) {
    for (var i2 = 0; i2 < s2.length; i2++)
      t2.engine.write(s2[i2], e5.options);
    t2.encoding = false, t2.processPacketQueue();
  }));
}, uo.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var e5 = this.packetBuffer.shift();
    this.packet(e5);
  }
}, uo.prototype.cleanup = function() {
  for (var e5 = this.subs.length, t2 = 0; t2 < e5; t2++) {
    this.subs.shift().destroy();
  }
  this.packetBuffer = [], this.encoding = false, this.lastPing = null, this.decoder.destroy();
}, uo.prototype.close = uo.prototype.disconnect = function() {
  this.skipReconnect = true, this.reconnecting = false, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
}, uo.prototype.onclose = function(e5) {
  this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e5), this._reconnection && !this.skipReconnect && this.reconnect();
}, uo.prototype.reconnect = function() {
  if (ro.isBackend(), this.reconnecting || this.skipReconnect)
    return this;
  var e5 = this;
  if (this.backoff.attempts >= this._reconnectionAttempts)
    this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = false;
  else {
    var t2 = this.backoff.duration();
    this.reconnecting = true;
    var s2 = setTimeout(function() {
      if (ro.isBackend())
        return e5.reconnecting = false, e5.reconnect(), void e5.emitAll("reconnect_error", "Uniapp running backend, skipped reconnect...");
      e5.skipReconnect || (e5.emitAll("reconnect_attempt", e5.backoff.attempts), e5.emitAll("reconnecting", e5.backoff.attempts), e5.skipReconnect || e5.open(function(t3) {
        t3 ? (e5.reconnecting = false, e5.reconnect(), e5.emitAll("reconnect_error", t3.data)) : e5.onreconnect();
      }));
    }, t2);
    this.subs.push({ destroy: function() {
      clearTimeout(s2);
    } });
  }
}, uo.prototype.onreconnect = function() {
  var e5 = this.backoff.attempts;
  this.reconnecting = false, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e5);
}, function(e5, t2) {
  var s2 = ti, i2 = si, n2 = co;
  Hs.exports("socket.io-client");
  e5.exports = t2 = r2;
  var o2 = t2.managers = {};
  function r2(e6, t3) {
    "object" == typeof e6 && (t3 = e6, e6 = void 0), t3 = t3 || {};
    var i3, r3 = s2(e6), a2 = r3.source, c2 = r3.id, u2 = r3.path, l2 = o2[c2] && u2 in o2[c2].nsps;
    return t3.forceNew || t3["force new connection"] || false === t3.multiplex || l2 ? i3 = n2(a2, t3) : (o2[c2] || (o2[c2] = n2(a2, t3)), i3 = o2[c2]), r3.query && !t3.query && (t3.query = r3.query), i3.socket(r3.path, t3);
  }
  t2.protocol = i2.protocol, t2.connect = r2, t2.Manager = co, t2.Socket = qn.exports;
}(Bs, Bs.exports);
var lo = Bs.exports;
var ho = class {
  constructor() {
    this.io = lo, this.status = t.DISCONNECTED, this.permissions = [ne.NONE], this.connectedObservers = [], this.disconnectedObservers = [];
  }
  connect() {
    this.status = t.CONNECTING;
  }
  socketio() {
    return this.io;
  }
  on(e5, t2) {
    this.io.on(e5, t2);
  }
  disconnect() {
    this.io.disconnect();
  }
  getStatus() {
    return this.status;
  }
  addConnectedObserver(e5) {
    u.isFunction(e5) && this.connectedObservers.push(e5);
  }
  addDisconnectedObserver(e5) {
    u.isFunction(e5) && this.disconnectedObservers.push(e5);
  }
  notify(e5, t2) {
    for (let s2 = 0; s2 < e5.length; s2++)
      e5[s2](t2);
  }
};
var po = class extends ho {
  constructor(e5) {
    super(), this.reconnectingObservers = [], this.addReconnectingObserver(e5.onReconnecting), this.addDisconnectedObserver(e5.onDisconnected);
  }
  connect(e5) {
    super.connect(), this.io = this.io.connect(e5.uri, e5.opts), this.initListener();
  }
  initListener() {
    this.io.on("connect", () => {
      this.status = t.CONNECTED, this.notify(this.connectedObservers);
    }), this.io.on("reconnecting", (e5) => {
      this.status = t.CONNECTING, this.notify(this.reconnectingObservers, e5);
    }), this.io.on("disconnect", () => {
      this.status = t.DISCONNECTED, this.notify(this.disconnectedObservers);
    }), this.io.on("connect_error", function(e5) {
    });
  }
  addReconnectingObserver(e5) {
    this.reconnectingObservers.push(e5);
  }
};
var mo = class _mo {
  static get(e5) {
    const t2 = encodeURIComponent(e5) + "=", s2 = document.cookie.split("; ");
    for (const e6 of s2)
      if (e6.startsWith(t2))
        return decodeURIComponent(e6.substring(t2.length));
    return null;
  }
  static set(e5, t2, s2, i2, n2 = "/", o2 = false) {
    let r2 = encodeURIComponent(e5) + "=" + encodeURIComponent(t2);
    s2 instanceof Date && (r2 += "; expires=" + s2.toGMTString()), n2 && (r2 += "; path=" + n2), i2 && (r2 += "; domain=" + i2), o2 && (r2 += "; secure"), document.cookie = r2;
  }
  static remove(e5, t2, s2 = "/", i2 = false) {
    _mo.set(e5, "", /* @__PURE__ */ new Date(0), t2, s2, i2);
  }
};
var fo = class {
  asyncGet(e5) {
    let t2 = this.get(e5);
    return Promise.resolve(t2);
  }
  asyncPut(e5, t2) {
    return this.put(e5, t2), Promise.resolve();
  }
  get(e5) {
    let t2 = this.doGet(e5);
    return t2 = JSON.parse(t2), t2;
  }
  put(e5, t2) {
    this.doPut(e5, JSON.stringify(t2));
  }
};
var go = class extends fo {
  constructor() {
    super(), this.domain = null;
    this.domain = "undefined" != typeof location && /^(?:[A-za-z0-9-]+\.)+[A-za-z]{2,4}(?:[\/\?#][\/=\?%\-&~`@[\]\':+!\.#\w]*)?$/.test(location.host) ? location.host.split(".").slice(-2).join(".") : null;
  }
  doGet(e5) {
    return mo.get(e5) || null;
  }
  doPut(e5, t2) {
    const s2 = new Date(2030, 12, 31, 0, 0, 0, 0), i2 = this.domain;
    mo.set(e5, t2, s2, i2);
  }
  remove(e5) {
    const t2 = this.domain;
    mo.remove(e5, t2);
  }
  support() {
    return "undefined" != typeof navigator && true === navigator.cookieEnabled;
  }
};
var yo = class extends fo {
  doGet(e5) {
    return localStorage.getItem(e5) || null;
  }
  doPut(e5, t2) {
    localStorage.setItem(e5, t2);
  }
  remove(e5) {
    localStorage.removeItem(e5);
  }
  support() {
    return !("undefined" != typeof GameGlobal || "undefined" == typeof localStorage || !localStorage.setItem);
  }
};
var So = class extends fo {
  doGet(e5) {
    return uni.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    uni.setStorageSync(e5, t2);
  }
  remove(e5) {
    uni.removeStorageSync(e5);
  }
  support() {
    return !("object" != typeof uni || !uni.getStorageSync);
  }
};
var Eo = class extends fo {
  doGet(e5) {
    return cc.sys.localStorage.getItem(e5) || null;
  }
  doPut(e5, t2) {
    cc.sys.localStorage.setItem(e5, t2);
  }
  remove(e5) {
    cc.sys.localStorage.removeItem(e5);
  }
  support() {
    return "undefined" != typeof cc && void 0 !== cc.sys.localStorage;
  }
};
var vo = class extends fo {
  doGet(e5) {
    return wx.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    wx.setStorageSync(e5, t2);
  }
  remove(e5) {
    wx.removeStorageSync(e5);
  }
  support() {
    return !("object" != typeof wx || !wx.getStorageSync || "undefined" != typeof tt);
  }
};
var bo = class extends fo {
  asyncGet(e5) {
    return b(this, void 0, void 0, function* () {
      const t2 = yield i.asyncStorage.getItem(e5);
      return JSON.parse(t2);
    });
  }
  asyncPut(e5, t2) {
    return i.asyncStorage.setItem(e5, JSON.stringify(t2));
  }
  doPut(e5, t2) {
    throw new Error("Method not implemented.");
  }
  remove(e5) {
    i.asyncStorage.removeItem(e5);
  }
  support() {
    return s.currentFramework() === e.REACT_NATIVE;
  }
  doGet(e5) {
    throw new Error("Method not implemented.");
  }
};
var Co = class extends fo {
  doGet(e5) {
    const t2 = my.getStorageSync({ key: e5 }).data || null;
    return "string" == typeof JSON.parse(t2) ? JSON.parse(t2) : t2;
  }
  doPut(e5, t2) {
    my.setStorageSync({ key: e5, data: JSON.stringify(t2) });
  }
  remove(e5) {
    my.removeStorageSync({ key: e5 });
  }
  support() {
    return !("undefined" == typeof my || !my.getStorageSync);
  }
};
var Mo = class extends fo {
  doGet(e5) {
    return tt.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    tt.setStorageSync(e5, t2);
  }
  remove(e5) {
    tt.removeStorageSync(e5);
  }
  support() {
    return !("object" != typeof tt || !tt.getStorageSync);
  }
};
var wo = class extends fo {
  doGet(e5) {
    return swan.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    swan.setStorageSync(e5, t2);
  }
  remove(e5) {
    swan.removeStorageSync(e5);
  }
  support() {
    return !("undefined" == typeof swan || !swan.getStorageSync);
  }
};
var Io = class _Io {
  constructor() {
    this.supportedStorage = null;
    const e5 = _Io.storages;
    e5.push(new So()), e5.push(new Eo()), e5.push(new yo()), e5.push(new vo()), e5.push(new bo()), e5.push(new Co()), e5.push(new wo()), e5.push(new Mo()), e5.push(new go()), this.dispatch(), this.supportedStorage;
  }
  static localStorage() {
    return this.instance.supportedStorage;
  }
  dispatch() {
    for (let e5 of _Io.storages)
      if (e5.support()) {
        this.supportedStorage = e5;
        break;
      }
  }
};
Io.storages = new Array(), Io.instance = new Io();
var No = class _No {
  static get() {
    return b(this, void 0, void 0, function* () {
      let e5, t2 = Io.localStorage();
      return null !== t2 && (e5 = yield t2.asyncGet(_No.SM_KEY)), e5;
    });
  }
  static put(e5) {
    return b(this, void 0, void 0, function* () {
      var t2 = Io.localStorage();
      let s2 = e5.sm;
      null !== t2 && s2 && t2.asyncPut(_No.SM_KEY, s2);
    });
  }
};
No.SM_KEY = "GE-SM";
var To = class {
  static e(e5, t2) {
    function s2(e6) {
      return function(e7) {
        return e7 >= 32 && e7 <= 126;
      }(e6) ? String.fromCharCode(function(e7) {
        let s3 = e7 + t2;
        return s3 > 126 ? s3 - 126 + 32 : s3;
      }(e6)) : String.fromCharCode(e6);
    }
    let i2 = "";
    for (let t3 = 0; t3 < e5.length; t3++) {
      i2 += s2(e5.charCodeAt(t3));
    }
    return i2;
  }
};
var Ro = class {
  static initRNUniqueId() {
    if (s.currentFramework() === e.REACT_NATIVE) {
      let e5 = i.platform, t2 = e5.constants, s2 = { os: e5.OS };
      return "android" === s2.os ? s2.f = t2.Fingerprint : s2.v = e5.Version, JSON.stringify(s2);
    }
    return null;
  }
  static initPlusDeviceId() {
    return new Promise((e5, t2) => {
      "undefined" != typeof plus ? plus.device.getInfo({ success: (t3) => {
        e5(t3.uuid);
      }, fail: (e6) => {
        t2(e6);
      } }) : e5(null);
    });
  }
  static getVideoCard() {
    var e5;
    if (d.currentPlatform() === l.BROWSER && "undefined" != typeof document) {
      const t2 = document.createElement("canvas"), s2 = null !== (e5 = t2.getContext("webgl")) && void 0 !== e5 ? e5 : t2.getContext("experimental-webgl");
      if (s2 && "getExtension" in s2) {
        let e6 = 0, t3 = 0;
        if (navigator.userAgent.indexOf("Firefox") > -1)
          t3 = s2.VENDOR, e6 = s2.RENDERER;
        else {
          let i3 = s2.getExtension("WEBGL_debug_renderer_info");
          if (!i3)
            return null;
          t3 = i3.UNMASKED_VENDOR_WEBGL, e6 = i3.UNMASKED_RENDERER_WEBGL;
        }
        const i2 = { vendor: (s2.getParameter(t3) || "").toString(), renderer: (s2.getParameter(e6) || "").toString() };
        return JSON.stringify(i2);
      }
    }
    return null;
  }
  static z() {
    return b(this, void 0, void 0, function* () {
      const e5 = { p: d.currentPlatform(), f: s.currentFramework(), vc: this.getVideoCard(), rfp: this.initRNUniqueId() };
      return To.e(JSON.stringify(e5), 5);
    });
  }
};
var Ao = class {
  constructor(e5) {
    this.rocketsBuffer = /* @__PURE__ */ new Set(), this.socket = e5, this.socket.addConnectedObserver(this.onSocketConnected.bind(this));
  }
  emit(e5) {
    this.socket.status !== t.DISCONNECTED ? (e5.start(), this.doEmit(e5)) : e5.fail({ resultCode: "409", content: "Please connect first" });
  }
  doEmit(e5) {
    if (!e5.complete)
      if (this.socket.status !== t.CONNECT_FAILED)
        if (this.isConnected())
          if (this.hasPermission(e5)) {
            let t2 = setTimeout(() => {
              this.doEmit(e5);
            }, e5.singleTimeout);
            e5.unique && (e5.params.retried = e5.retried), this.socket.socketio().emit(e5.name, e5.params, (s2) => {
              clearTimeout(t2), 200 === s2.resultCode || 200 == s2.code ? e5.success(s2) : e5.fail(s2);
            }), e5.retried++;
          } else
            e5.fail({ resultCode: 401, content: "No permission" });
        else
          this.isConnecting() && this.rocketsBuffer.add(e5);
      else
        e5.fail({ resultCode: 408, content: "Failed to connect GoEasy." });
  }
  hasPermission(e5) {
    return !!this.socket.permissions.find((t2) => t2 === e5.permission);
  }
  isConnected() {
    return [t.CONNECTED, t.RECONNECTED, t.EXPIRED_RECONNECTED, t.DISCONNECTING].includes(this.socket.status);
  }
  isConnecting() {
    return [t.CONNECTING, t.RECONNECTING].includes(this.socket.status);
  }
  onSocketConnected() {
    this.emitBuffer();
  }
  emitBuffer() {
    Array.from(this.rocketsBuffer).forEach((e5) => {
      this.rocketsBuffer.delete(e5), this.doEmit(e5);
    });
  }
};
var ko = class _ko extends Q {
  static init() {
    _ko.i = new _ko();
  }
  static fire(e5, t2) {
    this.i.fire(e5, t2);
  }
  static on(e5, t2) {
    this.i.on(e5, t2);
  }
  static off(e5, t2) {
    this.i.off(e5, t2);
  }
};
var Oo = class extends ho {
  constructor(e5, t2) {
    super(), this.ioSocket = null, this.sid = null, this.anonymous = false, this.userId = null, this.artifactVersion = n, this.vname = null, this.uri = null, this.ioOpts = null, this.reconnectingTimes = 0, this.messageObservers = /* @__PURE__ */ new Map(), this.connectFailedObservers = [], this.connectingObservers = [], this.expiredReconnectedObservers = [], this.options = e5, this.ioSocket = new po({ onDisconnected: this.onIoDisconnected.bind(this), onReconnecting: this.onIoReconnecting.bind(this) }), this.ioSocketEmitter = new Ao(this.ioSocket), this.ioSocket.addConnectedObserver(this.onIoReconnected.bind(this)), this.initOptions(t2), this.connect();
  }
  initUserId() {
    let e5 = this.connectOptions.id;
    u.isEmpty(e5) ? this.anonymous = true : this.userId = e5.toString();
  }
  socketio() {
    return this.ioSocket.socketio();
  }
  extendOptions() {
    let e5 = this.connectOptions;
    if (u.isNull(e5.data) || u.isDef(e5.data) && !u.isObject(e5.data))
      throw { code: 400, content: "TypeError: data requires an object." };
    if ((u.isDef(e5.data) ? String(e5.data).length : 0) > 300 && u.isObject(e5) && u.isFunction(e5.onFailed))
      throw { code: 400, content: "user.data-length limit 300 byte." };
    if (u.isObject(e5.wxmpId)) {
      if (u.isEmpty(e5.wxmpId.appid))
        throw { code: 400, content: "wxmpId.appid is required." };
      if (u.isEmpty(e5.wxmpId.openid))
        throw { code: 400, content: "wxmpId.openid is required. requires string." };
    } else if (u.isPrimitive(e5.wxmpId))
      throw { code: 400, content: "TypeError: wxmpId requires an object." };
  }
  initUriAndOpts() {
    let e5 = this.options;
    Xn.init(e5.host, e5.forceTLS, e5.supportOldBrowser), this.uri = Xn.uri();
    let t2 = ["websocket"];
    true === e5.supportOldBrowser && t2.push("polling"), this.ioOpts = { transports: t2, timeout: S.connect, reconnectionDelayMax: S.reconnectionDelayMax };
  }
  onIoReconnected() {
    this.status === t.RECONNECTING && this.authorize();
  }
  sendAck(e5, t2) {
    this.ioSocket.io.emit(e5, t2);
  }
  initOptions(e5) {
    this.connectOptions = e5, this.addConnectedObserver(e5.onSuccess), this.addConnectFailedObserver(e5.onFailed), this.addConnectingObserver(e5.onProgress), this.initUserId();
  }
  connect() {
    this.initUriAndOpts(), this.extendOptions(), super.connect(), this.onConnecting(), this.ioSocket.connect({ uri: this.uri, opts: this.ioOpts }), this.authorize();
  }
  disconnect() {
    return new Promise((e5, s2) => {
      this.status = t.DISCONNECTING;
      let i2 = () => {
        this.ioSocket.disconnect(), this.status = t.DISCONNECTED, ko.fire(Ft.DISCONNECTED), e5();
      };
      const n2 = X.modules.get("GN");
      if (n2 && (n2.params.regId || this.connectOptions.wxmpId)) {
        let e6 = (e7) => {
          s2(e7);
        }, t2 = new le({ name: y.manualDisconnect, params: {}, permission: ne.READ, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: e6, success: i2 });
        te.Socket.e(t2);
      } else
        i2();
    });
  }
  authorize() {
    return b(this, void 0, void 0, function* () {
      let e5 = this.connectOptions, t2 = { appkey: this.options.appkey, userId: this.userId, userData: JSON.stringify(e5.data), otp: e5.otp, artifactVersion: this.artifactVersion, sid: this.sid, mP: yield X.getParams(), a: this.anonymous, z: yield Ro.z(), sm: yield No.get(), c: { n: this.vname, v: this.artifactVersion } };
      JSON.stringify(t2);
      let s2 = new le({ name: y.authorize, params: t2, permission: ne.NONE, singleTimeout: S.commonInfiniteSingle, totalTimeout: S.commonInfiniteTotal, success: (e6) => {
        this.onAuthorizeSuccess(e6);
      }, fail: (e6) => {
        this.onAuthorizeFailed(e6);
      } });
      this.ioSocketEmitter.emit(s2);
    });
  }
  onConnecting() {
    ko.fire(Ft.CONNECTING, this.reconnectingTimes), this.notify(this.connectingObservers, this.reconnectingTimes);
  }
  onIoReconnecting() {
    this.reconnectingTimes++, this.status == t.CONNECTED || this.status == t.EXPIRED_RECONNECTED || this.status == t.RECONNECTING ? this.status = t.RECONNECTING : this.status = t.CONNECTING, this.onConnecting();
  }
  onIoDisconnected() {
    this.status !== t.DISCONNECTING && (this.status = t.RECONNECTING, ko.fire(Ft.LOST), this.notify(this.disconnectedObservers));
  }
  onAuthorizeSuccess(e5) {
    if (No.put(e5), X.setDatas(e5.mD), this.status === t.RECONNECTING) {
      this.sid !== e5.sid ? (this.status = t.EXPIRED_RECONNECTED, this.sid = e5.sid, ko.fire(Ft.EXPIRED_RECONNECTED), this.notify(this.expiredReconnectedObservers)) : (this.status = t.RECONNECTED, ko.fire(Ft.RECONNECTED));
    } else
      this.status = t.CONNECTED, this.sid = e5.sid;
    e5.enablePublish && (this.permissions.find((e6) => e6 == ne.WRITE) || this.permissions.push(ne.WRITE)), e5.enableSubscribe && (this.permissions.find((e6) => e6 == ne.READ) || this.permissions.push(ne.READ)), this.reconnectingTimes = 0, ko.fire(Ft.CONNECTED), this.notify(this.connectedObservers);
  }
  onAuthorizeFailed(e5) {
    this.ioSocket.disconnect(), this.status = t.CONNECT_FAILED;
    let s2 = { code: e5.resultCode || 408, content: e5.content || "Host unreachable or timeout" };
    this.notify(this.connectFailedObservers, s2);
  }
  addConnectingObserver(e5) {
    u.isFunction(e5) && this.connectingObservers.push(e5);
  }
  addConnectFailedObserver(e5) {
    u.isFunction(e5) && this.connectFailedObservers.push(e5);
  }
  addExpiredReconnectedObserver(e5) {
    u.isFunction(e5) && this.expiredReconnectedObservers.push(e5);
  }
  onMessage(e5, t2) {
    this.ioSocket.io._callbacks.hasOwnProperty("$" + e5) || this.ioSocket.io.on(e5, t2);
  }
  user() {
    let e5 = this.connectOptions;
    return e5 ? { id: e5.id, data: e5.data } : null;
  }
};
var Po = class {
  constructor(e5) {
    this.guidList = [], this.socket = e5;
  }
  offMessage(e5, t2) {
    ko.off(Ft.NEW_MESSAGE + "_" + e5, t2);
  }
  onMessage(e5, t2) {
    ko.on(Ft.NEW_MESSAGE + "_" + e5, t2), this.socket.onMessage(e5, (t3) => {
      this.fire(e5, t3);
    });
  }
  fire(e5, t2) {
    let s2 = this.filter(t2);
    s2 && ko.fire(Ft.NEW_MESSAGE + "_" + e5, s2);
  }
  filter(e5) {
    if ("string" == typeof e5 && (e5 = JSON.parse(e5)), e5.i) {
      const t2 = `${e5.i}_${e5.r}`;
      if (this.guidList.findIndex((e6) => e6 === t2) > -1)
        return;
      this.guidList.unshift(t2), this.guidList.length > 300 && this.guidList.pop();
    }
    return e5;
  }
};
var _o = class __o {
  static init(e5) {
    this.i = new __o(e5);
  }
  constructor(e5) {
    this.goeasyOptions = e5;
  }
  static connect(e5, s2) {
    if (this.status() !== t.DISCONNECTED && u.isObject(e5) && u.isFunction(e5.onFailed))
      return void e5.onFailed({ code: 408, content: "It is already connected, don't try again until disconnect() is called. " });
    Tt(Ye, e5), ko.init();
    let i2 = this.i;
    X.preConnect(e5), i2.socket = new Oo(i2.goeasyOptions, e5), i2.socket.vname = s2, i2.emitter = new Ao(i2.socket), i2.messageListener = new Po(i2.socket), X.postConnect();
  }
  static e(e5) {
    this.i.emitter.emit(e5);
  }
  static sendAck(e5, t2) {
    this.i.socket.sendAck(e5, t2);
  }
  static status() {
    return this.i && this.i.socket ? this.i.socket.getStatus() : t.DISCONNECTED;
  }
  static on(e5, t2) {
    ko.on(e5, t2);
  }
  static off(e5, t2) {
    ko.off(e5, t2);
  }
  static offMessage(e5, t2) {
    this.i.messageListener.offMessage(e5, t2);
  }
  static onMessage(e5, t2) {
    this.i.messageListener.onMessage(e5, t2);
  }
  static disconnect(e5) {
    this.status() === t.CONNECTED || this.status() === t.RECONNECTED ? this.i.socket.disconnect().then(() => {
      v.onSuccess(e5);
    }).catch((t2) => {
      v.onFailed(e5, t2);
    }) : v.onFailed(e5, { code: 408, content: "Host unreachable or timeout" });
  }
  static user() {
    return this.i.socket.user();
  }
};
_o.EVENT = Ft;
var Do = class _Do {
  static getInstance() {
    return _Do.instance || (_Do.instance = new _Do()), _Do.instance;
  }
  constructor() {
    this.synchronized = true, this.onlineChanged = (e5) => {
      e5.online ? this.teamIds.add(e5.teamId) : this.teamIds.delete(e5.teamId);
    }, this.onDisconnected = () => {
      this.queryMyTeamPromise = null, this.teamIds = null;
    }, this.onConnected = () => {
      this.synchronized && (this.queryMyTeamPromise = this.queryTeams());
    }, _o.on(_o.EVENT.LOST, this.onDisconnected), _o.on(_o.EVENT.RECONNECTED, this.onConnected), _o.onMessage(Gt.CS_ONLINE_CHANGED, this.onlineChanged);
  }
  queryTeams() {
    return this.queryMyTeamPromise || (this.queryMyTeamPromise = new Promise((e5, t2) => {
      let s2 = new le({ name: y.CS_MY_TEAMS, params: {}, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: (e6) => {
        t2(e6);
      }, success: (t3) => {
        this.teamIds = new Set(t3.content), this.synchronized = true, e5(this.teamIds);
      } });
      te.Socket.e(s2);
    })), this.queryMyTeamPromise;
  }
  myTeams() {
    if (this.synchronized && this.queryMyTeamPromise)
      return this.teamIds;
    throw "please query team first.";
  }
  isOnline(e5, t2) {
    return b(this, void 0, void 0, function* () {
      yield this.queryTeams(), v.onSuccess(t2, this.teamIds.has(e5));
    });
  }
  online(e5, t2) {
    if (!u.isObject(t2.agentData) || !u.isObject(t2.teamData))
      throw { code: 400, content: "agentData and teamData require an object" };
    let s2 = new Gs(e5, t2.teamData, t2.agentData), i2 = new le({ name: y.CS_ONLINE, params: s2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e6) => {
      v.onFailed(t2, e6);
    }, success: (s3) => {
      this.teamIds.add(e5), v.onSuccess(t2), ys.i.fire(us.CS_ONLINE_SUCCESS);
    } });
    te.Socket.e(i2);
  }
  offline(e5, t2) {
    let s2 = new Fs(e5), i2 = new le({ name: y.CS_OFFLINE, params: s2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e6) => {
      v.onFailed(t2, e6);
    }, success: (s3) => {
      this.teamIds.delete(e5), v.onSuccess(t2), ys.i.fire(us.CS_OFFLINE_SUCCESS);
    } });
    te.Socket.e(i2);
  }
  agents(e5, t2) {
    let s2 = new Ls(e5), i2 = new le({ name: y.CS_AGENTS, params: s2, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: (e6) => {
      v.onFailed(t2, e6);
    }, success: (e6) => {
      e6.content.forEach((e7) => {
        e7.data = JSON.parse(e7.data);
      }), v.onSuccess(t2, e6);
    } });
    te.Socket.e(i2);
  }
};
var xo = class _xo {
  constructor(e5) {
    this.onMessageReceived = (e6) => {
      let t2 = _xo.session;
      if (e6.scene() === o.CS && t2.liveOptions) {
        let s2 = e6, i2 = t2.liveOptions.customerId;
        t2.teamId === s2.teamId && s2.customerId() === i2 && (t2.tryUpdateStatus(s2), t2.liveOptions.onNewMessage(s2));
      }
    }, this.teamId = e5, ys.i.on(us.CS_AGENT_MESSAGE_RECEIVED, this.onMessageReceived), ys.i.on(us.CS_ACCEPTED, this.onMessageReceived), ys.i.on(us.CS_ENDED, this.onMessageReceived), ys.i.on(us.CS_TRANSFER, this.onMessageReceived), _o.on(Ft.DISCONNECTED, _xo.destroy);
  }
  static live(e5, t2) {
    return b(this, void 0, void 0, function* () {
      let s2 = t2.customerId;
      Rt(s2);
      let i2 = new xs(e5, s2);
      yield Do.getInstance().queryTeams();
      let n2 = new le({ name: y.CS_LIVE_SESSION, params: i2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e6) => {
        v.onFailed(t2, e6);
      }, success: (s3) => {
        _xo.destroy(), this.session = new _xo(e5), this.session.liveOptions = t2;
        let i3 = s3.content.customerStatus;
        "ACCEPTED" === i3.status && (i3.agent.data = JSON.parse(i3.agent.data)), this.session.status = i3, this.session.liveOptions.onStatusUpdated(this.session.status), v.onSuccess(t2);
      } });
      te.Socket.e(n2);
    });
  }
  customerId() {
    return this.liveOptions.customerId;
  }
  static isMyCustomer(e5) {
    let t2 = _xo.session;
    if (t2 && t2.teamId === e5.teamId && t2.customerId() === e5.customerId()) {
      let s2 = Do.getInstance().myTeams(), i2 = t2.status.agent;
      return s2.has(e5.teamId) && (!i2 || i2.id === te.Socket.user().id);
    }
    return true;
  }
  static isMyMessage(e5) {
    let t2 = je.byIMMessage(e5);
    return e5.type === ls.TRANSFER && e5.payload.transferTo.id === te.Socket.user().id || this.isMyCustomer(t2);
  }
  static quit(e5) {
    let t2 = _xo.session;
    if (t2) {
      let s2 = t2.liveOptions.customerId;
      Rt(s2);
      let i2 = new xs(t2.teamId, s2), n2 = new le({ name: y.CS_QUIT_LIVE, params: i2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (t3) => {
        v.onFailed(e5, t3);
      }, success: (t3) => {
        _xo.destroy(), v.onSuccess(e5);
      } });
      te.Socket.e(n2);
    }
  }
  tryUpdateStatus(e5) {
    if ("FREE" !== this.status.status && this.status.sessionId > e5.sessionId)
      return;
    let t2;
    switch (e5.type) {
      case ls.ACCEPT:
        t2 = new Us(), t2.status = "ACCEPTED", t2.start = e5.payload.sessionStart, t2.sessionId = e5.sessionId, t2.agent = new c(e5.senderId, e5.senderData);
        break;
      case ls.END:
        t2 = new Us(), t2.status = "FREE";
        break;
      case ls.TRANSFER:
        t2 = new Us(), t2.status = "ACCEPTED", t2.start = e5.payload.sessionStart, t2.sessionId = e5.sessionId, t2.agent = e5.payload.transferTo;
        break;
      default:
        "FREE" === this.status.status && (t2 = new Us(), t2.status = "PENDING", t2.start = e5.timestamp, t2.sessionId = e5.sessionId);
    }
    t2 && (this.status = t2, this.liveOptions.onStatusUpdated(t2));
  }
};
xo.destroy = () => {
  let e5 = xo.session;
  e5 && (ys.i.off(us.CS_AGENT_MESSAGE_RECEIVED, e5.onMessageReceived), ys.i.off(us.CS_ACCEPTED, e5.onMessageReceived), ys.i.off(us.CS_ENDED, e5.onMessageReceived), ys.i.off(us.CS_TRANSFER, e5.onMessageReceived), _o.off(Ft.DISCONNECTED, xo.destroy), xo.session = null);
};
var Uo = class extends Ds {
  constructor(e5) {
    super(e5), this.unread = 0, this.markingAmount = 0;
  }
  loadHistory(e5, t2) {
    return b(this, void 0, void 0, function* () {
      return u.isUndef(t2) ? t2 = 10 : t2 > 30 && (t2 = 30), yield this.loadServerMessages(e5, t2);
    });
  }
  loadServerMessages(e5, t2) {
    return b(this, void 0, void 0, function* () {
      let s2 = new As(this.target.id.toString(), this.target.scene, e5, t2, this.target.teamId), i2 = yield this.remoteHistory.loadServerMessages(this.target, s2);
      return i2.userOffsets.forEach((e6) => {
        this.userOffsets.updateOffset(e6.userId, e6.offset);
      }), i2.messages;
    });
  }
  deleteMessages(e5) {
    return b(this, void 0, void 0, function* () {
      v.onFailed(e5, "Delete CS message is not supported yet");
    });
  }
  initMaxMessageAndOffsets(e5, t2) {
    t2.forEach((e6) => {
      this.userOffsets.updateOffset(e6.userId, e6.offset);
    }), (u.isUndef(this.acceptedMaxMessage) || this.acceptedMaxMessage.timestamp < e5.timestamp) && this.increaseUnreadAmount(e5), this.saveAcceptedMessage(e5);
  }
  initPendingMaxMessageAndOffsets(e5, t2) {
    t2.forEach((e6) => {
      this.userOffsets.updateOffset(e6.userId, e6.offset);
    }), this.savePendingMessage(e5);
  }
  savePendingMessage(e5) {
    this.pendingMaxMessage ? this.pendingMaxMessage.timestamp < e5.timestamp && (this.pendingMaxMessage = e5) : this.pendingMaxMessage = e5;
  }
  saveAcceptedMessage(e5) {
    this.acceptedMaxMessage ? this.acceptedMaxMessage.timestamp < e5.timestamp && (this.acceptedMaxMessage = e5) : this.acceptedMaxMessage = e5;
  }
  onMessageSending(e5) {
    this.saveAcceptedMessage(e5), ys.i.fire(us.MAX_MESSAGE_CHANGED, { message: e5, receiver: this.to });
  }
  onMessageSendSuccess(e5) {
    this.saveAcceptedMessage(e5), this.userOffsets.updateOffset(e5.senderId, e5.timestamp), this.acceptedMaxMessage === e5 && ys.i.fire(us.MAX_MESSAGE_CHANGED, { message: e5, receiver: this.to });
  }
  onMessageSendFailed(e5) {
    this.acceptedMaxMessage === e5 && ys.i.fire(us.MAX_MESSAGE_CHANGED, { message: e5, receiver: this.to });
  }
  onMessageReceived(e5) {
    xo.isMyMessage(e5) && (!e5.accepted || e5.senderId !== te.Socket.user().id && e5.type === ls.ACCEPT ? this.savePendingMessage(e5) : this.saveAcceptedMessage(e5), this.userOffsets.updateOffset(e5.senderId, e5.timestamp), this.increaseUnreadAmount(e5), ys.i.fire(us.MAX_MESSAGE_CHANGED, { message: e5, receiver: this.to }));
  }
  increaseUnreadAmount(e5) {
    if (e5.sendByCustomer() || e5.type === ls.TRANSFER && e5.senderId !== te.Socket.user().id) {
      this.userOffsets.myOffset() < e5.timestamp && e5.accepted && (this.unread += 1);
    }
  }
  markRead() {
    return b(this, void 0, void 0, function* () {
      let e5 = this.maxAcceptedMessageTime();
      xo.isMyCustomer(this.target) && this.preMark(e5) && (yield this.remoteHistory.updateServerOffsets(e5, this.target), this.postMark(e5));
    });
  }
  preMark(e5) {
    let t2 = this.userOffsets.myOffset();
    return e5 > this.userOffsets.markingTime && e5 > t2 && (this.userOffsets.markingTime = e5, this.markingAmount = this.unread, true);
  }
  postMark(e5) {
    e5 === this.userOffsets.markingTime && (this.unread -= this.markingAmount, this.markingAmount = 0, this.userOffsets.updateOffset(te.Socket.user().id, e5), ys.i.fire(us.UNREAD_AMOUNT_CHANGED, this.target));
  }
  syncMarkedMessage(e5) {
  }
  getMaxMessage(e5) {
    return e5 ? this.acceptedMaxMessage : this.pendingMaxMessage;
  }
  unreadAmount(e5) {
    return e5 ? this.unread : 0;
  }
  existsMessage(e5) {
    return this.acceptedMaxMessage && this.acceptedMaxMessage.messageId === e5.messageId || this.pendingMaxMessage && this.pendingMaxMessage.messageId === e5.messageId;
  }
  maxAcceptedMessageTime() {
    return this.acceptedMaxMessage ? this.acceptedMaxMessage.timestamp : 0;
  }
  maxTime(e5) {
    let t2 = this.getMaxMessage(e5);
    return t2 ? t2.timestamp : 0;
  }
};
var Go = class extends Ds {
  constructor(e5) {
    super(e5);
  }
  deleteMessages(e5) {
    return b(this, void 0, void 0, function* () {
      v.onFailed(e5, "Delete CS message is not supported yet");
    });
  }
};
var Fo = class _Fo {
  static init() {
    return _Fo.instance = new _Fo(), _Fo.instance;
  }
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.onMessageSending = (e5) => {
      let t2 = je.byIMMessage(e5.message), s2 = this.findOrCreateHistory(t2);
      s2.to = e5.receiver, s2.onMessageSending(e5.message);
    }, this.onMessageSendSuccess = (e5) => {
      let t2 = je.byIMMessage(e5);
      this.findHistory(t2).onMessageSendSuccess(e5);
    }, this.onMessageSendFailed = (e5) => {
      let t2 = je.byIMMessage(e5);
      this.findHistory(t2).onMessageSendFailed(e5);
    }, this.onMessageReceived = (e5) => {
      let t2 = je.byIMMessage(e5), s2 = this.findOrCreateHistory(t2);
      s2.expiredTime > 0 && (this.map.delete(t2.toString()), s2 = this.findOrCreateHistory(t2)), s2.onMessageReceived(e5);
    }, this.onRemoteMarkRead = (e5) => {
      let t2 = je.byMessageReadRemoteEvent(e5), s2 = this.findHistory(t2);
      s2 && s2.syncMarkedMessage(e5);
    }, this.onRemoteMessageDeleted = (e5) => {
      let t2 = je.byIMMessageDeletedEvent(e5), s2 = this.findHistory(t2);
      s2 && s2.syncDeletedMessage(e5.deleterId, e5.times);
    }, this.onMessageRecalled = (e5) => {
      let t2 = je.byConversationId(e5.scene, e5.conversationId), s2 = this.findHistory(t2);
      s2 && s2.recallMessages(e5);
    }, this.onDisconnected = () => {
      this.map.forEach((e5, t2) => {
        e5.expire();
      });
    }, this.onReconnected = () => {
      Ps.fire(ds.HISTORY_EXPIRED);
    }, this.destroy = () => {
    }, this.initialListeners();
  }
  initialListeners() {
    ys.i.on(us.MESSAGE_SENDING, this.onMessageSending), ys.i.on(us.MESSAGE_SEND_SUCCESS, this.onMessageSendSuccess), ys.i.on(us.MESSAGE_SEND_FAILED, this.onMessageSendFailed), ys.i.on(us.MESSAGE_RECEIVED, this.onMessageReceived), ys.i.on(us.CS_AGENT_MESSAGE_RECEIVED, this.onMessageReceived), ys.i.on(us.CS_ACCEPTED, this.onMessageReceived), ys.i.on(us.CS_ENDED, this.onMessageReceived), ys.i.on(us.CS_TRANSFER, this.onMessageReceived), ys.i.on(us.MESSAGE_RECALLED, this.onMessageRecalled), _o.onMessage(Gt.IM_MSG_READ, this.onRemoteMarkRead), _o.onMessage(Gt.IM_MSG_DELETED, this.onRemoteMessageDeleted), _o.on(_o.EVENT.LOST, this.onDisconnected), _o.on(_o.EVENT.RECONNECTED, this.onReconnected);
  }
  loadHistory(e5, t2) {
    return b(this, void 0, void 0, function* () {
      Tt(ft, e5);
      let s2 = this.queryToTarget(e5, t2), i2 = this.findOrCreateHistory(s2);
      i2.expiredTime > 0 && (this.map.delete(s2.toString()), i2 = this.findOrCreateHistory(s2));
      let n2 = yield i2.loadHistory(e5.lastTimestamp, e5.limit);
      v.onSuccess(e5, { code: 200, content: n2 });
    });
  }
  queryToTarget(e5, t2) {
    return e5.userId ? new je(o.PRIVATE, e5.userId) : e5.groupId ? new je(o.GROUP, e5.groupId) : (o.CS === e5.type && u.isUndef(t2) && (t2 = e5.id), new je(e5.type, e5.id, t2));
  }
  privateMarkAsRead(e5) {
    return b(this, void 0, void 0, function* () {
      kt(e5);
      let t2 = je.byScene(o.PRIVATE, e5.userId);
      yield this.markAsRead(t2, e5);
    });
  }
  groupMarkAsRead(e5) {
    return b(this, void 0, void 0, function* () {
      Ot(e5);
      let t2 = je.byScene(o.GROUP, e5.groupId);
      yield this.markAsRead(t2, e5);
    });
  }
  markMessageAsRead(e5, t2) {
    return b(this, void 0, void 0, function* () {
      Tt(mt, e5), o.CS == e5.type && u.isUndef(t2) && (t2 = e5.id);
      let s2 = je.byScene(e5.type, e5.id, t2);
      yield this.markAsRead(s2, e5);
    });
  }
  markAsRead(e5, t2) {
    return b(this, void 0, void 0, function* () {
      let s2 = this.findHistory(e5);
      s2 && (yield s2.markRead()), v.onSuccess(t2);
    });
  }
  deleteMessage(e5) {
    return b(this, void 0, void 0, function* () {
      Tt(ct, e5);
      let t2 = e5.messages[0], s2 = je.byIMMessage(t2), i2 = this.findHistory(s2);
      if (!i2)
        throw { code: 400, content: "No message that could be deleted" };
      yield i2.deleteMessages(e5);
    });
  }
  findOrCreateHistory(e5) {
    let t2 = this.findHistory(e5);
    return t2 || (t2 = e5.scene === o.CS ? te.Socket.user().id === e5.customerId() ? new Go(e5) : new Uo(e5) : new Ds(e5), this.map.set(e5.toString(), t2), t2);
  }
  static get(e5) {
    return _Fo.instance.findOrCreateHistory(e5);
  }
  findHistory(e5) {
    return this.map.get(e5.toString());
  }
};
var Lo = class {
  constructor(e5) {
    this.top = false, this.data = null, this.dataLoaded = false, this.target = e5;
  }
  toDto() {
    let e5 = this.target.scene, t2 = this.target.id, s2 = new a();
    return e5 === o.PRIVATE ? s2.userId = t2 : e5 === o.GROUP ? s2.groupId = t2 : e5 === o.CS && (s2.id = this.target.teamId), s2.type = e5, s2.lastMessage = this.getMaxMessage(), s2.unread = this.getUnreadAmount(), s2.top = this.top, s2.data = this.data, s2;
  }
  getMaxMessage() {
    return Fo.get(this.target).getMaxMessage();
  }
  getUnreadAmount() {
    return Fo.get(this.target).unreadAmount();
  }
  maxMessageTime() {
    return Fo.get(this.target).maxTime();
  }
};
var Bo = class extends Lo {
  constructor(e5) {
    super(e5), this.accepted = false;
  }
  toDto() {
    let e5 = new a(), t2 = this.target.scene, s2 = this.target.id, i2 = this.target.teamId;
    return e5.id = s2, e5.teamId = i2, e5.type = t2, e5.lastMessage = this.getMaxMessage(), e5.unread = this.getUnreadAmount(), e5.top = this.top, e5.data = this.data, e5.ended = this.isEnded(), e5;
  }
  isEnded() {
    let e5 = this.getMaxMessage(), t2 = e5.type, s2 = e5.payload;
    return t2 === ls.END || t2 === ls.TRANSFER && s2.transferTo.id !== te.Socket.user().id;
  }
  getMaxMessage() {
    return Fo.get(this.target).getMaxMessage(this.accepted);
  }
  getUnreadAmount() {
    return Fo.get(this.target).unreadAmount(this.accepted);
  }
  maxMessageTime() {
    return Fo.get(this.target).maxTime(this.accepted);
  }
};
var qo = class {
  constructor(e5, t2, s2, i2) {
    this.type = e5, this.top = t2, this.targetId = s2, this.teamId = i2;
  }
};
var jo = class {
  constructor(e5, t2, s2) {
    this.type = e5, this.targetId = t2, this.teamId = s2;
  }
};
var Vo = class {
  constructor(e5, t2, s2) {
    this.type = e5, this.targetId = t2, this.teamId = s2;
  }
};
var Ho = class {
  top(e5, t2) {
    let s2 = new qo(e5.scene, t2, e5.id, e5.teamId);
    return new Promise((e6, t3) => {
      let i2 = new le({ name: y.topConversation, params: s2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, success: (s3) => {
        200 === s3.code ? e6(s3) : t3(s3);
      }, fail: (e7) => {
        t3(e7);
      } });
      te.Socket.e(i2);
    });
  }
  remove(e5) {
    let t2 = new jo(e5.scene, e5.id, e5.teamId);
    return new Promise((e6, s2) => {
      let i2 = new le({ name: y.removeConversation, params: t2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, success: (t3) => {
        200 == t3.code ? e6(t3) : s2(t3);
      }, fail: (e7) => {
        s2(e7);
      } });
      te.Socket.e(i2);
    });
  }
  query(e5) {
    return new Promise((t2, s2) => {
      let i2 = new le({ name: e5, params: {}, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: (e6) => {
        s2(e6);
      }, success: (e6) => b(this, void 0, void 0, function* () {
        t2(e6);
      }) });
      te.Socket.e(i2);
    });
  }
  loadData(e5) {
    let t2 = new Vo(e5.scene, e5.id, e5.teamId);
    return new Promise((e6, s2) => {
      let i2 = new le({ name: y.imData, params: t2, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, success: (t3) => {
        let s3 = JSON.parse(t3.content);
        e6(s3);
      }, fail: (e7) => {
        s2(e7);
      } });
      te.Socket.e(i2);
    });
  }
};
Ho.instance = new Ho();
var zo = class _zo {
  constructor() {
    this.list = new Array(), this.builder = new Ns(), this.remoteConversations = Ho.instance, this.synchronized = false, ys.i.on(us.MAX_MESSAGE_CHANGED, this.onMaxMessageChanged.bind(this)), ys.i.on(us.UNREAD_AMOUNT_CHANGED, this.onUnreadMessageChanged.bind(this)), ys.i.on(us.MAX_MESSAGE_DELETED, this.onMaxMessageDeleted.bind(this));
  }
  onUnreadMessageChanged(e5) {
    this.findConversation(e5) && this.fireUpdated();
  }
  fireUpdated() {
    this.debounce(this.triggerUpdate.bind(this));
  }
  triggerUpdate() {
    let e5 = this.loadLocalConversations(), t2 = this.getUpdatedEventName();
    Ps.fire(t2, { unreadTotal: e5.content.unreadTotal, conversations: e5.content.conversations });
  }
  getUpdatedEventName() {
    return ds.CONVERSATIONS_UPDATED;
  }
  latestConversations(e5) {
    return b(this, void 0, void 0, function* () {
      this.synchronized || (yield this.loadServerConversations());
      let t2 = this.loadLocalConversations();
      v.onSuccess(e5, t2);
    });
  }
  loadServerConversations() {
    return b(this, void 0, void 0, function* () {
      var e5, t2;
      let s2 = this.rocketName(), i2 = yield this.remoteConversations.query(s2);
      this.convertAbbrConversation(i2.content);
      const n2 = null === (t2 = null === (e5 = i2.content[i2.content.length - 1]) || void 0 === e5 ? void 0 : e5.lmsg) || void 0 === t2 ? void 0 : t2.i;
      yield this.loadCustomConversation(n2), this.synchronized = true;
    });
  }
  loadCustomConversation(e5) {
    return b(this, void 0, void 0, function* () {
      if (void 0 !== _s.instance) {
        const t2 = yield _s.instance.loadConversations(te.Socket.user().id, e5);
        for (const e6 of t2) {
          e6.lastMessage = _s.convertAbstractMessage(e6.lastMessage);
          const t3 = e6.lastMessage, s2 = je.byIMMessage(t3);
          let i2 = this.findConversation(s2);
          u.isUndef(i2) && (i2 = new Lo(s2), i2.dataLoaded = true, i2.top = e6.top, i2.data = e6.data, this.insertOne(i2)), Fo.get(s2).initMaxMessageAndOffsets(t3, []), this.correctPosition(i2);
        }
      }
    });
  }
  rocketName() {
    return y.imLastConversations;
  }
  convertAbbrConversation(e5) {
    let t2 = e5;
    for (const e6 of t2) {
      let t3 = e6.t, s2 = e6.top, i2 = e6.d ? JSON.parse(e6.d) : {}, n2 = e6.userOffsets;
      e6.lmsg.t = t3;
      let r2 = e6.lmsg, a2 = this.builder.build(r2), c2 = je.byIMMessage(a2), l2 = this.findConversation(c2);
      u.isUndef(l2) ? (l2 = this.buildByAbbr(e6, a2), this.insertOne(l2)) : (l2.top = s2, l2.data = i2), c2.scene === o.GROUP && (a2.x = 1), Fo.get(c2).initMaxMessageAndOffsets(a2, n2), this.correctPosition(l2);
    }
  }
  onMaxMessageDeleted(e5) {
    this.removeConversation(e5);
  }
  onMaxMessageChanged(e5) {
    return b(this, void 0, void 0, function* () {
      const t2 = e5.message;
      if (t2.scene() === o.CS) {
        let e6 = t2;
        if (te.Socket.user().id != e6.customerId() && (false === e6.accepted || e6.type === ls.ACCEPT && e6.senderId != te.Socket.user().id))
          return;
      }
      yield this.saveOrUpdateConversation(e5);
    });
  }
  saveOrUpdateConversation(e5) {
    return b(this, void 0, void 0, function* () {
      const t2 = e5.message;
      let s2 = t2.status, i2 = je.byIMMessage(t2), n2 = this.findConversation(i2);
      u.isUndef(n2) && s2 !== r.FAIL && (n2 = this.buildByMessage(t2), this.insertOne(n2), s2 === r.SUCCESS && (n2.data = yield this.remoteConversations.loadData(i2), n2.dataLoaded = true)), s2 === r.SENDING && (n2.data = e5.receiver, n2.dataLoaded = true), n2 && n2.dataLoaded && (this.correctPosition(n2), this.fireUpdated());
    });
  }
  debounce(e5) {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      e5();
    }, 500);
  }
  loadLocalConversations() {
    let e5 = 0, t2 = new Array();
    for (const s2 of this.list)
      if (s2.dataLoaded && s2.getMaxMessage()) {
        e5 += s2.getUnreadAmount();
        let i2 = s2.toDto();
        t2.push(i2);
      }
    return { code: 200, content: { unreadTotal: e5, conversations: t2 } };
  }
  findConversationIndex(e5) {
    return this.list.findIndex((t2) => e5.toString() === t2.target.toString());
  }
  findConversation(e5) {
    let t2 = this.findConversationIndex(e5);
    return this.list[t2];
  }
  removeLocalConversation(e5) {
    let t2 = this.findConversationIndex(e5.target);
    this.list.splice(t2, 1);
  }
  insertOne(e5) {
    _zo.sortedInserter.insert(this.list, e5);
  }
  correctPosition(e5) {
    this.removeLocalConversation(e5), this.insertOne(e5);
  }
  removeConversation(e5) {
    let t2 = this.findConversation(e5);
    t2 && (this.removeLocalConversation(t2), this.fireUpdated());
  }
  top(e5, t2, s2) {
    return b(this, void 0, void 0, function* () {
      if (!u.isBoolean(t2))
        throw new Error("top must be boolean.");
      let i2 = this.findConversation(e5);
      if (!i2)
        throw new Error("conversation does not exist.");
      i2.top != t2 && (yield this.remoteConversations.top(e5, t2), i2.top = t2, this.correctPosition(i2)), this.fireUpdated(), v.onSuccess(s2);
    });
  }
  remove(e5, t2) {
    return b(this, void 0, void 0, function* () {
      let s2 = this.findConversation(e5);
      if (!s2)
        throw new Error("conversation does not exist.");
      if (s2 instanceof Bo && !s2.isEnded())
        throw new Error("CS conversation can only be deleted after it ends");
      yield this.remoteConversations.remove(e5), this.removeLocalConversation(s2), this.fireUpdated(), v.onSuccess(t2);
    });
  }
  buildByAbbr(e5, t2) {
    let s2, i2 = je.byIMMessage(t2);
    if (e5.t === o.CS) {
      let e6 = t2;
      te.Socket.user().id === e6.customerId() ? s2 = new Lo(i2) : (s2 = new Bo(i2), s2.accepted = e6.accepted);
    } else
      s2 = new Lo(i2);
    return s2.dataLoaded = true, s2.top = e5.top, s2.data = e5.d ? JSON.parse(e5.d) : {}, s2;
  }
  buildByMessage(e5) {
    let t2, s2 = je.byIMMessage(e5);
    if (e5.scene() === o.CS) {
      let i2 = e5;
      te.Socket.user().id === i2.customerId() ? t2 = new Lo(s2) : (t2 = new Bo(s2), t2.accepted = i2.accepted);
    } else
      t2 = new Lo(s2);
    return t2;
  }
};
zo.sortedInserter = new class extends vs {
  compare(e5, t2) {
    if (e5.target.scene === t2.target.scene && e5.target.id === t2.target.id)
      return 0;
    let s2;
    if (e5.top == t2.top) {
      let i2 = e5.maxMessageTime();
      s2 = t2.maxMessageTime() - i2;
    } else
      s2 = e5.top ? -1 : 1;
    return s2 > 0 ? 1 : -1;
  }
}();
var Wo = class _Wo extends J {
  static init() {
    return this.module = new _Wo(), this.module.name = this.GIM_MODULE_NAME, this.initGN(), this.module;
  }
  static initGN() {
    he.addAssembler(new class {
      assemble(e5) {
        let t2 = { messageId: e5.id, timestamp: e5.tm, type: e5.t, senderId: e5.sid, toType: e5.tt };
        return e5.tt === o.GROUP && (t2.groupId = e5.gid), t2;
      }
      support(e5) {
        return !!e5.sid;
      }
    }());
  }
  postConnect() {
    Yr.init();
  }
  static check() {
    if (!this.module)
      throw { code: 400, content: "IM not initialized. Please include 'IM' in the 'modules' during GoEasy initialization." };
  }
};
Wo.GIM_MODULE_NAME = "GIM";
var Jo = class extends zo {
  constructor() {
    super(), this.expired = false, ys.i.on(us.CS_ONLINE_SUCCESS, this.onCSOnlineSuccess.bind(this)), ys.i.on(us.CS_OFFLINE_SUCCESS, this.onCSOfflineSuccess.bind(this)), _o.on(_o.EVENT.LOST, this.onDisconnected.bind(this)), _o.on(_o.EVENT.RECONNECTED, this.onConnected.bind(this));
  }
  onMaxMessageChanged(e5) {
    return b(this, void 0, void 0, function* () {
      const t2 = e5.message;
      if (t2.scene() === o.CS) {
        let s2 = t2;
        if (s2.customerId() != te.Socket.user().id && (false === s2.accepted || s2.type === ls.ACCEPT))
          if (ls.ACCEPT === t2.type) {
            let e6 = je.byIMMessage(t2);
            this.removeConversation(e6);
          } else
            yield this.saveOrUpdateConversation(e5);
      }
    });
  }
  latestConversations(e5) {
    const t2 = Object.create(null, { latestConversations: { get: () => super.latestConversations } });
    return b(this, void 0, void 0, function* () {
      let s2 = this.synchronized;
      yield t2.latestConversations.call(this, e5), this.list.length > 0 && !s2 && this.fireUpdated();
    });
  }
  onUnreadMessageChanged(e5) {
  }
  onCSOnlineSuccess() {
    return b(this, void 0, void 0, function* () {
      yield this.loadServerConversations(), this.fireUpdated();
    });
  }
  onCSOfflineSuccess() {
    this.list = [], this.fireUpdated();
  }
  getUpdatedEventName() {
    return ds.PENDING_CONVERSATIONS_UPDATED;
  }
  rocketName() {
    return y.CS_PENDING_CONVERSATION;
  }
  convertAbbrConversation(e5) {
    return b(this, void 0, void 0, function* () {
      let t2 = e5;
      for (const e6 of t2) {
        e6.lastMessage.t = o.CS;
        let t3 = e6.customerData, s2 = e6.lastMessage, i2 = e6.userOffsets, n2 = t3 ? JSON.parse(t3) : {}, r2 = this.builder.build(s2), a2 = je.byIMMessage(r2), c2 = this.findConversation(a2);
        u.isUndef(c2) && (c2 = new Bo(a2), c2.accepted = r2.accepted, c2.dataLoaded = true, this.insertOne(c2)), c2.top = false, c2.data = n2, Fo.get(a2).initPendingMaxMessageAndOffsets(r2, i2), this.correctPosition(c2);
      }
    });
  }
  onDisconnected() {
    this.expired = true;
  }
  onConnected() {
    return b(this, void 0, void 0, function* () {
      this.expired && Wo.module && Wo.module.active && (this.expired = false, this.list = [], yield this.loadServerConversations(), this.fireUpdated());
    });
  }
};
var Xo = class {
  constructor() {
    this.conversations = new zo(), this.pendingConversations = new Jo();
  }
  latestConversations(e5) {
    this.conversations.latestConversations(e5);
  }
  latestPendingConversations(e5) {
    this.pendingConversations.latestConversations(e5);
  }
  topPrivateConversation(e5) {
    let t2 = je.byScene(o.PRIVATE, e5.userId);
    this.conversations.top(t2, e5.top, e5);
  }
  topGroupConversation(e5) {
    let t2 = je.byScene(o.GROUP, e5.groupId);
    this.conversations.top(t2, e5.top, e5);
  }
  topConversation(e5) {
    let t2 = e5.conversation;
    this.validateConversationDTO(t2);
    let s2 = je.byConversationDTO(t2);
    this.conversations.top(s2, e5.top, e5);
  }
  removePrivateConversation(e5) {
    let t2 = je.byScene(o.PRIVATE, e5.userId);
    this.conversations.remove(t2, e5);
  }
  removeGroupConversation(e5) {
    let t2 = je.byScene(o.GROUP, e5.groupId);
    this.conversations.remove(t2, e5);
  }
  removeConversation(e5) {
    let t2 = e5.conversation;
    this.validateConversationDTO(t2);
    let s2 = je.byConversationDTO(t2);
    this.conversations.remove(s2, e5);
  }
  validateConversationDTO(e5) {
    if (!(e5 instanceof a))
      throw new Error("Incorrect conversation object.");
    {
      let t2 = e5.lastMessage;
      if (t2 instanceof We && t2.customerId() !== te.Socket.user().id && false === t2.accepted)
        throw new Error("pending conversation cannot be topped or removed.");
    }
  }
};
var $o = class {
  constructor() {
    this.builder = new Ns(), te.Socket.onMessage(Gt.imMessage, this.onMessageReceived.bind(this));
  }
  sendAck(e5) {
    te.Socket.sendAck("imAck", { publishGuid: e5 });
  }
  createNotification(e5) {
    const t2 = te.N.supportAppNotification();
    if (!u.isObject(e5.nt) || e5.s === te.Socket.user().id || !t2)
      return;
    let s2 = { id: e5.i, tm: e5.ts, t: e5.mt, sid: e5.s, tt: e5.t };
    s2.tt === o.GROUP && (s2.gid = e5.r), te.N.createLocalNotification(e5.nt.t, e5.nt.c, s2, e5.nt.sound, e5.nt.badge);
  }
};
var Yo = class extends $o {
  constructor() {
    super(), te.Socket.onMessage(Gt.IM_MSG_SYNC, this.onSyncMessageReceived.bind(this)), te.Socket.onMessage(Gt.IM_MSG_NEW, this.onNewMessageReceived.bind(this));
  }
  onMessageReceived(e5) {
    if (e5.t !== o.CS) {
      let t2 = this.builder.build(e5);
      this.sendAck(t2.messageId);
      let s2 = je.byIMMessage(t2), i2 = s2.scene;
      Fo.get(s2).existsMessage(t2) || (this.createNotification(e5), ys.i.fire(us.MESSAGE_RECEIVED, t2), i2 === o.PRIVATE ? Ps.fire(ds.PRIVATE_MESSAGE_RECEIVED, t2) : i2 === o.GROUP && Ps.fire(ds.GROUP_MESSAGE_RECEIVED, t2));
    }
  }
  onSyncMessageReceived(e5) {
    this.sendAck(e5.i), e5.rs.forEach((t2) => {
      const s2 = Object.assign({}, e5);
      s2.t = o.PRIVATE, s2.r = t2, s2.s = te.Socket.user().id, delete s2.rs;
      let i2 = this.builder.build(s2), n2 = je.byIMMessage(i2), r2 = n2.scene;
      Fo.get(n2).existsMessage(i2) || (this.createNotification(s2), ys.i.fire(us.MESSAGE_RECEIVED, i2), r2 === o.PRIVATE ? Ps.fire(ds.PRIVATE_MESSAGE_RECEIVED, i2) : r2 === o.GROUP && Ps.fire(ds.GROUP_MESSAGE_RECEIVED, i2));
    });
  }
  onNewMessageReceived(e5) {
    let t2 = this.builder.build(e5);
    this.sendAck(t2.messageId);
    let s2 = je.byIMMessage(t2), i2 = s2.scene;
    Fo.get(s2).existsMessage(t2) || (this.createNotification(e5), ys.i.fire(us.MESSAGE_RECEIVED, t2), i2 === o.PRIVATE ? Ps.fire(ds.PRIVATE_MESSAGE_RECEIVED, t2) : i2 === o.GROUP && Ps.fire(ds.GROUP_MESSAGE_RECEIVED, t2));
  }
};
var Qo = class {
  constructor() {
    this.subscribedGroups = [], te.Socket.on(Ft.EXPIRED_RECONNECTED, this.expiredResubscribeGroups.bind(this));
  }
  expiredResubscribeGroups() {
    this.subscribedGroups.forEach((e5) => b(this, void 0, void 0, function* () {
      yield this.doSubscribeGroup(e5);
    }));
  }
  subscribe(e5) {
    _t(e5);
    let t2 = new Ko(e5.groupIds, e5.accessToken);
    this.doSubscribeGroup(t2).then(() => {
      this.subscribedGroups.push(t2), v.onSuccess(e5, { code: 200, content: "ok" });
    }).catch((t3) => {
      v.onFailed(e5, { code: t3.resultCode || 408, content: t3.content || "Failed to subscribe group message" });
    });
  }
  doSubscribeGroup(e5) {
    return new Promise((t2, s2) => {
      let i2 = e5.groupIds.toString().split(","), n2 = new le({ name: y.subscribeGroups, params: { groupIds: i2, at: e5.accessToken }, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, success: () => {
        t2();
      }, fail: (e6) => {
        s2(e6);
      } });
      te.Socket.e(n2);
    });
  }
  unsubscribe(e5) {
    Ot(e5), e5.groupId = e5.groupId.toString();
    let t2 = new le({ name: y.unsubscribeGroup, params: { groupId: e5.groupId }, permission: ne.READ, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, success: () => {
      this.deleteSubscriptionByGroupId(e5.groupId), v.onSuccess(e5, { code: 200, content: "ok" });
    }, fail: (t3) => {
      v.onFailed(e5, { code: t3.resultCode || 408, content: t3.content || "Failed to unsubscribe group message" });
    } });
    te.Socket.e(t2);
  }
  deleteSubscriptionByGroupId(e5) {
    this.subscribedGroups = this.subscribedGroups.filter((t2) => {
      const s2 = t2.groupIds.findIndex((t3) => t3 == e5);
      return s2 > -1 && t2.groupIds.splice(s2, 1), t2.groupIds.length > 0;
    });
  }
};
var Ko = class {
  constructor(e5, t2) {
    this.groupIds = e5, this.accessToken = t2;
  }
};
var Zo = class {
  constructor() {
    this.newMessageReceived = (e5) => {
      let t2 = null;
      e5.c && (t2 = JSON.parse(e5.c)), t2 && t2.events && t2.events.map((e6) => {
        let s2 = e6.userData ? JSON.parse(e6.userData) : {}, i2 = { time: e6.time, action: e6.action, groupOnlineCount: t2.userAmount, groupId: t2.groupId, id: e6.userId, data: s2 };
        Ps.fire(ds.GROUP_PRESENCE, i2);
      });
    }, _o.onMessage(Gt.groupPresence, this.newMessageReceived);
  }
  presence(e5) {
    _t(e5), e5.groupIds.toString().split(",");
    let t2 = { groupIds: e5.groupIds };
    this.emitRocket(y.subscribeGroupPresence, t2, () => {
      v.onSuccess(e5, { code: 200, content: "ok" });
    }, (t3) => {
      v.onFailed(e5, { code: t3.code || 408, content: t3.content || "Failed to subscribe group message" });
    }, S.commonRequestSingle, S.commonRequestTotal);
  }
  unPresence(e5) {
    Tt(Nt, e5), e5.groupId = e5.groupId.toString();
    let t2 = { groupId: e5.groupId };
    this.emitRocket(y.unsubscribeGroupPresence, t2, () => {
      v.onSuccess(e5, { code: 200, content: "ok" });
    }, (t3) => {
      v.onFailed(e5, { code: t3.code || 408, content: t3.content || "Failed to unsubscribe presence" });
    }, S.commonRequestSingle, S.commonRequestTotal);
  }
  emitRocket(e5, t2, s2, i2, n2, o2) {
    let r2 = new le({ name: e5, params: t2, singleTimeout: n2, totalTimeout: o2, permission: ne.WRITE, success: s2, fail: i2 });
    te.Socket.e(r2);
  }
};
var er = class {
  get(e5) {
    Ot(e5), e5.groupId = e5.groupId.toString();
    let t2 = new le({ name: y.imGroupOnlineCount, params: { groupId: e5.groupId }, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: function(t3) {
      v.onFailed(e5, t3 || { code: 408, content: "Failed to query online group users" });
    }, success: function(t3) {
      200 == t3.code ? v.onSuccess(e5, t3) : v.onFailed(e5, t3);
    } });
    te.Socket.e(t2);
  }
};
var tr = class {
  doHereNow(e5, t2, s2) {
    let i2 = new le({ name: e5, params: t2, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: (e6) => {
      v.onFailed(s2, e6);
    }, success: (e6) => {
      let t3 = e6.content;
      e6.content = t3.map((e7) => {
        let t4 = e7.userData ? JSON.parse(e7.userData) : {};
        return { id: e7.userId, data: t4 };
      }), v.onSuccess(s2, e6);
    } });
    te.Socket.e(i2);
  }
};
var sr = class extends tr {
  hereNow(e5) {
    Ot(e5), e5.groupId = e5.groupId.toString();
    let t2 = { groupId: e5.groupId };
    this.doHereNow(y.imGroupHereNow, t2, e5);
  }
};
var ir = class {
  constructor() {
    this.newMessageReceived = (e5) => {
      let t2 = [];
      e5.c && (t2 = JSON.parse(e5.c).events || []), t2.map((e6) => {
        let t3 = e6.userData ? JSON.parse(e6.userData) : {}, s2 = { time: e6.time, action: e6.action, id: e6.userId, data: t3 };
        Ps.fire(ds.USER_PRESENCE, s2);
      });
    }, _o.onMessage(Gt.userPresence, this.newMessageReceived);
  }
  presence(e5) {
    Pt(e5), e5.userIds.toString().split(",");
    let t2 = { userIds: e5.userIds };
    this.emitRocket(y.subscribeUserPresence, t2, () => {
      v.onSuccess(e5, { code: 200, content: "ok" });
    }, (t3) => {
      v.onFailed(e5, { code: t3.code || 408, content: t3.content || "Failed to subscribe group message" });
    }, S.commonRequestSingle, S.commonRequestTotal);
  }
  unPresence(e5) {
    kt(e5), e5.userId = e5.userId.toString();
    let t2 = { userId: e5.userId };
    this.emitRocket(y.unsubscribeUserPresence, t2, () => {
      v.onSuccess(e5, { code: 200, content: "ok" });
    }, (t3) => {
      v.onFailed(e5, { code: t3.code || 408, content: t3.content || "Failed to unsubscribe presence" });
    }, S.commonRequestSingle, S.commonRequestTotal);
  }
  emitRocket(e5, t2, s2, i2, n2, o2) {
    let r2 = new le({ name: e5, params: t2, singleTimeout: n2, totalTimeout: o2, permission: ne.WRITE, success: s2, fail: i2 });
    te.Socket.e(r2);
  }
};
var nr = class extends tr {
  hereNow(e5) {
    Pt(e5), e5.userIds.toString().split(","), this.doHereNow(y.imHereNow, e5, e5);
  }
};
var or = new class {
  fileExtension(e5, t2) {
    if (u.isString(e5))
      try {
        let s2 = e5.split(t2);
        return s2[s2.length - 1];
      } catch (e6) {
        throw Error(e6);
      }
  }
}();
var rr = class {
};
var ar = class extends rr {
  constructor() {
    super(...arguments), this.contentType = "", this.name = "", this.size = 0, this.url = "";
  }
};
var cr = class extends ar {
  constructor() {
    super(...arguments), this.width = 0, this.height = 0;
  }
};
var ur = class {
  build(e5) {
    let t2 = this.create();
    return this.setPayload(e5, t2), t2;
  }
};
var lr = class extends ur {
  create() {
    return new ar();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file;
    s2.url = i2.path, s2.name = i2.name, s2.size = i2.size, s2.contentType = i2.type, e5.complete = Promise.resolve();
  }
};
var dr = class extends lr {
  create() {
    return new cr();
  }
  setPayload(e5, t2) {
    super.setPayload(e5, t2);
    let s2 = e5.createOptions.file, i2 = t2, n2 = s2.path || s2.tempFilePath, o2 = u.isEmpty(s2.name) || void 0 === s2.name ? n2 : s2.name;
    i2.name = "wx-image." + or.fileExtension(o2, "."), i2.contentType = "image/" + or.fileExtension(o2, "."), i2.url = n2, i2.size = s2.size, e5.complete = new Promise((e6, t3) => {
      wx.getImageInfo({ src: i2.url, success(t4) {
        i2.width = t4.width, i2.height = t4.height, e6();
      }, fail(e7) {
        t3(e7);
      } });
    });
  }
};
var hr = class extends ar {
  constructor() {
    super(...arguments), this.duration = 0;
  }
};
var pr = class extends lr {
  create() {
    return new hr();
  }
  setPayload(e5, t2) {
    super.setPayload(e5, t2);
    let s2 = e5.createOptions.file, i2 = t2, n2 = s2.tempFilePath, o2 = u.isEmpty(s2.name) || null == s2.name ? n2 : s2.name, r2 = s2.duration, a2 = s2.fileSize;
    i2.url = n2, i2.size = a2, i2.duration = r2 / 1e3, i2.name = "wx-audio." + or.fileExtension(o2, "."), i2.contentType = "audio/" + or.fileExtension(o2, "."), e5.complete = Promise.resolve();
  }
};
var mr = class extends rr {
  constructor() {
    super(...arguments), this.text = "";
  }
};
var fr = class extends ur {
  create() {
    return new mr();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions;
    s2.text = i2.text, e5.complete = Promise.resolve();
  }
};
var gr = class extends rr {
  constructor() {
    super(...arguments), this.video = new Sr(), this.thumbnail = new yr();
  }
};
var yr = class {
  constructor() {
    this.name = "", this.url = "", this.width = 0, this.height = 0, this.contentType = "";
  }
  initURL(e5) {
    d.currentPlatform() === l.BROWSER && this.htmlUrl(e5);
  }
  htmlUrl(e5) {
    let t2 = document.createElement("canvas");
    t2.width = e5.videoWidth, t2.height = e5.videoHeight, t2.getContext("2d").drawImage(e5, 0, 0, t2.width, t2.height), this.url = t2.toDataURL("image/png");
  }
};
var Sr = class {
  constructor() {
    this.name = "", this.url = "", this.width = 0, this.height = 0, this.contentType = "", this.size = 0, this.duration = 0;
  }
};
var Er = class extends ur {
  create() {
    return new gr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions.file, i2 = t2, n2 = i2.video, o2 = i2.thumbnail, { duration: r2, height: a2, size: c2, tempFilePath: l2, thumbTempFilePath: d2, width: h2, name: p2 = "" } = s2, m2 = u.isEmpty(p2) ? l2 : p2;
    n2.contentType = "video/" + or.fileExtension(m2, "."), n2.name = "wx-video." + or.fileExtension(m2, "."), n2.url = l2, n2.width = o2.width = h2, n2.height = o2.height = a2, n2.size = c2, n2.duration = r2, o2.url = d2, o2.contentType = "image/jpg", o2.name = "wx-thumbnail.jpg", e5.complete = Promise.resolve();
  }
};
var vr = class extends ur {
  create() {
    return new ar();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file;
    s2.url = i2.fullPath || i2.path, s2.name = i2.name, s2.size = i2.size, s2.contentType = i2.type, i2.type, e5.complete = Promise.resolve();
  }
};
var br = class extends vr {
  create() {
    return new cr();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file;
    s2.url = i2.path, s2.size = i2.size;
    let n2 = u.isEmpty(i2.name) || void 0 === i2.name ? i2.path : i2.name;
    s2.contentType = "image/" + or.fileExtension(n2, "."), s2.name = "uni-image." + or.fileExtension(n2, "."), e5.complete = new Promise((e6, t3) => {
      uni.getImageInfo({ src: i2.path, success(t4) {
        s2.width = t4.width, s2.height = t4.height, e6();
      }, fail(e7) {
        t3(e7);
      } });
    });
  }
};
var Cr = class extends vr {
  create() {
    return new hr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions, i2 = t2, n2 = s2.file, o2 = n2.tempFilePath, r2 = u.isEmpty(n2.name) || null == n2.name ? o2 : n2.name;
    i2.url = o2, i2.name = "uni-audio." + or.fileExtension(r2, "."), i2.contentType = "audio/" + or.fileExtension(r2, "."), e5.complete = new Promise((e6, t3) => {
      uni.getFileInfo({ filePath: o2, success: (n3) => {
        let r3 = n3.size;
        if (i2.size = r3, 0 === r3)
          e6();
        else if (u.isDef(s2.file.duration))
          i2.duration = s2.file.duration / 1e3, e6();
        else {
          const s3 = uni.createInnerAudioContext();
          s3.src = o2, s3.onCanplay(function(n4) {
            n4.errCode ? (s3.destroy(), t3(n4)) : (i2.duration = s3.duration, s3.destroy(), e6());
          }), s3.onError((i3) => {
            s3.destroy(), -99 === i3.errCode ? e6() : t3(i3);
          });
        }
      }, fail(e7) {
        t3(e7);
      } });
    });
  }
};
var Mr = class extends ur {
  create() {
    return new gr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions.file, i2 = t2, n2 = i2.video, o2 = i2.thumbnail, { duration: r2, height: a2, size: c2, tempFilePath: l2, width: d2, name: h2 = "" } = s2, p2 = u.isEmpty(h2) ? l2 : h2;
    n2.size = c2, n2.width = d2, n2.height = a2, n2.url = l2, n2.duration = r2, n2.contentType = "video/" + or.fileExtension(p2, "."), n2.name = "uni-video." + or.fileExtension(p2, "."), o2.url = l2, o2.height = 200, o2.width = Number((n2.width * o2.height / n2.height).toFixed(0)), o2.contentType = "image/jpg", o2.name = "uni-thumbnail.jpg", e5.complete = Promise.resolve();
  }
};
var wr = class extends ur {
  create() {
    return new ar();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file, n2 = window.URL || window.webkitURL;
    s2.url = n2.createObjectURL(i2), s2.name = i2.name, s2.size = i2.size, s2.contentType = i2.type, e5.complete = Promise.resolve();
  }
};
var Ir = class extends wr {
  create() {
    return new cr();
  }
  setPayload(e5, t2) {
    super.setPayload(e5, t2);
    let s2 = e5.createOptions.file, i2 = t2, n2 = window.URL || window.webkitURL, o2 = new Image();
    o2.src = n2.createObjectURL(s2), e5.complete = new Promise((e6, t3) => {
      o2.onload = function() {
        i2.width = o2.width, i2.height = o2.height, n2.revokeObjectURL(o2.src), e6();
      }, o2.onerror = function(e7) {
        n2.revokeObjectURL(o2.src), t3(e7);
      };
    });
  }
};
var Nr = class extends wr {
  create() {
    return new hr();
  }
  setPayload(e5, t2) {
    super.setPayload(e5, t2);
    let s2 = e5.createOptions.file, i2 = t2, n2 = window.URL || window.webkitURL, o2 = document.createElement("audio");
    o2.src = n2.createObjectURL(s2), e5.complete = new Promise((e6, t3) => {
      o2.onloadedmetadata = () => {
        i2.duration = o2.duration, n2.revokeObjectURL(o2.src), e6();
      }, o2.onerror = (e7) => {
        n2.revokeObjectURL(o2.src), t3(e7);
      };
    });
  }
};
var Tr = class extends ur {
  create() {
    return new gr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions.file, i2 = t2, n2 = i2.video, o2 = i2.thumbnail, r2 = window.URL || window.webkitURL, a2 = document.createElement("video");
    a2.src = r2.createObjectURL(s2), n2.size = s2.size, n2.name = s2.name, n2.contentType = s2.type, n2.url = a2.src, o2.name = s2.name, o2.contentType = "image/jpg", e5.complete = new Promise((e6, t3) => {
      a2.onloadedmetadata = () => {
        n2.duration = a2.duration, n2.width = a2.videoWidth, n2.height = a2.videoHeight, o2.width = a2.videoWidth, o2.height = a2.videoHeight, o2.url = this.getThumbnailUrl(a2), r2.revokeObjectURL(a2.src), e6();
      }, a2.onerror = function(e7) {
        r2.revokeObjectURL(a2.src), t3(e7);
      };
    });
  }
  getThumbnailUrl(e5) {
    let t2 = document.createElement("canvas");
    return t2.width = e5.videoWidth, t2.height = e5.videoHeight, t2.getContext("2d").drawImage(e5, 0, 0, t2.width, t2.height), t2.toDataURL("image/png");
  }
};
var Rr = class extends ur {
  create() {
    return new gr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions.file, i2 = t2, n2 = i2.video, o2 = i2.thumbnail, { duration: r2, height: a2, size: c2, tempFilePath: u2, tempVideoThumbPath: l2, width: d2 } = s2;
    n2.size = c2, n2.width = d2, n2.height = a2, n2.url = u2, n2.duration = r2, n2.contentType = "video/mp4", n2.name = "ali-video.mp4", o2.url = l2, o2.height = 200, o2.width = Number((n2.width * o2.height / n2.height).toFixed(0)), o2.contentType = "image/jpg", o2.name = "ali-thumbnail.jpg", e5.complete = Promise.resolve();
  }
};
var Ar = class extends ur {
  create() {
    return new ar();
  }
  setPayload(e5, t2) {
    e5.complete = Promise.reject("Alipay not support file message.");
  }
};
var kr = class extends Ar {
  create() {
    return new cr();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file;
    s2.url = i2.path, s2.size = i2.size, e5.complete = new Promise((e6, t3) => {
      my.getImageInfo({ src: i2.path, success(t4) {
        s2.width = t4.width, s2.height = t4.height, s2.contentType = "image/" + t4.type, s2.name = "ali-image." + t4.type, e6();
      }, fail(e7) {
        t3(e7);
      } });
    });
  }
};
var Or = class extends Ar {
  create() {
    return new hr();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file, n2 = i2.tempFilePath;
    s2.url = n2, s2.name = "ali-audio." + or.fileExtension(n2, "."), s2.contentType = "audio/" + or.fileExtension(n2, "."), s2.duration = i2.duration, s2.size = i2.fileSize, e5.complete = Promise.resolve();
  }
};
var Pr = class extends ur {
  create() {
    return new gr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions.file, i2 = t2, n2 = i2.video, o2 = i2.thumbnail, { duration: r2, height: a2, size: c2, tempFilePath: u2, thumbTempFilePath: l2, width: d2 } = s2;
    n2.size = c2, n2.width = d2, n2.height = a2, n2.url = u2, n2.duration = r2, n2.contentType = "video/" + or.fileExtension(u2, "."), n2.name = "baidu-video." + or.fileExtension(u2, "."), o2.url = l2, o2.height = 200, o2.width = Number((n2.width * o2.height / n2.height).toFixed(0)), o2.contentType = "image/" + or.fileExtension(l2, "."), o2.name = "baidu-thumbnail." + or.fileExtension(u2, "."), e5.complete = Promise.resolve();
  }
};
var _r = class extends ur {
  create() {
    return new ar();
  }
  setPayload(e5, t2) {
    e5.complete = Promise.reject("Baidu app not support file message.");
  }
};
var Dr = class extends _r {
  create() {
    return new hr();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file, n2 = i2.tempFilePath;
    s2.url = n2, s2.name = "baidu-audio." + or.fileExtension(n2, "."), s2.contentType = "audio/" + or.fileExtension(n2, "."), s2.duration = i2.duration / 1e3, s2.size = i2.fileSize, e5.complete = Promise.resolve();
  }
};
var xr = class extends _r {
  create() {
    return new cr();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file;
    s2.url = i2.path, s2.size = i2.size, e5.complete = new Promise((e6, t3) => {
      swan.getImageInfo({ src: i2.path, success(t4) {
        s2.width = t4.width, s2.height = t4.height, s2.contentType = "image/" + t4.type, s2.name = "baidu-image." + t4.type, e6();
      }, fail(e7) {
        t3(e7);
      } });
    });
  }
};
var Ur = class extends ur {
  create() {
    return new ar();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file;
    const { uri: n2, type: o2, size: r2, name: a2 } = i2;
    s2.url = decodeURIComponent(n2), s2.name = a2, s2.size = r2, s2.contentType = o2, e5.complete = Promise.resolve();
  }
};
var Gr = class extends Ur {
  create() {
    return new cr();
  }
  setPayload(e5, t2) {
    let s2 = t2, i2 = e5.createOptions.file;
    const { uri: n2, fileSize: o2, type: r2, fileName: a2, width: c2, height: u2 } = i2;
    s2.url = n2, s2.size = o2, s2.contentType = r2, s2.name = a2, s2.width = c2, s2.height = u2, e5.complete = Promise.resolve();
  }
};
var Fr = class extends ur {
  create() {
    return new gr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions.file;
    const i2 = t2, { video: n2, thumbnail: o2 } = i2, { uri: r2, type: a2, fileSize: c2, fileName: u2, duration: l2, height: d2, width: h2 } = s2;
    n2.size = c2, n2.width = h2, n2.height = d2, n2.url = r2, n2.duration = l2, n2.contentType = a2, n2.name = u2, o2.url = r2, o2.name = "rn-thumbnail.jpg", o2.height = 200, o2.width = Number((n2.width * o2.height / n2.height).toFixed(0)), o2.contentType = "image/jpg", e5.complete = Promise.resolve();
  }
};
var Lr = class extends Ur {
  create() {
    return new hr();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions, i2 = t2, n2 = s2.file;
    const { uri: o2, name: r2, duration: a2, size: c2 } = n2;
    i2.url = o2, i2.duration = Number((a2 / 1e3).toFixed(2)), i2.size = c2, i2.name = r2 || "rn-audio." + or.fileExtension(o2, "."), i2.contentType = "audio/" + or.fileExtension(o2, "."), s2.file = { uri: o2, type: i2.contentType, name: i2.name }, e5.complete = Promise.resolve();
  }
};
var Br = class extends rr {
};
var qr = class extends ur {
  create() {
    return new Br();
  }
  setPayload(e5, t2) {
    let s2 = e5.createOptions;
    t2.payload = s2.payload, e5.complete = Promise.resolve();
  }
};
var jr = class {
  constructor(e5, t2) {
    this.type = e5, this.createOptions = t2;
  }
};
var Vr = class {
  constructor() {
    this.framework = s.currentFramework(), this.platform = d.currentPlatform(), this.payloadBuilders = { [e.UNIAPP]: { image: new br(), file: new vr(), audio: new Cr(), video: new Mr(), text: new fr() }, [l.MP_WX]: { image: new dr(), file: new lr(), audio: new pr(), video: new Er(), text: new fr() }, [l.BROWSER]: { image: new Ir(), file: new wr(), audio: new Nr(), video: new Tr(), text: new fr() }, [l.MP_ALI]: { image: new kr(), file: new Ar(), audio: new Or(), video: new Rr(), text: new fr() }, [l.MP_BAIDU]: { image: new xr(), file: new _r(), audio: new Dr(), video: new Pr(), text: new fr() }, [e.REACT_NATIVE]: { image: new Gr(), file: new Ur(), audio: new Lr(), video: new Fr(), text: new fr() }, [l.MP_BYTE]: { image: new dr(), file: new lr(), audio: new pr(), video: new Er(), text: new fr() } };
  }
  buildMessage(t2, s2) {
    this.validate(s2, t2);
    const i2 = this.framework === e.UNKNOWN ? this.platform : this.framework;
    let n2 = this.payloadBuilders[i2][t2], o2 = new jr(t2, s2);
    if (n2) {
      let e5 = n2.build(o2);
      o2.payload = e5;
    } else {
      let e5 = new qr().build(o2);
      o2.payload = e5.payload;
    }
    let r2 = this.build(o2);
    return o2.complete.then(() => {
      v.onSuccess(s2, r2);
    }).catch((e5) => {
      v.onFailed(s2, e5);
    }), r2;
  }
  build(e5) {
    let t2, s2 = e5.type, i2 = e5.payload, n2 = e5.createOptions.to, a2 = n2.type;
    return a2 === o.GROUP ? (t2 = new ze(), t2.senderData = te.Socket.user().data, n2.id && (t2.groupId = n2.id)) : a2 === o.PRIVATE ? (t2 = new He(), t2.read = false, n2.id && (t2.receiverId = n2.id)) : a2 === o.CS && (t2 = new We(), t2.to = n2.id.toString(), t2.teamId = n2.id.toString(), t2.senderData = te.Socket.user().data), t2.senderId = te.Socket.user().id, t2.messageId = ie.get(), t2.payload = i2, t2.timestamp = Date.now(), t2.type = s2, t2.recalled = false, t2.status = r.NEW, t2.buildOptions = e5, t2;
  }
  validate(e5, t2) {
    var s2;
    s2 = Object.assign(Object.assign({}, e5), { type: t2 }), Tt(rt, s2);
  }
};
var Hr = class extends $o {
  onMessageReceived(e5) {
    if (e5.t === o.CS) {
      let t2 = this.builder.build(e5);
      this.sendAck(t2.messageId);
      let s2 = je.byIMMessage(t2);
      if (!Fo.get(s2).existsMessage(t2)) {
        if (t2.customerId() === te.Socket.user().id)
          this.createNotification(e5), ys.i.fire(us.MESSAGE_RECEIVED, t2), Ps.fire(ds.CS_MESSAGE_RECEIVED, t2);
        else {
          Do.getInstance().queryTeams().then(() => {
            xo.isMyMessage(t2) && this.createNotification(e5), ys.i.fire(us.CS_AGENT_MESSAGE_RECEIVED, t2);
          });
        }
      }
    }
  }
};
var zr = class {
  constructor(e5) {
    this.times = new Array();
    let t2 = e5[0], s2 = je.byIMMessage(t2);
    this.scene = s2.scene, this.targetId = s2.id, e5.forEach((e6) => {
      this.times.push(e6.timestamp);
    }), this.times.sort((e6, t3) => e6 < t3 ? -1 : e6 == t3 ? 0 : 1);
  }
};
var Wr = class {
  constructor() {
    this.onRemoteRecalled = (e5) => {
      ys.i.fire(us.MESSAGE_RECALLED, e5);
    }, _o.onMessage(Gt.IM_MSG_RECALLED, this.onRemoteRecalled);
  }
  recallMessage(e5) {
    return b(this, void 0, void 0, function* () {
      Tt(at, e5);
      let t2 = e5.messages;
      yield this.recallServerMessages(t2);
      let s2 = t2[0], i2 = s2.scene(), n2 = this.toConversationId(i2, s2.senderId, s2.targetId()), o2 = { id: te.Socket.user().id, data: te.Socket.user().data }, r2 = t2.map((e6) => e6.timestamp), a2 = new Os(i2, n2, o2, r2);
      ys.i.fire(us.MESSAGE_RECALLED, a2), v.onSuccess(e5);
    });
  }
  toConversationId(e5, t2, s2) {
    if (o.PRIVATE === e5)
      return function(e6, t3) {
        return e6.localeCompare(t3) > 0 ? `${e6}:${t3}` : `${t3}:${e6}`;
      }(t2, s2);
    if (o.GROUP === e5)
      return s2;
    throw { code: 400, content: `scene: ${e5} not support` };
  }
  recallServerMessages(e5) {
    let t2 = new zr(e5);
    return 0 === t2.times.length ? Promise.resolve() : new Promise((e6, s2) => {
      let i2 = new le({ name: y.IM_RECALL_MESSAGE, params: t2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e7) => {
        s2(e7);
      }, success: (t3) => {
        200 === t3.code ? e6(t3) : s2(t3);
      } });
      te.Socket.e(i2);
    });
  }
};
var Jr = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  getData(e5) {
    return this.map.get(e5);
  }
  setData(e5, t2) {
    this.map.set(e5, t2);
  }
};
var Xr = class _Xr {
  constructor() {
    this.dataCache = new Jr();
  }
  static init() {
    this.i = new _Xr();
  }
  getData(...e5) {
    return b(this, void 0, void 0, function* () {
      let t2 = [], s2 = /* @__PURE__ */ new Map();
      return e5.forEach((e6) => {
        let i2 = this.dataCache.getData(e6);
        i2 ? s2.set(e6, i2) : t2.push(e6);
      }), 0 === t2.length || (yield this.fetchData(...t2)).forEach((e6, t3) => {
        this.dataCache.setData(t3, e6), s2.set(t3, e6);
      }), Promise.resolve(s2);
    });
  }
  fetchData(...e5) {
    return new Promise((t2, s2) => {
      let i2 = new le({ name: y.MD_CMD, permission: ne.READ, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, params: { name: "GET", data: { ids: e5 } }, success: (e6) => {
        if (200 === e6.code) {
          const s3 = /* @__PURE__ */ new Map();
          e6.content.forEach((e7) => {
            s3.set(e7.id, e7.data);
          }), t2(s3);
        } else
          s2(e6);
      }, fail: (e6) => {
        s2(e6);
      } });
      te.Socket.e(i2);
    });
  }
  setData(e5, t2) {
    this.dataCache.setData(e5, t2);
  }
};
var $r = class {
  constructor() {
    ys.i.on(us.MESSAGE_RECEIVED, this.onMessageReceived), ys.i.on(us.MESSAGE_SENDING, this.onMessageSending);
  }
  onMessageSending(e5) {
    let t2 = je.byIMMessage(e5.message);
    t2.scene === o.PRIVATE && Xr.i.setData(t2.id, e5.receiver);
  }
  onMessageReceived(e5) {
    if (je.byIMMessage(e5).scene === o.GROUP) {
      let t2 = e5;
      Xr.i.setData(t2.senderId, t2.senderData);
    }
  }
};
var Yr = class _Yr {
  constructor() {
    this._iMReceiver = new Yo(), this.csMessageReceiver = new Hr(), this.memberDataUpdator = new $r(), this._userHereNow = new nr(), this.goEasyUploader = new cs(), this._groupHereNow = new sr(), this._groupOnlineCount = new er(), this.groupMessageSubscriber = new Qo(), this.messageBuilder = new Vr(), this.messageSender = new Es(), this.recaller = new Wr(), this._groupPresenceSubscriber = new Zo(), this._userPresenceSubscriber = new ir(), this.conversations = new Xo(), this.histories = Fo.init();
  }
  static init() {
    ys.init(), Ps.init(), _Yr.instance = new _Yr();
  }
  static i() {
    if (_Yr.instance)
      return _Yr.instance;
    throw Error("Please connect first.");
  }
  validateModules() {
    if (_o.status() === t.DISCONNECTED)
      throw Error("Please call connect() first.");
    Wo.check();
  }
  catch(e5, t2) {
    return b(this, void 0, void 0, function* () {
      try {
        this.validateModules(), yield e5();
      } catch (e6) {
        v.onFailed(t2, e6);
      }
    });
  }
  on(e5, t2) {
    Ps.on(e5, t2);
  }
  off(e5, t2) {
    Ps.off(e5, t2);
  }
  createTextMessage(e5) {
    return this.validateModules(), this.messageBuilder.buildMessage(Ee.TEXT, e5);
  }
  createImageMessage(e5) {
    return this.validateModules(), this.messageBuilder.buildMessage(Ee.IMAGE, e5);
  }
  createFileMessage(e5) {
    return this.validateModules(), this.messageBuilder.buildMessage(Ee.FILE, e5);
  }
  createAudioMessage(e5) {
    return this.validateModules(), this.messageBuilder.buildMessage(Ee.AUDIO, e5);
  }
  createVideoMessage(e5) {
    return this.validateModules(), this.messageBuilder.buildMessage(Ee.VIDEO, e5);
  }
  createCustomMessage(e5) {
    return this.validateModules(), this.messageBuilder.buildMessage(e5.type, e5);
  }
  sendMessage(e5) {
    this.catch(() => {
      this.messageSender.send(e5);
    }, e5);
  }
  recallMessage(e5) {
    this.catch(() => {
      this.recaller.recallMessage(e5);
    }, e5);
  }
  deleteMessage(e5) {
    this.catch(() => {
      this.histories.deleteMessage(e5);
    }, e5);
  }
  markGroupMessageAsRead(e5) {
    this.catch(() => b(this, void 0, void 0, function* () {
      yield this.histories.groupMarkAsRead(e5);
    }), e5);
  }
  markPrivateMessageAsRead(e5) {
    this.catch(() => b(this, void 0, void 0, function* () {
      yield this.histories.privateMarkAsRead(e5);
    }), e5);
  }
  markMessageAsRead(e5, t2) {
    this.catch(() => b(this, void 0, void 0, function* () {
      yield this.histories.markMessageAsRead(e5, t2);
    }), e5);
  }
  latestConversations(e5) {
    this.validateModules(), this.conversations.latestConversations(e5);
  }
  removePrivateConversation(e5) {
    this.catch(() => this.conversations.removePrivateConversation(e5), e5);
  }
  removeGroupConversation(e5) {
    this.catch(() => this.conversations.removeGroupConversation(e5), e5);
  }
  topPrivateConversation(e5) {
    this.catch(() => this.conversations.topPrivateConversation(e5), e5);
  }
  topGroupConversation(e5) {
    this.catch(() => this.conversations.topGroupConversation(e5), e5);
  }
  history(e5, t2) {
    this.catch(() => {
      this.histories.loadHistory(e5, t2);
    }, e5);
  }
  subscribeUserPresence(e5) {
    this.catch(() => this._userPresenceSubscriber.presence(e5), e5);
  }
  unsubscribeUserPresence(e5) {
    this.catch(() => this._userPresenceSubscriber.unPresence(e5), e5);
  }
  hereNow(e5) {
    this.catch(() => this._userHereNow.hereNow(e5), e5);
  }
  subscribeGroup(e5) {
    this.catch(() => this.groupMessageSubscriber.subscribe(e5), e5);
  }
  unsubscribeGroup(e5) {
    this.catch(() => this.groupMessageSubscriber.unsubscribe(e5), e5);
  }
  subscribeGroupPresence(e5) {
    this.catch(() => this._groupPresenceSubscriber.presence(e5), e5);
  }
  unsubscribeGroupPresence(e5) {
    this.catch(() => this._groupPresenceSubscriber.unPresence(e5), e5);
  }
  groupHereNow(e5) {
    this.catch(() => this._groupHereNow.hereNow(e5), e5);
  }
  groupOnlineCount(e5) {
    this.catch(() => this._groupOnlineCount.get(e5), e5);
  }
  latestPendingConversations(e5) {
    this.validateModules(), this.conversations.latestPendingConversations(e5);
  }
  topConversation(e5) {
    this.validateModules(), this.conversations.topConversation(e5);
  }
  removeConversation(e5) {
    this.validateModules(), this.conversations.removeConversation(e5);
  }
};
var Qr = class {
  constructor(e5, t2) {
    this.customerId = e5, this.teamId = t2;
  }
};
var Kr = class {
  constructor(e5, t2) {
    this.teamId = e5;
    let s2 = new c(t2.id.toString(), JSON.stringify(t2.data));
    this.customer = s2;
  }
};
var Zr = class {
  constructor(e5, t2, s2) {
    this.customerId = e5, this.teamId = t2, this.agentId = s2;
  }
};
var ea = class {
  constructor(e5, t2) {
    this.customerId = e5, this.teamId = t2;
  }
};
var ta = class {
  constructor(e5) {
    this.builder = new Ns(), this.teamId = e5;
  }
  accept(e5, t2) {
    Tt(gt, t2);
    let s2 = new Kr(e5, t2.customer), i2 = new le({ name: y.CS_ACCEPT, params: s2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e6) => {
      v.onFailed(t2, e6);
    }, success: (e6) => {
      let s3 = this.builder.build(e6.content.message);
      ys.i.fire(us.CS_ACCEPTED, s3), v.onSuccess(t2);
    } });
    te.Socket.e(i2);
  }
  end(e5, t2) {
    At(t2.id);
    let s2 = t2.id.toString(), i2 = new ea(s2, e5), n2 = new le({ name: y.CS_END, params: i2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e6) => {
      v.onFailed(t2, e6);
    }, success: (e6) => {
      let s3 = this.builder.build(e6.content.message);
      ys.i.fire(us.CS_ENDED, s3), v.onSuccess(t2);
    } });
    te.Socket.e(n2);
  }
  queryCustomerStatus(e5, t2) {
    return b(this, void 0, void 0, function* () {
      At(t2.id);
      let s2 = yield this.doCustomerStatus(e5, t2.id);
      this.activeCustomerStatus = s2, this.activeCustomerStatusOptions = t2, v.onSuccess(t2, s2);
    });
  }
  doCustomerStatus(e5, t2) {
    let s2 = t2.toString(), i2 = new Qr(s2, e5);
    return new Promise((e6, t3) => {
      let s3 = new le({ name: y.CS_CUSTOMER_STATUS, params: i2, permission: ne.READ, singleTimeout: S.commonQuerySingle, totalTimeout: S.commonQueryTotal, fail: (e7) => {
        t3(e7);
      }, success: (t4) => {
        let s4 = t4.content;
        s4.agent && (s4.agent.data = JSON.parse(s4.agent.data)), e6(s4);
      } });
      te.Socket.e(s3);
    });
  }
  transfer(e5, t2) {
    Tt(yt, t2);
    let s2 = t2.customerId.toString(), i2 = t2.agentId.toString(), n2 = new Zr(s2, e5, i2), o2 = new le({ name: y.CS_TRANSFER, params: n2, permission: ne.WRITE, singleTimeout: S.commonRequestSingle, totalTimeout: S.commonRequestTotal, fail: (e6) => {
      v.onFailed(t2, e6);
    }, success: (e6) => {
      let s3 = this.builder.build(e6.content.message);
      ys.i.fire(us.CS_TRANSFER, s3), v.onSuccess(t2);
    } });
    te.Socket.e(o2);
  }
};
var sa = class {
  createTextMessage(e5, t2) {
    let s2 = Yr.i().createTextMessage(t2);
    this.extendProps(e5, s2);
  }
  createImageMessage(e5, t2) {
    let s2 = Yr.i().createImageMessage(t2);
    this.extendProps(e5, s2);
  }
  createFileMessage(e5, t2) {
    let s2 = Yr.i().createFileMessage(t2);
    this.extendProps(e5, s2);
  }
  createAudioMessage(e5, t2) {
    let s2 = Yr.i().createAudioMessage(t2);
    this.extendProps(e5, s2);
  }
  createVideoMessage(e5, t2) {
    let s2 = Yr.i().createVideoMessage(t2);
    this.extendProps(e5, s2);
  }
  createCustomMessage(e5, t2) {
    let s2 = Yr.i().createCustomMessage(t2);
    this.extendProps(e5, s2);
  }
  extendProps(e5, t2) {
    if (t2.scene() === o.CS) {
      let s2 = t2;
      s2.teamId = e5, s2.accepted = true;
    }
  }
};
var ia = class {
  constructor(e5) {
    this.teamId = e5, this.agentStatus = Do.getInstance(), this.conversationHandler = new ta(e5), this.messageCreator = new sa();
  }
  catch(e5, t2) {
    return b(this, void 0, void 0, function* () {
      try {
        yield e5();
      } catch (e6) {
        v.onFailed(t2, e6);
      }
    });
  }
  isOnline(e5) {
    this.catch(() => {
      this.agentStatus.isOnline(this.teamId, e5);
    }, e5);
  }
  online(e5) {
    this.catch(() => {
      this.agentStatus.online(this.teamId, e5);
    }, e5);
  }
  offline(e5) {
    this.catch(() => {
      this.agentStatus.offline(this.teamId, e5);
    }, e5);
  }
  customerStatus(e5) {
    this.catch(() => {
      this.conversationHandler.queryCustomerStatus(this.teamId, e5);
    }, e5);
  }
  accept(e5) {
    this.catch(() => {
      this.conversationHandler.accept(this.teamId, e5);
    }, e5);
  }
  end(e5) {
    this.catch(() => {
      this.conversationHandler.end(this.teamId, e5);
    }, e5);
  }
  history(e5) {
    Yr.i().history(e5, this.teamId);
  }
  markMessageAsRead(e5) {
    Yr.i().markMessageAsRead(e5, this.teamId);
  }
  createTextMessage(e5) {
    this.messageCreator.createTextMessage(this.teamId, e5);
  }
  createImageMessage(e5) {
    this.messageCreator.createImageMessage(this.teamId, e5);
  }
  createFileMessage(e5) {
    this.messageCreator.createFileMessage(this.teamId, e5);
  }
  createAudioMessage(e5) {
    this.messageCreator.createAudioMessage(this.teamId, e5);
  }
  createVideoMessage(e5) {
    this.messageCreator.createVideoMessage(this.teamId, e5);
  }
  createCustomMessage(e5) {
    this.messageCreator.createCustomMessage(this.teamId, e5);
  }
  transfer(e5) {
    this.catch(() => {
      this.conversationHandler.transfer(this.teamId, e5);
    }, e5);
  }
  agents(e5) {
    this.catch(() => {
      this.agentStatus.agents(this.teamId, e5);
    }, e5);
  }
  liveSession(e5) {
    this.catch(() => {
      xo.live(this.teamId, e5);
    }, e5);
  }
  quitLiveSession(e5) {
    this.catch(() => {
      xo.quit(e5);
    }, e5);
  }
  listenCustomer(e5) {
    let t2 = { customerId: e5.id, onNewMessage: e5.onNewMessage, onStatusUpdated: e5.onStatusUpdated, onFailed: e5.onFailed, onSuccess: e5.onSuccess };
    this.catch(() => {
      xo.live(this.teamId, t2);
    }, e5);
  }
  cancelListenCustomer(e5) {
    this.catch(() => {
      xo.quit(e5);
    }, e5);
  }
};
var na = class {
  static team(e5) {
    Rt(e5);
    let t2 = this.teams.get(e5);
    return t2 || (t2 = new ia(e5.toString()), this.teams.set(e5.toString(), t2)), t2;
  }
};
na.teams = /* @__PURE__ */ new Map();
var oa = class {
  constructor(e5) {
    this.id = e5;
  }
  isOnline(e5) {
    na.team(this.id).isOnline(e5);
  }
  online(e5) {
    na.team(this.id).online(e5);
  }
  offline(e5) {
    na.team(this.id).offline(e5);
  }
  customerStatus(e5) {
    na.team(this.id).customerStatus(e5);
  }
  accept(e5) {
    na.team(this.id).accept(e5);
  }
  end(e5) {
    na.team(this.id).end(e5);
  }
  history(e5) {
    na.team(this.id).history(e5);
  }
  markMessageAsRead(e5) {
    na.team(this.id).markMessageAsRead(e5);
  }
  createTextMessage(e5) {
    na.team(this.id).createTextMessage(e5);
  }
  createImageMessage(e5) {
    na.team(this.id).createImageMessage(e5);
  }
  createFileMessage(e5) {
    na.team(this.id).createFileMessage(e5);
  }
  createAudioMessage(e5) {
    na.team(this.id).createAudioMessage(e5);
  }
  createVideoMessage(e5) {
    na.team(this.id).createVideoMessage(e5);
  }
  createCustomMessage(e5) {
    na.team(this.id).createCustomMessage(e5);
  }
  transfer(e5) {
    na.team(this.id).transfer(e5);
  }
  agents(e5) {
    na.team(this.id).agents(e5);
  }
  liveSession(e5) {
    na.team(this.id).liveSession(e5);
  }
  quitLiveSession(e5) {
    na.team(this.id).quitLiveSession(e5);
  }
  listenCustomer(e5) {
    na.team(this.id).listenCustomer(e5);
  }
  cancelListenCustomer(e5) {
    na.team(this.id).cancelListenCustomer(e5);
  }
};
var ra = class _ra {
  static getInstance(e5) {
    return this.init(e5), _ra;
  }
  static init(e5) {
    if (this.getConnectionStatus() !== t.DISCONNECTED)
      throw new Error("Initialization failed. Please disconnect and try again.");
    Tt($e, e5), e5.modules = e5.modules.map((e6) => e6.toUpperCase()), i.init(e5.reactNativeOptions), this.options = e5, _o.init(e5), e5.allowNotification && he.init(e5.allowNotification), e5.modules && (e5.modules.includes("PUBSUB") && X.initModule(Wt.init()), e5.modules.includes("IM") && X.initModule(Wo.init())), Xr.init(), te.init(_o, he, Xr, n, h, X), this.options.customProvider && _s.init(this.options.customProvider);
  }
  static setBadge(e5) {
    he.setBadge(e5);
  }
  static connect(e5) {
    _o.connect(e5, "JS");
  }
  static disconnect(e5) {
    _o.disconnect(e5);
  }
  static getConnectionStatus() {
    return _o.status();
  }
  static onClickNotification(e5) {
    he.onClickNotification(e5);
  }
  static c(e5) {
    e5.init(te.Socket, te.N, te.Member, te.v, te.Platform, X);
  }
};
ra.version = n, ra.IM_EVENT = ds, ra.IM_SCENE = o, ra.im = class {
  static on(e5, t2) {
    Yr.i().on(e5, t2);
  }
  static off(e5, t2) {
    Yr.i().off(e5, t2);
  }
  static createTextMessage(e5) {
    return Yr.i().createTextMessage(e5);
  }
  static createImageMessage(e5) {
    return Yr.i().createImageMessage(e5);
  }
  static createFileMessage(e5) {
    return Yr.i().createFileMessage(e5);
  }
  static createAudioMessage(e5) {
    return Yr.i().createAudioMessage(e5);
  }
  static createVideoMessage(e5) {
    return Yr.i().createVideoMessage(e5);
  }
  static createCustomMessage(e5) {
    return Yr.i().createCustomMessage(e5);
  }
  static sendMessage(e5) {
    Yr.i().sendMessage(e5);
  }
  static recallMessage(e5) {
    Yr.i().recallMessage(e5);
  }
  static deleteMessage(e5) {
    Yr.i().deleteMessage(e5);
  }
  static markGroupMessageAsRead(e5) {
    Yr.i().markGroupMessageAsRead(e5);
  }
  static markPrivateMessageAsRead(e5) {
    Yr.i().markPrivateMessageAsRead(e5);
  }
  static latestConversations(e5) {
    Yr.i().latestConversations(e5);
  }
  static removePrivateConversation(e5) {
    Yr.i().removePrivateConversation(e5);
  }
  static removeGroupConversation(e5) {
    Yr.i().removeGroupConversation(e5);
  }
  static topPrivateConversation(e5) {
    Yr.i().topPrivateConversation(e5);
  }
  static topGroupConversation(e5) {
    Yr.i().topGroupConversation(e5);
  }
  static history(e5) {
    Yr.i().history(e5);
  }
  static subscribeUserPresence(e5) {
    Yr.i().subscribeUserPresence(e5);
  }
  static unsubscribeUserPresence(e5) {
    Yr.i().unsubscribeUserPresence(e5);
  }
  static hereNow(e5) {
    Yr.i().hereNow(e5);
  }
  static subscribeGroup(e5) {
    Yr.i().subscribeGroup(e5);
  }
  static unsubscribeGroup(e5) {
    Yr.i().unsubscribeGroup(e5);
  }
  static subscribeGroupPresence(e5) {
    Yr.i().subscribeGroupPresence(e5);
  }
  static unsubscribeGroupPresence(e5) {
    Yr.i().unsubscribeGroupPresence(e5);
  }
  static groupHereNow(e5) {
    Yr.i().groupHereNow(e5);
  }
  static groupOnlineCount(e5) {
    Yr.i().groupOnlineCount(e5);
  }
  static markMessageAsRead(e5) {
    Yr.i().markMessageAsRead(e5);
  }
  static csteam(e5) {
    return new oa(e5);
  }
  static pendingConversations(e5) {
    Yr.i().latestPendingConversations(e5);
  }
  static topConversation(e5) {
    Yr.i().topConversation(e5);
  }
  static removeConversation(e5) {
    Yr.i().removeConversation(e5);
  }
}, ra.pubsub = class {
  static publish(e5) {
    this.catch(() => {
      zt.instance.publish(e5);
    }, e5);
  }
  static subscribe(e5) {
    this.catch(() => {
      zt.instance.subscribe(e5);
    }, e5);
  }
  static unsubscribe(e5) {
    this.catch(() => {
      zt.instance.unsubscribe(e5);
    }, e5);
  }
  static subscribePresence(e5) {
    this.catch(() => {
      zt.instance.subscribePresence(e5);
    }, e5);
  }
  static unsubscribePresence(e5) {
    this.catch(() => {
      zt.instance.unsubscribePresence(e5);
    }, e5);
  }
  static history(e5) {
    this.catch(() => {
      zt.instance.history(e5);
    }, e5);
  }
  static hereNow(e5) {
    this.catch(() => {
      zt.instance.hereNow(e5);
    }, e5);
  }
  static catch(e5, s2) {
    try {
      if (Wt.check(), [t.DISCONNECTED, t.DISCONNECTING, t.CONNECT_FAILED].includes(te.Socket.status()))
        throw new Error("Please call connect() first.");
      e5();
    } catch (e6) {
      v.onFailed(s2, e6);
    }
  }
};
export {
  ra as default
};
//# sourceMappingURL=goeasy.js.map
