"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { Power2 } from "gsap";
import React from "react";
import { motion } from "framer-motion";
import { Crown, Users, Shield, TrendingUp, Award, Building2 } from "lucide-react";

gsap.registerPlugin(Flip);

const boardMembers = [
    {
      title: "Mr Hamid Taghavi",
      details: {
        secondary: "Chairman of the Board",
        text: "As Chairman of the Board, Mr. Hamid Taghavi provides overall leadership, strategic guidance, and governance oversight for DHS Exchange. He ensures that the board’s vision aligns with long-term growth, compliance, and transparency while fostering strong relationships with regulators and stakeholders.",
        image: "/team/mr_taghavi.jpg",
      },
    },
    {
      title: "Mrs. Darlene Roa",
      details: {
        secondary: "Board Member - HR & Recruiting",
        text: "Mrs. Darlene Roa oversees HR and recruiting at DHS Exchange. She leads initiatives to attract, retain, and develop top talent, ensuring the company builds a strong workforce culture. Her role also includes setting recruitment strategies, employee engagement, and organizational development.",
        image: "/team/darlene.jpeg",
      },
    },
    {
      title: "Mrs. Ayesha Firdous",
      details: {
        secondary: "Board Member - Marketing & Sales",
        text: "As Marketing & Sales Board Member, Mrs. Ayesha Firdous drives brand awareness, customer engagement, and revenue growth for DHS Exchange. She develops go-to-market strategies, manages partnerships, and ensures the company remains competitive in the fast-paced crypto market.",
        image: "/team/ayesha.jpg",
      },
    },
    {
      title: "Mr. Hassan Ali Jarko",
      details: {
        secondary: "Board Member - CIO",
        text: "Mr. Hassan Ali Jarko serves as Chief Information Officer (CIO), managing the company’s technology strategy and infrastructure. He ensures that DHS Exchange’s platforms remain scalable, innovative, and secure, aligning IT operations with the company’s long-term goals.",
        image: "/team/jarko.jpg",
      },
    },
    // {
    //   title: "Mr. Sidhish Mohan",
    //   details: {
    //     secondary: "Board Member - CISO",
    //     text: "As Chief Information Security Officer (CISO), Mr. Sidhish Mohan is responsible for overseeing cybersecurity, data protection, and risk prevention at DHS Exchange. He ensures that security frameworks meet global standards and safeguard both client and company data.",
    //     image: "/team/ayesha.jpg",
    //   },
    // },
    // {
    //   title: "Mr. Mark Chapman",
    //   details: {
    //     secondary: "Compliance Officer (CO)",
    //     text: "Mr. Mark Chapman, as Compliance Officer, ensures that DHS Exchange adheres to VARA regulations and international standards. He oversees compliance frameworks, regulatory reporting, and ethical business practices to maintain trust and transparency in all operations.",
    //     image: "/team/ayesha.jpg",
    //   },
    // },
  ];
  

const Team: React.FC = () => {
  const appRef = React.useRef<HTMLDivElement>(null);
  const chosenRef = React.useRef<HTMLDivElement>(null);
  const chosenDetailsRef = React.useRef<HTMLDivElement>(null);
  const chosenImageRef = React.useRef<HTMLImageElement>(null);
  const chosenNameRef = React.useRef<HTMLDivElement>(null);
  const chosenAliasesRef = React.useRef<HTMLDivElement>(null);
  const chosenDescriptionRef = React.useRef<HTMLDivElement>(null);

  const [imagesLoaded, setImagesLoaded] = React.useState<number>(0);
  const [activeItem, setActiveItem] = React.useState<HTMLElement | null>(null);

  const { contextSafe } = useGSAP({ scope: appRef });

  const handleOutsideClick = contextSafe((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const cardBoard = appRef.current?.querySelector(".card-board");
    const chosen = chosenRef.current;

    // If clicking outside the grid but inside the section, or on the chosen details
    if (cardBoard && !cardBoard.contains(target) && !chosen?.contains(target)) {
      hideDetails();
    }
  });

  const showDetails = contextSafe((card: HTMLElement) => {
    if (activeItem) hideDetails();

    const cards = gsap.utils.toArray<HTMLElement>(".user-card");

    const onLoad = () => {
      Flip.fit(chosenRef.current, card, {
        scale: true,
        fitChild: chosenImageRef.current!,
      });

      const state = Flip.getState(chosenRef.current);

      gsap.set(chosenRef.current, { clearProps: true });
      gsap.set(chosenRef.current, {
        xPercent: -50,
        top: "50%",
        yPercent: -50,
        visibility: "visible",
        overflow: "hidden",
      });

      Flip.from(state, {
        duration: 0.5,
        ease: Power2.easeInOut,
        scale: true,
        onComplete: () => {
          gsap.set(chosenDetailsRef.current, { overflow: "auto" });
        },
      }).to(chosenDetailsRef.current, { xPercent: 0 }, 0.2);

      chosenImageRef.current?.removeEventListener("load", onLoad);
      document.addEventListener("click", handleOutsideClick);
    };

    const data = card.dataset;
    if (chosenImageRef.current) {
      chosenImageRef.current.addEventListener("load", onLoad);
      chosenImageRef.current.src = card.querySelector("img")!.src;
    }
    if (chosenNameRef.current)
      chosenNameRef.current.textContent = data.title || "";
    if (chosenAliasesRef.current)
      chosenAliasesRef.current.textContent = data.secondary || "";
    if (chosenDescriptionRef.current)
      chosenDescriptionRef.current.textContent = data.text || "";

    gsap
      .to(cards, {
        opacity: 0.3,
        stagger: {
          amount: 0.7,
          from: cards.indexOf(card),
          grid: "auto",
        },
      })
      .kill(card);
    gsap.to(".app", { backgroundColor: "#888", duration: 1, delay: 0.3 });

    setActiveItem(card);
  });

  const hideDetails = contextSafe(() => {
    if (activeItem) {
      document.removeEventListener("click", handleOutsideClick);

      const cards = gsap.utils.toArray<HTMLElement>(".user-card");

      const state = Flip.getState(chosenRef.current);
      Flip.fit(chosenRef.current, activeItem, {
        scale: true,
        fitChild: chosenImageRef.current!,
      });

      const tl = gsap.timeline();
      tl.set(chosenRef.current, { overflow: "hidden" })
        .to(chosenDetailsRef.current, { xPercent: -100 })
        .to(cards, {
          opacity: 1,
          stagger: {
            amount: 0.2,
            from: cards.indexOf(activeItem),
            grid: "auto",
          },
        })
        .to(appRef.current, { backgroundColor: "#0d1635" }, "<");

      Flip.from(state, {
        scale: true,
        duration: 0.5,
        delay: 0.2,
        onInterrupt: () => {
          tl.kill();
        },
      }).set(chosenRef.current, { visibility: "hidden" });

      setActiveItem(null);
    }
  });

  // Intro animation
  React.useEffect(() => {
    if (imagesLoaded !== boardMembers.length) return;
    const cards = gsap.utils.toArray(".user-card");
    gsap.to(".app", { opacity: 1, duration: 0.2 });
    gsap.from(cards, { autoAlpha: 0, stagger: 0.04, yPercent: 30 });
  }, [imagesLoaded]);

  // Fallback to show component if images don't load properly
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (appRef.current) {
        gsap.to(".app", { opacity: 1, duration: 0.2 });
      }
    }, 2000); // Show after 2 seconds regardless

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    gsap.set(chosenDetailsRef.current, { xPercent: -100 });
  }, []);

  return (
    <div id="team-section" className="app relative min-h-screen bg-[#0d1635]" ref={appRef}>
      <div className="xl:max-w-[70%] mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#117f60] to-[#e47a5a] rounded-full mb-6"
          >
            <Crown className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Board of Directors
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-[#e2dedc] max-w-3xl mx-auto mb-8"
          >
            Meet our distinguished board members who bring decades of experience in finance, technology, and governance to guide DHS Exchange's strategic vision.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, label: "Board Members", value: "6" },
              { icon: Award, label: "Years Combined Experience", value: "100+" },
              { icon: Building2, label: "Industry Expertise", value: "5" },
              { icon: Shield, label: "Regulatory Compliance", value: "100%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg p-4 border border-[#117f60]/20 hover:border-[#117f60]/40 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-[#117f60] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-[#e2dedc]/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Board Members Grid */}
        <div className="card-board grid grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-16 max-w-full">
           {boardMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.6 }}
              className="user-card cursor-pointer rounded-xl overflow-hidden shadow-2xl hover:shadow-[#117f60]/20 transition-all duration-300 h-[21rem] relative group border border-[#117f60]/10 hover:border-[#117f60]/30"
              data-title={member.title}
              data-secondary={member.details.secondary}
              data-text={member.details.text}
              onClick={(e) => showDetails(e.currentTarget)}
            >
              <div className="relative h-full">
                <img
                  src={member.details.image}
                  alt={member.title}
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  onLoad={() => setImagesLoaded((prev) => prev + 1)}
                  width={300}
                  height={300}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1635]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Position Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#117f60] text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  {i === 0 ? 'Chairman' : 'Board Member'}
                </div>
                
                {/* Name and Position on Hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-bold text-lg mb-1">{member.title}</h3>
                  <p className="text-sm text-[#e2dedc]/80">{member.details.secondary}</p>
                </div>
                
                {/* Click to View More */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#e47a5a] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className="chosen fixed left-1/2 flex flex-row invisible"
          ref={chosenRef}
        >
          <div className="chosen__image h-[47.5vmin] w-[47.5vmin]">
            <img
              ref={chosenImageRef}
              onClick={() => hideDetails()}
              className="relative z-10"
            />
          </div>
           <div
             className="chosen__details bg-gradient-to-br from-[#0d1635] to-[#272c2d] p-8 text-[1.75vmin] h-[47.5vmin] w-[47.5vmin] flex-grow box-border overflow-hidden border-l border-[#117f60]/30"
             ref={chosenDetailsRef}
           >
             <div className="flex items-center gap-3 mb-4">
               <div className="w-8 h-8 bg-[#117f60] rounded-full flex items-center justify-center">
                 <Crown className="w-4 h-4 text-white" />
               </div>
               <div
                 className="chosen__details__name text-white text-[3.5vmin] font-bold"
                 ref={chosenNameRef}
               >
                 Placeholder Name
               </div>
             </div>
             
             <div className="flex items-center gap-2 mb-6">
               <Building2 className="w-4 h-4 text-[#e47a5a]" />
               <div
                 className="chosen__details__aliases text-[#e47a5a] font-semibold"
                 ref={chosenAliasesRef}
               >
                 Placeholder Position
               </div>
             </div>
             
             <div className="border-t border-[#117f60]/20 pt-4">
               <div className="flex items-start gap-2 mb-3">
                 <Award className="w-4 h-4 text-[#117f60] mt-1 flex-shrink-0" />
                 <span className="text-[#117f60] font-semibold text-[2vmin]">Experience & Background</span>
               </div>
               <div
                 className="chosen__details__description text-[#e2dedc] leading-relaxed text-[1.6vmin]"
                 ref={chosenDescriptionRef}
               >
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit...
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
