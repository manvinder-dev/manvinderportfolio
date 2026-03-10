This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Amazon Amplify

This project is configured for deployment on [AWS Amplify](https://aws.amazon.com/amplify/) with SSR support.

### Prerequisites
- AWS account
- Repository pushed to GitHub, GitLab, or Bitbucket

### Steps

1. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **Host web app** → connect your Git repository
3. Amplify will auto-detect the `amplify.yml` build spec and the Next.js framework
4. Click **Next** through the review screens and then **Save and deploy**

### Environment Variables

If you move the Web3Forms access key to an environment variable (see `.env.example`), add it in the Amplify Console:

> **App settings → Environment variables → Manage variables**

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Your Web3Forms access key (from https://web3forms.com) |

### Build Output

The project uses `output: "standalone"` in `next.config.ts`, which bundles only the necessary files for production — no manual `node_modules` copy needed.
