jQuery Sticky Table Headers
===========

This is a version of the sticky table code originally written by Terry Munn, wrapped in a jquery plugin to make it more reusable. I also added some new options and functions.

[DEMO](http://jsfiddle.net/jchip/07ryyn0c/)

## External Dependencies

* jQuery 2.1
* [jQuery throttle / debounce - v1.1 - 3/7/2010](http://benalman.com/projects/jquery-throttle-debounce-plugin/)

## Usage

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

## Changelog:

### Version 2.0.0 - June 6 2017

* Published to NPM

### Version 1.1.2 - January 19 2015

* Updated jquery version dependecy in bower.json

### Version 1.1.1 - December 31 2014

* Added changelog to readme
* Added version number in comment of css
* Removed dates from code comments
* Added bower.json
* Added example index.html file

### Version 1.1.0 - December 30 2014

* Removed bouncing effect on header and column when scrolling as it was generally annoying.

### Version 1.0 - October 22 2014

* First release

## Source

* http://tympanus.net/codrops/2014/01/09/sticky-table-headers-columns/
* http://tympanus.net/Tutorials/StickyTableHeaders/
