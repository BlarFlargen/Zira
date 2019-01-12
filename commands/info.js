'use strict';

// eslint-disable-next-line no-unused-vars
exports.Run = async function Run(caller, command, guild, lang) {
  const changelog = await caller.utils.getChangelog();
  const embed = {
    color: caller.color.blue,
    fields: [
      {
        name: lang.commands.info.fields[0],
        value: changelog.version,
        inline: true,
      },
      {
        name: lang.commands.info.fields[1],
        value: '[ZiraDiscord/Zira](https://github.com/ZiraDiscord/Zira)',
        inline: true,
      },
      {
        name: lang.commands.info.fields[2],
        value: '[Eris](https://abal.moe/Eris/)',
        inline: true,
      },
      {
        name: lang.commands.info.fields[3],
        value: 'Hazed SPaCEx#2574\nJakeyPrime#0001',
        inline: true,
      },
    ],
    footer: {
      text: `Cluster: ${caller.id} Shard: ${(command.msg.channel.guild) ? command.msg.channel.guild.shard.id : 0} | Uptime: ${caller.utils.getTime(caller.bot.startTime)}`,
    },
  };
  if (changelog.changes) {
    embed.fields.push({
      name: lang.commands.info.fields[4],
      value: changelog.changelog,
    });
  }
  caller.utils.createMessage(command.msg.channel.id, {
    embed,
  });
};

exports.Settings = {
  category: 3,
  command: 'info',
  show: true,
  permissions: [],
  dm: true,
};
