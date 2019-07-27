
### [Err] 1055 - Expression #1 of ORDER BY clause is not in GROUP BY clausesql
```sql
show variables like "sql_mode";
set sql_mode='';
set sql_mode='NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES';
```

