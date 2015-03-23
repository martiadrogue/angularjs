
# AngularJS

Framework JavaScript orientada a les aplicacions web per administrar contiguts
dinamics i desenvolupat per Google.

data: 23/03/2015

- https://angularjs.org/
- https://docs.angularjs.org/api
- http://www.sitepoint.com/build-real-time-signalr-dashboard-angularjs/
- http://www.lynda.com/AngularJS-tutorials/Up-Running-AngularJS/154414-2.html

## Entorn de desenvolupament.

- Ubuntu 14.10
- Firefox Developer edition 38.0a2
  - JSONView http://jsonview.com/
- Atom Editor 0.187.0
  - Emmet
- normalize.css
- angularjs 1.3.15

Per instalar l'AngularJS, ves a la web oficial i prem el boto Download.
Assegura't de descarregar l'ultima versió estable, en aquest cas és la 1.3.X i
la build en Minified.

## Primer Pas

Un formulari amb un bloc de text per on es mostren les dades entrades al
formulari. Partim d'un document HTML5 en blanc. La primera cosa que s'ha de fer
és enllaçar el document amb la llibreria d'Angular amb l'etiqueta script de dins
head.

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js">
```

Posem en el document els elements que etreran en joc, una etiqueta input de
tipos text, una capçalera per imprimir el contingut de l'imput.

```
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="Enter a name here">
  <hr>
  <h1>Hello!</h1>
</div>
```

La part de l'aplicació en que ha de treballar AngularJS es defineix amb
l'atribut `ng-app`. Es pot incorporar tan a l'etqueta `<html>`, com la `<body>`
o en el `<div>` que conté l'escenari. I afecta a tots els nodes fills.

**Més sobre `ng-app` a**: https://docs.angularjs.org/api/ng/directive/ngApp


```
<html lang="en" ng-app>
```

Per assosiar el valor de l'`<input>` a
l'etiqueta `<h1>`. Es fa servir l'atribut `ng-model` per bindejar ek contingut
de l'`<input>` i es referencia aquest contingut amb el nom donat entre claus
dobles `{{ }}`.

```
<input type="text" ng-model="yourName" id="name" placeholder="Enter a name here">
<h1>Hello {{ yourName }}!</h1>
```

**Més sobre `ng-model` a**: https://docs.angularjs.org/api/ng/directive/ngModel
