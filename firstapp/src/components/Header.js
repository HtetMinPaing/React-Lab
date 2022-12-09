const Header = props =>{

    const style={
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "5rem",
        margin:"15rem",
    }

    const box={
        flex:"1 1 40rem",
        fontSize:"2rem",
    }
    return(
        <section style={style}>
            <div style={box}>
                <h2>This is the Header Section</h2>
                <p>Promotion will be announced here. Not only Promotion, also special events, party, sales, 
                and other important announcement will also be announced here.</p>
            </div>
            <div style={box}>
                <h2>This is the Header Section</h2>
                <p>Promotion will be announced here. Not only Promotion, also special events, party, sales, 
                and other important announcement will also be announced here.</p>
            </div>
        </section>
    );
}

export {Header}