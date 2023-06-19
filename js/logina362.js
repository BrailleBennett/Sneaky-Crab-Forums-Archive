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
(function(b,f){function e(a){a.preventDefault();var c=b(a.currentTarget).closest(".js-login-form-main");a=c.closest(".js-login-form-main-container");var d=b(".js-error-box",a),e=b(".js-login-message-box",a),k=b(".js-login-button",a);e.height(c.height());var g=a=>{k.prop("disabled",!a);e.toggleClass("h-hide",a);c.toggleClass("h-hide",!a)},h=a=>{d.html(a).toggleClass("h-hide",!a);c.find(".js-login-username, .js-login-password").toggleClass("badlogin",!!a)};g(!1);h("");f.ajaxtools.ajaxSilent({call:"/auth/ajax-login",
data:c.serializeArray(),success:()=>location.reload(),api_error:a=>{c.find(".js-login-password").val("");h(f.phrase.get(a[0]));g(!0)},error:()=>{location.href=pageData.baseurl}})}var d=b(document);d.on("click",".js-login-button",e);d.on("keydown",".js-login-username, .js-login-password",a=>{13==a.keyCode&&e(a)});d.on("focus",".js-login-username, .js-login-password",function(a){b(this).removeClass("badlogin")});d.on("vb-login",()=>location.reload())})(jQuery,vBulletin);
