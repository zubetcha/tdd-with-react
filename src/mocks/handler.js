import { rest } from "msw";
import { SERVER } from "../shared/constants";

export const handlers = [
  rest.get(`${SERVER}/products`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "America", imagePath: "/images/america.jpeg" },
        { name: "England", imagePath: "/images/england.jpeg" },
      ])
    );
  }),

  rest.get(`${SERVER}/options`, (req, res, ctx) => {
    return res(ctx.json([{ name: "Insurance" }, { name: "Dinner" }]));
  }),
];
