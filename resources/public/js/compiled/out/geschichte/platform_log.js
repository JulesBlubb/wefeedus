// Compiled by ClojureScript 0.0-2227
goog.provide('geschichte.platform_log');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
geschichte.platform_log.debug = (function() { 
var debug__delegate = function (args){return console.debug(cljs.core.apply.call(null,cljs.core.pr_str,args));
};
var debug = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return debug__delegate.call(this,args);};
debug.cljs$lang$maxFixedArity = 0;
debug.cljs$lang$applyTo = (function (arglist__23428){
var args = cljs.core.seq(arglist__23428);
return debug__delegate(args);
});
debug.cljs$core$IFn$_invoke$arity$variadic = debug__delegate;
return debug;
})()
;
/**
* @param {...*} var_args
*/
geschichte.platform_log.info = (function() { 
var info__delegate = function (args){return console.info(cljs.core.apply.call(null,cljs.core.pr_str,args));
};
var info = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,args);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__23429){
var args = cljs.core.seq(arglist__23429);
return info__delegate(args);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
/**
* @param {...*} var_args
*/
geschichte.platform_log.warn = (function() { 
var warn__delegate = function (args){return console.warn(cljs.core.apply.call(null,cljs.core.pr_str,args));
};
var warn = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return warn__delegate.call(this,args);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__23430){
var args = cljs.core.seq(arglist__23430);
return warn__delegate(args);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
/**
* @param {...*} var_args
*/
geschichte.platform_log.error = (function() { 
var error__delegate = function (args){return console.error(cljs.core.apply.call(null,cljs.core.pr_str,args));
};
var error = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return error__delegate.call(this,args);};
error.cljs$lang$maxFixedArity = 0;
error.cljs$lang$applyTo = (function (arglist__23431){
var args = cljs.core.seq(arglist__23431);
return error__delegate(args);
});
error.cljs$core$IFn$_invoke$arity$variadic = error__delegate;
return error;
})()
;

//# sourceMappingURL=platform_log.js.map