import { Component, ViewEncapsulation } from '@angular/core';
import { SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

@Component({
  selector: 'fabric-ui-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
  disabled = true;
  required = true;
  labelContent = 'I\'m a Label';
  spinnerSize = SpinnerSize;
}
