import React, { ReactElement } from 'react';

import { SFooter } from './Footer.styled';

const Footer = (): ReactElement => (
  <SFooter>
    © 2014-{new Date().getFullYear()} Tiqets Amsterdam
  </SFooter>
);

export default Footer;
