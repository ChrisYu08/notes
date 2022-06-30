1. CRUD
```sql
UPDATE student SET email = UPPER(email)
INSERT INTO student(name) VALUES('wang5')
DELETE FROM Person WHERE LastName = 'Wilson' 
SELECT * FROM score
```

1. ASC, DESC
```sql
SELECT * FROM score
ORDER BY course_id ASC,grade DESC;
```
3. 模糊查询
```sql
SELECT * FROM student
WHERE name LIKE '郭%' OR '刘_'
```
4. 分页
```sql
SELECT id,name,city
FROM student
limit 3,3           -- 第一个是索引，第二个是几个
```

5. 分组
```sql
SELECT student_id,avg(grade) -- 列名,查询表达式
FROM score --表明
WHERE LastName = 'Wilson'--条数
GROUP BY student_id  -- 分组字段
HAVING  --分组后的过滤条件
ORDER BY ASC -- 列名 [ASC, DESC]
limit 3,3           -- (偏移量，条数)第一个是索引，第二个是几个
```

* example
  <!-- 查询年龄大雨平均年龄的学生 -->
```sql
  SELECT * FROM student
  WHERE age > (SELECT AVG(age) FROM student);


-- 查询有成绩的
  -- 性能比较低
  SELECT * FROM student
  WHERE id not in(SELECT student_id from score);
  -- 性能比较高
  -- exists not exists
  SELECT * FROM student
  WHERE EXISTS (SELECT * from score where score.student_id = student_id);

```

6. 表连接
```sql
-- 查询学生姓名和学生的分数 表连接
-- 内连接
SELECT * FROM student INNER JOIN score ON student.id = score.student_id

SELECT * FROM student I
WHERE student.id = score.student_id
-- 左外连接 LEFT JOIN
--右外连接 RIGHT JOIN
--外连接

```

7. 事务transaction
```sql
-- autocommit默认是1

select * from account;
BEGIN;
UPDATE account SET balance=balance-10 WHERE name='张三';
UPDATE account SET balance=balance+10 WHERE name='李四';
COMMIT;
ROLLBACK;

```

8. 锁

### 从对数据库操作的类型分，分为读锁和写锁
* 读锁（共享锁）：针对统一份数据，多个读操作可以同事进行儿不会互相影响
* 写锁（排他锁）：当前写操作没有完成前，它会阻断其他写锁和读锁

### 从对数据操作的颗粒度分为
* 表锁
* 行锁

```sql



```
