// Compiled by ClojureScript 0.0-2227
goog.provide('konserve.literals');
goog.require('cljs.core');

/**
* @constructor
* @param {*} tag
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
konserve.literals.TaggedLiteral = (function (tag,value,__meta,__extmap){
this.tag = tag;
this.value = value;
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
konserve.literals.TaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
konserve.literals.TaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k23473,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__23475 = (((k23473 instanceof cljs.core.Keyword))?k23473.fqn:null);var caseval__23479;
switch (G__23475){
case "value":
caseval__23479=self__.value
break;
case "tag":
caseval__23479=self__.tag
break;
default:
caseval__23479=cljs.core.get.call(null,self__.__extmap,k23473,else__4128__auto__)
}
return caseval__23479;
});
konserve.literals.TaggedLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#konserve.literals.TaggedLiteral{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null))], null),self__.__extmap));
});
konserve.literals.TaggedLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
konserve.literals.TaggedLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new konserve.literals.TaggedLiteral(self__.tag,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});
konserve.literals.TaggedLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
konserve.literals.TaggedLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
konserve.literals.TaggedLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
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
konserve.literals.TaggedLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),null,new cljs.core.Keyword(null,"tag","tag",1014018828),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new konserve.literals.TaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
konserve.literals.TaggedLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__23472){var self__ = this;
var this__4132__auto____$1 = this;var pred__23476 = cljs.core.keyword_identical_QMARK_;var expr__23477 = k__4133__auto__;if(cljs.core.truth_(pred__23476.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828),expr__23477)))
{return (new konserve.literals.TaggedLiteral(G__23472,self__.value,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23476.call(null,new cljs.core.Keyword(null,"value","value",1125876963),expr__23477)))
{return (new konserve.literals.TaggedLiteral(self__.tag,G__23472,self__.__meta,self__.__extmap,null));
} else
{return (new konserve.literals.TaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__23472),null));
}
}
});
konserve.literals.TaggedLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null))], null),self__.__extmap));
});
konserve.literals.TaggedLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__23472){var self__ = this;
var this__4124__auto____$1 = this;return (new konserve.literals.TaggedLiteral(self__.tag,self__.value,G__23472,self__.__extmap,self__.__hash));
});
konserve.literals.TaggedLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
konserve.literals.TaggedLiteral.cljs$lang$type = true;
konserve.literals.TaggedLiteral.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"konserve.literals/TaggedLiteral");
});
konserve.literals.TaggedLiteral.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"konserve.literals/TaggedLiteral");
});
konserve.literals.__GT_TaggedLiteral = (function __GT_TaggedLiteral(tag,value){return (new konserve.literals.TaggedLiteral(tag,value));
});
konserve.literals.map__GT_TaggedLiteral = (function map__GT_TaggedLiteral(G__23474){return (new konserve.literals.TaggedLiteral(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(G__23474),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__23474),null,cljs.core.dissoc.call(null,G__23474,new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"value","value",1125876963))));
});

//# sourceMappingURL=literals.js.map