---	
author: sakamoto	
categorys: [javascript]	
tags: [进制转换]	
date: 2019/05/05	
title: javascript的进制转换-2进制、8进制、10进制、16进制互相转换	
excerpt: javascript的进制转换-2进制、8进制、10进制、16进制互相转换的一些方法与技巧	
---	

## 10进制转其他进制	
``` javascript	
// 10进制转其他进制	
var x = 110	
console.log(x.toString(8))	
console.log(x.toString(2))	
console.log(x.toString(16))	
```	

## 其他进制转10进制	

``` javascript	
// 其他进制转10进制	
var x = '110'	
console.log(parseInt(`${x}`, 2))  // 110此时是2进制数字符串	
console.log(parseInt(`${x}`, 8))  // 110此时是8进制数字符串	
console.log(parseInt(`${x}`, 16)) // 110此时是16进制数字符串	
```	
<ZanShang />