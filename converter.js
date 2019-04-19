var snips = {};
raw.forEach( mapping =>{

    var localName = mapping["localName"],
        exp = mapping["export"],
        global = mapping["global"],
        module = mapping["module"],
        deprecated = mapping["deprecated"];

    if(deprecated === false){
      snips[global] = {};
      snips[global]["prefix"] = global.replace("Ember.", "E:");
      snips[global]["body"] = `import ${ localName != null ? localName : `{ ${exp} }`} from '${module}';`
    }
});

[
  {
    "global": "Ember.Application",
    "module": "@ember/application",
    "export": "default",
    "localName": "Application",
    "deprecated": false
  },
  {
    "global": "Ember.ApplicationInstance",
    "module": "@ember/application/instance",
    "export": "default",
    "localName": "ApplicationInstance",
    "deprecated": false
  },
  {
    "global": "Ember.Engine",
    "module": "@ember/engine",
    "export": "default",
    "localName": "Engine",
    "deprecated": false
  },
  {
    "global": "Ember.EngineInstance",
    "module": "@ember/engine/instance",
    "export": "default",
    "localName": "EngineInstance",
    "deprecated": false
  },
  {
    "global": "Ember.getEngineParent",
    "module": "@ember/engine",
    "export": "getEngineParent",
    "deprecated": false
  },
  {
    "global": "Ember.Error",
    "module": "@ember/error",
    "export": "default",
    "localName": "Error",
    "deprecated": false
  },
  {
    "global": "Ember.onLoad",
    "module": "@ember/application",
    "export": "onLoad",
    "deprecated": false
  },
  {
    "global": "Ember.runLoadHooks",
    "module": "@ember/application",
    "export": "runLoadHooks",
    "deprecated": false
  },
  {
    "global": "Ember.deprecate",
    "module": "@ember/application/deprecations",
    "export": "deprecate",
    "deprecated": false
  },
  {
    "global": "Ember.deprecateFunc",
    "module": "@ember/application/deprecations",
    "export": "deprecateFunc",
    "deprecated": false
  },
  {
    "global": "Ember.getOwner",
    "module": "@ember/application",
    "export": "getOwner",
    "deprecated": false
  },
  {
    "global": "Ember.setOwner",
    "module": "@ember/application",
    "export": "setOwner",
    "deprecated": false
  },
  {
    "global": "Ember.Controller",
    "module": "@ember/controller",
    "export": "default",
    "localName": "Controller",
    "deprecated": false
  },
  {
    "global": "Ember.inject.controller",
    "module": "@ember/controller",
    "export": "inject",
    "deprecated": false
  },
  {
    "global": "Ember.Array",
    "module": "@ember/array",
    "export": "default",
    "localName": "Array",
    "deprecated": false
  },
  {
    "global": "Ember.A",
    "module": "@ember/array",
    "export": "A",
    "deprecated": false
  },
  {
    "global": "Ember.isArray",
    "module": "@ember/array",
    "export": "isArray",
    "deprecated": false
  },
  {
    "global": "Ember.makeArray",
    "module": "@ember/array",
    "export": "makeArray",
    "deprecated": false
  },
  {
    "global": "Ember.MutableArray",
    "module": "@ember/array/mutable",
    "export": "default",
    "localName": "MutableArray",
    "deprecated": false
  },
  {
    "global": "Ember.ArrayProxy",
    "module": "@ember/array/proxy",
    "export": "default",
    "localName": "ArrayProxy",
    "deprecated": false
  },
  {
    "global": "Ember.CoreObject",
    "module": "@ember/object/core",
    "export": "default",
    "localName": "CoreObject",
    "deprecated": false
  },
  {
    "global": "Ember.Object",
    "module": "@ember/object",
    "export": "default",
    "localName": "Object",
    "deprecated": false
  },
  {
    "global": "Ember.defineProperty",
    "module": "@ember/object",
    "export": "defineProperty",
    "deprecated": false
  },
  {
    "global": "Ember.get",
    "module": "@ember/object",
    "export": "get",
    "deprecated": false
  },
  {
    "global": "Ember.set",
    "module": "@ember/object",
    "export": "set",
    "deprecated": false
  },
  {
    "global": "Ember.getProperties",
    "module": "@ember/object",
    "export": "getProperties",
    "deprecated": false
  },
  {
    "global": "Ember.setProperties",
    "module": "@ember/object",
    "export": "setProperties",
    "deprecated": false
  },
  {
    "global": "Ember.getWithDefault",
    "module": "@ember/object",
    "export": "getWithDefault",
    "deprecated": false
  },
  {
    "global": "Ember.observer",
    "module": "@ember/object",
    "export": "observer",
    "deprecated": false
  },
  {
    "global": "Ember.computed",
    "module": "@ember/object",
    "export": "computed",
    "deprecated": false
  },
  {
    "global": "Ember.ComputedProperty",
    "module": "@ember/object/computed",
    "export": "default",
    "localName": "ComputedProperty",
    "deprecated": false
  },
  {
    "global": "Ember.trySet",
    "module": "@ember/object",
    "export": "trySet",
    "deprecated": false
  },
  {
    "global": "Ember.aliasMethod",
    "module": "@ember/object",
    "export": "aliasMethod",
    "deprecated": false
  },
  {
    "global": "Ember.expandProperties",
    "module": "@ember/object/computed",
    "export": "expandProperties",
    "deprecated": false
  },
  {
    "global": "Ember.computed.empty",
    "module": "@ember/object/computed",
    "export": "empty",
    "deprecated": false
  },
  {
    "global": "Ember.computed.notEmpty",
    "module": "@ember/object/computed",
    "export": "notEmpty",
    "deprecated": false
  },
  {
    "global": "Ember.computed.none",
    "module": "@ember/object/computed",
    "export": "none",
    "deprecated": false
  },
  {
    "global": "Ember.computed.not",
    "module": "@ember/object/computed",
    "export": "not",
    "deprecated": false
  },
  {
    "global": "Ember.computed.bool",
    "module": "@ember/object/computed",
    "export": "bool",
    "deprecated": false
  },
  {
    "global": "Ember.computed.match",
    "module": "@ember/object/computed",
    "export": "match",
    "deprecated": false
  },
  {
    "global": "Ember.computed.equal",
    "module": "@ember/object/computed",
    "export": "equal",
    "deprecated": false
  },
  {
    "global": "Ember.computed.gt",
    "module": "@ember/object/computed",
    "export": "gt",
    "deprecated": false
  },
  {
    "global": "Ember.computed.gte",
    "module": "@ember/object/computed",
    "export": "gte",
    "deprecated": false
  },
  {
    "global": "Ember.computed.lt",
    "module": "@ember/object/computed",
    "export": "lt",
    "deprecated": false
  },
  {
    "global": "Ember.computed.lte",
    "module": "@ember/object/computed",
    "export": "lte",
    "deprecated": false
  },
  {
    "global": "Ember.computed.alias",
    "module": "@ember/object/computed",
    "export": "alias",
    "deprecated": false
  },
  {
    "global": "Ember.computed.oneWay",
    "module": "@ember/object/computed",
    "export": "oneWay",
    "deprecated": false
  },
  {
    "global": "Ember.computed.reads",
    "module": "@ember/object/computed",
    "export": "reads",
    "deprecated": false
  },
  {
    "global": "Ember.computed.readOnly",
    "module": "@ember/object/computed",
    "export": "readOnly",
    "deprecated": false
  },
  {
    "global": "Ember.computed.deprecatingAlias",
    "module": "@ember/object/computed",
    "export": "deprecatingAlias",
    "deprecated": false
  },
  {
    "global": "Ember.computed.and",
    "module": "@ember/object/computed",
    "export": "and",
    "deprecated": false
  },
  {
    "global": "Ember.computed.or",
    "module": "@ember/object/computed",
    "export": "or",
    "deprecated": false
  },
  {
    "global": "Ember.computed.collect",
    "module": "@ember/object/computed",
    "export": "collect",
    "deprecated": false
  },
  {
    "global": "Ember.computed.sum",
    "module": "@ember/object/computed",
    "export": "sum",
    "deprecated": false
  },
  {
    "global": "Ember.computed.min",
    "module": "@ember/object/computed",
    "export": "min",
    "deprecated": false
  },
  {
    "global": "Ember.computed.max",
    "module": "@ember/object/computed",
    "export": "max",
    "deprecated": false
  },
  {
    "global": "Ember.computed.map",
    "module": "@ember/object/computed",
    "export": "map",
    "deprecated": false
  },
  {
    "global": "Ember.computed.sort",
    "module": "@ember/object/computed",
    "export": "sort",
    "deprecated": false
  },
  {
    "global": "Ember.computed.setDiff",
    "module": "@ember/object/computed",
    "export": "setDiff",
    "deprecated": false
  },
  {
    "global": "Ember.computed.mapBy",
    "module": "@ember/object/computed",
    "export": "mapBy",
    "deprecated": false
  },
  {
    "global": "Ember.computed.mapProperty",
    "module": "@ember/object/computed",
    "export": "mapProperty",
    "deprecated": false
  },
  {
    "global": "Ember.computed.filter",
    "module": "@ember/object/computed",
    "export": "filter",
    "deprecated": false
  },
  {
    "global": "Ember.computed.filterBy",
    "module": "@ember/object/computed",
    "export": "filterBy",
    "deprecated": false
  },
  {
    "global": "Ember.computed.filterProperty",
    "module": "@ember/object/computed",
    "export": "filterProperty",
    "deprecated": false
  },
  {
    "global": "Ember.computed.uniq",
    "module": "@ember/object/computed",
    "export": "uniq",
    "deprecated": false
  },
  {
    "global": "Ember.computed.uniqBy",
    "module": "@ember/object/computed",
    "export": "uniqBy",
    "deprecated": false
  },
  {
    "global": "Ember.computed.union",
    "module": "@ember/object/computed",
    "export": "union",
    "deprecated": false
  },
  {
    "global": "Ember.computed.intersect",
    "module": "@ember/object/computed",
    "export": "intersect",
    "deprecated": false
  },
  {
    "global": "Ember.Evented",
    "module": "@ember/object/evented",
    "export": "default",
    "localName": "Evented",
    "deprecated": false
  },
  {
    "global": "Ember.on",
    "module": "@ember/object/evented",
    "export": "on",
    "deprecated": false
  },
  {
    "global": "Ember.addListener",
    "module": "@ember/object/events",
    "export": "addListener",
    "deprecated": false
  },
  {
    "global": "Ember.removeListener",
    "module": "@ember/object/events",
    "export": "removeListener",
    "deprecated": false
  },
  {
    "global": "Ember.sendEvent",
    "module": "@ember/object/events",
    "export": "sendEvent",
    "deprecated": false
  },
  {
    "global": "Ember.Mixin",
    "module": "@ember/object/mixin",
    "export": "default",
    "localName": "Mixin",
    "deprecated": false
  },
  {
    "global": "Ember.ObjectProxy",
    "module": "@ember/object/proxy",
    "export": "default",
    "localName": "ObjectProxy",
    "deprecated": false
  },
  {
    "global": "Ember.PromiseProxyMixin",
    "module": "@ember/object/promise-proxy-mixin",
    "export": "default",
    "localName": "PromiseProxyMixin",
    "deprecated": false
  },
  {
    "global": "Ember.addObserver",
    "module": "@ember/object/observers",
    "export": "addObserver",
    "deprecated": false
  },
  {
    "global": "Ember.removeObserver",
    "module": "@ember/object/observers",
    "export": "removeObserver",
    "deprecated": false
  },
  {
    "global": "Ember.Observable",
    "module": "@ember/object/observable",
    "export": "default",
    "localName": "Observable",
    "deprecated": false
  },
  {
    "global": "Ember.copy",
    "module": "@ember/object/internals",
    "export": "copy",
    "deprecated": false
  },
  {
    "global": "Ember.guidFor",
    "module": "@ember/object/internals",
    "export": "guidFor",
    "deprecated": false
  },
  {
    "global": "Ember.cacheFor",
    "module": "@ember/object/internals",
    "export": "cacheFor",
    "deprecated": false
  },
  {
    "global": "Ember.Component",
    "module": "@ember/component",
    "export": "default",
    "localName": "Component",
    "deprecated": false
  },
  {
    "global": "Ember.Checkbox",
    "module": "@ember/component/checkbox",
    "export": "default",
    "localName": "Checkbox",
    "deprecated": false
  },
  {
    "global": "Ember.TextArea",
    "module": "@ember/component/text-area",
    "export": "default",
    "localName": "TextArea",
    "deprecated": false
  },
  {
    "global": "Ember.TextField",
    "module": "@ember/component/text-field",
    "export": "default",
    "localName": "TextField",
    "deprecated": false
  },
  {
    "global": "Ember.debug",
    "module": "@ember/debug",
    "export": "debug",
    "deprecated": false
  },
  {
    "global": "Ember.inspect",
    "module": "@ember/debug",
    "export": "inspect",
    "deprecated": false
  },
  {
    "global": "Ember.runInDebug",
    "module": "@ember/debug",
    "export": "runInDebug",
    "deprecated": false
  },
  {
    "global": "Ember.warn",
    "module": "@ember/debug",
    "export": "warn",
    "deprecated": false
  },
  {
    "global": "Ember.assert",
    "module": "@ember/debug",
    "export": "assert",
    "deprecated": false
  },
  {
    "global": "Ember.Debug.registerDeprecationHandler",
    "module": "@ember/debug",
    "export": "registerDeprecationHandler",
    "deprecated": false
  },
  {
    "global": "Ember.Debug.registerWarnHandler",
    "module": "@ember/debug",
    "export": "registerWarnHandler",
    "deprecated": false
  },
  {
    "global": "Ember.ContainerDebugAdapter",
    "module": "@ember/debug/container-debug-adapter",
    "export": "default",
    "localName": "ContainerDebugAdapter",
    "deprecated": false
  },
  {
    "global": "Ember.DataAdapter",
    "module": "@ember/debug/data-adapter",
    "export": "default",
    "localName": "DataAdapter",
    "deprecated": false
  },
  {
    "global": "Ember.Resolver",
    "module": "@ember/application/resolver",
    "export": "default",
    "localName": "Resolver",
    "deprecated": false
  },
  {
    "global": "Ember.DefaultResolver",
    "module": "@ember/application/globals-resolver",
    "export": "default",
    "localName": "GlobalsResolver",
    "deprecated": false
  },
  {
    "global": "Ember.Helper",
    "module": "@ember/component/helper",
    "export": "default",
    "localName": "Helper",
    "deprecated": false
  },
  {
    "global": "Ember.Helper.helper",
    "module": "@ember/component/helper",
    "export": "helper",
    "deprecated": false
  },
  {
    "global": "Ember.Instrumentation.instrument",
    "module": "@ember/instrumentation",
    "export": "instrument",
    "deprecated": false
  },
  {
    "global": "Ember.Instrumentation.reset",
    "module": "@ember/instrumentation",
    "export": "reset",
    "deprecated": false
  },
  {
    "global": "Ember.Instrumentation.subscribe",
    "module": "@ember/instrumentation",
    "export": "subscribe",
    "deprecated": false
  },
  {
    "global": "Ember.Instrumentation.unsubscribe",
    "module": "@ember/instrumentation",
    "export": "unsubscribe",
    "deprecated": false
  },
  {
    "global": "Ember.Location",
    "module": "@ember/routing/location",
    "export": "default",
    "localName": "Location",
    "deprecated": false
  },
  {
    "global": "Ember.AutoLocation",
    "module": "@ember/routing/auto-location",
    "export": "default",
    "localName": "AutoLocation",
    "deprecated": false
  },
  {
    "global": "Ember.HashLocation",
    "module": "@ember/routing/hash-location",
    "export": "default",
    "localName": "HashLocation",
    "deprecated": false
  },
  {
    "global": "Ember.HistoryLocation",
    "module": "@ember/routing/history-location",
    "export": "default",
    "localName": "HistoryLocation",
    "deprecated": false
  },
  {
    "global": "Ember.NoneLocation",
    "module": "@ember/routing/none-location",
    "export": "default",
    "localName": "NoneLocation",
    "deprecated": false
  },
  {
    "global": "Ember.LinkComponent",
    "module": "@ember/routing/link-component",
    "export": "default",
    "localName": "LinkComponent",
    "deprecated": false
  },
  {
    "global": "Ember.Map",
    "module": "@ember/map",
    "export": "default",
    "localName": "Map",
    "deprecated": false
  },
  {
    "global": "Ember.MapWithDefault",
    "module": "@ember/map/with-default",
    "export": "default",
    "localName": "MapWithDefault",
    "deprecated": false
  },
  {
    "global": "Ember.Enumerable",
    "module": "@ember/enumerable",
    "export": "default",
    "localName": "Enumerable",
    "deprecated": false
  },
  {
    "global": "Ember.assign",
    "module": "@ember/polyfills",
    "export": "assign",
    "deprecated": false
  },
  {
    "global": "Ember.merge",
    "module": "@ember/polyfills",
    "export": "merge",
    "deprecated": false
  },
  {
    "global": "Ember.create",
    "module": "@ember/polyfills",
    "export": "create",
    "deprecated": false
  },
  {
    "global": "Ember.keys",
    "module": "@ember/polyfills",
    "export": "keys",
    "deprecated": false
  },
  {
    "global": "Ember.platform.hasPropertyAccessors",
    "module": "@ember/polyfills",
    "export": "hasPropertyAccessors",
    "deprecated": false
  },
  {
    "global": "Ember.Route",
    "module": "@ember/routing/route",
    "export": "default",
    "localName": "Route",
    "deprecated": false
  },
  {
    "global": "Ember.Router",
    "module": "@ember/routing/router",
    "export": "default",
    "localName": "EmberRouter",
    "deprecated": false
  },
  {
    "global": "Ember.run",
    "module": "@ember/runloop",
    "export": "run",
    "deprecated": false
  },
  {
    "global": "Ember.run.begin",
    "module": "@ember/runloop",
    "export": "begin",
    "deprecated": false
  },
  {
    "global": "Ember.run.bind",
    "module": "@ember/runloop",
    "export": "bind",
    "deprecated": false
  },
  {
    "global": "Ember.run.cancel",
    "module": "@ember/runloop",
    "export": "cancel",
    "deprecated": false
  },
  {
    "global": "Ember.run.debounce",
    "module": "@ember/runloop",
    "export": "debounce",
    "deprecated": false
  },
  {
    "global": "Ember.run.end",
    "module": "@ember/runloop",
    "export": "end",
    "deprecated": false
  },
  {
    "global": "Ember.run.join",
    "module": "@ember/runloop",
    "export": "join",
    "deprecated": false
  },
  {
    "global": "Ember.run.later",
    "module": "@ember/runloop",
    "export": "later",
    "deprecated": false
  },
  {
    "global": "Ember.run.next",
    "module": "@ember/runloop",
    "export": "next",
    "deprecated": false
  },
  {
    "global": "Ember.run.once",
    "module": "@ember/runloop",
    "export": "once",
    "deprecated": false
  },
  {
    "global": "Ember.run.schedule",
    "module": "@ember/runloop",
    "export": "schedule",
    "deprecated": false
  },
  {
    "global": "Ember.run.scheduleOnce",
    "module": "@ember/runloop",
    "export": "scheduleOnce",
    "deprecated": false
  },
  {
    "global": "Ember.run.throttle",
    "module": "@ember/runloop",
    "export": "throttle",
    "deprecated": false
  },
  {
    "global": "Ember.Service",
    "module": "@ember/service",
    "export": "default",
    "localName": "Service",
    "deprecated": false
  },
  {
    "global": "Ember.inject.service",
    "module": "@ember/service",
    "export": "inject",
    "deprecated": false
  },
  {
    "global": "Ember.String.camelize",
    "module": "@ember/string",
    "export": "camelize",
    "deprecated": false
  },
  {
    "global": "Ember.String.capitalize",
    "module": "@ember/string",
    "export": "capitalize",
    "deprecated": false
  },
  {
    "global": "Ember.String.classify",
    "module": "@ember/string",
    "export": "classify",
    "deprecated": false
  },
  {
    "global": "Ember.String.dasherize",
    "module": "@ember/string",
    "export": "dasherize",
    "deprecated": false
  },
  {
    "global": "Ember.String.decamelize",
    "module": "@ember/string",
    "export": "decamelize",
    "deprecated": false
  },
  {
    "global": "Ember.String.fmt",
    "module": "@ember/string",
    "export": "fmt",
    "deprecated": false
  },
  {
    "global": "Ember.String.htmlSafe",
    "module": "@ember/string",
    "export": "htmlSafe",
    "deprecated": false
  },
  {
    "global": "Ember.String.isHTMLSafe",
    "module": "@ember/string",
    "export": "isHTMLSafe",
    "deprecated": false
  },
  {
    "global": "Ember.String.loc",
    "module": "@ember/string",
    "export": "loc",
    "deprecated": false
  },
  {
    "global": "Ember.String.underscore",
    "module": "@ember/string",
    "export": "underscore",
    "deprecated": false
  },
  {
    "global": "Ember.String.w",
    "module": "@ember/string",
    "export": "w",
    "deprecated": false
  },
  {
    "global": "Ember.Test.Adapter",
    "module": "@ember/test/adapter",
    "export": "default",
    "localName": "TestAdapter",
    "deprecated": false
  },
  {
    "global": "Ember.Test.registerAsyncHelper",
    "module": "@ember/test",
    "export": "registerAsyncHelper",
    "deprecated": false
  },
  {
    "global": "Ember.Test.registerHelper",
    "module": "@ember/test",
    "export": "registerHelper",
    "deprecated": false
  },
  {
    "global": "Ember.Test.registerWaiter",
    "module": "@ember/test",
    "export": "registerWaiter",
    "deprecated": false
  },
  {
    "global": "Ember.Test.unregisterHelper",
    "module": "@ember/test",
    "export": "unregisterHelper",
    "deprecated": false
  },
  {
    "global": "Ember.Test.unregisterWaiter",
    "module": "@ember/test",
    "export": "unregisterWaiter",
    "deprecated": false
  },
  {
    "global": "Ember.isBlank",
    "module": "@ember/utils",
    "export": "isBlank",
    "deprecated": false
  },
  {
    "global": "Ember.isEmpty",
    "module": "@ember/utils",
    "export": "isEmpty",
    "deprecated": false
  },
  {
    "global": "Ember.isEqual",
    "module": "@ember/utils",
    "export": "isEqual",
    "deprecated": false
  },
  {
    "global": "Ember.isNone",
    "module": "@ember/utils",
    "export": "isNone",
    "deprecated": false
  },
  {
    "global": "Ember.isPresent",
    "module": "@ember/utils",
    "export": "isPresent",
    "deprecated": false
  },
  {
    "global": "Ember.tryInvoke",
    "module": "@ember/utils",
    "export": "tryInvoke",
    "deprecated": false
  },
  {
    "global": "Ember.typeOf",
    "module": "@ember/utils",
    "export": "typeOf",
    "deprecated": false
  },
  {
    "global": "Ember.compare",
    "module": "@ember/utils",
    "export": "compare",
    "deprecated": false
  },
  {
    "global": "Ember.$",
    "module": "jquery",
    "export": "default",
    "localName": "$",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP",
    "module": "rsvp",
    "export": "default",
    "localName": "RSVP",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.all",
    "module": "rsvp",
    "export": "all",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.allSettled",
    "module": "rsvp",
    "export": "allSettled",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.race",
    "module": "rsvp",
    "export": "race",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.hash",
    "module": "rsvp",
    "export": "hash",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.hashSettled",
    "module": "rsvp",
    "export": "hashSettled",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.defer",
    "module": "rsvp",
    "export": "defer",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.denodeify",
    "module": "rsvp",
    "export": "denodeify",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.on",
    "module": "rsvp",
    "export": "on",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.off",
    "module": "rsvp",
    "export": "off",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.resolve",
    "module": "rsvp",
    "export": "resolve",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.reject",
    "module": "rsvp",
    "export": "reject",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.map",
    "module": "rsvp",
    "export": "map",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.filter",
    "module": "rsvp",
    "export": "filter",
    "deprecated": false
  },
  {
    "global": "Ember.RSVP.Promise",
    "module": "rsvp",
    "export": "Promise",
    "deprecated": false
  },
  {
    "global": "Ember.Application",
    "module": "ember-application",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application",
      "export": "default"
    }
  },
  {
    "global": "Ember.Array",
    "module": "ember-array",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/array",
      "export": "default"
    }
  },
  {
    "global": "Ember.MutableArray",
    "module": "ember-array/mutable",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/array/mutable",
      "export": "default"
    }
  },
  {
    "global": "Ember.A",
    "module": "ember-array/utils",
    "export": "A",
    "deprecated": true,
    "replacement": {
      "module": "@ember/array",
      "export": "A"
    }
  },
  {
    "global": "Ember.isArray",
    "module": "ember-array/utils",
    "export": "isEmberArray",
    "deprecated": true,
    "replacement": {
      "module": "@ember/array",
      "export": "isArray"
    }
  },
  {
    "global": "Ember.makeArray",
    "module": "ember-array/utils",
    "export": "wrap",
    "deprecated": true,
    "replacement": {
      "module": "@ember/array",
      "export": "makeArray"
    }
  },
  {
    "global": "Ember.Component",
    "module": "ember-component",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/component",
      "export": "default"
    }
  },
  {
    "global": "Ember.Checkbox",
    "module": "ember-components/checkbox",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/component/checkbox",
      "export": "default"
    }
  },
  {
    "global": "Ember.TextArea",
    "module": "ember-components/text-area",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/component/text-area",
      "export": "default"
    }
  },
  {
    "global": "Ember.TextField",
    "module": "ember-components/text-field",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/component/text-field",
      "export": "default"
    }
  },
  {
    "global": "Ember.Controller",
    "module": "ember-controller",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/controller",
      "export": "default"
    }
  },
  {
    "global": "Ember.inject.controller",
    "module": "ember-controller/inject",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/controller",
      "export": "inject"
    }
  },
  {
    "global": "Ember.ArrayProxy",
    "module": "ember-controller/proxy",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/array/proxy",
      "export": "default"
    }
  },
  {
    "global": "Ember.SortableMixin",
    "module": "ember-controllers/sortable",
    "export": "default",
    "deprecated": true
  },
  {
    "global": "Ember.debug",
    "module": "ember-debug",
    "export": "log",
    "deprecated": true,
    "replacement": {
      "module": "@ember/debug",
      "export": "debug"
    }
  },
  {
    "global": "Ember.inspect",
    "module": "ember-debug",
    "export": "inspect",
    "deprecated": true,
    "replacement": {
      "module": "@ember/debug",
      "export": "inspect"
    }
  },
  {
    "global": "Ember.runInDebug",
    "module": "ember-debug",
    "export": "run",
    "deprecated": true,
    "replacement": {
      "module": "@ember/debug",
      "export": "runInDebug"
    }
  },
  {
    "global": "Ember.warn",
    "module": "ember-debug",
    "export": "warn",
    "deprecated": true,
    "replacement": {
      "module": "@ember/debug",
      "export": "warn"
    }
  },
  {
    "global": "Ember.ContainerDebugAdapter",
    "module": "ember-debug/container-debug-adapter",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/debug/container-debug-adapter",
      "export": "default"
    }
  },
  {
    "global": "Ember.DataAdapter",
    "module": "ember-debug/data-adapter",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/debug/data-adapter",
      "export": "default"
    }
  },
  {
    "global": "Ember.deprecate",
    "module": "ember-deprecations",
    "export": "deprecate",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application/deprecations",
      "export": "deprecate"
    }
  },
  {
    "global": "Ember.deprecateFunc",
    "module": "ember-deprecations",
    "export": "deprecateFunc",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application/deprecations",
      "export": "deprecateFunc"
    }
  },
  {
    "global": "Ember.Enumerable",
    "module": "ember-enumerable",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/enumerable",
      "export": "default"
    }
  },
  {
    "global": "Ember.Evented",
    "module": "ember-evented",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/evented",
      "export": "default"
    }
  },
  {
    "global": "Ember.on",
    "module": "ember-evented/on",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/evented",
      "export": "on"
    }
  },
  {
    "global": "Ember.DefaultResolver",
    "module": "ember-globals-resolver",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application/globals-resolver",
      "export": "default"
    }
  },
  {
    "global": "Ember.Helper",
    "module": "ember-helper",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/component/helper",
      "export": "default"
    }
  },
  {
    "global": "Ember.Helper.helper",
    "module": "ember-helper",
    "export": "helper",
    "deprecated": true,
    "replacement": {
      "module": "@ember/component/helper",
      "export": "helper"
    }
  },
  {
    "global": "Ember.instrument",
    "module": "ember-instrumentation",
    "export": "instrument",
    "deprecated": true,
    "replacement": {
      "module": "@ember/instrumentation",
      "export": "instrument"
    }
  },
  {
    "global": "Ember.reset",
    "module": "ember-instrumentation",
    "export": "reset",
    "deprecated": true,
    "replacement": {
      "module": "@ember/instrumentation",
      "export": "reset"
    }
  },
  {
    "global": "Ember.subscribe",
    "module": "ember-instrumentation",
    "export": "subscribe",
    "deprecated": true,
    "replacement": {
      "module": "@ember/instrumentation",
      "export": "subscribe"
    }
  },
  {
    "global": "Ember.unsubscribe",
    "module": "ember-instrumentation",
    "export": "unsubscribe",
    "deprecated": true,
    "replacement": {
      "module": "@ember/instrumentation",
      "export": "unsubscribe"
    }
  },
  {
    "global": "Ember.HashLocation",
    "module": "ember-locations/hash",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/routing/hash-location",
      "export": "default"
    }
  },
  {
    "global": "Ember.HistoryLocation",
    "module": "ember-locations/history",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/routing/history-location",
      "export": "default"
    }
  },
  {
    "global": "Ember.NoneLocation",
    "module": "ember-locations/none",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/routing/none-location",
      "export": "default"
    }
  },
  {
    "global": "Ember.Map",
    "module": "ember-map",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/map",
      "export": "default"
    }
  },
  {
    "global": "Ember.MapWithDefault",
    "module": "ember-map",
    "export": "withDefault",
    "deprecated": true,
    "replacement": {
      "module": "@ember/map/with-default",
      "export": "default"
    }
  },
  {
    "global": "Ember.destroy",
    "module": "ember-metal/destroy",
    "export": "default",
    "deprecated": true
  },
  {
    "global": "Ember.addListener",
    "module": "ember-metal/events",
    "export": "addListener",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/events",
      "export": "addListener"
    }
  },
  {
    "global": "Ember.removeListener",
    "module": "ember-metal/events",
    "export": "removeListener",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/events",
      "export": "removeListener"
    }
  },
  {
    "global": "Ember.sendEvent",
    "module": "ember-metal/events",
    "export": "send",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/events",
      "export": "sendEvent"
    }
  },
  {
    "global": "Ember.get",
    "module": "ember-metal/get",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "get"
    }
  },
  {
    "global": "Ember.getProperties",
    "module": "ember-metal/get",
    "export": "getProperties",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "getProperties"
    }
  },
  {
    "global": "Ember.Mixin",
    "module": "ember-metal/mixin",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/mixin",
      "export": "default"
    }
  },
  {
    "global": "Ember.observer",
    "module": "ember-metal/observer",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "observer"
    }
  },
  {
    "global": "Ember.addObserver",
    "module": "ember-metal/observer",
    "export": "addObserver",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/observers",
      "export": "addObserver"
    }
  },
  {
    "global": "Ember.removeObserver",
    "module": "ember-metal/observer",
    "export": "removeObserver",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/observers",
      "export": "removeObserver"
    }
  },
  {
    "global": "Ember.onLoad",
    "module": "ember-metal/on-load",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application",
      "export": "onLoad"
    }
  },
  {
    "global": "Ember.runLoadHooks",
    "module": "ember-metal/on-load",
    "export": "run",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application",
      "export": "runLoadHooks"
    }
  },
  {
    "global": "Ember.set",
    "module": "ember-metal/set",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "set"
    }
  },
  {
    "global": "Ember.setProperties",
    "module": "ember-metal/set",
    "export": "setProperties",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "setProperties"
    }
  },
  {
    "global": "Ember.trySet",
    "module": "ember-metal/set",
    "export": "trySet",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "trySet"
    }
  },
  {
    "global": "Ember.aliasMethod",
    "module": "ember-metal/utils",
    "export": "aliasMethod",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "aliasMethod"
    }
  },
  {
    "global": "Ember.assert",
    "module": "ember-metal/utils",
    "export": "assert",
    "deprecated": true,
    "replacement": {
      "module": "@ember/debug",
      "export": "assert"
    }
  },
  {
    "global": "Ember.cacheFor",
    "module": "ember-metal/utils",
    "export": "cacheFor",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/internals",
      "export": "cacheFor"
    }
  },
  {
    "global": "Ember.copy",
    "module": "ember-metal/utils",
    "export": "copy",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/internals",
      "export": "copy"
    }
  },
  {
    "global": "Ember.guidFor",
    "module": "ember-metal/utils",
    "export": "guidFor",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/internals",
      "export": "guidFor"
    }
  },
  {
    "global": "Ember.Object",
    "module": "ember-object",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "default"
    }
  },
  {
    "global": "Ember.getOwner",
    "module": "ember-owner/get",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application",
      "export": "getOwner"
    }
  },
  {
    "global": "Ember.setOwner",
    "module": "ember-owner/set",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/application",
      "export": "setOwner"
    }
  },
  {
    "global": "Ember.assign",
    "module": "ember-platform",
    "export": "assign",
    "deprecated": true,
    "replacement": {
      "module": "@ember/polyfills",
      "export": "assign"
    }
  },
  {
    "global": "Ember.create",
    "module": "ember-platform",
    "export": "create",
    "deprecated": true,
    "replacement": {
      "module": "@ember/polyfills",
      "export": "create"
    }
  },
  {
    "global": "Ember.platform.hasPropertyAccessors",
    "module": "ember-platform",
    "export": "hasAccessors",
    "deprecated": true,
    "replacement": {
      "module": "@ember/polyfills",
      "export": "hasPropertyAccessors"
    }
  },
  {
    "global": "Ember.keys",
    "module": "ember-platform",
    "export": "keys",
    "deprecated": true,
    "replacement": {
      "module": "@ember/polyfills",
      "export": "keys"
    }
  },
  {
    "global": "Ember.Route",
    "module": "ember-route",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/routing/route",
      "export": "default"
    }
  },
  {
    "global": "Ember.Router",
    "module": "ember-router",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/routing/router",
      "export": "default"
    }
  },
  {
    "global": "Ember.run",
    "module": "ember-runloop",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "run"
    }
  },
  {
    "global": "Ember.run.begin",
    "module": "ember-runloop",
    "export": "begin",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "begin"
    }
  },
  {
    "global": "Ember.run.bind",
    "module": "ember-runloop",
    "export": "bind",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "bind"
    }
  },
  {
    "global": "Ember.run.cancel",
    "module": "ember-runloop",
    "export": "cancel",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "cancel"
    }
  },
  {
    "global": "Ember.run.debounce",
    "module": "ember-runloop",
    "export": "debounce",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "debounce"
    }
  },
  {
    "global": "Ember.run.end",
    "module": "ember-runloop",
    "export": "end",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "end"
    }
  },
  {
    "global": "Ember.run.join",
    "module": "ember-runloop",
    "export": "join",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "join"
    }
  },
  {
    "global": "Ember.run.later",
    "module": "ember-runloop",
    "export": "later",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "later"
    }
  },
  {
    "global": "Ember.run.next",
    "module": "ember-runloop",
    "export": "next",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "next"
    }
  },
  {
    "global": "Ember.run.once",
    "module": "ember-runloop",
    "export": "once",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "once"
    }
  },
  {
    "global": "Ember.run.schedule",
    "module": "ember-runloop",
    "export": "schedule",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "schedule"
    }
  },
  {
    "global": "Ember.run.scheduleOnce",
    "module": "ember-runloop",
    "export": "scheduleOnce",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "scheduleOnce"
    }
  },
  {
    "global": "Ember.run.throttle",
    "module": "ember-runloop",
    "export": "throttle",
    "deprecated": true,
    "replacement": {
      "module": "@ember/runloop",
      "export": "throttle"
    }
  },
  {
    "global": "Ember.Service",
    "module": "ember-service",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/service",
      "export": "default"
    }
  },
  {
    "global": "Ember.inject.service",
    "module": "ember-service/inject",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/service",
      "export": "inject"
    }
  },
  {
    "global": "Ember.OrderedSet/",
    "module": "ember-set/ordered",
    "export": "default",
    "deprecated": true
  },
  {
    "global": "Ember.String.camelize",
    "module": "ember-string",
    "export": "camelize",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "camelize"
    }
  },
  {
    "global": "Ember.String.capitalize",
    "module": "ember-string",
    "export": "capitalize",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "capitalize"
    }
  },
  {
    "global": "Ember.String.classify",
    "module": "ember-string",
    "export": "classify",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "classify"
    }
  },
  {
    "global": "Ember.String.dasherize",
    "module": "ember-string",
    "export": "dasherize",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "dasherize"
    }
  },
  {
    "global": "Ember.String.decamelize",
    "module": "ember-string",
    "export": "decamelize",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "decamelize"
    }
  },
  {
    "global": "Ember.String.fmt",
    "module": "ember-string",
    "export": "fmt",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "fmt"
    }
  },
  {
    "global": "Ember.String.htmlSafe",
    "module": "ember-string",
    "export": "htmlSafe",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "htmlSafe"
    }
  },
  {
    "global": "Ember.String.loc",
    "module": "ember-string",
    "export": "loc",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "loc"
    }
  },
  {
    "global": "Ember.String.underscore",
    "module": "ember-string",
    "export": "underscore",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "underscore"
    }
  },
  {
    "global": "Ember.String.w",
    "module": "ember-string",
    "export": "w",
    "deprecated": true,
    "replacement": {
      "module": "@ember/string",
      "export": "w"
    }
  },
  {
    "global": "Ember.isBlank",
    "module": "ember-utils",
    "export": "isBlank",
    "deprecated": true,
    "replacement": {
      "module": "@ember/utils",
      "export": "isBlank"
    }
  },
  {
    "global": "Ember.isEmpty",
    "module": "ember-utils",
    "export": "isEmpty",
    "deprecated": true,
    "replacement": {
      "module": "@ember/utils",
      "export": "isEmpty"
    }
  },
  {
    "global": "Ember.isNone",
    "module": "ember-utils",
    "export": "isNone",
    "deprecated": true,
    "replacement": {
      "module": "@ember/utils",
      "export": "isNone"
    }
  },
  {
    "global": "Ember.isPresent",
    "module": "ember-utils",
    "export": "isPresent",
    "deprecated": true,
    "replacement": {
      "module": "@ember/utils",
      "export": "isPresent"
    }
  },
  {
    "global": "Ember.tryInvoke",
    "module": "ember-utils",
    "export": "tryInvoke",
    "deprecated": true,
    "replacement": {
      "module": "@ember/utils",
      "export": "tryInvoke"
    }
  },
  {
    "global": "Ember.typeOf",
    "module": "ember-utils",
    "export": "typeOf",
    "deprecated": true,
    "replacement": {
      "module": "@ember/utils",
      "export": "typeOf"
    }
  },
  {
    "global": "Ember.computed",
    "module": "ember-computed",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object",
      "export": "computed"
    }
  },
  {
    "global": "Ember.computed.empty",
    "module": "ember-computed",
    "export": "empty",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "empty"
    }
  },
  {
    "global": "Ember.computed.notEmpty",
    "module": "ember-computed",
    "export": "notEmpty",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "notEmpty"
    }
  },
  {
    "global": "Ember.computed.none",
    "module": "ember-computed",
    "export": "none",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "none"
    }
  },
  {
    "global": "Ember.computed.not",
    "module": "ember-computed",
    "export": "not",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "not"
    }
  },
  {
    "global": "Ember.computed.bool",
    "module": "ember-computed",
    "export": "bool",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "bool"
    }
  },
  {
    "global": "Ember.computed.match",
    "module": "ember-computed",
    "export": "match",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "match"
    }
  },
  {
    "global": "Ember.computed.equal",
    "module": "ember-computed",
    "export": "equal",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "equal"
    }
  },
  {
    "global": "Ember.computed.gt",
    "module": "ember-computed",
    "export": "gt",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "gt"
    }
  },
  {
    "global": "Ember.computed.gte",
    "module": "ember-computed",
    "export": "gte",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "gte"
    }
  },
  {
    "global": "Ember.computed.lt",
    "module": "ember-computed",
    "export": "lt",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "lt"
    }
  },
  {
    "global": "Ember.computed.lte",
    "module": "ember-computed",
    "export": "lte",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "lte"
    }
  },
  {
    "global": "Ember.computed.alias",
    "module": "ember-computed",
    "export": "alias",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "alias"
    }
  },
  {
    "global": "Ember.computed.oneWay",
    "module": "ember-computed",
    "export": "oneWay",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "oneWay"
    }
  },
  {
    "global": "Ember.computed.reads",
    "module": "ember-computed",
    "export": "reads",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "reads"
    }
  },
  {
    "global": "Ember.computed.readOnly",
    "module": "ember-computed",
    "export": "readOnly",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "readOnly"
    }
  },
  {
    "global": "Ember.computed.deprecatingAlias",
    "module": "ember-computed",
    "export": "deprecatingAlias",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "deprecatingAlias"
    }
  },
  {
    "global": "Ember.computed.and",
    "module": "ember-computed",
    "export": "and",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "and"
    }
  },
  {
    "global": "Ember.computed.or",
    "module": "ember-computed",
    "export": "or",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "or"
    }
  },
  {
    "global": "Ember.computed.collect",
    "module": "ember-computed",
    "export": "collect",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "collect"
    }
  },
  {
    "global": "Ember.computed.sum",
    "module": "ember-computed",
    "export": "sum",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "sum"
    }
  },
  {
    "global": "Ember.computed.min",
    "module": "ember-computed",
    "export": "min",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "min"
    }
  },
  {
    "global": "Ember.computed.max",
    "module": "ember-computed",
    "export": "max",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "max"
    }
  },
  {
    "global": "Ember.computed.map",
    "module": "ember-computed",
    "export": "map",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "map"
    }
  },
  {
    "global": "Ember.computed.sort",
    "module": "ember-computed",
    "export": "sort",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "sort"
    }
  },
  {
    "global": "Ember.computed.setDiff",
    "module": "ember-computed",
    "export": "setDiff",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "setDiff"
    }
  },
  {
    "global": "Ember.computed.mapBy",
    "module": "ember-computed",
    "export": "mapBy",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "mapBy"
    }
  },
  {
    "global": "Ember.computed.mapProperty",
    "module": "ember-computed",
    "export": "mapProperty",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "mapProperty"
    }
  },
  {
    "global": "Ember.computed.filter",
    "module": "ember-computed",
    "export": "filter",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "filter"
    }
  },
  {
    "global": "Ember.computed.filterBy",
    "module": "ember-computed",
    "export": "filterBy",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "filterBy"
    }
  },
  {
    "global": "Ember.computed.filterProperty",
    "module": "ember-computed",
    "export": "filterProperty",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "filterProperty"
    }
  },
  {
    "global": "Ember.computed.uniq",
    "module": "ember-computed",
    "export": "uniq",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "uniq"
    }
  },
  {
    "global": "Ember.computed.union",
    "module": "ember-computed",
    "export": "union",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "union"
    }
  },
  {
    "global": "Ember.computed.intersect",
    "module": "ember-computed",
    "export": "intersect",
    "deprecated": true,
    "replacement": {
      "module": "@ember/object/computed",
      "export": "intersect"
    }
  },
  {
    "global": "Ember.Test",
    "module": "ember-test",
    "export": "default",
    "deprecated": true
  },
  {
    "global": "Ember.Test.Adapter",
    "module": "ember-test/adapter",
    "export": "default",
    "deprecated": true,
    "replacement": {
      "module": "@ember/test/adapter",
      "export": "default"
    }
  },
  {
    "global": "Ember.Test.QUnitAdapter",
    "module": "ember-test/qunit-adapter",
    "export": "default",
    "deprecated": true
  }
]
