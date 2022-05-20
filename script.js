//Pour touche Q
var q = document.getElementById("q");
var audioQ = new Audio("./sounds/clap.wav");

//Pour touche S
var s = document.getElementById("s");
var audioS = new Audio("./sounds/hihat.wav");

// Pour touche D
var d = document.getElementById("d");
var audioD = new Audio("./sounds/kick.wav");

// Pour touche F
var f = document.getElementById("f");
var audioF = new Audio("./sounds/openhat.wav");

// Pour touche G
var g = document.getElementById("g");
var audioG = new Audio("./sounds/boom.wav");

// Pour touche H
var h = document.getElementById("h");
var audioH = new Audio("./sounds/ride.wav");

// Pour touche J
var j = document.getElementById("j");
var audioJ = new Audio("./sounds/snare.wav");

// Pour touche K
var k = document.getElementById("k");
var audioK = new Audio("./sounds/tom.wav");

// Pour touche L
var l = document.getElementById("l");
var audioL = new Audio("./sounds/tink.wav");

var t;

window.addEventListener("keydown", function (event) {
  if (event.key == "q") {
    audioQ.play();
    q.classList.add("select");
    document.body.classList.add("bgQ");
    this.setTimeout(function () {
      q.classList.remove("select");
      document.body.classList.remove("bgQ");
      clearTimeout();
    }, 300);
  } else if (event.key == "s") {
    audioS.play();
    s.classList.add("select");
    document.body.classList.add('bgS')
    this.setTimeout(function () {
      s.classList.remove("select");
      document.body.classList.remove("bgS");
      clearTimeout();
    }, 300);
  } else if (event.key == "d") {
    audioD.play();
    d.classList.add("select");
    document.body.classList.add('bgD')
    this.setTimeout(function () {
      d.classList.remove("select");
      document.body.classList.remove("bgD");
      clearTimeout();
    }, 300);
  } else if (event.key == "f") {
    audioF.play();
    f.classList.add("select");
    document.body.classList.add('bgF')
    this.setTimeout(function () {
      f.classList.remove("select");
      document.body.classList.remove('bgF')
      clearTimeout();
    }, 300);
  } else if (event.key == "g") {
    audioG.play();
    g.classList.add("select");
    document.body.classList.add('bgG')
    this.setTimeout(function () {
      g.classList.remove("select");
      document.body.classList.remove('bgG')
      clearTimeout();
    }, 300);
  } else if (event.key == "h") {
    audioH.play();
    h.classList.add("select");
    document.body.classList.add('bgH')
    this.setTimeout(function () {
      h.classList.remove("select");
      document.body.classList.remove('bgH')
      clearTimeout();
    }, 300);
  } else if (event.key == "j") {
    audioJ.play();
    j.classList.add("select");
    document.body.classList.add('bgJ')
    this.setTimeout(function () {
      j.classList.remove("select");
      document.body.classList.remove('bgJ')
      clearTimeout();
    }, 300);
  } else if (event.key == "k") {
    audioK.play();
    k.classList.add("select");
    document.body.classList.add('bgK')
    this.setTimeout(function () {
      k.classList.remove("select");
      document.body.classList.remove('bgK')
      clearTimeout();
    }, 300);
  } else if (event.key == "l") {
    audioL.play();
    l.classList.add("select");
    document.body.classList.add('bgL')
    this.setTimeout(function () {
      l.classList.remove("select");
      document.body.classList.remove('bgL')
      clearTimeout();
    }, 300);
  }
});

q.addEventListener("click", function () {
  audioQ.play();

  t.setInterval(function () {
    if (q.classList.contains("select")) {
      q.classList.remove("select");
    } else {
      q.classList.add("select");
    }
  }, 1000);
});
