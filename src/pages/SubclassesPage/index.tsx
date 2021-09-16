import React from 'react';
import ImageContentSection from '../../components/ImageContentSection';
import subclassData, { subclassesArrayType } from './data';
import './index.scss';
import Banner from '../../components/Banner';

function SubclassesPage() {
  return (
    <div className="subclasses">
      <div className="subclasses__content">
        <Banner />
        <div className="subclasses__content__title">5E Subclasses</div>
        {subclassData.map((value: subclassesArrayType, index: number) => (
          <ImageContentSection classData={value} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default SubclassesPage;
