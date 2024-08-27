import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {

    const indices = await redis.call('FT._LIST');

    if (!(indices as any[]).includes('users:idx')) {
      console.log('Index "users:idx" does not exist. Creating it...');
      // Create the index using FT.CREATE
      await redis.call('FT.CREATE', 'users:idx', 'ON', 'JSON', 'PREFIX', '1', 'user:', 
        'SCHEMA', 
        '$.id', 'AS', 'id', 'TAG',
        '$.firstname', 'AS', 'firstname', 'TEXT',
        '$.lastname', 'AS', 'lastname', 'TEXT',
        '$.phone', 'AS', 'phone', 'TEXT'
      );
      console.log('Index "users:idx" created successfully.');
    } else {
      console.log('Index "users:idx" already exists.');
    }

    const result = await redis.call('FT.SEARCH', 'users:idx', '*');
    console.log(JSON.parse((result as any[])[4][1]));
    
    const users: any[] = [];
  
    for (let i = 2; i < (result as any[]).length; i += 2) {
      const userJSON = JSON.parse((result as any[])[i][1]);
      users.push(userJSON);
    }

    // const filteredUsers = (result as any[]).filter(q => String(q).includes('user:'))
    // for (let index = 0; index < filteredUsers.length; index++) {
    //   const _user = await redis.call('JSON.GET', filteredUsers[index])
    //   users.push(_user)
    // }

    if (users.length === 0) {
      return NextResponse.json({
        status: 404,
        statusText: "success",
        data: [],
      });
    }
    
    return NextResponse.json({
      status: 200,
      statusText: "success",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: "server error",
      data: [],
    });
    
  }
}
