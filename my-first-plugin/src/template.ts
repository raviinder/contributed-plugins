// this is where you will add all needed html template

// this is a sample to show you how to link your button with Angular controller
// ng-controller will link to a controller in one of your ts file
// to access translation, use {{ 'plugins.YOUR PLUGIN NAME.YOUR TRANSLATION VALUE' | translate }}
// in this sample, ng-click will be link to a function called sampleFunction inside my controller
export const SAMPLE_BUTTON = `
<div class="" ng-controller="SampleCtrl as ctrl">
    <md-button
        aria-label="{{ 'plugins.myFirstPlugin.placeHolder' | translate }}"
        class="rv-button-square md-button ng-scope md-ink-ripple"
        ng-click="ctrl.sampleFunction()">
            {{ 'plugins.myFirstPlugin.placeHolder' | translate }}
        <md-tooltip>{{ 'plugins.myFirstPlugin.placeHolder' | translate }}</md-tooltip>
    </md-button>
</div>
`;