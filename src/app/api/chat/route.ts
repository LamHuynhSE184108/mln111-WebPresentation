import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const chatCompletion =
            await groq.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content:
                            "Bạn là AI triết học, trả lời bằng tiếng Việt, ngắn gọn dễ hiểu.",
                    },
                    {
                        role: "user",
                        content: message,
                    },
                ],
                model: "llama-3.3-70b-versatile",
            });

        return Response.json({
            reply:
                chatCompletion.choices[0].message.content,
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "API lỗi" },
            { status: 500 }
        );
    }
}