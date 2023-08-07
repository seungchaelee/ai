# AI-SaaS Project

Next.js 13, React, Tailwind, Prisma, Stripe 프로젝트🎖

- **반드시 아래 Setup과 Development 부분을 읽어보세요.**
- 문의는 id4720@gmail.com

## Setup (사전 설치)

Install dependencies

```sh
npm install
```

Setup .env file

```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Setup Prisma

```sh
npx prisma db push
```

## Development (작업 방법)

Start the app

```sh
npm run dev
# Visit http://localhost:3000 from your browser (Chrome)
```


배포 사이트
1. [AI-Nudge](https://ai-nudge.vercel.app)
