class Slider {
    static CLASS_SLIDER_IMG = "slider-img";
    static CLASS_SLIDER_IMG_ACTIVE = "slider-img__active";
    static DEFAULT_IMG_INDEX = 0;


    constructor(rootEl, options) {
        this.options = {
            defaultImgIndex: Slider.DEFAULT_IMG_INDEX,
            ...options
        };

        this.rootEl = rootEl;
        this.activeImgIndex = this.options.defaultImgIndex;

        this.imgElements = Array.from(rootEl.children);

        this.bindImgStyles();
        this.bindEvents();
        this.openImgbyIndex(this.activeImgIndex);
        this.timeId = this.setImgInterval();
    }

    bindImgStyles () {
        this.imgElements.forEach((img) => {
            img.classList.add(Slider.CLASS_SLIDER_IMG);
        })
    }

    bindEvents () {
        this.rootEl.addEventListener("click", this.onRootElClick.bind(this));
    }

    setImgInterval() {
        return setInterval(() => {this.onRootElClick()}, 3000);
    }

    onRootElClick (event) {
        clearInterval(this.timeId);
        this.closeImgbyIndex(this.activeImgIndex);
        this.activeImgIndex = this.getnextImgIndex(this.activeImgIndex);
        this.openImgbyIndex(this.activeImgIndex);
        this.timeId = this.setImgInterval();
    }

    closeImgbyIndex (index) {
        this.imgElements[index].classList.remove(Slider.CLASS_SLIDER_IMG_ACTIVE);
    }

    getnextImgIndex(index) {
        index++;
        if (index >= this.imgElements.length) {
            index = 0;
        }
        return index;
    }

    openImgbyIndex (index) {
        this.imgElements[index].classList.add(Slider.CLASS_SLIDER_IMG_ACTIVE);
    }
}