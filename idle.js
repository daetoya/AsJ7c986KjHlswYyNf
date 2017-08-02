const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');

const client = new SteamUser();
const logOnOptions = {
	accountName: '__lonik__',
	password: 'lonikus23145'
	twoFactorCode: SteamTotp.generateAuthCode('Ooy0jTaQXRDiYZqmPbwE7F2EHYM')
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('Logged into Steam');

	client.setPersona(SteamUser.Steam.EPersonaState.Online);
	client.gamesPlayed([233270,46500,250620,331510,104200,409720,343560,220740,219640,440760,300,91310,383150,216250,96100,238010,70000,219740,239820,265330,241910,203140,283390,255300,364270,218640,266010,515040,270210,286690,287390,294230,287980,296710,295790,298520,261570,315430,232770,233470,40300,206420,359050,252330,282140,253650,344910,40800,233720,46510,445110,347560,113200,72850,291010,204080,96000]);
});
