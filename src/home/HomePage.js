import React from 'react';
import HomeBody from '../components/styled_home/HomeBody.js';
import ButtonContainer from '../components/styled_home/HomeButtonContainer.js';
import Buttons from './Buttons.js';

export default function HomePage({ onTopicSelect }) {
  const topics = [
    { id: 'entertainment', img: require('../images/EntertainButton.svg') },
    { id: 'general', img: require('../images/GeneralButton.svg') },
    { id: 'business', img: require('../images/BusinessButton.svg') },
    { id: 'health', img: require('../images/HealthButton.svg') },
    { id: 'science', img: require('../images/ScienceButton.svg') },
    { id: 'sports', img: require('../images/SportsButton.svg') },
    { id: 'technology', img: require('../images/TechnologyButton.svg') }
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
