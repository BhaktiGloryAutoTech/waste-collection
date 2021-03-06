import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QualityGuard } from 'app/@theme/guards/quality.guard';
import * as errorData from 'app/@theme/json/error.json';
import { CommonService } from 'app/@theme/services/common.service';
import { JwtTokenService } from 'app/@theme/services/jwt-token.service';
import { StoreTokenService } from 'app/@theme/services/store-token.service';
import { ToastrService } from 'ngx-toastr';
import { QualityService } from '../../@theme/services/quality.service';

@Component({
  selector: 'ngx-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})

export class QualityComponent implements OnInit {
  public loading = false;
  public errorData: any = (errorData as any).default;
  permissions: Number;
  radioArray = [
    {id:1, value:"View Own" , disabled:false},
    {id:2, value:"View Group" , disabled:false},
    {id:3, value:"View All" , disabled:false}
  ];
  qualityList=[];
  quality=[];
  headers=["Quality Id", "Quality Name", "Quality Type", "Party Name" ];
  module="quality";

  flag = false;

  
  radioSelect = 0;
  userId;
  userHeadId;
  tableStyle = 'bootstrap';

  hidden :boolean=true;
  hiddenEdit:boolean=true;
  hiddenView:boolean=true;
 
  ownDelete=true;
  allDelete=true;
  groupDelete=true;

  ownEdit=true;
  allEdit=true;
  groupEdit=true;
  disabled=false;
  
  constructor(
    private commonService: CommonService,
    public qualityGuard: QualityGuard, 
    private qualityService: QualityService, 
    private toastr: ToastrService, 
    private jwtToken: JwtTokenService, 
    private storeTokenService: StoreTokenService,
    private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
  
    this.userId = this.commonService.getUser();
    this.userId = this.userId['userId'];
    this.userHeadId = this.commonService.getUserHeadId();
    this.userHeadId = this.userHeadId['userHeadId'];
    this.getViewAccess();
    this.getAddAcess();
    // this.getQualityList(this.userId, "own");
    this.getDeleteAccess();
    this.getDeleteAccess1();
    this.getEditAccess();
    this.getEditAccess1();
    if(this.qualityGuard.accessRights('view')){
      this.getQualityList(this.userId,"own");
      this.hidden=this.ownDelete; 
      this.hiddenEdit=this.ownEdit;
      this.radioSelect=1;
    }
     else if(this.qualityGuard.accessRights('view group')){
      this.getQualityList(this.userHeadId,"group");
      this.hidden=this.groupDelete;
      this.hiddenEdit=this.groupEdit;
      this.radioSelect=2;
    }
    else if(this.qualityGuard.accessRights('view all')){
      this.getQualityList(0,"all");
      this.hidden=this.allDelete;
      this.hiddenEdit=this.allEdit;
      this.radioSelect=3;

    }
  }
  getAddAcess(){
    if(this.qualityGuard.accessRights('add')){
      this.disabled=false;
    }
    else{
      this.disabled=true;
    }
  }

  onChange(event){
    this.qualityList = [];
    switch(event){
      case 1: 
              this.getQualityList(this.userId,"own");
              this.hidden=this.ownDelete; 
              this.hiddenEdit=this.ownEdit;
              break;

      case 2: 
              this.getQualityList(this.userHeadId,"group");
              this.hidden=this.groupDelete;
              this.hiddenEdit=this.groupEdit;
              break;

      case 3:
              this.getQualityList(0,"all");
              this.hidden=this.allDelete;
              this.hiddenEdit=this.allEdit;
              break;
    }
  }

  getQualityList(id,getBy) {
    this.loading = true;
    this.qualityService.getallQuality(id,getBy).subscribe(
      data => {
        if (data['success']) {
          this.qualityList = data['data']
          this.quality=this.qualityList.map((element)=>({qualityId:element.qualityId, qualityName: element.qualityName,
             qualityType: element.qualityType,partyName:element.partyName }))
            this.loading = false;
        }
        else {
          // this.toastr.error(data['msg'])
          this.loading = false;
        }
      },
      error => {
        // this.toastr.error(errorData.Serever_Error);
        this.loading = false;
      }
    )
  }

  getViewAccess(){
    if(!this.qualityGuard.accessRights('view')){
      this.radioArray[0].disabled=true;
    }
    else
    this.radioArray[0].disabled=false;
     if(!this.qualityGuard.accessRights('view group')){
      this.radioArray[1].disabled=true;
    }
    else
    this.radioArray[1].disabled=false;
     if(!this.qualityGuard.accessRights('view all')){
      this.radioArray[2].disabled=true;
    }
    else
    this.radioArray[2].disabled=false;

  }

  getDeleteAccess(){
    if(this.qualityGuard.accessRights('delete')){
      this.ownDelete=false;
      this.hidden=this.ownDelete;
    }
     if(this.qualityGuard.accessRights('delete group')){
      this.groupDelete=false;
      this.hidden=this.groupDelete;
    }
     if(this.qualityGuard.accessRights('delete all')){
      this.allDelete=false;
      this.hidden=this.allDelete;
    }
  }
  getDeleteAccess1(){
    if(this.qualityGuard.accessRights('delete')){
      this.ownDelete=false;
      this.hidden=this.ownDelete;
    }
    else{
      this.hidden=true;
    }
  }

  getEditAccess(){
    if(this.qualityGuard.accessRights('edit')){
      this.ownEdit=false;
      this.hiddenEdit=this.ownEdit;
    }
     if(this.qualityGuard.accessRights('edit group')){
      this.groupEdit=false;
      this.hiddenEdit=this.groupEdit;

    }
     if(this.qualityGuard.accessRights('edit all')){
      this.allEdit=false;
      this.hiddenEdit=this.allEdit;
    }
  }
  getEditAccess1(){
    if(this.qualityGuard.accessRights('edit')){
      this.ownEdit=false;
      this.hiddenEdit=this.ownEdit;
    }
    else{
      this.hiddenEdit=true;
    }
  }


}
