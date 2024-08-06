import React from 'react';
import './Style.css';
import { useInView } from 'react-intersection-observer';



function WhyRetreat() {
    
const FeatureItem=({ imgSrc, title, description })=> {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 1.0,
    });
  
    return (
      <div ref={ref} className={`feature-item  ${inView ? 'in-view' : ''}`}>
        <div className="icon-circle">
          <img src={imgSrc} alt={title} />
        </div>
        <h3 className="text-body-emphasis">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  return (
    <div id='#section1' className='mb-12 mt-10 ml-10' style={{  textAlign: 'center' }}>
     
      
      <div className="features-container">
        <FeatureItem 
          imgSrc="https://cdn.midjourney.com/930ec767-aa6d-46e6-92a6-f019a9718304/0_3.jpeg" 
          title="Emotional Healing" 
          description="Gain new perspectives and mental clarity" 
        />
        <FeatureItem 
          imgSrc="https://cdn.midjourney.com/30ee2214-0810-4e17-aa5e-0c2edc1b4354/0_0.jpeg" 
          title="Spiritual Growth" 
          description="Deepen spiritual understanding and connection" 
        />
        <FeatureItem 
          imgSrc="https://cdn.midjourney.com/02d7f36d-ba93-4850-b555-3ede5a22eca8/0_0.jpeg" 
          title="Stress Reduction" 
          description="Retreats offer a serene escape from daily stressors" 
        />
      </div>
    </div>
  );
}

export default WhyRetreat;




