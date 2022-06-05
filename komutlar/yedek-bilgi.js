const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<a:adikkat:974006925249376338>・Yedek Komutlarını Kullanabilmek İçin ``Yönetici`` İzni Gerekiyor");
        }

           let backupID = args[1];
       if(!backupID){
            return message.inlineReply("<a:adikkat:974006925249376338>・Yedeğin Bilgisini Almak İçin ``Yedek ID``si Girmen Gerek");
        }
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
               .setAuthor("SUNUCUNUZUN ADI・Yedekleme Bilgisi")
                .addField("<a:aunlem:972595953070669855>・Yedek ID:", backupInfos.id, false)
               .addField("<a:aunlem:972595953070669855>・Sunucu ID:", backupInfos.data.guildID, false)
                .addField("<a:aunlem:972595953070669855>・Yedek Boyutu:", `${backupInfos.size} kb`, false)
                .addField("<a:aunlem:972595953070669855>・Yedeğin Oluşturulma Tarihi:", formatedDate, false)
               .setColor("GREEN");
           message.channel.send(embed);
        }).catch((err) => {
            return message.inlineReply("<a:hatali:972595953448144997>・`"+backupID+"` ID'li Bir Yedek Bulamadım.");
       });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-bilgi" 
} 










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here