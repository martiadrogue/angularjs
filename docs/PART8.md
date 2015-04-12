
# AngularJS

@data: 10/04/2015

## Afegunt Partials

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS i
documents JavaScript per separar la lògica del HTML. Conté un proveidor de
rutes, amb una ruta que apunta a la llista d'artistas. Ara toca montar una altre
ruta que apunti a la vista de tall de cada artista i crear el controlador que
retorni els detalls de l'artista demanat.

### Ruta

En el fitxer '*js/app.js* afegim els parametres per crear una nova ruta, per la
ruta se l¡hi ha de passar l'Id de l'artista.

```
$routeProvider.when('/details/:itemId', {
  templateUrl: 'partials/details.html',
  controller: 'DetailsController'
});
```

### Controlador

Obrim el fitxer *js/controllers.js* i afegim el nou controlador, aquest
controlador treballa amb els mateixos serveis que l'anterior, i ha més a més,
el servei $routeParams, per ovtenir els parametres passats per la URL o sigui
GET.

```
artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', DetailsController]);
```

Entre les funcions del controlador està la de obtenir la llista d'artistes i
buscar el l'artista amb l'Id obtingut per la URL. Cal tenir en compte que en
aquestes dades els artistes no tenen Id i l'Id obtingut representa l'index de
l'artista en l'array.

```
function DetailsController($scope, $http, $routeParams) {
  $http.get('js/data.json').success(fillArtists).error(showError);

  function fillArtists (data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
  }

  function showError () {
    alert('Something is wrong with that request! ');
  }
}
```

- **Més sobre `$routeParams` a**: https://code.angularjs.org/1.3.15/docs/api/ngRoute/service/$routeParams

### Template

Acavem, posant un enllaç a cada item de la llista d'artistes que enllaçi amb la
seva pàgina de detalls. Per tan, a *partial/list.html* creem un enllaç que
contingui l'estructura de finida al Route provider, per obtenir l'index de
l'artista en l'array, invoquem a la funció getIndex de l'array.

```
<ul class="artistlist">
  <li class="artist cf" ng-repeat="item in artists | filter: query | orderBy: artistOrder:direction">
    <a href="#/details/{{artists.indexOf(item)}}">
      <!-- tags sobre l'artista -->
    </a>
  </li>
</ul>
```
