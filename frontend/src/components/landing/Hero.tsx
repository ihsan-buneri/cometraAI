import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router";
import spaceHero from "@/assets/space-hero-optimized.jpg";

const Hero = () => {
	return (
		<section
			className='h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4 text-center'
			style={{
				backgroundImage: `url(${spaceHero})`,
			}}
		>
			<div className='flex flex-col items-center gap-4'>
				{/* Heading */}
				<h1 className='text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
					CometraAI
				</h1>

				{/* Subtext */}
				<p className='max-w-xl mt-4 text-lg text-gray-300'>
					Embark on an extraordinary journey through the cosmos with our
					AI-powered space learning platform CometraAI. Discover the universe
					like never before.
				</p>

				{/* Buttons */}
				<div className='mt-6 flex gap-4 flex-wrap justify-center'>
					<Button className='bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition'>
						<Link to='/chat' className='inline-flex items-center gap-2'>
							<MessageCircle className='w-5 h-5' />
							🚀 Start Learning
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
