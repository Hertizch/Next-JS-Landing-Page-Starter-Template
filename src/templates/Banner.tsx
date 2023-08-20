import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ta kontakt i dag for pristilbud"
      button={
        <Link href="mailto:post@ihrstadvar.taxi">
          <Button>Kontakt</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
