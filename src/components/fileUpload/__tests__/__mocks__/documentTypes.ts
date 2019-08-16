import { IDocumentType } from "src/components/types";

export const documentTypes: { [key: string]: IDocumentType } = {
  required: {
    code: "031",
    name: "somename",
    description: "somedescription",
    entityWide: false,
    additionalRemark: null,
    belongsToJourneyTaskIds: [],
    citedBy: 1,
    shared: true,
    uploaded: true,
    documentId: 30,
    documentName: "6766258486.pdf",
    documentSize: 15110,
    hasTemplateFile: true
  },
  optional: {
    code: "003",
    name: "optionalname",
    belongsToJourneyTaskIds: [],
    description: "optionaldesc",
    entityWide: false,
    additionalRemark: "Optional",
    citedBy: 1,
    shared: true,
    uploaded: false,
    documentId: null,
    documentName: null,
    documentSize: null,
    hasTemplateFile: false
  }
};
