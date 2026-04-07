import { createUploadthing } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async ({ file }) => {
    console.log("upload completed:", file);

    return {
      url: file.url,
      name: file.name,
    };
  }),
};

import { createRouteHandler } from "uploadthing/express";

export const uploadThingHandler = createRouteHandler({
  router: uploadRouter,
});