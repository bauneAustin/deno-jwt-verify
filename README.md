# Simple JWT verifier and decoder

Very simple tool to decode and verify a JWT provide the token, secret, and
algorithm used. This is just a command line interface for local and testing
purposed as an alternative to JWT.io.

# How to use

1. Make sure you have deno installed. If not, please visit their
   [Docs](https://docs.deno.com/runtime/getting_started/installation/).
2. Clone this repo
3. Give main.ts executable permissions `chmod +x main.ts`
4. Execute main.ts `./main.ts`

## Example

```bash
$ ./main.ts 
Enter encoded JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o
Enter secret: secret (an empty string will only decode the JWT, not verify it)
Enter signing alg: HS25 (an empty string will default to HS256) 
JWT is valid: { sub: "1234567890", name: "John Doe", iat: 1516239022 }
```
