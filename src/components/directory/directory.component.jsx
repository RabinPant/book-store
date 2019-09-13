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
          id: 1
        },
        {
          title: 'Jackets',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1542896-1.JPG',
          id: 2
        },
        {
          title: 'Tshirts',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1563279-1.jpg',
          id: 3
        },
        {
          title: 'Hoddies',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1539559-1.JPG',
          size: 'large',
          id: 4
        },
        {
          title: 'Mugs',
          imageUrl: 'http://www.ecubookstore.com/storeimages/257-1199335-1.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default Directory;

