import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cssUrl: SafeResourceUrl;
  darkMode: boolean;

  constructor(private sanitizer: DomSanitizer) {
    this.cssUrl = sanitizer.bypassSecurityTrustResourceUrl('/assets/dark-mode.css');
    this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

