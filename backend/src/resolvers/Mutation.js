const Mutation = {
  async createItem(parent, args, ctx, info) {
    // returns promise
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    )
    return item
  }
}

module.exports = Mutation
