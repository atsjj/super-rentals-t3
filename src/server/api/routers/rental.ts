import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const rentalRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.rental.findMany();
  }),

  getRentalById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.rental.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
