$(document).ready(function(){$("#planner_button").attr("href","#");if("larry"==rcmail.env.skin){var d=rcmail.get_cookie("minimalmode");if(parseInt(d)||null===d&&850>$(window).height())$("#planner_controls_container").css("top","62px"),$("#control_bar").css("top","92px"),$("#planner_items").css("top","112px");$(".minmodetoggle").click(function(){var a=rcmail.get_cookie("minimalmode");parseInt(a)||null===a&&850>$(window).height()?($("#planner_controls_container").css("top","85px"),$("#control_bar").css("top",
"115px"),$("#planner_items").css("top","135px"),$("#filter_bar").attr("style","top:"+(parseInt($("#filter_bar").css("top"))+25)+"px")):($("#planner_controls_container").css("top","62px"),$("#control_bar").css("top","92px"),$("#planner_items").css("top","112px"),$("#filter_bar").attr("style","top:"+(parseInt($("#filter_bar").css("top"))-25)+"px"))})}$("#planner_button").addClass("button-selected");$(document).bind("contextmenu",function(){});"larry"==rcmail.env.skin&&($("#planner_button").children().css("color",
"#3cf"),1==rcmail.get_cookie("minimalmode")&&$("#taskbar a.button-planner span.button-inner").css("background","#2c2c2c url(plugins/planner/skins/larry/images/planner.png) 4px -43px no-repeat"),$(window).resize(function(){1==rcmail.get_cookie("minimalmode")?$("#taskbar a.button-planner span.button-inner").css("background","#2c2c2c url(plugins/planner/skins/larry/images/planner.png) 4px -43px no-repeat"):$("#taskbar a.button-planner span.button-inner").css("background","#2c2c2c url(plugins/planner/skins/larry/images/planner.png) 4px -45px no-repeat")}));
rcmail.addEventListener("plugin.planner_drop_success",function(a){rcmail.http_post("plugin.planner_remove","_id="+a)});rcmail.addEventListener("plugin.planner_birthdays",function(){"birthdays"==rcmail.env.planner_filter&&$("#fall").trigger("click");rcmail.http_post("plugin.planner_retrieve","_p="+rcmail.env.planner_items)});rcmail.addEventListener("plugin.planner_getprefs",function(a){rcmail.env.planner_items=a[0];$("#controls").val(a[0]);$("#controls").val(rcmail.env.planner_items);$(".lcontrol").css("font-weight",
"normal");$("#c"+rcmail.env.planner_items).css("font-weight","bold");rcmail.http_post("plugin.planner_retrieve","_p="+rcmail.env.planner_items)});rcmail.addEventListener("plugin.planner_replace",function(a){$("#"+a[0]).html(a[1]);$("#"+a[0]).removeClass("drag_nodate");$("#"+a[0]).removeClass("drag_datetime");$("#"+a[0]).addClass(a[3]);!0===a[2]&&$("#"+a[0]).addClass("today");planner_init();planner_show(rcmail.env.planner_items);$("#controls").val(rcmail.env.planner_items);$(".lcontrol").css("font-weight",
"normal");$("#c"+rcmail.env.planner_items).css("font-weight","bold");planner_overlay_toggle(!1)});rcmail.addEventListener("plugin.planner_insert",function(a){$("#planner_items_list").append('<li class="'+a[2]+'" id="'+a[0]+'">'+a[1]+"</li>");planner_init();planner_drag();planner_show(rcmail.env.planner_items);$("#controls").val(rcmail.env.planner_items);$(".lcontrol").css("font-weight","normal");$("#c"+rcmail.env.planner_items).css("font-weight","bold");planner_overlay_toggle(!1)});rcmail.addEventListener("plugin.planner_retrieve",
function(a){rcmail.env.planner_last_filter=!1;rcmail.env.planner_blink=!1;$("#planner_items").html(a[0]);planner_init(a[1]);planner_show(rcmail.env.planner_items);$("#controls").val(rcmail.env.planner_items);$(".lcontrol").css("font-weight","normal");$("#c"+rcmail.env.planner_items).css("font-weight","bold");0==a[4]?($("#cbirthdays").prop("checked",!1),$("#cbirthdays").attr("title",rcmail.gettext("planner.birthdays_yes")),$("#birthdays_count").hide()):0<a[1]&&($("#birthdays_count").text(a[1]),1==
a[1]?$("#bdlabel").html(rcmail.gettext("planner.birthdays_singular")):$("#bdlabel").html(rcmail.gettext("planner.birthdays")));rcmail.env.planner_tzoffset=parseInt(a[6])+60*(new Date).getTimezoneOffset();a=[];a=$("#planner_datetimepicker").datepicker("option","monthNamesShort");var b="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),c;for(c in b)rcmail.add_label("planner."+b[c],a[c]),b[c]!=a[c]&&$("."+b[c]).html(planner_html_sanitize(a[c]));planner_overlay_toggle(!1);window.setTimeout("planner_show_overdue_count()",
6E4);planner_drag()});rcmail.addEventListener("plugin.planner_reload",function(){rcmail.env.planner_last_filter=!1;$("#c"+rcmail.env.planner_items).css("font-weight","bold");rcmail.http_post("plugin.planner_retrieve","_p="+rcmail.env.planner_items)});rcmail.addEventListener("plugin.planner_success",function(a){a[2]&&"function"==typeof planner_refresh_notes_count&&planner_refresh_notes_count(a[2]);switch(a[0]){case "done":$("#"+a[1]).children().next().removeClass("done");$("#"+a[1]).children().next().addClass("delete");
$("#done_count").html(parseInt($("#done_count").html())+1);$("#all_count").html(Math.max(parseInt($("#all_count").html())-1,0));$("#today_count").html(Math.max(parseInt($("#today_count").html())-1,0));$("#tomorrow_count").html(Math.max(parseInt($("#tomorrow_count").html())-1,0));$("#week_count").html(Math.max(parseInt($("#week_count").html())-1,0));rcmail.env.planner_counts.done+=1;rcmail.env.planner_counts.today=Math.max(rcmail.env.planner_counts.today-1,0);rcmail.env.planner_counts.tomorrow=Math.max(rcmail.env.planner_counts.tomorrow-
1,0);rcmail.env.planner_counts.week=Math.max(rcmail.env.planner_counts.week-1,0);planner_show_overdue_count();break;case "unstar":$("#"+a[1]).children().removeClass("star");$("#"+a[1]).children().addClass("nostar");$("#"+a[1]).children().attr("title",rcmail.gettext("planner.star_plan"));$("#starred_count").html(Math.max(parseInt($("#starred_count").html())-1,0));rcmail.env.planner_counts.starred=Math.max(rcmail.env.planner_counts.starred-1,0);"starred"==rcmail.env.planner_items&&$("#"+a[1]).remove();
break;case "star":$("#"+a[1]).children().removeClass("nostar");$("#"+a[1]).children().addClass("star");$("#"+a[1]).children().attr("title",rcmail.gettext("planner.unstar_plan"));rcmail.env.planner_counts.starred+=1;$("#starred_count").html(parseInt($("#starred_count").html())+1);break;case "delete":$("#"+a[1]).children().next().removeClass("delete");$("#"+a[1]).children().next().addClass("remove");$("#done_count").html(Math.max(parseInt($("#done_count").html())-1,0));$("#deleted_count").html(parseInt($("#deleted_count").html())+
1);rcmail.env.planner_counts.done=Math.max(rcmail.env.planner_counts.done-1,0);rcmail.env.planner_counts.deleted+=1;planner_items=0;$("#planner_items_list li").each(function(){$(this).is(":visible")&&planner_items++});0==planner_items&&($("#controls").val("today"),rcmail.env.planner_items="today",$(".lcontrol").css("font-weight","normal"),$("#ctoday").css("font-weight","bold"));break;case "remove":$("#"+a[1]).remove();$("#deleted_count").html(parseInt($("#deleted_count").html())-1);rcmail.env.planner_counts.deleted-=
1;planner_items=0;$("#planner_items_list li").each(function(){$(this).is(":visible")&&planner_items++});0==planner_items&&($("#controls").val("today"),rcmail.env.planner_items="today",$(".lcontrol").css("font-weight","normal"),$("#ctoday").css("font-weight","bold"));break;case "created":planner_overlay_toggle(!1);return}rcmail.env.planner_last_filter=!1;planner_show(rcmail.env.planner_items);planner_overlay_toggle(!1)});js_time_formats["g:i a"]="h:MM tt";js_time_formats["H:i"]="HH:MM";js_time_formats["G:i"]=
"h:MM";js_time_formats["h:i A"]="HH:MM TT";js_date_formats["Y-m-d"]="yy-mm-dd";js_date_formats["m-d-Y"]="mm-dd-yy";js_date_formats["d-m-Y"]="dd-mm-yy";js_date_formats["Y/m/d"]="yy/mm/dd";js_date_formats["m/d/Y"]="mm/dd/yy";js_date_formats["d/m/Y"]="dd/mm/yy";js_date_formats["d.m.Y"]="dd.mm.yy";js_date_formats["j.n.Y"]="d.m.yy";rcmail.http_post("plugin.planner_retrieve","_p=init");$("#planner_raw").bind("blur",function(){$("#planner_raw").focus()});$("a.done").live("click",function(){planner_overlay_toggle(!0);
rcmail.http_post("plugin.planner_done","_id="+$(this).parent().attr("id"))});$("a.star").live("click",function(){planner_overlay_toggle(!0);rcmail.http_post("plugin.planner_unstar","_id="+$(this).parent().attr("id"))});$("a.nostar").live("click",function(){$(this).next().hasClass("birthday")||(planner_overlay_toggle(!0),rcmail.http_post("plugin.planner_star","_id="+$(this).parent().attr("id")))});$("a.delete").live("click",function(){planner_overlay_toggle(!0);rcmail.http_post("plugin.planner_delete",
"_id="+$(this).parent().attr("id"))});$("a.remove").live("click",function(){planner_overlay_toggle(!0);rcmail.http_post("plugin.planner_remove","_id="+$(this).parent().attr("id"))});$("#planner_done").click(function(){$("#planner_deleted").prop("checked",!1);$(this).prop("checked")?$("#planner_preview_done").addClass("pdone"):$("#planner_preview_done").removeClass("pdone")});$("#planner_starred").click(function(){$(this).prop("checked")?$("#planner_preview_star").addClass("pstar"):($("#planner_preview_star").removeClass("pstar"),
$("#planner_preview_star").addClass("pnostar"))});$("#planner_deleted").click(function(){$("#planner_done").prop("checked",!1);$(this).prop("checked")?($("#planner_preview_done").removeClass("pdone"),$("#planner_preview_done").addClass("pdelete")):$("#planner_preview_done").removeClass("pdelete")});$(".pnostar").live("click",function(){$("#planner_preview_star").removeClass("pnostar");$("#planner_preview_star").addClass("pstar");$("#planner_starred").prop("checked",!0)});$(".pstar").live("click",
function(){$("#planner_preview_star").removeClass("pstar");$("#planner_preview_star").addClass("pnostar");$("#planner_starred").prop("checked",!1)});$(".pdone").live("click",function(){$("#planner_preview_done").removeClass("pdelete");$("#planner_preview_done").removeClass("pdone");$("#planner_done").prop("checked",!1);$("#planner_deleted").prop("checked",!1)});$(".pdelete").live("click",function(){$("#planner_preview_done").removeClass("pdelete");$("#planner_preview_done").addClass("pdone");$("#planner_done").prop("checked",
!0);$("#planner_deleted").prop("checked",!1)});$("#planner_controls a").mouseover(function(){$(this).css("font-style","italic")});$("#planner_controls a").mouseout(function(){$(this).css("font-style","normal")});$(".edit").live("mouseover",function(){$(this).css("font-style","italic")});$(".edit").live("mouseout",function(){$(this).css("font-style","normal")});$(".lcontrol").live("click",function(){if(0<rcmail.env.planner_counts[$(this).attr("id").substr(1)]){$("#controls").val($(this).attr("id").substr(1));
$(".lcontrol").css("font-weight","normal");$(this).css("font-weight","bold");var a=$("#controls").val();rcmail.env.planner_items=a;planner_save_prefs();planner_show(a)}});$("#controls").change(function(){var a=$(this).val();0<rcmail.env.planner_counts[a]?($(".lcontrol").css("font-weight","normal"),$("#c"+a).css("font-weight","bold"),rcmail.env.planner_items=a,planner_save_prefs(),planner_show(a)):$(this).val(rcmail.env.planner_select)});$("#all").click(function(){0<rcmail.env.planner_counts.all&&
($(".lcontrol").css("font-weight","normal"),$("#call").css("font-weight","bold"),rcmail.env.planner_items="all",planner_save_prefs(),$("#controls").val("all"),planner_show("all"))});$("#today").click(function(){0<rcmail.env.planner_counts.today&&($(".lcontrol").css("font-weight","normal"),$("#ctoday").css("font-weight","bold"),rcmail.env.planner_items="today",planner_save_prefs(),$("#controls").val("today"),planner_show("today"))});$("#tomorrow").click(function(){0<rcmail.env.planner_counts.tomorrow&&
($(".lcontrol").css("font-weight","normal"),$("#ctomorrow").css("font-weight","bold"),rcmail.env.planner_items="tomorrow",planner_save_prefs(),$("#controls").val("tomorrow"),planner_show("tomorrow"))});$("#expunge").click(function(){rcmail.env.planner_items="deleted";planner_save_prefs();$("#controls").val("deleted");planner_overlay_toggle(!0);rcmail.http_post("plugin.planner_expunge","")});planner_keypress();$("#new").click(function(){planner_dialog_reset_gui();planner_dialog()});planner_datetimepicker();
$(".nodate").live("click",function(){var a=$(this).text();"..."==a&&(a="");planner_dialog_edit($(this),a,!1)});$(".datetime").live("click",function(){var a=$(this).prev().val(),b=$(this).text();"..."==b&&(b="");"birthday"!=$(this).parent().attr("class")&&planner_dialog_edit($(this),b,a)});$("#planner_autocomplete").click(function(){if($("#planner_autocomplete").is(":visible")){$("#planner_raw").val($("#planner_autocomplete_content").html());$("#planner_autocomplete_content").html("");$("#planner_autocomplete").hide();
$("#planner_text").val("");$("#planner_datetime").val("");var a=planner_dialog_parse($("#planner_raw").val()),b=a[1]&&a[0]?a[1]+" "+a[0]:!1,c=$("#planner_raw").val();a[2]&&(c=a[2]);planner_dialog_preview(c,b)}});d=$("#filter").offset().left+parseInt($("#filter_bar_fudge_left").html());d="top: "+($("#filter").offset().top+parseInt($("#filter_bar_fudge_top").html()))+"px; left: "+d+"px;";$("#filter_selector").attr("style",d);$("#filter").click(function(){$("#filter_selector").toggle()});$("#filter_selector").click(function(){$("#filter_selector").hide()});
$("#fall").click(function(){rcmail.env.planner_search_mode?(rcmail.env.planner_search_mode=!1,$("#planner_input").dialog("close"),$("#c"+rcmail.env.planner_items).trigger("click")):(rcmail.env.planner_filter="all",planner_save_prefs(),planner_show(rcmail.env.planner_items));$("#dfilter").text(rcmail.gettext("planner.nofilter"));$(".flink").css("font-weight","normal");$(this).css("font-weight","bold")});$("#fplans").click(function(){rcmail.env.planner_filter="plans";planner_save_prefs();planner_show(rcmail.env.planner_items);
$("#dfilter").text(rcmail.gettext("planner.plans"));$(".flink").css("font-weight","normal");$(this).css("font-weight","bold")});$("#ftodos").click(function(){rcmail.env.planner_filter="todos";planner_save_prefs();planner_show(rcmail.env.planner_items);$("#dfilter").text(rcmail.gettext("planner.todos"));$(".flink").css("font-weight","normal");$(this).css("font-weight","bold")});$("#fbirthdays").click(function(){rcmail.env.planner_filter="birthdays";planner_save_prefs();planner_show(rcmail.env.planner_items);
$("#dfilter").text(rcmail.gettext("planner.birthdays"));$(".flink").css("font-weight","normal");$(this).css("font-weight","bold")});$("#fnone").click(function(){$("#fall").trigger("click")});$("#cbirthdays").click(function(){if($(this).prop("checked")){$("#lbirthdays").show();$("#birthdays_count").show();$("#cbirthdays").attr("title",rcmail.gettext("planner.birthdays_no"));var a=1}else $("#lbirthdays").hide(),$("#birthdays_count").hide(),$("#cbirthdays").attr("title",rcmail.gettext("planner.birthdays_yes")),
a=0;planner_overlay_toggle(!0);rcmail.http_post("plugin.planner_prefsbirthdays","_v="+a)});$(".longdatetime").html(planner_html_sanitize(planner_dialog_ampm_replace((new Date).format(js_date_formats[rcmail.env.rc_date_format].replace(/yy/i,"yyyy")+" "+js_time_formats[rcmail.env.rc_time_format]))));$(".shortdatetime").html(planner_html_sanitize(planner_dialog_ampm_replace((new Date((new Date).getTime()+1E3*(86400/4.2))).format(js_date_formats[rcmail.env.rc_date_format].replace(/(\-yy)|(yy\-)/i,"")+
" "+js_time_formats[rcmail.env.rc_time_format]))));$(".longtime").html(planner_html_sanitize(planner_dialog_ampm_replace((new Date((new Date).getTime()+27E6)).format(js_time_formats[rcmail.env.rc_time_format]))));$(".shorttime").html(planner_html_sanitize(planner_dialog_ampm_replace((new Date((new Date).getTime()+1E3*(86400/2.2))).format(js_time_formats[rcmail.env.rc_time_format].replace(/:mm/i,"")))));$(".ltoday").html(planner_html_sanitize($(".ltoday").html().toLowerCase()));$(".ltomorrow").html(planner_html_sanitize($(".ltomorrow").html().toLowerCase()));
$(".hint").click(function(){$("#planner_raw").val($(this).text()+" "+$("#planner_text").val());planner_dialog_preview($("#planner_text").val(),$(this).text())});$("#help").click(function(){$("#planner_help").slideToggle("slow")})});