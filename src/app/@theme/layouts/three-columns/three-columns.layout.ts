import { Component } from '@angular/core';

@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      

      

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>
      <!-- <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer> -->
    </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {}
