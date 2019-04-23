---
author: sakamoto
categorys: [数据库]
tags: [mysql]
date: 2019/04/24
title: 在 linux 上安装 mysql(5.7.25版本)后初始化密码。
excerpt: 这个问题网上有很多文章，提供了很多种解法，但大部分都是不能用的，极有可能是版本的问题，由于我没在这方面研究很深，也没有深究，下面只是提供一个可行的方法。
---
使用 `sudo apt install mysql-server` 方法安装的 MySQL 服务，安装之后没有临时密码的日志，想着直接修改root密码，但是尝试了很多网上的方法，但是都无法生效，包括
- `mysqld-safe --skip-grant-tables` 启动服务，然后修改密码
- `mysql_secure_installation` 命令引导修改密码
- `mysqladmin` 命令

最后终于找到一个正确修改root密码的方法，记录如下：

## 环境
- linux
- mysql 5.7.25版本

## 方法

### 1. 输出安装时自动生成的 `debian.cnf` 文件内容

```bash
$ sudo cat /etc/mysql/debian.cnf
```

### 2. 使用文件中的 user 段的 `debian-sys-maint` 用户进行登录

```bash
$ mysql -udebian-sys-maint -p
Enter password: // 这里输入上面文件内的password段的值
```

### 3. 修改root用户的插件和密码

> 此处一定要记得改plugin的值为 `mysql_native_password`

```bash
mysql> UPDATE mysql.user SET plugin="mysql_native_password", authentication_string=PASSWORD("password") WHERE user="root";
```
如果上一步骤中出现密码过于简单无法修改的情况，可以先将 `validate_password_policy` 的值设置为0或者LOW。

```bash
mysql> SET GLOBAL validate_password_policy=0;
```
### 4. 重启mysql就可以使用新设置的密码进行登录了
```bash
sudo service mysql restart
```
