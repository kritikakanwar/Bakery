$(".list").click(function(){
$(".listitem").css("display","none");
});
// ***************************************************
$(".list").click(function(){
$(".listitem").hide();
});
// ***********************************************
var content=$("#heading").html();
console.log(content);
$("#heading").html("About Product");
//******************************** */ 
// text will return only text and numbers ,ignoring any Html Tag
var content=$("#heading").text();
console.log(content);
$("#heading").text("About Product");
// ************************************************
// $("#ul_list").attr("href","index.html");
$("#Related_div_button").click(function(){
$("#product_img").attr("src","img/WhatsApp Image 2022-02-14 at 5.58.48 PM (4).jpeg")

}); 
$("#form1").remove();
// **************************************************
var select=$("#fname").val();
console.log(select);
$("#fname").val("swastik");
$("#fname").html("swastik");
// var select=$("#fname").val();
// console.log(select);
$("#quantity_input").val("1");
$("#quantity_input").html("1");


// $(".categories").click(function(){
// $("#show_hide").toggle();
// });

$(".categories").click(function(){
    $("#show_hide").slideToggle();
    });
    
// *************************************************
//  the beleow code wil return the  value of a selected option
$("#selectsize").val();
// the beleow code wil return the text value of a selected option
$("#selectsize option:selected").text();
// *******************************************
$("#selectsize").change(function()
{
    var newvalue= $("#selectsize option:selected").text();
    console.log(newvalue);
});
// ********************************************
var radio=$("input[name='gender']").change(function(){
    console.log($("input[name='gender']:checked").parent().text());
});
//******************************************** */
var check= $("input[name='design']").change(function(){
console.log("selected");
var selecteditem=$("input[name='design']:checked");
// console.log(selecteditem);
$.each(selecteditem,function(index,value){
// console.log(index);
// console.log(value);
console.log($("input[name='design']:checked").parent().text());
});
});
// *********************************************************
// $("#Changebutton").click(function(){
// $("#product_img").addClass("productimgdemo");
// });
// ****************************************
$("#Changebutton").click(function(){
    $("#product_img").toggleClass("productimgdemo");
    });
//******************************************** */ 
$(function(){
// all the code of your page inside here
});
$("#Category").click(function(){
    $("#li_item").toggleClass("category_hide");
    });