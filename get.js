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
  var parent = document.querySelector(".parent");
  function display(data){
    data.map((item)=>{
      var child1=document.createElement("div");
      child1.classList.add("child");
      var profileIcon=document.createElement("img");
      profileIcon.src="girl.svg";
      profileIcon.alt=item.name;
      child1.appendChild(profileIcon);
      var data = document.createElement("p");
      data.textContent = item.name;
      child1.appendChild(name);
      var data = document.createElement("p");
      data.textContent = item.email;
      child1.appendChild(email);
      var link =document.createElement("a");
      link.href="reume.html";
      link.textContent="view profile";
      child1.appendChild(link);
      parent.appendChild(child1);
    })
   }
  }
