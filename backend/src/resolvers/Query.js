const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info);
  },
  async users(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You do not have permission");
    }
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    return ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error(`You aren't logged in!`);
    }
    const order = await ctx.db.query.order({ where: { id: args.id } }, info);
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermission = ctx.request.user.permissions.includes("ADMIN");
    if (!ownsOrder || !hasPermission) {
      throw new Error(`You can't see this`);
    }
    return order;
  },
  async orders(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be signed in");
    }
    let orders = await ctx.db.query.orders(
      { where: { id: ctx.request.id } },
      info
    );
    return orders;
  }
};

module.exports = Query;
