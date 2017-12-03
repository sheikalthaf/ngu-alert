export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ngualert.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.ngualert',
    external: ['@angular/core', '@angular/animations', '@angular/platform-browser', 'rxjs/Subject'],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/animations': 'ng.AnimationTriggerMetadata',
        '@angular/platform-browser': 'ng.platform-browser',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable',
        'rxjs/Subject': 'Rx.Subject'
    }
}