# 字符处理js库
1. 支持Emoji识别
2. 支持子素簇边界拆分（Grapheme Cluster Boundary）

### Emoji识别
提供了从一段字符串中识别emoji的函数，还提供了一个匹配emoji的正则表达式。它符合Unicode标准，是基于Unicode 15.0  [_Unicode® Technical Standard #51_](https://unicode.org/reports/tr51/)规则封装的。
它的大小只有3k。

### 子素簇边界拆分
用于对字符串进行字素簇的拆分，类似于js中的API Intl.Segmenter,但是它具有更好的兼容性。它符合Unicode标准，是基于Unicode [_unicode tr29:UNICODE TEXT SEGMENTATION_](https://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundary_Rules)开发的一种针对"用户感知字符"（字素簇）进行分割的方法。
它是一个纯静态的、无任何额外依赖的方法，体积很小，且不会有兼容性问题。
## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm i ant-character-js
```

识别Emoji

```js
import { hasEmoji, matchEmoji, getRegExpEmoji } from 'ant-character-js/lib/emoji.js'

// 判断一段字符串中是否有emoji
hasEmoji('123123123'); // false
hasEmoji('12312🇭🇰3123'); // true

// 匹配一段字符串中的emoji
matchEmoji('123123123'); // null
matchEmoji('12312🇭🇰3123'); // ['🇭🇰']
matchEmoji('12312🇭🇰31🇭🇰23', 'g'); // ['🇭🇰', '🇭🇰']

// 识别emoji的正则
const reg1 = getRegExpEmoji(); // 正则：/\p{emoji}/
reg1.test('😊'); // true
const reg2 = getRegExpEmoji('g'); // 正则：/\p{emoji}/g
'😊😊😊'.match(reg2); // ['😊', '😊', '😊']
```

子素簇边界拆分
```js
import { graphemeSplit } from 'ant-character-js/lib/grapheme.js'

graphemeSplit('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙'); // returns ["🧑🏼‍🦰", "❤️‍🩹", "🏄🏻‍♀️", "👨🏽‍🎤", "👩🏽‍🤝‍👨🏿", "🤙"]

graphemeSplit('Ĺo͂řȩm̅'); // returns ["Ĺ","o͂","ř","ȩ","m̅"]

graphemeSplit('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞'); // returns ["Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍","A̴̵̜̰͔ͫ͗͢","L̠ͨͧͩ͘","G̴̻͈͍͔̹̑͗̎̅͛́","Ǫ̵̹̻̝̳͂̌̌͘","!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞"]

// graphemeSubstr 提供针对一段字符串按照视觉长度 或者 逻辑长度进行截取的能力。
// 例子1：按照视觉长度截取一段emoji字符
graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4); // '❤️‍🩹🏄🏻‍♀️👨🏽‍🎤'
//    其中“1”表示 以视觉长度划分：从左开始第1个“视觉字符”（0是起始位置）
//    其中“4”表示 以视觉长度划分：从左开始第4个“视觉字符”

//    graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4)表示取第1-4个“视觉字符”的字符串'❤️‍🩹🏄🏻‍♀️👨🏽‍🎤'
// 例子2：按照视觉长度截取一段emoji字符，但是限制取出的字符的最大逻辑长度为13

graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4, 13) === '❤️‍🩹🏄🏻‍♀️'

//    其中“13”表示，取第1-4个“视觉字符”的字符串 同时限制取出的字符串的最大逻辑长度为13
//    例子1中 取出的'❤️‍🩹🏄🏻‍♀️👨🏽‍🎤'.length === 19, 19超过了13，所以会减掉最后一个字符👨🏽‍🎤

//    '👨🏽‍🎤'.length === 7, 所以最后取出的字符为'❤️‍🩹🏄🏻‍♀️'
//    如果'👨🏽‍🎤'.length === 5, 19 - 5 依旧大于13， 就会再减掉一个字符，以此类推。


```

## Emoji API
### getRegExpEmoji
| 属性 | 说明 | 类型 | 默认值 |
| ------------|---------|----|-----|
| modifier    | 正则修饰符，比如： 'g'| string | - | 
### hasEmoji
| 属性 | 说明 | 类型 | 默认值 |
| ------------|---------|----|-----|
| str    | 需要检查的字符串| string | - | 
### matchEmoji
| 属性 | 说明 | 类型 | 默认值 |
| ------------|---------|----|-----|
| str    | 需要匹配的字符串 | string | - | 
| modifier    | new RegExp的修饰符，传g的话就会匹配所有的emoji出来，不传的话只会匹配一个 | string | - | 

## Grapheme API
### graphemeSplit
| 属性 | 说明 | 类型 | 默认值 |
| ------------|---------|----|-----|
| str    |需要拆分的字符串| string | - | 

### graphemeSubstr
| 属性 | 说明 | 类型 | 默认值 |
| ------------|---------|----|-----|
| str    |需要拆分的字符串| string | - | 
| start    |开始位置(视觉长度)，必须大于0，且小于end| number | - | 
| end    |结束位置(视觉长度)，必须大于0，且大于start| number | - | 
| maxLength    |非必填，如填写了会限制输出的最大物理长度| number | - | 