import { ISkill } from './Skill';
import { IContactInformation } from './ContactInformation';
import { IParagraph } from './Paragraph';

export interface IResume {
    id?: string;
    fullName?: string;
    contactInformation?: IContactInformation;
    summary?: string;
    experience? : IParagraph[];
    education? : IParagraph[];
    skills? : ISkill[];
    languages? : ISkill[];
}

class Resume implements IResume{
    public id: string;
    public fullName: string;
    public contactInformation?: IContactInformation;
    public summary: string;
    public experience : IParagraph[];
    public education : IParagraph[];
    public skills : ISkill[];
    public languages: ISkill[];

    constructor();
    constructor(iResume? : IResume) {
        this.id = iResume?.id || '';
        this.fullName = iResume?.fullName || '';
        this.contactInformation = iResume?.contactInformation || undefined;
        this.summary = iResume?.summary || '';
        this.experience = iResume?.experience || [];
        this.education = iResume?.education || [];
        this.skills = iResume?.skills || [];
        this.languages = iResume?.languages || [];
    }    
}

export default Resume;
