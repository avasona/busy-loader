import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "app-busy-loader",
  templateUrl: "./busy-loader.component.html",
  styleUrls: [ "./busy-loader.component.scss" ]
})
export class BusyLoaderComponent implements OnInit {
  @HostBinding("class.spinner-large") spinnerLarge: boolean = false;
  @HostBinding("class.spinner-small") spinnerSmall: boolean = false;
  @HostBinding("class.loading-dots") loadingDots: boolean = false;
  @HostBinding("class.invisible") _invisible: boolean = false;
  @HostBinding("class.overlay-page") _overlayPage: boolean = false;

  @Input() set invisible(invisible: boolean) {
    this._invisible = invisible;
    this.getStyles(invisible, this.styleType, this.overlay);
  }

  @Input() styleType: string = "spinner-large";
  @Input() overlay: boolean = false;


  constructor() {
  }


  ngOnInit() {
    this.getStyles(this._invisible, this.styleType, this._overlayPage);
  }

  getStyles(invisible: boolean, styleType: string, overlay: boolean) {
    if (this.overlay) {
      this._overlayPage = true;
    }

    if (invisible) {
      this._invisible = true;
      this._overlayPage = false;
      this.resetStyles();
    } else if (!invisible && this.overlay) {
      this._invisible = false;
      this.resetStyles();
      this._overlayPage = true;
    } else {
      this.setStyles(styleType);
    }
  }


  setStyles(styleType) {
    if (styleType === "spinner-large") {
      this.spinnerLarge = true;
      this.spinnerSmall = false;
      this.loadingDots = false;

    } else if (styleType === "spinner-small") {
      this.spinnerLarge = false;
      this.spinnerSmall = true;
      this.loadingDots = false;

    } else if (styleType === "loading-dots") {
      this.spinnerLarge = false;
      this.spinnerSmall = false;
      this.loadingDots = true;
    }
  }

  resetStyles() {
    this.spinnerLarge = false;
    this.spinnerSmall = false;
    this.loadingDots = false;
  }

}
