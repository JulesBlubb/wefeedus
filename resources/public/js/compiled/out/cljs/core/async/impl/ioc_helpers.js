// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t26820 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t26820 = (function (f,fn_handler,meta26821){
this.f = f;
this.fn_handler = fn_handler;
this.meta26821 = meta26821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t26820.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t26820.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t26820";
cljs.core.async.impl.ioc_helpers.t26820.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async.impl.ioc-helpers/t26820");
});
cljs.core.async.impl.ioc_helpers.t26820.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t26820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t26820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t26820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26822){var self__ = this;
var _26822__$1 = this;return self__.meta26821;
});
cljs.core.async.impl.ioc_helpers.t26820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26822,meta26821__$1){var self__ = this;
var _26822__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t26820(self__.f,self__.fn_handler,meta26821__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t26820 = (function __GT_t26820(f__$1,fn_handler__$1,meta26821){return (new cljs.core.async.impl.ioc_helpers.t26820(f__$1,fn_handler__$1,meta26821));
});
}
return (new cljs.core.async.impl.ioc_helpers.t26820(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e26824){if((e26824 instanceof Object))
{var ex = e26824;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26824;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_26827_26829 = state;(statearr_26827_26829[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_26827_26829[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26828_26830 = state;(statearr_26828_26830[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_26828_26830[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_26833_26835 = state;(statearr_26833_26835[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_26833_26835[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26834_26836 = state;(statearr_26834_26836[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_26834_26836[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26837){var map__26842 = p__26837;var map__26842__$1 = ((cljs.core.seq_QMARK_.call(null,map__26842))?cljs.core.apply.call(null,cljs.core.hash_map,map__26842):map__26842);var opts = map__26842__$1;var statearr_26843_26846 = state;(statearr_26843_26846[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26842,map__26842__$1,opts){
return (function (val){var statearr_26844_26847 = state;(statearr_26844_26847[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26842,map__26842__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_26845_26848 = state;(statearr_26845_26848[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26837 = null;if (arguments.length > 3) {
  p__26837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26837);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26849){
var state = cljs.core.first(arglist__26849);
arglist__26849 = cljs.core.next(arglist__26849);
var cont_block = cljs.core.first(arglist__26849);
arglist__26849 = cljs.core.next(arglist__26849);
var ports = cljs.core.first(arglist__26849);
var p__26837 = cljs.core.rest(arglist__26849);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26837);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k26851,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__26853 = (((k26851 instanceof cljs.core.Keyword))?k26851.fqn:null);var caseval__26857;
switch (G__26853){
case "prev":
caseval__26857=self__.prev
break;
case "continue-block":
caseval__26857=self__.continue_block
break;
case "finally-block":
caseval__26857=self__.finally_block
break;
case "catch-exception":
caseval__26857=self__.catch_exception
break;
case "catch-block":
caseval__26857=self__.catch_block
break;
default:
caseval__26857=cljs.core.get.call(null,self__.__extmap,k26851,else__4128__auto__)
}
return caseval__26857;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
var this__4121__auto____$1 = this;if(cljs.core.truth_((function (){var and__3527__auto__ = other__4122__auto__;if(cljs.core.truth_(and__3527__auto__))
{return ((this__4121__auto____$1.constructor === other__4122__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4121__auto____$1,other__4122__auto__));
} else
{return and__3527__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__26850){var self__ = this;
var this__4132__auto____$1 = this;var pred__26854 = cljs.core.keyword_identical_QMARK_;var expr__26855 = k__4133__auto__;if(cljs.core.truth_(pred__26854.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__26855)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__26850,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26854.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__26855)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__26850,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26854.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__26855)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__26850,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26854.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__26855)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__26850,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26854.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__26855)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__26850,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__26850),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__26850){var self__ = this;
var this__4124__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__26850,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26852){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__26852),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__26852),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__26852),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__26852),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__26852),null,cljs.core.dissoc.call(null,G__26852,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_26859 = state;(statearr_26859[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_26859;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3527__auto__ = exception;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__3527__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3527__auto__ = exception;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = catch_block;if(cljs.core.truth_(and__3527__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var statearr_26865 = state;(statearr_26865[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_26865[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_26865[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_26865[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_26865;
} else
{if(cljs.core.truth_((function (){var and__3527__auto__ = exception;if(cljs.core.truth_(and__3527__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3527__auto__;
}
})()))
{var statearr_26866_26870 = state;(statearr_26866_26870[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__26871 = state;
state = G__26871;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3527__auto__ = exception;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not.call(null,catch_block);if(and__3527__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var statearr_26867 = state;(statearr_26867[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26867[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_26867;
} else
{if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not.call(null,exception);if(and__3527__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3527__auto__;
}
})()))
{var statearr_26868 = state;(statearr_26868[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26868[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_26868;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_26869 = state;(statearr_26869[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26869[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_26869;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map