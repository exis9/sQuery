# sQuery
This is a *Very Small ES6 Native Speed jQuery for Svelte, Vue3, React, Angular, and WEB*.

Are you fed up with the modern js frameworks?
But you're not allowed to go back to the jQuery days, right?

Well, sQuery just offers you 3S. Speed(native es6 JavaScript), Small(9.5kb), Simple(as jQuery)!
TypeScript is also supported. (You can just use sq.t.ds)

<table>
  <thead>
  <tr>
  <th>Size</th>
  <th>sQuery</th>
  <th>Cash</th>
  <th>Zepto 1.2.0</th>
  <th>jQuery Slim 3.4.1</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Unminified</td>
  <td><strong>13 KB</strong></td>
  <td>36.5 KB</td>
  <td>58.7 KB</td>
  <td><strong>227 KB</strong></td>
  </tr>
  <tr>
  <td>Minified</td>
  <td><strong>9.5 KB</strong></td>
  <td>16 KB</td>
  <td>26 KB</td>
  <td><strong>71 KB</strong></td>
  </tr>
  <tr>
  <td>Minified &amp; Gzipped</td>
  <td><strong>2.9 KB</strong></td>
  <td>6 KB</td>
  <td>9.8 KB</td>
  <td><strong>24.4 KB</strong></td>
  </tr>
  </tbody>
</table>

# Installation

Just download the latest [sQuery.zip](https://github.com/exis9/sQuery/releases/) and set squery.min.js somewhere in your directory.

```js
<script src="squery.min.js">
<script>
  sq(function(){
    sq('body').css('background', 'skyblue')
    sq('body').append('<h1>Hello sQuery!</h1>')
  })
</script>
```


# CDN

#### CommonJS (Traditional method)

```html
https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.js
https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js
```

#### Module Style (The new ES6 JavaScript import style)

```html
https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.js
https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.min.js
```
↑To React users, I personally recommend the non-minified version since React can't recognize the minified syntax well.

#### The typical CommonJS style
```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js">
<script>
  // ↓This is the same to $(function(){ or $(document).ready(){ where in jQuery
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```

#### The typical CommonJS (but more like jQuery) style

```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js">
<script>
  // you can also define $ and use it just like jQuery!
  var $ = sQuery
  
  // ↓The typical jQuery style is also supported!
  $(function(){
    $('body').css('background', 'skyblue')
  })
</script>
```

# Module
```js
<script type="module">
  // ↓Defined sq like $ wherein jQuery
  import {sQuery as sq} from './sq.js';
  
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```

```js
<script type="module">
  // you can also use $ easily just like jQuery!
  import {sQuery as $} from './sq.js';
  
  // ↓The typical jQuery style is also supported!
  $(function(){
    $('body').css('background', 'skyblue')
  })
</script>
```

# Svelte/Vue\.js/React/Angular
```js
<script>
  import {sQuery as sq} from './sq.js';
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```


# More Documentation?
Sorry! I've been working on a better documentation/API list right now! Please wait!

