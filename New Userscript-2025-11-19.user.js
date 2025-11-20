// ==UserScript==
// @name         Old Adam On FlashThemes
// @namespace    https://flashthemes.net/character/creator/family/adam/
// @version      2025-11-19
// @description  Old Adam!
// @author       You
// @match        https://flashthemes.net/character/creator/family/adam/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

$("#char_creator_client").flash({id:"char_creator",swf:"https://lightspeed.flashthemes.net/static/animation/new7286/ccw.swf",height:600,width:990,align:"middle",allowScriptAccess:"always",allowFullScreen:"true",wmode:"transparent",hasVersion:"10.0.12",flashvars:{apiserver:"https://flashthemes.net/",userId:105,isLogin:"Y",m_mode:"school",isEmbed:"0",ctc:"go",tlang:"en_US",appCode:"go",storePath:"/static/store/<store>",ut:60,v:105,nextUrl:"https://flashthemes.net/character/browser",clientThemePath:"https://lightspeed.flashthemes.net/static/ct/ad44370a650793d9/<client_theme>",themeId:"family",override_count:!0,original_asset_id:"c-509210"}});
})();