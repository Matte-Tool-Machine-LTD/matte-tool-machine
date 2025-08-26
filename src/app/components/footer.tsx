import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <Image src="/mtm_logo_full.png" alt="Matte Tool & Machine Logo" width={32} height={32} className="h-20 mr-2 ml-4 mb-4" />
                            <p className="font-bold">Matte Tool & Machine LTD. {new Date().getFullYear()}</p>
                            <p>All rights reserved.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="font-bold text-2xl">Contact Us</h3>
                        {/* LinkedIn Icon and Link */}
                        <div className="my-2 flex items-center gap-2">
                        <a href="https://www.linkedin.com/company/matte-tool-&-machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                            <span>Connect on LinkedIn</span>
                        </a>
                        </div>
                        <p>Contact: mattetool@bellnet.ca</p>
                        <p>Phone: (905) 669-2797</p>
                        <p>Fax: (905) 669-0797</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;