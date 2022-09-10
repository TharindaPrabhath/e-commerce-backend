import fs from "fs/promises"

export const uploadImages = async (files: any[]) => {
  return files.map((file) => {
    return { ...file, path: file.path.replace("\\", "/").replace("images/", "") }
  })
}

export const deleteImage = async (src: string) => {
  await fs.unlink("images/" + src)
}
