import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';
import { getPolicyByHref } from '@/content/legal';

const policy = getPolicyByHref('/delivery-and-installation-policy')!;

export const metadata: Metadata = {
  title: policy.seo.title,
  description: policy.seo.description,
  openGraph: {
    title: policy.seo.title,
    description: policy.seo.description
  }
};

export default function DeliveryAndInstallationPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
