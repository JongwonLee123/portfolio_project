export type Skill = {
    name: string,
    list: string[]
}

export default function SkillCard({skill}: {skill: Skill}){
    return(
        <p>
            <b>{skill.name}: </b>
            {skill.list.join(", ")}
        </p>
    )
}