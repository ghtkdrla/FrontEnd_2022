const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 10; //#10questions

const select = [0, 0, 0, 0]; //back front design plan

//qna input
function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".aBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-5"); //margain
  answer.classList.add("py-3"); //padding
  answer.classList.add("mx-auto");

  answer.classList.add("fadeIn");

  a.appendChild(answer); //answer a 에 append
  answer.innerHTML = answerText;

  //eventlistener로 클릭마다 func 구현(다음질문)
  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        for (let i = 0; i < target.length; i++) {
          select[target[i]] += 1; //back front index... ++
        }

        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none"; //js 스타크래프트 프로젝트 display 사라지는 효과
        }
        goNext(++qIdx);
      }, 450); //450ms
    },
    false
  );
}
function calResult() {
  var result = select.indexOf(Math.max(...select)); //select 목록 중 Math library 내 가장 큰 값 return
  return result;
}

function setResult() {
  let point = calResult();

  const resultNameIntro = document.querySelector(".resultIntro");
  resultNameIntro.innerHTML = infoList[point].nameIntro;

  const resultName = document.querySelector(".resultName");
  resultName.innerHTML = infoList[point].name; //result printing

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/image-" + point + ".png";

  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultDesc1 = document.querySelector(".resultDesc1");
  const resultDescTitle1 = document.querySelector(".resultDescTitle1");

  resultDescTitle1.innerHTML = infoList[point].descTitle1;
  resultDesc1.innerHTML = infoList[point].desc1;

  const resultDesc2 = document.querySelector(".resultDesc2");
  const resultDescTitle2 = document.querySelector(".resultDescTitle2");
  resultDescTitle2.innerHTML = infoList[point].descTitle2;
  resultDesc2.innerHTML = infoList[point].desc2;
} //result text, img, desc ... printing

function goResult() {
  qna.style.WebkitAnimaiton = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.webkitAnimaiton = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  }, 450);

  setResult();
}

function goNext(qIdx) {
  if (qIdx == endPoint) {
    goResult(); //question index 다 끝난다 => resultpage
    return;
  }
  var q = document.querySelector(".qBox");

  q.innerHTML = qnaList[qIdx].q;

  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }

  var countStatusNum = document.querySelector(".countStatus");
  countStatusNum.innerHTML = qIdx + 1 + "/" + endPoint;

  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%"; //%반환법 수식. 100 * curidx / idx
}

function start() {
  main.style.WebkitAnimaiton = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.webkitAnimaiton = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
