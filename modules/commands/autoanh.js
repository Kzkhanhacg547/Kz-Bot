module.exports.config = {
  name: 'autoanh',
  version: '10.02',
  hasPermssion: 2,
  credits: 'DC-Nam',
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'Hệ thống',
  usages: '[]',
  cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
  get
} = require('axios'),
config = [{
      timer: '12:15:00 AM',
  message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
      timer: '9:15:00 AM',
      message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
      timer: '7:40 AM',
      message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
      timer: '10:45:00 PM',
      message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
        timer: '9:45:00 PM',
      message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},

{
       timer: '6:40:00 PM',
      message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']   
},

{
      timer: '3:45:00 PM',
      message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},

{
      timer: '1:45:00 PM',
      message: ['===『 𝐀𝐔𝐓𝐎 𝐀̉𝐍𝐇 』===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {} \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴'] 
}]; 
module.exports.onLoad = o => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
      if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
          var msg = r(á.message);



  const res1 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`);
  var array = [];
  var data1 = res1.data.data;
  var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
  array.push(downloadfile1);

          msg = {
              body: msg, attachment: array
          };
          global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
      };
  }, 1000);
};
module.exports.run = () => {};