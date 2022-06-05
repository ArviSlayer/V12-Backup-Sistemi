const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<a:adikkat:974006925249376338>・Yedek Komutlarını Kullanabilmek İçin ``Yönetici`` İzni Gerekiyor");
        }

let backupID = args[1];
        if(!backupID){
            return message.inlineReply("<a:adikkat:974006925249376338>・Yedeği Yüklemek İçin Bir Yedek ID'si Gir");
        }
        backup.fetch(backupID).then(async () => {
            message.inlineReply("<:amaviayar:973971617468260442>・Yedek Yüklendiğinde ``Tüm Kanallar, Roller vb.`` Değişecektir \n <a:abuyutec:976511062943866940>・`onayla` Yazarak Onaylayabilirsin"); 
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "onayla"), {
                   max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    return message.inlineReply("<a:adikkat:974006925249376338>・Yanıt Verilmediği İçin İşlem İptal Edildi");
                });
                message.author.send("<a:ayukleniyor:976807798123933747>・Yedek Yükleniyor...");
                backup.load(backupID, message.guild).then(() => {
                   backup.remove(backupID);
               }).catch((err) => {
                    return message.author.send("<a:adikkat:974006925249376338>・Bir Hata oluştu... Hata sebepleri: \n <a:abuyutec:976511062943866940>・Bota Yetki Vermelisin \n <a:abuyutec:976511062943866940>・Botun Rolünü ``En Üste`` Almalısın");
                });
        }).catch((err) => {
            console.log(err);
            return message.inlineReply("<a:adikkat:974006925249376338>・`"+backupID+"` ID'li Bir Yedek Bulunamadı");
        });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-yükle" 
} 










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here