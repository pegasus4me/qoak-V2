import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client'
import { compare } from "bcrypt"

const prisma = new PrismaClient()


const handler = NextAuth({
    providers: [

        CredentialsProvider({

            type: "credentials",

            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) throw new Error('email or password must be provided....');

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.email as string,
                    }
                })
                console.log(process.env.NEXT_AUTH_SECRET)

                if (!user || !user.hashedPassword) throw new Error("Email does not exist");
                
                const checkPaswword = await compare(credentials?.password, user.hashedPassword)
                if (!checkPaswword) throw new Error("password not correct...")
                console.log(checkPaswword)
                return user;

            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
        })

    ],

    pages: {
        signIn: "/login",
    },

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    jwt: {
        secret: process.env.NEXT_AUTH_JWT_SECRET,
    },
    callbacks: {

        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
            }
            return token
        },

        async session({ session, token }: { session: any, token: any }) {
            if (session.user) {

                session.user.id = token.id;
                session.user.name = token.name;

            }
            return session;

        }
    },

    secret: process.env.NEXT_AUTH_SECRET
})

export { handler as GET, handler as POST }