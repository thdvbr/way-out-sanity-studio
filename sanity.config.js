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
import listicleBlockContent from './schemas/listicleBlockContent'  
import listicleItem from './schemas/listicleItem'  

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

    ],
    },
  
  document: {
    productionUrl: async (prev, context) => {
      const {document} = context
          const slug = document?.slug?.current
          const type = document?._type  // Get the document type
      
      if (!slug) return prev
      
      const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL
      const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET
      
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${slug}&type=${type}`
    },
  },
})