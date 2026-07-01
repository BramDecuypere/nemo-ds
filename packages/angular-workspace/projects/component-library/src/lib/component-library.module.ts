import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'nemo-ds/loader';

export function initializeCustomElements() {
  return () => defineCustomElements();
}

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeCustomElements,
      multi: true,
    },
  ],
})
export class ComponentLibraryModule {}
