import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { time } from 'console';
import { GeneratedIdentifierFlags } from 'typescript';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './taskViewAPI';

export interface Task {
  id: number;
  category_id: number;
  title: string;
  content?: string;
  completed: boolean
  urgent: boolean
  deleted: boolean
  deadline?: Date 
}

const initialState: Task[] = [
  {
    id: 1,
    category_id: 1,
    title: "Buy thing",
    content: "go to ntuc and",
    completed: false,
    urgent: true,
    deleted: false,
  },
  {
    id: 2,
    category_id: 2,
    title: "Study",
    content: "go to the library and",
    completed: false,
    urgent: true,
    deleted: false,
  },
  {
    id: 3,
    category_id: 2,
    title: "Tutorial",
    content: "discuss with",
    completed: false,
    urgent: true,
    deleted: false,
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

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateTaskTitle: (state, action: PayloadAction<number[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        // state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        // state.status = 'idle';
        // state.value += action.payload;
      });
  },
});

export const { updateTaskTitle, incrementByAmount } = tasksSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTasks = (state: RootState) => state.tasks;

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

export default tasksSlice.reducer;
