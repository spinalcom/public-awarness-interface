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
})({"9vuV":[function(require,module,exports) {
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
//
//
//
//
//
//
var _default = {
  name: 'Register form',
  data: function data() {
    return {
      optIn: true,
      cgu: false,
      email: '',
      zipCode: 59140,
      rules: {
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        // eslint-disable-next-line no-restricted-globals
        zip: function zip(value) {
          return value.length === 5 && !isNaN(value) || 'Code postal invalide';
        }
      },
      notSaved: true,
      color: 'rgba(246, 226, 0,1)'
    };
  },
  computed: {
    displayError: function displayError() {
      if (this.notSaved) return false;
      return !(this.cgu && this.email !== '' && this.zipCode !== -1);
    }
  },
  methods: {
    validate: function validate() {
      return this.cgu && this.email !== '' && this.zipCode !== -1;
    },
    save: function save() {
      this.notSaved = false;
      if (!this.validate()) return;
      var event = {};
      event.cgu = this.cgu;
      event.email = this.email;
      event.zipCode = this.zipCode;
      event.optIn = this.optIn;
      console.log(event);
      this.$emit('saved', event);
    }
  }
};
exports.default = _default;
        var $c7a15b = exports.default || module.exports;
      
      if (typeof $c7a15b === 'function') {
        $c7a15b = $c7a15b.options;
      }
    
        /* template */
        Object.assign($c7a15b, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"min-width":"350","max-width":"420","dark":""}},[_c('v-card-title',[_vm._v("\n        Découvrez le projet de deconstruction de la raffinerie\n    ")]),_vm._v(" "),_c('v-card-text',[_c('h4',[_c('p',[_vm._v("\n                Bienvenue sur le site de visualisation du démantèlement de\n                la\n                raffinerie de Dunkerque\n            ")]),_vm._v(" "),_c('p',[_vm._v("\n                Afin de visualiser l'avancement du démantèlement veuillez\n                compléter le\n                formulaire suivant\n            ")])]),_vm._v(" "),_c('v-text-field',{attrs:{"label":"E-mail","rules":[_vm.rules.email],"placeholder":"Placeholder","outlined":"","type":"email"},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Code postal","placeholder":"Placeholder","rules":[_vm.rules.zip],"outlined":""},model:{value:(_vm.zipCode),callback:function ($$v) {_vm.zipCode=$$v},expression:"zipCode"}}),_vm._v(" "),_c('v-checkbox',{attrs:{"label":"J’accepte de recevoir des informations par email","color":_vm.color},model:{value:(_vm.optIn),callback:function ($$v) {_vm.optIn=$$v},expression:"optIn"}}),_vm._v(" "),_c('v-checkbox',{attrs:{"color":_vm.color},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('div',[_vm._v("\n                    Accepter les\n                    "),_c('a',{staticClass:"link",attrs:{"target":"_blank","href":"http://google.com"},on:{"click":function($event){$event.stopPropagation();}}},[_vm._v("\n                        CGU\n                    ")])])]},proxy:true}]),model:{value:(_vm.cgu),callback:function ($$v) {_vm.cgu=$$v},expression:"cgu"}}),_vm._v(" "),(_vm.displayError)?_c('p',{staticClass:"error--text"},[_vm._v("\n            les CGU doivent etre accepter\n        ")]):_vm._e()],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":_vm.color,"light":""},on:{"click":_vm.save}},[_vm._v("\n            Valider\n        ")])],1)],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-c7a15b",
            functional: undefined
          };
        })());
      
},{}],"uImG":[function(require,module,exports) {
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
var _default = {
  name: 'RequestUserInformation'
};
exports.default = _default;
        var $a0a0c5 = exports.default || module.exports;
      
      if (typeof $a0a0c5 === 'function') {
        $a0a0c5 = $a0a0c5.options;
      }
    
        /* template */
        Object.assign($a0a0c5, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('v-btn',{on:{"click":function($event){return _vm.$emit('leave')}}},[_vm._v(" Quitter")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"rgba(254,235,52,1)"},on:{"click":function($event){return _vm.$emit('agreed')}}},[_vm._v(" Visualiser")])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"body"},[_c('p',[_vm._v("\n      Bienvenue sur le site de visualisation du démantèlement de la\n      raffinerie de Dunkerque\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      Afin de visualiser l'avancement du démantèlement veuillez compléter le\n      formulaire suivant\n    ")])])}]

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-a0a0c5",
            functional: undefined
          };
        })());
      
},{}],"2XfQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RegisterForm = _interopRequireDefault(require("../components/RegisterForm.vue"));

var _RequestUserInformation = _interopRequireDefault(require("../components/RequestUserInformation.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  name: 'Login',
  components: {
    RequestUserInformation: _RequestUserInformation.default,
    RegisterForm: _RegisterForm.default
  },
  data: function data() {
    return {
      agreed: false,
      user: {
        email: '',
        zipCode: -1,
        cgu: false,
        partner: false
      },
      userAlreadyExist: false
    };
  },
  methods: {
    redirectToGoogle: function redirectToGoogle() {
      window.location.href = 'https://google.fr';
    },
    register: function register(info) {
      var _this = this;

      this.$userManager.register(info.email, info.zipCode).then(function (user) {
        if (typeof user !== 'undefined') {
          _this.redirectToMainPage(user);
        } else {
          _this.$userManager.getUserByEmail(info.email).then(function () {
            return _this.redirectToMainPage(user);
          });
        }
      }).catch(console.error);
    },
    redirectToMainPage: function redirectToMainPage(user) {
      if (typeof user !== "undefined") {
        this.$cookies.set('user', user.info.id.get(), null, '/');
        this.$router.push('/');
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var cookie = window.$cookies.get('user');

    if (typeof cookie !== 'undefined' || cookie !== null) {
      this.$userManager.connect(cookie).then(function (res) {
        if (res) _this2.$router.push('/');
      });
    }
  }
};
exports.default = _default;
        var $222fb1 = exports.default || module.exports;
      
      if (typeof $222fb1 === 'function') {
        $222fb1 = $222fb1.options;
      }
    
        /* template */
        Object.assign($222fb1, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"background"},[_c('register-form',{staticClass:"center",on:{"saved":_vm.register}})],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-222fb1",
            functional: undefined
          };
        })());
      
},{"../components/RegisterForm.vue":"9vuV","../components/RequestUserInformation.vue":"uImG","./../assets/colas.jpg":[["colas.71a033d0.jpg","iesx"],"iesx"]}],"K1i9":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"tmTK":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"K1i9"}],0:[function(require,module,exports) {
var b=require("tmTK");
},{}]},{},[0,"2XfQ"], null)
//# sourceMappingURL=/html/pai/Login.333bd367.js.map