"use strict";

// Insert era name (年號) if appropriate
function eraName(year) {
    // set up an array of objects to store era name information
    var eras = [{y:1912, e:""}, {y:-99999, e:""}];
    var nian = "年";
    var zhou, lu, zhuanxu, chunqiu, shown;
    
    //Spring and Autumn period
    if (year >= -722 && year <=-480) {
        shown = (document.getElementById("Spring").style.display == "block");
        zhou = document.getElementById('zhouSpring').classList.contains('active') && shown;
        chunqiu = document.getElementById('chunqiuSpring').classList.contains('active') && shown;
        
        // Zhou calendar
        if (zhou) {
            eras = [{y:1912, e:""}, 
                    {y:-518, e:"周敬王"}, {y:-543, e:"周景王"}, {y:-570, e:"周靈王"}, 
                    {y:-584, e:"周簡王"}, {y:-605, e:"周定王"}, {y:-611, e:"周匡王"}, 
                    {y:-617, e:"周頃王"}, {y:-650, e:"周襄王"}, {y:-675, e:"周惠王"}, 
                    {y:-680, e:"周僖王"}, {y:-695, e:"周莊王"}, {y:-718, e:"周桓王"}, 
                    {y:-771, e:"周平王"}, {y:-99999, e:""}];
        }
        
        // Chunqiu calendar
        if (chunqiu) {
            eras = [{y:1912, e:""}, 
                    {y:-493, e:"魯哀公"}, {y:-508, e:"魯定公"}, {y:-540, e:"魯昭公"}, 
                    {y:-571, e:"魯襄公"}, {y:-589, e:"魯成公"}, {y:-607, e:"魯宣公"}, 
                    {y:-625, e:"魯文公"}, {y:-658, e:"魯僖公"}, {y:-660, e:"魯閔公"}, 
                    {y:-692, e:"魯莊公"}, {y:-710, e:"魯桓公"}, {y:-721, e:"魯隱公"}, 
                    {y:-767, e:"魯惠公"}, {y:-99999, e:""}];
        }
    }
    
    //Warring States period
    if (year >= -479 && year <=-221) {
        shown = (document.getElementById("Warring").style.display == "block");
        if (shown) {
            zhou = document.getElementById('zhouWarring').classList.contains('active');
            lu = document.getElementById('luWarring').classList.contains('active');
            zhuanxu = document.getElementById('zhuanxuWarring').classList.contains('active');
        } else {
            zhou = document.getElementById('zhouSpring').classList.contains('active');
            lu = document.getElementById('chunqiuSpring').classList.contains('active');
            zhuanxu = (document.getElementById("Spring").style.display=="none");
        }
        
        // Zhou calendar
        if (zhou) {
            eras = [{y:-254, e:""}, 
                    {y:-313, e:"周赧王"}, {y:-319, e:"周慎靚王"}, 
                    {y:-367, e:"周顯聖王"}, {y:-374, e:"周夷烈王"}, 
                    {y:-400, e:"周元安王"}, {y:-424, e:"周威烈王"}, 
                    {y:-439, e:"周考哲王"}, {y:-467, e:"周貞定王"}, 
                    {y:-475, e:"周元王"}, {y:-518, e:"周敬王"}, 
                    {y:-99999, e:""}];
        }
        
        // Lu calendar 
        if (lu) {
            eras = [{y:-247, e:""}, 
                    {y:-271, e:"魯頃公"}, {y:-294, e:"魯文公"}, {y:-313, e:"魯平公"}, 
                    {y:-342, e:"魯景公"}, {y:-351, e:"魯康公"}, {y:-375, e:"魯共公"}, 
                    {y:-406, e:"魯穆公"}, {y:-427, e:"魯元公"}, {y:-465, e:"魯悼公"}, 
                    {y:-493, e:"魯哀公"}, {y:-99999, e:""}];
        }
        
        // Zhuanxu calendar
        if (zhuanxu) {
            eras = [{y:1912, e:""}, 
                    {y:-245, e:"秦王政"}, {y:-248, e:"秦莊襄王"}, {y:-249, e:"秦孝文王"}, 
                    {y:-305, e:"秦昭襄王"}, {y:-306, e:""}];
        }
    }
    
    if (year==-220) {
        shown = (document.getElementById("Warring").style.display == "block");
        zhuanxu = document.getElementById('zhuanxuWarring').classList.contains('active');
        if (!shown || (shown && zhuanxu)) {
            eras = [{y:-220, e:"秦始皇二十六年", offset:-1}];
        }
    }
    
    // Qin, Western Han and Xin dynasties
    if (year > -220 && year <=25) {
        var eras = [{y:1912, e:""}, 
                    {y:25, e:"漢更始三年/光武帝建武元年", offset:-1},
                    {y:24, e:"漢更始二年", offset:-1},
                    {y:23, e:"新地皇四年/漢更始元年", offset:-1}, 
                    {y:20, e:"新地皇"}, {y:14, e:"新天鳳"}, 
                    {y:9, e:"新始建國"}, 
                    {y:8, e:"漢居攝三年/初始元年", offset:-1}, 
                    {y:6, e:"漢居攝"}, {y:1, e:"漢平帝元始"}, 
                    {y:-1, e:"漢哀帝元壽"}, {y:-5, e:"漢哀帝建平"}, 
                    {y:-7, e:"漢成帝綏和"}, {y:-11, e:"漢成帝元延"}, 
                    {y:-15, e:"漢成帝永始"}, {y:-19, e:"漢成帝鴻嘉"}, 
                    {y:-23, e:"漢成帝陽朔"}, 
                    {y:-26, e:"漢成帝河平", offset:1}, 
                    {y:-27, e:"漢成帝建始五年/河平元年", offset:-1}, 
                    {y:-31, e:"漢成帝建始"}, {y:-32, e:"漢元帝竟寧"}, 
                    {y:-37, e:"漢元帝建昭"}, {y:-42, e:"漢元帝永光"}, 
                    {y:-47, e:"漢元帝初元"}, {y:-48, e:"漢宣帝黃龍"}, 
                    {y:-52, e:"漢宣帝甘露"}, {y:-56, e:"漢宣帝五鳳"}, 
                    {y:-59, e:"漢宣帝神爵", offset:1}, 
                    {y:-60, e:"漢宣帝元康五年/神爵元年", offset:-1},
                    {y:-64, e:"漢宣帝元康"}, {y:-68, e:"漢宣帝地節"}, 
                    {y:-72, e:"漢宣帝本始"}, {y:-73, e:"漢昭帝元平"}, 
                    {y:-78, e:"漢昭帝元鳳", offset:1}, 
                    {y:-79, e:"漢昭帝始元七年/元鳳元年", offset:-1}, 
                    {y:-85, e:"漢昭帝始元"}, {y:-87, e:"漢武帝後元"}, 
                    {y:-91, e:"漢武帝征和"}, {y:-95, e:"漢武帝太始"}, 
                    {y:-99, e:"漢武帝天漢"}, {y:-103, e:"漢武帝太初"}, 
                    {y:-109, e:"漢武帝元封"}, {y:-115, e:"漢武帝元鼎"}, 
                    {y:-121, e:"漢武帝元狩"}, {y:-127, e:"漢武帝元朔"}, 
                    {y:-133, e:"漢武帝元光"}, {y:-139, e:"漢武帝建元"}, 
                    {y:-142, e:"漢景帝後元"}, {y:-148, e:"漢景帝中元"}, 
                    {y:-155, e:"漢景帝前元"}, {y:-162, e:"漢文帝後元"}, 
                    {y:-178, e:"漢文帝前元"}, {y:-186, e:"漢高后"}, 
                    {y:-193, e:"漢惠帝"}, {y:-205, e:"漢高祖"}, 
                    {y:-208, e:"秦二世"}, {y:-245, e:"秦始皇"}, 
                    {y:-99999, e:""}];
    }
 
    // Eastern Han dynasty
    if (year > 25 && year <= 220) {
        eras = [{y:1912, e:""}, 
                {y:220, e:"漢獻帝建安二十五年/延康元年/魏文帝黃初元年", offset:-1}, 
                {y:196, e:"漢獻帝建安"}, {y:194, e:"漢獻帝興平"}, 
                {y:190, e:"漢獻帝初平"}, {y:185, e:"漢靈帝中平", offset:1}, 
                {y:184, e:"漢靈帝光和七年/中平元年", offset:-1}, 
                {y:179, e:"漢靈帝光和", offset:1}, 
                {y:178, e:"漢靈帝熹平七年/光和元年", offset:-1}, 
                {y:173, e:"漢靈帝熹平", offset:1}, 
                {y:172, e:"漢靈帝建寧五年/熹平元年", offset:-1}, 
                {y:168, e:"漢靈帝建寧"}, 
                {y:167, e:"漢桓帝延熹十年/永康元年", offset:-1}, 
                {y:159, e:"漢桓帝延熹", offset:1}, 
                {y:158, e:"漢桓帝永壽四年/延熹元年", offset:-1}, 
                {y:155, e:"漢桓帝永壽"}, 
                {y:154, e:"漢桓帝永興二年", offset:-1}, 
                {y:153, e:"漢桓帝元嘉三年/永興元年", offset:-1}, 
                {y:151, e:"漢桓帝元嘉"}, {y:150, e:"漢桓帝和平"}, 
                {y:147, e:"漢桓帝建和"}, {y:146, e:"漢質帝本初"}, 
                {y:145, e:"漢沖帝永嘉"}, 
                {y:144, e:"漢順帝漢安三年/建康元年", offset:-1}, 
                {y:142, e:"漢順帝漢安"}, {y:136, e:"漢順帝永和"}, 
                {y:133, e:"漢順帝陽嘉", offset:1}, 
                {y:132, e:"漢順帝永建七年/陽嘉元年", offset:-1}, 
                {y:126, e:"漢順帝永建"}, {y:123, e:"漢安帝延光", offset:1}, 
                {y:122, e:"漢安帝建光二年/延光元年", offset:-1}, 
                {y:121, e:"漢安帝永寧二年/建光元年", offset:-1}, 
                {y:120, e:"漢安帝元初七年/永寧元年", offset:-1}, 
                {y:114, e:"漢安帝元初"}, {y:107, e:"漢安帝永初"}, 
                {y:106, e:"漢殤帝延平元年", offset:-1}, 
                {y:105, e:"漢和帝永元十七年/元興元年", offset:-1}, 
                {y:89, e:"漢和帝永元"}, 
                {y:88, e:"漢章帝章和二年", offset:-1}, 
                {y:87, e:"漢章帝元和四年/章和元年", offset:-1}, 
                {y:85, e:"漢章帝元和", offset:1}, 
                {y:84, e:"漢章帝建初九年/元和元年", offset:-1}, 
                {y:76, e:"漢章帝建初"}, {y:58, e:"漢明帝永平"}, 
                {y:57, e:"漢光武帝建武中元二年", offset:-1}, 
                {y:56, e:"漢光武帝建武三十二年/建武中元元年", offset:-1}, 
                {y:26, e:"漢光武帝建武", offset:1}, 
                {y:-99999, e:""}];
    }
    
    // Wei and Jin dynasties
    if (year > 220 && year <= 420) {
        eras = [{y:1912, e:""}, 
                {y:420, e:"晋恭帝元熙二年/[南北朝]宋武帝永初元年", offset:-1},
                {y:419, e:"晋恭帝元熙元年", offset:-1}, 
                {y:405, e:"晋安帝義熙"}, {y:403, e:"晋安帝元興", offset:1}, 
                {y:402, e:"晋安帝元興元年/大亨元年", offset:-1}, 
                {y:397, e:"晋安帝隆安"}, {y:376, e:"晋孝武帝太元"}, 
                {y:373, e:"晋孝武帝寧康"}, 
                {y:372, e:"晋簡文帝咸安二年", offset:-1},
                {y:371, e:"晋廢帝太和六年/簡文帝咸安元年", offset:-1}, 
                {y:366, e:"晋廢帝太和"}, {y:364, e:"晋哀帝興寧", offset:1}, 
                {y:363, e:"晋哀帝隆和二年/興寧元年", offset:-1}, 
                {y:362, e:"晋哀帝隆和元年", offset:-1}, 
                {y:357, e:"晋穆帝升平"}, {y:345, e:"晋穆帝永和"}, 
                {y:343, e:"晋康帝建元"}, {y:335, e:"晋成帝咸康"}, 
                {y:327, e:"晋成帝咸和", offset:1}, 
                {y:326, e:"晋明帝太寧四年/成帝咸和元年", offset:-1}, 
                {y:324, e:"晋明帝太寧", offset:1},
                {y:323, e:"晋明帝永昌二年/太寧元年", offset:-1},
                {y:322, e:"晋元帝永昌元年", offset:-1},
                {y:319, e:"晋元帝大興", offset:1},
                {y:318, e:"晋元帝建武二年/大興元年", offset:-1},
                {y:317, e:"晋愍帝建興五年/元帝建武元年", offset:-1},
                {y:314, e:"晋愍帝建興", offset:1}, 
                {y:313, e:"晋愍帝永嘉七年/建興元年", offset:-1}, 
                {y:307, e:"晋愍帝永嘉"}, 
                {y:306, e:"晋惠帝永興三年/光熙元年", offset:-1}, 
                {y:305, e:"晋惠帝永興二年", offset:-1}, 
                {y:304, e:"晋惠帝永安/建武/永興元年", offset:-1}, 
                {y:303, e:"晋惠帝太安二年", offset:-1}, 
                {y:302, e:"晋惠帝永寧二年/太安元年", offset:-1}, 
                {y:301, e:"晋惠帝永康二年/永寧元年", offset:-1}, 
                {y:300, e:"晋惠帝永康元年", offset:-1}, 
                {y:292, e:"晋惠帝元康", offset:1}, 
                {y:291, e:"晋惠帝永平/元康元年", offset:-1}, 
                {y:290, e:"晋武帝太熙元年/惠帝永熙/永平元年", offset:-1}, 
                {y:281, e:"晋武帝太康", offset:1}, 
                {y:280, e:"晋武帝咸寧六年/太康元年", offset:-1}, 
                {y:275, e:"晋武帝咸寧"}, {y:266, e:"晋武帝泰始", offset:1}, 
                {y:265, e:"魏元帝咸熙二年/晋武帝泰始元年", offset:-1}, 
                {y:264, e:"魏元帝景元五年/咸熙元年", offset:-1}, 
                {y:261, e:"魏元帝景元", offset:1}, 
                {y:260, e:"魏甘露五年/元帝景元元年", offset:-1}, 
                {y:257, e:"魏甘露", offset:1}, 
                {y:256, e:"魏正元三年/甘露元年", offset:-1}, 
                {y:255, e:"魏正元二年", offset:-1}, 
                {y:254, e:"魏嘉平六年/正元元年", offset:-1}, 
                {y:250, e:"魏嘉平", offset:1}, 
                {y:249, e:"魏正始十年/嘉平元年", offset:-1}, 
                {y:240, e:"魏正始"}, {y:238, e:"魏明帝景初", offset:1}, 
                {y:237, e:"魏明帝青龍五年/景初元年", offset:-1}, 
                {y:234, e:"魏明帝青龍", offset:1}, 
                {y:233, e:"魏明帝太和七年/青龍元年", offset:-1}, 
                {y:227, e:"魏明帝太和"}, {y:221, e:"魏文帝黃初", offset:1}, 
                {y:-99999, e:""}];
    }
    
    // Northern and Southern dynasties, Sui dynasty
    if (year > 420 && year < 618) {
        eras = [{y:1912, e:""}, 
                {y:617, e:"隋煬帝大業十三年/恭帝義寧元年", offset:-1},
                {y:605, e:"隋煬帝大業"}, {y:601, e:"隋文帝仁壽"}, 
                {y:590, e:"隋文帝開皇", offset:9}, 
                {y:589, e:"[南北朝]陳後主禎明三年/隋文帝開皇九年", offset:-1},
                {y:587, e:"[南北朝]陳後主禎明"}, 
                {y:583, e:"[南北朝]陳後主至德"}, 
                {y:569, e:"[南北朝]陳宣帝太建"}, {y:567, e:"[南北朝]陳伯宗光大"}, 
                {y:566, e:"[南北朝]陳文帝天嘉七年/天康元年", offset:-1}, 
                {y:560, e:"[南北朝]陳文帝天嘉"}, {y:558, e:"[南北朝]陳武帝永定", offset:1}, 
                {y:557, e:"[南北朝]梁敬帝太平二年/陳武帝永定元年", offset:-1}, 
                {y:556, e:"[南北朝]梁敬帝紹泰二年/太平元年", offset:-1}, 
                {y:555, e:"[南北朝]梁元帝承聖四年/閔帝天成元年/敬帝紹泰元年", offset:-1}, 
                {y:552, e:"[南北朝]梁元帝承聖"}, {y:550, e:"[南北朝]梁簡文帝大寶"}, 
                {y:548, e:"[南北朝]梁武帝太清", offset:1},
                {y:547, e:"[南北朝]梁武帝中大同二年/太清元年", offset:-1},
                {y:546, e:"[南北朝]梁武帝大同十二年/中大同元年", offset:-1},
                {y:535, e:"[南北朝]梁武帝大同"},
                {y:530, e:"[南北朝]梁武帝中大通", offset:1},
                {y:529, e:"[南北朝]梁武帝大通三年/中大通元年", offset:-1},
                {y:528, e:"[南北朝]梁武帝大通二年", offset:-1}, 
                {y:527, e:"[南北朝]梁武帝普通八年/大通元年", offset:-1}, 
                {y:520, e:"[南北朝]梁武帝普通"}, 
                {y:503, e:"[南北朝]梁武帝天監", offset:1}, 
                {y:502, e:"[南北朝]齊中興二年/梁武帝天監元年", offset:-1}, 
                {y:501, e:"[南北朝]齊永元三年/中興元年", offset:-1}, 
                {y:499, e:"[南北朝]齊永元"}, 
                {y:498, e:"[南北朝]齊明帝建武五年/永泰元年", offset:-1}, 
                {y:495, e:"[南北朝]齊明帝建武", offset:1},
                {y:494, e:"[南北朝]齊隆昌元年/延興元年/明帝建武元年", offset:-1},
                {y:483, e:"[南北朝]齊武帝永明"}, 
                {y:480, e:"[南北朝]齊高帝建元", offset:1}, 
                {y:479, e:"[南北朝]宋順帝昇明三年/齊高帝建元元年", offset:-1}, 
                {y:478, e:"[南北朝]宋順帝昇明二年", offset:-1}, 
                {y:477, e:"[南北朝]宋元徽五年/順帝昇明元年", offset:-1}, 
                {y:473, e:"[南北朝]宋元徽"}, 
                {y:472, e:"[南北朝]宋明帝泰豫元年", offset:-1}, 
                {y:466, e:"[南北朝]宋明帝泰始", offset:1}, 
                {y:465, e:"[南北朝]宋廢帝永光元年/景和元年/明帝泰始元年", offset:-1}, 
                {y:457, e:"[南北朝]宋孝武帝大明"}, 
                {y:454, e:"[南北朝]宋孝武帝孝建"}, 
                {y:425, e:"[南北朝]宋文帝元嘉", offset:1}, 
                {y:424, e:"[南北朝]宋少帝景平二年/文帝元嘉元年", offset:-1}, 
                {y:423, e:"[南北朝]宋少帝景平元年", offset:-1}, 
                {y:421, e:"[南北朝]宋武帝永初", offset:1}, 
                {y:-99999, e:""}];
    }
    
    // Tang dynasty
    if (year >= 618 && year <= 705) {
        eras = [{y:1912, e:""}, 
                {y:705, e:"武周/唐中宗神龍元年", offset:-1}, 
                {y:702, e:"武周長安", offset:1}, 
                {y:701, e:"武周大足元年/長安元年", offset:-1}, 
                {y:700, e:"武周聖曆三年/久視元年", offset:-1}, 
                {y:698, e:"武周聖曆"},
                {y:697, e:"武周萬歲通天二年", offset:-1}, 
                {y:696, e:"武周萬歲登封元年/萬歲通天元年", offset:-1}, 
                {y:695, e:"武周証聖元年/天冊萬歲元年", offset:-1}, 
                {y:694, e:"武周長壽三年/延載元年", offset:-1}, 
                {y:693, e:"武周長壽二年", offset:-1}, 
                {y:692, e:"武周天授三年/如意元年/長壽元年", offset:-1}, 
                {y:691, e:"武周天授二年", offset:-1}, 
                {y:690, e:"唐睿宗載初二年/武周天授元年", offset:-1}, 
                {y:689, e:"唐睿宗永昌元年/載初元年", offset:-1}, 
                {y:685, e:"唐睿宗垂拱"}, 
                {y:684, e:"唐中宗嗣聖元年/睿宗文明元年/光宅元年", offset:-1}, 
                {y:683, e:"唐高宗永淳二年/弘道元年", offset:-1},
                {y:682, e:"唐高宗開耀二年/永淳元年", offset:-1},
                {y:681, e:"唐高宗永隆二年/開耀元年", offset:-1},
                {y:680, e:"唐高宗調露二年/永隆元年", offset:-1},
                {y:679, e:"唐高宗儀鳳四年/調露元年", offset:-1},
                {y:677, e:"唐高宗儀鳳", offset:1},
                {y:676, e:"唐高宗上元三年/儀鳳元年", offset:-1},
                {y:675, e:"唐高宗上元二年", offset:-1},
                {y:674, e:"唐高宗咸亨五年/上元元年", offset:-1},
                {y:671, e:"唐高宗咸亨", offset:1},
                {y:670, e:"唐高宗總章三年/咸亨元年", offset:-1},
                {y:669, e:"唐高宗總章二年", offset:-1},
                {y:668, e:"唐高宗乾封三年/總章元年", offset:-1},
                {y:666, e:"唐高宗乾封"}, {y:664, e:"唐高宗麟德"}, 
                {y:662, e:"唐高宗龍朔", offset:1}, 
                {y:661, e:"唐高宗顯慶六年/龍朔元年", offset:-1}, 
                {y:656, e:"唐高宗顯慶"}, {y:650, e:"唐高宗永徽"}, 
                {y:627, e:"唐太宗貞觀"}, {y:619, e:"唐高祖武德", offset:1},
                {y:618, e:"隋恭帝義寧二年/唐高祖武德元年", offset:-1},
                {y:-99999, e:""}];
    }
    if (year >= 706 && year < 907) {
        eras = [{y:1912, e:""}, 
                {y:905, e:"唐哀帝天祐", offset:1},
                {y:904, e:"唐昭宗天復四年/天祐元年", offset:-1},
                {y:902, e:"唐昭宗天復", offset:1},
                {y:901, e:"唐昭宗光化四年/天復元年", offset:-1},
                {y:899, e:"唐昭宗光化", offset:1},
                {y:898, e:"唐昭宗乾寧五年/光化元年", offset:-1},
                {y:894, e:"唐昭宗乾寧"}, {y:892, e:"唐昭宗景福"},
                {y:890, e:"唐昭宗大順"}, {y:889, e:"唐昭宗龍紀元年", offset:-1},
                {y:888, e:"唐僖宗光啟四年/文德元年", offset:-1}, 
                {y:886, e:"唐僖宗光啟", offset:1},
                {y:885, e:"唐僖宗中和五年/光啟元年", offset:-1},
                {y:882, e:"唐僖宗中和", offset:1},
                {y:881, e:"唐僖宗廣明二年/中和元年", offset:-1},
                {y:880, e:"唐僖宗廣明元年", offset:-1}, 
                {y:875, e:"唐僖宗乾符", offset:1},
                {y:874, e:"唐僖宗咸通十五/乾符元年", offset:-1},
                {y:861, e:"唐懿宗咸通", offset:1},
                {y:860, e:"唐懿宗大中十四年/咸通元年", offset:-1},
                {y:847, e:"唐宣宗大中"}, {y:841, e:"唐武宗會昌"}, 
                {y:836, e:"唐文宗開成"}, {y:828, e:"唐文宗大和", offset:1}, 
                {y:827, e:"唐敬宗寶曆三年/文宗大和元年", offset:-1},
                {y:825, e:"唐敬宗寶曆"}, {y:821, e:"唐穆宗長慶"}, 
                {y:806, e:"唐憲宗元和"}, 
                {y:805, e:"唐德宗貞元二十一年/順宗永貞元年", offset:-1},
                {y:785, e:"唐德宗貞元"}, {y:784, e:"唐德宗興元"}, 
                {y:780, e:"唐德宗建中"}, {y:767, e:"唐代宗大曆", offset:1}, 
                {y:766, e:"唐代宗永泰二年/大曆元年", offset:-1},
                {y:765, e:"唐代宗永泰元年", offset:-1}, 
                {y:764, e:"唐代宗廣德二年", offset:-1}, 
                {y:763, e:"唐肅宗寶應二年/代宗廣德元年", offset:-1}, 
                {y:762, e:"唐肅宗上元三年/寶應元年", offset:-1}, 
                {y:761, e:"唐肅宗上元二年", offset:-1}, 
                {y:760, e:"唐肅宗乾元三年/上元元年", offset:-1}, 
                {y:759, e:"唐肅宗乾元二年", offset:-1}, 
                {y:758, e:"唐肅宗至德三載/乾元元年", offset:-1}, 
                {y:757, e:"唐肅宗至德二載", offset:-1}, 
                {y:756, e:"唐玄宗天寶十五載/肅宗至德元載", offset:-1}, 
                {y:742, e:"唐玄宗天寶"}, {y:714, e:"唐玄宗開元", offset:1}, 
                {y:713, e:"唐玄宗先天二年/開元元年", offset:-1}, 
                {y:712, e:"唐睿宗太極元年/延和元年/玄宗先天元年", offset:-1}, 
                {y:711, e:"唐睿宗景雲二年", offset:-1}, 
                {y:710, e:"唐中宗景龍四年/殤帝唐隆元年/睿宗景雲元年", offset:-1}, 
                {y:708, e:"唐中宗景龍", offset:1}, 
                {y:707, e:"唐中宗神龍三年/景龍元年", offset:-1}, 
                {y:706, e:"唐中宗神龍二年", offset:-1}, 
                {y:-99999, e:""}];
        if (year > 743 && year < 758) { nian = "載";}
    }
    
    // Five dynasties
    if (year >= 907 && year <= 959) {
        eras = [{y:1912, e:""}, 
                {y:959, e:"[五代]後周世宗/恭帝顯德六年", offset:-1}, 
                {y:955, e:"[五代]後周世宗顯德", offset:1},
                {y:954, e:"[五代]後周太祖/世宗顯德元年", offset:-1}, 
                {y:951, e:"[五代]後周太祖廣順"}, 
                {y:949, e:"[五代]後漢隱帝乾祐", offset:1}, 
                {y:948, e:"[五代]後漢高祖/隱帝乾祐元年", offset:-1}, 
                {y:947, e:"[五代]後漢高祖天福十二年", offset:-1}, 
                {y:945, e:"[五代]後晋出帝開運", offset:1}, 
                {y:944, e:"[五代]後晋出帝天福九年/開運元年", offset:-1}, 
                {y:942, e:"[五代]後晋出帝天福", offset:6}, 
                {y:937, e:"[五代]後晋高祖天福", offset:1}, 
                {y:936, e:"[五代]後唐清泰三年/後晋高祖天福元年", offset:-1}, 
                {y:935, e:"[五代]後唐清泰二年", offset:-1},
                {y:934, e:"[五代]後唐閔帝應順元年/李從珂清泰元年", offset:-1},
                {y:931, e:"[五代]後唐明宗長興", offset:1}, 
                {y:930, e:"[五代]後唐明宗天成五年/長興元年", offset:-1}, 
                {y:927, e:"[五代]後唐明宗天成", offset:1}, 
                {y:926, e:"[五代]後唐莊宗同光四年/明宗天成元年", offset:-1}, 
                {y:924, e:"[五代]後唐莊宗同光", offset:1}, 
                {y:923, e:"[五代]後梁末帝龍德三年/後唐莊宗同光元年", offset:-1}, 
                {y:922, e:"[五代]後梁末帝龍德二年", offset:-1}, 
                {y:921, e:"[五代]後梁末帝貞明七年/龍德元年", offset:-1}, 
                {y:916, e:"[五代]後梁末帝貞明", offset:1}, 
                {y:915, e:"[五代]後梁末帝乾化五年/貞明元年", offset:-1}, 
                {y:914, e:"[五代]後梁末帝乾化四年", offset:-1}, 
                {y:913, e:"[五代]後梁鳳曆元年/末帝乾化三年", offset:-1}, 
                {y:912, e:"[五代]後梁太祖乾化二年", offset:-1}, 
                {y:911, e:"[五代]後梁太祖開平五年/乾化元年", offset:-1}, 
                {y:908, e:"[五代]後梁太祖開平", offset:1}, 
                {y:907, e:"唐哀帝天祐四年/[五代]後梁太祖開平元年", offset:-1},
                {y:-99999, e:""}];
    }
    
    // Northern Song dynasty
    if (year >= 960 && year <= 1126) {
        eras = [{y:1912, e:""}, 
                {y:1126, e:"宋欽宗靖康元年", offset:-1}, 
                {y:1120, e:"宋徽宗宣和", offset:1}, 
                {y:1119, e:"宋徽宗重和二年/宣和元年", offset:-1}, 
                {y:1118, e:"宋徽宗政和八年/重和元年", offset:-1}, 
                {y:1111, e:"宋徽宗政和"}, {y:1107, e:"宋徽宗大觀"}, 
                {y:1102, e:"宋徽宗崇寧"}, {y:1101, e:"宋徽宗建中靖國"}, 
                {y:1099, e:"宋哲宗元符", offset:1}, 
                {y:1098, e:"宋哲宗紹聖五年/元符元年", offset:-1}, 
                {y:1095, e:"宋哲宗紹聖", offset:1}, 
                {y:1094, e:"宋哲宗元祐九年/紹聖元年", offset:-1}, 
                {y:1086, e:"宋哲宗元祐"}, {y:1078, e:"宋神宗元豐"}, 
                {y:1068, e:"宋神宗熙寧"}, {y:1064, e:"宋英宗治平"}, 
                {y:1057, e:"宋仁宗嘉祐", offset:1}, 
                {y:1056, e:"宋仁宗至和三年/嘉祐元年", offset:-1},
                {y:1055, e:"宋仁宗至和二年", offset:-1},
                {y:1054, e:"宋仁宗皇祐六年/至和元年", offset:-1}, 
                {y:1049, e:"宋仁宗皇祐"}, 
                {y:1042, e:"宋仁宗慶曆", offset:1}, 
                {y:1041, e:"宋仁宗康定二年/慶曆元年", offset:-1}, 
                {y:1040, e:"宋仁宗寶元三年/康定元年", offset:-1}, 
                {y:1039, e:"宋仁宗寶元二年", offset:-1}, 
                {y:1038, e:"宋仁宗景祐五年/寶元元年", offset:-1}, 
                {y:1034, e:"宋仁宗景祐"}, 
                {y:1033, e:"宋仁宗明道二年", offset:-1}, 
                {y:1032, e:"宋仁宗天聖十年/明道元年", offset:-1}, 
                {y:1023, e:"宋仁宗天聖"}, {y:1022, e:"宋真宗乾興"}, 
                {y:1017, e:"宋真宗天禧"}, {y:1008, e:"宋真宗大中祥符"}, 
                {y:1004, e:"宋真宗景德"}, {y:998, e:"宋真宗咸平"}, 
                {y:995, e:"宋太宗至道"}, {y:990, e:"宋太宗淳化"}, 
                {y:988, e:"宋太宗端拱"}, {y:985, e:"宋太宗雍熙", offset:1}, 
                {y:984, e:"宋太宗太平興國九年/雍熙元年", offset:-1}, 
                {y:977, e:"宋太宗太平興國", offset:1}, 
                {y:976, e:"宋太祖開寶九年/太宗太平興國元年", offset:-1}, 
                {y:969, e:"宋太祖開寶", offset:1},
                {y:968, e:"宋太祖乾德六年/開寶元年", offset:-1}, 
                {y:964, e:"宋太祖乾德", offset:1},
                {y:963, e:"宋太祖建隆四年/乾德元年", offset:-1}, 
                {y:961, e:"宋太祖建隆", offset:1}, 
                {y:960, e:"[五代]後周恭帝顯德七年/宋太祖建隆元年", offset:-1}, 
                {y:-99999, e:""}];
    }
    
    // Southern Song dynasty
    if (year >= 1127 && year <= 1279) {
        eras = [{y:1912, e:""}, 
                {y:1279, e:"宋帝昺祥興二年/元世祖至元十六年", offset:-1},
                {y:1278, e:"宋端宗景炎三年/帝昺祥興元年", offset:-1},
                {y:1277, e:"宋端宗景炎二年", offset:-1},
                {y:1276, e:"宋恭帝德祐二年/端宗景炎元年", offset:-1},
                {y:1275, e:"宋恭帝德祐元年", offset:-1},
                {y:1265, e:"宋度宗咸淳"}, {y:1260, e:"宋理宗景定"}, 
                {y:1259, e:"宋理宗開慶"}, {y:1253, e:"宋理宗寶祐"},
                {y:1241, e:"宋理宗淳祐"}, {y:1237, e:"宋理宗嘉熙"}, 
                {y:1234, e:"宋理宗端平"}, {y:1228, e:"宋理宗紹定"}, 
                {y:1225, e:"宋理宗寶慶"}, {y:1208, e:"宋寧宗嘉定"}, 
                {y:1205, e:"宋寧宗開禧"}, {y:1201, e:"宋寧宗嘉泰"}, 
                {y:1195, e:"宋寧宗慶元"}, {y:1190, e:"宋光宗紹熙"}, 
                {y:1174, e:"宋孝宗淳熙"}, {y:1165, e:"宋孝宗乾道"}, 
                {y:1163, e:"宋孝宗隆興"}, {y:1131, e:"宋高宗紹興"}, 
                {y:1128, e:"宋高宗建炎", offset:1},
                {y:1127, e:"宋欽宗靖康二年/宋高宗建炎元年", offset:-1}, 
                {y:-99999, e:""}];
    }
    
    // Yuan dynasty
    if (year >=1280 && year <=1367) {
        eras = [{y:1912, e:""}, {y:1341, e:"元順帝至正"},
                {y:1336, e:"元順帝至元", offset:1}, 
                {y:1335, e:"元順帝元統三年/至元元年", offset:-1},
                {y:1334, e:"元順帝元統二年", offset:-1},
                {y:1333, e:"元順帝至順四年/元統元年", offset:-1},
                {y:1332, e:"元文宗/寧宗/順帝至順三年", offset:-1},
                {y:1331, e:"元文宗至順二年", offset:-1},
                {y:1330, e:"元文宗天曆三年/至順元年", offset:-1},
                {y:1329, e:"元文宗/明宗天曆二年", offset:-1},
                {y:1328, e:"元泰定帝泰定五年/致和元年/元天順帝天順元年/元文宗天曆元年", offset:-1},
                {y:1324, e:"元泰定帝泰定"}, {y:1321, e:"元英宗至治"},
                {y:1314, e:"元仁宗延祐"}, {y:1312, e:"元仁宗皇慶"},
                {y:1308, e:"元武宗至大"}, {y:1298, e:"元成宗大德", offset:1}, 
                {y:1297, e:"元成宗元貞三年/大德元年", offset:-1}, 
                {y:1295, e:"元成宗元貞"}, {y:1264, e:"元世祖至元"},
                {y:-99999, e:""}];
    }
    
    // Ming dynasty
    if (year >= 1368 && year <= 1644) {
        eras = [{y:1912, e:""}, 
                {y:1644, e:"明思宗崇禎十七年/清世祖順治元年", offset:-1}, 
                {y:1628, e:"明思宗崇禎"}, 
                {y:1621, e:"明熹宗天啟"}, {y:1620, e:"明神宗萬曆四十八年/明光宗泰昌元年", offset:-1}, 
                {y:1573, e:"明神宗萬曆"}, {y:1567, e:"明穆宗隆慶"},
                {y:1522, e:"明世宗嘉靖"}, {y:1506, e:"明武宗正德"},
                {y:1488, e:"明孝宗弘治"}, {y:1465, e:"明憲宗成化"},
                {y:1457, e:"明英宗天順"}, {y:1450, e:"明代宗景泰"},
                {y:1436, e:"明英宗正統"}, {y:1426, e:"明宣宗宣德"},
                {y:1425, e:"明仁宗洪熙"}, {y:1403, e:"明成祖永樂"},
                {y:1402, e:"明惠帝建文四年/明成祖洪武三十五年", offset:-1},
                {y:1399, e:"明惠帝建文"}, {y:1369, e:"明太祖洪武", offset:1},
                {y:1368, e:"元順帝至正二十八年/明太祖洪武元年", offset:-1},
                {y:-99999, e:""}];
    }
    
    // Qing dynasty
    if (year >= 1645 && year <= 1911) {
        eras = [{y:1912, e:""}, {y:1909, e:"清宣統"}, 
           {y:1875, e:"清德宗光緒"}, {y:1862, e:"清穆宗同治"}, 
           {y:1851, e:"清文宗咸豐"}, {y:1821, e:"清宣宗道光"}, 
           {y:1796, e:"清仁宗嘉慶"}, {y:1736, e:"清高宗乾隆"},
           {y:1723, e:"清世宗雍正"}, {y:1662, e:"清聖祖康熙"},
           {y:1644, e:"清世祖順治"}, {y:-99999, e:""}];
    }
    
    var chineseNumbers = ["一","二","三","四","五","六","七","八","九","十"];
    var n = eras.length;
    var era="";
    for (var i=0; i<n; i++) {
        if (year >= eras[i].y) {
            if (eras[i].e != "") {
                era = "("+eras[i].e;
                var offset = ('offset' in eras[i] ? eras[i].offset:0);
                var ey = year - eras[i].y + 1 + offset;
                if (offset >= 0) {
                    if (ey==1) {
                        era += "元"+nian+")";
                    } else if (ey < 11) {
                        era += chineseNumbers[ey-1]+nian+")";
                    } else if (ey < 20) {
                        era += chineseNumbers[9]+chineseNumbers[ey-11] + nian + ")";
                    } else {
                        var i1 = Math.floor(ey*0.1);
                        var i0 = ey - 10*i1;
                        era += chineseNumbers[i1-1]+chineseNumbers[9];
                        if (i0 > 0) {
                            era += chineseNumbers[i0-1];
                        }
                        era += nian+")";
                    }
                } else {
                    era += ")";
                }
            }
            break;
        }
    }
    return era;
}