import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { AService } from './a.service';
import { Item } from './item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  itemsList: Item[];
  modalOpen: boolean = false;
  currentItem: Item = null;

  @ViewChild('myModal') myModal: ElementRef;

  constructor(private aService: AService, private renderer: Renderer, private router: Router) { }


  ngOnInit() {
    this.itemsList = this.aService.getItems();
  }

  openModal(index: number) {
    this.modalOpen = true;
    this.currentItem = this.itemsList[index];
    this.renderer.setElementClass(document.body, 'modal-open', true);
    this.renderer.setElementClass(this.myModal.nativeElement, 'show', true);
    this.renderer.setElementStyle(this.myModal.nativeElement, 'display', "block");
  }

  closeModal(index: number) {
    this.modalOpen = false;
    this.currentItem = null;
    this.renderer.setElementClass(document.body, 'modal-open', true);
    this.renderer.setElementClass(this.myModal.nativeElement, 'show', true);
    this.renderer.setElementStyle(this.myModal.nativeElement, 'display', "none");

  }

  deleteItem(index: number) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.aService.deleteItem(index);
      this.router.navigate(['/a/items']);
    }
  }

}
