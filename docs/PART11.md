
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

Afegim els seguents estils per crear feedback entre l'intereacció de del cursor
i els elements de la llista.

```
.artistlist li {
  margin: 0;
  padding: 10px 10px 0 10px;
  border-bottom: 1px dotted black;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.artistlist li:hover {
  background: #FDF6E3;
  opacity: 1;
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}
```

Afegim els estils vinculats al modul animate. Per animar l'interacció entre la
caixa de cerca i els elements de la llista.

```
.artist.ng-enter.ng-enter-active,
.artist.ng-leave {
  opacity: 1;
  height: 80px;
  overflow: hidden;
}


.artist.ng-leave.ng-leave-active,
.artist.ng-enter {
  opacity: 0;
  height: 0;
  overflow: hidden;
}
```

### Controlador

Per fer funcionar el modul hem d'afegir la dependencia al controlador que
l'utilitzi.

```
var artistControllers = angular.module('artistControllers', ['ngAnimate']);
```
