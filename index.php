<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="Cache-Control" content="no-cache">
  <link rel="stylesheet" href="style.css">
  <title>FFBEダメージ計算機</title>
  <script src="dmgTotal.js"></script>
</head>

<body>
  <h1>FFBEダメージ計算機
    <font color="red">
      <font size="4">※2021年9月10日以降ver※</font>
    </font>
  </h1>
  <h2>使い方(
    <a href="https://youtu.be/V-QWHz8x8dI">説明動画はこちら</a>)
    <font color="red">
      <font size="2">2022年7月7日更新</font>
    </font>
  </h2>
  <p>
    <font size="2">１．計算欄下にある注釈を参考の上、各パラメータを入力してください(
      <a href="http://nogameno.life.coocan.jp/ffbe_def_list.htm">強敵防御値一覧</a>)
      <br>２．半角数字で入力してください
      <br>３．各武器補正値については最下部をご覧ください
      <br>
    </font>
  </p>
  <h2>《ダメージ計算》
    <font color="red">
      <font size="4">　第10回ビジョンズワールド [超魔生物ハドラー:防御値3000000/精神値3000000]
        <font color="black">
          <font size="2">　※計測ミスの場合もありますので参考程度にご活用下さい※
            <br>
          </font>
        </font>
      </font>
    </font>
  </h2>
  <p></p>
  <table>
    <tr>
      <td style="text-align: center;">
        <span style="font-size: 12px;">LV</span>
      </td>
      <td style="text-align: center;">
        <span style="font-size: 12px;">武器種</span>
      </td>
      <!-- ここに他のテーブルヘッダーを追加してください -->

      <td></td>
      <td style="text-align: center;">
        <span style="font-size: 12px;">予想ダメージ(最小-期待値-最大)</span>
      </td>
    </tr>

    <?php for ($i = 1; $i <= 2; $i++) { ?>
    <tr>
      <form action="#" name="form<?php echo $i; ?>">
        <td>
          <input type="text" name="LV" value="120" onkeydown="return key_down(event.keyCode,1)" tabindex="<?php echo $i; ?>">
        </td>
        <td>
          <select name="WEP" onchange="changeWeapon(<?php echo $i; ?>)">
            <option value="1">オヴィドの幻剣</option>
            <option value="2">シルトの大斧</option>
            <!-- 他の武器オプションをここに追加してください -->
          </select>
        </td>
        <!-- 他のテーブルセルの入力欄をここに追加してください -->

        <td>
          <input type="button" value="計算" onclick="preDamage(<?php echo $i; ?>)" tabindex="<?php echo $i + 3; ?>">
          <input type="reset" value="リセット" onclick="reset_form(<?php echo $i; ?>)">
        </td>
        <td>
          <input type="text" name="dmg" size="12">
          <input type="text" name="dmgmin" size="6">
          <input type="text" name="dmgave" size="6">
          <input type="text" name="dmgmax" size="6">
        </td>
      </form>
    </tr>
    <?php } ?>

  </table>
</body>

</html>
