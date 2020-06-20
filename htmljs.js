var demo=document.getElementById("demo");
var div1=document.createElement('div');
div1.classList.add("sub");
demo.appendChild(div1);
var image=document.createElement('img');
image.src="profileicon.png";
image.alt="profile picture";
image.classList.add('img');
div1.appendChild(image);

var heading=document.createElement('h2');
heading.textContent="Bhargavi";
div1.appendChild(h2);

var para1=document.createElement('p');
para1.textContent="react learner";
para1.classList.add('sub');
div1.appendChild(para1);


var para2=document.createElement('p');
para2.textContent="9347950236";
para2.classList.add('sub');
div1.appendChild(para2);

var para3=document.createElement('p');
para3.textContent="bhargavikunta09@gmail.com";
para3.classList.add('sub');
div1.appendChild(para3);