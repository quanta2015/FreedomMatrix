CREATE DEFINER=`root`@`%` PROCEDURE `PROC_ADD_PROJ`(IN `data` varchar(10000))
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