

import React, { Children } from 'react';
import {useSpring, animated} from 'react-spring';
import { tsPropertySignature } from '@babel/types';

interface IProductsMain{
    isFlex: boolean;
}

const ProductsMain : React.FC<IProductsMain> = (props) => {
  return (
    <div id="products-main" className={props.isFlex ? "flex flex-wrap" : ""}>
        {props.children}
    </div>
  );
}

export default ProductsMain;
