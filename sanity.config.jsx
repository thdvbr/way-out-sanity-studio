import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { createGlobalStyle } from 'styled-components';

import blockContent from './schemas/blockContent.js';
import category from './schemas/category.js';
import post from './schemas/post.js';
import subCategory from './schemas/subCategory.js';
import staff from './schemas/staff.js';
import page from './schemas/page.js';
import ad from './schemas/ad.js';
import adCategory from './schemas/adCategory.js';
import youtube from './schemas/youtube.jsx';
import radio from './schemas/radio.js';
import listicleBlockContent from './schemas/listicleBlockContent.js';
import listicleItem from './schemas/listicleItem.js';
import mixcloud from './schemas/mixcloud.jsx';

const GlobalEditorStyles = createGlobalStyle`
  [data-ui="Flex"][data-as="div"]:has([data-text]) {
    outline: 1px dashed #ccc;
    margin-bottom: 2px;
  }
  [data-ui="Flex"][data-as="div"]:has([data-text]):hover {
    outline: 1px dashed #888;
  }
`;

function StudioLayoutWrapper(props) {
  return (
    <>
      <GlobalEditorStyles />
      {props.renderDefault(props)}
    </>
  );
}

export default defineConfig({
  name: 'default',
  title: 'Way Out Magazine',

  projectId: 'kdi823is',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      // Schema types go here
      post,
      radio,
      page,
      staff,
      ad,
      category,
      subCategory,
      adCategory,
      listicleBlockContent,
      listicleItem,
      blockContent,
      youtube,
      mixcloud,
    ],
  },

  document: {
    productionUrl: async (prev, context) => {
      const { document } = context;
      const slug = document?.slug?.current;
      const type = document?._type; // Get the document type

      if (!slug) return prev;

      const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;
      const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${slug}&type=${type}`;
    },
  },
  studio: {
    components: {
      layout: StudioLayoutWrapper,
    },
  },
});
