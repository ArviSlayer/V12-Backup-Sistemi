const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<a:adikkat:974006925249376338>・Yedek Komutlarını Kullanabilmek İçin ``Yönetici`` İzni Gerekiyor");
        }

backup.list().then((backups) => {
    const embed = new Discord.MessageEmbed() 
.setDescription(`${backups}`) 
.setColor("RANDOM") 
.setTitle("SUNUCUNUZUN ADI・Yedek Liste")
});

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-liste" 
} 










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here