import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from '../item';
import { AService } from '../a.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  item: Item = new Item("", "", "", true);
  itemId: any;
  componentState: string = "Edit";
  constructor(private route: ActivatedRoute, private router: Router, 
    private aService: AService) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId != null) {
      let svItem = this.aService.getItem(this.itemId);
      if (svItem == undefined) {
        this.router.navigate(['/a', 'items']);
        return;
      }
      this.item = new Item(svItem.Code, svItem.Name, svItem.Description, svItem.Active);
    }
    else {
      this.componentState = "Add";
    }

    this.route.params
      .subscribe(
        (params: Params) => {
          if (params['id'] != null) {
            this.itemId = params['id'];
            let svItem = this.aService.getItem(this.itemId);
            this.item = new Item(svItem.Code, svItem.Name, svItem.Description, svItem.Active);
          }
          else {
            this.componentState = "Add";
          }
        }
      );
  }

  onEdit() {
    this.aService.editItem(this.itemId, 
      new Item(this.item.Code.trim(), 
        this.item.Name.trim(), 
        this.item.Description.trim(), 
        this.item.Active));
    this.router.navigate(['/a', 'items']);
  }

  onAdd() {
    this.aService.addItem(new Item(this.item.Code.trim(), 
      this.item.Name.trim(), 
      this.item.Description.trim(), 
      this.item.Active));
  }

}
