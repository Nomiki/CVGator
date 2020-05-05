import { ResumeDao } from '@daos/Resume/ResumeDao.mock';
import { Request, Response } from 'express';
import { CREATED, OK, NOT_FOUND } from 'http-status-codes';



export class ResumeController { 
    private static resumeDao = new ResumeDao();

    public static async add(req: Request, res: Response){
        const resumeToAdd = req.body;
        const respResume = await ResumeController.resumeDao.add(resumeToAdd);
        return res.status(CREATED).json(respResume);
    }
    
    public static async get(req: Request, res: Response){
        const resumeId = req.params.id;
        const respResume = await ResumeController.resumeDao.getOne(resumeId);
        if (respResume != null){
            return res.status(OK).json(respResume);
        } else {
            return res.status(NOT_FOUND).json({message:"Resume not found"});
        }
    }

    public static async update(req: Request, res: Response){
        const resumeToUpdate = req.body;
        try{
            const respResume = await ResumeController.resumeDao.update(resumeToUpdate);
            return res.status(OK).json(respResume);
        }
        catch{
            return res.status(NOT_FOUND).json({message:"Failed to update resume"});
        }
    }

    public static async delete(req: Request, res: Response){
        const resumeId = req.params.id;
        const respResume = await ResumeController.resumeDao.delete(resumeId);
        if (respResume){
            return res.status(OK).end();
        } else {
            return res.status(NOT_FOUND).end();
        }
    }
}