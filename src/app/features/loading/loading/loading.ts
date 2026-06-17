import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../../core/services/loading-service';

@Component({
  selector: 'app-loading',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class LoadingComponent {

  loading$;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }
}
