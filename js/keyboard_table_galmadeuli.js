function get_table_galmadeuli(type) {
var galmadeuli_3_2015 = [
    [0x1161, 0x11c1], /* jungseong a (ㅏ):       jongseong phieuph (ㅍ)        */
    [0x1162, 0x1164], /* jungseong ae (ㅐ):       jungseong yae (ㅒ)        */
    [0x1165, 0x11be], /* jungseong eo (ㅓ):      jongseong chieuch (ㅊ)      */
    [0x1166, 0x11c0], /* jungseong e (ㅔ):       jongseong thikeuth (ㅌ)        */
    [0x1167, 0x11bd], /* jungseong yeo (ㅕ):     jongseong cieuc (ㅈ)        */
    [0x1169, 0x11bf], /* jungseong o (ㅗ):       jongseong khiyeok (ㅋ)        */
    [0x1175, 0x11c2], /* jungseong i (ㅣ):       jongseong hieuh (ㅎ)       */
//
    [0x11ab, 0x11ad],  /* jongseong nieun (ㄴ) -> <ㄶ> */
    [0x11af, 0x11b0],  /* jongseong rieul (ㄹ) -> <ㄺ> */
    [0x11b7, 0x11b1],  /* jongseong mieum  (ㅁ) -> <ㄻ>   */
    [0x11ba, 0x11b6],  /* jongseong sios (ㅅ) -> <ㅀ> */
    [0x11bc, 0x11b9],  /* jongseong ieung (ㅇ) -> <ㅄ> */
//
    [0x11bd, 0x11ac], /* jongseong cieuc (ㅈ):   jongseong nieun-cieuc (ㄵ)  */
    [0x11be, 0x11b6], /* jongseong chieuch (ㅊ): jongseong rieul-hieuh (ㅀ)  */
    [0x11bf, 0x11aa], /* jongseong khiyeok (ㅋ):   jongseong kiyeok-sios (ㄳ)  */
    [0x11c0, 0x11b5], /* jongseong thikeuth (ㅌ):   jongseong rieul-phieuph (ㄿ)  */
    [0x11c1, 0x11b1], /* jongseong phieuph (ㅍ):   jongseong rieul-mieum (ㄻ)  */
    [0x11c2, 0x11b2], /* jongseong hieuh (ㅎ):   jongseong rieul-pieup (ㄼ)  */
];

var galmadeuli_3_2015_patal = [
    [0x1161, 0x11c1], /* jungseong a (ㅏ):       jongseong phieuph (ㅍ)        */
    [0x1162, 0x1164], /* jungseong ae (ㅐ):       jungseong yae (ㅒ)        */
    [0x1165, 0x11be], /* jungseong eo (ㅓ):      jongseong chieuch (ㅊ)      */
    [0x1166, 0x11c0], /* jungseong e (ㅔ):       jongseong thikeuth (ㅌ)        */
    [0x1167, 0x11bd], /* jungseong yeo (ㅕ):     jongseong cieuc (ㅈ)        */
    [0x1169, 0x11bf], /* jungseong o (ㅗ):       jongseong khiyeok (ㅋ)        */
    [0x1175, 0x11c2], /* jungseong i (ㅣ):       jongseong hieuh (ㅎ)       */
//
    [0x11ab, 0x11ad],  /* jongseong nieun (ㄴ) -> <ㄶ> */
    [0x11af, 0x11b0],  /* jongseong rieul (ㄹ) -> <ㄺ> */
    [0x11b7, 0x11b1],  /* jongseong mieum  (ㅁ) -> <ㄻ>   */
    [0x11ba, 0x11b6],  /* jongseong sios (ㅅ) -> <ㅀ> */
    [0x11bc, 0x11b9],  /* jongseong ieung (ㅇ) -> <ㅄ> */
//
    [0x11bd, 0x11ac], /* jongseong cieuc (ㅈ):   jongseong nieun-cieuc (ㄵ)  */
    [0x11be, 0x11b3], /* jongseong chieuch (ㅊ): jongseong rieul-sios (ㄽ)  */
    [0x11bf, 0x11aa], /* jongseong khiyeok (ㅋ):   jongseong kiyeok-sios (ㄳ)  */
    [0x11c0, 0x11b4], /* jongseong thikeuth (ㅌ):   jongseong rieul-thieuth (ㄾ)  */
    [0x11c1, 0x11b5],  /* jongseong phieuph (ㅍ):   jongseong rieul-phieuph (ㄿ)  */
    [0x11c2, 0x11b2] /* jongseong hieuh (ㅎ):   jongseong rieul-pieup (ㄼ)  */
];

var galmadeuli_3moa_2014 = [
    [0x11a8, 0x11bf],  /* jongseong kiyeok (ㄱ) -> (ㅋ) */
    [0x11ab, 0x11ad],  /* jongseong nieun (ㄴ) -> <ㄶ> */
    [0x11ae, 0x11c0],  /* jongseong tikeut (ㄷ) -> (ㅌ) */
    [0x11af, 0x11bd],  /* jongseong rieul (ㄹ) -> (ㅈ) */
    [0x11b7, 0x11ae],  /* jongseong mieum  (ㅁ) -> (ㄷ) */
    [0x11b8, 0x11c1],  /* jongseong pieup  (ㅂ) -> (ㅍ) */
    [0x11b9, 0x11b3],  /* jongseong pieup-sios (ㅄ) -> rieul-sios (ㄽ) */
    [0x11ba, 0x11be],  /* jongseong sios (ㅅ) -> (ㅊ) */
    [0x11bc, 0x11b8],  /* jongseong ieung (ㅇ) -> (ㅂ) */
    [0x11c2, 0x11b6],  /* jongseong hieuh (ㅎ) -> (ㅀ) */
];

var galmadeuli_3shin_2003 = [
    /* choseong -> jungseong */
    [0x1106, 0x1174],  /* choseong mieum <ㅁ> */     /* jungseong yi <ㅢ> */
    [0x110b, 0x119e],  /* choseong ieung <ㅇ> */      /* jungseong araea<ㆍ> */
    [0x110e, 0x116e],  /* choseong chieuch <ㅊ> */      /* jungseong u <ㅜ> */
    [0x110f, 0x1169],  /* choseong khieukh <ㅋ> */     /* jungseong o <ㅗ> */
    [0x1111, 0x1169],  /* choseong phieuph <ㅍ> */     /* jungseong o <ㅗ> */
    /* jungseong -> jongseong */
    [0x1162, 0x11b4],     /*ㅐ*/     /* <ㄾ> */
    [0x1163, 0x11b0],     /*ㅑ*/     /* <ㄺ> */
    [0x1164, 0x11b3],     /*ㅒ*/     /* <ㄽ> */
    [0x1165, 0x11b5],     /*ㅓ*/     /* <ㄿ> */
    [0x1166, 0x11aa],     /*ㅔ*/     /* <ㄳ>*/
    [0x1167, 0x11b2],     /*ㅕ*/     /* <ㄼ> */
    [0x1168, 0x11ad],     /*ㅖ*/     /* <ㄶ> */
    [0x1169, 0x11b6],     /*ㅗ*/     /* <ㅀ> */
    [0x116d, 0x11a9],     /*ㅛ*/     /* <ㄲ> */
    [0x1172, 0x11b9],     /*ㅠ*/     /* <ㅄ> */
    [0x1175, 0x11ac],     /*ㅣ*/     /* <ㄵ> */
    /* jongseong -> jungseong */
    [0x11a8, 0x116d],  /* jongseong kiyeok (ㄱ)        -> jungseong yo (ㅛ) */
    [0x11ab, 0x1168],  /* jongseong nieun (ㄴ)         -> jungseong ye (ㅖ)       */
    [0x11ae, 0x1175],  /* jongseong tikeut (ㄷ)        -> jungseong i  (ㅣ)      */
    [0x11af, 0x1163],  /* jongseong rieul (ㄹ)         ->  jungseong ya (ㅑ)       */
    [0x11b7, 0x203B],  /* jongseong mieum  (ㅁ)        ->  ※: 0x203B   */
    [0x11b8, 0x1167],  /* jongseong pieup  (ㅂ)        -> jungseong yeo (ㅕ)     */
    [0x11ba, 0x1164],  /* jongseong sios (ㅅ)          -> jungseong yae (ㅒ)        */
    [0x11bb, 0x1161], /* jongseong ssangsios (ㅆ)     -> jungseong a (ㅏ)   */
    [0x11bc, 0x1172],  /* jongseong ieung (ㅇ)         -> jungseong yu  (ㅠ)      */
    [0x11bd, 0x1173],  /* jongseong cieuc (ㅈ)         -> jungseong eu  (ㅡ)      */
    [0x11be, 0x1166],  /* jongseong chieuch (ㅊ)       -> jungseong e  (ㅔ)    */
    [0x11bf, 0x116e],  /* jongseong khieukh (ㅋ)        -> jungseong u  (ㅜ)    */
    [0x11c0, 0x1162],  /* jongseong thieuth (ㅌ)       -> jungseong ae  (ㅐ)    */
    [0x11c1, 0x1165],  /* jongseong phieuph (ㅍ)       -> jungseong eo  (ㅓ)    */
    [0x11c2, 0x1169],  /* jongseong hieuh (ㅎ)         -> jungseong o   (ㅗ)     */
    /* jungseong -> jongseong */
    [0x203B, 0x11b1]     /*※: 0x203B*/    /* <ㄻ>  */
];

var galmadeuli_3shin_2012 = [
    /* choseong -> jungseong */
    [0x1106, 0x1174],  /* choseong mieum <ㅁ> */     /* jungseong yi <ㅢ> */
    //[0x110b, 0x119e],  /* choseong ieung <ㅇ> */      /* jungseong araea<ㆍ> */
    [0x110e, 0x116e],  /* choseong chieuch <ㅊ> */      /* jungseong u <ㅜ> */
    [0x110f, 0x1169],  /* choseong khieukh <ㅋ> */     /* jungseong o <ㅗ> */
    [0x1111, 0x1169],  /* choseong phieuph <ㅍ> */     /* jungseong o <ㅗ> */
    /* jungseong -> jongseong */
    [0x1161, 0x11aa],     /*ㅏ*/     /* <ㄳ> */
    [0x1163, 0x11b0],     /*ㅑ*/     /* <ㄺ> */
    [0x1164, 0x11b3],     /*ㅒ*/     /* <ㄽ> */
    [0x1165, 0x11b4],     /*ㅓ*/     /* <ㄾ> */
    [0x1166, 0x11b6],     /*ㅔ*/     /* <ㅀ>*/
    [0x1167, 0x11b2],     /*ㅕ*/     /* <ㄼ> */
    [0x1168, 0x11ad],     /*ㅖ*/     /* <ㄶ> */
    [0x1169, 0x11b5],     /*ㅗ*/     /* <ㄿ> */
    [0x116d, 0x11a9],     /*ㅛ*/     /* <ㄲ> */
    //[0x116e, 0x11aa],     /*ㅜ*/     /* <ㄳ> */
    [0x1172, 0x11b9],     /*ㅠ*/     /* <ㅄ> */
    [0x1175, 0x11ac],     /*ㅣ*/     /* <ㄵ> */
    [0x119e, 0x11b1],     /*   ᆞaraea*/    /* <ㄻ>  */
    /* jongseong -> jungseong */
    [0x11a8, 0x116d],  /* jongseong kiyeok (ㄱ)        -> jungseong yo (ㅛ) */
    [0x11ab, 0x1168],  /* jongseong nieun (ㄴ)         -> jungseong ye (ㅖ)       */
    [0x11ae, 0x1162],  /* jongseong tikeut (ㄷ)        -> jungseong ae  (ㅐ)      */
    [0x11af, 0x1163],  /* jongseong rieul (ㄹ)         ->  jungseong ya (ㅑ)       */
    [0x11b7, 0x119e],  /* jongseong mieum  (ㅁ)        ->      jungseong araea (ᆞ)   */
    [0x11b8, 0x1167],  /* jongseong pieup  (ㅂ)        -> jungseong yeo (ㅕ)     */
    [0x11ba, 0x1164],  /* jongseong sios (ㅅ)          -> jungseong yae (ㅒ)        */
    [0x11bb, 0x1175], /* jongseong ssangsios (ㅆ)     -> jungseong i  (ㅣ)   */
    [0x11bc, 0x1172],  /* jongseong ieung (ㅇ)         -> jungseong yu  (ㅠ)      */
    [0x11bd, 0x1173],  /* jongseong cieuc (ㅈ)         -> jungseong eu  (ㅡ)      */
    [0x11be, 0x1161],  /* jongseong chieuch (ㅊ)       -> jungseong a (ㅏ)    */
    [0x11bf, 0x116e],  /* jongseong khieukh (ㅋ)        -> jungseong u  (ㅜ)    */
    [0x11c0, 0x1165],  /* jongseong thieuth (ㅌ)       -> jungseong eo  (ㅓ)    */
    [0x11c1, 0x1169],  /* jongseong phieuph (ㅍ)       -> jungseong o   (ㅗ)    */
    [0x11c2, 0x1166]  /* jongseong hieuh (ㅎ)         -> jungseong e  (ㅔ)     */
];


var galmadeuli_3shin_2015 = [
    /* choseong -> jungseong */
    //[0x1106, 0x1174],  /* choseong mieum <ㅁ> */     /* jungseong yi <ㅢ> */
    //[0x110b, 0x119e],  /* choseong ieung <ㅇ> */      /* jungseong araea<ㆍ> */
    [0x110e, 0x116e],  /* choseong chieuch <ㅊ> */      /* jungseong u <ㅜ> */
    [0x110f, 0x1169],  /* choseong khieukh <ㅋ> */     /* jungseong o <ㅗ> */
    [0x1111, 0x1169],  /* choseong phieuph <ㅍ> */     /* jungseong o <ㅗ> */
    /* jungseong -> jongseong */
    [0x1161, 0x11c0],     /*ㅏ*/     /* <ㅌ> */
    [0x1162, 0x11bd],     /*ㅐ*/     /* <ㅈ> */
    [0x1163, 0x11bb],     /*ㅑ*/     /* <ㅆ> */
    [0x1164, 0x11c2],     /*ㅒ*/     /* <ㅎ> */
    [0x1165, 0x11c1],     /*ㅓ*/     /* <ㅍ> */
    [0x1166, 0x11ba],     /*ㅔ*/     /* <ㅅ>*/
    [0x1167, 0x11bc],     /*ㅕ*/     /* <ㅇ> */
    [0x1168, 0x11b7],     /*ㅖ*/     /* <ㅁ> */
    [0x1169, 0x11be],     /*ㅗ*/     /* <ㅊ> */
    [0x116d, 0x11a8],     /*ㅛ*/     /* <ㄱ> */
    [0x116e, 0x11bf],     /*ㅜ*/     /* <ㅋ> */
    [0x1172, 0x11b8],     /*ㅠ*/     /* <ㅂ> */
    [0x1173, 0x11ae],     /*ㅡ*/     /* <ㄷ> */
    [0x1174, 0x11ab],     /*ㅢ*/     /* <ㄴ> */
    [0x1175, 0x11af],     /*ㅣ*/     /* <ㄹ> */
];

    // array
    if (type.substr(0, 1) === '3') {
        if (type.substr(0, 2) === '3-') {
            if (type === '3-2015') {
                return galmadeuli_3_2015;
            } else if (type === '3-2015p') {
                return galmadeuli_3_2015_patal;
            } else {
                return [];
            }
        } else if (type.substr(0, 4) === '3moa') {
            return galmadeuli_3moa_2014;
        } else if (type.substr(0, 5) === '3shin') {
            if (type === '3shin-2003') {
                return galmadeuli_3shin_2003;
            } else if (type === '3shin-2015') {
                //alert("2015");
                return galmadeuli_3shin_2015;
            } else {
                //alert("2012");
                return galmadeuli_3shin_2012;
            }
        } else {
            return [];
        }
    } else {
        return [];    
    } 

}
