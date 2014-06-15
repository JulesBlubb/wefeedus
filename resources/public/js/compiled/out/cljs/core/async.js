// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24164 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24164 = (function (f,fn_handler,meta24165){
this.f = f;
this.fn_handler = fn_handler;
this.meta24165 = meta24165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24164.cljs$lang$type = true;
cljs.core.async.t24164.cljs$lang$ctorStr = "cljs.core.async/t24164";
cljs.core.async.t24164.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t24164");
});
cljs.core.async.t24164.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24166){var self__ = this;
var _24166__$1 = this;return self__.meta24165;
});
cljs.core.async.t24164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24166,meta24165__$1){var self__ = this;
var _24166__$1 = this;return (new cljs.core.async.t24164(self__.f,self__.fn_handler,meta24165__$1));
});
cljs.core.async.__GT_t24164 = (function __GT_t24164(f__$1,fn_handler__$1,meta24165){return (new cljs.core.async.t24164(f__$1,fn_handler__$1,meta24165));
});
}
return (new cljs.core.async.t24164(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24168 = buff;if(G__24168)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__24168.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24168.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24168);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_24169 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24169);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24169,ret){
return (function (){return fn1.call(null,val_24169);
});})(val_24169,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___24170 = n;var x_24171 = 0;while(true){
if((x_24171 < n__4395__auto___24170))
{(a[x_24171] = 0);
{
var G__24172 = (x_24171 + 1);
x_24171 = G__24172;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24173 = (i + 1);
i = G__24173;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24177 = (function (flag,alt_flag,meta24178){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24178 = meta24178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24177.cljs$lang$type = true;
cljs.core.async.t24177.cljs$lang$ctorStr = "cljs.core.async/t24177";
cljs.core.async.t24177.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t24177");
});})(flag))
;
cljs.core.async.t24177.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24179){var self__ = this;
var _24179__$1 = this;return self__.meta24178;
});})(flag))
;
cljs.core.async.t24177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24179,meta24178__$1){var self__ = this;
var _24179__$1 = this;return (new cljs.core.async.t24177(self__.flag,self__.alt_flag,meta24178__$1));
});})(flag))
;
cljs.core.async.__GT_t24177 = ((function (flag){
return (function __GT_t24177(flag__$1,alt_flag__$1,meta24178){return (new cljs.core.async.t24177(flag__$1,alt_flag__$1,meta24178));
});})(flag))
;
}
return (new cljs.core.async.t24177(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24183 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24183 = (function (cb,flag,alt_handler,meta24184){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24184 = meta24184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24183.cljs$lang$type = true;
cljs.core.async.t24183.cljs$lang$ctorStr = "cljs.core.async/t24183";
cljs.core.async.t24183.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t24183");
});
cljs.core.async.t24183.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24185){var self__ = this;
var _24185__$1 = this;return self__.meta24184;
});
cljs.core.async.t24183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24185,meta24184__$1){var self__ = this;
var _24185__$1 = this;return (new cljs.core.async.t24183(self__.cb,self__.flag,self__.alt_handler,meta24184__$1));
});
cljs.core.async.__GT_t24183 = (function __GT_t24183(cb__$1,flag__$1,alt_handler__$1,meta24184){return (new cljs.core.async.t24183(cb__$1,flag__$1,alt_handler__$1,meta24184));
});
}
return (new cljs.core.async.t24183(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24186_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24186_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24187_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24187_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24188 = (i + 1);
i = G__24188;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3527__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24189){var map__24191 = p__24189;var map__24191__$1 = ((cljs.core.seq_QMARK_.call(null,map__24191))?cljs.core.apply.call(null,cljs.core.hash_map,map__24191):map__24191);var opts = map__24191__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24189 = null;if (arguments.length > 1) {
  p__24189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24189);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24192){
var ports = cljs.core.first(arglist__24192);
var p__24189 = cljs.core.rest(arglist__24192);
return alts_BANG___delegate(ports,p__24189);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24200 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24200 = (function (ch,f,map_LT_,meta24201){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24201 = meta24201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24200.cljs$lang$type = true;
cljs.core.async.t24200.cljs$lang$ctorStr = "cljs.core.async/t24200";
cljs.core.async.t24200.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t24200");
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24203 = (function (fn1,_,meta24201,ch,f,map_LT_,meta24204){
this.fn1 = fn1;
this._ = _;
this.meta24201 = meta24201;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24204 = meta24204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24203.cljs$lang$type = true;
cljs.core.async.t24203.cljs$lang$ctorStr = "cljs.core.async/t24203";
cljs.core.async.t24203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t24203");
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24193_SHARP_){return f1.call(null,(((p1__24193_SHARP_ == null))?null:self__.f.call(null,p1__24193_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24205){var self__ = this;
var _24205__$1 = this;return self__.meta24204;
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24205,meta24204__$1){var self__ = this;
var _24205__$1 = this;return (new cljs.core.async.t24203(self__.fn1,self__._,self__.meta24201,self__.ch,self__.f,self__.map_LT_,meta24204__$1));
});})(___$1))
;
cljs.core.async.__GT_t24203 = ((function (___$1){
return (function __GT_t24203(fn1__$1,___$2,meta24201__$1,ch__$2,f__$2,map_LT___$2,meta24204){return (new cljs.core.async.t24203(fn1__$1,___$2,meta24201__$1,ch__$2,f__$2,map_LT___$2,meta24204));
});})(___$1))
;
}
return (new cljs.core.async.t24203(fn1,___$1,self__.meta24201,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24202){var self__ = this;
var _24202__$1 = this;return self__.meta24201;
});
cljs.core.async.t24200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24202,meta24201__$1){var self__ = this;
var _24202__$1 = this;return (new cljs.core.async.t24200(self__.ch,self__.f,self__.map_LT_,meta24201__$1));
});
cljs.core.async.__GT_t24200 = (function __GT_t24200(ch__$1,f__$1,map_LT___$1,meta24201){return (new cljs.core.async.t24200(ch__$1,f__$1,map_LT___$1,meta24201));
});
}
return (new cljs.core.async.t24200(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24209 = (function (ch,f,map_GT_,meta24210){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24210 = meta24210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24209.cljs$lang$type = true;
cljs.core.async.t24209.cljs$lang$ctorStr = "cljs.core.async/t24209";
cljs.core.async.t24209.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t24209");
});
cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24211){var self__ = this;
var _24211__$1 = this;return self__.meta24210;
});
cljs.core.async.t24209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24211,meta24210__$1){var self__ = this;
var _24211__$1 = this;return (new cljs.core.async.t24209(self__.ch,self__.f,self__.map_GT_,meta24210__$1));
});
cljs.core.async.__GT_t24209 = (function __GT_t24209(ch__$1,f__$1,map_GT___$1,meta24210){return (new cljs.core.async.t24209(ch__$1,f__$1,map_GT___$1,meta24210));
});
}
return (new cljs.core.async.t24209(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24215 = (function (ch,p,filter_GT_,meta24216){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24216 = meta24216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24215.cljs$lang$type = true;
cljs.core.async.t24215.cljs$lang$ctorStr = "cljs.core.async/t24215";
cljs.core.async.t24215.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t24215");
});
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24217){var self__ = this;
var _24217__$1 = this;return self__.meta24216;
});
cljs.core.async.t24215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24217,meta24216__$1){var self__ = this;
var _24217__$1 = this;return (new cljs.core.async.t24215(self__.ch,self__.p,self__.filter_GT_,meta24216__$1));
});
cljs.core.async.__GT_t24215 = (function __GT_t24215(ch__$1,p__$1,filter_GT___$1,meta24216){return (new cljs.core.async.t24215(ch__$1,p__$1,filter_GT___$1,meta24216));
});
}
return (new cljs.core.async.t24215(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8594__auto___24300 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___24300,out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___24300,out){
return (function (state_24279){var state_val_24280 = (state_24279[1]);if((state_val_24280 === 7))
{var inst_24275 = (state_24279[2]);var state_24279__$1 = state_24279;var statearr_24281_24301 = state_24279__$1;(statearr_24281_24301[2] = inst_24275);
(statearr_24281_24301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 1))
{var state_24279__$1 = state_24279;var statearr_24282_24302 = state_24279__$1;(statearr_24282_24302[2] = null);
(statearr_24282_24302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 4))
{var inst_24261 = (state_24279[7]);var inst_24261__$1 = (state_24279[2]);var inst_24262 = (inst_24261__$1 == null);var state_24279__$1 = (function (){var statearr_24283 = state_24279;(statearr_24283[7] = inst_24261__$1);
return statearr_24283;
})();if(cljs.core.truth_(inst_24262))
{var statearr_24284_24303 = state_24279__$1;(statearr_24284_24303[1] = 5);
} else
{var statearr_24285_24304 = state_24279__$1;(statearr_24285_24304[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 6))
{var inst_24261 = (state_24279[7]);var inst_24266 = p.call(null,inst_24261);var state_24279__$1 = state_24279;if(cljs.core.truth_(inst_24266))
{var statearr_24286_24305 = state_24279__$1;(statearr_24286_24305[1] = 8);
} else
{var statearr_24287_24306 = state_24279__$1;(statearr_24287_24306[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 3))
{var inst_24277 = (state_24279[2]);var state_24279__$1 = state_24279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24279__$1,inst_24277);
} else
{if((state_val_24280 === 2))
{var state_24279__$1 = state_24279;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24279__$1,4,ch);
} else
{if((state_val_24280 === 11))
{var inst_24269 = (state_24279[2]);var state_24279__$1 = state_24279;var statearr_24288_24307 = state_24279__$1;(statearr_24288_24307[2] = inst_24269);
(statearr_24288_24307[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 9))
{var state_24279__$1 = state_24279;var statearr_24289_24308 = state_24279__$1;(statearr_24289_24308[2] = null);
(statearr_24289_24308[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 5))
{var inst_24264 = cljs.core.async.close_BANG_.call(null,out);var state_24279__$1 = state_24279;var statearr_24290_24309 = state_24279__$1;(statearr_24290_24309[2] = inst_24264);
(statearr_24290_24309[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 10))
{var inst_24272 = (state_24279[2]);var state_24279__$1 = (function (){var statearr_24291 = state_24279;(statearr_24291[8] = inst_24272);
return statearr_24291;
})();var statearr_24292_24310 = state_24279__$1;(statearr_24292_24310[2] = null);
(statearr_24292_24310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24280 === 8))
{var inst_24261 = (state_24279[7]);var state_24279__$1 = state_24279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24279__$1,11,out,inst_24261);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___24300,out))
;return ((function (switch__8529__auto__,c__8594__auto___24300,out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_24296 = [null,null,null,null,null,null,null,null,null];(statearr_24296[0] = state_machine__8530__auto__);
(statearr_24296[1] = 1);
return statearr_24296;
});
var state_machine__8530__auto____1 = (function (state_24279){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_24279);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e24297){if((e24297 instanceof Object))
{var ex__8533__auto__ = e24297;var statearr_24298_24311 = state_24279;(statearr_24298_24311[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24279);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24312 = state_24279;
state_24279 = G__24312;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_24279){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_24279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___24300,out))
})();var state__8596__auto__ = (function (){var statearr_24299 = f__8595__auto__.call(null);(statearr_24299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___24300);
return statearr_24299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___24300,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_24478){var state_val_24479 = (state_24478[1]);if((state_val_24479 === 7))
{var inst_24474 = (state_24478[2]);var state_24478__$1 = state_24478;var statearr_24480_24521 = state_24478__$1;(statearr_24480_24521[2] = inst_24474);
(statearr_24480_24521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 20))
{var inst_24444 = (state_24478[7]);var inst_24455 = (state_24478[2]);var inst_24456 = cljs.core.next.call(null,inst_24444);var inst_24430 = inst_24456;var inst_24431 = null;var inst_24432 = 0;var inst_24433 = 0;var state_24478__$1 = (function (){var statearr_24481 = state_24478;(statearr_24481[8] = inst_24432);
(statearr_24481[9] = inst_24455);
(statearr_24481[10] = inst_24431);
(statearr_24481[11] = inst_24433);
(statearr_24481[12] = inst_24430);
return statearr_24481;
})();var statearr_24482_24522 = state_24478__$1;(statearr_24482_24522[2] = null);
(statearr_24482_24522[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 1))
{var state_24478__$1 = state_24478;var statearr_24483_24523 = state_24478__$1;(statearr_24483_24523[2] = null);
(statearr_24483_24523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 4))
{var inst_24419 = (state_24478[13]);var inst_24419__$1 = (state_24478[2]);var inst_24420 = (inst_24419__$1 == null);var state_24478__$1 = (function (){var statearr_24484 = state_24478;(statearr_24484[13] = inst_24419__$1);
return statearr_24484;
})();if(cljs.core.truth_(inst_24420))
{var statearr_24485_24524 = state_24478__$1;(statearr_24485_24524[1] = 5);
} else
{var statearr_24486_24525 = state_24478__$1;(statearr_24486_24525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 15))
{var state_24478__$1 = state_24478;var statearr_24490_24526 = state_24478__$1;(statearr_24490_24526[2] = null);
(statearr_24490_24526[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 21))
{var state_24478__$1 = state_24478;var statearr_24491_24527 = state_24478__$1;(statearr_24491_24527[2] = null);
(statearr_24491_24527[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 13))
{var inst_24432 = (state_24478[8]);var inst_24431 = (state_24478[10]);var inst_24433 = (state_24478[11]);var inst_24430 = (state_24478[12]);var inst_24440 = (state_24478[2]);var inst_24441 = (inst_24433 + 1);var tmp24487 = inst_24432;var tmp24488 = inst_24431;var tmp24489 = inst_24430;var inst_24430__$1 = tmp24489;var inst_24431__$1 = tmp24488;var inst_24432__$1 = tmp24487;var inst_24433__$1 = inst_24441;var state_24478__$1 = (function (){var statearr_24492 = state_24478;(statearr_24492[8] = inst_24432__$1);
(statearr_24492[10] = inst_24431__$1);
(statearr_24492[14] = inst_24440);
(statearr_24492[11] = inst_24433__$1);
(statearr_24492[12] = inst_24430__$1);
return statearr_24492;
})();var statearr_24493_24528 = state_24478__$1;(statearr_24493_24528[2] = null);
(statearr_24493_24528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 22))
{var state_24478__$1 = state_24478;var statearr_24494_24529 = state_24478__$1;(statearr_24494_24529[2] = null);
(statearr_24494_24529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 6))
{var inst_24419 = (state_24478[13]);var inst_24428 = f.call(null,inst_24419);var inst_24429 = cljs.core.seq.call(null,inst_24428);var inst_24430 = inst_24429;var inst_24431 = null;var inst_24432 = 0;var inst_24433 = 0;var state_24478__$1 = (function (){var statearr_24495 = state_24478;(statearr_24495[8] = inst_24432);
(statearr_24495[10] = inst_24431);
(statearr_24495[11] = inst_24433);
(statearr_24495[12] = inst_24430);
return statearr_24495;
})();var statearr_24496_24530 = state_24478__$1;(statearr_24496_24530[2] = null);
(statearr_24496_24530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 17))
{var inst_24444 = (state_24478[7]);var inst_24448 = cljs.core.chunk_first.call(null,inst_24444);var inst_24449 = cljs.core.chunk_rest.call(null,inst_24444);var inst_24450 = cljs.core.count.call(null,inst_24448);var inst_24430 = inst_24449;var inst_24431 = inst_24448;var inst_24432 = inst_24450;var inst_24433 = 0;var state_24478__$1 = (function (){var statearr_24497 = state_24478;(statearr_24497[8] = inst_24432);
(statearr_24497[10] = inst_24431);
(statearr_24497[11] = inst_24433);
(statearr_24497[12] = inst_24430);
return statearr_24497;
})();var statearr_24498_24531 = state_24478__$1;(statearr_24498_24531[2] = null);
(statearr_24498_24531[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 3))
{var inst_24476 = (state_24478[2]);var state_24478__$1 = state_24478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24478__$1,inst_24476);
} else
{if((state_val_24479 === 12))
{var inst_24464 = (state_24478[2]);var state_24478__$1 = state_24478;var statearr_24499_24532 = state_24478__$1;(statearr_24499_24532[2] = inst_24464);
(statearr_24499_24532[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 2))
{var state_24478__$1 = state_24478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24478__$1,4,in$);
} else
{if((state_val_24479 === 23))
{var inst_24472 = (state_24478[2]);var state_24478__$1 = state_24478;var statearr_24500_24533 = state_24478__$1;(statearr_24500_24533[2] = inst_24472);
(statearr_24500_24533[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 19))
{var inst_24459 = (state_24478[2]);var state_24478__$1 = state_24478;var statearr_24501_24534 = state_24478__$1;(statearr_24501_24534[2] = inst_24459);
(statearr_24501_24534[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 11))
{var inst_24444 = (state_24478[7]);var inst_24430 = (state_24478[12]);var inst_24444__$1 = cljs.core.seq.call(null,inst_24430);var state_24478__$1 = (function (){var statearr_24502 = state_24478;(statearr_24502[7] = inst_24444__$1);
return statearr_24502;
})();if(inst_24444__$1)
{var statearr_24503_24535 = state_24478__$1;(statearr_24503_24535[1] = 14);
} else
{var statearr_24504_24536 = state_24478__$1;(statearr_24504_24536[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 9))
{var inst_24466 = (state_24478[2]);var inst_24467 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_24478__$1 = (function (){var statearr_24505 = state_24478;(statearr_24505[15] = inst_24466);
return statearr_24505;
})();if(cljs.core.truth_(inst_24467))
{var statearr_24506_24537 = state_24478__$1;(statearr_24506_24537[1] = 21);
} else
{var statearr_24507_24538 = state_24478__$1;(statearr_24507_24538[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 5))
{var inst_24422 = cljs.core.async.close_BANG_.call(null,out);var state_24478__$1 = state_24478;var statearr_24508_24539 = state_24478__$1;(statearr_24508_24539[2] = inst_24422);
(statearr_24508_24539[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 14))
{var inst_24444 = (state_24478[7]);var inst_24446 = cljs.core.chunked_seq_QMARK_.call(null,inst_24444);var state_24478__$1 = state_24478;if(inst_24446)
{var statearr_24509_24540 = state_24478__$1;(statearr_24509_24540[1] = 17);
} else
{var statearr_24510_24541 = state_24478__$1;(statearr_24510_24541[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 16))
{var inst_24462 = (state_24478[2]);var state_24478__$1 = state_24478;var statearr_24511_24542 = state_24478__$1;(statearr_24511_24542[2] = inst_24462);
(statearr_24511_24542[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24479 === 10))
{var inst_24431 = (state_24478[10]);var inst_24433 = (state_24478[11]);var inst_24438 = cljs.core._nth.call(null,inst_24431,inst_24433);var state_24478__$1 = state_24478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24478__$1,13,out,inst_24438);
} else
{if((state_val_24479 === 18))
{var inst_24444 = (state_24478[7]);var inst_24453 = cljs.core.first.call(null,inst_24444);var state_24478__$1 = state_24478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24478__$1,20,out,inst_24453);
} else
{if((state_val_24479 === 8))
{var inst_24432 = (state_24478[8]);var inst_24433 = (state_24478[11]);var inst_24435 = (inst_24433 < inst_24432);var inst_24436 = inst_24435;var state_24478__$1 = state_24478;if(cljs.core.truth_(inst_24436))
{var statearr_24512_24543 = state_24478__$1;(statearr_24512_24543[1] = 10);
} else
{var statearr_24513_24544 = state_24478__$1;(statearr_24513_24544[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_24517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24517[0] = state_machine__8530__auto__);
(statearr_24517[1] = 1);
return statearr_24517;
});
var state_machine__8530__auto____1 = (function (state_24478){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_24478);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e24518){if((e24518 instanceof Object))
{var ex__8533__auto__ = e24518;var statearr_24519_24545 = state_24478;(statearr_24519_24545[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24546 = state_24478;
state_24478 = G__24546;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_24478){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_24478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_24520 = f__8595__auto__.call(null);(statearr_24520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_24520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8594__auto___24641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___24641){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___24641){
return (function (state_24617){var state_val_24618 = (state_24617[1]);if((state_val_24618 === 7))
{var inst_24613 = (state_24617[2]);var state_24617__$1 = state_24617;var statearr_24619_24642 = state_24617__$1;(statearr_24619_24642[2] = inst_24613);
(statearr_24619_24642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 1))
{var state_24617__$1 = state_24617;var statearr_24620_24643 = state_24617__$1;(statearr_24620_24643[2] = null);
(statearr_24620_24643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 4))
{var inst_24596 = (state_24617[7]);var inst_24596__$1 = (state_24617[2]);var inst_24597 = (inst_24596__$1 == null);var state_24617__$1 = (function (){var statearr_24621 = state_24617;(statearr_24621[7] = inst_24596__$1);
return statearr_24621;
})();if(cljs.core.truth_(inst_24597))
{var statearr_24622_24644 = state_24617__$1;(statearr_24622_24644[1] = 5);
} else
{var statearr_24623_24645 = state_24617__$1;(statearr_24623_24645[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 13))
{var state_24617__$1 = state_24617;var statearr_24624_24646 = state_24617__$1;(statearr_24624_24646[2] = null);
(statearr_24624_24646[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 6))
{var inst_24596 = (state_24617[7]);var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24617__$1,11,to,inst_24596);
} else
{if((state_val_24618 === 3))
{var inst_24615 = (state_24617[2]);var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24617__$1,inst_24615);
} else
{if((state_val_24618 === 12))
{var state_24617__$1 = state_24617;var statearr_24625_24647 = state_24617__$1;(statearr_24625_24647[2] = null);
(statearr_24625_24647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 2))
{var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24617__$1,4,from);
} else
{if((state_val_24618 === 11))
{var inst_24606 = (state_24617[2]);var state_24617__$1 = state_24617;if(cljs.core.truth_(inst_24606))
{var statearr_24626_24648 = state_24617__$1;(statearr_24626_24648[1] = 12);
} else
{var statearr_24627_24649 = state_24617__$1;(statearr_24627_24649[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 9))
{var state_24617__$1 = state_24617;var statearr_24628_24650 = state_24617__$1;(statearr_24628_24650[2] = null);
(statearr_24628_24650[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 5))
{var state_24617__$1 = state_24617;if(cljs.core.truth_(close_QMARK_))
{var statearr_24629_24651 = state_24617__$1;(statearr_24629_24651[1] = 8);
} else
{var statearr_24630_24652 = state_24617__$1;(statearr_24630_24652[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 14))
{var inst_24611 = (state_24617[2]);var state_24617__$1 = state_24617;var statearr_24631_24653 = state_24617__$1;(statearr_24631_24653[2] = inst_24611);
(statearr_24631_24653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 10))
{var inst_24603 = (state_24617[2]);var state_24617__$1 = state_24617;var statearr_24632_24654 = state_24617__$1;(statearr_24632_24654[2] = inst_24603);
(statearr_24632_24654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24618 === 8))
{var inst_24600 = cljs.core.async.close_BANG_.call(null,to);var state_24617__$1 = state_24617;var statearr_24633_24655 = state_24617__$1;(statearr_24633_24655[2] = inst_24600);
(statearr_24633_24655[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___24641))
;return ((function (switch__8529__auto__,c__8594__auto___24641){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_24637 = [null,null,null,null,null,null,null,null];(statearr_24637[0] = state_machine__8530__auto__);
(statearr_24637[1] = 1);
return statearr_24637;
});
var state_machine__8530__auto____1 = (function (state_24617){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_24617);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e24638){if((e24638 instanceof Object))
{var ex__8533__auto__ = e24638;var statearr_24639_24656 = state_24617;(statearr_24639_24656[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24617);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24657 = state_24617;
state_24617 = G__24657;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_24617){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_24617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___24641))
})();var state__8596__auto__ = (function (){var statearr_24640 = f__8595__auto__.call(null);(statearr_24640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___24641);
return statearr_24640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___24641))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8594__auto___24758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___24758,tc,fc){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___24758,tc,fc){
return (function (state_24733){var state_val_24734 = (state_24733[1]);if((state_val_24734 === 7))
{var inst_24729 = (state_24733[2]);var state_24733__$1 = state_24733;var statearr_24735_24759 = state_24733__$1;(statearr_24735_24759[2] = inst_24729);
(statearr_24735_24759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 1))
{var state_24733__$1 = state_24733;var statearr_24736_24760 = state_24733__$1;(statearr_24736_24760[2] = null);
(statearr_24736_24760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 4))
{var inst_24710 = (state_24733[7]);var inst_24710__$1 = (state_24733[2]);var inst_24711 = (inst_24710__$1 == null);var state_24733__$1 = (function (){var statearr_24737 = state_24733;(statearr_24737[7] = inst_24710__$1);
return statearr_24737;
})();if(cljs.core.truth_(inst_24711))
{var statearr_24738_24761 = state_24733__$1;(statearr_24738_24761[1] = 5);
} else
{var statearr_24739_24762 = state_24733__$1;(statearr_24739_24762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 13))
{var state_24733__$1 = state_24733;var statearr_24740_24763 = state_24733__$1;(statearr_24740_24763[2] = null);
(statearr_24740_24763[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 6))
{var inst_24710 = (state_24733[7]);var inst_24716 = p.call(null,inst_24710);var state_24733__$1 = state_24733;if(cljs.core.truth_(inst_24716))
{var statearr_24741_24764 = state_24733__$1;(statearr_24741_24764[1] = 9);
} else
{var statearr_24742_24765 = state_24733__$1;(statearr_24742_24765[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 3))
{var inst_24731 = (state_24733[2]);var state_24733__$1 = state_24733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24733__$1,inst_24731);
} else
{if((state_val_24734 === 12))
{var state_24733__$1 = state_24733;var statearr_24743_24766 = state_24733__$1;(statearr_24743_24766[2] = null);
(statearr_24743_24766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 2))
{var state_24733__$1 = state_24733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24733__$1,4,ch);
} else
{if((state_val_24734 === 11))
{var inst_24710 = (state_24733[7]);var inst_24720 = (state_24733[2]);var state_24733__$1 = state_24733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24733__$1,8,inst_24720,inst_24710);
} else
{if((state_val_24734 === 9))
{var state_24733__$1 = state_24733;var statearr_24744_24767 = state_24733__$1;(statearr_24744_24767[2] = tc);
(statearr_24744_24767[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 5))
{var inst_24713 = cljs.core.async.close_BANG_.call(null,tc);var inst_24714 = cljs.core.async.close_BANG_.call(null,fc);var state_24733__$1 = (function (){var statearr_24745 = state_24733;(statearr_24745[8] = inst_24713);
return statearr_24745;
})();var statearr_24746_24768 = state_24733__$1;(statearr_24746_24768[2] = inst_24714);
(statearr_24746_24768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 14))
{var inst_24727 = (state_24733[2]);var state_24733__$1 = state_24733;var statearr_24747_24769 = state_24733__$1;(statearr_24747_24769[2] = inst_24727);
(statearr_24747_24769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 10))
{var state_24733__$1 = state_24733;var statearr_24748_24770 = state_24733__$1;(statearr_24748_24770[2] = fc);
(statearr_24748_24770[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24734 === 8))
{var inst_24722 = (state_24733[2]);var state_24733__$1 = state_24733;if(cljs.core.truth_(inst_24722))
{var statearr_24749_24771 = state_24733__$1;(statearr_24749_24771[1] = 12);
} else
{var statearr_24750_24772 = state_24733__$1;(statearr_24750_24772[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___24758,tc,fc))
;return ((function (switch__8529__auto__,c__8594__auto___24758,tc,fc){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_24754 = [null,null,null,null,null,null,null,null,null];(statearr_24754[0] = state_machine__8530__auto__);
(statearr_24754[1] = 1);
return statearr_24754;
});
var state_machine__8530__auto____1 = (function (state_24733){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_24733);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object))
{var ex__8533__auto__ = e24755;var statearr_24756_24773 = state_24733;(statearr_24756_24773[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24774 = state_24733;
state_24733 = G__24774;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_24733){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_24733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___24758,tc,fc))
})();var state__8596__auto__ = (function (){var statearr_24757 = f__8595__auto__.call(null);(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___24758);
return statearr_24757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___24758,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_24821){var state_val_24822 = (state_24821[1]);if((state_val_24822 === 7))
{var inst_24817 = (state_24821[2]);var state_24821__$1 = state_24821;var statearr_24823_24839 = state_24821__$1;(statearr_24823_24839[2] = inst_24817);
(statearr_24823_24839[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24822 === 6))
{var inst_24810 = (state_24821[7]);var inst_24807 = (state_24821[8]);var inst_24814 = f.call(null,inst_24807,inst_24810);var inst_24807__$1 = inst_24814;var state_24821__$1 = (function (){var statearr_24824 = state_24821;(statearr_24824[8] = inst_24807__$1);
return statearr_24824;
})();var statearr_24825_24840 = state_24821__$1;(statearr_24825_24840[2] = null);
(statearr_24825_24840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24822 === 5))
{var inst_24807 = (state_24821[8]);var state_24821__$1 = state_24821;var statearr_24826_24841 = state_24821__$1;(statearr_24826_24841[2] = inst_24807);
(statearr_24826_24841[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24822 === 4))
{var inst_24810 = (state_24821[7]);var inst_24810__$1 = (state_24821[2]);var inst_24811 = (inst_24810__$1 == null);var state_24821__$1 = (function (){var statearr_24827 = state_24821;(statearr_24827[7] = inst_24810__$1);
return statearr_24827;
})();if(cljs.core.truth_(inst_24811))
{var statearr_24828_24842 = state_24821__$1;(statearr_24828_24842[1] = 5);
} else
{var statearr_24829_24843 = state_24821__$1;(statearr_24829_24843[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24822 === 3))
{var inst_24819 = (state_24821[2]);var state_24821__$1 = state_24821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24821__$1,inst_24819);
} else
{if((state_val_24822 === 2))
{var state_24821__$1 = state_24821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24821__$1,4,ch);
} else
{if((state_val_24822 === 1))
{var inst_24807 = init;var state_24821__$1 = (function (){var statearr_24830 = state_24821;(statearr_24830[8] = inst_24807);
return statearr_24830;
})();var statearr_24831_24844 = state_24821__$1;(statearr_24831_24844[2] = null);
(statearr_24831_24844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_24835 = [null,null,null,null,null,null,null,null,null];(statearr_24835[0] = state_machine__8530__auto__);
(statearr_24835[1] = 1);
return statearr_24835;
});
var state_machine__8530__auto____1 = (function (state_24821){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_24821);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e24836){if((e24836 instanceof Object))
{var ex__8533__auto__ = e24836;var statearr_24837_24845 = state_24821;(statearr_24837_24845[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24846 = state_24821;
state_24821 = G__24846;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_24821){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_24821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_24838 = f__8595__auto__.call(null);(statearr_24838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_24838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_24920){var state_val_24921 = (state_24920[1]);if((state_val_24921 === 7))
{var inst_24902 = (state_24920[2]);var state_24920__$1 = state_24920;var statearr_24922_24945 = state_24920__$1;(statearr_24922_24945[2] = inst_24902);
(statearr_24922_24945[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 1))
{var inst_24896 = cljs.core.seq.call(null,coll);var inst_24897 = inst_24896;var state_24920__$1 = (function (){var statearr_24923 = state_24920;(statearr_24923[7] = inst_24897);
return statearr_24923;
})();var statearr_24924_24946 = state_24920__$1;(statearr_24924_24946[2] = null);
(statearr_24924_24946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 4))
{var inst_24897 = (state_24920[7]);var inst_24900 = cljs.core.first.call(null,inst_24897);var state_24920__$1 = state_24920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24920__$1,7,ch,inst_24900);
} else
{if((state_val_24921 === 13))
{var inst_24914 = (state_24920[2]);var state_24920__$1 = state_24920;var statearr_24925_24947 = state_24920__$1;(statearr_24925_24947[2] = inst_24914);
(statearr_24925_24947[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 6))
{var inst_24905 = (state_24920[2]);var state_24920__$1 = state_24920;if(cljs.core.truth_(inst_24905))
{var statearr_24926_24948 = state_24920__$1;(statearr_24926_24948[1] = 8);
} else
{var statearr_24927_24949 = state_24920__$1;(statearr_24927_24949[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 3))
{var inst_24918 = (state_24920[2]);var state_24920__$1 = state_24920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24920__$1,inst_24918);
} else
{if((state_val_24921 === 12))
{var state_24920__$1 = state_24920;var statearr_24928_24950 = state_24920__$1;(statearr_24928_24950[2] = null);
(statearr_24928_24950[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 2))
{var inst_24897 = (state_24920[7]);var state_24920__$1 = state_24920;if(cljs.core.truth_(inst_24897))
{var statearr_24929_24951 = state_24920__$1;(statearr_24929_24951[1] = 4);
} else
{var statearr_24930_24952 = state_24920__$1;(statearr_24930_24952[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 11))
{var inst_24911 = cljs.core.async.close_BANG_.call(null,ch);var state_24920__$1 = state_24920;var statearr_24931_24953 = state_24920__$1;(statearr_24931_24953[2] = inst_24911);
(statearr_24931_24953[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 9))
{var state_24920__$1 = state_24920;if(cljs.core.truth_(close_QMARK_))
{var statearr_24932_24954 = state_24920__$1;(statearr_24932_24954[1] = 11);
} else
{var statearr_24933_24955 = state_24920__$1;(statearr_24933_24955[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 5))
{var inst_24897 = (state_24920[7]);var state_24920__$1 = state_24920;var statearr_24934_24956 = state_24920__$1;(statearr_24934_24956[2] = inst_24897);
(statearr_24934_24956[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 10))
{var inst_24916 = (state_24920[2]);var state_24920__$1 = state_24920;var statearr_24935_24957 = state_24920__$1;(statearr_24935_24957[2] = inst_24916);
(statearr_24935_24957[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24921 === 8))
{var inst_24897 = (state_24920[7]);var inst_24907 = cljs.core.next.call(null,inst_24897);var inst_24897__$1 = inst_24907;var state_24920__$1 = (function (){var statearr_24936 = state_24920;(statearr_24936[7] = inst_24897__$1);
return statearr_24936;
})();var statearr_24937_24958 = state_24920__$1;(statearr_24937_24958[2] = null);
(statearr_24937_24958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_24941 = [null,null,null,null,null,null,null,null];(statearr_24941[0] = state_machine__8530__auto__);
(statearr_24941[1] = 1);
return statearr_24941;
});
var state_machine__8530__auto____1 = (function (state_24920){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_24920);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e24942){if((e24942 instanceof Object))
{var ex__8533__auto__ = e24942;var statearr_24943_24959 = state_24920;(statearr_24943_24959[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24960 = state_24920;
state_24920 = G__24960;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_24920){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_24920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_24944 = f__8595__auto__.call(null);(statearr_24944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_24944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24962 = {};return obj24962;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24964 = {};return obj24964;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25186 = (function (cs,ch,mult,meta25187){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25187 = meta25187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25186.cljs$lang$type = true;
cljs.core.async.t25186.cljs$lang$ctorStr = "cljs.core.async/t25186";
cljs.core.async.t25186.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25186");
});})(cs))
;
cljs.core.async.t25186.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25186.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25186.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25186.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25186.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25186.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25188){var self__ = this;
var _25188__$1 = this;return self__.meta25187;
});})(cs))
;
cljs.core.async.t25186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25188,meta25187__$1){var self__ = this;
var _25188__$1 = this;return (new cljs.core.async.t25186(self__.cs,self__.ch,self__.mult,meta25187__$1));
});})(cs))
;
cljs.core.async.__GT_t25186 = ((function (cs){
return (function __GT_t25186(cs__$1,ch__$1,mult__$1,meta25187){return (new cljs.core.async.t25186(cs__$1,ch__$1,mult__$1,meta25187));
});})(cs))
;
}
return (new cljs.core.async.t25186(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8594__auto___25407 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___25407,cs,m,dchan,dctr,done){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___25407,cs,m,dchan,dctr,done){
return (function (state_25319){var state_val_25320 = (state_25319[1]);if((state_val_25320 === 7))
{var inst_25315 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25321_25408 = state_25319__$1;(statearr_25321_25408[2] = inst_25315);
(statearr_25321_25408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 20))
{var inst_25220 = (state_25319[7]);var inst_25230 = cljs.core.first.call(null,inst_25220);var inst_25231 = cljs.core.nth.call(null,inst_25230,0,null);var inst_25232 = cljs.core.nth.call(null,inst_25230,1,null);var state_25319__$1 = (function (){var statearr_25322 = state_25319;(statearr_25322[8] = inst_25231);
return statearr_25322;
})();if(cljs.core.truth_(inst_25232))
{var statearr_25323_25409 = state_25319__$1;(statearr_25323_25409[1] = 22);
} else
{var statearr_25324_25410 = state_25319__$1;(statearr_25324_25410[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 27))
{var inst_25191 = (state_25319[9]);var inst_25267 = (state_25319[10]);var inst_25260 = (state_25319[11]);var inst_25262 = (state_25319[12]);var inst_25267__$1 = cljs.core._nth.call(null,inst_25260,inst_25262);var inst_25268 = cljs.core.async.put_BANG_.call(null,inst_25267__$1,inst_25191,done);var state_25319__$1 = (function (){var statearr_25325 = state_25319;(statearr_25325[10] = inst_25267__$1);
return statearr_25325;
})();if(cljs.core.truth_(inst_25268))
{var statearr_25326_25411 = state_25319__$1;(statearr_25326_25411[1] = 30);
} else
{var statearr_25327_25412 = state_25319__$1;(statearr_25327_25412[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 1))
{var state_25319__$1 = state_25319;var statearr_25328_25413 = state_25319__$1;(statearr_25328_25413[2] = null);
(statearr_25328_25413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 24))
{var inst_25220 = (state_25319[7]);var inst_25237 = (state_25319[2]);var inst_25238 = cljs.core.next.call(null,inst_25220);var inst_25200 = inst_25238;var inst_25201 = null;var inst_25202 = 0;var inst_25203 = 0;var state_25319__$1 = (function (){var statearr_25329 = state_25319;(statearr_25329[13] = inst_25203);
(statearr_25329[14] = inst_25201);
(statearr_25329[15] = inst_25237);
(statearr_25329[16] = inst_25202);
(statearr_25329[17] = inst_25200);
return statearr_25329;
})();var statearr_25330_25414 = state_25319__$1;(statearr_25330_25414[2] = null);
(statearr_25330_25414[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 39))
{var state_25319__$1 = state_25319;var statearr_25334_25415 = state_25319__$1;(statearr_25334_25415[2] = null);
(statearr_25334_25415[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 4))
{var inst_25191 = (state_25319[9]);var inst_25191__$1 = (state_25319[2]);var inst_25192 = (inst_25191__$1 == null);var state_25319__$1 = (function (){var statearr_25335 = state_25319;(statearr_25335[9] = inst_25191__$1);
return statearr_25335;
})();if(cljs.core.truth_(inst_25192))
{var statearr_25336_25416 = state_25319__$1;(statearr_25336_25416[1] = 5);
} else
{var statearr_25337_25417 = state_25319__$1;(statearr_25337_25417[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 15))
{var inst_25203 = (state_25319[13]);var inst_25201 = (state_25319[14]);var inst_25202 = (state_25319[16]);var inst_25200 = (state_25319[17]);var inst_25216 = (state_25319[2]);var inst_25217 = (inst_25203 + 1);var tmp25331 = inst_25201;var tmp25332 = inst_25202;var tmp25333 = inst_25200;var inst_25200__$1 = tmp25333;var inst_25201__$1 = tmp25331;var inst_25202__$1 = tmp25332;var inst_25203__$1 = inst_25217;var state_25319__$1 = (function (){var statearr_25338 = state_25319;(statearr_25338[18] = inst_25216);
(statearr_25338[13] = inst_25203__$1);
(statearr_25338[14] = inst_25201__$1);
(statearr_25338[16] = inst_25202__$1);
(statearr_25338[17] = inst_25200__$1);
return statearr_25338;
})();var statearr_25339_25418 = state_25319__$1;(statearr_25339_25418[2] = null);
(statearr_25339_25418[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 21))
{var inst_25241 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25343_25419 = state_25319__$1;(statearr_25343_25419[2] = inst_25241);
(statearr_25343_25419[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 31))
{var inst_25267 = (state_25319[10]);var inst_25271 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25272 = cljs.core.async.untap_STAR_.call(null,m,inst_25267);var state_25319__$1 = (function (){var statearr_25344 = state_25319;(statearr_25344[19] = inst_25271);
return statearr_25344;
})();var statearr_25345_25420 = state_25319__$1;(statearr_25345_25420[2] = inst_25272);
(statearr_25345_25420[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 32))
{var inst_25259 = (state_25319[20]);var inst_25261 = (state_25319[21]);var inst_25260 = (state_25319[11]);var inst_25262 = (state_25319[12]);var inst_25274 = (state_25319[2]);var inst_25275 = (inst_25262 + 1);var tmp25340 = inst_25259;var tmp25341 = inst_25261;var tmp25342 = inst_25260;var inst_25259__$1 = tmp25340;var inst_25260__$1 = tmp25342;var inst_25261__$1 = tmp25341;var inst_25262__$1 = inst_25275;var state_25319__$1 = (function (){var statearr_25346 = state_25319;(statearr_25346[20] = inst_25259__$1);
(statearr_25346[21] = inst_25261__$1);
(statearr_25346[11] = inst_25260__$1);
(statearr_25346[12] = inst_25262__$1);
(statearr_25346[22] = inst_25274);
return statearr_25346;
})();var statearr_25347_25421 = state_25319__$1;(statearr_25347_25421[2] = null);
(statearr_25347_25421[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 40))
{var inst_25287 = (state_25319[23]);var inst_25291 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25292 = cljs.core.async.untap_STAR_.call(null,m,inst_25287);var state_25319__$1 = (function (){var statearr_25348 = state_25319;(statearr_25348[24] = inst_25291);
return statearr_25348;
})();var statearr_25349_25422 = state_25319__$1;(statearr_25349_25422[2] = inst_25292);
(statearr_25349_25422[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 33))
{var inst_25278 = (state_25319[25]);var inst_25280 = cljs.core.chunked_seq_QMARK_.call(null,inst_25278);var state_25319__$1 = state_25319;if(inst_25280)
{var statearr_25350_25423 = state_25319__$1;(statearr_25350_25423[1] = 36);
} else
{var statearr_25351_25424 = state_25319__$1;(statearr_25351_25424[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 13))
{var inst_25210 = (state_25319[26]);var inst_25213 = cljs.core.async.close_BANG_.call(null,inst_25210);var state_25319__$1 = state_25319;var statearr_25352_25425 = state_25319__$1;(statearr_25352_25425[2] = inst_25213);
(statearr_25352_25425[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 22))
{var inst_25231 = (state_25319[8]);var inst_25234 = cljs.core.async.close_BANG_.call(null,inst_25231);var state_25319__$1 = state_25319;var statearr_25353_25426 = state_25319__$1;(statearr_25353_25426[2] = inst_25234);
(statearr_25353_25426[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 36))
{var inst_25278 = (state_25319[25]);var inst_25282 = cljs.core.chunk_first.call(null,inst_25278);var inst_25283 = cljs.core.chunk_rest.call(null,inst_25278);var inst_25284 = cljs.core.count.call(null,inst_25282);var inst_25259 = inst_25283;var inst_25260 = inst_25282;var inst_25261 = inst_25284;var inst_25262 = 0;var state_25319__$1 = (function (){var statearr_25354 = state_25319;(statearr_25354[20] = inst_25259);
(statearr_25354[21] = inst_25261);
(statearr_25354[11] = inst_25260);
(statearr_25354[12] = inst_25262);
return statearr_25354;
})();var statearr_25355_25427 = state_25319__$1;(statearr_25355_25427[2] = null);
(statearr_25355_25427[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 41))
{var inst_25278 = (state_25319[25]);var inst_25294 = (state_25319[2]);var inst_25295 = cljs.core.next.call(null,inst_25278);var inst_25259 = inst_25295;var inst_25260 = null;var inst_25261 = 0;var inst_25262 = 0;var state_25319__$1 = (function (){var statearr_25356 = state_25319;(statearr_25356[20] = inst_25259);
(statearr_25356[27] = inst_25294);
(statearr_25356[21] = inst_25261);
(statearr_25356[11] = inst_25260);
(statearr_25356[12] = inst_25262);
return statearr_25356;
})();var statearr_25357_25428 = state_25319__$1;(statearr_25357_25428[2] = null);
(statearr_25357_25428[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 43))
{var state_25319__$1 = state_25319;var statearr_25358_25429 = state_25319__$1;(statearr_25358_25429[2] = null);
(statearr_25358_25429[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 29))
{var inst_25303 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25359_25430 = state_25319__$1;(statearr_25359_25430[2] = inst_25303);
(statearr_25359_25430[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 44))
{var inst_25312 = (state_25319[2]);var state_25319__$1 = (function (){var statearr_25360 = state_25319;(statearr_25360[28] = inst_25312);
return statearr_25360;
})();var statearr_25361_25431 = state_25319__$1;(statearr_25361_25431[2] = null);
(statearr_25361_25431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 6))
{var inst_25251 = (state_25319[29]);var inst_25250 = cljs.core.deref.call(null,cs);var inst_25251__$1 = cljs.core.keys.call(null,inst_25250);var inst_25252 = cljs.core.count.call(null,inst_25251__$1);var inst_25253 = cljs.core.reset_BANG_.call(null,dctr,inst_25252);var inst_25258 = cljs.core.seq.call(null,inst_25251__$1);var inst_25259 = inst_25258;var inst_25260 = null;var inst_25261 = 0;var inst_25262 = 0;var state_25319__$1 = (function (){var statearr_25362 = state_25319;(statearr_25362[20] = inst_25259);
(statearr_25362[21] = inst_25261);
(statearr_25362[11] = inst_25260);
(statearr_25362[12] = inst_25262);
(statearr_25362[29] = inst_25251__$1);
(statearr_25362[30] = inst_25253);
return statearr_25362;
})();var statearr_25363_25432 = state_25319__$1;(statearr_25363_25432[2] = null);
(statearr_25363_25432[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 28))
{var inst_25259 = (state_25319[20]);var inst_25278 = (state_25319[25]);var inst_25278__$1 = cljs.core.seq.call(null,inst_25259);var state_25319__$1 = (function (){var statearr_25364 = state_25319;(statearr_25364[25] = inst_25278__$1);
return statearr_25364;
})();if(inst_25278__$1)
{var statearr_25365_25433 = state_25319__$1;(statearr_25365_25433[1] = 33);
} else
{var statearr_25366_25434 = state_25319__$1;(statearr_25366_25434[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 25))
{var inst_25261 = (state_25319[21]);var inst_25262 = (state_25319[12]);var inst_25264 = (inst_25262 < inst_25261);var inst_25265 = inst_25264;var state_25319__$1 = state_25319;if(cljs.core.truth_(inst_25265))
{var statearr_25367_25435 = state_25319__$1;(statearr_25367_25435[1] = 27);
} else
{var statearr_25368_25436 = state_25319__$1;(statearr_25368_25436[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 34))
{var state_25319__$1 = state_25319;var statearr_25369_25437 = state_25319__$1;(statearr_25369_25437[2] = null);
(statearr_25369_25437[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 17))
{var state_25319__$1 = state_25319;var statearr_25370_25438 = state_25319__$1;(statearr_25370_25438[2] = null);
(statearr_25370_25438[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 3))
{var inst_25317 = (state_25319[2]);var state_25319__$1 = state_25319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25319__$1,inst_25317);
} else
{if((state_val_25320 === 12))
{var inst_25246 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25371_25439 = state_25319__$1;(statearr_25371_25439[2] = inst_25246);
(statearr_25371_25439[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 2))
{var state_25319__$1 = state_25319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25319__$1,4,ch);
} else
{if((state_val_25320 === 23))
{var state_25319__$1 = state_25319;var statearr_25372_25440 = state_25319__$1;(statearr_25372_25440[2] = null);
(statearr_25372_25440[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 35))
{var inst_25301 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25373_25441 = state_25319__$1;(statearr_25373_25441[2] = inst_25301);
(statearr_25373_25441[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 19))
{var inst_25220 = (state_25319[7]);var inst_25224 = cljs.core.chunk_first.call(null,inst_25220);var inst_25225 = cljs.core.chunk_rest.call(null,inst_25220);var inst_25226 = cljs.core.count.call(null,inst_25224);var inst_25200 = inst_25225;var inst_25201 = inst_25224;var inst_25202 = inst_25226;var inst_25203 = 0;var state_25319__$1 = (function (){var statearr_25374 = state_25319;(statearr_25374[13] = inst_25203);
(statearr_25374[14] = inst_25201);
(statearr_25374[16] = inst_25202);
(statearr_25374[17] = inst_25200);
return statearr_25374;
})();var statearr_25375_25442 = state_25319__$1;(statearr_25375_25442[2] = null);
(statearr_25375_25442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 11))
{var inst_25220 = (state_25319[7]);var inst_25200 = (state_25319[17]);var inst_25220__$1 = cljs.core.seq.call(null,inst_25200);var state_25319__$1 = (function (){var statearr_25376 = state_25319;(statearr_25376[7] = inst_25220__$1);
return statearr_25376;
})();if(inst_25220__$1)
{var statearr_25377_25443 = state_25319__$1;(statearr_25377_25443[1] = 16);
} else
{var statearr_25378_25444 = state_25319__$1;(statearr_25378_25444[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 9))
{var inst_25248 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25379_25445 = state_25319__$1;(statearr_25379_25445[2] = inst_25248);
(statearr_25379_25445[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 5))
{var inst_25198 = cljs.core.deref.call(null,cs);var inst_25199 = cljs.core.seq.call(null,inst_25198);var inst_25200 = inst_25199;var inst_25201 = null;var inst_25202 = 0;var inst_25203 = 0;var state_25319__$1 = (function (){var statearr_25380 = state_25319;(statearr_25380[13] = inst_25203);
(statearr_25380[14] = inst_25201);
(statearr_25380[16] = inst_25202);
(statearr_25380[17] = inst_25200);
return statearr_25380;
})();var statearr_25381_25446 = state_25319__$1;(statearr_25381_25446[2] = null);
(statearr_25381_25446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 14))
{var state_25319__$1 = state_25319;var statearr_25382_25447 = state_25319__$1;(statearr_25382_25447[2] = null);
(statearr_25382_25447[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 45))
{var inst_25309 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25383_25448 = state_25319__$1;(statearr_25383_25448[2] = inst_25309);
(statearr_25383_25448[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 26))
{var inst_25251 = (state_25319[29]);var inst_25305 = (state_25319[2]);var inst_25306 = cljs.core.seq.call(null,inst_25251);var state_25319__$1 = (function (){var statearr_25384 = state_25319;(statearr_25384[31] = inst_25305);
return statearr_25384;
})();if(inst_25306)
{var statearr_25385_25449 = state_25319__$1;(statearr_25385_25449[1] = 42);
} else
{var statearr_25386_25450 = state_25319__$1;(statearr_25386_25450[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 16))
{var inst_25220 = (state_25319[7]);var inst_25222 = cljs.core.chunked_seq_QMARK_.call(null,inst_25220);var state_25319__$1 = state_25319;if(inst_25222)
{var statearr_25387_25451 = state_25319__$1;(statearr_25387_25451[1] = 19);
} else
{var statearr_25388_25452 = state_25319__$1;(statearr_25388_25452[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 38))
{var inst_25298 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25389_25453 = state_25319__$1;(statearr_25389_25453[2] = inst_25298);
(statearr_25389_25453[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 30))
{var state_25319__$1 = state_25319;var statearr_25390_25454 = state_25319__$1;(statearr_25390_25454[2] = null);
(statearr_25390_25454[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 10))
{var inst_25203 = (state_25319[13]);var inst_25201 = (state_25319[14]);var inst_25209 = cljs.core._nth.call(null,inst_25201,inst_25203);var inst_25210 = cljs.core.nth.call(null,inst_25209,0,null);var inst_25211 = cljs.core.nth.call(null,inst_25209,1,null);var state_25319__$1 = (function (){var statearr_25391 = state_25319;(statearr_25391[26] = inst_25210);
return statearr_25391;
})();if(cljs.core.truth_(inst_25211))
{var statearr_25392_25455 = state_25319__$1;(statearr_25392_25455[1] = 13);
} else
{var statearr_25393_25456 = state_25319__$1;(statearr_25393_25456[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 18))
{var inst_25244 = (state_25319[2]);var state_25319__$1 = state_25319;var statearr_25394_25457 = state_25319__$1;(statearr_25394_25457[2] = inst_25244);
(statearr_25394_25457[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 42))
{var state_25319__$1 = state_25319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25319__$1,45,dchan);
} else
{if((state_val_25320 === 37))
{var inst_25191 = (state_25319[9]);var inst_25278 = (state_25319[25]);var inst_25287 = (state_25319[23]);var inst_25287__$1 = cljs.core.first.call(null,inst_25278);var inst_25288 = cljs.core.async.put_BANG_.call(null,inst_25287__$1,inst_25191,done);var state_25319__$1 = (function (){var statearr_25395 = state_25319;(statearr_25395[23] = inst_25287__$1);
return statearr_25395;
})();if(cljs.core.truth_(inst_25288))
{var statearr_25396_25458 = state_25319__$1;(statearr_25396_25458[1] = 39);
} else
{var statearr_25397_25459 = state_25319__$1;(statearr_25397_25459[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25320 === 8))
{var inst_25203 = (state_25319[13]);var inst_25202 = (state_25319[16]);var inst_25205 = (inst_25203 < inst_25202);var inst_25206 = inst_25205;var state_25319__$1 = state_25319;if(cljs.core.truth_(inst_25206))
{var statearr_25398_25460 = state_25319__$1;(statearr_25398_25460[1] = 10);
} else
{var statearr_25399_25461 = state_25319__$1;(statearr_25399_25461[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___25407,cs,m,dchan,dctr,done))
;return ((function (switch__8529__auto__,c__8594__auto___25407,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_25403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25403[0] = state_machine__8530__auto__);
(statearr_25403[1] = 1);
return statearr_25403;
});
var state_machine__8530__auto____1 = (function (state_25319){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_25319);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object))
{var ex__8533__auto__ = e25404;var statearr_25405_25462 = state_25319;(statearr_25405_25462[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25463 = state_25319;
state_25319 = G__25463;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_25319){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_25319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___25407,cs,m,dchan,dctr,done))
})();var state__8596__auto__ = (function (){var statearr_25406 = f__8595__auto__.call(null);(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___25407);
return statearr_25406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___25407,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj25465 = {};return obj25465;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25585 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25586){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25586 = meta25586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25585.cljs$lang$type = true;
cljs.core.async.t25585.cljs$lang$ctorStr = "cljs.core.async/t25585";
cljs.core.async.t25585.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25585");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25585.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25587){var self__ = this;
var _25587__$1 = this;return self__.meta25586;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25587,meta25586__$1){var self__ = this;
var _25587__$1 = this;return (new cljs.core.async.t25585(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25586__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25585 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25585(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25586){return (new cljs.core.async.t25585(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25586));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25585(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8594__auto___25704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___25704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___25704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25657){var state_val_25658 = (state_25657[1]);if((state_val_25658 === 7))
{var inst_25601 = (state_25657[7]);var inst_25606 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25601);var state_25657__$1 = state_25657;var statearr_25659_25705 = state_25657__$1;(statearr_25659_25705[2] = inst_25606);
(statearr_25659_25705[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 20))
{var inst_25616 = (state_25657[8]);var state_25657__$1 = state_25657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25657__$1,23,out,inst_25616);
} else
{if((state_val_25658 === 1))
{var inst_25591 = (state_25657[9]);var inst_25591__$1 = calc_state.call(null);var inst_25592 = cljs.core.seq_QMARK_.call(null,inst_25591__$1);var state_25657__$1 = (function (){var statearr_25660 = state_25657;(statearr_25660[9] = inst_25591__$1);
return statearr_25660;
})();if(inst_25592)
{var statearr_25661_25706 = state_25657__$1;(statearr_25661_25706[1] = 2);
} else
{var statearr_25662_25707 = state_25657__$1;(statearr_25662_25707[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 24))
{var inst_25609 = (state_25657[10]);var inst_25601 = inst_25609;var state_25657__$1 = (function (){var statearr_25663 = state_25657;(statearr_25663[7] = inst_25601);
return statearr_25663;
})();var statearr_25664_25708 = state_25657__$1;(statearr_25664_25708[2] = null);
(statearr_25664_25708[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 4))
{var inst_25591 = (state_25657[9]);var inst_25597 = (state_25657[2]);var inst_25598 = cljs.core.get.call(null,inst_25597,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25599 = cljs.core.get.call(null,inst_25597,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25600 = cljs.core.get.call(null,inst_25597,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_25601 = inst_25591;var state_25657__$1 = (function (){var statearr_25665 = state_25657;(statearr_25665[11] = inst_25598);
(statearr_25665[12] = inst_25600);
(statearr_25665[7] = inst_25601);
(statearr_25665[13] = inst_25599);
return statearr_25665;
})();var statearr_25666_25709 = state_25657__$1;(statearr_25666_25709[2] = null);
(statearr_25666_25709[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 15))
{var state_25657__$1 = state_25657;var statearr_25667_25710 = state_25657__$1;(statearr_25667_25710[2] = null);
(statearr_25667_25710[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 21))
{var inst_25609 = (state_25657[10]);var inst_25601 = inst_25609;var state_25657__$1 = (function (){var statearr_25668 = state_25657;(statearr_25668[7] = inst_25601);
return statearr_25668;
})();var statearr_25669_25711 = state_25657__$1;(statearr_25669_25711[2] = null);
(statearr_25669_25711[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 13))
{var inst_25653 = (state_25657[2]);var state_25657__$1 = state_25657;var statearr_25670_25712 = state_25657__$1;(statearr_25670_25712[2] = inst_25653);
(statearr_25670_25712[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 22))
{var inst_25651 = (state_25657[2]);var state_25657__$1 = state_25657;var statearr_25671_25713 = state_25657__$1;(statearr_25671_25713[2] = inst_25651);
(statearr_25671_25713[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 6))
{var inst_25655 = (state_25657[2]);var state_25657__$1 = state_25657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25657__$1,inst_25655);
} else
{if((state_val_25658 === 25))
{var state_25657__$1 = state_25657;var statearr_25672_25714 = state_25657__$1;(statearr_25672_25714[2] = null);
(statearr_25672_25714[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 17))
{var inst_25631 = (state_25657[14]);var state_25657__$1 = state_25657;var statearr_25673_25715 = state_25657__$1;(statearr_25673_25715[2] = inst_25631);
(statearr_25673_25715[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 3))
{var inst_25591 = (state_25657[9]);var state_25657__$1 = state_25657;var statearr_25674_25716 = state_25657__$1;(statearr_25674_25716[2] = inst_25591);
(statearr_25674_25716[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 12))
{var inst_25631 = (state_25657[14]);var inst_25612 = (state_25657[15]);var inst_25617 = (state_25657[16]);var inst_25631__$1 = inst_25612.call(null,inst_25617);var state_25657__$1 = (function (){var statearr_25675 = state_25657;(statearr_25675[14] = inst_25631__$1);
return statearr_25675;
})();if(cljs.core.truth_(inst_25631__$1))
{var statearr_25676_25717 = state_25657__$1;(statearr_25676_25717[1] = 17);
} else
{var statearr_25677_25718 = state_25657__$1;(statearr_25677_25718[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 2))
{var inst_25591 = (state_25657[9]);var inst_25594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25591);var state_25657__$1 = state_25657;var statearr_25678_25719 = state_25657__$1;(statearr_25678_25719[2] = inst_25594);
(statearr_25678_25719[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 23))
{var inst_25642 = (state_25657[2]);var state_25657__$1 = state_25657;if(cljs.core.truth_(inst_25642))
{var statearr_25679_25720 = state_25657__$1;(statearr_25679_25720[1] = 24);
} else
{var statearr_25680_25721 = state_25657__$1;(statearr_25680_25721[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 19))
{var inst_25639 = (state_25657[2]);var state_25657__$1 = state_25657;if(cljs.core.truth_(inst_25639))
{var statearr_25681_25722 = state_25657__$1;(statearr_25681_25722[1] = 20);
} else
{var statearr_25682_25723 = state_25657__$1;(statearr_25682_25723[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 11))
{var inst_25616 = (state_25657[8]);var inst_25622 = (inst_25616 == null);var state_25657__$1 = state_25657;if(cljs.core.truth_(inst_25622))
{var statearr_25683_25724 = state_25657__$1;(statearr_25683_25724[1] = 14);
} else
{var statearr_25684_25725 = state_25657__$1;(statearr_25684_25725[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 9))
{var inst_25609 = (state_25657[10]);var inst_25609__$1 = (state_25657[2]);var inst_25610 = cljs.core.get.call(null,inst_25609__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25611 = cljs.core.get.call(null,inst_25609__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25612 = cljs.core.get.call(null,inst_25609__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_25657__$1 = (function (){var statearr_25685 = state_25657;(statearr_25685[10] = inst_25609__$1);
(statearr_25685[15] = inst_25612);
(statearr_25685[17] = inst_25611);
return statearr_25685;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25657__$1,10,inst_25610);
} else
{if((state_val_25658 === 5))
{var inst_25601 = (state_25657[7]);var inst_25604 = cljs.core.seq_QMARK_.call(null,inst_25601);var state_25657__$1 = state_25657;if(inst_25604)
{var statearr_25686_25726 = state_25657__$1;(statearr_25686_25726[1] = 7);
} else
{var statearr_25687_25727 = state_25657__$1;(statearr_25687_25727[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 14))
{var inst_25617 = (state_25657[16]);var inst_25624 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25617);var state_25657__$1 = state_25657;var statearr_25688_25728 = state_25657__$1;(statearr_25688_25728[2] = inst_25624);
(statearr_25688_25728[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 26))
{var inst_25647 = (state_25657[2]);var state_25657__$1 = state_25657;var statearr_25689_25729 = state_25657__$1;(statearr_25689_25729[2] = inst_25647);
(statearr_25689_25729[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 16))
{var inst_25627 = (state_25657[2]);var inst_25628 = calc_state.call(null);var inst_25601 = inst_25628;var state_25657__$1 = (function (){var statearr_25690 = state_25657;(statearr_25690[7] = inst_25601);
(statearr_25690[18] = inst_25627);
return statearr_25690;
})();var statearr_25691_25730 = state_25657__$1;(statearr_25691_25730[2] = null);
(statearr_25691_25730[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 10))
{var inst_25616 = (state_25657[8]);var inst_25617 = (state_25657[16]);var inst_25615 = (state_25657[2]);var inst_25616__$1 = cljs.core.nth.call(null,inst_25615,0,null);var inst_25617__$1 = cljs.core.nth.call(null,inst_25615,1,null);var inst_25618 = (inst_25616__$1 == null);var inst_25619 = cljs.core._EQ_.call(null,inst_25617__$1,change);var inst_25620 = (inst_25618) || (inst_25619);var state_25657__$1 = (function (){var statearr_25692 = state_25657;(statearr_25692[8] = inst_25616__$1);
(statearr_25692[16] = inst_25617__$1);
return statearr_25692;
})();if(cljs.core.truth_(inst_25620))
{var statearr_25693_25731 = state_25657__$1;(statearr_25693_25731[1] = 11);
} else
{var statearr_25694_25732 = state_25657__$1;(statearr_25694_25732[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 18))
{var inst_25612 = (state_25657[15]);var inst_25611 = (state_25657[17]);var inst_25617 = (state_25657[16]);var inst_25634 = cljs.core.empty_QMARK_.call(null,inst_25612);var inst_25635 = inst_25611.call(null,inst_25617);var inst_25636 = cljs.core.not.call(null,inst_25635);var inst_25637 = (inst_25634) && (inst_25636);var state_25657__$1 = state_25657;var statearr_25695_25733 = state_25657__$1;(statearr_25695_25733[2] = inst_25637);
(statearr_25695_25733[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25658 === 8))
{var inst_25601 = (state_25657[7]);var state_25657__$1 = state_25657;var statearr_25696_25734 = state_25657__$1;(statearr_25696_25734[2] = inst_25601);
(statearr_25696_25734[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___25704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8529__auto__,c__8594__auto___25704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_25700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25700[0] = state_machine__8530__auto__);
(statearr_25700[1] = 1);
return statearr_25700;
});
var state_machine__8530__auto____1 = (function (state_25657){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_25657);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e25701){if((e25701 instanceof Object))
{var ex__8533__auto__ = e25701;var statearr_25702_25735 = state_25657;(statearr_25702_25735[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25736 = state_25657;
state_25657 = G__25736;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_25657){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_25657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___25704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8596__auto__ = (function (){var statearr_25703 = f__8595__auto__.call(null);(statearr_25703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___25704);
return statearr_25703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___25704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj25738 = {};return obj25738;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3539__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3539__auto__,mults){
return (function (p1__25739_SHARP_){if(cljs.core.truth_(p1__25739_SHARP_.call(null,topic)))
{return p1__25739_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25739_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25854 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25855){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25855 = meta25855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25854.cljs$lang$type = true;
cljs.core.async.t25854.cljs$lang$ctorStr = "cljs.core.async/t25854";
cljs.core.async.t25854.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25854");
});})(mults,ensure_mult))
;
cljs.core.async.t25854.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25854.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25856){var self__ = this;
var _25856__$1 = this;return self__.meta25855;
});})(mults,ensure_mult))
;
cljs.core.async.t25854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25856,meta25855__$1){var self__ = this;
var _25856__$1 = this;return (new cljs.core.async.t25854(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25855__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25854 = ((function (mults,ensure_mult){
return (function __GT_t25854(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25855){return (new cljs.core.async.t25854(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25855));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25854(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8594__auto___25968 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___25968,mults,ensure_mult,p){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___25968,mults,ensure_mult,p){
return (function (state_25924){var state_val_25925 = (state_25924[1]);if((state_val_25925 === 7))
{var inst_25920 = (state_25924[2]);var state_25924__$1 = state_25924;var statearr_25926_25969 = state_25924__$1;(statearr_25926_25969[2] = inst_25920);
(statearr_25926_25969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 20))
{var state_25924__$1 = state_25924;var statearr_25927_25970 = state_25924__$1;(statearr_25927_25970[2] = null);
(statearr_25927_25970[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 1))
{var state_25924__$1 = state_25924;var statearr_25928_25971 = state_25924__$1;(statearr_25928_25971[2] = null);
(statearr_25928_25971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 4))
{var inst_25859 = (state_25924[7]);var inst_25859__$1 = (state_25924[2]);var inst_25860 = (inst_25859__$1 == null);var state_25924__$1 = (function (){var statearr_25929 = state_25924;(statearr_25929[7] = inst_25859__$1);
return statearr_25929;
})();if(cljs.core.truth_(inst_25860))
{var statearr_25930_25972 = state_25924__$1;(statearr_25930_25972[1] = 5);
} else
{var statearr_25931_25973 = state_25924__$1;(statearr_25931_25973[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 15))
{var inst_25901 = (state_25924[2]);var state_25924__$1 = state_25924;var statearr_25932_25974 = state_25924__$1;(statearr_25932_25974[2] = inst_25901);
(statearr_25932_25974[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 21))
{var inst_25907 = (state_25924[8]);var inst_25915 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25907);var state_25924__$1 = state_25924;var statearr_25933_25975 = state_25924__$1;(statearr_25933_25975[2] = inst_25915);
(statearr_25933_25975[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 13))
{var inst_25883 = (state_25924[9]);var inst_25885 = cljs.core.chunked_seq_QMARK_.call(null,inst_25883);var state_25924__$1 = state_25924;if(inst_25885)
{var statearr_25934_25976 = state_25924__$1;(statearr_25934_25976[1] = 16);
} else
{var statearr_25935_25977 = state_25924__$1;(statearr_25935_25977[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 22))
{var inst_25917 = (state_25924[2]);var state_25924__$1 = (function (){var statearr_25936 = state_25924;(statearr_25936[10] = inst_25917);
return statearr_25936;
})();var statearr_25937_25978 = state_25924__$1;(statearr_25937_25978[2] = null);
(statearr_25937_25978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 6))
{var inst_25859 = (state_25924[7]);var inst_25907 = (state_25924[8]);var inst_25907__$1 = topic_fn.call(null,inst_25859);var inst_25908 = cljs.core.deref.call(null,mults);var inst_25909 = cljs.core.get.call(null,inst_25908,inst_25907__$1);var inst_25910 = cljs.core.async.muxch_STAR_.call(null,inst_25909);var state_25924__$1 = (function (){var statearr_25938 = state_25924;(statearr_25938[8] = inst_25907__$1);
return statearr_25938;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25924__$1,19,inst_25910,inst_25859);
} else
{if((state_val_25925 === 17))
{var inst_25883 = (state_25924[9]);var inst_25892 = cljs.core.first.call(null,inst_25883);var inst_25893 = cljs.core.async.muxch_STAR_.call(null,inst_25892);var inst_25894 = cljs.core.async.close_BANG_.call(null,inst_25893);var inst_25895 = cljs.core.next.call(null,inst_25883);var inst_25869 = inst_25895;var inst_25870 = null;var inst_25871 = 0;var inst_25872 = 0;var state_25924__$1 = (function (){var statearr_25939 = state_25924;(statearr_25939[11] = inst_25871);
(statearr_25939[12] = inst_25872);
(statearr_25939[13] = inst_25869);
(statearr_25939[14] = inst_25894);
(statearr_25939[15] = inst_25870);
return statearr_25939;
})();var statearr_25940_25979 = state_25924__$1;(statearr_25940_25979[2] = null);
(statearr_25940_25979[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 3))
{var inst_25922 = (state_25924[2]);var state_25924__$1 = state_25924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25924__$1,inst_25922);
} else
{if((state_val_25925 === 12))
{var inst_25903 = (state_25924[2]);var state_25924__$1 = state_25924;var statearr_25941_25980 = state_25924__$1;(statearr_25941_25980[2] = inst_25903);
(statearr_25941_25980[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 2))
{var state_25924__$1 = state_25924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25924__$1,4,ch);
} else
{if((state_val_25925 === 19))
{var inst_25912 = (state_25924[2]);var state_25924__$1 = state_25924;if(cljs.core.truth_(inst_25912))
{var statearr_25942_25981 = state_25924__$1;(statearr_25942_25981[1] = 20);
} else
{var statearr_25943_25982 = state_25924__$1;(statearr_25943_25982[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 11))
{var inst_25869 = (state_25924[13]);var inst_25883 = (state_25924[9]);var inst_25883__$1 = cljs.core.seq.call(null,inst_25869);var state_25924__$1 = (function (){var statearr_25944 = state_25924;(statearr_25944[9] = inst_25883__$1);
return statearr_25944;
})();if(inst_25883__$1)
{var statearr_25945_25983 = state_25924__$1;(statearr_25945_25983[1] = 13);
} else
{var statearr_25946_25984 = state_25924__$1;(statearr_25946_25984[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 9))
{var inst_25905 = (state_25924[2]);var state_25924__$1 = state_25924;var statearr_25947_25985 = state_25924__$1;(statearr_25947_25985[2] = inst_25905);
(statearr_25947_25985[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 5))
{var inst_25866 = cljs.core.deref.call(null,mults);var inst_25867 = cljs.core.vals.call(null,inst_25866);var inst_25868 = cljs.core.seq.call(null,inst_25867);var inst_25869 = inst_25868;var inst_25870 = null;var inst_25871 = 0;var inst_25872 = 0;var state_25924__$1 = (function (){var statearr_25948 = state_25924;(statearr_25948[11] = inst_25871);
(statearr_25948[12] = inst_25872);
(statearr_25948[13] = inst_25869);
(statearr_25948[15] = inst_25870);
return statearr_25948;
})();var statearr_25949_25986 = state_25924__$1;(statearr_25949_25986[2] = null);
(statearr_25949_25986[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 14))
{var state_25924__$1 = state_25924;var statearr_25953_25987 = state_25924__$1;(statearr_25953_25987[2] = null);
(statearr_25953_25987[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 16))
{var inst_25883 = (state_25924[9]);var inst_25887 = cljs.core.chunk_first.call(null,inst_25883);var inst_25888 = cljs.core.chunk_rest.call(null,inst_25883);var inst_25889 = cljs.core.count.call(null,inst_25887);var inst_25869 = inst_25888;var inst_25870 = inst_25887;var inst_25871 = inst_25889;var inst_25872 = 0;var state_25924__$1 = (function (){var statearr_25954 = state_25924;(statearr_25954[11] = inst_25871);
(statearr_25954[12] = inst_25872);
(statearr_25954[13] = inst_25869);
(statearr_25954[15] = inst_25870);
return statearr_25954;
})();var statearr_25955_25988 = state_25924__$1;(statearr_25955_25988[2] = null);
(statearr_25955_25988[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 10))
{var inst_25871 = (state_25924[11]);var inst_25872 = (state_25924[12]);var inst_25869 = (state_25924[13]);var inst_25870 = (state_25924[15]);var inst_25877 = cljs.core._nth.call(null,inst_25870,inst_25872);var inst_25878 = cljs.core.async.muxch_STAR_.call(null,inst_25877);var inst_25879 = cljs.core.async.close_BANG_.call(null,inst_25878);var inst_25880 = (inst_25872 + 1);var tmp25950 = inst_25871;var tmp25951 = inst_25869;var tmp25952 = inst_25870;var inst_25869__$1 = tmp25951;var inst_25870__$1 = tmp25952;var inst_25871__$1 = tmp25950;var inst_25872__$1 = inst_25880;var state_25924__$1 = (function (){var statearr_25956 = state_25924;(statearr_25956[11] = inst_25871__$1);
(statearr_25956[12] = inst_25872__$1);
(statearr_25956[13] = inst_25869__$1);
(statearr_25956[15] = inst_25870__$1);
(statearr_25956[16] = inst_25879);
return statearr_25956;
})();var statearr_25957_25989 = state_25924__$1;(statearr_25957_25989[2] = null);
(statearr_25957_25989[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 18))
{var inst_25898 = (state_25924[2]);var state_25924__$1 = state_25924;var statearr_25958_25990 = state_25924__$1;(statearr_25958_25990[2] = inst_25898);
(statearr_25958_25990[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25925 === 8))
{var inst_25871 = (state_25924[11]);var inst_25872 = (state_25924[12]);var inst_25874 = (inst_25872 < inst_25871);var inst_25875 = inst_25874;var state_25924__$1 = state_25924;if(cljs.core.truth_(inst_25875))
{var statearr_25959_25991 = state_25924__$1;(statearr_25959_25991[1] = 10);
} else
{var statearr_25960_25992 = state_25924__$1;(statearr_25960_25992[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___25968,mults,ensure_mult,p))
;return ((function (switch__8529__auto__,c__8594__auto___25968,mults,ensure_mult,p){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_25964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25964[0] = state_machine__8530__auto__);
(statearr_25964[1] = 1);
return statearr_25964;
});
var state_machine__8530__auto____1 = (function (state_25924){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_25924);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e25965){if((e25965 instanceof Object))
{var ex__8533__auto__ = e25965;var statearr_25966_25993 = state_25924;(statearr_25966_25993[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25994 = state_25924;
state_25924 = G__25994;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_25924){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_25924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___25968,mults,ensure_mult,p))
})();var state__8596__auto__ = (function (){var statearr_25967 = f__8595__auto__.call(null);(statearr_25967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___25968);
return statearr_25967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___25968,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8594__auto___26131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___26131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___26131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26101){var state_val_26102 = (state_26101[1]);if((state_val_26102 === 7))
{var state_26101__$1 = state_26101;var statearr_26103_26132 = state_26101__$1;(statearr_26103_26132[2] = null);
(statearr_26103_26132[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 1))
{var state_26101__$1 = state_26101;var statearr_26104_26133 = state_26101__$1;(statearr_26104_26133[2] = null);
(statearr_26104_26133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 4))
{var inst_26065 = (state_26101[7]);var inst_26067 = (inst_26065 < cnt);var state_26101__$1 = state_26101;if(cljs.core.truth_(inst_26067))
{var statearr_26105_26134 = state_26101__$1;(statearr_26105_26134[1] = 6);
} else
{var statearr_26106_26135 = state_26101__$1;(statearr_26106_26135[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 15))
{var inst_26097 = (state_26101[2]);var state_26101__$1 = state_26101;var statearr_26107_26136 = state_26101__$1;(statearr_26107_26136[2] = inst_26097);
(statearr_26107_26136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 13))
{var inst_26090 = cljs.core.async.close_BANG_.call(null,out);var state_26101__$1 = state_26101;var statearr_26108_26137 = state_26101__$1;(statearr_26108_26137[2] = inst_26090);
(statearr_26108_26137[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 6))
{var state_26101__$1 = state_26101;var statearr_26109_26138 = state_26101__$1;(statearr_26109_26138[2] = null);
(statearr_26109_26138[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 3))
{var inst_26099 = (state_26101[2]);var state_26101__$1 = state_26101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26101__$1,inst_26099);
} else
{if((state_val_26102 === 12))
{var inst_26087 = (state_26101[8]);var inst_26087__$1 = (state_26101[2]);var inst_26088 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26087__$1);var state_26101__$1 = (function (){var statearr_26110 = state_26101;(statearr_26110[8] = inst_26087__$1);
return statearr_26110;
})();if(cljs.core.truth_(inst_26088))
{var statearr_26111_26139 = state_26101__$1;(statearr_26111_26139[1] = 13);
} else
{var statearr_26112_26140 = state_26101__$1;(statearr_26112_26140[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 2))
{var inst_26064 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26065 = 0;var state_26101__$1 = (function (){var statearr_26113 = state_26101;(statearr_26113[7] = inst_26065);
(statearr_26113[9] = inst_26064);
return statearr_26113;
})();var statearr_26114_26141 = state_26101__$1;(statearr_26114_26141[2] = null);
(statearr_26114_26141[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 11))
{var inst_26065 = (state_26101[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26101,10,Object,null,9);var inst_26074 = chs__$1.call(null,inst_26065);var inst_26075 = done.call(null,inst_26065);var inst_26076 = cljs.core.async.take_BANG_.call(null,inst_26074,inst_26075);var state_26101__$1 = state_26101;var statearr_26115_26142 = state_26101__$1;(statearr_26115_26142[2] = inst_26076);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26101__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 9))
{var inst_26065 = (state_26101[7]);var inst_26078 = (state_26101[2]);var inst_26079 = (inst_26065 + 1);var inst_26065__$1 = inst_26079;var state_26101__$1 = (function (){var statearr_26116 = state_26101;(statearr_26116[10] = inst_26078);
(statearr_26116[7] = inst_26065__$1);
return statearr_26116;
})();var statearr_26117_26143 = state_26101__$1;(statearr_26117_26143[2] = null);
(statearr_26117_26143[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 5))
{var inst_26085 = (state_26101[2]);var state_26101__$1 = (function (){var statearr_26118 = state_26101;(statearr_26118[11] = inst_26085);
return statearr_26118;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26101__$1,12,dchan);
} else
{if((state_val_26102 === 14))
{var inst_26087 = (state_26101[8]);var inst_26092 = cljs.core.apply.call(null,f,inst_26087);var state_26101__$1 = state_26101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26101__$1,16,out,inst_26092);
} else
{if((state_val_26102 === 16))
{var inst_26094 = (state_26101[2]);var state_26101__$1 = (function (){var statearr_26119 = state_26101;(statearr_26119[12] = inst_26094);
return statearr_26119;
})();var statearr_26120_26144 = state_26101__$1;(statearr_26120_26144[2] = null);
(statearr_26120_26144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 10))
{var inst_26069 = (state_26101[2]);var inst_26070 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26101__$1 = (function (){var statearr_26121 = state_26101;(statearr_26121[13] = inst_26069);
return statearr_26121;
})();var statearr_26122_26145 = state_26101__$1;(statearr_26122_26145[2] = inst_26070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26101__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26102 === 8))
{var inst_26083 = (state_26101[2]);var state_26101__$1 = state_26101;var statearr_26123_26146 = state_26101__$1;(statearr_26123_26146[2] = inst_26083);
(statearr_26123_26146[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___26131,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8529__auto__,c__8594__auto___26131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26127[0] = state_machine__8530__auto__);
(statearr_26127[1] = 1);
return statearr_26127;
});
var state_machine__8530__auto____1 = (function (state_26101){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26101);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26128){if((e26128 instanceof Object))
{var ex__8533__auto__ = e26128;var statearr_26129_26147 = state_26101;(statearr_26129_26147[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26148 = state_26101;
state_26101 = G__26148;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26101){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___26131,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8596__auto__ = (function (){var statearr_26130 = f__8595__auto__.call(null);(statearr_26130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___26131);
return statearr_26130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___26131,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8594__auto___26256 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___26256,out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___26256,out){
return (function (state_26232){var state_val_26233 = (state_26232[1]);if((state_val_26233 === 7))
{var inst_26211 = (state_26232[7]);var inst_26212 = (state_26232[8]);var inst_26211__$1 = (state_26232[2]);var inst_26212__$1 = cljs.core.nth.call(null,inst_26211__$1,0,null);var inst_26213 = cljs.core.nth.call(null,inst_26211__$1,1,null);var inst_26214 = (inst_26212__$1 == null);var state_26232__$1 = (function (){var statearr_26234 = state_26232;(statearr_26234[7] = inst_26211__$1);
(statearr_26234[8] = inst_26212__$1);
(statearr_26234[9] = inst_26213);
return statearr_26234;
})();if(cljs.core.truth_(inst_26214))
{var statearr_26235_26257 = state_26232__$1;(statearr_26235_26257[1] = 8);
} else
{var statearr_26236_26258 = state_26232__$1;(statearr_26236_26258[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26233 === 1))
{var inst_26203 = cljs.core.vec.call(null,chs);var inst_26204 = inst_26203;var state_26232__$1 = (function (){var statearr_26237 = state_26232;(statearr_26237[10] = inst_26204);
return statearr_26237;
})();var statearr_26238_26259 = state_26232__$1;(statearr_26238_26259[2] = null);
(statearr_26238_26259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26233 === 4))
{var inst_26204 = (state_26232[10]);var state_26232__$1 = state_26232;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26232__$1,7,inst_26204);
} else
{if((state_val_26233 === 6))
{var inst_26228 = (state_26232[2]);var state_26232__$1 = state_26232;var statearr_26239_26260 = state_26232__$1;(statearr_26239_26260[2] = inst_26228);
(statearr_26239_26260[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26233 === 3))
{var inst_26230 = (state_26232[2]);var state_26232__$1 = state_26232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26232__$1,inst_26230);
} else
{if((state_val_26233 === 2))
{var inst_26204 = (state_26232[10]);var inst_26206 = cljs.core.count.call(null,inst_26204);var inst_26207 = (inst_26206 > 0);var state_26232__$1 = state_26232;if(cljs.core.truth_(inst_26207))
{var statearr_26241_26261 = state_26232__$1;(statearr_26241_26261[1] = 4);
} else
{var statearr_26242_26262 = state_26232__$1;(statearr_26242_26262[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26233 === 11))
{var inst_26204 = (state_26232[10]);var inst_26221 = (state_26232[2]);var tmp26240 = inst_26204;var inst_26204__$1 = tmp26240;var state_26232__$1 = (function (){var statearr_26243 = state_26232;(statearr_26243[10] = inst_26204__$1);
(statearr_26243[11] = inst_26221);
return statearr_26243;
})();var statearr_26244_26263 = state_26232__$1;(statearr_26244_26263[2] = null);
(statearr_26244_26263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26233 === 9))
{var inst_26212 = (state_26232[8]);var state_26232__$1 = state_26232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26232__$1,11,out,inst_26212);
} else
{if((state_val_26233 === 5))
{var inst_26226 = cljs.core.async.close_BANG_.call(null,out);var state_26232__$1 = state_26232;var statearr_26245_26264 = state_26232__$1;(statearr_26245_26264[2] = inst_26226);
(statearr_26245_26264[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26233 === 10))
{var inst_26224 = (state_26232[2]);var state_26232__$1 = state_26232;var statearr_26246_26265 = state_26232__$1;(statearr_26246_26265[2] = inst_26224);
(statearr_26246_26265[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26233 === 8))
{var inst_26211 = (state_26232[7]);var inst_26204 = (state_26232[10]);var inst_26212 = (state_26232[8]);var inst_26213 = (state_26232[9]);var inst_26216 = (function (){var c = inst_26213;var v = inst_26212;var vec__26209 = inst_26211;var cs = inst_26204;return ((function (c,v,vec__26209,cs,inst_26211,inst_26204,inst_26212,inst_26213,state_val_26233,c__8594__auto___26256,out){
return (function (p1__26149_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26149_SHARP_);
});
;})(c,v,vec__26209,cs,inst_26211,inst_26204,inst_26212,inst_26213,state_val_26233,c__8594__auto___26256,out))
})();var inst_26217 = cljs.core.filterv.call(null,inst_26216,inst_26204);var inst_26204__$1 = inst_26217;var state_26232__$1 = (function (){var statearr_26247 = state_26232;(statearr_26247[10] = inst_26204__$1);
return statearr_26247;
})();var statearr_26248_26266 = state_26232__$1;(statearr_26248_26266[2] = null);
(statearr_26248_26266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___26256,out))
;return ((function (switch__8529__auto__,c__8594__auto___26256,out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26252 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26252[0] = state_machine__8530__auto__);
(statearr_26252[1] = 1);
return statearr_26252;
});
var state_machine__8530__auto____1 = (function (state_26232){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26232);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26253){if((e26253 instanceof Object))
{var ex__8533__auto__ = e26253;var statearr_26254_26267 = state_26232;(statearr_26254_26267[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26268 = state_26232;
state_26232 = G__26268;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26232){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___26256,out))
})();var state__8596__auto__ = (function (){var statearr_26255 = f__8595__auto__.call(null);(statearr_26255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___26256);
return statearr_26255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___26256,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8594__auto___26361 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___26361,out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___26361,out){
return (function (state_26338){var state_val_26339 = (state_26338[1]);if((state_val_26339 === 7))
{var inst_26320 = (state_26338[7]);var inst_26320__$1 = (state_26338[2]);var inst_26321 = (inst_26320__$1 == null);var inst_26322 = cljs.core.not.call(null,inst_26321);var state_26338__$1 = (function (){var statearr_26340 = state_26338;(statearr_26340[7] = inst_26320__$1);
return statearr_26340;
})();if(inst_26322)
{var statearr_26341_26362 = state_26338__$1;(statearr_26341_26362[1] = 8);
} else
{var statearr_26342_26363 = state_26338__$1;(statearr_26342_26363[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 1))
{var inst_26315 = 0;var state_26338__$1 = (function (){var statearr_26343 = state_26338;(statearr_26343[8] = inst_26315);
return statearr_26343;
})();var statearr_26344_26364 = state_26338__$1;(statearr_26344_26364[2] = null);
(statearr_26344_26364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 4))
{var state_26338__$1 = state_26338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,7,ch);
} else
{if((state_val_26339 === 6))
{var inst_26333 = (state_26338[2]);var state_26338__$1 = state_26338;var statearr_26345_26365 = state_26338__$1;(statearr_26345_26365[2] = inst_26333);
(statearr_26345_26365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 3))
{var inst_26335 = (state_26338[2]);var inst_26336 = cljs.core.async.close_BANG_.call(null,out);var state_26338__$1 = (function (){var statearr_26346 = state_26338;(statearr_26346[9] = inst_26335);
return statearr_26346;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26338__$1,inst_26336);
} else
{if((state_val_26339 === 2))
{var inst_26315 = (state_26338[8]);var inst_26317 = (inst_26315 < n);var state_26338__$1 = state_26338;if(cljs.core.truth_(inst_26317))
{var statearr_26347_26366 = state_26338__$1;(statearr_26347_26366[1] = 4);
} else
{var statearr_26348_26367 = state_26338__$1;(statearr_26348_26367[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 11))
{var inst_26315 = (state_26338[8]);var inst_26325 = (state_26338[2]);var inst_26326 = (inst_26315 + 1);var inst_26315__$1 = inst_26326;var state_26338__$1 = (function (){var statearr_26349 = state_26338;(statearr_26349[8] = inst_26315__$1);
(statearr_26349[10] = inst_26325);
return statearr_26349;
})();var statearr_26350_26368 = state_26338__$1;(statearr_26350_26368[2] = null);
(statearr_26350_26368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 9))
{var state_26338__$1 = state_26338;var statearr_26351_26369 = state_26338__$1;(statearr_26351_26369[2] = null);
(statearr_26351_26369[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 5))
{var state_26338__$1 = state_26338;var statearr_26352_26370 = state_26338__$1;(statearr_26352_26370[2] = null);
(statearr_26352_26370[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 10))
{var inst_26330 = (state_26338[2]);var state_26338__$1 = state_26338;var statearr_26353_26371 = state_26338__$1;(statearr_26353_26371[2] = inst_26330);
(statearr_26353_26371[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26339 === 8))
{var inst_26320 = (state_26338[7]);var state_26338__$1 = state_26338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26338__$1,11,out,inst_26320);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___26361,out))
;return ((function (switch__8529__auto__,c__8594__auto___26361,out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26357 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26357[0] = state_machine__8530__auto__);
(statearr_26357[1] = 1);
return statearr_26357;
});
var state_machine__8530__auto____1 = (function (state_26338){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26338);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26358){if((e26358 instanceof Object))
{var ex__8533__auto__ = e26358;var statearr_26359_26372 = state_26338;(statearr_26359_26372[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26373 = state_26338;
state_26338 = G__26373;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26338){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___26361,out))
})();var state__8596__auto__ = (function (){var statearr_26360 = f__8595__auto__.call(null);(statearr_26360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___26361);
return statearr_26360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___26361,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8594__auto___26470 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___26470,out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___26470,out){
return (function (state_26445){var state_val_26446 = (state_26445[1]);if((state_val_26446 === 7))
{var inst_26440 = (state_26445[2]);var state_26445__$1 = state_26445;var statearr_26447_26471 = state_26445__$1;(statearr_26447_26471[2] = inst_26440);
(statearr_26447_26471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26446 === 1))
{var inst_26422 = null;var state_26445__$1 = (function (){var statearr_26448 = state_26445;(statearr_26448[7] = inst_26422);
return statearr_26448;
})();var statearr_26449_26472 = state_26445__$1;(statearr_26449_26472[2] = null);
(statearr_26449_26472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26446 === 4))
{var inst_26425 = (state_26445[8]);var inst_26425__$1 = (state_26445[2]);var inst_26426 = (inst_26425__$1 == null);var inst_26427 = cljs.core.not.call(null,inst_26426);var state_26445__$1 = (function (){var statearr_26450 = state_26445;(statearr_26450[8] = inst_26425__$1);
return statearr_26450;
})();if(inst_26427)
{var statearr_26451_26473 = state_26445__$1;(statearr_26451_26473[1] = 5);
} else
{var statearr_26452_26474 = state_26445__$1;(statearr_26452_26474[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26446 === 6))
{var state_26445__$1 = state_26445;var statearr_26453_26475 = state_26445__$1;(statearr_26453_26475[2] = null);
(statearr_26453_26475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26446 === 3))
{var inst_26442 = (state_26445[2]);var inst_26443 = cljs.core.async.close_BANG_.call(null,out);var state_26445__$1 = (function (){var statearr_26454 = state_26445;(statearr_26454[9] = inst_26442);
return statearr_26454;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26445__$1,inst_26443);
} else
{if((state_val_26446 === 2))
{var state_26445__$1 = state_26445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,4,ch);
} else
{if((state_val_26446 === 11))
{var inst_26425 = (state_26445[8]);var inst_26434 = (state_26445[2]);var inst_26422 = inst_26425;var state_26445__$1 = (function (){var statearr_26455 = state_26445;(statearr_26455[10] = inst_26434);
(statearr_26455[7] = inst_26422);
return statearr_26455;
})();var statearr_26456_26476 = state_26445__$1;(statearr_26456_26476[2] = null);
(statearr_26456_26476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26446 === 9))
{var inst_26425 = (state_26445[8]);var state_26445__$1 = state_26445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26445__$1,11,out,inst_26425);
} else
{if((state_val_26446 === 5))
{var inst_26422 = (state_26445[7]);var inst_26425 = (state_26445[8]);var inst_26429 = cljs.core._EQ_.call(null,inst_26425,inst_26422);var state_26445__$1 = state_26445;if(inst_26429)
{var statearr_26458_26477 = state_26445__$1;(statearr_26458_26477[1] = 8);
} else
{var statearr_26459_26478 = state_26445__$1;(statearr_26459_26478[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26446 === 10))
{var inst_26437 = (state_26445[2]);var state_26445__$1 = state_26445;var statearr_26460_26479 = state_26445__$1;(statearr_26460_26479[2] = inst_26437);
(statearr_26460_26479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26446 === 8))
{var inst_26422 = (state_26445[7]);var tmp26457 = inst_26422;var inst_26422__$1 = tmp26457;var state_26445__$1 = (function (){var statearr_26461 = state_26445;(statearr_26461[7] = inst_26422__$1);
return statearr_26461;
})();var statearr_26462_26480 = state_26445__$1;(statearr_26462_26480[2] = null);
(statearr_26462_26480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___26470,out))
;return ((function (switch__8529__auto__,c__8594__auto___26470,out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26466 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26466[0] = state_machine__8530__auto__);
(statearr_26466[1] = 1);
return statearr_26466;
});
var state_machine__8530__auto____1 = (function (state_26445){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26445);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26467){if((e26467 instanceof Object))
{var ex__8533__auto__ = e26467;var statearr_26468_26481 = state_26445;(statearr_26468_26481[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26482 = state_26445;
state_26445 = G__26482;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26445){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___26470,out))
})();var state__8596__auto__ = (function (){var statearr_26469 = f__8595__auto__.call(null);(statearr_26469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___26470);
return statearr_26469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___26470,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8594__auto___26617 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___26617,out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___26617,out){
return (function (state_26587){var state_val_26588 = (state_26587[1]);if((state_val_26588 === 7))
{var inst_26583 = (state_26587[2]);var state_26587__$1 = state_26587;var statearr_26589_26618 = state_26587__$1;(statearr_26589_26618[2] = inst_26583);
(statearr_26589_26618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 1))
{var inst_26550 = (new Array(n));var inst_26551 = inst_26550;var inst_26552 = 0;var state_26587__$1 = (function (){var statearr_26590 = state_26587;(statearr_26590[7] = inst_26551);
(statearr_26590[8] = inst_26552);
return statearr_26590;
})();var statearr_26591_26619 = state_26587__$1;(statearr_26591_26619[2] = null);
(statearr_26591_26619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 4))
{var inst_26555 = (state_26587[9]);var inst_26555__$1 = (state_26587[2]);var inst_26556 = (inst_26555__$1 == null);var inst_26557 = cljs.core.not.call(null,inst_26556);var state_26587__$1 = (function (){var statearr_26592 = state_26587;(statearr_26592[9] = inst_26555__$1);
return statearr_26592;
})();if(inst_26557)
{var statearr_26593_26620 = state_26587__$1;(statearr_26593_26620[1] = 5);
} else
{var statearr_26594_26621 = state_26587__$1;(statearr_26594_26621[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 15))
{var inst_26577 = (state_26587[2]);var state_26587__$1 = state_26587;var statearr_26595_26622 = state_26587__$1;(statearr_26595_26622[2] = inst_26577);
(statearr_26595_26622[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 13))
{var state_26587__$1 = state_26587;var statearr_26596_26623 = state_26587__$1;(statearr_26596_26623[2] = null);
(statearr_26596_26623[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 6))
{var inst_26552 = (state_26587[8]);var inst_26573 = (inst_26552 > 0);var state_26587__$1 = state_26587;if(cljs.core.truth_(inst_26573))
{var statearr_26597_26624 = state_26587__$1;(statearr_26597_26624[1] = 12);
} else
{var statearr_26598_26625 = state_26587__$1;(statearr_26598_26625[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 3))
{var inst_26585 = (state_26587[2]);var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26587__$1,inst_26585);
} else
{if((state_val_26588 === 12))
{var inst_26551 = (state_26587[7]);var inst_26575 = cljs.core.vec.call(null,inst_26551);var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26587__$1,15,out,inst_26575);
} else
{if((state_val_26588 === 2))
{var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26587__$1,4,ch);
} else
{if((state_val_26588 === 11))
{var inst_26567 = (state_26587[2]);var inst_26568 = (new Array(n));var inst_26551 = inst_26568;var inst_26552 = 0;var state_26587__$1 = (function (){var statearr_26599 = state_26587;(statearr_26599[7] = inst_26551);
(statearr_26599[10] = inst_26567);
(statearr_26599[8] = inst_26552);
return statearr_26599;
})();var statearr_26600_26626 = state_26587__$1;(statearr_26600_26626[2] = null);
(statearr_26600_26626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 9))
{var inst_26551 = (state_26587[7]);var inst_26565 = cljs.core.vec.call(null,inst_26551);var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26587__$1,11,out,inst_26565);
} else
{if((state_val_26588 === 5))
{var inst_26560 = (state_26587[11]);var inst_26551 = (state_26587[7]);var inst_26555 = (state_26587[9]);var inst_26552 = (state_26587[8]);var inst_26559 = (inst_26551[inst_26552] = inst_26555);var inst_26560__$1 = (inst_26552 + 1);var inst_26561 = (inst_26560__$1 < n);var state_26587__$1 = (function (){var statearr_26601 = state_26587;(statearr_26601[11] = inst_26560__$1);
(statearr_26601[12] = inst_26559);
return statearr_26601;
})();if(cljs.core.truth_(inst_26561))
{var statearr_26602_26627 = state_26587__$1;(statearr_26602_26627[1] = 8);
} else
{var statearr_26603_26628 = state_26587__$1;(statearr_26603_26628[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 14))
{var inst_26580 = (state_26587[2]);var inst_26581 = cljs.core.async.close_BANG_.call(null,out);var state_26587__$1 = (function (){var statearr_26605 = state_26587;(statearr_26605[13] = inst_26580);
return statearr_26605;
})();var statearr_26606_26629 = state_26587__$1;(statearr_26606_26629[2] = inst_26581);
(statearr_26606_26629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 10))
{var inst_26571 = (state_26587[2]);var state_26587__$1 = state_26587;var statearr_26607_26630 = state_26587__$1;(statearr_26607_26630[2] = inst_26571);
(statearr_26607_26630[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 8))
{var inst_26560 = (state_26587[11]);var inst_26551 = (state_26587[7]);var tmp26604 = inst_26551;var inst_26551__$1 = tmp26604;var inst_26552 = inst_26560;var state_26587__$1 = (function (){var statearr_26608 = state_26587;(statearr_26608[7] = inst_26551__$1);
(statearr_26608[8] = inst_26552);
return statearr_26608;
})();var statearr_26609_26631 = state_26587__$1;(statearr_26609_26631[2] = null);
(statearr_26609_26631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___26617,out))
;return ((function (switch__8529__auto__,c__8594__auto___26617,out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26613[0] = state_machine__8530__auto__);
(statearr_26613[1] = 1);
return statearr_26613;
});
var state_machine__8530__auto____1 = (function (state_26587){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26587);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26614){if((e26614 instanceof Object))
{var ex__8533__auto__ = e26614;var statearr_26615_26632 = state_26587;(statearr_26615_26632[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26633 = state_26587;
state_26587 = G__26633;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26587){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___26617,out))
})();var state__8596__auto__ = (function (){var statearr_26616 = f__8595__auto__.call(null);(statearr_26616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___26617);
return statearr_26616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___26617,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8594__auto___26776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___26776,out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___26776,out){
return (function (state_26746){var state_val_26747 = (state_26746[1]);if((state_val_26747 === 7))
{var inst_26742 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26748_26777 = state_26746__$1;(statearr_26748_26777[2] = inst_26742);
(statearr_26748_26777[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 1))
{var inst_26705 = [];var inst_26706 = inst_26705;var inst_26707 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_26746__$1 = (function (){var statearr_26749 = state_26746;(statearr_26749[7] = inst_26707);
(statearr_26749[8] = inst_26706);
return statearr_26749;
})();var statearr_26750_26778 = state_26746__$1;(statearr_26750_26778[2] = null);
(statearr_26750_26778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 4))
{var inst_26710 = (state_26746[9]);var inst_26710__$1 = (state_26746[2]);var inst_26711 = (inst_26710__$1 == null);var inst_26712 = cljs.core.not.call(null,inst_26711);var state_26746__$1 = (function (){var statearr_26751 = state_26746;(statearr_26751[9] = inst_26710__$1);
return statearr_26751;
})();if(inst_26712)
{var statearr_26752_26779 = state_26746__$1;(statearr_26752_26779[1] = 5);
} else
{var statearr_26753_26780 = state_26746__$1;(statearr_26753_26780[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 15))
{var inst_26736 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26754_26781 = state_26746__$1;(statearr_26754_26781[2] = inst_26736);
(statearr_26754_26781[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 13))
{var state_26746__$1 = state_26746;var statearr_26755_26782 = state_26746__$1;(statearr_26755_26782[2] = null);
(statearr_26755_26782[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 6))
{var inst_26706 = (state_26746[8]);var inst_26731 = inst_26706.length;var inst_26732 = (inst_26731 > 0);var state_26746__$1 = state_26746;if(cljs.core.truth_(inst_26732))
{var statearr_26756_26783 = state_26746__$1;(statearr_26756_26783[1] = 12);
} else
{var statearr_26757_26784 = state_26746__$1;(statearr_26757_26784[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 3))
{var inst_26744 = (state_26746[2]);var state_26746__$1 = state_26746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26746__$1,inst_26744);
} else
{if((state_val_26747 === 12))
{var inst_26706 = (state_26746[8]);var inst_26734 = cljs.core.vec.call(null,inst_26706);var state_26746__$1 = state_26746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26746__$1,15,out,inst_26734);
} else
{if((state_val_26747 === 2))
{var state_26746__$1 = state_26746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26746__$1,4,ch);
} else
{if((state_val_26747 === 11))
{var inst_26714 = (state_26746[10]);var inst_26710 = (state_26746[9]);var inst_26724 = (state_26746[2]);var inst_26725 = [];var inst_26726 = inst_26725.push(inst_26710);var inst_26706 = inst_26725;var inst_26707 = inst_26714;var state_26746__$1 = (function (){var statearr_26758 = state_26746;(statearr_26758[11] = inst_26724);
(statearr_26758[7] = inst_26707);
(statearr_26758[12] = inst_26726);
(statearr_26758[8] = inst_26706);
return statearr_26758;
})();var statearr_26759_26785 = state_26746__$1;(statearr_26759_26785[2] = null);
(statearr_26759_26785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 9))
{var inst_26706 = (state_26746[8]);var inst_26722 = cljs.core.vec.call(null,inst_26706);var state_26746__$1 = state_26746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26746__$1,11,out,inst_26722);
} else
{if((state_val_26747 === 5))
{var inst_26714 = (state_26746[10]);var inst_26710 = (state_26746[9]);var inst_26707 = (state_26746[7]);var inst_26714__$1 = f.call(null,inst_26710);var inst_26715 = cljs.core._EQ_.call(null,inst_26714__$1,inst_26707);var inst_26716 = cljs.core.keyword_identical_QMARK_.call(null,inst_26707,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_26717 = (inst_26715) || (inst_26716);var state_26746__$1 = (function (){var statearr_26760 = state_26746;(statearr_26760[10] = inst_26714__$1);
return statearr_26760;
})();if(cljs.core.truth_(inst_26717))
{var statearr_26761_26786 = state_26746__$1;(statearr_26761_26786[1] = 8);
} else
{var statearr_26762_26787 = state_26746__$1;(statearr_26762_26787[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 14))
{var inst_26739 = (state_26746[2]);var inst_26740 = cljs.core.async.close_BANG_.call(null,out);var state_26746__$1 = (function (){var statearr_26764 = state_26746;(statearr_26764[13] = inst_26739);
return statearr_26764;
})();var statearr_26765_26788 = state_26746__$1;(statearr_26765_26788[2] = inst_26740);
(statearr_26765_26788[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 10))
{var inst_26729 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26766_26789 = state_26746__$1;(statearr_26766_26789[2] = inst_26729);
(statearr_26766_26789[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 8))
{var inst_26714 = (state_26746[10]);var inst_26710 = (state_26746[9]);var inst_26706 = (state_26746[8]);var inst_26719 = inst_26706.push(inst_26710);var tmp26763 = inst_26706;var inst_26706__$1 = tmp26763;var inst_26707 = inst_26714;var state_26746__$1 = (function (){var statearr_26767 = state_26746;(statearr_26767[14] = inst_26719);
(statearr_26767[7] = inst_26707);
(statearr_26767[8] = inst_26706__$1);
return statearr_26767;
})();var statearr_26768_26790 = state_26746__$1;(statearr_26768_26790[2] = null);
(statearr_26768_26790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8594__auto___26776,out))
;return ((function (switch__8529__auto__,c__8594__auto___26776,out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26772[0] = state_machine__8530__auto__);
(statearr_26772[1] = 1);
return statearr_26772;
});
var state_machine__8530__auto____1 = (function (state_26746){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26746);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26773){if((e26773 instanceof Object))
{var ex__8533__auto__ = e26773;var statearr_26774_26791 = state_26746;(statearr_26774_26791[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26792 = state_26746;
state_26746 = G__26792;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26746){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___26776,out))
})();var state__8596__auto__ = (function (){var statearr_26775 = f__8595__auto__.call(null);(statearr_26775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___26776);
return statearr_26775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___26776,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map