// Compiled by ClojureScript 0.0-2227
goog.provide('geschichte.repo');
goog.require('cljs.core');
goog.require('geschichte.platform_log');
goog.require('geschichte.platform');
goog.require('geschichte.meta');
goog.require('hasch.core');
goog.require('geschichte.meta');
goog.require('geschichte.platform_log');
goog.require('geschichte.platform');
goog.require('hasch.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* DO NOT REBIND EXCEPT FOR TESTING OR YOU MIGHT CORRUPT DATA.
* Determines unique ids, possibly from a value.
* UUID is defined as public format.
*/
geschichte.repo._STAR_id_fn_STAR_ = hasch.core.uuid;
/**
* DO NOT REBIND EXCEPT FOR TESTING OR YOU MIGHT CORRUPT DATA.
*/
geschichte.repo._STAR_date_fn_STAR_ = geschichte.platform.now;
/**
* Create a (unique) repository for an initial value. Returns a map with
* new metadata and commit value and transaction values.
*/
geschichte.repo.new_repository = (function new_repository(author,description,is_public,init_value,branch){var now = geschichte.repo._STAR_date_fn_STAR_.call(null);var init_id = geschichte.repo._STAR_id_fn_STAR_.call(null,init_value);var init_fn_id = geschichte.repo._STAR_id_fn_STAR_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.Symbol(null,"replace","replace",-546034579,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old","old",-1640421408,null),new cljs.core.Symbol(null,"params","params",1659007807,null)], null),new cljs.core.Symbol(null,"params","params",1659007807,null)));var commit_val = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transactions","transactions",2968026311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_id,init_fn_id], null)], null),new cljs.core.Keyword(null,"parents","parents",4515496059),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ts","ts",1013907953),now,new cljs.core.Keyword(null,"author","author",3902543101),author], null);var commit_id = geschichte.repo._STAR_id_fn_STAR_.call(null,commit_val);var repo_id = geschichte.repo._STAR_id_fn_STAR_.call(null);var new_meta = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.Keyword(null,"pull-requests","pull-requests",4060112318),new cljs.core.Keyword(null,"causal-order","causal-order",3785805338),new cljs.core.Keyword(null,"public","public",4331447771),new cljs.core.Keyword(null,"branches","branches",988497218),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"last-update","last-update",1677528914),new cljs.core.Keyword(null,"id","id",1013907597)],[description,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"http://github.com/ghubber/geschichte",new cljs.core.Keyword(null,"version","version",1365512266),1], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap.fromArray([commit_id,cljs.core.PersistentVector.EMPTY], true, false),is_public,new cljs.core.PersistentArrayMap.fromArray([branch,cljs.core.PersistentHashSet.fromArray([commit_id], true)], true, false),branch,now,repo_id]);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"meta","meta",1017252215),new_meta,new cljs.core.Keyword(null,"transactions","transactions",2968026311),new cljs.core.PersistentArrayMap.fromArray([branch,cljs.core.PersistentVector.EMPTY], true, false),new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890),new cljs.core.Keyword(null,"new-values","new-values",4698094945),new cljs.core.PersistentArrayMap.fromArray([branch,new cljs.core.PersistentArrayMap.fromArray([commit_id,commit_val,init_id,init_value,init_fn_id,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.Symbol(null,"replace","replace",-546034579,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old","old",-1640421408,null),new cljs.core.Symbol(null,"params","params",1659007807,null)], null),new cljs.core.Symbol(null,"params","params",1659007807,null))], true, false)], true, false)], null);
});
/**
* Fork (clone) a remote branch as your working copy.
* Pull in more branches as needed separately.
*/
geschichte.repo.fork = (function fork(remote_meta,branch,is_public){var branch_meta = cljs.core.get.call(null,new cljs.core.Keyword(null,"branches","branches",988497218).cljs$core$IFn$_invoke$arity$1(remote_meta),branch);var meta = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(remote_meta),new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(remote_meta),new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(remote_meta),new cljs.core.Keyword(null,"causal-order","causal-order",3785805338),geschichte.meta.isolate_branch.call(null,remote_meta,branch),new cljs.core.Keyword(null,"branches","branches",988497218),new cljs.core.PersistentArrayMap.fromArray([branch,branch_meta], true, false),new cljs.core.Keyword(null,"head","head",1017102674),branch,new cljs.core.Keyword(null,"last-update","last-update",1677528914),geschichte.repo._STAR_date_fn_STAR_.call(null),new cljs.core.Keyword(null,"pull-requests","pull-requests",4060112318),cljs.core.PersistentArrayMap.EMPTY], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"meta","meta",1017252215),meta,new cljs.core.Keyword(null,"transactions","transactions",2968026311),new cljs.core.PersistentArrayMap.fromArray([branch,cljs.core.PersistentVector.EMPTY], true, false),new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"meta-sub","meta-sub",562278890)], null);
});
/**
* Commits to meta in branch with a value for an ordered set of parents.
* Returns a map with metadata and value+inlined metadata.
*/
geschichte.repo.raw_commit = (function raw_commit(p__29934,parents,author,branch){var map__29938 = p__29934;var map__29938__$1 = ((cljs.core.seq_QMARK_.call(null,map__29938))?cljs.core.apply.call(null,cljs.core.hash_map,map__29938):map__29938);var repo = map__29938__$1;var transactions = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"transactions","transactions",2968026311));var meta = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));var branch_heads = cljs.core.get_in.call(null,meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null));var ts = geschichte.repo._STAR_date_fn_STAR_.call(null);var btrans = cljs.core.get.call(null,transactions,branch);var trans_ids = cljs.core.mapv.call(null,((function (branch_heads,ts,btrans,map__29938,map__29938__$1,repo,transactions,meta){
return (function (p__29939){var vec__29940 = p__29939;var params = cljs.core.nth.call(null,vec__29940,0,null);var trans_fn = cljs.core.nth.call(null,vec__29940,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geschichte.repo._STAR_id_fn_STAR_.call(null,params),geschichte.repo._STAR_id_fn_STAR_.call(null,trans_fn)], null);
});})(branch_heads,ts,btrans,map__29938,map__29938__$1,repo,transactions,meta))
,btrans);var commit_value = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transactions","transactions",2968026311),trans_ids,new cljs.core.Keyword(null,"ts","ts",1013907953),ts,new cljs.core.Keyword(null,"parents","parents",4515496059),parents,new cljs.core.Keyword(null,"author","author",3902543101),author], null);var id = geschichte.repo._STAR_id_fn_STAR_.call(null,commit_value);var new_meta = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"causal-order","causal-order",3785805338),id], null),parents),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null),clojure.set.difference,cljs.core.set.call(null,parents)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null),cljs.core.conj,id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-update","last-update",1677528914)], null),ts);var new_values = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([id,commit_value], true, false),cljs.core.zipmap.call(null,cljs.core.apply.call(null,cljs.core.concat,trans_ids),cljs.core.apply.call(null,cljs.core.concat,btrans)));geschichte.platform_log.debug.call(null,"committing to ",branch,": ",id,commit_value);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,repo,new cljs.core.Keyword(null,"meta","meta",1017252215),new_meta,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transactions","transactions",2968026311),branch], null),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-values","new-values",4698094945),branch], null),new_values);
});
/**
* Commits to meta in branch with a value for a set of parents.
* Returns a map with metadata and value+inlined metadata.
*/
geschichte.repo.commit = (function commit(repo,author,branch){var heads = cljs.core.get_in.call(null,repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"branches","branches",988497218),branch], null));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,heads),1))
{return geschichte.repo.raw_commit.call(null,repo,cljs.core.vec.call(null,heads),author,branch);
} else
{var msg = ("Branch has multiple heads:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(heads));geschichte.platform_log.info.call(null,msg);
throw msg;
}
});
/**
* Create a new branch with parent.
*/
geschichte.repo.branch = (function branch(p__29941,name,parent){var map__29943 = p__29941;var map__29943__$1 = ((cljs.core.seq_QMARK_.call(null,map__29943))?cljs.core.apply.call(null,cljs.core.hash_map,map__29943):map__29943);var repo = map__29943__$1;var meta = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));if(cljs.core.truth_(cljs.core.get_in.call(null,meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),name], null))))
{var msg_29944 = ("Branch already exists:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));geschichte.platform_log.info.call(null,msg_29944);
throw msg_29944;
} else
{}
var new_meta = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),name], null),cljs.core.PersistentHashSet.fromArray([parent], true)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-update","last-update",1677528914)], null),geschichte.repo._STAR_date_fn_STAR_.call(null));return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,repo,new cljs.core.Keyword(null,"meta","meta",1017252215),new_meta,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transactions","transactions",2968026311),name], null),cljs.core.PersistentVector.EMPTY);
});
/**
* Checkout a branch.
*/
geschichte.repo.checkout = (function checkout(p__29945,branch){var map__29947 = p__29945;var map__29947__$1 = ((cljs.core.seq_QMARK_.call(null,map__29947))?cljs.core.apply.call(null,cljs.core.hash_map,map__29947):map__29947);var repo = map__29947__$1;var meta = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));var new_meta = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.Keyword(null,"head","head",1017102674),branch,new cljs.core.Keyword(null,"last-update","last-update",1677528914),geschichte.repo._STAR_date_fn_STAR_.call(null));return cljs.core.assoc.call(null,repo,new cljs.core.Keyword(null,"meta","meta",1017252215),new_meta,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007));
});
/**
* Checks whether branch has multiple heads.
*/
geschichte.repo.multiple_branch_heads_QMARK_ = (function multiple_branch_heads_QMARK_(meta,branch){return (cljs.core.count.call(null,cljs.core.get_in.call(null,meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null))) > 1);
});
/**
* Pull all commits into branch from remote-tip (only its ancestors).
*/
geschichte.repo.pull = (function pull(p__29948,branch,remote_meta,remote_tip){var map__29951 = p__29948;var map__29951__$1 = ((cljs.core.seq_QMARK_.call(null,map__29951))?cljs.core.apply.call(null,cljs.core.hash_map,map__29951):map__29951);var repo = map__29951__$1;var meta = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));var branch_heads = cljs.core.get_in.call(null,meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null));var map__29952 = geschichte.meta.lowest_common_ancestors.call(null,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(meta),branch_heads,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(remote_meta),cljs.core.PersistentHashSet.fromArray([remote_tip], true));var map__29952__$1 = ((cljs.core.seq_QMARK_.call(null,map__29952))?cljs.core.apply.call(null,cljs.core.hash_map,map__29952):map__29952);var returnpaths_b = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"returnpaths-b","returnpaths-b",4615709573));var cut = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"cut","cut",1014003124));var new_meta = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"causal-order","causal-order",3785805338)], null),geschichte.meta.merge_ancestors,cut,returnpaths_b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null),clojure.set.difference,branch_heads),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null),cljs.core.conj,remote_tip);return cljs.core.assoc.call(null,repo,new cljs.core.Keyword(null,"meta","meta",1017252215),new_meta,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"meta-pub","meta-pub",562276007));
});
/**
* Constructs a vector of heads. You can reorder them.
*/
geschichte.repo.merge_heads = (function merge_heads(meta_a,branch_a,meta_b,branch_b){var heads_a = cljs.core.get_in.call(null,meta_a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch_a], null));var heads_b = cljs.core.get_in.call(null,meta_b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch_b], null));return cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.concat.call(null,heads_a,heads_b)));
});
/**
* Merge a repository either with itself, or with remote metadata and
* optionally supply the order in which parent commits should be
* supplied. Otherwise see merge-heads how to get and manipulate them.
*/
geschichte.repo.merge = (function() {
var merge = null;
var merge__3 = (function (p__29953,author,branch){var map__29959 = p__29953;var map__29959__$1 = ((cljs.core.seq_QMARK_.call(null,map__29959))?cljs.core.apply.call(null,cljs.core.hash_map,map__29959):map__29959);var repo = map__29959__$1;var meta = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return merge.call(null,repo,author,branch,meta);
});
var merge__4 = (function (p__29954,author,branch,remote_meta){var map__29960 = p__29954;var map__29960__$1 = ((cljs.core.seq_QMARK_.call(null,map__29960))?cljs.core.apply.call(null,cljs.core.hash_map,map__29960):map__29960);var repo = map__29960__$1;var meta = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return merge.call(null,repo,author,branch,remote_meta,geschichte.repo.merge_heads.call(null,meta,branch,remote_meta,branch));
});
var merge__5 = (function (p__29955,author,branch,remote_meta,heads){var map__29961 = p__29955;var map__29961__$1 = ((cljs.core.seq_QMARK_.call(null,map__29961))?cljs.core.apply.call(null,cljs.core.hash_map,map__29961):map__29961);var repo = map__29961__$1;var meta = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));var source_heads = cljs.core.get_in.call(null,meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branches","branches",988497218),branch], null));var lcas = geschichte.meta.lowest_common_ancestors.call(null,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(meta),source_heads,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(remote_meta),heads);var new_causal = geschichte.meta.merge_ancestors.call(null,new cljs.core.Keyword(null,"causal-order","causal-order",3785805338).cljs$core$IFn$_invoke$arity$1(meta),new cljs.core.Keyword(null,"cut","cut",1014003124).cljs$core$IFn$_invoke$arity$1(lcas),new cljs.core.Keyword(null,"returnpaths-b","returnpaths-b",4615709573).cljs$core$IFn$_invoke$arity$1(lcas));return geschichte.repo.raw_commit.call(null,cljs.core.assoc_in.call(null,repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"causal-order","causal-order",3785805338)], null),new_causal),heads,author,branch);
});
merge = function(p__29955,author,branch,remote_meta,heads){
switch(arguments.length){
case 3:
return merge__3.call(this,p__29955,author,branch);
case 4:
return merge__4.call(this,p__29955,author,branch,remote_meta);
case 5:
return merge__5.call(this,p__29955,author,branch,remote_meta,heads);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$3 = merge__3;
merge.cljs$core$IFn$_invoke$arity$4 = merge__4;
merge.cljs$core$IFn$_invoke$arity$5 = merge__5;
return merge;
})()
;

//# sourceMappingURL=repo.js.map