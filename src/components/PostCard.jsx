import appwriteService from "../appwrite/database";
import { Link } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";

const PostCard = ({ post }) => {
  const { $id, title, featuredImage, $createdAt } = post;
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="rounded-xl "
          />
          <h2 className="text-xl font-bold ">{title}</h2>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-600"></p>
            <p className="text-sm text-gray-600">
              {formatDistanceToNow(parseISO($createdAt), { addSuffix: true })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
