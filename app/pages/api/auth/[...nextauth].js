import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default (req, res) =>
    NextAuth(req, res, {
        providers: [
            Providers.GitHub({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                scope: ["user:email"]
            }),
        ],
        debug: process.env.NODE_ENV === "development",
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        callbacks: {
            async redirect(url, baseUrl) {
                return "/";
            },
            signIn: async (profile, account, metadata) => {
                // https://developer.github.com/v3/users/emails/#list-email-addresses-for-the-authenticated-user
                const res = await fetch('https://api.github.com/user/emails', {
                  headers: {
                    'Authorization': `token ${account.accessToken}`
                  }
                })
                const emails = await res.json()
                if (!emails || emails.length === 0) {
                  return
                }
                // Sort by primary email - the user may have several emails, but only one of them will be primary
                const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
                profile.email = sortedEmails[0].email
                profile["id"] = profile.image.replace('https://avatars.githubusercontent.com/u/', '').split('?')[0]
              },
        },
    });
