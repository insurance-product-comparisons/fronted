import React from 'react';
import List from 'shared/ui/List';
import { LinkRouter } from 'shared/ui';
import { Typography } from 'shared/ui';

function NavigationBar({ data, mode, variant, color }) {

   const linkItems = data.map((item) => (
      <LinkRouter
         key={item.id}
         route={item.route}
         text={
            <Typography variant={variant} color={color}>
               {item.text}
            </Typography>
         }
         mode='default' 
      />
   ));

   return (
      <List children={linkItems} mode={mode} />
   )
}

export default NavigationBar