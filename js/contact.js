$(document).ready(function(){
$("#plus").click(function(){
$(".answer1").slideToggle();

});
// jquery for Account page 
$("#submitbutton").mouseover(function(){
  // $(this).css("background-color", "  azure");
  // $(this).css("box-shadow", " 0px  1px 4px rgb(156, 154, 154 ");
  //Below code is for setting multiple css property
  $(this).css({
            "background-color": "  azure" , 
            "box-shadow": " 0px  1px 4px rgb(156, 154, 154 "
            });
  
});

$("#submitbutton").mouseout(function(){
    $(this).css("background-color", "aliceblue");
    $(this).css("box-shadow", "none");
});
$(".shipping_address").css("display","none");

$(".shipping").click(function(){
   $(".shipping_address").slideToggle();
});

$("#address_checkbox").click(function(){
    $(".shipping_address").css("display","block");
});

$("#address_checkbox").click(function(){
  var firstname=$(".fname").text();
  console.log("Text entered is"+firstname);
});
var state=[
    'Delhi','Haryana','Uttar Pradesh','Himachal Pradesh','Punjab',
    'J&K','Bihar',"Madhya Pradesh",'Maharashtra','Telengana','Kerela','Tamil Nadu'
];
var select=document.getElementById("form_select");
for(var i=0;i<state.length;i++)
{
    var opt=document.createElement("option");
txt=document.createTextNode(state[i]);
opt.appendChild(txt);
select.insertBefore(opt,select.lastChild);
}
// **************************************
// var district={

//     'Haryana':['Ambala','Karnal','Kurukshetra','Bhiwani','Charkhi Dadri','Faridabad','Fatehabad',
//     'Gurugram','Kaithal','Pehowa', 'Hisar'],
//     'Punjab':['Amritsar','Ropar','Nangal','Patiala','Batinda','Hoshiarpur','Zirakhpur','Derabasi']
// }
// document.getElementById("form_select").onchange=function(){

//     var selecteddata=document.getElementById("form_select").value;
//     console.log("selected State is "+selecteddata);
//     var state_district=selecteddata;
//     if(selecteddata==district[state_district])
//     console.log("Excatly Same");
//     {
//         for(var a=0;a<state.length;i++)
//         {
//             var opt=document.createElement("option");
//         txt=document.createTextNode(state[i]);
//         opt.appendChild(txt);
//         select.insertBefore(opt,select.lastChild);
//         }  
//     }
// };

// var button=document.getElementById("submitbutton");
//    button.onmouseover = function()
//    {
//       button.style.backgroundColor ="pink";
      
//    }
// var select=document.getElementById("form_select").selected;
// for(var i=0;i<district.length;i++)
// {
//     var opt=document.createElement("option");
// txt=document.createTextNode(district[i]);
// opt.appendChild(txt);
// opt.setAttribute("value",district[i]);
// select.insertBefore(opt,select.lastChild);
// }
});
