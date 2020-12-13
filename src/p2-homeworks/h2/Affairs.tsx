import React from 'react';
import classes from './Affairs.module.css';
import Affair from './Affair';
import {AffairType, FilterType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
   data: Array<AffairType>
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (affairID: number) => void
}

function Affairs(props: AffairsPropsType) {
   const mappedAffairs = props.data.map((a: AffairType) => (
      <Affair // should work
         key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
         affair={a}
         deleteAffairCallback={props.deleteAffairCallback}
      />
   ))

   const setAll = () => {
      props.setFilter('all')
   }; // need to fix
   const setHigh = () => {
      props.setFilter('high')
   };
   const setMiddle = () => {
      props.setFilter('middle')
   };
   const setLow = () => {
      props.setFilter('low')
   };

   return (
      <div className={classes.affairs}>

         {mappedAffairs}

         {/*<button onClick={setAll}>All</button>*/}
         <SuperButton onClick={setAll}
                      variant='primary'
                      size='large'
                      className={classes.button}>All</SuperButton>
         <SuperButton onClick={setHigh}
                      variant='danger'
                      size='large'
                      className={classes.button}>High</SuperButton>
         <SuperButton onClick={setMiddle}
                      variant='warning'
                      size='large'
                      className={classes.button}>Middle</SuperButton>
         <SuperButton onClick={setLow}
                      variant='success'
                      size='large'
                      className={classes.button}>Low</SuperButton>
      </div>
   );
}

export default Affairs;
