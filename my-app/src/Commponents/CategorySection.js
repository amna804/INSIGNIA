import React from 'react';

const categories = [
  { name: 'SALE', imageUrl: '       /images/sale_tile_1.webp' },
  { name: 'WOMEN', imageUrl: '/images/sale_tile_3.webp' },
  { name: 'MEN', imageUrl: '/images/tiles_MEN_2.webp ' },
  { name: 'BAGS', imageUrl: ' /images/tiles_BAGS_1.webp ' },
  { name: 'KIDS', imageUrl: '/images/kids_tiles_copy_1.webp ' },
  { name: 'FRAGRANCES', imageUrl: '/images/sale_tile_2.webp' },
];

const CategorySection = () => {
  return (
    <div className="category-section">
      <h2 className="section-title">SHOP BY CATEGORY</h2>
      <div className="category-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="image-container">
              <img src={category.imageUrl} alt={category.name} className="category-image" />
              {category.description && <p className="category-description">{category.description}</p>}
            </div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
