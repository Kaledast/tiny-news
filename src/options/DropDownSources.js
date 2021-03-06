import React from 'react';
import GeneralLabel from '../components/GeneralLabel.js';
import GeneralDropDownContainer from '../components/styled_options/GeneralDropDownContainer.js';
import { Dropdown } from 'semantic-ui-react';

export default function DropDownSources({ source, onSourcesSelect, history }) {
  const sources = [
    'abc-news',
    'abc-news-au',
    'aftenposten',
    'al-jazeera-english',
    'ansa',
    'argaam',
    'ars-technica',
    'ary-news',
    'associated-press',
    'australian-financial-review',
    'axios',
    'bbc-news',
    'blasting-news-br',
    'bleacher-report',
    'bloomberg',
    'breitbart-news',
    'business-insider',
    'business-insider-uk',
    'buzzfeed',
    'cbc-news',
    'cbs-news',
    'cnbc',
    'cnn',
    'cnn-es',
    'crypto-coins-news',
    'daily-mail',
    'der-tagesspiegel',
    'die-zeit',
    'el-mundo',
    'engadget',
    'entertainment-weekly',
    'espn',
    'espn-cric-info',
    'financial-post',
    'focus',
    'football-italia',
    'fortune',
    'four-four-two',
    'fox-news',
    'fox-sports',
    'globo',
    'google-news',
    'google-news-ar',
    'google-news-br',
    'google-news-ca',
    'google-news-fr',
    'google-news-in',
    'google-news-uk',
    'google-news-it',
    'google-news-ru',
    'google-news-sa',
    'goteborgs-posten',
    'gruenderszene',
    'hacker-news',
    'handelsblatt',
    'ign',
    'il-sole-24-ore',
    'independent',
    'infobae',
    'info-money',
    'la-gaceta',
    'la-nacion',
    'la-repubblica',
    'le-monde',
    'lenta',
    'lequipe',
    'les-echos',
    'liberation',
    'marca',
    'mashable',
    'medical-news-today',
    'metro',
    'mirror',
    'msnbc',
    'mtv-news',
    'mtv-news-uk',
    'national-geographic',
    'national-review',
    'nbc-news',
    'news24',
    'new-scientist',
    'news-com-au',
    'newsweek',
    'new-york-magazine',
    'next-big-future',
    'nfl-news',
    'nhl-news',
    'nrk',
    'politico',
    'polygon',
    'rbc',
    'rte',
    'rtl-nieuws',
    'sabq',
    'spiegel-online',
    'svenska-dagbladet',
    't3n',
    'talksport',
    'techcrunch',
    'techcrunch-cn',
    'techradar',
    'the-american-conservative',
    'the-economist',
    'the-globe-and-mail',
    'the-hill',
    'the-hindu',
    'the-huffington-post',
    'the-irish-times',
    'the-jerusalem-post',
    'the-lad-bible',
    'the-new-york-times',
    'the-next-web',
    'the-sport-bible',
    'the-telegraph',
    'the-times-of-india',
    'the-verge',
    'the-wall-street-journal',
    'the-washington-post',
    'the-washington-times',
    'time',
    'usa-today',
    'vice-news',
    'wired',
    'wired-de',
    'wirtschafts-woche',
    'xinhua-net',
    'ynet'
  ];

  const sourceOptions = sources.map(source => ({
    key: source,
    text: source,
    value: source
  }));

  return (
    <GeneralDropDownContainer>
      <GeneralLabel htmlFor='source'>Choose sources:</GeneralLabel>
      <Dropdown
        onChange={(event, data) => {
          onSourcesSelect(data.value);
          history.replace('/news/:topic?');
        }}
        placeholder='source'
        search
        selection
        value={source}
        options={sourceOptions}
      />
    </GeneralDropDownContainer>
  );
}
