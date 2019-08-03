-- ----------------------------
-- Procedure structure for DEBUG_LOG
-- ----------------------------
CREATE DEFINER=`root`@`%` PROCEDURE `DEBUG_LOG`(msg VARCHAR(21812))
BEGIN
    insert into logtable select 0, msg;
END