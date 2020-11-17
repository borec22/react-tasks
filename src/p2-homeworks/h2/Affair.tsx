import React from 'react';
import classes from './Affairs.module.css';
import {AffairType} from './HW2';

type AffairPropsType = {
   // key не нужно типизировать
   affair: AffairType
   deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
   const priority = props.affair.priority;
   const deleteCallback = () => {
      props.deleteAffairCallback(props.affair._id);
   };

   let colorAffair: string = '';

   if (priority === 'high') {
      colorAffair = 'red';
   } else if (priority === 'middle') {
      colorAffair = 'orange';
   } else if (priority === 'low') {
      colorAffair = 'green';
   }

   return (
      <div>
         <span className={ classes[colorAffair] }> {props.affair.name} </span>
         <button onClick={deleteCallback}>X</button>
      </div>
   );
}

export default Affair;
