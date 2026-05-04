import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatIcon, RouterLink],
  templateUrl: './footer.html',
  styleUrls: [
    './footer.css',
    '../../../styles/_variables.css'
  ]
})
export class Footer { }
