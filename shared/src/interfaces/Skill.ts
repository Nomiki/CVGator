
export interface ISkill {
    name: string;
    level: number;
}

class Skill implements ISkill {
    public name : string;
    public level: number;

    constructor(iSkill : ISkill) {
        this.name = iSkill.name;
        this.level = iSkill.level;
    }
}

export default Skill;