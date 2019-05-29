# DCMS Angular
IHM angular du composant DCMS

# Installation sur poste développeur
Voici la liste des commandes à lancer pour installer et démarrer l'application

```shell
git clone https://innersource.soprasteria.com/dcms/angular-dcms .
cd dcms
npm config set proxy http://colo.proxy.corp.sopra:8080
npm config set https-proxy http://colo.proxy.corp.sopra:8080

npm install -g @angular/cli
npm install
npm run sb_components_build
ng serve -o
```
