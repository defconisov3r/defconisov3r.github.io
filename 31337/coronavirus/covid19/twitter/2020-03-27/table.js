$(document).ready( function () {
  Uri="https://urlscan.io";
  dataTable={

  }
  htmlTable="";
  for(url in dataTable){
	url1=url;
	uuid=dataTable[url];
    uriScreen=Uri+"/thumbs/"+uuid+".png";
    uriScan=Uri+"/result/"+uuid;
    htmlTable+="<tr>";
    htmlTable+="<td><a target='_blank' href='"+uriScan+"'>"+url1+"</a></td>";
    htmlTable+="<td><button onclick='test(\""+url1+"\",\""+uriScreen+"\",\""+uriScan+"\")' type='button' data-toggle='modal' data-target='#exampleModal' class='btn btn-success openScreen'>Visualizar</button></td>";
    htmlTable+="</tr>";
  }
  $("#bodyTableVT").html(htmlTable);
  $('#tableVT').DataTable();
  test=function(urll,screen,scan){
	  $("#screenshot").attr("src","");
	  $("#scan").attr("href","");
	  $("#screenshot").attr("src",screen);
	  $("#scan").attr("href",scan);
	  $("#url").text(urll);
	};
});
