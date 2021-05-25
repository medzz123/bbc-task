import { hashString } from '@lib/hashString';
import React, { FunctionComponent } from 'react';

import { ListProps } from './List.models';
import { ListContainer } from './List.styles';

const List: FunctionComponent<ListProps> = (props) => {
  const { type = 'unordered', items } = props;

  return (
    <ListContainer as={type === 'unordered' ? 'ul' : 'ol'} data-testid="list">
      {items.map((listItem) => (
        <li key={hashString(listItem)}>{listItem}</li>
      ))}
    </ListContainer>
  );
};

export default List;
