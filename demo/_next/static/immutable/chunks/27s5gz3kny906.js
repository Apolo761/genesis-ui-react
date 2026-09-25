(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61998,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(88653),o=e.i(32181),i=e.i(72328);let s={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},n={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},l=(n.md.dark,n.md.light,{colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}}}),c={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]}},b={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}},p={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]},d={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}}};function f(e,a){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${a})`;let t=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return t?`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${a})`:e}function g(e,a){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*a).toFixed(2)})`;let t=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return t?`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${a.toFixed(2)})`:e}let m=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],x=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],u=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],$=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],h=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function z(e,a,r,t,o,i,s,n){let l;return`radial-gradient(ellipse calc(${a}px * var(--bw${t}-${n}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r}px * var(--bh${t}-${n}) * var(--bgh-${n}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${i} + var(--bx${t}-${n})) calc(${s} + var(--by${t}-${n})), ${l=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),`rgba(${l?`${l[1]}, ${l[2]}, ${l[3]}`:"255, 255, 255"}, var(--bop-${o}-${n}))`}, transparent)`}function y(e,a,r){let t=l[a].border;return e.map(e=>{let a=t[e.ci],[o,i]=a.pos.split(" ");return z(a.color,e.w,e.h,e.region,e.quad,e.x??o,e.y??i,r)}).join(`,
    `)}function v(e,a,r){let t=l[a].border,o=+r.toFixed(3);return e.map(e=>{let a=t[e.ci],[r,i]=a.pos.split(" "),s=e.x??r,n=e.y??i,l=a.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),c=l?`${l[1]}, ${l[2]}, ${l[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${e.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${e.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${s} ${n}, rgba(${c}, ${o}), transparent)`}).join(`,
    `)}function k(e){return`
[data-beam="${e}"][data-paused],
[data-beam="${e}"][data-paused]::after,
[data-beam="${e}"][data-paused]::before,
[data-beam="${e}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function w(e){let a=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"].map(a=>`@property --${a}-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`).join(`

`),r=["bx1","by1","bx2","by2","bx3","by3"].map(a=>`@property --${a}-${e} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`).join(`

`);return`${a}

${r}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`}function W(e,a,r){let t="dark"===a,o=r/2.3;return"pulse-inner"===e?{sp:.28,dr:t?33:40,op:t?.48:.45,gh:t?.34:.22,bs:(t?1.9:2.6)*o,ss:(t?2.6:4.6)*o,ghs:(t?2.4:5.5)*o,huePeriod:16}:{sp:t?.28:.36,dr:t?14:19,op:.46*!!t,gh:t?.16:.58,bs:(t?2.3:3.7)*o,ss:(t?6.4:4.6)*o,ghs:(t?2.4:3.8)*o,huePeriod:14}}function X(e,a,r){return`  animation: ${a}-${e} ${r}s ease forwards;`}let Y=new Set,H=null,j=0,F=1e3/30-2,O=2*Math.PI;function N(e){return(1-Math.cos(O*e))/2}function _(e){if(H=requestAnimationFrame(_),e-j<F)return;j=e;let a=e/1e3;Y.forEach(({el:e,config:r})=>{for(let t of r.oscillators){let r=(a-t.delay)/t.period,o=t.a+(t.b-t.a)*N(r);e.style.setProperty(t.prop,"px"===t.unit?`${o.toFixed(2)}px`:o.toFixed(4))}if(r.hue){let{prop:t,range:o,period:i,continuous:s}=r.hue,n=s?a/i%1*o:-o+2*o*N(a/i);e.style.setProperty(t,`${n.toFixed(2)}deg`)}})}let q=(0,r.forwardRef)(function({children:e,size:t="md",colorVariant:o="colorful",theme:i="dark",staticColors:F=!1,duration:O,active:N=!0,borderRadius:q,brightness:R,saturation:S,hueRange:M=30,strength:C=1,className:E,style:A,onActivate:I,onDeactivate:L,onAnimationEnd:P,...T},V){let B=(0,r.useId)().replace(/:/g,"-"),G=function(){let[e,a]=(0,r.useState)(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,r.useEffect)(()=>{if(typeof window>"u")return;let e=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>{a(e.matches?"dark":"light")};return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]),e}(),D=(0,r.useRef)(null),[K,U]=(0,r.useState)(N),[J,Q]=(0,r.useState)(!1),[Z,ee]=(0,r.useState)(!0),[ea,er]=(0,r.useState)(null),[et,eo]=(0,r.useState)({x:1,y:1});(0,r.useEffect)(()=>{if(null!=q)return;let e=D.current;if(!e)return;let a=()=>{let a=e.firstElementChild;if(!a)return;let r=parseFloat(getComputedStyle(a).borderTopLeftRadius);!isNaN(r)&&r>0&&er(r)};a();let r=new MutationObserver(a);return r.observe(e,{childList:!0,subtree:!1}),()=>r.disconnect()},[q,e]),(0,r.useEffect)(()=>{!N||K||J?N||!K||J||Q(!0):U(!0)},[N,K,J]),(0,r.useEffect)(()=>{let e=D.current;if(!e||typeof IntersectionObserver>"u")return;let a=new IntersectionObserver(e=>{for(let a of e)ee(a.isIntersecting)},{rootMargin:"256px"});return a.observe(e),()=>a.disconnect()},[]),(0,r.useEffect)(()=>{if("pulse-outside"!==t)return void eo({x:1,y:1});let e=D.current;if(!e)return;let a=e=>Math.max(.35,Math.min(4,e)),r=()=>{let r=e.firstElementChild;if(!r)return;let t=r.getBoundingClientRect();if(!t.width||!t.height)return;let o=+a(t.width/350).toFixed(3),i=+a(t.height/140).toFixed(3);eo(e=>e.x===o&&e.y===i?e:{x:o,y:i})};if(r(),typeof ResizeObserver>"u")return;let o=e.firstElementChild;if(!o)return;let i=new ResizeObserver(r);return i.observe(o),()=>i.disconnect()},[t,e]);let ei=(0,r.useCallback)(e=>{let a=e.animationName;a.includes("fade-out")?(U(!1),Q(!1),null==L||L()):a.includes("fade-in")&&(null==I||I()),null==P||P(e)},[I,L,P]),es="auto"===i?G:i,en=n[t][es],el=s[t],ec="pulse-inner"===t||"pulse-outside"===t,eb=q??ea??el.borderRadius,ep=O??("line"===t?3.1:ec?2.3:1.96),ed=S??en.saturation,ef=R??en.brightness??1.3,eg="line"===t?Math.min(M,13):M,em="mono"===o||F,ex=(0,r.useMemo)(()=>(function(e){let{size:a}=e;return"line"===a?function(e){let{id:a,borderRadius:r,borderWidth:t,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,innerShadow:c,colorVariant:m,staticColors:x,brightness:u,saturation:$,hueRange:h,theme:z}=e,y=Math.max(0,r-t),v="dark"===z,w=x?"":`animation: beam-hue-shift-${a} 12s ease-in-out infinite;`,W=x?"":`animation: beam-hue-shift-bloom-${a} 8s ease-in-out infinite;`,X=x?"":`
@keyframes beam-hue-shift-${a} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${u.toFixed(2)}) saturate(${$.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${u.toFixed(2)}) saturate(${$.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${u.toFixed(2)}) saturate(${$.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${a} {
  0% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${u.toFixed(2)}) saturate(${$.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h+10}deg)) brightness(${u.toFixed(2)}) saturate(${$.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${u.toFixed(2)}) saturate(${$.toFixed(2)}); }
}`,Y=v?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${a})) calc(28px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${a})) calc(28px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,H=b[m][v?"dark":"light"].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,t=0===e.offsetY?"":e.offsetY>0?` + ${e.offsetY}px`:` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${a})) calc(${e.sizeH}px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%${r}) calc(100%${t}), ${e.color}, transparent)`}).join(`,
       `),j=p[m].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,t=0===e.offsetY?"":` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${a})) calc(${e.sizeH}px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%${r}) calc(100%${t}), ${e.color}, transparent)`}).join(`,
    `),F=function(e,a,r){let t,o=(t=l[e],a?t.spike:t.spikeLt),i=d[e][a?"dark":"light"],s="mono"===e,n=s?.14:1,c=s?g(o.primary,.14):o.primary,b=s?g(o.primary,.09):o.primary,p=s?g(o.secondary,.12):o.secondary,m=s?f(o.secondary,.06):f(o.secondary,.49),x=i.spikes.map(e=>s?{color1:g(e.color1,n),color2:g(e.color2,.7*n)}:e),u=s?"12px":"0.8px",$=s?"14px":"2px",h=s?"12px":"1.2px",z=s?"42px":"92px",y=s?"38px":"72px",v=s?"40px":"85px",k=s?"32px":"60px";if(a)return`radial-gradient(ellipse calc(${u} * var(--beam-spike-${r})) calc(${z} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${c}, ${b} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${p}, ${m} 50%, transparent 95%),
       radial-gradient(ellipse calc(${$} * (2 - var(--beam-spike-${r}))) calc(${y} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${x[0].color1}, ${x[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${x[1].color1}, ${x[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike2-${r}))) calc(${v} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${x[2].color1}, ${x[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${x[3].color1}, ${x[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${s?"10px":"0.6px"} * (2 - var(--beam-spike-${r}))) calc(${k} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${x[4].color1}, ${x[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${s?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)"} 0%, ${s?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)"} 20%, ${s?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)"} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${s?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)"} 0%, ${s?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)"} 25%, ${s?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)"} 55%, transparent 80%)`;{let e=s?g(o.primary,.11):f(o.primary,.85),a=s?g(o.secondary,.09):f(o.secondary,.7);return`radial-gradient(ellipse calc(${u} * var(--beam-spike-${r})) calc(${z} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${c}, ${e} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${p}, ${a} 50%, transparent 95%),
       radial-gradient(ellipse calc(${$} * (2 - var(--beam-spike-${r}))) calc(${y} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${x[0].color1}, ${x[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${x[1].color1}, ${x[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike2-${r}))) calc(${v} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${x[2].color1}, ${x[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${x[3].color1}, ${x[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${s?"12px":"1px"} * (2 - var(--beam-spike-${r}))) calc(${k} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${x[4].color1}, ${x[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}(m,v,a),O="mono"===m?"filter: blur(6px);":"";return`
@property --beam-x-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${a}"][data-active] {
  animation:
    beam-travel-${a} ${o}s linear infinite,
    beam-edge-fade-${a} ${o}s linear infinite,
    beam-breathe-${a} ${(1.3*o).toFixed(1)}s ease-in-out infinite,
    beam-spike-${a} ${(1.33*o).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${a} ${(1.7*o).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${a} 0.6s ease forwards;
}

[data-beam="${a}"][data-fading] {
  animation:
    beam-travel-${a} ${o}s linear infinite,
    beam-edge-fade-${a} ${o}s linear infinite,
    beam-breathe-${a} ${(1.3*o).toFixed(1)}s ease-in-out infinite,
    beam-spike-${a} ${(1.33*o).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${a} ${(1.7*o).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${a} 0.5s ease forwards;
}

[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  padding: ${t}px;
  clip-path: inset(0 round ${r}px);
  background: ${Y}, ${H};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${i.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${w}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${j};
  box-shadow: inset 0 0 9px 1px ${c};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${s.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${w}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${a})) calc(110px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${a})) calc(110px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${F};
  ${O}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${n.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${W}
}

@keyframes beam-travel-${a} {
  0%   { --beam-x-${a}: 0.06;  --beam-w-${a}: 0.5; }
  10%  { --beam-x-${a}: 0.15;  --beam-w-${a}: 0.8; }
  20%  { --beam-x-${a}: 0.25;  --beam-w-${a}: 1.1; }
  30%  { --beam-x-${a}: 0.35;  --beam-w-${a}: 1.3; }
  40%  { --beam-x-${a}: 0.44;  --beam-w-${a}: 1.45; }
  50%  { --beam-x-${a}: 0.5;   --beam-w-${a}: 1.5; }
  60%  { --beam-x-${a}: 0.56;  --beam-w-${a}: 1.45; }
  70%  { --beam-x-${a}: 0.65;  --beam-w-${a}: 1.3; }
  80%  { --beam-x-${a}: 0.75;  --beam-w-${a}: 1.1; }
  90%  { --beam-x-${a}: 0.85;  --beam-w-${a}: 0.8; }
  100% { --beam-x-${a}: 0.94;  --beam-w-${a}: 0.5; }
}

@keyframes beam-edge-fade-${a} {
  0%    { --beam-edge-${a}: 0; }
  12.5% { --beam-edge-${a}: 0; }
  32.5% { --beam-edge-${a}: 1; }
  67.5% { --beam-edge-${a}: 1; }
  87.5% { --beam-edge-${a}: 0; }
  100%  { --beam-edge-${a}: 0; }
}

@keyframes beam-breathe-${a} {
  0%, 100% { --beam-h-${a}: 0.8; }
  25%      { --beam-h-${a}: 1.25; }
  55%      { --beam-h-${a}: 0.85; }
  80%      { --beam-h-${a}: 1.3; }
}

@keyframes beam-spike-${a} {
  0%   { --beam-spike-${a}: 0.8; }
  25%  { --beam-spike-${a}: 1.3; }
  50%  { --beam-spike-${a}: 0.9; }
  75%  { --beam-spike-${a}: 1.4; }
  100% { --beam-spike-${a}: 0.8; }
}

@keyframes beam-spike2-${a} {
  0%   { --beam-spike2-${a}: 1.2; }
  25%  { --beam-spike2-${a}: 0.7; }
  50%  { --beam-spike2-${a}: 1.4; }
  75%  { --beam-spike2-${a}: 0.8; }
  100% { --beam-spike2-${a}: 1.2; }
}

@keyframes beam-fade-in-${a} {
  to { --beam-opacity-${a}: 1; }
}

@keyframes beam-fade-out-${a} {
  from { --beam-opacity-${a}: 1; }
  to { --beam-opacity-${a}: 0; }
}
${X}
${k(a)}
`}(e):"sm"===a?function(e){let{id:a,borderRadius:r,borderWidth:t,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,innerShadow:l,colorVariant:b,staticColors:p,brightness:d,saturation:f,hueRange:g,theme:m}=e,x=Math.max(0,r-t),u="mono"===b?.5:1,$=p?"":`animation: beam-hue-shift-${a} 12s ease-in-out infinite;`,h=p?"":`
@keyframes beam-hue-shift-${a} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${g}deg)) brightness(${d.toFixed(2)}) saturate(${f.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${g}deg)) brightness(${d.toFixed(2)}) saturate(${f.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${g}deg)) brightness(${d.toFixed(2)}) saturate(${f.toFixed(2)}); }
}`,z="dark"===m,y=z?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,v=c[b].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),w=c[b].inner.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),W=z?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,X=`conic-gradient(
    from var(--beam-angle-${a}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${a} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${a}"][data-active] {
  animation:
    beam-spin-${a} ${o}s linear infinite,
    beam-fade-in-${a} 0.6s ease forwards;
}

[data-beam="${a}"][data-fading] {
  animation:
    beam-spin-${a} ${o}s linear infinite,
    beam-fade-out-${a} 0.5s ease forwards;
}

[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  padding: ${t}px;
  clip-path: inset(0 round ${r}px);
  background: ${y},${v};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${a}) * ${(i*u).toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${$}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${w};
  box-shadow: inset 0 0 5px 1px ${l};
  -webkit-mask-image: ${X};
  -webkit-mask-composite: source-over;
  mask-image: ${X};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${a}) * ${(s*u).toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${$}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  clip-path: inset(0 round ${r}px);
  background: ${W};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${t}px;
  filter: blur(8px) brightness(${d.toFixed(2)}) saturate(${f.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * ${(n*u).toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${a} {
  to { --beam-angle-${a}: 360deg; }
}

@keyframes beam-fade-in-${a} {
  to { --beam-opacity-${a}: 1; }
}

@keyframes beam-fade-out-${a} {
  from { --beam-opacity-${a}: 1; }
  to { --beam-opacity-${a}: 0; }
}
${h}
${k(a)}
`}(e):"pulse-inner"===a?function(e){var a;let r,t,o,{id:i,borderRadius:s,borderWidth:n,duration:c,strokeOpacity:b,innerOpacity:p,bloomOpacity:d,colorVariant:f,staticColors:g,brightness:$,saturation:h,hueRange:y,theme:Y}=e,H="mono"===f?.5:1,j=(b*H).toFixed(2),F=(p*H).toFixed(2),O=(d*H).toFixed(2),{op:N}=W("pulse-inner",Y,c),_=$.toFixed(2),q=h.toFixed(2),R=g?`filter: brightness(${_}) saturate(${q});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${i}))) brightness(${_}) saturate(${q});`,S=g?`filter: blur(8px) brightness(${_}) saturate(${q});`:`filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${i}))) brightness(${_}) saturate(${q});`,M=l[f].border.map((e,a)=>{let{region:r,quad:t}=m[a],[o,s]=e.pos.split(" "),[n,l]=e.size.split(" ").map(parseFloat);return z(e.color,n,l,r,t,o,s,i)}).join(`,
    `),C=(a="dark"===Y,r=l[f].border.map((e,a)=>{let{region:r,quad:t}=m[a],[o,s]=e.pos.split(" "),[n,l]=x[a];return z(e.color,n,l,r,t,o,s,i)}),t=a?"255, 255, 255":"0, 0, 0",o=a?.18:.08,[...r,...[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([e,a,r])=>`radial-gradient(ellipse 60px 60px at ${e} ${a}, rgba(${t}, calc(${o} * var(--bop-${r}-${i}))), transparent 70%)`)].join(`,
    `)),E=v(u,f,1-.5*N);return`
${w(i)}

[data-beam="${i}"] {
  position: relative;
  border-radius: ${s}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${i}"][data-active] {
${X(i,"beam-fade-in",.6)}
}

[data-beam="${i}"][data-fading] {
${X(i,"beam-fade-out",.5)}
}

[data-beam="${i}"][data-active]::after,
[data-beam="${i}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${s}px;
  padding: ${n}px;
  clip-path: inset(0 round ${s}px);
  background: ${M};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${i}) * ${j} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${R}
}

[data-beam="${i}"][data-active]::before,
[data-beam="${i}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${s}px;
  clip-path: inset(0 round ${s}px);
  background: ${C};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${i}) * ${F} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${R}
}

[data-beam="${i}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${s}px;
  clip-path: inset(0 round ${s}px);
  background: ${E};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${i}"][data-active] [data-beam-bloom],
[data-beam="${i}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${i}) * ${O} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${S}
}

@keyframes beam-fade-in-${i} { to { --beam-opacity-${i}: 1; } }
@keyframes beam-fade-out-${i} { from { --beam-opacity-${i}: 1; } to { --beam-opacity-${i}: 0; } }
${k(i)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${i}"][data-active],
  [data-beam="${i}"][data-fading],
  [data-beam="${i}"][data-active]::after,
  [data-beam="${i}"][data-fading]::after,
  [data-beam="${i}"][data-active]::before,
  [data-beam="${i}"][data-fading]::before,
  [data-beam="${i}"][data-active] [data-beam-bloom],
  [data-beam="${i}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}(e):"pulse-outside"===a?function(e){let{id:a,borderRadius:r,duration:t,strokeOpacity:o,innerOpacity:i,bloomOpacity:s,colorVariant:n,staticColors:l,brightness:c,saturation:b,hueRange:p,theme:d,hairlineOpacity:f=0}=e,g="dark"===d,m="mono"===n?.5:1,x=(o*m).toFixed(2),u=(i*m).toFixed(2),z=(s*m).toFixed(2),Y=g?"70, 70, 70":"0, 0, 0",H=f.toFixed(2),j=`linear-gradient(rgba(${Y}, ${H}), rgba(${Y}, ${H}))`,{op:F}=W("pulse-outside",d,t),O=g?3:6,N=g?22.5:15,_=c.toFixed(2),q=b.toFixed(2),R=l?`filter: brightness(${_}) saturate(${q});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${a}))) brightness(${_}) saturate(${q});`,S=`brightness(var(--beam-glow-brightness, ${_})) saturate(var(--beam-glow-saturate, ${q}))`,M=l?`filter: blur(var(--beam-core-blur, ${O}px)) ${S};`:`filter: blur(var(--beam-core-blur, ${O}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${a}))) ${S};`,C=l?`filter: blur(var(--beam-bloom-blur, ${N}px)) ${S};`:`filter: blur(var(--beam-bloom-blur, ${N}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${a}))) ${S};`,E=y($,n,a),A=y($,n,a),I=v(h,n,1-.5*F),L=f>0?`${E},
    ${j}`:E;return`
${w(a)}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${a}"][data-active] {
${X(a,"beam-fade-in",.6)}
}

[data-beam="${a}"][data-fading] {
${X(a,"beam-fade-out",.5)}
}
${f>0?`
/* Idle hairline — painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${a}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${j};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
`:""}
[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${L};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${a}) * ${x} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${R}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${r+10}px;
  background: ${A};
  transform: scale(0.95, 0.9);
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${a}) * ${u} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${r+30}px;
  background: ${I};
  transform: scale(0.95, 0.9);
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * ${z} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${C}
}

@keyframes beam-fade-in-${a} { to { --beam-opacity-${a}: 1; } }
@keyframes beam-fade-out-${a} { from { --beam-opacity-${a}: 1; } to { --beam-opacity-${a}: 0; } }
${k(a)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${a}"][data-active],
  [data-beam="${a}"][data-fading],
  [data-beam="${a}"][data-active]::after,
  [data-beam="${a}"][data-fading]::after,
  [data-beam="${a}"][data-active]::before,
  [data-beam="${a}"][data-fading]::before,
  [data-beam="${a}"][data-active] [data-beam-bloom],
  [data-beam="${a}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}(e):function(e){let a,r,{id:t,borderRadius:o,borderWidth:i,duration:s,strokeOpacity:n,innerOpacity:c,bloomOpacity:b,innerShadow:p,colorVariant:d,staticColors:f,brightness:g,saturation:m,hueRange:x,theme:u}=e,$=Math.max(0,o-i),h="mono"===d?.5:1,z=f?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,y=f?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${x}deg)) brightness(${g.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${x}deg)) brightness(${g.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${x}deg)) brightness(${g.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,v="dark"===u,w=v?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,W=l[d].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),X=(a=l[d],r="mono"===d?.225:.45,a.border.map(e=>{let a=e.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${e.size.split(" ").map(e=>{let a=parseInt(e);return`${Math.round(.9*a)}px`}).join(" ")} at ${e.pos}, ${a}, transparent)`}).join(`,
    `)),Y=v?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${o}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${s}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${s}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  padding: ${i}px;
  clip-path: inset(0 round ${o}px);
  background: ${w},${W};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${(n*h).toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${z}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${o}px;
  background: ${X};
  box-shadow: inset 0 0 9px 1px ${p};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${(c*h).toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${o}px);
  ${z}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  clip-path: inset(0 round ${o}px);
  background: ${Y};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${i}px;
  filter: blur(8px) brightness(${g.toFixed(2)}) saturate(${m.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${(b*h).toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${y}
${k(t)}
`}(e)})({id:B,borderRadius:eb,borderWidth:el.borderWidth,duration:ep,strokeOpacity:en.strokeOpacity,innerOpacity:en.innerOpacity,bloomOpacity:en.bloomOpacity,innerShadow:en.innerShadow,size:t,colorVariant:o,staticColors:em,brightness:ef,saturation:ed,hueRange:eg,theme:es,hairlineOpacity:en.hairlineOpacity}),[B,eb,el.borderWidth,ep,en.strokeOpacity,en.innerOpacity,en.bloomOpacity,en.innerShadow,en.hairlineOpacity,t,o,em,ef,ed,eg,es]),eu=(0,r.useMemo)(()=>ec?function(e,a,r,t,o){if("pulse-inner"!==e&&"pulse-outside"!==e)return null;let i=W(e,a,r);return{oscillators:function(e,a){let{sp:r,dr:t,op:o,gh:i,bs:s,ss:n,ghs:l}=a;return[{prop:`--bw1-${e}`,a:1-r,b:1+1.1*r,period:.9*n,delay:0,unit:""},{prop:`--bh1-${e}`,a:1+.9*r,b:1-.85*r,period:1.26*n,delay:0,unit:""},{prop:`--bx1-${e}`,a:-t,b:.9*t,period:1.6*s,delay:0,unit:"px"},{prop:`--by1-${e}`,a:.55*t,b:-(.7*t),period:1.6*s,delay:0,unit:"px"},{prop:`--bw2-${e}`,a:1+r,b:1-.85*r,period:1.1*n,delay:0,unit:""},{prop:`--bh2-${e}`,a:1-.8*r,b:1+1.05*r,period:.81*n,delay:0,unit:""},{prop:`--bx2-${e}`,a:.8*t,b:-(.9*t),period:1.88*s,delay:0,unit:"px"},{prop:`--by2-${e}`,a:-t,b:.65*t,period:1.88*s,delay:0,unit:"px"},{prop:`--bw3-${e}`,a:1-.6*r,b:1+1.15*r,period:.98*n,delay:0,unit:""},{prop:`--bh3-${e}`,a:1+.75*r,b:1-r,period:1.4*n,delay:0,unit:""},{prop:`--bx3-${e}`,a:-(.6*t),b:t,period:1.45*s,delay:0,unit:"px"},{prop:`--by3-${e}`,a:-(.85*t),b:.45*t,period:1.45*s,delay:0,unit:"px"},{prop:`--bgh-${e}`,a:1-i,b:1+i,period:l,delay:0,unit:""},{prop:`--bop-tl-${e}`,a:1-o,b:1,period:s,delay:0,unit:""},{prop:`--bop-tr-${e}`,a:1-o,b:1,period:1.32*s,delay:.28*s,unit:""},{prop:`--bop-bl-${e}`,a:1-o,b:1,period:.84*s,delay:.55*s,unit:""},{prop:`--bop-br-${e}`,a:1-o,b:1,period:1.58*s,delay:.83*s,unit:""}]}(o,i),hue:t?null:{prop:`--beam-hue-${o}`,range:360,period:i.huePeriod,continuous:!0}}}(t,es,ep,em,B):null,[ec,t,es,ep,eg,em,B]);(0,r.useEffect)(()=>{var e;if(!eu||!(K||J)||!Z)return;let a=D.current;if(a&&!("u">typeof window&&null!=(e=window.matchMedia)&&e.call(window,"(prefers-reduced-motion: reduce)").matches)){let e;return e={el:a,config:eu},Y.add(e),null==H&&(j=0,H=requestAnimationFrame(_)),()=>{Y.delete(e),0===Y.size&&null!=H&&(cancelAnimationFrame(H),H=null)}}},[eu,K,J,Z]);let e$=(0,r.useCallback)(e=>{D.current=e,"function"==typeof V?V(e):V&&(V.current=e)},[V]),eh={...A??{},"--beam-strength":Math.max(0,Math.min(1,C)),..."pulse-outside"===t?{"--pulse-glow-sx":et.x,"--pulse-glow-sy":et.y}:{}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:ex}),(0,a.jsxs)("div",{...T,ref:e$,"data-beam":B,"data-active":K&&!J?"":void 0,"data-fading":J?"":void 0,"data-paused":!K||J||Z?void 0:"",className:E,style:eh,onAnimationEnd:ei,children:[e,(0,a.jsx)("div",{"data-beam-bloom":!0})]})]})});var R=e.i(12858),S=e.i(75157);function M({size:e="md",tone:r="neutral",className:t,children:o,...i}){return(0,a.jsx)("button",{type:"button",className:(0,S.cn)("icon-button",`icon-button--${e}`,`icon-button--${r}`,t),...i,children:o})}function C({id:e,label:r,hint:t,error:o,children:i,className:s}){let n=t||o?`${e}-description`:void 0;return(0,a.jsxs)("div",{className:(0,S.cn)("field-shell",o&&"field-shell--error",s),children:[r?(0,a.jsx)("label",{htmlFor:e,children:r}):null,i,n?(0,a.jsx)("p",{id:n,className:"field-shell__message","aria-live":o?"polite":void 0,children:o||t}):null]})}e.s(["IconButton",0,M,"NumberField",0,function({label:e,value:t,onChange:o,min:i=Number.MIN_SAFE_INTEGER,max:s=Number.MAX_SAFE_INTEGER,step:n=1,suffix:l,disabled:c}){let b=(0,r.useId)(),p=e=>o(Math.min(s,Math.max(i,e)));return(0,a.jsxs)("div",{className:"number-field",children:[e?(0,a.jsx)("label",{htmlFor:b,children:e}):null,(0,a.jsxs)("div",{className:"number-field__control",children:[(0,a.jsx)(M,{size:"sm","aria-label":`Diminuir ${e||"valor"}`,disabled:c||t<=i,onClick:()=>p(t-n),children:(0,a.jsx)(R.Minus,{size:14})}),(0,a.jsx)("input",{id:b,type:"number",value:t,min:i,max:s,step:n,disabled:c,onChange:e=>{let a=e.currentTarget.valueAsNumber;Number.isNaN(a)||p(a)}}),l?(0,a.jsx)("span",{className:"number-field__suffix",children:l}):null,(0,a.jsx)(M,{size:"sm","aria-label":`Aumentar ${e||"valor"}`,disabled:c||t>=s,onClick:()=>p(t+n),children:(0,a.jsx)(R.Plus,{size:14})})]})]})},"RadioGroup",0,function({label:e,value:t,onChange:i,options:s,name:n}){let l=(0,r.useId)();return(0,a.jsxs)("fieldset",{className:"rare-radio-group",children:[(0,a.jsx)("legend",{children:e}),(0,a.jsx)("div",{className:"rare-radio-group__options",children:s.map(e=>(0,a.jsxs)("label",{className:(0,S.cn)("choice-row",e.disabled&&"is-disabled"),children:[(0,a.jsx)("input",{className:"visually-hidden",type:"radio",name:n||l,value:e.value,checked:t===e.value,disabled:e.disabled,onChange:()=>i(e.value)}),(0,a.jsx)("span",{className:(0,S.cn)("rare-radio",t===e.value&&"is-checked"),"aria-hidden":"true",children:(0,a.jsx)(o.motion.span,{animate:{scale:+(t===e.value)},transition:{duration:.2,ease:[.32,.72,0,1]}})}),(0,a.jsxs)("span",{className:"choice-row__copy",children:[(0,a.jsx)("strong",{children:e.label}),e.description?(0,a.jsx)("small",{children:e.description}):null]})]},e.value))})]})},"RareButton",0,function({variant:e="secondary",loading:r=!1,loadingLabel:s="Processando",leadingIcon:n,trailingIcon:l,children:c,className:b,disabled:p,...d}){let f=(0,i.useReducedMotion)(),g=(0,a.jsxs)("button",{type:"button",className:(0,S.cn)("rare-button",`rare-button--${e}`,b),disabled:p||r,"aria-busy":r||void 0,...d,children:[(0,a.jsx)(t.AnimatePresence,{initial:!1,mode:"popLayout",children:r?(0,a.jsx)(o.motion.span,{className:"rare-button__icon",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},children:(0,a.jsx)(R.LoaderCircle,{size:15,className:"rare-spinner","aria-hidden":"true"})},"loader"):n?(0,a.jsx)(o.motion.span,{className:"rare-button__icon",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},children:n},"leading"):null}),(0,a.jsx)("span",{className:"rare-button__label",children:r?s:c}),!r&&l?(0,a.jsx)("span",{className:"rare-button__icon",children:l}):null]});return"primary"!==e?g:(0,a.jsx)(q,{className:"rare-button-beam",size:"md",colorVariant:"colorful",strength:1,brightness:1.7,saturation:1.45,duration:2.2,active:!f&&!p,theme:"dark",borderRadius:11,children:g})},"RareSlider",0,function({label:e,value:t,onChange:i,min:s=0,max:n=100,step:l=1,formatValue:c=e=>String(e),...b}){let p=(0,r.useId)(),d=(t-s)/(n-s)*100;return(0,a.jsxs)("div",{className:"rare-slider",children:[(0,a.jsxs)("div",{className:"rare-slider__header",children:[(0,a.jsx)("label",{htmlFor:p,children:e}),(0,a.jsx)(o.motion.output,{htmlFor:p,initial:{opacity:.45,y:2},animate:{opacity:1,y:0},transition:{duration:.15},children:c(t)},t)]}),(0,a.jsx)("input",{id:p,type:"range",value:t,min:s,max:n,step:l,onChange:e=>i(e.currentTarget.valueAsNumber),style:{"--slider-progress":`${d}%`},...b}),(0,a.jsxs)("div",{className:"rare-slider__limits","aria-hidden":"true",children:[(0,a.jsx)("span",{children:s}),(0,a.jsx)("span",{children:n})]})]})},"RareSwitch",0,function({checked:e,onCheckedChange:r,label:t,description:i,disabled:s,hideLabel:n}){return(0,a.jsxs)("label",{className:(0,S.cn)("choice-row choice-row--switch",s&&"is-disabled",n&&"choice-row--bare"),children:[(0,a.jsx)("input",{className:"visually-hidden",type:"checkbox",role:"switch",checked:e,disabled:s,onChange:e=>r(e.currentTarget.checked)}),(0,a.jsxs)("span",{className:(0,S.cn)("choice-row__copy",n&&"visually-hidden"),children:[(0,a.jsx)("strong",{children:t}),i?(0,a.jsx)("small",{children:i}):null]}),(0,a.jsx)("span",{className:(0,S.cn)("rare-switch",e&&"is-checked"),"aria-hidden":"true",children:(0,a.jsx)(o.motion.span,{animate:{x:18*!!e},transition:{type:"spring",stiffness:500,damping:30}})})]})},"SearchField",0,function({id:e,label:i,value:s,resultCount:n,onClear:l,className:c,...b}){let p=(0,r.useId)(),d=e||p,f=String(s??"").length>0;return(0,a.jsxs)("div",{className:"search-field",children:[i?(0,a.jsx)("label",{htmlFor:d,children:i}):null,(0,a.jsxs)("div",{className:"field-control",children:[(0,a.jsx)("span",{className:"field-control__adornment",children:(0,a.jsx)(R.Search,{size:16,"aria-hidden":"true"})}),(0,a.jsx)("input",{id:d,type:"search",className:(0,S.cn)("field-input",c),value:s,...b}),(0,a.jsx)(t.AnimatePresence,{initial:!1,children:f?(0,a.jsx)(o.motion.span,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},children:(0,a.jsx)(M,{size:"sm","aria-label":"Limpar busca",onClick:l,children:(0,a.jsx)(R.X,{size:14})})}):null})]}),"number"==typeof n?(0,a.jsxs)("span",{className:"search-field__results","aria-live":"polite",children:[n," ",1===n?"resultado":"resultados"]}):null]})},"TextAreaField",0,function({id:e,label:t,hint:o,error:i,showCount:s=!0,value:n,defaultValue:l,maxLength:c,className:b,...p}){let d=(0,r.useId)(),f=e||d,g=String(n??l??"").length;return(0,a.jsx)(C,{id:f,label:t,hint:o,error:i,children:(0,a.jsxs)("div",{className:"textarea-control",children:[(0,a.jsx)("textarea",{id:f,className:(0,S.cn)("field-input field-textarea",b),"aria-invalid":!!i,"aria-describedby":o||i?`${f}-description`:void 0,value:n,defaultValue:l,maxLength:c,...p}),s&&c?(0,a.jsxs)("span",{className:"textarea-control__count","aria-label":`${g} de ${c} caracteres`,children:[g,"/",c]}):null]})})},"TextField",0,function({id:e,label:t,hint:o,error:i,leading:s,trailing:n,className:l,...c}){let b=(0,r.useId)(),p=e||b;return(0,a.jsx)(C,{id:p,label:t,hint:o,error:i,children:(0,a.jsxs)("div",{className:"field-control",children:[s?(0,a.jsx)("span",{className:"field-control__adornment",children:s}):null,(0,a.jsx)("input",{id:p,className:(0,S.cn)("field-input",l),"aria-invalid":!!i,"aria-describedby":o||i?`${p}-description`:void 0,...c}),n?(0,a.jsx)("span",{className:"field-control__adornment",children:n}):null]})})}],61998)}]);
