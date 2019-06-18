import React from 'react';
import News from './News.js';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('News Component', () => {
  it('renders a News-Article with, timestamp, image, title and description', () => {
    const save = false;
    const onSave = jest.fn();
    const article = {
      title: 'textTitle',
      content: 'testContent',
      describtion: 'testDescription',
      url:
        'https://www.sciencealert.com/gorgeous-new-crater-spotted-on-the-red-planet-is-one-of-the-largest-we-ve-seen',
      publishedAt: '2019-06-18T06:43:51Z',
      urlToImage:
        'https://www.sciencealert.com/images/2019-06/processed/marsimpactcrater_1024.jpg'
    };

    const component = renderer.create(
      <ThemeProvider
        theme={{
          mode: 'normal'
        }}
      >
        <News
          key="article id or '404 not found'"
          onSave={onSave}
          save={save}
          article={article}
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a link', () => {
    const article = {
      title: 'textTitle',
      content: 'testContent',
      describtion: 'testDescription',
      url:
        'https://www.sciencealert.com/gorgeous-new-crater-spotted-on-the-red-planet-is-one-of-the-largest-we-ve-seen',
      publishedAt: '2019-06-18T06:43:51Z',
      urlToImage:
        'https://www.sciencealert.com/images/2019-06/processed/marsimpactcrater_1024.jpg'
    };

    const callback = jest.fn(() => {
      console.log('saved called');
    });

    const news = shallow(
      <News
        theme={'normal'}
        key="article id or '404 not found'"
        save={false}
        article={article}
        onSave={callback}
      />
    );
    expect(
      news
        .dive()
        .dive()
        .contains('input')
    );

    const checkbox = news
      .dive()
      .dive()
      .find('input');

    checkbox.simulate('change');
    expect(callback).toHaveBeenCalled();
  });
});
//expect(callback).toHaveBeenCalled();
//const actualWindowLocation = global.window.location.pathname;
// expect(actualWindowLocation).not.toBe(global.window.location.pathname);
/*

    const location = JSON.stringify(window.location);
    delete window.location;

    Object.defineProperty(window, 'location', {
      value: JSON.parse(location)
    });

    Object.defineProperty(global.location, 'href', {
      value: 'http://localhost.com',
      configurable: true
    });

    const link = news.find(el => el.type === 'a');
    */
