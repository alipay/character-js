export declare enum UnicodeType {
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
    Other = 14
}
export declare const getGraphemeBreakProperty: (code: number) => number;
