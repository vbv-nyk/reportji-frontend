enum ElementType {
    TITLE,
    SUBTITLE,
    HEADING,
    AUTHOR,
    DATE,
    PARAGRAPHS,
    ITEMS,
    FIGUREs,
    CITATIONS,
    DIFFERENCES
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
    element: ScalarElement | VectorElement
}

export type Page = {
    elements: PdfElement[]
}

type Pages = {
    pages: Page[]
}
