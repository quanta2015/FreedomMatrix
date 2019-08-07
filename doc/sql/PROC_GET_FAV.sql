CREATE DEFINER=`root`@`%` PROCEDURE `PROC_GET_FAV`(IN `cid` int)
BEGIN
	select f.id, 
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
	  fav f, project p 
	where 
	  f.pid = p.id and f.cid = cid;
END