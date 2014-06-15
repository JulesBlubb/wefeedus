// Compiled by ClojureScript 0.0-2227
goog.provide('geschichte.sync');
goog.require('cljs.core');
goog.require('geschichte.platform');
goog.require('geschichte.platform_log');
goog.require('geschichte.meta');
goog.require('geschichte.platform_data');
goog.require('konserve.protocols');
goog.require('cljs.core.async');
goog.require('hasch.core');
goog.require('clojure.set');
goog.require('geschichte.platform');
goog.require('konserve.protocols');
goog.require('geschichte.platform_log');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('hasch.core');
goog.require('geschichte.platform_data');
goog.require('geschichte.meta');
/**
* Creates a client-side peer only.
*/
geschichte.sync.client_peer = (function client_peer(name,store){var log = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var in$ = cljs.core.async.chan.call(null);var out = cljs.core.async.pub.call(null,in$,new cljs.core.Keyword(null,"topic","topic",1124450465));return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"log","log",1014011574),log,new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out], null),new cljs.core.Keyword(null,"store","store",1123675219),store], null),new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),cljs.core.PersistentArrayMap.EMPTY], null));
});
/**
* Constructs a listening peer.
* You need to integrate returned :handler to run it.
*/
geschichte.sync.server_peer = (function server_peer(handler,store){var map__19995 = handler;var map__19995__$1 = ((cljs.core.seq_QMARK_.call(null,map__19995))?cljs.core.apply.call(null,cljs.core.hash_map,map__19995):map__19995);var url = cljs.core.get.call(null,map__19995__$1,new cljs.core.Keyword(null,"url","url",1014020321));var new_conns = cljs.core.get.call(null,map__19995__$1,new cljs.core.Keyword(null,"new-conns","new-conns",3609472972));var log = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var in$ = cljs.core.async.chan.call(null);var out = cljs.core.async.pub.call(null,in$,new cljs.core.Keyword(null,"topic","topic",1124450465));var peer = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volatile","volatile",3420844302),cljs.core.merge.call(null,handler,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1123675219),store,new cljs.core.Keyword(null,"log","log",1014011574),log,new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out], null)], null)),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(handler),new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),cljs.core.PersistentArrayMap.EMPTY], null));var c__8594__auto___20034 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___20034,map__19995,map__19995__$1,url,new_conns,log,in$,out,peer){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___20034,map__19995,map__19995__$1,url,new_conns,log,in$,out,peer){
return (function (state_20020){var state_val_20021 = (state_20020[1]);if((state_val_20021 === 6))
{var inst_20015 = (state_20020[2]);var inst_20003 = inst_20015;var state_20020__$1 = (function (){var statearr_20022 = state_20020;(statearr_20022[7] = inst_20003);
return statearr_20022;
})();var statearr_20023_20035 = state_20020__$1;(statearr_20023_20035[2] = null);
(statearr_20023_20035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20021 === 5))
{var inst_20013 = (state_20020[2]);var state_20020__$1 = (function (){var statearr_20024 = state_20020;(statearr_20024[8] = inst_20013);
return statearr_20024;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20020__$1,6,new_conns);
} else
{if((state_val_20021 === 4))
{var inst_20018 = (state_20020[2]);var state_20020__$1 = state_20020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20020__$1,inst_20018);
} else
{if((state_val_20021 === 3))
{var inst_20003 = (state_20020[7]);var inst_20006 = cljs.core.nth.call(null,inst_20003,0,null);var inst_20007 = cljs.core.nth.call(null,inst_20003,1,null);var inst_20008 = cljs.core.async.pub.call(null,inst_20006,new cljs.core.Keyword(null,"topic","topic",1124450465));var inst_20009 = [inst_20007,inst_20008];var inst_20010 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20009,null));var inst_20011 = geschichte.sync.wire.call(null,peer,inst_20010);var state_20020__$1 = state_20020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20020__$1,5,inst_20011);
} else
{if((state_val_20021 === 2))
{var inst_20000 = (state_20020[2]);var inst_20001 = cljs.core.nth.call(null,inst_20000,0,null);var inst_20002 = cljs.core.nth.call(null,inst_20000,1,null);var inst_20003 = inst_20000;var state_20020__$1 = (function (){var statearr_20025 = state_20020;(statearr_20025[9] = inst_20001);
(statearr_20025[7] = inst_20003);
(statearr_20025[10] = inst_20002);
return statearr_20025;
})();var statearr_20026_20036 = state_20020__$1;(statearr_20026_20036[2] = null);
(statearr_20026_20036[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20021 === 1))
{var state_20020__$1 = state_20020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20020__$1,2,new_conns);
} else
{return null;
}
}
}
}
}
}
});})(c__8594__auto___20034,map__19995,map__19995__$1,url,new_conns,log,in$,out,peer))
;return ((function (switch__8529__auto__,c__8594__auto___20034,map__19995,map__19995__$1,url,new_conns,log,in$,out,peer){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20030 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20030[0] = state_machine__8530__auto__);
(statearr_20030[1] = 1);
return statearr_20030;
});
var state_machine__8530__auto____1 = (function (state_20020){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20020);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20031){if((e20031 instanceof Object))
{var ex__8533__auto__ = e20031;var statearr_20032_20037 = state_20020;(statearr_20032_20037[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20038 = state_20020;
state_20020 = G__20038;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20020){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___20034,map__19995,map__19995__$1,url,new_conns,log,in$,out,peer))
})();var state__8596__auto__ = (function (){var statearr_20033 = f__8595__auto__.call(null);(statearr_20033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___20034);
return statearr_20033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___20034,map__19995,map__19995__$1,url,new_conns,log,in$,out,peer))
);
return peer;
});
geschichte.sync.possible_commits = (function possible_commits(meta){return cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(meta)));
});
geschichte.sync.new_commits_BANG_ = (function new_commits_BANG_(store,metas){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_20247){var state_val_20248 = (state_20247[1]);if((state_val_20248 === 3))
{var inst_20224 = (state_20247[7]);var inst_20223 = (state_20247[8]);var inst_20236 = (state_20247[2]);var inst_20237 = cljs.core.map.call(null,inst_20224,inst_20236);var inst_20238 = cljs.core.apply.call(null,clojure.set.union,inst_20237);var inst_20239 = cljs.core.map.call(null,inst_20223,inst_20238);var inst_20240 = cljs.core.async.merge.call(null,inst_20239);var inst_20241 = cljs.core.async.filter_LT_.call(null,cljs.core.first,inst_20240);var inst_20242 = cljs.core.async.map_LT_.call(null,cljs.core.second,inst_20241);var inst_20243 = cljs.core.async.into.call(null,cljs.core.PersistentHashSet.EMPTY,inst_20242);var state_20247__$1 = state_20247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20247__$1,2,inst_20243);
} else
{if((state_val_20248 === 2))
{var inst_20245 = (state_20247[2]);var state_20247__$1 = state_20247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20247__$1,inst_20245);
} else
{if((state_val_20248 === 1))
{var inst_20223 = (function (){return ((function (state_val_20248,c__8594__auto__){
return (function (p1__20040_SHARP_){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto____$1,state_val_20248,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto____$1,state_val_20248,c__8594__auto__){
return (function (state_20258){var state_val_20259 = (state_20258[1]);if((state_val_20259 === 2))
{var inst_20253 = (state_20258[2]);var inst_20254 = cljs.core.not.call(null,inst_20253);var inst_20255 = [inst_20254,p1__20040_SHARP_];var inst_20256 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20255,null));var state_20258__$1 = state_20258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20258__$1,inst_20256);
} else
{if((state_val_20259 === 1))
{var inst_20249 = [p1__20040_SHARP_];var inst_20250 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20249,null));var inst_20251 = konserve.protocols._get_in.call(null,store,inst_20250);var state_20258__$1 = state_20258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20258__$1,2,inst_20251);
} else
{return null;
}
}
});})(c__8594__auto____$1,state_val_20248,c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto____$1,state_val_20248,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20263 = [null,null,null,null,null,null,null];(statearr_20263[0] = state_machine__8530__auto__);
(statearr_20263[1] = 1);
return statearr_20263;
});
var state_machine__8530__auto____1 = (function (state_20258){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20258);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20264){if((e20264 instanceof Object))
{var ex__8533__auto__ = e20264;var statearr_20265_20405 = state_20258;(statearr_20265_20405[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20406 = state_20258;
state_20258 = G__20406;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20258){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto____$1,state_val_20248,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_20266 = f__8595__auto__.call(null);(statearr_20266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_20266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto____$1,state_val_20248,c__8594__auto__))
);
return c__8594__auto____$1;
});
;})(state_val_20248,c__8594__auto__))
})();var inst_20224 = (function (){return ((function (inst_20223,state_val_20248,c__8594__auto__){
return (function (p1__20039_SHARP_){return clojure.set.difference.call(null,geschichte.sync.possible_commits.call(null,cljs.core.first.call(null,p1__20039_SHARP_)),geschichte.sync.possible_commits.call(null,cljs.core.second.call(null,p1__20039_SHARP_)));
});
;})(inst_20223,state_val_20248,c__8594__auto__))
})();var inst_20231 = (function (){return ((function (inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function iter__20225(s__20226){return (new cljs.core.LazySeq(null,((function (inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function (){var s__20226__$1 = s__20226;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20226__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__20332 = cljs.core.first.call(null,xs__4624__auto__);var user = cljs.core.nth.call(null,vec__20332,0,null);var repos = cljs.core.nth.call(null,vec__20332,1,null);var iterys__4260__auto__ = ((function (s__20226__$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function iter__20227(s__20228){return (new cljs.core.LazySeq(null,((function (s__20226__$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function (){var s__20228__$1 = s__20228;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20228__$1);if(temp__4126__auto____$1)
{var s__20228__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20228__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__20228__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__20230 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__20229 = 0;while(true){
if((i__20229 < size__4263__auto__))
{var vec__20365 = cljs.core._nth.call(null,c__4262__auto__,i__20229);var repo = cljs.core.nth.call(null,vec__20365,0,null);var meta = cljs.core.nth.call(null,vec__20365,1,null);cljs.core.chunk_append.call(null,b__20230,(function (){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (i__20229,s__20226__$1,c__8594__auto____$1,vec__20365,repo,meta,c__4262__auto__,size__4263__auto__,b__20230,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (i__20229,s__20226__$1,c__8594__auto____$1,vec__20365,repo,meta,c__4262__auto__,size__4263__auto__,b__20230,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function (state_20372){var state_val_20373 = (state_20372[1]);if((state_val_20373 === 1))
{var inst_20366 = [user,repo];var inst_20367 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20366,null));var inst_20368 = konserve.protocols._get_in.call(null,store,inst_20367);var inst_20369 = [meta,inst_20368];var inst_20370 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20369,null));var state_20372__$1 = state_20372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20372__$1,inst_20370);
} else
{return null;
}
});})(i__20229,s__20226__$1,c__8594__auto____$1,vec__20365,repo,meta,c__4262__auto__,size__4263__auto__,b__20230,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
;return ((function (i__20229,s__20226__$1,switch__8529__auto__,c__8594__auto____$1,vec__20365,repo,meta,c__4262__auto__,size__4263__auto__,b__20230,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20377 = [null,null,null,null,null,null,null];(statearr_20377[0] = state_machine__8530__auto__);
(statearr_20377[1] = 1);
return statearr_20377;
});
var state_machine__8530__auto____1 = (function (state_20372){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20372);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20378){if((e20378 instanceof Object))
{var ex__8533__auto__ = e20378;var statearr_20379_20407 = state_20372;(statearr_20379_20407[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20408 = state_20372;
state_20372 = G__20408;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20372){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(i__20229,s__20226__$1,switch__8529__auto__,c__8594__auto____$1,vec__20365,repo,meta,c__4262__auto__,size__4263__auto__,b__20230,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_20380 = f__8595__auto__.call(null);(statearr_20380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_20380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(i__20229,s__20226__$1,c__8594__auto____$1,vec__20365,repo,meta,c__4262__auto__,size__4263__auto__,b__20230,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
);
return c__8594__auto____$1;
})());
{
var G__20409 = (i__20229 + 1);
i__20229 = G__20409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),iter__20227.call(null,cljs.core.chunk_rest.call(null,s__20228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),null);
}
} else
{var vec__20381 = cljs.core.first.call(null,s__20228__$2);var repo = cljs.core.nth.call(null,vec__20381,0,null);var meta = cljs.core.nth.call(null,vec__20381,1,null);return cljs.core.cons.call(null,(function (){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (s__20226__$1,c__8594__auto____$1,vec__20381,repo,meta,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (s__20226__$1,c__8594__auto____$1,vec__20381,repo,meta,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function (state_20388){var state_val_20389 = (state_20388[1]);if((state_val_20389 === 1))
{var inst_20382 = [user,repo];var inst_20383 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20382,null));var inst_20384 = konserve.protocols._get_in.call(null,store,inst_20383);var inst_20385 = [meta,inst_20384];var inst_20386 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20385,null));var state_20388__$1 = state_20388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20388__$1,inst_20386);
} else
{return null;
}
});})(s__20226__$1,c__8594__auto____$1,vec__20381,repo,meta,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
;return ((function (s__20226__$1,switch__8529__auto__,c__8594__auto____$1,vec__20381,repo,meta,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20393 = [null,null,null,null,null,null,null];(statearr_20393[0] = state_machine__8530__auto__);
(statearr_20393[1] = 1);
return statearr_20393;
});
var state_machine__8530__auto____1 = (function (state_20388){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20388);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20394){if((e20394 instanceof Object))
{var ex__8533__auto__ = e20394;var statearr_20395_20410 = state_20388;(statearr_20395_20410[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20411 = state_20388;
state_20388 = G__20411;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20388){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(s__20226__$1,switch__8529__auto__,c__8594__auto____$1,vec__20381,repo,meta,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_20396 = f__8595__auto__.call(null);(statearr_20396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_20396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(s__20226__$1,c__8594__auto____$1,vec__20381,repo,meta,s__20228__$2,temp__4126__auto____$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
);
return c__8594__auto____$1;
})(),iter__20227.call(null,cljs.core.rest.call(null,s__20228__$2)));
}
} else
{return null;
}
break;
}
});})(s__20226__$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
,null,null));
});})(s__20226__$1,vec__20332,user,repos,xs__4624__auto__,temp__4126__auto__,inst_20223,inst_20224,state_val_20248,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__20225.call(null,cljs.core.rest.call(null,s__20226__$1)));
} else
{{
var G__20412 = cljs.core.rest.call(null,s__20226__$1);
s__20226__$1 = G__20412;
continue;
}
}
} else
{return null;
}
break;
}
});})(inst_20223,inst_20224,state_val_20248,c__8594__auto__))
,null,null));
});
;})(inst_20223,inst_20224,state_val_20248,c__8594__auto__))
})();var inst_20232 = inst_20231.call(null,metas);var inst_20233 = cljs.core.async.merge.call(null,inst_20232);var inst_20234 = cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,inst_20233);var state_20247__$1 = (function (){var statearr_20397 = state_20247;(statearr_20397[7] = inst_20224);
(statearr_20397[8] = inst_20223);
return statearr_20397;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20247__$1,3,inst_20234);
} else
{return null;
}
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20401 = [null,null,null,null,null,null,null,null,null];(statearr_20401[0] = state_machine__8530__auto__);
(statearr_20401[1] = 1);
return statearr_20401;
});
var state_machine__8530__auto____1 = (function (state_20247){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20247);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20402){if((e20402 instanceof Object))
{var ex__8533__auto__ = e20402;var statearr_20403_20413 = state_20247;(statearr_20403_20413[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20414 = state_20247;
state_20247 = G__20414;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20247){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_20404 = f__8595__auto__.call(null);(statearr_20404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_20404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Like merge-with, but merges maps recursively, applying the given fn
* only when there's a non-map at a particular level.
* 
* (deepmerge + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
* {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
* -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
* @param {...*} var_args
*/
geschichte.sync.deep_merge_with = (function() { 
var deep_merge_with__delegate = function (f,maps){return cljs.core.apply.call(null,(function() { 
var m__delegate = function (maps__$1){if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1))
{return cljs.core.apply.call(null,cljs.core.merge_with,m,maps__$1);
} else
{return cljs.core.apply.call(null,f,maps__$1);
}
};
var m = function (var_args){
var maps__$1 = null;if (arguments.length > 0) {
  maps__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return m__delegate.call(this,maps__$1);};
m.cljs$lang$maxFixedArity = 0;
m.cljs$lang$applyTo = (function (arglist__20415){
var maps__$1 = cljs.core.seq(arglist__20415);
return m__delegate(maps__$1);
});
m.cljs$core$IFn$_invoke$arity$variadic = m__delegate;
return m;
})()
,maps);
};
var deep_merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return deep_merge_with__delegate.call(this,f,maps);};
deep_merge_with.cljs$lang$maxFixedArity = 1;
deep_merge_with.cljs$lang$applyTo = (function (arglist__20416){
var f = cljs.core.first(arglist__20416);
var maps = cljs.core.rest(arglist__20416);
return deep_merge_with__delegate(f,maps);
});
deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = deep_merge_with__delegate;
return deep_merge_with;
})()
;
/**
* Filters new and old metadata depending on subscriptions sbs.
*/
geschichte.sync.filter_subs = (function filter_subs(sbs,new$,old){var delta = cljs.core.first.call(null,geschichte.platform_data.diff.call(null,new$,old));return cljs.core.reduce.call(null,((function (delta){
return (function (res,p__20421){var vec__20422 = p__20421;var user = cljs.core.nth.call(null,vec__20422,0,null);var v = cljs.core.nth.call(null,vec__20422,1,null);var nv = cljs.core.reduce.call(null,((function (vec__20422,user,v,delta){
return (function (res__$1,p__20423){var vec__20424 = p__20423;var repo = cljs.core.nth.call(null,vec__20424,0,null);var v__$1 = cljs.core.nth.call(null,vec__20424,1,null);var branches = cljs.core.get_in.call(null,sbs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,repo], null));var branches_causal = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys,cljs.core.partial.call(null,geschichte.meta.isolate_branch,v__$1)),branches));return cljs.core.assoc.call(null,res__$1,repo,cljs.core.update_in.call(null,cljs.core.update_in.call(null,v__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"causal-order","causal-order",3785805338)], null),cljs.core.select_keys,branches_causal),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218)], null),cljs.core.select_keys,branches));
});})(vec__20422,user,v,delta))
,res,cljs.core.select_keys.call(null,v,cljs.core.set.call(null,cljs.core.keys.call(null,sbs.call(null,user)))));if(!(cljs.core.empty_QMARK_.call(null,nv)))
{return cljs.core.assoc.call(null,res,user,nv);
} else
{return res;
}
});})(delta))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,delta,cljs.core.set.call(null,cljs.core.keys.call(null,sbs))));
});
/**
* Store and propagate subscription requests.
*/
geschichte.sync.subscribe = (function subscribe(peer,sub_ch,out){var map__20642 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,peer));var map__20642__$1 = ((cljs.core.seq_QMARK_.call(null,map__20642))?cljs.core.apply.call(null,cljs.core.hash_map,map__20642):map__20642);var log = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword(null,"log","log",1014011574));var chans = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var vec__20643 = chans;var bus_in = cljs.core.nth.call(null,vec__20643,0,null);var bus_out = cljs.core.nth.call(null,vec__20643,1,null);var pn = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,peer));cljs.core.async.sub.call(null,bus_out,new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),out);
var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn){
return (function (state_20783){var state_val_20784 = (state_20783[1]);if((state_val_20784 === 7))
{var inst_20781 = (state_20783[2]);var state_20783__$1 = state_20783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20783__$1,inst_20781);
} else
{if((state_val_20784 === 20))
{var inst_20673 = (state_20783[7]);var inst_20657 = (state_20783[8]);var inst_20745 = (state_20783[2]);var inst_20747 = geschichte.platform_data.diff.call(null,inst_20673,inst_20657);var inst_20748 = cljs.core.nth.call(null,inst_20747,0,null);var inst_20749 = geschichte.platform_log.debug.call(null,"subscribing to new subs:",inst_20748);var inst_20750 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"peer","peer",1017341140),new cljs.core.Keyword(null,"metas","metas",1117691520)];var inst_20751 = [new cljs.core.Keyword(null,"meta-pub-req","meta-pub-req",1425224056),pn,inst_20748];var inst_20752 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20750,inst_20751);var state_20783__$1 = (function (){var statearr_20785 = state_20783;(statearr_20785[9] = inst_20745);
(statearr_20785[10] = inst_20749);
return statearr_20785;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20783__$1,21,out,inst_20752);
} else
{if((state_val_20784 === 1))
{var state_20783__$1 = state_20783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20783__$1,2,sub_ch);
} else
{if((state_val_20784 === 24))
{var inst_20674 = (state_20783[11]);var inst_20673 = (state_20783[7]);var inst_20771 = (state_20783[2]);var inst_20656 = inst_20771;var inst_20657 = inst_20673;var inst_20658 = inst_20674;var state_20783__$1 = (function (){var statearr_20786 = state_20783;(statearr_20786[12] = inst_20656);
(statearr_20786[13] = inst_20658);
(statearr_20786[8] = inst_20657);
return statearr_20786;
})();var statearr_20787_20859 = state_20783__$1;(statearr_20787_20859[2] = null);
(statearr_20787_20859[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 4))
{var inst_20648 = (state_20783[14]);var state_20783__$1 = state_20783;var statearr_20788_20860 = state_20783__$1;(statearr_20788_20860[2] = inst_20648);
(statearr_20788_20860[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 15))
{var state_20783__$1 = state_20783;var statearr_20789_20861 = state_20783__$1;(statearr_20789_20861[2] = null);
(statearr_20789_20861[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 21))
{var inst_20754 = (state_20783[2]);var state_20783__$1 = state_20783;var statearr_20790_20862 = state_20783__$1;(statearr_20790_20862[2] = inst_20754);
(statearr_20790_20862[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 13))
{var inst_20779 = (state_20783[2]);var state_20783__$1 = state_20783;var statearr_20791_20863 = state_20783__$1;(statearr_20791_20863[2] = inst_20779);
(statearr_20791_20863[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 22))
{var inst_20666 = (state_20783[15]);var inst_20667 = (state_20783[16]);var inst_20762 = (state_20783[2]);var inst_20763 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_20764 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(inst_20666);var inst_20765 = [new cljs.core.Keyword(null,"meta-subed","meta-subed",793641097),inst_20667,inst_20764];var inst_20766 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20763,inst_20765);var state_20783__$1 = (function (){var statearr_20792 = state_20783;(statearr_20792[17] = inst_20762);
return statearr_20792;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20783__$1,23,bus_in,inst_20766);
} else
{if((state_val_20784 === 6))
{var inst_20656 = (state_20783[12]);var inst_20661 = cljs.core.seq_QMARK_.call(null,inst_20656);var state_20783__$1 = state_20783;if(inst_20661)
{var statearr_20793_20864 = state_20783__$1;(statearr_20793_20864[1] = 8);
} else
{var statearr_20794_20865 = state_20783__$1;(statearr_20794_20865[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 17))
{var state_20783__$1 = state_20783;var statearr_20795_20866 = state_20783__$1;(statearr_20795_20866[2] = null);
(statearr_20795_20866[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 3))
{var inst_20648 = (state_20783[14]);var inst_20651 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20648);var state_20783__$1 = state_20783;var statearr_20796_20867 = state_20783__$1;(statearr_20796_20867[2] = inst_20651);
(statearr_20796_20867[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 12))
{var inst_20658 = (state_20783[13]);var inst_20774 = geschichte.platform_log.debug.call(null,"closing old-pub-ch");var inst_20775 = cljs.core.async.unsub.call(null,bus_out,new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007),inst_20658);var inst_20776 = cljs.core.async.unsub.call(null,bus_out,new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),out);var inst_20777 = cljs.core.async.close_BANG_.call(null,inst_20658);var state_20783__$1 = (function (){var statearr_20797 = state_20783;(statearr_20797[18] = inst_20775);
(statearr_20797[19] = inst_20776);
(statearr_20797[20] = inst_20774);
return statearr_20797;
})();var statearr_20798_20868 = state_20783__$1;(statearr_20798_20868[2] = inst_20777);
(statearr_20798_20868[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 2))
{var inst_20648 = (state_20783[14]);var inst_20648__$1 = (state_20783[2]);var inst_20649 = cljs.core.seq_QMARK_.call(null,inst_20648__$1);var state_20783__$1 = (function (){var statearr_20799 = state_20783;(statearr_20799[14] = inst_20648__$1);
return statearr_20799;
})();if(inst_20649)
{var statearr_20800_20869 = state_20783__$1;(statearr_20800_20869[1] = 3);
} else
{var statearr_20801_20870 = state_20783__$1;(statearr_20801_20870[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 23))
{var inst_20768 = (state_20783[2]);var inst_20769 = geschichte.platform_log.debug.call(null,pn,"finishing subscription");var state_20783__$1 = (function (){var statearr_20802 = state_20783;(statearr_20802[21] = inst_20768);
(statearr_20802[22] = inst_20769);
return statearr_20802;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20783__$1,24,sub_ch);
} else
{if((state_val_20784 === 19))
{var inst_20666 = (state_20783[15]);var inst_20667 = (state_20783[16]);var inst_20756 = (state_20783[2]);var inst_20757 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_20758 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(inst_20666);var inst_20759 = [new cljs.core.Keyword(null,"meta-subed","meta-subed",793641097),inst_20667,inst_20758];var inst_20760 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20757,inst_20759);var state_20783__$1 = (function (){var statearr_20803 = state_20783;(statearr_20803[23] = inst_20756);
return statearr_20803;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20783__$1,22,out,inst_20760);
} else
{if((state_val_20784 === 11))
{var inst_20658 = (state_20783[13]);var inst_20666 = (state_20783[15]);var inst_20667 = (state_20783[16]);var inst_20669 = [new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890)];var inst_20670 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20669,null));var inst_20671 = cljs.core.partial.call(null,geschichte.sync.deep_merge_with,clojure.set.union);var inst_20672 = cljs.core.swap_BANG_.call(null,peer,cljs.core.update_in,inst_20670,inst_20671,inst_20667);var inst_20673 = new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890).cljs$core$IFn$_invoke$arity$1(inst_20672);var inst_20674 = cljs.core.async.chan.call(null);var inst_20675 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(inst_20666);var inst_20676 = geschichte.platform_log.info.call(null,pn,"starting subscription from",inst_20675);var inst_20677 = geschichte.platform_log.debug.call(null,pn,"subscriptions:",inst_20667);var state_20783__$1 = (function (){var statearr_20804 = state_20783;(statearr_20804[11] = inst_20674);
(statearr_20804[7] = inst_20673);
(statearr_20804[24] = inst_20677);
(statearr_20804[25] = inst_20676);
return statearr_20804;
})();if(cljs.core.truth_(inst_20658))
{var statearr_20805_20871 = state_20783__$1;(statearr_20805_20871[1] = 14);
} else
{var statearr_20806_20872 = state_20783__$1;(statearr_20806_20872[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 9))
{var inst_20656 = (state_20783[12]);var state_20783__$1 = state_20783;var statearr_20807_20873 = state_20783__$1;(statearr_20807_20873[2] = inst_20656);
(statearr_20807_20873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 5))
{var inst_20648 = (state_20783[14]);var inst_20654 = (state_20783[26]);var inst_20654__$1 = (state_20783[2]);var inst_20655 = cljs.core.get.call(null,inst_20654__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var inst_20656 = inst_20648;var inst_20657 = null;var inst_20658 = null;var state_20783__$1 = (function (){var statearr_20808 = state_20783;(statearr_20808[26] = inst_20654__$1);
(statearr_20808[12] = inst_20656);
(statearr_20808[13] = inst_20658);
(statearr_20808[8] = inst_20657);
(statearr_20808[27] = inst_20655);
return statearr_20808;
})();var statearr_20809_20874 = state_20783__$1;(statearr_20809_20874[2] = null);
(statearr_20809_20874[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 14))
{var inst_20658 = (state_20783[13]);var inst_20679 = cljs.core.async.unsub.call(null,bus_out,new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007),inst_20658);var inst_20680 = cljs.core.async.close_BANG_.call(null,inst_20658);var state_20783__$1 = (function (){var statearr_20810 = state_20783;(statearr_20810[28] = inst_20679);
return statearr_20810;
})();var statearr_20811_20875 = state_20783__$1;(statearr_20811_20875[2] = inst_20680);
(statearr_20811_20875[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 16))
{var inst_20674 = (state_20783[11]);var inst_20673 = (state_20783[7]);var inst_20654 = (state_20783[26]);var inst_20656 = (state_20783[12]);var inst_20658 = (state_20783[13]);var inst_20657 = (state_20783[8]);var inst_20666 = (state_20783[15]);var inst_20667 = (state_20783[16]);var inst_20683 = (state_20783[2]);var inst_20684 = cljs.core.async.sub.call(null,bus_out,new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007),inst_20674);var inst_20735 = cljs.core.async.chan.call(null,1);var inst_20736 = (function (){var map__20660 = inst_20666;var map__20646 = inst_20654;var new_subs = inst_20673;var G__20645 = inst_20656;var old_pub_ch = inst_20658;var sub_metas = inst_20667;var pub_ch = inst_20674;var s = inst_20666;var old_subs = inst_20657;var c__8594__auto____$1 = inst_20735;return ((function (map__20660,map__20646,new_subs,G__20645,old_pub_ch,sub_metas,pub_ch,s,old_subs,c__8594__auto____$1,inst_20674,inst_20673,inst_20654,inst_20656,inst_20658,inst_20657,inst_20666,inst_20667,inst_20683,inst_20684,inst_20735,state_val_20784,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (map__20660,map__20646,new_subs,G__20645,old_pub_ch,sub_metas,pub_ch,s,old_subs,c__8594__auto____$1,inst_20674,inst_20673,inst_20654,inst_20656,inst_20658,inst_20657,inst_20666,inst_20667,inst_20683,inst_20684,inst_20735,state_val_20784,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn){
return (function (state_20733){var state_val_20734 = (state_20733[1]);if((state_val_20734 === 7))
{var inst_20731 = (state_20733[2]);var state_20733__$1 = state_20733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20733__$1,inst_20731);
} else
{if((state_val_20734 === 1))
{var state_20733__$1 = state_20733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20733__$1,2,pub_ch);
} else
{if((state_val_20734 === 4))
{var inst_20689 = (state_20733[7]);var state_20733__$1 = state_20733;var statearr_20812_20876 = state_20733__$1;(statearr_20812_20876[2] = inst_20689);
(statearr_20812_20876[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 15))
{var inst_20710 = (state_20733[8]);var inst_20706 = (state_20733[9]);var inst_20715 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(s);var inst_20716 = geschichte.platform_log.debug.call(null,pn,"publishing",inst_20710,"to",inst_20715);var inst_20717 = cljs.core.assoc.call(null,inst_20706,new cljs.core.Keyword(null,"metas","metas",1117691520),inst_20710,new cljs.core.Keyword(null,"peer","peer",1017341140),pn);var state_20733__$1 = (function (){var statearr_20813 = state_20733;(statearr_20813[10] = inst_20716);
return statearr_20813;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20733__$1,17,out,inst_20717);
} else
{if((state_val_20734 === 13))
{var inst_20729 = (state_20733[2]);var state_20733__$1 = state_20733;var statearr_20814_20877 = state_20733__$1;(statearr_20814_20877[2] = inst_20729);
(statearr_20814_20877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 6))
{var inst_20697 = (state_20733[11]);var inst_20701 = cljs.core.seq_QMARK_.call(null,inst_20697);var state_20733__$1 = state_20733;if(inst_20701)
{var statearr_20815_20878 = state_20733__$1;(statearr_20815_20878[1] = 8);
} else
{var statearr_20816_20879 = state_20733__$1;(statearr_20816_20879[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 17))
{var inst_20719 = (state_20733[2]);var inst_20720 = geschichte.platform_log.debug.call(null,pn,"published");var state_20733__$1 = (function (){var statearr_20817 = state_20733;(statearr_20817[12] = inst_20719);
return statearr_20817;
})();var statearr_20818_20880 = state_20733__$1;(statearr_20818_20880[2] = inst_20720);
(statearr_20818_20880[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 3))
{var inst_20689 = (state_20733[7]);var inst_20692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20689);var state_20733__$1 = state_20733;var statearr_20819_20881 = state_20733__$1;(statearr_20819_20881[2] = inst_20692);
(statearr_20819_20881[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 12))
{var state_20733__$1 = state_20733;var statearr_20820_20882 = state_20733__$1;(statearr_20820_20882[2] = null);
(statearr_20820_20882[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 2))
{var inst_20689 = (state_20733[7]);var inst_20689__$1 = (state_20733[2]);var inst_20690 = cljs.core.seq_QMARK_.call(null,inst_20689__$1);var state_20733__$1 = (function (){var statearr_20821 = state_20733;(statearr_20821[7] = inst_20689__$1);
return statearr_20821;
})();if(inst_20690)
{var statearr_20822_20883 = state_20733__$1;(statearr_20822_20883[1] = 3);
} else
{var statearr_20823_20884 = state_20733__$1;(statearr_20823_20884[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 11))
{var inst_20710 = (state_20733[8]);var inst_20698 = (state_20733[13]);var inst_20707 = (state_20733[14]);var inst_20710__$1 = geschichte.sync.filter_subs.call(null,sub_metas,inst_20707,inst_20698);var inst_20711 = geschichte.platform_log.debug.call(null,"NEW-METAS",inst_20707,"subs",sub_metas,inst_20710__$1);var inst_20712 = cljs.core.empty_QMARK_.call(null,inst_20710__$1);var state_20733__$1 = (function (){var statearr_20824 = state_20733;(statearr_20824[8] = inst_20710__$1);
(statearr_20824[15] = inst_20711);
return statearr_20824;
})();if(inst_20712)
{var statearr_20825_20885 = state_20733__$1;(statearr_20825_20885[1] = 14);
} else
{var statearr_20826_20886 = state_20733__$1;(statearr_20826_20886[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 9))
{var inst_20697 = (state_20733[11]);var state_20733__$1 = state_20733;var statearr_20827_20887 = state_20733__$1;(statearr_20827_20887[2] = inst_20697);
(statearr_20827_20887[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 5))
{var inst_20689 = (state_20733[7]);var inst_20695 = (state_20733[2]);var inst_20696 = cljs.core.get.call(null,inst_20695,new cljs.core.Keyword(null,"metas","metas",1117691520));var inst_20697 = inst_20689;var inst_20698 = null;var state_20733__$1 = (function (){var statearr_20828 = state_20733;(statearr_20828[11] = inst_20697);
(statearr_20828[13] = inst_20698);
(statearr_20828[16] = inst_20696);
return statearr_20828;
})();var statearr_20829_20888 = state_20733__$1;(statearr_20829_20888[2] = null);
(statearr_20829_20888[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 14))
{var state_20733__$1 = state_20733;var statearr_20830_20889 = state_20733__$1;(statearr_20830_20889[2] = null);
(statearr_20830_20889[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 16))
{var inst_20722 = (state_20733[2]);var state_20733__$1 = (function (){var statearr_20831 = state_20733;(statearr_20831[17] = inst_20722);
return statearr_20831;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20733__$1,18,pub_ch);
} else
{if((state_val_20734 === 10))
{var inst_20706 = (state_20733[9]);var inst_20706__$1 = (state_20733[2]);var inst_20707 = cljs.core.get.call(null,inst_20706__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var inst_20708 = geschichte.platform_log.debug.call(null,"GO-LOOP-PUB",inst_20706__$1);var state_20733__$1 = (function (){var statearr_20832 = state_20733;(statearr_20832[18] = inst_20708);
(statearr_20832[14] = inst_20707);
(statearr_20832[9] = inst_20706__$1);
return statearr_20832;
})();if(cljs.core.truth_(inst_20706__$1))
{var statearr_20833_20890 = state_20733__$1;(statearr_20833_20890[1] = 11);
} else
{var statearr_20834_20891 = state_20733__$1;(statearr_20834_20891[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 18))
{var inst_20698 = (state_20733[13]);var inst_20707 = (state_20733[14]);var inst_20724 = (state_20733[2]);var inst_20725 = cljs.core.merge_with.call(null,cljs.core.merge,inst_20698,inst_20707);var inst_20697 = inst_20724;var inst_20698__$1 = inst_20725;var state_20733__$1 = (function (){var statearr_20835 = state_20733;(statearr_20835[11] = inst_20697);
(statearr_20835[13] = inst_20698__$1);
return statearr_20835;
})();var statearr_20836_20892 = state_20733__$1;(statearr_20836_20892[2] = null);
(statearr_20836_20892[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20734 === 8))
{var inst_20697 = (state_20733[11]);var inst_20703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20697);var state_20733__$1 = state_20733;var statearr_20837_20893 = state_20733__$1;(statearr_20837_20893[2] = inst_20703);
(statearr_20837_20893[1] = 10);
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
});})(map__20660,map__20646,new_subs,G__20645,old_pub_ch,sub_metas,pub_ch,s,old_subs,c__8594__auto____$1,inst_20674,inst_20673,inst_20654,inst_20656,inst_20658,inst_20657,inst_20666,inst_20667,inst_20683,inst_20684,inst_20735,state_val_20784,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn))
;return ((function (switch__8529__auto__,map__20660,map__20646,new_subs,G__20645,old_pub_ch,sub_metas,pub_ch,s,old_subs,c__8594__auto____$1,inst_20674,inst_20673,inst_20654,inst_20656,inst_20658,inst_20657,inst_20666,inst_20667,inst_20683,inst_20684,inst_20735,state_val_20784,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20841[0] = state_machine__8530__auto__);
(statearr_20841[1] = 1);
return statearr_20841;
});
var state_machine__8530__auto____1 = (function (state_20733){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20733);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20842){if((e20842 instanceof Object))
{var ex__8533__auto__ = e20842;var statearr_20843_20894 = state_20733;(statearr_20843_20894[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20842;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20895 = state_20733;
state_20733 = G__20895;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20733){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,map__20660,map__20646,new_subs,G__20645,old_pub_ch,sub_metas,pub_ch,s,old_subs,c__8594__auto____$1,inst_20674,inst_20673,inst_20654,inst_20656,inst_20658,inst_20657,inst_20666,inst_20667,inst_20683,inst_20684,inst_20735,state_val_20784,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn))
})();var state__8596__auto__ = (function (){var statearr_20844 = f__8595__auto__.call(null);(statearr_20844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_20844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});
;})(map__20660,map__20646,new_subs,G__20645,old_pub_ch,sub_metas,pub_ch,s,old_subs,c__8594__auto____$1,inst_20674,inst_20673,inst_20654,inst_20656,inst_20658,inst_20657,inst_20666,inst_20667,inst_20683,inst_20684,inst_20735,state_val_20784,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn))
})();var inst_20737 = cljs.core.async.impl.dispatch.run.call(null,inst_20736);var inst_20738 = cljs.core._EQ_.call(null,inst_20673,inst_20657);var state_20783__$1 = (function (){var statearr_20845 = state_20783;(statearr_20845[29] = inst_20684);
(statearr_20845[30] = inst_20737);
(statearr_20845[31] = inst_20683);
return statearr_20845;
})();if(inst_20738)
{var statearr_20846_20896 = state_20783__$1;(statearr_20846_20896[1] = 17);
} else
{var statearr_20847_20897 = state_20783__$1;(statearr_20847_20897[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 10))
{var inst_20666 = (state_20783[15]);var inst_20666__$1 = (state_20783[2]);var inst_20667 = cljs.core.get.call(null,inst_20666__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var state_20783__$1 = (function (){var statearr_20848 = state_20783;(statearr_20848[15] = inst_20666__$1);
(statearr_20848[16] = inst_20667);
return statearr_20848;
})();if(cljs.core.truth_(inst_20666__$1))
{var statearr_20849_20898 = state_20783__$1;(statearr_20849_20898[1] = 11);
} else
{var statearr_20850_20899 = state_20783__$1;(statearr_20850_20899[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20784 === 18))
{var inst_20673 = (state_20783[7]);var inst_20741 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_20742 = [new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),inst_20673,pn];var inst_20743 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20741,inst_20742);var state_20783__$1 = state_20783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20783__$1,20,out,inst_20743);
} else
{if((state_val_20784 === 8))
{var inst_20656 = (state_20783[12]);var inst_20663 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20656);var state_20783__$1 = state_20783;var statearr_20851_20900 = state_20783__$1;(statearr_20851_20900[2] = inst_20663);
(statearr_20851_20900[1] = 10);
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
});})(c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn))
;return ((function (switch__8529__auto__,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20855[0] = state_machine__8530__auto__);
(statearr_20855[1] = 1);
return statearr_20855;
});
var state_machine__8530__auto____1 = (function (state_20783){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20783);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20856){if((e20856 instanceof Object))
{var ex__8533__auto__ = e20856;var statearr_20857_20901 = state_20783;(statearr_20857_20901[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20902 = state_20783;
state_20783 = G__20902;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20783){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn))
})();var state__8596__auto__ = (function (){var statearr_20858 = f__8595__auto__.call(null);(statearr_20858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_20858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,map__20642,map__20642__$1,log,chans,vec__20643,bus_in,bus_out,pn))
);
return c__8594__auto__;
});
geschichte.sync.new_transactions_BANG_ = (function new_transactions_BANG_(store,commit_values){return cljs.core.async.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.async.map_LT_.call(null,cljs.core.second,cljs.core.async.filter_LT_.call(null,cljs.core.first,cljs.core.async.merge.call(null,cljs.core.map.call(null,(function (p1__20903_SHARP_){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_20931){var state_val_20932 = (state_20931[1]);if((state_val_20932 === 2))
{var inst_20926 = (state_20931[2]);var inst_20927 = cljs.core.not.call(null,inst_20926);var inst_20928 = [inst_20927,p1__20903_SHARP_];var inst_20929 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20928,null));var state_20931__$1 = state_20931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20931__$1,inst_20929);
} else
{if((state_val_20932 === 1))
{var inst_20922 = [p1__20903_SHARP_];var inst_20923 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20922,null));var inst_20924 = konserve.protocols._get_in.call(null,store,inst_20923);var state_20931__$1 = state_20931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20931__$1,2,inst_20924);
} else
{return null;
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_20936 = [null,null,null,null,null,null,null];(statearr_20936[0] = state_machine__8530__auto__);
(statearr_20936[1] = 1);
return statearr_20936;
});
var state_machine__8530__auto____1 = (function (state_20931){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_20931);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e20937){if((e20937 instanceof Object))
{var ex__8533__auto__ = e20937;var statearr_20938_20940 = state_20931;(statearr_20938_20940[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20941 = state_20931;
state_20931 = G__20941;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_20931){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_20931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_20939 = f__8595__auto__.call(null);(statearr_20939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_20939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"transactions","transactions",2968026311),cljs.core.vals.call(null,commit_values))))))));
});
/**
* Synchronize metadata publications by fetching missing repository values.
*/
geschichte.sync.publish = (function publish(peer,pub_ch,fetched_ch,store,bus_in,out){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_21652){var state_val_21653 = (state_21652[1]);if((state_val_21653 === 65))
{var inst_21468 = (state_21652[7]);var inst_21638 = (state_21652[2]);var inst_21639 = geschichte.platform_log.debug.call(null,inst_21468,"sent new-metas");var state_21652__$1 = (function (){var statearr_21654 = state_21652;(statearr_21654[8] = inst_21638);
return statearr_21654;
})();var statearr_21655_21942 = state_21652__$1;(statearr_21655_21942[2] = inst_21639);
(statearr_21655_21942[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 62))
{var inst_21454 = (state_21652[9]);var inst_21465 = (state_21652[10]);var inst_21456 = (state_21652[11]);var inst_21464 = (state_21652[12]);var inst_21469 = (state_21652[13]);var inst_21628 = (state_21652[14]);var inst_21468 = (state_21652[7]);var inst_21472 = (state_21652[15]);var inst_21633 = (function (){var up_metas = inst_21628;var nc = inst_21472;var remote = inst_21469;var pn = inst_21468;var map__21458 = inst_21464;var metas = inst_21465;var p = inst_21464;var map__21446 = inst_21454;var G__21445 = inst_21456;return ((function (up_metas,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21628,inst_21468,inst_21472,state_val_21653,c__8594__auto__){
return (function (p1__20944_SHARP_,p2__20945_SHARP_){return cljs.core.assoc_in.call(null,p1__20944_SHARP_,cljs.core.first.call(null,p2__20945_SHARP_),cljs.core.second.call(null,cljs.core.second.call(null,p2__20945_SHARP_)));
});
;})(up_metas,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21628,inst_21468,inst_21472,state_val_21653,c__8594__auto__))
})();var inst_21634 = cljs.core.reduce.call(null,inst_21633,inst_21465,inst_21628);var inst_21635 = geschichte.platform_log.info.call(null,inst_21468,"new-metas:",inst_21634);var inst_21636 = cljs.core.assoc.call(null,inst_21464,new cljs.core.Keyword(null,"peer","peer",1017341140),inst_21468,new cljs.core.Keyword(null,"metas","metas",1117691520),inst_21634);var state_21652__$1 = (function (){var statearr_21656 = state_21652;(statearr_21656[16] = inst_21635);
return statearr_21656;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21652__$1,65,bus_in,inst_21636);
} else
{if((state_val_21653 === 7))
{var inst_21650 = (state_21652[2]);var state_21652__$1 = state_21652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21652__$1,inst_21650);
} else
{if((state_val_21653 === 59))
{var inst_21556 = (state_21652[17]);var inst_21596 = (state_21652[2]);var inst_21597 = cljs.core.next.call(null,inst_21556);var inst_21513 = inst_21597;var inst_21514 = null;var inst_21515 = 0;var inst_21516 = 0;var state_21652__$1 = (function (){var statearr_21657 = state_21652;(statearr_21657[18] = inst_21516);
(statearr_21657[19] = inst_21596);
(statearr_21657[20] = inst_21513);
(statearr_21657[21] = inst_21514);
(statearr_21657[22] = inst_21515);
return statearr_21657;
})();var statearr_21658_21943 = state_21652__$1;(statearr_21658_21943[2] = null);
(statearr_21658_21943[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 20))
{var inst_21487 = (state_21652[23]);var inst_21487__$1 = (state_21652[2]);var inst_21488 = cljs.core.empty_QMARK_.call(null,inst_21487__$1);var state_21652__$1 = (function (){var statearr_21659 = state_21652;(statearr_21659[23] = inst_21487__$1);
return statearr_21659;
})();if(inst_21488)
{var statearr_21660_21944 = state_21652__$1;(statearr_21660_21944[1] = 21);
} else
{var statearr_21661_21945 = state_21652__$1;(statearr_21661_21945[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 58))
{var inst_21568 = (state_21652[24]);var inst_21468 = (state_21652[7]);var inst_21567 = (state_21652[25]);var inst_21589 = (state_21652[2]);var inst_21590 = cljs.core.pr_str.call(null,inst_21568);var inst_21591 = geschichte.platform_log.debug.call(null,inst_21468,"assoc-in",inst_21567,inst_21590);var inst_21592 = [inst_21567];var inst_21593 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21592,null));var inst_21594 = konserve.protocols._assoc_in.call(null,store,inst_21593,inst_21568);var state_21652__$1 = (function (){var statearr_21662 = state_21652;(statearr_21662[26] = inst_21589);
(statearr_21662[27] = inst_21591);
return statearr_21662;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,59,inst_21594);
} else
{if((state_val_21653 === 60))
{var inst_21454 = (state_21652[9]);var inst_21465 = (state_21652[10]);var inst_21456 = (state_21652[11]);var inst_21464 = (state_21652[12]);var inst_21469 = (state_21652[13]);var inst_21468 = (state_21652[7]);var inst_21472 = (state_21652[15]);var inst_21616 = (state_21652[2]);var inst_21623 = (function (){var nc = inst_21472;var remote = inst_21469;var pn = inst_21468;var map__21458 = inst_21464;var metas = inst_21465;var p = inst_21464;var map__21446 = inst_21454;var G__21445 = inst_21456;return ((function (nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function iter__21617(s__21618){return (new cljs.core.LazySeq(null,((function (nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (){var s__21618__$1 = s__21618;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21618__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__21752 = cljs.core.first.call(null,xs__4624__auto__);var user = cljs.core.nth.call(null,vec__21752,0,null);var repos = cljs.core.nth.call(null,vec__21752,1,null);var iterys__4260__auto__ = ((function (s__21618__$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function iter__21619(s__21620){return (new cljs.core.LazySeq(null,((function (s__21618__$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (){var s__21620__$1 = s__21620;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21620__$1);if(temp__4126__auto____$1)
{var s__21620__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21620__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__21620__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__21622 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__21621 = 0;while(true){
if((i__21621 < size__4263__auto__))
{var vec__21797 = cljs.core._nth.call(null,c__4262__auto__,i__21621);var repo = cljs.core.nth.call(null,vec__21797,0,null);var meta = cljs.core.nth.call(null,vec__21797,1,null);cljs.core.chunk_append.call(null,b__21622,(function (){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (i__21621,s__21618__$1,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (i__21621,s__21618__$1,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (state_21809){var state_val_21810 = (state_21809[1]);if((state_val_21810 === 2))
{var inst_21799 = (state_21809[7]);var inst_21805 = (state_21809[2]);var inst_21806 = [inst_21799,inst_21805];var inst_21807 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21806,null));var state_21809__$1 = state_21809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21809__$1,inst_21807);
} else
{if((state_val_21810 === 1))
{var inst_21798 = [user,repo];var inst_21799 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21798,null));var inst_21800 = [user,repo];var inst_21801 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21800,null));var inst_21802 = (function (){return ((function (i__21621,s__21618__$1,inst_21798,inst_21799,inst_21800,inst_21801,state_val_21810,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (p1__20942_SHARP_){if(cljs.core.truth_(p1__20942_SHARP_))
{return geschichte.meta.update.call(null,p1__20942_SHARP_,meta);
} else
{return geschichte.meta.update.call(null,meta,meta);
}
});
;})(i__21621,s__21618__$1,inst_21798,inst_21799,inst_21800,inst_21801,state_val_21810,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
})();var inst_21803 = konserve.protocols._update_in.call(null,store,inst_21801,inst_21802);var state_21809__$1 = (function (){var statearr_21811 = state_21809;(statearr_21811[7] = inst_21799);
return statearr_21811;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21809__$1,2,inst_21803);
} else
{return null;
}
}
});})(i__21621,s__21618__$1,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
;return ((function (i__21621,s__21618__$1,switch__8529__auto__,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_21815 = [null,null,null,null,null,null,null,null];(statearr_21815[0] = state_machine__8530__auto__);
(statearr_21815[1] = 1);
return statearr_21815;
});
var state_machine__8530__auto____1 = (function (state_21809){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_21809);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e21816){if((e21816 instanceof Object))
{var ex__8533__auto__ = e21816;var statearr_21817_21946 = state_21809;(statearr_21817_21946[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21809);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21947 = state_21809;
state_21809 = G__21947;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_21809){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_21809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(i__21621,s__21618__$1,switch__8529__auto__,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_21818 = f__8595__auto__.call(null);(statearr_21818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_21818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(i__21621,s__21618__$1,c__8594__auto____$1,vec__21797,repo,meta,c__4262__auto__,size__4263__auto__,b__21622,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
);
return c__8594__auto____$1;
})());
{
var G__21948 = (i__21621 + 1);
i__21621 = G__21948;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21622),iter__21619.call(null,cljs.core.chunk_rest.call(null,s__21620__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21622),null);
}
} else
{var vec__21819 = cljs.core.first.call(null,s__21620__$2);var repo = cljs.core.nth.call(null,vec__21819,0,null);var meta = cljs.core.nth.call(null,vec__21819,1,null);return cljs.core.cons.call(null,(function (){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (s__21618__$1,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (s__21618__$1,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (state_21831){var state_val_21832 = (state_21831[1]);if((state_val_21832 === 2))
{var inst_21821 = (state_21831[7]);var inst_21827 = (state_21831[2]);var inst_21828 = [inst_21821,inst_21827];var inst_21829 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21828,null));var state_21831__$1 = state_21831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21831__$1,inst_21829);
} else
{if((state_val_21832 === 1))
{var inst_21820 = [user,repo];var inst_21821 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21820,null));var inst_21822 = [user,repo];var inst_21823 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21822,null));var inst_21824 = (function (){return ((function (s__21618__$1,inst_21820,inst_21821,inst_21822,inst_21823,state_val_21832,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function (p1__20942_SHARP_){if(cljs.core.truth_(p1__20942_SHARP_))
{return geschichte.meta.update.call(null,p1__20942_SHARP_,meta);
} else
{return geschichte.meta.update.call(null,meta,meta);
}
});
;})(s__21618__$1,inst_21820,inst_21821,inst_21822,inst_21823,state_val_21832,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
})();var inst_21825 = konserve.protocols._update_in.call(null,store,inst_21823,inst_21824);var state_21831__$1 = (function (){var statearr_21833 = state_21831;(statearr_21833[7] = inst_21821);
return statearr_21833;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21831__$1,2,inst_21825);
} else
{return null;
}
}
});})(s__21618__$1,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
;return ((function (s__21618__$1,switch__8529__auto__,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_21837 = [null,null,null,null,null,null,null,null];(statearr_21837[0] = state_machine__8530__auto__);
(statearr_21837[1] = 1);
return statearr_21837;
});
var state_machine__8530__auto____1 = (function (state_21831){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_21831);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e21838){if((e21838 instanceof Object))
{var ex__8533__auto__ = e21838;var statearr_21839_21949 = state_21831;(statearr_21839_21949[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21950 = state_21831;
state_21831 = G__21950;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_21831){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_21831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(s__21618__$1,switch__8529__auto__,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_21840 = f__8595__auto__.call(null);(statearr_21840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_21840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(s__21618__$1,c__8594__auto____$1,vec__21819,repo,meta,s__21620__$2,temp__4126__auto____$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
);
return c__8594__auto____$1;
})(),iter__21619.call(null,cljs.core.rest.call(null,s__21620__$2)));
}
} else
{return null;
}
break;
}
});})(s__21618__$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
,null,null));
});})(s__21618__$1,vec__21752,user,repos,xs__4624__auto__,temp__4126__auto__,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__21617.call(null,cljs.core.rest.call(null,s__21618__$1)));
} else
{{
var G__21951 = cljs.core.rest.call(null,s__21618__$1);
s__21618__$1 = G__21951;
continue;
}
}
} else
{return null;
}
break;
}
});})(nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
,null,null));
});
;})(nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21468,inst_21472,inst_21616,state_val_21653,c__8594__auto__))
})();var inst_21624 = inst_21623.call(null,inst_21465);var inst_21625 = cljs.core.async.merge.call(null,inst_21624);var inst_21626 = cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,inst_21625);var state_21652__$1 = (function (){var statearr_21841 = state_21652;(statearr_21841[28] = inst_21616);
return statearr_21841;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,61,inst_21626);
} else
{if((state_val_21653 === 27))
{var inst_21484 = (state_21652[29]);var inst_21506 = (state_21652[2]);var inst_21511 = cljs.core.concat.call(null,inst_21506,inst_21484);var inst_21512 = cljs.core.seq.call(null,inst_21511);var inst_21513 = inst_21512;var inst_21514 = null;var inst_21515 = 0;var inst_21516 = 0;var state_21652__$1 = (function (){var statearr_21842 = state_21652;(statearr_21842[18] = inst_21516);
(statearr_21842[20] = inst_21513);
(statearr_21842[21] = inst_21514);
(statearr_21842[22] = inst_21515);
return statearr_21842;
})();var statearr_21843_21952 = state_21652__$1;(statearr_21843_21952[2] = null);
(statearr_21843_21952[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 1))
{var state_21652__$1 = state_21652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,2,pub_ch);
} else
{if((state_val_21653 === 24))
{var inst_21496 = (state_21652[2]);var state_21652__$1 = state_21652;var statearr_21844_21953 = state_21652__$1;(statearr_21844_21953[2] = inst_21496);
(statearr_21844_21953[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 55))
{var inst_21580 = (state_21652[2]);var state_21652__$1 = state_21652;if(cljs.core.truth_(inst_21580))
{var statearr_21845_21954 = state_21652__$1;(statearr_21845_21954[1] = 56);
} else
{var statearr_21846_21955 = state_21652__$1;(statearr_21846_21955[1] = 57);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 39))
{var inst_21536 = (state_21652[2]);var state_21652__$1 = state_21652;if(cljs.core.truth_(inst_21536))
{var statearr_21847_21956 = state_21652__$1;(statearr_21847_21956[1] = 40);
} else
{var statearr_21848_21957 = state_21652__$1;(statearr_21848_21957[1] = 41);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 46))
{var inst_21603 = (state_21652[2]);var state_21652__$1 = state_21652;var statearr_21849_21958 = state_21652__$1;(statearr_21849_21958[2] = inst_21603);
(statearr_21849_21958[1] = 33);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 4))
{var inst_21448 = (state_21652[30]);var state_21652__$1 = state_21652;var statearr_21850_21959 = state_21652__$1;(statearr_21850_21959[2] = inst_21448);
(statearr_21850_21959[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 54))
{var inst_21574 = (state_21652[31]);var state_21652__$1 = state_21652;var statearr_21851_21960 = state_21652__$1;(statearr_21851_21960[2] = inst_21574);
(statearr_21851_21960[1] = 55);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 15))
{var state_21652__$1 = state_21652;var statearr_21852_21961 = state_21652__$1;(statearr_21852_21961[2] = null);
(statearr_21852_21961[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 48))
{var inst_21569 = (state_21652[32]);var inst_21556 = (state_21652[17]);var inst_21567 = (state_21652[25]);var inst_21566 = cljs.core.first.call(null,inst_21556);var inst_21567__$1 = cljs.core.nth.call(null,inst_21566,0,null);var inst_21568 = cljs.core.nth.call(null,inst_21566,1,null);var inst_21569__$1 = (inst_21567__$1 == null);var state_21652__$1 = (function (){var statearr_21853 = state_21652;(statearr_21853[32] = inst_21569__$1);
(statearr_21853[24] = inst_21568);
(statearr_21853[25] = inst_21567__$1);
return statearr_21853;
})();if(cljs.core.truth_(inst_21569__$1))
{var statearr_21854_21962 = state_21652__$1;(statearr_21854_21962[1] = 50);
} else
{var statearr_21855_21963 = state_21652__$1;(statearr_21855_21963[1] = 51);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 50))
{var inst_21569 = (state_21652[32]);var state_21652__$1 = state_21652;var statearr_21856_21964 = state_21652__$1;(statearr_21856_21964[2] = inst_21569);
(statearr_21856_21964[1] = 52);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 21))
{var state_21652__$1 = state_21652;var statearr_21857_21965 = state_21652__$1;(statearr_21857_21965[2] = null);
(statearr_21857_21965[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 31))
{var inst_21516 = (state_21652[18]);var inst_21525 = (state_21652[33]);var inst_21523 = (state_21652[34]);var inst_21514 = (state_21652[21]);var inst_21522 = cljs.core._nth.call(null,inst_21514,inst_21516);var inst_21523__$1 = cljs.core.nth.call(null,inst_21522,0,null);var inst_21524 = cljs.core.nth.call(null,inst_21522,1,null);var inst_21525__$1 = (inst_21523__$1 == null);var state_21652__$1 = (function (){var statearr_21858 = state_21652;(statearr_21858[35] = inst_21524);
(statearr_21858[33] = inst_21525__$1);
(statearr_21858[34] = inst_21523__$1);
return statearr_21858;
})();if(cljs.core.truth_(inst_21525__$1))
{var statearr_21859_21966 = state_21652__$1;(statearr_21859_21966[1] = 34);
} else
{var statearr_21860_21967 = state_21652__$1;(statearr_21860_21967[1] = 35);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 32))
{var inst_21556 = (state_21652[17]);var inst_21513 = (state_21652[20]);var inst_21556__$1 = cljs.core.seq.call(null,inst_21513);var state_21652__$1 = (function (){var statearr_21861 = state_21652;(statearr_21861[17] = inst_21556__$1);
return statearr_21861;
})();if(inst_21556__$1)
{var statearr_21862_21968 = state_21652__$1;(statearr_21862_21968[1] = 44);
} else
{var statearr_21863_21969 = state_21652__$1;(statearr_21863_21969[1] = 45);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 40))
{var inst_21524 = (state_21652[35]);var inst_21469 = (state_21652[13]);var inst_21523 = (state_21652[34]);var inst_21468 = (state_21652[7]);var inst_21538 = hasch.core.uuid.call(null,inst_21524);var inst_21539 = cljs.core.pr_str.call(null,inst_21524);var inst_21540 = ("CRITICAL: Fetched ID: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21523)+" does not match HASH "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21538)+" for value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21539)+" from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21469));var inst_21541 = geschichte.platform_log.error.call(null,inst_21468,inst_21540);var inst_21542 = (function(){throw inst_21540})();var state_21652__$1 = (function (){var statearr_21864 = state_21652;(statearr_21864[36] = inst_21541);
return statearr_21864;
})();var statearr_21865_21970 = state_21652__$1;(statearr_21865_21970[2] = inst_21542);
(statearr_21865_21970[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 56))
{var inst_21469 = (state_21652[13]);var inst_21568 = (state_21652[24]);var inst_21468 = (state_21652[7]);var inst_21567 = (state_21652[25]);var inst_21582 = hasch.core.uuid.call(null,inst_21568);var inst_21583 = cljs.core.pr_str.call(null,inst_21568);var inst_21584 = ("CRITICAL: Fetched ID: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21567)+" does not match HASH "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21582)+" for value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21583)+" from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21469));var inst_21585 = geschichte.platform_log.error.call(null,inst_21468,inst_21584);var inst_21586 = (function(){throw inst_21584})();var state_21652__$1 = (function (){var statearr_21866 = state_21652;(statearr_21866[37] = inst_21585);
return statearr_21866;
})();var statearr_21867_21971 = state_21652__$1;(statearr_21867_21971[2] = inst_21586);
(statearr_21867_21971[1] = 58);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 33))
{var inst_21605 = (state_21652[2]);var state_21652__$1 = state_21652;var statearr_21868_21972 = state_21652__$1;(statearr_21868_21972[2] = inst_21605);
(statearr_21868_21972[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 13))
{var inst_21648 = (state_21652[2]);var state_21652__$1 = state_21652;var statearr_21869_21973 = state_21652__$1;(statearr_21869_21973[2] = inst_21648);
(statearr_21869_21973[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 22))
{var inst_21487 = (state_21652[23]);var inst_21469 = (state_21652[13]);var inst_21468 = (state_21652[7]);var inst_21491 = geschichte.platform_log.debug.call(null,inst_21468,"fetching new transactions",inst_21487,"from",inst_21469);var inst_21492 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"ids","ids",1014008362),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_21493 = [new cljs.core.Keyword(null,"fetch","fetch",1111226924),inst_21487,inst_21468];var inst_21494 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21492,inst_21493);var state_21652__$1 = (function (){var statearr_21870 = state_21652;(statearr_21870[38] = inst_21491);
return statearr_21870;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21652__$1,24,out,inst_21494);
} else
{if((state_val_21653 === 36))
{var inst_21530 = (state_21652[39]);var inst_21530__$1 = (state_21652[2]);var state_21652__$1 = (function (){var statearr_21874 = state_21652;(statearr_21874[39] = inst_21530__$1);
return statearr_21874;
})();if(cljs.core.truth_(inst_21530__$1))
{var statearr_21875_21974 = state_21652__$1;(statearr_21875_21974[1] = 37);
} else
{var statearr_21876_21975 = state_21652__$1;(statearr_21876_21975[1] = 38);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 41))
{var state_21652__$1 = state_21652;var statearr_21877_21976 = state_21652__$1;(statearr_21877_21976[2] = null);
(statearr_21877_21976[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 43))
{var inst_21516 = (state_21652[18]);var inst_21513 = (state_21652[20]);var inst_21514 = (state_21652[21]);var inst_21515 = (state_21652[22]);var inst_21552 = (state_21652[2]);var inst_21553 = (inst_21516 + 1);var tmp21871 = inst_21513;var tmp21872 = inst_21514;var tmp21873 = inst_21515;var inst_21513__$1 = tmp21871;var inst_21514__$1 = tmp21872;var inst_21515__$1 = tmp21873;var inst_21516__$1 = inst_21553;var state_21652__$1 = (function (){var statearr_21878 = state_21652;(statearr_21878[18] = inst_21516__$1);
(statearr_21878[40] = inst_21552);
(statearr_21878[20] = inst_21513__$1);
(statearr_21878[21] = inst_21514__$1);
(statearr_21878[22] = inst_21515__$1);
return statearr_21878;
})();var statearr_21879_21977 = state_21652__$1;(statearr_21879_21977[2] = null);
(statearr_21879_21977[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 61))
{var inst_21454 = (state_21652[9]);var inst_21465 = (state_21652[10]);var inst_21456 = (state_21652[11]);var inst_21464 = (state_21652[12]);var inst_21469 = (state_21652[13]);var inst_21628 = (state_21652[14]);var inst_21468 = (state_21652[7]);var inst_21472 = (state_21652[15]);var inst_21628__$1 = (state_21652[2]);var inst_21629 = (function (){var up_metas = inst_21628__$1;var nc = inst_21472;var remote = inst_21469;var pn = inst_21468;var map__21458 = inst_21464;var metas = inst_21465;var p = inst_21464;var map__21446 = inst_21454;var G__21445 = inst_21456;return ((function (up_metas,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21628,inst_21468,inst_21472,inst_21628__$1,state_val_21653,c__8594__auto__){
return (function (p1__20943_SHARP_){var vec__21880 = cljs.core.second.call(null,p1__20943_SHARP_);var old_meta = cljs.core.nth.call(null,vec__21880,0,null);var up_meta = cljs.core.nth.call(null,vec__21880,1,null);return cljs.core.not_EQ_.call(null,old_meta,up_meta);
});
;})(up_metas,nc,remote,pn,map__21458,metas,p,map__21446,G__21445,inst_21454,inst_21465,inst_21456,inst_21464,inst_21469,inst_21628,inst_21468,inst_21472,inst_21628__$1,state_val_21653,c__8594__auto__))
})();var inst_21630 = cljs.core.map.call(null,inst_21629,inst_21628__$1);var inst_21631 = cljs.core.some.call(null,cljs.core.true_QMARK_,inst_21630);var state_21652__$1 = (function (){var statearr_21881 = state_21652;(statearr_21881[14] = inst_21628__$1);
return statearr_21881;
})();if(cljs.core.truth_(inst_21631))
{var statearr_21882_21978 = state_21652__$1;(statearr_21882_21978[1] = 62);
} else
{var statearr_21883_21979 = state_21652__$1;(statearr_21883_21979[1] = 63);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 29))
{var inst_21516 = (state_21652[18]);var inst_21515 = (state_21652[22]);var inst_21518 = (inst_21516 < inst_21515);var inst_21519 = inst_21518;var state_21652__$1 = state_21652;if(cljs.core.truth_(inst_21519))
{var statearr_21884_21980 = state_21652__$1;(statearr_21884_21980[1] = 31);
} else
{var statearr_21885_21981 = state_21652__$1;(statearr_21885_21981[1] = 32);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 44))
{var inst_21556 = (state_21652[17]);var inst_21558 = cljs.core.chunked_seq_QMARK_.call(null,inst_21556);var state_21652__$1 = state_21652;if(inst_21558)
{var statearr_21886_21982 = state_21652__$1;(statearr_21886_21982[1] = 47);
} else
{var statearr_21887_21983 = state_21652__$1;(statearr_21887_21983[1] = 48);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 6))
{var inst_21456 = (state_21652[11]);var inst_21459 = cljs.core.seq_QMARK_.call(null,inst_21456);var state_21652__$1 = state_21652;if(inst_21459)
{var statearr_21888_21984 = state_21652__$1;(statearr_21888_21984[1] = 8);
} else
{var statearr_21889_21985 = state_21652__$1;(statearr_21889_21985[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 28))
{var inst_21503 = (state_21652[2]);var inst_21504 = new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(inst_21503);var state_21652__$1 = state_21652;var statearr_21890_21986 = state_21652__$1;(statearr_21890_21986[2] = inst_21504);
(statearr_21890_21986[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 64))
{var inst_21642 = (state_21652[2]);var state_21652__$1 = (function (){var statearr_21891 = state_21652;(statearr_21891[41] = inst_21642);
return statearr_21891;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,66,pub_ch);
} else
{if((state_val_21653 === 51))
{var inst_21567 = (state_21652[25]);var inst_21572 = hasch.core.uuid_QMARK_.call(null,inst_21567);var state_21652__$1 = state_21652;var statearr_21892_21987 = state_21652__$1;(statearr_21892_21987[2] = inst_21572);
(statearr_21892_21987[1] = 52);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 25))
{var state_21652__$1 = state_21652;var statearr_21893_21988 = state_21652__$1;(statearr_21893_21988[2] = null);
(statearr_21893_21988[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 34))
{var inst_21525 = (state_21652[33]);var state_21652__$1 = state_21652;var statearr_21894_21989 = state_21652__$1;(statearr_21894_21989[2] = inst_21525);
(statearr_21894_21989[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 17))
{var inst_21464 = (state_21652[12]);var inst_21469 = (state_21652[13]);var inst_21468 = (state_21652[7]);var inst_21472 = (state_21652[15]);var inst_21609 = (state_21652[2]);var inst_21610 = geschichte.platform_log.debug.call(null,inst_21468,"fetched",inst_21472,"from",inst_21469);var inst_21611 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_21612 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(inst_21464);var inst_21613 = [new cljs.core.Keyword(null,"meta-pubed","meta-pubed",790870534),inst_21612];var inst_21614 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21611,inst_21613);var state_21652__$1 = (function (){var statearr_21895 = state_21652;(statearr_21895[42] = inst_21609);
(statearr_21895[43] = inst_21610);
return statearr_21895;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21652__$1,60,out,inst_21614);
} else
{if((state_val_21653 === 3))
{var inst_21448 = (state_21652[30]);var inst_21451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21448);var state_21652__$1 = state_21652;var statearr_21896_21990 = state_21652__$1;(statearr_21896_21990[2] = inst_21451);
(statearr_21896_21990[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 12))
{var state_21652__$1 = state_21652;var statearr_21897_21991 = state_21652__$1;(statearr_21897_21991[2] = null);
(statearr_21897_21991[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 2))
{var inst_21448 = (state_21652[30]);var inst_21448__$1 = (state_21652[2]);var inst_21449 = cljs.core.seq_QMARK_.call(null,inst_21448__$1);var state_21652__$1 = (function (){var statearr_21898 = state_21652;(statearr_21898[30] = inst_21448__$1);
return statearr_21898;
})();if(inst_21449)
{var statearr_21899_21992 = state_21652__$1;(statearr_21899_21992[1] = 3);
} else
{var statearr_21900_21993 = state_21652__$1;(statearr_21900_21993[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 66))
{var inst_21644 = (state_21652[2]);var inst_21456 = inst_21644;var state_21652__$1 = (function (){var statearr_21901 = state_21652;(statearr_21901[11] = inst_21456);
return statearr_21901;
})();var statearr_21902_21994 = state_21652__$1;(statearr_21902_21994[2] = null);
(statearr_21902_21994[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 23))
{var inst_21487 = (state_21652[23]);var inst_21498 = (state_21652[2]);var inst_21499 = cljs.core.empty_QMARK_.call(null,inst_21487);var state_21652__$1 = (function (){var statearr_21903 = state_21652;(statearr_21903[44] = inst_21498);
return statearr_21903;
})();if(inst_21499)
{var statearr_21904_21995 = state_21652__$1;(statearr_21904_21995[1] = 25);
} else
{var statearr_21905_21996 = state_21652__$1;(statearr_21905_21996[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 47))
{var inst_21556 = (state_21652[17]);var inst_21560 = cljs.core.chunk_first.call(null,inst_21556);var inst_21561 = cljs.core.chunk_rest.call(null,inst_21556);var inst_21562 = cljs.core.count.call(null,inst_21560);var inst_21513 = inst_21561;var inst_21514 = inst_21560;var inst_21515 = inst_21562;var inst_21516 = 0;var state_21652__$1 = (function (){var statearr_21906 = state_21652;(statearr_21906[18] = inst_21516);
(statearr_21906[20] = inst_21513);
(statearr_21906[21] = inst_21514);
(statearr_21906[22] = inst_21515);
return statearr_21906;
})();var statearr_21907_21997 = state_21652__$1;(statearr_21907_21997[2] = null);
(statearr_21907_21997[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 35))
{var inst_21523 = (state_21652[34]);var inst_21528 = hasch.core.uuid_QMARK_.call(null,inst_21523);var state_21652__$1 = state_21652;var statearr_21908_21998 = state_21652__$1;(statearr_21908_21998[2] = inst_21528);
(statearr_21908_21998[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 19))
{var inst_21484 = (state_21652[29]);var inst_21483 = (state_21652[2]);var inst_21484__$1 = new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(inst_21483);var inst_21485 = geschichte.sync.new_transactions_BANG_.call(null,store,inst_21484__$1);var state_21652__$1 = (function (){var statearr_21909 = state_21652;(statearr_21909[29] = inst_21484__$1);
return statearr_21909;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,20,inst_21485);
} else
{if((state_val_21653 === 57))
{var state_21652__$1 = state_21652;var statearr_21910_21999 = state_21652__$1;(statearr_21910_21999[2] = null);
(statearr_21910_21999[1] = 58);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 11))
{var inst_21465 = (state_21652[10]);var inst_21464 = (state_21652[12]);var inst_21467 = cljs.core.deref.call(null,peer);var inst_21468 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_21467);var inst_21469 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(inst_21464);var inst_21470 = geschichte.sync.new_commits_BANG_.call(null,store,inst_21465);var state_21652__$1 = (function (){var statearr_21911 = state_21652;(statearr_21911[13] = inst_21469);
(statearr_21911[7] = inst_21468);
return statearr_21911;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,14,inst_21470);
} else
{if((state_val_21653 === 9))
{var inst_21456 = (state_21652[11]);var state_21652__$1 = state_21652;var statearr_21912_22000 = state_21652__$1;(statearr_21912_22000[2] = inst_21456);
(statearr_21912_22000[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 5))
{var inst_21454 = (state_21652[9]);var inst_21448 = (state_21652[30]);var inst_21454__$1 = (state_21652[2]);var inst_21455 = cljs.core.get.call(null,inst_21454__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var inst_21456 = inst_21448;var state_21652__$1 = (function (){var statearr_21913 = state_21652;(statearr_21913[9] = inst_21454__$1);
(statearr_21913[11] = inst_21456);
(statearr_21913[45] = inst_21455);
return statearr_21913;
})();var statearr_21914_22001 = state_21652__$1;(statearr_21914_22001[2] = null);
(statearr_21914_22001[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 14))
{var inst_21472 = (state_21652[15]);var inst_21472__$1 = (state_21652[2]);var inst_21473 = cljs.core.empty_QMARK_.call(null,inst_21472__$1);var state_21652__$1 = (function (){var statearr_21915 = state_21652;(statearr_21915[15] = inst_21472__$1);
return statearr_21915;
})();if(inst_21473)
{var statearr_21916_22002 = state_21652__$1;(statearr_21916_22002[1] = 15);
} else
{var statearr_21917_22003 = state_21652__$1;(statearr_21917_22003[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 45))
{var state_21652__$1 = state_21652;var statearr_21918_22004 = state_21652__$1;(statearr_21918_22004[2] = null);
(statearr_21918_22004[1] = 46);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 53))
{var inst_21568 = (state_21652[24]);var inst_21567 = (state_21652[25]);var inst_21576 = hasch.core.uuid.call(null,inst_21568);var inst_21577 = cljs.core.not_EQ_.call(null,inst_21567,inst_21576);var state_21652__$1 = state_21652;var statearr_21919_22005 = state_21652__$1;(statearr_21919_22005[2] = inst_21577);
(statearr_21919_22005[1] = 55);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 26))
{var state_21652__$1 = state_21652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,28,fetched_ch);
} else
{if((state_val_21653 === 16))
{var inst_21469 = (state_21652[13]);var inst_21468 = (state_21652[7]);var inst_21472 = (state_21652[15]);var inst_21476 = geschichte.platform_log.info.call(null,inst_21468,"fetching",inst_21472,"from",inst_21469);var inst_21477 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"ids","ids",1014008362),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_21478 = [new cljs.core.Keyword(null,"fetch","fetch",1111226924),inst_21472,inst_21468];var inst_21479 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21477,inst_21478);var state_21652__$1 = (function (){var statearr_21920 = state_21652;(statearr_21920[46] = inst_21476);
return statearr_21920;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21652__$1,18,out,inst_21479);
} else
{if((state_val_21653 === 38))
{var inst_21530 = (state_21652[39]);var state_21652__$1 = state_21652;var statearr_21921_22006 = state_21652__$1;(statearr_21921_22006[2] = inst_21530);
(statearr_21921_22006[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 30))
{var inst_21607 = (state_21652[2]);var state_21652__$1 = state_21652;var statearr_21922_22007 = state_21652__$1;(statearr_21922_22007[2] = inst_21607);
(statearr_21922_22007[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 10))
{var inst_21464 = (state_21652[12]);var inst_21464__$1 = (state_21652[2]);var inst_21465 = cljs.core.get.call(null,inst_21464__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var state_21652__$1 = (function (){var statearr_21923 = state_21652;(statearr_21923[10] = inst_21465);
(statearr_21923[12] = inst_21464__$1);
return statearr_21923;
})();if(cljs.core.truth_(inst_21464__$1))
{var statearr_21924_22008 = state_21652__$1;(statearr_21924_22008[1] = 11);
} else
{var statearr_21925_22009 = state_21652__$1;(statearr_21925_22009[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 18))
{var inst_21481 = (state_21652[2]);var state_21652__$1 = (function (){var statearr_21926 = state_21652;(statearr_21926[47] = inst_21481);
return statearr_21926;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,19,fetched_ch);
} else
{if((state_val_21653 === 52))
{var inst_21574 = (state_21652[31]);var inst_21574__$1 = (state_21652[2]);var state_21652__$1 = (function (){var statearr_21927 = state_21652;(statearr_21927[31] = inst_21574__$1);
return statearr_21927;
})();if(cljs.core.truth_(inst_21574__$1))
{var statearr_21928_22010 = state_21652__$1;(statearr_21928_22010[1] = 53);
} else
{var statearr_21929_22011 = state_21652__$1;(statearr_21929_22011[1] = 54);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 42))
{var inst_21524 = (state_21652[35]);var inst_21523 = (state_21652[34]);var inst_21468 = (state_21652[7]);var inst_21545 = (state_21652[2]);var inst_21546 = cljs.core.pr_str.call(null,inst_21524);var inst_21547 = geschichte.platform_log.debug.call(null,inst_21468,"assoc-in",inst_21523,inst_21546);var inst_21548 = [inst_21523];var inst_21549 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21548,null));var inst_21550 = konserve.protocols._assoc_in.call(null,store,inst_21549,inst_21524);var state_21652__$1 = (function (){var statearr_21930 = state_21652;(statearr_21930[48] = inst_21545);
(statearr_21930[49] = inst_21547);
return statearr_21930;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,43,inst_21550);
} else
{if((state_val_21653 === 37))
{var inst_21524 = (state_21652[35]);var inst_21523 = (state_21652[34]);var inst_21532 = hasch.core.uuid.call(null,inst_21524);var inst_21533 = cljs.core.not_EQ_.call(null,inst_21523,inst_21532);var state_21652__$1 = state_21652;var statearr_21931_22012 = state_21652__$1;(statearr_21931_22012[2] = inst_21533);
(statearr_21931_22012[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 63))
{var state_21652__$1 = state_21652;var statearr_21932_22013 = state_21652__$1;(statearr_21932_22013[2] = null);
(statearr_21932_22013[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 8))
{var inst_21456 = (state_21652[11]);var inst_21461 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21456);var state_21652__$1 = state_21652;var statearr_21933_22014 = state_21652__$1;(statearr_21933_22014[2] = inst_21461);
(statearr_21933_22014[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21653 === 49))
{var inst_21600 = (state_21652[2]);var state_21652__$1 = state_21652;var statearr_21934_22015 = state_21652__$1;(statearr_21934_22015[2] = inst_21600);
(statearr_21934_22015[1] = 46);
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
var state_machine__8530__auto____0 = (function (){var statearr_21938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21938[0] = state_machine__8530__auto__);
(statearr_21938[1] = 1);
return statearr_21938;
});
var state_machine__8530__auto____1 = (function (state_21652){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_21652);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e21939){if((e21939 instanceof Object))
{var ex__8533__auto__ = e21939;var statearr_21940_22016 = state_21652;(statearr_21940_22016[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22017 = state_21652;
state_21652 = G__22017;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_21652){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_21652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_21941 = f__8595__auto__.call(null);(statearr_21941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_21941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Service connection requests.
*/
geschichte.sync.connect = (function connect(peer,conn_ch,out){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_22324){var state_val_22325 = (state_22324[1]);if((state_val_22325 === 7))
{var inst_22322 = (state_22324[2]);var state_22324__$1 = state_22324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22324__$1,inst_22322);
} else
{if((state_val_22325 === 1))
{var state_22324__$1 = state_22324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22324__$1,2,conn_ch);
} else
{if((state_val_22325 === 4))
{var inst_22206 = (state_22324[7]);var state_22324__$1 = state_22324;var statearr_22326_22386 = state_22324__$1;(statearr_22326_22386[2] = inst_22206);
(statearr_22326_22386[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 15))
{var inst_22236 = (state_22324[8]);var inst_22251 = (state_22324[9]);var inst_22248 = (state_22324[10]);var inst_22258 = (state_22324[2]);var inst_22259 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_22260 = [new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),inst_22251,inst_22236];var inst_22261 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22259,inst_22260);var state_22324__$1 = (function (){var statearr_22327 = state_22324;(statearr_22327[11] = inst_22258);
return statearr_22327;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22324__$1,16,inst_22248,inst_22261);
} else
{if((state_val_22325 === 13))
{var inst_22320 = (state_22324[2]);var state_22324__$1 = state_22324;var statearr_22328_22387 = state_22324__$1;(statearr_22328_22387[2] = inst_22320);
(statearr_22328_22387[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 6))
{var inst_22214 = (state_22324[12]);var inst_22217 = cljs.core.seq_QMARK_.call(null,inst_22214);var state_22324__$1 = state_22324;if(inst_22217)
{var statearr_22329_22388 = state_22324__$1;(statearr_22329_22388[1] = 8);
} else
{var statearr_22330_22389 = state_22324__$1;(statearr_22330_22389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 17))
{var inst_22252 = (state_22324[13]);var inst_22223 = (state_22324[14]);var inst_22222 = (state_22324[15]);var inst_22307 = (state_22324[2]);var inst_22308 = cljs.core.async.close_BANG_.call(null,inst_22252);var inst_22309 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_22310 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(inst_22222);var inst_22311 = [new cljs.core.Keyword(null,"connected","connected",4729661051),inst_22223,inst_22310];var inst_22312 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22309,inst_22311);var state_22324__$1 = (function (){var statearr_22331 = state_22324;(statearr_22331[16] = inst_22308);
(statearr_22331[17] = inst_22307);
return statearr_22331;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22324__$1,18,out,inst_22312);
} else
{if((state_val_22325 === 3))
{var inst_22206 = (state_22324[7]);var inst_22209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22206);var state_22324__$1 = state_22324;var statearr_22332_22390 = state_22324__$1;(statearr_22332_22390[2] = inst_22209);
(statearr_22332_22390[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 12))
{var state_22324__$1 = state_22324;var statearr_22333_22391 = state_22324__$1;(statearr_22333_22391[2] = null);
(statearr_22333_22391[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 2))
{var inst_22206 = (state_22324[7]);var inst_22206__$1 = (state_22324[2]);var inst_22207 = cljs.core.seq_QMARK_.call(null,inst_22206__$1);var state_22324__$1 = (function (){var statearr_22334 = state_22324;(statearr_22334[7] = inst_22206__$1);
return statearr_22334;
})();if(inst_22207)
{var statearr_22335_22392 = state_22324__$1;(statearr_22335_22392[1] = 3);
} else
{var statearr_22336_22393 = state_22324__$1;(statearr_22336_22393[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 19))
{var inst_22316 = (state_22324[2]);var inst_22214 = inst_22316;var state_22324__$1 = (function (){var statearr_22337 = state_22324;(statearr_22337[12] = inst_22214);
return statearr_22337;
})();var statearr_22338_22394 = state_22324__$1;(statearr_22338_22394[2] = null);
(statearr_22338_22394[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 11))
{var inst_22232 = (state_22324[18]);var inst_22223 = (state_22324[14]);var inst_22225 = cljs.core.deref.call(null,peer);var inst_22226 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_22225);var inst_22227 = geschichte.platform_log.debug.call(null,inst_22226,"connecting to:",inst_22223);var inst_22230 = cljs.core.deref.call(null,peer);var inst_22231 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_22230);var inst_22232__$1 = new cljs.core.Keyword(null,"chans","chans",1108527827).cljs$core$IFn$_invoke$arity$1(inst_22231);var inst_22233 = cljs.core.nth.call(null,inst_22232__$1,0,null);var inst_22234 = cljs.core.nth.call(null,inst_22232__$1,1,null);var inst_22235 = cljs.core.deref.call(null,peer);var inst_22236 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_22235);var inst_22237 = cljs.core.deref.call(null,peer);var inst_22238 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_22237);var inst_22239 = new cljs.core.Keyword(null,"log","log",1014011574).cljs$core$IFn$_invoke$arity$1(inst_22238);var inst_22240 = cljs.core.deref.call(null,peer);var inst_22241 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_22240);var inst_22242 = new cljs.core.Keyword(null,"store","store",1123675219).cljs$core$IFn$_invoke$arity$1(inst_22241);var inst_22243 = new cljs.core.Keyword(null,"tag-table","tag-table",1673488205).cljs$core$IFn$_invoke$arity$1(inst_22242);var inst_22244 = geschichte.platform.client_connect_BANG_.call(null,inst_22223,inst_22243);var state_22324__$1 = (function (){var statearr_22339 = state_22324;(statearr_22339[19] = inst_22239);
(statearr_22339[20] = inst_22227);
(statearr_22339[18] = inst_22232__$1);
(statearr_22339[8] = inst_22236);
(statearr_22339[21] = inst_22233);
(statearr_22339[22] = inst_22234);
return statearr_22339;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22324__$1,14,inst_22244);
} else
{if((state_val_22325 === 9))
{var inst_22214 = (state_22324[12]);var state_22324__$1 = state_22324;var statearr_22340_22395 = state_22324__$1;(statearr_22340_22395[2] = inst_22214);
(statearr_22340_22395[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 5))
{var inst_22206 = (state_22324[7]);var inst_22212 = (state_22324[23]);var inst_22212__$1 = (state_22324[2]);var inst_22213 = cljs.core.get.call(null,inst_22212__$1,new cljs.core.Keyword(null,"url","url",1014020321));var inst_22214 = inst_22206;var state_22324__$1 = (function (){var statearr_22341 = state_22324;(statearr_22341[12] = inst_22214);
(statearr_22341[24] = inst_22213);
(statearr_22341[23] = inst_22212__$1);
return statearr_22341;
})();var statearr_22342_22396 = state_22324__$1;(statearr_22342_22396[2] = null);
(statearr_22342_22396[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 14))
{var inst_22247 = (state_22324[25]);var inst_22252 = (state_22324[13]);var inst_22249 = (state_22324[26]);var inst_22248 = (state_22324[10]);var inst_22246 = (state_22324[27]);var inst_22234 = (state_22324[22]);var inst_22246__$1 = (state_22324[2]);var inst_22247__$1 = cljs.core.nth.call(null,inst_22246__$1,0,null);var inst_22248__$1 = cljs.core.nth.call(null,inst_22246__$1,1,null);var inst_22249__$1 = cljs.core.async.pub.call(null,inst_22247__$1,new cljs.core.Keyword(null,"topic","topic",1124450465));var inst_22250 = cljs.core.deref.call(null,peer);var inst_22251 = new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890).cljs$core$IFn$_invoke$arity$1(inst_22250);var inst_22252__$1 = cljs.core.async.chan.call(null);var inst_22253 = cljs.core.async.sub.call(null,inst_22234,new cljs.core.Keyword(null,"meta-subed","meta-subed",793641097),inst_22252__$1);var inst_22254 = [inst_22248__$1,inst_22249__$1];var inst_22255 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22254,null));var inst_22256 = geschichte.sync.wire.call(null,peer,inst_22255);var state_22324__$1 = (function (){var statearr_22343 = state_22324;(statearr_22343[25] = inst_22247__$1);
(statearr_22343[13] = inst_22252__$1);
(statearr_22343[26] = inst_22249__$1);
(statearr_22343[9] = inst_22251);
(statearr_22343[10] = inst_22248__$1);
(statearr_22343[27] = inst_22246__$1);
(statearr_22343[28] = inst_22253);
return statearr_22343;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22324__$1,15,inst_22256);
} else
{if((state_val_22325 === 16))
{var inst_22247 = (state_22324[25]);var inst_22239 = (state_22324[19]);var inst_22252 = (state_22324[13]);var inst_22214 = (state_22324[12]);var inst_22232 = (state_22324[18]);var inst_22249 = (state_22324[26]);var inst_22236 = (state_22324[8]);var inst_22251 = (state_22324[9]);var inst_22233 = (state_22324[21]);var inst_22212 = (state_22324[23]);var inst_22248 = (state_22324[10]);var inst_22246 = (state_22324[27]);var inst_22234 = (state_22324[22]);var inst_22223 = (state_22324[14]);var inst_22222 = (state_22324[15]);var inst_22263 = (state_22324[2]);var inst_22303 = cljs.core.async.chan.call(null,1);var inst_22304 = (function (){var subs = inst_22251;var subed_ch = inst_22252;var log = inst_22239;var p = inst_22249;var c_in = inst_22247;var pn = inst_22236;var bus_out = inst_22234;var vec__22229 = inst_22246;var bus_in = inst_22233;var map__22204 = inst_22212;var map__22216 = inst_22222;var c = inst_22222;var G__22203 = inst_22214;var c__8594__auto____$1 = inst_22303;var c_out = inst_22248;var url = inst_22223;var vec__22228 = inst_22232;return ((function (subs,subed_ch,log,p,c_in,pn,bus_out,vec__22229,bus_in,map__22204,map__22216,c,G__22203,c__8594__auto____$1,c_out,url,vec__22228,inst_22247,inst_22239,inst_22252,inst_22214,inst_22232,inst_22249,inst_22236,inst_22251,inst_22233,inst_22212,inst_22248,inst_22246,inst_22234,inst_22223,inst_22222,inst_22263,inst_22303,state_val_22325,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (subs,subed_ch,log,p,c_in,pn,bus_out,vec__22229,bus_in,map__22204,map__22216,c,G__22203,c__8594__auto____$1,c_out,url,vec__22228,inst_22247,inst_22239,inst_22252,inst_22214,inst_22232,inst_22249,inst_22236,inst_22251,inst_22233,inst_22212,inst_22248,inst_22246,inst_22234,inst_22223,inst_22222,inst_22263,inst_22303,state_val_22325,c__8594__auto__){
return (function (state_22301){var state_val_22302 = (state_22301[1]);if((state_val_22302 === 7))
{var inst_22299 = (state_22301[2]);var state_22301__$1 = state_22301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22301__$1,inst_22299);
} else
{if((state_val_22302 === 1))
{var state_22301__$1 = state_22301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22301__$1,2,subed_ch);
} else
{if((state_val_22302 === 4))
{var inst_22268 = (state_22301[7]);var state_22301__$1 = state_22301;var statearr_22344_22397 = state_22301__$1;(statearr_22344_22397[2] = inst_22268);
(statearr_22344_22397[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 15))
{var state_22301__$1 = state_22301;var statearr_22345_22398 = state_22301__$1;(statearr_22345_22398[2] = null);
(statearr_22345_22398[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 13))
{var inst_22290 = (state_22301[2]);var state_22301__$1 = state_22301;if(cljs.core.truth_(inst_22290))
{var statearr_22346_22399 = state_22301__$1;(statearr_22346_22399[1] = 14);
} else
{var statearr_22347_22400 = state_22301__$1;(statearr_22347_22400[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 6))
{var inst_22276 = (state_22301[8]);var inst_22279 = cljs.core.seq_QMARK_.call(null,inst_22276);var state_22301__$1 = state_22301;if(inst_22279)
{var statearr_22348_22401 = state_22301__$1;(statearr_22348_22401[1] = 8);
} else
{var statearr_22349_22402 = state_22301__$1;(statearr_22349_22402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 17))
{var inst_22293 = (state_22301[2]);var inst_22276 = inst_22293;var state_22301__$1 = (function (){var statearr_22350 = state_22301;(statearr_22350[8] = inst_22276);
return statearr_22350;
})();var statearr_22351_22403 = state_22301__$1;(statearr_22351_22403[2] = null);
(statearr_22351_22403[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 3))
{var inst_22268 = (state_22301[7]);var inst_22271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22268);var state_22301__$1 = state_22301;var statearr_22352_22404 = state_22301__$1;(statearr_22352_22404[2] = inst_22271);
(statearr_22352_22404[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 12))
{var inst_22284 = (state_22301[9]);var state_22301__$1 = state_22301;var statearr_22353_22405 = state_22301__$1;(statearr_22353_22405[2] = inst_22284);
(statearr_22353_22405[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 2))
{var inst_22268 = (state_22301[7]);var inst_22268__$1 = (state_22301[2]);var inst_22269 = cljs.core.seq_QMARK_.call(null,inst_22268__$1);var state_22301__$1 = (function (){var statearr_22354 = state_22301;(statearr_22354[7] = inst_22268__$1);
return statearr_22354;
})();if(inst_22269)
{var statearr_22355_22406 = state_22301__$1;(statearr_22355_22406[1] = 3);
} else
{var statearr_22356_22407 = state_22301__$1;(statearr_22356_22407[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 11))
{var inst_22285 = (state_22301[10]);var inst_22287 = cljs.core.not_EQ_.call(null,inst_22285,url);var state_22301__$1 = state_22301;var statearr_22357_22408 = state_22301__$1;(statearr_22357_22408[2] = inst_22287);
(statearr_22357_22408[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 9))
{var inst_22276 = (state_22301[8]);var state_22301__$1 = state_22301;var statearr_22358_22409 = state_22301__$1;(statearr_22358_22409[2] = inst_22276);
(statearr_22358_22409[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 5))
{var inst_22268 = (state_22301[7]);var inst_22274 = (state_22301[2]);var inst_22275 = cljs.core.get.call(null,inst_22274,new cljs.core.Keyword(null,"peer","peer",1017341140));var inst_22276 = inst_22268;var state_22301__$1 = (function (){var statearr_22359 = state_22301;(statearr_22359[11] = inst_22275);
(statearr_22359[8] = inst_22276);
return statearr_22359;
})();var statearr_22360_22410 = state_22301__$1;(statearr_22360_22410[2] = null);
(statearr_22360_22410[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 14))
{var state_22301__$1 = state_22301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22301__$1,17,subed_ch);
} else
{if((state_val_22302 === 16))
{var inst_22297 = (state_22301[2]);var state_22301__$1 = state_22301;var statearr_22361_22411 = state_22301__$1;(statearr_22361_22411[2] = inst_22297);
(statearr_22361_22411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 10))
{var inst_22284 = (state_22301[9]);var inst_22284__$1 = (state_22301[2]);var inst_22285 = cljs.core.get.call(null,inst_22284__$1,new cljs.core.Keyword(null,"peer","peer",1017341140));var state_22301__$1 = (function (){var statearr_22362 = state_22301;(statearr_22362[10] = inst_22285);
(statearr_22362[9] = inst_22284__$1);
return statearr_22362;
})();if(cljs.core.truth_(inst_22284__$1))
{var statearr_22363_22412 = state_22301__$1;(statearr_22363_22412[1] = 11);
} else
{var statearr_22364_22413 = state_22301__$1;(statearr_22364_22413[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22302 === 8))
{var inst_22276 = (state_22301[8]);var inst_22281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22276);var state_22301__$1 = state_22301;var statearr_22365_22414 = state_22301__$1;(statearr_22365_22414[2] = inst_22281);
(statearr_22365_22414[1] = 10);
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
});})(subs,subed_ch,log,p,c_in,pn,bus_out,vec__22229,bus_in,map__22204,map__22216,c,G__22203,c__8594__auto____$1,c_out,url,vec__22228,inst_22247,inst_22239,inst_22252,inst_22214,inst_22232,inst_22249,inst_22236,inst_22251,inst_22233,inst_22212,inst_22248,inst_22246,inst_22234,inst_22223,inst_22222,inst_22263,inst_22303,state_val_22325,c__8594__auto__))
;return ((function (switch__8529__auto__,subs,subed_ch,log,p,c_in,pn,bus_out,vec__22229,bus_in,map__22204,map__22216,c,G__22203,c__8594__auto____$1,c_out,url,vec__22228,inst_22247,inst_22239,inst_22252,inst_22214,inst_22232,inst_22249,inst_22236,inst_22251,inst_22233,inst_22212,inst_22248,inst_22246,inst_22234,inst_22223,inst_22222,inst_22263,inst_22303,state_val_22325,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_22369 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22369[0] = state_machine__8530__auto__);
(statearr_22369[1] = 1);
return statearr_22369;
});
var state_machine__8530__auto____1 = (function (state_22301){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_22301);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e22370){if((e22370 instanceof Object))
{var ex__8533__auto__ = e22370;var statearr_22371_22415 = state_22301;(statearr_22371_22415[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22416 = state_22301;
state_22301 = G__22416;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_22301){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_22301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,subs,subed_ch,log,p,c_in,pn,bus_out,vec__22229,bus_in,map__22204,map__22216,c,G__22203,c__8594__auto____$1,c_out,url,vec__22228,inst_22247,inst_22239,inst_22252,inst_22214,inst_22232,inst_22249,inst_22236,inst_22251,inst_22233,inst_22212,inst_22248,inst_22246,inst_22234,inst_22223,inst_22222,inst_22263,inst_22303,state_val_22325,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_22372 = f__8595__auto__.call(null);(statearr_22372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_22372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});
;})(subs,subed_ch,log,p,c_in,pn,bus_out,vec__22229,bus_in,map__22204,map__22216,c,G__22203,c__8594__auto____$1,c_out,url,vec__22228,inst_22247,inst_22239,inst_22252,inst_22214,inst_22232,inst_22249,inst_22236,inst_22251,inst_22233,inst_22212,inst_22248,inst_22246,inst_22234,inst_22223,inst_22222,inst_22263,inst_22303,state_val_22325,c__8594__auto__))
})();var inst_22305 = cljs.core.async.impl.dispatch.run.call(null,inst_22304);var state_22324__$1 = (function (){var statearr_22373 = state_22324;(statearr_22373[29] = inst_22305);
(statearr_22373[30] = inst_22263);
return statearr_22373;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22324__$1,17,inst_22303);
} else
{if((state_val_22325 === 10))
{var inst_22222 = (state_22324[15]);var inst_22222__$1 = (state_22324[2]);var inst_22223 = cljs.core.get.call(null,inst_22222__$1,new cljs.core.Keyword(null,"url","url",1014020321));var state_22324__$1 = (function (){var statearr_22374 = state_22324;(statearr_22374[14] = inst_22223);
(statearr_22374[15] = inst_22222__$1);
return statearr_22374;
})();if(cljs.core.truth_(inst_22222__$1))
{var statearr_22375_22417 = state_22324__$1;(statearr_22375_22417[1] = 11);
} else
{var statearr_22376_22418 = state_22324__$1;(statearr_22376_22418[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22325 === 18))
{var inst_22314 = (state_22324[2]);var state_22324__$1 = (function (){var statearr_22377 = state_22324;(statearr_22377[31] = inst_22314);
return statearr_22377;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22324__$1,19,conn_ch);
} else
{if((state_val_22325 === 8))
{var inst_22214 = (state_22324[12]);var inst_22219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22214);var state_22324__$1 = state_22324;var statearr_22378_22419 = state_22324__$1;(statearr_22378_22419[2] = inst_22219);
(statearr_22378_22419[1] = 10);
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
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_22382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22382[0] = state_machine__8530__auto__);
(statearr_22382[1] = 1);
return statearr_22382;
});
var state_machine__8530__auto____1 = (function (state_22324){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_22324);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e22383){if((e22383 instanceof Object))
{var ex__8533__auto__ = e22383;var statearr_22384_22420 = state_22324;(statearr_22384_22420[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22421 = state_22324;
state_22324 = G__22421;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_22324){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_22324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_22385 = f__8595__auto__.call(null);(statearr_22385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_22385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Service (remote) fetch requests.
*/
geschichte.sync.fetch = (function fetch(peer,fetch_ch,out){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_22578){var state_val_22579 = (state_22578[1]);if((state_val_22579 === 7))
{var inst_22576 = (state_22578[2]);var state_22578__$1 = state_22578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22578__$1,inst_22576);
} else
{if((state_val_22579 === 1))
{var state_22578__$1 = state_22578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22578__$1,2,fetch_ch);
} else
{if((state_val_22579 === 4))
{var inst_22527 = (state_22578[7]);var state_22578__$1 = state_22578;var statearr_22580_22624 = state_22578__$1;(statearr_22580_22624[2] = inst_22527);
(statearr_22580_22624[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 15))
{var inst_22544 = (state_22578[8]);var inst_22565 = (state_22578[2]);var inst_22566 = cljs.core.deref.call(null,peer);var inst_22567 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_22566);var inst_22568 = geschichte.platform_log.debug.call(null,inst_22567,"sent fetch:",inst_22544);var state_22578__$1 = (function (){var statearr_22581 = state_22578;(statearr_22581[9] = inst_22565);
(statearr_22581[10] = inst_22568);
return statearr_22581;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22578__$1,16,fetch_ch);
} else
{if((state_val_22579 === 13))
{var inst_22574 = (state_22578[2]);var state_22578__$1 = state_22578;var statearr_22582_22625 = state_22578__$1;(statearr_22582_22625[2] = inst_22574);
(statearr_22582_22625[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 6))
{var inst_22535 = (state_22578[11]);var inst_22538 = cljs.core.seq_QMARK_.call(null,inst_22535);var state_22578__$1 = state_22578;if(inst_22538)
{var statearr_22583_22626 = state_22578__$1;(statearr_22583_22626[1] = 8);
} else
{var statearr_22584_22627 = state_22578__$1;(statearr_22584_22627[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 3))
{var inst_22527 = (state_22578[7]);var inst_22530 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22527);var state_22578__$1 = state_22578;var statearr_22585_22628 = state_22578__$1;(statearr_22585_22628[2] = inst_22530);
(statearr_22585_22628[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 12))
{var state_22578__$1 = state_22578;var statearr_22586_22629 = state_22578__$1;(statearr_22586_22629[2] = null);
(statearr_22586_22629[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 2))
{var inst_22527 = (state_22578[7]);var inst_22527__$1 = (state_22578[2]);var inst_22528 = cljs.core.seq_QMARK_.call(null,inst_22527__$1);var state_22578__$1 = (function (){var statearr_22587 = state_22578;(statearr_22587[7] = inst_22527__$1);
return statearr_22587;
})();if(inst_22528)
{var statearr_22588_22630 = state_22578__$1;(statearr_22588_22630[1] = 3);
} else
{var statearr_22589_22631 = state_22578__$1;(statearr_22589_22631[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 11))
{var inst_22543 = (state_22578[12]);var inst_22544 = (state_22578[8]);var inst_22535 = (state_22578[11]);var inst_22533 = (state_22578[13]);var inst_22546 = cljs.core.deref.call(null,peer);var inst_22547 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_22546);var inst_22548 = geschichte.platform_log.info.call(null,inst_22547,"fetch:",inst_22544);var inst_22549 = cljs.core.deref.call(null,peer);var inst_22550 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_22549);var inst_22551 = cljs.core.deref.call(null,peer);var inst_22552 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_22551);var inst_22553 = new cljs.core.Keyword(null,"store","store",1123675219).cljs$core$IFn$_invoke$arity$1(inst_22552);var inst_22554 = (function (){var store = inst_22553;var pn = inst_22550;var map__22537 = inst_22543;var ids = inst_22544;var m = inst_22543;var map__22525 = inst_22533;var G__22524 = inst_22535;return ((function (store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__){
return (function (id){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto____$1,store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto____$1,store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__){
return (function (state_22598){var state_val_22599 = (state_22598[1]);if((state_val_22599 === 2))
{var inst_22594 = (state_22598[2]);var inst_22595 = [id,inst_22594];var inst_22596 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22595,null));var state_22598__$1 = state_22598;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22598__$1,inst_22596);
} else
{if((state_val_22599 === 1))
{var inst_22590 = [id];var inst_22591 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22590,null));var inst_22592 = konserve.protocols._get_in.call(null,store,inst_22591);var state_22598__$1 = state_22598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22598__$1,2,inst_22592);
} else
{return null;
}
}
});})(c__8594__auto____$1,store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto____$1,store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_22603 = [null,null,null,null,null,null,null];(statearr_22603[0] = state_machine__8530__auto__);
(statearr_22603[1] = 1);
return statearr_22603;
});
var state_machine__8530__auto____1 = (function (state_22598){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_22598);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e22604){if((e22604 instanceof Object))
{var ex__8533__auto__ = e22604;var statearr_22605_22632 = state_22598;(statearr_22605_22632[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22598);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22633 = state_22598;
state_22598 = G__22633;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_22598){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_22598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto____$1,store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_22606 = f__8595__auto__.call(null);(statearr_22606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_22606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto____$1,store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__))
);
return c__8594__auto____$1;
});
;})(store,pn,map__22537,ids,m,map__22525,G__22524,inst_22543,inst_22544,inst_22535,inst_22533,inst_22546,inst_22547,inst_22548,inst_22549,inst_22550,inst_22551,inst_22552,inst_22553,state_val_22579,c__8594__auto__))
})();var inst_22555 = cljs.core.map.call(null,inst_22554,inst_22544);var inst_22556 = cljs.core.async.merge.call(null,inst_22555);var inst_22557 = cljs.core.async.into.call(null,cljs.core.PersistentHashMap.EMPTY,inst_22556);var state_22578__$1 = (function (){var statearr_22607 = state_22578;(statearr_22607[14] = inst_22548);
return statearr_22607;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22578__$1,14,inst_22557);
} else
{if((state_val_22579 === 9))
{var inst_22535 = (state_22578[11]);var state_22578__$1 = state_22578;var statearr_22608_22634 = state_22578__$1;(statearr_22608_22634[2] = inst_22535);
(statearr_22608_22634[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 5))
{var inst_22527 = (state_22578[7]);var inst_22533 = (state_22578[13]);var inst_22533__$1 = (state_22578[2]);var inst_22534 = cljs.core.get.call(null,inst_22533__$1,new cljs.core.Keyword(null,"ids","ids",1014008362));var inst_22535 = inst_22527;var state_22578__$1 = (function (){var statearr_22609 = state_22578;(statearr_22609[15] = inst_22534);
(statearr_22609[11] = inst_22535);
(statearr_22609[13] = inst_22533__$1);
return statearr_22609;
})();var statearr_22610_22635 = state_22578__$1;(statearr_22610_22635[2] = null);
(statearr_22610_22635[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 14))
{var inst_22543 = (state_22578[12]);var inst_22559 = (state_22578[2]);var inst_22560 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"values","values",4485058708),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_22561 = new cljs.core.Keyword(null,"peer","peer",1017341140).cljs$core$IFn$_invoke$arity$1(inst_22543);var inst_22562 = [new cljs.core.Keyword(null,"fetched","fetched",4346691659),inst_22559,inst_22561];var inst_22563 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22560,inst_22562);var state_22578__$1 = state_22578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22578__$1,15,out,inst_22563);
} else
{if((state_val_22579 === 16))
{var inst_22570 = (state_22578[2]);var inst_22535 = inst_22570;var state_22578__$1 = (function (){var statearr_22611 = state_22578;(statearr_22611[11] = inst_22535);
return statearr_22611;
})();var statearr_22612_22636 = state_22578__$1;(statearr_22612_22636[2] = null);
(statearr_22612_22636[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 10))
{var inst_22543 = (state_22578[12]);var inst_22543__$1 = (state_22578[2]);var inst_22544 = cljs.core.get.call(null,inst_22543__$1,new cljs.core.Keyword(null,"ids","ids",1014008362));var state_22578__$1 = (function (){var statearr_22613 = state_22578;(statearr_22613[12] = inst_22543__$1);
(statearr_22613[8] = inst_22544);
return statearr_22613;
})();if(cljs.core.truth_(inst_22543__$1))
{var statearr_22614_22637 = state_22578__$1;(statearr_22614_22637[1] = 11);
} else
{var statearr_22615_22638 = state_22578__$1;(statearr_22615_22638[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22579 === 8))
{var inst_22535 = (state_22578[11]);var inst_22540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22535);var state_22578__$1 = state_22578;var statearr_22616_22639 = state_22578__$1;(statearr_22616_22639[2] = inst_22540);
(statearr_22616_22639[1] = 10);
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
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_22620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22620[0] = state_machine__8530__auto__);
(statearr_22620[1] = 1);
return statearr_22620;
});
var state_machine__8530__auto____1 = (function (state_22578){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_22578);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e22621){if((e22621 instanceof Object))
{var ex__8533__auto__ = e22621;var statearr_22622_22640 = state_22578;(statearr_22622_22640[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22641 = state_22578;
state_22578 = G__22641;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_22578){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_22578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_22623 = f__8595__auto__.call(null);(statearr_22623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_22623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Handles publication requests (at connection atm.).
*/
geschichte.sync.publish_requests = (function publish_requests(peer,pub_req_ch,out){var vec__22935 = new cljs.core.Keyword(null,"chans","chans",1108527827).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,peer)));var _ = cljs.core.nth.call(null,vec__22935,0,null);var bus_out = cljs.core.nth.call(null,vec__22935,1,null);cljs.core.async.sub.call(null,bus_out,new cljs.core.Keyword(null,"meta-pub-req","meta-pub-req",1425224056),out);
var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,vec__22935,_,bus_out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,vec__22935,_,bus_out){
return (function (state_22998){var state_val_22999 = (state_22998[1]);if((state_val_22999 === 7))
{var inst_22996 = (state_22998[2]);var state_22998__$1 = state_22998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22998__$1,inst_22996);
} else
{if((state_val_22999 === 1))
{var state_22998__$1 = state_22998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22998__$1,2,pub_req_ch);
} else
{if((state_val_22999 === 4))
{var inst_22940 = (state_22998[7]);var state_22998__$1 = state_22998;var statearr_23000_23226 = state_22998__$1;(statearr_23000_23226[2] = inst_22940);
(statearr_23000_23226[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 15))
{var inst_22973 = (state_22998[8]);var inst_22957 = (state_22998[9]);var inst_22975 = cljs.core.deref.call(null,peer);var inst_22976 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_22975);var inst_22977 = geschichte.platform_log.debug.call(null,inst_22976,"meta-pub-req reply:",inst_22973);var inst_22978 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"peer","peer",1017341140),new cljs.core.Keyword(null,"metas","metas",1117691520)];var inst_22979 = cljs.core.deref.call(null,peer);var inst_22980 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_22979);var inst_22981 = geschichte.sync.filter_subs.call(null,inst_22957,inst_22973,null);var inst_22982 = [new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007),inst_22980,inst_22981];var inst_22983 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22978,inst_22982);var state_22998__$1 = (function (){var statearr_23001 = state_22998;(statearr_23001[10] = inst_22977);
return statearr_23001;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22998__$1,18,out,inst_22983);
} else
{if((state_val_22999 === 13))
{var inst_22994 = (state_22998[2]);var state_22998__$1 = state_22998;var statearr_23002_23227 = state_22998__$1;(statearr_23002_23227[2] = inst_22994);
(statearr_23002_23227[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 6))
{var inst_22948 = (state_22998[11]);var inst_22951 = cljs.core.seq_QMARK_.call(null,inst_22948);var state_22998__$1 = state_22998;if(inst_22951)
{var statearr_23003_23228 = state_22998__$1;(statearr_23003_23228[1] = 8);
} else
{var statearr_23004_23229 = state_22998__$1;(statearr_23004_23229[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 17))
{var inst_22988 = (state_22998[2]);var state_22998__$1 = (function (){var statearr_23005 = state_22998;(statearr_23005[12] = inst_22988);
return statearr_23005;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22998__$1,19,pub_req_ch);
} else
{if((state_val_22999 === 3))
{var inst_22940 = (state_22998[7]);var inst_22943 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22940);var state_22998__$1 = state_22998;var statearr_23006_23230 = state_22998__$1;(statearr_23006_23230[2] = inst_22943);
(statearr_23006_23230[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 12))
{var state_22998__$1 = state_22998;var statearr_23007_23231 = state_22998__$1;(statearr_23007_23231[2] = null);
(statearr_23007_23231[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 2))
{var inst_22940 = (state_22998[7]);var inst_22940__$1 = (state_22998[2]);var inst_22941 = cljs.core.seq_QMARK_.call(null,inst_22940__$1);var state_22998__$1 = (function (){var statearr_23008 = state_22998;(statearr_23008[7] = inst_22940__$1);
return statearr_23008;
})();if(inst_22941)
{var statearr_23009_23232 = state_22998__$1;(statearr_23009_23232[1] = 3);
} else
{var statearr_23010_23233 = state_22998__$1;(statearr_23010_23233[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 19))
{var inst_22990 = (state_22998[2]);var inst_22948 = inst_22990;var state_22998__$1 = (function (){var statearr_23011 = state_22998;(statearr_23011[11] = inst_22948);
return statearr_23011;
})();var statearr_23012_23234 = state_22998__$1;(statearr_23012_23234[2] = null);
(statearr_23012_23234[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 11))
{var inst_22948 = (state_22998[11]);var inst_22957 = (state_22998[9]);var inst_22946 = (state_22998[13]);var inst_22956 = (state_22998[14]);var inst_22965 = (function (){var map__22950 = inst_22956;var req_metas = inst_22957;var pr = inst_22956;var map__22938 = inst_22946;var G__22937 = inst_22948;return ((function (map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function iter__22959(s__22960){return (new cljs.core.LazySeq(null,((function (map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function (){var s__22960__$1 = s__22960;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22960__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__23110 = cljs.core.first.call(null,xs__4624__auto__);var user = cljs.core.nth.call(null,vec__23110,0,null);var repos = cljs.core.nth.call(null,vec__23110,1,null);var iterys__4260__auto__ = ((function (s__22960__$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function iter__22961(s__22962){return (new cljs.core.LazySeq(null,((function (s__22960__$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function (){var s__22962__$1 = s__22962;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22962__$1);if(temp__4126__auto____$1)
{var s__22962__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22962__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__22962__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__22964 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__22963 = 0;while(true){
if((i__22963 < size__4263__auto__))
{var vec__23159 = cljs.core._nth.call(null,c__4262__auto__,i__22963);var repo = cljs.core.nth.call(null,vec__23159,0,null);var meta = cljs.core.nth.call(null,vec__23159,1,null);cljs.core.chunk_append.call(null,b__22964,(function (){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (i__22963,s__22960__$1,c__8594__auto____$1,vec__23159,repo,meta,c__4262__auto__,size__4263__auto__,b__22964,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (i__22963,s__22960__$1,c__8594__auto____$1,vec__23159,repo,meta,c__4262__auto__,size__4263__auto__,b__22964,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function (state_23173){var state_val_23174 = (state_23173[1]);if((state_val_23174 === 2))
{var inst_23161 = (state_23173[7]);var inst_23169 = (state_23173[2]);var inst_23170 = [inst_23161,inst_23169];var inst_23171 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23170,null));var state_23173__$1 = state_23173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23173__$1,inst_23171);
} else
{if((state_val_23174 === 1))
{var inst_23160 = [user,repo];var inst_23161 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23160,null));var inst_23162 = cljs.core.deref.call(null,peer);var inst_23163 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_23162);var inst_23164 = new cljs.core.Keyword(null,"store","store",1123675219).cljs$core$IFn$_invoke$arity$1(inst_23163);var inst_23165 = [user,repo];var inst_23166 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23165,null));var inst_23167 = konserve.protocols._get_in.call(null,inst_23164,inst_23166);var state_23173__$1 = (function (){var statearr_23175 = state_23173;(statearr_23175[7] = inst_23161);
return statearr_23175;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23173__$1,2,inst_23167);
} else
{return null;
}
}
});})(i__22963,s__22960__$1,c__8594__auto____$1,vec__23159,repo,meta,c__4262__auto__,size__4263__auto__,b__22964,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
;return ((function (i__22963,s__22960__$1,switch__8529__auto__,c__8594__auto____$1,vec__23159,repo,meta,c__4262__auto__,size__4263__auto__,b__22964,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_23179 = [null,null,null,null,null,null,null,null];(statearr_23179[0] = state_machine__8530__auto__);
(statearr_23179[1] = 1);
return statearr_23179;
});
var state_machine__8530__auto____1 = (function (state_23173){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_23173);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e23180){if((e23180 instanceof Object))
{var ex__8533__auto__ = e23180;var statearr_23181_23235 = state_23173;(statearr_23181_23235[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23236 = state_23173;
state_23173 = G__23236;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_23173){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_23173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(i__22963,s__22960__$1,switch__8529__auto__,c__8594__auto____$1,vec__23159,repo,meta,c__4262__auto__,size__4263__auto__,b__22964,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
})();var state__8596__auto__ = (function (){var statearr_23182 = f__8595__auto__.call(null);(statearr_23182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_23182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(i__22963,s__22960__$1,c__8594__auto____$1,vec__23159,repo,meta,c__4262__auto__,size__4263__auto__,b__22964,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
);
return c__8594__auto____$1;
})());
{
var G__23237 = (i__22963 + 1);
i__22963 = G__23237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22964),iter__22961.call(null,cljs.core.chunk_rest.call(null,s__22962__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22964),null);
}
} else
{var vec__23183 = cljs.core.first.call(null,s__22962__$2);var repo = cljs.core.nth.call(null,vec__23183,0,null);var meta = cljs.core.nth.call(null,vec__23183,1,null);return cljs.core.cons.call(null,(function (){var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (s__22960__$1,c__8594__auto____$1,vec__23183,repo,meta,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (s__22960__$1,c__8594__auto____$1,vec__23183,repo,meta,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function (state_23197){var state_val_23198 = (state_23197[1]);if((state_val_23198 === 2))
{var inst_23185 = (state_23197[7]);var inst_23193 = (state_23197[2]);var inst_23194 = [inst_23185,inst_23193];var inst_23195 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23194,null));var state_23197__$1 = state_23197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23197__$1,inst_23195);
} else
{if((state_val_23198 === 1))
{var inst_23184 = [user,repo];var inst_23185 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23184,null));var inst_23186 = cljs.core.deref.call(null,peer);var inst_23187 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_23186);var inst_23188 = new cljs.core.Keyword(null,"store","store",1123675219).cljs$core$IFn$_invoke$arity$1(inst_23187);var inst_23189 = [user,repo];var inst_23190 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23189,null));var inst_23191 = konserve.protocols._get_in.call(null,inst_23188,inst_23190);var state_23197__$1 = (function (){var statearr_23199 = state_23197;(statearr_23199[7] = inst_23185);
return statearr_23199;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23197__$1,2,inst_23191);
} else
{return null;
}
}
});})(s__22960__$1,c__8594__auto____$1,vec__23183,repo,meta,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
;return ((function (s__22960__$1,switch__8529__auto__,c__8594__auto____$1,vec__23183,repo,meta,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_23203 = [null,null,null,null,null,null,null,null];(statearr_23203[0] = state_machine__8530__auto__);
(statearr_23203[1] = 1);
return statearr_23203;
});
var state_machine__8530__auto____1 = (function (state_23197){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_23197);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e23204){if((e23204 instanceof Object))
{var ex__8533__auto__ = e23204;var statearr_23205_23238 = state_23197;(statearr_23205_23238[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23239 = state_23197;
state_23197 = G__23239;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_23197){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_23197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(s__22960__$1,switch__8529__auto__,c__8594__auto____$1,vec__23183,repo,meta,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
})();var state__8596__auto__ = (function (){var statearr_23206 = f__8595__auto__.call(null);(statearr_23206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_23206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(s__22960__$1,c__8594__auto____$1,vec__23183,repo,meta,s__22962__$2,temp__4126__auto____$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
);
return c__8594__auto____$1;
})(),iter__22961.call(null,cljs.core.rest.call(null,s__22962__$2)));
}
} else
{return null;
}
break;
}
});})(s__22960__$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
,null,null));
});})(s__22960__$1,vec__23110,user,repos,xs__4624__auto__,temp__4126__auto__,map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__22959.call(null,cljs.core.rest.call(null,s__22960__$1)));
} else
{{
var G__23240 = cljs.core.rest.call(null,s__22960__$1);
s__22960__$1 = G__23240;
continue;
}
}
} else
{return null;
}
break;
}
});})(map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
,null,null));
});
;})(map__22950,req_metas,pr,map__22938,G__22937,inst_22948,inst_22957,inst_22946,inst_22956,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
})();var inst_22966 = inst_22965.call(null,inst_22957);var inst_22967 = cljs.core.async.merge.call(null,inst_22966);var inst_22968 = cljs.core.async.filter_LT_.call(null,cljs.core.second,inst_22967);var inst_22969 = cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,inst_22968);var state_22998__$1 = state_22998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22998__$1,14,inst_22969);
} else
{if((state_val_22999 === 9))
{var inst_22948 = (state_22998[11]);var state_22998__$1 = state_22998;var statearr_23207_23241 = state_22998__$1;(statearr_23207_23241[2] = inst_22948);
(statearr_23207_23241[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 5))
{var inst_22946 = (state_22998[13]);var inst_22940 = (state_22998[7]);var inst_22946__$1 = (state_22998[2]);var inst_22947 = cljs.core.get.call(null,inst_22946__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var inst_22948 = inst_22940;var state_22998__$1 = (function (){var statearr_23208 = state_22998;(statearr_23208[11] = inst_22948);
(statearr_23208[15] = inst_22947);
(statearr_23208[13] = inst_22946__$1);
return statearr_23208;
})();var statearr_23209_23242 = state_22998__$1;(statearr_23209_23242[2] = null);
(statearr_23209_23242[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 14))
{var inst_22973 = (state_22998[8]);var inst_22948 = (state_22998[11]);var inst_22957 = (state_22998[9]);var inst_22946 = (state_22998[13]);var inst_22956 = (state_22998[14]);var inst_22971 = (state_22998[2]);var inst_22972 = (function (){var metas_list = inst_22971;var map__22950 = inst_22956;var req_metas = inst_22957;var pr = inst_22956;var map__22938 = inst_22946;var G__22937 = inst_22948;return ((function (metas_list,map__22950,req_metas,pr,map__22938,G__22937,inst_22973,inst_22948,inst_22957,inst_22946,inst_22956,inst_22971,state_val_22999,c__8594__auto__,vec__22935,_,bus_out){
return (function (p1__22642_SHARP_,p2__22643_SHARP_){return cljs.core.assoc_in.call(null,p1__22642_SHARP_,cljs.core.first.call(null,p2__22643_SHARP_),cljs.core.second.call(null,p2__22643_SHARP_));
});
;})(metas_list,map__22950,req_metas,pr,map__22938,G__22937,inst_22973,inst_22948,inst_22957,inst_22946,inst_22956,inst_22971,state_val_22999,c__8594__auto__,vec__22935,_,bus_out))
})();var inst_22973__$1 = cljs.core.reduce.call(null,inst_22972,null,inst_22971);var state_22998__$1 = (function (){var statearr_23210 = state_22998;(statearr_23210[8] = inst_22973__$1);
return statearr_23210;
})();if(cljs.core.truth_(inst_22973__$1))
{var statearr_23211_23243 = state_22998__$1;(statearr_23211_23243[1] = 15);
} else
{var statearr_23212_23244 = state_22998__$1;(statearr_23212_23244[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 16))
{var state_22998__$1 = state_22998;var statearr_23213_23245 = state_22998__$1;(statearr_23213_23245[2] = null);
(statearr_23213_23245[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 10))
{var inst_22956 = (state_22998[14]);var inst_22956__$1 = (state_22998[2]);var inst_22957 = cljs.core.get.call(null,inst_22956__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var state_22998__$1 = (function (){var statearr_23214 = state_22998;(statearr_23214[9] = inst_22957);
(statearr_23214[14] = inst_22956__$1);
return statearr_23214;
})();if(cljs.core.truth_(inst_22956__$1))
{var statearr_23215_23246 = state_22998__$1;(statearr_23215_23246[1] = 11);
} else
{var statearr_23216_23247 = state_22998__$1;(statearr_23216_23247[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 18))
{var inst_22985 = (state_22998[2]);var state_22998__$1 = state_22998;var statearr_23217_23248 = state_22998__$1;(statearr_23217_23248[2] = inst_22985);
(statearr_23217_23248[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22999 === 8))
{var inst_22948 = (state_22998[11]);var inst_22953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22948);var state_22998__$1 = state_22998;var statearr_23218_23249 = state_22998__$1;(statearr_23218_23249[2] = inst_22953);
(statearr_23218_23249[1] = 10);
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
});})(c__8594__auto__,vec__22935,_,bus_out))
;return ((function (switch__8529__auto__,c__8594__auto__,vec__22935,_,bus_out){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_23222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23222[0] = state_machine__8530__auto__);
(statearr_23222[1] = 1);
return statearr_23222;
});
var state_machine__8530__auto____1 = (function (state_22998){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_22998);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e23223){if((e23223 instanceof Object))
{var ex__8533__auto__ = e23223;var statearr_23224_23250 = state_22998;(statearr_23224_23250[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23251 = state_22998;
state_22998 = G__23251;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_22998){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_22998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,vec__22935,_,bus_out))
})();var state__8596__auto__ = (function (){var statearr_23225 = f__8595__auto__.call(null);(statearr_23225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_23225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,vec__22935,_,bus_out))
);
return c__8594__auto__;
});
/**
* Wire a peer to an output (response) channel and a publication by :topic of the input.
*/
geschichte.sync.wire = (function wire(peer,p__23252){var vec__23304 = p__23252;var out = cljs.core.nth.call(null,vec__23304,0,null);var p = cljs.core.nth.call(null,vec__23304,1,null);var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,vec__23304,out,p){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,vec__23304,out,p){
return (function (state_23340){var state_val_23341 = (state_23340[1]);if((state_val_23341 === 4))
{var inst_23314 = (state_23340[2]);var inst_23315 = cljs.core.get.call(null,inst_23314,new cljs.core.Keyword(null,"log","log",1014011574));var inst_23316 = cljs.core.get.call(null,inst_23314,new cljs.core.Keyword(null,"chans","chans",1108527827));var inst_23317 = cljs.core.get.call(null,inst_23314,new cljs.core.Keyword(null,"store","store",1123675219));var inst_23318 = cljs.core.deref.call(null,peer);var inst_23319 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_23318);var inst_23320 = cljs.core.nth.call(null,inst_23316,0,null);var inst_23321 = cljs.core.nth.call(null,inst_23316,1,null);var inst_23322 = cljs.core.async.chan.call(null);var inst_23323 = cljs.core.async.chan.call(null);var inst_23324 = cljs.core.async.chan.call(null);var inst_23325 = cljs.core.async.chan.call(null);var inst_23326 = cljs.core.async.chan.call(null);var inst_23327 = cljs.core.async.chan.call(null);var inst_23328 = cljs.core.async.sub.call(null,p,new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),inst_23325);var inst_23329 = geschichte.sync.subscribe.call(null,peer,inst_23325,out);var inst_23330 = cljs.core.async.sub.call(null,p,new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007),inst_23322);var inst_23331 = cljs.core.async.sub.call(null,p,new cljs.core.Keyword(null,"fetched","fetched",4346691659),inst_23327);var inst_23332 = geschichte.sync.publish.call(null,peer,inst_23322,inst_23327,inst_23317,inst_23320,out);var inst_23333 = cljs.core.async.sub.call(null,p,new cljs.core.Keyword(null,"meta-pub-req","meta-pub-req",1425224056),inst_23323);var inst_23334 = geschichte.sync.publish_requests.call(null,peer,inst_23323,out);var inst_23335 = cljs.core.async.sub.call(null,p,new cljs.core.Keyword(null,"fetch","fetch",1111226924),inst_23326);var inst_23336 = geschichte.sync.fetch.call(null,peer,inst_23326,out);var inst_23337 = cljs.core.async.sub.call(null,p,new cljs.core.Keyword(null,"connect","connect",1965255772),inst_23324);var inst_23338 = geschichte.sync.connect.call(null,peer,inst_23324,out);var state_23340__$1 = (function (){var statearr_23342 = state_23340;(statearr_23342[7] = inst_23315);
(statearr_23342[8] = inst_23336);
(statearr_23342[9] = inst_23321);
(statearr_23342[10] = inst_23330);
(statearr_23342[11] = inst_23334);
(statearr_23342[12] = inst_23329);
(statearr_23342[13] = inst_23337);
(statearr_23342[14] = inst_23328);
(statearr_23342[15] = inst_23335);
(statearr_23342[16] = inst_23332);
(statearr_23342[17] = inst_23331);
(statearr_23342[18] = inst_23319);
(statearr_23342[19] = inst_23333);
return statearr_23342;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23340__$1,inst_23338);
} else
{if((state_val_23341 === 3))
{var inst_23308 = (state_23340[20]);var state_23340__$1 = state_23340;var statearr_23343_23355 = state_23340__$1;(statearr_23343_23355[2] = inst_23308);
(statearr_23343_23355[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 2))
{var inst_23308 = (state_23340[20]);var inst_23311 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23308);var state_23340__$1 = state_23340;var statearr_23344_23356 = state_23340__$1;(statearr_23344_23356[2] = inst_23311);
(statearr_23344_23356[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 1))
{var inst_23308 = (state_23340[20]);var inst_23307 = cljs.core.deref.call(null,peer);var inst_23308__$1 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_23307);var inst_23309 = cljs.core.seq_QMARK_.call(null,inst_23308__$1);var state_23340__$1 = (function (){var statearr_23345 = state_23340;(statearr_23345[20] = inst_23308__$1);
return statearr_23345;
})();if(inst_23309)
{var statearr_23346_23357 = state_23340__$1;(statearr_23346_23357[1] = 2);
} else
{var statearr_23347_23358 = state_23340__$1;(statearr_23347_23358[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__8594__auto__,vec__23304,out,p))
;return ((function (switch__8529__auto__,c__8594__auto__,vec__23304,out,p){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_23351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23351[0] = state_machine__8530__auto__);
(statearr_23351[1] = 1);
return statearr_23351;
});
var state_machine__8530__auto____1 = (function (state_23340){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_23340);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e23352){if((e23352 instanceof Object))
{var ex__8533__auto__ = e23352;var statearr_23353_23359 = state_23340;(statearr_23353_23359[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23340);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23360 = state_23340;
state_23340 = G__23360;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_23340){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_23340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,vec__23304,out,p))
})();var state__8596__auto__ = (function (){var statearr_23354 = f__8595__auto__.call(null);(statearr_23354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_23354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,vec__23304,out,p))
);
return c__8594__auto__;
});

//# sourceMappingURL=sync.js.map