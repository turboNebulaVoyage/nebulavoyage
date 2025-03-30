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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## OpenRouter AI聊天功能

这个项目集成了OpenRouter API，使用Deepseek-Chat-V3模型创建了一个AI聊天助手。

### 设置步骤

1. 获取OpenRouter API密钥：
   - 访问 [OpenRouter](https://openrouter.ai) 并创建账户
   - 生成API密钥

2. 设置环境变量：
   - 复制`.env.local`文件中的内容，并替换`<OPENROUTER_API_KEY>`为您的实际API密钥
   - 可选：更新`NEXT_PUBLIC_SITE_URL`为您的实际网站URL

3. 安装依赖并运行：
   ```bash
   npm install
   npm run dev
   ```

4. 访问 http://localhost:3000 开始使用AI聊天功能

### 特性

- 实时聊天界面
- 使用Deepseek-Chat-V3模型
- 响应式设计
- 打字动画和加载状态
- 错误处理
