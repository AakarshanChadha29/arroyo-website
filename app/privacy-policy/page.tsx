import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';
import { getPolicyByHref } from '@/content/legal';

const policy = getPolicyByHref('/privacy-policy')!;

export const metadata: Metadata = {
  title: policy.seo.title,
  description: policy.seo.description,
  openGraph: {
    title: policy.seo.title,
    description: policy.seo.description
  }
};

export default function PrivacyPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
