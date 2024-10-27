[![sQuery](https://i.imgur.com/Jvp6tSW.jpg)](https://github.com/exis9/sQuery)

# sQuery

[sQuery Official Site](https://squery.vercel.app/)

This is a **Very Small ES6+ Native Speed jQuery for Svelte, Vue3, React, SolidJS, and WEB**.

Are you fed up with the modern js frameworks?

But you don't want to go back to jQuery, right?

Well, sQuery is great especially for people like you!
It works great with Svelte, SolidJS, Vue.js and all other modern JavaScript frameworks.

sQuery just offers 3 things you want. 
**S**peed(native es6 JavaScript), **S**mall(9.5kb), and **S**imple(as jQuery)!

**TypeScript** is also supported! (You can just use sq.t.ds)

<table>
  <thead>
  <tr>
  <th>Size</th>
  <th>sQuery</th>
  <th>Cash</th>
  <th>Zepto 1.2.0</th>
  <th>jQuery Slim 3.6.1</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Unminified</td>
  <td><strong>13 KB</strong></td>
  <td>36.5 KB</td>
  <td>58.7 KB</td>
  <td><strong>238 KB</strong></td>
  </tr>
  <tr>
  <td>Minified</td>
  <td><strong>9.5 KB</strong></td>
  <td>16 KB</td>
  <td>26 KB</td>
  <td><strong>74 KB</strong></td>
  </tr>
  <tr>
  <td>Minified &amp; Gzipped</td>
  <td><strong>2.9 KB</strong></td>
  <td>6 KB</td>
  <td>9.8 KB</td>
  <td><strong>24.8 KB</strong></td>
  </tr>
  </tbody>
</table>

<h3><i>sQuery's 'S' is for Simple, Small, Speed, and Svelte</i></h3>

# Installation

[sQuery Official Site](https://squery.vercel.app/)
Just download the latest [sQuery.zip](https://github.com/exis9/sQuery/releases/) and set squery.min.js somewhere in your directory.

```js
<script src="squery.min.js"></script>
<script>
  sq(function(){
    sq('body').css('background', 'skyblue')
    sq('body').append('<h1>Hello sQuery!</h1>')
  })
</script>
```


# CDN

#### CommonJS (Easy)

```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js"></script>
```

You can also specify the version number instead of latest!
```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@1.04/squery.min.js"></script>
```

#### Module Style (The new ES6 JavaScript import style)

```js
https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.js
https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.min.js
```
↑To React users, I personally recommend the non-minified version since React can't recognize the minified syntax well.
 (React will minify in the end so it doesn't really matter, though)
 
```js
<script type="module">
  import {sq} from 'https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.js';
  sq('body').html('hello!')
</script>
```

---
# CommonJS (Easy)

```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js"></script>
<script>
  // ↓This is the same to $(function(){ or $(document).ready(){ where in jQuery
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```

#### jQuery-like style

```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js"></script>
<script>
  // you can also define $ and use it just like jQuery! (var $ = sq is also fine!)
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
  // ↓sq is like $ wherein jQuery
  import {sq} from './sq.js';
  
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```

```js
<script type="module">
  // you can also use $ easily just like jQuery! (import {sQuery as $} is also fine!)
  import {sq as $} from './sq.js';
  
  // ↓The typical jQuery style is also supported!
  $(function(){
    $('body').css('background', 'skyblue')
  })
</script>
```

# Cannot find module Error (For TypeScript Users)
If you encounter a module import error with TypeScript, you probably need a .d.ts file.
Create a file named "sq.d.ts" to the project root directory with the following code:

```
// ↓ Change the file path depends on your sQuery file location
declare module "https://cdn.jsdelivr.net/gh/exis9/squery@latest/sq.min.js" {
    export const sQuery: any, sq: any, _SQ: any;
}
```

# Svelte/Vue\.js/React/Angular
```js
<script>
  import {sq} from './sq.js';
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```


# More Documentation?
See [sQuery Official Site](https://squery.vercel.app/)
All sQuery methods and installation tutorials!
