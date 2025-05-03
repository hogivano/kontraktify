import { defineWrappedResponseHandler } from "../../utils/handler";
import { defineEventHandler } from "h3";

export default defineWrappedResponseHandler(async (event) => {
  return {
    statusCode: 200,
    body: {
      data: [],
    },
  };
});
