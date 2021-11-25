// 🟪 problem
// Function to Arrow function

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?",
    function () { alert("동의하셨습니다."); },
    function () { alert("취소 버튼을 누르셨습니다."); }
);
*/


// 💜 Answer

ask = ((question, yes, no) => {
  if (confirm(question)) yes()
  else no();
});

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);

// ❗️❗️ Window.confirm() 메서드는 확인과 취소 두 버튼을 가지며 메시지를 지정할 수 있는 모달 대화 상자를 띄웁니다.
// ❗️❗️ note func as parameter!