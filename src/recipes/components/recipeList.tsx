import React, { useMemo, useState } from 'react';
import { useAppSelector } from '../../store/hooks';

import { RecipeDataModel } from '../../store/userData/reducer';
import { RecipeView } from './recipeView';
import { Button } from '../../shared/components';

export const RecipeList = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDataModel | null>(
    null
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const recipes = useAppSelector((state) => state.userData.recipes);

  console.log('recipes', recipes);
  const tagList = useMemo(() => {
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return null;
    }
    return recipes.map((recipe: RecipeDataModel) => {
      return recipe.tags.map((tag) => (
        <li key={tag} onClick={() => setSelectedTag(tag)}>
          {tag}
        </li>
      ));
    });
  }, [recipes]);

  const list = useMemo(() => {
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return <h4>Brak przepisów</h4>;
    }
    recipes.map((recipe: RecipeDataModel) => {
      // if (!!selectedTag) {
      //   if (recipe.tags.map((tag) => tag !== selectedTag)) return null;
      // }
      return (
        <li key={recipe.id}>
          <h3>{recipe.name}</h3>
          <h5>
            {recipe.tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </h5>
          <Button name='zobacz' clicked={() => setSelectedRecipe(recipe)} />
        </li>
      );
    });
  }, [recipes, selectedTag]);

  return (
    <>
      {tagList && (
        <>
          <h4>wybierz tag</h4>
          <ul>{tagList}</ul>
        </>
      )}
      {selectedTag && (
        <>
          <h4>Wybrany tag</h4> <div>{selectedTag}</div>
          <Button
            name='usuń filtr'
            clicked={() => setSelectedTag(null)}
            variant='inline'
            type='danger'
          />
        </>
      )}
      <ul>{list}</ul>
      {selectedRecipe && (
        <RecipeView
          recipe={selectedRecipe}
          onCancel={() => setSelectedRecipe(null)}
        />
      )}
    </>
  );
};
