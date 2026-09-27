import { db } from "./src/prisma/db";

async function testDatabase() {
  const users = await db.orm.public.User
    .where({})
    .all();

  console.log(users);
}

testDatabase();