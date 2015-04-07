
# AngularJS

@data: 07/04/2015

## Formats

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS i
documents JavaScript per separar la lògica del HTML. La funció principal
d'aquest exmple és, posar format a les dades.

### Filters

Partint de l'ultima part, s'obtenen les dades amb JSON i es pinten per pantalla.
Ara toca posa format a les dades per a una millor expreiencia d'usuari, en
concret amen a posar els noms dels artistes en majuscula i a limitar la mida de
la llista a 5 artistes màxim.

Per fer això utilitem els Filtres d'AngjularJS. Els filtres es poden utilitzar
com expressions o directament als moduls. En aquests exemple anem a explorar les
expressions. I per això treballem exclusivament amb el fitxer HTML.

Per posar els noms del artistes en majuscula. Afegeix una barra vertical dins el
blocs de dades utilitzat pels noms, seguit del el filtre uppercase.

```
<h2>{{item.name | uppercase}}</h2>
```

Per posar un limit de cinc artistes al llistat. Afegeix una altra barra
vertical, ara dins el bloc que simula un bucle foreach ng-repeat i tot seguit
posa el filtre limitTo dos punts i el numero mpaxim d'artistes que vols mostrar.

```
<li class="artist cf" ng-repeat="item in artists | limitTo: 5">
```

- **Més sobre `filtres` a**: https://code.angularjs.org/1.3.15/docs/api/ng/service/$filter
- **Més sobre `filtres` en moduls a**: https://code.angularjs.org/1.3.15/docs/api/ng/filter
