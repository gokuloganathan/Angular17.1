import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from "./components/food-list/food-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FoodListComponent]
})
export class AppComponent {
  title = 'AngularV17.1-sandbox';
}
