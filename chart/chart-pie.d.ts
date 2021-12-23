/**
 * Creates pie and doughnut charts.
 * @exports
 * @class ChartPie
 */
export declare class ChartPie {
    /**
     * Chart bar constructor
     * @constructor
     * @param {Any} config the chart configuration
     * @param {Object} attrs the feature attributes
     */
    constructor(config: any, attrs: object);
    /**
     * Set the chart options
     * @function setOptions
     * @param {Number} cutOut the cut out percentage for the inside hole
     * @return {Object} the chart options
     */
    setOptions(cutOut: number): object;
    /**
     * Set the chart colors
     * @function setColors
     * @param {Dataset[]} datasets the datasets to apply color to
     * @param {String[]} colors the array of colors to use
     */
    setColors(datasets: dataset[], colors: string[]): void;
}
interface dataset {
    backgroundColor: string[];
}
export interface ChartPie {
    _RV: any;
    options: any;
    type: string;
    data: any;
    title: string;
}
export {};
