function get_table_english(type) {
  var qwerty = [
    0x21,     /* 0x21 exclam:       exclamation mark               */
    0x22,     /* 0x22 quotedbl:     quotation mark                 */
    0x23,     /* 0x23 numbersign:   number sign                    */
    0x24,     /* 0x24 dollar:       dollar sign                    */
    0x25,     /* 0x25 percent:      percent sign                   */
    0x26,     /* 0x26 ampersand:    ampersand                      */
    0x27,     /* 0x27 apostrophe:   apostrophe                     */
    0x28,     /* 0x28 parenleft:    left parenthesis               */
    0x29,     /* 0x29 parenright:   right parenthesis              */
    0x2A,     /* 0x2A asterisk:     asterisk                       */
    0x2B,     /* 0x2B plus:         plus sign                      */
    0x2C,     /* 0x2C comma:        comma                          */
    0x2D,     /* 0x2D minus:        minus sign                     */
    0x2E,     /* 0x2E period:       period                         */
    0x2F,     /* 0x2F slash:        slash                          */
    0x30,     /* 0x30 0:            0                              */
    0x31,     /* 0x31 1:            1                              */
    0x32,     /* 0x32 2:            2                              */
    0x33,     /* 0x33 3:            3                              */
    0x34,     /* 0x34 4:            4                              */
    0x35,     /* 0x35 5:            5                              */
    0x36,     /* 0x36 6:            6                              */
    0x37,     /* 0x37 7:            7                              */
    0x38,     /* 0x38 8:            8                              */
    0x39,     /* 0x39 9:            9                              */
    0x3A,     /* 0x3A colon:        colon                          */
    0x3B,     /* 0x3B semicolon:    semicolon                      */
    0x3C,     /* 0x3C less:         less-than sign                 */
    0x3D,     /* 0x3D equal:        equals sign                    */
    0x3E,     /* 0x3E greater:      greater-than sign              */
    0x3F,     /* 0x3F question:     question mark                  */
    0x40,     /* 0x40 at:           commercial at                  */
    0x41,     /* 0x41 A:            choseong mieum                 */
    0x42,     /* 0x42 B:            jungseong yu                   */
    0x43,     /* 0x43 C:            choseong chieuch               */
    0x44,     /* 0x44 D:            choseong ieung                 */
    0x45,     /* 0x45 E:            choseong ssangtikeut           */
    0x46,     /* 0x46 F:            choseong rieul                 */
    0x47,     /* 0x47 G:            choseong hieuh                 */
    0x48,     /* 0x48 H:            jungseong o                    */
    0x49,     /* 0x49 I:            jungseong ya                   */
    0x4A,     /* 0x4A J:            jungseong eo                   */
    0x4B,     /* 0x4B K:            jungseong a                    */
    0x4C,     /* 0x4C L:            jungseong i                    */
    0x4D,     /* 0x4D M:            jungseong eu                   */
    0x4E,     /* 0x4E N:            jungseong u                    */
    0x4F,     /* 0x4F O:            jungseong yae                  */
    0x50,     /* 0x50 P:            jungseong ye                   */
    0x51,     /* 0x51 Q:            choseong ssangpieup            */
    0x52,     /* 0x52 R:            choseong ssangkiyeok           */
    0x53,     /* 0x53 S:            choseong nieun                 */
    0x54,     /* 0x54 T:            choseong ssangsios             */
    0x55,     /* 0x55 U:            jungseong yeo                  */
    0x56,     /* 0x56 V:            choseong phieuph               */
    0x57,     /* 0x57 W:            choseong ssangcieuc            */
    0x58,     /* 0x58 X:            choseong thieuth               */
    0x59,     /* 0x59 Y:            jungseong yo                   */
    0x5A,     /* 0x5A Z:            choseong khieukh               */
    0x5B,     /* 0x5B bracketleft:  left bracket                   */
    0x5C,     /* 0x5C backslash:    backslash                      */
    0x5D,     /* 0x5D bracketright: right bracket                  */
    0x5E,     /* 0x5E asciicircum:  circumflex accent              */
    0x5F,     /* 0x5F underscore:   underscore                     */
    0x60,     /* 0x60 quoteleft:    grave accent                   */
    0x61,     /* 0x61 a:            choseong  mieum                */
    0x62,     /* 0x62 b:            jungseong yu                   */
    0x63,     /* 0x63 c:            choseong  chieuch              */
    0x64,     /* 0x64 d:            choseong  ieung                */
    0x65,     /* 0x65 e:            choseong  tikeut               */
    0x66,     /* 0x66 f:            choseong  rieul                */
    0x67,     /* 0x67 g:            choseong  hieuh                */
    0x68,     /* 0x68 h:            jungseong o                    */
    0x69,     /* 0x69 i:            jungseong ya                   */
    0x6A,     /* 0x6A j:            jungseong eo                   */
    0x6B,     /* 0x6B k:            jungseong a                    */
    0x6C,     /* 0x6C l:            jungseong i                    */
    0x6D,     /* 0x6D m:            jungseong eu                   */
    0x6E,     /* 0x6E n:            jungseong u                    */
    0x6F,     /* 0x6F o:            jungseong ae                   */
    0x70,     /* 0x70 p:            jungseong e                    */
    0x71,     /* 0x71 q:            choseong  pieup                */
    0x72,     /* 0x72 r:            choseong  kiyeok               */
    0x73,     /* 0x73 s:            choseong  nieun                */
    0x74,     /* 0x74 t:            choseong  sios                 */
    0x75,     /* 0x75 u:            jungseong yeo                  */
    0x76,     /* 0x76 v:            choseong  phieuph              */
    0x77,     /* 0x77 w:            choseong  cieuc                */
    0x78,     /* 0x78 x:            choseong  thieuth              */
    0x79,     /* 0x79 y:            jungseong yo                   */
    0x7A,     /* 0x7A z:            choseong  khieukh              */
    0x7B,     /* 0x7B braceleft:    left brace                     */
    0x7C,     /* 0x7C bar:          vertical bar                   */
    0x7D,     /* 0x7D braceright:   right brace                    */
    0x7E     /* 0x7E asciitilde:   tilde                          */
  ];

  dvorak = [
    /*!*/33,/*"*/95,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/45,/*(*/40,
    /*)*/41,/***/42,/*+*/125,/*,*/119,/*-*/91,/*.*/118,/*/*/122,/*0*/48,
    /*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,
    /*9*/57,/*:*/83,/*;*/115,/*<*/87,/*=*/93,/*>*/86,/*?*/90,/*@*/64,
    /*A*/65,/*B*/88,/*C*/74,/*D*/69,/*E*/62,/*F*/85,/*G*/73,/*H*/68,
    /*I*/67,/*J*/72,/*K*/84,/*L*/78,/*M*/77,/*N*/66,/*O*/82,/*P*/76,
    /*Q*/34,/*R*/80,/*S*/79,/*T*/89,/*U*/71,/*V*/75,/*W*/60,/*X*/81,
    /*Y*/70,/*Z*/58,/*[*/47,/*\*/92,/*]*/61,/*^*/94,/*_*/123,/*`*/96,
    /*a*/97,/*b*/120,/*c*/106,/*d*/101,/*e*/46,/*f*/117,/*g*/105,/*h*/100,
    /*i*/99,/*j*/104,/*k*/116,/*l*/110,/*m*/109,/*n*/98,/*o*/114,/*p*/108,
    /*q*/39,/*r*/112,/*s*/111,/*t*/121,/*u*/103,/*v*/107,/*w*/44,/*x*/113,
    /*y*/102,/*z*/59,/*{*/63,/*|*/124,/*}*/43,/*~*/126
  ];

  colemak = [
    /*!*/33,/*"*/34,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/39,/*(*/40,
    /*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/47,/*0*/48,
    /*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,
    /*9*/57,/*:*/79,/*;*/111,/*<*/60,/*=*/61,/*>*/62,/*?*/63,/*@*/64,
    /*A*/65,/*B*/66,/*C*/67,/*D*/83,/*E*/70,/*F*/84,/*G*/68,/*H*/72,
    /*I*/85,/*J*/78,/*K*/69,/*L*/73,/*M*/77,/*N*/75,/*O*/89,/*P*/58,
    /*Q*/81,/*R*/80,/*S*/82,/*T*/71,/*U*/76,/*V*/86,/*W*/87,/*X*/88,
    /*Y*/74,/*Z*/90,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
    /*a*/97,/*b*/98,/*c*/99,/*d*/115,/*e*/102,/*f*/116,/*g*/100,/*h*/104,
    /*i*/117,/*j*/110,/*k*/101,/*l*/105,/*m*/109,/*n*/107,/*o*/121,/*p*/59,
    /*q*/113,/*r*/112,/*s*/114,/*t*/103,/*u*/108,/*v*/118,/*w*/119,/*x*/120,
    /*y*/106,/*z*/122,/*{*/123,/*|*/124,/*}*/125,/*~*/126
  ];

  // array
  switch (true) {
    case /colemak/.test(type) :
      return colemak;
    case /dvorak/.test(type) :
      return dvorak;
    default :
      return qwerty;
  }

}
