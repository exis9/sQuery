# sQuery
Small ES6 Native Speed jQuery for Svelte, Vue3, React, Angular, and WEB

# CDN
```js
<script src="https://cdn.jsdelivr.net/gh/exis9/squery@latest/squery.min.js">
<script>
  // ↓This is the same to $(function(){ or $(document).ready(){ where in jQuery
  sq(()=>{
    sq('body').css('background', 'skyblue')
  })
</script>
```

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
Sorry! I've been working on a better documentation right now! Please wait!

