## Margin

## 概要
CSSはHTMLを装飾するために使用することはすでに説明しました。  

装飾には主に以下の3つがあります。
1. 要素の配置を決める
2. 要素のサイズを決める
3. 要素の見た目(色など)を決める。  

今回学習するMargin,text-alignは**要素の配置を決める**ための
CSSです。


## ゴール
Margin,text-alignを使って要素を左右に配置する。

## 使い方の例
1. text-alignを使った事例
  中身のテキストや画像といったインライン要素の中央寄せは簡単です。親となるブロック要素にtext-align:center;を指定します。
```html
  <div class="outer">
  <div class="inner">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>
```

```css
  .inner{
  text-align: center;
}
```

2. marginを使った事例
  こちらはサイト全体のレイアウトを中央寄せにするときなどに使われます。
  ・中央寄せ
  ※HTLMは上同様
  ```css
  .inner{
    width: 80%;
    margin: 0 auto;
    max-width: 500px;
  }
  ```
  ポイントはwidthの指定が必須であることです。単位「%」で指定すればレスポンシブWebデザインへの対応が可能です。
  PCビューで最大幅を決めるため、合わせてmax-widthを使うこともあります。

  ・左よせ
    ```css
    .inner{
      width: 80%;
      max-width: 500px;
    }
    ```
  そもそもデフォルトで要素は左寄せになっていますのでmarginをしてしなければ左になります。

  ・右寄せ
    ```css
      .inner{
        width: 80%;
        margin-left: auto;
        max-width: 500px;
      }
    ```
    こちらもポイントはwidthの指定が必須であることです。その上でmargin-leftをautoにしていすれば要素が右寄せになります。


