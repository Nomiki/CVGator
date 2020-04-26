import { ISkill } from './Skill';
import { IContactInformation } from './ContactInformation';
import { IParagraph } from './Paragraph';

export interface IResume {
    id: number;
    name: string;
    contactInformation: IContactInformation;
    summary: string;
    experience : IParagraph[];
    education : IParagraph[];
    skills : ISkill[];
    languages: ISkill[];
}


