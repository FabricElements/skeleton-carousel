var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright FabricElements. All Rights Reserved.
 */
import { IronA11yKeysBehavior } from "@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js";
import "@polymer/iron-flex-layout/iron-flex-layout.js";
import "@polymer/iron-selector/iron-selector.js";
import { html, LitElement, property } from "@polymer/lit-element";
import "@polymer/paper-icon-button/paper-icon-button.js";
import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";
import { GestureEventListeners } from "@polymer/polymer/lib/mixins/gesture-event-listeners";
import { FlattenedNodesObserver } from "@polymer/polymer/lib/utils/flattened-nodes-observer.js";
import * as Gestures from "@polymer/polymer/lib/utils/gestures.js";
import { setPassiveTouchGestures } from "@polymer/polymer/lib/utils/settings";
import "./icons/carousel.js";
class SkeletonCarousel extends mixinBehaviors([IronA11yKeysBehavior, GestureEventListeners], LitElement) {
    /**
     * Lit-Element Constructor
     */
    constructor() {
        super();
        /**
         * Indicates if the carousel is been animated (Transition)
         */
        this.animating = false;
        /**
         * Disable keyboard navigation
         */
        this.disableKeys = false;
        /**
         * tabindex
         */
        this.tabindex = 0;
        /**
         * Show navigation controls
         */
        this.controls = false;
        /**
         * Change slides automatically
         */
        this.auto = false;
        /**
         * Carousel direction (horizontal or vertical)
         */
        this.direction = "horizontal";
        /**
         * Disables component
         */
        this.disabled = false;
        /**
         * Disable swipe functionality
         */
        this.disableSwipe = false;
        /**
         * Auto play interval time in milliseconds
         */
        this.duration = 4000;
        /**
         * Selected slide index
         */
        this.selected = 0;
        /**
         * The user is swiping
         */
        this.swiping = false;
        /**
         * Total number of slides
         */
        this.total = 0;
        /**
         * Children elements
         */
        this.children = [];
        /**
         * Returns an array with the slides.
         * This will be used to create the dot controls.
         */
        this.dotsArray = [];
        /**
         * Icon for the previous button
         */
        this.iconPrev = "carousel:arrow-back";
        /**
         * Icon for the next button
         */
        this.iconNext = "carousel:arrow-forward";
        /**
         * X Axis position (0 - 1)
         */
        this._X = 0;
        /**
         * Y Axis position (0 - 1)
         */
        this._Y = 0;
        // Force all event listeners for gestures to be passive
        setPassiveTouchGestures(true);
    }
    /**
     * Lit-Element doesn't seem to allow variable variable declaration in index.html
     * to change the properties if declared with typescript decorators... So some
     * variables are declared traditionally.
     */
    static get properties() {
        return {
            /**
             * Carousel direction (horizontal or vertical)
             */
            direction: {
                type: String,
                value: "horizontal",
            },
            /**
             * Show navigation dotsArray
             */
            dots: {
                type: Boolean,
                value: false,
            },
            /**
             * Show navigation next/prev buttons
             */
            nav: {
                type: Boolean,
                value: false,
            },
            /**
             * Change slides automatically
             */
            auto: {
                type: Boolean,
                value: false,
            },
            /**
             * Determines if the carousel should be looped.
             * This affects the controls and the drag and drop functionality.
             * Set to `true` if you need to loop the slides.
             */
            loop: {
                type: Boolean,
                value: false,
            },
            disabled: {
                type: Boolean,
                value: false,
            },
        };
    }
    render() {
        return html `
      <!--suppress CssInvalidPseudoSelector -->
      <!--suppress CssUnresolvedCustomProperty -->
      <!--suppress CssUnresolvedCustomPropertySet -->
      <style is="custom-style">
        :host {
          display: block;
          position: relative;
          overflow: hidden;
          contain: content;
          box-sizing: border-box;
          @apply --layout-flex-auto;
          @apply --skeleton-carousel;
          min-height: var(--skeleton-carousel-min-height, 300px);
        }

        :host([direction="horizontal"]) {
          @apply --layout-vertical;
        }

        :host([alt][direction="horizontal"]) {
          @apply --layout-vertical-reverse;
        }

        :host([direction="vertical"]) {
          @apply --layout-inline;
          @apply --layout-horizontal;
        }

        :host([alt][direction="vertical"]) {
          @apply --layout-horizontal-reverse;
        }

        :host,
        #carousel *,
        #container ::slotted(*) {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          outline: none;
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }

        #carousel,
        #items,
        #container {
          display: block;
          position: relative;
          width: 100%;
          @apply --layout-flex-auto;
        }

        #carousel,
        #container {
          @apply --layout-vertical;
        }

        #carousel {
          overflow: hidden;
          z-index: 0;
        }

        #items {
          position: relative;
          transform: translate3d(0%, 0%, 0);
          will-change: transform;
        }

        :host([direction="horizontal"]) #items {
          @apply --layout-vertical;
        }

        :host([direction="vertical"]) #items {
          @apply --layout-fit;
        }

        #container {
          @apply --layout-inline;
          @apply --skeleton-carousel-container;
        }

        :host([direction="horizontal"]) #container {
          @apply --layout-horizontal;
          @apply --skeleton-carousel-container-horizontal;
        }

        :host([direction="vertical"]) #container {
          @apply --layout-vertical;
          @apply --layout-wrap;
          @apply --skeleton-carousel-container-vertical;
        }

        #container ::slotted(*) {
          display: block;
          position: relative;
          overflow: hidden;
          @apply --layout-vertical;
          @apply --layout-flex-auto;
          min-width: 100%;
          max-width: 100%;
          width: 100%;
          will-change: auto;
          opacity: 0.8;
          @apply --skeleton-carousel-item;
        }

        #container ::slotted(.selected) {
          opacity: 1;
          @apply --skeleton-carousel-item-selected;
        }

        /*
      * Controls
      */
        #controls {
          display: block;
          padding: 0.5rem;
          z-index: 1;
          @apply --layout-center-center;
          @apply --layout-center-justified;
          @apply --skeleton-carousel-controls;
        }

        :host([direction="horizontal"]) #controls {
          @apply --skeleton-carousel-controls-horizontal;
        }

        :host([direction="vertical"]) #controls {
          @apply --skeleton-carousel-controls-vertical;
        }

        :host([direction="horizontal"]) #controls,
        :host([direction="horizontal"]) #dots {
          @apply --layout-horizontal;
        }

        :host([direction="vertical"]) #controls,
        :host([direction="vertical"]) #dots {
          @apply --layout-vertical;
        }

        paper-icon-button {
          border-radius: 50%;
        }

        #dots {
          @apply --layout-flex-auto;
          @apply --layout-center-center;
          @apply --skeleton-carousel-dots;
        }

        #dots paper-icon-button {
          color: var(--skeleton-carousel-dot-color, var(--paper-grey-900));
          opacity: 0.4;
          @apply --skeleton-carousel-dot;
        }

        #dots paper-icon-button.selected {
          opacity: 1;
          @apply --skeleton-carousel-dot-selected;
        }

        #dots paper-icon-button[disabled] {
          opacity: 0.4;
          @apply --skeleton-carousel-dot-disabled;
        }

        #prev,
        #next {
          color: var(--skeleton-carousel-nav-color, var(--paper-grey-900));
        }

        #prev,
        #next {
          @apply --skeleton-carousel-nav;
        }

        #prev[disabled],
        #next[disabled] {
          color: var(
            --skeleton-carousel-nav-disabled-color,
            var(--paper-grey-600)
          );
          @apply --skeleton-carousel-nav-disabled;
        }

        #prev {
          @apply --skeleton-carousel-nav-prev;
        }

        #next {
          @apply --skeleton-carousel-nav-next;
        }

        [hidden] {
          display: none !important;
        }

        /* Apply transition */
        #items,
        #container ::slotted(*),
        paper-icon-button {
          -webkit-transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1);
          -moz-transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1);
          -ms-transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1);
          -o-transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1);
          transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1);
          @apply --skeleton-carousel-transition;
        }

        :host[swiping] #items {
          -webkit-transition: all 300ms linear;
          -moz-transition: all 300ms linear;
          -ms-transition: all 300ms linear;
          -o-transition: all 300ms linear;
          transition: all 300ms linear;
        }
      </style>
      <div id="carousel">
        <div id="items">
          <iron-selector
            id="container"
            selected="${this.selected}"
            fallback-selection="0"
            selected-class="selected"
            .style="${this._containerHeight()}"
          >
            <slot></slot>
          </iron-selector>
        </div>
      </div>
      <nav
        id="controls"
        ?hidden="${!this._computeControls(this.dots, this.nav, this.total)}"
      >
        <paper-icon-button
          .icon="${this.iconPrev}"
          id="prev"
          @tap="${this.prev}"
          ?disabled="${!this._showPrev(this.disabled, this.selected, this.loop)}"
          ?hidden="${!this.nav}"
        >
        </paper-icon-button>
        <iron-selector
          @tap="${this._iconSelect}"
          id="dots"
          selected="${this.selected}"
          fallback-selection="0"
          selected-class="selected"
          ?hidden="${!this.dotsArray}"
          tabindex="-1"
        >
          ${this.dotsArray.map((dot) => html `
                  <paper-icon-button
                    icon="${this._iconDot(dot, this.selected)}"
                    ?disabled="${this.disabled}"
                  ></paper-icon-button>
                `)}
        </iron-selector>
        <paper-icon-button
          .icon="${this.iconNext}"
          id="next"
          @tap="${this.next}"
          ?disabled="${!this._showNext(this.disabled, this.total, this.selected, this.loop)}"
          ?hidden="${!this.nav}"
        >
        </paper-icon-button>
      </nav>
    `;
    }
    /**
     * Events triggered when the element is first updated
     *
     * @param {PropertyValues} initProperties
     */
    firstUpdated(initProperties) {
        super.firstUpdated(initProperties);
        const container = this.shadowRoot.querySelector("slot");
        // Allow vertical scrolling
        const carousel = this.shadowRoot.querySelector("#carousel");
        Gestures.addListener(carousel, "track", this._drag.bind(this));
        this.setScrollDirection("all", carousel);
        this.children = FlattenedNodesObserver.getFlattenedNodes(container)
            // @ts-ignore
            .filter((n) => {
            return n.nodeType === Node.ELEMENT_NODE;
        });
        // Handle transition end
        const items = this.shadowRoot.querySelector("#items");
        items.addEventListener("transitionend", (e) => {
            e.preventDefault();
            if (this.swiping || e.propertyName !== "transform") {
                return;
            }
            this.animating = false;
        });
        /**
         * Compute directional icons
         *
         * @param {string|null} direction
         * @return {string}
         * @private
         */
        if (initProperties.has("direction")) {
            if (this.direction === "vertical") {
                this.iconPrev = "carousel:arrow-upward";
                this.iconNext = "carousel:arrow-downward";
            }
            else {
                this.iconPrev = "carousel:arrow-back";
                this.iconNext = "carousel:arrow-forward";
            }
        }
        if (initProperties.has("auto")) {
            if (this.auto) {
                this.autoInterval = setInterval(() => {
                    this.next();
                }, this.duration);
            }
            else {
                clearInterval(this.autoInterval);
            }
        }
    }
    /**
     * Updating element on any variable change
     *
     * @param {PropertyValues} changedProps
     */
    updated(changedProps) {
        /**
         * Children change observer
         */
        if (changedProps.has("children")) {
            this.total = this.children.length;
            this._lazyContent(0);
            if (this.children.length >= 1) {
                this._lazyContent(1);
            }
        }
        /**
         * Calculates this.dotsArray array
         */
        if (changedProps.has("total")) {
            let array = [];
            if (this.total <= 0) {
                this.dotsArray = array;
            }
            let i = 1;
            for (i; i <= this.total; ++i) {
                array.push(i);
            }
            this.dotsArray = array;
        }
        /**
         * Translate swipe observer
         */
        if (changedProps.has("direction") ||
            changedProps.has("selected") ||
            changedProps.has("_X") ||
            changedProps.has("_Y")) {
            // Set up fake x and y values so it doesn't re-trigger update
            let _XFAUX = this._X;
            let _YFAUX = this._Y;
            if (_XFAUX !== 0 || _YFAUX !== 0) {
                this.animating = true;
            }
            let finalX = 0;
            let finalY = 0;
            let baseSelected = -Math.abs(this.selected);
            if (this.selected <= 0) {
                baseSelected = 0;
            }
            if (_XFAUX === 0 && _YFAUX === 0) {
                const percentage = this._calcPercentage(baseSelected);
                if (this.direction === "horizontal") {
                    finalX = percentage;
                }
                if (this.direction === "vertical") {
                    finalY = percentage;
                }
            }
            else {
                // add baseSelected to the original value of the drag value
                _XFAUX = baseSelected + this._X;
                _YFAUX = baseSelected + this._Y;
                if (this.direction === "horizontal") {
                    finalX = this._calcPercentage(_XFAUX);
                }
                if (this.direction === "vertical") {
                    finalY = this._calcPercentage(_YFAUX);
                }
            }
            const element = this.shadowRoot.querySelector("#items");
            let transform = "";
            if (this.direction === "horizontal") {
                transform = `translateX(${finalX})`;
            }
            if (this.direction === "vertical") {
                transform = `translateY(${finalY})`;
            }
            element.style.transform = transform;
        }
        /**
         * Observer on auto to turn on and off the feature
         */
        if (changedProps.has("auto")) {
            if (this.auto) {
                this.autoInterval = setInterval(() => {
                    this.next();
                }, this.duration);
            }
            else {
                clearInterval(this.autoInterval);
            }
        }
        /**
         * Listen for changes on the selected item
         */
        if (changedProps.has("selected")) {
            this._lazyContent(this.selected);
            // New selected variable so not to trigger another update
            let selectFaux = this.selected;
            let total = this.total;
            if (selectFaux < --total) {
                this._lazyContent(++selectFaux);
            }
            // Reset auto
            this.auto = false;
            // Calculate selected item
            this.selectedItem = this.children[this.selected];
        }
    }
    // KeyBindings not working
    //
    // /**
    //  * Key bindings
    //  * @return {object}
    //  */
    // get keyBindings() {
    //   return {
    //     'left up': '_prevKey',
    //     'right down': '_nextKey',
    //   };
    // }
    // /**
    //  * Go to the previous slide with keybindings
    //  *
    //  * @param {object} event
    //  * @private
    //  * @return {*}
    //  */
    // _prevKey(event: any) {
    //   if (this.disableKeys || this.disabled) return;
    //   event.preventDefault();
    //   return this.prev();
    // }
    //
    // /**
    //  * Go to the next slide with keybindings
    //  *
    //  * @param {object} event
    //  * @private
    //  * @return {*}
    //  */
    // _nextKey(event: any) {
    //   if (this.disableKeys || this.disabled) return;
    //   event.preventDefault();
    //   return this.next();
    // }
    /**
     * Go to next slide
     *
     * (The iron-selector selectNext() not working)
     */
    next() {
        if (this.disabled) {
            return;
        }
        let total = this.total;
        if (this.selected === this.children.length - 1) {
            this.selected = 0;
        }
        else if (this.selected < --total || this.loop) {
            this.animating = true;
            this.selected++;
        }
    }
    /**
     * Go to previous slide
     *
     * (The iron-selector selectPrevious() not working)
     */
    prev() {
        if (this.disabled) {
            return;
        }
        if (this.selected === 0) {
            this.selected = this.children.length - 1;
        }
        else if (this.selected > 0 || this.loop) {
            this.animating = true;
            this.selected--;
        }
    }
    /**
     * Alter the selected slide and image to match the tapped dot
     */
    _iconSelect(dot) {
        const element = this.shadowRoot.querySelector("#dots");
        // Have to use TS-IGNORE, if used in function such as in firstUpdated it doesn't
        // contain the updated classList
        const children = FlattenedNodesObserver.getFlattenedNodes(element)
            // @ts-ignore
            .filter((n) => {
            return n.nodeType === Node.ELEMENT_NODE;
        });
        // Toggle the current selected class
        children.forEach((node) => {
            if (node.classList.contains("selected")) {
                node.classList.toggle("selected");
            }
        });
        // Toggle the tapped selected class
        dot.target.classList.toggle("selected");
        const childrenAct = FlattenedNodesObserver.getFlattenedNodes(element)
            // @ts-ignore
            .filter((n) => {
            return n.nodeType === Node.ELEMENT_NODE;
        });
        // Alter the selected attribute to match the newly selected dot
        childrenAct.forEach((node, index) => {
            if (node.classList.contains("selected")) {
                this.selected = index;
            }
        });
    }
    /**
     * Calculate Container Height
     */
    _containerHeight() {
        let height = "auto";
        if (this.direction === "vertical") {
            height = this._calcPercentage(this.total);
        }
        return `height: ${height};`;
    }
    /**
     * Returns the percentage that will to position the icon
     *
     * @param {number|string} value
     * @return {string}
     */
    _calcPercentage(value) {
        const decimalValue = value.toFixed(2);
        return `${decimalValue * 100}%`;
    }
    /**
     * Switch the icon if the item is selected
     *
     * @param {number} item
     * @param {number} selected
     * @return {string}
     */
    _iconDot(item, selected) {
        let itemRe = item;
        --itemRe;
        let icon = "carousel:radio-button-unchecked";
        if (Number(itemRe) === Number(selected)) {
            icon = "carousel:radio-button-checked";
        }
        return icon;
    }
    /**
     * Lazy load content for the given slider number
     * Replaces 'data-src' attribute to 'src'.
     *
     * @param {number} selected
     */
    _lazyContent(selected) {
        const child = this.children[selected];
        if (!child) {
            return;
        }
        // lazy load first level content
        if (child.hasAttribute("data-src")) {
            child.src = child.getAttribute("data-src");
            child.removeAttribute("data-src");
        }
        // Lazy load child content
        const content = child.querySelectorAll("[data-src]");
        if (content.length <= 0) {
            return;
        }
        let i = 0;
        for (i; i < content.length; ++i) {
            content[i].src = content[i].getAttribute("data-src");
            content[i].removeAttribute("data-src");
        }
    }
    /**
     * Listen for track and move the container
     *
     * @param {object} event
     */
    _drag(event) {
        if (this.disableSwipe || this.disabled) {
            // Reset selected to original in case is changed while dragging
            this._X = 0;
            this._Y = 0;
            this.swiping = false;
            return;
        }
        const width = this.offsetWidth;
        const height = this.offsetHeight;
        const x = event.detail.ddx ? event.detail.ddx : 0;
        const y = event.detail.ddy ? event.detail.ddy : 0;
        let finalX = x / width;
        let finalY = y / height;
        let finalLeft = 0;
        let finalTop = 0;
        if (this.direction === "horizontal") {
            finalLeft = this._X + finalX;
        }
        if (this.direction === "vertical") {
            finalTop = this._Y + finalY;
        }
        let finalPositionLeft = Number(finalLeft);
        let finalPositionTop = Number(finalTop);
        // Prevent drag to the wrong direction if is not available
        if (!this._showPrev(this.disabled, this.selected, this.loop)) {
            if (finalPositionLeft > 0) {
                finalPositionLeft = 0;
            }
            if (finalPositionTop > 0) {
                finalPositionTop = 0;
            }
        }
        if (!this._showNext(this.disabled, this.total, this.selected, this.loop)) {
            if (finalPositionLeft < 0) {
                finalPositionLeft = 0;
            }
            if (finalPositionTop < 0) {
                finalPositionTop = 0;
            }
        }
        switch (event.detail.state) {
            case "track":
                this.auto = false;
                this._X = finalPositionLeft;
                this._Y = finalPositionTop;
                this.swiping = true;
                break;
            case "end":
                // this.auto = this.auto;
                this._X = 0;
                this._Y = 0;
                this.swiping = false;
                if (finalPositionLeft >= 0.1 || finalPositionTop >= 0.1) {
                    this.prev();
                }
                else if (finalPositionLeft <= -0.1 || finalPositionTop <= -0.1) {
                    this.next();
                }
                break;
        }
    }
    /**
     * Determine if it should show the next button
     *
     * @param {boolean} disabled
     * @param {number} total
     * @param {number} selected
     * @param {boolean} loop
     * @return {boolean}
     */
    _showNext(disabled, total, selected, loop) {
        let totalRe = total;
        if (disabled) {
            return false;
        }
        if (loop) {
            return true;
        }
        return selected < --totalRe;
    }
    /**
     * Determine if it should show the 'previous' button
     *
     * @param {boolean} disabled
     * @param {number} selected
     * @param {boolean} loop
     * @return {boolean}
     */
    _showPrev(disabled, selected, loop) {
        if (disabled) {
            return false;
        }
        if (loop) {
            return true;
        }
        return selected > 0;
    }
    /**
     * Compute Controls
     * Returns true if needs to display the controls
     *
     * @param {boolean} dots
     * @param {boolean} nav
     * @param {number} total
     * @return {boolean}
     */
    _computeControls(dots, nav, total) {
        return total > 1 && (dots || nav);
    }
}
__decorate([
    property({ reflect: true })
], SkeletonCarousel.prototype, "animating", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "disableKeys", void 0);
__decorate([
    property({ reflect: true })
], SkeletonCarousel.prototype, "tabindex", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "controls", void 0);
__decorate([
    property({ type: Object })
], SkeletonCarousel.prototype, "selectedItem", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "auto", void 0);
__decorate([
    property({ reflect: true })
], SkeletonCarousel.prototype, "direction", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "disabled", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "disableSwipe", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "duration", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "selected", void 0);
__decorate([
    property({ reflect: true })
], SkeletonCarousel.prototype, "swiping", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "total", void 0);
__decorate([
    property({ type: Object })
], SkeletonCarousel.prototype, "autoInterval", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "children", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "dotsArray", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "iconPrev", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "iconNext", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "_X", void 0);
__decorate([
    property()
], SkeletonCarousel.prototype, "_Y", void 0);
window.customElements.define("skeleton-carousel", SkeletonCarousel);
//# sourceMappingURL=skeleton-carousel.js.map