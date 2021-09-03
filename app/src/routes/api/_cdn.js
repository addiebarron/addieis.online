import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  secure: true,
});

// store images in different folders based on env
const folder = import.meta.env.DEV ? "dev" : "prod";

export default {
  // general wrappers
  async upload(image, options) {
    options.folder = folder;
    return await cloudinary.uploader.upload(image, options);
  },
  async url(id, options) {
    id = id.startsWith(folder) ? id : `${folder}/${id}`;
    return await cloudinary.url(id, options);
  },
  async destroy(id) {
    return await cloudinary.uploader.destroy(folder + "/" + id);
  },

  // case-specific
  async uploadProject(image, id) {
    const options = {
      public_id: id,
      eager: ["t_projects"],
    };
    return await this.upload(image, options);
  },
  async projectURL(id) {
    const options = {
      transformation: ["projects"],
    };
    return this.url(id, options);
  },
};
