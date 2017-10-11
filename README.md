[![Build Status](https://travis-ci.org/FabricElements/skeleton-carousel.svg?branch=master)](https://travis-ci.org/FabricElements/skeleton-carousel)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/FabricElements/skeleton-carousel)

## \<skeleton-carousel\>

`skeleton-carousel` is a [Polymer 2](http://polymer-project.org) element that provides a carousel for images and other content.

## Installation

Install skeleton-carousel with Bower

```shell
$ bower install --save FabricElements/skeleton-carousel
```

## Examples:
### Basic usage

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-image/iron-image.html">
    <link rel="import" href="skeleton-carousel.html">
    <style is="custom-style">
      iron-image {
        display: block;
        background-color: black;
        min-height: 500px;
      }
    
      skeleton-carousel {
        min-height: 500px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<skeleton-carousel dots nav loop>
  <div>
    <iron-image placeholder="http://source.unsplash.com/category/nature/10x10"
                data-src="http://source.unsplash.com/category/nature/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="http://source.unsplash.com/category/food/10x10"
                data-src="http://source.unsplash.com/category/food/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="http://source.unsplash.com/category/buildings/10x10"
                data-src="http://source.unsplash.com/category/buildings/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
</skeleton-carousel>
```

### Vertical layout

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-image/iron-image.html">
    <link rel="import" href="skeleton-carousel.html">
    <style is="custom-style">
      iron-image {
        display: block;
        background-color: black;
        min-height: 500px;
      }
    
      skeleton-carousel {
        min-height: 500px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<skeleton-carousel dots nav loop direction="vertical">
  <div>
    <iron-image placeholder="http://source.unsplash.com/category/nature/10x10"
                data-src="http://source.unsplash.com/category/nature/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="http://source.unsplash.com/category/food/10x10"
                data-src="http://source.unsplash.com/category/food/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="http://source.unsplash.com/category/buildings/10x10"
                data-src="http://source.unsplash.com/category/buildings/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
</skeleton-carousel>
```

### Attributes

* `total` (number) - Read-only value that reflects the total number of slides.
* `selected` (number) - Selected slide
* `nav` (boolean) - Show navigation next/prev buttons.
* `dots` (boolean) - Show navigation dots.
* `loop` (boolean) - Determines if the carousel should be looped.  This affects the controls and the drag and drop functionality. Set to `true` if you need to loop the slides.
* `end` (boolean) - Returns `true` when the carousel has reached the last slide.
* `disabled` (boolean) - Disables component.
* `disable-swipe` (boolean) - Disables swipe functionality.
* `direction` (string) - Carousel direction (horizontal or vertical).

### Events

* `skeleton-carousel-end` (boolean) - Returns `true` when the carousel has reached the last slide.

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md).

## License

Released under the [BSD 3-Clause License](./LICENSE.md).
