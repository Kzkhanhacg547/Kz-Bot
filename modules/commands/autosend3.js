module.exports.config = {
  name: 'autosend3',
  version: '10.02',
  hasPermssion: 0,
  credits: 'DC-Nam', // Bok idea thời tiết, mod by vthien 
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'Hệ thống',
  usages: '[]',
  cooldowns: 3
};
const nam = [{
  timer: '4:30:00 AM',
  message: ['\n{abc}']
           },
           {
  timer: '5:30:00 AM',
  message: ['\n{abc}']
           },
           {
  timer: '6:30:00 AM',
  message: ['\n{abc}']
           },
      {
   timer: '7:30:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━━━━\n[⏰] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎀] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘁𝗶𝗻𝗵 𝗺𝗼̛ 𝘃𝘂𝗶 𝘃𝗲̉ 🌇\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━━\n[💫] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '8:35:00 AM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
    timer: '9:30:00 AM',
  message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '10:35:00 AM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '11:35:00 AM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '12:35:00 AM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '1:35:00 PM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '2:35:00 PM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
   {
   timer: '3:30:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━━━━\n[⏰] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎀] ➝ 𝗖𝗮̉ 𝘀𝗮́𝗻𝗴 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶 𝗿𝗼̂̀𝗶, 𝗻𝗴𝗵𝗶̃ 𝗻𝗴𝗼̛𝗶 𝗻𝗮̣𝗽 𝗻𝗮̆𝗻𝗴 𝗻𝗮̀𝗼 😴\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━━\n[💫] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
      },
{
        timer: '3:30:00 AM',
      message: ['===『 𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗧𝗔𝗥𝗧 』===\n━━━━━━━━━━━━━━━━━━━\n[🍇] ➝ 𝗔𝗿𝗮 𝗔𝗿𝗮\n[⏰] ➝ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀ {time}\n[🤖] ➝ 𝗕𝗢𝗧 𝘀𝗲̃ 𝘁𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗿𝗲𝗹𝗼𝗮𝗱 𝗹𝗮̣𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻, 𝗰𝗵𝗼̛̀ 𝘁𝗶́...']
      },
           {
   timer: '4:35:00 PM',
      message: [' Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
   timer: '5:30:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━━━━\n[⏰] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎀] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😘\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━━\n[💫] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
      },
           {
   timer: '6:35:00 PM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '7:35:00 PM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
   timer: '8:35:00 PM',
      message: ['Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
           {
    timer: '9:30:00 PM',
  message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━━━━\n[⏰] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎀] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉ 😘\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━━\n[💫] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
}];
module.exports.onLoad = o => setInterval(async() => {
  const r = a => a[Math.floor(Math.random()*a.length)];
  if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){
const axios = require('axios');
const time = process.uptime();
   var hours = Math.floor(time / (60 * 60));
  var minutes = Math.floor((time % (60 * 60)) / 60);
var seconds = Math.floor(time % 60);
var msg = r(á.message);
const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Bac Lieu')}`);
  var abc =`🌦️===『 𝗧𝗕 𝗧𝗵𝗼̛̀𝗶 𝗧𝗶𝗲̂́𝘁 』===🌦️\n━━━━━━━━━━━━━━━━━━━\n→ 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗼̛̀𝗶 𝘁𝗶𝗲̂́𝘁 𝘁𝗮̣𝗶 ${res.data[0].location.name}\n→ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.day} ${res.data[0].current.date}\n→ 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n→ 𝗠𝗼̂ 𝘁𝗮̉: ${res.data[0].current.skytext}\n→ đ𝗼̣̂ 𝗮̂̉𝗺: ${res.data[0].current.humidity}\n→ 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗴𝗶𝗼́: ${res.data[0].current.winddisplay}\n→ 𝗚𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.observationtime}\n→ 𝗧𝘂̛̀ 𝘁𝗿𝗮̣𝗺 𝘃𝘂̃ 𝘁𝗿𝘂̣ 𝗻𝗮𝘀𝗮 🚀`;
  msg = msg.replace(/{abc}/,abc);
msg = msg.replace(/{hours}/g, hours)
msg = msg.replace(/{minutes}/g, minutes)
msg = msg.replace(/{seconds}/g, seconds)
  msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`)).data.url)
          msg = {
              body: msg, attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/chill`)).data.data, {
                  responseType: 'stream'
              })).data
          };
 global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
  };
}, 1000);

module.exports.run = async o => {
try{
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const request = global.nodemodule["request"];
const { api, event, args } = o;
const { threadID, messageID } = event;
var bok = args.join(" ");
if(!bok) return api.sendMessage("nhập tỉnh/tp cần xem thời tiết", threadID);
const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
const bokk = res.data[0].forecast;
var text = `Thời tiết của: ${bok} vào các ngày`;
for (let i = 0; i < 5; i++) {
  text += `\n${i+1}-> ${bokk[i].day} ${bokk[i].date}\n=>Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n=>Mô tả: ${bokk[i].skytextday}\n=>Tỷ lệ mưa: ${bokk[i].precip}\n`
};
api.sendMessage(text, threadID, messageID)
}catch(err){api.sendMessage(`${err}`, threadID)}
           }