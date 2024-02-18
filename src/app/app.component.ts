import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalComponent } from "../components/signal/signal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SignalComponent]
})
export class AppComponent {
  title = 'AngularV17.1-sandbox';
}
