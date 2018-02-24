const SteamUser = require('steam-user');
const client = new SteamUser();

const logOnOptions = {
  accountName: 'zloiskif',
  password: 'lazaruyk16'
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  client.gamesPlayed(33930,107410,224580);
});
