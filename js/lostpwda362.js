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
vBulletin.precache("lostpw_email_sent forgot_password_title invalid_email_address please_enter_your_email_address please_enter_a_username requiredfieldmissing activation_code activate_your_account".split(" "),[]);
(function(b){function f(){location.href=pageData.baseurl}function g(a,c,d){a="";c=b(".email",c);d=c.val();""==b.trim(d)?a="please_enter_your_email_address":isValidEmailAddress(d)||(a="invalid_email_address");a&&vBulletin.error("error",a,c);return!a}function h(){vBulletin.ajaxForm.apply(b("#frmActivateuser"),[{beforeSubmit:function(a,c,d){a="";d=b(".activateid",c);if(""==b.trim(d.val())){a=["requiredfieldmissing",vBulletin.phrase.get("activation_code")];var e=d}c=b(".username",c);""==b.trim(c.val())&&
(a="please_enter_a_username",e=c);a&&vBulletin.warning("error",a,e);return!a},success:function(a,c,b,e){vBulletin.alert("activate_your_account",a.msg,null,f)}}])}function k(){vBulletin.ajaxForm.apply(b("#frmActivateemail"),[{beforeSubmit:g,success:function(a,c,b,e){vBulletin.alert("email_activation_codes",a.msg,null,f)}}])}function l(){vBulletin.hv.reset();vBulletin.ajaxForm.apply(b("#frmLostpw"),[{beforeSubmit:g,success:function(a){vBulletin.alert("forgot_password_title","lostpw_email_sent",null,
f)},api_error:vBulletin.hv.resetOnError}])}b(function(){l();h();k()})})(jQuery);
