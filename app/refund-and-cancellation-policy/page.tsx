import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';
import { getPolicyByHref } from '@/content/legal';

const policy = getPolicyByHref('/refund-and-cancellation-policy')!;

export const metadata: Metadata = {
  title: policy.seo.title,
  description: policy.seo.description,
  openGraph: {
    title: policy.seo.title,
    description: policy.seo.description
  }
};

export default function RefundAndCancellationPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
