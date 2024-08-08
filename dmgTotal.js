
      function culc_dmg(get_no) { //┌────────←代入される←────────┐
        dmg = 0.0;
        lva = 0.0;
        form_o = document.forms.form1
        if (get_no == 2){
          form_o = document.forms.form2
        }
        if (get_no == 3){
          form_o = document.forms.form3
        }
        if (get_no == 4){
          form_o = document.forms.form4
        }
        if (get_no == 5){
          form_o = document.forms.form5
        }
        if (get_no == 6){
          form_o = document.forms.form6
        }
        
        lva = 1 + eval(form_o.elements.LV.value)/100;
        dmg = form_o.elements.ATK.value * form_o.elements.ATK.value;
    
        tdf = form_o.elements.Buff.value - form_o.elements.Break.value;
        tdf = -1 * tdf;
        def = form_o.elements.Defp.value * (100 - tdf) / 100;
    
        var def = Math.floor(def);
    
        def = def * ((1 - eval(form_o.elements.Wdp.value)/100))
        dmg = dmg / def
        wst = form_o.elements.Wst.value / 100
        wst = wst * (1 + form_o.elements.LBup.value / 100)
        wst = wst * (1 - 0.01*form_o.elements.Wre.value);
        wst = wst * (1 + form_o.elements.EoP.value / 100);
        wst = wst * (1 + form_o.elements.EoB.value / 100);
        dmg = dmg * lva * wst;
    
        dmg1 = dmg * 0.85;
        dmgM = dmg * 0.925;
        dmg2 = dmg * 1.00;
    
        if (form_o.elements.WEP.value == "短剣") {
          dmg1 = dmg1 * 1.10;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.20;
        }
        if (form_o.elements.WEP.value == "TH短剣") {
          dmg1 = dmg1 * 1.45;
          dmgM = dmgM * 1.55;
          dmg2 = dmg2 * 1.65;
        }
        if (form_o.elements.WEP.value == "剣") {
          dmg1 = dmg1 * 1.05;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.25;
        }
        if (form_o.elements.WEP.value == "カリパー") {
          dmg1 = dmg1 * 1.00;
          dmgM = dmgM * 1.25;
          dmg2 = dmg2 * 1.50;
        }
        if (form_o.elements.WEP.value == "TH剣") {
          dmg1 = dmg1 * 1.25;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.75;
        }
        if (form_o.elements.WEP.value == "セイバー") {
          dmg1 = dmg1 * 1.30;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.70;
        }
        if (form_o.elements.WEP.value == "レッド") {
          dmg1 = dmg1 * 1.30;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.70;
        }
        if (form_o.elements.WEP.value == "咎人") {
          dmg1 = dmg1 * 0.01;
          dmgM = dmgM * 0.555;
          dmg2 = dmg2 * 1.10;
        }
        if (form_o.elements.WEP.value == "大剣") {
          dmg1 = dmg1 * 1.00;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.30;
        }
        if (form_o.elements.WEP.value == "TH大剣") {
          dmg1 = dmg1 * 1.25;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.75;
        }
      　if (form_o.elements.WEP.value == "ダークアポカリプス") {
          dmg1 = dmg1 * 1.50;
          dmgM = dmgM * 1.75;
          dmg2 = dmg2 * 2.00;
        }
        if (form_o.elements.WEP.value == "刀") {
          dmg1 = dmg1 * 1.05;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.25;
        }
        if (form_o.elements.WEP.value == "TH刀") {
          dmg1 = dmg1 * 1.25;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.75;
        }
        if (form_o.elements.WEP.value == "杖") {
          dmg1 = dmg1 * 1.10;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.20;
        }
        if (form_o.elements.WEP.value == "TH杖") {
          dmg1 = dmg1 * 1.25;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.75;
        }
        if (form_o.elements.WEP.value == "ロッド") {
          dmg1 = dmg1 * 1.10;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.20;
        }
        if (form_o.elements.WEP.value == "THロッド") {
          dmg1 = dmg1 * 1.25;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.75;
        }
        if (form_o.elements.WEP.value == "弓") {
          dmg1 = dmg1 * 1.35;
          dmgM = dmgM * 1.60;
          dmg2 = dmg2 * 1.85;
        }
        if (form_o.elements.WEP.value == "斧") {
          dmg1 = dmg1 * 0.85;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.45;
        }
        if (form_o.elements.WEP.value == "TH斧") {
          dmg1 = dmg1 * 1.15;
          dmgM = dmgM * 1.55;
          dmg2 = dmg2 * 1.95;
        }
        if (form_o.elements.WEP.value == "ハンマー") {
          dmg1 = dmg1 * 0.95;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.35;
        }
        if (form_o.elements.WEP.value == "THハンマー") {
          dmg1 = dmg1 * 1.15;
          dmgM = dmgM * 1.55;
          dmg2 = dmg2 * 1.95;
        }
        if (form_o.elements.WEP.value == "槍") {
          dmg1 = dmg1 * 1.00;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.30;
        }
        if (form_o.elements.WEP.value == "TH槍") {
          dmg1 = dmg1 * 1.25;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.75;
        }
        if (form_o.elements.WEP.value == "THJMP") {
          dmg1 = dmg1 * 2.50;
          dmgM = dmgM * 2.65;
          dmg2 = dmg2 * 2.80;
        }
        if (form_o.elements.WEP.value == "楽器") {
          dmg1 = dmg1 * 1.05;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.25;
        }
        if (form_o.elements.WEP.value == "TH楽器") {
          dmg1 = dmg1 * 1.35;
          dmgM = dmgM * 1.55;
          dmg2 = dmg2 * 1.75;
        }
        if (form_o.elements.WEP.value == "鞭") {
          dmg1 = dmg1 * 1.05;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.25;
        }
        if (form_o.elements.WEP.value == "TH鞭") {
          dmg1 = dmg1 * 1.30;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.70;
        }
        if (form_o.elements.WEP.value == "クアール") {
          dmg1 = dmg1 * 1.05;
          dmgM = dmgM * 1.30;
          dmg2 = dmg2 * 1.55;
        }
        if (form_o.elements.WEP.value == "投擲") {
          dmg1 = dmg1 * 1.05;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.25;
        }
        if (form_o.elements.WEP.value == "TH投擲") {
          dmg1 = dmg1 * 1.30;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.70;
        }
        if (form_o.elements.WEP.value == "イカサマ") {
          dmg1 = dmg1 * 0.30;
          dmgM = dmgM * 1.10;
          dmg2 = dmg2 * 1.90;
        }
        if (form_o.elements.WEP.value == "イカサマ+1汎用") {
          dmg1 = dmg1 * 0.60;
          dmgM = dmgM * 1.35;
          dmg2 = dmg2 * 2.10;
        }
        if (form_o.elements.WEP.value == "イカサマ+1専用") {
          dmg1 = dmg1 * 1.20;
          dmgM = dmgM * 3.40;
          dmg2 = dmg2 * 5.60;
        }
        if (form_o.elements.WEP.value == "銃") {
          dmg1 = dmg1 * 1.10;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.20;
        }
        if (form_o.elements.WEP.value == "TH銃") {
          dmg1 = dmg1 * 1.35;
          dmgM = dmgM * 1.55;
          dmg2 = dmg2 * 1.75;
        }
        if (form_o.elements.WEP.value == "ザイル") {
          dmg1 = dmg1 * 0.30;
          dmgM = dmgM * 1.00;
          dmg2 = dmg2 * 1.70;
        }
        if (form_o.elements.WEP.value == "メイス") {
          dmg1 = dmg1 * 1.10;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.20;
        }
        if (form_o.elements.WEP.value == "THメイス") {
          dmg1 = dmg1 * 1.40;
          dmgM = dmgM * 1.50;
          dmg2 = dmg2 * 1.60;
        }
        if (form_o.elements.WEP.value == "格闘") {
          dmg1 = dmg1 * 1.15;
          dmgM = dmgM * 1.15;
          dmg2 = dmg2 * 1.15;
        }
        if (form_o.elements.WEP.value == "TH格闘") {
          dmg1 = dmg1 * 1.45;
          dmgM = dmgM * 1.55;
          dmg2 = dmg2 * 1.65;
        }
        if (form_o.elements.WEP.value == "素手") {
          dmg1 = dmg1 * 1.00;
          dmgM = dmgM * 1.00;
          dmg2 = dmg2 * 1.00;
        }
    
        var dmg1 = Math.floor(dmg1);
        var dmgM = Math.floor(dmgM);
        var dmg2 = Math.floor(dmg2);
    
        dmg1 = dmg1 * (1 - 0.01*form_o.elements.Ele.value);
        dmg1 = dmg1 * (1 + 0.01*form_o.elements.Killer.value);
                    dmg1 = dmg1 * (1 + 0.01*form_o.elements.Jmp.value);
        dmg1 = dmg1 * (1 + 0.01*form_o.elements.EST.value);
    
        dmgM = dmgM * (1 - 0.01*form_o.elements.Ele.value);
        dmgM = dmgM * (1 + 0.01*form_o.elements.Killer.value);
                    dmgM = dmgM * (1 + 0.01*form_o.elements.Jmp.value);
        dmgM = dmgM * (1 + 0.01*form_o.elements.EST.value);
    
        dmg2 = dmg2 * (1 - 0.01*form_o.elements.Ele.value);
        dmg2 = dmg2 * (1 + 0.01*form_o.elements.Killer.value);
                    dmg2 = dmg2 * (1 + 0.01*form_o.elements.Jmp.value);
        dmg2 = dmg2 * (1 + 0.01*form_o.elements.EST.value);
    
    
        if (form_o.elements.Wdp.value >= 1) {
        var dmg1 = Math.round(dmg1 - 0.4);
        }
    
        if (form_o.elements.Wdp.value >= 1) {
        var dmgM = Math.round(dmgM - 0.4);
        }
    
        if (form_o.elements.Wdp.value >= 1) {
        var dmg2 = Math.round(dmg2 - 0.4);
        }
    
        var dmg1 = Math.floor(dmg1);
        var dmgM = Math.floor(dmgM);
        var dmg2 = Math.floor(dmg2);
    
        dmg1 = dmg1 * (1 + 0.01*form_o.elements.EDM.value);
        dmgM = dmgM * (1 + 0.01*form_o.elements.EDM.value);
        dmg2 = dmg2 * (1 + 0.01*form_o.elements.EDM.value);
    
        var dmg1 = Math.floor(dmg1);
        var dmgM = Math.floor(dmgM);
        var dmg2 = Math.floor(dmg2);
    
        form_o.elements.Dmg1.value = dmg1.toFixed(0);
        form_o.elements.DmgM.value = dmgM.toFixed(0);
        form_o.elements.Dmg2.value = dmg2.toFixed(0);
    
        dmgL = 0.0;
        dmgE = 0.0;
        dmgH = 0.0;
        
        if (document.forms.form1.elements.Dmg1.value != "")
          dmgL = dmgL + eval(document.forms.form1.elements.Dmg1.value);
        if (document.forms.form2.elements.Dmg1.value != "")
          dmgL = dmgL + eval(document.forms.form2.elements.Dmg1.value);
        if (document.forms.form3.elements.Dmg1.value != "")
          dmgL = dmgL + eval(document.forms.form3.elements.Dmg1.value);
        if (document.forms.form4.elements.Dmg1.value != "")
          dmgL = dmgL + eval(document.forms.form4.elements.Dmg1.value);
        if (document.forms.form5.elements.Dmg1.value != "")
          dmgL = dmgL + eval(document.forms.form5.elements.Dmg1.value);
        if (document.forms.form6.elements.Dmg1.value != "")
          dmgL = dmgL + eval(document.forms.form6.elements.Dmg1.value);
    
        if (document.forms.form1.elements.DmgM.value != "")
          dmgE = dmgE + eval(document.forms.form1.elements.DmgM.value);
        if (document.forms.form2.elements.DmgM.value != "")
          dmgE = dmgE + eval(document.forms.form2.elements.DmgM.value);
        if (document.forms.form3.elements.DmgM.value != "")
          dmgE = dmgE + eval(document.forms.form3.elements.DmgM.value);
        if (document.forms.form4.elements.DmgM.value != "")
          dmgE = dmgE + eval(document.forms.form4.elements.DmgM.value);
        if (document.forms.form5.elements.DmgM.value != "")
          dmgE = dmgE + eval(document.forms.form5.elements.DmgM.value);
        if (document.forms.form6.elements.DmgM.value != "")
          dmgE = dmgE + eval(document.forms.form6.elements.DmgM.value);
        
        if (document.forms.form1.elements.Dmg2.value != "")
          dmgH = dmgH + eval(document.forms.form1.elements.Dmg2.value);
        if (document.forms.form2.elements.Dmg2.value != "")
          dmgH = dmgH + eval(document.forms.form2.elements.Dmg2.value);
        if (document.forms.form3.elements.Dmg2.value != "")
          dmgH = dmgH + eval(document.forms.form3.elements.Dmg2.value);
        if (document.forms.form4.elements.Dmg2.value != "")
          dmgH = dmgH + eval(document.forms.form4.elements.Dmg2.value);
        if (document.forms.form5.elements.Dmg2.value != "")
          dmgH = dmgH + eval(document.forms.form5.elements.Dmg2.value);
        if (document.forms.form6.elements.Dmg2.value != "")
          dmgH = dmgH + eval(document.forms.form6.elements.Dmg2.value);
        
        document.forms.formS.elements.DmgL.value = dmgL.toFixed(2);
        document.forms.formS.elements.DmgE.value = dmgM.toFixed(2);
        document.forms.formS.elements.DmgH.value = dmgH.toFixed(2);
    
      }
      // 数値のみを入力可能にする
      function key_down(get_code,get_no){
       if ( get_code == 13 ) 
        culc_dmg(get_no);
         return true;
        }
        
      function culc_defp() {
          var elements = document.forms.form7.elements;
          var defp = 0.0;
          var lva = 0.0;

          lva = 1 + parseFloat(elements.LV.value) / 100;
          pow = elements.ATK.value * elements.ATK.value;
          pow *= lva;
          dmg = elements.Dmg.value;

          switch (elements.WEP.value) {
              case "素手":
                  dmg /= 1.0;
                  break;
              case "格闘":
                  dmg /= 1.15;
                  break;
          }

          pow *= 0.925;
          pow *= 1 + parseFloat(elements.Killer.value) / 100;
          pow *= parseFloat(elements.Wst.value) / 100;
          wdp = 1 - parseFloat(elements.Wdp.value) / 100;
          pow *= wdp;
          pow *= 1 + parseFloat(elements.LBup.value) / 100;
          pow *= 1 + parseFloat(elements.EoP.value) / 100;
          pow *= 1 + parseFloat(elements.EoB.value) / 100;
          pow *= 1 + parseFloat(elements.EST.value) / 100;
          pow *= 1 + parseFloat(elements.EDM.value) / 100;
          pow *= 1 - parseFloat(elements.Ele.value) / 100;
          brk = parseFloat(elements.Break.value) - parseFloat(elements.Buff.value);
          brk = 1 - brk / 100;
          brk = 1 / brk;
          pow *= brk;

          defp = pow / dmg;
          elements.Defp.value = defp.toFixed(2);
      }

      // 数値のみを入力可能にする
      function key_down2(get_code){
       if ( get_code == 13 )
        culc_defp();
         return true;
        }
    
function culc_INbuff() {
    var elements = document.forms.form8.elements;
    var DbuffDmg = parseFloat(elements.DbuffDmg.value);
    var NormalDmg = parseFloat(elements.NormalDmg.value);
    var DbuffPer = parseFloat(elements.DbuffPer.value);
    var INbuffA = DbuffDmg - NormalDmg;
    var INbuffB = DbuffPer / 100;
    var INbuffC = DbuffDmg * INbuffB;
    var INbuffD = INbuffC / INbuffA;
    var INbuff = (INbuffD - 1) * 100;

    var result = 0;

    if (INbuff < 1) {
        result = 0;
    } else if (1 <= INbuff && INbuff < 8) {
        result = 5;
    } else if (8 <= INbuff && INbuff < 13) {
        result = 10;
    } else if (13 <= INbuff && INbuff < 18) {
        result = 15;
    } else if (18 <= INbuff && INbuff < 23) {
        result = 20;
    } else if (23 <= INbuff && INbuff < 28) {
        result = 25;
    } else if (28 <= INbuff && INbuff < 33) {
        result = 30;
    } else if (33 <= INbuff && INbuff < 38) {
        result = 35;
    } else if (38 <= INbuff && INbuff < 43) {
        result = 40;
    } else if (43 <= INbuff && INbuff < 48) {
        result = 45;
    } else if (48 <= INbuff && INbuff < 53) {
        result = 50;
    } else if (53 <= INbuff && INbuff < 58) {
        result = 55;
    } else if (58 <= INbuff && INbuff < 63) {
        result = 60;
    } else if (63 <= INbuff && INbuff < 68) {
        result = 65;
    } else if (68 <= INbuff && INbuff < 73) {
        result = 70;
    } else if (73 <= INbuff && INbuff < 78) {
        result = 75;
    } else if (78 <= INbuff && INbuff < 83) {
        result = 80;
    } else if (83 <= INbuff && INbuff < 88) {
        result = 85;
    } else if (88 <= INbuff && INbuff < 93) {
        result = 90;
    } else if (93 <= INbuff && INbuff < 98) {
        result = 95;
    } else if (98 <= INbuff && INbuff < 103) {
        result = 100;
    }

    elements.INbuff.value = result.toFixed(2);
}

      // 数値のみを入力可能にする
      function key_down2(get_code){
       if ( get_code == 13 )
        culc_INbuff();
         return true;
        }
      // 各入力フォームリセット
      function formReset() {
        document.form.reset();
      }


// プログラムで利用する変数を定義して中身は空にしておく
var resultDmg1 = "";
var resultDmg2 = "";
var resultDmgM = "";

// ダメージトータルを計算する関数
function calculateTotal() {
// 変数を定義して０を代入する
  var totalDmg1 = 0;
  var totalDmg2 = 0;
  var totalDmgM = 0;

// 変数を定義してHTML内にあるDmg1のボックスから値をボックス分取得して足していき文字列を数字に変換しtotalDmg1に代入する
  var dmg1Elements = document.getElementsByName("Dmg1");
  for (var i = 0; i < dmg1Elements.length; i++) {
    var value = parseInt(dmg1Elements[i].value);
    if (!isNaN(value)) {
      totalDmg1 += value;
    }
  }
// 変数を定義してHTML内にあるDmg2のボックスから値をボックス分取得して足していき文字列を数字に変換しtotalDmg2に代入する
  var dmg2Elements = document.getElementsByName("Dmg2");
  for (var i = 0; i < dmg2Elements.length; i++) {
    var value = parseInt(dmg2Elements[i].value);
    if (!isNaN(value)) {
      totalDmg2 += value;
    }
  }
// 変数を定義してHTML内にあるDmgMのボックスから値をボックス分取得して足していき文字列を数字に変換しtotalDmgMに代入する
  var dmgMElements = document.getElementsByName("DmgM");
  for (var i = 0; i < dmgMElements.length; i++) {
    var value = parseInt(dmgMElements[i].value);
    if (!isNaN(value)) {
      totalDmgM += value;
    }
  }

// 代入された数字を関数(１)を読み込み処理を行ったあとにresultDmg(結果用の数字)に代入
  resultDmg1 = formatNumber(totalDmg1);
  resultDmg2 = formatNumber(totalDmg2);
  resultDmgM = formatNumber(totalDmgM);

// HTMLの表示項目に出力表示を行う
  document.getElementById("resultDmg1").value = resultDmg1;
  document.getElementById("resultDmg2").value = resultDmg2;
  document.getElementById("resultDmgM").value = resultDmgM;
}

// カンマをフォーマットされた数字に追加する　1234→1,234　となるこの関数は(１)で呼び出されて使用される
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 表示している数値を取得して空を代入して数字リセットする
function resetValues() {
  document.getElementById("resultDmg1").value = "";
  document.getElementById("resultDmg2").value = "";
  document.getElementById("resultDmgM").value = "";

// Dmg1の要素を繰り返し取得(今回の場合は6回)する
  var dmg1Elements = document.getElementsByName("Dmg1");
  for (var i = 0; i < dmg1Elements.length; i++) {
    dmg1Elements[i].value = "";
  }

  var dmg2Elements = document.getElementsByName("Dmg2");
  for (var i = 0; i < dmg2Elements.length; i++) {
    dmg2Elements[i].value = "";
  }

  var dmgMElements = document.getElementsByName("DmgM");
  for (var i = 0; i < dmgMElements.length; i++) {
    dmgMElements[i].value = "";
  }
}

// 入力フォームの隣にヒントを表示するための処理です。指定した入力要素の隣にある要素（兄弟要素）に対して、指定したヒントの内容を設定する。
function showHint(input, hint) {
  var tooltip = input.nextElementSibling;
  tooltip.innerHTML = hint;
}

// 表示するヒントの幅を入力フォームと同じに調整するための処理です。指定した入力要素の幅を取得し、それをツールチップの幅として設定する。
function adjustTooltipWidth(input, tooltip) {
  const inputWidth = input.offsetWidth;
  tooltip.style.width = `${inputWidth}px`;
}

// マウスの位置にツールチップを表示するための処理です。マウスの座標を取得し、それを使用してツールチップの位置を設定する。
function showTooltip(event, tooltip) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  tooltip.style.top = `${mouseY}px`;
  tooltip.style.left = `${mouseX}px`;
}

//　ページが読み込まれた時に実行される処理
window.onload = function() {

// テキスト入力要素を取得します
  var inputs = document.querySelectorAll('input[type="text"]');

// 各テキスト入力要素に対して処理を実行します
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

// ツールチップ要素を作成し、入力要素の親要素に追加します
    var tooltip = document.createElement('span');
    tooltip.classList.add('tooltiptext');
    input.parentNode.appendChild(tooltip);

// マウスが入力要素上に乗った時の表示する処理
    input.addEventListener('mouseenter', function(event) {
      showTooltip(event, tooltip);
    });
// マウスが入力要素から離れた時に非表示する処理
    input.addEventListener('mouseleave', function() {
      tooltip.style.display = 'none';
    });
  }
};
