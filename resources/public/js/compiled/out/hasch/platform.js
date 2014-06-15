// Compiled by ClojureScript 0.0-2227
goog.provide('hasch.platform');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hasch.benc');
goog.require('hasch.benc');
goog.require('clojure.string');
goog.require('goog.crypt.Sha1');
/**
* (uuid4) => new-uuid
* Arguments and Values:
* new-uuid --- new type 4 (pseudo randomly generated) cljs.core/UUID instance.
* Description:
* Returns pseudo randomly generated UUID,
* like: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx as per http://www.ietf.org/rfc/rfc4122.txt.
* Examples:
* (uuid4) => #uuid "305e764d-b451-47ae-a90d-5db782ac1f2e"
* (type (uuid4)) => cljs.core/UUID
*/
hasch.platform.uuid4 = (function uuid4(){var f = (function f(){return cljs.core.rand_int.call(null,16).toString(16);
});
var g = (function g(){return (8 | (3 & cljs.core.rand_int.call(null,15))).toString(16);
});
return (new cljs.core.UUID((new goog.string.StringBuffer()).append(f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),"-4",f.call(null),f.call(null),f.call(null),"-",g.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null)).toString()));
});
/**
* Return a SHA-1 hash in signed byte encoding
* for an input sequence in the same encoding.
*/
hasch.platform.sha_1 = (function sha_1(bytes){var md = (new goog.crypt.Sha1());var sarr = cljs.core.into_array.call(null,cljs.core.map.call(null,((function (md){
return (function (p1__29962_SHARP_){if((p1__29962_SHARP_ < 0))
{return (p1__29962_SHARP_ + 256);
} else
{return p1__29962_SHARP_;
}
});})(md))
,bytes));md.update(sarr);
return cljs.core.map.call(null,((function (md,sarr){
return (function (p1__29963_SHARP_){if((p1__29963_SHARP_ > 127))
{return (p1__29963_SHARP_ - 256);
} else
{return p1__29963_SHARP_;
}
});})(md,sarr))
,md.digest());
});
hasch.platform.byte__GT_hex = (function byte__GT_hex(b){return ((b & 255) + 256).toString(16).substring(1);
});
hasch.platform.hash__GT_str = (function hash__GT_str(bytes){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hasch.platform.byte__GT_hex,bytes));
});
hasch.platform.benc = (function benc(n){if((n < -98))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(n + 98)),-98);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,n);
}
});
/**
* Encodes a string as UTF-8 in an unsigned byte value seq.
*/
hasch.platform.utf8 = (function utf8(s){return cljs.core.mapcat.call(null,(function (pos){var c = s.charCodeAt(pos);if((c <= 127))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c & 255)], null);
} else
{if((c <= 2047))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(192 | (c >> 6)),(128 | (c & 63))], null);
} else
{if((c <= 65535))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(224 | (c >> 12)),(128 | ((c >> 6) & 63)),(128 | (c & 63))], null);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{var j = (function (){var j = 4;while(true){
if(((c >> (j * 6)) > 0))
{{
var G__29965 = (j + 1);
j = G__29965;
continue;
}
} else
{return j;
}
break;
}
})();var init = (((65280 >> j) & 255) | (c >> (6 * (j - 1))));return cljs.core.conj.call(null,cljs.core.map.call(null,((function (j,init,c){
return (function (p1__29964_SHARP_){return (128 | ((c >> (6 * p1__29964_SHARP_)) & 63));
});})(j,init,c))
,cljs.core.reverse.call(null,cljs.core.range.call(null,(j - 1)))),init);
} else
{return null;
}
}
}
}
}),cljs.core.range.call(null,s.length));
});
hasch.platform.signed_byte = (function signed_byte(b){if((b > 127))
{return (b - 256);
} else
{return b;
}
});
hasch.platform.encode = (function encode(input){return cljs.core.mapcat.call(null,hasch.platform.benc,cljs.core.map.call(null,hasch.platform.signed_byte,hasch.platform.utf8.call(null,input)));
});
/**
* Generates a uuid5 from a sha-1 hash byte sequence.
* Our hash version is coded in first 2 bits.
*/
hasch.platform.uuid5 = (function uuid5(sha_hash){var vec__29967 = sha_hash;var hb1 = cljs.core.nth.call(null,vec__29967,0,null);var hb2 = cljs.core.nth.call(null,vec__29967,1,null);var hb3 = cljs.core.nth.call(null,vec__29967,2,null);var hb4 = cljs.core.nth.call(null,vec__29967,3,null);var hb5 = cljs.core.nth.call(null,vec__29967,4,null);var hb6 = cljs.core.nth.call(null,vec__29967,5,null);var hb7 = cljs.core.nth.call(null,vec__29967,6,null);var hb8 = cljs.core.nth.call(null,vec__29967,7,null);var lb1 = cljs.core.nth.call(null,vec__29967,8,null);var lb2 = cljs.core.nth.call(null,vec__29967,9,null);var lb3 = cljs.core.nth.call(null,vec__29967,10,null);var lb4 = cljs.core.nth.call(null,vec__29967,11,null);var lb5 = cljs.core.nth.call(null,vec__29967,12,null);var lb6 = cljs.core.nth.call(null,vec__29967,13,null);var lb7 = cljs.core.nth.call(null,vec__29967,14,null);var lb8 = cljs.core.nth.call(null,vec__29967,15,null);return (new cljs.core.UUID(((function (vec__29967,hb1,hb2,hb3,hb4,hb5,hb6,hb7,hb8,lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8){
return (function (s){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,8,s)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,4,cljs.core.drop.call(null,8,s))))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,4,cljs.core.drop.call(null,12,s))))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,4,cljs.core.drop.call(null,16,s))))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,20,s))));
});})(vec__29967,hb1,hb2,hb3,hb4,hb5,hb6,hb7,hb8,lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8))
.call(null,hasch.platform.hash__GT_str.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [((hb1 & ~(1 << 7)) & ~(1 << 6)),hb2,hb3,hb4,hb5,hb6,(80 | (95 & hb7)),hb8,((lb1 | (1 << 7)) & ~(1 << 6)),lb2,lb3,lb4,lb5,lb6,lb7,lb8], null)))));
});
(hasch.benc.IHashCoercion["_"] = true);
(hasch.benc._coerce["_"] = (function (this$,hash_fn){if((function (){var G__29970 = this$;if(G__29970)
{var bit__4189__auto__ = (G__29970.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4189__auto__) || (G__29970.cljs$core$ISeq$))
{return true;
} else
{if((!G__29970.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29970);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29970);
}
})())
{return hash_fn.call(null,cljs.core.conj.call(null,cljs.core.mapcat.call(null,(function (p1__29968_SHARP_){return hasch.benc._coerce.call(null,p1__29968_SHARP_,hash_fn);
}),this$),new cljs.core.Keyword(null,"seq","seq",1014018001).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics)));
} else
{if((function (){var G__29971 = this$;if(G__29971)
{var bit__4189__auto__ = (G__29971.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__4189__auto__) || (G__29971.cljs$core$IVector$))
{return true;
} else
{if((!G__29971.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__29971);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__29971);
}
})())
{return hash_fn.call(null,cljs.core.conj.call(null,cljs.core.mapcat.call(null,(function (p1__29969_SHARP_){return hasch.benc._coerce.call(null,p1__29969_SHARP_,hash_fn);
}),this$),new cljs.core.Keyword(null,"vector","vector",4488484021).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics)));
} else
{if((function (){var G__29972 = this$;if(G__29972)
{var bit__4189__auto__ = (G__29972.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__4189__auto__) || (G__29972.cljs$core$IRecord$))
{return true;
} else
{if((!G__29972.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__29972);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__29972);
}
})())
{return hash_fn.call(null,cljs.core.concat.call(null,hasch.platform.encode.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,this$)),"/","."),"-","_")),hasch.benc.padded_coerce.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this$),hash_fn)));
} else
{if((function (){var G__29973 = this$;if(G__29973)
{var bit__4189__auto__ = (G__29973.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__4189__auto__) || (G__29973.cljs$core$IMap$))
{return true;
} else
{if((!G__29973.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__29973);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__29973);
}
})())
{return hash_fn.call(null,cljs.core.conj.call(null,hasch.benc.padded_coerce.call(null,this$,hash_fn),new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics)));
} else
{if((function (){var G__29974 = this$;if(G__29974)
{var bit__4189__auto__ = (G__29974.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__4189__auto__) || (G__29974.cljs$core$ISet$))
{return true;
} else
{if((!G__29974.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__29974);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__29974);
}
})())
{return hash_fn.call(null,cljs.core.conj.call(null,hasch.benc.padded_coerce.call(null,this$,hash_fn),new cljs.core.Keyword(null,"set","set",1014018004).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw "Hashing not supported for:";
} else
{return null;
}
}
}
}
}
}
}));
cljs.core.Keyword.prototype.hasch$benc$IHashCoercion$ = true;
cljs.core.Keyword.prototype.hasch$benc$IHashCoercion$_coerce$arity$2 = (function (this$,hash_fn){var this$__$1 = this;return cljs.core.conj.call(null,cljs.core.mapcat.call(null,hasch.platform.benc,cljs.core.concat.call(null,hasch.platform.encode.call(null,(function (){var or__3539__auto__ = cljs.core.namespace.call(null,this$__$1);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "";
}
})()),hasch.platform.encode.call(null,cljs.core.name.call(null,this$__$1)))),new cljs.core.Keyword(null,"keyword","keyword",4494463323).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
});
cljs.core.Symbol.prototype.hasch$benc$IHashCoercion$ = true;
cljs.core.Symbol.prototype.hasch$benc$IHashCoercion$_coerce$arity$2 = (function (this$,hash_fn){var this$__$1 = this;return cljs.core.conj.call(null,cljs.core.mapcat.call(null,hasch.platform.benc,cljs.core.concat.call(null,hasch.platform.encode.call(null,(function (){var or__3539__auto__ = cljs.core.namespace.call(null,this$__$1);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "";
}
})()),hasch.platform.encode.call(null,cljs.core.name.call(null,this$__$1)))),new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
});
cljs.core.UUID.prototype.hasch$benc$IHashCoercion$ = true;
cljs.core.UUID.prototype.hasch$benc$IHashCoercion$_coerce$arity$2 = (function (this$,hash_fn){var this$__$1 = this;return cljs.core.conj.call(null,hasch.platform.encode.call(null,this$__$1.uuid),new cljs.core.Keyword(null,"uuid","uuid",1017505581).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
});
Date.prototype.hasch$benc$IHashCoercion$ = true;
Date.prototype.hasch$benc$IHashCoercion$_coerce$arity$2 = (function (this$,hash_fn){var this$__$1 = this;return cljs.core.conj.call(null,hasch.platform.encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.getTime()))),new cljs.core.Keyword(null,"inst","inst",1017141688).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
});
(hasch.benc.IHashCoercion["number"] = true);
(hasch.benc._coerce["number"] = (function (this$,hash_fn){return cljs.core.conj.call(null,hasch.platform.encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
}));
(hasch.benc.IHashCoercion["string"] = true);
(hasch.benc._coerce["string"] = (function (this$,hash_fn){return cljs.core.conj.call(null,hasch.platform.encode.call(null,this$),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
}));
(hasch.benc.IHashCoercion["boolean"] = true);
(hasch.benc._coerce["boolean"] = (function (this$,hash_fn){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(this$)?1:0)),new cljs.core.Keyword(null,"boolean","boolean",1078615962).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
}));
(hasch.benc.IHashCoercion["null"] = true);
(hasch.benc._coerce["null"] = (function (this$,hash_fn){return cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"nil","nil",1014013315).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics));
}));
hasch.platform.boolean_QMARK_ = (function boolean_QMARK_(val){return cljs.core._EQ_.call(null,cljs.core.type.call(null,val),Boolean);
});
hasch.platform.uuid_QMARK_ = (function uuid_QMARK_(val){return cljs.core._EQ_.call(null,cljs.core.type.call(null,val),cljs.core.UUID);
});
hasch.platform.date_QMARK_ = (function date_QMARK_(val){return cljs.core._EQ_.call(null,cljs.core.type.call(null,val),Date);
});

//# sourceMappingURL=platform.js.map