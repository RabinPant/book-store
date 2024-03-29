import React from 'react';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections})=>(
    <div className='collections-overview'>
      {collections.map(({id,...othercollectionProps})=> (
                    <CollectionPreview key  ={id}{...othercollectionProps}/>
                ))}  
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});

export default connect (mapStateToProps)(CollectionsOverview);
