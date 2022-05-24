// const input = prompt;
// if (input === "") {
//   console.log("no input data");
// } else {
//   console.log(input);
// }

// const result = fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json()) //결과 받으면 json 변환
//   .then(console.log); //변환한 다음에 로그
// console.log(result);
// //비동기 처리
// //동기 비동기 구분 : 기준으로 왼쪽이 함수 원형설명, 오른쪽이 결과값. 결과값에 promise == 비동기, ~promise : 동기
// //pending 처리중 fulfilled 처리완료 rejected 처리완료했지만 오류

const me = {
  name: "temp",
  age: 26,
  gender: "male",
};

const militaryMe = {
  ...me,
  military: false,
}; //spread me라는 구조체 내용 복사
//object는 object 끼리만, array<->array

const animals = ["dog", "cat"];
const another = [...animals, "bird"];

//const name = me.name 하면 struct 내부
//props 변수화 가능
//const {name} = me  비구조화 할당 key값을 변수로
//const {name, age} = me

const someone = {
  name: "tmp",
  age: 27,
  gender: "female",
};

function addMilitaryStateIfMale(person) {
  if (person.gender === "male") {
    person.militaryState = false; //state add
  }
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

console.log(me);
console.log(someone);

function parseBoolean(value) {
  if (value === true) {
    return "참";
  } else if (value === false) {
    return "거짓";
  }
}

if (me.militaryState !== undefined) {
  console.log(parseBoolean(me.militaryState));
} // me.military~~ !== undefined && console~~ 동일
// && 기능 : 왼쪽 조건 충족하면 오른쪽 실행해라

if (someone.militaryState !== undefined) {
  console.log(parseBoolean(someone.militaryState));
}
