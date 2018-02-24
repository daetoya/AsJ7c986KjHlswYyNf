const SteamUser = require('steam-user');
const client = new SteamUser();
const SteamTotp = require('steam-totp');
var code = SteamTotp.generateAuthCode('DR=WLs4qa7wn6wtSVpa\/nlDhBSM=')

const logOnOptions = {
  accountName: 'zloiskif',
  password: 'lazaruyk16'
  two_Factor_Code: code
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  client.gamesPlayed([33930,107410,224580]);
});
