import { graphemeSplit, graphemeSubstr } from '../src/grapheme/index';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('字符', () => {
  it('graphemeSubstr', async () => {
    const _arr = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 0, 3);
    const _num = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 0, 3, 13);
    // 测试graphemeSubstr截取能力
    expect(_arr).to.equal('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️');
    expect(_num).to.equal('🧑🏼‍🦰❤️‍🩹');

    const _arr1 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 1, 4);
    const _num1 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 1, 4, 13);

    // 测试视觉长度截取&限制物理长度截取
    expect(_arr1).to.equal('❤️‍🩹🏄🏻‍♀️👨🏽‍🎤');
    expect(_num1).to.equal('❤️‍🩹🏄🏻‍♀️');

    const _arr2 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 0, 0);
    const _num2 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 0, 0, 13);

    // 测试0的情况
    expect(_arr2).to.equal('');
    expect(_num2).to.equal('');

    const _arr3 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 0, -1);
    const _num3 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', -1, -1, 13);

    // 测试使用负数
    expect(_arr3).to.equal('');
    expect(_num3).to.equal('');

    const _arr4 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 0, 100);
    const _num4 = graphemeSubstr('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙', 0, 100, 100);

    // 测试超过字符串最大长度的物理截取
    expect(_arr4).to.equal('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙');
    expect(_num4).to.equal('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙');
  });
  it('graphemeSplit', async () => {
    /**
     * emojiTestText || emojiTestStr 包含
     *  1. 基础emoji，单个码点表示一个emoji 🧛 U+1F9DB
        2. 单个码点 + 变体选择符 ⚛️ = ⚛︎ U+26A0 + U+FE0F
        3. 皮肤修饰符 🤵🏽 = 🤵 U+1F935 + 🏽 U+1F3FD
        4. ZWJ连接符 👨‍💻 = 👨 + ZWJ + 💻
        5. 旗帜符号 🇨🇳 = 🇨 + 🇳
        6. 标签序列 🏴󠁧󠁢󠁳󠁣󠁴󠁿 = 🏴 + gbsct + U+E007F
        7. 键位序列 *️⃣ = * + U+FE0F + U+20E3
     */
    const str1101 = '哈哈🧛什么';
    const str1102 = '哈哈⚛️什么';
    const str1103 = '哈哈🤵🏽什么';
    const str1104 = '哈哈👨‍💻什么';
    const str1105 = '哈哈🇨🇳什么';
    const str1106 = '哈哈🏴󠁧󠁢󠁳󠁣󠁴󠁿什么';
    const str1107 = '哈哈*️⃣什么';
    const str1108 = '看我百年点化石大虎山度按时';
    const str1109 = '看我百*️⃣🤵🏽🏴󠁧󠁢󠁳󠁣󠁴󠁿年点化石大虎山度按时';
    const str11010 = '🧛看我百*️⃣*️⃣🤵🏽🏴󠁧󠁢󠁳󠁣󠁴󠁿年点化石大虎山度按时⚛️';
    const str11011 = '🧛🇨🇳🇨🇳🇨🇳🇨🇳ll';
    const str11012 = '🤵🏽🤵🏽🤵🏽🤵🏽';
    const str11013 = '🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿';
    const str11014 = '🧛🇨🇳🇨🇳🥲🇨🇳🥲🇨🇳~~';

    // 国旗专门测试
    const ri1 = '🏴󠁧󠁢󠁳󠁣󠁴󠁿🇦🇴🇿🇼🇨🇳';
    const ri2 = '🏴󠁧󠁢󠁳󠁣󠁴󠁿🇦🇴🇿🇼🇨';
    const ri3 = '🇨🇨🇳🇬🇧🇭🇰🏴󠁧󠁢󠁳󠁣󠁴󠁿🇦🇦🏴󠁧󠁢󠁳󠁣󠁴󠁿🇦🇴';
    const ri4 = '🇰🏴󠁧󠁢󠁳󠁣󠁴󠁿🇦🇴🇨🇨🇳🇬🇧🇭';

    expect(graphemeSplit(ri1).length).to.equal(4);
    expect(graphemeSplit(ri2).length).to.equal(4);
    expect(graphemeSplit(ri3).length).to.equal(9);
    expect(graphemeSplit(ri4).length).to.equal(6);

    expect(graphemeSplit(str1101).length).to.equal(5);
    expect(graphemeSplit(str1102).length).to.equal(5);
    expect(graphemeSplit(str1103).length).to.equal(5);
    expect(graphemeSplit(str1104).length).to.equal(5);
    expect(graphemeSplit(str1105).length).to.equal(5);
    expect(graphemeSplit(str1106).length).to.equal(5);
    expect(graphemeSplit(str1107).length).to.equal(5);
    expect(graphemeSplit(str1108).length).to.equal(13);
    expect(graphemeSplit(str1109).length).to.equal(16);
    expect(graphemeSplit(str11010).length).to.equal(19);
    expect(graphemeSplit(str11011).length).to.equal(7);
    expect(graphemeSplit(str11012).length).to.equal(4);
    expect(graphemeSplit(str11013).length).to.equal(2);
    expect(graphemeSplit(str11014).length).to.equal(9);
    // 要注意要测到两个国旗黏在一起的时候
    const emojiTestText = '🇦🇴 🇿🇼 😆 😊 😗 🥲 😜 🤑 🫢 🫡 😑 🙄 😔 😴 🤢 🥶 🤠 🥸 😎 🧐 😟 😨 😖 😖 👿 ☠️ 👹 👾 😹 😿 🙈 🙊 💖 💔 💛 💯 💬 🗯️ 👋🏿 🖐🏽 🫱🏾 🫴🏻 👌🏿 🤘 🧛 👉🏼 🫵🏾 🤛 👐 🤝🏽 🙏🏿 🤳🏾 💅🏻 👂 👃🏼 👅 🧒🏿 👨🏼 👨🏿‍🦰 👩🏻‍🦰 👩🏽‍🦳 👴🏽 🙍🏽‍♂ 🙎🏻‍♀️ 🙆🏽‍♀ 🙋🏽‍♂️ 🙇🏿‍♀ 🤷🏽‍♀️ ⚛️ 👨‍⚕️ 👨🏻‍🏫 👨🏽‍⚖️ 👩‍🌾 🧑🏼‍💻 👩🏻‍🎨 👩🏻‍🚀 🕵🏼‍♂ 👷‍♀️ 👲🏼 👩‍🍼 🦸🏾‍♂️ 🧙🏿 🧚🏼‍♀ 🧜 🧞‍♂ 💆🏾‍♀ 🚶🏿‍♀ 👨‍🦼 👯‍♂ 🧗🏾‍♀ 🏂🏻 🏄 🏄🏿‍♀️ 🏊🏽‍♂️ ⛹🏼‍♀️ 🏋🏿‍♀ 🚵🏾‍♂️ 🤼 🤹🏽 🛌🏿 🧑🏿‍🤝‍🧑🏽 💏🏻 👩🏿‍❤️‍💋‍👨🏾 👩‍👩‍👦 👤 🦱 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🐶 🦣 🦨 🐤 🪶 🐲 🐸 🦖 🐠 🪲 🌹 🍀 🍒 🥬 🍖 🍣 🦐 🥧 🍸 🍽 🌏 🏖️ 🏘️ ⛩️ 🌆 🚝 🛳 🚁 🛎 ⏰ 🌘 ☄️ 🧨 🏅 🥏 🕹 🎨 👖 🔊 🎙 🎹 ☎️ 🖥️ 📺 📚 💸 📫 🖌️ 🇨🇳 🗓 🔐 💣 🔭 🤵🏽 🩼 🪒 🧿 🚹 🚳 ➡️ ☯️ ♑ ⏮️ ⚧️ 🟰 ❗ 💲 ✅ 1️⃣ 🅱️ 🟣 🏳‍🌈 🏴󠁧󠁢󠁳󠁣󠁴󠁿 *️⃣';
    const emojiTestStr = '❌ 🚩 🇨🇳 🇬🇧 🇭🇰 🇸🇬 🇯🇵 🇺🇸 ⭕️ ⛔️ 📛 🚫 💢 ❗️ ❓ ⁉️ 🔆 ⚠️ ✅ ❎ 🌐 🌀 💤 ⏩ ⏪ ⬆️ ⬇️ 🎵 🎶 ➕ ➖ ➗ ✖️ 🔚 🔙 🔜 ✔️ 🔔 📣 📢 💬 💭 🌵 🌜 🌞 🌛 🌝 🌗 🌘 🌙 🌎 🌍 🪐 💫 ☄️ 🌪 🌤 ⛅️ ☁️ 🌦 ❄️ ❄️ ⛄️ 💨 🌬 💧 💦 ☔️ ☂️ 🌊 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🎍 🎋 🍂 🍁 🍄 🌾 🌷 🌹 🥀 🌺 🌼 🌼 🌻 🐶 🐱 🐭 🐹 🐻 🐼 🐯 🐮 🐷 🐽 🐸 🐵 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕸 🦂 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐅 🐆 🦓 🦧 🦛 🦏 🐪 🐫 🦒 🦘 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐓 🐓 🦃 🦚 🦜 🦢 🦩 🦨 🦡 🦦 🦥 🐁 🐀 🐿 🐾 🐉 🐲 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🦼 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚃 🚋 🚝 🚄 🚅 🚈 🚂 🚇 ✈️ 🛫 🛩 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ ⚓️ ⛽️ 🚦 🚥 🗿 🗺 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 🏖 🏝 🌋 ⛰ 🗻 ⛺️ 🏠 🏗 🏭 🏬 🏣 🏥 🏛 🕌 🛕 ⛩ ⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🏓 🏸 🏒 ⛳️ 🪁 🏹 🤿 🥊 🛹 ⛸ ⛷ 🏂 🪂 🏋🏻 ⛹🏻‍♀️ 🧘‍♀️ 🏄‍♀️ 🏊‍♀️ 🚣 🧗‍♀️ 🚴‍♀️ 🏆 🥇 🥈 🏅 🎖 🎗 🎪 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎻 🎲 🎳 🎮 🧩 🔥 💥 ❤️ 🌟 ⭐️ ⚡️ ❗️ 🌈 ☀️ ✨ 📍 👉🏻 ⚠️ 👈🏻 👇 👆 ⬇️ ⬆️ 💪 👊 ❌ 💯 🔅 ✅ ➡️ ⬅️ ▶️ 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🌽 🥕 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🥪 🥙 🧆 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🦪 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🧃 🧃 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🥄 🍴 🍽 🥢 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕙 🕚 🕛 🕜 🕝 🕞 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 📷 📽 🎞 📞 ☎️ 📺 🎙 ⏰ ⏳ ⌛️ 📡 🔋 🔌 💡 🕯 🧯 💸 💵 💰 ⚖️ 🛠 💣 🧨 🧲 ⚰️ 🚬 💊 🧬 🦠 🩸 🛏 🛌 🚪 🔑 🎁 🎈 🎏 🎊 🎉 🎎 🧧 ✉️ 📩 📨 🏷 📆 📅 🗄 🗞 📖 📰 📖 🔖 📌 📍 ✂️ 🔐 🔏';

    const emojiTestTextFock = `${emojiTestText}`.replace(/\s*/g, '');
    const b1 = graphemeSplit(emojiTestTextFock);
    const tart1 = b1.join(' ');
    // 测试n种emoji的分词能力
    expect(emojiTestText).to.equal(tart1);

    const emojiTestStrFock = `${emojiTestStr}`.replace(/\s*/g, '');
    const b2 = graphemeSplit(emojiTestStrFock);
    const tart2 = b2.join(' ');
    // 测试n种emoji的分词能力
    expect(emojiTestStr).to.equal(tart2);
    const a1 = graphemeSplit('鸡你太美123abc*&^%$#');
    const a2 = graphemeSplit('🧑🏼‍🦰❤️‍🩹🏄🏻‍♀️👨🏽‍🎤👩🏽‍🤝‍👨🏿🤙');
    // 测试多种语言的分词能力
    const a3 = graphemeSplit('Ĺo͂řȩm̅'); // returns ["Ĺ","o͂","ř","ȩ","m̅"]
    const a4 = graphemeSplit('뎌쉐'); // returns ["뎌","쉐"]
    const a5 = graphemeSplit('अनुच्छेद'); // returns ["अ","नु","च्","छे","द"]
    const a6 = graphemeSplit('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞'); // returns ["Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍","A̴̵̜̰͔ͫ͗͢","L̠ͨͧͩ͘","G̴̻͈͍͔̹̑͗̎̅͛́","Ǫ̵̹̻̝̳͂̌̌͘","!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞"]

    expect(a1.join('-')).to.equal('鸡-你-太-美-1-2-3-a-b-c-*-&-^-%-$-#');
    expect(a2.join('-')).to.equal('🧑🏼‍🦰-❤️‍🩹-🏄🏻‍♀️-👨🏽‍🎤-👩🏽‍🤝‍👨🏿-🤙');
    expect(a3.join('-')).to.equal('Ĺ-o͂-ř-ȩ-m̅');
    expect(a4.join('-')).to.equal('뎌-쉐');
    expect(a5.join('-')).to.equal('अ-नु-च्-छे-द');
    expect(a6.join('-')).to.equal('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍-A̴̵̜̰͔ͫ͗͢-L̠ͨͧͩ͘-G̴̻͈͍͔̹̑͗̎̅͛́-Ǫ̵̹̻̝̳͂̌̌͘-!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞');
  });
});
