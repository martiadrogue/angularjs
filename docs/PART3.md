
# AngularJS

@data: 07/04/2015

## JSON

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS i dos
documents JavaScript per separar la lògica del HTML i per guardar les dades en
format JSON. La funció principal d'aquest exmple és, carregar un JSON a la
vista.

### Request

Partint de l'ultima part, les dades estaven representades per un array
d'objectes. Cal llegir les dades d'un fitxer JSON, i utilitzar aquestes en
comptes de l'array d'objectes.

Per fer això utilitem l'objecte d'AngjularJS anomenat Service. Per a llgir el
JSON utilitem el servei $http, s'ha de posar com a dependencia del controlador,
igual que es fa amb el $scope.

```
app.controller('SettingsController', ['$scope', '$http', SettingsController]);

function SettingsController($scope, $http) {
  // TODO: Read JSON.
}
```

- **Més sobre `services` a**: https://code.angularjs.org/1.3.15/docs/guide/services
- **Més sobre el servei `http` a**: https://code.angularjs.org/1.3.15/docs/api/ng/service/$http

Ens hem de conectar al servidro JSON i demanar per una iformació, en el nostra
cas ovicada a *js/data.jsons*. Si la connecció es satisfactoria que executi un
metode per omplir l'array de dades del $scope, sino, executa un altre.

```
function SettingsController($scope, $http) {
  $http.get('js/data.json').success(fillArtists).error(showError);

  function fillArtists (data) {
    $scope.artists = data;
  }

  function showError () {
    alert('Something is wrong with that request! ');
  }
}
```

Des de Chromium pareix l'error *"XMLHttpRequest Cannot load ..."*. Per motius de
seguretat, Chrmoium només permet el JSON que provenen de servidor, i si t'ha
aparegut aquest error és perque estas accedint al JSON son ordinador local. El problema es soluciona accedit al google-chrome amb la comanda

```
google-chrome --disable-web-security
```

En **Firefx 38.0a2** les dades en JSON es carrguen sense problemes però la
consola mostra un error de sintaxi a la linia 1 del fitxer que conté les dades.
Es pot solucionar executant la pàgina dés d'un servidor, per exemple Apache, o
també es pot utilitzar la funció de PHP *"Built-in Server"* executant la
comanda.

```
php -S localhost:8000
```

## Template

El template es queda tal qüal, ja que en aquesta ocasia, treballem amb les
mateixes dedades i només varia la forma d'obtenir-les.
