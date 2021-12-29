import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
  updateCategoryName,
  selectCategories,
} from './categoriesSlice';

import {
  incrementAsync,
  selectTasks,
} from './tasksSlice';

// import styles from './taskView.module.css';

export function TaskView() {
  const categories = useAppSelector(selectCategories)
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  console.log(tasks)
  return (
    // render category state
    <div>
      <div>GOODMORNING!</div>
      {categories.map(category => {
        return (
          <h1>{category.title}</h1>
        )
      })}  
      {tasks.map(task => {
        return (
          <h3>{task.title}</h3>
        )
      })}
    </div>

  );
}
