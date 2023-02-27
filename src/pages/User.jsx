import { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCodepen, FaStore, FaUsers, FaUser } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import RespoItem from "../components/repos/RepoItem";
import { getRepos, getUser } from "../context/github/GithubActions";
const User = () => {
  const params = useParams();
  const { user, loading, setLoading, dispatch } = useContext(GithubContext);

  useEffect(() => {
    setLoading();
    const getUserData = async () => {
      const data = await getUser(params.login);
      dispatch({
        type: "GET_USER",
        payload: data,
      });

      setLoading();
      const repos = await getRepos(params.login);
      dispatch({
        type: "GET_REPOS",
        payload: repos,
      });
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 ">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="Avatar" />
              </figure>
              <div className="card-body justify-end ">
                <h2 className="card-title mb-0 text-gray-300">{name}</h2>
                <p className="flex-grow-0 text-gray-300">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title items-baseline">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats grid text-ellipsis xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 ">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md truncate ">
                    <IoLocationSharp className="inline mr-1" />
                    Location
                  </div>
                  <div className="text-lg stat-value truncate ">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md truncate  ">
                    <CgWebsite className="inline mr-1" />
                    Website
                  </div>
                  <div className="text-lg stat-value truncate ">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md truncate ">
                    <AiOutlineTwitter className="inline mr-1" />
                    Twitter
                  </div>
                  <div className="text-lg stat-value truncate ">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUser className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>
          </div>
        </div>
        <RespoItem />
      </div>
    </>
  );
};
export default User;
