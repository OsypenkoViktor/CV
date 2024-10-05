import { IListData } from "../../components/CustomList";

export const educationListData: IListData = {
  "Kryvyj Rih National University": [
    {
      primaryText: "Geography teacher",
      secondaryText: "Masters degree",
    },
  ],
  "QATestLab courses": [
    {
      primaryText: "Manual QA",
      secondaryText: `Introduction to testing. 
      Web projects testing. 
      Functional testing approaches.
      Software testing life cycle.
      Test design.
      Mobile application testing.
      Game testing `,
    },
  ],
  ITVDN: [
    {
      primaryText: "Basic HTML and CSS",
      secondaryText:
        "Certificate. Сommon HTML5 elements. Hyperlinks, images, lists, and multimedia content " +
        "Form elements, collecting user data." +
        "Accessibility best practices (ARIA roles, alt attributes for images, etc.)." +
        "Styling websites using external, internal, and inline CSS." +
        "CSS selectors, combinators, and pseudo-classes/pseudo-elements. " +
        "Using box model concepts, padding, margins, and borders to create responsive layouts." +
        "Flexbox and Grid for responsive design and layout structuring." +
        "Media queries",
    },
    {
      primaryText: "Basic JavaScript",
      secondaryText:
        "Certificate. Core JavaScript." +
        "Asynchronous JavaScript." +
        "Error Handling etc",
    },
  ],
};

export interface IExpirienceRow {
  position: string;
  startDate: string;
  endDate: string;
  stack: string;
  responsibilities: string;
}

function createData(
  position: string,
  startDate: string,
  endDate: string,
  stack: string,
  responsibilities: string,
): IExpirienceRow {
  return { position, startDate, endDate, stack, responsibilities };
}

export const rows: IExpirienceRow[] = [
  createData(
    "Automation quality engeneer",
    "June 2024",
    "September 2024",
    "Node js, Cypress",
    "(E-commerce projects): Creating new automated tests. Maintaining existing automated tests." +
      "Writing QA documentation - test-cases, bug-reports, test-plans etc.",
  ),
  createData(
    "Full stack dev",
    "September 2024",
    "still",
    "Node js \n Next js",
    "sone text",
  ),
];
