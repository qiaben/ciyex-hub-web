import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'One-Click Install',
    icon: '🚀',
    description: (
      <>
        Browse the marketplace, click install, and your app is live in seconds.
        No manual configuration, no downtime — apps integrate directly into your EHR workflow.
      </>
    ),
  },
  {
    title: 'HIPAA Compliant',
    icon: '🔒',
    description: (
      <>
        Every app in Ciyex Hub is certified for HIPAA compliance. Enterprise-grade
        security with encryption, audit logging, and role-based access control built in.
      </>
    ),
  },
  {
    title: 'FHIR R4 Native',
    icon: '🔗',
    description: (
      <>
        All apps communicate using HL7 FHIR R4 standards. Seamless data exchange
        between your EHR and integrated apps — no custom adapters needed.
      </>
    ),
  },
  {
    title: 'Flexible Pricing',
    icon: '💰',
    description: (
      <>
        Choose from free, per-use, or subscription pricing. Many core apps are free.
        Only pay for what you use with transparent, practice-friendly pricing.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    icon: '💻',
    description: (
      <>
        Build and publish your own apps with our developer toolkit. SMART on FHIR
        launch support, webhook events, extension points, and comprehensive APIs.
      </>
    ),
  },
  {
    title: 'Real-Time Sync',
    icon: '⚡',
    description: (
      <>
        Webhook-driven architecture keeps your EHR and installed apps in perfect sync.
        Subscription changes, usage events, and data updates flow automatically.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Why Ciyex Hub?
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
