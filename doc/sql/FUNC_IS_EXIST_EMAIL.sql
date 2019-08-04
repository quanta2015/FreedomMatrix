CREATE DEFINER=`root`@`%` FUNCTION `FUNC_IS_EXIST_EMAIL`(`email` varchar(100)) RETURNS int(11)
BEGIN
	DECLARE count BIGINT UNSIGNED ;
	
	select count(email) into count from account a where a.email = email;
	
	if count>0 then 
		return 1;
	else
		return 0;
	end if;
	
END