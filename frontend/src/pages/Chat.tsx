import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send, Bot, User, Sparkles, Mic } from "lucide-react";
import { Link } from "react-router";

interface Message {
	id: string;
	content: string;
	role: "user" | "assistant";
	timestamp: Date;
}

const Chat = () => {
	const [messages, setMessages] = useState<Message[]>([
		{
			id: "1",
			content: "Hello! How can I help you explore the universe today?",
			role: "assistant",
			timestamp: new Date(Date.now() - 1000 * 60 * 2),
		},
		{
			id: "2",
			content: "What is the largest planet in our solar system?",
			role: "user",
			timestamp: new Date(Date.now() - 1000 * 60),
		},
		{
			id: "3",
			content: "Jupiter is the largest planet in our solar system.",
			role: "assistant",
			timestamp: new Date(Date.now() - 1000 * 30),
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSend = async () => {
		// your send logic...
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};
	return (
		<div className='min-h-screen bg-gray-900 text-white'>
			{/* Header */}
			<div className='border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm'>
				<div className='container mx-auto px-4 py-4'>
					<div className='flex items-center gap-4'>
						<Button
							asChild
							variant='ghost'
							size='sm'
							className='text-gray-200 hover:text-white'
						>
							<Link to='/' className='inline-flex items-center gap-2'>
								<ArrowLeft className='w-4 h-4' />
								Back to Home
							</Link>
						</Button>
						<div className='flex items-center gap-3'>
							<div className='w-8 h-8 bg-gray-700/30 rounded-full flex items-center justify-center'>
								<Sparkles className='w-4 h-4 text-yellow-300 animate-pulse' />
							</div>
							<h1 className='text-xl font-semibold'>CometraAI Chat</h1>
						</div>
					</div>
				</div>
			</div>

			{/* Chat Interface */}
			<div className='container mx-auto px-4 py-6 h-[calc(100vh-160px)]'>
				<Card className='h-full bg-gray-800/50 border border-gray-700 backdrop-blur-md rounded-xl shadow-lg'>
					<CardHeader className='border-b border-gray-700'>
						<CardTitle className='flex items-center gap-2 text-white'>
							<Bot className='w-5 h-5 text-blue-400' />
							Your AI Space Guide
						</CardTitle>
					</CardHeader>

					<CardContent className='p-0 h-full flex flex-col'>
						{/* Messages */}
						<ScrollArea className='flex-1 p-4'>
							<div className='space-y-4'>
								{messages.map((message) => (
									<div
										key={message.id}
										className={`flex gap-3 ${
											message.role === "user" ? "justify-end" : "justify-start"
										}`}
									>
										<div
											className={`flex gap-3 max-w-[80%] ${
												message.role === "user"
													? "flex-row-reverse"
													: "flex-row"
											}`}
										>
											<div className='w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0'>
												{message.role === "user" ? (
													<User className='w-4 h-4 text-blue-300' />
												) : (
													<Bot className='w-4 h-4 text-blue-400' />
												)}
											</div>

											<div
												className={`rounded-lg p-3 text-sm leading-relaxed ${
													message.role === "user"
														? "bg-blue-600 text-white"
														: "bg-gray-700 text-gray-100"
												}`}
											>
												<p>{message.content}</p>
												<span className='text-xs opacity-60 mt-2 block'>
													{message.timestamp.toLocaleTimeString()}
												</span>
											</div>
										</div>
									</div>
								))}

								{isLoading && (
									<div className='flex gap-3 justify-start'>
										<div className='w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center'>
											<Bot className='w-4 h-4 text-blue-400' />
										</div>
										<div className='bg-gray-700 rounded-lg p-3'>
											<div className='flex gap-1'>
												<div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
												<div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
												<div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
											</div>
										</div>
									</div>
								)}
							</div>
						</ScrollArea>

						{/* Input */}
						<div className='border-t border-gray-700 p-4 bg-gray-800/30 backdrop-blur-sm'>
							<div className='flex gap-3'>
								<Input
									value={input}
									onChange={(e) => setInput(e.target.value)}
									onKeyDown={handleKeyDown}
									placeholder='Ask me about space, astronomy, or exploration...'
									className='flex-1 bg-gray-700/50 placeholder-gray-300 text-white border-gray-600'
									disabled={isLoading}
								/>
								<Button
									type='button'
									size='icon'
									className='bg-gray-700 hover:bg-gray-600 text-white'
									// onClick={handleMic} // Add mic handler if needed
									disabled={isLoading}
								>
									<Mic className='w-4 h-4' />
								</Button>
								<Button
									onClick={handleSend}
									disabled={!input.trim() || isLoading}
									size='icon'
									className='bg-blue-600 hover:bg-blue-700 text-white'
								>
									<Send className='w-4 h-4' />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Chat;
