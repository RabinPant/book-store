const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://www.liveareacx.com/wp-content/uploads/2019/07/mobile-first-ecommerce-platform-sap-upscale.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDKOlLsqwIXHWSzjFysGHiNhAnhkPWrqmglA0lMXLLKWG_2DAWw&s',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'mugs',
      imageUrl: 'https://cdn.coolofthewild.com/wp-content/uploads/2019/03/Camping-mug-380x230.jpg',
      id: 3,
      linkUrl: 'shop/mugs'
    },
    {
      title: 'womens',
      imageUrl: 'https://c.stocksy.com/a/486500/z9/1215204.jpg?1566940748',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.unsplash.com/photo-1479706927253-70f97eeb3607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;