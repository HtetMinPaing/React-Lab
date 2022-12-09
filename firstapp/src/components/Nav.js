const Nav = props =>{

    const style={
        position: "fixed",
        top: "0", left: "0", right: "0",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
    }
    return(
    <div style={style}>
        <a href="#" class="logo">food</a>
        <nav class="navbar">
            <a href="#home">home</a>
            <a href="#speciality">speciality</a>
            <a href="#popular">popular</a>
            <a href="#gallery">gallery</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
        </nav>
    </div>
    );
}

export {Nav}