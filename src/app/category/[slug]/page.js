import { PostCard, Categories, Loader } from "../../../../components";
import { getCategories, getCategoryPost  } from "../../../../services";

export async function generateStaticParams() {
    const categories = await getCategories();
    return categories.map(({ slug }) => ({
      params: { slug },
    }));
  }
  

const CategoryPost = async ({ params }) => {
  const post = await getCategoryPost(params.slug);

  return (
    <>
     <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {post.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoryPost;
