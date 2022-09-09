export const uploadImages = async (files: any[]) => {
  return files.map((file) => {
    return { ...file, path: file.path.replace("\\", "/") }
  })
}
