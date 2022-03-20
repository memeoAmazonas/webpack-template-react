export const HTTP_STATUS = Object.freeze({
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
});

export const URL = Object.freeze({
  METADATA_TABLES_QUERY: 'getmetadata',
  CREATE_QUERY: 'runqueryadmin',
  DOMAINS: 'getmatertableall',
});

export const OPERATION_QUERY = Object.freeze({
  STRING: ['=', 'LIKE', '!='],
  BOOLEAN: ['=', '!='],
  DATE: ['>', '<', '=', '>=', '<='],
});
