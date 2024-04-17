export const schemaErrorMessage = (title: string, description?: string): string =>
  `**${title}**${description ? `\n${description}` : ``}`
