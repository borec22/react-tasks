import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
   name: string
   setNameCallbackOnChange: (e: ChangeEvent<HTMLInputElement>) => void
   setNameCallbackKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
   addUser: () => void
   error: string
   totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
   {name, setNameCallbackOnChange, setNameCallbackKeyPress, addUser, error, totalUsers} // деструктуризация пропсов
) => {

   return (
      <div className={s.greeting}>
         <div>
            <input
               value={name}
               onChange={setNameCallbackOnChange}
               onKeyPress={setNameCallbackKeyPress}
               className={`${error && s.error} ${s.input}`}
            />
            <button onClick={addUser} className={s.button}>add</button>
            <div className={s.total}>
               <span>{totalUsers}</span>
            </div>
         </div>
         <span className={error && s.errorMessage}>{error}</span>
      </div>
   );
}

export default Greeting;
