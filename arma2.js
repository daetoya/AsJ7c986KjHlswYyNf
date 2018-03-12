const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const client = new SteamUser();

const logOnOptions = {
  accountName: 'zloiskif',
  password: 'lazaruyk16',
  twoFactorCode: SteamTotp.generateAuthCode('DR+WLs4qa7wn6wtSVpa\/nlDhBSM=')
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  client.gamesPlayed([224580,33930]);
});
