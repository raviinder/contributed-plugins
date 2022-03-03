import { ChartLoader } from './chart-loader';
/**
 * Class to manage the selection control and lauch chart creation
 * @exports
 * @class ChartControls
 */
export declare class ChartControls {
    /**
     * Slider controls constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} panel the panel
     * @param {ChartLoader} loader the chart loader class
     */
    constructor(mapApi: any, panel: any, loader: ChartLoader, panelOptions: any);
    /**
     * Init the selector control
     * @param {Any} panel the chart panel to add the control to
     */
    private initControl;
    /**
     * Create the chart
     * @function createChart
     * @param {String} selectedChart selected chart
     * @param {Number} selectedLabel selected label
     */
    private createChart;
    /**
     * Compile template to link controller and html
     * @function compileTemplate
     * @param {String} template measure control
     * @return {JQuery<HTMLElement>} temp compile template
     */
    private compileTemplate;
}
export interface ChartControls {
    mapApi: any;
    loader: ChartLoader;
}
