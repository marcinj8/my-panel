import React, { useState } from 'react';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { RecipeList } from '../components';
import { AddNewRecipeForm } from '../components/addRecipeForm';
import { Button } from '../../shared/components';

export const Recipes = () => {
  const [isAddingNewRecipe, setIsAddingNewRecipe] = useState<boolean>(false);
  return (
    <HocSection>
      <>
        <header>
          <h3>Przepisy</h3>
        </header>
        {!isAddingNewRecipe && (
          <Button name='dodaj' clicked={() => setIsAddingNewRecipe(true)} />
        )}
        <div style={{ position: 'relative' }}>
          {!isAddingNewRecipe && <RecipeList />}
          {isAddingNewRecipe && <AddNewRecipeForm setIsAddingNewRecipe={setIsAddingNewRecipe}/>}
        </div>
      </>
    </HocSection>
  );
};
