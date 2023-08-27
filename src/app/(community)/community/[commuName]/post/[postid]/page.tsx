import Link from "next/link";
import Infos from "@/components/post/postPage/infos";
import Content from "@/components/post/postPage/content";
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
        <Link href={`/community/${params.commuName}`} className='text-sm'>go back</Link>
    </div>
    <div>
    </div>
    <div>
        <Content id={params.postid} commuName={params.commuName}/>
    </div>
  </div>;
};

export default PostPage;
