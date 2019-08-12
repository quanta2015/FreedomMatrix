CREATE DEFINER=`root`@`%` PROCEDURE `PROC_SAVE_COMP`(IN `data` varchar(10000))
BEGIN

	DECLARE pid         BIGINT UNSIGNED;
	DECLARE email       varchar(100) default null;
	DECLARE pwd         varchar(100) default null;
	DECLARE name_kj     varchar(100) default null;
	DECLARE name_kn     varchar(100) default null;
	DECLARE phone       varchar(100) default null;
	DECLARE name_comp   varchar(100) default null;
	DECLARE name_dept   varchar(100) default null;
	DECLARE _index      BIGINT UNSIGNED DEFAULT 0;
	DECLARE id          BIGINT UNSIGNED;
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