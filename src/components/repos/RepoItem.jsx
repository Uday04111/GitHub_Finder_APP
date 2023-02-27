import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Repos from "./Repos";

const RepoList = () => {
  const { repos } = useContext(GithubContext);

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <h2 className="text-xl font-bold my-4 card-title">Latest Repositories</h2>
      {repos.map((repo) => (
        <Repos key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
export default RepoList;
