import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatIcon, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: [
    './navbar.css',
    '../../../styles/_variables.css'
  ]
})
export class Navbar {}
