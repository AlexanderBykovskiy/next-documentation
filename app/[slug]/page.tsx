import { MDXRemote } from 'next-mdx-remote/rsc'
import {getMdFileByUrl} from "@/src/shared/utils/get-md-file-by-url";
import {typePageProps} from "@/src/shared/types/common.types";
import {GetUriBySlug} from "@/src/shared/utils/get-uri-by-slug";

const Page = async (props: typePageProps) => {
    // TODO: refactor to not found
    const slug = props.params?.slug
    if (!slug) throw Error()
    const uri = GetUriBySlug(slug!)
    if (!uri?.file) throw Error()
    const markdown = await getMdFileByUrl(uri!.file!)
    if (!markdown) throw Error()
    return (
        <main>
            <MDXRemote source={markdown!} />
        </main>
    );
}

export default Page;
