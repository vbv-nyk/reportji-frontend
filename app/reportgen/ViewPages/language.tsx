import getElementName from "@/app/types/elements";
import { ElementParentType, ElementType, Pages } from "@/app/types/types";

type OutputMarkup = {
  name: string;
  elements: string[];
};


function replaceBracesWithContainers(content: string) {
    content = content.replace(/\{.*\}/g, (match)=>`\\curly{${match.substring(1,match.length -1)}}`);
    content = content.replace(/\[.*\]/g, (match)=>`\\square{${match.substring(1,match.length -1)}}`);
    content = content.replace(/\".*\"/g, (match)=>`\\quotes{${match.substring(1,match.length -1)}}`);
    content = content.replace(/\(.*\)/g, (match)=>`\\round{${match.substring(1,match.length -1)}}`);
    return content;
}
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
      if (element.type == ElementParentType.SCALAR && !Array.isArray(element.element.content)) {
          let content = replaceBracesWithContainers(element.element.content);
          console.log(content);
          const currentElement = `\t${name}: "${content}";`;
          outputPage.elements.push(currentElement);
      } else {
        if (Array.isArray(element.element.content)) {
          const paragraphs = element.element.content.map((line, index) => {
            let content = replaceBracesWithContainers(line);
            console.log(content);
            return `\t\t"${content}",`;
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
