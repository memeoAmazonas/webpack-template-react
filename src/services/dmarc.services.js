import { URL } from 'Asset/constants';
import http from './http.common';

class DmarcServices {
  GetDomain() {
    return http.get(URL.DOMAINS);
  }

  GetMetadaQuery() {
    return http.get(URL.METADATA_TABLES_QUERY);
  }
}
export default new DmarcServices();
