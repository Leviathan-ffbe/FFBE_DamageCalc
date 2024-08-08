// JSON データ
var jsonData = [
  {
    "value": "素手",
    "text": "素手"
  },
  {
    "value": "短剣",
    "text": "短剣"
  },
  {
    "value": "TH短剣",
    "text": "短剣(両手武具)"
  },
  {
    "value": "剣",
    "text": "剣"
  },
  {
    "value": "TH剣",
    "text": "剣(両手武具)"
  },
  {
    "value": "大剣",
    "text": "大剣"
  },
  {
    "value": "TH大剣",
    "text": "大剣(両手武具)"
  },
  {
    "value": "刀",
    "text": "刀"
  },
  {
    "value": "TH刀",
    "text": "刀(両手武具)"
  },
  {
    "value": "杖",
    "text": "杖"
  },
  {
    "value": "TH杖",
    "text": "杖(両手武具)"
  },
  {
    "value": "ロッド",
    "text": "ﾛｯﾄﾞ"
  },
  {
    "value": "THロッド",
    "text": "ﾛｯﾄﾞ(両手武具)"
  },
  {
    "value": "弓",
    "text": "弓"
  },
  {
    "value": "斧",
    "text": "斧"
  },
  {
    "value": "TH斧",
    "text": "斧(両手武具)"
  },
  {
    "value": "ハンマー",
    "text": "ﾊﾝﾏｰ"
  },
  {
    "value": "THハンマー",
    "text": "ﾊﾝﾏｰ(両手武具)"
  },
  {
    "value": "槍",
    "text": "槍"
  },
  {
    "value": "TH槍",
    "text": "槍(両手武具)"
  },
  {
    "value": "THJMP",
    "text": "ｼﾞｬﾝﾌﾟ(両手武具)"
  },
  {
    "value": "楽器",
    "text": "楽器"
  },
  {
    "value": "TH楽器",
    "text": "楽器(両手武具)"
  },
  {
    "value": "鞭",
    "text": "鞭"
  },
  {
    "value": "TH鞭",
    "text": "鞭(両手武具)"
  },
  {
    "value": "投擲",
    "text": "投擲"
  },
  {
    "value": "TH投擲",
    "text": "投擲(両手武具)"
  },
  {
    "value": "銃",
    "text": "銃"
  },
  {
    "value": "TH銃",
    "text": "銃(両手武具)"
  },
  {
    "value": "メイス",
    "text": "ﾒｲｽ"
  },
  {
    "value": "THメイス",
    "text": "ﾒｲｽ(両手武具)"
  },
  {
    "value": "格闘",
    "text": "格闘"
  },
  {
    "value": "TH格闘",
    "text": "格闘(両手武具)"
  },
  {
    "value": "カリパー",
    "text": "ｴｸｽｶﾘﾊﾟｰ(FF5)"
  },
  {
    "value": "セイバー",
    "text": "ｿｳﾙｾｲﾊﾞｰ(FF6)"
  },
  {
    "value": "レッド",
    "text": "ﾚｯﾄﾞｿｰﾄﾞ(FF2)"
  },
  {
    "value": "咎人",
    "text": "咎人の剣"
  },
  {
    "value": "クアール",
    "text": "ｸｱｰﾙｳｨｯﾌﾟ"
  },
  {
    "value": "イカサマ",
    "text": "ｲｶｻﾏﾀﾞｲｽ"
  },
  {
    "value": "イカサマ+1汎用",
    "text": "ｲｶｻﾏ+1(汎用)"
  },
  {
    "value": "イカサマ+1専用",
    "text": "ｲｶｻﾏ+1(ｾｯﾂｧｰ)"
  },
  {
    "value": "ザイル",
    "text": "ｻﾞｲﾙｷｬﾉﾝ"
  }
  
];
// セレクト要素を取得
var selectElement1 = document.getElementById("WEP1");
var selectElement2 = document.getElementById("WEP2");
var selectElement3 = document.getElementById("WEP3");
var selectElement4 = document.getElementById("WEP4");
var selectElement5 = document.getElementById("WEP5");
var selectElement6 = document.getElementById("WEP6");

// オプションを作成してセットする関数
function setOptions(selectElement) {
  jsonData.forEach(function(optionData) {
    var option = document.createElement("option");
    option.value = optionData.value;
    option.text = optionData.text;
    selectElement.appendChild(option);
  });
}

// クリックイベントのハンドラ関数
function handleClick(elementId) {
  var selectElement = document.getElementById(elementId);
  var selectedValue = selectElement.value;
  console.log("選択された値: " + selectedValue);
}

// ページ読み込み時にオプションをセット
window.addEventListener("DOMContentLoaded", function() {
  setOptions(selectElement1);
  setOptions(selectElement2);
  setOptions(selectElement3);
  setOptions(selectElement4);
  setOptions(selectElement5);
  setOptions(selectElement6);
});

// クリックイベントを設定
selectElement1.addEventListener("click", function() {
  handleClick("WEP1");
});
selectElement2.addEventListener("click", function() {
  handleClick("WEP2");
});
selectElement3.addEventListener("click", function() {
  handleClick("WEP3");
});
selectElement4.addEventListener("click", function() {
  handleClick("WEP4");
});
selectElement5.addEventListener("click", function() {
  handleClick("WEP5");
});
selectElement6.addEventListener("click", function() {
  handleClick("WEP6");
});

