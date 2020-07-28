declare module 'sass-extract' {
  export interface RenderOptions {
    file: string
  }

  export interface Document {
    vars: {
      global: {
        $scale: {
          value: Record<string, any>
        },
        $functional: {
          value: Record<string, any>
        }
      }
    }
  }

  export function render(opts: RenderOptions): Promise<Document>
}
