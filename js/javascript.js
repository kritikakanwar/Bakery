// alert("Testing Alert Command");
console.log("statement 1");
// console.log(document.getElementById("h1").innerHTML);
// document.getElementById("h1").innerHTML="<h1>Our new collectionof Watches</h1>";
// console.log(document.getElementById("h1").innerHTML);
// console.log("THis is example script file");

// var firstname='kritika'
// var lastname='kanwar';
// var year=1993;
// var presentyear=2022;
// var youryear=presentyear-year;
// var message="Hi , My name is "  +firstname+ " " +lastname+ " and I am "+youryear+ "years old and I am learning Javascript";
// document.getElementById("student_msg").innerHTML=message;
/***********question 3***************** */
// var number1= parseInt(document.getElementById("num1").innerHTML);
// var number2 =parseInt(document.getElementById("num2").innerHTML);
// var average= (number1+number2)/2;
// average=average.toFixed(2);
// document.getElementById("totals").innerHTML=average;

/***********question 4***************** */
// var phone1='9876543210'
// var phone2='123456790'
// var phone3=9182736450
// phone3=phone3.toString();
// console.log(phone1.length==10);
// console.log(phone2.length==10);
// console.log(phone3.length==10);

/***********question 5***************** */
// console.log(Math.pow(32,6));

/***********question 7***************** */
   // var quantity = "25";
   //  var number = 6;
   //  var pressure;
   //  var temperature = null;

   //  console.log(quantity += quantity); 
   //  console.log( (7+5) / number + 2 ); 
   //  console.log(pressure); 
   //  console.log(temperature); 
   //  console.log(typeof pressure); 
   //  console.log(typeof temperature);
// ************to change colour on mousehover*****************
   // var button=document.getElementById("Related_div_button");
   // button.onmouseover = function change()
   // {
   //    button.style.backgroundColor="pink";
      
   // }
   // ************************************************************
   
   //Below code is working 
   // var element=document.getElementsByClassName("productinfo");
   // console.log(element);
//**********Below code is  working(**************** 
   // var student=['a','b','c','d','e'];
   // for(var a=0;a<student.length;a++)
   // {
   // console.log(student[a]);
   // }
//****************Below code is working **************
//    var age=70;
//    if(age<18)
//    {
// console.log("Underage");
//    }
// else if(age>=65)
// {
// console.log("Senior");
// }
//  else
// {
// console.log("Adult");
// }
// **********solving problem with &&(And)***************
// var grade=7;
// var absence=3;
// if(grade>=7 && absence<=5)
// {
// console.log("Student is approved");
// }
// else
// {
// console.log("Student is not approved");
// }

// ***************solving problem with &&(And)**********
// var grade=7;
// var absence=3;
// if(grade<7 || absence>5)
// {
// console.log("Student is approved");
// }
// else
// {
// console.log("Student is not approved");
// }
// ***************************************************
// var nam= "kritika";
// var na =nam;
// if(nam!=" ")
// {
// console.log("the name is" +nam);
// }
// else
// {
//    console.log("the name has not been informed");
// }
// *******************************************************
// var total=100;
// if(total)
// {
//    console.log("I sold something");
//    }
//    else
//    {
//       console.log("I sold nothing");
//    }
// *******************************************************
// ternary if 
// condition ? if true : if false
//    var nam="";
//    console.log(nam ?"the name is"+nam :"the name has not been informed");

//    var age=7;
//   console.log(age<18?"underage":age>=65?"senior":"Adult");
// **********************************************************
//   var ismember=false;
//   var age=17;
//   if(ismember==true||age>=65)
//   {
//      console.log("Free")
//   }
//   else if(age>=18 && age<=65)
// else if(age<18)
//   {
// console.log("$6.00")
//   }
// else 
// {
//    console.log("$12.00")
// }

// *****************************************************
var employees = [
      // employees[0].fullname() will display full name at specified index 
      // this is multidimensional array
      // employees[0].children.push("Shivam") ---> will add shivam at last position  
   {
       'fname': 'Charles',
       'lname':'Smith',
       'age': 45,
       'children': ['Andrew Silva', 'Maria Silva'],
       'fullname':function()
       {
          return this.fname +" "+ this.lname;
       }
   },

   {
       'fname': 'Elizabeth',
       'lname':'Green',
       'age': 32,
       'children': ['Peter Green'],
       'fullname':function()
       {
          return this.fname +" "+ this.lname;
       }
   },

   {
       'name': 'George ',
       'lname':'Banks',
       'age': 39,
       'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks'],
       'fullname':function()
       {
          return this.fname +" "+ this.lname;
       }
   }

];
// **********************************************************************
// document.getElementById("children").innerHTML = "";

//     for (var a = 0; a < employees.length; a++) {
//         var childrenList = employees[a].children;
    
//         for (var b = 0; b < childrenList.length; b++) {
//             var child = childrenList[b];
//             console.log(child);
//             document.getElementById("children").innerHTML += " <li>" + child + " </li>";
//         }
//     }
// **************************************************************************
//     var firstname="kriti"
//     function create_name() 
//     {
//       var firstname = 'Mary';
//       console.log(firstname);
//   }
//   create_name();
//   console.log(firstname); 
// this will give output parent loop :0
// child loop :0
// child loop :1
// child loop :2
//   for(var a=0;a<3;a++)
//   {
//      console.log('parent loop',a);
//      for(var a=0;a<3;a++)
//      {
//       console.log('Child loop',a);  
//      }
//   }
// ************************************************************
//   for(let a=0;a<3;a++)
//   {
//      console.log('parent loop',a);
//      for(let a=0;a<3;a++)
//      {
//       console.log('Child loop',a);  
//      }
//   }
//   for(var a=0;a<3;a++)
//   {
//      console.log('parent loop',a);
//      for(var b=0;b<3;b++)
//      {
//       console.log('Child loop',b);  
//      }
//   }
//  ************************************************
// var year=2022;
// while(year<=2050)
// {
//    document.getElementById("ullist").innerHTML+='<li>' +year+'</li>';
//    year=year+4;
// }
// ************************************************
// function temp_cal(c)
// {
//   var f=(9*c/5)+32;
//    return f;
// }
// document.getElementById("temp").onclick=function ()
// {
//    var ftemp=document.getElementById("number").value;
//    if(ftemp=="")
//    {
// alert("temp is invalid");
//    }
//    else
//    {
//       document.getElementById("ans").innerHTML =temp_cal(ftemp);
//    }
// console.log(ftemp);

// }
// **************************************************
// function result(a,b)
// {
//     var avg=(grade1+grade2)/2;
//      var presence=(totalclass-absent)/20*100;
//      return avg,presence;
// }
// document.getElementById("calculate").onclick=function ()
//    {

//       var grade1=parseInt(document.getElementById("grade1").value);
//       var grade2=parseInt(document.getElementById("grade2").value);
//       var absent=parseInt(document.getElementById("absence").value);
     
//       // var totalclass=20;
      
//       if(grade1 == ""||grade2 == ""||absent == "")
//       {
//       alert("All fields are necessary");
//       }
      // else if(avg>=6.5 && presence>=70)
      // {
         // var avg=(grade1+grade2)/2;
      //   var presence=(totalclass-absent)/20*100;
      //   console.log(avg);
      //   console.log(presence);
      //    console.log("approved");
      //    // document.getElementById("ans").innerHTML =temp_cal(ftemp);
      // }
      // else
      // {
      //    console.log("not approved");
      // }
   // }
   // window.onmousemove = function(event)
   // {
   //    console.log(event.pageY);
   //    if(event.pageY < 5)
   //    {
   //       alert("You are about to close the page");
   //    }
   // }
   // *******************************************
   // var dateob=new Date();
   // console.log(dateob);
   // *******************************************
   // order date march,26,2020
   // delivery date april,02,2020
   // var odate=new Date("2020-03-26").getTime();
   // var ddate=new Date("2020-04-02").getTime();
   // console.log(ddate-odate);
   // var lead=Math.floor((ddate-odate)/86400000);
   // document.getElementById("answer").innerHTML=lead;
// **********************************************
   // console.log("message1");
   // window.setTimeout(function(){
   //    console.log("new message after 3sec");
   // },3000);
   // **************************************
   // var count = 0;

   // var timeInterval = window.setInterval(function(){
   //     console.log(count);
   //     count++;
   //     if (count > 5) {
   //         window.clearInterval(timeInterval);
   //     }
   // }, 1000);
//   ********************************************************
   // function add_zero(number)
   // {
   //    if(number<10)
   //    {
   //       return "0" + number.toString();
   //    }
   //    else
   //    {
   //       return number.toString();
   //    }
   // }
   // window.setInterval(function(){

   //    var currenttime=new Date();
   //    var hour=currenttime.getHours();
   //    var min=currenttime.getMinutes();
   //    var sec=currenttime.getSeconds();
   //    document.getElementById("answer").innerHTML=add_zero(hour);
   //    document.getElementById("ans1").innerHTML=add_zero(min);
   //    document.getElementById("ans2").innerHTML=add_zero(sec);
   // },1000);
// ***************************************************
// document.getElementById("show").onclick=function(){

//    var sel=document.getElementById("select");
//    console.log(sel);
//    var sel_opt=sel.options.selectedIndex;
//    console.log("sel_opt"+sel_opt);
//    var selectedValue = sel.options[sel_opt].innerHTML;
//    document.getElementById("answer").innerHTML = selectedValue;
//    console.log(selectedValue);
//    var opt=document.getElementById("select");
//    console.log(opt.value);
// };
// *************************************************
// document.getElementById("show_radio").onclick=function()
// {
// var radio=document.getElementsByName("gender");
// console.log(radio);
// // console.log("radio not showing");
// var radio_selected;
        
//         for (var a = 0;  a < radio.length; a++) {
//             if (radio[a].checked) {
//                 radio_selected = radio[a].value;
//                 console.log(radio_selected);
//                 document.getElementById("answer").innerHTML = radio_selected;
//             }
//         }
// };
// *********************************************************
// document.getElementById("checkbox").onclick=function()
// {
// var chk=document.getElementsByName("design");
// // console.log(chk);
// // console.log("radio not showing");
// document.getElementById("answer").innerHTML = "<ul>";

//         for (var b = 0;  b < chk.length; b++) {
//             if (chk[b].checked) {
//                 document.getElementById("answer").innerHTML += '<li>' + chk[b].value + '</li>';
//             }
//         }
// };
// *************************************************************
// document.getElementById("education").onchange=function(){
// console.log("changed");
//       var sel=document.getElementById("education");
   
//       var sel_opt=sel.options.selectedIndex;
//       var selectedValue = sel.options[sel_opt].innerHTML;
//       document.getElementById("answer").innerHTML = selectedValue;
//       console.log(selectedValue);
//       };
      // ************************************************************

// var check= document.getElementsByName("bake");
// console.log(check);
// for(var a=0;a<check.lenght;a++)
// {
// check[a].onchange=function()
// {
//    console.log("changed");
//    document.getElementById("bakeware").innerHTML='<ul>';
//    for (var b = 0;  b < check.length; b++) {
                
//       if (check[b].checked) {
//           document.getElementById("bakeware").innerHTML += '<li>' + check[b].value + '</li>';
//       }
//       document.getElementById("bakeware").innerHTML='</ul>';    
// }
// }
// }
// var cakepan={
//       '7 inch':{
//          'size':'7 inch',
//            'price': 70,
//            'currency':'Rs',
//            'material':'carbon steel',
//            'weight':'0.5 kg'
//       },
//       '8 inch':{
//          'size':'8 inch',
//            'price': 80,
//            'currency':'Rs',
//            'material':'carbon steel',
//            'weight':'0.7 kg'
//       },
      
//       '9 inch':{
//          'size':'9 inch',
//            'price': 100,
//            'currency':'Rs',
//            'material':'carbon steel',
//            'weight':'0.9 kg'
//       }
// };


// document.getElementById("selectsize").onchange=function()
// {
//    var titems=document.getElementById("selectsize").value;
//    console.log(titems);
//    var itemdata= document.getElementsByName("size");
//    console.log(itemdata);
//    var sel_index=titems.options.selectedIndex;
//    // console.log(sel_index);
  

// }
// *********************************************************
// document.getElementById("ham_icon").onclick=function()
// {
//    document.getElementById("nav_div").style.right='0';
// }
// document.getElementById("close_div").onclick=function()
// {
//    document.getElementById("nav_div").style.right='-320px';
// }