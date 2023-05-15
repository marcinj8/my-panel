import React, { useMemo } from 'react';
import { useAppSelector } from '../../store/hooks';
import { RecipeDataModel } from '../../store/userData/reducer';

export const RecipeList = () => {
  const recipes = useAppSelector((state) => state.userData.recipes);

  const list = useMemo(() => {
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return <h4>Brak przepisów</h4>;
    }
    return recipes.map((recipe: RecipeDataModel) => {
      return <li>{recipe.name}</li>;
    });
  }, [recipes]);

  return <ul>{list}</ul>;
};
