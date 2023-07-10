import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { RecipeDataModel } from '../../store/userData/reducer';
import { RecipeView } from './recipeView';
import { Button } from '../../shared/components';
import { getRecipes } from '../../store/userData/actions';

export const RecipeList = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDataModel | null>(
    null
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const recipes = useAppSelector((state) => state.userData.recipes);
  const token = useAppSelector((state) => state.loginData?.userData?.token);
  const dispatch = useAppDispatch();

  console.log('recipes', recipes);
  const tagList = useMemo(() => {
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return null;
    }
    const tagsNames: string[] = [];
    recipes.forEach((recipe: RecipeDataModel) => {
      recipe.tags.forEach((tag: string) => {
        const isExist = tagsNames.findIndex((tagName) => tagName === tag);
        if (isExist < 0) {
          tagsNames.push(tag);
        }
      });
    });

    return tagsNames.map((tag) => (
      <li key={tag} onClick={() => setSelectedTag(tag)}>
        {tag}
      </li>
    ));
  }, [recipes]);

  const createRecipesListElement = (recipe: RecipeDataModel) => {
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
  };

  const list = useMemo(() => {
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return <h4>Brak przepisów</h4>;
    }
    const recipesList: any[] = [];

    recipes.forEach((recipe: RecipeDataModel) => {
      const recipeTags: string[] = [];
      recipe.tags.forEach((tag) => recipeTags.push(tag));

      if (!!selectedTag) {
        const isTagSelected = recipeTags.findIndex(
          (tag) => tag === selectedTag
        );
        if (isTagSelected >= 0) {
          recipesList.push(createRecipesListElement(recipe));
        }
      } else {
        recipesList.push(createRecipesListElement(recipe));
      }
    });

    return recipesList;
  }, [recipes, selectedTag]);

  useEffect(() => {
    if (recipes && recipes?.length === 0) {
      dispatch(getRecipes(token));
    }
  }, [recipes, token, dispatch]);

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
      <h3>Przepisy</h3>
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
