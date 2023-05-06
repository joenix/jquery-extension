# jquery-extension

Extension for jQuery ( and more. )

## Features

- Render HTML by Vue

## How to Use ?

```js
import { render } from 'jquery-extension';
$.fn.extend({ render });
```

or

```html
<script type="text/javascript" src="path_to_jquery-extension/dist/jquery.extension.js"></script>
```

## A Sample

```html
<div id="vueRender">
  <h1 @click="say">Hi, {{ nickname }} !</h1>
</div>
```

```js
$('#vueRender').render({
  data: {
    nickname: 'Joenix',
  },
  methods: {
    say() {
      console.log('Hello ~');
    },
  },
});
```

> Result

```html
Hi, Joenix !!
```
