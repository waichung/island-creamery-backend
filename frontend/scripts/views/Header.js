/**
 * @class Header
 */
export default class Header {

    constructor() {

        this.container = document.querySelector('[data-header="container"]');
        this.navContainer = this.container.querySelector('[data-header="navigation"]');
        this.nav = this.navContainer.querySelector('[data-navigation="items"]');
        this.navItems = this.container.querySelector('[data-navigation="item"]');
        this.navToggle = this.navContainer.querySelector('[data-navigation="toggle"]');

        this.navToggle.addEventListener('click', this.toggleNav.bind(this));

    }

    toggleNav(event) {

        this.navToggle.classList.toggle('nav__toggle--toggled');
        this.nav.classList.toggle('toggled');

    }

    toggleCondensed() {

        this.container.classList.toggle('header--condensed');

    }

}
