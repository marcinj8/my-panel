import { FormState } from '../../shared/hooks/form-hook';

export const switchAuthMode = (
  isLoginMode: boolean,
  setFormData: Function,
  formState: FormState
) => {
  if (isLoginMode) {
    setFormData(
      {
        ...formState.inputs,
        name: undefined,
        homeId: undefined,
      },
      formState.inputs.email.isValid && formState.inputs.password.isValid
    );
  } else {
    setFormData(
      {
        ...formState.inputs,
        name: {
          value: '',
          isValid: false,
        },
        homeId: {
          value: null,
          isValid: true,
        },
      },
      false
    );
  }
};
