-- ----------------------------
-- Procedure structure for DEBUG_MSG
-- ----------------------------
CREATE DEFINER=`root`@`%` PROCEDURE `DEBUG_MSG`(enabled INTEGER, msg VARCHAR(21812))
BEGIN
  IF enabled THEN BEGIN
    select concat("** ", msg) AS '** DEBUG:';
  END; END IF;
END