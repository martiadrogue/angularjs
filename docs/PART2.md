
# AngularJS

@data: 24/03/2015

## Llista

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS i un
altre document JavaScript per separar la lògica del HTML. La funció principal
d'aquest exmple és, carregar un array d'objectes a la vista.

### Array

Partint de l'anterior part on el controlador estava representat en notació
objecte. Canviem el nom a l'objecte per un més adecuat amb les noves dades,
plural, `artistes`. I, canviem l'objecte per un array d'objectes.

```
$scope.artists = [
  {
    "name":"Barot Bellingham",
    "shortname":"Barot_Bellingham",
    "reknown":"Royal Academy of Painting and Sculpture",
    "bio":"Barot has just finished [...], yet undeniably different"
  },
  {
    "name":"Jonathan G. Ferrar II",
    "shortname":"Jonathan_Ferrar",
    "reknown":"Artist to Watch in 2012",
    "bio":"The Artist to Watch in 2012 by [...] in developing nations"
  },
  // ...
  {
    "name":"Hillary Hewitt Goldwynn-Post",
    "shortname":"Hillary_Goldwynn",
    "reknown":"New York University",
    "bio":"Hillary is a sophomore art sculpture [...] deep sea, and river."
  }
];
```

## Template

Des del template, partint de l'estructura basica html optima per treballar amb
angular. Això significa, una etiqueta <html> amb l'atribut `ng-app="app"`, i un
`<div>` amb l'atribut `ng-controller="SettingsController"`. Dins el `<div>`
mencionat, afegim una llista amb un sol element.

L'element de la llista a d'incorporar la directiva `ng-repeat`, funcióna com un
blucle foreach, duplicarà l'element html afectat tates vegades com items hi hagi
a l'array JavaScript vinculat.

```
<ul class="artistlist">
  <li class="artist cf" ng-repeat="item in artists">
  </li>
</ul>
```

L'anterior directiva conté com a valor `item in artists`. Que ve a deir, crea un
element anomenat item que llegeix les dades de la llista artists. S'accedeix a
les propietats de cada item amb un punt, exacatament igual que avans.

```
<ul class="artistlist">
  <li class="artist cf" ng-repeat="item in artists">
    <img src="images/{{item.shortname}}_tn.jpg" alt="Photo of {{item.name}}">
    <div class="info">
      <h2>{{item.name}}</h2>
      <h3>{{item.reknown}}</h3>
    </div>
  </li>
</ul>
```

**Més sobre `ng-repeat` a**: https://code.angularjs.org/1.3.15/docs/api/ng/directive/ngRepeat

Per la consola de JavaScript pot apareixa l'error, "Failed to load resources".
Això és degut a l'us de claudators en la ruta de la imatge, en l'etiqueta
`<img>`. Per solucionar aquet problema, cal utilitzar la directiva `ng-src` en
lloc de l'atribut `src` de l'etiqueta `<img>`.

```
<img ng-src="images/{{item.shortname}}_tn.jpg" alt="Photo of {{item.name}}">
```

**Més sobre `ng-src` a**: https://code.angularjs.org/1.3.15/docs/api/ng/directive/ngSrc

En que cas de que l'array no contingui elements. Es crea un altre etiqueta
`<li>` a la llita amb la directiva `ng-if` i el valor `results.length == 0`. És
una condició normal i current que està dient, si la longitud de l'array és igual
a 0, no té cap valor. Mostra aquesta etiqueta.

```
<li class="artist cf" ng-if="results.length == 0">
  <strong>No results found...</strong>
</li>
```
