var x=new XMLHttpRequest();
  x.open("GET", "http://img.ivsky.com/img/bizhi/pre/201711/16/thor_ragnark-011.jpg", true);
  // x.open("GET", "file:///C:/Users/daixj/Desktop/Day_12_4/img/me.jpg", true);
  console.log(x.status+ " " + x.state);
  x.responseType = 'blob';
  x.onload=function(e){download(x.response, "dlBinAjax.gif", "image/gif" ); }
  x.send();