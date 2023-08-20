const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
 
 

image1.addEventListener("click", () => {
  image1.style.display = "none";
  image2.style.display = "block";
  document.body.style.backgroundColor = '#FFFFFF' ;
  document.body.style.color = 'black';
  document.body.style.transition = '2s';
});

image2.addEventListener("click", () => {
  image2.style.display = "none";
  image1.style.display = "block";
  document.body.style.backgroundColor = '#000000' ;
  document.body.style.color = 'white';
  document.body.style.transition = '2s';
});
