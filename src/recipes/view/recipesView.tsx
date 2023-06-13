import React from 'react';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { RecipeList } from '../components';
import { AddNewRecipeForm } from '../components/addRecipeForm';

export const Recipes = () => {
  return (
    <HocSection>
      <>
        <header>
          <h3>Przepisy</h3>
        </header>
        <div style={{  position: 'relative' }}>
          {/* <RecipeList /> */}
          <AddNewRecipeForm />
        </div>
      </>
    </HocSection>
  );
};
