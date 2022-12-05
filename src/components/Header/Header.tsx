import React, { ReactElement, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { TStore } from '../../redux/store';

import { SHeader, SLoader } from './Header.styled';

const Header = (): ReactElement => {
  const searchData = useSelector((state: TStore) => state.searchDataReducer);

  const { loading } = searchData;
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      setShowLoader(true);
    } else {
      setTimeout(() => setShowLoader(false), 200);
    }
  }, [loading]);

  return (
    <SHeader>
      Plan your trip!
      <SLoader show={showLoader} />
    </SHeader>
  );
};

export default Header;
