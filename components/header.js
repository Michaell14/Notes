import styles from "./header.module.css"

function Header(){
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>Notes</h1>
                <h4 className={styles.name}>M.L</h4>
            </header>
        
        </>


    )
}


export default Header;