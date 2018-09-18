import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
   selector: 'app-shopping-edit',
   templateUrl: './shopping-edit.component.html',
   styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amoutInput') amoutInputRef: ElementRef;
   @Output() ingredienteAdded = new EventEmitter<Ingredient>();

   constructor() { }

   ngOnInit() {
   }

   onAddItem() {
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amoutInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);

      this.ingredienteAdded.emit(newIngredient);
   }

}
