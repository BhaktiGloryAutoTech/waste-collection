import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./@theme/guards/auth.guard";
import { QualityGuard } from "./@theme/guards/quality.guard";
import { NotFoundComponent } from "./pages/miscellaneous/not-found/not-found.component";
import { PagesComponent } from "./pages/pages.component";
import { SuccessComponent } from "./waste/success/success.component";
import { WasteCollectionComponent } from "./waste/waste-collection/waste-collection.component";
import { WasteSummaryComponent } from "./waste/waste-summary/waste-summary.component";

export const routes: Routes = [
  // {
  //   path: "summary",
  //   component: WasteSummaryComponent,
  // },
  // {
  //   path: "collection/:id",
  //   component: WasteCollectionComponent,
  // },
  // {
  //   path: "success",
  //   component: SuccessComponent,
  // },
  // {
  //   path: "waste",
  //   loadChildren: () =>
  //     import("./waste/waste.module").then((m) => m.WasteModule),
  //   //canActivate: [StopAuthGuard]
  // },
  {
    path: "pages",
    component: PagesComponent,
    children: [
      {
        path: "waste",
        loadChildren: () =>
          import("./pages/waste/waste.module").then((m) => m.WasteModule),
        //canActivate: [StopAuthGuard]
      },
    ],
  },

  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth' },
  { path: "", redirectTo: "pages/waste", pathMatch: "full" },
  { path: "**", redirectTo: "pages/waste" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
