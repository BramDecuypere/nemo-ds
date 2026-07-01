import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentLibraryModule } from 'component-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentLibraryModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
