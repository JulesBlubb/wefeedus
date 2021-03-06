// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__19285__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__19284 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__19284,0,null);var body = cljs.core.nthnext.call(null,vec__19284,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__19285 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19285__delegate.call(this,args);};
G__19285.cljs$lang$maxFixedArity = 0;
G__19285.cljs$lang$applyTo = (function (arglist__19286){
var args = cljs.core.seq(arglist__19286);
return G__19285__delegate(args);
});
G__19285.cljs$core$IFn$_invoke$arity$variadic = G__19285__delegate;
return G__19285;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4264__auto__ = (function iter__19291(s__19292){return (new cljs.core.LazySeq(null,(function (){var s__19292__$1 = s__19292;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19292__$1);if(temp__4126__auto__)
{var s__19292__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19292__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__19292__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__19294 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__19293 = 0;while(true){
if((i__19293 < size__4263__auto__))
{var args = cljs.core._nth.call(null,c__4262__auto__,i__19293);cljs.core.chunk_append.call(null,b__19294,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__19295 = (i__19293 + 1);
i__19293 = G__19295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19294),iter__19291.call(null,cljs.core.chunk_rest.call(null,s__19292__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19294),null);
}
} else
{var args = cljs.core.first.call(null,s__19292__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__19291.call(null,cljs.core.rest.call(null,s__19292__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,((function (html){
return (function (p1__19296_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__19296_SHARP_);
});})(html))
);
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4264__auto__ = (function iter__19301(s__19302){return (new cljs.core.LazySeq(null,(function (){var s__19302__$1 = s__19302;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19302__$1);if(temp__4126__auto__)
{var s__19302__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19302__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__19302__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__19304 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__19303 = 0;while(true){
if((i__19303 < size__4263__auto__))
{var style = cljs.core._nth.call(null,c__4262__auto__,i__19303);cljs.core.chunk_append.call(null,b__19304,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__19305 = (i__19303 + 1);
i__19303 = G__19305;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19304),iter__19301.call(null,cljs.core.chunk_rest.call(null,s__19302__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19304),null);
}
} else
{var style = cljs.core.first.call(null,s__19302__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__19301.call(null,cljs.core.rest.call(null,s__19302__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__19306){
var styles = cljs.core.seq(arglist__19306);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to19307 = (function() { 
var link_to19307__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to19307 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to19307__delegate.call(this,url,content);};
link_to19307.cljs$lang$maxFixedArity = 1;
link_to19307.cljs$lang$applyTo = (function (arglist__19308){
var url = cljs.core.first(arglist__19308);
var content = cljs.core.rest(arglist__19308);
return link_to19307__delegate(url,content);
});
link_to19307.cljs$core$IFn$_invoke$arity$variadic = link_to19307__delegate;
return link_to19307;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19307);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to19309 = (function() { 
var mail_to19309__delegate = function (e_mail,p__19310){var vec__19312 = p__19310;var content = cljs.core.nth.call(null,vec__19312,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3539__auto__ = content;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to19309 = function (e_mail,var_args){
var p__19310 = null;if (arguments.length > 1) {
  p__19310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to19309__delegate.call(this,e_mail,p__19310);};
mail_to19309.cljs$lang$maxFixedArity = 1;
mail_to19309.cljs$lang$applyTo = (function (arglist__19313){
var e_mail = cljs.core.first(arglist__19313);
var p__19310 = cljs.core.rest(arglist__19313);
return mail_to19309__delegate(e_mail,p__19310);
});
mail_to19309.cljs$core$IFn$_invoke$arity$variadic = mail_to19309__delegate;
return mail_to19309;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19309);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list19314 = (function unordered_list19314(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4264__auto__ = (function iter__19319(s__19320){return (new cljs.core.LazySeq(null,(function (){var s__19320__$1 = s__19320;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19320__$1);if(temp__4126__auto__)
{var s__19320__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19320__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__19320__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__19322 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__19321 = 0;while(true){
if((i__19321 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__19321);cljs.core.chunk_append.call(null,b__19322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__19323 = (i__19321 + 1);
i__19321 = G__19323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19322),iter__19319.call(null,cljs.core.chunk_rest.call(null,s__19320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19322),null);
}
} else
{var x = cljs.core.first.call(null,s__19320__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__19319.call(null,cljs.core.rest.call(null,s__19320__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19314);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list19324 = (function ordered_list19324(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4264__auto__ = (function iter__19329(s__19330){return (new cljs.core.LazySeq(null,(function (){var s__19330__$1 = s__19330;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19330__$1);if(temp__4126__auto__)
{var s__19330__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19330__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__19330__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__19332 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__19331 = 0;while(true){
if((i__19331 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__19331);cljs.core.chunk_append.call(null,b__19332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__19333 = (i__19331 + 1);
i__19331 = G__19333;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19332),iter__19329.call(null,cljs.core.chunk_rest.call(null,s__19330__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19332),null);
}
} else
{var x = cljs.core.first.call(null,s__19330__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__19329.call(null,cljs.core.rest.call(null,s__19330__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19324);
/**
* Create an image element.
*/
sablono.core.image19334 = (function() {
var image19334 = null;
var image19334__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image19334__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image19334 = function(src,alt){
switch(arguments.length){
case 1:
return image19334__1.call(this,src);
case 2:
return image19334__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image19334.cljs$core$IFn$_invoke$arity$1 = image19334__1;
image19334.cljs$core$IFn$_invoke$arity$2 = image19334__2;
return image19334;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19334);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__19335_SHARP_,p2__19336_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19335_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19336_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__19337_SHARP_,p2__19338_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19337_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19338_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field19339 = (function() {
var hidden_field19339 = null;
var hidden_field19339__1 = (function (name){return hidden_field19339.call(null,name,null);
});
var hidden_field19339__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field19339 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field19339__1.call(this,name);
case 2:
return hidden_field19339__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field19339.cljs$core$IFn$_invoke$arity$1 = hidden_field19339__1;
hidden_field19339.cljs$core$IFn$_invoke$arity$2 = hidden_field19339__2;
return hidden_field19339;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19339);
/**
* Creates a new text input field.
*/
sablono.core.text_field19340 = (function() {
var text_field19340 = null;
var text_field19340__1 = (function (name){return text_field19340.call(null,name,null);
});
var text_field19340__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field19340 = function(name,value){
switch(arguments.length){
case 1:
return text_field19340__1.call(this,name);
case 2:
return text_field19340__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field19340.cljs$core$IFn$_invoke$arity$1 = text_field19340__1;
text_field19340.cljs$core$IFn$_invoke$arity$2 = text_field19340__2;
return text_field19340;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field19340);
/**
* Creates a new password field.
*/
sablono.core.password_field19341 = (function() {
var password_field19341 = null;
var password_field19341__1 = (function (name){return password_field19341.call(null,name,null);
});
var password_field19341__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field19341 = function(name,value){
switch(arguments.length){
case 1:
return password_field19341__1.call(this,name);
case 2:
return password_field19341__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field19341.cljs$core$IFn$_invoke$arity$1 = password_field19341__1;
password_field19341.cljs$core$IFn$_invoke$arity$2 = password_field19341__2;
return password_field19341;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field19341);
/**
* Creates a new email input field.
*/
sablono.core.email_field19342 = (function() {
var email_field19342 = null;
var email_field19342__1 = (function (name){return email_field19342.call(null,name,null);
});
var email_field19342__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field19342 = function(name,value){
switch(arguments.length){
case 1:
return email_field19342__1.call(this,name);
case 2:
return email_field19342__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field19342.cljs$core$IFn$_invoke$arity$1 = email_field19342__1;
email_field19342.cljs$core$IFn$_invoke$arity$2 = email_field19342__2;
return email_field19342;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19342);
/**
* Creates a check box.
*/
sablono.core.check_box19343 = (function() {
var check_box19343 = null;
var check_box19343__1 = (function (name){return check_box19343.call(null,name,null);
});
var check_box19343__2 = (function (name,checked_QMARK_){return check_box19343.call(null,name,checked_QMARK_,"true");
});
var check_box19343__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box19343 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box19343__1.call(this,name);
case 2:
return check_box19343__2.call(this,name,checked_QMARK_);
case 3:
return check_box19343__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box19343.cljs$core$IFn$_invoke$arity$1 = check_box19343__1;
check_box19343.cljs$core$IFn$_invoke$arity$2 = check_box19343__2;
check_box19343.cljs$core$IFn$_invoke$arity$3 = check_box19343__3;
return check_box19343;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box19343);
/**
* Creates a radio button.
*/
sablono.core.radio_button19344 = (function() {
var radio_button19344 = null;
var radio_button19344__1 = (function (group){return radio_button19344.call(null,group,null);
});
var radio_button19344__2 = (function (group,checked_QMARK_){return radio_button19344.call(null,group,checked_QMARK_,"true");
});
var radio_button19344__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button19344 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button19344__1.call(this,group);
case 2:
return radio_button19344__2.call(this,group,checked_QMARK_);
case 3:
return radio_button19344__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button19344.cljs$core$IFn$_invoke$arity$1 = radio_button19344__1;
radio_button19344.cljs$core$IFn$_invoke$arity$2 = radio_button19344__2;
radio_button19344.cljs$core$IFn$_invoke$arity$3 = radio_button19344__3;
return radio_button19344;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button19344);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options19345 = (function() {
var select_options19345 = null;
var select_options19345__1 = (function (coll){return select_options19345.call(null,coll,null);
});
var select_options19345__2 = (function (coll,selected){var iter__4264__auto__ = (function iter__19354(s__19355){return (new cljs.core.LazySeq(null,(function (){var s__19355__$1 = s__19355;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19355__$1);if(temp__4126__auto__)
{var s__19355__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19355__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__19355__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__19357 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__19356 = 0;while(true){
if((i__19356 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__19356);cljs.core.chunk_append.call(null,b__19357,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19360 = x;var text = cljs.core.nth.call(null,vec__19360,0,null);var val = cljs.core.nth.call(null,vec__19360,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options19345.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__19362 = (i__19356 + 1);
i__19356 = G__19362;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19357),iter__19354.call(null,cljs.core.chunk_rest.call(null,s__19355__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19357),null);
}
} else
{var x = cljs.core.first.call(null,s__19355__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19361 = x;var text = cljs.core.nth.call(null,vec__19361,0,null);var val = cljs.core.nth.call(null,vec__19361,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options19345.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__19354.call(null,cljs.core.rest.call(null,s__19355__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
});
select_options19345 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options19345__1.call(this,coll);
case 2:
return select_options19345__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options19345.cljs$core$IFn$_invoke$arity$1 = select_options19345__1;
select_options19345.cljs$core$IFn$_invoke$arity$2 = select_options19345__2;
return select_options19345;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options19345);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down19363 = (function() {
var drop_down19363 = null;
var drop_down19363__2 = (function (name,options){return drop_down19363.call(null,name,options,null);
});
var drop_down19363__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down19363 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down19363__2.call(this,name,options);
case 3:
return drop_down19363__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down19363.cljs$core$IFn$_invoke$arity$2 = drop_down19363__2;
drop_down19363.cljs$core$IFn$_invoke$arity$3 = drop_down19363__3;
return drop_down19363;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down19363);
/**
* Creates a text area element.
*/
sablono.core.text_area19364 = (function() {
var text_area19364 = null;
var text_area19364__1 = (function (name){return text_area19364.call(null,name,null);
});
var text_area19364__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area19364 = function(name,value){
switch(arguments.length){
case 1:
return text_area19364__1.call(this,name);
case 2:
return text_area19364__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area19364.cljs$core$IFn$_invoke$arity$1 = text_area19364__1;
text_area19364.cljs$core$IFn$_invoke$arity$2 = text_area19364__2;
return text_area19364;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area19364);
/**
* Creates a file upload input.
*/
sablono.core.file_upload19365 = (function file_upload19365(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload19365);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label19366 = (function label19366(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label19366);
/**
* Creates a submit button.
*/
sablono.core.submit_button19367 = (function submit_button19367(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button19367);
/**
* Creates a form reset button.
*/
sablono.core.reset_button19368 = (function reset_button19368(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button19368);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to19369 = (function() { 
var form_to19369__delegate = function (p__19370,body){var vec__19372 = p__19370;var method = cljs.core.nth.call(null,vec__19372,0,null);var action = cljs.core.nth.call(null,vec__19372,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to19369 = function (p__19370,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to19369__delegate.call(this,p__19370,body);};
form_to19369.cljs$lang$maxFixedArity = 1;
form_to19369.cljs$lang$applyTo = (function (arglist__19373){
var p__19370 = cljs.core.first(arglist__19373);
var body = cljs.core.rest(arglist__19373);
return form_to19369__delegate(p__19370,body);
});
form_to19369.cljs$core$IFn$_invoke$arity$variadic = form_to19369__delegate;
return form_to19369;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to19369);

//# sourceMappingURL=core.js.map