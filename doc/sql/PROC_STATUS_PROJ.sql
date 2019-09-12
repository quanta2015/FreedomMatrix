CREATE DEFINER=`root`@`%` PROCEDURE `PROC_STATUS_PROJ`(IN `data` varchar(1000))
BEGIN
	DECLARE id       BIGINT UNSIGNED;
	DECLARE stat     BIGINT UNSIGNED;
	
	set id   = CONVERT(JSON_EXTRACT(data,'$.id'),UNSIGNED);
	set stat = CONVERT(JSON_EXTRACT(data,'$.status'),UNSIGNED);
	update project p set p.status = stat where p.id = id;
	commit;
    update apply a set a.status = 3 where a.status = 0 and a.pid in (select pos.id from position pos where pos.pid = id);
	commit;
	select p.id,
		p.status
	from 
	    project p
	where 
	    p.id = id;

END