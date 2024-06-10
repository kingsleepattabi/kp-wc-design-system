import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-ang-app';

  handleToggleChange(event: CustomEvent) {
    // Access event details if needed
    console.log('Value changed:', event.detail);
    // Perform further actions as needed
  }

  handleCheckboxChange(event: CustomEvent) {
    // Access event details if needed
    console.log('Value changed:', event.detail);
    // Perform further actions as needed
  }
}
