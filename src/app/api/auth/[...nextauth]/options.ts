import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'


export const options: NextAuthOptions = {
    callbacks:{
            jwt: async ({ token, user}) => {
                const customUser = user as unknown as any;

                if (user) {
                    return {
                        ...token,
                        name: customUser.nome,
                        salvos: customUser.salvos
                    }
                }
                return token
            },
            session: async ({session, token}) => {
                return {...session,
                    user: {
                        id: token.sub,
                        name:token.name,
                        email: token.email,
                        salvos: token.salvos
                    },
                }
            },
        },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username:{
                    label: "Email",
                    type: "text",
                    placeholder: ""
                },
                password: {
                    label: "Password",
                    type:"password"
                }
            },
            async authorize(credentials) {
                const getUser = async () => {
                     try {
                        const res = await fetch('http://localhost:3000/api/usuarios' , {cache: 'no-store'});
                        if(!res.ok){
                            throw new Error("falha em buscar usuarios")
                        }
                        const user = await res.json()
                        return user
                    } catch(error) {
                        console.log("erro em carregar", error)
                    }
                }
                const {usuarios} = await getUser()

                //const usuarios = [{id:'656f65168daef1900746e2ad', email: 'razor',senha: 'styles', salvos: ["6557b950e4c62572c89dd94a","6557b981e4c62572c89dd95b"]}, {id:'2', email: 'lol',senha: '123', salvos: ["6557b950e4c62572c89dd94a","6557b981e4c62572c89dd95b"]}]
                const filtUser = usuarios.find(function (user: any) {
                    if (user.email == credentials?.username)
                    return user
                })
                if(credentials?.username === filtUser?.email && credentials?.password === filtUser?.senha){
                    return filtUser
                } else {
                    return null
                }
            }
        })
    ],
}