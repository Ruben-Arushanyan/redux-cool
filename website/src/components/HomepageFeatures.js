/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Speed in Software Development',
    Svg: require('../../static/img/fast.svg').default,
    description: (
      <>
        Using <b>Redux Cool</b> toolkit, you will build Redux State Management Logic
        in our app a few times faster than if you use any other toolkit existing up to this date.
      </>
    ),
  },
  {
    title: 'Intuitively Understandable',
    Svg: require('../../static/img/intuition.svg').default,
    description: (
      <>
        In the <b>Redux Cool</b>, the reducer functions are created with the help of <b>Reducer-Tree </b> which 
        enables us to intuitively understand the entire redux logic at first glance.
      </>
    ),
  },
  {
    title: 'Simple API',
    Svg: require('../../static/img/api.svg').default,
    description: (
      <>
        The Redux Cool API surface is very tiny. It has only <b>two</b> Top-Level Exports:
        <br/>
        <b>reducersCreator</b> and <b>actionsCreator</b>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
