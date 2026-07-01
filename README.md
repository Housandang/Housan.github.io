# 食べられません — トップページ

## ファイル構成

```
index.html                        トップページ本体
style.css                         デザイン（色・フォント・レイアウト）
script.js                         キャラクターのランダム表示
images/
  characters/
    placeholder-01.svg            仮のキャラクター（差し替え用サンプル）
    placeholder-02.svg            仮のキャラクター（差し替え用サンプル）
```

## 自分のイラストに差し替える方法

1. 描いたキャラクターの絵を `images/characters/` に入れてください。
   （PNG・背景透過推奨。ファイル名は自由です）
2. `script.js` の `characters` 配列に、そのファイル名を1行追加してください。

```js
const characters = [
  "images/characters/placeholder-01.svg",
  "images/characters/placeholder-02.svg",
  "images/characters/mychara-03.png", // ← こんな感じで追加
];
```

配列に入っている数だけ、サイトを開くたびに抽選されます。
仮画像（placeholder-01 / 02）は不要になったら配列から消してOKです。

## ナビゲーションのリンク先について

現在、右下の About / Works / Commission / Blog / Other は
`about.html` `works.html` のように仮のリンク先を指定しています。
これらのサブページはまだ作成していないので、リンクをクリックしても
ページは表示されません。サブページを作るときにファイル名を合わせるか、
`index.html` 内の `href` を実際のファイル名に書き換えてください。

## 色を変えたいとき

`style.css` の一番上、`:root { ... }` の中にある変数を書き換えると、
サイト全体の配色が一括で変わります。

```css
--color-teal: #3E5563;   /* キャラクターの基調色 */
--color-sky:  #A9DEF0;   /* 背景の水色アクセント */
```

## GitHub Pagesでの公開方法（簡単な流れ）

1. GitHubで新しいリポジトリを作成する
2. `index.html` `style.css` `script.js` `images` フォルダをアップロードする
3. リポジトリの Settings → Pages で、公開するブランチ（通常 `main`）を選択する
4. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で公開される
