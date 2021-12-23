import styles from "./header.module.css"

function Header(){
    return(
        <>
            <header className={styles.header}>
                <p className={styles.title}>Notes</p>
                <p className={styles.name}>Michael Li</p>
            </header>
        
        </>


    )
}


export default Header;