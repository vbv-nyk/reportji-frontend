import getElementName from "@/app/types/elements";
import { ElementParentType, ElementType, Pages } from "@/app/types/types";

type OutputMarkup = {
    name: string,
    elements: string[]
}
export function PageToJi(pages: Pages) {
    const output: OutputMarkup[]  = []; 
    
    pages.forEach((page,index) => {
        const outputPage : OutputMarkup = {
            name: `page${index}`,
            elements: []
        } 
        const heading = `"heading: ${page.name}";`;
        outputPage.elements.push(heading);
        page.elements.forEach((element,eleIndex) => {
                let name = getElementName(element.element.type);
                name = name[0].toLowerCase() + name.substring(1);
            if(element.type == ElementParentType.SCALAR) {
                const currentElement = `${name}: "${element.element.content}"`
                outputPage.elements.push(currentElement);
            } else {
                if(Array.isArray(element.element.content)) {
                    console.log(element.element.content);
                    const paragraphs = element.element.content.map((line,index)=> {
                        return `"${line}"\n`
                    })
                    outputPage.elements.push(`${name}: [${paragraphs}]`);
                }
            }
        })
        
        output.push(outputPage);
    })
    console.log(output);
}