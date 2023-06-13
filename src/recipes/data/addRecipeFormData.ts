import { v4 as uuidv4 } from 'uuid';

import { RecipeIngredientModel } from '../../store/userData/reducer';

export const onAddPositoin = (
  ingredientsData: RecipeIngredientModel[],
  setIngredientsData: Function
) => {
  const ingredientsDataUpdated = [...ingredientsData];
  const id = uuidv4();

  ingredientsDataUpdated.push({
    id,
    name: '',
    quantity: 1,
    unit: '',
    onPurchaseList: false,
    available: false,
  });

  setIngredientsData(ingredientsDataUpdated);
};

export const onRemovePositoin = (
  ingredientsData: RecipeIngredientModel[],
  setIngredientsData: Function
) => {
    const ingredientsDataUpdated = [...ingredientsData];
    const deletedIndex = ingredientsDataUpdated.findIndex((ing) => ing.name === '');
    console.log(deletedIndex);
    ingredientsDataUpdated.splice(deletedIndex, 1);
  
    setIngredientsData(ingredientsDataUpdated);
};
export const onDeletePosition = (
    ingredientsData: RecipeIngredientModel[],
    setIngredientsData: Function,
    id: string
  ) => {
    const ingredientsDataUpdated = [...ingredientsData];
    const deletedIndex = ingredientsDataUpdated.findIndex((ing) => ing.id === id);
    console.log(deletedIndex);
    ingredientsDataUpdated.splice(deletedIndex, 1);
  
    setIngredientsData(ingredientsDataUpdated);
  };
  
  export const ingredientValidation = (
    ingredientsData: RecipeIngredientModel[],
    setIsIngredientValid: Function
  ) => {
    let isValid = true;
    ingredientsData.forEach((ing: RecipeIngredientModel) => {
      if (ing.name.length) {
        isValid = true && isValid;
      } else {
        isValid = false;
      }
      
      setIsIngredientValid(isValid);
    });
  };



  export const onIngredientUpdate = (
    ingredient: RecipeIngredientModel,
    id: string,
    isValid: boolean,
    ingredientsData: RecipeIngredientModel[],
    setIngredientsData: Function
  ) => {
    const updatedIngredientsData =
      ingredientsData !== null ? [...ingredientsData] : [];
    if (isValid) {
      const index = updatedIngredientsData.findIndex((item) => item.id === id);
      if (index < 0) {
        console.log('coś sie zjebało');
        return;
      }
      updatedIngredientsData[index] = ingredient;
      setIngredientsData(updatedIngredientsData);
    }
  };