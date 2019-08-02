const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `m!banned = Dene ve Gör! \nm!avatarım = Avatarınınızı Gösterir. \nm!herkesebendençay = Herkese Çay Alırsınız. \nm!koş = Koşarsınız.\nm!çayiç = Çay İçersiniz. \nm!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nm!çayaşekerat = Çaya Şeker Atarsınız. \nm!yumruh-at = Yumruk Atarsınız. \nm!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nm!sunucuresmi = BOT Sunucunun Resmini Atar. \nm!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nm!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `m!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nm!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nm!unban = İstediğiniz Kişinin Yasağını Açar. \nm!sustur = İstediğiniz Kişiyi Susturur. \nm!oylama = Oylama Açar. \nm!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "m!yardım = BOT Komutlarını Atar. \nm!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nm!ping = BOT Gecikme Süresini Söyler. \nm!davet = BOT Davet Linkini Atar. \nm!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Efe Albayrak** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
