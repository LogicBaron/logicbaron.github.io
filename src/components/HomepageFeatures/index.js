import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Better Knowledge',
    Svg: require('@site/static/img/logicbaron_book.svg').default,
    description: (
      <>
        Our goal is to record more accurate and deeper knowledge.
      </>
    ),
  },
  {
    title: 'Focus on AI',
    Svg: require('@site/static/img/logicbaron_aiai.svg').default,
    description: (
      <>
        We record mathematics, information theory, computer science, and machine learning for AI.
      </>
    ),
  },
  {
    title: 'LIFE and MUSIC',
    Svg: require('@site/static/img/logicbaron_guitar.svg').default,
    description: (
      <>
        I record life. I play music.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
