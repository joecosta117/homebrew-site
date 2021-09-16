import React from 'react';
import './index.scss';

interface subclassProps {
  classData: any;
  index: number;
}

function ImageContentSection({ classData, index }: subclassProps) {
  const evenOrOdd = index % 2 === 1 ? 'odd' : 'even';

  return (
    <div className="image-content-section" data-type={evenOrOdd}>
      <div className="image-content-section__image-container">
        <img src={classData.image} className="image-content-section__image-container__image" alt={classData.class}></img>
      </div>
      <div className="image-content-section__content-container">
        <div className="image-content-section__content-container__title">{classData.class} Subclasses</div>
        {classData.subclasses.map((subclass: any) => (
          <div className="image-content-section__content-container__subclass">
            <a href={subclass.link} target='_blank' rel='noreferrer' ><span>{subclass.title}:</span> {subclass.description}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageContentSection;
