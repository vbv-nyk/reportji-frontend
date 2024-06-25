import {DifferencesElement, ElementParentType, ElementType, PdfElement, ScalarElement, VectorElement} from "./types";

export function Scalar(input: ScalarElement) : ScalarElement {
    return {...input};
}

export function Vector(input: VectorElement) : VectorElement {
   return {...input};
}

export function Table(input: DifferencesElement) : DifferencesElement {
    return {...input}
}

export function getParentType(input: String) : ElementParentType{
    switch(input) {
       case "Heading":
       case "Title":
       case "Subtitle":
       case "Author":
       case "Date":
            return ElementParentType.SCALAR
       case "Paragraphs":
       case "Items":
       case "Figures":
       case "Citations":
            return ElementParentType.VECTOR
       case "Tables":
            return ElementParentType.TABLES
    }
    
    return ElementParentType.INVALID;
}

export function getElementType(input: String) : ElementType {
    switch(input) {
       case "Heading":
            return ElementType.HEADING;
       case "Title":
            return ElementType.TITLE;
       case "Subtitle":
            return ElementType.SUBTITLE;
       case "Author":
            return ElementType.AUTHOR;
       case "Date":
            return ElementType.DATE;
       case "Paragraphs":
            return ElementType.PARAGRAPHS;
       case "Items":
            return ElementType.ITEMS;
       case "Figures":
            return ElementType.FIGURES;
       case "Citations":
            return ElementType.CITATIONS;
       case "Table":
            return ElementType.DIFFERENCES;
    }
    
    return ElementType.INVALID;
   
}