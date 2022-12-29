
  export interface book {
    title?: string,
    subtitle?: string,
    authors?: string[],
    publisher?: string,
    publishedDate?: string,
    description?: string,
    industryIdentifiers?: [],
    readingModes?: {
       text: boolean,
       image: boolean
    },
    pageCount?: number,
    printType?: string,
    categories?: string[],
    averageRating?: number,
    ratingsCount?: number,
    maturityRating?: string,
    allowAnonLogging?: boolean,
    contentVersion?: string,
    panelizationSummary?: {
       containsEpubBubbles: boolean,
       containsImageBubbles: boolean
    },
    imageLinks?: {
       smallThumbnail: string,
       thumbnail: string
    },
    language?: string,
    previewLink?: string,
    infoLink?: string,
    canonicalVolumeLink?: string,
    id?: string,
    shelf?: string
 }
