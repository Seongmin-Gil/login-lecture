"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pw = document.querySelector("#pw"),
    conPw = document.querySelector("#confirm-pw"),
    registerbtn = document.querySelector("#button");
registerbtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("ID를 입력해주세요");
    if (pw.value !== conPw.value) return alert("비밀번호가 일치하지 않습니다!!");

    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };
    console.log(req);

    fetch("/register", {
        method: "POST",
        headers: {
            "content-Type":"application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((error) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
}