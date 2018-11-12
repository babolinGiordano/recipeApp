import { Recipe } from "src/app/recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Another Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes() {
    //creo una copia dell'oggetto
    // e lo ritorno
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}