/**
 * 用于对字符串进行字素簇的拆分，类似于API Intl.Segmenter
 *
 * 基于unicode tr29:UNICODE TEXT SEGMENTATION开发的一种字素簇拆分能力
 *
 * 字素簇：用户感知的字符，例如：🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙，用户感知就是6个“字符”。
 *
 * 本函数旨在将所有基础字符串按照“用户感知字符”（字符簇）进行边界拆分，以得到完整的“视觉字符”。
 *
 * 支持各种语言、音节、Emoji、特殊符号...的视觉拆分
 *
 *
 * graphemeSplit('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙'); // returns ["🧑🏼‍🦰", "❤️‍🩹", "🏄🏻‍♀️", "👨🏽‍🎤", "👩🏽‍🤝‍👨🏿", "🤙"]
 *
 * graphemeSplit('Ĺo͂řȩm̅'); // returns ["Ĺ","o͂","ř","ȩ","m̅"]
 *
 * graphemeSplit('뎌쉐'); // returns ["뎌","쉐"]
 *
 * graphemeSplit('अनुच्छेद'); // returns ["अ","नु","च्","छे","द"]
 *
 * graphemeSplit('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞'); // returns ["Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍","A̴̵̜̰͔ͫ͗͢","L̠ͨͧͩ͘","G̴̻͈͍͔̹̑͗̎̅͛́","Ǫ̵̹̻̝̳͂̌̌͘","!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞"]
 *
 *
 * @param {string} str 需要拆分的字符串
 * @returns 返回目标数组 string[]
 * graphemeSplit('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️') // return ['🧑🏼‍🦰','❤️‍🩹','🏄🏻‍♀️']
 */
declare const graphemeSplit: (str: string) => string[];
/**
 * 提供针对一段字符串按照视觉长度 或者 逻辑长度进行截取的能力。
 *
 * 例子1：按照视觉长度截取一段emoji字符，graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4) === '❤️‍🩹🏄🏻‍♀️👨🏽‍🎤'
 *
 *        其中“1”表示 以视觉长度划分：从左开始第1个“视觉字符”（0是起始位置）
 *        其中“4”表示 以视觉长度划分：从左开始第4个“视觉字符”
 *
 *        graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4)表示取第1-4个“视觉字符”的字符串'❤️‍🩹🏄🏻‍♀️👨🏽‍🎤'
 *
 * 例子2：按照视觉长度截取一段emoji字符，但是限制取出的字符的最大逻辑长度为13
 *
 *          graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4, 13) === '❤️‍🩹🏄🏻‍♀️'
 *
 *        其中“13”表示，取第1-4个“视觉字符”的字符串 同时限制取出的字符串的最大逻辑长度为13
 *        例子1中 取出的'❤️‍🩹🏄🏻‍♀️👨🏽‍🎤'.length === 19, 19超过了13，所以会减掉最后一个字符👨🏽‍🎤
 *
 *        '👨🏽‍🎤'.length === 7, 所以最后取出的字符为'❤️‍🩹🏄🏻‍♀️'
 *        如果'👨🏽‍🎤'.length === 5, 19 - 5 依旧大于13， 就会再减掉一个字符，以此类推。
 *
 * @param {string} str 字符串
 * @param {number} start 开始位置(视觉长度)，必须大于0，且小于end
 * @param {number} end 结束位置(视觉长度)，必须大于0，且大于start，graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4) === '❤️‍🩹🏄🏻‍♀️👨🏽‍🎤'
 * @param {number} maxLength 非必填，如填写了会限制输出的最大物理长度，如：graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤', 1, 4, 13) === '❤️‍🩹🏄🏻‍♀️'
 * @returns string 截取的字符串
 */
declare const graphemeSubstr: (str: string, start: number, end: number, maxLength?: number) => string;
export { graphemeSplit, graphemeSubstr, };
