urls=[
"http://carbondate.cs.odu.edu",
"http://exif.regex.info/exif.cgi",
"http://fotoforensics.com",
"http://gjobqjj7wyczbqie.onion",
"http://htmlpreview.github.io",
"http://icanhazip.com",
"http://insecam.org",
"http://ipconfig.io",
"http://iris-h.malwageddon.com",
"http://karmadecay.com",
"http://maldun.com/submit/submit_file",
"http://malwareconfig.com",
"http://malwaretracker.com/pdf.php",
"http://manalyzer.org",
"http://nanoav.ru",
"http://r5n26fdanb4i522h.onion/recent",
"http://rootabout.com",
"https://29a.ch/photo-forensics/#forensic-magnifier",
"https://ahmia.fi",
"https://android.fallible.co",
"https://any.run",
"https://app.binaryedge.io",
"https://buckets.grayhatwarfare.com",
"https://cape.contextis.com",
"https://censys.io",
"https://check-host.net",
"https://code.woboq.org",
"https://community.riskiq.com",
"https://cse.google.com/cse?cx=003248445720253387346:turlh5vi4xc",
"https://cxsecurity.com",
"https://darksearch.io",
"https://databases.today/search.php",
"https://ddos.netlab.360.com",
"https://dehashed.com",
"https://dns.coffee",
"https://dnsdumpster.com",
"https://en.whotwi.com",
"https://etherscamdb.info/scams",
"https://exploitbox.io",
"https://findsubdomains.com",
"https://fofa.so",
"https://geoip-db.com/jsonp",
"https://ghostproject.fr",
"https://ghostproject.fr/m",
"https://haveibeenpwned.com",
"https://hunter.io",
"https://hybrid-analysis.com",
"https://ide.onelang.io",
"https://idtheftcenter.org/data-breaches",
"https://intelx.io",
"https://intrigue.io",
"https://ip-api.com/docs/api:json",
"https://ivre.rocks",
"https://kartkatalog.geonorge.no",
"https://leakedsource.ru",
"https://malware.sekoia.fr/new",
"https://malwr.com",
"https://map.internetintel.oracle.com",
"https://metacpan.org",
"https://metadefender.opswat.com",
"https://mikewk.shinyapps.io/botornot",
"https://monitor.firefox.com",
"https://nerdydata.com",
"https://onionsearchengine.com",
"https://onyphe.io",
"https://osintframework.com",
"https://outage.report",
"https://paper.seebug.org",
"https://phishstats.info",
"https://pipl.com",
"https://plik.root.gg",
"https://privacyrights.org/data-breaches",
"https://prnt.sc",
"https://protoxin.net/s3",
"https://psbdmp.ws",
"https://publicwww.com",
"https://reverse.it",
"https://scan.netlab.360.com/#/dashboard",
"https://scylla.sh",
"https://searchcode.com",
"https://shadowban.eu",
"https://shodan.io",
"https://sploitus.com",
"https://thispersondoesnotexist.com",
"https://threatbutt.com/map",
"https://threatmap.checkpoint.com/ThreatPortal/livemap.html",
"https://torrentparadise.org",
"https://totalhash.cymru.com",
"https://transfer.sh",
"https://urlscan.io",
"https://valkyrie.comodo.com",
"https://vigilante.pw/",
"https://virusscan.jotti.org",
"https://virustotal.com",
"https://viz.greynoise.io",
"https://viz.greynoise.io/table",
"https://wigle.net",
"https://wtfismyip.com/json",
"https://www.adminsub.net/mac-address-finder",
"https://www.exploit-db.com",
"https://www.how-old.net",
"https://www.inteltechniques.com/menu.html",
"https://www.iocbucket.com",
"https://www.packettotal.com",
"https://www.shodan.io",
"https://www.startpage.com/do/search",
"https://zoomeye.org",
"http://termbin.com",
"http://urlquery.net",
"http://virscan.org",
"http://www.yasiv.com/reddit#/Search?q=malware",
"https://bitnodes.earn.com/",
"https://investigativedashboard.org/",
];
tot=urls.length;
i=0;
html="<ul class='list-group'>";
while(i<tot){
  html+="<li class='list-group-item'>"+urls[i]+"</li>";
  i++;
}
html+="</ul>";
$("#list").html(html);
