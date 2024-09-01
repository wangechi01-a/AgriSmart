import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  userName: string = 'John Doe';
  userImage: string = 'assets/user-placeholder.png';

  constructor() { }

  ngOnInit(): void {
    // Fetching userdata from a service to get the user details.
  }

  onEditProfilePic(): void {
    // Logic to change the profile picture
    alert('Edit Profile Picture clicked');
  }

  onEditProfile(): void {
    // Logic for editing profile
    alert('Edit Profile button clicked');
  }


}
