/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_TICKET_MASTER_KEY: string
  readonly REACT_APP_TICKET_MASTER_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
