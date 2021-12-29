import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { time } from 'console';
import { GeneratedIdentifierFlags } from 'typescript';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './taskViewAPI';

export interface Category {
  id: number;
  title: string;
  // status: 'idle' | 'loading' | 'failed';
}

const initialState: Category[] = [
  {
    id: 1,
    title: "General"
  },
  {
    id: 2,
    title: "School"
  }
]

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: 'tasks',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateCategoryName: (state, action: PayloadAction<number[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
  },
});

export const { updateCategoryName } = categoriesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCategories = (state: RootState) => state.categories;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default categoriesSlice.reducer;
