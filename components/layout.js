import Footer from "./footer"

export default function main({children}){
    return(
        <>
            <main>{children}</main>
            <Footer/>
        </>
    )
}