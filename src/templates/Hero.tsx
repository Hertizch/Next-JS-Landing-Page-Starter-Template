import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-gray-800">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="mailto:post@ihrstadvare.taxi">
            Kontakt
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
