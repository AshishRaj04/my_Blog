import { PostCard, Categories, PostWidget, Header } from "../../components";
import { FeaturedPosts } from "../../section";

import { getPosts } from "../../services";
const posts = await getPosts();

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Header />
      <div className="text-center w-full text-lightDark">
       
        <h1 className="text-6xl font-text w-3/6 m-auto py-9">
          A Collection of travell , educational and news stories
        </h1>
      </div>
      <div>
        <FeaturedPosts />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
