import getElementName from "@/app/types/elements";
import { ElementParentType, ElementType, Pages } from "@/app/types/types";

type OutputMarkup = {
  name: string;
  elements: string[];
};


export function PageToJi(pages: Pages): string {
  const output: OutputMarkup[] = [];

  pages.forEach((page, index) => {
    const outputPage: OutputMarkup = {
      name: `page${index}`,
      elements: [],
    };
    const heading = `heading: "${page.name}";`;
    outputPage.elements.push(heading);
    page.elements.forEach((element, eleIndex) => {
      let name = getElementName(element.element.type);
      name = name[0].toLowerCase() + name.substring(1);
      if (element.type == ElementParentType.SCALAR) {
        const currentElement = `${name}: "${element.element.content}";`;
        outputPage.elements.push(currentElement);
      } else {
        if (Array.isArray(element.element.content)) {
          const paragraphs = element.element.content.map((line, index) => {
            return `"${line}",`;
          });
          outputPage.elements.push(`${name}: [\n${paragraphs.join("\n")}\n];`);
        }
      }
    });

    output.push(outputPage);
  });
  const outputPages = output.map((page) => {
    const content = page.elements.join("\n");
    const placeholder = `${page.name} = page {
${content}
}`;
    
    return placeholder;
  }).join("\n");

  
  return outputPages;
}
