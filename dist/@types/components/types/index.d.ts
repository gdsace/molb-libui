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
    description: string;
    entityWide: boolean;
    name: string;
    required: string;
    uploaded: boolean;
    documentId: number | null;
    documentName: string | null;
    documentSize: number | null;
}
