
# AngularJS

@data: 13/04/2015

## Navegació horitzontal

### Escenari

Treballem amb un document HTML5, fulles d'estil i la llibreria AngularJS amb el
modul per enrutar les subvieste. Conté un model per mostrar els detalls d'un
artista, i una rota definida en el proveidor de rutes. Ara toca implementar un
menu de navegació horitzontal connectat pels extrems.

### Menu

A la vista '*partials/details.html*, afegeix dos enllaços amb les propietats
prevItem i nextItem.

```
<a href="#/details/{{prevItem}}" class="btn btn-left">&lt; </a>
<a href="#/details/{{nextItem}}" class="btn btn-right">&gt; </a>
```

### Model

En el model dels detalls, creem les propietats anteriors tenint en compte que
l'ultim item a d'estar connectat amb el primer i el primer item a d'està
connectat amb l'ultim.


```
if ($routeParams.itemId > 0) {
  $scope.prevItem = Number($routeParams.itemId) - 1;
} else {
  $scope.prevItem = $scope.artists.length - 1;
}

if ($routeParams.itemId < $scope.artists.length - 1) {
  $scope.nextItem = Number($routeParams.itemId) + 1;
} else {
  $scope.nextItem = 0;
}
```
