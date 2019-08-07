CREATE DEFINER=`root`@`%` PROCEDURE `PROC_REG_COMP`(IN `data` varchar(10000))
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