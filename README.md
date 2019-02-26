# ngu-alert

Angular Universal alert

## Installation

`npm install @ngu/alert --save`

## Sample

Include NguAlertModule in your app module:

```javascript
import { NguAlertModule } from '@ngu/alert';

@NgModule({
  imports: [NguAlertModule]
})
export class AppModule {}
```

Then use in your component(s):

```javascript
import { Component, OnInit } from '@angular/core';
import { NguAlertService } from '@ngu/alert';

@Component({
  selector: 'sample',
  template: `<h1>Ngu Alert</h1>`,
})
export class SampleComponent implements OnInit {
    constructor(private alert: NguAlertService)

    ngOnInit() {
        for (i = 0; i < 4; i++) {
            this.alert.open({
                heading: 'This is a heading',
                msg: 'This is a message from alert',
                type: 'success',
                duration: 10000
            });
        }
    }
}
```

## License

[MIT](LICENSE) license.
