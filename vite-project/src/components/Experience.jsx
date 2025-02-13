import { skills } from "../data";


export default function Experience() {
    return (
      <section className="experience__container" id="experience">
        <div className=".experience__content">
          <h2 className="experience__title">Скилы</h2>

          <div className="experience__skills">
            {skills.map((skill) => {
              return (
                <div className="experience__skill" key={skill.title}>
                  <div className="experience__skillImageContainer">
                    <img src={skill.imageSrc} alt="skill" />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}