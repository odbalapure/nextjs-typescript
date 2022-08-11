import Post from "../models/Post";
import Comment from "../models/Comment";

const SinglePostCard: React.FC<{ post: Post; comments: Comment[] }> = (
  props
) => {
  return (
    <div>
      <div className="m-5 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded">
        <div className="font-semibold text-2xl">{props.post?.title}</div>
        <div>{props.post?.body}</div>
        <div className="flex flex-row">
          <div>
            <span className="font-bold">User Id</span>: {props.post?.userId}
          </div>
          &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
          <div>
            <span className="font-bold">Post Id</span>: {props.post?.id}
          </div>
        </div>
      </div>
      <div className="mx-5 p-5">
        <div className="text-2xl font-semibold">
          Comments &middot; {props.comments.length}{" "}
        </div>
        {props.comments.map((comment) => {
          return (
            <div key={comment.id} className="border-2 mb-2 p-5 rounded">
              <div className="font-bold">
                {comment.name}{" "}
                <span className="text-slate-500">({comment.email})</span>
              </div>
              <div>{comment.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePostCard;
