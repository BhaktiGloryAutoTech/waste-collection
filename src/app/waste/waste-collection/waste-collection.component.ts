import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PracService } from 'app/@theme/services/prac.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-waste-collection',
  templateUrl: './waste-collection.component.html',
  styleUrls: ['./waste-collection.component.scss']
})
export class WasteCollectionComponent implements OnInit {
  public drid:any;
  public red: any;
  public blue: any;
  public yellow: any;
  public black: any;
  public drList:any=[];
  public drName:any;
  public multipleClickDisable:boolean=false;
  constructor(private prac:PracService,private toastrService:ToastrService,private route: Router,private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.drid = this._route.snapshot.paramMap.get("id");
    this.prac.getAllDoctor().subscribe(
      data=>{
        this.drList=data['data'];
        this.drList.forEach(element => {
          if(element.drid==this.drid){
            this.drName=element.drname
          }
        });
        console.log(this.drName)
      },
      error=>{

      }
    )
  }
  onSubmit(){
    this.multipleClickDisable=true
    let data = {
      drid:Number(this.drid),
      Red:Number(this.red),
      Blue:Number(this.blue),
      Yellow:Number(this.yellow),
      Black:Number(this.black)
    }
    console.log("data:",data)

    this.prac.sendWeightData(data).subscribe(
      (data:any) =>{
        
        if(data["status"] == 200){
          this.route.navigate(["pages/waste/success"]);
          this.toastrService.success("Success!")
        }
      },
      error =>{
        this.toastrService.error("Some problem Occured");
      }
    )
  }

}
