/*
 Navicat Premium Data Transfer

 Source Server         : bizplus
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : 133.167.73.231:3306
 Source Schema         : bizplus

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 16/08/2019 16:10:53
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
) ENGINE = InnoDB AUTO_INCREMENT = 213 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES (166, 'e@163.com', 'aaa', 'liyangtom', 'tom', 20190807, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (167, 'c@gmail.com', 'aaa', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テストyang', 'テスト部test', 1);
INSERT INTO `account` VALUES (170, 'sunahama999@gmail.com', 'aaa', '濱砂 忍', 'ハマスナ シノブ', 19790811, '80501602040', 0, '0|1|2|4', 100, '0|1', '0|5', NULL, NULL, 0);
INSERT INTO `account` VALUES (171, 'liy@163.com', 'aaa', 'tomaaa', 'yang', 20190731, '12990121', 1, '3', 80, '2', '0|2|3', NULL, NULL, 0);
INSERT INTO `account` VALUES (172, 'test2@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (173, 'test3@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (174, 'test4@gmail.com', '123', 'テスト4', 'テスト4', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト4', 'テスト部4', 1);
INSERT INTO `account` VALUES (175, 'test@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (176, 'test@163.com', 'aaa', 'liyangtom', 'tom', 20190814, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (177, 'test5@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (178, 'test6@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (179, 'testphone@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テストq2we', 'テスト部', 1);
INSERT INTO `account` VALUES (180, '22t@gmail.com', '123', 'テスト', 'テスト', NULL, '11111111111', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (181, 'a@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (182, 'a@163.com', 'aaa', 'liyangtom', 'tom', 20190808, '12345678901', 0, '0', 10, '0', '0', NULL, NULL, 0);
INSERT INTO `account` VALUES (183, '123@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (184, 'haha@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (185, 'no@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (186, '1@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (187, 'testhu@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (188, 'testhu2@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (189, 'test123@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (190, 'test333@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (191, 'test555@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (192, 'test87654@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (193, 'test000@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (194, 'test98j@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (195, 'test5678@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (196, 'testeeeee@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'yyyy', 'bbbb', 1);
INSERT INTO `account` VALUES (197, 'testj09j0@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (198, 'ttrrrrr@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テストwewwww', 'テスト部', 1);
INSERT INTO `account` VALUES (199, 'test8785@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (200, 'bbbbb@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (201, 'test9493094@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (202, 'hyyrer@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (203, 'test4563456@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (204, 'eeeee@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (205, 'tttqqq@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (206, 'gggg@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (207, 'yyyty@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (208, 'eeeeee@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (209, 'sdssdsd@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (210, 'uyuyuyuyu@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (211, 'test4324@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);
INSERT INTO `account` VALUES (212, 'test534523@gmail.com', '123', 'テスト', 'テスト', NULL, '12345678901', NULL, NULL, NULL, NULL, NULL, 'テスト', 'テスト部', 1);

-- ----------------------------
-- Table structure for apply
-- ----------------------------
DROP TABLE IF EXISTS `apply`;
CREATE TABLE `apply`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NULL DEFAULT NULL,
  `pid` int(11) NULL DEFAULT NULL,
  `apply_date` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of apply
-- ----------------------------
INSERT INTO `apply` VALUES (17, 171, 13, '20190813', 0);
INSERT INTO `apply` VALUES (20, 171, 5005, '20190813', 1);
INSERT INTO `apply` VALUES (22, 171, 5003, '20190813', 0);
INSERT INTO `apply` VALUES (23, 171, 5004, '20190813', 1);
INSERT INTO `apply` VALUES (24, 171, 5002, '20190813', 0);
INSERT INTO `apply` VALUES (25, 167, 5002, '20190813', 0);
INSERT INTO `apply` VALUES (26, 171, 107, '20190816', 0);

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
INSERT INTO `expr` VALUES (122, 171, '东都建筑', 20181009, 20181031, '2|3', '5|6|11', '6|4|10', 'yyy');
INSERT INTO `expr` VALUES (123, 171, 'Bizplus网站建设', 20190701, 20190910, '6|7|8|9', '1|2|3|7', '2|3|9|10|11', 'kkknn');
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
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fav
-- ----------------------------
INSERT INTO `fav` VALUES (16, 171, 5002, '20190815');
INSERT INTO `fav` VALUES (17, 171, 12, '20190815');
INSERT INTO `fav` VALUES (18, 171, 5003, '20190815');

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
-- Table structure for msg
-- ----------------------------
DROP TABLE IF EXISTS `msg`;
CREATE TABLE `msg`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `msg_from` int(255) NULL DEFAULT NULL,
  `msg_to` int(255) NULL DEFAULT NULL,
  `apply_id` int(11) NULL DEFAULT NULL,
  `msg_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `msg_cnt` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `msg_type` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of msg
-- ----------------------------
INSERT INTO `msg` VALUES (1, 171, 167, 17, '2019/08/16 10:45', 'dfdf', 0);
INSERT INTO `msg` VALUES (2, 167, 171, 17, '2019/08/16 10:55', 'gh rtr  df', 1);
INSERT INTO `msg` VALUES (18, 171, 167, 20, '2019/08/16 02:55', 'vbfrtrtrtrtrtrt', 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 5039 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES (10, 204, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (11, 167, 54, '4|3', '3|5', 'ytytyty', '4|5', 'ggghgh', 'mmmmmmmmmmmmmmmmmm');
INSERT INTO `position` VALUES (12, 204, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (13, 204, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (101, 187, 66, '5', '5', 'C1fJXcYyRvlB3Ij1E5tukXhohlw0MBQ5M5P88Irr59Kb18oiPnE684ApU0mvqhlPepz83k36OBzlMGxj7Nlj6T6S4joHf5BXX56LIqoptIs7FZdNDDyc6CTKsgDU5waS9bNRJlaQi5zyl9NfFaDcGjbVlwcmmUu7rZ8nMMEcnh3AMeitThOet8La92pWJyoOL2HMBjT3', '3', 'lzipaJHNsSEGPOsNhnUgsTy3pzTXWsuOUIIJnujsiJafjH6oY8d58XnRAoAlzt0Ai0wHFjkwEl8i3TUh2p9XOyQ7e0I8u73ySZ7t', 'VyiyYr1XYFYqUcsKudwtjymPamBGsJPdWlLDGK9h72iZbcnSPsEzmNJgMTYwpupPz4UsRoEjdPwrQNy88t19Ea1Ico1xwN1MNSjg');
INSERT INTO `position` VALUES (102, 112, 84, '0', '5', 'ofVXabQ9fZx52qKYDLPmxRwQXje8nR1CsRUjEesBY2RWZ6UhIKc5pYxXsF907SVNiuMlVkUjdOO49a0bP6zcy6XTd719e1DGgEyottLh03baK2YSOilAc2YlX3HYtUFmLHX4lMrgvSm5e6Jliju5PCnopMR0lxxfxzPCfdrC1FPJQdHaugzKkJWIdtPY4147eGHprGGF', '7', 'sEKxeXLF0GF7n5ocHivNSH9KRoKVctnZuR1EMV9VDSEvz91KdMkhU1jkE9fzN0nGcpNVEkQvjZKACOVSx92PJGF3sQ9MzKINp8SJ', 'wfG35y84qjizoNBN8X6WkUnxkE6YR6UE6MfS29UVHKMIsJimI5PSB6jc1TS11jntOd3brsU8DkOZHeEagTQVrCD9nDbjqdeihc4P');
INSERT INTO `position` VALUES (103, 126, 18, '8', '3', 'kQOasJUXO2VhTSCMa4ynRuSkGp2pkzKZZ0ubxmRdtEVyI6POarzVSRIz8oUCQpwYr5IchlYxnU4NZdcKanP2AyHHr5dISONER6GMxwrzSBs7W4aeMJmnZ3Y2xBumIQfYH05dXPWn5aj8FJuxe85IljoXhNYwBFrCgT0g96G7x8r9UZxnQ7HJUWxhLi5J0kmzshcvTNxi', '7', '8Vm2oDHaugD8hrJgSUbA7HNW1Rw7BUCKjRWBLphexsFDi1KzSPA2Wh41IPAXQKZad3ZQVIVnx6MOBJyAG7pvTJxBWf25oKOnTpjo', 'b4dJ4XFaUpz8b9RTfoGUGX30PZ8msj5WjJiLdf16DWrrp3dp34IoiPiEAn4eYcsvtdZRaFz9xKQtpMLV5TtxaRxTleL0lWhlo67L');
INSERT INTO `position` VALUES (104, 149, 26, '2', '7', 'FI1Y9yYybiiFt4UcpFp638YampFtO91tF5rRZZUxGWYCyc1tlfgYgR4GtbwTsokcryAxNCDQu20hkWmJxWHsdcMxBli7nBFbw6V9cDgjcQoobXgXzmgWh18OmMwleFmtxYunAmqtziQNyiVoFLIAfs457GXQR4EWn41Cm3WM5wg8kvaD0IgT6mOEezp3Pac4d4j3qSBM', '7', '5EsL6UMqTZIYvZAqxixNc7fUleqLhXhHUeBif2iedN5BUgrejM3uO8V8jYkboAJ62AERYcK4ASuPBd9FwLmUdx3VIC8HSGzdD9JT', 'caGGB8t5OG7FYeodXycEHsIVdDm4cQLBUqnVEfSeD7HCF3sxcWFOhELtSun8Wzc745us1SY2g7AKkFQkUzbFL6eQf3DU2UIOeJHJ');
INSERT INTO `position` VALUES (105, 114, 10, '8', '1', '8NsjDBIMdCnhXWv7aeN8PD9Lywpa7GcU3SH8O4Mdu00zrl1HXKsnx634NhuRVsOWkTnEPxtgRtOZMKeN5hCxXyg7ZNurJ5ICleOY8w2kaMVEserCChVxpb8wwqpCDCWWlMys5GPJpcWKccP5fromkUXJfclRG0gY09dfq8G6SMIMExTTbugVXtwQzoNde7Cy57Uc9tOh', '5', 'sUXMKFrJS0WULBGNMqBunbUKTQHd0Urf9upZYEoigUMGpeu6NOxDNw7Q9N248NS7J1VbWrzHBcOTPNezfKQlhoSNwYaLLtkSCO7y', 'JSjgZpBuhoAvsDYx7qaeiHp7Rn6S25RAQppNltM1mipHYocIUxVVxcQBnmPvtt1mXAfCYLLNei2AchjmLx7Ek5NxZnj8eaI3qDtY');
INSERT INTO `position` VALUES (106, 115, 43, '6', '1', 'lH1OkPiFDmk5wxBcwrmulMsEa8UZxLduDxccE8NKFe52zNG2BRlbxAhYZwyl5JR1Iz28UjXyecoHR0OM2bYgkB7CQDDRJlO5MEt9VIhc3w7UVZHjimtdvvRG2zsRgFo2Nt5MGO1t36mxEmr06dth2uKbwmHgZQ5xIEHme4cTu9kzIeCQH2VCWGAcieadHVUmAypAfFVB', '0', 'Zw2KVSSk0Yh53bBEoDAe9MZo7yUyBuCgUB7UHSNLH3Q6xrGXo61BVgCNXNNg8diGVAl2dr6V0yXF5c1Qs6KF3ALx8u63FqNnUKlw', 'FN479fKgJ6R4W6xBTcMUyx3suCQJltvu1EKeCNGX0poCcChI2MU17Q7RTLM6PA5ZLgDRwT8GWzeJJ1QsfIRYY3xlG2K1AJIzuO15');
INSERT INTO `position` VALUES (107, 198, 29, '3', '5', 'OOfIvyIc5eaHtgBRtbK3IGGNqpZ49UtQwrKKYozSur6fsBFNNjLhEcbIIRbFYOckvKUCW13Fl2JaJkepkMqaILLTQBBGNt4fPVthqC0VpG5MTA8hwvfLhCcj8BvUzx117nLy079hVVuBQ9APDdTbOs8M3KioRgg2ODOqzKrzv70MRaT9BfQVdanOo85qYUQzy1wMuTa3', '7', 'epQ2v4c0jnvPKZyaAB0PAbbrBXaoHPrFXj9uWW2Ddzyrejoc8vtSkowCOi1YextT5q1kaEDnIxvKmtNbs8pVfZftx6fxfeipGfvy', 'sDB3sGKx2lZeVapgHYygLIxdiPInOGEH8Yso6wnZOr0LhAcEyBhsrOmjQiVc7givhRg6rAkVuYRdRm5hxDyMjVauvJYYaLbsJFoP');
INSERT INTO `position` VALUES (108, 150, 50, '3', '7', 'bL7S6JSnmxo3rWML1vKimM4j6jUM8qCSqAuYYIxm0vwngiAw3cYsUzMPQXVWzFp6uWNqlyxs8ir0aRDYihTfRU71yfHBwaxvFz2KVTKEpquwHVy9T7yRwJpaYV2Gqw6hu6ukY3DOXO0ljLtdqIrzmg96Kcv9bDY3tNBLkOka4j3hSE1NlZahEH5O7yZ6IDwTz71WKi2b', '4', 'Q4CmbnGlhXCn0ymRwOvzoR1wkrVMeDDg89xM2lfKSUkpup8JPEXTHm39DPCtS4GeUgp1AZZLskgTrLC4sM7aqtZVFyIniw2YOGUO', '9HIzpLkgGkR2NIAG6qxkHUvLQwm6sHFk0x4lDHveI2OfgQZavvbhSuHpW6j2jox9frBZNZCz5TbOFPp9WLK6phSGqPOHh25eFPAz');
INSERT INTO `position` VALUES (4995, 184, 45, '5', '1', '6BIoh2mkQAgbwnFgfduWe0jsuJNIVa9N0EE46ypb81rtVt3AdszWqSnGca4YpdP0ASlrjLjryTYnJ0XAPNomlngha8cg4Qwem1sCILaSIIiX4A6lC3IcymPWwDRksDxhg3ARHU2EwWecFImZB0dAIUpAmVQE3zjEUA1AApesBDpcHwRna2j1kxZMNApvDyK6wZHERlZW', '3', 'u8EoN20EnnBQrehkox99soN3tpsoMVzcMfzyVhAHzraKIpE5kenyZXoFvK5hKL1RyjDMotPGw1JAOCuDlxEssACz0tCKmc7n0IWj', 'm1Q0OgBiNn1sa16XHIjxgNW4qFdU3fKFqLatgNeL8elM2TuufkgrjiCYfVJJCrosdwCObN04oXyBlJCWVtyS9cgHICNKDVJR03tG');
INSERT INTO `position` VALUES (4996, 128, 50, '2', '2', 'ulCLtBwWSxxT2VsAP5GYAp0TOhLsa6FzZgiXaUXHP11QhzYfKs0VZ4REut7MzE5Wr84VwVk5i8JIxkwYIphrGtaePdmqWKRL5fjj5DszI4xavIQK7iDKgOQ7hZGSs3iXr7NSBNdF7sjL5AsGNbtyHHprPlBf6aHOVasy58JtF7NyoEBgr9FQJuPjSgCZL7JgkUzfR4KO', '2', '9sJ41CLjfy6U0FlKJfZ5uiHyqNUOgPwy08JCFpbd10qJMMuPOUIYvThbkVOns6CQCHd25iFdE5D328mddE9MGXDhasbuaxv5yaGE', 's1UpPoUzPojmtuKn60JoE6bMHUCQKIFc1hvluT7bDORwJzBqmH88QcAvaHi4lEpHjGuL8j3n3rl0opDRTWnCKGLZh9LmvC08iKMC');
INSERT INTO `position` VALUES (4997, 109, 76, '6', '0', 'NUFi1KGuDQlPam7c4Vo9XR201mRecBMeokzzBnhX2aiebki6NtHuKsp6cOrO2mRCDHk0wIaRxRG7sXZRDURt3cT643Wx6TeQJgaT9sJES063lsNFyaKiUiJlxo53vnVdx0xM6FRVKMaDfZULpQ8fI65kWzfVwQTpecGv4BItIzXIIGFYTuOepzV14MzHj5j43uiDTiQn', '1', 'PXSixcQuHBCByAoHP0rMBJNQcPXhCEudlWZcCSHuiXb3g3Eu35EribHFJCGhEtsDRiackME6t7norUtjKnnG9C4JOTTAMjqyoXm7', 'dmJr1H8lxdXzShXbGlEOoQNQ3EuJRz9UrvGhd6P1ESWv5drpMOsDTYTMZ2yxXzU8eDHga07JWMKV4cUZWF7CG6ATc3IkIceP8YR1');
INSERT INTO `position` VALUES (4998, 135, 24, '2', '3', 'RiqGO7S7iYaR1S1iDyEhrWB4r4XfKcDL1luhP3FelLCtBNXpgsyhGqo5gwZTkwwFUPZPhTSKsk6gTS2ehr9bogEL7zAcew4yZ7ZvyHIMaoyguHlO34v2xUayKOSsS0p6pHHW2GqZjwB9riazNwijABBFgkljyZ3j820mAPVwOWTASaGlxdegRF5oGCzSfGkJ2bBysyy8', '3', 'vVosAwGe9wV5WS37Lf8aDRHvJH0ZR38ofGfuQ5FPtygUOOfJI1gS0iWeO3j36qMFxrZQwJqQasqPuxg4lqRaXqx7uBfXWLTClagh', 'yPW9LQ2I1GtbWoSPZwsH3cgvnS3OZonUQ8FVUSOGypFnREAs3DnzsZnWtkV2WnsNcZKXi64GhlTOX2eiSLUVAxl0Vtmt6VuK71K2');
INSERT INTO `position` VALUES (4999, 190, 59, '1', '8', 'IhSGGZ90GxkLTWNoxUCzTKKM1IRfrlopCWNdfet6tvnJui0kofFjkTn7WGP7HeIeI5J6JtJSkFFihAbSSq0MgFFssPGZPwyPmJAzZ4a4Ww9eNFaWo6pan67DzaN4ntDxR05X9l3XP6zuGlfnyuvSGXmqM7A8qgRntLMXKCWCDRLrHN7O5kF38ur3NPLCl4rtpLA4YHcv', '3', 'sOzM5i9AvDGbXp8eTJ51UbJkbC5MCzxHTfQf1rSqMBz0lSRgBaF8h4DRFPu3mw86Q8H2Zcmm1OoSlS9JuZKluzkZb9am6ZEZC3jm', 'KYHiydGTPvpwPkINmXLbYsaaC9pcKPPrsW8WSlxRsRJqTnWVQ0xprIOc7rgyxoIAf8E3mw4Ak4sHiuGZmULTbk9kHfYlF8dDIILU');
INSERT INTO `position` VALUES (5000, 157, 47, '6', '4', '6wFxZH4NkGLddzi58dwGXT5lbp8Zjv0JkqXpeML9lLA8x9kTkPWFqnGm0eVuIenyQB2wb3awSweMS7ybEpzTZud7juyA0a0HhMrvHx1qzjx3I4T3p4pdoTYgi5NrEa616XoGPDURyJez7jypb4V5vXcOxLNLkJlYn57vPNomkXofyii9GiQKFAFi4aSEzIrohFMBlCZN', '2', 'sVXs7ZPmOFB3bTnzZ1z5kwbqA8sWgXDIC3Wpr07BCblDpuFwjMMLkRq63rs8q2F0B31i77Hj4x2IKYAP26xUL2hvNavAH8UKVvBv', '3hzlEnRwYhverdGtFvpJVFVgMHb5dsxZXOVVHMQhkvWpoRSo1kFkF2axMSZ6LVTquWHcHvm2eHiktp14yxD2nNTeyiIyxUWPbq5S');
INSERT INTO `position` VALUES (5001, 0, 0, '', '', '', '', '', '');
INSERT INTO `position` VALUES (5002, 203, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5003, 204, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5004, 204, 13, '0|5|2', '0|4|5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|4', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5005, 205, 10, '6|2', '0|3|2|4', '问号问号问号\n我和违法文化', '0|5|6', '论坛论坛论坛', '大会上问问');
INSERT INTO `position` VALUES (5006, 206, 104, '0|2|5', '0', '44XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXX4X4XXX4XXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで44\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|4|5', '4XXXXXX4Xを使った設計/開発経験（●年経験）\nXXXXX4XXの業界4でのXXX経験', 'XXXXXXXを44った設計444/開発経験（●年経験）\nXXXXXX44Xの業界でのXXX経験');
INSERT INTO `position` VALUES (5007, 206, 44, '0|3|5', '0|3', 'XXXXXXXXを行なって44いる企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜444工程＞4\nXXXX〜X444XXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|6', 'XXXXXXX444を使った設計/開発経験（●年経験）\nXXXXXXXの業界4でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの444444業界でのXXX経験');
INSERT INTO `position` VALUES (5008, 207, 66, '0|3|6', '0|4', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|1|3', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5009, 207, 106, '0|2', '5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|6', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5010, 208, 66, 'システムエンジニア|ネットワークエンジニア|PM/PL/コンサル', '計画調査|実装/構築', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |ASP       |Perl      ', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5011, 209, 66, 'システムエンジニア|ネットワークエンジニア|PM/PL/コンサル', '計画調査|実装/構築', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |ASP       |Perl      ', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5012, 210, 66, 'システムエンジニア|ネットワークエンジニア|PM/PL/コンサル', '計画調査|実装/構築', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |ASP       |Perl      ', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5013, 211, 66, 'システムエンジニア|ネットワークエンジニア|PM/PL/コンサル', '計画調査|実装/構築', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |ASP       |Perl      ', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5014, 211, 106, 'システムエンジニア|Webエンジニア', 'テスト', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |PHP       |JavaScript', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5015, 212, 66, 'システムエンジニア|ネットワークエンジニア|PM/PL/コンサル', '計画調査|実装/構築', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |ASP       |Perl      ', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5016, 212, 106, 'システムエンジニア|Webエンジニア', 'テスト', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |PHP       |JavaScript', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5017, 213, 66, 'システムエンジニア|ネットワークエンジニア|PM/PL/コンサル', '計画調査|実装/構築', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |ASP       |Perl      ', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5018, 213, 106, 'システムエンジニア|Webエンジニア', 'テスト', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |PHP       |JavaScript', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5019, 214, 66, 'システムエンジニア|ネットワークエンジニア|PM/PL/コンサル', '計画調査|実装/構築', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |ASP       |Perl      ', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5020, 214, 106, 'システムエンジニア|Webエンジニア', 'テスト', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', 'Java      |PHP       |JavaScript', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5021, 215, 66, '0|3|6', '0|4', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|1|3', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5022, 215, 106, '0|2', '5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|6', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5023, 216, 66, '0|3|6', '0|4', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|1|3', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5024, 216, 106, '0|2', '5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|6', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5025, 217, 66, '0|3|6', '0|4', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|1|3', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5026, 217, 106, '0|2', '5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|6', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5027, 218, 66, '0|3|6', '0|4', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|1|3', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5028, 218, 106, '0|2', '5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|6', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5029, 219, 66, NULL, NULL, NULL, NULL, 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5030, 219, 106, NULL, NULL, NULL, NULL, 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5031, 220, 66, '0|3|6', '0|4', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|1|3', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5032, 220, 106, '0|2', '5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|6', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5033, 221, 66, '0|3|6', '0|4', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体666的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|1|3', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXX666Xの業界でのXXX経験', 'XXXXXXX666を使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5034, 221, 106, '0|2', '5', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工6程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0|2|6', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXX6の業界でのXXX経験');
INSERT INTO `position` VALUES (5035, 222, 1, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5036, 222, 2, '0|3', '0', '324', '0|5', '555', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');
INSERT INTO `position` VALUES (5037, 222, 3, '0', '0|4|6|2|3|5', '123', '0', '321', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXのdd業界でのXXX経験');
INSERT INTO `position` VALUES (5038, 223, 10, '0', '0', 'XXXXXXXXを行なっている企業にて、XXXX案件に携わっていただきます。\n具体的な業務としてXXXXXXXXXXXXXXXXXXXです。\n＜作業工程＞\nXXXX〜XXXXXまで\n＜開発環境＞\nXXXXXXXXXXXXXXX\nご興味を持って頂いた方はぜひ一度お話しましょう！\n「応募する」を押して頂くと、ダイレクトメッセージができますので、\nお待ちしております！', '0', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験', 'XXXXXXXを使った設計/開発経験（●年経験）\nXXXXXXXの業界でのXXX経験');

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
  `status` int(255) NULL DEFAULT 0 COMMENT '结束标志',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 224 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES (4, 167, '自社iOSアプリ開発', '20190528', '20190528', 'iOSアプリ開発', '0', '1', '2|6|4|3', '1', '0', 0);
INSERT INTO `project` VALUES (5, 154, 'サーバー構築', '20190517', '20190517', 'サーバー構築', '0|1|5', '2', '3', '0', '1', 0);
INSERT INTO `project` VALUES (6, 44, 'Javaアプリケーション開発', '20181217', '20181217', 'システム開発', '6|4', '0', '1', '1', '2', 0);
INSERT INTO `project` VALUES (7, 50, '運輸業向けのシステム再編プロジェクトのPMO', '20181203', '20181203', 'プロジェクトの管理', '0|1|5', '0', '1', '0', '3', 0);
INSERT INTO `project` VALUES (8, 45, 'スマートフォンゲームのサーバサイド開発と運用', '20181203', '20181203', '備考をご参照ください', '0|1|7', '0', '1', '1', '1', 0);
INSERT INTO `project` VALUES (9, 38, 'PHP／MySQL ドラッグストアー会員サイトの追加開発', '20181203', '20181203', '会員サイトの追加開発業務', '5|3|9', '3', '4', '2', '2', 0);
INSERT INTO `project` VALUES (10, 23, '大型通信機器（シエナ製）保守・メンテナンス', '20181203', '20181203', 'ハードウェア保守', '0|1|5', '4', '5', '1', '3', 0);
INSERT INTO `project` VALUES (11, 142, 'Perlを使ったWebポータル・コーポレートサイト開発', '20180803', '20180803', '開発業務', '0|4|5', '0', '1', '12', '2', 0);
INSERT INTO `project` VALUES (12, 133, 'SNSサイトの開発保守', '20180128', '20180128', 'ネットサービス（SNSサイト）の開発保守', '0|1|5', '5', '6', '2', '4', 0);
INSERT INTO `project` VALUES (13, 130, 'OraclePL/SQLを使ったWindows系案件', '20180101', '20180101', '製薬会社様向けCRM導入支援', '7|2|5|1', '6', '7', '1', '5', 0);
INSERT INTO `project` VALUES (14, 126, 'Webサイト/ポータルサイト開発（PHP）', '20170930', '20170930', 'SMB向け予約受付サイトや ポータルサイトの開発', '5', '7', '8', '1', '6', 0);
INSERT INTO `project` VALUES (15, 118, 'インテグレーション設計・構築・試験', '20170925', '20170925', 'インテグレーション案件の設計から構築、テストまで', '0|1|5', '6', '7', '2', '5', 0);
INSERT INTO `project` VALUES (16, 117, '食品卸向けシステム開発', '20170925', '20170925', '食品会社でデータフォーマット変換やマスターデータを検索するシステムの設計から開発まで', '4', '8', '9', '1', '7', 0);
INSERT INTO `project` VALUES (17, 115, 'ソーシャルゲーム開発', '20170920', '20170920', 'PC向けソーシャルゲームおよびオンラインゲームの開発', '0|1|5', '9', '10', '2', '8', 0);
INSERT INTO `project` VALUES (18, 109, '銀行向けフレームワーク開発業務', '20170601', '20170601', '既存システムのフレームワーク開発となります', '0', '0', '1', '1', '2', 0);
INSERT INTO `project` VALUES (19, 104, 'BtoB向けECサイトAPI開発', '20170526', '20170526', 'BtoB向けECサイトAPI開発', '6', '10', '11', '1', '9', 0);
INSERT INTO `project` VALUES (20, 102, '上流から参画可能★業務系システム開発', '20170525', '20170525', 'Javaにて、生産管理システム開発の、要件定義以降などを担当', '0|1|9', '11', '12', '1', '4', 0);
INSERT INTO `project` VALUES (21, 91, 'Rubyによる製薬会社向け管理システム運用保守/追加開発', '20170305', '20170305', 'Rubyで販売、生産管理システムの追加開発及び運用 、BtoCサイトの追加開発及び運用保守', '5', '12', '13', '1', '8', 0);
INSERT INTO `project` VALUES (22, 82, '汎用機系の運用', '20170225', '20170225', '銀行システムの保守になります。年齢は問いません。', '0|1|5', '13', '14', '1', '7', 0);
INSERT INTO `project` VALUES (23, 66, 'サーバ設計・構築作業', '20161025', '20161025', 'サーバ設計', '1|8', '10', '11', '1', '9', 0);
INSERT INTO `project` VALUES (24, 63, '業務基幹システムの構築（リプレース）', '20161010', '20161010', '詳細設計およびコーディング', '0|2|4', '14', '15', '0', '4', 0);
INSERT INTO `project` VALUES (25, 54, '法人向けSNS自社サービス開発案件', '20160906', '20160906', 'PHPを用いてWebアプリケーション側の開発', '0|1|5', '15', '16', '1', '7', 0);
INSERT INTO `project` VALUES (26, 52, 'DRシステムの保守・開発', '20160830', '20160830', 'DRシステムの保守・開発', '6|1|5', '0', '1', '1', '4', 0);
INSERT INTO `project` VALUES (27, 51, 'パッケージ改定案件　オープン・ＷＥＢ系', '20160830', '20160830', 'パッケージ改定案件　オープン・ＷＥＢ系', '0|1|5', '7', '8', '1', '6', 0);
INSERT INTO `project` VALUES (28, 47, 'オラクルデータベースのバージョンアップ', '20160805', '20160805', 'オラクルデータベースのバージョンアップ', '0|1|3', '0', '1', '1', '3', 0);
INSERT INTO `project` VALUES (29, 46, '.netによるウェブシステム', '20160805', '20160805', 'ウェブシステムの開発及び保守', '0|1|5', '10', '11', '1', '9', 0);
INSERT INTO `project` VALUES (30, 42, 'オラクル導入コンサル', '20160626', '20160626', 'オラクル8からのバージョンアップ', '0|1|5', '6', '7', '1', '5', 0);
INSERT INTO `project` VALUES (53, 167, 'bbb', '20190902', '20190911', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0', 0);
INSERT INTO `project` VALUES (54, 167, 'ttttt', '20190803', '20190903', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0', 0);
INSERT INTO `project` VALUES (55, 167, 'test', '20190810', '20190811', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0', 0);
INSERT INTO `project` VALUES (101, 173, '4IHdUty00dhMMN28f5fKI4XLTEc7fg', '20190127', '20170811', '8', '4', '8', '8', '1', '7', 0);
INSERT INTO `project` VALUES (102, 171, 'qaRpJPQ4tJDEprzUAu5JPQ0UUiLQyN', '20190128', '20170807', '6', '5', '7', '6', '1', '2', 0);
INSERT INTO `project` VALUES (103, 169, '5DKtybbPoFD9LzpGak6UkD9GgN0XH2', '20190103', '20170815', '6', '5', '1', '1', '0', '4', 0);
INSERT INTO `project` VALUES (104, 167, '22ThLuNuXBcYJ44n2DEMklEHv9kNpz', '20190117', '20170801', '7', '5', '1', '4', '0', '4', 0);
INSERT INTO `project` VALUES (147, 177, 'CYyZ91jEY4RNYoHx3z5NLK44bj9ZVB', '20190122', '20170810', '8', '6', '5', '6', '1', '2', 0);
INSERT INTO `project` VALUES (148, 175, 'DNMvNoklFpspCK5o2e48a2JtXJ8RsH', '20190113', '20170801', '6', '2', '7', '8', '1', '3', 0);
INSERT INTO `project` VALUES (149, 175, 'P073unWsJACoN2PLLDcYEqT38Pr9zS', '20190127', '20170820', '4', '7', '6', '1', '0', '8', 0);
INSERT INTO `project` VALUES (150, 172, 'GAbzQqdMIaBp6gAmjhD5f5X20FWKYN', '20190104', '20170822', '1', '6', '3', '4', '1', '7', 0);
INSERT INTO `project` VALUES (151, 167, 'MfCijyn8JcMEjZD4Kni8LTSx4RScSJ', '20190119', '20170830', '6', '4', '7', '4', '0', '3', 0);
INSERT INTO `project` VALUES (197, 171, 'uQWMOFruBLdablKMoqtTCdjaAPaOT2', '20190124', '20170803', '2', '6', '1', '3', '1', '8', 0);
INSERT INTO `project` VALUES (198, 167, 'ztJrL7vaySnriZIRRr6L9pcbJXZMul', '20190125', '20170820', '6', '5', '8', '5', '1', '6', 0);
INSERT INTO `project` VALUES (199, 171, 'cPyl5pLQoFZtllvFJQsiyijqNb9A6f', '20190117', '20170813', '4', '3', '4', '8', '0', '0', 0);
INSERT INTO `project` VALUES (200, 173, 'v8HuGV1PC5guSJNj4pIYeqLTJg9NSH', '20190124', '20170828', '0', '6', '8', '5', '1', '7', 0);
INSERT INTO `project` VALUES (203, 167, 'test in homecomp', '20190821', '20190823', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0', 0);
INSERT INTO `project` VALUES (204, 167, 'test', '20190821', '20190823', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0', 0);
INSERT INTO `project` VALUES (205, 167, 'newproj', '20190901', '20190918', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '4|3', '0|2', '0|2|4', '1', '0|4', 0);
INSERT INTO `project` VALUES (206, 174, 'test4', '20190815', '20190919', 'こちらの案件はXXXXXXX向けた開発案件です。4\n特徴としましてはXXXXXX。4\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力4\n・チームの特徴、魅力4\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング44', '0', '0|5|2', '0|4|6', '1', '0|2|4', 0);
INSERT INTO `project` VALUES (222, 178, 'ok', '20190815', '20190815', 'test', '0', '0|4', '0', '2', '0|4|2|5', 0);
INSERT INTO `project` VALUES (223, 186, 'test', '20190920', '20190928', 'こちらの案件はXXXXXXX向けた開発案件です。\n特徴としましてはXXXXXX。\n＜特徴記載例＞\n・案件/言語のユニーク性\n・案件が取り巻く業界の特徴、魅力\n・チームの特徴、魅力\n・働く条件や環境の魅力\n・フリーランスのキャリアアップに繋がるメッセージング', '0', '0', '0', '0', '0', 0);

-- ----------------------------
-- View structure for v_apply
-- ----------------------------
DROP VIEW IF EXISTS `v_apply`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `v_apply` AS select `f`.`id` AS `apply_id`,`f`.`cid` AS `user_id`,`p`.`pid` AS `proj_id`,`po`.`id` AS `pos_id`,`p`.`proj_name` AS `proj_name`,`po`.`proj_role` AS `proj_role` from ((`apply` `f` join `project` `p`) join `position` `po`) where ((`f`.`pid` = `po`.`id`) and (`po`.`pid` = `p`.`id`));

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
-- Procedure structure for PROC_ADD_APPLY
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_ADD_APPLY`;
delimiter ;;
CREATE PROCEDURE `PROC_ADD_APPLY`(IN `data` varchar(10000))
BEGIN

	DECLARE cid         BIGINT UNSIGNED;
	DECLARE pid         BIGINT UNSIGNED;
	DECLARE apply_date  BIGINT UNSIGNED;
	DECLARE count       BIGINT UNSIGNED;
	
	DECLARE json_items  BIGINT UNSIGNED;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;
	
	
	set cid        = CONVERT(JSON_EXTRACT(data, '$.cid'),UNSIGNED);
	set pid        = CONVERT(JSON_EXTRACT(data, '$.pid'),UNSIGNED);
	set apply_date = CONVERT(JSON_EXTRACT(data, '$.apply_date'),UNSIGNED);
	
	
-- 	call DEBUG_MSG(true,CONCAT(cid,''));
-- 	call DEBUG_MSG(true,CONCAT(pid,''));
	
	select count(*) into count  from apply c where c.cid=cid and c.pid =pid;
	
	if count >= 1 then 
		select e.err_code,e.err_name from error e where e.err_code =1; 
	else
		insert into apply(cid,pid,apply_date) values(cid,pid,apply_date);
		commit;
		select e.err_code,e.err_name from error e where e.err_code =0;
	end if;
	
	
-- 	select e.err_code,e.err_name,pid as id from error e where e.err_code =0;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_ADD_FAV
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_ADD_FAV`;
delimiter ;;
CREATE PROCEDURE `PROC_ADD_FAV`(IN `data` varchar(10000))
BEGIN

	DECLARE cid         BIGINT UNSIGNED;
	DECLARE pid         BIGINT UNSIGNED;
	DECLARE fav_date    BIGINT UNSIGNED;
	DECLARE count       BIGINT UNSIGNED;
	
	DECLARE json_items  BIGINT UNSIGNED;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;
	
	set cid        = CONVERT(JSON_EXTRACT(data, '$.cid'),UNSIGNED);
	set pid        = CONVERT(JSON_EXTRACT(data, '$.pid'),UNSIGNED);
	set fav_date   = CONVERT(JSON_EXTRACT(data, '$.fav_date'),UNSIGNED);
	
	select count(*) into count  from fav c where c.cid=cid and c.pid =pid;
	
	if count >= 1 then 
		select e.err_code,e.err_name from error e where e.err_code =1; 
	else
		insert into fav(cid,pid,fav_date) values(cid,pid,fav_date);
		commit;
		select e.err_code,e.err_name from error e where e.err_code =0;
	end if;
	
	
-- 	select e.err_code,e.err_name,pid as id from error e where e.err_code =0;
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
-- Procedure structure for PROC_CANCEL_FAV
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CANCEL_FAV`;
delimiter ;;
CREATE PROCEDURE `PROC_CANCEL_FAV`(IN `data` varchar(1000))
BEGIN
	DECLARE fid       BIGINT UNSIGNED;
	DECLARE uid      BIGINT UNSIGNED;
	
	set fid   = CONVERT(JSON_EXTRACT(data,'$.id'),UNSIGNED);
	set uid  = CONVERT(JSON_EXTRACT(data,'$.uid'),UNSIGNED);
	
	DELETE FROM fav  WHERE id = fid;
	commit;
	
	select f.id, 
		po.id as sid,
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
	  fav f, project p, position po
	where 
	  f.pid = po.id and po.pid = p.id and f.cid = uid;
	

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_CHANGE_PROJ
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CHANGE_PROJ`;
delimiter ;;
CREATE PROCEDURE `PROC_CHANGE_PROJ`(IN `data` varchar(10000))
BEGIN

	DECLARE id          BIGINT UNSIGNED;
	DECLARE proj_name   varchar(100) default null;
	DECLARE proj_detl   varchar(500) default null;
  DECLARE date_from   varchar(100) default null;
  DECLARE date_to     varchar(100) default null;
  DECLARE proj_domn   varchar(100) default null;
  DECLARE proj_area   varchar(100) default null;
  DECLARE proj_pref   varchar(100) default null;
  DECLARE proj_targ   varchar(100) default null;
  DECLARE proj_styl   varchar(100) default null;
  DECLARE pos         varchar(5000) default null;
	
  DECLARE cid         varchar(100) default null;
  DECLARE proj_mony   varchar(100) default null;
  DECLARE proj_role   varchar(100) default null;
  DECLARE proj_resp   varchar(100) default null;
  DECLARE proj_lang   varchar(100) default null;
  DECLARE proj_cont   varchar(500) default null;
  DECLARE reqr_exp    varchar(100) default null;
  DECLARE pref_exp    varchar(100) default null;
	
	DECLARE json_items  BIGINT UNSIGNED ;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;
	DECLARE tmp         int;
  DECLARE ret         varchar(10000) default null;
	
	set id       = CONVERT(JSON_EXTRACT(data, '$.id'),UNSIGNED);
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

	UPDATE project e
	SET       
	    proj_name =proj_name,
		  proj_detl =proj_detl,
			proj_domn =proj_domn,
			date_from =date_from,
			date_to   =date_to  ,
			proj_area =proj_area,
			proj_pref =proj_pref,
			proj_targ =proj_targ,
			proj_styl =proj_styl
			
	WHERE e.id=id;
	
	set json_items = JSON_LENGTH(pos);
	while `_index` < `json_items` do
		set id = CONVERT(json_extract(`pos`, concat('$[', `_index`, '].id')),UNSIGNED);
		set proj_mony = CONVERT(json_extract(`pos`, concat('$[', `_index`,'].proj_mony')),UNSIGNED);
	  set proj_role = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_role')));
	  set proj_resp = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_resp')));
	  set proj_lang = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_lang')));
	  set proj_cont = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].proj_cont')));
	  set reqr_exp  = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].reqr_exp')));
	  set pref_exp  = JSON_UNQUOTE(json_extract(`pos`, concat('$[', `_index`, '].pref_exp')));
		
    UPDATE position e 
		SET proj_mony = proj_mony,
				proj_role = proj_role,
				proj_resp = proj_resp,
				proj_lang = proj_lang,
				proj_cont = proj_cont,
				reqr_exp  = reqr_exp ,
				pref_exp  = pref_exp 
		where e.id=id;
		
				
		set `_index` := `_index` + 1;
	end while;
	
	commit;
	
	select e.err_code,e.err_name from error e where e.err_code =0; 
	
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
-- 	call debug_msg(true,cid);
	select f.id, 
	  po.id as sid,
		p.pid, 
		p.proj_name,
		p.date_from,
		p.date_to,
		p.proj_domn,
		p.proj_detl,
		p.proj_domn,
		p.proj_area,
		p.proj_pref,
		f.status
	from 
	  apply f,  project p , position po
	where 
	  f.pid = po.id and po.pid = p.id and f.cid = cid;
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
		po.id as sid,
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
	  fav f, project p, position po
	where 
	  f.pid = po.id and po.pid = p.id and f.cid = cid;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_POS_DETAIL
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_POS_DETAIL`;
delimiter ;;
CREATE PROCEDURE `PROC_POS_DETAIL`(IN `data` varchar(1000))
BEGIN


	DECLARE cid   BIGINT UNSIGNED;
	set cid  = CONVERT(JSON_EXTRACT(data, '$.id'),UNSIGNED);
-- 		call debug_msg(true,cid);
	
	
	select f.id, 
		p.pid, 
		po.id as sid,
		p.proj_name,
		p.date_from,
		p.date_to,
		p.proj_domn,
		p.proj_detl,
		p.proj_domn,
		p.proj_area,
		p.proj_pref,
		p.proj_targ,
		p.proj_styl,
	  po.id as sid,
		po.proj_mony,
		po.proj_role,
		po.proj_resp,
		po.proj_lang,
		po.proj_cont,
		po.reqr_exp,
		po.pref_exp
	from 
	  apply f,  project p , position po
	where 
	  f.pid = po.id and po.pid = p.id  and po.id = cid;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_QUERY_MSG
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_QUERY_MSG`;
delimiter ;;
CREATE PROCEDURE `PROC_QUERY_MSG`(IN `data` varchar(200))
BEGIN

	DECLARE cid BIGINT UNSIGNED;
	set cid  = CONVERT(JSON_EXTRACT(data, '$.id'),UNSIGNED);
	
  SELECT
		msg.msg_from,
		msg.msg_to,
		msg.apply_id,
		msg.msg_time,
		msg.msg_cnt,
		msg.msg_type
	FROM
	msg
	WHERE 
	msg.apply_id = cid;
	
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
	set phone     = CONVERT(JSON_EXTRACT(data,'$.phone'),UNSIGNED);

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
-- Procedure structure for PROC_SAVE_COMP
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_SAVE_COMP`;
delimiter ;;
CREATE PROCEDURE `PROC_SAVE_COMP`(IN `data` varchar(10000))
BEGIN

	DECLARE pid         BIGINT UNSIGNED;
	DECLARE email       varchar(100) default null;
	DECLARE pwd         varchar(100) default null;
	DECLARE name_kj     varchar(100) default null;
	DECLARE name_kn     varchar(100) default null;
	DECLARE phone       varchar(100) default null;
	DECLARE name_comp   varchar(100) default null;
	DECLARE name_dept   varchar(100) default null;
  DECLARE ret         varchar(10000) default null;
	
	set pid       = JSON_UNQUOTE(JSON_EXTRACT(data,'$.id'));
	set email     = JSON_UNQUOTE(JSON_EXTRACT(data,'$.email'));
	set pwd       = JSON_UNQUOTE(JSON_EXTRACT(data,'$.pwd'));
	set name_kj   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kj'));
	set name_kn   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_kn'));
	set phone     = CONVERT(JSON_EXTRACT(data,'$.phone'),UNSIGNED);
	set name_comp = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_comp'));
	set name_dept = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name_dept'));
	
	UPDATE account e
	SET email   = email,
	    pwd     = pwd,
		  name_kj = name_kj,
			name_kn = name_kn,
			phone   = phone,
			name_comp=name_comp,
			name_dept=name_dept
			
	WHERE e.id=pid;
	
	commit;
	
	select e.err_code,e.err_name from error e where e.err_code =0; 
	
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
-- Procedure structure for PROC_SEND_MSG
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_SEND_MSG`;
delimiter ;;
CREATE PROCEDURE `PROC_SEND_MSG`(IN `data` varchar(1000))
BEGIN


	DECLARE cid      BIGINT UNSIGNED;
	DECLARE app_id   BIGINT UNSIGNED;
	DECLARE user_id  BIGINT UNSIGNED;
	DECLARE proj_id  BIGINT UNSIGNED;
	DECLARE pos_id   BIGINT UNSIGNED;
	
	DECLARE type     BIGINT UNSIGNED;
	DECLARE proj_name  varchar(255) default null;
	DECLARE proj_role  varchar(255) default null;
	DECLARE msg_time   varchar(20)  default null;
	
	DECLARE msg   varchar(1000) default null;
	
	set cid  = CONVERT(JSON_EXTRACT(data, '$.id'),UNSIGNED);
	set type = CONVERT(JSON_EXTRACT(data, '$.type'),UNSIGNED);
	set msg  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.msg'));
	set msg_time = JSON_UNQUOTE(JSON_EXTRACT(data,'$.time'));
-- 		call debug_msg(true,cid);

  select 
    f.id, 
	  f.cid,
		p.pid, 
		po.id,
		p.proj_name,
		po.proj_role
	into 
		app_id,user_id,proj_id,pos_id,proj_name,proj_role
	from 
	  apply f,  project p , position po
	where 
	  f.pid = po.id and po.pid = p.id and f.id = cid;
		
	if type=0 then
		insert into msg (`msg_from`,`msg_to`,`apply_id`,`msg_time`,`msg_cnt`,`msg_type`)
		values(user_id,proj_id,app_id,msg_time,msg,type);
	else
		insert into msg (`msg_from`,`msg_to`,`apply_id`,`msg_time`,`msg_cnt`,`msg_type`)
		values(proj_id,user_id,app_id,msg_time,msg,type);
	end if;
	
	commit;
	
	SELECT
		msg.msg_from,
		msg.msg_to,
		msg.apply_id,
		msg.msg_time,
		msg.msg_cnt,
		msg.msg_type
	FROM
	msg
	WHERE 
	msg.apply_id = cid; 
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_STATUS_APPLY
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_STATUS_APPLY`;
delimiter ;;
CREATE PROCEDURE `PROC_STATUS_APPLY`(IN `data` varchar(1000))
BEGIN
	DECLARE id       BIGINT UNSIGNED;
	DECLARE uid      BIGINT UNSIGNED;
	DECLARE stat     BIGINT UNSIGNED;
	
	set id   = CONVERT(JSON_EXTRACT(data,'$.id'),UNSIGNED);
	set uid  = CONVERT(JSON_EXTRACT(data,'$.uid'),UNSIGNED);
	set stat = CONVERT(JSON_EXTRACT(data,'$.status'),UNSIGNED);
	
	update apply a set a.status = stat where a.id =id;
	commit;
	
	select f.id, 
	  po.id as sid,
		p.pid, 
		p.proj_name,
		p.date_from,
		p.date_to,
		p.proj_domn,
		p.proj_detl,
		p.proj_domn,
		p.proj_area,
		p.proj_pref,
		f.status
	from 
	  apply f,  project p , position po
	where 
	  f.pid = po.id and po.pid = p.id and f.cid = uid;

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
