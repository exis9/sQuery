# sQuery
This is a **Very Small ES6 Native Speed jQuery for Svelte, Vue3, React, Angular, and WEB**.

Are you fed up with the modern js frameworks?

But you don't want to go back to jQuery, right?

Well, sQuery is great especially for people like you!

sQuery just offers 3 things you want. 
**S**peed(native es6 JavaScript), **S**mall(9.5kb), **S**imple(as jQuery)!

**TypeScript** is also supported! (You can just use sq.t.ds)

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

<h3><i>sQuery's 'S' is for Simple, Small, Speed, and Svelte</i></h3>

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

```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.js">
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js">
```

#### Module Style (The new ES6 JavaScript import style)

```js
https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.js
https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.min.js
```
↑To React users, I personally recommend the non-minified version since React can't recognize the minified syntax well.
 (React will minify in the end so it doesn't really matter, though)


---
# CommonJS (Old style)

```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js">
<script>
  // ↓This is the same to $(function(){ or $(document).ready(){ where in jQuery
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```

#### jQuery-like style

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

---

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

