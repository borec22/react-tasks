import React from 'react';

import {Large as LargeInput} from '../c1-SuperInputText/SuperInput.stories';
import {Large as LargeButton} from '../c2-SuperButton/SuperButton.stories';

export default {
   title: 'form/Subscription'
}

export const PrimarySubscription = () => {
   return (
      <>
         <LargeInput />
         <LargeButton />
      </>
   );
}