import Link from "next/link";

const OtherPosts = ({ otherPosts }) => {
  return (
    <aside className="h-1/2 my-4 lg:my-0 rounded-md bg-black md:backdrop-blur bg-opacity-50 p-4 text-white sticky">
      <h4 className="text-xl font-bold mb-4 uppercase">Other Posts</h4>

      <ul>
        {otherPosts &&
          otherPosts.data.map((otherPost) => {
            const { id, title, slug } = otherPost;

            return (
              <li key={id} className="my-2 capitalize list-disc ml-6">
                <Link href={`/blog/${slug}`}>
                  <a className="text-md hover:bg-opacity-70">{title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default OtherPosts;
