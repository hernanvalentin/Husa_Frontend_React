import Script from 'next/script'
import React from 'react'

function VelaroChatBox() {
	return (
		<Script>
			{`    window.hasChat = true;

(function () {
    var w = window; var d = document;
    if (w.Velaro) { return; }
    var v = function () { return v.c(arguments) };
    v.q = []; v.c = function (args) { v.q.push(args) }; w.Velaro = v;
    v.endpoints = {
        mainApi: 'https://api-main-us-east.velaro.com/',
        cdn: 'https://cdn-us-east.velaro.com/'
    };

    w.addEventListener('load', function () {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = v.endpoints.cdn + 'widgets/shim';
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    });

    Velaro('boot', { 
        siteId: ${process.env.NEXT_PUBLIC_VELARO_ID},
        groupId: 0,
        // customVars are optional.
        customVars: {
            exampleKey1: 'exampleValue1',
            exampleKey2: 'exampleValue2'
        }
    });

}());
`}
		</Script>
	)
}

export default VelaroChatBox