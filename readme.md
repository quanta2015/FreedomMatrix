本部   9900000025
店舗   9900000026
提携店 9900000027
PW:    a

ID: biz-kov
PW: Qwert12345
ID: ateam14
PW: teamA14@slh


【処置区分】 
プログラム修正 
【処置内容】 
F8のEnabled修正しました 
【理由】 
APバグ

【処置区分】 
詳細設計書とテスト仕様書を修正いたしました。
【処置内容】 
ない
【理由】 
APバグ


'ADD Str 2019/07/23 LIYANG
'入力値のチェックおよび次画面表示

'ADD End 2019/07/23 LIYANG


'DEL Str 2019/07/18 IYANG

'DEL End 2019/07/18 LIYANG




redmine:
http://172.22.8.11:8080/redmine/login
ID:yokota_yoshinori
PW:yokota_yoshinori

リモートデスクトップ接続:
ID:li_yang
PW:li_yang


■勤務表
\\universe\Project\NEXS\SLH\99_user\Biz
テスト進捗管理：SLH_SUN単体テスト_単体テスト進捗とバグ数

■詳細設計書（リモート1）
N:\SLH01\02_概要設計書\★最新設計書

■SVNソース更新（リモート2）
D:\ap_work\開発\共通チーム\sglsvn\VB\VB_Source\psCORE\HN\HN
テスト機能のフォルダー内　BC,BEC,SI、該当機能ファルダー　を　コピー

■本部システム：CM.PR9510(ログイン)、CM.PR9520(メニュー)、CM.PR9030、CM.PR9040、CM.PR9050(メニューサブ画面)
店舗システム：CM.PR9010(ログイン)、CM.PR9020(メニュー)、CM.PR9030、CM.PR9040、CM.PR9050(メニューサブ画面)



スプレッド設定"
画面共通
画面起動
画面終了
値検証
ボタン押下
明細(Spread)
ファンクションキー 功能键
個別入力チェック
設定処理
画面初期設定
明細初期設定
移動方向指定
移動方向切替
所属法人初期設定
明細部入力チェック
入力行チェック
店舗グループ重複チェック
店舗グループ存在チェック
明細内の取得処理
データ取得
データ更新
登録用従業員データ生成
登録用承認グループデータ生成










Me.sprMEISAI.SetActiveCellWithShowRow(iRow, Col.TENPG_CD)
Me.sprMEISAI.SetCellErrColor(iRow, Col.TENPG_CD)




If tmpTenpoCd = "" Then
    Me.ShowMessageBox("PCM00023")
    Me.txtTENPO_CD.SetError()
    Me.txtTENPO_CD.SelectAll()
    Me.txtTENPO_CD.Focus()
    Exit Sub
End If



Private Function GetCsvPath() As String
    Dim strRet As String = String.Empty


    Return strRet
End Function