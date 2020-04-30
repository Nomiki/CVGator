import { IResume } from '@entities/Resume';

export interface IResumeDao {
    getOne: (id: string) => Promise<IResume | null>;
    add: (resume: IResume) => Promise<IResume>;
    update: (resume: IResume) => Promise<IResume>;
    delete: (id: string) => Promise<boolean>;
}
