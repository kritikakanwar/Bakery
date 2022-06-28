var Fname=document.getElementById("fname").innerHTML;
var Lname=document.getElementById("lname").innerHTML;
var birthyear=document.getElementById("year").innerHTML;
console.log("My name is "+Fname+""+Lname+"I am "+birthyear);
var detail = {

    // Standard Delivery should match with the value specified in the options
    // otherwise js will give undefined error
    'Standard Delivery':{
     'leadtime':'7',
     'fees' : 20 
    },
    'Express':{
        'leadtime':3,
        'fees' : 10 
       }
    }

       
    
console.log("Ok");
var today=new Date();
// var date=today.getFullYear() +'-'+ today.getMonth() +'-'+today.getDate();
// const regular_shipment= 7;
// const express_shipment= 3;
// document.getElementById("date").innerHTML=today;
// console.log(today.getDate());
// console.log(today .getDay());
// console.log(today .getFullYear());
// console.log("Today is:"+" "+date);
// document.getElementById("date").innerHTML=date;

var selectedopt;
document.getElementById("delhi").onchange=function(){

    selectedopt=document.getElementById("delhi").value;
    // console.log(selectedopt);
    document.getElementById("date").innerHTML=selectedopt;
    // document.getElementById("onep").innerHTML=date;
    var leadtime = detail[selectedopt].leadtime;
    var fees = detail[selectedopt].fees;
    console.log(leadtime);
    console.log(fees);
    document.getElementById("threep").innerHTML=fees;
    var edate= new Date(today.getTime()+(leadtime*86400000));
    
var ddate=edate.getFullYear()+'-'+ edate.getMonth()+'-'+ edate.getDate();
console.log("order date:"+today.toISOString().slice(0,10));
document.getElementById("onep").innerHTML=today.toISOString() .slice(0,10);
// console.log("Delievery on :" +ddate);
document.getElementById("twop").innerHTML=edate.toISOString() .slice(0,10);
}

var product =
{
    'redmi 7':
    {
     'info':'Redmi note 7 pro' ,
     'price':7000,
     'currency':'Rs',
     'color':'silver',
     'url':'img/WhatsApp Image 2022-02-14 at 5.58.48 PM (3).jpeg'
    },
    'redmi 8':
    {
     'info':'Redmi note 8 pro' ,
     'price':8000 ,
     'currency':'Rs',
     'color':'peacock',
     'url':'img/WhatsApp Image 2022-02-14 at 5.58.48 PM (1).jpeg'
    },
    'redmi 9':
    {
     'info':'Redmi note 9 pro' ,
     'price':9000 ,
     'currency':'Rs',
     'color':'black',
     'url':'img/WhatsApp Image 2022-02-14 at 5.58.48 PM (2).jpeg'
    }
}
//  document.getElementsByName("radio").onchange=function()
//  {
     var radiodata=document.getElementsByName("radio");
     console.log(radiodata);
     for(a=0;a<radiodata.length;a++)
     {
        radiodata[a].onchange=function()
        {
            console.log("changed");
            for(b=0;b<radiodata.length;b++)
            {
               if(radiodata[b].checked)
               {
                   console.log(radiodata[b].value);
                   var selectedradio=radiodata[b].value;
                   document.getElementById("phonename").innerHTML=product[selectedradio].currency +(product[selectedradio].price.toFixed(2)).toString();
                   document.getElementById("price").innerHTML=product[selectedradio].color;
                   document.getElementById("phone").src=product[selectedradio].url;
                   
                   
               }
            }
        }
     }
    //  var yourname=document.getElementById("name").value;
    //  console.log("Welcome"+yourname);
    //  document.getElementById("submit").onclick(function(){
    //   document.getElementById("welcome").innerHTML= yourname;


    //  });
//  }
function temp(celcius)
{
    // var cel=document.getElementById("celcius").value;
 var f_calc=(9*celcius/5)+32;
 return f_calc;
//  console.log(f_calc);
//  console.log(cel);
}
var cel=parseFloat(document.getElementById("celcius").innerHTML);
var ftemp=document.getElementById("farahneit").innerHTML=temp(cel);
console.log(ftemp);