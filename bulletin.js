    var i =0;
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON('//mmu-api.co/bulletin_api').then(function(data) {
  
  while (i<data.length) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    var li = document.createElement("li");
    var p = document.createElement("p");
    li.setAttribute("id", i);
    var title = document.createTextNode(data[i].title.toUpperCase()); 

    if (data[i].contents.length > 5){
      var contents = document.createTextNode(data[i].contents); 
    }
    else{
      var contents = document.createTextNode("Move along, nothing to see here"); 
    }

    div.appendChild(title);
    div2.appendChild(p);
    p.appendChild(contents);
    
    div.setAttribute("class","collapsible-header");
    div2.setAttribute("class","collapsible-body");
    document.getElementById("links").appendChild(li);
    document.getElementById(i).appendChild(div);
    document.getElementById(i).appendChild(div2);
    console.log("done")
    i++;
  }
run();
}

);
