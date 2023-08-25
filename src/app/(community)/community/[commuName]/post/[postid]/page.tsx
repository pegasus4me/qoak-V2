import Link from "next/link";
import Infos from "@/components/post/postPage/infos";
interface Params {
  params: {
    url: string;
    postid: string;
    commuName : string
  };
}

const PostPage = ({params}:Params) => {
    console.log('dodod',params)
  return <div>
    <div>
        <Link href={`/community/${params.commuName}`}>go back</Link>
    </div>
    <div>
        <Infos/>
    </div>
  </div>;
};

export default PostPage;
