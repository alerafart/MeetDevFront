import './modalChooseStack.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalChooseTechnologie } from '../../../actions/settings';
import { toggleStack } from '../../../actions/formRegisterDev';

function ModalChooseStack() {
  const stacks = useSelector((state) => state.formRegisterDev.register.technology);
  console.log(stacks.includes('react'));
  const dispatch = useDispatch();

  function handleChangeCheckbox(e) {
    dispatch(toggleStack(e.target.name));
  }

  return (
    <div
      className="chooseStackBackground"
    >
      <div className="chooseStackContainer">
        <h2 className="chooseStackContainer--title">
          Langages
        </h2>

        <div className="chooseStackContainer__stacks">
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="JavaScript"
              checked={stacks.includes('JavaScript')}
              onClick={(e) => handleChangeCheckbox(e)}

            />
            JavaScript
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="HTML/CSS"
              checked={stacks.includes('HTML/CSS')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            HTML/CSS
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="python"
              checked={stacks.includes('python')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Python
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Java"
              checked={stacks.includes('Java')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Java
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="TypeScript"
              checked={stacks.includes('TypeScript')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            TypeScript
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="C#"
              checked={stacks.includes('C#')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            C#
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="C/C++"
              checked={stacks.includes('C/C++')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            C/C++
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="PHP"
              checked={stacks.includes('PHP')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            PHP
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Kotlin"
              checked={stacks.includes('Kotlin')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Kotlin
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Go"
              checked={stacks.includes('Go')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Go
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Rust"
              checked={stacks.includes('Rust')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Rust
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Swift"
              checked={stacks.includes('Swift')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Swift
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Ruby"
              checked={stacks.includes('Ruby')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Ruby
          </div>
        </div>

        <h2 className="chooseStackContainer--title">
          Frameworks/Librairies
        </h2>

        <div className="chooseStackContainer__stacks">
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Node.js"
              checked={stacks.includes('Node.js')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Node.js
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="React"
              checked={stacks.includes('React')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            React
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Symfony"
              checked={stacks.includes('Symfony')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Symfony
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="VueJs"
              checked={stacks.includes('VueJs')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            VueJs
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="React_Native"
              checked={stacks.includes('React_Native')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            React Native
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="jQuery"
              checked={stacks.includes('jQuery')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            jQuery
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Express"
              checked={stacks.includes('Express')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Express
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Laravel"
              checked={stacks.includes('Laravel')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Laravel
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Angular"
              checked={stacks.includes('Angular')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Angular
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Django"
              checked={stacks.includes('Django')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Django
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="WordPress"
              checked={stacks.includes('WordPress')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            WordPress
          </div>

        </div>

        <h2 className="chooseStackContainer--title">
          BDD
        </h2>

        <div className="chooseStackContainer__stacks">
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="mysql"
              checked={stacks.includes('mysql')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            MySQL
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="MongoDb"
              checked={stacks.includes('MongoDb')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            MongoDb
          </div>
        </div>

        <h2 className="chooseStackContainer--title">
          Divers
        </h2>

        <div className="chooseStackContainer__stacks">
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Git"
              checked={stacks.includes('Git')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Git
          </div>
          <div className="chooseStackContainer__stack">
            <input
              className="chooseStackContainer__stack--checkbox"
              type="checkbox"
                  // checked={formLogin.saveMe === true}
              name="Docker"
              checked={stacks.includes('Docker')}
              onClick={(e) => handleChangeCheckbox(e)}
            />
            Docker
          </div>
        </div>

        <div className="chooseStackContainer__cancel">
          <button className="chooseStackContainer__cancel--button" type="button" onClick={() => dispatch(toggleModalChooseTechnologie())}>
            Fermeture
          </button>
        </div>

      </div>

    </div>

  );
}

export default ModalChooseStack;
