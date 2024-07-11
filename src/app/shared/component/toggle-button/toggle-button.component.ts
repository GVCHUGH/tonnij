import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {

  public value! : string;

  agInit(params: any) {this.value = params.value};

  refresh(params:any){return true}


}
