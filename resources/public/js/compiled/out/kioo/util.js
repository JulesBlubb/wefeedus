// Compiled by ClojureScript 0.0-2227
goog.provide('kioo.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
kioo.util._STAR_component_STAR_ = null;
/**
* Wrapper component used to mix-in lifecycle methods
* This was pulled from quiescent
*/
kioo.util.WrapComponent = React.createClass({"componentDidMount": (function (node){var this$ = this;var temp__4126__auto__ = (function (){var or__3539__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return (this$.props["onRender"]);
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null,node);
} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state,node){var this$ = this;var temp__4126__auto__ = (function (){var or__3539__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return (this$.props["onRender"]);
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_19028 = kioo.util._STAR_component_STAR_;try{kioo.util._STAR_component_STAR_ = this$;
return f.call(null,node);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_19028;
}} else
{return null;
}
}), "render": (function (){var this$ = this;return (this$.props["wrappee"]);
})});
kioo.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
kioo.util.camel_case = (function camel_case(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name.call(null,dashed);var vec__19030 = clojure.string.split.call(null,name_str,/-/);var start = cljs.core.nth.call(null,vec__19030,0,null);var parts = cljs.core.nthnext.call(null,vec__19030,1);if(cljs.core.truth_(kioo.util.dont_camel_case.call(null,start)))
{return name_str;
} else
{return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,clojure.string.capitalize,parts));
}
}
});
kioo.util.convert_attrs = (function convert_attrs(attrs){var style = (cljs.core.truth_(new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(attrs))?(function (){var vals = cljs.core.re_seq.call(null,/\s*([^:;]*)[:][\s]*([^;]+)/,new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(attrs));return cljs.core.reduce.call(null,((function (vals){
return (function (m,p__19033){var vec__19034 = p__19033;var _ = cljs.core.nth.call(null,vec__19034,0,null);var k = cljs.core.nth.call(null,vec__19034,1,null);var v = cljs.core.nth.call(null,vec__19034,2,null);return cljs.core.assoc.call(null,m,k,v.trim());
});})(vals))
,cljs.core.PersistentArrayMap.EMPTY,vals);
})():null);var class_name = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(attrs);return cljs.core.merge.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",1108647146)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),style,new cljs.core.Keyword(null,"className","className",1004015509),class_name], null));
});
kioo.util.flatten_nodes = (function flatten_nodes(nodes){return cljs.core.reduce.call(null,(function (p1__19036_SHARP_,p2__19035_SHARP_){if(cljs.core.seq_QMARK_.call(null,p2__19035_SHARP_))
{return cljs.core.concat.call(null,p2__19035_SHARP_,p1__19036_SHARP_);
} else
{return cljs.core.conj.call(null,p1__19036_SHARP_,p2__19035_SHARP_);
}
}),cljs.core.List.EMPTY,cljs.core.reverse.call(null,nodes));
});
/**
* Returns a regular expression that matches the HTML attribute `attr`
* and it's value.
*/
kioo.util.attr_pattern = (function attr_pattern(attr){return cljs.core.re_pattern.call(null,("\\s+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr))+"\\s*=\\s*['\"][^\"']+['\"]"));
});
/**
* Strip the HTML attribute `attr` and it's value from the string `s`.
*/
kioo.util.strip_attr = (function strip_attr(s,attr){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s,kioo.util.attr_pattern.call(null,attr),"");
} else
{return null;
}
});

//# sourceMappingURL=util.js.map