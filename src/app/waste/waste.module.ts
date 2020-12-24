import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WasteRoutingModule } from './waste-routing.module';
import { WasteSummaryComponent } from './waste-summary/waste-summary.component';
import { WasteCollectionComponent } from './waste-collection/waste-collection.component';
import { SuccessComponent } from './success/success.component';
import { SharedModule } from 'app/@theme/shared.module';


@NgModule({
  declarations: [WasteSummaryComponent, WasteCollectionComponent, SuccessComponent],
  imports: [
    CommonModule,
    WasteRoutingModule,
    SharedModule
  ]
})
export class WasteModule { }
