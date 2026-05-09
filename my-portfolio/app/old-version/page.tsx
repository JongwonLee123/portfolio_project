// "use client"

// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import { motion, Variants } from "framer-motion"

// export default function Home() {
//   const buttonVariants: Variants = {
//     initial: (custom: any) => ({
//       opacity: 0,
//       x: custom.x ?? 0,
//       y: custom.y ?? 0
//     }),
//     animate: (custom: any) => ({
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {duration: 0.4, delay: custom.delay, ease:"easeIn"}
//     }),
//     hover: {
//       scale: 1.1,
//       transition: {duration: 0.15}
//     }
//   }

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen">
//       <Navbar />

//       <motion.h1 
//         initial={{opacity: 0, y: -100}}
//         animate={{opacity: 1, y: 0}}
//         transition={{duration: 0.4, delay: 0.5, ease:"easeOut"}}
//         className="flex justify-center text-3xl font-bold pb-8">
//         Welcome to Jongwon's portfolio!
//       </motion.h1>
      
//       <div className="flex flex-row justify-center gap-8 mt-4">
//         <motion.button 
//           variants={buttonVariants}
//           custom={{x: -100, delay: 1.0}}
//           initial="initial"
//           animate="animate"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           whileHover="hover" 
//         >
//           <a href="./about">About</a>
//         </motion.button>
//         <motion.button 
//           variants={buttonVariants}
//           custom={{y: 100, delay: 1.4}}
//           initial="initial"
//           animate="animate"
//           className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//           whileHover="hover"  
//         >
//           <a href="./projects">Projects</a>
//         </motion.button>
//         <motion.button 
//           variants={buttonVariants}
//           custom={{x: 100, delay: 1.8}}
//           initial="initial"
//           animate="animate"
//           whileHover="hover"
//           className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
//           <a href="./resume">Resume</a>
//         </motion.button>
//       </div>
      
//     </main>
//   );
// }


