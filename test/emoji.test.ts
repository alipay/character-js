import { expect } from 'chai';
import { getRegExpEmoji, hasEmoji, matchEmoji } from '../src/emoji';
import { describe, it } from 'mocha';

const fs = require('fs');
const data = fs.readFileSync('test/emoji-test.txt');
const str = data.toString();

const typeArr = str.match(/(?<=#).*?(?=E)/g);

const emojiTestArr: string[] = [];
typeArr.forEach((u) => {
  return u && emojiTestArr.push(u.trim());
});

describe('emoji', () => {
  it('识别emoji', async () => {
    const str1 = 'dg8713te78tgaudhwiqutdi@#^*$@%*?><"{::adagugdiAS}{+)~';
    const bol1 = getRegExpEmoji()?.test(str1);
    // 数字井号星号不再划分为表情
    expect(bol1).to.equal(false);

    // 测试汉字是不是emoji
    const xhStr = '一二三奵奺奻奼奾奿妀妁妅妉妊妋妌妍妎妏妐妑妔妕妗妘妚妛妜妟妠妡妢妤妦妧妩妫妭妮妯妰妱妲妴妵妶妷妸妺妼妽妿姀姁姂姃姄姅姆姇姈姉姊姌姗姎姏姒姕姖姘姙姛姝姞姟姠姡姢姣姤姥奸姧姨姩姫姬姭姮姯姰姱姲姳姴姵姶姷姸姹姺姻姼姽姾娀威娂娅娆娈娉娊娋娌娍娎娏娐娑娒娓娔娕娖娗娙娚娱娜娝娞娟娠娡娢娣娤娥娦娧娨娩娪娫娬娭娮娯娰娱娲娳娴娵娷娸娹娺娻娽娾娿婀娄婂婃婄婅婇婈婋婌婍婎婏婐婑婒婓婔婕婖婗婘婙婛婜婝婞婟婠婡婢婣婤婥妇婧婨婩婪婫娅婮婯婰婱婲婳婵婷婸婹婺婻婼婽婾婿媀媁媂媄媃媅媪媈媉媊媋媌媍媎媏媐媑媒媓媔媕媖媗媘媙媚媛媜媝媜媞媟媠媡媢媣媤媥媦媨媩媪媫媬媭妫媰媱媲媳媴媵媶媷媸媹媺媻媪媾嫀嫃嫄嫅嫆嫇嫈嫉嫊袅嫌嫍嫎嫏嫐嫑嫒嫓嫔嫕嫖妪嫘嫙嫚嫛嫜嫝嫞嫟嫠嫡嫢嫣嫤嫥嫦嫧嫨嫧嫩嫪嫫嫬嫭嫮嫯嫰嫱嫲嫳嫴嫳妩嫶嫷嫸嫹嫺娴嫼嫽嫾婳妫嬁嬂嬃嬄嬅嬆嬇娆嬉嬊娇嬍嬎嬏嬐嬑嬒嬓嬔嬕嬖嬗嬘嫱嬚嬛嬜嬞嬟嬠嫒嬢嬣嬥嬦嬧惔愔忇忈忉忊忋忎忏忐忑忒忓忔忕忖忚忛応忝忞忟忡忢忣忥忦忨忩忪忬忭忮忯忰忱忲忳忴念忶汹忸忹忺忻忼忾忿怂怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭怮怯怰怲怳怴怵怶怷怸怹怺怼悙怿恀恁恂恃恄恅恒恇恈恉恊恌恍恎恏恑恒恓恔恖恗恘恙恚恛恜恝恞恠恡恦恧恫恬恮恰恱恲恴恷恹恺恻恽恾恿悀悁悂悃悆悇悈悊悋悌悍悎悏悐悑悒悓悕悖悗悘悙悚悛悜悝悞悟悡悢悤悥悧悩悪悫悭悮悰悱悳悴悷悹悺悻悼悾悿惀惁惂惃惄惆惈惉惊惋惌惍惎惏惐惑惒惓惔惕惖惗惘惙惚惛惜惝惞惠恶惢惣惤惥惦惧惨惩惪惫惬惮恼恽惴惵惶惸惺惼惽惾惿愀愂愃愄愅愆愇愉愊愋愌愍愎愐愑愒愓愕愖愗愘愙愝愞愠愡愢愣愥愦愧愩愪愫愬愭愮愯愰愱愲愳怆愵愶恺愸愹愺愻愼愽忾愿慀慁慂慃栗慅慆慈慉慊态慏慐慑慒慓慔慖慗惨慙惭慛慜慝慞恸慠慡慢慥慦慧慨慩怄怂慬悯慯慰慲悭慴慵慷慸慹慺慻慽慿憀憁忧憃憄憅憆憇憈憉惫憋憌憍憎憏怜憓憔憕憖憗憘憙憛憜憝憞憟憠憡憢憣愤憥憦憧憨憩憪憬憭怃憯憰憱憳憴憵忆憷憸憹憺憻憼憽憾憿懀懁懂懄懅懆恳懈懊懋怿懔懎懏懐懑懓懔懕懖懗懘懙懚掂扫抡掅掆掇授掉掊掋掍掎掐掑排掓掔掕挜掖掘挣掚挂掜掝掞掟掠采探掣掤掦措掫掬掭掮掯掰掱掲掳掴掵掶掸掹掺掻掼掽掾掿拣揁揂揃揅揄揆揇揈揉揊揋揌揍揎揑揓揔揕揖揗揘揙揜揝揞揟揠揢揤揥揦揧揨揫捂揰揱揲揳援揵揶揷揸揻揼揾揿搀搁搂搃搄搅搇搈搉搊搋搌搎搏搐搑搒搓搔搕搘搙搚搛搝擀搠搡搢搣搤捶搦搧搨搩搪搫搬搮搰搱搲搳搴搵搷搸搹搻搼搽榨搿摂摅摈摉摋摌摍摎摏摐掴摒摓摔摕摖摗摙摚摛掼摝摞摠摡摢揸摤摥摦摧摨摪摫摬摭摮挚摰摱摲抠摴摵抟摷摹摺掺摼摽摾摿撀撁撂撃撄撅撉撊撋撌撍撎挦挠撒挠撔撖撗撘撙捻撛撜撝挢撠撡掸掸撧撨撩撪撬撮撯撱揿撴撵撶撷撸撹撺挞撼撽挝擀擃掳擅擆擈擉擌擎擏擐擑擓擕擖擗擘擙擛擜擝擞擟擡擢擤擥擧擨擩擪擫擭擮摈擳擵擶撷擸擹擽擿攁攂攃摅攅撵攇攈攉攊攋攌攍攎拢攐攑攒攓攕撄攗攘搀攚撺攞攟攠攡攒挛攥攦攧攨攩搅攫攭攮懛懜懝怼懠懡懢懑懤懥懦懧恹懩懪懫懬懭懮懯懰懱惩懳懴懵懒怀悬懹忏懻惧懽慑懿恋戁戂戃戄戅戆懯嬨嬩嫔嬫嬬奶嬬嬮嬯婴嬱嬲嬳嬴嬵嬶嬷婶嬹嬺嬻嬼嬽嬾嬿孀孁孂娘孄孅孆孇孆孈孉孊娈孋孊孍孎孏嫫婿媚';
    const xhBol = hasEmoji(xhStr);
    expect(xhBol).to.equal(false);

    // 测试英文字母是不是emoji
    const zmStr = 'abcdefghijklumnopqrstvuwxyz';
    const zmBol = hasEmoji(zmStr);
    expect(zmBol).to.equal(false);

    // 测试数字是不是emoji
    const szStr = '01234567889';
    const szBol = hasEmoji(szStr);
    expect(szBol).to.equal(false);

    // 测试特殊字符是不是emoji
    const zfStr = '@#￥%……&*（？》《：“';
    const zfBol = hasEmoji(zfStr);
    expect(zfBol).to.equal(false);

    // 键帽+变体 是表情
    const bol11 = getRegExpEmoji()?.test(`${str1}5️⃣`);
    expect(bol11).to.equal(true);

    // 变体的识别 ☯ = 262f + fe0f
    const va = matchEmoji(`${str1}☯️`, 'g');
    va && expect(va[0]).to.equal('☯️');

    // 变体的识别 ☯ = 262f
    const va1 = matchEmoji(`${str1}☯`, 'g');
    va1 && expect(va1[0]).to.equal('☯');

    // 基础的emoji识别测试
    const isEmoji = hasEmoji(`${str1}❌`);
    expect(isEmoji).to.equal(true);

    const noEmoji = hasEmoji(str1);
    expect(noEmoji).to.equal(false);

    const emojiTestText = '😆 😊 😗 🥲 😜 🤑 🫢 🫡 😑 🙄 😔 😴 🤢 🥶 🤠 🥸 😎 🧐 😟 😨 😖 😖 👿 ☠️ 👹 👾 😹 😿 🙈 🙊 💖 💔 💛 💯 💬 🗯️ 👋🏿 🖐🏽 🫱🏾 🫴🏻 👌🏿 🤘 👉🏼 🫵🏾 🤛 👐 🤝🏽 🙏🏿 🤳🏾 💅🏻 👂 👃🏼 👅 🧒🏿 👨🏼 👨🏿‍🦰 👩🏻‍🦰 👩🏽‍🦳 👴🏽 🙍🏽‍♂ 🙎🏻‍♀️ 🙆🏽‍♀ 🙋🏽‍♂️ 🙇🏿‍♀ 🤷🏽‍♀️ 👨‍⚕️ 👨🏻‍🏫 👨🏽‍⚖️ 👩‍🌾 🧑🏼‍💻 👩🏻‍🎨 👩🏻‍🚀 🕵🏼‍♂ 👷‍♀️ 👲🏼 👩‍🍼 🦸🏾‍♂️ 🧙🏿 🧚🏼‍♀ 🧜 🧞‍♂ 💆🏾‍♀ 🚶🏿‍♀ 👨‍🦼 👯‍♂ 🧗🏾‍♀ 🏂🏻 🏄 🏄🏿‍♀️ 🏊🏽‍♂️ ⛹🏼‍♀️ 🏋🏿‍♀ 🚵🏾‍♂️ 🤼 🤹🏽 🛌🏿 🧑🏿‍🤝‍🧑🏽 💏🏻 👩🏿‍❤️‍💋‍👨🏾 👩‍👩‍👦 👤 🦱 🐶 🦣 🦨 🐤 🪶 🐲 🐸 🦖 🐠 🪲 🌹 🍀 🍒 🥬 🍖 🍣 🦐 🥧 🍸 🍽 🌏 🏖️ 🏘️ ⛩️ 🌆 🚝 🛳 🚁 🛎 ⏰ 🌘 ☄️ 🧨 🏅 🥏 🕹 🎨 👖 🔊 🎙 🎹 ☎️ 🖥️ 📺 📚 💸 📫 🖌️ 🗓 🔐 💣 🔭 🩼 🪒 🧿 🚹 🚳 ➡️ ☯️ ♑ ⏮️ ⚧️ 🟰 ❗ 💲 ✅ 1️⃣ 🅱️ 🟣 🏳‍🌈 🇦🇴 🇿🇼 🏴󠁧󠁢󠁳󠁣󠁴󠁿';
    const emojiStr = '❌ 🚩 🇨🇳 🇬🇧 🇭🇰 🇸🇬 🇯🇵 🇺🇸 ⭕️ ⛔️ 📛 🚫 💢 ❗️ ❓ ⁉️ 🔆 ⚠️ ✅ ❎ 🌐 🌀 💤 ⏩ ⏪ ⬆️ ⬇️ 🎵 🎶 ➕ ➖ ➗ ✖️ 🔚 🔙 🔜 ✔️ 🔔 📣 📢 💬 💭 🌵 🌜 🌞 🌛 🌝 🌗 🌘 🌙 🌎 🌍 🪐 💫 ☄️ 🌪 🌤 ⛅️ ☁️ 🌦 ❄️ ❄️ ⛄️ 💨 🌬 💧 💦 ☔️ ☂️ 🌊 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🎍 🎋 🍂 🍁 🍄 🌾 🌷 🌹 🥀 🌺 🌼 🌼 🌻 🐶 🐱 🐭 🐹 🐻 🐼 🐯 🐮 🐷 🐽 🐸 🐵 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕸 🦂 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐅 🐆 🦓 🦧 🦛 🦏 🐪 🐫 🦒 🦘 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐓 🐓 🦃 🦚 🦜 🦢 🦩 🦨 🦡 🦦 🦥 🐁 🐀 🐿 🐾 🐉 🐲 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🦼 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚃 🚋 🚝 🚄 🚅 🚈 🚂 🚇 ✈️ 🛫 🛩 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ ⚓️ ⛽️ 🚦 🚥 🗿 🗺 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 🏖 🏝 🌋 ⛰ 🗻 ⛺️ 🏠 🏗 🏭 🏬 🏣 🏥 🏛 🕌 🛕 ⛩ ⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🏓 🏸 🏒 ⛳️ 🪁 🏹 🤿 🥊 🛹 ⛸ ⛷ 🏂 🪂 🏋🏻 ⛹🏻‍♀️ 🧘‍♀️ 🏄‍♀️ 🏊‍♀️ 🚣 🧗‍♀️ 🚴‍♀️ 🏆 🥇 🥈 🏅 🎖 🎗 🎪 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎻 🎲 🎳 🎮 🧩 🔥 💥 ❤️ 🌟 ⭐️ ⚡️ ❗️ 🌈 ☀️ ✨ 📍 👉🏻 ⚠️ 👈🏻 👇 👆 ⬇️ ⬆️ 💪 👊 ❌ 💯 🔅 ✅ ➡️ ⬅️ ▶️ 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🌽 🥕 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🥪 🥙 🧆 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🦪 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🧃 🧃 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🥄 🍴 🍽 🥢 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕙 🕚 🕛 🕜 🕝 🕞 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 📷 📽 🎞 📞 ☎️ 📺 🎙 ⏰ ⏳ ⌛️ 📡 🔋 🔌 💡 🕯 🧯 💸 💵 💰 ⚖️ 🛠 💣 🧨 🧲 ⚰️ 🚬 💊 🧬 🦠 🩸 🛏 🛌 🚪 🔑 🎁 🎈 🎏 🎊 🎉 🎎 🧧 ✉️ 📩 📨 🏷 📆 📅 🗄 🗞 📖 📰 📖 🔖 📌 📍 ✂️ 🔐 🔏';
    const str2 = 'dgtetgaudhwiqutdi@^$@%?><"{::adagugdiAS}{+)~';

    const noEmoji2 = hasEmoji(str2);
    expect(noEmoji2).to.equal(false);

    const emojiArr1 = emojiStr.split(' ');
    const emojiArr2 = emojiTestText.split(' ');

    const random = Math.floor((Math.random() * 30) + 1);
    // N种emoji的识别
    emojiArr1.forEach(u => {
      const newSource = str2.slice(0, random) + u + str2.slice(random);
      const add = matchEmoji(newSource, 'g');
      if (add) {
        const _bol = add[0] === u;
        expect(_bol).to.equal(true);
      }
    });

    let bol2 = true;
    emojiArr1.forEach(u => {
      const testStr = str2 + u;
      const _bol = getRegExpEmoji()?.test(testStr);
      !_bol && (bol2 = false);
    });
    expect(bol2).to.equal(true);

    // 测试旗帜
    const qz = matchEmoji('d$@%3❌🚩🇨🇳🇬🇧🇭🇰🇸🇬ta', 'g');
    qz && expect(qz.join('')).to.equal('❌🚩🇨🇳🇬🇧🇭🇰🇸🇬');

    // 匹配emoji-test的所有表情
    emojiTestArr.forEach(u => {
      const testStr = u + str2 + u;
      const add = matchEmoji(testStr, 'g');
      add && expect(add[0]).to.equal(u);
      add && expect(add[1]).to.equal(u);
    });

    let bol3 = true;
    emojiArr2.forEach(u => {
      const testStr = str2 + u;
      const _bol = getRegExpEmoji()?.test(testStr);
      !_bol && (bol3 = false);
    });
    expect(bol3).to.equal(true);

    emojiArr1.forEach(u => {
      const testStr = u + str2;
      testStr.replace(getRegExpEmoji() || '', (u) => {
        const num = testStr.search(u);
        expect(num).to.equal(0);
        return u;
      });
    });

    emojiArr2.forEach(u => {
      const testStr = u + str2;
      testStr.replace(getRegExpEmoji() || '', (u) => {
        const num = testStr.search(u);
        expect(num).to.equal(0);
        return u;
      });
    });
  });
});
