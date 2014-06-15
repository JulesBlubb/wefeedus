// Compiled by ClojureScript 0.0-2227
goog.provide('geschichte.stage');
goog.require('cljs.core');
goog.require('geschichte.platform_log');
goog.require('geschichte.sync');
goog.require('konserve.protocols');
goog.require('cljs.core.async');
goog.require('hasch.core');
goog.require('geschichte.repo');
goog.require('clojure.set');
goog.require('konserve.protocols');
goog.require('geschichte.platform_log');
goog.require('geschichte.sync');
goog.require('cljs.core.async');
goog.require('geschichte.meta');
goog.require('geschichte.repo');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('hasch.core');
goog.require('geschichte.meta');
/**
* Returns the linear commit history for a repo.
*/
geschichte.stage.commit_history = (function() {
var commit_history = null;
var commit_history__2 = (function (meta,branch){var map__26979 = meta;var map__26979__$1 = ((cljs.core.seq_QMARK_.call(null,map__26979))?cljs.core.apply.call(null,cljs.core.hash_map,map__26979):map__26979);var causal_order = cljs.core.get.call(null,map__26979__$1,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338));var branches = cljs.core.get.call(null,map__26979__$1,new cljs.core.Keyword(null,"branches","branches",988497218));return commit_history.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.get.call(null,branches,branch))], null),causal_order);
});
var commit_history__3 = (function (hist,stack,causal_order){while(true){
var vec__26980 = stack;var f = cljs.core.nth.call(null,vec__26980,0,null);var r = cljs.core.nthnext.call(null,vec__26980,1);var hist_set = cljs.core.set.call(null,hist);var children = cljs.core.filter.call(null,((function (hist,stack,causal_order,vec__26980,f,r,hist_set){
return (function (p1__26976_SHARP_){return cljs.core.not.call(null,hist_set.call(null,p1__26976_SHARP_));
});})(hist,stack,causal_order,vec__26980,f,r,hist_set))
,causal_order.call(null,f));if(cljs.core.truth_(f))
{if(!(cljs.core.empty_QMARK_.call(null,children)))
{{
var G__26981 = hist;
var G__26982 = cljs.core.concat.call(null,children,stack);
var G__26983 = causal_order;
hist = G__26981;
stack = G__26982;
causal_order = G__26983;
continue;
}
} else
{{
var G__26984 = cljs.core.conj.call(null,hist,f);
var G__26985 = r;
var G__26986 = causal_order;
hist = G__26984;
stack = G__26985;
causal_order = G__26986;
continue;
}
}
} else
{return hist;
}
break;
}
});
commit_history = function(hist,stack,causal_order){
switch(arguments.length){
case 2:
return commit_history__2.call(this,hist,stack);
case 3:
return commit_history__3.call(this,hist,stack,causal_order);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
commit_history.cljs$core$IFn$_invoke$arity$2 = commit_history__2;
commit_history.cljs$core$IFn$_invoke$arity$3 = commit_history__3;
return commit_history;
})()
;
/**
* Realizes the value of the current repository with help of store and
* an application specific eval-fn (e.g. map from source/symbols to fn.).
* Does not memoize yet!
*/
geschichte.stage.realize_value = (function realize_value(repo,branch,store,eval_fn){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_27113){var state_val_27114 = (state_27113[1]);if((state_val_27114 === 8))
{var inst_27089 = (state_27113[7]);var inst_27094 = (state_27113[2]);var inst_27095 = new cljs.core.Keyword(null,"transactions","transactions",2968026311).cljs$core$IFn$_invoke$arity$1(inst_27094);var inst_27096 = cljs.core.map.call(null,inst_27089,inst_27095);var inst_27097 = cljs.core.async.merge.call(null,inst_27096);var inst_27098 = cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,inst_27097);var state_27113__$1 = state_27113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,7,inst_27098);
} else
{if((state_val_27114 === 7))
{var inst_27075 = (state_27113[8]);var inst_27086 = (state_27113[9]);var inst_27081 = (state_27113[10]);var inst_27100 = (state_27113[2]);var inst_27101 = cljs.core.reduce.call(null,inst_27075,inst_27081,inst_27100);var inst_27081__$1 = inst_27101;var inst_27082 = inst_27086;var state_27113__$1 = (function (){var statearr_27115 = state_27113;(statearr_27115[11] = inst_27082);
(statearr_27115[10] = inst_27081__$1);
return statearr_27115;
})();var statearr_27116_27157 = state_27113__$1;(statearr_27116_27157[2] = null);
(statearr_27116_27157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27114 === 6))
{var inst_27105 = (state_27113[2]);var state_27113__$1 = state_27113;var statearr_27117_27158 = state_27113__$1;(statearr_27117_27158[2] = inst_27105);
(statearr_27117_27158[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27114 === 5))
{var inst_27081 = (state_27113[10]);var state_27113__$1 = state_27113;var statearr_27118_27159 = state_27113__$1;(statearr_27118_27159[2] = inst_27081);
(statearr_27118_27159[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27114 === 4))
{var inst_27075 = (state_27113[8]);var inst_27073 = (state_27113[12]);var inst_27086 = (state_27113[9]);var inst_27082 = (state_27113[11]);var inst_27081 = (state_27113[10]);var inst_27085 = (state_27113[13]);var inst_27089 = (function (){var vec__27084 = inst_27082;var r = inst_27086;var f = inst_27085;var vec__27078 = inst_27073;var G__27077 = inst_27082;var val = inst_27081;var trans_apply = inst_27075;var commit_hist = inst_27073;return ((function (vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__){
return (function (p__27088){var vec__27119 = p__27088;var param_id = cljs.core.nth.call(null,vec__27119,0,null);var trans_id = cljs.core.nth.call(null,vec__27119,1,null);var c__8594__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto____$1,vec__27119,param_id,trans_id,vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto____$1,vec__27119,param_id,trans_id,vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__){
return (function (state_27133){var state_val_27134 = (state_27133[1]);if((state_val_27134 === 3))
{var inst_27124 = (state_27133[7]);var inst_27129 = (state_27133[2]);var inst_27130 = [inst_27124,inst_27129];var inst_27131 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27130,null));var state_27133__$1 = state_27133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27133__$1,inst_27131);
} else
{if((state_val_27134 === 2))
{var inst_27124 = (state_27133[2]);var inst_27125 = [trans_id];var inst_27126 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27125,null));var inst_27127 = konserve.protocols._get_in.call(null,store,inst_27126);var state_27133__$1 = (function (){var statearr_27135 = state_27133;(statearr_27135[7] = inst_27124);
return statearr_27135;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,3,inst_27127);
} else
{if((state_val_27134 === 1))
{var inst_27120 = [param_id];var inst_27121 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27120,null));var inst_27122 = konserve.protocols._get_in.call(null,store,inst_27121);var state_27133__$1 = state_27133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,2,inst_27122);
} else
{return null;
}
}
}
});})(c__8594__auto____$1,vec__27119,param_id,trans_id,vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto____$1,vec__27119,param_id,trans_id,vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_27139 = [null,null,null,null,null,null,null,null];(statearr_27139[0] = state_machine__8530__auto__);
(statearr_27139[1] = 1);
return statearr_27139;
});
var state_machine__8530__auto____1 = (function (state_27133){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_27133);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e27140){if((e27140 instanceof Object))
{var ex__8533__auto__ = e27140;var statearr_27141_27160 = state_27133;(statearr_27141_27160[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27161 = state_27133;
state_27133 = G__27161;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_27133){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_27133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto____$1,vec__27119,param_id,trans_id,vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_27142 = f__8595__auto__.call(null);(statearr_27142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_27142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto____$1,vec__27119,param_id,trans_id,vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__))
);
return c__8594__auto____$1;
});
;})(vec__27084,r,f,vec__27078,G__27077,val,trans_apply,commit_hist,inst_27075,inst_27073,inst_27086,inst_27082,inst_27081,inst_27085,state_val_27114,c__8594__auto__))
})();var inst_27090 = [inst_27085];var inst_27091 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27090,null));var inst_27092 = konserve.protocols._get_in.call(null,store,inst_27091);var state_27113__$1 = (function (){var statearr_27143 = state_27113;(statearr_27143[7] = inst_27089);
return statearr_27143;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,8,inst_27092);
} else
{if((state_val_27114 === 3))
{var inst_27075 = (state_27113[8]);var inst_27107 = (state_27113[2]);var inst_27108 = [new cljs.core.Keyword(null,"transactions","transactions",2968026311),branch];var inst_27109 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27108,null));var inst_27110 = cljs.core.get_in.call(null,repo,inst_27109);var inst_27111 = cljs.core.reduce.call(null,inst_27075,inst_27107,inst_27110);var state_27113__$1 = state_27113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else
{if((state_val_27114 === 2))
{var inst_27082 = (state_27113[11]);var inst_27085 = (state_27113[13]);var inst_27085__$1 = cljs.core.nth.call(null,inst_27082,0,null);var inst_27086 = cljs.core.nthnext.call(null,inst_27082,1);var state_27113__$1 = (function (){var statearr_27144 = state_27113;(statearr_27144[9] = inst_27086);
(statearr_27144[13] = inst_27085__$1);
return statearr_27144;
})();if(cljs.core.truth_(inst_27085__$1))
{var statearr_27145_27162 = state_27113__$1;(statearr_27145_27162[1] = 4);
} else
{var statearr_27146_27163 = state_27113__$1;(statearr_27146_27163[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27114 === 1))
{var inst_27073 = (state_27113[12]);var inst_27072 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(repo);var inst_27073__$1 = geschichte.stage.commit_history.call(null,inst_27072,branch);var inst_27075 = (function (){var commit_hist = inst_27073__$1;return ((function (commit_hist,inst_27073,inst_27072,inst_27073__$1,state_val_27114,c__8594__auto__){
return (function (val,p__27074){var vec__27147 = p__27074;var params = cljs.core.nth.call(null,vec__27147,0,null);var trans_fn = cljs.core.nth.call(null,vec__27147,1,null);return eval_fn.call(null,trans_fn).call(null,val,params);
});
;})(commit_hist,inst_27073,inst_27072,inst_27073__$1,state_val_27114,c__8594__auto__))
})();var inst_27079 = cljs.core.nth.call(null,inst_27073__$1,0,null);var inst_27080 = cljs.core.nthnext.call(null,inst_27073__$1,1);var inst_27081 = null;var inst_27082 = inst_27073__$1;var state_27113__$1 = (function (){var statearr_27148 = state_27113;(statearr_27148[8] = inst_27075);
(statearr_27148[12] = inst_27073__$1);
(statearr_27148[11] = inst_27082);
(statearr_27148[14] = inst_27080);
(statearr_27148[10] = inst_27081);
(statearr_27148[15] = inst_27079);
return statearr_27148;
})();var statearr_27149_27164 = state_27113__$1;(statearr_27149_27164[2] = null);
(statearr_27149_27164[1] = 2);
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
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_27153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27153[0] = state_machine__8530__auto__);
(statearr_27153[1] = 1);
return statearr_27153;
});
var state_machine__8530__auto____1 = (function (state_27113){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_27113);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e27154){if((e27154 instanceof Object))
{var ex__8533__auto__ = e27154;var statearr_27155_27165 = state_27113;(statearr_27155_27165[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27166 = state_27113;
state_27113 = G__27166;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_27156 = f__8595__auto__.call(null);(statearr_27156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_27156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Synchronize (push) the results of a geschichte.repo command with storage and other peers.
* This does not automatically update the stage.
*/
geschichte.stage.sync_BANG_ = (function sync_BANG_(stage,metas){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_27554){var state_val_27555 = (state_27554[1]);if((state_val_27555 === 7))
{var inst_27428 = (state_27554[7]);var inst_27443 = (state_27554[8]);var inst_27427 = (state_27554[9]);var inst_27455 = (state_27554[10]);var inst_27422 = (state_27554[11]);var inst_27423 = (state_27554[12]);var inst_27430 = (state_27554[13]);var inst_27432 = (state_27554[14]);var inst_27429 = (state_27554[15]);var inst_27431 = (state_27554[16]);var inst_27465 = (state_27554[17]);var inst_27481 = (state_27554[2]);var inst_27482 = cljs.core.async.sub.call(null,inst_27428,new cljs.core.Keyword(null,"meta-pubed","meta-pubed",790870534),inst_27431);var inst_27483 = cljs.core.async.sub.call(null,inst_27428,new cljs.core.Keyword(null,"fetch","fetch",1111226924),inst_27430);var inst_27508 = cljs.core.async.chan.call(null,1);var inst_27509 = (function (){var p = inst_27428;var meta_subs = inst_27455;var vec__27414 = inst_27427;var meta_pubs = inst_27465;var sch = inst_27432;var new_values = inst_27443;var fch = inst_27430;var map__27413 = inst_27422;var c__8594__auto____$1 = inst_27508;var out = inst_27429;var id = inst_27423;var pch = inst_27431;return ((function (p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,c__8594__auto____$1,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27481,inst_27482,inst_27483,inst_27508,state_val_27555,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,c__8594__auto____$1,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27481,inst_27482,inst_27483,inst_27508,state_val_27555,c__8594__auto__){
return (function (state_27506){var state_val_27507 = (state_27506[1]);if((state_val_27507 === 9))
{var inst_27497 = (state_27506[2]);var inst_27498 = new cljs.core.Keyword(null,"ids","ids",1014008362).cljs$core$IFn$_invoke$arity$1(inst_27497);var inst_27487 = inst_27498;var state_27506__$1 = (function (){var statearr_27556 = state_27506;(statearr_27556[7] = inst_27487);
return statearr_27556;
})();var statearr_27557_27652 = state_27506__$1;(statearr_27557_27652[2] = null);
(statearr_27557_27652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 8))
{var inst_27495 = (state_27506[2]);var state_27506__$1 = (function (){var statearr_27558 = state_27506;(statearr_27558[8] = inst_27495);
return statearr_27558;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27506__$1,9,fch);
} else
{if((state_val_27507 === 7))
{var inst_27502 = (state_27506[2]);var state_27506__$1 = state_27506;var statearr_27559_27653 = state_27506__$1;(statearr_27559_27653[2] = inst_27502);
(statearr_27559_27653[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 6))
{var state_27506__$1 = state_27506;var statearr_27560_27654 = state_27506__$1;(statearr_27560_27654[2] = null);
(statearr_27560_27654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 5))
{var inst_27487 = (state_27506[7]);var inst_27490 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"values","values",4485058708),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_27491 = cljs.core.select_keys.call(null,new_values,inst_27487);var inst_27492 = [new cljs.core.Keyword(null,"fetched","fetched",4346691659),inst_27491,id];var inst_27493 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_27490,inst_27492);var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,8,out,inst_27493);
} else
{if((state_val_27507 === 4))
{var inst_27504 = (state_27506[2]);var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27506__$1,inst_27504);
} else
{if((state_val_27507 === 3))
{var inst_27487 = (state_27506[7]);var state_27506__$1 = state_27506;if(cljs.core.truth_(inst_27487))
{var statearr_27561_27655 = state_27506__$1;(statearr_27561_27655[1] = 5);
} else
{var statearr_27562_27656 = state_27506__$1;(statearr_27562_27656[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 2))
{var inst_27485 = (state_27506[2]);var inst_27486 = new cljs.core.Keyword(null,"ids","ids",1014008362).cljs$core$IFn$_invoke$arity$1(inst_27485);var inst_27487 = inst_27486;var state_27506__$1 = (function (){var statearr_27563 = state_27506;(statearr_27563[7] = inst_27487);
return statearr_27563;
})();var statearr_27564_27657 = state_27506__$1;(statearr_27564_27657[2] = null);
(statearr_27564_27657[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 1))
{var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27506__$1,2,fch);
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
});})(p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,c__8594__auto____$1,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27481,inst_27482,inst_27483,inst_27508,state_val_27555,c__8594__auto__))
;return ((function (switch__8529__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,c__8594__auto____$1,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27481,inst_27482,inst_27483,inst_27508,state_val_27555,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_27568 = [null,null,null,null,null,null,null,null,null];(statearr_27568[0] = state_machine__8530__auto__);
(statearr_27568[1] = 1);
return statearr_27568;
});
var state_machine__8530__auto____1 = (function (state_27506){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_27506);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e27569){if((e27569 instanceof Object))
{var ex__8533__auto__ = e27569;var statearr_27570_27658 = state_27506;(statearr_27570_27658[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27659 = state_27506;
state_27506 = G__27659;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_27506){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_27506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,c__8594__auto____$1,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27481,inst_27482,inst_27483,inst_27508,state_val_27555,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_27571 = f__8595__auto__.call(null);(statearr_27571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_27571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});
;})(p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,c__8594__auto____$1,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27481,inst_27482,inst_27483,inst_27508,state_val_27555,c__8594__auto__))
})();var inst_27510 = cljs.core.async.impl.dispatch.run.call(null,inst_27509);var inst_27511 = cljs.core.empty_QMARK_.call(null,inst_27465);var state_27554__$1 = (function (){var statearr_27572 = state_27554;(statearr_27572[18] = inst_27482);
(statearr_27572[19] = inst_27481);
(statearr_27572[20] = inst_27510);
(statearr_27572[21] = inst_27483);
return statearr_27572;
})();if(inst_27511)
{var statearr_27573_27660 = state_27554__$1;(statearr_27573_27660[1] = 10);
} else
{var statearr_27574_27661 = state_27554__$1;(statearr_27574_27661[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 20))
{var inst_27539 = (state_27554[2]);var state_27554__$1 = state_27554;var statearr_27575_27662 = state_27554__$1;(statearr_27575_27662[2] = inst_27539);
(statearr_27575_27662[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 1))
{var inst_27416 = (state_27554[22]);var inst_27415 = cljs.core.deref.call(null,stage);var inst_27416__$1 = new cljs.core.Keyword(null,"config","config",3954079412).cljs$core$IFn$_invoke$arity$1(inst_27415);var inst_27417 = cljs.core.seq_QMARK_.call(null,inst_27416__$1);var state_27554__$1 = (function (){var statearr_27576 = state_27554;(statearr_27576[22] = inst_27416__$1);
return statearr_27576;
})();if(inst_27417)
{var statearr_27577_27663 = state_27554__$1;(statearr_27577_27663[1] = 2);
} else
{var statearr_27578_27664 = state_27554__$1;(statearr_27578_27664[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 4))
{var inst_27428 = (state_27554[7]);var inst_27443 = (state_27554[8]);var inst_27427 = (state_27554[9]);var inst_27455 = (state_27554[10]);var inst_27422 = (state_27554[11]);var inst_27423 = (state_27554[12]);var inst_27430 = (state_27554[13]);var inst_27432 = (state_27554[14]);var inst_27429 = (state_27554[15]);var inst_27431 = (state_27554[16]);var inst_27422__$1 = (state_27554[2]);var inst_27423__$1 = cljs.core.get.call(null,inst_27422__$1,new cljs.core.Keyword(null,"id","id",1013907597));var inst_27424 = cljs.core.deref.call(null,stage);var inst_27425 = [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"chans","chans",1108527827)];var inst_27426 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27425,null));var inst_27427__$1 = cljs.core.get_in.call(null,inst_27424,inst_27426);var inst_27428__$1 = cljs.core.nth.call(null,inst_27427__$1,0,null);var inst_27429__$1 = cljs.core.nth.call(null,inst_27427__$1,1,null);var inst_27430__$1 = cljs.core.async.chan.call(null);var inst_27431__$1 = cljs.core.async.chan.call(null);var inst_27432__$1 = cljs.core.async.chan.call(null);var inst_27441 = (function (){var sch = inst_27432__$1;var pch = inst_27431__$1;var fch = inst_27430__$1;var out = inst_27429__$1;var p = inst_27428__$1;var vec__27414 = inst_27427__$1;var id = inst_27423__$1;var map__27413 = inst_27422__$1;return ((function (sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__){
return (function iter__27433(s__27434){return (new cljs.core.LazySeq(null,((function (sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__){
return (function (){var s__27434__$1 = s__27434;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27434__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__27582 = cljs.core.first.call(null,xs__4624__auto__);var u = cljs.core.nth.call(null,vec__27582,0,null);var repos = cljs.core.nth.call(null,vec__27582,1,null);var iterys__4260__auto__ = ((function (s__27434__$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__){
return (function iter__27435(s__27436){return (new cljs.core.LazySeq(null,((function (s__27434__$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__){
return (function (){var s__27436__$1 = s__27436;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27436__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var vec__27584 = cljs.core.first.call(null,xs__4624__auto____$1);var r = cljs.core.nth.call(null,vec__27584,0,null);var branches = cljs.core.nth.call(null,vec__27584,1,null);var iterys__4260__auto__ = ((function (s__27436__$1,s__27434__$1,vec__27584,r,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__){
return (function iter__27437(s__27438){return (new cljs.core.LazySeq(null,((function (s__27436__$1,s__27434__$1,vec__27584,r,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__){
return (function (){var s__27438__$1 = s__27438;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__27438__$1);if(temp__4126__auto____$2)
{var s__27438__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__27438__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__27438__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__27440 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__27439 = 0;while(true){
if((i__27439 < size__4263__auto__))
{var b = cljs.core._nth.call(null,c__4262__auto__,i__27439);cljs.core.chunk_append.call(null,b__27440,cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,r,new cljs.core.Keyword(null,"new-values","new-values",4698094945),b], null)));
{
var G__27665 = (i__27439 + 1);
i__27439 = G__27665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27440),iter__27437.call(null,cljs.core.chunk_rest.call(null,s__27438__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27440),null);
}
} else
{var b = cljs.core.first.call(null,s__27438__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,r,new cljs.core.Keyword(null,"new-values","new-values",4698094945),b], null)),iter__27437.call(null,cljs.core.rest.call(null,s__27438__$2)));
}
} else
{return null;
}
break;
}
});})(s__27436__$1,s__27434__$1,vec__27584,r,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__))
,null,null));
});})(s__27436__$1,s__27434__$1,vec__27584,r,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,branches));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__27435.call(null,cljs.core.rest.call(null,s__27436__$1)));
} else
{{
var G__27666 = cljs.core.rest.call(null,s__27436__$1);
s__27436__$1 = G__27666;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__27434__$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__))
,null,null));
});})(s__27434__$1,vec__27582,u,repos,xs__4624__auto__,temp__4126__auto__,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__27433.call(null,cljs.core.rest.call(null,s__27434__$1)));
} else
{{
var G__27667 = cljs.core.rest.call(null,s__27434__$1);
s__27434__$1 = G__27667;
continue;
}
}
} else
{return null;
}
break;
}
});})(sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__))
,null,null));
});
;})(sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,state_val_27555,c__8594__auto__))
})();var inst_27442 = inst_27441.call(null,metas);var inst_27443__$1 = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentHashMap.EMPTY,inst_27442);var inst_27444 = (function (){var new_values = inst_27443__$1;var sch = inst_27432__$1;var pch = inst_27431__$1;var fch = inst_27430__$1;var out = inst_27429__$1;var p = inst_27428__$1;var vec__27414 = inst_27427__$1;var id = inst_27423__$1;var map__27413 = inst_27422__$1;return ((function (new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,state_val_27555,c__8594__auto__){
return (function (p1__27167_SHARP_,p2__27168_SHARP_){return cljs.core.assoc_in.call(null,p1__27167_SHARP_,cljs.core.butlast.call(null,p2__27168_SHARP_),cljs.core.last.call(null,p2__27168_SHARP_));
});
;})(new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,state_val_27555,c__8594__auto__))
})();var inst_27451 = (function (){var new_values = inst_27443__$1;var sch = inst_27432__$1;var pch = inst_27431__$1;var fch = inst_27430__$1;var out = inst_27429__$1;var p = inst_27428__$1;var vec__27414 = inst_27427__$1;var id = inst_27423__$1;var map__27413 = inst_27422__$1;return ((function (new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__){
return (function iter__27445(s__27446){return (new cljs.core.LazySeq(null,((function (new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__){
return (function (){var s__27446__$1 = s__27446;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27446__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__27590 = cljs.core.first.call(null,xs__4624__auto__);var u = cljs.core.nth.call(null,vec__27590,0,null);var repos = cljs.core.nth.call(null,vec__27590,1,null);var iterys__4260__auto__ = ((function (s__27446__$1,vec__27590,u,repos,xs__4624__auto__,temp__4126__auto__,new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__){
return (function iter__27447(s__27448){return (new cljs.core.LazySeq(null,((function (s__27446__$1,vec__27590,u,repos,xs__4624__auto__,temp__4126__auto__,new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__){
return (function (){var s__27448__$1 = s__27448;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27448__$1);if(temp__4126__auto____$1)
{var s__27448__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27448__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__27448__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__27450 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__27449 = 0;while(true){
if((i__27449 < size__4263__auto__))
{var vec__27593 = cljs.core._nth.call(null,c__4262__auto__,i__27449);var id__$1 = cljs.core.nth.call(null,vec__27593,0,null);var repo = cljs.core.nth.call(null,vec__27593,1,null);cljs.core.chunk_append.call(null,b__27450,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(repo))))], null));
{
var G__27668 = (i__27449 + 1);
i__27449 = G__27668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27450),iter__27447.call(null,cljs.core.chunk_rest.call(null,s__27448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27450),null);
}
} else
{var vec__27594 = cljs.core.first.call(null,s__27448__$2);var id__$1 = cljs.core.nth.call(null,vec__27594,0,null);var repo = cljs.core.nth.call(null,vec__27594,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(repo))))], null),iter__27447.call(null,cljs.core.rest.call(null,s__27448__$2)));
}
} else
{return null;
}
break;
}
});})(s__27446__$1,vec__27590,u,repos,xs__4624__auto__,temp__4126__auto__,new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__))
,null,null));
});})(s__27446__$1,vec__27590,u,repos,xs__4624__auto__,temp__4126__auto__,new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__27445.call(null,cljs.core.rest.call(null,s__27446__$1)));
} else
{{
var G__27669 = cljs.core.rest.call(null,s__27446__$1);
s__27446__$1 = G__27669;
continue;
}
}
} else
{return null;
}
break;
}
});})(new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__))
,null,null));
});
;})(new_values,sch,pch,fch,out,p,vec__27414,id,map__27413,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,state_val_27555,c__8594__auto__))
})();var inst_27452 = cljs.core.deref.call(null,stage);var inst_27453 = cljs.core.dissoc.call(null,inst_27452,new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"config","config",3954079412));var inst_27454 = inst_27451.call(null,inst_27453);var inst_27455__$1 = cljs.core.reduce.call(null,inst_27444,cljs.core.PersistentHashMap.EMPTY,inst_27454);var inst_27456 = (function (){var p = inst_27428__$1;var meta_subs = inst_27455__$1;var vec__27414 = inst_27427__$1;var sch = inst_27432__$1;var new_values = inst_27443__$1;var fch = inst_27430__$1;var map__27413 = inst_27422__$1;var out = inst_27429__$1;var id = inst_27423__$1;var pch = inst_27431__$1;return ((function (p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,state_val_27555,c__8594__auto__){
return (function (p1__27169_SHARP_,p2__27170_SHARP_){return cljs.core.assoc_in.call(null,p1__27169_SHARP_,p2__27170_SHARP_,cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),cljs.core.concat.call(null,p2__27170_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215)], null))));
});
;})(p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,state_val_27555,c__8594__auto__))
})();var inst_27463 = (function (){var p = inst_27428__$1;var meta_subs = inst_27455__$1;var vec__27414 = inst_27427__$1;var sch = inst_27432__$1;var new_values = inst_27443__$1;var fch = inst_27430__$1;var map__27413 = inst_27422__$1;var out = inst_27429__$1;var id = inst_27423__$1;var pch = inst_27431__$1;return ((function (p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__){
return (function iter__27457(s__27458){return (new cljs.core.LazySeq(null,((function (p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__){
return (function (){var s__27458__$1 = s__27458;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27458__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__27600 = cljs.core.first.call(null,xs__4624__auto__);var u = cljs.core.nth.call(null,vec__27600,0,null);var repos = cljs.core.nth.call(null,vec__27600,1,null);var iterys__4260__auto__ = ((function (s__27458__$1,vec__27600,u,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__){
return (function iter__27459(s__27460){return (new cljs.core.LazySeq(null,((function (s__27458__$1,vec__27600,u,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__){
return (function (){var s__27460__$1 = s__27460;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27460__$1);if(temp__4126__auto____$1)
{var s__27460__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27460__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__27460__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__27462 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__27461 = 0;while(true){
if((i__27461 < size__4263__auto__))
{var vec__27603 = cljs.core._nth.call(null,c__4262__auto__,i__27461);var id__$1 = cljs.core.nth.call(null,vec__27603,0,null);var repo = cljs.core.nth.call(null,vec__27603,1,null);if((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1,new cljs.core.Keyword(null,"op","op",1013907795)], null)),new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007))) || (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1,new cljs.core.Keyword(null,"op","op",1013907795)], null)),new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890))))
{cljs.core.chunk_append.call(null,b__27462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1], null));
{
var G__27670 = (i__27461 + 1);
i__27461 = G__27670;
continue;
}
} else
{{
var G__27671 = (i__27461 + 1);
i__27461 = G__27671;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27462),iter__27459.call(null,cljs.core.chunk_rest.call(null,s__27460__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27462),null);
}
} else
{var vec__27604 = cljs.core.first.call(null,s__27460__$2);var id__$1 = cljs.core.nth.call(null,vec__27604,0,null);var repo = cljs.core.nth.call(null,vec__27604,1,null);if((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1,new cljs.core.Keyword(null,"op","op",1013907795)], null)),new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007))) || (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1,new cljs.core.Keyword(null,"op","op",1013907795)], null)),new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id__$1], null),iter__27459.call(null,cljs.core.rest.call(null,s__27460__$2)));
} else
{{
var G__27672 = cljs.core.rest.call(null,s__27460__$2);
s__27460__$1 = G__27672;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__27458__$1,vec__27600,u,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__))
,null,null));
});})(s__27458__$1,vec__27600,u,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__27457.call(null,cljs.core.rest.call(null,s__27458__$1)));
} else
{{
var G__27673 = cljs.core.rest.call(null,s__27458__$1);
s__27458__$1 = G__27673;
continue;
}
}
} else
{return null;
}
break;
}
});})(p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__))
,null,null));
});
;})(p,meta_subs,vec__27414,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27422__$1,inst_27423__$1,inst_27424,inst_27425,inst_27426,inst_27427__$1,inst_27428__$1,inst_27429__$1,inst_27430__$1,inst_27431__$1,inst_27432__$1,inst_27441,inst_27442,inst_27443__$1,inst_27444,inst_27451,inst_27452,inst_27453,inst_27454,inst_27455__$1,inst_27456,state_val_27555,c__8594__auto__))
})();var inst_27464 = inst_27463.call(null,metas);var inst_27465 = cljs.core.reduce.call(null,inst_27456,cljs.core.PersistentHashMap.EMPTY,inst_27464);var inst_27466 = cljs.core.empty_QMARK_.call(null,inst_27455__$1);var state_27554__$1 = (function (){var statearr_27605 = state_27554;(statearr_27605[7] = inst_27428__$1);
(statearr_27605[8] = inst_27443__$1);
(statearr_27605[9] = inst_27427__$1);
(statearr_27605[10] = inst_27455__$1);
(statearr_27605[11] = inst_27422__$1);
(statearr_27605[12] = inst_27423__$1);
(statearr_27605[13] = inst_27430__$1);
(statearr_27605[14] = inst_27432__$1);
(statearr_27605[15] = inst_27429__$1);
(statearr_27605[16] = inst_27431__$1);
(statearr_27605[17] = inst_27465);
return statearr_27605;
})();if(inst_27466)
{var statearr_27606_27674 = state_27554__$1;(statearr_27606_27674[1] = 5);
} else
{var statearr_27607_27675 = state_27554__$1;(statearr_27607_27675[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 15))
{var inst_27533 = cljs.core.async.timeout.call(null,10000);var state_27554__$1 = state_27554;var statearr_27608_27676 = state_27554__$1;(statearr_27608_27676[2] = inst_27533);
(statearr_27608_27676[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 21))
{var state_27554__$1 = state_27554;var statearr_27609_27677 = state_27554__$1;(statearr_27609_27677[2] = null);
(statearr_27609_27677[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 13))
{var inst_27518 = (state_27554[2]);var state_27554__$1 = state_27554;var statearr_27610_27678 = state_27554__$1;(statearr_27610_27678[2] = inst_27518);
(statearr_27610_27678[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 22))
{var inst_27544 = ("No meta-pubed ack received for"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(metas));var inst_27545 = (function(){throw inst_27544})();var state_27554__$1 = state_27554;var statearr_27611_27679 = state_27554__$1;(statearr_27611_27679[2] = inst_27545);
(statearr_27611_27679[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 6))
{var inst_27428 = (state_27554[7]);var inst_27455 = (state_27554[10]);var inst_27423 = (state_27554[12]);var inst_27432 = (state_27554[14]);var inst_27429 = (state_27554[15]);var inst_27469 = cljs.core.async.sub.call(null,inst_27428,new cljs.core.Keyword(null,"meta-subed","meta-subed",793641097),inst_27432);var inst_27470 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_27471 = [new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),inst_27455,inst_27423];var inst_27472 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_27470,inst_27471);var state_27554__$1 = (function (){var statearr_27612 = state_27554;(statearr_27612[23] = inst_27469);
return statearr_27612;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27554__$1,8,inst_27429,inst_27472);
} else
{if((state_val_27555 === 17))
{var inst_27541 = (state_27554[2]);var state_27554__$1 = state_27554;if(cljs.core.truth_(inst_27541))
{var statearr_27613_27680 = state_27554__$1;(statearr_27613_27680[1] = 21);
} else
{var statearr_27614_27681 = state_27554__$1;(statearr_27614_27681[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 3))
{var inst_27416 = (state_27554[22]);var state_27554__$1 = state_27554;var statearr_27615_27682 = state_27554__$1;(statearr_27615_27682[2] = inst_27416);
(statearr_27615_27682[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 12))
{var inst_27431 = (state_27554[16]);var inst_27520 = (state_27554[2]);var inst_27525 = [inst_27431];var inst_27526 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27525,null));var state_27554__$1 = (function (){var statearr_27616 = state_27554;(statearr_27616[24] = inst_27520);
return statearr_27616;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27554__$1,14,inst_27526);
} else
{if((state_val_27555 === 2))
{var inst_27416 = (state_27554[22]);var inst_27419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27416);var state_27554__$1 = state_27554;var statearr_27617_27683 = state_27554__$1;(statearr_27617_27683[2] = inst_27419);
(statearr_27617_27683[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 23))
{var inst_27428 = (state_27554[7]);var inst_27443 = (state_27554[8]);var inst_27427 = (state_27554[9]);var inst_27455 = (state_27554[10]);var inst_27422 = (state_27554[11]);var inst_27423 = (state_27554[12]);var inst_27430 = (state_27554[13]);var inst_27432 = (state_27554[14]);var inst_27429 = (state_27554[15]);var inst_27431 = (state_27554[16]);var inst_27465 = (state_27554[17]);var inst_27547 = (state_27554[2]);var inst_27548 = cljs.core.async.unsub.call(null,inst_27428,new cljs.core.Keyword(null,"meta-pubed","meta-pubed",790870534),inst_27431);var inst_27549 = cljs.core.async.unsub.call(null,inst_27428,new cljs.core.Keyword(null,"fetch","fetch",1111226924),inst_27430);var inst_27550 = cljs.core.async.close_BANG_.call(null,inst_27430);var inst_27551 = (function (){var p = inst_27428;var meta_subs = inst_27455;var vec__27414 = inst_27427;var meta_pubs = inst_27465;var sch = inst_27432;var new_values = inst_27443;var fch = inst_27430;var map__27413 = inst_27422;var out = inst_27429;var id = inst_27423;var pch = inst_27431;return ((function (p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function (old){return cljs.core.reduce.call(null,((function (p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function (p1__27172_SHARP_,p2__27173_SHARP_){return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,p1__27172_SHARP_,cljs.core.butlast.call(null,p2__27173_SHARP_),cljs.core.dissoc,new cljs.core.Keyword(null,"op","op",1013907795)),cljs.core.concat.call(null,cljs.core.butlast.call(null,p2__27173_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-values","new-values",4698094945),cljs.core.last.call(null,p2__27173_SHARP_)], null)),cljs.core.PersistentArrayMap.EMPTY);
});})(p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
,old,(function (){var iter__4264__auto__ = ((function (p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function iter__27618(s__27619){return (new cljs.core.LazySeq(null,((function (p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function (){var s__27619__$1 = s__27619;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27619__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__27629 = cljs.core.first.call(null,xs__4624__auto__);var user = cljs.core.nth.call(null,vec__27629,0,null);var repos = cljs.core.nth.call(null,vec__27629,1,null);var iterys__4260__auto__ = ((function (s__27619__$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function iter__27620(s__27621){return (new cljs.core.LazySeq(null,((function (s__27619__$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function (){var s__27621__$1 = s__27621;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27621__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var vec__27631 = cljs.core.first.call(null,xs__4624__auto____$1);var id__$1 = cljs.core.nth.call(null,vec__27631,0,null);var branches = cljs.core.nth.call(null,vec__27631,1,null);var iterys__4260__auto__ = ((function (s__27621__$1,s__27619__$1,vec__27631,id__$1,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function iter__27622(s__27623){return (new cljs.core.LazySeq(null,((function (s__27621__$1,s__27619__$1,vec__27631,id__$1,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__){
return (function (){var s__27623__$1 = s__27623;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__27623__$1);if(temp__4126__auto____$2)
{var s__27623__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__27623__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__27623__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__27625 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__27624 = 0;while(true){
if((i__27624 < size__4263__auto__))
{var b = cljs.core._nth.call(null,c__4262__auto__,i__27624);cljs.core.chunk_append.call(null,b__27625,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,id__$1,b], null));
{
var G__27684 = (i__27624 + 1);
i__27624 = G__27684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27625),iter__27622.call(null,cljs.core.chunk_rest.call(null,s__27623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27625),null);
}
} else
{var b = cljs.core.first.call(null,s__27623__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,id__$1,b], null),iter__27622.call(null,cljs.core.rest.call(null,s__27623__$2)));
}
} else
{return null;
}
break;
}
});})(s__27621__$1,s__27619__$1,vec__27631,id__$1,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
,null,null));
});})(s__27621__$1,s__27619__$1,vec__27631,id__$1,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,branches));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__27620.call(null,cljs.core.rest.call(null,s__27621__$1)));
} else
{{
var G__27685 = cljs.core.rest.call(null,s__27621__$1);
s__27621__$1 = G__27685;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__27619__$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
,null,null));
});})(s__27619__$1,vec__27629,user,repos,xs__4624__auto__,temp__4126__auto__,p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__27618.call(null,cljs.core.rest.call(null,s__27619__$1)));
} else
{{
var G__27686 = cljs.core.rest.call(null,s__27619__$1);
s__27619__$1 = G__27686;
continue;
}
}
} else
{return null;
}
break;
}
});})(p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
,null,null));
});})(p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
;return iter__4264__auto__.call(null,metas);
})());
});
;})(p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27547,inst_27548,inst_27549,inst_27550,state_val_27555,c__8594__auto__))
})();var inst_27552 = cljs.core.swap_BANG_.call(null,stage,inst_27551);var state_27554__$1 = (function (){var statearr_27632 = state_27554;(statearr_27632[25] = inst_27549);
(statearr_27632[26] = inst_27552);
(statearr_27632[27] = inst_27547);
(statearr_27632[28] = inst_27548);
(statearr_27632[29] = inst_27550);
return statearr_27632;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27554__$1,stage);
} else
{if((state_val_27555 === 19))
{var state_27554__$1 = state_27554;var statearr_27633_27687 = state_27554__$1;(statearr_27633_27687[2] = null);
(statearr_27633_27687[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 11))
{var inst_27423 = (state_27554[12]);var inst_27429 = (state_27554[15]);var inst_27465 = (state_27554[17]);var inst_27514 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_27515 = [new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007),inst_27465,inst_27423];var inst_27516 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_27514,inst_27515);var state_27554__$1 = state_27554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27554__$1,13,inst_27429,inst_27516);
} else
{if((state_val_27555 === 9))
{var inst_27428 = (state_27554[7]);var inst_27443 = (state_27554[8]);var inst_27427 = (state_27554[9]);var inst_27455 = (state_27554[10]);var inst_27422 = (state_27554[11]);var inst_27423 = (state_27554[12]);var inst_27430 = (state_27554[13]);var inst_27432 = (state_27554[14]);var inst_27429 = (state_27554[15]);var inst_27431 = (state_27554[16]);var inst_27465 = (state_27554[17]);var inst_27476 = (state_27554[2]);var inst_27477 = cljs.core.async.unsub.call(null,inst_27428,new cljs.core.Keyword(null,"meta-subed","meta-subed",793641097),inst_27432);var inst_27478 = (function (){var p = inst_27428;var meta_subs = inst_27455;var vec__27414 = inst_27427;var meta_pubs = inst_27465;var sch = inst_27432;var new_values = inst_27443;var fch = inst_27430;var map__27413 = inst_27422;var out = inst_27429;var id = inst_27423;var pch = inst_27431;return ((function (p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27476,inst_27477,state_val_27555,c__8594__auto__){
return (function (p1__27171_SHARP_){return cljs.core.assoc_in.call(null,p1__27171_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"subs","subs",1017445797)], null),meta_subs);
});
;})(p,meta_subs,vec__27414,meta_pubs,sch,new_values,fch,map__27413,out,id,pch,inst_27428,inst_27443,inst_27427,inst_27455,inst_27422,inst_27423,inst_27430,inst_27432,inst_27429,inst_27431,inst_27465,inst_27476,inst_27477,state_val_27555,c__8594__auto__))
})();var inst_27479 = cljs.core.swap_BANG_.call(null,stage,inst_27478);var state_27554__$1 = (function (){var statearr_27634 = state_27554;(statearr_27634[30] = inst_27477);
(statearr_27634[31] = inst_27476);
return statearr_27634;
})();var statearr_27635_27688 = state_27554__$1;(statearr_27635_27688[2] = inst_27479);
(statearr_27635_27688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 5))
{var state_27554__$1 = state_27554;var statearr_27636_27689 = state_27554__$1;(statearr_27636_27689[2] = null);
(statearr_27636_27689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 14))
{var inst_27530 = (state_27554[32]);var inst_27431 = (state_27554[16]);var inst_27528 = (state_27554[2]);var inst_27529 = cljs.core.nth.call(null,inst_27528,0,null);var inst_27530__$1 = cljs.core.nth.call(null,inst_27528,1,null);var inst_27531 = cljs.core._EQ_.call(null,inst_27530__$1,inst_27431);var state_27554__$1 = (function (){var statearr_27637 = state_27554;(statearr_27637[33] = inst_27529);
(statearr_27637[32] = inst_27530__$1);
return statearr_27637;
})();if(inst_27531)
{var statearr_27638_27690 = state_27554__$1;(statearr_27638_27690[1] = 15);
} else
{var statearr_27639_27691 = state_27554__$1;(statearr_27639_27691[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 16))
{var inst_27530 = (state_27554[32]);var inst_27535 = cljs.core._EQ_.call(null,inst_27530,new cljs.core.Keyword(null,"default","default",2558708147));var state_27554__$1 = state_27554;if(inst_27535)
{var statearr_27640_27692 = state_27554__$1;(statearr_27640_27692[1] = 18);
} else
{var statearr_27641_27693 = state_27554__$1;(statearr_27641_27693[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 10))
{var state_27554__$1 = state_27554;var statearr_27642_27694 = state_27554__$1;(statearr_27642_27694[2] = null);
(statearr_27642_27694[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 18))
{var inst_27529 = (state_27554[33]);var state_27554__$1 = state_27554;var statearr_27643_27695 = state_27554__$1;(statearr_27643_27695[2] = inst_27529);
(statearr_27643_27695[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27555 === 8))
{var inst_27432 = (state_27554[14]);var inst_27474 = (state_27554[2]);var state_27554__$1 = (function (){var statearr_27644 = state_27554;(statearr_27644[34] = inst_27474);
return statearr_27644;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,9,inst_27432);
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
var state_machine__8530__auto____0 = (function (){var statearr_27648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27648[0] = state_machine__8530__auto__);
(statearr_27648[1] = 1);
return statearr_27648;
});
var state_machine__8530__auto____1 = (function (state_27554){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_27554);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e27649){if((e27649 instanceof Object))
{var ex__8533__auto__ = e27649;var statearr_27650_27696 = state_27554;(statearr_27650_27696[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27697 = state_27554;
state_27554 = G__27697;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_27554){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_27554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_27651 = f__8595__auto__.call(null);(statearr_27651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_27651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Connect stage to a remote url of another peer,
* e.g. ws://remote.peer.net:1234/geschichte/ws.
*/
geschichte.stage.connect_BANG_ = (function connect_BANG_(stage,url){var vec__27770 = cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"chans","chans",1108527827)], null));var p = cljs.core.nth.call(null,vec__27770,0,null);var out = cljs.core.nth.call(null,vec__27770,1,null);var connedch = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,p,new cljs.core.Keyword(null,"connected","connected",4729661051),connedch);
cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"connect","connect",1965255772),new cljs.core.Keyword(null,"url","url",1014020321),url], null));
var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,vec__27770,p,out,connedch){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,vec__27770,p,out,connedch){
return (function (state_27810){var state_val_27811 = (state_27810[1]);if((state_val_27811 === 7))
{var inst_27808 = (state_27810[2]);var state_27810__$1 = state_27810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27810__$1,inst_27808);
} else
{if((state_val_27811 === 1))
{var state_27810__$1 = state_27810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27810__$1,2,connedch);
} else
{if((state_val_27811 === 4))
{var inst_27775 = (state_27810[7]);var state_27810__$1 = state_27810;var statearr_27812_27842 = state_27810__$1;(statearr_27812_27842[2] = inst_27775);
(statearr_27812_27842[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 15))
{var inst_27801 = cljs.core.println.call(null,"CONNECTED:",url);var state_27810__$1 = (function (){var statearr_27813 = state_27810;(statearr_27813[8] = inst_27801);
return statearr_27813;
})();var statearr_27814_27843 = state_27810__$1;(statearr_27814_27843[2] = stage);
(statearr_27814_27843[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 13))
{var inst_27806 = (state_27810[2]);var state_27810__$1 = state_27810;var statearr_27815_27844 = state_27810__$1;(statearr_27815_27844[2] = inst_27806);
(statearr_27815_27844[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 6))
{var inst_27783 = (state_27810[9]);var inst_27786 = cljs.core.seq_QMARK_.call(null,inst_27783);var state_27810__$1 = state_27810;if(inst_27786)
{var statearr_27816_27845 = state_27810__$1;(statearr_27816_27845[1] = 8);
} else
{var statearr_27817_27846 = state_27810__$1;(statearr_27817_27846[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 17))
{var inst_27798 = (state_27810[2]);var inst_27783 = inst_27798;var state_27810__$1 = (function (){var statearr_27818 = state_27810;(statearr_27818[9] = inst_27783);
return statearr_27818;
})();var statearr_27819_27847 = state_27810__$1;(statearr_27819_27847[2] = null);
(statearr_27819_27847[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 3))
{var inst_27775 = (state_27810[7]);var inst_27778 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27775);var state_27810__$1 = state_27810;var statearr_27820_27848 = state_27810__$1;(statearr_27820_27848[2] = inst_27778);
(statearr_27820_27848[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 12))
{var state_27810__$1 = state_27810;var statearr_27821_27849 = state_27810__$1;(statearr_27821_27849[2] = null);
(statearr_27821_27849[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 2))
{var inst_27775 = (state_27810[7]);var inst_27775__$1 = (state_27810[2]);var inst_27776 = cljs.core.seq_QMARK_.call(null,inst_27775__$1);var state_27810__$1 = (function (){var statearr_27822 = state_27810;(statearr_27822[7] = inst_27775__$1);
return statearr_27822;
})();if(inst_27776)
{var statearr_27823_27850 = state_27810__$1;(statearr_27823_27850[1] = 3);
} else
{var statearr_27824_27851 = state_27810__$1;(statearr_27824_27851[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 11))
{var inst_27792 = (state_27810[10]);var inst_27794 = cljs.core._EQ_.call(null,inst_27792,url);var inst_27795 = !(inst_27794);var state_27810__$1 = state_27810;if(inst_27795)
{var statearr_27825_27852 = state_27810__$1;(statearr_27825_27852[1] = 14);
} else
{var statearr_27826_27853 = state_27810__$1;(statearr_27826_27853[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 9))
{var inst_27783 = (state_27810[9]);var state_27810__$1 = state_27810;var statearr_27827_27854 = state_27810__$1;(statearr_27827_27854[2] = inst_27783);
(statearr_27827_27854[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 5))
{var inst_27775 = (state_27810[7]);var inst_27781 = (state_27810[2]);var inst_27782 = cljs.core.get.call(null,inst_27781,new cljs.core.Keyword(null,"url","url",1014020321));var inst_27783 = inst_27775;var state_27810__$1 = (function (){var statearr_27828 = state_27810;(statearr_27828[11] = inst_27782);
(statearr_27828[9] = inst_27783);
return statearr_27828;
})();var statearr_27829_27855 = state_27810__$1;(statearr_27829_27855[2] = null);
(statearr_27829_27855[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 14))
{var state_27810__$1 = state_27810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27810__$1,17,connedch);
} else
{if((state_val_27811 === 16))
{var inst_27803 = (state_27810[2]);var state_27810__$1 = state_27810;var statearr_27830_27856 = state_27810__$1;(statearr_27830_27856[2] = inst_27803);
(statearr_27830_27856[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 10))
{var inst_27792 = (state_27810[10]);var inst_27791 = (state_27810[2]);var inst_27792__$1 = cljs.core.get.call(null,inst_27791,new cljs.core.Keyword(null,"url","url",1014020321));var state_27810__$1 = (function (){var statearr_27831 = state_27810;(statearr_27831[10] = inst_27792__$1);
return statearr_27831;
})();if(cljs.core.truth_(inst_27792__$1))
{var statearr_27832_27857 = state_27810__$1;(statearr_27832_27857[1] = 11);
} else
{var statearr_27833_27858 = state_27810__$1;(statearr_27833_27858[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27811 === 8))
{var inst_27783 = (state_27810[9]);var inst_27788 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27783);var state_27810__$1 = state_27810;var statearr_27834_27859 = state_27810__$1;(statearr_27834_27859[2] = inst_27788);
(statearr_27834_27859[1] = 10);
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
});})(c__8594__auto__,vec__27770,p,out,connedch))
;return ((function (switch__8529__auto__,c__8594__auto__,vec__27770,p,out,connedch){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_27838 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27838[0] = state_machine__8530__auto__);
(statearr_27838[1] = 1);
return statearr_27838;
});
var state_machine__8530__auto____1 = (function (state_27810){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_27810);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e27839){if((e27839 instanceof Object))
{var ex__8533__auto__ = e27839;var statearr_27840_27860 = state_27810;(statearr_27840_27860[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27861 = state_27810;
state_27810 = G__27861;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_27810){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_27810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,vec__27770,p,out,connedch))
})();var state__8596__auto__ = (function (){var statearr_27841 = f__8595__auto__.call(null);(statearr_27841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_27841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,vec__27770,p,out,connedch))
);
return c__8594__auto__;
});
/**
* Create a stage for user, given peer and a safe evaluation function for the transaction functions.
*/
geschichte.stage.create_stage_BANG_ = (function create_stage_BANG_(user,peer,eval_fn){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_29024){var state_val_29025 = (state_29024[1]);if((state_val_29025 === 5))
{var inst_28603 = (state_29024[7]);var inst_28576 = (state_29024[8]);var inst_28588 = (state_29024[9]);var inst_28578 = (state_29024[10]);var inst_28579 = (state_29024[11]);var inst_28577 = (state_29024[12]);var inst_28575 = (state_29024[13]);var inst_28587 = (state_29024[14]);var inst_28609 = (state_29024[2]);var inst_28610 = cljs.core.async.sub.call(null,inst_28577,new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007),inst_28578);var inst_29020 = cljs.core.async.chan.call(null,1);var inst_29021 = (function (){var c__8594__auto____$1 = inst_29020;var stage = inst_28603;var store = inst_28588;var map__28574 = inst_28587;var val_ch = inst_28579;var pub_ch = inst_28578;var p = inst_28577;var out = inst_28576;var in$ = inst_28575;return ((function (c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (state_29015){var state_val_29016 = (state_29015[1]);if((state_val_29016 === 65))
{var inst_28859 = (state_29015[7]);var inst_28858 = (state_29015[8]);var inst_28861 = (state_29015[9]);var inst_28860 = (state_29015[10]);var inst_28918 = (state_29015[2]);var inst_28919 = (inst_28861 + 1);var tmp29017 = inst_28859;var tmp29018 = inst_28858;var tmp29019 = inst_28860;var inst_28858__$1 = tmp29018;var inst_28859__$1 = tmp29017;var inst_28860__$1 = tmp29019;var inst_28861__$1 = inst_28919;var state_29015__$1 = (function (){var statearr_29026 = state_29015;(statearr_29026[7] = inst_28859__$1);
(statearr_29026[8] = inst_28858__$1);
(statearr_29026[11] = inst_28918);
(statearr_29026[9] = inst_28861__$1);
(statearr_29026[10] = inst_28860__$1);
return statearr_29026;
})();var statearr_29027_29282 = state_29015__$1;(statearr_29027_29282[2] = null);
(statearr_29027_29282[1] = 59);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 70))
{var state_29015__$1 = state_29015;var statearr_29028_29283 = state_29015__$1;(statearr_29028_29283[2] = null);
(statearr_29028_29283[1] = 71);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 62))
{var inst_28858 = (state_29015[8]);var inst_28922 = (state_29015[12]);var inst_28922__$1 = cljs.core.seq.call(null,inst_28858);var state_29015__$1 = (function (){var statearr_29029 = state_29015;(statearr_29029[12] = inst_28922__$1);
return statearr_29029;
})();if(inst_28922__$1)
{var statearr_29030_29284 = state_29015__$1;(statearr_29030_29284[1] = 75);
} else
{var statearr_29031_29285 = state_29015__$1;(statearr_29031_29285[1] = 76);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 74))
{var inst_28911 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29032_29286 = state_29015__$1;(statearr_29032_29286[2] = inst_28911);
(statearr_29032_29286[1] = 71);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 7))
{var inst_29013 = (state_29015[2]);var state_29015__$1 = state_29015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else
{if((state_val_29016 === 59))
{var inst_28861 = (state_29015[9]);var inst_28860 = (state_29015[10]);var inst_28863 = (inst_28861 < inst_28860);var inst_28864 = inst_28863;var state_29015__$1 = state_29015;if(cljs.core.truth_(inst_28864))
{var statearr_29033_29287 = state_29015__$1;(statearr_29033_29287[1] = 61);
} else
{var statearr_29034_29288 = state_29015__$1;(statearr_29034_29288[1] = 62);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 86))
{var inst_28956 = (state_29015[13]);var inst_28958 = cljs.core.chunked_seq_QMARK_.call(null,inst_28956);var state_29015__$1 = state_29015;if(inst_28958)
{var statearr_29035_29289 = state_29015__$1;(statearr_29035_29289[1] = 89);
} else
{var statearr_29036_29290 = state_29015__$1;(statearr_29036_29290[1] = 90);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 20))
{var inst_28707 = (state_29015[14]);var inst_28706 = (state_29015[15]);var inst_28709 = (inst_28707 < inst_28706);var inst_28710 = inst_28709;var state_29015__$1 = state_29015;if(cljs.core.truth_(inst_28710))
{var statearr_29037_29291 = state_29015__$1;(statearr_29037_29291[1] = 22);
} else
{var statearr_29038_29292 = state_29015__$1;(statearr_29038_29292[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 72))
{var inst_28891 = (state_29015[16]);var inst_28895 = cljs.core.chunk_first.call(null,inst_28891);var inst_28896 = cljs.core.chunk_rest.call(null,inst_28891);var inst_28897 = cljs.core.count.call(null,inst_28895);var inst_28872 = inst_28896;var inst_28873 = inst_28895;var inst_28874 = inst_28897;var inst_28875 = 0;var state_29015__$1 = (function (){var statearr_29039 = state_29015;(statearr_29039[17] = inst_28872);
(statearr_29039[18] = inst_28873);
(statearr_29039[19] = inst_28874);
(statearr_29039[20] = inst_28875);
return statearr_29039;
})();var statearr_29040_29293 = state_29015__$1;(statearr_29040_29293[2] = null);
(statearr_29040_29293[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 58))
{var inst_28998 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29044_29294 = state_29015__$1;(statearr_29044_29294[2] = inst_28998);
(statearr_29044_29294[1] = 55);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 60))
{var inst_28844 = (state_29015[21]);var inst_28994 = (state_29015[2]);var inst_28995 = cljs.core.next.call(null,inst_28844);var inst_28691 = inst_28995;var inst_28692 = null;var inst_28693 = 0;var inst_28694 = 0;var state_29015__$1 = (function (){var statearr_29045 = state_29015;(statearr_29045[22] = inst_28994);
(statearr_29045[23] = inst_28694);
(statearr_29045[24] = inst_28691);
(statearr_29045[25] = inst_28692);
(statearr_29045[26] = inst_28693);
return statearr_29045;
})();var statearr_29046_29295 = state_29015__$1;(statearr_29046_29295[2] = null);
(statearr_29046_29295[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 27))
{var inst_28707 = (state_29015[14]);var inst_28631 = (state_29015[27]);var inst_28721 = (state_29015[28]);var inst_28704 = (state_29015[29]);var inst_28702 = (state_29015[30]);var inst_28718 = (state_29015[31]);var inst_28706 = (state_29015[15]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28691 = (state_29015[24]);var inst_28715 = (state_29015[33]);var inst_28720 = (state_29015[34]);var inst_28700 = (state_29015[35]);var inst_28713 = (state_29015[36]);var inst_28714 = (state_29015[37]);var inst_28621 = (state_29015[38]);var inst_28705 = (state_29015[39]);var inst_28701 = (state_29015[40]);var inst_28719 = (state_29015[41]);var inst_28692 = (state_29015[25]);var inst_28623 = (state_29015[42]);var inst_28693 = (state_29015[26]);var inst_28727 = cljs.core._nth.call(null,inst_28719,inst_28721);var inst_28728 = cljs.core.nth.call(null,inst_28727,0,null);var inst_28729 = cljs.core.nth.call(null,inst_28727,1,null);var inst_28730 = [inst_28701,inst_28714,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28731 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28730,null));var inst_28732 = (function (){var repo = inst_28715;var map__28625 = inst_28631;var count__28688 = inst_28720;var i__28677 = inst_28694;var chunk__28683 = inst_28705;var heads = inst_28729;var mp = inst_28631;var vec__28712 = inst_28713;var i__28685 = inst_28707;var u = inst_28701;var chunk__28675 = inst_28692;var seq__28662 = inst_28691;var count__28684 = inst_28706;var chunk__28687 = inst_28719;var count__28676 = inst_28693;var metas = inst_28632;var seq__28686 = inst_28718;var seq__28678 = inst_28704;var G__28612 = inst_28623;var repos = inst_28702;var vec__28726 = inst_28727;var map__28613 = inst_28621;var id = inst_28714;var b = inst_28728;var i__28689 = inst_28721;var vec__28699 = inst_28700;return ((function (repo,map__28625,count__28688,i__28677,chunk__28683,heads,mp,vec__28712,i__28685,u,chunk__28675,seq__28662,count__28684,chunk__28687,count__28676,metas,seq__28686,seq__28678,G__28612,repos,vec__28726,map__28613,id,b,i__28689,vec__28699,inst_28707,inst_28631,inst_28721,inst_28704,inst_28702,inst_28718,inst_28706,inst_28632,inst_28694,inst_28691,inst_28715,inst_28720,inst_28700,inst_28713,inst_28714,inst_28621,inst_28705,inst_28701,inst_28719,inst_28692,inst_28623,inst_28693,inst_28727,inst_28728,inst_28729,inst_28730,inst_28731,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(repo,map__28625,count__28688,i__28677,chunk__28683,heads,mp,vec__28712,i__28685,u,chunk__28675,seq__28662,count__28684,chunk__28687,count__28676,metas,seq__28686,seq__28678,G__28612,repos,vec__28726,map__28613,id,b,i__28689,vec__28699,inst_28707,inst_28631,inst_28721,inst_28704,inst_28702,inst_28718,inst_28706,inst_28632,inst_28694,inst_28691,inst_28715,inst_28720,inst_28700,inst_28713,inst_28714,inst_28621,inst_28705,inst_28701,inst_28719,inst_28692,inst_28623,inst_28693,inst_28727,inst_28728,inst_28729,inst_28730,inst_28731,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28733 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28731,inst_28732);var inst_28734 = (inst_28721 + 1);var tmp29041 = inst_28718;var tmp29042 = inst_28720;var tmp29043 = inst_28719;var inst_28718__$1 = tmp29041;var inst_28719__$1 = tmp29043;var inst_28720__$1 = tmp29042;var inst_28721__$1 = inst_28734;var state_29015__$1 = (function (){var statearr_29047 = state_29015;(statearr_29047[28] = inst_28721__$1);
(statearr_29047[31] = inst_28718__$1);
(statearr_29047[43] = inst_28733);
(statearr_29047[34] = inst_28720__$1);
(statearr_29047[41] = inst_28719__$1);
return statearr_29047;
})();var statearr_29048_29296 = state_29015__$1;(statearr_29048_29296[2] = null);
(statearr_29048_29296[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 1))
{var state_29015__$1 = state_29015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29015__$1,2,pub_ch);
} else
{if((state_val_29016 === 69))
{var inst_28891 = (state_29015[16]);var inst_28893 = cljs.core.chunked_seq_QMARK_.call(null,inst_28891);var state_29015__$1 = state_29015;if(inst_28893)
{var statearr_29049_29297 = state_29015__$1;(statearr_29049_29297[1] = 72);
} else
{var statearr_29050_29298 = state_29015__$1;(statearr_29050_29298[1] = 73);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 24))
{var inst_28838 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29051_29299 = state_29015__$1;(statearr_29051_29299[2] = inst_28838);
(statearr_29051_29299[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 55))
{var inst_29001 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29052_29300 = state_29015__$1;(statearr_29052_29300[2] = inst_29001);
(statearr_29052_29300[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 85))
{var inst_28981 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29053_29301 = state_29015__$1;(statearr_29053_29301[2] = inst_28981);
(statearr_29053_29301[1] = 82);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 39))
{var inst_28768 = (state_29015[44]);var inst_28772 = cljs.core.chunk_first.call(null,inst_28768);var inst_28773 = cljs.core.chunk_rest.call(null,inst_28768);var inst_28774 = cljs.core.count.call(null,inst_28772);var inst_28704 = inst_28773;var inst_28705 = inst_28772;var inst_28706 = inst_28774;var inst_28707 = 0;var state_29015__$1 = (function (){var statearr_29054 = state_29015;(statearr_29054[14] = inst_28707);
(statearr_29054[29] = inst_28704);
(statearr_29054[15] = inst_28706);
(statearr_29054[39] = inst_28705);
return statearr_29054;
})();var statearr_29055_29302 = state_29015__$1;(statearr_29055_29302[2] = null);
(statearr_29055_29302[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 88))
{var inst_28979 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29056_29303 = state_29015__$1;(statearr_29056_29303[2] = inst_28979);
(statearr_29056_29303[1] = 85);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 46))
{var inst_28827 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29057_29304 = state_29015__$1;(statearr_29057_29304[2] = inst_28827);
(statearr_29057_29304[1] = 43);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 4))
{var inst_28615 = (state_29015[45]);var state_29015__$1 = state_29015;var statearr_29058_29305 = state_29015__$1;(statearr_29058_29305[2] = inst_28615);
(statearr_29058_29305[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 77))
{var inst_28990 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29059_29306 = state_29015__$1;(statearr_29059_29306[2] = inst_28990);
(statearr_29059_29306[1] = 63);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 54))
{var state_29015__$1 = state_29015;var statearr_29060_29307 = state_29015__$1;(statearr_29060_29307[2] = null);
(statearr_29060_29307[1] = 55);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 92))
{var inst_29007 = (state_29015[2]);var inst_28623 = inst_29007;var state_29015__$1 = (function (){var statearr_29061 = state_29015;(statearr_29061[42] = inst_28623);
return statearr_29061;
})();var statearr_29062_29308 = state_29015__$1;(statearr_29062_29308[2] = null);
(statearr_29062_29308[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 15))
{var inst_28694 = (state_29015[23]);var inst_28693 = (state_29015[26]);var inst_28696 = (inst_28694 < inst_28693);var inst_28697 = inst_28696;var state_29015__$1 = state_29015;if(cljs.core.truth_(inst_28697))
{var statearr_29063_29309 = state_29015__$1;(statearr_29063_29309[1] = 17);
} else
{var statearr_29064_29310 = state_29015__$1;(statearr_29064_29310[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 48))
{var state_29015__$1 = state_29015;var statearr_29065_29311 = state_29015__$1;(statearr_29065_29311[2] = null);
(statearr_29065_29311[1] = 49);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 50))
{var inst_28802 = (state_29015[46]);var inst_28806 = cljs.core.chunk_first.call(null,inst_28802);var inst_28807 = cljs.core.chunk_rest.call(null,inst_28802);var inst_28808 = cljs.core.count.call(null,inst_28806);var inst_28783 = inst_28807;var inst_28784 = inst_28806;var inst_28785 = inst_28808;var inst_28786 = 0;var state_29015__$1 = (function (){var statearr_29069 = state_29015;(statearr_29069[47] = inst_28784);
(statearr_29069[48] = inst_28786);
(statearr_29069[49] = inst_28783);
(statearr_29069[50] = inst_28785);
return statearr_29069;
})();var statearr_29070_29312 = state_29015__$1;(statearr_29070_29312[2] = null);
(statearr_29070_29312[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 75))
{var inst_28922 = (state_29015[12]);var inst_28924 = cljs.core.chunked_seq_QMARK_.call(null,inst_28922);var state_29015__$1 = state_29015;if(inst_28924)
{var statearr_29071_29313 = state_29015__$1;(statearr_29071_29313[1] = 78);
} else
{var statearr_29072_29314 = state_29015__$1;(statearr_29072_29314[1] = 79);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 21))
{var inst_28694 = (state_29015[23]);var inst_28691 = (state_29015[24]);var inst_28692 = (state_29015[25]);var inst_28693 = (state_29015[26]);var inst_28840 = (state_29015[2]);var inst_28841 = (inst_28694 + 1);var tmp29066 = inst_28691;var tmp29067 = inst_28692;var tmp29068 = inst_28693;var inst_28691__$1 = tmp29066;var inst_28692__$1 = tmp29067;var inst_28693__$1 = tmp29068;var inst_28694__$1 = inst_28841;var state_29015__$1 = (function (){var statearr_29073 = state_29015;(statearr_29073[23] = inst_28694__$1);
(statearr_29073[24] = inst_28691__$1);
(statearr_29073[51] = inst_28840);
(statearr_29073[25] = inst_28692__$1);
(statearr_29073[26] = inst_28693__$1);
return statearr_29073;
})();var statearr_29074_29315 = state_29015__$1;(statearr_29074_29315[2] = null);
(statearr_29074_29315[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 31))
{var state_29015__$1 = state_29015;var statearr_29075_29316 = state_29015__$1;(statearr_29075_29316[2] = null);
(statearr_29075_29316[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 32))
{var inst_28760 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29076_29317 = state_29015__$1;(statearr_29076_29317[2] = inst_28760);
(statearr_29076_29317[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 40))
{var inst_28780 = (state_29015[52]);var inst_28768 = (state_29015[44]);var inst_28778 = (state_29015[53]);var inst_28778__$1 = cljs.core.first.call(null,inst_28768);var inst_28779 = cljs.core.nth.call(null,inst_28778__$1,0,null);var inst_28780__$1 = cljs.core.nth.call(null,inst_28778__$1,1,null);var inst_28781 = new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(inst_28780__$1);var inst_28782 = cljs.core.seq.call(null,inst_28781);var inst_28783 = inst_28782;var inst_28784 = null;var inst_28785 = 0;var inst_28786 = 0;var state_29015__$1 = (function (){var statearr_29077 = state_29015;(statearr_29077[47] = inst_28784);
(statearr_29077[52] = inst_28780__$1);
(statearr_29077[48] = inst_28786);
(statearr_29077[49] = inst_28783);
(statearr_29077[54] = inst_28779);
(statearr_29077[50] = inst_28785);
(statearr_29077[53] = inst_28778__$1);
return statearr_29077;
})();var statearr_29078_29318 = state_29015__$1;(statearr_29078_29318[2] = null);
(statearr_29078_29318[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 91))
{var inst_28976 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29079_29319 = state_29015__$1;(statearr_29079_29319[2] = inst_28976);
(statearr_29079_29319[1] = 88);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 56))
{var inst_28844 = (state_29015[21]);var inst_28848 = cljs.core.chunk_first.call(null,inst_28844);var inst_28849 = cljs.core.chunk_rest.call(null,inst_28844);var inst_28850 = cljs.core.count.call(null,inst_28848);var inst_28691 = inst_28849;var inst_28692 = inst_28848;var inst_28693 = inst_28850;var inst_28694 = 0;var state_29015__$1 = (function (){var statearr_29080 = state_29015;(statearr_29080[23] = inst_28694);
(statearr_29080[24] = inst_28691);
(statearr_29080[25] = inst_28692);
(statearr_29080[26] = inst_28693);
return statearr_29080;
})();var statearr_29081_29320 = state_29015__$1;(statearr_29081_29320[2] = null);
(statearr_29081_29320[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 33))
{var inst_28737 = (state_29015[55]);var inst_28741 = cljs.core.chunk_first.call(null,inst_28737);var inst_28742 = cljs.core.chunk_rest.call(null,inst_28737);var inst_28743 = cljs.core.count.call(null,inst_28741);var inst_28718 = inst_28742;var inst_28719 = inst_28741;var inst_28720 = inst_28743;var inst_28721 = 0;var state_29015__$1 = (function (){var statearr_29082 = state_29015;(statearr_29082[28] = inst_28721);
(statearr_29082[31] = inst_28718);
(statearr_29082[34] = inst_28720);
(statearr_29082[41] = inst_28719);
return statearr_29082;
})();var statearr_29083_29321 = state_29015__$1;(statearr_29083_29321[2] = null);
(statearr_29083_29321[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 13))
{var inst_29011 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29084_29322 = state_29015__$1;(statearr_29084_29322[2] = inst_29011);
(statearr_29084_29322[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 22))
{var inst_28707 = (state_29015[14]);var inst_28715 = (state_29015[33]);var inst_28713 = (state_29015[36]);var inst_28705 = (state_29015[39]);var inst_28713__$1 = cljs.core._nth.call(null,inst_28705,inst_28707);var inst_28714 = cljs.core.nth.call(null,inst_28713__$1,0,null);var inst_28715__$1 = cljs.core.nth.call(null,inst_28713__$1,1,null);var inst_28716 = new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(inst_28715__$1);var inst_28717 = cljs.core.seq.call(null,inst_28716);var inst_28718 = inst_28717;var inst_28719 = null;var inst_28720 = 0;var inst_28721 = 0;var state_29015__$1 = (function (){var statearr_29085 = state_29015;(statearr_29085[28] = inst_28721);
(statearr_29085[31] = inst_28718);
(statearr_29085[33] = inst_28715__$1);
(statearr_29085[34] = inst_28720);
(statearr_29085[36] = inst_28713__$1);
(statearr_29085[37] = inst_28714);
(statearr_29085[41] = inst_28719);
return statearr_29085;
})();var statearr_29086_29323 = state_29015__$1;(statearr_29086_29323[2] = null);
(statearr_29086_29323[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 90))
{var inst_28844 = (state_29015[21]);var inst_28854 = (state_29015[56]);var inst_28631 = (state_29015[27]);var inst_28940 = (state_29015[57]);var inst_28934 = (state_29015[58]);var inst_28938 = (state_29015[59]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28859 = (state_29015[7]);var inst_28932 = (state_29015[60]);var inst_28939 = (state_29015[61]);var inst_28621 = (state_29015[38]);var inst_28922 = (state_29015[12]);var inst_28692 = (state_29015[25]);var inst_28933 = (state_29015[62]);var inst_28855 = (state_29015[63]);var inst_28623 = (state_29015[42]);var inst_28861 = (state_29015[9]);var inst_28856 = (state_29015[64]);var inst_28860 = (state_29015[10]);var inst_28693 = (state_29015[26]);var inst_28956 = (state_29015[13]);var inst_28966 = cljs.core.first.call(null,inst_28956);var inst_28967 = cljs.core.nth.call(null,inst_28966,0,null);var inst_28968 = cljs.core.nth.call(null,inst_28966,1,null);var inst_28969 = [inst_28855,inst_28933,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28970 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28969,null));var inst_28971 = (function (){var repo = inst_28934;var map__28625 = inst_28631;var i__28677 = inst_28694;var temp__4126__auto__ = inst_28956;var heads = inst_28968;var mp = inst_28631;var u = inst_28855;var vec__28853 = inst_28854;var chunk__28675 = inst_28692;var seq__28662 = inst_28844;var vec__28931 = inst_28932;var count__28676 = inst_28693;var chunk__28668 = inst_28859;var seq__28663 = inst_28922;var metas = inst_28632;var i__28667 = inst_28940;var i__28670 = inst_28861;var chunk__28665 = inst_28938;var G__28612 = inst_28623;var repos = inst_28856;var seq__28664 = inst_28956;var vec__28965 = inst_28966;var count__28666 = inst_28939;var count__28669 = inst_28860;var map__28613 = inst_28621;var id = inst_28933;var b = inst_28967;return ((function (repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28675,seq__28662,vec__28931,count__28676,chunk__28668,seq__28663,metas,i__28667,i__28670,chunk__28665,G__28612,repos,seq__28664,vec__28965,count__28666,count__28669,map__28613,id,b,inst_28844,inst_28854,inst_28631,inst_28940,inst_28934,inst_28938,inst_28632,inst_28694,inst_28859,inst_28932,inst_28939,inst_28621,inst_28922,inst_28692,inst_28933,inst_28855,inst_28623,inst_28861,inst_28856,inst_28860,inst_28693,inst_28956,inst_28966,inst_28967,inst_28968,inst_28969,inst_28970,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28675,seq__28662,vec__28931,count__28676,chunk__28668,seq__28663,metas,i__28667,i__28670,chunk__28665,G__28612,repos,seq__28664,vec__28965,count__28666,count__28669,map__28613,id,b,inst_28844,inst_28854,inst_28631,inst_28940,inst_28934,inst_28938,inst_28632,inst_28694,inst_28859,inst_28932,inst_28939,inst_28621,inst_28922,inst_28692,inst_28933,inst_28855,inst_28623,inst_28861,inst_28856,inst_28860,inst_28693,inst_28956,inst_28966,inst_28967,inst_28968,inst_28969,inst_28970,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28972 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28970,inst_28971);var inst_28973 = cljs.core.next.call(null,inst_28956);var inst_28937 = inst_28973;var inst_28938__$1 = null;var inst_28939__$1 = 0;var inst_28940__$1 = 0;var state_29015__$1 = (function (){var statearr_29087 = state_29015;(statearr_29087[57] = inst_28940__$1);
(statearr_29087[59] = inst_28938__$1);
(statearr_29087[61] = inst_28939__$1);
(statearr_29087[65] = inst_28972);
(statearr_29087[66] = inst_28937);
return statearr_29087;
})();var statearr_29088_29324 = state_29015__$1;(statearr_29088_29324[2] = null);
(statearr_29088_29324[1] = 81);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 36))
{var inst_28768 = (state_29015[44]);var inst_28770 = cljs.core.chunked_seq_QMARK_.call(null,inst_28768);var state_29015__$1 = state_29015;if(inst_28770)
{var statearr_29089_29325 = state_29015__$1;(statearr_29089_29325[1] = 39);
} else
{var statearr_29090_29326 = state_29015__$1;(statearr_29090_29326[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 41))
{var inst_28833 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29091_29327 = state_29015__$1;(statearr_29091_29327[2] = inst_28833);
(statearr_29091_29327[1] = 38);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 89))
{var inst_28956 = (state_29015[13]);var inst_28960 = cljs.core.chunk_first.call(null,inst_28956);var inst_28961 = cljs.core.chunk_rest.call(null,inst_28956);var inst_28962 = cljs.core.count.call(null,inst_28960);var inst_28937 = inst_28961;var inst_28938 = inst_28960;var inst_28939 = inst_28962;var inst_28940 = 0;var state_29015__$1 = (function (){var statearr_29092 = state_29015;(statearr_29092[57] = inst_28940);
(statearr_29092[59] = inst_28938);
(statearr_29092[61] = inst_28939);
(statearr_29092[66] = inst_28937);
return statearr_29092;
})();var statearr_29093_29328 = state_29015__$1;(statearr_29093_29328[2] = null);
(statearr_29093_29328[1] = 81);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 43))
{var inst_28768 = (state_29015[44]);var inst_28829 = (state_29015[2]);var inst_28830 = cljs.core.next.call(null,inst_28768);var inst_28704 = inst_28830;var inst_28705 = null;var inst_28706 = 0;var inst_28707 = 0;var state_29015__$1 = (function (){var statearr_29094 = state_29015;(statearr_29094[14] = inst_28707);
(statearr_29094[29] = inst_28704);
(statearr_29094[15] = inst_28706);
(statearr_29094[39] = inst_28705);
(statearr_29094[67] = inst_28829);
return statearr_29094;
})();var statearr_29095_29329 = state_29015__$1;(statearr_29095_29329[2] = null);
(statearr_29095_29329[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 61))
{var inst_28867 = (state_29015[68]);var inst_28869 = (state_29015[69]);var inst_28859 = (state_29015[7]);var inst_28861 = (state_29015[9]);var inst_28867__$1 = cljs.core._nth.call(null,inst_28859,inst_28861);var inst_28868 = cljs.core.nth.call(null,inst_28867__$1,0,null);var inst_28869__$1 = cljs.core.nth.call(null,inst_28867__$1,1,null);var inst_28870 = new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(inst_28869__$1);var inst_28871 = cljs.core.seq.call(null,inst_28870);var inst_28872 = inst_28871;var inst_28873 = null;var inst_28874 = 0;var inst_28875 = 0;var state_29015__$1 = (function (){var statearr_29099 = state_29015;(statearr_29099[68] = inst_28867__$1);
(statearr_29099[17] = inst_28872);
(statearr_29099[69] = inst_28869__$1);
(statearr_29099[18] = inst_28873);
(statearr_29099[19] = inst_28874);
(statearr_29099[20] = inst_28875);
(statearr_29099[70] = inst_28868);
return statearr_29099;
})();var statearr_29100_29330 = state_29015__$1;(statearr_29100_29330[2] = null);
(statearr_29100_29330[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 29))
{var inst_28762 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29101_29331 = state_29015__$1;(statearr_29101_29331[2] = inst_28762);
(statearr_29101_29331[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 44))
{var inst_28707 = (state_29015[14]);var inst_28631 = (state_29015[27]);var inst_28784 = (state_29015[47]);var inst_28702 = (state_29015[30]);var inst_28780 = (state_29015[52]);var inst_28786 = (state_29015[48]);var inst_28768 = (state_29015[44]);var inst_28706 = (state_29015[15]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28783 = (state_29015[49]);var inst_28691 = (state_29015[24]);var inst_28700 = (state_29015[35]);var inst_28779 = (state_29015[54]);var inst_28621 = (state_29015[38]);var inst_28705 = (state_29015[39]);var inst_28701 = (state_29015[40]);var inst_28785 = (state_29015[50]);var inst_28692 = (state_29015[25]);var inst_28778 = (state_29015[53]);var inst_28623 = (state_29015[42]);var inst_28693 = (state_29015[26]);var inst_28792 = cljs.core._nth.call(null,inst_28784,inst_28786);var inst_28793 = cljs.core.nth.call(null,inst_28792,0,null);var inst_28794 = cljs.core.nth.call(null,inst_28792,1,null);var inst_28795 = [inst_28701,inst_28779,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28796 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28795,null));var inst_28797 = (function (){var i__28682 = inst_28786;var repo = inst_28780;var map__28625 = inst_28631;var i__28677 = inst_28694;var vec__28791 = inst_28792;var chunk__28683 = inst_28705;var temp__4126__auto__ = inst_28768;var heads = inst_28794;var mp = inst_28631;var vec__28777 = inst_28778;var i__28685 = inst_28707;var u = inst_28701;var chunk__28675 = inst_28692;var seq__28662 = inst_28691;var count__28684 = inst_28706;var count__28676 = inst_28693;var metas = inst_28632;var seq__28678 = inst_28768;var count__28681 = inst_28785;var G__28612 = inst_28623;var repos = inst_28702;var chunk__28680 = inst_28784;var map__28613 = inst_28621;var id = inst_28779;var seq__28679 = inst_28783;var b = inst_28793;var vec__28699 = inst_28700;return ((function (i__28682,repo,map__28625,i__28677,vec__28791,chunk__28683,temp__4126__auto__,heads,mp,vec__28777,i__28685,u,chunk__28675,seq__28662,count__28684,count__28676,metas,seq__28678,count__28681,G__28612,repos,chunk__28680,map__28613,id,seq__28679,b,vec__28699,inst_28707,inst_28631,inst_28784,inst_28702,inst_28780,inst_28786,inst_28768,inst_28706,inst_28632,inst_28694,inst_28783,inst_28691,inst_28700,inst_28779,inst_28621,inst_28705,inst_28701,inst_28785,inst_28692,inst_28778,inst_28623,inst_28693,inst_28792,inst_28793,inst_28794,inst_28795,inst_28796,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(i__28682,repo,map__28625,i__28677,vec__28791,chunk__28683,temp__4126__auto__,heads,mp,vec__28777,i__28685,u,chunk__28675,seq__28662,count__28684,count__28676,metas,seq__28678,count__28681,G__28612,repos,chunk__28680,map__28613,id,seq__28679,b,vec__28699,inst_28707,inst_28631,inst_28784,inst_28702,inst_28780,inst_28786,inst_28768,inst_28706,inst_28632,inst_28694,inst_28783,inst_28691,inst_28700,inst_28779,inst_28621,inst_28705,inst_28701,inst_28785,inst_28692,inst_28778,inst_28623,inst_28693,inst_28792,inst_28793,inst_28794,inst_28795,inst_28796,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28798 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28796,inst_28797);var inst_28799 = (inst_28786 + 1);var tmp29096 = inst_28784;var tmp29097 = inst_28783;var tmp29098 = inst_28785;var inst_28783__$1 = tmp29097;var inst_28784__$1 = tmp29096;var inst_28785__$1 = tmp29098;var inst_28786__$1 = inst_28799;var state_29015__$1 = (function (){var statearr_29102 = state_29015;(statearr_29102[47] = inst_28784__$1);
(statearr_29102[48] = inst_28786__$1);
(statearr_29102[49] = inst_28783__$1);
(statearr_29102[50] = inst_28785__$1);
(statearr_29102[71] = inst_28798);
return statearr_29102;
})();var statearr_29103_29332 = state_29015__$1;(statearr_29103_29332[2] = null);
(statearr_29103_29332[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 6))
{var inst_28623 = (state_29015[42]);var inst_28626 = cljs.core.seq_QMARK_.call(null,inst_28623);var state_29015__$1 = state_29015;if(inst_28626)
{var statearr_29104_29333 = state_29015__$1;(statearr_29104_29333[1] = 8);
} else
{var statearr_29105_29334 = state_29015__$1;(statearr_29105_29334[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 28))
{var inst_28718 = (state_29015[31]);var inst_28737 = (state_29015[55]);var inst_28737__$1 = cljs.core.seq.call(null,inst_28718);var state_29015__$1 = (function (){var statearr_29106 = state_29015;(statearr_29106[55] = inst_28737__$1);
return statearr_29106;
})();if(inst_28737__$1)
{var statearr_29107_29335 = state_29015__$1;(statearr_29107_29335[1] = 30);
} else
{var statearr_29108_29336 = state_29015__$1;(statearr_29108_29336[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 64))
{var inst_28874 = (state_29015[19]);var inst_28875 = (state_29015[20]);var inst_28877 = (inst_28875 < inst_28874);var inst_28878 = inst_28877;var state_29015__$1 = state_29015;if(cljs.core.truth_(inst_28878))
{var statearr_29109_29337 = state_29015__$1;(statearr_29109_29337[1] = 66);
} else
{var statearr_29110_29338 = state_29015__$1;(statearr_29110_29338[1] = 67);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 51))
{var inst_28707 = (state_29015[14]);var inst_28631 = (state_29015[27]);var inst_28784 = (state_29015[47]);var inst_28702 = (state_29015[30]);var inst_28780 = (state_29015[52]);var inst_28786 = (state_29015[48]);var inst_28768 = (state_29015[44]);var inst_28706 = (state_29015[15]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28691 = (state_29015[24]);var inst_28700 = (state_29015[35]);var inst_28779 = (state_29015[54]);var inst_28621 = (state_29015[38]);var inst_28802 = (state_29015[46]);var inst_28705 = (state_29015[39]);var inst_28701 = (state_29015[40]);var inst_28785 = (state_29015[50]);var inst_28692 = (state_29015[25]);var inst_28778 = (state_29015[53]);var inst_28623 = (state_29015[42]);var inst_28693 = (state_29015[26]);var inst_28812 = cljs.core.first.call(null,inst_28802);var inst_28813 = cljs.core.nth.call(null,inst_28812,0,null);var inst_28814 = cljs.core.nth.call(null,inst_28812,1,null);var inst_28815 = [inst_28701,inst_28779,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28816 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28815,null));var inst_28817 = (function (){var i__28682 = inst_28786;var repo = inst_28780;var map__28625 = inst_28631;var i__28677 = inst_28694;var chunk__28683 = inst_28705;var temp__4126__auto__ = inst_28802;var heads = inst_28814;var mp = inst_28631;var vec__28777 = inst_28778;var i__28685 = inst_28707;var u = inst_28701;var chunk__28675 = inst_28692;var seq__28662 = inst_28691;var count__28684 = inst_28706;var count__28676 = inst_28693;var vec__28811 = inst_28812;var metas = inst_28632;var seq__28678 = inst_28768;var count__28681 = inst_28785;var G__28612 = inst_28623;var repos = inst_28702;var chunk__28680 = inst_28784;var map__28613 = inst_28621;var id = inst_28779;var seq__28679 = inst_28802;var b = inst_28813;var vec__28699 = inst_28700;return ((function (i__28682,repo,map__28625,i__28677,chunk__28683,temp__4126__auto__,heads,mp,vec__28777,i__28685,u,chunk__28675,seq__28662,count__28684,count__28676,vec__28811,metas,seq__28678,count__28681,G__28612,repos,chunk__28680,map__28613,id,seq__28679,b,vec__28699,inst_28707,inst_28631,inst_28784,inst_28702,inst_28780,inst_28786,inst_28768,inst_28706,inst_28632,inst_28694,inst_28691,inst_28700,inst_28779,inst_28621,inst_28802,inst_28705,inst_28701,inst_28785,inst_28692,inst_28778,inst_28623,inst_28693,inst_28812,inst_28813,inst_28814,inst_28815,inst_28816,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(i__28682,repo,map__28625,i__28677,chunk__28683,temp__4126__auto__,heads,mp,vec__28777,i__28685,u,chunk__28675,seq__28662,count__28684,count__28676,vec__28811,metas,seq__28678,count__28681,G__28612,repos,chunk__28680,map__28613,id,seq__28679,b,vec__28699,inst_28707,inst_28631,inst_28784,inst_28702,inst_28780,inst_28786,inst_28768,inst_28706,inst_28632,inst_28694,inst_28691,inst_28700,inst_28779,inst_28621,inst_28802,inst_28705,inst_28701,inst_28785,inst_28692,inst_28778,inst_28623,inst_28693,inst_28812,inst_28813,inst_28814,inst_28815,inst_28816,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28818 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28816,inst_28817);var inst_28819 = cljs.core.next.call(null,inst_28802);var inst_28783 = inst_28819;var inst_28784__$1 = null;var inst_28785__$1 = 0;var inst_28786__$1 = 0;var state_29015__$1 = (function (){var statearr_29111 = state_29015;(statearr_29111[72] = inst_28818);
(statearr_29111[47] = inst_28784__$1);
(statearr_29111[48] = inst_28786__$1);
(statearr_29111[49] = inst_28783);
(statearr_29111[50] = inst_28785__$1);
return statearr_29111;
})();var statearr_29112_29339 = state_29015__$1;(statearr_29112_29339[2] = null);
(statearr_29112_29339[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 25))
{var inst_28721 = (state_29015[28]);var inst_28720 = (state_29015[34]);var inst_28723 = (inst_28721 < inst_28720);var inst_28724 = inst_28723;var state_29015__$1 = state_29015;if(cljs.core.truth_(inst_28724))
{var statearr_29113_29340 = state_29015__$1;(statearr_29113_29340[1] = 27);
} else
{var statearr_29114_29341 = state_29015__$1;(statearr_29114_29341[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 34))
{var inst_28707 = (state_29015[14]);var inst_28631 = (state_29015[27]);var inst_28721 = (state_29015[28]);var inst_28704 = (state_29015[29]);var inst_28702 = (state_29015[30]);var inst_28706 = (state_29015[15]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28691 = (state_29015[24]);var inst_28715 = (state_29015[33]);var inst_28720 = (state_29015[34]);var inst_28700 = (state_29015[35]);var inst_28713 = (state_29015[36]);var inst_28714 = (state_29015[37]);var inst_28621 = (state_29015[38]);var inst_28705 = (state_29015[39]);var inst_28701 = (state_29015[40]);var inst_28719 = (state_29015[41]);var inst_28692 = (state_29015[25]);var inst_28737 = (state_29015[55]);var inst_28623 = (state_29015[42]);var inst_28693 = (state_29015[26]);var inst_28747 = cljs.core.first.call(null,inst_28737);var inst_28748 = cljs.core.nth.call(null,inst_28747,0,null);var inst_28749 = cljs.core.nth.call(null,inst_28747,1,null);var inst_28750 = [inst_28701,inst_28714,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28751 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28750,null));var inst_28752 = (function (){var repo = inst_28715;var map__28625 = inst_28631;var count__28688 = inst_28720;var i__28677 = inst_28694;var chunk__28683 = inst_28705;var temp__4126__auto__ = inst_28737;var heads = inst_28749;var mp = inst_28631;var vec__28712 = inst_28713;var i__28685 = inst_28707;var u = inst_28701;var chunk__28675 = inst_28692;var seq__28662 = inst_28691;var count__28684 = inst_28706;var chunk__28687 = inst_28719;var count__28676 = inst_28693;var vec__28746 = inst_28747;var metas = inst_28632;var seq__28686 = inst_28737;var seq__28678 = inst_28704;var G__28612 = inst_28623;var repos = inst_28702;var map__28613 = inst_28621;var id = inst_28714;var b = inst_28748;var i__28689 = inst_28721;var vec__28699 = inst_28700;return ((function (repo,map__28625,count__28688,i__28677,chunk__28683,temp__4126__auto__,heads,mp,vec__28712,i__28685,u,chunk__28675,seq__28662,count__28684,chunk__28687,count__28676,vec__28746,metas,seq__28686,seq__28678,G__28612,repos,map__28613,id,b,i__28689,vec__28699,inst_28707,inst_28631,inst_28721,inst_28704,inst_28702,inst_28706,inst_28632,inst_28694,inst_28691,inst_28715,inst_28720,inst_28700,inst_28713,inst_28714,inst_28621,inst_28705,inst_28701,inst_28719,inst_28692,inst_28737,inst_28623,inst_28693,inst_28747,inst_28748,inst_28749,inst_28750,inst_28751,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(repo,map__28625,count__28688,i__28677,chunk__28683,temp__4126__auto__,heads,mp,vec__28712,i__28685,u,chunk__28675,seq__28662,count__28684,chunk__28687,count__28676,vec__28746,metas,seq__28686,seq__28678,G__28612,repos,map__28613,id,b,i__28689,vec__28699,inst_28707,inst_28631,inst_28721,inst_28704,inst_28702,inst_28706,inst_28632,inst_28694,inst_28691,inst_28715,inst_28720,inst_28700,inst_28713,inst_28714,inst_28621,inst_28705,inst_28701,inst_28719,inst_28692,inst_28737,inst_28623,inst_28693,inst_28747,inst_28748,inst_28749,inst_28750,inst_28751,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28753 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28751,inst_28752);var inst_28754 = cljs.core.next.call(null,inst_28737);var inst_28718 = inst_28754;var inst_28719__$1 = null;var inst_28720__$1 = 0;var inst_28721__$1 = 0;var state_29015__$1 = (function (){var statearr_29115 = state_29015;(statearr_29115[28] = inst_28721__$1);
(statearr_29115[31] = inst_28718);
(statearr_29115[34] = inst_28720__$1);
(statearr_29115[41] = inst_28719__$1);
(statearr_29115[73] = inst_28753);
return statearr_29115;
})();var statearr_29116_29342 = state_29015__$1;(statearr_29116_29342[2] = null);
(statearr_29116_29342[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 17))
{var inst_28702 = (state_29015[30]);var inst_28694 = (state_29015[23]);var inst_28700 = (state_29015[35]);var inst_28692 = (state_29015[25]);var inst_28700__$1 = cljs.core._nth.call(null,inst_28692,inst_28694);var inst_28701 = cljs.core.nth.call(null,inst_28700__$1,0,null);var inst_28702__$1 = cljs.core.nth.call(null,inst_28700__$1,1,null);var inst_28703 = cljs.core.seq.call(null,inst_28702__$1);var inst_28704 = inst_28703;var inst_28705 = null;var inst_28706 = 0;var inst_28707 = 0;var state_29015__$1 = (function (){var statearr_29117 = state_29015;(statearr_29117[14] = inst_28707);
(statearr_29117[29] = inst_28704);
(statearr_29117[30] = inst_28702__$1);
(statearr_29117[15] = inst_28706);
(statearr_29117[35] = inst_28700__$1);
(statearr_29117[39] = inst_28705);
(statearr_29117[40] = inst_28701);
return statearr_29117;
})();var statearr_29118_29343 = state_29015__$1;(statearr_29118_29343[2] = null);
(statearr_29118_29343[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 3))
{var inst_28615 = (state_29015[45]);var inst_28618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28615);var state_29015__$1 = state_29015;var statearr_29119_29344 = state_29015__$1;(statearr_29119_29344[2] = inst_28618);
(statearr_29119_29344[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 12))
{var state_29015__$1 = state_29015;var statearr_29123_29345 = state_29015__$1;(statearr_29123_29345[2] = null);
(statearr_29123_29345[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 2))
{var inst_28615 = (state_29015[45]);var inst_28615__$1 = (state_29015[2]);var inst_28616 = cljs.core.seq_QMARK_.call(null,inst_28615__$1);var state_29015__$1 = (function (){var statearr_29124 = state_29015;(statearr_29124[45] = inst_28615__$1);
return statearr_29124;
})();if(inst_28616)
{var statearr_29125_29346 = state_29015__$1;(statearr_29125_29346[1] = 3);
} else
{var statearr_29126_29347 = state_29015__$1;(statearr_29126_29347[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 66))
{var inst_28844 = (state_29015[21]);var inst_28854 = (state_29015[56]);var inst_28867 = (state_29015[68]);var inst_28631 = (state_29015[27]);var inst_28872 = (state_29015[17]);var inst_28869 = (state_29015[69]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28873 = (state_29015[18]);var inst_28859 = (state_29015[7]);var inst_28874 = (state_29015[19]);var inst_28858 = (state_29015[8]);var inst_28621 = (state_29015[38]);var inst_28692 = (state_29015[25]);var inst_28855 = (state_29015[63]);var inst_28623 = (state_29015[42]);var inst_28861 = (state_29015[9]);var inst_28875 = (state_29015[20]);var inst_28856 = (state_29015[64]);var inst_28860 = (state_29015[10]);var inst_28693 = (state_29015[26]);var inst_28868 = (state_29015[70]);var inst_28881 = cljs.core._nth.call(null,inst_28873,inst_28875);var inst_28882 = cljs.core.nth.call(null,inst_28881,0,null);var inst_28883 = cljs.core.nth.call(null,inst_28881,1,null);var inst_28884 = [inst_28855,inst_28868,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28885 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28884,null));var inst_28886 = (function (){var repo = inst_28869;var map__28625 = inst_28631;var i__28677 = inst_28694;var temp__4126__auto__ = inst_28844;var heads = inst_28883;var mp = inst_28631;var u = inst_28855;var vec__28853 = inst_28854;var chunk__28672 = inst_28873;var chunk__28675 = inst_28692;var seq__28662 = inst_28844;var i__28674 = inst_28875;var count__28676 = inst_28693;var chunk__28668 = inst_28859;var seq__28663 = inst_28858;var metas = inst_28632;var i__28670 = inst_28861;var count__28673 = inst_28874;var vec__28880 = inst_28881;var G__28612 = inst_28623;var repos = inst_28856;var count__28669 = inst_28860;var map__28613 = inst_28621;var vec__28866 = inst_28867;var id = inst_28868;var b = inst_28882;var seq__28671 = inst_28872;return ((function (repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28672,chunk__28675,seq__28662,i__28674,count__28676,chunk__28668,seq__28663,metas,i__28670,count__28673,vec__28880,G__28612,repos,count__28669,map__28613,vec__28866,id,b,seq__28671,inst_28844,inst_28854,inst_28867,inst_28631,inst_28872,inst_28869,inst_28632,inst_28694,inst_28873,inst_28859,inst_28874,inst_28858,inst_28621,inst_28692,inst_28855,inst_28623,inst_28861,inst_28875,inst_28856,inst_28860,inst_28693,inst_28868,inst_28881,inst_28882,inst_28883,inst_28884,inst_28885,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28672,chunk__28675,seq__28662,i__28674,count__28676,chunk__28668,seq__28663,metas,i__28670,count__28673,vec__28880,G__28612,repos,count__28669,map__28613,vec__28866,id,b,seq__28671,inst_28844,inst_28854,inst_28867,inst_28631,inst_28872,inst_28869,inst_28632,inst_28694,inst_28873,inst_28859,inst_28874,inst_28858,inst_28621,inst_28692,inst_28855,inst_28623,inst_28861,inst_28875,inst_28856,inst_28860,inst_28693,inst_28868,inst_28881,inst_28882,inst_28883,inst_28884,inst_28885,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28887 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28885,inst_28886);var inst_28888 = (inst_28875 + 1);var tmp29120 = inst_28872;var tmp29121 = inst_28873;var tmp29122 = inst_28874;var inst_28872__$1 = tmp29120;var inst_28873__$1 = tmp29121;var inst_28874__$1 = tmp29122;var inst_28875__$1 = inst_28888;var state_29015__$1 = (function (){var statearr_29127 = state_29015;(statearr_29127[17] = inst_28872__$1);
(statearr_29127[18] = inst_28873__$1);
(statearr_29127[19] = inst_28874__$1);
(statearr_29127[74] = inst_28887);
(statearr_29127[20] = inst_28875__$1);
return statearr_29127;
})();var statearr_29128_29348 = state_29015__$1;(statearr_29128_29348[2] = null);
(statearr_29128_29348[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 23))
{var inst_28704 = (state_29015[29]);var inst_28768 = (state_29015[44]);var inst_28768__$1 = cljs.core.seq.call(null,inst_28704);var state_29015__$1 = (function (){var statearr_29129 = state_29015;(statearr_29129[44] = inst_28768__$1);
return statearr_29129;
})();if(inst_28768__$1)
{var statearr_29130_29349 = state_29015__$1;(statearr_29130_29349[1] = 36);
} else
{var statearr_29131_29350 = state_29015__$1;(statearr_29131_29350[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 47))
{var inst_28802 = (state_29015[46]);var inst_28804 = cljs.core.chunked_seq_QMARK_.call(null,inst_28802);var state_29015__$1 = state_29015;if(inst_28804)
{var statearr_29132_29351 = state_29015__$1;(statearr_29132_29351[1] = 50);
} else
{var statearr_29133_29352 = state_29015__$1;(statearr_29133_29352[1] = 51);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 35))
{var inst_28757 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29134_29353 = state_29015__$1;(statearr_29134_29353[2] = inst_28757);
(statearr_29134_29353[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 82))
{var inst_28922 = (state_29015[12]);var inst_28983 = (state_29015[2]);var inst_28984 = cljs.core.next.call(null,inst_28922);var inst_28858 = inst_28984;var inst_28859 = null;var inst_28860 = 0;var inst_28861 = 0;var state_29015__$1 = (function (){var statearr_29135 = state_29015;(statearr_29135[75] = inst_28983);
(statearr_29135[7] = inst_28859);
(statearr_29135[8] = inst_28858);
(statearr_29135[9] = inst_28861);
(statearr_29135[10] = inst_28860);
return statearr_29135;
})();var statearr_29136_29354 = state_29015__$1;(statearr_29136_29354[2] = null);
(statearr_29136_29354[1] = 59);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 76))
{var state_29015__$1 = state_29015;var statearr_29137_29355 = state_29015__$1;(statearr_29137_29355[2] = null);
(statearr_29137_29355[1] = 77);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 19))
{var inst_29003 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29138_29356 = state_29015__$1;(statearr_29138_29356[2] = inst_29003);
(statearr_29138_29356[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 57))
{var inst_28844 = (state_29015[21]);var inst_28854 = (state_29015[56]);var inst_28856 = (state_29015[64]);var inst_28854__$1 = cljs.core.first.call(null,inst_28844);var inst_28855 = cljs.core.nth.call(null,inst_28854__$1,0,null);var inst_28856__$1 = cljs.core.nth.call(null,inst_28854__$1,1,null);var inst_28857 = cljs.core.seq.call(null,inst_28856__$1);var inst_28858 = inst_28857;var inst_28859 = null;var inst_28860 = 0;var inst_28861 = 0;var state_29015__$1 = (function (){var statearr_29139 = state_29015;(statearr_29139[56] = inst_28854__$1);
(statearr_29139[7] = inst_28859);
(statearr_29139[8] = inst_28858);
(statearr_29139[63] = inst_28855);
(statearr_29139[9] = inst_28861);
(statearr_29139[64] = inst_28856__$1);
(statearr_29139[10] = inst_28860);
return statearr_29139;
})();var statearr_29140_29357 = state_29015__$1;(statearr_29140_29357[2] = null);
(statearr_29140_29357[1] = 59);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 68))
{var inst_28916 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29141_29358 = state_29015__$1;(statearr_29141_29358[2] = inst_28916);
(statearr_29141_29358[1] = 65);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 11))
{var inst_28631 = (state_29015[27]);var inst_28632 = (state_29015[32]);var inst_28621 = (state_29015[38]);var inst_28623 = (state_29015[42]);var inst_28634 = geschichte.platform_log.debug.call(null,"pubing metas:",inst_28632);var inst_28635 = (function (){var map__28625 = inst_28631;var metas = inst_28632;var mp = inst_28631;var map__28613 = inst_28621;var G__28612 = inst_28623;return ((function (map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27862_SHARP_,p2__27863_SHARP_){return cljs.core.assoc_in.call(null,p1__27862_SHARP_,cljs.core.butlast.call(null,p2__27863_SHARP_),cljs.core.last.call(null,p2__27863_SHARP_));
});
;})(map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28636 = cljs.core.deref.call(null,stage);var inst_28637 = [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"val","val",1014020755)];var inst_28638 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28637,null));var inst_28639 = cljs.core.get_in.call(null,inst_28636,inst_28638);var inst_28641 = (function (){var map__28625 = inst_28631;var metas = inst_28632;var mp = inst_28631;var map__28613 = inst_28621;var G__28612 = inst_28623;return ((function (map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p__28640){var vec__29142 = p__28640;var u = cljs.core.nth.call(null,vec__29142,0,null);var id = cljs.core.nth.call(null,vec__29142,1,null);var b = cljs.core.nth.call(null,vec__29142,2,null);var repo = cljs.core.nth.call(null,vec__29142,3,null);var c__8594__auto____$2 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto____$2,vec__29142,u,id,b,repo,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto____$2,vec__29142,u,id,b,repo,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (state_29166){var state_val_29167 = (state_29166[1]);if((state_val_29167 === 8))
{var inst_29146 = (state_29166[7]);var inst_29154 = (state_29166[2]);var inst_29155 = geschichte.meta.update.call(null,inst_29154,repo);var inst_29156 = [inst_29155];var inst_29157 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29146,inst_29156);var inst_29158 = geschichte.stage.realize_value.call(null,inst_29157,b,store,eval_fn);var state_29166__$1 = state_29166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29166__$1,5,inst_29158);
} else
{if((state_val_29167 === 7))
{var state_29166__$1 = state_29166;var statearr_29168_29359 = state_29166__$1;(statearr_29168_29359[2] = repo);
(statearr_29168_29359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29167 === 6))
{var inst_29150 = (state_29166[8]);var state_29166__$1 = state_29166;var statearr_29169_29360 = state_29166__$1;(statearr_29169_29360[2] = inst_29150);
(statearr_29169_29360[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29167 === 5))
{var inst_29160 = (state_29166[2]);var state_29166__$1 = state_29166;var statearr_29170_29361 = state_29166__$1;(statearr_29170_29361[2] = inst_29160);
(statearr_29170_29361[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29167 === 4))
{var inst_29162 = (state_29166[2]);var inst_29163 = [u,id,b,inst_29162];var inst_29164 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29163,null));var state_29166__$1 = state_29166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29166__$1,inst_29164);
} else
{if((state_val_29167 === 3))
{var inst_29150 = (state_29166[8]);var inst_29146 = [new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_29147 = cljs.core.deref.call(null,stage);var inst_29148 = [u,id,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_29149 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29148,null));var inst_29150__$1 = cljs.core.get_in.call(null,inst_29147,inst_29149);var state_29166__$1 = (function (){var statearr_29171 = state_29166;(statearr_29171[7] = inst_29146);
(statearr_29171[8] = inst_29150__$1);
return statearr_29171;
})();if(cljs.core.truth_(inst_29150__$1))
{var statearr_29172_29362 = state_29166__$1;(statearr_29172_29362[1] = 6);
} else
{var statearr_29173_29363 = state_29166__$1;(statearr_29173_29363[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29167 === 2))
{var state_29166__$1 = state_29166;var statearr_29174_29364 = state_29166__$1;(statearr_29174_29364[2] = new cljs.core.Keyword(null,"conflict","conflict",4728823620));
(statearr_29174_29364[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29167 === 1))
{var inst_29143 = geschichte.repo.multiple_branch_heads_QMARK_.call(null,repo,b);var state_29166__$1 = state_29166;if(inst_29143)
{var statearr_29175_29365 = state_29166__$1;(statearr_29175_29365[1] = 2);
} else
{var statearr_29176_29366 = state_29166__$1;(statearr_29176_29366[1] = 3);
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
});})(c__8594__auto____$2,vec__29142,u,id,b,repo,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto____$2,vec__29142,u,id,b,repo,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_29180 = [null,null,null,null,null,null,null,null,null];(statearr_29180[0] = state_machine__8530__auto__);
(statearr_29180[1] = 1);
return statearr_29180;
});
var state_machine__8530__auto____1 = (function (state_29166){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_29166);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e29181){if((e29181 instanceof Object))
{var ex__8533__auto__ = e29181;var statearr_29182_29367 = state_29166;(statearr_29182_29367[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29368 = state_29166;
state_29166 = G__29368;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_29166){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_29166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto____$2,vec__29142,u,id,b,repo,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_29183 = f__8595__auto__.call(null);(statearr_29183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$2);
return statearr_29183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto____$2,vec__29142,u,id,b,repo,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
);
return c__8594__auto____$2;
});
;})(map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28650 = (function (){var map__28625 = inst_28631;var metas = inst_28632;var mp = inst_28631;var map__28613 = inst_28621;var G__28612 = inst_28623;return ((function (map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function iter__28642(s__28643){return (new cljs.core.LazySeq(null,((function (map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (){var s__28643__$1 = s__28643;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28643__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__29195 = cljs.core.first.call(null,xs__4624__auto__);var u = cljs.core.nth.call(null,vec__29195,0,null);var repos = cljs.core.nth.call(null,vec__29195,1,null);var iterys__4260__auto__ = ((function (s__28643__$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function iter__28644(s__28645){return (new cljs.core.LazySeq(null,((function (s__28643__$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (){var s__28645__$1 = s__28645;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28645__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var vec__29201 = cljs.core.first.call(null,xs__4624__auto____$1);var id = cljs.core.nth.call(null,vec__29201,0,null);var repo = cljs.core.nth.call(null,vec__29201,1,null);var iterys__4260__auto__ = ((function (s__28645__$1,s__28643__$1,vec__29201,id,repo,xs__4624__auto____$1,temp__4126__auto____$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function iter__28646(s__28647){return (new cljs.core.LazySeq(null,((function (s__28645__$1,s__28643__$1,vec__29201,id,repo,xs__4624__auto____$1,temp__4126__auto____$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (){var s__28647__$1 = s__28647;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__28647__$1);if(temp__4126__auto____$2)
{var s__28647__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__28647__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__28647__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__28649 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__28648 = 0;while(true){
if((i__28648 < size__4263__auto__))
{var vec__29204 = cljs.core._nth.call(null,c__4262__auto__,i__28648);var b = cljs.core.nth.call(null,vec__29204,0,null);var heads = cljs.core.nth.call(null,vec__29204,1,null);cljs.core.chunk_append.call(null,b__28649,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id,b,repo], null));
{
var G__29369 = (i__28648 + 1);
i__28648 = G__29369;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28649),iter__28646.call(null,cljs.core.chunk_rest.call(null,s__28647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28649),null);
}
} else
{var vec__29205 = cljs.core.first.call(null,s__28647__$2);var b = cljs.core.nth.call(null,vec__29205,0,null);var heads = cljs.core.nth.call(null,vec__29205,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id,b,repo], null),iter__28646.call(null,cljs.core.rest.call(null,s__28647__$2)));
}
} else
{return null;
}
break;
}
});})(s__28645__$1,s__28643__$1,vec__29201,id,repo,xs__4624__auto____$1,temp__4126__auto____$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
,null,null));
});})(s__28645__$1,s__28643__$1,vec__29201,id,repo,xs__4624__auto____$1,temp__4126__auto____$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(repo)));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__28644.call(null,cljs.core.rest.call(null,s__28645__$1)));
} else
{{
var G__29370 = cljs.core.rest.call(null,s__28645__$1);
s__28645__$1 = G__29370;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__28643__$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
,null,null));
});})(s__28643__$1,vec__29195,u,repos,xs__4624__auto__,temp__4126__auto__,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repos));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__28642.call(null,cljs.core.rest.call(null,s__28643__$1)));
} else
{{
var G__29371 = cljs.core.rest.call(null,s__28643__$1);
s__28643__$1 = G__29371;
continue;
}
}
} else
{return null;
}
break;
}
});})(map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
,null,null));
});
;})(map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28621,inst_28623,inst_28634,inst_28635,inst_28636,inst_28637,inst_28638,inst_28639,inst_28641,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28651 = inst_28650.call(null,inst_28632);var inst_28652 = cljs.core.map.call(null,inst_28641,inst_28651);var inst_28653 = cljs.core.async.merge.call(null,inst_28652);var inst_28654 = cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,inst_28653);var state_29015__$1 = (function (){var statearr_29206 = state_29015;(statearr_29206[76] = inst_28635);
(statearr_29206[77] = inst_28634);
(statearr_29206[78] = inst_28639);
return statearr_29206;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29015__$1,14,inst_28654);
} else
{if((state_val_29016 === 9))
{var inst_28623 = (state_29015[42]);var state_29015__$1 = state_29015;var statearr_29210_29372 = state_29015__$1;(statearr_29210_29372[2] = inst_28623);
(statearr_29210_29372[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 5))
{var inst_28621 = (state_29015[38]);var inst_28615 = (state_29015[45]);var inst_28621__$1 = (state_29015[2]);var inst_28622 = cljs.core.get.call(null,inst_28621__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var inst_28623 = inst_28615;var state_29015__$1 = (function (){var statearr_29211 = state_29015;(statearr_29211[38] = inst_28621__$1);
(statearr_29211[42] = inst_28623);
(statearr_29211[79] = inst_28622);
return statearr_29211;
})();var statearr_29212_29373 = state_29015__$1;(statearr_29212_29373[2] = null);
(statearr_29212_29373[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 83))
{var inst_28844 = (state_29015[21]);var inst_28854 = (state_29015[56]);var inst_28631 = (state_29015[27]);var inst_28940 = (state_29015[57]);var inst_28934 = (state_29015[58]);var inst_28938 = (state_29015[59]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28859 = (state_29015[7]);var inst_28932 = (state_29015[60]);var inst_28939 = (state_29015[61]);var inst_28621 = (state_29015[38]);var inst_28922 = (state_29015[12]);var inst_28692 = (state_29015[25]);var inst_28933 = (state_29015[62]);var inst_28855 = (state_29015[63]);var inst_28623 = (state_29015[42]);var inst_28937 = (state_29015[66]);var inst_28861 = (state_29015[9]);var inst_28856 = (state_29015[64]);var inst_28860 = (state_29015[10]);var inst_28693 = (state_29015[26]);var inst_28946 = cljs.core._nth.call(null,inst_28938,inst_28940);var inst_28947 = cljs.core.nth.call(null,inst_28946,0,null);var inst_28948 = cljs.core.nth.call(null,inst_28946,1,null);var inst_28949 = [inst_28855,inst_28933,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28950 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28949,null));var inst_28951 = (function (){var repo = inst_28934;var map__28625 = inst_28631;var i__28677 = inst_28694;var temp__4126__auto__ = inst_28922;var heads = inst_28948;var mp = inst_28631;var u = inst_28855;var vec__28853 = inst_28854;var chunk__28675 = inst_28692;var seq__28662 = inst_28844;var vec__28931 = inst_28932;var count__28676 = inst_28693;var chunk__28668 = inst_28859;var seq__28663 = inst_28922;var metas = inst_28632;var i__28667 = inst_28940;var i__28670 = inst_28861;var chunk__28665 = inst_28938;var G__28612 = inst_28623;var repos = inst_28856;var seq__28664 = inst_28937;var count__28666 = inst_28939;var count__28669 = inst_28860;var map__28613 = inst_28621;var id = inst_28933;var vec__28945 = inst_28946;var b = inst_28947;return ((function (repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28675,seq__28662,vec__28931,count__28676,chunk__28668,seq__28663,metas,i__28667,i__28670,chunk__28665,G__28612,repos,seq__28664,count__28666,count__28669,map__28613,id,vec__28945,b,inst_28844,inst_28854,inst_28631,inst_28940,inst_28934,inst_28938,inst_28632,inst_28694,inst_28859,inst_28932,inst_28939,inst_28621,inst_28922,inst_28692,inst_28933,inst_28855,inst_28623,inst_28937,inst_28861,inst_28856,inst_28860,inst_28693,inst_28946,inst_28947,inst_28948,inst_28949,inst_28950,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28675,seq__28662,vec__28931,count__28676,chunk__28668,seq__28663,metas,i__28667,i__28670,chunk__28665,G__28612,repos,seq__28664,count__28666,count__28669,map__28613,id,vec__28945,b,inst_28844,inst_28854,inst_28631,inst_28940,inst_28934,inst_28938,inst_28632,inst_28694,inst_28859,inst_28932,inst_28939,inst_28621,inst_28922,inst_28692,inst_28933,inst_28855,inst_28623,inst_28937,inst_28861,inst_28856,inst_28860,inst_28693,inst_28946,inst_28947,inst_28948,inst_28949,inst_28950,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28952 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28950,inst_28951);var inst_28953 = (inst_28940 + 1);var tmp29207 = inst_28938;var tmp29208 = inst_28939;var tmp29209 = inst_28937;var inst_28937__$1 = tmp29209;var inst_28938__$1 = tmp29207;var inst_28939__$1 = tmp29208;var inst_28940__$1 = inst_28953;var state_29015__$1 = (function (){var statearr_29213 = state_29015;(statearr_29213[57] = inst_28940__$1);
(statearr_29213[59] = inst_28938__$1);
(statearr_29213[61] = inst_28939__$1);
(statearr_29213[80] = inst_28952);
(statearr_29213[66] = inst_28937__$1);
return statearr_29213;
})();var statearr_29214_29374 = state_29015__$1;(statearr_29214_29374[2] = null);
(statearr_29214_29374[1] = 81);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 14))
{var inst_28631 = (state_29015[27]);var inst_28632 = (state_29015[32]);var inst_28635 = (state_29015[76]);var inst_28621 = (state_29015[38]);var inst_28639 = (state_29015[78]);var inst_28623 = (state_29015[42]);var inst_28656 = (state_29015[2]);var inst_28657 = cljs.core.reduce.call(null,inst_28635,inst_28639,inst_28656);var inst_28658 = geschichte.platform_log.info.call(null,"new stage value:",inst_28657);var inst_28659 = (function (){var val = inst_28657;var map__28625 = inst_28631;var metas = inst_28632;var mp = inst_28631;var map__28613 = inst_28621;var G__28612 = inst_28623;return ((function (val,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28635,inst_28621,inst_28639,inst_28623,inst_28656,inst_28657,inst_28658,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27864_SHARP_){return cljs.core.assoc_in.call(null,p1__27864_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"val","val",1014020755)], null),val);
});
;})(val,map__28625,metas,mp,map__28613,G__28612,inst_28631,inst_28632,inst_28635,inst_28621,inst_28639,inst_28623,inst_28656,inst_28657,inst_28658,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28660 = cljs.core.swap_BANG_.call(null,stage,inst_28659);var inst_28661 = cljs.core.async.put_BANG_.call(null,val_ch,inst_28657);var inst_28690 = cljs.core.seq.call(null,inst_28632);var inst_28691 = inst_28690;var inst_28692 = null;var inst_28693 = 0;var inst_28694 = 0;var state_29015__$1 = (function (){var statearr_29215 = state_29015;(statearr_29215[23] = inst_28694);
(statearr_29215[24] = inst_28691);
(statearr_29215[25] = inst_28692);
(statearr_29215[81] = inst_28661);
(statearr_29215[82] = inst_28658);
(statearr_29215[26] = inst_28693);
(statearr_29215[83] = inst_28660);
return statearr_29215;
})();var statearr_29216_29375 = state_29015__$1;(statearr_29216_29375[2] = null);
(statearr_29216_29375[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 45))
{var inst_28783 = (state_29015[49]);var inst_28802 = (state_29015[46]);var inst_28802__$1 = cljs.core.seq.call(null,inst_28783);var state_29015__$1 = (function (){var statearr_29217 = state_29015;(statearr_29217[46] = inst_28802__$1);
return statearr_29217;
})();if(inst_28802__$1)
{var statearr_29218_29376 = state_29015__$1;(statearr_29218_29376[1] = 47);
} else
{var statearr_29219_29377 = state_29015__$1;(statearr_29219_29377[1] = 48);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 53))
{var inst_28844 = (state_29015[21]);var inst_28846 = cljs.core.chunked_seq_QMARK_.call(null,inst_28844);var state_29015__$1 = state_29015;if(inst_28846)
{var statearr_29223_29378 = state_29015__$1;(statearr_29223_29378[1] = 56);
} else
{var statearr_29224_29379 = state_29015__$1;(statearr_29224_29379[1] = 57);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 78))
{var inst_28922 = (state_29015[12]);var inst_28926 = cljs.core.chunk_first.call(null,inst_28922);var inst_28927 = cljs.core.chunk_rest.call(null,inst_28922);var inst_28928 = cljs.core.count.call(null,inst_28926);var inst_28858 = inst_28927;var inst_28859 = inst_28926;var inst_28860 = inst_28928;var inst_28861 = 0;var state_29015__$1 = (function (){var statearr_29225 = state_29015;(statearr_29225[7] = inst_28859);
(statearr_29225[8] = inst_28858);
(statearr_29225[9] = inst_28861);
(statearr_29225[10] = inst_28860);
return statearr_29225;
})();var statearr_29226_29380 = state_29015__$1;(statearr_29226_29380[2] = null);
(statearr_29226_29380[1] = 59);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 26))
{var inst_28707 = (state_29015[14]);var inst_28704 = (state_29015[29]);var inst_28706 = (state_29015[15]);var inst_28705 = (state_29015[39]);var inst_28764 = (state_29015[2]);var inst_28765 = (inst_28707 + 1);var tmp29220 = inst_28704;var tmp29221 = inst_28706;var tmp29222 = inst_28705;var inst_28704__$1 = tmp29220;var inst_28705__$1 = tmp29222;var inst_28706__$1 = tmp29221;var inst_28707__$1 = inst_28765;var state_29015__$1 = (function (){var statearr_29227 = state_29015;(statearr_29227[84] = inst_28764);
(statearr_29227[14] = inst_28707__$1);
(statearr_29227[29] = inst_28704__$1);
(statearr_29227[15] = inst_28706__$1);
(statearr_29227[39] = inst_28705__$1);
return statearr_29227;
})();var statearr_29228_29381 = state_29015__$1;(statearr_29228_29381[2] = null);
(statearr_29228_29381[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 16))
{var inst_29005 = (state_29015[2]);var state_29015__$1 = (function (){var statearr_29229 = state_29015;(statearr_29229[85] = inst_29005);
return statearr_29229;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29015__$1,92,pub_ch);
} else
{if((state_val_29016 === 81))
{var inst_28940 = (state_29015[57]);var inst_28939 = (state_29015[61]);var inst_28942 = (inst_28940 < inst_28939);var inst_28943 = inst_28942;var state_29015__$1 = state_29015;if(cljs.core.truth_(inst_28943))
{var statearr_29230_29382 = state_29015__$1;(statearr_29230_29382[1] = 83);
} else
{var statearr_29231_29383 = state_29015__$1;(statearr_29231_29383[1] = 84);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 79))
{var inst_28934 = (state_29015[58]);var inst_28932 = (state_29015[60]);var inst_28922 = (state_29015[12]);var inst_28932__$1 = cljs.core.first.call(null,inst_28922);var inst_28933 = cljs.core.nth.call(null,inst_28932__$1,0,null);var inst_28934__$1 = cljs.core.nth.call(null,inst_28932__$1,1,null);var inst_28935 = new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(inst_28934__$1);var inst_28936 = cljs.core.seq.call(null,inst_28935);var inst_28937 = inst_28936;var inst_28938 = null;var inst_28939 = 0;var inst_28940 = 0;var state_29015__$1 = (function (){var statearr_29232 = state_29015;(statearr_29232[57] = inst_28940);
(statearr_29232[58] = inst_28934__$1);
(statearr_29232[59] = inst_28938);
(statearr_29232[60] = inst_28932__$1);
(statearr_29232[61] = inst_28939);
(statearr_29232[62] = inst_28933);
(statearr_29232[66] = inst_28937);
return statearr_29232;
})();var statearr_29233_29384 = state_29015__$1;(statearr_29233_29384[2] = null);
(statearr_29233_29384[1] = 81);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 38))
{var inst_28836 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29234_29385 = state_29015__$1;(statearr_29234_29385[2] = inst_28836);
(statearr_29234_29385[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 87))
{var state_29015__$1 = state_29015;var statearr_29235_29386 = state_29015__$1;(statearr_29235_29386[2] = null);
(statearr_29235_29386[1] = 88);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 30))
{var inst_28737 = (state_29015[55]);var inst_28739 = cljs.core.chunked_seq_QMARK_.call(null,inst_28737);var state_29015__$1 = state_29015;if(inst_28739)
{var statearr_29236_29387 = state_29015__$1;(statearr_29236_29387[1] = 33);
} else
{var statearr_29237_29388 = state_29015__$1;(statearr_29237_29388[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 73))
{var inst_28844 = (state_29015[21]);var inst_28854 = (state_29015[56]);var inst_28867 = (state_29015[68]);var inst_28631 = (state_29015[27]);var inst_28869 = (state_29015[69]);var inst_28632 = (state_29015[32]);var inst_28694 = (state_29015[23]);var inst_28891 = (state_29015[16]);var inst_28873 = (state_29015[18]);var inst_28859 = (state_29015[7]);var inst_28874 = (state_29015[19]);var inst_28858 = (state_29015[8]);var inst_28621 = (state_29015[38]);var inst_28692 = (state_29015[25]);var inst_28855 = (state_29015[63]);var inst_28623 = (state_29015[42]);var inst_28861 = (state_29015[9]);var inst_28875 = (state_29015[20]);var inst_28856 = (state_29015[64]);var inst_28860 = (state_29015[10]);var inst_28693 = (state_29015[26]);var inst_28868 = (state_29015[70]);var inst_28901 = cljs.core.first.call(null,inst_28891);var inst_28902 = cljs.core.nth.call(null,inst_28901,0,null);var inst_28903 = cljs.core.nth.call(null,inst_28901,1,null);var inst_28904 = [inst_28855,inst_28868,new cljs.core.Keyword(null,"meta","meta",1017252215)];var inst_28905 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28904,null));var inst_28906 = (function (){var repo = inst_28869;var map__28625 = inst_28631;var i__28677 = inst_28694;var temp__4126__auto__ = inst_28891;var heads = inst_28903;var mp = inst_28631;var u = inst_28855;var vec__28853 = inst_28854;var chunk__28672 = inst_28873;var chunk__28675 = inst_28692;var seq__28662 = inst_28844;var i__28674 = inst_28875;var count__28676 = inst_28693;var chunk__28668 = inst_28859;var seq__28663 = inst_28858;var metas = inst_28632;var i__28670 = inst_28861;var count__28673 = inst_28874;var vec__28900 = inst_28901;var G__28612 = inst_28623;var repos = inst_28856;var count__28669 = inst_28860;var map__28613 = inst_28621;var vec__28866 = inst_28867;var id = inst_28868;var b = inst_28902;var seq__28671 = inst_28891;return ((function (repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28672,chunk__28675,seq__28662,i__28674,count__28676,chunk__28668,seq__28663,metas,i__28670,count__28673,vec__28900,G__28612,repos,count__28669,map__28613,vec__28866,id,b,seq__28671,inst_28844,inst_28854,inst_28867,inst_28631,inst_28869,inst_28632,inst_28694,inst_28891,inst_28873,inst_28859,inst_28874,inst_28858,inst_28621,inst_28692,inst_28855,inst_28623,inst_28861,inst_28875,inst_28856,inst_28860,inst_28693,inst_28868,inst_28901,inst_28902,inst_28903,inst_28904,inst_28905,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function (p1__27865_SHARP_){if(cljs.core.truth_(p1__27865_SHARP_))
{return geschichte.meta.update.call(null,p1__27865_SHARP_,repo);
} else
{return geschichte.meta.update.call(null,repo,repo);
}
});
;})(repo,map__28625,i__28677,temp__4126__auto__,heads,mp,u,vec__28853,chunk__28672,chunk__28675,seq__28662,i__28674,count__28676,chunk__28668,seq__28663,metas,i__28670,count__28673,vec__28900,G__28612,repos,count__28669,map__28613,vec__28866,id,b,seq__28671,inst_28844,inst_28854,inst_28867,inst_28631,inst_28869,inst_28632,inst_28694,inst_28891,inst_28873,inst_28859,inst_28874,inst_28858,inst_28621,inst_28692,inst_28855,inst_28623,inst_28861,inst_28875,inst_28856,inst_28860,inst_28693,inst_28868,inst_28901,inst_28902,inst_28903,inst_28904,inst_28905,state_val_29016,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_28907 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_28905,inst_28906);var inst_28908 = cljs.core.next.call(null,inst_28891);var inst_28872 = inst_28908;var inst_28873__$1 = null;var inst_28874__$1 = 0;var inst_28875__$1 = 0;var state_29015__$1 = (function (){var statearr_29238 = state_29015;(statearr_29238[17] = inst_28872);
(statearr_29238[18] = inst_28873__$1);
(statearr_29238[19] = inst_28874__$1);
(statearr_29238[86] = inst_28907);
(statearr_29238[20] = inst_28875__$1);
return statearr_29238;
})();var statearr_29239_29389 = state_29015__$1;(statearr_29239_29389[2] = null);
(statearr_29239_29389[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 10))
{var inst_28631 = (state_29015[27]);var inst_28631__$1 = (state_29015[2]);var inst_28632 = cljs.core.get.call(null,inst_28631__$1,new cljs.core.Keyword(null,"metas","metas",1117691520));var state_29015__$1 = (function (){var statearr_29240 = state_29015;(statearr_29240[27] = inst_28631__$1);
(statearr_29240[32] = inst_28632);
return statearr_29240;
})();if(cljs.core.truth_(inst_28631__$1))
{var statearr_29241_29390 = state_29015__$1;(statearr_29241_29390[1] = 11);
} else
{var statearr_29242_29391 = state_29015__$1;(statearr_29242_29391[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 18))
{var inst_28844 = (state_29015[21]);var inst_28691 = (state_29015[24]);var inst_28844__$1 = cljs.core.seq.call(null,inst_28691);var state_29015__$1 = (function (){var statearr_29243 = state_29015;(statearr_29243[21] = inst_28844__$1);
return statearr_29243;
})();if(inst_28844__$1)
{var statearr_29244_29392 = state_29015__$1;(statearr_29244_29392[1] = 53);
} else
{var statearr_29245_29393 = state_29015__$1;(statearr_29245_29393[1] = 54);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 52))
{var inst_28822 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29246_29394 = state_29015__$1;(statearr_29246_29394[2] = inst_28822);
(statearr_29246_29394[1] = 49);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 67))
{var inst_28872 = (state_29015[17]);var inst_28891 = (state_29015[16]);var inst_28891__$1 = cljs.core.seq.call(null,inst_28872);var state_29015__$1 = (function (){var statearr_29247 = state_29015;(statearr_29247[16] = inst_28891__$1);
return statearr_29247;
})();if(inst_28891__$1)
{var statearr_29248_29395 = state_29015__$1;(statearr_29248_29395[1] = 69);
} else
{var statearr_29249_29396 = state_29015__$1;(statearr_29249_29396[1] = 70);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 71))
{var inst_28914 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29250_29397 = state_29015__$1;(statearr_29250_29397[2] = inst_28914);
(statearr_29250_29397[1] = 68);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 42))
{var inst_28786 = (state_29015[48]);var inst_28785 = (state_29015[50]);var inst_28788 = (inst_28786 < inst_28785);var inst_28789 = inst_28788;var state_29015__$1 = state_29015;if(cljs.core.truth_(inst_28789))
{var statearr_29251_29398 = state_29015__$1;(statearr_29251_29398[1] = 44);
} else
{var statearr_29252_29399 = state_29015__$1;(statearr_29252_29399[1] = 45);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 80))
{var inst_28987 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29253_29400 = state_29015__$1;(statearr_29253_29400[2] = inst_28987);
(statearr_29253_29400[1] = 77);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 37))
{var state_29015__$1 = state_29015;var statearr_29254_29401 = state_29015__$1;(statearr_29254_29401[2] = null);
(statearr_29254_29401[1] = 38);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 63))
{var inst_28992 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29255_29402 = state_29015__$1;(statearr_29255_29402[2] = inst_28992);
(statearr_29255_29402[1] = 60);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 8))
{var inst_28623 = (state_29015[42]);var inst_28628 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28623);var state_29015__$1 = state_29015;var statearr_29256_29403 = state_29015__$1;(statearr_29256_29403[2] = inst_28628);
(statearr_29256_29403[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 49))
{var inst_28825 = (state_29015[2]);var state_29015__$1 = state_29015;var statearr_29257_29404 = state_29015__$1;(statearr_29257_29404[2] = inst_28825);
(statearr_29257_29404[1] = 46);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29016 === 84))
{var inst_28937 = (state_29015[66]);var inst_28956 = (state_29015[13]);var inst_28956__$1 = cljs.core.seq.call(null,inst_28937);var state_29015__$1 = (function (){var statearr_29258 = state_29015;(statearr_29258[13] = inst_28956__$1);
return statearr_29258;
})();if(inst_28956__$1)
{var statearr_29259_29405 = state_29015__$1;(statearr_29259_29405[1] = 86);
} else
{var statearr_29260_29406 = state_29015__$1;(statearr_29260_29406[1] = 87);
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
});})(c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_29264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29264[0] = state_machine__8530__auto__);
(statearr_29264[1] = 1);
return statearr_29264;
});
var state_machine__8530__auto____1 = (function (state_29015){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_29015);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e29265){if((e29265 instanceof Object))
{var ex__8533__auto__ = e29265;var statearr_29266_29407 = state_29015;(statearr_29266_29407[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29408 = state_29015;
state_29015 = G__29408;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_29267 = f__8595__auto__.call(null);(statearr_29267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto____$1);
return statearr_29267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});
;})(c__8594__auto____$1,stage,store,map__28574,val_ch,pub_ch,p,out,in$,inst_28603,inst_28576,inst_28588,inst_28578,inst_28579,inst_28577,inst_28575,inst_28587,inst_28609,inst_28610,inst_29020,state_val_29025,c__8594__auto__))
})();var inst_29022 = cljs.core.async.impl.dispatch.run.call(null,inst_29021);var state_29024__$1 = (function (){var statearr_29268 = state_29024;(statearr_29268[15] = inst_29022);
(statearr_29268[16] = inst_28609);
(statearr_29268[17] = inst_28610);
return statearr_29268;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29024__$1,inst_28603);
} else
{if((state_val_29025 === 4))
{var inst_28576 = (state_29024[8]);var inst_28579 = (state_29024[11]);var inst_28577 = (state_29024[12]);var inst_28575 = (state_29024[13]);var inst_28587 = (state_29024[14]);var inst_28587__$1 = (state_29024[2]);var inst_28588 = cljs.core.get.call(null,inst_28587__$1,new cljs.core.Keyword(null,"store","store",1123675219));var inst_28589 = [new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"volatile","volatile",3420844302)];var inst_28590 = [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"user","user",1017503549)];var inst_28591 = hasch.core.uuid.call(null);var inst_28592 = ("STAGE "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28591));var inst_28593 = [inst_28592,user];var inst_28594 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28590,inst_28593);var inst_28595 = [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"peer","peer",1017341140),new cljs.core.Keyword(null,"eval-fn","eval-fn",3928548107),new cljs.core.Keyword(null,"val","val",1014020755),new cljs.core.Keyword(null,"val-ch","val-ch",4484989443),new cljs.core.Keyword(null,"val-mult","val-mult",3832474574)];var inst_28596 = [inst_28577,inst_28576];var inst_28597 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28596,null));var inst_28598 = cljs.core.async.mult.call(null,inst_28579);var inst_28599 = [inst_28597,peer,eval_fn,cljs.core.PersistentHashMap.EMPTY,inst_28579,inst_28598];var inst_28600 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28595,inst_28599);var inst_28601 = [inst_28594,inst_28600];var inst_28602 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28589,inst_28601);var inst_28603 = cljs.core.atom.call(null,inst_28602);var inst_28604 = cljs.core.async.pub.call(null,inst_28576,new cljs.core.Keyword(null,"topic","topic",1124450465));var inst_28605 = [inst_28575,inst_28604];var inst_28606 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28605,null));var inst_28607 = geschichte.sync.wire.call(null,peer,inst_28606);var state_29024__$1 = (function (){var statearr_29269 = state_29024;(statearr_29269[7] = inst_28603);
(statearr_29269[9] = inst_28588);
(statearr_29269[14] = inst_28587__$1);
return statearr_29269;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29024__$1,5,inst_28607);
} else
{if((state_val_29025 === 3))
{var inst_28581 = (state_29024[18]);var state_29024__$1 = state_29024;var statearr_29270_29409 = state_29024__$1;(statearr_29270_29409[2] = inst_28581);
(statearr_29270_29409[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29025 === 2))
{var inst_28581 = (state_29024[18]);var inst_28584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28581);var state_29024__$1 = state_29024;var statearr_29271_29410 = state_29024__$1;(statearr_29271_29410[2] = inst_28584);
(statearr_29271_29410[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29025 === 1))
{var inst_28575 = (state_29024[13]);var inst_28581 = (state_29024[18]);var inst_28575__$1 = cljs.core.async.chan.call(null);var inst_28576 = cljs.core.async.chan.call(null);var inst_28577 = cljs.core.async.pub.call(null,inst_28575__$1,new cljs.core.Keyword(null,"topic","topic",1124450465));var inst_28578 = cljs.core.async.chan.call(null);var inst_28579 = cljs.core.async.chan.call(null);var inst_28580 = cljs.core.deref.call(null,peer);var inst_28581__$1 = new cljs.core.Keyword(null,"volatile","volatile",3420844302).cljs$core$IFn$_invoke$arity$1(inst_28580);var inst_28582 = cljs.core.seq_QMARK_.call(null,inst_28581__$1);var state_29024__$1 = (function (){var statearr_29272 = state_29024;(statearr_29272[8] = inst_28576);
(statearr_29272[10] = inst_28578);
(statearr_29272[11] = inst_28579);
(statearr_29272[12] = inst_28577);
(statearr_29272[13] = inst_28575__$1);
(statearr_29272[18] = inst_28581__$1);
return statearr_29272;
})();if(inst_28582)
{var statearr_29273_29411 = state_29024__$1;(statearr_29273_29411[1] = 2);
} else
{var statearr_29274_29412 = state_29024__$1;(statearr_29274_29412[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_29278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29278[0] = state_machine__8530__auto__);
(statearr_29278[1] = 1);
return statearr_29278;
});
var state_machine__8530__auto____1 = (function (state_29024){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_29024);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e29279){if((e29279 instanceof Object))
{var ex__8533__auto__ = e29279;var statearr_29280_29413 = state_29024;(statearr_29280_29413[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29414 = state_29024;
state_29024 = G__29414;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_29024){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_29024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_29281 = f__8595__auto__.call(null);(statearr_29281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_29281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
geschichte.stage.create_repo_BANG_ = (function create_repo_BANG_(stage,user,description,init_val,branch){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_29464){var state_val_29465 = (state_29464[1]);if((state_val_29465 === 2))
{var inst_29448 = (state_29464[7]);var inst_29462 = (state_29464[2]);var state_29464__$1 = (function (){var statearr_29466 = state_29464;(statearr_29466[8] = inst_29462);
return statearr_29466;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29464__$1,inst_29448);
} else
{if((state_val_29465 === 1))
{var inst_29448 = (state_29464[7]);var inst_29445 = geschichte.repo.new_repository.call(null,user,description,false,init_val,branch);var inst_29446 = [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_29447 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29446,null));var inst_29448__$1 = cljs.core.get_in.call(null,inst_29445,inst_29447);var inst_29449 = [user,inst_29448__$1];var inst_29450 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29449,null));var inst_29451 = cljs.core.swap_BANG_.call(null,stage,cljs.core.assoc_in,inst_29450,inst_29445);var inst_29452 = [user];var inst_29453 = [inst_29448__$1];var inst_29454 = [branch];var inst_29455 = cljs.core.PersistentHashSet.fromArray.call(null,inst_29454,true);var inst_29456 = [inst_29455];var inst_29457 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29453,inst_29456);var inst_29458 = [inst_29457];var inst_29459 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29452,inst_29458);var inst_29460 = geschichte.stage.sync_BANG_.call(null,stage,inst_29459);var state_29464__$1 = (function (){var statearr_29467 = state_29464;(statearr_29467[9] = inst_29451);
(statearr_29467[7] = inst_29448__$1);
return statearr_29467;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29464__$1,2,inst_29460);
} else
{return null;
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_29471 = [null,null,null,null,null,null,null,null,null,null];(statearr_29471[0] = state_machine__8530__auto__);
(statearr_29471[1] = 1);
return statearr_29471;
});
var state_machine__8530__auto____1 = (function (state_29464){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_29464);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e29472){if((e29472 instanceof Object))
{var ex__8533__auto__ = e29472;var statearr_29473_29475 = state_29464;(statearr_29473_29475[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29464);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29476 = state_29464;
state_29464 = G__29476;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_29464){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_29464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_29474 = f__8595__auto__.call(null);(statearr_29474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_29474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Subscribe stage to repos map, e.g. {user {repo-id #{branch1 branch2}}}. This is not additive, but only these repositories are subscribed. Returns go block to synchronize.
*/
geschichte.stage.subscribe_repos_BANG_ = (function subscribe_repos_BANG_(stage,repos){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_29549){var state_val_29550 = (state_29549[1]);if((state_val_29550 === 4))
{var inst_29524 = (state_29549[7]);var inst_29525 = (state_29549[8]);var inst_29527 = (state_29549[9]);var inst_29526 = (state_29549[10]);var inst_29531 = (state_29549[11]);var inst_29545 = (state_29549[2]);var inst_29546 = (function (){var peer_id = inst_29531;var subed_ch = inst_29527;var out = inst_29526;var p = inst_29525;var vec__29520 = inst_29524;return ((function (peer_id,subed_ch,out,p,vec__29520,inst_29524,inst_29525,inst_29527,inst_29526,inst_29531,inst_29545,state_val_29550,c__8594__auto__){
return (function (p1__29477_SHARP_){return cljs.core.assoc_in.call(null,p1__29477_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"subs","subs",1017445797)], null),repos);
});
;})(peer_id,subed_ch,out,p,vec__29520,inst_29524,inst_29525,inst_29527,inst_29526,inst_29531,inst_29545,state_val_29550,c__8594__auto__))
})();var inst_29547 = cljs.core.swap_BANG_.call(null,stage,inst_29546);var state_29549__$1 = (function (){var statearr_29551 = state_29549;(statearr_29551[12] = inst_29545);
return statearr_29551;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29549__$1,inst_29547);
} else
{if((state_val_29550 === 3))
{var inst_29525 = (state_29549[8]);var inst_29527 = (state_29549[9]);var inst_29526 = (state_29549[10]);var inst_29531 = (state_29549[11]);var inst_29539 = (state_29549[2]);var inst_29540 = cljs.core.async.unsub.call(null,inst_29525,new cljs.core.Keyword(null,"meta-subed","meta-subed",793641097),inst_29527);var inst_29541 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_29542 = [new cljs.core.Keyword(null,"meta-pub-req","meta-pub-req",1425224056),repos,inst_29531];var inst_29543 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29541,inst_29542);var state_29549__$1 = (function (){var statearr_29552 = state_29549;(statearr_29552[13] = inst_29539);
(statearr_29552[14] = inst_29540);
return statearr_29552;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29549__$1,4,inst_29526,inst_29543);
} else
{if((state_val_29550 === 2))
{var inst_29527 = (state_29549[9]);var inst_29537 = (state_29549[2]);var state_29549__$1 = (function (){var statearr_29553 = state_29549;(statearr_29553[15] = inst_29537);
return statearr_29553;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29549__$1,3,inst_29527);
} else
{if((state_val_29550 === 1))
{var inst_29524 = (state_29549[7]);var inst_29525 = (state_29549[8]);var inst_29527 = (state_29549[9]);var inst_29526 = (state_29549[10]);var inst_29531 = (state_29549[11]);var inst_29521 = cljs.core.deref.call(null,stage);var inst_29522 = [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"chans","chans",1108527827)];var inst_29523 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29522,null));var inst_29524__$1 = cljs.core.get_in.call(null,inst_29521,inst_29523);var inst_29525__$1 = cljs.core.nth.call(null,inst_29524__$1,0,null);var inst_29526__$1 = cljs.core.nth.call(null,inst_29524__$1,1,null);var inst_29527__$1 = cljs.core.async.chan.call(null);var inst_29528 = cljs.core.deref.call(null,stage);var inst_29529 = [new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_29530 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29529,null));var inst_29531__$1 = cljs.core.get_in.call(null,inst_29528,inst_29530);var inst_29532 = cljs.core.async.sub.call(null,inst_29525__$1,new cljs.core.Keyword(null,"meta-subed","meta-subed",793641097),inst_29527__$1);var inst_29533 = [new cljs.core.Keyword(null,"topic","topic",1124450465),new cljs.core.Keyword(null,"metas","metas",1117691520),new cljs.core.Keyword(null,"peer","peer",1017341140)];var inst_29534 = [new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),repos,inst_29531__$1];var inst_29535 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29533,inst_29534);var state_29549__$1 = (function (){var statearr_29554 = state_29549;(statearr_29554[7] = inst_29524__$1);
(statearr_29554[16] = inst_29532);
(statearr_29554[8] = inst_29525__$1);
(statearr_29554[9] = inst_29527__$1);
(statearr_29554[10] = inst_29526__$1);
(statearr_29554[11] = inst_29531__$1);
return statearr_29554;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29549__$1,2,inst_29526__$1,inst_29535);
} else
{return null;
}
}
}
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_29558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29558[0] = state_machine__8530__auto__);
(statearr_29558[1] = 1);
return statearr_29558;
});
var state_machine__8530__auto____1 = (function (state_29549){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_29549);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e29559){if((e29559 instanceof Object))
{var ex__8533__auto__ = e29559;var statearr_29560_29562 = state_29549;(statearr_29560_29562[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29563 = state_29549;
state_29549 = G__29563;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_29549){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_29549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_29561 = f__8595__auto__.call(null);(statearr_29561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_29561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
/**
* Remote repos map from stage, e.g. {user {repo-id #{branch1 branch2}}}.
*/
geschichte.stage.remove_repos_BANG_ = (function remove_repos_BANG_(stage,repos){return cljs.core.swap_BANG_.call(null,stage,(function (old){return cljs.core.reduce.call(null,(function (p1__29564_SHARP_,p2__29565_SHARP_){return cljs.core.update_in.call(null,p1__29564_SHARP_,cljs.core.butlast.call(null,p2__29565_SHARP_),cljs.core.dissoc,cljs.core.last.call(null,p2__29565_SHARP_));
}),old,(function (){var iter__4264__auto__ = (function iter__29582(s__29583){return (new cljs.core.LazySeq(null,(function (){var s__29583__$1 = s__29583;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29583__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__29593 = cljs.core.first.call(null,xs__4624__auto__);var u = cljs.core.nth.call(null,vec__29593,0,null);var rs = cljs.core.nth.call(null,vec__29593,1,null);var iterys__4260__auto__ = ((function (s__29583__$1,vec__29593,u,rs,xs__4624__auto__,temp__4126__auto__){
return (function iter__29584(s__29585){return (new cljs.core.LazySeq(null,((function (s__29583__$1,vec__29593,u,rs,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__29585__$1 = s__29585;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29585__$1);if(temp__4126__auto____$1)
{var s__29585__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29585__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__29585__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__29587 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__29586 = 0;while(true){
if((i__29586 < size__4263__auto__))
{var vec__29596 = cljs.core._nth.call(null,c__4262__auto__,i__29586);var id = cljs.core.nth.call(null,vec__29596,0,null);var _ = cljs.core.nth.call(null,vec__29596,1,null);cljs.core.chunk_append.call(null,b__29587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id], null));
{
var G__29598 = (i__29586 + 1);
i__29586 = G__29598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29587),iter__29584.call(null,cljs.core.chunk_rest.call(null,s__29585__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29587),null);
}
} else
{var vec__29597 = cljs.core.first.call(null,s__29585__$2);var id = cljs.core.nth.call(null,vec__29597,0,null);var _ = cljs.core.nth.call(null,vec__29597,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,id], null),iter__29584.call(null,cljs.core.rest.call(null,s__29585__$2)));
}
} else
{return null;
}
break;
}
});})(s__29583__$1,vec__29593,u,rs,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__29583__$1,vec__29593,u,rs,xs__4624__auto__,temp__4126__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,rs));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__29582.call(null,cljs.core.rest.call(null,s__29583__$1)));
} else
{{
var G__29599 = cljs.core.rest.call(null,s__29583__$1);
s__29583__$1 = G__29599;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,repos);
})());
}));
});
/**
* Transact on branch of user's repository a transaction function trans-fn-code (given as
* quoted code) on previous value and params.
*/
geschichte.stage.transact = (function transact(stage,p__29600,params,trans_fn_code){var vec__29728 = p__29600;var user = cljs.core.nth.call(null,vec__29728,0,null);var repo = cljs.core.nth.call(null,vec__29728,1,null);var branch = cljs.core.nth.call(null,vec__29728,2,null);var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,vec__29728,user,repo,branch){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,vec__29728,user,repo,branch){
return (function (state_29810){var state_val_29811 = (state_29810[1]);if((state_val_29811 === 7))
{var inst_29742 = (state_29810[7]);var inst_29754 = (state_29810[8]);var inst_29749 = (state_29810[2]);var inst_29750 = cljs.core.get.call(null,inst_29749,new cljs.core.Keyword(null,"eval-fn","eval-fn",3928548107));var inst_29751 = cljs.core.get.call(null,inst_29749,new cljs.core.Keyword(null,"peer","peer",1017341140));var inst_29752 = cljs.core.get.call(null,inst_29749,new cljs.core.Keyword(null,"val-ch","val-ch",4484989443));var inst_29753 = cljs.core.get.call(null,inst_29749,new cljs.core.Keyword(null,"val","val",1014020755));var inst_29754__$1 = cljs.core.get.call(null,inst_29742,new cljs.core.Keyword(null,"config","config",3954079412));var inst_29755 = cljs.core.seq_QMARK_.call(null,inst_29754__$1);var state_29810__$1 = (function (){var statearr_29812 = state_29810;(statearr_29812[9] = inst_29751);
(statearr_29812[10] = inst_29752);
(statearr_29812[11] = inst_29750);
(statearr_29812[8] = inst_29754__$1);
(statearr_29812[12] = inst_29753);
return statearr_29812;
})();if(inst_29755)
{var statearr_29813_29855 = state_29810__$1;(statearr_29813_29855[1] = 8);
} else
{var statearr_29814_29856 = state_29810__$1;(statearr_29814_29856[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 20))
{var inst_29797 = (state_29810[13]);var inst_29796 = (state_29810[2]);var inst_29797__$1 = cljs.core.get.call(null,inst_29796,new cljs.core.Keyword(null,"volatile","volatile",3420844302));var inst_29798 = cljs.core.seq_QMARK_.call(null,inst_29797__$1);var state_29810__$1 = (function (){var statearr_29815 = state_29810;(statearr_29815[13] = inst_29797__$1);
return statearr_29815;
})();if(inst_29798)
{var statearr_29816_29857 = state_29810__$1;(statearr_29816_29857[1] = 21);
} else
{var statearr_29817_29858 = state_29810__$1;(statearr_29817_29858[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 1))
{var inst_29736 = (state_29810[14]);var inst_29736__$1 = cljs.core.deref.call(null,stage);var inst_29737 = cljs.core.seq_QMARK_.call(null,inst_29736__$1);var state_29810__$1 = (function (){var statearr_29818 = state_29810;(statearr_29818[14] = inst_29736__$1);
return statearr_29818;
})();if(inst_29737)
{var statearr_29819_29859 = state_29810__$1;(statearr_29819_29859[1] = 2);
} else
{var statearr_29820_29860 = state_29810__$1;(statearr_29820_29860[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 4))
{var inst_29743 = (state_29810[15]);var inst_29742 = (state_29810[7]);var inst_29742__$1 = (state_29810[2]);var inst_29743__$1 = cljs.core.get.call(null,inst_29742__$1,new cljs.core.Keyword(null,"volatile","volatile",3420844302));var inst_29744 = cljs.core.seq_QMARK_.call(null,inst_29743__$1);var state_29810__$1 = (function (){var statearr_29821 = state_29810;(statearr_29821[15] = inst_29743__$1);
(statearr_29821[7] = inst_29742__$1);
return statearr_29821;
})();if(inst_29744)
{var statearr_29822_29861 = state_29810__$1;(statearr_29822_29861[1] = 5);
} else
{var statearr_29823_29862 = state_29810__$1;(statearr_29823_29862[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 15))
{var inst_29773 = (state_29810[16]);var state_29810__$1 = state_29810;var statearr_29824_29863 = state_29810__$1;(statearr_29824_29863[2] = inst_29773);
(statearr_29824_29863[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 21))
{var inst_29797 = (state_29810[13]);var inst_29800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29797);var state_29810__$1 = state_29810;var statearr_29825_29864 = state_29810__$1;(statearr_29825_29864[2] = inst_29800);
(statearr_29825_29864[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 13))
{var inst_29773 = (state_29810[16]);var inst_29772 = (state_29810[2]);var inst_29773__$1 = cljs.core.get.call(null,inst_29772,user);var inst_29774 = cljs.core.seq_QMARK_.call(null,inst_29773__$1);var state_29810__$1 = (function (){var statearr_29826 = state_29810;(statearr_29826[16] = inst_29773__$1);
return statearr_29826;
})();if(inst_29774)
{var statearr_29827_29865 = state_29810__$1;(statearr_29827_29865[1] = 14);
} else
{var statearr_29828_29866 = state_29810__$1;(statearr_29828_29866[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 22))
{var inst_29797 = (state_29810[13]);var state_29810__$1 = state_29810;var statearr_29829_29867 = state_29810__$1;(statearr_29829_29867[2] = inst_29797);
(statearr_29829_29867[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 6))
{var inst_29743 = (state_29810[15]);var state_29810__$1 = state_29810;var statearr_29830_29868 = state_29810__$1;(statearr_29830_29868[2] = inst_29743);
(statearr_29830_29868[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 17))
{var inst_29790 = (state_29810[17]);var inst_29787 = (state_29810[2]);var inst_29788 = [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"val","val",1014020755),user,repo,branch];var inst_29789 = (new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29788,null));var inst_29790__$1 = cljs.core.swap_BANG_.call(null,stage,cljs.core.assoc_in,inst_29789,inst_29787);var inst_29791 = cljs.core.seq_QMARK_.call(null,inst_29790__$1);var state_29810__$1 = (function (){var statearr_29831 = state_29810;(statearr_29831[17] = inst_29790__$1);
return statearr_29831;
})();if(inst_29791)
{var statearr_29832_29869 = state_29810__$1;(statearr_29832_29869[1] = 18);
} else
{var statearr_29833_29870 = state_29810__$1;(statearr_29833_29870[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 3))
{var inst_29736 = (state_29810[14]);var state_29810__$1 = state_29810;var statearr_29834_29871 = state_29810__$1;(statearr_29834_29871[2] = inst_29736);
(statearr_29834_29871[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 12))
{var inst_29766 = (state_29810[18]);var state_29810__$1 = state_29810;var statearr_29835_29872 = state_29810__$1;(statearr_29835_29872[2] = inst_29766);
(statearr_29835_29872[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 2))
{var inst_29736 = (state_29810[14]);var inst_29739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29736);var state_29810__$1 = state_29810;var statearr_29836_29873 = state_29810__$1;(statearr_29836_29873[2] = inst_29739);
(statearr_29836_29873[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 23))
{var inst_29752 = (state_29810[10]);var inst_29803 = (state_29810[2]);var inst_29804 = cljs.core.get.call(null,inst_29803,new cljs.core.Keyword(null,"val","val",1014020755));var inst_29805 = [params,trans_fn_code];var inst_29806 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29805,null));var inst_29807 = geschichte.platform_log.info.call(null,"new stage value after trans ",inst_29806,": \n",inst_29804);var inst_29808 = cljs.core.async.put_BANG_.call(null,inst_29752,inst_29804);var state_29810__$1 = (function (){var statearr_29837 = state_29810;(statearr_29837[19] = inst_29807);
return statearr_29837;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29810__$1,inst_29808);
} else
{if((state_val_29811 === 19))
{var inst_29790 = (state_29810[17]);var state_29810__$1 = state_29810;var statearr_29838_29874 = state_29810__$1;(statearr_29838_29874[2] = inst_29790);
(statearr_29838_29874[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 11))
{var inst_29766 = (state_29810[18]);var inst_29769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29766);var state_29810__$1 = state_29810;var statearr_29839_29875 = state_29810__$1;(statearr_29839_29875[2] = inst_29769);
(statearr_29839_29875[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 9))
{var inst_29754 = (state_29810[8]);var state_29810__$1 = state_29810;var statearr_29840_29876 = state_29810__$1;(statearr_29840_29876[2] = inst_29754);
(statearr_29840_29876[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 5))
{var inst_29743 = (state_29810[15]);var inst_29746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29743);var state_29810__$1 = state_29810;var statearr_29841_29877 = state_29810__$1;(statearr_29841_29877[2] = inst_29746);
(statearr_29841_29877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 14))
{var inst_29773 = (state_29810[16]);var inst_29776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29773);var state_29810__$1 = state_29810;var statearr_29842_29878 = state_29810__$1;(statearr_29842_29878[2] = inst_29776);
(statearr_29842_29878[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 16))
{var inst_29751 = (state_29810[9]);var inst_29750 = (state_29810[11]);var inst_29779 = (state_29810[2]);var inst_29780 = cljs.core.get.call(null,inst_29779,repo);var inst_29781 = cljs.core.deref.call(null,inst_29751);var inst_29782 = [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"store","store",1123675219)];var inst_29783 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29782,null));var inst_29784 = cljs.core.get_in.call(null,inst_29781,inst_29783);var inst_29785 = geschichte.stage.realize_value.call(null,inst_29780,branch,inst_29784,inst_29750);var state_29810__$1 = state_29810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29810__$1,17,inst_29785);
} else
{if((state_val_29811 === 10))
{var inst_29766 = (state_29810[18]);var inst_29760 = (state_29810[2]);var inst_29761 = cljs.core.get.call(null,inst_29760,new cljs.core.Keyword(null,"subs","subs",1017445797));var inst_29762 = [user,repo,new cljs.core.Keyword(null,"transactions","transactions",2968026311),branch];var inst_29763 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29762,null));var inst_29764 = [params,trans_fn_code];var inst_29765 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29764,null));var inst_29766__$1 = cljs.core.swap_BANG_.call(null,stage,cljs.core.update_in,inst_29763,cljs.core.conj,inst_29765);var inst_29767 = cljs.core.seq_QMARK_.call(null,inst_29766__$1);var state_29810__$1 = (function (){var statearr_29843 = state_29810;(statearr_29843[20] = inst_29761);
(statearr_29843[18] = inst_29766__$1);
return statearr_29843;
})();if(inst_29767)
{var statearr_29844_29879 = state_29810__$1;(statearr_29844_29879[1] = 11);
} else
{var statearr_29845_29880 = state_29810__$1;(statearr_29845_29880[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 18))
{var inst_29790 = (state_29810[17]);var inst_29793 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29790);var state_29810__$1 = state_29810;var statearr_29846_29881 = state_29810__$1;(statearr_29846_29881[2] = inst_29793);
(statearr_29846_29881[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29811 === 8))
{var inst_29754 = (state_29810[8]);var inst_29757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29754);var state_29810__$1 = state_29810;var statearr_29847_29882 = state_29810__$1;(statearr_29847_29882[2] = inst_29757);
(statearr_29847_29882[1] = 10);
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
});})(c__8594__auto__,vec__29728,user,repo,branch))
;return ((function (switch__8529__auto__,c__8594__auto__,vec__29728,user,repo,branch){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_29851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29851[0] = state_machine__8530__auto__);
(statearr_29851[1] = 1);
return statearr_29851;
});
var state_machine__8530__auto____1 = (function (state_29810){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_29810);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e29852){if((e29852 instanceof Object))
{var ex__8533__auto__ = e29852;var statearr_29853_29883 = state_29810;(statearr_29853_29883[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29884 = state_29810;
state_29810 = G__29884;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_29810){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_29810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,vec__29728,user,repo,branch))
})();var state__8596__auto__ = (function (){var statearr_29854 = f__8595__auto__.call(null);(statearr_29854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_29854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,vec__29728,user,repo,branch))
);
return c__8594__auto__;
});
/**
* Commit all branches synchronously on stage given by the repository map,
* e.g. {user1 {repo1 #{branch1}} user2 {repo1 #{branch1 branch2}}}
*/
geschichte.stage.commit_BANG_ = (function commit_BANG_(stage,repos){cljs.core.swap_BANG_.call(null,stage,(function (old){return cljs.core.reduce.call(null,(function (old__$1,p__29902){var vec__29903 = p__29902;var user = cljs.core.nth.call(null,vec__29903,0,null);var id = cljs.core.nth.call(null,vec__29903,1,null);var branch = cljs.core.nth.call(null,vec__29903,2,null);return cljs.core.update_in.call(null,old__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,id], null),((function (vec__29903,user,id,branch){
return (function (p1__29885_SHARP_){return geschichte.repo.commit.call(null,p1__29885_SHARP_,user,branch);
});})(vec__29903,user,id,branch))
);
}),old,(function (){var iter__4264__auto__ = (function iter__29904(s__29905){return (new cljs.core.LazySeq(null,(function (){var s__29905__$1 = s__29905;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29905__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__29915 = cljs.core.first.call(null,xs__4624__auto__);var user = cljs.core.nth.call(null,vec__29915,0,null);var repo = cljs.core.nth.call(null,vec__29915,1,null);var iterys__4260__auto__ = ((function (s__29905__$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__){
return (function iter__29906(s__29907){return (new cljs.core.LazySeq(null,((function (s__29905__$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__29907__$1 = s__29907;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29907__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var vec__29917 = cljs.core.first.call(null,xs__4624__auto____$1);var id = cljs.core.nth.call(null,vec__29917,0,null);var branches = cljs.core.nth.call(null,vec__29917,1,null);var iterys__4260__auto__ = ((function (s__29907__$1,s__29905__$1,vec__29917,id,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__){
return (function iter__29908(s__29909){return (new cljs.core.LazySeq(null,((function (s__29907__$1,s__29905__$1,vec__29917,id,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__29909__$1 = s__29909;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__29909__$1);if(temp__4126__auto____$2)
{var s__29909__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__29909__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__29909__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__29911 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__29910 = 0;while(true){
if((i__29910 < size__4263__auto__))
{var b = cljs.core._nth.call(null,c__4262__auto__,i__29910);cljs.core.chunk_append.call(null,b__29911,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,id,b], null));
{
var G__29918 = (i__29910 + 1);
i__29910 = G__29918;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29911),iter__29908.call(null,cljs.core.chunk_rest.call(null,s__29909__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29911),null);
}
} else
{var b = cljs.core.first.call(null,s__29909__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,id,b], null),iter__29908.call(null,cljs.core.rest.call(null,s__29909__$2)));
}
} else
{return null;
}
break;
}
});})(s__29907__$1,s__29905__$1,vec__29917,id,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__29907__$1,s__29905__$1,vec__29917,id,branches,xs__4624__auto____$1,temp__4126__auto____$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,branches));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__29906.call(null,cljs.core.rest.call(null,s__29907__$1)));
} else
{{
var G__29919 = cljs.core.rest.call(null,s__29907__$1);
s__29907__$1 = G__29919;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__29905__$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__29905__$1,vec__29915,user,repo,xs__4624__auto__,temp__4126__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,repo));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__29904.call(null,cljs.core.rest.call(null,s__29905__$1)));
} else
{{
var G__29920 = cljs.core.rest.call(null,s__29905__$1);
s__29905__$1 = G__29920;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,repos);
})());
}));
return geschichte.stage.sync_BANG_.call(null,stage,repos);
});
/**
* Merge multiple heads in a branch of a repository. Optionally reorder
* heads to resolve conflicts.
*/
geschichte.stage.merge_BANG_ = (function() {
var merge_BANG_ = null;
var merge_BANG___2 = (function (stage,p__29922){var vec__29929 = p__29922;var user = cljs.core.nth.call(null,vec__29929,0,null);var repo = cljs.core.nth.call(null,vec__29929,1,null);var branch = cljs.core.nth.call(null,vec__29929,2,null);var meta = cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,repo,new cljs.core.Keyword(null,"meta","meta",1017252215)], null));return merge_BANG_.call(null,stage,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,repo,branch], null),geschichte.repo.merge_heads.call(null,meta,branch,meta,branch));
});
var merge_BANG___3 = (function (stage,p__29923,heads_order){var vec__29930 = p__29923;var user = cljs.core.nth.call(null,vec__29930,0,null);var repo = cljs.core.nth.call(null,vec__29930,1,null);var branch = cljs.core.nth.call(null,vec__29930,2,null);cljs.core.swap_BANG_.call(null,stage,((function (vec__29930,user,repo,branch){
return (function (p__29931){var map__29932 = p__29931;var map__29932__$1 = ((cljs.core.seq_QMARK_.call(null,map__29932))?cljs.core.apply.call(null,cljs.core.hash_map,map__29932):map__29932);var old = map__29932__$1;var map__29933 = cljs.core.get.call(null,map__29932__$1,new cljs.core.Keyword(null,"config","config",3954079412));var map__29933__$1 = ((cljs.core.seq_QMARK_.call(null,map__29933))?cljs.core.apply.call(null,cljs.core.hash_map,map__29933):map__29933);var u = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"user","user",1017503549));return cljs.core.update_in.call(null,old,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,repo], null),((function (map__29932,map__29932__$1,old,map__29933,map__29933__$1,u,vec__29930,user,repo,branch){
return (function (p1__29921_SHARP_){return geschichte.repo.merge.call(null,p1__29921_SHARP_,u,branch,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(p1__29921_SHARP_),heads_order);
});})(map__29932,map__29932__$1,old,map__29933,map__29933__$1,u,vec__29930,user,repo,branch))
);
});})(vec__29930,user,repo,branch))
);
return geschichte.stage.sync_BANG_.call(null,stage,new cljs.core.PersistentArrayMap.fromArray([user,new cljs.core.PersistentArrayMap.fromArray([repo,cljs.core.PersistentHashSet.fromArray([branch], true)], true, false)], true, false));
});
merge_BANG_ = function(stage,p__29923,heads_order){
switch(arguments.length){
case 2:
return merge_BANG___2.call(this,stage,p__29923);
case 3:
return merge_BANG___3.call(this,stage,p__29923,heads_order);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_BANG_.cljs$core$IFn$_invoke$arity$2 = merge_BANG___2;
merge_BANG_.cljs$core$IFn$_invoke$arity$3 = merge_BANG___3;
return merge_BANG_;
})()
;

//# sourceMappingURL=stage.js.map