import easingAnimationFrames from 'easing-animation-frames';
export class ProgressRing {
    constructor() {
        /**
         * Shape
         */
        this.radius = 80;
        this.strokeWidth = 10;
        this.setShapeSettings = ({ radius = this.radius, strokeWidth = this.strokeWidth }) => {
            // Caches calculation results
            this.normalizedRadius = radius - Math.floor(strokeWidth / 2);
            this.circumference = this.normalizedRadius * 2 * Math.PI;
        };
        /**
         * Text
         */
        this.intSize = 30;
        this.decimalSize = Math.floor(this.intSize * 0.7);
        this.disableDigits = false;
        this.setTextSettings = ({ intSize = this.intSize, decimalSize = this.decimalSize }) => {
            // Caches calculation results
            this.textOffset = (intSize - decimalSize) / 4;
        };
        this.parsePercentText = (percent) => {
            if (percent <= 0) {
                return ['0', '00'];
            }
            return percent.toFixed(1).split('.');
        };
        this.colors = [
            '#ff4f40',
            '#ffcd40',
            '#30bf7a',
            '#66a0ff' // blue
        ];
        this.setColorsSettings = ({ invertColors = this.invertColors }) => {
            // Caches calculation results
            const colors = Object.assign({}, this.colors);
            this.colors = invertColors ? colors.reverse() : colors;
        };
        this.setColors = (percent) => {
            let color;
            if (percent <= 25) {
                color = this.colors[0];
            }
            else if (percent <= 50) {
                color = this.colors[1];
            }
            else if (percent <= 75) {
                color = this.colors[2];
            }
            else {
                color = this.colors[3];
            }
            this.ring.style.stroke = color;
            this.ringBackground.style.stroke = color;
            this.percentText.style.fill = color;
        };
        /**
         * Animation
         */
        this.percent = 0;
        this.duration = 4000;
        this.easingType = 'quartInOut';
        this.start = 0;
        this.progress = 0;
        this.isLoaded = false;
        // Called for every requestAnimationFrame
        this.setProgress = ({ progress, stopFrames, restartFrames }) => {
            // Stops the animation if the component
            if (!this.isLoaded && stopFrames) {
                stopFrames();
                return;
            }
            this.progress = progress;
            this.restartFrames = restartFrames;
            // Shape
            const currentPercent = ((this.internalPercent - this.start) * progress) + this.start;
            const offset = currentPercent >= 100 ?
                0 :
                this.circumference - (currentPercent / 100 * this.circumference);
            this.ring.style.strokeDashoffset = String(offset); // strokeDashoffset value type is string
            // Text
            const parsedPercentText = this.parsePercentText(currentPercent);
            this.intText.innerHTML = parsedPercentText[0];
            this.decimalText.innerHTML = parsedPercentText[1];
        };
    }
    radiusUpdated(newValue) {
        this.setShapeSettings({
            radius: newValue
        });
    }
    strokeWidthUpdated(newValue) {
        this.setShapeSettings({
            strokeWidth: newValue
        });
    }
    intSizeUpdated(newValue) {
        this.setTextSettings({
            intSize: newValue
        });
    }
    decimalSizeUpdated(newValue) {
        this.setTextSettings({
            decimalSize: newValue
        });
    }
    invertColorsUpdated(newValue) {
        this.setColorsSettings({
            invertColors: newValue
        });
    }
    percentUpdated() {
        if (this.percent < 0) {
            this.percent = 0;
            return;
        }
        this.restartProgress();
    }
    durationtUpdated() {
        this.restartProgress();
    }
    easingTypeUpdated() {
        this.restartProgress();
    }
    // Called every time the percent attribute gets updated
    restartProgress() {
        if (!this.restartFrames) {
            return;
        }
        // Resets the progresss to 0 and set the start to be the previous percent
        const currentPercent = ((this.internalPercent - this.start) * this.progress) + this.start;
        this.internalPercent = this.percent;
        this.progress = 0;
        this.start = currentPercent;
        // Restarts the template function
        const restartSettings = {
            restartDuration: this.duration,
            restartEasingType: this.easingType,
            restartTemplate: this.setProgress
        };
        this.restartFrames(restartSettings);
    }
    /**
     * Lifecycle Methods
     */
    componentWillLoad() {
        if (this.percent < 0) {
            this.percent = 0;
            return;
        }
        this.isLoaded = true;
        // We need internal percent, which is not reactive to prop changes
        this.internalPercent = this.percent;
        this.setShapeSettings({
            radius: this.radius,
            strokeWidth: this.strokeWidth
        });
        this.setTextSettings({
            intSize: this.intSize,
            decimalSize: this.decimalSize
        });
        this.setColorsSettings({
            invertColors: this.invertColors
        });
        const animationSettings = {
            duration: this.duration,
            easingType: this.easingType,
            template: this.setProgress
        };
        easingAnimationFrames(animationSettings);
    }
    componentDidLoad() {
        this.setColors(this.percent);
    }
    componentDidUpdate() {
        this.setColors(this.percent);
    }
    componentDidUnload() {
        this.isLoaded = false;
    }
    render() {
        return (h("svg", { height: this.radius * 2, width: this.radius * 2 },
            h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, fill: 'transparent', opacity: '0.1', ref: (el) => this.ringBackground = el, class: 'background-ring' }),
            h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, "stroke-dasharray": `${this.circumference} ${this.circumference}`, fill: 'transparent', ref: (el) => this.ring = el, class: 'ring' }),
            !this.disableDigits &&
                h("text", { x: '50%', y: '50%', "dominant-baseline": 'middle', "text-anchor": 'middle', "font-size": this.intSize, ref: (el) => this.percentText = el },
                    h("tspan", { "font-size": this.intSize, ref: (el) => this.intText = el, class: 'intText' }),
                    h("tspan", { class: 'decimalPointText' }, "."),
                    h("tspan", { "font-size": this.decimalSize, dy: this.textOffset, ref: (el) => this.decimalText = el, class: 'decimalText' }),
                    h("tspan", { "font-size": this.decimalSize, class: 'percentText' }, "%"))));
    }
    static get is() { return "progress-ring"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "decimalSize": {
            "type": Number,
            "attr": "decimal-size",
            "watchCallbacks": ["decimalSizeUpdated"]
        },
        "disableDigits": {
            "type": Boolean,
            "attr": "disable-digits"
        },
        "duration": {
            "type": Number,
            "attr": "duration",
            "watchCallbacks": ["durationtUpdated"]
        },
        "easingType": {
            "type": String,
            "attr": "easing-type",
            "watchCallbacks": ["easingTypeUpdated"]
        },
        "intSize": {
            "type": Number,
            "attr": "int-size",
            "watchCallbacks": ["intSizeUpdated"]
        },
        "invertColors": {
            "type": Boolean,
            "attr": "invert-colors",
            "watchCallbacks": ["invertColorsUpdated"]
        },
        "percent": {
            "type": Number,
            "attr": "percent",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["percentUpdated"]
        },
        "radius": {
            "type": Number,
            "attr": "radius",
            "watchCallbacks": ["radiusUpdated"]
        },
        "strokeWidth": {
            "type": Number,
            "attr": "stroke-width",
            "watchCallbacks": ["strokeWidthUpdated"]
        }
    }; }
    static get style() { return "/**style-placeholder:progress-ring:**/"; }
}