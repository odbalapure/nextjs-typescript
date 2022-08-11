import { useRouter } from "next/router";
import Post from "../models/Post";

const Card: React.FC<{
  post: Post;
}> = (props) => {
  const router = useRouter();
  const { body, title, id } = props.post;

  /**
   * Navigate to blog details
   * @params none
   * @return void
   */
  const goToBlog = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div
      className="border-2 shadow-2xl w-18 mb-5 p-4 hover:cursor-pointer"
      onClick={goToBlog}
    >
      <div className="text-2xl font-semibold">{title}</div>
      <div>{body}</div>
    </div>
  );
};

export default Card;
