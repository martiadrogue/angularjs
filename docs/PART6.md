
# AngularJS

@data: 09/04/2015

## Deep Linking

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS i
documents JavaScript per separar la lògica del HTML. Per fer l'aplicació més
modular, dividim la pàgina html en tantes subpàgines com Controladors tingui.

En llocs web convencionals amb dues o més pàgines. Els controladors es
divideixen en pàgines. AngularJs és un framework per treballar amb aplicacions
single-page. En aquest cas s'utilitza la tecnica anomenada *"Routing"*.
Significa carregar diferents subtemplates, depenent de la URL de la pàgina.

Les aplicacions sigle-page no funcionen bé amb el boto *"Go Back"* dels
navegadors. Per solucionar això s'utilitza el servei *Route Provider*, que
incorpora la funció *Deep Linking*.

Cal instalar el modul *anguar-route.js*.

### Parts

Comencem per separar del template tota la part viculada al controlador, copiem
el contingut en un fitxer anomenat *partials/list.html* i entre una etiqueta
section.

```
<section class="artistpage">
<section>
```

A la pàgina ha estat allotgant el contrador fins ara, canvien l'atribut
`ng-controller` per `ng-view`.

```
<div class="main" ng-view></div>
```

### Controlador

Canviar el nom del controlador i l'aplicació per altres de més adients a la
funció que fan cada un. Utilitzar el nom *"artistControllers"* per l'aplicació.
I *"ListController"* pel controlador.


```
var artistControllers = angular.module('artistControllers', []);
artistControllers.controller('ListController', ['$scope', '$http', ListController]);

function ListController($scope, $http) {
  // code ...
}
```
- **Més sobre `Route` a**: https://docs.angularjs.org/api/ngRoute
- **Més sobre `Route Provider` a**: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
