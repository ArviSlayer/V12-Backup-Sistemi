const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<a:adikkat:974006925249376338>・Yedek Komutlarını Kullanabilmek İçin ``Yönetici`` İzni Gerekiyor");
        }

let backupID = args[1];
        if(!backupID){
            return message.inlineReply("<a:adikkat:974006925249376338>・Yedeği Silmek İçin Bir Yedek ID'si Gir");
        }
backup.remove(backupID).then(async () => {
message.inlineReply("<a:atik:981936970710286436>・Yedek Başarıyla Silindi.") 
}).catch((err) => {
                    return message.inlineReply("<a:adikkat:974006925249376338>・Yanıt Verilmediği İçin İşlem İptal Edildi");
                });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-sil" 
}  










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here