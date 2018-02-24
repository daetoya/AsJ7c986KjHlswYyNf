const SteamUser = require('steam-user');
const client = new SteamUser();
const SteamTotp = require('steam-totp');

const logOnOptions = {
  accountName: 'zloiskif',
  password: 'lazaruyk16'
  SteamTotp.generateAuthCode('DR=WLs4qa7wn6wtSVpa\/nlDhBSM=')
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  client.gamesPlayed([33930,107410,224580]);
});
