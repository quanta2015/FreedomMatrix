CREATE DEFINER=`root`@`%` PROCEDURE `PROC_CHANGE_PROJ`(IN `data` varchar(10000))
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