// 定义码点是属于何种类型，没什么含义是随便定义的，便于区分这么叫的
export enum UnicodeType {
    CR = 0,
    LF = 1,
    Control = 2,
    Extend = 3,
    RI = 4,
    SM = 5,
    L = 6,
    V = 7,
    T = 8,
    LV = 9,
    LVT = 10,
    ZWJ = 11,
    Prepend = 12,
    EP = 13,
    Other = 14,
}

const getTypeCR = (code: number): boolean => {
  return code === 0x000d;
};

const getTypeLF = (code: number): boolean => {
  return code === 0x000a;
};

const getTypeControl = (code: number): boolean => {
  return (code >= 0x0000 && code <= 0x0009) ||
            (code >= 0x000b && code <= 0x000c) ||
            (code >= 0x000e && code <= 0x001f) ||
            (code >= 0x007f && code <= 0x009f) ||
            code === 0x00ad ||
            code === 0x061c ||
            code === 0x180e ||
            code === 0x200b ||
            (code >= 0x200e && code <= 0x200f) ||
            code === 0x2028 ||
            code === 0x2029 ||
            (code >= 0x202a && code <= 0x202e) ||
            (code >= 0x2060 && code <= 0x2064) ||
            code === 0x2065 ||
            (code >= 0x2066 && code <= 0x206f) ||
            code === 0xfeff ||
            (code >= 0xfff0 && code <= 0xfff8) ||
            (code >= 0xfff9 && code <= 0xfffb) ||
            (code >= 0x13430 && code <= 0x1343f) ||
            (code >= 0xfff9 && code <= 0xfffb) ||
            (code >= 0x1bca0 && code <= 0x1bca3) ||
            (code >= 0x1d173 && code <= 0x1d17a) ||
            code === 0xe0000 ||
            code === 0xe0001 ||
            (code >= 0xe0002 && code <= 0xe001f) ||
            (code >= 0xe0080 && code <= 0xe00ff) ||
            (code >= 0xe01f0 && code <= 0xe0fff);
};

const getTypeExtend = (code: number): boolean => {
  return (code >= 0x0300 && code <= 0x036f) ||
            (code >= 0x0483 && code <= 0x0487) ||
            (code >= 0x0488 && code <= 0x0489) ||
            (code >= 0x0591 && code <= 0x05bd) ||
            code === 0x05bf ||
            (code >= 0x05c1 && code <= 0x05c2) ||
            (code >= 0x05c4 && code <= 0x05c5) ||
            code === 0x05c7 ||
            (code >= 0x0610 && code <= 0x061a) ||
            (code >= 0x064b && code <= 0x065f) ||
            code === 0x0670 ||
            (code >= 0x06d6 && code <= 0x06dc) ||
            (code >= 0x06df && code <= 0x06e4) ||
            (code >= 0x06e7 && code <= 0x06e8) ||
            (code >= 0x06ea && code <= 0x06ed) ||
            code === 0x0711 ||
            (code >= 0x0730 && code <= 0x074a) ||
            (code >= 0x07a6 && code <= 0x07b0) ||
            (code >= 0x07eb && code <= 0x07f3) ||
            code === 0x07fd ||
            (code >= 0x0816 && code <= 0x0819) ||
            (code >= 0x081b && code <= 0x0823) ||
            (code >= 0x0825 && code <= 0x0827) ||
            (code >= 0x0829 && code <= 0x082d) ||
            (code >= 0x0859 && code <= 0x085b) ||
            (code >= 0x0898 && code <= 0x089f) ||
            (code >= 0x08ca && code <= 0x08e1) ||
            (code >= 0x08e3 && code <= 0x0902) ||
            code === 0x093a ||
            code === 0x093c ||
            (code >= 0x0941 && code <= 0x0948) ||
            code === 0x094d ||
            (code >= 0x0951 && code <= 0x0957) ||
            (code >= 0x0962 && code <= 0x0963) ||
            code === 0x0981 ||
            code === 0x09bc ||
            code === 0x09be ||
            (code >= 0x09c1 && code <= 0x09c4) ||
            code === 0x09cd ||
            code === 0x09d7 ||
            (code >= 0x09e2 && code <= 0x09e3) ||
            code === 0x09fe ||
            (code >= 0x0a01 && code <= 0x0a02) ||
            code === 0x0a3c ||
            (code >= 0x0a41 && code <= 0x0a42) ||
            (code >= 0x0a47 && code <= 0x0a48) ||
            (code >= 0x0a4b && code <= 0x0a4d) ||
            code === 0x0a51 ||
            (code >= 0x0a70 && code <= 0x0a71) ||
            code === 0x0a75 ||
            (code >= 0x0a81 && code <= 0x0a82) ||
            code === 0x0abc ||
            (code >= 0x0ac1 && code <= 0x0ac5) ||
            (code >= 0x0ac7 && code <= 0x0ac8) ||
            code === 0x0acd ||
            (code >= 0x0ae2 && code <= 0x0ae3) ||
            (code >= 0x0afa && code <= 0x0aff) ||
            code === 0x0b01 ||
            code === 0x0b3c ||
            code === 0x0b3e ||
            code === 0x0b3f ||
            (code >= 0x0b41 && code <= 0x0b44) ||
            code === 0x0b4d ||
            (code >= 0x0b55 && code <= 0x0b56) ||
            code === 0x0b57 ||
            (code >= 0x0b62 && code <= 0x0b63) ||
            code === 0x0b82 ||
            code === 0x0bbe ||
            code === 0x0bc0 ||
            code === 0x0bcd ||
            code === 0x0bd7 ||
            code === 0x0c00 ||
            code === 0x0c04 ||
            code === 0x0c3c ||
            code === 0x0c3c ||
            (code >= 0x0c3e && code <= 0x0c40) ||
            (code >= 0x0c46 && code <= 0x0c48) ||
            (code >= 0x0c4a && code <= 0x0c4d) ||
            (code >= 0x0c55 && code <= 0x0c56) ||
            (code >= 0x0c62 && code <= 0x0c63) ||
            code === 0x0c81 ||
            code === 0x0cbc ||
            code === 0x0cbf ||
            code === 0x0cc2 ||
            code === 0x0cc6 ||
            (code >= 0x0ccc && code <= 0x0ccd) ||
            (code >= 0x0cd5 && code <= 0x0cd6) ||
            (code >= 0x0ce2 && code <= 0x0ce3) ||
            (code >= 0x0d00 && code <= 0x0d01) ||
            (code >= 0x0d3b && code <= 0x0d3c) ||
            code === 0x0d3e ||
            (code >= 0x0d41 && code <= 0x0d44) ||
            code === 0x0d4d ||
            code === 0x0d57 ||
            (code >= 0x0d62 && code <= 0x0d63) ||
            code === 0x0d81 ||
            code === 0x0dca ||
            code === 0x0dcf ||
            (code >= 0x0dd2 && code <= 0x0dd4) ||
            code === 0x0dd6 ||
            code === 0x0ddf ||
            code === 0x0e31 ||
            (code >= 0x0e34 && code <= 0x0e3a) ||
            (code >= 0x0e47 && code <= 0x0e4e) ||
            code === 0x0eb1 ||
            (code >= 0x0eb4 && code <= 0x0ebc) ||
            (code >= 0x0ec8 && code <= 0x0ece) ||
            (code >= 0x0f18 && code <= 0x0f19) ||
            code === 0x0f35 ||
            code === 0x0f37 ||
            code === 0x0f39 ||
            (code >= 0x0f71 && code <= 0x0f7e) ||
            (code >= 0x0f80 && code <= 0x0f84) ||
            (code >= 0x0f86 && code <= 0x0f87) ||
            (code >= 0x0f8d && code <= 0x0f97) ||
            (code >= 0x0f99 && code <= 0x0fbc) ||
            code === 0x0fc6 ||
            (code >= 0x102d && code <= 0x1030) ||
            (code >= 0x1032 && code <= 0x1037) ||
            (code >= 0x1039 && code <= 0x103a) ||
            (code >= 0x103d && code <= 0x103e) ||
            (code >= 0x1058 && code <= 0x1059) ||
            (code >= 0x105e && code <= 0x1060) ||
            (code >= 0x1071 && code <= 0x1074) ||
            code === 0x1082 ||
            (code >= 0x1085 && code <= 0x1086) ||
            code === 0x108d ||
            code === 0x109d ||
            (code >= 0x135d && code <= 0x135f) ||
            (code >= 0x1712 && code <= 0x1714) ||
            (code >= 0x1732 && code <= 0x1733) ||
            (code >= 0x1752 && code <= 0x1753) ||
            (code >= 0x1772 && code <= 0x1773) ||
            (code >= 0x17b4 && code <= 0x17b5) ||
            (code >= 0x17b7 && code <= 0x17bd) ||
            code === 0x17c6 ||
            (code >= 0x17c9 && code <= 0x17d3) ||
            code === 0x17dd ||
            (code >= 0x180b && code <= 0x180d) ||
            code === 0x180f ||
            (code >= 0x1885 && code <= 0x1886) ||
            code === 0x18a9 ||
            (code >= 0x1920 && code <= 0x1922) ||
            (code >= 0x1927 && code <= 0x1928) ||
            code === 0x1932 ||
            (code >= 0x1939 && code <= 0x193b) ||
            (code >= 0x1a17 && code <= 0x1a18) ||
            code === 0x1a1b ||
            code === 0x1a56 ||
            (code >= 0x1a58 && code <= 0x1a5e) ||
            code === 0x1a60 ||
            code === 0x1a62 ||
            (code >= 0x1a65 && code <= 0x1a6c) ||
            (code >= 0x1a73 && code <= 0x1a7c) ||
            code === 0x1a7f ||
            (code >= 0x1ab0 && code <= 0x1abd) ||
            code === 0x1abe ||
            code === 0x1b35 ||
            (code >= 0x1abf && code <= 0x1ace) ||
            (code >= 0x1b00 && code <= 0x1b03) ||
            code === 0x1b34 ||
            (code >= 0x1b36 && code <= 0x1b3a) ||
            code === 0x1b3c ||
            code === 0x1b42 ||
            (code >= 0x1b6b && code <= 0x1b73) ||
            (code >= 0x1b80 && code <= 0x1b81) ||
            (code >= 0x1ba2 && code <= 0x1ba5) ||
            (code >= 0x1ba8 && code <= 0x1ba9) ||
            (code >= 0x1bab && code <= 0x1bad) ||
            code === 0x1be6 ||
            (code >= 0x1be8 && code <= 0x1be9) ||
            code === 0x1bed ||
            (code >= 0x1bef && code <= 0x1bf1) ||
            (code >= 0x1c2c && code <= 0x1c33) ||
            (code >= 0x1c36 && code <= 0x1c37) ||
            (code >= 0x1cd0 && code <= 0x1cd2) ||
            (code >= 0x1cd4 && code <= 0x1ce0) ||
            (code >= 0x1ce2 && code <= 0x1ce8) ||
            code === 0x1ced ||
            code === 0x1cf4 ||
            (code >= 0x1cf8 && code <= 0x1cf9) ||
            (code >= 0x1dc0 && code <= 0x1dff) ||
            code === 0x200c ||
            (code >= 0x20d0 && code <= 0x20dc) ||
            (code >= 0x20dd && code <= 0x20e0) ||
            code === 0x20e1 ||
            (code >= 0x20e2 && code <= 0x20e4) ||
            (code >= 0x20e5 && code <= 0x20f0) ||
            (code >= 0x2cef && code <= 0x2cf1) ||
            code === 0x2d7f ||
            (code >= 0x2de0 && code <= 0x2dff) ||
            (code >= 0x302a && code <= 0x302d) ||
            (code >= 0x302e && code <= 0x302f) ||
            (code >= 0x3099 && code <= 0x309a) ||
            code === 0xa66f ||
            (code >= 0xa670 && code <= 0xa672) ||
            (code >= 0xa674 && code <= 0xa67d) ||
            (code >= 0xa69e && code <= 0xa69f) ||
            (code >= 0xa6f0 && code <= 0xa6f1) ||
            code === 0xa802 ||
            code === 0xa806 ||
            code === 0xa80b ||
            (code >= 0xa825 && code <= 0xa826) ||
            code === 0xa82c ||
            (code >= 0xa8c4 && code <= 0xa8c5) ||
            (code >= 0xa8e0 && code <= 0xa8f1) ||
            code === 0xa8ff ||
            (code >= 0xa926 && code <= 0xa92d) ||
            (code >= 0xa947 && code <= 0xa951) ||
            (code >= 0xa980 && code <= 0xa982) ||
            code === 0xa9b3 ||
            (code >= 0xa9b6 && code <= 0xa9b9) ||
            (code >= 0xa9bc && code <= 0xa9bd) ||
            code === 0xa9e5 ||
            (code >= 0xaa29 && code <= 0xaa2e) ||
            (code >= 0xaa31 && code <= 0xaa32) ||
            (code >= 0xaa35 && code <= 0xaa36) ||
            code === 0xaa43 ||
            code === 0xaa4c ||
            code === 0xaa7c ||
            code === 0xaab0 ||
            (code >= 0xaab2 && code <= 0xaab4) ||
            (code >= 0xaab7 && code <= 0xaab8) ||
            (code >= 0xaabe && code <= 0xaabf) ||
            code === 0xaac1 ||
            (code >= 0xaaec && code <= 0xaaed) ||
            code === 0xaaf6 ||
            code === 0xabe5 ||
            code === 0xabe8 ||
            code === 0xabed ||
            code === 0xfb1e ||
            (code >= 0xfe00 && code <= 0xfe0f) ||
            (code >= 0xfe20 && code <= 0xfe2f) ||
            (code >= 0xff9e && code <= 0xff9f) ||
            code === 0x101fd ||
            code === 0x102e0 ||
            (code >= 0x10376 && code <= 0x1037a) ||
            (code >= 0x10a01 && code <= 0x10a03) ||
            (code >= 0x10a05 && code <= 0x10a06) ||
            (code >= 0x10a0c && code <= 0x10a0f) ||
            (code >= 0x10a38 && code <= 0x10a3a) ||
            code === 0x10a3f ||
            (code >= 0x10ae5 && code <= 0x10ae6) ||
            (code >= 0x10d24 && code <= 0x10d27) ||
            (code >= 0x10eab && code <= 0x10eac) ||
            (code >= 0x10efd && code <= 0x10eff) ||
            (code >= 0x10f46 && code <= 0x10f50) ||
            (code >= 0x10f82 && code <= 0x10f85) ||
            code === 0x11001 ||
            (code >= 0x11038 && code <= 0x11046) ||
            code === 0x11070 ||
            (code >= 0x11073 && code <= 0x11074) ||
            (code >= 0x1107f && code <= 0x11081) ||
            (code >= 0x110b3 && code <= 0x110b6) ||
            (code >= 0x110b9 && code <= 0x110ba) ||
            code === 0x110c2 ||
            (code >= 0x11100 && code <= 0x11102) ||
            (code >= 0x11127 && code <= 0x1112b) ||
            (code >= 0x1112d && code <= 0x11134) ||
            code === 0x11173 ||
            (code >= 0x11180 && code <= 0x11181) ||
            (code >= 0x111b6 && code <= 0x111be) ||
            (code >= 0x111c9 && code <= 0x111cc) ||
            code === 0x111cf ||
            (code >= 0x1122f && code <= 0x11231) ||
            code === 0x11234 ||
            (code >= 0x11236 && code <= 0x11237) ||
            code === 0x1123e ||
            code === 0x11241 ||
            code === 0x112df ||
            (code >= 0x112e3 && code <= 0x112ea) ||
            (code >= 0x11300 && code <= 0x11301) ||
            (code >= 0x1133b && code <= 0x1133c) ||
            code === 0x1133e ||
            code === 0x11340 ||
            code === 0x11357 ||
            (code >= 0x11366 && code <= 0x1136c) ||
            (code >= 0x11370 && code <= 0x11374) ||
            (code >= 0x11438 && code <= 0x1143f) ||
            (code >= 0x11442 && code <= 0x11444) ||
            code === 0x11446 ||
            code === 0x1145e ||
            code === 0x114b0 ||
            (code >= 0x114b3 && code <= 0x114b8) ||
            code === 0x114ba ||
            code === 0x114bd ||
            (code >= 0x114bf && code <= 0x114c0) ||
            (code >= 0x114c2 && code <= 0x114c3) ||
            code === 0x115af ||
            (code >= 0x115b2 && code <= 0x115b5) ||
            (code >= 0x115bc && code <= 0x115bd) ||
            (code >= 0x115bf && code <= 0x115c0) ||
            (code >= 0x115dc && code <= 0x115dd) ||
            (code >= 0x11633 && code <= 0x1163a) ||
            code === 0x1163d ||
            (code >= 0x1163f && code <= 0x11640) ||
            code === 0x116ab ||
            code === 0x116ad ||
            (code >= 0x116b0 && code <= 0x116b5) ||
            code === 0x116b7 ||
            (code >= 0x1171d && code <= 0x1171f) ||
            (code >= 0x11722 && code <= 0x11725) ||
            (code >= 0x11727 && code <= 0x1172b) ||
            (code >= 0x1182f && code <= 0x11837) ||
            (code >= 0x11839 && code <= 0x1183a) ||
            (code >= 0x1193b && code <= 0x1193c) ||
            (code >= 0x119d4 && code <= 0x119d7) ||
            (code >= 0x119da && code <= 0x119da) ||
            code === 0x11930 ||
            code === 0x1193e ||
            code === 0x11943 ||
            code === 0x119e0 ||
            (code >= 0x11a01 && code <= 0x11a0a) ||
            (code >= 0x11a33 && code <= 0x11a38) ||
            (code >= 0x11a3b && code <= 0x11a3e) ||
            code === 0x11a47 ||
            (code >= 0x11a51 && code <= 0x11a56) ||
            (code >= 0x11a59 && code <= 0x11a5b) ||
            (code >= 0x11a8a && code <= 0x11a96) ||
            (code >= 0x11a98 && code <= 0x11a99) ||
            (code >= 0x11c30 && code <= 0x11c36) ||
            (code >= 0x11c38 && code <= 0x11c3d) ||
            code === 0x11c3f ||
            (code >= 0x11c92 && code <= 0x11ca7) ||
            (code >= 0x11caa && code <= 0x11cb0) ||
            (code >= 0x11cb2 && code <= 0x11cb3) ||
            (code >= 0x11cb5 && code <= 0x11cb6) ||
            (code >= 0x11d31 && code <= 0x11d36) ||
            code === 0x11d3a ||
            (code >= 0x11d3c && code <= 0x11d3d) ||
            (code >= 0x11d3f && code <= 0x11d45) ||
            code === 0x11d47 ||
            code === 0x11d95 ||
            code === 0x11d97 ||
            code === 0x11f40 ||
            code === 0x11f42 ||
            code === 0x13440 ||
            (code >= 0x11d90 && code <= 0x11d91) ||
            (code >= 0x11ef3 && code <= 0x11ef4) ||
            (code >= 0x11f00 && code <= 0x11f01) ||
            (code >= 0x11f36 && code <= 0x11f3a) ||
            (code >= 0x13447 && code <= 0x13455) ||
            (code >= 0x16af0 && code <= 0x16af4) ||
            (code >= 0x16b30 && code <= 0x16b36) ||
            code === 0x16f4f ||
            (code >= 0x16f8f && code <= 0x16f92) ||
            code === 0x16fe4 ||
            (code >= 0x1bc9d && code <= 0x1bc9e) ||
            (code >= 0x1cf00 && code <= 0x1cf2d) ||
            (code >= 0x1cf30 && code <= 0x1cf46) ||
            code === 0x1d165 ||
            (code >= 0x1d167 && code <= 0x1d169) ||
            (code >= 0x1d16e && code <= 0x1d172) ||
            (code >= 0x1d17b && code <= 0x1d182) ||
            (code >= 0x1d185 && code <= 0x1d18b) ||
            (code >= 0x1d1aa && code <= 0x1d1ad) ||
            (code >= 0x1d242 && code <= 0x1d244) ||
            (code >= 0x1da00 && code <= 0x1da36) ||
            (code >= 0x1da3b && code <= 0x1da6c) ||
            code === 0x1da75 ||
            code === 0x1da84 ||
            (code >= 0x1da9b && code <= 0x1da9f) ||
            (code >= 0x1daa1 && code <= 0x1daaf) ||
            (code >= 0x1e000 && code <= 0x1e006) ||
            (code >= 0x1e008 && code <= 0x1e018) ||
            (code >= 0x1e01b && code <= 0x1e021) ||
            (code >= 0x1e023 && code <= 0x1e024) ||
            (code >= 0x1e026 && code <= 0x1e02a) ||
            code === 0x1e08f ||
            code === 0x1e2Ae ||
            (code >= 0x1e130 && code <= 0x1e136) ||
            (code >= 0x1e2ec && code <= 0x1e2ef) ||
            (code >= 0x1e4ec && code <= 0x1e4ef) ||
            (code >= 0x1e8d0 && code <= 0x1e8d6) ||
            (code >= 0x1e944 && code <= 0x1e94a) ||
            (code >= 0x1f3fb && code <= 0x1f3ff) ||
            (code >= 0xe0020 && code <= 0xe007f) ||
            (code >= 0xe0100 && code <= 0xe01ef);
};

const getTypeRI = (code: number): boolean => {
  return code >= 0x1F1E6 && code <= 0x1F1FF;
};

const getTypeSM = (code: number): boolean => {
  return code === 0x0903 ||
            code === 0x093b ||
            (code >= 0x093e && code <= 0x0940) ||
            (code >= 0x0949 && code <= 0x094c) ||
            (code >= 0x094e && code <= 0x094f) ||
            (code >= 0x0982 && code <= 0x0983) ||
            (code >= 0x09bf && code <= 0x09c0) ||
            (code >= 0x09c7 && code <= 0x09c8) ||
            (code >= 0x09cb && code <= 0x09cc) ||
            code === 0x0a03 ||
            (code >= 0x0a3e && code <= 0x0a40) ||
            code === 0x0a83 ||
            (code >= 0x0abe && code <= 0x0ac0) ||
            code === 0x0ac9 ||
            (code >= 0x0acb && code <= 0x0acc) ||
            (code >= 0x0b02 && code <= 0x0b03) ||
            code === 0x0b40 ||
            (code >= 0x0b47 && code <= 0x0b48) ||
            (code >= 0x0b4b && code <= 0x0b4c) ||
            code === 0x0bbf ||
            (code >= 0x0bc1 && code <= 0x0bc2) ||
            (code >= 0x0bc6 && code <= 0x0bc8) ||
            (code >= 0x0bca && code <= 0x0bcc) ||
            (code >= 0x0c01 && code <= 0x0c03) ||
            (code >= 0x0c41 && code <= 0x0c44) ||
            (code >= 0x0c82 && code <= 0x0c83) ||
            code === 0x0cbe ||
            (code >= 0x0cc0 && code <= 0x0cc1) ||
            (code >= 0x0cc3 && code <= 0x0cc4) ||
            (code >= 0x0cc7 && code <= 0x0cc8) ||
            (code >= 0x0cca && code <= 0x0ccb) ||
            code === 0x0cf3 ||
            (code >= 0x0d02 && code <= 0x0d03) ||
            (code >= 0x0d3f && code <= 0x0d40) ||
            (code >= 0x0d46 && code <= 0x0d48) ||
            (code >= 0x0d4a && code <= 0x0d4c) ||
            (code >= 0x0d82 && code <= 0x0d83) ||
            (code >= 0x0dd0 && code <= 0x0dd1) ||
            (code >= 0x0dd8 && code <= 0x0dde) ||
            (code >= 0x0df2 && code <= 0x0df3) ||
            code === 0x0e33 ||
            code === 0x0eb3 ||
            (code >= 0x0f3e && code <= 0x0f3f) ||
            code === 0x0f7f || code === 0x1031 ||
            (code >= 0x103b && code <= 0x103c) ||
            (code >= 0x1056 && code <= 0x1057) ||
            code === 0x1084 || code === 0x1715 ||
            code === 0x1734 || code === 0x17b6 ||
            (code >= 0x17be && code <= 0x17c5) ||
            (code >= 0x17c7 && code <= 0x17c8) ||
            (code >= 0x1923 && code <= 0x1926) ||
            (code >= 0x1929 && code <= 0x192b) ||
            (code >= 0x1930 && code <= 0x1931) ||
            (code >= 0x1933 && code <= 0x1938) ||
            (code >= 0x1a19 && code <= 0x1a1a) ||
            code === 0x1a55 ||
            code === 0x1a57 ||
            (code >= 0x1a6d && code <= 0x1a72) ||
            code === 0x1b04 || code === 0x1b3b ||
            (code >= 0x1b3d && code <= 0x1b41) ||
            (code >= 0x1b43 && code <= 0x1b44) ||
            code === 0x1b82 ||
            code === 0x1ba1 ||
            (code >= 0x1ba6 && code <= 0x1ba7) ||
            code === 0x1baa ||
            code === 0x1be7 ||
            (code >= 0x1bea && code <= 0x1bec) ||
            code === 0x1bee ||
            (code >= 0x1bf2 && code <= 0x1bf3) ||
            (code >= 0x1c24 && code <= 0x1c2b) ||
            (code >= 0x1c34 && code <= 0x1c35) ||
            code === 0x1ce1 ||
            code === 0x1cf7 ||
            (code >= 0xa823 && code <= 0xa824) ||
            code === 0xa827 ||
            (code >= 0xa880 && code <= 0xa881) ||
            (code >= 0xa8b4 && code <= 0xa8c3) ||
            (code >= 0xa952 && code <= 0xa953) ||
            code === 0xa983 ||
            (code >= 0xa9b4 && code <= 0xa9b5) ||
            (code >= 0xa9ba && code <= 0xa9bb) ||
            (code >= 0xa9be && code <= 0xa9c0) ||
            (code >= 0xaa2f && code <= 0xaa30) ||
            (code >= 0xaa33 && code <= 0xaa34) ||
            code === 0xaa4d ||
            code === 0xaaeb ||
            (code >= 0xaaee && code <= 0xaaef) ||
            code === 0xaaf5 ||
            (code >= 0xabe3 && code <= 0xabe4) ||
            (code >= 0xabe6 && code <= 0xabe7) ||
            (code >= 0xabe9 && code <= 0xabea) ||
            code === 0xabec ||
            code === 0x11000 ||
            code === 0x11002 ||
            code === 0x11082 ||
            (code >= 0x110b0 && code <= 0x110b2) ||
            (code >= 0x110b7 && code <= 0x110b8) ||
            code === 0x1112c ||
            (code >= 0x11145 && code <= 0x11146) ||
            code === 0x11182 ||
            (code >= 0x111b3 && code <= 0x111b5) ||
            (code >= 0x111bf && code <= 0x111c0) ||
            code === 0x111ce ||
            (code >= 0x1122c && code <= 0x1122e) ||
            (code >= 0x11232 && code <= 0x11233) ||
            code === 0x11235 ||
            (code >= 0x112e0 && code <= 0x112e2) ||
            (code >= 0x11302 && code <= 0x11303) ||
            code === 0x1133f ||
            (code >= 0x11341 && code <= 0x11344) ||
            (code >= 0x11347 && code <= 0x11348) ||
            (code >= 0x1134b && code <= 0x1134d) ||
            (code >= 0x11362 && code <= 0x11363) ||
            (code >= 0x11435 && code <= 0x11437) ||
            (code >= 0x11440 && code <= 0x11441) ||
            code === 0x11445 ||
            (code >= 0x114b1 && code <= 0x114b2) ||
            code === 0x114b9 ||
            (code >= 0x114bb && code <= 0x114bc) ||
            code === 0x114be ||
            code === 0x114c1 ||
            (code >= 0x115b0 && code <= 0x115b1) ||
            (code >= 0x115b8 && code <= 0x115bb) ||
            code === 0x115be ||
            (code >= 0x11630 && code <= 0x11632) ||
            (code >= 0x1163b && code <= 0x1163c) ||
            code === 0x1163e ||
            code === 0x116ac ||
            (code >= 0x116ae && code <= 0x116af) ||
            code === 0x116b6 ||
            code === 0x11726 ||
            (code >= 0x1182c && code <= 0x1182e) ||
            code === 0x11838 ||
            (code >= 0x11931 && code <= 0x11935) ||
            (code >= 0x11937 && code <= 0x11938) ||
            code === 0x1193d ||
            code === 0x11940 ||
            code === 0x11942 ||
            (code >= 0x119d1 && code <= 0x119d3) ||
            (code >= 0x119dc && code <= 0x119df) ||
            code === 0x119e4 ||
            code === 0x11a39 ||
            (code >= 0x11a57 && code <= 0x11a58) ||
            code === 0x11a97 ||
            code === 0x11c2f ||
            code === 0x11c3e || code === 0x11ca9 ||
            code === 0x11cb1 ||
            code === 0x11cb4 ||
            (code >= 0x11d8a && code <= 0x11d8e) ||
            (code >= 0x11d93 && code <= 0x11d94) ||
            code === 0x11d96 ||
            (code >= 0x11ef5 && code <= 0x11ef6) ||
            code === 0x11f03 ||
            (code >= 0x11f34 && code <= 0x11f35) ||
            (code >= 0x11f3e && code <= 0x11f3f) ||
            code === 0x11f41 ||
            (code >= 0x16f51 && code <= 0x16f87) ||
            (code >= 0x16ff0 && code <= 0x16ff1) ||
            code === 0x1d166 ||
            code === 0x1d16d;
};

const getTypeL = (code: number): boolean => {
  return (code >= 0x1100 && code <= 0x115F) || (code >= 0xA960 && code <= 0xA97C);
};

const getTypeV = (code: number): boolean => {
  return (code >= 0x1160 && code <= 0x11A7) || (code >= 0xD7B0 && code <= 0xD7C6);
};

const getTypeT = (code: number): boolean => {
  return (code >= 0x11A8 && code <= 0x11FF) || (code >= 0xD7CB && code <= 0xD7FB);
};

const getTypeLV = (code: number): boolean => {
  return code === 0xac00 ||
            code === 0xac1c ||
            code === 0xac38 ||
            code === 0xac54 ||
            code === 0xac70 ||
            code === 0xac8c ||
            code === 0xaca8 ||
            code === 0xacc4 ||
            code === 0xace0 ||
            code === 0xacfc ||
            code === 0xad18 ||
            code === 0xad34 ||
            code === 0xad50 ||
            code === 0xad6c ||
            code === 0xad88 ||
            code === 0xada4 ||
            code === 0xadc0 ||
            code === 0xaddc ||
            code === 0xadf8 ||
            code === 0xae14 ||
            code === 0xae30 ||
            code === 0xae4c ||
            code === 0xae68 ||
            code === 0xae84 ||
            code === 0xaea0 ||
            code === 0xaebc ||
            code === 0xaed8 ||
            code === 0xaef4 ||
            code === 0xaf10 ||
            code === 0xaf2c ||
            code === 0xaf48 ||
            code === 0xaf64 ||
            code === 0xaf80 ||
            code === 0xaf9c ||
            code === 0xafb8 ||
            code === 0xafd4 ||
            code === 0xaff0 ||
            code === 0xb00c ||
            code === 0xb028 ||
            code === 0xb044 ||
            code === 0xb060 ||
            code === 0xb07c ||
            code === 0xb098 ||
            code === 0xb0b4 ||
            code === 0xb0d0 ||
            code === 0xb0ec ||
            code === 0xb108 ||
            code === 0xb124 ||
            code === 0xb140 ||
            code === 0xb15c ||
            code === 0xb178 ||
            code === 0xb194 ||
            code === 0xb1b0 ||
            code === 0xb1cc ||
            code === 0xb1e8 ||
            code === 0xb204 ||
            code === 0xb220 ||
            code === 0xb23c ||
            code === 0xb258 ||
            code === 0xb274 ||
            code === 0xb290 ||
            code === 0xb2ac ||
            code === 0xb2c8 ||
            code === 0xb2e4 ||
            code === 0xb300 ||
            code === 0xb31c ||
            code === 0xb338 ||
            code === 0xb354 ||
            code === 0xb370 ||
            code === 0xb38c ||
            code === 0xb3a8 ||
            code === 0xb3c4 ||
            code === 0xb3e0 ||
            code === 0xb3fc ||
            code === 0xb418 ||
            code === 0xb434 ||
            code === 0xb450 ||
            code === 0xb46c ||
            code === 0xb488 ||
            code === 0xb4a4 ||
            code === 0xb4c0 ||
            code === 0xb4dc ||
            code === 0xb4f8 ||
            code === 0xb514 ||
            code === 0xb530 ||
            code === 0xb54c ||
            code === 0xb568 ||
            code === 0xb584 ||
            code === 0xb5a0 ||
            code === 0xb5bc ||
            code === 0xb5d8 ||
            code === 0xb5f4 ||
            code === 0xb610 ||
            code === 0xb62c ||
            code === 0xb648 ||
            code === 0xb664 ||
            code === 0xb680 ||
            code === 0xb69c ||
            code === 0xb6b8 ||
            code === 0xb6d4 ||
            code === 0xb6f0 ||
            code === 0xb70c ||
            code === 0xb728 ||
            code === 0xb744 ||
            code === 0xb760 ||
            code === 0xb77c ||
            code === 0xb798 ||
            code === 0xb7b4 ||
            code === 0xb7d0 ||
            code === 0xb7ec ||
            code === 0xb808 ||
            code === 0xb824 ||
            code === 0xb840 ||
            code === 0xb85c ||
            code === 0xb878 ||
            code === 0xb894 ||
            code === 0xb8b0 ||
            code === 0xb8cc ||
            code === 0xb8e8 ||
            code === 0xb904 ||
            code === 0xb920 ||
            code === 0xb93c ||
            code === 0xb958 ||
            code === 0xb974 ||
            code === 0xb990 ||
            code === 0xb9ac ||
            code === 0xb9c8 ||
            code === 0xb9e4 ||
            code === 0xba00 ||
            code === 0xba1c ||
            code === 0xba38 ||
            code === 0xba54 ||
            code === 0xba70 ||
            code === 0xba8c ||
            code === 0xbaa8 ||
            code === 0xbac4 ||
            code === 0xbae0 ||
            code === 0xbafc ||
            code === 0xbb18 ||
            code === 0xbb34 ||
            code === 0xbb50 ||
            code === 0xbb6c ||
            code === 0xbb88 ||
            code === 0xbba4 ||
            code === 0xbbc0 ||
            code === 0xbbdc ||
            code === 0xbbf8 ||
            code === 0xbc14 ||
            code === 0xbc30 ||
            code === 0xbc4c ||
            code === 0xbc68 ||
            code === 0xbc84 ||
            code === 0xbca0 ||
            code === 0xbcbc ||
            code === 0xbcd8 ||
            code === 0xbcf4 ||
            code === 0xbd10 ||
            code === 0xbd2c ||
            code === 0xbd48 ||
            code === 0xbd64 ||
            code === 0xbd80 ||
            code === 0xbd9c ||
            code === 0xbdb8 ||
            code === 0xbdd4 ||
            code === 0xbdf0 ||
            code === 0xbe0c ||
            code === 0xbe28 ||
            code === 0xbe44 ||
            code === 0xbe60 ||
            code === 0xbe7c ||
            code === 0xbe98 ||
            code === 0xbeb4 ||
            code === 0xbed0 ||
            code === 0xbeec ||
            code === 0xbf08 ||
            code === 0xbf24 ||
            code === 0xbf40 ||
            code === 0xbf5c ||
            code === 0xbf78 ||
            code === 0xbf94 ||
            code === 0xbfb0 ||
            code === 0xbfcc ||
            code === 0xbfe8 ||
            code === 0xc004 ||
            code === 0xc020 ||
            code === 0xc03c ||
            code === 0xc058 ||
            code === 0xc074 ||
            code === 0xc090 ||
            code === 0xc0ac ||
            code === 0xc0c8 ||
            code === 0xc0e4 ||
            code === 0xc100 ||
            code === 0xc11c ||
            code === 0xc138 ||
            code === 0xc154 ||
            code === 0xc170 ||
            code === 0xc18c ||
            code === 0xc1a8 ||
            code === 0xc1c4 ||
            code === 0xc1e0 ||
            code === 0xc1fc ||
            code === 0xc218 ||
            code === 0xc234 ||
            code === 0xc250 ||
            code === 0xc26c ||
            code === 0xc288 ||
            code === 0xc2a4 ||
            code === 0xc2c0 ||
            code === 0xc2dc ||
            code === 0xc2f8 ||
            code === 0xc314 ||
            code === 0xc330 ||
            code === 0xc34c ||
            code === 0xc368 ||
            code === 0xc384 ||
            code === 0xc3a0 ||
            code === 0xc3bc ||
            code === 0xc3d8 ||
            code === 0xc3f4 ||
            code === 0xc410 ||
            code === 0xc42c ||
            code === 0xc448 ||
            code === 0xc464 ||
            code === 0xc480 ||
            code === 0xc49c ||
            code === 0xc4b8 ||
            code === 0xc4d4 ||
            code === 0xc4f0 ||
            code === 0xc50c ||
            code === 0xc528 ||
            code === 0xc544 ||
            code === 0xc560 ||
            code === 0xc57c ||
            code === 0xc598 ||
            code === 0xc5b4 ||
            code === 0xc5d0 ||
            code === 0xc5ec ||
            code === 0xc608 ||
            code === 0xc624 ||
            code === 0xc640 ||
            code === 0xc65c ||
            code === 0xc678 ||
            code === 0xc694 ||
            code === 0xc6b0 ||
            code === 0xc6cc ||
            code === 0xc6e8 ||
            code === 0xc704 ||
            code === 0xc720 ||
            code === 0xc73c ||
            code === 0xc758 ||
            code === 0xc774 ||
            code === 0xc790 ||
            code === 0xc7ac ||
            code === 0xc7c8 ||
            code === 0xc7e4 ||
            code === 0xc800 ||
            code === 0xc81c ||
            code === 0xc838 ||
            code === 0xc854 ||
            code === 0xc870 ||
            code === 0xc88c ||
            code === 0xc8a8 ||
            code === 0xc8c4 ||
            code === 0xc8e0 ||
            code === 0xc8fc ||
            code === 0xc918 ||
            code === 0xc934 ||
            code === 0xc950 ||
            code === 0xc96c ||
            code === 0xc988 ||
            code === 0xc9a4 ||
            code === 0xc9c0 ||
            code === 0xc9dc ||
            code === 0xc9f8 ||
            code === 0xca14 ||
            code === 0xca30 ||
            code === 0xca4c ||
            code === 0xca68 ||
            code === 0xca84 ||
            code === 0xcaa0 ||
            code === 0xcabc ||
            code === 0xcad8 ||
            code === 0xcaf4 ||
            code === 0xcb10 ||
            code === 0xcb2c ||
            code === 0xcb48 ||
            code === 0xcb64 ||
            code === 0xcb80 ||
            code === 0xcb9c ||
            code === 0xcbb8 ||
            code === 0xcbd4 ||
            code === 0xcbf0 ||
            code === 0xcc0c ||
            code === 0xcc28 ||
            code === 0xcc44 ||
            code === 0xcc60 ||
            code === 0xcc7c ||
            code === 0xcc98 ||
            code === 0xccb4 ||
            code === 0xccd0 ||
            code === 0xccec ||
            code === 0xcd08 ||
            code === 0xcd24 ||
            code === 0xcd40 ||
            code === 0xcd5c ||
            code === 0xcd78 ||
            code === 0xcd94 ||
            code === 0xcdb0 ||
            code === 0xcdcc ||
            code === 0xcde8 ||
            code === 0xce04 ||
            code === 0xce20 ||
            code === 0xce3c ||
            code === 0xce58 ||
            code === 0xce74 ||
            code === 0xce90 ||
            code === 0xceac ||
            code === 0xcec8 ||
            code === 0xcee4 ||
            code === 0xcf00 ||
            code === 0xcf1c ||
            code === 0xcf38 ||
            code === 0xcf54 ||
            code === 0xcf70 ||
            code === 0xcf8c ||
            code === 0xcfa8 ||
            code === 0xcfc4 ||
            code === 0xcfe0 ||
            code === 0xcffc ||
            code === 0xd018 ||
            code === 0xd034 ||
            code === 0xd050 ||
            code === 0xd06c ||
            code === 0xd088 ||
            code === 0xd0a4 ||
            code === 0xd0c0 ||
            code === 0xd0dc ||
            code === 0xd0f8 ||
            code === 0xd114 ||
            code === 0xd130 ||
            code === 0xd14c ||
            code === 0xd168 ||
            code === 0xd184 ||
            code === 0xd1a0 ||
            code === 0xd1bc ||
            code === 0xd1d8 ||
            code === 0xd1f4 ||
            code === 0xd210 ||
            code === 0xd22c ||
            code === 0xd248 ||
            code === 0xd264 ||
            code === 0xd280 ||
            code === 0xd29c ||
            code === 0xd2b8 ||
            code === 0xd2d4 ||
            code === 0xd2f0 ||
            code === 0xd30c ||
            code === 0xd328 ||
            code === 0xd344 ||
            code === 0xd360 ||
            code === 0xd37c ||
            code === 0xd398 ||
            code === 0xd3b4 ||
            code === 0xd3d0 ||
            code === 0xd3ec ||
            code === 0xd408 ||
            code === 0xd424 ||
            code === 0xd440 ||
            code === 0xd45c ||
            code === 0xd478 ||
            code === 0xd494 ||
            code === 0xd4b0 ||
            code === 0xd4cc ||
            code === 0xd4e8 ||
            code === 0xd504 ||
            code === 0xd520 ||
            code === 0xd53c ||
            code === 0xd558 ||
            code === 0xd574 ||
            code === 0xd590 ||
            code === 0xd5ac ||
            code === 0xd5c8 ||
            code === 0xd5e4 ||
            code === 0xd600 ||
            code === 0xd61c ||
            code === 0xd638 ||
            code === 0xd654 ||
            code === 0xd670 ||
            code === 0xd68c ||
            code === 0xd6a8 ||
            code === 0xd6c4 ||
            code === 0xd6e0 ||
            code === 0xd6fc ||
            code === 0xd718 ||
            code === 0xd734 ||
            code === 0xd750 ||
            code === 0xd76c ||
            code === 0xd788;
};

const getTypeLVT = (code: number): boolean => {
  return (code >= 0xac01 && code <= 0xac1b) ||
            (code >= 0xac1d && code <= 0xac37) ||
            (code >= 0xac39 && code <= 0xac53) ||
            (code >= 0xac55 && code <= 0xac6f) ||
            (code >= 0xac71 && code <= 0xac8b) ||
            (code >= 0xac8d && code <= 0xaca7) ||
            (code >= 0xaca9 && code <= 0xacc3) ||
            (code >= 0xacc5 && code <= 0xacdf) ||
            (code >= 0xace1 && code <= 0xacfb) ||
            (code >= 0xacfd && code <= 0xad17) ||
            (code >= 0xad19 && code <= 0xad33) ||
            (code >= 0xad35 && code <= 0xad4f) ||
            (code >= 0xad51 && code <= 0xad6b) ||
            (code >= 0xad6d && code <= 0xad87) ||
            (code >= 0xad89 && code <= 0xada3) ||
            (code >= 0xada5 && code <= 0xadbf) ||
            (code >= 0xadc1 && code <= 0xaddb) ||
            (code >= 0xaddd && code <= 0xadf7) ||
            (code >= 0xadf9 && code <= 0xae13) ||
            (code >= 0xae15 && code <= 0xae2f) ||
            (code >= 0xae31 && code <= 0xae4b) ||
            (code >= 0xae4d && code <= 0xae67) ||
            (code >= 0xae69 && code <= 0xae83) ||
            (code >= 0xae85 && code <= 0xae9f) ||
            (code >= 0xaea1 && code <= 0xaebb) ||
            (code >= 0xaebd && code <= 0xaed7) ||
            (code >= 0xaed9 && code <= 0xaef3) ||
            (code >= 0xaef5 && code <= 0xaf0f) ||
            (code >= 0xaf11 && code <= 0xaf2b) ||
            (code >= 0xaf2d && code <= 0xaf47) ||
            (code >= 0xaf49 && code <= 0xaf63) ||
            (code >= 0xaf65 && code <= 0xaf7f) ||
            (code >= 0xaf81 && code <= 0xaf9b) ||
            (code >= 0xaf9d && code <= 0xafb7) ||
            (code >= 0xafb9 && code <= 0xafd3) ||
            (code >= 0xafd5 && code <= 0xafef) ||
            (code >= 0xaff1 && code <= 0xb00b) ||
            (code >= 0xb00d && code <= 0xb027) ||
            (code >= 0xb029 && code <= 0xb043) ||
            (code >= 0xb045 && code <= 0xb05f) ||
            (code >= 0xb061 && code <= 0xb07b) ||
            (code >= 0xb07d && code <= 0xb097) ||
            (code >= 0xb099 && code <= 0xb0b3) ||
            (code >= 0xb0b5 && code <= 0xb0cf) ||
            (code >= 0xb0d1 && code <= 0xb0eb) ||
            (code >= 0xb0ed && code <= 0xb107) ||
            (code >= 0xb109 && code <= 0xb123) ||
            (code >= 0xb125 && code <= 0xb13f) ||
            (code >= 0xb141 && code <= 0xb15b) ||
            (code >= 0xb15d && code <= 0xb177) ||
            (code >= 0xb179 && code <= 0xb193) ||
            (code >= 0xb195 && code <= 0xb1af) ||
            (code >= 0xb1b1 && code <= 0xb1cb) ||
            (code >= 0xb1cd && code <= 0xb1e7) ||
            (code >= 0xb1e9 && code <= 0xb203) ||
            (code >= 0xb205 && code <= 0xb21f) ||
            (code >= 0xb221 && code <= 0xb23b) ||
            (code >= 0xb23d && code <= 0xb257) ||
            (code >= 0xb259 && code <= 0xb273) ||
            (code >= 0xb275 && code <= 0xb28f) ||
            (code >= 0xb291 && code <= 0xb2ab) ||
            (code >= 0xb2ad && code <= 0xb2c7) ||
            (code >= 0xb2c9 && code <= 0xb2e3) ||
            (code >= 0xb2e5 && code <= 0xb2ff) ||
            (code >= 0xb301 && code <= 0xb31b) ||
            (code >= 0xb31d && code <= 0xb337) ||
            (code >= 0xb339 && code <= 0xb353) ||
            (code >= 0xb355 && code <= 0xb36f) ||
            (code >= 0xb371 && code <= 0xb38b) ||
            (code >= 0xb38d && code <= 0xb3a7) ||
            (code >= 0xb3a9 && code <= 0xb3c3) ||
            (code >= 0xb3c5 && code <= 0xb3df) ||
            (code >= 0xb3e1 && code <= 0xb3fb) ||
            (code >= 0xb3fd && code <= 0xb417) ||
            (code >= 0xb419 && code <= 0xb433) ||
            (code >= 0xb435 && code <= 0xb44f) ||
            (code >= 0xb451 && code <= 0xb46b) ||
            (code >= 0xb46d && code <= 0xb487) ||
            (code >= 0xb489 && code <= 0xb4a3) ||
            (code >= 0xb4a5 && code <= 0xb4bf) ||
            (code >= 0xb4c1 && code <= 0xb4db) ||
            (code >= 0xb4dd && code <= 0xb4f7) ||
            (code >= 0xb4f9 && code <= 0xb513) ||
            (code >= 0xb515 && code <= 0xb52f) ||
            (code >= 0xb531 && code <= 0xb54b) ||
            (code >= 0xb54d && code <= 0xb567) ||
            (code >= 0xb569 && code <= 0xb583) ||
            (code >= 0xb585 && code <= 0xb59f) ||
            (code >= 0xb5a1 && code <= 0xb5bb) ||
            (code >= 0xb5bd && code <= 0xb5d7) ||
            (code >= 0xb5d9 && code <= 0xb5f3) ||
            (code >= 0xb5f5 && code <= 0xb60f) ||
            (code >= 0xb611 && code <= 0xb62b) ||
            (code >= 0xb62d && code <= 0xb647) ||
            (code >= 0xb649 && code <= 0xb663) ||
            (code >= 0xb665 && code <= 0xb67f) ||
            (code >= 0xb681 && code <= 0xb69b) ||
            (code >= 0xb69d && code <= 0xb6b7) ||
            (code >= 0xb6b9 && code <= 0xb6d3) ||
            (code >= 0xb6d5 && code <= 0xb6ef) ||
            (code >= 0xb6f1 && code <= 0xb70b) ||
            (code >= 0xb70d && code <= 0xb727) ||
            (code >= 0xb729 && code <= 0xb743) ||
            (code >= 0xb745 && code <= 0xb75f) ||
            (code >= 0xb761 && code <= 0xb77b) ||
            (code >= 0xb77d && code <= 0xb797) ||
            (code >= 0xb799 && code <= 0xb7b3) ||
            (code >= 0xb7b5 && code <= 0xb7cf) ||
            (code >= 0xb7d1 && code <= 0xb7eb) ||
            (code >= 0xb7ed && code <= 0xb807) ||
            (code >= 0xb809 && code <= 0xb823) ||
            (code >= 0xb825 && code <= 0xb83f) ||
            (code >= 0xb841 && code <= 0xb85b) ||
            (code >= 0xb85d && code <= 0xb877) ||
            (code >= 0xb879 && code <= 0xb893) ||
            (code >= 0xb895 && code <= 0xb8af) ||
            (code >= 0xb8b1 && code <= 0xb8cb) ||
            (code >= 0xb8cd && code <= 0xb8e7) ||
            (code >= 0xb8e9 && code <= 0xb903) ||
            (code >= 0xb905 && code <= 0xb91f) ||
            (code >= 0xb921 && code <= 0xb93b) ||
            (code >= 0xb93d && code <= 0xb957) ||
            (code >= 0xb959 && code <= 0xb973) ||
            (code >= 0xb975 && code <= 0xb98f) ||
            (code >= 0xb991 && code <= 0xb9ab) ||
            (code >= 0xb9ad && code <= 0xb9c7) ||
            (code >= 0xb9c9 && code <= 0xb9e3) ||
            (code >= 0xb9e5 && code <= 0xb9ff) ||
            (code >= 0xba01 && code <= 0xba1b) ||
            (code >= 0xba1d && code <= 0xba37) ||
            (code >= 0xba39 && code <= 0xba53) ||
            (code >= 0xba55 && code <= 0xba6f) ||
            (code >= 0xba71 && code <= 0xba8b) ||
            (code >= 0xba8d && code <= 0xbaa7) ||
            (code >= 0xbaa9 && code <= 0xbac3) ||
            (code >= 0xbac5 && code <= 0xbadf) ||
            (code >= 0xbae1 && code <= 0xbafb) ||
            (code >= 0xbafd && code <= 0xbb17) ||
            (code >= 0xbb19 && code <= 0xbb33) ||
            (code >= 0xbb35 && code <= 0xbb4f) ||
            (code >= 0xbb51 && code <= 0xbb6b) ||
            (code >= 0xbb6d && code <= 0xbb87) ||
            (code >= 0xbb89 && code <= 0xbba3) ||
            (code >= 0xbba5 && code <= 0xbbbf) ||
            (code >= 0xbbc1 && code <= 0xbbdb) ||
            (code >= 0xbbdd && code <= 0xbbf7) ||
            (code >= 0xbbf9 && code <= 0xbc13) ||
            (code >= 0xbc15 && code <= 0xbc2f) ||
            (code >= 0xbc31 && code <= 0xbc4b) ||
            (code >= 0xbc4d && code <= 0xbc67) ||
            (code >= 0xbc69 && code <= 0xbc83) ||
            (code >= 0xbc85 && code <= 0xbc9f) ||
            (code >= 0xbca1 && code <= 0xbcbb) ||
            (code >= 0xbcbd && code <= 0xbcd7) ||
            (code >= 0xbcd9 && code <= 0xbcf3) ||
            (code >= 0xbcf5 && code <= 0xbd0f) ||
            (code >= 0xbd11 && code <= 0xbd2b) ||
            (code >= 0xbd2d && code <= 0xbd47) ||
            (code >= 0xbd49 && code <= 0xbd63) ||
            (code >= 0xbd65 && code <= 0xbd7f) ||
            (code >= 0xbd81 && code <= 0xbd9b) ||
            (code >= 0xbd9d && code <= 0xbdb7) ||
            (code >= 0xbdb9 && code <= 0xbdd3) ||
            (code >= 0xbdd5 && code <= 0xbdef) ||
            (code >= 0xbdf1 && code <= 0xbe0b) ||
            (code >= 0xbe0d && code <= 0xbe27) ||
            (code >= 0xbe29 && code <= 0xbe43) ||
            (code >= 0xbe45 && code <= 0xbe5f) ||
            (code >= 0xbe61 && code <= 0xbe7b) ||
            (code >= 0xbe7d && code <= 0xbe97) ||
            (code >= 0xbe99 && code <= 0xbeb3) ||
            (code >= 0xbeb5 && code <= 0xbecf) ||
            (code >= 0xbed1 && code <= 0xbeeb) ||
            (code >= 0xbeed && code <= 0xbf07) ||
            (code >= 0xbf09 && code <= 0xbf23) ||
            (code >= 0xbf25 && code <= 0xbf3f) ||
            (code >= 0xbf41 && code <= 0xbf5b) ||
            (code >= 0xbf5d && code <= 0xbf77) ||
            (code >= 0xbf79 && code <= 0xbf93) ||
            (code >= 0xbf95 && code <= 0xbfaf) ||
            (code >= 0xbfb1 && code <= 0xbfcb) ||
            (code >= 0xbfcd && code <= 0xbfe7) ||
            (code >= 0xbfe9 && code <= 0xc003) ||
            (code >= 0xc005 && code <= 0xc01f) ||
            (code >= 0xc021 && code <= 0xc03b) ||
            (code >= 0xc03d && code <= 0xc057) ||
            (code >= 0xc059 && code <= 0xc073) ||
            (code >= 0xc075 && code <= 0xc08f) ||
            (code >= 0xc091 && code <= 0xc0ab) ||
            (code >= 0xc0ad && code <= 0xc0c7) ||
            (code >= 0xc0c9 && code <= 0xc0e3) ||
            (code >= 0xc0e5 && code <= 0xc0ff) ||
            (code >= 0xc101 && code <= 0xc11b) ||
            (code >= 0xc11d && code <= 0xc137) ||
            (code >= 0xc139 && code <= 0xc153) ||
            (code >= 0xc155 && code <= 0xc16f) ||
            (code >= 0xc171 && code <= 0xc18b) ||
            (code >= 0xc18d && code <= 0xc1a7) ||
            (code >= 0xc1a9 && code <= 0xc1c3) ||
            (code >= 0xc1c5 && code <= 0xc1df) ||
            (code >= 0xc1e1 && code <= 0xc1fb) ||
            (code >= 0xc1fd && code <= 0xc217) ||
            (code >= 0xc219 && code <= 0xc233) ||
            (code >= 0xc235 && code <= 0xc24f) ||
            (code >= 0xc251 && code <= 0xc26b) ||
            (code >= 0xc26d && code <= 0xc287) ||
            (code >= 0xc289 && code <= 0xc2a3) ||
            (code >= 0xc2a5 && code <= 0xc2bf) ||
            (code >= 0xc2c1 && code <= 0xc2db) ||
            (code >= 0xc2dd && code <= 0xc2f7) ||
            (code >= 0xc2f9 && code <= 0xc313) ||
            (code >= 0xc315 && code <= 0xc32f) ||
            (code >= 0xc331 && code <= 0xc34b) ||
            (code >= 0xc34d && code <= 0xc367) ||
            (code >= 0xc369 && code <= 0xc383) ||
            (code >= 0xc385 && code <= 0xc39f) ||
            (code >= 0xc3a1 && code <= 0xc3bb) ||
            (code >= 0xc3bd && code <= 0xc3d7) ||
            (code >= 0xc3d9 && code <= 0xc3f3) ||
            (code >= 0xc3f5 && code <= 0xc40f) ||
            (code >= 0xc411 && code <= 0xc42b) ||
            (code >= 0xc42d && code <= 0xc447) ||
            (code >= 0xc449 && code <= 0xc463) ||
            (code >= 0xc465 && code <= 0xc47f) ||
            (code >= 0xc481 && code <= 0xc49b) ||
            (code >= 0xc49d && code <= 0xc4b7) ||
            (code >= 0xc4b9 && code <= 0xc4d3) ||
            (code >= 0xc4d5 && code <= 0xc4ef) ||
            (code >= 0xc4f1 && code <= 0xc50b) ||
            (code >= 0xc50d && code <= 0xc527) ||
            (code >= 0xc529 && code <= 0xc543) ||
            (code >= 0xc545 && code <= 0xc55f) ||
            (code >= 0xc561 && code <= 0xc57b) ||
            (code >= 0xc57d && code <= 0xc597) ||
            (code >= 0xc599 && code <= 0xc5b3) ||
            (code >= 0xc5b5 && code <= 0xc5cf) ||
            (code >= 0xc5d1 && code <= 0xc5eb) ||
            (code >= 0xc5ed && code <= 0xc607) ||
            (code >= 0xc609 && code <= 0xc623) ||
            (code >= 0xc625 && code <= 0xc63f) ||
            (code >= 0xc641 && code <= 0xc65b) ||
            (code >= 0xc65d && code <= 0xc677) ||
            (code >= 0xc679 && code <= 0xc693) ||
            (code >= 0xc695 && code <= 0xc6af) ||
            (code >= 0xc6b1 && code <= 0xc6cb) ||
            (code >= 0xc6cd && code <= 0xc6e7) ||
            (code >= 0xc6e9 && code <= 0xc703) ||
            (code >= 0xc705 && code <= 0xc71f) ||
            (code >= 0xc721 && code <= 0xc73b) ||
            (code >= 0xc73d && code <= 0xc757) ||
            (code >= 0xc759 && code <= 0xc773) ||
            (code >= 0xc775 && code <= 0xc78f) ||
            (code >= 0xc791 && code <= 0xc7ab) ||
            (code >= 0xc7ad && code <= 0xc7c7) ||
            (code >= 0xc7c9 && code <= 0xc7e3) ||
            (code >= 0xc7e5 && code <= 0xc7ff) ||
            (code >= 0xc801 && code <= 0xc81b) ||
            (code >= 0xc81d && code <= 0xc837) ||
            (code >= 0xc839 && code <= 0xc853) ||
            (code >= 0xc855 && code <= 0xc86f) ||
            (code >= 0xc871 && code <= 0xc88b) ||
            (code >= 0xc88d && code <= 0xc8a7) ||
            (code >= 0xc8a9 && code <= 0xc8c3) ||
            (code >= 0xc8c5 && code <= 0xc8df) ||
            (code >= 0xc8e1 && code <= 0xc8fb) ||
            (code >= 0xc8fd && code <= 0xc917) ||
            (code >= 0xc919 && code <= 0xc933) ||
            (code >= 0xc935 && code <= 0xc94f) ||
            (code >= 0xc951 && code <= 0xc96b) ||
            (code >= 0xc96d && code <= 0xc987) ||
            (code >= 0xc989 && code <= 0xc9a3) ||
            (code >= 0xc9a5 && code <= 0xc9bf) ||
            (code >= 0xc9c1 && code <= 0xc9db) ||
            (code >= 0xc9dd && code <= 0xc9f7) ||
            (code >= 0xc9f9 && code <= 0xca13) ||
            (code >= 0xca15 && code <= 0xca2f) ||
            (code >= 0xca31 && code <= 0xca4b) ||
            (code >= 0xca4d && code <= 0xca67) ||
            (code >= 0xca69 && code <= 0xca83) ||
            (code >= 0xca85 && code <= 0xca9f) ||
            (code >= 0xcaa1 && code <= 0xcabb) ||
            (code >= 0xcabd && code <= 0xcad7) ||
            (code >= 0xcad9 && code <= 0xcaf3) ||
            (code >= 0xcaf5 && code <= 0xcb0f) ||
            (code >= 0xcb11 && code <= 0xcb2b) ||
            (code >= 0xcb2d && code <= 0xcb47) ||
            (code >= 0xcb49 && code <= 0xcb63) ||
            (code >= 0xcb65 && code <= 0xcb7f) ||
            (code >= 0xcb81 && code <= 0xcb9b) ||
            (code >= 0xcb9d && code <= 0xcbb7) ||
            (code >= 0xcbb9 && code <= 0xcbd3) ||
            (code >= 0xcbd5 && code <= 0xcbef) ||
            (code >= 0xcbf1 && code <= 0xcc0b) ||
            (code >= 0xcc0d && code <= 0xcc27) ||
            (code >= 0xcc29 && code <= 0xcc43) ||
            (code >= 0xcc45 && code <= 0xcc5f) ||
            (code >= 0xcc61 && code <= 0xcc7b) ||
            (code >= 0xcc7d && code <= 0xcc97) ||
            (code >= 0xcc99 && code <= 0xccb3) ||
            (code >= 0xccb5 && code <= 0xcccf) ||
            (code >= 0xccd1 && code <= 0xcceb) ||
            (code >= 0xcced && code <= 0xcd07) ||
            (code >= 0xcd09 && code <= 0xcd23) ||
            (code >= 0xcd25 && code <= 0xcd3f) ||
            (code >= 0xcd41 && code <= 0xcd5b) ||
            (code >= 0xcd5d && code <= 0xcd77) ||
            (code >= 0xcd79 && code <= 0xcd93) ||
            (code >= 0xcd95 && code <= 0xcdaf) ||
            (code >= 0xcdb1 && code <= 0xcdcb) ||
            (code >= 0xcdcd && code <= 0xcde7) ||
            (code >= 0xcde9 && code <= 0xce03) ||
            (code >= 0xce05 && code <= 0xce1f) ||
            (code >= 0xce21 && code <= 0xce3b) ||
            (code >= 0xce3d && code <= 0xce57) ||
            (code >= 0xce59 && code <= 0xce73) ||
            (code >= 0xce75 && code <= 0xce8f) ||
            (code >= 0xce91 && code <= 0xceab) ||
            (code >= 0xcead && code <= 0xcec7) ||
            (code >= 0xcec9 && code <= 0xcee3) ||
            (code >= 0xcee5 && code <= 0xceff) ||
            (code >= 0xcf01 && code <= 0xcf1b) ||
            (code >= 0xcf1d && code <= 0xcf37) ||
            (code >= 0xcf39 && code <= 0xcf53) ||
            (code >= 0xcf55 && code <= 0xcf6f) ||
            (code >= 0xcf71 && code <= 0xcf8b) ||
            (code >= 0xcf8d && code <= 0xcfa7) ||
            (code >= 0xcfa9 && code <= 0xcfc3) ||
            (code >= 0xcfc5 && code <= 0xcfdf) ||
            (code >= 0xcfe1 && code <= 0xcffb) ||
            (code >= 0xcffd && code <= 0xd017) ||
            (code >= 0xd019 && code <= 0xd033) ||
            (code >= 0xd035 && code <= 0xd04f) ||
            (code >= 0xd051 && code <= 0xd06b) ||
            (code >= 0xd06d && code <= 0xd087) ||
            (code >= 0xd089 && code <= 0xd0a3) ||
            (code >= 0xd0a5 && code <= 0xd0bf) ||
            (code >= 0xd0c1 && code <= 0xd0db) ||
            (code >= 0xd0dd && code <= 0xd0f7) ||
            (code >= 0xd0f9 && code <= 0xd113) ||
            (code >= 0xd115 && code <= 0xd12f) ||
            (code >= 0xd131 && code <= 0xd14b) ||
            (code >= 0xd14d && code <= 0xd167) ||
            (code >= 0xd169 && code <= 0xd183) ||
            (code >= 0xd185 && code <= 0xd19f) ||
            (code >= 0xd1a1 && code <= 0xd1bb) ||
            (code >= 0xd1bd && code <= 0xd1d7) ||
            (code >= 0xd1d9 && code <= 0xd1f3) ||
            (code >= 0xd1f5 && code <= 0xd20f) ||
            (code >= 0xd211 && code <= 0xd22b) ||
            (code >= 0xd22d && code <= 0xd247) ||
            (code >= 0xd249 && code <= 0xd263) ||
            (code >= 0xd265 && code <= 0xd27f) ||
            (code >= 0xd281 && code <= 0xd29b) ||
            (code >= 0xd29d && code <= 0xd2b7) ||
            (code >= 0xd2b9 && code <= 0xd2d3) ||
            (code >= 0xd2d5 && code <= 0xd2ef) ||
            (code >= 0xd2f1 && code <= 0xd30b) ||
            (code >= 0xd30d && code <= 0xd327) ||
            (code >= 0xd329 && code <= 0xd343) ||
            (code >= 0xd345 && code <= 0xd35f) ||
            (code >= 0xd361 && code <= 0xd37b) ||
            (code >= 0xd37d && code <= 0xd397) ||
            (code >= 0xd399 && code <= 0xd3b3) ||
            (code >= 0xd3b5 && code <= 0xd3cf) ||
            (code >= 0xd3d1 && code <= 0xd3eb) ||
            (code >= 0xd3ed && code <= 0xd407) ||
            (code >= 0xd409 && code <= 0xd423) ||
            (code >= 0xd425 && code <= 0xd43f) ||
            (code >= 0xd441 && code <= 0xd45b) ||
            (code >= 0xd45d && code <= 0xd477) ||
            (code >= 0xd479 && code <= 0xd493) ||
            (code >= 0xd495 && code <= 0xd4af) ||
            (code >= 0xd4b1 && code <= 0xd4cb) ||
            (code >= 0xd4cd && code <= 0xd4e7) ||
            (code >= 0xd4e9 && code <= 0xd503) ||
            (code >= 0xd505 && code <= 0xd51f) ||
            (code >= 0xd521 && code <= 0xd53b) ||
            (code >= 0xd53d && code <= 0xd557) ||
            (code >= 0xd559 && code <= 0xd573) ||
            (code >= 0xd575 && code <= 0xd58f) ||
            (code >= 0xd591 && code <= 0xd5ab) ||
            (code >= 0xd5ad && code <= 0xd5c7) ||
            (code >= 0xd5c9 && code <= 0xd5e3) ||
            (code >= 0xd5e5 && code <= 0xd5ff) ||
            (code >= 0xd601 && code <= 0xd61b) ||
            (code >= 0xd61d && code <= 0xd637) ||
            (code >= 0xd639 && code <= 0xd653) ||
            (code >= 0xd655 && code <= 0xd66f) ||
            (code >= 0xd671 && code <= 0xd68b) ||
            (code >= 0xd68d && code <= 0xd6a7) ||
            (code >= 0xd6a9 && code <= 0xd6c3) ||
            (code >= 0xd6c5 && code <= 0xd6df) ||
            (code >= 0xd6e1 && code <= 0xd6fb) ||
            (code >= 0xd6fd && code <= 0xd717) ||
            (code >= 0xd719 && code <= 0xd733) ||
            (code >= 0xd735 && code <= 0xd74f) ||
            (code >= 0xd751 && code <= 0xd76b) ||
            (code >= 0xd76d && code <= 0xd787) ||
            (code >= 0xd789 && code <= 0xd7a3);
};

const getTypeZWJ = (code: number): boolean => {
  return code === 0x200D;
};

const getTypePrepend = (code: number): boolean => {
  return (code >= 0x0600 && code <= 0x0605) ||
            code === 0x06dd ||
            code === 0x070f ||
            (code >= 0x0890 && code <= 0x0891) ||
            code === 0x08e2 ||
            code === 0x0d4e ||
            code === 0x110bd ||
            code === 0x110cd ||
            (code >= 0x111c2 && code <= 0x111c3) ||
            code === 0x1193f ||
            code === 0x11941 ||
            code === 0x11a3a ||
            (code >= 0x11a84 && code <= 0x11a89) ||
            code === 0x11d46 ||
            code === 0x11f02;
};

const getTypeEP = (code: number) => {
  return code === 0x00a9 ||
        code === 0x00ae ||
        code === 0x203c ||
        code === 0x2049 ||
        code === 0x2122 ||
        code === 0x2139 ||
        (code >= 0x2194 && code <= 0x2199) ||
        (code >= 0x21a9 && code <= 0x21aa) ||
        (code >= 0x231a && code <= 0x231b) ||
        code === 0x2328 ||
        code === 0x2388 ||
        code === 0x23cf ||
        (code >= 0x23e9 && code <= 0x23ec) ||
        (code >= 0x23ed && code <= 0x23ee) ||
        code === 0x23ef ||
        code === 0x23f0 ||
        (code >= 0x23f1 && code <= 0x23f2) ||
        code === 0x23f3 ||
        (code >= 0x23f8 && code <= 0x23fa) ||
        code === 0x24c2 ||
        (code >= 0x25aa && code <= 0x25ab) ||
        code === 0x25b6 ||
        code === 0x25c0 ||
        (code >= 0x25fb && code <= 0x25fe) ||
        (code >= 0x2600 && code <= 0x2601) ||
        (code >= 0x2602 && code <= 0x2603) ||
        code === 0x2604 ||
        code === 0x2605 ||
        (code >= 0x2607 && code <= 0x260d) ||
        code === 0x260e ||
        (code >= 0x260f && code <= 0x2610) ||
        code === 0x2611 ||
        code === 0x2612 ||
        (code >= 0x2614 && code <= 0x2615) ||
        (code >= 0x2616 && code <= 0x2617) ||
        code === 0x2618 ||
        (code >= 0x2619 && code <= 0x261c) ||
        code === 0x261d ||
        (code >= 0x261e && code <= 0x261f) ||
        code === 0x2620 ||
        code === 0x2621 ||
        (code >= 0x2622 && code <= 0x2623) ||
        (code >= 0x2624 && code <= 0x2625) ||
        code === 0x2626 ||
        (code >= 0x2627 && code <= 0x2629) ||
        code === 0x262a ||
        (code >= 0x262b && code <= 0x262d) ||
        code === 0x262e ||
        code === 0x262f ||
        (code >= 0x2630 && code <= 0x2637) ||
        (code >= 0x2638 && code <= 0x2639) ||
        code === 0x263a ||
        (code >= 0x263b && code <= 0x263f) ||
        code === 0x2640 ||
        code === 0x2641 ||
        code === 0x2642 ||
        (code >= 0x2643 && code <= 0x2647) ||
        (code >= 0x2648 && code <= 0x2653) ||
        (code >= 0x2654 && code <= 0x265e) ||
        code === 0x265f ||
        code === 0x2660 ||
        (code >= 0x2661 && code <= 0x2662) ||
        code === 0x2663 ||
        code === 0x2664 ||
        (code >= 0x2665 && code <= 0x2666) ||
        code === 0x2667 ||
        code === 0x2668 ||
        (code >= 0x2669 && code <= 0x267a) ||
        code === 0x267b ||
        (code >= 0x267c && code <= 0x267d) ||
        code === 0x267e ||
        code === 0x267f ||
        (code >= 0x2680 && code <= 0x2685) ||
        (code >= 0x2690 && code <= 0x2691) ||
        code === 0x2692 ||
        code === 0x2693 ||
        code === 0x2694 ||
        code === 0x2695 ||
        (code >= 0x2696 && code <= 0x2697) ||
        code === 0x2698 ||
        code === 0x2699 ||
        code === 0x269a ||
        (code >= 0x269b && code <= 0x269c) ||
        (code >= 0x269d && code <= 0x269f) ||
        (code >= 0x26a0 && code <= 0x26a1) ||
        (code >= 0x26a2 && code <= 0x26a6) ||
        code === 0x26a7 ||
        (code >= 0x26a8 && code <= 0x26a9) ||
        (code >= 0x26aa && code <= 0x26ab) ||
        (code >= 0x26ac && code <= 0x26af) ||
        (code >= 0x26b0 && code <= 0x26b1) ||
        (code >= 0x26b2 && code <= 0x26bc) ||
        (code >= 0x26bd && code <= 0x26be) ||
        (code >= 0x26bf && code <= 0x26c3) ||
        (code >= 0x26c4 && code <= 0x26c5) ||
        (code >= 0x26c6 && code <= 0x26c7) ||
        code === 0x26c8 ||
        (code >= 0x26c9 && code <= 0x26cd) ||
        code === 0x26ce ||
        code === 0x26cf ||
        code === 0x26d0 ||
        code === 0x26d1 ||
        code === 0x26d2 ||
        code === 0x26d3 ||
        code === 0x26d4 ||
        (code >= 0x26d5 && code <= 0x26e8) ||
        code === 0x26e9 || code === 0x26ea ||
        (code >= 0x26eb && code <= 0x26ef) ||
        (code >= 0x26f0 && code <= 0x26f1) ||
        (code >= 0x26f2 && code <= 0x26f3) ||
        code === 0x26f4 ||
        code === 0x26f5 ||
        code === 0x26f6 ||
        (code >= 0x26f7 && code <= 0x26f9) ||
        code === 0x26fa ||
        (code >= 0x26fb && code <= 0x26fc) ||
        code === 0x26fd ||
        (code >= 0x26fe && code <= 0x2701) ||
        code === 0x2702 ||
        (code >= 0x2703 && code <= 0x2704) ||
        code === 0x2705 ||
        (code >= 0x2708 && code <= 0x270c) ||
        code === 0x270d ||
        code === 0x270e || code === 0x270f ||
        (code >= 0x2710 && code <= 0x2711) ||
        code === 0x2712 ||
        code === 0x2714 ||
        code === 0x2716 ||
        code === 0x271d || code === 0x2721 ||
        code === 0x2728 ||
        (code >= 0x2733 && code <= 0x2734) ||
        code === 0x2744 ||
        code === 0x2747 ||
        code === 0x274c ||
        code === 0x274e ||
        (code >= 0x2753 && code <= 0x2755) ||
        code === 0x2757 ||
        code === 0x2763 ||
        code === 0x2764 ||
        (code >= 0x2765 && code <= 0x2767) ||
        (code >= 0x2795 && code <= 0x2797) ||
        code === 0x27a1 ||
        code === 0x27b0 ||
        code === 0x27bf ||
        (code >= 0x2934 && code <= 0x2935) ||
        (code >= 0x2b05 && code <= 0x2b07) ||
        (code >= 0x2b1b && code <= 0x2b1c) ||
        code === 0x2b50 ||
        code === 0x2b55 ||
        code === 0x3030 ||
        code === 0x303d ||
        code === 0x3297 ||
        code === 0x3299 ||
        (code >= 0x1f000 && code <= 0x1f003) ||
        code === 0x1f004 ||
        (code >= 0x1f005 && code <= 0x1f0ce) ||
        code === 0x1f0cf ||
        (code >= 0x1f0d0 && code <= 0x1f0ff) ||
        (code >= 0x1f10d && code <= 0x1f10f) ||
        code === 0x1f12f ||
        (code >= 0x1f16c && code <= 0x1f16f) ||
        (code >= 0x1f170 && code <= 0x1f171) ||
        (code >= 0x1f17e && code <= 0x1f17f) ||
        code === 0x1f18e ||
        (code >= 0x1f191 && code <= 0x1f19a) ||
        (code >= 0x1f1ad && code <= 0x1f1e5) ||
        (code >= 0x1f201 && code <= 0x1f202) ||
        (code >= 0x1f203 && code <= 0x1f20f) ||
        code === 0x1f21a ||
        code === 0x1f22f ||
        (code >= 0x1f232 && code <= 0x1f23a) ||
        (code >= 0x1f23c && code <= 0x1f23f) ||
        (code >= 0x1f249 && code <= 0x1f24f) ||
        (code >= 0x1f250 && code <= 0x1f251) ||
        (code >= 0x1f252 && code <= 0x1f2ff) ||
        (code >= 0x1f300 && code <= 0x1f30c) ||
        (code >= 0x1f30d && code <= 0x1f30e) ||
        code === 0x1f30f ||
        code === 0x1f310 ||
        code === 0x1f311 ||
        code === 0x1f312 ||
        (code >= 0x1f313 && code <= 0x1f315) ||
        (code >= 0x1f316 && code <= 0x1f318) ||
        code === 0x1f319 ||
        code === 0x1f31a ||
        code === 0x1f31b ||
        code === 0x1f31c ||
        (code >= 0x1f31d && code <= 0x1f31e) ||
        (code >= 0x1f31f && code <= 0x1f320) ||
        code === 0x1f321 ||
        (code >= 0x1f322 && code <= 0x1f323) ||
        (code >= 0x1f324 && code <= 0x1f32c) ||
        (code >= 0x1f32d && code <= 0x1f32f) ||
        (code >= 0x1f330 && code <= 0x1f331) ||
        (code >= 0x1f332 && code <= 0x1f333) ||
        (code >= 0x1f334 && code <= 0x1f335) ||
        code === 0x1f336 ||
        (code >= 0x1f337 && code <= 0x1f34a) ||
        code === 0x1f34b ||
        (code >= 0x1f34c && code <= 0x1f34f) ||
        code === 0x1f350 ||
        (code >= 0x1f351 && code <= 0x1f37b) ||
        code === 0x1f37c ||
        code === 0x1f37d ||
        (code >= 0x1f37e && code <= 0x1f37f) ||
        (code >= 0x1f380 && code <= 0x1f393) ||
        (code >= 0x1f394 && code <= 0x1f395) ||
        (code >= 0x1f396 && code <= 0x1f397) ||
        code === 0x1f398 ||
        (code >= 0x1f399 && code <= 0x1f39b) ||
        (code >= 0x1f39c && code <= 0x1f39d) ||
        (code >= 0x1f39e && code <= 0x1f39f) ||
        (code >= 0x1f3a0 && code <= 0x1f3c4) ||
        code === 0x1f3c5 ||
        code === 0x1f3c6 ||
        code === 0x1f3c7 ||
        code === 0x1f3c8 ||
        code === 0x1f3c9 ||
        code === 0x1f3ca ||
        (code >= 0x1f3cb && code <= 0x1f3ce) ||
        (code >= 0x1f3cf && code <= 0x1f3d3) ||
        (code >= 0x1f3d4 && code <= 0x1f3df) ||
        (code >= 0x1f3e0 && code <= 0x1f3e3) ||
        code === 0x1f3e4 ||
        (code >= 0x1f3e5 && code <= 0x1f3f0) ||
        (code >= 0x1f3f1 && code <= 0x1f3f2) ||
        code === 0x1f3f3 ||
        code === 0x1f3f4 ||
        code === 0x1f3f5 ||
        code === 0x1f3f6 ||
        code === 0x1f3f7 ||
        (code >= 0x1f3f8 && code <= 0x1f3fa) ||
        (code >= 0x1f400 && code <= 0x1f407) ||
        code === 0x1f408 ||
        (code >= 0x1f409 && code <= 0x1f40b) ||
        (code >= 0x1f40c && code <= 0x1f40e) ||
        (code >= 0x1f40f && code <= 0x1f410) ||
        (code >= 0x1f411 && code <= 0x1f412) ||
        code === 0x1f413 ||
        code === 0x1f414 ||
        code === 0x1f415 ||
        code === 0x1f416 ||
        (code >= 0x1f417 && code <= 0x1f429) ||
        code === 0x1f42a ||
        (code >= 0x1f42b && code <= 0x1f43e) ||
        code === 0x1f43f ||
        code === 0x1f440 ||
        code === 0x1f441 ||
        (code >= 0x1f442 && code <= 0x1f464) ||
        code === 0x1f465 ||
        (code >= 0x1f466 && code <= 0x1f46b) ||
        (code >= 0x1f46c && code <= 0x1f46d) ||
        (code >= 0x1f46e && code <= 0x1f4ac) ||
        code === 0x1f4ad ||
        (code >= 0x1f4ae && code <= 0x1f4b5) ||
        (code >= 0x1f4b6 && code <= 0x1f4b7) ||
        (code >= 0x1f4b8 && code <= 0x1f4eb) ||
        (code >= 0x1f4ec && code <= 0x1f4ed) ||
        code === 0x1f4ee ||
        code === 0x1f4ef ||
        (code >= 0x1f4f0 && code <= 0x1f4f4) ||
        code === 0x1f4f5 ||
        (code >= 0x1f4f6 && code <= 0x1f4f7) ||
        code === 0x1f4f8 ||
        (code >= 0x1f4f9 && code <= 0x1f4fc) ||
        code === 0x1f4fd ||
        code === 0x1f4fe ||
        (code >= 0x1f4ff && code <= 0x1f502) ||
        code === 0x1f503 ||
        (code >= 0x1f504 && code <= 0x1f507) ||
        code === 0x1f508 ||
        code === 0x1f509 ||
        (code >= 0x1f50a && code <= 0x1f514) ||
        code === 0x1f515 ||
        (code >= 0x1f516 && code <= 0x1f52b) ||
        (code >= 0x1f52c && code <= 0x1f52d) ||
        (code >= 0x1f52e && code <= 0x1f53d) ||
        (code >= 0x1f546 && code <= 0x1f548) ||
        (code >= 0x1f549 && code <= 0x1f54a) ||
        (code >= 0x1f54b && code <= 0x1f54e) ||
        code === 0x1f54f ||
        (code >= 0x1f550 && code <= 0x1f55b) ||
        (code >= 0x1f55c && code <= 0x1f567) ||
        (code >= 0x1f568 && code <= 0x1f56e) ||
        (code >= 0x1f56f && code <= 0x1f570) ||
        (code >= 0x1f571 && code <= 0x1f572) ||
        (code >= 0x1f573 && code <= 0x1f579) ||
        code === 0x1f57a ||
        (code >= 0x1f57b && code <= 0x1f586) ||
        code === 0x1f587 ||
        (code >= 0x1f588 && code <= 0x1f589) ||
        (code >= 0x1f58a && code <= 0x1f58d) ||
        (code >= 0x1f58e && code <= 0x1f58f) ||
        code === 0x1f590 ||
        (code >= 0x1f591 && code <= 0x1f594) ||
        (code >= 0x1f595 && code <= 0x1f596) ||
        (code >= 0x1f597 && code <= 0x1f5a3) ||
        code === 0x1f5a4 ||
        code === 0x1f5a5 ||
        (code >= 0x1f5a6 && code <= 0x1f5a7) ||
        code === 0x1f5a8 ||
        (code >= 0x1f5a9 && code <= 0x1f5b0) ||
        (code >= 0x1f5b1 && code <= 0x1f5b2) ||
        (code >= 0x1f5b3 && code <= 0x1f5bb) ||
        code === 0x1f5bc ||
        (code >= 0x1f5bd && code <= 0x1f5c1) ||
        (code >= 0x1f5c2 && code <= 0x1f5c4) ||
        (code >= 0x1f5c5 && code <= 0x1f5d0) ||
        (code >= 0x1f5d1 && code <= 0x1f5d3) ||
        (code >= 0x1f5d4 && code <= 0x1f5db) ||
        (code >= 0x1f5dc && code <= 0x1f5de) ||
        (code >= 0x1f5df && code <= 0x1f5e0) ||
        code === 0x1f5e1 ||
        code === 0x1f5e2 ||
        code === 0x1f5e3 ||
        (code >= 0x1f5e4 && code <= 0x1f5e7) ||
        code === 0x1f5e8 ||
        (code >= 0x1f5e9 && code <= 0x1f5ee) ||
        code === 0x1f5ef ||
        (code >= 0x1f5f0 && code <= 0x1f5f2) ||
        code === 0x1f5f3 ||
        (code >= 0x1f5f4 && code <= 0x1f5f9) ||
        code === 0x1f5fa ||
        (code >= 0x1f5fb && code <= 0x1f5ff) ||
        code === 0x1f600 ||
        (code >= 0x1f601 && code <= 0x1f606) ||
        (code >= 0x1f607 && code <= 0x1f608) ||
        (code >= 0x1f609 && code <= 0x1f60d) ||
        code === 0x1f60e ||
        code === 0x1f60f ||
        code === 0x1f610 ||
        code === 0x1f611 ||
        (code >= 0x1f612 && code <= 0x1f614) ||
        code === 0x1f615 ||
        code === 0x1f616 ||
        code === 0x1f617 ||
        code === 0x1f618 ||
        code === 0x1f619 ||
        code === 0x1f61a ||
        code === 0x1f61b ||
        (code >= 0x1f61c && code <= 0x1f61e) ||
        code === 0x1f61f ||
        (code >= 0x1f620 && code <= 0x1f625) ||
        (code >= 0x1f626 && code <= 0x1f627) ||
        (code >= 0x1f628 && code <= 0x1f62b) ||
        code === 0x1f62c ||
        code === 0x1f62d ||
        (code >= 0x1f62e && code <= 0x1f62f) ||
        (code >= 0x1f630 && code <= 0x1f633) ||
        code === 0x1f634 ||
        code === 0x1f635 ||
        code === 0x1f636 ||
        (code >= 0x1f637 && code <= 0x1f640) ||
        (code >= 0x1f641 && code <= 0x1f644) ||
        (code >= 0x1f645 && code <= 0x1f64f) ||
        code === 0x1f680 ||
        (code >= 0x1f681 && code <= 0x1f682) ||
        (code >= 0x1f683 && code <= 0x1f685) ||
        code === 0x1f686 ||
        code === 0x1f687 ||
        code === 0x1f688 ||
        code === 0x1f689 ||
        (code >= 0x1f68a && code <= 0x1f68b) ||
        code === 0x1f68c ||
        code === 0x1f68d ||
        code === 0x1f68e ||
        code === 0x1f68f || code === 0x1f690 ||
        (code >= 0x1f691 && code <= 0x1f693) ||
        code === 0x1f694 ||
        code === 0x1f695 ||
        code === 0x1f696 ||
        code === 0x1f697 ||
        code === 0x1f698 ||
        (code >= 0x1f699 && code <= 0x1f69a) ||
        (code >= 0x1f69b && code <= 0x1f6a1) ||
        code === 0x1f6a2 ||
        code === 0x1f6a3 ||
        (code >= 0x1f6a4 && code <= 0x1f6a5) ||
        code === 0x1f6a6 ||
        (code >= 0x1f6a7 && code <= 0x1f6ad) ||
        (code >= 0x1f6ae && code <= 0x1f6b1) ||
        code === 0x1f6b2 ||
        (code >= 0x1f6b3 && code <= 0x1f6b5) ||
        code === 0x1f6b6 ||
        (code >= 0x1f6b7 && code <= 0x1f6b8) ||
        (code >= 0x1f6b9 && code <= 0x1f6be) ||
        code === 0x1f6bf ||
        code === 0x1f6c0 ||
        (code >= 0x1f6c1 && code <= 0x1f6c5) ||
        (code >= 0x1f6c6 && code <= 0x1f6ca) ||
        code === 0x1f6cb ||
        code === 0x1f6cc ||
        (code >= 0x1f6cd && code <= 0x1f6cf) ||
        code === 0x1f6d0 ||
        (code >= 0x1f6d1 && code <= 0x1f6d2) ||
        (code >= 0x1f6d3 && code <= 0x1f6d4) ||
        code === 0x1f6d5 ||
        (code >= 0x1f6d6 && code <= 0x1f6d7) ||
        (code >= 0x1f6d8 && code <= 0x1f6db) ||
        code === 0x1f6dc ||
        (code >= 0x1f6dd && code <= 0x1f6df) ||
        (code >= 0x1f6e0 && code <= 0x1f6e5) ||
        (code >= 0x1f6e6 && code <= 0x1f6e8) ||
        code === 0x1f6e9 ||
        code === 0x1f6ea ||
        (code >= 0x1f6eb && code <= 0x1f6ec) ||
        (code >= 0x1f6ed && code <= 0x1f6ef) ||
        code === 0x1f6f0 ||
        (code >= 0x1f6f1 && code <= 0x1f6f2) ||
        code === 0x1f6f3 ||
        (code >= 0x1f6f4 && code <= 0x1f6f6) ||
        (code >= 0x1f6f7 && code <= 0x1f6f8) ||
        code === 0x1f6f9 ||
        code === 0x1f6fa ||
        (code >= 0x1f6fb && code <= 0x1f6fc) ||
        (code >= 0x1f6fd && code <= 0x1f6ff) ||
        (code >= 0x1f774 && code <= 0x1f77f) ||
        (code >= 0x1f7d5 && code <= 0x1f7df) ||
        (code >= 0x1f7e0 && code <= 0x1f7eb) ||
        (code >= 0x1f7ec && code <= 0x1f7ef) ||
        code === 0x1f7f0 ||
        (code >= 0x1f7f1 && code <= 0x1f7ff) ||
        (code >= 0x1f80c && code <= 0x1f80f) ||
        (code >= 0x1f848 && code <= 0x1f84f) ||
        (code >= 0x1f85a && code <= 0x1f85f) ||
        (code >= 0x1f888 && code <= 0x1f88f) ||
        (code >= 0x1f8ae && code <= 0x1f8ff) ||
        code === 0x1f90c ||
        (code >= 0x1f90d && code <= 0x1f90f) ||
        (code >= 0x1f910 && code <= 0x1f918) ||
        (code >= 0x1f919 && code <= 0x1f91e) ||
        code === 0x1f91f ||
        (code >= 0x1f920 && code <= 0x1f927) ||
        (code >= 0x1f928 && code <= 0x1f92f) ||
        code === 0x1f930 ||
        (code >= 0x1f931 && code <= 0x1f932) ||
        (code >= 0x1f933 && code <= 0x1f93a) ||
        (code >= 0x1f93c && code <= 0x1f93e) ||
        code === 0x1f93f ||
        (code >= 0x1f940 && code <= 0x1f945) ||
        (code >= 0x1f947 && code <= 0x1f94b) ||
        code === 0x1f94c ||
        (code >= 0x1f94d && code <= 0x1f94f) ||
        (code >= 0x1f950 && code <= 0x1f95e) ||
        (code >= 0x1f95f && code <= 0x1f96b) ||
        (code >= 0x1f96c && code <= 0x1f970) ||
        code === 0x1f971 ||
        code === 0x1f972 ||
        (code >= 0x1f973 && code <= 0x1f976) ||
        (code >= 0x1f977 && code <= 0x1f978) ||
        code === 0x1f979 ||
        code === 0x1f97a ||
        code === 0x1f97b ||
        (code >= 0x1f97c && code <= 0x1f97f) ||
        (code >= 0x1f980 && code <= 0x1f984) ||
        (code >= 0x1f985 && code <= 0x1f991) ||
        (code >= 0x1f992 && code <= 0x1f997) ||
        (code >= 0x1f998 && code <= 0x1f9a2) ||
        (code >= 0x1f9a3 && code <= 0x1f9a4) ||
        (code >= 0x1f9a5 && code <= 0x1f9aa) ||
        (code >= 0x1f9ab && code <= 0x1f9ad) ||
        (code >= 0x1f9ae && code <= 0x1f9af) ||
        (code >= 0x1f9b0 && code <= 0x1f9b9) ||
        (code >= 0x1f9ba && code <= 0x1f9bf) ||
        code === 0x1f9c0 ||
        (code >= 0x1f9c1 && code <= 0x1f9c2) ||
        (code >= 0x1f9c3 && code <= 0x1f9ca) ||
        code === 0x1f9cb ||
        code === 0x1f9cc ||
        (code >= 0x1f9cd && code <= 0x1f9cf) ||
        (code >= 0x1f9d0 && code <= 0x1f9e6) ||
        (code >= 0x1f9e7 && code <= 0x1f9ff) ||
        (code >= 0x1fa00 && code <= 0x1fa6f) ||
        (code >= 0x1fa70 && code <= 0x1fa73) ||
        code === 0x1fa74 ||
        (code >= 0x1fa75 && code <= 0x1fa77) ||
        (code >= 0x1fa78 && code <= 0x1fa7a) ||
        (code >= 0x1fa7b && code <= 0x1fa7c) ||
        (code >= 0x1fa7d && code <= 0x1fa7f) ||
        (code >= 0x1fa80 && code <= 0x1fa82) ||
        (code >= 0x1fa83 && code <= 0x1fa86) ||
        (code >= 0x1fa87 && code <= 0x1fa88) ||
        (code >= 0x1fa89 && code <= 0x1fa8f) ||
        (code >= 0x1fa90 && code <= 0x1fa95) ||
        (code >= 0x1fa96 && code <= 0x1faa8) ||
        (code >= 0x1faa9 && code <= 0x1faac) ||
        (code >= 0x1faad && code <= 0x1faaf) ||
        (code >= 0x1fab0 && code <= 0x1fab6) ||
        (code >= 0x1fab7 && code <= 0x1faba) ||
        (code >= 0x1fabb && code <= 0x1fabd) ||
        code === 0x1fabe ||
        code === 0x1fabf ||
        (code >= 0x1fac0 && code <= 0x1fac2) ||
        (code >= 0x1fac3 && code <= 0x1fac5) ||
        (code >= 0x1fac6 && code <= 0x1facd) ||
        (code >= 0x1face && code <= 0x1facf) ||
        (code >= 0x1fad0 && code <= 0x1fad6) ||
        (code >= 0x1fad7 && code <= 0x1fad9) ||
        (code >= 0x1fada && code <= 0x1fadb) ||
        (code >= 0x1fadc && code <= 0x1fadf) ||
        (code >= 0x1fae0 && code <= 0x1fae7) ||
        code === 0x1fae8 ||
        (code >= 0x1fae9 && code <= 0x1faef) ||
        (code >= 0x1faf0 && code <= 0x1faf6) ||
        (code >= 0x1faf7 && code <= 0x1faf8) ||
        (code >= 0x1faf9 && code <= 0x1faff) ||
        (code >= 0x1fc00 && code <= 0x1fffd);
};

// 匹配特定的字符区间，给他打个标： Unicode15.0定义了一份Grapheme Cluster Boundaries的规则
// 以下的区间划分是根据Grapheme_Cluster_Break来划分的
export const getGraphemeBreakProperty = (code: number): number => {
  /**
   * Indic_Syllabic_Category = Consonant_Preceding_Repha, or
   * Indic_Syllabic_Category = Consonant_Prefixed, or
   * Prepended_Concatenation_Mark = Yes
   */
  if (getTypePrepend(code)) {
    return UnicodeType.Prepend;
  }
  // 匹配 U+000D 回车（CR）
  if (getTypeCR(code)) {
    return UnicodeType.CR;
  }
  // U+000A 换行 (LF)
  if (getTypeLF(code)) {
    return UnicodeType.LF;
  }
  /**
   * General_Category = Line_Separator, or
   * General_Category = Paragraph_Separator, or
   * General_Category = Control, or
   * General_Category = Unassigned and Default_Ignorable_Code_Point, or
   * General_Category = Format
   * and not U+000D CARRIAGE RETURN
   * and not U+000A LINE FEED
   * and not U+200C ZERO WIDTH NON-JOINER (ZWNJ)
   * and not U+200D ZERO WIDTH JOINER (ZWJ)
   * and not Prepended_Concatenation_Mark = Yes
   */
  if (getTypeControl(code)) {
    return UnicodeType.Control;
  }
  /**
   * Grapheme_Extend = Yes, or
   * Emoji_Modifier=Yes
   * This includes:
   * General_Category = Nonspacing_Mark
   * General_Category = Enclosing_Mark
   * U+200C ZERO WIDTH NON-JOINER
   * plus a few General_Category = Spacing_Mark needed for canonical equivalence.
   */
  if (getTypeExtend(code)) {
    return UnicodeType.Extend;
  }
  // 地区: 1F1E6..1F1FF  ; Regional_Indicator
  if (getTypeRI(code)) {
    return UnicodeType.RI;
  }
  /**
   * Grapheme_Cluster_Break ≠ Extend, and
   *  General_Category = Spacing_Mark, or
   *  any of the following (which have General_Category = Other_Letter):
   *  U+0E33 ( ำ ) THAI CHARACTER SARA AM
   *  U+0EB3 ( ຳ ) LAO VOWEL SIGN AM
   *  Exceptions: The following (which have General_Category = Spacing_Mark and would otherwise be included) are specifically excluded:
   *  U+102B ( ါ ) MYANMAR VOWEL SIGN TALL AA
   *  U+102C ( ာ ) MYANMAR VOWEL SIGN AA
   *  U+1038 ( း ) MYANMAR SIGN VISARGA
   *  U+1062 ( ၢ ) MYANMAR VOWEL SIGN SGAW KAREN EU
   *  ..U+1064 ( ၤ ) MYANMAR TONE MARK SGAW KAREN KE PHO
   *  U+1067 ( ၧ ) MYANMAR VOWEL SIGN WESTERN PWO KAREN EU
   *  ..U+106D ( ၭ ) MYANMAR SIGN WESTERN PWO KAREN TONE-5
   *  U+1083 ( ႃ ) MYANMAR VOWEL SIGN SHAN AA
   *  U+1087 ( ႇ ) MYANMAR SIGN SHAN TONE-2
   *  ..U+108C ( ႌ ) MYANMAR SIGN SHAN COUNCIL TONE-3
   *  U+108F ( ႏ ) MYANMAR SIGN RUMAI PALAUNG TONE-5
   *  U+109A ( ႚ ) MYANMAR SIGN KHAMTI TONE-1
   *  ..U+109C ( ႜ ) MYANMAR VOWEL SIGN AITON A
   *  U+1A61 ( ᩡ ) TAI THAM VOWEL SIGN A
   *  U+1A63 ( ᩣ ) TAI THAM VOWEL SIGN AA
   *  U+1A64 ( ᩤ ) TAI THAM VOWEL SIGN TALL AA
   *  U+AA7B ( ꩻ ) MYANMAR SIGN PAO KAREN TONE
   *  U+AA7D ( ꩽ ) MYANMAR SIGN TAI LAING TONE-5
   *  U+11720 ( 𑜠 ) AHOM VOWEL SIGN A
   *  U+11721 ( 𑜡 ) AHOM VOWEL SIGN AA
   */
  if (getTypeSM(code)) {
    return UnicodeType.SM;
  }
  /**
   * Hangul_Syllable_Type=L, such as:
   * U+1100 ( ᄀ ) HANGUL CHOSEONG KIYEOK
   * U+115F ( ᅟ ) HANGUL CHOSEONG FILLER
   * U+A960 ( ꥠ ) HANGUL CHOSEONG TIKEUT-MIEUM
   * U+A97C ( ꥼ ) HANGUL CHOSEONG SSANGYEORINHIEUH
   */
  if (getTypeL(code)) {
    return UnicodeType.L;
  }
  /**
   * Hangul_Syllable_Type=V, such as:
   * U+1160 ( ᅠ ) HANGUL JUNGSEONG FILLER
   * U+11A2 ( ᆢ ) HANGUL JUNGSEONG SSANGARAEA
   * U+D7B0 ( ힰ ) HANGUL JUNGSEONG O-YEO
   * U+D7C6 ( ퟆ ) HANGUL JUNGSEONG ARAEA-E
   */
  if (getTypeV(code)) {
    return UnicodeType.V;
  }
  /**
   * Hangul_Syllable_Type=T, such as:
   * U+11A8 ( ᆨ ) HANGUL JONGSEONG KIYEOK
   * U+11F9 ( ᇹ ) HANGUL JONGSEONG YEORINHIEUH
   * U+D7CB ( ퟋ ) HANGUL JONGSEONG NIEUN-RIEUL
   * U+D7FB ( ퟻ ) HANGUL JONGSEONG PHIEUPH-THIEUTH
   */
  if (getTypeT(code)) {
    return UnicodeType.T;
  }
  /**
   * Hangul_Syllable_Type=LV, that is:
   * U+AC00 ( 가 ) HANGUL SYLLABLE GA
   * U+AC1C ( 개 ) HANGUL SYLLABLE GAE
   * U+AC38 ( 갸 ) HANGUL SYLLABLE GYA
   * ...
   */
  if (getTypeLV(code)) {
    return UnicodeType.LV;
  }
  /**
   * Hangul_Syllable_Type=LVT, that is:
   * U+AC01 ( 각 ) HANGUL SYLLABLE GAG
   * U+AC02 ( 갂 ) HANGUL SYLLABLE GAGG
   * U+AC03 ( 갃 ) HANGUL SYLLABLE GAGS
   * U+AC04 ( 간 ) HANGUL SYLLABLE GAN
   * ...
   */
  if (getTypeLVT(code)) {
    return UnicodeType.LVT;
  }
  // 零宽字符zwj
  if (getTypeZWJ(code)) {
    return UnicodeType.ZWJ;
  }
  // 中的All omitted code points have Extended_Pictographic=No，用在判断emoji的时候
  if (getTypeEP(code)) {
    return UnicodeType.EP;
  }
  // 不在以上范围内的都返回Other
  return UnicodeType.Other;
};
