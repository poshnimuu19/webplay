//alert("hello posh!")
 function bashYear(){
var birthdayYear=prompt('what year were you born?');
  var ageInDays=(2020-birthdayYear)* 365;//multiplies te number of years with the number of days per year
  var h1=document.createElement('h1');
  var textAnswer= document.createTextNode('you are'+ ageInDays+'days');
  h1.setAttribute('id','ageInDays');// the h1 is set to  have an id of Age in days which is also in the flex-box-result
  h1.appendChild(textAnswer);//textanswer takes the H1 attributes
  document.getElementById('flex-box-result').appendChild(h1);
 }
 function reset(){
    document.getElementById('ageInDays').remove() ;
 }
 //cat generator fuction
 function generateCat(){
     var image= document.createElement('img');// create a variable image using DOM
     var div = document.getElementById('flexCat');// accessing the flexbox where the cat shoud appear
     image.src="tenor.gif";// the source of the gif image
     div.appendChild(image);// adding the image  to the div created which is the flexbox.
 }