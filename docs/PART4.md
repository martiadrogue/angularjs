
# AngularJS

@data: 07/04/2015

## Formats

### Escenari

En aquesta ocasió, tenim una un MVC amb una connexió Ajax. La funció principal
d'aquest exemple és, posar format a les dades de la vista.

### Filters

Toca posa format a les dades per a una millor expreiencia d'usuari. En concret
amen a posar els noms dels artistes en majuscula i a limitar la mida de la
llista a 5 artistes màxim.

Per fer això utilitzem els Filtres d'AngjularJS. Els filtres es poden utilitzar
com expressions o directament als mòduls. En aquest exemple anem a explorar les
expressions. I per això treballem exclusivament amb el fitxer HTML.

Per posar els noms dels artistes en majúscula. Afegeix una barra vertical dins
els blocs de dades utilitzat pels noms, seguit del filtre uppercase.

```
<h2>{{item.name | uppercase}}</h2>
```

Per posar un límit de cinc artistes al llistat. Afegeix una altra barra
vertical, ara dins el bloc que simula un bucle foreach ng-repeat i tot seguit
posa el filtre limitTo dos punts i el numero màxim d'artistes que vols mostrar.

```
<li class="artist cf" ng-repeat="item in artists | limitTo: 5">
```

- **Més sobre `filtres` a**: https://code.angularjs.org/1.3.15/docs/api/ng/service/$filter
- **Més sobre `filtres` en moduls a**: https://code.angularjs.org/1.3.15/docs/api/ng/filter
