# database design

### 1. account
```sql
CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL COMMENT 'メールアドレス',
  `pwd` varchar(50) NOT NULL COMMENT 'パスワード',
  `name_cn` varchar(20) NOT NULL COMMENT '氏名（漢字）',
  `name_jp` varchar(20) NOT NULL COMMENT '氏名（フリガナ）',
  `birth` varchar(20) NOT NULL COMMENT '生まれた年',
  `area` int(11) NOT NULL COMMENT '居住地域',
  `phone` varchar(20) NOT NULL COMMENT '電話番号',
  `type` int(11) NOT NULL COMMENT 'カテゴリー',
  `work_area` int(255) NOT NULL COMMENT '勤務希望エリア',
  `work_mony` int(11) NOT NULL COMMENT '希望月額報酬',
  `work_time` int(11) NOT NULL COMMENT '希望稼働時期',
  `work_type` int(11) NOT NULL COMMENT '希望働き方',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```


### 2. exp
```sql
CREATE TABLE `exp` (
  `id` int(11) NOT NULL,
  `date_from` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'プロジェクト開始日',
  `date_to` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'プロジェクト終了日',
  `work_role` varchar(50) DEFAULT NULL,
  `work_detl` varchar(255) DEFAULT NULL COMMENT 'プロジェクトの詳細作業内容',
  `skl_main` varchar(255) DEFAULT NULL COMMENT 'メインスキル',
  `skl_secd` varchar(255) DEFAULT NULL COMMENT 'サブスキル',
  `exp_lang` varchar(255) DEFAULT NULL COMMENT '経験言語',
  `exp_catg` varchar(255) DEFAULT NULL COMMENT '経験職種',
  `exp_proj` varchar(255) DEFAULT NULL COMMENT '経験工程',
  `exp_year` varchar(255) DEFAULT NULL COMMENT '経験年数',
  `exp_detl` varchar(255) DEFAULT NULL COMMENT '经验详情',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```


