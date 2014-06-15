// Compiled by ClojureScript 0.0-2227
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__19430,args){var map__19432 = p__19430;var map__19432__$1 = ((cljs.core.seq_QMARK_.call(null,map__19432))?cljs.core.apply.call(null,cljs.core.hash_map,map__19432):map__19432);var debug = cljs.core.get.call(null,map__19432__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__19430,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__19430,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__19433){
var p__19430 = cljs.core.first(arglist__19433);
var args = cljs.core.rest(arglist__19433);
return log__delegate(p__19430,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__19434){var map__19436 = p__19434;var map__19436__$1 = ((cljs.core.seq_QMARK_.call(null,map__19436))?cljs.core.apply.call(null,cljs.core.hash_map,map__19436):map__19436);var websocket_url = cljs.core.get.call(null,map__19436__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__19437,callback){var map__19439 = p__19437;var map__19439__$1 = ((cljs.core.seq_QMARK_.call(null,map__19439))?cljs.core.apply.call(null,cljs.core.hash_map,map__19439):map__19439);var msg = map__19439__$1;var dependency_file = cljs.core.get.call(null,map__19439__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__19439__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__19439__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__3539__auto__ = dependency_file;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__19439,map__19439__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__19439,map__19439__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__19440,p__19441){var map__19444 = p__19440;var map__19444__$1 = ((cljs.core.seq_QMARK_.call(null,map__19444))?cljs.core.apply.call(null,cljs.core.hash_map,map__19444):map__19444);var opts = map__19444__$1;var url_rewriter = cljs.core.get.call(null,map__19444__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__19445 = p__19441;var map__19445__$1 = ((cljs.core.seq_QMARK_.call(null,map__19445))?cljs.core.apply.call(null,cljs.core.hash_map,map__19445):map__19445);var d = map__19445__$1;var file = cljs.core.get.call(null,map__19445__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__19446,p__19447){var map__19488 = p__19446;var map__19488__$1 = ((cljs.core.seq_QMARK_.call(null,map__19488))?cljs.core.apply.call(null,cljs.core.hash_map,map__19488):map__19488);var opts = map__19488__$1;var on_jsload = cljs.core.get.call(null,map__19488__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__19488__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__19489 = p__19447;var map__19489__$1 = ((cljs.core.seq_QMARK_.call(null,map__19489))?cljs.core.apply.call(null,cljs.core.hash_map,map__19489):map__19489);var files = cljs.core.get.call(null,map__19489__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,map__19488,map__19488__$1,opts,on_jsload,before_jsload,map__19489,map__19489__$1,files){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,map__19488,map__19488__$1,opts,on_jsload,before_jsload,map__19489,map__19489__$1,files){
return (function (state_19511){var state_val_19512 = (state_19511[1]);if((state_val_19512 === 6))
{var inst_19494 = (state_19511[7]);var inst_19503 = (state_19511[2]);var inst_19504 = [inst_19494];var inst_19505 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19504,null));var inst_19506 = cljs.core.apply.call(null,on_jsload,inst_19505);var state_19511__$1 = (function (){var statearr_19513 = state_19511;(statearr_19513[8] = inst_19503);
return statearr_19513;
})();var statearr_19514_19528 = state_19511__$1;(statearr_19514_19528[2] = inst_19506);
(statearr_19514_19528[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19512 === 5))
{var inst_19509 = (state_19511[2]);var state_19511__$1 = state_19511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19511__$1,inst_19509);
} else
{if((state_val_19512 === 4))
{var state_19511__$1 = state_19511;var statearr_19515_19529 = state_19511__$1;(statearr_19515_19529[2] = null);
(statearr_19515_19529[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19512 === 3))
{var inst_19494 = (state_19511[7]);var inst_19497 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_19498 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_19494);var inst_19499 = cljs.core.prn_str.call(null,inst_19498);var inst_19500 = console.log(inst_19499);var inst_19501 = cljs.core.async.timeout.call(null,10);var state_19511__$1 = (function (){var statearr_19516 = state_19511;(statearr_19516[9] = inst_19497);
(statearr_19516[10] = inst_19500);
return statearr_19516;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19511__$1,6,inst_19501);
} else
{if((state_val_19512 === 2))
{var inst_19494 = (state_19511[7]);var inst_19494__$1 = (state_19511[2]);var inst_19495 = cljs.core.not_empty.call(null,inst_19494__$1);var state_19511__$1 = (function (){var statearr_19517 = state_19511;(statearr_19517[7] = inst_19494__$1);
return statearr_19517;
})();if(cljs.core.truth_(inst_19495))
{var statearr_19518_19530 = state_19511__$1;(statearr_19518_19530[1] = 3);
} else
{var statearr_19519_19531 = state_19511__$1;(statearr_19519_19531[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19512 === 1))
{var inst_19490 = before_jsload.call(null,files);var inst_19491 = figwheel.client.add_request_urls.call(null,opts,files);var inst_19492 = figwheel.client.load_all_js_files.call(null,inst_19491);var state_19511__$1 = (function (){var statearr_19520 = state_19511;(statearr_19520[11] = inst_19490);
return statearr_19520;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19511__$1,2,inst_19492);
} else
{return null;
}
}
}
}
}
}
});})(c__8594__auto__,map__19488,map__19488__$1,opts,on_jsload,before_jsload,map__19489,map__19489__$1,files))
;return ((function (switch__8529__auto__,c__8594__auto__,map__19488,map__19488__$1,opts,on_jsload,before_jsload,map__19489,map__19489__$1,files){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_19524 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19524[0] = state_machine__8530__auto__);
(statearr_19524[1] = 1);
return statearr_19524;
});
var state_machine__8530__auto____1 = (function (state_19511){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_19511);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e19525){if((e19525 instanceof Object))
{var ex__8533__auto__ = e19525;var statearr_19526_19532 = state_19511;(statearr_19526_19532[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19511);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19533 = state_19511;
state_19511 = G__19533;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_19511){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_19511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,map__19488,map__19488__$1,opts,on_jsload,before_jsload,map__19489,map__19489__$1,files))
})();var state__8596__auto__ = (function (){var statearr_19527 = f__8595__auto__.call(null);(statearr_19527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_19527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,map__19488,map__19488__$1,opts,on_jsload,before_jsload,map__19489,map__19489__$1,files))
);
return c__8594__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__19534,link_href){var map__19536 = p__19534;var map__19536__$1 = ((cljs.core.seq_QMARK_.call(null,map__19536))?cljs.core.apply.call(null,cljs.core.hash_map,map__19536):map__19536);var request_url = cljs.core.get.call(null,map__19536__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__19536__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,parent){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,parent){
return (function (state_19557){var state_val_19558 = (state_19557[1]);if((state_val_19558 === 2))
{var inst_19554 = (state_19557[2]);var inst_19555 = parent.removeChild(orig_link);var state_19557__$1 = (function (){var statearr_19559 = state_19557;(statearr_19559[7] = inst_19554);
return statearr_19559;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19557__$1,inst_19555);
} else
{if((state_val_19558 === 1))
{var inst_19552 = cljs.core.async.timeout.call(null,200);var state_19557__$1 = state_19557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19557__$1,2,inst_19552);
} else
{return null;
}
}
});})(c__8594__auto__,parent))
;return ((function (switch__8529__auto__,c__8594__auto__,parent){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_19563 = [null,null,null,null,null,null,null,null];(statearr_19563[0] = state_machine__8530__auto__);
(statearr_19563[1] = 1);
return statearr_19563;
});
var state_machine__8530__auto____1 = (function (state_19557){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_19557);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e19564){if((e19564 instanceof Object))
{var ex__8533__auto__ = e19564;var statearr_19565_19567 = state_19557;(statearr_19565_19567[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19557);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19568 = state_19557;
state_19557 = G__19568;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_19557){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_19557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,parent))
})();var state__8596__auto__ = (function (){var statearr_19566 = f__8595__auto__.call(null);(statearr_19566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_19566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,parent))
);
return c__8594__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__19569){var map__19571 = p__19569;var map__19571__$1 = ((cljs.core.seq_QMARK_.call(null,map__19571))?cljs.core.apply.call(null,cljs.core.hash_map,map__19571):map__19571);var f_data = map__19571__$1;var request_url = cljs.core.get.call(null,map__19571__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__19571__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__19572,files_msg){var map__19594 = p__19572;var map__19594__$1 = ((cljs.core.seq_QMARK_.call(null,map__19594))?cljs.core.apply.call(null,cljs.core.hash_map,map__19594):map__19594);var opts = map__19594__$1;var on_cssload = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__19595_19615 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__19596_19616 = null;var count__19597_19617 = 0;var i__19598_19618 = 0;while(true){
if((i__19598_19618 < count__19597_19617))
{var f_19619 = cljs.core._nth.call(null,chunk__19596_19616,i__19598_19618);figwheel.client.reload_css_file.call(null,f_19619);
{
var G__19620 = seq__19595_19615;
var G__19621 = chunk__19596_19616;
var G__19622 = count__19597_19617;
var G__19623 = (i__19598_19618 + 1);
seq__19595_19615 = G__19620;
chunk__19596_19616 = G__19621;
count__19597_19617 = G__19622;
i__19598_19618 = G__19623;
continue;
}
} else
{var temp__4126__auto___19624 = cljs.core.seq.call(null,seq__19595_19615);if(temp__4126__auto___19624)
{var seq__19595_19625__$1 = temp__4126__auto___19624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19595_19625__$1))
{var c__4295__auto___19626 = cljs.core.chunk_first.call(null,seq__19595_19625__$1);{
var G__19627 = cljs.core.chunk_rest.call(null,seq__19595_19625__$1);
var G__19628 = c__4295__auto___19626;
var G__19629 = cljs.core.count.call(null,c__4295__auto___19626);
var G__19630 = 0;
seq__19595_19615 = G__19627;
chunk__19596_19616 = G__19628;
count__19597_19617 = G__19629;
i__19598_19618 = G__19630;
continue;
}
} else
{var f_19631 = cljs.core.first.call(null,seq__19595_19625__$1);figwheel.client.reload_css_file.call(null,f_19631);
{
var G__19632 = cljs.core.next.call(null,seq__19595_19625__$1);
var G__19633 = null;
var G__19634 = 0;
var G__19635 = 0;
seq__19595_19615 = G__19632;
chunk__19596_19616 = G__19633;
count__19597_19617 = G__19634;
i__19598_19618 = G__19635;
continue;
}
}
} else
{}
}
break;
}
var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,map__19594,map__19594__$1,opts,on_cssload){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,map__19594,map__19594__$1,opts,on_cssload){
return (function (state_19605){var state_val_19606 = (state_19605[1]);if((state_val_19606 === 2))
{var inst_19601 = (state_19605[2]);var inst_19602 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_19603 = on_cssload.call(null,inst_19602);var state_19605__$1 = (function (){var statearr_19607 = state_19605;(statearr_19607[7] = inst_19601);
return statearr_19607;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19605__$1,inst_19603);
} else
{if((state_val_19606 === 1))
{var inst_19599 = cljs.core.async.timeout.call(null,100);var state_19605__$1 = state_19605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19605__$1,2,inst_19599);
} else
{return null;
}
}
});})(c__8594__auto__,map__19594,map__19594__$1,opts,on_cssload))
;return ((function (switch__8529__auto__,c__8594__auto__,map__19594,map__19594__$1,opts,on_cssload){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_19611 = [null,null,null,null,null,null,null,null];(statearr_19611[0] = state_machine__8530__auto__);
(statearr_19611[1] = 1);
return statearr_19611;
});
var state_machine__8530__auto____1 = (function (state_19605){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_19605);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e19612){if((e19612 instanceof Object))
{var ex__8533__auto__ = e19612;var statearr_19613_19636 = state_19605;(statearr_19613_19636[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19637 = state_19605;
state_19605 = G__19637;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_19605){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_19605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,map__19594,map__19594__$1,opts,on_cssload))
})();var state__8596__auto__ = (function (){var statearr_19614 = f__8595__auto__.call(null);(statearr_19614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_19614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,map__19594,map__19594__$1,opts,on_cssload))
);
return c__8594__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__19638){var map__19643 = p__19638;var map__19643__$1 = ((cljs.core.seq_QMARK_.call(null,map__19643))?cljs.core.apply.call(null,cljs.core.hash_map,map__19643):map__19643);var opts = map__19643__$1;var on_compile_fail = cljs.core.get.call(null,map__19643__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__19643__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__19643__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__19643__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__19644 = cljs.core._EQ_;var expr__19645 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__19644.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__19645)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19644.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__19645)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19644.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__19645)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__19643,map__19643__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19650 = {"detail":url};return obj19650;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__19651){var map__19653 = p__19651;var map__19653__$1 = ((cljs.core.seq_QMARK_.call(null,map__19653))?cljs.core.apply.call(null,cljs.core.hash_map,map__19653):map__19653);var class$ = cljs.core.get.call(null,map__19653__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__19653__$1,new cljs.core.Keyword(null,"message","message",1968829305));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19654){var map__19660 = p__19654;var map__19660__$1 = ((cljs.core.seq_QMARK_.call(null,map__19660))?cljs.core.apply.call(null,cljs.core.hash_map,map__19660):map__19660);var ed = map__19660__$1;var exception_data = cljs.core.get.call(null,map__19660__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__19660__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__19661_19665 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__19662_19666 = null;var count__19663_19667 = 0;var i__19664_19668 = 0;while(true){
if((i__19664_19668 < count__19663_19667))
{var msg_19669 = cljs.core._nth.call(null,chunk__19662_19666,i__19664_19668);console.log(msg_19669);
{
var G__19670 = seq__19661_19665;
var G__19671 = chunk__19662_19666;
var G__19672 = count__19663_19667;
var G__19673 = (i__19664_19668 + 1);
seq__19661_19665 = G__19670;
chunk__19662_19666 = G__19671;
count__19663_19667 = G__19672;
i__19664_19668 = G__19673;
continue;
}
} else
{var temp__4126__auto___19674 = cljs.core.seq.call(null,seq__19661_19665);if(temp__4126__auto___19674)
{var seq__19661_19675__$1 = temp__4126__auto___19674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19661_19675__$1))
{var c__4295__auto___19676 = cljs.core.chunk_first.call(null,seq__19661_19675__$1);{
var G__19677 = cljs.core.chunk_rest.call(null,seq__19661_19675__$1);
var G__19678 = c__4295__auto___19676;
var G__19679 = cljs.core.count.call(null,c__4295__auto___19676);
var G__19680 = 0;
seq__19661_19665 = G__19677;
chunk__19662_19666 = G__19678;
count__19663_19667 = G__19679;
i__19664_19668 = G__19680;
continue;
}
} else
{var msg_19681 = cljs.core.first.call(null,seq__19661_19675__$1);console.log(msg_19681);
{
var G__19682 = cljs.core.next.call(null,seq__19661_19675__$1);
var G__19683 = null;
var G__19684 = 0;
var G__19685 = 0;
seq__19661_19665 = G__19682;
chunk__19662_19666 = G__19683;
count__19663_19667 = G__19684;
i__19664_19668 = G__19685;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__3539__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__19686){var map__19688 = p__19686;var map__19688__$1 = ((cljs.core.seq_QMARK_.call(null,map__19688))?cljs.core.apply.call(null,cljs.core.hash_map,map__19688):map__19688);var opts = map__19688__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19686 = null;if (arguments.length > 0) {
  p__19686 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__19686);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19689){
var p__19686 = cljs.core.seq(arglist__19689);
return watch_and_reload__delegate(p__19686);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map