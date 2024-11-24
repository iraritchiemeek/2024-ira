// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Page } from './collections/Page'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const dbConfig = {
  development: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ''
    },
    migrationDir: "./migrations"
  }),
  production: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ''
    },
    migrationDir: "./migrations"

  })
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Page],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: process.env.NODE_ENV === 'production' 
    ? dbConfig.production 
    : dbConfig.development,
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
