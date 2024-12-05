import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink, RouterLinkActive, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  public showOverlay = true;

  constructor(private router: Router) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }
  
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }
}
