export interface IDocument {
  createdAt: string;
  documentTypeCode: string;
  fileSize: number | null;
  id: number;
  location: string;
  name: string | null;
  subjectId: number;
  subjectType: number;
  companyUEN: string | null;
  updatedAt: string;
}

export interface IDocumentType {
  citedBy: number;
  code: string;
  shared: boolean;
  multipleInstanceName?: string;
  belongsToJourneyTaskIds: number[];
  description: string;
  entityWide: boolean;
  name: string;
  additionalRemark: string | null;
  uploaded: boolean;
  documentId: number | null;
  documentName: string | null;
  documentSize: number | null;
  hasTemplateFile: boolean;
}
