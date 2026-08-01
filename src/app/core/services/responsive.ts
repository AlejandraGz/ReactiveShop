import { inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private breakpointObserver = inject(BreakpointObserver);

  readonly isHandset$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  readonly isTablet$ = this.breakpointObserver
    .observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  readonly isWeb$ = this.breakpointObserver
    .observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

}