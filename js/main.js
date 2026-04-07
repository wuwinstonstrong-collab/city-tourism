// 城市旅游指南 - 主逻辑
let currentCity = 'shanghai';
let currentPage = 'intro';

const data = {
    shanghai: {
        intro: { title: '上海 · 魔都之旅', hero: 'images/shanghai_bund.jpg', tags: ['摩登都市', '海派文化', '购物天堂'], desc: '中国最大的经济中心城市，将东西方文化完美融合', stats: [{v: '6340', l: '面积(km²)'}, {v: '2487万', l: '常住人口'}, {v: '全国第一', l: 'GDP排名'}], spots: ['外滩', '陆家嘴', '豫园', '武康路'] },
        food: { title: '上海 · 美食地图', items: [{n: '本帮红烧肉', p: '¥68', d: '选用五花肉慢火红烧，肥而不腻', t: ['浓油赤酱', '必吃榜'], img: 'images/shanghai_yuyuan.jpg'}, {n: '南翔小笼包', p: '¥28', d: '皮薄馅大汤多，鲜美无比', t: ['皮薄汁多', '排队王'], img: 'images/shanghai_bund.jpg'}, {n: '蟹粉拌面', p: '¥88', d: '金秋时节最肥美的蟹黄蟹肉', t: ['时令美味', '蟹黄满满'], img: 'images/shanghai_pearl.jpg'}], streets: [{n: '淮海路', d: '老字号美食聚集地'}, {n: '虹泉路', d: '正宗韩料天堂'}] },
        scenery: { title: '上海 · 网红打卡', items: [{n: '外滩', r: 5, d: '万国建筑博览群，52栋风格迥异大楼', t: '2-3小时', p: '免费', img: 'images/shanghai_bund.jpg', tag: '必打卡'}, {n: '东方明珠', r: 4.5, d: '468米高空俯瞰上海', t: '2-3小时', p: '¥180起', img: 'images/shanghai_pearl.jpg', tag: '地标'}, {n: '豫园', r: 5, d: '始建于明代的古典园林', t: '1-2小时', p: '¥40', img: 'images/shanghai_yuyuan.jpg', tag: '古典'}, {n: '陆家嘴', r: 4.5, d: '中国金融中心，摩天大楼林立', t: '2-3小时', p: '免费', img: 'images/shanghai_pudong.jpg', tag: '现代'}] },
        hotel: { title: '上海 · 住宿推荐', luxury: [{n: '外滩华尔道夫酒店', p: '¥2500+', l: '外滩核心位置', t: ['江景房'], img: 'images/shanghai_bund.jpg'}, {n: '上海柏悦酒店', p: '¥1800+', l: '环球金融中心', t: ['高空景观'], img: 'images/shanghai_pearl.jpg'}], budget: [{n: '全季酒店（南京路店）', p: '¥400+', l: '地铁2号线南京东路站', t: ['含早'], img: 'images/shanghai_yuyuan.jpg'}, {n: '如家精选（陆家嘴店）', p: '¥350+', l: '地铁2号线东昌路站', t: ['新装修'], img: 'images/shanghai_pudong.jpg'}] },
        other: { title: '上海 · 实用攻略', transport: [{t: '地铁', d: '18条线路，覆盖全城', c: 'blue'}, {t: '公交', d: '线路密集，票价2元', c: 'green'}, {t: '出租车', d: '起步价14元', c: 'yellow'}], bestTime: [{s: '🌸', t: '春季 3-5月', d: '踏青赏樱最佳时节'}, {s: '🍂', t: '秋季 9-11月', d: '秋高气爽银杏金黄'}], tips: [{t: '💡', c: '外滩观景要趁早', d: '傍晚5点前去，晚了会限流'}, {t: '🚇', c: '地铁是最优选', d: '高峰期堵车严重，地铁准时又快'}] }
    },
    wuhan: {
        intro: { title: '武汉 · 江城风情', hero: 'images/wuhan_yellowcrane.jpg', tags: ['过早文化', '樱花之城', '英雄城市'], desc: '两江交汇、三镇鼎立，楚文化发源地', stats: [{v: '8569', l: '面积(km²)'}, {v: '1232万', l: '常住人口'}, {v: '中部第一', l: 'GDP排名'}], spots: ['黄鹤楼', '武汉大学', '东湖', '汉正街'] },
        food: { title: '武汉 · 美食地图', items: [{n: '热干面', p: '¥8', d: '芝麻酱香浓可口，武汉人最爱的早餐', t: ['必吃榜', '早餐首选'], img: 'images/wuhan_yellowcrane.jpg'}, {n: '豆皮', p: '¥10', d: '外脆内软，馅料丰富', t: ['酥脆', '排队王'], img: 'images/wuhan_eastlake.jpg'}, {n: '糊汤粉', p: '¥12', d: '用鱼糊煮的米粉，汤鲜肉嫩', t: ['特色推荐', '配油条绝了'], img: 'images/wuhan_wuda.jpg'}], streets: [{n: '粮道街', d: '武汉本地人常去的美食街'}, {n: '万松园', d: '老字号美食聚集地'}] },
        scenery: { title: '武汉 · 网红打卡', items: [{n: '黄鹤楼', r: 5, d: '天下江山第一楼，江南三大名楼之首', t: '1-2小时', p: '¥70', img: 'images/wuhan_yellowcrane.jpg', tag: '必打卡'}, {n: '东湖', r: 5, d: '中国最大的城中湖', t: '3-4小时', p: '免费', img: 'images/wuhan_eastlake.jpg', tag: '自然'}, {n: '武汉大学', r: 4.5, d: '中国最美大学，樱花闻名全国', t: '2-3小时', p: '免费', img: 'images/wuhan_wuda.jpg', tag: '人文'}] },
        hotel: { title: '武汉 · 住宿推荐', luxury: [{n: '武汉香格里拉大酒店', p: '¥800+', l: '汉口江滩', t: ['江景'], img: 'images/wuhan_eastlake.jpg'}, {n: '武汉万达瑞华酒店', p: '¥900+', l: '东湖边', t: ['湖景'], img: 'images/wuhan_yellowcrane.jpg'}], budget: [{n: '如家酒店（黄鹤楼店）', p: '¥180+', l: '靠近黄鹤楼', t: ['位置好'], img: 'images/wuhan_yellowcrane.jpg'}, {n: '全季酒店（光谷店）', p: '¥200+', l: '光谷商圈', t: ['新装修'], img: 'images/wuhan_wuda.jpg'}] },
        other: { title: '武汉 · 实用攻略', transport: [{t: '地铁', d: '已开通11条线路', c: 'blue'}, {t: '公交', d: '线路密集，票价2元', c: 'green'}, {t: '轮渡', d: '武汉关至中华路码头，¥1.5', c: 'cyan'}], bestTime: [{s: '🌸', t: '春季 3-4月', d: '武大樱花季'}, {s: '🍂', t: '秋季 10-11月', d: '秋高气爽'}], tips: [{t: '💡', c: '武大樱花需预约', d: '提前在官网预约'}, {t: '🚢', c: '长江夜游不可错过', d: '推荐晚上乘坐'}] }
    },
    beijing: {
        intro: { title: '北京 · 首都之旅', hero: 'images/beijing_tiananmen.jpg', tags: ['历史文化', '古都风貌', '政治中心'], desc: '中华人民共和国的首都，全国政治文化中心', stats: [{v: '16410', l: '面积(km²)'}, {v: '2189万', l: '常住人口'}, {v: '首都', l: '政治中心'}], spots: ['故宫', '长城', '天坛', '胡同'] },
        food: { title: '北京 · 美食地图', items: [{n: '北京烤鸭', p: '¥168-298', d: '世界闻名，酥脆鸭皮配葱丝黄瓜', t: ['招牌', '必吃'], img: 'images/beijing_forbidden.jpg'}, {n: '炸酱面', p: '¥25', d: '老北京传统面食，酱香浓郁', t: ['传统', '家常'], img: 'images/beijing_temple.jpg'}, {n: '涮羊肉', p: '¥80', d: '老北京传统火锅，手切羊肉鲜嫩', t: ['特色', '暖胃'], img: 'images/beijing_greatwall.jpg'}], streets: [{n: '簋街', d: '夜宵一条街'}, {n: '南锣鼓巷', d: '老北京胡同文化'}] },
        scenery: { title: '北京 · 必游景点', items: [{n: '故宫博物院', r: 5, d: '世界最大木质结构古建筑群', t: '3-4小时', p: '¥60', img: 'images/beijing_forbidden.jpg', tag: '世界遗产'}, {n: '八达岭长城', r: 5, d: '不到长城非好汉', t: '4-5小时', p: '¥45', img: 'images/beijing_greatwall.jpg', tag: '必打卡'}, {n: '天坛公园', r: 4.5, d: '明清帝王祭天祈谷圣地', t: '1-2小时', p: '¥34', img: 'images/beijing_temple.jpg', tag: '古典'}, {n: '天安门广场', r: 4, d: '世界上最大的城市广场之一', t: '1小时', p: '免费', img: 'images/beijing_tiananmen.jpg', tag: '地标'}] },
        hotel: { title: '北京 · 住宿推荐', luxury: [{n: '王府井文华东方酒店', p: '¥3000+', l: '王府井商圈', t: ['奢华'], img: 'images/beijing_forbidden.jpg'}, {n: '中国大饭店', p: '¥1500+', l: 'CBD核心', t: ['商务'], img: 'images/beijing_tiananmen.jpg'}], budget: [{n: '胡同里的四合院', p: '¥500+', l: '老北京胡同', t: ['体验文化'], img: 'images/beijing_temple.jpg'}, {n: '全季酒店（王府井店）', p: '¥400+', l: '王府井', t: ['位置好'], img: 'images/beijing_greatwall.jpg'}] },
        other: { title: '北京 · 实用攻略', transport: [{t: '地铁', d: '24条线路，覆盖主要景点', c: 'blue'}, {t: '公交', d: '票价2元', c: 'green'}, {t: '出租车', d: '起步价13元', c: 'yellow'}], bestTime: [{s: '🌸', t: '春季 4-5月', d: '踏青赏花'}, {s: '🍂', t: '秋季 9-10月', d: '秋高气爽'}], tips: [{t: '💡', c: '故宫需提前预约', d: '周一闭馆'}, {t: '🏯', c: '长城建议报一日游', d: '交通较不便'}] }
    },
    shenzhen: {
        intro: { title: '深圳 · 创新之城', hero: 'images/shenzhen_window.jpg', tags: ['科技之都', '主题公园', '海滨城市'], desc: '中国第一个经济特区，改革开放的窗口', stats: [{v: '1997', l: '面积(km²)'}, {v: '1766万', l: '常住人口'}, {v: '设计之都', l: '城市名片'}], spots: ['世界之窗', '欢乐谷', '东部华侨城', '深圳湾'] },
        food: { title: '深圳 · 美食地图', items: [{n: '粤式早茶', p: '¥60-100', d: '虾饺、烧卖、凤爪、肠粉', t: ['特色', '必吃'], img: 'images/shenzhen_window.jpg'}, {n: '椰子鸡', p: '¥80', d: '深圳特色，椰子水煮鸡清甜滋补', t: ['本地特色', '清淡'], img: 'images/shenzhen_cyberpark.jpg'}, {n: '光明乳鸽', p: '¥45', d: '深圳光明区特色，皮脆肉嫩', t: ['特产', '必吃'], img: 'images/shenzhen_window.jpg'}], streets: [{n: '东门老街', d: '美食购物一条街'}, {n: '海岸城', d: '现代商圈美食'}] },
        scenery: { title: '深圳 · 网红打卡', items: [{n: '世界之窗', r: 4.5, d: '荟萃世界著名景观', t: '1天', p: '¥220', img: 'images/shenzhen_window.jpg', tag: '主题公园'}, {n: '东部华侨城', r: 4.5, d: '生态旅游示范区', t: '1天', p: '¥200', img: 'images/shenzhen_cyberpark.jpg', tag: '自然'}, {n: '深圳湾公园', r: 4, d: '海滨公园，可远眺香港', t: '2-3小时', p: '免费', img: 'images/shenzhen_window.jpg', tag: '休闲'}] },
        hotel: { title: '深圳 · 住宿推荐', luxury: [{n: '深圳福田香格里拉', p: '¥1200+', l: 'CBD核心', t: ['商务'], img: 'images/shenzhen_window.jpg'}, {n: '大梅沙京基喜来登', p: '¥1100+', l: '海滨度假', t: ['度假'], img: 'images/shenzhen_cyberpark.jpg'}], budget: [{n: '全季酒店（华强北店）', p: '¥350+', l: '华强北', t: ['位置好'], img: 'images/shenzhen_cyberpark.jpg'}, {n: '如家酒店（世界之窗店）', p: '¥250+', l: '世界之窗附近', t: ['性价比'], img: 'images/shenzhen_window.jpg'}] },
        other: { title: '深圳 · 实用攻略', transport: [{t: '地铁', d: '12条线路，覆盖全城', c: 'blue'}, {t: '公交', d: '票价2-10元', c: 'green'}, {t: '出租车', d: '起步价10元', c: 'yellow'}], bestTime: [{s: '🌞', t: '全年适宜', d: '气候温暖'}, {s: '🏖️', t: '夏季', d: '大梅沙小梅沙'}, {s: '🍂', t: '10-12月', d: '天气最舒适'}], tips: [{t: '💡', c: '主题公园门票提前买', d: '网上购票更便宜'}, {t: '🏖️', c: '大梅沙是夏日热门', d: '记得带防晒'}] }
    }
};

function stars(r) {
    let s = '';
    for(let i = 0; i < 5; i++) s += i < Math.floor(r) ? '⭐' : (i < r ? '⭐' : '☆');
    return s;
}

function loadContent(page) {
    const contentContainer = document.getElementById('content');
    const d = data[currentCity];
    const c = d[page];
    
    let html = '';
    
    if (page === 'intro') {
        html = `<div class="rounded-2xl overflow-hidden mb-6"><img src="${c.hero}" alt="${currentCity}" class="w-full h-48 md:h-64 object-cover img-zoom"></div>
        <div class="flex flex-wrap gap-2 mb-6">${c.tags.map(t => `<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">${t}</span>`).join('')}</div>
        <div class="bg-white rounded-2xl p-5 shadow-sm mb-6">
            <h3 class="text-lg font-bold text-gray-800 mb-3"><i class="fas fa-star text-yellow-400 mr-2"></i>城市概览</h3>
            <p class="text-gray-600 mb-4">${c.desc}</p>
            <div class="grid grid-cols-3 gap-4 text-center">${c.stats.map(s => `<div class="bg-gray-50 rounded-xl p-3"><div class="text-2xl font-bold text-primary">${s.v}</div><div class="text-xs text-gray-500">${s.l}</div></div>`).join('')}</div>
        </div>
        <div class="bg-gradient-to-r from-primary to-secondary rounded-2xl p-5 text-white mb-6">
            <h3 class="font-bold mb-2">🗺️ 必打卡地标</h3>
            <div class="grid grid-cols-2 gap-3 mt-3">${c.spots.map(s => `<div class="bg-white/20 rounded-xl p-3 backdrop-blur"><div class="font-semibold">${s}</div></div>`).join('')}</div>
        </div>`;
    } 
    else if (page === 'food') {
        html = `<p class="text-gray-600 mb-4">${c.items.length > 0 ? '跟着本地人吃这些绝对不会踩雷！' : ''}</p>
        <div class="space-y-4">${c.items.map(item => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm card-hover flex flex-col md:flex-row">
            <img src="${item.img}" alt="${item.n}" class="w-full md:w-40 h-40 object-cover flex-shrink-0">
            <div class="p-4 flex-1">
                <div class="flex justify-between items-start"><div><h4 class="font-bold text-gray-800">${item.n}</h4></div><span class="text-red-500 font-bold">${item.p}</span></div>
                <p class="text-gray-600 text-sm mt-2">${item.d}</p>
                <div class="flex gap-2 mt-3">${item.t.map(tt => `<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">${tt}</span>`).join('')}</div>
            </div>
        </div>`).join('')}</div>
        <div class="mt-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-5 text-white">
            <h3 class="font-bold text-lg mb-3">📍 宝藏美食街</h3>
            <div class="space-y-2">${c.streets.map(s => `<div class="bg-white/20 rounded-xl p-3 backdrop-blur"><div class="font-semibold">${s.n}</div><p class="text-sm opacity-90">${s.d}</p></div>`).join('')}</div>
        </div>`;
    }
    else if (page === 'scenery') {
        html = `<p class="text-gray-600 mb-4">每一处都是大片！</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${c.items.map(item => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
            <div class="relative"><img src="${item.img}" alt="${item.n}" class="w-full h-44 object-cover img-zoom"><div class="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-full text-xs">${item.tag || ''}</div></div>
            <div class="p-4">
                <div class="flex justify-between items-center"><h4 class="font-bold text-gray-800">${item.n}</h4><span class="text-yellow-500 text-sm">${stars(item.r)}</span></div>
                <p class="text-gray-600 text-sm mt-2 line-clamp-2">${item.d}</p>
                <div class="flex items-center justify-between mt-3"><span class="text-xs text-gray-400"><i class="fas fa-clock mr-1"></i>${item.t}</span><span class="text-primary text-sm font-medium">${item.p}</span></div>
            </div>
        </div>`).join('')}</div>`;
    }
    else if (page === 'hotel') {
        html = `<p class="text-gray-600 mb-4">从奢华酒店到性价比之选！</p>
        <h3 class="font-bold text-gray-800 mb-3"><i class="fas fa-crown text-yellow-500 mr-2"></i>奢华体验</h3>
        <div class="space-y-3 mb-6">${c.luxury.map(h => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
            <img src="${h.img}" alt="${h.n}" class="w-full h-40 object-cover">
            <div class="p-4"><div class="flex justify-between items-start"><div><h4 class="font-bold text-gray-800">${h.n}</h4><p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1 text-red-400"></i>${h.l}</p></div><div class="text-right"><div class="text-red-500 font-bold text-lg">${h.p}</div><div class="text-xs text-gray-400">/晚</div></div></div><div class="flex gap-2 mt-3">${h.t.map(tt => `<span class="px-2 py-1 bg-yellow-50 text-yellow-600 text-xs rounded-full">${tt}</span>`).join('')}</div></div>
        </div>`).join('')}</div>
        <h3 class="font-bold text-gray-800 mb-3"><i class="fas fa-tag text-green-500 mr-2"></i>性价比之选</h3>
        <div class="space-y-3">${c.budget.map(h => `
        <div class="bg-white rounded-2xl p-4 shadow-sm card-hover flex flex-col sm:flex-row gap-4">
            <img src="${h.img}" alt="${h.n}" class="w-full sm:w-24 h-24 rounded-xl object-cover flex-shrink-0">
            <div class="flex-1"><h4 class="font-bold text-gray-800">${h.n}</h4><p class="text-gray-500 text-xs mt-1"><i class="fas fa-subway mr-1"></i>${h.l}</p><div class="flex items-center justify-between mt-2"><span class="text-red-500 font-bold">${h.p}</span><span class="px-2 py-1 bg-green-50 text-green-500 text-xs rounded-full">${h.t[0]}</span></div></div>
        </div>`).join('')}</div>`;
    }
    else if (page === 'other') {
        html = `<div class="bg-white rounded-2xl p-5 shadow-sm mb-4">
            <h3 class="font-bold text-gray-800 mb-4"><i class="fas fa-bus text-blue-500 mr-2"></i>交通指南</h3>
            <div class="space-y-3">${c.transport.map(t => `<div class="flex items-center gap-3 p-3 bg-${t.c}-50 rounded-xl"><div class="w-10 h-10 bg-${t.c}-500 rounded-full flex items-center justify-center text-white"><i class="fas fa-${t.c === 'blue' ? 'subway' : t.c === 'green' ? 'bus' : 'taxi'}"></i></div><div><div class="font-semibold text-sm">${t.t}</div><p class="text-gray-500 text-xs">${t.d}</p></div></div>`).join('')}</div>
        </div>
        <div class="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-5 text-white mb-4">
            <h3 class="font-bold mb-3"><i class="fas fa-calendar-alt mr-2"></i>最佳旅游时间</h3>
            <div class="grid grid-cols-${c.bestTime.length > 2 ? 3 : 2} gap-3">${c.bestTime.map(t => `<div class="bg-white/20 rounded-xl p-3 text-center backdrop-blur"><div class="text-2xl">${t.s}</div><div class="font-semibold mt-1">${t.t}</div><p class="text-xs opacity-80">${t.d}</p></div>`).join('')}</div>
        </div>
        <div class="bg-white rounded-2xl p-5 shadow-sm mb-4">
            <h3 class="font-bold text-gray-800 mb-4"><i class="fas fa-lightbulb text-yellow-500 mr-2"></i>小贴士</h3>
            <div class="space-y-3">${c.tips.map(t => `<div class="flex items-start gap-3 p-3 bg-yellow-50 rounded-xl"><span class="text-2xl">${t.t}</span><div><div class="font-semibold text-sm">${t.c}</div><p class="text-gray-600 text-xs">${t.d}</p></div></div>`).join('')}</div>
        </div>
        <div class="bg-gray-100 rounded-2xl p-5"><h3 class="font-bold text-gray-800 mb-3"><i class="fas fa-phone-alt text-red-500 mr-2"></i>紧急联系</h3><div class="grid grid-cols-3 gap-3 text-center"><div class="bg-white rounded-xl p-3"><div class="text-xl font-bold text-blue-500">110</div><div class="text-xs text-gray-500">报警</div></div><div class="bg-white rounded-xl p-3"><div class="text-xl font-bold text-red-500">120</div><div class="text-xs text-gray-500">急救</div></div><div class="bg-white rounded-xl p-3"><div class="text-xl font-bold text-green-500">12301</div><div class="text-xs text-gray-500">旅游投诉</div></div></div></div>`;
    }
    
    html = `<h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6 animate-slide-up">${c.title || c.name}</h2>` + html;
    contentContainer.innerHTML = `<div class="animate-slide-up">${html}</div>`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Desktop city select
    const citySelect = document.getElementById('citySelect');
    const citySelectMobile = document.getElementById('citySelectMobile');
    
    function updateCity(city) {
        currentCity = city;
        loadContent(currentPage);
    }
    
    if (citySelect) citySelect.addEventListener('change', (e) => updateCity(e.target.value));
    if (citySelectMobile) citySelectMobile.addEventListener('change', (e) => updateCity(e.target.value));
    
    // Desktop nav tabs
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('tab-active'));
            this.classList.add('tab-active');
            currentPage = this.dataset.tab;
            loadContent(currentPage);
        });
    });
    
    // Mobile nav tabs
    document.querySelectorAll('.mobile-nav-tab').forEach(btn => {
        btn.addEventListener('click', function() {
            currentPage = this.dataset.tab;
            document.querySelectorAll('.mobile-nav-tab').forEach(b => b.classList.remove('bg-primary/10', 'text-primary'));
            this.classList.add('bg-primary/10', 'text-primary');
            loadContent(currentPage);
            closeMobileMenu();
        });
    });
    
    // Bottom tab bar
    document.querySelectorAll('.bottom-tab').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.bottom-tab').forEach(b => { b.classList.remove('text-primary'); b.classList.add('text-gray-400'); });
            this.classList.remove('text-gray-400');
            this.classList.add('text-primary');
            currentPage = this.dataset.tab;
            loadContent(currentPage);
        });
    });
    
    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    function openMobileMenu() { mobileMenu.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
    function closeMobileMenu() { mobileMenu.classList.add('hidden'); document.body.style.overflow = ''; }
    
    if (menuBtn) menuBtn.addEventListener('click', openMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
    if (mobileMenu) mobileMenu.addEventListener('click', (e) => { if (e.target === mobileMenu) closeMobileMenu(); });
    
    // Initial load
    loadContent('intro');
});
