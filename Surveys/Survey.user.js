
// ==UserScript==
// @name         Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://apps.ce.collabserv.com
// @match        https://apps.ce.collabserv.com/surveys/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

if(typeof(dojo) != "undefined") {
    alert("start Analysis");
	require(["dojo/domReady!"], function(){
        alert("Start Customization");
        var finishedInitializationHandle = dojo.subscribe ("com/ibm/form/nitro/finishedInitialization", dojo.hitch (this, function () {
            dojo.unsubscribe(finishedInitializationHandle);
            dojo.byId('initializing-msg').style.display = 'none';

   			dojo.place(

                    '<span id="printPDF" class="dijit dijitReset dijitInline dijitButton lfFormBtn lotusFormButton lfFormActionBtn lfFormActionSubmitBtn" role="presentation" >' +
                    '<span class="dijitReset dijitInline dijitButtonNode" onClick="window.print()" role="presentation">' +
                    '<span class="dijitReset dijitStretch dijitButtonContents" data-dojo-attach-point="titleNode,focusNode" role="button" tabindex="0" id="1111111" title="" style="-webkit-user-select: none;">' +
                    '<span class="dijitReset dijitInline dijitIcon dijitNoIcon" data-dojo-attach-point="iconNode">' +
                    '</span>' +
                    '<span class="dijitReset dijitToggleButtonIconChar"> </span>' +
                    '<span class="dijitReset dijitInline dijitButtonText" id="22222222_label" data-dojo-attach-point="containerNode">Print PDF</span>' +
                    '</span>' +
                    '</span>' +
                    '<input type="button" value="" class="dijitOffScreen" onClick="window.print()" tabindex="-1" role="presentation" aria-hidden="true" data-dojo-attach-point="valueNode"></span>',
                    dojo.query("div.form-button-box-wrapper")[0],"append");
       	    }));
   });
}
