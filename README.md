vjs is a javascript template engine for nodejs or the browser.

### Use in browser

html
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

### Use in nodejs

```
npm install vjs
```

```js
var vjs  = require('./vjs');
// Same logic as browser
```

