import 'chartjs-adapter-date-fns';
/**
 * Creates line charts.
 * @exports
 * @class ChartLine
 */
export declare class ChartLine {
    private _data;
    private _rangex;
    private _rangey;
    /**
     * Get datasets
     * @property datasets
     * @return {Object} original datasets (not filtered one)
     */
    get datasets(): object[];
    /**
     * Get range for x axis
     * @property rangeX
     * @return {Object} the min and max values for the datasets x axis
     */
    get rangeX(): any;
    /**
     * Get range for y axis
     * @property rangeY
     * @return {Object} the min and max values for the datasets y axis
     */
    get rangeY(): any;
    /**
     * Chart bar constructor
     * @constructor
     * @param {Any} config the chart configuration
     * @param {Object} attrs the feature attributes
     */
    constructor(config: any, attrs: object);
    /**
     * Set the chart data
     * @function setData
     * @param {Object} layerData the layer data provided by configuration
     * @param {Object} attrs the feature attributes
     * @param {String[]} colors the array of colors to use
     * @param {String} xType the x axis type, date or linear
     */
    setData(layerData: object, attrs: object, colors: string[], xType: string): {
        isDateTimeObjForXAxis: boolean;
    };
    /**
     * Set ranges min and max for the dataset specified axis
     * @function setRanges
     * @param {Object[]} dataset the layer dataset to specify the range
     * @param {String} axis the axis to specify the range (x or y)
     */
    setRanges(dataset: object[], axis: string): void;
    /**
     * Set the chart axis
     * @function setAxis
     * @param {String} axe the axis to set (xAxes or yAxes)
     * @param {Any} config the chart configuration
     * @param {Object} attrs the feature attributes
     * @return {Object} the axis object
     */
    setAxis(axe: string, config: any, attrs: object): {
        [k: string]: any;
    };
}
export interface ChartLine {
    options: any;
    type: string;
    data: any;
    title: string;
    language: string;
    ranges: any;
    isDateTimeObjForXAxis: any;
}
