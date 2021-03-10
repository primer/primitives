declare module 'sass-extract' {
  export interface RenderOptions {
    file: string
  }

  export interface Document {
    vars: {
      global: {
        $export: {
          type: 'SassMap'
          value: Record<string, any>
        },
      }
    }
  }

  export function render(opts: RenderOptions): Promise<Document>
}
