const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&eB12jaCa#iy7pj0pLb0e5s1OTxBG1OYMKhyqoweK2SwaInUEW-nI', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000',
MONGODB: process.env.MONGODB || 'mongodb+srv://javolef128:kdHmlVfHglwEoExh@pramodb.nefxrcd.mongodb.net/' // අනිවාරෙන් Mongodb Url එකක් ඕනි දන්නෙ නැත්නම් මගෙ වීඩියෝ එක බලලා හදාගන්න.🔥
};
