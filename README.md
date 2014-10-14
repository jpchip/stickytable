jQuery Stick Table Headers
===========

This is a version of the sticky table code written by Terry Munn, wrapped in a jquery plugin to make it more resuable. I also added some new options and functions.

Original Source:
http://tympanus.net/codrops/2014/01/09/sticky-table-headers-columns/
http://tympanus.net/Tutorials/StickyTableHeaders/

## Dependencies

* jQuery 2.1
* jQuery throttle / debounce - v1.1 - 3/7/2010 (http://benalman.com/projects/jquery-throttle-debounce-plugin/)

## Usage

```javascript
  $('$myTable').stickytable(options);
```

## Options

### copyTableClass

### copyEvents

### overflowy


## Methods

### destroy

Removes sticky table classes and elements.

```javascript
  $('$myTable').stickytable('destroy');
```

## Exceptions

Throws exception if element is not a table.
