# trajetmobilelee
Après avoir télécharger le projet. Afin de le tester, il faut procéder comme suit :
1. Extraire le projet ;
2. Ouvrir un terminal au sein du projet
3. Executer les commandes suivantes :
     Commande 1: Commencer par installer ionic (s’il n’est pas déjà installé) npm install ionic@4.2.0 npm install -g cordova ionic
     Commande 2: ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
     Commande 3 : npm install cordova-plugin-splashscreen@^5.0.2
     Commande 4: npm install --save @ionic-native/geolocation@5.0.0-beta.21 En cas de vulnérabilité taper: npm audit fix
     Commande 5 : npm install @types/googlemaps
 4. Enfin, lancer le projet en tapant : ionic serve
