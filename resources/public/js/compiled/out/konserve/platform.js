// Compiled by ClojureScript 0.0-2227
goog.provide('konserve.platform');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('konserve.literals');
goog.require('konserve.protocols');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('konserve.literals');
goog.require('konserve.protocols');
/**
* @param {...*} var_args
*/
konserve.platform.log = (function() { 
var log__delegate = function (s){return console.log(cljs.core.apply.call(null,cljs.core.str,s));
};
var log = function (var_args){
var s = null;if (arguments.length > 0) {
  s = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,s);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__23439){
var s = cljs.core.seq(arglist__23439);
return log__delegate(s);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
konserve.platform.error_handler = (function error_handler(topic,res,e){console.log(topic,e);
cljs.core.async.close_BANG_.call(null,res);
throw e;
});
konserve.literals.TaggedLiteral.prototype.cljs$core$IPrintWithWriter$ = true;
konserve.literals.TaggedLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write.call(null,writer,("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(coll__$1))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(coll__$1))));
});
konserve.platform.read_string_safe = (function read_string_safe(tag_table,s){var _STAR_tag_table_STAR_23442 = cljs.reader._STAR_tag_table_STAR_;var _STAR_default_data_reader_fn_STAR_23443 = cljs.reader._STAR_default_data_reader_fn_STAR_;try{cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,tag_table,cljs.core.select_keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["inst",null,"queue",null,"uuid",null], null), null))));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,((function (_STAR_tag_table_STAR_23442,_STAR_default_data_reader_fn_STAR_23443){
return (function (tag,val){return (new konserve.literals.TaggedLiteral(tag,val));
});})(_STAR_tag_table_STAR_23442,_STAR_default_data_reader_fn_STAR_23443))
);
return cljs.reader.read_string.call(null,s);
}finally {cljs.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR_23443;
cljs.reader._STAR_tag_table_STAR_ = _STAR_tag_table_STAR_23442;
}});

/**
* @constructor
* @param {*} db
* @param {*} store_name
* @param {*} tag_table
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
konserve.platform.IndexedDBKeyValueStore = (function (db,store_name,tag_table,__meta,__extmap){
this.db = db;
this.store_name = store_name;
this.tag_table = tag_table;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k23445,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__23447 = (((k23445 instanceof cljs.core.Keyword))?k23445.fqn:null);var caseval__23454;
switch (G__23447){
case "tag-table":
caseval__23454=self__.tag_table
break;
case "store-name":
caseval__23454=self__.store_name
break;
case "db":
caseval__23454=self__.db
break;
default:
caseval__23454=cljs.core.get.call(null,self__.__extmap,k23445,else__4128__auto__)
}
return caseval__23454;
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#konserve.platform.IndexedDBKeyValueStore{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",1013907440),self__.db],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store-name","store-name",1889467241),self__.store_name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),self__.tag_table],null))], null),self__.__extmap));
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new konserve.platform.IndexedDBKeyValueStore(self__.db,self__.store_name,self__.tag_table,self__.__meta,self__.__extmap,self__.__hash));
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
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
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",1013907440),null,new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),null,new cljs.core.Keyword(null,"store-name","store-name",1889467241),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new konserve.platform.IndexedDBKeyValueStore(self__.db,self__.store_name,self__.tag_table,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__23444){var self__ = this;
var this__4132__auto____$1 = this;var pred__23448 = cljs.core.keyword_identical_QMARK_;var expr__23449 = k__4133__auto__;if(cljs.core.truth_(pred__23448.call(null,new cljs.core.Keyword(null,"db","db",1013907440),expr__23449)))
{return (new konserve.platform.IndexedDBKeyValueStore(G__23444,self__.store_name,self__.tag_table,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23448.call(null,new cljs.core.Keyword(null,"store-name","store-name",1889467241),expr__23449)))
{return (new konserve.platform.IndexedDBKeyValueStore(self__.db,G__23444,self__.tag_table,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23448.call(null,new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),expr__23449)))
{return (new konserve.platform.IndexedDBKeyValueStore(self__.db,self__.store_name,G__23444,self__.__meta,self__.__extmap,null));
} else
{return (new konserve.platform.IndexedDBKeyValueStore(self__.db,self__.store_name,self__.tag_table,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__23444),null));
}
}
}
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",1013907440),self__.db],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store-name","store-name",1889467241),self__.store_name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag-table","tag-table",1673488205),self__.tag_table],null))], null),self__.__extmap));
});
konserve.platform.IndexedDBKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$ = true;
konserve.platform.IndexedDBKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$_get_in$arity$2 = (function (this$,key_vec){var self__ = this;
var this$__$1 = this;var vec__23451 = key_vec;var fkey = cljs.core.nth.call(null,vec__23451,0,null);var rkey = cljs.core.nthnext.call(null,vec__23451,1);var res = cljs.core.async.chan.call(null);var tx = self__.db.transaction([self__.store_name]);var obj_store = tx.objectStore(self__.store_name);var req = obj_store.get(cljs.core.pr_str.call(null,fkey));req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot get-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
req.onsuccess = ((function (vec__23451,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function (e){var temp__4126__auto___23455 = req.result;if(cljs.core.truth_(temp__4126__auto___23455))
{var r_23456 = temp__4126__auto___23455;cljs.core.async.put_BANG_.call(null,res,cljs.core.get_in.call(null,konserve.platform.read_string_safe.call(null,cljs.core.deref.call(null,self__.tag_table),(r_23456["edn_value"])),rkey));
} else
{}
return cljs.core.async.close_BANG_.call(null,res);
});})(vec__23451,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
return res;
});
konserve.platform.IndexedDBKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$_assoc_in$arity$3 = (function (this$,key_vec,value){var self__ = this;
var this$__$1 = this;var vec__23452 = key_vec;var fkey = cljs.core.nth.call(null,vec__23452,0,null);var rkey = cljs.core.nthnext.call(null,vec__23452,1);var res = cljs.core.async.chan.call(null);var tx = self__.db.transaction([self__.store_name],"readwrite");var obj_store = tx.objectStore(self__.store_name);var req = obj_store.get(cljs.core.pr_str.call(null,fkey));req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot get for assoc-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
req.onsuccess = ((function (vec__23452,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function read_old(e){var old = (function (){var temp__4126__auto__ = req.result;if(cljs.core.truth_(temp__4126__auto__))
{var r = temp__4126__auto__;return konserve.platform.read_string_safe.call(null,cljs.core.deref.call(null,self__.tag_table),(r["edn_value"]));
} else
{return null;
}
})();var up_req = (cljs.core.truth_((function (){var or__3539__auto__ = value;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return !(cljs.core.empty_QMARK_.call(null,rkey));
}
})())?obj_store.put(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),cljs.core.pr_str.call(null,fkey),new cljs.core.Keyword(null,"edn_value","edn_value",3004870739),cljs.core.pr_str.call(null,((!(cljs.core.empty_QMARK_.call(null,rkey)))?cljs.core.assoc_in.call(null,old,rkey,value):value))], null))):obj_store.delete(cljs.core.pr_str.call(null,fkey)));up_req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot put for assoc-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
return up_req.onsuccess = ((function (old,up_req,vec__23452,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function (e__$1){return cljs.core.async.close_BANG_.call(null,res);
});})(old,up_req,vec__23452,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
});})(vec__23452,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
return res;
});
konserve.platform.IndexedDBKeyValueStore.prototype.konserve$protocols$IEDNAsyncKeyValueStore$_update_in$arity$3 = (function (this$,key_vec,up_fn){var self__ = this;
var this$__$1 = this;var vec__23453 = key_vec;var fkey = cljs.core.nth.call(null,vec__23453,0,null);var rkey = cljs.core.nthnext.call(null,vec__23453,1);var res = cljs.core.async.chan.call(null);var tx = self__.db.transaction([self__.store_name],"readwrite");var obj_store = tx.objectStore(self__.store_name);var req = obj_store.get(cljs.core.pr_str.call(null,fkey));req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot get for update-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
req.onsuccess = ((function (vec__23453,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function read_old(e){var old = (function (){var temp__4126__auto__ = req.result;if(cljs.core.truth_(temp__4126__auto__))
{var r = temp__4126__auto__;return konserve.platform.read_string_safe.call(null,cljs.core.deref.call(null,self__.tag_table),(r["edn_value"]));
} else
{return null;
}
})();var new$ = ((!(cljs.core.empty_QMARK_.call(null,rkey)))?cljs.core.update_in.call(null,old,rkey,up_fn):up_fn.call(null,old));var up_req = (cljs.core.truth_(new$)?obj_store.put(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),cljs.core.pr_str.call(null,fkey),new cljs.core.Keyword(null,"edn_value","edn_value",3004870739),cljs.core.pr_str.call(null,new$)], null))):obj_store.delete(cljs.core.pr_str.call(null,fkey)));up_req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot put for update-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
return up_req.onsuccess = ((function (old,new$,up_req,vec__23453,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function (e__$1){cljs.core.async.put_BANG_.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,old,rkey),cljs.core.get_in.call(null,new$,rkey)], null));
return cljs.core.async.close_BANG_.call(null,res);
});})(old,new$,up_req,vec__23453,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
});})(vec__23453,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
return res;
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__23444){var self__ = this;
var this__4124__auto____$1 = this;return (new konserve.platform.IndexedDBKeyValueStore(self__.db,self__.store_name,self__.tag_table,G__23444,self__.__extmap,self__.__hash));
});
konserve.platform.IndexedDBKeyValueStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
konserve.platform.IndexedDBKeyValueStore.cljs$lang$type = true;
konserve.platform.IndexedDBKeyValueStore.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"konserve.platform/IndexedDBKeyValueStore");
});
konserve.platform.IndexedDBKeyValueStore.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"konserve.platform/IndexedDBKeyValueStore");
});
konserve.platform.__GT_IndexedDBKeyValueStore = (function __GT_IndexedDBKeyValueStore(db,store_name,tag_table){return (new konserve.platform.IndexedDBKeyValueStore(db,store_name,tag_table));
});
konserve.platform.map__GT_IndexedDBKeyValueStore = (function map__GT_IndexedDBKeyValueStore(G__23446){return (new konserve.platform.IndexedDBKeyValueStore(new cljs.core.Keyword(null,"db","db",1013907440).cljs$core$IFn$_invoke$arity$1(G__23446),new cljs.core.Keyword(null,"store-name","store-name",1889467241).cljs$core$IFn$_invoke$arity$1(G__23446),new cljs.core.Keyword(null,"tag-table","tag-table",1673488205).cljs$core$IFn$_invoke$arity$1(G__23446),null,cljs.core.dissoc.call(null,G__23446,new cljs.core.Keyword(null,"db","db",1013907440),new cljs.core.Keyword(null,"store-name","store-name",1889467241),new cljs.core.Keyword(null,"tag-table","tag-table",1673488205))));
});

/**
* @constructor
* @param {*} db
* @param {*} store_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
konserve.platform.IndexedDBJSONKeyValueStore = (function (db,store_name,__meta,__extmap){
this.db = db;
this.store_name = store_name;
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
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4125__auto__,k__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;return cljs.core._lookup.call(null,this__4125__auto____$1,k__4126__auto__,null);
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4127__auto__,k23458,else__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;var G__23460 = (((k23458 instanceof cljs.core.Keyword))?k23458.fqn:null);var caseval__23467;
switch (G__23460){
case "store-name":
caseval__23467=self__.store_name
break;
case "db":
caseval__23467=self__.db
break;
default:
caseval__23467=cljs.core.get.call(null,self__.__extmap,k23458,else__4128__auto__)
}
return caseval__23467;
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4139__auto__,writer__4140__auto__,opts__4141__auto__){var self__ = this;
var this__4139__auto____$1 = this;var pr_pair__4142__auto__ = ((function (this__4139__auto____$1){
return (function (keyval__4143__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,cljs.core.pr_writer,""," ","",opts__4141__auto__,keyval__4143__auto__);
});})(this__4139__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4140__auto__,pr_pair__4142__auto__,"#konserve.platform.IndexedDBJSONKeyValueStore{",", ","}",opts__4141__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",1013907440),self__.db],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store-name","store-name",1889467241),self__.store_name],null))], null),self__.__extmap));
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return self__.__meta;
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;return (new konserve.platform.IndexedDBJSONKeyValueStore(self__.db,self__.store_name,self__.__meta,self__.__extmap,self__.__hash));
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4129__auto__){var self__ = this;
var this__4129__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4120__auto__){var self__ = this;
var this__4120__auto____$1 = this;var h__3950__auto__ = self__.__hash;if(!((h__3950__auto__ == null)))
{return h__3950__auto__;
} else
{var h__3950__auto____$1 = cljs.core.hash_imap.call(null,this__4120__auto____$1);self__.__hash = h__3950__auto____$1;
return h__3950__auto____$1;
}
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4121__auto__,other__4122__auto__){var self__ = this;
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
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4134__auto__,k__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",1013907440),null,new cljs.core.Keyword(null,"store-name","store-name",1889467241),null], null), null),k__4135__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4134__auto____$1),self__.__meta),k__4135__auto__);
} else
{return (new konserve.platform.IndexedDBJSONKeyValueStore(self__.db,self__.store_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4135__auto__)),null));
}
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.konserve$protocols$IJSONAsyncKeyValueStore$ = true;
konserve.platform.IndexedDBJSONKeyValueStore.prototype.konserve$protocols$IJSONAsyncKeyValueStore$_jget_in$arity$2 = (function (this$,key_vec){var self__ = this;
var this$__$1 = this;var vec__23461 = key_vec;var fkey = cljs.core.nth.call(null,vec__23461,0,null);var rkey = cljs.core.nthnext.call(null,vec__23461,1);var res = cljs.core.async.chan.call(null);var tx = self__.db.transaction([self__.store_name]);var obj_store = tx.objectStore(self__.store_name);var req = obj_store.get(cljs.core.pr_str.call(null,fkey));req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot get-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
req.onsuccess = ((function (vec__23461,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function (e){var temp__4126__auto___23468 = req.result;if(cljs.core.truth_(temp__4126__auto___23468))
{var r_23469 = temp__4126__auto___23468;cljs.core.async.put_BANG_.call(null,res,cljs.core.get_in.call(null,cljs.core.js__GT_clj.call(null,(r_23469["json_value"])),rkey));
} else
{}
return cljs.core.async.close_BANG_.call(null,res);
});})(vec__23461,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
return res;
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.konserve$protocols$IJSONAsyncKeyValueStore$_jassoc_in$arity$3 = (function (this$,key_vec,value){var self__ = this;
var this$__$1 = this;var vec__23462 = key_vec;var fkey = cljs.core.nth.call(null,vec__23462,0,null);var rkey = cljs.core.nthnext.call(null,vec__23462,1);var res = cljs.core.async.chan.call(null);var tx = self__.db.transaction([self__.store_name],"readwrite");var obj_store = tx.objectStore(self__.store_name);var req = obj_store.get(cljs.core.pr_str.call(null,fkey));req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot get for assoc-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
req.onsuccess = ((function (vec__23462,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function read_old(e){var old = (function (){var temp__4126__auto__ = req.result;if(cljs.core.truth_(temp__4126__auto__))
{var r = temp__4126__auto__;return cljs.core.js__GT_clj.call(null,(r["json_value"]));
} else
{return null;
}
})();var up_req = (cljs.core.truth_((function (){var or__3539__auto__ = value;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return !(cljs.core.empty_QMARK_.call(null,rkey));
}
})())?obj_store.put({"json_value": ((!(cljs.core.empty_QMARK_.call(null,rkey)))?cljs.core.clj__GT_js.call(null,cljs.core.assoc_in.call(null,old,rkey,value)):value), "key": cljs.core.pr_str.call(null,fkey)}):obj_store.delete(cljs.core.pr_str.call(null,fkey)));up_req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot put for assoc-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
return up_req.onsuccess = ((function (old,up_req,vec__23462,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function (e__$1){return cljs.core.async.close_BANG_.call(null,res);
});})(old,up_req,vec__23462,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
});})(vec__23462,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
return res;
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.konserve$protocols$IJSONAsyncKeyValueStore$_jupdate_in$arity$3 = (function (this$,key_vec,up_fn){var self__ = this;
var this$__$1 = this;var vec__23463 = key_vec;var fkey = cljs.core.nth.call(null,vec__23463,0,null);var rkey = cljs.core.nthnext.call(null,vec__23463,1);var res = cljs.core.async.chan.call(null);var tx = self__.db.transaction([self__.store_name],"readwrite");var obj_store = tx.objectStore(self__.store_name);var req = obj_store.get(cljs.core.pr_str.call(null,fkey));req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot get for update-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
req.onsuccess = ((function (vec__23463,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function read_old(e){var old = (function (){var temp__4126__auto__ = req.result;if(cljs.core.truth_(temp__4126__auto__))
{var r = temp__4126__auto__;return (r["json_value"]);
} else
{return null;
}
})();var new$ = ((!(cljs.core.empty_QMARK_.call(null,rkey)))?cljs.core.update_in.call(null,old,rkey,up_fn):up_fn.call(null,old));var up_req = (cljs.core.truth_(new$)?obj_store.put(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),cljs.core.pr_str.call(null,fkey),new cljs.core.Keyword(null,"json_value","json_value",1810794188),cljs.core.pr_str.call(null,new$)], null))):obj_store.delete(cljs.core.pr_str.call(null,fkey)));up_req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,("cannot put for update-in"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)),res);
return up_req.onsuccess = ((function (old,new$,up_req,vec__23463,fkey,rkey,res,tx,obj_store,req,this$__$1){
return (function (e__$1){cljs.core.async.put_BANG_.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,old,rkey),cljs.core.get_in.call(null,new$,rkey)], null));
return cljs.core.async.close_BANG_.call(null,res);
});})(old,new$,up_req,vec__23463,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
});})(vec__23463,fkey,rkey,res,tx,obj_store,req,this$__$1))
;
return res;
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4132__auto__,k__4133__auto__,G__23457){var self__ = this;
var this__4132__auto____$1 = this;var pred__23464 = cljs.core.keyword_identical_QMARK_;var expr__23465 = k__4133__auto__;if(cljs.core.truth_(pred__23464.call(null,new cljs.core.Keyword(null,"db","db",1013907440),expr__23465)))
{return (new konserve.platform.IndexedDBJSONKeyValueStore(G__23457,self__.store_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23464.call(null,new cljs.core.Keyword(null,"store-name","store-name",1889467241),expr__23465)))
{return (new konserve.platform.IndexedDBJSONKeyValueStore(self__.db,G__23457,self__.__meta,self__.__extmap,null));
} else
{return (new konserve.platform.IndexedDBJSONKeyValueStore(self__.db,self__.store_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4133__auto__,G__23457),null));
}
}
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",1013907440),self__.db],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store-name","store-name",1889467241),self__.store_name],null))], null),self__.__extmap));
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4124__auto__,G__23457){var self__ = this;
var this__4124__auto____$1 = this;return (new konserve.platform.IndexedDBJSONKeyValueStore(self__.db,self__.store_name,G__23457,self__.__extmap,self__.__hash));
});
konserve.platform.IndexedDBJSONKeyValueStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4130__auto__,entry__4131__auto__){var self__ = this;
var this__4130__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4131__auto__))
{return cljs.core._assoc.call(null,this__4130__auto____$1,cljs.core._nth.call(null,entry__4131__auto__,0),cljs.core._nth.call(null,entry__4131__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4130__auto____$1,entry__4131__auto__);
}
});
konserve.platform.IndexedDBJSONKeyValueStore.cljs$lang$type = true;
konserve.platform.IndexedDBJSONKeyValueStore.cljs$lang$ctorPrSeq = (function (this__4159__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"konserve.platform/IndexedDBJSONKeyValueStore");
});
konserve.platform.IndexedDBJSONKeyValueStore.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__){return cljs.core._write.call(null,writer__4160__auto__,"konserve.platform/IndexedDBJSONKeyValueStore");
});
konserve.platform.__GT_IndexedDBJSONKeyValueStore = (function __GT_IndexedDBJSONKeyValueStore(db,store_name){return (new konserve.platform.IndexedDBJSONKeyValueStore(db,store_name));
});
konserve.platform.map__GT_IndexedDBJSONKeyValueStore = (function map__GT_IndexedDBJSONKeyValueStore(G__23459){return (new konserve.platform.IndexedDBJSONKeyValueStore(new cljs.core.Keyword(null,"db","db",1013907440).cljs$core$IFn$_invoke$arity$1(G__23459),new cljs.core.Keyword(null,"store-name","store-name",1889467241).cljs$core$IFn$_invoke$arity$1(G__23459),null,cljs.core.dissoc.call(null,G__23459,new cljs.core.Keyword(null,"db","db",1013907440),new cljs.core.Keyword(null,"store-name","store-name",1889467241))));
});
/**
* Create an IndexedDB backed edn store with tag-table if you need custom types/records,
* e.g. {'namespace.Symbol (fn [val] ...)}
*/
konserve.platform.new_indexeddb_edn_store = (function() {
var new_indexeddb_edn_store = null;
var new_indexeddb_edn_store__1 = (function (name){return new_indexeddb_edn_store.call(null,name,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
var new_indexeddb_edn_store__2 = (function (name,tag_table){var res = cljs.core.async.chan.call(null);var req = window.indexedDB.open(name,1);req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,"ERROR opening DB:",res);
req.onsuccess = ((function (res,req){
return (function success_handler(e){konserve.platform.log.call(null,"db-opened:",req.result);
return cljs.core.async.put_BANG_.call(null,res,(new konserve.platform.IndexedDBKeyValueStore(req.result,name,tag_table)));
});})(res,req))
;
req.onupgradeneeded = ((function (res,req){
return (function upgrade_handler(e){var db_23470 = e.target.result;db_23470.createObjectStore(name,{"keyPath": "key"});
return konserve.platform.log.call(null,"db upgraded from version: ",e.oldVersion);
});})(res,req))
;
return res;
});
new_indexeddb_edn_store = function(name,tag_table){
switch(arguments.length){
case 1:
return new_indexeddb_edn_store__1.call(this,name);
case 2:
return new_indexeddb_edn_store__2.call(this,name,tag_table);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_indexeddb_edn_store.cljs$core$IFn$_invoke$arity$1 = new_indexeddb_edn_store__1;
new_indexeddb_edn_store.cljs$core$IFn$_invoke$arity$2 = new_indexeddb_edn_store__2;
return new_indexeddb_edn_store;
})()
;
konserve.platform.new_indexeddb_json_store = (function new_indexeddb_json_store(name){var res = cljs.core.async.chan.call(null);var req = window.indexedDB.open(name,1);req.onerror = cljs.core.partial.call(null,konserve.platform.error_handler,"ERROR opening DB:",res);
req.onsuccess = ((function (res,req){
return (function success_handler(e){konserve.platform.log.call(null,"db-opened:",req.result);
return cljs.core.async.put_BANG_.call(null,res,(new konserve.platform.IndexedDBJSONKeyValueStore(req.result,name)));
});})(res,req))
;
req.onupgradeneeded = ((function (res,req){
return (function upgrade_handler(e){var db_23471 = e.target.result;db_23471.createObjectStore(name,{"keyPath": "key"});
return konserve.platform.log.call(null,"db upgraded from version: ",e.oldVersion);
});})(res,req))
;
return res;
});

//# sourceMappingURL=platform.js.map