!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=390)}({26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={init:function(){$(document).ready(function(){(function(){function e(e){for(var t=0;t<w.length;t++)e.which!=w[t][0]&&e.which!=w[t][1]||e.preventDefault();p&&(e.which!=w[0][0]&&e.which!=w[0][1]||0!=_?e.which!=w[1][0]&&e.which!=w[1][1]||1!=_?e.which!=w[2][0]&&e.which!=w[2][1]||0!=_?e.which!=w[3][0]&&e.which!=w[3][1]||1!=_||(_=!1,g="right"):(_=!0,g="down"):(_=!1,g="left"):(_=!0,g="up"),p=!1)}function t(){return[Math.round(Math.floor(Math.random()*(u.width-(h-1)))/h)*h,Math.round(Math.floor(Math.random()*(u.height-(h-1)))/h)*h]}function n(e){o(),"up"==g?e[1]-=h:"left"==g?e[0]-=h:"down"==g?e[1]+=h:"right"==g&&(e[0]+=h),e[0]<0?e[0]=u.width-h:e[0]+h>u.width&&(e[0]=0),e[1]<0?e[1]=u.height-h:e[1]+h>u.height&&(e[1]=0)}function o(){b.push([m[0],m[1]]),b.length>v.length&&b.splice(0,1)}function i(e){f.fillStyle="#5c8dff",f.fillRect(e[0],e[1],h,h);for(var t=0;t<v.length;t++)f.fillStyle=t<5?"rgba( 92, 141, 255, 0."+(t+3)+" )":"rgba( 92, 141, 255, 1 )",f.fillRect(b[t][0],b[t][1],h,h)}function a(e,t){if(e[0]<t[0])var n=e;else var n=t;if(e[0]<t[0])var o=t;else var o=e;return n[1]>o[0]||n[0]===o[0]}function r(){k||(C=t(),k=!0),f.fillStyle="#ff6678",f.fillRect(C[0],C[1],h,h);var e=[[m[0],m[0]+h],[m[1],m[1]+h]],n=[[C[0],C[0]+h],[C[1],C[1]+h]],o=a(e[0],n[0]),i=a(e[1],n[1]);o&&i&&(f.clearRect(C[0],C[1],h,h),k=!1,f.fillStyle="#5A7A9A",f.fillRect(C[0],C[1],h,h),v.push(toString(v.length+1)),y>40&&(y-=10),s())}function s(){P+=x,$(".score").html(P),P>T&&(T=P,$(".high-score").html(T))}function d(){for(var e=[[m[0],m[0]+h],[m[1],m[1]+h]],t=0;t<v.length-1;t++){var n=[[b[t][0],b[t][0]+h],[b[t][1],b[t][1]+h]],o=a(e[0],n[0]),i=a(e[1],n[1]);o&&i&&l()}}function l(){alert("Game Over! VocÃª fez: "+P+" pontos"),v.splice(1,v.length-1),b.splice(1,b.length-1),y=100,P=0,$(".score").html(P);var e=t();m=e}function c(){f.clearRect(0,0,u.width,u.height),p=!0,$(document).keydown(function(t){e(t)}),n(m),i(m),r(),d(),setTimeout(function(){c()},y)}var u=document.getElementById("canvas"),f=u.getContext("2d"),h=10,m=new Array;m=t();var p=!0,w=[[38],[37],[40],[39]],g="right",b=new Array,v=new Array;v.push("1");var k=!1,C=new Array,y=100,x=1,P=0,T=0,_=!1;return{init:function(){c()}}})().init()})}};t.default=o},309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){$.ajax({url:"/"+$("#identifier-name").val()+"/reactivating/hastasks",type:"POST",statusCode:{302:redirectToLogin},data:{Identifier:$("#identifier-name").val(),PlatformType:$("#platform-type").val()}}).done(function(t){t||(window.clearInterval(e),window.location=window.location+"?refresh")})},i={init:function(){var e=window.setInterval(function(){return o(e)},5e3)}};t.default=i},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){document.getElementById("alert-content")&&(window.Umbler=window.Umbler||{},window.Umbler.settings=window.Umbler.settings||{},window.alerts=window.alerts||{AlertsPage:{}},window.AlertsPage=window.AlertsPage||{},window.AlertsPage.SwitcherysWebhook=[],window.AlertsPage.SwitcherysSlack=[],window.AlertsPage.WebHookRemoved=function(){toggleToNormalButton("#btn-submit-webhook-configuration"),$("#webhook-information").removeClass("hidden-xs-up"),$("#btn-webhook-back").addClass("hidden-xs-up"),$("#btn-submit-webhook-configuration").addClass("hidden-xs-up"),$("#btn-webhook-configuration").removeClass("hidden-xs-up"),$("#setup-webhook").addClass("hidden-xs-up"),$("#btn-webhook-test").addClass("hidden-xs-up")},window.AlertsPage.SlackRemoved=function(){toggleToNormalButton("#btn-submit-slack-configuration"),$("#slack-information").removeClass("hidden-xs-up"),$("#btn-slack-back").addClass("hidden-xs-up"),$("#btn-submit-slack-configuration").addClass("hidden-xs-up"),$("#btn-slack-configuration").removeClass("hidden-xs-up"),$("#setup-slack").addClass("hidden-xs-up"),$("#btn-slack-test").addClass("hidden-xs-up")},window.AlertsPage.LoadEvents=function(){var e=!1;$("#tab-logs").click(function(){$("#alert-configurations").hide(),$("#notificationChannels").hide(),$("#logs").show(),0==$("#logs").has("ul").length&&$.post("/alerts/logs",function(e){$("#logs").html(e),$("span[rel='tooltip']").tooltiper({trigger:"hover"})})}),$("#tab-configurations").click(function(){$("#logs").hide(),$("#notificationChannels").hide(),$("#alert-configurations").show()}),$("#tab-notificationChannels").click(function(){$("#logs").hide(),$("#alert-configurations").hide(),$("#notificationChannels").show()}),$("#btn-webhook-back").click(function(){$("#webhook-information").removeClass("hidden-xs-up"),$(this).addClass("hidden-xs-up"),$("#btn-submit-webhook-configuration").addClass("hidden-xs-up"),$("#btn-webhook-configuration").removeClass("hidden-xs-up"),$("#setup-webhook").addClass("hidden-xs-up")}),$("#btn-webhook-configuration").click(function(){$("#webhook-information").addClass("hidden-xs-up"),$(this).addClass("hidden-xs-up"),$("#btn-submit-webhook-configuration").removeClass("hidden-xs-up"),$("#btn-webhook-back").removeClass("hidden-xs-up"),$("#setup-webhook").removeClass("hidden-xs-up")}),$("#btn-slack-back").click(function(){$("#slack-information").removeClass("hidden-xs-up"),$(this).addClass("hidden-xs-up"),$("#btn-submit-slack-configuration").addClass("hidden-xs-up"),$("#btn-slack-configuration").removeClass("hidden-xs-up"),$("#setup-slack").addClass("hidden-xs-up")}),$("#btn-slack-configuration").click(function(){$("#slack-information").addClass("hidden-xs-up"),$(this).addClass("hidden-xs-up"),$("#btn-submit-slack-configuration").removeClass("hidden-xs-up"),$("#btn-slack-back").removeClass("hidden-xs-up"),$("#setup-slack").removeClass("hidden-xs-up")}),$(".js-switch").change(function(){var t=$(this),n=t.data("notification-channel"),o=t.data("alert-configuration-id"),i=t.is(":checked");e?e=!1:$.post("/alerts/changenotificationchannelstate",{NotificationChannel:n,AlertConfigurationId:o,ChannelEnabled:i},function(n){e=!n.Success,n.Success||(showMessage("alert-configuration-message",n.Message,n.Success),t.trigger("click"))}).fail(function(){e=!0,t.trigger("click")})}),$("[rel=tooltip]").tooltiper()},window.AlertsPage.RegisterSwitches=function(){Array.prototype.slice.call(document.querySelectorAll(".js-switch")).forEach(function(e){var t=new Switchery(e,{color:"#C6DAB0",secondaryColor:"#C4D4D4",jackColor:"#94BA6A",jackSecondaryColor:null});"Webhook"==$(e).data("notification-channel")&&window.AlertsPage.SwitcherysWebhook.push(t),"Slack"==$(e).data("notification-channel")&&window.AlertsPage.SwitcherysSlack.push(t)}),$(".js-switch:disabled").not("[data-notification-channel='Webhook'],[data-notification-channel='Slack']").parent().find(".switchery").tooltiper({title:$("#SwitcheryDisabledMessage").val()}),$(".js-switch:disabled[data-notification-channel='Webhook']").parent().find(".switchery").click(function(){var e=this;"False"==$("#WebHookIsConfigured").val()&&($(this).tooltiper({title:$("#tooltip-enable").html().trim(),trigger:"manual",html:!0}),$(this).on("shown.bs.tooltip",function(){return setTimeout(function(){return $(e).tooltiper("hide")},1500)}),$(this).tooltiper("toggle"))}),$(".js-switch:disabled[data-notification-channel='Slack']").parent().find(".switchery").click(function(){var e=this;"False"==$("#SlackIsConfigured").val()&&($(this).tooltiper({title:$("#tooltip-enable").html().trim(),trigger:"manual",html:!0}),$(this).on("shown.bs.tooltip",function(){return setTimeout(function(){return $(e).tooltiper("hide")},1500)}),$(this).tooltiper("toggle"))})},window.AlertsPage.EnableWebhookButtons=function(){window.AlertsPage.SwitcherysWebhook.forEach(function(e){e.enable()}),$(".js-switch[data-notification-channel='Webhook']").parent().find(".switchery").tooltiper("dispose"),$("#WebHookIsConfigured").val("True")},window.AlertsPage.EnableSlackButtons=function(){window.AlertsPage.SwitcherysSlack.forEach(function(e){e.enable()}),$(".js-switch[data-notification-channel='Slack']").parent().find(".switchery").tooltiper("dispose"),$("#SlackIsConfigured").val("True")},window.alerts.AlertsPage.ShowWebhookConfigurationPage=function(){$("#tab-notificationChannels").trigger("click"),$("html, body").animate({scrollTop:$("#webhook-information").offset().top},1e3)},window.alerts.AlertsPage.ToogleWebhookPayloadExemple=function(){$("#webhook-json-exemple").toggleClass("hidden-xs-up")},window.AlertsPage.TestChannel=function(e,t){$(t).hide(),$("#"+e+"-test-steps .step1").show(),$.post("/alerts/test"+e,function(n){$("#"+e+"-test-steps .step1").hide(),n?$("#"+e+"-test-steps .step2").show():$("#"+e+"-test-steps .step3").show(),setTimeout(function(){$("#"+e+"-test-steps>div").hide(),$(t).fadeIn("slow")},5e3)})},window.AlertsPage.ShowBtnWebhookTest=function(){$("#btn-webhook-test").removeClass("hidden-xs-up"),$("#btn-webhook-back").addClass("hidden-xs-up")},window.AlertsPage.ShowBtnSlackTest=function(){$("#btn-slack-test").removeClass("hidden-xs-up"),$("#btn-slack-back").addClass("hidden-xs-up")},$(function(){window.AlertsPage.RegisterSwitches(),window.AlertsPage.LoadEvents()}))}();t.default=o},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){$(".phoneCulture").prev(".flag-container").length||window.formatPhoneCulture(),$(".intl-tel-input").one("mouseenter mouseover",function(e){$(e.currentTarget).find(".phoneCulture").removeAttr("readonly")}),$("#btn-change-data").click(function(){$("#confirm-password").removeClass("hidden-xs-up"),$("#confirm-password .form-control").focus(),$("#btn-change-data").addClass("hidden-xs-up")}),$("#btn-change-data-cancel").click(function(){$("#confirm-password").addClass("hidden-xs-up"),$("#btn-change-data").removeClass("hidden-xs-up")}),$("#Name").keypress(function(e){for(var t=[8354,39,34,33,49,185,50,64,178,51,35,179,52,36,163,53,37,162,54,172,38,42,56,55,40,57,48,41,45,95,61,43,91,123,170,2,93,186,125,47,63,176,59,58,46,62,44,60,92,124,43],n=0;n<t.length;n++)if(t[n]===e.keyCode)return!1}),$("#btn-remove").click(function(){$("#loaderChangeImage").show()}),$("#btn-redefine-password").click(function(){window.toggleToProcessButton("#btn-redefine-password"),$.post("/settings/redefinepassword",{userName:$("#UserName").val()}).done(function(e){e&&"ok"===e?window.showMessage("","Por favor, acesse o seu e-mail e clique no link para redefinir sua senha.",!0):window.showMessage("",e.result.error,!1),window.toggleToNormalButton("#btn-redefine-password")}).fail(window.handleAjaxError)}),$(".remove-login-form, .link-login-form").submit(function(){$(this).valid()&&window.toggleToProcessButton("#"+$(this).find("button").attr("id"))}),$("#Name").focus()};t.default=o},333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(57),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={init:function(){var e=$("#confirm-create-form"),t=$("#createAccountBtn"),n=$("#back-url").val();i.default.configure(t,n),e.on("submit",function(){e.valid()&&($("#btn-back").addClass("hidden-xs-up"),window.toggleToProcessButton(t))})}}},334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(57),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={init:function(){var e=$("#confirm-link-form"),t=$("#retrievePassword"),n=$("#back-url").val();i.default.configure(t,n),e.on("submit",function(){e.valid()&&($("#btn-back").addClass("hidden-xs-up"),window.toggleToProcessButton(t))})}}},335:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(57),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={init:function(){var e=$("#form-confirm-phone"),t=$("#btn-verify-phone"),n=$("#back-url").val();i.default.configure(t,n),$("#Cellphone").focus(),e.on("submit",function(){e.valid()&&($("#btn-back").addClass("hidden-xs-up"),window.toggleToProcessButton(t))})}}},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=$("#historic-content"),i=function(){return o.addClass("full-overlay-wrapper show").prepend('<div id="history-loading" class="full-overlay-mask">\n                                  <span class="loader-umbler loader-2x"></span>\n                                </div>')},a=function(){o.removeClass("full-overlay-wrapper show"),$("#history-loading").remove()},r=function(e){return["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][e]},s=function(e,t,n){switch(n){case"previous":return e--,0===e&&(e=12,t--),{month:e,year:t};case"next":return e++,13===e&&(e=1,t++),{month:e,year:t}}},d=function(){var e="hidden-xs-up",t=$("#div-debit"),n=$("#div-credit"),o=$("#btn-group-date"),i=$("#total-consumed"),a=$("#btn-show-credit").hasClass("active");if($("#historic-content").removeClass(e),$("#div-debit-detail").addClass(e),$("#debit-detail-footer").addClass(e),a)return t.addClass(e),o.addClass(e),i.addClass(e),void n.removeClass(e);n.addClass(e),t.removeClass(e),o.removeClass(e),i.removeClass(e)},l=function(e){$("#historic-content").addClass("hidden-xs-up"),$("#div-debit-detail").html(e).removeClass("hidden-xs-up");var t=$("#date-period").text();$("#debit-detail-period").text(t),$("#div-debit-detail .btn-back").on("click",d),$(document).on("keyup",function(e){27===e.keyCode&&$("#historic-content").hasClass("hidden-xs-up")&&d()})},c=function(e){e.preventDefault(),e.stopPropagation();var t=$(e.currentTarget).attr("data-domain"),n=$("#date-period").attr("data-month"),o=$("#date-period").attr("data-year");i(),$.post("/settings/DebitDetailTable/",{domain:t,month:n,year:o}).done(function(e){l(e),a()}).fail(window.handleAjaxError)},u=function(){$('#table-debit [data-toggle="tooltip"]').tooltiper(),$("#table-debit tbody tr").hover(function(e){return $(e.currentTarget).find(".btn-table-option").removeClass("hidden-xs-up")},function(e){return $(e.currentTarget).find(".btn-table-option").addClass("hidden-xs-up")})},f=function(){var e=$("#date-period").attr("data-month"),t=$("#date-period").attr("data-year");i(),$.post("/settings/_HistoricTables",{month:e,year:t}).done(function(e){$("#historic-tables").html(e),$("#table-debit").advancedtable({searchField:"#search-debit",sorting:!1,rowsPerPage:15}),$("#table-credit").advancedtable({searchField:"#search-credit",sorting:!1,rowsPerPage:15}),$("[rel=tooltip]").tooltiper();var t=$("#th-date-period-prefix").val(),n=$("#date-period").text();$("#th-date-period-debits").html(t+" "+n);var o=$("#total-consumed-period-value");o.length&&$("#total-consumed-period").text(o.val()),$("#table-debit").on("click","tr.cursor-pointer",c),d(),u(),$(".form-control").inputGroupAddon(),a()}).fail(window.handleAjaxError)},h=function(e,t){var n=window.parseInt(e,10),o=window.parseInt(t,10),i=n-1,a=s(n,o,"previous"),d=a.month,l=a.year;$("#previous-month-button").attr("data-month",d).attr("data-year",l),$("#date-period").attr("data-month",n).attr("data-year",o);var c=r(i);$("#date-period").text(c+"/"+o);var u=new Date;if(i===u.getMonth()&&o===u.getFullYear())return $("#next-month-button").prop("disabled",!0),void $("#total-consumed-value").text("Consumo atÃ© o momento: ");var f=s(n,o,"next"),h=f.month,m=f.year;$("#next-month-button").attr("data-month",h).attr("data-year",m),$("#total-consumed-value").text("Total consumido: "),$("#next-month-button").prop("disabled",!1)},m=function(e){var t=$(e.currentTarget);h(t.attr("data-month"),t.attr("data-year")),f()},p=function(e){var t=$(e.currentTarget);t.hasClass("active")||(t.addClass("active").attr("aria-pressed",!0),$("#btn-show-debit").removeClass("active").attr("aria-pressed",!1),d())},w=function(e){var t=$(e.currentTarget);if(t.hasClass("active"))return $("#div-debit-detail").addClass("hidden-xs-up"),void $("#div-debit").removeClass("hidden-xs-up");t.addClass("active").attr("aria-pressed",!0),$("#btn-show-credit").removeClass("active").attr("aria-pressed",!1),d()},g=function(){if(document.getElementById("historic-content")){var e=$("#date-period").attr("data-month"),t=$("#date-period").attr("data-year");h(e,t),f(),$("#btn-show-credit").on("click",p),$("#btn-show-debit").on("click",w),$("#previous-month-button").on("click",m),$("#next-month-button").on("click",m)}};t.default=g},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function e(){if(document.getElementById("loading-user-container")){var t=document.getElementById("UserId").value;$.post("/account/useractive",{UserId:t}).done(function(t){if(t)return void(window.location="/home");setTimeout(e,1e3)})}};t.default=o},338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(57),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={init:function(){var e=$("#recover-password-form"),t=$("#retrieve-password"),n=$("#back-url").val();i.default.configure(t,n),e.on("submit",function(){e.valid()&&($("#btn-back").addClass("hidden-xs-up"),window.toggleToProcessButton(t))})}}},339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(57),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={init:function(){this.configureForm();window.passwordify.init("top")},configureForm:function(){var e=$("#form-recovered"),t=$("#btn-recovered"),n=$("#back-url").val();i.default.configure(t,n),e.find('input[type="password"]:first').focus(),e.on("submit",function(){e.valid()&&($("#btn-back").addClass("hidden-xs-up"),window.toggleToProcessButton(t))})}}},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={init:function(){this.configureFormSubmit();window.passwordify.init("top")},configureFormSubmit:function(){var e=$("#form-register-new-user"),t=e.find(".input-validation-error").eq(0);0==t.length&&(t=e.find('input[type="text"], input[type="password"], input[type="email"]').eq(0),0==t.length&&(t=e.find("#Name").eq(0))),t.focus(),e.on("submit",function(){e.valid()&&window.toggleToProcessButton("#btn-register-new-user")})}};t.default=o},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(57),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){$("#PhoneConfirmationCode").keypress(function(e){if(8!==e.which&&0!==e.which&&(e.which<48||e.which>57))return!1});var e=$("#form-confirm-phone-code"),t=$("#btn-confirm-code"),n=$("#skipcode"),o=$("#btn-change-phone"),a=$("#back-url").val();i.default.configure(t,a),window.setTimeout(function(){$("#skipcode-container").removeClass("hidden-xs-up")},4e4),n.click(function(){$("#Skip").val(!0),$("#form-confirm-phone-code").submit(),window.toggleToProcessButton(n),t.prop("disabled",!0),o.addClass("disabled").attr("aria-disabled",!0)}),o.on("click",function(){window.toggleToProcessButton(o),n.addClass("disabled").attr("aria-disabled",!0),t.prop("disabled",!0)}),$("#PhoneConfirmationCode").focus(),e.on("submit",function(){e.valid()&&($("#btn-back").addClass("hidden-xs-up"),window.toggleToProcessButton(t),o.addClass("disabled").attr("aria-disabled",!0),n.addClass("disabled").attr("aria-disabled",!0))})};t.default=a},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={load:function(){$.get("/settings/userData",function(e){$("#user-data").html(e)})}};t.default=o},356:function(e,t,n){!function(){function t(e){var t,n;if(!e||"string"!=typeof e)return null;try{window.DOMParser?(n=new DOMParser,t=n.parseFromString(e,"text/xml")):(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(e){t=void 0}if(!t||!t.documentElement||t.getElementsByTagName("parsererror").length)throw new Error("Invalid XML: "+e);return t}function n(e,t){return t.normalize?(e||"").trim():e}function o(e,t){var i,a,r,s,d={},l={};if(d[t.attrkey]=l,e.attributes&&e.attributes.length>0)for(i=0;i<e.attributes.length;i++){var c=e.attributes.item(i);l[c.nodeName]=c.value}for(0===e.childElementCount&&(d[t.charkey]=n(e.textContent,t)),i=0;i<e.childNodes.length;i++)if(a=e.childNodes[i],1===a.nodeType)if(r=0===a.attributes.length&&0===a.childElementCount?n(a.textContent,t):o(a,t),s=a.nodeName,d.hasOwnProperty(s)){var u=d[s];Array.isArray(u)||(u=[u],d[s]=u),u.push(r)}else d[s]=r;return d}function i(e,i){if(!e)return e;i=i||a,"string"==typeof e&&(e=t(e).documentElement);var r={};return void 0===e.attributes?r[e.nodeName]=o(e,i):0===e.attributes.length&&0===e.childElementCount?r[e.nodeName]=n(e.textContent,i):r[e.nodeName]=o(e,i),r}var a={attrkey:"$",charkey:"_",normalize:!1};"undefined"!=typeof jQuery?jQuery.extend({xml2json:i}):e.exports=i}()},390:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){countdown.setLabels(" milissegundo| segundo| minuto| hora| dia| semana| mÃªs| ano| dÃ©cada| sÃ©culo| milÃªnio"," milissegundos| segundos| minutos| horas| dias| semanas| meses| anos| dÃ©cadas| sÃ©culos| milÃªnios"," e ",", ","",function(e){return e.toString()});var t=new Date;t.setSeconds(t.getSeconds()+e);var n=t,o=countdown(n,function(e){e.start.getTime()<e.end.getTime()&&($("#act-blocked").hide(),$("#act-buttons").show(),$("#btn-login").show(),clearInterval(o)),document.getElementById("remainderTime").innerHTML=e.toHTML("strong")},countdown.HOURS|countdown.MINUTES|countdown.SECONDS)}Object.defineProperty(t,"__esModule",{value:!0}),n(331);var a=n(332),r=o(a),s=n(333),d=o(s),l=n(334),c=o(l),u=n(335),f=o(u),h=n(337),m=o(h),p=n(336),w=o(p),g=n(309),b=o(g),v=n(338),k=o(v),C=n(339),y=o(C),x=n(340),P=o(x),T=n(341),_=o(T),S=n(26),M=o(S),A=n(342),B=o(A);n(356),window.umbler=window.umbler||{},window.umbler.login=window.umbler.login||{},window.umbler.login.onSubmit=function(){$("#form-login").valid()&&window.toggleToProcessButton("#btn-login")},window.onload=function(){document.getElementById("user-data")&&B.default.load()},window.updateRemainderTimeToUnlockLogin=i,$(function(){(0,w.default)(),(0,m.default)(),$.ajax({url:"/account/getblogfeed",dataType:"xml",success:function(e){for(var t=$($.xml2json(e)["#document"].rss.channel.item),n=$("#blog-posts"),o=0;o<n.length;o++){var i=t[o],a=n[o],r=i.description.match(/<img[^>]+?src="[^"]+/i)[0].replace(/^<img[^>]+?src="/i,"").replace("750x400.png","1563x833.png").replace("http://","https://");$(a).find(".bg-image-login").css("background-image","url("+r+")"),$(a).find(".card-title").html(i.title),$(a).find("a").attr("href",i.link)}}}),document.getElementById("container-snake")&&M.default.init(),document.getElementById("card-reactivate-website")&&b.default.init(),document.getElementById("form-confirm-phone-code")&&(0,_.default)(),document.getElementById("form-register-new-user")&&P.default.init(),document.getElementById("recover-password-form")&&k.default.init(),document.getElementById("confirm-link-form")&&c.default.init(),document.getElementById("confirm-create-form")&&d.default.init(),document.getElementById("form-recovered")&&y.default.init(),document.getElementById("form-confirm-phone")&&f.default.init(),document.getElementById("change-data-account")&&(window.Umbler=window.Umbler||{},window.Umbler.settings=window.Umbler.settings||{},window.Umbler.settings.init=r.default,window.Umbler.settings.init())}),t.default={}},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={configure:function(e,t){var n=$("#btn-back");n.on("click",function(){n.addClass("hidden-xs-up"),e.each(function(e,t){return $(t).prop("disabled",!0)}),window.location=t})}}}});
//# sourceMappingURL=settings.js.map