import React from "react";
import Typewriter from "typewriter-effect";

const Skills = () => {
  return (
    <div id="skills">
      <h1>
        <Typewriter
          options={{
            strings: ["SKILLS"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <section>
        <div>
          <h1>First</h1>
          <p>
            lorem50khhabdfsubvewusifdvneusinfvunejtungfvsntgfviundgtjnfviugtrsnufngtrsu
          </p>
        </div>
        <div>
          <h1>Second</h1>
          <p>
            lorem50khhabdfsubvewusifdvneusinfvunejtungfvsntgfviundgtjnfviugtrsnufngtrsu
          </p>
        </div>
        <div>
          <h1>Third</h1>
          <p>
            lorem50khhabdfsubvewusifdvneusinfvunejtungfvsntgfviundgtjnfviugtrsnufngtrsu
          </p>
        </div>
        <div>
          <h1>Fourth</h1>
          <p>
            lorem50khhabdfsubvewusifdvneusinfvunejtungfvsntgfviundgtjnfviugtrsnufngtrsu
          </p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
