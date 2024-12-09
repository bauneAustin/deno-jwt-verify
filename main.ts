#!/usr/bin/env -S deno run --allow-env
import { decodeJwt, jwtVerify } from "https://deno.land/x/jose@v5.9.4/index.ts";

const jwt: string = prompt("Enter encoded JWT:") || "";
const secret = prompt("Enter secret:") || "";
const encodedSecret = new TextEncoder().encode(secret);
const alg: string = prompt("Enter signing alg:") || "HS256";

async function verifyAndPrintJWT(token: string): Promise<undefined> {
  try {
    if (encodedSecret.length) {
      const { payload } = await jwtVerify(token, encodedSecret, {
        algorithms: [alg],
      });
      console.log("JWT is %cvalid:", "color: green", payload);
    } else {
      const payload = await decodeJwt(token);
      console.log("%cJWT %cdecoded:", "color: green", "color: green");
      console.log(payload);
    }
    return;
  } catch (error) {
    console.error("Invalid JWT:", error);
    return;
  }
}

await verifyAndPrintJWT(jwt);
