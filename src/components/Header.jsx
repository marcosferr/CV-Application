import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { form, dispatch } = useContext(FormContext);
  const navigate = useNavigate();
  return (
    <header>
      <div>
        <div>
          <h1>CV Creator</h1>
          <p>
            Made by <a href="www.github.com/u/marcosferr">MarcosFerr</a>
          </p>
        </div>
        <nav>
          <Link to={`edit`}>Edit CV</Link>
          <Link to={`preview`}>Preview CV</Link>
          <button
            href=""
            className="btn-outline"
            onClick={() => {
              dispatch({
                type: "FILL_EXAMPLE",
                payload: "preview",
              });
              navigate("preview");
              console.log(form);
            }}
          >
            Fill Example CV
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
