# CARDIFY

## Dependencias y herramientas

![Github](https://img.shields.io/badge/github-inc-008080.svg?colorA=008080)
![Javascript](https://img.shields.io/badge/javascript-ecma6-green.svg)
![jQuery](https://img.shields.io/badge/jquery-v3.3.1-yellowgreen.svg)
![npm](https://img.shields.io/badge/npm-v5.5.1-yellow.svg)
![NodeJS](https://img.shields.io/badge/nodejs-v8.9.0-orange.svg)
![Mocha](https://img.shields.io/badge/mocha-v5.0.0-red.svg)
![Chai](https://img.shields.io/badge/chai-v4.1.2-ff69b4.svg)
![Eslint](https://img.shields.io/badge/eslint-v4.15.0-blue.svg)
![Colaboradores](https://img.shields.io/badge/contributors-2-380B61.svg)


Cardify es una librería que nos permite mejorar la visualización de imágenes, destacándolas y enseñando información acerda de ellas.

## Proyecto

Implementar un plugin que rescate las imágenes presentes en un contenedor, y reemplazarlas por un nuevo elemento que contenga la imagen, a la cual se le aplicará un filtro, bajando su brillo, además de mostrar la descripción presente en uno de los atributos de la imagen (atributo `alt`).

## Instalación


Para poder usar nuestra librería, debes seguir los siguientes pasos:

- Instalar jQuery. Solo necesitas agregar la línea siguiente a tu código.

``` 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

- Enlazas entonces el archivo ```main.js```.

```
  <script src="./main.js"></script>  
```

- También tenemos disponible nuestra versión CDN

```
<script src="https://rawgit.com/Niennis/cardify/Cardify/lib/main.js"></script>
```


- Agregas la siguiente línea bajo ```main.js```, y especificas clase(s), id(s), o elemento(s) del contenedor con las imágenes a afectar. Las imágenes deben estar contenidas en una col, por lo que se recomienda el uso de grids, o un framework.

```
$('.class').cardify({});
```

## Ejemplos

![Cardify](https://78.media.tumblr.com/46426e4a9dec57138c7763a03bde8a27/tumblr_p2xpdkJcae1qdxt9to1_540.png)


