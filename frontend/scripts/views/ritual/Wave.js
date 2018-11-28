/**
 * Wavvy background generator
 * @class
 */
export default class Wave {


    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container, opts = {}) {

        if(!container) throw new Error('No container passed to the wave class, exiting');

        // Options
        this.opts = opts;

        // DOM Elements
        this.container = container;
        this.wave = this.generateWaveElement();

        // Options
        this.waveWidth = container.offsetWidth;
        this.waveHeight = container.clientHeight / 2;
        this.waveDelta = this.opts.delta ? this.opts.delta : 30;
        this.speed = this.opts.speed ? this.opts.speed : .25;
        this.wavePoints = this.opts.points ? this.opts.points : 4;
        this.points = [];

        // Values
        this.width = container.offsetWidth;
        this.height = container.offsetHeight;
        this.lastUpdate = null;
        this.totalTime = 0;

        // Start Animation
        this.loop();

    }


    /**
     * Generate the wave SVG element with the path inside
     * @return {HTMLElement} svg
     */
    generateWaveElement() {

        const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.setAttributeNS(null, 'width', '100%');
        element.setAttributeNS(null, 'height', '100%');
        element.setAttributeNS(null, 'version', '1.1');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttributeNS(null, 'fill', this.opts.fill ? this.opts.fill : '#ebd4d0');

        this.wavePath = path;

        element.appendChild(path);
        this.container.appendChild(element);

        return element;

        // <svg class="ritual-wave" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" id="intro"><path id="wave" d="" fill="#ebd4d0" data-wave="svg"/></svg>

    }


    /**
     * Calculate
     * @param  {Number} factor
     * @return {Array}
     */
    calculateWavePoints(factor) {

        let points = [];

        for (let i = 0; i <= this.wavePoints; i++) {

            let x = i / this.wavePoints * this.waveWidth;
            let sinSeed = (factor + (i + i % this.wavePoints)) * this.speed * 100;
            let sinHeight = Math.sin(sinSeed / 100) * this.waveDelta;
            let yPos = Math.sin(sinSeed / 100) * sinHeight + this.waveHeight;

            points.push({ x: x, y: yPos });

        }

        return points;

    }


    /**
     * Build the path
     * @param  {Array} points
     * @return {String}
     */
    buildPath(points) {

        let SVGString = 'M ' + points[0].x + ' ' + points[0].y;

        let cp0 = {
            x: (points[1].x - points[0].x) / 2,
            y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
        };

        SVGString += ' C ' + cp0.x + ' ' + cp0.y + ' ' + cp0.x + ' ' + cp0.y + ' ' + points[1].x + ' ' + points[1].y;

        let prevCp = cp0;
        let inverted = -1;

        for (let i = 1; i < points.length - 1; i++) {

            let cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
            let cp1 = {
                x: (points[i].x - prevCp.x) + points[i].x,
                y: (points[i].y - prevCp.y) + points[i].y
            };

            SVGString += ' C ' + cp1.x + ' ' + cp1.y + ' ' + cp1.x + ' ' + cp1.y + ' ' + points[i + 1].x + ' ' + points[i + 1].y;
            prevCp = cp1;
            inverted = -inverted;

        };

        SVGString += ' L ' + this.width + ' ' + this.height;
        SVGString += ' L 0 ' + this.height + ' Z';

        return SVGString;

    }


    /**
     * Tick animation loop
     * @return {void}
     */
    loop() {

        let now = Date.now();

        if (this.lastUpdate) {

            let elapsed = (now - this.lastUpdate) / 1000;

            this.lastUpdate = now;
            this.totalTime += elapsed;

            let factor = this.totalTime * Math.PI;
            this.wavePath.setAttribute('d', this.buildPath(this.calculateWavePoints(factor)));

        } else {
            this.lastUpdate = now;
        }

        window.requestAnimationFrame(this.loop.bind(this));

    }


    /**
     * On resize handle
     * @return {void}
     */
    resize() {

        this.width = this.waveWidth = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

    }


}
