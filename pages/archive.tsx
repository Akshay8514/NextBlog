import Link from "next/link";
import Layout from "../components/Layout";
import { Post } from "../public/types/post";
import { GetServerSideProps } from "next";
import { getPosts } from "../public/services/postService";

interface ArchiveProps {
    posts: Post[];
}

const Archive: React.FC<ArchiveProps> = ({ posts }) => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">Archive</h1>
            <ul>
                {posts.map((post) => {
                    <li key={post.id} className="mb-2">
                        <Link href={`/posts/${post.id}`}>
                            <p className="text-blue-500">{post.title}</p>
                        </Link>
                    </li>
                })}
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
export default Archive