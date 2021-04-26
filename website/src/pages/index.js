/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
                width='340px'
                height='340px'
                alt='redux-cool logo'
                className={styles.heroLogo}
                src={useBaseUrl('/img/logo.png')}
          />
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{
              __html: `
                <b>Redux Cool</b>
                <br/>
                <br/>
                <p>Build <b>redux logic</b>, without getting <b>nervous 😬</b></p>
              `,
            }}
          />
        </h1>

        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/introduction">
                Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      
      description="Redux Cool is an awesome tiny package that allows you to easily and intuitively write redux logic"
    >
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
