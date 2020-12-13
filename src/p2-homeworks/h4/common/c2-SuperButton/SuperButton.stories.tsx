import React from 'react';
import SuperButton from './SuperButton';
import {Story} from '@storybook/react/types-6-0';

export default {
   title: 'form/SuperButton',
   component: SuperButton
}

export const DefaultButton = () => <SuperButton>Ok</SuperButton>

export const Primary = () => <SuperButton variant='primary'>Ok</SuperButton>
export const Success = () => <SuperButton variant='success'>Ok</SuperButton>
export const Warning = () => <SuperButton variant='warning'>Ok</SuperButton>
export const Danger = () => <SuperButton variant='danger'>Ok</SuperButton>

export const Small = () => <SuperButton variant='success' size='small'>Ok</SuperButton>
export const Medium = () => <SuperButton variant='success' size='medium'>Ok</SuperButton>
export const Large = () => <SuperButton variant='primary' size='large'>Ok</SuperButton>

type ButtonPropsType = {
   variant?: 'primary' | 'success' | 'warning' | 'danger'
   size?: 'small' | 'medium' | 'large'
   children?: string
}

const Template: Story<ButtonPropsType> = args => <SuperButton {...args} />

export const PrimaryA = Template.bind({});
PrimaryA.args = {
   variant: 'primary',
   size: 'medium',
   children: 'OK'
}

export const SuccessA = Template.bind({});
SuccessA.args = {
   variant: 'success',
   size: 'medium',
   children: 'OK'
}

export  const WarningA = Template.bind({});
WarningA.args = {
   variant: 'warning',
   size: 'medium',
   children: 'OK'
}

export  const DangerA = Template.bind({});
DangerA.args = {
   variant: 'danger',
   size: 'medium',
   children: 'OK'
}
