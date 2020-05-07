import React , { Component } from 'react';
import Resume, { IResume } from '../interfaces/Resume'
import { ResumeApi } from '../api/ResumeApi';

class Form extends Component{
    render(){
        return (
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' />
                </div>
            </form>
        )
    }
}


export default Form;