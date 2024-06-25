import {DifferencesElement, PdfElement, ScalarElement, VectorElement} from "./types";

export function Scalar(input: ScalarElement) : ScalarElement {
    return {...input};
}

export function Vector(input: VectorElement) : VectorElement {
   return {...input};
}

export function Table(input: DifferencesElement) : DifferencesElement {
    return {...input}
}