//mr Tohid 

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '917849917350'
global.nomerowner = ["917849917350"]

// Apikey 

global.skizo = 'Tohid Khan'
global.casterix = 'tohidkhan6332'
//watermark 
global.packname = '*TOHID KHAN*'
global.author = 'TOHID_KHAN-V3'

// cpanel 
global.domain = 'https://' // Tohidkhan6332
global.apikey2 = 'ptlc' // I love Tohid
global.capikey2 = 'ptla' // Tohid x khan
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = true;     
//to show your real presence  
global.available = false;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.welcome = false;

global.prefix = '.';

global.autobio = false;

global.antilink = false;

global.antilinkkick = false;

global.antilinkwarn = false;

//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
