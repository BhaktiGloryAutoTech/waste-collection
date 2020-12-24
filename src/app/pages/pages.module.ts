import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { QualityModule } from './quality/quality.module';
import { WasteModule } from './waste/waste.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    QualityModule,
    MiscellaneousModule,
    WasteModule
  ],
  declarations: [
    PagesComponent,
    
  ],
 
  providers: [],
})
export class PagesModule {
}
