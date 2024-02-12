let arr = [
  {
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    story:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    story:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    story:
      "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },

  {
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
];

let clotter = "";
arr.forEach(function (ele, index) {
  clotter += `<div class="story">
    <img id="${index}" src="${ele.story} " alt="">
</div>`;
});

document.querySelector(".storyan").innerHTML = clotter;

document.querySelector(".storyan").addEventListener("click", function (val) {
  document.querySelector(".full-screen").style.display = "block";
  document.querySelector(".full-screen").style.backgroundImage = `url(${
    arr[val.target.id].story
  })`;
  setTimeout(function () {
    document.querySelector(".full-screen").style.display = "none";
  }, 2000);
});
