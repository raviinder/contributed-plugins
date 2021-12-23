import {
    MIN_MAX_TEMPLATE
} from './template';

import { SliderBar } from './slider-bar';

const { detect } = require('detect-browser');

export interface SliderControls {
    mapApi: any;
    descVisible: boolean;
}

export class SliderControls {

    /**
     * Slider controls constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} panel the panel
     * @param {String[]} templates the controls template
     * @param {SliderBar} slider the slider bar
     */
    constructor(mapApi: any, panel: any, templates: string[], slider: SliderBar) {
        this.mapApi = mapApi;
        this.descVisible = false;
        const that = this;

        mapApi.agControllerRegister('MinMaxSliderCtrl', function() {
            const setHTML = (isMax: boolean) => {
                // remove the collapse class when slider is minimized and put it back if need be
                if (!isMax) {
                    document.querySelector('[id^=rangeSlider]').classList.remove('collapsed');
                } else if (isMax && !that.descVisible) {
                    document.querySelector('[id^=rangeSlider]').classList.add('collapsed');
                }

                document.querySelector('[id^=rangeSlider]').parentElement.classList.toggle('slider-min-ui');
                document.querySelector('[id^=rangeSlider]').getElementsByClassName('slider-minmax-control')[0].children[0].classList.toggle('slider-max-control-icon');
            };

            this.isMax = slider.maximize;
            setTimeout(() => {
                if (!this.isMax) setHTML(this.isMax);
            }, 0);

            this.show = () => {
                slider.maximize = !slider.maximize;
                this.isMax = slider.maximize;
                setHTML(slider.maximize);
            };
        });

        mapApi.agControllerRegister('DescSliderCtrl', function() {
            const setHTML = () => {
                const sliderCtrl = document.querySelector('[id^=rangeSlider]');
                if (this.isShow) {
                    sliderCtrl.classList.remove('collapsed')
                } else {
                    sliderCtrl.classList.add('collapsed')
                }
            };

            this.isShow = slider.maximizeDesc;
            that.descVisible = slider.maximizeDesc;
            setHTML();

            this.show = () => {
                slider.maximizeDesc = !slider.maximizeDesc;
                this.isShow = slider.maximizeDesc;
                that.descVisible = slider.maximizeDesc;

                setHTML();
            };
        });

        mapApi.agControllerRegister('LockSliderCtrl', function() {
            this.isLocked = slider.lock;
            this.isDual = slider.dual;

            SliderBar.getReverseState().subscribe(value => {
                this.isReverse = value;
            });

            // toggle lock setting to lock left anchor
            this.lock = () => {
                slider.lock = !slider.lock;
                this.isLocked = slider.lock;
            };
        });

        mapApi.agControllerRegister('LoopSliderCtrl', function() {
            this.isLooped = slider.loop;

            // toggle loop setting to play animation in loop
            this.loop = () => {
                slider.loop = !slider.loop;
                this.isLooped = slider.loop;

                // set class to show if button is active/inactive
                const elem = mapApi.fgpMapObj.esriMap.root.parentElement.parentElement.getElementsByClassName('slider-loop-control')[0];
                elem.getElementsByTagName('md-icon')[0].classList.toggle('slider-loop-control-active');
            };
        });

        mapApi.agControllerRegister('ReverseSliderCtrl', function() {

            this.isReverse = slider.reverse;

            // toggle reverse setting to change animation direction
            this.reverse = () => {
                slider.reverse = !slider.reverse;
                this.isReverse = slider.reverse;

                SliderBar.setReverseState(this.isReverse);
            };

        });

        mapApi.agControllerRegister('StepSliderCtrl', function() {
            // step previous or next
            this.step = (direction: string) => { slider.step(direction); }
        });

        mapApi.agControllerRegister('PlaySliderCtrl', function() {
            // get play state from observable
            SliderBar.getPlayState().subscribe(value => {
                this.isPlaying = value;
            });

            // start play
            this.play = () => {
                slider.play(!this.isPlaying);
            }
        });

        mapApi.agControllerRegister('RefreshSliderCtrl', function() {
            this.refresh = () => { slider.refresh(); }
        });

        mapApi.agControllerRegister('DelaySliderCtrl', function() {
            SliderBar.getPlayState().subscribe(value => {
                this.isPlay = value;
            });

            // set selected delay
            this.selectedDelay = slider.delay;
            this.selectDelay = () => { slider.delay =  this.selectedDelay; }
        });

        mapApi.agControllerRegister('ExportSliderCtrl', function() {
            // toggle export gif switch
            this.export = slider.export;
            this.selectExport = () => {
                slider.export = this.export;

                if (!this.export) { slider.exportToGIF(); }
            }
        });

        // loop trought array of controls to add then add them
        const barControls = panel.body.find('.slider-controls');

        for (let template of templates) {
            if (template.includes('slider-reverse-control')) {
                // add reverse control to play control div
                barControls.find('.slider-play-control').append(this.compileTemplate(template));
            } else if (template.includes('slider-delay-control')) {
                // add delay control to play control div
                barControls.find('.slider-play-control').append(this.compileTemplate(template));
            } else if (template.includes('slider-loop-control')) {
                // add loop control to play control div
                barControls.find('.slider-play-control').prepend(this.compileTemplate(template));
            } else if (template.includes('slider-export-control')) {
                // detect browser because Safari and IE does not support export GIF
                const browser = detect();
                if (browser.name === 'chrome' || browser.name === 'firefox') {
                    barControls.append(this.compileTemplate(template));
                }
            } else {
                barControls.append(this.compileTemplate(template));
            }
        }

        // add the minimize maximize button to slider
        panel.body.find('.slider-content').prepend(this.compileTemplate(MIN_MAX_TEMPLATE));
    }

    /**
     * Compile template to link controller and html
     * @function compileTemplate
     * @param {String} template measure control
     * @return {JQuery<HTMLElement>} temp compile template
     */
    compileTemplate(template: string): JQuery<HTMLElement> {
        let temp = $(template);
        this.mapApi.$compile(temp);
        return temp;
    }
}
