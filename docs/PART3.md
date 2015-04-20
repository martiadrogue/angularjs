
# AngularJS

@data: 07/04/2015

## JSON

### Escenari

Partim d'un model amb un llistat d'objectes. La funció principal d'aquest
exemple és, carregar la llista des d'un fitxer JSON.

### Request

Les dades estan representades per un array d'objectes. Cal llegir les dades d'un
fitxer JSON, i utilitzar aquestes en comptes de l'array d'objectes.

Per fer això utilitzem l'objecte d'AngjularJS anomenat Service. Per a llegir el
JSON utilitzem el servei $http, s'ha de posar com a dependència del controlador,
igual que es fa amb el $scope.

```
app.controller('SettingsController', ['$scope', '$http', SettingsController]);

function SettingsController($scope, $http) {
  // TODO: Read JSON.
}
```

- **Més sobre `services` a**: https://code.angularjs.org/1.3.15/docs/guide/services
- **Més sobre el servei `http` a**: https://code.angularjs.org/1.3.15/docs/api/ng/service/$http

Ens hem de connectar al servidro JSON i demanar per una informació, en el nostre
cas ubicada a *js/data.jsons*. Si la connexió és satisfactòria que executi un
mètode per omplir l'array de dades del $scope, si no, executa un altre per
informar de l'error.

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
seguretat, Chrmoium només permet connexions Ajax que provenen de servidor, i si
t'ha aparegut aquest error, és per què estàs accedint al JSON son ordinador
local. El problema es soluciona accedit al google-chrome amb la comanda

```
google-chrome --disable-web-security
```

En **Firefx 38.0a2** les dades en JSON es carrguen sense problemes però la
consola mostra un error de sintaxi a la linia 1 del fitxer que conté les dades.
Es pot solucionar executant la pàgina des d'un servidor, per exemple Apache, o
també es pot utilitzar la funció de PHP *"Built-in Server"* executant la
comanda.

```
php -S localhost:8000
```

## Template

El template es queda tal qual, ja que en aquesta ocasió, treballem amb les
mateixes de dades i només varia la forma d'obtenir-les.
