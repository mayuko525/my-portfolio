let image_src = new Array("image/img1.jpg", "image/img2.jpg", "image/img3.jpg");
let num = -1;

slideshow();

function slideshow() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = image_src[num];
  setTimeout("slideshow()", 2000);
}

function reWrite(num) {
  if (document.getElementById) {
    if (num == 0) {
      document.getElementById("str").innerHTML =
        "村上真優子です。大学4年生です。<br />北海道出身で東京に住んでいます。";
    }
    if (num == 1) {
      document.getElementById("str").innerHTML =
        "I'm Mayuko. I'm a 4th year university student.<br />I'm from Sapporo and live in Tokyo.";
    }
    if (num == 2) {
      document.getElementById("str").innerHTML =
        "Je suis Mayuko. Je suis une étudiante de 4e année.<br />Je suis de Sapporo et j'habite à Tokyo.";
    }
  }
}
