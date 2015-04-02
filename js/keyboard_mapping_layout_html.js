function get_table_html_mapping() {
 var layout_to_html = [
    ['key_one', "true", '!'],    /* ! */    /*    0x21    :    exclam    :    exclamation mark    */
    ['key_apostrophe', "true", '"'],    /* " */    /*    0x22    :    quotedbl    :   slash     */
    ['key_three', "true", '#'],    /* # */    /*    0x23    :    numbersign    :    number sign    */
    ['key_four', "true", '$'],    /* $ */    /*    0x24    :    dollar    :    dollar sign    */
    ['key_five', "true", '%'],    /* % */    /*    0x25    :    percent    :    percent sign    */
    ['key_seven', "true", '&'],    /* & */    /*    0x26    :    ampersand    :    ampersand    */
    ['key_apostrophe', "false", '\''],    /* ' */    /*    0x27    :    apostrophe    :    Choseong thieuth (ㅌ)   */
    ['key_nine', "true", '('],    /* ( */    /*    0x28    :    parenleft    :    left parenthesis    */
    ['key_zero', "true", ')'],    /* ) */    /*    0x29    :    parenright    :    right parenthesis    */
    ['key_eight', "true", '*'],    /* * */    /*    0x2A    :    asterisk    :    asterisk    */
    ['key_equals', "true", '+'],    /* + */    /*    0x2B    :    plus    :    plus sign    */
    ['key_comma', "false", ','],    /* , */    /*    0x2C    :    comma    :    comma    */
    ['key_hyphen', "false", '-'],    /* - */    /*    0x2D    :    minus    :    minus sign    */
    ['key_period', "false", '.'],    /* . */    /*    0x2E    :    period    :    period    */
    ['key_forwardslash', "false", '/'],    /* / */    /*    0x2F    :    slash    :    Choseong khieukh  (ㅋ)  */
    ['key_zero', "false", '0'],    /* 0 */    /*    0x30    :    0    :    0    */
    ['key_one', "false", '1'],    /* 1 */    /*    0x31    :    1    :    1    */
    ['key_two', "false", '2'],    /* 2 */    /*    0x32    :    2    :    2    */
    ['key_three', "false", '3'],    /* 3 */    /*    0x33    :    3    :    3    */
    ['key_four', "false", '4'],    /* 4 */    /*    0x34    :    4    :    4    */
    ['key_five', "false", '5'],    /* 5 */    /*    0x35    :    5    :    5    */
    ['key_six', "false", '6'],    /* 6 */    /*    0x36    :    6    :    6    */
    ['key_seven', "false", '7'],    /* 7 */    /*    0x37    :    7    :    7    */
    ['key_eight', "false", '8'],    /* 8 */    /*    0x38    :    8    :    8    */
    ['key_nine', "false", '9'],    /* 9 */    /*    0x39    :    9    :    9    */
    ['key_semicolon', "true", ':'],    /* : */    /*    0x3A    :    colon    :    colon    */
    ['key_semicolon', "false", ';'],    /* ; */    /*    0x3B    :    semicolon    :    Choseong pieup  (ㅂ)  */
    ['key_comma', "true", '<'],    /* < */    /*    0x3C    :    less    :    less-than sign    */
    ['key_equals', "false", '='],    /* = */    /*    0x3D    :    equal    :    equals sign    */
    ['key_period', "true", '>'],    /* > */    /*    0x3E    :    greater    :    greater-than sign    */
    ['key_forwardslash', "true", '?'],    /* ? */    /*    0x3F    :    question    :    question mark    */
    ['key_two', "true", '@'],    /* @ */    /*    0x40    :    at    :    commercial at    */
    ['key_a', "true", 'A'],    /* A */    /*    0x41    :    A    :    jungseong yu  (ㅠ)  */
    ['key_b', "true", 'B'],    /* B */    /*    0x42    :    B    :    jungseong u  (ㅜ)  */
    ['key_c', "true", 'C'],    /* C */    /*    0x43    :    C    :    jungseong e  (ㅔ)  */
    ['key_d', "true", 'D'],    /* D */    /*    0x44    :    D    :    jungseong I  (ㅣ)  */
    ['key_e', "true", 'E'],    /* E */    /*    0x45    :    E    :    jungseong yeo  (ㅕ)  */
    ['key_f', "true", 'F'],    /* F */    /*    0x46    :    F    :    jungseong a  (ㅏ)  */
    ['key_g', "true", 'G'],    /* G */    /*    0x47    :    G    :    jungseong eu  (ㅡ)  */
    ['key_h', "true", 'H'],    /* H */    /*    0x48    :    H    :    white square □    */
    ['key_i', "true", 'I'],    /* I */    /*    0x49    :    I    :    jungseong yeu  (ㅢ)  */
    ['key_j', "true", 'J'],    /* J */    /*    0x4A    :    J    :    horizontal bar ―    */
    ['key_k', "true", 'K'],    /* K */    /*    0x4B    :    K    :   middle dot   ·    */
    ['key_l', "true", 'L'],    /* L */    /*    0x4C    :    L    :    semicolon  ;  */
    ['key_m', "true", 'M'],    /* M */    /*    0x4D    :    M    :    quotation mark  "  */
    ['key_n', "true", 'N'],    /* N */    /*    0x4E    :    N    :    quota  ' */
    ['key_o', "true", 'O'],    /* O */    /*    0x4F    :    O    :    jungseong u (ㅜ)   */
    ['key_p', "true", 'P'],    /* P */    /*    0x50    :    P    :    jungseong o  (ㅗ)  */
    ['key_q', "true", 'Q'],    /* Q */    /*    0x51    :    Q    :    jungseong yae  (ㅒ)  */
    ['key_r', "true", 'R'],    /* R */    /*    0x52    :    R    :    jungseong eo  (ㅓ)  */
    ['key_s', "true", 'S'],    /* S */    /*    0x53    :    S    :    jungseong ye  (ㅖ)  */
    ['key_t', "true", 'T'],    /* T */    /*    0x54    :    T    :    jungseong yeo  (ㅐ)  */
    ['key_u', "true", 'U'],    /* U */    /*    0x55    :    U    :    white circle ○   */
    ['key_v', "true", 'V'],    /* V */    /*    0x56    :    V    :    jungseong o (ㅗ)   */
    ['key_w', "true", 'W'],    /* W */    /*    0x57    :    W    :    jungseong ya  (ㅑ)  */
    ['key_x', "true", 'X'],    /* X */    /*    0x58    :    X    :    jungseong yo  (ㅛ)  */
    ['key_y', "true", 'Y'],    /* Y */    /*    0x59    :    Y    :    multiplication x  ×    */
    ['key_z', "true", 'Z'],    /* Z */    /*    0x5A    :    Z    :    hanguel < araea >   */
    ['key_left_bracket', "false", '['],    /* [ */    /*    0x5B    :    bracketleft    :    left bracket    */
    ['key_backslash', "false", '\\'],    /* \ */    /*    0x5C    :    backslash    :    backslash    */
    ['key_right_bracket', "false", ']'],    /* ] */    /*    0x5D    :    bracketright    :    right bracket    */
    ['key_six', "true", '^'],    /* ^ */    /*    0x5E    :    asciicircum    :    circumflex accent    */
    ['key_hyphen', "true", '_'],    /* _ */    /*    0x5F    :    underscore    :    underscore    */
    ['key_accent', "false", '`'],    /* ` */    /*    0x60    :    quoteleft    :    grave accent    */
    ['key_a', "false", 'a'],    /* a */    /*    0x61    :    a    :    Jongseong ieung (ㅇ)   */
    ['key_b', "false", 'b'],    /* b */    /*    0x62    :    b    :     Jongseong phieuph (ㅍ)   */
    ['key_c', "false", 'c'],    /* c */    /*    0x63    :    c    :     Jongseong khiyeok (ㅋ)   */
    ['key_d', "false", 'd'],    /* d */    /*    0x64    :    d    :     Jongseong ssangsios (ㅆ)   */
    ['key_e', "false", 'e'],    /* e */    /*    0x65    :    e    :    Jongseong pieup (ㅂ)   */
    ['key_f', "false", 'f'],    /* f */    /*    0x66    :    f    :     Jongseong chieuch (ㅊ)   */
    ['key_g', "false", 'g'],    /* g */    /*    0x67    :    g    :    Jongseong cieuc (ㅈ)   */
    ['key_h', "false", 'h'],    /* h */    /*    0x68    :    h    :    Choseong nieun (ㄴ)   */
    ['key_i', "false", 'i'],    /* i */    /*    0x69    :    i    :    Choseong mieum  (ㅁ)  */
    ['key_j', "false", 'j'],    /* j */    /*    0x6A    :    j    :    Choseong ieung  (ㅇ)  */
    ['key_k', "false", 'k'],    /* k */    /*    0x6B    :    k    :    Choseong kiyeok  (ㄱ)  */
    ['key_l', "false", 'l'],    /* l */    /*    0x6C    :    l    :    Choseong cieuc  (ㅈ)  */
    ['key_m', "false", 'm'],    /* m */    /*    0x6D    :    m    :    Choseong hieuh  (ㅎ)  */
    ['key_n', "false", 'n'],    /* n */    /*    0x6E    :    n    :    Choseong sios  (ㅅ)  */
    ['key_o', "false", 'o'],    /* o */    /*    0x6F    :    o    :    Choseong chieuch  (ㅊ)  */
    ['key_p', "false", 'p'],    /* p */    /*    0x70    :    p    :    Choseong phieuph  (ㅍ)  */
    ['key_q', "false", 'q'],    /* q */    /*    0x71    :    q    :    Jongseong sios  (ㅅ)  */
    ['key_r', "false", 'r'],    /* r */    /*    0x72    :    r    :    Jongseong thikeuth (ㅌ)   */
    ['key_s', "false", 's'],    /* s */    /*    0x73    :    s    :    Jongseong nieun  (ㄴ)  */
    ['key_t', "false", 't'],    /* t */    /*    0x74    :    t    :     Jongseong tikeut (ㄷ)   */
    ['key_u', "false", 'u'],    /* u */    /*    0x75    :    u    :    Choseong tikeut (ㄷ)   */
    ['key_v', "false", 'v'],    /* v */    /*    0x76    :    v    :    Jongseong hieuh  (ㅎ)  */
    ['key_w', "false", 'w'],    /* w */    /*    0x77    :    w    :    Jongseong rieul  (ㄹ)  */
    ['key_x', "false", 'x'],    /* x */    /*    0x78    :    x    :    Jongseong kiyeok  (ㄱ)  */
    ['key_y', "false", 'y'],    /* y */    /*    0x79    :    y    :    Choseong rieul  (ㄹ)  */
    ['key_z', "false", 'z'],    /* z */    /*    0x7A    :    z    :    Jongseong mieum  (ㅁ)  */
    ['key_left_bracket', "true", '{'],    /* { */    /*    0x7B    :    braceleft    :    left brace    */
    ['key_backslash', "true", '|'],    /* | */    /*    0x7C    :    bar    :    vertical bar    */
    ['key_right_bracket', "true", '}'],    /* } */    /*    0x7D    :    braceright    :    right brace    */
    ['key_accent', "true", '~']    /* ~ */    /*    0x7E    :    asciitilde    :    tilde    */
];

    return layout_to_html;
}
