 
var count=0;
function showDatainTable(){
   count++;
   var taskType=document.querySelector("#taskType").value;
   var subject=document.querySelector("#subject").value;
   var assign=document.querySelector("#assign").value;
   var details=document.querySelector("#details").value;
   var start=document.querySelector("#start").value;
   var end=document.querySelector("#end").value;
   var remind=document.querySelector("#remind").value;



       var tr = document.createElement("tr");
       var td1 = document.createElement("td");
       var td2 = document.createElement("td");
       var td3 = document.createElement("td");
       var td4 = document.createElement("td");
       var td5 = document.createElement("td");
       var td6 = document.createElement("td");

       td1.textContent=count;
       td2.textContent=subject;
       td3.textContent=taskType;
       td4.textContent=assign;
       td5.textContent=end;
       td6.textContent="Not Started";
       

      tr.append(td1,td2,td3,td4,td5,td6);

      var cData=JSON.parse(localStorage.getItem("AddData"))||[];

      var obj={
       taskType,
       end,
      }
      
      
    //  console.log(arr)
      cData.push(obj);
       localStorage.setItem("AddData",JSON.stringify(cData));
       var d=JSON.parse(localStorage.getItem("AddData"));
       console.log("data",d)
       showdata(d)
      
      document.querySelector("tbody").append(tr)

   //   ***********************************sorting*********************************************
}

function showdata(d){
   //var d=JSON.parse(localStorage.getItem("AddData"))

   document.querySelector("#alldata").innerText=""
d.map((e)=>{
   var telephon=document.querySelector("#telephon")
   var main_div=document.createElement("div");
main_div.setAttribute("class","main_div");
var div1=document.createElement("div");
div1.setAttribute("class","div1")
var div2=document.createElement("div");
div2.setAttribute("class","div2");



var h2=document.createElement("p");
h2.innerText=e.taskType;
var span1=document.createElement("span");
var span2=document.createElement("span");
var br=document.createElement("br");
var date=document.createElement("span");
var time=document.createElement("span");

date.innerText=e.end;
time.innerText="05:00 AM"



if(e.taskType == "Inform Product Feature"){
   span1.innerText="You contacted with";
   span2.innerText="Charles Gomez";
   div1.innerHTML=`<i class="bi bi-telephone-fill" ></i>`
  
   
}
else {
   span1.innerText="You added TO DO task with";
   span2.innerText="Arun Var";
   div1.innerHTML=`<i class="bi bi-check-circle-fill"></i>`
   
}




div2.append(h2,span1,span2,br,date,time);


main_div.append(div1,div2);
document.querySelector("#alldata").append(main_div);
})


}




//   localStorage.setItem("AddData",JSON.stringify(cData));
// document.querySelector("#ass").addEventListener("onclick",assending);
var d=JSON.parse(localStorage.getItem("AddData"))
showdata(d);
// console.log(d,"date")
d.sort( function (a,b){
   return a.end - b.end
} )
console.log(d,"sorting method")
// function myFunc(){
// var x=document.getElementById("sort").value;
// if(x=="ass"){
//     d.sort((a,b)=>{
//         var dateA = new Date(a.date), dateB = new Date(b.date)
// 	return dateA - dateB
//     })
//     console.log(d)
//    // showdata(d)
// }
// }