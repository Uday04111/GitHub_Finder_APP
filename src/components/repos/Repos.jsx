import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const Repos = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    homepage,
  } = repo;

  return (
    <div className="mb-2 rounded-md text-white card bg-gray-800 hover:bg-gray-900">
      {" "}
      <di className="card-body">
        {" "}
        <h3 className="mb-2 text-xl">
          {" "}
          <a href={html_url}>
            <FaLink className=" inline mr-1" />
            {name}{" "}
          </a>{" "}
        </h3>
        <p className="mb-3">{description}</p>{" "}
        <div>
          {" "}
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" />
            {watchers_count}{" "}
          </div>{" "}
          <div className="mr-2 badge badge-info badge-lg">
            <FaStar className="mr-2" />
            {stargazers_count}{" "}
          </div>{" "}
          <div className="mr-2 badge badge-info badge-lg">
            <FaInfo className="mr-2" />
            {open_issues}{" "}
          </div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaUtensils className="mr-2" />
            {forks}
          </div>
          {homepage && (
            <div className=" flex mr-2  mt-3 h-auto badge badge-success">
              <a href={homepage} target="_blank" rel="noreferrer">
                <GrDeploy className=" mr-2 inline-flex  " />
                {homepage}
              </a>
            </div>
          )}
        </div>
      </di>
    </div>
  );
};

Repos.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Repos;
