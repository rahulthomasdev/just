
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-4 sticky bottom-0">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Just. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
