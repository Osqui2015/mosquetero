import { usePosts } from "../context/postContext.js";
import { Card } from "./Card";

export function Bookmark(favoriteQ, addFav) {
  const { featuredPosts } = usePosts();

  if (featuredPosts.length === 0)
    return (
      <div>
        <h1>No Hay Shows Disponibles</h1>
      </div>
    );

  return (
    <div className="card">
      <div
        className="card-body text-white"
        style={{ backgroundColor: "#FE6848" }}
      >
        <p className="fs-3 fw-bold">Evento Destacados </p>
      </div>
      <br />
      <div className="row row-cols-2 row-cols-lg-5">
        {featuredPosts?.map((post) => (
          <div>
            <Card
              post={post}
              key={post._id}
              addFav={addFav}
              favoriteQ={favoriteQ}
            />
          </div>
        ))}
      </div>
      <hr />
      <br />
    </div>
  );
}
