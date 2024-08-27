// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
const componentImports = {
    navbar: ()=>require("73c9eb8c8e227bb2"),
    hero: ()=>require("6e123770f3dded90"),
    welcome: ()=>require("5696b88ada2ee682"),
    "our-inn": ()=>require("9cb08f7de3dc23a7"),
    contact: ()=>require("9677d9d198be37be"),
    footer: ()=>require("8f03c0111eed50e3")
};
loadAndInjectComponents(Object.keys(componentImports), ()=>{
    addNavbarToggleFunction();
});
updateGoogleReview();
fadeInBody();
/**
 * Import bundled text using object of import calls. Object keys must match
 * include-html ids.
 * @param {*} components 
 * @param {*} callback 
 */ async function loadAndInjectComponents(components, callback) {
    function addElement(id, html) {
        document.querySelector(`div[w3-include-html=${id}]`).innerHTML = html;
    }
    async function loadAndAddComponents(components, callback) {
        for (const component of components){
            const componentHTML = await loadComponent(component);
            if (componentHTML) addElement(component, componentHTML);
        }
        callback();
    }
    loadAndAddComponents(components, callback);
}
// Function to load a component dynamically
async function loadComponent(componentName) {
    if (componentImports[componentName]) {
        const module = await componentImports[componentName]();
        return module;
    } else {
        console.error(`Component ${componentName} not found.`);
        return null;
    }
}
function fadeInBody() {
    window.addEventListener("load", function() {
        const content = document.getElementsByTagName("body")[0];
        content.classList.add("fade-in");
    });
}
function addNavbarToggleFunction() {
    document.getElementById("toggle-nav-menu").onclick = toggleFunction;
    const divChildren = document.querySelector("#navbar-mobile").children;
    for(let i = 0; i < divChildren.length; i++)divChildren[i].onclick = toggleFunction;
}
function updateGoogleReview() {
    fetch("https://shaunnielsen.com/mpbi/review.json").then((response)=>response.json()).then((data)=>{
        //console.log(data)
        let x = {
            rating: document.getElementById("star-rating-value"),
            starWidth: document.getElementsByClassName("stars-filled")[0],
            totalReviews: document.getElementById("star-rating-total-reviews-total")
        };
        x.rating.innerHTML = data.rating;
        x.starWidth.style.width = data.rating / 5 * 100 + "%";
        x.totalReviews.innerHTML = data.user_ratings_total;
    });
}
function toggleFunction() {
    var x = document.getElementById("navbar-mobile");
    if (x.className.indexOf("w3-show") == -1) x.className += " w3-show";
    else x.className = x.className.replace(" w3-show", "");
}

},{"73c9eb8c8e227bb2":"hG7kk","6e123770f3dded90":"8BzIO","5696b88ada2ee682":"sl6oc","9cb08f7de3dc23a7":"tfVHL","9677d9d198be37be":"9hTwf","8f03c0111eed50e3":"ioITu"}],"hG7kk":[function(require,module,exports) {
module.exports = Promise.resolve("<div class=\"w3-top\">\r\n  <div class=\"w3-bar my-beach-blue\" id=\"navbar\">\r\n\r\n    <a class=\"w3-bar-item w3-button my-hover-beach-orange w3-hide-medium w3-hide-large w3-right\" href=\"javascript:void(0);\" title=\"Toggle Navigation Menu\" id=\"toggle-nav-menu\">\r\n      <i class=\"fa fa-bars\"></i>\r\n    </a>\r\n\r\n\r\n    <a href=\"#home\" class=\"w3-bar-item w3-button my-hover-beach-orange\">HOME</a>\r\n    <a href=\"#about\" class=\"w3-bar-item w3-button w3-hide-small my-hover-beach-orange\"><i class=\"fa fa-user\"></i>ABOUT</a>\r\n    <a href=\"#our-motel\" class=\"w3-bar-item w3-button w3-hide-small my-hover-beach-orange\"><i class=\"fa fa-home\"></i>OUR\r\n      INN</a>\r\n    <a href=\"#contact\" class=\"w3-bar-item w3-button w3-hide-small my-hover-beach-orange\"><i class=\"fa fa-phone\"></i>CONTACT</a>\r\n    <a href=\"https://useross.com/booking.php?dialog=motel&motel_id=197\" class=\"w3-bar-item w3-button w3-hide-small my-hover-beach-orange\"><i class=\"fa fa-envelope\"></i>BOOK</a>\r\n  </div>\r\n\r\n  <!-- Navbar on small screens -->\r\n  <div id=\"navbar-mobile\" class=\"w3-bar-block my-beach-cream w3-hide w3-hide-large w3-hide-medium\">\r\n    <a href=\"#about\" class=\"w3-bar-item w3-button my-hover-beach-blue\">ABOUT</a>\r\n    <a href=\"#our-motel\" class=\"w3-bar-item w3-button  my-hover-beach-blue\">OUR INN</a>\r\n    <a href=\"#contact\" class=\"w3-bar-item w3-button  my-hover-beach-blue\">CONTACT</a>\r\n    <a href=\"https://useross.com/booking.php?dialog=motel&motel_id=197\" class=\"w3-bar-item w3-button  my-hover-beach-blue\">BOOK</a>\r\n  </div>\r\n</div>\r\n\r\n<style>#navbar > a > i {\n  padding-right: 4px;\n}\n</style>\r\n\r\n<script src=\"/navbar.f38eb5bc.js\"></script>");

},{}],"8BzIO":[function(require,module,exports) {
module.exports = Promise.resolve("<div id=\"home\">\r\n    <img src=\"/mpb-sign.b8f27e9b.webp\" style=\"width: 100%\" class=\"w3-hide-small\">\r\n    <img src=\"/mpb-sign-small.16fa8e00.webp\" style=\"width: 100%\" class=\"w3-hide-medium w3-hide-large\">\r\n</div>\r\n\r\n<div class=\"w3-row\" id=\"review-row\">\r\n    <div class=\"review w3-col l6 m12 s12\" id=\"review-left\">\r\n        <div id=\"TA_cdsratingsonlywide602\" class=\"TA_cdsratingsonlywide\">\r\n            <a target=\"_blank\" href=\"https://www.tripadvisor.com.au/Hotel_Review-g3561484-d3171922-Reviews-Moore_Park_Beach_Inn-Moore_Park_Beach_Bundaberg_Region_Queensland.html\">\r\n                <img src=\"https://www.tripadvisor.com.au/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg\" alt=\"TripAdvisor\" style=\"height: 1px\"></a>\r\n        </div>\r\n    </div>\r\n    <div include-html=\"google-review\" class=\"review w3-col l6 m12 s12\" id=\"review-right\">\r\n        <div id=\"google-rating-container\" class=\"w3-container\">\r\n            <div id=\"google-logo\">\r\n                <img src=\"/google-logo.1efa23ca.svg\" alt=\"\" wdith=\"22px\" height=\"22px\">\r\n                <span class=\"w3-small\">Google&nbsp;Reviews</span>\r\n            </div>\r\n\r\n            <div id=\"star-rating-value\">&nbsp&nbsp</div>\r\n\r\n            <div id=\"star-rating\">\r\n                <div class=\"stars-filled\">\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                </div>\r\n                <div class=\"stars-empty\">\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                </div>\r\n            </div>\r\n\r\n            <div id=\"star-rating-total-reviews\">\r\n                <a href=\"https://maps.google.com/?cid=6557914044585146535\"><span id=\"star-rating-total-reviews-total\">&nbsp&nbsp&nbsp</span> reviews</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<style>#home {\n  margin-top: 40px;\n}\n\n.review {\n  justify-content: center;\n  padding: 2px;\n  display: flex;\n}\n\n#review-right {\n  padding: 2px;\n}\n\n@media only screen and (width >= 993px) {\n  #review-right {\n    justify-content: right;\n  }\n\n  #review-left {\n    justify-content: left;\n  }\n}\n\n#CDSRATINGWIDGET602 {\n  overflow: hidden;\n}\n\n#CDSROWCONTAINER602 {\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  display: flex !important;\n}\n\n#CDSROWCONTAINER602 > div {\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  display: flex;\n}\n\n#CDSROWLOC602 {\n  max-width: unset !important;\n}\n\n@media only screen and (device-width <= 382px) {\n  #CDSRATINGWIDGET602 {\n    width: 100% !important;\n  }\n}\n\n#google-rating-container {\n  background-color: #fff;\n  border: 1px solid #000;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  max-width: 350px;\n  display: flex;\n}\n\n#google-logo {\n  flex-direction: column;\n  padding-top: 3px;\n  display: flex;\n}\n\n#star-rating-value {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n#star-rating {\n  color: #ccc;\n  font-size: 18px;\n  display: inline-block;\n  position: relative;\n}\n\n.stars-filled {\n  white-space: nowrap;\n  color: #f5b301;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.stars-empty {\n  color: #ccc;\n}\n\n#star-rating-total-reviews {\n  color: #11111180;\n  font-size: 10px;\n}\n</style><script src=\"/hero.27a7dce2.js\"></script>");

},{}],"sl6oc":[function(require,module,exports) {
module.exports = Promise.resolve("<div class=\"w3-container w3-center w3-section\">\r\n    <div id=\"book\">\r\n        <a href=\"https://useross.com/booking.php?dialog=motel&motel_id=197\" class=\"w3-button my-beach-orange my-hover-beach-blue w3-xlarge w3-padding-large my-hover-border-beach-orange my-border-beach-orange\" aria-label=\"book room button\">\r\n            BOOK DIRECT & SAVE\r\n        </a>\r\n    </div>\r\n\r\n    <div style=\"justify-content: center; align-items: center; display: flex\">\r\n        <div class=\"gloria-hallelujah-regular\" style=\"text-transform: uppercase\">\r\n            Check available<br>dates here\r\n        </div>\r\n        <img src=\"/arrow-up.27c2cbab.svg\" height=\"75px\" alt=\"arrow\">\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Container (About Section) -->\r\n<div class=\"w3-content w3-container\" id=\"about\">\r\n    <div id=\"inn-hero\"></div>\r\n    <h3 class=\"w3-center\">Just 18 km from the bustling Bundaberg CBD awaits a haven of unspoilt nature where you, your\r\n        family and pets can\r\n        truly relax</h3>\r\n    <p>\r\n        Welcome to Moore Park Beach Inn! We'd like to invite you to sea, sun and sand coupled with an incomparable level\r\n        of service\r\n        that has earned us stellar reviews on TripAdvisor and Google.\r\n        It's our privilege to provide both comfort and affordability to our guests but the Moore Park Beach Inn\r\n        experience goes far\r\n        beyond that. Stay with us and you'll enjoy:</p>\r\n\r\n    <div class=\"w3-row-padding enjoy-text\">\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <li>Breathtaking sunsets and sunrises with 17 km of north-east facing shoreline that's perfect for a\r\n                romantic\r\n                stroll</li>\r\n        </div>\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <li>A proudly pet-friendly environment where your furry family members are lovingly welcomed</li>\r\n        </div>\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <li>A peaceful environment at a boutique motel with only seven accomodation rooms that's easy to access from\r\n                the heart of\r\n                Bundaberg</li>\r\n        </div>\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <li>Complimentary use of the Inn BBQ for making your favourite grilled specialty outdoors</li>\r\n        </div>\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <li>Access to our relaxing salt-water pool and spa to let the stress melt away</li>\r\n        </div>\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <li>A lovely breakfast menu available to start your day</li>\r\n        </div>\r\n    </div>\r\n\r\n    <p>Whether you're looking for somewhere to rest while travelling, you've had a medical visit to Bundaberg and need\r\n        to convalesce or you just need a pleasant change of scenery, feel free to stay with us! Send us a message or\r\n        give\r\n        us a call and book your stay today.</p>\r\n\r\n    <div class=\"w3-row-padding\">\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <div class=\"rwimg-1\" aria-label=\"picture of dogs\"></div>\r\n            <h2>Pet Friendly</h2>\r\n            <p>The perfect holiday isn't perfect if your furrier family members can't come along too. That's why pets\r\n                are\r\n                welcome at Moore Park Beach Inn. Just let us know when you book your stay so we can prepare in advance\r\n                and\r\n                please <a href=\"/documents/MPBI-Pet-Policy.pdf\" target=\"_blank\" class=\"my-hover-bold\">see our pet\r\n                    policy</a>.\r\n            </p>\r\n        </div>\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <div class=\"rwimg-2\" aria-label=\"pictur of sunset\"></div>\r\n            <h2>Enjoy The Sunset</h2>\r\n            <p>Moore Park Beach's 17 km of pristine coast is the perfect backdrop for a solitary or romantic stroll.\r\n                You'll\r\n                be tempted to wake up early to watch the sunrise and return later in the afternoon for gorgeous sunsets\r\n                too.\r\n            </p>\r\n        </div>\r\n        <div class=\"w3-col w3-padding-16 l4\">\r\n            <div class=\"rwimg-3\" aria-label=\"picture of hotel room\"></div>\r\n            <h2>Comfortable Rooms</h2>\r\n            <p>Our cosy Inn hosts just seven rooms so there's never a crowd and you can relax in peace. All of our rooms\r\n                are well maintained and offer a range of creature comforts you can enjoy throughout your stay.</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<style>#inn-hero {\n  background-image: url(\"motel-hero.6eb1d0f3.webp\");\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 150px;\n}\n\n@media only screen and (device-width >= 992px) {\n  #inn-hero {\n    height: 250px;\n  }\n}\n\n.enjoy-text {\n  text-align: left;\n}\n\n.enjoy-text > div > li {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.rwimg-1 {\n  background-image: url(\"dogs.d0db78ad.webp\");\n}\n\n.rwimg-2 {\n  background-image: url(\"sunset.5b5b2a07.webp\");\n}\n\n.rwimg-3 {\n  background-image: url(\"rooms.b12b4439.webp\");\n}\n\n.rwimg-1, .rwimg-2, .rwimg-3 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 250px;\n}\n</style><script src=\"/welcome.488bc0a3.js\"></script>");

},{}],"tfVHL":[function(require,module,exports) {
module.exports = Promise.resolve("<div class=\"w3-content w3-container w3-padding-32\" id=\"our-motel\">\r\n\r\n    <!-- row -->\r\n    <div class=\"w3-row inn-rows\">\r\n\r\n        <div class=\"w3-half w3-container\">\r\n            <img src=\"/about-photo.bc5ec665.webp\" style=\"width: 100%\" alt=\"Owners\">\r\n        </div>\r\n\r\n        <div class=\"w3-half w3-container my-flex-middle\">\r\n            <h3 class=\"w3-center\">Hosted by the Owners</h3>\r\n            <p>Your hosts, Jan, Sally and Peppi are also Moore Park Beach Inn's owners and operators. Whenever their\r\n                assistance\r\n                is needed you can find them onsite delivering outstanding service and guiding guests so they can fully\r\n                enjoy a\r\n                quiet beachside stay.</p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- row -->\r\n    <div class=\"w3-row inn-rows\">\r\n\r\n        <div class=\"w3-half w3-container my-flex-middle\">\r\n            <h3 class=\"w3-center\">Enjoy the Pool & BBQ</h3>\r\n            <p>Care for a swim? Guests are welcome to relax and quietly enjoy our sparkling, salt-water pool and\r\n                spa\r\n                at any time. Our BBQ is available for complimentary use\r\n                if\r\n                you'd like to show off your outdoor cooking skills too.</p>\r\n        </div>\r\n\r\n        <div class=\"w3-half w3-container\">\r\n            <img src=\"/bbq.3601bae0.webp\" style=\"width: 100%\" alt=\"The mist over the mountains\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"w3-row w3-section\">\r\n        <div class=\"w3-container\">\r\n            <h3 class=\"w3-center\">Our Rooms</h3>\r\n            <p>We have seven rooms including a disability accessible room.</p>\r\n        </div>\r\n        <div class=\"w3-third w3-container w3-padding-16\">\r\n            <img src=\"/bed.9daaee30.webp\" width=\"100%\" alt=\"\">\r\n        </div>\r\n        <div class=\"w3-third w3-container w3-padding-16 \">\r\n            <img src=\"/room-wide.f6468445.webp\" width=\"100%\" alt=\"\">\r\n        </div>\r\n        <div class=\"w3-third w3-container w3-padding-16\">\r\n            <img src=\"/shower.32684fee.webp\" width=\"100%\" alt=\"\">\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<style>.inn-rows > div {\n  height: 300px;\n  overflow: hidden;\n}\n</style><script src=\"/our-inn.4141c863.js\"></script>");

},{}],"9hTwf":[function(require,module,exports) {
module.exports = Promise.resolve("<!-- Third Parallax Image with Portfolio Text -->\r\n<div class=\"bgimg-3 w3-display-container w3-opacity-min\">\r\n  <div class=\"w3-display-middle\">\r\n    <div class=\"w3-center w3-padding-large w3-xxlarge w3-wide my-beach-blue\" id=\"my-title\">\r\n      <span>Contact Us</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Container (Contact Section) -->\r\n<div class=\"w3-content w3-container w3-padding-64\" id=\"contact\">\r\n  <h3 class=\"w3-center\">WHERE WE ARE</h3>\r\n\r\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.5724892606931!2d152.27588868280603!3d-24.71796232106092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bebc6170e30f86f%3A0x5b026414070af8a7!2sMoore%20Park%20Beach%20Inn!5e1!3m2!1sen!2sau!4v1724048116268!5m2!1sen!2sau\" width=\"100%\" height=\"450\" style=\"border: 0\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n\r\n\r\n\r\n  <div class=\"contact-info\">\r\n    <div class=\"w3-large w3-section\">\r\n      <i class=\"fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right\"></i>Moore Park Beach, QLD<br>\r\n      <i class=\"fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right\"></i>(07) 4159 8332<br>\r\n      <i class=\"fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right\"></i><a href=\"mailto:  info@mooreparkbeachinn.com\"> info@mooreparkbeachinn.com </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<style>.contact-info {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n}\n</style><script src=\"/contact.3004aefc.js\"></script>");

},{}],"ioITu":[function(require,module,exports) {
module.exports = Promise.resolve("<!-- Footer -->\r\n<footer class=\"w3-center my-beach-blue w3-padding-64\">\r\n\r\n    <div class=\"w3-container w3-padding-16\">\r\n        <div>\r\n            <a href=\"https://useross.com/booking.php?dialog=motel&motel_id=197\" class=\"w3-button my-beach-orange my-hover-beach-blue w3-xlarge w3-padding-large my-hover-border-beach-orange my-border-beach-orange\" aria-label=\"book room button\">\r\n                BOOK DIRECT & SAVE\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"w3-xlarge\">\r\n        <a href=\"https://www.facebook.com/profile.php?id=61555683188414\" target=\"_blank\"> <i class=\"fa fa-facebook-official w3-hover-opacity\"></i></a>\r\n\r\n        <!--i class=\"fa fa-instagram w3-hover-opacity\"></i>\r\n      <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\r\n      <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\r\n      <i class=\"fa fa-twitter w3-hover-opacity\"></i>\r\n      <i class=\"fa fa-linkedin w3-hover-opacity\"></i-->\r\n    </div>\r\n\r\n    <div class=\"w3-container w3-padding-16 my-flex-middle\">\r\n        <span>29 Club Ave, Moore Park Beach, QLD, 4670</span>\r\n        <span>(07) 4159 8332</span>\r\n        <a href=\"mailto:  info@mooreparkbeachinn.com\"> info@mooreparkbeachinn.com </a>\r\n    </div>\r\n\r\n    <div class=\"w3-container w3-padding-16\">\r\n        <a href=\"/documents/MPBI-Pet-Policy.pdf\" target=\"_blank\" class=\"my-hover-bold\">Pet policy</a>.\r\n    </div>\r\n\r\n    <div>\r\n        <a href=\"#home\" class=\"w3-button my-beach-orange my-hover-beach-blue my-hover-border-beach-orange my-border-beach-orange\"><i class=\"fa fa-arrow-up w3-margin-right\"></i>To the top</a>\r\n    </div>\r\n\r\n\r\n</footer>\r\n\r\n<style>@media only screen and (device-width >= 992px) {\n  #footer-bottom {\n    height: 150px;\n  }\n}\n</style><script src=\"/footer.7bde8623.js\"></script>");

},{}]},["farZc","8lqZg"], "8lqZg", "parcelRequire75c4")

//# sourceMappingURL=index.975ef6c8.js.map
