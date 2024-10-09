// import { resourcesLinks, platformLinks, communityLinks } from "../constants";
// const Footer = () => {
//   return (
//     <footer className="mt-20 border-t py-10 border-neutral-700">
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//         <div>
//           <h3 className="text-md font-semibold mb-4">Resources</h3>
//           <ul className="space-y-2">
//             {resourcesLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Platform</h3>
//           <ul className="space-y-2">
//             {platformLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Community</h3>
//           <ul className="space-y-2">
//             {communityLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { useEffect, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  // Slide-up animation triggered when the footer comes into view
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerOffsetTop = document.querySelector('footer').offsetTop;

      if (scrollY + windowHeight >= footerOffsetTop) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      className={` mt-20 border-t py-10 border-neutral-700 backdrop-blur-md transition-transform duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl ">Get In Touch</h1>
        <h3 className="text-transparent bg-clip-text text-2xl font-semibold mb-6 text-light-green-400">Contact Us</h3>
        <ul className="space-y-4 text-white text-center">
          <li>
            <a
              href="tel:+9174579426"
              className="hover:text-light-green-400 transition-all duration-300"
            >
              9174579426
            </a>
          </li>
          <li>
            <a
              href="mailto:example1@gmail.com"
              className="hover:text-light-green-400 transition-all duration-300"
            >
             krishnakant.rawat02@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:+9575215387"
              className="hover:text-light-green-400 transition-all duration-300"
            >
              9575215387
            </a>
          </li>
          <li>
            <a
              href="mailto:example1@gmail.com"
              className="hover:text-light-green-400 transition-all duration-300"
            >
             harshpunde3@gmail.com
            </a>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;