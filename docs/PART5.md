
# AngularJS

@data: 07/04/2015

## Binding

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS i
documents JavaScript per separar la lògica del HTML. La funció principal
d'aquest exmple és, bindejar dades amb el filtre.

### Model

Creem el model en el template. Una caixa de text per on filtrar els resultats de
la llista. Per crear el model en el template fem us de l'atribut `ng-model.`

```
<div class="search">
  <h1>Artist Directory</h1>
  <label for="">Search:</label>
  <input ng-model="query" type="text" placeholder="Search for artists" autofocus="">
</div>
```

### Filtre

Eliminem els Limit per poder visualitzar tots els resultats i el fitre per posar
els noms dels artistes en majuscules.

Afegim un filtra al llistat i el vinculem amb el modul que hem creat.

```
<li class="artist cf" ng-repeat="item in artists | filter: query">
```

### Concatenar filtres

Per afegir un altre filtre posem un altre modul en el template.

```
<label class="formgroup">by:
  <select ng-model="artistOrder">
    <option value="name">Name</option>
    <option value="reknown">Reknown</option>
  </select>
</label>
```

Nota que l'atribut `value` a les opcions conté els noms de propietats de
l'objecte artista del JSON. A continuació es posa un altre filtra separant-lo
amb una barra vertical.

```
<li class="artist cf" ng-repeat="item in artists | filter: query | orderBy: artistOrder">
```

En refrescar la pàgina la select no té cap opció seleccionada, per posar una
opció per defecte, es pot fer inicialitzant la dada des d'angular.

```
function fillArtists (data) {
  $scope.artists = data;
  $scope.artistOrder = 'name';
}
```

#### OrderBy

Afegim de nou més controls, aquesta vegada per canviar l'ordre en que es mostren
els resultats. Per tant necessitem un altre model.

```
<label class="formgroup">
  <input type="radio" ng-model="direction" name="direction" id="direction" checked>
  ascending
</label>
<label class="formgroup">
  <input type="radio" ng-model="direction" name="direction" id="direction" value="reverse">
  descending
</label>
```

I vinculem aquest model amb el filtre `orderBy` utilitzant els dos punts, amb la
finalitat d'indica direcció.

```
<li class="artist cf" ng-repeat="item in artists | filter: query | orderBy: artistOrder:direction">
```

- **Més sobre `orderBy` a**: https://code.angularjs.org/1.3.15/docs/api/ng/filter/orderBy
- **Més sobre `filtres` a**: https://code.angularjs.org/1.3.15/docs/api/ng/filter
