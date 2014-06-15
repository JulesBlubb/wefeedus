// Compiled by ClojureScript 0.0-2227
goog.provide('hasch.benc');
goog.require('cljs.core');
hasch.benc.IHashCoercion = (function (){var obj29976 = {};return obj29976;
})();
hasch.benc._coerce = (function _coerce(this$,hash_fn){if((function (){var and__3527__auto__ = this$;if(and__3527__auto__)
{return this$.hasch$benc$IHashCoercion$_coerce$arity$2;
} else
{return and__3527__auto__;
}
})())
{return this$.hasch$benc$IHashCoercion$_coerce$arity$2(this$,hash_fn);
} else
{var x__4166__auto__ = (((this$ == null))?null:this$);return (function (){var or__3539__auto__ = (hasch.benc._coerce[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (hasch.benc._coerce["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHashCoercion.-coerce",this$);
}
}
})().call(null,this$,hash_fn);
}
});
hasch.benc.magics = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"inst","inst",1017141688),new cljs.core.Keyword(null,"number","number",4274507451),new cljs.core.Keyword(null,"symbol","symbol",4421347594),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.Keyword(null,"keyword","keyword",4494463323),new cljs.core.Keyword(null,"nil","nil",1014013315),new cljs.core.Keyword(null,"uuid","uuid",1017505581),new cljs.core.Keyword(null,"seq","seq",1014018001),new cljs.core.Keyword(null,"set","set",1014018004),new cljs.core.Keyword(null,"boolean","boolean",1078615962),new cljs.core.Keyword(null,"map","map",1014012110)],[-105,-101,-103,-102,-108,-104,-99,-106,-107,-110,-100,-109]);
/**
* Dumb binary encoding which ensures basic types (incl. collections)
* cannot collide with different content. MAY NOT CHANGE OR BREAKS HASHES.
*/
hasch.benc.benc = (function benc(x){var b = x;if((b < -98))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(b + 98)),-98);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,b);
}
});
/**
* Commutatively coerces elements of collection, padding ensures all bits
* are included in the hash.
*/
hasch.benc.padded_coerce = (function padded_coerce(coll,hash_fn){return cljs.core.reduce.call(null,(function padded_xor(acc,elem){var vec__29981 = (((cljs.core.count.call(null,acc) > cljs.core.count.call(null,elem)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.concat.call(null,elem,cljs.core.repeat.call(null,(cljs.core.count.call(null,acc) - cljs.core.count.call(null,elem)),0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,acc,cljs.core.repeat.call(null,(cljs.core.count.call(null,elem) - cljs.core.count.call(null,acc)),0)),elem], null));var a = cljs.core.nth.call(null,vec__29981,0,null);var b = cljs.core.nth.call(null,vec__29981,1,null);return cljs.core.map.call(null,cljs.core.bit_xor,a,b);
}),cljs.core.List.EMPTY,cljs.core.map.call(null,(function (p1__29977_SHARP_){return hasch.benc._coerce.call(null,p1__29977_SHARP_,hash_fn);
}),cljs.core.seq.call(null,coll)));
});

//# sourceMappingURL=benc.js.map