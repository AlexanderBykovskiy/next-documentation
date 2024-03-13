import { MDXRemote } from 'next-mdx-remote/rsc'
import {getMdFile} from "@/src/shared/utils/get-md-file";
export default async function HomePage() {
    const markdown = await getMdFile('http://localhost:3000/docs/2-installation.ru.md')
    return (
        <main>
            <MDXRemote source={markdown} />
        </main>
    );
}
