import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import subCategory from './schemas/subCategory'
import staff from './schemas/staff'
import page from './schemas/page'
import ad from './schemas/ad'
import adCategory from './schemas/adCategory'
import youtube from './schemas/youtube.jsx'
import radio from './schemas/radio'

export default defineConfig({
  name: 'default',
  title: 'Way Out Magazine',
  
  projectId: 'kdi823is',
  dataset: 'production',
  
  plugins: [
  structureTool(),
  visionTool(),
  ],
  
  schema: {
    types: [
          // Schema types go here
      post,
      page,
      staff,
      ad,
      category,
      subCategory,
      adCategory,
      blockContent,
      youtube,
      radio,
    ],
    },
  
  document: {
    productionUrl: async (prev, context) => {
      const {document} = context
      const slug = document?.slug?.current
      
      if (!slug) return prev
      
      const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL
      const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET
      
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${slug}`
    },
  },
})