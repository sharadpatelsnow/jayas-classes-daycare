/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA4_ID: string
  readonly VITE_GTM_ID: string
  readonly VITE_WEB3FORMS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
