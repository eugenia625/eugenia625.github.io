
//background
const images = ["img01.jpeg","img02.jpeg","img03.jpg","img04.jpg","img05.jpg","img06.jpg","img07.jpeg","img08.jpg","img09.jpg","img10.jpeg"];
function bgImgChange() {
  const randomimages = images[Math.floor(Math.random() * images.length)];
  document.body.style.background = `url(../images/${randomimages})no-repeat center top/cover`;
}
bgImgChange();