/*
 =======================================================================*\
|| ###################################################################### ||
|| # vBulletin 5.7.4
|| # ------------------------------------------------------------------ # ||
|| # Copyright 2000-2023 MH Sub I, LLC dba vBulletin. All Rights Reserved.  # ||
|| # This file may not be redistributed in whole or significant part.   # ||
|| # ----------------- VBULLETIN IS NOT FREE SOFTWARE ----------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html   # ||
|| ###################################################################### ||
\*========================================================================*/
// ***************************
// js.compressed/memberchannel.js
// ***************************
vBulletin.memberChannel=function(c){function l(a,b,c){a=a.filter(b).toggleClass("h-disabled",!c);c?a.attr("href",c):a.removeAttr("href")}function g(a,b){function f(a){var b=a.innerWidth(),c=parseInt(a.css("paddingLeft"),10);a=parseInt(a.css("paddingRight"),10);return Math.floor(b-c-a)}function d(a,b){var d=!!b;a.width(b);a.toggleClass("b-groupgrid__item-inner--expanded",d);b=c(".js-groupgrid-item-icon",e).outerWidth();e=c(".js-groupgrid-item-icon-link",e).outerWidth();d&&e>b&&a.removeClass("b-groupgrid__item-inner--expanded");
var e=a.first();d=f(e)-1;a.find(".js-groupgrid-item-icon-link").width(d).height(d)}if(a.length&&(d(a,""),b)){b=a.first();var e=f(b.closest(".b-groupgrid__item")),k=Math.ceil(b.outerWidth(!0))-f(b);b.closest(".b-groupgrid__item").is(".b-flexgrid__item--lastrow")||(a.each(function(){var a=c(this).closest(".b-groupgrid__item");if(a.is(".b-flexgrid__item--lastrow"))return!0;e=Math.min(e,f(a))}),d(a,e-k-1))}}function m(a,b){a=c(".b-groupgrid__item-inner");b&&b.isResize&&a.css({opacity:"0"});g(a,!1)}function n(a,
b){a=c(".b-groupgrid__item-inner");g(a,!0);b&&b.isResize&&a.removeClass("h-tranparent").animate({opacity:"1"},400)}return{updateToolbarButtonPressState:function(a){function b(a){var b=a.data("js-movable-button-clone-id");return c(".js-movable-toolbar-button-clone").filter(function(){return c(this).data("js-movable-button-clone-id")==b})}if(!a.find(".js-button-filter-display-blogs.js-checked").length){var f=a.find(".js-display-blogs-state").data("display-blogs-state");a.find(".js-button-filter-display-blogs").filter('[data-filter-value="{0}"]'.format(f)).addClass("js-checked")}a.find(".js-button-filters .js-button-filter").removeClass("b-button--pressed").each(function(){b(c(this)).removeClass("b-button--pressed")}).filter(".js-checked").addClass("b-button--pressed").each(function(){b(c(this)).addClass("b-button--pressed")})},
updateToolbarPagination:function(a){var b=c(".conversation-toolbar-wrapper .pagenav-controls .pagenav-form",a),f=c(".arrow",b).removeClass("h-disabled"),d=a.find(".js-membergroup-pagination-info"),e=d.find(".js-prevpage").val(),k=d.find(".js-nextpage").val(),g=d.find(".js-pagenum").val()||1;d=d.find(".js-totalpages").val()||1;var h=a.find(".js-under-toolbar-pagenav .js-pagenav");a=a.find(".js-pagenav").not(h);c(".js-pagenum",b).val(g);c(".pagetotal",b).text(d);l(f,"[rel=prev]",e);l(f,"[rel=next]",
k);0==a.length?h.html(""):h.html(a.clone().html())},initFlexGridAdjustments:function(a){a.on("vbulletin:flexgridstart",".js-flexgrid",m).on("vbulletin:flexgridready",".js-flexgrid",n)}}}(jQuery);
;

// ***************************
// js.compressed/sb_blogs.js
// ***************************
vBulletin.precache(["create_a_blog","error_creating_user_blog_channel","error_fetching_user_blog_channels","select_a_blog"],[]);
(function(a){function b(b){var g=a(this).closest(".canvas-widget").data("blog-channel-id");vBulletin.AJAX({call:"/ajax/api/user/getGitCanStart",data:{parentNodeId:g},success:function(c){if(a.isArray(c)){var b=c.length;if(1<b){var e=a("#user-blogs-dialog"),f=a("select.custom-dropdown",e);a.each(c,function(b,d){a("<option />").val(d.nodeid).html(d.title).appendTo(f)});e.dialog({title:vBulletin.phrase.get("select_a_blog"),autoOpen:!1,modal:!0,resizable:!1,closeOnEscape:!1,showCloseButton:!1,width:500,
dialogClass:"dialog-container create-blog-dialog-container dialog-box",open:function(){f.removeClass("h-hide").selectBox()},close:function(){f.selectBox("destroy").find("option").remove()},create:function(){a(".btnContinue",this).on("click",function(){location.href="{0}/new-content/{1}".format(pageData.baseurl,a("select.custom-dropdown",e).val())});a(".btnCancel",this).on("click",function(){e.dialog("close")})}}).dialog("open")}else 1==b?location.href="{0}/new-content/{1}".format(pageData.baseurl,
c[0].nodeid):vBulletin.AJAX({call:"/ajax/api/blog/canCreateBlog",data:{parentid:g},success:function(b){var d=a("#create-blog-dialog").dialog({title:vBulletin.phrase.get("create_a_blog"),autoOpen:!1,modal:!0,resizable:!1,closeOnEscape:!1,showCloseButton:!1,width:500,dialogClass:"dialog-container create-blog-dialog-container dialog-box",create:function(){vBulletin.ajaxForm.apply(a("form",this),[{success:function(b,d,c,e){a.isPlainObject(b)&&0<Number(b.nodeid)?location.href="{0}/new-content/{1}".format(pageData.baseurl,
b.nodeid):vBulletin.error("error","error_creating_user_blog_channel")},error_phrase:"error_creating_user_blog_channel"}]);a(".btnCancel",this).on("click",function(){d.dialog("close")});a(".blog-adv-settings",this).on("click",function(){var b=a.trim(a(".blog-title",d).val()),c=a.trim(a(".blog-desc",d).val());return b||c?(location.href="{0}?blogtitle={1}&blogdesc={2}".format(this.href,encodeURIComponent(b),encodeURIComponent(c)),!1):!0})},open:function(){a("form",this).trigger("reset")}}).dialog("open")},
title_phrase:"create_a_blog"})}else vBulletin.error("error","error_fetching_user_blog_channels")},error_phrase:"error_fetching_user_blog_channels"})}if(!vBulletin.pageHasSelectors([".bloghome-widget"]))return!1;a(function(){a(".bloghome-widget").offon("click",".conversation-toolbar .new-conversation-btn",b);vBulletin.memberChannel.initFlexGridAdjustments(a(".bloghome-widget"))})})(jQuery);
;

// ***************************
// js.compressed/blog_summary.js
// ***************************
vBulletin.precache(["blog_subscribers_list","blog_subscribers","unable_to_contact_server_please_try_again"],[]);
(function(b){if(!vBulletin.pageHasSelectors([".summary-widget",".blogadmin-widget"]))return!1;var h=function(){b("#blogSubscribersSeeAll").off("click").on("click",function(a){g(b(this).attr("data-node-id"));a.stopPropagation();return!1})},a,g=function(f,c,d){a=b("#blogSubscribersAll").dialog({title:vBulletin.phrase.get("blog_subscribers_list"),autoOpen:!1,modal:!0,resizable:!1,closeOnEscape:!1,showCloseButton:!1,width:450,dialogClass:"dialog-container dialog-box blog-subscribers-dialog"});vBulletin.pagination({context:a,
onPageChanged:function(a,b){g(f,a)}});a.off("click",".blog-subscribers-close").on("click",".blog-subscribers-close",function(){a.dialog("close")});a.off("click",".action_button").on("click",".action_button",function(){if(!b(this).hasClass("subscribepending_button")){var a=b(this),c=parseInt(a.attr("data-userid"),10),e="";a.hasClass("subscribe_button")?e="add":a.hasClass("unsubscribe_button")&&(e="delete");"number"==typeof c&&e&&vBulletin.AJAX({call:"/profile/follow-button",data:{"do":e,follower:c,
type:"follow_members"},success:function(b){if(1==b||2==b){if("add"==e){var c="subscribe_button b-button b-button--special";var d=(1==b?"subscribed":"subscribepending")+"_button b-button b-button--secondary";var f=1==b?"following":"following_pending";a.attr("disabled","disabled")}else"delete"==e&&(c="subscribed_button unsubscribe_button b-button b-button--special",d="subscribe_button b-button b-button--secondary",f="follow");a.removeClass(c).addClass(d).text(vBulletin.phrase.get(f))}},title_phrase:"profile_guser",
error_phrase:"unable_to_contact_server_please_try_again"})}});c||(c=1);d||(d=10);vBulletin.AJAX({call:"/ajax/render/subscribers_list",data:{nodeid:f,page:c,perpage:d},success:function(c){a.dialog("close");b(".blog-subscribers-content",a).html(c);a.dialog("open")},title_phrase:"blog_subscribers",error_phrase:"unable_to_contact_server_please_try_again"})};b(document).ready(function(){h()})})(jQuery);
;

