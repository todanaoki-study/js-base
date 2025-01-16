// const p = document.querySelector('p');
// console.log(p.innerHTML);

//todo sample
// const head = document.querySelector("h1");
//*親要素を返す
// console.log(head.parentElement);

//*node形式で返す
// console.log(head.parentNode);

//*親要素の小要素を表示
// console.log(head.parentElement.children);
// console.log(head.parentElement.childNodes);

//*最初の要素の取得　secondは無理　lastはok
// console.log(head.parentElement.firstElementChild);

//*兄弟要素の取得 ここではh1の親要素の兄弟なのでhead要素
// console.log(head.parentElement.previousElementSibling);

//?nextだと下の兄弟　previousだと上の兄弟
// console.log(head.nextElementSibling);

//*headから遡って最初のhtmlを返す
// console.log(head.closest("html"));

let active = 0;
const question = document.querySelectorAll(".faq__q");

//*アコーディオン
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", (e) => {
        //前開いていた物を閉じる
        question[active].parentElement.classList.remove("active");
        //アクティブを更新
        active = i;
        //今から開く物
        question[active].parentElement.classList.add('active');
    })
}

const ul = document.createElement("ul");
ul.classList.add("ul");
ul.innerHTML = "サンプル"
document.body.appendChild(ul);

console.log(ul);