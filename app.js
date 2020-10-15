const quiz = [
  {
    question: "i'm [ ] the computer. 中身に入る単語はどれ？",
    answers: [
      "looking at",
      "looking for",
      "looking up",
      "looking around"
    ],
    correct: "looking at"
  },
  {
    question: "Do you play any musical [ ] ?. 中身に入る単語はどれ？",
    answers: [
      "techniques",
      "machinery",
      "sounds",
      "instruments"
    ],
    correct: "instruments"

  }, {
    question: "Where do you usually go when you eat [ ]? . 中身に入る単語はどれ？",
    answers: [
      "at",
      "away",
      "in",
      "out"
    ],
    correct: "out"
  }
];

const quizLenght = quiz.length;
let quizIndex = 0;
let score = 0;

// const question = "i'm [ ] the computer. 中身に入る単語はどれ？";
// const answers = [
//   "looking at",
//   "looking for",
//   "looking up",
//   "looking around"
// ];
// const correct = "looking at";

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;



//htmlのオブジェクトは＄をつける。
//クイズの問題文、選択技を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  //＝にするだけで書き換える事ができる。定数の文字列をhtmlに反映させる。
  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();



//クリックされたら動く。
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLenght) {
    // 問題がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLenght + "です！");
  }

};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });
