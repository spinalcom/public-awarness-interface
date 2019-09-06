// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"oYMX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "CookiePolicy",
  data: function data() {
    return {
      headers: [{
        text: 'Nom du cookie',
        value: 'name'
      }, {
        text: 'Nature du cookie',
        value: 'kind'
      }, {
        text: 'Type/Source du cookie',
        value: 'type'
      }, {
        text: 'Utilisation/Données Collectées',
        value: 'usage'
      }],
      cookies: [{
        name: 'user',
        kind: 'Il s’agit d’un cookie persistant qui reste actif pendant troi mois.',
        type: 'Cookie Propriétaire (spinalcom)',
        usage: 'Ce cookie est installer lorsque vous vous connectez sur la plateforme'
      }]
    };
  }
};
exports.default = _default;
        var $d23b61 = exports.default || module.exports;
      
      if (typeof $d23b61 === 'function') {
        $d23b61 = $d23b61.options;
      }
    
        /* template */
        Object.assign($d23b61, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("\n        CHARTE D'UTILISATION DES COOKIES\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n        Un cookie est un petit fichier de données composé de lettres et de\n        chiffres qu’un site Web installe sur l’appareil que vous utilisez\n        pour accéder à Internet. Les cookies ont différentes utilités. Nous\n        utilisons des cookies pour nous aider à améliorer notre site et pour\n        obtenir des informations sur l’utilisation du site Web. Certains\n        tiers installent également des cookies sur votre appareil lorsque\n        vous parcourez notre site Web.\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n        La plupart des navigateurs Web vous permettent de contrôler\n        l’installation de cookies sur votre appareil via les paramètres du\n        navigateur. Pour en savoir plus sur les cookies, notamment comment\n        voir quels cookies ont été installés et comment les bloquer, les\n        gérer et les supprimer, rendez-vous sur\n        www.allaboutcookies.org/manage-cookies/.\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n\n        Si vous n’avez pas paramétré votre navigateur pour que celui-ci\n        refuse les cookies, notre système installera des cookies sur votre\n        appareil dès que vous visiterez une page de notre site Web.\n    ")]),_vm._v(" "),_c('h2',[_vm._v("\n        TYPES DE COOKIES UTILISÉS PAR Spinalcom\n    ")]),_vm._v(" "),_c('h3',[_vm._v(" Cookies persistants")]),_vm._v(" "),_c('p',[_vm._v("\n        Ces cookies sont conservés dans l’un des sous-dossiers de votre\n        navigateur jusqu’à ce que vous les supprimiez manuellement ou que\n        votre navigateur les supprime en fonction de la durée spécifiée dans\n        le fichier du cookie persistant.\n    ")]),_vm._v(" "),_c('p',[_vm._v(" Les cookies persistants aident les sites Web à se souvenir de vos\n        informations et de vos paramètres lorsque vous les consultez\n        ultérieurement. Cela facilite et accélère l’accès au site et offre\n        une meilleure expérience utilisateur.\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n        Vous trouverez davantage d’informations sur les cookies individuels\n        que nous utilisons et leur utilité dans le tableau ci-dessous :\n    ")]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.cookies,"hide-actions":"","hide-headers":"","dark":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.kind))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.type))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.usage))])]}}])})],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-d23b61",
            functional: undefined
          };
        })());
      
},{}]},{},["oYMX"], null)
//# sourceMappingURL=/html/pai/CookiePolicy.e1eb7971.js.map