import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDomains, setDomain } from 'Slice/domain';
import { HTTP_STATUS } from 'Service/url';
import { Radio } from 'Component/Button';

export default function () {
  const dispatch = useDispatch();
  const { data, loading, domain } = useSelector((state) => state.domain);
  React.useEffect(() => {
    if (!data) dispatch(fetchDomains());
  }, []);
  const handleChange = (event) => {
    dispatch(setDomain(event.target.value));
  };
  return (
    <Radio
      handleChange={handleChange}
      title="select.domain"
      value={domain}
      data={data}
      loading={loading === HTTP_STATUS.PENDING}
    />
  );
}
