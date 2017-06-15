import React from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  console.log(props.item);
  return (
    <Wrapper>
      <Item>
        {props.item}
      </Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;
