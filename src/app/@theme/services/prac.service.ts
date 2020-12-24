import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PracService {
  constructor(private _http: HttpClient) {}

  public baseUrl = "https://waste-collector.herokuapp.com/api/poc/";

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
  sendWeightData(data: any) {
    let response = this._http.post(this.baseUrl + "wasteadd", data);
    return response;
  }

  getAllDoctor() {
    let response = this._http.get(this.baseUrl + "getalldr");
    return response;
  }

  getSummaryData(data: any) {
    let response = this._http.post(this.baseUrl + "summary", data);
    return response;
  }

  getDoctorDataById(id: any) {
    let response = this._http.post(this.baseUrl + "getdrbyid", id);
    return response;
  }
}
