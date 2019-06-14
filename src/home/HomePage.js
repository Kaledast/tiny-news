import React from 'react';
import HomeBody from '../components/styled_home/HomeBody.js';
import ButtonContainer from '../components/styled_home/HomeButtonContainer.js';
import Buttons from './Buttons.js';

export default function HomePage({ onTopicSelect }) {
  const topics = [
    { id: 'entertainment', img: require('../news/images/EntertainButton.svg') },
    { id: 'general', img: require('../news/images/GeneralButton.svg') },
    { id: 'business', img: require('../news/images/BusinessButton.svg') },
    { id: 'health', img: require('../news/images/HealthButton.svg') },
    { id: 'science', img: require('../news/images/ScienceButton.svg') },
    { id: 'sports', img: require('../news/images/SportsButton.svg') },
    { id: 'technology', img: require('../news/images/TechnologyButton.svg') }
  ];

  return (
    <HomeBody>
      <ButtonContainer>
        {topics.map(topic => (
          <Buttons key={topic.id} topic={topic} onSelect={onTopicSelect} />
        ))}
      </ButtonContainer>
    </HomeBody>
  );
}
