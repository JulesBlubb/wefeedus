// Compiled by ClojureScript 0.0-2227
goog.provide('geschichte.meta');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
geschichte.meta.track_returnpaths = (function track_returnpaths(returnpaths,heads,meta){return cljs.core.reduce.call(null,(function (returnpaths__$1,head){return cljs.core.reduce.call(null,(function (returnpaths__$2,parent){return cljs.core.update_in.call(null,returnpaths__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent], null),(function (p1__23361_SHARP_,p2__23362_SHARP_){return cljs.core.conj.call(null,(function (){var or__3539__auto__ = p1__23361_SHARP_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),p2__23362_SHARP_);
}),head);
}),returnpaths__$1,meta.call(null,head));
}),returnpaths,heads);
});
geschichte.meta.init_returnpath = (function init_returnpath(heads){return cljs.core.reduce.call(null,(function (p1__23363_SHARP_,p2__23364_SHARP_){return cljs.core.assoc.call(null,p1__23363_SHARP_,p2__23364_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}),cljs.core.PersistentArrayMap.EMPTY,heads);
});
/**
* Naive online BFS implementation. Assumes no cycles exist.
*/
geschichte.meta.lowest_common_ancestors = (function() {
var lowest_common_ancestors = null;
var lowest_common_ancestors__4 = (function (meta_a,heads_a,meta_b,heads_b){var returnpaths_a = geschichte.meta.init_returnpath.call(null,heads_a);var returnpaths_b = geschichte.meta.init_returnpath.call(null,heads_b);var cut = clojure.set.intersection.call(null,heads_a,heads_b);if(!(cljs.core.empty_QMARK_.call(null,cut)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cut","cut",1014003124),cut,new cljs.core.Keyword(null,"returnpaths-a","returnpaths-a",4615709572),returnpaths_a,new cljs.core.Keyword(null,"returnpaths-b","returnpaths-b",4615709573),returnpaths_b], null);
} else
{return lowest_common_ancestors.call(null,meta_a,heads_a,returnpaths_a,meta_b,heads_b,returnpaths_b);
}
});
var lowest_common_ancestors__6 = (function (meta_a,heads_a,returnpaths_a,meta_b,heads_b,returnpaths_b){while(true){
var new_returnpaths_a = geschichte.meta.track_returnpaths.call(null,returnpaths_a,heads_a,meta_a);var new_returnpaths_b = geschichte.meta.track_returnpaths.call(null,returnpaths_b,heads_b,meta_b);var cut = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_returnpaths_a)),cljs.core.set.call(null,cljs.core.keys.call(null,new_returnpaths_b)));if((!(cljs.core.empty_QMARK_.call(null,cut))) || ((cljs.core.empty_QMARK_.call(null,heads_a)) && (cljs.core.empty_QMARK_.call(null,heads_b))))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cut","cut",1014003124),cut,new cljs.core.Keyword(null,"returnpaths-a","returnpaths-a",4615709572),new_returnpaths_a,new cljs.core.Keyword(null,"returnpaths-b","returnpaths-b",4615709573),new_returnpaths_b], null);
} else
{var new_heads_a = cljs.core.set.call(null,cljs.core.mapcat.call(null,meta_a,heads_a));var new_heads_b = cljs.core.set.call(null,cljs.core.mapcat.call(null,meta_b,heads_b));{
var G__23365 = meta_a;
var G__23366 = new_heads_a;
var G__23367 = new_returnpaths_a;
var G__23368 = meta_b;
var G__23369 = new_heads_b;
var G__23370 = new_returnpaths_b;
meta_a = G__23365;
heads_a = G__23366;
returnpaths_a = G__23367;
meta_b = G__23368;
heads_b = G__23369;
returnpaths_b = G__23370;
continue;
}
}
break;
}
});
lowest_common_ancestors = function(meta_a,heads_a,returnpaths_a,meta_b,heads_b,returnpaths_b){
switch(arguments.length){
case 4:
return lowest_common_ancestors__4.call(this,meta_a,heads_a,returnpaths_a,meta_b);
case 6:
return lowest_common_ancestors__6.call(this,meta_a,heads_a,returnpaths_a,meta_b,heads_b,returnpaths_b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lowest_common_ancestors.cljs$core$IFn$_invoke$arity$4 = lowest_common_ancestors__4;
lowest_common_ancestors.cljs$core$IFn$_invoke$arity$6 = lowest_common_ancestors__6;
return lowest_common_ancestors;
})()
;
geschichte.meta.merge_parent = (function merge_parent(missing_returnpaths,meta,parent){return cljs.core.reduce.call(null,(function (meta__$1,child){return cljs.core.update_in.call(null,meta__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null),(function (p1__23371_SHARP_,p2__23372_SHARP_){return cljs.core.conj.call(null,(function (){var or__3539__auto__ = p1__23371_SHARP_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),p2__23372_SHARP_);
}),parent);
}),meta,missing_returnpaths.call(null,parent));
});
/**
* Use returnpaths and cut from lowest-common-ancestors to merge alien
* ancestor paths into meta data.
*/
geschichte.meta.merge_ancestors = (function merge_ancestors(meta,cut,missing_returnpaths){while(true){
var new_meta = cljs.core.reduce.call(null,cljs.core.partial.call(null,geschichte.meta.merge_parent,missing_returnpaths),meta,cut);var new_cut = cljs.core.mapcat.call(null,missing_returnpaths,cut);if(cljs.core.empty_QMARK_.call(null,new_cut))
{return new_meta;
} else
{{
var G__23373 = new_meta;
var G__23374 = new_cut;
var G__23375 = missing_returnpaths;
meta = G__23373;
cut = G__23374;
missing_returnpaths = G__23375;
continue;
}
}
break;
}
});
/**
* Isolate a branch's metadata causal-order.
*/
geschichte.meta.isolate_branch = (function() {
var isolate_branch = null;
var isolate_branch__2 = (function (meta,branch){return isolate_branch.call(null,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(meta),cljs.core.get.call(null,new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(meta),branch),cljs.core.PersistentArrayMap.EMPTY);
});
var isolate_branch__3 = (function (causal_order,cut,branch_meta){while(true){
if(cljs.core.empty_QMARK_.call(null,cut))
{return branch_meta;
} else
{{
var G__23376 = causal_order;
var G__23377 = cljs.core.set.call(null,cljs.core.mapcat.call(null,causal_order,cut));
var G__23378 = cljs.core.merge.call(null,branch_meta,cljs.core.select_keys.call(null,causal_order,cut));
causal_order = G__23376;
cut = G__23377;
branch_meta = G__23378;
continue;
}
}
break;
}
});
isolate_branch = function(causal_order,cut,branch_meta){
switch(arguments.length){
case 2:
return isolate_branch__2.call(this,causal_order,cut);
case 3:
return isolate_branch__3.call(this,causal_order,cut,branch_meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isolate_branch.cljs$core$IFn$_invoke$arity$2 = isolate_branch__2;
isolate_branch.cljs$core$IFn$_invoke$arity$3 = isolate_branch__3;
return isolate_branch;
})()
;
geschichte.meta.old_heads = (function old_heads(causal,heads){return cljs.core.set.call(null,(function (){var iter__4264__auto__ = (function iter__23393(s__23394){return (new cljs.core.LazySeq(null,(function (){var s__23394__$1 = s__23394;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23394__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var a = cljs.core.first.call(null,xs__4624__auto__);var iterys__4260__auto__ = ((function (s__23394__$1,a,xs__4624__auto__,temp__4126__auto__){
return (function iter__23395(s__23396){return (new cljs.core.LazySeq(null,((function (s__23394__$1,a,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__23396__$1 = s__23396;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23396__$1);if(temp__4126__auto____$1)
{var s__23396__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23396__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__23396__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__23398 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__23397 = 0;while(true){
if((i__23397 < size__4263__auto__))
{var b = cljs.core._nth.call(null,c__4262__auto__,i__23397);cljs.core.chunk_append.call(null,b__23398,((cljs.core.not_EQ_.call(null,a,b))?(function (){var map__23405 = geschichte.meta.lowest_common_ancestors.call(null,causal,cljs.core.PersistentHashSet.fromArray([a], true),causal,cljs.core.PersistentHashSet.fromArray([b], true));var map__23405__$1 = ((cljs.core.seq_QMARK_.call(null,map__23405))?cljs.core.apply.call(null,cljs.core.hash_map,map__23405):map__23405);var returnpaths_b = cljs.core.get.call(null,map__23405__$1,new cljs.core.Keyword(null,"returnpaths-b","returnpaths-b",4615709573));var returnpaths_a = cljs.core.get.call(null,map__23405__$1,new cljs.core.Keyword(null,"returnpaths-a","returnpaths-a",4615709572));var keys_a = cljs.core.set.call(null,cljs.core.keys.call(null,returnpaths_a));var keys_b = cljs.core.set.call(null,cljs.core.keys.call(null,returnpaths_b));if(cljs.core.truth_(keys_b.call(null,a)))
{return a;
} else
{if(cljs.core.truth_(keys_a.call(null,b)))
{return b;
} else
{return null;
}
}
})():null));
{
var G__23407 = (i__23397 + 1);
i__23397 = G__23407;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23398),iter__23395.call(null,cljs.core.chunk_rest.call(null,s__23396__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23398),null);
}
} else
{var b = cljs.core.first.call(null,s__23396__$2);return cljs.core.cons.call(null,((cljs.core.not_EQ_.call(null,a,b))?(function (){var map__23406 = geschichte.meta.lowest_common_ancestors.call(null,causal,cljs.core.PersistentHashSet.fromArray([a], true),causal,cljs.core.PersistentHashSet.fromArray([b], true));var map__23406__$1 = ((cljs.core.seq_QMARK_.call(null,map__23406))?cljs.core.apply.call(null,cljs.core.hash_map,map__23406):map__23406);var returnpaths_b = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"returnpaths-b","returnpaths-b",4615709573));var returnpaths_a = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"returnpaths-a","returnpaths-a",4615709572));var keys_a = cljs.core.set.call(null,cljs.core.keys.call(null,returnpaths_a));var keys_b = cljs.core.set.call(null,cljs.core.keys.call(null,returnpaths_b));if(cljs.core.truth_(keys_b.call(null,a)))
{return a;
} else
{if(cljs.core.truth_(keys_a.call(null,b)))
{return b;
} else
{return null;
}
}
})():null),iter__23395.call(null,cljs.core.rest.call(null,s__23396__$2)));
}
} else
{return null;
}
break;
}
});})(s__23394__$1,a,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__23394__$1,a,xs__4624__auto__,temp__4126__auto__))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,heads));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__23393.call(null,cljs.core.rest.call(null,s__23394__$1)));
} else
{{
var G__23408 = cljs.core.rest.call(null,s__23394__$1);
s__23394__$1 = G__23408;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,heads);
})());
});
geschichte.meta.remove_ancestors = (function remove_ancestors(causal,heads_a,heads_b){if(cljs.core.truth_(causal))
{var to_remove = geschichte.meta.old_heads.call(null,causal,clojure.set.union.call(null,heads_a,heads_b));return cljs.core.set.call(null,cljs.core.filter.call(null,((function (to_remove){
return (function (p1__23409_SHARP_){return cljs.core.not.call(null,to_remove.call(null,p1__23409_SHARP_));
});})(to_remove))
,clojure.set.union.call(null,heads_a,heads_b)));
} else
{return null;
}
});
/**
* Updates current meta-data with other-meta metadata. Idempotent and commutative.
*/
geschichte.meta.update = (function update(p__23410,other_meta){var map__23412 = p__23410;var map__23412__$1 = ((cljs.core.seq_QMARK_.call(null,map__23412))?cljs.core.apply.call(null,cljs.core.hash_map,map__23412):map__23412);var meta = map__23412__$1;var pull_requests = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"pull-requests","pull-requests",4060112318));var last_update = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"last-update","last-update",1677528914));var head = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"head","head",1017102674));var branches = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"branches","branches",988497218));var causal_order = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338));var public$ = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"public","public",4331447771));var schema = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"schema","schema",4400883987));var description = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"description","description",3584325486));var id = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"id","id",1013907597));var newer = (new cljs.core.Keyword(null,"last-update","last-update",1677528914).cljs$core$IFn$_invoke$arity$1(other_meta).getTime() > last_update.getTime());var new_causal = cljs.core.merge.call(null,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(other_meta),causal_order);var new_meta = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"last-update","last-update",1677528914),((newer)?new cljs.core.Keyword(null,"last-update","last-update",1677528914).cljs$core$IFn$_invoke$arity$1(other_meta):last_update),new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"description","description",3584325486),(function (){var or__3539__auto__ = description;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(other_meta);
}
})(),new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.Keyword(null,"version","version",1365512266),(function (){var x__3846__auto__ = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(schema);var y__3847__auto__ = (function (){var or__3539__auto__ = new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(other_meta));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(schema);
}
})();return ((x__3846__auto__ > y__3847__auto__) ? x__3846__auto__ : y__3847__auto__);
})()], null),new cljs.core.Keyword(null,"head","head",1017102674),((newer)?(function (){var or__3539__auto__ = new cljs.core.Keyword(null,"head","head",1017102674).cljs$core$IFn$_invoke$arity$1(other_meta);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return head;
}
})():(function (){var or__3539__auto__ = head;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"head","head",1017102674).cljs$core$IFn$_invoke$arity$1(other_meta);
}
})()),new cljs.core.Keyword(null,"branches","branches",988497218),cljs.core.merge_with.call(null,cljs.core.partial.call(null,geschichte.meta.remove_ancestors,new_causal),branches,new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(other_meta)),new cljs.core.Keyword(null,"public","public",4331447771),(function (){var or__3539__auto__ = public$;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = new cljs.core.Keyword(null,"public","public",4331447771).cljs$core$IFn$_invoke$arity$1(other_meta);if(cljs.core.truth_(or__3539__auto____$1))
{return or__3539__auto____$1;
} else
{return false;
}
}
})(),new cljs.core.Keyword(null,"pull-requests","pull-requests",4060112318),cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pull-requests","pull-requests",4060112318).cljs$core$IFn$_invoke$arity$1(other_meta),pull_requests)], null);if(cljs.core.truth_(new_causal))
{return cljs.core.assoc.call(null,new_meta,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338),new_causal);
} else
{return new_meta;
}
});

//# sourceMappingURL=meta.js.map