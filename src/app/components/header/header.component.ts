import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  userImage: string = 'path/to/profile-image.jpg';
  userName: string = 'User Name';

  showDropdown(dropdownId: string): void {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      dropdown.style.display = 'block';
    }
  }

  hideDropdown(dropdownId: string): void {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      dropdown.style.display = 'none';
    }
  }

  toggleSidebar(): void {
    // Implement sidebar toggle functionality
  }

  onLogout(): void {
    // Implement logout functionality
  }
}
