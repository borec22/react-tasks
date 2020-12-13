import React, {useState} from 'react';
import SuperInputText from './SuperInputText';
import {Story} from '@storybook/react/types-6-0';

export default {
   title: 'form/SuperInput',
   component: SuperInputText
}

export const Default = () => <SuperInputText/>

export const Small = () => <SuperInputText dimention='small'/>
export const Medium = () => <SuperInputText dimention='medium'/>
export const Large = () => <SuperInputText dimention='large'/>

export const Error = () => {
   const [error, setError] = useState<string>('Enter your name');
   return <SuperInputText dimention='small' error={error}/>
}

Small.storyName = 'Small input';

type SuperInputTextPropsType = {
   dimention?: 'small' | 'medium' | 'large'
}

const Template: Story<SuperInputTextPropsType> = args => <SuperInputText {...args}/>

export const SmallA = Template.bind({});
SmallA.args = {
   dimention: 'small'
}

export const MediumA = Template.bind({});
MediumA.args = {
   dimention: 'medium'
}

export const LargeA = Template.bind({});
LargeA.args = {
   dimention: 'large'
}


