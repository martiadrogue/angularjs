
# AngularJS

@data: 23/03/2015

## MVC

### Escenari

Treballem en un document HTML5, amb fulles d'estil, la llibreria AngularJS i un
altre document JavaScript per separar la lògica del HTML.

### App

Comencem creant un modul. Aquest modul està representat a la vista amb l'atribut
`ng-app` que ha de tenir assignat al nom del modul.

```
<html lang="en" ng-app="app">
```

Tot seguit es crea un controlador. Pot ser un objecte qualsevol.

```
var app = angular.module('app', []);
app.controller('SettingsController', SettingsController);

function SettingsController() {
  this.name = "John Smith";
  this.title = "staff author";
  this.company ="Death Star";
}
```


El controlador també és pot representar per mitjà de la variable `$scope`.

```
var app = angular.module('app', []);
app.controller('SettingsController', ['$scope', SettingsController]);

function SettingsController($scope) {
  $scope.author = {
    "name": "John Smith",
    "title": "staff author",
    "company": "Death Star"
  };
}
```

Tot i els canvis en la funció niuada al Controlador, no fa falta que variïn els
paràmetres de la funció controller() respecte a l'anterior proposta.

- **Més sobre `model` a**: https://docs.angularjs.org/api/ng/function/angular.module
- **Més sobre `controller` a**: https://code.angularjs.org/1.3.15/docs/guide/controller

### Controller

La directiva `ngController` enganxa el controlador a la vista.

I s'assigne el model a la vista. L'area de la vista afectada pel controlador es
determina amb l'atribut `ng-controller` que té assignat el nom del controlador.
Es pot utilitzar la paraula clau `as` per posar alies i el punt s'utilitza per
accedir a les propietas del controlador.

```
<div ng-controller="SettingsController1 as author">
  <h1>{{ author.name }}</h1>
  <p>{{ author.title + ", " + author.company }}</p>
</div>
```

**Més sobre `ng-controller` a**: https://docs.angularjs.org/api/ng/directive/ngController
