// Compiled by ClojureScript 0.0-2227
goog.provide('hasch.core');
goog.require('cljs.core');
goog.require('hasch.benc');
goog.require('hasch.platform');
goog.require('hasch.platform');
goog.require('hasch.benc');
hasch.core.uuid4 = hasch.platform.uuid4;
hasch.core.uuid5 = hasch.platform.uuid5;
hasch.core.uuid_QMARK_ = hasch.platform.uuid_QMARK_;
hasch.core.hash__GT_str = hasch.platform.hash__GT_str;
hasch.core.sha_1 = hasch.platform.sha_1;
hasch.core.atomic_QMARK_ = (function atomic_QMARK_(val){var or__3539__auto__ = (val == null);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = hasch.platform.boolean_QMARK_.call(null,val);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{var or__3539__auto____$2 = (val instanceof cljs.core.Symbol);if(or__3539__auto____$2)
{return or__3539__auto____$2;
} else
{var or__3539__auto____$3 = (val instanceof cljs.core.Keyword);if(or__3539__auto____$3)
{return or__3539__auto____$3;
} else
{var or__3539__auto____$4 = typeof val === 'string';if(or__3539__auto____$4)
{return or__3539__auto____$4;
} else
{var or__3539__auto____$5 = typeof val === 'number';if(or__3539__auto____$5)
{return or__3539__auto____$5;
} else
{var or__3539__auto____$6 = hasch.core.uuid_QMARK_.call(null,val);if(cljs.core.truth_(or__3539__auto____$6))
{return or__3539__auto____$6;
} else
{return hasch.platform.date_QMARK_.call(null,val);
}
}
}
}
}
}
}
});
/**
* Hash an edn value with SHA-1 by default or a compatible hash function of choice.
*/
hasch.core.edn_hash = (function() {
var edn_hash = null;
var edn_hash__1 = (function (val){return edn_hash.call(null,val,hasch.core.sha_1);
});
var edn_hash__2 = (function (val,hash_fn){var coercion = cljs.core.map.call(null,cljs.core.byte$,hasch.benc._coerce.call(null,val,hash_fn));if(cljs.core.truth_(hasch.core.atomic_QMARK_.call(null,val)))
{return hash_fn.call(null,coercion);
} else
{return coercion;
}
});
edn_hash = function(val,hash_fn){
switch(arguments.length){
case 1:
return edn_hash__1.call(this,val);
case 2:
return edn_hash__2.call(this,val,hash_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edn_hash.cljs$core$IFn$_invoke$arity$1 = edn_hash__1;
edn_hash.cljs$core$IFn$_invoke$arity$2 = edn_hash__2;
return edn_hash;
})()
;
/**
* Creates random UUID-4 without argument or UUID-5 for the argument value.
*/
hasch.core.uuid = (function() {
var uuid = null;
var uuid__0 = (function (){return hasch.core.uuid4.call(null);
});
var uuid__1 = (function (val){return hasch.core.uuid5.call(null,hasch.core.edn_hash.call(null,val));
});
uuid = function(val){
switch(arguments.length){
case 0:
return uuid__0.call(this);
case 1:
return uuid__1.call(this,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
uuid.cljs$core$IFn$_invoke$arity$0 = uuid__0;
uuid.cljs$core$IFn$_invoke$arity$1 = uuid__1;
return uuid;
})()
;

//# sourceMappingURL=core.js.map