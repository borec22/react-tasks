import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
   users: Array<UserType>
   addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
   const [name, setName] = useState<string>('');
   const [error, setError] = useState<string>('');

   const setNameCallbackOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.currentTarget.value;

      if (text.trim() === '') {
         setError('Enter your name');
      } else {
         setError('');
      }

      setName(text);
   }

   const setNameCallbackKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 13) {
         addUser();
      }
   }

   const addUser = () => {
      if (name.trim() === '') {
         setError('Enter your name')
      } else {
         addUserCallback(name);
         setTimeout(() => {
            alert(`Hello, ${name}!`)
         });

         setError('');
         setName('');
      }
   };

   const totalUsers = users.length;

   return (
      <Greeting
         name={name}
         setNameCallbackOnChange={setNameCallbackOnChange}
         setNameCallbackKeyPress={setNameCallbackKeyPress}
         addUser={addUser}
         error={error}
         totalUsers={totalUsers}
      />
   );
}

export default GreetingContainer;
