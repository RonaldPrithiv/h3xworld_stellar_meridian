import {
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __extends,
  __generator,
  __read,
  __spreadArray,
  __values
} from "./chunk-YU47KGRL.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/@stellar/freighter-api/build/index.min.js
var require_index_min = __commonJS({
  "node_modules/@stellar/freighter-api/build/index.min.js"(exports, module) {
    !function(r9, e6) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e6() : "function" == typeof define && define.amd ? define([], e6) : "object" == typeof exports ? exports.freighterApi = e6() : r9.freighterApi = e6();
    }(exports, () => (() => {
      "use strict";
      var r9, e6, s6 = { d: (r10, e7) => {
        for (var t9 in e7) s6.o(e7, t9) && !s6.o(r10, t9) && Object.defineProperty(r10, t9, { enumerable: true, get: e7[t9] });
      }, o: (r10, e7) => Object.prototype.hasOwnProperty.call(r10, e7), r: (r10) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r10, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r10, "__esModule", { value: true });
      } }, t8 = {};
      s6.r(t8), s6.d(t8, { WatchWalletChanges: () => O, default: () => u3, getAddress: () => i4, getNetwork: () => N, getNetworkDetails: () => l4, isAllowed: () => c4, isBrowser: () => w4, isConnected: () => d5, requestAccess: () => R, setAllowed: () => C, signAuthEntry: () => S, signMessage: () => a5, signTransaction: () => _2 }), function(r10) {
        r10.CREATE_ACCOUNT = "CREATE_ACCOUNT", r10.FUND_ACCOUNT = "FUND_ACCOUNT", r10.ADD_ACCOUNT = "ADD_ACCOUNT", r10.IMPORT_ACCOUNT = "IMPORT_ACCOUNT", r10.IMPORT_HARDWARE_WALLET = "IMPORT_HARDWARE_WALLET", r10.LOAD_ACCOUNT = "LOAD_ACCOUNT", r10.MAKE_ACCOUNT_ACTIVE = "MAKE_ACCOUNT_ACTIVE", r10.UPDATE_ACCOUNT_NAME = "UPDATE_ACCOUNT_NAME", r10.GET_MNEMONIC_PHRASE = "GET_MNEMONIC_PHRASE", r10.CONFIRM_MNEMONIC_PHRASE = "CONFIRM_MNEMONIC_PHRASE", r10.CONFIRM_MIGRATED_MNEMONIC_PHRASE = "CONFIRM_MIGRATED_MNEMONIC_PHRASE", r10.RECOVER_ACCOUNT = "RECOVER_ACCOUNT", r10.CONFIRM_PASSWORD = "CONFIRM_PASSWORD", r10.REJECT_ACCESS = "REJECT_ACCESS", r10.GRANT_ACCESS = "GRANT_ACCESS", r10.SIGN_TRANSACTION = "SIGN_TRANSACTION", r10.SIGN_BLOB = "SIGN_BLOB", r10.SIGN_AUTH_ENTRY = "SIGN_AUTH_ENTRY", r10.HANDLE_SIGNED_HW_TRANSACTION = "HANDLE_SIGNED_HW_TRANSACTION", r10.REJECT_TRANSACTION = "REJECT_TRANSACTION", r10.SIGN_FREIGHTER_TRANSACTION = "SIGN_FREIGHTER_TRANSACTION", r10.SIGN_FREIGHTER_SOROBAN_TRANSACTION = "SIGN_FREIGHTER_SOROBAN_TRANSACTION", r10.ADD_RECENT_ADDRESS = "ADD_RECENT_ADDRESS", r10.LOAD_RECENT_ADDRESSES = "LOAD_RECENT_ADDRESSES", r10.SIGN_OUT = "SIGN_OUT", r10.SHOW_BACKUP_PHRASE = "SHOW_BACKUP_PHRASE", r10.SAVE_ALLOWLIST = "SAVE_ALLOWLIST", r10.SAVE_SETTINGS = "SAVE_SETTINGS", r10.SAVE_EXPERIMENTAL_FEATURES = "SAVE_EXPERIMENTAL_FEATURES", r10.LOAD_SETTINGS = "LOAD_SETTINGS", r10.GET_CACHED_ASSET_ICON = "GET_CACHED_ASSET_ICON", r10.CACHE_ASSET_ICON = "CACHE_ASSET_ICON", r10.GET_CACHED_ASSET_DOMAIN = "GET_CACHED_ASSET_DOMAIN", r10.CACHE_ASSET_DOMAIN = "CACHE_ASSET_DOMAIN", r10.GET_BLOCKED_ACCOUNTS = "GET_BLOCKED_ACCOUNTS", r10.GET_BLOCKED_DOMAINS = "GET_BLOCKED_DOMAINS", r10.ADD_CUSTOM_NETWORK = "ADD_CUSTOM_NETWORK", r10.CHANGE_NETWORK = "CHANGE_NETWORK", r10.REMOVE_CUSTOM_NETWORK = "REMOVE_CUSTOM_NETWORK", r10.EDIT_CUSTOM_NETWORK = "EDIT_CUSTOM_NETWORK", r10.RESET_EXP_DATA = "RESET_EXP_DATA", r10.ADD_TOKEN_ID = "ADD_TOKEN_ID", r10.GET_TOKEN_IDS = "GET_TOKEN_IDS", r10.REMOVE_TOKEN_ID = "REMOVE_TOKEN_ID", r10.GET_MIGRATABLE_ACCOUNTS = "GET_MIGRATABLE_ACCOUNTS", r10.GET_MIGRATED_MNEMONIC_PHRASE = "GET_MIGRATED_MNEMONIC_PHRASE", r10.MIGRATE_ACCOUNTS = "MIGRATE_ACCOUNTS", r10.ADD_ASSETS_LIST = "ADD_ASSETS_LIST", r10.MODIFY_ASSETS_LIST = "MODIFY_ASSETS_LIST";
      }(r9 || (r9 = {})), function(r10) {
        r10.REQUEST_ACCESS = "REQUEST_ACCESS", r10.REQUEST_PUBLIC_KEY = "REQUEST_PUBLIC_KEY", r10.SUBMIT_TRANSACTION = "SUBMIT_TRANSACTION", r10.SUBMIT_BLOB = "SUBMIT_BLOB", r10.SUBMIT_AUTH_ENTRY = "SUBMIT_AUTH_ENTRY", r10.REQUEST_NETWORK = "REQUEST_NETWORK", r10.REQUEST_NETWORK_DETAILS = "REQUEST_NETWORK_DETAILS", r10.REQUEST_CONNECTION_STATUS = "REQUEST_CONNECTION_STATUS", r10.REQUEST_ALLOWED_STATUS = "REQUEST_ALLOWED_STATUS", r10.SET_ALLOWED_STATUS = "SET_ALLOWED_STATUS", r10.REQUEST_USER_INFO = "REQUEST_USER_INFO";
      }(e6 || (e6 = {}));
      const n8 = (r10) => {
        const s7 = Date.now() + Math.random();
        return window.postMessage({ source: "FREIGHTER_EXTERNAL_MSG_REQUEST", messageId: s7, ...r10 }, window.location.origin), new Promise((t9) => {
          let n9 = 0;
          r10.type !== e6.REQUEST_CONNECTION_STATUS && r10.type !== e6.REQUEST_PUBLIC_KEY || (n9 = setTimeout(() => {
            t9({ isConnected: false, publicKey: "" }), window.removeEventListener("message", o6);
          }, 2e3));
          const o6 = (r11) => {
            var e7, E2;
            r11.source === window && "FREIGHTER_EXTERNAL_MSG_RESPONSE" === (null === (e7 = null == r11 ? void 0 : r11.data) || void 0 === e7 ? void 0 : e7.source) && (null === (E2 = null == r11 ? void 0 : r11.data) || void 0 === E2 ? void 0 : E2.messagedId) === s7 && (t9(r11.data), window.removeEventListener("message", o6), clearTimeout(n9));
          };
          window.addEventListener("message", o6, false);
        });
      }, o5 = { code: -1, message: "Node environment is not supported" }, E = { code: -1, message: "The wallet encountered an internal error. Please try again or contact the wallet if the problem persists." }, T2 = async () => {
        let r10;
        try {
          r10 = await n8({ type: e6.REQUEST_PUBLIC_KEY });
        } catch (r11) {
          console.error(r11);
        }
        return { publicKey: (null == r10 ? void 0 : r10.publicKey) || "", error: null == r10 ? void 0 : r10.apiError };
      }, A = async () => {
        let r10;
        try {
          r10 = await n8({ type: e6.REQUEST_NETWORK_DETAILS });
        } catch (r11) {
          console.error(r11);
        }
        const { networkDetails: s7, apiError: t9 } = r10 || { networkDetails: { network: "", networkName: "", networkUrl: "", networkPassphrase: "", sorobanRpcUrl: void 0, apiError: "" } }, { network: o6, networkUrl: E2, networkPassphrase: T3, sorobanRpcUrl: A2 } = s7;
        return { network: o6, networkUrl: E2, networkPassphrase: T3, sorobanRpcUrl: A2, error: t9 };
      }, i4 = async () => {
        let r10 = "";
        if (w4) {
          const e7 = await T2();
          return r10 = e7.publicKey, e7.error ? { address: r10, error: e7.error } : { address: r10 };
        }
        return { address: r10, error: o5 };
      }, _2 = async (r10, s7) => {
        if (w4) {
          const t9 = await (async (r11, s8, t10) => {
            let o6, T3 = "", A2 = "", i5 = "";
            "object" == typeof s8 ? (A2 = s8.accountToSign || "", i5 = s8.networkPassphrase || "") : (T3 = s8 || "", A2 = "");
            try {
              o6 = await n8({ transactionXdr: r11, network: T3, networkPassphrase: i5, accountToSign: A2, type: e6.SUBMIT_TRANSACTION });
            } catch (r12) {
              return { signedTransaction: "", signerAddress: "", error: E };
            }
            const { signedTransaction: _3, signerAddress: a6 } = o6;
            return { signedTransaction: _3, signerAddress: a6, error: null == o6 ? void 0 : o6.apiError };
          })(r10, s7);
          return t9.error ? { signedTxXdr: "", signerAddress: "", error: t9.error } : { signedTxXdr: t9.signedTransaction, signerAddress: t9.signerAddress };
        }
        return { signedTxXdr: "", signerAddress: "", error: o5 };
      }, a5 = async (r10, s7) => {
        if (w4) {
          const t9 = await (async (r11, s8) => {
            let t10;
            const o6 = (s8 || {}).address || "";
            try {
              t10 = await n8({ blob: r11, accountToSign: o6, type: e6.SUBMIT_BLOB });
            } catch (r12) {
              return { signedMessage: null, signerAddress: "", error: E };
            }
            const { signedBlob: T3, signerAddress: A2 } = t10;
            return { signedMessage: T3 || null, signerAddress: A2, error: null == t10 ? void 0 : t10.apiError };
          })(r10, s7);
          return t9.error ? { signedMessage: null, signerAddress: "", error: t9.error } : { signedMessage: t9.signedMessage, signerAddress: t9.signerAddress };
        }
        return { signedMessage: null, signerAddress: "", error: o5 };
      }, S = async (r10, s7) => {
        if (w4) {
          const t9 = await (async (r11, s8) => {
            const t10 = (s8 || {}).address || "";
            let o6;
            try {
              o6 = await n8({ entryXdr: r11, accountToSign: t10, networkPassphrase: null == s8 ? void 0 : s8.networkPassphrase, type: e6.SUBMIT_AUTH_ENTRY });
            } catch (r12) {
              return console.error(r12), { signedAuthEntry: null, signerAddress: "", error: E };
            }
            const { signedAuthEntry: T3, signerAddress: A2 } = o6;
            return { signedAuthEntry: T3 || null, signerAddress: A2, error: null == o6 ? void 0 : o6.apiError };
          })(r10, s7);
          return t9.error ? { signedAuthEntry: null, signerAddress: "", error: t9.error } : { signedAuthEntry: t9.signedAuthEntry, signerAddress: t9.signerAddress };
        }
        return { signedAuthEntry: null, signerAddress: "", error: o5 };
      }, d5 = async () => w4 ? window.freighter ? Promise.resolve({ isConnected: window.freighter }) : (async () => {
        let r10 = { isConnected: false };
        try {
          r10 = await n8({ type: e6.REQUEST_CONNECTION_STATUS });
        } catch (r11) {
          console.error(r11);
        }
        return { isConnected: r10.isConnected };
      })() : { isConnected: false, error: o5 }, N = async () => {
        if (w4) {
          const r10 = await (async () => {
            let r11;
            try {
              r11 = await n8({ type: e6.REQUEST_NETWORK_DETAILS });
            } catch (r12) {
              console.error(r12);
            }
            const { networkDetails: s7 } = r11 || { networkDetails: { network: "", networkPassphrase: "" } };
            return { network: null == s7 ? void 0 : s7.network, networkPassphrase: null == s7 ? void 0 : s7.networkPassphrase, error: null == r11 ? void 0 : r11.apiError };
          })();
          return r10.error ? { network: "", networkPassphrase: "", error: r10.error } : { network: r10.network, networkPassphrase: r10.networkPassphrase };
        }
        return { network: "", networkPassphrase: "", error: o5 };
      }, l4 = async () => {
        if (w4) {
          const r10 = await A();
          return r10.error ? { network: "", networkUrl: "", networkPassphrase: "", error: r10.error } : { network: r10.network, networkUrl: r10.networkUrl, networkPassphrase: r10.networkPassphrase, sorobanRpcUrl: r10.sorobanRpcUrl };
        }
        return { network: "", networkUrl: "", networkPassphrase: "", error: o5 };
      }, c4 = async () => {
        let r10 = false;
        if (w4) {
          const s7 = await (async () => {
            let r11;
            try {
              r11 = await n8({ type: e6.REQUEST_ALLOWED_STATUS });
            } catch (r12) {
              console.error(r12);
            }
            const { isAllowed: s8 } = r11 || { isAllowed: false };
            return { isAllowed: s8, error: null == r11 ? void 0 : r11.apiError };
          })();
          return r10 = s7.isAllowed, s7.error ? { isAllowed: r10, error: s7.error } : { isAllowed: r10 };
        }
        return { isAllowed: r10, error: o5 };
      }, C = async () => {
        let r10 = false;
        if (w4) {
          const s7 = await (async () => {
            let r11;
            try {
              r11 = await n8({ type: e6.SET_ALLOWED_STATUS });
            } catch (r12) {
              console.error(r12);
            }
            const { isAllowed: s8 } = r11 || { isAllowed: false };
            return { isAllowed: s8, error: null == r11 ? void 0 : r11.apiError };
          })();
          return r10 = s7.isAllowed, s7.error ? { isAllowed: r10, error: s7.error } : { isAllowed: r10 };
        }
        return { isAllowed: r10, error: o5 };
      }, R = async () => {
        let r10 = "";
        if (w4) {
          const s7 = await (async () => {
            let r11;
            try {
              r11 = await n8({ type: e6.REQUEST_ACCESS });
            } catch (r12) {
              console.error(r12);
            }
            const { publicKey: s8 } = r11 || { publicKey: "" };
            return { publicKey: s8, error: null == r11 ? void 0 : r11.apiError };
          })();
          return r10 = s7.publicKey, s7.error ? { address: r10, error: s7.error } : { address: r10 };
        }
        return { address: r10, error: o5 };
      };
      class O {
        constructor(r10 = 3e3) {
          this.fetchInfo = async (r11) => {
            if (!this.isRunning) return;
            const e7 = await T2(), s7 = await A();
            (e7.error || s7.error) && r11({ address: "", network: "", networkPassphrase: "", error: e7.error || s7.error }), this.currentAddress === e7.publicKey && this.currentNetwork === s7.network && this.currentNetworkPassphrase === s7.networkPassphrase || (this.currentAddress = e7.publicKey, this.currentNetwork = s7.network, this.currentNetworkPassphrase = s7.networkPassphrase, r11({ address: e7.publicKey, network: s7.network, networkPassphrase: s7.networkPassphrase })), setTimeout(() => this.fetchInfo(r11), this.timeout);
          }, this.timeout = r10, this.currentAddress = "", this.currentNetwork = "", this.currentNetworkPassphrase = "", this.isRunning = false;
        }
        watch(r10) {
          return w4 ? (this.isRunning = true, this.fetchInfo(r10), {}) : { error: o5 };
        }
        stop() {
          this.isRunning = false;
        }
      }
      const w4 = "undefined" != typeof window, u3 = { getAddress: i4, signTransaction: _2, signMessage: a5, signAuthEntry: S, isConnected: d5, getNetwork: N, getNetworkDetails: l4, isAllowed: c4, setAllowed: C, requestAccess: R, WatchWalletChanges: O };
      return t8;
    })());
  }
});

// node_modules/@lobstrco/signer-extension-api/build/index.min.js
var require_index_min2 = __commonJS({
  "node_modules/@lobstrco/signer-extension-api/build/index.min.js"(exports, module) {
    !function(e6, n8) {
      "object" == typeof exports && "object" == typeof module ? module.exports = n8() : "function" == typeof define && define.amd ? define([], n8) : "object" == typeof exports ? exports.lobstrExtensionApi = n8() : e6.lobstrExtensionApi = n8();
    }(exports, () => (() => {
      "use strict";
      var e6, n8, o5, t8 = { d: (e7, n9) => {
        for (var o6 in n9) t8.o(n9, o6) && !t8.o(e7, o6) && Object.defineProperty(e7, o6, { enumerable: true, get: n9[o6] });
      }, o: (e7, n9) => Object.prototype.hasOwnProperty.call(e7, n9), r: (e7) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e7, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e7, "__esModule", { value: true });
      } }, i4 = {};
      t8.r(i4), t8.d(i4, { default: () => S, getPublicKey: () => c4, isBrowser: () => T2, isConnected: () => a5, signTransaction: () => d5 }), function(e7) {
        e7.LOAD_STATE = "LOAD_STATE", e7.LOGIN = "LOGIN", e7.LOGOUT = "LOGOUT", e7.SIGN_TRANSACTION = "SIGN_TRANSACTION", e7.REJECT_TRANSACTION = "REJECT_TRANSACTION", e7.GRANT_ACCESS = "GRANT_ACCESS", e7.REJECT_ACCESS = "REJECT_ACCESS";
      }(e6 || (e6 = {})), function(e7) {
        e7.REQUEST_ACCESS = "REQUEST_ACCESS", e7.SIGN_TRANSACTION = "SUBMIT_TRANSACTION", e7.REQUEST_CONNECTION_STATUS = "REQUEST_CONNECTION_STATUS";
      }(n8 || (n8 = {})), function(e7) {
        e7.pending = "pending", e7.signed = "signed", e7.rejected = "rejected";
      }(o5 || (o5 = {}));
      const r9 = "LOBSTR_CONNECTION_KEY", s6 = (e7) => {
        const o6 = Date.now() + Math.random();
        return window.postMessage({ source: "LOBSTR_EXTERNAL_MSG_REQUEST", messageId: o6, ...e7 }, window.location.origin), new Promise((t9) => {
          let i5 = 0;
          e7.type === n8.REQUEST_CONNECTION_STATUS && (i5 = setTimeout(() => {
            t9({ isConnected: false }), window.removeEventListener("message", r10);
          }, 2e3));
          const r10 = (e8) => {
            var n9, s7;
            e8.source === window && "LOBSTR_EXTERNAL_MSG_RESPONSE" === (null === (n9 = null == e8 ? void 0 : e8.data) || void 0 === n9 ? void 0 : n9.source) && (null === (s7 = null == e8 ? void 0 : e8.data) || void 0 === s7 ? void 0 : s7.messagedId) === o6 && (t9(e8.data), window.removeEventListener("message", r10), clearTimeout(i5));
          };
          window.addEventListener("message", r10, false);
        });
      }, c4 = async () => {
        if (!T2) return "";
        const { publicKey: e7, connectionKey: o6 } = await (async () => {
          let e8 = { publicKey: "", error: "", connectionKey: "" };
          try {
            e8 = await s6({ type: n8.REQUEST_ACCESS });
          } catch (e9) {
            console.error(e9);
          }
          const { publicKey: o7, connectionKey: t9, error: i5 } = e8;
          if (i5) throw i5;
          return { publicKey: o7, connectionKey: t9 };
        })();
        return ((e8) => {
          var n9;
          null === (n9 = null === window || void 0 === window ? void 0 : window.sessionStorage) || void 0 === n9 || n9.setItem(r9, e8);
        })(o6), e7;
      }, d5 = async (e7) => {
        if (!T2) return "";
        const o6 = (null === (t9 = null === window || void 0 === window ? void 0 : window.sessionStorage) || void 0 === t9 ? void 0 : t9.getItem(r9)) || "";
        var t9;
        return await (async (e8, o7) => {
          let t10 = { signedTransaction: "", error: "" };
          try {
            t10 = await s6({ transactionXdr: e8, connectionKey: o7, type: n8.SIGN_TRANSACTION });
          } catch (e9) {
            throw console.error(e9), e9;
          }
          const { signedTransaction: i5, error: r10 } = t10;
          if (r10) throw r10;
          return i5;
        })(e7, o6);
      }, a5 = async () => !!T2 && (window.lobstrSignerExtension ? window.lobstrSignerExtension : await (async () => {
        let e7 = { isConnected: false };
        try {
          e7 = await s6({ type: n8.REQUEST_CONNECTION_STATUS });
        } catch (e8) {
          console.error(e8);
        }
        return e7.isConnected;
      })()), T2 = "undefined" != typeof window, S = { getPublicKey: c4, signTransaction: d5, isConnected: a5 };
      return i4;
    })());
  }
});

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
    (function(nacl) {
      "use strict";
      var gf = function(init) {
        var i4, r9 = new Float64Array(16);
        if (init) for (i4 = 0; i4 < init.length; i4++) r9[i4] = init[i4];
        return r9;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x3, i4, h2, l4) {
        x3[i4] = h2 >> 24 & 255;
        x3[i4 + 1] = h2 >> 16 & 255;
        x3[i4 + 2] = h2 >> 8 & 255;
        x3[i4 + 3] = h2 & 255;
        x3[i4 + 4] = l4 >> 24 & 255;
        x3[i4 + 5] = l4 >> 16 & 255;
        x3[i4 + 6] = l4 >> 8 & 255;
        x3[i4 + 7] = l4 & 255;
      }
      function vn(x3, xi, y2, yi, n8) {
        var i4, d5 = 0;
        for (i4 = 0; i4 < n8; i4++) d5 |= x3[xi + i4] ^ y2[yi + i4];
        return (1 & d5 - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x3, xi, y2, yi) {
        return vn(x3, xi, y2, yi, 16);
      }
      function crypto_verify_32(x3, xi, y2, yi) {
        return vn(x3, xi, y2, yi, 32);
      }
      function core_salsa20(o5, p2, k2, c4) {
        var j0 = c4[0] & 255 | (c4[1] & 255) << 8 | (c4[2] & 255) << 16 | (c4[3] & 255) << 24, j1 = k2[0] & 255 | (k2[1] & 255) << 8 | (k2[2] & 255) << 16 | (k2[3] & 255) << 24, j2 = k2[4] & 255 | (k2[5] & 255) << 8 | (k2[6] & 255) << 16 | (k2[7] & 255) << 24, j3 = k2[8] & 255 | (k2[9] & 255) << 8 | (k2[10] & 255) << 16 | (k2[11] & 255) << 24, j4 = k2[12] & 255 | (k2[13] & 255) << 8 | (k2[14] & 255) << 16 | (k2[15] & 255) << 24, j5 = c4[4] & 255 | (c4[5] & 255) << 8 | (c4[6] & 255) << 16 | (c4[7] & 255) << 24, j6 = p2[0] & 255 | (p2[1] & 255) << 8 | (p2[2] & 255) << 16 | (p2[3] & 255) << 24, j7 = p2[4] & 255 | (p2[5] & 255) << 8 | (p2[6] & 255) << 16 | (p2[7] & 255) << 24, j8 = p2[8] & 255 | (p2[9] & 255) << 8 | (p2[10] & 255) << 16 | (p2[11] & 255) << 24, j9 = p2[12] & 255 | (p2[13] & 255) << 8 | (p2[14] & 255) << 16 | (p2[15] & 255) << 24, j10 = c4[8] & 255 | (c4[9] & 255) << 8 | (c4[10] & 255) << 16 | (c4[11] & 255) << 24, j11 = k2[16] & 255 | (k2[17] & 255) << 8 | (k2[18] & 255) << 16 | (k2[19] & 255) << 24, j12 = k2[20] & 255 | (k2[21] & 255) << 8 | (k2[22] & 255) << 16 | (k2[23] & 255) << 24, j13 = k2[24] & 255 | (k2[25] & 255) << 8 | (k2[26] & 255) << 16 | (k2[27] & 255) << 24, j14 = k2[28] & 255 | (k2[29] & 255) << 8 | (k2[30] & 255) << 16 | (k2[31] & 255) << 24, j15 = c4[12] & 255 | (c4[13] & 255) << 8 | (c4[14] & 255) << 16 | (c4[15] & 255) << 24;
        var x0 = j0, x1 = j1, x22 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u3;
        for (var i4 = 0; i4 < 20; i4 += 2) {
          u3 = x0 + x12 | 0;
          x4 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x4 + x0 | 0;
          x8 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x8 + x4 | 0;
          x12 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x12 + x8 | 0;
          x0 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x5 + x1 | 0;
          x9 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x9 + x5 | 0;
          x13 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x13 + x9 | 0;
          x1 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x1 + x13 | 0;
          x5 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x10 + x6 | 0;
          x14 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x14 + x10 | 0;
          x22 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x22 + x14 | 0;
          x6 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x6 + x22 | 0;
          x10 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x15 + x11 | 0;
          x3 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x3 + x15 | 0;
          x7 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x7 + x3 | 0;
          x11 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x11 + x7 | 0;
          x15 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x0 + x3 | 0;
          x1 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x1 + x0 | 0;
          x22 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x22 + x1 | 0;
          x3 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x3 + x22 | 0;
          x0 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x5 + x4 | 0;
          x6 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x6 + x5 | 0;
          x7 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x7 + x6 | 0;
          x4 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x4 + x7 | 0;
          x5 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x10 + x9 | 0;
          x11 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x11 + x10 | 0;
          x8 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x8 + x11 | 0;
          x9 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x9 + x8 | 0;
          x10 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x15 + x14 | 0;
          x12 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x12 + x15 | 0;
          x13 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x13 + x12 | 0;
          x14 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x14 + x13 | 0;
          x15 ^= u3 << 18 | u3 >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x22 = x22 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o5[0] = x0 >>> 0 & 255;
        o5[1] = x0 >>> 8 & 255;
        o5[2] = x0 >>> 16 & 255;
        o5[3] = x0 >>> 24 & 255;
        o5[4] = x1 >>> 0 & 255;
        o5[5] = x1 >>> 8 & 255;
        o5[6] = x1 >>> 16 & 255;
        o5[7] = x1 >>> 24 & 255;
        o5[8] = x22 >>> 0 & 255;
        o5[9] = x22 >>> 8 & 255;
        o5[10] = x22 >>> 16 & 255;
        o5[11] = x22 >>> 24 & 255;
        o5[12] = x3 >>> 0 & 255;
        o5[13] = x3 >>> 8 & 255;
        o5[14] = x3 >>> 16 & 255;
        o5[15] = x3 >>> 24 & 255;
        o5[16] = x4 >>> 0 & 255;
        o5[17] = x4 >>> 8 & 255;
        o5[18] = x4 >>> 16 & 255;
        o5[19] = x4 >>> 24 & 255;
        o5[20] = x5 >>> 0 & 255;
        o5[21] = x5 >>> 8 & 255;
        o5[22] = x5 >>> 16 & 255;
        o5[23] = x5 >>> 24 & 255;
        o5[24] = x6 >>> 0 & 255;
        o5[25] = x6 >>> 8 & 255;
        o5[26] = x6 >>> 16 & 255;
        o5[27] = x6 >>> 24 & 255;
        o5[28] = x7 >>> 0 & 255;
        o5[29] = x7 >>> 8 & 255;
        o5[30] = x7 >>> 16 & 255;
        o5[31] = x7 >>> 24 & 255;
        o5[32] = x8 >>> 0 & 255;
        o5[33] = x8 >>> 8 & 255;
        o5[34] = x8 >>> 16 & 255;
        o5[35] = x8 >>> 24 & 255;
        o5[36] = x9 >>> 0 & 255;
        o5[37] = x9 >>> 8 & 255;
        o5[38] = x9 >>> 16 & 255;
        o5[39] = x9 >>> 24 & 255;
        o5[40] = x10 >>> 0 & 255;
        o5[41] = x10 >>> 8 & 255;
        o5[42] = x10 >>> 16 & 255;
        o5[43] = x10 >>> 24 & 255;
        o5[44] = x11 >>> 0 & 255;
        o5[45] = x11 >>> 8 & 255;
        o5[46] = x11 >>> 16 & 255;
        o5[47] = x11 >>> 24 & 255;
        o5[48] = x12 >>> 0 & 255;
        o5[49] = x12 >>> 8 & 255;
        o5[50] = x12 >>> 16 & 255;
        o5[51] = x12 >>> 24 & 255;
        o5[52] = x13 >>> 0 & 255;
        o5[53] = x13 >>> 8 & 255;
        o5[54] = x13 >>> 16 & 255;
        o5[55] = x13 >>> 24 & 255;
        o5[56] = x14 >>> 0 & 255;
        o5[57] = x14 >>> 8 & 255;
        o5[58] = x14 >>> 16 & 255;
        o5[59] = x14 >>> 24 & 255;
        o5[60] = x15 >>> 0 & 255;
        o5[61] = x15 >>> 8 & 255;
        o5[62] = x15 >>> 16 & 255;
        o5[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o5, p2, k2, c4) {
        var j0 = c4[0] & 255 | (c4[1] & 255) << 8 | (c4[2] & 255) << 16 | (c4[3] & 255) << 24, j1 = k2[0] & 255 | (k2[1] & 255) << 8 | (k2[2] & 255) << 16 | (k2[3] & 255) << 24, j2 = k2[4] & 255 | (k2[5] & 255) << 8 | (k2[6] & 255) << 16 | (k2[7] & 255) << 24, j3 = k2[8] & 255 | (k2[9] & 255) << 8 | (k2[10] & 255) << 16 | (k2[11] & 255) << 24, j4 = k2[12] & 255 | (k2[13] & 255) << 8 | (k2[14] & 255) << 16 | (k2[15] & 255) << 24, j5 = c4[4] & 255 | (c4[5] & 255) << 8 | (c4[6] & 255) << 16 | (c4[7] & 255) << 24, j6 = p2[0] & 255 | (p2[1] & 255) << 8 | (p2[2] & 255) << 16 | (p2[3] & 255) << 24, j7 = p2[4] & 255 | (p2[5] & 255) << 8 | (p2[6] & 255) << 16 | (p2[7] & 255) << 24, j8 = p2[8] & 255 | (p2[9] & 255) << 8 | (p2[10] & 255) << 16 | (p2[11] & 255) << 24, j9 = p2[12] & 255 | (p2[13] & 255) << 8 | (p2[14] & 255) << 16 | (p2[15] & 255) << 24, j10 = c4[8] & 255 | (c4[9] & 255) << 8 | (c4[10] & 255) << 16 | (c4[11] & 255) << 24, j11 = k2[16] & 255 | (k2[17] & 255) << 8 | (k2[18] & 255) << 16 | (k2[19] & 255) << 24, j12 = k2[20] & 255 | (k2[21] & 255) << 8 | (k2[22] & 255) << 16 | (k2[23] & 255) << 24, j13 = k2[24] & 255 | (k2[25] & 255) << 8 | (k2[26] & 255) << 16 | (k2[27] & 255) << 24, j14 = k2[28] & 255 | (k2[29] & 255) << 8 | (k2[30] & 255) << 16 | (k2[31] & 255) << 24, j15 = c4[12] & 255 | (c4[13] & 255) << 8 | (c4[14] & 255) << 16 | (c4[15] & 255) << 24;
        var x0 = j0, x1 = j1, x22 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u3;
        for (var i4 = 0; i4 < 20; i4 += 2) {
          u3 = x0 + x12 | 0;
          x4 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x4 + x0 | 0;
          x8 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x8 + x4 | 0;
          x12 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x12 + x8 | 0;
          x0 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x5 + x1 | 0;
          x9 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x9 + x5 | 0;
          x13 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x13 + x9 | 0;
          x1 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x1 + x13 | 0;
          x5 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x10 + x6 | 0;
          x14 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x14 + x10 | 0;
          x22 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x22 + x14 | 0;
          x6 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x6 + x22 | 0;
          x10 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x15 + x11 | 0;
          x3 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x3 + x15 | 0;
          x7 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x7 + x3 | 0;
          x11 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x11 + x7 | 0;
          x15 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x0 + x3 | 0;
          x1 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x1 + x0 | 0;
          x22 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x22 + x1 | 0;
          x3 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x3 + x22 | 0;
          x0 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x5 + x4 | 0;
          x6 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x6 + x5 | 0;
          x7 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x7 + x6 | 0;
          x4 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x4 + x7 | 0;
          x5 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x10 + x9 | 0;
          x11 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x11 + x10 | 0;
          x8 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x8 + x11 | 0;
          x9 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x9 + x8 | 0;
          x10 ^= u3 << 18 | u3 >>> 32 - 18;
          u3 = x15 + x14 | 0;
          x12 ^= u3 << 7 | u3 >>> 32 - 7;
          u3 = x12 + x15 | 0;
          x13 ^= u3 << 9 | u3 >>> 32 - 9;
          u3 = x13 + x12 | 0;
          x14 ^= u3 << 13 | u3 >>> 32 - 13;
          u3 = x14 + x13 | 0;
          x15 ^= u3 << 18 | u3 >>> 32 - 18;
        }
        o5[0] = x0 >>> 0 & 255;
        o5[1] = x0 >>> 8 & 255;
        o5[2] = x0 >>> 16 & 255;
        o5[3] = x0 >>> 24 & 255;
        o5[4] = x5 >>> 0 & 255;
        o5[5] = x5 >>> 8 & 255;
        o5[6] = x5 >>> 16 & 255;
        o5[7] = x5 >>> 24 & 255;
        o5[8] = x10 >>> 0 & 255;
        o5[9] = x10 >>> 8 & 255;
        o5[10] = x10 >>> 16 & 255;
        o5[11] = x10 >>> 24 & 255;
        o5[12] = x15 >>> 0 & 255;
        o5[13] = x15 >>> 8 & 255;
        o5[14] = x15 >>> 16 & 255;
        o5[15] = x15 >>> 24 & 255;
        o5[16] = x6 >>> 0 & 255;
        o5[17] = x6 >>> 8 & 255;
        o5[18] = x6 >>> 16 & 255;
        o5[19] = x6 >>> 24 & 255;
        o5[20] = x7 >>> 0 & 255;
        o5[21] = x7 >>> 8 & 255;
        o5[22] = x7 >>> 16 & 255;
        o5[23] = x7 >>> 24 & 255;
        o5[24] = x8 >>> 0 & 255;
        o5[25] = x8 >>> 8 & 255;
        o5[26] = x8 >>> 16 & 255;
        o5[27] = x8 >>> 24 & 255;
        o5[28] = x9 >>> 0 & 255;
        o5[29] = x9 >>> 8 & 255;
        o5[30] = x9 >>> 16 & 255;
        o5[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k2, c4) {
        core_salsa20(out, inp, k2, c4);
      }
      function crypto_core_hsalsa20(out, inp, k2, c4) {
        core_hsalsa20(out, inp, k2, c4);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c4, cpos, m2, mpos, b, n8, k2) {
        var z = new Uint8Array(16), x3 = new Uint8Array(64);
        var u3, i4;
        for (i4 = 0; i4 < 16; i4++) z[i4] = 0;
        for (i4 = 0; i4 < 8; i4++) z[i4] = n8[i4];
        while (b >= 64) {
          crypto_core_salsa20(x3, z, k2, sigma);
          for (i4 = 0; i4 < 64; i4++) c4[cpos + i4] = m2[mpos + i4] ^ x3[i4];
          u3 = 1;
          for (i4 = 8; i4 < 16; i4++) {
            u3 = u3 + (z[i4] & 255) | 0;
            z[i4] = u3 & 255;
            u3 >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x3, z, k2, sigma);
          for (i4 = 0; i4 < b; i4++) c4[cpos + i4] = m2[mpos + i4] ^ x3[i4];
        }
        return 0;
      }
      function crypto_stream_salsa20(c4, cpos, b, n8, k2) {
        var z = new Uint8Array(16), x3 = new Uint8Array(64);
        var u3, i4;
        for (i4 = 0; i4 < 16; i4++) z[i4] = 0;
        for (i4 = 0; i4 < 8; i4++) z[i4] = n8[i4];
        while (b >= 64) {
          crypto_core_salsa20(x3, z, k2, sigma);
          for (i4 = 0; i4 < 64; i4++) c4[cpos + i4] = x3[i4];
          u3 = 1;
          for (i4 = 8; i4 < 16; i4++) {
            u3 = u3 + (z[i4] & 255) | 0;
            z[i4] = u3 & 255;
            u3 >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x3, z, k2, sigma);
          for (i4 = 0; i4 < b; i4++) c4[cpos + i4] = x3[i4];
        }
        return 0;
      }
      function crypto_stream(c4, cpos, d5, n8, k2) {
        var s6 = new Uint8Array(32);
        crypto_core_hsalsa20(s6, n8, k2, sigma);
        var sn = new Uint8Array(8);
        for (var i4 = 0; i4 < 8; i4++) sn[i4] = n8[i4 + 16];
        return crypto_stream_salsa20(c4, cpos, d5, sn, s6);
      }
      function crypto_stream_xor(c4, cpos, m2, mpos, d5, n8, k2) {
        var s6 = new Uint8Array(32);
        crypto_core_hsalsa20(s6, n8, k2, sigma);
        var sn = new Uint8Array(8);
        for (var i4 = 0; i4 < 8; i4++) sn[i4] = n8[i4 + 16];
        return crypto_stream_salsa20_xor(c4, cpos, m2, mpos, d5, sn, s6);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t22, t32, t42, t52, t62, t72;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t22 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t22 << 6) & 7939;
        t32 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t22 >>> 7 | t32 << 9) & 8191;
        t42 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t32 >>> 4 | t42 << 12) & 255;
        this.r[5] = t42 >>> 1 & 8190;
        t52 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t42 >>> 14 | t52 << 2) & 8191;
        t62 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t52 >>> 11 | t62 << 5) & 8065;
        t72 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t62 >>> 8 | t72 << 8) & 8191;
        this.r[9] = t72 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m2, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t22, t32, t42, t52, t62, t72, c4;
        var d0, d1, d22, d32, d42, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r22 = this.r[2], r32 = this.r[3], r42 = this.r[4], r52 = this.r[5], r62 = this.r[6], r72 = this.r[7], r82 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m2[mpos + 0] & 255 | (m2[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m2[mpos + 2] & 255 | (m2[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t22 = m2[mpos + 4] & 255 | (m2[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t22 << 6) & 8191;
          t32 = m2[mpos + 6] & 255 | (m2[mpos + 7] & 255) << 8;
          h3 += (t22 >>> 7 | t32 << 9) & 8191;
          t42 = m2[mpos + 8] & 255 | (m2[mpos + 9] & 255) << 8;
          h4 += (t32 >>> 4 | t42 << 12) & 8191;
          h5 += t42 >>> 1 & 8191;
          t52 = m2[mpos + 10] & 255 | (m2[mpos + 11] & 255) << 8;
          h6 += (t42 >>> 14 | t52 << 2) & 8191;
          t62 = m2[mpos + 12] & 255 | (m2[mpos + 13] & 255) << 8;
          h7 += (t52 >>> 11 | t62 << 5) & 8191;
          t72 = m2[mpos + 14] & 255 | (m2[mpos + 15] & 255) << 8;
          h8 += (t62 >>> 8 | t72 << 8) & 8191;
          h9 += t72 >>> 5 | hibit;
          c4 = 0;
          d0 = c4;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r82);
          d0 += h3 * (5 * r72);
          d0 += h4 * (5 * r62);
          c4 = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r52);
          d0 += h6 * (5 * r42);
          d0 += h7 * (5 * r32);
          d0 += h8 * (5 * r22);
          d0 += h9 * (5 * r1);
          c4 += d0 >>> 13;
          d0 &= 8191;
          d1 = c4;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r82);
          d1 += h4 * (5 * r72);
          c4 = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r62);
          d1 += h6 * (5 * r52);
          d1 += h7 * (5 * r42);
          d1 += h8 * (5 * r32);
          d1 += h9 * (5 * r22);
          c4 += d1 >>> 13;
          d1 &= 8191;
          d22 = c4;
          d22 += h0 * r22;
          d22 += h1 * r1;
          d22 += h2 * r0;
          d22 += h3 * (5 * r9);
          d22 += h4 * (5 * r82);
          c4 = d22 >>> 13;
          d22 &= 8191;
          d22 += h5 * (5 * r72);
          d22 += h6 * (5 * r62);
          d22 += h7 * (5 * r52);
          d22 += h8 * (5 * r42);
          d22 += h9 * (5 * r32);
          c4 += d22 >>> 13;
          d22 &= 8191;
          d32 = c4;
          d32 += h0 * r32;
          d32 += h1 * r22;
          d32 += h2 * r1;
          d32 += h3 * r0;
          d32 += h4 * (5 * r9);
          c4 = d32 >>> 13;
          d32 &= 8191;
          d32 += h5 * (5 * r82);
          d32 += h6 * (5 * r72);
          d32 += h7 * (5 * r62);
          d32 += h8 * (5 * r52);
          d32 += h9 * (5 * r42);
          c4 += d32 >>> 13;
          d32 &= 8191;
          d42 = c4;
          d42 += h0 * r42;
          d42 += h1 * r32;
          d42 += h2 * r22;
          d42 += h3 * r1;
          d42 += h4 * r0;
          c4 = d42 >>> 13;
          d42 &= 8191;
          d42 += h5 * (5 * r9);
          d42 += h6 * (5 * r82);
          d42 += h7 * (5 * r72);
          d42 += h8 * (5 * r62);
          d42 += h9 * (5 * r52);
          c4 += d42 >>> 13;
          d42 &= 8191;
          d5 = c4;
          d5 += h0 * r52;
          d5 += h1 * r42;
          d5 += h2 * r32;
          d5 += h3 * r22;
          d5 += h4 * r1;
          c4 = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r82);
          d5 += h8 * (5 * r72);
          d5 += h9 * (5 * r62);
          c4 += d5 >>> 13;
          d5 &= 8191;
          d6 = c4;
          d6 += h0 * r62;
          d6 += h1 * r52;
          d6 += h2 * r42;
          d6 += h3 * r32;
          d6 += h4 * r22;
          c4 = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r82);
          d6 += h9 * (5 * r72);
          c4 += d6 >>> 13;
          d6 &= 8191;
          d7 = c4;
          d7 += h0 * r72;
          d7 += h1 * r62;
          d7 += h2 * r52;
          d7 += h3 * r42;
          d7 += h4 * r32;
          c4 = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r22;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r82);
          c4 += d7 >>> 13;
          d7 &= 8191;
          d8 = c4;
          d8 += h0 * r82;
          d8 += h1 * r72;
          d8 += h2 * r62;
          d8 += h3 * r52;
          d8 += h4 * r42;
          c4 = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r32;
          d8 += h6 * r22;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c4 += d8 >>> 13;
          d8 &= 8191;
          d9 = c4;
          d9 += h0 * r9;
          d9 += h1 * r82;
          d9 += h2 * r72;
          d9 += h3 * r62;
          d9 += h4 * r52;
          c4 = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r42;
          d9 += h6 * r32;
          d9 += h7 * r22;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c4 += d9 >>> 13;
          d9 &= 8191;
          c4 = (c4 << 2) + c4 | 0;
          c4 = c4 + d0 | 0;
          d0 = c4 & 8191;
          c4 = c4 >>> 13;
          d1 += c4;
          h0 = d0;
          h1 = d1;
          h2 = d22;
          h3 = d32;
          h4 = d42;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g3 = new Uint16Array(10);
        var c4, mask, f4, i4;
        if (this.leftover) {
          i4 = this.leftover;
          this.buffer[i4++] = 1;
          for (; i4 < 16; i4++) this.buffer[i4] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c4 = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i4 = 2; i4 < 10; i4++) {
          this.h[i4] += c4;
          c4 = this.h[i4] >>> 13;
          this.h[i4] &= 8191;
        }
        this.h[0] += c4 * 5;
        c4 = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c4;
        c4 = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c4;
        g3[0] = this.h[0] + 5;
        c4 = g3[0] >>> 13;
        g3[0] &= 8191;
        for (i4 = 1; i4 < 10; i4++) {
          g3[i4] = this.h[i4] + c4;
          c4 = g3[i4] >>> 13;
          g3[i4] &= 8191;
        }
        g3[9] -= 1 << 13;
        mask = (c4 ^ 1) - 1;
        for (i4 = 0; i4 < 10; i4++) g3[i4] &= mask;
        mask = ~mask;
        for (i4 = 0; i4 < 10; i4++) this.h[i4] = this.h[i4] & mask | g3[i4];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f4 = this.h[0] + this.pad[0];
        this.h[0] = f4 & 65535;
        for (i4 = 1; i4 < 8; i4++) {
          f4 = (this.h[i4] + this.pad[i4] | 0) + (f4 >>> 16) | 0;
          this.h[i4] = f4 & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m2, mpos, bytes) {
        var i4, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i4 = 0; i4 < want; i4++)
            this.buffer[this.leftover + i4] = m2[mpos + i4];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m2, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i4 = 0; i4 < bytes; i4++)
            this.buffer[this.leftover + i4] = m2[mpos + i4];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m2, mpos, n8, k2) {
        var s6 = new poly1305(k2);
        s6.update(m2, mpos, n8);
        s6.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h2, hpos, m2, mpos, n8, k2) {
        var x3 = new Uint8Array(16);
        crypto_onetimeauth(x3, 0, m2, mpos, n8, k2);
        return crypto_verify_16(h2, hpos, x3, 0);
      }
      function crypto_secretbox(c4, m2, d5, n8, k2) {
        var i4;
        if (d5 < 32) return -1;
        crypto_stream_xor(c4, 0, m2, 0, d5, n8, k2);
        crypto_onetimeauth(c4, 16, c4, 32, d5 - 32, c4);
        for (i4 = 0; i4 < 16; i4++) c4[i4] = 0;
        return 0;
      }
      function crypto_secretbox_open(m2, c4, d5, n8, k2) {
        var i4;
        var x3 = new Uint8Array(32);
        if (d5 < 32) return -1;
        crypto_stream(x3, 0, 32, n8, k2);
        if (crypto_onetimeauth_verify(c4, 16, c4, 32, d5 - 32, x3) !== 0) return -1;
        crypto_stream_xor(m2, 0, c4, 0, d5, n8, k2);
        for (i4 = 0; i4 < 32; i4++) m2[i4] = 0;
        return 0;
      }
      function set25519(r9, a5) {
        var i4;
        for (i4 = 0; i4 < 16; i4++) r9[i4] = a5[i4] | 0;
      }
      function car25519(o5) {
        var i4, v2, c4 = 1;
        for (i4 = 0; i4 < 16; i4++) {
          v2 = o5[i4] + c4 + 65535;
          c4 = Math.floor(v2 / 65536);
          o5[i4] = v2 - c4 * 65536;
        }
        o5[0] += c4 - 1 + 37 * (c4 - 1);
      }
      function sel25519(p2, q, b) {
        var t8, c4 = ~(b - 1);
        for (var i4 = 0; i4 < 16; i4++) {
          t8 = c4 & (p2[i4] ^ q[i4]);
          p2[i4] ^= t8;
          q[i4] ^= t8;
        }
      }
      function pack25519(o5, n8) {
        var i4, j, b;
        var m2 = gf(), t8 = gf();
        for (i4 = 0; i4 < 16; i4++) t8[i4] = n8[i4];
        car25519(t8);
        car25519(t8);
        car25519(t8);
        for (j = 0; j < 2; j++) {
          m2[0] = t8[0] - 65517;
          for (i4 = 1; i4 < 15; i4++) {
            m2[i4] = t8[i4] - 65535 - (m2[i4 - 1] >> 16 & 1);
            m2[i4 - 1] &= 65535;
          }
          m2[15] = t8[15] - 32767 - (m2[14] >> 16 & 1);
          b = m2[15] >> 16 & 1;
          m2[14] &= 65535;
          sel25519(t8, m2, 1 - b);
        }
        for (i4 = 0; i4 < 16; i4++) {
          o5[2 * i4] = t8[i4] & 255;
          o5[2 * i4 + 1] = t8[i4] >> 8;
        }
      }
      function neq25519(a5, b) {
        var c4 = new Uint8Array(32), d5 = new Uint8Array(32);
        pack25519(c4, a5);
        pack25519(d5, b);
        return crypto_verify_32(c4, 0, d5, 0);
      }
      function par25519(a5) {
        var d5 = new Uint8Array(32);
        pack25519(d5, a5);
        return d5[0] & 1;
      }
      function unpack25519(o5, n8) {
        var i4;
        for (i4 = 0; i4 < 16; i4++) o5[i4] = n8[2 * i4] + (n8[2 * i4 + 1] << 8);
        o5[15] &= 32767;
      }
      function A(o5, a5, b) {
        for (var i4 = 0; i4 < 16; i4++) o5[i4] = a5[i4] + b[i4];
      }
      function Z(o5, a5, b) {
        for (var i4 = 0; i4 < 16; i4++) o5[i4] = a5[i4] - b[i4];
      }
      function M(o5, a5, b) {
        var v2, c4, t0 = 0, t1 = 0, t22 = 0, t32 = 0, t42 = 0, t52 = 0, t62 = 0, t72 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t222 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v2 = a5[0];
        t0 += v2 * b0;
        t1 += v2 * b1;
        t22 += v2 * b2;
        t32 += v2 * b3;
        t42 += v2 * b4;
        t52 += v2 * b5;
        t62 += v2 * b6;
        t72 += v2 * b7;
        t8 += v2 * b8;
        t9 += v2 * b9;
        t10 += v2 * b10;
        t11 += v2 * b11;
        t12 += v2 * b12;
        t13 += v2 * b13;
        t14 += v2 * b14;
        t15 += v2 * b15;
        v2 = a5[1];
        t1 += v2 * b0;
        t22 += v2 * b1;
        t32 += v2 * b2;
        t42 += v2 * b3;
        t52 += v2 * b4;
        t62 += v2 * b5;
        t72 += v2 * b6;
        t8 += v2 * b7;
        t9 += v2 * b8;
        t10 += v2 * b9;
        t11 += v2 * b10;
        t12 += v2 * b11;
        t13 += v2 * b12;
        t14 += v2 * b13;
        t15 += v2 * b14;
        t16 += v2 * b15;
        v2 = a5[2];
        t22 += v2 * b0;
        t32 += v2 * b1;
        t42 += v2 * b2;
        t52 += v2 * b3;
        t62 += v2 * b4;
        t72 += v2 * b5;
        t8 += v2 * b6;
        t9 += v2 * b7;
        t10 += v2 * b8;
        t11 += v2 * b9;
        t12 += v2 * b10;
        t13 += v2 * b11;
        t14 += v2 * b12;
        t15 += v2 * b13;
        t16 += v2 * b14;
        t17 += v2 * b15;
        v2 = a5[3];
        t32 += v2 * b0;
        t42 += v2 * b1;
        t52 += v2 * b2;
        t62 += v2 * b3;
        t72 += v2 * b4;
        t8 += v2 * b5;
        t9 += v2 * b6;
        t10 += v2 * b7;
        t11 += v2 * b8;
        t12 += v2 * b9;
        t13 += v2 * b10;
        t14 += v2 * b11;
        t15 += v2 * b12;
        t16 += v2 * b13;
        t17 += v2 * b14;
        t18 += v2 * b15;
        v2 = a5[4];
        t42 += v2 * b0;
        t52 += v2 * b1;
        t62 += v2 * b2;
        t72 += v2 * b3;
        t8 += v2 * b4;
        t9 += v2 * b5;
        t10 += v2 * b6;
        t11 += v2 * b7;
        t12 += v2 * b8;
        t13 += v2 * b9;
        t14 += v2 * b10;
        t15 += v2 * b11;
        t16 += v2 * b12;
        t17 += v2 * b13;
        t18 += v2 * b14;
        t19 += v2 * b15;
        v2 = a5[5];
        t52 += v2 * b0;
        t62 += v2 * b1;
        t72 += v2 * b2;
        t8 += v2 * b3;
        t9 += v2 * b4;
        t10 += v2 * b5;
        t11 += v2 * b6;
        t12 += v2 * b7;
        t13 += v2 * b8;
        t14 += v2 * b9;
        t15 += v2 * b10;
        t16 += v2 * b11;
        t17 += v2 * b12;
        t18 += v2 * b13;
        t19 += v2 * b14;
        t20 += v2 * b15;
        v2 = a5[6];
        t62 += v2 * b0;
        t72 += v2 * b1;
        t8 += v2 * b2;
        t9 += v2 * b3;
        t10 += v2 * b4;
        t11 += v2 * b5;
        t12 += v2 * b6;
        t13 += v2 * b7;
        t14 += v2 * b8;
        t15 += v2 * b9;
        t16 += v2 * b10;
        t17 += v2 * b11;
        t18 += v2 * b12;
        t19 += v2 * b13;
        t20 += v2 * b14;
        t21 += v2 * b15;
        v2 = a5[7];
        t72 += v2 * b0;
        t8 += v2 * b1;
        t9 += v2 * b2;
        t10 += v2 * b3;
        t11 += v2 * b4;
        t12 += v2 * b5;
        t13 += v2 * b6;
        t14 += v2 * b7;
        t15 += v2 * b8;
        t16 += v2 * b9;
        t17 += v2 * b10;
        t18 += v2 * b11;
        t19 += v2 * b12;
        t20 += v2 * b13;
        t21 += v2 * b14;
        t222 += v2 * b15;
        v2 = a5[8];
        t8 += v2 * b0;
        t9 += v2 * b1;
        t10 += v2 * b2;
        t11 += v2 * b3;
        t12 += v2 * b4;
        t13 += v2 * b5;
        t14 += v2 * b6;
        t15 += v2 * b7;
        t16 += v2 * b8;
        t17 += v2 * b9;
        t18 += v2 * b10;
        t19 += v2 * b11;
        t20 += v2 * b12;
        t21 += v2 * b13;
        t222 += v2 * b14;
        t23 += v2 * b15;
        v2 = a5[9];
        t9 += v2 * b0;
        t10 += v2 * b1;
        t11 += v2 * b2;
        t12 += v2 * b3;
        t13 += v2 * b4;
        t14 += v2 * b5;
        t15 += v2 * b6;
        t16 += v2 * b7;
        t17 += v2 * b8;
        t18 += v2 * b9;
        t19 += v2 * b10;
        t20 += v2 * b11;
        t21 += v2 * b12;
        t222 += v2 * b13;
        t23 += v2 * b14;
        t24 += v2 * b15;
        v2 = a5[10];
        t10 += v2 * b0;
        t11 += v2 * b1;
        t12 += v2 * b2;
        t13 += v2 * b3;
        t14 += v2 * b4;
        t15 += v2 * b5;
        t16 += v2 * b6;
        t17 += v2 * b7;
        t18 += v2 * b8;
        t19 += v2 * b9;
        t20 += v2 * b10;
        t21 += v2 * b11;
        t222 += v2 * b12;
        t23 += v2 * b13;
        t24 += v2 * b14;
        t25 += v2 * b15;
        v2 = a5[11];
        t11 += v2 * b0;
        t12 += v2 * b1;
        t13 += v2 * b2;
        t14 += v2 * b3;
        t15 += v2 * b4;
        t16 += v2 * b5;
        t17 += v2 * b6;
        t18 += v2 * b7;
        t19 += v2 * b8;
        t20 += v2 * b9;
        t21 += v2 * b10;
        t222 += v2 * b11;
        t23 += v2 * b12;
        t24 += v2 * b13;
        t25 += v2 * b14;
        t26 += v2 * b15;
        v2 = a5[12];
        t12 += v2 * b0;
        t13 += v2 * b1;
        t14 += v2 * b2;
        t15 += v2 * b3;
        t16 += v2 * b4;
        t17 += v2 * b5;
        t18 += v2 * b6;
        t19 += v2 * b7;
        t20 += v2 * b8;
        t21 += v2 * b9;
        t222 += v2 * b10;
        t23 += v2 * b11;
        t24 += v2 * b12;
        t25 += v2 * b13;
        t26 += v2 * b14;
        t27 += v2 * b15;
        v2 = a5[13];
        t13 += v2 * b0;
        t14 += v2 * b1;
        t15 += v2 * b2;
        t16 += v2 * b3;
        t17 += v2 * b4;
        t18 += v2 * b5;
        t19 += v2 * b6;
        t20 += v2 * b7;
        t21 += v2 * b8;
        t222 += v2 * b9;
        t23 += v2 * b10;
        t24 += v2 * b11;
        t25 += v2 * b12;
        t26 += v2 * b13;
        t27 += v2 * b14;
        t28 += v2 * b15;
        v2 = a5[14];
        t14 += v2 * b0;
        t15 += v2 * b1;
        t16 += v2 * b2;
        t17 += v2 * b3;
        t18 += v2 * b4;
        t19 += v2 * b5;
        t20 += v2 * b6;
        t21 += v2 * b7;
        t222 += v2 * b8;
        t23 += v2 * b9;
        t24 += v2 * b10;
        t25 += v2 * b11;
        t26 += v2 * b12;
        t27 += v2 * b13;
        t28 += v2 * b14;
        t29 += v2 * b15;
        v2 = a5[15];
        t15 += v2 * b0;
        t16 += v2 * b1;
        t17 += v2 * b2;
        t18 += v2 * b3;
        t19 += v2 * b4;
        t20 += v2 * b5;
        t21 += v2 * b6;
        t222 += v2 * b7;
        t23 += v2 * b8;
        t24 += v2 * b9;
        t25 += v2 * b10;
        t26 += v2 * b11;
        t27 += v2 * b12;
        t28 += v2 * b13;
        t29 += v2 * b14;
        t30 += v2 * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t22 += 38 * t18;
        t32 += 38 * t19;
        t42 += 38 * t20;
        t52 += 38 * t21;
        t62 += 38 * t222;
        t72 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c4 = 1;
        v2 = t0 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t0 = v2 - c4 * 65536;
        v2 = t1 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t1 = v2 - c4 * 65536;
        v2 = t22 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t22 = v2 - c4 * 65536;
        v2 = t32 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t32 = v2 - c4 * 65536;
        v2 = t42 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t42 = v2 - c4 * 65536;
        v2 = t52 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t52 = v2 - c4 * 65536;
        v2 = t62 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t62 = v2 - c4 * 65536;
        v2 = t72 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t72 = v2 - c4 * 65536;
        v2 = t8 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t8 = v2 - c4 * 65536;
        v2 = t9 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t9 = v2 - c4 * 65536;
        v2 = t10 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t10 = v2 - c4 * 65536;
        v2 = t11 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t11 = v2 - c4 * 65536;
        v2 = t12 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t12 = v2 - c4 * 65536;
        v2 = t13 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t13 = v2 - c4 * 65536;
        v2 = t14 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t14 = v2 - c4 * 65536;
        v2 = t15 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t15 = v2 - c4 * 65536;
        t0 += c4 - 1 + 37 * (c4 - 1);
        c4 = 1;
        v2 = t0 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t0 = v2 - c4 * 65536;
        v2 = t1 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t1 = v2 - c4 * 65536;
        v2 = t22 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t22 = v2 - c4 * 65536;
        v2 = t32 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t32 = v2 - c4 * 65536;
        v2 = t42 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t42 = v2 - c4 * 65536;
        v2 = t52 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t52 = v2 - c4 * 65536;
        v2 = t62 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t62 = v2 - c4 * 65536;
        v2 = t72 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t72 = v2 - c4 * 65536;
        v2 = t8 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t8 = v2 - c4 * 65536;
        v2 = t9 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t9 = v2 - c4 * 65536;
        v2 = t10 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t10 = v2 - c4 * 65536;
        v2 = t11 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t11 = v2 - c4 * 65536;
        v2 = t12 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t12 = v2 - c4 * 65536;
        v2 = t13 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t13 = v2 - c4 * 65536;
        v2 = t14 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t14 = v2 - c4 * 65536;
        v2 = t15 + c4 + 65535;
        c4 = Math.floor(v2 / 65536);
        t15 = v2 - c4 * 65536;
        t0 += c4 - 1 + 37 * (c4 - 1);
        o5[0] = t0;
        o5[1] = t1;
        o5[2] = t22;
        o5[3] = t32;
        o5[4] = t42;
        o5[5] = t52;
        o5[6] = t62;
        o5[7] = t72;
        o5[8] = t8;
        o5[9] = t9;
        o5[10] = t10;
        o5[11] = t11;
        o5[12] = t12;
        o5[13] = t13;
        o5[14] = t14;
        o5[15] = t15;
      }
      function S(o5, a5) {
        M(o5, a5, a5);
      }
      function inv25519(o5, i4) {
        var c4 = gf();
        var a5;
        for (a5 = 0; a5 < 16; a5++) c4[a5] = i4[a5];
        for (a5 = 253; a5 >= 0; a5--) {
          S(c4, c4);
          if (a5 !== 2 && a5 !== 4) M(c4, c4, i4);
        }
        for (a5 = 0; a5 < 16; a5++) o5[a5] = c4[a5];
      }
      function pow2523(o5, i4) {
        var c4 = gf();
        var a5;
        for (a5 = 0; a5 < 16; a5++) c4[a5] = i4[a5];
        for (a5 = 250; a5 >= 0; a5--) {
          S(c4, c4);
          if (a5 !== 1) M(c4, c4, i4);
        }
        for (a5 = 0; a5 < 16; a5++) o5[a5] = c4[a5];
      }
      function crypto_scalarmult(q, n8, p2) {
        var z = new Uint8Array(32);
        var x3 = new Float64Array(80), r9, i4;
        var a5 = gf(), b = gf(), c4 = gf(), d5 = gf(), e6 = gf(), f4 = gf();
        for (i4 = 0; i4 < 31; i4++) z[i4] = n8[i4];
        z[31] = n8[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x3, p2);
        for (i4 = 0; i4 < 16; i4++) {
          b[i4] = x3[i4];
          d5[i4] = a5[i4] = c4[i4] = 0;
        }
        a5[0] = d5[0] = 1;
        for (i4 = 254; i4 >= 0; --i4) {
          r9 = z[i4 >>> 3] >>> (i4 & 7) & 1;
          sel25519(a5, b, r9);
          sel25519(c4, d5, r9);
          A(e6, a5, c4);
          Z(a5, a5, c4);
          A(c4, b, d5);
          Z(b, b, d5);
          S(d5, e6);
          S(f4, a5);
          M(a5, c4, a5);
          M(c4, b, e6);
          A(e6, a5, c4);
          Z(a5, a5, c4);
          S(b, a5);
          Z(c4, d5, f4);
          M(a5, c4, _121665);
          A(a5, a5, d5);
          M(c4, c4, a5);
          M(a5, d5, f4);
          M(d5, b, x3);
          S(b, e6);
          sel25519(a5, b, r9);
          sel25519(c4, d5, r9);
        }
        for (i4 = 0; i4 < 16; i4++) {
          x3[i4 + 16] = a5[i4];
          x3[i4 + 32] = c4[i4];
          x3[i4 + 48] = b[i4];
          x3[i4 + 64] = d5[i4];
        }
        var x32 = x3.subarray(32);
        var x16 = x3.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n8) {
        return crypto_scalarmult(q, n8, _9);
      }
      function crypto_box_keypair(y2, x3) {
        randombytes(x3, 32);
        return crypto_scalarmult_base(y2, x3);
      }
      function crypto_box_beforenm(k2, y2, x3) {
        var s6 = new Uint8Array(32);
        crypto_scalarmult(s6, x3, y2);
        return crypto_core_hsalsa20(k2, _0, s6, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c4, m2, d5, n8, y2, x3) {
        var k2 = new Uint8Array(32);
        crypto_box_beforenm(k2, y2, x3);
        return crypto_box_afternm(c4, m2, d5, n8, k2);
      }
      function crypto_box_open(m2, c4, d5, n8, y2, x3) {
        var k2 = new Uint8Array(32);
        crypto_box_beforenm(k2, y2, x3);
        return crypto_box_open_afternm(m2, c4, d5, n8, k2);
      }
      var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m2, n8) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i4, j, h2, l4, a5, b, c4, d5;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n8 >= 128) {
          for (i4 = 0; i4 < 16; i4++) {
            j = 8 * i4 + pos;
            wh[i4] = m2[j + 0] << 24 | m2[j + 1] << 16 | m2[j + 2] << 8 | m2[j + 3];
            wl[i4] = m2[j + 4] << 24 | m2[j + 5] << 16 | m2[j + 6] << 8 | m2[j + 7];
          }
          for (i4 = 0; i4 < 80; i4++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h2 = ah7;
            l4 = al7;
            a5 = l4 & 65535;
            b = l4 >>> 16;
            c4 = h2 & 65535;
            d5 = h2 >>> 16;
            h2 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l4 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a5 += l4 & 65535;
            b += l4 >>> 16;
            c4 += h2 & 65535;
            d5 += h2 >>> 16;
            h2 = ah4 & ah5 ^ ~ah4 & ah6;
            l4 = al4 & al5 ^ ~al4 & al6;
            a5 += l4 & 65535;
            b += l4 >>> 16;
            c4 += h2 & 65535;
            d5 += h2 >>> 16;
            h2 = K[i4 * 2];
            l4 = K[i4 * 2 + 1];
            a5 += l4 & 65535;
            b += l4 >>> 16;
            c4 += h2 & 65535;
            d5 += h2 >>> 16;
            h2 = wh[i4 % 16];
            l4 = wl[i4 % 16];
            a5 += l4 & 65535;
            b += l4 >>> 16;
            c4 += h2 & 65535;
            d5 += h2 >>> 16;
            b += a5 >>> 16;
            c4 += b >>> 16;
            d5 += c4 >>> 16;
            th = c4 & 65535 | d5 << 16;
            tl = a5 & 65535 | b << 16;
            h2 = th;
            l4 = tl;
            a5 = l4 & 65535;
            b = l4 >>> 16;
            c4 = h2 & 65535;
            d5 = h2 >>> 16;
            h2 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l4 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a5 += l4 & 65535;
            b += l4 >>> 16;
            c4 += h2 & 65535;
            d5 += h2 >>> 16;
            h2 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l4 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a5 += l4 & 65535;
            b += l4 >>> 16;
            c4 += h2 & 65535;
            d5 += h2 >>> 16;
            b += a5 >>> 16;
            c4 += b >>> 16;
            d5 += c4 >>> 16;
            bh7 = c4 & 65535 | d5 << 16;
            bl7 = a5 & 65535 | b << 16;
            h2 = bh3;
            l4 = bl3;
            a5 = l4 & 65535;
            b = l4 >>> 16;
            c4 = h2 & 65535;
            d5 = h2 >>> 16;
            h2 = th;
            l4 = tl;
            a5 += l4 & 65535;
            b += l4 >>> 16;
            c4 += h2 & 65535;
            d5 += h2 >>> 16;
            b += a5 >>> 16;
            c4 += b >>> 16;
            d5 += c4 >>> 16;
            bh3 = c4 & 65535 | d5 << 16;
            bl3 = a5 & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i4 % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h2 = wh[j];
                l4 = wl[j];
                a5 = l4 & 65535;
                b = l4 >>> 16;
                c4 = h2 & 65535;
                d5 = h2 >>> 16;
                h2 = wh[(j + 9) % 16];
                l4 = wl[(j + 9) % 16];
                a5 += l4 & 65535;
                b += l4 >>> 16;
                c4 += h2 & 65535;
                d5 += h2 >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h2 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l4 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a5 += l4 & 65535;
                b += l4 >>> 16;
                c4 += h2 & 65535;
                d5 += h2 >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h2 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l4 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a5 += l4 & 65535;
                b += l4 >>> 16;
                c4 += h2 & 65535;
                d5 += h2 >>> 16;
                b += a5 >>> 16;
                c4 += b >>> 16;
                d5 += c4 >>> 16;
                wh[j] = c4 & 65535 | d5 << 16;
                wl[j] = a5 & 65535 | b << 16;
              }
            }
          }
          h2 = ah0;
          l4 = al0;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[0];
          l4 = hl[0];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[0] = ah0 = c4 & 65535 | d5 << 16;
          hl[0] = al0 = a5 & 65535 | b << 16;
          h2 = ah1;
          l4 = al1;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[1];
          l4 = hl[1];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[1] = ah1 = c4 & 65535 | d5 << 16;
          hl[1] = al1 = a5 & 65535 | b << 16;
          h2 = ah2;
          l4 = al2;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[2];
          l4 = hl[2];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[2] = ah2 = c4 & 65535 | d5 << 16;
          hl[2] = al2 = a5 & 65535 | b << 16;
          h2 = ah3;
          l4 = al3;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[3];
          l4 = hl[3];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[3] = ah3 = c4 & 65535 | d5 << 16;
          hl[3] = al3 = a5 & 65535 | b << 16;
          h2 = ah4;
          l4 = al4;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[4];
          l4 = hl[4];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[4] = ah4 = c4 & 65535 | d5 << 16;
          hl[4] = al4 = a5 & 65535 | b << 16;
          h2 = ah5;
          l4 = al5;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[5];
          l4 = hl[5];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[5] = ah5 = c4 & 65535 | d5 << 16;
          hl[5] = al5 = a5 & 65535 | b << 16;
          h2 = ah6;
          l4 = al6;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[6];
          l4 = hl[6];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[6] = ah6 = c4 & 65535 | d5 << 16;
          hl[6] = al6 = a5 & 65535 | b << 16;
          h2 = ah7;
          l4 = al7;
          a5 = l4 & 65535;
          b = l4 >>> 16;
          c4 = h2 & 65535;
          d5 = h2 >>> 16;
          h2 = hh[7];
          l4 = hl[7];
          a5 += l4 & 65535;
          b += l4 >>> 16;
          c4 += h2 & 65535;
          d5 += h2 >>> 16;
          b += a5 >>> 16;
          c4 += b >>> 16;
          d5 += c4 >>> 16;
          hh[7] = ah7 = c4 & 65535 | d5 << 16;
          hl[7] = al7 = a5 & 65535 | b << 16;
          pos += 128;
          n8 -= 128;
        }
        return n8;
      }
      function crypto_hash(out, m2, n8) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x3 = new Uint8Array(256), i4, b = n8;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m2, n8);
        n8 %= 128;
        for (i4 = 0; i4 < n8; i4++) x3[i4] = m2[b - n8 + i4];
        x3[n8] = 128;
        n8 = 256 - 128 * (n8 < 112 ? 1 : 0);
        x3[n8 - 9] = 0;
        ts64(x3, n8 - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x3, n8);
        for (i4 = 0; i4 < 8; i4++) ts64(out, 8 * i4, hh[i4], hl[i4]);
        return 0;
      }
      function add(p2, q) {
        var a5 = gf(), b = gf(), c4 = gf(), d5 = gf(), e6 = gf(), f4 = gf(), g3 = gf(), h2 = gf(), t8 = gf();
        Z(a5, p2[1], p2[0]);
        Z(t8, q[1], q[0]);
        M(a5, a5, t8);
        A(b, p2[0], p2[1]);
        A(t8, q[0], q[1]);
        M(b, b, t8);
        M(c4, p2[3], q[3]);
        M(c4, c4, D2);
        M(d5, p2[2], q[2]);
        A(d5, d5, d5);
        Z(e6, b, a5);
        Z(f4, d5, c4);
        A(g3, d5, c4);
        A(h2, b, a5);
        M(p2[0], e6, f4);
        M(p2[1], h2, g3);
        M(p2[2], g3, f4);
        M(p2[3], e6, h2);
      }
      function cswap(p2, q, b) {
        var i4;
        for (i4 = 0; i4 < 4; i4++) {
          sel25519(p2[i4], q[i4], b);
        }
      }
      function pack(r9, p2) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p2[2]);
        M(tx, p2[0], zi);
        M(ty, p2[1], zi);
        pack25519(r9, ty);
        r9[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p2, q, s6) {
        var b, i4;
        set25519(p2[0], gf0);
        set25519(p2[1], gf1);
        set25519(p2[2], gf1);
        set25519(p2[3], gf0);
        for (i4 = 255; i4 >= 0; --i4) {
          b = s6[i4 / 8 | 0] >> (i4 & 7) & 1;
          cswap(p2, q, b);
          add(q, p2);
          add(p2, p2);
          cswap(p2, q, b);
        }
      }
      function scalarbase(p2, s6) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p2, q, s6);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d5 = new Uint8Array(64);
        var p2 = [gf(), gf(), gf(), gf()];
        var i4;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d5, sk, 32);
        d5[0] &= 248;
        d5[31] &= 127;
        d5[31] |= 64;
        scalarbase(p2, d5);
        pack(pk, p2);
        for (i4 = 0; i4 < 32; i4++) sk[i4 + 32] = pk[i4];
        return 0;
      }
      var L3 = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r9, x3) {
        var carry, i4, j, k2;
        for (i4 = 63; i4 >= 32; --i4) {
          carry = 0;
          for (j = i4 - 32, k2 = i4 - 12; j < k2; ++j) {
            x3[j] += carry - 16 * x3[i4] * L3[j - (i4 - 32)];
            carry = Math.floor((x3[j] + 128) / 256);
            x3[j] -= carry * 256;
          }
          x3[j] += carry;
          x3[i4] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x3[j] += carry - (x3[31] >> 4) * L3[j];
          carry = x3[j] >> 8;
          x3[j] &= 255;
        }
        for (j = 0; j < 32; j++) x3[j] -= carry * L3[j];
        for (i4 = 0; i4 < 32; i4++) {
          x3[i4 + 1] += x3[i4] >> 8;
          r9[i4] = x3[i4] & 255;
        }
      }
      function reduce2(r9) {
        var x3 = new Float64Array(64), i4;
        for (i4 = 0; i4 < 64; i4++) x3[i4] = r9[i4];
        for (i4 = 0; i4 < 64; i4++) r9[i4] = 0;
        modL(r9, x3);
      }
      function crypto_sign(sm, m2, n8, sk) {
        var d5 = new Uint8Array(64), h2 = new Uint8Array(64), r9 = new Uint8Array(64);
        var i4, j, x3 = new Float64Array(64);
        var p2 = [gf(), gf(), gf(), gf()];
        crypto_hash(d5, sk, 32);
        d5[0] &= 248;
        d5[31] &= 127;
        d5[31] |= 64;
        var smlen = n8 + 64;
        for (i4 = 0; i4 < n8; i4++) sm[64 + i4] = m2[i4];
        for (i4 = 0; i4 < 32; i4++) sm[32 + i4] = d5[32 + i4];
        crypto_hash(r9, sm.subarray(32), n8 + 32);
        reduce2(r9);
        scalarbase(p2, r9);
        pack(sm, p2);
        for (i4 = 32; i4 < 64; i4++) sm[i4] = sk[i4];
        crypto_hash(h2, sm, n8 + 64);
        reduce2(h2);
        for (i4 = 0; i4 < 64; i4++) x3[i4] = 0;
        for (i4 = 0; i4 < 32; i4++) x3[i4] = r9[i4];
        for (i4 = 0; i4 < 32; i4++) {
          for (j = 0; j < 32; j++) {
            x3[i4 + j] += h2[i4] * d5[j];
          }
        }
        modL(sm.subarray(32), x3);
        return smlen;
      }
      function unpackneg(r9, p2) {
        var t8 = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r9[2], gf1);
        unpack25519(r9[1], p2);
        S(num, r9[1]);
        M(den, num, D);
        Z(num, num, r9[2]);
        A(den, r9[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t8, den6, num);
        M(t8, t8, den);
        pow2523(t8, t8);
        M(t8, t8, num);
        M(t8, t8, den);
        M(t8, t8, den);
        M(r9[0], t8, den);
        S(chk, r9[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) M(r9[0], r9[0], I);
        S(chk, r9[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r9[0]) === p2[31] >> 7) Z(r9[0], gf0, r9[0]);
        M(r9[3], r9[0], r9[1]);
        return 0;
      }
      function crypto_sign_open(m2, sm, n8, pk) {
        var i4;
        var t8 = new Uint8Array(32), h2 = new Uint8Array(64);
        var p2 = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n8 < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for (i4 = 0; i4 < n8; i4++) m2[i4] = sm[i4];
        for (i4 = 0; i4 < 32; i4++) m2[i4 + 32] = pk[i4];
        crypto_hash(h2, m2, n8);
        reduce2(h2);
        scalarmult(p2, q, h2);
        scalarbase(q, sm.subarray(32));
        add(p2, q);
        pack(t8, p2);
        n8 -= 64;
        if (crypto_verify_32(sm, 0, t8, 0)) {
          for (i4 = 0; i4 < n8; i4++) m2[i4] = 0;
          return -1;
        }
        for (i4 = 0; i4 < n8; i4++) m2[i4] = sm[i4 + 64];
        return n8;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L: L3,
        pack25519,
        unpack25519,
        M,
        A,
        S,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k2, n8) {
        if (k2.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
        if (n8.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i4 = 0; i4 < arguments.length; i4++) {
          if (!(arguments[i4] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i4 = 0; i4 < arr.length; i4++) arr[i4] = 0;
      }
      nacl.randomBytes = function(n8) {
        var b = new Uint8Array(n8);
        randombytes(b, n8);
        return b;
      };
      nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m2 = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c4 = new Uint8Array(m2.length);
        for (var i4 = 0; i4 < msg.length; i4++) m2[i4 + crypto_secretbox_ZEROBYTES] = msg[i4];
        crypto_secretbox(c4, m2, m2.length, nonce, key);
        return c4.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c4 = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m2 = new Uint8Array(c4.length);
        for (var i4 = 0; i4 < box.length; i4++) c4[i4 + crypto_secretbox_BOXZEROBYTES] = box[i4];
        if (c4.length < 32) return null;
        if (crypto_secretbox_open(m2, c4, c4.length, nonce, key) !== 0) return null;
        return m2.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl.scalarMult = function(n8, p2) {
        checkArrayTypes(n8, p2);
        if (n8.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        if (p2.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n8, p2);
        return q;
      };
      nacl.scalarMult.base = function(n8) {
        checkArrayTypes(n8);
        if (n8.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n8);
        return q;
      };
      nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k2 = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k2);
      };
      nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k2 = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k2, publicKey, secretKey);
        return k2;
      };
      nacl.box.after = nacl.secretbox;
      nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k2 = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k2);
      };
      nacl.box.open.after = nacl.secretbox.open;
      nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl.box.nonceLength = crypto_box_NONCEBYTES;
      nacl.box.overheadLength = nacl.secretbox.overheadLength;
      nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m2 = new Uint8Array(mlen);
        for (var i4 = 0; i4 < m2.length; i4++) m2[i4] = tmp[i4];
        return m2;
      };
      nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i4 = 0; i4 < sig.length; i4++) sig[i4] = signedMsg[i4];
        return sig;
      };
      nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m2 = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i4;
        for (i4 = 0; i4 < crypto_sign_BYTES; i4++) sm[i4] = sig[i4];
        for (i4 = 0; i4 < msg.length; i4++) sm[i4 + crypto_sign_BYTES] = msg[i4];
        return crypto_sign_open(m2, sm, sm.length, publicKey) >= 0;
      };
      nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i4 = 0; i4 < pk.length; i4++) pk[i4] = secretKey[32 + i4];
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i4 = 0; i4 < 32; i4++) sk[i4] = seed[i4];
        crypto_sign_keypair(pk, sk, true);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl.sign.signatureLength = crypto_sign_BYTES;
      nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h2 = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h2, msg, msg.length);
        return h2;
      };
      nacl.hash.hashLength = crypto_hash_BYTES;
      nacl.verify = function(x3, y2) {
        checkArrayTypes(x3, y2);
        if (x3.length === 0 || y2.length === 0) return false;
        if (x3.length !== y2.length) return false;
        return vn(x3, 0, y2, 0, x3.length) === 0 ? true : false;
      };
      nacl.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto2 = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto2 && crypto2.getRandomValues) {
          var QUOTA = 65536;
          nacl.setPRNG(function(x3, n8) {
            var i4, v2 = new Uint8Array(n8);
            for (i4 = 0; i4 < n8; i4 += QUOTA) {
              crypto2.getRandomValues(v2.subarray(i4, i4 + Math.min(n8 - i4, QUOTA)));
            }
            for (i4 = 0; i4 < n8; i4++) x3[i4] = v2[i4];
            cleanup(v2);
          });
        } else if (typeof __require !== "undefined") {
          crypto2 = require_crypto();
          if (crypto2 && crypto2.randomBytes) {
            nacl.setPRNG(function(x3, n8) {
              var i4, v2 = crypto2.randomBytes(n8);
              for (i4 = 0; i4 < n8; i4++) x3[i4] = v2[i4];
              cleanup(v2);
            });
          }
        }
      })();
    })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
  }
});

// node_modules/tweetnacl-util/nacl-util.js
var require_nacl_util = __commonJS({
  "node_modules/tweetnacl-util/nacl-util.js"(exports, module) {
    (function(root, f4) {
      "use strict";
      if (typeof module !== "undefined" && module.exports) module.exports = f4();
      else if (root.nacl) root.nacl.util = f4();
      else {
        root.nacl = {};
        root.nacl.util = f4();
      }
    })(exports, function() {
      "use strict";
      var util = {};
      function validateBase64(s6) {
        if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s6)) {
          throw new TypeError("invalid encoding");
        }
      }
      util.decodeUTF8 = function(s6) {
        if (typeof s6 !== "string") throw new TypeError("expected string");
        var i4, d5 = unescape(encodeURIComponent(s6)), b = new Uint8Array(d5.length);
        for (i4 = 0; i4 < d5.length; i4++) b[i4] = d5.charCodeAt(i4);
        return b;
      };
      util.encodeUTF8 = function(arr) {
        var i4, s6 = [];
        for (i4 = 0; i4 < arr.length; i4++) s6.push(String.fromCharCode(arr[i4]));
        return decodeURIComponent(escape(s6.join("")));
      };
      if (typeof atob === "undefined") {
        if (typeof Buffer.from !== "undefined") {
          util.encodeBase64 = function(arr) {
            return Buffer.from(arr).toString("base64");
          };
          util.decodeBase64 = function(s6) {
            validateBase64(s6);
            return new Uint8Array(Array.prototype.slice.call(Buffer.from(s6, "base64"), 0));
          };
        } else {
          util.encodeBase64 = function(arr) {
            return new Buffer(arr).toString("base64");
          };
          util.decodeBase64 = function(s6) {
            validateBase64(s6);
            return new Uint8Array(Array.prototype.slice.call(new Buffer(s6, "base64"), 0));
          };
        }
      } else {
        util.encodeBase64 = function(arr) {
          var i4, s6 = [], len = arr.length;
          for (i4 = 0; i4 < len; i4++) s6.push(String.fromCharCode(arr[i4]));
          return btoa(s6.join(""));
        };
        util.decodeBase64 = function(s6) {
          validateBase64(s6);
          var i4, d5 = atob(s6), b = new Uint8Array(d5.length);
          for (i4 = 0; i4 < d5.length; i4++) b[i4] = d5.charCodeAt(i4);
          return b;
        };
      }
      return util;
    });
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i4) {
      return i4 + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a4, e_2, _b2;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a4 = _parentage_1.return)) _a4.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e6) {
          errors = e6 instanceof UnsubscriptionError ? e6.errors : [e6];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b2 = _finalizers_1.return)) _b2.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a4;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a4 = this._finalizers) !== null && _a4 !== void 0 ? _a4 : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty2 = new Subscription2();
    empty2.closed = true;
    return empty2;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a4 = context, errorThrown = _a4.errorThrown, error = _a4.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x3) {
  return x3;
}

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a4 = _this, operator = _a4.operator, source = _a4.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a4;
    return (_a4 = this.source) === null || _a4 === void 0 ? void 0 : _a4.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x3) {
        return value = x3;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a4;
  return (_a4 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a4 !== void 0 ? _a4 : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a4;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a4 = this.onFinalize) === null || _a4 === void 0 ? void 0 : _a4.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// node_modules/rxjs/dist/esm5/internal/operators/refCount.js
function refCount() {
  return operate(function(source, subscriber) {
    var connection = null;
    source._refCount++;
    var refCounter = createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
      if (!source || source._refCount <= 0 || 0 < --source._refCount) {
        connection = null;
        return;
      }
      var sharedConnection = source._connection;
      var conn = connection;
      connection = null;
      if (sharedConnection && (!conn || sharedConnection === conn)) {
        sharedConnection.unsubscribe();
      }
      subscriber.unsubscribe();
    });
    source.subscribe(refCounter);
    if (!refCounter.closed) {
      connection = source.connect();
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable = function(_super) {
  __extends(ConnectableObservable2, _super);
  function ConnectableObservable2(source, subjectFactory) {
    var _this = _super.call(this) || this;
    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._subject = null;
    _this._refCount = 0;
    _this._connection = null;
    if (hasLift(source)) {
      _this.lift = source.lift;
    }
    return _this;
  }
  ConnectableObservable2.prototype._subscribe = function(subscriber) {
    return this.getSubject().subscribe(subscriber);
  };
  ConnectableObservable2.prototype.getSubject = function() {
    var subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  };
  ConnectableObservable2.prototype._teardown = function() {
    this._refCount = 0;
    var _connection = this._connection;
    this._subject = this._connection = null;
    _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
  };
  ConnectableObservable2.prototype.connect = function() {
    var _this = this;
    var connection = this._connection;
    if (!connection) {
      connection = this._connection = new Subscription();
      var subject_1 = this.getSubject();
      connection.add(this.source.subscribe(createOperatorSubscriber(subject_1, void 0, function() {
        _this._teardown();
        subject_1.complete();
      }, function(err) {
        _this._teardown();
        subject_1.error(err);
      }, function() {
        return _this._teardown();
      })));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription.EMPTY;
      }
    }
    return connection;
  };
  ConnectableObservable2.prototype.refCount = function() {
    return refCount()(this);
  };
  return ConnectableObservable2;
}(Observable);

// node_modules/rxjs/dist/esm5/internal/scheduler/performanceTimestampProvider.js
var performanceTimestampProvider = {
  now: function() {
    return (performanceTimestampProvider.delegate || performance).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
  schedule: function(callback) {
    var request = requestAnimationFrame;
    var cancel = cancelAnimationFrame;
    var delegate = animationFrameProvider.delegate;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    var handle = request(function(timestamp2) {
      cancel = void 0;
      callback(timestamp2);
    });
    return new Subscription(function() {
      return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
    });
  },
  requestAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  cancelAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js
function animationFramesFactory(timestampProvider) {
  return new Observable(function(subscriber) {
    var provider = timestampProvider || performanceTimestampProvider;
    var start = provider.now();
    var id = 0;
    var run = function() {
      if (!subscriber.closed) {
        id = animationFrameProvider.requestAnimationFrame(function(timestamp2) {
          id = 0;
          var now = provider.now();
          subscriber.next({
            timestamp: timestampProvider ? now : timestamp2,
            elapsed: now - start
          });
          run();
        });
      }
    };
    run();
    return function() {
      if (id) {
        animationFrameProvider.cancelAnimationFrame(id);
      }
    };
  });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

// node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a4;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b2 = __values(_this.currentObservers), _c = _b2.next(); !_c.done; _c = _b2.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a4 = _b2.return)) _a4.call(_b2);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a4;
      return ((_a4 = this.observers) === null || _a4 === void 0 ? void 0 : _a4.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a4 = this, hasError = _a4.hasError, isStopped = _a4.isStopped, observers = _a4.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a4 = this, hasError = _a4.hasError, thrownError = _a4.thrownError, isStopped = _a4.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a4, _b2;
    (_b2 = (_a4 = this.destination) === null || _a4 === void 0 ? void 0 : _a4.next) === null || _b2 === void 0 ? void 0 : _b2.call(_a4, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a4, _b2;
    (_b2 = (_a4 = this.destination) === null || _a4 === void 0 ? void 0 : _a4.error) === null || _b2 === void 0 ? void 0 : _b2.call(_a4, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a4, _b2;
    (_b2 = (_a4 = this.destination) === null || _a4 === void 0 ? void 0 : _a4.complete) === null || _b2 === void 0 ? void 0 : _b2.call(_a4);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a4, _b2;
    return (_b2 = (_a4 = this.source) === null || _a4 === void 0 ? void 0 : _a4.subscribe(subscriber)) !== null && _b2 !== void 0 ? _b2 : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = function(_super) {
  __extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a4 = this, hasError = _a4.hasError, thrownError = _a4.thrownError, _value = _a4._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = function(_super) {
  __extends(ReplaySubject2, _super);
  function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }
    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  ReplaySubject2.prototype.next = function(value) {
    var _a4 = this, isStopped = _a4.isStopped, _buffer = _a4._buffer, _infiniteTimeWindow = _a4._infiniteTimeWindow, _timestampProvider = _a4._timestampProvider, _windowTime = _a4._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a4 = this, _infiniteTimeWindow = _a4._infiniteTimeWindow, _buffer = _a4._buffer;
    var copy = _buffer.slice();
    for (var i4 = 0; i4 < copy.length && !subscriber.closed; i4 += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i4]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject2.prototype._trimBuffer = function() {
    var _a4 = this, _bufferSize = _a4._bufferSize, _timestampProvider = _a4._timestampProvider, _buffer = _a4._buffer, _infiniteTimeWindow = _a4._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last3 = 0;
      for (var i4 = 1; i4 < _buffer.length && _buffer[i4] <= now; i4 += 2) {
        last3 = i4;
      }
      last3 && _buffer.splice(0, last3 + 1);
    }
  };
  return ReplaySubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/AsyncSubject.js
var AsyncSubject = function(_super) {
  __extends(AsyncSubject2, _super);
  function AsyncSubject2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._value = null;
    _this._hasValue = false;
    _this._isComplete = false;
    return _this;
  }
  AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a4 = this, hasError = _a4.hasError, _hasValue = _a4._hasValue, _value = _a4._value, thrownError = _a4.thrownError, isStopped = _a4.isStopped, _isComplete = _a4._isComplete;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  };
  AsyncSubject2.prototype.next = function(value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  };
  AsyncSubject2.prototype.complete = function() {
    var _a4 = this, _hasValue = _a4._hasValue, _value = _a4._value, _isComplete = _a4._isComplete;
    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && _super.prototype.next.call(this, _value);
      _super.prototype.complete.call(this);
    }
  };
  return AsyncSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state2, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);

// node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
  setInterval: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state2, delay2) {
    var _a4;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state2;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = (_a4 = this.id) !== null && _a4 !== void 0 ? _a4 : this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state2, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state2, delay2);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state2, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state2);
    } catch (e6) {
      errored = true;
      errorValue = e6 ? e6 : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a4 = this, id = _a4.id, scheduler = _a4.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);

// node_modules/rxjs/dist/esm5/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
var Immediate = {
  setImmediate: function(cb) {
    var handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(function() {
      return findAndClearHandle(handle) && cb();
    });
    return handle;
  },
  clearImmediate: function(handle) {
    findAndClearHandle(handle);
  }
};

// node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
var setImmediate = Immediate.setImmediate;
var clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
  setImmediate: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
  },
  clearImmediate: function(handle) {
    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
var AsapAction = function(_super) {
  __extends(AsapAction2, _super);
  function AsapAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
  };
  AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    var _a4;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    var actions = scheduler.actions;
    if (id != null && ((_a4 = actions[actions.length - 1]) === null || _a4 === void 0 ? void 0 : _a4.id) !== id) {
      immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = void 0;
      }
    }
    return void 0;
  };
  return AsapAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay2, state2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state2, delay2);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js
var AsapScheduler = function(_super) {
  __extends(AsapScheduler2, _super);
  function AsapScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AsapScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = void 0;
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsapScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/asap.js
var asapScheduler = new AsapScheduler(AsapAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

// node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js
var QueueAction = function(_super) {
  __extends(QueueAction2, _super);
  function QueueAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  QueueAction2.prototype.schedule = function(state2, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 > 0) {
      return _super.prototype.schedule.call(this, state2, delay2);
    }
    this.delay = delay2;
    this.state = state2;
    this.scheduler.flush(this);
    return this;
  };
  QueueAction2.prototype.execute = function(state2, delay2) {
    return delay2 > 0 || this.closed ? _super.prototype.execute.call(this, state2, delay2) : this._execute(state2, delay2);
  };
  QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && delay2 > 0 || delay2 == null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.flush(this);
    return 0;
  };
  return QueueAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js
var QueueScheduler = function(_super) {
  __extends(QueueScheduler2, _super);
  function QueueScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return QueueScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/queue.js
var queueScheduler = new QueueScheduler(QueueAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = function(_super) {
  __extends(AnimationFrameAction2, _super);
  function AnimationFrameAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function() {
      return scheduler.flush(void 0);
    }));
  };
  AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    var _a4;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    var actions = scheduler.actions;
    if (id != null && ((_a4 = actions[actions.length - 1]) === null || _a4 === void 0 ? void 0 : _a4.id) !== id) {
      animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = void 0;
    }
    return void 0;
  };
  return AnimationFrameAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler = function(_super) {
  __extends(AnimationFrameScheduler2, _super);
  function AnimationFrameScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AnimationFrameScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = void 0;
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AnimationFrameScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js
var VirtualTimeScheduler = function(_super) {
  __extends(VirtualTimeScheduler2, _super);
  function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
    if (schedulerActionCtor === void 0) {
      schedulerActionCtor = VirtualAction;
    }
    if (maxFrames === void 0) {
      maxFrames = Infinity;
    }
    var _this = _super.call(this, schedulerActionCtor, function() {
      return _this.frame;
    }) || this;
    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }
  VirtualTimeScheduler2.prototype.flush = function() {
    var _a4 = this, actions = _a4.actions, maxFrames = _a4.maxFrames;
    var error;
    var action;
    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  VirtualTimeScheduler2.frameTimeFactor = 10;
  return VirtualTimeScheduler2;
}(AsyncScheduler);
var VirtualAction = function(_super) {
  __extends(VirtualAction2, _super);
  function VirtualAction2(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }
  VirtualAction2.prototype.schedule = function(state2, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (Number.isFinite(delay2)) {
      if (!this.id) {
        return _super.prototype.schedule.call(this, state2, delay2);
      }
      this.active = false;
      var action = new VirtualAction2(this.scheduler, this.work);
      this.add(action);
      return action.schedule(state2, delay2);
    } else {
      return Subscription.EMPTY;
    }
  };
  VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    this.delay = scheduler.frame + delay2;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction2.sortActions);
    return 1;
  };
  VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return void 0;
  };
  VirtualAction2.prototype._execute = function(state2, delay2) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state2, delay2);
    }
  };
  VirtualAction2.sortActions = function(a5, b) {
    if (a5.delay === b.delay) {
      if (a5.index === b.index) {
        return 0;
      } else if (a5.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a5.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };
  return VirtualAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x3) {
  return x3 && typeof x3.length === "number" && typeof x3 !== "function";
};

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a4, value, done;
    return __generator(this, function(_b2) {
      switch (_b2.label) {
        case 0:
          reader = readableStream.getReader();
          _b2.label = 1;
        case 1:
          _b2.trys.push([1, , 9, 10]);
          _b2.label = 2;
        case 2:
          if (false) return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a4 = _b2.sent(), value = _a4.value, done = _a4.done;
          if (!done) return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b2.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b2.sent()];
        case 7:
          _b2.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i4 = 0; i4 < array.length && !subscriber.closed; i4++) {
      subscriber.next(array[i4]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a4;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a4 = iterable_1.return)) _a4.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a4;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b2) {
      switch (_b2.label) {
        case 0:
          _b2.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b2.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b2.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b2.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b2.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b2.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a4 = asyncIterable_1.return))) return [3, 8];
          return [4, _a4.call(asyncIterable_1)];
        case 7:
          _b2.sent();
          _b2.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay2, repeat2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  if (repeat2 === void 0) {
    repeat2 = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat2) {
      parentSubscription.add(this.schedule(null, delay2));
    } else {
      this.unsubscribe();
    }
  }, delay2);
  parentSubscription.add(scheduleSubscription);
  if (!repeat2) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay2);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay2);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay2);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay2));
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i4 = 0;
    return scheduler.schedule(function() {
      if (i4 === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i4++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a4;
        var value;
        var done;
        try {
          _a4 = iterator2.next(), value = _a4.value, done = _a4.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
    return errorOrErrorFactory;
  };
  var init = function(subscriber) {
    return subscriber.error(errorFactory());
  };
  return new Observable(scheduler ? function(subscriber) {
    return scheduler.schedule(init, 0, subscriber);
  } : init);
}

// node_modules/rxjs/dist/esm5/internal/Notification.js
var NotificationKind;
(function(NotificationKind2) {
  NotificationKind2["NEXT"] = "N";
  NotificationKind2["ERROR"] = "E";
  NotificationKind2["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = function() {
  function Notification2(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }
  Notification2.prototype.observe = function(observer) {
    return observeNotification(this, observer);
  };
  Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
    var _a4 = this, kind = _a4.kind, value = _a4.value, error = _a4.error;
    return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
  };
  Notification2.prototype.accept = function(nextOrObserver, error, complete) {
    var _a4;
    return isFunction((_a4 = nextOrObserver) === null || _a4 === void 0 ? void 0 : _a4.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
  };
  Notification2.prototype.toObservable = function() {
    var _a4 = this, kind = _a4.kind, value = _a4.value, error = _a4.error;
    var result = kind === "N" ? of(value) : kind === "E" ? throwError(function() {
      return error;
    }) : kind === "C" ? EMPTY : 0;
    if (!result) {
      throw new TypeError("Unexpected notification kind " + kind);
    }
    return result;
  };
  Notification2.createNext = function(value) {
    return new Notification2("N", value);
  };
  Notification2.createError = function(err) {
    return new Notification2("E", void 0, err);
  };
  Notification2.createComplete = function() {
    return Notification2.completeNotification;
  };
  Notification2.completeNotification = new Notification2("C");
  return Notification2;
}();
function observeNotification(notification, observer) {
  var _a4, _b2, _c;
  var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
  if (typeof kind !== "string") {
    throw new TypeError('Invalid notification, missing "kind"');
  }
  kind === "N" ? (_a4 = observer.next) === null || _a4 === void 0 ? void 0 : _a4.call(observer, value) : kind === "E" ? (_b2 = observer.error) === null || _b2 === void 0 ? void 0 : _b2.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}

// node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError = createErrorClass(function(_super) {
  return function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
  };
});

// node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function firstValueFrom(source, config2) {
  var hasConfig = typeof config2 === "object";
  return new Promise(function(resolve, reject) {
    var subscriber = new SafeSubscriber({
      next: function(value) {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: function() {
        if (hasConfig) {
          resolve(config2.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeError = createErrorClass(function(_super) {
  return function ArgumentOutOfRangeErrorImpl() {
    _super(this);
    this.name = "ArgumentOutOfRangeError";
    this.message = "argument out of range";
  };
});

// node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js
var NotFoundError = createErrorClass(function(_super) {
  return function NotFoundErrorImpl(message) {
    _super(this);
    this.name = "NotFoundError";
    this.message = message;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/SequenceError.js
var SequenceError = createErrorClass(function(_super) {
  return function SequenceErrorImpl(message) {
    _super(this);
    this.name = "SequenceError";
    this.message = message;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// node_modules/rxjs/dist/esm5/internal/operators/timeout.js
var TimeoutError = createErrorClass(function(_super) {
  return function TimeoutErrorImpl(info) {
    if (info === void 0) {
      info = null;
    }
    _super(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    this.info = info;
  };
});

// node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray = Array.isArray;

// node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var isArray2 = Array.isArray;
var objectProto = Object.prototype;

// node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n8 = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n8++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/never.js
var NEVER = new Observable(noop);

// node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
var isArray3 = Array.isArray;

// node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/take.js
function take(count2) {
  return count2 <= 0 ? function() {
    return EMPTY;
  } : operate(function(source, subscriber) {
    var seen = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (++seen <= count2) {
        subscriber.next(value);
        if (count2 <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector) {
  if (keySelector === void 0) {
    keySelector = identity;
  }
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return operate(function(source, subscriber) {
    var previousKey;
    var first2 = true;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var currentKey = keySelector(value);
      if (first2 || !comparator(previousKey, currentKey)) {
        first2 = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a5, b) {
  return a5 === b;
}

// node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function switchMap(project, resultSelector) {
  return operate(function(source, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      return isComplete && !innerSubscriber && subscriber.complete();
    };
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function() {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function() {
      isComplete = true;
      checkComplete();
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
function takeUntil(notifier) {
  return operate(function(source, subscriber) {
    innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function() {
      return subscriber.complete();
    }, noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

// node_modules/@ngneat/elf/index.esm.js
function createState(...propsFactories) {
  const result = {
    config: {},
    state: {}
  };
  for (const {
    config: config2,
    props
  } of propsFactories) {
    Object.assign(result.config, config2);
    Object.assign(result.state, props);
  }
  return result;
}
var batchInProgress = new BehaviorSubject(false);
var batchDone$ = batchInProgress.asObservable().pipe(filter((inProgress) => !inProgress), take(1));
var elfHooksRegistry = {};
var ElfHooks = class {
  registerPreStoreUpdate(fn) {
    elfHooksRegistry.preStoreUpdate = fn;
  }
  registerPreStateInit(fn) {
    elfHooksRegistry.preStateInit = fn;
  }
};
var elfHooks = new ElfHooks();
var registry = /* @__PURE__ */ new Map();
var registryActions = new Subject();
var registry$ = registryActions.asObservable();
function addStore(store) {
  registry.set(store.name, store);
  registryActions.next({
    type: "add",
    store
  });
}
function removeStore(store) {
  registry.delete(store.name);
  registryActions.next({
    type: "remove",
    store
  });
}
var events = [];
function _setEvent(e6) {
  events.push(e6);
}
function emitEvents(source) {
  if (events.length) {
    events.forEach((e6) => source.next(e6));
  }
  events = [];
}
var Store = class extends BehaviorSubject {
  constructor(storeDef) {
    super(storeDef.state);
    this.storeDef = storeDef;
    this.initialState = void 0;
    this.state = void 0;
    this.batchInProgress = false;
    this.events = new Subject();
    this.context = {
      config: this.getConfig(),
      setEvent: (action) => {
        _setEvent(action);
      }
    };
    this.events$ = this.events.asObservable();
    this.state = this.getInitialState(storeDef.state);
    this.initialState = this.getValue();
    addStore(this);
  }
  get name() {
    return this.storeDef.name;
  }
  getInitialState(state2) {
    if (elfHooksRegistry.preStateInit) {
      return elfHooksRegistry.preStateInit(state2, this.name);
    }
    return state2;
  }
  getConfig() {
    return this.storeDef.config;
  }
  query(selector) {
    return selector(this.getValue());
  }
  update(...reducers) {
    const currentState = this.getValue();
    let nextState = reducers.reduce((value, reducer) => {
      value = reducer(value, this.context);
      return value;
    }, currentState);
    if (elfHooksRegistry.preStoreUpdate) {
      nextState = elfHooksRegistry.preStoreUpdate(currentState, nextState, this.name);
    }
    if (nextState !== currentState) {
      this.state = nextState;
      if (batchInProgress.getValue()) {
        if (!this.batchInProgress) {
          this.batchInProgress = true;
          batchDone$.subscribe(() => {
            super.next(this.state);
            emitEvents(this.events);
            this.batchInProgress = false;
          });
        }
      } else {
        super.next(this.state);
        emitEvents(this.events);
      }
    }
  }
  getValue() {
    return this.state;
  }
  reset() {
    this.update(() => this.initialState);
  }
  combine(observables) {
    let hasChange = true;
    const buffer2 = {};
    return new Observable((observer) => {
      for (const [key, query] of Object.entries(observables)) {
        observer.add(query.subscribe((value) => {
          buffer2[key] = value;
          hasChange = true;
        }));
      }
      return this.subscribe({
        next() {
          if (hasChange) {
            observer.next({
              ...buffer2
            });
            hasChange = false;
          }
        },
        error(e6) {
          observer.error(e6);
        },
        complete() {
          observer.complete();
        }
      });
    });
  }
  destroy() {
    removeStore(this);
    this.reset();
  }
  next(value) {
    this.update(() => value);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  complete() {
  }
};
function createStore(storeConfig, ...propsFactories) {
  const {
    state: state2,
    config: config2
  } = createState(...propsFactories);
  const {
    name
  } = storeConfig;
  return new Store({
    name,
    state: state2,
    config: config2
  });
}
function isFunction2(value) {
  return typeof value === "function";
}
function setProp(key, value) {
  return function(state2) {
    return {
      ...state2,
      [key]: isFunction2(value) ? value(state2[key]) : value
    };
  };
}
function select(mapFn) {
  return pipe(map(mapFn), distinctUntilChanged());
}
function withProps(props) {
  return {
    props,
    config: void 0
  };
}

// node_modules/@creit.tech/stellar-wallets-kit/types.js
var e = ((e6) => (e6.PUBLIC = "Public Global Stellar Network ; September 2015", e6.TESTNET = "Test SDF Network ; September 2015", e6.FUTURENET = "Test SDF Future Network ; October 2022", e6.SANDBOX = "Local Sandbox Stellar Network ; September 2022", e6.STANDALONE = "Standalone Network ; February 2017", e6))(e || {});
var L = ((e6) => (e6.HW_WALLET = "HW_WALLET", e6.HOT_WALLET = "HOT_WALLET", e6.BRIDGE_WALLET = "BRIDGE_WALLET", e6.AIR_GAPED_WALLET = "AIR_GAPED_WALLET", e6))(L || {});

// node_modules/@creit.tech/stellar-wallets-kit/state/store.js
var a = createStore({ name: "state" }, withProps({ allowedWallets: [] }));
var i = a.pipe(select((e6) => e6.allowedWallets));
var l = a.pipe(select((e6) => e6.modalTheme));
var p = a.pipe(select((e6) => e6.buttonTheme));
var u = a.pipe(select((e6) => e6.activeAddress));
var r = a.pipe(select((e6) => e6.horizonUrl));
function s(e6) {
  a.update(setProp("selectedModuleId", e6));
}
function c(e6) {
  if (!Object.values(e).includes(e6)) throw new Error(`Wallet network "${e6}" is not supported`);
  a.update(setProp("selectedNetwork", e6));
}
function f(e6) {
  a.update(setProp("modalTheme", e6));
}
function m(e6) {
  a.update(setProp("buttonTheme", e6));
}
function h(e6) {
  a.update(setProp("allowedWallets", e6));
}
function w(e6) {
  a.update(setProp("activeAddress", e6));
}
function v() {
  a.update(setProp("activeAddress", void 0));
}
function T(e6) {
  a.update(setProp("horizonUrl", e6));
}

// node_modules/@creit.tech/stellar-wallets-kit/stellar-wallets-kit.js
var i2 = class {
  get selectedModule() {
    const t8 = this.modules.find((t9) => t9.productId === a.getValue().selectedModuleId);
    if (!t8) throw { code: -3, message: "Please set the wallet first" };
    return t8;
  }
  constructor(e6) {
    this.modules = e6.modules, this.setWallet(e6.selectedWalletId), c(e6.network);
    const o5 = e6.theme || e6.modalTheme;
    o5 && f(o5), e6.buttonTheme && m(e6.buttonTheme), this.getSupportedWallets().then((e7) => {
      h(e7);
    });
  }
  async getSupportedWallets() {
    return Promise.all(this.modules.map(async (e6) => {
      const t8 = new Promise((e7) => setTimeout(() => e7(false), 500));
      return { id: e6.productId, name: e6.productName, type: e6.moduleType, icon: e6.productIcon, isAvailable: await Promise.race([t8, e6.isAvailable()]), url: e6.productUrl };
    }));
  }
  setWallet(e6) {
    const t8 = this.modules.find((t9) => t9.productId === e6);
    if (!t8) throw new Error(`Wallet id "${e6}" is not supported`);
    s(t8.productId);
  }
  async getAddress(e6) {
    const { address: t8 } = await this.selectedModule.getAddress(e6);
    return w(t8), { address: t8 };
  }
  async signTransaction(t8, s6) {
    return this.selectedModule.signTransaction(t8, { ...s6, networkPassphrase: (s6 == null ? void 0 : s6.networkPassphrase) || a.getValue().selectedNetwork });
  }
  async signAuthEntry(t8, s6) {
    return this.selectedModule.signAuthEntry(t8, { ...s6, networkPassphrase: (s6 == null ? void 0 : s6.networkPassphrase) || a.getValue().selectedNetwork });
  }
  async signMessage(t8, s6) {
    return this.selectedModule.signMessage(t8, { ...s6, networkPassphrase: (s6 == null ? void 0 : s6.networkPassphrase) || a.getValue().selectedNetwork });
  }
  async getNetwork() {
    return this.selectedModule.getNetwork();
  }
  async disconnect() {
    v();
  }
  isButtonCreated() {
    return !!this.buttonElement;
  }
  async createButton(e6) {
    if (this.buttonElement) throw new Error("Stellar Wallets Kit button is already created");
    this.buttonElement = document.createElement("stellar-wallets-button"), e6.buttonText && this.buttonElement.setAttribute("buttonText", e6.buttonText), e6.horizonUrl && T(e6.horizonUrl), e6.container.appendChild(this.buttonElement), this.buttonElement.addEventListener("button-clicked", () => {
      this.openModal({ onWalletSelected: (t8) => {
        s(t8.id), this.getAddress().then((t9) => e6.onConnect(t9));
      } });
    }, false), this.buttonElement.addEventListener("disconnect-wallet", () => {
      e6.onDisconnect(), this.selectedModule.disconnect && this.selectedModule.disconnect();
    }, false);
  }
  async removeButton(e6) {
    if (!this.buttonElement) throw new Error("Stellar Wallets Kit button hasn't been created yet");
    true !== (e6 == null ? void 0 : e6.skipDisconnect) && this.buttonElement.disconnect(), this.buttonElement.remove(), delete this.buttonElement;
  }
  async openModal(e6) {
    if (this.modalElement && !this.buttonElement) throw new Error("Stellar Wallets Kit modal is already open");
    this.modalElement = document.createElement("stellar-wallets-modal"), this.modalElement.setAttribute("showModal", ""), e6.modalTitle && this.modalElement.setAttribute("modalTitle", e6.modalTitle), e6.notAvailableText && this.modalElement.setAttribute("notAvailableText", e6.notAvailableText), document.body.appendChild(this.modalElement);
    const t8 = (s7) => {
      e6.onWalletSelected(s7.detail), this.modalElement.removeEventListener("wallet-selected", t8, false), document.body.removeChild(this.modalElement), this.modalElement = void 0;
    };
    this.modalElement.addEventListener("wallet-selected", t8, false);
    const s6 = (l4) => {
      e6.onClosed && e6.onClosed(l4.detail), this.modalElement.removeEventListener("wallet-selected", t8, false), this.modalElement.removeEventListener("modal-closed", s6, false), document.body.removeChild(this.modalElement), this.modalElement = void 0;
    };
    this.modalElement.addEventListener("modal-closed", s6, false);
  }
};

// node_modules/@lit/reactive-element/development/css-tag.js
var NODE_MODE = false;
var global = globalThis;
var supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === void 0 || global.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var cssTagCache = /* @__PURE__ */ new WeakMap();
var CSSResult = class {
  constructor(cssText, strings, safeToken) {
    this["_$cssResult$"] = true;
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  get styleSheet() {
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === void 0) {
      const cacheable = strings !== void 0 && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === void 0) {
        (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
};
var textFromCSSResult = (value) => {
  if (value["_$cssResult$"] === true) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`);
  }
};
var unsafeCSS = (value) => new CSSResult(typeof value === "string" ? value : String(value), void 0, constructionToken);
var css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v2, idx) => acc + textFromCSSResult(v2) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
var adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map((s6) => s6 instanceof CSSStyleSheet ? s6 : s6.styleSheet);
  } else {
    for (const s6 of styles) {
      const style = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== void 0) {
        style.setAttribute("nonce", nonce);
      }
      style.textContent = s6.cssText;
      renderRoot.appendChild(style);
    }
  }
};
var cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
var getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === void 0 ? (s6) => s6 : (s6) => s6 instanceof CSSStyleSheet ? cssResultFromStyleSheet(s6) : s6;

// node_modules/@lit/reactive-element/development/reactive-element.js
var { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf } = Object;
var NODE_MODE2 = false;
var global2 = globalThis;
if (NODE_MODE2) {
  global2.customElements ?? (global2.customElements = customElements);
}
var DEV_MODE = true;
var issueWarning;
var trustedTypes = global2.trustedTypes;
var emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
var polyfillSupport = DEV_MODE ? global2.reactiveElementPolyfillSupportDevMode : global2.reactiveElementPolyfillSupport;
var _a;
if (DEV_MODE) {
  const issuedWarnings = global2.litIssuedWarnings ?? (global2.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
  if (((_a = global2.ShadyDOM) == null ? void 0 : _a.inUse) && polyfillSupport === void 0) {
    issueWarning("polyfill-support-missing", `Shadow DOM is being polyfilled via \`ShadyDOM\` but the \`polyfill-support\` module has not been loaded.`);
  }
}
var debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global2.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global2.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var JSCompiler_renameProperty = (prop, _obj) => prop;
var defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;
      case Object:
      case Array:
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute(value, type) {
    let fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        try {
          fromValue = JSON.parse(value);
        } catch (e6) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
var notEqual = (value, old) => !is(value, old);
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata"));
global2.litPropertyMetadata ?? (global2.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var ReactiveElement = class extends HTMLElement {
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */
  static addInitializer(initializer) {
    this.__prepare();
    (this._initializers ?? (this._initializers = [])).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */
  static get observedAttributes() {
    this.finalize();
    return this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()];
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static createProperty(name, options = defaultPropertyDeclaration) {
    if (options.state) {
      options.attribute = false;
    }
    this.__prepare();
    this.elementProperties.set(name, options);
    if (!options.noAccessor) {
      const key = DEV_MODE ? (
        // Use Symbol.for in dev mode to make it easier to maintain state
        // when doing HMR.
        Symbol.for(`${String(name)} (@property() cache)`)
      ) : Symbol();
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== void 0) {
        defineProperty(this.prototype, name, descriptor);
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static getPropertyDescriptor(name, key, options) {
    const { get, set } = getOwnPropertyDescriptor(this.prototype, name) ?? {
      get() {
        return this[key];
      },
      set(v2) {
        this[key] = v2;
      }
    };
    if (DEV_MODE && get == null) {
      if ("value" in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
        throw new Error(`Field ${JSON.stringify(String(name))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);
      }
      issueWarning("reactive-property-without-getter", `Field ${JSON.stringify(String(name))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`);
    }
    return {
      get() {
        return get == null ? void 0 : get.call(this);
      },
      set(value) {
        const oldValue = get == null ? void 0 : get.call(this);
        set.call(this, value);
        this.requestUpdate(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */
  static getPropertyOptions(name) {
    return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
  }
  /**
   * Initializes static own properties of the class used in bookkeeping
   * for element properties, initializers, etc.
   *
   * Can be called multiple times by code that needs to ensure these
   * properties exist before using them.
   *
   * This method ensures the superclass is finalized so that inherited
   * property metadata can be copied down.
   * @nocollapse
   */
  static __prepare() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("elementProperties", this))) {
      return;
    }
    const superCtor = getPrototypeOf(this);
    superCtor.finalize();
    if (superCtor._initializers !== void 0) {
      this._initializers = [...superCtor._initializers];
    }
    this.elementProperties = new Map(superCtor.elementProperties);
  }
  /**
   * Finishes setting up the class so that it's ready to be registered
   * as a custom element and instantiated.
   *
   * This method is called by the ReactiveElement.observedAttributes getter.
   * If you override the observedAttributes getter, you must either call
   * super.observedAttributes to trigger finalization, or call finalize()
   * yourself.
   *
   * @nocollapse
   */
  static finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("finalized", this))) {
      return;
    }
    this.finalized = true;
    this.__prepare();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...getOwnPropertyNames(props),
        ...getOwnPropertySymbols(props)
      ];
      for (const p2 of propKeys) {
        this.createProperty(p2, props[p2]);
      }
    }
    const metadata = this[Symbol.metadata];
    if (metadata !== null) {
      const properties = litPropertyMetadata.get(metadata);
      if (properties !== void 0) {
        for (const [p2, options] of properties) {
          this.elementProperties.set(p2, options);
        }
      }
    }
    this.__attributeToPropertyMap = /* @__PURE__ */ new Map();
    for (const [p2, options] of this.elementProperties) {
      const attr = this.__attributeNameForProperty(p2, options);
      if (attr !== void 0) {
        this.__attributeToPropertyMap.set(attr, p2);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE) {
      if (this.hasOwnProperty("createProperty")) {
        issueWarning("no-override-create-property", "Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");
      }
      if (this.hasOwnProperty("getPropertyDescriptor")) {
        issueWarning("no-override-get-property-descriptor", "Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators");
      }
    }
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */
  static finalizeStyles(styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
      const set = new Set(styles.flat(Infinity).reverse());
      for (const s6 of set) {
        elementStyles.unshift(getCompatibleStyle(s6));
      }
    } else if (styles !== void 0) {
      elementStyles.push(getCompatibleStyle(styles));
    }
    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static __attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : void 0;
  }
  constructor() {
    super();
    this.__instanceProperties = void 0;
    this.isUpdatePending = false;
    this.hasUpdated = false;
    this.__reflectingProperty = null;
    this.__initialize();
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  __initialize() {
    var _a4;
    this.__updatePromise = new Promise((res) => this.enableUpdating = res);
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.__saveInstanceProperties();
    this.requestUpdate();
    (_a4 = this.constructor._initializers) == null ? void 0 : _a4.forEach((i4) => i4(this));
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */
  addController(controller) {
    var _a4;
    (this.__controllers ?? (this.__controllers = /* @__PURE__ */ new Set())).add(controller);
    if (this.renderRoot !== void 0 && this.isConnected) {
      (_a4 = controller.hostConnected) == null ? void 0 : _a4.call(controller);
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */
  removeController(controller) {
    var _a4;
    (_a4 = this.__controllers) == null ? void 0 : _a4.delete(controller);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  __saveInstanceProperties() {
    const instanceProperties = /* @__PURE__ */ new Map();
    const elementProperties = this.constructor.elementProperties;
    for (const p2 of elementProperties.keys()) {
      if (this.hasOwnProperty(p2)) {
        instanceProperties.set(p2, this[p2]);
        delete this[p2];
      }
    }
    if (instanceProperties.size > 0) {
      this.__instanceProperties = instanceProperties;
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */
  createRenderRoot() {
    const renderRoot = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    adoptStyles(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */
  connectedCallback() {
    var _a4;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot());
    this.enableUpdating(true);
    (_a4 = this.__controllers) == null ? void 0 : _a4.forEach((c4) => {
      var _a5;
      return (_a5 = c4.hostConnected) == null ? void 0 : _a5.call(c4);
    });
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */
  enableUpdating(_requestedUpdate) {
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */
  disconnectedCallback() {
    var _a4;
    (_a4 = this.__controllers) == null ? void 0 : _a4.forEach((c4) => {
      var _a5;
      return (_a5 = c4.hostDisconnected) == null ? void 0 : _a5.call(c4);
    });
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */
  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }
  __propertyToAttribute(name, value) {
    var _a4;
    const elemProperties = this.constructor.elementProperties;
    const options = elemProperties.get(name);
    const attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== void 0 && options.reflect === true) {
      const converter = ((_a4 = options.converter) == null ? void 0 : _a4.toAttribute) !== void 0 ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE && this.constructor.enabledWarnings.includes("migration") && attrValue === void 0) {
        issueWarning("undefined-attribute-value", `The attribute value for the ${name} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);
      }
      this.__reflectingProperty = name;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this.__reflectingProperty = null;
    }
  }
  /** @internal */
  _$attributeToProperty(name, value) {
    var _a4;
    const ctor = this.constructor;
    const propName = ctor.__attributeToPropertyMap.get(name);
    if (propName !== void 0 && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === "function" ? { fromAttribute: options.converter } : ((_a4 = options.converter) == null ? void 0 : _a4.fromAttribute) !== void 0 ? options.converter : defaultConverter;
      this.__reflectingProperty = propName;
      this[propName] = converter.fromAttribute(
        value,
        options.type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      );
      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @category updates
   */
  requestUpdate(name, oldValue, options) {
    if (name !== void 0) {
      if (DEV_MODE && name instanceof Event) {
        issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
      }
      options ?? (options = this.constructor.getPropertyOptions(name));
      const hasChanged = options.hasChanged ?? notEqual;
      const newValue = this[name];
      if (hasChanged(newValue, oldValue)) {
        this._$changeProperty(name, oldValue, options);
      } else {
        return;
      }
    }
    if (this.isUpdatePending === false) {
      this.__updatePromise = this.__enqueueUpdate();
    }
  }
  /**
   * @internal
   */
  _$changeProperty(name, oldValue, options) {
    if (!this._$changedProperties.has(name)) {
      this._$changedProperties.set(name, oldValue);
    }
    if (options.reflect === true && this.__reflectingProperty !== name) {
      (this.__reflectingProperties ?? (this.__reflectingProperties = /* @__PURE__ */ new Set())).add(name);
    }
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async __enqueueUpdate() {
    this.isUpdatePending = true;
    try {
      await this.__updatePromise;
    } catch (e6) {
      Promise.reject(e6);
    }
    const result = this.scheduleUpdate();
    if (result != null) {
      await result;
    }
    return !this.isUpdatePending;
  }
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */
  scheduleUpdate() {
    const result = this.performUpdate();
    if (DEV_MODE && this.constructor.enabledWarnings.includes("async-perform-update") && typeof (result == null ? void 0 : result.then) === "function") {
      issueWarning("async-perform-update", `Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);
    }
    return result;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * @category updates
   */
  performUpdate() {
    var _a4;
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent == null ? void 0 : debugLogEvent({ kind: "update" });
    if (!this.hasUpdated) {
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot());
      if (DEV_MODE) {
        const ctor = this.constructor;
        const shadowedProperties = [...ctor.elementProperties.keys()].filter((p2) => this.hasOwnProperty(p2) && p2 in getPrototypeOf(this));
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${shadowedProperties.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`);
        }
      }
      if (this.__instanceProperties) {
        for (const [p2, value] of this.__instanceProperties) {
          this[p2] = value;
        }
        this.__instanceProperties = void 0;
      }
      const elementProperties = this.constructor.elementProperties;
      if (elementProperties.size > 0) {
        for (const [p2, options] of elementProperties) {
          if (options.wrapped === true && !this._$changedProperties.has(p2) && this[p2] !== void 0) {
            this._$changeProperty(p2, this[p2], options);
          }
        }
      }
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        (_a4 = this.__controllers) == null ? void 0 : _a4.forEach((c4) => {
          var _a5;
          return (_a5 = c4.hostUpdate) == null ? void 0 : _a5.call(c4);
        });
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e6) {
      shouldUpdate = false;
      this.__markUpdated();
      throw e6;
    }
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */
  willUpdate(_changedProperties) {
  }
  // Note, this is an override point for polyfill-support.
  // @internal
  _$didUpdate(changedProperties) {
    var _a4;
    (_a4 = this.__controllers) == null ? void 0 : _a4.forEach((c4) => {
      var _a5;
      return (_a5 = c4.hostUpdated) == null ? void 0 : _a5.call(c4);
    });
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.includes("change-in-update")) {
      issueWarning("change-in-update", `Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`);
    }
  }
  __markUpdated() {
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  get updateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  update(_changedProperties) {
    this.__reflectingProperties && (this.__reflectingProperties = this.__reflectingProperties.forEach((p2) => this.__propertyToAttribute(p2, this[p2])));
    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  updated(_changedProperties) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  firstUpdated(_changedProperties) {
  }
};
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = { mode: "open" };
ReactiveElement[JSCompiler_renameProperty("elementProperties", ReactiveElement)] = /* @__PURE__ */ new Map();
ReactiveElement[JSCompiler_renameProperty("finalized", ReactiveElement)] = /* @__PURE__ */ new Map();
polyfillSupport == null ? void 0 : polyfillSupport({ ReactiveElement });
if (DEV_MODE) {
  ReactiveElement.enabledWarnings = [
    "change-in-update",
    "async-perform-update"
  ];
  const ensureOwnWarnings = function(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings", ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function(warning) {
    ensureOwnWarnings(this);
    if (!this.enabledWarnings.includes(warning)) {
      this.enabledWarnings.push(warning);
    }
  };
  ReactiveElement.disableWarning = function(warning) {
    ensureOwnWarnings(this);
    const i4 = this.enabledWarnings.indexOf(warning);
    if (i4 >= 0) {
      this.enabledWarnings.splice(i4, 1);
    }
  };
}
(global2.reactiveElementVersions ?? (global2.reactiveElementVersions = [])).push("2.0.4");
if (DEV_MODE && global2.reactiveElementVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}

// node_modules/lit-html/development/lit-html.js
var DEV_MODE2 = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE3 = false;
var global3 = globalThis;
var debugLogEvent2 = DEV_MODE2 ? (event) => {
  const shouldEmit = global3.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global3.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var debugLogRenderId = 0;
var issueWarning2;
if (DEV_MODE2) {
  global3.litIssuedWarnings ?? (global3.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning2 = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global3.litIssuedWarnings.has(warning)) {
      console.warn(warning);
      global3.litIssuedWarnings.add(warning);
    }
  };
  issueWarning2("dev-mode", `Lit is in dev mode. Not recommended for production!`);
}
var _a2, _b;
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_a2 = global3.ShadyDOM) == null ? void 0 : _a2.inUse) && ((_b = global3.ShadyDOM) == null ? void 0 : _b.noPatch) === true ? global3.ShadyDOM.wrap : (node) => node;
var trustedTypes2 = global3.trustedTypes;
var policy = trustedTypes2 ? trustedTypes2.createPolicy("lit-html", {
  createHTML: (s6) => s6
}) : void 0;
var identityFunction = (value) => value;
var noopSanitizer = (_node, _name, _type) => identityFunction;
var setSanitizer = (newSanitizer) => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
};
var boundAttributeSuffix = "$lit$";
var marker = `lit$${Math.random().toFixed(9).slice(2)}$`;
var markerMatch = "?" + marker;
var nodeMarker = `<${markerMatch}>`;
var d = NODE_MODE3 && global3.document === void 0 ? {
  createTreeWalker() {
    return {};
  }
} : document;
var createMarker = () => d.createComment("");
var isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
var isArray4 = Array.isArray;
var isIterable2 = (value) => isArray4(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof (value == null ? void 0 : value[Symbol.iterator]) === "function";
var SPACE_CHAR = `[ 	
\f\r]`;
var ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`;
var NAME_CHAR = `[^\\s"'>=/]`;
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
var comment2EndRegex = />/g;
var tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g");
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
var rawTextElement = /^(?:script|style|textarea|title)$/i;
var HTML_RESULT = 1;
var SVG_RESULT = 2;
var MATHML_RESULT = 3;
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
var tag = (type) => (strings, ...values) => {
  if (DEV_MODE2 && strings.some((s6) => s6 === void 0)) {
    console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences.");
  }
  if (DEV_MODE2) {
    if (values.some((val) => val == null ? void 0 : val["_$litStatic$"])) {
      issueWarning2("", `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
    }
  }
  return {
    // This property needs to remain unminified.
    ["_$litType$"]: type,
    strings,
    values
  };
};
var html = tag(HTML_RESULT);
var svg = tag(SVG_RESULT);
var mathml = tag(MATHML_RESULT);
var noChange = Symbol.for("lit-noChange");
var nothing = Symbol.for("lit-nothing");
var templateCache = /* @__PURE__ */ new WeakMap();
var walker = d.createTreeWalker(
  d,
  129
  /* NodeFilter.SHOW_{ELEMENT|COMMENT} */
);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!isArray4(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    if (DEV_MODE2) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, "\n");
    }
    throw new Error(message);
  }
  return policy !== void 0 ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml = (strings, type) => {
  const l4 = strings.length - 1;
  const attrNames = [];
  let html2 = type === SVG_RESULT ? "<svg>" : type === MATHML_RESULT ? "<math>" : "";
  let rawTextEndRegex;
  let regex = textEndRegex;
  for (let i4 = 0; i4 < l4; i4++) {
    const s6 = strings[i4];
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    while (lastIndex < s6.length) {
      regex.lastIndex = lastIndex;
      match = regex.exec(s6);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === "!--") {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== void 0) {
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== void 0) {
          if (rawTextElement.test(match[TAG_NAME])) {
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g");
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== void 0) {
          if (DEV_MODE2) {
            throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === ">") {
          regex = rawTextEndRegex ?? textEndRegex;
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === void 0) {
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === void 0 ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        regex = tagEndRegex;
        rawTextEndRegex = void 0;
      }
    }
    if (DEV_MODE2) {
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    }
    const end = regex === tagEndRegex && strings[i4 + 1].startsWith("/>") ? " " : "";
    html2 += regex === textEndRegex ? s6 + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s6.slice(0, attrNameEndIndex) + boundAttributeSuffix + s6.slice(attrNameEndIndex)) + marker + end : s6 + marker + (attrNameEndIndex === -2 ? i4 : end);
  }
  const htmlResult = html2 + (strings[l4] || "<?>") + (type === SVG_RESULT ? "</svg>" : type === MATHML_RESULT ? "</math>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
var Template = class _Template {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    const [html2, attrNames] = getTemplateHtml(strings, type);
    this.el = _Template.createElement(html2, options);
    walker.currentNode = this.el.content;
    if (type === SVG_RESULT || type === MATHML_RESULT) {
      const wrapper = this.el.content.firstChild;
      wrapper.replaceWith(...wrapper.childNodes);
    }
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE2) {
          const tag2 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag2) && node.innerHTML.includes(marker)) {
            const m2 = `Expressions are not supported inside \`${tag2}\` elements. See https://lit.dev/msg/expression-in-${tag2} for more information.`;
            if (tag2 === "template") {
              throw new Error(m2);
            } else
              issueWarning2("", m2);
          }
        }
        if (node.hasAttributes()) {
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix)) {
              const realName = attrNames[attrNameIndex++];
              const value = node.getAttribute(name);
              const statics = value.split(marker);
              const m2 = /([.?@])?(.*)/.exec(realName);
              parts.push({
                type: ATTRIBUTE_PART,
                index: nodeIndex,
                name: m2[2],
                strings: statics,
                ctor: m2[1] === "." ? PropertyPart : m2[1] === "?" ? BooleanAttributePart : m2[1] === "@" ? EventPart : AttributePart
              });
              node.removeAttribute(name);
            } else if (name.startsWith(marker)) {
              parts.push({
                type: ELEMENT_PART,
                index: nodeIndex
              });
              node.removeAttribute(name);
            }
          }
        }
        if (rawTextElement.test(node.tagName)) {
          const strings2 = node.textContent.split(marker);
          const lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes2 ? trustedTypes2.emptyScript : "";
            for (let i4 = 0; i4 < lastIndex; i4++) {
              node.append(strings2[i4], createMarker());
              walker.nextNode();
              parts.push({ type: CHILD_PART, index: ++nodeIndex });
            }
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;
        if (data === markerMatch) {
          parts.push({ type: CHILD_PART, index: nodeIndex });
        } else {
          let i4 = -1;
          while ((i4 = node.data.indexOf(marker, i4 + 1)) !== -1) {
            parts.push({ type: COMMENT_PART, index: nodeIndex });
            i4 += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    if (DEV_MODE2) {
      if (attrNames.length !== attrNameIndex) {
        throw new Error(`Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=\${true} ?disabled=\${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: 
\`` + strings.join("${...}") + "`");
      }
    }
    debugLogEvent2 && debugLogEvent2({
      kind: "template prep",
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  static createElement(html2, _options) {
    const el = d.createElement("template");
    el.innerHTML = html2;
    return el;
  }
};
function resolveDirective(part, value, parent = part, attributeIndex) {
  var _a4, _b2;
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== void 0 ? (_a4 = parent.__directives) == null ? void 0 : _a4[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? void 0 : (
    // This property needs to remain unminified.
    value["_$litDirective$"]
  );
  if ((currentDirective == null ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
    (_b2 = currentDirective == null ? void 0 : currentDirective["_$notifyDirectiveConnectionChanged"]) == null ? void 0 : _b2.call(currentDirective, false);
    if (nextDirectiveConstructor === void 0) {
      currentDirective = void 0;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== void 0) {
      (parent.__directives ?? (parent.__directives = []))[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== void 0) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
var TemplateInstance = class {
  constructor(template, parent) {
    this._$parts = [];
    this._$disconnectableChildren = void 0;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  get parentNode() {
    return this._$parent.parentNode;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _clone(options) {
    const { el: { content }, parts } = this._$template;
    const fragment = ((options == null ? void 0 : options.creationScope) ?? d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== void 0) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== (templatePart == null ? void 0 : templatePart.index)) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i4 = 0;
    for (const part of this._$parts) {
      if (part !== void 0) {
        debugLogEvent2 && debugLogEvent2({
          kind: "set part",
          part,
          value: values[i4],
          valueIndex: i4,
          values,
          templateInstance: this
        });
        if (part.strings !== void 0) {
          part._$setValue(values, part, i4);
          i4 += part.strings.length - 2;
        } else {
          part._$setValue(values[i4]);
        }
      }
      i4++;
    }
  }
};
var ChildPart = class _ChildPart {
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    var _a4;
    return ((_a4 = this._$parent) == null ? void 0 : _a4._$isConnected) ?? this.__isConnected;
  }
  constructor(startNode, endNode, parent, options) {
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = (options == null ? void 0 : options.isConnected) ?? true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = void 0;
    }
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== void 0 && (parentNode == null ? void 0 : parentNode.nodeType) === 11) {
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */
  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    var _a4;
    if (DEV_MODE2 && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing || value == null || value === "") {
        if (this._$committedValue !== nothing) {
          debugLogEvent2 && debugLogEvent2({
            kind: "commit nothing to child",
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
    } else if (value["_$litType$"] !== void 0) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== void 0) {
      if (DEV_MODE2 && ((_a4 = this.options) == null ? void 0 : _a4.host) === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself (commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable2(value)) {
      this._commitIterable(value);
    } else {
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    var _a4;
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = (_a4 = this._$startNode.parentNode) == null ? void 0 : _a4.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          if (DEV_MODE2) {
            if (parentNodeName === "STYLE") {
              message = `Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css\`...\` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit node",
        start: this._$startNode,
        parent: this._$parent,
        value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(node, "data", "property");
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit text",
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode("");
        this._commitNode(textNode);
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(textNode, "data", "property");
        }
        value = this._textSanitizer(value);
        debugLogEvent2 && debugLogEvent2({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent2 && debugLogEvent2({
          kind: "commit text",
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    var _a4;
    const { values, ["_$litType$"]: type } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (((_a4 = this._$committedValue) == null ? void 0 : _a4._$template) === template) {
      debugLogEvent2 && debugLogEvent2({
        kind: "template updating",
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent2 && debugLogEvent2({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent2 && debugLogEvent2({
        kind: "template instantiated and updated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === void 0) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    if (!isArray4(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        itemParts.push(itemPart = new _ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */
  _$clear(start = wrap(this._$startNode).nextSibling, from2) {
    var _a4;
    (_a4 = this._$notifyConnectionChanged) == null ? void 0 : _a4.call(this, false, true, from2);
    while (start && start !== this._$endNode) {
      const n8 = wrap(start).nextSibling;
      wrap(start).remove();
      start = n8;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this method
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */
  setConnected(isConnected) {
    var _a4;
    if (this._$parent === void 0) {
      this.__isConnected = isConnected;
      (_a4 = this._$notifyConnectionChanged) == null ? void 0 : _a4.call(this, isConnected);
    } else if (DEV_MODE2) {
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
    }
  }
};
var AttributePart = class {
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== "" || strings[1] !== "") {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = void 0;
    }
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    let change = false;
    if (strings === void 0) {
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      const values = value;
      value = strings[0];
      let i4, v2;
      for (i4 = 0; i4 < strings.length - 1; i4++) {
        v2 = resolveDirective(this, values[valueIndex + i4], directiveParent, i4);
        if (v2 === noChange) {
          v2 = this._$committedValue[i4];
        }
        change || (change = !isPrimitive(v2) || v2 !== this._$committedValue[i4]);
        if (v2 === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v2 ?? "") + strings[i4 + 1];
        }
        this._$committedValue[i4] = v2;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */
  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === void 0) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "attribute");
        }
        value = this._sanitizer(value ?? "");
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value ?? "");
    }
  }
};
var PropertyPart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === void 0) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "property");
      }
      value = this._sanitizer(value);
    }
    debugLogEvent2 && debugLogEvent2({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing ? void 0 : value;
  }
};
var BooleanAttributePart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent2 && debugLogEvent2({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
  }
};
var EventPart = class extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE2 && this.strings !== void 0) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
    }
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _$setValue(newListener, directiveParent = this) {
    newListener = resolveDirective(this, newListener, directiveParent, 0) ?? nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent2 && debugLogEvent2({
      kind: "commit event listener",
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    var _a4;
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call(((_a4 = this.options) == null ? void 0 : _a4.host) ?? this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
};
var ElementPart = class {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    this._$disconnectableChildren = void 0;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent2 && debugLogEvent2({
      kind: "commit to element binding",
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
};
var polyfillSupport2 = DEV_MODE2 ? global3.litHtmlPolyfillSupportDevMode : global3.litHtmlPolyfillSupport;
polyfillSupport2 == null ? void 0 : polyfillSupport2(Template, ChildPart);
(global3.litHtmlVersions ?? (global3.litHtmlVersions = [])).push("3.2.1");
if (DEV_MODE2 && global3.litHtmlVersions.length > 1) {
  issueWarning2("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}
var render = (value, container, options) => {
  if (DEV_MODE2 && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE2 ? debugLogRenderId++ : 0;
  const partOwnerNode = (options == null ? void 0 : options.renderBefore) ?? container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent2 && debugLogEvent2({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === void 0) {
    const endNode = (options == null ? void 0 : options.renderBefore) ?? null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, void 0, options ?? {});
  }
  part._$setValue(value);
  debugLogEvent2 && debugLogEvent2({
    kind: "end render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE2) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

// node_modules/lit-element/development/lit-element.js
var JSCompiler_renameProperty2 = (prop, _obj) => prop;
var DEV_MODE3 = true;
var issueWarning3;
if (DEV_MODE3) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning3 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
var LitElement = class extends ReactiveElement {
  constructor() {
    super(...arguments);
    this.renderOptions = { host: this };
    this.__childPart = void 0;
  }
  /**
   * @category rendering
   */
  createRenderRoot() {
    var _a4;
    const renderRoot = super.createRenderRoot();
    (_a4 = this.renderOptions).renderBefore ?? (_a4.renderBefore = renderRoot.firstChild);
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */
  update(changedProperties) {
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = render(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */
  connectedCallback() {
    var _a4;
    super.connectedCallback();
    (_a4 = this.__childPart) == null ? void 0 : _a4.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */
  disconnectedCallback() {
    var _a4;
    super.disconnectedCallback();
    (_a4 = this.__childPart) == null ? void 0 : _a4.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */
  render() {
    return noChange;
  }
};
LitElement["_$litElement$"] = true;
LitElement[JSCompiler_renameProperty2("finalized", LitElement)] = true;
var _a3;
(_a3 = globalThis.litElementHydrateSupport) == null ? void 0 : _a3.call(globalThis, { LitElement });
var polyfillSupport3 = DEV_MODE3 ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport3 == null ? void 0 : polyfillSupport3({ LitElement });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
if (DEV_MODE3 && globalThis.litElementVersions.length > 1) {
  issueWarning3("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}

// node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c4) => (...values) => ({
  // This property needs to remain unminified.
  ["_$litDirective$"]: c4,
  values
});
var Directive = class {
  constructor(_partInfo) {
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
};

// node_modules/lit-html/development/directives/style-map.js
var important = "important";
var importantFlag = " !" + important;
var flagTrim = 0 - importantFlag.length;
var StyleMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a4;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "style" || ((_a4 = partInfo.strings) == null ? void 0 : _a4.length) > 2) {
      throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
  }
  render(styleInfo) {
    return Object.keys(styleInfo).reduce((style, prop) => {
      const value = styleInfo[prop];
      if (value == null) {
        return style;
      }
      prop = prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
      return style + `${prop}:${value};`;
    }, "");
  }
  update(part, [styleInfo]) {
    const { style } = part.element;
    if (this._previousStyleProperties === void 0) {
      this._previousStyleProperties = new Set(Object.keys(styleInfo));
      return this.render(styleInfo);
    }
    for (const name of this._previousStyleProperties) {
      if (styleInfo[name] == null) {
        this._previousStyleProperties.delete(name);
        if (name.includes("-")) {
          style.removeProperty(name);
        } else {
          style[name] = null;
        }
      }
    }
    for (const name in styleInfo) {
      const value = styleInfo[name];
      if (value != null) {
        this._previousStyleProperties.add(name);
        const isImportant = typeof value === "string" && value.endsWith(importantFlag);
        if (name.includes("-") || isImportant) {
          style.setProperty(name, isImportant ? value.slice(0, flagTrim) : value, isImportant ? important : "");
        } else {
          style[name] = value;
        }
      }
    }
    return noChange;
  }
};
var styleMap = directive(StyleMapDirective);

// node_modules/@lit/reactive-element/development/decorators/custom-element.js
var customElement = (tagName) => (classOrTarget, context2) => {
  if (context2 !== void 0) {
    context2.addInitializer(() => {
      customElements.define(tagName, classOrTarget);
    });
  } else {
    customElements.define(tagName, classOrTarget);
  }
};

// node_modules/@lit/reactive-element/development/decorators/property.js
var DEV_MODE4 = true;
var issueWarning4;
if (DEV_MODE4) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning4 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
var legacyProperty = (options, proto, name) => {
  const hasOwnProperty = proto.hasOwnProperty(name);
  proto.constructor.createProperty(name, hasOwnProperty ? { ...options, wrapped: true } : options);
  return hasOwnProperty ? Object.getOwnPropertyDescriptor(proto, name) : void 0;
};
var defaultPropertyDeclaration2 = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var standardProperty = (options = defaultPropertyDeclaration2, target, context2) => {
  const { kind, metadata } = context2;
  if (DEV_MODE4 && metadata == null) {
    issueWarning4("missing-class-metadata", `The class ${target} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);
  }
  let properties = globalThis.litPropertyMetadata.get(metadata);
  if (properties === void 0) {
    globalThis.litPropertyMetadata.set(metadata, properties = /* @__PURE__ */ new Map());
  }
  properties.set(context2.name, options);
  if (kind === "accessor") {
    const { name } = context2;
    return {
      set(v2) {
        const oldValue = target.get.call(this);
        target.set.call(this, v2);
        this.requestUpdate(name, oldValue, options);
      },
      init(v2) {
        if (v2 !== void 0) {
          this._$changeProperty(name, void 0, options);
        }
        return v2;
      }
    };
  } else if (kind === "setter") {
    const { name } = context2;
    return function(value) {
      const oldValue = this[name];
      target.call(this, value);
      this.requestUpdate(name, oldValue, options);
    };
  }
  throw new Error(`Unsupported decorator location: ${kind}`);
};
function property(options) {
  return (protoOrTarget, nameOrContext) => {
    return typeof nameOrContext === "object" ? standardProperty(options, protoOrTarget, nameOrContext) : legacyProperty(options, protoOrTarget, nameOrContext);
  };
}

// node_modules/@lit/reactive-element/development/decorators/state.js
function state(options) {
  return property({
    ...options,
    // Add both `state` and `attribute` because we found a third party
    // controller that is keying off of PropertyOptions.state to determine
    // whether a field is a private internal property or not.
    state: true,
    attribute: false
  });
}

// node_modules/@lit/reactive-element/development/decorators/query.js
var DEV_MODE5 = true;
var issueWarning5;
if (DEV_MODE5) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning5 = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}

// node_modules/@creit.tech/stellar-wallets-kit/state/reactive-state.js
var t = class {
  constructor(t8, e6, h2) {
    this.host = t8, this.source = e6, this.value = h2, this.sub = null, this.value$ = new BehaviorSubject(void 0), this.host.addController(this);
  }
  hostConnected() {
    this.sub = this.source.subscribe((s6) => {
      this.value = s6, this.value$.next(s6), this.host.requestUpdate();
    });
  }
  hostDisconnected() {
    var _a4;
    (_a4 = this.sub) == null ? void 0 : _a4.unsubscribe();
  }
};

// node_modules/@creit.tech/stellar-wallets-kit/components/modal/styles.js
var e2 = css`
  .dialog-modal {
    position: fixed;
    z-index: 990;
    font-family: 'Open Sans', arial, sans-serif;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    border-width: 0;
    box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.25);
    bottom: 0;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    .dialog-modal {
      z-index: 990;
      bottom: auto;
      top: 5rem;
      max-width: 45rem;
      border-radius: 1rem;
    }
  }
`;
var a2 = css`
  .dialog-modal-body {
    display: flex;
    flex-direction: column-reverse;
  }

  .dialog-modal-body__help,
  .dialog-modal-body__wallets {
    width: 100%;
    flex-basis: 100%;
  }

  .dialog-modal-body__help {
    padding: 1.5rem;
  }

  .dialog-modal-body__wallets {
    padding: 1.5rem;
  }

  .dialog-text-solid {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .dialog-text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  @media (prefers-color-scheme: light) {
    .dialog-modal-body__help {
      background-color: var(--modal-help-bg-color, #f8f8f8);
      border-top: 1px solid var(--modal-divider-color, rgba(0, 0, 0, 0.15));
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid var(--modal-divider-color, rgba(0, 0, 0, 0.15));
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background-color: var(--modal-bg-color, #fcfcfc);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #000000);
    }

    .dialog-text {
      color: var(--modal-text-color, #181818);
    }
  }

  @media (prefers-color-scheme: dark) {
    .dialog-modal-body__help {
      background-color: var(--modal-help-bg-color, #1c1c1c);
      border-top: 1px solid var(--modal-divider-color, rgba(255, 255, 255, 0.15));
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid var(--modal-divider-color, rgba(255, 255, 255, 0.15));
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background-color: var(--modal-bg-color, #161616);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #ededed);
    }

    .dialog-text {
      color: var(--modal-text-color, #a0a0a0);
    }
  }

  @media screen and (min-width: 768px) {
    .dialog-modal-body {
      flex-direction: row;
    }

    .dialog-modal-body__help,
    .dialog-modal-body__wallets {
      padding: 2rem;
    }
  }
`;
var l2 = css`
  .help-container {
    width: 100%;
  }

  .help-header {
    display: none;
    margin: 0 0 2rem 0;
  }

  .help-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .help__title,
  .help__text {
    text-align: center;
  }

  .help__title {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .help__text {
    max-width: 21rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    margin-top: 0;
  }

  .help__whats_stellar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .help-header {
      display: block;
    }

    .help__title,
    .help__text {
      text-align: left;
      margin-left: 0;
    }

    .help__whats_a_wallet {
      margin-bottom: 2rem;
    }

    .help__whats_stellar {
      display: block;
    }
  }
`;
var r2 = css`
  .wallets-container {
    width: 100%;
    height: 100%;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
  }

  .wallets-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .wallets-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .wallets-header__button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #8f8f8f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #707070);
    }
  }

  .wallets-body {
    margin: 0;
    width: 100%;
    list-style: none;
    padding: 0 !important;
  }

  .wallets-body__item {
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .wallets-body__item img {
    margin-right: 1rem;
    width: 2rem;
    border-radius: 100%;
    overflow: hidden;
  }

  .wallets-body__item.not-available {
    cursor: alias;
  }

  .wallets-body__item .not-available {
    margin-left: auto;
    font-size: 10px;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }

  @media (prefers-color-scheme: light) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #e2e2e2) 1px;
      background-color: var(--modal-not-available-bg-color, #f3f3f3);
      color: var(--modal-not-available-text-color, #6f6f6f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #343434) 1px;
      background-color: var(--modal-not-available-bg-color, #232323);
      color: var(--modal-not-available-text-color, #a0a0a0);
    }
  }

  @media screen and (min-width: 768px) {
  }
`;
var d2 = css`
  .dialog-modal[open] + .backdrop {
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
var t2 = css`
  .dialog-modal[open] {
    -webkit-animation: showModal 0.3s ease normal;
  }
  @-webkit-keyframes showModal {
    from {
      transform: translateY(25%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .dialog-modal.closing {
    -webkit-animation: hideModal 0.3s ease normal !important;
  }
  @-webkit-keyframes hideModal {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(25%);
      opacity: 0;
    }
  }

  .backdrop.closing {
    -webkit-animation: hideBackdrop 0.3s ease normal !important;
  }
  @-webkit-keyframes hideBackdrop {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

// node_modules/@creit.tech/stellar-wallets-kit/components/modal/stellar-wallets-modal.js
var g = Object.defineProperty;
var u2 = Object.getOwnPropertyDescriptor;
var w2 = (e6, l4, t8, o5) => {
  for (var a5, s6 = o5 > 1 ? void 0 : o5 ? u2(l4, t8) : l4, i4 = e6.length - 1; i4 >= 0; i4--) (a5 = e6[i4]) && (s6 = (o5 ? a5(l4, t8, s6) : a5(s6)) || s6);
  return o5 && s6 && g(l4, t8, s6), s6;
};
var f2 = { DARK: { bgColor: "#161616", textColor: "#a0a0a0", solidTextColor: "#ededed", headerButtonColor: "#707070", dividerColor: "rgba(255, 255, 255, 0.15)", helpBgColor: "#1c1c1c", notAvailableTextColor: "#a0a0a0", notAvailableBgColor: "#232323", notAvailableBorderColor: "#343434" }, LIGHT: { bgColor: "#fcfcfc", textColor: "#181818", solidTextColor: "#000000", headerButtonColor: "#8f8f8f", dividerColor: "rgba(0, 0, 0, 0.15)", helpBgColor: "#f8f8f8", notAvailableTextColor: "#6f6f6f", notAvailableBgColor: "#f3f3f3", notAvailableBorderColor: "#e2e2e2" } };
var x = class extends LitElement {
  constructor() {
    super(...arguments), this.ignoreShowStatus = false, this.showModal = false, this.closingModal = false, this.modalTitle = "Connect a Wallet", this.notAvailableText = "Not available", this.allowedWallets = new t(this, i), this.theme = new t(this, l);
  }
  connectedCallback() {
    super.connectedCallback();
  }
  async closeModal() {
    this.closingModal = true, await new Promise((e6) => setTimeout(e6, 280)), this.ignoreShowStatus || (this.showModal = false), this.dispatchEvent(new CustomEvent("modal-closed", { detail: new Error("Modal closed"), bubbles: true, composed: true })), this.closingModal = false;
  }
  async pickWalletOption(e6) {
    if (e6.isAvailable) {
      this.closingModal = true, await new Promise((e7) => setTimeout(e7, 280));
      try {
        const l4 = window.localStorage.getItem("@StellarWalletsKit/usedWalletsIds");
        let t8 = l4 ? JSON.parse(l4) : [];
        t8 = [e6.id, ...t8.filter((l5) => l5 !== e6.id)], window.localStorage.setItem("@StellarWalletsKit/usedWalletsIds", JSON.stringify(t8));
      } catch (e7) {
        console.error(e7);
      }
      this.dispatchEvent(new CustomEvent("wallet-selected", { detail: e6, bubbles: true, composed: true })), this.closingModal = false;
    } else window.open(e6.url, "_blank");
  }
  getSortedList() {
    const e6 = this.allowedWallets.value.reduce((e7, l5) => ({ available: l5.isAvailable ? [...e7.available, l5] : e7.available, unavailable: l5.isAvailable ? e7.unavailable : [...e7.unavailable, l5] }), { available: [], unavailable: [] });
    let l4;
    try {
      const e7 = window.localStorage.getItem("@StellarWalletsKit/usedWalletsIds");
      l4 = e7 ? JSON.parse(e7) : [];
    } catch (e7) {
      console.error(e7), l4 = [];
    }
    if (0 === l4.length) return [...e6.available, ...e6.unavailable];
    const t8 = [], o5 = [];
    for (const a5 of e6.available) l4.find((e7) => e7 === a5.id) ? t8.push(a5) : o5.push(a5);
    return [...t8.sort((e7, t9) => l4.indexOf(e7.id) - l4.indexOf(t9.id)), ...o5, ...e6.unavailable];
  }
  getThemeStyles() {
    return this.theme.value ? { "--modal-bg-color": this.theme.value.bgColor, "--modal-text-color": this.theme.value.textColor, "--modal-solid-text-color": this.theme.value.solidTextColor, "--modal-header-button-color": this.theme.value.headerButtonColor, "--modal-divider-color": this.theme.value.dividerColor, "--modal-help-bg-color": this.theme.value.helpBgColor, "--modal-not-available-text-color": this.theme.value.notAvailableTextColor, "--modal-not-available-bg-color": this.theme.value.notAvailableBgColor, "--modal-not-available-border-color": this.theme.value.notAvailableBorderColor } : {};
  }
  render() {
    const e6 = html`
      <section class="help-container">
        <header class="help-header">
          <h2 class="help-header__modal-title dialog-text-solid">Learn more</h2>
        </header>

        <div class="help__whats_a_wallet">
          <h2 class="dialog-text-solid help__title">What is a wallet?</h2>
          <p class="dialog-text help__text">
            Wallets are used to send, receive, and store the keys you use to sign blockchain transactions.
          </p>
        </div>

        <div class="help__whats_stellar">
          <h2 class="dialog-text-solid help__title">What is Stellar?</h2>
          <p class="dialog-text help__text">
            Stellar is a decentralized, public blockchain that gives developers the tools to create experiences that are
            more like cash than crypto
          </p>
        </div>
      </section>
    `, l4 = html`
      <section class="wallets-container">
        <header class="wallets-header">
          <h2 class="wallets-header__modal-title dialog-text-solid">${this.modalTitle}</h2>

          <button @click=${() => this.closeModal()} class="wallets-header__button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="20px" width="20px" viewBox="0 0 490 490">
              <polygon
                points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
            </svg>
          </button>
        </header>

        <ul class="wallets-body">
          ${this.getSortedList().map((e7, l5) => html`
                <li
                  @click=${() => this.pickWalletOption(e7)}
                  class=" wallets-body__item ${e7.isAvailable ? "" : "not-available"} ${l5 === this.allowedWallets.value.length - 1 ? "mb-0" : ""}">
                  <img src=${e7.icon} alt=${e7.name} />
                  <span class="dialog-text-solid">${e7.name}</span>
                  ${e7.isAvailable ? "" : html`<small class="not-available">${this.notAvailableText}</small>`}
                </li>
              `)}
        </ul>
      </section>
    `;
    return html`
      <dialog
        style=${styleMap(this.getThemeStyles())}
        class="dialog-modal ${this.closingModal ? "closing" : ""}"
        .open=${this.showModal}>
        <section class="dialog-modal-body">
          <div class="dialog-modal-body__help">${e6}</div>
          <div class="dialog-modal-body__wallets">${l4}</div>
        </section>
      </dialog>

      <div
        style="position: fixed; z-index: 950"
        class="backdrop ${this.closingModal ? "closing" : ""}"
        @click=${() => this.closeModal()}></div>
    `;
  }
};
x.styles = [css`
      :host * {
        box-sizing: border-box;
      }

      .mb-0 {
        margin-bottom: 0 !important;
      }
    `, e2, a2, l2, d2, t2, r2], w2([property({ type: Boolean, reflect: true })], x.prototype, "ignoreShowStatus", 2), w2([property({ type: Boolean, reflect: true })], x.prototype, "showModal", 2), w2([state()], x.prototype, "closingModal", 2), w2([property({ type: String, reflect: true })], x.prototype, "modalTitle", 2), w2([property({ type: String, reflect: true })], x.prototype, "notAvailableText", 2), x = w2([customElement("stellar-wallets-modal")], x);

// node_modules/@creit.tech/stellar-wallets-kit/services/account.service.js
async function a3(a5) {
  const o5 = await firstValueFrom(r);
  if (!o5) throw new Error("There is no Horizon URL set");
  const e6 = new URL(o5);
  e6.pathname = `/accounts/${a5}`;
  const r9 = await fetch(e6);
  return (await r9.json()).balances.find((t8) => "native" === t8.asset_type).balance;
}

// node_modules/@creit.tech/stellar-wallets-kit/services/clipboard.service.js
async function t3(t8) {
  if (!t8) throw new Error("Text to copy to the clipboard can't be undefined");
  await navigator.clipboard.writeText(t8);
}

// node_modules/@creit.tech/stellar-wallets-kit/components/button/styles.js
var r3 = css`
  .btn-container {
    position: relative;
  }
`;
var t4 = css`
  .btn {
    background: none;
    border: none;
    border-radius: var(--button-border-radius, 0.5rem);
    cursor: pointer;
    padding: var(--button-padding, 0.5rem 1.25rem);
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    line-height: 100%;
    margin: 0;
    font-family: 'Open Sans', arial, sans-serif;
  }

  .btn svg {
    width: 1rem;
    height: auto;
    margin-left: 0.5rem;
  }

  @media (prefers-color-scheme: light) {
    .btn {
      background-color: var(--button-bg-color, #fcfcfc);
      color: var(--button-text-color, #181818);
      border: solid var(--button-text-color, #181818) 1px;
    }

    .btn svg circle,
    .btn svg path {
      stroke: var(--button-text-color, #181818);
    }
  }

  @media (prefers-color-scheme: dark) {
    .btn {
      background-color: var(--button-bg-color, #161616);
      color: var(--button-text-color, #fcfcfc);
      border: solid var(--button-text-color, #fcfcfc) 1px;
    }

    .btn svg circle,
    .btn svg path {
      stroke: var(--button-text-color, #fcfcfc);
    }
  }
`;
var e3 = css`
  .dropdown-wrapper {
    position: absolute;
    top: 110%;
    right: 0;
    box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.25);
    z-index: 900;
    border-radius: 0.75rem;
    padding: 2rem;
    width: 18rem;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', arial, sans-serif;
  }

  .dropdown-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .dropdown-text-solid {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .dropdown-text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  .dropdown-action-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .dropdown-action-button {
    padding: 0.4rem;
    border-radius: 0.25rem;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .dropdown-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    .dropdown-wrapper {
      background-color: var(--button-bg-color, #fcfcfc);
      border: solid 1px var(--button-solid-text-color, #000000);
    }

    .dropdown-text-solid,
    .dropdown-action-button,
    .dropdown-close {
      color: var(--button-solid-text-color, #000000);
    }

    .dropdown-text {
      color: var(--button-text-color, #181818);
    }

    svg circle,
    svg path {
      stroke: var(--button-text-color, #181818);
    }

    .dropdown-action-button {
      border: 1px solid var(--button-text-color, #181818);
    }
  }

  @media (prefers-color-scheme: dark) {
    .dropdown-wrapper {
      background-color: var(--button-bg-color, #161616);
      border: solid 1px var(--button-solid-text-color, #ededed);
    }

    .dropdown-text-solid,
    .dropdown-action-button,
    .dropdown-close {
      color: var(--button-solid-text-color, #ededed);
    }

    .dropdown-text {
      color: var(--button-text-color, #a0a0a0);
    }

    svg circle,
    svg path {
      stroke: var(--button-text-color, #fcfcfc);
    }

    .dropdown-action-button {
      border: 1px solid var(--button-text-color, #a0a0a0);
    }
  }
`;

// node_modules/@creit.tech/stellar-wallets-kit/components/button/stellar-wallets-button.js
var g2 = Object.defineProperty;
var x2 = Object.getOwnPropertyDescriptor;
var k = (t8, e6, o5, s6) => {
  for (var i4, r9 = s6 > 1 ? void 0 : s6 ? x2(e6, o5) : e6, n8 = t8.length - 1; n8 >= 0; n8--) (i4 = t8[n8]) && (r9 = (s6 ? i4(e6, o5, r9) : i4(r9)) || r9);
  return s6 && r9 && g2(e6, o5, r9), r9;
};
var y = { DARK: { bgColor: "#161616", textColor: "#a0a0a0", solidTextColor: "#ededed", dividerColor: "rgba(255, 255, 255, 0.15)", buttonPadding: "0.5rem 1.25rem", buttonBorderRadius: "0.5rem" }, LIGHT: { bgColor: "#fcfcfc", textColor: "#181818", solidTextColor: "#000000", dividerColor: "rgba(0, 0, 0, 0.15)", buttonPadding: "0.5rem 1.25rem", buttonBorderRadius: "0.5rem" } };
var f3 = class extends LitElement {
  constructor() {
    super(...arguments), this.buttonText = "Connect", this.showDropdown = false, this.showCopiedMessage = false, this.activeAddress = new t(this, u), this.theme = new t(this, p);
  }
  get getThemeStyles() {
    return this.theme.value ? { "--button-bg-color": this.theme.value.bgColor, "--button-text-color": this.theme.value.textColor, "--button-solid-text-color": this.theme.value.solidTextColor, "--button-divider-color": this.theme.value.dividerColor, "--button-padding": this.theme.value.buttonPadding, "--button-border-radius": this.theme.value.buttonBorderRadius } : {};
  }
  onButtonClicked() {
    this.activeAddress.value ? this.showDropdown = !this.showDropdown : this.dispatchEvent(new CustomEvent("button-clicked", { bubbles: true, composed: true }));
  }
  closeDropdown() {
    this.showDropdown = false;
  }
  disconnect() {
    v(), this.closeDropdown(), this.dispatchEvent(new CustomEvent("disconnect-wallet", { bubbles: true, composed: true }));
  }
  async copyPublicKey() {
    await t3(this.activeAddress.value), this.showCopiedMessage = true, await new Promise((t8) => setTimeout(t8, 3e3)), this.showCopiedMessage = false;
  }
  async startBalanceFetcher() {
    await firstValueFrom(r) && (this.fetchAddressSubscription = this.activeAddress.value$.pipe(switchMap(async (t8) => t8 ? a3(t8).catch(() => "0") : "0")).subscribe((t8) => {
      this.accountBalance = t8;
    }));
  }
  connectedCallback() {
    super.connectedCallback(), this.startBalanceFetcher().then();
  }
  disconnectedCallback() {
    var _a4;
    super.disconnectedCallback(), (_a4 = this.fetchAddressSubscription) == null ? void 0 : _a4.unsubscribe();
  }
  render() {
    var _a4, _b2;
    const t8 = html`
      <button @click=${this.onButtonClicked} class="btn">
        ${this.activeAddress.value ? this.activeAddress.value.slice(0, 4) + "...." + this.activeAddress.value.slice(-6) : this.buttonText}

        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M20.8333 9H18.2308C16.4465 9 15 10.3431 15 12C15 13.6569 16.4465 15 18.2308 15H20.8333C20.9167 15 20.9583 15 20.9935 14.9979C21.5328 14.965 21.9623 14.5662 21.9977 14.0654C22 14.0327 22 13.994 22 13.9167V10.0833C22 10.006 22 9.96726 21.9977 9.9346C21.9623 9.43384 21.5328 9.03496 20.9935 9.00214C20.9583 9 20.9167 9 20.8333 9Z"
            stroke-width="1.5" />
          <path
            d="M20.965 9C20.8873 7.1277 20.6366 5.97975 19.8284 5.17157C18.6569 4 16.7712 4 13 4L10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.6366 18.0203 20.8873 16.8723 20.965 15"
            stroke-width="1.5" />
          <path d="M17.9912 12H18.0002" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    `, e6 = this.showDropdown ? html`
          <section class="dropdown-wrapper">
            <button @click=${this.closeDropdown} class="dropdown-close">x</button>

            <div class="dropdown-profile">
              <svg
                style="margin-bottom: 1rem"
                width="36px"
                height="36px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5" />
                <path
                  d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round" />
              </svg>

              <h2 style="margin: 0 0 0.25rem" class="dropdown-text-solid">
                ${(_a4 = this.activeAddress.value) == null ? void 0 : _a4.slice(0, 4)}....${(_b2 = this.activeAddress.value) == null ? void 0 : _b2.slice(-6)}
              </h2>

              ${this.accountBalance ? html`<h3 style="margin: 0" class="dropdown-text">${this.accountBalance} XLM</h3>` : ""}
            </div>

            <div class="dropdown-action-wrapper">
              <button @click=${this.copyPublicKey} class="dropdown-action-button">
                ${this.showCopiedMessage ? "Copied!!" : html`Copy address

                      <svg
                        width="0.75rem"
                        height="0.75rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1.25H10.9436C9.10583 1.24998 7.65019 1.24997 6.51098 1.40314C5.33856 1.56076 4.38961 1.89288 3.64124 2.64124C2.89288 3.38961 2.56076 4.33856 2.40314 5.51098C2.24997 6.65019 2.24998 8.10582 2.25 9.94357V16C2.25 17.8722 3.62205 19.424 5.41551 19.7047C5.55348 20.4687 5.81753 21.1208 6.34835 21.6517C6.95027 22.2536 7.70814 22.5125 8.60825 22.6335C9.47522 22.75 10.5775 22.75 11.9451 22.75H15.0549C16.4225 22.75 17.5248 22.75 18.3918 22.6335C19.2919 22.5125 20.0497 22.2536 20.6517 21.6517C21.2536 21.0497 21.5125 20.2919 21.6335 19.3918C21.75 18.5248 21.75 17.4225 21.75 16.0549V10.9451C21.75 9.57754 21.75 8.47522 21.6335 7.60825C21.5125 6.70814 21.2536 5.95027 20.6517 5.34835C20.1208 4.81753 19.4687 4.55348 18.7047 4.41551C18.424 2.62205 16.8722 1.25 15 1.25ZM17.1293 4.27117C16.8265 3.38623 15.9876 2.75 15 2.75H11C9.09318 2.75 7.73851 2.75159 6.71085 2.88976C5.70476 3.02502 5.12511 3.27869 4.7019 3.7019C4.27869 4.12511 4.02502 4.70476 3.88976 5.71085C3.75159 6.73851 3.75 8.09318 3.75 10V16C3.75 16.9876 4.38624 17.8265 5.27117 18.1293C5.24998 17.5194 5.24999 16.8297 5.25 16.0549V10.9451C5.24998 9.57754 5.24996 8.47522 5.36652 7.60825C5.48754 6.70814 5.74643 5.95027 6.34835 5.34835C6.95027 4.74643 7.70814 4.48754 8.60825 4.36652C9.47522 4.24996 10.5775 4.24998 11.9451 4.25H15.0549C15.8297 4.24999 16.5194 4.24998 17.1293 4.27117ZM7.40901 6.40901C7.68577 6.13225 8.07435 5.9518 8.80812 5.85315C9.56347 5.75159 10.5646 5.75 12 5.75H15C16.4354 5.75 17.4365 5.75159 18.1919 5.85315C18.9257 5.9518 19.3142 6.13225 19.591 6.40901C19.8678 6.68577 20.0482 7.07435 20.1469 7.80812C20.2484 8.56347 20.25 9.56458 20.25 11V16C20.25 17.4354 20.2484 18.4365 20.1469 19.1919C20.0482 19.9257 19.8678 20.3142 19.591 20.591C19.3142 20.8678 18.9257 21.0482 18.1919 21.1469C17.4365 21.2484 16.4354 21.25 15 21.25H12C10.5646 21.25 9.56347 21.2484 8.80812 21.1469C8.07435 21.0482 7.68577 20.8678 7.40901 20.591C7.13225 20.3142 6.9518 19.9257 6.85315 19.1919C6.75159 18.4365 6.75 17.4354 6.75 16V11C6.75 9.56458 6.75159 8.56347 6.85315 7.80812C6.9518 7.07435 7.13225 6.68577 7.40901 6.40901Z" />
                      </svg>`}
              </button>

              <button @click=${this.disconnect} class="dropdown-action-button">
                Disconnect

                <svg
                  width="0.75rem"
                  height="0.75rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </section>
        ` : "";
    return html`
      <section style=${styleMap(this.getThemeStyles)} class="btn-container">${t8} ${e6}</section>
    `;
  }
};
f3.styles = [css`
      :host * {
        box-sizing: border-box;
      }
    `, t4, r3, e3], k([property({ type: String, reflect: true })], f3.prototype, "buttonText", 2), k([state()], f3.prototype, "showDropdown", 2), k([state()], f3.prototype, "accountBalance", 2), k([state()], f3.prototype, "showCopiedMessage", 2), f3 = k([customElement("stellar-wallets-button")], f3);

// node_modules/@albedo-link/intent/src/random-token-generator.js
function generateRandomToken() {
  const rn = new Uint32Array(4);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(rn);
  } else {
    for (let i4 = 0; i4 < rn.length; i4++) {
      rn[i4] = Math.floor(Math.random() * 4294967295);
    }
  }
  return Array.from(rn).map((n8) => n8.toString(36)).join("");
}

// node_modules/@albedo-link/intent/src/intent-interface.js
var intentInterface = {
  public_key: {
    title: "View public key",
    description: "Requests account public key. It's a simple way of authentication for Stellar-based applications. The response ensures that a user owns the corresponding secret key.",
    implicitFlow: false,
    params: {
      token: {
        description: "Verification token generated by the application (should be unique or random).",
        type: "string",
        required: false
      },
      callback: {
        description: "Optional URL callback where Albedo will POST a signed token and public key.",
        type: "string",
        required: false
      },
      require_existing: {
        description: "Allow existing Albedo accounts only.",
        type: "boolean",
        required: false
      }
    },
    returns: {
      pubkey: {
        description: "User-selected public key.",
        type: "string"
      },
      signed_message: {
        description: "HEX-encoded authentication message derived from the public key and verification token.",
        type: "string"
      },
      signature: {
        description: "HEX-encoded ED25519 signature of the authentication message that can be further used to verify user's keypair ownership.",
        type: "string"
      }
    }
  },
  sign_message: {
    title: "Sign text message",
    description: "Requests arbitrary message signing. Can be used to implement identity/ownership verification.",
    implicitFlow: true,
    params: {
      message: {
        description: "Text message to sign.",
        type: "string",
        required: true
      },
      pubkey: {
        description: "Specific public key requested by the application.",
        type: "string",
        required: false
      },
      callback: {
        description: "Optional URL callback where Albedo will POST a signed message.",
        type: "string",
        required: false
      }
    },
    returns: {
      pubkey: {
        description: "User-selected public key.",
        type: "string"
      },
      original_message: {
        description: "Text message to sign from request.",
        type: "string"
      },
      signed_message: {
        description: "HEX-encoded message derived from the public key and original message.",
        type: "string"
      },
      message_signature: {
        description: "HEX-encoded ED25519 signature of the signed message.",
        type: "string"
      }
    }
  },
  tx: {
    title: "Sign transaction",
    description: "Requests a signature for the transaction. Returns the signed transaction envelope that can be submitted to the network or used for multi-sig coordination.",
    implicitFlow: true,
    params: {
      xdr: {
        description: "XDR-encoded transaction envelope to sign.",
        type: "string",
        required: true
      },
      pubkey: {
        description: "Specific public key requested by the application.",
        type: "string",
        required: false
      },
      network: {
        description: "Stellar network identifier.",
        type: "string",
        required: false
      },
      callback: {
        description: "Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon.",
        type: "string",
        required: false
      },
      description: {
        description: "Optional human-friendly short transaction description provided by developers.",
        type: "string",
        required: false
      },
      submit: {
        description: "If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.",
        type: "boolean",
        required: false
      }
    },
    returns: {
      xdr: {
        description: "XDR-encoded transaction envelope from request.",
        type: "string"
      },
      tx_hash: {
        description: "HEX-encoded transaction hash.",
        type: "string"
      },
      signed_envelope_xdr: {
        description: "XDR-encoded transaction envelope with new signatures.",
        type: "string"
      },
      network: {
        description: "Stellar network identifier.",
        type: "string"
      },
      result: {
        description: "Optional response from Horizon if the transaction has been submitted automatically.",
        type: "object"
      }
    }
  },
  pay: {
    title: "Make payment",
    description: "Requests a payment from a user. Works with any Stellar asset, supports transaction memo.",
    implicitFlow: true,
    params: {
      amount: {
        description: "Requested payment amount.",
        type: "string",
        required: true
      },
      destination: {
        description: "Payment destination address.",
        type: "string",
        required: true
      },
      asset_code: {
        description: "Asset code (skip for XLM).",
        type: "string",
        required: false
      },
      asset_issuer: {
        description: "Asset issuer (skip for XLM).",
        type: "string",
        required: false
      },
      memo: {
        description: "Transaction memo (required for exchanges and some anchors).",
        type: "string",
        required: false
      },
      memo_type: {
        description: "Transaction memo type.",
        type: "string",
        required: false
      },
      pubkey: {
        description: "Specific public key requested by the application.",
        type: "string",
        required: false
      },
      network: {
        description: "Stellar network identifier or private network passphrase.",
        type: "string",
        required: false
      },
      callback: {
        description: "Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon. ",
        type: "string",
        required: false
      },
      submit: {
        description: "If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.",
        type: "boolean",
        required: false
      }
    },
    returns: {
      amount: {
        description: "Payment amount from request.",
        type: "string"
      },
      destination: {
        description: "Payment destination address from request.",
        type: "string"
      },
      asset_code: {
        description: "Asset code from request.",
        type: "string"
      },
      asset_issuer: {
        description: "Asset issuer from request.",
        type: "string"
      },
      memo: {
        description: "Transaction memo from request.",
        type: "string"
      },
      memo_type: {
        description: "Transaction memo type from request.",
        type: "string"
      },
      tx_hash: {
        description: "HEX-encoded transaction hash.",
        type: "string"
      },
      signed_envelope_xdr: {
        description: "XDR-encoded transaction envelope with new signatures.",
        type: "string"
      },
      pubkey: {
        description: "User-selected public key.",
        type: "string"
      },
      network: {
        description: "Stellar network identifier.",
        type: "string"
      },
      result: {
        description: "Optional response from Horizon if the transaction has been submitted automatically.",
        type: "object"
      }
    }
  },
  trust: {
    title: "Establish trustline",
    description: "Requests permission to create a trustline to a given Stellar asset. Gradually simplifies the process of creating trustlines for anchors, ICOs, and airdrops.",
    implicitFlow: true,
    params: {
      asset_code: {
        description: "Trustline asset code.",
        type: "string",
        required: true
      },
      asset_issuer: {
        description: "Trustline asset issuer address.",
        type: "string",
        required: true
      },
      limit: {
        description: "Trust limit.",
        type: "string",
        required: false
      },
      memo: {
        description: "Transaction memo (required for exchanges and some anchors).",
        type: "string",
        required: false
      },
      memo_type: {
        description: "Transaction memo type.",
        type: "string",
        required: false
      },
      pubkey: {
        description: "Specific public key requested by the application.",
        type: "string",
        required: false
      },
      network: {
        description: "Stellar network identifier or private network passphrase.",
        type: "string",
        required: false
      },
      callback: {
        description: "Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon. ",
        type: "string",
        required: false
      },
      submit: {
        description: "If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.",
        type: "boolean",
        required: false
      }
    },
    returns: {
      asset_code: {
        description: "Trustline asset code from request.",
        type: "string"
      },
      asset_issuer: {
        description: "Trustline asset issuer address from request.",
        type: "string"
      },
      limit: {
        description: "Trust limit from request.",
        type: "string"
      },
      tx_hash: {
        description: "HEX-encoded transaction hash.",
        type: "string"
      },
      signed_envelope_xdr: {
        description: "XDR-encoded transaction envelope with new signatures.",
        type: "string"
      },
      pubkey: {
        description: "User-selected public key.",
        type: "string"
      },
      network: {
        description: "Stellar network identifier.",
        type: "string"
      },
      result: {
        description: "Optional response from Horizon if the transaction has been submitted automatically.",
        type: "object"
      }
    }
  },
  exchange: {
    title: "Swap tokens",
    description: "Requests permission to buy tokens on Stellar DEX at market price.",
    implicitFlow: false,
    params: {
      amount: {
        description: "The amount of asset to buy.",
        type: "string",
        required: true
      },
      max_price: {
        description: "Maximum price the user willing to pay.",
        type: "string",
        required: true
      },
      sell_asset_code: {
        description: "Asset code of the asset to sell.",
        type: "string",
        required: false
      },
      sell_asset_issuer: {
        description: "Issuer account of the asset to sell.",
        type: "string",
        required: false
      },
      buy_asset_code: {
        description: "Asset code of the asset to buy.",
        type: "string",
        required: false
      },
      buy_asset_issuer: {
        description: "Issuer account of the asset to buy.",
        type: "string",
        required: false
      },
      memo: {
        description: "Transaction memo (required for exchanges and some anchors).",
        type: "string",
        required: false
      },
      memo_type: {
        description: "Transaction memo type.",
        type: "string",
        required: false
      },
      pubkey: {
        description: "Specific public key requested by the application.",
        type: "string",
        required: false
      },
      network: {
        description: "Stellar network identifier or private network passphrase.",
        type: "string",
        required: false
      },
      callback: {
        description: "Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon.",
        type: "string",
        required: false
      },
      submit: {
        description: "If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.",
        type: "boolean",
        required: false
      }
    },
    returns: {
      amount: {
        description: "The amount of asset to buy from request.",
        type: "string"
      },
      max_price: {
        description: "Maximum price the user willing to pay from request.",
        type: "string"
      },
      sell_asset_code: {
        description: "Asset code of the asset to sell from request.",
        type: "string"
      },
      sell_asset_issuer: {
        description: "Issuer account of the asset to sell from request.",
        type: "string"
      },
      buy_asset_code: {
        description: "Asset code of the asset to buy from request.",
        type: "string"
      },
      buy_asset_issuer: {
        description: "Issuer account of the asset to buy from request.",
        type: "string"
      },
      tx_hash: {
        description: "HEX-encoded transaction hash.",
        type: "string"
      },
      signed_envelope_xdr: {
        description: "XDR-encoded transaction envelope with new signatures.",
        type: "string"
      },
      pubkey: {
        description: "User-selected public key.",
        type: "string"
      },
      network: {
        description: "Stellar network identifier.",
        type: "string"
      },
      result: {
        description: "Optional response from Horizon if the transaction has been submitted automatically.",
        type: "object"
      }
    }
  },
  implicit_flow: {
    title: "Implicit permissions",
    description: 'Requests temporary access token for one or more intents that can be used to execute actions without explicit confirmation from the user. In order to be executed implicitly, an implicit flow permissions for a given intent should be granted and "pubkey" parameter set.',
    implicitFlow: false,
    params: {
      intents: {
        description: "Requested implicit flow intents.",
        type: "string|string[]",
        required: true
      },
      network: {
        description: "Stellar network identifier or private network passphrase.",
        type: "string",
        required: false
      }
    },
    returns: {
      granted: {
        description: "Whether a user granted permissions or not.",
        type: "boolean"
      },
      intents: {
        description: "Requested implicit flow intents.",
        type: "string[]"
      },
      grants: {
        description: "Implicit flow intents that have been granted.",
        type: "string[]"
      },
      session: {
        description: "Unique implicit session id.",
        type: "string"
      },
      valid_until: {
        description: "Session expiration timestamp.",
        type: "number"
      },
      pubkey: {
        description: "User-selected public key.",
        type: "string"
      },
      network: {
        description: "Stellar network identifier.",
        type: "string"
      }
    }
  },
  manage_account: {
    title: "Open account settings",
    description: "Opens account settings window for a given account.",
    implicitFlow: false,
    params: {
      pubkey: {
        description: "Specific public key requested by the application.",
        type: "string",
        required: true
      },
      network: {
        description: "Stellar network identifier or private network passphrase.",
        type: "string",
        required: false
      }
    },
    returns: {
      pubkey: {
        description: "Public key from intent request.",
        type: "string"
      }
    }
  },
  batch: {
    title: "Intents batch",
    description: "Requests execution of several tx intents bundled together. This intent is atomic – a user confirms or rejects all bundled requests at once, with the same account and the same Stellar network.",
    implicitFlow: true,
    params: {
      intents: {
        description: "Requested tx intents that should be executed together.",
        type: "object[]",
        required: true
      },
      pubkey: {
        description: "Specific public key requested by the application.",
        type: "string",
        required: false
      },
      network: {
        description: "Stellar network identifier or private network passphrase.",
        type: "string",
        required: false
      }
    },
    returns: {
      intents: {
        description: "Requested tx intents.",
        type: "object[]"
      },
      results: {
        description: "Array of results for each requested intent.",
        type: "object[]"
      },
      pubkey: {
        description: "User-selected public key.",
        type: "string"
      },
      network: {
        description: "Stellar network identifier.",
        type: "string"
      }
    }
  }
};
var intent_interface_default = intentInterface;

// node_modules/@albedo-link/intent/src/intent-errors.js
var intentErrors = {
  unhandledError: {
    message: "Unhandled error occurred. If this error persists, please contact Albedo support.",
    code: -1
  },
  externalError: {
    message: "External error occurred.",
    code: -2
  },
  invalidIntentRequest: {
    message: "Intent request is invalid.",
    code: -3
  },
  actionRejectedByUser: {
    message: "Action request was rejected by the user.",
    code: -4
  },
  horizonError: {
    message: "Transaction failed when submitted to Stellar network.",
    code: -5
  },
  callbackError: {
    message: "Callback redirect failed.",
    code: -6
  }
};
var intent_errors_default = intentErrors;

// node_modules/@albedo-link/intent/src/transport-handler.js
function TransportHandler(targetWindow, ephemeral = false) {
  this.windowHandler = targetWindow;
  this.ephemeral = !!ephemeral;
  this.isLoaded = false;
  this.pendingRequests = {};
  this.preprocessRequestParams = null;
  this.onLoaded = new Promise((resolve, reject) => this.onLoadedCallback = resolve).then(() => this);
  this.messageHandler = this.messageHandler.bind(this);
  window.addEventListener("message", this.messageHandler, false);
}
TransportHandler.prototype = {
  isLoaded: false,
  protocolVersion: 3,
  markLoaded() {
    const { onLoadedCallback } = this;
    if (onLoadedCallback) {
      this.onLoadedCallback = null;
      this.isLoaded = true;
      onLoadedCallback();
    }
  },
  /**
   * Handler for incoming communication messages processing.
   * @param {Object} data - Received data.
   */
  messageHandler({ data }) {
    if (data.albedo) {
      this.matchProtocolVersion(data.albedo.protocol);
      return this.markLoaded();
    }
    if (data.albedoIntentResult) {
      const { __reqid, ...result } = data.albedoIntentResult, pending = this.pendingRequests[__reqid];
      if (pending) {
        delete this.pendingRequests[__reqid];
        pending(result);
        if (this.ephemeral) {
          window.removeEventListener("message", this.messageHandler, false);
          this.windowHandler.close();
        }
      }
    }
  },
  /**
   * Handler for the transport window close event.
   */
  transportCloseHandler() {
    for (let key in this.pendingRequests)
      if (this.pendingRequests.hasOwnProperty(key)) {
        const pending = this.pendingRequests[key];
        delete this.pendingRequests[key];
        pending(intent_errors_default.actionRejectedByUser);
      }
  },
  /**
   * Request intent confirmation using current transport.
   * @param {Object} params - Intent request params.
   * @return {Promise}
   */
  postMessage(params) {
    const nonce = generateRandomToken();
    return new Promise((resolve, reject) => {
      this.onLoaded.then(() => {
        this.pendingRequests[nonce] = handleIntentResponsePromise.bind(this, resolve, reject);
        params = Object.assign({ __reqid: nonce, __albedo_intent_version: this.protocolVersion }, params);
        if (this.preprocessRequestParams) {
          params = this.preprocessRequestParams(params);
        }
        this.windowHandler.postMessage(params, "*");
      });
    });
  },
  /**
   * Check protocol version compatibility.
   * @param {Number} albedoProtocolVersion
   */
  matchProtocolVersion(albedoProtocolVersion) {
    const versionDif = albedoProtocolVersion - this.protocolVersion;
    if (versionDif === 0) return;
    const error = `@albedo-link/intent module protocol version (${this.protocolVersion}) is incompatible with current Albedo protocol version ${albedoProtocolVersion}.`;
    if (versionDif > 0) {
      console.warn(error + " Please update @albedo-link/intent module to avoid possible connection problems.");
    } else if (versionDif < 0) {
      this.windowHandler.close();
      throw new Error(error);
    }
  }
};
function handleIntentResponsePromise(resolve, reject, res) {
  if (res.error) {
    reject(res);
  } else {
    resolve(res);
  }
}
var transport_handler_default = TransportHandler;

// node_modules/@albedo-link/intent/src/transport-builder.js
function createDialogTransport(frontendUrl) {
  const url = `${frontendUrl}/confirm`, w4 = 480, h2 = 600, dualScreenLeft = window.screenLeft !== void 0 ? window.screenLeft : window.screenX, dualScreenTop = window.screenTop !== void 0 ? window.screenTop : window.screenY, currentWindowWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, currentWindowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, left = currentWindowWidth / 2 - w4 / 2 + dualScreenLeft, top = currentWindowHeight / 2 - h2 / 2 + dualScreenTop;
  const dialogWindow = window.open(url, "auth.albedo.link", `height=${h2},width=${w4},top=${top},left=${left},menubar=0,toolbar=0,location=0,status=0,personalbar=0,scrollbars=0,dependent=1`);
  return new transport_handler_default(dialogWindow, true).onLoaded;
}
var sharedIframeTransport = null;
function createIframeTransport(frontendUrl) {
  if (!sharedIframeTransport) {
    const iframe = document.createElement("iframe");
    iframe.style.border = "none";
    Object.assign(iframe, {
      width: "0",
      height: "0",
      frameBorder: "0",
      referrerPolicy: "origin",
      src: `${frontendUrl}`
    });
    document.body.appendChild(iframe);
    sharedIframeTransport = new transport_handler_default(iframe.contentWindow);
  }
  return sharedIframeTransport.onLoaded;
}

// node_modules/@albedo-link/intent/src/implicit-session.js
function ImplicitSession({ session, pubkey, grants, valid_until }) {
  this.key = session;
  this.pubkey = pubkey;
  this.grants = grants.slice();
  this.validUntil = valid_until;
  Object.freeze(this);
  Object.freeze(this.grants);
}
ImplicitSession.prototype = {
  /**
   * Unique session key.
   * @type {String}
   */
  key: "",
  /**
   * Public key of the key pair used to authorize the session.
   * @type {String}
   */
  pubkey: "",
  /**
   * Granted permissions.
   * @type {Array<String>}
   */
  grants: [],
  /**
   * Time-to-live.
   * @type {Number}
   */
  validUntil: 0,
  /**
   * Check whether the session is expired or not.
   * @return {boolean}
   */
  get isExpired() {
    return this.validUntil - 2e3 < (/* @__PURE__ */ new Date()).getTime();
  },
  toJSON() {
    return {
      session: this.key,
      pubkey: this.pubkey,
      grants: this.grants.slice(),
      valid_until: this.validUntil
    };
  }
};
var implicit_session_default = ImplicitSession;

// node_modules/@albedo-link/intent/src/implicit-session-storage.js
var storagePrefix = "albedo_session_";
var implicitSessions = {};
function getStorage() {
  return window.sessionStorage;
}
var saveToBrowserStorage = true;
function saveImplicitSession(intentResult) {
  const session = new implicit_session_default(intentResult);
  if (!saveToBrowserStorage) {
    implicitSessions[session.pubkey] = session;
  } else {
    getStorage().setItem(storagePrefix + session.pubkey, JSON.stringify(session));
  }
}
function retrieveSessionFromStorage(pubkey) {
  let session;
  if (!saveToBrowserStorage) {
    session = implicitSessions[pubkey];
  } else {
    const restored = getStorage().getItem(storagePrefix + pubkey);
    if (restored) {
      session = new implicit_session_default(JSON.parse(restored));
    }
  }
  if (!session) return null;
  if (session.isExpired) {
    forgetSession(pubkey);
    return null;
  }
  return session;
}
function getImplicitSession(intent, pubkey) {
  const session = retrieveSessionFromStorage(pubkey);
  if (!session || !session.grants.includes(intent)) return null;
  return session;
}
function getAllImplicitSessions() {
  const storage = getStorage();
  return Object.keys(storage).filter((key) => key.indexOf(storagePrefix) === 0).map((key) => retrieveSessionFromStorage(key.substr(storagePrefix.length))).filter((session) => !!session);
}
function forgetSession(pubkey) {
  if (!saveToBrowserStorage) {
    delete implicitSessions[pubkey];
  } else {
    getStorage().removeItem(storagePrefix + pubkey);
  }
}

// node_modules/@albedo-link/intent/src/intent-dispatcher.js
function intentError(msg) {
  return Object.assign(new Error(), intent_errors_default.invalidIntentRequest, { ext: msg });
}
function requestIntentConfirmation(params, frontendUrl) {
  try {
    const { intent } = params;
    if (!intent)
      throw intentError('Parameter "intent" is required.');
    const intentDescriptor = intent_interface_default[intent];
    if (!intentDescriptor)
      throw intentError(`Unknown intent: "${intent}".`);
    const requestParams = prepareRequestParams(intentDescriptor, params);
    return prepareTransport(requestParams, frontendUrl).then((transport) => sendRequest(requestParams, transport));
  } catch (e6) {
    const { code = -1, message, ext } = e6, res = { message, code };
    if (ext) {
      res.ext = ext;
    }
    return Promise.reject(res);
  }
}
function prepareTransport(params, frontendUrl) {
  if (params.pubkey) {
    const session = getImplicitSession(params.intent, params.pubkey);
    if (session) {
      params.session = session.key;
      return createIframeTransport(frontendUrl);
    }
  }
  setTimeout(() => {
    if (params.intent === "implicit_flow") {
      createIframeTransport(frontendUrl);
    }
  }, 200);
  return createDialogTransport(frontendUrl);
}
function sendRequest(params, transport) {
  return transport.postMessage(params).then((result) => {
    if (result.intent === "implicit_flow" && result.granted) {
      saveImplicitSession(result);
    }
    return result;
  });
}
function prepareRequestParams(intentDescriptor, params) {
  if (typeof params !== "object")
    throw intentError("Intent parameters expected.");
  const { intent, pubkey } = params, requestParams = { intent };
  if (pubkey && !/^G[0-9A-Z]{55}$/.test(pubkey))
    throw intentError('Invalid "pubkey" parameter. Stellar account public key expected.');
  for (const key in intentDescriptor.params) {
    const props = intentDescriptor.params[key], value = params[key];
    if (value) {
      requestParams[key] = value;
    } else if (props.required) {
      throw intentError(`Parameter "${key}" is required for intent "${intent}".`);
    }
  }
  return requestParams;
}

// node_modules/@albedo-link/intent/src/web+stellar-handler.js
function parseQuery(query = null) {
  if (query === null) {
    query = window.location.search;
  }
  if (query[0] === "?") query = query.substr(1);
  const dest = {};
  for (let kv of query.split("&")) {
    const [key, value] = kv.split("=").map((v2) => decodeURIComponent(v2));
    dest[key] = value;
  }
  return dest;
}
function bindWebStellarLinkHandler(albedoIntent) {
  if (typeof document === "undefined" || !document.addEventListener) return;
  document.addEventListener("click", function sep0007Handler(e6) {
    if (e6.target.tagName !== "A" || (e6.target.href || "").indexOf("web+stellar:") !== 0) return;
    e6.preventDefault();
    e6.stopImmediatePropagation();
    const { pathname: intentName, search } = new URL(e6.target.href);
    if (!["tx", "pay"].includes(intentName)) {
      alert(`Invalid operation requested: ${intentName}. It's likely an external application error. Please contact support team of ${window.location.origin}.`);
      return;
    }
    const params = parseQuery(search);
    albedoIntent.request(intentName, params);
  }, false);
}

// node_modules/@albedo-link/intent/src/index.js
if (typeof window === "object" && typeof window.fetch !== "function") {
  throw new Error("Browser FetchAPI is not available. For legacy browsers support use polyfills such as whatwg-fetch.");
}
function AlbedoIntent() {
}
AlbedoIntent.prototype = {
  frontendUrl: "https://albedo.link",
  intentInterface: intent_interface_default,
  intentErrors: intent_errors_default,
  /**
   * Initiate external intent request.
   * @param {String} intent - Intent name.
   * @param {Object} [params] - Request parameters.
   * @returns {Promise<Object>}
   */
  request(intent, params) {
    return requestIntentConfirmation(Object.assign(params || {}, { intent }), this.frontendUrl);
  },
  /**
   * Requests temporary permissions to execute the specific intents without calling confirmation dialog.
   * @param {Object} params - Intent parameters.
   * @param {Array<String>} params.intents - Requested intents.
   * @returns {Promise<ImplicitFlowIntentResult>}
   */
  implicitFlow(params) {
    return this.request("implicit_flow", params);
  },
  /**
   * Request secure third-party application authentication.
   * @param {Object} params - Intent parameters.
   * @param {String} [params.token] - Verification token generated by the application (should be unique or random).
   * @param {String} [params.require_existing] - Allow existing Albedo accounts only.
   * @returns {Promise<PublicKeyIntentResult>}
   */
  publicKey(params) {
    params = Object.assign({}, params);
    if (!params.token) {
      params.token = generateRandomToken();
    }
    return this.request("public_key", params);
  },
  /**
   * Request transaction signing, returns the signed transaction envelope.
   * @param {Object} params - Intent parameters.
   * @param {String} params.xdr - A Stellar transaction in XDR format encoded in base64.
   * @param {String} [params.pubkey] - Specific public key requested by the application.
   * @param {String} [params.network] - Stellar network identifier or private network passphrase.
   * @param {Boolean} [params.submit] - If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.
   * @returns {Promise<TxIntentResult>}
   */
  tx(params) {
    return this.request("tx", params);
  },
  /**
   * Requests execution of several tx intents bundled together. This intent is atomic – a user confirms or rejects all bundled requests at once, with the same account and the same Stellar network.
   * @param {Object} params - Intent parameters.
   * @param {String} params.intents - Requested tx intents.
   * @param {String} [params.pubkey] - Specific public key requested by the application.
   * @param {String} [params.network] - Stellar network identifier or private network passphrase.
   * @returns {Promise<BatchIntentResult>}
   */
  batch(params) {
    return this.request("batch", params);
  },
  /**
   * Request an asset trustline creation.
   * @param {Object} params - Intent parameters.
   * @param {String} params.destination - Payment destination address.
   * @param {String} params.amount - Amount to pay.
   * @param {String} [params.asset_code] - [Optional] Asset code (if not set XLM is implied).
   * @param {String} [params.asset_issuer] - [Optional] Asset issuer (if not set XLM is implied).
   * @param {String} [params.memo] - [Optional] Memo to be included in the payment.
   * @param {('MEMO_TEXT' | 'MEMO_ID' | 'MEMO_HASH' | 'MEMO_RETURN')} [params.memo_type] - [Optional] Memo type to be included in the payment.
   * @param {String} [params.pubkey] - Specific public key requested by the application.
   * @param {String} [params.network] - Stellar network identifier or private network passphrase.
   * @param {Boolean} [params.submit] - If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.
   * @returns {Promise<PayIntentResult>}
   */
  pay(params) {
    return this.request("pay", params);
  },
  /**
   * Request an asset trustline creation.
   * @param {Object} params - Intent parameters.
   * @param {String} params.asset_code - Asset code.
   * @param {String} params.asset_issuer - Asset account issuer.
   * @param {String} [params.limit] - [Optional] Trustline limit.
   * @param {String} [params.pubkey] - Specific public key requested by the application.
   * @param {String} [params.network] - Stellar network identifier or private network passphrase.
   * @param {Boolean} [params.submit] - If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.
   * @returns {Promise<TrustIntentResult>}
   */
  trust(params) {
    return this.request("trust", params);
  },
  /**
   * Request token exchange on Stellar DEX.
   * @param {Object} params - Intent parameters.
   * @param {String} params.destination - Payment destination address.
   * @param {String} params.amount - Amount to pay.
   * @param {String} params.max_price - Maximum price to pay.
   * @param {String} [params.sell_asset_code] - [Optional] Selling asset code (if not set XLM is implied).
   * @param {String} [params.sell_asset_issuer] - [Optional] Selling asset issuer (if not set XLM is implied).
   * @param {String} [params.buy_asset_code] - [Optional] Selling asset code (if not set XLM is implied).
   * @param {String} [params.buy_asset_issuer] - [Optional] Selling asset issuer (if not set XLM is implied).
   * @return {Promise<ExchangeIntentResult>}
   */
  exchange(params) {
    return this.request("exchange", params);
  },
  /**
   * Request arbitrary data signing.
   * @param {Object} params - Intent parameters.
   * @param {String} params.message - Text message to sign.
   * @param {String} [params.pubkey] - Specific public key requested by the application.
   * @returns {Promise<SignMessageIntentResult>}
   */
  signMessage(params) {
    params = Object.assign({}, params, { message: normalizeMessageToSign(params.message) });
    return this.request("sign_message", params);
  },
  /**
   * Open account settings window for a given account.
   * @param {Object} params - Intent parameters.
   * @param {String} params.pubkey - Specific public key requested by the application.
   * @param {String} [params.network] - Stellar network identifier or private network passphrase.
   * @returns {Promise<ManageAccountIntentResult>}
   */
  manageAccount(params) {
    return this.request("manage_account", params);
  },
  /**
   * Generate random token that can be used for authentication or encryption
   * @return {String}
   */
  generateRandomToken() {
    return generateRandomToken();
  },
  /**
   * Check whether an implicit session exists for a given intent and pubkey.
   * @param {String} intent
   * @param {String} pubkey
   * @return {boolean}
   */
  isImplicitSessionAllowed(intent, pubkey) {
    return !!getImplicitSession(intent, pubkey);
  },
  /**
   * Enumerate all currently active implicit sessions.
   * @returns {Array<{pubkey: String, session: String, valid_until: Number, grants: Array<String>}>}
   */
  listImplicitSessions() {
    return getAllImplicitSessions();
  },
  /**
   * Revoke session permission granted for an account.
   * @param {String} pubkey
   */
  forgetImplicitSession(pubkey) {
    forgetSession(pubkey);
  }
};
function normalizeMessageToSign(message) {
  switch (typeof message) {
    case "string":
      return message;
    case "undefined":
      return "";
  }
  return JSON.stringify(message);
}
var albedo = new AlbedoIntent();
albedo.default = albedo;
bindWebStellarLinkHandler(albedo);
var src_default = albedo;

// node_modules/@creit.tech/stellar-wallets-kit/modules/albedo.module.js
var r4 = "albedo";
var n = class {
  constructor() {
    this.moduleType = L.HOT_WALLET, this.productId = r4, this.productName = "Albedo", this.productUrl = "https://albedo.link/", this.productIcon = "https://stellar.creit.tech/wallet-icons/albedo.png";
  }
  async isAvailable() {
    return true;
  }
  async getAddress() {
    return src_default.publicKey({}).then((t8) => ({ address: t8.pubkey })).catch((t8) => {
      throw d3(t8);
    });
  }
  async signTransaction(e6, r9) {
    return src_default.tx({ xdr: e6, pubkey: r9 == null ? void 0 : r9.address, network: (r9 == null ? void 0 : r9.networkPassphrase) ? r9.networkPassphrase === e.PUBLIC ? "public" : "testnet" : void 0 }).then(({ signed_envelope_xdr: t8 }) => ({ signedTxXdr: t8, signerAddress: r9 == null ? void 0 : r9.address })).catch((t8) => {
      throw d3(t8);
    });
  }
  async signAuthEntry() {
    throw { code: -3, message: 'Albedo does not support the "signAuthEntry" function' };
  }
  async signMessage() {
    throw { code: -3, message: 'Albedo does not support the "signMessage" function' };
  }
  async getNetwork() {
    throw { code: -3, message: 'Albedo does not support the "getNetwork" function' };
  }
};
var d4 = ((t8) => (t8.PUBLIC = "public", t8.TESTNET = "testnet", t8))(d4 || {});

// node_modules/@creit.tech/stellar-wallets-kit/modules/freighter.module.js
var import_freighter_api = __toESM(require_index_min(), 1);
var o = "freighter";
var c2 = class {
  constructor() {
    this.moduleType = L.HOT_WALLET, this.productId = o, this.productName = "Freighter", this.productUrl = "https://freighter.app", this.productIcon = "https://stellar.creit.tech/wallet-icons/freighter.png";
  }
  async runChecks() {
    if (!await this.isAvailable()) throw new Error("Freighter is not connected");
  }
  async isAvailable() {
    return (0, import_freighter_api.isConnected)().then(({ isConnected: r9, error: s6 }) => !s6 && r9).catch(() => false);
  }
  async getAddress() {
    return this.runChecks().then(() => (0, import_freighter_api.requestAccess)()).then(({ address: r9, error: s6 }) => {
      if (s6) throw s6;
      return { address: r9 };
    }).catch((r9) => {
      throw d3(r9);
    });
  }
  async signTransaction(r9, s6) {
    return this.runChecks().then(async () => {
      const { signedTxXdr: t8, signerAddress: n8, error: a5 } = await (0, import_freighter_api.signTransaction)(r9, { address: s6 == null ? void 0 : s6.address, networkPassphrase: s6 == null ? void 0 : s6.networkPassphrase });
      if (a5) throw a5;
      return { signedTxXdr: t8, signerAddress: n8 };
    }).catch((r10) => {
      throw d3(r10);
    });
  }
  async signAuthEntry(r9, s6) {
    return this.runChecks().then(async () => {
      const { signedAuthEntry: e6, signerAddress: n8, error: a5 } = await (0, import_freighter_api.signAuthEntry)(r9, { address: s6 == null ? void 0 : s6.address, networkPassphrase: s6 == null ? void 0 : s6.networkPassphrase });
      if (a5 || !e6) throw a5;
      return { signedAuthEntry: e6.toString("base64"), signerAddress: n8 };
    }).catch((r10) => {
      throw d3(r10);
    });
  }
  async signMessage(r9, s6) {
    return this.runChecks().then(async () => {
      const { signedMessage: e6, signerAddress: t8, error: a5 } = await (0, import_freighter_api.signMessage)(r9, { address: s6 == null ? void 0 : s6.address, networkPassphrase: s6 == null ? void 0 : s6.networkPassphrase });
      if (a5 || !e6) throw a5;
      return { signedMessage: e6.toString("base64"), signerAddress: t8 };
    }).catch((r10) => {
      throw d3(r10);
    });
  }
  async getNetwork() {
    return this.runChecks().then(async () => {
      const { network: r9, networkPassphrase: s6, error: e6 } = await (0, import_freighter_api.getNetwork)();
      if (e6) throw e6;
      return { network: r9, networkPassphrase: s6 };
    }).catch((r9) => {
      throw d3(r9);
    });
  }
};

// node_modules/@creit.tech/stellar-wallets-kit/modules/lobstr.module.js
var import_signer_extension_api = __toESM(require_index_min2(), 1);
var n3 = "lobstr";
var c3 = class {
  constructor() {
    this.moduleType = L.HOT_WALLET, this.productId = n3, this.productName = "LOBSTR", this.productUrl = "https://lobstr.co", this.productIcon = "https://stellar.creit.tech/wallet-icons/lobstr.png";
  }
  async isAvailable() {
    return (0, import_signer_extension_api.isConnected)();
  }
  async getAddress() {
    return (async () => {
      if (!await (0, import_signer_extension_api.isConnected)()) throw new Error("Lobstr is not connected");
    })().then(() => (0, import_signer_extension_api.getPublicKey)()).then((t8) => ({ address: t8 })).catch((t8) => {
      throw d3(t8);
    });
  }
  async signTransaction(s6, e6) {
    return (async () => {
      if (!await (0, import_signer_extension_api.isConnected)()) throw new Error("Lobstr is not connected");
      (e6 == null ? void 0 : e6.address) && console.warn("Lobstr doesn't allow specifying what public key should sign the transaction, we skip the value"), (e6 == null ? void 0 : e6.networkPassphrase) && console.warn("Lobstr doesn't allow specifying the network that should be used, we skip the value");
    })().then(() => (0, import_signer_extension_api.signTransaction)(s6)).then((t8) => ({ signedTxXdr: t8 })).catch((t8) => {
      throw d3(t8);
    });
  }
  async signAuthEntry() {
    throw { code: -3, message: 'Lobstr does not support the "signAuthEntry" function' };
  }
  async signMessage() {
    throw { code: -3, message: 'Lobstr does not support the "signMessage" function' };
  }
  async getNetwork() {
    throw { code: -3, message: 'Lobstr does not support the "getNetwork" function' };
  }
};

// node_modules/@creit.tech/stellar-wallets-kit/modules/rabet.module.js
var n4 = "rabet";
var r6 = class {
  constructor() {
    this.moduleType = L.HOT_WALLET, this.productId = n4, this.productName = "Rabet", this.productUrl = "https://rabet.io/", this.productIcon = "https://stellar.creit.tech/wallet-icons/rabet.png";
  }
  async isAvailable() {
    return !!window.rabet;
  }
  async getAddress() {
    return (async () => {
      if (!window.rabet) throw new Error("Rabet is not installed");
    })().then(() => window.rabet.connect()).then(({ publicKey: t8 }) => ({ address: t8 })).catch((t8) => {
      throw d3(t8);
    });
  }
  async signTransaction(t8, n8) {
    return (async () => {
      if (!window.rabet) throw new Error("Rabet is not installed");
      if ((n8 == null ? void 0 : n8.address) && n8.networkPassphrase !== e.PUBLIC && n8.networkPassphrase !== e.TESTNET) throw new Error(`Rabet doesn't support the network: ${n8.networkPassphrase}`);
      (n8 == null ? void 0 : n8.address) && console.warn("Rabet doesn't allow specifying the network that should be used, we skip the value");
    })().then(async () => window.rabet.sign(t8, (n8 == null ? void 0 : n8.networkPassphrase) === e.PUBLIC ? "mainnet" : "testnet")).then((t9) => ({ signedTxXdr: t9 == null ? void 0 : t9.xdr })).catch((t9) => {
      throw d3(t9);
    });
  }
  async signAuthEntry() {
    throw { code: -3, message: 'Rabet does not support the "signAuthEntry" function' };
  }
  async signMessage() {
    throw { code: -3, message: 'Rabet does not support the "signMessage" function' };
  }
  async getNetwork() {
    throw { code: -3, message: 'Rabet does not support the "getNetwork" function' };
  }
};
var o3 = ((t8) => (t8.PUBLIC = "mainnet", t8.TESTNET = "testnet", t8))(o3 || {});

// node_modules/@creit.tech/xbull-wallet-connect/index.js
var import_tweetnacl = __toESM(require_nacl_fast());
var import_tweetnacl_util = __toESM(require_nacl_util());

// node_modules/@creit.tech/xbull-wallet-connect/interfaces.js
var L2 = ((L3) => (L3.XBULL_CONNECT = "XBULL_CONNECT", L3.XBULL_GET_PUBLIC_KEY = "XBULL_GET_PUBLIC_KEY", L3.XBULL_SIGN_XDR = "XBULL_SIGN_XDR", L3.XBULL_GET_NETWORK = "XBULL_GET_NETWORK", L3.XBULL_INITIAL_RESPONSE = "XBULL_INITIAL_RESPONSE", L3.XBULL_CONNECT_RESPONSE = "XBULL_CONNECT_RESPONSE", L3.XBULL_SIGN = "XBULL_SIGN", L3.XBULL_SIGN_RESPONSE = "XBULL_SIGN_RESPONSE", L3))(L2 || {});
function _(L3) {
  return !!L3.error;
}

// node_modules/@creit.tech/xbull-wallet-connect/mobile-sdk.js
var r7 = class {
  constructor() {
    this.isConnected = false;
  }
  sendEventToContentScript(e6, r9, o5) {
    return new Promise((t8) => {
      const n8 = (e7) => {
        if (e7.source !== window || !e7.data || e7.origin !== window.origin) return;
        e7.data.eventId === o5 && (t8(e7), window.removeEventListener("message", n8, false));
      };
      window.addEventListener("message", n8, false), window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({ type: e6, eventId: o5, detail: r9 }));
    });
  }
  async enableConnection() {
    const r9 = { origin: window.origin, host: window.location.host, permissions: { canRequestPublicKey: true, canRequestSign: true } }, o5 = await this.sendEventToContentScript(L2.XBULL_CONNECT, r9, crypto.randomUUID()), { detail: t8 } = o5.data;
    if (!t8 || t8.error) throw { code: (t8 == null ? void 0 : t8.code) || -1, message: (t8 == null ? void 0 : t8.errorMessage) || "Unexpected error" };
    this.isConnected = true;
  }
  async getAddress() {
    try {
      await this.enableConnection();
    } catch (e6) {
      return { error: { code: (e6 == null ? void 0 : e6.code) || -1, message: (e6 == null ? void 0 : e6.message) || "Unexpected error" } };
    }
    const r9 = { origin: window.origin, host: window.location.host }, o5 = await this.sendEventToContentScript(L2.XBULL_GET_PUBLIC_KEY, r9, crypto.randomUUID()), { detail: t8 } = o5.data;
    return !t8 || t8.error ? { error: { code: (t8 == null ? void 0 : t8.code) || -1, message: (t8 == null ? void 0 : t8.errorMessage) || "Unexpected error" } } : { address: t8.payload };
  }
  async signTransaction(r9) {
    var _a4, _b2, _c, _d;
    if (((_a4 = r9.opts) == null ? void 0 : _a4.submit) || ((_b2 = r9.opts) == null ? void 0 : _b2.submitUrl)) return { error: { code: -1, message: "Parameters `submit` and `submitUrl` are not supported" } };
    try {
      await this.enableConnection();
    } catch (e6) {
      return { error: { code: (e6 == null ? void 0 : e6.code) || -1, message: (e6 == null ? void 0 : e6.message) || "Unexpected error" } };
    }
    const o5 = { origin: window.origin, host: window.location.host, network: (_c = r9.opts) == null ? void 0 : _c.networkPassphrase, publicKey: (_d = r9.opts) == null ? void 0 : _d.address, xdr: r9.xdr, xdrType: "Transaction" }, t8 = await this.sendEventToContentScript(L2.XBULL_SIGN_XDR, o5, crypto.randomUUID()), { detail: n8 } = t8.data;
    return !n8 || n8.error ? { error: { code: (n8 == null ? void 0 : n8.code) || -1, message: (n8 == null ? void 0 : n8.errorMessage) || "Unexpected error" } } : { signedTxXdr: n8.payload.signedXdr, signerAddress: n8.payload.signerAddress };
  }
  async getNetwork() {
    try {
      await this.enableConnection();
    } catch (e6) {
      return { error: { code: (e6 == null ? void 0 : e6.code) || -1, message: (e6 == null ? void 0 : e6.message) || "Unexpected error" } };
    }
    const r9 = { origin: window.origin, host: window.location.host }, o5 = await this.sendEventToContentScript(L2.XBULL_GET_NETWORK, r9, crypto.randomUUID()), { detail: t8 } = o5.data;
    return !t8 || t8.error ? { error: { code: (t8 == null ? void 0 : t8.code) || -1, message: (t8 == null ? void 0 : t8.errorMessage) || "Unexpected error" } } : { network: t8.payload.network, networkPassphrase: t8.payload.networkPassphrase };
  }
};

// node_modules/@creit.tech/xbull-wallet-connect/index.js
var w3 = class {
  constructor(o5) {
    this.closeCurrentPromises$ = new Subject(), this.closeObservables$ = new Subject(), this.initialResponse$ = new Subject(), this.initialResponseCompleted$ = new Subject(), this.connectResponse$ = new Subject(), this.connectResult$ = new Subject(), this.signResponse$ = new Subject(), this.signResult$ = new Subject(), this.closeCurrentPromisesSubscription = timer(1e3, 1e3).pipe(takeUntil(this.closeObservables$)).subscribe(() => {
      var _a4;
      ((_a4 = this.target) == null ? void 0 : _a4.closed) && this.closeCurrentPromises$.next();
    }), this.onInititalResponseSubscription = this.initialResponse$.pipe(takeUntil(this.closeObservables$)).subscribe((e6) => {
      const s6 = this.decryptFromReceiver({ oneTimeCode: e6.data.oneTimeCode, payload: e6.data.message, senderPublicKey: e6.data.publicKey });
      JSON.parse(s6).providedSession === this.session() && (this.targetPublicKey = e6.data.publicKey, this.initialResponseCompleted$.next());
    }), this.onConnectResponseSubscription = this.connectResponse$.pipe(takeUntil(this.closeObservables$)).subscribe((e6) => {
      if (!this.targetPublicKey) return void this.connectResult$.next({ success: false, message: "Wallet encryption public key is not provided, request rejected." });
      if (!e6.data.success) return void this.connectResult$.next({ success: false, message: "Request rejected from the wallet" });
      const s6 = this.decryptFromReceiver({ oneTimeCode: e6.data.oneTimeCode, payload: e6.data.message, senderPublicKey: this.targetPublicKey }), t8 = JSON.parse(s6);
      this.connectResult$.next({ success: true, publicKey: t8.publicKey });
    }), this.onSignResponseSubscription = this.signResponse$.pipe(takeUntil(this.closeObservables$)).subscribe((e6) => {
      if (!this.targetPublicKey) return void this.signResult$.next({ success: false, message: "Wallet encryption public key is not provided, request rejected." });
      if (!e6.data.success) return void this.signResult$.next({ success: false, message: "Request rejected from the wallet" });
      const s6 = this.decryptFromReceiver({ oneTimeCode: e6.data.oneTimeCode, payload: e6.data.message, senderPublicKey: this.targetPublicKey }), t8 = JSON.parse(s6);
      this.signResult$.next({ success: true, xdr: t8.xdr });
    }), this.preferredTarget = (o5 == null ? void 0 : o5.preferredTarget) || "extension", this.walletUrl = (o5 == null ? void 0 : o5.url) || "https://wallet.xbull.app/connect";
    const u3 = import_tweetnacl.box.keyPair(), d5 = (0, import_tweetnacl_util.encodeBase64)((0, import_tweetnacl.randomBytes)(24));
    this.encryptForReceiver = (r9) => {
      const n8 = (0, import_tweetnacl.randomBytes)(24), o6 = (0, import_tweetnacl.box)((0, import_tweetnacl_util.decodeUTF8)(r9.data), n8, r9.receiverPublicKey, u3.secretKey);
      return { message: (0, import_tweetnacl_util.encodeBase64)(o6), oneTimeCode: (0, import_tweetnacl_util.encodeBase64)(n8) };
    }, this.decryptFromReceiver = (s6) => {
      const t8 = import_tweetnacl.box.open((0, import_tweetnacl_util.decodeBase64)(s6.payload), (0, import_tweetnacl_util.decodeBase64)(s6.oneTimeCode), (0, import_tweetnacl_util.decodeBase64)(s6.senderPublicKey), u3.secretKey);
      if (!t8) throw new Error("Decrypted message is null");
      return (0, import_tweetnacl_util.encodeUTF8)(t8);
    }, this.publicKey = () => u3.publicKey, this.session = () => d5.slice();
    const b = (e6) => {
      switch (e6.data.type) {
        case L2.XBULL_INITIAL_RESPONSE:
          this.initialResponse$.next(e6);
          break;
        case L2.XBULL_CONNECT_RESPONSE:
          this.connectResponse$.next(e6);
          break;
        case L2.XBULL_SIGN_RESPONSE:
          this.signResponse$.next(e6);
      }
    };
    window.addEventListener("message", b), this.closeObservables$.asObservable().pipe(take(1)).subscribe(() => {
      window.removeEventListener("message", b);
    });
  }
  openWallet() {
    return this.target && !this.target.closed && (this.target.close(), this.target = null, this.closeCurrentPromises$.next()), this.target = window.open(`${this.walletUrl}?public=${encodeURIComponent((0, import_tweetnacl_util.encodeBase64)(this.publicKey()))}&session=${encodeURIComponent(this.session())}`, "xBull_Wallet_app", "width=380,height=640,left=100,top=100"), firstValueFrom(this.initialResponseCompleted$.pipe(takeUntil(this.closeCurrentPromises$)).pipe(takeUntil(this.closeObservables$)));
  }
  closeWallet() {
    var _a4;
    this.target && ((_a4 = this.target) == null ? void 0 : _a4.close(), this.target = null);
  }
  async connect(e6 = { canRequestPublicKey: true, canRequestSign: true }) {
    var _a4, _b2;
    const s6 = ((_b2 = (_a4 = window == null ? void 0 : window.webkit) == null ? void 0 : _a4.messageHandlers) == null ? void 0 : _b2.cordova_iab) ? new r7() : window.xBullSDK;
    if (s6 && "extension" === this.preferredTarget) {
      const e7 = await s6.getAddress();
      if (_(e7)) throw e7.error;
      return e7.address;
    }
    {
      if (await this.openWallet(), !this.target || !this.targetPublicKey) throw new Error("xBull Wallet is not open, we can't connect with it");
      const { message: s7, oneTimeCode: t8 } = this.encryptForReceiver({ data: JSON.stringify(e6), receiverPublicKey: (0, import_tweetnacl_util.decodeBase64)(this.targetPublicKey) }), i4 = { type: L2.XBULL_CONNECT, message: s7, oneTimeCode: t8 };
      this.target.postMessage(i4, "*");
      const n8 = this.connectResult$.asObservable().pipe(switchMap((e7) => e7.success ? (this.closeWallet(), of(e7.publicKey)) : (this.closeWallet(), throwError(() => new Error(e7.message))))).pipe(take(1)).pipe(takeUntil(this.closeCurrentPromises$)).pipe(takeUntil(this.closeObservables$));
      return firstValueFrom(n8);
    }
  }
  async sign(e6) {
    var _a4, _b2;
    const s6 = ((_b2 = (_a4 = window == null ? void 0 : window.webkit) == null ? void 0 : _a4.messageHandlers) == null ? void 0 : _b2.cordova_iab) ? new r7() : window.xBullSDK;
    if (s6 && "extension" === this.preferredTarget) {
      const t8 = await s6.signTransaction({ xdr: e6.xdr, opts: { networkPassphrase: e6.network, address: e6.publicKey } });
      if (_(t8)) throw t8.error;
      return t8.signedTxXdr;
    }
    {
      if (await this.openWallet(), !this.target || !this.targetPublicKey) throw new Error("xBull Wallet is not open, we can't connect with it");
      if ("string" != typeof e6.xdr) throw new Error("XDR provided needs to be a string value");
      const { message: s7, oneTimeCode: t8 } = this.encryptForReceiver({ data: JSON.stringify(e6), receiverPublicKey: (0, import_tweetnacl_util.decodeBase64)(this.targetPublicKey) }), i4 = { type: L2.XBULL_SIGN, message: s7, oneTimeCode: t8 };
      this.target.postMessage(i4, "*");
      const n8 = this.signResult$.asObservable().pipe(switchMap((e7) => e7.success ? (this.closeWallet(), of(e7.xdr)) : (this.closeWallet(), throwError(() => new Error(e7.message))))).pipe(take(1)).pipe(takeUntil(this.closeCurrentPromises$)).pipe(takeUntil(this.closeObservables$));
      return firstValueFrom(n8);
    }
  }
  closeConnections() {
    this.closeObservables$.next(), this.closeCurrentPromises$.next(), this.closeObservables$.complete(), this.closeCurrentPromises$.complete();
  }
};

// node_modules/@creit.tech/stellar-wallets-kit/modules/xbull.module.js
var o4 = "xbull";
var n6 = class {
  constructor() {
    this.moduleType = L.HOT_WALLET, this.productId = o4, this.productName = "xBull", this.productUrl = "https://xbull.app", this.productIcon = "https://stellar.creit.tech/wallet-icons/xbull.png";
  }
  async isAvailable() {
    return true;
  }
  async getAddress() {
    try {
      const s6 = new w3(), e6 = await s6.connect();
      return s6.closeConnections(), { address: e6 };
    } catch (t8) {
      throw d3(t8);
    }
  }
  async signTransaction(s6, o5) {
    try {
      const e6 = new w3(), n8 = await e6.sign({ xdr: s6, publicKey: o5 == null ? void 0 : o5.address, network: o5 == null ? void 0 : o5.networkPassphrase });
      return e6.closeConnections(), { signedTxXdr: n8, signerAddress: o5 == null ? void 0 : o5.address };
    } catch (t8) {
      throw d3(t8);
    }
  }
  async signAuthEntry() {
    throw { code: -3, message: 'xBull does not support the "signAuthEntry" function' };
  }
  async signMessage() {
    throw { code: -3, message: 'xBull does not support the "signMessage" function' };
  }
  async getNetwork() {
    throw { code: -3, message: 'xBull does not support the "getNetwork" function' };
  }
};

// node_modules/@creit.tech/stellar-wallets-kit/modules/hana.module.js
var s5 = "hana";
var n7 = class {
  constructor() {
    this.moduleType = L.HOT_WALLET, this.productId = s5, this.productName = "Hana Wallet", this.productUrl = "https://hanawallet.io/", this.productIcon = "https://stellar.creit.tech/wallet-icons/hana.png";
  }
  async isAvailable() {
    var _a4;
    return !!((_a4 = window.hanaWallet) == null ? void 0 : _a4.stellar);
  }
  async getAddress() {
    return (async () => {
      var _a4;
      if (!((_a4 = window.hanaWallet) == null ? void 0 : _a4.stellar)) throw new Error("Hana Wallet is not installed");
    })().then(() => window.hanaWallet.stellar.getPublicKey()).then((t8) => ({ address: t8 })).catch((t8) => {
      throw d3(t8);
    });
  }
  async signTransaction(t8, s6) {
    return (async () => {
      var _a4;
      if (!((_a4 = window.hanaWallet) == null ? void 0 : _a4.stellar)) throw new Error("Hana Wallet is not installed");
    })().then(async () => window.hanaWallet.stellar.signTransaction({ xdr: t8, accountToSign: s6 == null ? void 0 : s6.address, networkPassphrase: s6 == null ? void 0 : s6.networkPassphrase })).then((t9) => ({ signedTxXdr: t9, signerAddress: s6 == null ? void 0 : s6.address })).catch((t9) => {
      throw d3(t9);
    });
  }
  async signAuthEntry(t8, s6) {
    return (async () => {
      var _a4;
      if (!((_a4 = window.hanaWallet) == null ? void 0 : _a4.stellar)) throw new Error("Hana Wallet is not installed");
    })().then(async () => window.hanaWallet.stellar.signAuthEntry({ xdr: t8, accountToSign: s6 == null ? void 0 : s6.address })).then((t9) => ({ signedAuthEntry: t9, signerAddress: s6 == null ? void 0 : s6.address })).catch((t9) => {
      throw d3(t9);
    });
  }
  async signMessage() {
    throw { code: -3, message: 'Hana does not support the "signMessage" function' };
  }
  async getNetwork() {
    throw { code: -3, message: 'Hana does not support the "getNetwork" function' };
  }
};

// node_modules/@creit.tech/stellar-wallets-kit/utils.js
function l3() {
  return [new n(), new c2(), new r6(), new n6(), new c3(), new n7()];
}
function d3(e6) {
  var _a4, _b2, _c;
  return { code: ((_a4 = e6 == null ? void 0 : e6.error) == null ? void 0 : _a4.code) || (e6 == null ? void 0 : e6.code) || -1, message: ((_b2 = e6 == null ? void 0 : e6.error) == null ? void 0 : _b2.message) || (e6 == null ? void 0 : e6.message) || "string" == typeof e6 && e6 || "Unhandled error from the wallet", ext: ((_c = e6 == null ? void 0 : e6.error) == null ? void 0 : _c.ext) || (e6 == null ? void 0 : e6.ext) };
}
export {
  r4 as ALBEDO_ID,
  n as AlbedoModule,
  d4 as AlbedoNetwork,
  y as ButtonThemes,
  o as FREIGHTER_ID,
  c2 as FreighterModule,
  s5 as HANA_ID,
  n7 as HanaModule,
  n3 as LOBSTR_ID,
  c3 as LobstrModule,
  f2 as ModalThemes,
  L as ModuleType,
  n4 as RABET_ID,
  r6 as RabetModule,
  o3 as RabetNetwork,
  f3 as StellarWalletsButton,
  i2 as StellarWalletsKit,
  x as StellarWalletsModal,
  e as WalletNetwork,
  o4 as XBULL_ID,
  l3 as allowAllModules,
  d3 as parseError,
  n6 as xBullModule
};
/*! Bundled license information:

@lit/reactive-element/development/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/development/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=@creit__tech_stellar-wallets-kit.js.map
