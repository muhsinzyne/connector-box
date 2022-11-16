
import { TranslateService } from "@ngx-translate/core";
import { Constants } from "src/app/models/constants";
import { PageDataParams } from "./model/page-data-params";
export class BasePageLayout {


  public pageData: PageDataParams;

  constructor() {

    this._fillPageData();
  }


  _fillPageData() {
    this.pageData = new PageDataParams();
    this.pageData.logo = Constants.LOGO;
    this.pageData.logoAlternative = Constants.LOGO_ALTERNATIVE;
  }


}


export abstract class BPageLayout extends BasePageLayout {
  isLoading: boolean;
  error: boolean;
  loadingSuccess: boolean;


  startLoading() {
    this.isLoading = true;
    this.error = false;
    this.loadingSuccess = false;
  }

  stopLoading() {
    this.isLoading = false;
    this.error = false;
    this.loadingSuccess = true;
  }

}
