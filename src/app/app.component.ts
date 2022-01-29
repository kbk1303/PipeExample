import { Component } from '@angular/core';
import { MorseMD5Pipe } from './morse-md5.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipeExample';

  constructor() {
    console.log(MorseMD5Pipe.prototype.transform('.-'));
    console.log(MorseMD5Pipe.prototype.transform('A'));
  }
}
