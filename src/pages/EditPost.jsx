import { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/database";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setError("");
    setLoading(true);
    appwriteService
      .getPost(slug)
      .then((res) => {
        if (res) {
          setPost(res);
        } else {
          navigate("/");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug, navigate]);

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
};

export default EditPost;
