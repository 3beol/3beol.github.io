function get_table_hangeul(type, __change_to_yet) {
  __change_to_yet = typeof(__change_to_yet != 'undefined') ? __change_to_yet : false;

  var K2_ksx5002 = [
    0x0021,     /* 0x21 exclam:       exclamation mark               */
    0x0022,     /* 0x22 quotedbl:     quotation mark                 */
    0x0023,     /* 0x23 numbersign:   number sign                    */
    0x0024,     /* 0x24 dollar:       dollar sign                    */
    0x0025,     /* 0x25 percent:      percent sign                   */
    0x0026,     /* 0x26 ampersand:    ampersand                      */
    0x0027,     /* 0x27 apostrophe:   apostrophe                     */
    0x0028,     /* 0x28 parenleft:    left parenthesis               */
    0x0029,     /* 0x29 parenright:   right parenthesis              */
    0x002a,     /* 0x2A asterisk:     asterisk                       */
    0x002b,     /* 0x2B plus:         plus sign                      */
    0x002c,     /* 0x2C comma:        comma                          */
    0x002d,     /* 0x2D minus:        minus sign                     */
    0x002e,     /* 0x2E period:       period                         */
    0x002f,     /* 0x2F slash:        slash                          */
    0x0030,     /* 0x30 0:            0                              */
    0x0031,     /* 0x31 1:            1                              */
    0x0032,     /* 0x32 2:            2                              */
    0x0033,     /* 0x33 3:            3                              */
    0x0034,     /* 0x34 4:            4                              */
    0x0035,     /* 0x35 5:            5                              */
    0x0036,     /* 0x36 6:            6                              */
    0x0037,     /* 0x37 7:            7                              */
    0x0038,     /* 0x38 8:            8                              */
    0x0039,     /* 0x39 9:            9                              */
    0x003a,     /* 0x3A colon:        colon                          */
    0x003b,     /* 0x3B semicolon:    semicolon                      */
    0x003c,     /* 0x3C less:         less-than sign                 */
    0x003d,     /* 0x3D equal:        equals sign                    */
    0x003e,     /* 0x3E greater:      greater-than sign              */
    0x003f,     /* 0x3F question:     question mark                  */
    0x0040,     /* 0x40 at:           commercial at                  */
    0x1106,     /* 0x41 A:            choseong mieum                 */
    0x1172,     /* 0x42 B:            jungseong yu                   */
    0x110e,     /* 0x43 C:            choseong chieuch               */
    0x110b,     /* 0x44 D:            choseong ieung                 */
    0x1104,     /* 0x45 E:            choseong ssangtikeut           */
    0x1105,     /* 0x46 F:            choseong rieul                 */
    0x1112,     /* 0x47 G:            choseong hieuh                 */
    0x1169,     /* 0x48 H:            jungseong o                    */
    0x1163,     /* 0x49 I:            jungseong ya                   */
    0x1165,     /* 0x4A J:            jungseong eo                   */
    0x1161,     /* 0x4B K:            jungseong a                    */
    0x1175,     /* 0x4C L:            jungseong i                    */
    0x1173,     /* 0x4D M:            jungseong eu                   */
    0x116e,     /* 0x4E N:            jungseong u                    */
    0x1164,     /* 0x4F O:            jungseong yae                  */
    0x1168,     /* 0x50 P:            jungseong ye                   */
    0x1108,     /* 0x51 Q:            choseong ssangpieup            */
    0x1101,     /* 0x52 R:            choseong ssangkiyeok           */
    0x1102,     /* 0x53 S:            choseong nieun                 */
    0x110a,     /* 0x54 T:            choseong ssangsios             */
    0x1167,     /* 0x55 U:            jungseong yeo                  */
    0x1111,     /* 0x56 V:            choseong phieuph               */
    0x110d,     /* 0x57 W:            choseong ssangcieuc            */
    0x1110,     /* 0x58 X:            choseong thieuth               */
    0x116d,     /* 0x59 Y:            jungseong yo                   */
    0x110f,     /* 0x5A Z:            choseong khieukh               */
    0x005b,     /* 0x5B bracketleft:  left bracket                   */
    0x005c,     /* 0x5C backslash:    backslash                      */
    0x005d,     /* 0x5D bracketright: right bracket                  */
    0x005e,     /* 0x5E asciicircum:  circumflex accent              */
    0x005f,     /* 0x5F underscore:   underscore                     */
    0x0060,     /* 0x60 quoteleft:    grave accent                   */
    0x1106,     /* 0x61 a:            choseong  mieum                */
    0x1172,     /* 0x62 b:            jungseong yu                   */
    0x110e,     /* 0x63 c:            choseong  chieuch              */
    0x110b,     /* 0x64 d:            choseong  ieung                */
    0x1103,     /* 0x65 e:            choseong  tikeut               */
    0x1105,     /* 0x66 f:            choseong  rieul                */
    0x1112,     /* 0x67 g:            choseong  hieuh                */
    0x1169,     /* 0x68 h:            jungseong o                    */
    0x1163,     /* 0x69 i:            jungseong ya                   */
    0x1165,     /* 0x6A j:            jungseong eo                   */
    0x1161,     /* 0x6B k:            jungseong a                    */
    0x1175,     /* 0x6C l:            jungseong i                    */
    0x1173,     /* 0x6D m:            jungseong eu                   */
    0x116e,     /* 0x6E n:            jungseong u                    */
    0x1162,     /* 0x6F o:            jungseong ae                   */
    0x1166,     /* 0x70 p:            jungseong e                    */
    0x1107,     /* 0x71 q:            choseong  pieup                */
    0x1100,     /* 0x72 r:            choseong  kiyeok               */
    0x1102,     /* 0x73 s:            choseong  nieun                */
    0x1109,     /* 0x74 t:            choseong  sios                 */
    0x1167,     /* 0x75 u:            jungseong yeo                  */
    0x1111,     /* 0x76 v:            choseong  phieuph              */
    0x110c,     /* 0x77 w:            choseong  cieuc                */
    0x1110,     /* 0x78 x:            choseong  thieuth              */
    0x116d,     /* 0x79 y:            jungseong yo                   */
    0x110f,     /* 0x7A z:            choseong  khieukh              */
    0x007b,     /* 0x7B braceleft:    left brace                     */
    0x007c,     /* 0x7C bar:          vertical bar                   */
    0x007d,     /* 0x7D braceright:   right brace                    */
    0x007e     /* 0x7E asciitilde:   tilde                          */
  ];

  var K2_kps9256 = [
    0x0021,     /* 0x21 exclam:       exclamation mark               */
    0x0022,     /* 0x22 quotedbl:     quotation mark                 */
    0x0023,     /* 0x23 numbersign:   number sign                    */
    0x0024,     /* 0x24 dollar:       dollar sign                    */
    0x0025,     /* 0x25 percent:      percent sign                   */
    0x0026,     /* 0x26 ampersand:    ampersand                      */
    0x0027,     /* 0x27 apostrophe:   apostrophe                     */
    0x0028,     /* 0x28 parenleft:    left parenthesis               */
    0x0029,     /* 0x29 parenright:   right parenthesis              */
    0x002a,     /* 0x2A asterisk:     asterisk                       */
    0x002b,     /* 0x2B plus:         plus sign                      */
    0x002c,     /* 0x2C comma:        comma                          */
    0x002d,     /* 0x2D minus:        minus sign                     */
    0x002e,     /* 0x2E period:       period                         */
    0x002f,     /* 0x2F slash:        slash                          */
    0x0030,     /* 0x30 0:            0                              */
    0x0031,     /* 0x31 1:            1                              */
    0x0032,     /* 0x32 2:            2                              */
    0x0033,     /* 0x33 3:            3                              */
    0x0034,     /* 0x34 4:            4                              */
    0x0035,     /* 0x35 5:            5                              */
    0x0036,     /* 0x36 6:            6                              */
    0x0037,     /* 0x37 7:            7                              */
    0x0038,     /* 0x38 8:            8                              */
    0x0039,     /* 0x39 9:            9                              */
    0x003a,     /* 0x3A colon:        colon                          */
    0x003b,     /* 0x3B semicolon:    semicolon                      */
    0x003c,     /* 0x3C less:         less-than sign                 */
    0x003d,     /* 0x3D equal:        equals sign                    */
    0x003e,     /* 0x3E greater:      greater-than sign              */
    0x003f,     /* 0x3F question:     question mark                  */
    0x0040,     /* 0x40 at:           commercial at                  */
    0x110d,     /* 0x41 A:            choseong cieuc                 */
    0x0000,     /* 0x42 B:            jungseong yu                   */
    0x0000,     /* 0x43 C:            choseong phieuph               */
    0x0000,     /* 0x44 D:            choseong ieung                 */
    0x1104,     /* 0x45 E:            choseong tikeut           */
    0x0000,     /* 0x46 F:            choseong nieun                 */
    0x110a,     /* 0x47 G:            choseong sios                 */
    0x0000,     /* 0x48 H:            jungseong o                    */
    0x0000,     /* 0x49 I:            jungseong ya                   */
    0x0000,     /* 0x4A J:            jungseong eo                   */
    0x0000,     /* 0x4B K:            jungseong a                    */
    0x0000,     /* 0x4C L:            jungseong i                    */
    0x0000,     /* 0x4D M:            jungseong eu                   */
    0x0000,     /* 0x4E N:            jungseong u                    */
    0x1164,     /* 0x4F O:            jungseong ae                  */
    0x1168,     /* 0x50 P:            jungseong e                   */
    0x1108,     /* 0x51 Q:            choseong pieup            */
    0x0000,     /* 0x52 R:            choseong rieul           */
    0x1101,     /* 0x53 S:            choseong kiyeok                 */
    0x0000,     /* 0x54 T:            choseong hieuh             */
    0x0000,     /* 0x55 U:            jungseong yeo                  */
    0x0000,     /* 0x56 V:            choseong chieuch               */
    0x0000,     /* 0x57 W:            choseong mieum            */
    0x0000,     /* 0x58 X:            choseong thieuth               */
    0x0000,     /* 0x59 Y:            jungseong yo                   */
    0x0000,     /* 0x5A Z:            choseong khieukh               */
    0x005b,     /* 0x5B bracketleft:  left bracket                   */
    0x005c,     /* 0x5C backslash:    backslash                      */
    0x005d,     /* 0x5D bracketright: right bracket                  */
    0x005e,     /* 0x5E asciicircum:  circumflex accent              */
    0x005f,     /* 0x5F underscore:   underscore                     */
    0x0060,     /* 0x60 quoteleft:    grave accent                   */
    0x110c,     /* 0x61 a:            choseong cieuc                 */
    0x1172,     /* 0x62 b:            jungseong yu                   */
    0x1111,     /* 0x63 c:            choseong  phieuph              */
    0x110b,     /* 0x64 d:            choseong  ieung                */
    0x1103,     /* 0x65 e:            choseong  tikeut               */
    0x1102,     /* 0x66 f:            choseong  nieun                */
    0x1109,     /* 0x67 g:            choseong  sios                */
    0x1169,     /* 0x68 h:            jungseong o                    */
    0x1165,     /* 0x69 i:            jungseong eo                   */
    0x1161,     /* 0x6A j:            jungseong a                   */
    0x1175,     /* 0x6B k:            jungseong i                    */
    0x1173,     /* 0x6C l:            jungseong eu                    */
    0x1163,     /* 0x6D m:            jungseong  ya                  */
    0x116d,     /* 0x6E n:            jungseong yo                    */
    0x1162,     /* 0x6F o:            jungseong ae                   */
    0x1166,     /* 0x70 p:            jungseong e                    */
    0x1107,     /* 0x71 q:            choseong  pieup                */
    0x1105,     /* 0x72 r:            choseong  rieul               */
    0x1100,     /* 0x73 s:            choseong  kiyeok                */
    0x1112,     /* 0x74 t:            choseong  hieuh                 */
    0x116e,     /* 0x75 u:            jungseong  u                 */
    0x110e,     /* 0x76 v:            choseong  chieuch              */
    0x1106,     /* 0x77 w:            choseong mieum                 */
    0x1110,     /* 0x78 x:            choseong  thieuth              */
    0x1167,     /* 0x79 y:            jungseong yeo                   */
    0x110f,     /* 0x7A z:            choseong  khieukh              */
    0x007b,     /* 0x7B braceleft:    left brace                     */
    0x007c,     /* 0x7C bar:          vertical bar                   */
    0x007d,     /* 0x7D braceright:   right brace                    */
    0x007e     /* 0x7E asciitilde:   tilde                          */
  ];


  var K3_3_90 = [
    0x11bd,     /* 0x21 exclam:         jongseong cieuc              */
    0x0022,     /* 0x22 quotedbl:       quotatioin mark              */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x1110,     /* 0x27 apostrophe:     choseong thieuth             */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x002d,     /* 0x2D minus:          minus sign                   */
    0x002e,     /* 0x2E period:         period                       */
    0x1169,     /* 0x2F slash:          jungseong o                  */
    0x110f,     /* 0x30 0:              choseong  khieukh            */
    0x11c2,     /* 0x31 1:              jongseong hieuh              */
    0x11bb,     /* 0x32 2:              jongseong ssangsios          */
    0x11b8,     /* 0x33 3:              jongseong pieup              */
    0x116d,     /* 0x34 4:              jungseong yo                 */
    0x1172,     /* 0x35 5:              jungseong yu                 */
    0x1163,     /* 0x36 6:              jungseong ya                 */
    0x1168,     /* 0x37 7:              jungseong ye                 */
    0x1174,     /* 0x38 8:              jungseong yi                 */
    0x116e,     /* 0x39 9:              jungseong u                  */
    0x003a,     /* 0x3A colon:          colon                        */
    0x1107,     /* 0x3B semicolon:      choseong  pieup              */
    0x0032,     /* 0x3C less:           2                            */
    0x003d,     /* 0x3D equal:          euals sign                   */
    0x0033,     /* 0x3E greater:        3                            */
    0x003f,     /* 0x3F question:       question mark                */
    0x0040,     /* 0x40 at:             commertial at                */
    0x11ae,     /* 0x41 A:              jongseong tikeut             */
    0x0021,     /* 0x42 B:              exclamation mark             */
    0x11b1,     /* 0x43 C:              jongseong rieul-mieum        */
    0x11b0,     /* 0x44 D:              jongseong rieul-kiyeok       */
    0x11bf,     /* 0x45 E:              jongseong khieukh            */
    0x11a9,     /* 0x46 F:              jongseong ssangkiyeok        */
    0x002f,     /* 0x47 G:              slash                        */
    0x0027,     /* 0x48 H:              apostrophe                   */
    0x0038,     /* 0x49 I:              8                            */
    0x0034,     /* 0x4A J:              4                            */
    0x0035,     /* 0x4B K:              5                            */
    0x0036,     /* 0x4C L:              6                            */
    0x0031,     /* 0x4D M:              1                            */
    0x0030,     /* 0x4E N:              0                            */
    0x0039,     /* 0x4F O:              9                            */
    0x003e,     /* 0x50 P:              greater-than sign            */
    0x11c1,     /* 0x51 Q:              jongseong phieuph            */
    0x1164,     /* 0x52 R:              jungseong yae                */
    0x11ad,     /* 0x53 S:              jongseong nieun-hieuh        */
    0x003b,     /* 0x54 T:              semicolon                    */
    0x0037,     /* 0x55 U:              7                            */
    0x11b6,     /* 0x56 V:              jongseong rieul-hieuh        */
    0x11c0,     /* 0x57 W:              jongseong thikeuth           */
    0x11b9,     /* 0x58 X:              jongseong pieup-sios         */
    0x003c,     /* 0x59 Y:              less-than sign               */
    0x11be,     /* 0x5A Z:              jongseong chieuch            */
    0x005b,     /* 0x5B bracketleft:    left bracket                 */
    0x005c,     /* 0x5C backslash:      backslash                    */
    0x005d,     /* 0x5D bracketright:   right bracket                */
    0x005e,     /* 0x5E asciicircum:    circumflex accent            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x0060,     /* 0x60 quoteleft:      grave accent                 */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x1167,     /* 0x65 e:              jungseong yeo                */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1102,     /* 0x68 h:              choseong  nieun              */
    0x1106,     /* 0x69 i:              choseong  mieum              */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1112,     /* 0x6D m:              choseong  hieuh              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x110e,     /* 0x6F o:              choseong  chieuch            */
    0x1111,     /* 0x70 p:              choseong  phieuph            */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1162,     /* 0x72 r:              jungseong ae                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1165,     /* 0x74 t:              jungseong eo                 */
    0x1103,     /* 0x75 u:              choseong  tikeut             */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11af,     /* 0x77 w:              jongseong rieul              */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1105,     /* 0x79 y:              choseong  rieul              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x007e     /* 0x7E asciitilde:     tilde                        */
  ];

  var K3_3_91 = [
    0x11a9,     /* 0x21 exclam:         jongseong ssangkiyeok        */
    0x00b7,     /* 0x22 quotedbl:       middle dot                   */
    0x11bd,     /* 0x23 numbersign:     jognseong cieuc              */
    0x11b5,     /* 0x24 dollar:         jongseong rieul-phieuph      */
    0x11b4,     /* 0x25 percent:        jongseong rieul-thieuth      */
    0x201c,     /* 0x26 ampersand:      left double quotation mark   */
    0x1110,     /* 0x27 apostrophe:     choseong  thieuth            */
    0x0027,     /* 0x28 parenleft:      apostrophe                   */
    0x007e,     /* 0x29 parenright:     Tilde                        */
    0x201d,     /* 0x2A asterisk:       right double quotation mark  */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x0029,     /* 0x2D minus:          right parenthesis            */
    0x002e,     /* 0x2E period:         period                       */
    0x1169,     /* 0x2F slash:          jungseong o                  */
    0x110f,     /* 0x30 0:              choseong  khieukh            */
    0x11c2,     /* 0x31 1:              jongseong hieuh              */
    0x11bb,     /* 0x32 2:              jongseong ssangsios          */
    0x11b8,     /* 0x33 3:              jongseong pieup              */
    0x116d,     /* 0x34 4:              jungseong yo                 */
    0x1172,     /* 0x35 5:              jungseong yu                 */
    0x1163,     /* 0x36 6:              jungseong ya                 */
    0x1168,     /* 0x37 7:              jungseong ye                 */
    0x1174,     /* 0x38 8:              jungseong yi                 */
    0x116e,     /* 0x39 9:              jungseong u                  */
    0x0034,     /* 0x3A colon:          4                            */
    0x1107,     /* 0x3B semicolon:      choseong  pieup              */
    0x002c,     /* 0x3C less:           comma                        */
    0x003e,     /* 0x3D equal:          greater-than sign            */
    0x002e,     /* 0x3E greater:        period                       */
    0x0021,     /* 0x3F question:       exclamation mark             */
    0x11b0,     /* 0x40 at:             jongseong rieul-kiyeok       */
    0x11ae,     /* 0x41 A:              jongseong tikeut             */
    0x003f,     /* 0x42 B:              question mark                */
    0x11bf,     /* 0x43 C:              jongseong khieukh            */
    0x11b2,     /* 0x44 D:              jongseong rieul-pieup        */
    0x11ac,     /* 0x45 E:              jongseong nieun-cieuc        */
    0x11b1,     /* 0x46 F:              jongseong rieul-mieum        */
    0x1164,     /* 0x47 G:              jungseong yae                */
    0x0030,     /* 0x48 H:              0                            */
    0x0037,     /* 0x49 I:              7                            */
    0x0031,     /* 0x4A J:              1                            */
    0x0032,     /* 0x4B K:              2                            */
    0x0033,     /* 0x4C L:              3                            */
    0x0022,     /* 0x4D M:              double quotation mark        */
    0x002d,     /* 0x4E N:              minus sign                   */
    0x0038,     /* 0x4F O:              8                            */
    0x0039,     /* 0x50 P:              9                            */
    0x11c1,     /* 0x51 Q:              jongseong phieuph            */
    0x11b6,     /* 0x52 R:              jongseong rieul-hieuh        */
    0x11ad,     /* 0x53 S:              jongseong nieun-hieuh        */
    0x11b3,     /* 0x54 T:              jongseong rieul-sios         */
    0x0036,     /* 0x55 U:              6                            */
    0x11aa,     /* 0x56 V:              jongseong kiyeok-sios        */
    0x11c0,     /* 0x57 W:              jongseong thikeuth           */
    0x11b9,     /* 0x58 X:              jongseong pieup-sios         */
    0x0035,     /* 0x59 Y:              5                            */
    0x11be,     /* 0x5A Z:              jongseong chieuch            */
    0x0028,     /* 0x5B bracketleft:    left parenthesis             */
    0x003a,     /* 0x5C backslash:      colon                        */
    0x003c,     /* 0x5D bracketright:   less-than sign               */
    0x003d,     /* 0x5E asciicircum:    equals sign                  */
    0x003b,     /* 0x5F underscore:     semicolon                    */
    0x002a,     /* 0x60 quoteleft:      asterisk                     */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x1167,     /* 0x65 e:              jungseong yeo                */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1102,     /* 0x68 h:              choseong  nieun              */
    0x1106,     /* 0x69 i:              choseong  mieum              */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1112,     /* 0x6D m:              choseong  hieuh              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x110e,     /* 0x6F o:              choseong  chieuch            */
    0x1111,     /* 0x70 p:              choseong  phieuph            */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1162,     /* 0x72 r:              jungseong ae                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1165,     /* 0x74 t:              jungseong eo                 */
    0x1103,     /* 0x75 u:              choseong  tikeut             */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11af,     /* 0x77 w:              jongseong rieul              */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1105,     /* 0x79 y:              choseong  rieul              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x0025,     /* 0x7B braceleft:      percent sign                 */
    0x005c,     /* 0x7C bar:            backslash                    */
    0x002f,     /* 0x7D braceright:     slash                        */
    0x203b     /* 0x7E asciitilde:     reference mark               */
  ];

  var K3_3_93_yet = [
    0x11bd,     /* 0x21 exclam:         jongseong cieuc              */
    0x0022,     /* 0x22 quotedbl:       quotatioin mark              */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x1110,     /* 0x27 apostrophe:     choseong thieuth             */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x002d,     /* 0x2D minus:          minus sign                   */
    0x002e,     /* 0x2E period:         period                       */
    0x1169,     /* 0x2F slash:          jungseong o                  */
    0x110f,     /* 0x30 0:              choseong  khieukh            */
    0x11c2,     /* 0x31 1:              jongseong hieuh              */
    0x11bb,     /* 0x32 2:              jongseong ssangsios          */
    0x11b8,     /* 0x33 3:              jongseong pieup              */
    0x116d,     /* 0x34 4:              jungseong yo                 */
    0x1172,     /* 0x35 5:              jungseong yu                 */
    0x1163,     /* 0x36 6:              jungseong ya                 */
    0x1168,     /* 0x37 7:              jungseong ye                 */
    0x1174,     /* 0x38 8:              jungseong yi                 */
    0x116e,     /* 0x39 9:              jungseong u                  */
    0x003a,     /* 0x3A colon:          colon                        */
    0x1107,     /* 0x3B semicolon:      choseong  pieup              */
    0x113c,     /* 0x3C less:           choseong chitueumsios        */
    0x003d,     /* 0x3D equal:          euals sign                   */
    0x113e,     /* 0x3E greater:        choseong ceongchieumsios     */
    0x003f,     /* 0x3F question:       question mark                */
    0x11eb,     /* 0x40 at:             jongseong pansios            */
    0x11ae,     /* 0x41 A:              jongseong tikeut             */
    0x0021,     /* 0x42 B:              exclamation mark             */
    0x11b1,     /* 0x43 C:              jongseong rieul-mieum        */
    0x11b0,     /* 0x44 D:              jongseong rieul-kiyeok       */
    0x11bf,     /* 0x45 E:              jongseong khieukh            */
    0x11a9,     /* 0x46 F:              jongseong ssangkiyeok        */
    0x119e,     /* 0x47 G:              jungseong araea              */
    0x0027,     /* 0x48 H:              apostrophe                   */
    0x1154,     /* 0x49 I:              choseong chitueumchieuch     */
    0x114c,     /* 0x4A J:              choseong yesieung            */
    0x114e,     /* 0x4B K:              choseong chitueumcieuc       */
    0x1150,     /* 0x4C L:              choseong ceongchieumcieuc    */
    0x1159,     /* 0x4D M:              choseong yeorinhieuh         */
    0x1140,     /* 0x4E N:              choseong pansios             */
    0x1155,     /* 0x4F O:              choseong ceongchieumchieuch  */
    0x003e,     /* 0x50 P:              greater-than sign            */
    0x11c1,     /* 0x51 Q:              jongseong phieuph            */
    0x1164,     /* 0x52 R:              jungseong yae                */
    0x11ad,     /* 0x53 S:              jongseong nieun-hieuh        */
    0x003b,     /* 0x54 T:              semicolon                    */
    0x00b7,     /* 0x55 U:              middle dot                   */
    0x11b6,     /* 0x56 V:              jongseong rieul-hieuh        */
    0x11c0,     /* 0x57 W:              jongseong thikeuth           */
    0x11b9,     /* 0x58 X:              jongseong pieup-sios         */
    0x003c,     /* 0x59 Y:              less-than sign               */
    0x11be,     /* 0x5A Z:              jongseong chieuch            */
    0x005b,     /* 0x5B bracketleft:    left bracket                 */
    0x005c,     /* 0x5C backslash:      backslash                    */
    0x005d,     /* 0x5D bracketright:   right bracket                */
    0x114c,     /* 0x5E asciicircum:    choseong yesieung            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x11f9,     /* 0x60 quoteleft:      jongseong yeorinhieuh        */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x1167,     /* 0x65 e:              jungseong yeo                */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1102,     /* 0x68 h:              choseong  nieun              */
    0x1106,     /* 0x69 i:              choseong  mieum              */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1112,     /* 0x6D m:              choseong  hieuh              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x110e,     /* 0x6F o:              choseong  chieuch            */
    0x1111,     /* 0x70 p:              choseong  phieuph            */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1162,     /* 0x72 r:              jungseong ae                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1165,     /* 0x74 t:              jungseong eo                 */
    0x1103,     /* 0x75 u:              choseong  tikeut             */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11af,     /* 0x77 w:              jongseong rieul              */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1105,     /* 0x79 y:              choseong  rieul              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x11f0     /* 0x7E asciitilde:     jongseong yesieung           */
  ];

  var K3_3_2012 = [
    0x0021,     /* 0x21 exclam:         exclamation mark             */
    0x002f,     /* 0x22 quotedbl:       slash                        */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x1110,     /* 0x27 apostrophe:     choseong tieuh               */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x002d,     /* 0x2D minus:          minus sign                   */
    0x002e,     /* 0x2E period:         period                       */
    0x1169,     /* 0x2F slash:          jungseong o                  */
    0x110f,     /* 0x30 0:              choseong  kieuk              */
    0x11c2,     /* 0x31 1:              jongseong hieuh              */
    0x11bb,     /* 0x32 2:              jongseong ssangsieus         */
    0x11b8,     /* 0x33 3:              jongseong bieub              */
    0x116d,     /* 0x34 4:              jungseong yo                 */
    0x1172,     /* 0x35 5:              jungseong yu                 */
    0x1163,     /* 0x36 6:              jungseong ya                 */
    0x1168,     /* 0x37 7:              jungseong ye                 */
    0x1174,     /* 0x38 8:              jungseong eui                */
    0x116e,     /* 0x39 9:              jungseong u                  */
    0x0034,     /* 0x3A colon:          4                            */
    0x1107,     /* 0x3B semicolon:      choseong  bieub              */
    0x003c,     /* 0x3C less:           less-than sign               */
    0x003d,     /* 0x3D equal:          equals sign                  */
    0x003e,     /* 0x3E greater:        greater-than sign            */
    0x003f,     /* 0x3F question:       question mark                */
    0x0040,     /* 0x40 at:             commertial at                */
    0x11ae,     /* 0x41 A:              jongseong dieud              */
    0x003b,     /* 0x42 B:              semicolon                    */
    0x11bf,     /* 0x43 C:              jongseong kieuk              */
    0x11b0,     /* 0x44 D:              jongseong rieul-gieug        */
    0x11bd,     /* 0x45 E:              jongseong jieuj              */
    0x11b1,     /* 0x46 F:              jongseong rieul-mieum        */
    0x003a,     /* 0x47 G:              colon                        */
    0x0030,     /* 0x48 H:              0                            */
    0x0037,     /* 0x49 I:              7                            */
    0x0031,     /* 0x4A J:              1                            */
    0x0032,     /* 0x4B K:              2                            */
    0x0033,     /* 0x4C L:              3                            */
    0x0022,     /* 0x4D M:              quotatioin mark              */
    0x0027,     /* 0x4E N:              apostrophe                   */
    0x0038,     /* 0x4F O:              8                            */
    0x0039,     /* 0x50 P:              9                            */
    0x11c1,     /* 0x51 Q:              jongseong pieup              */
    0x11b6,     /* 0x52 R:              jongseong rieul-hieuh        */
    0x11ad,     /* 0x53 S:              jongseong nieun-hieuh        */
    0x1164,     /* 0x54 T:              jungseong yae                */
    0x0036,     /* 0x55 U:              6                            */
    0x11a9,     /* 0x56 V:              jongseong ssanggieug         */
    0x11c0,     /* 0x57 W:              jongseong tieut              */
    0x11b9,     /* 0x58 X:              jongseong bieub-sieus        */
    0x0035,     /* 0x59 Y:              5                            */
    0x11be,     /* 0x5A Z:              jongseong chieuch            */
    0x005b,     /* 0x5B bracketleft:    left bracket                 */
    0x005c,     /* 0x5C backslash:      backslash                    */
    0x005d,     /* 0x5D bracketright:   right bracket                */
    0x005e,     /* 0x5E asciicircum:    circumflex accent            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x0060,     /* 0x60 quoteleft:      grave accent                 */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x1167,     /* 0x65 e:              jungseong yeo                */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1102,     /* 0x68 h:              choseong  nieun              */
    0x1106,     /* 0x69 i:              choseong  mieum              */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  gieug              */
    0x110c,     /* 0x6C l:              choseong  jieuc              */
    0x1112,     /* 0x6D m:              choseong  hieuh              */
    0x1109,     /* 0x6E n:              choseong  sieus              */
    0x110e,     /* 0x6F o:              choseong  chieuch            */
    0x1111,     /* 0x70 p:              choseong  pieup              */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1165,     /* 0x72 r:              jungseong eo                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1162,     /* 0x74 t:              jungseong ae                 */
    0x1103,     /* 0x75 u:              choseong  dieud              */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11af,     /* 0x77 w:              jongseong rieul              */
    0x11a8,     /* 0x78 x:              jongseong gieug              */
    0x1105,     /* 0x79 y:              choseong  rieul              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x007e     /* 0x7E asciitilde:     tilde                        */
  ];

  var K3_3_2015 = [
    0x0021,    /* 0x21 exclam */
    0x002f,    /* 0x22 quotedbl: slash */
    0x0023,    /* 0x23 numbersign */
    0x0024,    /* 0x24 dollar */
    0x0025,    /* 0x25 percent */
    0x0026,    /* 0x26 ampersand */
    0x1110,    /* 0x27 apostrophe: choseong tieuh */
    0x0028,    /* 0x28 parenleft */
    0x0029,    /* 0x29 parenright */
    0x002a,    /* 0x2A asterisk */
    0x002b,    /* 0x2B plus */
    0x002c,    /* 0x2C comma */
    0x002d,    /* 0x2D minus */
    0x002e,    /* 0x2E period */
    0x1169,    /* 0x2F slash: jungseong o */
    0x110f,    /* 0x30 0: choseong  kieuk */
    0x11ae,    /* 0x31 1: jongseong dieud */
    0x11bb,    /* 0x32 2: jongseong ssangsieus */
    0x11b8,    /* 0x33 3: jongseong bieub */
    0x116d,    /* 0x34 4: jungseong yo */
    0x1172,    /* 0x35 5: jungseong yu */
    0x1163,    /* 0x36 6: jungseong ya */
    0x1168,    /* 0x37 7: jungseong ye */
    0x1174,    /* 0x38 8: jungseong eui */
    0x116e,    /* 0x39 9: jungseong u */
    0x0034,    /* 0x3A colon: 4 */
    0x1107,    /* 0x3B semicolon: choseong bieub */
    0x003c,    /* 0x3C less */
    0x003d,    /* 0x3D equal */
    0x003e,    /* 0x3E greater */
    0x003f,    /* 0x3F question */
    0x0040,    /* 0x40 at */
    0x11b9,    /* 0x41 A: jongseong bieub-sieuh */
    0x003b,    /* 0x42 B: semicolon */
    0x11c0,    /* 0x43 C: jongseong tieut */
    0x11c2, /* 0x44 D: jongseong hieuh */
    0x11bd,    /* 0x45 E: jongseong jieuj */
    0x11c1,    /* 0x46 F: jongseong pieup */
    0x003a,    /* 0x47 G: colon */
    0x0030,    /* 0x48 H: 0 */
    0x0037,    /* 0x49 I: 7 */
    0x0031,    /* 0x4A J: 1 */
    0x0032,    /* 0x4B K: 2 */
    0x0033,    /* 0x4C L: 3 */
    0x0022,    /* 0x4D M: quotatioin mark */
    0x0027,    /* 0x4E N: apostrophe */
    0x0038,    /* 0x4F O: 8 */
    0x0039,    /* 0x50 P: 9 */
    0x11b6, /* 0x51 Q: jongseong lieul-hieuh */
    0x11be,    /* 0x52 R: jongseong chieuch */
    0x11ad,    /* 0x53 S: jongseong nieun-hieuh */
    0x1164,    /* 0x54 T: jungseong yae */
    0x0036,    /* 0x55 U: 6 */
    0x11bf,    /* 0x56 V: jongseong kieuk */
    0x11b0,    /* 0x57 W: jongseong lieul-gieug */
    0x11a9,    /* 0x58 X: jongseong ssanggieug */
    0x0035,    /* 0x59 Y: 5 */
    0x11b1,    /* 0x5A Z: jongseong lieul-mieum */
    0x005b,    /* 0x5B bracketleft */
    0x005c,    /* 0x5C backslash */
    0x005d,    /* 0x5D bracketright */
    0x005e,    /* 0x5E asciicircum */
    0x005f,    /* 0x5F underscore */
    0x0060,    /* 0x60 quoteleft */
    0x11bc,    /* 0x61 a: jongseong ieung */
    0x116e,    /* 0x62 b: jungseong u */
    0x1166,    /* 0x63 c: jungseong e */
    0x1175,    /* 0x64 d: jungseong i */
    0x1167,    /* 0x65 e: jungseong yeo */
    0x1161,    /* 0x66 f: jungseong a */
    0x1173,    /* 0x67 g: jungseong eu */
    0x1102,    /* 0x68 h: choseong nieun */
    0x1106,    /* 0x69 i: choseong mieum */
    0x110b,    /* 0x6A j: choseong ieung */
    0x1100,    /* 0x6B k: choseong gieug */
    0x110c,    /* 0x6C l: choseong jieuc */
    0x1112,    /* 0x6D m: choseong hieuh */
    0x1109,    /* 0x6E n: choseong sieus */
    0x110e,    /* 0x6F o: choseong chieuch */
    0x1111,    /* 0x70 p: choseong pieup */
    0x11ba,    /* 0x71 q: jongseong sios */
    0x1165,    /* 0x72 r: jungseong eo */
    0x11ab,    /* 0x73 s: jongseong nieun */
    0x1162,    /* 0x74 t: jungseong ae */
    0x1103,    /* 0x75 u: choseong dieud */
    0x1169,    /* 0x76 v: jungseong o */
    0x11af,    /* 0x77 w: jongseong rieul */
    0x11a8,    /* 0x78 x: jongseong gieug */
    0x1105,    /* 0x79 y: choseong rieul */
    0x11b7,    /* 0x7A z: jongseong mieum */
    0x007b,    /* 0x7B braceleft */
    0x007c,    /* 0x7C bar */
    0x007d,    /* 0x7D braceright */
    0x007e    /* 0x7E asciitilde */
  ];

  var K3_3_P2 = [
    0x0021,  /* 0x21 exclam */
    0x002f,  /* 0x22 quotedbl: slash */
    0x0023,  /* 0x23 numbersign */
    0x0024,  /* 0x24 dollar */
    0x0025,  /* 0x25 percent */
    0x0026,  /* 0x26 ampersand */
    0x1110,  /* 0x27 apostrophe: choseong tieuh */
    0x0028,  /* 0x28 parenleft */
    0x0029,  /* 0x29 parenright */
    0x002a,  /* 0x2A asterisk */
    0x002b,  /* 0x2B plus */
    0x002c,  /* 0x2C comma */
    0x002d,  /* 0x2D minus */
    0x002e,  /* 0x2E period */
    0x1169,  /* 0x2F slash: jungseong o */
    0x110f,  /* 0x30 0: choseong  kieuk */
    0x11bf,  /* 0x31 1: jongseong kieuk */
    0x11bb,  /* 0x32 2: jongseong ssangsieus */
    0x11b8,  /* 0x33 3: jongseong bieub */
    0x116d,  /* 0x34 4: jungseong yo */
    0x1172,  /* 0x35 5: jungseong yu */
    0x1163,  /* 0x36 6: jungseong ya */
    0x1168,  /* 0x37 7: jungseong ye */
    0x1173,  /* 0x38 8: jungseong eu */
    0x116e,  /* 0x39 9: jungseong u */
    0x0034,  /* 0x3A colon: 4 */
    0x1107,  /* 0x3B semicolon: choseong bieub */
    0x003c,  /* 0x3C less */
    0x003d,  /* 0x3D equal */
    0x003e,  /* 0x3E greater */
    0x003f,  /* 0x3F question */
    0x0040,  /* 0x40 at */
    0x11b9,  /* 0x41 A: jongseong bieub-sieuh */
    0x003b,  /* 0x42 B: semicolon */
    0x11ae,  /* 0x43 C: jongseong dieud */
    0x11c2, /* 0x44 D: jongseong hieuh */
    0x11c0,  /* 0x45 E: jongseong tieut */
    0x11c1,  /* 0x46 F: jongseong pieup */
    0x003a,  /* 0x47 G: colon */
    0x0030,  /* 0x48 H: 0 */
    0x0037,  /* 0x49 I: 7 */
    0x0031,  /* 0x4A J: 1 */
    0x0032,  /* 0x4B K: 2 */
    0x0033,  /* 0x4C L: 3 */
    0x0022,  /* 0x4D M: quotatioin mark */
    0x0027,  /* 0x4E N: apostrophe */
    0x0038,  /* 0x4F O: 8 */
    0x0039,  /* 0x50 P: 9 */
    0x11b6,  /* 0x51 Q: jongseong lieul-hieuh */
    0x11be,  /* 0x52 R: jongseong chieuch */
    0x11ad,  /* 0x53 S: jongseong nieun-hieuh */
    0x1164,  /* 0x54 T: jungseong yae */
    0x0036,  /* 0x55 U: 6 */
    0x11bd,  /* 0x56 V: jongseong jieuj */
    0x11b0,  /* 0x57 W: jongseong lieul-gieug */
    0x11a9,  /* 0x58 X: jongseong ssanggieug */
    0x0035,  /* 0x59 Y: 5 */
    0x11b1,  /* 0x5A Z: jongseong lieul-mieum */
    0x005b,  /* 0x5B bracketleft */
    0x005c,  /* 0x5C backslash */
    0x005d,  /* 0x5D bracketright */
    0x005e,  /* 0x5E asciicircum */
    0x005f,  /* 0x5F underscore */
    0x0060,  /* 0x60 quoteleft */
    0x11bc,  /* 0x61 a: jongseong ieung */
    0x116e,  /* 0x62 b: jungseong u */
    0x1166,  /* 0x63 c: jungseong e */
    0x1175,  /* 0x64 d: jungseong i */
    0x1167,  /* 0x65 e: jungseong yeo */
    0x1161,  /* 0x66 f: jungseong a */
    0x1173,  /* 0x67 g: jungseong eu */
    0x1102,  /* 0x68 h: choseong nieun */
    0x1106,  /* 0x69 i: choseong mieum */
    0x110b,  /* 0x6A j: choseong ieung */
    0x1100,  /* 0x6B k: choseong gieug */
    0x110c,  /* 0x6C l: choseong jieuc */
    0x1112,  /* 0x6D m: choseong hieuh */
    0x1109,  /* 0x6E n: choseong sieus */
    0x110e,  /* 0x6F o: choseong chieuch */
    0x1111,  /* 0x70 p: choseong pieup */
    0x11ba,  /* 0x71 q: jongseong sieus */
    0x1165,  /* 0x72 r: jungseong eo */
    0x11ab,  /* 0x73 s: jongseong nieun */
    0x1162,  /* 0x74 t: jungseong ae */
    0x1103,  /* 0x75 u: choseong dieud */
    0x1169,  /* 0x76 v: jungseong o */
    0x11af,  /* 0x77 w: jongseong lieul */
    0x11a8,  /* 0x78 x: jongseong gieug */
    0x1105,  /* 0x79 y: choseong lieul */
    0x11b7,  /* 0x7A z: jongseong mieum */
    0x007b,  /* 0x7B braceleft */
    0x007c,  /* 0x7C bar */
    0x007d,  /* 0x7D braceright */
    0x007e  /* 0x7E asciitilde */
  ];

  var K3_3_P3 = [
    0x0021,  /* 0x21 exclam */
    0x0022,  /* 0x22 quotedbl: quotatioin mark */
    0x0023,  /* 0x23 numbersign */
    0x0024,  /* 0x24 dollar */
    0x0025,  /* 0x25 percent */
    0x0026,  /* 0x26 ampersand */
    0x1110,  /* 0x27 apostrophe: choseong tieuh */
    0x0028,  /* 0x28 parenleft */
    0x0029,  /* 0x29 parenright */
    0x002a,  /* 0x2A asterisk */
    0x002b,  /* 0x2B plus */
    0x002c,  /* 0x2C comma */
    0x002d,  /* 0x2D minus */
    0x002e,  /* 0x2E period */
    0x1169,  /* 0x2F slash: jungseong o */
    0x110f,  /* 0x30 0: choseong  kieuk */
    0x11bf,  /* 0x31 1: jongseong kieuk */
    0x11bb,  /* 0x32 2: jongseong ssangsieus */
    0x11b8,  /* 0x33 3: jongseong bieub */
    0x116d,  /* 0x34 4: jungseong yo */
    0x1172,  /* 0x35 5: jungseong yu */
    0x1163,  /* 0x36 6: jungseong ya */
    0x1168,  /* 0x37 7: jungseong ye */
    0x1173,  /* 0x38 8: jungseong eu */
    0x116e,  /* 0x39 9: jungseong u */
    0x003a,  /* 0x3A colon */
    0x1107,  /* 0x3B semicolon: choseong bieub */
    0x0032,  /* 0x3C less: 2 */
    0x003d,  /* 0x3D equal */
    0x0033,  /* 0x3E greater: 3 */
    0x003f,  /* 0x3F question */
    0x0040,  /* 0x40 at */
    0x11b9,  /* 0x41 A: jongseong bieub-sieuh */
    0x003e,  /* 0x42 B: greater */
    0x11ae,  /* 0x43 C: jongseong dieud */
    0x11c2,  /* 0x44 D: jongseong hieuh */
    0x11c0,  /* 0x45 E: jongseong tieut */
    0x11c1,  /* 0x46 F: jongseong pieup */
    0x003c,  /* 0x47 G: less */
    0x0027,  /* 0x48 H: apostrophe */
    0x0038,  /* 0x49 I: 8 */
    0x0034,  /* 0x4A J: 4 */
    0x0035,  /* 0x4B K: 5 */
    0x0036,  /* 0x4C L: 6 */
    0x0031,  /* 0x4D M: 1 */
    0x0030,  /* 0x4E N: 0 */
    0x0039,  /* 0x4F O: 9 */
    0x003b,  /* 0x50 P: semicolon */
    0x11b6,  /* 0x51 Q: jongseong lieul-hieuh */
    0x11be,  /* 0x52 R: jongseong chieuch */
    0x11ad,  /* 0x53 S: jongseong nieun-hieuh */
    0x1164,  /* 0x54 T: jungseong yae */
    0x0037,  /* 0x55 U: 7 */
    0x11bd,  /* 0x56 V: jongseong jieuj */
    0x11b0,  /* 0x57 W: jongseong lieul-gieug */
    0x11a9,  /* 0x58 X: jongseong ssanggieug */
    0x002f,  /* 0x59 Y: slash */
    0x11b1,  /* 0x5A Z: jongseong lieul-mieum */
    0x005b,  /* 0x5B bracketleft */
    0x005c,  /* 0x5C backslash */
    0x005d,  /* 0x5D bracketright */
    0x005e,  /* 0x5E asciicircum */
    0x005f,  /* 0x5F underscore */
    0x0060,  /* 0x60 quoteleft */
    0x11bc,  /* 0x61 a: jongseong ieung */
    0x116e,  /* 0x62 b: jungseong u */
    0x1166,  /* 0x63 c: jungseong e */
    0x1175,  /* 0x64 d: jungseong i */
    0x1167,  /* 0x65 e: jungseong yeo */
    0x1161,  /* 0x66 f: jungseong a */
    0x1173,  /* 0x67 g: jungseong eu */
    0x1102,  /* 0x68 h: choseong nieun */
    0x1106,  /* 0x69 i: choseong mieum */
    0x110b,  /* 0x6A j: choseong ieung */
    0x1100,  /* 0x6B k: choseong gieug */
    0x110c,  /* 0x6C l: choseong jieuc */
    0x1112,  /* 0x6D m: choseong hieuh */
    0x1109,  /* 0x6E n: choseong sieus */
    0x110e,  /* 0x6F o: choseong chieuch */
    0x1111,  /* 0x70 p: choseong pieup */
    0x11ba,  /* 0x71 q: jongseong sieus */
    0x1165,  /* 0x72 r: jungseong eo */
    0x11ab,  /* 0x73 s: jongseong nieun */
    0x1162,  /* 0x74 t: jungseong ae */
    0x1103,  /* 0x75 u: choseong dieud */
    0x1169,  /* 0x76 v: jungseong o */
    0x11af,  /* 0x77 w: jongseong lieul */
    0x11a8,  /* 0x78 x: jongseong gieug */
    0x1105,  /* 0x79 y: choseong lieul */
    0x11b7,  /* 0x7A z: jongseong mieum */
    0x007b,  /* 0x7B braceleft */
    0x007c,  /* 0x7C bar */
    0x007d,  /* 0x7D braceright */
    0x007e  /* 0x7E asciitilde */
  ];

  var K3_3sun_1990 = [
    0x0021,     /* 0x21 exclam:         exclamation mark             */
    0x0022,     /* 0x22 quotedbl:       quotatioin mark              */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x1110,     /* 0x27 apostrophe:     choseong thieuth             */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x11bd,     /* 0x2D minus:          jongseong cieuc              */
    0x002e,     /* 0x2E period:         period                       */
    0x11ae,     /* 0x2F slash:          jongseong tikeut             */
    0x1164,     /* 0x30 0:              choseong  yae                */
    0x11c2,     /* 0x31 1:              jongseong hieuh              */
    0x11bb,     /* 0x32 2:              jongseong ssangsios          */
    0x11b8,     /* 0x33 3:              jongseong pieup              */
    0x116d,     /* 0x34 4:              jungseong yo                 */
    0x1172,     /* 0x35 5:              jungseong yu                 */
    0x1163,     /* 0x36 6:              jungseong ya                 */
    0x1168,     /* 0x37 7:              jungseong ye                 */
    0x1174,     /* 0x38 8:              jungseong yi                 */
    0x110f,     /* 0x39 9:              choseong khieukh             */
    0x003a,     /* 0x3A colon:          colon                        */
    0x1107,     /* 0x3B semicolon:      choseong  pieup              */
    0x0032,     /* 0x3C less:           2                            */
    0x11be,     /* 0x3D equal:          jongseong chieuch            */
    0x0033,     /* 0x3E greater:        3                            */
    0x003f,     /* 0x3F question:       question mark                */
    0x0040,     /* 0x40 at:             commertial at                */
    0x11bc,     /* 0x41 A:              jongseong ieung              */
    0x0021,     /* 0x42 B:              exclamation mark             */
    0x005c,     /* 0x43 C:              backslash                    */
    0x005d,     /* 0x44 D:              right bracket                */
    0x1167,     /* 0x45 E:              jungseong yeo                */
    0x1161,     /* 0x46 F:              jungseong a                  */
    0x002f,     /* 0x47 G:              slash                        */
    0x0027,     /* 0x48 H:              apostrophe                   */
    0x0038,     /* 0x49 I:              8                            */
    0x0034,     /* 0x4A J:              4                            */
    0x0035,     /* 0x4B K:              5                            */
    0x0036,     /* 0x4C L:              6                            */
    0x0031,     /* 0x4D M:              1                            */
    0x0030,     /* 0x4E N:              0                            */
    0x0039,     /* 0x4F O:              9                            */
    0x003e,     /* 0x50 P:              greater-than sign            */
    0x11ba,     /* 0x51 Q:              jongseong sios               */
    0x1162,     /* 0x52 R:              jungseong ae                 */
    0x005b,     /* 0x53 S:              left bracket                 */
    0x003b,     /* 0x54 T:              semicolon                    */
    0x0037,     /* 0x55 U:              7                            */
    0x1169,     /* 0x56 V:              jungseong o                  */
    0x11af,     /* 0x57 W:              jongseong rieul              */
    0x003d,     /* 0x58 X:              equals sign                  */
    0x003c,     /* 0x59 Y:              less-than sign               */
    0x002d,     /* 0x5A Z:              minus sign                   */
    0x11c0,     /* 0x5B bracketleft:    jongseong thieuth            */
    0x11bf,     /* 0x5C backslash:      jongseong khieukh            */
    0x11c1,     /* 0x5D bracketright:   jongseong phieuph            */
    0x005e,     /* 0x5E asciicircum:    circumflex accent            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x0060,     /* 0x60 quoteleft:      grave accent                 */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x1167,     /* 0x65 e:              jungseong yeo                */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1102,     /* 0x68 h:              choseong  nieun              */
    0x1106,     /* 0x69 i:              choseong  mieum              */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1112,     /* 0x6D m:              choseong  hieuh              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x110e,     /* 0x6F o:              choseong  chieuch            */
    0x1111,     /* 0x70 p:              choseong  phieuph            */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1162,     /* 0x72 r:              jungseong ae                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1165,     /* 0x74 t:              jungseong eo                 */
    0x1103,     /* 0x75 u:              choseong  tikeut             */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11af,     /* 0x77 w:              jongseong rieul              */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1105,     /* 0x79 y:              choseong  rieul              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x007e     /* 0x7E asciitilde:     tilde                        */
  ];

  var K3_3sun_2014 = [
    0x0021, /* 0x21 exclam:       exclamation mark */
    0x0022, /* 0x22 quotedbl:     quotatioin mark */
    0x0023, /* 0x23 numbersign:   number sign */
    0x0024, /* 0x24 dollar:       dollar sign */
    0x0025, /* 0x25 percent:      percent sign */
    0x0026, /* 0x26 ampersand:    ampersand */
    0x1110, /* 0x27 apostrophe:   choseong tieut */
    0x0028, /* 0x28 parenleft:    left parenthesis */
    0x0029, /* 0x29 parenright:   right parenthesis */
    0x002a, /* 0x2A asterisk:     asterisk */
    0x002b, /* 0x2B plus:         plus sign */
    0x002c, /* 0x2C comma:        comma */
    0x002d, /* 0x2D minus:        minus sign */
    0x002e, /* 0x2E period:       period */
    0x1169, /* 0x2F slash:        jungseong o */
    0x110f, /* 0x30 0:            choseong  kieuk */
    0x11c2, /* 0x31 1:            jongseong hieuh */
    0x11bb, /* 0x32 2:            jongseong ssangsieus */
    0x11b8, /* 0x33 3:            jongseong pieup */
    0x116d, /* 0x34 4:            jungseong yo */
    0x1172, /* 0x35 5:            jungseong yu */
    0x1163, /* 0x36 6:            jungseong ya */
    0x1168, /* 0x37 7:            jungseong ye */
    0x1174, /* 0x38 8:            jungseong yi */
    0x116e, /* 0x39 9:            jungseong u */
    0x003a, /* 0x3A colon:        colon */
    0x1107, /* 0x3B semicolon:    choseong pieup */
    0x0032, /* 0x3C less:         2 */
    0x003d, /* 0x3D equal:        euals sign */
    0x0033, /* 0x3E greater:      3 */
    0x003f, /* 0x3F question:     question mark */
    0x0040, /* 0x40 at:           commertial at */
    0x11ae, /* 0x41 A:            jongseong dieud */
    0x0000, /* 0x42 B:            */
    0x0000, /* 0x43 C:            jongseong rieul-mieum */
    0x0000, /* 0x44 D:            jongseong rieul-gieug */
    0x0000, /* 0x45 E:            jongseong kieuk */
    0x0000, /* 0x46 F:            jongseong ssanggieug */
    0x002f, /* 0x47 G:            slash */
    0x0027, /* 0x48 H:            apostrophe */
    0x0038, /* 0x49 I:            8 */
    0x0034, /* 0x4A J:            4 */
    0x0035, /* 0x4B K:            5 */
    0x0036, /* 0x4C L:            6 */
    0x0031, /* 0x4D M:            1 */
    0x0030, /* 0x4E N:            0 */
    0x0039, /* 0x4F O:            9 */
    0x003e, /* 0x50 P:            greater-than sign */
    0x11bd, /* 0x51 Q:            jongseong jieuj */
    0x1164, /* 0x52 R:            jungseong yae */
    0x11c0, /* 0x53 S:            jongseong tieut */
    0x003b, /* 0x54 T:            semicolon */
    0x0037, /* 0x55 U:            7 */
    0x0000, /* 0x56 V:            */
    0x11be, /* 0x57 W:            jongseong chieuch */
    0x11bf, /* 0x58 X:            jongseong kieuk */
    0x003c, /* 0x59 Y:            less-than sign */
    0x11c1, /* 0x5A Z:            jongseong pieup */
    0x005b, /* 0x5B bracketleft:  left bracket */
    0x005c, /* 0x5C backslash:    backslash */
    0x005d, /* 0x5D bracketright: right bracket */
    0x005e, /* 0x5E asciicircum:  circumflex accent */
    0x005f, /* 0x5F underscore:   underscore */
    0x0060, /* 0x60 quoteleft:    grave accent */
    0x11bc, /* 0x61 a:            jongseong ieung */
    0x116e, /* 0x62 b:            jungseong u */
    0x1166, /* 0x63 c:            jungseong e */
    0x1175, /* 0x64 d:            jungseong i */
    0x1167, /* 0x65 e:            jungseong yeo */
    0x1161, /* 0x66 f:            jungseong a */
    0x1173, /* 0x67 g:            jungseong eu */
    0x1102, /* 0x68 h:            choseong nieun */
    0x1106, /* 0x69 i:            choseong mieum */
    0x110b, /* 0x6A j:            choseong ieung */
    0x1100, /* 0x6B k:            choseong gieug */
    0x110c, /* 0x6C l:            choseong jieuj */
    0x1112, /* 0x6D m:            choseong hieuh */
    0x1109, /* 0x6E n:            choseong sieus */
    0x110e, /* 0x6F o:            choseong chieuch */
    0x1111, /* 0x70 p:            choseong phieuph */
    0x11ba, /* 0x71 q:            jongseong sieus */
    0x1162, /* 0x72 r:            jungseong ae */
    0x11ab, /* 0x73 s:            jongseong nieun */
    0x1165, /* 0x74 t:            jungseong eo */
    0x1103, /* 0x75 u:            choseong dieud */
    0x1169, /* 0x76 v:            jungseong o */
    0x11af, /* 0x77 w:            jongseong rieul */
    0x11a8, /* 0x78 x:            jongseong gieug */
    0x1105, /* 0x79 y:            choseong rieul */
    0x11b7, /* 0x7A z:            jongseong mieum */
    0x007b, /* 0x7B braceleft:    left brace */
    0x007c, /* 0x7C bar:          vertical line(bar) */
    0x007d, /* 0x7D braceright:   right brace */
    0x007e /* 0x7E asciitilde:   tilde */
  ];

  var K3_3moa_ahn = [
    0x0021,     /* 0x21 exclam:       exclamation mark               */
    0x0022,     /* 0x22 quotedbl:     quotation mark                 */
    0x0023,     /* 0x23 numbersign:   number sign                    */
    0x0024,     /* 0x24 dollar:       dollar sign                    */
    0x0025,     /* 0x25 percent:      percent sign                   */
    0x0026,     /* 0x26 ampersand:    ampersand                      */
    0x002e,     /* 0x27 apostrophe:   period                         */
    0x0028,     /* 0x28 parenleft:    left parenthesis               */
    0x0029,     /* 0x29 parenright:   right parenthesis              */
    0x002a,     /* 0x2A asterisk:     asterisk                       */
    0x002b,     /* 0x2B plus:         plus sign                      */
    0x11b7,     /* 0x2C comma:        jongseong mieum                */
    0x002d,     /* 0x2D minus:        minus sign                     */
    0x11af,     /* 0x2E period:       jongseong lieul                */
    0x11c2,     /* 0x2F slash:        jongseong hieuh                */
    0x0030,     /* 0x30 0:            0                              */
    0x0031,     /* 0x31 1:            1                              */
    0x0032,     /* 0x32 2:            2                              */
    0x0033,     /* 0x33 3:            3                              */
    0x0034,     /* 0x34 4:            4                              */
    0x0035,     /* 0x35 5:            5                              */
    0x0036,     /* 0x36 6:            6                              */
    0x0037,     /* 0x37 7:            7                              */
    0x0038,     /* 0x38 8:            8                              */
    0x0039,     /* 0x39 9:            9                              */
    0x003a,     /* 0x3A colon:        colon                          */
    0x116e,     /* 0x3B semicolon:    jungseong u                    */
    0x003c,     /* 0x3C less:         less-than sign                 */
    0x003d,     /* 0x3D equal:        equals sign                    */
    0x003e,     /* 0x3E greater:      greater-than sign              */
    0x11f9,     /* 0x3F question:     jongseong yeorinhieuh          */
    0x0040,     /* 0x40 at:           commercial at                  */
    0x1107,     /* 0x41 A:            choseong pieup                 */
    0x11f0,     /* 0x42 B:            jongseong yesieung             */
    0x11b8,     /* 0x43 C:            jongseong pieup                */
    0x1103,     /* 0x44 D:            choseong tikeut                */
    0x1102,     /* 0x45 E:            choseong nieun                 */
    0x1100,     /* 0x46 F:            choseong kiyeok                */
    0x114c,     /* 0x47 G:            choseong yesieung              */
    0x1165,     /* 0x48 H:            jungseong eo                   */
    0x002f,     /* 0x49 I:            slash                          */
    0x119e,     /* 0x4A J:            jungseong araea                */
    0x1175,     /* 0x4B K:            jungseong i                    */
    0x1169,     /* 0x4C L:            jungseong o                    */
    0x11ab,     /* 0x4D M:            jongseong nienu                */
    0x11eb,     /* 0x4E N:            jongseung pansios              */
    0x005b,     /* 0x4F O:            left bracket                   */
    0x005d,     /* 0x50 P:            right bracket                  */
    0x1106,     /* 0x51 Q:            choseong mieum                 */
    0x1105,     /* 0x52 R:            choseong lieul                 */
    0x110c,     /* 0x53 S:            choseong cieuc                 */
    0x1159,     /* 0x54 T:            choseong yeorinhieuh           */
    0x0027,     /* 0x55 U:            apostrophe                     */
    0x11a8,     /* 0x56 V:            jongseong kiyeok               */
    0x1140,     /* 0x57 W:            choseong pansios               */
    0x11ae,     /* 0x58 X:            jongseong tikeut               */
    0x003b,     /* 0x59 Y:            semicolon                      */
    0x11bd,     /* 0x5A Z:            jongseong cieuc                */
    0x002c,     /* 0x5B bracketleft:  comma                          */
    0x005c,     /* 0x5C backslash:    backslash                      */
    0x003f,     /* 0x5D bracketright: qustion mark                   */
    0x005e,     /* 0x5E asciicircum:  circumflex accent              */
    0x005f,     /* 0x5F underscore:   underscore                     */
    0x0060,     /* 0x60 quoteleft:    grave accent                   */
    0x1107,     /* 0x61 a:            choseong  pieup                */
    0x11bc,     /* 0x62 b:            jongseong ieung                */
    0x11b8,     /* 0x63 c:            jongseong pieup                */
    0x1103,     /* 0x64 d:            choseong  tikeut               */
    0x1102,     /* 0x65 e:            choseong nieun                 */
    0x1100,     /* 0x66 f:            choseong kiyeok                */
    0x110b,     /* 0x67 g:            choseong ieung                 */
    0x1165,     /* 0x68 h:            jungseong eo                   */
    0x1173,     /* 0x69 i:            jungseong eu                   */
    0x1161,     /* 0x6A j:            jungseong a                    */
    0x1175,     /* 0x6B k:            jungseong i                    */
    0x1169,     /* 0x6C l:            jungseong o                    */
    0x11ab,     /* 0x6D m:            jongseong nieun                */
    0x11ba,     /* 0x6E n:            jongseong sios                 */
    0x116d,     /* 0x6F o:            jungseong yo                   */
    0x1172,     /* 0x70 p:            jungseong yu                   */
    0x1106,     /* 0x71 q:            choseong mieum                 */
    0x1105,     /* 0x72 r:            choseong lieul                 */
    0x110c,     /* 0x73 s:            choseong cieuc                 */
    0x1112,     /* 0x74 t:            choseong hieuh                 */
    0x1163,     /* 0x75 u:            jungseong ya                   */
    0x11a8,     /* 0x76 v:            jongseong kiyok                */
    0x1109,     /* 0x77 w:            choseong sios                  */
    0x11ae,     /* 0x78 x:            jongseong tikeut               */
    0x1167,     /* 0x79 y:            jungseong yeo                  */
    0x11bd,     /* 0x7A z:            jongseong cieuc                */
    0x007b,     /* 0x7B braceleft:    left brace                     */
    0x007c,     /* 0x7C bar:          vertical bar                   */
    0x007d,     /* 0x7D braceright:   right brace                    */
    0x007e,     /* 0x7E asciitilde:   tilde                          */
  ];

  var K3_3moa_semoe_2014 = [
    0x0021,     /* 0x21 exclam:         exclamation mark             */
    0x0022,     /* 0x22 quotedbl:       quotatioin mark              */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x1169,     /* 0x27 apostrophe:     jungseong o                  */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x002d,     /* 0x2D minus:          minus sign                   */
    0x002e,     /* 0x2E period:         period                       */
    0x002f,     /* 0x2F slash:          slash                        */
    0x0030,     /* 0x30 0:              0                            */
    0x11b9,     /* 0x31 1:              jongseong pieup-sios         */
    0x11ae,     /* 0x32 2:              jongseong tikeut             */
    0x11b8,     /* 0x33 3:              jongseong pieup              */
    0x116d,     /* 0x34 4:              jungseong yo                 */
    0x1163,     /* 0x35 5:              jungseong ya                 */
    0x119e,     /* 0x36 6:              jungseong araea              */
    0x11a2,     /* 0x37 7:              jungseong ssangaraea         */
    0x0038,     /* 0x38 8:              8                            */
    0x0039,     /* 0x39 9:              9                            */
    0x0034,     /* 0x3A colon:          4                            */
    0x11bb,     /* 0x3B semicolon:      jongseong ssangsios          */
    0x003c,     /* 0x3C less:           less-than sign               */
    0x003d,     /* 0x3D equal:          euals sign                   */
    0x003e,     /* 0x3E greater:        greater-than sign            */
    0x003f,     /* 0x3F question:       question mark                */
    0x0040,     /* 0x40 at:             commertial at                */
    0x2606,     /* 0x41 A:              ☆ white star                */
    0x003b,     /* 0x42 B:              semicolon                    */
    0x300c,     /* 0x43 C:              「 left corner bracket       */
    0x25B2,     /* 0x44 D:              ▲ black up-pointing triangle */
    0x2192,     /* 0x45 E:              → rightwards arrow          */
    0x00b7,     /* 0x46 F:              middle dot                   */
    0x003a,     /* 0x47 G:              colon                        */
    0x0030,     /* 0x48 H:              0                            */
    0x0037,     /* 0x49 I:              7                            */
    0x0031,     /* 0x4A J:              1                            */
    0x0032,     /* 0x4B K:              2                            */
    0x0033,     /* 0x4C L:              3                            */
    0x0022,     /* 0x4D M:              quotatioin mark              */
    0x0027,     /* 0x4E N:              apostrophe                   */
    0x0038,     /* 0x4F O:              8                            */
    0x0039,     /* 0x50 P:              9                            */
    0x2661,     /* 0x51 Q:              ♡ white heart suit          */
    0x2194,     /* 0x52 R:              ↔ left right arrow          */
    0x25bd,     /* 0x53 S:              ▽ white down-pointing triangle */
    0x203b,     /* 0x54 T:              ※ reference mark            */
    0x0036,     /* 0x55 U:              6                            */
    0x300d,     /* 0x56 V:              」 right corner bracket      */
    0x2190,     /* 0x57 W:              ← leftwards arrow           */
    0x25ce,     /* 0x58 X:              ◎ bullseye                  */
    0x0035,     /* 0x59 Y:              5                            */
    0x25a1,     /* 0x5A Z:              □ white square              */
    0x005b,     /* 0x5B bracketleft:    left bracket                 */
    0x005c,     /* 0x5C backslash:      backslash                    */
    0x005d,     /* 0x5D bracketright:   right bracket                */
    0x005e,     /* 0x5E asciicircum:    circumflex accent            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x0060,     /* 0x60 quoteleft:      grave accent                 */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x1166,     /* 0x62 b:              jungseong e                  */
    0x116e,     /* 0x63 c:              jungseong u                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x11af,     /* 0x65 e:              jongseong lieul              */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1102,     /* 0x68 h:              choseong  nieun              */
    0x1106,     /* 0x69 i:              choseong  mieum              */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1112,     /* 0x6D m:              choseong  hieuh              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x1107,     /* 0x6F o:              choseong  pieup              */
    0x116e,     /* 0x70 p:              jungseong u                  */
    0x11c2,     /* 0x71 q:              jongseong hieuh              */
    0x1165,     /* 0x72 r:              jungseong eo                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1167,     /* 0x74 t:              jungseong yeo                */
    0x1103,     /* 0x75 u:              choseong  tikeut             */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11ba,     /* 0x77 w:              jongseong sios               */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1105,     /* 0x79 y:              choseong  lieul              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x007e,     /* 0x7E asciitilde:     tilde                        */
  ];

  var K3_3moa_semoe_2015 = [
    0x0021,     /* 0x21 exclam:         exclamation mark             */
    0x0022,     /* 0x22 quotedbl:       quotatioin mark              */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x005b,     /* 0x27 apostrophe:     left bracket                 */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x002d,     /* 0x2D minus:          minus sign                   */
    0x002e,     /* 0x2E period:         period                       */
    0x002f,     /* 0x2F slash:          slash                        */
    0x0030,     /* 0x30 0:              0                            */
    0x0031,     /* 0x31 1:              1                     */
    0x0032,     /* 0x32 2:              2                     */
    0x0033,     /* 0x33 3:              3                     */
    0x0034,     /* 0x34 4:              4                     */
    0x0035,     /* 0x35 5:              5                     */
    0x0036,     /* 0x36 6:              6                     */
    0x0037,     /* 0x37 7:              7                     */
    0x0038,     /* 0x38 8:              8                            */
    0x0039,     /* 0x39 9:              9                            */
    0x003a,     /* 0x3A colon:          colon                        */
    0x11bb,     /* 0x3B semicolon:      jongseong ssangsios          */
    0x003c,     /* 0x3C less:           less-than sign               */
    0x003d,     /* 0x3D equal:          euals sign                   */
    0x003e,     /* 0x3E greater:        greater-than sign            */
    0x003f,     /* 0x3F question:       question mark                */
    0x0040,     /* 0x40 at:             commertial at                */
    0x2190,     /* 0x41 A:              ← leftwards arrow            */
    0x00B0, 	/* 0x42 B:              °                            */
    0x300c,     /* 0x43 C:              「 left corner bracket       */
    0x2192,     /* 0x44 D:              → rightwards arrow           */
    0x2661,     /* 0x45 E:              ♡ white heart suit          */
    0x25CB,     /* 0x46 F:              ○                            */
    0x00D7,     /* 0x47 G:              ×                            */
    0x00B7, 	/* 0x48 H: 				·                           */
    0x2015,     /* 0x49 I:              ―                           */
    0x0000, 	/* 0x4A J:                                          */
    0x0027,     /* 0x4B K:              apostrophe                  */
    0x003B,     /* 0x4C L:              colon                       */
    0x300F,     /* 0x4D M:              』                          */
    0x300E,     /* 0x4E N:              『                          */
    0x25B3,     /* 0x4F O:              △ white up-pointing triangle */
    0x25bd,     /* 0x50 P:              ▽ white down-pointing triangle */
    0x2194,     /* 0x51 Q:              ↔ left right arrow           */
    0x2606,     /* 0x52 R:              ☆ white star                */
    0x2193,     /* 0x53 S:              ↓                            */
    0x203b,     /* 0x54 T:              ※ reference mark            */
    0x3009, 	/* 0x55 U:              〉                           */
    0x300d,     /* 0x56 V:              」 right corner bracket      */
    0x2191,     /* 0x57 W:              ↑                            */
    0x25ce,     /* 0x58 X:              ◎ bullseye                  */
    0x3008, 	/* 0x59 Y:             〈                           */
    0x25a1,     /* 0x5A Z:              □ white square              */
    0x1169,     /* 0x5B bracketleft:    jungseong o                 */
    0x005c,     /* 0x5C backslash:      backslash                    */
    0x005d,     /* 0x5D bracketright:   right bracket                */
    0x005e,     /* 0x5E asciicircum:    circumflex accent            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x0060,     /* 0x60 quoteleft:      grave accent                 */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x11af,     /* 0x65 e:              jongseong lieul              */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1112,     /* 0x68 h:              choseong  hieuh              */
    0x1103,     /* 0x69 i:              choseong  tikeut             */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1105,     /* 0x6D m:              choseong  lieul              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x1107,     /* 0x6F o:              choseong  pieup              */
    0x116e,     /* 0x70 p:              jungseong u                  */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1165,     /* 0x72 r:              jungseong eo                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1167,     /* 0x74 t:              jungseong yeo                */
    0x1102,     /* 0x75 u:              choseong  nieun              */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11b8,     /* 0x77 w:              jongseong pieup              */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1106,     /* 0x79 y:              choseong  mieum              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x007e,     /* 0x7E asciitilde:     tilde                        */
  ];

  var K3_3moa_semoe_2016 = [
    0x0021,     /* 0x21 exclam:         exclamation mark             */
    0x0022,     /* 0x22 quotedbl:       quotatioin mark              */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x005b,     /* 0x27 apostrophe:     left bracket                 */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002c,     /* 0x2C comma:          comma                        */
    0x002d,     /* 0x2D minus:          minus sign                   */
    0x002e,     /* 0x2E period:         period                       */
    0x002f,     /* 0x2F slash:          slash                        */
    0x0030,     /* 0x30 0:              0                            */
    0x0031,     /* 0x31 1:              1                     */
    0x0032,     /* 0x32 2:              2                     */
    0x0033,     /* 0x33 3:              3                     */
    0x0034,     /* 0x34 4:              4                     */
    0x0035,     /* 0x35 5:              5                     */
    0x0036,     /* 0x36 6:              6                     */
    0x0037,     /* 0x37 7:              7                     */
    0x0038,     /* 0x38 8:              8                            */
    0x0039,     /* 0x39 9:              9                            */
    0x003a,     /* 0x3A colon:          colon                        */
    0x11bb,     /* 0x3B semicolon:      jongseong ssangsios          */
    0x003c,     /* 0x3C less:           less-than sign               */
    0x003d,     /* 0x3D equal:          euals sign                   */
    0x003e,     /* 0x3E greater:        greater-than sign            */
    0x003f,     /* 0x3F question:       question mark                */
    0x0040,     /* 0x40 at:             commertial at                */
    0x2190,     /* 0x41 A:              ← leftwards arrow            */
    0x00B0,   /* 0x42 B:              °                            */
    0x300c,     /* 0x43 C:              「 left corner bracket       */
    0x2192,     /* 0x44 D:              → rightwards arrow           */
    0x2661,     /* 0x45 E:              ♡ white heart suit          */
    0x25CB,     /* 0x46 F:              ○                            */
    0x00D7,     /* 0x47 G:              ×                            */
    0x00B7,   /* 0x48 H:         ·                           */
    0x2015,     /* 0x49 I:              ―                           */
    0x110b,   /* 0x4A J:     [##$$ 기호 $$##]                 */
    0x0027,     /* 0x4B K:              apostrophe                  */
    0x003B,     /* 0x4C L:              colon                       */
    0x300F,     /* 0x4D M:              』                          */
    0x300E,     /* 0x4E N:              『                          */
    0x25B3,     /* 0x4F O:              △ white up-pointing triangle */
    0x25bd,     /* 0x50 P:              ▽ white down-pointing triangle */
    0x2194,     /* 0x51 Q:              ↔ left right arrow           */
    0x2606,     /* 0x52 R:              ☆ white star                */
    0x2193,     /* 0x53 S:              ↓                            */
    0x203b,     /* 0x54 T:              ※ reference mark            */
    0x3009,   /* 0x55 U:              〉                           */
    0x300d,     /* 0x56 V:              」 right corner bracket      */
    0x2191,     /* 0x57 W:              ↑                            */
    0x25ce,     /* 0x58 X:              ◎ bullseye                  */
    0x3008,   /* 0x59 Y:             〈                           */
    0x25a1,     /* 0x5A Z:              □ white square              */
    0x1169,     /* 0x5B bracketleft:    jungseong o                 */
    0x005c,     /* 0x5C backslash:      backslash                    */
    0x005d,     /* 0x5D bracketright:   right bracket                */
    0x005e,     /* 0x5E asciicircum:    circumflex accent            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x0060,     /* 0x60 quoteleft:      grave accent                 */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x11af,     /* 0x65 e:              jongseong lieul              */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1112,     /* 0x68 h:              choseong  hieuh              */
    0x1103,     /* 0x69 i:              choseong  tikeut             */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1105,     /* 0x6D m:              choseong  lieul              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x1107,     /* 0x6F o:              choseong  pieup              */
    0x116e,     /* 0x70 p:              jungseong u                  */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1165,     /* 0x72 r:              jungseong eo                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1167,     /* 0x74 t:              jungseong yeo                */
    0x1102,     /* 0x75 u:              choseong  nieun              */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11b8,     /* 0x77 w:              jongseong pieup              */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1106,     /* 0x79 y:              choseong  mieum              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x007e,     /* 0x7E asciitilde:     tilde                        */
  ];
  
  var K3_3moa_semoe_2017 = [
    0x0021,     /* 0x21 exclam:         exclamation mark             */
    0x0022,     /* 0x22 quotedbl:       quotatioin mark              */
    0x0023,     /* 0x23 numbersign:     number sign                  */
    0x0024,     /* 0x24 dollar:         dollar sign                  */
    0x0025,     /* 0x25 percent:        percent sign                 */
    0x0026,     /* 0x26 ampersand:      ampersand                    */
    0x002c,     /* 0x27 apostrophe:     comma                        */
    0x0028,     /* 0x28 parenleft:      left parenthesis             */
    0x0029,     /* 0x29 parenright:     right parenthesis            */
    0x002a,     /* 0x2A asterisk:       asterisk                     */
    0x002b,     /* 0x2B plus:           plus sign                    */
    0x002e,     /* 0x2C comma:          period                       */
    0x002d,     /* 0x2D minus:          minus sign                   */
    0x1169,     /* 0x2E period:         jungseong o                  */
    0x002f,     /* 0x2F slash:          slash                        */
    0x0030,     /* 0x30 0:              0                            */
    0x0031,     /* 0x31 1:              1                     */
    0x0032,     /* 0x32 2:              2                     */
    0x0033,     /* 0x33 3:              3                     */
    0x0034,     /* 0x34 4:              4                     */
    0x0035,     /* 0x35 5:              5                     */
    0x0036,     /* 0x36 6:              6                     */
    0x0037,     /* 0x37 7:              7                     */
    0x0038,     /* 0x38 8:              8                            */
    0x0039,     /* 0x39 9:              9                            */
    0x003a,     /* 0x3A colon:          colon                        */
    0x11bb,     /* 0x3B semicolon:      jongseong ssangsios          */
    0x003c,     /* 0x3C less:           less-than sign               */
    0x003d,     /* 0x3D equal:          euals sign                   */
    0x003e,     /* 0x3E greater:        greater-than sign            */
    0x003f,     /* 0x3F question:       question mark                */
    0x0040,     /* 0x40 at:             commertial at                */
    0x2190,     /* 0x41 A:              ← leftwards arrow            */
    0x00B0,   /* 0x42 B:              °                            */
    0x300c,     /* 0x43 C:              「 left corner bracket       */
    0x2192,     /* 0x44 D:              → rightwards arrow           */
    0x2661,     /* 0x45 E:              ♡ white heart suit          */
    0x25CB,     /* 0x46 F:              ○                            */
    0x00D7,     /* 0x47 G:              ×                            */
    0x00B7,   /* 0x48 H:         ·                           */
    0x2015,     /* 0x49 I:              ―                           */
    0x110b,   /* 0x4A J:     [##$$ 기호 $$##]                 */
    0x0027,     /* 0x4B K:              apostrophe                  */
    0x003B,     /* 0x4C L:              colon                       */
    0x300F,     /* 0x4D M:              』                          */
    0x300E,     /* 0x4E N:              『                          */
    0x25B3,     /* 0x4F O:              △ white up-pointing triangle */
    0x25bd,     /* 0x50 P:              ▽ white down-pointing triangle */
    0x2194,     /* 0x51 Q:              ↔ left right arrow           */
    0x2606,     /* 0x52 R:              ☆ white star                */
    0x2193,     /* 0x53 S:              ↓                            */
    0x203b,     /* 0x54 T:              ※ reference mark            */
    0x3009,   /* 0x55 U:              〉                           */
    0x300d,     /* 0x56 V:              」 right corner bracket      */
    0x2191,     /* 0x57 W:              ↑                            */
    0x25ce,     /* 0x58 X:              ◎ bullseye                  */
    0x3008,   /* 0x59 Y:             〈                           */
    0x25a1,     /* 0x5A Z:              □ white square              */
    0x005b,     /* 0x5B bracketleft:    left bracket                 */
    0x005c,     /* 0x5C backslash:      backslash                    */
    0x005d,     /* 0x5D bracketright:   right bracket                */
    0x005e,     /* 0x5E asciicircum:    circumflex accent            */
    0x005f,     /* 0x5F underscore:     underscore                   */
    0x0060,     /* 0x60 quoteleft:      grave accent                 */
    0x11bc,     /* 0x61 a:              jongseong ieung              */
    0x116e,     /* 0x62 b:              jungseong u                  */
    0x1166,     /* 0x63 c:              jungseong e                  */
    0x1175,     /* 0x64 d:              jungseong i                  */
    0x11af,     /* 0x65 e:              jongseong lieul              */
    0x1161,     /* 0x66 f:              jungseong a                  */
    0x1173,     /* 0x67 g:              jungseong eu                 */
    0x1112,     /* 0x68 h:              choseong  hieuh              */
    0x1103,     /* 0x69 i:              choseong  tikeut             */
    0x110b,     /* 0x6A j:              choseong  ieung              */
    0x1100,     /* 0x6B k:              choseong  kiyeok             */
    0x110c,     /* 0x6C l:              choseong  cieuc              */
    0x1105,     /* 0x6D m:              choseong  lieul              */
    0x1109,     /* 0x6E n:              choseong  sios               */
    0x1107,     /* 0x6F o:              choseong  pieup              */
    0x116e,     /* 0x70 p:              jungseong u                  */
    0x11ba,     /* 0x71 q:              jongseong sios               */
    0x1165,     /* 0x72 r:              jungseong eo                 */
    0x11ab,     /* 0x73 s:              jongseong nieun              */
    0x1167,     /* 0x74 t:              jungseong yeo                */
    0x1102,     /* 0x75 u:              choseong  nieun              */
    0x1169,     /* 0x76 v:              jungseong o                  */
    0x11b8,     /* 0x77 w:              jongseong pieup              */
    0x11a8,     /* 0x78 x:              jongseong kiyeok             */
    0x1106,     /* 0x79 y:              choseong  mieum              */
    0x11b7,     /* 0x7A z:              jongseong mieum              */
    0x007b,     /* 0x7B braceleft:      left brace                   */
    0x007c,     /* 0x7C bar:            vertical line(bar)           */
    0x007d,     /* 0x7D braceright:     right brace                  */
    0x007e,     /* 0x7E asciitilde:     tilde                        */
  ];  
  var K3_3shin_1995 = [
    0x0021,    /* ! *///    0x21    :    exclam    ->    {exclamation mark}
    0x0022,    /* " *///    0x22    :    quotedbl    ->    {quotation mark}
    0x0023,    /* # *///    0x23    :    numbersign    ->    {number sign}
    0x0024,    /* $ *///    0x24    :    dollar    ->    {dollar sign}
    0x0025,    /* % *///    0x25    :    percent    ->    {percent sign}
    0x0026,    /* & *///    0x26    :    ampersand    ->    {ampersand}
    0x1110,    /* ' *///    0x27    :    apostrophe    ->    {Choseong thieuth}
    0x0028,    /* ( *///    0x28    :    parenleft    ->    {left parenthesis}
    0x0029,    /* ) *///    0x29    :    parenright    ->    {right parenthesis}
    0x002A,    /* * *///    0x2A    :    asterisk    ->    {asterisk}
    0x002B,    /* + *///    0x2B    :    plus    ->    {plus sign}
    0x002C,    /* , *///    0x2C    :    comma    ->    {comma}
    0x002D,    /* - *///    0x2D    :    minus    ->    {minus sign}
    0x002E,    /* . *///    0x2E    :    period    ->    {period}
    0x110f,    /* / *///    0x2F    :    slash    ->    {choseong khieukh}
    0x0030,    /* 0 *///    0x30    :    0    ->    {0}
    0x0031,    /* 1 *///    0x31    :    1    ->    {1}
    0x0032,    /* 2 *///    0x32    :    2    ->    {2}
    0x0033,    /* 3 *///    0x33    :    3    ->    {3}
    0x0034,    /* 4 *///    0x34    :    4    ->    {4}
    0x0035,    /* 5 *///    0x35    :    5    ->    {5}
    0x0036,    /* 6 *///    0x36    :    6    ->    {6}
    0x0037,    /* 7 *///    0x37    :    7    ->    {7}
    0x0038,    /* 8 *///    0x38    :    8    ->    {8}
    0x0039,    /* 9 *///    0x39    :    9    ->    {9}
    0x003A,    /* : *///    0x3A    :    colon    ->    {colon}
    0x1107,    /* ; *///    0x3B    :    semicolon    ->    {Choseong pieup}
    0x003c,    /* < *///    0x3C    :    less    ->    {less-than sign}
    0x003d,    /* = *///    0x3D    :    equal    ->    {equals sign}
    0x003e,    /* > *///    0x3E    :    greater    ->    {greater-than sign}
    0x003f,    /* ? *///    0x3F    :    question    ->    {question mark}
    0x0040,    /* @ *///    0x40    :    at    ->    {commercial at}
    0x1164,    /* A *///    0x41    :    A    ->    {jungseong yae}
    0x116e,    /* B *///    0x42    :    B    ->    {jungseong u}
    0x1166,    /* C *///    0x43    :    C    ->    {jungseong e}
    0x1175,    /* D *///    0x44    :    D    ->    {jungseong I}
    0x1167,    /* E *///    0x45    :    E    ->    {jungseong yeo}
    0x1161,    /* F *///    0x46    :    F    ->    {jungseong a}
    0x1173,    /* G *///    0x47    :    G    ->    {jungseong eu}
    0x2026,    /* H *///    0x48    :    H    ->    {…}
    0x116e,    /* I *///    0x49    :    I    ->    {jungseong u}
    0x003b,    /* J *///    0x4A    :    J    ->    {semicolon}
    0x0027,    /* K *///    0x4B    :    K    ->    {quota}
    0x00B7,    /* L *///    0x4C    :    L    ->    {middle dot   ·}
    0x002F,    /* M *///    0x4D    :    M    ->    {slash}
    0x02D0,    /* N *///    0x4E    :    N    ->    {ː}
    0x116e,    /* O *///    0x4F    :    O    ->    {jungseong u}
    0x1169,    /* P *///    0x50    :    P    ->    {jungseong o}
    0x1174,    /* Q *///    0x51    :    Q    ->    {jungseong yeu}
    0x1162,    /* R *///    0x52    :    R    ->    {jungseong yeo}
    0x1168,    /* S *///    0x53    :    S    ->    {jungseong ye}
    0x1165,    /* T *///    0x54    :    T    ->    {jungseong eo}
    0x00D7,    /* U *///    0x55    :    U    ->    {×}
    0x1169,    /* V *///    0x56    :    V    ->    {jungseong o}
    0x1163,    /* W *///    0x57    :    W    ->    {jungseong ya}
    0x116d,    /* X *///    0x58    :    X    ->    {jungseong yo}
    0x00F7,    /* Y *///    0x59    :    Y    ->    {÷}
    0x1172,    /* Z *///    0x5A    :    Z    ->    {jungseong yu}
    0x005b,    /* [ *///    0x5B    :    bracketleft    ->    {left bracket}
    0x005c,    /* \ *///    0x5C    :    backslash    ->    {backslash}
    0x005d,    /* ] *///    0x5D    :    bracketright    ->    {right bracket}
    0x005e,    /* ^ *///    0x5E    :    asciicircum    ->    {circumflex accent}
    0x005f,    /* _ *///    0x5F    :    underscore    ->    {underscore}
    0x0060,    /* ` *///    0x60    :    quoteleft    ->    {grave accent}
    0x11bc,    /* a *///    0x61    :    a    ->    {Jongseong ieung}
    0x11bb,    /* b *///    0x62    :    b    ->    {Jongseong ssangsios}
    0x11be,    /* c *///    0x63    :    c    ->    {Jongseong chieuch}
    0x11c2,    /* d *///    0x64    :    d    ->    {Jongseong hieuh}
    0x11b8,    /* e *///    0x65    :    e    ->    {Jongseong pieup}
    0x11bd,    /* f *///    0x66    :    f    ->    {Jongseong cieuc}
    0x11c1,    /* g *///    0x67    :    g    ->    {Jongseong phieuph}
    0x1102,    /* h *///    0x68    :    h    ->    {Choseong nieun}
    0x1106,    /* i *///    0x69    :    i    ->    {Choseong mieum}
    0x110b,    /* j *///    0x6A    :    j    ->    {Choseong ieung}
    0x1100,    /* k *///    0x6B    :    k    ->    {Choseong kiyeok}
    0x110c,    /* l *///    0x6C    :    l    ->    {Choseong cieuc}
    0x1112,    /* m *///    0x6D    :    m    ->    {Choseong hieuh}
    0x1109,    /* n *///    0x6E    :    n    ->    {Choseong sios}
    0x110e,    /* o *///    0x6F    :    o    ->    {Choseong chieuch}
    0x1111,    /* p *///    0x70    :    p    ->    {Choseong phieuph}
    0x11ba,    /* q *///    0x71    :    q    ->    {Jongseong sios}
    0x11ae,    /* r *///    0x72    :    r    ->    {Jongseong tikeut}
    0x11ab,    /* s *///    0x73    :    s    ->    {Jongseong nieun}
    0x11c0,    /* t *///    0x74    :    t    ->    {Jongseong thikeuth}
    0x1103,    /* u *///    0x75    :    u    ->    {Choseong tikeut}
    0x11bf,    /* v *///    0x76    :    v    ->    {Jongseong khiyeok}
    0x11af,    /* w *///    0x77    :    w    ->    {Jongseong rieul}
    0x11a8,    /* x *///    0x78    :    x    ->    {Jongseong kiyeok}
    0x1105,    /* y *///    0x79    :    y    ->    {Choseong rieul}
    0x11b7,    /* z *///    0x7A    :    z    ->    {Jongseong mieum}
    0x007b,    /* { *///    0x7B    :    braceleft    ->    {left brace}
    0x007c,    /* | *///    0x7C    :    bar    ->    {vertical bar}
    0x007d,    /* } *///    0x7D    :    braceright    ->    {right brace}
    0x007e,    /* ~ *///    0x7E    :    asciitilde    ->    {tilde}
    0x0000    /*   *///    0x7F    :    delete    ->    {    }
  ];

  var K3_3shin_b = [
    0x203B,    /* ! *///    0x21    :    exclam    ->    {reference mark}
    0x00B7,    /* " *///    0x22    :    quotedbl    ->    {middle dot}
    0x0023,    /* # *///    0x23    :    numbersign    ->    {number sign}
    0x0024,    /* $ *///    0x24    :    dollar    ->    {dollar sign}
    0x0025,    /* % *///    0x25    :    percent    ->    {percent sign}
    0x0026,    /* & *///    0x26    :    ampersand    ->    {ampersand}
    0x1110,    /* ' *///    0x27    :    apostrophe    ->    {Choseong thieuth}
    0x0028,    /* ( *///    0x28    :    parenleft    ->    {left parenthesis}
    0x0029,    /* ) *///    0x29    :    parenright    ->    {right parenthesis}
    0x002A,    /* * *///    0x2A    :    asterisk    ->    {asterisk}
    0x002B,    /* + *///    0x2B    :    plus    ->    {plus sign}
    0x002C,    /* , *///    0x2C    :    comma    ->    {comma}
    0x002D,    /* - *///    0x2D    :    minus    ->    {minus sign}
    0x002E,    /* . *///    0x2E    :    period    ->    {period}
    0x110F,    /* / *///    0x2F    :    slash    ->    {choseong khieukh}
    0x0030,    /* 0 *///    0x30    :    0    ->    {0}
    0x0031,    /* 1 *///    0x31    :    1    ->    {1}
    0x0032,    /* 2 *///    0x32    :    2    ->    {2}
    0x0033,    /* 3 *///    0x33    :    3    ->    {3}
    0x0034,    /* 4 *///    0x34    :    4    ->    {4}
    0x0035,    /* 5 *///    0x35    :    5    ->    {5}
    0x0036,    /* 6 *///    0x36    :    6    ->    {6}
    0x0037,    /* 7 *///    0x37    :    7    ->    {7}
    0x0038,    /* 8 *///    0x38    :    8    ->    {8}
    0x0039,    /* 9 *///    0x39    :    9    ->    {9}
    0x003A,    /* : *///    0x3A    :    colon    ->    {colon}
    0x1107,    /* ; *///    0x3B    :    semicolon    ->    {Choseong pieup}
    0x003C,    /* < *///    0x3C    :    less    ->    {less-than sign}
    0x003D,    /* = *///    0x3D    :    equal    ->    {equals sign}
    0x003E,    /* > *///    0x3E    :    greater    ->    {greater-than sign}
    0x0021,    /* ? *///    0x3F    :    question    ->    {exclamation mark}
    0x0040,    /* @ *///    0x40    :    at    ->    {commercial at}
    0x1172,    /* A *///    0x41    :    A    ->    {jungseong yu}
    0x116E,    /* B *///    0x42    :    B    ->    {jungseong u}
    0x1166,    /* C *///    0x43    :    C    ->    {jungseong e}
    0x1175,    /* D *///    0x44    :    D    ->    {jungseong i}
    0x1167,    /* E *///    0x45    :    E    ->    {jungseong yeo}
    0x1161,    /* F *///    0x46    :    F    ->    {jungseong a}
    0x1173,    /* G *///    0x47    :    G    ->    {jungseong eu}
    0x0000,    /* H *///    0x48    :    H    ->    {}
    0x1174,    /* I *///    0x49    :    I    ->    {jungseong yeu}
    0x0022,    /* J *///    0x4A    :    J    ->    {quotatioin mark}
    0x003B,    /* K *///    0x4B    :    K    ->    {semicolon}
    0x0027,    /* L *///    0x4C    :    L    ->    {quota}
    0x002F,    /* M *///    0x4D    :    M    ->    {slash}
    0x0000,    /* N *///    0x4E    :    N    ->    {}
    0x116E,    /* O *///    0x4F    :    O    ->    {jungseong u}
    0x1169,    /* P *///    0x50    :    P    ->    {jungseong o}
    0x1164,    /* Q *///    0x51    :    Q    ->    {jungseong yae}
    0x1162,    /* R *///    0x52    :    R    ->    {jungseong yeo}
    0x1168,    /* S *///    0x53    :    S    ->    {jungseong ye}
    0x1165,    /* T *///    0x54    :    T    ->    {jungseong eo}
    0x0000,    /* U *///    0x55    :    U    ->    {}
    0x1169,    /* V *///    0x56    :    V    ->    {jungseong o}
    0x1163,    /* W *///    0x57    :    W    ->    {jungseong ya}
    0x116D,    /* X *///    0x58    :    X    ->    {jungseong yo}
    0x0000,    /* Y *///    0x59    :    Y    ->    {}
    0x003F,    /* Z *///    0x5A    :    Z    ->    {question mark}
    0x005B,    /* [ *///    0x5B    :    bracketleft    ->    {left bracket}
    0x005C,    /* \ *///    0x5C    :    backslash    ->    {backslash}
    0x005D,    /* ] *///    0x5D    :    bracketright    ->    {right bracket}
    0x005E,    /* ^ *///    0x5E    :    asciicircum    ->    {circumflex accent}
    0x005F,    /* _ *///    0x5F    :    underscore    ->    {underscore}
    0x0060,    /* ` *///    0x60    :    quoteleft    ->    {grave accent}
    0x11BC,    /* a *///    0x61    :    a    ->    {Jongseong ieung}
    0x11BF,    /* b *///    0x62    :    b    ->    {Jongseong khiyeok}
    0x11BE,    /* c *///    0x63    :    c    ->    {Jongseong chieuch}
    0x11AE,    /* d *///    0x64    :    d    ->    {Jongseong tikeut}
    0x11B8,    /* e *///    0x65    :    e    ->    {Jongseong pieup}
    0x11BB,    /* f *///    0x66    :    f    ->    {Jongseong ssangsios}
    0x11BD,    /* g *///    0x67    :    g    ->    {Jongseong cieuc}
    0x1102,    /* h *///    0x68    :    h    ->    {Choseong nieun}
    0x1106,    /* i *///    0x69    :    i    ->    {Choseong mieum}
    0x110B,    /* j *///    0x6A    :    j    ->    {Choseong ieung}
    0x1100,    /* k *///    0x6B    :    k    ->    {Choseong kiyeok}
    0x110C,    /* l *///    0x6C    :    l    ->    {Choseong cieuc}
    0x1112,    /* m *///    0x6D    :    m    ->    {Choseong hieuh}
    0x1109,    /* n *///    0x6E    :    n    ->    {Choseong sios}
    0x110E,    /* o *///    0x6F    :    o    ->    {Choseong chieuch}
    0x1111,    /* p *///    0x70    :    p    ->    {Choseong phieuph}
    0x11BA,    /* q *///    0x71    :    q    ->    {Jongseong sios}
    0x11C0,    /* r *///    0x72    :    r    ->    {Jongseong thikeuth}
    0x11AB,    /* s *///    0x73    :    s    ->    {Jongseong nieun}
    0x11C1,    /* t *///    0x74    :    t    ->    {Jongseong phieuph}
    0x1103,    /* u *///    0x75    :    u    ->    {Choseong tikeut}
    0x11C2,    /* v *///    0x76    :    v    ->    {Jongseong hieuh}
    0x11AF,    /* w *///    0x77    :    w    ->    {Jongseong rieul}
    0x11A8,    /* x *///    0x78    :    x    ->    {Jongseong kiyeok}
    0x1105,    /* y *///    0x79    :    y    ->    {Choseong rieul}
    0x11B7,    /* z *///    0x7A    :    z    ->    {Jongseong mieum}
    0x007B,    /* { *///    0x7B    :    braceleft    ->    {left brace}
    0x007C,    /* | *///    0x7C    :    bar    ->    {vertical bar}
    0x007D,    /* } *///    0x7D    :    braceright    ->    {right brace}
    0x007E    /* ~ *///    0x7E    :    asciitilde    ->    {tilde}
  ];

  var K3_3shin_2003 = [
    0x0021,    /* ! *///    0x21    :    exclam    ->    {exclamation mark}
    0x0022,    /* " *///    0x22    :    quotedbl    ->    {quotation mark}
    0x0023,    /* # *///    0x23    :    numbersign    ->    {number sign}
    0x0024,    /* $ *///    0x24    :    dollar    ->    {dollar sign}
    0x0025,    /* % *///    0x25    :    percent    ->    {percent sign}
    0x0026,    /* & *///    0x26    :    ampersand    ->    {ampersand}
    0x1110,    /* ' *///    0x27    :    apostrophe    ->    {Choseong thieuth}
    0x0028,    /* ( *///    0x28    :    parenleft    ->    {left parenthesis}
    0x0029,    /* ) *///    0x29    :    parenright    ->    {right parenthesis}
    0x002A,    /* * *///    0x2A    :    asterisk    ->    {asterisk}
    0x002B,    /* + *///    0x2B    :    plus    ->    {plus sign}
    0x002C,    /* , *///    0x2C    :    comma    ->    {comma}
    0x002D,    /* - *///    0x2D    :    minus    ->    {minus sign}
    0x002E,    /* . *///    0x2E    :    period    ->    {period}
    0x110f,    /* / *///    0x2F    :    slash    ->    {choseong khieukh}
    0x0030,    /* 0 *///    0x30    :    0    ->    {0}
    0x0031,    /* 1 *///    0x31    :    1    ->    {1}
    0x0032,    /* 2 *///    0x32    :    2    ->    {2}
    0x0033,    /* 3 *///    0x33    :    3    ->    {3}
    0x0034,    /* 4 *///    0x34    :    4    ->    {4}
    0x0035,    /* 5 *///    0x35    :    5    ->    {5}
    0x0036,    /* 6 *///    0x36    :    6    ->    {6}
    0x0037,    /* 7 *///    0x37    :    7    ->    {7}
    0x0038,    /* 8 *///    0x38    :    8    ->    {8}
    0x0039,    /* 9 *///    0x39    :    9    ->    {9}
    0x003A,    /* : *///    0x3A    :    colon    ->    {colon}
    0x1107,    /* ; *///    0x3B    :    semicolon    ->    {Choseong pieup}
    0x003c,    /* < *///    0x3C    :    less    ->    {less-than sign}
    0x003d,    /* = *///    0x3D    :    equal    ->    {equals sign}
    0x003e,    /* > *///    0x3E    :    greater    ->    {greater-than sign}
    0x003f,    /* ? *///    0x3F    :    question    ->    {question mark}
    0x0040,    /* @ *///    0x40    :    at    ->    {commercial at}
    0x1172,    /* A *///    0x41    :    A    ->    {jungseong yu}
    0x116e,    /* B *///    0x42    :    B    ->    {jungseong u}
    0x1166,    /* C *///    0x43    :    C    ->    {jungseong e}
    0x1175,    /* D *///    0x44    :    D    ->    {jungseong I}
    0x1167,    /* E *///    0x45    :    E    ->    {jungseong yeo}
    0x1161,    /* F *///    0x46    :    F    ->    {jungseong a}
    0x1173,    /* G *///    0x47    :    G    ->    {jungseong eu}
    0x2018,    /* H *///    0x48    :    H    ->    {quota left}
    0x1174,    /* I *///    0x49    :    I    ->    {jungseong yeu}
    0x2019,    /* J *///    0x4A    :    J    ->    {quota right}
    0x003b,    /* K *///    0x4B    :    K    ->    {semicolon}
    0x0027,    /* L *///    0x4C    :    L    ->    {quota}
    0x002F,    /* M *///    0x4D    :    M    ->    {slash}
    0x00B7,    /* N *///    0x4E    :    N    ->    {middle dot}
    0x116e,    /* O *///    0x4F    :    O    ->    {jungseong u}
    0x1169,    /* P *///    0x50    :    P    ->    {jungseong o}
    0x1164,    /* Q *///    0x51    :    Q    ->    {jungseong yae}
    0x1162,    /* R *///    0x52    :    R    ->    {jungseong yeo}
    0x1168,    /* S *///    0x53    :    S    ->    {jungseong ye}
    0x1165,    /* T *///    0x54    :    T    ->    {jungseong eo}
    0x201d,    /* U *///    0x55    :    U    ->    {quotadouble right}
    0x1169,    /* V *///    0x56    :    V    ->    {jungseong o}
    0x1163,    /* W *///    0x57    :    W    ->    {jungseong ya}
    0x116d,    /* X *///    0x58    :    X    ->    {jungseong yo}
    0x201c,    /* Y *///    0x59    :    Y    ->    {quotadouble left}
    0x203b,    /* Z *///    0x5A    :    Z    ->    {reference mark}
    0x005b,    /* [ *///    0x5B    :    bracketleft    ->    {left bracket}
    0x005c,    /* \ *///    0x5C    :    backslash    ->    {backslash}
    0x005d,    /* ] *///    0x5D    :    bracketright    ->    {right bracket}
    0x005e,    /* ^ *///    0x5E    :    asciicircum    ->    {circumflex accent}
    0x005f,    /* _ *///    0x5F    :    underscore    ->    {underscore}
    0x0060,    /* ` *///    0x60    :    quoteleft    ->    {grave accent}
    0x11bc,    /* a *///    0x61    :    a    ->    {Jongseong ieung}
    0x11bf,    /* b *///    0x62    :    b    ->    {Jongseong khiyeok}
    0x11be,    /* c *///    0x63    :    c    ->    {Jongseong chieuch}
    0x11ae,    /* d *///    0x64    :    d    ->    {Jongseong tikeut}
    0x11b8,    /* e *///    0x65    :    e    ->    {Jongseong pieup}
    0x11bb,    /* f *///    0x66    :    f    ->    {Jongseong ssangsios}
    0x11bd,    /* g *///    0x67    :    g    ->    {Jongseong cieuc}
    0x1102,    /* h *///    0x68    :    h    ->    {Choseong nieun}
    0x1106,    /* i *///    0x69    :    i    ->    {Choseong mieum}
    0x110b,    /* j *///    0x6A    :    j    ->    {Choseong ieung}
    0x1100,    /* k *///    0x6B    :    k    ->    {Choseong kiyeok}
    0x110c,    /* l *///    0x6C    :    l    ->    {Choseong cieuc}
    0x1112,    /* m *///    0x6D    :    m    ->    {Choseong hieuh}
    0x1109,    /* n *///    0x6E    :    n    ->    {Choseong sios}
    0x110e,    /* o *///    0x6F    :    o    ->    {Choseong chieuch}
    0x1111,    /* p *///    0x70    :    p    ->    {Choseong phieuph}
    0x11ba,    /* q *///    0x71    :    q    ->    {Jongseong sios}
    0x11c0,    /* r *///    0x72    :    r    ->    {Jongseong thikeuth}
    0x11ab,    /* s *///    0x73    :    s    ->    {Jongseong nieun}
    0x11c1,    /* t *///    0x74    :    t    ->    {Jongseong phieuph}
    0x1103,    /* u *///    0x75    :    u    ->    {Choseong tikeut}
    0x11c2,    /* v *///    0x76    :    v    ->    {Jongseong hieuh}
    0x11af,    /* w *///    0x77    :    w    ->    {Jongseong rieul}
    0x11a8,    /* x *///    0x78    :    x    ->    {Jongseong kiyeok}
    0x1105,    /* y *///    0x79    :    y    ->    {Choseong rieul}
    0x11b7,    /* z *///    0x7A    :    z    ->    {Jongseong mieum}
    0x007b,    /* { *///    0x7B    :    braceleft    ->    {left brace}
    0x007c,    /* | *///    0x7C    :    bar    ->    {vertical bar}
    0x007d,    /* } *///    0x7D    :    braceright    ->    {right brace}
    0x007e    /* ~ *///    0x7E    :    asciitilde    ->    {tilde}
  ];

  var K3_3shin_2012 = [
    0x0021,    /* ! */    /*    0x21    :    exclam    :    exclamation mark    */
    0x002F,    /* " */    /*    0x22    :    quotedbl    :   slash     */
    0x0023,    /* # */    /*    0x23    :    numbersign    :    number sign    */
    0x0024,    /* $ */    /*    0x24    :    dollar    :    dollar sign    */
    0x0025,    /* % */    /*    0x25    :    percent    :    percent sign    */
    0x0026,    /* & */    /*    0x26    :    ampersand    :    ampersand    */
    0x1110,    /* ' */    /*    0x27    :    apostrophe    :    Choseong thieuth (ㅌ)   */
    0x0028,    /* ( */    /*    0x28    :    parenleft    :    left parenthesis    */
    0x0029,    /* ) */    /*    0x29    :    parenright    :    right parenthesis    */
    0x002A,    /* * */    /*    0x2A    :    asterisk    :    asterisk    */
    0x002B,    /* + */    /*    0x2B    :    plus    :    plus sign    */
    0x002C,    /* , */    /*    0x2C    :    comma    :    comma    */
    0x002D,    /* - */    /*    0x2D    :    minus    :    minus sign    */
    0x002E,    /* . */    /*    0x2E    :    period    :    period    */
    0x110f,    /* / */    /*    0x2F    :    slash    :    Choseong khieukh  (ㅋ)  */
    0x0030,    /* 0 */    /*    0x30    :    0    :    0    */
    0x0031,    /* 1 */    /*    0x31    :    1    :    1    */
    0x0032,    /* 2 */    /*    0x32    :    2    :    2    */
    0x0033,    /* 3 */    /*    0x33    :    3    :    3    */
    0x0034,    /* 4 */    /*    0x34    :    4    :    4    */
    0x0035,    /* 5 */    /*    0x35    :    5    :    5    */
    0x0036,    /* 6 */    /*    0x36    :    6    :    6    */
    0x0037,    /* 7 */    /*    0x37    :    7    :    7    */
    0x0038,    /* 8 */    /*    0x38    :    8    :    8    */
    0x0039,    /* 9 */    /*    0x39    :    9    :    9    */
    0x003A,    /* : */    /*    0x3A    :    colon    :    colon    */
    0x1107,    /* ; */    /*    0x3B    :    semicolon    :    Choseong pieup  (ㅂ)  */
    0x003c,    /* < */    /*    0x3C    :    less    :    less-than sign    */
    0x003d,    /* = */    /*    0x3D    :    equal    :    equals sign    */
    0x003e,    /* > */    /*    0x3E    :    greater    :    greater-than sign    */
    0x003f,    /* ? */    /*    0x3F    :    question    :    question mark    */
    0x0040,    /* @ */    /*    0x40    :    at    :    commercial at    */
    0x1172,    /* A */    /*    0x41    :    A    :    jungseong yu  (ㅠ)  */
    0x116e,    /* B */    /*    0x42    :    B    :    jungseong u  (ㅜ)  */
    0x1166,    /* C */    /*    0x43    :    C    :    jungseong e  (ㅔ)  */
    0x1175,    /* D */    /*    0x44    :    D    :    jungseong I  (ㅣ)  */
    0x1167,    /* E */    /*    0x45    :    E    :    jungseong yeo  (ㅕ)  */
    0x1161,    /* F */    /*    0x46    :    F    :    jungseong a  (ㅏ)  */
    0x1173,    /* G */    /*    0x47    :    G    :    jungseong eu  (ㅡ)  */
    0x25A1,    /* H */    /*    0x48    :    H    :    white square □    */
    0x1174,    /* I */    /*    0x49    :    I    :    jungseong yeu  (ㅢ)  */
    0x2015,    /* J */    /*    0x4A    :    J    :    horizontal bar ―    */
    0x00B7,    /* K */    /*    0x4B    :    K    :   middle dot   ·    */
    0x003b,    /* L */    /*    0x4C    :    L    :    semicolon  ;  */
    0x0022,    /* M */    /*    0x4D    :    M    :    quotation mark  "  */
    0x0027,    /* N */    /*    0x4E    :    N    :    quota  ' */
    0x116e,    /* O */    /*    0x4F    :    O    :    jungseong u (ㅜ)   */
    0x1169,    /* P */    /*    0x50    :    P    :    jungseong o  (ㅗ)  */
    0x1164,    /* Q */    /*    0x51    :    Q    :    jungseong yae  (ㅒ)  */
    0x1165,    /* R */    /*    0x52    :    R    :    jungseong eo  (ㅓ)  */
    0x1168,    /* S */    /*    0x53    :    S    :    jungseong ye  (ㅖ)  */
    0x1162,    /* T */    /*    0x54    :    T    :    jungseong yeo  (ㅐ)  */
    0x25CB,    /* U */    /*    0x55    :    U    :    white circle ○   */
    0x1169,    /* V */    /*    0x56    :    V    :    jungseong o (ㅗ)   */
    0x1163,    /* W */    /*    0x57    :    W    :    jungseong ya  (ㅑ)  */
    0x116d,    /* X */    /*    0x58    :    X    :    jungseong yo  (ㅛ)  */
    0x00D7,    /* Y */    /*    0x59    :    Y    :    multiplication x  ×    */
    0x119e,    /* Z */    /*    0x5A    :    Z    :    hanguel < araea >   */
    0x005b,    /* [ */    /*    0x5B    :    bracketleft    :    left bracket    */
    0x005c,    /* \ */    /*    0x5C    :    backslash    :    backslash    */
    0x005d,    /* ] */    /*    0x5D    :    bracketright    :    right bracket    */
    0x005e,    /* ^ */    /*    0x5E    :    asciicircum    :    circumflex accent    */
    0x005f,    /* _ */    /*    0x5F    :    underscore    :    underscore    */
    0x0060,    /* ` */    /*    0x60    :    quoteleft    :    grave accent    */
    0x11bc,    /* a */    /*    0x61    :    a    :    Jongseong ieung (ㅇ)   */
    0x11bf,    /* b */    /*    0x62    :    b    :     Jongseong khiyeok (ㅋ)   */
    0x11c2,    /* c */    /*    0x63    :    c    :     Jongseong hieuh  (ㅎ)   */
    0x11bb,    /* d */    /*    0x64    :    d    :     Jongseong ssangsios (ㅆ)   */
    0x11b8,    /* e */    /*    0x65    :    e    :    Jongseong pieup (ㅂ)   */
    0x11be,    /* f */    /*    0x66    :    f    :     Jongseong chieuch (ㅊ)   */
    0x11bd,    /* g */    /*    0x67    :    g    :    Jongseong cieuc (ㅈ)   */
    0x1102,    /* h */    /*    0x68    :    h    :    Choseong nieun (ㄴ)   */
    0x1106,    /* i */    /*    0x69    :    i    :    Choseong mieum  (ㅁ)  */
    0x110b,    /* j */    /*    0x6A    :    j    :    Choseong ieung  (ㅇ)  */
    0x1100,    /* k */    /*    0x6B    :    k    :    Choseong kiyeok  (ㄱ)  */
    0x110c,    /* l */    /*    0x6C    :    l    :    Choseong cieuc  (ㅈ)  */
    0x1112,    /* m */    /*    0x6D    :    m    :    Choseong hieuh  (ㅎ)  */
    0x1109,    /* n */    /*    0x6E    :    n    :    Choseong sios  (ㅅ)  */
    0x110e,    /* o */    /*    0x6F    :    o    :    Choseong chieuch  (ㅊ)  */
    0x1111,    /* p */    /*    0x70    :    p    :    Choseong phieuph  (ㅍ)  */
    0x11ba,    /* q */    /*    0x71    :    q    :    Jongseong sios  (ㅅ)  */
    0x11c0,    /* r */    /*    0x72    :    r    :    Jongseong thikeuth (ㅌ)   */
    0x11ab,    /* s */    /*    0x73    :    s    :    Jongseong nieun  (ㄴ)  */
    0x11ae,    /* t */    /*    0x74    :    t    :     Jongseong tikeut (ㄷ)   */
    0x1103,    /* u */    /*    0x75    :    u    :    Choseong tikeut (ㄷ)   */
    0x11c1,    /* v */    /*    0x76    :    v    :    Jongseong phieuph (ㅍ)  */
    0x11af,    /* w */    /*    0x77    :    w    :    Jongseong rieul  (ㄹ)  */
    0x11a8,    /* x */    /*    0x78    :    x    :    Jongseong kiyeok  (ㄱ)  */
    0x1105,    /* y */    /*    0x79    :    y    :    Choseong rieul  (ㄹ)  */
    0x11b7,    /* z */    /*    0x7A    :    z    :    Jongseong mieum  (ㅁ)  */
    0x007b,    /* { */    /*    0x7B    :    braceleft    :    left brace    */
    0x007c,    /* | */    /*    0x7C    :    bar    :    vertical bar    */
    0x007d,    /* } */    /*    0x7D    :    braceright    :    right brace    */
    0x007e    /* ~ */    /*    0x7E    :    asciitilde    :    tilde    */
  ];


  var K3_3shin_2015 = [
    0x0021,    /* ! */    /*    0x21    :    exclam    :    exclamation mark    */
    0x002F,    /* " */    /*    0x22    :    quotedbl    :   slash     */
    0x0023,    /* # */    /*    0x23    :    numbersign    :    number sign    */
    0x0024,    /* $ */    /*    0x24    :    dollar    :    dollar sign    */
    0x0025,    /* % */    /*    0x25    :    percent    :    percent sign    */
    0x0026,    /* & */    /*    0x26    :    ampersand    :    ampersand    */
    0x1110,    /* ' */    /*    0x27    :    apostrophe    :    Choseong thieuth (ㅌ)   */
    0x0028,    /* ( */    /*    0x28    :    parenleft    :    left parenthesis    */
    0x0029,    /* ) */    /*    0x29    :    parenright    :    right parenthesis    */
    0x002A,    /* * */    /*    0x2A    :    asterisk    :    asterisk    */
    0x002B,    /* + */    /*    0x2B    :    plus    :    plus sign    */
    0x002C,    /* , */    /*    0x2C    :    comma    :    comma    */
    0x002D,    /* - */    /*    0x2D    :    minus    :    minus sign    */
    0x002E,    /* . */    /*    0x2E    :    period    :    period    */
    0x110f,    /* / */    /*    0x2F    :    slash    :    Choseong khieukh  (ㅋ)  */
    0x0030,    /* 0 */    /*    0x30    :    0    :    0    */
    0x0031,    /* 1 */    /*    0x31    :    1    :    1    */
    0x0032,    /* 2 */    /*    0x32    :    2    :    2    */
    0x0033,    /* 3 */    /*    0x33    :    3    :    3    */
    0x0034,    /* 4 */    /*    0x34    :    4    :    4    */
    0x0035,    /* 5 */    /*    0x35    :    5    :    5    */
    0x0036,    /* 6 */    /*    0x36    :    6    :    6    */
    0x0037,    /* 7 */    /*    0x37    :    7    :    7    */
    0x0038,    /* 8 */    /*    0x38    :    8    :    8    */
    0x0039,    /* 9 */    /*    0x39    :    9    :    9    */
    0x003A,    /* : */    /*    0x3A    :    colon    :    colon    */
    0x1107,    /* ; */    /*    0x3B    :    semicolon    :    Choseong pieup  (ㅂ)  */
    0x003c,    /* < */    /*    0x3C    :    less    :    less-than sign    */
    0x003d,    /* = */    /*    0x3D    :    equal    :    equals sign    */
    0x003e,    /* > */    /*    0x3E    :    greater    :    greater-than sign    */
    0x003f,    /* ? */    /*    0x3F    :    question    :    question mark    */
    0x0040,    /* @ */    /*    0x40    :    at    :    commercial at    */
    0x11bb,    /* A */    /*    0x41    :    A    :    Jongseong ssangsios (ㅆ)  */
    0x11bf,    /* B */    /*    0x42    :    B    :    Jongseong khiyeok (ㅋ)  */
    0x11ba,    /* C */    /*    0x43    :    C    :    Jongseong sios  (ㅅ)  */
    0x11af,    /* D */    /*    0x44    :    D    :    Jongseong rieul  (ㄹ)  */
    0x11bc,    /* E */    /*    0x45    :    E    :    Jongseong ieung (ㅇ)  */
    0x11c0,    /* F */    /*    0x46    :    F    :    Jongseong thikeuth (ㅌ)  */
    0x11ae,    /* G */    /*    0x47    :    G    :    Jongseong tikeut (ㄷ)  */
    0x3008,    /* H */    /*    0x48    :    H    :    〈    */
    0x2026,    /* I */    /*    0x49    :    I    :    …  */
    0x3009,    /* J */    /*    0x4A    :    J    :    〉    */
    0x00B7,    /* K */    /*    0x4B    :    K    :   middle dot   ·    */
    0x003b,    /* L */    /*    0x4C    :    L    :    semicolon  ;  */
    0x0022,    /* M */    /*    0x4D    :    M    :    quotation mark  "  */
    0x0027,    /* N */    /*    0x4E    :    N    :    quota  ' */
    0x116e,    /* O */    /*    0x4F    :    O    :    jungseong u (ㅜ)   */
    0x1169,    /* P */    /*    0x50    :    P    :    jungseong o  (ㅗ)  */
    0x11c2,    /* Q */    /*    0x51    :    Q    :    Jongseong hieuh  (ㅎ)  */
    0x11bd,    /* R */    /*    0x52    :    R    :    Jongseong cieuc (ㅈ)  */
    0x11ab,    /* S */    /*    0x53    :    S    :    Jongseong nieun  (ㄴ)  */
    0x11c1,    /* T */    /*    0x54    :    T    :    Jongseong phieuph (ㅍ)  */
    0x300B,    /* U */    /*    0x55    :    U    :    》   */
    0x11be,    /* V */    /*    0x56    :    V    :    Jongseong chieuch (ㅊ)   */
    0x11b7,    /* W */    /*    0x57    :    W    :    Jongseong mieum  (ㅁ)  */
    0x11a8,    /* X */    /*    0x58    :    X    :    Jongseong kiyeok  (ㄱ)  */
    0x300A,    /* Y */    /*    0x59    :    Y    :    《    */
    0x11b8,    /* Z */    /*    0x5A    :    Z    :    Jongseong pieup (ㅂ)   */
    0x005b,    /* [ */    /*    0x5B    :    bracketleft    :    left bracket    */
    0x005c,    /* \ */    /*    0x5C    :    backslash    :    backslash    */
    0x005d,    /* ] */    /*    0x5D    :    bracketright    :    right bracket    */
    0x005e,    /* ^ */    /*    0x5E    :    asciicircum    :    circumflex accent    */
    0x005f,    /* _ */    /*    0x5F    :    underscore    :    underscore    */
    0x0060,    /* ` */    /*    0x60    :    quoteleft    :    grave accent    */
    0x1163,    /* a */    /*    0x61    :    a    :    jungseong ya  (ㅑ)   */
    0x116e,    /* b */    /*    0x62    :    b    :     jungseong u  (ㅜ)   */
    0x1166,    /* c */    /*    0x63    :    c    :     jungseong e  (ㅔ)   */
    0x1175,    /* d */    /*    0x64    :    d    :     jungseong I  (ㅣ)   */
    0x1167,    /* e */    /*    0x65    :    e    :    jungseong yeo  (ㅕ)   */
    0x1161,    /* f */    /*    0x66    :    f    :     jungseong a  (ㅏ)   */
    0x1173,    /* g */    /*    0x67    :    g    :    jungseong eu  (ㅡ)   */
    0x1102,    /* h */    /*    0x68    :    h    :    Choseong nieun (ㄴ)   */
    0x1106,    /* i */    /*    0x69    :    i    :    Choseong mieum  (ㅁ)  */
    0x110b,    /* j */    /*    0x6A    :    j    :    Choseong ieung  (ㅇ)  */
    0x1100,    /* k */    /*    0x6B    :    k    :    Choseong kiyeok  (ㄱ)  */
    0x110c,    /* l */    /*    0x6C    :    l    :    Choseong cieuc  (ㅈ)  */
    0x1112,    /* m */    /*    0x6D    :    m    :    Choseong hieuh  (ㅎ)  */
    0x1109,    /* n */    /*    0x6E    :    n    :    Choseong sios  (ㅅ)  */
    0x110e,    /* o */    /*    0x6F    :    o    :    Choseong chieuch  (ㅊ)  */
    0x1111,    /* p */    /*    0x70    :    p    :    Choseong phieuph  (ㅍ)  */
    0x1164,    /* q */    /*    0x71    :    q    :    jungseong yae  (ㅒ)  */
    0x1162,    /* r */    /*    0x72    :    r    :    jungseong yeo  (ㅐ)   */
    0x1174,    /* s */    /*    0x73    :    s    :    jungseong yeu  (ㅢ)  */
    0x1165,    /* t */    /*    0x74    :    t    :     jungseong eo  (ㅓ)   */
    0x1103,    /* u */    /*    0x75    :    u    :    Choseong tikeut (ㄷ)   */
    0x1169,    /* v */    /*    0x76    :    v    :    jungseong o (ㅗ)  */
    0x1168,    /* w */    /*    0x77    :    w    :    jungseong ye  (ㅖ)  */
    0x116d,    /* x */    /*    0x78    :    x    :    jungseong yo  (ㅛ)  */
    0x1105,    /* y */    /*    0x79    :    y    :    Choseong rieul  (ㄹ)  */
    0x1172,    /* z */    /*    0x7A    :    z    :    jungseong yu  (ㅠ)  */
    0x007b,    /* { */    /*    0x7B    :    braceleft    :    left brace    */
    0x007c,    /* | */    /*    0x7C    :    bar    :    vertical bar    */
    0x007d,    /* } */    /*    0x7D    :    braceright    :    right brace    */
    0x007e    /* ~ */    /*    0x7E    :    asciitilde    :    tilde    */
  ];

  var K3_3shin_m = [
    0x0021,    /* ! */    /*    0x21    :    exclam    :    exclamation mark    */
    0x002F,    /* " */    /*    0x22    :    quotedbl    :   slash     */
    0x0023,    /* # */    /*    0x23    :    numbersign    :    number sign    */
    0x0024,    /* $ */    /*    0x24    :    dollar    :    dollar sign    */
    0x0025,    /* % */    /*    0x25    :    percent    :    percent sign    */
    0x0026,    /* & */    /*    0x26    :    ampersand    :    ampersand    */
    0x1110,    /* ' */    /*    0x27    :    apostrophe    :    Choseong thieuth (ㅌ)   */
    0x0028,    /* ( */    /*    0x28    :    parenleft    :    left parenthesis    */
    0x0029,    /* ) */    /*    0x29    :    parenright    :    right parenthesis    */
    0x002A,    /* * */    /*    0x2A    :    asterisk    :    asterisk    */
    0x002B,    /* + */    /*    0x2B    :    plus    :    plus sign    */
    0x002C,    /* , */    /*    0x2C    :    comma    :    comma    */
    0x002D,    /* - */    /*    0x2D    :    minus    :    minus sign    */
    0x002E,    /* . */    /*    0x2E    :    period    :    period    */
    0x110f,    /* / */    /*    0x2F    :    slash    :    Choseong khieukh  (ㅋ)  */
    0x0030,    /* 0 */    /*    0x30    :    0    :    0    */
    0x0031,    /* 1 */    /*    0x31    :    1    :    1    */
    0x0032,    /* 2 */    /*    0x32    :    2    :    2    */
    0x0033,    /* 3 */    /*    0x33    :    3    :    3    */
    0x0034,    /* 4 */    /*    0x34    :    4    :    4    */
    0x0035,    /* 5 */    /*    0x35    :    5    :    5    */
    0x0036,    /* 6 */    /*    0x36    :    6    :    6    */
    0x0037,    /* 7 */    /*    0x37    :    7    :    7    */
    0x0038,    /* 8 */    /*    0x38    :    8    :    8    */
    0x0039,    /* 9 */    /*    0x39    :    9    :    9    */
    0x003A,    /* : */    /*    0x3A    :    colon    :    colon    */
    0x1107,    /* ; */    /*    0x3B    :    semicolon    :    Choseong pieup  (ㅂ)  */
    0x003c,    /* < */    /*    0x3C    :    less    :    less-than sign    */
    0x003d,    /* = */    /*    0x3D    :    equal    :    equals sign    */
    0x003e,    /* > */    /*    0x3E    :    greater    :    greater-than sign    */
    0x003f,    /* ? */    /*    0x3F    :    question    :    question mark    */
    0x0040,    /* @ */    /*    0x40    :    at    :    commercial at    */
    0x11bc,    /* A */    /*    0x41    :    A    :    Jongseong ieung (ㅇ)  */
    0x11be,    /* B */    /*    0x42    :    B    :    Jongseong chieuch (ㅊ)  */
    0x11c2,    /* C */    /*    0x43    :    C    :    Jongseong hieuh  (ㅎ)  */
    0x11bb,    /* D */    /*    0x44    :    D    :    Jongseong ssangsios (ㅆ)  */
    0x11b8,    /* E */    /*    0x45    :    E    :    Jongseong pieup (ㅂ)  */
    0x11c0,    /* F */    /*    0x46    :    F    :    Jongseong thikeuth (ㅌ)  */
    0x11ae,    /* G */    /*    0x47    :    G    :    Jongseong tikeut (ㄷ)  */
    0x300A,    /* H */    /*    0x48    :    H    :    《    */
    0x203B,    /* I */    /*    0x49    :    I    :    ※  */
    0x300B,    /* J */    /*    0x4A    :    J    :    》    */
    0x00B7,    /* K */    /*    0x4B    :    K    :   middle dot   ·    */
    0x003b,    /* L */    /*    0x4C    :    L    :    semicolon  ;  */
    0x0022,    /* M */    /*    0x4D    :    M    :    quotation mark  "  */
    0x0027,    /* N */    /*    0x4E    :    N    :    quota  ' */
    0x116e,    /* O */    /*    0x4F    :    O    :    jungseong u (ㅜ)   */
    0x1169,    /* P */    /*    0x50    :    P    :    jungseong o  (ㅗ)  */
    0x11ba,    /* Q */    /*    0x51    :    Q    :    Jongseong sios  (ㅅ)  */
    0x11bd,    /* R */    /*    0x52    :    R    :    Jongseong cieuc (ㅈ)  */
    0x11ab,    /* S */    /*    0x53    :    S    :    Jongseong nieun  (ㄴ)  */
    0x11bf,    /* T */    /*    0x54    :    T    :    Jongseong khiyeok (ㅋ)  */
    0x201D,    /* U */    /*    0x55    :    U    :   ”    */
    0x11c1,    /* V */    /*    0x56    :    V    :    Jongseong phieuph (ㅍ)   */
    0x11af,    /* W */    /*    0x57    :    W    :    Jongseong rieul  (ㄹ)  */
    0x11a8,    /* X */    /*    0x58    :    X    :    Jongseong kiyeok  (ㄱ)  */
    0x201C,    /* Y */    /*    0x59    :    Y    :   “     */
    0x11b7,    /* Z */    /*    0x5A    :    Z    :    Jongseong mieum  (ㅁ)   */
    0x005b,    /* [ */    /*    0x5B    :    bracketleft    :    left bracket    */
    0x005c,    /* \ */    /*    0x5C    :    backslash    :    backslash    */
    0x005d,    /* ] */    /*    0x5D    :    bracketright    :    right bracket    */
    0x005e,    /* ^ */    /*    0x5E    :    asciicircum    :    circumflex accent    */
    0x005f,    /* _ */    /*    0x5F    :    underscore    :    underscore    */
    0x0060,    /* ` */    /*    0x60    :    quoteleft    :    grave accent    */
    0x1172,    /* a */    /*    0x61    :    a    :    jungseong yu  (ㅠ)   */
    0x116e,    /* b */    /*    0x62    :    b    :     jungseong u  (ㅜ)   */
    0x1166,    /* c */    /*    0x63    :    c    :     jungseong e  (ㅔ)   */
    0x1175,    /* d */    /*    0x64    :    d    :     jungseong I  (ㅣ)   */
    0x1167,    /* e */    /*    0x65    :    e    :    jungseong yeo  (ㅕ)   */
    0x1161,    /* f */    /*    0x66    :    f    :     jungseong a  (ㅏ)   */
    0x1173,    /* g */    /*    0x67    :    g    :    jungseong eu  (ㅡ)   */
    0x1102,    /* h */    /*    0x68    :    h    :    Choseong nieun (ㄴ)   */
    0x1106,    /* i */    /*    0x69    :    i    :    Choseong mieum  (ㅁ)  */
    0x110b,    /* j */    /*    0x6A    :    j    :    Choseong ieung  (ㅇ)  */
    0x1100,    /* k */    /*    0x6B    :    k    :    Choseong kiyeok  (ㄱ)  */
    0x110c,    /* l */    /*    0x6C    :    l    :    Choseong cieuc  (ㅈ)  */
    0x1112,    /* m */    /*    0x6D    :    m    :    Choseong hieuh  (ㅎ)  */
    0x1109,    /* n */    /*    0x6E    :    n    :    Choseong sios  (ㅅ)  */
    0x110e,    /* o */    /*    0x6F    :    o    :    Choseong chieuch  (ㅊ)  */
    0x1111,    /* p */    /*    0x70    :    p    :    Choseong phieuph  (ㅍ)  */
    0x1164,    /* q */    /*    0x71    :    q    :    jungseong yae  (ㅒ)  */
    0x1162,    /* r */    /*    0x72    :    r    :    jungseong yeo  (ㅐ)   */
    0x1174,    /* s */    /*    0x73    :    s    :    jungseong yeu  (ㅢ)  */
    0x1165,    /* t */    /*    0x74    :    t    :     jungseong eo  (ㅓ)   */
    0x1103,    /* u */    /*    0x75    :    u    :    Choseong tikeut (ㄷ)   */
    0x1169,    /* v */    /*    0x76    :    v    :    jungseong o (ㅗ)  */
    0x1163,    /* w */    /*    0x77    :    w    :    jungseong ya  (ㅑ)  */
    0x116d,    /* x */    /*    0x78    :    x    :    jungseong yo  (ㅛ)  */
    0x1105,    /* y */    /*    0x79    :    y    :    Choseong rieul  (ㄹ)  */
    0x1168,    /* z */    /*    0x7A    :    z    :    jungseong ye  (ㅖ)  */
    0x007b,    /* { */    /*    0x7B    :    braceleft    :    left brace    */
    0x007c,    /* | */    /*    0x7C    :    bar    :    vertical bar    */
    0x007d,    /* } */    /*    0x7D    :    braceright    :    right brace    */
    0x007e    /* ~ */    /*    0x7E    :    asciitilde    :    tilde    */
  ];

  var K3_3shin_p1 = [
    0x0021,  /* 0x21 exclam:       exclamation mark */
    0x002f,  /* 0x22 quotedbl:     slash */
    0x0023,  /* 0x23 numbersign:   number sign */
    0x0024,  /* 0x24 dollar:       dollar sign */
    0x0025,  /* 0x25 percent:      percent sign */
    0x0026,  /* 0x26 ampersand:    ampersand */
    0x1110,  /* 0x27 apostrophe:   choseong tieuh */
    0x0028,  /* 0x28 parenleft: left parenthesis */
    0x0029,  /* 0x29 parenright: right parenthesis */
    0x002a,  /* 0x2A asterisk:     asterisk */
    0x002b,  /* 0x2B plus: plus sign */
    0x002c,  /* 0x2C comma:        comma */
    0x002d,  /* 0x2D minus:        minus sign */
    0x002e,  /* 0x2E period:       period */
    0x110f,  /* 0x2F slash:        choseong kieuk */
    0x0030,  /* 0x30 0:            0 */
    0x0031,  /* 0x31 1:            1 */
    0x0032,  /* 0x32 2:            2 */
    0x0033,  /* 0x33 3:            3 */
    0x0034,  /* 0x34 4:            4 */
    0x0035,  /* 0x35 5:            5 */
    0x0036,  /* 0x36 6:            6 */
    0x0037,  /* 0x37 7:            7 */
    0x0038,  /* 0x38 8:            8 */
    0x0039,  /* 0x39 9:            9 */
    0x003a,  /* 0x3A colon:        colon */
    0x1107,  /* 0x3B semicolon: choseong  bieub */
    0x003c,  /* 0x3C less:         less-than sign */
    0x003d,  /* 0x3D equal:        equals sign */
    0x003e,  /* 0x3E greater: greater-than sign */
    0x003f,  /* 0x3F question:     question mark */
    0x0040,  /* 0x40 at:           commertial at */
    0x1172,  /* 0x41 A:            jungseong yu */
    0x116e,  /* 0x42 B:            jungseong u */
    0x1166,  /* 0x43 C:            jungseong e */
    0x1175,  /* 0x44 D:            jungseong i */
    0x1167,  /* 0x45 E:            jungseong yeo */
    0x1161,  /* 0x46 F:            jungseong a */
    0x1173,  /* 0x47 G:            jungseong eu */
    0x25A1,  /* 0x48 H:            white squre */
    0x1173,  /* 0x49 I:            jungseong eu */
    0x0027,  /* 0x4A J:            apostrophe */
    0x00B7,  /* 0x4B K:            middle dot */
    0x003b,  /* 0x4C L:            semicolon */
    0x0022,  /* 0x4D M:            quotatioin mark */
    0x2015,  /* 0x4E N:            horizontal bar */
    0x116e,  /* 0x4F O:            jungseong u */
    0x119e,  /* 0x50 P:            jungseong araea */
    0x1164,  /* 0x51 Q:            jungseong yae */
    0x1165,  /* 0x52 R:            jungseong eo */
    0x1168,  /* 0x53 S:            jungseong ye */
    0x1162,  /* 0x54 T:            jungseong ae */
    0x25CB,  /* 0x55 U:            white circle */
    0x1169,  /* 0x56 V:            jungseong o */
    0x1163,  /* 0x57 W:            jungseong ya */
    0x116d,  /* 0x58 X:            jungseong yo */
    0x00D7,  /* 0x59 Y:            multiplication */
    0x119e,  /* 0x5A Z:            jungseong araea */
    0x005b,  /* 0x5B bracketleft:  left bracket */
    0x005c,  /* 0x5C backslash:    backslash */
    0x005d,  /* 0x5D bracketright: right bracket */
    0x005e,  /* 0x5E asciicircum:  circumflex accent */
    0x005f,  /* 0x5F underscore:   underscore */
    0x0060,  /* 0x60 quoteleft:    grave accent */
    0x11bc,  /* 0x61 a:            jongseong ieung */
    0x11bf,  /* 0x62 b:            jongseong kieuk */
    0x11a8,  /* 0x63 c:            jongseong gieug */
    0x11c2,  /* 0x64 d:            jongseong hieuh */
    0x11b8,  /* 0x65 e:            jongseong bieub */
    0x11c1,  /* 0x66 f:            jongseong pieup */
    0x11ae,  /* 0x67 g:            jongseong dieud */
    0x1102,  /* 0x68 h:            choseong nieun */
    0x1106,  /* 0x69 i:            choseong mieum */
    0x110b,  /* 0x6A j:            choseong ieung */
    0x1100,  /* 0x6B k:            choseong gieug */
    0x110c,  /* 0x6C l:            choseong jieuc */
    0x1112,  /* 0x6D m:            choseong hieuh */
    0x1109,  /* 0x6E n:            choseong sieus */
    0x110e,  /* 0x6F o:            choseong chieuch */
    0x1111,  /* 0x70 p:            choseong pieup */
    0x11ba,  /* 0x71 q:            jongseong sieus */
    0x11c0,  /* 0x72 r:            jongseong tieut */
    0x11ab,  /* 0x73 s:            jongseong nieun */
    0x11be,  /* 0x74 t:            jongseong chieuch */
    0x1103,  /* 0x75 u:            choseong dieud */
    0x11bd,  /* 0x76 v:            jongseong jieuj */
    0x11af,  /* 0x77 w:            jongseong lieul */
    0x11bb,  /* 0x78 x:            jongseong ssangsieus */
    0x1105,  /* 0x79 y:            choseong lieul */
    0x11b7,  /* 0x7A z:            jongseong mieum */
    0x007b,  /* 0x7B braceleft: left brace */
    0x007c,  /* 0x7C bar:          vertical line(bar) */
    0x007d,  /* 0x7D braceright: right brace */
    0x007e,  /* 0x7E asciitilde:   tilde */
  ];

	// 신세벌식 P2
  var K3_3shin_p2 = [
    0x0021,	/* 0x21 exclam */
    0x002f,	/* 0x22 quotedbl: slash */
    0x0023,	/* 0x23 numbersign */
    0x0024,	/* 0x24 dollar */
    0x0025,	/* 0x25 percent */
    0x0026,	/* 0x26 ampersand */
    0x1110,	/* 0x27 apostrophe: choseong tieuh */
    0x0028,	/* 0x28 parenleft */
    0x0029,	/* 0x29 parenright */
    0x002a,	/* 0x2A asterisk */
    0x002b,	/* 0x2B plus */
    0x002c,	/* 0x2C comma */
    0x002d,	/* 0x2D minus */
    0x002e,	/* 0x2E period */
    0x110f,	/* 0x2F slash: choseong kieuk */
    0x0030,	/* 0x30 0 */
    0x0031,	/* 0x31 1 */
    0x0032,	/* 0x32 2 */
    0x0033,	/* 0x33 3 */
    0x0034,	/* 0x34 4 */
    0x0035,	/* 0x35 5 */
    0x0036,	/* 0x36 6 */
    0x0037,	/* 0x37 7 */
    0x0038,	/* 0x38 8 */
    0x0039,	/* 0x39 9 */
    0x003a,	/* 0x3A colon */
    0x1107,	/* 0x3B semicolon: choseong bieub */
    0x003c,	/* 0x3C less */
    0x003d,	/* 0x3D equal */
    0x003e,	/* 0x3E greater */
    0x003f,	/* 0x3F question */
    0x0040,	/* 0x40 at */
    0x1172,	/* 0x41 A: jungseong yu */
    0x116e,	/* 0x42 B: jungseong u */
    0x1166,	/* 0x43 C: jungseong e */
    0x1175,	/* 0x44 D: jungseong i */
    0x1162,	/* 0x45 E: jungseong ae */
    0x1161,	/* 0x46 F: jungseong a */
    0x1173,	/* 0x47 G: jungseong eu */
    0x25A1,	/* 0x48 H: white squre */
    0x1173,	/* 0x49 I: jungseong eu */
    0x0027,	/* 0x4A J: apostrophe */
    0x00B7,	/* 0x4B K: middle dot */
    0x003b,	/* 0x4C L: semicolon */
    0x0022,	/* 0x4D M: quotatioin mark */
    0x2015,	/* 0x4E N: horizontal bar */
    0x116e,	/* 0x4F O: jungseong u */
    0x119e,	/* 0x50 P: jungseong araea */
    0x1164,	/* 0x51 Q: jungseong yae */
    0x1165,	/* 0x52 R: jungseong eo */
    0x1168,	/* 0x53 S: jungseong ye */
    0x1167,	/* 0x54 T: jungseong yeo */
    0x25CB,	/* 0x55 U: white circle */
    0x1169,	/* 0x56 V: jungseong o */
    0x1163,	/* 0x57 W: jungseong ya */
    0x116d,	/* 0x58 X: jungseong yo */
    0x00D7,	/* 0x59 Y: multiplication */
    0x119e,	/* 0x5A Z: jungseong araea */
    0x005b,	/* 0x5B bracketleft */
    0x005c,	/* 0x5C backslash */
    0x005d,	/* 0x5D bracketright */
    0x005e,	/* 0x5E asciicircum */
    0x005f,	/* 0x5F underscore */
    0x0060,	/* 0x60 quoteleft */
    0x11bc,	/* 0x61 a: jongseong ieung */
    0x11be,	/* 0x62 b: jongseong chieuch */
    0x11a8,	/* 0x63 c: jongseong gieug */
    0x11c2,	/* 0x64 d: jongseong hieuh */
    0x11b8,	/* 0x65 e: jongseong bieub */
    0x11c1,	/* 0x66 f: jongseong pieup */
    0x11ae,	/* 0x67 g: jongseong dieud */
    0x1102,	/* 0x68 h: choseong nieun */
    0x1106,	/* 0x69 i: choseong mieum */
    0x110b,	/* 0x6A j: choseong ieung */
    0x1100,	/* 0x6B k: choseong gieug */
    0x110c,	/* 0x6C l: choseong jieuc */
    0x1112,	/* 0x6D m: choseong hieuh */
    0x1109,	/* 0x6E n: choseong sieus */
    0x110e,	/* 0x6F o: choseong chieuch */
    0x1111,	/* 0x70 p: choseong pieup */
    0x11ba,	/* 0x71 q: jongseong sieus */
    0x11c0,	/* 0x72 r: jongseong tieut */
    0x11ab,	/* 0x73 s: jongseong nieun */
    0x11bf,	/* 0x74 t: jongseong kieuk */
    0x1103,	/* 0x75 u: choseong dieud */
    0x11bd,	/* 0x76 v: jongseong jieuj */
    0x11af,	/* 0x77 w: jongseong lieul */
    0x11bb,	/* 0x78 x: jongseong ssangsieus */
    0x1105,	/* 0x79 y: choseong lieul */
    0x11b7,	/* 0x7A z: jongseong mieum */
    0x007b,	/* 0x7B braceleft */
    0x007c,	/* 0x7C bar */
    0x007d,	/* 0x7D braceright */
    0x007e  /* 0x7E asciitilde */
  ];


  //alert("get_table_hangeul:" + type);
  // array
  switch (true) {
    case /3-2012/.test(type) :
      return K3_3_2012;
    case /3-2015$/.test(type) :
      return K3_3_2015;
    case /3-2015p/.test(type) :
      return K3_3_2015;
    case /3-90/.test(type) :
      return K3_3_90;
    case /3-91/.test(type) :
      return K3_3_91;
    case /3-p2/.test(type) :
      return K3_3_P2;
    case /3-p3/.test(type) :
      return K3_3_P3;
    case /3-93-yet/.test(type) :
      return K3_3_93_yet;
    case /3moa-ahn/.test(type) :
      return K3_3moa_ahn;
    case /3moa-semoe-2014/.test(type) :
      return K3_3moa_semoe_2014;
    case /3moa-semoe-2015/.test(type) :
      return K3_3moa_semoe_2015;
    case /3moa-semoe-2016/.test(type) :
      return K3_3moa_semoe_2016;
    case /3moa-semoe-2017/.test(type) :
      return K3_3moa_semoe_2017;
    case /3sun-1990/.test(type) :
      return K3_3sun_1990;
    case /3sun-2014/.test(type) :
      return K3_3sun_2014;
    case /3shin-1995/.test(type) :
      return K3_3shin_1995;
    case /3shin-b/.test(type) :
      return K3_3shin_b;
    case /3shin-2003/.test(type) :
      return K3_3shin_2003;
    case /3shin-2012/.test(type) :
      return K3_3shin_2012;
    case /3shin-2015-shift/.test(type) :
      return K3_3shin_2015;
    case /3shin-m-shift/.test(type) :
      return K3_3shin_m;
    case /3shin-p1/.test(type) :
      if (__change_to_yet) {
        K3_3shin_p1[52] = 0x302E; /* 0x55 U: hangeul single dot tone mark */
        K3_3shin_p1[56] = 0x302F; /* 0x59 Y: hangeul double dot tone mark */
      }
      return K3_3shin_p1;
    case /3shin-p2/.test(type) :
      if (__change_to_yet) {
        K3_3shin_p2[52] = 0x302E; /* 0x55 U: hangeul single dot tone mark */
        K3_3shin_p2[56] = 0x302F; /* 0x59 Y: hangeul double dot tone mark */
      }
      return K3_3shin_p2;
    case /2-kps9256/.test(type) :
      return K2_kps9256;
    default :
      return K2_ksx5002;
  }

}
