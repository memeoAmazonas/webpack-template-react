import http from './http.common';
import * as URL from './url';

class DmarcServices {
  GetDomain() {
    return http.get(URL.DOMAINS_URL);
  }

  GetMetadaQuery() {
    return http.get(URL.METADATA_TABLES_QUERY_URL);
  }
}
export default new DmarcServices();
