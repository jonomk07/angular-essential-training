import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-category-list',
  template: `
    <span class="label" *ngFor="let category of categories">
      {{ category }}
    </span>
  `,
  styles: [
    `
      :host {
        display: block;
        margin-bottom: 20px;
      }
      :host-context(.medium-movies) span {
        background-color: #53ace4;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        margin: 10px 0;
        
      }
      :host-context(.medium-series) span {
        background-color: #45bf94;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        margin: 10px 0;
      }
      span {
        display: inline-block;
        margin-right: 4px;
        margin-bottom: 4px;
      }
    `
  ]
})
export class CategoryListComponent {
  @Input() categories: string[];
}
