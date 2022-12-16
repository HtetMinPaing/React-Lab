function Promo () {
    
    const data = {
        heading: "99% off all items!",
        callToAction: "Everything must go"
    }

    return (
        <div>
            <PromoHeading 
            heading={data.heading}
            callToAction={data.callToAction}
            />
        </div>
    )
}

function PromoHeading(props){
    return(
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.callToAction}</h2>
        </div>
    )
}

export default Promo;