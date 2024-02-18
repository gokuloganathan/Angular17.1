import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HydratedComponentComponent } from "./hydrated-component/hydrated-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HydratedComponentComponent]
})
export class AppComponent {
  title = 'AngularV17.1-sandbox';
}
