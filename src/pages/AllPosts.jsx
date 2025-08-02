import { useEffect, useState } from "react";
import appwriteService from "../appwrite/database";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    setError("");
    setLoading(true);
    appwriteService
      .getPosts()
      .then((res) => {
        if (res) {
          setPosts(res.documents);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <div className="w-full flex justify-center items-center text-2xl font-semibold">
      Loading ...
    </div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.length > 0 ? (
            posts?.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center text-2xl font-semibold">
              {authStatus ? "No posts found!" : "Login to read posts"}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
