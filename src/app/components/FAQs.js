"use client"
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Why should I consider owning an NFT, and how does Sphere enhance this experience?",
            answer: "NFTs provide a unique digital ownership experience. Trove enhances this by offering a curated selection of exclusive digital art and providing a secure platform for seamless transactions and community engagement."
        },
        {
            question: "Is Sphere secure for transactions and ownership?",
            answer: "Yes, Sphere uses advanced blockchain technology and encryption to ensure all transactions and ownership data are secure."
        },
        {
            question: "How do I start collecting and selling on Sphere?",
            answer: "To start collecting and selling on Sphere, sign up for an account, browse available NFTs, and follow the easy-to-use platform guidelines to buy or sell digital assets."
        },
        {
            question: "What sets Sphere apart from other NFT platforms?",
            answer: "Sphere offers an exclusive selection of digital art, a secure and user-friendly interface, and strong community engagement features, setting it apart from other platforms."
        },
        {
            question: "How can I connect with other creators and collectors on Sphere?",
            answer: "Sphere includes social features that allow you to follow, message, and interact with other creators and collectors within the community."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-[#151329] rounded-3xl border-[1px] border-[#282545]">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 font-inter">
                    <div
                        className="flex  items-center m-4  text-white rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div>
                        <FaPlus className={`mr-5 w-[20px] transition transition-500 text-gray-400 ${openIndex === index && 'rotate-45'}`} />
                        </div>
                        <p >{faq.question}</p>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                    >
                        <div className="m-4 text-white rounded-b-lg flex items-center">
                            <FaPlus className='mr-5 w-[30px] invisible' />
                            <p >{faq.answer}</p>
                        </div>
                    </div>
                    <div className='bg-gray-400 w-full h-[1px]'>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQs;
