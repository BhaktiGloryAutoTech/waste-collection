import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { NgxLoadingModule } from 'ngx-loading';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbInputModule,
  NbCardModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbTooltipModule,
  NbAccordionModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule
} from "@nebular/theme";

import { NbSecurityModule } from "@nebular/security";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { FormsModule, FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbInputModule,
  NbCardModule,
  NbActionsModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  ngFormsModule,
  FormsModule,
  ReactiveFormsModule,
  NgxDatatableModule,
  NbTooltipModule,
  ColorPickerModule,
  NgSelectModule,
  NgbDatepickerModule,
  NgxLoadingModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  //NgbModal
  NbAccordionModule,
  
];

@NgModule({
  declarations: [],
  imports: [NgxLoadingModule.forRoot({}),CommonModule, ...NB_MODULES, OwlDateTimeModule,
    OwlNativeDateTimeModule, NgbModule
  ],

  exports: [...NB_MODULES ,NgxLoadingModule,OwlDateTimeModule,
    OwlNativeDateTimeModule,],
  providers:[ DatePipe],
  entryComponents: [ ]
})
export class SharedModule { }
