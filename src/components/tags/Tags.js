import React from 'react';
import Tag from './tag/Tag'
import './Tags.css'

const Tags = ({items , deleteSearch }) => {
    return (
        <div className="search-tags">
            <Tag 
                items={items}
                deleteSearch={deleteSearch} />
        </div>
    );
};

export default Tags;