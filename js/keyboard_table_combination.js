function get_table_combination(type) {
	
	var hangeul_combination_table_default = [
		[0x11001100,0x1101], /* choseong  gieug + gieug = ssanggieug */
		[0x11031103,0x1104], /* choseong  dieud + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong  bieup + bieup = ssangbieup */
		[0x11091109,0x110a], /* choseong  sieus + sieus = ssangsieus */
		[0x110c110c,0x110d], /* choseong  jieuj + jieuj = ssangjieuj */
		[0x11691161,0x116a], /* jungseong o     + a     = wa */
		[0x11691162,0x116b], /* jungseong o     + ae    = wae */
		[0x11691175,0x116c], /* jungseong o     + i     = oe */
		[0x116e1165,0x116f], /* jungseong u     + eo    = weo */
		[0x116e1166,0x1170], /* jungseong u     + e     = we */
		[0x116e1175,0x1171], /* jungseong u     + i     = wi */
		[0x11731175,0x1174], /* jungseong eu    + i     = yi */
		[0x119e1175,0x11a1], /* jungseong araea + i     = araea-i */
		[0x119e119e,0x11a2], /* jungseong araea + araea = ssangaraea */
		[0x11a811a8,0x11a9], /* jongseong gieug + gieug = ssangegieug */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11ab11bd,0x11ac], /* jongseong nieun + jieuj = jieun-cieuj */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b2], /* jongseong lieul + pieup = lieul-pieup */
		[0x11af11ba,0x11b3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11af11c0,0x11b4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11af11c1,0x11b5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11b811ba,0x11b9]  /* jongseong bieub + sieus = bieub-sieus */
		//[0x116c1162,0x1164] /* jungseong i     + ae    = yae */
	];

	var hangeul_combination_table_full = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x11001103,0x115a], /* choseong gieug + dieud = gieug-dieud */
		[0x11021100,0x1113], /* choseong nieun + gieug = nieun-gieug */
		[0x11021102,0x1114], /* choseong nieun + nieun = ssangnieun */
		[0x11021103,0x1115], /* choseong nieun + dieud = nieun-dieud */
		[0x11021107,0x1116], /* choseong nieun + bieub = nieun-bieub */
		[0x11021109,0x115b], /* choseong nieun + sieus = nieun-sieus */
		[0x1102110c,0x115c], /* choseong nieun + jieuj = nieun-jieuj */
		[0x11021112,0x115d], /* choseong nieun + hieuh = nieun-hieuh */
		[0x11031100,0x1117], /* choseong dieud + gieug = dieud-gieug */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11031105,0x115e], /* choseong dieud + lieul = dieud-lieul */
		[0x11031106,0xa960], /* choseong dieud + mieum = dieud-mieum */
		[0x11031107,0xa961], /* choseong dieud + bieub = dieud-bieub */
		[0x11031109,0xa962], /* choseong dieud + sieus = dieud-sieus */
		[0x1103110c,0xa963], /* choseong dieud + jieuj = dieud-jieuj */
		[0x11051100,0xa964], /* choseong lieul + gieug = lieul-gieug */
		[0x11051101,0xa965], /* choseong lieul + ssanggieug = lieul-ssanggieug */
		[0x11051102,0x1118], /* choseong lieul + nieun = lieul-nieun */
		[0x11051103,0xa966], /* choseong lieul + dieud = lieul-dieud */
		[0x11051104,0xa967], /* choseong lieul + ssangdieud = lieul-ssangdieud */
		[0x11051105,0x1119], /* choseong lieul + lieul = ssanglieul */
		[0x11051106,0xa968], /* choseong lieul + mieum = lieul-mieum */
		[0x11051107,0xa969], /* choseong lieul + bieub = lieul-bieub */
		[0x11051108,0xa96a], /* choseong lieul + ssangbieub = lieul-ssangbieub */
		[0x11051109,0xa96c], /* choseong lieul + sieus = lieul-sieus */
		[0x1105110b,0x111b], /* choseong lieul + ieung = gabyeounlieul */
		[0x1105110c,0xa96d], /* choseong lieul + jieuj = lieul-jieuj */
		[0x1105110f,0xa96e], /* choseong lieul + kieuk = lieul-kieuk */
		[0x11051112,0x111a], /* choseong lieul + hieuh = lieul-hieuh */
		[0x1105112b,0xa96b], /* choseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11061100,0xa96f], /* choseong mieum + gieug = mieum-gieug */
		[0x11061103,0xa970], /* choseong mieum + dieud = mieum-dieud */
		[0x11061107,0x111c], /* choseong mieum + bieub = mieum-bieub */
		[0x11061109,0xa971], /* choseong mieum + sieus = mieum-sieus */
		[0x1106110b,0x111d], /* choseong mieum + ieung = gabyeounmieum */
		[0x11071100,0x111e], /* choseong bieub + gieug = bieub-gieug */
		[0x11071102,0x111f], /* choseong bieub + nieun = bieub-nieun */
		[0x11071103,0x1120], /* choseong bieub + dieud = bieub-dieud */
		[0x11071107,0x1108], /* choseong bieub + bieub = ssangbieub */
		[0x11071109,0x1121], /* choseong bieub + sieus = bieub-sieus */
		[0x1107110a,0x1125], /* choseong bieub + ssangsieus = bieub-ssangsieus */
		[0x1107110b,0x112b], /* choseong bieub + ieung = gabyeounbieub */
		[0x1107110c,0x1127], /* choseong bieub + jieuj = bieub-jieuj */
		[0x1107110e,0x1128], /* choseong bieub + chieuch = bieub-chieuch */
		[0x1107110f,0xa973], /* choseong bieub + kieuk = bieub-kieuk */
		[0x11071110,0x1129], /* choseong bieub + tieut = bieub-tieut */
		[0x11071111,0x112a], /* choseong bieub + pieup = bieub-pieup */
		[0x11071112,0xa974], /* choseong bieub + hieuh = bieub-hieuh */
		[0x1107112b,0x112c], /* choseong bieub + gabyeounbieub = gabyeounssangbieub */
		[0x1107112d,0x1122], /* choseong bieub + sieus-gieug = bieub-sieus-gieug */
		[0x1107112f,0x1123], /* choseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11071132,0x1124], /* choseong bieub + sieus-bieub = bieub-sieus-bieub */
		[0x11071136,0x1126], /* choseong bieub + sieus-jieuj = bieub-sieus-jieuj */
		[0x11071139,0xa972], /* choseong bieub + sieus-tieut = bieub-sieus-tieut */
		[0x1108110b,0x112c], /* choseong ssangbieub + ieung = gabyeounssangbieub */
		[0x11091100,0x112d], /* choseong sieus + gieug = sieus-gieug */
		[0x11091102,0x112e], /* choseong sieus + nieun = sieus-nieun */
		[0x11091103,0x112f], /* choseong sieus + dieud = sieus-dieud */
		[0x11091105,0x1130], /* choseong sieus + lieul = sieus-lieul */
		[0x11091106,0x1131], /* choseong sieus + mieum = sieus-mieum */
		[0x11091107,0x1132], /* choseong sieus + bieub = sieus-bieub */
		[0x11091109,0x110a], /* choseong sieus + sieus = ssangsieus */
		[0x1109110a,0x1134], /* choseong sieus + ssangsieus = sieus-ssangsieus */
		[0x1109110b,0x1135], /* choseong sieus + ieung = sieus-ieung */
		[0x1109110c,0x1136], /* choseong sieus + jieuj = sieus-jieuj */
		[0x1109110e,0x1137], /* choseong sieus + chieuch = sieus-chieuch */
		[0x1109110f,0x1138], /* choseong sieus + kieuk = sieus-kieuk */
		[0x11091110,0x1139], /* choseong sieus + tieut = sieus-tieut */
		[0x11091111,0x113a], /* choseong sieus + pieup = sieus-pieup */
		[0x11091112,0x113b], /* choseong sieus + hieuh = sieus-hieuh */
		[0x1109111e,0x1133], /* choseong sieus + bieub-gieug = sieus-bieub-gieug */
		[0x11091132,0xa975], /* choseong sieus + sieus-bieub = ssangsieus-bieub */
		[0x110a1107,0xa975], /* choseong ssangsieus + bieub = ssangsieus-bieub */
		[0x110a1109,0x1134], /* choseong ssangsieus + sieus = sieus-ssangsieus */
		[0x110b1100,0x1141], /* choseong ieung + gieug = ieung-gieug */
		[0x110b1103,0x1142], /* choseong ieung + dieud = ieung-dieud */
		[0x110b1105,0xa976], /* choseong ieung + lieul = ieung-lieul */
		[0x110b1106,0x1143], /* choseong ieung + mieum = ieung-mieum */
		[0x110b1107,0x1144], /* choseong ieung + bieub = ieung-bieub */
		[0x110b1109,0x1145], /* choseong ieung + sieus = ieung-sieus */
		[0x110b110b,0x1147], /* choseong ieung + ieung = ssangieung */
		[0x110b110c,0x1148], /* choseong ieung + jieuj = ieung-jieuj */
		[0x110b110e,0x1149], /* choseong ieung + chieuch = ieung-chieuch */
		[0x110b1110,0x114a], /* choseong ieung + tieut = ieung-tieut */
		[0x110b1111,0x114b], /* choseong ieung + pieup = ieung-pieup */
		[0x110b1112,0xa977], /* choseong ieung + hieuh = ieung-hieuh */
		[0x110b1140,0x1146], /* choseong ieung + bansieus = ieung-bansieus */
		[0x110c110b,0x114d], /* choseong jieuj + ieung = jieuj-ieung */
		[0x110c110c,0x110d], /* choseong jieuj + jieuj = ssangjieuj */
		[0x110d1112,0xa978], /* choseong ssangjieuj + hieuh = ssangjieuj-hieuh */
		[0x110e110f,0x1152], /* choseong chieuch + kieuk = chieuch-kieuk */
		[0x110e1112,0x1153], /* choseong chieuch + hieuh = chieuch-hieuh */
		[0x11101110,0xa979], /* choseong tieut + tieut = ssangtieut */
		[0x11111107,0x1156], /* choseong pieup + bieub = pieup-bieub */
		[0x1111110b,0x1157], /* choseong pieup + ieung = gabyeounpieup */
		[0x11111112,0xa97a], /* choseong pieup + hieuh = pieup-hieuh */
		[0x11121109,0xa97b], /* choseong hieuh + sieus = hieuh-sieus */
		[0x11121112,0x1158], /* choseong hieuh + hieuh = ssanghieuh */
		[0x11211100,0x1122], /* choseong bieub-sieus + gieug = bieub-sieus-gieug */
		[0x11211103,0x1123], /* choseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11211107,0x1124], /* choseong bieub-sieus + bieub = bieub-sieus-bieub */
		[0x11211109,0x1125], /* choseong bieub-sieus + sieus = bieub-ssangsieus */
		[0x1121110c,0x1126], /* choseong bieub-sieus + jieuj = bieub-sieus-jieuj */
		[0x11211110,0xa972], /* choseong bieub-sieus + tieut = bieub-sieus-tieut */
		[0x11321100,0x1133], /* choseong sieus-bieub + gieug = sieus-bieub-gieug */
		[0x113c113c,0x113d], /* choseong chidueumsieus + chidueumsieus = chidueumssangsieus */
		[0x113e113e,0x113f], /* choseong jeongchieumsieus + jeongchieumsieus = jeongchieumssangsieus */
		[0x114e114e,0x114f], /* choseong chidueumjieuj + chidueumjieuj = chidueumssangjieuj */
		[0x11501150,0x1151], /* choseong jeongchieumjieuj + jeongchieumjieuj = jeongchieumssangjieuj */
		[0x11591159,0xa97c], /* choseong yeorinhieuh + yeorinhieuh = ssangyeorinhieuh */
		[0x11611161,0x119e], /* jungseong a + a  = arae-a */
		[0x11611169,0x1176], /* jungseong a + o  = a-o */
		[0x1161116e,0x1177], /* jungseong a + u  = a-u */
		[0x11611173,0x11a3], /* jungseong a + eu = a-eu */
		[0x11611175,0x1162], /** jungseong a + i  = ae */
		[0x11631169,0x1178], /* jungseong ya + o = ya-o */
		[0x1163116d,0x1179], /* jungseong ya + yo = ya-yo */
		[0x1163116e,0x11a4], /* jungseong ya + u = ya-u */
		[0x11631175,0x1164], /* jungseong ya + i = yae */
		[0x11651169,0x117a], /* jungseong eo + o = eo-o */
		[0x1165116e,0x117b], /* jungseong eo + u = eo-u */
		[0x11651173,0x117c], /* jungseong eo + eu = eo-eu */
		[0x11651175,0x1166], /** jungseong eo + i = e */
		[0x11671163,0x11a5], /* jungseong yeo + ya = yeo-ya */
		[0x11671169,0x117d], /* jungseong yeo + o = yeo-o */
		[0x1167116e,0x117e], /* jungseong yeo + u = yeo-u */
		[0x11671175,0x1168], /* jungseong yeo + i = ye */
		[0x11691161,0x116a], /* jungseong o + a   = wa */
		[0x11691162,0x116b], /* jungseong o + ae  = wae */
		[0x11691163,0x11a6], ///* jungseong o + ya  = o-ya */
		[0x11691164,0x11a7], /* jungseong o + yae = o-yae */
		[0x11691165,0x117f], /* jungseong o + eo  = o-eo */
		[0x11691166,0x1180], /* jungseong o + e   = o-e */
		[0x11691167,0xd7b0], ///* jungseong o + yeo  = o-yeo */
		[0x11691168,0x1181], /* jungseong o + ye  = o-ye */
		[0x11691169,0x1182], /* jungseong o + o   = o-o */
		[0x1169116e,0x1183], /* jungseong o + u   = o-u */
		[0x11691175,0x116c], /* jungseong o + i   = oe */
		[0x116a1175,0x116b], /** jungseong wa + i   = wae */
		[0x116d1161,0xd7b2], /* jungseong yo + a   = yo-a */
		[0x116d1162,0xd7b3], /* jungseong yo + ae  = yo-ae */
		[0x116d1163,0x1184], /* jungseong yo + ya  = yo-ya */
		[0x116d1164,0x1185], /* jungseong yo + yae = yo-yae */
		[0x116d1165,0xd7b4], /* jungseong yo + eo  = yo-eo */
		[0x116d1167,0x1186], /* jungseong yo + yeo = yo-yeo */
		[0x116d1169,0x1187], /* jungseong yo + o   = yo-o */
		[0x116d1175,0x1188], /* jungseong yo + i   = yo-i */
		[0x116e1161,0x1189], /* jungseong u + a    = u-a */
		[0x116e1162,0x118a], /* jungseong u + ae   = u-ae */
		[0x116e1165,0x116f], /* jungseong u + eo   = weo */
		[0x116e1166,0x1170], /* jungseong u + e    = we */
		[0x116e1167,0xd7b5], /* jungseong u + yeo  = u-yeo */
		[0x116e1168,0x118c], /* jungseong u + ye   = u-ye */
		[0x116e116e,0x118d], /* jungseong u + u    = u-u */
		[0x116e1175,0x1171], /* jungseong u + i    = wi */
		[0x116e117c,0x118b], /* jungseong u + eo-eu = u-eo-eu */
		[0x116ed7c4,0xd7b6], /* jungseong u + i-i  = u-i-i */
		[0x116f1173,0x118b], /* jungseong weo + eu = u-eo-eu */
		[0x116f1175,0x1170], /** jungseong weo + i  = we */
		[0x11711175,0xd7b6], /* jungseong wi + i   = u-i-i */
		[0x11721161,0x118e], /* jungseong yu + a   = yu-a */
		[0x11721162,0xd7b7], /* jungseong yu + ae  = yu-ae */
		[0x11721165,0x118f], /* jungseong yu + eo  = yu-eo */
		[0x11721166,0x1190], /* jungseong yu + e   = yu-e */
		[0x11721167,0x1191], /* jungseong yu + yeo = yu-yeo */
		[0x11721168,0x1192], /* jungseong yu + ye  = yu-ye */
		[0x11721169,0xd7b8], /* jungseong yu + o   = yu-o */
		[0x1172116e,0x1193], /* jungseong yu + u   = yu-u */
		[0x11721175,0x1194], /* jungseong yu + i   = yu-i */
		[0x11731161,0xd7b9], /* jungseong eu + a   = eu-a */
		[0x11731165,0xd7ba], /* jungseong eu + eo  = eu-eo */
		[0x11731166,0xd7bb], /* jungseong eu + e   = eu-e */
		[0x11731169,0xd7bc], /* jungseong eu + o    = eu-o */
		[0x1173116e,0x1195], /* jungseong eu + u   = eu-u */
		[0x11731173,0x1196], /* jungseong eu + eu  = eu-eu */
		[0x11731175,0x1174], /* jungseong eu + i   = yi */
		[0x1174116e,0x1197], /* jungseong yi + u   = yi-u */
		[0x11751161,0x1198], /* jungseong i + a    = i-a */
		[0x11751163,0x1199], /* jungseong i + ya   = i-ya */
		[0x11751164,0xd7be], /* jungseong i + yae  = i-yae */
		[0x11751167,0xd7bf], /* jungseong i + yeo  = i-yeo */
		[0x11751168,0xd7c0], /* jungseong i + ye   = i-ye */
		[0x11751169,0x119a], /* jungseong i + o    = i-o */
		[0x1175116d,0xd7c2], /* jungseong i + yo   = i-yo */
		[0x1175116e,0x119b], /* jungseong i + u    = i-u */
		[0x11751172,0xd7c3], /* jungseong i + yu   = i-yu */
		[0x11751173,0x119c], /* jungseong i + eu   = i-eu */
		[0x11751175,0xd7c4], /* jungseong i + i    = i-i */
		[0x11751178,0xd7bd], /* jungseong i + ya-o = i-ya-o */
		[0x1175119e,0x119d], /* jungseong i + araea = i-araea */
		[0x11821175,0xd7b1], /* jungseong o-o + i  = o-o-i */
		[0x11991169,0xd7bd], /* jungseong i-ya + o = i-ya-o */
		[0x119a1175,0xd7c1], /* jungseong i-o + i  = i-o-i */
		[0x119e1161,0xd7c5], /* jungseong araea + a = araea-a */
		[0x119e1165,0x119f], /* jungseong araea + eo = araea-eo */
		[0x119e1166,0xd7c6], /* jungseong araea + e = araea-e */
		[0x119e116e,0x11a0], /* jungseong araea + u = araea-u */
		[0x119e1175,0x11a1], /* jungseong araea + i = araea-i */
		[0x119e119e,0x11a2], /* jungseong araea + araea = ssangaraea */
		[0x11a811a8,0x11a9], /* jongseong gieug + gieug = ssanggieug */
		[0x11a811ab,0x11fa], /* jongseong gieug + nieun = gieug-nieun */
		[0x11a811af,0x11c3], /* jongseong gieug + lieul = gieug-lieul */
		[0x11a811b8,0x11fb], /* jongseong gieug + bieub = gieug-bieub */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11a811be,0x11fc], /* jongseong gieug + chieuch = gieug-chieuch */
		[0x11a811bf,0x11fd], /* jongseong gieug + kieuk = gieug-kieuk */
		[0x11a811c2,0x11fe], /* jongseong gieug + hieuh = gieug-hieuh */
		[0x11a811e7,0x11c4], /* jongseong gieug + sieus-gieug = gieug-sieus-gieug */
		[0x11aa11a8,0x11c4], /* jongseong gieug-sieus + gieug = gieug-sieus-gieug */
		[0x11ab11a8,0x11c5], /* jongseong nieun + gieug = nieun-gieug */
		[0x11ab11ab,0x11ff], /* jongseong nieun + nieun = ssangnieun */
		[0x11ab11ae,0x11c6], /* jongseong nieun + dieud = nieun-dieud */
		[0x11ab11af,0xd7cb], /* jongseong nieun + lieul = nieun-lieul */
		[0x11ab11ba,0x11c7], /* jongseong nieun + sieus = nieun-sieus */
		[0x11ab11bd,0x11ac], /* jongseong nieun + jieuj = nieun-jieuj */
		[0x11ab11be,0xd7cc], /* jongseong nieun + chieuch = nieun-chieuch */
		[0x11ab11c0,0x11c9], /* jongseong nieun + tieut = nieun-tieut */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11ab11eb,0x11c8], /* jongseong nieun + bansieus = nieun-bansieus */
		[0x11ae11a8,0x11ca], /* jongseong dieud + gieug = dieud-gieug */
		[0x11ae11ae,0xd7cd], /* jongseong dieud + dieud = ssangdieud */
		[0x11ae11af,0x11cb], /* jongseong dieud + lieul = dieud-lieul */
		[0x11ae11b8,0xd7cf], /* jongseong dieud + bieub = dieud-bieub */
		[0x11ae11ba,0xd7d0], /* jongseong dieud + sieus = dieud-sieus */
		[0x11ae11bd,0xd7d2], /* jongseong dieud + jieuj = dieud-jieuj */
		[0x11ae11be,0xd7d3], /* jongseong dieud + chieuch = dieud-chieuch */
		[0x11ae11c0,0xd7d4], /* jongseong dieud + tieut = dieud-tieut */
		[0x11ae11e7,0xd7d1], /* jongseong dieud + sieus-gieug = dieud-sieus-gieug */
		[0x11aed7cf,0xd7ce], /* jongseong dieud + dieud-bieub = ssangdieud-bieub */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11a9,0xd7d5], /* jongseong lieul + ssanggieug  = lieul-ssanggieug */
		[0x11af11aa,0x11cc], /* jongseong lieul + gieug-sieus  = lieul-gieug-sieus */
		[0x11af11ab,0x11cd], /* jongseong lieul + nieun = lieul-nieun */
		[0x11af11ae,0x11ce], /* jongseong lieul + dieud = lieul-dieud */
		[0x11af11af,0x11d0], /* jongseong lieul + lieul = ssanglieul */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b2], /* jongseong lieul + bieub = lieul-bieub */
		[0x11af11b9,0x11d3], /* jongseong lieul + bieub-sieus = lieul-bieub-sieus */
		[0x11af11ba,0x11b3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11af11bb,0x11d6], /* jongseong lieul + ssangsieus  = lieul-ssangsieus */
		[0x11af11bc,0xd7dd], /* jongseong lieul + ieung = gabyeounlieul */
		[0x11af11bf,0x11d8], /* jongseong lieul + kieuk = lieul-kieuk */
		[0x11af11c0,0x11b4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11af11c1,0x11b5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11af11d8,0xd7d7], /* jongseong lieul + lieul-kieuk = ssanglieul-kieuk */
		[0x11af11da,0x11d1], /* jongseong lieul + mieum-gieug = lieul-mieum-gieug */
		[0x11af11dd,0x11d2], /* jongseong lieul + mieum-sieus = lieul-mieum-sieus */
		[0x11af11e1,0xd7d8], /* jongseong lieul + mieum-hieuh = lieul-mieum-hieuh */
		[0x11af11e4,0xd7da], /* jongseong lieul + bieub-pieup = lieul-bieub-pieup */
		[0x11af11e5,0x11d4], /* jongseong lieul + bieub-hieuh = lieul-bieub-hieuh */
		[0x11af11e6,0x11d5], /* jongseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11af11eb,0x11d7], /* jongseong lieul + bansieus = lieul-bansieus */
		[0x11af11f0,0xd7db], /* jongseong lieul + yesieung = lieul-yesieung */
		[0x11af11f9,0x11d9], /* jongseong lieul + yeorinhieuh = lieul-yeorinhieuh */
		[0x11af11fe,0xd7d6], /* jongseong lieul + gieug-hieuh = lieul-gieug-hieuh */
		[0x11afd7e3,0xd7d9], /* jongseong lieul + bieub-dieud = lieul-bieub-dieud */
		[0x11b011a8,0xd7d5], /* jongseong lieul-gieug + gieug = lieul-ssanggieug */
		[0x11b011ba,0x11cc], /* jongseong lieul-gieug + sieus = lieul-gieug-sieus */
		[0x11b011c2,0xd7d6], /* jongseong lieul-gieug + hieuh = lieul-gieug-hieuh */
		[0x11b111a8,0x11d1], /* jongseong lieul-mieum + gieug = lieul-mieum-gieug */
		[0x11b111ba,0x11d2], /* jongseong lieul-mieum + sieus = lieul-mieum-sieus */
		[0x11b111c2,0xd7d8], /* jongseong lieul-mieum + hieuh = lieul-mieum-hieuh */
		[0x11b211ae,0xd7d9], /* jongseong lieul-bieub + dieud = lieul-bieub-dieud */
		[0x11b211ba,0x11d3], /* jongseong lieul-bieub + sieus = lieul-bieub-sieus */
		[0x11b211bc,0x11d5], /* jongseong lieul-bieub + ieung = lieul-gabyeounbieub */
		[0x11b211c1,0xd7da], /* jongseong lieul-bieub + pieup = lieul-bieub-pieup */
		[0x11b211c2,0x11d4], /* jongseong lieul-bieub + hieuh = lieul-bieub-hieuh */
		[0x11b311ba,0x11d6], /* jongseong lieul-sieus + sieus = lieul-ssangsieus */
		[0x11b711a8,0x11da], /* jongseong mieum + gieug = mieum-gieug */
		[0x11b711ab,0xd7de], /* jongseong mieum + nieun = mieum-nieun */
		[0x11b711af,0x11db], /* jongseong mieum + lieul = mieum-lieul */
		[0x11b711b7,0xd7e0], /* jongseong mieum + mieum = ssangmieum */
		[0x11b711b8,0x11dc], /* jongseong mieum + bieub = mieum-bieub */
		[0x11b711b9,0xd7e1], /* jongseong mieum + bieub-sieus = mieum-bieub-sieus */
		[0x11b711ba,0x11dd], /* jongseong mieum + sieus = mieum-sieus */
		[0x11b711bb,0x11de], /* jongseong mieum + ssangsieus  = mieum-ssangsieus */
		[0x11b711bc,0x11e2], /* jongseong mieum + ieung = gabyeounmieum */
		[0x11b711bd,0xd7e2], /* jongseong mieum + jieuj = mieum-jieuj */
		[0x11b711be,0x11e0], /* jongseong mieum + chieuch = mieum-chieuch */
		[0x11b711c2,0x11e1], /* jongseong mieum + hieuh = mieum-hieuh */
		[0x11b711eb,0x11df], /* jongseong mieum + bansieus = mieum-bansieus */
		[0x11b711ff,0xd7df], /* jongseong mieum + ssangnieun  = mieum-ssangnieun */
		[0x11b811ae,0xd7e3], /* jongseong bieub + dieud = bieub-dieud */
		[0x11b811af,0x11e3], /* jongseong bieub + lieul = bieub-lieul */
		[0x11b811b5,0xd7e4], /* jongseong bieub + lieul-pieup = bieub-lieul-pieup */
		[0x11b811b7,0xd7e5], /* jongseong bieub + mieum = bieub-mieum */
		[0x11b811b8,0xd7e6], /* jongseong bieub + bieub = ssangbieub */
		[0x11b811ba,0x11b9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11b811bc,0x11e6], /* jongseong bieub + ieung = gabyeounbieub */
		[0x11b811bd,0xd7e8], /* jongseong bieub + jieuj = bieub-jieuj */
		[0x11b811be,0xd7e9], /* jongseong bieub + chieuch = bieub-chieuch */
		[0x11b811c1,0x11e4], /* jongseong bieub + pieup = bieub-pieup */
		[0x11b811c2,0x11e5], /* jongseong bieub + hieuh = bieub-hieuh */
		[0x11b811e8,0xd7e7], /* jongseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11b911ae,0xd7e7], /* jongseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11ba11a8,0x11e7], /* jongseong sieus + gieug = sieus-gieug */
		[0x11ba11ae,0x11e8], /* jongseong sieus + dieud = sieus-dieud */
		[0x11ba11af,0x11e9], /* jongseong sieus + lieul = sieus-lieul */
		[0x11ba11b7,0xd7ea], /* jongseong sieus + mieum = sieus-mieum */
		[0x11ba11b8,0x11ea], /* jongseong sieus + bieub = sieus-bieub */
		[0x11ba11ba,0x11bb], /* jongseong sieus + sieus = ssangsieus */
		[0x11ba11bd,0xd7ef], /* jongseong sieus + jieuj = sieus-jieuj */
		[0x11ba11be,0xd7f0], /* jongseong sieus + chieuch = sieus-chieuch */
		[0x11ba11c0,0xd7f1], /* jongseong sieus + tieut = sieus-tieut */
		[0x11ba11c2,0xd7f2], /* jongseong sieus + hieuh = sieus-hieuh */
		[0x11ba11e6,0xd7eb], /* jongseong sieus + gabyeounbieub = sieus-gabyeounbieub */
		[0x11ba11e7,0xd7ec], /* jongseong sieus + sieus-gieug = ssangsieus-gieug */
		[0x11ba11e8,0xd7ed], /* jongseong sieus + sieus-dieud = ssangsieus-dieud */
		[0x11ba11eb,0xd7ee], /* jongseong sieus + bansieus = sieus-bansieus */
		[0x11bb11a8,0xd7ec], /* jongseong ssangsieus + gieug = ssangsieus-gieug */
		[0x11bb11ae,0xd7ed], /* jongseong ssangsieus + dieud = ssangsieus-dieud */
		[0x11bd11b8,0xd7f7], /* jongseong jieuj + bieub = jieuj-bieub */
		[0x11bd11bd,0xd7f9], /* jongseong jieuj + jieuj = ssangjieuj */
		[0x11bdd7e6,0xd7f8], /* jongseong jieuj + ssangbieub = jieuj-ssangbieub */
		[0x11c111b8,0x11f3], /* jongseong pieup + bieub = pieup-bieub */
		[0x11c111ba,0xd7fa], /* jongseong pieup + sieus = pieup-sieus */
		[0x11c111bc,0x11f4], /* jongseong pieup + ieung = gabyeounpieup */
		[0x11c111c0,0xd7fb], /* jongseong pieup + tieut = pieup-tieut */
		[0x11c211ab,0x11f5], /* jongseong hieuh + nieun = hieuh-nieun */
		[0x11c211af,0x11f6], /* jongseong hieuh + lieul = hieuh-lieul */
		[0x11c211b7,0x11f7], /* jongseong hieuh + mieum = hieuh-mieum */
		[0x11c211b8,0x11f8], /* jongseong hieuh + bieub = hieuh-bieub */
		[0x11ce11c2,0x11cf], /* jongseong lieul-dieud + hieuh = lieul-dieud-hieuh */
		[0x11d011bf,0xd7d7], /* jongseong ssanglieul + kieuk = ssanglieul-kieuk */
		[0x11d911c2,0xd7dc], /* jongseong lieul-yeorinhieuh + hieuh = lieul-yeorinhieuh-hieuh */
		[0x11dc11ba,0xd7e1], /* jongseong mieum-bieub + sieus = mieum-bieub-sieus */
		[0x11dd11ba,0x11de], /* jongseong mieum-sieus + sieus = mieum-ssangsieus */
		[0x11e311c1,0xd7e4], /* jongseong bieub-lieul + pieup = bieub-lieul-pieup */
		[0x11ea11bc,0xd7eb], /* jongseong sieus-bieub + ieung = sieus-gabyeounbieub */
		[0x11eb11b8,0xd7f3], /* jongseong bansieus + bieub = bansieus-bieub */
		[0x11eb11e6,0xd7f4], /* jongseong bansieus + gabyeounbieub = bansieus-gabyeounbieub */
		[0x11ec11a8,0x11ed], /* jongseong ieung-gieug + gieug = ieung-ssanggieug */
		[0x11f011a8,0x11ec], /* jongseong yesieung + gieug = yesieung-gieug */
		[0x11f011a9,0x11ed], /* jongseong yesieung + ssanggieug = yesieung-ssanggieug */
		[0x11f011b7,0xd7f5], /* jongseong yesieung + mieum = yesieung-mieum */
		[0x11f011ba,0x11f1], /* jongseong yesieung + sieus = yesieung-sieus */
		[0x11f011bf,0x11ef], /* jongseong yesieung + kieuk = yesieung-kieuk */
		[0x11f011c2,0xd7f6], /* jongseong yesieung + hieuh = yesieung-hieuh */
		[0x11f011eb,0x11f2], /* jongseong yesieung + bansieus = yesieung-bansieus */
		[0x11f011f0,0x11ee], /* jongseong yesieung + yesieung = ssangyesieung */
		[0xa9641100,0xa965], /* choseong lieul-gieug + gieug  = lieul-ssanggieug */
		[0xa9661103,0xa967], /* choseong lieul-dieud + dieud  = lieul-ssangdieud */
		[0xa9691107,0xa96a], /* choseong lieul-bieub + bieub  = lieul-ssangbieub */
		[0xa969110b,0xa96b], /* choseong lieul-bieub + ieung  = lieul-gabyeounbieub */
		[0xd7c51161,0x11a2], /* jungseong araea-a + a = ssangaraea */
		[0xd7cd11b8,0xd7ce], /* jongseong ssangdieud + bieub  = ssangdieud-bieub */
		[0xd7d011a8,0xd7d1], /* jongseong dieud-sieus + gieug = dieud-sieus-gieug */
		[0xd7de11ab,0xd7df], /* jongseong mieum-nieun + nieun = mieum-ssangnieun */
		[0xd7f311bc,0xd7f4], /* jongseong bansieus-bieub + ieung = bansieus-gabyeounbieub */
		[0xd7f711b8,0xd7f8]  /* jongseong jieuj-bieub + bieub = jieuj-ssangbieub */
	];

var K3_3_2015 = [
    /* choseong */
    [ 0x1100110b, 0x1101 ], /* choseong  kiyeok + ieung (ㄱ + ㅇ)  = ssangkiyeok   */
    [ 0x1100110c, 0x110d ], /* choseong  kiyeok  + cieuc (ㄱ + ㅈ)  = ssangcieuc    */
    [ 0x11031106, 0x1104 ], /* choseong  tikeut + mieum (ㄷ + ㅁ) = ssangtikeut   */
    [ 0x11061103, 0x1104 ], /* choseong  mieum + tikeut (ㅁ + ㄷ) = ssangtikeut   */
    [ 0x1107110c, 0x1108 ], /* choseong  pieup  + cieuc (ㅂ + ㅈ)  = ssangpieup    */
    [ 0x11091112, 0x110a ], /* choseong  sios   + hieuh (ㅅ + ㅎ)   = ssangsios     */
    [ 0x110b1100, 0x1101 ], /* choseong  ieung + kiyeok (ㅇ + ㄱ) = ssangkiyeok   */
    [ 0x110c1100, 0x110d ], /* choseong  cieuc  + kiyeok (ㅈ + ㄱ)  = ssangcieuc    */
    [ 0x110c1107, 0x1108 ], /* choseong  cieuc  + pieup (ㅈ + ㅂ)  = ssangpieup    */
    [ 0x11121109, 0x110a ], /* choseong  hieuh   + sios (ㅎ + ㅅ)   = ssangsios     */
    /* jungseong */
    /* jongseong */
    [ 0x11a811af, 0x11b0 ], /* jongseong kiyeok  + rieul (ㄱ + ㄹ) = rieul-kiyeok (ㄺ) */
    [ 0x11a811B7,0x11a9 ], /* jongseong kiyeok + mieum (ㄱ + ㅁ)  = ssangekiyeok (ㄲ) */
    [ 0x11B711a8,0x11a9 ], /* jongseong mieum + kiyeok (ㅁ + ㄱ)  = ssangekiyeok (ㄲ) */
    [ 0x11b711af, 0x11b1 ], /* jongseong mieum  + rieul (ㅁ + ㄹ)  = rieul-mieum (ㄻ)  */
    [ 0x11b811af, 0x11b2 ], /* jongseong pieup  + rieul (ㅂ + ㄹ)  = rieul-pieup (ㄼ)  */
    [ 0x11ba11a8, 0x11aa ], /* jongseong sios + kiyeok (ㅅ + ㄱ)   = kiyeok-sois (ㄳ)  */
    [ 0x11ba11af, 0x11b3 ], /* jongseong sios  + rieul (ㅅ + ㄹ)   = rieul-sios (ㄽ)   */
    [ 0x11ba11b8, 0x11b9 ], /* jongseong sios  + pieup (ㅅ + ㅂ)   = pieup-sios (ㅄ)   */
    [ 0x11bd11ab, 0x11ac ], /* jongseong cieuc  + nieun (ㅈ + ㄴ)  = nieun-cieuc (ㄵ)  */
    [ 0x11c011af, 0x11b4 ], /* jongseong thieuth  + rieul (ㅌ + ㄹ) = rieul-thieuth (ㄾ) */
    [ 0x11c111af, 0x11b5 ], /* jongseong phieuph  + rieul (ㅍ + ㄹ) = rieul-phieuph (ㄿ) */
    [ 0x11c211ab, 0x11ad ], /* jongseong hieuh  + nieun (ㅎ + ㄴ)  = nieun-hieuh (ㄶ)  */
    [ 0x11c211af, 0x11b6 ] /* jongseong hieuh  + rieul (ㅎ + ㄹ)  = rieul-hieuh (ㅀ)  */
];

var K3_3_2015_yet = [
    /* choseong */
    /* jungseong */
    /* jongseong */
    [ 0x11bc11a8, 0x11ec ], /* jongseong ieung    + kiyeok       = yesieung-kiyeok */
    [ 0x11bc11a9, 0x11ed ], /* jongseong ieung    + ssangkiyeok  = yesieung-ssangkiyeok */
    [ 0x11bc11b7, 0xd7f5 ], /* jongseong ieung    + mieum        = yesieung-mieum */
    [ 0x11bc11ba, 0x11f1 ], /* jongseong ieung    + sios         = yesieung-sios */
    [ 0x11bc11bc, 0x11ee ], /* jongseong ieung    + ieung        = ssangyesieung */
    [ 0x11bc11bf, 0x11ef ], /* jongseong ieung    + khieukh      = yesieung-khieukh */
    [ 0x11bc11c2, 0xd7f6 ], /* jongseong ieung    + hieuh        = yesieung-hieuh */
    [ 0x11bc11eb, 0x11f2 ], /* jongseong ieung    + pansios      = yesieung-pansios */
    [ 0x11bc11f0, 0x11ee ], /* jongseong ieung    + yesieung     = ssangyesieung */
    [ 0x11f011bc, 0x11ee ], /* jongseong yesieung + ieung        = ssangyesieung */
];

var K3_3sun_2014 = [
    [ 0x11621162,0x1164 ], /* jungseong ae + ae = yae */ // 2014
    [ 0x11A911A8,0x11BF ], /* jongseong ssangkiyeok + kiyeok = khieukh */ // 2014
    [ 0x11AB11AB,0x11C0 ], /* jongseong nieun + nieun = thieuth */ // 2014
    [ 0x11AB11BA,0x11AC ], /* jongseong nieun + sios = nieun-cieuc */ // 2014
    [ 0x11AF11AB,0x11B4 ], /* jongseong rieul + nieun = rieul-thieuth */ //2014
    [ 0x11AF11AF,0x11BE ], /* jongseong rieul + rieul = chieuch */ //2014
    [ 0x11B111B7,0x11B5 ], /* jongseong rieul-mieum + mieum = rieul-phieuph */ // 2014
    [ 0x11B711B7,0x11C1 ], /* jongseong mieum + mieum = phieuph */ // 2014
    [ 0x11ba11ba, 0x11BD ], /* jongseong sios + sios = cieuc */ // 2014
    [ 0x11BC11BC,0x11AE ] /* jongseong ieung + ieung = tikeut */ // 2014
];

var K3_3shin_2015 = [
    /* choseong */
    [ 0x1100110b, 0x1101 ], /* choseong  kiyeok + ieung (ㄱ + ㅇ)  = ssangkiyeok   */
    [ 0x1100110c, 0x110d ], /* choseong  kiyeok  + cieuc (ㄱ + ㅈ)  = ssangcieuc    */
    [ 0x11031106, 0x1104 ], /* choseong  tikeut + mieum (ㄷ + ㅁ) = ssangtikeut   */
    [ 0x11061103, 0x1104 ], /* choseong  mieum + tikeut (ㅁ + ㄷ) = ssangtikeut   */
    [ 0x1107110c, 0x1108 ], /* choseong  pieup  + cieuc (ㅂ + ㅈ)  = ssangpieup    */
    [ 0x11091112, 0x110a ], /* choseong  sios   + hieuh (ㅅ + ㅎ)   = ssangsios     */
    [ 0x110b1100, 0x1101 ], /* choseong  ieung + kiyeok (ㅇ + ㄱ) = ssangkiyeok   */
    [ 0x110c1100, 0x110d ], /* choseong  cieuc  + kiyeok (ㅈ + ㄱ)  = ssangcieuc    */
    [ 0x110c1107, 0x1108 ], /* choseong  cieuc  + pieup (ㅈ + ㅂ)  = ssangpieup    */
    [ 0x11121109, 0x110a ], /* choseong  hieuh   + sios (ㅎ + ㅅ)   = ssangsios     */
    /* jungseong */
    /* jongseong */
    [ 0x11a811af, 0x11b0 ], /* jongseong kiyeok  + rieul (ㄱ + ㄹ) = rieul-kiyeok (ㄺ) */
    [ 0x11a811b8, 0x11a9 ], /* jongseong kiyeok + pieup (ㄱ + ㅂ)  = ssangekiyeok (ㄲ) */
    [ 0x11b711af, 0x11b1 ], /* jongseong mieum  + rieul (ㅁ + ㄹ)  = rieul-mieum (ㄻ)  */
    [ 0x11b811a8, 0x11a9 ], /* jongseong pieup + kiyeok (ㅂ + ㄱ)  = ssangekiyeok (ㄲ) */
    [ 0x11b811af, 0x11b2 ], /* jongseong pieup  + rieul (ㅂ + ㄹ)  = rieul-pieup (ㄼ)  */
    [ 0x11ba11a8, 0x11aa ], /* jongseong sios + kiyeok (ㅅ + ㄱ)   = kiyeok-sois (ㄳ)  */
    [ 0x11ba11af, 0x11b3 ], /* jongseong sios  + rieul (ㅅ + ㄹ)   = rieul-sios (ㄽ)   */
    [ 0x11ba11b8, 0x11b9 ], /* jongseong sios  + pieup (ㅅ + ㅂ)   = pieup-sios (ㅄ)   */
    [ 0x11bd11ab, 0x11ac ], /* jongseong cieuc  + nieun (ㅈ + ㄴ)  = nieun-cieuc (ㄵ)  */
    [ 0x11c011af, 0x11b4 ], /* jongseong thieuth  + rieul (ㅌ + ㄹ) = rieul-thieuth (ㄾ) */
    [ 0x11c111af, 0x11b5 ], /* jongseong phieuph  + rieul (ㅍ + ㄹ) = rieul-phieuph (ㄿ) */
    [ 0x11c211ab, 0x11ad ], /* jongseong hieuh  + nieun (ㅎ + ㄴ)  = nieun-hieuh (ㄶ)  */
    [ 0x11c211af, 0x11b6 ] /* jongseong hieuh  + rieul (ㅎ + ㄹ)  = rieul-hieuh (ㅀ)  */
];


    var return_array = [];
    var array_default = [];
    var array_specific = [];
    //alert("combine in");
    // array
    if (type.substr(-3) === 'yet') {
        array_default = hangeul_combination_table_full;
    } else {
        array_default = hangeul_combination_table_default;
        if (type.substr(0, 1) === '3') {
            if (type.substr(0, 2) === '3-') {
                if (type.substr(0, 3) === '3-2') {
                    if (type === '3-2015') {
                        array_specific = K3_3_2015;
                    }  else if (type === '3-2015-yet') {
                        array_specific = K3_3_2015_yet;
                    } else {
                        //array_specific = hangeul_combination_table_default;
                    }
                } else if (type.substr(0, 3) === '3-9') {
                    if (type === '3-90') {
                        //array_specific = hangeul_combination_table_default;
                    } else if (type === '3-93-yet') {
                        //array_specific = hangeul_combination_table_default;
                    } else {
                        //array_specific = hangeul_combination_table_default;
                    }
                } else {
                    //alert("K3_3_90");
                    //array_specific = hangeul_combination_table_default;
                }
            } else if (type.substr(0, 4) === '3sun-2014') {
                array_specific = K3_3sun_2014;
            } else {
                if (type === '3shin-2015') {
                    array_specific = K3_3shin_2015;
                } else {
                    //array_specific = hangeul_combination_table_default;
                }
            }
        } else {//K2_kps9256
            if (type === '2-kps9256') {
                //array_specific = hangeul_combination_table_default;
            } else {
                //alert("K2_ksx5002");
                //array_specific = hangeul_combination_table_default;    
            }
        }
    }

    return_array[0] = array_default;
    return_array[1] = array_specific;
    //alert(return_array.length);
    return return_array;

}
