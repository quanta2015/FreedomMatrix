export const DATE_FORMAT  = 'YYYY/MM/DD'
export const MONTH_FORMAT = 'YYYY/MM'


export const MAIN_MENU = [{ title:'案件検索', icon:'search',  path:'/projquery', type: 0 },{
                            title:'案件登録', icon:'laptop',  path:'/projadd',   type: 2 },{
                            title:'会員HOME', icon:'user',    path:'/homeuser',  type: 1 },{
                            title:'会社HOME', icon:'user',    path:'/homecomp',  type: 2 },{
                            title:'お問い合わせ', icon:'question-circle', path:'/question', type: 0 },{
                            title: 'その他', icon:'user', type: 0, submenu:  
                              [{ title:'運営企業', icon:'profile', path:'/management', type: 0 },
                               { title:'利用規約', icon:'profile', path:'/rule', type: 0 },
                               { title:'プライバシーポリシー', icon:'profile', path:'/privacy', type: 0 },
                               { title:'お役たち情報', icon:'profile', path:'/news', type: 0 }]
                          }]

export const personType = [{ val:"0", txt:'フリーランス' }, { val:"1", txt:'副業' }]

export const projTarget = [{ val:"0", txt:'フリーランス' }, { val:"1", txt:'協力パートナー' },{ val:"2", txt:'副業' }]

export const workareaList = [{val:"0",txt:'23区'    },
                             {val:"1",txt:'都内その他'}, 
                             {val:"2",txt:'横浜市'   },
                             {val:"3",txt:'川崎市'   },
                             {val:"4",txt:'神奈川県' },
                             {val:"5",txt:'千葉県'   }]

export const worktimeList = [{txt: '1ヶ月',val:'0'},
                             {txt: '3ヶ月',val:'1'},
                             {txt: '6ヶ月',val:'2'},
                             {txt: '1年' ,val:'3'},
                             {txt: '長期',val:'4'}]

export const worktypeList = [{txt: '常駐',      val:'0'},
                             {txt: '週1',       val:'1'},
                             {txt: '週2',       val:'2'},
                             {txt: '週3',       val:'3'},
                             {txt: '週4',       val:'4'},
                             {txt: '完全リモート', val:'5'}]

export const worklangList = [{txt: 'Java      ',val:'0'},
                             {txt: 'ASP       ',val:'1'},
                             {txt: 'PHP       ',val:'2'},
                             {txt: 'Perl      ',val:'3'},
                             {txt: 'Struts    ',val:'4'},
                             {txt: 'HTML      ',val:'5'},
                             {txt: 'JavaScript',val:'6'},
                             {txt: '.NET      ',val:'7'},
                             {txt: 'XML       ',val:'8'},
                             {txt: 'VB        ',val:'9'},
                             {txt: 'Script    ',val:'10'},
                             {txt: 'その他     ',val:'11'}]

export const workroleList = [{txt: 'システムエンジニア',  val:'0'},
                             {txt: 'プログラマ',        val:'1'},
                             {txt: 'Webエンジニア',     val:'2'},
                             {txt: 'ネットワークエンジニア',val:'3'},
                             {txt: '運用保守',        val:'4'},
                             {txt: 'データベースエンジニア',val:'5'},
                             {txt: 'PM/PL/コンサル',    val:'6'},
                             {txt: '評価・テスト',       val:'7'},
                             {txt: 'ヘルプデスク' ,      val:'8'},
                             {txt: 'SE支援その他',     val:'9'},]

export const workprojList = [{txt: '保険',val:'0'},
                             {txt: '流通',val:'1'},
                             {txt: '金融',val:'2'},
                             {txt: '証券',val:'3'},
                             {txt: '製造',val:'4'},
                             {txt: '運輸',val:'5'},
                             {txt: '通信',val:'6'},
                             {txt: '官公',val:'7'},
                             {txt: '教育',val:'8'},
                             {txt: '医療',val:'9'},
                             {txt: '情報',val:'10'},
                             {txt: 'その他',val:'11'}]

export const projdomnList = [{txt: '自動車（部品）', val:'0'},
                             {txt: '製造・機械', val:'1'},
                             {txt: '運輸', val:'2'},
                             {txt: '通信', val:'3'},
                             {txt: '金融・保険', val:'4'},
                             {txt: '飲食・小売', val:'5'},
                             {txt: '製薬', val:'6'},
                             {txt: 'ＥＣ・ポータル', val:'7'},
                             {txt: '電力・ガス・その他インフラ',val:'8'},
                             {txt: 'サービス', val:'9'},
                             {txt: '不動産', val:'10'},
                             {txt: '食品・飲料', val:'11'},
                             {txt: '農林水産', val:'12'},
                             {txt: 'その他', val:'13'}]

export const projprefList = [{txt: '新着',                 val:'0'},
                             {txt: '長期稼働',              val:'1'},
                             {txt: '高単価',               val:'2'},
                             {txt: 'スタートアップ',         val:'3'},
                             {txt: '最新技術',              val:'4'},
                             {txt: '大規模',               val:'5'},
                             {txt: '小規模',               val:'6'},
                             {txt: 'BtoBサービス/プロダクト',val:'7'},
                             {txt: 'BtoCサービス/プロダクト',val:'8'},
                             {txt: '駅チカ',               val:'9'},
                             {txt: 'オフィス綺麗',          val:'10'},
                             {txt: '女性に人気',            val:'11'},
                             {txt: '外国人歓迎',            val:'12'},
                             {txt: 'ベテラン歓迎',           val:'13'},
                             {txt: '若手歓迎',              val:'14'},
                             {txt: '常駐',                  val:'15'},
                             {txt: '半常駐可',               val:'16'},
                             {txt: 'リモート可',             val:'17'},
                             {txt: '残業なし',              val:'18'}]

export const projrespList = [{txt: '計画調査',  val:'0'},
                             {txt: '要件定義',  val:'1'},
                             {txt: '基本設計',  val:'2'},
                             {txt: '詳細設計', val:'3'},
                             {txt: '実装/構築',val:'4'},
                             {txt: 'テスト',   val:'5'},
                             {txt: '運営保守', val:'6'},
                             {txt: 'その他',   val:'7'}]
                             


export const APPLY_STATUS = [{txt: '应募済み',  val:0},
                             {txt: '辞退',  val:1},
                             {txt: '成約',  val:2},
                             {txt: '見送り', val:3}]

export const PROJ_STATUS  = [{txt:  '应募中', val:0},
                             {txt:  '未发布', val:1},
                             {txt:  '结束'  , val:2}]