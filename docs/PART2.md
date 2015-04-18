
# AngularJS

@data: 24/03/2015

## Llista

### Escenari

Partint de l'escenari inicial. La funció principal d'aquest exemple és, carregar
un array d'objectes a la vista.

### Array

Canviem el nom a l'objecte per un més adequat amb les noves dades, plural,
'artistes'. I, canviem l'objecte per un array d'objectes del mateix tipus que
l'anterior.

```js
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

Des del template, partint de l'estructura bàsica html optima per treballar amb
angular. Això significa, una etiqueta <html> amb l'atribut `ng-app="app"`, i un
`<div>` amb l'atribut `ng-controller="SettingsController"`. Dins el `<div>`
mencionat, afegim una llista amb un sol element.

Hi ha d'haver una llista amb un sol element li, l'element de la llista
incorpora la directiva 'ng-repeat', funciona com un bucle foreach, duplicarà
l'element html afectat tantes vegades com items hi hagi a l'array JavaScript
vinculat.

```html
<ul class="artistlist">
  <li class="artist cf" ng-repeat="item in artists">
  </li>
</ul>
```

L'anterior directiva conté com a valor 'item in artists'. Que ve a dir, crea un
element anomenat item que llegeix les dades de la llista artists. S'accedeix a
les propietats de cada item amb un punt, exactament igual que abans.

```html
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

Per la consola de JavaScript pot aparèixer l'error, "Failed to load resources".
Això és degut a l'us de claudàtors en la ruta de la imatge, en l'etiqueta
`<img>`. Per solucionar aquest problema, cal utilitzar la directiva `ng-src` en
lloc de l'atribut per defecte `src` de l'etiqueta `<img>`.

```html
<img ng-src="images/{{item.shortname}}_tn.jpg" alt="Photo of {{item.name}}">
```

**Més sobre `ng-src` a**: https://code.angularjs.org/1.3.15/docs/api/ng/directive/ngSrc

En que cas de que l'array no contingui elements. Es crea un altre etiqueta
`<li>` a la llita amb la directiva `ng-if` i el valor `results.length == 0`. És
una condició normal i corrent que està dient, si la longitud de l'array és igual
a 0, no té cap valor. Mostra aquesta etiqueta.

```html
<li class="artist cf" ng-if="results.length == 0">
  <strong>No results found...</strong>
</li>
```
