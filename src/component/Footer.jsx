import React from 'react';

const Footer = () => {
    return (
        <>

            <footer className="footer flex-wrap sm:footer-horizontal container m-auto text-neutral-content p-10">
                <nav>
                    <h2 className='font-bold my-2 text-3xl text-white'>DigiTool</h2>
                    <p className='w-50 text-[15px]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documantetion</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                        <h6 className="footer-title">Social Links</h6>
                    <div className='flex gap-5'>
                        <span className='fa-brands fa-2x fa-facebook'></span>
                        <span className='fa-brands fa-2x fa-instagram'></span>
                        <span className='fa-brands fa-2x fa-x'></span>
                    </div>
                </nav>
            </footer>


            <footer className="footer border-t border-gray-500 sm:footer-horizontal bg-neutral container m-auto text-neutral-content items-center pt-5 p-10">
                <aside className="grid-flow-col items-center">
                   
                    <p>Copyright © {new Date().getFullYear()} DigitalTool - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookie</a>
                </nav>
            </footer>
        </>
    );
};

export default Footer;