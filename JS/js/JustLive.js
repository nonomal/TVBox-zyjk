// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel

var rule = {
    title: 'JustLive',
    host: 'http://live.yj1211.work',
    homeUrl: '/api/live/getRecommend?page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    url: '/api/live/getRecommendByPlatformArea?platform=fyclass&area=fyfilter&page=fypage&size=20', //网站的分类页面链接
    class_name: '斗鱼&虎牙&哔哩&网易',
    class_url: 'douyu&huya&bilibili&cc',
    filterable: 1,
    filter_url: '{{fl.area or "影音馆"}}',
    filter_def:{
        douyu:{
        area:'一起看',
        },
        huya:{
        area:'一起看',
        },
        bilibili:{
        area:'影音馆',
        },
        cc:{
        area:'星秀',
        }
    },
    filter: { 
        'douyu': [{ 'key': 'area', 'name': '分区', 'value': [{ 'n': '一起看', 'v': '一起看' }, { 'n': '二次元', 'v': '二次元' }, { 'n': '颜值', 'v': '颜值' }, { 'n': '颜值（横屏）', 'v': '颜值（横屏）' }, { 'n': '音乐', 'v': '音乐' }, { 'n': '户外', 'v': '户外' }, { 'n': '美食', 'v': '美食' }, { 'n': '原创IP', 'v': '原创IP' }, { 'n': '互动交友', 'v': '互动交友' }, { 'n': '音遇恋人', 'v': '音遇恋人' }, { 'n': '舞蹈', 'v': '舞蹈' }, { 'n': '趣生活', 'v': '趣生活' }, { 'n': '心动FM', 'v': '心动FM' }, { 'n': '娱乐推荐', 'v': '娱乐推荐' }, { 'n': '校园', 'v': '校园' }, { 'n': '文化', 'v': '文化' }, { 'n': '企鹅直播', 'v': '企鹅直播' }, { 'n': '数码科技', 'v': '数码科技' }, { 'n': '社会人文', 'v': '社会人文' }, { 'n': '汽车', 'v': '汽车' }, { 'n': '科普', 'v': '科普' }, { 'n': '纪录片', 'v': '纪录片' }, { 'n': '斗鱼购物', 'v': '斗鱼购物' }, { 'n': '成年教育', 'v': '成年教育' }, { 'n': '交友', 'v': '交友' }, { 'n': '心动FM.', 'v': '心动FM.' }, { 'n': '一起玩', 'v': '一起玩' }, { 'n': '开黑车队', 'v': '开黑车队' }, { 'n': '点唱', 'v': '点唱' }, { 'n': 'CP聊天', 'v': 'CP聊天' }, { 'n': '语音交友', 'v': '语音交友' }, { 'n': '音乐之声', 'v': '音乐之声' }, { 'n': '连麦互动', 'v': '连麦互动' }, { 'n': '娱乐开黑', 'v': '娱乐开黑' }, { 'n': '星星点灯', 'v': '星星点灯' }, { 'n': '正能量', 'v': '正能量' }, { 'n': '赛车竞技', 'v': '赛车竞技' }, { 'n': '京斗云', 'v': '京斗云' }, { 'n': '英雄联盟', 'v': '英雄联盟' }, { 'n': '热门游戏', 'v': '热门游戏' }, { 'n': '穿越火线', 'v': '穿越火线' }, { 'n': 'CFHD', 'v': 'CFHD' }, { 'n': '使命召唤', 'v': '使命召唤' }, { 'n': 'DNF', 'v': 'DNF' }, { 'n': 'DOTA2', 'v': 'DOTA2' }, { 'n': '炉石传说', 'v': '炉石传说' }, { 'n': 'CS:GO', 'v': 'CS:GO' }, { 'n': 'VALORANT', 'v': 'VALORANT' }, { 'n': 'lol云顶之弈', 'v': 'lol云顶之弈' }, { 'n': '魔兽争霸', 'v': '魔兽争霸' }, { 'n': '魔兽怀旧服', 'v': '魔兽怀旧服' }, { 'n': '自走棋', 'v': '自走棋' }, { 'n': '传奇', 'v': '传奇' }, { 'n': '跑跑卡丁车', 'v': '跑跑卡丁车' }, { 'n': '网易游戏', 'v': '网易游戏' }, { 'n': '星际争霸', 'v': '星际争霸' }, { 'n': '格斗游戏', 'v': '格斗游戏' }, { 'n': '守望先锋归来', 'v': '守望先锋归来' }, { 'n': 'DOTA', 'v': 'DOTA' }, { 'n': '魔兽世界', 'v': '魔兽世界' }, { 'n': '剑网3', 'v': '剑网3' }, { 'n': '我的世界', 'v': '我的世界' }, { 'n': '超激斗梦境', 'v': '超激斗梦境' }, { 'n': '冒险岛', 'v': '冒险岛' }, { 'n': '三国杀', 'v': '三国杀' }, { 'n': '梦幻西游', 'v': '梦幻西游' }, { 'n': '天涯明月刀', 'v': '天涯明月刀' }, { 'n': '街头篮球', 'v': '街头篮球' }, { 'n': 'NBA2KOL2', 'v': 'NBA2KOL2' }, { 'n': 'QQ飞车端游', 'v': 'QQ飞车端游' }, { 'n': '战地之王', 'v': '战地之王' }, { 'n': '军事游戏', 'v': '军事游戏' }, { 'n': '棋牌娱乐', 'v': '棋牌娱乐' }, { 'n': 'FIFA ONLINE 4', 'v': 'FIFA ONLINE 4' }, { 'n': '热门网游', 'v': '热门网游' }, { 'n': '诛仙世界', 'v': '诛仙世界' }, { 'n': '千古风流', 'v': '千古风流' }, { 'n': 'APEX', 'v': 'APEX' }, { 'n': '流放之路POE', 'v': '流放之路POE' }, { 'n': '剑网3缘起', 'v': '剑网3缘起' }, { 'n': '逆水寒', 'v': '逆水寒' }, { 'n': '风暴英雄', 'v': '风暴英雄' }, { 'n': '逆战', 'v': '逆战' }, { 'n': '坦克世界', 'v': '坦克世界' }, { 'n': '战舰世界', 'v': '战舰世界' }, { 'n': '巫师之昆特牌', 'v': '巫师之昆特牌' }, { 'n': '反恐精英Online', 'v': '反恐精英Online' }, { 'n': '暗黑破坏神3', 'v': '暗黑破坏神3' }, { 'n': '梦三国2', 'v': '梦三国2' }, { 'n': '传奇世界', 'v': '传奇世界' }, { 'n': '方舟：生存进化', 'v': '方舟：生存进化' }, { 'n': '刀塔霸业', 'v': '刀塔霸业' }, { 'n': '神武4电脑版', 'v': '神武4电脑版' }, { 'n': '群雄逐鹿', 'v': '群雄逐鹿' }, { 'n': '堡垒之夜', 'v': '堡垒之夜' }, { 'n': '无限法则', 'v': '无限法则' }, { 'n': '问道电脑版', 'v': '问道电脑版' }, { 'n': '西山居游戏', 'v': '西山居游戏' }, { 'n': '最终幻想14', 'v': '最终幻想14' }, { 'n': '战意', 'v': '战意' }, { 'n': '剑灵', 'v': '剑灵' }, { 'n': '星际战甲', 'v': '星际战甲' }, { 'n': '龙之谷', 'v': '龙之谷' }, { 'n': '铁甲雄兵', 'v': '铁甲雄兵' }, { 'n': '古剑奇谭网络版', 'v': '古剑奇谭网络版' }, { 'n': '轩辕传奇', 'v': '轩辕传奇' }, { 'n': '神途', 'v': '神途' }, { 'n': '激战2', 'v': '激战2' }, { 'n': '高达文化区', 'v': '高达文化区' }] }], 
        'huya': [{ 'key': 'area', 'name': '分区', 'value': [{ 'n': '一起看', 'v': '一起看' }, { 'n': '放映厅', 'v': '放映厅' }, { 'n': '星秀', 'v': '星秀' }, { 'n': '户外', 'v': '户外' }, { 'n': '二次元', 'v': '二次元' }, { 'n': '美食', 'v': '美食' }, { 'n': '颜值', 'v': '颜值' }, { 'n': '交友', 'v': '交友' }, { 'n': '体育', 'v': '体育' }, { 'n': '娱乐天地', 'v': '娱乐天地' }, { 'n': '吃喝玩乐', 'v': '吃喝玩乐' }, { 'n': '组队', 'v': '组队' }, { 'n': '原创', 'v': '原创' }, { 'n': '虎牙地方', 'v': '虎牙地方' }, { 'n': '虚拟偶像', 'v': '虚拟偶像' }, { 'n': '虎牙文化', 'v': '虎牙文化' }, { 'n': '趣分享', 'v': '趣分享' }, { 'n': '音乐', 'v': '音乐' }, { 'n': '派对', 'v': '派对' }, { 'n': '科技', 'v': '科技' }, { 'n': '直播购', 'v': '直播购' }, { 'n': '旅游', 'v': '旅游' }, { 'n': '英雄联盟', 'v': '英雄联盟' }, { 'n': '超击突破', 'v': '超击突破' }, { 'n': '守望先锋归来', 'v': '守望先锋归来' }, { 'n': 'lol云顶之弈', 'v': 'lol云顶之弈' }, { 'n': '穿越火线', 'v': '穿越火线' }, { 'n': '暴雪专区', 'v': '暴雪专区' }, { 'n': '地下城与勇士', 'v': '地下城与勇士' }, { 'n': '炉石传说', 'v': '炉石传说' }, { 'n': '魔兽世界', 'v': '魔兽世界' }, { 'n': 'DOTA2', 'v': 'DOTA2' }, { 'n': 'CS:GO', 'v': 'CS:GO' }, { 'n': 'DOTA1', 'v': 'DOTA1' }, { 'n': 'QQ飞车', 'v': 'QQ飞车' }, { 'n': '问道', 'v': '问道' }, { 'n': '魔兽争霸3', 'v': '魔兽争霸3' }, { 'n': '逆战', 'v': '逆战' }, { 'n': '梦三国', 'v': '梦三国' }, { 'n': '网游竞技', 'v': '网游竞技' }, { 'n': '射击综合游戏', 'v': '射击综合游戏' }, { 'n': '军事游戏', 'v': '军事游戏' }, { 'n': '坦克世界', 'v': '坦克世界' }, { 'n': '永恒之塔', 'v': '永恒之塔' }, { 'n': '剑灵', 'v': '剑灵' }, { 'n': '御龙在天', 'v': '御龙在天' }, { 'n': '传奇', 'v': '传奇' }, { 'n': '神武4电脑版', 'v': '神武4电脑版' }, { 'n': '起凡：群雄逐鹿', 'v': '起凡：群雄逐鹿' }, { 'n': '体育游戏', 'v': '体育游戏' }, { 'n': '传奇类游戏', 'v': '传奇类游戏' }, { 'n': '彩虹岛Online', 'v': '彩虹岛Online' }, { 'n': '诛仙3', 'v': '诛仙3' }, { 'n': '逆水寒', 'v': '逆水寒' }, { 'n': '炉石战棋', 'v': '炉石战棋' }, { 'n': 'CFHD', 'v': 'CFHD' }, { 'n': '冒险岛', 'v': '冒险岛' }, { 'n': '生死狙击2', 'v': '生死狙击2' }, { 'n': 'QQ三国', 'v': 'QQ三国' }, { 'n': '反恐精英Online', 'v': '反恐精英Online' }, { 'n': '龙之谷', 'v': '龙之谷' }, { 'n': '战舰世界', 'v': '战舰世界' }, { 'n': '枪神纪', 'v': '枪神纪' }, { 'n': '热血江湖', 'v': '热血江湖' }, { 'n': '九阴真经', 'v': '九阴真经' }, { 'n': '星际战甲', 'v': '星际战甲' }, { 'n': 'NBA2KOL系列', 'v': 'NBA2KOL系列' }, { 'n': '寻仙', 'v': '寻仙' }, { 'n': '铁甲雄兵', 'v': '铁甲雄兵' }, { 'n': '刀剑英雄', 'v': '刀剑英雄' }, { 'n': '荒野行动PC版', 'v': '荒野行动PC版' }, { 'n': 'FIFA Online系列', 'v': 'FIFA Online系列' }, { 'n': '暗黑破坏神', 'v': '暗黑破坏神' }, { 'n': '征途', 'v': '征途' }, { 'n': '斗战神', 'v': '斗战神' }, { 'n': '星际争霸', 'v': '星际争霸' }, { 'n': 'VALORANT', 'v': 'VALORANT' }, { 'n': '跑跑卡丁车', 'v': '跑跑卡丁车' }, { 'n': '天涯明月刀', 'v': '天涯明月刀' }, { 'n': 'QQ华夏', 'v': 'QQ华夏' }, { 'n': '剑网3', 'v': '剑网3' }, { 'n': '武林外传一世琴缘', 'v': '武林外传一世琴缘' }, { 'n': '反恐行动online', 'v': '反恐行动online' }, { 'n': '完美端游系列', 'v': '完美端游系列' }] }], 
        'bilibili': [{ 'key': 'area', 'name': '分区', 'value': [{ 'n': '影音馆', 'v': '影音馆' }, { 'n': '视频唱见', 'v': '视频唱见' }, { 'n': '萌宅领域', 'v': '萌宅领域' }, { 'n': '视频聊天', 'v': '视频聊天' }, { 'n': '舞见', 'v': '舞见' }, { 'n': '情感', 'v': '情感' }, { 'n': '户外', 'v': '户外' }, { 'n': '日常', 'v': '日常' }, { 'n': '唱见电台', 'v': '唱见电台' }, { 'n': '聊天电台', 'v': '聊天电台' }, { 'n': '配音', 'v': '配音' }, { 'n': '虚拟主播', 'v': '虚拟主播' }, { 'n': '3D虚拟主播', 'v': '3D虚拟主播' }, { 'n': '生活分享', 'v': '生活分享' }, { 'n': '运动', 'v': '运动' }, { 'n': '搞笑', 'v': '搞笑' }, { 'n': '手工绘画', 'v': '手工绘画' }, { 'n': '萌宠', 'v': '萌宠' }, { 'n': '美食', 'v': '美食' }, { 'n': '时尚', 'v': '时尚' }, { 'n': '社科法律心理', 'v': '社科法律心理' }, { 'n': '人文历史', 'v': '人文历史' }, { 'n': '校园学习', 'v': '校园学习' }, { 'n': '职场·技能', 'v': '职场·技能' }, { 'n': ' 科技', 'v': ' 科技' }, { 'n': '科学科普', 'v': '科学科普' }, { 'n': '时政', 'v': '时政' }, { 'n': '购物', 'v': '购物' }, { 'n': '游戏赛事', 'v': '游戏赛事' }, { 'n': '体育赛事', 'v': '体育赛事' }, { 'n': '赛事综合', 'v': '赛事综合' }, { 'n': '英雄联盟', 'v': '英雄联盟' }, { 'n': 'DOTA2', 'v': 'DOTA2' }, { 'n': 'CS:GO', 'v': 'CS:GO' }, { 'n': 'APEX英雄', 'v': 'APEX英雄' }, { 'n': '永劫无间', 'v': '永劫无间' }, { 'n': '穿越火线', 'v': '穿越火线' }, { 'n': '守望先锋', 'v': '守望先锋' }, { 'n': '吃鸡行动', 'v': '吃鸡行动' }, { 'n': '逃离塔科夫', 'v': '逃离塔科夫' }, { 'n': '传奇', 'v': '传奇' }, { 'n': 'DNF', 'v': 'DNF' }, { 'n': '生死狙击2', 'v': '生死狙击2' }, { 'n': '洛奇英雄传', 'v': '洛奇英雄传' }, { 'n': '最终幻想14', 'v': '最终幻想14' }, { 'n': '星际战甲', 'v': '星际战甲' }, { 'n': '梦三国', 'v': '梦三国' }, { 'n': '英魂之刃', 'v': '英魂之刃' }, { 'n': '剑网3', 'v': '剑网3' }, { 'n': '铁甲雄兵', 'v': '铁甲雄兵' }, { 'n': '封印者', 'v': '封印者' }, { 'n': '新天龙八部', 'v': '新天龙八部' }, { 'n': '赛尔号', 'v': '赛尔号' }, { 'n': '造梦西游', 'v': '造梦西游' }, { 'n': '洛克王国', 'v': '洛克王国' }, { 'n': '问道', 'v': '问道' }, { 'n': '诛仙世界', 'v': '诛仙世界' }, { 'n': '大话西游', 'v': '大话西游' }, { 'n': '奇迹MU', 'v': '奇迹MU' }, { 'n': '永恒之塔', 'v': '永恒之塔' }, { 'n': 'QQ三国', 'v': 'QQ三国' }, { 'n': '人间地狱', 'v': '人间地狱' }, { 'n': 'VALORANT', 'v': 'VALORANT' }, { 'n': '彩虹岛', 'v': '彩虹岛' }, { 'n': '洛奇', 'v': '洛奇' }, { 'n': '跑跑卡丁车', 'v': '跑跑卡丁车' }, { 'n': '星际公民', 'v': '星际公民' }, { 'n': 'Squad战术小队', 'v': 'Squad战术小队' }, { 'n': '反恐精英Online', 'v': '反恐精英Online' }, { 'n': '风暴奇侠', 'v': '风暴奇侠' }, { 'n': '装甲战争', 'v': '装甲战争' }, { 'n': '失落的方舟', 'v': '失落的方舟' }, { 'n': '阿尔比恩', 'v': '阿尔比恩' }, { 'n': '猎杀对决', 'v': '猎杀对决' }, { 'n': 'CFHD', 'v': 'CFHD' }, { 'n': '骑士精神2', 'v': '骑士精神2' }, { 'n': '超击突破', 'v': '超击突破' }, { 'n': '武装突袭', 'v': '武装突袭' }, { 'n': '300英雄', 'v': '300英雄' }, { 'n': '炉石传说', 'v': '炉石传说' }, { 'n': '剑网3缘起', 'v': '剑网3缘起' }, { 'n': '街头篮球', 'v': '街头篮球' }, { 'n': '综合射击', 'v': '综合射击' }, { 'n': '剑灵', 'v': '剑灵' }, { 'n': '艾尔之光', 'v': '艾尔之光' }, { 'n': '黑色沙漠', 'v': '黑色沙漠' }, { 'n': '天涯明月刀', 'v': '天涯明月刀' }, { 'n': '超激斗梦境', 'v': '超激斗梦境' }, { 'n': '冒险岛', 'v': '冒险岛' }, { 'n': '逆战', 'v': '逆战' }, { 'n': '魔兽争霸3', 'v': '魔兽争霸3' }, { 'n': 'QQ飞车', 'v': 'QQ飞车' }, { 'n': '魔兽世界', 'v': '魔兽世界' }, { 'n': 'FIFA ONLINE 4', 'v': 'FIFA ONLINE 4' }, { 'n': 'NBA2KOL2', 'v': 'NBA2KOL2' }, { 'n': '使命召唤:战区', 'v': '使命召唤:战区' }, { 'n': 'VRChat', 'v': 'VRChat' }, { 'n': '坦克世界', 'v': '坦克世界' }, { 'n': '战舰世界', 'v': '战舰世界' }, { 'n': '战争雷霆', 'v': '战争雷霆' }, { 'n': '战意', 'v': '战意' }, { 'n': '风暴英雄', 'v': '风暴英雄' }, { 'n': '星际争霸2', 'v': '星际争霸2' }, { 'n': '刀塔自走棋', 'v': '刀塔自走棋' }, { 'n': '堡垒之夜', 'v': '堡垒之夜' }, { 'n': '枪神纪', 'v': '枪神纪' }, { 'n': '三国杀', 'v': '三国杀' }, { 'n': '龙之谷', 'v': '龙之谷' }, { 'n': '古剑奇谭OL', 'v': '古剑奇谭OL' }, { 'n': '幻想全明星', 'v': '幻想全明星' }, { 'n': '怀旧网游', 'v': '怀旧网游' }, { 'n': '新游前瞻', 'v': '新游前瞻' }, { 'n': '星战前夜：晨曦', 'v': '星战前夜：晨曦' }, { 'n': '梦幻西游端游', 'v': '梦幻西游端游' }, { 'n': '流放之路', 'v': '流放之路' }, { 'n': 'FPS沙盒', 'v': 'FPS沙盒' }, { 'n': '永恒轮回', 'v': '永恒轮回' }, { 'n': '激战2', 'v': '激战2' }, { 'n': '其他网游', 'v': '其他网游' }, { 'n': '王者荣耀', 'v': '王者荣耀' }, { 'n': '和平精英', 'v': '和平精英' }, { 'n': 'LOL手游', 'v': 'LOL手游' }, { 'n': '原神', 'v': '原神' }, { 'n': '第五人格', 'v': '第五人格' }, { 'n': '明日方舟', 'v': '明日方舟' }, { 'n': '哈利波特：魔法觉醒', 'v': '哈利波特：魔法觉醒' }, { 'n': '幻塔', 'v': '幻塔' }, { 'n': '金铲铲之战', 'v': '金铲铲之战' }, { 'n': 'APEX手游', 'v': 'APEX手游' }, { 'n': '深空之眼', 'v': '深空之眼' }, { 'n': '无期迷途', 'v': '无期迷途' }, { 'n': '光遇', 'v': '光遇' }, { 'n': '香肠派对', 'v': '香肠派对' }, { 'n': '猫之城', 'v': '猫之城' }, { 'n': '玛娜希斯回响', 'v': '玛娜希斯回响' }, { 'n': '使命召唤手游', 'v': '使命召唤手游' }, { 'n': '黑色沙漠手游', 'v': '黑色沙漠手游' }, { 'n': '崩坏3', 'v': '崩坏3' }, { 'n': '游戏王：决斗链接', 'v': '游戏王：决斗链接' }, { 'n': '游戏王', 'v': '游戏王' }, { 'n': '蛋仔派对', 'v': '蛋仔派对' }, { 'n': '阴阳师', 'v': '阴阳师' }, { 'n': '火影忍者手游', 'v': '火影忍者手游' }, { 'n': 'Fate/GO', 'v': 'Fate/GO' }, { 'n': '综合棋牌', 'v': '综合棋牌' }, { 'n': 'QQ飞车手游', 'v': 'QQ飞车手游' }, { 'n': '决战！平安京', 'v': '决战！平安京' }, { 'n': '狼人杀', 'v': '狼人杀' }, { 'n': '三国杀移动版', 'v': '三国杀移动版' }, { 'n': '碧蓝航线', 'v': '碧蓝航线' }, { 'n': '影之诗', 'v': '影之诗' }, { 'n': '明日之后', 'v': '明日之后' }, { 'n': '部落冲突:皇室战争', 'v': '部落冲突:皇室战争' }, { 'n': '奥比岛手游', 'v': '奥比岛手游' }, { 'n': '盾之勇者成名录：浪潮', 'v': '盾之勇者成名录：浪潮' }, { 'n': '雀姬', 'v': '雀姬' }, { 'n': '公主连结Re:Dive', 'v': '公主连结Re:Dive' }, { 'n': 'DNF手游', 'v': 'DNF手游' }, { 'n': 'FIFA足球世界', 'v': 'FIFA足球世界' }, { 'n': 'BanG Dream', 'v': 'BanG Dream' }, { 'n': '荒野乱斗', 'v': '荒野乱斗' }, { 'n': 'CF手游', 'v': 'CF手游' }, { 'n': '战双帕弥什', 'v': '战双帕弥什' }, { 'n': '天涯明月刀手游', 'v': '天涯明月刀手游' }, { 'n': '解密游戏', 'v': '解密游戏' }, { 'n': '恋爱养成游戏', 'v': '恋爱养成游戏' }, { 'n': '暗黑破坏神：不朽', 'v': '暗黑破坏神：不朽' }, { 'n': '暗区突围', 'v': '暗区突围' }, { 'n': '跑跑卡丁车手游', 'v': '跑跑卡丁车手游' }, { 'n': '非人学园', 'v': '非人学园' }, { 'n': '百闻牌', 'v': '百闻牌' }, { 'n': '猫和老鼠手游', 'v': '猫和老鼠手游' }, { 'n': '坎公骑冠剑', 'v': '坎公骑冠剑' }, { 'n': '忍者必须死3', 'v': '忍者必须死3' }, { 'n': '梦幻西游手游', 'v': '梦幻西游手游' }, { 'n': '航海王热血航线', 'v': '航海王热血航线' }, { 'n': '少女前线', 'v': '少女前线' }, { 'n': '300大作战', 'v': '300大作战' }, { 'n': '少女前线：云图计划', 'v': '少女前线：云图计划' }, { 'n': '漫威超级战争', 'v': '漫威超级战争' }, { 'n': '摩尔庄园手游', 'v': '摩尔庄园手游' }, { 'n': '宝可梦大集结', 'v': '宝可梦大集结' }, { 'n': '小动物之星', 'v': '小动物之星' }, { 'n': '天地劫：幽城再临', 'v': '天地劫：幽城再临' }, { 'n': '漫威对决', 'v': '漫威对决' }, { 'n': '东方归言录', 'v': '东方归言录' }, { 'n': '梦幻模拟战', 'v': '梦幻模拟战' }, { 'n': '时空猎人3', 'v': '时空猎人3' }, { 'n': '重返帝国', 'v': '重返帝国' }, { 'n': '其他手游', 'v': '其他手游' }, { 'n': '新游评测', 'v': '新游评测' }, { 'n': '主机游戏', 'v': '主机游戏' }, { 'n': '我的世界', 'v': '我的世界' }, { 'n': '独立游戏', 'v': '独立游戏' }, { 'n': '怀旧游戏', 'v': '怀旧游戏' }, { 'n': '弹幕互动玩法', 'v': '弹幕互动玩法' }, { 'n': '禁闭求生', 'v': '禁闭求生' }, { 'n': '斯普拉遁3', 'v': '斯普拉遁3' }, { 'n': '卧龙：苍天陨落', 'v': '卧龙：苍天陨落' }, { 'n': '恐怖游戏', 'v': '恐怖游戏' }, { 'n': '使命召唤19', 'v': '使命召唤19' }, { 'n': '异度神剑', 'v': '异度神剑' }, { 'n': '艾尔登法环', 'v': '艾尔登法环' }, { 'n': '聚会游戏', 'v': '聚会游戏' }, { 'n': '命运2', 'v': '命运2' }, { 'n': '沙石镇时光', 'v': '沙石镇时光' }, { 'n': 'Dread Hunger', 'v': 'Dread Hunger' }, { 'n': '红色警戒2', 'v': '红色警戒2' }, { 'n': '失落迷城：群星的诅咒', 'v': '失落迷城：群星的诅咒' }, { 'n': '策略游戏', 'v': '策略游戏' }, { 'n': '战地风云', 'v': '战地风云' }, { 'n': '幽灵线：东京', 'v': '幽灵线：东京' }, { 'n': '糖豆人', 'v': '糖豆人' }, { 'n': '消逝的光芒2', 'v': '消逝的光芒2' }, { 'n': '只狼', 'v': '只狼' }, { 'n': '怪物猎人', 'v': '怪物猎人' }, { 'n': '饥荒', 'v': '饥荒' }, { 'n': '精灵宝可梦', 'v': '精灵宝可梦' }, { 'n': 'FIFA23', 'v': 'FIFA23' }, { 'n': '暖雪', 'v': '暖雪' }, { 'n': '全面战争：战锤3', 'v': '全面战争：战锤3' }, { 'n': '彩虹六号：异种', 'v': '彩虹六号：异种' }, { 'n': '战神', 'v': '战神' }, { 'n': 'FORZA 极限竞速', 'v': 'FORZA 极限竞速' }, { 'n': 'NBA2K', 'v': 'NBA2K' }, { 'n': '帝国时代4', 'v': '帝国时代4' }, { 'n': '光环：无限', 'v': '光环：无限' }, { 'n': '孤岛惊魂6', 'v': '孤岛惊魂6' }, { 'n': '植物大战僵尸', 'v': '植物大战僵尸' }, { 'n': '仙剑奇侠传七', 'v': '仙剑奇侠传七' }, { 'n': '灵魂筹码', 'v': '灵魂筹码' }, { 'n': '格斗游戏', 'v': '格斗游戏' }, { 'n': '荒野大镖客2', 'v': '荒野大镖客2' }, { 'n': '重生细胞', 'v': '重生细胞' }, { 'n': '刺客信条', 'v': '刺客信条' }, { 'n': '恐鬼症', 'v': '恐鬼症' }, { 'n': '以撒', 'v': '以撒' }, { 'n': '双人成行', 'v': '双人成行' }, { 'n': '方舟', 'v': '方舟' }, { 'n': '仁王2', 'v': '仁王2' }, { 'n': '鬼泣5', 'v': '鬼泣5' }, { 'n': '枪火重生', 'v': '枪火重生' }, { 'n': '盗贼之海', 'v': '盗贼之海' }, { 'n': '胡闹厨房', 'v': '胡闹厨房' }, { 'n': '体育游戏', 'v': '体育游戏' }, { 'n': '恐惧之间', 'v': '恐惧之间' }, { 'n': '塞尔达', 'v': '塞尔达' }, { 'n': '马力欧制造2', 'v': '马力欧制造2' }, { 'n': '全境封锁2', 'v': '全境封锁2' }, { 'n': '骑马与砍杀', 'v': '骑马与砍杀' }, { 'n': '人类一败涂地', 'v': '人类一败涂地' }, { 'n': '鬼谷八荒', 'v': '鬼谷八荒' }, { 'n': '无主之地3', 'v': '无主之地3' }, { 'n': '辐射76', 'v': '辐射76' }, { 'n': '全面战争', 'v': '全面战争' }, { 'n': '亿万僵尸', 'v': '亿万僵尸' }, { 'n': '暗黑破坏神2', 'v': '暗黑破坏神2' }, { 'n': '文字游戏', 'v': '文字游戏' }, { 'n': '恋爱模拟游戏', 'v': '恋爱模拟游戏' }, { 'n': '泰拉瑞亚', 'v': '泰拉瑞亚' }, { 'n': '雨中冒险2', 'v': '雨中冒险2' }, { 'n': '游戏速通', 'v': '游戏速通' }, { 'n': '摔角城大乱斗', 'v': '摔角城大乱斗' }, { 'n': '勇敢的哈克', 'v': '勇敢的哈克' }, { 'n': ' 审判系列', 'v': ' 审判系列' }, { 'n': '太吾绘卷', 'v': '太吾绘卷' }, { 'n': '其他单机', 'v': '其他单机' }] }], 
        'cc': [{ 'key': 'area', 'name': '分区', 'value': [{ 'n': '星秀', 'v': '星秀' }, { 'n': '二次元', 'v': '二次元' }, { 'n': '风华正茂', 'v': '风华正茂' }, { 'n': '正能量', 'v': '正能量' }, { 'n': '古风国色', 'v': '古风国色' }, { 'n': '巨好看', 'v': '巨好看' }, { 'n': '语音', 'v': '语音' }, { 'n': '梦幻西游手游', 'v': '梦幻西游手游' }, { 'n': '倩女幽魂手游', 'v': '倩女幽魂手游' }, { 'n': '第五人格', 'v': '第五人格' }, { 'n': '荒野行动', 'v': '荒野行动' }, { 'n': '大话西游手游', 'v': '大话西游手游' }, { 'n': '明日之后', 'v': '明日之后' }, { 'n': '阴阳师', 'v': '阴阳师' }, { 'n': '率土之滨', 'v': '率土之滨' }, { 'n': '决战！平安京', 'v': '决战！平安京' }, { 'n': '猫和老鼠', 'v': '猫和老鼠' }, { 'n': '暗黑破坏神:不朽', 'v': '暗黑破坏神:不朽' }, { 'n': '光·遇', 'v': '光·遇' }, { 'n': '天谕手游', 'v': '天谕手游' }, { 'n': '镇魔曲手游', 'v': '镇魔曲手游' }, { 'n': '宝可梦大探险', 'v': '宝可梦大探险' }, { 'n': '梦幻西游三维版', 'v': '梦幻西游三维版' }, { 'n': '综合手游', 'v': '综合手游' }, { 'n': '哈利波特：魔法觉醒', 'v': '哈利波特：魔法觉醒' }, { 'n': '神都夜行录', 'v': '神都夜行录' }, { 'n': '王牌竞速', 'v': '王牌竞速' }, { 'n': '星战前夜：无烬星河', 'v': '星战前夜：无烬星河' }, { 'n': '忘川风华录', 'v': '忘川风华录' }, { 'n': '漫威超级战争', 'v': '漫威超级战争' }, { 'n': '无尽的拉格朗日', 'v': '无尽的拉格朗日' }, { 'n': '大唐无双手游', 'v': '大唐无双手游' }, { 'n': '量子特攻', 'v': '量子特攻' }, { 'n': '机动都市阿尔法', 'v': '机动都市阿尔法' }, { 'n': '逆水寒手游', 'v': '逆水寒手游' }, { 'n': '非人学园', 'v': '非人学园' }, { 'n': '光明大陆', 'v': '光明大陆' }, { 'n': '梦幻西游网页版', 'v': '梦幻西游网页版' }, { 'n': '乱斗西游2', 'v': '乱斗西游2' }, { 'n': '《天下》手游', 'v': '《天下》手游' }, { 'n': '劲舞团', 'v': '劲舞团' }, { 'n': '三少爷的剑', 'v': '三少爷的剑' }, { 'n': '迷雾世界', 'v': '迷雾世界' }, { 'n': '终结战场', 'v': '终结战场' }, { 'n': '永远的7日之都', 'v': '永远的7日之都' }, { 'n': '狼人杀', 'v': '狼人杀' }, { 'n': '魂之轨迹', 'v': '魂之轨迹' }, { 'n': '三国如龙传', 'v': '三国如龙传' }, { 'n': '堡垒前线:破坏与创造', 'v': '堡垒前线:破坏与创造' }, { 'n': '战争怒吼', 'v': '战争怒吼' }, { 'n': '猎魂觉醒', 'v': '猎魂觉醒' }, { 'n': '终结战场PC版', 'v': '终结战场PC版' }, { 'n': '轩辕剑龙舞云山', 'v': '轩辕剑龙舞云山' }, { 'n': '实况：王者集结', 'v': '实况：王者集结' }, { 'n': '权力与纷争', 'v': '权力与纷争' }, { 'n': '花与剑', 'v': '花与剑' }, { 'n': '流星群侠传', 'v': '流星群侠传' }, { 'n': '游戏王:决斗链接', 'v': '游戏王:决斗链接' }, { 'n': '遇见逆水寒', 'v': '遇见逆水寒' }, { 'n': '阴阳师：百闻牌', 'v': '阴阳师：百闻牌' }, { 'n': '青璃', 'v': '青璃' }, { 'n': '阴阳师：妖怪屋', 'v': '阴阳师：妖怪屋' }, { 'n': '重装上阵', 'v': '重装上阵' }, { 'n': '猎手之王', 'v': '猎手之王' }, { 'n': '第九所', 'v': '第九所' }, { 'n': 'Badlanders', 'v': 'Badlanders' }, { 'n': '风云岛行动', 'v': '风云岛行动' }, { 'n': '一起优诺', 'v': '一起优诺' }, { 'n': '隐世录', 'v': '隐世录' }, { 'n': '洪荒文明', 'v': '洪荒文明' }, { 'n': '密特拉之星', 'v': '密特拉之星' }, { 'n': '阴阳师: 妖怪小班', 'v': '阴阳师: 妖怪小班' }, { 'n': '漫威对决', 'v': '漫威对决' }, { 'n': '月神的迷宫', 'v': '月神的迷宫' }, { 'n': '有杀气童话2', 'v': '有杀气童话2' }, { 'n': '零号任务', 'v': '零号任务' }, { 'n': '蛋仔派对', 'v': '蛋仔派对' }, { 'n': '绝对演绎', 'v': '绝对演绎' }, { 'n': '大航海之路', 'v': '大航海之路' }, { 'n': '大富翁9', 'v': '大富翁9' }, { 'n': '永恒文明', 'v': '永恒文明' }, { 'n': '新游中心', 'v': '新游中心' }, { 'n': '我的世界中国版', 'v': '我的世界中国版' }, { 'n': '梦幻西游电脑版', 'v': '梦幻西游电脑版' }, { 'n': '大话西游2经典版', 'v': '大话西游2经典版' }, { 'n': '永劫无间', 'v': '永劫无间' }, { 'n': '新倩女幽魂', 'v': '新倩女幽魂' }, { 'n': '荒野行动PC模拟器', 'v': '荒野行动PC模拟器' }, { 'n': '天下3', 'v': '天下3' }, { 'n': '一梦江湖', 'v': '一梦江湖' }, { 'n': '大话西游2免费版', 'v': '大话西游2免费版' }, { 'n': '逆水寒', 'v': '逆水寒' }, { 'n': '其他游戏', 'v': '其他游戏' }, { 'n': '超激斗梦境', 'v': '超激斗梦境' }, { 'n': '魔兽世界怀旧服', 'v': '魔兽世界怀旧服' }, { 'n': '镇魔曲', 'v': '镇魔曲' }, { 'n': 'FPS综合游戏', 'v': 'FPS综合游戏' }, { 'n': '绿茵信仰', 'v': '绿茵信仰' }, { 'n': '天谕', 'v': '天谕' }, { 'n': '魔兽世界', 'v': '魔兽世界' }, { 'n': '大唐无双零', 'v': '大唐无双零' }, { 'n': '武魂2', 'v': '武魂2' }, { 'n': '命运2', 'v': '命运2' }, { 'n': '暗黑破坏神', 'v': '暗黑破坏神' }, { 'n': '泰亚史诗', 'v': '泰亚史诗' }, { 'n': '泰亚史诗', 'v': '泰亚史诗' }, { 'n': '战意', 'v': '战意' }, { 'n': '易次元', 'v': '易次元' }, { 'n': '无主之地3', 'v': '无主之地3' }, { 'n': 'EVE Online', 'v': 'EVE Online' }, { 'n': '全面战争：竞技场', 'v': '全面战争：竞技场' }, { 'n': '暴雪游戏', 'v': '暴雪游戏' }, { 'n': '魔兽争霸', 'v': '魔兽争霸' }, { 'n': '大话女儿国', 'v': '大话女儿国' }] }] },
    detailUrl: '/index/liveRoom?platform=fyclass&roomId=fyid',//二级详情拼接链接(json格式用)
    searchUrl: '/api/live/search?platform=all&keyWords=**&isLive=0',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    play_parse: true,
    lazy: '',
    double: false,
    limit: 6,
    推荐: '*',
    一级: 'json:data;roomName;roomPic;ownerName;roomId',
    二级: '*',
    搜索: '*',
}