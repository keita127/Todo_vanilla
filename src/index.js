import "./styles.css";

//入力された文字をTODOとして追加
const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  //入力欄を初期化
  document.getElementById("add_text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

//未完了リストに要素を追加
const createIncompleteList = (text) => {
  //liタグ作成
  const li = document.createElement("li");

  //divタグ作成
  const div = document.createElement("div");
  div.className = "list_row";

  //pタグ作成
  const p = document.createElement("p");
  p.innerText = text;
  p.className = "todo_content";

  //button(完了)タグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押されたボタンの祖父タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.closest("ul > li"));

    //TODOの内容(text)の取得
    const text = completeButton.previousElementSibling.innerText;

    //liタグ作成
    const li = document.createElement("li");

    //divタグ作成
    const div = document.createElement("div");
    div.className = "list_row";

    //pタグ作成
    const p = document.createElement("p");
    //取得したtextを設定する
    p.innerText = text;
    p.className = "todo_content";

    //button(戻る)タグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.closest("ul > li");
      document.getElementById("complete_list").removeChild(deleteTarget);
      //テキストの取得
      const text = completeButton.previousElementSibling.innerText;
      createIncompleteList(text);
    });

    ///liタグの子要素(div)、孫要素(p, button)の設定
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    ///完了したTODOにli要素を追加
    document.getElementById("complete_list").appendChild(li);
  });

  //button(削除)タグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押されたボタンの祖父タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest("ul > li"));
  });

  ///liタグの子要素(div)、孫要素(p, button)の設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
