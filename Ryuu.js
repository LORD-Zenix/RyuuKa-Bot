; /*
  * Selamat di Gunakan🗿☕
  * instagram me? : @RyuukaBotz8
  * Jangan Lupa Kasih Nama Creator nya om🗿☕
  * Beberapa Gw Enc Untuk Menghindari
  * Penjualan / Reupload ✅
  */
    const { 
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL,
    ReconnectMode,
    ProxyAgent,
    ChatModification,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
    Browsers,
    } = require("@adiwajshing/baileys")
    const Client = require('./lib/simple.js')
    const WAConnection = Client.WAConnection(_WAConnection)
    const fs = require("fs")
    const axios = require('axios')
    const speed = require("performance-now")
    const util = require('util')
    const crypto = require('crypto')
    const request = require('request')
    const { exec, spawn } = require('child_process')
    const fetch = require('node-fetch')
    const moment = require('moment-timezone')
    const ffmpeg = require('fluent-ffmpeg')
    const { EmojiAPI } = require("emoji-api");
    const emoji = new EmojiAPI()

    //LIB
    const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
    const { color, bgcolor } = require('./lib/color')
    const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
    const { uploadImages } = require('./lib/uploadimage')
    const { pinterest } = require('./lib/pinterest') 
    const { mediafireDl } = require('./lib/mediafire.js')
    const { sleep } = require('./lib/myfunc')
    const { checkCreate, addCreate, addCommon, bukaCommon, getCommon, addLegendary, bukaLegendary, getLegendary, addMythic, bukaMythic, getMythic } = require('./lib/create');
    const Exif = require('./lib/exif');
    const exif = new Exif();
    const setting = require('./setting.json')     
    //Lib By Febri
    const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance } = require("./lib/limit");
    const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas , addFish, sellFish, getFish, addAnimal, sellAnimal, getAnimal } = require("./lib/rpgfunction");
    const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
    //Menu
    const { allmenu } = require('./ryudata/allmenu.js')
    const { othermenu, groupmenu, ownermenu, upswmenu, animangamenu, anomenu, islamimenu, newsmenu, searchmenu, voicemenu, storagemenu, storemenu, randomtextmenu, randomimgmenu, gamemenu, rpgmenu, sellmenu, misimenu, funmenu, soundmenu, ephotomenu, makermenu, textpromemenu, photooxymenu, informasimenu, cecanmenu, asupanmenu, nulismenu, downloadmenu, convertmenu, animemenu } = require('./ryudata/simple.js')
    //Database
    const _welcom = JSON.parse(fs.readFileSync('./database/welcome.json'))
    const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
    const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
    const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
    const ban = JSON.parse(fs.readFileSync('./database/banned.json')) 
    const event = JSON.parse(fs.readFileSync('./database/data/event.json'))
    const limit = JSON.parse(fs.readFileSync('./database/data/limit.json'));
    const balance = JSON.parse(fs.readFileSync('./database/data/balance.json'));
    const _RPG = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'))
    const _create = JSON.parse(fs.readFileSync('./database/create.json')) 
    const _level = JSON.parse(fs.readFileSync('./database/rpg/leveluser.json'))
    const _petualang = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'))

    //Database Game
    const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
    const tebakimia = JSON.parse(fs.readFileSync('./database/game/tebakimia.json'))
    const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
    const tebakbendera = JSON.parse(fs.readFileSync('./database/game/tebakbendera.json'))
    const tebakata = JSON.parse(fs.readFileSync('./database/game/tebakata.json'))
    const tebaklirik = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
    const tebakjenaka = JSON.parse(fs.readFileSync('./database/game/tebakjenaka.json'))
    const susunkata = JSON.parse(fs.readFileSync('./database/game/susunkata.json'))
    const asahotak = JSON.parse(fs.readFileSync('./database/game/asahotak.json'))
    //Storage
    const setiker = JSON.parse(fs.readFileSync('./assets/stik.json'))
    const videonye = JSON.parse(fs.readFileSync('./assets/video.json'))
    const audionye = JSON.parse(fs.readFileSync('./assets/audio.json'))
    const imagenye = JSON.parse(fs.readFileSync('./assets/image.json'))
    //Setting Owner
    const fakeimage = fs.readFileSync('./media/Ryuu.jpg')    
    ownernumber = setting.OwnerNumber
    ownernumber2 = setting.OwnerNumber2
    botname = setting.BotName
    ownername = setting.OwnerName
    ownername2 = setting.OwnerName2
    fake = setting.Fake
    limitCount = setting.limitCount
    //Setting Donasi & Pay
    gopay = setting.Gopay
    dana = setting.Dana
    ovo = setting.Ovo
    pulsa = setting.Pulsa
    //Tictactoe
    ky_ttt = []
    tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
    //Apikey
    ryukey = setting.RyuKey
    alphakey = setting.AlphaKey
    //Auto Bio & Dll
    autobio = true
    public = true
    menusimpel = false
    let blocked = []
    let public_mode = setting. public_mode    
    //Sticker CMD
    const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
    }

    const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
    position = i
    }
    })
    if (position !== null) {
    return position
    }
    }

    const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
    position = i
    }
    })
    if (position !== null) {
    return scommand[position].chats
    }
    }
    //Module Export
    module.exports = Ryuu = async (Ryuu, mek, _welkom) => {
    try {
    if (!mek.hasNewMessage) return
    mek = mek.messages.all()[0]
    if (!mek.message) return
    if (mek.key && mek.key.remoteJid == 'status@broadcast') return
    if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
    global.blocked
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
    const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
    const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
    const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
    const type = Object.keys(mek.message)[0]
    const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const nopref = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
    const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    const args = body.trim().split(/ +/).slice(1)
    const arg = budy.slice(command.length + 2, budy.length)
    const c = args.join(' ')
    const isCmd = body.startsWith(prefix)
    const q = args.join(' ')
    const Verived = "0@s.whatsapp.net"
    const txt = mek.message.conversation
    const botNumber = Ryuu.user.jid
    const ownerNumber = [`${ownernumber}@s.whatsapp.net`, `${ownernumber2}@s.whatsapp.net`]
    const isGroup = from.endsWith('@g.us')
    const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
    let sender = isGroup ? mek.participant : mek.key.remoteJid
    let senderr = mek.key.fromMe ? Ryuu.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
    const groupMetadata = isGroup ? await Ryuu.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupId = isGroup ? groupMetadata.jid : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupDesc = isGroup ? groupMetadata.desc : ''
    const groupOwner = isGroup ? groupMetadata.owner : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
    const isGroupAdmins = groupAdmins.includes(sender) || false
    const senderNumber = sender.split("@")[0]
    const hour_now = moment().format('HH:mm:ss')
    const conts = mek.key.fromMe ? Ryuu.user.jid : Ryuu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = mek.key.fromMe ? Ryuu.user.name : conts.notify || conts.vname || conts.name || '-'
    const processsTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()}
    //Function TicTacToe
    idttt = []
    players1 = []
    players2 = []
    gilir = []
    for (let t of ky_ttt){
    idttt.push(t.id)
    players1.push(t.player1)
    players2.push(t.player2)
    gilir.push(t.gilir)
    }
    const isTTT = isGroup ? idttt.includes(from) : false
    isPlayer1 = isGroup ? players1.includes(sender) : false
    isPlayer2 = isGroup ? players2.includes(sender) : false

    const isPetualang = checkPetualangUser(sender)
    const isBanned = ban.includes(sender)
    const isEventon = isGroup ? event.includes(from) : false
    const isPrem = premium.includes(sender)
    const isAntiLink = isGroup ? antilink.includes(from) : false
    const isWelkom = isGroup ? _welkom.includes(from) : false 
    const isOwner = ownerNumber.includes(sender)
    const isMybot = isOwner || mek.key.fromMe
    const itsMe = mek.key.fromMe ? true : false
    let bio_nya = await Ryuu.getStatus(sender)
    try {
    bio_user = `${bio_nya.status}`
    } catch {
    bio_user = '-'
    }
    function randomNomor(min, max = null) {
    if (max !== null) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
    return Math.floor(Math.random() * min) + 1
    }
    }
    function monospace(string) {
    return '' + string + ''
    }
    var premi = 'No Premium User'
    if (isPrem) {
    premi = 'Premiun User'
    } 
    if (isOwner) {
    premi = 'This Is Owner'
    }
    var elit = 'Petualang Biasa'
    if (isPrem) {
    elit = 'Petualang Pro'
    } 
    if (isOwner) {
    elit = 'GM in GAME'
    }
    //Auto Read
    if (!setting.autoread) {
    Ryuu.chatRead(from)
    }
    
    //UCAPAN & DLL
    var runtime = function (seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
    };
    var datw = new Date();
    var tahun = datw.getFullYear();
    var bulan = datw.getMonth();
    var taanggal = datw.getDate();
    var hari = datw.getDay();
    var tampilUcapans = datw.getHours();
    var menit = datw.getMinutes();
    var detik = datw.getSeconds();
    switch(hari) {
    case 0: hari = "Minggu";   break;
    case 1: hari = "Senin";   break;
    case 2: hari = "Selasa";   break;
    case 3: hari = "Rabu";   break;
    case 4: hari = "Kamis";   break;
    case 5: hari = "Jum'at";   break;
    case 6: hari = "Sabtu";   break;
    }
    switch(bulan) {
    case 0: bulan = "Januari";   break;
    case 1: bulan = "Februari";   break;
    case 2: bulan = "Maret";   break;
    case 3: bulan = "April";   break;
    case 4: bulan = "Mei";   break;
    case 5: bulan = "Juni";   break;
    case 6: bulan = "Juli";   break;
    case 7: bulan = "Agustus";   break;
    case 8: bulan = "September";   break;
    case 9: bulan = "Oktober";   break;
    case 10: bulan = "November";   break;
    case 11: bulan = "Desember";   break;
    }
    switch(tampilUcapans){
    case 0: tampilUcapans = 'Selamat Malam 🌠';   break;
    case 1: tampilUcapans = 'Selamat Malam 🌠';   break;
    case 2: tampilUcapans = 'Selamat Malam 🌠';   break;
    case 3: tampilUcapans = 'Selamat Pagi 🌄';   break;
    case 4: tampilUcapans = 'Selamat Pagi 🌄';   break; 
    case 5: tampilUcapans = 'Selamat Pagi 🌅';   break;
    case 6: tampilUcapans = 'Selamat Pagi 🌅';   break;
    case 7: tampilUcapans = 'Selamat Pagi 🌤️';   break;
    case 8: tampilUcapans = 'Selamat Pagi 🌤️';   break;
    case 9: tampilUcapans = 'Selamat Pagi ☀️';   break;
    case 10: tampilUcapans = 'Selamat Pagi ☀️';   break;
    case 11: tampilUcapans = 'Selamat Siang ☀️';   break; 
    case 12: tampilUcapans = 'Selamat Siang ☀️';   break;
    case 13: tampilUcapans = 'Selamat Siang ⛅️';   break;
    case 14: tampilUcapans = 'Selamat Siang ⛅';   break;
    case 15: tampilUcapans = 'Selamat Sore 🌥️';   break;
    case 16: tampilUcapans = 'Selamat Sore 🌥️';   break;
    case 17: tampilUcapans = 'Selamat Sore 🌥️';   break;
    case 18: tampilUcapans = 'Selamat Malam 🌌';   break; 
    case 19: tampilUcapans = 'Selamat Malam 🌌';   break;
    case 20: tampilUcapans = 'Selamat Malam 🌌';   break;
    case 21: tampilUcapans = 'Selamat Malam 🌌';   break;
    case 22: tampilUcapans = 'Selamat Malam 🌌';   break; 
    case 23: tampilUcapans = 'Selamat Malam 🌌';   break;
    }
    var tampilUcapan = "" + tampilUcapans;
    var tampilTanggal = hari + " "+ taanggal + " " + bulan + " " + tahun;
    var tampilWaktu = "Jam: " + tampilUcapans + ":" + menit + ":" + detik;
    var tampilHari = "" + tampilUcapans;
    //MESSAGE        
    mess = {
    limit: '[ ‼️ ] Limit mu telah habis!', 
    wait: '[ 🔎 ] Tunggu Sedang Di Proses',
    eror: '[ ❌ ] Terjadi Kesalahan',
    success: '[ ✅ ]Success️',
    error: {
    stick: '[ 😡 ] Khusus Sticker',
    Iv: '[ 🔗 ] Link Invalid!'
    },
    only: {
    group: '[ 👥 ] Fitur Hanya Bisa Di Gunakan Di Group',
    owner: '[ 👑 ] Khusus Owner',
    admin: '[ 👤 ] Khusus Admin Ngab',
    Badmin: '[ 😡 ] Bot Bukan Admin!', 
    }
    }
    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
    let po = Ryuu.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})
    return Ryuu.relayWAMessage(po, {waitForAck: true})
    }
    const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
    }
    //Sorry Gw enc Aowkwowkowka
    function _0x17a0(_0x2b67f8,_0x412e04){const _0x5ab6b7=_0x5ab6();return _0x17a0=function(_0x17a09c,_0x2ae319){_0x17a09c=_0x17a09c-0xe9;let _0x58c1b3=_0x5ab6b7[_0x17a09c];return _0x58c1b3;},_0x17a0(_0x2b67f8,_0x412e04);}function _0x5ab6(){const _0x4ab513=['Youtube\x20Creator','206390pMjXiB','12YOTFYh','1014501bpstMr','sendMessage','9IfgmiY','2ucxEdq','10900263dvLZbS','6RSRAyO','7EFTKYF','229463SGxZEy','2115736wdRjrR','PHOTO','688536EeNESY','1519410FrqBQw','https://youtube.com/c/RyuukaBotz'];_0x5ab6=function(){return _0x4ab513;};return _0x5ab6();}(function(_0x487c64,_0x2ca45a){const _0x43a7b2=_0x17a0,_0x3a0ec5=_0x487c64();while(!![]){try{const _0x4e4552=-parseInt(_0x43a7b2(0xe9))/0x1+-parseInt(_0x43a7b2(0xf5))/0x2*(parseInt(_0x43a7b2(0xf2))/0x3)+parseInt(_0x43a7b2(0xec))/0x4+-parseInt(_0x43a7b2(0xf0))/0x5*(-parseInt(_0x43a7b2(0xf7))/0x6)+parseInt(_0x43a7b2(0xf8))/0x7*(-parseInt(_0x43a7b2(0xea))/0x8)+-parseInt(_0x43a7b2(0xf4))/0x9*(parseInt(_0x43a7b2(0xed))/0xa)+parseInt(_0x43a7b2(0xf6))/0xb*(parseInt(_0x43a7b2(0xf1))/0xc);if(_0x4e4552===_0x2ca45a)break;else _0x3a0ec5['push'](_0x3a0ec5['shift']());}catch(_0x15f9ab){_0x3a0ec5['push'](_0x3a0ec5['shift']());}}}(_0x5ab6,0x35c93));const reply=_0x2de19b=>{const _0x1e4de9=_0x17a0;Ryuu[_0x1e4de9(0xf3)](from,_0x2de19b,text,{'thumbnail':fakeimage,'quoted':mek,'sendEphemeral':!![],'contextInfo':{'externalAdReply':{'title':''+tampilUcapan,'body':_0x1e4de9(0xef),'previewType':_0x1e4de9(0xeb),'thumbnailUrl':'\x20','thumbnail':fakeimage,'sourceUrl':_0x1e4de9(0xee)}}});};

    const sendMess = (hehe, teks) => {
    Ryuu.sendMessage(hehe, teks, text)
    }
    const mentions = (teks, memberr, id) => {
    (id == null || id == undefined || id == false) ? Ryuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
    }
    const costum = (pesan, tipe, target, target2) => {
    Ryuu.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
    }     
    //STICKER
    const sendStickerFromUrl = async(to, url) => {
    var names = Date.now() / 10000;
    var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
    };
    download(url, './stik' + names + '.png', async function () {
    console.log('selesai');
    let filess = './stik' + names + '.png'
    let asw = './stik' + names + '.webp'
    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
    let media = fs.readFileSync(asw)
    Ryuu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
    fs.unlinkSync(filess)
    fs.unlinkSync(asw)
    });
    });
    }
 
    //Auto Bio Ketika Online
    //note : hapus jika tidak ingin bio anda ke ubah otomatis
    if (autobio){
    if (autobio === false) return
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
    let _uptime = process.uptime() * 1000;
    let uptimer = clockString(_uptime);
    await Ryuu.setStatus(`${botname} | ⏲️ Runtime : ${uptimer}`).catch((_) => _);
    settingstatus = new Date() * 1;
    }}    

    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
    }
    const Prem1 = `Hai ${pushname}\nKamu Belum Premium, minta ke owner agar bisa menggunakan fitur inii!!`
    const Prem2 = '```Nomor Owner Di Bawah Ini Kak```'
    const Prem3 = [{buttonId: `${prefix}owner`,buttonText: {displayText: `🌱 OWNER 🌱`,},type: 1,},]

    //Fake Fakean
    const fvid = {
    key: { 
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? 
    { remoteJid: "6283891921787-1613049930@g.us" } : {}) 
    },
    message: { 
    "videoMessage": { 
    "title": `${tampilUcapan}`,
    "h": `${tampilTanggal}`,
    'duration': '99999', 
    'caption': `${tampilUcapan} ${pushname}`,
    'jpegThumbnail': fakeimage
    }
    }
    }
    const floc = {
    key : {
    participant : '0@s.whatsapp.net'
    },
    message: {
    liveLocationMessage: {
    caption: `${tampilUcapan}`,
    jpegThumbnail: fakeimage
    }
    }
    }
    const fdoc = {
    key : {
    participant : '0@s.whatsapp.net'
    },
    message: {
    documentMessage: {
    title: `${tampilUcapan}`, 
    jpegThumbnail: fakeimage
    }
    }
    }
    const ftrol = {
    key : {
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 123,
    status: 1,
    surface : 1,
    message: `${tampilUcapan}`, //Kasih namalu
    orderTitle: `${tampilUcapan}`,
    thumbnail: fakeimage, //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }     

    //All Button
    const sendButton = async (from, context, fortext, but, mek) => {
    buttonMessages = {
    contentText: context,
    footerText: fortext,
    buttons: but,
    headerType: 1
    }
    Ryuu.sendMessage(from, buttonMessages, buttonsMessage, {
    quoted: ftrol
    })
    }
    const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
    media = file1
    kma = doc1
    yha = await Ryuu.prepareMessage(from, media, document, kma)
    const buttonMessages = {
    documentMessage: yha.message.documentMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: "DOCUMENT"
    }
    Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    const sendButPrem = (id, text1, desc1, but = [], options = {}) => {
    const buttonMessage = {
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 1,
    };
    Ryuu.sendMessage(
    id,
    buttonMessage,
    MessageType.buttonsMessage,
    options
    );
    };
    const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
    kma = vid1
    mhan = await Ryuu.prepareMessage(from, kma, video)
    const buttonMessages = {
    videoMessage: mhan.message.videoMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 5
    }
    Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await Ryuu.prepareMessage(from, kma, location)
    const buttonMessages = {
    locationMessage: mhan.message.locationMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 6
    }
    Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
    const buttonMessage = {
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 1,
    };
    Ryuu.sendMessage(
    id,
    buttonMessage,
    MessageType.buttonsMessage,
    options
    );
    };
    const sendButImage = async (from, context, fortext, img, but, mek) => {
    jadinya = await Ryuu.prepareMessage(from, img, image)
    buttonMessagesI = {
    imageMessage: jadinya.message.imageMessage,
    contentText: context,
    footerText: fortext,
    buttons: but,
    headerType: 4
    }
    Ryuu.sendMessage(from, buttonMessagesI, buttonsMessage, {
    quoted: ftrol,
    })
    }     
    // Win Game
    //Tebak Gambar
    if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = tebakgambar[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Tebak Gambar 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
    delete tebakgambar[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
    }
    }
    //Cak Lontong
    if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = caklontong[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Caklontong 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
    delete caklontong[sender.split('@')[0]]
    fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
    }
    }
    //Tebak Jenaka
    if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = tebakjenaka[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Tebak Jenaka 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
    delete tebakjenaka[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
    }
    }
    //Tebak Lirik
    if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = tebaklirik[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Tebak Lirik 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
    delete tebaklirik[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
    }
    }
    //Tebak Bendera
    if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = tebakbendera[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Tebak Bendera 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
    delete tebakbendera[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
    }
    }
    //Tebak Kimia
    if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = tebakimia[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
    delete tebakimia[sender.split('@')[0]]
    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
    }
    }
    //Tebak Kata
    if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = tebakata[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Tebak Kata 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
    delete tebakata[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
    }
    }
    //Susun Kata
    if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = susunkata[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Susun Kata  🎮\n\n*Jawaban Benar🎉*\n\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
    delete susunkata[sender.split('@')[0]]
    fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
    }
    }  
    //Asah Otak
    if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
    kuis = true
    jawaban = asahotak[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Asah Otak  🎮\n\n*Jawaban Benar🎉*\n\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
    delete asahotak[sender.split('@')[0]]
    fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(asahotak))
    }
    }  

    //Anonymous
    function _0x2cea(_0x2dba63,_0x122087){const _0x217937=_0x2179();return _0x2cea=function(_0x2cea7a,_0x19dd5b){_0x2cea7a=_0x2cea7a-0x1e7;let _0x2c1252=_0x217937[_0x2cea7a];return _0x2c1252;},_0x2cea(_0x2dba63,_0x122087);}function _0x2179(){const _0x1b2b28=['@s.whatsapp.net','1053444KTIRMx','3112458paFWQE','26jkxNwA','15571TrujmM','find','sendMessage','sendMessageFromContent','8fdzFpT','6wSqHXz','3088675tBeuFt','conversation','includes','anonymous','5854194UFVTVA','start','Keluar','18324lWUFYn','leave','14874100vmNZbI'];_0x2179=function(){return _0x1b2b28;};return _0x2179();}const _0x1b3200=_0x2cea;(function(_0x3e8afa,_0x4b88b5){const _0x1dd908=_0x2cea,_0x5d80da=_0x3e8afa();while(!![]){try{const _0x1cbe78=parseInt(_0x1dd908(0x1f0))/0x1*(parseInt(_0x1dd908(0x1ef))/0x2)+-parseInt(_0x1dd908(0x1f5))/0x3*(parseInt(_0x1dd908(0x1e9))/0x4)+parseInt(_0x1dd908(0x1f6))/0x5+parseInt(_0x1dd908(0x1ee))/0x6+parseInt(_0x1dd908(0x1ed))/0x7*(-parseInt(_0x1dd908(0x1f4))/0x8)+parseInt(_0x1dd908(0x1fa))/0x9+-parseInt(_0x1dd908(0x1eb))/0xa;if(_0x1cbe78===_0x4b88b5)break;else _0x5d80da['push'](_0x5d80da['shift']());}catch(_0x199c1c){_0x5d80da['push'](_0x5d80da['shift']());}}}(_0x2179,0x5391f));if(!isCmd&&from['endsWith'](_0x1b3200(0x1ec))){Ryuu[_0x1b3200(0x1f9)]=Ryuu[_0x1b3200(0x1f9)]?Ryuu[_0x1b3200(0x1f9)]:{};let room=Object['values'](Ryuu['anonymous'])['find'](_0x5d3fee=>[_0x5d3fee['a'],_0x5d3fee['b']][_0x1b3200(0x1f8)](sender)&&_0x5d3fee['state']==='CHATTING');if(room){if(/^.*(next|leave|start)/['test'](body))return;if([prefix+'next',prefix+_0x1b3200(0x1ea),prefix+_0x1b3200(0x1e7),'Cari\x20Partner',_0x1b3200(0x1e8),'Next']['includes'](body))return;let other=[room['a'],room['b']][_0x1b3200(0x1f1)](_0x5d6c27=>_0x5d6c27!==sender);type===_0x1b3200(0x1f7)?Ryuu[_0x1b3200(0x1f2)](other,mek['message'][_0x1b3200(0x1f7)],text):Ryuu[_0x1b3200(0x1f3)](other,mek['message']);}}
   
    //Antilink
    if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
    if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
    sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
    {
    buttonId: `${prefix}antilink disable`,
    buttonText: {
    displayText: `Disable Antilink🌱`,
    },
    type: 1,
    }]);
    Ryuu.groupRemove(from, [sender])
    }
    }
          const checkProfile = (sender) => {
          	let found = false
                           if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`╭─ 📍 *Inventory Profile*
│✾ Nama : ${pushname}
│✾ Rank : ${role}
│✾ Status : ${elit}
│✾ Uang : $${(getBalance(sender, balance))}
│✾ Xp : ${getLevelingXp(sender)}/${reqXp}
│✾ Level : ${getLevelingLevel(sender)}
╰───
 
╭─ 🎒 *Inventory* :
│✾ Uang : $${(getBalance(sender, balance))}💰
│✾ Emas : ${getEmas(sender)}🪙
│✾ Besi : ${getBesi(sender)}⛓️
│✾ Berlian : ${getDm(sender)}💎
│✾ Ikan : ${getFish(sender)}🎣
│✾ Hewan : ${getAnimal(sender)}🐌
╰───

╭─ 📦 *Peti* :
│✾ Common : ${getCommon(sender)}
│✾ Legendary : ${getLegendary(sender)}
│✾ Mythic : ${getMythic(sender)}
╰───`)
		  but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButton(from, pp, 'Profile User', but)
                            found = true
                        }
     //ikan
    var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
    var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
    var create = ['📦','🎁']
    var petnya = ['😾','🐺','🦊','🐶','🐰']
    var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
    //PublicNya
    if (!public){
    if (!isOwner && !itsMe) return
    }
    //Waktunya
    function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
    //Time
    const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
    const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')

    //Time Menuju Lebaran
    const IdulFitri = new Date('May 1, 2022 07:00:00')
	const sekarang = new Date().getTime();
	const Selisih = IdulFitri - sekarang;
	const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
	const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
	const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
	const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
	const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
    //Level
    const levelRole = getLevelingLevel(sender)
    var role = 'Warrior III'
    if (levelRole <= 5) {
    role = 'Warrior II'
     } else if (levelRole <= 10) {
    role = 'Warrior I'
     } else if (levelRole <= 15) {
    role = 'Elite III'
     } else if (levelRole <= 20) {
    role = 'Elite II'
     } else if (levelRole <= 25) {
    role = 'Elite I'
     } else if (levelRole <= 30) {
    role = 'Master III'
     } else if (levelRole <= 35) {
    role = 'Master II'
     } else if (levelRole <= 40) {
    role = 'Master I'
     } else if (levelRole <= 45) {
    role = 'GrandMaster III'
     } else if (levelRole <= 50) {
    role = 'GrandMaster II'
     } else if (levelRole <= 55) {
    role = 'GrandMaster I'
     } else if (levelRole <= 60) {
    role = 'Epic III'
     } else if (levelRole <= 65) {
    role = 'Epic II'
     } else if (levelRole <= 70) {
    role = 'Epic I'
     } else if (levelRole <= 75) {
    role = 'Legend III'
     } else if (levelRole <= 80) {
    role = 'Legend II'
     } else if (levelRole <= 85) {
    role = 'Legend I'
     } else if (levelRole <= 90) {
    role = 'Mythic'
     } else if (levelRole <= 95) {
    role = 'Mythical Glory'
     } else if (levelRole >= 100) {
    role = 'Immortal'
     }
    //function leveling
    if (isGroup && isPetualang) {
    const currentLevel = getLevelingLevel(sender)
    const checkId = getLevelingId(sender)
    try {
    if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
    const amountXp = Math.floor(Math.random() * 10) + 100
    const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
    var getLevel = getLevelingLevel(sender)
    addLevelingXp(sender, amountXp)
    if (requiredXp <= getLevelingXp(sender)) {
    addLevelingLevel(sender, 1)   
    var lvlup = monospace(`╭─ 🌱 Level Up 🌱
│✾ Nama : ${pushname}
│✾ Rank : ${role}
│✾ Status : ${elit}
│✾ Xp : ${getLevelingXp(sender)}
│✾ Level : ${getLevelingLevel(sender)}
╰───`)
    but = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
    sendButton(from, lvlup, 'Level Up', but)
    
    }
    } catch (err) {
    console.error(err)
    }
    }

    // Jangan Di Hapus Ntar All Menu Error
    var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
    reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
    menu =`*${tampilUcapan} @${sender.split('@')[0]}*

╭─ 💻 *Info Bot* 
│✾ _*Owner Name*_ : ${ownername}
│✾ _*Bot Name*_ : ${botname}
│✾ _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
│✾ _*Runtime*_ : ${runtime(process.uptime())}
│✾ _*Status*_ : ${public? `Public Mode`:`Self Mode`}
╰───

╭─ 👤 *Info User* 
│✾ _*Name User*_ : ${pushname}
│✾ _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
│✾ _*Nomor*_ : @${sender.split('@')[0]}
│✾ _*Rank*_ : ${role}
│✾ _*Uang*_ : $${(getBalance(sender, balance))}
│✾ _*Xp*_ : ${getLevelingXp(sender)}/${reqXp}
│✾ _*Level*_ : ${getLevelingLevel(sender)}
│✾ _*Limit*_ : ${getLimit(sender, limitCount, limit)}/${limitCount}
╰───`

    teks =`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`

    // COLOR
    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
    const { quotedMsg, isQuotedMsg, isBaileys } = mek
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    const isVideo = (type === 'videoMessage')
    const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
    const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
    const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
    const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

    //COMMAND
    if (isCmd && !isGroup)
    console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
    if (isCmd && isGroup)
    console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
  switch(nopref) {
  case 'anjing': case 'ajg':
  case 'anjg': case 'bgst': 
  case 'bangsat': case 'kntl': 
  case 'kontol': case 'tai': 
  case 'asw': case 'asu':
  reply(`Jaga Omongan Kak!! 😡`) 
  break
  case 'assalamualaikum':
  reply(`Waalaikumsalam`) 
  break
  case 'makasih': case 'thx': 
  case 'tq': case 'mksh': 
  case 'terimakasih':
  reply(`Sama Sama Kak ${pushname} ☺`) 
  break
  }
  const _0x416efc=_0x9e09;function _0x9e09(_0x5ae017,_0x1a3fc4){const _0x4dd564=_0x4dd5();return _0x9e09=function(_0x9e09ad,_0x36b7f6){_0x9e09ad=_0x9e09ad-0x178;let _0xdf04b=_0x4dd564[_0x9e09ad];return _0xdf04b;},_0x9e09(_0x5ae017,_0x1a3fc4);}(function(_0x3ace7e,_0x5ac97e){const _0x2ae6fe=_0x9e09,_0x2fed23=_0x3ace7e();while(!![]){try{const _0x29cbe=parseInt(_0x2ae6fe(0x1b9))/0x1+-parseInt(_0x2ae6fe(0x17f))/0x2*(parseInt(_0x2ae6fe(0x1a2))/0x3)+parseInt(_0x2ae6fe(0x1bf))/0x4*(-parseInt(_0x2ae6fe(0x17a))/0x5)+parseInt(_0x2ae6fe(0x1ad))/0x6+-parseInt(_0x2ae6fe(0x1a9))/0x7*(parseInt(_0x2ae6fe(0x191))/0x8)+-parseInt(_0x2ae6fe(0x1ac))/0x9+-parseInt(_0x2ae6fe(0x185))/0xa*(-parseInt(_0x2ae6fe(0x1b0))/0xb);if(_0x29cbe===_0x5ac97e)break;else _0x2fed23['push'](_0x2fed23['shift']());}catch(_0x5dd7d4){_0x2fed23['push'](_0x2fed23['shift']());}}}(_0x4dd5,0x4816c));const _0x590c09=_0x1485;function _0x15f8(){const _0x16646f=_0x9e09,_0x50d8a5=[_0x16646f(0x18a),_0x16646f(0x1bd),_0x16646f(0x18c),_0x16646f(0x188),_0x16646f(0x180),_0x16646f(0x19d),_0x16646f(0x1b5),_0x16646f(0x1c6),_0x16646f(0x19b),_0x16646f(0x17d),_0x16646f(0x195),_0x16646f(0x1bb),_0x16646f(0x1a4),'_Kamu\x20masih\x20berada\x20di\x20dalam\x20anonymous\x20chat,\x20menunggu\x20partner_',_0x16646f(0x1ba),_0x16646f(0x192),_0x16646f(0x1be),_0x16646f(0x17c),'3507080BjPWOn',_0x16646f(0x186),_0x16646f(0x1c0),_0x16646f(0x179),'Fitur\x20Tidak\x20Dapat\x20Digunakan\x20Untuk\x20Group!','BEGIN:VCARD\x0a','mythic',_0x16646f(0x1b8),_0x16646f(0x1a6),_0x16646f(0x183),_0x16646f(0x198),_0x16646f(0x189),_0x16646f(0x1b3),_0x16646f(0x17b),_0x16646f(0x1a3),_0x16646f(0x1af),_0x16646f(0x1c3),_0x16646f(0x1b6),'values',_0x16646f(0x1a0),_0x16646f(0x1a7),_0x16646f(0x18f),_0x16646f(0x1ae),'END:VCARD','anonymous\x20!\x20🕵','length','creator',_0x16646f(0x1b4),_0x16646f(0x1c4),_0x16646f(0x1c2),_0x16646f(0x187),_0x16646f(0x1c5),_0x16646f(0x190),_0x16646f(0x182),_0x16646f(0x1a8),_0x16646f(0x193),_0x16646f(0x197),_0x16646f(0x1a5),_0x16646f(0x196),'3883014MirMIq',_0x16646f(0x178),_0x16646f(0x1ab),'other',_0x16646f(0x1bc),_0x16646f(0x1b7),_0x16646f(0x19a),'find','profile',_0x16646f(0x18b),_0x16646f(0x19f),_0x16646f(0x1b1),_0x16646f(0x19e),_0x16646f(0x199),_0x16646f(0x1c1),_0x16646f(0x1b2),_0x16646f(0x18e),_0x16646f(0x194),_0x16646f(0x1a1)];return _0x15f8=function(){return _0x50d8a5;},_0x15f8();}function _0x1485(_0x24036d,_0x55a4d1){const _0x5333a4=_0x15f8();return _0x1485=function(_0x330f0b,_0x1305f9){_0x330f0b=_0x330f0b-0xf5;let _0x330149=_0x5333a4[_0x330f0b];return _0x330149;},_0x1485(_0x24036d,_0x55a4d1);}(function(_0x374529,_0x4af5f3){const _0x2ceb27=_0x9e09,_0x2ec021=_0x1485,_0x3fa146=_0x374529();while(!![]){try{const _0x252995=-parseInt(_0x2ec021(0x12b))/0x1*(parseInt(_0x2ec021(0x100))/0x2)+parseInt(_0x2ec021(0x13e))/0x3*(-parseInt(_0x2ec021(0x104))/0x4)+-parseInt(_0x2ec021(0x112))/0x5+-parseInt(_0x2ec021(0x13b))/0x6*(-parseInt(_0x2ec021(0x132))/0x7)+parseInt(_0x2ec021(0x134))/0x8*(-parseInt(_0x2ec021(0x129))/0x9)+-parseInt(_0x2ec021(0x102))/0xa+parseInt(_0x2ec021(0xfe))/0xb;if(_0x252995===_0x4af5f3)break;else _0x3fa146[_0x2ceb27(0x190)](_0x3fa146['shift']());}catch(_0x49820e){_0x3fa146[_0x2ceb27(0x190)](_0x3fa146[_0x2ceb27(0x17e)]());}}}(_0x15f8,0x53ba2));function _0x4dd5(){const _0x294368=['TEL;type=CELL;type=VOICE;waid=6283891921787:6283891921787\x0a','script','_You\x20stopped\x20matchmaking_','126239RQHawR','17190316McAqUj','Common\x20Kamu\x20Tidak\x20Cukup','🎁\x20*Open\x20Legendary*\x20🎁\x0aDiamond\x20:\x20','leave','204490kfOtFF','2323748cucxsc','12104AThKMb','\x20💸','\x20🔗\x0aBalance\x20:\x20$','1448850FkdiKu','WAITING','state','player','sendButton','\x20💎\x0aEmas\x20:\x20','5OKHlUA','Open\x20Mythic\x20','Open\x20Legendary\x20','*ANONYMOUS\x20BOT\x20BETA*\x0a\x0athis\x20is\x20an\x20anonymous\x20chat\x20feature,\x20a\x20random\x20chat\x20feature\x20among\x20bot\x20users,\x20this\x20feature\x20cannot\x20be\x20used\x20in\x20groups\x20(only\x20personal\x20chat)\x20to\x20use\x20the\x20anonymous\x20feature\x20type\x20!anonymous\x20in\x20the\x20personal\x20chat\x20bot\x20,\x20later\x20the\x20bot\x20will\x20find\x20friends\x20for\x20you\x20like\x20a\x20telegram\x20bot,\x0a-!start\x20to\x20start\x20\x0a-!stop\x20to\x20stop\x20looking\x20for\x20friends\x20\x0a-!next\x20to\x20find\x20other\x20friends(skip)\x0a\x0a*Warning*\x20\x0a\x0a-polite\x0a\x0a-no\x20calls/vc\x20bots\x20\x0a\x0a-no\x20spam\x20bots/pause\x205\x20seconds\x20\x0a\x0a-not\x20allowed\x20to\x20enter\x20bots\x20in\x20any\x20group\x20(owner\x27s\x20permission)\x20\x0a\x0a-Do\x20not\x20use\x20adult\x20features\x20for\x20children\x20under\x2018\x20years\x20old\x20-use\x20bots\x20wisely\x20\x0a\x0a*be\x20a\x20good\x20user\x20and\x20obey\x20the\x20rules*','shift','18272BlaDPs','VERSION:3.0\x0a','profile','Cek\x20Inventori','Cari\x20Partner','*SPECIAL\x20THANKS\x20TO\x20:*\x0a\x0a*😇\x20Allah\x20Swt*\x0a*😇\x20Nabi\x20Muhammad\x20SAW*\x0a\x0a*BIG\x20THANKS\x20TO\x20:*\x0a\x0a*🌱\x20Adiwajshing\x20Baileys\x20:*\x0ahttps://github.com/Adiwajshing\x0a*🌱\x20Zeeone\x20Ofc\x20(Contributors)\x20:*\x0ahttps://youtube.com/c/ZEEONEOFC\x0a*🌱\x20Ryuuka\x20Botz\x20(Author)\x20:*\x0ahttps://youtube.com/c/RyuukaBotz\x0a🌱\x20*FBOTZ\x20YT\x20(Team)\x20:*\x0ahttps://youtube.com/channel/UCnuzOOUf9dgDaM2m0xtYWtg\x0a*🌱\x20FEBZABOTZ*\x20:\x0ahttps://youtube.com/c/FEBZABOTZ\x0a*🌱\x20Siegrin*\x20:\x0ahttps://youtube.com/c/Siegrin\x0a🌱\x20Dipakai\x20:\x20*','20UuxOds','\x20🏆\x0aBesi\x20:\x20','🎁\x20*Open\x20Common*\x20🎁\x0aEmas\x20:\x20','🎁\x20*Open\x20Mythic*\x20🎁\x0aDiamond\x20:\x20','sendMessage','legendary','7glDDwH','444BOeUlo','common','Script\x20Made\x20By\x20Ryuuka\x20Botz\x0ahttps://youtube.com/c/RyuukaBotz','Legendary\x20Kamu\x20Tidak\x20Cukup','push','134696pkEzJc','trim','check','Keluar','slice','jid','Anonymous\x20Chat\x20👥','mulai','Kamu\x20Sudah\x20Di\x20banned!','Stop','tqto','_Partner\x20Ditemukan!_\x20🌱\x0a\x0aJangan\x20Lupa\x20Baca\x20Rules\x20Anonymous\x20Chat\x20Di\x20','Mythic\x20Kamu\x20Tidak\x20Cukup','only','next','anonymous','3026712fTDsuw','66leFFnS','start','CHATTING','includes','stop','ORG:\x20RYUUKABOTZ\x20;\x0a','_Partner\x20meninggalkan\x20chat_','217OdFydJ','Ownernya\x20','2nPHKBH','695187AVUXZN','1629780OPxrYy','Open\x20Common\x20','\x20jumlah\x20yang\x20ingin\x20dijual','7031893Nwphtg','8kWWCBE','Kirim\x20perintah\x20','_Menunggu\x20partner..._','_Kamu\x20tidak\x20sedang\x20berada\x20di\x20anonymous\x20chat_','FN:\x20Ryuukaaa\x0a'];_0x4dd5=function(){return _0x294368;};return _0x4dd5();}switch(command){case _0x416efc(0x18d):if(!isPetualang)return reply(mess[_0x590c09(0x135)][_0x590c09(0xf7)]);if(args[_0x590c09(0x11b)]<0x0)return reply('Kirim\x20perintah\x20'+(prefix+command)+_0x590c09(0x111));jmlh=body[_0x416efc(0x195)](0x8),b=0xa*jmlh,m=0x3*jmlh,rp=0x5*jmlh;if(getCommon(sender)<jmlh)return reply(_0x590c09(0xfb));bukaCommon(sender,jmlh),addBesi(sender,b),addEmas(sender,m),addBalance(sender,rp,balance),capti=monospace(_0x590c09(0x120)+m+_0x590c09(0x103)+b+_0x590c09(0x11f)+rp+_0x590c09(0x137)),but=[{'buttonId':prefix+_0x590c09(0x131),'buttonText':{'displayText':_0x590c09(0x123)},'type':0x1}],sendButton(from,capti,_0x590c09(0x118)+tampilTanggal,but);break;case _0x590c09(0x13c):if(!isPetualang)return reply(mess[_0x590c09(0x135)][_0x590c09(0xf7)]);if(args[_0x590c09(0x11b)]<0x0)return reply(_0x590c09(0x138)+(prefix+command)+_0x590c09(0x111));jmlh=body[_0x590c09(0xfa)](0xb),b=0x14*jmlh,m=0x7*jmlh,rp=0xa*jmlh,dm=0x1*jmlh;if(getLegendary(sender)<jmlh)return reply(_0x590c09(0x117));bukaLegendary(sender,jmlh),addBesi(sender,b),addEmas(sender,m),addDm(sender,dm),addBalance(sender,rp,balance),capti=monospace(_0x590c09(0x12d)+dm+_0x590c09(0x105)+m+'\x20🏆\x0aBesi\x20:\x20'+b+_0x590c09(0x11f)+rp+_0x590c09(0x137)),but=[{'buttonId':prefix+_0x590c09(0x131),'buttonText':{'displayText':_0x590c09(0x123)},'type':0x1}],sendButton(from,capti,_0x590c09(0x101)+tampilTanggal,but);break;case _0x590c09(0x108):if(!isPetualang)return reply(mess[_0x590c09(0x135)][_0x416efc(0x1c6)]);if(args[_0x590c09(0x11b)]<0x0)return reply(_0x590c09(0x138)+(prefix+command)+_0x590c09(0x111));jmlh=body[_0x416efc(0x195)](0x8),b=0x23*jmlh,m=0xf*jmlh,rp=0x1e*jmlh,dm=0x5*jmlh;if(getMythic(sender)<jmlh)return reply(_0x590c09(0xf5));bukaMythic(sender,jmlh),addBesi(sender,b),addEmas(sender,m),addDm(sender,dm),addBalance(sender,rp,balance),capti=monospace(_0x590c09(0x13f)+dm+_0x590c09(0x105)+m+_0x590c09(0x103)+b+_0x590c09(0x11f)+rp+_0x590c09(0x137)),but=[{'buttonId':prefix+_0x416efc(0x181),'buttonText':{'displayText':_0x416efc(0x182)},'type':0x1}],sendButton(from,capti,_0x590c09(0x10f)+tampilTanggal,but);break;case _0x590c09(0x11c):if(isBanned)return reply(_0x416efc(0x199));members_ids=[];for(let mem of groupMembers){members_ids[_0x590c09(0x122)](mem[_0x590c09(0x128)]);}vcard2=_0x590c09(0x107)+_0x590c09(0x140)+_0x590c09(0xf6)+_0x590c09(0x116)+_0x590c09(0x113)+_0x590c09(0x119)[_0x590c09(0xff)](),Ryuu[_0x590c09(0x10d)](from,{'displayName':_0x416efc(0x1aa)+botname,'vcard':vcard2},contact,{'quoted':ftrol});break;case _0x590c09(0xf8):if(isBanned)return reply(_0x590c09(0x136));reply(_0x416efc(0x184)+ownername+'*');break;case _0x590c09(0x12e):case'sc':reply(_0x590c09(0x139));break;case _0x590c09(0x133):case _0x416efc(0x1bd):case _0x590c09(0x10a):{if(isGroup)return reply(_0x590c09(0x106));Ryuu[_0x416efc(0x1a0)]=Ryuu[_0x590c09(0x115)]?Ryuu[_0x590c09(0x115)]:{};let room=Object[_0x590c09(0x114)](Ryuu[_0x416efc(0x1a0)])[_0x590c09(0x130)](_0x5dbc09=>_0x5dbc09[_0x590c09(0x125)](sender));if(!room)return await Ryuu[_0x590c09(0x12a)](from,_0x590c09(0x11d),_0x590c09(0x126),_0x590c09(0x10b),prefix+'start'),![];reply(_0x590c09(0x109));let other=room[_0x590c09(0x12c)](sender);if(other)await Ryuu[_0x590c09(0x12a)](other,_0x590c09(0x124),_0x590c09(0x126),_0x590c09(0x10b),prefix+_0x590c09(0x110));delete Ryuu[_0x590c09(0x115)][room['id']];if(command===_0x590c09(0x13d)||command===_0x590c09(0x10a))break;}case _0x590c09(0x10c):case _0x590c09(0x110):{if(isGroup)return reply(_0x590c09(0x106));Ryuu[_0x590c09(0x115)]=Ryuu['anonymous']?Ryuu[_0x416efc(0x1a0)]:{};if(Object[_0x590c09(0x114)](Ryuu[_0x590c09(0x115)])[_0x590c09(0x130)](_0x1c5133=>_0x1c5133[_0x416efc(0x193)](sender)))return await Ryuu[_0x416efc(0x178)](from,_0x590c09(0xfd),_0x416efc(0x197),_0x590c09(0x13a),prefix+_0x590c09(0x13d)),![];let room=Object[_0x590c09(0x114)](Ryuu[_0x590c09(0x115)])[_0x590c09(0x130)](_0x384d77=>_0x384d77[_0x590c09(0x121)]===_0x416efc(0x1c4)&&!_0x384d77[_0x590c09(0x125)](sender));if(room)await Ryuu[_0x590c09(0x12a)](room['a'],_0x416efc(0x19c)+prefix+_0x590c09(0x11a),_0x590c09(0x126),_0x416efc(0x19a),prefix+_0x590c09(0x10a)),room['b']=sender,room[_0x590c09(0x121)]=_0x590c09(0xfc),await Ryuu[_0x416efc(0x178)](room['b'],_0x416efc(0x19c)+prefix+_0x590c09(0x11a),_0x590c09(0x126),_0x590c09(0x12f),prefix+_0x590c09(0x10a));else{let id=+new Date();Ryuu[_0x416efc(0x1a0)][id]={'id':id,'a':sender,'b':'','state':_0x590c09(0x11e),'check':function(_0x1518d8=''){const _0x273e01=_0x590c09;return[this['a'],this['b']][_0x273e01(0x127)](_0x1518d8);},'other':function(_0xd9e7cb=''){return _0xd9e7cb===this['a']?this['b']:_0xd9e7cb===this['b']?this['a']:'';}},await Ryuu[_0x590c09(0x12a)](from,_0x590c09(0x10e),'Anonymous\x20Chat\x20👥',_0x590c09(0x13a),prefix+_0x590c09(0x13d));}break;}case _0x590c09(0x115):teks=_0x590c09(0xf9),reply(teks);break;}
  switch (command) {            
  case 'listmenu':
    if(menusimpel == false){      
    menu = `Haii @${sender.split('@')[0]}

╭─ 💻 *Info Bot* 
│✾ _*Owner Name*_ : ${ownername}
│✾ _*Bot Name*_ : ${botname}
│✾ _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
│✾ _*Runtime*_ : ${runtime(process.uptime())}
│✾ _*Status*_ : ${public? `Public Mode`:`Self Mode`}
╰───

╭─ 🔎 *List Menu*
│✾ ${prefix}allmenu
│✾ ${prefix}othermenu
│✾ ${prefix}groupmenu
│✾ ${prefix}ownermenu
│✾ ${prefix}searchmenu
│✾ ${prefix}voicechanger
│✾ ${prefix}storagemenu
│✾ ${prefix}islamimenu
│✾ ${prefix}newsmenu
│✾ ${prefix}animangamenu
│✾ ${prefix}photooxymenu
│✾ ${prefix}upswmenu
│✾ ${prefix}anomenu
│✾ ${prefix}storemenu
│✾ ${prefix}randomtextmenu
│✾ ${prefix}randomimgmenu
│✾ ${prefix}gamemenu
│✾ ${prefix}rpgmenu
│✾ ${prefix}misimenu
│✾ ${prefix}sellmenu
│✾ ${prefix}funmenu
│✾ ${prefix}makermenu
│✾ ${prefix}textpromemenu
│✾ ${prefix}informasimenu
│✾ ${prefix}cecanmenu
│✾ ${prefix}asupanmenu
│✾ ${prefix}nulismenu
│✾ ${prefix}downloadmenu
│✾ ${prefix}convertmenu
│✾ ${prefix}animemenu
╰───`
    teks =
    `${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
    Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💸' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
    }
    else if(menusimpel = true){
    listMsg = {
    buttonText: 'Click Here!!!',
    footerText: fake,
    description: `_*Hai Kak @${sender.split('@')[0]} ${tampilUcapan}*_\n\n_*Pencet Button Di bawah Ini Untuk Memilih Menu*_`, 
    sections: [
    {
    "title": `List Menu & Informasi Bot🌱`,
    rows: [
    {
    "title": "[🕊️] All Menu",
    "rowId": `${prefix}allmenu`,
    "description": `Menampilkan Seluruh Menu`
    }, 
    {
    "title": "[📱️] Other Menu",
    "rowId": `${prefix}othermenu`,
    "description": `Menampilkan Seluruh Other Menu`
    },
    {
    "title": "[🌱] Group Menu",
    "rowId": `${prefix}groupmenu`, 
    "description": `Menampilkan Seluruh Group Menu`
    },
    {
    "title": "[👤] Owner Menu",
    "rowId": `${prefix}ownermenu`, 
    "description": `Menampilkan Seluruh Owner Menu`
    },
    {
    "title": "[👥] Anonymous Menu",
    "rowId": `${prefix}anomenu`, 
    "description": `Menampilkan Seluruh Anonymous Menu`
    },   
    {
    "title": "[🔎] Search Menu",
    "rowId": `${prefix}searchmenu`, 
    "description": `Menampilkan Seluruh Search Menu`
    },
    {
    "title": "[🎙] Voice Changer",
    "rowId": `${prefix}voicechanger`, 
    "description": `Menampilkan Seluruh Voice Changer`
    },
    {
    "title": "[🖥] Storage Menu",
    "rowId": `${prefix}storagemenu`, 
    "description": `Menampilkan Seluruh Storage Menu`
    },
    {
    "title": "[🕌] Islami Menu",
    "rowId": `${prefix}islamimenu`, 
    "description": `Menampilkan Seluruh Islami Menu`
    },
    {
    "title": "[📑] News Menu",
    "rowId": `${prefix}newsmenu`, 
    "description": `Menampilkan Seluruh News Menu`
    },   
    {
    "title": "[📚] AniManga Menu",
    "rowId": `${prefix}animangamenu`, 
    "description": `Menampilkan Seluruh AniManga Menu`
    },   
    {
    "title": "[💈] Photooxy Menu",
    "rowId": `${prefix}photooxymenu`, 
    "description": `Menampilkan Seluruh Photooxy Menu`
    },
    {
    "title": "[🎥] Up Status Menu",
    "rowId": `${prefix}upswmenu`, 
    "description": `Menampilkan Seluruh Status Menu`
    },
    {
    "title": "[💸] Store Menu",
    "rowId": `${prefix}storemenu`, 
    "description": `Menampilkan Seluruh Store Menu`
    },
    {
    "title": "[🏝] Random Text Menu",
    "rowId": `${prefix}randomtextmenu`, 
    "description": `Menampilkan Seluruh Random Text Menu`
    },
    {
    "title": "[🖼]‍‍ Random img Menu",
    "rowId": `${prefix}randomimgmenu`, 
    "description": `Menampilkan Seluruh Random Img Menu`
    },
    {
    "title": "[🎮] Game Menu",
    "rowId": `${prefix}gamemenu`, 
    "description": `Menampilkan Seluruh Game Menu`
    },
    {
    "title": "‍[🏔] Rpg Menu",
    "rowId": `${prefix}rpgmenu`, 
    "description": `Menampilkan Seluruh Rpg Menu`
    },
    {
    "title": "‍[⚔️] Misi Menu",
    "rowId": `${prefix}misimenu`, 
    "description": `Menampilkan Seluruh Misi Menu`
    },
    {
    "title": "‍[👨‍🌾] Sell Menu",
    "rowId": `${prefix}sellmenu`, 
    "description": `Menampilkan Seluruh Sell Menu`
    },
    {
    "title": "‍[🚲] Fun Menu",
    "rowId": `${prefix}funmenu`, 
    "description": `Menampilkan Seluruh Fun Menu`
    },
    {
    "title": "‍[☕] Maker Menu",
    "rowId": `${prefix}makermenu`, 
    "description": `Menampilkan Seluruh Maker Menu`
    },
    {
    "title": "‍[🖋] Textprome Menu",
    "rowId": `${prefix}textpromemenu`, 
    "description": `Menampilkan Seluruh Textprome Menu`
    },
    {
    "title": "‍[️️🗓] Informasi Menu",
    "rowId": `${prefix}informasimenu`, 
    "description": `Menampilkan Seluruh Informasi Menu`
    },
    {
    "title": "‍[👩‍🦰️] Cecan Menu",
    "rowId": `${prefix}cecanmenu`, 
    "description": `Menampilkan Seluruh Cecan Menu`
    },
    {
    "title": "‍[️💅] Asupan Menu",
    "rowId": `${prefix}asupanmenu`, 
    "description": `Menampilkan Seluruh Asupan Menu`
    },
    {
    "title": "‍[📝️] Nulis Menu",
    "rowId": `${prefix}nulismenu`, 
    "description": `Menampilkan Seluruh Nulis Menu`
    },
    {
    "title": "‍[🗃️] Download Menu",
    "rowId": `${prefix}downloadmenu`, 
    "description": `Menampilkan Seluruh Download Menu`
    },
    {
    "title": "‍[💾️] Convert Menu",
    "rowId": `${prefix}convertmenu`, 
    "description": `Menampilkan Seluruh Convert Menu`
    },
    {
    "title": "‍[⛩️‍] Anime Menu",
    "rowId": `${prefix}animemenu`, 
    "description": `Menampilkan Seluruh Anime Menu`
    }, 
    {
    "title": "[🧸] Creator",
    "rowId": `${prefix}creator`, 
    "description": `Pembuat Bot ${botname}`
    },
    {
    "title": "[💻] Source Code",
    "rowId": `${prefix}sc`, 
    "description": `Menampilkan Script Bot ${botname}`
    },
    {
    "title": "[🏆] Big Thanks To",
    "rowId": `${prefix}tqto`, 
    "description": `Menampilkan Thanks To`
    },
    {
    "title": "[📚] Rules",
    "rowId": `${prefix}rules`, 
    "description": `Menampilkan Rules Pengguna Bot ${botname}`
    }
    ]
    }],
    listType: 1
    }
    Ryuu.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
    }
  break
  case 'menu':
    var _0x215a18=_0x304c;(function(_0x35fc2e,_0x3191fd){var _0x4c0af9=_0x304c,_0x4af68a=_0x35fc2e();while(!![]){try{var _0x2d1661=-parseInt(_0x4c0af9(0x158))/0x1+parseInt(_0x4c0af9(0x173))/0x2*(parseInt(_0x4c0af9(0x175))/0x3)+parseInt(_0x4c0af9(0x16c))/0x4+parseInt(_0x4c0af9(0x14c))/0x5+parseInt(_0x4c0af9(0x14e))/0x6+parseInt(_0x4c0af9(0x164))/0x7+-parseInt(_0x4c0af9(0x168))/0x8;if(_0x2d1661===_0x3191fd)break;else _0x4af68a['push'](_0x4af68a['shift']());}catch(_0x3cfd71){_0x4af68a['push'](_0x4af68a['shift']());}}}(_0x7514,0xbc39d));function _0x304c(_0x57527e,_0x16da05){var _0x304c7f=_0x7514();return _0x304c=function(_0x8b3777,_0x11ee27){_0x8b3777=_0x8b3777-0x14b;var _0x57f94a=_0x304c7f[_0x8b3777];return _0x57f94a;},_0x304c(_0x57527e,_0x16da05);}if(isBanned)return reply(_0x215a18(0x156));reqXp=0x1388*(Math[_0x215a18(0x159)](0x2,getLevelingLevel(sender))-0x1);var p=await Ryuu[_0x215a18(0x157)](''+sender,MessageType[_0x215a18(0x15b)]);ptod=_0x215a18(0x169),stod=''+sender,dtod=_0x215a18(0x160),uwu=_0x215a18(0x16f),stst=await Ryuu['getStatus'](sender[_0x215a18(0x151)]('@')[0x0]+_0x215a18(0x14d)),stst=stst['status']==0x191?'':stst[_0x215a18(0x16e)],tescok=_0x215a18(0x15c)+sender['split']('@')[0x0]+'\x0a\x0a╭─\x20💻\x20*Info\x20Bot*\x20\x0a\x0a│✾\x20_*Owner\x20Name*_\x20:\x20'+ownername+_0x215a18(0x161)+botname+'\x0a\x0a│✾\x20_*Speed*_\x20:\x20'+processsTime(mek['messageTimestamp'][_0x215a18(0x14f)],moment())+'s\x0a\x0a│✾\x20_*Runtime*_\x20:\x20'+runtime(process[_0x215a18(0x150)]())+_0x215a18(0x170)+(public?_0x215a18(0x15e):_0x215a18(0x16b))+_0x215a18(0x174)+pushname+_0x215a18(0x171)+(p[_0x215a18(0x16e)]==undefined?_0x215a18(0x172):p[_0x215a18(0x16e)])+_0x215a18(0x155)+sender[_0x215a18(0x151)]('@')[0x0]+_0x215a18(0x167)+role+'\x0a\x0a│✾\x20_*Uang*_\x20:\x20$'+getBalance(sender,balance)+'\x0a\x0a│✾\x20_*Xp*_\x20:\x20'+getLevelingXp(sender)+'/'+reqXp+_0x215a18(0x14b)+getLevelingLevel(sender)+_0x215a18(0x166)+getLimit(sender,limitCount,limit)+'/'+limitCount+_0x215a18(0x163),Sendbutdocument(from,tescok,'Runtime\x20:\x20'+runtime(process[_0x215a18(0x150)]()),fs[_0x215a18(0x15d)](_0x215a18(0x154)),{'mimetype':Mimetype['pdf'],'thumbnail':fs[_0x215a18(0x15d)]('./media/Ryuu.jpg'),'filename':_0x215a18(0x162),'pageCount':0x3e7},[{'buttonId':prefix+_0x215a18(0x16a),'buttonText':{'displayText':_0x215a18(0x16d)},'type':0x1},{'buttonId':prefix+'allmenu','buttonText':{'displayText':_0x215a18(0x15f)},'type':0x1},{'buttonId':prefix+_0x215a18(0x165),'buttonText':{'displayText':_0x215a18(0x15a)},'type':0x1}],{'quoted':fvid,'contextInfo':{'mentionedJid':[ptod,dtod,stod],'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':tampilUcapan+'\x20'+pushname+_0x215a18(0x153),'mediaType':'2','thumbnail':fakeimage,'mediaUrl':_0x215a18(0x152)}}});function _0x7514(){var _0x589d41=['3OPqxsl','\x0a\x0a│✾\x20_*Level*_\x20:\x20','5320180zijvjP','@c.us','6711006jeOhkZ','low','uptime','split','https://youtu.be/Q6utY1yaXAY','\x0aScript\x20Create\x20By\x20RyuukaBotz','./media/Ryuu.pdf','\x0a\x0a│✾\x20_*Nomor*_\x20:\x20@','Kamu\x20Sudah\x20Di\x20banned!','getStatus','1352218uVkxmR','pow','SCRIPT\x20🎥','text','Haii\x20@','readFileSync','Public\x20Mode','ALL\x20MENU\x20⛩️','ngetes','\x0a\x0a│✾\x20_*Bot\x20Name*_\x20:\x20','Ryuu.pdf','\x0a\x0a╰───','1905869PGazZj','script','\x0a\x0a│✾\x20_*Limit*_\x20:\x20','\x0a\x0a│✾\x20_*Rank*_\x20:\x20','24168456XFpsAP','6283891921787@s.whatsapp.net','listmenu','Self\x20Mode','5340132pVdFIy','LIST\x20MENU\x20🌱','status','```','\x0a\x0a│✾\x20_*Status*_\x20:\x20','\x0a\x0a│✾\x20_*Bio\x20User*_\x20:\x20','Not\x20Found','2708822mocToX','\x0a\x0a╰───\x0a\x0a╭─\x20👤\x20*Info\x20User*\x20\x0a\x0a│✾\x20_*Name\x20User*_\x20:\x20'];_0x7514=function(){return _0x589d41;};return _0x7514();}
  break
  case 'allmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
    var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
    menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

╭─ 💻 *Info Bot* 
│✾ _*Owner Name*_ : ${ownername}
│✾ _*Bot Name*_ : ${botname}
│✾ _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
│✾ _*Runtime*_ : ${runtime(process.uptime())}
│✾ _*Status*_ : ${public? `Public Mode`:`Self Mode`}
╰───

╭─ 👤 *Info User* 
│✾ _*Name User*_ : ${pushname}
│✾ _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
│✾ _*Nomor*_ : @${sender.split('@')[0]}
│✾ _*Rank*_ : ${role}
│✾ _*Uang*_ : $${(getBalance(sender, balance))}
│✾ _*Xp*_ : ${getLevelingXp(sender)}/${reqXp}
│✾ _*Level*_ : ${getLevelingLevel(sender)}
│✾ _*Limit*_ : ${getLimit(sender, limitCount, limit)}/${limitCount}
╰───

╭─ 🕖 *Time*
│✾ _*Wib*_ : ${timeWib}
│✾ _*Wita*_ : ${timeWita}
│✾ _*Wit*_ : ${timeWit}
╰───

╭─ ⛅ *To Day* 
│✾ _*Hari*_ : ${hari}
│✾ _*Bulan*_ : ${bulan}
│✾ _*Tahun*_ : ${tahun}
╰───

╭─ 🕌 *Menuju Idul Fitri*
│✾ ${menuju}
╰───`
    teks =
    `${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+allmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'othermenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+othermenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'groupmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+groupmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'ownermenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+ownermenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'searchmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+searchmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'voicechanger': case 'voicemenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+voicemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'randomtextmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+randomtextmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'randomimgmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+randomimgmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'upswmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+upswmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'anomenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+anomenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'animangamenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+animangamenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'islamimenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+islamimenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'newsmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+newsmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'photooxymenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+photooxymenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'ephotomenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+ephotomenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'storagemenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+storagemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'gamemenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+gamemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'rpgmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+rpgmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'funmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+funmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'makermenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+makermenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'textpromemenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+textpromemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'informasimenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+informasimenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'cecanmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+cecanmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'asupanmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+asupanmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'nulismenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+nulismenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'downloadmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+downloadmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'convertmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+convertmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'animemenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+animemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'storemenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+storemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'soundmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+soundmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'sellmenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+sellmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'misimenu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    Ryuu.sendMessage(from, { contentText: `${menu}`+'\n\n'+misimenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
    //Fitur Maker
  case 'wanted':
  case 'wasted':
  case 'jail':
  case 'rip':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) { 
    boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ftrol
    owgi = await Ryuu.downloadMediaMessage(boij)
    res = await uploadImages(owgi)
    reply(mess.wait)
    buff = await getBuffer(`https://api.zekais.com/${command}?url=${res}&apikey=WtmS9r3o`)
    Ryuu.sendMessage(from, buff, image, {quoted: ftrol, caption: `Succes By : ${ownername}`})
    } else {
    reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix + command}`)
    }
  break

    //Fitur Owner
  case 'ban':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
    ny = `${args[0].replace('@', '')}@s.whatsapp.net`
    ban.push(ny)
    fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
    reply(`Nomor ${ny} telah dibanned!`)
    } else {
    ny = `${mentionUser}`
    ban.push(ny)
    fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
    reply(`Nomor ${ny} telah dibanned!`)
    }
  break
  case 'unban':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
    ah = `${args[0].replace("@","")}@s.whatsapp.net`
    unb = ban.indexOf(ah)
    ban.splice(unb, 1)
    fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
    reply(`Nomor ${ah} telah di unban!`)
    } else {
    ah = `${mentionUser}`
    unb = ban.indexOf(ah)
    ban.splice(unb, 1)
    fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
    reply(`Nomor ${ah} telah di unban!`)
    }
  break
  case 'addprem':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (isBanned) return reply('Kamu Sudah Di banned!') 
    if (isBanned) return reply('Kamu Sudah Di banned!') 
    addp = body.slice(10)
    premium.push(`${addp}@s.whatsapp.net`)
    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
    reply(`Berhasil Menambahkan ${addp} Ke Daftar Premium`)
  break
  case 'delprem':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    oh = body.slice(11)
    delp = premium.indexOf(oh)
    premium.splice(delp, 1)
    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
    reply(`Berhasil Menghapus ${oh} Dari Daftar Premium`)
  break
  case 'owner':
    members_ids = []
    for (let mem of groupMembers) {
    members_ids.push(mem.jid)
    }
    vcard2 = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n'
    + `FN:${ownername}\n`
    + `ORG: Creator ${ownername} ;\n`
    + `TEL;type=CELL;type=VOICE;waid=${ownernumber}:${ownernumber}\n`
    + 'END:VCARD'.trim()
    Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
    { quoted: ftrol, 
    })
    reply(`Itu Kak Nomor Owner Ku Jangan Jahil Yaa`)
  break
  case 'mode':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    buttonss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC 🌱'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF 🍂'}, type: 1}]
    const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
    }
    await Ryuu.sendMessage(from, buMess, MessageType.  buttonsMessage, {quoted: mek})
  break
  case 'self':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if(!public)return reply('*_Fitur Itu Sudah Di Aktifkan🌱_*')
    public = false
    return reply(`Succes Mode Self 🍂\nDimana Hanya Owner & Bot Yang Bisa Menggunakan Bot`,text)
  break
  case 'public':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (public)return reply('*_Fitur Itu Sudah Di Aktifkan🌱_*')
    public = true
    return reply(`Succes Mode Public 🌱\nDimana Semua User Bisa Menggunakan Bot`, text)
  break
  case 'setmenu':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
    if(args[0] == 'ori'){
    menusimpel = true
    reply('Sucsess')
    }else if(args[0] == 'simpel'){
    menusimpel = false
    reply('Sucsess')
    }else if (!c) {
    anu =`Silahkan pilih salah satu di bawah`
    buttons = [{buttonId: `${prefix}setmenu ori`, buttonText: {displayText: 'ORI'}, type: 1},{buttonId: `${prefix}setmenu simpel`, buttonText: {displayText: 'SIMPEL'}, type: 1}]
    const skuygelud = {
    contentText: `${anu}`,
    footerText: fake,
    buttons: buttons,
    headerType: 1
    }
    await Ryuu.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
    }
  break
  case 'bc': case 'broadcast':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (args.length < 1) return reply('teks?')
    anu100 = await Ryuu.chats.all()
    if (isMedia && !Ryuu.message.videoMessage || isQuotedImage) {
    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ryuu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ryuu
    bc100 = await Ryuu.downloadMediaMessage(encmedia)
    for (let _ of anu100) {
    Ryuu.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
    }
    reply('Suksess broadcast')
    } else {
    for (let _ of anu100) {
    Ryuu.sendMessage(_.jid, 
    {"contentText": `*「 broadcast bot 」*\n\n${body.slice(4)}`,
    "footerText": `${tampilTanggal}`, 
    "buttons": [
    {"buttonId": `${prefix}menu`,
    "buttonText": {"displayText": "MENU 🌱"
    },"type": "RESPONSE"}
    ], "headerType": 'LOCATION',
    locationMessage: { degreesLatitude: '',
    degreesLongitude: '',
    jpegThumbnail: fakeimage,
    }}, MessageType.buttonsMessage )
    }
    reply('Suksess broadcast')
    }
  break
  case 'delete': case 'del': case 'd':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
    Ryuu.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
  break
  case 'setnamabot':{
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
    Ryuu.updateProfileName(q)
    .then((res) => reply('Succes'))
    .catch((err) => reply('Error'))
    }
  break
  case 'setbiobot':{
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
    Ryuu.setStatus(q)
    .then((res) => reply('Succes'))
    .catch((err) => reply('Error'))
    }
  break
  // Fitur Informasi bot
  case 'infobot':{
    try {
    let totalchat = await Ryuu.chats.all()
    let i = []
    let giid = []
    for (let mem of totalchat){
    i.push(mem.jid)
    }
    for (let id of i){
    if (id && id.includes('g.us')){
    giid.push(id)
    }
    }
    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Ryuu.user.phone
    nupe = ownernumber + '@s.whatsapp.net'
    menu = `*BOT STATISTIC* 💻
Botname : ${botname}
Owner : @${nupe.split("@")[0]}
Prefix : Multi
Runtime : ${runtime(process.uptime())}
Speed : ${processsTime(mek.messageTimestamp.low, moment())}s
Status : ${public? `Public Mode`:`Self Mode`}
Group Chat : ${giid.length}
Total Chat : ${totalchat.length}
Total Block : ${blocked.length}

*PHONE STATISTIC*📱
Whatsapp Ver. : ${wa_version}
Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Mcc : ${mcc}
Mnc : ${mnc}
Versi OS : ${os_version}
Merk HP : ${device_manufacturer}
Versi HP : ${device_model}
Browser : ${Ryuu.browserDescription}`
    teks =
    `${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
    Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
    } catch (e){
    reply(`${e}`)
    }
    }
  break
  case 'ping':
  case 'speed':
    timestampe = speed();
    latensie = speed() - timestampe
    reply(`_*Speed Test*_\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
  break
  case 'rules':
    menu =
`‼️ *RULES* ‼️
1. Tolong Gunakan Delay 5 Detik Untuk Menggukan BOT
2. Gunakan Dengan Bijak.


✅ *SNK* ✅
1. Data Whatsapp Anda Akan Kami Simpan Di Server Kami Selama BOT Aktif.
2. Data Anda Akan Di Hapus Ketika BOT OFFLINE
3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim
4. Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi
5. Jika Menemukan BUG/ERROR Silahkan Langsung Lapor Ke OWNER BOT!


❗ *ATTENTION* ❗
*KONSEKUENSI BILA MELANGGAR RULES*
- Bot Akan Memblokir Nomor Anda.
- Anda Tidak Akan Bisa Mengakses Bot Lagi.
- Mengeksploitasi Terhadap bot.
Sanksi: *PERMANENT BLOCK*`
    teks =`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
    Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  case 'donasi':
    reply(`*TERIMA KASIH SUDAH MAU DONASI 🤗*\n\n*Q.S Az-Zalzalah Ayat 7 :*\n\nفَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ\n\nArtinya : Maka barangsiapa \nmengerjakan kebaikan seberat\nzarrah, niscaya dia akan melihat \n(balasan)nya,\n\ncontact owner :\nwa.me/${owmernumber} (Owner)`) 
  break
    //Fitur Voice Changer
  case 'bass': 
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
    fs.unlinkSync(ran)
    })
    limitAdd(sender, limit)
  break
  case 'slowmo': case 'slow':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    try {
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    uhh = fs.readFileSync(ran)
    Ryuu.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
    fs.unlinkSync(ran)
    })
    } catch (e) {
    reply(mess.error)
    }  
    limitAdd(sender, limit)
  break
  case 'fast':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    try {
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
    fs.unlinkSync(ran)
    })
    } catch (e) {
    reply(mess.error)
    }  
    limitAdd(sender, limit)
  break
  case 'robot':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
    fs.unlinkSync(ran)
    })
    limitAdd(sender, limit)
  break
  case 'detikvn': case 'setdetikvn': case 'setdurasi':
    if (!Number(args[0])) return reply(`Example : ${prefix + command} 50`)
    reply(mess.wait)
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    cokmatane = Number(args[0])
    hah = fs.readFileSync(media)
    Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: mek})
    fs.unlinkSync(media)
    limitAdd(sender, limit)
  break
  case 'tupai':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    try {
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99})
    fs.unlinkSync(ran)
    })
     } catch (e) {
    reply(mess.error)
    }  
    limitAdd(sender, limit)
  break
  case 'vibra': case 'vibrato':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
    fs.unlinkSync(ran)
    })
    limitAdd(sender, limit)
  break
    //Fitur Sound
  case 'sound1':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    man = fs.readFileSync('./assets/sound1.mp3');
    Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound2':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    man = fs.readFileSync('./assets/sound2.mp3');
    Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound3':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    man = fs.readFileSync('./assets/sound3.mp3');
    reply(mess.wait) 
    Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound4':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    man = fs.readFileSync('./assets/sound4.mp3');
    Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound5':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    man = fs.readFileSync('./assets/sound5.mp3');
    Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break

  //Fitur Convert
  case 'gifstiker': case 's': case 'stickergif': case 'sticker': case 'stiker':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
    const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = '666.webp'
    await ffmpeg(`./${media}`)
    .input(media)
    .on('start', function (cmd) {
    console.log(`Started : ${cmd}`)
    })
    .on('error', function (err) {
    console.log(`Error : ${err}`)
    fs.unlinkSync(media)
    reply('error')
    })
    .on('end', function () {
    console.log('Finish')
    Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
    fs.unlinkSync(media)
    fs.unlinkSync(ran)
    })
    .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
    .toFormat('webp')
    .save(ran)
    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
    const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = '999.webp'
    reply(mess.wait)
    await ffmpeg(`./${media}`)
    .inputFormat(media.split('.')[1])
    .on('start', function (cmd) {
    console.log(`Started : ${cmd}`)
    })
    .on('error', function (err) {
    console.log(`Error : ${err}`)
    fs.unlinkSync(media)
    tipe = media.endsWith('.mp4') ? 'video' : 'gif'
    reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
    })
    .on('end', function () {
    console.log('Finish')
    Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
    fs.unlinkSync(media)
    fs.unlinkSync(ran)
    })
    .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
    .toFormat('webp')
    .save(ran)
    } else {
    reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
    }
  break
  case 'toimg':
    if (!isQuotedSticker) return reply('reply stickernya')
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
    buffer = fs.readFileSync(ran)
    Ryuu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
    fs.unlinkSync(ran)
    })
  break
  case 'tourl': case 'imagetorul': case 'imgtourl': case 'videotourl': case 'tolink':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
     boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    owgi = await Ryuu.downloadMediaMessage(boij)
    res = await uploadImages(owgi)
    reply(res)
    } else {
    reply('kirim/reply gambar/video')
    }
  break
  case 'ttp':
    if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURI(q)}`)
    Ryuu.sendMessage(from, anu1, sticker, {quoted: mek, caption : `${prefix}sticker`})
  break
  case 'attp':
    if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
    buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
    Ryuu.sendMessage(from, buffer, sticker, { quoted: mek })
  break
  case 'emoji': case 'semoji':
    if (!q) return reply(`Example : ${prefix + command} 😂`)
    hex2 = args.join(' ') 
    emoji.get(`${hex2}`).then(emoji => {
    teks = `${emoji.images[4].url}`
    sendStickerFromUrl(from,`${teks}`)
    })
  break
  case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* lord`)
    try {
    if (!isQuotedImage) return reply(`Reply Gambar!`)
    reply(mess.wait)
    var teks2 = args.join(' ')
    var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
    var media = await Ryuu.downloadMediaMessage(enmedia)
    var njay = await uploadImages(media)
    var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
    Ryuu.sendMessage(from, resu, image, {caption:'Nih Kak Tinggal Jadikan Sticker', quoted: mek})
    fs.unlinkSync(media)
    } catch (e) {
    console.log(e)
    }
  break

//Fitur Storage
  case 'addvideo':
    if (isBanned) return reply('Kamu ke banned')
    if (!isQuotedVideo) return reply('Reply videonya blokk!')
    svst = body.slice(10)
    if (!svst) return reply('Nama videonya apa su?')
    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    delb = await Ryuu.downloadMediaMessage(boij)
    videonye.push(`${svst}`)
    fs.writeFileSync(`./assets/video/${svst}.mp4`, delb)
    fs.writeFileSync('./assets/video.json', JSON.stringify(videonye))
    Ryuu.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
  break
  case 'getvideo':
    if (isBanned) return reply('Kamu ke banned')
    namastc = body.slice(10)
    buffer = fs.readFileSync(`./assets/video/${namastc}.mp4`)
    Ryuu.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
  break
  case 'listvideo':
  case 'videolist':
    if (isBanned) return reply('Kamu ke banned')
    teks = '*List Video :*\n\n'
    for (let awokwkwk of videonye) {
    teks += `- ${awokwkwk}\n`
    }
    teks += `\n*Total : ${videonye.length}*`
    Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
  break
  case 'getsticker':
  case 'gets': 
    if (isBanned) return reply('Kamu ke banned')
    namastc = body.slice(12)
    result = fs.readFileSync(`./assets/stiker/${namastc}.webp`)
    Ryuu.sendMessage(from, result, sticker, {quoted :mek})
  break
  case 'stickerlist':
  case 'liststicker': 
    if (isBanned) return reply('Kamu ke banned')
    teks = '*Sticker List :*\n\n'
    for (let awokwkwk of setiker) {
    teks += `- ${awokwkwk}\n`
    }
    teks += `\n*Total : ${setiker.length}*`
    Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
  break
  case 'addsticker':
  case 'addstiker':
    if (isBanned) return reply('Kamu ke banned')
    if (!isQuotedSticker) return reply('Reply stiker nya')
    svst = body.slice(12)
    if (!svst) return reply('Nama sticker nya apa?')
    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    delb = await Ryuu.downloadMediaMessage(boij)
    setiker.push(`${svst}`)
    fs.writeFileSync(`./assets/stiker/${svst}.webp`, delb)
    fs.writeFileSync(`./assets/stik.json`, JSON.stringify(setiker))
    Ryuu.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
  break
  case 'addvn': 
    if (isBanned) return reply('Kamu ke banned')
    svst = body.slice(7)
    if (!svst) return reply('Nama audionya apa su?')
    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    delb = await Ryuu.downloadMediaMessage(boij)
    audionye.push(`${svst}`)
    fs.writeFileSync(`./assets/audio/${svst}.mp3`, delb)
    fs.writeFileSync('./assets/audio.json', JSON.stringify(audionye))
    Ryuu.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
  break
  case 'listvn':
  case 'vnlist': 
    if (isBanned) return reply('Kamu ke banned')
    teks = '*List Vn:*\n\n'
    for (let awokwkwk of audionye) {
    teks += `- ${awokwkwk}\n`
    }
    teks += `\n*Total : ${audionye.length}*`
    Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
  break
  case 'getvn': 
    if (isBanned) return reply('Kamu ke banned')
    namastc = body.slice(7)
    buffer = fs.readFileSync(`./assets/audio/${namastc}.mp3`)
    Ryuu.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
  break
  case 'addimage':
    if (isBanned) return reply('Kamu ke banned')
    if (!isQuotedImage) return reply('Reply imagenya blokk!')
    svst = body.slice(10)
    if (!svst) return reply('Nama imagenya apa su?')
    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    delb = await Ryuu.downloadMediaMessage(boij)
    imagenye.push(`${svst}`)
    fs.writeFileSync(`./assets/image/${svst}.jpeg`, delb)
    fs.writeFileSync('./assets/image.json', JSON.stringify(imagenye))
    Ryuu.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
  break
  case 'getimage':
    if (isBanned) return reply('Kamu ke banned')
    namastc = body.slice(10)
    buffer = fs.readFileSync(`./assets/image/${namastc}.jpeg`)
    Ryuu.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
  break
  case 'imglist':
  case 'listimg':
    if (isBanned) return reply('Kamu ke banned')
    teks = '*List Image :*\n\n'
    for (let awokwkwk of imagenye) {
    teks += `- ${awokwkwk}\n`
    }
    teks += `\n*Total : ${imagenye.length}*`
    Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
  break
  //Fitur Fun
  case 'suit':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply('Pilih gunting/batu/kertas')
    if (args[0] === 'gunting' ) {
    gunting = ["Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔","Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂","Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"]
    gun = gunting[Math.floor(Math.random() * gunting.length)]
    reply(gun)
    } else if (args[0] === 'kertas') {
    ker = ["Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔","Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂","Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"]
    kertas = ker[Math.floor(Math.random() * ker.length)]
    reply(kertas)
    } else if (args[0] === 'batu') {
    bat = ["Kamu *Batu*\nAku *Gunting*\nKamu Menang 😁","Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂","Kamu *Batu*\nAku *Batu*\nKita Seri 😏"]
    batu = bat[Math.floor(Math.random() * bat.length)]
    reply(batu)
    } else {
    reply('Pilih gunting/batu/kertas')
    }
  break
  case 'apakah':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    apakah = body.slice(1)
    const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
    const kah = apa[Math.floor(Math.random() * apa.length)]
    Ryuu.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
  break
  case 'rate': case 'nilai':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    rate = body.slice(1)
    const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
    const te = ra[Math.floor(Math.random() * ra.length)]
    Ryuu.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
  break
  case 'bisakah':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    bisakah = body.slice(1)
    const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
    const keh = bisa[Math.floor(Math.random() * bisa.length)]
    Ryuu.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
  break
  case 'kapankah':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    kapankah = body.slice(1)
    const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
    const koh = kapan[Math.floor(Math.random() * kapan.length)]
    Ryuu.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
  break
  case 'slot':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
    somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
    somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
    somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
    if (somtoyy== '🍌 : 🍌 : 🍌') {
    bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
    {
    buttonId: `${prefix}slot`,
    buttonText: {
    displayText: `NEXT ➡️`,
    },
    type: 1,
    }]);
    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
    bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
    {
    buttonId: `${prefix}slot`,
    buttonText: {
    displayText: `NEXT ➡️`,
    },
    type: 1,
    }]);
    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
    bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
    {
    buttonId: `${prefix}slot`,
    buttonText: {
    displayText: `NEXT ➡️`,
    },
    type: 1,
    }]);
    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
    bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
    {
    buttonId: `${prefix}slot`,
    buttonText: {
    displayText: `NEXT ➡️`,
    },
    type: 1,
    }]);
    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
    bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
    {
    buttonId: `${prefix}slot`,
    buttonText: {
    displayText: `NEXT ➡️`,
    },
    type: 1,
    }]);
    } else {
    ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nKAMU BAU!`, `Main Lagi? Klik Di Bawah `, [
    {
    buttonId: `${prefix}slot`,
    buttonText: {
    displayText: `NEXT ➡️`,
    },
    type: 1,
    }]);
    }
  break
  case 'truth':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
    const ttrth = trut[Math.floor(Math.random() * trut.length)]
    truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
    Ryuu.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
  break
  case 'dare':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
    const der = dare[Math.floor(Math.random() * dare.length)]
    buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
    Ryuu.sendMessage(from, buff, image, { caption: '*Dare*\n\n'+ der, quoted: mek })
  break
  case 'bagaimanakah':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    bagaimanakah = body.slice(1)
    const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
    const mana = bagai[Math.floor(Math.random() * bagai.length)]
    Ryuu.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
  break

    //Fitur Anime
  case 'neko': case 'waifu': 
  case 'shinobu': case 'megumin': 
  case 'bully': case 'cuddle': 
  case 'cry': case 'hug': 
  case 'awoo': case 'kiss': 
  case 'lick': case 'pat': 
  case 'smug': case 'bonk': 
  case 'yeet': case 'blush': 
  case 'smile': case 'wave': 
  case 'highfive': case 'handhold': 
  case 'nom': case 'bite': 
  case 'glomp': case 'slap': 
  case 'kill': case 'happy': 
  case 'wink': case 'poke': 
  case 'dance': case 'cringe':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait)
    anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
    kon = await getBuffer(anu.url)
    pll = `Succces By : ${botname}`
    sendButImage(from, pll, `Next Untuk Melanjutkan`, kon, [
    {
    buttonId: `${prefix}${command}`,
    buttonText: {
    displayText: `NEXT ⏩`,
    },
    type: 1,
    },
    ]); 
  break

    //Fitur AniManga
  case 'nekonime':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')    
    if (!q) return reply('Namanya Apa?') 
    reply(mess.wait)
    get = await fetchJson(`https://api.violetics.pw/api/anime/nekonime?apikey=beta&manga=${q}`)
    teks = `_*Nekonime*_ 🌱\n`
    for (let i of get.result) {
	teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n📚 *Chapter* : ${i.chapter}\n🗓 *Released* : ${i.released}\n\n`
	}
	reply(teks.trim()) 
  break
  case 'komiku':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')    
    if (!q) return reply('Namanya Apa?') 
    reply(mess.wait)
    get = await fetchJson(`https://api.violetics.pw/api/anime/komiku?apikey=beta&manga=${q}`)
    teks = `_*Komiku*_ 🌱\n`
    for (let i of get.result) {
	teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n📚 *Chapter* : ${i.chapter}\n📝 *Description* : ${i.description}\n\n`
	}
	reply(teks.trim()) 
  break
  case 'anoboy':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')    
    if (!q) return reply('Namanya Apa?') 
    reply(mess.wait)
    get = await fetchJson(`https://api.violetics.pw/api/anime/anoboy?apikey=beta&manga=${q}`)
    teks = `_*Anoboy*_ 🌱\n`
    for (let i of get.result) {
	teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n🗓 *Show Up* : ${i.showup}\n\n`
	}
	reply(teks.trim()) 
  break
  case 'anibatch':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')    
    if (!q) return reply('Namanya Apa?') 
    reply(mess.wait)
    get = await fetchJson(`https://api.violetics.pw/api/anime/anibatch?apikey=beta&manga=${q}`)
    teks = `_*Anibatch*_ 🌱\n`
    for (let i of get.result) {
	teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n✨ *Rate* : ${i.rate}\n\n`
	}
	reply(teks.trim()) 
  break
  case 'kiryu':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')    
    if (!q) return reply('Namanya Apa?') 
    reply(mess.wait)
    get = await fetchJson(`https://api.violetics.pw/api/anime/kiryu?apikey=beta&manga=${q}`)
    teks = `_*Kiryu*_ 🌱\n`
    for (let i of get.result) {
	teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n📚 *Chapter* : ${i.chapter}\n✨ *Rate* : ${i.rate}\n\n`
	}
	reply(teks.trim()) 
  break
  
    //Fitur Informasi
  case 'infotsunami':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait)
    get_result = await fetchJson(`https://api-ryubotz.herokuapp.com/api/infotsunami?apikey=${ryukey}`)
    get_result = get_result.result
    ini_tes = "🌱 *Result Info Tsunami*\n\n"
    ini_tes += `📅 *Tanggal* : ${get_result.daftar_tsunami[0].tangal}\n`
    ini_tes += `🏞 *Lokasi* : ${get_result.daftar_tsunami[0].lokasi}\n`
    ini_tes += `🖥 *Magnitude* : ${get_result.daftar_tsunami[0].magnitude}\n`
    ini_tes += `🪨 *Kedalaman* : ${get_result.daftar_tsunami[0].kedalaman}\n`
    ini_tes += `🌄 *Wilayah* : ${get_result.daftar_tsunami[0].wilayah}`
    reply(ini_tes)
  break
  case 'covidglobal':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait)
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/info/covidworld?apikey=${ryukey}`)
    reply(`🚑 *Result CovidGlobal*\n\n👤 *Total Kasus* : ${get.result.totalCases}\n💉 *Pulih* : ${get.result.recovered}\n🪦 *Meninggal* : ${get.result.deaths}\n🌱 *Kasus Aktif* : ${get.result.activeCases}\n💊 *Kasus Tertutup* : ${get.result.closedCases}\n\n📅 _*Last Update*_ : ${get.result.lastUpdate}`) 
  break
  case 'cuacabandara':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait)
    get_result = await fetchJson(`https://api-ryubotz.herokuapp.com/api/infocuaca/bandara?apikey=${ryukey}`)
    get_result = get_result.result
    ini_tes = "🌱 *Result Info Cuaca Bandara*\n\n"
    ini_tes += `💬 *Nama Bandara* : ${get_result.daftar_bandara[0].nama_bandara}\n`
    ini_tes += `🕒 *Waktu* : ${get_result.daftar_bandara[0].waktu_pengamatan}\n`
    ini_tes += `💨 *Angin* : ${get_result.daftar_bandara[0].arah_angin}\n`
    ini_tes += `🌪 *Kecepatan* : ${get_result.daftar_bandara[0].kecepatan}\n`
    ini_tes += `👁 *Jarak Pandang* : ${get_result.daftar_bandara[0].jarak_pandang}\n`
    ini_tes += `🌄 *Cuaca* : ${get_result.daftar_bandara[0].cuaca}\n`
    ini_tes += `🚨 *Titik Timbuni* : ${get_result.daftar_bandara[0].titik_timbun}\n`
    ini_tes += `🌬 *Tekanan Udara* : ${get_result.daftar_bandara[0].tekanan_udara}`
    reply(ini_tes)
  break
  case 'infogempa':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    get = await fetchJson(`https://hardianto.xyz/api/info/gempa?apikey=hardianto`)
    reply(`🕒 *Waktu* : ${get.result.Waktu}\n✨ *Lintang* : ${get.result.Lintang}\n🪨 *Bujur* : ${get.result.Bujur}\n🖥 *Magnitudo* : ${get.result.Magnitudo}\n🍃 *Kedalaman* : ${get.result.Kedalaman}\n🌄 *Wilayah* : ${get.result.Wilayah}\n🗺 *Map* : ${get.result.Map}`)
  break

    //Islami
  case 'kisahnabi':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!q) return reply('Masukan Nama Nabi') 
    reply(mess.wait)
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/muslim/kisahnabi?nabi=${q}&apikey=${ryukey}`) 
    reply(`💬 *Name* : ${get.result.name}\n📆 *Kelahiran* : ${get.result.kelahiran}\n🪦 *Wafat* : ${get.result.wafat_usia}\n🏡 *Singgah* : ${get.result.singgah}\n👳‍♀️ *Kisah* :\n${get.result.kisah}`) 
  break
  case 'niatsholat':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply('Pilih niat sholat apa')
    reply(mess.wait)
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/muslim/niatshalat?apikey=RyuBotz`)
    if (args[0] === 'subuh' ) {
    subuh = [`💬 *Name* : ${get.result[0].name}\n👳‍♀️ *Arabic* :\n${get.result[0].arabic}\n🌱 *Latin* :\n${get.result[0].latin}\n🍂 *Terjemahan* :\n${get.result[0].terjemahan}`]
    sub = subuh[Math.floor(Math.random() * subuh.length)]
    reply(sub)
    } else if (args[0] === 'dzuhur') {
    ker = [`💬 *Name* : ${get.result[1].name}\n👳‍♀️ *Arabic* :\n${get.result[1].arabic}\n🌱 *Latin* :\n${get.result[1].latin}\n🍂 *Terjemahan* :\n${get.result[1].terjemahan}`]
    dzuhur = ker[Math.floor(Math.random() * ker.length)]
    reply(dzuhur)
    } else if (args[0] === 'ashar') {
    bat = [`💬 *Name* : ${get.result[2].name}\n👳‍♀️ *Arabic* :\n${get.result[2].arabic}\n🌱 *Latin* :\n${get.result[2].latin}\n🍂 *Terjemahan* :\n${get.result[2].terjemahan}`]
    batu = bat[Math.floor(Math.random() * bat.length)]
    reply(batu)
    } else if (args[0] === 'maghrib') {
    ashar = [`💬 *Name* : ${get.result[3].name}\n👳‍♀️ *Arabic* :\n${get.result[3].arabic}\n🌱 *Latin* :\n${get.result[3].latin}\n🍂 *Terjemahan* :\n${get.result[3].terjemahan}`]
    ash = ashar[Math.floor(Math.random() * ashar.length)]
    reply(ash)
    } else if (args[0] === 'isya') {
    isy = [`💬 *Name* : ${get.result[4].name}\n👳‍♀️ *Arabic* :\n${get.result[4].arabic}\n🌱 *Latin* :\n${get.result[4].latin}\n🍂 *Terjemahan* :\n${get.result[4].terjemahan}`]
    isya = isy[Math.floor(Math.random() * isy.length)]
    reply(isya)
    } else {
    reply('Pilih niat sholat apa')
    }
  break
  case 'asmaulhusna':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api.zacros.my.id/islami/asmaulhusna`) 
    reply(`💬 *Urutan* : ${get.result.urutan}\n🕋 *Latin* : ${get.result.latin}\n🇸🇦 *Arab* : ${get.result.arab}\n💭 *Arti* : ${get.result.arti}`) 
  break 
  case 'quran':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    get = await fetchJson(`https://api.zacros.my.id/islami/quran`) 
    anu = await getBuffer(get.result.audio) 
    reply(`💬 *Nama* : ${get.result.nama}\n💭 *Ayat* : ${get.result.ayat}\n🧎🏻‍♂️ *Rukuk* : ${get.result.rukuk}\n🏡 *Type* : ${get.result.type}\n💭 *Desc* :\n${get.result.desc}\n☑️ *Urutan* : ${get.result.urut}`) 
    Ryuu.sendMessage(from, anu, audio, {mimetype:"audio/mp4", quoted:mek})
  break
  case 'doaharian':
    get = await fetchJson(`https://api.zacros.my.id/islami/doaseharian`) 
    teks = `_*Doa Harian*_ 🌱\n`
    for (let i of get.result) {
	teks += `💬 *Surah* : ${i.surah}\n🇸🇦 *Arab* : ${i.arab}\n🕋 *Latin* : ${i.latin}\n\n\n`
	}
	reply(teks.trim()) 
  break
  case 'jadwalsholat':
    if (!q) return reply('Masukan Nama Kota!') 
  get = await fetchJson(`https://api.pray.zone/v2/times/today.json?city=${q}`) 
  reply(`_*Jadwal Sholat ${get.results.location.city}, ${get.results.location.country}*_ 🕌\n\n*Imsak* : ${get.results.datetime[0].times.Imsak}\n*Sunrise* : ${get.results.datetime[0].times.Sunrise}\n*Fajr* : ${get.results.datetime[0].times.Fajr}\n*Dhuhr* : ${get.results.datetime[0].times.Dhuhr}\n*Asr* : ${get.results.datetime[0].times.Asr}\n*Sunset* : ${get.results.datetime[0].times.Sunset}\n*Maghrib* : ${get.results.datetime[0].times.Maghrib}\n*Isha* : ${get.results.datetime[0].times.Isha}\n*Midnight* : ${get.results.datetime[0].times.Midnight}\n\n_*By ${botname}*_ ✨`) 
  break
    //Fitur textprome
  case 'magma': case 'glossy':
  case 'bread': case 'ice': 
  case 'honey': case 'writing':
  case 'engraved': case 'holograpic':
  case 'fabric': case 'wicker':
  case 'larva': case 'toxic':
  case 'strobery': case 'blackpink':
  case 'christmas': case 'gradien':
  case '1917': case 'space':
  case 'hallowen': case 'astone':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length == 0) return reply(`Example: ${prefix}${command} Ryuuka Botz`)
    reply(mess.wait) 
    anu = args.join(" ")
    ini_buffer = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/${command}?text=${anu}&apikey=${ryukey}`)
    Ryuu.sendMessage(from, ini_buffer, image, { quoted: ftrol})
    limitAdd(sender, limit)
    .catch((err) => {
    reply('Fitur Sedang Error 🙏')
    })
  break

    //Fitur Photooxy
  case '3dnature': case 'bevel': 
  case 'burnpaper': case 'quotesgrass': 
  case 'stars': case 'flaming': 
  case 'romance': case 'gerbang': 
  case 'fur': case 'funnycup': 
  case 'birthdaycake': case 'camuflage': 
  case 'coffee': case 'coffee-heartcup': 
  case 'crispchrome': case 'embroiderytext':
  case 'flowertext': case 'flowertypo':
  case 'glowrainbow': case 'gradientavatar':
  case 'graffititext': case 'grenleaves':
  case 'harrypotter': case 'watermelon':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length == 0) return reply(`Example: ${prefix}${command} RyuukaBotz`)
    reply(mess.wait) 
    anu = args.join(" ") 
    get = await getBuffer(`https://api.violetics.pw/api/photooxy/${command}?apikey=beta&text=${anu}`) 
    Ryuu.sendMessage(from, get, image, { quoted: ftrol}) 
    .catch((err) => {
    reply('Fitur Sedang Error 🙏')
    })
  break

    //Fitur Ephoto360
  case '3d-underwater': case '3dtext-pig': 
  case '3dvalentine-cards': case 'anonymous-neon': 
  case 'advanced-glow': case 'art-shader': 
  case 'angels-wings': case 'gold-effect':
  case 'gold-effect2': case 'gold-effect3':
  case 'gold-text': case 'gold-text2':
  case 'orangeskin-snake': case 'paper-cutout':
  case 'paperclip-quote': case 'papercut-effect':
  case 'personalized-christmas': case 'personalized-queen':
  case 'stars-night': case 'pikachu':
  case 'realistic-cloud': case 'round-thunder':
  case 'rooster': case 'snake-text':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length == 0) return reply(`Example: ${prefix}${command} RyuukaBotz`)
    reply(mess.wait) 
    anu = args.join(" ") 
    get = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=beta&text=${anu}`) 
    Ryuu.sendMessage(from, get, image, { quoted: ftrol}) 
    .catch((err) => {
    reply('Fitur Sedang Error 🙏')
    })
  break
  
    //Fitur Cecan & Asupan
  case 'vietnam': case 'malaysia': 
  case 'japan': case 'korea': 
  case 'Indonesia': case 'thailand': 
  case 'china':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    goo = await getBuffer(`https://api-ryubotz.herokuapp.com/api/cecan/vietnam?apikey=${ryukey}`)
    Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: `Success By : ${ownername}`})
    limitAdd(sender, limit)
    .catch((err) => {
    reply('Fitur Sedang Error 🙏')
    })
  break
  case 'santuy': case 'ukty': 
  case 'bocil': case 'gheayubi': 
  case 'rikagusriani':
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    buffer = await getBuffer(`https://api-ryubotz.herokuapp.com/api/asupan/${command}?apikey=${ryukey}`)
    Ryuu.sendMessage(from, buffer, video, {quoted: ftrol})
    .catch((err) => {
    reply('Fitur Sedang Error 🙏')
    })
  break
  //Random Image
  case 'tatasurya': case 'teknologi': 
  case 'anime': case 'cyberspace': 
  case 'gaming':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait) 
    anu = await getBuffer(`https://api-ryubotz.herokuapp.com/api/wallpaper/${command}?apikey=${ryukey}`)
    Ryuu.sendMessage(from, anu, image, {quoted: ftrol, caption: `Success By : ${ownername}`})
    limitAdd(sender, limit)
  break
  case 'ppcouple':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(mess.wait)
    get = await fetchJson(`https://api.zacros.my.id/randomimg/ppcouple`) 
    male = await getBuffer(`${get.male}`) 
    Ryuu.sendMessage(from, male, image, {quoted: ftrol, caption: 'Cowo nya'}) 
    female = await getBuffer(`${get.female}`) 
    Ryuu.sendMessage(from, female, image, {quoted: ftrol, caption: 'Cewe nya'}) 
  break
  case 'meme':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    huft = await fetchJson(`https://api-ryubotz.herokuapp.com/api/random/meme?apikey=${ryukey}`)
    reply(mess.wait) 
    goo = await getBuffer(huft.result.url)
    Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: `*${huft.result.title}*\n\n*Author* 👤 : ${huft.result.author}`})
  break

  //Random Text
  case 'quotes':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/random/quotes?apikey=${ryukey}`)
    reply(`*Quotes* 🌱 : ${get.result.quote}\n*Author* 👤 : ${get.result.by}`)
  break
  case 'cerpen':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api.zacros.my.id/randomtext/cerpen`) 
    reply(`*Cerita Pendek* 🌱 :\n${get.result}`) 
  break
  case 'fml':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api.zacros.my.id/randomtext/fml`) 
    reply(`*Fuck My Life* 🍂 :\n${get.result}`) 
  break
  case 'faktaunik':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/random/faktaunik?apikey=${ryukey}`)
    reply(`*Fakta Unik* 🌱 : ${get.result}`)
  break
  case 'katabijak':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/random/katabijak?apikey=${ryukey}`)
    reply(`*Kata Bijak* 🌱 : ${get.result}`)
  break
  case 'pantun':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/random/pantun?apikey=${ryukey}`)
    reply(`*Pantun* 🌱 :\n${get.result}`)
  break
  case 'quotesanime':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api.zacros.my.id/randomtext/quotesanime`) 
    reply(`*Kata-Kata Anime* 🧸 :\n${get.result.quotes}\n\n_*${get.result.char_name}*_`) 
  break
  case 'katagalau':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    get = await fetchJson(`https://api.zacros.my.id/randomtext/katagalau`) 
    reply(`*Kata Galau* 🍂 :\n${get.result}`) 
  break
  //Fitur Group
  case 'welcome':
    if (!isGroup) return (mess.only.admin) 
    if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
    if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
    if ((args[0]) === 'on') {
    if (isWelkom) return reply('*welcome sudah aktif !!*')
     _welkom.push(from)
    fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
    reply(`Succes Welcome Telah On🌱`)
    } else if ((args[0]) === 'off') {
    if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
    _welkom.splice(from, 1)
    fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
    reply(`Succes Welcome Telah Off🍂`)
    } else {
    reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
    }
  break
  case 'antilink':
    if (!isGroup) return reply(mess.only.group)
    if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
    if (!q) return reply(`Pilih enable atau disable`)
    if (args[0].toLowerCase() === 'enable'){
    if (isAntiLink) return reply(`Udah aktif`)
    antilink.push(from)
    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
    reply('Succes Antilink Telah Nyala🌱')
    } else if (args[0].toLowerCase() === 'disable'){
    let anu = antilink.indexOf(from)
    antilink.splice(anu, 1)
    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
    reply('Succes Antilink Telah Mati🍂')
    } else {
    reply(`Pilih enable atau disable`)
    }
  break
  case 'add':
    if (!isGroup) return reply(mess.only.group) 
    if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    if (args.length < 1) return reply('Yang mau di add jin ya?')
    if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
    try {
    num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
    Ryuu.groupAdd(from, [num])
    } catch (e) {
    console.log('Error :', e)
    reply('Gagal menambahkan target, mungkin karena di private')
    }
  break
  case 'kick':
    if (!isGroup) return reply(mess.only.group) 
    if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin) 
    if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
    if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
    var kickya = q.split('@')[1] + '@s.whatsapp.net'
    await Ryuu.groupRemove(from, [kickya])
    reply(`Succses`)
  break
  case 'linkgc': case 'linkgrup': case 'linkgroup':
    if (!isGroup) return reply(mess.only.group)
    if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
    Ryuu.groupInviteCode(from)
    .then((res) => reply('https://chat.whatsapp.com/' + res))
  break
  case 'setppgrup':
    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
    if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
    if (isQuotedImage) {
    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
    let media = await Ryuu.downloadMediaMessage(encmedia)
    Ryuu.updateProfilePicture(from, media)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
    } else if (isQuotedSticker){
    if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return reply('Eror Lord')
    buffer = fs.readFileSync(ran)
    Ryuu.updateProfilePicture(from, buffer)
    fs.unlinkSync(ran)
    })
    } else {
    reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
    }
  break
  case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
    if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
    if (args.length == 0) return reply(`Penggunaan ${prefix + command} Alphabot Support`)
    Ryuu.groupUpdateSubject(from, q)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
  break
  case 'setdesc': case 'setdesk': case 'setdeskripsi':
    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
    if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
    if (args.length == 0)  return reply(`Penggunaan ${prefix + command} Alphabot Support`)
    Ryuu.groupUpdateDescription(from, q)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
  break
    //Fitur Nulis
  case 'nulis':
    reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
  break
  case 'nuliskiri':{
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
    reply(mess.wait)
    const tulisan = q
    const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
    './media/nulis/images/buku/sebelumkiri.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '22',
    '-interline-spacing',
    '2',
    '-annotate',
    '+140+153',
    fixHeight,
    './media/nulis/images/buku/setelahkiri.jpg'
    ])
    .on('error', () => reply(mess.eror))
    .on('exit', () => {
    Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

    })
    }
  break
  case 'nuliskanan':{
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
    reply(mess.wait)
    const tulisan = q
    const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
    './media/nulis/images/buku/sebelumkanan.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '2',
    '-annotate',
    '+128+129',
    fixHeight,
    './media/nulis/images/buku/setelahkanan.jpg'
    ])
    .on('error', () => reply(mess.eror))
    .on('exit', () => {
    Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

    })
    }
  break
  case 'foliokiri':{
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
    reply(mess.wait)
    const tulisan = q
    const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
    const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
    spawn('convert', [
    './media/nulis/images/folio/sebelumkiri.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '1720x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '4',
    '-annotate',
    '+48+185',
    fixHeight,
    './media/nulis/images/folio/setelahkiri.jpg'
    ])
    .on('error', () => reply(mess.eror))
    .on('exit', () => {
    Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

    })
    }
  break
  case 'foliokanan':{
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
    reply(mess.wait)
    const tulisan = q
    const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
    const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
    spawn('convert', [
    './media/nulis/images/folio/sebelumkanan.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '3',
    '-annotate',
    '+89+190',
    fixHeight,
    './media/nulis/images/folio/setelahkanan.jpg'
    ])
    .on('error', () => reply(mess.eror))
    .on('exit', () => {
    Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

    })
    }
  break

    //Fitur News
  case 'antara': case 'bbc': 
  case 'cnbc': case 'daily': 
  case 'detik': case 'fajar': 
  case 'idn': case 'indozone': 
  case 'inews': case 'kompas': 
  case 'merdeka': case 'republika':
  case 'tribun':
    get = await fetchJson(`https://api.violetics.pw/api/news/${command}?apikey=beta`) 
    teks = `_*${command} news*_ 🌱\n`
    for (let i of get.result) {
	teks += `📽 *News* : ${i.news}\n📚 *Category* : ${i.category}\n🗓 *Date* : ${i.date}\n🔗 *Url* : ${i.url}\n\n`
	}
	reply(teks.trim()) 
  break
  
    //Fitur Game
  case 'delsesittt':
  case 'resetgame':
    if (!isGroup) return replysticker(groupstc)
    if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
    naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
    ky_ttt = naa 
    reply('Sukses Mereset Game')
  break
  case 'tictactoe':
  case 'ttt':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isGroup) return replysticker(groupstc)
    if (args.length < 1) return reply('Tag Lawan Anda! ')
    if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
    ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
    player1 = sender
    player2 = ment[0]
    angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
    id = from
    gilir = player2
    ky_ttt.push({player1,player2,id,angka,gilir})
    Ryuu.sendMessage(from, `🎳 Memulai Tictactoe 🎲\n\n [@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥\nKetik Y/N untuk menerima atau menolak permainan\n\nKet : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
    limitAdd(sender, limit)
  break
  //Fitur Game
  case 'tebakgambar':
    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/kuis/tebakGambar?apikey=${ryukey}`)
    anu = anu
    ini_image = anu.image
    jawaban = anu.jawaban
    ini_buffer = await getBuffer(ini_image)
    clue = anu.clue
    buff = await getBuffer(ini_image)
    Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+clue+'\nWaktu : 30s' }).then(() => {
    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
    })
    await sleep(30000)
    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    titid = "*Jawaban*: " + jawaban
    sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
    {
    buttonId: `${prefix}tebakgambar`,
    buttonText: {
    displayText: `Next ⏩`,
    },
    type: 1,
    },]);
    delete tebakgambar[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
    }
  break
  case 'tebakkata':
    if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/game/tebakkata?apikey=${ryukey}`)
    anu = anu
    jawaban = anu.jawaban
    pertanyaan = anu.soal
    Ryuu.sendMessage(from, '```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
    tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
    })
    await sleep(30000)
    if (tebakata.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete tebakata[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
    }
  break
  case 'susunkata':
    if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    get_result = await fetchJson(`https://api-ryubotz.herokuapp.com/api/game/susunkata?apikey=${ryukey}`)
    jawaban = get_result.jawaban
    pertanyaan = get_result.soal
    Ryuu.sendMessage(from, '```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
    })
    await sleep(30000)
    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete susunkata[sender.split('@')[0]]
    fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
    }
  break
  case 'asahotak':
    if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    get_result = await fetchJson(`https://api-ryubotz.herokuapp.com/api/game/asahotak?apikey=${ryukey}`)
    jawaban = get_result.jawaban
    pertanyaan = get_result.soal
    Ryuu.sendMessage(from, '```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *Waktu* : 30s', text, { quoted: mek}).then(() => {
    asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
    })
    await sleep(30000)
    if (asahotak.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete asahotak[sender.split('@')[0]]
    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
    }
  break
  case 'tebaklirik':
    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/game/tebaklirik?apikey=${ryukey}`)
    jawaban = anu.result.answer
    pertanyaan = anu.result.question
    Ryuu.sendMessage(from, '```Tebak Lirik```\n\n• *Soal* :'+anu.result.question+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
    })
    await sleep(30000)
    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete tebaklirik[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
    }
  break
  case 'tebakjenaka':
    if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/game/tebakjenaka?apikey=${ryukey}`)
    jawaban = anu.result.jawaban
    pertanyaan = anu.result.pertanyaan
    Ryuu.sendMessage(from, '```Tebak Jenaka```\n\n• *Soal* :'+anu.result.pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
    tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
    })
    await sleep(30000)
    if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete tebakjenaka[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
    }
  break
  case 'tebakkimia':
    if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/game/tebakkimia?apikey=${ryukey}`)
    jawaban = anu.result.lambang
    pertanyaan = anu.result.nama
    Ryuu.sendMessage(from, '```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
    tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tebakimia.json", JSON.stringify(tebakimia))
    })
    await sleep(30000)
    if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete tebakimia[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakimia.json", JSON.stringify(tebakimia))
    }
  break
  case 'tebakbendera':
    if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/game/tebakbendera?apikey=${ryukey}`)
    jawaban = anu.result.nama
    pertanyaan = anu.result.bendera
    Ryuu.sendMessage(from, '```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
    tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
    })
    await sleep(30000)
    if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete tebakbendera[sender.split('@')[0]]
    fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
    }
  break
  case 'caklontong':
    if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/kuis/caklontong?apikey=${ryukey}`)
    jawaban = anu.result.jawaban
    pertanyaan = anu.result.soal
    Ryuu.sendMessage(from, '```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
    })
    await sleep(30000)
    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
    console.log(color("Jawaban: " + jawaban))
    reply("Jawaban: " + jawaban)
    delete caklontong[sender.split('@')[0]]
    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
    }
  break 

    //Fitur Downloader
  case 'ytmp3':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply("Masukkan url youtube")
    url = args.join(' ')
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${ryukey}`)
    reply(`Tunggu Butuh Beberapa Menit!`) 
    thumb = await getBuffer(anu.result.thumb) 
    ytmp3 = await getBuffer(anu.result.url)
    Ryuu.sendMessage(from, thumb, image, {quoted: ftrol, caption: `_*Data Di DapatKan!!*_\n\n💬 *Title* : ${anu.result.title}\n🖼 *Thumb* : ${anu.result.thumb}\n🖥 *Channel* : ${anu.result.channel}\n📅 *Publish* : ${anu.result.published}\n👁 *Viewers* : ${anu.result.views}\n\nAudio Akan Dikirim Beberapa Menit!`}) 
    Ryuu.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
    limitAdd(sender, limit)
  break
  case 'ytmp4':
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply("Masukkan url youtube")
    url = args.join(' ')
    anu = await fetchJson(`https://api-ryubotz.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${ryukey}`)
    reply(`Tunggu Butuh Beberapa Menit!`)
    thumb = await getBuffer(anu.result.thumb)
    ytmp4 = await getBuffer(anu.result.url)
    Ryuu.sendMessage(from, thumb, image, {quoted: ftrol, caption: `_*Data Di DapatKan!!*_\n\n💬 *Title* : ${anu.result.title}\n🖼 *Thumb* : ${anu.result.thumb}\n🖥 *Channel* : ${anu.result.channel}\n📅 *Publish* : ${anu.result.published}\n👁 *Viewers* : ${anu.result.views}\n\nAudio Akan Dikirim Beberapa Menit!`}) 
    Ryuu.sendMessage(from, ytmp4, video, {caption:`Done By : ${botname}`, thumbnail:Buffer.alloc(0), quoted:mek})
    limitAdd(sender, limit)
  break
  case 'tiktoknowm':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply("Masukkan url tiktok")
    url = args.join(' ')
    reply(`Tunggu Butuh Beberapa Menit!`) 
    ini = await fetchJson(`https://api-ryubotz.herokuapp.com/api/download/tiktok?url=${url}&apikey=${ryukey}`)
    buffer = await getBuffer(ini.result.nowatermark)
    Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: `Success By : ${ownername}`})
  break
  case 'tiktokwm':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply("Masukkan url tiktok")
    url = args.join(' ')
    reply(`Tunggu Butuh Beberapa Menit!`) 
    ini = await fetchJson(`https://api-ryubotz.herokuapp.com/api/download/tiktok?url=${url}&apikey=${ryukey}`)
    buffer = await getBuffer(ini.result.watermark)
    Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: `Success By : ${ownername}`})
  break
  case 'mediafire':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply('Masukkan link mediafire')
    if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
    reply(mess.wait)
    teks = args.join(' ')
    res = await mediafireDl(teks)
    result = `_*MediaFire*_ 🌱\n\n`
    result += `Data Berhasil Didapatkan!\n\n`
    result += `📌 Nama : ${res[0].nama}\n`
    result += `✉️ Ukuran : ${res[0].size}\n`
    result += `🔗 Link : ${res[0].link}\n\n`
    result += `_Tunggu Proses Upload Media_`
    reply(result)
    sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol})
  break
    //Fitur Search
  case 'pinterest':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!c) return reply('yg mau di cari apa?')
    reply(mess.wait) 
    pinterest(`${c}`).then( data => {
    const amsulah = data.result
    const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
    sendMediaURL (from ,pimterest , `_*Result Dari*_ : ${c} 🌱`)
    })   
  break
  case 'liriklagu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!c) return reply('yg mau di cari apa?')
    reply(mess.wait) 
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/music/liriklagu?apikey=${ryukey}&query=${c}`) 
    reply(`${get.result}`)
  break
  case 'chordlagu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!c) return reply('yg mau di cari apa?')
    reply(mess.wait) 
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/music/chordlagu?apikey=${ryukey}&lagu=${c}`) 
    reply(`${get.result.result}`) 
  break
  case 'ssweb':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length == 0) return reply(`Example: ${prefix}ssweb https://api-ryubotz.herokuapp.com/docs`)
    reply(mess.wait) 
    anu = args.join(" ") 
    get = await getBuffer(`https://hadi-api.herokuapp.com/api/ssweb?url=${anu}&device=desktop&full=off`) 
    Ryuu.sendMessage(from, get, image, { quoted: ftrol})
   break
 case 'tiktoksearch':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!q) return reply('Apa Yang Pengen Di Cari?')
    reply(mess.wait) 
    get = await fetchJson(`https://api.zacros.my.id/search/tiktok?query=${q}`)
    tod = await getBuffer(get.result.video) 
    Ryuu.sendMessage(from, tod, video, {quoted: ftrol, caption: `💬 *Username* : ${get.result.username}\n📝 *Caption* :\n ${get.result.caption}\n👍 *Like* : ${get.result.likes}\n💻 *Comment* : ${get.result.comment}\n🔗 *Share* : ${get.result.share}`}) 
  break
  case 'ghstalk':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!q) return reply('Masukan Username!') 
    reply(mess.wait) 
    get = await fetchJson(`https://api-ryubotz.herokuapp.com/api/githubstalk?username=${q}&apikey=RyuBotz`) 
    ngen = await getBuffer(`${get.result.avatar}`) 
    Ryuu.sendMessage(from, ngen, image, { quoted: ftrol, caption: `*GITHUB STALK 🔎*\n\n💬 *Username* : ${q}\n👤 *Bio* : ${get.result.bio}\n✉️ *email* : ${get.result.email}\n👥 *public repo* : ${get.result.public_repo}\n🌱 *public gists* : ${get.result.public_gists}\n🎀 *Follower* : ${get.result.follower}\n🧸 *Following* : ${get.result.following}\n💻 *Type* : ${get.result.type}`})
  break
  case 'igstalk':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!q) return reply('Masukan Username!') 
    reply(mess.wait) 
    data = await fetchJson(`https://hardianto.xyz/api/igstalk?username=${q}&apikey=hardianto`) 
    tod = await getBuffer(data.thumbnail) 
    Ryuu.sendMessage(from, tod, image, {quoted: ftrol, caption: `*INSTAGRAM STALK 🔎*\n\n👤Username : ${data.username}\n📛 Full Name : ${data.fullname}\n✅ Verified : ${data.verified}\n👥 Followers : ${data.followers}\n🫂 Following : ${data.follow}\n🗣️ Kategori : ${data.category}`}) 
  break
  case 'searchgc':  
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!q) return reply('Masukan Nama Group!') 
    reply(mess.wait) 
    get = await fetchJson(`https://api.violetics.pw/api/search/group-whatsapp?apikey=beta&query=${q}`) 
    for (let i of get.result) {
	teks += `📛 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n\n`
	}
	reply(teks.trim()) 
  break
 
    //Fitur CMD
  case 'addcmd': 
  case 'setcmd':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    if (isQuotedSticker) {
    if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
    var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
    addCmd(kodenya, c)
    reply("Done Bwang")
    } else {
    reply('tag stickenya')
    }
  break
  case 'delcmd':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
    var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
    scommand.splice(getCommandPosition(kodenya), 1)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
    reply("Done Bwang")
  break
    case 'listcmd':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
    let cemde = [];
    for (let i of scommand) {
    cemde.push(i.id)
    teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
    }
    reply(teksnyee)
  break
  //Fitur upsw
  case 'upswteks':
    if (isBanned) return reply('Kamu ke banned')
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    if (args.length < 1) return reply('Teksnya?')
    teks = body.slice(10)
    Ryuu.sendMessage('status@broadcast', teks, MessageType.text)
    reply(`Sukses upload status:\n${teks}`)
  break
  case 'upswlokasi':
    if (isBanned) return reply('Kamu ke banned')
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
    if (args.length < 1) return reply('Teksnya?')
    teks = body.slice(12)
    Ryuu.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
    reply(`Sukses upload lokasi:\n${teks}`)
  break
  case 'upswsticker':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    if (!isQuotedSticker) return reply('Reply stikernya!')
    if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
    const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
    buff = await Ryuu.downloadMediaMessage(encmedia)
    Ryuu.sendMessage('status@broadcast', buff, sticker)
    }
    reply(`Sukses upload sticker`)
  break
  case 'upswaudio':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    if (!isQuotedAudio) return reply('Reply audionya!')
    if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
    const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
    buff = await Ryuu.downloadMediaMessage(encmedia)
    Ryuu.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
    }
    reply(`Sukses upload audio`)
  break
  case 'upswvoice':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
    if (!isQuotedAudio) return reply('Reply audionya!')
    if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
    const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
    buff = await Ryuu.downloadMediaMessage(encmedia)
    Ryuu.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
    }
    reply(`Sukses upload voice`)
  break
  case 'upswvideo':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    var konti = body.slice(11)
    reply(mess.wait)
    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    var mediap = await Ryuu.downloadAndSaveMediaMessage(enmediap)
    const buffer3 = fs.readFileSync(mediap)
    Ryuu.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
    reply(`Sukses upload video:\n${konti}`)
  break
  case 'upswgif':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    var konti = body.slice(7)
    reply(mess.wait)
    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(enmedia)
    const buffer6 = fs.readFileSync(media)
    Ryuu.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
    reply(`Sukses upload gif:\n${konti}`)
  break
  case 'upswimage':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
    var teksyy = body.slice(11)
    reply(mess.wait)
    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await Ryuu.downloadAndSaveMediaMessage(enmedia)
    buffer = fs.readFileSync(media)
    Ryuu.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
    reply(`Sukses upload image:\n${teksyy}`)
  break
//Fitur Store
  case 'pay':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    reply(`*${tampilUcapan} ${pushname}*\n\n_*Pilih Salah Satu Untuk Melakukan TopUp*_\n\n*Gopay* : ${gopay}\n*Dana* : ${dana}\n*Ovo* : ${ovo}\n*Pulsa* : ${pulsa}\n\n_*Jangan Lupa Sertakan Bukti Ke Owner*_ <3`) 
  break
  case 'mobilelegend': case 'ml':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    capti =`*Ryuuka Store*
   
PROSES 1-60Mnt Max 1X24 Jam  
OPEN 08.00-21.00  
FORMAT ID  
   
_*List TopUp MobileLegends*_
  
86  DM = 18.500
172  DM = 37.500
257  DM = 55.600
344  DM = 73.400
429  DM = 92.300
514  DM = 112.400
706 DM = 145.100
878 DM = 182.200
963 DM = 198.600
1412 DM = 288.200
2195 DM = 426.200
3688 DM = 708.100
4394 DM = 848.600
5532 DM = 1.065.000
9288 DM = 1.768.100
9926 DM = 1.913.600
14820 DM = 2.834.100
18076 DM = 3 466.300
 
SL/TW = 122.000
STARTJT B = 270.500
 
*Jika ingin memesan chat owner*  
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
    but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
    sendButton(from, capti, `Store ${ownername}`, but)
  break
  case 'aov':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    capti =`*Ryuuka Store*
   
PROSES 1-60Mnt Max 1X24 Jam  
OPEN 08.00-21.00  
FORMAT ID  
   
_*List TopUp Aov*_
  
40VC = Rp 10,000.00  
90VC = Rp 20,000.00  
130VC = Rp 30,000.00  
180VC = Rp 40,000.00  
230VC = Rp 50,000.00  
470VC = Rp 100,000.00  
950VC = Rp 195,000.00  
1.430VC = Rp 290,000.00  
2.390VC = Rp 485,000.00  
4.800VC = Rp 970,000.00  
24.050VC = Rp 4.845,000.00  
48.200VC = Rp 9.685,000.00  

Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
    but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
    sendButton(from, capti, `Store ${ownername}`, but)
  break
  case 'codm': case 'cod':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    capti = `*Ryuuka Store*
    
PROSES 1-60Mnt 1X24 Jam   
OPEN 10.00-19.00   
FORMAT ID   
    
_*List TopUp Codm*_

53CP = Rp 10,000.00
112CP = Rp 20,000.00
278CP = Rp 50,000.00
581CP = Rp 98,000.00
1.268CP = Rp 195,000.00
1.901CP = Rp 290,000.00
3.300CP = Rp 480,000.00
7.128CP = Rp 950,000.00

Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
    but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
    sendButton(from, capti, `Store ${ownername}`, but)
  break
  case 'freefire': case 'ff':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    capti = `*Ryuuka Store*
    
PROSES 1-180Mnt 1X24 Jam   
OPEN 10.00-19.00   
FORMAT ID   

_*List TopUp FreeFire*_
    
70 DM = 9.250
100 DM = 13.500
140 DM = 18.600
150 DM = 20.400
200 DM = 26.900
210 DM = 28.400
280 DM = 37.100
355 DM = 46.600
400 DM = 52.600
500 DM = 65.600
635 DM = 82.800
720 DM = 91.400
1000 DM = 118.600
1075 DM = 137.600
1440 DM = 182.600
9926 DM = 248.600
14820 DM = 340.100
18076 DM = 497.600
Member M = 28.000 
    
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
    but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
    sendButton(from, capti, `Store ${ownername}`, but)
  break
  case 'lol':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    capti = `*Ryuuka Store*
    
PROSES 1-180Mnt 1X24 Jam   
OPEN 10.00-19.00   
FORMAT ID   
    
_*List TopUp LoL*_
   
125WC = RP 18,000.00   
420WC = RP 55,000.00   
700WC = RP 85,000.00   
1.375WC = RP 155,000.00   
2.400WC = RP 250,000.00   
4,000.00WC = RP 395,000.00   
8.150WC = RP 785,000.00   
    
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
    but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
    sendButton(from, capti, `Store ${ownername}`, but)
  break
  case 'sausage':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    capti = `*Ryuuka Store*
 
PROSES 1-60Mnt Max 1X24 Jam  
OPEN 09.00-21.00  
FORMAT ID  
   
_*List TopUp Sausage*_ 
 
60C = RP 16,000.00  
180C = RP 45,000.00  
316C = RP 68,000.00  
718C = RP 135,000.00  
1.368C = RP 265,000.00  
2.118C = RP 418,000.00  
3.548C = RP 682,000.00  
7.096C = RP 1.305,000.00  
   
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
    but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
    sendButton(from, capti, `Store ${ownername}`, but)
  break
  case 'valorant': case 'valo':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    capti = `*Ryuuka Store*
  
PROSES 1-180Mnt Max 1X24 Jam  
OPEN 10.00-19.00  
FORMAT ID  
   
_*List TopUp Valorant*_
  
125VP = 18,000.00  
420VP = 55,000.00  
700VP = 85,000.00  
1.375VP = 155,000.00  
2.400VP = 250,000.00  
4,000.00VP = 395,000.00  
8.150VP = 785,000.00  
   
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
    but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
    sendButton(from, capti, `Store ${ownername}`, but)
  break

  //Fitur Rpg
  //Open Create
  case 'buylimit':{
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)  
    payout = body.slice(10)
    let ane = 150 * payout
    if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
    kurangBalance(sender, ane, balance)
    giveLimit(sender, parseInt(args[0]), limit)
    reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
    }
  break
  case 'event':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    pp = 'on or off?'
    but = [
    { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
    { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
    sendButton(from, pp, 'Event Group', but, ftrol) 
     break
  case 'epen':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isGroup) return reply(mess.only.group)
    if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
    if (args.length < 1) return reply('Salah! 1 Untuk Mengaktifkan 2 Untuk Mengnonaktifkan.')
    if (Number(args[0]) === 1) {
    if (isEventon) return reply('_*Sudah Aktif*_ 🙏')
    event.push(from)
    fs.writeFileSync('./database/data/event.json', JSON.stringify(event))
    reply('🌱 _*Success Aktifkan Bosku*_ 🌱')
    } else if (Number(args[0]) === 0) {
    event.splice(from, 1)
    fs.writeFileSync('./database/data/event.json', JSON.stringify(event))
    reply('🌱 _*Success Nonaktifkan Bosku*_ 🌱')
    } else {
    reply('eeee')
    }
  break
case 'profile':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    checkProfile(sender) 
  break
  case 'leaderboard':
  case 'lb':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isGroup) return reply(ind.groupo())
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    let leaderboardlvl = '🏆 _*Top Leaderboard*_ 🏆\n\n'
    let nom = 0
    try {
    for (let i = 0; i < 10; i++) {
    nom++
    leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n│✾ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
    }
    await reply(leaderboardlvl)
    } catch (err) {
    console.error(err)
    await reply(`minimal 10 user untuk bisa mengakses database`)
    }
  break
  case 'sellhewan':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isGroup) return reply(mess.only.group)
    if (!isPetualang) return reply(mess.only.player)
    if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
    jmlh = body.slice(10)
    rp = 5 * jmlh
    if (getAnimal(sender) < jmlh) return reply(`hewan Kamu Tidak Cukup`)
    sellAnimal(sender, jmlh, balance)
    addBalance(sender, rp, balance) 
    capti = monospace(`╭─ 🛒 Pasar\n│✾ Penjual : ${pushname}\n│✾ Pembeli : Admin\n│✾ Harga/hewan : 5\n│✾ Status : Sukses\n│✾ Sisa Ikan : ${getFish(sender)}\n│✾ Hasil Penjualan : $${rp}\n╰───`)
    but = [{ buttonId: '!profile', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
    sendButton(from, capti, 'sell hewan', but)
  break
  case 'sellikan':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isGroup) return reply(mess.only.group)
    if (!isPetualang) return reply(mess.only.player)
    if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
    jmlh = body.slice(10)
    rp = 5 * jmlh
    if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
    sellFish(sender, jmlh, balance)
    addBalance(sender, rp, balance) 
    capti = monospace(`╭─ 🛒 Pasar\n│✾ Penjual : ${pushname}\n│✾ Pembeli : Admin\n│✾ Harga/Ikan : 5\n│✾ Status : Sukses\n│✾ Sisa Ikan : ${getFish(sender)}\n│✾ Hasil Penjualan : $${rp}\n╰───`)
    but = [{ buttonId: '!profile', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
    sendButton(from, capti, 'sell ikan', but)
  break
  case 'sellbesi':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isGroup) return reply(mess.only.group)
    if (!isPetualang) return reply(mess.only.player)
    if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
    jmlh = body.slice(10)
    rp = 10 * jmlh
    if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
    sellBesi(sender, jmlh, balance)
    addBalance(sender, rp, balance) 
    capti = monospace(`╭─ 🛒 Pasar\n│✾ Penjual : ${pushname}\n│✾ Pembeli : Admin\n│✾ Harga/Besi : 10\n│✾ Status : Sukses\n│✾ Sisa Besi : ${getBesi(sender)}\n│✾ Hasil Penjualan : $${rp}\n╰───`)
    but = [{ buttonId: '!profile', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
    sendButton(from, capti, 'sell besi', but)
  break
  case 'sellemas':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isGroup) return reply(mess.only.group)
    if (!isPetualang) return reply(mess.only.player)
    if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
    jmlh = body.slice(10)
    rp = 25 * jmlh
    if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
    sellEmas(sender, jmlh, balance)
    addBalance(sender, rp, balance) 
    capti = monospace(`╭─ 🛒 Pasar\n│✾ Penjual : ${pushname}\n│✾ Pembeli : Admin\n│✾ Harga/Emas : 25\n│✾ Status : Sukses\n│✾ Sisa Emas : ${getEmas(sender)}\n│✾ Hasil Penjualan : $${rp}\n╰───`)
    but = [{ buttonId: '!profile', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
    sendButton(from, capti, 'sell emas', but)
  break 
  case 'selldiamond':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (!isGroup) return reply(mess.only.group)
    if (!isPetualang) return reply(mess.only.player)
    if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
    ttl = body.slice(13)
    var etoo = 75 * ttl
    if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
    sellDm(sender, ttl)
    addBalance(sender, etoo, balance) 
    capti = monospace(`╭─ 🛒 Pasar\n│✾ Penjual : ${pushname}\n│✾ Pembeli : Admin\n│✾ Harga/Dm : 75\n│✾ Status : Sukses\n│✾ Sisa Diamond : ${getDm(sender)}\n│✾ Hasil Penjualan : $${etoo}\n╰───`)
    but = [{ buttonId: '!profile', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
    sendButton(from, capti, 'sell diamond', but)
  break
  case 'mancing':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    ikannya = ikan[Math.floor(Math.random() * ikan.length)]
    xp = Math.ceil(Math.random() * 350)
    coin = randomNomor(50)
    common = randomNomor(5) 
    ditangkap = Math.ceil(Math.random() * 50)
    cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
    setTimeout( () => {
    caption = monospace(`╭─ ⚓ Memancing\n│✾ Tangkapan : ${ikannya}\n│✾ Total Dapat : ${ditangkap} Ikan\n│✾ MONEY : $${coin}\n│✾ COMMON : ${common}\n│✾ EXP : ${xp}Xp\n╰───`)
    but = [
    { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
    { buttonId: '!profile', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
    ]
    sendButImage(from, caption, 'Memancing', cing, but, {quoted: mek})
    }, 6000)
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
    }, 5000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, '🎣Meanarik kail. . .', text) 
    }, 3000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, '🎣Mulai memancing. . .', text) 
    }, 1500) // 1000 = 1s,
    addFish(sender, ditangkap)
    addLevelingXp(sender, xp)
    addCommon(sender, common) 
    addBalance(sender, coin, balance) 
    limitAdd(sender, limit)
  break
  case 'berburu':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    hewanya = hewan[Math.floor(Math.random() * hewan.length)]
    xp = Math.ceil(Math.random() * 350)
    coin = randomNomor(50)
    ditangkap = Math.ceil(Math.random() * 50)
    common = randomNomor(5) 
    cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
    setTimeout( () => {
    caption = monospace(`╭─ 🕵 Berburu\n│✾ Tangkapan : ${hewanya}\n│✾ Total Dapat : ${ditangkap} hewan\n│✾ MONEY : $${coin}\n│✾ COMMON : ${common}\n│✾ EXP : ${xp}Xp\n╰───`)
    but = [
    { buttonId: '!berburu', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
    { buttonId: '!profile', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
    ]
    sendButImage(from, caption, 'Berburu', cing, but, {quoted: mek})
    }, 6000)
    setTimeout( () => {
    Ryuu.sendMessage(from, '🕵💸 Berhasil Mendapatkan Hewan. . .', text) 
    }, 5000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, '⚔️ Mulai Menyerang. . .', text) 
    }, 3000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, '⚔️ Mulai memburu. . .', text) 
    }, 1500) // 1000 = 1s,
    addAnimal(sender, ditangkap)
    addLevelingXp(sender, xp)
    addCommon(sender, common) 
    addBalance(sender, coin, balance) 
    limitAdd(sender, limit)
  break
  case 'adventure':
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
    const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
    const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
    const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
    anu = fs.readFileSync('./lib/rpg/dungeon.js');
    jsonData = JSON.parse(anu);
    randIndex = Math.floor(Math.random() * jsonData.length);
    randKey = jsonData[randIndex];
    hasm = await getBuffer(randKey.result)  
    const adven = Math.ceil(Math.random() * 1000)
    common = randomNomor(5) 
    const money = Math.ceil(Math.random() * 300)
    setTimeout( () => {
    caption = monospace(`╭─ 💀 DEATH\n│✾ Tempat  ${ad}\n│✾ MONEY : $${money}\n│✾ COMMON : ${common}\n│✾ EXP : ${adven}Xp\n╰───`)
    but = [
    { buttonId: `!profile`, buttonText: { displayText: 'Inventori' }, type: 1 }]
    sendButImage(from, caption, 'Adventure', hasm, but, {quoted: mek})   
    }, 7000)
    setTimeout( () => {
    Ryuu.sendMessage(from, `Awass`, text) 
    }, 5000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
    }, 3000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, `${pushname} sedang bertualang`, text) 
    }, 1500) // 1000 = 1s,
    addLevelingXp(sender, adven)
    addCommon(sender, common) 
    addBalance(sender, money, balance) 
    limitAdd(sender, limit) 
  break
  case 'mining':   
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isGroup) return reply(mess.only.group)
    if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
    if (!isPetualang) return reply(mess.only.player)
    pp = randomNomor(75)
    emas = randomNomor(15)
    dm = randomNomor(3)
    besi = randomNomor(50)
    common = randomNomor(10) 
    done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nCommon : ${common}🎁\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
    addBalance(sender, pp, balance)
    addBesi(sender, besi)
    addEmas(sender, emas)
    addCommon(sender, common) 
    addDm(sender, dm)
    mining = ('Waitt sedang menguli . . .')
    setTimeout( () => {//case by pebri
    but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
    sendButton(from, done, 'Mining', but)
    }, 9000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
    }, 7000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
    }, 4000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
    }, 1500) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, mining, text, {quoted: mek}) 
    }, 0) // 1000 = 1s,
  break
  case 'joinrpg':
    if (!isGroup) return reply(mess.only.group)  
    if (isPetualang) return reply('Kamu sudah menjadi petualang')
    create.push(sender)
    fs.writeFileSync('./database/create.json', JSON.stringify(create))
    _petualang.push(sender)
    fs.writeFileSync('./database/data/inventori.json', JSON.stringify(_petualang))
    capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!\nSilahkan ketik ${prefix}profile`
    Ryuu.sendMessage(from, capt, text, {quoted: mek})
    addCreate(sender)
    checkCreate(sender)
    addInventori(sender)
    addLevelingId(sender)
  break
  //Quest Menu
  case 'killslime':   
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    if (!isGroup) return reply(mess.only.group)
    pp = randomNomor(75)
    emas = randomNomor(15)
    dm = randomNomor(3)
    besi = randomNomor(50)
    common = randomNomor(15) 
    done = monospace(`*Mission Slime Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nCommon : ${common}🎁\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`)
    addBalance(sender, pp, balance)
    addBesi(sender, besi)
    addEmas(sender, emas)
    addDm(sender, dm)
    slime = ('Tunggu! sedang melawan..')
    setTimeout( () => {//cuman ubah beberapa dri case febza
    but = [{ buttonId: `${prefix}profile`, buttonText: { displayText: 'Inventory' }, type: 1 }]
    sendButton(from, done, 'Quest Slime!', but) 
    }, 9000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Selesai quest slime! 💸🥷', text) 
    }, 7000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Melawan 5 🥷️️️', text) 
    }, 4000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Melawan 1 🥷️️', text) 
    }, 1500) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, slime, text, {quoted: ftrol}) 
    }, 0) // 1000 = 1s,
  break
  case 'killgoblin':   
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    if (!isGroup) return reply(mess.only.group)
    pp = randomNomor(500)
    emas = randomNomor(65)
    dm = randomNomor(5)
    besi = randomNomor(90)
    legendary = randomNomor(5) 
    done = monospace(`*Mission Goblin Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nLegendary : ${legendary}🎁\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`)
    addBalance(sender, pp, balance)
    addBesi(sender, besi)
    addEmas(sender, emas)
    addDm(sender, dm)
    addLegendary(sender, legendary) 
    goblin = ('Tunggu! sedang melawan..')
    setTimeout( () => {//cuman ubah beberapa dri case febza
    but = [{ buttonId: `${prefix}profile`, buttonText: { displayText: 'Inventory' }, type: 1 }]
    sendButton(from, done, 'Quest Goblin!', but)
    }, 9000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Selesai quest goblin! 💸🥷', text) 
    }, 7000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Melawan 5 🥷️️️', text) 
    }, 4000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Melawan 1 🥷️️', text) 
    }, 1500) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, goblin, text, {quoted: ftrol}) 
    }, 0) // 1000 = 1s,
  break
  case 'killdevil':   
    if (!isGroup) return reply(mess.only.group)
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    pp = randomNomor(600)
    emas = randomNomor(70)
    dm = randomNomor(6)
    besi = randomNomor(95)
    legendary = randomNomor(10) 
    done = monospace(`*Mission Devil Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nLegendary : ${legendary}🎁\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`)
    addBalance(sender, pp, balance)
    addBesi(sender, besi)
    addEmas(sender, emas)
    addDm(sender, dm)
    addLegendary(sender, legendary) 
    goblin = ('Tunggu! sedang melawan..')
    setTimeout( () => {//cuman ubah beberapa dri case febza
    but = [{ buttonId: `${prefix}profile`, buttonText: { displayText: 'Inventory' }, type: 1 }]
    sendButton(from, done, 'Quest Devil!', but)
    }, 11000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Selesai quest devil! 💸🥷', text) 
    }, 10000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Aku Di Bantu Oleh Team! 🥷️️️', text) 
    }, 8000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Tidak Aku Lengah! 🥷️️️', text) 
    }, 6000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Devil 5 🥷️️️', text) 
    }, 4000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Devil 1 🥷️️', text) 
    }, 1500) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, goblin, text, {quoted: ftrol}) 
    }, 0) // 1000 = 1s,
  break
  case 'killbehamoth':   
    if (!isGroup) return reply(mess.only.group)
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    pp = randomNomor(600)
    emas = randomNomor(75)
    dm = randomNomor(7)
    besi = randomNomor(95)
    legendary = randomNomor(15) 
    done = monospace(`*Mission Behamont Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nLegendary : ${legendary}🎁\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`)
    addBalance(sender, pp, balance)
    addBesi(sender, besi)
    addEmas(sender, emas)
    addDm(sender, dm)
    addLegendary(sender, legendary) 
    goblin = ('Tunggu! sedang melawan..')
    setTimeout( () => {//cuman ubah beberapa dri case febza
    but = [{ buttonId: `${prefix}profile`, buttonText: { displayText: 'Inventory' }, type: 1 }]
    sendButton(from, done, 'Quest Behamont!', but)
    }, 11000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Selesai quest behamont! 💸🥷', text) 
    }, 10000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Aku Di Bantu Oleh Team! 🥷️️️', text) 
    }, 8000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Tidak Aku Lengah! 🥷️️️', text) 
    }, 6000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Behamont 5 🥷️️️', text) 
    }, 4000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Behamont 1 🥷️️', text) 
    }, 1500) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, goblin, text, {quoted: ftrol}) 
    }, 0) // 1000 = 1s,
  break
  case 'killdemon':   
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (!isGroup) return reply(mess.only.group)
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    pp = randomNomor(900)
    emas = randomNomor(90)
    dm = randomNomor(10)
    besi = randomNomor(120)
    mythic = randomNomor(3) 
    done = monospace(`*Mission Demon Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nMythic : ${mythic}🎁\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`)
    addBalance(sender, pp, balance)
    addBesi(sender, besi)
    addEmas(sender, emas)
    addDm(sender, dm)
    addMythic(sender, mythic) 
    goblin = ('Tunggu! sedang melawan..')
    setTimeout( () => {//cuman ubah beberapa dri case febza
    but = [{ buttonId: `${prefix}profile`, buttonText: { displayText: 'Inventory' }, type: 1 }]
    sendButton(from, done, 'Quest Demon!', but)
    }, 11000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Selesai quest demon! 💸🥷', text) 
    }, 10000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Aku Di Bantu Oleh Team! 🥷️️️', text) 
    }, 8000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Tidak Aku Lengah! 🥷️️️', text) 
    }, 6000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Demon 5 🥷️️️', text) 
    }, 4000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Demon 1 🥷️️', text) 
    }, 1500) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, goblin, text, {quoted: ftrol}) 
    }, 0) // 1000 = 1s,
  break
  case 'killdemonking':   
    if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
    if (!isGroup) return reply(mess.only.group)
    if (isBanned) return reply('Kamu Sudah Di banned!')
    if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
    if (!isPetualang) return reply(mess.only.player)
    pp = randomNomor(1999)
    emas = randomNomor(99)
    dm = randomNomor(99)
    besi = randomNomor(99)
    mythic = randomNomor(9) 
    done = monospace(`*Mission Demonking Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nMythic : ${mythic}🎁\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`)
    addBalance(sender, pp, balance)
    addBesi(sender, besi)
    addEmas(sender, emas)
    addDm(sender, dm)
    addMythic(sender, mythic) 
    goblin = ('Tunggu! sedang melawan..')
    setTimeout( () => {//cuman ubah beberapa dri case febza
    but = [{ buttonId: `${prefix}profile`, buttonText: { displayText: 'Inventory' }, type: 1 }]
    sendButton(from, done, 'Quest Demonking!', but)
    }, 11000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Selesai quest demonking! 💸🥷', text) 
    }, 10000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Aku Di Bantu Oleh Team! 🥷️️️', text) 
    }, 8000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Tidak Aku Lengah! 🥷️️️', text) 
    }, 6000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Demonking 5 🥷️️️', text) 
    }, 4000) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, 'Berhasil Demonking 1 🥷️️', text) 
    }, 1500) // 1000 = 1s,
    setTimeout( () => {
    Ryuu.sendMessage(from, goblin, text, {quoted: ftrol}) 
    }, 0) // 1000 = 1s,
  break
  
      //Akhir Jangan Di Hapus Ntar Error
  default: 
    //TTT
    if (isTTT && isPlayer2){
    if (budy.startsWith('Y')){
    tto = ky_ttt.filter(ghg => ghg.id.includes(from))
    tty = tto[0]
    angka = tto[0].angka
    ucapan = 
    `🎳 _*Game Tictactoe*_ 🎲

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}`
    Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
    }
    if (budy.startsWith('N')){
    tto = ky_ttt.filter(ghg => ghg.id.includes(from))
    tty = tto[0]
    naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
    ky_ttt = naa
    Ryuu.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
    }
    }

    if (isTTT && isPlayer1){
    nuber = parseInt(budy)
    if (isNaN(nuber)) return
    if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
    main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
    if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
    if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
    s = '❎'
    main[0].angka[nuber] = s
    main[0].gilir = main[0].player1
    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
    ky_ttt = naa
    pop = main[0]
    ky_ttt.push(pop)
    tto = ky_ttt.filter(hgh => hgh.id.includes(from))
    tty = tto[0]
    angka = tto[0].angka
    ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

    ucapmenang = () => {
    ucapan1 = 
    `🎳 _*Result Game Tictactoe*_ 🎲

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
    ucapan2 = `🎳 _*Result Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
    Ryuu.sendMessage(from, ucapan1, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1]}})
    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
    return ky_ttt = naa
    }

    if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
    if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
    if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
    if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
    if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
    if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
    if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
    if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
    if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
    ttt.includes('5️⃣') && !
    ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
    ucapan1 = `🎳 _*Result Game Tictactoe*_ 🎲

*_Permainan Seri 😁👌_*`
    ucapan2 = `🎳 _*Result Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
    reply(ucapan1)
    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
    return ky_ttt = naa
    }
    ucapan = `🎳 _*Game Tictactoe*_ 🎲

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
    Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
    }
    if (isTTT && isPlayer2){
    nuber = parseInt(budy)
    if (isNaN(nuber)) return
    if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
    main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
    if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
    if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
    s = '⭕'
    main[0].angka[nuber] = s
    main[0].gilir = main[0].player2
    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
    ky_ttt = naa
    pop = main[0]
    ky_ttt.push(pop)
    tto = ky_ttt.filter(hgh => hgh.id.includes(from))
    tty = tto[0]
    angka = tto[0].angka
    ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

    ucapmenang = () => {
    ucapan1 = `🎳 _*Result Game Tictactoe*_ 🎲

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
    ucapan2 = `🎳 _*Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
    Ryuu.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
    return ky_ttt = naa
    }

    if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
    if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
    if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
    if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
    if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
    if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
    if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
    if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
    if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
    ttt.includes('5️⃣') && !
    ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
    ucapan1 = `🎳 _*Result Game Tictactoe*_ 🎲

*_Permainan Seri🗿👌*`
    ucapan2 = `🎳 _*Result Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
    reply(ucapan1)
    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
    return ky_ttt = naa
    }
    ucapan = `🎳 _*Game Tictactoe*_ 🎲

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎

Giliran = @${tty.player1.split('@')[0]}

${ttt}`
    Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
    } else {
    }
    if (isOwner) {
    if (budy.startsWith('$')){
    if (!mek.key.fromMe && !isOwner) return
    qur = budy.slice(2)
    exec(qur, (err, stdout) => {
    if (err) return reply(`${err}`)
    if (stdout) {
    reply(stdout)
    }
    })
    }
    if (isOwner) {
    if (budy.startsWith('>')) {
    console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
    try {
    let evaled = await eval(budy.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    reply(`${evaled}`)
    } catch (err) {
    reply(`${err}`)
    }
    }
    }
    }
    }
    } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
    console.log('Error : %s', color(e, 'red'))
    }
    // console.log(e)
    }
    }
    