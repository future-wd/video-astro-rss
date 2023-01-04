import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = () => rss({
  // `<title>` field in output xml
  title: SITE_TITLE,
  // `<description>` field in output xml
  description: SITE_DESCRIPTION,
  // base URL for RSS <item> links
  // SITE will use "site" from your project's astro.config.
  site: import.meta.env.SITE,
  // list of `<item>`s in output xml
  // simple example: generate items for every md file in /src/pages
  // see "Generating items" section for required frontmatter and advanced use cases
  items: import.meta.glob('./blog/**/*.(md|mdx)'),
  // (optional) inject custom xml
  customData: `<language>en</language>`,
  // ex. use your stylesheet from "public/rss/styles.xsl"
  stylesheet: '/rss/styles.xsl',
});
