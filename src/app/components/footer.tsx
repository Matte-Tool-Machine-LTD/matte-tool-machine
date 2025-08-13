const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-row items-center justify-center">
                        <img src="/mtm_logo_full.png" alt="Matte Tool & Machine Logo" className="h-20 mr-2 ml-4" />
                        <div className="flex flex-col">
                            <p className="font-bold">Matte Tool & Machine LTD. {new Date().getFullYear()}</p>
                            <p>All rights reserved.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="font-bold">Contact Us</h3>
                        <p>Contact: info@matte-tool.com</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;