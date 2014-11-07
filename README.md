vjs is a javascript template engine for nodejs or the browser.

### In the browser

template
```html
<script type="text" id="vjsTest">
<ul>
<% for (var i = 0; i < data.length; i++) { %>
    <li>
    <%- data[i].name %>
    <% if (data[i].age) { %>
        <br><strong class="age"><%- data[i].age %></strong>
    <% } else { %>
        <br><font color="red">Unknown</font>
    <% } %>
    </li>
<% } %>
</ul>
</script>
```

javascript
```js
(function() {
    var data = [{
        name: 'jianghai',
        age: 24
    }, {
        name: 'zhouyang',
        age: 25
    }, {
        name: 'hanyu'
    }];
    var template = vjs(vjsTest.text);
    document.body.innerHTML = template(data);
})();
```

### In the nodejs

```
npm install vjs
```

```js
var vjs  = require('vjs');
// Same logic as browser
```

### Document

* **vjs()**
  Convert template string to javascript code, return a function which has a parameter data and return html string.

* **vjs.global**
  Global object name in the template scop, default is 'data'

* **vjs.leftTag**
  Left tag symbol in the template scop, default is '<%'

* **vjs.rightTag**
  Right tag symbol in the template scop, default is '%>'