
# AngularJS

@data: 13/04/2015

## Details View

### Escenari

Treballem amb un document HTML5, fulles d'estil, la llibreria AngularJS amb el
modul per enrutar les subvieste. Conté un model per mostrar els detalls d'un
artista, i una rota definida en el proveidor de rutes. Ara toca crear una vista
per aquesta ruta i aquest model.

### Subvista

En el proveidor de rutes li hem indicat que vagi a buscar la vista
'*partials/details.html*, creem aquesta vista. Igual que l'anterior, l'etiqueta
root és una section amb la classe artistinfo.

```
<section class="artistinfo">

</section>
```

Hi vinculem el model. I afegim totes les dades relatives a l'artista en concret.
Cal veure, com en el model tenom dues propietats, una llista d'artistes i
l'index en el array de l'artista que volem extreure els detalls.

```
<section class="artistinfo">
  <div class="artist cf" ng-model="artists">
    <h1>{{artists[whichItem].name}}</h1>
    <div class="info">
      <h3>{{artists[whichItem].reknown}}</h3>
      <img ng-src="images/{{artists[whichItem].shortname}}_tn.jpg" alt="Photo of {{artists[whichItem].name}}">
      <div class="bio">{{artists[whichItem].bio}}</div>
    </div>
    <a href="/">&laquo; Back to seach</a>
  </div>
</section>
```
