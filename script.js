var questionOutput = document.querySelector(".questionOutput");
var description = document.querySelector(".description");
var des2 = document.querySelector(".des2");
const btn = document.querySelector(".btn");
const ans30 = document.querySelector(".ans30");
const ans43 = document.querySelector(".ans43");
const ans57 = document.querySelector(".ans57");
const things = document.querySelector(".things");
const nameInput = document.querySelector(".nameInput");
var clickCount = 0;

btn.onclick = () => {
  clickCount++;
  switch (clickCount) {
    case 1:
      questionSwap();
      things.style.display = "flex";
      nameInput.style.display = "block";
      btn.innerHTML = "Next";
      break;
    case 2:
      nameStoring();
      things.style.display = "none";
      nameInput.style.display = "none";
      btn.innerHTML = "Yess!";
      questionSwap();
      break;
    case 3:
      questionSwap();
      btn.style.display = "none";
      ans30.style.display = "block";
      ans43.style.display = "block";
      ans57.style.display = "block";
      break;
  }
};

var firstName = document.querySelector(".nameInput").value;
var lastName;

function nameStoring() {
  firstName = document.querySelector(".nameInput").value;
  if (firstName.toLowerCase() == "akshat") {
    lastName = "Vishwakarma";
  } else if (
    firstName.toLowerCase().charAt(0) == "j" &&
    firstName.toLowerCase().charAt(1) == "a"
  ) {
    lastName = "Karekar";
  } else if (firstName.toLowerCase() == "aditya") {
    lastName = "Sharma";
  } else if (firstName.toLowerCase() == "atharva") {
    lastName = "Soni";
  } else if (firstName == "") {
    firstName = "Player";
    lastName = "";
  } else {
    lastName = "";
  }
}

function questionSwap() {
  const contents = [
    {
      question: "Firstly, you need to enter your name.",
      description:
        "You'll need to enter your name to continue. Enter only your first name.",
    },
    {
      question: `So ${firstName} ${lastName}, do you think that you're smart?`,
      description:
        "Just answer the question and btw, you only have one option. So..., yeah!",
    },
    {
      question: "Let's see if you can answer this question.",
      description:
        "When Sally was 6 years old, her brother was half of her age. Find out the brother's age if Sally is now 60 years old.",
    },
    {
      question: `Nice ${firstName}. Now answer this.`,
      description:
        "If we multiply 95674 with 67. Is the result bigger than 234857 or not?",
    },
    {
      question: "Do you wanna know how do you look like?",
      description:
        "Don't know what to write just say if you want to know or not.",
    },
  ];

  for (var i = clickCount - 1; i < clickCount; i++) {
    questionOutput.innerHTML = contents[i].question;
    description.innerHTML = contents[i].description;
  }
}

const wrong = document.querySelector(".wrong");
const right = document.querySelector(".right");
const big = document.querySelector(".big");
const small = document.querySelector(".small");
var answerAnim = [
  {
    animation: "answerAnim1 1s ease-in-out forwards",
  },
  {
    animation: "answerAnim2 1s ease-in-out forwards",
  },
  {
    animation: "answerAnim3 1s ease-in-out forwards",
  },
];

function answerCheck() {
  ans30.onclick = () => {
    Object.assign(wrong.style, answerAnim[0]);
  };
  ans43.onclick = () => {
    Object.assign(wrong.style, answerAnim[1]);
  };
  ans57.onclick = () => {
    Object.assign(right.style, answerAnim[2]);
    clickCount++;
    questionSwap();
    ans30.style.display = "none";
    ans43.style.display = "none";
    ans57.style.display = "none";
    big.style.display = "block";
    small.style.display = "block";
  };
}

answerCheck();

const saidBtn = document.querySelector(".saidBtn");
const saidBlock = document.querySelector(".saidBlock");
const saidVideo = document.querySelector(".saidVideo");

big.onclick = () => {
  said();
};

small.onclick = () => {
  said();
};

function said() {
  saidVideo.play();
  saidBlock.style.display = "flex";
}

const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

saidBtn.onclick = () => {
  clickCount++;
  questionSwap();
  saidVideo.pause();
  saidBlock.style.display = "none";
  big.style.display = "none";
  small.style.display = "none";
  yesBtn.style.display = "block";
  noBtn.style.display = "block";
};

const lookBlock = document.querySelector(".lookBlock");
const monkeyImage = document.querySelector(".monkeyImage");
const pigImage = document.querySelector(".pigImage");
const mainBlock = document.querySelector(".mainBlock");
var lookOutput = document.querySelector(".lookOutput");

yesBtn.onclick = () => {
  look();
};

function look() {
  mainBlock.style.display = "none";
  lookBlock.style.display = "flex";
  monkeyImage.style.display = "block";

  setTimeout(lookText1, 2000);
  setTimeout(lookText2, 4000);
  setTimeout(lookText3, 6000);
  setTimeout(lookText4, 8000);
  setTimeout(finalPic, 10000);
  setTimeout(startPrank, 13000);

  function lookText1() {
    monkeyImage.style.display = "none";
    lookOutput.innerHTML = "Ohhh.. wait no";
  }

  function lookText2() {
    lookOutput.innerHTML = "That's the wrong image";
  }

  function lookText3() {
    lookOutput.innerHTML = "Fuck, I can't find the correct one.";
  }

  function lookText4() {
    lookOutput.innerHTML = "Yess! Found it.";
  }

  function finalPic() {
    lookOutput.innerHTML = "";
    pigImage.style.display = "block";
  }
}

const prankBlock = document.querySelector(".btnPrankBlock");
const prankOutput = document.querySelector(".prankText");
const prankBtn = document.querySelector(".prankBtn");
var prankClickCount = 0;

function startPrank() {
  lookBlock.style.display = "none";
  prankBlock.style.display = "flex";
}

prankBtn.onclick = () => {
  prankClickCount++;
  lastPrank();
  if (prankClickCount == 4) {
    sacre();
  }
};

prankOutput.innerHTML = `Hey ${firstName}, you've completed this part. You can exit now and don't click the button below.`;

function lastPrank() {
  const text = [
    {
      output: "I said DON'T CLICK THE BUTTON",
    },
    {
      output: "You'll regret if you again pressed that button. I swear to God.",
    },
    {
      output: `Now ${firstName}, if you clicked that button one more time. You're gone.`,
    },
  ];

  for (var i = prankClickCount - 1; i < prankClickCount; i++) {
    if (prankClickCount > 3) {
      break;
    }
    prankOutput.innerHTML = text[i].output;
  }
}

const scareBlock = document.querySelector(".scareBlock");
const scaryVideo = document.querySelector(".scaryVideo");

function sacre() {
  prankBlock.style.display = "none";
  scaryVideo.play();
  scareBlock.style.display = "flex";
}
