import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';
import { LoadingService } from '../services/loading-service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loading = inject(LoadingService);

  loading.show();

  return next(req).pipe(
    delay(200),
    finalize(() => loading.hide())
  );
};