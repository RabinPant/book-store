import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hats',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1543157-1.JPG',
          id: 1,
          linkUrl:'hats'
        },
        {
          title: 'Jackets',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1542896-1.JPG',
          id: 2,
          linkUrl:'jackets'
        },
        {
          title: 'Tshirts',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1563279-1.jpg',
          id: 3,
          linkUrl:''
        },
        {
          title: 'Hoddies',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1539559-1.JPG',
          size: '',
          id: 4,
          linkUrl:''
        },
        {
          title: 'Mugs',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1199335-1.jpg',
          size: 'large',
          id: 5,
          linkUrl:''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;

