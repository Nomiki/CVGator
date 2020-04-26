export interface IParagraph {
    jobTitle: string;
    description: string[];
    dateStart: Date;
    dateEnd: Date;
}

class Paragraph implements IParagraph{
    public jobTitle: string;
    public description: string[];
    public dateStart: Date;
    public dateEnd: Date;

    constructor(iParagraph : IParagraph) {
        this.jobTitle = iParagraph.jobTitle;
        this.description = iParagraph.description;
        this.dateStart = iParagraph.dateStart;
        this.dateEnd = iParagraph.dateEnd;
    }
}

export default Paragraph;