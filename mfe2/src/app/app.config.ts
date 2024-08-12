import { ApplicationConfig, importProvidersFrom, NgZone, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    (globalThis as any).ngZone ? { provide: NgZone, useValue: (globalThis as any).ngZone } : []
  ]
};
