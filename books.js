// ==========================================
// 1. 数据区
// ==========================================

// --- ⚠️ 真实使用时，请删除下面这段生成数据的代码，使用你真实的 books 数组 ---
// const books = [];
// const demoSubjects = ['语文', '数学', '英语', '物理', '化学', '生物'];
// const demoGrades = ['七年级', '八年级', '九年级', '高一', '高二'];

// // 自动生成 50 本书用于测试分页效果
// for(let i=1; i<=50; i++) {
//     const sub = demoSubjects[Math.floor(Math.random() * demoSubjects.length)];
//     const gra = demoGrades[Math.floor(Math.random() * demoGrades.length)];
//     books.push({
//         id: i,
//         title: "1",
//         school: gra.includes('高') ? '高中' : '初中',
//         grade: gra,
//         subject: sub,
//         publisher: '人民教育出版社',
//         // 这里没有图片，会显示默认封面，测试比例是否为A4
//         cover: "", 
//         links: [
//             { name: "百度下载", type: "baidu", url: "#" },
//             { name: "夸克网盘", type: "quark", url: "#" }
//         ]
//     });
// }
// --- ⚠️ 结束生成数据 ---
const books = [
    {
        id: 1,
        school: "小学",
        title: "语文一年级上册",
        grade: "一年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw1a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" },
            { name: "夸克网盘", type: "quark", url: "https://pan.quark.cn/s/d2d3bb68a73b" }
        ]
    },
    {
        id: 2,
        school: "小学",
        title: "语文一年级下册",
        grade: "一年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw1b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" },
            { name: "夸克网盘", type: "quark", url: "https://pan.quark.cn/s/7050c5c7e754" }
        ]
    },
    {
        id: 3,
        school: "小学",
        title: "语文三年级上册",
        grade: "三年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw3a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 4,
        school: "小学",
        title: "语文三年级下册",
        grade: "三年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw3b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 5,
        school: "小学",
        title: "语文二年级上册",
        grade: "二年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw2a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 6,
        school: "小学",
        title: "语文二年级下册",
        grade: "二年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw2b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 7,
        school: "小学",
        title: "语文五年级上册",
        grade: "五年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw5a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 8,
        school: "小学",
        title: "语文五年级下册",
        grade: "五年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw5b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 9,
        school: "小学",
        title: "语文六年级上册",
        grade: "六年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw6a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 10,
        school: "小学",
        title: "语文六年级下册",
        grade: "六年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw6b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 11,
        school: "小学",
        title: "语文四年级上册",
        grade: "四年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw4a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 12,
        school: "小学",
        title: "语文四年级下册",
        grade: "四年级",
        subject: "语文",
        publisher: "统编版出版社",
        cover: "img/yw4b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MFFJ2wWAphv9m7xgB4U5CQ?pwd=yb5g" }
        ]
    },
    {
        id: 13,
        school: "初中",
        title: "历史七年级上册",
        grade: "七年级",
        subject: "历史",
        publisher: "人民教育出版社",
        cover: "img/ls7a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jNkSLSXhchWoZHFLG9sJYg?pwd=a9jr" }
        ]
    },
    {
        id: 14,
        school: "初中",
        title: "历史七年级下册",
        grade: "七年级",
        subject: "历史",
        publisher: "人民教育出版社",
        cover: "img/ls7b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jNkSLSXhchWoZHFLG9sJYg?pwd=a9jr" }
        ]
    },
    {
        id: 15,
        school: "初中",
        title: "历史九年级上册",
        grade: "九年级",
        subject: "历史",
        publisher: "人民教育出版社",
        cover: "img/ls9a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jNkSLSXhchWoZHFLG9sJYg?pwd=a9jr" }
        ]
    },
    {
        id: 16,
        school: "初中",
        title: "历史九年级下册",
        grade: "九年级",
        subject: "历史",
        publisher: "人民教育出版社",
        cover: "img/ls9b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jNkSLSXhchWoZHFLG9sJYg?pwd=a9jr" }
        ]
    },
    {
        id: 17,
        school: "初中",
        title: "历史八年级上册",
        grade: "八年级",
        subject: "历史",
        publisher: "人民教育出版社",
        cover: "img/ls8a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jNkSLSXhchWoZHFLG9sJYg?pwd=a9jr" }
        ]
    },
    {
        id: 18,
        school: "初中",
        title: "历史八年级下册",
        grade: "八年级",
        subject: "历史",
        publisher: "人民教育出版社",
        cover: "img/ls8b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jNkSLSXhchWoZHFLG9sJYg?pwd=a9jr" }
        ]
    },
    {
        id: 19,
        school: "初中",
        title: "地理七年级上册",
        grade: "七年级",
        subject: "地理",
        publisher: "人民教育出版社",
        cover: "img/dl7a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Y0WS03Jfj6lrvlKJ9QAOew?pwd=ezxr" }
        ]
    },
    {
        id: 20,
        school: "初中",
        title: "地理七年级下册",
        grade: "七年级",
        subject: "地理",
        publisher: "人民教育出版社",
        cover: "img/dl7b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Y0WS03Jfj6lrvlKJ9QAOew?pwd=ezxr" }
        ]
    },
    {
        id: 21,
        school: "初中",
        title: "地理八年级上册",
        grade: "八年级",
        subject: "地理",
        publisher: "人民教育出版社",
        cover: "img/dl8a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Y0WS03Jfj6lrvlKJ9QAOew?pwd=ezxr" }
        ]
    },
    {
        id: 22,
        school: "初中",
        title: "地理八年级下册",
        grade: "八年级",
        subject: "地理",
        publisher: "人民教育出版社",
        cover: "img/dl8b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Y0WS03Jfj6lrvlKJ9QAOew?pwd=ezxr" }
        ]
    },
    {
        id: 23,
        school: "初中",
        title: "地理七至八年级 王民",
        grade: "地方版",
        subject: "地理",
        publisher: "中国地图出版社",
        cover: "img/dl7azt.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/109Fgai8fPKmtL9lOmhw34g?pwd=4xpa" }
        ]
    },
    {
        id: 24,
        school: "初中",
        title: "地理七至八年级 钟作慈",
        grade: "地方版",
        subject: "地理",
        publisher: "中国地图出版社",
        cover: "img/dl7az2.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1oLBCTjHB-PeZF3TbSb6QDA?pwd=msei" }
        ]
    },
    {
        id: 25,
        school: "初中",
        title: "地理七至八年级",
        grade: "地方版",
        subject: "地理",
        publisher: "商务印书馆、星球地图出版社",
        cover: "img/dl7asw.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1-DHS1rh8-UpQ5uMNYipcTQ?pwd=brt7" }
        ]
    },
    {
        id: 26,
        school: "初中",
        title: "地理七至八年级",
        grade: "地方版",
        subject: "地理",
        publisher: "山西教育出版社",
        cover: "img/dl7asx.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yeKGCSO_7FJHXx1RsCO45A?pwd=umki" }
        ]
    },
    {
        id: 27,
        school: "初中",
        title: "地理七至八年级",
        grade: "地方版",
        subject: "地理",
        publisher: "湖南教育出版社",
        cover: "img/dl7ahn.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1uzCvACtWO1w018uadRVIlg?pwd=gd7r" }
        ]
    },
    {
        id: 28,
        school: "初中",
        title: "地理七至八年级",
        grade: "地方版",
        subject: "地理",
        publisher: "科学普及出版社",
        cover: "img/dl7akp.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1X9Ye6IetngR-HxuidR8T-A?pwd=bc4q" }
        ]
    },
    {
        id: 29,
        school: "初中",
        title: "地理七至八年级",
        grade: "地方版",
        subject: "地理",
        publisher: "广东教育出版社、广东人民出版社",
        cover: "img/dl7agd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1iRj8ZoTsbPZrKPYcqtFd2Q?pwd=vtzz" }
        ]
    },
    {
        id: 30,
        school: "初中",
        title: "地理六至七年级 五四制",
        grade: "地方版",
        subject: "地理",
        publisher: "中华地图学社、中国地图出版社",
        cover: "img/dl6azt.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1y_LgFYWohjdqlo0F5BUeyg?pwd=wcj9" }
        ]
    },
    {
        id: 31,
        school: "初中",
        title: "地理六至七年级 五四制",
        grade: "地方版",
        subject: "地理",
        publisher: "山东科技出版社",
        cover: "img/dl6asd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1RP25SgJOJ2KKrZZktOdJpQ?pwd=fa5j" }
        ]
    },
    {
        id: 32,
        school: "初中",
        title: "地理图册 七至八年级",
        grade: "地方版",
        subject: "地理",
        publisher: "各大出版社",
        cover: "img/dl7a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1BvT-BKtmrzIzIMXCM9GI4w?pwd=yy8v" }
        ]
    },
    {
        id: 33,
        school: "初中",
        title: "化学九年级上册",
        grade: "九年级",
        subject: "化学",
        publisher: "人民教育出版社",
        cover: "img/hx9a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1TC-Tnir8s8fnvAVD9ky3Kg?pwd=ejw8" }
        ]
    },
    {
        id: 34,
        school: "初中",
        title: "化学九年级下册",
        grade: "九年级",
        subject: "化学",
        publisher: "人民教育出版社",
        cover: "img/hx9b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1TC-Tnir8s8fnvAVD9ky3Kg?pwd=ejw8" }
        ]
    },
    {
        id: 35,
        school: "初中",
        title: "化学八年级 全一册 五四制",
        grade: "八年级",
        subject: "化学",
        publisher: "人民教育出版社",
        cover: "img/hx8a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1rDF-oc-KRSvOybcp_aNa3w?pwd=axyb" }
        ]
    },
    {
        id: 36,
        school: "初中",
        title: "化学九年级 全一册 五四制",
        grade: "九年级",
        subject: "化学",
        publisher: "人民教育出版社",
        cover: "img/hx9a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1rDF-oc-KRSvOybcp_aNa3w?pwd=axyb" }
        ]
    },
    {
        id: 37,
        school: "初中",
        title: "化学九年级",
        grade: "地方版",
        subject: "化学",
        publisher: "北京出版社",
        cover: "img/hx9abj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1PboYI8hqJEOFjW2rOHXIvA?pwd=zhe7" }
        ]
    },
    {
        id: 38,
        school: "初中",
        title: "化学九年级",
        grade: "地方版",
        subject: "化学",
        publisher: "上海教育出版社",
        cover: "img/hx9ash.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1xewCDwuV8BRMymnwe1AUdQ?pwd=a2pv" }
        ]
    },
    {
        id: 39,
        school: "初中",
        title: "化学九年级",
        grade: "地方版",
        subject: "化学",
        publisher: "科学出版社、广东教育出版社",
        cover: "img/hx9agd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1bO4c2CZdJe9Wp-6JzjiFbw?pwd=xpbx" }
        ]
    },
    {
        id: 40,
        school: "初中",
        title: "化学九年级",
        grade: "地方版",
        subject: "化学",
        publisher: "科学普及出版社",
        cover: "img/hx9akp.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1cqszRXp4IcMQ_gcJw6ZqSw?pwd=3m4a" }
        ]
    },
    {
        id: 41,
        school: "初中",
        title: "化学九年级",
        grade: "地方版",
        subject: "化学",
        publisher: "山东教育出版社",
        cover: "img/hx9asd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1FcEop1vyEFrpjjdzQ-I-6g?pwd=vbk6" }
        ]
    },
    {
        id: 42,
        school: "初中",
        title: "化学八年级 全一册 五四制",
        grade: "地方版",
        subject: "化学",
        publisher: "上海科学技术出版社",
        cover: "img/hx8ask.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1vNqoxKfZocC-oj3qo__dKQ?pwd=73hr" }
        ]
    },
    {
        id: 43,
        school: "初中",
        title: "化学八至九年级 五四制",
        grade: "地方版",
        subject: "化学",
        publisher: "山东教育出版社",
        cover: "img/hx8as2.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Rh52_LrNFYBthgkKF8Ba5Q?pwd=fwqu" }
        ]
    },
    
    {
        id: 51,
        school: "初中",
        title: "数学七年级上册",
        grade: "七年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx7a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/14QzCYx_6huzHWpgg6ozD0g?pwd=9tgr" }
        ]
    },
    {
        id: 52,
        school: "初中",
        title: "数学七年级下册",
        grade: "七年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx7b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/14QzCYx_6huzHWpgg6ozD0g?pwd=9tgr" }
        ]
    },
    {
        id: 53,
        school: "初中",
        title: "数学九年级上册",
        grade: "九年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx9a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/14QzCYx_6huzHWpgg6ozD0g?pwd=9tgr" }
        ]
    },
    {
        id: 54,
        school: "初中",
        title: "数学九年级下册",
        grade: "九年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx9b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/14QzCYx_6huzHWpgg6ozD0g?pwd=9tgr" }
        ]
    },
    {
        id: 55,
        school: "初中",
        title: "数学八年级上册",
        grade: "八年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx8a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/14QzCYx_6huzHWpgg6ozD0g?pwd=9tgr" }
        ]
    },
    {
        id: 56,
        school: "初中",
        title: "数学八年级下册",
        grade: "八年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx8b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/14QzCYx_6huzHWpgg6ozD0g?pwd=9tgr" }
        ]
    },
    {
        id: 57,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "河北教育出版社",
        cover: "img/sx7ahb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jINbeVVzfl9YMqRjDiY2CA?pwd=dvkw" }
        ]
    },
    {
        id: 58,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "北京出版社",
        cover: "img/sx7abj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1OHSeUDfLBEBoJN4Plrkeuw?pwd=9pn9" }
        ]
    },
    {
        id: 59,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "北京师范大学出版社",
        cover: "img/sx7abs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1R6CWqEX0JIvoFoBgnWSCKw?pwd=3rv5" }
        ]
    },
    {
        id: 60,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "华东师范大学出版社",
        cover: "img/sx7ahd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ijI64P-CWS56hAaYXeMrHw?pwd=g715" }
        ]
    },
    {
        id: 61,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "上海科学技术出版社",
        cover: "img/sx7ask.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1xXKX6zGlceqV7Dp3_ImdDA?pwd=77n2" }
        ]
    },
    {
        id: 62,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "浙江教育出版社",
        cover: "img/sx7azj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1FnxW1BUumsiR7cZ1gePb-w?pwd=5xm9" }
        ]
    },
    {
        id: 63,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "湖南教育出版社",
        cover: "img/sx7ahn.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Ft58juhNSDXdi-NlP9o9xA?pwd=gyua" }
        ]
    },
    {
        id: 64,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "江苏凤凰科学技术出版社",
        cover: "img/sx7ajs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1g685Smr2j0NcV9CrGYTQIg?pwd=ar5r" }
        ]
    },
    {
        id: 65,
        school: "初中",
        title: "数学七至九年级",
        grade: "地方版",
        subject: "数学",
        publisher: "青岛出版社",
        cover: "img/sx7aqd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1wJQVqYy8rZx0mlQHRJdiug?pwd=xk7j" }
        ]
    },
    {
        id: 66,
        school: "初中",
        title: "数学六至九年级 五四制",
        grade: "地方版",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx6a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/12OwTV7aiuoPvCtBJxwSlcA?pwd=k94i" }
        ]
    },
    {
        id: 67,
        school: "初中",
        title: "数学六至九年级 五四制",
        grade: "地方版",
        subject: "数学",
        publisher: "山东教育出版社",
        cover: "img/sx6asd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1cfC85whgoQtPYA2udVrxmg?pwd=hvhz" }
        ]
    },
    {
        id: 68,
        school: "初中",
        title: "数学六至九年级 五四制",
        grade: "地方版",
        subject: "数学",
        publisher: "上海教育出版社",
        cover: "img/xs6ash.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1mAIKlciw-l2I7vjnUZLkyg?pwd=qn7w" }
        ]
    },
    
    {
        id: 102,
        school: "初中",
        title: "物理九年级全一册",
        grade: "九年级",
        subject: "物理",
        publisher: "人民教育出版社",
        cover: "img/wl9a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1mH7bYUU0Ym-CNVCVDMxn-w?pwd=fu97" }
        ]
    },
    {
        id: 103,
        school: "初中",
        title: "物理八年级上册",
        grade: "八年级",
        subject: "物理",
        publisher: "人民教育出版社",
        cover: "img/wl8a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1mH7bYUU0Ym-CNVCVDMxn-w?pwd=fu97" }
        ]
    },
    {
        id: 104,
        school: "初中",
        title: "物理八年级下册",
        grade: "八年级",
        subject: "物理",
        publisher: "人民教育出版社",
        cover: "img/wl8b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1mH7bYUU0Ym-CNVCVDMxn-w?pwd=fu97" }
        ]
    },
    {
        id: 105,
        school: "初中",
        title: "物理八至九年级 郭玉英",
        grade: "地方版",
        subject: "物理",
        publisher: "北京师范大学出版社",
        cover: "img/wl8ab1.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1pveoN9hdesRZ1f-O_L2j5w?pwd=m6cv" }
        ]
    },
    {
        id: 106,
        school: "初中",
        title: "物理八至九年级 闫金铎",
        grade: "地方版",
        subject: "物理",
        publisher: "北京师范大学出版社",
        cover: "img/wl8ab2.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1SLVCtaox78cinFVxYa_dBg?pwd=ffuq" }
        ]
    },
    {
        id: 107,
        school: "初中",
        title: "物理八年级全一册 李春密",
        grade: "地方版",
        subject: "物理",
        publisher: "北京师范大学出版社",
        cover: "img/wl8ab3.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1zQVfCbAsiDC7RO6SrhsVlA?pwd=hc73" }
        ]
    },
    {
        id: 108,
        school: "初中",
        title: "物理八至九年级",
        grade: "地方版",
        subject: "物理",
        publisher: "教育科学出版社",
        cover: "img/wl8ajk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1V0i-CoYtzM9QqqHZEbcfDg?pwd=xxzq" }
        ]
    },
    {
        id: 109,
        school: "初中",
        title: "物理八至九年级",
        grade: "地方版",
        subject: "物理",
        publisher: "上海科学技术出版社",
        cover: "img/wl8ask.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1M2zV53W_YmorYQVAUEpICQ?pwd=cynp" }
        ]
    },
    {
        id: 110,
        school: "初中",
        title: "物理八至九年级",
        grade: "地方版",
        subject: "物理",
        publisher: "上海科学技术出版社、广东教育出版社",
        cover: "img/wl8asg.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/13JhFYnKy-WYHozxhbPeoIA?pwd=zdtm" }
        ]
    },
    {
        id: 111,
        school: "初中",
        title: "物理八至九年级",
        grade: "地方版",
        subject: "物理",
        publisher: "江苏凤凰科学技术出版社",
        cover: "img/wl8ajs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1dFJVp3qRZIYce7x4aqHSKg?pwd=kt14" }
        ]
    },
    {
        id: 112,
        school: "初中",
        title: "物理八至九年级 五四制",
        grade: "地方版",
        subject: "物理",
        publisher: "山东科学技术出版社",
        cover: "img/wl8asd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1zCKvJ0dC1A0vhsMTN_yBvQ?pwd=1234" }
        ]
    },
    {
        id: 113,
        school: "初中",
        title: "物理八年级 五四制",
        grade: "地方版",
        subject: "物理",
        publisher: "上海科学技术出版社",
        cover: "img/wl8as2.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1uzaplK8AxBL4TTcYU5CznQ?pwd=swbg" }
        ]
    },
    
    {
        id: 124,
        school: "初中",
        title: "生物学七年级上册",
        grade: "七年级",
        subject: "生物学",
        publisher: "人民教育出版社",
        cover: "img/sw7a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1A4Ysm34rWhFI1WHyM76h8g?pwd=pyjt" }
        ]
    },
    {
        id: 125,
        school: "初中",
        title: "生物学七年级下册",
        grade: "七年级",
        subject: "生物学",
        publisher: "人民教育出版社",
        cover: "img/sw7b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1A4Ysm34rWhFI1WHyM76h8g?pwd=pyjt" }
        ]
    },
    {
        id: 126,
        school: "初中",
        title: "生物学八年级上册",
        grade: "八年级",
        subject: "生物学",
        publisher: "人民教育出版社",
        cover: "img/sw8a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1A4Ysm34rWhFI1WHyM76h8g?pwd=pyjt" }
        ]
    },
    {
        id: 127,
        school: "初中",
        title: "生物学八年级下册",
        grade: "八年级",
        subject: "生物学",
        publisher: "人民教育出版社",
        cover: "img/sw8b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1A4Ysm34rWhFI1WHyM76h8g?pwd=pyjt" }
        ]
    },
    {
        id: 128,
        school: "初中",
        title: "生物学七至八年级",
        grade: "地方版",
        subject: "生物学",
        publisher: "河北少年儿童出版社",
        cover: "img/sw7ahb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1w7oDXUW5A3Tetxb7PBgCdg?pwd=9ckm" }
        ]
    },
    {
        id: 129,
        school: "初中",
        title: "生物学七至八年级",
        grade: "地方版",
        subject: "生物学",
        publisher: "北京出版社",
        cover: "img/sw7abj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1gKeKDr_wJrPN3HcZ_ha36A?pwd=azf5" }
        ]
    },
    {
        id: 130,
        school: "初中",
        title: "生物学七至八年级",
        grade: "地方版",
        subject: "生物学",
        publisher: "北京师范大学出版社",
        cover: "img/sw7abs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/10imvPN5DxTk71Tnm9odZww?pwd=pdk6" }
        ]
    },
    {
        id: 131,
        school: "初中",
        title: "生物学七至八年级",
        grade: "地方版",
        subject: "生物学",
        publisher: "济南出版社",
        cover: "img/sw7ajn.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1SsUdZWARHE4O5QsPfL7YtA?pwd=w2tv" }
        ]
    },
    {
        id: 132,
        school: "初中",
        title: "生物学七至八年级",
        grade: "地方版",
        subject: "生物学",
        publisher: "江苏凤凰教育出版社",
        cover: "img/sw7ajs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1wS3EXYocV23ucteL9Eg46g?pwd=ai22" }
        ]
    },
    {
        id: 133,
        school: "初中",
        title: "生物学七至八年级",
        grade: "地方版",
        subject: "生物学",
        publisher: "江苏凤凰科学技术出版社",
        cover: "img/sw7ajk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/19J3xWco6PFjrsd1tZa30Nw?pwd=mq2t" }
        ]
    },
    {
        id: 134,
        school: "初中",
        title: "生物学六至八年级 五四制",
        grade: "地方版",
        subject: "生物学",
        publisher: "山东科学技术出版社",
        cover: "img/sw6asd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1SpN6cEn5LtuDkUjLWTkEWA?pwd=2cdt" }
        ]
    },
    {
        id: 135,
        school: "初中",
        title: "生物七年级 五四制",
        grade: "地方版",
        subject: "生物学",
        publisher: "上海教育出版社",
        cover: "img/sw7ash.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1z4mH77AMop7FwHnUOMo4Aw?pwd=8cm7" }
        ]
    },
    
    {
        id: 153,
        school: "初中",
        title: "科学七至九年级",
        grade: "地方版",
        subject: "科学",
        publisher: "华东师范大学出版社",
        cover: "img/kx7ahd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/18XlJag48o3QMpmANomxdgA?pwd=5m5t" }
        ]
    },
    {
        id: 154,
        school: "初中",
        title: "科学七至九年级",
        grade: "地方版",
        subject: "科学",
        publisher: "武汉出版社",
        cover: "img/kx7awh.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1QFRRm-ofEmLidSoR0vitlQ?pwd=nakk" }
        ]
    },
    {
        id: 155,
        school: "初中",
        title: "科学七至九年级",
        grade: "地方版",
        subject: "科学",
        publisher: "上海教育出版社",
        cover: "img/kx7ash.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1kGWnKJOPt96_cqhP0KGx0A?pwd=6b7z" }
        ]
    },
    {
        id: 156,
        school: "初中",
        title: "科学七至九年级",
        grade: "地方版",
        subject: "科学",
        publisher: "浙江教育出版社",
        cover: "img/kx7azj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/10aKf5U65yTFyzz5utdQr3Q?pwd=p25x" }
        ]
    },
    {
        id: 157,
        school: "初中",
        title: "科学六年级 五四制",
        grade: "地方版",
        subject: "科学",
        publisher: "上海科学技术出版社",
        cover: "img/kx6ask.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1sXoxojWc0kIbh7hmGknr_Q?pwd=tnbe" }
        ]
    },
    
    {
        id: 176,
        school: "初中",
        title: "英语七年级上册",
        grade: "七年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy7a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JBXOV2Zb1lIp9Tst0r2sMg?pwd=26vv" }
        ]
    },
    {
        id: 177,
        school: "初中",
        title: "英语七年级下册",
        grade: "七年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy7b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JBXOV2Zb1lIp9Tst0r2sMg?pwd=26vv" }
        ]
    },
    {
        id: 178,
        school: "初中",
        title: "英语九年级全一册",
        grade: "九年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy9a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JBXOV2Zb1lIp9Tst0r2sMg?pwd=26vv" }
        ]
    },
    {
        id: 179,
        school: "初中",
        title: "英语八年级上册",
        grade: "八年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy8a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JBXOV2Zb1lIp9Tst0r2sMg?pwd=26vv" }
        ]
    },
    {
        id: 180,
        school: "初中",
        title: "英语八年级下册",
        grade: "八年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy8b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JBXOV2Zb1lIp9Tst0r2sMg?pwd=26vv" }
        ]
    },
    {
        id: 181,
        school: "初中",
        title: "英语七至九年级",
        grade: "地方版",
        subject: "英语",
        publisher: "河北教育出版社",
        cover: "img/yy7ahb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1WHMGYHQYPCTsP3sENLMIQw?pwd=22yi" }
        ]
    },
    {
        id: 182,
        school: "初中",
        title: "英语七至九年级",
        grade: "地方版",
        subject: "英语",
        publisher: "外语教学与研究出版社",
        cover: "img/yy7awy.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yVEQwUNeZnLdWnNm9gVBPA?pwd=qm7m" }
        ]
    },
    {
        id: 183,
        school: "初中",
        title: "英语七至九年级",
        grade: "地方版",
        subject: "英语",
        publisher: "上海外语教育出版社、广东教育出版社",
        cover: "img/yy7asw.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1duNTJnZy1XYc7NXw7DcWRw?pwd=z9f7" }
        ]
    },
    {
        id: 184,
        school: "初中",
        title: "英语七至九年级",
        grade: "地方版",
        subject: "英语",
        publisher: "上海教育出版社",
        cover: "img/yy7ash.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1gVR-LufrxzcM6e_BraFaxQ?pwd=aqbw" }
        ]
    },
    {
        id: 185,
        school: "初中",
        title: "英语七至九年级",
        grade: "地方版",
        subject: "英语",
        publisher: "科学普及出版社",
        cover: "img/yy7akp.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1e6RbANwUid3kTHeRICZJow?pwd=45j1" }
        ]
    },
    {
        id: 186,
        school: "初中",
        title: "英语六至九年级 五四制",
        grade: "地方版",
        subject: "英语",
        publisher: "教育科学出版社",
        cover: "img/yy6ajk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1PFlQlnNCMRQpx9dcxGZMig?pwd=eass" }
        ]
    },
    {
        id: 187,
        school: "初中",
        title: "英语六至九年级 五四制",
        grade: "地方版",
        subject: "英语",
        publisher: "山东教育出版社",
        cover: "img/yy6asd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1mcTbnZEs4_6wga3KI9ij9A?pwd=5utn" }
        ]
    },
    {
        id: 188,
        school: "初中",
        title: "英语六至九年级 牛津上海版 五四制",
        grade: "地方版",
        subject: "英语",
        publisher: "上海教育出版社",
        cover: "img/yy6ash.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Lr42otLd0KYjhSsy1CrFxQ?pwd=gffp" }
        ]
    },
    {
        id: 189,
        school: "初中",
        title: "英语七至九年级",
        grade: "地方版",
        subject: "英语",
        publisher: "北京师范大学出版社",
        cover: "img/yy7abs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1a0zoKVpsqRzfXnkGO2G5BQ?pwd=7rqy" }
        ]
    },
    
    {
        id: 210,
        school: "初中",
        title: "语文七年级上册",
        grade: "七年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/yw7a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1kZjTxS_VvHWs2LKmBjG-qQ?pwd=3b8s" }
        ]
    },
    {
        id: 211,
        school: "初中",
        title: "语文七年级下册",
        grade: "七年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/yw7b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1kZjTxS_VvHWs2LKmBjG-qQ?pwd=3b8s" }
        ]
    },
    {
        id: 212,
        school: "初中",
        title: "语文九年级上册",
        grade: "九年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/yw9a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1kZjTxS_VvHWs2LKmBjG-qQ?pwd=3b8s" }
        ]
    },
    {
        id: 213,
        school: "初中",
        title: "语文九年级下册",
        grade: "九年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/yw9b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1kZjTxS_VvHWs2LKmBjG-qQ?pwd=3b8s" }
        ]
    },
    {
        id: 214,
        school: "初中",
        title: "语文八年级上册",
        grade: "八年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/yw8a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1kZjTxS_VvHWs2LKmBjG-qQ?pwd=3b8s" }
        ]
    },
    {
        id: 215,
        school: "初中",
        title: "语文八年级下册",
        grade: "八年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/yw8b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1kZjTxS_VvHWs2LKmBjG-qQ?pwd=3b8s" }
        ]
    },
    
    {
        id: 261,
        school: "小学",
        title: "数学一年级上册",
        grade: "一年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx1a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 262,
        school: "小学",
        title: "数学三年级上册",
        grade: "三年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx3a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 263,
        school: "小学",
        title: "数学二年级上册",
        grade: "二年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx2a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 264,
        school: "小学",
        title: "数学五年级上册",
        grade: "五年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx5a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 265,
        school: "小学",
        title: "数学六年级上册",
        grade: "六年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx6a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 266,
        school: "小学",
        title: "数学四年级上册",
        grade: "四年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx4a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 267,
        school: "小学",
        title: "数学一年级下册",
        grade: "一年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx1b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 268,
        school: "小学",
        title: "数学三年级下册",
        grade: "三年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx3b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 269,
        school: "小学",
        title: "数学二年级下册",
        grade: "二年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx2b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 270,
        school: "小学",
        title: "数学五年级下册",
        grade: "五年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx5b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 271,
        school: "小学",
        title: "数学六年级下册",
        grade: "六年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx6b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 272,
        school: "小学",
        title: "数学四年级下册",
        grade: "四年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sx4b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x3FydVZ-VgSzpk-kX4ydAA?pwd=th2n" }
        ]
    },
    {
        id: 273,
        school: "小学",
        title: "数学一至六年级",
        grade: "地方版",
        subject: "数学",
        publisher: "河北教育出版社",
        cover: "img/sx1ahb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ewFiE6yfEWieXbu5CNVdnQ?pwd=5c3b" }
        ]
    },
    {
        id: 274,
        school: "小学",
        title: "数学一至六年级",
        grade: "地方版",
        subject: "数学",
        publisher: "北京出版社",
        cover: "img/sx1abj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/133i0lHyjdCIilLQTShz4fQ?pwd=avk4" }
        ]
    },
    {
        id: 275,
        school: "小学",
        title: "数学一至六年级",
        grade: "地方版",
        subject: "数学",
        publisher: "北京师范大学出版社",
        cover: "img/sx1abs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1V5Latu8XXpp1IN1iqAZFbw?pwd=w97m" }
        ]
    },
    {
        id: 276,
        school: "小学",
        title: "数学一至六年级",
        grade: "地方版",
        subject: "数学",
        publisher: "江苏凤凰教育出版社",
        cover: "img/sx1ajs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1c12nzSLtYw1rzEdWr-p_8A?pwd=jw4e" }
        ]
    },
    {
        id: 277,
        school: "小学",
        title: "数学一至六年级",
        grade: "地方版",
        subject: "数学",
        publisher: "西南大学出版社",
        cover: "img/sx1axn.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1slp8Yud0h8NxUFMcUJJrew?pwd=ce62" }
        ]
    },
    {
        id: 278,
        school: "小学",
        title: "数学一至六年级",
        grade: "地方版",
        subject: "数学",
        publisher: "西南师范大学出版社",
        cover: "img/sx1axs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1hMoEwFdv0DxCEETj3gi1uQ?pwd=mv75" }
        ]
    },
    {
        id: 279,
        school: "小学",
        title: "数学一至六年级",
        grade: "地方版",
        subject: "数学",
        publisher: "青岛出版社",
        cover: "img/sx1aqd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1p7f4ht70vTRYr6atj6ItCA?pwd=jwf9" }
        ]
    },
    {
        id: 280,
        school: "小学",
        title: "数学一至五年级 五四制",
        grade: "地方版",
        subject: "数学",
        publisher: "青岛出版社",
        cover: "img/sx1aq2.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1a4pa-UsxvlKFvYrndsaocA?pwd=ixgc" }
        ]
    },
    {
        id: 281,
        school: "小学",
        title: "数学一至五年级 五四制",
        grade: "地方版",
        subject: "数学",
        publisher: "上海教育出版社",
        cover: "img/sx1ahj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1WUW03hJY8UfhwY0dchIg0A?pwd=k45k" }
        ]
    },
    
    {
        id: 348,
        school: "小学",
        title: "科学一年级上册",
        grade: "一年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx1a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 349,
        school: "小学",
        title: "科学一年级下册",
        grade: "一年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx1b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 350,
        school: "小学",
        title: "科学三年级上册",
        grade: "三年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx3a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 351,
        school: "小学",
        title: "科学三年级下册",
        grade: "三年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx3b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 352,
        school: "小学",
        title: "科学二年级上册",
        grade: "二年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx2a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 353,
        school: "小学",
        title: "科学二年级下册",
        grade: "二年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx2b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 354,
        school: "小学",
        title: "科学五年级下册",
        grade: "五年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx5b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 355,
        school: "小学",
        title: "科学六年级上册",
        grade: "六年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx6a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 356,
        school: "小学",
        title: "科学六年级下册",
        grade: "六年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx6b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 357,
        school: "小学",
        title: "科学四年级上册",
        grade: "四年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx4a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 358,
        school: "小学",
        title: "科学四年级下册",
        grade: "四年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx4b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 359,
        school: "小学",
        title: "科学五年级上册",
        grade: "五年级",
        subject: "科学",
        publisher: "人民教育出版社、湖北教育出版社",
        cover: "img/kx5a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1U8iDGJNnotzgKBY9L4ewZg?pwd=kpex" }
        ]
    },
    {
        id: 360,
        school: "小学",
        title: "科学一至六年级",
        grade: "地方版",
        subject: "科学",
        publisher: "河北人民出版社",
        cover: "img/kx1ahb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1iE5IHZnyOubbd5NXelliGQ?pwd=v1fg" }
        ]
    },
    {
        id: 361,
        school: "小学",
        title: "科学一至六年级",
        grade: "地方版",
        subject: "科学",
        publisher: "大象出版社",
        cover: "img/kx1ahn.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jdlkWz19ZtIhdENq7Yv9OQ?pwd=cvc3" }
        ]
    },
    {
        id: 362,
        school: "小学",
        title: "科学一至六年级",
        grade: "地方版",
        subject: "科学",
        publisher: "教育科学出版社",
        cover: "img/kx1ajk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1qNCnKxsMvMClZA1FNXnE2g?pwd=nfqf" }
        ]
    },
    {
        id: 363,
        school: "小学",
        title: "科学一至六年级",
        grade: "地方版",
        subject: "科学",
        publisher: "湖南科学技术出版社",
        cover: "img/kx1ahk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Q8aa4wHznjeNRXpdlFJD_w?pwd=fqim" }
        ]
    },
    {
        id: 364,
        school: "小学",
        title: "科学一至六年级",
        grade: "地方版",
        subject: "科学",
        publisher: "广东教育出版社、广东科技出版社",
        cover: "img/kx1agd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1lhu17NSxs4KCZOwjdqPE7Q?pwd=ppdg" }
        ]
    },
    {
        id: 365,
        school: "小学",
        title: "科学一至六年级",
        grade: "地方版",
        subject: "科学",
        publisher: "江苏凤凰教育出版社",
        cover: "img/kx1ajs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jo0n0LnQ1u9P1FcT44Ox3g?pwd=r3i8" }
        ]
    },
    {
        id: 366,
        school: "小学",
        title: "科学一至六年级",
        grade: "地方版",
        subject: "科学",
        publisher: "青岛出版社",
        cover: "img/kx1aqd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Wjo7PKyt1BO0LvVH3nniFw?pwd=685p" }
        ]
    },
    
    {
        id: 501,
        school: "小学",
        title: "英语三年级上册（三年级起点 精通）",
        grade: "三年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy3a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 502,
        school: "小学",
        title: "英语五年级上册（三年级起点 精通）",
        grade: "五年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy5a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 503,
        school: "小学",
        title: "英语六年级上册（三年级起点 精通）",
        grade: "六年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy6a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 504,
        school: "小学",
        title: "英语四年级上册（三年级起点 精通）",
        grade: "四年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy4a02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 505,
        school: "小学",
        title: "英语三年级下册（三年级起点 精通）",
        grade: "三年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy3b02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 506,
        school: "小学",
        title: "英语五年级下册（三年级起点 精通）",
        grade: "五年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy5b02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 507,
        school: "小学",
        title: "英语六年级下册（三年级起点 精通）",
        grade: "六年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy6b02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 508,
        school: "小学",
        title: "英语四年级下册（三年级起点 精通）",
        grade: "四年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy4b02.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZK9qPPAj9hM3iAEFZpad6A?pwd=qat5" }
        ]
    },
    {
        id: 509,
        school: "小学",
        title: "英语一年级上册（一年级起点）",
        grade: "一年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy1a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 510,
        school: "小学",
        title: "英语一年级下册 （一年级起点）",
        grade: "一年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy1b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 511,
        school: "小学",
        title: "英语三年级上册 （一年级起点）",
        grade: "三年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy3a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 512,
        school: "小学",
        title: "英语三年级下册 （一年级起点）",
        grade: "三年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy3b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 513,
        school: "小学",
        title: "英语二年级上册 （一年级起点）",
        grade: "二年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy2a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 514,
        school: "小学",
        title: "英语二年级下册 （一年级起点）",
        grade: "二年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy2b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 515,
        school: "小学",
        title: "英语五年级上册 （一年级起点）",
        grade: "五年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy5a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 516,
        school: "小学",
        title: "英语五年级下册 （一年级起点）",
        grade: "五年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy5b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 517,
        school: "小学",
        title: "英语六年级上册 （一年级起点）",
        grade: "六年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy6a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 518,
        school: "小学",
        title: "英语六年级下册 （一年级起点）",
        grade: "六年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy6b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 519,
        school: "小学",
        title: "英语四年级上册 （一年级起点）",
        grade: "四年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy4a01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 520,
        school: "小学",
        title: "英语四年级下册 （一年级起点）",
        grade: "四年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy4b01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1yr-CjwqC_6cv2vP_e-ECyg?pwd=c67d" }
        ]
    },
    {
        id: 521,
        school: "小学",
        title: "英语四年级下册（三年级起点 PEP）",
        grade: "四年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy4b03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 522,
        school: "小学",
        title: "英语三年级上册（三年级起点 PEP）",
        grade: "三年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy3a03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 523,
        school: "小学",
        title: "英语五年级上册（三年级起点 PEP）",
        grade: "五年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy5a03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 524,
        school: "小学",
        title: "英语六年级上册（三年级起点 PEP）",
        grade: "六年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy6a03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 525,
        school: "小学",
        title: "英语四年级上册（三年级起点 PEP）",
        grade: "四年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy4a03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 526,
        school: "小学",
        title: "英语三年级下册（三年级起点 PEP）",
        grade: "三年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy3b03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 527,
        school: "小学",
        title: "英语五年级下册（三年级起点 PEP）",
        grade: "五年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy5b03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 528,
        school: "小学",
        title: "英语六年级下册（三年级起点 PEP）",
        grade: "六年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yy6b03.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1laq-3-lGxAFDdeZxBdiDiw?pwd=3idm" }
        ]
    },
    {
        id: 529,
        school: "小学",
        title: "英语一至六年级（一年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "河北教育出版社",
        cover: "img/yy1ahb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1bMSupX0U7LKB8kOQJw_GVw?pwd=mtnc" }
        ]
    },
    {
        id: 530,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "河北教育出版社",
        cover: "img/yy3ahb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1otGMD9z8W5yVV10wbXH7UQ?pwd=hgpa" }
        ]
    },
    {
        id: 531,
        school: "小学",
        title: "英语一至六年级（一年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "北京出版社",
        cover: "img/yy1abj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1rPwqaSOD5denjVoaNodTcg?pwd=up9z" }
        ]
    },
    {
        id: 532,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "北京师范大学出版社",
        cover: "img/yy3abs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Bi63uckbNU_UHewCCEEupg?pwd=w23a" }
        ]
    },
    {
        id: 533,
        school: "小学",
        title: "英语一至六年级（一年级起点 陈琳）",
        grade: "地方版",
        subject: "英语",
        publisher: "外语教学与研究出版社",
        cover: "img/yy1aw1.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1RflME9QIi4BPW2Bm6XVODg?pwd=z833" }
        ]
    },
    {
        id: 534,
        school: "小学",
        title: "英语三至六年级（三年级起点 新交际）",
        grade: "地方版",
        subject: "英语",
        publisher: "外语教学与研究出版社",
        cover: "img/yy3aw2.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1l6nSyVluUvTG8dQCdpMLLQ?pwd=8g4n" }
        ]
    },
    {
        id: 535,
        school: "小学",
        title: "英语三至六年级（三年级起点 陈琳）",
        grade: "地方版",
        subject: "英语",
        publisher: "外语教学与研究出版社",
        cover: "img/yy3aw3.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1v9hHvVqSpg6efsWl-vF5Hw?pwd=ruk2" }
        ]
    },
    {
        id: 536,
        school: "小学",
        title: "英语三至六年级（三年级起点 JOIN IN）",
        grade: "地方版",
        subject: "英语",
        publisher: "外语教学与研究出版社",
        cover: "img/yy3aw4.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1GcM4V4BxREw3I6YsF-e95A?pwd=k1n1" }
        ]
    },
    {
        id: 537,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "川教版出版社",
        cover: "img/yy3acj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1jA_LmcBppzREplVbtdL3kA?pwd=zq5g" }
        ]
    },
    {
        id: 538,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "接力出版社",
        cover: "img/yy3ajl.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/19Noa1uLAjx597HJ4GIZ9Tw?pwd=tkwq" }
        ]
    },
    {
        id: 539,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "教科版（EEC学院）",
        cover: "img/yy3aj1.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1ZtnZnn7sxXnQf3YaKeBouQ?pwd=xk35" }
        ]
    },
    {
        id: 540,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "教科版（广州）",
        cover: "img/yy3aj2.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1vKzmnWBL2jnRqOBSdHdaHw?pwd=55ti" }
        ]
    },
    {
        id: 541,
        school: "小学",
        title: "英语三至六年级（三年级起点 沪教牛津版）",
        grade: "地方版",
        subject: "英语",
        publisher: "上海教育出版社",
        cover: "img/yy3ahj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1eBKgol_r696-REXNdZKifg?pwd=g91e" }
        ]
    },
    {
        id: 542,
        school: "小学",
        title: "英语一至五年级（上海牛津版）",
        grade: "地方版",
        subject: "英语",
        publisher: "上海教育出版社",
        cover: "img/yy1ash.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/10KZMYFZ89vjF26rjuyN5NA?pwd=4d45" }
        ]
    },
    {
        id: 543,
        school: "小学",
        title: "英语一至六年级（一年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "清华大学出版社",
        cover: "img/yy1aqh.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1f9dey7JvdUtBB5zIIkmssw?pwd=wwe3" }
        ]
    },
    {
        id: 544,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "湖南少年儿童出版社",
        cover: "img/yy3axs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/12-PUxj4HNEMbzABrjP4Odg?pwd=e1qx" }
        ]
    },
    {
        id: 545,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "科学普及出版社",
        cover: "img/yy3akp.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1QOOE8NEob7Mj4oN47St8eA?pwd=u4c1" }
        ]
    },
    {
        id: 546,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "粤教粤人出版社",
        cover: "img/yy3ayj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1YXYN0bvUFpyTaSmlE-nwzA?pwd=v4cd" }
        ]
    },
    {
        id: 547,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "辽宁师范大学出版社",
        cover: "img/yy3als.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1FezvCr4qH_sV-v_h70ZHtg?pwd=k8mn" }
        ]
    },
    {
        id: 548,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "重庆大学出版社",
        cover: "img/yy3acd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1dtpzHX1ETX4u4V8aE77K5A?pwd=2duv" }
        ]
    },
    {
        id: 549,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "福建教育出版社",
        cover: "img/yy3afj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1S_P2q5fPMHZK2bpZ5apKJg?pwd=uaj2" }
        ]
    },
    {
        id: 550,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "陕西旅游出版社",
        cover: "img/yy3asl.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Wr9Gj3wXdWoMbSzKQENtPQ?pwd=tusj" }
        ]
    },
    {
        id: 551,
        school: "小学",
        title: "英语三至六年级（三年级起点）",
        grade: "地方版",
        subject: "英语",
        publisher: "鲁教湘教版出版社",
        cover: "img/yy3alx.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1CMPiyk_7xpVzRLI33X1n0w?pwd=g7zw" }
        ]
    },
    {
        id: 552,
        school: "小学",
        title: "英语三至六年级（三年级起点 五四制）",
        grade: "地方版",
        subject: "英语",
        publisher: "山东科学技术出版社",
        cover: "img/yy3ask.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1MTMhDZ9-TX9oTvn37btU5g?pwd=y6tn" }
        ]
    },
    
    {
        id: 731,
        school: "小学",
        title: "科学一至五年级（五•四学制）",
        grade: "地方版",
        subject: "科学",
        publisher: "青岛出版社",
        cover: "img/kx1aq5.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1-zADd4kogKceOgQCDnPQ2w?pwd=dwan" }
        ]
    },
    {
        id: 732,
        school: "小学",
        title: "科学一至五年级（五•四学制）",
        grade: "地方版",
        subject: "科学",
        publisher: "上海科学技术出版社",
        cover: "img/kx1ask.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Q4Q-XVehtCMfVApPQp93TA?pwd=iiy7" }
        ]
    },
    
    {
        id: 757,
        school: "高中",
        title: "信息技术 必修二册 选修六册",
        grade: "不分年级",
        subject: "信息技术",
        publisher: "人民教育出版社、中国地图出版社",
        cover: "img/xxgz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1VZmhh23t7BNCrY6rOw9g7Q?pwd=2k5t" }
        ]
    },
    {
        id: 758,
        school: "高中",
        title: "信息技术 必修二册 选修六册",
        grade: "地方版",
        subject: "信息技术",
        publisher: "华东师范大学出版社",
        cover: "img/xxgzhd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Di9g9RnS2yfrnf-DSShz2w?pwd=t3i4" }
        ]
    },
    {
        id: 759,
        school: "高中",
        title: "信息技术 必修二册 选修六册",
        grade: "地方版",
        subject: "信息技术",
        publisher: "教育科学出版社",
        cover: "img/xxgzjk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1AtKLJUd5mAYnieyfn9VzOQ?pwd=kbuf" }
        ]
    },
    {
        id: 760,
        school: "高中",
        title: "信息技术 必修二册 选修六册",
        grade: "地方版",
        subject: "信息技术",
        publisher: "上海科技教育出版社",
        cover: "img/xxgzsk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1M9FfJneHKQ_296Dz1_KFrw?pwd=qpjq" }
        ]
    },
    {
        id: 761,
        school: "高中",
        title: "信息技术 必修二册 选修六册",
        grade: "地方版",
        subject: "信息技术",
        publisher: "浙江教育出版社",
        cover: "img/xxgzzj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1r5rs5dM5hYKnWX_7pAh37w?pwd=vvfv" }
        ]
    },
    {
        id: 762,
        school: "高中",
        title: "信息技术 必修二册 选修六册",
        grade: "地方版",
        subject: "信息技术",
        publisher: "广东教育出版社",
        cover: "img/xxgzgd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Ie60dxdjUwsjqF6hr_YYFA?pwd=4dke" }
        ]
    },
    
    {
        id: 797,
        school: "高中",
        title: "化学 必修二册 选修三册",
        grade: "不分年级",
        subject: "化学",
        publisher: "人民教育出版社",
        cover: "img/hxgz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1DjHJ5DoHKr_A8NB9R9wkBQ?pwd=hgc6" }
        ]
    },
    {
        id: 798,
        school: "高中",
        title: "化学 必修二册 选修三册",
        grade: "地方版",
        subject: "化学",
        publisher: "上海科学技术出版社",
        cover: "img/hxgzsk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1GP2sfyDvJmy3hrSi0mOQ1g?pwd=4jmc" }
        ]
    },
    {
        id: 799,
        school: "高中",
        title: "化学 必修二册 选修三册",
        grade: "地方版",
        subject: "化学",
        publisher: "江苏凤凰教育出版社",
        cover: "img/hxgzjs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1gJuMYWeFXTMpgoOXChfo9w?pwd=6mmw" }
        ]
    },
    {
        id: 800,
        school: "高中",
        title: "化学 必修二册 选修三册",
        grade: "地方版",
        subject: "化学",
        publisher: "山东科学技术出版社",
        cover: "img/hxgzsd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1x2r89yEifpCs_wqjNiNQ5w?pwd=xk8n" }
        ]
    },
    
    {
        id: 814,
        school: "高中",
        title: "历史 必修二册 选修三册",
        grade: "不分年级",
        subject: "历史",
        publisher: "人民教育出版社",
        cover: "img/lsgz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1scXvPDis_7CObxdHVPPccA?pwd=eyiv" }
        ]
    },
    
    {
        id: 819,
        school: "高中",
        title: "地理 必修二册 选修三册",
        grade: "不分年级",
        subject: "地理",
        publisher: "人民教育出版社",
        cover: "img/dlgz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1nzP_741KWACrxgr5jCuHmg?pwd=dsd9" }
        ]
    },
    {
        id: 820,
        school: "高中",
        title: "地理 必修二册 选修三册",
        grade: "地方版",
        subject: "地理",
        publisher: "中国地图出版社、中华地图学社",
        cover: "img/dlgzzh.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1H-71vRZQ2-NGN6YrjNQd3A?pwd=nuzn" }
        ]
    },
    {
        id: 821,
        school: "高中",
        title: "地理 必修二册 选修三册",
        grade: "地方版",
        subject: "地理",
        publisher: "湖南教育出版社",
        cover: "img/dlgzhn.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "ttps://pan.baidu.com/s/14OGCwNZGrJ57iAAFfoWK0g?pwd=wdur" }
        ]
    },
    {
        id: 822,
        school: "高中",
        title: "地理 必修二册 选修三册",
        grade: "地方版",
        subject: "地理",
        publisher: "山东教育出版社",
        cover: "img/dlgzsd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1uP13hwi1aFonDjVZa6sFow?pwd=rq48" }
        ]
    },
    
    {
        id: 842,
        school: "高中",
        title: "思想政治 必修四册 选修三册",
        grade: "不分年级",
        subject: "思想政治",
        publisher: "人民教育出版社",
        cover: "img/zzgz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/125DIeEYheIPMzZQm9aMBYw?pwd=5txt" }
        ]
    },
    
    {
        id: 850,
        school: "高中",
        title: "数学（A版）必修二册 选修三册",
        grade: "不分年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sxb101.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1nou97a7lbXwK8QPAgVz9Gg?pwd=5css" }
        ]
    },
    {
        id: 851,
        school: "高中",
        title: "数学（B版）必修四册 选修三册",
        grade: "不分年级",
        subject: "数学",
        publisher: "人民教育出版社",
        cover: "img/sxb201.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1SJrOHTS2l80HOVfPQDn8Ng?pwd=x1d3" }
        ]
    },
    {
        id: 852,
        school: "高中",
        title: "数学 必修二册 选修二册",
        grade: "地方版",
        subject: "数学",
        publisher: "北京师范大学出版社",
        cover: "img/sxgzbs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1_FUySWsALxbBACm8yfAP7g?pwd=4sc3" }
        ]
    },
    {
        id: 853,
        school: "高中",
        title: "数学 必修四册 选修三册",
        grade: "地方版",
        subject: "数学",
        publisher: "上海教育出版社",
        cover: "img/sxgzsh.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1YnqZgAe8fuyN-I1TuEYQKg?pwd=w6ix" }
        ]
    },
    {
        id: 854,
        school: "高中",
        title: "数学 必修二册 选修二册",
        grade: "地方版",
        subject: "数学",
        publisher: "湖南教育出版社",
        cover: "img/sxgzhn.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/12spFDt1qT1MzdopopW0qPA?pwd=1sh3" }
        ]
    },
    {
        id: 855,
        school: "高中",
        title: "数学 必修二册 选修二册",
        grade: "地方版",
        subject: "数学",
        publisher: "江苏凤凰教育出版社",
        cover: "img/sxgzjs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1D_anfOd8AY02Ufj1jHGWxQ?pwd=cvpw" }
        ]
    },
    {
        id: 856,
        school: "高中",
        title: "数学 必修四册 选修三册",
        grade: "地方版",
        subject: "数学",
        publisher: "湖北教育出版社",
        cover: "img/sxgzhb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1hBVz7jCbYnkfx9xq-T_7ow?pwd=pj5a" }
        ]
    },
    
    {
        id: 885,
        school: "高中",
        title: "物理 必修三册 选修三册",
        grade: "不分年级",
        subject: "物理",
        publisher: "人民教育出版社",
        cover: "img/wlgz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/13yvuCqqNLyLpNnDXTWAT5Q?pwd=6usb" }
        ]
    },
    {
        id: 886,
        school: "高中",
        title: "物理 必修三册 选修三册",
        grade: "地方版",
        subject: "物理",
        publisher: "教育科学出版社",
        cover: "img/wlgzjk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1rjI2nZQJ45GnvRft7Mufhw?pwd=pji4" }
        ]
    },
    {
        id: 887,
        school: "高中",
        title: "物理 必修三册 选修三册",
        grade: "地方版",
        subject: "物理",
        publisher: "上海科学技术出版社",
        cover: "img/wlgzsk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1wFEbq1oqPtVs8_kAEfxQIQ?pwd=1b4h" }
        ]
    },
    {
        id: 888,
        school: "高中",
        title: "物理 必修三册 选修三册",
        grade: "地方版",
        subject: "物理",
        publisher: "上海科技教育出版社",
        cover: "img/wlgzsj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1wdoc44LUucU16Ea3ffD96w?pwd=ib2y" }
        ]
    },
    {
        id: 889,
        school: "高中",
        title: "物理 必修三册 选修三册",
        grade: "地方版",
        subject: "物理",
        publisher: "广东教育出版社",
        cover: "img/wlgzgd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Tw_BJLgfk8nTFf2Il7Nwrg?pwd=euiu" }
        ]
    },
    {
        id: 890,
        school: "高中",
        title: "物理 必修三册 选修三册",
        grade: "地方版",
        subject: "物理",
        publisher: "山东科学技术出版社",
        cover: "img/wlgzsd.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1iigmPubEjnHH-Oj2rioVBw?pwd=edg8" }
        ]
    },
    
    {
        id: 921,
        school: "高中",
        title: "生物学 必修二册 选修三册",
        grade: "不分年级",
        subject: "生物学",
        publisher: "人民教育出版社",
        cover: "img/swgz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1WILv_90gxHfIF1OORS148Q?pwd=5gt9" }
        ]
    },
    {
        id: 922,
        school: "高中",
        title: "生物学 必修二册 选修三册",
        grade: "地方版",
        subject: "生物学",
        publisher: "上海科学技术出版社",
        cover: "img/swgzsk.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/18tIt82cWKe2BBTE7nBFKKQ?pwd=gb8b" }
        ]
    },
    {
        id: 923,
        school: "高中",
        title: "生物学 必修二册 选修三册",
        grade: "地方版",
        subject: "生物学",
        publisher: "上海科技教育出版社",
        cover: "img/swgzsj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/19Vmizvhpfv08P_xSZ7v4eg?pwd=7zp3" }
        ]
    },
    {
        id: 924,
        school: "高中",
        title: "生物学 必修二册 选修三册",
        grade: "地方版",
        subject: "生物学",
        publisher: "浙江科学技术出版社",
        cover: "img/swgzzj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/16ToPzM0wdiwD5OzmtaSQVw?pwd=wmdc" }
        ]
    },
    {
        id: 925,
        school: "高中",
        title: "生物学 必修二册 选修三册",
        grade: "地方版",
        subject: "生物学",
        publisher: "江苏凤凰教育出版社",
        cover: "img/swgzjs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1idB5K0EHL95SIn0yPf45Bg?pwd=rwry" }
        ]
    },
    {
        id: 926,
        school: "高中",
        title: "生物学 必修二册 选修三册",
        grade: "地方版",
        subject: "生物学",
        publisher: "北京师范大学出版社",
        cover: "img/swgzbs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1YuVGu1f5SpI27nPlXlaesA?pwd=skv2" }
        ]
    },
    
    {
        id: 944,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "不分年级",
        subject: "英语",
        publisher: "人民教育出版社",
        cover: "img/yygz01.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1oKQ-8tsPCcm2jk5mknwUdw?pwd=mxxx" }
        ]
    },
    {
        id: 945,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "地方版",
        subject: "英语",
        publisher: "河北教育出版社",
        cover: "img/yygzhb.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Nt2UFoPv8p16zg0RlMy57w?pwd=pvg2" }
        ]
    },
    {
        id: 946,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "地方版",
        subject: "英语",
        publisher: "外语教学与研究出版社",
        cover: "img/yygzwy.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1zgvvhE5KpCYrvNcnPxhSng?pwd=ghjc" }
        ]
    },
    {
        id: 947,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "地方版",
        subject: "英语",
        publisher: "上海外语教育出版社",
        cover: "img/yygzsw.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1XAOFBCwbfRACgv7bNlB-1w?pwd=9t9i" }
        ]
    },
    {
        id: 948,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "地方版",
        subject: "英语",
        publisher: "上海教育出版社",
        cover: "img/yygzsj.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1Kc88IiauEYPcUPN2CoPmtg?pwd=mcaa" }
        ]
    },
    {
        id: 949,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "地方版",
        subject: "英语",
        publisher: " 译林出版社",
        cover: "img/yygzyl.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1R1yTUrvYuM5t9B88SdEYDQ?pwd=3mwg" }
        ]
    },
    {
        id: 950,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "地方版",
        subject: "英语",
        publisher: "重庆大学出版社",
        cover: "img/yygzcq.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1bPpbrsdN9EyVoQ5sgYX9yw?pwd=nbpu" }
        ]
    },
    {
        id: 951,
        school: "高中",
        title: "英语 必修三册 选修四册",
        grade: "地方版",
        subject: "英语",
        publisher: "北京师范大学出版社",
        cover: "img/yygzbs.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1SQN1d8wY142jzKDjb46fJA?pwd=mn3y" }
        ]
    },
    
    {
        id: 952,
        school: "高中",
        title: "语文必修 上册",
        grade: "不分年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/ywb101.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JAKLdb8MwyLIPrEUaA9nLQ?pwd=3dk5" }
        ]
    },
    {
        id: 953,
        school: "高中",
        title: "语文必修 下册",
        grade: "不分年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/ywb201.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JAKLdb8MwyLIPrEUaA9nLQ?pwd=3dk5" }
        ]
    },
    {
        id: 954,
        school: "高中",
        title: "语文选择性必修 上册",
        grade: "不分年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/ywx101.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JAKLdb8MwyLIPrEUaA9nLQ?pwd=3dk5" }
        ]
    },
    {
        id: 955,
        school: "高中",
        title: "语文选择性必修 下册",
        grade: "不分年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/ywx201.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JAKLdb8MwyLIPrEUaA9nLQ?pwd=3dk5" }
        ]
    },
    {
        id: 956,
        school: "高中",
        title: "语文选择性必修 中册",
        grade: "不分年级",
        subject: "语文",
        publisher: "人民教育出版社",
        cover: "img/ywx301.jpg",
        links: [
            { name: "百度网盘", type: "baidu", url: "https://pan.baidu.com/s/1JAKLdb8MwyLIPrEUaA9nLQ?pwd=3dk5" }
        ]
    }
    
];


// ==========================================
// 2. 逻辑控制区
// ==========================================

let currentState = {
    school: '全部',
    grade: '全部',
    subject: '全部',
    currentPage: 1,      // 当前页码
    itemsPerPage: 10     // ⚡ 每页显示数量 (这里设为10本，超过就会自动分页)
};

function init() {
    renderSchoolFilters();
    renderGradeFilters();
    renderSubjectFilters();
    renderBooks();
}

// --- 核心筛选逻辑 ---
function getFilteredBooks(ignoreType = null) {
    return books.filter(book => {
        const matchSchool = currentState.school === '全部' || book.school === currentState.school;
        const matchGrade = ignoreType === 'grade' || currentState.grade === '全部' || book.grade === currentState.grade;
        const matchSubject = ignoreType === 'subject' || currentState.subject === '全部' || book.subject === currentState.subject;
        
        if (ignoreType === 'grade') return matchSchool;
        if (ignoreType === 'subject') return matchSchool && matchGrade;
        
        return matchSchool && matchGrade && matchSubject;
    });
}

// --- 渲染过滤器按钮 ---
function createFilterBtn(text, type, isActive) {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${isActive ? 'active' : ''}`;
    btn.innerText = text;
    btn.onclick = () => handleFilterClick(type, text);
    return btn;
}

function renderSchoolFilters() {
    const container = document.getElementById('school-filters');
    container.innerHTML = '';
    const schools = ['全部', ...new Set(books.map(b => b.school))];
    schools.forEach(school => {
        container.appendChild(createFilterBtn(school, 'school', currentState.school === school));
    });
}

function renderGradeFilters() {
    const container = document.getElementById('grade-filters');
    container.innerHTML = '';
    const availableBooks = getFilteredBooks('grade');
    const grades = ['全部', ...new Set(availableBooks.map(b => b.grade))];
    grades.forEach(grade => {
        container.appendChild(createFilterBtn(grade, 'grade', currentState.grade === grade));
    });
}

function renderSubjectFilters() {
    const container = document.getElementById('subject-filters');
    container.innerHTML = '';
    const availableBooks = getFilteredBooks('subject');
    const subjects = ['全部', ...new Set(availableBooks.map(b => b.subject))];
    subjects.forEach(subject => {
        container.appendChild(createFilterBtn(subject, 'subject', currentState.subject === subject));
    });
}

function handleFilterClick(type, value) {
    currentState.currentPage = 1; // 筛选条件改变时，重置回第一页
    
    if (type === 'school') {
        currentState.school = value;
        currentState.grade = '全部';
        currentState.subject = '全部';
        renderSchoolFilters();
        renderGradeFilters();
        renderSubjectFilters();
    } else if (type === 'grade') {
        currentState.grade = value;
        currentState.subject = '全部';
        renderGradeFilters();
        renderSubjectFilters();
    } else if (type === 'subject') {
        currentState.subject = value;
        renderSubjectFilters();
    }
    
    renderBooks();
}

function changePage(page) {
    currentState.currentPage = page;
    renderBooks();
    // 换页后自动回到顶部，体验更好
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 渲染书籍列表 (含分页逻辑) ---
function renderBooks() {
    const container = document.getElementById('book-list');
    const pagWrapper = document.getElementById('pagination-container');
    container.innerHTML = '';

    // 1. 获取所有符合条件的书籍
    const allFilteredBooks = getFilteredBooks();

    if (allFilteredBooks.length === 0) {
        container.innerHTML = '<div class="empty-state">没有找到相关书籍</div>';
        pagWrapper.style.display = 'none';
        return;
    }

    // 2. 计算分页
    const totalPages = Math.ceil(allFilteredBooks.length / currentState.itemsPerPage);
    
    // 如果当前页码超过了总页数，归位到第一页
    if (currentState.currentPage > totalPages) currentState.currentPage = 1;

    // 3. 截取当前页数据 (例如第1页截取 0-10，第2页截取 10-20)
    const startIndex = (currentState.currentPage - 1) * currentState.itemsPerPage;
    const endIndex = startIndex + currentState.itemsPerPage;
    const booksToShow = allFilteredBooks.slice(startIndex, endIndex);

    // 4. 生成书籍卡片 HTML
    booksToShow.forEach(book => {
        const linksHtml = book.links.map(link => {
            let cls = 'dl-default';
            if(link.type === 'baidu') cls = 'dl-baidu';
            if(link.type === 'quark') cls = 'dl-quark';
            if(link.type === 'ali') cls = 'dl-ali';
            return `<a href="${link.url}" target="_blank" class="dl-btn ${cls}">${link.name}</a>`;
        }).join('');

        const imgHtml = book.cover 
            ? `<img src="${book.cover}" alt="${book.subject}" loading="lazy">` 
            : `<div class="no-img"><span>${book.subject}</span><br><span style="font-size:10px">暂无封面</span></div>`;

        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="book-cover">${imgHtml}</div>
            <div class="book-info">
				<div class="book-title" title="${book.title}">${book.title}</div>
                <div class="book-meta">${book.school} · ${book.publisher}</div>
                <div class="download-links">${linksHtml}</div>
            </div>
        `;
        container.appendChild(card);
    });

    // 5. 渲染分页按钮
    renderPagination(totalPages, allFilteredBooks.length);
}

function renderPagination(totalPages, totalCount) {
    const container = document.getElementById('pagination');
    const wrapper = document.getElementById('pagination-container');
    const info = document.getElementById('page-info');

    // 如果只有1页，也显示出来，但按钮不可点，或者你可以选择 `totalPages > 1` 才显示
    if (totalPages <= 1) {
        wrapper.style.display = 'none';
        return;
    }
    
    wrapper.style.display = 'flex';
    container.innerHTML = '';
    info.innerText = `第 ${currentState.currentPage} 页 / 共 ${totalPages} 页 (共 ${totalCount} 本书)`;

    // 上一页
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerText = '上一页';
    prevBtn.disabled = currentState.currentPage === 1;
    prevBtn.onclick = () => changePage(currentState.currentPage - 1);
    container.appendChild(prevBtn);

    // 简单页码逻辑：只显示 1..当前..总页
    // 如果想要复杂的 (1 ... 5 6 7 ... 10) 逻辑比较长，这里用简单版
    for (let i = 1; i <= totalPages; i++) {
        // 为了防止页码太多，这里做一个简单的折叠逻辑：
        // 只显示：第一页、最后一页、当前页的前后2页
        if (i === 1 || i === totalPages || (i >= currentState.currentPage - 1 && i <= currentState.currentPage + 1)) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentState.currentPage ? 'active' : ''}`;
            btn.innerText = i;
            btn.onclick = () => changePage(i);
            container.appendChild(btn);
        } else if (i === currentState.currentPage - 2 || i === currentState.currentPage + 2) {
             // 显示省略号
             const span = document.createElement('span');
             span.innerText = '...';
             span.style.padding = '5px';
             span.style.color = '#999';
             container.appendChild(span);
        }
    }

    // 下一页
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerText = '下一页';
    nextBtn.disabled = currentState.currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentState.currentPage + 1);
    container.appendChild(nextBtn);
}

// 启动
init();