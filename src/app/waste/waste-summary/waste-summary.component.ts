import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PracService } from "app/@theme/services/prac.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "ngx-waste-summary",
  templateUrl: "./waste-summary.component.html",
  styleUrls: ["./waste-summary.component.scss"],
})
export class WasteSummaryComponent implements OnInit {
  doctorName: any = [];
  dateSelected: any = null;
  waste: any;
  doctorId: any = null;
  summary: any;
  docSummary: any;
  flag: boolean = false;
  flagemp: boolean = false;
  dateFlag: boolean = false;
  dateflag2: boolean = false;
  datePipeString: any = null;
  constructor(
    private prac: PracService,
    private datePipe: DatePipe,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getDoctor();
    this.getAccordionData();
  }

  getDoctor() {
    this.prac.getAllDoctor().subscribe(
      (data: any) => {
        if (data["status"] == 200) {
          this.doctorName = data["data"];
        }
      },
      (error) => {
        this.toastr.error("Sometthing wrong");
      }
    );
  }

  selectedDoctorId(value: any) {
    if (this.datePipeString != null) {
      this.flagemp = false;
      this.doctorId = value.drid;
      let obj = {
        drid: Number(value.drid),
        created_date: String(this.datePipeString),
      };
      this.flag = true;
      console.log(obj);
      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          console.log(data["data"]);
          if (data["status"] == 200) {
            this.summary = data["data"];
            console.log(this.summary);
          } else {
            console.log("error");
          }
        },
        (error) => {
          console.log(error.message);
          this.toastr.error("Sometthing wrong");
        }
      );
    } else {
      this.flagemp = false;
      this.doctorId = value.drid;
      let obj = {
        drid: Number(value.drid),
      };
      this.flag = true;
      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          if (data["status"] == 200) {
            this.summary = data["data"];
          } else {
            this.summary = null;
          }
        },
        (error) => {
          console.log(error.message);
          this.toastr.error("Sometthing wrong");
        }
      );
    }
  }

  toggle(value: any) {
    if (this.dateflag2 == true) {
      this.datePipeString = this.datePipeString;
    } else {
      this.datePipeString = this.datePipe.transform(
        this.dateSelected,
        "dd/MM/yyyy"
      );
    }

    if (this.datePipeString != null) {
      let obj = {
        drid: Number(value),
        created_date: String(this.datePipeString),
      };
      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          if (data["status"] == 200) {
            this.docSummary = data["data"];
          } else {
            this.docSummary = null;
          }
        },
        (error) => {
          console.log(error.message);
          this.toastr.error("Sometthing wrong");
        }
      );
      this.dateflag2 = true;
    } else {
      let obj = {
        drid: Number(value),
      };

      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          if (data["status"] == 200) {
            this.docSummary = data["data"];
          } else {
            this.docSummary = null;
          }
        },
        (error) => {
          console.log(error.message);
          this.toastr.error("Sometthing wrong");
        }
      );
    }
  }

  change(value: any) {
    this.flagemp = false;

    this.datePipeString = this.datePipe.transform(
      value._selected,
      "dd/MM/yyyy"
    );

    if (this.doctorId != null) {
      this.flag = true;
      this.flagemp = false;
      let obj = {
        drid: Number(this.doctorId),
        created_date: String(this.datePipeString),
      };

      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          if (data["status"] == 200) {
            this.summary = data["data"];
          } else {
            this.summary = null;
          }
        },
        (error) => {
          console.log(error.message);
          this.toastr.error("Sometthing wrong");
        }
      );
    } else if (this.datePipeString != null) {
      this.flag = false;
      this.flagemp = true;
      let obj = {
        drid: "",
        created_date: String(this.datePipeString),
      };
      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          if (data["status"] == 200) {
            this.docSummary = data["data"];
          } else {
          }
        },
        (error) => {
          console.log(error.message);
          this.toastr.error("Sometthing wrong");
        }
      );
    }
  }
  clearData() {
    this.flagemp = true;
    this.flag = false;
    this.doctorId = null;
    this.dateSelected = null;
    this.datePipeString = null;
    this.summary = null;
    console.log(this.datePipeString);
    this.getAccordionData();
  }
  getAccordionData() {
    if (this.doctorId == null && this.datePipeString == null) {
      this.flagemp = true;
      this.flag = false;
      let obj = {
        drid: Number(this.doctorId),
        created_date: String(this.dateSelected),
      };
      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          if (data["status"] == 200) {
            this.summary = data["data"];
          }
        },
        (error) => {
          this.toastr.error("Sometthing wrong");
        }
      );
    } else if (this.doctorId != null && this.dateSelected != null) {
      this.flagemp = false;
      this.dateSelected = this.datePipe.transform(
        this.dateSelected,
        "dd/MM/yyyy"
      );
      this.flag = true;
      let obj = {
        drid: Number(this.doctorId),
        created_date: String(this.dateSelected),
      };

      this.prac.getSummaryData(obj).subscribe(
        (data: any) => {
          if (data["status"] == 200) {
            this.summary = data["data"];
          }
        },
        (error) => {
          this.toastr.error("Sometthing wrong");
        }
      );
    }
  }
}

// clearData() {
//   this.flagemp = true;
//   this.flag = false;
//   this.doctorId == null;
//   this.dateSelected == null;
//   this.getAccordionData();
// }
