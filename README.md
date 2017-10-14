[![Build Status](https://travis-ci.org/FabricElements/skeleton-carousel.svg?branch=master)](https://travis-ci.org/FabricElements/skeleton-carousel)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/FabricElements/skeleton-carousel)

## \<skeleton-carousel\>

`skeleton-carousel` is a [Polymer 2](http://polymer-project.org) element that provides a carousel for images and other content.

## Features

* Horizontal and vertical carousel.
* Lazy load content with the property `data-src`.
* Swipe capabilities.
* Hide/Display only the navigation that you need.
* Custom styles.

## Installation

Install skeleton-carousel with Bower

```shell
$ bower install --save FabricElements/skeleton-carousel
```

## Examples
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
    <iron-image placeholder="https://source.unsplash.com/category/nature/10x10"
                data-src="https://source.unsplash.com/category/nature/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="https://source.unsplash.com/category/food/10x10"
                data-src="https://source.unsplash.com/category/food/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="https://source.unsplash.com/category/buildings/10x10"
                data-src="https://source.unsplash.com/category/buildings/400x400"
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
    <iron-image placeholder="https://source.unsplash.com/category/nature/10x10"
                data-src="https://source.unsplash.com/category/nature/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="https://source.unsplash.com/category/food/10x10"
                data-src="https://source.unsplash.com/category/food/400x400"
                sizing="cover"
                preload
                fade
                ></iron-image>
  </div>
  <div>
    <iron-image placeholder="https://source.unsplash.com/category/buildings/10x10"
                data-src="https://source.unsplash.com/category/buildings/400x400"
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
* `end` (boolean) - Detail returns `true` when the carousel has reached the last slide.
* `disabled` (boolean) - Disables component.
* `disable-swipe` (boolean) - Disables swipe functionality.
* `direction` (string) - Carousel direction (horizontal or vertical).

### Events

* `skeleton-carousel-end` (boolean) - Returns `true` when the carousel has reached the last slide.

### Styling
The following custom properties and mixins are available for styling:

| Custom property                           | Description                             | Default                 |
| ----------------------------------------- |:---------------------------------------:| -----------------------:|
| `--skeleton-carousel`                     | Mixin applied to the carousel           | `{}`                    |
| `--skeleton-carousel-min-height`          | Carousel minimum height                 | `300px`                 |
| `--skeleton-carousel-item`                | Mixin applied to slotted item           | `{}`                    |
| `--skeleton-carousel-controls`            | Mixin applied to the controls           | `{}`                    |
| `--skeleton-carousel-controls-horizontal` | Mixin applied to horizontal controls    | `{}`                    |
| `--skeleton-carousel-controls-vertical`   | Mixin applied to vertical controls      | `{}`                    |
| `--skeleton-carousel-dots`                | Mixin applied to dots container         | `{}`                    |
| `--skeleton-carousel-dot`                 | Mixin applied to each dot               | `{}`                    |
| `--skeleton-carousel-dot-color`           | Dot color                               | `var(--paper-grey-900)` |
| `--skeleton-carousel-dot-selected`        | Mixin applied to selected dot           | `{}`                    |
| `--skeleton-carousel-dot-disabled`        | Mixin applied to selected dot           | `{}`                    |
| `--skeleton-carousel-nav`                 | Mixin applied to navigation buttons     | `{}`                    |
| `--skeleton-carousel-nav-disabled`        | Mixin applied to disabled navigation    | `{}`                    |
| `--skeleton-carousel-nav-color`           | Navigation buttons color                | `var(--paper-grey-900)` |
| `--skeleton-carousel-transition`          | Transition mixin ()                     | `{}`                    |

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md).

## License

Released under the [BSD 3-Clause License](./LICENSE.md).
