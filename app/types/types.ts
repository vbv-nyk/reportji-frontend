export enum ElementType {
    TITLE,
    SUBTITLE,
    HEADING,
    AUTHOR,
    DATE,
    PARAGRAPHS,
    ITEMS,
    FIGURES,
    CITATIONS,
    DIFFERENCES,
    INVALID,
}

export enum ElementParentType {
    SCALAR,
    VECTOR,
    TABLES,
    INVALID
}


export type DifferencesElement = {
    type: ElementType,
    content: String[][]
}


export type ScalarElement = {
    type: ElementType,
    content: String
}

export type VectorElement = {
    type: ElementType,
    content: String[]
}

export type PdfElement = {
    type: ElementParentType,
    element: ScalarElement | VectorElement
}

export type Page = {
    elements: PdfElement[]
}

type Pages = {
    pages: Page[]
}
