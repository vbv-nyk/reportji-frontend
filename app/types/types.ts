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

type HeadingElement = {
    type: ElementType,
    content: String
}

type DifferencesElement = {
    type: ElementType,
    content: String[][]
}

type CitationsElement = {
    types:ElementType,
    content: String[]
}

type FiguresElement = {
    type: ElementType,
    content: String[]
}

type ItemsElement = {
    type: ElementType,
    content: String[]
}

type ParagraphsElement = {
    type: ElementType,
    content: String[]
}

type AuthorElement = {
    type: ElementType,
    content: String
}

type SubtitleElement ={
    type: ElementType,
    content: String
}

type TitleElement = {
    type: ElementType,
    content: String
}

type DateElement = {
    type: ElementType, 
    content: String
}


type PdfElement = {
    element: TitleElement | DateElement | SubtitleElement | HeadingElement | AuthorElement | ParagraphsElement | ItemsElement | FiguresElement | CitationsElement | DifferencesElement
}

type Page = {
    elements: PdfElement[]
}

type Pages = {
    pages: Page[]
}