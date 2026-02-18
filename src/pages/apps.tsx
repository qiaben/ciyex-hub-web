import type { ReactNode } from 'react';
import { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

type PricingInfo = {
  model: string;
  label: string;
};

type AppInfo = {
  name: string;
  slug: string;
  category: string;
  icon: string;
  iconBg: string;
  description: string;
  features: string[];
  pricing: PricingInfo;
  fhirResources: string[];
  featured: boolean;
  extensionPoints?: string[];
};

const APPS: AppInfo[] = [
  {
    name: 'Ciyex Medical Codes',
    slug: 'ciyex-codes',
    category: 'Clinical Reference',
    icon: '📋',
    iconBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Comprehensive medical code reference library with ICD-10, CPT, HCPCS, CDT, SNOMED CT, LOINC, NDC codes. Includes NCCI PTP edits, MUE values, crosswalks, fee schedules, and code versioning.',
    features: ['ICD-10 (98K codes)', 'CPT (AMA licensed)', 'HCPCS (8.3K)', 'CDT dental (683)', 'SNOMED CT', 'LOINC', 'NCCI PTP edits', 'Fee schedules'],
    pricing: { model: 'FREE', label: 'Free' },
    fhirResources: ['CodeSystem', 'ValueSet', 'ConceptMap'],
    featured: true,
  },
  {
    name: 'Ciyex Communications',
    slug: 'ciyex-comm',
    category: 'Communication',
    icon: '💬',
    iconBg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'Unified messaging platform for patient and provider communication. Supports email, SMS, fax, and in-app notifications with template management and delivery tracking.',
    features: ['Email messaging', 'SMS messaging', 'Fax support', 'Message templates', 'Delivery tracking', 'Batch messaging'],
    pricing: { model: 'USAGE', label: '$0.01/message' },
    fhirResources: ['Communication', 'CommunicationRequest'],
    featured: true,
  },
  {
    name: 'Ciyex Credentialing',
    slug: 'ciyex-credentialing',
    category: 'Operations',
    icon: '🏥',
    iconBg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'End-to-end provider credentialing and payer enrollment management. Track licenses, certifications, board exams, and payer enrollments with automated expiration alerts.',
    features: ['Provider credentialing', 'Payer enrollment', 'License alerts', 'CAQH integration', 'NPPES lookup', 'Document management'],
    pricing: { model: 'FIXED', label: '$149/month' },
    fhirResources: ['Practitioner', 'PractitionerRole', 'Organization'],
    featured: false,
  },
  {
    name: 'Ciyex File Storage',
    slug: 'ciyex-files',
    category: 'Infrastructure',
    icon: '📁',
    iconBg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    description: 'HIPAA-compliant file storage for clinical documents, images, and attachments. Supports S3-compatible storage with encryption at rest and configurable retention policies.',
    features: ['Secure upload/download', 'S3-compatible', 'Encryption at rest', 'Configurable retention', 'HIPAA audit trail'],
    pricing: { model: 'TIERED', label: 'Free up to 5GB' },
    fhirResources: ['DocumentReference', 'Binary'],
    featured: false,
  },
  {
    name: 'Ciyex Patient Payments',
    slug: 'ciyex-patient-pay',
    category: 'Billing',
    icon: '💳',
    iconBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Patient payment collection with Stripe integration. Supports credit cards, payment plans, automated reminders, and a self-service patient portal for online bill pay.',
    features: ['Credit card processing', 'Payment plans', 'Auto reminders', 'Patient portal', 'Invoice management', 'Stripe integration'],
    pricing: { model: 'PERCENTAGE', label: '2.9% + $0.30/txn' },
    fhirResources: ['PaymentReconciliation', 'Invoice', 'Account'],
    featured: true,
  },
  {
    name: 'Ciyex Telehealth',
    slug: 'ciyex-telehealth',
    category: 'Telehealth',
    icon: '📹',
    iconBg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'HIPAA-compliant video consultation platform with waiting room, session recording, in-session chat, and multi-participant support. Integrates with Twilio or Jitsi.',
    features: ['Video consultations', 'Waiting room', 'Session recording', 'In-session chat', 'Multi-participant', 'Twilio/Jitsi'],
    pricing: { model: 'USAGE', label: '$1.50/session-min' },
    fhirResources: ['Encounter', 'Appointment'],
    featured: true,
    extensionPoints: ['patient-chart:action-bar'],
  },
  {
    name: 'Ciyex RCM',
    slug: 'ciyex-rcm',
    category: 'Revenue Cycle',
    icon: '💰',
    iconBg: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
    description: 'Full revenue cycle management: claims submission, eligibility verification, ERA/EOB processing, denial management, payment posting, prior auth, and financial reporting.',
    features: ['Claims submission', 'Eligibility verification', 'ERA/EOB processing', 'Denial management', 'Payment posting', 'AI-assisted coding', 'Multi-clearinghouse'],
    pricing: { model: 'PERCENTAGE', label: '5% of collections' },
    fhirResources: ['Claim', 'ClaimResponse', 'ExplanationOfBenefit', 'Coverage'],
    featured: true,
    extensionPoints: ['encounter:form-footer', 'patient-chart:tab'],
  },
  {
    name: 'Ciyex Screen Builder',
    slug: 'ciyex-metadata',
    category: 'Platform',
    icon: '🛠️',
    iconBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Low-code screen builder with drag-and-drop form designer, menu management, CDS rules engine, workflow automation, theme customization, and SMART on FHIR app registry.',
    features: ['Screen builder', 'Menu management', 'Workflow automation', 'CDS rules engine', 'Theme customization', 'SMART app registry'],
    pricing: { model: 'FREE', label: 'Free' },
    fhirResources: ['Questionnaire', 'QuestionnaireResponse', 'PlanDefinition'],
    featured: true,
  },
  {
    name: 'Ask Ciya — AI Assistant',
    slug: 'ask-ciya',
    category: 'AI',
    icon: '🤖',
    iconBg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    description: 'AI-powered clinical assistant with intelligent query routing between local Ollama models and AWS Bedrock. Supports clinical documentation, coding suggestions, and configurable model preferences.',
    features: ['AI clinical queries', 'Intelligent routing', 'Ollama local models', 'AWS Bedrock', 'Coding suggestions', 'Agent execution'],
    pricing: { model: 'USAGE', label: '$0.002/1K tokens' },
    fhirResources: [],
    featured: false,
    extensionPoints: ['patient-chart:tab', 'encounter:toolbar'],
  },
  {
    name: 'Care Gaps',
    slug: 'demo-care-gaps',
    category: 'Clinical',
    icon: '🩺',
    iconBg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    description: 'Identifies and displays care gaps for patients. Shows overdue screenings, missed preventive visits, and HEDIS quality measure gaps directly in the patient chart.',
    features: ['HEDIS measures', 'Care gap detection', 'Chart integration', 'Banner alerts', 'Priority scoring'],
    pricing: { model: 'FREE', label: 'Free' },
    fhirResources: ['Measure', 'MeasureReport', 'Patient'],
    featured: false,
    extensionPoints: ['patient-chart:banner-alert', 'patient-chart:tab'],
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(APPS.map(a => a.category))).sort()];

function AppCard({ app }: { app: AppInfo }) {
  const isFree = app.pricing.model === 'FREE';
  return (
    <div className="appCard">
      <div className="appCardIcon" style={{ background: app.iconBg }}>
        <span style={{ fontSize: '1.75rem' }}>{app.icon}</span>
      </div>
      <div className="appCardTitle">{app.name}</div>
      <div className="appCardCategory">{app.category}</div>
      <p className="appCardDescription">{app.description}</p>
      <div className="appCardFeatures">
        {app.features.slice(0, 4).map((f, i) => (
          <span key={i} className="appCardFeatureTag">{f}</span>
        ))}
        {app.features.length > 4 && (
          <span className="appCardFeatureTag">+{app.features.length - 4} more</span>
        )}
      </div>
      <div className="appCardFooter">
        <span className="appCardPrice">{app.pricing.label}</span>
        <span className={`appCardBadge ${isFree ? 'appCardBadgeFree' : ''}`}>
          {isFree ? 'Free' : app.pricing.model}
        </span>
      </div>
    </div>
  );
}

export default function AppsPage(): ReactNode {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = APPS.filter(app => {
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    const matchesSearch = !search ||
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase()) ||
      app.features.some(f => f.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.filter(a => a.featured);
  const regular = filtered.filter(a => !a.featured);

  return (
    <Layout
      title="Apps"
      description="Browse all available apps in the Ciyex Hub marketplace. Find billing, telehealth, clinical, AI, and infrastructure apps for your practice.">
      <div className="container" style={{ padding: '48px 0 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Heading as="h1">App Marketplace</Heading>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Discover apps that extend your Ciyex EHR with powerful integrations
          </p>
        </div>

        {/* Search */}
        <div style={{ maxWidth: '480px', margin: '0 auto 32px' }}>
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px',
              borderRadius: '100px',
              border: '1px solid #e5e7eb',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
        </div>

        {/* Category Filter */}
        <div className="categoryFilter" id="categories" style={{ justifyContent: 'center' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`categoryPill ${selectedCategory === cat ? 'categoryPillActive' : ''}`}
              onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Apps */}
        {featured.length > 0 && (
          <div id="featured" style={{ marginBottom: '48px' }}>
            <Heading as="h2" style={{ marginBottom: '8px' }}>
              Featured Apps
            </Heading>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              Top-rated apps recommended for every practice
            </p>
            <div className="appGrid">
              {featured.map(app => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>
          </div>
        )}

        {/* All Apps */}
        {regular.length > 0 && (
          <div>
            <Heading as="h2" style={{ marginBottom: '8px' }}>
              {featured.length > 0 ? 'More Apps' : 'All Apps'}
            </Heading>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              Browse the complete catalog
            </p>
            <div className="appGrid">
              {regular.map(app => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#9ca3af' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
            <Heading as="h3">No apps found</Heading>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
