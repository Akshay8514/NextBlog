import Link from "next/link";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { getPosts } from "../public/services/postService";
import { Post } from "../public/types/post";

interface HomeProps {
    posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">
                Blog Posts
            </h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mb-2">
                        <Link href={`/posts/${post.id}`}><a className="text-blue-500">{post.title}</a></Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const posts = await getPosts();
    return {
        props: {
            posts
        }
    }
}

export default Home