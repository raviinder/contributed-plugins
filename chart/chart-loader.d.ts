/**
 * Creates and manages charts.
 * @exports
 * @class ChartLoader
 */
export declare class ChartLoader {
    private _chart;
    private _mapApi;
    private _panel;
    private _sliderX;
    private _sliderY;
    private _xType;
    private _yType;
    private _xRange;
    private _yRange;
    private _lineChartOptions;
    private _barChartOptions;
    private _pieChartOptions;
    static defaultColors: string[];
    /**
     * Chart loader constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     */
    constructor(mapApi: any);
    /**
     * Initialize the slider
     * @function initSlider
     * @param {Any} slider slider div
     * @param {Number} min minimum value for slider
     * @param {Number} max maximum value for slider
     * @param {String} xType the x axis type, date or linear
     * @param {String} language the viewer language
     * @param {Number} length the length of linear value
     */
    initSlider(slider: any, min: number, max: number, type: string, language: string, length: number): void;
    /**
     * Set pips (slider labels) format
     * @function formatPips
     * @param {Any} value the value to display (number, string or date)
     * @param {String} type the pips type (date or linear)
     * @param {String} lang the language to use
     * @param {Number} length the length of linear pips
     * @return {any} value the formated value
     */
    formatPips(value: any, type: string, lang: string, length: number): any;
    /**
     * Format tooltips
     * @function setTooltips
     * @param {string} type type of tooltips (will be pass to format pips function)
     * @param {string} language the viewer language
     * @param {Number} length the length of tooltips
     * @return {Object[]} tooltips as an array of tooltip object
     */
    setTooltips(type: string, language: string, length: number): object[];
    /**
     * Parse the graph pips labels value and set slider range
     * @function parsePips
     * @param {String} axis axis to parse labels for (x or y)
     * @param {Date} type the type of axis (linear or date)
     * @param {Any} min min range to parse the value
     * @param {Any} max max range to parse the value
     */
    setSliderRanges(axis: string, type: string, min: any, max: any): void;
    /**
     * Parse the graph value with the range from the slider
     * @function parseDatasetsRange
     * @param {Any} xRange x range values to filter
     * @param {Any} yRange y range values to filter
     * @param {Any} data data to filter
     */
    parseDatasetsRange(xRange: any, yRange: any, data: any): object[];
    /**
     * Destroy the slider and chart
     * @function destroy
     */
    destroy(): void;
    /**
     * Destroy the slider
     * @function destroySlider
     */
    private destroySlider;
    /**
     * Destroy the chart
     * @function destroyChart
     */
    private destroyChart;
    /**
     * Create pie chart
     * @function createPieChart
     * @param {Object} attrs attributes to use for the graph
     * @param {Any} config the configuration for the chart
     */
    createPieChart(attrs: object, config: any): void;
    /**
     * Create bar chart
     * @function createBarChart
     * @param {Object} attrs attributes to use for the graph
     * @param {Any} config the configuration for the chart
     */
    createBarChart(attrs: object, config: any): void;
    /**
     * Create line chart
     * @function createLineChart
     * @param {Object} attrs attributes to use for the graph
     * @param {Any} config the configuration for the chart
     */
    createLineChart(attrs: object, config: any): void;
    /**
     * Draw the chart
     * @function draw
     * @param {Any} opts the chart options
     */
    draw(opts: any): void;
    /**
     * Get global options fot all charts
     * @function getGlobalOptions
     * @return {Object} the global options
     */
    private getGlobalOptions;
    /**
     * Parse feature datasets
     * @function parse
     * @param {Any} config the configuration
     * @param {Any} attrs the feature attributes
     * @param {String[]} colors the array of colors to use
     * @param {String} xType the x axis type, date or linear
     * @return {Object} the parse datasets
     */
    static parse(config: any, attrs: any, colors?: string[], xType?: string): {
        datasets: any[];
    };
    /**
     * Get chart labels
     * @function getLabels
     * @param {Any} config the configuration
     * @param {Any} attrs the feature attributes
     * @param {Number} index the index to start initialize to 0 if not provided
     * @return {String[]} the array of labels
     */
    static getLabels(config: any, attrs: any, isMultiField?: boolean, index?: number): string[];
}
export interface ChartLoader {
    defaultColors: string[];
}
