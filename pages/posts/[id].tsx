import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import { getPostById } from "../../public/services/postService";
import { Post } from "../../public/types/post";

interface PostProps {
    post: Post;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="mb-4">{post.content}</p>
            <p className="text-gray-600">Author: {post.author}</p>
            <p className="text-gray-600">Date: {new Date(post.createdAt).toLocaleDateString()}</p>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const post = await getPostById(Number(id))

    return {
        props: {
            post
        }
    }
}

export default PostPage