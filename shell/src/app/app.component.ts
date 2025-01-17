import { Component, HostListener, inject, NgZone, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

declare global {
  interface Window {
    isShell: boolean;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    (globalThis as any).ngZone = inject(NgZone);
   }

  ngOnInit() {
    window.isShell = true;
    console.log("isShell", window.isShell);
  }

  @HostListener('window:childRouteChanged', ['$event'])
  onChildRouteChanged(event: any) {
    this.router.navigate([event.detail.route], event.detail.extras);
  }
}
