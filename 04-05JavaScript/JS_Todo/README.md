# JavaScript ToDoアプリ

## 概要
DOMの操作を用いたシンプルなTodoアプリの作成をします。

* [完成見本](https://razonaluis.github.io/technext/04-05JavaScript/JS_Todo/)

## 機能
* ユーザーはinputに文字を入力
* 「Add」をクリックすると、入力した内容が下のリストに追加される（以下タスクと呼ぶ）
* 各タスクには「Delete」ボタンがついており、クリックすると、リストから削除される。

## 作成の手順

* zipファイルのダウンロード ([クリックでDL開始](https://github.com/NexSeed00/STO/blob/master/%E7%99%BA%E5%B1%95%E5%AD%A6%E7%BF%92/JavaScript/JS_Todo/js_todo.zip?raw=true))
* HTML、CSSは用意されているので、main.jsを編集します。

1. ボタン要素を取得(変数名btn)
2. ボタンにクリックイベントを追加する (3-16は全てこのイベント内)
3. ユーザーが入力した要素を取得 (変数名input)
4. 変数(task)を作成し、上で取得した要素の入力された内容 (キー名value) を取得し、変数(task)に代入
5. `<li>`要素を作成 (変数名list)
6. `<li>`にクラス（list）を追加
7. `<li>`にユーザーが入力した内容(4のtask)を入れる
8. `<ul>`要素を取得 (todo-list)(変数名list_wrap)
9. 4-6で作成した`<li>`(list)を、8で取得した`<ul>`(listWrap)の子要素に入れる
10. inputの中に入力された文字を消去する（input.value='';で値を消すことができる）
11. Deleteボタンを作成（機能としてはボタンですが、`<div>`要素を使います）(変数名deleteBtn)
12. Deleteボタンのコンテンツ (文字) を「delete」にする
13. Deleteボタンにクラス (delete) を追加する
14. 11-13で作成したDeleteボタン(deleteBtn)を、5-8で作成した`<li>`(list)の子要素に入れる
15. Deleteボタンにクリックイベントを追加 (15)
16. クリックした要素 (this) を親ごと(親を指すキー名はparentElement)削除


## 使用するコードの復習
まだDOM操作の基本を覚えられていない方は、制作開始前におさらいしましょう。

#### 要素の取得

`document.querySelector('.クラス名')`

#### 要素の作成

`document.createElement('タグ名')`

#### 要素にクラスを追加

`要素.classList.add('クラス名')`

#### 要素のコンテンツ (文字) を編集
`要素.textContent = inputValue`

#### 子要素を追加

`親要素.appendChild(子要素)`

#### 親要素を削除

`要素.parentElement.remove();`

#### 要素のvalueを編集

`document.querySelector('#id').value = '任意のvalueの値'`

#### ある要素の親要素

`要素.parentElement`

#### 要素の削除

`要素.remove()`

#### イベントの追加
```
要素.addEventListener('click', function() {
    console.log('Hello World');
});
```
