import { OpenAI } from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

// 初始化OpenAI客户端，使用OpenRouter作为API端点
const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY || '',
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'X-Title': 'Nebula Voyage Chat',
  },
});

export async function POST(req: Request) {
  try {
    // 获取请求体中的消息
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: '无效的消息格式' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 将消息映射为OpenAI API所需的格式
    const apiMessages: ChatCompletionMessageParam[] = messages.map(
      ({ role, content }: { role: string; content: string }) => {
        return {
          role: role as 'user' | 'assistant' | 'system',
          content: content,
        };
      }
    );

    // 调用OpenRouter API
    const completion = await client.chat.completions.create({
      model: 'deepseek/deepseek-chat-v3-0324:free',
      messages: apiMessages,
    });

    // 提取响应并返回
    const responseMessage = completion.choices[0]?.message?.content || '';

    return new Response(
      JSON.stringify({
        message: responseMessage,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Chat API错误:', error);
    
    return new Response(
      JSON.stringify({
        error: error.message || '请求处理失败',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 