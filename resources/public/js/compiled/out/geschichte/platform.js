// Compiled by ClojureScript 0.0-2227
goog.provide('geschichte.platform');
goog.require('cljs.core');
goog.require('konserve.platform');
goog.require('geschichte.platform_log');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.net.WebSocket');
goog.require('konserve.platform');
goog.require('geschichte.platform_log');
geschichte.platform.now = (function now(){return (new Date());
});
/**
* Connects to url. Puts [in out] channels on return channel when ready.
* Only supports websocket at the moment, but is supposed to dispatch on
* protocol of url. read-opts is ignored on cljs for now, use the
* platform-wide reader setup.
*/
geschichte.platform.client_connect_BANG_ = (function client_connect_BANG_(url,tag_table){var channel = (new goog.net.WebSocket(false));var in$ = cljs.core.async.chan.call(null);var out = cljs.core.async.chan.call(null);var opener = cljs.core.async.chan.call(null);geschichte.platform_log.info.call(null,"CLIENT-CONNECT",url);
var G__23437_23438 = channel;goog.events.listen(G__23437_23438,goog.net.WebSocket.EventType.MESSAGE,((function (G__23437_23438,channel,in$,out,opener){
return (function (evt){geschichte.platform_log.debug.call(null,"receiving: ",evt.message);
return cljs.core.async.put_BANG_.call(null,in$,konserve.platform.read_string_safe.call(null,cljs.core.deref.call(null,tag_table),evt.message));
});})(G__23437_23438,channel,in$,out,opener))
);
goog.events.listen(G__23437_23438,goog.net.WebSocket.EventType.CLOSED,((function (G__23437_23438,channel,in$,out,opener){
return (function (evt){cljs.core.async.close_BANG_.call(null,in$);
channel.close();
return cljs.core.async.close_BANG_.call(null,opener);
});})(G__23437_23438,channel,in$,out,opener))
);
goog.events.listen(G__23437_23438,goog.net.WebSocket.EventType.OPENED,((function (G__23437_23438,channel,in$,out,opener){
return (function (evt){cljs.core.async.put_BANG_.call(null,opener,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out], null));
return cljs.core.async.close_BANG_.call(null,opener);
});})(G__23437_23438,channel,in$,out,opener))
);
goog.events.listen(G__23437_23438,goog.net.WebSocket.EventType.ERROR,((function (G__23437_23438,channel,in$,out,opener){
return (function (evt){geschichte.platform_log.error.call(null,"ERROR:",evt);
return cljs.core.async.close_BANG_.call(null,opener);
});})(G__23437_23438,channel,in$,out,opener))
);
G__23437_23438.open(url);
((function (channel,in$,out,opener){
return (function sender(){return cljs.core.async.take_BANG_.call(null,out,((function (channel,in$,out,opener){
return (function (m){geschichte.platform_log.debug.call(null,"sending: ",m);
channel.send(cljs.core.pr_str.call(null,m));
return sender.call(null);
});})(channel,in$,out,opener))
);
});})(channel,in$,out,opener))
.call(null);
return opener;
});

//# sourceMappingURL=platform.js.map