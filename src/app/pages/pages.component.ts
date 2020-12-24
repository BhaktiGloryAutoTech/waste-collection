import { Component, OnInit } from "@angular/core";
import { QualityGuard } from "app/@theme/guards/quality.guard";
import { MENU_ITEMS } from "./pages-menu";
@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  view: Boolean = true;
  view_all: Boolean = true;
  view_group: Boolean = true;
  constructor(public qualityGuard: QualityGuard) {}
  ngOnInit(): void {
    this.menu.forEach((e) => {
      switch (e.title) {
        case "Quality":
          this.view = this.qualityGuard.accessRights("view");
          this.view_all = this.qualityGuard.accessRights("view all");
          this.view_group = this.qualityGuard.accessRights("view group");
          if (
            this.view == false &&
            this.view_all == false &&
            this.view_group == false
          ) {
            e.hidden = true;
          }
          break;
      }
    });
  }
}
