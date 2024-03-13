export const getMdFile = async (url: string) => {
    const res = await fetch(url)
    const markdown = await res.text()
    return markdown
}
