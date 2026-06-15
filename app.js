const officialTopicText = `
名前をつける
こんなバイトをしてました
最近ゲットしたもの
自分で作った◯◯
ローカルめし
夏休みの宿題
最近捨てたもの
ラーメン
最近見つけたかわいいもの
買ってよかった2024
生活の知恵
好きなパン
最高のキャンプ
納豆
お米買えた？
私の〇〇ランキング
外でしたいこと
あんこ
卒業したいもの
習慣にしたいこと・していること
一生モノ
餅
急に寒いやん
パイナップル
最近壊した・壊れたもの
これって私の地元だけですか
ベストアイス2023
自由研究
上半期ベスト◯◯
最近買った便利なもの
朝ごはん
わたしのプレイリスト
読みたい本
好きなグミ
レイングッズ
メモ
打ちたいもの・投げたいもの
お花見
あまい
行きたい国・行った国
手づくり
わたしの2022年・2023年にやりたいこと
マメ
試験の思い出
あったかくなったら
日記の書き方
ビフォーアフター
買ってよかった2022
人生変わった瞬間
防寒
おすすめブログ紹介
二軍のTシャツ
SFといえば
最近あった3つのいいこと
マイベスト家電
人生で一番高い買い物
ホーム画面
好きな街
自分に贈りたいもの
最近あったちょっといいこと
忘れたいこと
あったか～い
お気に入りの靴下
叫びたい！
肉
好きなお茶
サボる
好きなアイス
一気読みしたい漫画
100万あったら
新生活が捗る逸品
やる気が出ない
お弁当
下書き供養
告白します
雛祭り
チョコレート
この1年の変化
大人になったなと感じるとき
買って良かった2020
感謝したいこと
自分にご褒美
大好きなおやつ
読書感想文
夏うた
遠くへ行きたい
お父さん
カメラロールから1枚
激レア体験
わたしの部屋
卒業
ねこ
大切な人へ
2020年の抱負
2019年買ってよかったもの
いい肉
紅葉
○○の成長
好きな漫画
特大ゴールデンウィークSP
2019年の抱負
ちょうどいいお店
2017年一番良かった《映画・ドラマ・アニメ》
2018年の抱負
夏の《映画・ドラマ・アニメ》
髪型
2017年にやりたいこと
私のブログ・ネット大賞2016
はてなブロガーに5つの質問
防災の日
映画の夏
もしも100万円が手に入ったら
青春の一冊
印象に残っている新人
犬派？ 猫派？
給食
バレンタインデー
20歳
今の仕事を選んだ理由
マイベストエントリー
見に行って良かったもの
私の流行語大賞
読書の夏
夏の食事
ゾクッとした話
ゲーム大好き
雨の日が楽しくなる方法
私がアツくなる瞬間
ゴールデンウィーク2015
嬉しかった言葉
ふつうに良かった映画
調味料
今年の抱負
さむい
今だから言えること
おとな
地元のメリークリスマス
年内にやっておきたいこと
好きなブログ・おすすめのブログ
秋の新〇〇
我が家のご馳走
記憶に残る風景
運動会とスポーツの秋
憧れの人
秋の気配
書くこと
私のかばん
花火2014
海か？ 山か？
テストの思い出
2014年、夏の予定
アイドル
サッカー
雨の日の楽しみ
アイス
布団派？ ベッド派？
お母さん2014
ゴールデンウィーク2014
飲み物
好きなスニーカー
春の嵐
素敵な絵本
嘘
春になれば
花粉症対策
お引っ越し
あまいもの
ナイショにしていたこと
パン派？ ごはん派？
僕の住む街・私の地元
2014年プライベートでやりたいこと
私の年末年始
2013年に買って良かったもの
今年やっておきたいこと
鍋
秋の新番組
スポーツの秋
秋の味覚
秋の準備
2020年の私
姉妹・兄弟
2013年、夏の思い出
私の日本一
海
宿題
名前
夏に読みたい1冊
2013年、日本の夏
2013年、夏の予定
私のお父さん
私は〇〇が得意です
梅雨
スマホ使ってる？
こんな“ひみつ道具”がほしい！
私のお母さん
2013年のゴールデンウィーク
部活動
テレビドラマ
新生活
ねむい
ひな祭り
臨時収入が10万円！何をする？
バレンタインの思い出
最近あった良いこと
節分
寒い季節の楽しみ方
じゃがいも
`;

const originalTopicText = `
最近見た夢
スースーするもの
旅の計画
春に食べたいもの
新しい季節に始めたいこと
ケガの思い出
おやつ
新しく始めたこと
最近スッキリしたこと
雨の日の過ごし方
最近の小さな発見
わたしの作業机
続けていること
最近やめたこと
朝のルーティン
夜の楽しみ
持ち歩いているもの
今年のうちに試したいこと
好きな音
最近笑ったこと
気になる道具
帰り道の寄り道
家で育てているもの
思い出の文房具
一番使っているアプリ
また食べたいもの
誰かにすすめたい場所
最近うまくいったこと
最近うまくいかなかったこと
雨上がりにしたいこと
部屋の好きな場所
昔から変わらない好み
最近のごほうび
買わずにすませたもの
好きな匂い
忘れられない一日
いま学びたいこと
ちょっとした節約
次の休日にしたいこと
わたしの定番
季節の変わり目にすること
写真に残したいもの
最近のマイブーム
`;

const officialTopics = officialTopicText.trim().split(/\n+/).map((title) => ({ title, source: "official" }));
const originalTopics = originalTopicText.trim().split(/\n+/).map((title) => ({ title, source: "original" }));
const topics = [...officialTopics, ...originalTopics];

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spin-button");
const copyButton = document.getElementById("copy-button");
const reshuffleButton = document.getElementById("reshuffle-button");
const soundButton = document.getElementById("sound-button");
const result = document.getElementById("result");
const resultMeta = document.getElementById("result-meta");
const topicCount = document.getElementById("topic-count");

const palette = ["#e94f37", "#2b8c83", "#f6b83f", "#395b9d", "#8f5b9d", "#4d9f6f", "#d96c2c", "#2f7f9e"];
const volumeBoost = 2.5;
let reelTopics = [...topics];
let reelPosition = 0;
let currentTopic = null;
let spinning = false;
let soundEnabled = true;
let audioContext = null;

topicCount.textContent = String(topics.length);

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function beep(frequency, duration, gain = 0.06, type = "sine") {
  if (!soundEnabled) return;
  const audio = getAudioContext();
  const oscillator = audio.createOscillator();
  const volume = audio.createGain();
  const boostedGain = Math.min(gain * volumeBoost, 0.32);
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  volume.gain.setValueAtTime(0.0001, audio.currentTime);
  volume.gain.exponentialRampToValueAtTime(boostedGain, audio.currentTime + 0.01);
  volume.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
  oscillator.connect(volume).connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + duration + 0.02);
}

function wrapIndex(index) {
  return ((index % reelTopics.length) + reelTopics.length) % reelTopics.length;
}

function topicAtPosition(position) {
  return reelTopics[wrapIndex(Math.round(position))];
}

function fitText(text, maxWidth, baseSize) {
  let size = baseSize;
  ctx.font = `900 ${size}px Yu Gothic, Meiryo, sans-serif`;
  while (ctx.measureText(text).width > maxWidth && size > 20) {
    size -= 2;
    ctx.font = `900 ${size}px Yu Gothic, Meiryo, sans-serif`;
  }
  return size;
}

function drawSlot(position = reelPosition) {
  const { width, height } = canvas;
  const centerX = width / 2;
  const centerY = height / 2;
  const rowHeight = height / 7.2;
  const base = Math.round(position);
  const drift = position - base;

  ctx.clearRect(0, 0, width, height);

  const background = ctx.createLinearGradient(0, 0, 0, height);
  background.addColorStop(0, "#25313d");
  background.addColorStop(0.18, "#f7f0df");
  background.addColorStop(0.5, "#fffdf7");
  background.addColorStop(0.82, "#e5ebe5");
  background.addColorStop(1, "#18232d");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(centerX, centerY);
  for (let row = -5; row <= 5; row += 1) {
    const distance = row - drift;
    const y = distance * rowHeight;
    const depth = Math.min(Math.abs(distance) / 5, 1);
    const scale = 1 - depth * 0.34;
    const alpha = 1 - depth * 0.66;
    const topic = reelTopics[wrapIndex(base + row)];
    const cardWidth = width * (0.82 - depth * 0.22);
    const cardHeight = rowHeight * (0.78 - depth * 0.14);
    const x = -cardWidth / 2 + depth * 52;
    const radius = 8;

    ctx.save();
    ctx.translate(0, y);
    ctx.scale(scale, scale);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = row === 0 ? "#fffdf7" : palette[wrapIndex(base + row) % palette.length];
    ctx.strokeStyle = row === 0 ? "#e94f37" : "rgba(255, 255, 255, .72)";
    ctx.lineWidth = row === 0 ? 5 : 2;
    ctx.beginPath();
    ctx.roundRect(x, -cardHeight / 2, cardWidth, cardHeight, radius);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = row === 0 ? "#17202a" : "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const maxText = cardWidth - 44;
    const fontSize = fitText(topic.title, maxText, row === 0 ? 42 : 28);
    ctx.font = `900 ${fontSize}px Yu Gothic, Meiryo, sans-serif`;
    ctx.fillText(topic.title, 0, 0);
    ctx.restore();
  }
  ctx.restore();

  ctx.fillStyle = "rgba(233, 79, 55, .18)";
  ctx.fillRect(0, centerY - rowHeight * .45, width, rowHeight * .9);
  ctx.strokeStyle = "#e94f37";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();

  const shine = ctx.createLinearGradient(0, 0, width, 0);
  shine.addColorStop(0, "rgba(255, 255, 255, .08)");
  shine.addColorStop(0.5, "rgba(255, 255, 255, .34)");
  shine.addColorStop(1, "rgba(255, 255, 255, .06)");
  ctx.fillStyle = shine;
  ctx.fillRect(0, 0, width, height);
}

function shuffleTopics() {
  for (let i = reelTopics.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [reelTopics[i], reelTopics[j]] = [reelTopics[j], reelTopics[i]];
  }
  reelPosition = 0;
  drawSlot();
  setResult(topicAtPosition(reelPosition));
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function setResult(topic) {
  currentTopic = topic;
  result.textContent = topic.title;
  resultMeta.textContent = topic.source === "official"
    ? "公開アーカイブ由来のお題です。"
    : "250件にするために追加したブログ向けお題です。";
}

function spin() {
  if (spinning) return;
  spinning = true;
  spinButton.disabled = true;
  result.textContent = "抽選中...";
  resultMeta.textContent = "中央の赤いラインが指したお題で止まります。";

  const targetIndex = Math.floor(Math.random() * reelTopics.length);
  const start = reelPosition;
  const startWhole = Math.round(start);
  const loops = 3 + Math.floor(Math.random() * 3);
  const delta = wrapIndex(targetIndex - startWhole);
  const end = startWhole + loops * reelTopics.length + delta;
  const duration = 4200 + Math.random() * 900;
  const startedAt = performance.now();
  let lastTick = Math.round(start);

  beep(440, 0.12, 0.08, "triangle");

  function frame(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = easeOutCubic(progress);
    reelPosition = start + (end - start) * eased;
    drawSlot(reelPosition);

    const tick = Math.round(reelPosition);
    if (tick !== lastTick && progress < 0.96) {
      lastTick = tick;
      beep(700 + (tick % 8) * 25, 0.025, 0.035, "square");
    }

    if (progress < 1) {
      requestAnimationFrame(frame);
      return;
    }

    reelPosition = end % reelTopics.length;
    drawSlot(reelPosition);
    const selected = topicAtPosition(reelPosition);
    spinning = false;
    spinButton.disabled = false;
    setResult(selected);
    beep(523.25, 0.1, 0.08, "triangle");
    setTimeout(() => beep(659.25, 0.12, 0.08, "triangle"), 110);
    setTimeout(() => beep(783.99, 0.18, 0.08, "triangle"), 230);
  }

  requestAnimationFrame(frame);
}

spinButton.addEventListener("click", spin);

copyButton.addEventListener("click", async () => {
  if (!currentTopic) return;
  await navigator.clipboard.writeText(`今週のお題「${currentTopic.title}」`);
  resultMeta.textContent = "コピーしました。";
  beep(880, 0.08, 0.05, "sine");
});

reshuffleButton.addEventListener("click", () => {
  shuffleTopics();
  resultMeta.textContent = "候補を更新しました。中央の赤いラインが指しているお題です。";
  beep(392, 0.08, 0.05, "triangle");
});

soundButton.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundButton.textContent = soundEnabled ? "音 ON" : "音 OFF";
  soundButton.setAttribute("aria-pressed", String(soundEnabled));
  if (soundEnabled) beep(660, 0.08, 0.05, "sine");
});

shuffleTopics();
