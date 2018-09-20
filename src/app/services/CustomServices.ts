import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

export type Item = { id: number, name: string };

@Injectable()
export class CustomServices {
  
  rootGetValidationUrl: string = '/assets/';
  items: Array<Item>;

  getConfigData(clientName = "WizConfig" ) {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.rootGetValidationUrl + clientName + ".json")
        .subscribe((response: any) => {

          this.items = response;
          //console.log('got data');
          //console.log(response);

          /*
          this.ValidationRulesList = response.Result.map(
            (item: any) => {
              return new ValidationRules(
                item.FieldName,
                item.RegExpression
              );
            });
            */
          resolve(true);
        })
    });
  }

  constructor(private http: HttpClient) {
  }
}
