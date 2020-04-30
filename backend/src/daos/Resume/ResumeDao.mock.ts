import { MockDaoMock } from '@daos/MockDb/MockDao.mock';
import { IResumeDao } from './ResumeDao';
import Resume, { IResume } from '@entities/Resume';
import { v4 as uuidv4 } from 'uuid';


export class ResumeDao extends MockDaoMock implements IResumeDao {

    public async getOne (id: string) : Promise<IResume | null>{
        const db = await super.openDb();
        for (const resume of db.resumes) {
            if (resume.id === id){

                return resume;
            }
        }

        return null;
    }

    public async add (resume: IResume) : Promise<IResume>{
        const db = await super.openDb();
        const mockId = uuidv4();
        resume.id = mockId;
        const addedResume = new Resume(resume);
        db.resumes.push(addedResume);
        super.saveDb(db);

        return addedResume;
    }

    public async update (resume: IResume) : Promise<IResume>{
        const db = await super.openDb();
        for (let i = 0; i < db.resumes.length; i++) {
            if ( db.resumes[i].id === resume.id){
                db.resumes[i] = resume;
                db.saveDb(db);
                return resume;
            }
        }

        throw new Error("failed to update");
    }

    public async delete (id: string) : Promise<boolean>{
        const db = await super.openDb();
        for (let i = 0; i < db.resumes.length; i++) {
            if (db.resumes[i].id === id){
                db.resumes.splice(i, 1);
                db.saveDb(db);
                return true;
            }
        }

        return false;
    }
}