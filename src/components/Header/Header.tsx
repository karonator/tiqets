import React, { ReactElement, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { searchSliceSelector } from '../../redux/selectors';

import { SHeader, SLoader, SError } from './Header.styled';

const Header = (): ReactElement => {
  const { loading, error } = useSelector(searchSliceSelector);

  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      setShowLoader(true);
    } else {
      setTimeout(() => setShowLoader(false), 200);
    }
  }, [loading]);

  return (
    <>
      <SHeader>
        Plan your trip!
        <SLoader show={showLoader} />
      </SHeader>
      {error && (
        <SError>
          { error }
        </SError>
      )}
    </>
  );
};

export default Header;
