// Compiled by ClojureScript 0.0-2227
goog.provide('konserve.store');
goog.require('cljs.core');
goog.require('konserve.protocols');
goog.require('konserve.protocols');

/**
* @constructor
* @param {*} state
* @param {*} tag_table
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
konserve.store.MemAsyncKeyValueStore = (function (state,tag_table,__meta,__extmap){
this.state = state;
this.tag_table = tag_table;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k26899,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__26901 = (((k26899 instanceof cljs.core.Keyword))?k26899.fqn:null);var caseval__26945;
switch (G__26901){
case "tag-table":
caseval__26945=self__.tag_table
break;
case "state":
caseval__26945=self__.state
break;
default:
caseval__26945=cljs.core.get.call(null,self__.__extmap,k26899,else__4128__auto__)
}
return caseval__26945;
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#konserve.store.MemAsyncKeyValueStore{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),self__.tag_table],null))], null),self__.__extmap));
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new konserve.store.MemAsyncKeyValueStore(self__.state,self__.tag_table,self__.__meta,self__.__extmap,self__.__hash));
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
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
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new konserve.store.MemAsyncKeyValueStore(self__.state,self__.tag_table,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__26898){var self__ = this;
var this__4132__auto____$1 = this;var pred__26902 = cljs.core.keyword_identical_QMARK_;var expr__26903 = k__4133__auto__;if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__26903)))
{return (new konserve.store.MemAsyncKeyValueStore(G__26898,self__.tag_table,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),expr__26903)))
{return (new konserve.store.MemAsyncKeyValueStore(self__.state,G__26898,self__.__meta,self__.__extmap,null));
} else
{return (new konserve.store.MemAsyncKeyValueStore(self__.state,self__.tag_table,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__26898),null));
}
}
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),self__.tag_table],null))], null),self__.__extmap));
});
konserve.store.MemAsyncKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$ = true;
konserve.store.MemAsyncKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$_get_in$arity$2 = (function (this$,key_vec){var self__ = this;
var this$__$1 = this;var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,this$__$1){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,this$__$1){
return (function (state_26908){var state_val_26909 = (state_26908[1]);if((state_val_26909 === 1))
{var inst_26905 = cljs.core.deref.call(null,self__.state);var inst_26906 = cljs.core.get_in.call(null,inst_26905,key_vec);var state_26908__$1 = state_26908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26908__$1,inst_26906);
} else
{return null;
}
});})(c__8594__auto__,this$__$1))
;return ((function (switch__8529__auto__,c__8594__auto__,this$__$1){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26913 = [null,null,null,null,null,null,null];(statearr_26913[0] = state_machine__8530__auto__);
(statearr_26913[1] = 1);
return statearr_26913;
});
var state_machine__8530__auto____1 = (function (state_26908){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26908);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26914){if((e26914 instanceof Object))
{var ex__8533__auto__ = e26914;var statearr_26915_26946 = state_26908;(statearr_26915_26946[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26947 = state_26908;
state_26908 = G__26947;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26908){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,this$__$1))
})();var state__8596__auto__ = (function (){var statearr_26916 = f__8595__auto__.call(null);(statearr_26916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_26916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,this$__$1))
);
return c__8594__auto__;
});
konserve.store.MemAsyncKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$_assoc_in$arity$3 = (function (this$,key_vec,value){var self__ = this;
var this$__$1 = this;var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,this$__$1){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,this$__$1){
return (function (state_26919){var state_val_26920 = (state_26919[1]);if((state_val_26920 === 1))
{var inst_26917 = cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc_in,key_vec,value);var state_26919__$1 = (function (){var statearr_26921 = state_26919;(statearr_26921[7] = inst_26917);
return statearr_26921;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26919__$1,null);
} else
{return null;
}
});})(c__8594__auto__,this$__$1))
;return ((function (switch__8529__auto__,c__8594__auto__,this$__$1){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26925 = [null,null,null,null,null,null,null,null];(statearr_26925[0] = state_machine__8530__auto__);
(statearr_26925[1] = 1);
return statearr_26925;
});
var state_machine__8530__auto____1 = (function (state_26919){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26919);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26926){if((e26926 instanceof Object))
{var ex__8533__auto__ = e26926;var statearr_26927_26948 = state_26919;(statearr_26927_26948[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26949 = state_26919;
state_26919 = G__26949;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26919){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,this$__$1))
})();var state__8596__auto__ = (function (){var statearr_26928 = f__8595__auto__.call(null);(statearr_26928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_26928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,this$__$1))
);
return c__8594__auto__;
});
konserve.store.MemAsyncKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$_update_in$arity$3 = (function (this$,key_vec,up_fn){var self__ = this;
var this$__$1 = this;var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,this$__$1){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,this$__$1){
return (function (state_26936){var state_val_26937 = (state_26936[1]);if((state_val_26937 === 1))
{var inst_26929 = cljs.core.deref.call(null,self__.state);var inst_26930 = cljs.core.get_in.call(null,inst_26929,key_vec);var inst_26931 = cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,key_vec,up_fn);var inst_26932 = cljs.core.get_in.call(null,inst_26931,key_vec);var inst_26933 = [inst_26930,inst_26932];var inst_26934 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26933,null));var state_26936__$1 = state_26936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26936__$1,inst_26934);
} else
{return null;
}
});})(c__8594__auto__,this$__$1))
;return ((function (switch__8529__auto__,c__8594__auto__,this$__$1){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26941 = [null,null,null,null,null,null,null];(statearr_26941[0] = state_machine__8530__auto__);
(statearr_26941[1] = 1);
return statearr_26941;
});
var state_machine__8530__auto____1 = (function (state_26936){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26936);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26942){if((e26942 instanceof Object))
{var ex__8533__auto__ = e26942;var statearr_26943_26950 = state_26936;(statearr_26943_26950[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26951 = state_26936;
state_26936 = G__26951;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26936){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,this$__$1))
})();var state__8596__auto__ = (function (){var statearr_26944 = f__8595__auto__.call(null);(statearr_26944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_26944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,this$__$1))
);
return c__8594__auto__;
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__26898){var self__ = this;
var this__4124__auto____$1 = this;return (new konserve.store.MemAsyncKeyValueStore(self__.state,self__.tag_table,G__26898,self__.__extmap,self__.__hash));
});
konserve.store.MemAsyncKeyValueStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
konserve.store.MemAsyncKeyValueStore.cljs$lang$type = true;
konserve.store.MemAsyncKeyValueStore.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"konserve.store/MemAsyncKeyValueStore");
});
konserve.store.MemAsyncKeyValueStore.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"konserve.store/MemAsyncKeyValueStore");
});
konserve.store.__GT_MemAsyncKeyValueStore = (function __GT_MemAsyncKeyValueStore(state,tag_table){return (new konserve.store.MemAsyncKeyValueStore(state,tag_table));
});
konserve.store.map__GT_MemAsyncKeyValueStore = (function map__GT_MemAsyncKeyValueStore(G__26900){return (new konserve.store.MemAsyncKeyValueStore(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"tag-table","tag-table",1673488205).cljs$core$IFn$_invoke$arity$1(G__26900),null,cljs.core.dissoc.call(null,G__26900,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"tag-table","tag-table",1673488205))));
});
konserve.store.new_mem_store = (function() {
var new_mem_store = null;
var new_mem_store__0 = (function (){return new_mem_store.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
var new_mem_store__1 = (function (init_atom){return new_mem_store.call(null,init_atom,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
var new_mem_store__2 = (function (init_atom,tag_table){var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__){
return (function (state_26965){var state_val_26966 = (state_26965[1]);if((state_val_26966 === 1))
{var inst_26963 = (new konserve.store.MemAsyncKeyValueStore(init_atom,tag_table));var state_26965__$1 = state_26965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26965__$1,inst_26963);
} else
{return null;
}
});})(c__8594__auto__))
;return ((function (switch__8529__auto__,c__8594__auto__){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_26970 = [null,null,null,null,null,null,null];(statearr_26970[0] = state_machine__8530__auto__);
(statearr_26970[1] = 1);
return statearr_26970;
});
var state_machine__8530__auto____1 = (function (state_26965){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_26965);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e26971){if((e26971 instanceof Object))
{var ex__8533__auto__ = e26971;var statearr_26972_26974 = state_26965;(statearr_26972_26974[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26975 = state_26965;
state_26965 = G__26975;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_26965){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_26965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__))
})();var state__8596__auto__ = (function (){var statearr_26973 = f__8595__auto__.call(null);(statearr_26973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_26973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__))
);
return c__8594__auto__;
});
new_mem_store = function(init_atom,tag_table){
switch(arguments.length){
case 0:
return new_mem_store__0.call(this);
case 1:
return new_mem_store__1.call(this,init_atom);
case 2:
return new_mem_store__2.call(this,init_atom,tag_table);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_mem_store.cljs$core$IFn$_invoke$arity$0 = new_mem_store__0;
new_mem_store.cljs$core$IFn$_invoke$arity$1 = new_mem_store__1;
new_mem_store.cljs$core$IFn$_invoke$arity$2 = new_mem_store__2;
return new_mem_store;
})()
;

//# sourceMappingURL=store.js.map