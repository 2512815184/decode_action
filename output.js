//Tue Mar 18 2025 14:03:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function (_0x57c7e5, _0x32f6e8) {
  "object" == typeof exports && "undefined" != typeof module ? _0x32f6e8(exports) : "function" == typeof define && define.amd ? define(["exports"], _0x32f6e8) : _0x32f6e8(_0x57c7e5.aerosmith = {});
}(this, function (_0x3a4f59) {
  "use strict";

  var _0x586142 = function () {
    var _0x4ff738 = new Object();
    var _0x2312b1 = function (_0x10794a) {
      var _0x118e1b = document.getElementsByTagName("script");
      return Array.from(_0x118e1b).find(function (_0x57f9d4) {
        return _0x10794a.test(_0x57f9d4.src);
      });
    }(/aerosmith(.min)?.js/);
    _0x2312b1 && new URLSearchParams(_0x2312b1.src.split("?")[1]).forEach(function (_0x53eb12, _0xff247b) {
      _0x4ff738[_0xff247b] = _0x53eb12;
    });
    return _0x4ff738;
  };
  var _0x1b6d8c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x73d38e) {
    return typeof _0x73d38e;
  } : function (_0x15fcf4) {
    return _0x15fcf4 && "function" == typeof Symbol && _0x15fcf4.constructor === Symbol && _0x15fcf4 !== Symbol.prototype ? "symbol" : typeof _0x15fcf4;
  };
  (function () {
    function _0x658501(_0x3ed453) {
      this.value = _0x3ed453;
    }
    function _0x3099ef(_0x567658) {
      var _0x4ed452;
      var _0x47e0d2;
      function _0x33ec13(_0x3331bb, _0xf32178) {
        try {
          var _0x2163d6 = _0x567658[_0x3331bb](_0xf32178);
          var _0x12cdf4 = _0x2163d6.value;
          _0x12cdf4 instanceof _0x658501 ? Promise.resolve(_0x12cdf4.value).then(function (_0x19312d) {
            _0x33ec13("next", _0x19312d);
          }, function (_0xf41289) {
            _0x33ec13("throw", _0xf41289);
          }) : _0x1fba51(_0x2163d6.done ? "return" : "normal", _0x2163d6.value);
        } catch (_0x4fc901) {
          _0x1fba51("throw", _0x4fc901);
        }
      }
      function _0x1fba51(_0x4910c5, _0x239402) {
        switch (_0x4910c5) {
          case "return":
            _0x4ed452.resolve({
              value: _0x239402,
              done: true
            });
            break;
          case "throw":
            _0x4ed452.reject(_0x239402);
            break;
          default:
            _0x4ed452.resolve({
              value: _0x239402,
              done: false
            });
        }
        (_0x4ed452 = _0x4ed452.next) ? _0x33ec13(_0x4ed452.key, _0x4ed452.arg) : _0x47e0d2 = null;
      }
      this._invoke = function (_0x10e196, _0x21788a) {
        return new Promise(function (_0x20d604, _0x11f42e) {
          var _0x252b4e = {
            key: _0x10e196,
            arg: _0x21788a,
            resolve: _0x20d604,
            reject: _0x11f42e,
            next: null
          };
          _0x47e0d2 ? _0x47e0d2 = _0x47e0d2.next = _0x252b4e : (_0x4ed452 = _0x47e0d2 = _0x252b4e, _0x33ec13(_0x10e196, _0x21788a));
        });
      };
      "function" != typeof _0x567658.return && (this.return = undefined);
    }
    "function" == typeof Symbol && Symbol.asyncIterator && (_0x3099ef.prototype[Symbol.asyncIterator] = function () {
      return this;
    });
    _0x3099ef.prototype.next = function (_0x233017) {
      return this._invoke("next", _0x233017);
    };
    _0x3099ef.prototype.throw = function (_0x419b8e) {
      return this._invoke("throw", _0x419b8e);
    };
    _0x3099ef.prototype.return = function (_0x3d4657) {
      return this._invoke("return", _0x3d4657);
    };
  })();
  var _0x3e84e5 = function (_0x296bf5, _0x3f8e09) {
    if (!(_0x296bf5 instanceof _0x3f8e09)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var _0x13f557 = function () {
    function _0x488a0e(_0x3feb7e, _0x1a2dcf) {
      for (var _0x5951ee = 0; _0x5951ee < _0x1a2dcf.length; _0x5951ee++) {
        var _0x3017b2 = _0x1a2dcf[_0x5951ee];
        _0x3017b2.enumerable = _0x3017b2.enumerable || false;
        _0x3017b2.configurable = true;
        "value" in _0x3017b2 && (_0x3017b2.writable = true);
        Object.defineProperty(_0x3feb7e, _0x3017b2.key, _0x3017b2);
      }
    }
    return function (_0x42b652, _0x312cb5, _0x60522f) {
      _0x312cb5 && _0x488a0e(_0x42b652.prototype, _0x312cb5);
      _0x60522f && _0x488a0e(_0x42b652, _0x60522f);
      return _0x42b652;
    };
  }();
  var _0x3fc534 = Object.assign || function (_0x457d6e) {
    for (var _0x3b995b = 1; _0x3b995b < arguments.length; _0x3b995b++) {
      var _0x293428 = arguments[_0x3b995b];
      for (var _0x5ec8c3 in _0x293428) Object.prototype.hasOwnProperty.call(_0x293428, _0x5ec8c3) && (_0x457d6e[_0x5ec8c3] = _0x293428[_0x5ec8c3]);
    }
    return _0x457d6e;
  };
  var _0x46657f = function (_0xf9fc2d, _0x55e639) {
    if (Array.isArray(_0xf9fc2d)) {
      return _0xf9fc2d;
    }
    if (Symbol.iterator in Object(_0xf9fc2d)) {
      return function (_0xc0701a, _0xda11ad) {
        var _0x4f037e = [];
        var _0x2c7e9a = true;
        var _0x173829 = false;
        var _0x43fa11 = undefined;
        try {
          for (var _0x298cb0, _0x4b45a7 = _0xc0701a[Symbol.iterator](); !(_0x2c7e9a = (_0x298cb0 = _0x4b45a7.next()).done) && (_0x4f037e.push(_0x298cb0.value), !_0xda11ad || _0x4f037e.length !== _0xda11ad); _0x2c7e9a = true) {}
        } catch (_0xf43378) {
          _0x173829 = true;
          _0x43fa11 = _0xf43378;
        } finally {
          try {
            !_0x2c7e9a && _0x4b45a7.return && _0x4b45a7.return();
          } finally {
            if (_0x173829) {
              throw _0x43fa11;
            }
          }
        }
        return _0x4f037e;
      }(_0xf9fc2d, _0x55e639);
    }
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  var _0x1c27e8 = new (function () {
    function _0x14a431() {
      _0x3e84e5(this, _0x14a431);
    }
    _0x13f557(_0x14a431, [{
      key: "params",
      set: function (_0x5ddc12) {
        this._params = _0x5ddc12;
        this._baseurl = "https://travel.fraudprevention.jp";
        this._logger_config = {
          clientToken: "pub4bc6aa2f7b92c061f5850bfa6307e5d6",
          site: "datadoghq.com",
          forwardErrorsToLogs: false,
          sampleRate: 100,
          service: "clientjs-production"
        };
      },
      get: function () {
        return this._params;
      }
    }, {
      key: "baseurl",
      get: function () {
        return this._baseurl;
      }
    }, {
      key: "apiurl",
      get: function () {
        return this._baseurl + "/api";
      }
    }, {
      key: "loggerConfig",
      get: function () {
        return this._logger_config;
      }
    }, {
      key: "loggerVerbose",
      get: function () {
        return false;
      }
    }]);
    return _0x14a431;
  }())();
  var _0x320bab = function () {
    function _0x25d840(_0x5b045b, _0x2092b4) {
      _0x3e84e5(this, _0x25d840);
      this._isVerbose = _0x5b045b;
      this._useNetLogger = _0x2092b4;
    }
    _0x13f557(_0x25d840, [{
      key: "_sendToDatadog",
      value: function (_0x21a7e5, _0x8166bc) {
        var _0xd61a60 = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
        var _0x2283e6 = _0x3fc534({
          aId: this._aId,
          bId: this._bId
        }, _0xd61a60);
        window.DD_LOGS && window.DD_LOGS.logger.log(_0x21a7e5, _0x2283e6, _0x8166bc);
      }
    }, {
      key: "_logToConsole",
      value: function (_0x4d95e3, _0xb8bd8f, _0x4a9195) {
        this._isVerbose && console && undefined !== console.log && (null == _0x4a9195 ? console.log(_0x4d95e3, _0xb8bd8f) : console.log(_0x4d95e3, _0xb8bd8f, _0x4a9195));
      }
    }, {
      key: "log",
      value: function (_0x46fd38, _0x5b5616) {
        this._logToConsole("[A30]", _0x46fd38, _0x5b5616);
        this._useNetLogger && this._sendToDatadog("[A30] " + _0x46fd38, "info", _0x5b5616);
      }
    }, {
      key: "logWarn",
      value: function (_0x331377, _0x6238a9) {
        this._logToConsole("[A30]", _0x331377, _0x6238a9);
        this._useNetLogger && this._sendToDatadog("[A30] " + _0x331377, "warn", _0x6238a9);
      }
    }, {
      key: "logError",
      value: function (_0x242d04, _0x3e8d33) {
        this._logToConsole("[A30]", _0x242d04, _0x3e8d33);
        this._useNetLogger && this._sendToDatadog("[A30] " + _0x242d04, "error", _0x3e8d33);
      }
    }, {
      key: "logException",
      value: function (_0x2aa94f, _0x50113e) {
        this.logError(_0x2aa94f, {
          detail: _0x50113e.toString()
        });
      }
    }, {
      key: "isVerbose",
      set: function (_0x86acb5) {
        this._isVerbose = _0x86acb5;
      }
    }, {
      key: "aId",
      set: function (_0x21d9ef) {
        this._aId = _0x21d9ef;
      }
    }, {
      key: "bId",
      set: function (_0xffd4ac) {
        this._bId = _0xffd4ac;
      }
    }]);
    return _0x25d840;
  }();
  var _0x48a244 = new _0x320bab();
  var _0x18b87d = new _0x320bab(false, true);
  var _0x1cbc53 = {
    logger: _0x48a244,
    netLogger: _0x18b87d
  };
  var _0x19bf42 = function () {
    function _0x12ce21() {
      _0x3e84e5(this, _0x12ce21);
    }
    _0x13f557(_0x12ce21, [{
      key: "load",
      value: function () {
        _0x204b6d("ddlogs", "//www.datadoghq-browser-agent.com/datadog-logs-v3.js", function () {
          window.DD_LOGS && window.DD_LOGS.init(_0x1c27e8.loggerConfig);
          var _0x15561c = {
            browser: {
              ua: navigator.userAgent
            }
          };
          _0x18b87d.log("1-1: loaded ddlogs.", _0x15561c);
        });
      }
    }]);
    return _0x12ce21;
  }();
  var _0x204b6d = function (_0x441f71, _0x162e45, _0x4909b7) {
    var _0x4d8ad6 = document.createElement("script");
    _0x4d8ad6.onload = function () {
      _0x4909b7();
    };
    _0x4d8ad6.onerror = function () {
      _0x18b87d.logError("error in loading js. url: " + _0x162e45);
    };
    _0x4d8ad6.charset = "UTF-8";
    _0x4d8ad6.type = "text/javascript";
    _0x4d8ad6.src = _0x162e45;
    undefined !== _0x4d8ad6 && document.getElementsByTagName("head")[0].appendChild(_0x4d8ad6);
  };
  var _0x380c6d = function () {
    function _0x58c66e() {
      _0x3e84e5(this, _0x58c66e);
    }
    _0x13f557(_0x58c66e, [{
      key: "construnctor",
      value: function () {
        this._result = null;
      }
    }, {
      key: "result",
      set: function (_0x4de63c) {
        this._result = _0x4de63c;
      },
      get: function () {
        return this._result;
      }
    }]);
    return _0x58c66e;
  }();
  var _0x5307d2 = new _0x380c6d();
  var _0x2f2eed = new (function () {
    function _0x4d4ddb() {
      _0x3e84e5(this, _0x4d4ddb);
    }
    _0x13f557(_0x4d4ddb, [{
      key: "construnctor",
      value: function () {
        this._data = null;
      }
    }, {
      key: "data",
      set: function (_0x4bb5e3) {
        this._data = _0x4bb5e3;
      },
      get: function () {
        return this._data;
      }
    }]);
    return _0x4d4ddb;
  }())();
  var _0x5eade9 = new (function () {
    function _0xee264d() {
      _0x3e84e5(this, _0xee264d);
    }
    _0x13f557(_0xee264d, [{
      key: "checkJsFormat",
      value: function (_0x59628c) {
        var _0x23acdc = null;
        if ("" === _0x59628c || null == _0x59628c) {
          this._isJsFormat = false;
          return this.isJsFormat;
        }
        try {
          "object" === (undefined === _0x59628c ? "undefined" : _0x1b6d8c(_0x59628c)) ? (_0x23acdc = JSON.parse(JSON.stringify(_0x59628c)), this._isJsFormat = false) : "string" == typeof _0x59628c ? (_0x23acdc = JSON.parse(_0x59628c), this._isJsFormat = false) : this._isJsFormat = true;
        } catch (_0x5c9a87) {
          console.log("checkJsFormat error", _0x23acdc);
          this._isJsFormat = true;
        }
        return this.isJsFormat;
      }
    }, {
      key: "data",
      set: function (_0x511404) {
        this._data = _0x511404;
      },
      get: function () {
        return this._data;
      }
    }, {
      key: "isJsFormat",
      get: function () {
        return this._isJsFormat;
      }
    }]);
    return _0xee264d;
  }())();
  var _0x31a37 = new (function () {
    function _0x18a221() {
      _0x3e84e5(this, _0x18a221);
      this._bID = "";
      this._cookieName = "sctvaspcookie";
    }
    _0x13f557(_0x18a221, [{
      key: "setBID",
      value: function (_0x4bb242) {
        this._bID = this.findBID();
        this.bID.length < 1 && (this._bID = this._createBID());
        this._writeOrUpDateCookie(_0x4bb242);
      }
    }, {
      key: "_writeOrUpDateCookie",
      value: function (_0xe62392) {
        var _0x50f07a = new Date();
        _0x50f07a.setTime(_0x50f07a.getTime() + 31536000000);
        var _0x20404c = _0x50f07a.toUTCString();
        document.cookie = this._cookieName + "=" + encodeURIComponent(this.bID) + ";expires=" + _0x20404c;
        this._checkStatusAndStop(_0xe62392);
      }
    }, {
      key: "_checkStatusAndStop",
      value: function (_0x37c648) {
        var _0xed6361 = this;
        _0x48a244.log("waiting key");
        try {
          undefined !== this.bID ? (_0x18b87d.log("1-4: end create BId"), _0x37c648()) : setTimeout(function () {
            return _0xed6361._checkStatusAndStop(_0x37c648);
          }, 1000);
        } catch (_0x28de26) {
          _0x18b87d.logException("1-4: exception occured in checkStatusAndStop", _0x28de26);
        }
      }
    }, {
      key: "_createBID",
      value: function () {
        var _0x46097f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
        var _0x244821 = Array.from({
          length: 17
        }, function () {
          return _0x46097f[Math.floor(Math.random() * _0x46097f.length)];
        }).join("");
        var _0x655f45 = new Date();
        var _0x2ed84a = _0x655f45.getFullYear() + (_0x655f45.getMonth() + 1).toString().padStart(2, "0") + _0x655f45.getDate().toString().padStart(2, "0") + _0x655f45.getHours().toString().padStart(2, "0") + _0x655f45.getMinutes().toString().padStart(2, "0") + _0x655f45.getSeconds().toString().padStart(2, "0") + _0x655f45.getMilliseconds().toString().padStart(3, "0");
        _0x18b87d.log("1-4-2: BrowserID created");
        return _0x2ed84a.concat(_0x244821);
      }
    }, {
      key: "findBID",
      value: function () {
        if ("undefined" == typeof document) {
          return "";
        }
        var _0x2ce3b2 = document.cookie.split("; ");
        var _0x4c7061 = true;
        var _0x56efd1 = false;
        var _0x5f0aa9 = undefined;
        try {
          for (var _0x4695e5, _0x29b4c8 = _0x2ce3b2[Symbol.iterator](); !(_0x4c7061 = (_0x4695e5 = _0x29b4c8.next()).done); _0x4c7061 = true) {
            var _0x3a8f8c = _0x4695e5.value.split("=");
            var _0xc408d7 = _0x46657f(_0x3a8f8c, 2);
            var _0x3d8cb2 = _0xc408d7[0];
            var _0x348df8 = _0xc408d7[1];
            if (_0x3d8cb2 === this._cookieName) {
              var _0x12b6de = decodeURIComponent(_0x348df8);
              if (_0x12b6de && "null" !== _0x12b6de && "undefined" !== _0x12b6de) {
                _0x18b87d.log("1-4-1: found browserid in cookies");
                return _0x12b6de;
              }
              break;
            }
          }
        } catch (_0x925678) {
          _0x56efd1 = true;
          _0x5f0aa9 = _0x925678;
        } finally {
          try {
            !_0x4c7061 && _0x29b4c8.return && _0x29b4c8.return();
          } finally {
            if (_0x56efd1) {
              throw _0x5f0aa9;
            }
          }
        }
        return "";
      }
    }, {
      key: "bID",
      get: function () {
        return this._bID;
      }
    }]);
    return _0x18a221;
  }())();
  var _0x1f66d9 = function () {
    function _0x1e7841() {
      _0x3e84e5(this, _0x1e7841);
    }
    _0x13f557(_0x1e7841, [{
      key: "load",
      value: function () {
        _0x18b87d.log("1-6-1: start perfume.");
        var _0x4f4bb6 = this;
        PerfumeJS.load().then(function (_0x4f4f9d) {
          return _0x4f4f9d.get();
        }).then(function (_0x47b300) {
          _0x4f4bb6.version = _0x47b300.version;
          _0x4f4bb6.visitor_id = _0x47b300.visitorId;
          _0x4f4bb6.components = _0x47b300.components;
          _0x4f4bb6.components.webGl.value = PerfumeJS.murmurX64Hash128(_0x47b300.components.webGl.value.toString());
          _0x4f4bb6.components.canvas.value.geometry = PerfumeJS.murmurX64Hash128(_0x47b300.components.canvas.value.geometry.toString());
          _0x4f4bb6.components.canvas.value.text = PerfumeJS.murmurX64Hash128(_0x47b300.components.canvas.value.text.toString());
          _0x4f4bb6.components.fonts.digest = PerfumeJS.murmurX64Hash128(_0x47b300.components.fonts.value.join());
          window.dispatchEvent(new CustomEvent("as-readytoscorewithvid"));
          _0x18b87d.log("1-6-2: end perfume.");
        });
      }
    }]);
    return _0x1e7841;
  }();
  var _0x407a31 = new _0x1f66d9();
  var _0x1f17cb = function () {
    var _0x6c046a = new Date().getFullYear();
    return Math.max(new Date(_0x6c046a, 0, 1).getTimezoneOffset(), new Date(_0x6c046a, 6, 1).getTimezoneOffset());
  };
  var _0x436d18 = function () {
    function _0x50e03b() {
      _0x3e84e5(this, _0x50e03b);
    }
    _0x13f557(_0x50e03b, [{
      key: "construnctor",
      value: function () {
        this._result = null;
      }
    }, {
      key: "result",
      set: function (_0x6c8cbd) {
        this._result = _0x6c8cbd;
      },
      get: function () {
        return this._result;
      }
    }]);
    return _0x50e03b;
  }();
  var _0x2394df = new _0x436d18();
  var _0x5c65e1 = function () {
    function _0x507d5b() {
      _0x3e84e5(this, _0x507d5b);
      this._values = new Object();
    }
    _0x13f557(_0x507d5b, [{
      key: "save_cookies",
      value: function () {
        if (!(undefined === this._values.key || null == this._values.key || this._values.key.length < 1)) {
          try {
            document.cookie = _0x507d5b.keyName + this._values.key + ";path=/;max-age=86400;samesite=strict;";
          } catch (_0x21e6b2) {
            _0x18b87d.logException("Failed to save the cookie.", _0x21e6b2);
          }
        }
      }
    }, {
      key: "reset_cookies",
      value: function () {
        document.cookie = _0x507d5b.keyName + "=;path=/;max-age=0;samesite=strict;";
      }
    }, {
      key: "values",
      set: function (_0x331184) {
        this._values = _0x331184;
      },
      get: function () {
        return this._values;
      }
    }, {
      key: "key",
      get: function () {
        try {
          var _0x224ad2 = document.cookie.split("; ").find(function (_0x1cadf7) {
            return _0x1cadf7.startsWith(_0x507d5b.keyName);
          });
          return _0x224ad2 ? _0x224ad2.split("=")[1].split(";")[0] : "";
        } catch (_0x3eaace) {
          _0x18b87d.logException("Didn't get key from result.", _0x3eaace);
          return "";
        }
      }
    }]);
    return _0x507d5b;
  }();
  _0x5c65e1.keyName = "_ask_scokey=";
  var _0x2d3b8f = new _0x5c65e1();
  var _0x2166d9 = "aerosmith-alert";
  var _0x1966d7 = "aerosmith-choices";
  var _0x19b980 = "aerosmith-ddds";
  var _0x280d50 = function (_0x1b2621, _0xa3b7f6, _0x3ef96a) {
    _0x18b87d.log("start showIFrameDialog");
    var _0x155433 = _0x17c235(_0x1b2621);
    _0x155433.src = _0xa3b7f6;
    _0x155433.onload = function () {
      _0x3ef96a(_0x155433);
    };
    document.body.appendChild(_0x155433);
    _0x155433.src = _0xa3b7f6;
    _0x1be41a(_0x1b2621, true);
    _0x18b87d.log("end showIFrameDialog");
  };
  var _0x368600 = function (_0x2c7705, _0x4faff5, _0x2666d2) {
    _0x18b87d.log("start postMessageToIFrame");
    _0x2c7705.postMessage({
      event_id: _0x4faff5,
      data: _0x2666d2
    }, _0x1c27e8.baseurl);
    _0x18b87d.log("end postMessageToIFrame");
  };
  var _0x1be41a = function (_0x2a9ebb, _0xd8ebbb) {
    _0x18b87d.log("start displayDialog");
    var _0x3beb7e = document.getElementById(_0x2a9ebb);
    null !== _0x3beb7e && (_0x3beb7e.style.display = _0xd8ebbb ? "block" : "none");
    _0x18b87d.log("end displayDialog");
  };
  var _0x168b79 = function (_0x1a7298) {
    _0x18b87d.log("start getEventName: " + _0x1a7298.data);
    return "string" == typeof _0x1a7298.data ? (_0x1a7298.data || "").split("|")[0] : (_0x18b87d.log("event.data is not string. type: " + _0x1b6d8c(_0x1a7298.data) + ", event.data: " + JSON.stringify(_0x1a7298.data)), "");
  };
  var _0x119c48 = function (_0x2ba0f1) {
    if (_0x18b87d.log("start getEventName: " + _0x2ba0f1.data), "string" == typeof _0x2ba0f1.data) {
      if (!_0x2ba0f1.data) {
        return "";
      }
      var _0x31b919 = _0x2ba0f1.data.split("|");
      return 1 === _0x31b919.length ? "" : _0x31b919[1];
    }
    _0x18b87d.log("event.data is not string. type: " + _0x1b6d8c(_0x2ba0f1.data) + ", event.data: " + JSON.stringify(_0x2ba0f1.data));
    return "";
  };
  var _0x17e6ab = function () {
    _0x1be41a(_0x1966d7, false);
  };
  var _0x19b260 = function (_0x11928b, _0x2d27fe) {
    var _0x59673e = _0x11928b.data;
    var _0x540882 = _0x59673e.reason_code;
    var _0x1786ae = _0x59673e.ddds_res;
    var _0x37e12f = undefined === _0x1786ae ? {
      dddEci: "07"
    } : _0x1786ae;
    var _0x46aa5f = _0x59673e.msg;
    var _0x207f3a = undefined === _0x46aa5f ? "" : _0x46aa5f;
    _0x1be41a(_0x19b980, false);
    _0x18b87d.log(_0x540882 + ": received (dddEci: " + _0x37e12f.dddEci + "). " + _0x207f3a);
    "EMVAF" === _0x540882 && (_0x2394df.result = "failed3ds", _0x5307d2.result = "failed");
    var _0x408836 = {
      EMVPS: _0x2d27fe.runEMVPS.bind(_0x2d27fe),
      EMVMM: _0x2d27fe.runEMVMM.bind(_0x2d27fe),
      EMVAF: _0x2d27fe.runEMVAF.bind(_0x2d27fe),
      EMVAT: _0x2d27fe.runEMVAT.bind(_0x2d27fe),
      EMVEA: _0x2d27fe.runEMVEA.bind(_0x2d27fe),
      EMVEC: _0x2d27fe.runEMVEC.bind(_0x2d27fe),
      EMVPE: _0x2d27fe.runEMVPE.bind(_0x2d27fe),
      EMVTO: _0x2d27fe.runEMVTO.bind(_0x2d27fe)
    }[_0x540882];
    _0x408836 && _0x408836(_0x37e12f);
  };
  var _0x2de57e = function (_0x507038) {
    var _0x172c6b = document.getElementById(_0x507038);
    _0x172c6b.src = _0x172c6b.src;
  };
  var _0x17c235 = function (_0x1a610c) {
    var _0x5de594 = document.getElementById(_0x1a610c);
    null !== _0x5de594 || ((_0x5de594 = document.createElement("iframe")).id = _0x1a610c, _0x5de594.style.display = "none", _0x5de594.style.position = "fixed", _0x5de594.style.width = "100%", _0x5de594.style.height = "100%", _0x5de594.style.top = "0", _0x5de594.style.left = "0", _0x5de594.style.right = "0", _0x5de594.style.bottom = "0", _0x5de594.style.border = "0px", _0x5de594.style.zIndex = "99999", _0x5de594.style.cursor = "pointer");
    return _0x5de594;
  };
  var _0x15adde = function () {
    function _0x25d969(_0x410f8a, _0x2bb00e) {
      _0x3e84e5(this, _0x25d969);
      _0x48a244.log("FailSafeTimer: init.");
      this._isTimedOut = false;
      var _0x27736b = this;
      this.timer = setTimeout(function () {
        _0x48a244.log("FailSafeTimer: timeout.");
        _0x27736b._isTimedOut = true;
        _0x27736b.stop();
        _0x410f8a();
      }, _0x2bb00e);
    }
    _0x13f557(_0x25d969, [{
      key: "stop",
      value: function () {
        this.timer && (_0x48a244.log("FailSafeTimer: stop."), clearTimeout(this.timer));
        this.timer = null;
      }
    }, {
      key: "isTimedOut",
      get: function () {
        return this._isTimedOut;
      }
    }]);
    return _0x25d969;
  }();
  var _0x3e82e7 = /\[contains\(/;
  var _0x1bdc27 = ["email", "bincode"];
  var _0x4af392 = function () {
    function _0x1eb254() {
      _0x3e84e5(this, _0x1eb254);
    }
    _0x13f557(_0x1eb254, [{
      key: "check",
      value: function (_0x357838, _0x31146c) {
        if (_0x18b87d.log("2-1: start checkScore"), _0x5eade9.isJsFormat) {
          _0x18b87d.log("2-4-4: exited because forms.json is javascript.");
          _0x18b87d.log("2-4-4: return checkScore MM");
          return void ("function" == typeof _0x357838 && _0x357838("MM"));
        }
        if (!this.checkAllData()) {
          _0x18b87d.log("2-4-3: exited because checkAllData() == false.");
          _0x18b87d.log("2-4-3: return checkScore NMV");
          return void ("function" == typeof _0x357838 && _0x357838("NMV"));
        }
        _0x18b87d.log("2-5: start createParameter");
        var _0x4c3f63 = this.createParameter();
        if (_0x4c3f63.ddd_order_id && _0x4c3f63.price && _0x4c3f63.cardholder_name && (_0x4c3f63.email || _0x4c3f63.tel) && (_0x18b87d.log("set parameter.data to obj"), _0x2f2eed.data = _0x4c3f63), _0x18b87d.log("2-5: end createParameter", {
          obj: this.makePrivacySafeData(_0x4c3f63)
        }), "failed" === _0x5307d2.result || "timeout" === _0x5307d2.result) {
          (function (_0x177e88) {
            _0x18b87d.log("3-8: start showAlertDialog");
            var _0x34e60a = _0x1c27e8.baseurl + "/choices/" + _0x5307d2.result + "?aId=" + _0x1c27e8.params.accountId;
            _0x280d50(_0x2166d9, _0x34e60a, function (_0x242e34) {
              _0x368600(_0x242e34.contentWindow, "openAlertDialog");
            });
            window.addEventListener("message", function _0x3fa129(_0x12326f) {
              var _0x49868a = _0x168b79(_0x12326f);
              "closeAlertDialog" !== _0x49868a && "failedAlertDialog" !== _0x49868a && "timeoutAlertDialog" !== _0x49868a || (_0x1be41a(_0x2166d9, false), _0x2de57e(_0x2166d9), "function" == typeof _0x177e88 && _0x177e88(_0x5307d2.result), window.removeEventListener("message", _0x3fa129, false));
            }, false);
            _0x18b87d.log("3-8: end showAlertDialog");
          })(_0x31146c);
          return void _0x18b87d.log("2-6: exited because auth.result: " + _0x5307d2.result);
        }
        _0x18b87d.log("2-1: end checkScore");
        this.scoring(_0x4c3f63, _0x357838, _0x31146c, 16000);
      }
    }, {
      key: "scoring",
      value: function (_0x596f57, _0xd193a2, _0x4631a5, _0x460450) {
        !function (_0x54b76d) {
          _0x18b87d.log("3-4: start showAuthDialog");
          var _0x10342b = _0x1c27e8.baseurl + "/choices/scoring?aId=" + _0x1c27e8.params.accountId;
          _0x280d50(_0x1966d7, _0x10342b, function (_0xdeb215) {
            _0x368600(_0xdeb215.contentWindow, "openAuthDialog", _0x54b76d);
          });
        }(_0x596f57);
        _0x18b87d.log("startFailSafeTimer. wait: " + _0x460450 + " ms");
        var _0x262383 = new _0x15adde(function () {
          try {
            _0x17e6ab();
            _0x18b87d.logError("fail-safe timer timed out. calling success.");
          } catch (_0x5bf023) {
            _0x18b87d.logException("exception occured in fail-safe timer timeout func.", _0x5bf023);
          } finally {
            _0x18b87d.log("return: checkScore SGE");
            "function" == typeof _0xd193a2 && _0xd193a2("SGE");
          }
        }, _0x460450);
        window.addEventListener("message", function _0x2b277b(_0x11fdee) {
          try {
            var _0x1eef13 = _0x168b79(_0x11fdee);
            if (_0x262383.isTimedOut) {
              _0x17e6ab();
              return void _0x18b87d.log("message listener received: " + _0x1eef13 + ". but already timed out.");
            }
            "stopFailSafeTimer" === _0x1eef13 && (_0x18b87d.log("received: " + _0x11fdee.data + ". stopping fail-safe timer."), _0x262383.stop());
            ["closeDialog", "cancelAuth", "timeoutAuth", "failedAuth", "doneAuth", "errorAuth", "errorAjax", "error500", "error504", "choiceDoneAuth", "status_0_error"].includes(_0x1eef13) && (_0x18b87d.log("message listener received: " + _0x11fdee.data + "."), function (_0x6545dd, _0x10dc00, _0x8c2d52) {
              var _0xdd7b14 = _0x168b79(_0x6545dd);
              var _0x2321c5 = function () {
                var _0x33dac2 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "LRT";
                _0x18b87d.log("return: checkScore success:" + _0x33dac2);
                "function" == typeof _0x10dc00 && _0x10dc00(_0x33dac2);
              };
              var _0x32355a = function (_0x12aef9) {
                _0x18b87d.log("return: checkScore failure:" + _0x12aef9);
                "function" == typeof _0x8c2d52 && _0x8c2d52(_0x12aef9);
              };
              if (_0x17e6ab(), "doneAuth" === _0xdd7b14) {
                var _0x4c8d15 = _0x119c48(_0x6545dd);
                _0x5f0ed8.setScoreBaseKey(_0x4c8d15);
                var _0x3b13ea = {
                  key: _0x4c8d15
                };
                _0x2d3b8f.values = _0x3b13ea;
                _0x2d3b8f.save_cookies();
                _0x2321c5();
              } else {
                if ("choiceDoneAuth" === _0xdd7b14) {
                  var _0x28274c = _0x119c48(_0x6545dd);
                  _0x5f0ed8.setScoreBaseKey(_0x28274c);
                  var _0x27da14 = {
                    key: _0x28274c
                  };
                  _0x2d3b8f.values = _0x27da14;
                  _0x2d3b8f.save_cookies();
                  _0x18b87d.log("return: checkScore BIAT");
                  "function" == typeof _0x10dc00 && _0x10dc00("BIAT");
                } else {
                  "errorAuth" === _0xdd7b14 || "errorAjax" === _0xdd7b14 ? (_0x18b87d.logError(_0xdd7b14 + ": received (" + _0x6545dd.data + ")."), _0x2321c5("SGE")) : "error500" === _0xdd7b14 || "error504" === _0xdd7b14 ? (_0x18b87d.logError(_0xdd7b14 + ": received (" + _0x6545dd.data + ")."), _0x2321c5("MM")) : "status_0_error" == _0xdd7b14 ? (_0x18b87d.logError(_0xdd7b14 + ": received (" + _0x6545dd.data + ")."), _0x2321c5("SGE")) : "failedAuth" === _0xdd7b14 ? (_0x5307d2.result = "failed", _0x32355a(_0x5307d2.result)) : "timeoutAuth" === _0xdd7b14 ? (_0x5307d2.result = "timeout", _0x32355a(_0x5307d2.result)) : "cancelAuth" === _0xdd7b14 && (_0x5307d2.result = "cancel", _0x32355a(_0x5307d2.result));
                }
              }
            }(_0x11fdee, _0xd193a2, _0x4631a5), window.removeEventListener("message", _0x2b277b, false));
          } catch (_0x13b0a6) {
            _0x18b87d.logException("exception occured in scoring message listener. event: " + _0x11fdee.data, _0x13b0a6);
          }
        }, false);
      }
    }, {
      key: "checkAllData",
      value: function () {
        var _0x34ffc7 = this;
        if (_0x18b87d.log("2-4: start checkAllData"), !this._isFormDataValid()) {
          return false;
        }
        _0x18b87d.log("2-4-1: pass isFormDataValid");
        var _0x50ad75 = _0x5eade9.data.path.forms;
        var _0xe45ec = Object.entries(_0x50ad75).map(function (_0x14e21d) {
          var _0x213633 = _0x46657f(_0x14e21d, 2);
          var _0x5049e4 = _0x213633[0];
          var _0x154391 = _0x213633[1];
          var _0x5b2c1b = _0x34ffc7.scrape(_0x154391);
          if ((null === _0x5b2c1b || "" === _0x5b2c1b) && _0x34ffc7._isRequired(_0x5049e4)) {
            if ("email" === _0x5049e4) {
              return _0x5049e4;
            }
            if ("bincode" === _0x5049e4 && (false === _0x5eade9.data.allow_bincode_null || undefined === _0x5eade9.data.allow_bincode_null)) {
              return _0x5049e4;
            }
          }
        }).filter(function (_0x3fbb2e) {
          return undefined !== _0x3fbb2e;
        });
        return _0xe45ec.length > 0 ? (_0x18b87d.log("2-4-2: lacked input data: " + _0xe45ec.toString()), false) : (_0x18b87d.log("2-4-2: all data is valid"), true);
      }
    }, {
      key: "createParameter",
      value: function () {
        var _0x1cdc41 = [];
        if (_0x1cdc41.push({
          aId: _0x1c27e8.params.accountId,
          pId: _0x1c27e8.params.pageId,
          bId: _0x31a37.bID
        }), _0x1cdc41.push(this._getAllData()), null !== _0x5eade9.data && _0x5eade9.data.additionalParams && _0x1cdc41.push(this._getAdditionalParams()), null != _0x5eade9.data && _0x5eade9.data.travelPlansParams) {
          var _0x24d199 = this._getTravelPlansParams();
          _0x1cdc41.push(_0x24d199);
        }
        return _0x1cdc41.reduce(function (_0x17a5a9, _0x26d5c4) {
          Object.keys(_0x26d5c4).forEach(function (_0x4bc1a9) {
            _0x17a5a9[_0x4bc1a9] = _0x26d5c4[_0x4bc1a9];
          });
          return _0x17a5a9;
        }, {});
      }
    }, {
      key: "scrape",
      value: function (_0x3feac0) {
        var _0x4eaafc = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        var _0x5f03ea = _0x3feac0.findIndex(function (_0x838237) {
          return _0x3e82e7.test(_0x838237);
        });
        return -1 === _0x5f03ea ? this._scrapeElements(_0x3feac0.filter(function (_0x5d0ca4) {
          return !_0x3e82e7.test(_0x5d0ca4);
        }), _0x4eaafc).join("") : this._scrapeElementsByContains(_0x3feac0[_0x5f03ea], _0x4eaafc);
      }
    }, {
      key: "makePrivacySafeData",
      value: function (_0x125a3c) {
        var _0xf6e385 = _0x3fc534({}, _0x125a3c);
        delete _0xf6e385.email;
        return _0xf6e385;
      }
    }, {
      key: "_getAdditionalParams",
      value: function () {
        var _0x539cf0 = this;
        _0x18b87d.log("2-5-2: start getAdditionalParams");
        var _0x5b8758 = {};
        ["as-user-entry-date", "as-username", "as-username-kana", "as-username-sei", "as-username-mei", "as-username-sei-kana", "as-username-mei-kana", "as-useraddress", "as-order-total-count", "as-order-gift", "as-order-discount-amount", "as-shippingname", "as-shippingname-kana", "as-cardholder-name", "as-cardexpire"].forEach(function (_0x5172b3) {
          var _0x41c169 = "//input[@id='" + _0x5172b3 + "']";
          var _0x18ea58 = _0x539cf0._getElement(_0x41c169);
          _0x18ea58 && (_0x5b8758[_0x5172b3] = _0x18ea58.value);
        });
        _0x18b87d.log("2-5-2: end getAdditionalParams");
        return _0x5b8758;
      }
    }, {
      key: "_getTravelPlansParams",
      value: function () {
        var _0x28a440 = this;
        _0x18b87d.log("2-5-3: start getTravelPlansParams");
        var _0x5d2185 = {};
        ["asair-reservation-date", "asair-passengername-mei", "asair-passengername-sei", "asair-passengername", "asair-passengername-mei-kana", "asair-passengername-sei-kana", "asair-passengername-kana", "asair-passengername-first", "asair-passengername-last", "asair-passengername-full", "asair-number-in-party", "asair-leg1-carrier-code", "asair-leg1-flight-number", "asair-leg1-departure-airport", "asair-leg1-departure-country", "asair-leg1-departure-date", "asair-leg1-destination-airport", "asair-leg1-destination-country", "asair-leg1-destination-arrival-date", "asair-leg2-carrier-code", "asair-leg2-flight-number", "asair-leg2-departure-airport", "asair-leg2-departure-country", "asair-leg2-departure-date", "asair-leg2-destination-airport", "asair-leg2-destination-country", "asair-leg2-destination-arrival-date", "asair-leg3-carrier-code", "asair-leg3-flight-number", "asair-leg3-departure-airport", "asair-leg3-departure-country", "asair-leg3-departure-date", "asair-leg3-destination-airport", "asair-leg3-destination-country", "asair-leg3-destination-arrival-date", "ashotel-hotel-name", "ashotel-room-category", "ashotel-checkin-date", "ashotel-checkout-date", "ashotel-number-of-rooms", "ashotel-total-number-of-guests", "ashotel-number-of-adult", "ashotel-number-of-child", "astransport1-boarding-date", "astransport1-category", "astransport1-name-of-line", "astransport1-departure-station", "astransport1-departure-time", "astransport1-destination", "astransport1-arrival-time", "astransport1-seat-type", "astransport2-boarding-date", "astransport2-category", "astransport2-name-of-line", "astransport2-departure-station", "astransport2-departure-time", "astransport2-destination", "astransport2-arrival-time", "astransport2-seat-type", "asticket-eventname", "asticket-eventlocation", "asticket-eventdate", "asticket-ticketcategory", "asticket-guestname", "asticket-guestname-mei", "asticket-guestname-sei", "asticket-numberofguests"].forEach(function (_0x6330c5) {
          var _0x1e1699 = "//input[@id='" + _0x6330c5 + "']";
          var _0x256ddc = _0x28a440._getElement(_0x1e1699);
          null != _0x256ddc && (_0x5d2185[_0x6330c5] = _0x256ddc.value);
        });
        _0x18b87d.log("2-5-3: end getTravelPlansParams");
        return _0x5d2185;
      }
    }, {
      key: "_isFormDataValid",
      value: function () {
        return undefined !== _0x5eade9.data && null !== _0x5eade9.data && null !== _0x5eade9.data.path && null !== _0x5eade9.data.path.forms || (_0x18b87d.log("form data is invalid."), false);
      }
    }, {
      key: "_getAllData",
      value: function () {
        var _0x2703e8 = this;
        if (_0x18b87d.log("2-5-1: start getAllData"), this._isFormDataValid()) {
          var _0x4cacf9 = new Object();
          var _0x11340a = _0x5eade9.data.path.forms;
          Object.entries(_0x11340a).forEach(function (_0x5c1d14) {
            var _0x12a0e6 = _0x46657f(_0x5c1d14, 2);
            var _0x5c5d4f = _0x12a0e6[0];
            var _0xd4918a = _0x12a0e6[1];
            var _0x136ae7 = _0x2703e8.scrape(_0xd4918a);
            "bincode" === _0x5c5d4f && null !== _0x136ae7 && "" !== _0x136ae7 && (_0x5eade9.data.panLast3digits && _0x136ae7.length >= 9 && (_0x4cacf9.pan_last_3digits = _0x136ae7.substring(_0x136ae7.length - 3)), _0x136ae7 = _0x136ae7.substring(0, 6));
            null !== _0x136ae7 && "" !== _0x136ae7 && (_0x4cacf9[_0x5c5d4f] = _0x136ae7);
          });
          var _0x29b779 = function () {
            if (window.Intl) {
              var _0x1fe657 = window.Intl.DateTimeFormat;
              if (_0x1fe657) {
                var _0x49fb66 = new _0x1fe657().resolvedOptions().timeZone;
                if (_0x49fb66) {
                  return _0x49fb66;
                }
              }
            }
            var _0xd18a4b = -_0x1f17cb();
            return "UTC" + (_0xd18a4b >= 0 ? "+" : "") + Math.abs(_0xd18a4b);
          }();
          if (_0x29b779 && (_0x4cacf9.timezone = _0x29b779), undefined !== _0x407a31.components) {
            try {
              _0x18b87d.log("2-5-1-1: include perfumes.");
              _0x4cacf9.pf_version = _0x407a31.version;
              _0x4cacf9.pf_visitor_id = _0x407a31.visitor_id;
              _0x4cacf9.pf_components = JSON.stringify(_0x407a31.components);
            } catch (_0xdd4f59) {
              _0x18b87d.logException("2-5-1-2: error include perfumes.", _0xdd4f59);
            }
          }
          _0x18b87d.log("2-5-1: end getAllData");
          return _0x4cacf9;
        }
      }
    }, {
      key: "_scrapeElements",
      value: function (_0x50dc27, _0x4abefc) {
        var _0x45813e = this;
        return _0x50dc27.map(function (_0x53200d) {
          return _0x45813e._getElement(_0x53200d);
        }).filter(function (_0xffc394) {
          null === _0xffc394 && _0x4abefc && _0x45813e._postLogNoElement(_0xffc394);
          return !!_0xffc394;
        }).map(function (_0xe9e436) {
          return null === _0xe9e436.value ? _0xe9e436.innerHTML : _0xe9e436.value;
        });
      }
    }, {
      key: "_scrapeElementsByContains",
      value: function (_0x2d4f16, _0x5c4505) {
        for (var _0x4aac14 = document.evaluate(_0x2d4f16, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), _0x5bf876 = [], _0xee3b1b = _0x4aac14.iterateNext(); _0xee3b1b;) {
          null !== _0xee3b1b.value && _0xee3b1b.value.length > 0 && _0x5bf876.push(_0xee3b1b.value);
          _0xee3b1b = _0x4aac14.iterateNext();
        }
        0 === _0x5bf876.length && _0x5c4505 && this._postLogNoElement(_0x2d4f16);
        return _0x5bf876;
      }
    }, {
      key: "_postLogNoElement",
      value: function (_0x5d8e89) {
        var _0xc0decb = "no element in formsValue(): " + _0x5d8e89;
        _0x18b87d.log(_0xc0decb);
      }
    }, {
      key: "_isRequired",
      value: function (_0xcc1df1) {
        return _0x1bdc27.indexOf(_0xcc1df1) >= 0;
      }
    }, {
      key: "_getElement",
      value: function (_0x17ad8e) {
        return document.evaluate(_0x17ad8e, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }
    }]);
    return _0x1eb254;
  }();
  var _0x46c39a = /\[contains\(/;
  var _0x1c7886 = ["ddd_order_id", "price"];
  var _0x272edd = function () {
    function _0x422194(_0x58d5ba) {
      _0x3e84e5(this, _0x422194);
      var _0x5b22f2 = function (_0x575462, _0x30d4a8) {
        if (!_0x575462) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !_0x30d4a8 || "object" != typeof _0x30d4a8 && "function" != typeof _0x30d4a8 ? _0x575462 : _0x30d4a8;
      }(this, (_0x422194.__proto__ || Object.getPrototypeOf(_0x422194)).call(this, _0x58d5ba));
      _0x5b22f2.name = "DddsSetCallbackError";
      return _0x5b22f2;
    }
    (function (_0x14e5df, _0x27db36) {
      if ("function" != typeof _0x27db36 && null !== _0x27db36) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof _0x27db36);
      }
      _0x14e5df.prototype = Object.create(_0x27db36 && _0x27db36.prototype, {
        constructor: {
          value: _0x14e5df,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      _0x27db36 && (Object.setPrototypeOf ? Object.setPrototypeOf(_0x14e5df, _0x27db36) : _0x14e5df.__proto__ = _0x27db36);
    })(_0x422194, Error);
    return _0x422194;
  }();
  var _0x5444fc = function () {
    function _0x311bf4() {
      for (var _0xf38c23 in _0x3e84e5(this, _0x311bf4), this.reasonCode = {
        LRT: "scoring",
        BIAT: "scoring",
        SGE: "scoringOnly",
        NMV: "scoringOnly",
        MM: "scoringOnly",
        ASF: "required",
        EMVPS: "required",
        EMVMM: "required",
        EMVAF: "required",
        EMVAT: "3ds",
        EMVEA: "3ds",
        EMVEC: "3ds",
        EMVPE: "3ds",
        EMVTO: "3ds"
      }, this.callbacks = {}, this.existRequiredCallbacks = {}, this.exist3dsOptionalCallbacks = {}, this.existScoringOnlyCallbacks = {}, this.reasonCode) this.callbacks[_0xf38c23] = function () {}, "required" === this.reasonCode[_0xf38c23] ? this.existRequiredCallbacks[_0xf38c23] = false : "3ds" === this.reasonCode[_0xf38c23] ? this.exist3dsOptionalCallbacks[_0xf38c23] = false : "scoringOnly" === this.reasonCode[_0xf38c23] && (this.existScoringOnlyCallbacks[_0xf38c23] = false);
    }
    _0x13f557(_0x311bf4, [{
      key: "setCallbacks",
      value: function (_0x5ec596) {
        if ("object" !== (undefined === _0x5ec596 ? "undefined" : _0x1b6d8c(_0x5ec596))) {
          throw new _0x272edd("Not object type");
        }
        for (var _0x5cc921 in _0x5ec596) {
          if ("function" != typeof _0x5ec596[_0x5cc921]) {
            throw new _0x272edd("Not callback function type");
          }
          var _0x1c5d3c = _0x5cc921.split("|");
          var _0x423464 = true;
          var _0x557501 = false;
          var _0x548562 = undefined;
          try {
            for (var _0x422086, _0x2ae7f0 = _0x1c5d3c[Symbol.iterator](); !(_0x423464 = (_0x422086 = _0x2ae7f0.next()).done); _0x423464 = true) {
              var _0x3f4966 = _0x422086.value;
              undefined !== this.callbacks[_0x3f4966] && (this.callbacks[_0x3f4966] = _0x5ec596[_0x5cc921], undefined !== this.existRequiredCallbacks[_0x3f4966] && (this.existRequiredCallbacks[_0x3f4966] = true), undefined !== this.exist3dsOptionalCallbacks[_0x3f4966] && (this.exist3dsOptionalCallbacks[_0x3f4966] = true), undefined !== this.existScoringOnlyCallbacks[_0x3f4966] && (this.existScoringOnlyCallbacks[_0x3f4966] = true));
            }
          } catch (_0x1e91f2) {
            _0x557501 = true;
            _0x548562 = _0x1e91f2;
          } finally {
            try {
              !_0x423464 && _0x2ae7f0.return && _0x2ae7f0.return();
            } finally {
              if (_0x557501) {
                throw _0x548562;
              }
            }
          }
        }
        for (var _0x296ae5 in this.existRequiredCallbacks) if (!this.existRequiredCallbacks[_0x296ae5]) {
          throw new _0x272edd("No \"" + _0x296ae5 + "\" exist");
        }
        for (var _0x3371a5 in this.exist3dsOptionalCallbacks) this.exist3dsOptionalCallbacks[_0x3371a5] || (this.callbacks[_0x3371a5] = "EMVAT" === _0x3371a5 ? this.callbacks.EMVPS : this.callbacks.EMVAF);
        for (var _0x56e337 in this.existScoringOnlyCallbacks) this.existScoringOnlyCallbacks[_0x56e337] || (this.callbacks[_0x56e337] = "MM" === _0x56e337 ? this.callbacks.EMVMM : this.callbacks.ASF);
      }
    }, {
      key: "isScoring",
      value: function () {
        return !(_0x5eade9.data && _0x5eade9.data.path && _0x5eade9.data.path.forms && undefined === _0x5eade9.data.path.forms.bincode && !_0x5eade9.data.allow_bincode_null);
      }
    }, {
      key: "run",
      value: function () {
        this.isScoring() ? this.runScoring() : this.run3ds();
      }
    }, {
      key: "runScoring",
      value: function () {
        var _0x39222a = this;
        try {
          new _0x4af392().check(function (_0x431d57) {
            var _0x1e9d5c = {
              LRT: _0x39222a.runLRT,
              BIAT: _0x39222a.runBIAT,
              SGE: _0x39222a.runSGE,
              NMV: _0x39222a.runNMV,
              MM: _0x39222a.runMM
            };
            !_0x1e9d5c[_0x431d57] || false === _0x1e9d5c[_0x431d57].call(_0x39222a) || "LRT" !== _0x431d57 && "BIAT" !== _0x431d57 || _0x39222a.run3ds();
          }, function () {
            _0x39222a.runASF(_0x39222a.errorResponse());
          });
        } catch (_0x209478) {
          this.runASF(this.errorResponse());
        }
      }
    }, {
      key: "is3ds",
      value: function () {
        return !!(_0x5eade9.data && _0x5eade9.data.path && _0x5eade9.data.path.forms && _0x5eade9.data.path.forms.ddd_order_id);
      }
    }, {
      key: "run3ds",
      value: function () {
        if (_0x18b87d.log("5-1: start check3ds"), !this.is3ds()) {
          _0x18b87d.log("5-4-5: exited because 3ds is invalid.");
          _0x18b87d.log("5-4-5: return check3ds EMVMM");
          return void this.runEMVMM(this.errorResponse());
        }
        if (!_0x2f2eed.data) {
          if (_0x5eade9.isJsFormat) {
            _0x18b87d.log("5-4-4: exited because forms.json is javascript.");
            _0x18b87d.log("5-4-4: return check3ds EMVMM");
            return void this.runEMVMM(this.errorResponse());
          }
          if (!this.checkAllData()) {
            _0x18b87d.log("5-4-3: exited because checkAllData() == false.");
            _0x18b87d.log("5-4-3: return check3ds EMVPE");
            return void this.runEMVPE(this.errorResponse());
          }
        }
        _0x18b87d.log("5-5: start createParameter");
        var _0x5de16f = this.createParameter();
        if (_0x18b87d.log("5-5: end createParameter", {
          obj: this.makePrivacySafeData(_0x5de16f)
        }), "failed3ds" === _0x2394df.result) {
          (function (_0x3bc3fe) {
            _0x18b87d.log("6-8: start showAlert3dsDialog");
            var _0x19e208 = _0x1c27e8.baseurl + "/ddds/failed?aId=" + _0x1c27e8.params.accountId;
            _0x280d50(_0x2166d9, _0x19e208, function (_0x5c5017) {
              _0x368600(_0x5c5017.contentWindow, "openAlert3dsDialog");
            });
            window.addEventListener("message", function _0x3819ca(_0x59b97b) {
              var _0x2b9371 = _0x59b97b.data;
              var _0x56c9e7 = _0x2b9371.reason_code;
              var _0x75626c = _0x2b9371.ddds_res;
              var _0xf97a2b = undefined === _0x75626c ? {
                dddEci: "07"
              } : _0x75626c;
              "EMVAF" === _0x56c9e7 && (_0x1be41a(_0x2166d9, false), _0x2de57e(_0x2166d9), _0x3bc3fe.runEMVAF(_0xf97a2b), window.removeEventListener("message", _0x3819ca, false));
            }, false);
            _0x18b87d.log("6-8: end showAlert3dsDialog");
          })(this);
          return void _0x18b87d.log("5-6: exited because auth3ds.result: " + _0x2394df.result);
        }
        _0x18b87d.log("5-1: end check3ds");
        this.authorize(_0x5de16f);
      }
    }, {
      key: "authorize",
      value: function (_0x50ade5) {
        var _0x2ed6cc = this;
        !function (_0x351415) {
          _0x18b87d.log("6-4: start showAuth3dsDialog");
          var _0x36fdc1 = _0x1c27e8.baseurl + "/ddds/authorize?aId=" + _0x1c27e8.params.accountId;
          _0x280d50(_0x19b980, _0x36fdc1, function (_0x4fbe83) {
            _0x368600(_0x4fbe83.contentWindow, "openAuth3dsDialog", _0x351415);
          });
        }(_0x50ade5);
        window.addEventListener("message", function _0x57e13c(_0x53d968) {
          try {
            var _0x4501af = _0x53d968.data.reason_code;
            if ("doneAuth3ds" === _0x4501af) {
              _0x18b87d.log("message listener received: doneAuth3ds.");
              return document.getElementById("aerosmith-ddds").style.backgroundColor = "white";
            }
            ["EMVPS", "EMVMM", "EMVAF", "EMVAT", "EMVEA", "EMVEC", "EMVPE", "EMVTO"].includes(_0x4501af) && (_0x18b87d.log("message listener received: " + _0x4501af + "."), _0x19b260(_0x53d968, _0x2ed6cc), window.removeEventListener("message", _0x57e13c, false));
          } catch (_0x1bf0b2) {
            _0x18b87d.logException("exception occured in 3ds authorize message listener. event: " + _0x53d968.data, _0x1bf0b2);
          }
        }, false);
      }
    }, {
      key: "errorResponse",
      value: function () {
        return {
          dddEci: "07"
        };
      }
    }, {
      key: "runLRT",
      value: function () {
        return this.callbacks.LRT();
      }
    }, {
      key: "runBIAT",
      value: function () {
        return this.callbacks.BIAT();
      }
    }, {
      key: "runSGE",
      value: function () {
        return this.callbacks.SGE();
      }
    }, {
      key: "runNMV",
      value: function () {
        return this.callbacks.NMV();
      }
    }, {
      key: "runMM",
      value: function () {
        return this.callbacks.MM();
      }
    }, {
      key: "runASF",
      value: function () {
        return this.callbacks.ASF();
      }
    }, {
      key: "runEMVPS",
      value: function (_0x35d649) {
        _0x35d649.reason_code = "EMVPS";
        return this.callbacks.EMVPS(_0x35d649);
      }
    }, {
      key: "runEMVMM",
      value: function (_0x18ac6e) {
        _0x18ac6e.reason_code = "EMVMM";
        return this.callbacks.EMVMM(_0x18ac6e);
      }
    }, {
      key: "runEMVAT",
      value: function (_0x47c61a) {
        _0x47c61a.reason_code = "EMVAT";
        return this.callbacks.EMVAT(_0x47c61a);
      }
    }, {
      key: "runEMVAF",
      value: function (_0xb01f02) {
        _0xb01f02.reason_code = "EMVAF";
        return this.callbacks.EMVAF(_0xb01f02);
      }
    }, {
      key: "runEMVEA",
      value: function (_0x1876c8) {
        _0x1876c8.reason_code = "EMVEA";
        return this.callbacks.EMVEA(_0x1876c8);
      }
    }, {
      key: "runEMVEC",
      value: function (_0x4c2fe9) {
        _0x4c2fe9.reason_code = "EMVEC";
        return this.callbacks.EMVEC(_0x4c2fe9);
      }
    }, {
      key: "runEMVPE",
      value: function (_0x2f4937) {
        _0x2f4937.reason_code = "EMVPE";
        return this.callbacks.EMVPE(_0x2f4937);
      }
    }, {
      key: "runEMVTO",
      value: function (_0x4a10a9) {
        _0x4a10a9.reason_code = "EMVTO";
        return this.callbacks.EMVTO(_0x4a10a9);
      }
    }, {
      key: "checkAllData",
      value: function () {
        var _0x2f80d3 = this;
        if (_0x18b87d.log("5-4: start checkAllData"), !this._isFormDataValid()) {
          return false;
        }
        _0x18b87d.log("5-4-1: pass isFormDataValid");
        var _0x3b58c4 = _0x5eade9.data.path.forms;
        var _0x25109a = Object.entries(_0x3b58c4).map(function (_0x139004) {
          var _0x366ada = _0x46657f(_0x139004, 2);
          var _0xb0e253 = _0x366ada[0];
          var _0xc2af40 = _0x366ada[1];
          var _0x475ebe = _0x2f80d3.scrape(_0xc2af40);
          if ((null === _0x475ebe || "" === _0x475ebe) && _0x2f80d3._isRequired(_0xb0e253)) {
            return _0xb0e253;
          }
        }).filter(function (_0x6091a1) {
          return undefined !== _0x6091a1;
        });
        return _0x25109a.length > 0 ? (_0x18b87d.log("5-4-2: lacked input data: " + _0x25109a.toString()), false) : (_0x18b87d.log("5-4-2: all data is valid"), true);
      }
    }, {
      key: "_isFormDataValid",
      value: function () {
        return undefined !== _0x5eade9.data && null !== _0x5eade9.data && null !== _0x5eade9.data.path && null !== _0x5eade9.data.path.forms || (_0x18b87d.log("form data is invalid."), false);
      }
    }, {
      key: "scrape",
      value: function (_0x58d702) {
        var _0x1d515c = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        if (-1 === _0x58d702.findIndex(function (_0x5bb378) {
          return _0x46c39a.test(_0x5bb378);
        })) {
          return this._scrapeElements(_0x58d702.filter(function (_0x181ccf) {
            return !_0x46c39a.test(_0x181ccf);
          }), _0x1d515c).join("");
        }
      }
    }, {
      key: "_scrapeElements",
      value: function (_0x15b9c7, _0xd3f3a9) {
        var _0x3d2f7d = this;
        return _0x15b9c7.map(function (_0x359536) {
          return _0x3d2f7d._getElement(_0x359536);
        }).filter(function (_0x9c1228) {
          null === _0x9c1228 && _0xd3f3a9 && _0x3d2f7d._postLogNoElement(_0x9c1228);
          return !!_0x9c1228;
        }).map(function (_0x1c96dc) {
          return null === _0x1c96dc.value ? _0x1c96dc.innerHTML : _0x1c96dc.value;
        });
      }
    }, {
      key: "_isRequired",
      value: function (_0x244289) {
        return _0x1c7886.indexOf(_0x244289) >= 0;
      }
    }, {
      key: "setScoreBaseKey",
      value: function (_0x3df7d7) {
        _0x3df7d7.push({
          score_base_key: _0x5f0ed8.getScoreBaseKey()
        });
        return _0x3df7d7;
      }
    }, {
      key: "createParameter",
      value: function () {
        var _0x21fd66 = [];
        (_0x21fd66 = this.setScoreBaseKey(_0x21fd66)).push(this._getDddsStoreParams());
        _0x2f2eed.data ? _0x21fd66.push(_0x2f2eed.data) : (_0x21fd66.push({
          aId: _0x1c27e8.params.accountId,
          pId: _0x1c27e8.params.pageId,
          bId: _0x31a37.bID
        }), _0x21fd66.push(this._getAllData()));
        return _0x21fd66.reduce(function (_0x47331a, _0x363983) {
          Object.keys(_0x363983).forEach(function (_0x2523cb) {
            _0x47331a[_0x2523cb] = _0x363983[_0x2523cb];
          });
          return _0x47331a;
        }, {});
      }
    }, {
      key: "_getElement",
      value: function (_0x3afd0c) {
        return document.evaluate(_0x3afd0c, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }
    }, {
      key: "makePrivacySafeData",
      value: function (_0x21ff83) {
        var _0x5ad9d5 = _0x3fc534({}, _0x21ff83);
        delete _0x5ad9d5.email;
        return _0x5ad9d5;
      }
    }, {
      key: "_getDddsStoreParams",
      value: function () {
        var _0x380c40 = this;
        _0x18b87d.log("5-5-2: start getDddsStoreParams");
        var _0x2801e9 = {};
        ["asuka-store-id"].forEach(function (_0x31af6c) {
          var _0x5cb409 = "//input[@id='" + _0x31af6c + "']";
          var _0x9abc28 = _0x380c40._getElement(_0x5cb409);
          _0x9abc28 && (_0x2801e9[_0x31af6c] = _0x9abc28.value);
        });
        _0x18b87d.log("5-5-2: end getDddsStoreParams");
        return _0x2801e9;
      }
    }, {
      key: "_getAllData",
      value: function () {
        var _0x42c674 = this;
        if (_0x18b87d.log("5-5-1: start getAllData"), this._isFormDataValid()) {
          var _0x111a1d = new Object();
          var _0x3876e2 = _0x5eade9.data.path.forms;
          Object.entries(_0x3876e2).forEach(function (_0x2b954c) {
            var _0x473690 = _0x46657f(_0x2b954c, 2);
            var _0x201907 = _0x473690[0];
            var _0x8dbcbf = _0x473690[1];
            var _0x6e2c40 = _0x42c674.scrape(_0x8dbcbf);
            null !== _0x6e2c40 && "" !== _0x6e2c40 && (_0x111a1d[_0x201907] = _0x6e2c40);
          });
          _0x18b87d.log("5-5-1: end getAllData");
          return _0x111a1d;
        }
      }
    }, {
      key: "_postLogNoElement",
      value: function (_0x258f0b) {
        var _0x5db2b3 = "no element in formsValue(): " + _0x258f0b;
        _0x18b87d.log(_0x5db2b3);
      }
    }]);
    return _0x311bf4;
  }();
  var _0x589b5a = function () {
    function _0x4a2088() {
      _0x3e84e5(this, _0x4a2088);
      this.timeoutmillisec = 16000;
    }
    _0x13f557(_0x4a2088, [{
      key: "post",
      value: function (_0x859b38, _0x23bc9d, _0x278e4f) {
        var _0x2ba83a = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : null;
        return _0x37a4b1("POST", _0x1c27e8.apiurl + _0x859b38, _0x23bc9d, this.timeoutmillisec, _0x278e4f, _0x2ba83a);
      }
    }]);
    return _0x4a2088;
  }();
  var _0x37a4b1 = function (_0x53bfea, _0x425241, _0x224f8d, _0x2ce5f8, _0x2e97af) {
    var _0x48d538 = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : null;
    _0x18b87d.log("post: start sendAjax", {
      data: _0x224f8d
    });
    var _0x4aea71 = "string" == typeof _0x224f8d ? _0x224f8d : Object.keys(_0x224f8d).map(function (_0x2f1407) {
      return encodeURIComponent(_0x2f1407) + "=" + encodeURIComponent(_0x224f8d[_0x2f1407]);
    }).join("&");
    var _0x536b1b = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    _0x536b1b.open(_0x53bfea, _0x425241);
    _0x536b1b.timeout = _0x2ce5f8;
    _0x536b1b.onreadystatechange = function () {
      _0x536b1b.readyState > 3 && (200 == _0x536b1b.status ? _0x2e97af(_0x536b1b.responseText) : "function" == typeof _0x48d538 && _0x48d538(_0x536b1b));
    };
    _0x536b1b.ontimeout = function () {
      _0x18b87d.log("post: ajax timeout. readyStatus: " + _0x536b1b.readyState);
    };
    _0x536b1b.withCredentials = true;
    _0x536b1b.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    _0x536b1b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    _0x536b1b.send(_0x4aea71);
    _0x18b87d.log("post: end sendAjax");
    return _0x536b1b;
  };
  var _0x4e5ce3 = new _0x589b5a();
  var _0x374e81 = function () {
    var _0x1b080a = {
      bId: _0x31a37.bID,
      aId: _0x1c27e8.params.accountId,
      pId: _0x1c27e8.params.pageId
    };
    _0x18b87d.log("1-5: loading forms", {
      obj: _0x1b080a
    });
    _0x4e5ce3.post("/forms.json", _0x1b080a, function (_0x517633) {
      _0x18b87d.log("1-5-1: received forms");
      try {
        _0x5eade9.checkJsFormat(_0x517633) || _0x4cafb2(_0x517633);
        window.dispatchEvent(new CustomEvent("as-readytoscore"));
        null != _0x5eade9.data && _0x5eade9.data.fingerPrint && _0x258af1();
      } catch (_0x1f5c09) {
        window.dispatchEvent(new CustomEvent("as-readytoscore"));
        _0x18b87d.logException("1-5-4: exception occured in setup forms", _0x1f5c09);
      }
    }, function (_0x45d64b) {
      window.dispatchEvent(new CustomEvent("as-readytoscore"));
      _0x18b87d.logWarn("1-5-5: error in loading forms.json. error: " + _0x45d64b.statusText);
      _0x45d64b.ontimeout = function () {
        _0x18b87d.log("1-5-6: ajax timeout. readyStatus: " + _0x45d64b.readyState);
      };
    });
  };
  var _0x4cafb2 = function (_0x3866a4) {
    var _0x239e61 = JSON.parse(_0x3866a4);
    var _0x55e230 = _0x239e61.aerosmith;
    _0x18b87d.log("1-5-2: start setup forms");
    _0x5eade9.data = _0x55e230;
    null !== _0x5eade9.data ? _0x5eade9.data.accountId === _0x1c27e8.params.accountId && _0x5eade9.data.pageId === _0x1c27e8.params.pageId ? _0x18b87d.log("1-5-2: end setup forms") : _0x18b87d.logError("1-5-2-2: parameter invalid error", {
      detail: _0x239e61.error
    }) : _0x18b87d.logError("1-5-2-1: server error", {
      detail: _0x239e61.error
    });
  };
  var _0x258af1 = function () {
    _0x204b6d("perfume", _0x1c27e8.baseurl + "/js/perfume.js", function () {
      _0x18b87d.log("1-5-3: loaded perfumejs.");
      _0x407a31.load();
    });
  };
  var _0x5f0ed8 = new (function () {
    function _0x5b60fe() {
      _0x3e84e5(this, _0x5b60fe);
      _0x1c27e8.params = _0x586142();
      Object.keys(_0x1cbc53).forEach(function (_0xb60009) {
        _0x1cbc53[_0xb60009].isVerbose = _0x1c27e8.loggerVerbose;
        _0x1cbc53[_0xb60009].aId = _0x1c27e8.params.accountId;
      });
      this.score_base_key = "";
    }
    _0x13f557(_0x5b60fe, [{
      key: "init",
      value: function () {
        console.log("startup aerosmith.");
        this.score_base_key = "";
        new _0x19bf42().load();
        _0x31a37.setBID(_0x374e81);
        Object.keys(_0x1cbc53).forEach(function (_0x394a90) {
          _0x1cbc53[_0x394a90].bId = _0x31a37.bID;
        });
      }
    }, {
      key: "checkScore",
      value: function (_0x36c4ee, _0x1c133e) {
        _0x18b87d.log("2: checkScore() called.");
        try {
          new _0x4af392().check(_0x36c4ee, _0x1c133e);
          _0x18b87d.log("2: checkScore() exited.");
        } catch (_0x269c1e) {
          _0x18b87d.logException("2: exception occured in checkScore().", _0x269c1e);
          _0x18b87d.log("2: return checkScore NMV", _0x269c1e);
          "function" == typeof _0x36c4ee && _0x36c4ee("NMV");
        }
      }
    }, {
      key: "add3dsHiddenInputs",
      value: function (_0x4545c6, _0xaa8bac) {
        for (var _0x5ee63c in _0xaa8bac) if (_0xaa8bac.hasOwnProperty(_0x5ee63c)) {
          var _0x2c8e72 = document.createElement("input");
          _0x2c8e72.type = "hidden";
          _0x2c8e72.name = _0x5ee63c;
          _0x2c8e72.value = _0xaa8bac[_0x5ee63c];
          _0x4545c6.appendChild(_0x2c8e72);
        }
      }
    }, {
      key: "check3ds",
      value: function (_0x1f50c6) {
        _0x18b87d.log("5: check3ds() called.");
        var _0x31a77b = new _0x5444fc();
        try {
          _0x31a77b.setCallbacks(_0x1f50c6);
          _0x31a77b.run();
          _0x18b87d.log("5: check3ds() exited.");
        } catch (_0x166de5) {
          _0x18b87d.logException("exception occured in check3ds().", _0x166de5);
          "DddsSetCallbackError" == _0x166de5.name ? alert("正しくコールバック関数を記述してください") : _0x31a77b.runEMVPE(_0x31a77b.errorResponse());
        }
      }
    }, {
      key: "setScoreBaseKey",
      value: function (_0x4ea28a) {
        _0x18b87d.log("4-1: set score base key");
        this.score_base_key = _0x4ea28a;
      }
    }, {
      key: "getScoreBaseKey",
      value: function () {
        _0x18b87d.log("4-2: return score base key");
        return this.score_base_key;
      }
    }, {
      key: "complete",
      value: function () {
        try {
          !function () {
            if (_0x18b87d.log("4-1: Complete - start"), null != _0x1c27e8.params.accountId) {
              if (null != _0x2d3b8f.key) {
                var _0x7db494 = {
                  aid: _0x1c27e8.params.accountId,
                  key: _0x2d3b8f.key
                };
                var _0x1b0439 = _0x1c27e8.baseurl + "/api/scores/complete";
                return fetch(_0x1b0439, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  redirect: "follow",
                  referrerPolicy: "no-referrer",
                  body: JSON.stringify(_0x7db494)
                }).then(function (_0x35c2d2) {
                  if (!_0x35c2d2.ok) {
                    var _0x12e89c = _0x35c2d2.status + "(" + _0x35c2d2.statusText + ")";
                    throw new Error(_0x12e89c);
                  }
                  return _0x35c2d2.json();
                }).then(function (_0xbc587) {
                  1 == _0xbc587.result ? _0x18b87d.log("4-4: Complete - end(code=" + _0xbc587.code + ")") : _0x18b87d.logError("4-5: Complete - error(code=" + _0xbc587.code + ")");
                  _0x2d3b8f.reset_cookies();
                  return _0xbc587;
                }).catch(function (_0x2e8a4e) {
                  _0x18b87d.logException("4-x: fetch exception error occurred", _0x2e8a4e);
                  return _0x2e8a4e;
                });
              }
              _0x18b87d.log("4-3: Complete - key doesn't exist");
            } else {
              _0x18b87d.log("4-2: Complete - aid doesn't exist");
            }
          }();
        } catch (_0x3892e2) {
          _0x18b87d.logException("exception occured in complete().", _0x3892e2);
        }
      }
    }]);
    return _0x5b60fe;
  }())();
  _0x3a4f59.checkScore = function (_0x538968, _0x186eac) {
    _0x5f0ed8.checkScore(_0x538968, _0x186eac);
  };
  _0x3a4f59.check3ds = function (_0x1bbb1a) {
    _0x5f0ed8.check3ds(_0x1bbb1a);
  };
  _0x3a4f59.add3dsHiddenInputs = function (_0x13b92d, _0x4b887f) {
    _0x5f0ed8.add3dsHiddenInputs(_0x13b92d, _0x4b887f);
  };
  _0x3a4f59.init = function () {
    _0x5f0ed8.init();
  };
  _0x3a4f59.getScoreBaseKey = function () {
    return _0x5f0ed8.getScoreBaseKey();
  };
  _0x3a4f59.complete = function () {
    _0x5f0ed8.complete();
  };
  Object.defineProperty(_0x3a4f59, "__esModule", {
    value: true
  });
});
window.addEventListener("load", function () {
  Object.defineProperty(window, "aerosmith", {
    writable: false,
    value: Object.freeze(aerosmith)
  });
  window.aerosmith.init();
});