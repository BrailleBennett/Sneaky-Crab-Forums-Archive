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
vBulletin.precache(["bademail","contact_us","nosubject","please_complete_required_fields","sentfeedback"],[]);
(function(a){a(function(){setTimeout(vBulletin.hv.reset,0);a("form.contactusForm").submit(function(h){h.preventDefault();var k=["name","email","subject","other_subject","message"],c={},e={},f,g=!0;a.each(a(this).serializeArray(),function(d,b){if(-1!=a.inArray(b.name,k)){if("other_subject"!=b.name&&0==a.trim(b.value).length)return g=!1;c[b.name]=b.value}else if(f=/^humanverify\[([^\]]*)\]/.exec(b.name))e[f[1]]=b.value});if(!g)return vBulletin.warning("contact_us","please_complete_required_fields"),
!1;vBulletin.AJAX({call:"/ajax/api/contactus/sendMail",data:{maildata:c,hvinput:e},success:function(a){vBulletin.alert("contact_us","sentfeedback",!1,function(){window.location.href=pageData.baseurl})},api_error:function(d){a.each(d,function(a,c){if(/^humanverify_/.test(d[0]))return vBulletin.hv.reset(!0),!1});return!0},title_phrase:"contact_us",error_phrase:"invalid_server_response_please_try_again"});return!1})})})(jQuery);
