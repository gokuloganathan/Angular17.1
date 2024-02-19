import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodCatlogueComponent } from "../components/food-catlogue/food-catlogue.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FoodCatlogueComponent]
})
export class AppComponent {
  title = 'AngularV17.1-sandbox';
}
