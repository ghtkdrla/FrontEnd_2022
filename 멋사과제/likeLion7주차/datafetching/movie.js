const APIKEY = "tmp"; //api key 항상 숨김
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
//data format : json format
option = {
  method: "GET",
  header: {
    "Content-Type": "application/json; charset=utf-8",
  },
};
//각각의 url call why? fetch는 url protocol 기반. 필요한 url로 가서 해당 url backend으로부터 data 받고 fetching, 필요한 정보들
//parsing 후 화면에 print...
//js를 이용해 반응형 html을 만드는 작업
//target url 타고 들어가서 파이썬 web crawling 세미나 하듯이 개발자도구 켜고 data format 맞게 parsing.

//첫 인자 : url. fetch 기다렸다가 실행. then 문법 이용
const now_playingURL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
  APIKEY +
  "&language=en-US&page=1";
const now_playing = document.getElementById("now-playing");
fetch(now_playingURL, option)
  .then((response) => response.json()) //response json format parsing. parsing된 data response라고 재선언
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img"); // 화면에 parsed data 뿌려줄 때 tag이용해서 뿌림
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path); //이미지파일 parsing방법
      let title = document.createElement("h4");
      title.innerText = element.title; //title
      let rate = document.createElement("span");
      rate.innerText = "*" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(moviediv);
      now_playing.appendChild(movie); //tag로 만든것들 let변수로 저장 후, appendchild로 뿌려줌
    });
  });
//하단부 url 등 약간의 detail만 차이발생. 위와 대동소이 함

const popularURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  APIKEY +
  "&language=en-US&page=1";
const popular = document.getElementById("popular");
fetch(popularURL, option)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "*" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(moviediv);
      popular.appendChild(movie);
    });
  });

const top_ratedURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
  APIKEY +
  "&language=en-US&page=1";
const top_rated = document.getElementById("top-rated");
fetch(top_ratedURL, option)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "*" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(moviediv);
      top_rated.appendChild(movie);
    });
  });
const up_commingURL =
  "https://api.themoviedb.org/3/movie/up_comming?api_key=" +
  APIKEY +
  "&language=en-US&page=1";
const up_comming = document.getElementById("up-comming");
fetch(up_commingURL, option)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "*" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(moviediv);
      up_comming.appendChild(movie);
    });
  });
