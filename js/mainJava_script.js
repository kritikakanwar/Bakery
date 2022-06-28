document.getElementById("ham_icon").onclick=function()
{
   document.getElementById("nav_div").style.right='0';
}
document.getElementById("close_div").onclick=function()
{
   document.getElementById("nav_div").style.right='-360px';
}

document.getElementById("hamburger").onclick=function()
{
   document.getElementById("quick_list").style.left='0';
}

document.getElementById("homepage_close_div").onclick=function()
{
   document.getElementById("quick_list").style.left='-370px';
}

// document.getElementById("ham_img").onclick=function()
// {
//    document.getElementById("quicklist_menu").style.left='0';
// }
// document.getElementById("close_div1").onclick=function()
// {
//    document.getElementById("quicklist_menu").style.left='-370px';
// }
// *************************************
// var student=["kritika","swastik","Anu"];
// console.log(student);
// var groups=[
//    ["kritika","swastik","Anu"],
//    ["Shivani","Riya"],
//    ["Abu","Bua","Maji"]
// ];
// var counter=1;

// setInterval(function(){
//     document.getElementById("radio"+counter).checked=true;
//     counter++;
//     if(counter>4)
//     {
//         counter=1;
//     }
// },5000);
// *********************************************************************
// var info={
// 'Product Details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit.In pellentesque, nisi id viverra aliquam, libero ipsum vehicula',
// 'Material':'Carbon Steel',
// 'More':'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// }
// var selectedcolor='92DDD5';
// var unselectedcolor='3BA99C';
// var tabledata=document.getElementsByClassName("table_div");
// console.log("I wonder why its not working?");
// console.log(tabledata);

// for(var a=0;a<tabledata.length;a++)
// {
// tabledata[a].onclick=function()
// {
//    var clicked=this.innerHTML;
//    console.log(info[clicked]);
   
//    document.getElementById("content").innerHTML=info[clicked];
//    for(var b=0;b<tabledata.length;b++)
//    {
      
//       tabledata[b].style.backgroundColor ='#92DDD5';
//       tabledata[b].style.fontWeight='normal';
//    }
// this.style.backgroundColor='#3BA99C';
// this.style.fontWeight="bold";
// }
// }
document.getElementById("date").innerHTML=new Date().getFullYear();
// *********************************************************************


var ourslider =[
   {
      'title':'All the baking Ingredients at reasonable price.',
      // 'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'url':'img/Choco_chips.jpeg'
   },
   {
      'title':'Bread Improver and Yeast ',
      // 'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'url':'img/WhatsApp Image 2022-02-14 at 5.58.48 PM (4).jpeg'
   },
   
   {
      'title':'Variety of Flavours Available ',
      // 'desc':'To make your Baked Goods Stand Out ',
      'url':'img/WhatsApp Image 2022-03-09 at 12.10.23 PM (1).jpeg'
   },
   ];
   var pre=document.getElementById("slider_leftarrow");
   var next=document.getElementById("slider_rightarrow");
   var currentservice= 0;
   
   next.onclick=function()
   {
      if(currentservice==(ourslider.length-1))
      {
      currentservice=0;
      }
      else
      {
   
         currentservice+=1;
      }
   var title=ourslider[currentservice].title;
   var pic=ourslider[currentservice].url;
   document.getElementById("slider_pic").src=pic;
   document.getElementById("slider_info").innerHTML=title;
   }
   pre.onclick=function()
   {
      if(currentservice==0)
      {
      currentservice=ourslider.length-1;
      }
      else
      {
      currentservice-=1;
      }
   
   var title=ourslider[currentservice].title;
   var pic=ourslider[currentservice].url;
   document.getElementById("slider_pic").src=pic;
   document.getElementById("slider_info").innerHTML=title;
   }
   // **********************************************************************
// var ourservice =[
// {
//    'title':'Bakery goods',
//    'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// },
// {
//    'title':'Food Colors',
//    'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// },

// {
//    'title':'Indredients',
//    'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// },
// ];
// var pre=document.getElementById("previous");
// var next=document.getElementById("next");
// var currentservice= 0;

// next.onclick=function()
// {
//    if(currentservice==(ourservice.length-1))
//    {
//    currentservice=0;
//    }
//    else
//    {

//       currentservice+=1;
//    }
// var title=ourservice[currentservice].title;
// var text=ourservice[currentservice].desc;
// document.getElementById("title").innerHTML=title;
// document.getElementById("desc").innerHTML=text;
// }
// pre.onclick=function()
// {
//    if(currentservice==0)
//    {
//    currentservice=ourservice.length-1;
//    }
//    else
//    {
//    currentservice-=1;
//    }

// var title=ourservice[currentservice].title;
// var text=ourservice[currentservice].desc;
// document.getElementById("title").innerHTML=title;
// document.getElementById("desc").innerHTML=text;
// }
// ***********************************************************************
// document.getElementById("")
