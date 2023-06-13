import React, { MouseEventHandler } from 'react';

import { Button } from '../../shared/components';

import { RecipeDataModel } from '../../store/userData/reducer';

import {
  StyledRecipeHeader,
  StyledRecipeSection,
  StyledRecipeName,
  StyledRecipeTagTitle,
  StyledRecipeTags,
} from '../style/recipeView.style';

export const RecipeView: React.FC<{
  recipe: RecipeDataModel;
  onConfirm?: any;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
}> = ({ recipe, onConfirm, onCancel }) => {
  return (
    <StyledRecipeSection>
      <StyledRecipeHeader>
        <StyledRecipeName>{recipe.name}</StyledRecipeName>
        <StyledRecipeTagTitle>Etykiety:</StyledRecipeTagTitle>
        {recipe.tags.map((tag) => (
          <StyledRecipeTags key={tag}>{tag}</StyledRecipeTags>
        ))}
      </StyledRecipeHeader>
      <h3>Linki</h3>
      {recipe.links.length && (
        <ol>
          {recipe.links.map((link) => (
            <li key={link}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ol>
      )}
      <h3>Składniki</h3>
      <ol>
        {recipe.ingredients.map((ing) => (
          <li key={ing.name}>
            {ing.name} - {ing.quantity} {ing.unit}{' '}
          </li>
        ))}
      </ol>
      <h3>Instrukcje</h3>
      <ol>
        {recipe.instructions.map((ins) => (
          <li key={ins}>{ins}</li>
        ))}
      </ol>
      {onConfirm && (
        <Button name='potwierdź' type='confirm' clicked={onConfirm} />
      )}
      {onCancel && <Button name='anuluj' type='danger' clicked={onCancel} />}
    </StyledRecipeSection>
  );
};
