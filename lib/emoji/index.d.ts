/**
 * 识别emoji的正则
 * @param {string} modifier 正则修饰符，比如： 'g'
 * @returns 一段正则。
 *
 * const reg1 = getRegExpEmoji(); // 正则：/\p{emoji}/
 * reg1.test('😊'); // true
 *
 * const reg2 = getRegExpEmoji('g'); // 正则：/\p{emoji}/g
 * '😊😊😊'.match(reg2); // ['😊', '😊', '😊']
 */
declare const getRegExpEmoji: (modifier?: string) => RegExp;
/**
 * 判断一段字符串中是否有emoji
 *
 * @param {string} str 需要检查的字符串
 * @returns boolean 是否有emoji,true: 有，false: 没有
 *
 * hasEmoji('123123123'); // false
 * hasEmoji('12312🇭🇰3123'); // true
 */
declare const hasEmoji: (str: string) => boolean;
/**
 * 匹配一段字符串中的emoji
 * @param {string} str 需要匹配的字符串；
 * @param {string} modifier  new RegExp的修饰符，传g的话就会匹配所有的emoji出来，不传的话只会匹配一个
 * @returns 匹配中的emoji。
 *
 * matchEmoji('123123123'); // null
 *
 * matchEmoji('12312🇭🇰3123'); // ['🇭🇰']
 *
 * matchEmoji('12312🇭🇰31🇭🇰23', 'g'); // ['🇭🇰', '🇭🇰']
 */
declare const matchEmoji: (str: string, modifier?: string) => RegExpMatchArray;
export { getRegExpEmoji, hasEmoji, matchEmoji, };
