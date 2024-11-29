import React from 'react'
import Nav from './nav'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Nav />
            <div className="bg-base-900 h-screen grid  dark:bg-zinc-900">
                <div className="grid">
                    <div>
                        {children}
                    </div>
                </div>
                {/* <footer className="footer footer-center bg-blue-700 text-white  p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Angelo Paredes</p>
                    </aside>
                </footer> */}
            </div>
        </div>

    )
}

export default Layout