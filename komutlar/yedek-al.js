const Discord = require("discord.js")
const backup = require("discord-backup"); //npm i discord-backup - Yazarak Backup Modülünü Yükleyin

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<a:adikkat:974006925249376338>・Yedek Komutlarını Kullanabilmek İçin ``Yönetici`` İzni Gerekiyor");
        }

 message.inlineReply('<a:ayukleniyor:976807798123933747>・Yedek Oluşturuluyor...').then(msg => msg.delete({ timeout: 5000 }))
  backup.create(message.guild, {
         jsonBeautify: true
        }).then((backupData) => {
            message.author.send("<a:atik:981936970710286436>・Yedek Başarıyla Oluşturuldu! Alınan Yedeği Yüklemek İçin: \n <a:abuyutec:976511062943866940>・`yedek-yükle "+backupData.id+"`");
            message.inlineReply("<a:atik:981936970710286436>・Yedek Başarıyla Oluşturuldu. DM Kutunu Kontrol Et");
       });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedekle" 
}










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here