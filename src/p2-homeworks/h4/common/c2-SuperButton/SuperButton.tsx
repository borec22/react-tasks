import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type VariantType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
type SizeType = 'small' | 'medium' | 'large';

type SuperButtonPropsType = DefaultButtonPropsType & {
   red?: boolean
   size?: SizeType
   variant?: VariantType
}

const SuperButton: React.FC<SuperButtonPropsType> = (
   {
      variant,
      size,
      red,
      className,
      ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
   }
) => {
   const finalClassName = `
      ${s.button} 
      ${variant ? s[variant] : ''}
      ${size ? s[size] : ''} 
      ${red ? s.red : ''}
   `;

   return (<>
         <button className={finalClassName} {...restProps} />
      </>
   );
}

export default SuperButton;
