import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            <div className={styles.badges}>
              <span className={styles.badge}>App Marketplace</span>
              <span className={styles.badgeApps}>10+ Apps</span>
              <span className={styles.badgeFhir}>FHIR R4</span>
            </div>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Discover, install, and manage healthcare apps that seamlessly integrate
              with <strong>Ciyex EHR</strong>. From billing and telehealth to AI-powered
              clinical tools — find everything your practice needs in one place.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/apps">
                Browse Apps
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/getting-started/overview">
                User Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  return (
    <section className="statsSection">
      <div className="container">
        <div className="statsGrid">
          <div className="statItem">
            <div className="statNumber">10+</div>
            <div className="statLabel">Available Apps</div>
          </div>
          <div className="statItem">
            <div className="statNumber">10</div>
            <div className="statLabel">Categories</div>
          </div>
          <div className="statItem">
            <div className="statNumber">FHIR</div>
            <div className="statLabel">R4 Compliant</div>
          </div>
          <div className="statItem">
            <div className="statNumber">HIPAA</div>
            <div className="statLabel">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Healthcare App Marketplace"
      description="Ciyex Hub - The App Marketplace for Healthcare. Browse, install, and manage apps that extend your Ciyex EHR with powerful integrations.">
      <HomepageHeader />
      <main>
        <StatsSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
