/* =========================================================
   食べられません — ランダムキャラクター表示
   ---------------------------------------------------------
   サイトを開くたびに、下の配列からランダムに1枚を選んで
   左側のキャラクター立ち絵として表示します。

   ★ 自分のイラストに差し替える／増やすには★
   1. images/characters/ フォルダの中に絵を追加する
      （PNG推奨。背景は透過にしておくと綺麗に馴染みます）
   2. 下の characters 配列に、そのファイル名を追加する
      例）"images/characters/mychara-03.png"
   3. あとは保存するだけで、自動的に抽選対象に増えます。
   ========================================================= */

const characters = [
  "images/characters/placeholder-01.svg",
  "images/characters/placeholder-02.svg",
  // "images/characters/mychara-03.png",
];

function showRandomCharacter() {
  const img = document.getElementById("character");
  if (!img || characters.length === 0) return;

  const index = Math.floor(Math.random() * characters.length);
  img.src = characters[index];
}

showRandomCharacter();
