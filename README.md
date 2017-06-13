jQuery Sticky Table Headers
===========

This is a version of the sticky table code originally written by Terry Munn, wrapped in a jquery plugin to make it more reusable. I also added some new options and functions.

* [JSFiddle Demo](http://jsfiddle.net/jchip/07ryyn0c/)
* [Example](http://htmlpreview.github.io/?https://github.com/jpchip/stickytable/blob/publish-to-npm/example/index.html)

## External Dependencies

* jQuery >= 1.12.4
* [jQuery throttle / debounce - v1.1 - 3/7/2010](http://benalman.com/projects/jquery-throttle-debounce-plugin/)

## Install

```npm
npm install --save jquery-stickytable 
```

## Usage

Include Jquery, jquery-throttle-debounce, and jquery-stickytable in your head:

```html
<script src="jquery.js"></script>
<script src="jquery.ba-throttle-debounce.min.js"></script>
<script src="jquery-stickytable.js"></script>
```

Load stickyTable on your table:

```javascript
$('#myTable').stickyTable(options);
```

By default just the header of the table (eg. the thead) is sticky. Biaxial headers are possible — this is for situations where both horizontal and vertical headers are needed. To enable, just wrap the first element in each tbody row in a th instead of a td:

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

### copyTableClass

A boolean which when true copies any classes on the target table to the sticky table. Default is true.

### copyEvents

A boolean which when true copies any events on the target table to the sticky table. An example would be if there was a click event on a th element in the thead to do sorting, this would carry over to the sticky column header th. Default is false.

### overflowy

A boolean which when true adds an overflow-y class to the sticky table wrapper (ie. sticky-wrap class). This means the table will scroll vertically and only be as tall as it's parent div (see .sticky-wrap.overflow-y in css). Default is false.

## Methods

Methods cannot be called until the stickyTable plugin has been initialized on the element.

### destroy

Completely removes sticky table classes and elements and destroys the instance.

```javascript
  $('#myTable').stickyTable('destroy');
```

## Exceptions

* If target element is not a table.
* If plugin has not been initialised when calling a method
* If method is private
* If method does not exist

## Source

* http://tympanus.net/codrops/2014/01/09/sticky-table-headers-columns/
* http://tympanus.net/Tutorials/StickyTableHeaders/
