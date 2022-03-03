export default class Chart {
    private _mapApi;
    private _panel;
    private _panelDetails;
    private _loader;
    _panelOptions: object;
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any): void;
    /**
    * Set details panel value
    * @function findDetailsconfig
    * @param {String} id the layer id for this feature
    * @param {Object[]} layersConfig the chart layers configuration array
    * @param {Any} feature the feature to use for details panel values
    */
    findDetailsconfig(id: string, layersConfig: object[], feature: any): void;
    /**
     * Compile template to link controller and html
     * @function compileTemplate
     * @param {String} template measure control
     * @return {JQuery<HTMLElement>} temp compile template
     */
    private compileTemplate;
}
export default interface Chart {
    _RV: any;
    config: any;
    translations: any;
}
