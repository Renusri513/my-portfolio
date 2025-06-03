import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Required for *ngIf directive

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // Import CommonModule for structural directives like *ngIf
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Assuming you have a separate SCSS file for styling
})
export class NavbarComponent {
  isMenuOpen = false; // Tracks whether the menu is open

  // Toggles the menu state
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Closes the menu
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
