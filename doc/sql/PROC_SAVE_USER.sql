CREATE DEFINER=`root`@`%` PROCEDURE `PROC_SAVE_USER`(IN `data` varchar(10000))
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