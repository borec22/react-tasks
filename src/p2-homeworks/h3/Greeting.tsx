import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

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
            <div className={s.total}>
               <span>{totalUsers}</span>
            </div>
            <SuperInputText value={name}
                            onChange={setNameCallbackOnChange}
                            onKeyPress={setNameCallbackKeyPress}
                            className={`${error ? s.error : ''} ${s.input}`}/>
            {error && <span className={s.errorMessage}>{error}</span>}
            <SuperButton onClick={addUser} className={s.button}>add</SuperButton>
         </div>
      </div>
   );
}

export default Greeting;
