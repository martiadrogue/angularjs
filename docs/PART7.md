
# AngularJS

@data: 10/04/2015

## Deep Linking

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS i
documents JavaScript per separar la lògica del HTML. Per fer l'aplicació més
modular, implementem un proveidor de rutes.

### Aplicació

Creeem un fitxer *js/app.js* i l'enllacem amb l'*index.html*.

```
<script src="js/app.js"></script>
```

### Controladors

Creem una variable anomenada myApp i li assignem el modul d'angular myApp i un array. El nom del modul el treiem del tag ´ng-app="myApp"´. Aquest array conté les dependencies, els moduls; ngRoute i el que hem creat anteriorment per carregar el llistat d'artistes.

```
var myApp = angular.module('myApp',['ngRoute', 'artistControllers']);
```

### Route provider

Ara, necessitem dir a l'aplicació com han de funcionar les parts definides
anteriorment. Per tan s'invoca el mètode config i se li passa com a paremetres
el servei que va ha utilitzar i la funció que va ha utilitzar aquest serveri.

```
myApp.config(['$routeProvider', Router]);

function Router ($routeProvider) {
  // code here
}
```

Em de especificar què passarà quant algú intenti accedir a una part especifica.
I també el comportament passa per defecte.

```
function Router ($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  });
  $routeProvider.otherwise({
    redirectTo: '/list'
  });
}
```

- **Més sobre `Route Provider` a**: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
