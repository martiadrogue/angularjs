
# AngularJS

@data: 23/03/2015

## MVC

### Escenari

Treballem en un document HTML5, amb fulles d'estil, la llibreria AngularJS i un
altre document JavaScript per separar la lògica del HTML. És una aplicació molt
simple amb arquitectura MVC. Crear un model i imprimeix la informació per
pantalla.

### App

Comencem creant un mòdul. Aquest mòdul està representat a la vista amb l'atribut
'ng-app', aquest ha de tenir assignat al nom del mòdul.

```html
<html lang="en" ng-app="app">
```

Tot seguit es crea l'aplicació i se li assigna un controlador. En aquest cas es
tracta d'un sol objecte.

```js
var app = angular.module('app', []);
app.controller('SettingsController', SettingsController);

function SettingsController() {
  this.name = "John Smith";
  this.title = "staff author";
  this.company ="Death Star";
}
```

El controlador també es pot representar per mitjà de la variable '$scope'. Per
poder utilitzar aquesta variable, ha de formar part de les dependències del
controlador. Per això, s'afegeix la variable dins un array amb el controlador i
s'assigna aquest array a l'aplicació mitjançant el mètode App.controller(),
després s'ha de passar la variable $scope com a paràmetre del controlador.

```js
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

Paràmetres de la funció controller() respecte a l'anterior proposta. Com a mínim
en aquest exemple.

- **Més sobre `model` a**: https://docs.angularjs.org/api/ng/function/angular.module
- **Més sobre `controller` a**: https://code.angularjs.org/1.3.15/docs/guide/controller

### Controller

La directiva `ngController` enganxa el controlador a la vista.

S'assigna el model a la vista. L'àrea de la vista afectada pel controlador es
determina amb l'atribut 'ng-controller' que té assignat el nom del controlador.
Es pot utilitzar la paraula clau 'as' per posar alies i el punt s'utilitza per
accedir a les propietats del controlador.

```html
<div ng-controller="SettingsController1 as author">
  <h1>{{ author.name }}</h1>
  <p>{{ author.title + ", " + author.company }}</p>
</div>
```

**Més sobre `ng-controller` a**: https://docs.angularjs.org/api/ng/directive/ngController
