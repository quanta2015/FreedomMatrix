CREATE DEFINER=`root`@`%` PROCEDURE `PROC_REG_USER`(IN `data` varchar(10000))
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
	DECLARE exp         varchar(5000) default null;
	DECLARE json_items  BIGINT UNSIGNED ;
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