/**
 * 字素簇截取、拆分
 * @module common/grapheme
 */
import { getGraphemeBreakProperty, UnicodeType } from './util';

const riArr = [
  '🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇴', '🇦🇶', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇧', '🇧🇩', '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭', '🇧🇮', '🇧🇯', '🇧🇱', '🇧🇲', '🇧🇳', '🇧🇴', '🇧🇶', '🇧🇷', '🇧🇸', '🇧🇹', '🇧🇻', '🇧🇼', '🇧🇾', '🇧🇿', '🇨🇦', '🇨🇨', '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳', '🇨🇴', '🇨🇵', '🇨🇷', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽', '🇨🇾', '🇨🇿', '🇩🇪', '🇩🇬', '🇩🇯', '🇩🇰', '🇩🇲', '🇩🇴', '🇩🇿', '🇪🇦', '🇪🇨', '🇪🇪', '🇪🇬', '🇪🇭', '🇪🇷', '🇪🇸', '🇪🇹', '🇪🇺', '🇫🇮', '🇫🇯', '🇫🇰', '🇫🇲', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩', '🇬🇪', '🇬🇫', '🇬🇬', '🇬🇭', '🇬🇮', '🇬🇱', '🇬🇲', '🇬🇳', '🇬🇵', '🇬🇶', '🇬🇷', '🇬🇸', '🇬🇹', '🇬🇺', '🇬🇼', '🇬🇾', '🇭🇰', '🇭🇲', '🇭🇳', '🇭🇷', '🇭🇹', '🇭🇺', '🇮🇨', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇲', '🇮🇳', '🇮🇴', '🇮🇶', '🇮🇷', '🇮🇸', '🇮🇹', '🇯🇪', '🇯🇲', '🇯🇴', '🇯🇵', '🇰🇪', '🇰🇬', '🇰🇭', '🇰🇮', '🇰🇲', '🇰🇳', '🇰🇵', '🇰🇷', '🇰🇼', '🇰🇾', '🇰🇿', '🇱🇦', '🇱🇧', '🇱🇨', '🇱🇮', '🇱🇰', '🇱🇷', '🇱🇸', '🇱🇹', '🇱🇺', '🇱🇻', '🇱🇾', '🇲🇦', '🇲🇨', '🇲🇩', '🇲🇪', '🇲🇫', '🇲🇬', '🇲🇭', '🇲🇰', '🇲🇱', '🇲🇲', '🇲🇳', '🇲🇴', '🇲🇵', '🇲🇶', '🇲🇷', '🇲🇸', '🇲🇹', '🇲🇺', '🇲🇻', '🇲🇼', '🇲🇽', '🇲🇾', '🇲🇿', '🇳🇦', '🇳🇨', '🇳🇪', '🇳🇫', '🇳🇬', '🇳🇮', '🇳🇱', '🇳🇴', '🇳🇵', '🇳🇷', '🇳🇺', '🇳🇿', '🇴🇲', '🇵🇦', '🇵🇪', '🇵🇫', '🇵🇬', '🇵🇭', '🇵🇰', '🇵🇱', '🇵🇲', '🇵🇳', '🇵🇷', '🇵🇸', '🇵🇹', '🇵🇼', '🇵🇾', '🇶🇦', '🇷🇪', '🇷🇴', '🇷🇸', '🇷🇺', '🇷🇼', '🇸🇦', '🇸🇧', '🇸🇨', '🇸🇩', '🇸🇪', '🇸🇬', '🇸🇭', '🇸🇮', '🇸🇯', '🇸🇰', '🇸🇱', '🇸🇲', '🇸🇳', '🇸🇴', '🇸🇷', '🇸🇸', '🇸🇹', '🇸🇻', '🇸🇽', '🇸🇾', '🇸🇿', '🇹🇦', '🇹🇨', '🇹🇩', '🇹🇫', '🇹🇬', '🇹🇭', '🇹🇯', '🇹🇰', '🇹🇱', '🇹🇲', '🇹🇳', '🇹🇴', '🇹🇷', '🇹🇹', '🇹🇻', '🇹🇼', '🇹🇿', '🇺🇦', '🇺🇬', '🇺🇲', '🇺🇳', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇦', '🇻🇨', '🇻🇪', '🇻🇬', '🇻🇮', '🇻🇳', '🇻🇺', '🇼🇫', '🇼🇸', '🇽🇰', '🇾🇪', '🇾🇹', '🇿🇦', '🇿🇲', '🇿🇼',
];

// 用于处理表情的拆分
enum GBState {
  Initial = 0, // 初始化
  ExtendOrZWJ = 1, // 遇到需要组合表情的时候
  NotBoundary = 2, // 结束
}

// 定义是否需要拆分字符
const NotBreak = 0; // 不需要拆分
const BreakStart = 1; // 需要拆分

let gbState = GBState.Initial;
let ri = 0; // 用于国旗的拆分 🇷 + 🇺 = 🇷🇺

const highSurrogateStart = 0xD800;
const highSurrogateEnd = 0xDBFF;
const lowSurrogateStart = 0xDC00;
const lowSurrogateEnd = 0xDFFF;

// 判断码点是否在高\低代理项
const isSurrogate = (str: string, pos: number): boolean => {
  return str.charCodeAt(pos) >= highSurrogateStart && str.charCodeAt(pos) <= highSurrogateEnd &&
        str.charCodeAt(pos + 1) >= lowSurrogateStart && str.charCodeAt(pos + 1) <= lowSurrogateEnd;
};

// 从UTF-16字符串中获取Unicode代码点
// 这里是处理Unicode 代理项对的,如果不懂代理项要学习下
// 简而言之：高代理项字符(0xD800 - 0xDBFF) 必须始终与低代理项字符(0xDC00 - 0xDFFF)成对。
const codePointAt = (str: string, key: number): number => {
  const idx = key || 0;
  const code = str.charCodeAt(idx);

  if (code >= highSurrogateStart && code <= highSurrogateEnd && idx < str.length - 1) {
    const hi = code;
    const low = str.charCodeAt(idx + 1);
    if (low >= lowSurrogateStart && low <= lowSurrogateEnd) {
      // 从基础平面公式 ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000 反推回去得到一个辅助平面的unicode码点。
      return ((hi - highSurrogateStart) * 0x400) + (low - lowSurrogateStart) + 0x10000;
    }
    return hi;
  }
  if (code >= lowSurrogateStart && code <= lowSurrogateEnd && idx >= 1) {
    const hi = str.charCodeAt(idx - 1);
    const low = code;
    if (hi >= highSurrogateStart && hi <= highSurrogateEnd) {
      // 同上
      return ((hi - highSurrogateStart) * 0x400) + (low - lowSurrogateStart) + 0x10000;
    }
    return low;
  }

  return code;
};

// 在unicode中固定了一些规则，那什么情况下可以拆分，那些不可以拆分
const shouldBreak = (start: number, mid: number[], end: number): number => {
  const all = [start].concat(mid).concat([end]);
  const previous = all[all.length - 2];
  const next = end;

  // for GB12, GB13
  if (previous !== UnicodeType.RI) {
    ri = 0;
  }

  // GB11: \p{Extended_Pictographic} Extend* ZWJ x \p{Extended_Pictographic}
  // 表情的拆分方式：不要在表情符号修饰符序列或表情符号 zwj 序列中中断。
  // switch case的写法是为了遍历
  switch (gbState) {
    case GBState.NotBoundary:
    case GBState.Initial:
      if (previous === UnicodeType.EP) {
        gbState = GBState.ExtendOrZWJ;
      } else {
        gbState = GBState.Initial;
      }
      break;
    case GBState.ExtendOrZWJ:
      if (previous === UnicodeType.Extend) {
        gbState = GBState.ExtendOrZWJ;
      } else if (previous === UnicodeType.ZWJ && next === UnicodeType.EP) {
        // 看这个判断前一个字符是ZWJ后一个是EP就不拆
        gbState = GBState.NotBoundary;
      } else {
        gbState = GBState.Initial;
      }
      break;
  }
  // 不要在 CR 和 LF 之间中断。否则，打破之前和之后的控制。 GB3-GB5
  // GB3
  if (previous === UnicodeType.CR && next === UnicodeType.LF) {
    return NotBreak;
  }
  // GB4
  if (
    previous === UnicodeType.Control ||
    previous === UnicodeType.CR ||
    previous === UnicodeType.LF
  ) {
    return BreakStart;
  }
  // GB5
  if (next === UnicodeType.Control || next === UnicodeType.CR || next === UnicodeType.LF) {
    return BreakStart;
  }
  // 不要打断韩语音节序列。GB6-GB8
  // GB6
  if (
    previous === UnicodeType.L &&
      (next === UnicodeType.L ||
      next === UnicodeType.V ||
      next === UnicodeType.LV ||
      next === UnicodeType.LVT)
  ) {
    return NotBreak;
  }
  // GB7
  if (
    (previous === UnicodeType.LV || previous === UnicodeType.V) &&
    (next === UnicodeType.V || next === UnicodeType.T)
  ) {
    return NotBreak;
  }
  // GB8
  if ((previous === UnicodeType.LVT || previous === UnicodeType.T) && next === UnicodeType.T) {
    return NotBreak;
  }
  // 在扩展字符或 ZWJ 之前不要中断。GB9
  if (next === UnicodeType.Extend || next === UnicodeType.ZWJ) {
    return NotBreak;
  }
  // GB9a和GB9b规则仅适用于扩展字素簇：
  // 不要在 SpacingMarks 之前或 Prepend 字符之后打断。
  // GB9a
  if (next === UnicodeType.SM) {
    return NotBreak;
  }
  // // GB9b
  if (previous === UnicodeType.Prepend) {
    return NotBreak;
  }
  // 不要在表情符号修饰符序列或表情符号 zwj 序列中中断。
  // GB11
  if (gbState === GBState.NotBoundary) {
    return NotBreak;
  }
  // GB12 13
  // 如果在中断点之前有奇数个 RI 字符，则不要在区域指示符 (RI) 符号之间中断。
  // 🇮 + 🇸 = 🇮🇸 国旗是通过2个区域指示符 (RI)连在一起组合而成的，拆开就不是国旗了，
  // 而且每2个RI就要拆一次，因为4个RI连在一起 = 2个国旗，2个国旗之间也要拆一次
  if (previous === UnicodeType.RI && next === UnicodeType.RI && ri % 2 === 0) {
    ri++;
    return NotBreak;
  }
  // GB999 否则全部断开
  return BreakStart;
};

// 从前往后，逐步遍历下一个字符
// str: 完整的字符串，index: 当前遍历的位置
const nextBreak = (str: string, index: number): number => {
  // 兜底处理
  if (index < 0) {
    return 0;
  }
  // 兜底处理
  if (index >= str.length - 1) {
    return str.length;
  }
  // 每到下一个遍历周期的时候重置一下
  gbState = GBState.Initial;
  ri = 0; // 用于国旗的拆分 🇷 + 🇺 = 🇷🇺
  // prev可以理解的前一个字符
  const prev = getGraphemeBreakProperty(codePointAt(str, index));
  // 前一个字符和后一个字符之间的部分，也就是不拆分的区间部分
  const mid = [];
  for (let i = index + 1; i < str.length; i++) {
    // 高代理项需要跳过一次拆分字符，他是由两个字符组合的，所以需要跳过
    // 或者可以简单的写成(没测过，但是应该是一个意思)：const code = str.codePointAt(i);  code > 65535 && continue;
    if (isSurrogate(str, i - 1)) {
      continue;
    }
    // prev可以理解的后一个字符
    const next = getGraphemeBreakProperty(codePointAt(str, i));
    // 根据规则判断是否需要拆分，不拆分的话就把这个字符放进mid里面去

    if (shouldBreak(prev, mid, next)) {
      ri = 0;
      return i;
    }
    if (next === UnicodeType.RI && riArr.indexOf(str.slice(i - 2, i + 2)) === -1) {
      return i;
    }
    mid.push(next);
  }
  return str.length;
};

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
const graphemeSplit = (str: string): string[] => {
  // 返回的数组
  const res = [];
  // 标识字符的遍历到的下标
  let index = 0;
  // 标识在哪个位置的下标拆分字符
  let brk = 0;
  // 遍历得出最终的字符
  while ((brk = nextBreak(str, index)) < str.length) {
    str.slice(index, brk) && res.push(str.slice(index, brk));
    index = brk;
  }
  // 如果当前下标标记在str以内，就把这个字符放进需要返回的数组里
  if (index < str.length) {
    str.slice(index) && res.push(str.slice(index));
  }
  return res;
};

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
const graphemeSubstr = (str: string, start: number, end: number, maxLength?: number): string => {
  // 负数 || start > end的情况不处理
  if (start < 0 || end < 0 || (maxLength && maxLength < 0) || start > end) {
    return '';
  }
  const arr = graphemeSplit(str);
  // 没有限制物理长度就直接从数据里面截取
  if (!maxLength) {
    return arr.slice(start, end).join('');
  }
  const _arr = arr.slice(start, end);
  const _strLength = _arr.join('').length;
  // 限制物理长度大于整个字符串的长度也直接返回
  if (_strLength <= maxLength) {
    return _arr.join('');
  }

  let num = 0;
  let tarArr: string[] = _arr;
  // 从最后面开始遍历
  for (let i = _arr.length - 1; i > -1; i--) {
    const l = _arr[i].length || 0;
    // 字符长度比较，串字符总长度-最后一个字符的长度 > 物理限制长度 就继续遍历。否则就退出循环
    if (_strLength - (l + num) > maxLength) {
      num = l + num;
    } else {
      tarArr = tarArr.slice(0, i);
      break;
    }
  }
  return tarArr.join('');
};

export {
  graphemeSplit,
  graphemeSubstr,
};
