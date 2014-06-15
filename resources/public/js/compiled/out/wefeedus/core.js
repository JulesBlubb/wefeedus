// Compiled by ClojureScript 0.0-2227
goog.provide('wefeedus.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('konserve.store');
goog.require('kioo.core');
goog.require('geschichte.sync');
goog.require('cljs.core.async');
goog.require('hasch.core');
goog.require('kioo.om');
goog.require('domina');
goog.require('weasel.repl');
goog.require('geschichte.sync');
goog.require('cljs.core.async');
goog.require('kioo.om');
goog.require('cljs.reader');
goog.require('datascript');
goog.require('domina');
goog.require('kioo.core');
goog.require('cljs.core.async');
goog.require('konserve.store');
goog.require('figwheel.client');
goog.require('geschichte.stage');
goog.require('figwheel.client');
goog.require('geschichte.stage');
goog.require('hasch.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('weasel.repl');
goog.require('datascript');
cljs.core.enable_console_print_BANG_.call(null);
wefeedus.core.markers_source = (new ol.source.Vector(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"features","features",723244975),cljs.core.PersistentVector.EMPTY], null))));
wefeedus.core.markers_layer = (new ol.layer.Vector({"source": wefeedus.core.markers_source}));
wefeedus.core.geo_map = (new ol.Map(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",4427965699),"map",new cljs.core.Keyword(null,"layers","layers",4199139508),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ol.layer.Tile(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",4412365709),(new ol.source.OSM())], null)))),wefeedus.core.markers_layer], null),new cljs.core.Keyword(null,"view","view",1017523735),(new ol.View2D(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",3944857543),ol.proj.transform.call(null,[8.82,51.42],"EPSG:4326","EPSG:3857"),new cljs.core.Keyword(null,"zoom","zoom",1017648965),13], null))))], null))));
wefeedus.core.connect_repl = (function connect_repl(){if(cljs.core.truth_(wefeedus.core.hasOwnProperty("conn")))
{return null;
} else
{wefeedus.core.conn = weasel.repl.connect.call(null,"ws://localhost:17782",new cljs.core.Keyword(null,"verbose","verbose",1365011700),true);
}
});
console.log("HAIL TO THE LAMBDA!");
wefeedus.core.eval_fn = new cljs.core.PersistentArrayMap.fromArray([cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.Symbol(null,"replace","replace",-546034579,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old","old",-1640421408,null),new cljs.core.Symbol(null,"params","params",1659007807,null)], null),new cljs.core.Symbol(null,"params","params",1659007807,null)),(function replace(old,params){return params;
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old","old",-1640421408,null),new cljs.core.Symbol(null,"params","params",1659007807,null)], null),cljs.core.list(new cljs.core.Keyword(null,"db-after","db-after",1658340159),cljs.core.list(new cljs.core.Symbol("d","transact","d/transact",-359647272,null),new cljs.core.Symbol(null,"old","old",-1640421408,null),new cljs.core.Symbol(null,"params","params",1659007807,null)))),(function (old,params){return new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(datascript.transact.call(null,old,params));
})], true, false);
wefeedus.core.add_marker = (function add_marker(stage,e){var marker_id = hasch.core.uuid.call(null);var ts = (new Date());var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,2], null);var user = cljs.core.get_in.call(null,cljs.core.deref.call(null,stage),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"user","user",1017503549)], null));var c__8594__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto__,marker_id,ts,pos,user){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto__,marker_id,ts,pos,user){
return (function (state_17869){var state_val_17870 = (state_17869[1]);if((state_val_17870 === 3))
{var inst_17867 = (state_17869[2]);var state_17869__$1 = state_17869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17869__$1,inst_17867);
} else
{if((state_val_17870 === 2))
{var inst_17855 = (state_17869[2]);var inst_17856 = ["eve@polyc0l0r.net"];var inst_17857 = [new cljs.core.UUID("98bac5ab-7e88-45c2-93e6-831654b9bff4")];var inst_17858 = ["master",null];var inst_17859 = (new cljs.core.PersistentArrayMap(null,1,inst_17858,null));var inst_17860 = (new cljs.core.PersistentHashSet(null,inst_17859,null));var inst_17861 = [inst_17860];var inst_17862 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17857,inst_17861);var inst_17863 = [inst_17862];var inst_17864 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17856,inst_17863);var inst_17865 = geschichte.stage.commit_BANG_.call(null,stage,inst_17864);var state_17869__$1 = (function (){var statearr_17871 = state_17869;(statearr_17871[7] = inst_17855);
return statearr_17871;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17869__$1,3,inst_17865);
} else
{if((state_val_17870 === 1))
{var inst_17845 = ["eve@polyc0l0r.net",new cljs.core.UUID("98bac5ab-7e88-45c2-93e6-831654b9bff4"),"master"];var inst_17846 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17845,null));var inst_17847 = [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"ts","ts",1013907953)];var inst_17848 = [marker_id,pos,user,ts];var inst_17849 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17847,inst_17848);var inst_17850 = [inst_17849];var inst_17851 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17850,null));var inst_17852 = cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old","old",-1640421408,null),new cljs.core.Symbol(null,"params","params",1659007807,null)], null),cljs.core.list(new cljs.core.Keyword(null,"db-after","db-after",1658340159),cljs.core.list(new cljs.core.Symbol("d","transact","d/transact",-359647272,null),new cljs.core.Symbol(null,"old","old",-1640421408,null),new cljs.core.Symbol(null,"params","params",1659007807,null))));var inst_17853 = geschichte.stage.transact.call(null,stage,inst_17846,inst_17851,inst_17852);var state_17869__$1 = state_17869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17869__$1,2,inst_17853);
} else
{return null;
}
}
}
});})(c__8594__auto__,marker_id,ts,pos,user))
;return ((function (switch__8529__auto__,c__8594__auto__,marker_id,ts,pos,user){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_17875 = [null,null,null,null,null,null,null,null];(statearr_17875[0] = state_machine__8530__auto__);
(statearr_17875[1] = 1);
return statearr_17875;
});
var state_machine__8530__auto____1 = (function (state_17869){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_17869);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e17876){if((e17876 instanceof Object))
{var ex__8533__auto__ = e17876;var statearr_17877_17879 = state_17869;(statearr_17877_17879[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17869);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17880 = state_17869;
state_17869 = G__17880;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_17869){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_17869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto__,marker_id,ts,pos,user))
})();var state__8596__auto__ = (function (){var statearr_17878 = f__8595__auto__.call(null);(statearr_17878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto__);
return statearr_17878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto__,marker_id,ts,pos,user))
);
return c__8594__auto__;
});
wefeedus.core.add_marker.call(null,wefeedus.core.stage,cljs.core.PersistentArrayMap.EMPTY);
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"datascript.DB","datascript.DB",-904940080,null),datascript.map__GT_DB);
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"datascript.Datom","datascript.Datom",-557839595,null),datascript.map__GT_Datom);
var c__8594__auto___17936 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8594__auto___17936){
return (function (){var f__8595__auto__ = (function (){var switch__8529__auto__ = ((function (c__8594__auto___17936){
return (function (state_17914){var state_val_17915 = (state_17914[1]);if((state_val_17915 === 4))
{var inst_17910 = (state_17914[2]);var inst_17911 = (function (){return ((function (inst_17910,state_val_17915,c__8594__auto___17936){
return (function (k,a,o,new$){var seq__17916_17937 = cljs.core.seq.call(null,wefeedus.core.markers_source.getFeatures());var chunk__17917_17938 = null;var count__17918_17939 = 0;var i__17919_17940 = 0;while(true){
if((i__17919_17940 < count__17918_17939))
{var f_17941 = cljs.core._nth.call(null,chunk__17917_17938,i__17919_17940);wefeedus.core.markers_source.removeFeature(f_17941);
{
var G__17942 = seq__17916_17937;
var G__17943 = chunk__17917_17938;
var G__17944 = count__17918_17939;
var G__17945 = (i__17919_17940 + 1);
seq__17916_17937 = G__17942;
chunk__17917_17938 = G__17943;
count__17918_17939 = G__17944;
i__17919_17940 = G__17945;
continue;
}
} else
{var temp__4126__auto___17946 = cljs.core.seq.call(null,seq__17916_17937);if(temp__4126__auto___17946)
{var seq__17916_17947__$1 = temp__4126__auto___17946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17916_17947__$1))
{var c__4295__auto___17948 = cljs.core.chunk_first.call(null,seq__17916_17947__$1);{
var G__17949 = cljs.core.chunk_rest.call(null,seq__17916_17947__$1);
var G__17950 = c__4295__auto___17948;
var G__17951 = cljs.core.count.call(null,c__4295__auto___17948);
var G__17952 = 0;
seq__17916_17937 = G__17949;
chunk__17917_17938 = G__17950;
count__17918_17939 = G__17951;
i__17919_17940 = G__17952;
continue;
}
} else
{var f_17953 = cljs.core.first.call(null,seq__17916_17947__$1);wefeedus.core.markers_source.removeFeature(f_17953);
{
var G__17954 = cljs.core.next.call(null,seq__17916_17947__$1);
var G__17955 = null;
var G__17956 = 0;
var G__17957 = 0;
seq__17916_17937 = G__17954;
chunk__17917_17938 = G__17955;
count__17918_17939 = G__17956;
i__17919_17940 = G__17957;
continue;
}
}
} else
{}
}
break;
}
var db = cljs.core.get_in.call(null,new$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volatile","volatile",3420844302),new cljs.core.Keyword(null,"val","val",1014020755),"eve@polyc0l0r.net",new cljs.core.UUID("98bac5ab-7e88-45c2-93e6-831654b9bff4"),"master"], null));var qr = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"ts","ts",1013907953),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.zipmap,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"ts","ts",1013907953)], null)),datascript.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.Symbol(null,"?m","?m",-1640529465,null),new cljs.core.Symbol(null,"?pos","?pos",-1638543506,null),new cljs.core.Symbol(null,"?user","?user",-1578750397,null),new cljs.core.Symbol(null,"?ts","?ts",-1640467273,null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",-1640529465,null),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Symbol(null,"?user","?user",-1578750397,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",-1640529465,null),new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Symbol(null,"?pos","?pos",-1638543506,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",-1640529465,null),new cljs.core.Keyword(null,"ts","ts",1013907953),new cljs.core.Symbol(null,"?ts","?ts",-1640467273,null)], null)], null),db)));var seq__17920 = cljs.core.seq.call(null,qr);var chunk__17921 = null;var count__17922 = 0;var i__17923 = 0;while(true){
if((i__17923 < count__17922))
{var map__17924 = cljs.core._nth.call(null,chunk__17921,i__17923);var map__17924__$1 = ((cljs.core.seq_QMARK_.call(null,map__17924))?cljs.core.apply.call(null,cljs.core.hash_map,map__17924):map__17924);var user = cljs.core.get.call(null,map__17924__$1,new cljs.core.Keyword(null,"user","user",1017503549));var pos = cljs.core.get.call(null,map__17924__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));wefeedus.core.markers_source.addFeature((new ol.Feature(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",2859924452),(new ol.geom.Point(ol.proj.transform.call(null,cljs.core.clj__GT_js.call(null,pos),"EPSG:4326","EPSG:3857"))),new cljs.core.Keyword(null,"user","user",1017503549),user], null)))));
{
var G__17958 = seq__17920;
var G__17959 = chunk__17921;
var G__17960 = count__17922;
var G__17961 = (i__17923 + 1);
seq__17920 = G__17958;
chunk__17921 = G__17959;
count__17922 = G__17960;
i__17923 = G__17961;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17920);if(temp__4126__auto__)
{var seq__17920__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17920__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__17920__$1);{
var G__17962 = cljs.core.chunk_rest.call(null,seq__17920__$1);
var G__17963 = c__4295__auto__;
var G__17964 = cljs.core.count.call(null,c__4295__auto__);
var G__17965 = 0;
seq__17920 = G__17962;
chunk__17921 = G__17963;
count__17922 = G__17964;
i__17923 = G__17965;
continue;
}
} else
{var map__17925 = cljs.core.first.call(null,seq__17920__$1);var map__17925__$1 = ((cljs.core.seq_QMARK_.call(null,map__17925))?cljs.core.apply.call(null,cljs.core.hash_map,map__17925):map__17925);var user = cljs.core.get.call(null,map__17925__$1,new cljs.core.Keyword(null,"user","user",1017503549));var pos = cljs.core.get.call(null,map__17925__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));wefeedus.core.markers_source.addFeature((new ol.Feature(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",2859924452),(new ol.geom.Point(ol.proj.transform.call(null,cljs.core.clj__GT_js.call(null,pos),"EPSG:4326","EPSG:3857"))),new cljs.core.Keyword(null,"user","user",1017503549),user], null)))));
{
var G__17966 = cljs.core.next.call(null,seq__17920__$1);
var G__17967 = null;
var G__17968 = 0;
var G__17969 = 0;
seq__17920 = G__17966;
chunk__17921 = G__17967;
count__17922 = G__17968;
i__17923 = G__17969;
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
;})(inst_17910,state_val_17915,c__8594__auto___17936))
})();var inst_17912 = cljs.core.add_watch.call(null,wefeedus.core.stage,new cljs.core.Keyword(null,"marker-update","marker-update",4174425390),inst_17911);var state_17914__$1 = (function (){var statearr_17926 = state_17914;(statearr_17926[7] = inst_17910);
return statearr_17926;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17914__$1,inst_17912);
} else
{if((state_val_17915 === 3))
{var inst_17897 = (state_17914[2]);var inst_17898 = wefeedus.core.stage = inst_17897;var inst_17899 = ["eve@polyc0l0r.net"];var inst_17900 = [new cljs.core.UUID("98bac5ab-7e88-45c2-93e6-831654b9bff4")];var inst_17901 = ["master",null];var inst_17902 = (new cljs.core.PersistentArrayMap(null,1,inst_17901,null));var inst_17903 = (new cljs.core.PersistentHashSet(null,inst_17902,null));var inst_17904 = [inst_17903];var inst_17905 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17900,inst_17904);var inst_17906 = [inst_17905];var inst_17907 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17899,inst_17906);var inst_17908 = geschichte.stage.subscribe_repos_BANG_.call(null,wefeedus.core.stage,inst_17907);var state_17914__$1 = (function (){var statearr_17927 = state_17914;(statearr_17927[8] = inst_17898);
return statearr_17927;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17914__$1,4,inst_17908);
} else
{if((state_val_17915 === 2))
{var inst_17891 = (state_17914[2]);var inst_17892 = wefeedus.core.store = inst_17891;var inst_17893 = geschichte.sync.client_peer.call(null,"CLIENT-PEER",wefeedus.core.store);var inst_17894 = wefeedus.core.peer = inst_17893;var inst_17895 = geschichte.stage.create_stage_BANG_.call(null,"eve@polyc0l0r.net",wefeedus.core.peer,wefeedus.core.eval_fn);var state_17914__$1 = (function (){var statearr_17928 = state_17914;(statearr_17928[9] = inst_17894);
(statearr_17928[10] = inst_17892);
return statearr_17928;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17914__$1,3,inst_17895);
} else
{if((state_val_17915 === 1))
{var inst_17881 = cljs.reader.read_string.call(null,"{#uuid \"2c7fc39d-1fb9-547a-af42-3b3e5fcb9b8f\" {:transactions [[#uuid \"0c39ae5f-0984-56e3-86c8-0434783eb2dc\" #uuid \"123ed64b-1e25-59fc-8c5b-038636ae6c3d\"]], :parents [], :ts #inst \"2014-06-08T18:55:32.654-00:00\", :author \"eve@polyc0l0r.net\"}, #uuid \"0c39ae5f-0984-56e3-86c8-0434783eb2dc\" #datascript.DB{:schema {:hashtags {:db/cardinality :db.cardinality/many}}, :ea {}, :av {}, :max-eid 0, :max-tx 536870912}, #uuid \"123ed64b-1e25-59fc-8c5b-038636ae6c3d\" (fn replace [old params] params), \"eve@polyc0l0r.net\" {#uuid \"98bac5ab-7e88-45c2-93e6-831654b9bff4\" {:branches {\"master\" #{#uuid \"2c7fc39d-1fb9-547a-af42-3b3e5fcb9b8f\"}}, :id #uuid \"98bac5ab-7e88-45c2-93e6-831654b9bff4\", :description \"wefeedus markers.\", :head \"master\", :last-update #inst \"2014-06-08T18:55:32.654-00:00\", :schema {:type \"http://github.com/ghubber/geschichte\", :version 1}, :causal-order {#uuid \"2c7fc39d-1fb9-547a-af42-3b3e5fcb9b8f\" []}, :public false, :pull-requests {}}}}");var inst_17882 = cljs.core.atom.call(null,inst_17881);var inst_17883 = new cljs.core.Symbol(null,"datascript.DB","datascript.DB",-904940080,null);var inst_17884 = new cljs.core.Symbol(null,"datascript.Datom","datascript.Datom",-557839595,null);var inst_17885 = [inst_17883,inst_17884];var inst_17886 = [datascript.map__GT_DB,datascript.map__GT_Datom];var inst_17887 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17885,inst_17886);var inst_17888 = cljs.core.atom.call(null,inst_17887);var inst_17889 = konserve.store.new_mem_store.call(null,inst_17882,inst_17888);var state_17914__$1 = state_17914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17914__$1,2,inst_17889);
} else
{return null;
}
}
}
}
});})(c__8594__auto___17936))
;return ((function (switch__8529__auto__,c__8594__auto___17936){
return (function() {
var state_machine__8530__auto__ = null;
var state_machine__8530__auto____0 = (function (){var statearr_17932 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17932[0] = state_machine__8530__auto__);
(statearr_17932[1] = 1);
return statearr_17932;
});
var state_machine__8530__auto____1 = (function (state_17914){while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_17914);if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8532__auto__;
}
break;
}
}catch (e17933){if((e17933 instanceof Object))
{var ex__8533__auto__ = e17933;var statearr_17934_17970 = state_17914;(statearr_17934_17970[5] = ex__8533__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17971 = state_17914;
state_17914 = G__17971;
continue;
}
} else
{return ret_value__8531__auto__;
}
break;
}
});
state_machine__8530__auto__ = function(state_17914){
switch(arguments.length){
case 0:
return state_machine__8530__auto____0.call(this);
case 1:
return state_machine__8530__auto____1.call(this,state_17914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8530__auto____0;
state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8530__auto____1;
return state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8594__auto___17936))
})();var state__8596__auto__ = (function (){var statearr_17935 = f__8595__auto__.call(null);(statearr_17935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8594__auto___17936);
return statearr_17935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8596__auto__);
});})(c__8594__auto___17936))
);

//# sourceMappingURL=core.js.map