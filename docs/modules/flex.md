# Flex

This module provides a powerful way to utilize the [flexible box layout module](http://www.w3.org/TR/css3-flexbox/). This module utilizes responsive prefixes to denote when and where you want to apply flex styles. Browser support for flexbox is limited to newer browsers make sure you check [caniuse.com](http://caniuse.com/#feat=flexbox) for a list of compatible browsers.

## Responsive Prefixes

| Prefix | Breakpoint |
| ------ | ---------- |
| xs     | Not scoped to a breakpoint |
| sm     | Min width of 40em |
| md     | Min width of 52em |
| lg     | Min width of 64em |

## Reference

### Flex

#### *`.{prefix}-flex`*

Sets and elements `display` to `flex` and enables flex context for all direct children elements.

```html
<div class="xs-flex"></div>
<div class="sm-flex"></div>
<div class="md-flex"></div>
<div class="lg-flex"></div>
```

### Flex Direction

#### *`.flex-column`*

```html
<div class="xs-flex flex-column"></div>
```

#### *`.flex-row`*

```html
<div class="xs-flex flex-row"></div>
```

### Flex Growth

#### *`.flex-auto`*

Makes an element grow or shrink as needed.

```html
<div class="xs-flex">
  <div>1</div>
  <div class="flex-auto">2</div>
</div>
```

#### *`.flex-grow`*

Makes an element grow as needed but does not shrink.

```html
<div class="xs-flex">
  <div>1</div>
  <div class="flex-grow">2</div>
</div>
```

#### *`.flex-none`*

Prevents an element from growing or shrinking.

```html
<div class="xs-flex">
  <div class="flex-none">1</div>
  <div class="flex-none">2</div>
</div>
```

### Flex Content Justify

These utilities define the alignment along the main axis.

#### *`.flex-justify-start`*

```html
<div class="xs-flex flex-justify-start"></div>
```

#### *`.flex-justify-end`*

```html
<div class="xs-flex flex-justify-end"></div>
```

#### *`.flex-justify-center`*

```html
<div class="xs-flex flex-justify-center"></div>
```

#### *`.flex-justify-between`*

```html
<div class="xs-flex flex-justify-between"></div>
```

#### *`.flex-justify-around`*

```html
<div class="xs-flex flex-justify-around"></div>
```

### Flex Item Alignment

These utilities allow you to set the default behavior for how flex items are laid out. Think of it as a `justify-content` for flexbox.

#### *`.flex-align-items-start`*

```html
<div class="xs-flex flex-align-items-start"></div>
```

#### *`.flex-align-items-end`*

```html
<div class="xs-flex flex-align-items-start"></div>
```

#### *`.flex-align-items-center`*

```html
<div class="xs-flex flex-align-items-start"></div>
```

#### *`.flex-align-items-baseline`*

```html
<div class="xs-flex flex-align-items-start"></div>
```

#### *`.flex-align-items-stretch`*

```html
<div class="xs-flex flex-align-items-start"></div>
```

### Flex Content Alignment

These utilities allow you to define the behavior of flex container lines when there is extra space in the cross-axis. This property only takes effect when there is multiple lines of flex items.

#### *`.flex-align-content-start`*

```html
<div class="xs-flex flex-align-content-start"></div>
```

#### *`.flex-align-content-end`*

```html
<div class="xs-flex flex-align-content-end"></div>
```

#### *`.flex-align-content-center`*

```html
<div class="xs-flex flex-align-content-center"></div>
```

#### *`.flex-align-content-between`*

```html
<div class="xs-flex flex-align-content-between"></div>
```

#### *`.flex-align-content-around`*

```html
<div class="xs-flex flex-align-content-around"></div>
```

#### *`.flex-align-content-stretch`*

```html
<div class="xs-flex flex-align-content-stretch"></div>
```

### Flex Self Alignment

These utilities allow you to override the default alignment (specified by `align-items`) for an individual flex item.

#### *`.flex-align-self-start`*

```html
<div class="xs-flex">
  <div class="xs-flex flex-align-self-start"></div>
</div>
```

#### *`.flex-align-self-end`*

```html
<div class="xs-flex">
  <div class="xs-flex flex-align-self-end"></div>
</div>
```

#### *`.flex-align-self-center`*

```html
<div class="xs-flex">
  <div class="xs-flex flex-align-self-center"></div>
</div>
```

#### *`.flex-align-self-baseline`*

```html
<div class="xs-flex">
  <div class="xs-flex flex-align-self-baseline"></div>
</div>
```

#### *`.flex-align-self-stretch`*

```html
<div class="xs-flex">
  <div class="xs-flex flex-align-self-stretch"></div>
</div>
```
