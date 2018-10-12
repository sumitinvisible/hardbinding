var obj = {
  name: 'Saurabh',
  display: function(){
    console.log(this.name); // 'this' points to obj
   }
 };
 obj.display();

 var name = "uh oh! global";
var outerDisplay = obj.display;
outerDisplay(); // uh oh! global

/* In the above example, when we call outerDisplay(), we don’t specify a context object. It is a plain function call without an owner object. In this case, the value of this inside display() falls back to default binding. It points to the global object or undefined if the function being invoked uses strict mode. */


// A dummy implementation of setTimeout
function setTimeout(callback, delay){
  //wait for 'delay' milliseconds
  callback();
}
setTimeout( obj.display, 1000 );


/* We can figure out that when we call setTimeout, JavaScript internally assigns obj.display to its argument callback .

callback = obj.display; */



/* This assignment operation, as we have seen before, causes the display() function to lose its context. When this callback is eventually invoked inside setTimeout, the this value inside display() falls back to default binding.

var name = "uh oh! global";
setTimeout( obj.display, 1000 ); */




/*Explicit hard Binding */


var name = "uh oh! global";
obj.display = obj.display.bind(obj); 
var outerDisplay = obj.display;
outerDisplay();



/* Now, when we call outerDisplay(), the value of this points to obj inside display() .

Even if we pass obj.display as a callback, the this value inside display() will correctly point to obj .

 */