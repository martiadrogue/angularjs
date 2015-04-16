
# AngularJS

@data: 16/04/2015

## Animations

### Escenari

Treballem amb un document HTML5, fulles d'estil i la llibreria AngularJS i dos
moduls, un per enrutar les subviste i un altre per treballar amb animacions.
Conté dps models, amb un mostra els detalls d'un artista, i amb l'alte mostra un
llistat d'artistes. Es tracta d'una web sigle-page. Adem a afeir animacions.

### Template

En el template, enllacem amb el modul per treballar amb animacions.

```
<script src="js/angular-animate.min.js"></script>
```

Vinculem el modul amb la part del template que afectarà amb l'atribut
ng-animate. Per això, ens situem al partial list.html.

```
<li class="artist cf" ng-animate="animate" ng-repeat="item in artists | filter: query | orderBy: artistOrder:direction">
```

### Estils

### Controlador

Per fer funcionar el modul hem d'afegir la dependencia al controlador que
l'utilitzi.

```
var artistControllers = angular.module('artistControllers', ['ngAnimate']);
```
