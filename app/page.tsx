import { MDXRemote } from 'next-mdx-remote/rsc'
import {getMdFileByUrl} from "@/src/shared/utils/get-md-file-by-url";


export default async function HomePage() {
    const markdown = await getMdFileByUrl('/docs/1-introduction.ru.md')
    return (
        <main>
            <MDXRemote source={markdown} />
        </main>
    );
}
