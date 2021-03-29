var casper = require('casper').create();
var gain;
var skieur;
var ski;
var fond;
var parking;
var resto;
var hotel;
var bus;

var skieurpos;
var skipos;
var fondpos;
var parkingpos;
var buspos;
var restopos;
var hotelpos;



casper.start('https://g-ski.com/',function(){
    this.echo(this.getTitle());
});

casper.waitForResource("https://g-ski.com/",function() {
    this.fillSelectors('form[action="auth.php"]', {
        'input[name="login"]' : '7Low',
        'input[name="passwd"]': 'mon mdp tu l\'aura pas'
    }, true);

});
casper.then(function (){
    this.capture('google.png');
})
casper.then(function (){
    this.echo(this.fetchText('.li-chiffres-db'));
    gain = this.fetchText('.li-chiffres-db');
    //gain = gain.split(' ');

    skieurpos = [gain.indexOf(':' ), gain.indexOf('Gains')];
    skieur = gain.slice(skieurpos[0]+1, skieurpos[1]);
    skieur = skieur.replace(/ /g, "")

    skipos = [gain.indexOf(':', skieurpos[0]+1  ), gain.indexOf('€', skieurpos[1]+1)];
    ski = gain.slice(skipos[0]+1, skipos[1]);
    ski = ski.replace(/ /g, "")

    fondpos = [gain.indexOf(':', skipos[0]+1  ), gain.indexOf('€', skipos[1]+1)];
    fond = gain.slice(fondpos[0]+1, fondpos[1]);
    fond = fond.replace(/ /g, "")

    parkingpos = [gain.indexOf(':', fondpos[0]+1  ), gain.indexOf('€', fondpos[1]+1)];
    parking = gain.slice(parkingpos[0]+1, parkingpos[1]);
    parking = parking.replace(/ /g, "")

    buspos = [gain.indexOf(':', parkingpos[0]+1  ), gain.indexOf('€', parkingpos[1]+1)];
    bus = gain.slice(buspos[0]+1, buspos[1]);
    bus = bus.replace(/ /g, "")

    restopos = [gain.indexOf(':', buspos[0]+1  ), gain.indexOf('€', buspos[1]+1)];
    resto = gain.slice(restopos[0]+1, restopos[1]);
    resto = resto.replace(/ /g, "")

    hotelpos = [gain.indexOf(':', restopos[0]+1  ), gain.indexOf('€', restopos[1]+1)];
    hotel = gain.slice(hotelpos[0]+1, hotelpos[1]);
    hotel = hotel.replace(/ /g, "")


    console.log('skieur' + skieur + 'ski'+ ski + 'fond' + fond + 'parking' + parking + 'bus' + bus + 'resto' + resto + 'hotel' + hotel);

})
casper.run();

