import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _opened: boolean = false;
  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = false;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;
  private dashboard: boolean = true;
  private upload: boolean = false;
  private isResumeUpload: boolean = false;
  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  @Input() isFileUpload : boolean = false;
  
  private items: Array<PanelBarItemModel> = [
    <PanelBarItemModel> {
        title: "Recruitment",
        expanded: true,
        children: [
            <PanelBarItemModel> {
                title: "Upload Candidate Details"
            },
            <PanelBarItemModel> {
                title: "Upload Candidate Resumes"
            }
        ]
    },
    <PanelBarItemModel> {
        title: "Accouts",
        children: [
            <PanelBarItemModel> {
                title: "DBS"
            },
            <PanelBarItemModel> {
                title: "Reliance"
            },
            <PanelBarItemModel> {
                title: "FedEx"
            },
            <PanelBarItemModel> {
                title: "Citi"
            }
        ]
    }
];

constructor(private router: Router) {}
  ngOnInit() {}

  onSelect1(data: Array<PanelBarItemModel>){
    const focusedEvent: PanelBarItemModel = data.filter(item => item.focused === true)[0];
    console.log('focusedEvent===>'+focusedEvent);
    console.log('id===>'+focusedEvent.title);
  }
  onSelect(data: Array<PanelBarItemModel>){
    const focusedEvent: PanelBarItemModel = data.filter(item => item.focused === true)[0];
    console.log('menu item===>'+focusedEvent.title);
    let action = focusedEvent.title;
    if(action == 'Upload Candidate Details'){
      console.log('In upload candidate details');
      this.isFileUpload = true;
      this.upload = true;  
      this.dashboard = false;
      this._toggleOpened();
    } else if(action == 'Upload Candidate Resumes'){
      console.log('In upload candidate resume');
      this.isResumeUpload = true;
      this.isFileUpload = false;
      this.upload = true;  
      this.dashboard = false;
      this._toggleOpened();
    }
   // this.router.navigate(['fileupload']);
  }

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  private _onOpened(): void {
    console.info('Sidebar opened');
  }

  private _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  private _onClosed(): void {
    console.info('Sidebar closed');
  }

  private _onTransitionEnd(): void {
    console.info('Transition ended');
  }

  private _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }

  logOut(){
    this.router.navigate(['']);
  }
}
