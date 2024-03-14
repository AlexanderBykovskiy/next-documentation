export const getMdFileByUrl = async (uri: string) => {
    try {
        const res = await fetch([process.env['HOST_NAME'], uri].join(''))
        return await res.text()
    } catch {
        return null
    }
}
