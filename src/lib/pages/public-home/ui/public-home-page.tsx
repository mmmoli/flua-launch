import { BenefitList } from '@widgets/marketing/benefit-list';
import { FeatureList } from '@widgets/marketing/feature-list';
import { ObjectionList } from '@widgets/marketing/objection-list';
import { TestimonialList } from '@widgets/marketing/testimonial-list';
import { FC } from 'react';

import { HeroSection } from './hero-section';
import { LastCtaSection } from './last-cta-section';

export const PublicHomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <FeatureList />
      <BenefitList />
      <TestimonialList />
      <ObjectionList />
      <LastCtaSection />
    </>
  );
};
