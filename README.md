jQuery Stick Table Headers
===========

This is a version of the sticky table code originally written by Terry Munn, wrapped in a jquery plugin to make it more reusable. I also added some new options and functions.

[DEMO](http://jsfiddle.net/jchip/48wbdpjs/4/)

## Dependencies

* jQuery 2.1
* jQuery throttle / debounce - v1.1 - 3/7/2010 (http://benalman.com/projects/jquery-throttle-debounce-plugin/)

## Usage

```javascript
  $('#myTable').stickytable(options);
```

By default just the header (eg. the thead) is sticky. Biaxial headers are possible — this is for situations where both horizontal and vertical headers are needed. To enable, just wrap the first element in each tbody row in a th instead of a td:

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

A boolean which when true copies any events on the target table to the sticky table. An example would be if there was a click event on a th element in the thead to do sorting, this would carry over to the sticky column header. Default is false.

### overflowy

A boolean which when true adds an overflow-y class to the sticky table wrapper (ie. sticky-wrap class). This means the table will scroll vertically and only be as tall as it's parent div (see .sticky-wrap.overflow-y in css). 

## Methods

### destroy

Removes sticky table classes and elements.

```javascript
  $('#myTable').stickytable('destroy');
```

## Exceptions

Throws exception if element is not a table.

## Source

* http://tympanus.net/codrops/2014/01/09/sticky-table-headers-columns/
* http://tympanus.net/Tutorials/StickyTableHeaders/
