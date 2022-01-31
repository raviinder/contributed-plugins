export declare const CANVAS_TEMPLATE = "<canvas id=\"rvChart\" class=\"rv-chart\" role=\"img\" aria-label=\"{{ 'plugins.chart.chartAria' | translate }}\"></canvas>";
export declare const LOADING_SPLASH_TEMPLATE = "\n<div class=\"rv-loading-screen\" layout layout-align=\"center center\">\n    <div class=\"rv-loading-section rv-left\"></div>\n    <div class=\"rv-loading-section rv-right\"></div>\n    <div class=\"rv-spinner google-spin-wrapper\">\n        <div class=\"google-spin\"></div>\n    </div>\n</div>";
export declare const NO_DATA_TEMPLATE = "\n<div class=\"rv-chart-nodata\">{{ 'plugins.chart.noValidData' | translate }}</div>";
export declare const CHART_SELECT_TEMPLATE = "\n<div ng-controller=\"ChartSelectCtrl as ctrl\">\n    <div class=\"rv-chart-select\" style=\"float:left\">\n        <md-input-container class=\"md-block\" md-no-float flex>\n            <label>{{ 'plugins.chart.selectChart' | translate }}</label>\n            <md-select\n                aria-label=\"{{ 'plugins.chart.selectChart' | translate }}\"\n                ng-model=\"ctrl.selectedChart\"\n                ng-change=\"selectChart()\">\n                <md-option ng-repeat=\"(key, value) in ctrl.charts\" ng-value=\"key\">\n                    {{ value }}\n                </md-option>\n            </md-select>\n        </md-input-container>\n    </div>\n    <div class=\"rv-chart-select\"  style=\"float:left\" abc=\"{ctrl.chartType}\">\n        <md-input-container class=\"md-block\" md-no-float flex>\n            <label>{{ 'plugins.chart.selectLabel' | translate }}</label>\n            <md-select\n                aria-label=\"{{ 'plugins.chart.selectLabel' | translate }}\"\n                ng-model=\"ctrl.selectedLabel\"\n                ng-change=\"LabelChange()\">\n                <md-option ng-repeat=\"label in labels\" ng-value=\"{{label.key}}\">\n                    {{ label.measure }}\n                </md-option>\n            </md-select>\n        </md-input-container>\n    </div>\n</div>";
export declare const CHART_TEMPLATE: string;
export declare const DETAILS_TEMPLATE = "\n<div class=\"rv-chart-details\">\n    <div class=\"rv-chart-details-value\"></div>\n    <md-divider></md-divider>\n</div>";
