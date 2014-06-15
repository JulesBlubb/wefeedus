// Compiled by ClojureScript 0.0-2227
goog.provide('datascript');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
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
datascript.Datom.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
datascript.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
datascript.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k23481,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__23483 = (((k23481 instanceof cljs.core.Keyword))?k23481.fqn:null);var caseval__23487;
switch (G__23483){
case "added":
caseval__23487=self__.added
break;
case "tx":
caseval__23487=self__.tx
break;
case "v":
caseval__23487=self__.v
break;
case "a":
caseval__23487=self__.a
break;
case "e":
caseval__23487=self__.e
break;
default:
caseval__23487=cljs.core.get.call(null,self__.__extmap,k23481,else__4128__auto__)
}
return caseval__23487;
});
datascript.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#datascript.Datom{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1013904343),self__.e],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",1013904339),self__.a],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",1013907958),self__.tx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",1106564210),self__.added],null))], null),self__.__extmap));
});
datascript.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
datascript.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
datascript.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
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
datascript.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",1013904360),null,new cljs.core.Keyword(null,"added","added",1106564210),null,new cljs.core.Keyword(null,"e","e",1013904343),null,new cljs.core.Keyword(null,"tx","tx",1013907958),null,new cljs.core.Keyword(null,"a","a",1013904339),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
datascript.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__23480){var self__ = this;
var this__4132__auto____$1 = this;var pred__23484 = cljs.core.keyword_identical_QMARK_;var expr__23485 = k__4133__auto__;if(cljs.core.truth_(pred__23484.call(null,new cljs.core.Keyword(null,"e","e",1013904343),expr__23485)))
{return (new datascript.Datom(G__23480,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23484.call(null,new cljs.core.Keyword(null,"a","a",1013904339),expr__23485)))
{return (new datascript.Datom(self__.e,G__23480,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23484.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__23485)))
{return (new datascript.Datom(self__.e,self__.a,G__23480,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23484.call(null,new cljs.core.Keyword(null,"tx","tx",1013907958),expr__23485)))
{return (new datascript.Datom(self__.e,self__.a,self__.v,G__23480,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23484.call(null,new cljs.core.Keyword(null,"added","added",1106564210),expr__23485)))
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,G__23480,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__23480),null));
}
}
}
}
}
});
datascript.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1013904343),self__.e],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",1013904339),self__.a],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",1013907958),self__.tx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",1106564210),self__.added],null))], null),self__.__extmap));
});
datascript.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__23480){var self__ = this;
var this__4124__auto____$1 = this;return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__23480,self__.__extmap,self__.__hash));
});
datascript.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
datascript.Datom.cljs$lang$type = true;
datascript.Datom.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/Datom");
});
datascript.Datom.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"datascript/Datom");
});
datascript.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.Datom(e,a,v,tx,added));
});
datascript.map__GT_Datom = (function map__GT_Datom(G__23482){return (new datascript.Datom(new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(G__23482),new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(G__23482),new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__23482),new cljs.core.Keyword(null,"tx","tx",1013907958).cljs$core$IFn$_invoke$arity$1(G__23482),new cljs.core.Keyword(null,"added","added",1106564210).cljs$core$IFn$_invoke$arity$1(G__23482),null,cljs.core.dissoc.call(null,G__23482,new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"tx","tx",1013907958),new cljs.core.Keyword(null,"added","added",1106564210))));
});
datascript.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.call(null,d__$1.e,o.e)) && (cljs.core._EQ_.call(null,d__$1.a,o.a)) && (cljs.core._EQ_.call(null,d__$1.v,o.v));
});
datascript.Datom.prototype.cljs$core$IHash$ = true;
datascript.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__3539__auto__ = d__$1.__hash;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return d__$1.__hash = cljs.core.hash_coll.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v], null));
}
});
datascript.ISearch = (function (){var obj23489 = {};return obj23489;
})();
datascript._search = (function _search(data,pattern){if((function (){var and__3527__auto__ = data;if(and__3527__auto__)
{return data.datascript$ISearch$_search$arity$2;
} else
{return and__3527__auto__;
}
})())
{return data.datascript$ISearch$_search$arity$2(data,pattern);
} else
{var x__4166__auto__ = (((data == null))?null:data);return (function (){var or__3539__auto__ = (datascript._search[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (datascript._search["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});

/**
* @constructor
* @param {*} schema
* @param {*} ea
* @param {*} av
* @param {*} max_eid
* @param {*} max_tx
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.DB = (function (schema,ea,av,max_eid,max_tx,__meta,__extmap){
this.schema = schema;
this.ea = ea;
this.av = av;
this.max_eid = max_eid;
this.max_tx = max_tx;
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
datascript.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
datascript.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k23494,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__23496 = (((k23494 instanceof cljs.core.Keyword))?k23494.fqn:null);var caseval__23504;
switch (G__23496){
case "max-tx":
caseval__23504=self__.max_tx
break;
case "max-eid":
caseval__23504=self__.max_eid
break;
case "av":
caseval__23504=self__.av
break;
case "ea":
caseval__23504=self__.ea
break;
case "schema":
caseval__23504=self__.schema
break;
default:
caseval__23504=cljs.core.get.call(null,self__.__extmap,k23494,else__4128__auto__)
}
return caseval__23504;
});
datascript.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#datascript.DB{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ea","ea",1013907470),self__.ea],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"av","av",1013907367),self__.av],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),self__.max_tx],null))], null),self__.__extmap));
});
datascript.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
datascript.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
datascript.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
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
datascript.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"schema","schema",4400883987),null,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),null,new cljs.core.Keyword(null,"av","av",1013907367),null,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),null,new cljs.core.Keyword(null,"ea","ea",1013907470),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
datascript.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__23493){var self__ = this;
var this__4132__auto____$1 = this;var pred__23497 = cljs.core.keyword_identical_QMARK_;var expr__23498 = k__4133__auto__;if(cljs.core.truth_(pred__23497.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987),expr__23498)))
{return (new datascript.DB(G__23493,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23497.call(null,new cljs.core.Keyword(null,"ea","ea",1013907470),expr__23498)))
{return (new datascript.DB(self__.schema,G__23493,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23497.call(null,new cljs.core.Keyword(null,"av","av",1013907367),expr__23498)))
{return (new datascript.DB(self__.schema,self__.ea,G__23493,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23497.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),expr__23498)))
{return (new datascript.DB(self__.schema,self__.ea,self__.av,G__23493,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23497.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),expr__23498)))
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,G__23493,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__23493),null));
}
}
}
}
}
});
datascript.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ea","ea",1013907470),self__.ea],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"av","av",1013907367),self__.av],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),self__.max_tx],null))], null),self__.__extmap));
});
datascript.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__23493){var self__ = this;
var this__4124__auto____$1 = this;return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,G__23493,self__.__extmap,self__.__hash));
});
datascript.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
datascript.DB.prototype.datascript$ISearch$ = true;
datascript.DB.prototype.datascript$ISearch$_search$arity$2 = (function (db,p__23500){var self__ = this;
var vec__23501 = p__23500;var e = cljs.core.nth.call(null,vec__23501,0,null);var a = cljs.core.nth.call(null,vec__23501,1,null);var v = cljs.core.nth.call(null,vec__23501,2,null);var tx = cljs.core.nth.call(null,vec__23501,3,null);var added = cljs.core.nth.call(null,vec__23501,4,null);var pattern = vec__23501;var db__$1 = this;var G__23502 = (function (){var G__23503 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(a)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(v)?new cljs.core.Keyword(null,"+","+",1013904285):null)], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285)], null),G__23503))
{return cljs.core.filter.call(null,((function (G__23503,db__$1,vec__23501,e,a,v,tx,added,pattern){
return (function (p1__23490_SHARP_){return cljs.core._EQ_.call(null,v,p1__23490_SHARP_.v);
});})(G__23503,db__$1,vec__23501,e,a,v,tx,added,pattern))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e,a], null)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285)], null),G__23503))
{return cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),a,v], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285),null], null),G__23503))
{return cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e,a], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"+","+",1013904285),null], null),G__23503))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),a], null))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),null,null], null),G__23503))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e], null))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(a)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(v)?new cljs.core.Keyword(null,"+","+",1013904285):null)], null)))));
} else
{return null;
}
}
}
}
}
}
})();var G__23502__$1 = (cljs.core.truth_(tx)?cljs.core.filter.call(null,((function (G__23502,db__$1,vec__23501,e,a,v,tx,added,pattern){
return (function (p1__23491_SHARP_){return cljs.core._EQ_.call(null,tx,p1__23491_SHARP_.tx);
});})(G__23502,db__$1,vec__23501,e,a,v,tx,added,pattern))
,G__23502):G__23502);var G__23502__$2 = (cljs.core.truth_(added)?cljs.core.filter.call(null,((function (G__23502,G__23502__$1,db__$1,vec__23501,e,a,v,tx,added,pattern){
return (function (p1__23492_SHARP_){return cljs.core._EQ_.call(null,added,p1__23492_SHARP_.added);
});})(G__23502,G__23502__$1,db__$1,vec__23501,e,a,v,tx,added,pattern))
,G__23502__$1):G__23502__$1);return G__23502__$2;
});
datascript.DB.cljs$lang$type = true;
datascript.DB.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/DB");
});
datascript.DB.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"datascript/DB");
});
datascript.__GT_DB = (function __GT_DB(schema,ea,av,max_eid,max_tx){return (new datascript.DB(schema,ea,av,max_eid,max_tx));
});
datascript.map__GT_DB = (function map__GT_DB(G__23495){return (new datascript.DB(new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(G__23495),new cljs.core.Keyword(null,"ea","ea",1013907470).cljs$core$IFn$_invoke$arity$1(G__23495),new cljs.core.Keyword(null,"av","av",1013907367).cljs$core$IFn$_invoke$arity$1(G__23495),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841).cljs$core$IFn$_invoke$arity$1(G__23495),new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(G__23495),null,cljs.core.dissoc.call(null,G__23495,new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.Keyword(null,"ea","ea",1013907470),new cljs.core.Keyword(null,"av","av",1013907367),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),new cljs.core.Keyword(null,"max-tx","max-tx",4227685119))));
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.TxReport = (function (db_before,db_after,tx_data,tempids,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
datascript.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k23506,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__23508 = (((k23506 instanceof cljs.core.Keyword))?k23506.fqn:null);var caseval__23512;
switch (G__23508){
case "tempids":
caseval__23512=self__.tempids
break;
case "tx-data":
caseval__23512=self__.tx_data
break;
case "db-after":
caseval__23512=self__.db_after
break;
case "db-before":
caseval__23512=self__.db_before
break;
default:
caseval__23512=cljs.core.get.call(null,self__.__extmap,k23506,else__4128__auto__)
}
return caseval__23512;
});
datascript.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#datascript.TxReport{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",3838846752),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",1658340159),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",3880764886),self__.tempids],null))], null),self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
datascript.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
datascript.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
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
datascript.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",3880764886),null,new cljs.core.Keyword(null,"db-after","db-after",1658340159),null,new cljs.core.Keyword(null,"db-before","db-before",3838846752),null,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
datascript.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__23505){var self__ = this;
var this__4132__auto____$1 = this;var pred__23509 = cljs.core.keyword_identical_QMARK_;var expr__23510 = k__4133__auto__;if(cljs.core.truth_(pred__23509.call(null,new cljs.core.Keyword(null,"db-before","db-before",3838846752),expr__23510)))
{return (new datascript.TxReport(G__23505,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23509.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159),expr__23510)))
{return (new datascript.TxReport(self__.db_before,G__23505,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23509.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),expr__23510)))
{return (new datascript.TxReport(self__.db_before,self__.db_after,G__23505,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23509.call(null,new cljs.core.Keyword(null,"tempids","tempids",3880764886),expr__23510)))
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__23505,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__23505),null));
}
}
}
}
});
datascript.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",3838846752),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",1658340159),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",3880764886),self__.tempids],null))], null),self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__23505){var self__ = this;
var this__4124__auto____$1 = this;return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__23505,self__.__extmap,self__.__hash));
});
datascript.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
datascript.TxReport.cljs$lang$type = true;
datascript.TxReport.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/TxReport");
});
datascript.TxReport.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"datascript/TxReport");
});
datascript.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.map__GT_TxReport = (function map__GT_TxReport(G__23507){return (new datascript.TxReport(new cljs.core.Keyword(null,"db-before","db-before",3838846752).cljs$core$IFn$_invoke$arity$1(G__23507),new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(G__23507),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709).cljs$core$IFn$_invoke$arity$1(G__23507),new cljs.core.Keyword(null,"tempids","tempids",3880764886).cljs$core$IFn$_invoke$arity$1(G__23507),null,cljs.core.dissoc.call(null,G__23507,new cljs.core.Keyword(null,"db-before","db-before",3838846752),new cljs.core.Keyword(null,"db-after","db-after",1658340159),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),new cljs.core.Keyword(null,"tempids","tempids",3880764886))));
});
datascript.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",4400883987),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",1859321681)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",2499141178));
});
datascript.match_tuple = (function match_tuple(tuple,pattern){return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__23514_SHARP_,p2__23513_SHARP_){return ((p2__23513_SHARP_ == null)) || (cljs.core._EQ_.call(null,p1__23514_SHARP_,p2__23513_SHARP_));
}),tuple,pattern));
});
datascript.search = (function search(data,pattern){if((function (){var G__23519 = data;if(G__23519)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__23519.datascript$ISearch$;
}
})()))
{return true;
} else
{if((!G__23519.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,datascript.ISearch,G__23519);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,datascript.ISearch,G__23519);
}
})())
{return datascript._search.call(null,data,pattern);
} else
{if((function (){var or__3539__auto__ = (function (){var G__23521 = data;if(G__23521)
{var bit__4189__auto__ = (G__23521.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__23521.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23521.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23521);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23521);
}
})();if(or__3539__auto__)
{return or__3539__auto__;
} else
{return data instanceof Array;
}
})())
{return cljs.core.filter.call(null,(function (p1__23515_SHARP_){return datascript.match_tuple.call(null,p1__23515_SHARP_,pattern);
}),data);
} else
{return null;
}
}
});
datascript.transact_datom = (function transact_datom(db,datom){if(cljs.core.truth_(datom.added))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),datom.e,datom.a], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),datom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),datom.a,datom.v], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),datom);
} else
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),datom.e,datom.a], null),cljs.core.disj,datom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),datom.a,datom.v], null),cljs.core.disj,datom);
}
});
datascript._resolve_eid = (function _resolve_eid(eid,db){return (db.max_eid - eid);
});
datascript.resolve_eid = (function resolve_eid(db,d){if((d.e < 0))
{return cljs.core.update_in.call(null,d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343)], null),datascript._resolve_eid,db);
} else
{return d;
}
});
datascript.entity__GT_ops = (function entity__GT_ops(db,entity){if(cljs.core.map_QMARK_.call(null,entity))
{var eid = new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(entity);var iter__4264__auto__ = ((function (eid){
return (function iter__23532(s__23533){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__23533__$1 = s__23533;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23533__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__23539 = cljs.core.first.call(null,xs__4624__auto__);var a = cljs.core.nth.call(null,vec__23539,0,null);var vs = cljs.core.nth.call(null,vec__23539,1,null);var iterys__4260__auto__ = ((function (s__23533__$1,vec__23539,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__23534(s__23535){return (new cljs.core.LazySeq(null,((function (s__23533__$1,vec__23539,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__23535__$1 = s__23535;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23535__$1);if(temp__4126__auto____$1)
{var s__23535__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23535__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__23535__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__23537 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__23536 = 0;while(true){
if((i__23536 < size__4263__auto__))
{var v = cljs.core._nth.call(null,c__4262__auto__,i__23536);cljs.core.chunk_append.call(null,b__23537,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),eid,a,v], null));
{
var G__23541 = (i__23536 + 1);
i__23536 = G__23541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23537),iter__23534.call(null,cljs.core.chunk_rest.call(null,s__23535__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23537),null);
}
} else
{var v = cljs.core.first.call(null,s__23535__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),eid,a,v], null),iter__23534.call(null,cljs.core.rest.call(null,s__23535__$2)));
}
} else
{return null;
}
break;
}
});})(s__23533__$1,vec__23539,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__23533__$1,vec__23539,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__4261__auto__ = cljs.core.seq.call(null,iterys__4260__auto__.call(null,(((cljs.core.sequential_QMARK_.call(null,vs)) && (datascript.multival_QMARK_.call(null,db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__4261__auto__)
{return cljs.core.concat.call(null,fs__4261__auto__,iter__23532.call(null,cljs.core.rest.call(null,s__23533__$1)));
} else
{{
var G__23542 = cljs.core.rest.call(null,s__23533__$1);
s__23533__$1 = G__23542;
continue;
}
}
} else
{return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;return iter__4264__auto__.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",1014111942)));
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,entity),new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894)))
{var vec__23540 = entity;var _ = cljs.core.nth.call(null,vec__23540,0,null);var f = cljs.core.nth.call(null,vec__23540,1,null);var args = cljs.core.nthnext.call(null,vec__23540,2);return cljs.core.mapcat.call(null,((function (vec__23540,_,f,args){
return (function (p1__23522_SHARP_){return entity__GT_ops.call(null,db,p1__23522_SHARP_);
});})(vec__23540,_,f,args))
,cljs.core.apply.call(null,f,db,args));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null);
} else
{return null;
}
}
}
});
datascript.op__GT_tx_data = (function op__GT_tx_data(db,p__23545){var vec__23548 = p__23545;var op = cljs.core.nth.call(null,vec__23548,0,null);var e = cljs.core.nth.call(null,vec__23548,1,null);var a = cljs.core.nth.call(null,vec__23548,2,null);var v = cljs.core.nth.call(null,vec__23548,3,null);var tx = (db.max_tx + 1);var G__23549 = (((op instanceof cljs.core.Keyword))?op.fqn:null);var caseval__23550;
switch (G__23549){
case "db.fn/retractEntity":
caseval__23550=(function (){var datoms = datascript._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));return cljs.core.map.call(null,((function (datoms,G__23549,tx,vec__23548,op,e,a,v){
return (function (p1__23544_SHARP_){return cljs.core.assoc.call(null,p1__23544_SHARP_,new cljs.core.Keyword(null,"tx","tx",1013907958),tx,new cljs.core.Keyword(null,"added","added",1106564210),false);
});})(datoms,G__23549,tx,vec__23548,op,e,a,v))
,datoms);
})()
break;
case "db.fn/retractAttribute":
caseval__23550=(function (){var datoms = datascript._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));return cljs.core.map.call(null,((function (datoms,G__23549,tx,vec__23548,op,e,a,v){
return (function (p1__23543_SHARP_){return cljs.core.assoc.call(null,p1__23543_SHARP_,new cljs.core.Keyword(null,"tx","tx",1013907958),tx,new cljs.core.Keyword(null,"added","added",1106564210),false);
});})(datoms,G__23549,tx,vec__23548,op,e,a,v))
,datoms);
})()
break;
case "db/retract":
caseval__23550=(function (){var temp__4126__auto__ = cljs.core.first.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4126__auto__))
{var old_datom = temp__4126__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,false)], null);
} else
{return null;
}
})()
break;
case "db/add":
caseval__23550=((cljs.core._EQ_.call(null,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",2499141178),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",4400883987),a,new cljs.core.Keyword("db","cardinality","db/cardinality",1859321681)], null))))?((cljs.core.empty_QMARK_.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,true)], null):null):(function (){var temp__4124__auto__ = cljs.core.first.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;if(cljs.core.not_EQ_.call(null,old_datom.v,v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,old_datom.v,tx,false),datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
} else
{return null;
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
}
})())
break;
default:
caseval__23550=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op))))})()
}
return caseval__23550;
});
datascript.entity__GT_tx_data = (function entity__GT_tx_data(db,entity){return cljs.core.mapcat.call(null,(function (p1__23551_SHARP_){return datascript.op__GT_tx_data.call(null,db,p1__23551_SHARP_);
}),datascript.entity__GT_ops.call(null,db,entity));
});
datascript._with = (function _with(db,tx_data){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.reduce.call(null,datascript.transact_datom,db,tx_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-tx","max-tx",4227685119)], null),cljs.core.inc),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),cljs.core.reduce.call(null,cljs.core.max,db.max_eid,cljs.core.map.call(null,new cljs.core.Keyword(null,"e","e",1013904343),tx_data)));
});
datascript.parse_where = (function parse_where(where){var source = cljs.core.first.call(null,where);if(((source instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,source)))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.next.call(null,where)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),where], null);
}
});
datascript.bind_symbol = (function bind_symbol(sym,scope){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),sym))
{return null;
} else
{if((sym instanceof cljs.core.Symbol))
{return cljs.core.get.call(null,scope,sym,null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return sym;
} else
{return null;
}
}
}
});
datascript.bind_symbols = (function bind_symbols(form,scope){return cljs.core.map.call(null,(function (p1__23552_SHARP_){return datascript.bind_symbol.call(null,p1__23552_SHARP_,scope);
}),form);
});
datascript.search_datoms = (function search_datoms(source,where,scope){return datascript.search.call(null,datascript.bind_symbol.call(null,source,scope),datascript.bind_symbols.call(null,where,scope));
});
datascript.populate_scope = (function populate_scope(scope,where,datom){return cljs.core.into.call(null,scope,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__23553_SHARP_,p2__23554_SHARP_){if(((p1__23553_SHARP_ instanceof cljs.core.Symbol)) && (!(cljs.core.contains_QMARK_.call(null,scope,p1__23553_SHARP_))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23553_SHARP_,p2__23554_SHARP_], null);
} else
{return null;
}
}),where,datom)));
});
/**
* @param {...*} var_args
*/
datascript._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){var l = cljs.core.count.call(null,xs);return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / 2),xs),cljs.core.drop.call(null,(l / 2),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__23555){
var xs = cljs.core.seq(arglist__23555);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1529891286,null),new cljs.core.Symbol(null,"odd?","odd?",-1637125463,null),new cljs.core.Symbol(null,">=",">=",-1640529544,null),new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"quot","quot",-1637049150,null),new cljs.core.Symbol(null,"false?","false?",1372554549,null),new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null),new cljs.core.Symbol(null,"<=","<=",-1640529606,null),new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"min","min",-1640423413,null),new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"==","==",-1640529575,null),new cljs.core.Symbol(null,"max","max",-1640423651,null),new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"!=","!=",-1640530443,null),new cljs.core.Symbol(null,"dec","dec",-1640432197,null),new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"mod","mod",-1640423237,null),new cljs.core.Symbol(null,"rem","rem",-1640418733,null),new cljs.core.Symbol(null,"even?","even?",-1543640034,null),new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,cljs.core._GT__EQ_,cljs.core._GT_,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,datascript._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.not_EQ_,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.call = (function call(p__23556,scope){var vec__23558 = p__23556;var f = cljs.core.nth.call(null,vec__23558,0,null);var args = cljs.core.nthnext.call(null,vec__23558,1);var bound_args = datascript.bind_symbols.call(null,args,scope);var f__$1 = (function (){var or__3539__auto__ = datascript.built_ins.call(null,f);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return scope.call(null,f);
}
})();return cljs.core.apply.call(null,f__$1,bound_args);
});
datascript.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),pattern))
{return true;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),pattern))
{return cljs.core.sequential_QMARK_.call(null,form);
} else
{if(cljs.core.sequential_QMARK_.call(null,pattern))
{return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__23565){var vec__23566 = p__23565;var pattern_el = cljs.core.nth.call(null,vec__23566,0,null);var form_el = cljs.core.nth.call(null,vec__23566,1,null);return looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.call(null,form,pattern);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return pattern.call(null,form);
} else
{return null;
}
}
}
}
}
});
datascript.collect = (function collect(f,coll){return cljs.core.reduce.call(null,(function (p1__23567_SHARP_,p2__23568_SHARP_){return clojure.set.union.call(null,p1__23567_SHARP_,f.call(null,p2__23568_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,coll);
});
datascript.bind_rule_branch = (function bind_rule_branch(branch,call_args,context){var vec__23576 = branch;var vec__23577 = cljs.core.nth.call(null,vec__23576,0,null);var rule = cljs.core.nth.call(null,vec__23577,0,null);var local_args = cljs.core.nthnext.call(null,vec__23577,1);var body = cljs.core.nthnext.call(null,vec__23576,1);var replacements = cljs.core.zipmap.call(null,local_args,call_args);var seqid = new cljs.core.Keyword(null,"__depth","__depth",2242649685).cljs$core$IFn$_invoke$arity$2(context,0);var bound_body = clojure.walk.postwalk.call(null,((function (vec__23576,vec__23577,rule,local_args,body,replacements,seqid){
return (function (p1__23569_SHARP_){if(((p1__23569_SHARP_ instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,p1__23569_SHARP_)))))
{var or__3539__auto__ = replacements.call(null,p1__23569_SHARP_);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.symbol.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__23569_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__23569_SHARP_;
}
});})(vec__23576,vec__23577,rule,local_args,body,replacements,seqid))
,body);return cljs.core.concat.call(null,(function (){var iter__4264__auto__ = ((function (vec__23576,vec__23577,rule,local_args,body,replacements,seqid,bound_body){
return (function iter__23578(s__23579){return (new cljs.core.LazySeq(null,((function (vec__23576,vec__23577,rule,local_args,body,replacements,seqid,bound_body){
return (function (){var s__23579__$1 = s__23579;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23579__$1);if(temp__4126__auto__)
{var s__23579__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23579__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__23579__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__23581 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__23580 = 0;while(true){
if((i__23580 < size__4263__auto__))
{var prev_call_args = cljs.core._nth.call(null,c__4262__auto__,i__23580);cljs.core.chunk_append.call(null,b__23581,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null)], null),call_args,prev_call_args)], null));
{
var G__23582 = (i__23580 + 1);
i__23580 = G__23582;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23581),iter__23578.call(null,cljs.core.chunk_rest.call(null,s__23579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23581),null);
}
} else
{var prev_call_args = cljs.core.first.call(null,s__23579__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null)], null),call_args,prev_call_args)], null),iter__23578.call(null,cljs.core.rest.call(null,s__23579__$2)));
}
} else
{return null;
}
break;
}
});})(vec__23576,vec__23577,rule,local_args,body,replacements,seqid,bound_body))
,null,null));
});})(vec__23576,vec__23577,rule,local_args,body,replacements,seqid,bound_body))
;return iter__4264__auto__.call(null,cljs.core.get.call(null,context,rule));
})(),bound_body);
});
datascript._q = (function _q(in_PLUS_sources,wheres,scope){while(true){
if(cljs.core.truth_(cljs.core.not_empty.call(null,in_PLUS_sources)))
{var vec__23596 = cljs.core.first.call(null,in_PLUS_sources);var in$ = cljs.core.nth.call(null,vec__23596,0,null);var source = cljs.core.nth.call(null,vec__23596,1,null);var pred__23597 = datascript.looks_like_QMARK_;var expr__23598 = in$;if(cljs.core.truth_(pred__23597.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1640531432,null),new cljs.core.Symbol(null,"...","...",-1640485849,null)], null),expr__23598)))
{return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,pred__23597,expr__23598,vec__23596,in$,source){
return (function (p1__23583_SHARP_){return _q.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,in$),p1__23583_SHARP_], null)], null),cljs.core.next.call(null,in_PLUS_sources)),wheres,scope);
});})(in_PLUS_sources,wheres,scope,pred__23597,expr__23598,vec__23596,in$,source))
,source);
} else
{if(cljs.core.truth_(pred__23597.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null)], null),expr__23598)))
{return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,pred__23597,expr__23598,vec__23596,in$,source){
return (function (p1__23584_SHARP_){return _q.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,in$),p1__23584_SHARP_], null)], null),cljs.core.next.call(null,in_PLUS_sources)),wheres,scope);
});})(in_PLUS_sources,wheres,scope,pred__23597,expr__23598,vec__23596,in$,source))
,source);
} else
{if(cljs.core.truth_(pred__23597.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),expr__23598)))
{{
var G__23605 = cljs.core.concat.call(null,cljs.core.zipmap.call(null,in$,source),cljs.core.next.call(null,in_PLUS_sources));
var G__23606 = wheres;
var G__23607 = scope;
in_PLUS_sources = G__23605;
wheres = G__23606;
scope = G__23607;
continue;
}
} else
{if(cljs.core.truth_(pred__23597.call(null,new cljs.core.Symbol(null,"%","%",-1640531490,null),expr__23598)))
{var rules = ((typeof source === 'string')?cljs.reader.read_string.call(null,source):source);{
var G__23608 = cljs.core.next.call(null,in_PLUS_sources);
var G__23609 = wheres;
var G__23610 = cljs.core.assoc.call(null,scope,new cljs.core.Keyword(null,"__rules","__rules",2256051337),cljs.core.group_by.call(null,cljs.core.ffirst,rules));
in_PLUS_sources = G__23608;
wheres = G__23609;
scope = G__23610;
continue;
}
} else
{if(cljs.core.truth_(pred__23597.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),expr__23598)))
{{
var G__23611 = cljs.core.next.call(null,in_PLUS_sources);
var G__23612 = wheres;
var G__23613 = cljs.core.assoc.call(null,scope,in$,source);
in_PLUS_sources = G__23611;
wheres = G__23612;
scope = G__23613;
continue;
}
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__23598))));
}
}
}
}
}
} else
{if(cljs.core.truth_(cljs.core.not_empty.call(null,wheres)))
{var where = cljs.core.first.call(null,wheres);var temp__4124__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"__rules","__rules",2256051337).cljs$core$IFn$_invoke$arity$1(scope),cljs.core.first.call(null,where));if(cljs.core.truth_(temp__4124__auto__))
{var rule_branches = temp__4124__auto__;var vec__23600 = where;var rule = cljs.core.nth.call(null,vec__23600,0,null);var call_args = cljs.core.nthnext.call(null,vec__23600,1);var next_scope = cljs.core.update_in.call(null,cljs.core.update_in.call(null,scope,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801),rule], null),cljs.core.conj,call_args),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801),new cljs.core.Keyword(null,"__depth","__depth",2242649685)], null),cljs.core.inc);var next_wheres = cljs.core.next.call(null,wheres);return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,vec__23600,rule,call_args,next_scope,next_wheres,rule_branches,temp__4124__auto__,where){
return (function (p1__23585_SHARP_){return _q.call(null,null,cljs.core.concat.call(null,datascript.bind_rule_branch.call(null,p1__23585_SHARP_,call_args,new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801).cljs$core$IFn$_invoke$arity$1(scope)),next_wheres),next_scope);
});})(in_PLUS_sources,wheres,scope,vec__23600,rule,call_args,next_scope,next_wheres,rule_branches,temp__4124__auto__,where))
,rule_branches);
} else
{var pred__23601 = datascript.looks_like_QMARK_;var expr__23602 = where;if(cljs.core.truth_(pred__23601.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null)], null),expr__23602)))
{if(cljs.core.truth_(datascript.call.call(null,cljs.core.first.call(null,where),scope)))
{{
var G__23614 = null;
var G__23615 = cljs.core.next.call(null,wheres);
var G__23616 = scope;
in_PLUS_sources = G__23614;
wheres = G__23615;
scope = G__23616;
continue;
}
} else
{return null;
}
} else
{if(cljs.core.truth_(pred__23601.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),new cljs.core.Symbol(null,"_","_",-1640531432,null)], null),expr__23602)))
{var res = datascript.call.call(null,cljs.core.first.call(null,where),scope);{
var G__23617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,where),res], null)], null);
var G__23618 = cljs.core.next.call(null,wheres);
var G__23619 = scope;
in_PLUS_sources = G__23617;
wheres = G__23618;
scope = G__23619;
continue;
}
} else
{if(cljs.core.truth_(pred__23601.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),expr__23602)))
{var vec__23604 = datascript.parse_where.call(null,where);var source = cljs.core.nth.call(null,vec__23604,0,null);var where__$1 = cljs.core.nth.call(null,vec__23604,1,null);var found = datascript.search_datoms.call(null,source,where__$1,scope);return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,vec__23604,source,where__$1,found,pred__23601,expr__23602,temp__4124__auto__,where){
return (function (p1__23586_SHARP_){return _q.call(null,null,cljs.core.next.call(null,wheres),datascript.populate_scope.call(null,scope,where__$1,p1__23586_SHARP_));
});})(in_PLUS_sources,wheres,scope,vec__23604,source,where__$1,found,pred__23601,expr__23602,temp__4124__auto__,where))
,found);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__23602))));
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([cljs.core.mapv.call(null,scope,new cljs.core.Keyword(null,"__find","__find",3824551179).cljs$core$IFn$_invoke$arity$1(scope))], true);
} else
{return null;
}
}
}
break;
}
});
datascript.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-1351833419,null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",-1640423413,null),(function() {
var G__23621 = null;
var G__23621__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.min,coll);
});
var G__23621__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x < cljs.core.last.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return acc;
} else
{return null;
}
}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__23621 = function(n,coll){
switch(arguments.length){
case 1:
return G__23621__1.call(this,n);
case 2:
return G__23621__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23621;
})()
,new cljs.core.Symbol(null,"max","max",-1640423651,null),(function() {
var G__23622 = null;
var G__23622__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.max,coll);
});
var G__23622__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x > cljs.core.first.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return acc;
} else
{return null;
}
}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__23622 = function(n,coll){
switch(arguments.length){
case 1:
return G__23622__1.call(this,n);
case 2:
return G__23622__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23622;
})()
,new cljs.core.Symbol(null,"sum","sum",-1640417276,null),(function (p1__23620_SHARP_){return cljs.core.reduce.call(null,cljs.core._PLUS_,0,p1__23620_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1637038626,null),(function() {
var G__23623 = null;
var G__23623__1 = (function (coll){return cljs.core.rand_nth.call(null,coll);
});
var G__23623__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_nth.call(null,coll);
})));
});
G__23623 = function(n,coll){
switch(arguments.length){
case 1:
return G__23623__1.call(this,n);
case 2:
return G__23623__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23623;
})()
,new cljs.core.Symbol(null,"sample","sample",1744760675,null),(function (n,coll){return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
}),new cljs.core.Symbol(null,"count","count",-1545680184,null),cljs.core.count], null);
datascript.aggr_group_key = (function aggr_group_key(find,result){return cljs.core.mapv.call(null,(function (val,sym){if(cljs.core.sequential_QMARK_.call(null,sym))
{return null;
} else
{return val;
}
}),result,find);
});
datascript._aggregate = (function _aggregate(find,scope,results){return cljs.core.mapv.call(null,(function (sym,val,i){if(cljs.core.sequential_QMARK_.call(null,sym))
{var vec__23626 = sym;var f = cljs.core.nth.call(null,vec__23626,0,null);var args = cljs.core.nthnext.call(null,vec__23626,1);var vals = cljs.core.map.call(null,((function (vec__23626,f,args){
return (function (p1__23624_SHARP_){return cljs.core.get.call(null,p1__23624_SHARP_,i);
});})(vec__23626,f,args))
,results);var args__$1 = cljs.core.concat.call(null,datascript.bind_symbols.call(null,cljs.core.butlast.call(null,args),scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null));var f__$1 = (function (){var or__3539__auto__ = datascript.built_in_aggregates.call(null,f);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return scope.call(null,f);
}
})();return cljs.core.apply.call(null,f__$1,args__$1);
} else
{return val;
}
}),find,cljs.core.first.call(null,results),cljs.core.range.call(null));
});
datascript.aggregate = (function aggregate(query,scope,results){var find = cljs.core.concat.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query));return cljs.core.mapv.call(null,((function (find){
return (function (p__23630){var vec__23631 = p__23630;var _ = cljs.core.nth.call(null,vec__23631,0,null);var results__$1 = cljs.core.nth.call(null,vec__23631,1,null);return datascript._aggregate.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query),scope,results__$1);
});})(find))
,cljs.core.group_by.call(null,((function (find){
return (function (p1__23627_SHARP_){return datascript.aggr_group_key.call(null,find,p1__23627_SHARP_);
});})(find))
,results));
});
datascript.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__23632 = parsed;
var G__23633 = q;
var G__23634 = cljs.core.next.call(null,qs);
parsed = G__23632;
key = G__23633;
qs = G__23634;
continue;
}
} else
{{
var G__23635 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__23636 = key;
var G__23637 = cljs.core.next.call(null,qs);
parsed = G__23635;
key = G__23636;
qs = G__23637;
continue;
}
}
} else
{return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.q = (function() { 
var q__delegate = function (query,sources){var query__$1 = ((cljs.core.sequential_QMARK_.call(null,query))?datascript.parse_query.call(null,query):query);var ins__GT_sources = cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",1013907607).cljs$core$IFn$_invoke$arity$2(query__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null)], null)),sources);var find = cljs.core.concat.call(null,cljs.core.map.call(null,((function (query__$1,ins__GT_sources){
return (function (p1__23638_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__23638_SHARP_))
{return cljs.core.last.call(null,p1__23638_SHARP_);
} else
{return p1__23638_SHARP_;
}
});})(query__$1,ins__GT_sources))
,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1)),new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query__$1));var results = datascript._q.call(null,ins__GT_sources,new cljs.core.Keyword(null,"where","where",1127002201).cljs$core$IFn$_invoke$arity$1(query__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__find","__find",3824551179),find], null));var G__23641 = results;var G__23641__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query__$1))?cljs.core.mapv.call(null,((function (G__23641,query__$1,ins__GT_sources,find,results){
return (function (p1__23639_SHARP_){return cljs.core.subvec.call(null,p1__23639_SHARP_,0,cljs.core.count.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1)));
});})(G__23641,query__$1,ins__GT_sources,find,results))
,G__23641):G__23641);var G__23641__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1))))?datascript.aggregate.call(null,query__$1,ins__GT_sources,G__23641__$1):G__23641__$1);return G__23641__$2;
};
var q = function (query,var_args){
var sources = null;if (arguments.length > 1) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,query,sources);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__23642){
var query = cljs.core.first(arglist__23642);
var sources = cljs.core.rest(arglist__23642);
return q__delegate(query,sources);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
datascript.entity = (function entity(db,eid){var temp__4126__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),eid], null)));if(cljs.core.truth_(temp__4126__auto__))
{var attrs = temp__4126__auto__;return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",1014111942),eid], null),(function (){var iter__4264__auto__ = ((function (attrs,temp__4126__auto__){
return (function iter__23651(s__23652){return (new cljs.core.LazySeq(null,((function (attrs,temp__4126__auto__){
return (function (){var s__23652__$1 = s__23652;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23652__$1);if(temp__4126__auto____$1)
{var s__23652__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23652__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__23652__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__23654 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__23653 = 0;while(true){
if((i__23653 < size__4263__auto__))
{var vec__23657 = cljs.core._nth.call(null,c__4262__auto__,i__23653);var attr = cljs.core.nth.call(null,vec__23657,0,null);var datoms = cljs.core.nth.call(null,vec__23657,1,null);cljs.core.chunk_append.call(null,b__23654,((datascript.multival_QMARK_.call(null,db,attr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),datoms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.first.call(null,datoms).v], null)));
{
var G__23659 = (i__23653 + 1);
i__23653 = G__23659;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23654),iter__23651.call(null,cljs.core.chunk_rest.call(null,s__23652__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23654),null);
}
} else
{var vec__23658 = cljs.core.first.call(null,s__23652__$2);var attr = cljs.core.nth.call(null,vec__23658,0,null);var datoms = cljs.core.nth.call(null,vec__23658,1,null);return cljs.core.cons.call(null,((datascript.multival_QMARK_.call(null,db,attr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),datoms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.first.call(null,datoms).v], null)),iter__23651.call(null,cljs.core.rest.call(null,s__23652__$2)));
}
} else
{return null;
}
break;
}
});})(attrs,temp__4126__auto__))
,null,null));
});})(attrs,temp__4126__auto__))
;return iter__4264__auto__.call(null,attrs);
})());
} else
{return null;
}
});
datascript.tx0 = 536870912;
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__23660){var vec__23662 = p__23660;var schema = cljs.core.nth.call(null,vec__23662,0,null);return (new datascript.DB(schema,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,0,datascript.tx0));
};
var empty_db = function (var_args){
var p__23660 = null;if (arguments.length > 0) {
  p__23660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__23660);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__23663){
var p__23660 = cljs.core.seq(arglist__23663);
return empty_db__delegate(p__23660);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__23664){var vec__23666 = p__23664;var schema = cljs.core.nth.call(null,vec__23666,0,null);return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",4090152369),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__23664 = null;if (arguments.length > 0) {
  p__23664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__23664);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__23667){
var p__23664 = cljs.core.seq(arglist__23667);
return create_conn__delegate(p__23664);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.transact = (function transact(db,entities){var raw_datoms = cljs.core.mapcat.call(null,(function (p1__23668_SHARP_){return datascript.entity__GT_tx_data.call(null,db,p1__23668_SHARP_);
}),entities);var datoms = cljs.core.map.call(null,((function (raw_datoms){
return (function (p1__23669_SHARP_){return datascript.resolve_eid.call(null,db,p1__23669_SHARP_);
});})(raw_datoms))
,raw_datoms);var tempids = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (raw_datoms,datoms){
return (function (p1__23671_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__23671_SHARP_.e,datascript._resolve_eid.call(null,p1__23671_SHARP_.e,db)],null));
});})(raw_datoms,datoms))
,cljs.core.filter.call(null,((function (raw_datoms,datoms){
return (function (p1__23670_SHARP_){return (p1__23670_SHARP_.e < 0);
});})(raw_datoms,datoms))
,raw_datoms)));return (new datascript.TxReport(db,datascript._with.call(null,db,datoms),datoms,tempids));
});
datascript.with$ = (function with$(db,entities){return new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(datascript.transact.call(null,db,entities));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,entities){var report = cljs.core.atom.call(null,null);cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){var r = datascript.transact.call(null,db,entities);cljs.core.reset_BANG_.call(null,report,r);
return new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
return cljs.core.deref.call(null,report);
});
datascript.transact_BANG_ = (function transact_BANG_(conn,entities){var report = datascript._transact_BANG_.call(null,conn,entities);var seq__23678_23684 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));var chunk__23679_23685 = null;var count__23680_23686 = 0;var i__23681_23687 = 0;while(true){
if((i__23681_23687 < count__23680_23686))
{var vec__23682_23688 = cljs.core._nth.call(null,chunk__23679_23685,i__23681_23687);var __23689 = cljs.core.nth.call(null,vec__23682_23688,0,null);var callback_23690 = cljs.core.nth.call(null,vec__23682_23688,1,null);callback_23690.call(null,report);
{
var G__23691 = seq__23678_23684;
var G__23692 = chunk__23679_23685;
var G__23693 = count__23680_23686;
var G__23694 = (i__23681_23687 + 1);
seq__23678_23684 = G__23691;
chunk__23679_23685 = G__23692;
count__23680_23686 = G__23693;
i__23681_23687 = G__23694;
continue;
}
} else
{var temp__4126__auto___23695 = cljs.core.seq.call(null,seq__23678_23684);if(temp__4126__auto___23695)
{var seq__23678_23696__$1 = temp__4126__auto___23695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23678_23696__$1))
{var c__4295__auto___23697 = cljs.core.chunk_first.call(null,seq__23678_23696__$1);{
var G__23698 = cljs.core.chunk_rest.call(null,seq__23678_23696__$1);
var G__23699 = c__4295__auto___23697;
var G__23700 = cljs.core.count.call(null,c__4295__auto___23697);
var G__23701 = 0;
seq__23678_23684 = G__23698;
chunk__23679_23685 = G__23699;
count__23680_23686 = G__23700;
i__23681_23687 = G__23701;
continue;
}
} else
{var vec__23683_23702 = cljs.core.first.call(null,seq__23678_23696__$1);var __23703 = cljs.core.nth.call(null,vec__23683_23702,0,null);var callback_23704 = cljs.core.nth.call(null,vec__23683_23702,1,null);callback_23704.call(null,report);
{
var G__23705 = cljs.core.next.call(null,seq__23678_23696__$1);
var G__23706 = null;
var G__23707 = 0;
var G__23708 = 0;
seq__23678_23684 = G__23705;
chunk__23679_23685 = G__23706;
count__23680_23686 = G__23707;
i__23681_23687 = G__23708;
continue;
}
}
} else
{}
}
break;
}
return report;
});
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);
return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});

//# sourceMappingURL=datascript.js.map