/*
 Navicat Premium Data Transfer

 Source Server         : bizplus
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : 133.167.73.231 :3306
 Source Schema         : bizplus

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 12/08/2019 12:05:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Index',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'メールアドレス',
  `pwd` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'パスワード',
  `name_kj` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '氏名（漢字）',
  `name_kn` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '氏名（フリガナ）				',
  `birth` decimal(10, 0) NULL DEFAULT NULL COMMENT '生まれた年',
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '電話番号',
  `pers_type` int(11) NULL DEFAULT NULL COMMENT 'カテゴリー',
  `work_area` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '勤務希望エリア ',
  `work_mony` int(11) NULL DEFAULT NULL COMMENT '希望月額報酬',
  `work_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '希望稼働時期',
  `work_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '希望働き方',
  `name_comp` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '会社名',
  `name_dept` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部署',
  `usertype` int(11) NULL DEFAULT NULL COMMENT 'ユーザータイプ  0：エンジニア  1：会社',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 171 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES (67, 'liy@163.com', 'aaa', 'tomaaa', 'yang', 20190731, '12990121', 1, '3', 80, '2', '0|2|3', NULL, NULL, 0);
INSERT INTO `account` VALUES (159, 'kkk@163.com', 'aaa', 'liyangtom', 'tom', 20190822, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (160, 'bbb@163.com', 'aaa', 'liyangtom', 'tom', 20190814, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (161, 'vgg@163.com', 'aaa', 'liyangtom', 'tom', 20190808, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (162, 'ttt@163.com', 'aaa', 'liyangtom', 'tom', 20190808, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (163, 'fffwe@163.com', 'aaa', 'liyangtom', 'tom', 20190801, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, NULL);
INSERT INTO `account` VALUES (164, 'aqs@163.com', 'aaa', 'liyangtom', 'tom', 20190801, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, NULL);
INSERT INTO `account` VALUES (165, 'gggg@163.com', 'aaa', 'liyangtom', 'tom', 20190808, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, NULL);
INSERT INTO `account` VALUES (166, 'e@163.com', 'aaa', 'liyangtom', 'tom', 20190807, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (167, 'c@gmail.com', 'aaa', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テストeeee', 'テスト部', 1);
INSERT INTO `account` VALUES (170, 'sunahama999@gmail.com', 'aaa', '濱砂 忍', 'ハマスナ シノブ', 19790811, '80501602040', 0, '0|1|2|4', 100, '0|1', '0|5', NULL, NULL, 0);

-- ----------------------------
-- Table structure for apply
-- ----------------------------
DROP TABLE IF EXISTS `apply`;
CREATE TABLE `apply`  (
  `id` int(11) NOT NULL,
  `cid` int(11) NULL DEFAULT NULL,
  `pid` int(11) NULL DEFAULT NULL,
  `apply_date` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of apply
-- ----------------------------
INSERT INTO `apply` VALUES (1, 67, 1, '20190730', 1);
INSERT INTO `apply` VALUES (2, 67, 2, '20190723', 0);
INSERT INTO `apply` VALUES (3, 67, 3, '20190704', 2);

-- ----------------------------
-- Table structure for error
-- ----------------------------
DROP TABLE IF EXISTS `error`;
CREATE TABLE `error`  (
  `id` int(11) NOT NULL,
  `err_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `err_code` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of error
-- ----------------------------
INSERT INTO `error` VALUES (1, 'USER_EXIST', 1);
INSERT INTO `error` VALUES (2, 'DATA_SUCC', 0);

-- ----------------------------
-- Table structure for expr
-- ----------------------------
DROP TABLE IF EXISTS `expr`;
CREATE TABLE `expr`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'exp id',
  `pid` int(11) NULL DEFAULT NULL COMMENT 'user id',
  `proj_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'project name',
  `date_from` decimal(50, 0) NULL DEFAULT NULL COMMENT 'プロジェクト開始日',
  `date_to` decimal(50, 0) NULL DEFAULT NULL COMMENT 'プロジェクト終了日',
  `work_role` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `work_lang` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '経験言語',
  `work_proj` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '経験工程',
  `work_detl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '经验详情',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 144 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of expr
-- ----------------------------
INSERT INTO `expr` VALUES (121, 122, 'bb', 20180801, 20180901, '2|3', '5|6|11', '6|4|10', '啊啊啊啊啊啊 不不不不不不不不不');
INSERT INTO `expr` VALUES (122, 67, '东都建筑', 20181009, 20181031, '2|3', '5|6|11', '6|4|10', 'yyy');
INSERT INTO `expr` VALUES (123, 67, 'Bizplus网站建设', 20190701, 20190910, '6|7|8|9', '1|2|3|7', '2|3|9|10|11', 'kkknn');
INSERT INTO `expr` VALUES (138, 140, 'bb', 20180801, 20180901, '2|3', '5|6|11', '6|4|10', '啊啊啊啊啊啊 不不不不不不不不不');
INSERT INTO `expr` VALUES (139, 140, 'bb', 20180801, 20180901, '2|3', '5|6|11', '6|4|10', '啊啊啊啊啊啊 不不不不不不不不不');
INSERT INTO `expr` VALUES (140, 151, 'bb', 20180801, 20180901, '2|3', '5|6|11', '6|4|10', '啊啊啊啊啊啊 不不不不不不不不不');
INSERT INTO `expr` VALUES (141, 151, 'bb', 20180801, 20180901, '2|3', '5|6|11', '6|4|10', '啊啊啊啊啊啊 不不不不不不不不不');
INSERT INTO `expr` VALUES (142, 159, 'kkk', 20190808, 20190823, '2', '5', '2|6', 'kkkk');
INSERT INTO `expr` VALUES (143, 164, 'eeeee', 20190807, 20190807, '0', '0', '0', 'eae');

-- ----------------------------
-- Table structure for fav
-- ----------------------------
DROP TABLE IF EXISTS `fav`;
CREATE TABLE `fav`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `fav_date` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fav
-- ----------------------------
INSERT INTO `fav` VALUES (1, 67, 1, '20190730');
INSERT INTO `fav` VALUES (2, 67, 2, '20190723');
INSERT INTO `fav` VALUES (3, 67, 3, '20190704');

-- ----------------------------
-- Table structure for logtable
-- ----------------------------
DROP TABLE IF EXISTS `logtable`;
CREATE TABLE `logtable`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log` varchar(21812) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of logtable
-- ----------------------------
INSERT INTO `logtable` VALUES (1, '{\"email\":\"liyangtom@163.com\",\"pwd\":\"aaa\",\"name_kj\":\"liyangtom\",\"name_kn\":\"tom\",\"birth\":20190801,\"phone\":12345678901,\"pers_type\":\"0\",\"work_area\":[\"0\"],\"work_time\":[\"0\"],\"work_mony\":10,\"work_type\":[\"0\"],\"exp\":[]}');
INSERT INTO `logtable` VALUES (2, '{\"email\":\"liyangtom@163.com\",\"pwd\":\"aaa\",\"name_kj\":\"liyangtom\",\"name_kn\":\"tom\",\"birth\":20190801,\"phone\":12345678901,\"pers_type\":\"0\",\"work_area\":[\"0\"],\"work_time\":[\"0\"],\"work_mony\":10,\"work_type\":[\"0\"],\"exp\":[]}');
INSERT INTO `logtable` VALUES (3, '{\"email\":\"liyangtom@163.com\",\"pwd\":\"aaa\",\"name_kj\":\"liyangtom\",\"name_kn\":\"tom\",\"birth\":20190801,\"phone\":12345678901,\"pers_type\":\"0\",\"work_area\":[\"0\"],\"work_time\":[\"0\"],\"work_mony\":10,\"work_type\":[\"0\"],\"exp\":[]}');

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'position id',
  `pid` int(11) NULL DEFAULT NULL COMMENT 'project id',
  `proj_mony` int(11) NULL DEFAULT NULL COMMENT '単価（万円）',
  `proj_role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '職種',
  `proj_resp` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '担当工程',
  `proj_cont` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '作業内容',
  `proj_lang` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '言語スキル',
  `reqr_exp` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '経験必須',
  `pref_exp` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '経験歓迎',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES (10, 167, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (11, 167, 54, '4|3', '3|5', 'ytytyty', '4|5', 'ggghgh', 'mmmmmmmmmmmmmmmmmm');
INSERT INTO `position` VALUES (12, 54, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (13, 55, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NULL DEFAULT NULL,
  `proj_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date_from` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date_to` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `proj_detl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '案件説明',
  `proj_domn` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '業界',
  `proj_area` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '勤務エリア',
  `proj_pref` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'こだわり',
  `proj_targ` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '応募対象\n0: フリーランス\n1: 協力パートナー\n2: 副業\n',
  `proj_styl` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '働き方',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 56 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES (4, 167, '自社iOSアプリ開発', '20190528', '20190528', 'iOSアプリ開発', '0', '1', '2|6|4|3', '1', '0');
INSERT INTO `project` VALUES (5, 154, 'サーバー構築', '20190517', '20190517', 'サーバー構築', '0|1|5', '2', '3', '0', '1');
INSERT INTO `project` VALUES (6, 44, 'Javaアプリケーション開発', '20181217', '20181217', 'システム開発', '6|4', '0', '1', '1', '2');
INSERT INTO `project` VALUES (7, 50, '運輸業向けのシステム再編プロジェクトのPMO', '20181203', '20181203', 'プロジェクトの管理', '0|1|5', '0', '1', '0', '3');
INSERT INTO `project` VALUES (8, 45, 'スマートフォンゲームのサーバサイド開発と運用', '20181203', '20181203', '備考をご参照ください', '0|1|7', '0', '1', '1', '1');
INSERT INTO `project` VALUES (9, 38, 'PHP／MySQL ドラッグストアー会員サイトの追加開発', '20181203', '20181203', '会員サイトの追加開発業務', '5|3|9', '3', '4', '2', '2');
INSERT INTO `project` VALUES (10, 23, '大型通信機器（シエナ製）保守・メンテナンス', '20181203', '20181203', 'ハードウェア保守', '0|1|5', '4', '5', '1', '3');
INSERT INTO `project` VALUES (11, 142, 'Perlを使ったWebポータル・コーポレートサイト開発', '20180803', '20180803', '開発業務', '0|4|5', '0', '1', '12', '2');
INSERT INTO `project` VALUES (12, 133, 'SNSサイトの開発保守', '20180128', '20180128', 'ネットサービス（SNSサイト）の開発保守', '0|1|5', '5', '6', '2', '4');
INSERT INTO `project` VALUES (13, 130, 'OraclePL/SQLを使ったWindows系案件', '20180101', '20180101', '製薬会社様向けCRM導入支援', '7|2|5|1', '6', '7', '1', '5');
INSERT INTO `project` VALUES (14, 126, 'Webサイト/ポータルサイト開発（PHP）', '20170930', '20170930', 'SMB向け予約受付サイトや ポータルサイトの開発', '5', '7', '8', '1', '6');
INSERT INTO `project` VALUES (15, 118, 'インテグレーション設計・構築・試験', '20170925', '20170925', 'インテグレーション案件の設計から構築、テストまで', '0|1|5', '6', '7', '2', '5');
INSERT INTO `project` VALUES (16, 117, '食品卸向けシステム開発', '20170925', '20170925', '食品会社でデータフォーマット変換やマスターデータを検索するシステムの設計から開発まで', '4', '8', '9', '1', '7');
INSERT INTO `project` VALUES (17, 115, 'ソーシャルゲーム開発', '20170920', '20170920', 'PC向けソーシャルゲームおよびオンラインゲームの開発', '0|1|5', '9', '10', '2', '8');
INSERT INTO `project` VALUES (18, 109, '銀行向けフレームワーク開発業務', '20170601', '20170601', '既存システムのフレームワーク開発となります', '0', '0', '1', '1', '2');
INSERT INTO `project` VALUES (19, 104, 'BtoB向けECサイトAPI開発', '20170526', '20170526', 'BtoB向けECサイトAPI開発', '6', '10', '11', '1', '9');
INSERT INTO `project` VALUES (20, 102, '上流から参画可能★業務系システム開発', '20170525', '20170525', 'Javaにて、生産管理システム開発の、要件定義以降などを担当', '0|1|9', '11', '12', '1', '4');
INSERT INTO `project` VALUES (21, 91, 'Rubyによる製薬会社向け管理システム運用保守/追加開発', '20170305', '20170305', 'Rubyで販売、生産管理システムの追加開発及び運用 、BtoCサイトの追加開発及び運用保守', '5', '12', '13', '1', '8');
INSERT INTO `project` VALUES (22, 82, '汎用機系の運用', '20170225', '20170225', '銀行システムの保守になります。年齢は問いません。', '0|1|5', '13', '14', '1', '7');
INSERT INTO `project` VALUES (23, 66, 'サーバ設計・構築作業', '20161025', '20161025', 'サーバ設計', '1|8', '10', '11', '1', '9');
INSERT INTO `project` VALUES (24, 63, '業務基幹システムの構築（リプレース）', '20161010', '20161010', '詳細設計およびコーディング', '0|2|4', '14', '15', '0', '4');
INSERT INTO `project` VALUES (25, 54, '法人向けSNS自社サービス開発案件', '20160906', '20160906', 'PHPを用いてWebアプリケーション側の開発', '0|1|5', '15', '16', '1', '7');
INSERT INTO `project` VALUES (26, 52, 'DRシステムの保守・開発', '20160830', '20160830', 'DRシステムの保守・開発', '6|1|5', '0', '1', '1', '4');
INSERT INTO `project` VALUES (27, 51, 'パッケージ改定案件　オープン・ＷＥＢ系', '20160830', '20160830', 'パッケージ改定案件　オープン・ＷＥＢ系', '0|1|5', '7', '8', '1', '6');
INSERT INTO `project` VALUES (28, 47, 'オラクルデータベースのバージョンアップ', '20160805', '20160805', 'オラクルデータベースのバージョンアップ', '0|1|3', '0', '1', '1', '3');
INSERT INTO `project` VALUES (29, 46, '.netによるウェブシステム', '20160805', '20160805', 'ウェブシステムの開発及び保守', '0|1|5', '10', '11', '1', '9');
INSERT INTO `project` VALUES (30, 42, 'オラクル導入コンサル', '20160626', '20160626', 'オラクル8からのバージョンアップ', '0|1|5', '6', '7', '1', '5');
INSERT INTO `project` VALUES (53, 167, 'bbb', '20190902', '20190911', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0');
INSERT INTO `project` VALUES (54, 167, 'ttttt', '20190803', '20190903', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0');
INSERT INTO `project` VALUES (55, 167, 'test', '20190810', '20190811', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0');

-- ----------------------------
-- Procedure structure for DEBUG_LOG
-- ----------------------------
DROP PROCEDURE IF EXISTS `DEBUG_LOG`;
delimiter ;;
CREATE PROCEDURE `DEBUG_LOG`(msg VARCHAR(21812))
BEGIN
    insert into logtable select 0, msg;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for DEBUG_MSG
-- ----------------------------
DROP PROCEDURE IF EXISTS `DEBUG_MSG`;
delimiter ;;
CREATE PROCEDURE `DEBUG_MSG`(enabled INTEGER, msg VARCHAR(21812))
BEGIN
  IF enabled THEN BEGIN
    select concat("** ", msg) AS '** DEBUG:';
  END; END IF;
END
;;
delimiter ;

-- ----------------------------
-- Function structure for FUNC_IS_EXIST_EMAIL
-- ----------------------------
DROP FUNCTION IF EXISTS `FUNC_IS_EXIST_EMAIL`;
delimiter ;;
CREATE FUNCTION `FUNC_IS_EXIST_EMAIL`(`email` varchar(100))
 RETURNS int(11)
BEGIN
	DECLARE count BIGINT UNSIGNED ;
	
	select count(email) into count from account a where a.email = email;
	
	if count>0 then 
		return 1;
	else
		return 0;
	end if;
	
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_ADD_PROJ
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_ADD_PROJ`;
delimiter ;;
CREATE PROCEDURE `PROC_ADD_PROJ`(IN `data` varchar(10000))
BEGIN

	DECLARE proj_name   varchar(100) default null;
	DECLARE proj_detl   varchar(500) default null;
	DECLARE proj_domn   varchar(100) default null;
	DECLARE date_from   varchar(100) default null;
	DECLARE date_to     varchar(100) default null;
	DECLARE proj_area   varchar(100) default null;
	DECLARE proj_pref   varchar(100) default null;
	DECLARE proj_targ   varchar(100) default null;
	DECLARE proj_styl   varchar(100) default null;
	DECLARE email       varchar(100) default null;
	DECLARE pid         BIGINT UNSIGNED;
	DECLARE pos         varchar(5000) default null;
	
	DECLARE json_items  BIGINT UNSIGNED;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;
	
	DECLARE ppid        BIGINT UNSIGNED;
	DECLARE proj_mony   varchar(100) default null;
	DECLARE proj_role   varchar(100) default null;
	DECLARE proj_resp   varchar(100) default null;
	DECLARE proj_cont   varchar(800) default null;
	DECLARE proj_lang   varchar(100) default null;
	DECLARE reqr_exp    varchar(100) default null;
	DECLARE pref_exp    varchar(100) default null;
	
	DECLARE tmp         int;
  DECLARE ret         varchar(10000) default null;
	
	set pid       = CONVERT(JSON_EXTRACT(data, '$.pid'),UNSIGNED);
	set proj_name = JSON_UNQUOTE(JSON_EXTRACT(data,'$.proj_name'));
	set proj_detl = JSON_UNQUOTE(JSON_EXTRACT(data,'$.proj_detl'));
	set proj_domn = JSON_UNQUOTE(JSON_EXTRACT(data,'$.proj_domn'));
	set date_from = CONVERT(JSON_EXTRACT(data, '$.date_from'),UNSIGNED);
	set date_to   = CONVERT(JSON_EXTRACT(data, '$.date_to'),UNSIGNED);
	set proj_area = JSON_UNQUOTE(JSON_EXTRACT(data,'$.proj_area'));
	set proj_pref = JSON_UNQUOTE(JSON_EXTRACT(data,'$.proj_pref'));
	set proj_targ = JSON_UNQUOTE(JSON_EXTRACT(data,'$.proj_targ'));
	set proj_styl = JSON_UNQUOTE(JSON_EXTRACT(data,'$.proj_styl'));
	set pos       = JSON_EXTRACT(data,'$.pos');
	
	
	insert into project(`pid`,`proj_name`,`proj_detl`,`proj_domn`,`date_from`,`date_to`,`proj_area`,`proj_pref`,`proj_targ`,`proj_styl`)
	values(pid,proj_name,proj_detl,proj_domn,date_from,date_to,proj_area,proj_pref,proj_targ,proj_styl);
	
	set ppid = LAST_INSERT_ID();
	set json_items = JSON_LENGTH(pos);
	
	while `_index` < `json_items` do
		set proj_mony = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_mony')));
		set proj_role = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_role')));
		set proj_resp = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_resp')));
		set proj_cont = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_cont')));
		set proj_lang = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_lang')));
		set reqr_exp = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].reqr_exp')));
		set pref_exp = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].pref_exp')));
		
		insert into position (pid,proj_mony,proj_role,proj_resp,proj_cont,proj_lang,reqr_exp,pref_exp)
		values (ppid,proj_mony,proj_role,proj_resp,proj_cont,proj_lang,reqr_exp,pref_exp);
		set `_index` := `_index` + 1;
	end while;
	
	commit;
	select e.err_code,e.err_name,pid as id from error e where e.err_code =0;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_GET_APPLY
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_GET_APPLY`;
delimiter ;;
CREATE PROCEDURE `PROC_GET_APPLY`(IN `cid` int)
BEGIN
	select f.id, 
		p.pid, 
		p.proj_name,
		p.date_from,
		p.date_to,
		p.proj_domn,
		p.proj_detl,
		p.proj_domn,
		p.proj_area,
		p.proj_pref 
	from 
	  apply f, project p 
	where 
	  f.pid = p.id and f.cid = cid;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_GET_FAV
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_GET_FAV`;
delimiter ;;
CREATE PROCEDURE `PROC_GET_FAV`(IN `cid` int)
BEGIN
	select f.id, 
		p.pid, 
		p.proj_name,
		p.date_from,
		p.date_to,
		p.proj_domn,
		p.proj_detl,
		p.proj_domn,
		p.proj_area,
		p.proj_pref 
	from 
	  fav f, project p 
	where 
	  f.pid = p.id and f.cid = cid;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_REG_COMP
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_REG_COMP`;
delimiter ;;
CREATE PROCEDURE `PROC_REG_COMP`(IN `data` varchar(10000))
BEGIN

	DECLARE email       varchar(100) default null;
	DECLARE pwd         varchar(100) default null;
	DECLARE name_kj     varchar(100) default null;
	DECLARE name_kn     varchar(100) default null;
	DECLARE phone       varchar(100) default null;
	DECLARE name_comp   varchar(100) default null;
	DECLARE name_dept   varchar(100) default null;
	DECLARE usertype   int default null;
	DECLARE json_items  BIGINT UNSIGNED ;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;

	DECLARE tmp         int;
  DECLARE ret         varchar(10000) default null;
	
	set email     = JSON_UNQUOTE(JSON_EXTRACT(data,'$.email'));
	set pwd       = JSON_UNQUOTE(JSON_EXTRACT(data,'$.pwd'));
	set name_kj   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kj'));
	set name_kn   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kn'));
	set name_comp   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_comp'));
	set name_dept   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_dept'));
	set usertype 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.usertype'));
	
	set tmp = FUNC_IS_EXIST_EMAIL(email);
	
	if tmp = 1 then 
		select * from error e where e.err_code =1;
	else
		insert into account(`email`,`pwd`,`name_kj`,`name_kn`,`phone`,`name_comp`,`name_dept`,`usertype`)
		values(email,pwd,name_kj,name_kn,phone,name_comp,name_dept,usertype);
		
		commit;
		
		select e.err_code,e.err_name from error e where e.err_code =0; 
	end if;
	
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_REG_USER
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_REG_USER`;
delimiter ;;
CREATE PROCEDURE `PROC_REG_USER`(IN `data` varchar(10000))
BEGIN

	DECLARE email       varchar(100) default null;
	DECLARE pwd         varchar(100) default null;
	DECLARE name_kj     varchar(100) default null;
	DECLARE pid         BIGINT UNSIGNED;
	DECLARE name_kn     varchar(100) default null;
	DECLARE birth       varchar(100) default null;
	DECLARE phone       varchar(100) default null;
	DECLARE pers_type   varchar(100) default null;
	DECLARE work_area   varchar(100) default null;
	DECLARE work_time   varchar(100) default null;
	DECLARE work_mony   varchar(100) default null;
	DECLARE work_type   varchar(100) default null;
	DECLARE usertype    BIGINT UNSIGNED;
	DECLARE exp         varchar(5000) default null;
	
	DECLARE json_items  BIGINT UNSIGNED;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;

	DECLARE proj_name   varchar(100) default null;
	DECLARE date_from   varchar(100) default null;
	DECLARE date_to     varchar(100) default null;
	DECLARE work_role   varchar(100) default null;
	DECLARE work_lang   varchar(100) default null;
	DECLARE work_proj   varchar(100) default null;
	DECLARE work_detl   varchar(100) default null;
	
	DECLARE tmp         int;
  DECLARE ret         varchar(10000) default null;
	
	set email     = JSON_UNQUOTE(JSON_EXTRACT(data,'$.email'));
	set pwd       = JSON_UNQUOTE(JSON_EXTRACT(data,'$.pwd'));
	set name_kj   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kj'));
	set name_kn   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kn'));
	set birth     = CONVERT(JSON_EXTRACT(data,'$.birth'),UNSIGNED);
	set phone     = CONVERT(JSON_EXTRACT(data,'$.phone'),UNSIGNED);
	set pers_type = CONVERT(JSON_EXTRACT(data,'$.pers_type'),UNSIGNED);
	set work_area = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_area'));
	set work_mony = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_mony'));
	set work_time = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_time'));
	set work_type = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_type'));
	set usertype  = CONVERT(JSON_EXTRACT(data,'$.usertype'),UNSIGNED);
	set exp       = JSON_EXTRACT(data,'$.exp');
	
	set tmp = FUNC_IS_EXIST_EMAIL(email);
	
	if tmp = 1 then 
		select * from error e where e.err_code =1;
	else
		insert into account(`email`,`pwd`,`name_kj`,`name_kn`,`birth`,`phone`,`pers_type`,`work_area`,`work_mony`,`work_time`,`work_type`,`name_comp`,`name_dept`,`usertype`)
		values(email,pwd,name_kj,name_kn,birth,phone,pers_type,work_area,work_mony,work_time,work_type,name_comp,name_dept,usertype);

		set pid = LAST_INSERT_ID();
		set json_items = JSON_LENGTH(exp);

		while `_index` < `json_items` do
			set proj_name = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].proj_name')));
			set date_from = CONVERT(json_extract(`exp`, concat('$[', `_index`, '].date_from')),UNSIGNED);
			set date_to   = CONVERT(json_extract(`exp`, concat('$[', `_index`, '].date_to')),UNSIGNED);
			set work_role = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_role')));
			set work_lang = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_lang')));
			set work_proj = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_proj')));
			set work_detl = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_detl')));
			
			insert into `expr` (pid,proj_name,date_from,date_to,work_role,work_lang,work_proj,work_detl)
			values (pid,proj_name,date_from,date_to,work_role,work_lang,work_proj,work_detl);
			set `_index` := `_index` + 1;
		end while;
		
		commit;
		
		select e.err_code,e.err_name,pid as id from error e where e.err_code =0; 
	end if;
	
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_SAVE_USER
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_SAVE_USER`;
delimiter ;;
CREATE PROCEDURE `PROC_SAVE_USER`(IN `data` varchar(10000))
BEGIN

	DECLARE pid         BIGINT UNSIGNED;
	DECLARE email       varchar(100) default null;
	DECLARE pwd         varchar(100) default null;
	DECLARE name_kj     varchar(100) default null;
	DECLARE name_kn     varchar(100) default null;
	DECLARE birth       varchar(100) default null;
	DECLARE phone       varchar(100) default null;
	DECLARE pers_type   varchar(100) default null;
	DECLARE work_area   varchar(100) default null;
	DECLARE work_time   varchar(100) default null;
	DECLARE work_mony   varchar(100) default null;
	DECLARE work_type   varchar(100) default null;
	DECLARE exp         varchar(5000) default null;
	DECLARE json_items  BIGINT UNSIGNED ;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;

	DECLARE id          BIGINT UNSIGNED;
	DECLARE proj_name   varchar(100) default null;
	DECLARE date_from   varchar(100) default null;
	DECLARE date_to     varchar(100) default null;
	DECLARE work_role   varchar(100) default null;
	DECLARE work_lang   varchar(100) default null;
	DECLARE work_proj   varchar(100) default null;
	DECLARE work_detl   varchar(100) default null;
	
	DECLARE tmp         int;
  DECLARE ret         varchar(10000) default null;
	
	set pid       = JSON_UNQUOTE(JSON_EXTRACT(data,'$.id'));
	set email     = JSON_UNQUOTE(JSON_EXTRACT(data,'$.email'));
	set pwd       = JSON_UNQUOTE(JSON_EXTRACT(data,'$.pwd'));
	set name_kj   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kj'));
	set name_kn   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kn'));
	set birth     = CONVERT(JSON_EXTRACT(data,'$.birth'),UNSIGNED);
	set phone     = CONVERT(JSON_EXTRACT(data,'$.phone'),UNSIGNED);
	set pers_type = CONVERT(JSON_EXTRACT(data,'$.pers_type'),UNSIGNED);
	set work_area = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_area'));
	set work_mony = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_mony'));
	set work_time = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_time'));
	set work_type = JSON_UNQUOTE(JSON_EXTRACT(data,'$.work_type'));
	set exp       = JSON_EXTRACT(data,'$.exp');
	
-- 	call debug_msg(true,pid);

	UPDATE account e
	SET email   = email,
	    pwd     = pwd,
		  name_kj = name_kj,
			name_kn = name_kn,
			birth   = birth,
			phone   = phone,
			pers_type=pers_type,
			work_area=work_area,
			work_mony=work_mony,
			work_time=work_time,
			work_type=work_type
	WHERE e.id=pid;
	
	
	set json_items = JSON_LENGTH(exp);
	while `_index` < `json_items` do
		set id = CONVERT(json_extract(`exp`, concat('$[', `_index`, '].id')),UNSIGNED);
		set proj_name = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].proj_name')));
		set date_from = CONVERT(json_extract(`exp`, concat('$[', `_index`, '].date_from')),UNSIGNED);
		set date_to   = CONVERT(json_extract(`exp`, concat('$[', `_index`, '].date_to')),UNSIGNED);
		set work_role = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_role')));
		set work_lang = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_lang')));
		set work_proj = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_proj')));
		set work_detl = JSON_UNQUOTE(json_extract(`exp`, concat('$[', `_index`, '].work_detl')));
		
    UPDATE expr e 
		SET proj_name = proj_name,
				date_from=date_from,
				date_to=date_to,
				work_role=work_role,
				work_lang=work_lang,
				work_proj=work_proj,
				work_detl=work_detl 
		where e.id=id;
		
				
		set `_index` := `_index` + 1;
	end while;
	
	commit;
	
	select e.err_code,e.err_name from error e where e.err_code =0; 
	
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for SYS_RAISE
-- ----------------------------
DROP PROCEDURE IF EXISTS `SYS_RAISE`;
delimiter ;;
CREATE PROCEDURE `SYS_RAISE`(`errno` BIGINT UNSIGNED, `message` VARCHAR(256))
BEGIN
SIGNAL SQLSTATE
    'ERR0R'
SET
    MESSAGE_TEXT = `message`,
    MYSQL_ERRNO = `errno`;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
