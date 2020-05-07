import React , { Component } from 'react';
import Resume, { IResume } from '../interfaces/Resume'
import { ResumeApi } from '../api/ResumeApi';

interface SearchState {
  error : boolean,
  resume? : IResume,
  message? : string
}

export class Main extends Component<{}, SearchState>{
  idRef: React.RefObject<HTMLInputElement>;
  
  onClickFetch = async (cur : IResume): Promise<void> => {
    const id = this.idRef.current?.value;
    console.log(id);
    if (id){
      const resume = await ResumeApi.get(id);
      if (resume){
        this.setState({
          error : false,
          resume,
          message : "found resume!"
        });
      } else {
        this.setState({
          error : true,
          resume : undefined,
          message : "resume not found :("
        });
      }
    }
  }

  onClickAdd = async (): Promise<void> => {
    console.log("adding resume from cache");
    if (this.state.resume != undefined){
      const resume = await ResumeApi.add(this.state.resume);
      if (resume){
        this.setState({
          error : false,
          resume,
          message : "added resume!"
        });
      } else {
        this.setState({
          error : true,
          resume : undefined,
          message : "failed to add resume"
        });
      }
    }
  }

  onClickDelete = async (): Promise<void> => {
    const id = this.idRef.current?.value;
    console.log(id);
    if (id){
      const res = await ResumeApi.delete(id);
      if (res){
        this.setState({
          error : true,
          message : "Resume deleted successfully"
        });
      } else {
        this.setState({
          error : false,
          message : "Deletion failed! resume was not found."
        });
      }
    }
  }

  constructor({}){
    super({});
    this.idRef = React.createRef();
    
    this.state = {
      error: false,
      resume : undefined,
      message : undefined
    }
  }

  render() {
    let currentResume = undefined;
   
    return (
 
         <div>
            <p>
              id:
              <input type = "text" ref={this.idRef}/>
              <button onClick={this.onClickFetch(currentResume)} className="my-button">
                Fetch Resume
              </button>
              <button onClick={this.onClickDelete} className="my-button">
                Delete Resume
              </button>
              <button onClick={this.onClickAdd} className="my-button">
                add Resume from cache
              </button>
            </p>
            <form>
        Full Name:
        <input
          name="name"
          placeholder="Full Name"
          value={this.state.resume?.name}
          //onChange={e => this.change(e)}
        />
        <br />Job Title:
        <input
          name="jobTitle"
          placeholder="Job Title"
          value={2}
          //onChange={e => this.change(e)}
        />
      </form>
          </div>
       
    )
  }
}

export default Main;

