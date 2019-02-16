var param;
var paramValue;
var query=window.locatiom.search.substring(1).split("?");
console.log(query);
query.map(item)=>{
  param=item.spilit("=");
  console.log(item);
  paramValue=parseInt(param[1]);
  console.log(paramValue);
}
//browser compatability
var idb = window.indexedDB || window.mozIndexedDB || window.msIndexedDB|| window.webkitIndexedDB;
//creating a database
var open = idb.open("Resume bulider",1);
open.onupgradeneeded = function(e) {
  var request = e.target.result;
  request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true});
}
  open.onerror= function(e) {
    console.log("indexedDB error");
  }
open.onsuccess=function (e) {
  var request = e.target.result;
  var transaction = request.transaction("form_data","readwrite");
  var storeDB =transaction.objectStore("form_data");
  var finalData = storeDB.getAll();
  finalData.onsuccess=function(event){
    console.log(event.target.result);
    display(event.target.result);
  }
}
var parent=document.querySelector(".parent");
var left=document.querySelector(".leftchild");
var rigth=document.querySelector(".rigthchild");
function display(data){
  var profileIcon=document.createElement("img");
  profileIcon.src="girl.svg";
  profileIcon.alt=item.name;
  child1.appendChild(profileIcon);
  var data1=document.createElement("h3");
  data1.innerHTML=data.name;
  left.appendChild(data1);
  var data1=document.createElement("a");
  data1.textContent=data.email;
  data1.href="mailto:"+data.email;
  left.appendChild(data1);
}|
  function display(edu1) {
    var career1=document.createElement("h3");
    career1.textContent="career objectives";
    rigth.appendChild(career1);
    var hr=document.createElement("hr");
    rigth.appendChild(hr);
    var careerdata=document.createElement("p");
    careerdata.textContent=edu1.career;
    right.appendChild(careerdata);
     var education==document.createElement("h3");
     education.textContent="Education Qualifications";
     right.appendChild(education);
     var hr1=document.createElement("hr");
     right.appendChild(hr1);
     var ul = document.createElement("ul");
     edu1.education.map((edu)=>{
       var li1= document.createElement("li1");
       li1.textContent=edu.degree;
       ul.appendChild(li1);
       var li2= document.createElement("li2");
       li2.textContent=edu.degree;
       ul.appendChild(li2);
       var li3= document.createElement("li3");
       li3.textContent=edu.degree;
       ul.appendChild(li3);
       var li4= document.createElement("li4");
       li4.textContent=edu.degree;
       ul.appendChild(li4);

  })
  right.appendChild(ul);
