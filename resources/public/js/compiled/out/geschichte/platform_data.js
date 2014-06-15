// Compiled by ClojureScript 0.0-2227
goog.provide('geschichte.platform_data');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* Internal helper for diff.
*/
geschichte.platform_data.atom_diff = (function atom_diff(a,b){if(cljs.core._EQ_.call(null,a,b))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
* Convert an associative-by-numeric-index collection into
* an equivalent vector, with nil for any missing keys
*/
geschichte.platform_data.vectorize = (function vectorize(m){if(cljs.core.seq.call(null,m))
{return cljs.core.reduce.call(null,(function (result,p__23415){var vec__23416 = p__23415;var k = cljs.core.nth.call(null,vec__23416,0,null);var v = cljs.core.nth.call(null,vec__23416,1,null);return cljs.core.assoc.call(null,result,k,v);
}),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,m)),null)),m);
} else
{return null;
}
});
/**
* Diff associative things a and b, comparing only the key k.
*/
geschichte.platform_data.diff_associative_key = (function diff_associative_key(a,b,k){var va = cljs.core.get.call(null,a,k);var vb = cljs.core.get.call(null,b,k);var vec__23418 = geschichte.platform_data.diff.call(null,va,vb);var a_STAR_ = cljs.core.nth.call(null,vec__23418,0,null);var b_STAR_ = cljs.core.nth.call(null,vec__23418,1,null);var ab = cljs.core.nth.call(null,vec__23418,2,null);var in_a = cljs.core.contains_QMARK_.call(null,a,k);var in_b = cljs.core.contains_QMARK_.call(null,b,k);var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,a_STAR_], true, false):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,b_STAR_], true, false):null),((same)?new cljs.core.PersistentArrayMap.fromArray([k,ab], true, false):null)], null);
});
/**
* Diff associative things a and b, comparing only keys in ks (if supplied).
*/
geschichte.platform_data.diff_associative = (function() {
var diff_associative = null;
var diff_associative__2 = (function (a,b){return diff_associative.call(null,a,b,clojure.set.union.call(null,cljs.core.keys.call(null,a),cljs.core.keys.call(null,b)));
});
var diff_associative__3 = (function (a,b,ks){return cljs.core.reduce.call(null,(function (diff1,diff2){return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.call(null,cljs.core.partial.call(null,geschichte.platform_data.diff_associative_key,a,b),ks));
});
diff_associative = function(a,b,ks){
switch(arguments.length){
case 2:
return diff_associative__2.call(this,a,b);
case 3:
return diff_associative__3.call(this,a,b,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
diff_associative.cljs$core$IFn$_invoke$arity$2 = diff_associative__2;
diff_associative.cljs$core$IFn$_invoke$arity$3 = diff_associative__3;
return diff_associative;
})()
;
geschichte.platform_data.diff_sequential = (function diff_sequential(a,b){if(cljs.core._EQ_.call(null,a,b))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
geschichte.platform_data.diff_set = (function diff_set(a,b){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty.call(null,clojure.set.difference.call(null,a,b)),cljs.core.not_empty.call(null,clojure.set.difference.call(null,b,a)),cljs.core.not_empty.call(null,clojure.set.intersection.call(null,a,b))], null);
});
geschichte.platform_data.EqualityPartition = (function (){var obj23420 = {};return obj23420;
})();
geschichte.platform_data.equality_partition = (function equality_partition(x){if((function (){var and__3527__auto__ = x;if(and__3527__auto__)
{return x.geschichte$platform_data$EqualityPartition$equality_partition$arity$1;
} else
{return and__3527__auto__;
}
})())
{return x.geschichte$platform_data$EqualityPartition$equality_partition$arity$1(x);
} else
{var x__4166__auto__ = (((x == null))?null:x);return (function (){var or__3539__auto__ = (geschichte.platform_data.equality_partition[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (geschichte.platform_data.equality_partition["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EqualityPartition.equality-partition",x);
}
}
})().call(null,x);
}
});
geschichte.platform_data.Diff = (function (){var obj23422 = {};return obj23422;
})();
geschichte.platform_data.diff_similar = (function diff_similar(a,b){if((function (){var and__3527__auto__ = a;if(and__3527__auto__)
{return a.geschichte$platform_data$Diff$diff_similar$arity$2;
} else
{return and__3527__auto__;
}
})())
{return a.geschichte$platform_data$Diff$diff_similar$arity$2(a,b);
} else
{var x__4166__auto__ = (((a == null))?null:a);return (function (){var or__3539__auto__ = (geschichte.platform_data.diff_similar[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (geschichte.platform_data.diff_similar["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Diff.diff-similar",a);
}
}
})().call(null,a,b);
}
});
(geschichte.platform_data.EqualityPartition["_"] = true);
(geschichte.platform_data.equality_partition["_"] = (function (x){if((function (){var G__23423 = x;if(G__23423)
{var bit__4189__auto__ = (G__23423.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__4189__auto__) || (G__23423.cljs$core$IMap$))
{return true;
} else
{if((!G__23423.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__23423);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__23423);
}
})())
{return new cljs.core.Keyword(null,"map","map",1014012110);
} else
{if((function (){var G__23424 = x;if(G__23424)
{var bit__4189__auto__ = (G__23424.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__4189__auto__) || (G__23424.cljs$core$ISet$))
{return true;
} else
{if((!G__23424.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__23424);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__23424);
}
})())
{return new cljs.core.Keyword(null,"set","set",1014018004);
} else
{if((function (){var G__23425 = x;if(G__23425)
{var bit__4189__auto__ = (G__23425.cljs$lang$protocol_mask$partition0$ & 16777216);if((bit__4189__auto__) || (G__23425.cljs$core$ISequential$))
{return true;
} else
{if((!G__23425.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__23425);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__23425);
}
})())
{return new cljs.core.Keyword(null,"sequential","sequential",849892465);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return new cljs.core.Keyword(null,"atom","atom",1016908995);
} else
{return null;
}
}
}
}
}));
(geschichte.platform_data.EqualityPartition["boolean"] = true);
(geschichte.platform_data.equality_partition["boolean"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(geschichte.platform_data.EqualityPartition["function"] = true);
(geschichte.platform_data.equality_partition["function"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(geschichte.platform_data.EqualityPartition["array"] = true);
(geschichte.platform_data.equality_partition["array"] = (function (x){return new cljs.core.Keyword(null,"sequential","sequential",849892465);
}));
(geschichte.platform_data.EqualityPartition["number"] = true);
(geschichte.platform_data.equality_partition["number"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(geschichte.platform_data.EqualityPartition["string"] = true);
(geschichte.platform_data.equality_partition["string"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(geschichte.platform_data.EqualityPartition["null"] = true);
(geschichte.platform_data.equality_partition["null"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(geschichte.platform_data.Diff["_"] = true);
(geschichte.platform_data.diff_similar["_"] = (function (a,b){return (function (){var G__23426 = (((geschichte.platform_data.equality_partition.call(null,a) instanceof cljs.core.Keyword))?geschichte.platform_data.equality_partition.call(null,a).fqn:null);var caseval__23427;
switch (G__23426){
case "map":
caseval__23427=geschichte.platform_data.diff_associative
break;
case "sequential":
caseval__23427=geschichte.platform_data.diff_sequential
break;
case "set":
caseval__23427=geschichte.platform_data.diff_set
break;
case "atom":
caseval__23427=geschichte.platform_data.atom_diff
break;
default:
caseval__23427=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(geschichte.platform_data.equality_partition.call(null,a)))))})()
}
return caseval__23427;
})().call(null,a,b);
}));
(geschichte.platform_data.Diff["boolean"] = true);
(geschichte.platform_data.diff_similar["boolean"] = (function (a,b){return geschichte.platform_data.atom_diff.call(null,a,b);
}));
(geschichte.platform_data.Diff["function"] = true);
(geschichte.platform_data.diff_similar["function"] = (function (a,b){return geschichte.platform_data.atom_diff.call(null,a,b);
}));
(geschichte.platform_data.Diff["array"] = true);
(geschichte.platform_data.diff_similar["array"] = (function (a,b){return geschichte.platform_data.diff_sequential.call(null,a,b);
}));
(geschichte.platform_data.Diff["number"] = true);
(geschichte.platform_data.diff_similar["number"] = (function (a,b){return geschichte.platform_data.atom_diff.call(null,a,b);
}));
(geschichte.platform_data.Diff["string"] = true);
(geschichte.platform_data.diff_similar["string"] = (function (a,b){return geschichte.platform_data.atom_diff.call(null,a,b);
}));
(geschichte.platform_data.Diff["null"] = true);
(geschichte.platform_data.diff_similar["null"] = (function (a,b){return geschichte.platform_data.atom_diff.call(null,a,b);
}));
/**
* Recursively compares a and b, returning a tuple of
* [things-only-in-a things-only-in-b things-in-both].
* Comparison rules:
* 
* * For equal a and b, return [nil nil a].
* * Maps are subdiffed where keys match and values differ.
* * Sets are never subdiffed.
* * All sequential things are treated as associative collections
* by their indexes, with results returned as vectors.
* * Everything else (including strings!) is treated as
* an atom and compared for equality.
*/
geschichte.platform_data.diff = (function diff(a,b){if(cljs.core._EQ_.call(null,a,b))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else
{if(cljs.core._EQ_.call(null,geschichte.platform_data.equality_partition.call(null,a),geschichte.platform_data.equality_partition.call(null,b)))
{return geschichte.platform_data.diff_similar.call(null,a,b);
} else
{return geschichte.platform_data.atom_diff.call(null,a,b);
}
}
});

//# sourceMappingURL=platform_data.js.map