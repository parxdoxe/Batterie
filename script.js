//Pour touche Q
var q = document.getElementById("q");
var audioQ = new Audio("./sounds/clap.wav");

window.addEventListener("keydown", function (event) {
  if (event.key == "q") {
    audioQ.play();
    q.classList.add("select");
    this.setTimeout(function () {
      q.classList.remove("select");
    }, 400);
  }
});

q.addEventListener("click", function(){
    audioQ.play();
    q.classList.add("select");

    this.setTimeout(function () {
      q.classList.remove("select");
    }, 1);
})

//Pour touche S
var s = document.getElementById("s");
var audioS = new Audio("./sounds/hihat.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "s") {
      audioS.play();
      s.classList.add("select");
      this.setTimeout(function () {
        s.classList.remove("select");
      }, 400);
    }
  });


// Pour touche D
var d = document.getElementById("d");
var audioD = new Audio("./sounds/kick.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "d") {
      audioD.play();
      d.classList.add("select");
      this.setTimeout(function () {
        d.classList.remove("select");
      }, 400);
    }
  });

// Pour touche F
var f = document.getElementById("f");
var audioF = new Audio("./sounds/openhat.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "f") {
      audioF.play();
      f.classList.add("select");
      this.setTimeout(function () {
        f.classList.remove("select");
      }, 400);
    }
  });

// Pour touche G
var g = document.getElementById("g");
var audioG = new Audio("./sounds/boom.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "g") {
      audioG.play();
      g.classList.add("select");
      this.setTimeout(function () {
        g.classList.remove("select");
      }, 400);
    }
  });
// Pour touche H
var h = document.getElementById("h");
var audioH = new Audio("./sounds/ride.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "h") {
      audioH.play();
      h.classList.add("select");
      this.setTimeout(function () {
        h.classList.remove("select");
      }, 400);
    }
  });
// Pour touche J
var j = document.getElementById("j");
var audioJ = new Audio("./sounds/snare.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "j") {
      audioJ.play();
      j.classList.add("select");
      this.setTimeout(function () {
        j.classList.remove("select");
      }, 400);
    }
  });
// Pour touche K
var k = document.getElementById("k");
var audioK = new Audio("./sounds/tom.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "k") {
      audioK.play();
      k.classList.add("select");
      this.setTimeout(function () {
        k.classList.remove("select");
      }, 400);
    }
  });
// Pour touche L
var l = document.getElementById("l");
var audioL = new Audio("./sounds/tink.wav");

window.addEventListener("keydown", function (event) {
    if (event.key == "l") {
      audioL.play();
      l.classList.add("select");
      this.setTimeout(function () {
        l.classList.remove("select");
      }, 400);
    }
  });