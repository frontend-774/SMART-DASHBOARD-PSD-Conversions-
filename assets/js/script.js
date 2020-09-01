let val = 0;

$(function() 
{
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('.sidebar').toggleClass('active');
      if($(".ds-text").hasClass("text-nones")){
        $( ".ds-text" ).animate({
          marginRight: -3,
          marginLeft: 0,

         
        }, 400 );
        val = 1;
        $(".width-350").addClass("nav-hover");
        setTimeout(function(){ 
        $(".ds-text").removeClass("text-nones");

        }, 100);
     
      
      }
      else{
        $(".ds-text").show();
        $( ".ds-text" ).animate({
          marginRight:'0px',
          marginLeft:'-130px',
        }, 100 );
        $(".ds-text").addClass("text-nones"); 
        // setTimeout(function(){ }, 0);
        val = 0;
        $(".width-350").removeClass("nav-hover");
        
      }

    });
    return val;
  });


 
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth()+1;
  var day = d.getDate();

  var output = d.getFullYear() + '/' +
      (month<10 ? '0' : '') + month + '/' +
      (day<10 ? '0' : '') + day; 

    let year_ = document.getElementById("year_name");
    year_.innerHTML = year; 

    let date_ = document.getElementById("today's_date");
    date_.innerHTML = day ;

   
        
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
      ];
  
  const d1 = new Date();
   let month_  =  monthNames[d1.getMonth()];
  let b =  document.getElementById("today's_month") ;
   b.innerHTML = month_;
  
 


 
    // $(function(){
    //     $("#hide-button").on('click', function () {
    //         $(".sidebar").delay(1000).hide("slide", { direction: "left",distance:'80%' },2000);
    //     });

    // });
    // $(function(){
    //     $("#sidebarCollapse").on('click', function () {
    //         $('.sidebar').delay(1000).show("slide", { direction: "left",distance:'80%' },2000);
    //     });

    // });



// // demo.onclick = function()
    // // {
// //  document.getElementById('demo').innerHTML = 'sfdsdfsd';
// // }


//  let myButton = document.getElementById('demo1');
//  let myheading = document.getElementById('12');



// myButton.onclick = function(){
//     setusername();
//     Check();

// }

// function setusername(){
//     let myname = prompt('Please Enter your name ');
//     localStorage.setItem('name' , myname);
//     myheading.textContent =  'Cool'  +  myname;
// }

// function Check(){
// if(!localStorage.getItem('name')){
//     setusername();
// }
// else{
//     let storedName = localStorage.getItem('name')
//     myheading.textContent =  'Cool',  storedName;

// }
// }

// //Adding an Imager Changer

// let myImage = document.querySelector('img');

// myImage.onclick  = function(){
//     let mySrc = myImage.getAttribute('src');

//     if(mySrc === './assets/images/c-programming.jpg' ){
//         myImage.setAttribute('src' , './assets/images/123.PNG' );
//     }
//     else{
//         myImage.setAttribute('src' , './assets/images/c-programming.jpg');
//     }
// }

// let myImage1 = document.getElementById('img1');

// myImage1.onclick = function(){

//     let mySrc1  = myImage1.getAttribute('src');
//     if(mySrc1 === './assets/images/123.PNG'){
//         myImage1.setAttribute('src' , './assets/images/c-programming.jpg');
//     }
//     else{
//         myImage1.setAttribute('src' , './assets/images/123.PNG') ;
//     }
// }



// // Factory Function

// function creatCircle(radius){
//     return {
//         radius ,

//         draw : function(){
//             console.log("factory function")
//         }
//     }
// };


// const drawCircle  = creatCircle(1);
// drawCircle.draw();



// // Constructor Functions

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }

// }


// const anotherCircle = new Circle(1);

// const circle1 = new Circle(10);

// for(let key in circle1){
//     if(typeof key !== 'function'){
//         console.log(key ,circle1[key]);

//     }
// }

// if('radius' in circle1){
//     console.log('asdasdas');
// }


// // different Method

// const circle2 = new Circle1('radius' , `this.radius = radius;
// this.draw = function(){
//     console.log('draw');
// }
// `);


// const circle = new circle2(1);


// Circle.call({} , 1)
// Circle.apply({} , [1,2,3,4]);



// let obj = {value : 1};

// function increase(obj){
//     obj.value++;
// }

// increase.obj;
// console.log(obj);



// function stopwatch(){
//     let startTime , endTime , setTime , running , duration = 0;
//     this.start = function(){
//         if(running){
//             throw new Error('StopWatch has already started ');
//             running = true ;
//             startTime = new Date();
//         }
//     };
//     this.stop = function(){

//     }; this.reset = function(){

//     };
//     Object.defineProperty(this , 'duration', {get function() {
//         return duration;
//     }})
// }




// console.log(null == undefined);
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// }
// else{
//     console.log('Not A Nunmber');
// }


// let theNumber = 0;
// for (theNumber = 0 ; theNumber <=30 ; theNumber ++){
//     console.log("\n" , theNumber);
// if(theNumber % 3 == 0 && theNumber % 5 == 0)
// {
//     console.log("Fizz" + "Buzz");
// }

// }


// function printFarmInventory(cows, chickens) {
// let cowString = String(cows);
// while (cowString.length < 3) {
// cowString = "0" + cowString;
// }
// console.log( `${cowString} Cows`);

// let chickenString = String(chickens);
// while (chickenString.length < 3) {
// chickenString = "0" + chickenString;
// }
// console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);

// function printZeroPadedWithLabel(number , label){
//     let numberString = String(number);
//     while(numberString.length < 3){
//         numberString = "0" + numberString;
//     }

//     console.log(`${numberString} ${label}`);
// }

// function farmInventryCows(cow , chickens , beef){
//     printZeroPadedWithLabel(cow , "Cows");
//     printZeroPadedWithLabel(chickens , "Chicken");
//     printZeroPadedWithLabel(beef , "Beef");
// }

// farmInventryCows(3 , 4, 123);


// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//     string = "0" + string;
//     }
//     return string;
//     }
// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 6)} Cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pigs, 3)} Pigs`);
//     }
//     printFarmInventory(7, 16, 3);

//     let elements = ['hydrogen', 'Nitrogen' , 'belierun' ,'Boron'];
//      elements.map(function(element){
//     return element.length;
//      });

//      console.log(elements.push("Name" , " sfdsd") );