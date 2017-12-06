[![Build Status](https://travis-ci.org/FabricElements/skeleton-carousel.svg?branch=master)](https://travis-ci.org/FabricElements/skeleton-carousel)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/FabricElements/skeleton-carousel)

## \<skeleton-carousel\>

`skeleton-carousel` is a web component that provides a carousel for images and other content.

## Features

* Horizontal and vertical carousel.
* Lazy load content with the property `data-src`.
* Swipe navigation capabilities.
* Keyboard navigation. `←` `↑` `→` `↓`
* Hide/Display only the navigation that you need.
* Custom styles.
* Automatic animation with custom time.

## Installation

Install `skeleton-carousel` with Bower for *Polymer 2* projects

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
        min-height: 350px;
      }
    
      skeleton-carousel {
        min-height: 350px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<skeleton-carousel dots nav loop>
  <iron-image placeholder="https://source.unsplash.com/category/nature/10x10"
              data-src="https://source.unsplash.com/category/nature/500x300"
              sizing="cover"
              preload
              fade
              ></iron-image>
  <iron-image placeholder="https://source.unsplash.com/category/food/10x10"
              data-src="https://source.unsplash.com/category/food/500x300"
              sizing="cover"
              preload
              fade
              ></iron-image>
  <iron-image placeholder="https://source.unsplash.com/category/buildings/10x10"
              data-src="https://source.unsplash.com/category/buildings/500x300"
              sizing="cover"
              preload
              fade
              ></iron-image>
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
        min-height: 350px;
      }
    
      skeleton-carousel {
        min-height: 350px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<skeleton-carousel dots nav loop direction="vertical" auto>
  <iron-image placeholder="https://source.unsplash.com/category/nature/10x10"
              data-src="https://source.unsplash.com/category/nature/500x300"
              sizing="cover"
              preload
              fade
              ></iron-image>
  <iron-image placeholder="https://source.unsplash.com/category/food/10x10"
              data-src="https://source.unsplash.com/category/food/500x300"
              sizing="cover"
              preload
              fade
              ></iron-image>
  <iron-image placeholder="https://source.unsplash.com/category/buildings/10x10"
              data-src="https://source.unsplash.com/category/buildings/500x300"
              sizing="cover"
              preload
              fade
              ></iron-image>
</skeleton-carousel>
```

### Attributes

* `alt` (boolean) - Flips the position of the navigation. Puts the navigation at the top of the carousel for the horizontal layout and to the left for the vertical layout.
* `animating` (boolean) - Read-only value that indicates if the carousel is been animated (Transition).
* `auto` (boolean) - Change slides automatically.
* `direction` (string) - Carousel direction (horizontal or vertical).
* `disabled` (boolean) - Disables component.
* `disable-swipe` (boolean) - Disables swipe functionality.
* `disable-keys` (boolean) - Disables keyboard navigation.
* `duration` (number) - Autoplay interval time in milliseconds (Default: `4000`)
* `dots` (boolean) - Show navigation dots.
* `end` (boolean) - Detail returns `true` when the carousel has reached the last slide.
* `loop` (boolean) - Determines if the carousel should be looped.  This affects the controls and the drag and drop functionality. Set to `true` if you need to loop the slides.
* `nav` (boolean) - Show navigation next/prev buttons.
* `selected` (number) - Selected slide (Starts at `0`)
* `total` (number) - Read-only value that reflects the total number of slides.

### Events

* `animating-changed` - Fired when the `animating` property has changed.
* `end` - Fired when the carousel has reached the last slide.
* `end-changed` - Fired when the `end` property has changed.
* `selected-changed` - Fired when the `selected` property has changed.
* `selected-item-changed` - Fired when the `selectedItem` property has changed.
* `show-next-changed` - Fired when the `showNext` property has changed.
* `show-prev-changed` - Fired when the `showPrev` property has changed.
* `swiping-changed` - Fired when the `swiping` property has changed.
* `total-changed` - Fired when the `total` property has changed.

### Styling
The following custom properties and mixins are available for styling:

| Custom property                           | Description                             | Default                 |
| ----------------------------------------- |:---------------------------------------:| -----------------------:|
| `--skeleton-carousel`                     | Mixin applied to the carousel           | `{}`                    |
| `--skeleton-carousel-min-height`          | Carousel minimum height                 | `300px`                 |
| `--skeleton-carousel-container`           | Mixin applied to the container          | `{}`                    |
| `--skeleton-carousel-container-horizontal`| Mixin applied to horizontal container   | `{}`                    |
| `--skeleton-carousel-container-vertical`  | Mixin applied to vertical container     | `{}`                    |
| `--skeleton-carousel-item`                | Mixin applied to slotted item           | `{}`                    |
| `--skeleton-carousel-item-selected`       | Mixin applied to slotted selected item  | `{}`                    |
| `--skeleton-carousel-controls`            | Mixin applied to the controls           | `{}`                    |
| `--skeleton-carousel-controls-horizontal` | Mixin applied to horizontal controls    | `{}`                    |
| `--skeleton-carousel-controls-vertical`   | Mixin applied to vertical controls      | `{}`                    |
| `--skeleton-carousel-dots`                | Mixin applied to dots container         | `{}`                    |
| `--skeleton-carousel-dot`                 | Mixin applied to each dot               | `{}`                    |
| `--skeleton-carousel-dot-color`           | Dot color                               | `var(--paper-grey-900)` |
| `--skeleton-carousel-dot-selected`        | Mixin applied to selected dot           | `{}`                    |
| `--skeleton-carousel-dot-disabled`        | Mixin applied to selected dot           | `{}`                    |
| `--skeleton-carousel-nav`                 | Mixin applied to navigation buttons     | `{}`                    |
| `--skeleton-carousel-nav-color`           | Navigation buttons color                | `var(--paper-grey-900)` |
| `--skeleton-carousel-nav-disabled`        | Mixin applied to disabled navigation    | `{}`                    |
| `--skeleton-carousel-nav-disabled-color`  | Navigation buttons disabled color                | `var(--paper-grey-900)` |
| `--skeleton-carousel-nav-prev`            | Mixin applied to previous button        | `{}`                    |
| `--skeleton-carousel-nav-next`            | Mixin applied to next button            | `{}`                    |
| `--skeleton-carousel-transition`          | Transition mixin ()                     | `{}`                    |

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md).

## License

Released under the [BSD 3-Clause License](./LICENSE.md).
