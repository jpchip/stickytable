# jQuery Sticky Table Headers
> Make your table headers sticky

This is a version of the sticky table code originally written by Terry Munn, wrapped in a jquery plugin to make it more reusable. I also added some new options and functions.

* [Example](http://jpchip.github.io/stickytable/example/)
* [Example ES Module](http://jpchip.github.io/stickytable/example/module.html)

## Installing / Getting started

Install via NPM:

```npm
npm install --save jquery-stickytable 
```

Include jQuery(>=1.12.4) and jquery-stickytable in your head:

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/jquery-stickytable.min.js"></script>
```

and the css:

```html
<link rel="stylesheet" type="text/css" href="path/to/jquery-stickytable.css">
```

Files can be found in dist folder:

```text
dist/
├── jquery-stickytable.css
├── jquery-stickytable.js        (UMD)
├── jquery-stickytable.min.js    (UMD, compressed)
└── jquery-stickytable.esm.js    (ES Module, includes css)
```

## Usage

Load stickyTable on your table:

```javascript
$('#myTable').stickyTable(options);
```

By default just the header of the table (eg. the thead) is sticky. Biaxial headers are 
possible — this is for situations where both horizontal and vertical headers are needed. 
To enable, just wrap the first element in each tbody row in a th instead of a td:

```html
  <tbody>
    <tr>
      <th>Sticky column</th>
      <td>value A</td>
      <td>value B</td>
      ...
    </tr>
    ...
  </tbody>
```

## Options

| Option  | Description |
| ------------- | ------------- |
| copyTableClass  | When true copies any classes on the target table to the sticky table. Default is true.  |
| copyEvents  | When true copies any events on the target table to the sticky table. An example would be if there was a click event on a th element in the thead to do sorting, this would carry over to the sticky column header th. Default is false. |
| overflowy | When true adds an overflow-y class to the sticky table wrapper (ie. sticky-wrap class). This means the table will scroll vertically and only be as tall as it's parent div (see .sticky-wrap.overflow-y in css). Default is false.|

## Methods

Methods cannot be called until the stickyTable plugin has been initialized on the element.

### destroy

Completely removes sticky table classes and elements and destroys the instance.

```javascript
  $('#myTable').stickyTable('destroy');
```

## Colors

The sticky headers have default colors set, but you can override this css:

```bash
.sticky-wrap .sticky-intersect th {
    background-color: #666;
    color: #eee;
}

.sticky-wrap th {
	background-color: #666;
	color: #eee;
}
```

## Exceptions

* If target element is not a table.
* If plugin has not been initialised when calling a method
* If method is private
* If method does not exist

## Source

* http://tympanus.net/codrops/2014/01/09/sticky-table-headers-columns/
* http://tympanus.net/Tutorials/StickyTableHeaders/
