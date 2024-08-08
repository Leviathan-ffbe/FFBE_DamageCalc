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
    "value": "ダークアポカリプス",
    "text": "ダークアポカリプス"
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

  var selectElement = document.getElementById('selectElement');

  for (var i = 0; i < jsonData.length; i++) {
    var option = document.createElement('option');
    option.value = jsonData[i].value;
    option.text = jsonData[i].text;
    selectElement.appendChild(option);
  }

