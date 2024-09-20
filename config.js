const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349150683907";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_23_40_09_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA5NixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVUMU1TVGVxcEo1T2ZtK2ZraEdzSzZRaGptOEUzaWtCdnZWT2M2dmEyVGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIko1NVVxRS03UkdLVC1pNWpKRVBtNWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYThmMjU1MzMtODBmMi00YmJjLTkwOTgtZjE0ZTM5Y2ZkOTJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDE0NixcbiAgICAgIDIyMSxcbiAgICAgIDI0OCxcbiAgICAgIDE4MSxcbiAgICAgIDExLFxuICAgICAgNDAsXG4gICAgICAxMzcsXG4gICAgICAxNTcsXG4gICAgICAzMSxcbiAgICAgIDEzMSxcbiAgICAgIDk5LFxuICAgICAgNTAsXG4gICAgICA2MSxcbiAgICAgIDE2OSxcbiAgICAgIDI2LFxuICAgICAgMTEwLFxuICAgICAgMTc2LFxuICAgICAgNTAsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAyOSxcbiAgICAgIDE4LFxuICAgICAgOTcsXG4gICAgICAxNDMsXG4gICAgICAxNDksXG4gICAgICAyNDEsXG4gICAgICAxMTEsXG4gICAgICAxODAsXG4gICAgICAxODEsXG4gICAgICAxODYsXG4gICAgICAxOSxcbiAgICAgIDcyLFxuICAgICAgMzQsXG4gICAgICAyMDAsXG4gICAgICAxMzYsXG4gICAgICAxMzUsXG4gICAgICAyNDEsXG4gICAgICAxMTMsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHSFY5OUVRUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MDY4MzkwNzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQxMTM5MDYxMDI0NjU6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNlIzcVVERVAzc3NyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlAzOCtna3pEMlFmVVJhdnIrUjBHSEZoU204WmpmdmxBNlBZMUN0dFlod1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGNzY1NXalhWNitXRFZERXJRWm8wZkFvREk4NWhXMXpKSWlCOHgwemIvOFZxczYrRFJkZzhIajFEWjhtVTNMNHFJc04raW1XeWRqSTMreXZHTHcrRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGQwaWUyREZDMUZuUjVVVWdQU24wRi9pYzViZlREVkQ0MnBXN2VQVTRYZWE3QlkrNTFBS0pSbGpGQm1YTWtlWEpRR2ptbWZRU2V0YVhBYk44U1hIQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1MDY4MzkwNzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY3ODkyNTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
