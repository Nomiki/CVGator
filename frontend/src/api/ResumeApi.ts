import { IResume } from "../interfaces/Resume";
import axios from 'axios';

export class ResumeApi{
    
    public static async get(id : string) : Promise<IResume | null>{
        try {
            const response = await axios.get(`http://localhost:5000/api/resume/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        } 
        return null;
    }

    public static async delete(id : string) : Promise<boolean>{
        try {
            const response = await axios.delete(`http://localhost:5000/api/resume/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        } 
        return false;
    }

    public static async add(resume : IResume) : Promise<IResume | null>{
        try {
            const response = await axios.post(`http://localhost:5000/api/resume/`, resume);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        } 
        return null;
    }

    public static async update(resume : IResume) : Promise<IResume | null>{
        try {
            const response = await axios.patch(`http://localhost:5000/api/resume/`, resume);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        } 
        return null;
    }
}

