import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import PostReactions from "./PostReactions";
import { selectAllPosts } from "./postsSlice";
import Time from "./Time";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <Time timestamp={post.date} />
      </p>
      <PostReactions post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
