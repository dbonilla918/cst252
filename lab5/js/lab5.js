
let solarSystem = createSolarSystem();

//object1 - creates the 'Sun'
solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "yellow";
sun.planetRadius = 80;
sun.orbitRadius = 0;

//oject2 - creates 'earth'
sun.newPlanet();
let earth = sun.planets[0];
earth.color = "blue";
earth.planetRadius = 25;
earth.orbitRadius = 200;

//object3 - creates 'earthMoon'
earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 30;


//ADD ADDITIONAL CODE HERE!

//oject4 - creates 'mars'
sun.newPlanet();
let mars = sun.planets[1];
mars.color = 'red';
mars.planetRadius = 35;
mars.orbitRadius = 100;

//oject5 - creates 'nessus'
sun.newPlanet();
let nessus = sun.planets[2];
nessus.color = 'orange';
nessus.planetRadius = 20;
nessus.orbitRadius = 400;
nessus.direction = 'counterclockwise';

//oject6 - creates 'nessusMoon1'
nessus.newPlanet();
let nessusMoon1 = nessus.planets[0];
nessusMoon1.color = 'green';
nessusMoon1.planetRadius = 10;
nessusMoon1.orbitRadius = 40;
nessusMoon1.direction = 'counterclockwise';

//oject7 - creates 'marsMoon'
mars.newPlanet();
let marsMoon = mars.planets[0];
marsMoon.color = '#42f5ec';
marsMoon.planetRadius = 10;
marsMoon.orbitRadius = 10;

//oject8 - creates 'pluto'
sun.newPlanet();
let pluto = sun.planets[3];
pluto.color = 'white';
pluto.planetRadius = 5;
pluto.orbitRadius = 650;

//oject9 - creates 'The Helm'
sun.newPlanet();
let theHelm = sun.planets[4];
theHelm.color = '#9e02f7';
theHelm.planetRadius = 40;
theHelm.orbitRadius = 450;

//ojectX - creates 'The Helm Moon'
theHelm.newPlanet();
let theHelmMoon = theHelm.planets[0];
theHelmMoon.color = '#31d104';
theHelmMoon.planetRadius = 10;
theHelmMoon.orbitRadius = 10;
theHelmMoon.direction = 'counterclockwise';


//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);
