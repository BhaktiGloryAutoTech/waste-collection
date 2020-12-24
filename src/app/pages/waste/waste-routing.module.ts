import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SuccessComponent } from "./success/success.component";
import { WasteCollectionComponent } from "./waste-collection/waste-collection.component";
import { WasteSummaryComponent } from "./waste-summary/waste-summary.component";

const routes: Routes = [
  {
    path: "",
    component: WasteSummaryComponent,
  },
  {
    path: "collection/:id",
    component: WasteCollectionComponent,
  },
  {
    path: "success",
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WasteRoutingModule {}
