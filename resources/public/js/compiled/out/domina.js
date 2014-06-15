// Compiled by ClojureScript 0.0-2227
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_23709 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_23711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_23711,opt_wrapper_23709,table_section_wrapper_23710,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_23709,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_23710,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_23710,cell_wrapper_23711,table_section_wrapper_23710,table_section_wrapper_23710]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__23716 = cljs.core.seq.call(null,tbody);var chunk__23717 = null;var count__23718 = 0;var i__23719 = 0;while(true){
if((i__23719 < count__23718))
{var child = cljs.core._nth.call(null,chunk__23717,i__23719);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23720 = seq__23716;
var G__23721 = chunk__23717;
var G__23722 = count__23718;
var G__23723 = (i__23719 + 1);
seq__23716 = G__23720;
chunk__23717 = G__23721;
count__23718 = G__23722;
i__23719 = G__23723;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23716);if(temp__4126__auto__)
{var seq__23716__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23716__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__23716__$1);{
var G__23724 = cljs.core.chunk_rest.call(null,seq__23716__$1);
var G__23725 = c__4295__auto__;
var G__23726 = cljs.core.count.call(null,c__4295__auto__);
var G__23727 = 0;
seq__23716 = G__23724;
chunk__23717 = G__23725;
count__23718 = G__23726;
i__23719 = G__23727;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__23716__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23728 = cljs.core.next.call(null,seq__23716__$1);
var G__23729 = null;
var G__23730 = 0;
var G__23731 = 0;
seq__23716 = G__23728;
chunk__23717 = G__23729;
count__23718 = G__23730;
i__23719 = G__23731;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__23733 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__23733,0,null);var start_wrap = cljs.core.nth.call(null,vec__23733,1,null);var end_wrap = cljs.core.nth.call(null,vec__23733,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__23734 = wrapper.lastChild;
var G__23735 = (level - 1);
wrapper = G__23734;
level = G__23735;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3527__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3527__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj23737 = {};return obj23737;
})();
domina.nodes = (function nodes(content){if((function (){var and__3527__auto__ = content;if(and__3527__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3527__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4166__auto__ = (((content == null))?null:content);return (function (){var or__3539__auto__ = (domina.nodes[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.nodes["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3527__auto__ = nodeseq;if(and__3527__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3527__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4166__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3539__auto__ = (domina.single_node[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.single_node["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3527__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3527__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3527__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__23738){
var mesg = cljs.core.seq(arglist__23738);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__23739){
var mesg = cljs.core.seq(arglist__23739);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__23740){
var contents = cljs.core.seq(arglist__23740);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__23741_SHARP_){return p1__23741_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__23742_SHARP_,p2__23743_SHARP_){return goog.dom.insertChildAt(p1__23742_SHARP_,p2__23743_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23745_SHARP_,p2__23744_SHARP_){return goog.dom.insertSiblingBefore(p2__23744_SHARP_,p1__23745_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23747_SHARP_,p2__23746_SHARP_){return goog.dom.insertSiblingAfter(p2__23746_SHARP_,p1__23747_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__23749_SHARP_,p2__23748_SHARP_){return goog.dom.replaceNode(p2__23748_SHARP_,p1__23749_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__23754_23758 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23755_23759 = null;var count__23756_23760 = 0;var i__23757_23761 = 0;while(true){
if((i__23757_23761 < count__23756_23760))
{var n_23762 = cljs.core._nth.call(null,chunk__23755_23759,i__23757_23761);goog.style.setStyle(n_23762,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23763 = seq__23754_23758;
var G__23764 = chunk__23755_23759;
var G__23765 = count__23756_23760;
var G__23766 = (i__23757_23761 + 1);
seq__23754_23758 = G__23763;
chunk__23755_23759 = G__23764;
count__23756_23760 = G__23765;
i__23757_23761 = G__23766;
continue;
}
} else
{var temp__4126__auto___23767 = cljs.core.seq.call(null,seq__23754_23758);if(temp__4126__auto___23767)
{var seq__23754_23768__$1 = temp__4126__auto___23767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23754_23768__$1))
{var c__4295__auto___23769 = cljs.core.chunk_first.call(null,seq__23754_23768__$1);{
var G__23770 = cljs.core.chunk_rest.call(null,seq__23754_23768__$1);
var G__23771 = c__4295__auto___23769;
var G__23772 = cljs.core.count.call(null,c__4295__auto___23769);
var G__23773 = 0;
seq__23754_23758 = G__23770;
chunk__23755_23759 = G__23771;
count__23756_23760 = G__23772;
i__23757_23761 = G__23773;
continue;
}
} else
{var n_23774 = cljs.core.first.call(null,seq__23754_23768__$1);goog.style.setStyle(n_23774,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23775 = cljs.core.next.call(null,seq__23754_23768__$1);
var G__23776 = null;
var G__23777 = 0;
var G__23778 = 0;
seq__23754_23758 = G__23775;
chunk__23755_23759 = G__23776;
count__23756_23760 = G__23777;
i__23757_23761 = G__23778;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23779){
var content = cljs.core.first(arglist__23779);
arglist__23779 = cljs.core.next(arglist__23779);
var name = cljs.core.first(arglist__23779);
var value = cljs.core.rest(arglist__23779);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__23784_23788 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23785_23789 = null;var count__23786_23790 = 0;var i__23787_23791 = 0;while(true){
if((i__23787_23791 < count__23786_23790))
{var n_23792 = cljs.core._nth.call(null,chunk__23785_23789,i__23787_23791);n_23792.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23793 = seq__23784_23788;
var G__23794 = chunk__23785_23789;
var G__23795 = count__23786_23790;
var G__23796 = (i__23787_23791 + 1);
seq__23784_23788 = G__23793;
chunk__23785_23789 = G__23794;
count__23786_23790 = G__23795;
i__23787_23791 = G__23796;
continue;
}
} else
{var temp__4126__auto___23797 = cljs.core.seq.call(null,seq__23784_23788);if(temp__4126__auto___23797)
{var seq__23784_23798__$1 = temp__4126__auto___23797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23784_23798__$1))
{var c__4295__auto___23799 = cljs.core.chunk_first.call(null,seq__23784_23798__$1);{
var G__23800 = cljs.core.chunk_rest.call(null,seq__23784_23798__$1);
var G__23801 = c__4295__auto___23799;
var G__23802 = cljs.core.count.call(null,c__4295__auto___23799);
var G__23803 = 0;
seq__23784_23788 = G__23800;
chunk__23785_23789 = G__23801;
count__23786_23790 = G__23802;
i__23787_23791 = G__23803;
continue;
}
} else
{var n_23804 = cljs.core.first.call(null,seq__23784_23798__$1);n_23804.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23805 = cljs.core.next.call(null,seq__23784_23798__$1);
var G__23806 = null;
var G__23807 = 0;
var G__23808 = 0;
seq__23784_23788 = G__23805;
chunk__23785_23789 = G__23806;
count__23786_23790 = G__23807;
i__23787_23791 = G__23808;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__23809){
var content = cljs.core.first(arglist__23809);
arglist__23809 = cljs.core.next(arglist__23809);
var name = cljs.core.first(arglist__23809);
var value = cljs.core.rest(arglist__23809);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__23814_23818 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23815_23819 = null;var count__23816_23820 = 0;var i__23817_23821 = 0;while(true){
if((i__23817_23821 < count__23816_23820))
{var n_23822 = cljs.core._nth.call(null,chunk__23815_23819,i__23817_23821);n_23822.removeAttribute(cljs.core.name.call(null,name));
{
var G__23823 = seq__23814_23818;
var G__23824 = chunk__23815_23819;
var G__23825 = count__23816_23820;
var G__23826 = (i__23817_23821 + 1);
seq__23814_23818 = G__23823;
chunk__23815_23819 = G__23824;
count__23816_23820 = G__23825;
i__23817_23821 = G__23826;
continue;
}
} else
{var temp__4126__auto___23827 = cljs.core.seq.call(null,seq__23814_23818);if(temp__4126__auto___23827)
{var seq__23814_23828__$1 = temp__4126__auto___23827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23814_23828__$1))
{var c__4295__auto___23829 = cljs.core.chunk_first.call(null,seq__23814_23828__$1);{
var G__23830 = cljs.core.chunk_rest.call(null,seq__23814_23828__$1);
var G__23831 = c__4295__auto___23829;
var G__23832 = cljs.core.count.call(null,c__4295__auto___23829);
var G__23833 = 0;
seq__23814_23818 = G__23830;
chunk__23815_23819 = G__23831;
count__23816_23820 = G__23832;
i__23817_23821 = G__23833;
continue;
}
} else
{var n_23834 = cljs.core.first.call(null,seq__23814_23828__$1);n_23834.removeAttribute(cljs.core.name.call(null,name));
{
var G__23835 = cljs.core.next.call(null,seq__23814_23828__$1);
var G__23836 = null;
var G__23837 = 0;
var G__23838 = 0;
seq__23814_23818 = G__23835;
chunk__23815_23819 = G__23836;
count__23816_23820 = G__23837;
i__23817_23821 = G__23838;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__23840 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__23840,0,null);var v = cljs.core.nth.call(null,vec__23840,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
{return v;
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__23841_SHARP_){var attr = attrs__$1.item(p1__23841_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__23848_23854 = cljs.core.seq.call(null,styles);var chunk__23849_23855 = null;var count__23850_23856 = 0;var i__23851_23857 = 0;while(true){
if((i__23851_23857 < count__23850_23856))
{var vec__23852_23858 = cljs.core._nth.call(null,chunk__23849_23855,i__23851_23857);var name_23859 = cljs.core.nth.call(null,vec__23852_23858,0,null);var value_23860 = cljs.core.nth.call(null,vec__23852_23858,1,null);domina.set_style_BANG_.call(null,content,name_23859,value_23860);
{
var G__23861 = seq__23848_23854;
var G__23862 = chunk__23849_23855;
var G__23863 = count__23850_23856;
var G__23864 = (i__23851_23857 + 1);
seq__23848_23854 = G__23861;
chunk__23849_23855 = G__23862;
count__23850_23856 = G__23863;
i__23851_23857 = G__23864;
continue;
}
} else
{var temp__4126__auto___23865 = cljs.core.seq.call(null,seq__23848_23854);if(temp__4126__auto___23865)
{var seq__23848_23866__$1 = temp__4126__auto___23865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23848_23866__$1))
{var c__4295__auto___23867 = cljs.core.chunk_first.call(null,seq__23848_23866__$1);{
var G__23868 = cljs.core.chunk_rest.call(null,seq__23848_23866__$1);
var G__23869 = c__4295__auto___23867;
var G__23870 = cljs.core.count.call(null,c__4295__auto___23867);
var G__23871 = 0;
seq__23848_23854 = G__23868;
chunk__23849_23855 = G__23869;
count__23850_23856 = G__23870;
i__23851_23857 = G__23871;
continue;
}
} else
{var vec__23853_23872 = cljs.core.first.call(null,seq__23848_23866__$1);var name_23873 = cljs.core.nth.call(null,vec__23853_23872,0,null);var value_23874 = cljs.core.nth.call(null,vec__23853_23872,1,null);domina.set_style_BANG_.call(null,content,name_23873,value_23874);
{
var G__23875 = cljs.core.next.call(null,seq__23848_23866__$1);
var G__23876 = null;
var G__23877 = 0;
var G__23878 = 0;
seq__23848_23854 = G__23875;
chunk__23849_23855 = G__23876;
count__23850_23856 = G__23877;
i__23851_23857 = G__23878;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__23885_23891 = cljs.core.seq.call(null,attrs);var chunk__23886_23892 = null;var count__23887_23893 = 0;var i__23888_23894 = 0;while(true){
if((i__23888_23894 < count__23887_23893))
{var vec__23889_23895 = cljs.core._nth.call(null,chunk__23886_23892,i__23888_23894);var name_23896 = cljs.core.nth.call(null,vec__23889_23895,0,null);var value_23897 = cljs.core.nth.call(null,vec__23889_23895,1,null);domina.set_attr_BANG_.call(null,content,name_23896,value_23897);
{
var G__23898 = seq__23885_23891;
var G__23899 = chunk__23886_23892;
var G__23900 = count__23887_23893;
var G__23901 = (i__23888_23894 + 1);
seq__23885_23891 = G__23898;
chunk__23886_23892 = G__23899;
count__23887_23893 = G__23900;
i__23888_23894 = G__23901;
continue;
}
} else
{var temp__4126__auto___23902 = cljs.core.seq.call(null,seq__23885_23891);if(temp__4126__auto___23902)
{var seq__23885_23903__$1 = temp__4126__auto___23902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23885_23903__$1))
{var c__4295__auto___23904 = cljs.core.chunk_first.call(null,seq__23885_23903__$1);{
var G__23905 = cljs.core.chunk_rest.call(null,seq__23885_23903__$1);
var G__23906 = c__4295__auto___23904;
var G__23907 = cljs.core.count.call(null,c__4295__auto___23904);
var G__23908 = 0;
seq__23885_23891 = G__23905;
chunk__23886_23892 = G__23906;
count__23887_23893 = G__23907;
i__23888_23894 = G__23908;
continue;
}
} else
{var vec__23890_23909 = cljs.core.first.call(null,seq__23885_23903__$1);var name_23910 = cljs.core.nth.call(null,vec__23890_23909,0,null);var value_23911 = cljs.core.nth.call(null,vec__23890_23909,1,null);domina.set_attr_BANG_.call(null,content,name_23910,value_23911);
{
var G__23912 = cljs.core.next.call(null,seq__23885_23903__$1);
var G__23913 = null;
var G__23914 = 0;
var G__23915 = 0;
seq__23885_23891 = G__23912;
chunk__23886_23892 = G__23913;
count__23887_23893 = G__23914;
i__23888_23894 = G__23915;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__23920_23924 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23921_23925 = null;var count__23922_23926 = 0;var i__23923_23927 = 0;while(true){
if((i__23923_23927 < count__23922_23926))
{var node_23928 = cljs.core._nth.call(null,chunk__23921_23925,i__23923_23927);goog.dom.classes.add(node_23928,class$);
{
var G__23929 = seq__23920_23924;
var G__23930 = chunk__23921_23925;
var G__23931 = count__23922_23926;
var G__23932 = (i__23923_23927 + 1);
seq__23920_23924 = G__23929;
chunk__23921_23925 = G__23930;
count__23922_23926 = G__23931;
i__23923_23927 = G__23932;
continue;
}
} else
{var temp__4126__auto___23933 = cljs.core.seq.call(null,seq__23920_23924);if(temp__4126__auto___23933)
{var seq__23920_23934__$1 = temp__4126__auto___23933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23920_23934__$1))
{var c__4295__auto___23935 = cljs.core.chunk_first.call(null,seq__23920_23934__$1);{
var G__23936 = cljs.core.chunk_rest.call(null,seq__23920_23934__$1);
var G__23937 = c__4295__auto___23935;
var G__23938 = cljs.core.count.call(null,c__4295__auto___23935);
var G__23939 = 0;
seq__23920_23924 = G__23936;
chunk__23921_23925 = G__23937;
count__23922_23926 = G__23938;
i__23923_23927 = G__23939;
continue;
}
} else
{var node_23940 = cljs.core.first.call(null,seq__23920_23934__$1);goog.dom.classes.add(node_23940,class$);
{
var G__23941 = cljs.core.next.call(null,seq__23920_23934__$1);
var G__23942 = null;
var G__23943 = 0;
var G__23944 = 0;
seq__23920_23924 = G__23941;
chunk__23921_23925 = G__23942;
count__23922_23926 = G__23943;
i__23923_23927 = G__23944;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__23949_23953 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23950_23954 = null;var count__23951_23955 = 0;var i__23952_23956 = 0;while(true){
if((i__23952_23956 < count__23951_23955))
{var node_23957 = cljs.core._nth.call(null,chunk__23950_23954,i__23952_23956);goog.dom.classes.remove(node_23957,class$);
{
var G__23958 = seq__23949_23953;
var G__23959 = chunk__23950_23954;
var G__23960 = count__23951_23955;
var G__23961 = (i__23952_23956 + 1);
seq__23949_23953 = G__23958;
chunk__23950_23954 = G__23959;
count__23951_23955 = G__23960;
i__23952_23956 = G__23961;
continue;
}
} else
{var temp__4126__auto___23962 = cljs.core.seq.call(null,seq__23949_23953);if(temp__4126__auto___23962)
{var seq__23949_23963__$1 = temp__4126__auto___23962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23949_23963__$1))
{var c__4295__auto___23964 = cljs.core.chunk_first.call(null,seq__23949_23963__$1);{
var G__23965 = cljs.core.chunk_rest.call(null,seq__23949_23963__$1);
var G__23966 = c__4295__auto___23964;
var G__23967 = cljs.core.count.call(null,c__4295__auto___23964);
var G__23968 = 0;
seq__23949_23953 = G__23965;
chunk__23950_23954 = G__23966;
count__23951_23955 = G__23967;
i__23952_23956 = G__23968;
continue;
}
} else
{var node_23969 = cljs.core.first.call(null,seq__23949_23963__$1);goog.dom.classes.remove(node_23969,class$);
{
var G__23970 = cljs.core.next.call(null,seq__23949_23963__$1);
var G__23971 = null;
var G__23972 = 0;
var G__23973 = 0;
seq__23949_23953 = G__23970;
chunk__23950_23954 = G__23971;
count__23951_23955 = G__23972;
i__23952_23956 = G__23973;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__23978_23982 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23979_23983 = null;var count__23980_23984 = 0;var i__23981_23985 = 0;while(true){
if((i__23981_23985 < count__23980_23984))
{var node_23986 = cljs.core._nth.call(null,chunk__23979_23983,i__23981_23985);goog.dom.classes.toggle(node_23986,class$);
{
var G__23987 = seq__23978_23982;
var G__23988 = chunk__23979_23983;
var G__23989 = count__23980_23984;
var G__23990 = (i__23981_23985 + 1);
seq__23978_23982 = G__23987;
chunk__23979_23983 = G__23988;
count__23980_23984 = G__23989;
i__23981_23985 = G__23990;
continue;
}
} else
{var temp__4126__auto___23991 = cljs.core.seq.call(null,seq__23978_23982);if(temp__4126__auto___23991)
{var seq__23978_23992__$1 = temp__4126__auto___23991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23978_23992__$1))
{var c__4295__auto___23993 = cljs.core.chunk_first.call(null,seq__23978_23992__$1);{
var G__23994 = cljs.core.chunk_rest.call(null,seq__23978_23992__$1);
var G__23995 = c__4295__auto___23993;
var G__23996 = cljs.core.count.call(null,c__4295__auto___23993);
var G__23997 = 0;
seq__23978_23982 = G__23994;
chunk__23979_23983 = G__23995;
count__23980_23984 = G__23996;
i__23981_23985 = G__23997;
continue;
}
} else
{var node_23998 = cljs.core.first.call(null,seq__23978_23992__$1);goog.dom.classes.toggle(node_23998,class$);
{
var G__23999 = cljs.core.next.call(null,seq__23978_23992__$1);
var G__24000 = null;
var G__24001 = 0;
var G__24002 = 0;
seq__23978_23982 = G__23999;
chunk__23979_23983 = G__24000;
count__23980_23984 = G__24001;
i__23981_23985 = G__24002;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24011__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__24007_24012 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24008_24013 = null;var count__24009_24014 = 0;var i__24010_24015 = 0;while(true){
if((i__24010_24015 < count__24009_24014))
{var node_24016 = cljs.core._nth.call(null,chunk__24008_24013,i__24010_24015);goog.dom.classes.set(node_24016,classes_24011__$1);
{
var G__24017 = seq__24007_24012;
var G__24018 = chunk__24008_24013;
var G__24019 = count__24009_24014;
var G__24020 = (i__24010_24015 + 1);
seq__24007_24012 = G__24017;
chunk__24008_24013 = G__24018;
count__24009_24014 = G__24019;
i__24010_24015 = G__24020;
continue;
}
} else
{var temp__4126__auto___24021 = cljs.core.seq.call(null,seq__24007_24012);if(temp__4126__auto___24021)
{var seq__24007_24022__$1 = temp__4126__auto___24021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24007_24022__$1))
{var c__4295__auto___24023 = cljs.core.chunk_first.call(null,seq__24007_24022__$1);{
var G__24024 = cljs.core.chunk_rest.call(null,seq__24007_24022__$1);
var G__24025 = c__4295__auto___24023;
var G__24026 = cljs.core.count.call(null,c__4295__auto___24023);
var G__24027 = 0;
seq__24007_24012 = G__24024;
chunk__24008_24013 = G__24025;
count__24009_24014 = G__24026;
i__24010_24015 = G__24027;
continue;
}
} else
{var node_24028 = cljs.core.first.call(null,seq__24007_24022__$1);goog.dom.classes.set(node_24028,classes_24011__$1);
{
var G__24029 = cljs.core.next.call(null,seq__24007_24022__$1);
var G__24030 = null;
var G__24031 = 0;
var G__24032 = 0;
seq__24007_24012 = G__24029;
chunk__24008_24013 = G__24030;
count__24009_24014 = G__24031;
i__24010_24015 = G__24032;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24037_24041 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24038_24042 = null;var count__24039_24043 = 0;var i__24040_24044 = 0;while(true){
if((i__24040_24044 < count__24039_24043))
{var node_24045 = cljs.core._nth.call(null,chunk__24038_24042,i__24040_24044);goog.dom.setTextContent(node_24045,value);
{
var G__24046 = seq__24037_24041;
var G__24047 = chunk__24038_24042;
var G__24048 = count__24039_24043;
var G__24049 = (i__24040_24044 + 1);
seq__24037_24041 = G__24046;
chunk__24038_24042 = G__24047;
count__24039_24043 = G__24048;
i__24040_24044 = G__24049;
continue;
}
} else
{var temp__4126__auto___24050 = cljs.core.seq.call(null,seq__24037_24041);if(temp__4126__auto___24050)
{var seq__24037_24051__$1 = temp__4126__auto___24050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24037_24051__$1))
{var c__4295__auto___24052 = cljs.core.chunk_first.call(null,seq__24037_24051__$1);{
var G__24053 = cljs.core.chunk_rest.call(null,seq__24037_24051__$1);
var G__24054 = c__4295__auto___24052;
var G__24055 = cljs.core.count.call(null,c__4295__auto___24052);
var G__24056 = 0;
seq__24037_24041 = G__24053;
chunk__24038_24042 = G__24054;
count__24039_24043 = G__24055;
i__24040_24044 = G__24056;
continue;
}
} else
{var node_24057 = cljs.core.first.call(null,seq__24037_24051__$1);goog.dom.setTextContent(node_24057,value);
{
var G__24058 = cljs.core.next.call(null,seq__24037_24051__$1);
var G__24059 = null;
var G__24060 = 0;
var G__24061 = 0;
seq__24037_24041 = G__24058;
chunk__24038_24042 = G__24059;
count__24039_24043 = G__24060;
i__24040_24044 = G__24061;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24066_24070 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24067_24071 = null;var count__24068_24072 = 0;var i__24069_24073 = 0;while(true){
if((i__24069_24073 < count__24068_24072))
{var node_24074 = cljs.core._nth.call(null,chunk__24067_24071,i__24069_24073);goog.dom.forms.setValue(node_24074,value);
{
var G__24075 = seq__24066_24070;
var G__24076 = chunk__24067_24071;
var G__24077 = count__24068_24072;
var G__24078 = (i__24069_24073 + 1);
seq__24066_24070 = G__24075;
chunk__24067_24071 = G__24076;
count__24068_24072 = G__24077;
i__24069_24073 = G__24078;
continue;
}
} else
{var temp__4126__auto___24079 = cljs.core.seq.call(null,seq__24066_24070);if(temp__4126__auto___24079)
{var seq__24066_24080__$1 = temp__4126__auto___24079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24066_24080__$1))
{var c__4295__auto___24081 = cljs.core.chunk_first.call(null,seq__24066_24080__$1);{
var G__24082 = cljs.core.chunk_rest.call(null,seq__24066_24080__$1);
var G__24083 = c__4295__auto___24081;
var G__24084 = cljs.core.count.call(null,c__4295__auto___24081);
var G__24085 = 0;
seq__24066_24070 = G__24082;
chunk__24067_24071 = G__24083;
count__24068_24072 = G__24084;
i__24069_24073 = G__24085;
continue;
}
} else
{var node_24086 = cljs.core.first.call(null,seq__24066_24080__$1);goog.dom.forms.setValue(node_24086,value);
{
var G__24087 = cljs.core.next.call(null,seq__24066_24080__$1);
var G__24088 = null;
var G__24089 = 0;
var G__24090 = 0;
seq__24066_24070 = G__24087;
chunk__24067_24071 = G__24088;
count__24068_24072 = G__24089;
i__24069_24073 = G__24090;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3527__auto__ = allows_inner_html_QMARK_;if(and__3527__auto__)
{var and__3527__auto____$1 = (function (){var or__3539__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3527__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var value_24101 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24097_24102 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24098_24103 = null;var count__24099_24104 = 0;var i__24100_24105 = 0;while(true){
if((i__24100_24105 < count__24099_24104))
{var node_24106 = cljs.core._nth.call(null,chunk__24098_24103,i__24100_24105);node_24106.innerHTML = value_24101;
{
var G__24107 = seq__24097_24102;
var G__24108 = chunk__24098_24103;
var G__24109 = count__24099_24104;
var G__24110 = (i__24100_24105 + 1);
seq__24097_24102 = G__24107;
chunk__24098_24103 = G__24108;
count__24099_24104 = G__24109;
i__24100_24105 = G__24110;
continue;
}
} else
{var temp__4126__auto___24111 = cljs.core.seq.call(null,seq__24097_24102);if(temp__4126__auto___24111)
{var seq__24097_24112__$1 = temp__4126__auto___24111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24097_24112__$1))
{var c__4295__auto___24113 = cljs.core.chunk_first.call(null,seq__24097_24112__$1);{
var G__24114 = cljs.core.chunk_rest.call(null,seq__24097_24112__$1);
var G__24115 = c__4295__auto___24113;
var G__24116 = cljs.core.count.call(null,c__4295__auto___24113);
var G__24117 = 0;
seq__24097_24102 = G__24114;
chunk__24098_24103 = G__24115;
count__24099_24104 = G__24116;
i__24100_24105 = G__24117;
continue;
}
} else
{var node_24118 = cljs.core.first.call(null,seq__24097_24112__$1);node_24118.innerHTML = value_24101;
{
var G__24119 = cljs.core.next.call(null,seq__24097_24112__$1);
var G__24120 = null;
var G__24121 = 0;
var G__24122 = 0;
seq__24097_24102 = G__24119;
chunk__24098_24103 = G__24120;
count__24099_24104 = G__24121;
i__24100_24105 = G__24122;
continue;
}
}
} else
{}
}
break;
}
}catch (e24096){if((e24096 instanceof Error))
{var e_24123 = e24096;domina.replace_children_BANG_.call(null,content,value_24101);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24096;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3527__auto__ = bubble;if(cljs.core.truth_(and__3527__auto__))
{return (value == null);
} else
{return and__3527__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3539__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24130_24134 = cljs.core.seq.call(null,children);var chunk__24131_24135 = null;var count__24132_24136 = 0;var i__24133_24137 = 0;while(true){
if((i__24133_24137 < count__24132_24136))
{var child_24138 = cljs.core._nth.call(null,chunk__24131_24135,i__24133_24137);frag.appendChild(child_24138);
{
var G__24139 = seq__24130_24134;
var G__24140 = chunk__24131_24135;
var G__24141 = count__24132_24136;
var G__24142 = (i__24133_24137 + 1);
seq__24130_24134 = G__24139;
chunk__24131_24135 = G__24140;
count__24132_24136 = G__24141;
i__24133_24137 = G__24142;
continue;
}
} else
{var temp__4126__auto___24143 = cljs.core.seq.call(null,seq__24130_24134);if(temp__4126__auto___24143)
{var seq__24130_24144__$1 = temp__4126__auto___24143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24130_24144__$1))
{var c__4295__auto___24145 = cljs.core.chunk_first.call(null,seq__24130_24144__$1);{
var G__24146 = cljs.core.chunk_rest.call(null,seq__24130_24144__$1);
var G__24147 = c__4295__auto___24145;
var G__24148 = cljs.core.count.call(null,c__4295__auto___24145);
var G__24149 = 0;
seq__24130_24134 = G__24146;
chunk__24131_24135 = G__24147;
count__24132_24136 = G__24148;
i__24133_24137 = G__24149;
continue;
}
} else
{var child_24150 = cljs.core.first.call(null,seq__24130_24144__$1);frag.appendChild(child_24150);
{
var G__24151 = cljs.core.next.call(null,seq__24130_24144__$1);
var G__24152 = null;
var G__24153 = 0;
var G__24154 = 0;
seq__24130_24134 = G__24151;
chunk__24131_24135 = G__24152;
count__24132_24136 = G__24153;
i__24133_24137 = G__24154;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__24124_SHARP_,p2__24125_SHARP_){return f.call(null,p1__24124_SHARP_,p2__24125_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3527__auto__ = obj;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3527__auto____$1)
{return obj.length;
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__24156 = list_thing;if(G__24156)
{var bit__4189__auto__ = (G__24156.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__24156.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24156.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24156);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24156);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__24157 = content;if(G__24157)
{var bit__4189__auto__ = (G__24157.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__24157.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24157.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24157);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24157);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__24158 = content;if(G__24158)
{var bit__4189__auto__ = (G__24158.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__24158.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24158.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24158);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24158);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map