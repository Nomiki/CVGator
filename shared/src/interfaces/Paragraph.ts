export interface IParagraph {
    jobTitle?: string;
    employer?: string;
    description?: string[];
    dateStart?: Date;
    dateEnd?: Date;
}

class Paragraph implements IParagraph{
    public jobTitle: string;
    public employer: string;
    public description: string[];
    public dateStart?: Date;
    public dateEnd?: Date;

    constructor(iParagraph? : IParagraph) {
        this.jobTitle = iParagraph?.jobTitle || '';
        this.employer = iParagraph?.employer || '';
        this.description = iParagraph?.description || [];
        this.dateStart = iParagraph?.dateStart || undefined;
        this.dateEnd = iParagraph?.dateEnd || undefined;
    }
}

export default Paragraph;