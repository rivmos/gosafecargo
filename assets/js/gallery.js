showImages();

let images = ['two.jpeg','three.jpeg','four.jpeg'];
i = 0;
function showImages(){
    let image = document.getElementById('image');
    setInterval(function(){
      if(i<3){
        image.src = `/gosafe/assets/media/images/${images[i]}`;
        i++;
      }
      else{
        i = 0;
        image.src = '/gosafe/assets/media/images/one.jpeg';
      }
    },3000);
  }
  
function showNav(){
    let navigation = document.getElementById('navigation');
    if (navigation.style.display === "block") {
      navigation.style.display = "none";
    } else {
      navigation.style.display = "block";
    }
}
    