import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import eruda from 'eruda';
import {isDevMode} from "@angular/core";

if (isDevMode())
{
  console.log('initializing eruda');
  eruda.init();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
