// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

import slug from 'slug';

slug.defaults.mode ='pretty';
slug.defaults.modes['pretty'] = {
  replacement: '_',
  symbols: true,
  remove: /[.]/g,
  lower: false,
  charmap: slug.charmap,
  multicharmap: slug.multicharmap
}
