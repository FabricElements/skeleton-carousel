/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   skeleton-carousel.js
 */

/**
 * `skeleton-carousel`
 */
declare class SkeletonCarousel extends Polymer.Element {

  /**
   * Key bindings
   */
  readonly keyBindings: object|null;

  /**
   * Indicates if the carousel is been animated (Transition)
   */
  readonly animating: boolean|null|undefined;

  /**
   * Change slides automatically
   */
  auto: boolean|null|undefined;

  /**
   * Carousel direction (horizontal or vertical)
   */
  direction: string|null|undefined;

  /**
   * Disables component
   */
  disabled: boolean|null|undefined;

  /**
   * Show navigation dots
   */
  dots: boolean|null|undefined;

  /**
   * Disable swipe functionality
   */
  disableSwipe: boolean|null|undefined;

  /**
   * Disable keyboard navigation
   */
  disableKeys: boolean|null|undefined;

  /**
   * Auto play interval time in milliseconds
   */
  duration: number|null|undefined;

  /**
   * Determines if the carousel should be looped.
   * This affects the controls and the drag and drop functionality.
   * Set to `true` if you need to loop the slides.
   */
  loop: boolean|null|undefined;

  /**
   * Show navigation next/prev buttons
   */
  nav: boolean|null|undefined;

  /**
   * Selected slide index
   */
  selected: number|null|undefined;

  /**
   * Selected item
   */
  readonly selectedItem: object|null|undefined;

  /**
   * The user is swiping
   */
  readonly swiping: boolean|null|undefined;

  /**
   * tabindex
   */
  tabindex: number|null|undefined;

  /**
   * Total number of slides
   */
  readonly total: number|null|undefined;

  /**
   * Returns true when the carousel has reached the last slide.
   */
  readonly end: boolean|null|undefined;

  /**
   * Determines if the next button should be displayed.
   */
  readonly showNext: boolean|null|undefined;

  /**
   * Determines if the previous button should be displayed.
   */
  readonly showPrev: boolean|null|undefined;

  /**
   * Auto interval
   */
  _autoInterval: object|null|undefined;

  /**
   * Children elements
   */
  _children: any[]|null|undefined;

  /**
   * Show navigation controls
   */
  readonly _controls: boolean|null|undefined;

  /**
   * Returns an array with the slides.
   * This will be used to create the dot controls.
   */
  readonly _dots: any[]|null|undefined;

  /**
   * Icon for the previous button
   */
  readonly _iconPrev: string|null|undefined;

  /**
   * Icon for the next button
   */
  readonly _iconNext: string|null|undefined;

  /**
   * Icon for the next button
   */
  readonly _containerHeight: string|null|undefined;

  /**
   * X Axis position (0 - 1)
   */
  _x: number|null|undefined;

  /**
   * Y Axis position (0 - 1)
   */
  _y: number|null|undefined;

  /**
   * Ready event
   */
  connectedCallback(): void;

  /**
   * Go to next slide
   */
  next(): void;

  /**
   * Go to previous slide
   */
  prev(): void;
}

interface HTMLElementTagNameMap {
  "skeleton-carousel": SkeletonCarousel;
}