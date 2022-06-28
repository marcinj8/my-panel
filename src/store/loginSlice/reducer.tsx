import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';

export interface CounterState {
  userData: any;
  status: 'loading' | 'loggedin' | 'unknow' | 'error';
}

const initialState: CounterState = {
  userData: 'user data',
  status: 'unknow',
};



export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    succes: (state) => {
     state.status = 'loggedin'
    },
    error: (state) => {
        state.status = 'error'
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
 
});

export const { succes, error } = userDataSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const user = (state: RootState) => state.userData;


export default userDataSlice.reducer;
